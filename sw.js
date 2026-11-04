// Serve la pagina solo da una copia controllata: ogni file deve avere l'impronta scritta in una
// versione firmata con la chiave che sta sul PC. Mai i dati, che stanno cifrati in IndexedDB.
// Le richieste a Google passano sempre dalla rete.
const PUB = {"crv":"P-256","kty":"EC","x":"WwJBCCM4J-GXoQNmRvSSGWq4FrHFvldnFKdpxinByek","y":"1zbfUuC91eds9ILba5nQHuknAgkz65ROMZdXXaweYNI"};
const PREFIX = 'dash-';
const base = () => self.registration.scope;
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function readSigned() {
  const [m, s] = await Promise.all(['versione.json', 'versione.sig'].map((f) => fetch(base() + f, { cache: 'no-store' })));
  if (!m.ok || !s.ok) throw new Error('versione assente');
  const text = await m.text();
  const key = await crypto.subtle.importKey('jwk', PUB, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
  const ok = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, key, unb64((await s.text()).trim()), new TextEncoder().encode(text));
  if (!ok) throw new Error('firma non valida');
  return { text, manifest: JSON.parse(text) };
}

async function currentCache() {
  const names = (await caches.keys()).filter((n) => n.startsWith(PREFIX)).sort((a, b) => Number(b.slice(PREFIX.length)) - Number(a.slice(PREFIX.length)));
  for (const n of names) {
    const c = await caches.open(n);
    if (await c.match(base() + 'versione.json')) return { cache: c, build: Number(n.slice(PREFIX.length)) };
  }
  return null;
}

/** Scarica tutti i file di una versione firmata: se uno non corrisponde, non cambia nulla. */
async function install() {
  const { text, manifest } = await readSigned();
  const now = await currentCache();
  if (now && manifest.build <= now.build) return now.build;
  const name = PREFIX + manifest.build;
  await caches.delete(name);
  const cache = await caches.open(name);
  try {
    for (const [rel, hash] of Object.entries(manifest.files)) {
      if (rel === 'sw.js') continue;
      const r = await fetch(base() + rel, { cache: 'no-store' });
      if (!r.ok) throw new Error(`${rel} assente`);
      const body = await r.clone().arrayBuffer();
      const got = btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.digest('SHA-256', body))));
      if (got !== hash) throw new Error(`${rel} diverso dalla versione firmata`);
      await cache.put(base() + rel, r);
    }
    await cache.put(base() + 'versione.json', new Response(text, { headers: { 'Content-Type': 'application/json' } }));
  } catch (e) {
    await caches.delete(name);
    throw e;
  }
  for (const n of await caches.keys()) if (n !== name) await caches.delete(n);
  return manifest.build;
}

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(install().catch(() => {}));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('message', (e) => {
  if (!e.data || e.data.type !== 'aggiorna' || !e.ports[0]) return;
  e.waitUntil(install().then((build) => e.ports[0].postMessage({ build })).catch((err) => e.ports[0].postMessage({ error: String(err.message || err) })));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(base())) return;
  const rel = url.pathname.slice(new URL(base()).pathname.length);
  if (rel === 'sw.js' || rel === 'versione.json' || rel === 'versione.sig') return;
  e.respondWith((async () => {
    const now = await currentCache();
    if (now) {
      const hit = await now.cache.match(base() + (e.request.mode === 'navigate' || rel === '' ? 'index.html' : rel));
      if (hit) return hit;
    }
    return fetch(e.request);
  })());
});
