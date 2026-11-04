const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./app-BT7YaCw7.js","./index-DPVZV3cY.js","./index-T1EjPyvN.css","./app-I8jMOq2D.css"])))=>i.map(i=>d[i]);
import{r as F,S as d,s as T,u as f,p as R,f as O,c as Fn,n as Jt,m as Q,t as k,a as N,e as r,b as vt,d as K,g as Se,h as z,i as nt,j as A,R as Ye,k as v,l as P,o as ct,q as At,v as Mt,w as h,x as Bn,y as Wt,z as bi,A as rt,B as U,C as Ae,D as Vn,E as Un,F as E,G as x,H as _n,I as W,J as xe,K as Gn,L as Gt,M as Z,N as ut,O as Wn,P as Hn,Q as te,T as Qn,U as Ie,V as ee,W as Yn,X as vi,Y as da,Z as Ke,_ as ua,$ as Ht,a0 as Kn,a1 as hi,a2 as pa,a3 as pe,a4 as ma,a5 as Xn,a6 as Ea,a7 as Zn,a8 as Jn,a9 as Xe,aa as st,ab as xt,ac as ts,ad as gt,ae as es,af as Qt,ag as ga,ah as Ce,ai as fi,aj as ze,ak as $i,al as Ot,am as as,an as is,ao as yi,ap as wi,aq as ki,ar as Si,as as pt,at as ns,au as me,av as H,aw as ss,ax as os,ay as ja,az as kt,aA as Ai,aB as jt,aC as Yt,aD as Kt,aE as bt,aF as ls,aG as ge,aH as Ft,aI as cs,aJ as rs,aK as et,aL as ds,aM as us,aN as xi,aO as be,aP as Ii,aQ as Ne,aR as Ci,aS as zi,aT as Ze,aU as Ei,aV as re,aW as ps,aX as ms,aY as gs,aZ as bs,a_ as vs,a$ as hs,b0 as fs,b1 as $s,b2 as ys,b3 as ji,b4 as ws,b5 as ks,b6 as Di,b7 as Ss,b8 as ba,b9 as qi,ba as As,bb as Ni,bc as de,bd as va,be as xs,bf as Mi,bg as Is,bh as Cs,bi as Oi,bj as zs,bk as Xt,bl as Es,bm as Dt,bn as js,bo as Bt,bp as Ds,bq as qs,br as Je,bs as Ns,bt as Ms,bu as Os,bv as Ts,bw as Ps,bx as Ls,by as Ti,bz as Rs,bA as Pi,bB as ta,bC as Da,bD as Fs,bE as Bs,bF as Li,bG as Vs,bH as qa,bI as ea,bJ as Us,bK as $t,bL as _s,bM as Gs}from"./app-BT7YaCw7.js";import{_ as Na}from"./index-DPVZV3cY.js";F("common",{actions:{"toggle-todo"(t){f(e=>{const a=e.todos.find(i=>i.id===t.dataset.id);a&&(a.done=!a.done,a.doneAt=a.done?k():null,N(a))})},"del-todo"(t){f(e=>{e.todos=e.todos.filter(a=>a.id!==t.dataset.id),Q(e,t.dataset.id)})},"del-tx"(t){const e=d.data.transactions.find(a=>a.id===t.dataset.id);e&&f(a=>{if(a.transactions=a.transactions.filter(i=>i.id!==e.id&&!(e.pairId&&i.pairId===e.pairId)),a.ops=a.ops.filter(i=>i.txId!==e.id),e.pairId&&(a.goalMoves=a.goalMoves.filter(i=>i.pairId!==e.pairId)),e.recurringId){const i=a.recurring.find(n=>n.id===e.recurringId);i&&i.done&&i.done[e.date]&&(i.done=Object.assign({},i.done),delete i.done[e.date])}})},async copy(t){try{await navigator.clipboard.writeText(t.dataset.text),T("Copiato")}catch{T("Copia non riuscita")}f(()=>{})}},forms:{"add-todo"(t){const e=String(t.get("text")||"").trim();e&&(f(a=>a.todos.push(Jt({text:e,due:t.get("due")||null}))),O("#todo-text"))},"confirm-rec"(t,e,a){const i=d.data.recurring.find(s=>s.id===t.get("id")),n=t.get("date");if(!i||!n)return;if(a&&a.name==="skip"){T(`${i.name}: saltato per questa volta`),f(()=>{i.done=Object.assign({},i.done,{[n]:"skip"})});return}const o=R(t.get("qty")||"");T(`${i.name} registrato`),f(s=>Fn(s,i,n,o))}}});function G(t,e,a=""){return`
    <header class="head">
      <div><div class="date">${r(t)}</div><h1>${r(e)}</h1></div>
      ${a?`<div class="row">${a}</div>`:""}
    </header>
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}`}function j(t,e,a="",i=""){return`<div class="metric"><div class="label">${r(t)}</div><div class="value ${a}">${e}</div>${i?`<div class="hint">${i}</div>`:""}</div>`}function at(t,{includeArchived:e=!1}={}){const a=e?d.data.accounts:vt(d.data),i=t||K(d.data)?.id;return Se()?a.filter(n=>n.id===i).map(n=>`<option value="${n.id}" selected>Conto principale</option>`).join(""):a.map(n=>`<option value="${n.id}" ${n.id===i?"selected":""}>${r(n.name)}${n.bank?" · "+r(n.bank):""}</option>`).join("")}function Lt(t,e,a=!1){const i=t==="in"?d.data.categories.in:d.data.categories.out,n=a?["Giroconto","Investimenti"]:[];return[...i,...n].map(o=>`<option ${o===e?"selected":""}>${r(o)}</option>`).join("")}function Ri(t,e,a=null,{limit:i=0}={}){let n=t.map(([s,l,c])=>({name:s,amt:l,count:c,b:a&&a[s]?a[s]:0}));if(a)for(const[s,l]of Object.entries(a))l>0&&!n.some(c=>c.name===s)&&n.push({name:s,amt:0,count:0,b:l});if(i&&(n=n.filter(s=>s.amt>0||Me(s)>=.8).sort((s,l)=>(Me(l)>=.8)-(Me(s)>=.8)||l.amt-s.amt).slice(0,i)),!n.length)return'<div class="empty">Nessuna spesa registrata.</div>';const o=Math.max(...n.filter(s=>!s.b).map(s=>s.amt),1);return n.map(s=>{const l=s.b?s.amt/s.b:0,c=s.b?l>1?"over":l>=.8?"near":"cat":"cat",u=s.b?Math.min(100,Math.round(l*100)):Math.round(s.amt/o*100),p=s.b?`<span class="money">${v(s.amt)} <span class="hint">di ${v(s.b)}</span>${l>1?' <span class="tag bad">oltre</span>':l>=.8?' <span class="tag warn">quasi</span>':""}</span>`:`<span class="money">${v(s.amt)}</span>`;return`
    <div>
      <div class="cat-row"><span>${r(s.name)}${s.count?` <span class="hint">· ${s.count}</span>`:""}</span>${p}</div>
      <div class="progress ${c}" ${s.b?`role="progressbar" aria-valuenow="${Math.round(l*100)}" aria-valuemin="0" aria-valuemax="100" aria-label="${r(s.name)}: ${Math.round(l*100)}% del limite"`:""}><div style="width:${u}%"></div></div>
    </div>`}).join("")+""}const Me=t=>t.b?t.amt/t.b:-1;function Fi(t,{showAccount:e=!1,del:a=!1}={}){const i=t.transfer?"gir":t.type==="in"?"in":"",n=[t.category,e?nt(d.data,t.accountId):""].filter(Boolean).join(" · ");return`
    <div class="item">
      <div class="when">${r(z(t.date))}</div>
      <div class="text"><div>${r(t.note||t.category)}</div><div class="hint">${r(n)}</div></div>
      <span class="money ${i}">${ct(t.type==="in"?t.amount:-t.amount)}</span>
      ${a?`<button class="icon-btn" data-action="del-tx" data-id="${t.id}" aria-label="Elimina movimento ${r(t.note||"")}">${A("trash",16)}</button>`:""}
    </div>`}function ha(t){const e=Ye[t]||Ye.out;return`<span class="tag ${e.tagCls}">${r(e.label)}</span>`}function ae(t){return t.type==="in"?"+ "+v(t.amount):t.type==="out"?"− "+v(t.amount):v(t.amount)}function Ws(t){if(!t.due)return null;const e=k();return t.due<e?{cls:"bad",label:"scaduta"}:t.due===e?{cls:"warn",label:"oggi"}:t.due===P(e,1)?{cls:"",label:"domani"}:{cls:"",label:z(t.due)}}function ve(t){return[...t].sort((e,a)=>(e.due||"9999").localeCompare(a.due||"9999")||(e.time||"99").localeCompare(a.time||"99")||(e.createdAt||"").localeCompare(a.createdAt||""))}function Zt(t){const e=t.done?null:Ws(t);return`
    <div class="item ${t.done?"done":""}">
      <button class="box ${t.done?"on":""}" data-action="toggle-todo" data-id="${t.id}" aria-pressed="${t.done}" aria-label="Segna come fatto: ${r(t.text)}">${t.done?A("check",14,3):""}</button>
      <span class="text">${r(t.text)}</span>
      ${e?`<span class="tag ${e.cls}">${r(e.label)}${t.time?" · "+r(t.time):""}</span>`:""}
      <button class="icon-btn" data-action="del-todo" data-id="${t.id}" aria-label="Elimina ${r(t.text)}">${A("trash",16)}</button>
    </div>`}function Bi(t){return`
    <form data-form="add-todo" class="row">
      <label class="sr-only" for="todo-text">Nuova attività</label>
      <input class="input grow" id="todo-text" name="text" placeholder="Nuova attività" required>
      <label class="sr-only" for="todo-due">Scadenza</label><input class="input date" id="todo-due" type="date" name="due">
      <button class="btn primary" type="submit">Aggiungi</button>
    </form>`}function fa({r:t,date:e}){const a=t.type==="pac";return`
    <form class="item" data-form="confirm-rec">
      <input type="hidden" name="id" value="${t.id}"><input type="hidden" name="date" value="${e}">
      <div class="when">${r(z(e))}</div>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${ha(t.type)} ${r(nt(d.data,t.accountId))}</div></div>
      ${a?`<label class="sr-only" for="q-${t.id}-${e}">Quote acquistate (facoltativo)</label><input class="input qty" id="q-${t.id}-${e}" name="qty" inputmode="decimal" placeholder="quote">`:""}
      <span class="money">${ae(t)}</span>
      <button class="btn small" type="submit">Conferma</button>
      <button class="icon-btn" type="submit" name="skip" value="1" aria-label="Salta questa volta">${A("right",16)}</button>
    </form>`}const Hs=3*36e5,Qs=t=>{const e=new Date(Date.now()-Hs).toISOString();return t.shopping.filter(a=>!a.need&&a.boughtAt&&a.boughtAt>=e)};function Ys(){return`<datalist id="shop-areas">${d.data.shopAreas.map(t=>`<option value="${r(t)}">`).join("")}</datalist>`}function Oe(t,e){t.shopAreas.includes(e)||t.shopAreas.splice(Math.max(0,t.shopAreas.length-1),0,e)}function Ks(t){return bi(t,Wt(t)).map(([e,a])=>`${e}:
`+a.map(i=>`- ${i.name}${i.note?" ("+i.note+")":""}`).join(`
`)).join(`

`)}function Xs(t){const e=!t.need;return`
    <div class="item ${e?"done":""}" data-name="${r(t.name.toLowerCase())}">
      <button class="box ${e?"on":""}" data-action="${e?"shop-undo":"shop-buy"}" data-id="${t.id}" aria-pressed="${e}"
        aria-label="${e?"Rimetti da prendere":"Preso"}: ${r(t.name)}">${e?A("check",14,3):""}</button>
      <div class="text"><div>${r(t.name)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}</div>
      ${t.once?'<span class="tag">una volta</span>':""}
    </div>`}function Zs(t){return`
    <div class="item" data-name="${r(t.name.toLowerCase())}">
      <div class="text"><div>${r(t.name)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}</div>
      ${t.need?`<span class="tag warn">da prendere</span><button class="btn small" data-action="shop-have" data-id="${t.id}">Ce l'ho</button>`:`<button class="btn small" data-action="shop-need" data-id="${t.id}" aria-label="Finito: ${r(t.name)}">Finito</button>`}
      <button class="icon-btn" data-action="shop-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${A("edit",16)}</button>
      <button class="icon-btn" data-action="shop-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button>
    </div>`}function Ma(t,e){return bi(d.data,t).map(([a,i])=>`
    <div class="shop-group">
      <h3 class="group-title">${r(a)} <span class="hint">${i.length}</span></h3>
      <div class="list">${i.map(e).join("")}</div>
    </div>`).join("")}function Vi(t="shop-quick"){return`
    <form data-form="shop-quick" class="row">
      <label class="sr-only" for="${t}">Aggiungi alla spesa</label>
      <input class="input grow" id="${t}" name="name" placeholder="Cosa è finito?" autocomplete="off" required>
      <button class="btn" type="submit">${A("plus",16)}Da prendere</button>
    </form>`}function Js(t=14){const e=Wt(d.data).sort((a,i)=>a.name.localeCompare(i.name,"it"));return e.length?`<div class="shop-chips">${e.slice(0,t).map(a=>`
    <button class="chip" data-action="shop-buy" data-id="${a.id}" title="Segna come preso">${r(a.name)}</button>`).join("")}
    ${e.length>t?`<span class="hint">e altre ${e.length-t}</span>`:""}</div>`:'<div class="empty">Non manca niente.</div>'}function to(){const t=d.data,e=d.ui.shopTab||"lista",a=Wt(t),i=d.ui.shopEdit?t.shopping.find(u=>u.id===d.ui.shopEdit):null,n=t.shopping.filter(u=>!u.once||u.need),o=Qs(t),s=`
    <section class="card">
      <h2>${i?"Modifica "+r(i.name):"Aggiungi"}</h2>
      <form data-form="shop-save" class="form-grid">
        <input type="hidden" name="id" value="${i?i.id:""}">
        <label class="field">Cosa<input class="input" id="shop-name" name="name" value="${r(i?i.name:"")}" autocomplete="off" required></label>
        <label class="field">Reparto<input class="input" name="area" list="shop-areas" value="${r(i?i.area:d.ui.shopLastArea||"")}" placeholder="es. Frigo" autocomplete="off"></label>
        <label class="field">Nota<input class="input" name="note" value="${r(i?i.note:"")}" placeholder="es. senza lattosio, 2 confezioni"></label>
        ${i?"":'<label class="check small"><input type="checkbox" name="once" value="1">Solo questa volta (non tenerlo in elenco dopo)</label>'}
        <div class="row">
          ${i?'<button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-action="shop-cancel">Annulla</button>':`<button class="btn primary" type="submit" name="need" value="1">Da prendere</button><button class="btn" type="submit" name="need" value="0">Ce l'ho già</button>`}
        </div>
      </form>
      ${Ys()}
    </section>`,l=`
    <div class="pills small" role="tablist">
      <button class="chip ${e==="lista"?"":"off"}" role="tab" aria-selected="${e==="lista"}" data-action="shop-tab" data-tab="lista">Da prendere · ${a.length}</button>
      <button class="chip ${e==="tutto"?"":"off"}" role="tab" aria-selected="${e==="tutto"}" data-action="shop-tab" data-tab="tutto">Tutto quello che uso · ${n.length}</button>
    </div>`;let c;if(e==="lista"){const u=[...a,...o];c=`
      <section class="card">
        <div class="card-head"><h2>Al supermercato</h2>
          ${a.length?'<button class="link" data-action="shop-copy">Copia la lista</button>':""}</div>
        ${u.length?Ma(u,Xs):'<div class="empty">Non manca niente. Quando una cosa finisce, segnala da "Tutto quello che uso" o scrivila qui sotto.</div>'}
        ${o.length?`<div class="hint">Le cose spuntate tornano in "ce l'ho". Restano qui barrate per qualche ora, nel caso ti sia sbagliato.</div>`:""}
        ${Vi("shop-quick-list")}
      </section>`}else c=`
      <section class="card">
        <div class="card-head"><h2>Tutto quello che uso</h2>
          <label class="sr-only" for="shop-filter">Cerca</label>
          <input class="input slim" id="shop-filter" type="search" placeholder="Cerca…" value="${r(d.ui.shopFilter||"")}" autocomplete="off">
        </div>
        ${n.length?Ma(n,Zs):'<div class="empty">Elenco vuoto. Aggiungi le cose che compri di solito: latte, caffè, detersivo…</div>'}
        <div class="empty" id="shop-nores" hidden>Nessuna voce trovata.</div>
      </section>`;return`
    ${G(a.length?`${a.length} da prendere`:"Non manca niente","Spesa",l)}
    <div class="split">
      <div class="grow-2 stack stack-lg">${c}</div>
      <div class="grow-1 stack stack-lg">${s}</div>
    </div>`}function Oa(){const t=document.getElementById("shop-filter");if(!t)return;const e=t.value.trim().toLowerCase();let a=0;for(const n of document.querySelectorAll(".shop-group")){let o=0;for(const s of n.querySelectorAll(".item[data-name]")){const l=!e||s.dataset.name.includes(e);s.hidden=!l,l&&o++}n.hidden=o===0,a+=o}const i=document.getElementById("shop-nores");i&&(i.hidden=a>0||!e)}const Ct=t=>d.data.shopping.find(e=>e.id===t);F("spesa",{render:to,afterRender(){const t=document.getElementById("shop-filter");t&&(t.addEventListener("input",()=>{d.ui.shopFilter=t.value,Oa()}),Oa())},actions:{"shop-tab"(t){d.ui.shopTab=t.dataset.tab,h("spesa")},"shop-buy"(t){const e=Ct(t.dataset.id);e&&f(a=>Bn(a,e))},"shop-undo"(t){const e=Ct(t.dataset.id);e&&f(()=>{e.need=!0,e.boughtAt=null,N(e)})},"shop-need"(t){const e=Ct(t.dataset.id);e&&(T(`${e.name}: da prendere`),f(()=>{e.need=!0,N(e)}))},"shop-have"(t){const e=Ct(t.dataset.id);e&&f(()=>{e.need=!1,N(e)})},"shop-edit"(t){d.ui.shopEdit=t.dataset.id,h("spesa"),O("#shop-name")},"shop-cancel"(){d.ui.shopEdit=null,h("spesa")},"shop-del"(t){const e=Ct(t.dataset.id);!e||!window.confirm(`Togliere "${e.name}" dall'elenco?`)||(d.ui.shopEdit===e.id&&(d.ui.shopEdit=null),f(a=>{a.shopping=a.shopping.filter(i=>i.id!==e.id),Q(a,e.id)}))},async"shop-copy"(){let t="Lista copiata";try{await navigator.clipboard.writeText(Ks(d.data))}catch{t="Copia non riuscita"}h("spesa",{},t)}},forms:{"shop-save"(t,e,a){const i=String(t.get("name")||"").trim();if(!i)return;const n=t.get("id"),o=String(t.get("area")||"").trim()||"Altro",s=String(t.get("note")||"").trim();if(d.ui.shopLastArea=o,n){const p=Ct(n);if(!p)return;f(b=>{Object.assign(p,{name:i,area:o,note:s}),N(p),Oe(b,o)}),d.ui.shopEdit=null,h("spesa",{},"Salvato");return}const l=!a||a.value!=="0",c=t.get("once")==="1",u=At(d.data,i);u?(f(p=>{u.need=l,l&&(u.boughtAt=null),t.get("area")&&(u.area=o),s&&(u.note=s),N(u),Oe(p,o)}),h("spesa",{},`${u.name} era già in elenco: ${l?"segnato da prendere":"segnato che ce l'hai"}`)):(f(p=>{p.shopping.push(Mt({name:i,area:o,note:s,need:l,once:c})),Oe(p,o)}),h("spesa",{},l?`${i} aggiunto da prendere`:`${i} aggiunto a quello che hai`)),O("#shop-name")},"shop-quick"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;const i=At(d.data,a);i?(T(i.need?`${i.name} è già da prendere`:`${i.name}: da prendere`),f(()=>{i.need=!0,i.boughtAt=null,N(i)})):(T(`${a} aggiunto. Puoi scegliere il reparto dalla sezione Spesa`),f(n=>n.shopping.push(Mt({name:a,need:!0})))),O("#"+e.querySelector("input[name=name]").id)}}});const eo={start:"Già da parte",add:"Versamento",withdraw:"Prelievo",use:"Usati"},aa=t=>t?String(t).replace(".",","):"",Ui=(t,e)=>t.recurring.find(a=>a.type==="goal"&&a.goalId===e.id);function _i(t,e){const a=Hn(t,e.id);if(!a.list.length)return"";const i=Math.round((te(t,e)-a.total)*100)/100;return`<div class="earmark">${a.list.map(n=>`di cui <strong>${r(n.goal.name)}</strong> ${v(n.saved)}`).join(" · ")}
    · <span class="${i<0?"bad-text":""}">liberi ${v(i)}</span></div>`}function ao(t){const e=xe(t);return e.length?`<div class="stack-sm">${e.map(a=>{const i=Ae(t,a);return`<div>
      <div class="cat-row"><span>${r(a.name)} <span class="hint">· ${i.pct}%</span></span><span class="money">${v(i.saved)} / ${v(a.target)}</span></div>
      <div class="progress goal"><div style="width:${i.pct}%"></div></div></div>`}).join("")}</div>`:""}function io(t,e,a){const i=[];if(a.remaining<=0&&i.push('<span class="good-text">Cifra raggiunta!</span>'),a.recs.length){const n=a.recs[0],o=n.accountId===e.accountId?"":` da ${r(nt(t,n.accountId))}`;i.push(`${v(a.monthly)} al mese, il ${n.day}${o}`),a.remaining>0&&i.push(a.reachDate?`ci arrivi a <strong>${r(Z(ut(a.reachDate)).toLowerCase())}</strong>`:"oltre 15 anni")}else a.remaining>0&&i.push("nessun versamento automatico");return e.deadline&&a.remaining>0&&i.push(a.onTime?`<span class="good-text">in tempo per ${r(z(e.deadline))} ${e.deadline.slice(0,4)}</span>`:`<span class="warn-text">per arrivarci entro ${r(z(e.deadline))} ${e.deadline.slice(0,4)} servono ${v(a.neededMonthly)} al mese</span>`),i.join(" · ")}function no(t,e,a,i){const n={add:"Aggiungi soldi",withdraw:"Ritira dall'obiettivo",use:"Usa i soldi"},o=Wn(t,e.accountId);return`
    <form data-form="goal-move" class="box-soft stack-sm">
      <input type="hidden" name="id" value="${e.id}"><input type="hidden" name="kind" value="${a}">
      <div class="card-head"><strong>${n[a]}</strong><button class="link" type="button" data-action="goal-move-cancel">Annulla</button></div>
      <div class="row">
        <label class="sr-only" for="gm-amount">Importo</label>
        <input class="input amount" id="gm-amount" name="amount" inputmode="decimal" placeholder="0,00 €" value="${a==="use"?r(aa(i)):""}" required>
        <label class="sr-only" for="gm-date">Data</label>
        <input class="input date" id="gm-date" type="date" name="date" value="${k()}">
        ${a==="add"?`<label class="sr-only" for="gm-from">Da dove arrivano</label>
          <select class="input" id="gm-from" name="from">
            <option value="">Sono già su ${r(o?o.name:"quel conto")}</option>
            ${t.accounts.filter(s=>!s.archived&&s.id!==e.accountId).map(s=>`<option value="${s.id}">Giroconto da ${r(s.name)}</option>`).join("")}
          </select>`:""}
        <label class="sr-only" for="gm-note">Nota</label>
        <input class="input grow" id="gm-note" name="note" placeholder="${a==="use"?"es. acconto auto":"Nota (facoltativa)"}">
        <button class="btn primary" type="submit">${a==="use"?"Conferma":a==="add"?"Aggiungi":"Ritira"}</button>
      </div>
      <div class="hint">${a==="add"?"Se arrivano da un altro conto viene registrato anche il giroconto, così i saldi restano giusti.":a==="withdraw"?"I soldi restano sul conto, ma non sono più prenotati per questo obiettivo.":"L'obiettivo si chiude e resta nello storico; il versamento automatico si ferma. La spesa vera (es. l'acquisto) la registri o la importi come sempre."}</div>
    </form>`}function so(t,e){const a=Ae(t,e),i=Gn(t,e.id),n=d.ui.goalMove&&d.ui.goalMove.id===e.id?d.ui.goalMove.kind:null,o=d.ui.goalHist===e.id;return`
    <section class="card" aria-labelledby="g-${e.id}">
      <div class="card-head">
        <div><h2 id="g-${e.id}">${r(e.name)}</h2><div class="hint">su ${r(nt(t,e.accountId))}${e.deadline?" · entro "+r(Gt(e.deadline).toLowerCase()):""}</div></div>
        <button class="icon-btn" data-action="goal-edit" data-id="${e.id}" aria-label="Modifica ${r(e.name)}">${A("edit",16)}</button>
      </div>
      <div class="goal-amounts"><span class="goal-saved">${v(a.saved)}</span><span class="sub">di ${v(e.target)}</span><span class="push sub">${a.pct}%</span></div>
      <div class="progress goal big ${a.remaining<=0?"full":""}" role="progressbar" aria-valuenow="${a.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avanzamento ${r(e.name)}"><div style="width:${a.pct}%"></div></div>
      <div class="sub">${a.remaining>0?`Mancano <strong>${v(a.remaining)}</strong> · `:""}${io(t,e,a)}</div>
      ${n?no(t,e,n,a.saved):`
      <div class="row">
        <button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="add">${A("plus",14)}Aggiungi</button>
        ${a.saved>0?`<button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="withdraw">Ritira</button>
        <button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="use">Usa i soldi</button>`:""}
      </div>`}
      ${i.length?`
      <div class="list tight">${i.slice(0,o?500:4).map(s=>`
        <div class="item"><div class="when">${r(z(s.date))}</div>
          <div class="text"><div>${r(eo[s.kind]||"Movimento")}${s.recurringId?" automatico":""}</div>${s.note?`<div class="hint">${r(s.note)}</div>`:""}</div>
          <span class="money ${s.amount>0?"in":""}">${s.amount>0?"+ ":"− "}${v(Math.abs(s.amount))}</span>
          <button class="icon-btn" data-action="goal-move-del" data-id="${s.id}" aria-label="Elimina questo movimento">${A("trash",16)}</button>
        </div>`).join("")}</div>
      ${i.length>4&&!o?`<button class="link" data-action="goal-hist" data-id="${e.id}">Tutti i movimenti (${i.length})</button>`:""}`:""}
    </section>`}function oo(t,e){const a=e?Ui(t,e):null,i=K(t);return`
    <form data-form="goal-save" class="card stack" aria-labelledby="h-goalform">
      <div class="card-head"><h2 id="h-goalform">${e?"Modifica obiettivo":"Nuovo obiettivo"}</h2>${e?'<button class="link" type="button" data-action="goal-cancel">Annulla</button>':""}</div>
      <input type="hidden" name="id" value="${e?e.id:""}">
      <label class="field">Nome<input class="input" id="goal-name" name="name" value="${r(e?e.name:"")}" placeholder="Auto" required></label>
      <div class="form-grid two">
        <label class="field">Cifra da raggiungere (€)<input class="input" name="target" inputmode="decimal" value="${r(e?aa(e.target):"")}" placeholder="8.000" required></label>
        ${e?"":'<label class="field">Già messo da parte (€)<input class="input" name="start" inputmode="decimal" placeholder="0"></label>'}
        <label class="field">Entro il (facoltativo)<input class="input" type="date" name="deadline" value="${r(e&&e.deadline?e.deadline:"")}"></label>
      </div>
      <label class="field">Dove stanno i soldi<select class="input" name="accountId">${at(e?e.accountId:(t.accounts.find(n=>n.investments&&!n.archived)||i||{}).id)}</select></label>
      <fieldset class="plain stack-sm divider-top">
        <legend class="label">Versamento automatico (facoltativo)</legend>
        <div class="form-grid two">
          <label class="field">Importo al mese (€)<input class="input" name="monthly" inputmode="decimal" value="${r(a?aa(a.amount):"")}" placeholder="150"></label>
          <label class="field">Giorno del mese<input class="input" name="day" type="number" min="1" max="31" value="${a?a.day:10}"></label>
        </div>
        <label class="field">Dal conto<select class="input" name="fromAccountId">${at(a?a.accountId:i?.id)}</select></label>
        <div class="hint">Ogni mese compare in "Da confermare". Se il conto è diverso da quello dove stanno i soldi, alla conferma viene registrato anche il giroconto. Se è lo stesso conto, i soldi vengono solo "prenotati".</div>
        ${a&&a.paused?'<div class="hint">Il versamento è in pausa (da Programmati).</div>':""}
      </fieldset>
      <div class="row">
        <button class="btn primary" type="submit">${e?"Salva":"Crea obiettivo"}</button>
        ${e?`<button class="btn danger push" type="button" data-action="goal-del" data-id="${e.id}">Elimina</button>`:""}
      </div>
    </form>`}function lo(){const t=d.data,e=xe(t),a=t.goals.filter(l=>l.done).sort((l,c)=>(c.doneAt||"").localeCompare(l.doneAt||"")),i=d.ui.goalEdit?rt(t,d.ui.goalEdit):null,n=e.map(l=>Ae(t,l)),o=n.reduce((l,c)=>l+c.saved,0),s=n.reduce((l,c)=>l+c.monthly,0);return`
    ${G("Finanze","Obiettivi")}
    <p class="lead">Soldi messi da parte per qualcosa. Restano sul loro conto, ma la dashboard li tiene separati: nel saldo del conto vedi "di cui" per ogni obiettivo e quanto è davvero libero.</p>
    ${e.length?`<section class="metrics">
      ${j("Messo da parte",v(o),"accent")}
      ${j("Versi ogni mese",v(s))}
      ${j("Obiettivi in corso",String(e.length))}
    </section>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${e.length?e.map(l=>so(t,l)).join(""):'<section class="card"><div class="empty">Nessun obiettivo. Creane uno qui accanto, ad esempio "Auto".</div></section>'}
        ${a.length?`<section class="card">
          <h2>Raggiunti</h2>
          <div class="list">${a.map(l=>`
            <div class="item"><div class="text"><div>${r(l.name)}</div><div class="hint">${v(l.target)}${l.doneAt?" · chiuso il "+r(z(l.doneAt.slice(0,10)))+" "+l.doneAt.slice(0,4):""}</div></div>
              <button class="btn small" data-action="goal-reopen" data-id="${l.id}">Riapri</button>
              <button class="icon-btn" data-action="goal-del" data-id="${l.id}" aria-label="Elimina ${r(l.name)}">${A("trash",16)}</button></div>`).join("")}</div>
        </section>`:""}
      </div>
      <div class="grow-1">${oo(t,i)}</div>
    </div>`}F("obiettivi",{render:lo,actions:{"goal-edit"(t){d.ui.goalEdit=t.dataset.id,h("obiettivi"),O("#goal-name")},"goal-cancel"(){d.ui.goalEdit=null,h("obiettivi")},"goal-move"(t){d.ui.goalMove={id:t.dataset.id,kind:t.dataset.kind},h("obiettivi"),O("#gm-amount")},"goal-move-cancel"(){d.ui.goalMove=null,h("obiettivi")},"goal-hist"(t){d.ui.goalHist=t.dataset.id,h("obiettivi")},"goal-move-del"(t){const e=d.data.goalMoves.find(i=>i.id===t.dataset.id);if(!e)return;const a=e.pairId?"Eliminare questo movimento? Viene tolto anche il giroconto collegato.":"Eliminare questo movimento?";window.confirm(a)&&f(i=>{if(i.goalMoves=i.goalMoves.filter(o=>o.id!==e.id),Q(i,e.id),e.pairId&&(i.transactions=i.transactions.filter(o=>o.pairId!==e.pairId)),e.recurringId){const o=i.recurring.find(s=>s.id===e.recurringId);o&&o.done&&o.done[e.date]&&(o.done=Object.assign({},o.done),delete o.done[e.date])}const n=rt(i,e.goalId);n&&N(n)})},"goal-reopen"(t){f(e=>{const a=rt(e,t.dataset.id);if(!a)return;a.done=!1,a.doneAt=null,N(a);const i=e.goalMoves.filter(n=>n.goalId===a.id&&n.kind==="use");e.goalMoves=e.goalMoves.filter(n=>!i.includes(n)),Q(e,i.map(n=>n.id));for(const n of e.recurring)n.type==="goal"&&n.goalId===a.id&&(n.paused=!1)}),h("obiettivi",{},"Obiettivo riaperto")},"goal-del"(t){const e=rt(d.data,t.dataset.id);!e||!window.confirm(`Eliminare l'obiettivo «${e.name}»? I soldi restano sul conto e i giroconti già registrati non vengono toccati.`)||(d.ui.goalEdit===e.id&&(d.ui.goalEdit=null),f(a=>{const i=a.goalMoves.filter(n=>n.goalId===e.id);Q(a,[e.id,...i.map(n=>n.id)]),a.goalMoves=a.goalMoves.filter(n=>n.goalId!==e.id),a.recurring=a.recurring.filter(n=>!(n.type==="goal"&&n.goalId===e.id)),a.goals=a.goals.filter(n=>n.id!==e.id)}))}},forms:{"goal-save"(t){const e=String(t.get("name")||"").trim(),a=U(t.get("target")),i=String(t.get("start")||"").trim(),n=i?U(i):0,o=String(t.get("monthly")||"").trim(),s=o?U(o):0,l=parseInt(t.get("day"),10),c=t.get("accountId"),u=t.get("fromAccountId")||c;if(!e)return E("Dai un nome all'obiettivo."),x();if(!(a>0))return E("Scrivi la cifra da raggiungere, es. 8.000"),x();if(!Number.isFinite(n)||n<0)return E('"Già messo da parte" deve essere un numero, es. 500'),x();if(!Number.isFinite(s)||s<0)return E("L'importo al mese deve essere un numero, es. 150"),x();if(s>0&&!(l>=1&&l<=31))return E("Il giorno va da 1 a 31."),x();if(!c)return E("Scegli il conto dove stanno i soldi."),x();const p=t.get("id"),b=t.get("deadline")||null;f(m=>{let w;p?(w=rt(m,p),Object.assign(w,{name:e,target:a,accountId:c,deadline:b}),N(w)):(w=_n({name:e,target:a,accountId:c,deadline:b}),m.goals.push(w),n>0&&m.goalMoves.push({id:W(),goalId:w.id,date:k(),amount:n,kind:"start",note:"",createdAt:new Date().toISOString()}));const y=Ui(m,w);if(s>0){const q={name:w.name,amount:s,freq:"mensile",day:l,accountId:u,toAccountId:c,category:"Giroconto",goalId:w.id};y?Object.assign(y,q):m.recurring.push(Object.assign({id:W(),type:"goal",paused:!1,done:{},history:[],startDate:k()},q))}else y&&(m.recurring=m.recurring.filter(q=>q!==y))}),d.ui.goalEdit=null,h("obiettivi",{},p?"Obiettivo aggiornato":"Obiettivo creato")},"goal-move"(t,e){const a=rt(d.data,t.get("id"));if(!a)return;const i=t.get("kind"),n=U(t.get("amount")),o=e.querySelector("[name=amount]");if(!(n>0)){o.setCustomValidity("Inserisci un importo valido, es. 150"),o.reportValidity(),o.addEventListener("input",()=>o.setCustomValidity(""),{once:!0});return}const s=t.get("date")||k(),l=String(t.get("note")||"").trim(),c=Ae(d.data,a).saved;if(i!=="add"&&n>c+.004){o.setCustomValidity(`Nell'obiettivo ci sono ${v(c)}`),o.reportValidity(),o.addEventListener("input",()=>o.setCustomValidity(""),{once:!0});return}f(u=>{if(i==="add"?Vn(u,a.id,{date:s,amount:n,fromAccountId:t.get("from")||null,note:l}):Un(u,a.id,{date:s,amount:n,note:l,kind:i}),i==="use"){a.done=!0,a.doneAt=new Date().toISOString(),N(a);for(const p of u.recurring)p.type==="goal"&&p.goalId===a.id&&(p.paused=!0)}}),d.ui.goalMove=null,h("obiettivi",{},i==="add"?`${v(n)} aggiunti a ${a.name}`:i==="use"?`${a.name}: obiettivo chiuso`:`${v(n)} ritirati da ${a.name}`)}}});const Gi=[[0,"Non si rinnova"],[1,"Ogni mese"],[3,"Ogni 3 mesi"],[6,"Ogni 6 mesi"],[12,"Ogni anno"],[24,"Ogni 2 anni"],[36,"Ogni 3 anni"],[60,"Ogni 5 anni"],[72,"Ogni 6 anni"],[120,"Ogni 10 anni"]],co=[7,15,30,60,90],Wi=t=>(Gi.find(([e])=>e===t)||[0,`Ogni ${t} mesi`])[1].toLowerCase(),Ee=t=>`${z(t)} ${t.slice(0,4)}`,ro=t=>/^https?:\/\//i.test(t||""),$a=t=>ro(t)?"Apri il link":"Apri "+(String(t).split(/[\\/]/).pop()||"documento"),_t=t=>d.data.deadlines.find(e=>e.id===t);function uo({x:t,days:e,state:a}){return`
    <div class="item">
      <span class="dot-cat scad ${a}" aria-hidden="true"></span>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${r(Ee(t.due))}${t.cost?" · "+v(t.cost):""}</div></div>
      <span class="tag ${a==="late"?"bad":"warn"}">${r(Ht(e))}</span>
      ${t.doc?`<button class="icon-btn" data-action="dl-open" data-id="${t.id}" aria-label="${r($a(t.doc))}">${A("doc",16)}</button>`:""}
    </div>`}function po(t){const e=da(t);return e.length?`
    <section class="card ${e.some(i=>i.state==="late")?"attention":""}" aria-labelledby="h-scad">
      <div class="card-head"><h2 id="h-scad">Scadenze</h2><button class="link" data-action="nav" data-id="scadenze">${e.length} da tenere d'occhio</button></div>
      <div class="list">${e.slice(0,5).map(uo).join("")}</div>
    </section>`:""}function mo(t){const e=Kn(t);return`
    <form data-form="dl-renew" class="box-soft stack-sm">
      <input type="hidden" name="id" value="${t.id}">
      <div class="row">
        <label class="field">Fatto il<input class="input date" type="date" name="done" value="${k()}"></label>
        <label class="field">Prossima scadenza<input class="input date" id="dl-next" type="date" name="next" value="${e||""}"></label>
        <div class="row self-end">
          <button class="btn primary" type="submit">Conferma</button>
          <button class="btn" type="button" data-action="dl-renew-cancel">Annulla</button>
        </div>
      </div>
      <div class="hint">${e?`Proposta: ${r(Wi(t.every))} dalla scadenza (o da oggi, se è già passata). Correggila con la data scritta sul documento nuovo.`:"Lascia vuota la prossima scadenza per archiviarla."}</div>
    </form>`}function go(t){const{days:e,state:a}=ua(t),i=d.ui.dlRenew===t.id,n=[Gt(t.due),t.every?Wi(t.every):"",t.lastDone?"ultimo rinnovo "+Ee(t.lastDone):""].filter(Boolean).join(" · ");return`
    <div class="dl-row">
      <div class="item">
        <span class="dot-cat scad ${a}" aria-hidden="true"></span>
        <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r(n)}</div>${t.note?`<div class="sub">${r(t.note)}</div>`:""}</div>
        ${t.cost?`<span class="money sub">${v(t.cost)}</span>`:""}
        <span class="tag ${a==="late"?"bad":a==="soon"?"warn":""}">${r(Ht(e))}</span>
        ${t.doc?`<button class="icon-btn" data-action="dl-open" data-id="${t.id}" aria-label="${r($a(t.doc))}" title="${r(t.doc)}">${A("doc",16)}</button>`:""}
        ${i?"":`<button class="btn small" data-action="dl-renew" data-id="${t.id}">${t.every?"Rinnovato":"Fatto"}</button>`}
        <button class="icon-btn" data-action="dl-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${A("edit",16)}</button>
        <button class="icon-btn" data-action="dl-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button>
      </div>
      ${i?mo(t):""}
    </div>`}function bo(t){const e=t||{kind:"Documenti",every:0,notice:30};return`
    <form data-form="dl-save" class="card stack" id="dl-form" aria-labelledby="h-dlform">
      <div class="card-head"><h2 id="h-dlform">${t?"Modifica scadenza":"Nuova scadenza"}</h2>${t?'<button class="link" type="button" data-action="dl-cancel">Annulla</button>':""}</div>
      ${t?"":`<div class="stack-xs"><span class="hint">Modelli pronti</span><div class="shop-chips">${vi.map((a,i)=>`<button type="button" class="chip" data-action="dl-preset" data-i="${i}">${r(a.name)}</button>`).join("")}</div></div>`}
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Nome<input class="input" id="dl-name" name="name" value="${r(t?t.name:"")}" placeholder="Carta d'identità" required></label>
      <div class="form-grid two">
        <label class="field">Tipo<select class="input" name="kind">${Ke.map(a=>`<option ${e.kind===a?"selected":""}>${a}</option>`).join("")}</select></label>
        <label class="field">Scade il<input class="input" type="date" name="due" value="${r(t?t.due:"")}" required></label>
        <label class="field">Si rinnova<select class="input" name="every">${Gi.map(([a,i])=>`<option value="${a}" ${(e.every||0)===a?"selected":""}>${i}</option>`).join("")}</select></label>
        <label class="field">Avvisami<select class="input" name="notice">${co.map(a=>`<option value="${a}" ${(e.notice??30)===a?"selected":""}>${a} giorni prima</option>`).join("")}</select></label>
        <label class="field">Costo (facoltativo)<input class="input" name="cost" inputmode="decimal" value="${t&&t.cost?r(String(t.cost).replace(".",",")):""}" placeholder="es. 210,00"></label>
      </div>
      <label class="field">Documento (PDF su Drive o link)
        <div class="row nowrap">
          <input class="input grow" id="dl-doc" name="doc" value="${r(t?t.doc:"")}" placeholder="G:\\Il mio Drive\\Documenti\\carta-identita.pdf">
          <button class="btn" type="button" data-action="dl-pick">Scegli…</button>
        </div>
      </label>
      <label class="field">Nota<input class="input" name="note" value="${r(t?t.note:"")}" placeholder="es. numero documento, dove rinnovarla"></label>
      <button class="btn primary self-start" type="submit">${t?"Salva":"Aggiungi"}</button>
    </form>`}function vo(){const t=d.data,e=t.deadlines.filter(l=>!l.archived).sort((l,c)=>l.due.localeCompare(c.due)),a=t.deadlines.filter(l=>l.archived).sort((l,c)=>(c.lastDone||"").localeCompare(l.lastDone||"")),i=da(t),n=d.ui.dlEdit?_t(d.ui.dlEdit):null,o=[...Ke,...new Set(e.map(l=>l.kind).filter(l=>!Ke.includes(l)))],s=e.filter(l=>l.cost&&ua(l).days<=365).reduce((l,c)=>l+c.cost,0);return`
    ${G(i.length?`${i.length} da tenere d'occhio`:"Tutto in ordine","Scadenze e documenti")}
    ${s?`<p class="lead">Nei prossimi 12 mesi: ${v(s)} di scadenze con un costo.</p>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${e.length?o.map(l=>{const c=e.filter(u=>u.kind===l);return c.length?`<section class="card" aria-label="${r(l)}"><h3 class="group-title">${r(l)} <span class="hint">${c.length}</span></h3><div class="list">${c.map(go).join("")}</div></section>`:""}).join(""):`<section class="card"><div class="empty">Nessuna scadenza. Comincia dai modelli pronti qui accanto: carta d'identità, patente, tessera sanitaria…</div></section>`}
        ${a.length?`<section class="card">
          <div class="card-head"><h2>Archiviate</h2><span class="sub">${a.length}</span></div>
          <div class="list">${a.map(l=>`
            <div class="item done"><div class="text"><div>${r(l.name)}</div><div class="hint">fatto il ${r(Ee(l.lastDone||l.due))}</div></div>
              ${l.doc?`<button class="icon-btn" data-action="dl-open" data-id="${l.id}" aria-label="${r($a(l.doc))}">${A("doc",16)}</button>`:""}
              <button class="btn small" data-action="dl-restore" data-id="${l.id}">Ripristina</button>
              <button class="icon-btn" data-action="dl-del" data-id="${l.id}" aria-label="Elimina ${r(l.name)}">${A("trash",16)}</button></div>`).join("")}</div>
        </section>`:""}
      </div>
      <div class="grow-1">${bo(n)}</div>
    </div>`}F("scadenze",{render:vo,actions:{"dl-preset"(t){const e=vi[Number(t.dataset.i)],a=document.getElementById("dl-form");!e||!a||(a.name.value=e.name,a.kind.value=e.kind,a.every.value=String(e.every),a.due.focus())},async"dl-pick"(){const t=await Yn();if(!t)return;const e=document.getElementById("dl-doc");e&&(e.value=t)},async"dl-open"(t){const e=_t(t.dataset.id);if(!(!e||!e.doc))try{await ee("open_document",{target:e.doc})}catch(a){E(String(a)),x()}},"dl-renew"(t){d.ui.dlRenew=t.dataset.id,h("scadenze"),O("#dl-next")},"dl-renew-cancel"(){d.ui.dlRenew=null,h("scadenze")},"dl-edit"(t){d.ui.dlEdit=t.dataset.id,h("scadenze"),O("#dl-name")},"dl-cancel"(){d.ui.dlEdit=null,h("scadenze")},"dl-restore"(t){const e=_t(t.dataset.id);e&&(f(()=>{e.archived=!1,N(e)}),d.ui.dlEdit=e.id,h("scadenze",{},"Ripristinata: aggiorna la data di scadenza"))},"dl-del"(t){const e=_t(t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? Il documento collegato non viene toccato.`)||(d.ui.dlEdit===e.id&&(d.ui.dlEdit=null),f(a=>{a.deadlines=a.deadlines.filter(i=>i.id!==e.id),Q(a,e.id)}))}},forms:{"dl-save"(t){const e=String(t.get("name")||"").trim(),a=t.get("due");if(!e)return E("Scrivi un nome."),x();if(!a)return E("Indica la data di scadenza."),x();const i=String(t.get("cost")||"").trim(),n=i?U(i):null;if(i&&!(n>=0))return E("Il costo deve essere un numero, es. 210,00"),x();const o={name:e,due:a,kind:t.get("kind")||"Altro",every:Number(t.get("every"))||null,notice:Number(t.get("notice"))||30,cost:n||null,doc:String(t.get("doc")||"").trim().replace(/^"(.*)"$/,"$1"),note:String(t.get("note")||"").trim()},s=t.get("id");f(l=>{if(s){const c=l.deadlines.find(u=>u.id===s);Object.assign(c,o),N(c)}else l.deadlines.push(Ie(o))}),d.ui.dlEdit=null,h("scadenze",{},s?"Scadenza aggiornata":`${e} aggiunta`)},"dl-renew"(t){const e=_t(t.get("id"));if(!e)return;const a=t.get("next")||null,i=t.get("done")||k();a&&a<=i&&!window.confirm("La prossima scadenza è prima della data di oggi. Confermi?")||(f(()=>Qn(e,a,i)),d.ui.dlRenew=null,T(a?`${e.name}: prossima scadenza ${Ee(a)}`:`${e.name}: archiviata`),h("scadenze",{},d.notice))}}});const ho=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];function fo(t){const e=t||{type:"out",freq:"mensile",day:new Date().getDate(),accountId:K(d.data)?.id,category:"Casa",sub:!1},a=e.type;return`
    <form data-form="save-rec" class="card stack" aria-labelledby="h-recform">
      <div class="card-head"><h2 id="h-recform">${t?"Modifica programmato":"Nuovo programmato"}</h2>${t?'<button class="link" type="button" data-action="rec-cancel">Annulla</button>':""}</div>
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Nome<input class="input" name="name" value="${r(t?t.name:"")}" placeholder="Abbonamento palestra" required></label>
      <label class="field">Tipo<select class="input" name="type" data-change="rec-type">
        ${Object.entries(Ye).map(([i,n])=>`<option value="${i}" ${a===i?"selected":""}>${i==="pac"?"PAC / investimento":i==="transfer"?"Giroconto tra conti":i==="goal"?"Versamento in un obiettivo":n.label}</option>`).join("")}
      </select></label>
      <div class="form-grid two">
        <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" value="${t?r(String(t.amount).replace(".",",")):""}" placeholder="29,90" required></label>
        <label class="field">Frequenza<select class="input" name="freq" data-change="rec-freq">
          ${Object.entries(ma).map(([i,n])=>`<option value="${i}" ${e.freq===i?"selected":""}>${n.label}</option>`).join("")}
        </select></label>
        <label class="field" data-when="day">Giorno del mese<input class="input" name="day" type="number" min="1" max="31" value="${e.day||1}"></label>
        <label class="field" data-when="month">Mese<select class="input" name="month">${ho.map((i,n)=>`<option value="${n+1}" ${Number(e.month)===n+1?"selected":""}>${i}</option>`).join("")}</select></label>
        <label class="field" data-when="date">Data<input class="input" type="date" name="date" value="${e.date||e.startDate||k()}"></label>
      </div>
      <label class="field">Conto<select class="input" name="accountId">${at(e.accountId)}</select></label>
      <label class="field" data-when="to">Verso il conto<select class="input" name="toAccountId">${at(e.toAccountId||vt(d.data).find(i=>i.id!==e.accountId)?.id)}</select></label>
      <label class="field" data-when="goal">Obiettivo<select class="input" name="goalId">${xe(d.data).map(i=>`<option value="${i.id}" ${e.goalId===i.id?"selected":""}>${r(i.name)} (su ${r(nt(d.data,i.accountId))})</option>`).join("")||'<option value="">Crea prima un obiettivo</option>'}</select></label>
      <label class="field" data-when="cat">Categoria<select class="input" name="category">${Lt(a==="in"?"in":"out",e.category)}</select></label>
      <label class="field" data-when="isin">ISIN dell'ETF (facoltativo)<input class="input" name="isin" value="${r(e.isin||"")}" placeholder="IE00XXXXXXXX"></label>
      <label class="check" data-when="sub"><input type="checkbox" name="sub" ${e.sub?"checked":""}><span>È un abbonamento</span></label>
      <label class="field" data-when="sub">Avvisami prima del rinnovo<select class="input" name="remindDays">
        ${[["","Automatico (14 giorni, solo se non è mensile)"],["0","No"],["3","3 giorni prima"],["7","7 giorni prima"],["14","14 giorni prima"],["30","30 giorni prima"]].map(([i,n])=>`<option value="${i}" ${String(e.remindDays??"")===i?"selected":""}>${n}</option>`).join("")}
      </select></label>
      <button class="btn primary" type="submit">${t?"Salva":"Aggiungi"}</button>
    </form>`}function $o(t){const e=t.recurring.filter(a=>a.sub).map(a=>({r:a,next:pe(a),year:Math.round(Xn(a)*12*100)/100})).sort((a,i)=>a.r.paused-i.r.paused||i.year-a.year);return e.length?`
    <section class="card" aria-labelledby="h-subs">
      <div class="card-head"><h2 id="h-subs">Abbonamenti</h2><span class="sub">${v(e.filter(a=>!a.r.paused).reduce((a,i)=>a+i.year,0))} in un anno</span></div>
      <div class="list">${e.map(({r:a,next:i,year:n})=>`
        <div class="item ${a.paused?"paused":""}">
          <div class="text"><div>${r(a.name)}${a.cancelled?' <span class="tag">disdetto</span>':""}</div><div class="hint">${r(ma[a.freq]?.label||"")} · ${v(a.amount)}${i&&!a.paused?" · rinnovo "+r(z(i)):""}${Ea(a)?` · avviso ${Ea(a)} giorni prima`:""}</div></div>
          <span class="money">${v(n)}<span class="hint"> /anno</span></span>
        </div>`).join("")}</div>
    </section>`:""}function Hi(t){const e=Zn(t);return e.length?`
    <section class="card attention" aria-labelledby="h-subren">
      <div class="card-head"><h2 id="h-subren">Abbonamenti in rinnovo</h2><span class="sub">li tieni?</span></div>
      <div class="list">${e.map(({r:a,date:i,days:n})=>`
        <div class="item">
          <div class="when">${r(z(i))}</div>
          <div class="text"><div>${r(a.name)}</div><div class="hint">${v(a.amount)} · ${n===0?"si rinnova oggi":n===1?"si rinnova domani":`si rinnova tra ${n} giorni`}</div></div>
          <button class="btn small" data-action="sub-keep" data-id="${a.id}" data-date="${i}">Lo tengo</button>
          <button class="btn small danger" data-action="sub-cancel" data-id="${a.id}" data-date="${i}">Disdico</button>
        </div>`).join("")}</div>
    </section>`:""}function yo(){const t=d.data,e=hi(t),a=pa(t),i=d.ui.recEdit?t.recurring.find(o=>o.id===d.ui.recEdit):null,n=t.recurring.map(o=>({r:o,next:pe(o)})).sort((o,s)=>o.r.paused-s.r.paused||(o.next||"9999").localeCompare(s.next||"9999"));return`
    ${G("Finanze","Programmati")}
    <p class="lead">Bollette, abbonamenti, stipendio, giroconti e PAC. Compaiono nel calendario e, quando arriva il giorno, li confermi con un clic (o vengono riconosciuti importando l'estratto conto).</p>
    <section class="metrics">
      ${j("Spese fisse al mese",v(e.fixed))}
      ${j("Abbonamenti in un anno",v(e.subsYear),"warn")}
      ${j("PAC in un anno",v(e.pac*12),"accent")}
      ${j("Restano ogni mese",v(e.left),e.left>=0?"good":"bad","entrate fisse − spese fisse − PAC")}
    </section>
    ${a.length?`<section class="card attention"><div class="card-head"><h2>Da confermare</h2><span class="sub">${a.length}</span></div><div class="list">${a.map(fa).join("")}</div></section>`:""}
    ${$o(t)}
    <div class="split">
      <section class="card grow-2" aria-label="Elenco programmati">
        ${n.length?`<div class="list">${n.map(({r:o,next:s})=>`
          <div class="item ${o.paused?"paused":""}">
            <div class="day-box"><strong>${o.freq==="once"?r(z(o.date).split(" ")[0]):o.freq==="settimanale"?"7g":o.day}</strong><span>${r(ma[o.freq]?.short||"")}</span></div>
            <div class="text">
              <div class="row nowrap gap-sm"><span>${r(o.name)}</span>${ha(o.type)}${o.sub?'<span class="tag">abbonamento</span>':""}${o.paused?'<span class="hint">in pausa</span>':""}</div>
              <div class="hint">${r(nt(t,o.accountId))}${(o.type==="transfer"||o.type==="goal")&&o.toAccountId&&o.toAccountId!==o.accountId?" → "+r(nt(t,o.toAccountId)):""}${o.type==="goal"&&rt(t,o.goalId)?" · obiettivo "+r(rt(t,o.goalId).name):""} · ${s?"prossimo "+r(z(s)):"nessuna data futura"}</div>
            </div>
            <span class="money ${o.type==="in"?"in":""}">${ae(o)}</span>
            <button class="icon-btn" data-action="rec-edit" data-id="${o.id}" aria-label="Modifica ${r(o.name)}">${A("edit",16)}</button>
            <button class="icon-btn" data-action="rec-pause" data-id="${o.id}" aria-label="${o.paused?"Riprendi":"Metti in pausa"} ${r(o.name)}">${A(o.paused?"play":"pause",16)}</button>
            <button class="icon-btn" data-action="rec-del" data-id="${o.id}" aria-label="Elimina ${r(o.name)}">${A("trash",16)}</button>
          </div>`).join("")}</div>`:'<div class="empty">Nessun programmato. Aggiungine uno qui accanto, oppure importa un estratto conto: i pagamenti ricorrenti vengono proposti in automatico.</div>'}
      </section>
      <div class="grow-1">${fo(i)}</div>
    </div>`}function Te(t){if(!t)return;const e=t.type.value,a=t.freq.value,i=(n,o)=>t.querySelectorAll(`[data-when="${n}"]`).forEach(s=>{s.hidden=!o});i("day",!["once","settimanale","annuale"].includes(a)||a==="annuale"),i("month",a==="annuale"),i("date",a==="once"||a==="settimanale"),i("to",e==="transfer"),i("goal",e==="goal"),i("cat",e==="out"||e==="in"),i("isin",e==="pac"),i("sub",e==="out")}F("programmati",{render:yo,afterRender(){Te(document.querySelector('form[data-form="save-rec"]'))},changes:{"rec-type"(t){const e=t.form.category;e.innerHTML=Lt(t.value==="in"?"in":"out"),Te(t.form)},"rec-freq"(t){Te(t.form)}},actions:{"rec-edit"(t){d.ui.recEdit=t.dataset.id,h("programmati")},"rec-cancel"(){d.ui.recEdit=null,h("programmati")},"sub-keep"(t){f(e=>{const a=e.recurring.find(i=>i.id===t.dataset.id);a&&(a.kept=Object.assign({},a.kept,{[t.dataset.date]:!0}))})},"sub-cancel"(t){const e=d.data.recurring.find(i=>i.id===t.dataset.id);if(!e)return;const a=t.dataset.date;f(i=>{e.paused=!0,e.cancelled=!0;const n=P(a,-1)>=k()?P(a,-1):k();i.todos.push(Jt({text:`Disdire ${e.name} (si rinnova il ${z(a)})`,due:n}))}),T(`${e.name} messo in pausa: ti ho aggiunto l'attività per disdirlo`),x()},"rec-pause"(t){f(e=>{const a=e.recurring.find(i=>i.id===t.dataset.id);a&&(a.paused=!a.paused)})},"rec-del"(t){const e=d.data.recurring.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? I movimenti già registrati restano.`)||f(a=>{a.recurring=a.recurring.filter(i=>i.id!==e.id)})}},forms:{"save-rec"(t){const e=String(t.get("name")||"").trim(),a=U(t.get("amount")),i=t.get("freq"),n=parseInt(t.get("day"),10);if(!e)return E("Scrivi un nome."),x();if(!(a>0))return E("Inserisci un importo valido, es. 29,90"),x();if(["mensile","bimestrale","trimestrale","semestrale","annuale"].includes(i)&&!(n>=1&&n<=31))return E("Il giorno va da 1 a 31."),x();const o=t.get("type"),s=t.get("id"),l={name:e,type:o,amount:a,freq:i,day:n||1,accountId:t.get("accountId"),toAccountId:o==="transfer"?t.get("toAccountId"):void 0,category:o==="pac"?"Investimenti":o==="transfer"||o==="goal"?"Giroconto":t.get("category"),month:i==="annuale"?Number(t.get("month")):void 0,date:i==="once"?t.get("date"):void 0,sub:o==="out"&&t.get("sub")==="on",remindDays:o==="out"&&t.get("sub")==="on"&&t.get("remindDays")!==""?Number(t.get("remindDays")):void 0,isin:o==="pac"?String(t.get("isin")||"").trim().toUpperCase():void 0};if(o==="transfer"&&l.toAccountId===l.accountId)return E("Per un giroconto scegli due conti diversi."),x();if(o==="goal"){const c=rt(d.data,t.get("goalId"));if(!c)return E("Crea prima un obiettivo (Finanze → Obiettivi)."),x();l.goalId=c.id,l.toAccountId=c.accountId}f(c=>{if(s){const u=c.recurring.find(p=>p.id===s);u.type==="pac"&&u.amount!==a&&(u.history=(u.history||[]).concat([{from:k(),amount:a,prev:u.amount}])),Object.assign(u,l)}else c.recurring.push(Object.assign({id:W(),paused:!1,done:{},history:[],startDate:i==="settimanale"?t.get("date"):k()},l))}),d.ui.recEdit=null,h("programmati",{},s?"Programmato aggiornato":"Programmato aggiunto")}}});const wo=[["Salute",[["Allenamento",3],["Camminare 30 minuti",5],["Bere 2 litri d'acqua",7],["A letto entro mezzanotte",5],["Niente telefono a letto",7],["Frutta o verdura a ogni pasto",7]]],["Mente",[["Leggere 20 minuti",5],["Meditare 10 minuti",5],["Studiare una lingua",4],["Scrivere 3 cose della giornata",7]]],["Soldi",[["Nessuna spesa non necessaria",5],["Pranzo portato da casa",3],["Segnare le spese della giornata",7]]],["Casa",[["Riordinare 10 minuti",5],["Cucinare a casa",4],["Piatti lavati prima di dormire",7]]]],ko=["lun","mar","mer","gio","ven","sab","dom"],Qi=t=>t>=7?"ogni giorno":t===1?"1 volta a settimana":`${t} volte a settimana`;function Yi(t){const e=t.habits.filter(o=>!o.archived);if(!e.length)return"";const a=k(),i=st(a);return`
    <section class="card" aria-labelledby="h-hab">
      <div class="card-head"><h2 id="h-hab">Abitudini</h2><button class="link" data-action="nav" data-id="abitudini">${e.filter(o=>gt(t,o,a)).length} di ${e.length} oggi</button></div>
      <div class="shop-chips">${e.map(o=>{const s=gt(t,o,a),l=xt(t,o,i);return`<button class="chip habit ${s?"on":""}" data-action="hab-toggle" data-id="${o.id}" data-date="${a}" aria-pressed="${s}">${s?A("check",14,3):""}${r(o.name)}${o.perWeek<7?` <span class="hint">${l}/${o.perWeek}</span>`:""}</button>`}).join("")}</div>
    </section>`}function So(t,e){const a=st(k()),i=[];for(let n=7;n>=0;n--)i.push(P(a,-7*n));return`<div class="hab-weeks" role="img" aria-label="Ultime 8 settimane: ${i.map(n=>xt(t,e,n)).join(", ")} volte su ${e.perWeek}">
    ${i.map(n=>{const o=xt(t,e,n);return`<span class="hab-wk ${o>=e.perWeek?"ok":""}" title="Settimana del ${r(z(n))}: ${o} su ${e.perWeek}"><span style="height:${Math.round(o/7*100)}%"></span></span>`}).join("")}
  </div>`}function Ao(t,e,a){const i=k(),n=xt(t,e,a),o=ts(t,e);return`
    <div class="hab-row">
      <div class="hab-name">
        <div class="strong">${r(e.name)}</div>
        <div class="hint">${r(Qi(e.perWeek))} · questa settimana ${n}/${e.perWeek}${o.n?` · serie: <strong class="good-text">${o.n} ${o.unit}</strong>`:""}</div>
      </div>
      <div class="hab-days">${ko.map((s,l)=>{const c=P(a,l),u=gt(t,e,c),p=c>i;return`<button class="hab-day ${u?"on":""} ${c===i?"today":""}" data-action="hab-toggle" data-id="${e.id}" data-date="${c}" ${p?"disabled":""} aria-pressed="${u}" aria-label="${r(e.name)}, ${s} ${r(z(c))}"><span>${s}</span>${u?A("check",14,3):""}</button>`}).join("")}</div>
      ${So(t,e)}
      <div class="row nowrap">
        <button class="icon-btn" data-action="hab-edit" data-id="${e.id}" aria-label="Modifica ${r(e.name)}">${A("edit",16)}</button>
        <button class="icon-btn" data-action="hab-archive" data-id="${e.id}" aria-label="Metti da parte ${r(e.name)}">${A("pause",16)}</button>
      </div>
    </div>`}function xo(){const t=d.data,e=d.ui.habWeek||0,a=P(st(k()),-7*e),i=t.habits.filter(s=>!s.archived),n=t.habits.filter(s=>s.archived),o=d.ui.habEdit?t.habits.find(s=>s.id===d.ui.habEdit):null;return`
    ${G(i.length?`${i.length} abitudini`:"Piccole cose da fare spesso","Abitudini",`
      <button class="icon-btn" data-action="hab-week" data-n="1" aria-label="Settimana precedente">${A("left")}</button>
      <span class="sub">${e?"settimana del "+r(z(a)):"questa settimana"}</span>
      <button class="icon-btn" data-action="hab-week" data-n="-1" ${e?"":"disabled"} aria-label="Settimana successiva">${A("right")}</button>`)}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <section class="card">
          ${i.length?`<div class="hab-list">${i.map(s=>Ao(t,s,a)).join("")}</div>`:'<div class="empty">Nessuna abitudine. Pescane due o tre dai suggerimenti qui accanto: meglio poche e segnate davvero.</div>'}
        </section>
        ${n.length?`<section class="card"><div class="card-head"><h2>Messe da parte</h2><span class="sub">${n.length}</span></div>
          <div class="list">${n.map(s=>`<div class="item"><div class="text">${r(s.name)}</div>
            <button class="btn small" data-action="hab-restore" data-id="${s.id}">Riprendi</button>
            <button class="icon-btn" data-action="hab-del" data-id="${s.id}" aria-label="Elimina ${r(s.name)}">${A("trash",16)}</button></div>`).join("")}</div></section>`:""}
      </div>
      <div class="grow-1 stack stack-lg">
        <form class="card stack" data-form="hab-save" id="hab-form" aria-labelledby="h-habform">
          <div class="card-head"><h2 id="h-habform">${o?"Modifica abitudine":"Nuova abitudine"}</h2>${o?'<button class="link" type="button" data-action="hab-cancel">Annulla</button>':""}</div>
          <input type="hidden" name="id" value="${o?o.id:""}">
          <label class="field">Cosa<input class="input" id="hab-name" name="name" value="${r(o?o.name:"")}" placeholder="Leggere 20 minuti" required></label>
          <label class="field">Quante volte<select class="input" name="perWeek">${[7,6,5,4,3,2,1].map(s=>`<option value="${s}" ${(o?o.perWeek:7)===s?"selected":""}>${Qi(s)}</option>`).join("")}</select></label>
          <button class="btn primary self-start" type="submit">${o?"Salva":"Aggiungi"}</button>
        </form>
        ${o?"":`<section class="card stack-sm">
          <h2>Idee</h2>
          <div class="hint">Tocca un'idea per metterla nel modulo, poi scegli quante volte. Dopo due settimane togli quelle che non segni mai.</div>
          ${wo.map(([s,l])=>`<div class="stack-xs"><span class="hint">${s}</span><div class="shop-chips">${l.map(([c,u])=>`<button type="button" class="chip ${i.some(p=>p.name===c)?"off":""}" data-action="hab-idea" data-name="${r(c)}" data-w="${u}">${r(c)}</button>`).join("")}</div></div>`).join("")}
        </section>`}
      </div>
    </div>`}const ne=t=>d.data.habits.find(e=>e.id===t);F("abitudini",{render:xo,actions:{"hab-toggle"(t){const e=ne(t.dataset.id);!e||t.dataset.date>k()||f(a=>Xe(a,e,t.dataset.date))},"hab-week"(t){d.ui.habWeek=Math.max(0,(d.ui.habWeek||0)+Number(t.dataset.n)),h("abitudini")},"hab-idea"(t){const e=document.getElementById("hab-form");e&&(e.name.value=t.dataset.name,e.perWeek.value=t.dataset.w,e.perWeek.focus())},"hab-edit"(t){d.ui.habEdit=t.dataset.id,h("abitudini"),O("#hab-name")},"hab-cancel"(){d.ui.habEdit=null,h("abitudini")},"hab-archive"(t){f(()=>{const e=ne(t.dataset.id);e&&(e.archived=!0,N(e))})},"hab-restore"(t){f(()=>{const e=ne(t.dataset.id);e&&(e.archived=!1,N(e))})},"hab-del"(t){const e=ne(t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}» e tutte le sue spunte?`)||f(a=>{a.habits=a.habits.filter(i=>i.id!==e.id),delete a.habitLog[e.id],Q(a,e.id)})}},forms:{"hab-save"(t){const e=String(t.get("name")||"").trim();if(!e)return E("Scrivi l'abitudine."),x();const a=Math.min(7,Math.max(1,Number(t.get("perWeek"))||7)),i=t.get("id");f(n=>{if(i){const o=n.habits.find(s=>s.id===i);Object.assign(o,{name:e,perWeek:a}),N(o)}else n.habits.push(Jn({name:e,perWeek:a}))}),d.ui.habEdit=null,h("abitudini",{},i?"Abitudine aggiornata":`${e} aggiunta`)}}});const Ki=[[1,"Ogni giorno"],[2,"Ogni 2 giorni"],[3,"Ogni 3 giorni"],[7,"Ogni settimana"],[14,"Ogni 2 settimane"],[30,"Ogni mese"],[60,"Ogni 2 mesi"],[90,"Ogni 3 mesi"],[180,"Ogni 6 mesi"],[365,"Ogni anno"]],Io=[["Cambiare le lenzuola",14],["Pulire il bagno",7],["Lavare gli asciugamani",7],["Aspirapolvere",7],["Lavare i pavimenti",7],["Pulire il frigo",30],["Pulire il forno",60],["Pulire il filtro della lavatrice",90],["Lavaggio a vuoto lavatrice",30],["Sbrinare il freezer",180],["Filtri del condizionatore",180],["Annaffiare le piante",3],["Decalcificare la macchina del caffè",60]],Co=t=>(Ki.find(([e])=>e===t)||[0,`Ogni ${t} giorni`])[1].toLowerCase();function zo(t){const e=Ce(k(),Qt(t));return e<0?{cls:"bad",text:`in ritardo di ${-e} ${-e===1?"giorno":"giorni"}`}:e===0?{cls:"warn",text:"oggi"}:e===1?{cls:"",text:"domani"}:{cls:"",text:z(Qt(t))}}function je(t,{tools:e=!0}={}){const a=zo(t);return`
    <div class="item">
      <button class="box" data-action="chore-done" data-id="${t.id}" aria-label="Fatto oggi: ${r(t.name)}"></button>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${r(Co(t.every))} · ultima volta ${r(z(t.lastDone))}</div></div>
      <span class="tag ${a.cls}">${r(a.text)}</span>
      ${e?`<button class="icon-btn" data-action="chore-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${A("edit",16)}</button>
      <button class="icon-btn" data-action="chore-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button>`:""}
    </div>`}function Eo(t){return`
    <form data-form="chore-save" class="form-grid" id="chore-form">
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Faccenda<input class="input" id="chore-name" name="name" value="${r(t?t.name:"")}" placeholder="Cambiare le lenzuola" required></label>
      <label class="field">Quanto spesso<select class="input" name="every">${Ki.map(([e,a])=>`<option value="${e}" ${(t?t.every:7)===e?"selected":""}>${a}</option>`).join("")}</select></label>
      <label class="field">Fatta l'ultima volta<input class="input" type="date" name="lastDone" value="${t?t.lastDone:k()}" max="${k()}"></label>
      <div class="row">
        <button class="btn primary" type="submit">${t?"Salva":"Aggiungi"}</button>
        ${t?'<button class="btn" type="button" data-action="chore-cancel">Annulla</button>':""}
      </div>
    </form>`}F("attivita",{render(){const t=d.data,e=ve(t.todos.filter(s=>!s.done)),a=t.todos.filter(s=>s.done).sort((s,l)=>(l.doneAt||"").localeCompare(s.doneAt||"")).slice(0,30),i=[...t.chores].sort((s,l)=>Qt(s).localeCompare(Qt(l))),n=ga(t).length,o=d.ui.choreEdit?t.chores.find(s=>s.id===d.ui.choreEdit):null;return`
      ${G(e.length+" aperte"+(n?` · ${n} faccende da fare`:""),"Attività")}
      <section class="card">
        ${Bi()}
        <div class="list">${e.length?e.map(Zt).join(""):'<div class="empty">Nessuna attività aperta.</div>'}</div>
      </section>
      <section class="card" aria-labelledby="h-chores">
        <div class="card-head"><h2 id="h-chores">Faccende ricorrenti</h2><span class="sub">si ripresentano da sole: quando la fai, spunta</span></div>
        ${i.length?`<div class="list">${i.map(s=>je(s)).join("")}</div>`:'<div class="empty">Nessuna faccenda. Aggiungile man mano che ti vengono in mente, oppure parti dalle idee qui sotto.</div>'}
        <div class="divider-top stack-sm">
          <strong>${o?"Modifica faccenda":"Nuova faccenda"}</strong>
          ${Eo(o)}
          ${o?"":`<div class="shop-chips">${Io.filter(([s])=>!i.some(l=>l.name===s)).map(([s,l])=>`<button type="button" class="chip" data-action="chore-idea" data-name="${r(s)}" data-w="${l}">${r(s)}</button>`).join("")}</div>`}
        </div>
      </section>
      ${a.length?`
      <section class="card">
        <div class="card-head"><h2>Completate</h2><button class="link" data-action="clear-done">Elimina completate</button></div>
        <div class="list">${a.map(Zt).join("")}</div>
      </section>`:""}`},actions:{"clear-done"(){f(t=>{Q(t,t.todos.filter(e=>e.done).map(e=>e.id)),t.todos=t.todos.filter(e=>!e.done)})},"chore-done"(t){f(e=>{const a=e.chores.find(i=>i.id===t.dataset.id);a&&(a.lastDone=k(),N(a))})},"chore-idea"(t){const e=document.getElementById("chore-form");e&&(e.name.value=t.dataset.name,e.every.value=t.dataset.w,e.lastDone.focus())},"chore-edit"(t){d.ui.choreEdit=t.dataset.id,h("attivita"),O("#chore-name")},"chore-cancel"(){d.ui.choreEdit=null,h("attivita")},"chore-del"(t){const e=d.data.chores.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»?`)||f(a=>{a.chores=a.chores.filter(i=>i.id!==e.id),Q(a,e.id)})}},forms:{"chore-save"(t){const e=String(t.get("name")||"").trim();if(!e)return E("Scrivi la faccenda."),x();const a=Number(t.get("every"))||7,i=t.get("lastDone")||k(),n=t.get("id");f(o=>{if(n){const s=o.chores.find(l=>l.id===n);Object.assign(s,{name:e,every:a,lastDone:i}),N(s)}else o.chores.push(es({name:e,every:a,lastDone:i}))}),d.ui.choreEdit=null,h("attivita",{},n?"Faccenda aggiornata":`${e} aggiunta`)}}});const jo=["Compleanno","Natale","Anniversario","Altro"],Do={idea:"idea",preso:"preso",dato:"regalato"},Et=t=>String(t||"").trim().toLowerCase();function ia(t=k()){const e=Number(t.slice(0,4));return t>`${e}-12-26`?e+1:e}const Xi=(t,e)=>t.gifts.filter(a=>a.status==="idea"&&Et(a.person)===Et(e));function qo(t){return`
    <div class="item ${t.status==="dato"?"done":""}">
      <div class="text"><div>${r(t.text)}</div><div class="hint">${r(t.occasion)}${t.occasion==="Natale"||t.status!=="idea"?" "+t.year:""}${t.price?" · "+v(t.price):""}</div></div>
      <span class="tag ${t.status==="idea"?"":t.status==="preso"?"warn":"ent"}">${Do[t.status]}</span>
      ${t.link?`<button class="icon-btn" data-action="gift-link" data-id="${t.id}" aria-label="Apri il link di ${r(t.text)}">${A("doc",16)}</button>`:""}
      ${t.status==="idea"?`<button class="btn small" data-action="gift-status" data-id="${t.id}" data-s="preso">Preso</button>`:""}
      ${t.status==="preso"?`<button class="btn small" data-action="gift-status" data-id="${t.id}" data-s="dato">Regalato</button>`:""}
      <button class="icon-btn" data-action="gift-edit" data-id="${t.id}" aria-label="Modifica ${r(t.text)}">${A("edit",16)}</button>
      <button class="icon-btn" data-action="gift-del" data-id="${t.id}" aria-label="Elimina ${r(t.text)}">${A("trash",16)}</button>
    </div>`}function No(){const t=d.data,e=k(),a=ia(e),i=t.gifts.filter(b=>b.occasion==="Natale"&&(b.status==="idea"||b.year===a)),n=[...new Set(i.map(b=>b.person.trim()))],o=i.filter(b=>b.status!=="idea").reduce((b,m)=>b+(m.price||0),0),s=t.settings.xmasBudget||0,l=ze(t,e,P(e,60)).sort((b,m)=>b.date.localeCompare(m.date)),c=d.ui.giftEdit?t.gifts.find(b=>b.id===d.ui.giftEdit):null,u=[...new Set(t.gifts.map(b=>b.person.trim()))].sort((b,m)=>b.localeCompare(m,"it")),p=d.ui.giftGiven;return`
    ${G(`${t.gifts.filter(b=>b.status==="idea").length} idee da parte`,"Regali")}
    <section class="card" aria-labelledby="h-xmas">
      <div class="card-head"><h2 id="h-xmas">Natale ${a}</h2><span class="sub">tra ${Ce(e,`${a}-12-25`)} giorni</span></div>
      <div class="metrics">
        ${j("Persone",String(n.length))}
        ${j("Presi",`${i.filter(b=>b.status!=="idea").length} di ${i.length}`)}
        ${j("Speso",v(o),s&&o>s?"bad":"",s?`budget ${v(s)}`:"")}
      </div>
      <form class="row" data-form="xmas-budget">
        <label class="sr-only" for="xmas-b">Budget per Natale</label>
        <input class="input amount" id="xmas-b" name="budget" inputmode="decimal" value="${s?r(String(s).replace(".",",")):""}" placeholder="Budget €">
        <button class="btn small" type="submit">Imposta budget</button>
      </form>
      ${i.length?`<div class="list">${n.map(b=>{const m=i.filter(w=>Et(w.person)===Et(b));return`<div class="item"><div class="text"><div class="strong">${r(b)}</div><div class="hint">${m.map(w=>r(w.text)+(w.status!=="idea"?" ✓":"")).join(" · ")}</div></div>
          <span class="tag ${m.some(w=>w.status!=="idea")?"ent":"warn"}">${m.some(w=>w.status!=="idea")?"preso":"da prendere"}</span></div>`}).join("")}</div>`:`<div class="empty">Quando ti viene un'idea per Natale durante l'anno, aggiungila con occasione "Natale".</div>`}
    </section>

    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${l.length?`<section class="card" aria-labelledby="h-bd">
          <h2 id="h-bd">Compleanni nei prossimi 2 mesi</h2>
          <div class="list">${l.map(b=>{const m=Xi(t,b.contact.name);return`<div class="item"><div class="when">${r(z(b.date))}</div>
              <div class="text"><div>${r(b.contact.name)}${b.age?` <span class="hint">(${b.age})</span>`:""}</div><div class="hint">${m.length?m.map(w=>r(w.text)).join(" · "):"nessuna idea"}</div></div>
              <button class="btn small" data-action="gift-for" data-name="${r(b.contact.name)}">${A("plus",14)}Idea</button></div>`}).join("")}</div>
        </section>`:""}
        <section class="card" aria-labelledby="h-ideas">
          <div class="card-head"><h2 id="h-ideas">Per persona</h2><button class="link" data-action="gift-given">${p?"Nascondi i regali già fatti":"Mostra anche i regali già fatti"}</button></div>
          ${u.length?u.map(b=>{const m=t.gifts.filter(w=>Et(w.person)===Et(b)&&(p||w.status!=="dato"));return m.length?`<div class="shop-group"><h3 class="group-title">${r(b)} <span class="hint">${m.length}</span></h3><div class="list">${m.map(qo).join("")}</div></div>`:""}).join(""):'<div class="empty">Nessuna idea ancora. Annotale appena ti vengono: "le piacerebbe quel libro", "ha rotto le cuffie"…</div>'}
        </section>
      </div>
      <form class="card stack grow-1" data-form="gift-save" aria-labelledby="h-giftform">
        <div class="card-head"><h2 id="h-giftform">${c?"Modifica idea":"Nuova idea"}</h2>${c?'<button class="link" type="button" data-action="gift-cancel">Annulla</button>':""}</div>
        <input type="hidden" name="id" value="${c?c.id:""}">
        <label class="field">Per chi<input class="input" id="gift-person" name="person" list="gift-people" value="${r(c?c.person:d.ui.giftFor||"")}" placeholder="Nome" required></label>
        <datalist id="gift-people">${[...new Set([...t.contacts.map(b=>b.name),...u])].map(b=>`<option value="${r(b)}">`).join("")}</datalist>
        <label class="field">Idea<input class="input" id="gift-text" name="text" value="${r(c?c.text:"")}" placeholder="es. il libro di cui parlava" required></label>
        <div class="form-grid two">
          <label class="field">Occasione<select class="input" name="occasion">${jo.map(b=>`<option ${(c?c.occasion:"Compleanno")===b?"selected":""}>${b}</option>`).join("")}</select></label>
          <label class="field">Prezzo (€)<input class="input" name="price" inputmode="decimal" value="${c&&c.price?r(String(c.price).replace(".",",")):""}" placeholder="facoltativo"></label>
        </div>
        <label class="field">Link (facoltativo)<input class="input" name="link" value="${r(c?c.link:"")}" placeholder="https://…"></label>
        <button class="btn primary self-start" type="submit">${c?"Salva":"Aggiungi"}</button>
      </form>
    </div>`}const Pe=t=>d.data.gifts.find(e=>e.id===t);F("regali",{render:No,actions:{"gift-for"(t){d.ui.giftEdit=null,d.ui.giftFor=t.dataset.name,h("regali"),O("#gift-text")},"gift-given"(){d.ui.giftGiven=!d.ui.giftGiven,h("regali")},"gift-edit"(t){d.ui.giftEdit=t.dataset.id,h("regali"),O("#gift-text")},"gift-cancel"(){d.ui.giftEdit=null,h("regali")},"gift-status"(t){const e=Pe(t.dataset.id);e&&f(()=>{e.status=t.dataset.s,e.occasion==="Natale"?e.year=ia():e.year=Number(k().slice(0,4)),N(e)})},async"gift-link"(t){const e=Pe(t.dataset.id);if(!(!e||!e.link))try{await ee("open_document",{target:e.link})}catch(a){E(String(a)),x()}},"gift-del"(t){const e=Pe(t.dataset.id);!e||!window.confirm(`Eliminare l'idea «${e.text}»?`)||f(a=>{a.gifts=a.gifts.filter(i=>i.id!==e.id),Q(a,e.id)})}},forms:{"gift-save"(t,e){const a=String(t.get("person")||"").trim(),i=String(t.get("text")||"").trim();if(!a||!i)return E("Scrivi per chi è e l'idea."),x();const n=String(t.get("price")||"").trim(),o=n?U(n):null;if(n&&!(o>=0))return E("Il prezzo deve essere un numero, es. 25"),x();const s=String(t.get("link")||"").trim();if(s&&!/^https?:\/\//i.test(s))return E("Il link deve iniziare con https://"),x();const l=t.get("occasion")||"Altro",c=t.get("id");f(u=>{if(c){const p=u.gifts.find(b=>b.id===c);Object.assign(p,{person:a,text:i,price:o,link:s,occasion:l}),N(p)}else u.gifts.push(fi({person:a,text:i,price:o,link:s,occasion:l,year:l==="Natale"?ia():Number(k().slice(0,4))}))}),d.ui.giftEdit=null,d.ui.giftFor="",h("regali",{},c?"Idea aggiornata":`Idea per ${a} salvata`),O("#gift-person")},"xmas-budget"(t,e){const a=String(t.get("budget")||"").trim(),i=a?U(a):0;if(a&&!(i>=0))return E("Il budget deve essere un numero, es. 300"),x();f(n=>{n.settings.xmasBudget=i||0})}}});const Mo=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],Oo=["dom","lun","mar","mer","gio","ven","sab"],To="luned[iì]|marted[iì]|mercoled[iì]|gioved[iì]|venerd[iì]|sabato|domenica|lun|mar|mer|gio|ven|sab|dom",Ta=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],Po="(?![a-zà-ù])",Lo="(?<![a-zà-ù])",Zi=[[/pranzo|cena|colazione|bar\b|caff[eè]|pizza|aperitivo|ristorante|sushi|kebab|gelato|birra/i,"Bar e ristoranti"],[/supermercato|esselunga|coop\b|conad|lidl|carrefour|eurospin|pam\b|spesa\b|alimentari/i,"Spesa"],[/glovo|deliveroo|just ?eat|uber ?eats/i,"Delivery"],[/benzina|carburante|diesel|treno|trenitalia|italo|bus\b|metro|autostrada|telepass|parcheggio|taxi|uber\b/i,"Trasporti"],[/farmacia|medic|dentist|visita|ticket|ottico/i,"Salute"],[/netflix|spotify|prime\b|disney|abbonamento/i,"Abbonamenti"],[/cinema|concerto|teatro|museo|libro|videogioc|steam|playstation/i,"Svago"],[/bolletta|luce\b|gas\b|affitto|condominio/i,"Casa"],[/ricarica|telefono|internet|fibra/i,"Telefono e internet"]];function Le(t,e){for(const[a,i]of Zi)if(a.test(t)&&e.includes(i))return i;return e.includes("Altro")?"Altro":e[0]||"Altro"}function Re(t,e=k()){const a=n=>(t.slice(0,n.index)+t.slice(n.index+n[0].length)).replace(/\s{2,}/g," ").replace(/\s+([,.;:])/g,"$1").trim();let i;if(i=/\b(?:per |entro )?(oggi|stasera|stamattina)\b/i.exec(t))return{due:e,rest:a(i)};if(i=/\b(?:per |entro )?dopodomani\b/i.exec(t))return{due:P(e,2),rest:a(i)};if(i=/\b(?:per |entro )?domani\b/i.exec(t))return{due:P(e,1),rest:a(i)};if(i=/\b(?:fra|tra) (\d{1,3}) giorni\b/i.exec(t))return{due:P(e,Number(i[1])),rest:a(i)};if(i=/\b(?:fra|tra) una settimana\b/i.exec(t))return{due:P(e,7),rest:a(i)};if(i=new RegExp(`${Lo}(?:per |entro |)(${To})(?: prossimo| prossima)?${Po}`,"i").exec(t)){const n=i[1].toLowerCase().replace("ì","i");let o=Mo.findIndex(s=>s.replace("ì","i")===n);if(o<0&&(o=Oo.indexOf(n)),o>=0){const s=new Date(e+"T12:00:00").getDay();let l=(o-s+7)%7;return l===0&&(l=7),{due:P(e,l),rest:a(i)}}}if(i=new RegExp(`\\b(?:il |per il |entro il )?(\\d{1,2}) (${Ta.join("|")})(?: (\\d{4}))?\\b`,"i").exec(t)){const n=Number(e.slice(0,4)),o=Ta.indexOf(i[2].toLowerCase())+1;let s=`${i[3]||n}-${String(o).padStart(2,"0")}-${String(Number(i[1])).padStart(2,"0")}`;return!i[3]&&s<e&&(s=`${n+1}${s.slice(4)}`),{due:s,rest:a(i)}}if(i=/\b(?:il |per il |entro il )?(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/.exec(t)){const n=Number(e.slice(0,4));let s=`${i[3]?i[3].length===2?2e3+Number(i[3]):Number(i[3]):n}-${String(Number(i[2])).padStart(2,"0")}-${String(Number(i[1])).padStart(2,"0")}`;if(!i[3]&&s<e&&(s=`${n+1}${s.slice(4)}`),Number(i[2])>=1&&Number(i[2])<=12&&Number(i[1])>=1&&Number(i[1])<=31)return{due:s,rest:a(i)}}if(i=/\b(?:il |per il |entro il )(\d{1,2})\b(?![:.,]\d)/i.exec(t)){const n=Number(i[1]);if(n>=1&&n<=31){let o=`${e.slice(0,8)}${String(n).padStart(2,"0")}`;if(o<e){const[s,l]=e.split("-").map(Number),c=new Date(s,l,15);o=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(n).padStart(2,"0")}`}return{due:o,rest:a(i)}}}return{due:null,rest:t}}function Pa(t){const e=i=>(t.slice(0,i.index)+t.slice(i.index+i[0].length)).replace(/\s{2,}/g," ").trim();let a=/(?:\b(?:alle|all'|ore|h)\s*)?\b([01]?\d|2[0-3]):([0-5]\d)\b(?![.,]\d)/i.exec(t)||/\b(?:alle|all'|ore)\s*([01]?\d|2[0-3])\.([0-5]\d)\b(?![.,]\d)/i.exec(t);return a?{time:`${a[1].padStart(2,"0")}:${a[2]}`,rest:e(a)}:(a=/\b(?:alle|ore)\s+([01]?\d|2[0-3])\b(?![.,:]\d)/i.exec(t))?{time:`${a[1].padStart(2,"0")}:00`,rest:e(a)}:{time:null,rest:t}}const V=t=>/^[a-z][A-Z]/.test(t)?t:t.charAt(0).toUpperCase()+t.slice(1),Fe=t=>t.replace(/^(?:il|lo|la|i|gli|le|un|uno|una|l'|un')\s*(?=\S)/i,e=>/'$/.test(e)||/\s$/.test(e)?"":e).trim();function La(t){if(/\b(per|regalo|a casa|di sera)\b/i.test(t))return!1;const e=t.split(/\s*(?:,|;|\be\b)\s*/i).filter(Boolean);return e.length>=1&&e.every(a=>a.trim().split(/\s+/).length<=3)}const se=t=>t.split(/\s*(?:,|;|\be\b)\s*/i).map(e=>e.trim()).filter(Boolean).map(V),Y=t=>String(t||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\s+/g," ").trim(),Ra={abbr:"Abbreviazione",dest:"Va in",area:"Reparto della spesa",full:"Scorciatoia"},na={todo:"Attività",shop:"Spesa",expense:"Uscita",income:"Entrata",sale:"Da vendere",deadline:"Scadenza",habit:"Abitudine",watch:"Da vedere",note:"Da smistare"},Ro=t=>Array.isArray(t?.settings?.cifrario)?t.settings.cifrario.filter(e=>e&&e.word&&!e.off):[],sa=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function oa(t,e){const a=Y(e);return!!a&&new RegExp(`(?<![a-z0-9])${sa(a)}(?![a-z0-9])`).test(t)}function Fo(t,e){const a=Ro(e);let i=t;const n=[],o={};if(!a.length)return{text:i,hint:o,used:n};const s=a.find(c=>c.kind==="full"&&Y(c.word)===Y(i)&&c.to);s&&(i=String(s.to),n.push(s));for(const c of a.filter(u=>u.kind==="abbr"&&u.to).sort((u,p)=>Y(p.word).length-Y(u.word).length)){const u=i.replace(/\s+/g," ").trim(),p=Y(u),b=new RegExp(`(?<![a-z0-9])${sa(Y(c.word))}(?![a-z0-9])`).exec(p);b&&(i=p.length===u.length?u.slice(0,b.index)+c.to+u.slice(b.index+b[0].length):u.replace(new RegExp(`(?<![\\wà-ù])${sa(c.word)}(?![\\wà-ù])`,"i"),c.to),n.push(c))}const l=Y(i);for(const c of a)c.kind==="dest"&&c.dest&&!o.dest&&oa(l,c.word)&&(o.dest=c.dest,c.category&&(o.category=c.category),c.habit&&(o.habit=c.habit),c.area&&(o.area=c.area),n.push(c)),c.kind==="area"&&c.area&&oa(l,c.word)&&((o.areas=o.areas||[]).push({word:Y(c.word),area:c.area}),n.push(c));return{text:i,hint:o,used:n}}function Bo(t,e){const a=Y(t),i=(e?.areas||[]).find(n=>oa(a,n.word));return i?i.area:e?.area||null}function Fa(t,e){const a=Y(e);if(!a)return null;const i=(t.habits||[]).filter(n=>!n.archived);return i.find(n=>Y(n.name)===a)||i.find(n=>Y(n.name).startsWith(a)||a.startsWith(Y(n.name)))||null}function Ji(t,e,a=null){const i=String(t||"").trim().replace(/\s+/g," ");if(!i)return null;const n=Fo(i,e),o=Vo(n.text,e,a||n.hint.dest||null,n.hint);return o&&(o.via=n.used,o.src=i,o.dest==="shop"&&(o.areas=o.items.map(s=>Bo(s,n.hint)))),o}function Vo(t,e,a,i={}){const n=e.categories?.out||[],o=e.categories?.in||[];let s;if((s=/^(?:spesa|da prendere)\s*[:\-]?\s+(.+)$/i.exec(t))&&(!a||a==="shop"))return{dest:"shop",items:se(s[1])};if((s=/^(?:compra(?:re)?|prendere)\s*[:\-]?\s+(.+)$/i.exec(t))&&!a&&La(s[1]))return{dest:"shop",items:se(s[1])};if((s=/^(?:idea\s+)?regalo(?:\s+(?:per|a))?\s+([^:]+?)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="gift")){const y=/natale/i.test(t);return{dest:"gift",person:V(s[1].trim()),text:V(s[2].trim()),occasion:y?"Natale":"Compleanno"}}if((s=/^(film|serie|libro|da vedere|da leggere)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="watch")){const y=s[1].toLowerCase();return{dest:"watch",kind:y==="film"?"Film":y==="serie"?"Serie":y==="libro"||y==="da leggere"?"Libro":"Film",title:s[2].trim()}}if((s=/^(nota|idea|appunto|pensiero)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="note"))return{dest:"note",text:V(s[2].trim())};if((s=/^(?:vend(?:o|ere)|da vendere|metti in vendita|mettere in vendita)\s*[:\-]?\s+(.+)$/i.exec(t))&&(!a||a==="sale")){const y=/^(.+?)\s+(?:a\s+)?(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?$/i.exec(s[1].trim());return{dest:"sale",name:V(Fe((y?y[1]:s[1]).trim())),price:y?R(y[2]):null}}if(!a||a==="loan"){const y="(\\d{1,6}(?:[.,]\\d{1,2})?)\\s*(?:€|euro)?";if(s=new RegExp(`^(?:ho\\s+)?prestat[oiae]\\s+${y}\\s+a\\s+(.+)$`,"i").exec(t))return{dest:"loan",dir:"out",amount:R(s[1]),person:V(s[2].trim())};if(s=new RegExp(`^(.+?)\\s+mi\\s+deve\\s+${y}(?:\\s+(?:per\\s+)?(.+))?$`,"i").exec(t))return{dest:"loan",dir:"out",amount:R(s[2]),person:V(s[1].trim()),note:s[3]?V(s[3].trim()):""};if(s=new RegExp(`^devo\\s+${y}\\s+a\\s+(.+)$`,"i").exec(t))return{dest:"loan",dir:"in",amount:R(s[1]),person:V(s[2].trim())};if(s=new RegExp(`^(.+?)\\s+mi\\s+ha\\s+prestato\\s+${y}$`,"i").exec(t))return{dest:"loan",dir:"in",amount:R(s[2]),person:V(s[1].trim())}}if(!a||a==="habit"){if(s=/^(?:fatt[oa]|fatti|ho fatto)\s+(.+)$/i.exec(t)){const y=Fa(e,s[1]);if(y)return{dest:"habit",habitId:y.id,name:y.name}}if(a==="habit"){const y=Fa(e,i.habit||t.replace(/^(?:fatt[oa]|fatti|ho fatto)\s+/i,""));return{dest:"habit",habitId:y?y.id:null,name:y?y.name:V(t)}}}if((s=/^(?:incassat[oi]|ricevut[oi]|entrat[ae])\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s*(?:da\s+|per\s+)?(.*)$/i.exec(t))&&(!a||a==="income")){const y=V((s[2]||"Entrata").trim());return{dest:"income",amount:R(s[1]),note:y,category:i.category&&o.includes(i.category)?i.category:o.includes("Altre entrate")?"Altre entrate":o[0]||"Altre entrate"}}if((s=/^(?:spes[oi]|pagat[oi]|uscit[ae])\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s*(?:di\s+|per\s+|in\s+)?(.*)$/i.exec(t))&&(!a||a==="expense")){const y=V((s[2]||"Spesa").trim());return{dest:"expense",amount:R(s[1]),note:y,category:i.category&&n.includes(i.category)?i.category:Le(y,n)}}if(/\bscad(?:e|ono|enza|ere)\b/i.test(t)&&(!a||a==="deadline")){const{due:y,rest:q}=Re(t);return{dest:"deadline",name:V(Fe(q.replace(/\b(?:mi\s+)?scad(?:e|ono|enza|ere)\b\s*(?:il\s+|l'|di\s+)?/i,"").replace(/\s{2,}/g," ").trim())||"Scadenza"),due:y}}const l=y=>(e.shopping||[]).some(q=>Y(q.name)===Y(y));if((s=/^(\d{1,2})\s+([a-zà-ù][a-zà-ù'’]*(?:\s+[a-zà-ù'’]+)?)$/i.exec(t))&&(!a||a==="shop")&&(l(s[2])||Number(s[1])<=12&&!Zi.some(([y])=>y.test(s[2]))))return{dest:"shop",items:[V(s[2].trim())],qty:s[1]};if((s=/^(.+?)\s+x\s?(\d{1,2})$/i.exec(t))&&(!a||a==="shop"))return{dest:"shop",items:[V(s[1].trim())],qty:s[2]};const c=/^(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s+(.+)$/i.exec(t)||/^(.+?)\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)$/i.exec(t)||/^(.+?)\s+(\d{1,6}[.,]\d{2})$/.exec(t);if(c&&(!a||a==="expense"||a==="income")&&!Pa(t).time){const y=/^\d/.test(t),q=R(y?c[1]:c[2]),D=V((y?c[2]:c[1]).trim());if(q>0&&a==="income")return{dest:"income",amount:q,note:D,category:o.includes("Altre entrate")?"Altre entrate":o[0]||"Altre entrate"};if(q>0)return{dest:"expense",amount:q,note:D,category:i.category&&n.includes(i.category)?i.category:Le(D,n)}}if(a==="shop")return{dest:"shop",items:se(t)};if(a==="gift"){const y=t.split(":");return{dest:"gift",person:V((y.length>1?y[0]:"").trim()),text:V((y.length>1?y.slice(1).join(":"):t).trim()),occasion:"Compleanno"}}if(a==="watch")return{dest:"watch",kind:"Film",title:t};if(a==="sale"){const y=/^(.+?)\s+(?:a\s+)?(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?$/i.exec(t);return{dest:"sale",name:V((y?y[1]:t).trim()),price:y?R(y[2]):null}}if(a==="expense"){const y=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"expense",amount:y?R(y[1]):null,note:V(y&&t.replace(y[0],"").replace(/\s*(?:€|euro)\s*/i," ").trim()||t),category:i.category&&n.includes(i.category)?i.category:Le(t,n)}}if(a==="income"){const y=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"income",amount:y?R(y[1]):null,note:V(y&&t.replace(y[0],"").replace(/\s*(?:€|euro)\s*/i," ").trim()||t),category:i.category&&o.includes(i.category)?i.category:o.includes("Altre entrate")?"Altre entrate":o[0]||"Altre entrate"}}if(a==="note")return{dest:"note",text:V(t)};if(a==="deadline"){const{due:y,rest:q}=Re(t);return{dest:"deadline",name:V(Fe(q)||t),due:y}}if(a==="loan"){const y=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"loan",dir:"out",amount:y?R(y[1]):null,person:V((y?t.replace(y[0],""):t).replace(/\s*(?:€|euro)\s*/i," ").replace(/^\s*a\s+/i,"").trim())}}const u=Pa(t),{due:p,rest:b}=Re(u.rest);if(p||u.time||a==="todo")return{dest:"todo",text:V((b||t).replace(/^devo\s+/i,"")),due:p||(u.time?k():null),time:u.time};const m=t.split(" "),w=/^(devo|chiamare|scrivere|pagare|prenotare|portare|mandare|fare|comprare|ritirare|controllare|sentire|rinnovare|disdire|cercare|preparare|pulire|sistemare|andare|ricordare|[a-zà-ù]+(?:are|ere|ire))\b/i.test(t);return l(t)||!w&&(m.length<=3||La(t))?{dest:"shop",items:se(t)}:{dest:"todo",text:V(t.replace(/^devo\s+/i,"")),due:null,time:null}}function tn(t){return String(t||"").split(/,(?!\d)|;|\n/).map(e=>e.trim()).filter(Boolean)}function he(t,e,a={}){return tn(t).map((i,n)=>Ji(i,e,a[n]&&a[n].src===i?a[n].dest:null)).filter(Boolean)}function en(t){const e=/^(il|lo|la|i|gli|le|un|uno|una|di|a|da|in|con|su|per|tra|fra|e|ho|mi|devo|fatto|fatta|spesi|pagato|alle|ore|oggi|domani)$/i;return String(t||"").toLowerCase().split(/[\s,.:;]+/).filter(i=>i&&!/^\d/.test(i)&&!e.test(i))[0]||""}const St={todo:{label:"Attività",where:"Attività",ic:"todo",cls:"acc"},shop:{label:"Spesa",where:"Spesa",ic:"cart",cls:"good"},expense:{label:"Uscita",where:"Finanze",ic:"wallet",cls:"warn"},income:{label:"Entrata",where:"Finanze",ic:"wallet",cls:"good"},sale:{label:"Da vendere",where:"Vendite",ic:"tag",cls:"warn"},deadline:{label:"Scadenza",where:"Scadenze",ic:"doc",cls:"bad"},gift:{label:"Regalo",where:"Rubrica · Regali",ic:"gift",cls:"vio"},loan:{label:"Prestito",where:"Rubrica · Prestiti",ic:"loan",cls:"vio"},habit:{label:"Abitudine",where:"Abitudini",ic:"habit",cls:"good"},watch:{label:"Da vedere",where:"Da vedere",ic:"film",cls:"vio"},note:{label:"Nota",where:"Da smistare",ic:"edit",cls:""}},Be=Object.keys(St),Uo=["dentista mar 17:30","latte, pane, 2 detersivo","spesi 23,50 benzina","vendo monitor 80","bollo scade il 30","prestato 20 a Luca","regalo mamma: sciarpa","fatto palestra","idea: mensola in corridoio"],fe=t=>t===k()?"oggi":z(t);function ue(t,e){const a=[];let i="",n="";switch(t.dest){case"todo":i=t.text,a.push(["data",t.due?fe(t.due):"senza data"]),t.time&&a.push(["ora",t.time]);break;case"shop":i=t.items.join(", "),t.qty&&a.push(["quantità",t.qty]),t.items.forEach((o,s)=>{const l=At(e,o),c=t.areas&&t.areas[s]||l&&l.area;c&&c!=="Altro"&&a.push(["reparto",c])}),t.items.some(o=>At(e,o))&&a.push(["","già in elenco: la rimetto da prendere"]);break;case"expense":case"income":i=t.note,t.amount>0?a.push([t.dest==="expense"?"uscita":"entrata",v(t.amount)]):n=`manca l'importo, es. "12,50 pranzo"`,a.push(["categoria",t.category]),K(e)||(n="crea prima un conto in Finanze");break;case"sale":i=t.name,a.push(["prezzo",t.price?v(t.price):"da decidere"]);break;case"deadline":i=t.name,t.due?a.push(["scade",fe(t.due)],["avviso","30 giorni prima"]):n='manca la data, es. "bollo scade il 30"';break;case"gift":i=t.text,t.person?a.push(["per",t.person]):n='scrivi "regalo Nome: idea"',t.occasion==="Natale"&&a.push(["","Natale"]);break;case"loan":i=t.person||"—",!(t.amount>0)||!t.person?n='scrivi "prestato 20 a Luca" o "Luca mi deve 20"':a.push([t.dir==="out"?"ti deve":"devi",v(t.amount)]);break;case"habit":i=t.name,t.habitId?a.push(["segna","fatta oggi"]):n="non trovo questa abitudine tra le tue";break;case"watch":i=t.title,a.push(["tipo",t.kind]);break;case"note":i=t.text;break}return{title:i,fields:a,problem:n}}function ya(t="card"){if(d.ui.capOverlay&&t!=="pop")return t==="bar"?_o():"";const e=d.ui.capText||"";return`
    <section class="cap cap-${t} ${t==="card"?"card":""}" aria-label="Annota al volo">
      <form class="cap-form" data-form="cap-save">
        <span class="cap-title">Annota al volo</span>
        <label class="sr-only" for="cap-text">Cosa vuoi annotare</label>
        <input class="input grow" id="cap-text" name="text" autocomplete="off" value="${r(e)}"
          placeholder="Una o più cose, separate da virgola: latte · chiamare Marco venerdì 17:30 · 12,50 pranzo · bollo scade il 30">
        <button class="btn primary" type="submit" id="cap-save">Salva</button>
      </form>
      <div class="cap-body" id="cap-body">${an()}</div>
    </section>`}function _o(){return`<div class="cap cap-bar"><button class="cap-idle" data-action="cap-open">${A("edit",16)}<span class="cap-title">Annota al volo</span><span class="hint">Ctrl+Alt+Spazio</span></button></div>`}function an(){const t=d.data,e=he(d.ui.capText||"",t,d.ui.capForces||{}),a=(d.ui.capRecent||[]).slice(0,4),i=e.length?`
    <div class="cap-head"><span class="label">Ho capito</span><span class="hint">clic sul tipo per cambiarlo</span></div>
    <div class="cap-items">${e.map((s,l)=>{const c=St[s.dest],u=ue(s,t),b=d.ui.capForces&&d.ui.capForces[l]&&d.ui.capForces[l].src===s.src?en(s.src):"",m=b&&(t.settings.cifrario||[]).some(w=>w.word.toLowerCase()===b&&w.kind==="dest"&&w.dest===s.dest);return`
      <div class="cap-item ${c.cls} ${u.problem?"has-problem":""}">
        <div class="cap-item-top">
          <button type="button" class="cap-type" data-action="cap-cycle" data-i="${l}" aria-label="Tipo: ${r(c.label)}. Clic per cambiarlo">${A(c.ic,14)}${r(c.label)}${A("right",12,2.4)}</button>
          <span class="hint">→ ${r(c.where)}</span>
          ${s.via&&s.via.length?`<span class="tag cap-via" title="${r(s.via.map(w=>w.word).join(", "))}">dal tuo cifrario</span>`:""}
        </div>
        <div class="cap-item-title">${r(u.title)}</div>
        ${u.fields.length?`<div class="cap-fields">${u.fields.map(([w,y])=>`<span>${w?`<span class="hint">${r(w)}</span> `:""}${r(y)}</span>`).join("")}</div>`:""}
        ${u.problem?`<div class="cap-problem">${r(u.problem)}</div>`:""}
        ${b&&!m?`<div class="cap-remember"><span>Ricordo che «${r(b)}» va in ${r(c.label)}?</span><button type="button" class="btn small" data-action="cap-remember" data-i="${l}">Sì, ricorda</button></div>`:""}
      </div>`}).join("")}</div>`:`
    <div class="cap-examples"><span class="hint">Prova:</span>${Uo.map(s=>`<button type="button" class="chip" data-action="cap-example" data-text="${r(s)}">${r(s)}</button>`).join("")}</div>`,n=a.length?`
    <div class="cap-recent"><div class="cap-head"><span class="label">Appena annotate</span></div>
    ${a.map((s,l)=>`<div class="cap-rec"><span class="dot-cat ${St[s.dest]?.cls||""}" aria-hidden="true"></span><span class="grow">${r(s.title)}</span><span class="hint">${r(St[s.dest]?.where||"")} · ${r(s.at)}</span>${s.undo?`<button type="button" class="btn small" data-action="cap-undo" data-i="${l}">Annulla</button>`:'<span class="hint">annullata</span>'}</div>`).join("")}</div>`:"",o=`<div class="cap-keys hint"><span><kbd>Invio</kbd> salva tutto</span><span><kbd>,</kbd> più cose insieme</span><span><kbd>Win</kbd>+<kbd>H</kbd> detta a voce</span><span><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Spazio</kbd> da ovunque</span>${d.ui.capOverlay?"<span><kbd>Esc</kbd> chiudi</span>":""}</div>`;return i+n+o}function $e(){const t=document.getElementById("cap-text"),e=t&&t.closest(".cap");e&&e.classList.toggle("has-text",!!(d.ui.capText||"").trim());const a=document.getElementById("cap-body");a&&(a.innerHTML=an());const i=document.getElementById("cap-save");if(i){const n=tn(d.ui.capText||"").length;i.textContent=n>1?`Salva (${n})`:"Salva"}}function Go(){const t=document.getElementById("cap-overlay");t&&t.addEventListener("mousedown",a=>{a.target===t&&wa()});const e=document.getElementById("cap-text");e&&(e.addEventListener("input",()=>{d.ui.capText=e.value,e.value.trim()||(d.ui.capForces={}),$e()}),$e())}function nn(){d.ui.capOverlay=!0,x(),O("#cap-text")}function wa(){d.ui.capOverlay&&(d.ui.capOverlay=!1,x())}function Wo(){return d.ui.capOverlay?`<div class="cap-overlay" id="cap-overlay"><div class="cap-dialog" role="dialog" aria-modal="true" aria-label="Annota al volo">
    <button class="icon-btn cap-close" data-action="cap-close" aria-label="Chiudi">${A("plus",18)}</button>
    ${ya("pop")}</div></div>`:""}function Ho(t,e){const a=k();switch(e.dest){case"todo":{const i=Jt({text:e.text,due:e.due,time:e.time||null});return t.todos.push(i),{title:e.text+(e.due?` · ${fe(e.due)}${e.time?" "+e.time:""}`:""),undo:n=>{n.todos=n.todos.filter(o=>o.id!==i.id),Q(n,i.id)}}}case"shop":{const i=[];return e.items.forEach((n,o)=>{const s=e.areas&&e.areas[o]||null,l=At(t,n);if(l){const c={need:l.need,boughtAt:l.boughtAt,note:l.note,area:l.area};l.need=!0,l.boughtAt=null,e.qty&&(l.note=e.qty+(l.note&&!/^\d+$/.test(l.note)?" · "+l.note:"")),s&&(l.area=s),N(l),i.push(u=>{const p=u.shopping.find(b=>b.id===l.id);p&&(Object.assign(p,c),N(p))})}else{const c=Mt({name:n,need:!0,area:s||"Altro",note:e.qty||""});t.shopping.push(c),s&&!t.shopAreas.includes(s)&&t.shopAreas.splice(Math.max(0,t.shopAreas.length-1),0,s),i.push(u=>{u.shopping=u.shopping.filter(p=>p.id!==c.id),Q(u,c.id)})}}),{title:(e.qty?e.qty+" ":"")+e.items.join(", "),undo:n=>i.forEach(o=>o(n))}}case"expense":case"income":{const i=K(t),n={id:W(),accountId:i.id,date:a,type:e.dest==="expense"?"out":"in",amount:e.amount,category:e.category,note:e.note,transfer:!1,invest:!1,createdAt:new Date().toISOString()};return t.transactions.push(n),{title:`${e.note} ${e.dest==="expense"?"−":"+"}${v(e.amount)}`,undo:o=>{o.transactions=o.transactions.filter(s=>s.id!==n.id)}}}case"sale":{const i=ki({name:e.name,price:e.price});return t.sales.push(i),{title:e.name+(e.price?" · "+v(e.price):""),undo:n=>{n.sales=n.sales.filter(o=>o.id!==i.id)}}}case"deadline":{const i=Ie({name:e.name,due:e.due});return t.deadlines.push(i),{title:`${e.name} · ${fe(e.due)}`,undo:n=>{n.deadlines=n.deadlines.filter(o=>o.id!==i.id)}}}case"gift":{const i=fi({person:e.person,text:e.text,occasion:e.occasion});return t.gifts.push(i),{title:`${e.text} per ${e.person}`,undo:n=>{n.gifts=n.gifts.filter(o=>o.id!==i.id)}}}case"loan":{const i=wi({person:e.person,dir:e.dir,amount:e.amount,note:e.note||""});return t.loans.push(i),{title:`${e.person} ${e.dir==="out"?"ti deve":"devi"} ${v(e.amount)}`,undo:n=>{n.loans=n.loans.filter(o=>o.id!==i.id)}}}case"habit":{const i=t.habits.find(o=>o.id===e.habitId),n=!!t.habitLog[i.id]?.[a];return n||Xe(t,i,a),{title:`${i.name} fatta`,undo:n?null:o=>{const s=o.habits.find(l=>l.id===i.id);s&&o.habitLog[s.id]?.[a]&&Xe(o,s,a)}}}case"watch":{const i=yi({title:e.title,kind:e.kind});return t.watchlist.push(i),{title:e.title,undo:n=>{n.watchlist=n.watchlist.filter(o=>o.id!==i.id)}}}case"note":{const i=is({text:e.text});return t.inbox.push(i),{title:e.text,undo:n=>{n.inbox=n.inbox.filter(o=>o.id!==i.id)}}}}return null}function Qo(){const t=d.data,e=he(d.ui.capText||"",t,d.ui.capForces||{});if(!e.length)return;const a=e.filter(n=>!ue(n,t).problem),i=e.filter(n=>ue(n,t).problem);d.ui.capText=i.map(n=>n.src).join(", "),d.ui.capForces={},i.length?E(`${a.length?`Salvate ${a.length}. `:""}Da sistemare: ${i.map(n=>`"${n.src}" (${ue(n,t).problem})`).join("; ")}`):T(a.length===1?`Annotata: ${St[a[0].dest].label.toLowerCase()} → ${St[a[0].dest].where}`:`Annotate ${a.length} cose`),a.length?f(n=>{const o=[];for(const s of a){const l=Ho(n,s);l&&o.push(Object.assign(l,{dest:s.dest,at:as()}))}d.ui.capRecent=o.reverse().concat(d.ui.capRecent||[]).slice(0,8)}):x(),O("#cap-text")}F("cattura",{actions:{"cap-cycle"(t){const e=he(d.ui.capText||"",d.data,d.ui.capForces||{}),a=Number(t.dataset.i),i=e[a];if(!i)return;const n=Be[(Be.indexOf(i.dest)+1)%Be.length];d.ui.capForces=Object.assign({},d.ui.capForces,{[a]:{src:i.src,dest:n}}),$e(),requestAnimationFrame(()=>{const o=document.querySelector(`[data-action="cap-cycle"][data-i="${a}"]`);o&&o.focus()})},"cap-remember"(t){const a=he(d.ui.capText||"",d.data,d.ui.capForces||{})[Number(t.dataset.i)];if(!a)return;const i=en(a.src);if(!i)return;const n={word:i,kind:"dest",dest:a.dest};(a.dest==="expense"||a.dest==="income")&&(n.category=a.category),a.dest==="habit"&&a.name&&(n.habit=a.name),a.dest in na&&(T(`Ricordato: «${i}» → ${St[a.dest].label}. Lo trovi in Impostazioni → Cifrario`),f(o=>{o.settings.cifrario=(o.settings.cifrario||[]).filter(s=>!(s.kind==="dest"&&s.word.toLowerCase()===i)).concat([$i(n)])}),O("#cap-text"))},"cap-example"(t){d.ui.capText=t.dataset.text,d.ui.capForces={};const e=document.getElementById("cap-text");e&&(e.value=d.ui.capText,e.focus()),$e()},"cap-undo"(t){const e=(d.ui.capRecent||[])[Number(t.dataset.i)];if(!e||!e.undo)return;const a=e.undo;e.undo=null,T("Annullata: "+e.title),f(i=>a(i))},"cap-open"(){nn()},"cap-close"(){wa()},"inbox-todo"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(T("Spostata in Attività"),f(a=>{a.inbox=a.inbox.filter(i=>i.id!==e.id),a.todos.push(Jt({text:e.text}))}))},"inbox-shop"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(T("Spostata nella Spesa"),f(a=>{a.inbox=a.inbox.filter(n=>n.id!==e.id);const i=At(a,e.text);i?(i.need=!0,i.boughtAt=null,N(i)):a.shopping.push(Mt({name:e.text}))}))},"inbox-edit"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(d.ui.capText=e.text,d.ui.capForces={},f(a=>{a.inbox=a.inbox.filter(i=>i.id!==e.id)}),O("#cap-text"))},"inbox-del"(t){f(e=>{e.inbox=e.inbox.filter(a=>a.id!==t.dataset.id)})}},forms:{"cap-save"(t){d.ui.capText=String(t.get("text")||""),d.ui.capText.trim()&&Qo()}}});function sn(t){return t.inbox.length?`
    <section class="card" aria-labelledby="h-inbox">
      <div class="card-head"><h2 id="h-inbox">Da smistare</h2><span class="sub">${t.inbox.length}</span></div>
      <div class="list">${t.inbox.slice().reverse().map(e=>`
        <div class="item"><div class="text">${r(e.text)}</div>
          <button class="btn small" data-action="inbox-todo" data-id="${e.id}">Attività</button>
          <button class="btn small" data-action="inbox-shop" data-id="${e.id}">Spesa</button>
          <button class="icon-btn" data-action="inbox-edit" data-id="${e.id}" aria-label="Riscrivi in Annota al volo: ${r(e.text)}">${A("edit",16)}</button>
          <button class="icon-btn" data-action="inbox-del" data-id="${e.id}" aria-label="Elimina ${r(e.text)}">${A("trash",16)}</button>
        </div>`).join("")}</div>
    </section>`:""}Ot.overlay=Wo;Ot.bar=()=>ya("bar");Ot.after.push(t=>{t==="main"?Go():d.ui.capOverlay=!1});const Yo={pag:"Pagamento",scad:"Scadenza",comp:"Compleanno",att:"Attività"},Ba=(t,e)=>`${z(t)} – ${z(e)}`;function on(t){const e=k(),a=new Date(e+"T12:00:00").getDay();if(a!==0&&a!==1)return"";const i=a===0?st(e):P(st(e),-7),n=Si(t,i),o=n.habits.filter(s=>s.n>=s.h.perWeek).length;return`
    <section class="card" aria-labelledby="h-week">
      <div class="card-head"><h2 id="h-week">${a===0?"La tua settimana":"La settimana scorsa"}</h2><button class="link" data-action="week-open" data-mon="${i}">Apri il riepilogo</button></div>
      <div class="sub">Speso ${v(n.out)}${n.avgOut!=null?` (media ${v(n.avgOut)})`:""} · ${n.doneTodos.length} attività fatte${n.habits.length?` · abitudini ${o}/${n.habits.length}`:""}${n.next.length?` · ${n.next.length} cose la prossima settimana`:""}</div>
    </section>`}function Ko(){const t=d.data,e=d.ui.weekOff??0,a=P(st(k()),-7*e),i=Si(t,a),n=i.avgOut!=null?Math.round((i.out-i.avgOut)*100)/100:null,o=i.habits.filter(l=>l.n>=l.h.perWeek).length,s=i.cats.length?i.cats[0][1]:1;return`
    ${G(Ba(i.mon,i.sun),e===0?"Questa settimana":e===1?"La settimana scorsa":"La tua settimana",`
      <button class="icon-btn" data-action="week-nav" data-n="1" aria-label="Settimana precedente">${A("left")}</button>
      ${e?'<button class="btn" data-action="week-nav" data-n="0">Questa settimana</button>':""}
      <button class="icon-btn" data-action="week-nav" data-n="-1" ${e?"":"disabled"} aria-label="Settimana successiva">${A("right")}</button>`)}
    <section class="metrics">
      ${j("Speso",v(i.out),n!=null&&n>0?"warn":"",i.avgOut!=null?n>0?`${v(n)} più della media`:n<0?`${v(-n)} meno della media`:"come la media":"esclusi giroconti e investimenti")}
      ${j("Entrate",v(i.inc),i.inc?"good":"")}
      ${j("Attività fatte",String(i.doneTodos.length),"",i.chores.length?`+ ${i.chores.length} faccende`:"")}
      ${j("Abitudini rispettate",i.habits.length?`${o} di ${i.habits.length}`:"—",i.habits.length&&o===i.habits.length?"good":"")}
    </section>
    <div class="grid">
      <section class="card" aria-labelledby="h-wcat">
        <h2 id="h-wcat">Dove sono andati i soldi</h2>
        ${i.cats.length?`<div class="stack-sm">${i.cats.slice(0,6).map(([l,c])=>`
          <div><div class="cat-row"><span>${r(l)}</span><span class="money">${v(c)}</span></div><div class="progress cat"><div style="width:${Math.round(c/s*100)}%"></div></div></div>`).join("")}</div>`:'<div class="empty">Nessuna spesa registrata in questa settimana.</div>'}
      </section>
      <section class="card" aria-labelledby="h-whab">
        <h2 id="h-whab">Abitudini</h2>
        ${i.habits.length?`<div class="list">${i.habits.map(({h:l,n:c})=>`
          <div class="item"><div class="text">${r(l.name)}</div><span class="tag ${c>=l.perWeek?"ent":c?"warn":""}">${c}/${l.perWeek}</span></div>`).join("")}</div>`:'<div class="empty">Nessuna abitudine da seguire.</div>'}
      </section>
      <section class="card" aria-labelledby="h-wdone">
        <h2 id="h-wdone">Fatto</h2>
        ${i.doneTodos.length||i.chores.length?`<div class="list tight">${[...i.doneTodos.map(l=>({text:l.text,when:l.doneAt})),...i.chores.map(l=>({text:l.name,when:l.lastDone}))].sort((l,c)=>l.when.localeCompare(c.when)).map(l=>`<div class="item done"><div class="when">${r(z(l.when))}</div><div class="text">${r(l.text)}</div></div>`).join("")}</div>`:'<div class="empty">Niente segnato come fatto.</div>'}
        ${i.late.length?`<div class="banner warn">${i.late.length} ${i.late.length===1,"attività in ritardo"}: ${r(i.late.slice(0,3).map(l=>l.text).join(", "))}${i.late.length>3?"…":""}</div>`:""}
      </section>
      <section class="card" aria-labelledby="h-wnext">
        <div class="card-head"><h2 id="h-wnext">La settimana dopo</h2><span class="sub">${r(Ba(i.nMon,i.nSun))}</span></div>
        ${i.next.length?`<div class="list tight">${i.next.map(l=>`
          <div class="item"><div class="when">${r(pt(l.date))}</div><span class="dot-cat ${l.kind}" aria-hidden="true"></span><div class="text"><div>${r(l.text)}</div><div class="hint">${Yo[l.kind]}</div></div>${l.amount?`<span class="money">${v(l.amount)}</span>`:""}</div>`).join("")}</div>`:'<div class="empty">Niente in programma.</div>'}
        <div class="row">
          <span class="sub">Menù: ${i.dinners?`${i.dinners} cene su 7 decise`:"ancora da fare"}</span>
          ${i.dinners<7?'<button class="link" data-action="week-meals">Prepara il menù</button>':""}
        </div>
      </section>
    </div>`}F("settimana",{render:Ko,actions:{"week-nav"(t){const e=Number(t.dataset.n);d.ui.weekOff=e===0?0:Math.max(0,(d.ui.weekOff||0)+e),h("settimana")},"week-open"(t){d.ui.weekOff=Math.round(Ce(t.dataset.mon,st(k()))/7),h("settimana")},"week-meals"(){const t=d.ui.weekOff??0;d.ui.mealWeek=1-t,h("pasti")}}});const Tt=900,Pt=280,J={l:64,r:20,t:16,b:30};function Xo(t,e=4){const a=t/e||1,i=Math.pow(10,Math.floor(Math.log10(a))),n=a/i;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*i}function ln(t,e){let a=Math.min(...t),i=Math.max(...t);e&&(a=Math.min(a,0),i=Math.max(i,0)),a===i&&(a-=1,i+=1);const n=Xo(i-a);a=Math.floor(a/n)*n,i=Math.ceil(i/n)*n;const o=[];for(let l=a;l<=i+n/2;l+=n)o.push(Math.round(l*100)/100);return{y:l=>J.t+(Pt-J.t-J.b)*(1-(l-a)/(i-a)),ticks:o}}const cn=t=>{const e=Math.abs(t),a=e>=1e4?(e/1e3).toLocaleString("it-IT",{maximumFractionDigits:e>=1e5?0:1})+"k":e.toLocaleString("it-IT",{maximumFractionDigits:e<10?1:0});return(t<0?"−":"")+a+" €"};function rn(t,e,a,i){const n=t.ticks.map(s=>`<line class="ch-grid ${s===0?"zero":""}" x1="${J.l}" x2="${Tt-J.r}" y1="${t.y(s)}" y2="${t.y(s)}"/><text class="ch-tick" x="${J.l-8}" y="${t.y(s)+4}" text-anchor="end">${r(cn(s))}</text>`).join(""),o=e.map((s,l)=>l%i===0||l===e.length-1?`<text class="ch-tick" x="${a(l)}" y="${Pt-8}" text-anchor="middle">${r(s)}</text>`:"").join("");return n+o}function dn(t,e,a,i){return i.map((n,o)=>`<rect class="ch-hit" x="${e(o)-a/2}" y="${J.t}" width="${a}" height="${Pt-J.t-J.b}" tabindex="0"
    data-i="${o}" data-x="${e(o)}" data-title="${r(n.title)}" data-value="${r(n.value)}" data-sub="${r(n.sub||"")}" aria-label="${r(n.title+": "+n.value)}"/>`).join("")}function ka(t,{id:e="ch",fmt:a=cn}={}){if(t.length<2)return'<div class="empty">Servono almeno due mesi di dati.</div>';const i=ln(t.map(c=>c.value),!1),n=(Tt-J.l-J.r)/(t.length-1),o=c=>J.l+c*n,s=t.map((c,u)=>`${u?"L":"M"}${o(u).toFixed(1)},${i.y(c.value).toFixed(1)}`).join(" "),l=t[t.length-1];return`
    <div class="chart" data-chart="${e}">
      <svg viewBox="0 0 ${Tt} ${Pt}" role="img" aria-label="Grafico a linea, ${t.length} mesi">
        ${rn(i,t.map(c=>c.label),o,Math.ceil(t.length/8))}
        <line class="ch-cross" x1="0" x2="0" y1="${J.t}" y2="${Pt-J.b}" hidden/>
        <path class="ch-line" d="${s}"/>
        ${t.map((c,u)=>`<circle class="ch-dot" cx="${o(u)}" cy="${i.y(c.value)}" r="${u===t.length-1?4.5:3}"/>`).join("")}
        <text class="ch-label" x="${o(t.length-1)-6}" y="${i.y(l.value)-10}" text-anchor="end">${r(a(l.value))}</text>
        ${dn(t.length,o,n,t.map(c=>({title:c.title,value:c.valueText,sub:c.sub})))}
      </svg>
      <div class="ch-tip" hidden></div>
    </div>`}function un(t,{id:e="bar"}={}){if(!t.length)return'<div class="empty">Nessun dato.</div>';const a=ln(t.map(c=>c.value),!0),i=(Tt-J.l-J.r)/t.length,n=c=>J.l+i*(c+.5),o=Math.min(36,i*.62),s=a.y(0),l=t.map((c,u)=>{const p=a.y(c.value),b=Math.min(p,s),m=Math.max(1,Math.abs(s-p)),w=Math.min(4,m/2),y=n(u)-o/2,q=c.value>=0?`M${y},${s} V${b+w} Q${y},${b} ${y+w},${b} H${y+o-w} Q${y+o},${b} ${y+o},${b+w} V${s} Z`:`M${y},${s} V${b+m-w} Q${y},${b+m} ${y+w},${b+m} H${y+o-w} Q${y+o},${b+m} ${y+o},${b+m-w} V${s} Z`;return`<path class="ch-bar ${c.value<0?"neg":"pos"} ${c.partial?"partial":""}" d="${q}" data-bar="${u}"/>`}).join("");return`
    <div class="chart" data-chart="${e}">
      <svg viewBox="0 0 ${Tt} ${Pt}" role="img" aria-label="Grafico a barre, ${t.length} mesi">
        ${rn(a,t.map(c=>c.label),n,Math.ceil(t.length/12))}
        ${l}
        ${dn(t.length,n,i,t.map(c=>({title:c.title,value:c.valueText,sub:c.sub})))}
      </svg>
      <div class="ch-tip" hidden></div>
    </div>`}function Sa(){for(const t of document.querySelectorAll(".chart")){const e=t.querySelector("svg"),a=t.querySelector(".ch-tip"),i=t.querySelector(".ch-cross"),n=s=>{const l=s.dataset.i;a.replaceChildren();const c=document.createElement("strong");c.textContent=s.dataset.value;const u=document.createElement("div");if(u.textContent=s.dataset.title,u.className="hint",a.append(c,u),s.dataset.sub){const w=document.createElement("div");w.textContent=s.dataset.sub,w.className="hint",a.append(w)}a.hidden=!1;const p=Number(s.dataset.x);i&&(i.setAttribute("x1",p),i.setAttribute("x2",p),i.hidden=!1),t.querySelectorAll("[data-bar]").forEach(w=>w.classList.toggle("on",w.dataset.bar===l));const b=e.getBoundingClientRect(),m=p/Tt*b.width;a.style.left=Math.min(Math.max(m,70),b.width-70)+"px"},o=()=>{a.hidden=!0,i&&(i.hidden=!0),t.querySelectorAll("[data-bar]").forEach(s=>s.classList.remove("on"))};for(const s of t.querySelectorAll(".ch-hit"))s.addEventListener("pointerenter",()=>n(s)),s.addEventListener("focus",()=>n(s)),s.addEventListener("blur",o);e.addEventListener("pointerleave",o)}}const Zo=["Palestra","Corsa","Camminata","Bici","Nuoto","Calcetto","Yoga / stretching","Altro"],dt=t=>t==null?"—":Number(t).toLocaleString("it-IT",{maximumFractionDigits:1}),ye=t=>t.meds.map(e=>({m:e,s:me(e)})).filter(e=>e.s.low);function Jo(t){const e=d.ui.measKind||"peso",a=ja[e],i=t.measures.filter(l=>l.kind===e).sort((l,c)=>l.date.localeCompare(c.date)),n=i[i.length-1],o=i.filter(l=>l.date>=P(k(),-30))[0],s=n&&o&&o!==n?H(n.value-o.value):null;return`
    <section class="card" aria-labelledby="h-meas">
      <div class="card-head"><h2 id="h-meas">Misure</h2>
        <div class="pills small">${Object.entries(ja).map(([l,c])=>`<button class="chip ${l===e?"":"off"}" data-action="meas-kind" data-k="${l}" aria-pressed="${l===e}">${c.label}</button>`).join("")}</div></div>
      <form class="row" data-form="meas-add">
        <input type="hidden" name="kind" value="${e}">
        <label class="sr-only" for="meas-val">${a.label}</label>
        <input class="input amount" id="meas-val" name="value" inputmode="decimal" placeholder="${a.label}${a.unit?" ("+a.unit+")":""}" required>
        <label class="sr-only" for="meas-date">Data</label>
        <input class="input date" id="meas-date" type="date" name="date" value="${k()}">
        <button class="btn primary" type="submit">Segna</button>
        ${n?`<span class="sub">Ultima: <strong>${dt(n.value)} ${r(a.unit)}</strong> il ${r(z(n.date))}${s!=null?` · ${s>0?"+":""}${dt(s)} in 30 giorni`:""}</span>`:""}
      </form>
      ${i.length>1?ka(i.slice(-40).map(l=>({label:z(l.date),value:l.value,title:z(l.date)+" "+l.date.slice(0,4),valueText:`${dt(l.value)} ${a.unit}`})),{id:"meas",fmt:l=>dt(l)+(a.unit?" "+a.unit:"")}):`<div class="empty">${i.length?"Serve almeno un'altra misura per il grafico.":`Nessuna misura di ${a.label.toLowerCase()}. Basta segnarla ogni tanto, sempre alla stessa ora.`}</div>`}
      ${i.length?`<details class="table-toggle"><summary>Tutte le misure (${i.length})</summary><div class="list tight">${[...i].reverse().slice(0,60).map(l=>`
        <div class="item"><div class="when">${r(z(l.date))}</div><div class="text">${dt(l.value)} ${r(a.unit)}</div><button class="icon-btn" data-action="meas-del" data-id="${l.id}" aria-label="Elimina la misura del ${r(z(l.date))}">${A("trash",16)}</button></div>`).join("")}</div></details>`:""}
    </section>`}function tl(t){const e=st(k()),a=[];for(let n=7;n>=0;n--){const o=P(e,-7*n),s=P(o,6),l=t.workouts.filter(c=>c.date>=o&&c.date<=s).length;a.push({label:z(o),value:l,title:`Settimana del ${z(o)}`,valueText:`${l} allenament${l===1?"o":"i"}`,partial:n===0})}const i=[...t.workouts].sort((n,o)=>o.date.localeCompare(n.date)).slice(0,8);return`
    <section class="card" aria-labelledby="h-work">
      <div class="card-head"><h2 id="h-work">Allenamenti</h2><span class="sub">questa settimana: ${a[7].value}</span></div>
      <form class="row" data-form="work-add">
        <label class="sr-only" for="w-type">Tipo</label>
        <select class="input" id="w-type" name="type">${Zo.map(n=>`<option>${n}</option>`).join("")}</select>
        <label class="sr-only" for="w-min">Minuti</label>
        <input class="input num" id="w-min" name="minutes" inputmode="numeric" placeholder="minuti">
        <label class="sr-only" for="w-date">Data</label>
        <input class="input date" id="w-date" type="date" name="date" value="${k()}">
        <button class="btn primary" type="submit">Segna</button>
      </form>
      ${t.workouts.length?un(a,{id:"work"}):'<div class="empty">Segna gli allenamenti quando li fai: qui vedi quante volte ti alleni a settimana.</div>'}
      ${i.length?`<div class="list tight">${i.map(n=>`
        <div class="item"><div class="when">${r(z(n.date))}</div><div class="text">${r(n.type)}${n.minutes?` <span class="hint">· ${n.minutes} min</span>`:""}</div>
        <button class="icon-btn" data-action="work-del" data-id="${n.id}" aria-label="Elimina">${A("trash",16)}</button></div>`).join("")}</div>`:""}
    </section>`}function el(t){const e=t.deadlines.filter(a=>!a.archived&&a.kind==="Salute").sort((a,i)=>a.due.localeCompare(i.due));return`
    <section class="card" aria-labelledby="h-visit">
      <div class="card-head"><h2 id="h-visit">Visite e controlli</h2><button class="link" data-action="nav" data-id="scadenze">Gestisci in Scadenze</button></div>
      ${e.length?`<div class="list">${e.map(a=>{const i=ua(a);return`
        <div class="item"><span class="dot-cat scad ${i.state}" aria-hidden="true"></span><div class="text"><div>${r(a.name)}</div><div class="hint">${r(z(a.due))} ${a.due.slice(0,4)}${a.lastDone?" · ultima volta "+r(z(a.lastDone))+" "+a.lastDone.slice(0,4):""}</div></div>
        <span class="tag ${i.state==="late"?"bad":i.state==="soon"?"warn":""}">${r(Ht(i.days))}</span></div>`}).join("")}</div>`:'<div class="empty">Nessuna visita in programma.</div>'}
      <div class="shop-chips">${[["Dentista",6],["Esami del sangue",12],["Visita oculistica",24],["Dermatologo (nei)",12],["Medico di base",12]].filter(([a])=>!e.some(i=>i.name===a)).map(([a,i])=>`<button class="chip" data-action="visit-add" data-name="${r(a)}" data-every="${i}">${A("plus",12)}${r(a)}</button>`).join("")}</div>
      <div class="hint">Tocca per aggiungerla: la trovi in Scadenze con la data da sistemare.</div>
    </section>`}function al(t){const e=d.ui.medEdit?t.meds.find(a=>a.id===d.ui.medEdit):null;return`
    <section class="card" aria-labelledby="h-meds">
      <h2 id="h-meds">Farmaci e scorte</h2>
      ${t.meds.length?`<div class="list">${t.meds.map(a=>{const i=me(a);return`
        <div class="item"><div class="text"><div>${r(a.name)}</div><div class="hint">${dt(a.perDay)} al giorno · restano ${dt(i.left)} ${r(a.unit)}${a.note?" · "+r(a.note):""}</div></div>
          <span class="tag ${i.low?"warn":""}">${i.days==null?"al bisogno":i.days===0?"finito":`${i.days} giorni`}</span>
          ${i.low?`<button class="btn small" data-action="med-shop" data-id="${a.id}">${A("cart",14)}Spesa</button>`:""}
          ${d.ui.medRefill===a.id?`<form class="row nowrap" data-form="med-refill"><input type="hidden" name="id" value="${a.id}"><label class="sr-only" for="refill-q">Quante ne hai adesso</label><input class="input slim num" id="refill-q" name="q" inputmode="decimal" value="${r(String(H(i.left+(a.lastPack||30))).replace(".",","))}"><button class="btn small primary" type="submit">Ok</button></form>`:`<button class="btn small" data-action="med-refill" data-id="${a.id}">Ricomprato</button>`}
          <button class="icon-btn" data-action="med-edit" data-id="${a.id}" aria-label="Modifica ${r(a.name)}">${A("edit",16)}</button>
          <button class="icon-btn" data-action="med-del" data-id="${a.id}" aria-label="Elimina ${r(a.name)}">${A("trash",16)}</button></div>`}).join("")}</div>`:'<div class="empty">Integratori, farmaci che prendi tutti i giorni, lenti a contatto: quando stanno per finire te lo dice Oggi.</div>'}
      <form class="form-grid divider-top" data-form="med-save" style="padding-top:14px">
        <input type="hidden" name="id" value="${e?e.id:""}">
        <label class="field">Nome<input class="input" id="med-name" name="name" value="${r(e?e.name:"")}" placeholder="Vitamina D" required></label>
        <label class="field">Al giorno<input class="input" name="perDay" inputmode="decimal" value="${r(e?String(e.perDay).replace(".",","):"1")}"></label>
        <label class="field">Quante ne hai adesso<input class="input" name="qty" inputmode="decimal" value="${e?r(String(me(e).left).replace(".",",")):""}" placeholder="30" required></label>
        <label class="field">Unità<input class="input" name="unit" value="${r(e?e.unit:"compresse")}"></label>
        <label class="field">Avvisami quando restano<select class="input" name="notice">${[3,5,7,10,14].map(a=>`<option value="${a}" ${(e?e.notice:7)===a?"selected":""}>${a} giorni</option>`).join("")}</select></label>
        <div class="row"><button class="btn primary" type="submit">${e?"Salva":"Aggiungi"}</button>${e?'<button class="btn" type="button" data-action="med-cancel">Annulla</button>':""}</div>
      </form>
    </section>`}function il(){const t=d.data,e=t.measures.filter(o=>o.kind==="peso").sort((o,s)=>o.date.localeCompare(s.date)).pop(),a=st(k()),i=t.workouts.filter(o=>o.date>=a).length,n=ye(t).length;return`
    ${G("Corpo e salute","Salute")}
    <section class="metrics">
      ${j("Peso",e?`${dt(e.value)} kg`:"—","",e?`il ${z(e.date)}`:"non ancora segnato")}
      ${j("Allenamenti questa settimana",String(i))}
      ${j("Farmaci da ricomprare",String(n),n?"warn":"")}
    </section>
    <div class="grid">
      ${Jo(t)}
      ${tl(t)}
      ${el(t)}
      ${al(t)}
    </div>`}const Vt=t=>{const e=U(t);return Number.isFinite(e)?e:NaN};F("salute",{render:il,afterRender:Sa,actions:{"meas-kind"(t){d.ui.measKind=t.dataset.k,h("salute")},"meas-del"(t){f(e=>{e.measures=e.measures.filter(a=>a.id!==t.dataset.id),Q(e,t.dataset.id)})},"work-del"(t){f(e=>{e.workouts=e.workouts.filter(a=>a.id!==t.dataset.id),Q(e,t.dataset.id)})},"visit-add"(t){const e=Number(t.dataset.every);f(a=>a.deadlines.push(Ie({name:t.dataset.name,kind:"Salute",due:P(k(),30),every:e,notice:15,note:"Data da sistemare: mettila quando prenoti"}))),T(`${t.dataset.name} aggiunta alle Scadenze (tra 30 giorni): correggi la data quando prenoti`),x()},"med-edit"(t){d.ui.medEdit=t.dataset.id,h("salute"),O("#med-name")},"med-cancel"(){d.ui.medEdit=null,h("salute")},"med-del"(t){const e=d.data.meds.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Togliere «${e.name}»?`)||f(a=>{a.meds=a.meds.filter(i=>i.id!==e.id),Q(a,e.id)})},"med-refill"(t){d.ui.medRefill=t.dataset.id,h("salute"),O("#refill-q")},"med-shop"(t){const e=d.data.meds.find(a=>a.id===t.dataset.id);e&&(f(a=>{const i=At(a,e.name);i?(i.need=!0,i.boughtAt=null,N(i)):a.shopping.push(Mt({name:e.name,area:a.shopAreas.includes("Farmacia")?"Farmacia":"Bagno e igiene",need:!0}))}),T(`${e.name} messo nella spesa`))}},forms:{"meas-add"(t,e){const a=Vt(t.get("value"));if(!(a>0)){const i=e.querySelector("[name=value]");i.setCustomValidity("Scrivi un numero, es. 72,4"),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0});return}f(i=>i.measures.push(os({kind:t.get("kind"),value:a,date:t.get("date")||k()}))),O("#meas-val")},"work-add"(t){const e=String(t.get("minutes")||"").trim(),a=e?Math.round(Vt(e)):null;if(e&&!(a>0))return E("I minuti devono essere un numero."),x();f(i=>i.workouts.push(ss({type:t.get("type"),minutes:a,date:t.get("date")||k()}))),T("Allenamento segnato")},"med-refill"(t){const e=d.data.meds.find(i=>i.id===t.get("id"));if(!e)return;const a=Vt(t.get("q"));if(!(a>=0))return E("Scrivi quante ne hai adesso, es. 30"),x();f(()=>{const i=me(e).left;a>i&&(e.lastPack=H(a-i)),e.qty=a,e.countedAt=k(),N(e)}),d.ui.medRefill=null,h("salute",{},`${e.name}: ${dt(a)} ${e.unit}`)},"med-save"(t){const e=String(t.get("name")||"").trim(),a=Vt(t.get("perDay")||"0"),i=Vt(t.get("qty"));if(!e||!(i>=0)||!(a>=0))return E("Controlla nome, quantità e dose (numeri, es. 1 o 0,5)."),x();const n={name:e,perDay:a,qty:i,countedAt:k(),unit:String(t.get("unit")||"compresse").trim(),notice:Number(t.get("notice"))||7},o=t.get("id");f(s=>{if(o){const l=s.meds.find(c=>c.id===o);Object.assign(l,n),N(l)}else s.meds.push(ns(Object.assign({lastPack:i},n)))}),d.ui.medEdit=null,h("salute",{},o?"Aggiornato":`${e} aggiunto`)}}});const nl=(t,e,a)=>`${t}|${e}|${a}`;function pn(t){const e=k(),a=[];for(const o of t.todos.filter(s=>!s.done&&s.due&&s.due<e))a.push({title:o.text,sub:`Attività in ritardo dal ${z(o.due)}`,meta:z(o.due),tag:"RITARDO",cls:"bad",level:"r",nav:"attivita"});for(const o of t.sales.filter(kt))a.push({title:o.name,sub:"Venduto: da spedire",meta:"da spedire",tag:"SPEDIRE",cls:"warn",level:"o",nav:"vendite"});for(const o of da(t))a.push({title:o.x.name,sub:`Scadenza ${Ht(o.days)}`,meta:Ht(o.days),tag:"SCADENZA",cls:o.days<0?"bad":"warn",level:o.days<=0?"r":o.days<=7?"o":"a",nav:"scadenze"});const i=P(e,1);for(const o of Ai(t,e).tomorrow){const s=nl(i,o.slot,o.dish.id);a.push({title:o.ahead,sub:`Per domani: ${o.dish.name}`,meta:"per domani",tag:"PRIMA",cls:"warn",level:"o",nav:"pasti",key:s,done:!!(t.aheadDone&&t.aheadDone[s])})}for(const{m:o,s}of ye(t))a.push({title:o.name,sub:s.days===0?"Finito: da ricomprare":`Ancora ${s.days} giorni`,meta:s.days===0?"finito":`${s.days} giorni`,tag:"FARMACO",cls:"good",level:s.days===0?"o":"a",nav:"salute"});const n=pa(t);n.length&&a.push({title:`${n.length} programmat${n.length===1?"o":"i"} da confermare`,sub:n.slice(0,2).map(o=>o.r.name).join(", "),meta:"",tag:"CONFERMA",cls:"acc",level:"a",nav:"programmati"});for(const o of t.sales.filter(s=>s.status==="vendita"&&jt(s)>=Yt))a.push({title:o.name,sub:`Online da ${jt(o)} giorni`,meta:`online da ${jt(o)} gg`,tag:"FERMO",cls:"vio",level:"a",nav:"vendite"});for(const o of ze(t,e,P(e,7)))a.push({title:`Compleanno di ${o.contact.name}`,sub:o.date===e?"Oggi":pt(o.date),meta:o.date===e?"oggi":pt(o.date),tag:"AUGURI",cls:"vio",level:o.date===e?"o":"a",nav:"rubrica"});return t.inbox.length&&a.push({title:`${t.inbox.length} da smistare`,sub:"Note e cose non capite da Annota al volo",meta:"",tag:"SMISTA",cls:"acc",level:"a",nav:"oggi",anchor:!0}),a}const wt=["oggi","att","abi","pasti"],mn=102,Va=2*Math.PI*mn,gn=134,Ua=2*Math.PI*gn,sl=["L","M","M","G","V","S","D"],_a=[[35,22],[155,-30],[260,8],[95,-12],[205,28],[320,-24]];function ol(t){const e=new Date(t+"T12:00:00"),a=(e.getDay()+6)%7;e.setDate(e.getDate()-a+3);const i=new Date(e.getFullYear(),0,4);return 1+Math.round(((e-i)/864e5-3+(i.getDay()+6)%7)/7)}const Ga=(t,e)=>{const a=e*Math.PI/180;return[140+t*Math.cos(a),140+t*Math.sin(a)]};function ll(t){const e=k(),a=new Date,i=new Map;t.openToday.length&&i.set(e,t.openToday.length);for(const $ of t.days){const C=$.parts.filter(S=>S.cls!=="meteo").length;C&&i.set($.iso,(i.get($.iso)||0)+C)}const n=t.days.reduce(($,C)=>$+C.parts.filter(S=>S.cls!=="meteo").length,0),o=(a.getDay()+6)%7,s=Ua*(360/7-4)/360;let l="";for(let $=0;$<7;$++){const C=P(t.mon,$),S=-90+$*(360/7)+2,_=-90+$*(360/7)+360/14,I=$===o?"rx-wk on":C<e?"rx-wk past":"rx-wk";l+=`<circle class="${I}" cx="140" cy="140" r="${gn}" transform="rotate(${S.toFixed(2)} 140 140)" stroke-dasharray="${s.toFixed(2)} ${(Ua-s).toFixed(2)}"/>`;const M=C>=e&&i.get(C)||0;if(M){const[X,It]=Ga(146,_);l+=`<circle class="rx-ev" cx="${X.toFixed(1)}" cy="${It.toFixed(1)}" r="${M>1?4.5:3.5}"><title>${M} ${M===1?"impegno":"impegni"}</title></circle>`}const[B,ht]=Ga(160,_);l+=`<text class="rx-wl ${$===o?"on":""}" x="${B.toFixed(1)}" y="${(ht+3.5).toFixed(1)}" text-anchor="middle">${sl[$]}</text>`}const c=Kt.find($=>t.targets[$].min&&t.wb.counts[$]<t.targets[$].min),u=c?`${bt[c].label.toLowerCase()} ${t.wb.counts[c]} di ${t.targets[c].min}+`:"equilibrio a posto",p=t.todays.length-t.openToday.length,b={oggi:{label:"Oggi",color:"var(--accent)",pct:(o+1)/7,top:a.toLocaleDateString("it-IT",{weekday:"long"}).toUpperCase(),big:String(a.getDate()),mid:a.toLocaleDateString("it-IT",{month:"long"}).toUpperCase(),sub:`${t.openToday.length} da fare${t.late?` · ${t.late} in ritardo`:""}`},att:{label:`Attività ${p}/${t.todays.length}`,color:"var(--accent)",pct:t.pAtt,top:"ATTIVITÀ",big:t.todays.length?`${p}/${t.todays.length}`:"—",mid:"DI OGGI",sub:t.todays.length?t.openToday.length?`${t.openToday.length} ancora aperte`:"tutto fatto":"niente per oggi"},abi:{label:`Abitudini ${t.habTarget?Math.round(t.pHab*100)+"%":"—"}`,color:"var(--good)",pct:t.pHab,top:"ABITUDINI",big:t.habTarget?`${Math.round(t.pHab*100)}%`:"—",mid:"SETTIMANA",sub:t.habTarget?`${t.habDone} su ${t.habTarget} volte`:"nessuna abitudine"},pasti:{label:`Pasti ${t.wb.meals}/14`,color:"var(--warn)",pct:t.wb.meals/14,top:"PASTI",big:`${t.wb.meals}/14`,mid:"SETTIMANA",sub:u}},m=wt.includes(d.ui.coreMode)?d.ui.coreMode:"oggi",w=wt.map($=>{const C=Math.max(.01,Math.min(1,b[$].pct||0))*Va;return`<circle class="rx-arc" data-k="${$}" cx="140" cy="140" r="${mn}" transform="rotate(-90 140 140)" style="stroke:${b[$].color}" stroke-dasharray="${C.toFixed(1)} ${Va.toFixed(1)}"/>`}).join(""),y=wt.map($=>{const C=b[$];return`<div class="rx-text" data-k="${$}">
      <span class="rx-top">${r(C.top)}</span>
      <span class="rx-big ${C.big.length>3?"long":""}">${r(C.big)}</span>
      <span class="rx-mid" style="color:${C.color}">${r(C.mid)}</span>
      <span class="rx-sub">${r(C.sub)}</span></div>`}).join(""),q=_a.slice(0,Math.min(n,_a.length)).map(([$,C])=>`<i class="rx-node" style="transform:rotateY(${$}deg) rotateX(${C}deg) translateZ(calc(160 * var(--u)))"></i>`).join(""),D=[0,.5,1.1,1.7,.8,2.3,2.9,2.1,1.4].map(($,C)=>`<i class="rx-pt" style="left:calc(${[250,262,272,283,292,243,266,299,277][C]} * var(--u));animation-delay:${$}s"></i>`).join(""),g=($,C,S)=>`<i class="rx-par${S?" eq":""}" style="width:calc(${$} * var(--u));height:calc(${$} * var(--u));margin:calc(${-$/2} * var(--u)) 0 0 calc(${-$/2} * var(--u));transform:translateY(calc(${C} * var(--u))) rotateX(90deg)"></i>`;return`
    <div class="rx" data-mode="${m}">
      <div class="rx-stage">
        <div class="rx-floor-wrap" aria-hidden="true"><div class="rx-floor">
          <i class="rx-ring" style="--s:310"></i><i class="rx-ring dash" style="--s:440"></i><i class="rx-ring warm" style="--s:200"></i>
          <i class="rx-ripple"></i><i class="rx-ripple" style="animation-delay:2s"></i><i class="rx-scan"></i>
        </div></div>
        <div class="rx-beam" aria-hidden="true"></div>
        <div class="rx-pts" aria-hidden="true">${D}</div>
        <div class="rx-globe-wrap" aria-hidden="true"><div class="rx-globe">
          ${[0,30,60,90,120,150].map($=>`<i class="rx-mer" style="transform:rotateY(${$}deg)"></i>`).join("")}
          ${g(249.8,-100)}${g(302.6,-52)}${g(320,0,!0)}${g(302.6,52)}${g(249.8,100)}
          ${q}
        </div></div>
        <div class="rx-scanwrap" aria-hidden="true"><i class="rx-scanline"></i></div>
        <div class="rx-tel left" aria-hidden="true"><span class="acc">SYS · NUCLEO</span><span>SETT ${ol(e)} · ${r(a.toLocaleDateString("it-IT"))}</span></div>
        <div class="rx-tel right" aria-hidden="true"><span class="js-save rx-sync"><span class="dot ${d.saveState==="err"?"err":""}"></span><span>${r(d.saveText||"")}</span></span><span>${n} ${n===1?"IMPEGNO":"IMPEGNI"} · 7 GG</span></div>
        <div class="rx-core">
          <svg viewBox="0 0 280 280" aria-hidden="true">
            <g class="rx-ticks"><circle cx="140" cy="140" r="176" class="rx-t1"/><circle cx="140" cy="140" r="176" class="rx-t2"/></g>
            ${l}
            <circle cx="140" cy="140" r="116" class="rx-main"/>
            ${w}
            <circle cx="140" cy="140" r="88" class="rx-disc"/>
          </svg>
          <div class="rx-texts" aria-live="polite">${y}</div>
        </div>
        <div class="rx-orbit-wrap" aria-hidden="true"><div class="rx-orbit"><i class="rx-orbit-ring"></i><i class="rx-orbit-dot"></i></div></div>
      </div>
      <div class="rx-legend" role="group" aria-label="Cosa mostra il nucleo">
        ${wt.map($=>`<button type="button" class="rx-btn" data-action="core-mode" data-k="${$}" aria-pressed="${$===m}"><i style="background:${b[$].color}"></i>${r(b[$].label)}</button>`).join("")}
      </div>
    </div>`}function bn(t){const e=document.querySelector(".rx");if(e){e.dataset.mode=t;for(const a of e.querySelectorAll(".rx-btn"))a.setAttribute("aria-pressed",String(a.dataset.k===t))}}const cl={"core-mode"(t){const e=t.dataset.k;d.ui.coreLock&&d.ui.coreMode===e?d.ui.coreLock=!1:(d.ui.coreLock=!0,d.ui.coreMode=e),bn(d.ui.coreMode||"oggi")}};setInterval(()=>{if(typeof document>"u"||!document.querySelector(".rx")||d.ui.coreLock||document.hidden)return;const t=wt.indexOf(d.ui.coreMode);d.ui.coreMode=wt[(t+1)%wt.length],bn(d.ui.coreMode)},6e3);const lt=t=>d.data.sales.find(e=>e.id===t),rl=t=>`${z(t)} ${t.slice(0,4)}`,qt=t=>(t||t===0)&&t!==null?String(t).replace(".",","):"",la=t=>t===1?"1 giorno":`${t} giorni`;function mt(t,e,a){const i=t.querySelector(`[name=${e}]`);i.setCustomValidity(a),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0})}function vn(t){return[...new Set([...rs,...d.data.sales.map(a=>a.platform).filter(Boolean)])].map(a=>`<option ${a===(t||"Subito")?"selected":""}>${r(a)}</option>`).join("")}function dl(t){return`
    <form class="box-soft stack-sm" data-form="sale-list">
      <input type="hidden" name="id" value="${t.id}">
      <div class="row">
        <label class="field">Prezzo (€)<input class="input amount" id="sl-price" name="price" inputmode="decimal" value="${r(qt(t.price))}" required></label>
        <label class="field">Dove<select class="input" name="platform">${vn(t.platform)}</select></label>
        <label class="field grow">Link all'annuncio<input class="input" name="link" type="url" value="${r(t.link||"")}" placeholder="https://www.subito.it/…"></label>
      </div>
      <div class="row">
        <label class="field">Online dal<input class="input date" type="date" name="date" value="${k()}"></label>
        <div class="row self-end"><button class="btn primary" type="submit">Metti in vendita</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
      </div>
    </form>`}function ul(t){return`
    <form class="box-soft stack-sm" data-form="sale-price">
      <input type="hidden" name="id" value="${t.id}">
      <div class="row">
        <label class="field">Nuovo prezzo (€)<input class="input amount" id="sp-price" name="price" inputmode="decimal" value="${r(qt(t.price))}" required></label>
        <div class="row self-end"><button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
        <span class="row self-end push"><button class="btn" type="button" data-action="sale-repost" data-id="${t.id}" title="Riparte il conteggio dei giorni online">Ripubblicato oggi</button><button class="btn" type="button" data-action="sale-withdraw" data-id="${t.id}">Ritira</button></span>
      </div>
      <div class="hint">${t.minPrice?`Il tuo prezzo minimo: ${v(t.minPrice)}. `:""}Se hai rinnovato l'annuncio, "Ripubblicato oggi" fa ripartire i giorni online (con il prezzo scritto qui). "Ritira" lo rimette tra le cose da vendere.</div>
    </form>`}function pl(t,e){const a=vt(t),i=d.ui.saleDelivery||"mano",n=d.ui.saleRecord??!1;return`
    <form class="box-soft stack-sm" data-form="sale-sell">
      <input type="hidden" name="id" value="${e.id}">
      <div class="row">
        <label class="field">Venduto a (€)<input class="input amount" id="ss-price" name="price" inputmode="decimal" value="${r(qt(e.price))}" required></label>
        <label class="field">Data<input class="input date" type="date" name="date" value="${k()}"></label>
        <label class="field">Acquirente<input class="input" name="buyer" placeholder="facoltativo"></label>
        <label class="field">Spese (€)<input class="input amount" name="fees" inputmode="decimal" placeholder="0"></label>
      </div>
      <div class="pills small" role="radiogroup" aria-label="Consegna">
        <label class="pill"><input type="radio" name="delivery" value="mano" data-change="sale-delivery" ${i==="mano"?"checked":""}><span>Consegnato a mano</span></label>
        <label class="pill"><input type="radio" name="delivery" value="spedizione" data-change="sale-delivery" ${i==="spedizione"?"checked":""}><span>Da spedire</span></label>
      </div>
      <label class="check small"><input type="checkbox" name="record" data-change="sale-record" ${n?"checked":""}>Registra l'entrata sul conto (categoria Vendite)</label>
      ${n?a.length?`<select class="input" name="accountId" aria-label="Conto">${at(K(t)?.id)}</select>`:'<div class="hint">Crea prima un conto in Finanze.</div>':""}
      <div class="hint">Spese = commissioni, spedizione pagata da te, promozione dell'annuncio: vengono tolte dall'incasso. Lascia spenta la registrazione se l'entrata arriverà importando l'estratto conto, per non contarla due volte.</div>
      <div class="row"><button class="btn primary" type="submit">Venduto</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
    </form>`}function ml(t){const e=d.ui.saleOpen&&d.ui.saleOpen.id===t.id?d.ui.saleOpen.kind:null,a=[];return t.link&&a.push(`<button class="icon-btn" data-action="sale-link" data-id="${t.id}" aria-label="Apri l'annuncio di ${r(t.name)}">${A("doc",16)}</button>`),e||(t.status==="magazzino"&&a.push(`<button class="btn small" data-action="sale-open" data-kind="list" data-id="${t.id}">Metti in vendita</button>`),t.status==="vendita"&&a.push(`<button class="btn small" data-action="sale-open" data-kind="price" data-id="${t.id}">Prezzo</button><button class="btn small" data-action="sale-open" data-kind="sell" data-id="${t.id}">Venduto</button>`),kt(t)&&a.push(`<button class="btn small" data-action="sale-shipped" data-id="${t.id}">Spedito</button>`)),t.status!=="venduto"?a.push(`<button class="icon-btn" data-action="sale-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${A("edit",16)}</button>`):a.push(`<button class="link" data-action="sale-unsell" data-id="${t.id}">Annulla vendita</button>`),a.push(`<button class="icon-btn" data-action="sale-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button>`),{open:e,html:a.join("")}}function gl(t,e){const a=k(),{open:i,html:n}=ml(e),o=[],s=[];let l="";if(e.status==="magazzino")e.where&&o.push("in "+r(e.where)),e.cost&&o.push(`pagato ${v(e.cost)}`),e.price&&o.push(`pensavo ${v(e.price)}`);else if(e.status==="vendita"){const c=jt(e,a);o.push(r(e.platform||"online")),o.push(c?`online da ${la(c)}`:"online da oggi");const u=e.priceHistory||[];u.length>1&&o.push(`era ${v(u[0].price)}`),e.minPrice&&o.push(`minimo ${v(e.minPrice)}`),e.where&&o.push("in "+r(e.where)),l=`${c>=Yt?`<span class="tag warn" title="Online da più di ${Yt} giorni: ribassa o ripubblica">fermo</span>`:""}<span class="money strong">${e.price?v(e.price):"—"}</span>`}else{o.push(`venduto il ${r(rl(e.soldAt))}${e.buyer?" a "+r(e.buyer):""}`),o.push(r(e.platform||"")),e.listedAt&&o.push(`in ${la(Math.max(0,hn(e.listedAt,e.soldAt)))}`),e.cost&&s.push(`l'avevi pagato ${v(e.cost)}`),e.fees&&s.push(`prezzo ${v(e.soldPrice)} − spese ${v(e.fees)}`),e.txId&&s.push("entrata su "+r(nt(t,e.accountId)));const c=e.cost?H(ge(e)-e.cost):null;l=`${kt(e)?'<span class="tag warn">da spedire</span>':e.delivery==="spedizione"?'<span class="tag">spedito</span>':""}
      ${c!==null?`<span class="tag ${c>=0?"ent":"bad"}" title="Rispetto a quanto l'avevi pagato">${c>=0?"+":"−"}${v(Math.abs(c))}</span>`:""}
      <span class="money strong">${v(ge(e))}</span>`}return`
    <div class="dl-row">
      <div class="item sale">
        <div class="text"><div class="strong">${r(e.name)}</div><div class="hint">${o.filter(Boolean).join(" · ")}</div>${s.length||e.note?`<div class="hint">${[...s,e.note?r(e.note):""].filter(Boolean).join(" · ")}</div>`:""}</div>
        <div class="sale-side">${l}${n}</div>
      </div>
      ${i==="list"?dl(e):i==="price"?ul(e):i==="sell"?pl(t,e):""}
    </div>`}const hn=(t,e)=>jt({listedAt:t},e);function bl(t){const e=d.ui.saleEdit?lt(d.ui.saleEdit):null,a=e?e.status:d.ui.saleNewStatus||"magazzino",i=n=>e?r(e[n]??""):"";return`
    <form class="card stack grow-1" data-form="sale-save" aria-labelledby="h-saleform">
      <h2 id="h-saleform">${e?"Modifica":"Nuovo oggetto"}</h2>
      ${e?`<input type="hidden" name="id" value="${e.id}">`:`
      <div class="pills small" role="radiogroup" aria-label="Stato">
        <label class="pill"><input type="radio" name="status" value="magazzino" data-change="sale-newstatus" ${a==="magazzino"?"checked":""}><span>Da vendere</span></label>
        <label class="pill"><input type="radio" name="status" value="vendita" data-change="sale-newstatus" ${a==="vendita"?"checked":""}><span>Già in vendita</span></label>
      </div>`}
      <label class="field">Cosa<input class="input" id="sale-name" name="name" value="${i("name")}" placeholder="es. bici da corsa, iPhone 12" required></label>
      <div class="form-grid two">
        <label class="field">${a==="vendita"?"Prezzo (€)":"Prezzo pensato (€)"}<input class="input" name="price" inputmode="decimal" value="${e?r(qt(e.price)):""}" placeholder="${a==="vendita"?"es. 50":"facoltativo"}" ${a==="vendita"&&!e?"required":""}></label>
        <label class="field">Prezzo minimo (€)<input class="input" name="minPrice" inputmode="decimal" value="${e?r(qt(e.minPrice)):""}" placeholder="sotto non scendo"></label>
      </div>
      ${a==="vendita"?`
      <div class="form-grid two">
        <label class="field">Dove<select class="input" name="platform">${vn(e?.platform)}</select></label>
        <label class="field">Online dal<input class="input" type="date" name="listedAt" value="${e?.listedAt||k()}"></label>
      </div>
      <label class="field">Link all'annuncio<input class="input" name="link" type="url" value="${i("link")}" placeholder="https://www.subito.it/…"></label>`:""}
      <div class="form-grid two">
        <label class="field">Dove si trova<input class="input" name="where" value="${i("where")}" placeholder="es. cantina, armadio" list="sale-where"></label>
        <label class="field">L'avevo pagato (€)<input class="input" name="cost" inputmode="decimal" value="${e?r(qt(e.cost)):""}" placeholder="facoltativo"></label>
      </div>
      <datalist id="sale-where">${[...new Set(t.sales.map(n=>n.where).filter(Boolean))].map(n=>`<option value="${r(n)}">`).join("")}</datalist>
      <label class="field">Nota<input class="input" name="note" value="${i("note")}" placeholder="es. scatola originale, graffio sul lato"></label>
      <div class="row"><button class="btn primary" type="submit">${e?"Salva":"Aggiungi"}</button>${e?'<button class="btn" type="button" data-action="sale-edit-cancel">Annulla</button>':""}</div>
    </form>`}function vl(){const t=d.data,e=k(),a=e.slice(0,4),i=t.sales.filter(g=>g.status==="vendita").sort((g,$)=>(g.listedAt||"").localeCompare($.listedAt||"")),n=t.sales.filter(g=>g.status==="magazzino").sort((g,$)=>g.name.localeCompare($.name,"it")),o=t.sales.filter(g=>g.status==="venduto").sort((g,$)=>kt($)-kt(g)||($.soldAt||"").localeCompare(g.soldAt||"")),s=o.filter(kt),l=o.filter(g=>(g.soldAt||"").startsWith(a)),c=H(l.reduce((g,$)=>g+ge($),0)),u=i.filter(g=>jt(g,e)>=Yt),p=H(i.reduce((g,$)=>g+($.price||0),0)),b=l.filter(g=>g.listedAt),m=b.length?Math.round(b.reduce((g,$)=>g+hn($.listedAt,$.soldAt),0)/b.length):null,w=d.ui.saleTab||(s.length?"venduti":i.length?"vendita":n.length?"magazzino":"vendita"),y=[["vendita","In vendita",i.length],["magazzino","Da vendere",n.length],["venduti","Venduti",o.length]],q=w==="vendita"?i:w==="magazzino"?n:o,D={vendita:'Nessun annuncio aperto. Metti in vendita qualcosa da "Da vendere" o aggiungilo a destra.',magazzino:"Niente da vendere. Quando ti viene in mente qualcosa che non usi più, segnalo qui.",venduti:"Ancora nessuna vendita."}[w];return`
    ${G(s.length?`${s.length} da spedire`:i.length?`${i.length} annunci aperti`:"Subito e simili","Vendite")}
    <section class="metrics">
      ${j("In vendita",String(i.length),"",i.length?`chiedi ${v(p)}`:"")}
      ${j("Da vendere",String(n.length))}
      ${j("Da spedire",String(s.length),s.length?"warn":"")}
      ${j(`Incassato ${a}`,v(c),c?"good":"",l.length?`${l.length} venduti${m!==null?` · in media ${la(m)}`:""}`:"")}
    </section>
    ${u.length?`<div class="banner warn" role="status">${u.length===1?`"${r(u[0].name)}" è online`:`${u.length} annunci sono online`} da più di ${Yt} giorni: valuta di ribassare o ripubblicare.</div>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <div class="pills small" role="tablist">
          ${y.map(([g,$,C])=>`<button class="chip ${w===g?"":"off"}" role="tab" aria-selected="${w===g}" data-action="sale-tab" data-tab="${g}">${$} · ${C}</button>`).join("")}
        </div>
        <section class="card">
          ${q.length?`<div class="list">${q.map(g=>gl(t,g)).join("")}</div>`:`<div class="empty">${D}</div>`}
        </section>
      </div>
      ${bl(t)}
    </div>`}function hl(t){const e=t.sales.filter(kt);return e.length?`<section class="card attention" aria-labelledby="h-ship"><div class="card-head"><h2 id="h-ship">Da spedire</h2><button class="link" data-action="nav" data-id="vendite">Vendite</button></div>
    <div class="list">${e.map(a=>`<div class="item"><div class="text">${r(a.name)}<div class="hint">venduto il ${r(z(a.soldAt))}${a.buyer?" a "+r(a.buyer):""}</div></div><button class="btn small" data-action="sale-shipped" data-id="${a.id}">Spedito</button></div>`).join("")}</div></section>`:""}F("vendite",{render:vl,changes:{"sale-delivery"(t){d.ui.saleDelivery=t.value},"sale-record"(t){d.ui.saleRecord=t.checked;const e=t.form,a=Object.fromEntries(["price","date","buyer","fees"].map(n=>[n,e.querySelector(`[name=${n}]`)?.value]));h("vendite");const i=document.querySelector('[data-form="sale-sell"]');if(i)for(const[n,o]of Object.entries(a)){const s=i.querySelector(`[name=${n}]`);s&&o!=null&&(s.value=o)}},"sale-newstatus"(t){d.ui.saleNewStatus=t.value;const e=t.form,a=Object.fromEntries(["name","price","minPrice","where","cost","note"].map(n=>[n,e.querySelector(`[name=${n}]`)?.value]));h("vendite");const i=document.querySelector('[data-form="sale-save"]');if(i)for(const[n,o]of Object.entries(a)){const s=i.querySelector(`[name=${n}]`);s&&o!=null&&(s.value=o)}}},actions:{"sale-tab"(t){d.ui.saleTab=t.dataset.tab,d.ui.saleOpen=null,h("vendite")},"sale-open"(t){d.ui.saleOpen={id:t.dataset.id,kind:t.dataset.kind},d.ui.saleDelivery="mano",h("vendite"),O({list:"#sl-price",price:"#sp-price",sell:"#ss-price"}[t.dataset.kind])},"sale-cancel"(){d.ui.saleOpen=null,h("vendite")},async"sale-link"(t){const e=lt(t.dataset.id);if(!(!e||!e.link))try{await ee("open_document",{target:e.link})}catch(a){E(String(a)),x()}},"sale-edit"(t){d.ui.saleEdit=t.dataset.id,h("vendite"),O("#sale-name")},"sale-edit-cancel"(){d.ui.saleEdit=null,h("vendite")},"sale-withdraw"(t){const e=lt(t.dataset.id);e&&(f(()=>{e.status="magazzino",e.listedAt=null,N(e)}),d.ui.saleOpen=null,h("vendite",{},`"${e.name}" ritirato: è di nuovo tra le cose da vendere`))},"sale-repost"(t){const e=lt(t.dataset.id);if(!e)return;const a=document.getElementById("sp-price")?.value,i=a?U(a):0;f(n=>{i>0&&Ft(n,e,{price:i}),e.listedAt=k(),N(e)}),d.ui.saleOpen=null,h("vendite",{},`"${e.name}" ripubblicato oggi${i>0?` a ${v(e.price)}`:""}`)},"sale-shipped"(t){const e=lt(t.dataset.id);e&&(f(()=>{e.shipped=!0,e.shippedAt=k(),N(e)}),h(d.view,{},`"${e.name}" spedito`))},"sale-unsell"(t){const e=lt(t.dataset.id);!e||!window.confirm(`Annullare la vendita di "${e.name}"?${e.txId?" Viene tolta anche l'entrata registrata sul conto.":""}`)||(f(a=>cs(a,e)),d.ui.saleTab=e.status==="vendita"?"vendita":"magazzino",h("vendite",{},`Vendita annullata: "${e.name}" è di nuovo ${e.status==="vendita"?"in vendita":"da vendere"}`))},"sale-del"(t){const e=lt(t.dataset.id);!e||!window.confirm(`Eliminare "${e.name}"?${e.txId?" L'entrata già registrata sul conto resta.":""}`)||(f(a=>{a.sales=a.sales.filter(i=>i.id!==e.id),Q(a,e.id)}),d.ui.saleEdit===e.id&&(d.ui.saleEdit=null))}},forms:{"sale-save"(t,e){const a=String(t.get("name")||"").trim();if(!a)return mt(e,"name","Scrivi cosa vendi");const i=p=>{const b=String(t.get(p)||"").trim();return b?U(b):null},n=i("price"),o=i("minPrice"),s=i("cost");for(const[p,b]of[["price",n],["minPrice",o],["cost",s]])if(b!==null&&!(b>0))return mt(e,p,"Scrivi un importo, es. 50");const l=d.ui.saleEdit?lt(d.ui.saleEdit):null,c=l?l.status:t.get("status")==="vendita"?"vendita":"magazzino";if(c==="vendita"&&!l&&!(n>0))return mt(e,"price","A quanto lo vendi?");const u={name:a,minPrice:o,cost:s,where:String(t.get("where")||"").trim(),note:String(t.get("note")||"").trim()};c==="vendita"&&Object.assign(u,{platform:t.get("platform")||"Subito",link:String(t.get("link")||"").trim(),listedAt:t.get("listedAt")||k()}),f(p=>{if(l)Object.assign(l,u),l.status==="vendita"&&n>0&&n!==l.price?Ft(p,l,{price:n}):l.status!=="vendita"&&(l.price=n),N(l);else{const b=ki(Object.assign(u,{status:"magazzino",price:c==="vendita"?null:n}));c==="vendita"&&Ft(p,b,{price:n,date:u.listedAt}),p.sales.push(b)}}),d.ui.saleEdit=null,d.ui.saleTab=c==="vendita"?"vendita":"magazzino",h("vendite",{},l?`"${a}" aggiornato`:c==="vendita"?`"${a}" è in vendita a ${v(n)}`:`"${a}" aggiunto alle cose da vendere`),l||O("#sale-name")},"sale-list"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return mt(e,"price","A quanto lo vendi?");f(n=>Ft(n,a,{price:i,platform:t.get("platform"),link:String(t.get("link")||"").trim(),date:t.get("date")||k()})),d.ui.saleOpen=null,d.ui.saleTab="vendita",h("vendite",{},`"${a.name}" in vendita a ${v(i)} su ${a.platform}`)},"sale-price"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return mt(e,"price","Scrivi il nuovo prezzo");const n=a.price;f(o=>Ft(o,a,{price:i})),d.ui.saleOpen=null,h("vendite",{},n&&n!==i?`"${a.name}": ${v(n)} → ${v(i)}`:"Prezzo salvato")},"sale-sell"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return mt(e,"price","A quanto l'hai venduto?");const n=String(t.get("fees")||"").trim(),o=n?U(n):0;if(n&&!(o>=0))return mt(e,"fees","Scrivi un importo, es. 5");if(o>=i)return mt(e,"fees","Le spese superano il prezzo");const s=t.get("record")==="on",l=s?t.get("accountId"):null;if(s&&!l)return E("Crea prima un conto in Finanze."),x();const c=t.get("delivery")==="spedizione"?"spedizione":"mano";f(u=>ls(u,a,{price:i,date:t.get("date")||k(),fees:o,delivery:c,buyer:String(t.get("buyer")||"").trim(),accountId:l})),d.ui.saleOpen=null,d.ui.saleTab="venduti",h("vendite",{},`Venduto "${a.name}" a ${v(i)}${s?` · entrata di ${v(ge(a))} su ${nt(d.data,l)}`:""}${c==="spedizione"?" · ricordati di spedirlo":""}`)}}});function fl(){const t=new Date().getHours();return t<13?"Buongiorno":t<18?"Buon pomeriggio":"Buonasera"}function $l(){const t=d.data.profile;if(t.lat==null)return`<button class="weather link" data-action="nav" data-id="impostazioni">${A("cloud",26,1.6)}<span>Imposta la tua città per il meteo</span></button>`;if(!d.weather)return`<div class="weather">${A("cloud",26,1.6)}<span class="sub">${r(d.weatherError||"Carico il meteo…")}</span></div>`;const e=d.weather.current,a=d.weather.daily,i=a&&a.weather_code?Ze(a.weather_code[1]).toLowerCase():"";return`
    <div class="weather">
      <span class="accent-2">${A("cloud",30,1.6)}</span>
      <div><div class="temp">${Math.round(e.temperature_2m)}°</div>
      <div class="sub small">${r(t.city)} · ${r(Ze(e.weather_code))}${i?" · domani "+r(i):""}</div></div>
    </div>`}function yl(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()-t.getDate()+1}function fn(t){const e=K(t),a=ut(new Date),i=be(t,a),n=t.settings.budget||0,o=H(n-i.out);return`
      <section class="card" aria-labelledby="h-fin">
        <div class="card-head"><h2 id="h-fin">Finanze · ${r(Ci(a))}</h2><span class="sub">${yl()} giorni a fine mese</span></div>
        <div class="metrics">
          ${e?`<div class="metric"><div class="label">Saldo ${r(e.name)}</div><div class="value">${v(te(t,e))}</div>${_i(t,e)}</div>`:""}
          <div class="metric"><div class="label">Speso nel mese</div><div class="value">${v(i.out)}</div>${n?`<div class="hint">${o>=0?"restano "+v(o)+" di budget":"budget superato di "+v(-o)}</div>`:`<div class="hint">entrate ${v(i.inc)}</div>`}</div>
        </div>
        ${n?`<div class="progress ${o<0?"over":""}"><div style="width:${Math.min(100,Math.round(i.out/n*100))}%"></div></div>`:""}
        <div class="stack-sm">${Ri(i.cats,i.out,t.settings.catBudgets,{limit:4})}</div>
        ${t.goals.some(s=>!s.done)?`<div class="divider-top stack-sm"><div class="card-head"><span class="sub">Obiettivi</span><button class="link" data-action="nav" data-id="obiettivi">Apri</button></div>${ao(t)}</div>`:""}
        ${i.tx.length?`<div class="list tight">${i.tx.filter(s=>!s.invest).slice(0,4).map(s=>Fi(s)).join("")}</div>`:""}
        <form data-form="quick-expense" class="row">
          <label class="sr-only" for="qe-amount">Importo</label>
          <input class="input amount" id="qe-amount" name="amount" inputmode="decimal" placeholder="0,00 €" required>
          <label class="sr-only" for="qe-cat">Categoria</label>
          <select class="input" id="qe-cat" name="category">${Lt("out","Spesa")}</select>
          <label class="sr-only" for="qe-note">Nota</label>
          <input class="input grow" id="qe-note" name="note" placeholder="Nota">
          <label class="sr-only" for="qe-acc">Conto</label>
          <select class="input" id="qe-acc" name="accountId">${at()}</select>
          <button class="btn primary" type="submit">Aggiungi spesa</button>
        </form>
      </section>
`}function $n(t){return`
      <section class="card" aria-labelledby="h-shop">
        <div class="card-head"><h2 id="h-shop">Spesa</h2><button class="link" data-action="nav" data-id="spesa">${Wt(t).length?Wt(t).length+" da prendere":"Apri"}</button></div>
        ${Js()}
        ${Vi("shop-quick-oggi")}
      </section>
`}function yn(t){return`
      <section class="card" aria-labelledby="h-rub">
        <div class="card-head"><h2 id="h-rub">Contatti rapidi</h2><button class="link" data-action="nav" data-id="rubrica">Rubrica</button></div>
        ${t.contacts.some(e=>e.phone)?`<div class="list">${t.contacts.filter(e=>e.phone).slice(0,6).map(e=>`
          <div class="item"><div class="avatar">${r(e.name.split(/\s+/).slice(0,2).map(a=>a[0]).join("").toUpperCase())}</div>
          <div class="text"><div>${r(e.name)}</div><div class="hint">${r(e.phone)}</div></div>
          <button class="icon-btn" data-action="copy" data-text="${r(e.phone)}" aria-label="Copia il numero di ${r(e.name)}">${A("copy",16)}</button></div>`).join("")}</div>`:'<div class="empty">Aggiungi i numeri dei tuoi contatti dalla Rubrica.</div>'}
      </section>
`}function wn(t){const e=pa(t);return`
    ${e.length?`
    <section class="card attention" aria-labelledby="h-due">
      <div class="card-head"><h2 id="h-due">Da confermare</h2><span class="sub">${e.length} programmat${e.length===1?"o":"i"} già passat${e.length===1?"o":"i"}</span></div>
      <div class="list">${e.slice(0,6).map(fa).join("")}</div>
      ${e.length>6?'<button class="link" data-action="nav" data-id="programmati">Vedi tutti</button>':""}
    </section>`:""}
`}function kn(t,e){const a=k(),i=zi(t,7),n=ze(t,P(a,0),P(a,7));return[0,1,2,3,4,5,6].map(o=>{const s=P(a,o),l=[],c=d.weather?.daily;if(c){const u=c.time.indexOf(s);if(u>=0){const p=c.precipitation_probability_max?.[u];l.push({cls:"meteo",text:`${Ze(c.weather_code[u])}, ${Math.round(c.temperature_2m_min[u])}°/${Math.round(c.temperature_2m_max[u])}°${p>=50?" · porta l'ombrello":""}`})}}for(const u of n.filter(p=>p.date===s)){const p=Xi(t,u.contact.name).length;l.push({cls:"comp",text:`Compleanno di ${u.contact.name}${u.age?" ("+u.age+")":""}${p?` · ${p} ${p===1?"idea":"idee"} regalo`:""}`})}for(const u of i.filter(p=>p.date===s))l.push({cls:"pag",text:`${u.r.name} ${ae(u.r)}`});if(o>0)for(const u of e.filter(p=>p.due===s))l.push({cls:"att",text:u.text});if(o>0)for(const u of t.deadlines.filter(p=>!p.archived&&p.due===s))l.push({cls:"scad",text:`Scade: ${u.name}`});return{iso:s,n:o,parts:l}}).filter(o=>o.n>0&&o.parts.some(s=>s.cls!=="meteo")||o.n>0&&o.n<=3)}function wl(){const t=d.data,e=k(),a=ve(t.todos.filter(s=>!s.done)),i=t.todos.filter(s=>s.done&&s.doneAt===e).length,n=ga(t),o=kn(t,a);return`
    <header class="head">
      <div><div class="date">${r(new Date().toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).replace(/^./,s=>s.toUpperCase()))}</div>
      <h1>${fl()}${t.profile.name?", "+r(t.profile.name):""}</h1></div>
      ${$l()}
    </header>
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}
    ${ya("card")}
    ${sn(t)}
    ${wn(t)}
    ${Hi(t)}
    <div class="grid">
      ${on(t)}
      ${po(t)}
      ${hl(t)}
      ${ye(t).length?`<section class="card attention" aria-labelledby="h-meds-low"><div class="card-head"><h2 id="h-meds-low">Da ricomprare</h2><button class="link" data-action="nav" data-id="salute">Salute</button></div>
        <div class="list">${ye(t).map(({m:s,s:l})=>`<div class="item"><div class="text">${r(s.name)}</div><span class="tag warn">${l.days===0?"finito":`ancora ${l.days} giorni`}</span><button class="btn small" data-action="med-shop" data-id="${s.id}">Metti in spesa</button></div>`).join("")}</div></section>`:""}
      <section class="card" aria-labelledby="h-todo">
        <div class="card-head"><h2 id="h-todo">Da fare</h2><span class="sub">${a.length} aperte · ${i} fatte oggi</span></div>
        ${n.length?`<div class="list">${n.map(s=>je(s,{tools:!1})).join("")}</div>`:""}
        <div class="list">${a.length?a.slice(0,7).map(Zt).join(""):n.length?"":'<div class="empty">Niente in sospeso.</div>'}</div>
        ${a.length>7?`<button class="link" data-action="nav" data-id="attivita">Vedi tutte (${a.length})</button>`:""}
        ${Bi()}
      </section>
      ${Yi(t)}

      ${fn(t)}

      ${$n(t)}

      <section class="card" aria-labelledby="h-next">
        <div class="card-head"><h2 id="h-next">Prossimi giorni</h2><button class="link" data-action="nav" data-id="calendario">Calendario</button></div>
        ${o.length?o.map(s=>`
          <div class="day-row"><div class="when">${r(pt(s.iso))}</div>
            <div class="stack-xs">${s.parts.length?s.parts.map(l=>`<span class="${l.cls==="meteo"?"sub":""}"><span class="dot-cat ${l.cls}" aria-hidden="true"></span>${r(l.text)}</span>`).join(""):'<span class="hint">Niente in programma</span>'}</div>
          </div>`).join(""):'<div class="empty">Settimana libera.</div>'}
      </section>

      ${yn(t)}
    </div>`}const zt=(t,e,a,i,n)=>{const o=2*Math.PI*40;return`<div class="cmd-mini">
    <div class="cmd-mini-ring"><svg viewBox="0 0 96 96" aria-hidden="true">
      <circle cx="48" cy="48" r="40" fill="none" stroke="var(--track)" stroke-width="6"/>
      <circle cx="48" cy="48" r="40" fill="none" stroke="${e}" stroke-width="6" stroke-dasharray="${(o*Math.min(1,Math.max(0,t))).toFixed(1)} ${o.toFixed(1)}" transform="rotate(-90 48 48)"/>
      <circle cx="48" cy="48" r="46" fill="none" stroke="var(--line-2)" stroke-width="1" stroke-dasharray="2 4"/></svg>
      <span>${r(i)}</span></div>
    <span class="cmd-mini-label">${r(a)}</span><span class="hint">${r(n)}</span></div>`};function kl(){const t=d.data,e=k(),a=st(e),i=ve(t.todos.filter(I=>I.due&&I.due<=e&&(!I.done||I.doneAt===e))),n=i.filter(I=>!I.done),o=n.filter(I=>I.due<e).length,s=ga(t),l=t.habits.filter(I=>!I.archived),c=l.reduce((I,M)=>I+Math.min(7,M.perWeek),0),u=l.reduce((I,M)=>I+Math.min(M.perWeek,xt(t,M,a)),0),p=xi(t,a),b=i.length?(i.length-n.length)/i.length:1,m=c?u/c:0;p.meals/14;const w=Se(),y=pn(t).filter(I=>!I.done&&!(w&&(I.tag==="FARMACO"||I.tag==="CONFERMA"))),q=ve(t.todos.filter(I=>!I.done)),D=kn(t,q),g=[];for(const I of n.filter(M=>M.time))g.push({when:I.time,title:I.text,sub:"Oggi",now:!0});for(const I of D)for(const M of I.parts.filter(B=>B.cls!=="meteo"&&!(w&&B.cls==="pag")))g.push({when:pt(I.iso).toUpperCase(),title:M.text,sub:"",cls:M.cls});const $=xe(t)[0],C=be(t,ut(new Date)),S=t.settings.budget||0,_=Ii(t);return`
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}
    <div class="cmd-row">
      <section class="card cmd-panel" aria-labelledby="h-al">
        <div class="card-head"><h2 id="h-al">Avvisi</h2><span class="cmd-num">${String(y.length).padStart(2,"0")}</span></div>
        ${y.length?`<div class="cmd-alerts">${y.slice(0,7).map(I=>`
          <button class="cmd-alert ${I.cls}" data-action="nav" data-id="${I.nav}">
            <span class="cmd-alert-text"><span>${r(I.title)}</span><span class="hint">${r(I.sub)}</span></span>
            <span class="cmd-tag">${I.tag}</span></button>`).join("")}</div>`:'<div class="empty">Tutto a posto: niente da recuperare.</div>'}
      </section>

      <section class="card cmd-core" aria-label="Il giorno">
        ${ll({todays:i,openToday:n,late:o,habTarget:c,habDone:u,pHab:m,pAtt:b,wb:p,targets:_,days:D,mon:a})}
      </section>

      <section class="card cmd-panel" aria-labelledby="h-todo">
        <div class="card-head"><h2 id="h-todo">Da fare oggi</h2><button class="link" data-action="nav" data-id="attivita">${q.length} aperte</button></div>
        ${s.length?`<div class="list">${s.map(I=>je(I,{tools:!1})).join("")}</div>`:""}
        <div class="list">${i.length?i.slice(0,7).map(Zt).join(""):s.length?"":'<div class="empty">Niente per oggi.</div>'}</div>
        <h2 class="cmd-sub">Comandi rapidi</h2>
        <div class="cmd-quick">
          <button class="cmd-q" data-action="cap-open">${A("plus",16)}Annota</button>
          <button class="cmd-q" data-action="nav" data-id="spesa">${A("cart",16)}Spesa</button>
          <button class="cmd-q" data-action="nav" data-id="finanze">${A("wallet",16)}Movimento</button>
          <button class="cmd-q" data-action="nav" data-id="calendario">${A("calendar",16)}Calendario</button>
        </div>
      </section>
    </div>

    <div class="cmd-row">
      <section class="card cmd-panel" aria-labelledby="h-ag">
        <div class="card-head"><h2 id="h-ag">Agenda</h2><button class="link" data-action="nav" data-id="calendario">Calendario</button></div>
        ${g.length?`<div class="cmd-agenda">${g.slice(0,7).map(I=>`
          <div class="cmd-ag ${I.now?"now":""}"><span class="cmd-ag-when">${r(I.when)}</span><span class="cmd-ag-dot" aria-hidden="true"></span>
            <span class="cmd-ag-text"><span>${r(I.title)}</span>${I.sub?`<span class="hint">${r(I.sub)}</span>`:""}</span></div>`).join("")}</div>`:'<div class="empty">Settimana libera.</div>'}
      </section>

      <section class="card cmd-panel cmd-wide" aria-labelledby="h-obj">
        <h2 id="h-obj">Settimana e obiettivi</h2>
        <div class="cmd-minis">
          ${l.length?zt(m,"var(--good)","ABITUDINI",Math.round(m*100)+"%",`${u} di ${c} questa settimana`):zt(0,"var(--good)","ABITUDINI","—","nessuna abitudine")}
          ${$&&!w?zt($.target?Ne(t,$)/$.target:0,"var(--accent)",$.name.toUpperCase(),$.target?Math.round(Ne(t,$)/$.target*100)+"%":"—",`${v(Ne(t,$))} di ${v($.target)}`):zt(0,"var(--accent)","OBIETTIVO","—","nessun obiettivo")}
          ${S&&!w?zt(C.out/S,C.out>S?"var(--bad)":"var(--warn)","BUDGET "+Ci(ut(new Date)).toUpperCase(),Math.round(C.out/S*100)+"%",`${v(C.out)} di ${v(S)}`):zt(0,"var(--warn)","SPESO NEL MESE",v(C.out).replace(/,\d\d\s*€/," €"),"nessun budget impostato")}
        </div>
      </section>

      <section class="card cmd-panel" aria-labelledby="h-meal">
        <div class="card-head"><h2 id="h-meal">Equilibrio pasti</h2><button class="link" data-action="nav" data-id="pasti">Pasti</button></div>
        <div class="cmd-meals">${Kt.map(I=>{const M=p.counts[I],B=_[I],ht=B.min||B.max||1,X=B.min!=null&&M<B.min,It=B.max!=null&&M>B.max,ie=B.max!=null&&M>=B.max,Rt=4,De=Math.min(Rt,Math.round(M/Math.max(ht,1)*Rt));return`<div class="cmd-meal ${X?"m-low":It?"m-over":ie?"m-full":"m-ok"}"><span>${r(bt[I].label)}</span><span class="cmd-segs">${Array.from({length:Rt},(Ca,ft)=>`<i class="${ft<De?"on":""}"></i>`).join("")}</span><span class="cmd-meal-v">${M} / ${B.min&&B.max?`${B.min}–${B.max}`:B.min?B.min+"+":"max "+B.max}</span></div>`}).join("")}</div>
      </section>
    </div>

    <div class="grid">
      ${sn(t)}
      ${w?"":wn(t)}
      ${w?"":Hi(t)}
      ${w?"":on(t)}
      ${Yi(t)}
      ${w?"":fn(t)}
      ${$n(t)}
      ${yn(t)}
    </div>`}F("oggi",{render:()=>ds()||us()?kl():wl(),actions:{...cl},forms:{"quick-expense"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 12,50");return}T("Spesa aggiunta"),f(i=>i.transactions.push({id:W(),accountId:t.get("accountId")||K(i)?.id,date:k(),type:"out",amount:a,category:String(t.get("category")||"Altro"),note:String(t.get("note")||"").trim(),transfer:!1,invest:!1,createdAt:new Date().toISOString()}))}}});const Sl=[{name:"Bastoncini di merluzzo al forno con piselli",minutes:25,ahead:"",steps:["Accendi il forno a 200 °C (180 °C se ventilato)","Metti i bastoncini ancora surgelati su una teglia con carta forno","Inforna 15–18 minuti, girandoli a metà cottura","Intanto metti i piselli in padella con un filo d'olio, mezzo bicchiere d'acqua e un pizzico di sale","Cuoci i piselli 8–10 minuti col coperchio, poi scopri e fai asciugare l'acqua"]},{name:"Bocconcini di pollo al limone con insalata",minutes:20,ahead:"",steps:["Taglia il petto di pollo a cubetti di 2–3 cm","Passali nella farina e scuoti via quella in eccesso","Rosolali in padella con un filo d'olio a fuoco medio-alto, 5–6 minuti girandoli","Aggiungi il succo del limone e 3–4 cucchiai d'acqua, sala e cuoci 2–3 minuti finché il sugo si addensa","Lava l'insalata e condiscila con olio e sale"]},{name:"Cosce di pollo con patate, rosmarino e aglio",minutes:60,ahead:"",steps:["Accendi il forno a 200 °C","Sbuccia le patate e tagliale a spicchi","In una teglia metti patate e cosce, 2 spicchi d'aglio interi schiacciati, rosmarino, olio, sale e pepe; mescola bene","Sistema le cosce con la pelle verso l'alto","Inforna 45–50 minuti, girando le patate a metà","Sono pronte quando la carne vicino all'osso non è più rosa e la pelle è dorata"]},{name:"Cotolette di pollo in padella con carote al vapore",minutes:25,ahead:"",steps:["Pela le carote e tagliale a rondelle","Cuocile a vapore 10–12 minuti (cestello, oppure pentola con due dita d'acqua e coperchio)","Intanto scalda un dito d'olio in padella a fuoco medio","Cuoci le cotolette 4–5 minuti per lato finché sono dorate (se sono surgelate già impanate, segui la confezione)","Scolale su carta da cucina e sala","Condisci le carote con olio e sale"]},{name:"Fagioli e tonno",minutes:10,ahead:"",steps:["Scola i fagioli e sciacquali sotto l'acqua","Sgocciola il tonno","Lava l'insalata","Unisci tutto e condisci con olio, sale e pepe (un goccio d'aceto se ti piace)"]},{name:"Frittata Pomodori e Pancetta",minutes:20,ahead:"",steps:["Taglia i pomodori a dadini e togli semi e acqua","Rosola la pancetta in una padella antiaderente senza olio, 3–4 minuti","Aggiungi i pomodori e cuoci 2–3 minuti","Sbatti le uova con sale e pepe e versale nella padella","Cuoci a fuoco basso col coperchio 6–8 minuti, finché sopra è quasi rappresa","Girala aiutandoti con un piatto e cuoci altri 2–3 minuti"]},{name:"Insalata di ceci, tonno e pomodorini",minutes:15,ahead:"",steps:["Affetta sottile la cipolla rossa e lasciala 10 minuti in acqua fredda con un goccio d'aceto (diventa meno forte)","Scola i ceci e sciacquali","Taglia i pomodori","Sgocciola il tonno","Scola la cipolla, unisci tutto e condisci con olio, sale e pepe"]},{name:"Insalata di tonno, patate e fagiolini",minutes:30,ahead:"",steps:["Sbuccia le patate e tagliale a cubetti","Mettile in una pentola di acqua fredda salata e porta a bollore","Spunta i fagiolini e aggiungili nella stessa pentola dopo 5 minuti di bollore","Cuoci ancora 10 minuti, finché la forchetta entra nelle patate","Scola e lascia intiepidire","Unisci il tonno sgocciolato e condisci con olio e sale"]},{name:"Lenticchie e salsiccia in padella",minutes:30,ahead:"",steps:["Trita la cipolla e falla appassire in padella con un filo d'olio, 5 minuti","Togli il budello alla salsiccia, sbriciolala e rosolala 5 minuti","Aggiungi la passata, sala e cuoci 10 minuti","Aggiungi le lenticchie scolate e cuoci altri 10 minuti; se si asciuga troppo, un po' d'acqua"]},{name:"Merluzzo al forno con pomodorini e olive nere",minutes:30,ahead:"Sposta il merluzzo dal freezer al frigo per farlo scongelare",steps:["Accendi il forno a 200 °C","Taglia i pomodori a metà e mettili in teglia con le olive, olio, sale e origano","Tampona i filetti con carta da cucina e adagiali sopra, con un filo d'olio e un pizzico di sale","Inforna 15–20 minuti, finché il pesce si sfalda con la forchetta"]},{name:"Piadina Cotto e Formaggio",minutes:10,ahead:"",steps:["Scalda una padella antiaderente a fuoco medio","Scalda la piadina 30 secondi per lato","Metti formaggio e cotto su metà piadina e chiudila","Cuoci 1–2 minuti per lato finché il formaggio si scioglie","Aggiungi l'insalata condita dentro o a parte"]},{name:"Riso al curry con pollo o verdure",minutes:30,ahead:"",steps:["Metti a bollire l'acqua salata e cuoci il riso per il tempo della confezione","Togli pelle e osso alle cosce e taglia la carne a pezzetti (versione verdure: salta questo passaggio)","Rosola il pollo in padella con un filo d'olio, 6–8 minuti","Aggiungi 1–2 cucchiaini di curry e mescola 30 secondi","Aggiungi i piselli e mezzo bicchiere d'acqua (o latte), sala e cuoci 8–10 minuti","Scola il riso e servilo con il pollo al curry sopra"]},{name:"Sgombro con patate lesse",minutes:30,ahead:"",steps:["Sbuccia le patate e tagliale a pezzi","Mettile in acqua fredda salata e lessale 15–20 minuti dal bollore, finché la forchetta entra","Trita il prezzemolo","Scola le patate e condiscile tiepide con olio, sale e prezzemolo","Sgocciola lo sgombro e mettilo sopra"]},{name:"Zuppa di lenticchie con crostini",minutes:35,ahead:"",steps:["Taglia cipolla e carote a dadini","Soffriggile in pentola con un filo d'olio, 5 minuti","Aggiungi 2–3 cucchiai di passata, le lenticchie scolate e acqua (o brodo) fino a coprirle; sala","Cuoci 20 minuti a fuoco basso; se la vuoi cremosa, frullane metà","Intanto taglia il pane a cubetti e tostalo in padella o in forno a 200 °C per 5 minuti","Servi con i crostini e un filo d'olio a crudo"]}],we=[["pranzo","Pranzo"],["cena","Cena"]],Al=["lun","mar","mer","gio","ven","sab","dom"],xl=[["cena","A cena"],["pranzo","A pranzo"],["entrambi","A pranzo e a cena"]],Wa=t=>String(t||"").split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean),Il=t=>String(t||"").split(/\n+/).map(e=>e.trim().replace(/^(\d+\s*[.):]|\d+\s+-\s|[-•*])\s*/,"").trim()).filter(Boolean),Ha={pranzo:"Pranzo",cena:"Cena"},Qa=t=>String(t||"").trim().toLowerCase().replace(/\s+/g," "),Sn=t=>Sl.find(e=>Qa(e.name)===Qa(t.name)),Cl=t=>Array.isArray(t.steps)&&t.steps.length>0,ke=t=>t.dishes.filter(e=>!Cl(e)&&Sn(e));function yt(){const t=P(st(k()),7*(d.ui.mealWeek||0));return{mon:t,sun:P(t,6)}}function zl(t,e){const a=k();return`
    <div class="meal-grid" role="table" aria-label="Menù della settimana">
      <div class="meal-head" role="row"><span role="columnheader"></span>${we.map(([,i])=>`<span role="columnheader">${i}</span>`).join("")}</div>
      ${[0,1,2,3,4,5,6].map(i=>{const n=P(e,i),o=t.mealPlan[n]||{};return`<div class="meal-row ${n===a?"today":""} ${n<a?"past":""}" role="row">
          <span class="meal-day" role="rowheader">${r(pt(n))}</span>
          ${we.map(([s,l])=>{const c=o[s]||"",u=c&&re(t,c);return`<div class="meal-cell" role="cell">
              <label class="sr-only" for="m-${n}-${s}">${l} di ${r(pt(n))}</label>
              <input class="input slim" id="m-${n}-${s}" list="dish-names" data-change="meal-set" data-date="${n}" data-slot="${s}" value="${r(c)}" placeholder="—" autocomplete="off">
              ${c?u?El(t,u):`<button class="link small" data-action="dish-from" data-name="${r(c)}">Salva come piatto</button>`:""}
            </div>`}).join("")}
        </div>`}).join("")}
    </div>
    <datalist id="dish-names">${t.dishes.map(i=>`<option value="${r(i.name)}">`).join("")}</datalist>`}function El(t,e){if(!e.ingredients.length)return'<span class="hint">nessun ingrediente salvato</span>';const a=ks(t,e),i=n=>r(n.slice(0,2).join(", "))+(n.length>2?` +${n.length-2}`:"");return!a.missing.length&&!a.listed.length?'<span class="hint ok-text">hai tutto in casa</span>':a.missing.length?`<span class="hint warn-text">da comprare: ${i(a.missing)}</span>`:`<span class="hint">in lista: ${i(a.listed)}</span>`}function jl(t){const e=d.ui.prepDay===1?1:0,a=P(k(),e),{meals:i,tomorrow:n}=Ai(t,a),o=d.ui.prepDone||{},s=`<span class="row nowrap gap-sm">${[[0,"Oggi"],[1,"Domani"]].map(([u,p])=>`<button class="chip ${e===u?"on":""}" data-action="prep-day" data-n="${u}" aria-pressed="${e===u}">${p}</button>`).join("")}</span>`,l=n.length?`<div class="prep-ahead">${A("calendar",16)}<div><strong>${e?"Da fare domani":"Da fare oggi"} per ${e?"dopodomani":"domani"}</strong>${n.map(u=>`<div>${r(u.ahead)} <span class="hint">· ${Ha[u.slot].toLowerCase()}: ${r(u.dish.name)}</span></div>`).join("")}</div></div>`:"",c=i.length?i.map(u=>{const p=`<div class="prep-head"><span class="tag">${Ha[u.slot]}</span><strong>${r(u.dish?u.dish.name:u.text)}</strong>${u.minutes?`<span class="sub">${u.minutes} min</span>`:""}</div>`;if(!u.dish)return`<div class="prep-meal">${p}</div>`;const b=u.ahead?`<div class="hint">Prima: ${r(u.ahead)}</div>`:"";return u.steps.length?`<div class="prep-meal">${p}${b}<ol class="prep-steps">${u.steps.map((m,w)=>{const y=`${a}|${u.slot}|${w}`;return`<li><label class="check"><input type="checkbox" data-change="prep-step" data-key="${r(y)}" ${o[y]?"checked":""}><span>${r(m)}</span></label></li>`}).join("")}</ol></div>`:`<div class="prep-meal">${p}${b}<div class="hint">Nessun passaggio salvato. <button class="link small" data-action="dish-edit" data-id="${u.dish.id}">Aggiungili</button></div></div>`}).join(""):`<div class="empty">${e?"Domani":"Oggi"} nel menù non c'è niente.</div>`;return`
    <section class="card stack-sm" aria-labelledby="h-prep">
      <div class="card-head"><h2 id="h-prep">Preparazione</h2>${s}</div>
      ${l}
      ${c}
    </section>`}const Ya=t=>t.min&&t.max!=null?`${t.min}–${t.max}`:t.min?`${t.min}+`:t.max!=null?`max ${t.max}`:"—";function Dl(t,e){const a=Ii(t);if(d.ui.targetsEdit)return`
      <form class="card stack-sm" data-form="meal-targets-save" aria-labelledby="h-targets">
        <div class="card-head"><h2 id="h-targets">Obiettivi della settimana</h2><button class="link" type="button" data-action="targets-cancel">Annulla</button></div>
        <div class="hint">Quante volte a settimana. Lascia vuoto per "nessun minimo" o "nessun limite".</div>
        ${Kt.map(l=>`
          <div class="bal-row">
            <span>${bt[l].label}</span>
            <label class="field inline">min<input class="input slim num" type="number" min="0" max="14" name="min-${l}" value="${a[l].min??""}"></label>
            <label class="field inline">max<input class="input slim num" type="number" min="0" max="14" name="max-${l}" value="${a[l].max??""}"></label>
          </div>`).join("")}
        <div class="row"><button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-action="targets-reset">Valori delle linee guida</button></div>
      </form>`;const{counts:i,meals:n,known:o}=xi(t,e);return`
    <section class="card stack-sm" aria-labelledby="h-bal">
      <div class="card-head"><h2 id="h-bal">Equilibrio della settimana</h2><button class="link" data-action="targets-edit">Obiettivi</button></div>
      ${Kt.map(l=>{const c=a[l],u=i[l],p=c.max!=null&&u>c.max,b=c.min&&u<c.min,m=c.min||c.max||1,w=Math.min(100,Math.round(u/m*100));return`<div class="bal-row">
      <span>${bt[l].label}</span>
      <div class="progress ${p?"over":b?"near":"goal full"}" role="img" aria-label="${u} su obiettivo ${Ya(c)}"><div style="width:${w}%"></div></div>
      <span class="sub ${p?"bad-text":""}">${u} · ${Ya(c)}</span>
    </div>`}).join("")}
      <div class="bal-row"><span>Verdure</span><span class="sub bal-wide">${i.verdure} pasti su ${n}</span></div>
      <div class="hint">Volte a settimana (Linee guida CREA per un adulto). Contano solo i pasti del menù con un piatto salvato (${o} su ${n}): i pranzi fuori non ci sono, quindi con le sole cene non si arriva a tutti i minimi. "Proponi la settimana" sceglie prima per l'equilibrio, poi con quello che hai in casa, poi per la varietà.</div>
    </section>`}function ql(t,e,a){const i=e>k()?e:k(),n=Ei(t,i,a);if(!n.length)return'<section class="card"><div class="card-head"><h2>Cosa manca</h2><button class="link" data-action="meal-check-close">Chiudi</button></div><div class="empty">Nei pasti da qui a domenica non ci sono piatti con ingredienti. Scrivi i piatti nel menù usando i nomi salvati in "I miei piatti".</div></section>';const o={missing:"non è in elenco",listed:"già da prendere",have:"risulta che ce l'hai"};return`
    <form class="card stack-sm attention" data-form="meal-to-shop" aria-labelledby="h-miss">
      <div class="card-head"><h2 id="h-miss">Cosa manca da ${r(z(i))} a ${r(z(a))}</h2><button class="link" type="button" data-action="meal-check-close">Chiudi</button></div>
      <div class="hint">Spunta quello da comprare. Le cose che "risulta che ce l'hai" controllale in dispensa: se sono finite, spuntale.</div>
      <div class="list">${n.map((s,l)=>`
        <label class="item check">
          <input type="checkbox" name="ing" value="${l}" ${s.state==="missing"?"checked":""} ${s.state==="listed"?"disabled":""}>
          <span class="text"><span>${r(s.name)}</span><span class="hint"> · per ${r(s.dishes.join(", "))}</span></span>
          <span class="tag ${s.state==="missing"?"warn":s.state==="listed"?"":"ent"}">${o[s.state]}</span>
        </label>`).join("")}</div>
      <button class="btn primary self-start" type="submit">${A("cart",16)}Metti nella spesa</button>
    </form>`}function Nl(t){const e=t?ji(t):[],a=t&&!Array.isArray(t.cats);return`<fieldset class="field plain cats-field"><legend>Cosa contiene (per l'equilibrio)</legend>
    <div class="row">${Object.entries(bt).map(([i,n])=>`<label class="check small"><input type="checkbox" name="cat" value="${i}" ${e.includes(i)?"checked":""}>${n.label}</label>`).join("")}</div>
    <div class="hint">${a?"Stimato dagli ingredienti: controlla e salva.":"Se lo lasci vuoto lo stimo dagli ingredienti."} Il formaggio grattugiato sopra non conta.</div>
  </fieldset>`}function Ml(t,e){return`
    <form class="card stack" data-form="dish-save" aria-labelledby="h-dish">
      <div class="card-head"><h2 id="h-dish">${t?"Modifica piatto":"Nuovo piatto"}</h2>${t?'<button class="link" type="button" data-action="dish-cancel">Annulla</button>':""}</div>
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Nome<input class="input" id="dish-name" name="name" value="${r(t?t.name:e||"")}" placeholder="Pasta al pomodoro" required></label>
      <label class="field">Ingredienti (uno per riga o separati da virgola)<textarea class="input" name="ingredients" rows="5" placeholder="Pasta&#10;Passata di pomodoro&#10;Basilico&#10;Parmigiano">${r(t?t.ingredients.join(`
`):"")}</textarea></label>
      <div class="hint">Usa gli stessi nomi della Spesa (es. "Latte", non "latte intero 1 litro"): così la dashboard capisce se ce l'hai già.</div>
      <label class="field">Preparazione (un passaggio per riga)<textarea class="input" name="steps" rows="5" placeholder="Metti a bollire l'acqua&#10;Scalda la passata con olio e aglio, 10 minuti&#10;Cuoci la pasta e scolala al dente&#10;Manteca nel sugo con basilico">${r(t&&Array.isArray(t.steps)?t.steps.join(`
`):"")}</textarea></label>
      <div class="row prep-fields">
        <label class="field inline">Tempo<input class="input slim num" type="number" min="1" max="999" name="minutes" value="${t&&t.minutes?t.minutes:""}" placeholder="—"> min</label>
        <label class="field grow">Da fare prima (te lo ricordo il giorno prima)<input class="input" name="ahead" value="${r(t&&t.ahead?t.ahead:"")}" placeholder="es. ceci in ammollo la sera prima, scongelare il pesce"></label>
      </div>
      <label class="field">Nota<input class="input" name="note" value="${r(t?t.note:"")}" placeholder="es. anche per 2 giorni"></label>
      ${Nl(t)}
      <label class="field">Quando lo mangi<select class="input" name="when">${xl.map(([a,i])=>`<option value="${a}" ${(t?t.when||"entrambi":"cena")===a?"selected":""}>${i}</option>`).join("")}</select></label>
      <label class="check small"><input type="checkbox" name="noauto" ${t&&t.auto===!1?"checked":""}>Non propormelo in automatico (es. Avanzi, Pizza fuori)</label>
      <button class="btn primary self-start" type="submit">${t?"Salva":"Aggiungi"}</button>
    </form>`}function Ol(t,e){return`
    <form class="card stack-sm" data-form="preset-save" aria-labelledby="h-pform">
      <div class="card-head"><h2 id="h-pform">${e.id?"Modifica "+r(e.name):"Nuova settimana tipo"}</h2><button class="link" type="button" data-action="preset-cancel">Annulla</button></div>
      <input type="hidden" name="id" value="${e.id||""}">
      <label class="field">Nome<input class="input" id="preset-name" name="name" value="${r(e.name||"")}" placeholder="Settimana 1" required></label>
      <div class="hint">Piatti con il giorno fisso (lascia vuoto quello che non è fisso):</div>
      <div class="meal-grid compact">
        <div class="meal-head"><span></span><span>Pranzo</span><span>Cena</span></div>
        ${Al.map((a,i)=>`<div class="meal-row"><span class="meal-day">${a}</span>
          ${we.map(([n,o])=>`<div class="meal-cell"><label class="sr-only" for="p-${i}-${n}">${o} di ${a}</label><input class="input slim" id="p-${i}-${n}" name="d${i}-${n}" list="dish-names" value="${r(e.days?.[i]?.[n]||"")}" placeholder="—" autocomplete="off"></div>`).join("")}
        </div>`).join("")}
      </div>
      <label class="field">Piatti senza giorno fisso (uno per riga): vanno nelle sere libere
        <textarea class="input" name="pool" rows="4" placeholder="Pasta al pomodoro&#10;Pollo al forno">${r((e.pool||[]).join(`
`))}</textarea></label>
      <button class="btn primary self-start" type="submit">Salva</button>
    </form>`}function Tl(t,e){const a=t.mealPresets,i=d.ui.presetEdit;return i?Ol(t,i==="new"?{name:`Settimana ${a.length+1}`}:a.find(n=>n.id===i)||{}):`
    <section class="card stack-sm" aria-labelledby="h-presets">
      <div class="card-head"><h2 id="h-presets">Settimane tipo</h2><button class="link" data-action="preset-new">+ Nuova</button></div>
      ${a.length?`<div class="list">${a.map(n=>{const o=Object.values(n.days||{}).reduce((s,l)=>s+Object.keys(l).length,0);return`<div class="item"><div class="text"><div>${r(n.name)}${t.mealWeeks[e]===n.id?' <span class="tag ent">questa settimana</span>':""}</div>
          <div class="hint">${o} con giorno fisso · ${(n.pool||[]).length} senza giorno</div></div>
          <button class="icon-btn" data-action="preset-edit" data-id="${n.id}" aria-label="Modifica ${r(n.name)}">${A("edit",16)}</button>
          <button class="icon-btn" data-action="preset-del" data-id="${n.id}" aria-label="Elimina ${r(n.name)}">${A("trash",16)}</button></div>`}).join("")}</div>`:'<div class="empty">Ad esempio "Settimana 1" e "Settimana 2" da alternare: piatti con il giorno fisso e piatti da sistemare nelle sere libere.</div>'}
      <button class="btn small wrap self-start" data-action="preset-from-week">Salva questo menù come settimana tipo</button>
    </section>`}function Pl(t,e){const a=ws(t,e),i=!!t.settings.mealLunch;return`
    <div class="row meal-tools">
      <button class="btn small" data-action="meal-propose">Proponi la settimana</button>
      <button class="btn small" data-action="meal-copy">Copia la settimana scorsa</button>
      ${t.mealPresets.length?`<span class="row nowrap gap-sm"><label class="sr-only" for="preset-pick">Settimana tipo</label>
        <select class="input slim" id="preset-pick">${t.mealPresets.map(n=>`<option value="${n.id}" ${a&&a.id===n.id?"selected":""}>${r(n.name)}</option>`).join("")}</select>
        <button class="btn small" data-action="preset-apply">Applica</button></span>`:""}
      <button class="btn small danger" data-action="meal-clear">Svuota</button>
      <label class="check small push"><input type="checkbox" data-change="meal-lunch" ${i?"checked":""}>Proponi anche i pranzi</label>
    </div>
    <div class="hint">Riempie solo le caselle vuote da oggi in poi: quello che hai già scritto resta.</div>`}function Ll(){const t=d.data,{mon:e,sun:a}=yt(),i=d.ui.mealWeek||0,n=d.ui.dishEdit?t.dishes.find(s=>s.id===d.ui.dishEdit):null,o=[...t.dishes].sort((s,l)=>s.name.localeCompare(l.name,"it"));return`
    ${G((i===0?"Questa settimana":i===1?"La prossima settimana":`Settimana del ${z(e)}`)+(t.mealPresets.find(s=>s.id===t.mealWeeks[e])?" · "+t.mealPresets.find(s=>s.id===t.mealWeeks[e]).name:""),"Pasti",`
      <button class="icon-btn" data-action="meal-week" data-n="-1" aria-label="Settimana precedente">${A("left")}</button>
      ${i?'<button class="btn" data-action="meal-week" data-n="0">Questa settimana</button>':""}
      <button class="icon-btn" data-action="meal-week" data-n="1" aria-label="Settimana successiva">${A("right")}</button>`)}
    ${d.ui.mealCheck?ql(t,e,a):""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
      <section class="card" aria-labelledby="h-menu">
        <div class="card-head"><h2 id="h-menu">Menù</h2>${a>=k()?`<button class="btn small" data-action="meal-check">${A("cart",14)}Cosa manca per questa settimana</button>`:""}</div>
        ${a>=k()?Pl(t,e):""}
        ${zl(t,e)}
        <div class="hint">Scrivi un piatto salvato (te li suggerisce mentre scrivi) oppure qualsiasi cosa: "fuori", "avanzi", "pizza".</div>
      </section>
      ${jl(t)}
      </div>
      <div class="grow-1 stack stack-lg">
        ${Dl(t,e)}
        ${Tl(t,e)}
        ${Ml(n,d.ui.dishPrefill)}
        <section class="card" aria-labelledby="h-dishes">
          <div class="card-head"><h2 id="h-dishes">I miei piatti</h2><span class="sub">${o.length}</span></div>
          ${ke(t).length?`<div class="row prep-fill"><button class="btn small" data-action="prep-fill">Completa le preparazioni (${ke(t).length})</button><span class="hint">Passaggi, tempi e "da fare prima" proposti: poi li modifichi come vuoi.</span></div>`:""}
          ${o.length?`<div class="list">${o.map(s=>`
            <div class="item"><div class="text"><div>${r(s.name)} ${s.when==="pranzo"?'<span class="tag">pranzo</span>':s.when==="cena"?'<span class="tag">cena</span>':""}${s.auto===!1?' <span class="tag">non proposto</span>':""}</div><div class="row gap-sm">${ji(s).map(l=>`<span class="tag ${Array.isArray(s.cats)?"inv":""}">${bt[l].label}</span>`).join("")||'<span class="hint">nessun gruppo</span>'}${Array.isArray(s.cats)?"":' <span class="hint">(stimato)</span>'}</div><div class="hint">${r(s.ingredients.join(", ")||"nessun ingrediente")}</div><div class="hint">${Array.isArray(s.steps)&&s.steps.length?`${s.steps.length} ${s.steps.length===1?"passaggio":"passaggi"}`:"nessuna preparazione"}${s.minutes?` · ${s.minutes} min`:""}${s.ahead?" · da fare prima":""}</div></div>
              <button class="icon-btn" data-action="dish-edit" data-id="${s.id}" aria-label="Modifica ${r(s.name)}">${A("edit",16)}</button>
              <button class="icon-btn" data-action="dish-del" data-id="${s.id}" aria-label="Elimina ${r(s.name)}">${A("trash",16)}</button></div>`).join("")}</div>`:'<div class="empty">Salva i piatti che cucini spesso con i loro ingredienti.</div>'}
        </section>
      </div>
    </div>`}F("pasti",{render:Ll,changes:{"prep-step"(t){const e=t.dataset.key;d.ui.prepDone=Object.assign({},d.ui.prepDone,{[e]:t.checked})},"meal-lunch"(t){f(e=>{e.settings.mealLunch=t.checked})},"meal-set"(t){const e=t.dataset.date,a=t.dataset.slot,i=t.value.trim(),n=i&&re(d.data,i),o=d.data;{const s=Object.assign({},o.mealPlan[e]);i?s[a]=n?n.name:i:delete s[a],delete s.updatedAt,Object.keys(s).length?o.mealPlan[e]=Object.assign(s,{updatedAt:$s()}):delete o.mealPlan[e]}n&&t.value!==n.name&&(t.value=n.name),ys()}},actions:{"meal-week"(t){const e=Number(t.dataset.n);d.ui.mealWeek=e===0?0:(d.ui.mealWeek||0)+e,d.ui.mealCheck=!1,h("pasti")},"prep-fill"(){const t=ke(d.data).length;!t||!window.confirm(`Aggiungere la preparazione proposta a ${t} ${t===1?"piatto":"piatti"}? Tocca solo quelli che non ne hanno.`)||(f(e=>{for(const a of ke(e)){const i=Sn(a);a.steps=[...i.steps],a.minutes||(a.minutes=i.minutes),!a.ahead&&i.ahead&&(a.ahead=i.ahead),N(a)}}),h("pasti",{},`Preparazione aggiunta a ${t} ${t===1?"piatto":"piatti"}`))},"prep-day"(t){d.ui.prepDay=Number(t.dataset.n)===1?1:0,h("pasti")},"meal-check"(){d.ui.mealCheck=!0,h("pasti")},"meal-propose"(){const{mon:t}=yt();if(!d.data.dishes.some(a=>a.auto!==!1)){h("pasti",{},'Salva prima qualche piatto in "I miei piatti"');return}let e=0;f(a=>{e=fs(a,t,{lunch:!!a.settings.mealLunch})}),h("pasti",{},e?`Proposti ${e} pasti: cambia quello che non ti va`:"Non ci sono caselle libere da riempire")},"meal-copy"(){const{mon:t}=yt();let e=0;f(a=>{e=hs(a,t)}),h("pasti",{},e?`Copiati ${e} pasti dalla settimana scorsa`:"Niente da copiare (settimana scorsa vuota o caselle già piene)")},"preset-apply"(){const{mon:t}=yt(),e=document.getElementById("preset-pick")?.value,a=d.data.mealPresets.find(n=>n.id===e);if(!a)return;let i=0;f(n=>{i=vs(n,t,a,{lunch:!!n.settings.mealLunch})}),h("pasti",{},`${a.name}: ${i} pasti messi nel menù`)},"meal-clear"(){if(!window.confirm("Svuotare il menù da oggi a domenica?"))return;const{mon:t}=yt();f(e=>bs(e,t)),h("pasti",{},"Menù svuotato")},"preset-new"(){d.ui.presetEdit="new",h("pasti"),O("#preset-name")},"preset-edit"(t){d.ui.presetEdit=t.dataset.id,h("pasti"),O("#preset-name")},"preset-cancel"(){d.ui.presetEdit=null,h("pasti")},"preset-del"(t){const e=d.data.mealPresets.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? Il menù già fatto non viene toccato.`)||f(a=>{a.mealPresets=a.mealPresets.filter(i=>i.id!==e.id),Q(a,e.id)})},"preset-from-week"(){const{mon:t}=yt(),e=gs(d.data,t,`Settimana ${d.data.mealPresets.length+1}`);if(!Object.keys(e.days).length){h("pasti",{},"Il menù di questa settimana è vuoto");return}f(a=>{a.mealPresets.push(e),a.mealWeeks[t]=e.id}),d.ui.presetEdit=e.id,h("pasti",{},`Salvata come «${e.name}»: dagli un nome e sposta i piatti "senza giorno" se vuoi`),O("#preset-name")},"targets-edit"(){d.ui.targetsEdit=!0,h("pasti")},"targets-cancel"(){d.ui.targetsEdit=!1,h("pasti")},"targets-reset"(){f(t=>{delete t.settings.mealTargets}),d.ui.targetsEdit=!1,h("pasti",{},"Obiettivi riportati alle linee guida")},"meal-check-close"(){d.ui.mealCheck=!1,h("pasti")},"dish-from"(t){d.ui.dishEdit=null,d.ui.dishPrefill=t.dataset.name,h("pasti"),O("textarea[name=ingredients]")},"dish-edit"(t){d.ui.dishEdit=t.dataset.id,d.ui.dishPrefill="",h("pasti"),O("#dish-name")},"dish-cancel"(){d.ui.dishEdit=null,h("pasti")},"dish-del"(t){const e=d.data.dishes.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare il piatto «${e.name}»? Il menù non viene toccato.`)||f(a=>{a.dishes=a.dishes.filter(i=>i.id!==e.id),Q(a,e.id)})}},forms:{"preset-save"(t){const e=String(t.get("name")||"").trim();if(!e)return E("Dai un nome alla settimana tipo."),x();const a=s=>{const l=String(s||"").trim(),c=l&&re(d.data,l);return c?c.name:l},i={};for(let s=0;s<7;s++){const l={};for(const[c]of we){const u=a(t.get(`d${s}-${c}`));u&&(l[c]=u)}Object.keys(l).length&&(i[s]=l)}const n=Wa(t.get("pool")).map(a),o=t.get("id");f(s=>{if(o){const l=s.mealPresets.find(c=>c.id===o);Object.assign(l,{name:e,days:i,pool:n}),N(l)}else s.mealPresets.push(ms({name:e,days:i,pool:n}))}),d.ui.presetEdit=null,h("pasti",{},`${e} salvata`)},"meal-targets-save"(t){const e=i=>{const n=String(i??"").trim();if(!n)return null;const o=Math.round(Number(n));return Number.isFinite(o)&&o>=0?o:null},a={};for(const i of Kt){const n=e(t.get(`min-${i}`)),o=e(t.get(`max-${i}`));if(n!=null&&o!=null&&n>o)return E(`${bt[i].label}: il minimo è più alto del massimo.`),x();a[i]={min:n,max:o}}f(i=>{i.settings.mealTargets=a}),d.ui.targetsEdit=!1,h("pasti",{},"Obiettivi salvati")},"dish-save"(t){const e=String(t.get("name")||"").trim();if(!e)return E("Scrivi il nome del piatto."),x();const a=t.get("id"),i=re(d.data,e);if(i&&i.id!==a)return E(`Hai già un piatto chiamato «${i.name}».`),x();const n=Math.round(Number(String(t.get("minutes")||"").trim())),o={name:e,ingredients:Wa(t.get("ingredients")),note:String(t.get("note")||"").trim(),when:t.get("when")||"entrambi",auto:t.get("noauto")!=="on",steps:Il(t.get("steps")),ahead:String(t.get("ahead")||"").trim(),minutes:Number.isFinite(n)&&n>0?n:null},s=t.getAll("cat").filter(l=>l in bt);s.length&&(o.cats=s),f(l=>{if(a){const c=l.dishes.find(u=>u.id===a);o.cats||delete c.cats,Object.assign(c,o),N(c)}else l.dishes.push(ps(o))}),d.ui.dishEdit=null,d.ui.dishPrefill="",h("pasti",{},a?"Piatto aggiornato":`${e} salvato`)},"meal-to-shop"(t){const{mon:e,sun:a}=yt(),i=e>k()?e:k(),n=Ei(d.data,i,a),o=t.getAll("ing").map(Number).map(s=>n[s]).filter(Boolean);if(!o.length)return T("Non hai spuntato niente"),x();f(s=>{for(const l of o)l.item?(l.item.need=!0,l.item.boughtAt=null,N(l.item)):s.shopping.push(Mt({name:l.name,need:!0}))}),d.ui.mealCheck=!1,h("pasti",{},`${o.length} ${o.length===1?"cosa messa":"cose messe"} nella spesa`)}}});const Ka={pag:"Pagamenti",ent:"Entrate",inv:"Investimenti",gir:"Giroconti",obj:"Obiettivi",scad:"Scadenze",comp:"Compleanni",att:"Attività",fac:"Faccende",hab:"Abitudini"},Rl={out:"pag",in:"ent",pac:"inv",transfer:"gir",goal:"obj"};function Xa(t,e,a){const i=[];for(const o of Se()?[]:t.recurring)if(!o.paused)for(const s of ba(o,e,a)){const l=o.done?.[s];i.push({date:s,cls:Rl[o.type]||"pag",text:o.name,amount:ae(o),rec:o,done:l===!0,skipped:l==="skip"})}for(const o of t.todos)o.due&&o.due>=e&&o.due<=a&&i.push({date:o.due,cls:"att",text:o.text,todo:o,done:o.done});for(const o of t.deadlines)!o.archived&&o.due>=e&&o.due<=a&&i.push({date:o.due,cls:"scad",text:"Scade: "+o.name,amount:o.cost?v(o.cost):""});for(const o of ze(t,e,a))i.push({date:o.date,cls:"comp",text:"Compleanno di "+o.contact.name+(o.age?` (${o.age})`:""),contact:o.contact});const n=k();for(const o of t.chores){o.lastDone&&o.lastDone>=e&&o.lastDone<=a&&i.push({date:o.lastDone,cls:"fac",text:o.name,chore:o,done:!0});const s=Math.max(1,Number(o.every)||7);let l=Qt(o);const c=l<n;c&&(l=n),l<e&&(l=P(l,Math.ceil(Ce(l,e)/s)*s));for(let u=l;u<=a;u=P(u,s))i.push({date:u,cls:"fac",text:o.name,chore:o,late:c&&u===n})}return i}function Za(t,e){return t.habits.filter(a=>gt(t,a,e)||!a.archived&&(a.createdAt||"").slice(0,10)<=e)}const Fl=t=>t>=7?"ogni giorno":t===1?"1 volta a settimana":`${t} volte a settimana`;function Bl(){const t=d.data,e=d.ui.calMonth||ut(new Date),a=d.ui.calSel||k(),i=d.ui.calOff||{},[n,o]=e.split("-").map(Number),s=Ss(e),l=(new Date(n,o-1,1).getDay()+6)%7,u=Xa(t,`${e}-01`,`${e}-${String(s).padStart(2,"0")}`).filter(S=>!i[S.cls]),p=k(),b=[];for(let S=0;S<l;S++)b.push(null);for(let S=1;S<=s;S++)b.push(`${e}-${String(S).padStart(2,"0")}`);for(;b.length%7;)b.push(null);const m=S=>{if(!S)return'<div class="cal-cell empty" aria-hidden="true"></div>';const _=u.filter(X=>X.date===S),I=Number(S.slice(8)),M=!i.hab&&S<=p?Za(t,S):[],B=M.filter(X=>gt(t,X,S)).length,ht=M.length?`<span class="badge hab ${B===M.length?"done":""}">${B===M.length?"✓ ":""}Abitudini ${B}/${M.length}</span>`:"";return`
      <button class="cal-cell ${S===a?"sel":""}" data-action="cal-pick" data-date="${S}" aria-pressed="${S===a}" aria-label="${r(Gt(S))}${_.length?", "+_.length+" eventi":""}${M.length?`, abitudini ${B} su ${M.length}`:""}">
        <span class="cal-num ${S===p?"today":""}">${I}</span>
        ${_.slice(0,3).map(X=>`<span class="badge ${X.cls} ${X.done||X.skipped?"done":""}">${X.done?"✓ ":""}${r(X.text)}</span>`).join("")}
        ${_.length>3?`<span class="hint">+${_.length-3} altri</span>`:""}
        ${ht}
      </button>`},y=Xa(t,a,a).filter(S=>!i[S.cls]).map(S=>S.rec&&!S.done&&!S.skipped&&S.date<=p?fa({r:S.rec,date:S.date}):S.todo?Zt(S.todo):S.chore&&!S.done&&S.date===p?je(S.chore,{tools:!1}):S.chore?`<div class="item ${S.done?"done":""}"><span class="dot-cat fac" aria-hidden="true"></span><div class="text"><div>${r(S.text)}</div><div class="hint">Faccenda · ${S.done?"fatta":"prevista"}</div></div></div>`:`<div class="item"><span class="dot-cat ${S.cls}" aria-hidden="true"></span><div class="text"><div>${r(S.text)}</div><div class="hint">${r(Ka[S.cls])}${S.done?" · registrato":S.skipped?" · saltato":""}</div></div>${S.amount?`<span class="money">${S.amount}</span>`:""}</div>`).join(""),q=i.hab?[]:Za(t,a),D=st(a),g=q.map(S=>{const _=gt(t,S,a);return`
      <div class="item ${_?"done":""}">
        <button class="box ${_?"on":""}" data-action="hab-toggle" data-id="${S.id}" data-date="${a}" aria-pressed="${_}" aria-label="${_?"Togli la spunta":"Fatta"}: ${r(S.name)}, ${r(Gt(a))}">${_?A("check",14,3):""}</button>
        <div class="text"><div>${r(S.name)}</div><div class="hint">${r(Fl(S.perWeek))} · settimana ${xt(t,S,D)}/${S.perWeek}</div></div>
      </div>`}).join(""),$=i.hab||!t.habits.some(S=>!S.archived)?"":`
        <section class="card" aria-labelledby="h-calhab">
          <div class="card-head"><h2 id="h-calhab" class="h3">Abitudini</h2>${q.length&&a<=p?`<span class="sub">${q.filter(S=>gt(t,S,a)).length} di ${q.length}</span>`:""}</div>
          ${a>p?'<div class="hint">Le abitudini si spuntano dal giorno stesso in poi.</div>':g?`<div class="list">${g}</div>`:'<div class="empty">Nessuna abitudine in quel giorno.</div>'}
        </section>`,C=d.ui.calAddKind||"att";return`
    ${G("Calendario",Z(e),`
      <button class="icon-btn" data-action="cal-month" data-n="-1" aria-label="Mese precedente">${A("left")}</button>
      <button class="btn" data-action="cal-month" data-n="0">Oggi</button>
      <button class="icon-btn" data-action="cal-month" data-n="1" aria-label="Mese successivo">${A("right")}</button>`)}
    <div class="row" role="group" aria-label="Filtri">
      ${Object.entries(Ka).map(([S,_])=>`<button class="chip ${i[S]?"off":""}" data-action="cal-filter" data-k="${S}" aria-pressed="${!i[S]}"><span class="dot-cat ${S}" aria-hidden="true"></span>${_}</button>`).join("")}
    </div>
    <div class="split">
      <section class="grow-3 cal-wrap" aria-label="Mese">
        <div class="cal">
          ${["Lun","Mar","Mer","Gio","Ven","Sab","Dom"].map(S=>`<div class="cal-head" aria-hidden="true">${S}</div>`).join("")}
          ${b.map(m).join("")}
        </div>
      </section>
      <aside class="grow-1 stack">
        <section class="card">
          <h2>${r(Gt(a))}</h2>
          ${y?`<div class="list">${y}</div>`:'<div class="empty">Niente in programma.</div>'}
        </section>
        ${$}
        <form class="card stack" data-form="cal-add">
          <h2 class="h3">Aggiungi a questo giorno</h2>
          <input type="hidden" name="date" value="${a}">
          <div class="pills small">
            ${[["att","Attività"],["comp","Compleanno"],["pag","Pagamento"]].map(([S,_])=>`<label class="pill"><input type="radio" name="kind" value="${S}" data-change="cal-kind" ${C===S?"checked":""}><span>${_}</span></label>`).join("")}
          </div>
          <label class="field">${C==="comp"?"Nome":"Cosa"}<input class="input" name="text" placeholder="${C==="comp"?"Luca":C==="pag"?"Bollo auto":"Ritirare il pacco"}" required></label>
          ${C==="pag"?`
            <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="0,00" required></label>
            <label class="field">Conto<select class="input" name="accountId">${at()}</select></label>
            <label class="field">Categoria<select class="input" name="category">${Lt("out","Altro")}</select></label>`:""}
          ${C==="comp"?'<label class="field">Anno di nascita (facoltativo)<input class="input" name="year" inputmode="numeric" maxlength="4" placeholder="1990"></label><div class="hint">Si ripete ogni anno e finisce anche in Rubrica.</div>':""}
          <button class="btn primary" type="submit">Aggiungi</button>
        </form>
      </aside>
    </div>`}F("calendario",{render:Bl,actions:{"cal-month"(t){const e=Number(t.dataset.n),a=d.ui.calMonth||ut(new Date);d.ui.calMonth=e===0?ut(new Date):Di(a,e),d.ui.calSel=e===0?k():`${d.ui.calMonth}-01`,h("calendario")},"cal-pick"(t){d.ui.calSel=t.dataset.date,h("calendario")},"cal-filter"(t){d.ui.calOff=Object.assign({},d.ui.calOff,{[t.dataset.k]:!(d.ui.calOff||{})[t.dataset.k]}),h("calendario")}},changes:{"cal-kind"(t){d.ui.calAddKind=t.value,h("calendario")}},forms:{"cal-add"(t,e){const a=t.get("kind"),i=String(t.get("text")||"").trim(),n=t.get("date");if(!i)return;if(a==="att")return f(s=>s.todos.push(Jt({text:i,due:n}))),h("calendario",{},"Attività aggiunta");if(a==="comp"){const s=String(t.get("year")||"").trim();if(s&&!/^\d{4}$/.test(s)){et(e,"year","Scrivi l'anno con 4 cifre");return}const l=(s||"")+(s?n.slice(4):n.slice(5));return f(c=>{const u=c.contacts.find(p=>p.name.toLowerCase()===i.toLowerCase());u?u.birthday=l:c.contacts.push({id:W(),name:i,phone:"",email:"",note:"",birthday:l})}),h("calendario",{},"Compleanno aggiunto")}const o=U(t.get("amount"));if(!(o>0)){et(e,"amount","Inserisci un importo valido");return}f(s=>s.recurring.push({id:W(),name:i,type:"out",amount:o,freq:"once",date:n,day:Number(n.slice(8)),accountId:t.get("accountId")||K(s)?.id,category:t.get("category")||"Altro",sub:!1,paused:!1,done:{},history:[],startDate:n})),h("calendario",{},"Pagamento aggiunto: comparirà da confermare quando arriva il giorno")}}});function Vl(){const t=d.data,e=d.month,a=d.ui.finAccount||"",i=be(t,e,a||void 0),n=hi(t),o=e===ut(new Date),s=vt(t),l=qi(t),c=zi(t,30),u=p=>{const b=be(t,e,p.id).tx.reduce((m,w)=>m+(w.type==="in"?w.amount:-w.amount),0);return`
      <button class="acc-card" data-action="edit-account" data-id="${p.id}" style="--acc:${r(p.color)}" aria-label="Modifica ${r(p.name)}">
        <div class="row nowrap"><span class="acc-dot" aria-hidden="true"></span><strong>${r(p.name)}</strong><span class="hint push">${r(p.bank||Ni[p.type]||"")}</span></div>
        <div class="acc-balance">${v(te(t,p))}</div>
        ${_i(t,p)}
        <div class="hint">${r(Z(e).split(" ")[0])}: ${ct(Math.round(b*100)/100)}${p.main?" · principale":""}${p.last4?" · •••• "+r(p.last4):""}</div>
      </button>`};return`
    ${G("Finanze",Z(e),`
      <button class="icon-btn" data-action="fin-month" data-n="-1" aria-label="Mese precedente">${A("left")}</button>
      ${o?"":'<button class="btn" data-action="fin-month" data-n="0">Mese corrente</button>'}
      <button class="icon-btn" data-action="fin-month" data-n="1" aria-label="Mese successivo">${A("right")}</button>
      <button class="btn" data-action="nav" data-id="importa">Importa estratto conto</button>
      <button class="btn primary" data-action="new-account">Nuovo conto</button>`)}

    <section class="acc-grid" aria-label="Conti">
      ${s.map(u).join("")}
      <button class="acc-card add" data-action="new-account">${A("plus")} Aggiungi un conto</button>
    </section>

    <section class="metrics" aria-label="Riepilogo">
      ${j("Patrimonio totale",v(As(t)),"",l.priced?"conti + investimenti":"somma dei conti")}
      ${j("Entrate",v(i.inc),"good")}
      ${j("Uscite",v(i.out),"","esclusi giroconti e investimenti")}
      ${j("Messo da parte",v(i.transfersOut),"accent","netto dal conto principale ad altri conti")}
      ${j("Spese fisse al mese",v(n.fixed),"",[n.pac?"+ PAC "+v(n.pac):"",n.goals?"+ obiettivi "+v(n.goals):""].filter(Boolean).join(" · "))}
    </section>

    <section class="card">
      <h2>Nuovo movimento</h2>
      <form data-form="add-tx" class="row">
        <label class="sr-only" for="tx-type">Tipo</label>
        <select class="input" id="tx-type" name="type" data-change="tx-type">
          <option value="out">Uscita</option><option value="in">Entrata</option><option value="transfer">Giroconto</option>
        </select>
        <label class="sr-only" for="tx-amount">Importo</label>
        <input class="input amount" id="tx-amount" name="amount" inputmode="decimal" placeholder="0,00 €" required>
        <label class="sr-only" for="tx-acc">Conto</label>
        <select class="input" id="tx-acc" name="accountId">${at()}</select>
        <label class="sr-only" for="tx-to">Verso il conto</label>
        <select class="input" id="tx-to" name="toAccountId" data-transfer hidden>${at(s.find(p=>!p.main)?.id)}</select>
        <label class="sr-only" for="tx-cat">Categoria</label>
        <select class="input" id="tx-cat" name="category" data-cats>${Lt("out")}</select>
        <label class="sr-only" for="tx-note">Nota</label>
        <input class="input grow" id="tx-note" name="note" placeholder="Nota (es. supermercato)">
        <label class="sr-only" for="tx-date">Data</label>
        <input class="input date" id="tx-date" type="date" name="date" value="${k()}">
        <button class="btn primary" type="submit">Registra</button>
      </form>
    </section>

    <div class="grid">
      <section class="card">
        <div class="card-head"><h2>Spese per categoria</h2>
          <label class="sr-only" for="fin-acc">Conto</label>
          <select class="input slim" id="fin-acc" data-change="fin-account"><option value="">Tutti i conti</option>${s.map(p=>`<option value="${p.id}" ${p.id===a?"selected":""}>${r(p.name)}</option>`).join("")}</select>
        </div>
        ${d.ui.budgetEdit?Ul(t):`<div class="stack-sm">${Ri(i.cats,i.out,t.settings.catBudgets)}</div>
        <button class="link" data-action="budget-edit">${Object.keys(t.settings.catBudgets||{}).length?"Modifica i limiti":"Imposta un limite mensile per categoria"}</button>`}
      </section>

      <section class="card">
        <div class="card-head"><h2>Prossimi 30 giorni</h2><button class="link" data-action="nav" data-id="programmati">Programmati</button></div>
        ${c.length?`<div class="list">${c.slice(0,10).map(p=>`
          <div class="item"><div class="when">${r(z(p.date))}</div>${ha(p.r.type)}<div class="text">${r(p.r.name)}</div><span class="money ${p.r.type==="in"?"in":""}">${ae(p.r)}</span></div>`).join("")}</div>`:'<div class="empty">Nessun programmato. Aggiungili da Programmati o importando un estratto conto.</div>'}
        ${n.income?`<div class="note-box">Dopo spese fisse e PAC, dalle entrate fisse restano <strong>${v(n.left)}</strong> al mese per le spese variabili.</div>`:""}
      </section>
    </div>

    <section class="card">
      <div class="card-head"><h2>Movimenti</h2><span class="sub">${i.tx.length} nel mese</span></div>
      ${i.tx.length?`<div class="list">${i.tx.slice(0,d.ui.finShowAll?1e3:25).map(p=>Fi(p,{showAccount:!a&&s.length>1,del:!0})).join("")}</div>
        ${i.tx.length>25&&!d.ui.finShowAll?`<button class="link" data-action="fin-all">Mostra tutti (${i.tx.length})</button>`:""}`:'<div class="empty">Nessun movimento in questo mese.</div>'}
    </section>`}function Ul(t){const e=t.settings.catBudgets||{};return`
    <form data-form="budget-save" class="stack-sm">
      <div class="hint">Limite di spesa al mese per categoria. Lascia vuoto per non averne. La barra diventa gialla all'80% e rossa oltre il limite.</div>
      <div class="form-grid two">${t.categories.out.map(a=>`<label class="field">${r(a)}<input class="input slim" name="b:${r(a)}" inputmode="decimal" value="${e[a]?r(String(e[a]).replace(".",",")):""}" placeholder="—"></label>`).join("")}</div>
      <div class="row"><button class="btn primary" type="submit">Salva i limiti</button><button class="btn" type="button" data-action="budget-cancel">Annulla</button></div>
    </form>`}F("finanze",{render:Vl,actions:{"fin-month"(t){const e=Number(t.dataset.n);d.month=e===0?ut(new Date):Di(d.month,e),d.ui.finShowAll=!1,h("finanze")},"fin-all"(){d.ui.finShowAll=!0,h("finanze")},"budget-edit"(){d.ui.budgetEdit=!0,h("finanze")},"budget-cancel"(){d.ui.budgetEdit=!1,h("finanze")},"new-account"(){h("conto",{id:null})},"edit-account"(t){h("conto",{id:t.dataset.id})}},changes:{"tx-type"(t){const e=t.form,a=t.value==="transfer";e.querySelector("[data-transfer]").hidden=!a;const i=e.querySelector("select[data-cats]");i.hidden=a,a||(i.innerHTML=Lt(t.value))},"fin-account"(t){d.ui.finAccount=t.value,h("finanze")}},forms:{"budget-save"(t,e){const a={};for(const[i,n]of t.entries()){if(!i.startsWith("b:")||!String(n).trim())continue;const o=U(n);if(!(o>0)){et(e,i,"Scrivi un importo, es. 120");return}a[i.slice(2)]=o}d.ui.budgetEdit=!1,f(i=>{i.settings.catBudgets=a}),h("finanze",{},"Limiti salvati")},"add-tx"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 12,50");return}const i=t.get("type"),n=t.get("accountId")||K(d.data)?.id,o=t.get("date")||k(),s=String(t.get("note")||"").trim(),l=new Date().toISOString();if(i==="transfer"){const c=t.get("toAccountId");if(!c||c===n){et(e,"toAccountId","Scegli un conto diverso");return}const u=W();T("Giroconto registrato"),f(p=>{p.transactions.push({id:W(),accountId:n,date:o,type:"out",amount:a,category:"Giroconto",note:s||"Giroconto",transfer:!0,invest:!1,pairId:u,createdAt:l}),p.transactions.push({id:W(),accountId:c,date:o,type:"in",amount:a,category:"Giroconto",note:s||"Giroconto",transfer:!0,invest:!1,pairId:u,createdAt:l})});return}T("Movimento registrato"),f(c=>c.transactions.push({id:W(),accountId:n,date:o,type:i,amount:a,category:String(t.get("category")||"Altro"),note:s,transfer:!1,invest:!1,createdAt:l}))}}});function _l(){const t=d.data,e=d.params.id?t.accounts.find(o=>o.id===d.params.id):null,a=e||va({type:"deposito",color:de[t.accounts.length%de.length],main:t.accounts.length===0}),i=e?te(t,e):0,n=e?t.transactions.filter(o=>o.accountId===e.id).length:0;return`
    ${G("Finanze",e?"Modifica conto":"Nuovo conto")}
    <button class="link" data-action="nav" data-id="finanze">← Torna a Finanze</button>
    <form data-form="save-account" class="card stack-lg">
      <input type="hidden" name="id" value="${e?e.id:""}">
      <fieldset class="plain">
        <legend class="label">Tipo di conto</legend>
        <div class="pills">
          ${Object.entries(Ni).map(([o,s])=>`<label class="pill"><input type="radio" name="type" value="${o}" ${a.type===o?"checked":""}><span>${r(s)}</span></label>`).join("")}
        </div>
      </fieldset>
      <div class="form-grid">
        <label class="field">Nome del conto<input class="input" name="name" value="${r(e?e.name:"")}" placeholder="Conto deposito" required></label>
        <label class="field">Banca o istituto<input class="input" name="bank" value="${r(a.bank)}" placeholder="Nome della banca"></label>
        <label class="field">${e?"Saldo attuale (€)":"Saldo di oggi (€)"}<input class="input" name="balance" inputmode="decimal" value="${e?r(String(i).replace(".",",")):""}" placeholder="0,00"></label>
        <label class="field">Ultime 4 cifre IBAN (facoltativo)<input class="input" name="last4" maxlength="4" inputmode="numeric" value="${r(a.last4)}" placeholder="1234"></label>
      </div>
      <fieldset class="plain">
        <legend class="label">Colore</legend>
        <div class="swatches">
          ${de.map((o,s)=>`<label class="swatch" style="--c:${o}"><input type="radio" name="color" value="${o}" ${a.color===o?"checked":""}><span class="sr-only">Colore ${s+1}</span></label>`).join("")}
        </div>
      </fieldset>
      <div class="stack-sm divider-top">
        <label class="check"><input type="checkbox" name="main" ${a.main?"checked":""}><span>Conto principale per le spese<br><span class="hint">Le spese rapide dalla schermata Oggi finiscono qui.</span></span></label>
        <label class="check"><input type="checkbox" name="includeTotal" ${a.includeTotal?"checked":""}><span>Includi nel patrimonio totale</span></label>
        <label class="check"><input type="checkbox" name="investments" ${a.investments?"checked":""}><span>Su questo conto tengo anche investimenti</span></label>
      </div>
      ${e?`<div class="hint">Cambiando il saldo, da oggi il conto riparte da quel valore. I movimenti passati restano per le statistiche. Il conto ha ${n} movimenti.</div>`:'<div class="hint">Il saldo poi si aggiorna da solo con i movimenti e gli estratti conto importati.</div>'}
      <div class="row">
        <button class="btn primary" type="submit">${e?"Salva modifiche":"Crea conto"}</button>
        <button class="btn" type="button" data-action="nav" data-id="finanze">Annulla</button>
        ${e?`<button class="btn danger push" type="button" data-action="archive-account" data-id="${e.id}">${n?"Archivia conto":"Elimina conto"}</button>`:""}
      </div>
    </form>`}F("conto",{render:_l,forms:{"save-account"(t,e){const a=String(t.get("name")||"").trim();if(!a)return E("Dai un nome al conto."),x();const i=String(t.get("balance")||"").trim(),n=i?U(i):0;if(!Number.isFinite(n))return E("Il saldo deve essere un numero, es. 1.250,00"),x();const o=String(t.get("last4")||"").trim();if(o&&!/^\d{4}$/.test(o))return E("Le ultime cifre dell'IBAN devono essere 4 numeri."),x();const s=t.get("id"),l={name:a,bank:String(t.get("bank")||"").trim(),type:t.get("type")||"corrente",color:t.get("color")||de[0],last4:o,main:t.get("main")==="on",includeTotal:t.get("includeTotal")==="on",investments:t.get("investments")==="on"};f(c=>{let u;if(s){u=c.accounts.find(b=>b.id===s);const p=te(c,u);Object.assign(u,l),i&&Math.abs(p-n)>.004&&(u.anchorBalance=n,u.anchorDate=k())}else u=va(Object.assign(l,{anchorBalance:n,anchorDate:k()})),c.accounts.push(u);if(u.main)for(const p of c.accounts)p.id!==u.id&&(p.main=!1);c.accounts.some(p=>p.main&&!p.archived)||(u.main=!0)}),h("finanze",{},s?"Conto aggiornato":`Conto «${a}» creato`)}},actions:{"archive-account"(t){const e=d.data,a=e.accounts.find(n=>n.id===t.dataset.id);if(!a)return;const i=e.transactions.some(n=>n.accountId===a.id)||e.recurring.some(n=>n.accountId===a.id);window.confirm(i?`Archiviare «${a.name}»? I movimenti restano nelle statistiche, il conto sparisce dalle liste.`:`Eliminare «${a.name}»?`)&&(f(n=>{if(i?a.archived=!0:n.accounts=n.accounts.filter(o=>o.id!==a.id),a.main){a.main=!1;const o=n.accounts.find(s=>!s.archived);o&&(o.main=!0)}}),h("finanze",{},i?"Conto archiviato":"Conto eliminato"))}}});const Gl=[6,12,24],oe=t=>{const[e,a]=t.split("-").map(Number);return new Date(e,a-1,15).toLocaleDateString("it-IT",{month:"short"}).replace(".","")+(a===1?" "+String(e).slice(2):"")};function Wl(){const t=d.data,e=d.ui.trendRange||12,a=xs(t,e),i=a.filter(g=>!g.partial&&(g.inc||g.out)),n=i.length?H(i.reduce((g,$)=>g+$.saved,0)/i.length):0,o=i.reduce((g,$)=>g+$.inc,0),s=o>0?Math.round(i.reduce((g,$)=>g+$.saved,0)/o*100):null,l=i.length?i.reduce((g,$)=>$.saved>g.saved?$:g):null,c=a.find(g=>g.wealth!==0)||a[0],u=a[a.length-1],p=H(u.wealth-c.wealth),b=a.slice(-7),m=b.filter(g=>!g.partial&&(g.inc||g.out)),w=new Map;for(const g of b)for(const[$,C]of g.cats)w.set($,(w.get($)||0)+C);const y=[...w.entries()].sort((g,$)=>$[1]-g[1]).slice(0,10).map(([g])=>g),q=t.settings.catBudgets||{},D=(g,$)=>(g.cats.find(C=>C[0]===$)||[$,0])[1];return`
    ${G("Finanze","Andamento",Gl.map(g=>`<button class="chip ${g===e?"":"off"}" data-action="trend-range" data-n="${g}" aria-pressed="${g===e}">${g} mesi</button>`).join(""))}
    <section class="metrics">
      ${j("Patrimonio oggi",v(u.wealth),"",`${p>=0?"+":"−"} ${v(Math.abs(p))} in ${e} mesi`)}
      ${j("Risparmio medio al mese",i.length?ct(n):"—",n>=0?"good":"bad","entrate − uscite, mesi completi")}
      ${j("Quota risparmiata",s==null?"—":s+"%","","delle entrate")}
      ${j("Mese migliore",l?r(Z(l.key)):"—","",l?ct(l.saved):"")}
    </section>

    <section class="card">
      <div class="card-head"><h2>Patrimonio a fine mese</h2><span class="hint">conti + investimenti al prezzo pagato</span></div>
      ${ka(a.map(g=>({label:oe(g.key),value:g.wealth,title:Z(g.key)+(g.partial?" (in corso)":""),valueText:v(g.wealth),sub:`conti ${v(g.cash)} · investiti ${v(g.invested)}`})),{id:"wealth"})}
      <details class="table-toggle"><summary>Mostra i numeri</summary>
        <div class="table-wrap"><table class="tx small"><thead><tr><th>Mese</th><th class="r">Patrimonio</th><th class="r">Entrate</th><th class="r">Uscite</th><th class="r">Risparmio</th></tr></thead>
        <tbody>${[...a].reverse().map(g=>`<tr><td>${r(Z(g.key))}${g.partial?' <span class="hint">in corso</span>':""}</td><td class="r">${v(g.wealth)}</td><td class="r">${v(g.inc)}</td><td class="r">${v(g.out)}</td><td class="r">${ct(g.saved)}</td></tr>`).join("")}</tbody></table></div>
      </details>
    </section>

    <section class="card">
      <div class="card-head"><h2>Risparmio di ogni mese</h2><span class="hint">entrate − uscite, esclusi giroconti, investimenti e prestiti</span></div>
      ${un(a.map(g=>({label:oe(g.key),value:g.saved,partial:g.partial,title:Z(g.key)+(g.partial?" (in corso)":""),valueText:ct(g.saved),sub:`entrate ${v(g.inc)} · uscite ${v(g.out)}`})),{id:"saved"})}
    </section>

    <section class="card">
      <div class="card-head"><h2>Spese per categoria</h2><span class="hint">il mese in corso a confronto con la media dei mesi prima</span></div>
      ${y.length?`<div class="table-wrap"><table class="tx small">
        <thead><tr><th>Categoria</th>${m.map(g=>`<th class="r">${r(oe(g.key))}</th>`).join("")}<th class="r">Media</th><th class="r">${r(oe(u.key))}</th><th class="r">Limite</th></tr></thead>
        <tbody>${y.map(g=>{const $=m.length?H(m.reduce((I,M)=>I+D(M,g),0)/m.length):0,C=D(u,g),S=q[g],_=S?C>S:$>0&&C>$*1.25;return`<tr><td>${r(g)}</td>${m.map(I=>`<td class="r">${D(I,g)?v(D(I,g)):'<span class="hint">—</span>'}</td>`).join("")}
            <td class="r">${v($)}</td><td class="r">${_?`<span class="bad-text strong">${v(C)}</span>`:v(C)}</td><td class="r">${S?v(S):'<span class="hint">—</span>'}</td></tr>`}).join("")}</tbody></table></div>`:'<div class="empty">Nessuna spesa registrata in questo periodo.</div>'}
      <div class="hint">In rosso: oltre il limite, oppure (se non hai un limite) più di un quarto sopra la tua media. I limiti si impostano in Finanze → Spese per categoria.</div>
    </section>`}F("andamento",{render:Wl,afterRender:Sa,actions:{"trend-range"(t){d.ui.trendRange=Number(t.dataset.n),h("andamento")}}});const Ja=t=>Object.entries(Mi).map(([e,a])=>`<option value="${e}" ${e===t?"selected":""}>${r(a.label)}</option>`).join(""),Hl=t=>/veterin/i.test(`${t.note} ${t.description||""}`)?"veterinarie":"sanitarie",Ql={sanitarie:"Salute",veterinarie:"Salute",trasporti:"Trasporti",assicurazioni:"Altro",universita:"Altro",previdenza:"Altro",altro:"Altro"};function Yl(){const t=d.data,e=Number(k().slice(0,4)),a=d.ui.dedYear||e,i=Is(t,a),n=Cs(t,a),o=i.reduce((c,u)=>c+u.total,0),s=i.reduce((c,u)=>c+(u.estimate||0),0),l=t.deadlines.some(c=>!c.archived&&/730|dichiarazione dei redditi/i.test(c.name));return`
    ${G("Finanze","Detrazioni",[e-2,e-1,e].map(c=>`<button class="chip ${c===a?"":"off"}" data-action="ded-year" data-y="${c}" aria-pressed="${c===a}">${c}</button>`).join(""))}
    <p class="lead">Segna durante l'anno le spese che potrai detrarre: il 730 del ${a+1} riguarda le spese del ${a}. Le cifre sono una <strong>stima</strong> con le regole generali (19%, franchigie e limiti); per i conti veri fanno fede il precompilato dell'Agenzia delle Entrate o il CAF.</p>
    <section class="metrics">
      ${j(`Spese segnate nel ${a}`,v(o))}
      ${j("Detrazione stimata",v(s),"good","quanto potresti riavere in tasse")}
      ${j("Invio del 730",`30 set ${a+1}`,"","precompilato disponibile da fine aprile")}
    </section>

    ${n.length?`
    <section class="card attention" aria-labelledby="h-cand">
      <div class="card-head"><h2 id="h-cand">Da controllare</h2><span class="sub">movimenti che sembrano spese sanitarie</span></div>
      <div class="list">${n.slice(0,d.ui.dedAll?500:12).map(c=>`
        <form class="item" data-form="ded-mark">
          <input type="hidden" name="id" value="${c.id}">
          <div class="when">${r(z(c.date))}</div>
          <div class="text"><div>${r(c.note||c.category)}</div><div class="hint">${r(nt(t,c.accountId))}${c.description?" · "+r(c.description):""}</div></div>
          <span class="money">${v(c.amount)}</span>
          <label class="sr-only" for="dt-${c.id}">Tipo</label>
          <select class="input slim" id="dt-${c.id}" name="type">${Ja(Hl(c))}</select>
          <button class="btn small" type="submit">Detraibile</button>
          <button class="btn small" type="submit" name="no" value="1">No</button>
        </form>`).join("")}</div>
      ${n.length>12&&!d.ui.dedAll?`<button class="link" data-action="ded-all">Mostra tutti (${n.length})</button>`:""}
    </section>`:""}

    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${i.length?i.map(c=>`
          <section class="card" aria-label="${r(c.type.label)}">
            <div class="card-head"><h2>${r(c.type.label)}</h2><span class="money">${v(c.total)}${c.estimate!=null?` <span class="hint">→ detrazione ≈</span> <span class="good-text">${v(c.estimate)}</span>`:""}</span></div>
            <div class="hint">${r(c.type.hint)}</div>
            ${c.type.cap&&c.total>c.type.cap?`<div class="banner warn">Hai superato il limite di ${v(c.type.cap)}: la parte in più non conta.</div>`:""}
            ${c.type.franchigia&&c.total<=c.type.franchigia?`<div class="hint warn-text">Sotto i ${v(c.type.franchigia)} di franchigia per ora non c'è detrazione.</div>`:""}
            <div class="list tight">${c.list.map(u=>`
              <div class="item"><div class="when">${r(z(u.date))}</div>
                <div class="text"><div>${r(u.note||u.category)}</div><div class="hint">${r(nt(t,u.accountId))}</div></div>
                <span class="money">${v(u.amount)}</span>
                <button class="link" data-action="ded-unmark" data-id="${u.id}">Togli</button></div>`).join("")}</div>
          </section>`).join(""):`<section class="card"><div class="empty">Nessuna spesa segnata per il ${a}. Le spese della categoria Salute compaiono qui sopra da controllare; le altre aggiungile qui accanto.</div></section>`}
      </div>
      <div class="grow-1 stack stack-lg">
        <form class="card stack" data-form="ded-add" aria-labelledby="h-dedadd">
          <h2 id="h-dedadd">Aggiungi una spesa</h2>
          <div class="hint">Per spese non ancora registrate (es. pagate in contanti in farmacia). Viene registrata anche come uscita dal conto.</div>
          <label class="field">Tipo<select class="input" name="type">${Ja("sanitarie")}</select></label>
          <div class="form-grid two">
            <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="35,00" required></label>
            <label class="field">Data<input class="input" type="date" name="date" value="${a===e?k():`${a}-12-31`}"></label>
          </div>
          <label class="field">Descrizione<input class="input" name="note" placeholder="es. visita oculistica"></label>
          <label class="field">Conto<select class="input" name="accountId">${at(K(t)?.id)}</select></label>
          <button class="btn primary self-start" type="submit">Aggiungi</button>
        </form>
        <section class="card stack-sm">
          <h2>Cosa conservare</h2>
          <ul class="plain-list">
            <li>Fatture e ricevute di visite, esami, dentista, fisioterapia.</li>
            <li>Scontrini "parlanti" della farmacia, con il tuo codice fiscale.</li>
            <li>La prova del pagamento con carta o bonifico per le visite private (i contanti vanno bene solo per farmaci, dispositivi medici e strutture del SSN).</li>
            <li>Ricevute degli abbonamenti al trasporto pubblico e delle polizze.</li>
          </ul>
          <div class="hint">Molte spese sanitarie arrivano già nel precompilato tramite il Sistema Tessera Sanitaria: controlla che ci siano tutte.</div>
          ${l?'<div class="hint good-text">La scadenza del 730 è già in Scadenze.</div>':'<button class="btn small self-start" data-action="ded-deadline">Aggiungi la scadenza del 730 in Scadenze</button>'}
        </section>
      </div>
    </div>`}F("detrazioni",{render:Yl,actions:{"ded-year"(t){d.ui.dedYear=Number(t.dataset.y),d.ui.dedAll=!1,h("detrazioni")},"ded-all"(){d.ui.dedAll=!0,h("detrazioni")},"ded-unmark"(t){f(e=>{const a=e.transactions.find(i=>i.id===t.dataset.id);a&&(a.deduct=!1)})},"ded-deadline"(){const t=k(),e=Number(t.slice(0,4)),a=`${t<=`${e}-09-30`?e:e+1}-09-30`;f(i=>i.deadlines.push(Ie({name:"Dichiarazione dei redditi (730)",kind:"Altro",due:a,every:12,notice:60,note:"Precompilato disponibile da fine aprile; controlla le spese segnate in Finanze → Detrazioni"}))),T("Scadenza del 730 aggiunta: 30 settembre, con avviso 60 giorni prima"),x()}},forms:{"ded-mark"(t,e,a){const i=d.data.transactions.find(o=>o.id===t.get("id"));if(!i)return;const n=a&&a.name==="no";f(()=>{i.deduct=n?!1:t.get("type")})},"ded-add"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 35,00");return}const i=t.get("type"),n=t.get("accountId")||K(d.data)?.id;if(!n)return E("Crea prima un conto in Finanze."),x();f(o=>o.transactions.push({id:W(),accountId:n,date:t.get("date")||k(),type:"out",amount:a,category:Ql[i]||"Altro",note:String(t.get("note")||"").trim()||Mi[i].label,transfer:!1,invest:!1,deduct:i,createdAt:new Date().toISOString()})),d.ui.dedYear=Number(String(t.get("date")||k()).slice(0,4)),h("detrazioni",{},"Spesa aggiunta")}}});const ti={ETF:"#8FB4FF",Azione:"#F2B66D","Obbligazione / BTP":"#6FD59A",Altro:"#A9AFB6"},ei=t=>t==null?"—":t.toLocaleString("it-IT",{maximumFractionDigits:6});function ai(){const t=d.data;return(vt(t).find(e=>e.investments)||K(t)||{}).id}function Kl(){const t=d.data,e=qi(t),a=Oi(t),i=a.filter(m=>!m.closed),n=a.filter(m=>m.closed),o=t.recurring.filter(m=>m.type==="pac"),s=H(o.filter(m=>!m.paused).reduce((m,w)=>m+w.amount,0)),l={};for(const m of i)l[m.instrument]=(l[m.instrument]||0)+(m.value!=null?m.value:m.cost);const c=Object.values(l).reduce((m,w)=>m+w,0),u=[...t.ops].sort((m,w)=>w.date.localeCompare(m.date)),p=d.ui.opsAll?u:u.slice(0,12),b=e.pl;return`
    ${G("Investimenti","Investimenti")}
    <section class="metrics">
      ${j("Valore attuale",e.priced?v(e.value):"—","",e.priced<e.open?`${e.open-e.priced} posizion${e.open-e.priced===1?"e":"i"} senza prezzo`:"prezzi inseriti a mano")}
      ${j("Investito",v(e.cost),"","nelle posizioni aperte")}
      ${j("Guadagno o perdita",e.priced?ct(b):"—",b>0?"good":b<0?"bad":"",e.priced&&e.pricedCost?(b>=0?"+":"")+(b/e.pricedCost*100).toFixed(1).replace(".",",")+"%":"inserisci i prezzi attuali")}
      ${j("Realizzato e dividendi",ct(H(e.realized+e.divs)),"","tasse stimate "+v(Math.max(0,e.realized+e.divs)*.26))}
      ${j("PAC al mese",v(s),"accent",v(s*12)+" in un anno")}
    </section>

    <section class="card" aria-labelledby="h-pac">
      <div class="card-head"><h2 id="h-pac">I tuoi PAC</h2><button class="btn" data-action="toggle-new-pac">${d.ui.newPac?"Chiudi":"Nuovo PAC"}</button></div>
      ${o.length?o.map(m=>`
        <form class="pac-row ${m.paused?"paused":""}" data-form="pac-update">
          <input type="hidden" name="id" value="${m.id}">
          <div class="grow">
            <div class="row nowrap gap-sm"><strong>${r(m.title||m.name)}</strong><span class="tag ${m.paused?"":"ent"}">${m.paused?"In pausa":"Attivo"}</span></div>
            <div class="hint">${r(m.isin||"ISIN non indicato")} · ${r(nt(t,m.accountId))} · prossimo ${pe(m)?r(z(pe(m))):"—"}</div>
            ${(m.history||[]).length?`<div class="hint">${m.history.map(w=>`dal ${r(z(w.from))}: ${v(w.amount)} (prima ${v(w.prev)})`).join(" · ")}</div>`:""}
          </div>
          <div class="row nowrap gap-sm">
            <button class="btn square" type="button" data-action="pac-step" data-step="-25" aria-label="Diminuisci di 25 euro">−</button>
            <label class="sr-only" for="pac-a-${m.id}">Importo mensile</label>
            <input class="input amount center strong" id="pac-a-${m.id}" name="amount" inputmode="decimal" value="${r(String(m.amount).replace(".",","))}">
            <button class="btn square" type="button" data-action="pac-step" data-step="25" aria-label="Aumenta di 25 euro">+</button>
          </div>
          <label class="field inline">Giorno<input class="input day" name="day" type="number" min="1" max="31" value="${m.day}"></label>
          <button class="btn primary" type="submit">Salva</button>
          <button class="btn" type="button" data-action="rec-pause" data-id="${m.id}">${m.paused?"Riprendi":"Pausa"}</button>
        </form>`).join(""):`<div class="empty">Nessun PAC. Aggiungine uno, oppure importa l'estratto conto del broker: i versamenti automatici vengono riconosciuti.</div>`}
      ${d.ui.newPac?`
        <form data-form="new-pac" class="form-grid dashed">
          <label class="field">ETF o titolo<input class="input" name="title" placeholder="Nome dell'ETF" required></label>
          <label class="field">ISIN (facoltativo)<input class="input" name="isin" placeholder="IE00…"></label>
          <label class="field">Importo al mese (€)<input class="input" name="amount" inputmode="decimal" placeholder="50" required></label>
          <label class="field">Giorno<input class="input" name="day" type="number" min="1" max="31" value="16"></label>
          <label class="field">Conto<select class="input" name="accountId">${at(ai())}</select></label>
          <div class="field end"><button class="btn primary" type="submit">Aggiungi PAC</button></div>
        </form>`:""}
      <div class="hint">Ogni PAC compare anche in Programmati e nel calendario. Un cambio d'importo vale dai versamenti successivi, lo storico resta.</div>
    </section>

    <section class="card" aria-labelledby="h-pos">
      <div class="card-head"><h2 id="h-pos">Posizioni</h2><span class="hint">Il prezzo attuale lo aggiorni tu quando vuoi</span></div>
      ${c>0?`
        <div class="alloc" aria-hidden="true">${Object.entries(l).map(([m,w])=>`<div style="width:${w/c*100}%;background:${ti[m]||"#A9AFB6"}"></div>`).join("")}</div>
        <div class="row legend">${Object.entries(l).map(([m,w])=>`<span><span class="sw" style="background:${ti[m]||"#A9AFB6"}"></span>${r(m)} ${Math.round(w/c*100)}%</span>`).join("")}</div>`:""}
      ${i.length?`
      <div class="table-wrap"><table class="tx">
        <thead><tr><th>Titolo</th><th>Quote</th><th>Prezzo medio</th><th>Prezzo attuale (€)</th><th class="r">Valore</th><th class="r">+/−</th></tr></thead>
        <tbody>${i.map(m=>`
          <tr>
            <td><div>${r(m.title)}</div><div class="hint">${r(m.instrument)}${m.isin?" · "+r(m.isin):""}${m.divs?" · dividendi "+v(m.divs):""}</div></td>
            <td>${m.unknownQty?`<label class="sr-only" for="q-${r(m.key)}">Quote totali di ${r(m.title)}</label><input class="input slim num" id="q-${r(m.key)}" data-change="set-qty" data-key="${r(m.key)}" inputmode="decimal" value="${m.qty?r(String(m.qty).replace(".",",")):""}" placeholder="quote totali"><div class="hint">${m.unknownQty} versam. senza quote</div>`:ei(m.qty)}</td>
            <td>${m.qty?v(m.cost/m.qty):v(m.cost)+" versati"}</td>
            <td><label class="sr-only" for="p-${r(m.key)}">Prezzo attuale di ${r(m.title)}</label><input class="input slim num" id="p-${r(m.key)}" data-change="set-price" data-key="${r(m.key)}" inputmode="decimal" value="${m.price?r(String(m.price).replace(".",",")):""}" placeholder="prezzo">${m.priceDate?`<div class="hint">al ${r(z(m.priceDate))}</div>`:""}${m.isin?`<button class="link small" data-action="see-price" data-isin="${r(m.isin)}">Vedi prezzo</button>`:""}</td>
            <td class="r money">${m.value!=null?v(m.value):"—"}</td>
            <td class="r money ${m.pl>0?"in":m.pl<0?"out-bad":""}">${m.pl!=null?ct(m.pl):"—"}</td>
          </tr>`).join("")}
        </tbody></table></div>`:'<div class="empty">Nessuna posizione aperta.</div>'}
      ${n.length?`<div class="hint">Posizioni chiuse: ${n.map(m=>`${r(m.title)} (${ct(H(m.realized+m.divs))})`).join(", ")}</div>`:""}
    </section>

    <div class="split">
      <form data-form="add-op" class="card stack grow-2" aria-labelledby="h-op">
        <h2 id="h-op">Nuova operazione</h2>
        <div class="pills">
          <label class="pill"><input type="radio" name="kind" value="buy" checked><span>Acquisto</span></label>
          <label class="pill"><input type="radio" name="kind" value="sell"><span>Vendita</span></label>
          <label class="pill"><input type="radio" name="kind" value="div"><span>Dividendo o cedola</span></label>
        </div>
        <div class="form-grid">
          <label class="field">Titolo<input class="input" name="title" list="titles" placeholder="Nome dell'azione o ETF" required></label>
          <datalist id="titles">${a.map(m=>`<option value="${r(m.title)}">`).join("")}</datalist>
          <label class="field">ISIN (facoltativo)<input class="input" name="isin" placeholder="IT0000…"></label>
          <label class="field">Strumento<select class="input" name="instrument"><option>Azione</option><option>ETF</option><option>Obbligazione / BTP</option><option>Altro</option></select></label>
          <label class="field">Quote (per il dividendo lascia vuoto)<input class="input" name="qty" inputmode="decimal" placeholder="10"></label>
          <label class="field">Importo totale (€)<input class="input" name="total" inputmode="decimal" placeholder="0,00" required></label>
          <label class="field">Commissioni (€)<input class="input" name="fee" inputmode="decimal" value="1,00"></label>
          <label class="field">Data<input class="input" type="date" name="date" value="${k()}"></label>
          <label class="field">Conto<select class="input" name="accountId">${at(ai())}</select></label>
        </div>
        <label class="check"><input type="checkbox" name="cash" checked><span>Registra anche il movimento sul conto</span></label>
        <button class="btn primary" type="submit">Registra</button>
      </form>

      <div class="card stack grow-1">
        <h2>Operazioni passate</h2>
        <p class="sub">Per un PAC aperto da tempo hai due strade.</p>
        <div class="box-soft stack-sm">
          <strong>1 · Importa l'estratto del broker</strong>
          <span class="sub">Il più preciso: ogni acquisto con quote reali, più vendite e dividendi. Funziona con il PDF di Trade Republic.</span>
          <button class="btn" data-action="nav" data-id="importa">Vai a Importa</button>
        </div>
        <form data-form="rebuild-pac" class="box-soft stack-sm">
          <strong>2 · Ricostruisci i versamenti</strong>
          <span class="sub">Se non hai l'estratto: indica da quando versi, poi scrivi le quote totali nella tabella Posizioni.</span>
          ${o.length?`
          <label class="field">PAC<select class="input" name="id">${o.map(m=>`<option value="${m.id}">${r(m.title||m.name)}</option>`).join("")}</select></label>
          <label class="field">Primo versamento<input class="input" type="month" name="start" required></label>
          <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" value="${r(String(o[0].amount).replace(".",","))}"></label>
          <button class="btn" type="submit">Genera versamenti</button>`:'<span class="hint">Crea prima il PAC qui sopra.</span>'}
        </form>
      </div>
    </div>

    ${u.length?`
    <section class="card">
      <div class="card-head"><h2>Storico operazioni</h2><span class="sub">${u.length}</span></div>
      <div class="list">${p.map(m=>`
        <div class="item">
          <div class="when">${r(z(m.date))}</div>
          <div class="text"><div>${m.kind==="buy"?m.plan?"PAC":"Acquisto":m.kind==="sell"?"Vendita":"Dividendo"} · ${r(m.title)}</div><div class="hint">${m.qty?ei(m.qty)+" quote":m.kind==="div"?"":"quote non indicate"}${m.qty&&m.total?" · "+v(m.total/m.qty)+" l'una":""}</div></div>
          <span class="money ${m.kind==="buy"?"":"in"}">${m.kind==="buy"?"− ":"+ "}${v(m.total)}</span>
          <button class="icon-btn" data-action="del-op" data-id="${m.id}" aria-label="Elimina operazione">${A("trash",16)}</button>
        </div>`).join("")}</div>
      ${u.length>12&&!d.ui.opsAll?'<button class="link" data-action="ops-all">Mostra tutte</button>':""}
    </section>`:""}`}F("investimenti",{render:Kl,actions:{"toggle-new-pac"(){d.ui.newPac=!d.ui.newPac,h("investimenti")},"ops-all"(){d.ui.opsAll=!0,h("investimenti")},"pac-step"(t){const e=t.form.amount,a=R(e.value),i=Math.max(1,(Number.isFinite(a)?a:0)+Number(t.dataset.step));e.value=String(i).replace(".",",")},"del-op"(t){window.confirm("Eliminare questa operazione? Il movimento sul conto, se c'è, resta.")&&f(e=>{e.ops=e.ops.filter(a=>a.id!==t.dataset.id)})}},changes:{async"see-price"(t){const e=String(t.dataset.isin||"").replace(/[^A-Z0-9]/gi,"");try{await ee("open_document",{target:`https://www.justetf.com/it/etf-profile.html?isin=${e}`})}catch(a){E(String(a)),x()}},"set-price"(t){const e=R(t.value);if(!(e>0)){t.value.trim()===""&&f(a=>{delete a.prices[t.dataset.key]});return}f(a=>{a.prices[t.dataset.key]={price:e,date:k()}})},"set-qty"(t){const e=R(t.value);f(a=>{e>0?a.qtyOverride[t.dataset.key]=e:delete a.qtyOverride[t.dataset.key]})}},forms:{"pac-update"(t,e){const a=d.data.recurring.find(o=>o.id===t.get("id")),i=R(t.get("amount")),n=parseInt(t.get("day"),10);if(!(i>=1)){et(e,"amount","Almeno 1 €");return}if(!(n>=1&&n<=31)){et(e,"day","Da 1 a 31");return}f(()=>{a.amount!==i&&(a.history=(a.history||[]).concat([{from:k(),amount:i,prev:a.amount}])),a.amount=i,a.day=n}),h("investimenti",{},"PAC aggiornato")},"new-pac"(t,e){const a=String(t.get("title")||"").trim(),i=R(t.get("amount")),n=parseInt(t.get("day"),10)||1;if(!(i>=1)){et(e,"amount","Inserisci l'importo mensile, es. 50");return}d.ui.newPac=!1,f(o=>o.recurring.push({id:W(),type:"pac",name:"PAC "+a,title:a,isin:String(t.get("isin")||"").trim().toUpperCase(),amount:i,day:n,freq:"mensile",accountId:t.get("accountId"),category:"Investimenti",paused:!1,done:{},history:[],startDate:k()})),h("investimenti",{},"PAC aggiunto")},"add-op"(t,e){const a=t.get("kind"),i=String(t.get("title")||"").trim(),n=R(t.get("qty")||""),o=R(t.get("total")),s=R(t.get("fee")||"0")||0;if(!i){et(e,"title","Scrivi il titolo");return}if(a!=="div"&&!(n>0)){et(e,"qty","Inserisci le quote");return}if(!(o>0)){et(e,"total","Inserisci l'importo totale");return}const l=String(t.get("isin")||"").trim().toUpperCase(),c=Oi(d.data).find(b=>l&&b.isin===l||b.title.toLowerCase()===i.toLowerCase());if(a==="sell"&&(!c||c.qty+1e-9<n))return E("Non risultano abbastanza quote di "+i+" da vendere."),x();const u=t.get("accountId"),p=t.get("date")||k();f(b=>{const m=W();t.get("cash")==="on"&&b.transactions.push({id:m,accountId:u,date:p,type:a==="buy"?"out":"in",amount:H(a==="buy"?o+s:a==="sell"?o-s:o),category:a==="div"?"Dividendi":"Investimenti",note:(a==="buy"?"Acquisto ":a==="sell"?"Vendita ":"Dividendo ")+i,transfer:!1,invest:a!=="div",createdAt:new Date().toISOString()}),b.ops.push({id:W(),accountId:u,date:p,kind:a,isin:l||c?.isin||"",title:c?.title||i,instrument:t.get("instrument"),qty:a==="div"?null:n,total:o,fee:s,txId:m})}),h("investimenti",{},"Operazione registrata")},"rebuild-pac"(t,e){const a=d.data.recurring.find(c=>c.id===t.get("id")),i=t.get("start"),n=R(t.get("amount"));if(!a||!/^\d{4}-\d{2}$/.test(i||"")){et(e,"start","Scegli il mese del primo versamento");return}if(!(n>0)){et(e,"amount","Inserisci l'importo");return}const o=k(),s=Object.assign({},a,{startDate:i+"-01",freq:"mensile"}),l=ba(s,i+"-01",o).filter(c=>!d.data.ops.some(u=>u.plan&&(u.isin?u.isin===a.isin:u.title===a.title)&&u.date.slice(0,7)===c.slice(0,7)));if(!l.length)return E("Non ci sono versamenti da aggiungere: risultano già tutti."),x();f(c=>{for(const u of l)c.ops.push({id:W(),accountId:a.accountId,date:u,kind:"buy",isin:a.isin||"",title:a.title||a.name,instrument:"ETF",qty:null,total:n,fee:0,plan:!0,rebuilt:!0}),a.done=Object.assign({},a.done,{[u]:!0})}),h("investimenti",{},`Aggiunti ${l.length} versamenti da ${v(n)}. Ora scrivi le quote totali nella tabella Posizioni.`)}}});function Xl(t){t=t.replace(/^﻿/,"");const e=t.split(/\r?\n/,1)[0]||"",a={",":0,";":0,"	":0};let i=!1;for(const u of e)u==='"'?i=!i:!i&&u in a&&a[u]++;const n=Object.entries(a).sort((u,p)=>p[1]-u[1])[0][0],o=[];let s=[],l="",c=!1;for(let u=0;u<t.length;u++){const p=t[u];c?p==='"'?t[u+1]==='"'?(l+='"',u++):c=!1:l+=p:p==='"'?c=!0:p===n?(s.push(l),l=""):p===`
`||p==="\r"?(p==="\r"&&t[u+1]===`
`&&u++,s.push(l),l="",s.some(b=>b.trim()!=="")&&o.push(s),s=[]):l+=p}return s.push(l),s.some(u=>u.trim()!=="")&&o.push(s),{sep:n,header:(o[0]||[]).map(u=>u.trim()),rows:o.slice(1)}}const Zl={date:[/^data( operazione)?$/i,/data op/i,/^date$/i,/booking date/i,/^data valuta$/i,/^data/i],amount:[/^importo/i,/amount/i,/^valore/i],income:[/^entrat/i,/^accredit/i,/^avere$/i,/credit/i],expense:[/^uscit/i,/^addebit/i,/^dare$/i,/debit/i],name:[/^nome$/i,/beneficiario|controparte|esercente|merchant|payee/i],description:[/descrizione/i,/causale/i,/description/i,/dettagli/i,/^memo$/i],type:[/tipolog/i,/^tipo$/i,/^type$/i,/categoria banca/i]};function Jl(t){const e={},a=new Set;for(const i of["date","amount","income","expense","name","description","type"])for(const n of Zl[i]){const o=t.findIndex((s,l)=>!a.has(l)&&n.test(s));if(o>=0){e[i]=o,a.add(o);break}}return e}function An(t){return t.date!=null&&(t.amount!=null||t.income!=null||t.expense!=null)&&(t.name!=null||t.description!=null)}const tc=t=>t.map(e=>e.toLowerCase()).join("|");function ec(t,e){const a=[],i=[];return t.rows.forEach((n,o)=>{const s=b=>e[b]!=null?String(n[e[b]]??"").trim():"",l=zs(s("date"));let c=NaN;if(e.amount!=null)c=R(s("amount"));else{const b=R(s("income")),m=R(s("expense"));c=(Number.isFinite(b)?Math.abs(b):0)-(Number.isFinite(m)?Math.abs(m):0)}if(!l||!Number.isFinite(c)||c===0){i.push(o+2);return}const u=s("description").replace(/\s+/g," "),p=s("name").replace(/\s+/g," ")||u;a.push({date:l,amount:H(c),name:p,description:u,bankType:s("type")})}),{movements:a,errors:i}}const ac={gen:1,feb:2,mar:3,apr:4,mag:5,giu:6,lug:7,ago:8,set:9,ott:10,nov:11,dic:12},ii=/^(\d{1,2}) (gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)$/i,ni=/-?\d{1,3}(?:\.\d{3})*,\d{2} €/g;async function ic(t,e){return(await(await t.getPage(e)).getTextContent()).items.filter(n=>n.str&&n.str.trim()).map(n=>({s:n.str.trim(),x:n.transform[4],y:n.transform[5]}))}async function nc(t,e){const a=await e.getDocument({data:t instanceof Uint8Array?t:new Uint8Array(t),isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1}).promise,i=[];for(let D=1;D<=a.numPages;D++)i.push(await ic(a,D));const n=i.flat().map(D=>D.s).join(" ");if(!/TRADE REPUBLIC/i.test(n)||!/TRANSAZIONI SUL CONTO/i.test(n))throw new Error("Questo PDF non sembra un estratto conto di Trade Republic.");let o="";const s=i[0],l=s.find(D=>D.s==="DATA"&&D.x>300);l&&(o=s.filter(g=>Math.abs(g.y-l.y)<2&&g.x<300).sort((g,$)=>g.x-$.x).map(g=>g.s).join(" ").trim());const c=s.find(D=>/^IBAN/.test(D.s));let u="";if(c){const D=s.filter($=>Math.abs($.y-c.y)<2).map($=>$.s).join(" "),g=/IT\d{2}[A-Z]\d{10}[A-Z0-9]{12}/.exec(D.replace(/\s/g,""));g&&(u=g[0])}let p=null;const b=s.find(D=>/^Conto corrente/i.test(D.s));if(b){const g=s.filter($=>Math.abs($.y-b.y)<2).sort(($,C)=>$.x-C.x).map($=>$.s).join(" ").match(ni);g&&(p=R(g[0]))}const m=[];let w=415,y=452;for(const D of i){const g=D.find(I=>I.s==="IN ENTRATA"),$=D.find(I=>I.s==="IN USCITA");g&&$&&(w=g.x,y=$.x);const C=(w+y)/2+4,S=D.filter(I=>I.x<100),_=S.filter(I=>ii.test(I.s)).sort((I,M)=>M.y-I.y);for(const I of _){const M=S.filter(L=>/^\d{4}$/.test(L.s)&&L.y<I.y&&I.y-L.y<20).sort((L,ot)=>ot.y-L.y)[0];if(!M)continue;const B=I.y+2,ht=M.y-2,X=D.filter(L=>L.x>=100&&L.y<=B&&L.y>=ht),It=X.filter(L=>L.x<145).sort((L,ot)=>ot.y-L.y||L.x-ot.x).map(L=>L.s).join(" ").trim(),ie=/^(Transazione con carta|Bonifico|Commercio|Interessi|Imposte|Rendimento|Pagamento|\S+)\s*(.*)$/i.exec(It)||["",It,""],Rt=ie[1],De=X.filter(L=>L.x>=145&&L.x<w-5).sort((L,ot)=>ot.y-L.y||L.x-ot.x),Ia=[ie[2],...De.map(L=>L.s)].join(" ").replace(/\s+/g," ").trim(),Ca=X.filter(L=>L.x>=w-5).sort((L,ot)=>L.x-ot.x),ft=[];let qe=null;for(const L of Ca){const ot=L.s.match(ni)||[];ot.length&&qe==null&&(qe=L.x);for(const Rn of ot)ft.push(R(Rn))}if(ft.length<2)continue;const[Mn,On]=ii.exec(I.s).slice(1),Tn=`${M.s}-${String(ac[On.toLowerCase()]).padStart(2,"0")}-${Mn.padStart(2,"0")}`,za=ft[0],Pn=ft[ft.length-1],Ln=qe>=C;m.push({date:Tn,type:Rt,description:Ia,amount:H(Ln?-za:za),balance:Pn})}}let q=p;for(const D of m){if(q!=null){const g=H(D.balance-q);Math.abs(Math.abs(g)-Math.abs(D.amount))<.011&&(D.amount=g)}q=D.balance}return{holder:o,iban:u,closingBalance:m.length?m[m.length-1].balance:null,movements:m.map(sc(o))}}function si(t){return String(t).toLowerCase().split(/[^a-zà-ù]+/).filter(e=>e.length>1)}function sc(t){const e=new Set(si(t)),a=i=>{const n=si(i);return n.length>0&&e.size>0&&n.every(o=>e.has(o))};return i=>{const n={date:i.date,amount:i.amount,balance:i.balance,description:i.description,bankType:i.type,name:i.description},o=i.description;let s;if(s=/(?:Savings plan execution|Buy trade|Sell trade)\s+([A-Z]{2}[A-Z0-9]{9}\d)\s+(.*?),\s*quantity:\s*([\d.]+)/i.exec(o)){const l=/Savings plan/i.test(o),c=/Sell trade/i.test(o),u=parseFloat(s[3]),p=s[2].replace(/^iShares (III|II|IV|V|VI|VII)? ?plc - /i,"").trim();n.name=(l?"PAC ":c?"Vendita ":"Acquisto ")+p,n.op={kind:c?"sell":"buy",plan:l,isin:s[1],title:p,qty:u,total:Math.abs(i.amount)},n.category="Investimenti"}else(s=/Cash Dividend for ISIN\s+([A-Z]{2}[A-Z0-9]{9}\d)/i.exec(o))?(n.name="Dividendo "+s[1],n.op={kind:"div",isin:s[1],total:Math.abs(i.amount)},n.category="Dividendi"):/^Interessi/i.test(i.type)||/interest/i.test(o)?(n.name="Interessi",n.category="Interessi"):/^Imposte/i.test(i.type)||/tax/i.test(o)?(n.name=/Stamp Duty/i.test(o)?/Cancellation/i.test(o)?"Rimborso imposta di bollo":"Imposta di bollo":"Imposte",n.category="Tasse e bolli"):(s=/(Incoming transfer from|Outgoing transfer for)\s+(.+?)(?:\s*\(|$)/i.exec(o))&&(n.name=(i.amount>0?"Bonifico da ":"Bonifico a ")+s[2].trim(),n.counterparty=s[2].trim(),a(s[2])&&(n.transfer=!0,n.category="Giroconto"));return n}}const oc=[["Spesa",["eurospar","despar","conad","coop","esselunga","lidl","carrefour"," pam ","eurospin","penny","aldi"," iper","famila","tigre","crai","naturasi","supermercat"]],["Delivery",["glovo","deliveroo","just eat","justeat","uber eats"]],["Trasporti",["tper"," atm ","trenitalia"," italo "," uber ","free now","freenow","autostrade","telepass"," eni ","enilive","q8","tamoil"," esso ","carburant","benzin","parcheggi","ryanair","easyjet","flixbus"]],["Telefono e internet",[" tim ","telecom","iliad","vodafone","windtre","wind tre","fastweb","ho mobile","kena","very mobile","sky wifi"]],["Abbonamenti",["netflix","spotify","disney","prime video","amazon prime","apple com","google","anthropic","openai","youtube","dazn","now tv","canone","icloud","microsoft","adobe","patreon"]],["Casa",["affitto","condominio","enel"," hera ","a2a","iren","acea","edison","sorgenia","bolletta"]],["Salute",["farmacia","ospedale","medic","dentist","ottica"," asl ","ticket sanit"]],["Svago",["steam","playstation","nintendo","xbox","cinema","starcasino","sisal","snai","lottomatica","ticketone","teatro","museo"]],["Bar e ristoranti",[" bar "," pub ","ristorant","pizzeria","trattoria","osteria","caffe","caffè","bistrot","sushi","kebab","gelateria","pasticceria","buonristoro","mcdonald","burger","eurofood"]],["Altre entrate",["rimborso","cashback"]]],lc=[["Stipendio",["stipendio","salario","emolument","busta paga","retribuz"]],["Interessi",["interess"]],["Rimborsi",["rimbors","refund"]]],cc=new Set(["Casa","Telefono e internet","Abbonamenti","Stipendio"]);function rc(t){return" "+Xt(t.name+" "+(t.description||""))+" "}function dc(t,e){const a=Xt(t).split(" ").filter(i=>i.length>1);return a.length?(e||[]).some(i=>{const n=new Set(Xt(i).split(" ").filter(o=>o.length>1));return n.size>1&&a.every(o=>n.has(o))}):!1}function uc(t,e){const a=rc(t);for(const n of e.rules||[])if(n.match&&a.includes(n.match))return{category:n.category,transfer:!!n.transfer,invest:n.category==="Investimenti",check:!1};if(t.category)return{category:t.category,transfer:!!t.transfer,invest:!!t.op&&t.op.kind!=="div",check:!1};if(dc(t.name,e.settings.ownNames)||/^passaggio\b/.test(Xt(t.description)))return{category:"Giroconto",transfer:!0,invest:!1,check:!1};if((/prelievo|atm/i.test(t.bankType||"")||/\batm\b|prelievo/.test(a))&&t.amount<0)return{category:"Contanti",transfer:!1,invest:!1,check:!1};const i=t.amount>0?lc:oc;for(const[n,o]of i)if(o.some(s=>a.includes(s)))return{category:n,transfer:!1,invest:!1,check:n==="Bar e ristoranti"&&/sumup|sum up/.test(a)};return{category:t.amount>0?"Altre entrate":"Altro",transfer:!1,invest:!1,check:!0}}function Nt(t){return Xt(t.name||t.description).replace(/\b\d+\b/g," ").replace(/\s+/g," ").trim().split(" ").slice(0,3).join(" ")}function oi(t){const e={};let a=t[0],i=0;for(const n of t)e[n]=(e[n]||0)+1,e[n]>i&&(i=e[n],a=n);return a}function pc(t,e,a){const i=new Set((e||[]).map(c=>c.match).filter(Boolean)),n=new Set((e||[]).filter(c=>c.isin).map(c=>c.isin)),o=[],s={};for(const c of t)c.op&&c.op.plan&&(s[c.op.isin]=s[c.op.isin]||[]).push(c);for(const[c,u]of Object.entries(s)){if(n.has(c))continue;u.sort((b,m)=>b.date.localeCompare(m.date));const p=u[u.length-1];o.push({type:"pac",name:"PAC "+p.op.title,isin:c,title:p.op.title,amount:p.op.total,day:Number(oi(u.map(b=>Number(b.date.slice(8))))),category:"Investimenti",accountId:a,when:u.length+" versamenti dal "+u[0].date.split("-").reverse().join("/"),confident:u.length>1,match:"pac "+c.toLowerCase()})}const l={};for(const c of t){if(c.transfer||c.invest||c.op||["Contanti","Tasse e bolli","Interessi","Dividendi"].includes(c.category))continue;const u=Nt(c);!u||i.has(u)||(l[u]=l[u]||[]).push(c)}for(const[c,u]of Object.entries(l)){const p=new Set(u.map(C=>C.date.slice(0,7))),b=u.map(C=>Math.abs(C.amount)),m=b.reduce((C,S)=>C+S,0)/b.length,w=b.every(C=>Math.abs(C-m)<=Math.max(1,m*.15)),y=u[0].amount>0?"in":"out",q=p.size>=2&&w&&u.length<=p.size+1,D=p.size===1&&u.length===1&&cc.has(u[0].category);if(!q&&!D)continue;const g=u.sort((C,S)=>C.date.localeCompare(S.date))[u.length-1],$=g.category;o.push({type:y,name:mc(g),amount:H(Math.abs(g.amount)),day:Number(oi(u.map(C=>Number(C.date.slice(8))))),category:$,accountId:a,sub:$==="Abbonamenti"||$==="Telefono e internet",when:q?"trovato in "+p.size+" mesi":"trovato una volta, da confermare",confident:q,match:c})}return o.sort((c,u)=>c.day-u.day)}function mc(t){if(/stipendio/i.test(t.description||""))return"Stipendio";if(/affitto/i.test(t.description||""))return"Affitto";const e=(t.name||t.description||"").replace(/\b\d{1,2}\/\d{2,4}\b/g,"").replace(/\*/g," ").replace(/\s+/g," ").trim();return e.length>40?e.slice(0,40)+"…":e.charAt(0).toUpperCase()+e.slice(1)}let Ve=null;async function xn(){return Ve||(Ve=(async()=>{const t=await Na(()=>import("./app-BT7YaCw7.js").then(a=>a.bN),__vite__mapDeps([0,1,2,3]),import.meta.url),e=await Na(()=>import("./app-BT7YaCw7.js").then(a=>a.bN),__vite__mapDeps([0,1,2,3]),import.meta.url);return t.GlobalWorkerOptions.workerSrc=e.default,t})()),Ve}async function gc(t,e){const a=t.name;if(/\.pdf$/i.test(a)||t.type==="application/pdf"){const l=await xn(),c=await nc(await t.arrayBuffer(),l);return{kind:"pdf",fileName:a,source:"Trade Republic",movements:c.movements,holder:c.holder,closingBalance:c.closingBalance,ibanLast4:c.iban?c.iban.slice(-4):""}}const i=await t.text(),n=Xl(i);if(!n.header.length||!n.rows.length)throw new Error("Il file è vuoto o non è un CSV.");const o=tc(n.header),s=e.importProfiles[o]||Jl(n.header);return{kind:"csv",fileName:a,parsed:n,sig:o,map:s,usable:An(s)}}function li(t){return ec(t.parsed,t.map)}function bc(t,e,a){const i={};for(const n of t.transactions){if(n.accountId!==a)continue;const o=n.date+"|"+(n.type==="in"?1:-1)*n.amount;i[o]=(i[o]||0)+1}return e.slice().sort((n,o)=>n.date.localeCompare(o.date)).map((n,o)=>{const s=n.date+"|"+H(n.amount),l=i[s]>0;l&&i[s]--;const c=uc(n,t);return Object.assign({},n,{i:o,category:c.category,transfer:c.transfer,invest:c.invest,check:c.check&&!l,dup:l,include:!l,autoCategory:c.category})})}function vc(t){const e=t.filter(a=>a.include);return{total:t.length,included:e.length,spese:e.filter(a=>a.amount<0&&!a.transfer&&!a.invest).length,entrate:e.filter(a=>a.amount>0&&!a.transfer&&!a.invest).length,giroconti:e.filter(a=>a.transfer).length,investimenti:e.filter(a=>a.op).length,check:e.filter(a=>a.check).length,dups:t.filter(a=>a.dup).length,from:t.length?t[0].date:null,to:t.length?t[t.length-1].date:null}}function In(t,e,a){const i=e.filter(n=>n.include).map(n=>({date:n.date,amount:n.amount,name:n.name,description:n.description,category:n.category,transfer:n.transfer,invest:n.invest,op:n.op}));return pc(i,t.recurring,a).map(n=>Object.assign(n,{on:!0}))}function hc(t){return/ETF|UCITS/i.test(t.title||"")?"ETF":"Azione"}function fc(t,e){const{accountId:a,rows:i}=e,n=new Date().toISOString(),o=[],s=new Map;for(const c of i){if(!c.include)continue;const u={id:W(),accountId:a,date:c.date,type:c.amount>0?"in":"out",amount:H(Math.abs(c.amount)),category:c.category,note:c.name,description:c.description||"",transfer:c.category==="Giroconto"||c.transfer&&c.category==="Giroconto",invest:c.category==="Investimenti",imported:!0,createdAt:n};if(t.transactions.push(u),o.push({t:u,r:c}),c.op&&t.ops.push({id:W(),accountId:a,date:c.date,kind:c.op.kind,isin:c.op.isin,title:c.op.title||(t.ops.find(p=>p.isin===c.op.isin)||{}).title||c.op.isin,instrument:c.op.kind==="div"?void 0:hc(c.op),qty:c.op.qty||null,total:c.op.total,fee:0,plan:!!c.op.plan,txId:u.id}),c.category!==c.autoCategory){const p=Nt(c);p.length>=3&&s.set(p,{match:p,category:c.category,transfer:c.category==="Giroconto"})}}for(const c of s.values())t.rules=t.rules.filter(u=>u.match!==c.match),t.rules.push(c);for(const c of e.suggestions||[]){if(!c.on)continue;const u=o.filter(({r:m})=>c.isin?m.op&&m.op.isin===c.isin:Nt(m)===c.match).map(({r:m})=>m.date).sort(),p=u[u.length-1]||null,b={id:W(),name:c.name,type:c.type,amount:c.amount,accountId:c.accountId||a,freq:"mensile",day:c.day,category:c.category,sub:!!c.sub,remind:1,paused:!1,match:c.match,isin:c.isin,title:c.title,startDate:p?P(p,-3):void 0,done:{},history:[]};t.recurring.push(b)}for(const c of t.recurring)if(c.accountId===a)for(const{t:u,r:p}of o){if(!(c.isin?p.op&&p.op.isin===c.isin&&p.op.plan:c.match&&Nt(p)===c.match))continue;const m=ba(c,P(u.date,-7),P(u.date,7));m.length&&(c.done=Object.assign({},c.done,{[m[0]]:!0}),u.recurringId=c.id)}if(e.holder){const c=t.settings.ownNames;c.some(u=>u.toLowerCase()===e.holder.toLowerCase())||c.push(e.holder)}e.sig&&e.map&&(t.importProfiles[e.sig]=e.map);const l=t.accounts.find(c=>c.id===a);return l&&e.alignBalance&&e.closingBalance!=null&&o.length&&(l.anchorBalance=e.closingBalance,l.anchorDate=o.map(({t:c})=>c.date).sort().pop()),o.length}const Cn=[["date","Data",!0],["amount","Importo (con segno)",!1],["income","Entrate (se separate)",!1],["expense","Uscite (se separate)",!1],["name","Nome / controparte",!1],["description","Descrizione",!1],["type","Tipo di operazione",!1]],tt=()=>d.ui.imp||(d.ui.imp={step:"pick"});function $c(t){const e=vt(d.data);return t.kind==="pdf"?(e.find(a=>t.ibanLast4&&a.last4===t.ibanLast4)||e.find(a=>/trade republic/i.test(a.bank+" "+a.name))||e.find(a=>a.investments)||{}).id||"":(K(d.data)||{}).id||""}function le(){const t=tt(),e=t.file.kind==="pdf"?t.file.movements:li(t.file).movements;t.errors=t.file.kind==="csv"?li(t.file).errors:[],t.rows=bc(d.data,e,t.accountId),t.suggestions=In(d.data,t.rows,t.accountId),t.alignBalance=t.file.kind==="pdf"&&t.file.closingBalance!=null,t.step="preview"}function yc(){const t=tt();return`
    <section class="card stack">
      <label class="drop">
        <input type="file" accept=".csv,.txt,.pdf,text/csv,application/pdf" data-change="imp-file">
        ${A("upload",28)}
        <strong>Scegli un file</strong>
        <span class="sub">CSV della lista movimenti di qualsiasi banca, oppure PDF dell'estratto conto di Trade Republic</span>
      </label>
      ${t.loading?'<div class="sub" role="status">Lettura del file…</div>':""}
      ${t.error?`<div class="error" role="alert">${r(t.error)}</div>`:""}
      <div class="hint">Meglio un mese intero o più: così i pagamenti ricorrenti vengono riconosciuti tutti. I doppioni già presenti vengono saltati da soli.</div>
    </section>`}function wc(){const t=tt(),e=t.file.parsed.header,a=t.file.parsed.rows.slice(0,3),i=n=>'<option value="">—</option>'+e.map((o,s)=>`<option value="${s}" ${t.file.map[n]===s?"selected":""}>${r(o||"Colonna "+(s+1))}</option>`).join("");return`
    <form class="card stack" data-form="imp-map">
      <h2>Abbina le colonne</h2>
      <p class="sub">Non ho riconosciuto tutte le colonne di «${r(t.file.fileName)}». Indica dove si trovano: lo ricorderò per i prossimi file di questa banca.</p>
      <div class="form-grid">
        ${Cn.map(([n,o,s])=>`<label class="field">${o}${s?" *":""}<select class="input" name="${n}">${i(n)}</select></label>`).join("")}
      </div>
      <div class="table-wrap"><table class="tx small"><thead><tr>${e.map(n=>`<th>${r(n)}</th>`).join("")}</tr></thead>
      <tbody>${a.map(n=>`<tr>${e.map((o,s)=>`<td>${r((n[s]||"").slice(0,40))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      ${t.error?`<div class="error" role="alert">${r(t.error)}</div>`:""}
      <div class="row"><button class="btn primary" type="submit">Continua</button><button class="btn" type="button" data-action="imp-reset">Annulla</button></div>
    </form>`}function kc(){const t=tt(),e=vc(t.rows),a=vt(d.data),i=a.find(u=>u.id===t.accountId),n=[...d.data.categories.out,...d.data.categories.in,"Giroconto","Investimenti"],o=[...new Set(n)],s=t.rows.filter(u=>!t.onlyCheck||u.check||u.dup),l=t.showAll?s:s.slice(-80).reverse(),c=t.suggestions.filter(u=>u.on).length;return`
    <section class="split">
      <div class="card row nowrap grow-2">
        <div class="file-badge" aria-hidden="true">${t.file.kind==="pdf"?"PDF":"CSV"}</div>
        <div class="text"><strong>${r(t.file.fileName)}</strong><div class="hint">${e.total} movimenti${e.from?" · dal "+r(z(e.from))+" "+e.from.slice(0,4)+" al "+r(z(e.to))+" "+e.to.slice(0,4):""}${t.file.kind==="pdf"?" · "+r(t.file.source):""}</div></div>
        <button class="btn" data-action="imp-reset">Cambia file</button>
      </div>
      <div class="card stack-sm grow-1">
        <label class="field">Importa nel conto<select class="input" data-change="imp-account"><option value="">Scegli…</option>${at(t.accountId)}</select></label>
        ${t.file.kind==="pdf"&&!a.some(u=>/trade republic/i.test(u.bank+u.name))?'<button class="link" data-action="imp-new-tr">Crea il conto «Trade Republic»</button>':""}
      </div>
    </section>
    ${t.errors&&t.errors.length?`<div class="banner warn">${t.errors.length} righe non lette (date o importi non validi): righe ${t.errors.slice(0,10).join(", ")}${t.errors.length>10?"…":""}</div>`:""}

    <section class="metrics">
      ${j("Spese",String(e.spese))}
      ${j("Entrate",String(e.entrate),"good")}
      ${j("Giroconti",String(e.giroconti),"accent","non contano come spese")}
      ${e.investimenti?j("Operazioni di investimento",String(e.investimenti),"accent"):""}
      ${j("Da controllare",String(e.check),"warn",e.dups+" doppioni saltati")}
    </section>

    ${t.suggestions.length?`
    <section class="card">
      <div class="card-head"><h2>Pagamenti ricorrenti trovati</h2><span class="hint">Con due o più mesi vengono riconosciuti con sicurezza</span></div>
      <div class="list">${t.suggestions.map((u,p)=>`
        <label class="item clickable">
          <input type="checkbox" class="check-input" data-change="imp-sug" data-i="${p}" ${u.on?"checked":""}>
          <div class="text"><div>${r(u.name)} <span class="tag ${u.type==="pac"?"inv":u.type==="in"?"ent":"pag"}">${u.type==="pac"?"PAC":u.type==="in"?"Entrata":"Uscita"}</span></div><div class="hint">ogni mese il ${u.day} · ${r(u.when)}</div></div>
          <span class="money ${u.type==="in"?"in":""}">${u.type==="in"?"+ ":u.type==="out"?"− ":""}${v(u.amount)}</span>
        </label>`).join("")}</div>
    </section>`:""}

    <section class="card">
      <div class="card-head"><h2>Anteprima</h2>
        <label class="check small"><input type="checkbox" data-change="imp-only" ${t.onlyCheck?"checked":""}><span>Solo da controllare e doppioni</span></label>
      </div>
      <div class="table-wrap"><table class="tx">
        <thead><tr><th><span class="sr-only">Importa</span></th><th>Data</th><th>Descrizione</th><th>Categoria</th><th class="r">Importo</th></tr></thead>
        <tbody>${l.map(u=>`
          <tr class="${u.include?"":"muted"}">
            <td><label class="sr-only" for="inc-${u.i}">Importa ${r(u.name)}</label><input type="checkbox" id="inc-${u.i}" class="check-input" data-change="imp-inc" data-i="${u.i}" ${u.include?"checked":""}></td>
            <td class="hint nowrap">${r(z(u.date))} ${u.date.slice(2,4)}</td>
            <td><div>${r(u.name)}</div><div class="hint">${r([u.bankType,u.dup?"già presente":""].filter(Boolean).join(" · "))}</div></td>
            <td class="nowrap"><label class="sr-only" for="cat-${u.i}">Categoria di ${r(u.name)}</label>
              <select class="input slim ${u.check?"warn-border":""}" id="cat-${u.i}" data-change="imp-cat" data-i="${u.i}">${o.map(p=>`<option ${p===u.category?"selected":""}>${r(p)}</option>`).join("")}</select>
              ${u.check?'<span class="tag warn">da controllare</span>':""}</td>
            <td class="r money ${u.category==="Giroconto"?"gir":u.amount>0?"in":""}">${ct(u.amount)}</td>
          </tr>`).join("")}</tbody>
      </table></div>
      ${t.lastApplied?`<div class="banner ok" role="status">${r(t.lastApplied)}</div>`:""}
      <div class="hint">Mostrati ${l.length} di ${s.length}${s.length>l.length?' (i più recenti) · <button class="link" data-action="imp-all">mostra tutti</button>':""}. Quando cambi una categoria la regola viene ricordata.</div>
    </section>

    <section class="card stack">
      ${t.file.kind==="pdf"&&t.file.closingBalance!=null?`<label class="check"><input type="checkbox" data-change="imp-align" ${t.alignBalance?"checked":""}><span>Imposta il saldo del conto a ${v(t.file.closingBalance)}, come nell'estratto</span></label>`:""}
      ${t.file.kind==="csv"&&i?`<div class="hint">Il saldo di «${r(i.name)}» conta solo i movimenti successivi al ${r(z(i.anchorDate))} ${i.anchorDate.slice(0,4)}: quelli precedenti servono per statistiche e categorie. Puoi correggere il saldo dal conto.</div>`:""}
      <div class="row">
        <button class="btn primary" data-action="imp-commit" ${t.accountId?"":"disabled"}>Importa ${e.included} movimenti${c?` e ${c} programmati`:""}</button>
        ${t.accountId?"":'<span class="hint">Scegli prima il conto.</span>'}
      </div>
    </section>`}function Sc(){const t=tt(),e=t.step==="map"?wc():t.step==="preview"?kc():t.step==="done"?`
    <section class="card stack">
      <div class="banner ok" role="status">${r(t.result)}</div>
      <div class="row"><button class="btn primary" data-action="nav" data-id="finanze">Vai a Finanze</button>${t.hadInvest?'<button class="btn" data-action="nav" data-id="investimenti">Vai a Investimenti</button>':""}<button class="btn" data-action="imp-reset">Importa un altro file</button></div>
    </section>`:yc();return`${G("Finanze","Importa estratto conto")}${e}`}F("importa",{render:Sc,changes:{async"imp-file"(t){const e=t.files&&t.files[0];if(!e)return;const a=tt();a.loading=!0,a.error="",x();try{a.file=await gc(e,d.data),a.accountId=$c(a.file),a.loading=!1,a.file.kind==="csv"&&!a.file.usable?a.step="map":le()}catch(i){a.loading=!1,a.error=i.message||String(i)}x()},"imp-account"(t){const e=tt();e.accountId=t.value,e.accountId&&le(),x()},"imp-inc"(t){const e=tt().rows.find(a=>a.i===Number(t.dataset.i));e.include=t.checked,x()},"imp-cat"(t){const e=tt(),a=e.rows.find(s=>s.i===Number(t.dataset.i)),i=s=>{s.category=t.value,s.check=!1,s.manual=!0,s.transfer=t.value==="Giroconto",s.invest=t.value==="Investimenti"};i(a);const n=Nt(a);let o=0;for(const s of e.rows)s===a||s.manual||s.op||Math.sign(s.amount)!==Math.sign(a.amount)&&t.value!=="Giroconto"||Nt(s)===n&&(i(s),o++);e.lastApplied=o?`Categoria applicata anche ad altri ${o} movimenti di «${a.name}».`:"",e.suggestions=In(d.data,e.rows,e.accountId).map(s=>Object.assign(s,{on:(e.suggestions.find(l=>l.match===s.match)||s).on})),x()},"imp-sug"(t){tt().suggestions[Number(t.dataset.i)].on=t.checked,x()},"imp-only"(t){tt().onlyCheck=t.checked,x()},"imp-align"(t){tt().alignBalance=t.checked}},actions:{"imp-reset"(){d.ui.imp={step:"pick"},h("importa")},"imp-all"(){tt().showAll=!0,x()},"imp-new-tr"(){const t=tt(),e=va({name:"Trade Republic",bank:"Trade Republic",type:"broker",color:"#6FD59A",investments:!0,last4:t.file.ibanLast4||"",main:!K(d.data)});f(a=>a.accounts.push(e)),t.accountId=e.id,le(),x()},"imp-commit"(){const t=tt();if(!t.accountId)return;let e=0;f(i=>{e=fc(i,{accountId:t.accountId,rows:t.rows,suggestions:t.suggestions,alignBalance:t.alignBalance,closingBalance:t.file.closingBalance,holder:t.file.holder,sig:t.file.sig,map:t.file.map})});const a=t.suggestions.filter(i=>i.on).length;t.hadInvest=t.rows.some(i=>i.include&&i.op),t.result=`Importati ${e} movimenti${a?` e aggiunti ${a} programmati`:""}. Saldi, categorie e calendario sono aggiornati.`,t.step="done",T(""),h("importa")}},forms:{"imp-map"(t){const e=tt(),a={};for(const[i]of Cn){const n=t.get(i);n!==""&&n!=null&&(a[i]=Number(n))}if(!An(a))return e.error="Servono almeno la data, l'importo (o entrate/uscite) e il nome o la descrizione.",x();e.error="",e.file.map=a,le(),x()}}});function zn(t){if(!t)return"";const e=t.slice(-5);return"compleanno "+z("2000-"+e)+(t.length===10?" "+t.slice(0,4):"")}function Ac(t){const e=[t.phone,t.email,zn(t.birthday)].filter(Boolean).join(" · ");return`
    <div class="item">
      <div class="avatar">${r(Es(t.name))}</div>
      <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r(e||"Nessun recapito")}</div>${t.note?`<div class="sub">${r(t.note)}</div>`:""}</div>
      ${t.phone?`<button class="icon-btn" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero di ${r(t.name)}">${A("copy",16)}</button>`:""}
      <button class="icon-btn" data-action="edit-contact" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${A("edit",16)}</button>
      <button class="icon-btn" data-action="del-contact" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button>
    </div>`}F("rubrica",{render(){const t=[...d.data.contacts].sort((i,n)=>i.name.localeCompare(n.name,"it")),e=d.ui.contactEdit?d.data.contacts.find(i=>i.id===d.ui.contactEdit):null,a=e&&e.birthday&&e.birthday.length===10?e.birthday:"";return`
      ${G(t.length+" contatti","Rubrica")}
      <section class="card">
        <h2>${e?"Modifica contatto":"Nuovo contatto"}</h2>
        <form data-form="save-contact" class="form-grid">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <label class="field">Nome<input class="input" id="c-name" name="name" value="${r(e?e.name:"")}" required></label>
          <label class="field">Telefono<input class="input" name="phone" inputmode="tel" value="${r(e?e.phone:"")}"></label>
          <label class="field">Email<input class="input" name="email" type="email" value="${r(e?e.email:"")}"></label>
          <label class="field">Data di nascita<input class="input" name="birthday" type="date" value="${r(a)}"></label>
          <label class="field">Nota<input class="input" name="note" value="${r(e?e.note:"")}"></label>
          <div class="field end row"><button class="btn primary" type="submit">${e?"Salva":"Aggiungi"}</button>${e?'<button class="btn" type="button" data-action="cancel-contact">Annulla</button>':""}</div>
        </form>
        ${e&&e.birthday&&e.birthday.length===5?`<div class="hint">Compleanno salvato senza anno (${r(zn(e.birthday))}). Lascia vuota la data per tenerlo così.</div>`:""}
      </section>
      <section class="card">
        ${t.length?`<div class="list">${t.map(Ac).join("")}</div>`:'<div class="empty">La rubrica è vuota.</div>'}
      </section>`},actions:{"edit-contact"(t){d.ui.contactEdit=t.dataset.id,h("rubrica"),O("#c-name")},"cancel-contact"(){d.ui.contactEdit=null,h("rubrica")},"del-contact"(t){const e=d.data.contacts.find(a=>a.id===t.dataset.id);e&&!window.confirm(`Eliminare ${e.name} dalla rubrica?`)||f(a=>{a.contacts=a.contacts.filter(i=>i.id!==t.dataset.id)})}},forms:{"save-contact"(t){const e=String(t.get("name")||"").trim();if(!e)return;const a=t.get("id"),i={name:e,phone:String(t.get("phone")||"").trim(),email:String(t.get("email")||"").trim(),note:String(t.get("note")||"").trim()},n=t.get("birthday");f(o=>{if(a){const s=o.contacts.find(l=>l.id===a);Object.assign(s,i),n&&(s.birthday=n)}else o.contacts.push(Object.assign({id:W(),birthday:n||""},i))}),d.ui.contactEdit=null,h("rubrica",{},a?"Contatto aggiornato":"Contatto aggiunto"),O("#c-name")}}});const En=t=>`${z(t)} ${t.slice(0,4)}`;function xc(t,e){const a=vt(t);return`
    <form class="box-soft stack-sm" data-form="loan-settle">
      <input type="hidden" name="id" value="${e.id}">
      <div class="row">
        ${e.what==="soldi"?`
          <label class="field">Importo<input class="input amount" id="ls-amount" name="amount" inputmode="decimal" value="${r(String(Dt(e)).replace(".",","))}"></label>
          ${a.length>1?`<label class="field">${e.dir==="out"?"Arrivati sul conto":"Usciti dal conto"}<select class="input" name="accountId">${at((e.payments||[]).slice(-1)[0]?.accountId||e.accountId||K(t)?.id)}</select></label>`:`<input type="hidden" name="accountId" value="${a[0]?a[0].id:""}">`}`:""}
        <label class="field">Data<input class="input date" type="date" name="date" value="${k()}"></label>
        <div class="row self-end"><button class="btn primary" type="submit">Conferma</button><button class="btn" type="button" data-action="loan-settle-cancel">Annulla</button></div>
      </div>
      ${e.what==="soldi"?`<div class="hint">Se te ne restituisce solo una parte, scrivi quanto: il resto rimane in sospeso. Il movimento ${e.dir==="out"?"in entrata":"in uscita"} non conta tra entrate e spese del mese.${a.length===1?` Conto: ${r(a[0].name)}.`:""}</div>`:""}
    </form>`}function ci(t,e){const a=d.ui.loanSettle===e.id,i=Dt(e);return`
    <div class="dl-row">
      <div class="item">
        <div class="avatar">${r(e.person.trim().split(/\s+/).slice(0,2).map(n=>n[0]).join("").toUpperCase())}</div>
        <div class="text"><div class="strong">${r(e.person)}</div>
          <div class="hint">${e.what==="soldi"?"":r(e.item)+" · "}dal ${r(En(e.date))}${e.paid?` · già restituiti ${v(e.paid)}`:""}${e.note?" · "+r(e.note):""}</div></div>
        ${e.what==="soldi"?`<span class="money strong">${v(i)}</span>`:'<span class="tag">oggetto</span>'}
        ${a?"":`<button class="btn small" data-action="loan-settle" data-id="${e.id}">${e.what==="soldi"?"Restituiti":"Restituito"}</button>`}
        <button class="icon-btn" data-action="loan-del" data-id="${e.id}" aria-label="Elimina il prestito con ${r(e.person)}">${A("trash",16)}</button>
      </div>
      ${a?xc(t,e):""}
    </div>`}function Ic(){const t=d.data,e=t.loans.filter(c=>!c.settled).sort((c,u)=>c.date.localeCompare(u.date)),a=e.filter(c=>c.dir==="out"),i=e.filter(c=>c.dir==="in"),n=t.loans.filter(c=>c.settled).sort((c,u)=>(u.settledAt||"").localeCompare(c.settledAt||"")),o=c=>c.filter(u=>u.what==="soldi").reduce((u,p)=>u+Dt(p),0),s=d.ui.loanDir||"out",l=d.ui.loanWhat||"soldi";return`
    ${G(e.length?`${e.length} in sospeso`:"Nessun prestito in sospeso","Prestiti")}
    <section class="metrics">
      ${j("Ti devono",v(o(a)),"good",a.filter(c=>c.what!=="soldi").length?`+ ${a.filter(c=>c.what!=="soldi").length} oggetti`:"")}
      ${j("Devi",v(o(i)),o(i)?"warn":"",i.filter(c=>c.what!=="soldi").length?`+ ${i.filter(c=>c.what!=="soldi").length} oggetti`:"")}
    </section>
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <section class="card"><h2>Ti devono</h2>${a.length?`<div class="list">${a.map(c=>ci(t,c)).join("")}</div>`:'<div class="empty">Nessuno.</div>'}</section>
        <section class="card"><h2>Devi</h2>${i.length?`<div class="list">${i.map(c=>ci(t,c)).join("")}</div>`:'<div class="empty">Niente da restituire.</div>'}</section>
        ${n.length?`<section class="card"><div class="card-head"><h2>Chiusi</h2><span class="sub">${n.length}</span></div>
          <div class="list">${n.slice(0,20).map(c=>`<div class="item done"><div class="text"><div>${r(c.person)} · ${c.what==="soldi"?v(c.amount):r(c.item)}</div>
            <div class="hint">${c.dir==="out"?"restituito a te":"restituito da te"} il ${r(En(c.settledAt||c.date))}${(c.payments||[]).length?" su "+r([...new Set(c.payments.map(u=>nt(t,u.accountId)))].join(", ")):""}</div></div>
            <button class="icon-btn" data-action="loan-del" data-id="${c.id}" aria-label="Elimina">${A("trash",16)}</button></div>`).join("")}</div></section>`:""}
      </div>
      <form class="card stack grow-1" data-form="loan-add" aria-labelledby="h-loanform">
        <h2 id="h-loanform">Nuovo prestito</h2>
        <div class="pills small" role="radiogroup" aria-label="Direzione">
          <label class="pill"><input type="radio" name="dir" value="out" data-change="loan-dir" ${s==="out"?"checked":""}><span>Ho prestato</span></label>
          <label class="pill"><input type="radio" name="dir" value="in" data-change="loan-dir" ${s==="in"?"checked":""}><span>Mi hanno prestato</span></label>
        </div>
        <div class="pills small" role="radiogroup" aria-label="Cosa">
          <label class="pill"><input type="radio" name="what" value="soldi" data-change="loan-what" ${l==="soldi"?"checked":""}><span>Soldi</span></label>
          <label class="pill"><input type="radio" name="what" value="oggetto" data-change="loan-what" ${l!=="soldi"?"checked":""}><span>Un oggetto</span></label>
        </div>
        <label class="field">${s==="out"?"A chi":"Da chi"}<input class="input" id="loan-person" name="person" list="loan-people" placeholder="Nome" required></label>
        <datalist id="loan-people">${[...new Set([...t.contacts.map(c=>c.name),...t.loans.map(c=>c.person)])].map(c=>`<option value="${r(c)}">`).join("")}</datalist>
        ${l==="soldi"?'<label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="20,00" required></label>':'<label class="field">Cosa<input class="input" name="item" placeholder="es. trapano, libro" required></label>'}
        <div class="form-grid two">
          <label class="field">Data<input class="input" type="date" name="date" value="${k()}"></label>
          <label class="field">Nota<input class="input" name="note" placeholder="facoltativa"></label>
        </div>
        ${l==="soldi"?`<label class="check small"><input type="checkbox" name="record" data-change="loan-record" ${d.ui.loanRecord?"checked":""}>Registra anche ${s==="out"?"l'uscita dal":"l'entrata sul"} conto</label>
          ${d.ui.loanRecord?`<select class="input" name="accountId" aria-label="Conto">${at(K(t)?.id)}</select>`:""}
          <div class="hint">Lascialo spento se il movimento arriverà importando l'estratto conto, per non contarlo due volte.</div>`:""}
        <button class="btn primary self-start" type="submit">Aggiungi</button>
      </form>
    </div>`}const Ue=t=>d.data.loans.find(e=>e.id===t);F("prestiti",{render:Ic,changes:{"loan-dir"(t){d.ui.loanDir=t.value,h("prestiti")},"loan-what"(t){d.ui.loanWhat=t.value,h("prestiti")},"loan-record"(t){d.ui.loanRecord=t.checked,h("prestiti")}},actions:{"loan-settle"(t){const e=Ue(t.dataset.id);e&&(d.ui.loanSettle=e.id,h("prestiti"),O("#ls-amount"))},"loan-settle-cancel"(){d.ui.loanSettle=null,h("prestiti")},"loan-del"(t){const e=Ue(t.dataset.id);!e||!window.confirm(`Eliminare il prestito con ${e.person}? I movimenti già registrati sui conti restano.`)||f(a=>{a.loans=a.loans.filter(i=>i.id!==e.id),Q(a,e.id)})}},forms:{"loan-add"(t,e){const a=String(t.get("person")||"").trim();if(!a)return E("Scrivi il nome."),x();const i=t.get("dir")==="in"?"in":"out",n=t.get("what")==="oggetto"?"oggetto":"soldi",o=t.get("date")||k(),s=String(t.get("note")||"").trim();let l=0,c="";if(n==="soldi"){if(l=U(t.get("amount")),!(l>0)){const b=e.querySelector("[name=amount]");b.setCustomValidity("Inserisci un importo, es. 20"),b.reportValidity(),b.addEventListener("input",()=>b.setCustomValidity(""),{once:!0});return}}else if(c=String(t.get("item")||"").trim(),!c)return E("Scrivi cosa hai prestato."),x();const u=n==="soldi"&&t.get("record")==="on",p=u?t.get("accountId")||K(d.data)?.id:null;f(b=>{const m=wi({person:a,dir:i,what:n,amount:l,item:c,date:o,note:s,accountId:p});u&&p&&b.transactions.push({id:W(),accountId:p,date:o,type:i==="out"?"out":"in",amount:l,category:"Prestiti",note:(i==="out"?"Prestito a ":"Prestito da ")+a,transfer:!1,invest:!1,loan:!0,loanId:m.id,createdAt:new Date().toISOString()}),b.loans.push(m)}),d.ui.loanRecord=!1,h("prestiti",{},i==="out"?`Segnato: ${a} ti deve ${n==="soldi"?v(l):c}`:`Segnato: devi ${n==="soldi"?v(l):c} a ${a}`),O("#loan-person")},"loan-settle"(t,e){const a=Ue(t.get("id"));if(!a)return;const i=t.get("date")||k();let n=0;if(a.what==="soldi"){n=U(t.get("amount"));const s=e.querySelector("[name=amount]"),l=c=>{s.setCustomValidity(c),s.reportValidity(),s.addEventListener("input",()=>s.setCustomValidity(""),{once:!0})};if(!(n>0))return l("Inserisci un importo");if(n>Dt(a)+.004)return l(`Restano ${v(Dt(a))}`);if(!t.get("accountId"))return E("Crea prima un conto in Finanze."),x()}f(s=>js(s,a,{amount:n,accountId:t.get("accountId"),date:i})),d.ui.loanSettle=null;const o=a.settled?`Prestito con ${a.person} chiuso`:`Registrati ${v(n)}: restano ${v(Dt(a))}`;h("prestiti",{},a.what==="soldi"?o+` · ${a.dir==="out"?"entrata su":"uscita da"} ${nt(d.data,t.get("accountId"))}`:o)}}});const ri=["Film","Serie","Libro","Altro"],jn={Film:["da vedere","visto"],Serie:["da vedere","vista"],Libro:["da leggere","letto"],Altro:["da fare","fatto"]};function _e(t){const e=t.status;return`
    <div class="item">
      <span class="tag">${r(t.kind)}</span>
      <div class="text"><div>${r(t.title)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}${e==="fatto"?`<div class="hint">${r(jn[t.kind]?.[1]||"fatto")} il ${r(z(t.doneAt||k()))}</div>`:""}</div>
      ${e==="fatto"?`<span class="stars" role="group" aria-label="Voto">${[1,2,3,4,5].map(a=>`<button class="star ${t.rating>=a?"on":""}" data-action="watch-rate" data-id="${t.id}" data-n="${a}" aria-label="${a} stelle" aria-pressed="${t.rating===a}">★</button>`).join("")}</span>`:e==="da"?`<button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="corso">Iniziato</button><button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="fatto">Finito</button>`:`<button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="fatto">Finito</button>`}
      <button class="icon-btn" data-action="watch-del" data-id="${t.id}" aria-label="Elimina ${r(t.title)}">${A("trash",16)}</button>
    </div>`}function Cc(){const t=d.data,e=d.ui.watchKind||"",a=t.watchlist.filter(l=>!e||l.kind===e),i=a.filter(l=>l.status==="corso"),n=a.filter(l=>l.status==="da").sort((l,c)=>(c.createdAt||"").localeCompare(l.createdAt||"")),o=a.filter(l=>l.status==="fatto").sort((l,c)=>(c.doneAt||"").localeCompare(l.doneAt||"")),s=d.ui.watchPick?t.watchlist.find(l=>l.id===d.ui.watchPick):null;return`
    ${G(`${t.watchlist.filter(l=>l.status!=="fatto").length} in lista`,"Da vedere e leggere",["",...ri].map(l=>`<button class="chip ${e===l?"":"off"}" data-action="watch-kind" data-k="${l}" aria-pressed="${e===l}">${l||"Tutto"}</button>`).join(""))}
    <section class="card">
      <form class="row" data-form="watch-add">
        <label class="sr-only" for="w-title">Titolo</label>
        <input class="input grow" id="w-title" name="title" placeholder="Titolo" required autocomplete="off">
        <label class="sr-only" for="w-kind">Tipo</label>
        <select class="input" id="w-kind" name="kind">${ri.map(l=>`<option ${(e||"Film")===l?"selected":""}>${l}</option>`).join("")}</select>
        <label class="sr-only" for="w-note">Nota</label>
        <input class="input grow" id="w-note" name="note" placeholder="Nota (es. consigliato da Marco, su Netflix)">
        <button class="btn primary" type="submit">Aggiungi</button>
      </form>
      ${n.length?`<div class="row"><button class="btn small" data-action="watch-pick">🎲 Pesca a caso</button>${s?`<span class="sub">Stasera: <strong>${r(s.title)}</strong> <span class="hint">(${r(s.kind)})</span></span>`:""}</div>`:""}
    </section>
    ${i.length?`<section class="card"><h2>In corso</h2><div class="list">${i.map(_e).join("")}</div></section>`:""}
    <section class="card"><div class="card-head"><h2>${e?r(jn[e][0]).replace(/^./,l=>l.toUpperCase()):"In lista"}</h2><span class="sub">${n.length}</span></div>
      ${n.length?`<div class="list">${n.map(_e).join("")}</div>`:'<div class="empty">Lista vuota. Aggiungi quello che ti consigliano, così non lo dimentichi.</div>'}
    </section>
    ${o.length?`<section class="card"><div class="card-head"><h2>Finiti</h2><span class="sub">${o.length}</span></div><div class="list">${o.slice(0,d.ui.watchAll?1e3:15).map(_e).join("")}</div>
      ${o.length>15&&!d.ui.watchAll?'<button class="link" data-action="watch-all">Mostra tutti</button>':""}</section>`:""}`}const Ge=t=>d.data.watchlist.find(e=>e.id===t);F("liste",{render:Cc,actions:{"watch-kind"(t){d.ui.watchKind=t.dataset.k,d.ui.watchPick=null,h("liste")},"watch-all"(){d.ui.watchAll=!0,h("liste")},"watch-pick"(){const t=d.ui.watchKind||"",e=d.data.watchlist.filter(i=>i.status==="da"&&(!t||i.kind===t)&&i.id!==d.ui.watchPick),a=e.length?e:d.data.watchlist.filter(i=>i.status==="da"&&(!t||i.kind===t));d.ui.watchPick=a.length?a[Math.floor(Math.random()*a.length)].id:null,h("liste")},"watch-status"(t){const e=Ge(t.dataset.id);e&&(f(()=>{e.status=t.dataset.s,e.doneAt=e.status==="fatto"?k():null,N(e)}),t.dataset.s==="fatto"&&T(`${e.title}: com'era? Dagli un voto`))},"watch-rate"(t){const e=Ge(t.dataset.id);if(!e)return;const a=Number(t.dataset.n);f(()=>{e.rating=e.rating===a?null:a,N(e)})},"watch-del"(t){const e=Ge(t.dataset.id);!e||!window.confirm(`Togliere «${e.title}» dalla lista?`)||(d.ui.watchPick===e.id&&(d.ui.watchPick=null),f(a=>{a.watchlist=a.watchlist.filter(i=>i.id!==e.id),Q(a,e.id)}))}},forms:{"watch-add"(t){const e=String(t.get("title")||"").trim();if(!e)return E("Scrivi il titolo."),x();const a=t.get("kind")||"Film",i=d.data.watchlist.find(n=>n.title.toLowerCase()===e.toLowerCase()&&n.kind===a);if(i){h("liste",{},`${i.title} è già in lista`);return}f(n=>n.watchlist.push(yi({title:e,kind:a,note:String(t.get("note")||"").trim()}))),O("#w-title")}}});const We=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];async function zc(t,e){const a=await e.getDocument({data:new Uint8Array(t),isEvalSupported:!1}).promise,i=await a.getPage(1),n=i.getViewport({scale:1});return{items:(await i.getTextContent()).items.filter(l=>l.str&&l.str.trim()).map(l=>({s:l.str.trim(),x:l.transform[4]/n.width,y:1-l.transform[5]/n.height})),pages:a.numPages}}const Ec=/^-?\d{1,3}(\.\d{3})*,\d{2,5}$|^-?\d+,\d{2,5}$/;function it(t,e,a,i,n){const o=t.filter(s=>s.x>=e&&s.x<a&&s.y>=i&&s.y<n&&Ec.test(s.s)).sort((s,l)=>s.y-l.y||s.x-l.x)[0];return o?R(o.s):null}const jc={ferie:.214,permessi:.229,rol:.243,exfest:.257},Dc={prec:[.6,.69],mat:[.69,.78],god:[.78,.87],res:[.87,.99]};function ce(t,e){const a=jc[e],i={};for(const[n,[o,s]]of Object.entries(Dc))i[n]=it(t,o,s,a-.006,a+.006);return i}function qc(t){if(!t.length)return{format:"immagine"};const e=t.map(l=>l.s).join(" "),a=t.find(l=>new RegExp(`^(${We.join("|")})\\s+(\\d{4})$`,"i").test(l.s));let i=null;if(a){const[,l,c]=new RegExp(`^(${We.join("|")})\\s+(\\d{4})$`,"i").exec(a.s);i=`${c}-${String(We.indexOf(l.toLowerCase())+1).padStart(2,"0")}`}const n=/TREDICESIMA|13\s*\^?\s*MA\b|13ESIMA/i.test(e)?"tredicesima":/QUATTORDICESIMA|14\s*\^?\s*MA\b/i.test(e)?"quattordicesima":"mensile";if(!/Ranocchi/i.test(e))return{format:"sconosciuto",month:i,kind:n};const o={ferie:ce(t,"ferie"),permessi:ce(t,"permessi"),rol:ce(t,"rol"),exfest:ce(t,"exfest")},s=o.rol.mat!=null||o.rol.res!=null||o.rol.prec!=null?o.rol:o.permessi;return{format:"ranocchi",month:i,kind:n,netto:it(t,.6,.8,.825,.85),lordo:it(t,.47,.6,.612,.626),contributi:it(t,.62,.78,.667,.681),imponibile:it(t,.24,.34,.695,.709),irpef:it(t,.62,.78,.695,.709),addizionali:it(t,.62,.78,.781,.795),tfr:it(t,.14,.25,.928,.942),tfrFondo:it(t,.02,.13,.942,.956),oreLavorate:it(t,.44,.53,.928,.942),ggLavorati:it(t,.44,.53,.942,.956),annoImponibileIrpef:it(t,.33,.43,.912,.926),annoIrpef:it(t,.64,.77,.912,.926),annoImponibileInps:it(t,.02,.13,.912,.926),ferie:{prec:o.ferie.prec,mat:o.ferie.mat,god:o.ferie.god,res:o.ferie.res},permessi:{prec:s.prec,mat:s.mat,god:s.god,res:s.res},exfest:{prec:o.exfest.prec,mat:o.exfest.mat,god:o.exfest.god,res:o.exfest.res}}}async function Nc(t,e){const{items:a}=await zc(await t.arrayBuffer(),e);return qc(a)}const Dn={mensile:"Mensile",tredicesima:"Tredicesima",quattordicesima:"Quattordicesima"},Aa=t=>t.settings.workHoursDay||8,Ut=t=>t==null?"—":t.toLocaleString("it-IT",{maximumFractionDigits:2}),He=(t,e)=>e==null?"":`≈ ${(e/Aa(t)).toLocaleString("it-IT",{maximumFractionDigits:1})} giorni`,ca=t=>t==null?"":String(t).replace(".",","),qn=[["netto","Netto in busta"],["lordo","Lordo (totale competenze)"],["contributi","Contributi"],["irpef","IRPEF del mese"],["addizionali","Addizionali"],["tfr","TFR del mese"]],Nn=[["ferie","Ferie"],["permessi","Permessi / ROL"],["exfest","Ex festività"]],ra=[["prec","Anni prec."],["mat","Maturate"],["god","Godute"],["res","Residue"]];function Mc(t,e){return`
    <form class="card stack" data-form="pay-save" aria-labelledby="h-payform">
      <div class="card-head"><h2 id="h-payform">${!e.id||!t.payslips.some(i=>i.id===e.id)?"Controlla e salva":"Modifica busta paga"}</h2><button class="link" type="button" data-action="pay-cancel">Annulla</button></div>
      ${e.source==="pdf"?'<div class="banner ok">Letta dal PDF: controlla che i numeri corrispondano alla busta, poi salva.</div>':""}
      ${e.source==="immagine"?'<div class="banner warn">Questo PDF è una foto o una scansione: i numeri non si possono leggere in automatico. Copiali qui guardando la busta (bastano quelli che ti interessano).</div>':""}
      ${e.source==="sconosciuto"?`<div class="banner warn">Non riconosco l'impaginazione di questa busta: inserisci i numeri a mano.</div>`:""}
      <div class="form-grid two">
        <label class="field">Mese<input class="input" type="month" name="month" value="${r(e.month||"")}" required></label>
        <label class="field">Tipo<select class="input" name="kind">${Object.entries(Dn).map(([i,n])=>`<option value="${i}" ${e.kind===i?"selected":""}>${n}</option>`).join("")}</select></label>
        ${qn.map(([i,n])=>`<label class="field">${n} (€)<input class="input" name="${i}" inputmode="decimal" value="${r(ca(e[i]))}"></label>`).join("")}
      </div>
      <div class="table-wrap"><table class="tx small pay-hours">
        <thead><tr><th>Ore</th>${ra.map(([,i])=>`<th class="r">${i}</th>`).join("")}</tr></thead>
        <tbody>${Nn.map(([i,n])=>`<tr><td>${n}</td>${ra.map(([o,s])=>`<td class="r"><label class="sr-only" for="h-${i}-${o}">${n} ${s}</label><input class="input slim num" id="h-${i}-${o}" name="${i}.${o}" inputmode="decimal" value="${r(ca(e[i]?.[o]))}"></td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      <div class="hint">Ferie e permessi sono in ore, come sulla busta. In giorni li calcolo io (${Aa(t)} ore al giorno).</div>
      <label class="field">Nota<input class="input" name="note" value="${r(e.note||"")}" placeholder="es. aumento di livello, premio"></label>
      <button class="btn primary self-start" type="submit">Salva</button>
    </form>`}function Oc(t){const e={};for(const a of t){const i=a.month.slice(0,4),n=e[i]||(e[i]={y:i,netto:0,lordo:0,n:0,irpefAnno:null,last:""});n.netto+=a.netto||0,n.lordo+=a.lordo||0,n.n++,a.annoIrpef!=null&&a.month>=n.last&&(n.irpefAnno=a.annoIrpef,n.last=a.month)}return Object.values(e).sort((a,i)=>i.y.localeCompare(a.y)).map(a=>Object.assign(a,{netto:H(a.netto),lordo:H(a.lordo)}))}function Tc(){const t=d.data,e=Ds(t),a=qs(t),i=d.ui.payDraft,n=e.filter(s=>s.kind==="mensile"&&s.netto!=null).slice(-24),o=n.length?H(n.reduce((s,l)=>s+l.netto,0)/n.length):null;return`
    ${G(e.length?`${e.length} buste paga`:"Buste paga, ferie e permessi","Lavoro")}
    ${a?`<section class="metrics">
      ${j(`Netto ${Z(a.month).toLowerCase()}`,a.netto!=null?v(a.netto):"—","",o!=null&&n.length>1?`media ${v(o)}`:"")}
      ${j("Ferie residue",a.ferie?.res!=null?`${Ut(a.ferie.res)} ore`:"—","accent",He(t,a.ferie?.res))}
      ${j("Permessi / ROL residui",a.permessi?.res!=null?`${Ut(a.permessi.res)} ore`:"—","",He(t,a.permessi?.res))}
      ${j("Ex festività residue",a.exfest?.res!=null?`${Ut(a.exfest.res)} ore`:"—","",He(t,a.exfest?.res))}
      ${a.tfrFondo!=null?j("TFR accumulato in azienda",v(a.tfrFondo)):""}
    </section>`:""}
    ${i?Mc(t,i):`
    <section class="card stack-sm" aria-labelledby="h-payadd">
      <h2 id="h-payadd">Aggiungi una busta paga</h2>
      <label class="drop ph-pc-only">
        <input type="file" accept="application/pdf,.pdf" data-change="pay-file" multiple>
        <span class="file-badge">PDF</span>
        <strong>Scegli i PDF delle buste paga</strong>
        <span class="hint">Anche più di uno insieme. Quelle in PDF del tuo consulente si leggono da sole; le foto o scansioni le inserisci a mano.</span>
      </label>
      <button class="link self-start" data-action="pay-manual">Oppure inserisci a mano</button>
    </section>`}
    ${n.length>1?`<section class="card"><div class="card-head"><h2>Netto mese per mese</h2><span class="hint">solo buste mensili</span></div>
      ${ka(n.map(s=>({label:Z(s.month).slice(0,3).toLowerCase()+" "+s.month.slice(2,4),value:s.netto,title:Z(s.month),valueText:v(s.netto),sub:s.lordo!=null?`lordo ${v(s.lordo)}`:""})),{id:"netto"})}</section>`:""}
    ${e.length?`<section class="card">
      <h2>Per anno</h2>
      <div class="table-wrap"><table class="tx small"><thead><tr><th>Anno</th><th class="r">Buste</th><th class="r">Netto</th><th class="r">Lordo</th><th class="r">IRPEF dell'anno</th></tr></thead>
      <tbody>${Oc(e).map(s=>`<tr><td>${s.y}</td><td class="r">${s.n}</td><td class="r">${v(s.netto)}</td><td class="r">${s.lordo?v(s.lordo):"—"}</td><td class="r">${s.irpefAnno!=null?v(s.irpefAnno):"—"}</td></tr>`).join("")}</tbody></table></div>
      <div class="hint">L'IRPEF dell'anno è quella progressiva dell'ultima busta letta di quell'anno.</div>
    </section>
    <section class="card">
      <h2>Tutte le buste</h2>
      <div class="table-wrap"><table class="tx small"><thead><tr><th>Mese</th><th>Tipo</th><th class="r">Netto</th><th class="r">Lordo</th><th class="r">Ferie res.</th><th class="r">Permessi res.</th><th></th></tr></thead>
      <tbody>${[...e].reverse().map(s=>`<tr><td>${r(Z(s.month))}</td><td>${s.kind==="mensile"?"":`<span class="tag">${Dn[s.kind]}</span>`}${s.source==="pdf"?"":' <span class="hint">a mano</span>'}</td>
        <td class="r">${s.netto!=null?v(s.netto):"—"}</td><td class="r">${s.lordo!=null?v(s.lordo):"—"}</td>
        <td class="r">${Ut(s.ferie?.res)}</td><td class="r">${Ut(s.permessi?.res)}</td>
        <td class="r"><div class="row nowrap gap-sm" style="justify-content: flex-end"><button class="icon-btn" data-action="pay-edit" data-id="${s.id}" aria-label="Modifica ${r(Z(s.month))}">${A("edit",16)}</button><button class="icon-btn" data-action="pay-del" data-id="${s.id}" aria-label="Elimina ${r(Z(s.month))}">${A("trash",16)}</button></div></td></tr>`).join("")}</tbody></table></div>
    </section>
    <section class="card">
      <form class="row" data-form="pay-hours">
        <label class="field inline">Ore in una giornata di lavoro<input class="input slim day" name="h" inputmode="decimal" value="${r(ca(Aa(t)))}"></label>
        <button class="btn small" type="submit">Salva</button>
      </form>
    </section>`:""}`}const di=t=>{const e=String(t??"").trim();if(!e)return null;const a=U(e);return Number.isFinite(a)?a:NaN};F("lavoro",{render:Tc,afterRender:Sa,changes:{async"pay-file"(t){const e=[...t.files];if(!e.length)return;let a;try{a=await xn()}catch(c){return E("Non riesco a caricare il lettore PDF: "+c),x()}const i=[];for(const c of e)try{i.push({name:c.name,r:await Nc(c,a)})}catch(u){i.push({name:c.name,r:{format:"errore",error:String(u)}})}const n=i.filter(c=>c.r.format==="ranocchi"&&c.r.month),o=i.filter(c=>!(c.r.format==="ranocchi"&&c.r.month));if(n.length>1||n.length&&o.length){let c=0,u=0;f(b=>{for(const{r:m}of n){const w=Object.assign({},m,{source:"pdf"});delete w.format;const y=b.payslips.find(q=>q.month===m.month&&q.kind===m.kind);y?(Object.assign(y,w),N(y),u++):(b.payslips.push(Bt(w)),c++)}});const p=`${c} buste lette${u?`, ${u} aggiornate`:""}`+(o.length?`. Da inserire a mano: ${o.map(b=>b.name).join(", ")}`:"");if(o.length){const b=o[0].r;d.ui.payDraft=Object.assign(Bt({month:b.month||"",kind:b.kind||"mensile"}),{id:null,source:b.format==="immagine"?"immagine":"sconosciuto"})}h("lavoro",{},p);return}const s=i[0].r;if(s.format==="errore")return E(`Non riesco a leggere ${i[0].name}: ${s.error}`),x();const l=Object.assign({},s,{source:s.format==="ranocchi"?"pdf":s.format==="immagine"?"immagine":"sconosciuto"});delete l.format,d.ui.payDraft=Object.assign(Bt(l),{id:null}),h("lavoro")}},actions:{"pay-manual"(){d.ui.payDraft=Object.assign(Bt({month:""}),{id:null}),h("lavoro"),O("input[name=month]")},"pay-cancel"(){d.ui.payDraft=null,h("lavoro")},"pay-edit"(t){const e=d.data.payslips.find(a=>a.id===t.dataset.id);e&&(d.ui.payDraft=JSON.parse(JSON.stringify(e)),h("lavoro"),window.scrollTo(0,0))},"pay-del"(t){const e=d.data.payslips.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare la busta di ${Z(e.month).toLowerCase()}?`)||f(a=>{a.payslips=a.payslips.filter(i=>i.id!==e.id),Q(a,e.id)})}},forms:{"pay-save"(t,e){const a=d.ui.payDraft||{},i=t.get("month");if(!/^\d{4}-\d{2}$/.test(i||""))return E("Indica il mese della busta."),x();const n={};for(const[u]of qn)n[u]=di(t.get(u));for(const[u]of Nn){n[u]=Object.assign({},a[u]);for(const[p]of ra)n[u][p]=di(t.get(`${u}.${p}`))}if(Object.entries(n).find(([,u])=>typeof u=="object"&&u?Object.values(u).some(Number.isNaN):Number.isNaN(u)))return E("Controlla i numeri: usa la virgola per i decimali, es. 1.733,77"),x();const s=t.get("kind")||"mensile",l=Object.assign({},a,n,{month:i,kind:s,note:String(t.get("note")||"").trim()});let c=!1;f(u=>{const p=a.id&&u.payslips.find(m=>m.id===a.id),b=u.payslips.find(m=>m.month===i&&m.kind===s&&m!==p);if(b&&!p){Object.assign(b,l,{id:b.id}),N(b),c=!0;return}if(p){Object.assign(p,l,{id:p.id}),N(p);return}delete l.id,u.payslips.push(Bt(l))}),d.ui.payDraft=null,h("lavoro",{},c?`${Z(i)}: aggiornata la busta che c'era già`:`${Z(i)} salvata`)},"pay-hours"(t){const e=U(t.get("h"));if(!(e>0&&e<=24))return E("Scrivi le ore di una giornata, es. 8"),x();f(a=>{a.settings.workHoursDay=e}),T("Salvato")}}});const Pc=[[/\b(pin|password|passw|pwd|cvv|cvc|codice segreto|codice di sblocco|puk)\b\s*[:=]?\s*\S{3,}/i,"sembra un PIN, una password o un codice segreto"],[/\b(?:\d[ -]?){15,16}\b/,"sembra il numero completo di una carta"]];function Lc(t){for(const[e,a]of Pc)if(e.test(String(t||"")))return a;return null}function Rc(t){return`<div class="item"><div class="avatar">${r((t.name||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]).join("").toUpperCase())}</div>
    <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r([t.relation,t.phone].filter(Boolean).join(" · "))}</div></div>
    ${t.phone?`<button class="icon-btn no-print" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero di ${r(t.name)}">${A("copy",16)}</button>`:""}
    <button class="icon-btn no-print" data-action="em-del" data-list="contacts" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button></div>`}function Fc(t){return`<div class="item"><div class="text"><div class="strong">${r(t.name)}</div><div class="hint" style="white-space: pre-line">${r(t.how)}</div></div>
    ${t.phone?`<span class="money">${r(t.phone)}</span><button class="icon-btn no-print" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero">${A("copy",16)}</button>`:""}
    <button class="icon-btn no-print" data-action="em-del" data-list="cards" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${A("trash",16)}</button></div>`}function Bc(){const t=d.data,e=t.emergency,a=t.contacts.filter(i=>i.phone&&!e.contacts.some(n=>n.name===i.name));return`
    ${G(e.updatedAt?`Aggiornate il ${z(e.updatedAt.slice(0,10))} ${e.updatedAt.slice(0,4)}`:"Da compilare con calma, una volta","Emergenza",'<button class="btn no-print" data-action="em-print">Stampa</button>')}
    <div class="banner warn no-print">Qui niente PIN, password, codici segreti o numeri completi delle carte: quelli restano nell'app Password di Apple. Scrivi solo chi chiamare e cosa fare.</div>
    <div class="grid">
      <section class="card" aria-labelledby="h-emc">
        <h2 id="h-emc">Chi chiamare</h2>
        ${e.contacts.length?`<div class="list">${e.contacts.map(Rc).join("")}</div>`:'<div class="empty">Nessun contatto di emergenza.</div>'}
        <form class="form-grid no-print" data-form="em-contact">
          <label class="field">Nome<input class="input" id="emc-name" name="name" list="em-rubrica" required></label>
          <datalist id="em-rubrica">${a.map(i=>`<option value="${r(i.name)}">`).join("")}</datalist>
          <label class="field">Chi è<input class="input" name="relation" placeholder="mamma, coinquilino…"></label>
          <label class="field">Telefono<input class="input" name="phone" inputmode="tel" placeholder="dalla Rubrica se lo lasci vuoto"></label>
          <div class="row"><button class="btn primary" type="submit">Aggiungi</button></div>
        </form>
      </section>

      <section class="card" aria-labelledby="h-emk">
        <h2 id="h-emk">Se perdi il portafoglio o il telefono</h2>
        ${e.cards.length?`<div class="list">${e.cards.map(Fc).join("")}</div>`:'<div class="empty">Per ogni carta o conto: come si blocca e il numero da chiamare (lo trovi sul sito della banca o sul retro della carta).</div>'}
        <form class="stack-sm no-print" data-form="em-card">
          <div class="form-grid two">
            <label class="field">Carta o conto<input class="input" id="emk-name" name="name" placeholder="Carta Hype" required></label>
            <label class="field">Numero per il blocco<input class="input" name="phone" inputmode="tel" placeholder="dal sito o dal retro della carta"></label>
          </div>
          <label class="field">Come bloccarla<textarea class="input" name="how" rows="2" placeholder="es. dall'app: Carte → Blocca carta. Poi denuncia e richiesta nuova carta."></textarea></label>
          <button class="btn primary self-start" type="submit">Aggiungi</button>
        </form>
      </section>

      ${[["documents","Dove sono i documenti","Carta d'identità e patente nel portafoglio; passaporto nel cassetto della scrivania; copie in PDF su Drive in Documenti…"],["medical","Informazioni mediche","Gruppo sanguigno, allergie, farmaci che prendi, medico di base e suo numero…"],["notes","Altro da sapere","Chi ha una copia delle chiavi di casa, numero dell'assicurazione auto, amministratore di condominio…"]].map(([i,n,o])=>`
      <section class="card" aria-labelledby="h-em-${i}">
        <h2 id="h-em-${i}">${n}</h2>
        <div class="print-only" style="white-space: pre-line">${r(e[i]||"—")}</div>
        <form class="stack-sm no-print" data-form="em-text">
          <input type="hidden" name="k" value="${i}">
          <label class="sr-only" for="em-${i}">${n}</label>
          <textarea class="input" id="em-${i}" name="text" rows="5" placeholder="${r(o)}">${r(e[i]||"")}</textarea>
          <button class="btn small self-start" type="submit">Salva</button>
        </form>
      </section>`).join("")}
    </div>`}function Qe(t,e){for(const a of e){const i=t.querySelector(`[name="${a}"]`),n=i&&Lc(i.value);if(n)return i.setCustomValidity(`Non salvato: ${n}. Qui scrivi solo cosa fare, non i codici.`),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0}),!1}return!0}F("emergenza",{render:Bc,actions:{"em-print"(){window.print()},"em-del"(t){const e=t.dataset.list;["contacts","cards"].includes(e)&&f(a=>{a.emergency[e]=a.emergency[e].filter(i=>i.id!==t.dataset.id),Q(a,t.dataset.id),N(a.emergency)})}},forms:{"em-contact"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;let i=String(t.get("phone")||"").trim();if(!i){const o=d.data.contacts.find(s=>s.name.toLowerCase()===a.toLowerCase());o&&(i=o.phone||"")}const n=String(t.get("relation")||"").trim();Qe(e,["name","relation","phone"])&&(f(o=>{o.emergency.contacts.push({id:W(),name:a,relation:n,phone:i}),N(o.emergency)}),h("emergenza",{},`${a} aggiunto`),O("#emc-name"))},"em-card"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;const i=String(t.get("how")||"").trim(),n=String(t.get("phone")||"").trim();Qe(e,["name","how","phone"])&&(f(o=>{o.emergency.cards.push({id:W(),name:a,how:i,phone:n}),N(o.emergency)}),h("emergenza",{},`${a} aggiunta`))},"em-text"(t,e){const a=t.get("k");if(!["documents","medical","notes"].includes(a))return;const i=String(t.get("text")||"");Qe(e,["text"])&&(f(n=>{n.emergency[a]=i,N(n.emergency)}),h("emergenza",{},"Salvato"))}}});function Vc(t){const e=Pi(t.settings),a=e==="rune",i=Ti(t.settings.rune),n=ta[e],o=(l,c,u,p,b,m)=>`
    <label class="field">${c} <span class="hint">${m(i[l])}</span>
      <input type="range" class="range" data-change="rune-opt" data-k="${l}" min="${u}" max="${p}" step="${b}" value="${i[l]}"></label>`;let s=`<div class="hint">${r(n.hint)}</div>`;if(a)s=`
      <div class="stack-sm">
        <fieldset class="plain">
          <legend class="label">Colore</legend>
          <div class="swatches">${Fs.map((l,c)=>`<label class="swatch" style="--c:${l}"><input type="radio" name="rune-color" value="${l}" data-change="rune-opt" data-k="color" ${i.color===l?"checked":""}><span class="sr-only">Colore ${c+1}</span></label>`).join("")}</div>
        </fieldset>
        <div class="form-grid two">
          <label class="field">Velocità<select class="input" data-change="rune-opt" data-k="speed">${Object.keys(Bs).map(l=>`<option ${i.speed===l?"selected":""}>${l}</option>`).join("")}</select></label>
          <label class="field">Anelli<select class="input" data-change="rune-opt" data-k="rings">${[1,2,3,4].map(l=>`<option ${i.rings===l?"selected":""}>${l}</option>`).join("")}</select></label>
        </div>
        ${o("intensity","Intensità",.15,1,.05,l=>Math.round(l*100)+"%")}
        <label class="check small"><input type="checkbox" data-change="rune-opt" data-k="glow" ${i.glow?"checked":""}>Bagliore</label>
        ${o("centerX","Posizione orizzontale",0,100,1,l=>l+"%")}
        ${o("centerY","Posizione verticale",20,120,1,l=>l+"%")}
        ${o("size","Grandezza",.5,1.6,.05,l=>Math.round(l*100)+"%")}
        ${o("panelOpacity","Opacità delle schede",.4,1,.02,l=>Math.round(l*100)+"%")}
        <button class="link self-start" data-action="rune-reset">Torna ai valori di partenza</button>
        <div class="hint">Se il PC rallenta, prova velocità "ferma" o togli il bagliore. Con "Riduci animazioni" di Windows lo sfondo resta fermo.</div>
      </div>`;else if(n.colors){const l=Li(t.settings,e);s=`
      <div class="stack-sm">
        <div class="hint">${r(n.hint)}</div>
        <fieldset class="plain">
          <legend class="label">Colore</legend>
          <div class="swatches">${n.colors.map((c,u)=>`<label class="swatch" style="--c:${c}"><input type="radio" name="theme-color" value="${c}" data-change="theme-accent" ${l===c?"checked":""}><span class="sr-only">Colore ${u+1}</span></label>`).join("")}</div>
        </fieldset>
        ${e==="carta"?"":`<label class="check small"><input type="checkbox" data-change="theme-motion" ${t.settings.themeMotion!==!1?"checked":""}>Sfondo animato</label>`}
      </div>`}return`
    <section class="card" aria-labelledby="h-look">
      <div class="card-head"><h2 id="h-look">Aspetto</h2></div>
      <fieldset class="plain">
        <legend class="label">Tema</legend>
        <div class="pills small">${Object.entries(ta).map(([l,c])=>`<label class="pill"><input type="radio" name="theme" value="${l}" data-change="theme-set" ${e===l?"checked":""}><span>${r(c.label)}</span></label>`).join("")}</div>
      </fieldset>
      ${s}
      <fieldset class="plain">
        <legend class="label">Effetti grafici su questo computer</legend>
        <div class="pills small">${Object.entries(Vs).map(([l,c])=>`<label class="pill"><input type="radio" name="effects" value="${l}" data-change="theme-effects" ${qa()===l?"checked":""}><span>${c}</span></label>`).join("")}</div>
        <div class="hint">Leggeri: niente sfocature né animazioni, stesso aspetto (utile su PC poco potenti e su Linux). Automatici = leggeri su Linux, completi su Windows. Vale solo per questo computer. Ora: <strong>${ea()?"leggeri":"completi"}</strong>${qa()==="auto"&&Us?" (Linux)":""}.</div>
      </fieldset>
    </section>`}function Uc(t){const e=t.settings.cifrario||[],a=d.ui.cipherKind||"abbr",i=d.ui.cipherDest||"expense",n=l=>{if(l.kind==="abbr")return`diventa «${l.to}»`;if(l.kind==="full")return`scrive «${l.to}»`;if(l.kind==="area")return`reparto ${l.area}`;const c=l.category?` · ${l.category}`:l.habit?` · ${l.habit}`:l.area?` · ${l.area}`:"";return`va in ${na[l.dest]||l.dest}${c}`},o=d.ui.cipherTry?Ji(d.ui.cipherTry,t):null,s=a!=="dest"?"":i==="expense"?`<label class="field">Categoria<select class="input" name="category">${t.categories.out.map(l=>`<option>${r(l)}</option>`).join("")}</select></label>`:i==="income"?`<label class="field">Categoria<select class="input" name="category">${t.categories.in.map(l=>`<option>${r(l)}</option>`).join("")}</select></label>`:i==="habit"?`<label class="field">Abitudine<select class="input" name="habit">${t.habits.filter(l=>!l.archived).map(l=>`<option>${r(l.name)}</option>`).join("")||'<option value="">Nessuna abitudine</option>'}</select></label>`:i==="shop"?'<label class="field">Reparto (facoltativo)<input class="input" name="area" list="cipher-areas" placeholder="es. Frigo"></label>':"";return`
    <section class="card span-2" aria-labelledby="h-cipher" id="cifrario">
      <div class="card-head"><h2 id="h-cipher">Cifrario di Annota al volo</h2><span class="sub">${e.length} ${e.length===1?"parola":"parole"}</span></div>
      <div class="hint">Le tue parole e cosa vogliono dire. Valgono prima delle regole incluse, sul PC e sul telefono. Si riempie anche da solo: quando correggi il tipo di una voce, Annota ti chiede se ricordarlo.</div>
      ${e.length?`<div class="list">${e.map(l=>`
        <div class="item"><span class="tag">${r(Ra[l.kind]||l.kind)}</span>
          <div class="text"><strong>${r(l.word)}</strong> <span class="sub">${r(n(l))}</span></div>
          <button class="icon-btn" data-action="cipher-del" data-id="${l.id}" aria-label="Elimina ${r(l.word)}">${A("trash",16)}</button></div>`).join("")}</div>`:'<div class="empty">Ancora vuoto. Esempi: «lav» → lavatrice, «benza» → uscita Trasporti, «parmigiano» → reparto Frigo, «pacco» → "Portare pacco al punto di ritiro domani".</div>'}
      <form data-form="cipher-add" class="stack-sm divider-top">
        <div class="form-grid two">
          <label class="field">Parola<input class="input" name="word" required placeholder="es. benza" autocomplete="off"></label>
          <label class="field">Tipo<select class="input" name="kind" data-change="cipher-kind">${Object.entries(Ra).map(([l,c])=>`<option value="${l}" ${l===a?"selected":""}>${r(c)}</option>`).join("")}</select></label>
          ${a==="abbr"?'<label class="field">Diventa<input class="input" name="to" required placeholder="es. lavatrice"></label>':""}
          ${a==="full"?'<label class="field">Scrive al suo posto<input class="input" name="to" required placeholder="es. Portare pacco al punto di ritiro domani"></label>':""}
          ${a==="area"?'<label class="field">Reparto<input class="input" name="area" required list="cipher-areas" placeholder="es. Frigo"></label>':""}
          ${a==="dest"?`<label class="field">Va in<select class="input" name="dest" data-change="cipher-dest">${Object.entries(na).map(([l,c])=>`<option value="${l}" ${l===i?"selected":""}>${r(c)}</option>`).join("")}</select></label>${s}`:""}
        </div>
        <datalist id="cipher-areas">${t.shopAreas.map(l=>`<option value="${r(l)}">`).join("")}</datalist>
        <div class="hint">${a==="abbr"?"Sostituisce la parola dove la scrivi: «lav scura stasera» → «lavatrice scura stasera».":a==="full"?"Solo quando scrivi esattamente la parola: «pacco» → tutta la frase, con date e orari.":a==="area"?"Quando la parola finisce nella spesa, va in quel reparto.":"Quando la parola compare, la voce va lì (puoi sempre cambiarla nell'anteprima)."}</div>
        <button class="btn primary self-start" type="submit">Aggiungi al cifrario</button>
      </form>
      <form data-form="cipher-try" class="row divider-top">
        <label class="sr-only" for="cipher-try">Prova una frase</label>
        <input class="input grow" id="cipher-try" name="t" value="${r(d.ui.cipherTry||"")}" placeholder="Prova una frase, es. benza 40" autocomplete="off">
        <button class="btn" type="submit">Prova</button>
      </form>
      ${o?`<div class="sub">→ ${r(o.dest)}${o.via&&o.via.length?` · dal tuo cifrario: ${r(o.via.map(l=>l.word).join(", "))}`:" · regole incluse"}${o.text||o.note||o.name||o.items?": "+r(o.text||o.note||o.name||o.items.join(", ")):""}${o.category?" · "+r(o.category):""}</div>`:""}
    </section>`}function _c(){const t=d.data;return`
    ${G("Preferenze","Impostazioni")}
    <div class="grid">
      ${Vc(t)}
      ${Uc(t)}
      <section class="${Se()?"ph-hide ":""}card">
        <h2>Profilo e budget</h2>
        <form data-form="profile" class="stack">
          <label class="field">Il tuo nome<input class="input" name="name" value="${r(t.profile.name)}" placeholder="Il tuo nome"></label>
          <label class="field">Budget mensile per le spese (0 = nessuno)<input class="input" name="budget" inputmode="decimal" value="${r(String(t.settings.budget||0).replace(".",","))}"></label>
          <label class="field">I tuoi nomi come intestatario (uno per riga)
            <textarea class="input" name="ownNames" rows="2" placeholder="Mario Rossi">${r(t.settings.ownNames.join(`
`))}</textarea></label>
          <div class="hint">Servono a riconoscere i bonifici tra i tuoi conti come giroconti.</div>
          <button class="btn primary self-start" type="submit">Salva</button>
        </form>
      </section>

      <section class="card">
        <h2>Meteo</h2>
        <div class="sub">Città attuale: ${r(t.profile.city||"non impostata")}</div>
        <form data-form="city" class="row">
          <label class="sr-only" for="city">Città</label>
          <input class="input grow" id="city" name="city" placeholder="Bologna" required>
          <button class="btn" type="submit">Imposta</button>
        </form>
      </section>

      ${Ot.settingsCard?Ot.settingsCard():""}

      <section class="card ph-pc-only">
        <h2>Avvio</h2>
        <label class="check"><input type="checkbox" data-change="autostart" ${d.autostart?"checked":""}><span>Apri la dashboard all'accensione del PC</span></label>
        <div class="hint">Vale solo per questo computer. Attivalo dalla versione installata, non da quella di prova.</div>
        <div class="hint">Chiudere la finestra non esce: la dashboard resta nell'area di notifica (vicino all'orologio). Da lì: Apri, Annota al volo (Ctrl+Alt+Spazio), HUD, Blocca, Esci.</div>
        <button class="btn self-start" data-action="hud-toggle">${A("target",16)}Mostra / nascondi l'HUD sul desktop</button>
      </section>

      <section class="card">
        <h2>Categorie</h2>
        <form data-form="categories" class="stack">
          <label class="field">Uscite (una per riga)<textarea class="input" name="out" rows="8">${r(t.categories.out.join(`
`))}</textarea></label>
          <label class="field">Entrate (una per riga)<textarea class="input" name="in" rows="4">${r(t.categories.in.join(`
`))}</textarea></label>
          <button class="btn primary self-start" type="submit">Salva categorie</button>
        </form>
      </section>

      <section class="card ph-pc-only">
        <div class="card-head"><h2>Regole di importazione</h2><span class="sub">${t.rules.length}</span></div>
        ${t.rules.length?`<div class="list">${t.rules.map((e,a)=>`
          <div class="item"><div class="text"><div>«${r(e.match)}»</div><div class="hint">→ ${r(e.category)}</div></div>
          <button class="icon-btn" data-action="del-rule" data-i="${a}" aria-label="Elimina la regola ${r(e.match)}">${A("trash",16)}</button></div>`).join("")}</div>`:`<div class="empty">Le regole nascono da sole quando correggi una categoria durante l'importazione.</div>`}
      </section>

      <section class="card ph-pc-only">
        <h2>Archivio dati</h2>
        <div class="path">${r(d.path)}</div>
        <div class="hint">Ogni giorno viene salvata una copia nella cartella "backup" accanto al file (ultimi 30 giorni).</div>
        <div class="row">
          <button class="btn" data-action="lock">Blocca ora</button>
          <button class="btn" data-action="back-setup">Cambia file</button>
        </div>
      </section>

      <section class="card">
        <h2>Cambia password</h2>
        <form data-form="password" class="stack">
          <label class="field">Nuova password (almeno ${Je} caratteri)<input class="input" type="password" name="p1" autocomplete="new-password" required></label>
          <label class="field">Ripeti la nuova password<input class="input" type="password" name="p2" autocomplete="new-password" required></label>
          <button class="btn primary self-start" type="submit">Cambia password</button>
        </form>
      </section>
    </div>`}F("impostazioni",{render:_c,actions:{"del-rule"(t){f(e=>{e.rules.splice(Number(t.dataset.i),1)})},"rune-reset"(){f(t=>{t.settings.rune=Object.assign({},Da)})},"cipher-del"(t){f(e=>{e.settings.cifrario=(e.settings.cifrario||[]).filter(a=>a.id!==t.dataset.id)})}},changes:{"cipher-kind"(t){d.ui.cipherKind=t.value,x()},"cipher-dest"(t){d.ui.cipherDest=t.value,x()},"theme-set"(t){f(e=>{e.settings.theme=t.value in ta?t.value:"classico",e.settings.rune||(e.settings.rune=Object.assign({},Da))})},"theme-accent"(t){const e=Pi(d.data.settings);f(a=>{a.settings.themeAccent=Object.assign({},a.settings.themeAccent,{[e]:t.value})})},"theme-motion"(t){f(e=>{e.settings.themeMotion=t.checked})},"theme-effects"(t){Rs(t.value),x()},"rune-opt"(t){const e=t.dataset.k,a=t.type==="checkbox"?t.checked:["speed","color"].includes(e)?t.value:Number(t.value);f(i=>{i.settings.rune=Ti(Object.assign({},i.settings.rune,{[e]:a}))})},async autostart(t){try{t.checked?await Ts():await Ps(),d.autostart=await Ls(),T(d.autostart?"Si aprirà all'accensione del PC":"Avvio automatico disattivato")}catch(e){E("Non è stato possibile cambiare l'avvio automatico: "+e)}x()}},forms:{"cipher-add"(t,e){const a=String(t.get("word")||"").trim().toLowerCase(),i=String(t.get("kind")||"abbr");if(!a)return;const n=$i({word:a,kind:i});if((i==="abbr"||i==="full")&&(n.to=String(t.get("to")||"").trim()),i==="area"&&(n.area=String(t.get("area")||"").trim()),i==="dest"&&(n.dest=String(t.get("dest")||"todo"),n.category=String(t.get("category")||""),n.habit=String(t.get("habit")||""),n.area=String(t.get("area")||"").trim()),(i==="abbr"||i==="full")&&!n.to){const o=e.to;o.setCustomValidity("Scrivi cosa vuol dire"),o.reportValidity(),o.addEventListener("input",()=>o.setCustomValidity(""),{once:!0});return}T(`«${a}» aggiunta al cifrario`),f(o=>{o.settings.cifrario=(o.settings.cifrario||[]).filter(s=>!(Y(s.word)===Y(a)&&s.kind===i)).concat([n])})},"cipher-try"(t){d.ui.cipherTry=String(t.get("t")||"").trim(),x()},profile(t,e){const a=U(t.get("budget")||"0");if(!(a>=0)){const n=e.budget;n.setCustomValidity("Inserisci un numero, es. 1200"),n.reportValidity(),n.addEventListener("input",()=>n.setCustomValidity(""),{once:!0});return}const i=String(t.get("ownNames")||"").split(`
`).map(n=>n.trim()).filter(Boolean);T("Impostazioni salvate"),f(n=>{n.profile.name=String(t.get("name")||"").trim(),n.settings.budget=a,n.settings.ownNames=i})},async city(t){try{const e=await Ms(String(t.get("city")).trim());T("Città impostata: "+e.city),f(a=>Object.assign(a.profile,e)),Os()}catch(e){E(e.message),x()}},categories(t){const e=n=>[...new Set(String(n||"").split(`
`).map(o=>o.trim()).filter(Boolean))],a=e(t.get("out")),i=e(t.get("in"));if(!a.length||!i.length)return E("Serve almeno una categoria per tipo."),x();T("Categorie salvate"),f(n=>{n.categories.out=a,n.categories.in=i})},async password(t){const e=t.get("p1"),a=t.get("p2");if(e.length<Je)return E(`La password deve avere almeno ${Je} caratteri.`),x();if(e!==a)return E("Le due password non coincidono."),x();await Ns(e),T(d.saveState==="err"?"":"Password cambiata. Aggiornala anche nell'app Password."),x()}}});const xa=typeof window<"u"&&"__TAURI_INTERNALS__"in window,ui=3,pi={r:0,o:1,a:2};function Gc(){if(d.screen!=="main"||!d.data)return{locked:!0,lite:ea()};const t=d.data,e=k(),a=t.settings,i=t.todos.filter(g=>g.due&&g.due<=e&&(!g.done||g.doneAt===e)).sort((g,$)=>Number(g.done)-Number($.done)||g.due.localeCompare($.due)||(g.time||"99").localeCompare($.time||"99")),n=i.slice(0,6).map(g=>({id:g.id,text:g.text,done:!!g.done,late:g.due<e,meta:g.due<e?g.due===P(e,-1)?"ieri":z(g.due):g.time||"oggi"})),o=i.filter(g=>!g.done).length,s=i.filter(g=>!g.done&&g.due<e).length,l=new Date().toTimeString().slice(0,5),c=t.todos.filter(g=>!g.done&&g.due&&(g.due>e||g.due===e&&g.time&&g.time>l)).sort((g,$)=>g.due.localeCompare($.due)||(g.time||"99").localeCompare($.time||"99")),u=t.deadlines.filter(g=>!g.archived&&g.due>e).sort((g,$)=>g.due.localeCompare($.due))[0];let p=null;const b=c[0];b&&(p={date:b.due,when:(b.due===e?"OGGI":pt(b.due).toUpperCase())+(b.time?" · "+b.time:""),text:b.text}),u&&(!p||u.due<p.date)&&(p={date:u.due,when:pt(u.due).toUpperCase(),text:"Scade: "+u.name});const m=pn(t).filter(g=>g.tag!=="RITARDO"),w=m.filter(g=>!g.done).sort((g,$)=>pi[g.level]-pi[$.level]),y=[...w.slice(0,ui),...m.filter(g=>g.done)],q=st(e),D=t.habits.filter(g=>!g.archived).map(g=>({id:g.id,name:g.name,done:gt(t,g,e),perWeek:g.perWeek,week:xt(t,g,q)}));return{locked:!1,accent:Li(a,"comando"),warm:"#ffb02e",motion:a.themeMotion!==!1,lite:ea(),tasks:n,more:Math.max(0,i.length-n.length),open:o,late:s,next:p,habits:D,alerts:y.map(g=>({key:g.key||null,title:g.title,meta:g.meta,level:g.level,nav:g.nav,done:!!g.done})),alertCount:w.length,alertMore:Math.max(0,w.length-ui),alertLevel:w.length?w[0].level:null}}let mi=0;function gi(){xa&&(clearTimeout(mi),mi=setTimeout(()=>{_s("hud","hud-data",Gc()).catch(()=>{})},150))}xa&&($t(),$t(),$t(),$t(),$t(),$t(),$t(),Ot.after.push(()=>gi()),setInterval(gi,6e4));document.addEventListener("keydown",t=>{if(t.key==="Escape"&&d.ui.capOverlay){t.preventDefault(),wa();return}t.key==="Escape"&&document.activeElement&&document.activeElement.closest&&document.activeElement.closest(".cap-bar")&&document.activeElement.blur(),t.ctrlKey&&t.altKey&&t.code==="Space"&&d.screen==="main"&&(t.preventDefault(),nn())});F("desktop",{actions:{async"hud-toggle"(){if(!xa){T("L'HUD c'è solo nell'app (npm run tauri dev o installata)"),x();return}try{const t=await ee("hud_toggle");T(t?"HUD sul desktop acceso":"HUD nascosto: lo riaccendi da qui o dall'icona vicino all'orologio"),x()}catch(t){T("HUD non disponibile: "+t),x()}}}});Gs();
