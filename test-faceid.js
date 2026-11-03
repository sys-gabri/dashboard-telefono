// Test di Face ID con WebAuthn PRF. Non usa dati reali e non fa richieste di rete:
// crea una passkey di prova, ne ricava una chiave, cifra una frase e la rilegge dopo la riapertura.

const $ = (id) => document.getElementById(id);
const logEl = $('log');
const enc = new TextEncoder();
const dec = new TextDecoder();
const PHRASE = 'frase di prova della dashboard';
const facts = {};

const log = (msg) => { logEl.textContent += msg + '\n'; };
const verdict = (msg, cls = '') => { $('verdict').textContent = msg; $('verdict').className = cls; };
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

function db() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('test-faceid', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function kv(mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const tx = d.transaction('kv', mode);
    const r = fn(tx.objectStore('kv'));
    tx.oncomplete = () => res(r && r.result);
    tx.onerror = () => rej(tx.error);
  });
}
const getKv = (k) => kv('readonly', (s) => s.get(k));
const setKv = (k, v) => kv('readwrite', (s) => s.put(v, k));
const delKv = (k) => kv('readwrite', (s) => s.delete(k));

const prfSalt = () => crypto.subtle.digest('SHA-256', enc.encode('dashboard-test-faceid-v1'));

async function aesKey(prfOutput) {
  const base = await crypto.subtle.importKey('raw', prfOutput, 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(32), info: enc.encode('dashboard-test-faceid') },
    base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']
  );
}

async function info() {
  facts.sistema = navigator.userAgent;
  facts.app_sulla_home = !!navigator.standalone || matchMedia('(display-mode: standalone)').matches;
  facts.contesto_sicuro = isSecureContext;
  facts.webauthn = typeof PublicKeyCredential === 'function';
  if (facts.webauthn && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
    facts.face_id_o_touch_id = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().catch((e) => 'errore ' + e.name);
  }
  if (facts.webauthn && PublicKeyCredential.getClientCapabilities) {
    const c = await PublicKeyCredential.getClientCapabilities().catch(() => null);
    if (c) facts.prf_dichiarato = c['extension:prf'] ?? 'non indicato';
  }
  log(`Aperta come app sulla Home: ${facts.app_sulla_home ? 'sì' : 'no'}`);
  log(`Passkey disponibili: ${facts.webauthn ? 'sì' : 'no'}`);
  log(`Face ID o Touch ID: ${facts.face_id_o_touch_id ?? 'non indicato'}`);
  log(`PRF dichiarato: ${facts.prf_dichiarato ?? 'non indicato'}`);
  const saved = await getKv('blob');
  log(saved ? 'Frase di prova già salvata qui: tocca 2 per rileggerla.' : 'Nessuna frase salvata qui.');
}

$('create').addEventListener('click', async () => {
  try {
    log('\n— Creo la passkey');
    const cred = await navigator.credentials.create({ publicKey: {
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rp: { id: location.hostname, name: 'Dashboard test' },
      user: { id: crypto.getRandomValues(new Uint8Array(16)), name: 'test-face-id', displayName: 'Test Face ID' },
      pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
      authenticatorSelection: { authenticatorAttachment: 'platform', residentKey: 'required', userVerification: 'required' },
      extensions: { prf: { eval: { first: await prfSalt() } } }
    } });
    const ext = cred.getClientExtensionResults();
    facts.creata = true;
    facts.prf_alla_creazione = !!(ext.prf && ext.prf.enabled);
    await setKv('credId', b64(cred.rawId));
    log(`Passkey creata. PRF attivo: ${facts.prf_alla_creazione ? 'sì' : 'no'}`);
    verdict(facts.prf_alla_creazione ? 'Passkey creata: ora tocca 2' : 'Passkey creata ma senza PRF: tocca 2 per conferma', facts.prf_alla_creazione ? '' : 'bad');
  } catch (e) {
    facts.errore_creazione = `${e.name}: ${e.message}`;
    log('Errore: ' + facts.errore_creazione);
    verdict('Creazione non riuscita', 'bad');
  }
});

$('unlock').addEventListener('click', async () => {
  try {
    log('\n— Sblocco');
    const credId = await getKv('credId');
    const a = await navigator.credentials.get({ publicKey: {
      challenge: crypto.getRandomValues(new Uint8Array(32)),
      rpId: location.hostname,
      userVerification: 'required',
      allowCredentials: credId ? [{ type: 'public-key', id: unb64(credId) }] : [],
      extensions: { prf: { eval: { first: await prfSalt() } } }
    } });
    const first = a.getClientExtensionResults().prf?.results?.first;
    facts.prf_allo_sblocco = !!first;
    if (!first) {
      log('Face ID riuscito, ma nessuna chiave restituita (PRF assente).');
      verdict('NON adatto: Face ID non fornisce la chiave', 'bad');
      return;
    }
    const key = await aesKey(first);
    const saved = await getKv('blob');
    if (!saved) {
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(PHRASE));
      await setKv('blob', { iv: b64(iv), ct: b64(ct) });
      facts.frase_cifrata = true;
      log('Chiave ricavata e frase cifrata. Chiudi del tutto la pagina, riaprila e tocca 2.');
      verdict('Prima parte riuscita: chiudi, riapri e tocca 2', '');
      return;
    }
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(saved.iv) }, key, unb64(saved.ct));
    facts.frase_riletta = dec.decode(pt) === PHRASE;
    log(facts.frase_riletta ? 'Frase riletta con la stessa chiave.' : 'Frase diversa da quella attesa.');
    const standalone = facts.app_sulla_home;
    verdict(facts.frase_riletta ? (standalone ? 'RIUSCITO come app sulla Home' : 'Riuscito in Safari: ora prova dall\'app sulla Home') : 'Non riuscito', facts.frase_riletta ? 'ok' : 'bad');
  } catch (e) {
    facts.errore_sblocco = `${e.name}: ${e.message}`;
    log('Errore: ' + facts.errore_sblocco);
    verdict('Sblocco non riuscito', 'bad');
  }
});

$('copy').addEventListener('click', async () => {
  const text = JSON.stringify(facts, null, 1);
  try { await navigator.clipboard.writeText(text); log('\nRisultato copiato.'); } catch { log('\n' + text); }
});

$('reset').addEventListener('click', async () => {
  await delKv('blob');
  log('\nFrase di prova cancellata.');
  verdict('Azzerato');
});

info().catch((e) => log('Errore iniziale: ' + e));
