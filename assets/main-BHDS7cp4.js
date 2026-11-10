const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./app-BOsQIt_X.js","./index-DdCfG_4c.js","./index-CkYzcNTs.css","./app-I8jMOq2D.css"])))=>i.map(i=>d[i]);
import{r as L,S as d,s as q,u as f,p as F,f as P,c as bs,n as ne,m as K,t as k,a as O,e as r,b as ft,d as Y,g as Ne,h as I,i as nt,j as S,R as ca,k as h,l as M,o as ct,q as It,v as Rt,w as b,x as fs,y as Zt,z as Ri,A as rt,B as U,C as Oe,D as $s,E as ys,F as D,G as A,H as ws,I as G,J as qe,K as ks,L as Yt,M as X,N as ut,O as Ss,P as xs,Q as se,T as As,U as Te,V as oe,W as Is,X as Li,Y as xa,Z as ra,_ as Aa,$ as Xt,a0 as Cs,a1 as Fi,a2 as Ia,a3 as $e,a4 as Ca,a5 as Es,a6 as Wa,a7 as zs,a8 as Ds,a9 as da,aa as st,ab as Ct,ac as js,ad as ht,ae as Ns,af as Jt,ag as Ea,ah as Me,ai as Bi,aj as Pe,ak as Vi,al as Lt,am as Os,an as qs,ao as Ui,ap as Gi,aq as _i,ar as Wi,as as pt,at as Ts,au as ye,av as H,aw as Ms,ax as Ps,ay as Ha,az as xt,aA as Hi,aB as qt,aC as te,aD as ee,aE as bt,aF as Rs,aG as we,aH as _t,aI as Ls,aJ as Fs,aK as et,aL as Bs,aM as Vs,aN as Ki,aO as ke,aP as Qi,aQ as We,aR as Yi,aS as Zi,aT as ua,aU as Xi,aV as ve,aW as Us,aX as Gs,aY as _s,aZ as Ws,a_ as Hs,a$ as Ks,b0 as Qs,b1 as Ys,b2 as pa,b3 as Ji,b4 as Zs,b5 as Xs,b6 as tn,b7 as Js,b8 as za,b9 as en,ba as to,bb as an,bc as he,bd as Da,be as eo,bf as nn,bg as ao,bh as io,bi as sn,bj as no,bk as ae,bl as so,bm as Tt,bn as oo,bo as Wt,bp as lo,bq as co,br as ma,bs as ro,bt as uo,bu as po,bv as mo,bw as go,bx as vo,by as on,bz as ho,bA as ln,bB as ga,bC as Ka,bD as bo,bE as fo,bF as cn,bG as $o,bH as Qa,bI as va,bJ as yo,bK as wt,bL as wo,bM as ko}from"./app-BOsQIt_X.js";import{_ as Ya}from"./index-DdCfG_4c.js";L("common",{actions:{"toggle-todo"(t){f(e=>{const a=e.todos.find(i=>i.id===t.dataset.id);a&&(a.done=!a.done,a.doneAt=a.done?k():null,O(a))})},"del-todo"(t){f(e=>{e.todos=e.todos.filter(a=>a.id!==t.dataset.id),K(e,t.dataset.id)})},"del-tx"(t){const e=d.data.transactions.find(a=>a.id===t.dataset.id);e&&f(a=>{if(a.transactions=a.transactions.filter(i=>i.id!==e.id&&!(e.pairId&&i.pairId===e.pairId)),a.ops=a.ops.filter(i=>i.txId!==e.id),e.pairId&&(a.goalMoves=a.goalMoves.filter(i=>i.pairId!==e.pairId)),e.recurringId){const i=a.recurring.find(s=>s.id===e.recurringId),n=e.dueDate||e.date;i&&i.done&&i.done[n]&&(i.done=Object.assign({},i.done),delete i.done[n])}})},async copy(t){try{await navigator.clipboard.writeText(t.dataset.text),q("Copiato")}catch{q("Copia non riuscita")}f(()=>{})}},forms:{"add-todo"(t){const e=String(t.get("text")||"").trim();e&&(f(a=>a.todos.push(ne({text:e,due:t.get("due")||null}))),P("#todo-text"))},"confirm-rec"(t,e,a){const i=d.data.recurring.find(o=>o.id===t.get("id")),n=t.get("date");if(!i||!n)return;if(a&&a.name==="skip"){q(`${i.name}: saltato per questa volta`),f(()=>{i.done=Object.assign({},i.done,{[n]:"skip"})});return}const s=F(t.get("qty")||"");q(`${i.name} registrato con la data di oggi`),f(o=>bs(o,i,n,s))}}});function W(t,e,a=""){return`
    <header class="head">
      <div><div class="date">${r(t)}</div><h1>${r(e)}</h1></div>
      ${a?`<div class="row">${a}</div>`:""}
    </header>
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}`}function j(t,e,a="",i=""){return`<div class="metric"><div class="label">${r(t)}</div><div class="value ${a}">${e}</div>${i?`<div class="hint">${i}</div>`:""}</div>`}function at(t,{includeArchived:e=!1}={}){const a=e?d.data.accounts:ft(d.data),i=t||Y(d.data)?.id;return Ne()?a.filter(n=>n.id===i).map(n=>`<option value="${n.id}" selected>Conto principale</option>`).join(""):a.map(n=>`<option value="${n.id}" ${n.id===i?"selected":""}>${r(n.name)}${n.bank?" · "+r(n.bank):""}</option>`).join("")}function Ut(t,e,a=!1){const i=t==="in"?d.data.categories.in:d.data.categories.out,n=a?["Giroconto","Investimenti"]:[];return[...i,...n].map(s=>`<option ${s===e?"selected":""}>${r(s)}</option>`).join("")}function rn(t,e,a=null,{limit:i=0}={}){let n=t.map(([o,l,c])=>({name:o,amt:l,count:c,b:a&&a[o]?a[o]:0}));if(a)for(const[o,l]of Object.entries(a))l>0&&!n.some(c=>c.name===o)&&n.push({name:o,amt:0,count:0,b:l});if(i&&(n=n.filter(o=>o.amt>0||He(o)>=.8).sort((o,l)=>(He(l)>=.8)-(He(o)>=.8)||l.amt-o.amt).slice(0,i)),!n.length)return'<div class="empty">Nessuna spesa registrata.</div>';const s=Math.max(...n.filter(o=>!o.b).map(o=>o.amt),1);return n.map(o=>{const l=o.b?o.amt/o.b:0,c=o.b?l>1?"over":l>=.8?"near":"cat":"cat",u=o.b?Math.min(100,Math.round(l*100)):Math.round(o.amt/s*100),p=o.b?`<span class="money">${h(o.amt)} <span class="hint">di ${h(o.b)}</span>${l>1?' <span class="tag bad">oltre</span>':l>=.8?' <span class="tag warn">quasi</span>':""}</span>`:`<span class="money">${h(o.amt)}</span>`;return`
    <div>
      <div class="cat-row"><span>${r(o.name)}${o.count?` <span class="hint">· ${o.count}</span>`:""}</span>${p}</div>
      <div class="progress ${c}" ${o.b?`role="progressbar" aria-valuenow="${Math.round(l*100)}" aria-valuemin="0" aria-valuemax="100" aria-label="${r(o.name)}: ${Math.round(l*100)}% del limite"`:""}><div style="width:${u}%"></div></div>
    </div>`}).join("")+""}const He=t=>t.b?t.amt/t.b:-1;function dn(t,{showAccount:e=!1,del:a=!1}={}){const i=t.transfer?"gir":t.type==="in"?"in":"",n=[t.category,e?nt(d.data,t.accountId):""].filter(Boolean).join(" · ");return`
    <div class="item">
      <div class="when">${r(I(t.date))}</div>
      <div class="text"><div>${r(t.note||t.category)}</div><div class="hint">${r(n)}</div></div>
      <span class="money ${i}">${ct(t.type==="in"?t.amount:-t.amount)}</span>
      ${a?`<button class="icon-btn" data-action="del-tx" data-id="${t.id}" aria-label="Elimina movimento ${r(t.note||"")}">${S("trash",16)}</button>`:""}
    </div>`}function ja(t){const e=ca[t]||ca.out;return`<span class="tag ${e.tagCls}">${r(e.label)}</span>`}function le(t){return t.type==="in"?"+ "+h(t.amount):t.type==="out"?"− "+h(t.amount):h(t.amount)}function So(t){if(!t.due)return null;const e=k();return t.due<e?{cls:"bad",label:"scaduta"}:t.due===e?{cls:"warn",label:"oggi"}:t.due===M(e,1)?{cls:"",label:"domani"}:{cls:"",label:I(t.due)}}function Se(t){return[...t].sort((e,a)=>(e.due||"9999").localeCompare(a.due||"9999")||(e.time||"99").localeCompare(a.time||"99")||(e.createdAt||"").localeCompare(a.createdAt||""))}function ie(t){const e=t.done?null:So(t);return`
    <div class="item ${t.done?"done":""}">
      <button class="box ${t.done?"on":""}" data-action="toggle-todo" data-id="${t.id}" aria-pressed="${t.done}" aria-label="Segna come fatto: ${r(t.text)}">${t.done?S("check",14,3):""}</button>
      <span class="text">${r(t.text)}</span>
      ${e?`<span class="tag ${e.cls}">${r(e.label)}${t.time?" · "+r(t.time):""}</span>`:""}
      <button class="icon-btn" data-action="del-todo" data-id="${t.id}" aria-label="Elimina ${r(t.text)}">${S("trash",16)}</button>
    </div>`}function un(t){return`
    <form data-form="add-todo" class="row">
      <label class="sr-only" for="todo-text">Nuova attività</label>
      <input class="input grow" id="todo-text" name="text" placeholder="Nuova attività" required>
      <label class="sr-only" for="todo-due">Scadenza</label><input class="input date" id="todo-due" type="date" name="due">
      <button class="btn primary" type="submit">Aggiungi</button>
    </form>`}function Na({r:t,date:e}){const a=t.type==="pac";return`
    <form class="item" data-form="confirm-rec">
      <input type="hidden" name="id" value="${t.id}"><input type="hidden" name="date" value="${e}">
      <div class="when">${r(I(e))}</div>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${ja(t.type)} ${r(nt(d.data,t.accountId))}</div></div>
      ${a?`<label class="sr-only" for="q-${t.id}-${e}">Quote acquistate (facoltativo)</label><input class="input qty" id="q-${t.id}-${e}" name="qty" inputmode="decimal" placeholder="quote">`:""}
      <span class="money">${le(t)}</span>
      <button class="btn small" type="submit">Conferma</button>
      <button class="icon-btn" type="submit" name="skip" value="1" aria-label="Salta questa volta">${S("right",16)}</button>
    </form>`}const xo=3*36e5,Ao=t=>{const e=new Date(Date.now()-xo).toISOString();return t.shopping.filter(a=>!a.need&&a.boughtAt&&a.boughtAt>=e)};function Io(){return`<datalist id="shop-areas">${d.data.shopAreas.map(t=>`<option value="${r(t)}">`).join("")}</datalist>`}function Ke(t,e){t.shopAreas.includes(e)||t.shopAreas.splice(Math.max(0,t.shopAreas.length-1),0,e)}function Co(t){return Ri(t,Zt(t)).map(([e,a])=>`${e}:
`+a.map(i=>`- ${i.name}${i.note?" ("+i.note+")":""}`).join(`
`)).join(`

`)}function Eo(t){const e=!t.need;return`
    <div class="item ${e?"done":""}" data-name="${r(t.name.toLowerCase())}">
      <button class="box ${e?"on":""}" data-action="${e?"shop-undo":"shop-buy"}" data-id="${t.id}" aria-pressed="${e}"
        aria-label="${e?"Rimetti da prendere":"Preso"}: ${r(t.name)}">${e?S("check",14,3):""}</button>
      <div class="text"><div>${r(t.name)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}</div>
      ${t.once?'<span class="tag">una volta</span>':""}
    </div>`}function zo(t){return`
    <div class="item" data-name="${r(t.name.toLowerCase())}">
      <div class="text"><div>${r(t.name)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}</div>
      ${t.need?`<span class="tag warn">da prendere</span><button class="btn small" data-action="shop-have" data-id="${t.id}">Ce l'ho</button>`:`<button class="btn small" data-action="shop-need" data-id="${t.id}" aria-label="Finito: ${r(t.name)}">Finito</button>`}
      <button class="icon-btn" data-action="shop-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${S("edit",16)}</button>
      <button class="icon-btn" data-action="shop-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button>
    </div>`}function Za(t,e){return Ri(d.data,t).map(([a,i])=>`
    <div class="shop-group">
      <h3 class="group-title">${r(a)} <span class="hint">${i.length}</span></h3>
      <div class="list">${i.map(e).join("")}</div>
    </div>`).join("")}function pn(t="shop-quick"){return`
    <form data-form="shop-quick" class="row">
      <label class="sr-only" for="${t}">Aggiungi alla spesa</label>
      <input class="input grow" id="${t}" name="name" placeholder="Cosa è finito?" autocomplete="off" required>
      <button class="btn" type="submit">${S("plus",16)}Da prendere</button>
    </form>`}function Do(t=14){const e=Zt(d.data).sort((a,i)=>a.name.localeCompare(i.name,"it"));return e.length?`<div class="shop-chips">${e.slice(0,t).map(a=>`
    <button class="chip" data-action="shop-buy" data-id="${a.id}" title="Segna come preso">${r(a.name)}</button>`).join("")}
    ${e.length>t?`<span class="hint">e altre ${e.length-t}</span>`:""}</div>`:'<div class="empty">Non manca niente.</div>'}function jo(){const t=d.data,e=d.ui.shopTab||"lista",a=Zt(t),i=d.ui.shopEdit?t.shopping.find(u=>u.id===d.ui.shopEdit):null,n=t.shopping.filter(u=>!u.once||u.need),s=Ao(t),o=`
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
      ${Io()}
    </section>`,l=`
    <div class="pills small" role="tablist">
      <button class="chip ${e==="lista"?"":"off"}" role="tab" aria-selected="${e==="lista"}" data-action="shop-tab" data-tab="lista">Da prendere · ${a.length}</button>
      <button class="chip ${e==="tutto"?"":"off"}" role="tab" aria-selected="${e==="tutto"}" data-action="shop-tab" data-tab="tutto">Tutto quello che uso · ${n.length}</button>
    </div>`;let c;if(e==="lista"){const u=[...a,...s];c=`
      <section class="card">
        <div class="card-head"><h2>Al supermercato</h2>
          ${a.length?'<button class="link" data-action="shop-copy">Copia la lista</button>':""}</div>
        ${u.length?Za(u,Eo):'<div class="empty">Non manca niente. Quando una cosa finisce, segnala da "Tutto quello che uso" o scrivila qui sotto.</div>'}
        ${s.length?`<div class="hint">Le cose spuntate tornano in "ce l'ho". Restano qui barrate per qualche ora, nel caso ti sia sbagliato.</div>`:""}
        ${pn("shop-quick-list")}
      </section>`}else c=`
      <section class="card">
        <div class="card-head"><h2>Tutto quello che uso</h2>
          <label class="sr-only" for="shop-filter">Cerca</label>
          <input class="input slim" id="shop-filter" type="search" placeholder="Cerca…" value="${r(d.ui.shopFilter||"")}" autocomplete="off">
        </div>
        ${n.length?Za(n,zo):'<div class="empty">Elenco vuoto. Aggiungi le cose che compri di solito: latte, caffè, detersivo…</div>'}
        <div class="empty" id="shop-nores" hidden>Nessuna voce trovata.</div>
      </section>`;return`
    ${W(a.length?`${a.length} da prendere`:"Non manca niente","Spesa",l)}
    <div class="split">
      <div class="grow-2 stack stack-lg">${c}</div>
      <div class="grow-1 stack stack-lg">${o}</div>
    </div>`}function Xa(){const t=document.getElementById("shop-filter");if(!t)return;const e=t.value.trim().toLowerCase();let a=0;for(const n of document.querySelectorAll(".shop-group")){let s=0;for(const o of n.querySelectorAll(".item[data-name]")){const l=!e||o.dataset.name.includes(e);o.hidden=!l,l&&s++}n.hidden=s===0,a+=s}const i=document.getElementById("shop-nores");i&&(i.hidden=a>0||!e)}const jt=t=>d.data.shopping.find(e=>e.id===t);L("spesa",{render:jo,afterRender(){const t=document.getElementById("shop-filter");t&&(t.addEventListener("input",()=>{d.ui.shopFilter=t.value,Xa()}),Xa())},actions:{"shop-tab"(t){d.ui.shopTab=t.dataset.tab,b("spesa")},"shop-buy"(t){const e=jt(t.dataset.id);e&&f(a=>fs(a,e))},"shop-undo"(t){const e=jt(t.dataset.id);e&&f(()=>{e.need=!0,e.boughtAt=null,O(e)})},"shop-need"(t){const e=jt(t.dataset.id);e&&(q(`${e.name}: da prendere`),f(()=>{e.need=!0,O(e)}))},"shop-have"(t){const e=jt(t.dataset.id);e&&f(()=>{e.need=!1,O(e)})},"shop-edit"(t){d.ui.shopEdit=t.dataset.id,b("spesa"),P("#shop-name")},"shop-cancel"(){d.ui.shopEdit=null,b("spesa")},"shop-del"(t){const e=jt(t.dataset.id);!e||!window.confirm(`Togliere "${e.name}" dall'elenco?`)||(d.ui.shopEdit===e.id&&(d.ui.shopEdit=null),f(a=>{a.shopping=a.shopping.filter(i=>i.id!==e.id),K(a,e.id)}))},async"shop-copy"(){let t="Lista copiata";try{await navigator.clipboard.writeText(Co(d.data))}catch{t="Copia non riuscita"}b("spesa",{},t)}},forms:{"shop-save"(t,e,a){const i=String(t.get("name")||"").trim();if(!i)return;const n=t.get("id"),s=String(t.get("area")||"").trim()||"Altro",o=String(t.get("note")||"").trim();if(d.ui.shopLastArea=s,n){const p=jt(n);if(!p)return;f(g=>{Object.assign(p,{name:i,area:s,note:o}),O(p),Ke(g,s)}),d.ui.shopEdit=null,b("spesa",{},"Salvato");return}const l=!a||a.value!=="0",c=t.get("once")==="1",u=It(d.data,i);u?(f(p=>{u.need=l,l&&(u.boughtAt=null),t.get("area")&&(u.area=s),o&&(u.note=o),O(u),Ke(p,s)}),b("spesa",{},`${u.name} era già in elenco: ${l?"segnato da prendere":"segnato che ce l'hai"}`)):(f(p=>{p.shopping.push(Rt({name:i,area:s,note:o,need:l,once:c})),Ke(p,s)}),b("spesa",{},l?`${i} aggiunto da prendere`:`${i} aggiunto a quello che hai`)),P("#shop-name")},"shop-quick"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;const i=It(d.data,a);i?(q(i.need?`${i.name} è già da prendere`:`${i.name}: da prendere`),f(()=>{i.need=!0,i.boughtAt=null,O(i)})):(q(`${a} aggiunto. Puoi scegliere il reparto dalla sezione Spesa`),f(n=>n.shopping.push(Rt({name:a,need:!0})))),P("#"+e.querySelector("input[name=name]").id)}}});const No={start:"Già da parte",add:"Versamento",withdraw:"Prelievo",use:"Usati"},ha=t=>t?String(t).replace(".",","):"",mn=(t,e)=>t.recurring.find(a=>a.type==="goal"&&a.goalId===e.id);function gn(t,e){const a=xs(t,e.id);if(!a.list.length)return"";const i=Math.round((se(t,e)-a.total)*100)/100;return`<div class="earmark">${a.list.map(n=>`di cui <strong>${r(n.goal.name)}</strong> ${h(n.saved)}`).join(" · ")}
    · <span class="${i<0?"bad-text":""}">liberi ${h(i)}</span></div>`}function Oo(t){const e=qe(t);return e.length?`<div class="stack-sm">${e.map(a=>{const i=Oe(t,a);return`<div>
      <div class="cat-row"><span>${r(a.name)} <span class="hint">· ${i.pct}%</span></span><span class="money">${h(i.saved)} / ${h(a.target)}</span></div>
      <div class="progress goal"><div style="width:${i.pct}%"></div></div></div>`}).join("")}</div>`:""}function qo(t,e,a){const i=[];if(a.remaining<=0&&i.push('<span class="good-text">Cifra raggiunta!</span>'),a.recs.length){const n=a.recs[0],s=n.accountId===e.accountId?"":` da ${r(nt(t,n.accountId))}`;i.push(`${h(a.monthly)} al mese, il ${n.day}${s}`),a.remaining>0&&i.push(a.reachDate?`ci arrivi a <strong>${r(X(ut(a.reachDate)).toLowerCase())}</strong>`:"oltre 15 anni")}else a.remaining>0&&i.push("nessun versamento automatico");return e.deadline&&a.remaining>0&&i.push(a.onTime?`<span class="good-text">in tempo per ${r(I(e.deadline))} ${e.deadline.slice(0,4)}</span>`:`<span class="warn-text">per arrivarci entro ${r(I(e.deadline))} ${e.deadline.slice(0,4)} servono ${h(a.neededMonthly)} al mese</span>`),i.join(" · ")}function To(t,e,a,i){const n={add:"Aggiungi soldi",withdraw:"Ritira dall'obiettivo",use:"Usa i soldi"},s=Ss(t,e.accountId);return`
    <form data-form="goal-move" class="box-soft stack-sm">
      <input type="hidden" name="id" value="${e.id}"><input type="hidden" name="kind" value="${a}">
      <div class="card-head"><strong>${n[a]}</strong><button class="link" type="button" data-action="goal-move-cancel">Annulla</button></div>
      <div class="row">
        <label class="sr-only" for="gm-amount">Importo</label>
        <input class="input amount" id="gm-amount" name="amount" inputmode="decimal" placeholder="0,00 €" value="${a==="use"?r(ha(i)):""}" required>
        <label class="sr-only" for="gm-date">Data</label>
        <input class="input date" id="gm-date" type="date" name="date" value="${k()}">
        ${a==="add"?`<label class="sr-only" for="gm-from">Da dove arrivano</label>
          <select class="input" id="gm-from" name="from">
            <option value="">Sono già su ${r(s?s.name:"quel conto")}</option>
            ${t.accounts.filter(o=>!o.archived&&o.id!==e.accountId).map(o=>`<option value="${o.id}">Giroconto da ${r(o.name)}</option>`).join("")}
          </select>`:""}
        <label class="sr-only" for="gm-note">Nota</label>
        <input class="input grow" id="gm-note" name="note" placeholder="${a==="use"?"es. acconto auto":"Nota (facoltativa)"}">
        <button class="btn primary" type="submit">${a==="use"?"Conferma":a==="add"?"Aggiungi":"Ritira"}</button>
      </div>
      <div class="hint">${a==="add"?"Se arrivano da un altro conto viene registrato anche il giroconto, così i saldi restano giusti.":a==="withdraw"?"I soldi restano sul conto, ma non sono più prenotati per questo obiettivo.":"L'obiettivo si chiude e resta nello storico; il versamento automatico si ferma. La spesa vera (es. l'acquisto) la registri o la importi come sempre."}</div>
    </form>`}function Mo(t,e){const a=Oe(t,e),i=ks(t,e.id),n=d.ui.goalMove&&d.ui.goalMove.id===e.id?d.ui.goalMove.kind:null,s=d.ui.goalHist===e.id;return`
    <section class="card" aria-labelledby="g-${e.id}">
      <div class="card-head">
        <div><h2 id="g-${e.id}">${r(e.name)}</h2><div class="hint">su ${r(nt(t,e.accountId))}${e.deadline?" · entro "+r(Yt(e.deadline).toLowerCase()):""}</div></div>
        <button class="icon-btn" data-action="goal-edit" data-id="${e.id}" aria-label="Modifica ${r(e.name)}">${S("edit",16)}</button>
      </div>
      <div class="goal-amounts"><span class="goal-saved">${h(a.saved)}</span><span class="sub">di ${h(e.target)}</span><span class="push sub">${a.pct}%</span></div>
      <div class="progress goal big ${a.remaining<=0?"full":""}" role="progressbar" aria-valuenow="${a.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avanzamento ${r(e.name)}"><div style="width:${a.pct}%"></div></div>
      <div class="sub">${a.remaining>0?`Mancano <strong>${h(a.remaining)}</strong> · `:""}${qo(t,e,a)}</div>
      ${n?To(t,e,n,a.saved):`
      <div class="row">
        <button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="add">${S("plus",14)}Aggiungi</button>
        ${a.saved>0?`<button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="withdraw">Ritira</button>
        <button class="btn small" data-action="goal-move" data-id="${e.id}" data-kind="use">Usa i soldi</button>`:""}
      </div>`}
      ${i.length?`
      <div class="list tight">${i.slice(0,s?500:4).map(o=>`
        <div class="item"><div class="when">${r(I(o.date))}</div>
          <div class="text"><div>${r(No[o.kind]||"Movimento")}${o.recurringId?" automatico":""}</div>${o.note?`<div class="hint">${r(o.note)}</div>`:""}</div>
          <span class="money ${o.amount>0?"in":""}">${o.amount>0?"+ ":"− "}${h(Math.abs(o.amount))}</span>
          <button class="icon-btn" data-action="goal-move-del" data-id="${o.id}" aria-label="Elimina questo movimento">${S("trash",16)}</button>
        </div>`).join("")}</div>
      ${i.length>4&&!s?`<button class="link" data-action="goal-hist" data-id="${e.id}">Tutti i movimenti (${i.length})</button>`:""}`:""}
    </section>`}function Po(t,e){const a=e?mn(t,e):null,i=Y(t);return`
    <form data-form="goal-save" class="card stack" aria-labelledby="h-goalform">
      <div class="card-head"><h2 id="h-goalform">${e?"Modifica obiettivo":"Nuovo obiettivo"}</h2>${e?'<button class="link" type="button" data-action="goal-cancel">Annulla</button>':""}</div>
      <input type="hidden" name="id" value="${e?e.id:""}">
      <label class="field">Nome<input class="input" id="goal-name" name="name" value="${r(e?e.name:"")}" placeholder="Auto" required></label>
      <div class="form-grid two">
        <label class="field">Cifra da raggiungere (€)<input class="input" name="target" inputmode="decimal" value="${r(e?ha(e.target):"")}" placeholder="8.000" required></label>
        ${e?"":'<label class="field">Già messo da parte (€)<input class="input" name="start" inputmode="decimal" placeholder="0"></label>'}
        <label class="field">Entro il (facoltativo)<input class="input" type="date" name="deadline" value="${r(e&&e.deadline?e.deadline:"")}"></label>
      </div>
      <label class="field">Dove stanno i soldi<select class="input" name="accountId">${at(e?e.accountId:(t.accounts.find(n=>n.investments&&!n.archived)||i||{}).id)}</select></label>
      <fieldset class="plain stack-sm divider-top">
        <legend class="label">Versamento automatico (facoltativo)</legend>
        <div class="form-grid two">
          <label class="field">Importo al mese (€)<input class="input" name="monthly" inputmode="decimal" value="${r(a?ha(a.amount):"")}" placeholder="150"></label>
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
    </form>`}function Ro(){const t=d.data,e=qe(t),a=t.goals.filter(l=>l.done).sort((l,c)=>(c.doneAt||"").localeCompare(l.doneAt||"")),i=d.ui.goalEdit?rt(t,d.ui.goalEdit):null,n=e.map(l=>Oe(t,l)),s=n.reduce((l,c)=>l+c.saved,0),o=n.reduce((l,c)=>l+c.monthly,0);return`
    ${W("Finanze","Obiettivi")}
    <p class="lead">Soldi messi da parte per qualcosa. Restano sul loro conto, ma la dashboard li tiene separati: nel saldo del conto vedi "di cui" per ogni obiettivo e quanto è davvero libero.</p>
    ${e.length?`<section class="metrics">
      ${j("Messo da parte",h(s),"accent")}
      ${j("Versi ogni mese",h(o))}
      ${j("Obiettivi in corso",String(e.length))}
    </section>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${e.length?e.map(l=>Mo(t,l)).join(""):'<section class="card"><div class="empty">Nessun obiettivo. Creane uno qui accanto, ad esempio "Auto".</div></section>'}
        ${a.length?`<section class="card">
          <h2>Raggiunti</h2>
          <div class="list">${a.map(l=>`
            <div class="item"><div class="text"><div>${r(l.name)}</div><div class="hint">${h(l.target)}${l.doneAt?" · chiuso il "+r(I(l.doneAt.slice(0,10)))+" "+l.doneAt.slice(0,4):""}</div></div>
              <button class="btn small" data-action="goal-reopen" data-id="${l.id}">Riapri</button>
              <button class="icon-btn" data-action="goal-del" data-id="${l.id}" aria-label="Elimina ${r(l.name)}">${S("trash",16)}</button></div>`).join("")}</div>
        </section>`:""}
      </div>
      <div class="grow-1">${Po(t,i)}</div>
    </div>`}L("obiettivi",{render:Ro,actions:{"goal-edit"(t){d.ui.goalEdit=t.dataset.id,b("obiettivi"),P("#goal-name")},"goal-cancel"(){d.ui.goalEdit=null,b("obiettivi")},"goal-move"(t){d.ui.goalMove={id:t.dataset.id,kind:t.dataset.kind},b("obiettivi"),P("#gm-amount")},"goal-move-cancel"(){d.ui.goalMove=null,b("obiettivi")},"goal-hist"(t){d.ui.goalHist=t.dataset.id,b("obiettivi")},"goal-move-del"(t){const e=d.data.goalMoves.find(i=>i.id===t.dataset.id);if(!e)return;const a=e.pairId?"Eliminare questo movimento? Viene tolto anche il giroconto collegato.":"Eliminare questo movimento?";window.confirm(a)&&f(i=>{if(i.goalMoves=i.goalMoves.filter(s=>s.id!==e.id),K(i,e.id),e.pairId&&(i.transactions=i.transactions.filter(s=>s.pairId!==e.pairId)),e.recurringId){const s=i.recurring.find(l=>l.id===e.recurringId),o=e.dueDate||e.date;s&&s.done&&s.done[o]&&(s.done=Object.assign({},s.done),delete s.done[o])}const n=rt(i,e.goalId);n&&O(n)})},"goal-reopen"(t){f(e=>{const a=rt(e,t.dataset.id);if(!a)return;a.done=!1,a.doneAt=null,O(a);const i=e.goalMoves.filter(n=>n.goalId===a.id&&n.kind==="use");e.goalMoves=e.goalMoves.filter(n=>!i.includes(n)),K(e,i.map(n=>n.id));for(const n of e.recurring)n.type==="goal"&&n.goalId===a.id&&(n.paused=!1)}),b("obiettivi",{},"Obiettivo riaperto")},"goal-del"(t){const e=rt(d.data,t.dataset.id);!e||!window.confirm(`Eliminare l'obiettivo «${e.name}»? I soldi restano sul conto e i giroconti già registrati non vengono toccati.`)||(d.ui.goalEdit===e.id&&(d.ui.goalEdit=null),f(a=>{const i=a.goalMoves.filter(n=>n.goalId===e.id);K(a,[e.id,...i.map(n=>n.id)]),a.goalMoves=a.goalMoves.filter(n=>n.goalId!==e.id),a.recurring=a.recurring.filter(n=>!(n.type==="goal"&&n.goalId===e.id)),a.goals=a.goals.filter(n=>n.id!==e.id)}))}},forms:{"goal-save"(t){const e=String(t.get("name")||"").trim(),a=U(t.get("target")),i=String(t.get("start")||"").trim(),n=i?U(i):0,s=String(t.get("monthly")||"").trim(),o=s?U(s):0,l=parseInt(t.get("day"),10),c=t.get("accountId"),u=t.get("fromAccountId")||c;if(!e)return D("Dai un nome all'obiettivo."),A();if(!(a>0))return D("Scrivi la cifra da raggiungere, es. 8.000"),A();if(!Number.isFinite(n)||n<0)return D('"Già messo da parte" deve essere un numero, es. 500'),A();if(!Number.isFinite(o)||o<0)return D("L'importo al mese deve essere un numero, es. 150"),A();if(o>0&&!(l>=1&&l<=31))return D("Il giorno va da 1 a 31."),A();if(!c)return D("Scegli il conto dove stanno i soldi."),A();const p=t.get("id"),g=t.get("deadline")||null;f(m=>{let y;p?(y=rt(m,p),Object.assign(y,{name:e,target:a,accountId:c,deadline:g}),O(y)):(y=ws({name:e,target:a,accountId:c,deadline:g}),m.goals.push(y),n>0&&m.goalMoves.push({id:G(),goalId:y.id,date:k(),amount:n,kind:"start",note:"",createdAt:new Date().toISOString()}));const w=mn(m,y);if(o>0){const z={name:y.name,amount:o,freq:"mensile",day:l,accountId:u,toAccountId:c,category:"Giroconto",goalId:y.id};w?Object.assign(w,z):m.recurring.push(Object.assign({id:G(),type:"goal",paused:!1,done:{},history:[],startDate:k()},z))}else w&&(m.recurring=m.recurring.filter(z=>z!==w))}),d.ui.goalEdit=null,b("obiettivi",{},p?"Obiettivo aggiornato":"Obiettivo creato")},"goal-move"(t,e){const a=rt(d.data,t.get("id"));if(!a)return;const i=t.get("kind"),n=U(t.get("amount")),s=e.querySelector("[name=amount]");if(!(n>0)){s.setCustomValidity("Inserisci un importo valido, es. 150"),s.reportValidity(),s.addEventListener("input",()=>s.setCustomValidity(""),{once:!0});return}const o=t.get("date")||k(),l=String(t.get("note")||"").trim(),c=Oe(d.data,a).saved;if(i!=="add"&&n>c+.004){s.setCustomValidity(`Nell'obiettivo ci sono ${h(c)}`),s.reportValidity(),s.addEventListener("input",()=>s.setCustomValidity(""),{once:!0});return}f(u=>{if(i==="add"?$s(u,a.id,{date:o,amount:n,fromAccountId:t.get("from")||null,note:l}):ys(u,a.id,{date:o,amount:n,note:l,kind:i}),i==="use"){a.done=!0,a.doneAt=new Date().toISOString(),O(a);for(const p of u.recurring)p.type==="goal"&&p.goalId===a.id&&(p.paused=!0)}}),d.ui.goalMove=null,b("obiettivi",{},i==="add"?`${h(n)} aggiunti a ${a.name}`:i==="use"?`${a.name}: obiettivo chiuso`:`${h(n)} ritirati da ${a.name}`)}}});const vn=[[0,"Non si rinnova"],[1,"Ogni mese"],[3,"Ogni 3 mesi"],[6,"Ogni 6 mesi"],[12,"Ogni anno"],[24,"Ogni 2 anni"],[36,"Ogni 3 anni"],[60,"Ogni 5 anni"],[72,"Ogni 6 anni"],[120,"Ogni 10 anni"]],Lo=[7,15,30,60,90],hn=t=>(vn.find(([e])=>e===t)||[0,`Ogni ${t} mesi`])[1].toLowerCase(),Re=t=>`${I(t)} ${t.slice(0,4)}`,Fo=t=>/^https?:\/\//i.test(t||""),Oa=t=>Fo(t)?"Apri il link":"Apri "+(String(t).split(/[\\/]/).pop()||"documento"),Qt=t=>d.data.deadlines.find(e=>e.id===t);function Bo({x:t,days:e,state:a}){return`
    <div class="item">
      <span class="dot-cat scad ${a}" aria-hidden="true"></span>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${r(Re(t.due))}${t.cost?" · "+h(t.cost):""}</div></div>
      <span class="tag ${a==="late"?"bad":"warn"}">${r(Xt(e))}</span>
      ${t.doc?`<button class="icon-btn" data-action="dl-open" data-id="${t.id}" aria-label="${r(Oa(t.doc))}">${S("doc",16)}</button>`:""}
    </div>`}function Vo(t){const e=xa(t);return e.length?`
    <section class="card ${e.some(i=>i.state==="late")?"attention":""}" aria-labelledby="h-scad">
      <div class="card-head"><h2 id="h-scad">Scadenze</h2><button class="link" data-action="nav" data-id="scadenze">${e.length} da tenere d'occhio</button></div>
      <div class="list">${e.slice(0,5).map(Bo).join("")}</div>
    </section>`:""}function Uo(t){const e=Cs(t);return`
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
      <div class="hint">${e?`Proposta: ${r(hn(t.every))} dalla scadenza (o da oggi, se è già passata). Correggila con la data scritta sul documento nuovo.`:"Lascia vuota la prossima scadenza per archiviarla."}</div>
    </form>`}function Go(t){const{days:e,state:a}=Aa(t),i=d.ui.dlRenew===t.id,n=[Yt(t.due),t.every?hn(t.every):"",t.lastDone?"ultimo rinnovo "+Re(t.lastDone):""].filter(Boolean).join(" · ");return`
    <div class="dl-row">
      <div class="item">
        <span class="dot-cat scad ${a}" aria-hidden="true"></span>
        <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r(n)}</div>${t.note?`<div class="sub">${r(t.note)}</div>`:""}</div>
        ${t.cost?`<span class="money sub">${h(t.cost)}</span>`:""}
        <span class="tag ${a==="late"?"bad":a==="soon"?"warn":""}">${r(Xt(e))}</span>
        ${t.doc?`<button class="icon-btn" data-action="dl-open" data-id="${t.id}" aria-label="${r(Oa(t.doc))}" title="${r(t.doc)}">${S("doc",16)}</button>`:""}
        ${i?"":`<button class="btn small" data-action="dl-renew" data-id="${t.id}">${t.every?"Rinnovato":"Fatto"}</button>`}
        <button class="icon-btn" data-action="dl-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${S("edit",16)}</button>
        <button class="icon-btn" data-action="dl-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button>
      </div>
      ${i?Uo(t):""}
    </div>`}function _o(t){const e=t||{kind:"Documenti",every:0,notice:30};return`
    <form data-form="dl-save" class="card stack" id="dl-form" aria-labelledby="h-dlform">
      <div class="card-head"><h2 id="h-dlform">${t?"Modifica scadenza":"Nuova scadenza"}</h2>${t?'<button class="link" type="button" data-action="dl-cancel">Annulla</button>':""}</div>
      ${t?"":`<div class="stack-xs"><span class="hint">Modelli pronti</span><div class="shop-chips">${Li.map((a,i)=>`<button type="button" class="chip" data-action="dl-preset" data-i="${i}">${r(a.name)}</button>`).join("")}</div></div>`}
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Nome<input class="input" id="dl-name" name="name" value="${r(t?t.name:"")}" placeholder="Carta d'identità" required></label>
      <div class="form-grid two">
        <label class="field">Tipo<select class="input" name="kind">${ra.map(a=>`<option ${e.kind===a?"selected":""}>${a}</option>`).join("")}</select></label>
        <label class="field">Scade il<input class="input" type="date" name="due" value="${r(t?t.due:"")}" required></label>
        <label class="field">Si rinnova<select class="input" name="every">${vn.map(([a,i])=>`<option value="${a}" ${(e.every||0)===a?"selected":""}>${i}</option>`).join("")}</select></label>
        <label class="field">Avvisami<select class="input" name="notice">${Lo.map(a=>`<option value="${a}" ${(e.notice??30)===a?"selected":""}>${a} giorni prima</option>`).join("")}</select></label>
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
    </form>`}function Wo(){const t=d.data,e=t.deadlines.filter(l=>!l.archived).sort((l,c)=>l.due.localeCompare(c.due)),a=t.deadlines.filter(l=>l.archived).sort((l,c)=>(c.lastDone||"").localeCompare(l.lastDone||"")),i=xa(t),n=d.ui.dlEdit?Qt(d.ui.dlEdit):null,s=[...ra,...new Set(e.map(l=>l.kind).filter(l=>!ra.includes(l)))],o=e.filter(l=>l.cost&&Aa(l).days<=365).reduce((l,c)=>l+c.cost,0);return`
    ${W(i.length?`${i.length} da tenere d'occhio`:"Tutto in ordine","Scadenze e documenti")}
    ${o?`<p class="lead">Nei prossimi 12 mesi: ${h(o)} di scadenze con un costo.</p>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${e.length?s.map(l=>{const c=e.filter(u=>u.kind===l);return c.length?`<section class="card" aria-label="${r(l)}"><h3 class="group-title">${r(l)} <span class="hint">${c.length}</span></h3><div class="list">${c.map(Go).join("")}</div></section>`:""}).join(""):`<section class="card"><div class="empty">Nessuna scadenza. Comincia dai modelli pronti qui accanto: carta d'identità, patente, tessera sanitaria…</div></section>`}
        ${a.length?`<section class="card">
          <div class="card-head"><h2>Archiviate</h2><span class="sub">${a.length}</span></div>
          <div class="list">${a.map(l=>`
            <div class="item done"><div class="text"><div>${r(l.name)}</div><div class="hint">fatto il ${r(Re(l.lastDone||l.due))}</div></div>
              ${l.doc?`<button class="icon-btn" data-action="dl-open" data-id="${l.id}" aria-label="${r(Oa(l.doc))}">${S("doc",16)}</button>`:""}
              <button class="btn small" data-action="dl-restore" data-id="${l.id}">Ripristina</button>
              <button class="icon-btn" data-action="dl-del" data-id="${l.id}" aria-label="Elimina ${r(l.name)}">${S("trash",16)}</button></div>`).join("")}</div>
        </section>`:""}
      </div>
      <div class="grow-1">${_o(n)}</div>
    </div>`}L("scadenze",{render:Wo,actions:{"dl-preset"(t){const e=Li[Number(t.dataset.i)],a=document.getElementById("dl-form");!e||!a||(a.name.value=e.name,a.kind.value=e.kind,a.every.value=String(e.every),a.due.focus())},async"dl-pick"(){const t=await Is();if(!t)return;const e=document.getElementById("dl-doc");e&&(e.value=t)},async"dl-open"(t){const e=Qt(t.dataset.id);if(!(!e||!e.doc))try{await oe("open_document",{target:e.doc})}catch(a){D(String(a)),A()}},"dl-renew"(t){d.ui.dlRenew=t.dataset.id,b("scadenze"),P("#dl-next")},"dl-renew-cancel"(){d.ui.dlRenew=null,b("scadenze")},"dl-edit"(t){d.ui.dlEdit=t.dataset.id,b("scadenze"),P("#dl-name")},"dl-cancel"(){d.ui.dlEdit=null,b("scadenze")},"dl-restore"(t){const e=Qt(t.dataset.id);e&&(f(()=>{e.archived=!1,O(e)}),d.ui.dlEdit=e.id,b("scadenze",{},"Ripristinata: aggiorna la data di scadenza"))},"dl-del"(t){const e=Qt(t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? Il documento collegato non viene toccato.`)||(d.ui.dlEdit===e.id&&(d.ui.dlEdit=null),f(a=>{a.deadlines=a.deadlines.filter(i=>i.id!==e.id),K(a,e.id)}))}},forms:{"dl-save"(t){const e=String(t.get("name")||"").trim(),a=t.get("due");if(!e)return D("Scrivi un nome."),A();if(!a)return D("Indica la data di scadenza."),A();const i=String(t.get("cost")||"").trim(),n=i?U(i):null;if(i&&!(n>=0))return D("Il costo deve essere un numero, es. 210,00"),A();const s={name:e,due:a,kind:t.get("kind")||"Altro",every:Number(t.get("every"))||null,notice:Number(t.get("notice"))||30,cost:n||null,doc:String(t.get("doc")||"").trim().replace(/^"(.*)"$/,"$1"),note:String(t.get("note")||"").trim()},o=t.get("id");f(l=>{if(o){const c=l.deadlines.find(u=>u.id===o);Object.assign(c,s),O(c)}else l.deadlines.push(Te(s))}),d.ui.dlEdit=null,b("scadenze",{},o?"Scadenza aggiornata":`${e} aggiunta`)},"dl-renew"(t){const e=Qt(t.get("id"));if(!e)return;const a=t.get("next")||null,i=t.get("done")||k();a&&a<=i&&!window.confirm("La prossima scadenza è prima della data di oggi. Confermi?")||(f(()=>As(e,a,i)),d.ui.dlRenew=null,q(a?`${e.name}: prossima scadenza ${Re(a)}`:`${e.name}: archiviata`),b("scadenze",{},d.notice))}}});const Ho=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];function Ko(t){const e=t||{type:"out",freq:"mensile",day:new Date().getDate(),accountId:Y(d.data)?.id,category:"Casa",sub:!1},a=e.type;return`
    <form data-form="save-rec" class="card stack" aria-labelledby="h-recform">
      <div class="card-head"><h2 id="h-recform">${t?"Modifica programmato":"Nuovo programmato"}</h2>${t?'<button class="link" type="button" data-action="rec-cancel">Annulla</button>':""}</div>
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Nome<input class="input" name="name" value="${r(t?t.name:"")}" placeholder="Abbonamento palestra" required></label>
      <label class="field">Tipo<select class="input" name="type" data-change="rec-type">
        ${Object.entries(ca).map(([i,n])=>`<option value="${i}" ${a===i?"selected":""}>${i==="pac"?"PAC / investimento":i==="transfer"?"Giroconto tra conti":i==="goal"?"Versamento in un obiettivo":n.label}</option>`).join("")}
      </select></label>
      <div class="form-grid two">
        <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" value="${t?r(String(t.amount).replace(".",",")):""}" placeholder="29,90" required></label>
        <label class="field">Frequenza<select class="input" name="freq" data-change="rec-freq">
          ${Object.entries(Ca).map(([i,n])=>`<option value="${i}" ${e.freq===i?"selected":""}>${n.label}</option>`).join("")}
        </select></label>
        <label class="field" data-when="day">Giorno del mese<input class="input" name="day" type="number" min="1" max="31" value="${e.day||1}"></label>
        <label class="field" data-when="month">Mese<select class="input" name="month">${Ho.map((i,n)=>`<option value="${n+1}" ${Number(e.month)===n+1?"selected":""}>${i}</option>`).join("")}</select></label>
        <label class="field" data-when="date">Data<input class="input" type="date" name="date" value="${e.date||e.startDate||k()}"></label>
      </div>
      <label class="field">Conto<select class="input" name="accountId">${at(e.accountId)}</select></label>
      <label class="field" data-when="to">Verso il conto<select class="input" name="toAccountId">${at(e.toAccountId||ft(d.data).find(i=>i.id!==e.accountId)?.id)}</select></label>
      <label class="field" data-when="goal">Obiettivo<select class="input" name="goalId">${qe(d.data).map(i=>`<option value="${i.id}" ${e.goalId===i.id?"selected":""}>${r(i.name)} (su ${r(nt(d.data,i.accountId))})</option>`).join("")||'<option value="">Crea prima un obiettivo</option>'}</select></label>
      <label class="field" data-when="cat">Categoria<select class="input" name="category">${Ut(a==="in"?"in":"out",e.category)}</select></label>
      <label class="field" data-when="isin">ISIN dell'ETF (facoltativo)<input class="input" name="isin" value="${r(e.isin||"")}" placeholder="IE00XXXXXXXX"></label>
      <label class="check" data-when="sub"><input type="checkbox" name="sub" ${e.sub?"checked":""}><span>È un abbonamento</span></label>
      <label class="field" data-when="sub">Avvisami prima del rinnovo<select class="input" name="remindDays">
        ${[["","Automatico (14 giorni, solo se non è mensile)"],["0","No"],["3","3 giorni prima"],["7","7 giorni prima"],["14","14 giorni prima"],["30","30 giorni prima"]].map(([i,n])=>`<option value="${i}" ${String(e.remindDays??"")===i?"selected":""}>${n}</option>`).join("")}
      </select></label>
      <button class="btn primary" type="submit">${t?"Salva":"Aggiungi"}</button>
    </form>`}function Qo(t){const e=t.recurring.filter(a=>a.sub).map(a=>({r:a,next:$e(a),year:Math.round(Es(a)*12*100)/100})).sort((a,i)=>a.r.paused-i.r.paused||i.year-a.year);return e.length?`
    <section class="card" aria-labelledby="h-subs">
      <div class="card-head"><h2 id="h-subs">Abbonamenti</h2><span class="sub">${h(e.filter(a=>!a.r.paused).reduce((a,i)=>a+i.year,0))} in un anno</span></div>
      <div class="list">${e.map(({r:a,next:i,year:n})=>`
        <div class="item ${a.paused?"paused":""}">
          <div class="text"><div>${r(a.name)}${a.cancelled?' <span class="tag">disdetto</span>':""}</div><div class="hint">${r(Ca[a.freq]?.label||"")} · ${h(a.amount)}${i&&!a.paused?" · rinnovo "+r(I(i)):""}${Wa(a)?` · avviso ${Wa(a)} giorni prima`:""}</div></div>
          <span class="money">${h(n)}<span class="hint"> /anno</span></span>
        </div>`).join("")}</div>
    </section>`:""}function bn(t){const e=zs(t);return e.length?`
    <section class="card attention" aria-labelledby="h-subren">
      <div class="card-head"><h2 id="h-subren">Abbonamenti in rinnovo</h2><span class="sub">li tieni?</span></div>
      <div class="list">${e.map(({r:a,date:i,days:n})=>`
        <div class="item">
          <div class="when">${r(I(i))}</div>
          <div class="text"><div>${r(a.name)}</div><div class="hint">${h(a.amount)} · ${n===0?"si rinnova oggi":n===1?"si rinnova domani":`si rinnova tra ${n} giorni`}</div></div>
          <button class="btn small" data-action="sub-keep" data-id="${a.id}" data-date="${i}">Lo tengo</button>
          <button class="btn small danger" data-action="sub-cancel" data-id="${a.id}" data-date="${i}">Disdico</button>
        </div>`).join("")}</div>
    </section>`:""}function Yo(){const t=d.data,e=Fi(t),a=Ia(t),i=d.ui.recEdit?t.recurring.find(s=>s.id===d.ui.recEdit):null,n=t.recurring.map(s=>({r:s,next:$e(s)})).sort((s,o)=>s.r.paused-o.r.paused||(s.next||"9999").localeCompare(o.next||"9999"));return`
    ${W("Finanze","Programmati")}
    <p class="lead">Bollette, abbonamenti, stipendio, giroconti e PAC. Compaiono nel calendario e, quando arriva il giorno, li confermi con un clic (o vengono riconosciuti importando l'estratto conto).</p>
    <section class="metrics">
      ${j("Spese fisse al mese",h(e.fixed))}
      ${j("Abbonamenti in un anno",h(e.subsYear),"warn")}
      ${j("PAC in un anno",h(e.pac*12),"accent")}
      ${j("Restano ogni mese",h(e.left),e.left>=0?"good":"bad","entrate fisse − spese fisse − PAC")}
    </section>
    ${a.length?`<section class="card attention"><div class="card-head"><h2>Da confermare</h2><span class="sub">${a.length}</span></div><div class="list">${a.map(Na).join("")}</div></section>`:""}
    ${Qo(t)}
    <div class="split">
      <section class="card grow-2" aria-label="Elenco programmati">
        ${n.length?`<div class="list">${n.map(({r:s,next:o})=>`
          <div class="item ${s.paused?"paused":""}">
            <div class="day-box"><strong>${s.freq==="once"?r(I(s.date).split(" ")[0]):s.freq==="settimanale"?"7g":s.day}</strong><span>${r(Ca[s.freq]?.short||"")}</span></div>
            <div class="text">
              <div class="row nowrap gap-sm"><span>${r(s.name)}</span>${ja(s.type)}${s.sub?'<span class="tag">abbonamento</span>':""}${s.paused?'<span class="hint">in pausa</span>':""}</div>
              <div class="hint">${r(nt(t,s.accountId))}${(s.type==="transfer"||s.type==="goal")&&s.toAccountId&&s.toAccountId!==s.accountId?" → "+r(nt(t,s.toAccountId)):""}${s.type==="goal"&&rt(t,s.goalId)?" · obiettivo "+r(rt(t,s.goalId).name):""} · ${o?"prossimo "+r(I(o)):"nessuna data futura"}</div>
            </div>
            <span class="money ${s.type==="in"?"in":""}">${le(s)}</span>
            <button class="icon-btn" data-action="rec-edit" data-id="${s.id}" aria-label="Modifica ${r(s.name)}">${S("edit",16)}</button>
            <button class="icon-btn" data-action="rec-pause" data-id="${s.id}" aria-label="${s.paused?"Riprendi":"Metti in pausa"} ${r(s.name)}">${S(s.paused?"play":"pause",16)}</button>
            <button class="icon-btn" data-action="rec-del" data-id="${s.id}" aria-label="Elimina ${r(s.name)}">${S("trash",16)}</button>
          </div>`).join("")}</div>`:'<div class="empty">Nessun programmato. Aggiungine uno qui accanto, oppure importa un estratto conto: i pagamenti ricorrenti vengono proposti in automatico.</div>'}
      </section>
      <div class="grow-1">${Ko(i)}</div>
    </div>`}function Qe(t){if(!t)return;const e=t.type.value,a=t.freq.value,i=(n,s)=>t.querySelectorAll(`[data-when="${n}"]`).forEach(o=>{o.hidden=!s});i("day",!["once","settimanale","annuale"].includes(a)||a==="annuale"),i("month",a==="annuale"),i("date",a==="once"||a==="settimanale"),i("to",e==="transfer"),i("goal",e==="goal"),i("cat",e==="out"||e==="in"),i("isin",e==="pac"),i("sub",e==="out")}L("programmati",{render:Yo,afterRender(){Qe(document.querySelector('form[data-form="save-rec"]'))},changes:{"rec-type"(t){const e=t.form.category;e.innerHTML=Ut(t.value==="in"?"in":"out"),Qe(t.form)},"rec-freq"(t){Qe(t.form)}},actions:{"rec-edit"(t){d.ui.recEdit=t.dataset.id,b("programmati")},"rec-cancel"(){d.ui.recEdit=null,b("programmati")},"sub-keep"(t){f(e=>{const a=e.recurring.find(i=>i.id===t.dataset.id);a&&(a.kept=Object.assign({},a.kept,{[t.dataset.date]:!0}))})},"sub-cancel"(t){const e=d.data.recurring.find(i=>i.id===t.dataset.id);if(!e)return;const a=t.dataset.date;f(i=>{e.paused=!0,e.cancelled=!0;const n=M(a,-1)>=k()?M(a,-1):k();i.todos.push(ne({text:`Disdire ${e.name} (si rinnova il ${I(a)})`,due:n}))}),q(`${e.name} messo in pausa: ti ho aggiunto l'attività per disdirlo`),A()},"rec-pause"(t){f(e=>{const a=e.recurring.find(i=>i.id===t.dataset.id);a&&(a.paused=!a.paused)})},"rec-del"(t){const e=d.data.recurring.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? I movimenti già registrati restano.`)||f(a=>{a.recurring=a.recurring.filter(i=>i.id!==e.id)})}},forms:{"save-rec"(t){const e=String(t.get("name")||"").trim(),a=U(t.get("amount")),i=t.get("freq"),n=parseInt(t.get("day"),10);if(!e)return D("Scrivi un nome."),A();if(!(a>0))return D("Inserisci un importo valido, es. 29,90"),A();if(["mensile","bimestrale","trimestrale","semestrale","annuale"].includes(i)&&!(n>=1&&n<=31))return D("Il giorno va da 1 a 31."),A();const s=t.get("type"),o=t.get("id"),l={name:e,type:s,amount:a,freq:i,day:n||1,accountId:t.get("accountId"),toAccountId:s==="transfer"?t.get("toAccountId"):void 0,category:s==="pac"?"Investimenti":s==="transfer"||s==="goal"?"Giroconto":t.get("category"),month:i==="annuale"?Number(t.get("month")):void 0,date:i==="once"?t.get("date"):void 0,sub:s==="out"&&t.get("sub")==="on",remindDays:s==="out"&&t.get("sub")==="on"&&t.get("remindDays")!==""?Number(t.get("remindDays")):void 0,isin:s==="pac"?String(t.get("isin")||"").trim().toUpperCase():void 0};if(s==="transfer"&&l.toAccountId===l.accountId)return D("Per un giroconto scegli due conti diversi."),A();if(s==="goal"){const c=rt(d.data,t.get("goalId"));if(!c)return D("Crea prima un obiettivo (Finanze → Obiettivi)."),A();l.goalId=c.id,l.toAccountId=c.accountId}f(c=>{if(o){const u=c.recurring.find(p=>p.id===o);u.type==="pac"&&u.amount!==a&&(u.history=(u.history||[]).concat([{from:k(),amount:a,prev:u.amount}])),Object.assign(u,l)}else c.recurring.push(Object.assign({id:G(),paused:!1,done:{},history:[],startDate:i==="settimanale"?t.get("date"):k()},l))}),d.ui.recEdit=null,b("programmati",{},o?"Programmato aggiornato":"Programmato aggiunto")}}});const Zo=[["Salute",[["Allenamento",3],["Camminare 30 minuti",5],["Bere 2 litri d'acqua",7],["A letto entro mezzanotte",5],["Niente telefono a letto",7],["Frutta o verdura a ogni pasto",7]]],["Mente",[["Leggere 20 minuti",5],["Meditare 10 minuti",5],["Studiare una lingua",4],["Scrivere 3 cose della giornata",7]]],["Soldi",[["Nessuna spesa non necessaria",5],["Pranzo portato da casa",3],["Segnare le spese della giornata",7]]],["Casa",[["Riordinare 10 minuti",5],["Cucinare a casa",4],["Piatti lavati prima di dormire",7]]]],Xo=["lun","mar","mer","gio","ven","sab","dom"],fn=t=>t>=7?"ogni giorno":t===1?"1 volta a settimana":`${t} volte a settimana`;function $n(t){const e=t.habits.filter(s=>!s.archived);if(!e.length)return"";const a=k(),i=st(a);return`
    <section class="card" aria-labelledby="h-hab">
      <div class="card-head"><h2 id="h-hab">Abitudini</h2><button class="link" data-action="nav" data-id="abitudini">${e.filter(s=>ht(t,s,a)).length} di ${e.length} oggi</button></div>
      <div class="shop-chips">${e.map(s=>{const o=ht(t,s,a),l=Ct(t,s,i);return`<button class="chip habit ${o?"on":""}" data-action="hab-toggle" data-id="${s.id}" data-date="${a}" aria-pressed="${o}">${o?S("check",14,3):""}${r(s.name)}${s.perWeek<7?` <span class="hint">${l}/${s.perWeek}</span>`:""}</button>`}).join("")}</div>
    </section>`}function Jo(t,e){const a=st(k()),i=[];for(let n=7;n>=0;n--)i.push(M(a,-7*n));return`<div class="hab-weeks" role="img" aria-label="Ultime 8 settimane: ${i.map(n=>Ct(t,e,n)).join(", ")} volte su ${e.perWeek}">
    ${i.map(n=>{const s=Ct(t,e,n);return`<span class="hab-wk ${s>=e.perWeek?"ok":""}" title="Settimana del ${r(I(n))}: ${s} su ${e.perWeek}"><span style="height:${Math.round(s/7*100)}%"></span></span>`}).join("")}
  </div>`}function tl(t,e,a){const i=k(),n=Ct(t,e,a),s=js(t,e);return`
    <div class="hab-row">
      <div class="hab-name">
        <div class="strong">${r(e.name)}</div>
        <div class="hint">${r(fn(e.perWeek))} · questa settimana ${n}/${e.perWeek}${s.n?` · serie: <strong class="good-text">${s.n} ${s.unit}</strong>`:""}</div>
      </div>
      <div class="hab-days">${Xo.map((o,l)=>{const c=M(a,l),u=ht(t,e,c),p=c>i;return`<button class="hab-day ${u?"on":""} ${c===i?"today":""}" data-action="hab-toggle" data-id="${e.id}" data-date="${c}" ${p?"disabled":""} aria-pressed="${u}" aria-label="${r(e.name)}, ${o} ${r(I(c))}"><span>${o}</span>${u?S("check",14,3):""}</button>`}).join("")}</div>
      ${Jo(t,e)}
      <div class="row nowrap">
        <button class="icon-btn" data-action="hab-edit" data-id="${e.id}" aria-label="Modifica ${r(e.name)}">${S("edit",16)}</button>
        <button class="icon-btn" data-action="hab-archive" data-id="${e.id}" aria-label="Metti da parte ${r(e.name)}">${S("pause",16)}</button>
      </div>
    </div>`}function el(){const t=d.data,e=d.ui.habWeek||0,a=M(st(k()),-7*e),i=t.habits.filter(o=>!o.archived),n=t.habits.filter(o=>o.archived),s=d.ui.habEdit?t.habits.find(o=>o.id===d.ui.habEdit):null;return`
    ${W(i.length?`${i.length} abitudini`:"Piccole cose da fare spesso","Abitudini",`
      <button class="icon-btn" data-action="hab-week" data-n="1" aria-label="Settimana precedente">${S("left")}</button>
      <span class="sub">${e?"settimana del "+r(I(a)):"questa settimana"}</span>
      <button class="icon-btn" data-action="hab-week" data-n="-1" ${e?"":"disabled"} aria-label="Settimana successiva">${S("right")}</button>`)}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <section class="card">
          ${i.length?`<div class="hab-list">${i.map(o=>tl(t,o,a)).join("")}</div>`:'<div class="empty">Nessuna abitudine. Pescane due o tre dai suggerimenti qui accanto: meglio poche e segnate davvero.</div>'}
        </section>
        ${n.length?`<section class="card"><div class="card-head"><h2>Messe da parte</h2><span class="sub">${n.length}</span></div>
          <div class="list">${n.map(o=>`<div class="item"><div class="text">${r(o.name)}</div>
            <button class="btn small" data-action="hab-restore" data-id="${o.id}">Riprendi</button>
            <button class="icon-btn" data-action="hab-del" data-id="${o.id}" aria-label="Elimina ${r(o.name)}">${S("trash",16)}</button></div>`).join("")}</div></section>`:""}
      </div>
      <div class="grow-1 stack stack-lg">
        <form class="card stack" data-form="hab-save" id="hab-form" aria-labelledby="h-habform">
          <div class="card-head"><h2 id="h-habform">${s?"Modifica abitudine":"Nuova abitudine"}</h2>${s?'<button class="link" type="button" data-action="hab-cancel">Annulla</button>':""}</div>
          <input type="hidden" name="id" value="${s?s.id:""}">
          <label class="field">Cosa<input class="input" id="hab-name" name="name" value="${r(s?s.name:"")}" placeholder="Leggere 20 minuti" required></label>
          <label class="field">Quante volte<select class="input" name="perWeek">${[7,6,5,4,3,2,1].map(o=>`<option value="${o}" ${(s?s.perWeek:7)===o?"selected":""}>${fn(o)}</option>`).join("")}</select></label>
          <button class="btn primary self-start" type="submit">${s?"Salva":"Aggiungi"}</button>
        </form>
        ${s?"":`<section class="card stack-sm">
          <h2>Idee</h2>
          <div class="hint">Tocca un'idea per metterla nel modulo, poi scegli quante volte. Dopo due settimane togli quelle che non segni mai.</div>
          ${Zo.map(([o,l])=>`<div class="stack-xs"><span class="hint">${o}</span><div class="shop-chips">${l.map(([c,u])=>`<button type="button" class="chip ${i.some(p=>p.name===c)?"off":""}" data-action="hab-idea" data-name="${r(c)}" data-w="${u}">${r(c)}</button>`).join("")}</div></div>`).join("")}
        </section>`}
      </div>
    </div>`}const de=t=>d.data.habits.find(e=>e.id===t);L("abitudini",{render:el,actions:{"hab-toggle"(t){const e=de(t.dataset.id);!e||t.dataset.date>k()||f(a=>da(a,e,t.dataset.date))},"hab-week"(t){d.ui.habWeek=Math.max(0,(d.ui.habWeek||0)+Number(t.dataset.n)),b("abitudini")},"hab-idea"(t){const e=document.getElementById("hab-form");e&&(e.name.value=t.dataset.name,e.perWeek.value=t.dataset.w,e.perWeek.focus())},"hab-edit"(t){d.ui.habEdit=t.dataset.id,b("abitudini"),P("#hab-name")},"hab-cancel"(){d.ui.habEdit=null,b("abitudini")},"hab-archive"(t){f(()=>{const e=de(t.dataset.id);e&&(e.archived=!0,O(e))})},"hab-restore"(t){f(()=>{const e=de(t.dataset.id);e&&(e.archived=!1,O(e))})},"hab-del"(t){const e=de(t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}» e tutte le sue spunte?`)||f(a=>{a.habits=a.habits.filter(i=>i.id!==e.id),delete a.habitLog[e.id],K(a,e.id)})}},forms:{"hab-save"(t){const e=String(t.get("name")||"").trim();if(!e)return D("Scrivi l'abitudine."),A();const a=Math.min(7,Math.max(1,Number(t.get("perWeek"))||7)),i=t.get("id");f(n=>{if(i){const s=n.habits.find(o=>o.id===i);Object.assign(s,{name:e,perWeek:a}),O(s)}else n.habits.push(Ds({name:e,perWeek:a}))}),d.ui.habEdit=null,b("abitudini",{},i?"Abitudine aggiornata":`${e} aggiunta`)}}});const yn=[[1,"Ogni giorno"],[2,"Ogni 2 giorni"],[3,"Ogni 3 giorni"],[7,"Ogni settimana"],[14,"Ogni 2 settimane"],[30,"Ogni mese"],[60,"Ogni 2 mesi"],[90,"Ogni 3 mesi"],[180,"Ogni 6 mesi"],[365,"Ogni anno"]],al=[["Cambiare le lenzuola",14],["Pulire il bagno",7],["Lavare gli asciugamani",7],["Aspirapolvere",7],["Lavare i pavimenti",7],["Pulire il frigo",30],["Pulire il forno",60],["Pulire il filtro della lavatrice",90],["Lavaggio a vuoto lavatrice",30],["Sbrinare il freezer",180],["Filtri del condizionatore",180],["Annaffiare le piante",3],["Decalcificare la macchina del caffè",60]],il=t=>(yn.find(([e])=>e===t)||[0,`Ogni ${t} giorni`])[1].toLowerCase();function nl(t){const e=Me(k(),Jt(t));return e<0?{cls:"bad",text:`in ritardo di ${-e} ${-e===1?"giorno":"giorni"}`}:e===0?{cls:"warn",text:"oggi"}:e===1?{cls:"",text:"domani"}:{cls:"",text:I(Jt(t))}}function Le(t,{tools:e=!0}={}){const a=nl(t);return`
    <div class="item">
      <button class="box" data-action="chore-done" data-id="${t.id}" aria-label="Fatto oggi: ${r(t.name)}"></button>
      <div class="text"><div>${r(t.name)}</div><div class="hint">${r(il(t.every))} · ultima volta ${r(I(t.lastDone))}</div></div>
      <span class="tag ${a.cls}">${r(a.text)}</span>
      ${e?`<button class="icon-btn" data-action="chore-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${S("edit",16)}</button>
      <button class="icon-btn" data-action="chore-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button>`:""}
    </div>`}function sl(t){return`
    <form data-form="chore-save" class="form-grid" id="chore-form">
      <input type="hidden" name="id" value="${t?t.id:""}">
      <label class="field">Faccenda<input class="input" id="chore-name" name="name" value="${r(t?t.name:"")}" placeholder="Cambiare le lenzuola" required></label>
      <label class="field">Quanto spesso<select class="input" name="every">${yn.map(([e,a])=>`<option value="${e}" ${(t?t.every:7)===e?"selected":""}>${a}</option>`).join("")}</select></label>
      <label class="field">Fatta l'ultima volta<input class="input" type="date" name="lastDone" value="${t?t.lastDone:k()}" max="${k()}"></label>
      <div class="row">
        <button class="btn primary" type="submit">${t?"Salva":"Aggiungi"}</button>
        ${t?'<button class="btn" type="button" data-action="chore-cancel">Annulla</button>':""}
      </div>
    </form>`}L("attivita",{render(){const t=d.data,e=Se(t.todos.filter(o=>!o.done)),a=t.todos.filter(o=>o.done).sort((o,l)=>(l.doneAt||"").localeCompare(o.doneAt||"")).slice(0,30),i=[...t.chores].sort((o,l)=>Jt(o).localeCompare(Jt(l))),n=Ea(t).length,s=d.ui.choreEdit?t.chores.find(o=>o.id===d.ui.choreEdit):null;return`
      ${W(e.length+" aperte"+(n?` · ${n} faccende da fare`:""),"Attività")}
      <section class="card">
        ${un()}
        <div class="list">${e.length?e.map(ie).join(""):'<div class="empty">Nessuna attività aperta.</div>'}</div>
      </section>
      <section class="card" aria-labelledby="h-chores">
        <div class="card-head"><h2 id="h-chores">Faccende ricorrenti</h2><span class="sub">si ripresentano da sole: quando la fai, spunta</span></div>
        ${i.length?`<div class="list">${i.map(o=>Le(o)).join("")}</div>`:'<div class="empty">Nessuna faccenda. Aggiungile man mano che ti vengono in mente, oppure parti dalle idee qui sotto.</div>'}
        <div class="divider-top stack-sm">
          <strong>${s?"Modifica faccenda":"Nuova faccenda"}</strong>
          ${sl(s)}
          ${s?"":`<div class="shop-chips">${al.filter(([o])=>!i.some(l=>l.name===o)).map(([o,l])=>`<button type="button" class="chip" data-action="chore-idea" data-name="${r(o)}" data-w="${l}">${r(o)}</button>`).join("")}</div>`}
        </div>
      </section>
      ${a.length?`
      <section class="card">
        <div class="card-head"><h2>Completate</h2><button class="link" data-action="clear-done">Elimina completate</button></div>
        <div class="list">${a.map(ie).join("")}</div>
      </section>`:""}`},actions:{"clear-done"(){f(t=>{K(t,t.todos.filter(e=>e.done).map(e=>e.id)),t.todos=t.todos.filter(e=>!e.done)})},"chore-done"(t){f(e=>{const a=e.chores.find(i=>i.id===t.dataset.id);a&&(a.lastDone=k(),O(a))})},"chore-idea"(t){const e=document.getElementById("chore-form");e&&(e.name.value=t.dataset.name,e.every.value=t.dataset.w,e.lastDone.focus())},"chore-edit"(t){d.ui.choreEdit=t.dataset.id,b("attivita"),P("#chore-name")},"chore-cancel"(){d.ui.choreEdit=null,b("attivita")},"chore-del"(t){const e=d.data.chores.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»?`)||f(a=>{a.chores=a.chores.filter(i=>i.id!==e.id),K(a,e.id)})}},forms:{"chore-save"(t){const e=String(t.get("name")||"").trim();if(!e)return D("Scrivi la faccenda."),A();const a=Number(t.get("every"))||7,i=t.get("lastDone")||k(),n=t.get("id");f(s=>{if(n){const o=s.chores.find(l=>l.id===n);Object.assign(o,{name:e,every:a,lastDone:i}),O(o)}else s.chores.push(Ns({name:e,every:a,lastDone:i}))}),d.ui.choreEdit=null,b("attivita",{},n?"Faccenda aggiornata":`${e} aggiunta`)}}});const ol=["Compleanno","Natale","Anniversario","Altro"],ll={idea:"idea",preso:"preso",dato:"regalato"},Ot=t=>String(t||"").trim().toLowerCase();function ba(t=k()){const e=Number(t.slice(0,4));return t>`${e}-12-26`?e+1:e}const wn=(t,e)=>t.gifts.filter(a=>a.status==="idea"&&Ot(a.person)===Ot(e));function cl(t){return`
    <div class="item ${t.status==="dato"?"done":""}">
      <div class="text"><div>${r(t.text)}</div><div class="hint">${r(t.occasion)}${t.occasion==="Natale"||t.status!=="idea"?" "+t.year:""}${t.price?" · "+h(t.price):""}</div></div>
      <span class="tag ${t.status==="idea"?"":t.status==="preso"?"warn":"ent"}">${ll[t.status]}</span>
      ${t.link?`<button class="icon-btn" data-action="gift-link" data-id="${t.id}" aria-label="Apri il link di ${r(t.text)}">${S("doc",16)}</button>`:""}
      ${t.status==="idea"?`<button class="btn small" data-action="gift-status" data-id="${t.id}" data-s="preso">Preso</button>`:""}
      ${t.status==="preso"?`<button class="btn small" data-action="gift-status" data-id="${t.id}" data-s="dato">Regalato</button>`:""}
      <button class="icon-btn" data-action="gift-edit" data-id="${t.id}" aria-label="Modifica ${r(t.text)}">${S("edit",16)}</button>
      <button class="icon-btn" data-action="gift-del" data-id="${t.id}" aria-label="Elimina ${r(t.text)}">${S("trash",16)}</button>
    </div>`}function rl(){const t=d.data,e=k(),a=ba(e),i=t.gifts.filter(g=>g.occasion==="Natale"&&(g.status==="idea"||g.year===a)),n=[...new Set(i.map(g=>g.person.trim()))],s=i.filter(g=>g.status!=="idea").reduce((g,m)=>g+(m.price||0),0),o=t.settings.xmasBudget||0,l=Pe(t,e,M(e,60)).sort((g,m)=>g.date.localeCompare(m.date)),c=d.ui.giftEdit?t.gifts.find(g=>g.id===d.ui.giftEdit):null,u=[...new Set(t.gifts.map(g=>g.person.trim()))].sort((g,m)=>g.localeCompare(m,"it")),p=d.ui.giftGiven;return`
    ${W(`${t.gifts.filter(g=>g.status==="idea").length} idee da parte`,"Regali")}
    <section class="card" aria-labelledby="h-xmas">
      <div class="card-head"><h2 id="h-xmas">Natale ${a}</h2><span class="sub">tra ${Me(e,`${a}-12-25`)} giorni</span></div>
      <div class="metrics">
        ${j("Persone",String(n.length))}
        ${j("Presi",`${i.filter(g=>g.status!=="idea").length} di ${i.length}`)}
        ${j("Speso",h(s),o&&s>o?"bad":"",o?`budget ${h(o)}`:"")}
      </div>
      <form class="row" data-form="xmas-budget">
        <label class="sr-only" for="xmas-b">Budget per Natale</label>
        <input class="input amount" id="xmas-b" name="budget" inputmode="decimal" value="${o?r(String(o).replace(".",",")):""}" placeholder="Budget €">
        <button class="btn small" type="submit">Imposta budget</button>
      </form>
      ${i.length?`<div class="list">${n.map(g=>{const m=i.filter(y=>Ot(y.person)===Ot(g));return`<div class="item"><div class="text"><div class="strong">${r(g)}</div><div class="hint">${m.map(y=>r(y.text)+(y.status!=="idea"?" ✓":"")).join(" · ")}</div></div>
          <span class="tag ${m.some(y=>y.status!=="idea")?"ent":"warn"}">${m.some(y=>y.status!=="idea")?"preso":"da prendere"}</span></div>`}).join("")}</div>`:`<div class="empty">Quando ti viene un'idea per Natale durante l'anno, aggiungila con occasione "Natale".</div>`}
    </section>

    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${l.length?`<section class="card" aria-labelledby="h-bd">
          <h2 id="h-bd">Compleanni nei prossimi 2 mesi</h2>
          <div class="list">${l.map(g=>{const m=wn(t,g.contact.name);return`<div class="item"><div class="when">${r(I(g.date))}</div>
              <div class="text"><div>${r(g.contact.name)}${g.age?` <span class="hint">(${g.age})</span>`:""}</div><div class="hint">${m.length?m.map(y=>r(y.text)).join(" · "):"nessuna idea"}</div></div>
              <button class="btn small" data-action="gift-for" data-name="${r(g.contact.name)}">${S("plus",14)}Idea</button></div>`}).join("")}</div>
        </section>`:""}
        <section class="card" aria-labelledby="h-ideas">
          <div class="card-head"><h2 id="h-ideas">Per persona</h2><button class="link" data-action="gift-given">${p?"Nascondi i regali già fatti":"Mostra anche i regali già fatti"}</button></div>
          ${u.length?u.map(g=>{const m=t.gifts.filter(y=>Ot(y.person)===Ot(g)&&(p||y.status!=="dato"));return m.length?`<div class="shop-group"><h3 class="group-title">${r(g)} <span class="hint">${m.length}</span></h3><div class="list">${m.map(cl).join("")}</div></div>`:""}).join(""):'<div class="empty">Nessuna idea ancora. Annotale appena ti vengono: "le piacerebbe quel libro", "ha rotto le cuffie"…</div>'}
        </section>
      </div>
      <form class="card stack grow-1" data-form="gift-save" aria-labelledby="h-giftform">
        <div class="card-head"><h2 id="h-giftform">${c?"Modifica idea":"Nuova idea"}</h2>${c?'<button class="link" type="button" data-action="gift-cancel">Annulla</button>':""}</div>
        <input type="hidden" name="id" value="${c?c.id:""}">
        <label class="field">Per chi<input class="input" id="gift-person" name="person" list="gift-people" value="${r(c?c.person:d.ui.giftFor||"")}" placeholder="Nome" required></label>
        <datalist id="gift-people">${[...new Set([...t.contacts.map(g=>g.name),...u])].map(g=>`<option value="${r(g)}">`).join("")}</datalist>
        <label class="field">Idea<input class="input" id="gift-text" name="text" value="${r(c?c.text:"")}" placeholder="es. il libro di cui parlava" required></label>
        <div class="form-grid two">
          <label class="field">Occasione<select class="input" name="occasion">${ol.map(g=>`<option ${(c?c.occasion:"Compleanno")===g?"selected":""}>${g}</option>`).join("")}</select></label>
          <label class="field">Prezzo (€)<input class="input" name="price" inputmode="decimal" value="${c&&c.price?r(String(c.price).replace(".",",")):""}" placeholder="facoltativo"></label>
        </div>
        <label class="field">Link (facoltativo)<input class="input" name="link" value="${r(c?c.link:"")}" placeholder="https://…"></label>
        <button class="btn primary self-start" type="submit">${c?"Salva":"Aggiungi"}</button>
      </form>
    </div>`}const Ye=t=>d.data.gifts.find(e=>e.id===t);L("regali",{render:rl,actions:{"gift-for"(t){d.ui.giftEdit=null,d.ui.giftFor=t.dataset.name,b("regali"),P("#gift-text")},"gift-given"(){d.ui.giftGiven=!d.ui.giftGiven,b("regali")},"gift-edit"(t){d.ui.giftEdit=t.dataset.id,b("regali"),P("#gift-text")},"gift-cancel"(){d.ui.giftEdit=null,b("regali")},"gift-status"(t){const e=Ye(t.dataset.id);e&&f(()=>{e.status=t.dataset.s,e.occasion==="Natale"?e.year=ba():e.year=Number(k().slice(0,4)),O(e)})},async"gift-link"(t){const e=Ye(t.dataset.id);if(!(!e||!e.link))try{await oe("open_document",{target:e.link})}catch(a){D(String(a)),A()}},"gift-del"(t){const e=Ye(t.dataset.id);!e||!window.confirm(`Eliminare l'idea «${e.text}»?`)||f(a=>{a.gifts=a.gifts.filter(i=>i.id!==e.id),K(a,e.id)})}},forms:{"gift-save"(t,e){const a=String(t.get("person")||"").trim(),i=String(t.get("text")||"").trim();if(!a||!i)return D("Scrivi per chi è e l'idea."),A();const n=String(t.get("price")||"").trim(),s=n?U(n):null;if(n&&!(s>=0))return D("Il prezzo deve essere un numero, es. 25"),A();const o=String(t.get("link")||"").trim();if(o&&!/^https?:\/\//i.test(o))return D("Il link deve iniziare con https://"),A();const l=t.get("occasion")||"Altro",c=t.get("id");f(u=>{if(c){const p=u.gifts.find(g=>g.id===c);Object.assign(p,{person:a,text:i,price:s,link:o,occasion:l}),O(p)}else u.gifts.push(Bi({person:a,text:i,price:s,link:o,occasion:l,year:l==="Natale"?ba():Number(k().slice(0,4))}))}),d.ui.giftEdit=null,d.ui.giftFor="",b("regali",{},c?"Idea aggiornata":`Idea per ${a} salvata`),P("#gift-person")},"xmas-budget"(t,e){const a=String(t.get("budget")||"").trim(),i=a?U(a):0;if(a&&!(i>=0))return D("Il budget deve essere un numero, es. 300"),A();f(n=>{n.settings.xmasBudget=i||0})}}});const dl=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],ul=["dom","lun","mar","mer","gio","ven","sab"],pl="luned[iì]|marted[iì]|mercoled[iì]|gioved[iì]|venerd[iì]|sabato|domenica|lun|mar|mer|gio|ven|sab|dom",Ja=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],ml="(?![a-zà-ù])",gl="(?<![a-zà-ù])",kn=[[/pranzo|cena|colazione|bar\b|caff[eè]|pizza|aperitivo|ristorante|sushi|kebab|gelato|birra/i,"Bar e ristoranti"],[/supermercato|esselunga|coop\b|conad|lidl|carrefour|eurospin|pam\b|spesa\b|alimentari/i,"Spesa"],[/glovo|deliveroo|just ?eat|uber ?eats/i,"Delivery"],[/benzina|carburante|diesel|treno|trenitalia|italo|bus\b|metro|autostrada|telepass|parcheggio|taxi|uber\b/i,"Trasporti"],[/farmacia|medic|dentist|visita|ticket|ottico/i,"Salute"],[/netflix|spotify|prime\b|disney|abbonamento/i,"Abbonamenti"],[/cinema|concerto|teatro|museo|libro|videogioc|steam|playstation/i,"Svago"],[/bolletta|luce\b|gas\b|affitto|condominio/i,"Casa"],[/ricarica|telefono|internet|fibra/i,"Telefono e internet"]];function Ze(t,e){for(const[a,i]of kn)if(a.test(t)&&e.includes(i))return i;return e.includes("Altro")?"Altro":e[0]||"Altro"}function Xe(t,e=k()){const a=n=>(t.slice(0,n.index)+t.slice(n.index+n[0].length)).replace(/\s{2,}/g," ").replace(/\s+([,.;:])/g,"$1").trim();let i;if(i=/\b(?:per |entro )?(oggi|stasera|stamattina)\b/i.exec(t))return{due:e,rest:a(i)};if(i=/\b(?:per |entro )?dopodomani\b/i.exec(t))return{due:M(e,2),rest:a(i)};if(i=/\b(?:per |entro )?domani\b/i.exec(t))return{due:M(e,1),rest:a(i)};if(i=/\b(?:fra|tra) (\d{1,3}) giorni\b/i.exec(t))return{due:M(e,Number(i[1])),rest:a(i)};if(i=/\b(?:fra|tra) una settimana\b/i.exec(t))return{due:M(e,7),rest:a(i)};if(i=new RegExp(`${gl}(?:per |entro |)(${pl})(?: prossimo| prossima)?${ml}`,"i").exec(t)){const n=i[1].toLowerCase().replace("ì","i");let s=dl.findIndex(o=>o.replace("ì","i")===n);if(s<0&&(s=ul.indexOf(n)),s>=0){const o=new Date(e+"T12:00:00").getDay();let l=(s-o+7)%7;return l===0&&(l=7),{due:M(e,l),rest:a(i)}}}if(i=new RegExp(`\\b(?:il |per il |entro il )?(\\d{1,2}) (${Ja.join("|")})(?: (\\d{4}))?\\b`,"i").exec(t)){const n=Number(e.slice(0,4)),s=Ja.indexOf(i[2].toLowerCase())+1;let o=`${i[3]||n}-${String(s).padStart(2,"0")}-${String(Number(i[1])).padStart(2,"0")}`;return!i[3]&&o<e&&(o=`${n+1}${o.slice(4)}`),{due:o,rest:a(i)}}if(i=/\b(?:il |per il |entro il )?(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/.exec(t)){const n=Number(e.slice(0,4));let o=`${i[3]?i[3].length===2?2e3+Number(i[3]):Number(i[3]):n}-${String(Number(i[2])).padStart(2,"0")}-${String(Number(i[1])).padStart(2,"0")}`;if(!i[3]&&o<e&&(o=`${n+1}${o.slice(4)}`),Number(i[2])>=1&&Number(i[2])<=12&&Number(i[1])>=1&&Number(i[1])<=31)return{due:o,rest:a(i)}}if(i=/\b(?:il |per il |entro il )(\d{1,2})\b(?![:.,]\d)/i.exec(t)){const n=Number(i[1]);if(n>=1&&n<=31){let s=`${e.slice(0,8)}${String(n).padStart(2,"0")}`;if(s<e){const[o,l]=e.split("-").map(Number),c=new Date(o,l,15);s=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(n).padStart(2,"0")}`}return{due:s,rest:a(i)}}}return{due:null,rest:t}}function ti(t){const e=i=>(t.slice(0,i.index)+t.slice(i.index+i[0].length)).replace(/\s{2,}/g," ").trim();let a=/(?:\b(?:alle|all'|ore|h)\s*)?\b([01]?\d|2[0-3]):([0-5]\d)\b(?![.,]\d)/i.exec(t)||/\b(?:alle|all'|ore)\s*([01]?\d|2[0-3])\.([0-5]\d)\b(?![.,]\d)/i.exec(t);return a?{time:`${a[1].padStart(2,"0")}:${a[2]}`,rest:e(a)}:(a=/\b(?:alle|ore)\s+([01]?\d|2[0-3])\b(?![.,:]\d)/i.exec(t))?{time:`${a[1].padStart(2,"0")}:00`,rest:e(a)}:{time:null,rest:t}}const V=t=>/^[a-z][A-Z]/.test(t)?t:t.charAt(0).toUpperCase()+t.slice(1),Je=t=>t.replace(/^(?:il|lo|la|i|gli|le|un|uno|una|l'|un')\s*(?=\S)/i,e=>/'$/.test(e)||/\s$/.test(e)?"":e).trim();function ei(t){if(/\b(per|regalo|a casa|di sera)\b/i.test(t))return!1;const e=t.split(/\s*(?:,|;|\be\b)\s*/i).filter(Boolean);return e.length>=1&&e.every(a=>a.trim().split(/\s+/).length<=3)}const ue=t=>t.split(/\s*(?:,|;|\be\b)\s*/i).map(e=>e.trim()).filter(Boolean).map(V),Q=t=>String(t||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\s+/g," ").trim(),ai={abbr:"Abbreviazione",dest:"Va in",area:"Reparto della spesa",full:"Scorciatoia"},fa={todo:"Attività",shop:"Spesa",expense:"Uscita",income:"Entrata",sale:"Da vendere",deadline:"Scadenza",habit:"Abitudine",watch:"Da vedere",note:"Da smistare"},vl=t=>Array.isArray(t?.settings?.cifrario)?t.settings.cifrario.filter(e=>e&&e.word&&!e.off):[],$a=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function ya(t,e){const a=Q(e);return!!a&&new RegExp(`(?<![a-z0-9])${$a(a)}(?![a-z0-9])`).test(t)}function hl(t,e){const a=vl(e);let i=t;const n=[],s={};if(!a.length)return{text:i,hint:s,used:n};const o=a.find(c=>c.kind==="full"&&Q(c.word)===Q(i)&&c.to);o&&(i=String(o.to),n.push(o));for(const c of a.filter(u=>u.kind==="abbr"&&u.to).sort((u,p)=>Q(p.word).length-Q(u.word).length)){const u=i.replace(/\s+/g," ").trim(),p=Q(u),g=new RegExp(`(?<![a-z0-9])${$a(Q(c.word))}(?![a-z0-9])`).exec(p);g&&(i=p.length===u.length?u.slice(0,g.index)+c.to+u.slice(g.index+g[0].length):u.replace(new RegExp(`(?<![\\wà-ù])${$a(c.word)}(?![\\wà-ù])`,"i"),c.to),n.push(c))}const l=Q(i);for(const c of a)c.kind==="dest"&&c.dest&&!s.dest&&ya(l,c.word)&&(s.dest=c.dest,c.category&&(s.category=c.category),c.habit&&(s.habit=c.habit),c.area&&(s.area=c.area),n.push(c)),c.kind==="area"&&c.area&&ya(l,c.word)&&((s.areas=s.areas||[]).push({word:Q(c.word),area:c.area}),n.push(c));return{text:i,hint:s,used:n}}function bl(t,e){const a=Q(t),i=(e?.areas||[]).find(n=>ya(a,n.word));return i?i.area:e?.area||null}function ii(t,e){const a=Q(e);if(!a)return null;const i=(t.habits||[]).filter(n=>!n.archived);return i.find(n=>Q(n.name)===a)||i.find(n=>Q(n.name).startsWith(a)||a.startsWith(Q(n.name)))||null}function Sn(t,e,a=null){const i=String(t||"").trim().replace(/\s+/g," ");if(!i)return null;const n=hl(i,e),s=fl(n.text,e,a||n.hint.dest||null,n.hint);return s&&(s.via=n.used,s.src=i,s.dest==="shop"&&(s.areas=s.items.map(o=>bl(o,n.hint)))),s}function fl(t,e,a,i={}){const n=e.categories?.out||[],s=e.categories?.in||[];let o;if((o=/^(?:spesa|da prendere)\s*[:\-]?\s+(.+)$/i.exec(t))&&(!a||a==="shop"))return{dest:"shop",items:ue(o[1])};if((o=/^(?:compra(?:re)?|prendere)\s*[:\-]?\s+(.+)$/i.exec(t))&&!a&&ei(o[1]))return{dest:"shop",items:ue(o[1])};if((o=/^(?:idea\s+)?regalo(?:\s+(?:per|a))?\s+([^:]+?)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="gift")){const w=/natale/i.test(t);return{dest:"gift",person:V(o[1].trim()),text:V(o[2].trim()),occasion:w?"Natale":"Compleanno"}}if((o=/^(film|serie|libro|da vedere|da leggere)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="watch")){const w=o[1].toLowerCase();return{dest:"watch",kind:w==="film"?"Film":w==="serie"?"Serie":w==="libro"||w==="da leggere"?"Libro":"Film",title:o[2].trim()}}if((o=/^(nota|idea|appunto|pensiero)\s*:\s*(.+)$/i.exec(t))&&(!a||a==="note"))return{dest:"note",text:V(o[2].trim())};if((o=/^(?:vend(?:o|ere)|da vendere|metti in vendita|mettere in vendita)\s*[:\-]?\s+(.+)$/i.exec(t))&&(!a||a==="sale")){const w=/^(.+?)\s+(?:a\s+)?(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?$/i.exec(o[1].trim());return{dest:"sale",name:V(Je((w?w[1]:o[1]).trim())),price:w?F(w[2]):null}}if(!a||a==="loan"){const w="(\\d{1,6}(?:[.,]\\d{1,2})?)\\s*(?:€|euro)?";if(o=new RegExp(`^(?:ho\\s+)?prestat[oiae]\\s+${w}\\s+a\\s+(.+)$`,"i").exec(t))return{dest:"loan",dir:"out",amount:F(o[1]),person:V(o[2].trim())};if(o=new RegExp(`^(.+?)\\s+mi\\s+deve\\s+${w}(?:\\s+(?:per\\s+)?(.+))?$`,"i").exec(t))return{dest:"loan",dir:"out",amount:F(o[2]),person:V(o[1].trim()),note:o[3]?V(o[3].trim()):""};if(o=new RegExp(`^devo\\s+${w}\\s+a\\s+(.+)$`,"i").exec(t))return{dest:"loan",dir:"in",amount:F(o[1]),person:V(o[2].trim())};if(o=new RegExp(`^(.+?)\\s+mi\\s+ha\\s+prestato\\s+${w}$`,"i").exec(t))return{dest:"loan",dir:"in",amount:F(o[2]),person:V(o[1].trim())}}if(!a||a==="habit"){if(o=/^(?:fatt[oa]|fatti|ho fatto)\s+(.+)$/i.exec(t)){const w=ii(e,o[1]);if(w)return{dest:"habit",habitId:w.id,name:w.name}}if(a==="habit"){const w=ii(e,i.habit||t.replace(/^(?:fatt[oa]|fatti|ho fatto)\s+/i,""));return{dest:"habit",habitId:w?w.id:null,name:w?w.name:V(t)}}}if((o=/^(?:incassat[oi]|ricevut[oi]|entrat[ae])\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s*(?:da\s+|per\s+)?(.*)$/i.exec(t))&&(!a||a==="income")){const w=V((o[2]||"Entrata").trim());return{dest:"income",amount:F(o[1]),note:w,category:i.category&&s.includes(i.category)?i.category:s.includes("Altre entrate")?"Altre entrate":s[0]||"Altre entrate"}}if((o=/^(?:spes[oi]|pagat[oi]|uscit[ae])\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s*(?:di\s+|per\s+|in\s+)?(.*)$/i.exec(t))&&(!a||a==="expense")){const w=V((o[2]||"Spesa").trim());return{dest:"expense",amount:F(o[1]),note:w,category:i.category&&n.includes(i.category)?i.category:Ze(w,n)}}if(/\bscad(?:e|ono|enza|ere)\b/i.test(t)&&(!a||a==="deadline")){const{due:w,rest:z}=Xe(t);return{dest:"deadline",name:V(Je(z.replace(/\b(?:mi\s+)?scad(?:e|ono|enza|ere)\b\s*(?:il\s+|l'|di\s+)?/i,"").replace(/\s{2,}/g," ").trim())||"Scadenza"),due:w}}const l=w=>(e.shopping||[]).some(z=>Q(z.name)===Q(w));if((o=/^(\d{1,2})\s+([a-zà-ù][a-zà-ù'’]*(?:\s+[a-zà-ù'’]+)?)$/i.exec(t))&&(!a||a==="shop")&&(l(o[2])||Number(o[1])<=12&&!kn.some(([w])=>w.test(o[2]))))return{dest:"shop",items:[V(o[2].trim())],qty:o[1]};if((o=/^(.+?)\s+x\s?(\d{1,2})$/i.exec(t))&&(!a||a==="shop"))return{dest:"shop",items:[V(o[1].trim())],qty:o[2]};const c=/^(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?\s+(.+)$/i.exec(t)||/^(.+?)\s+(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)$/i.exec(t)||/^(.+?)\s+(\d{1,6}[.,]\d{2})$/.exec(t);if(c&&(!a||a==="expense"||a==="income")&&!ti(t).time){const w=/^\d/.test(t),z=F(w?c[1]:c[2]),N=V((w?c[2]:c[1]).trim());if(z>0&&a==="income")return{dest:"income",amount:z,note:N,category:s.includes("Altre entrate")?"Altre entrate":s[0]||"Altre entrate"};if(z>0)return{dest:"expense",amount:z,note:N,category:i.category&&n.includes(i.category)?i.category:Ze(N,n)}}if(a==="shop")return{dest:"shop",items:ue(t)};if(a==="gift"){const w=t.split(":");return{dest:"gift",person:V((w.length>1?w[0]:"").trim()),text:V((w.length>1?w.slice(1).join(":"):t).trim()),occasion:"Compleanno"}}if(a==="watch")return{dest:"watch",kind:"Film",title:t};if(a==="sale"){const w=/^(.+?)\s+(?:a\s+)?(\d{1,6}(?:[.,]\d{1,2})?)\s*(?:€|euro)?$/i.exec(t);return{dest:"sale",name:V((w?w[1]:t).trim()),price:w?F(w[2]):null}}if(a==="expense"){const w=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"expense",amount:w?F(w[1]):null,note:V(w&&t.replace(w[0],"").replace(/\s*(?:€|euro)\s*/i," ").trim()||t),category:i.category&&n.includes(i.category)?i.category:Ze(t,n)}}if(a==="income"){const w=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"income",amount:w?F(w[1]):null,note:V(w&&t.replace(w[0],"").replace(/\s*(?:€|euro)\s*/i," ").trim()||t),category:i.category&&s.includes(i.category)?i.category:s.includes("Altre entrate")?"Altre entrate":s[0]||"Altre entrate"}}if(a==="note")return{dest:"note",text:V(t)};if(a==="deadline"){const{due:w,rest:z}=Xe(t);return{dest:"deadline",name:V(Je(z)||t),due:w}}if(a==="loan"){const w=/(\d{1,6}(?:[.,]\d{1,2})?)/.exec(t);return{dest:"loan",dir:"out",amount:w?F(w[1]):null,person:V((w?t.replace(w[0],""):t).replace(/\s*(?:€|euro)\s*/i," ").replace(/^\s*a\s+/i,"").trim())}}const u=ti(t),{due:p,rest:g}=Xe(u.rest);if(p||u.time||a==="todo")return{dest:"todo",text:V((g||t).replace(/^devo\s+/i,"")),due:p||(u.time?k():null),time:u.time};const m=t.split(" "),y=/^(devo|chiamare|scrivere|pagare|prenotare|portare|mandare|fare|comprare|ritirare|controllare|sentire|rinnovare|disdire|cercare|preparare|pulire|sistemare|andare|ricordare|[a-zà-ù]+(?:are|ere|ire))\b/i.test(t);return l(t)||!y&&(m.length<=3||ei(t))?{dest:"shop",items:ue(t)}:{dest:"todo",text:V(t.replace(/^devo\s+/i,"")),due:null,time:null}}function xn(t){return String(t||"").split(/,(?!\d)|;|\n/).map(e=>e.trim()).filter(Boolean)}function xe(t,e,a={}){return xn(t).map((i,n)=>Sn(i,e,a[n]&&a[n].src===i?a[n].dest:null)).filter(Boolean)}function An(t){const e=/^(il|lo|la|i|gli|le|un|uno|una|di|a|da|in|con|su|per|tra|fra|e|ho|mi|devo|fatto|fatta|spesi|pagato|alle|ore|oggi|domani)$/i;return String(t||"").toLowerCase().split(/[\s,.:;]+/).filter(i=>i&&!/^\d/.test(i)&&!e.test(i))[0]||""}const At={todo:{label:"Attività",where:"Attività",ic:"todo",cls:"acc"},shop:{label:"Spesa",where:"Spesa",ic:"cart",cls:"good"},expense:{label:"Uscita",where:"Finanze",ic:"wallet",cls:"warn"},income:{label:"Entrata",where:"Finanze",ic:"wallet",cls:"good"},sale:{label:"Da vendere",where:"Vendite",ic:"tag",cls:"warn"},deadline:{label:"Scadenza",where:"Scadenze",ic:"doc",cls:"bad"},gift:{label:"Regalo",where:"Rubrica · Regali",ic:"gift",cls:"vio"},loan:{label:"Prestito",where:"Rubrica · Prestiti",ic:"loan",cls:"vio"},habit:{label:"Abitudine",where:"Abitudini",ic:"habit",cls:"good"},watch:{label:"Da vedere",where:"Da vedere",ic:"film",cls:"vio"},note:{label:"Nota",where:"Da smistare",ic:"edit",cls:""}},ta=Object.keys(At),$l=["dentista mar 17:30","latte, pane, 2 detersivo","spesi 23,50 benzina","vendo monitor 80","bollo scade il 30","prestato 20 a Luca","regalo mamma: sciarpa","fatto palestra","idea: mensola in corridoio"],Ae=t=>t===k()?"oggi":I(t);function be(t,e){const a=[];let i="",n="";switch(t.dest){case"todo":i=t.text,a.push(["data",t.due?Ae(t.due):"senza data"]),t.time&&a.push(["ora",t.time]);break;case"shop":i=t.items.join(", "),t.qty&&a.push(["quantità",t.qty]),t.items.forEach((s,o)=>{const l=It(e,s),c=t.areas&&t.areas[o]||l&&l.area;c&&c!=="Altro"&&a.push(["reparto",c])}),t.items.some(s=>It(e,s))&&a.push(["","già in elenco: la rimetto da prendere"]);break;case"expense":case"income":i=t.note,t.amount>0?a.push([t.dest==="expense"?"uscita":"entrata",h(t.amount)]):n=`manca l'importo, es. "12,50 pranzo"`,a.push(["categoria",t.category]),Y(e)||(n="crea prima un conto in Finanze");break;case"sale":i=t.name,a.push(["prezzo",t.price?h(t.price):"da decidere"]);break;case"deadline":i=t.name,t.due?a.push(["scade",Ae(t.due)],["avviso","30 giorni prima"]):n='manca la data, es. "bollo scade il 30"';break;case"gift":i=t.text,t.person?a.push(["per",t.person]):n='scrivi "regalo Nome: idea"',t.occasion==="Natale"&&a.push(["","Natale"]);break;case"loan":i=t.person||"—",!(t.amount>0)||!t.person?n='scrivi "prestato 20 a Luca" o "Luca mi deve 20"':a.push([t.dir==="out"?"ti deve":"devi",h(t.amount)]);break;case"habit":i=t.name,t.habitId?a.push(["segna","fatta oggi"]):n="non trovo questa abitudine tra le tue";break;case"watch":i=t.title,a.push(["tipo",t.kind]);break;case"note":i=t.text;break}return{title:i,fields:a,problem:n}}function qa(t="card"){if(d.ui.capOverlay&&t!=="pop")return t==="bar"?yl():"";const e=d.ui.capText||"";return`
    <section class="cap cap-${t} ${t==="card"?"card":""}" aria-label="Annota al volo">
      <form class="cap-form" data-form="cap-save">
        <span class="cap-title">Annota al volo</span>
        <label class="sr-only" for="cap-text">Cosa vuoi annotare</label>
        <input class="input grow" id="cap-text" name="text" autocomplete="off" value="${r(e)}"
          placeholder="Una o più cose, separate da virgola: latte · chiamare Marco venerdì 17:30 · 12,50 pranzo · bollo scade il 30">
        <button class="btn primary" type="submit" id="cap-save">Salva</button>
      </form>
      <div class="cap-body" id="cap-body">${In()}</div>
    </section>`}function yl(){return`<div class="cap cap-bar"><button class="cap-idle" data-action="cap-open">${S("edit",16)}<span class="cap-title">Annota al volo</span><span class="hint">Ctrl+Alt+Spazio</span></button></div>`}function In(){const t=d.data,e=xe(d.ui.capText||"",t,d.ui.capForces||{}),a=(d.ui.capRecent||[]).slice(0,4),i=e.length?`
    <div class="cap-head"><span class="label">Ho capito</span><span class="hint">clic sul tipo per cambiarlo</span></div>
    <div class="cap-items">${e.map((o,l)=>{const c=At[o.dest],u=be(o,t),g=d.ui.capForces&&d.ui.capForces[l]&&d.ui.capForces[l].src===o.src?An(o.src):"",m=g&&(t.settings.cifrario||[]).some(y=>y.word.toLowerCase()===g&&y.kind==="dest"&&y.dest===o.dest);return`
      <div class="cap-item ${c.cls} ${u.problem?"has-problem":""}">
        <div class="cap-item-top">
          <button type="button" class="cap-type" data-action="cap-cycle" data-i="${l}" aria-label="Tipo: ${r(c.label)}. Clic per cambiarlo">${S(c.ic,14)}${r(c.label)}${S("right",12,2.4)}</button>
          <span class="hint">→ ${r(c.where)}</span>
          ${o.via&&o.via.length?`<span class="tag cap-via" title="${r(o.via.map(y=>y.word).join(", "))}">dal tuo cifrario</span>`:""}
        </div>
        <div class="cap-item-title">${r(u.title)}</div>
        ${u.fields.length?`<div class="cap-fields">${u.fields.map(([y,w])=>`<span>${y?`<span class="hint">${r(y)}</span> `:""}${r(w)}</span>`).join("")}</div>`:""}
        ${u.problem?`<div class="cap-problem">${r(u.problem)}</div>`:""}
        ${g&&!m?`<div class="cap-remember"><span>Ricordo che «${r(g)}» va in ${r(c.label)}?</span><button type="button" class="btn small" data-action="cap-remember" data-i="${l}">Sì, ricorda</button></div>`:""}
      </div>`}).join("")}</div>`:`
    <div class="cap-examples"><span class="hint">Prova:</span>${$l.map(o=>`<button type="button" class="chip" data-action="cap-example" data-text="${r(o)}">${r(o)}</button>`).join("")}</div>`,n=a.length?`
    <div class="cap-recent"><div class="cap-head"><span class="label">Appena annotate</span></div>
    ${a.map((o,l)=>`<div class="cap-rec"><span class="dot-cat ${At[o.dest]?.cls||""}" aria-hidden="true"></span><span class="grow">${r(o.title)}</span><span class="hint">${r(At[o.dest]?.where||"")} · ${r(o.at)}</span>${o.undo?`<button type="button" class="btn small" data-action="cap-undo" data-i="${l}">Annulla</button>`:'<span class="hint">annullata</span>'}</div>`).join("")}</div>`:"",s=`<div class="cap-keys hint"><span><kbd>Invio</kbd> salva tutto</span><span><kbd>,</kbd> più cose insieme</span><span><kbd>Win</kbd>+<kbd>H</kbd> detta a voce</span><span><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Spazio</kbd> da ovunque</span>${d.ui.capOverlay?"<span><kbd>Esc</kbd> chiudi</span>":""}</div>`;return i+n+s}function Ie(){const t=document.getElementById("cap-text"),e=t&&t.closest(".cap");e&&e.classList.toggle("has-text",!!(d.ui.capText||"").trim());const a=document.getElementById("cap-body");a&&(a.innerHTML=In());const i=document.getElementById("cap-save");if(i){const n=xn(d.ui.capText||"").length;i.textContent=n>1?`Salva (${n})`:"Salva"}}function wl(){const t=document.getElementById("cap-overlay");t&&t.addEventListener("mousedown",a=>{a.target===t&&Ta()});const e=document.getElementById("cap-text");e&&(e.addEventListener("input",()=>{d.ui.capText=e.value,e.value.trim()||(d.ui.capForces={}),Ie()}),Ie())}function Cn(){d.ui.capOverlay=!0,A(),P("#cap-text")}function Ta(){d.ui.capOverlay&&(d.ui.capOverlay=!1,A())}function kl(){return d.ui.capOverlay?`<div class="cap-overlay" id="cap-overlay"><div class="cap-dialog" role="dialog" aria-modal="true" aria-label="Annota al volo">
    <button class="icon-btn cap-close" data-action="cap-close" aria-label="Chiudi">${S("plus",18)}</button>
    ${qa("pop")}</div></div>`:""}function Sl(t,e){const a=k();switch(e.dest){case"todo":{const i=ne({text:e.text,due:e.due,time:e.time||null});return t.todos.push(i),{title:e.text+(e.due?` · ${Ae(e.due)}${e.time?" "+e.time:""}`:""),undo:n=>{n.todos=n.todos.filter(s=>s.id!==i.id),K(n,i.id)}}}case"shop":{const i=[];return e.items.forEach((n,s)=>{const o=e.areas&&e.areas[s]||null,l=It(t,n);if(l){const c={need:l.need,boughtAt:l.boughtAt,note:l.note,area:l.area};l.need=!0,l.boughtAt=null,e.qty&&(l.note=e.qty+(l.note&&!/^\d+$/.test(l.note)?" · "+l.note:"")),o&&(l.area=o),O(l),i.push(u=>{const p=u.shopping.find(g=>g.id===l.id);p&&(Object.assign(p,c),O(p))})}else{const c=Rt({name:n,need:!0,area:o||"Altro",note:e.qty||""});t.shopping.push(c),o&&!t.shopAreas.includes(o)&&t.shopAreas.splice(Math.max(0,t.shopAreas.length-1),0,o),i.push(u=>{u.shopping=u.shopping.filter(p=>p.id!==c.id),K(u,c.id)})}}),{title:(e.qty?e.qty+" ":"")+e.items.join(", "),undo:n=>i.forEach(s=>s(n))}}case"expense":case"income":{const i=Y(t),n={id:G(),accountId:i.id,date:a,type:e.dest==="expense"?"out":"in",amount:e.amount,category:e.category,note:e.note,transfer:!1,invest:!1,createdAt:new Date().toISOString()};return t.transactions.push(n),{title:`${e.note} ${e.dest==="expense"?"−":"+"}${h(e.amount)}`,undo:s=>{s.transactions=s.transactions.filter(o=>o.id!==n.id)}}}case"sale":{const i=_i({name:e.name,price:e.price});return t.sales.push(i),{title:e.name+(e.price?" · "+h(e.price):""),undo:n=>{n.sales=n.sales.filter(s=>s.id!==i.id)}}}case"deadline":{const i=Te({name:e.name,due:e.due});return t.deadlines.push(i),{title:`${e.name} · ${Ae(e.due)}`,undo:n=>{n.deadlines=n.deadlines.filter(s=>s.id!==i.id)}}}case"gift":{const i=Bi({person:e.person,text:e.text,occasion:e.occasion});return t.gifts.push(i),{title:`${e.text} per ${e.person}`,undo:n=>{n.gifts=n.gifts.filter(s=>s.id!==i.id)}}}case"loan":{const i=Gi({person:e.person,dir:e.dir,amount:e.amount,note:e.note||""});return t.loans.push(i),{title:`${e.person} ${e.dir==="out"?"ti deve":"devi"} ${h(e.amount)}`,undo:n=>{n.loans=n.loans.filter(s=>s.id!==i.id)}}}case"habit":{const i=t.habits.find(s=>s.id===e.habitId),n=!!t.habitLog[i.id]?.[a];return n||da(t,i,a),{title:`${i.name} fatta`,undo:n?null:s=>{const o=s.habits.find(l=>l.id===i.id);o&&s.habitLog[o.id]?.[a]&&da(s,o,a)}}}case"watch":{const i=Ui({title:e.title,kind:e.kind});return t.watchlist.push(i),{title:e.title,undo:n=>{n.watchlist=n.watchlist.filter(s=>s.id!==i.id)}}}case"note":{const i=qs({text:e.text});return t.inbox.push(i),{title:e.text,undo:n=>{n.inbox=n.inbox.filter(s=>s.id!==i.id)}}}}return null}function xl(){const t=d.data,e=xe(d.ui.capText||"",t,d.ui.capForces||{});if(!e.length)return;const a=e.filter(n=>!be(n,t).problem),i=e.filter(n=>be(n,t).problem);d.ui.capText=i.map(n=>n.src).join(", "),d.ui.capForces={},i.length?D(`${a.length?`Salvate ${a.length}. `:""}Da sistemare: ${i.map(n=>`"${n.src}" (${be(n,t).problem})`).join("; ")}`):q(a.length===1?`Annotata: ${At[a[0].dest].label.toLowerCase()} → ${At[a[0].dest].where}`:`Annotate ${a.length} cose`),a.length?f(n=>{const s=[];for(const o of a){const l=Sl(n,o);l&&s.push(Object.assign(l,{dest:o.dest,at:Os()}))}d.ui.capRecent=s.reverse().concat(d.ui.capRecent||[]).slice(0,8)}):A(),P("#cap-text")}L("cattura",{actions:{"cap-cycle"(t){const e=xe(d.ui.capText||"",d.data,d.ui.capForces||{}),a=Number(t.dataset.i),i=e[a];if(!i)return;const n=ta[(ta.indexOf(i.dest)+1)%ta.length];d.ui.capForces=Object.assign({},d.ui.capForces,{[a]:{src:i.src,dest:n}}),Ie(),requestAnimationFrame(()=>{const s=document.querySelector(`[data-action="cap-cycle"][data-i="${a}"]`);s&&s.focus()})},"cap-remember"(t){const a=xe(d.ui.capText||"",d.data,d.ui.capForces||{})[Number(t.dataset.i)];if(!a)return;const i=An(a.src);if(!i)return;const n={word:i,kind:"dest",dest:a.dest};(a.dest==="expense"||a.dest==="income")&&(n.category=a.category),a.dest==="habit"&&a.name&&(n.habit=a.name),a.dest in fa&&(q(`Ricordato: «${i}» → ${At[a.dest].label}. Lo trovi in Impostazioni → Cifrario`),f(s=>{s.settings.cifrario=(s.settings.cifrario||[]).filter(o=>!(o.kind==="dest"&&o.word.toLowerCase()===i)).concat([Vi(n)])}),P("#cap-text"))},"cap-example"(t){d.ui.capText=t.dataset.text,d.ui.capForces={};const e=document.getElementById("cap-text");e&&(e.value=d.ui.capText,e.focus()),Ie()},"cap-undo"(t){const e=(d.ui.capRecent||[])[Number(t.dataset.i)];if(!e||!e.undo)return;const a=e.undo;e.undo=null,q("Annullata: "+e.title),f(i=>a(i))},"cap-open"(){Cn()},"cap-close"(){Ta()},"inbox-todo"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(q("Spostata in Attività"),f(a=>{a.inbox=a.inbox.filter(i=>i.id!==e.id),a.todos.push(ne({text:e.text}))}))},"inbox-shop"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(q("Spostata nella Spesa"),f(a=>{a.inbox=a.inbox.filter(n=>n.id!==e.id);const i=It(a,e.text);i?(i.need=!0,i.boughtAt=null,O(i)):a.shopping.push(Rt({name:e.text}))}))},"inbox-edit"(t){const e=d.data.inbox.find(a=>a.id===t.dataset.id);e&&(d.ui.capText=e.text,d.ui.capForces={},f(a=>{a.inbox=a.inbox.filter(i=>i.id!==e.id)}),P("#cap-text"))},"inbox-del"(t){f(e=>{e.inbox=e.inbox.filter(a=>a.id!==t.dataset.id)})}},forms:{"cap-save"(t){d.ui.capText=String(t.get("text")||""),d.ui.capText.trim()&&xl()}}});function En(t){return t.inbox.length?`
    <section class="card" aria-labelledby="h-inbox">
      <div class="card-head"><h2 id="h-inbox">Da smistare</h2><span class="sub">${t.inbox.length}</span></div>
      <div class="list">${t.inbox.slice().reverse().map(e=>`
        <div class="item"><div class="text">${r(e.text)}</div>
          <button class="btn small" data-action="inbox-todo" data-id="${e.id}">Attività</button>
          <button class="btn small" data-action="inbox-shop" data-id="${e.id}">Spesa</button>
          <button class="icon-btn" data-action="inbox-edit" data-id="${e.id}" aria-label="Riscrivi in Annota al volo: ${r(e.text)}">${S("edit",16)}</button>
          <button class="icon-btn" data-action="inbox-del" data-id="${e.id}" aria-label="Elimina ${r(e.text)}">${S("trash",16)}</button>
        </div>`).join("")}</div>
    </section>`:""}Lt.overlay=kl;Lt.bar=()=>qa("bar");Lt.after.push(t=>{t==="main"?wl():d.ui.capOverlay=!1});const Al={pag:"Pagamento",scad:"Scadenza",comp:"Compleanno",att:"Attività"},ni=(t,e)=>`${I(t)} – ${I(e)}`;function zn(t){const e=k(),a=new Date(e+"T12:00:00").getDay();if(a!==0&&a!==1)return"";const i=a===0?st(e):M(st(e),-7),n=Wi(t,i),s=n.habits.filter(o=>o.n>=o.h.perWeek).length;return`
    <section class="card" aria-labelledby="h-week">
      <div class="card-head"><h2 id="h-week">${a===0?"La tua settimana":"La settimana scorsa"}</h2><button class="link" data-action="week-open" data-mon="${i}">Apri il riepilogo</button></div>
      <div class="sub">Speso ${h(n.out)}${n.avgOut!=null?` (media ${h(n.avgOut)})`:""} · ${n.doneTodos.length} attività fatte${n.habits.length?` · abitudini ${s}/${n.habits.length}`:""}${n.next.length?` · ${n.next.length} cose la prossima settimana`:""}</div>
    </section>`}function Il(){const t=d.data,e=d.ui.weekOff??0,a=M(st(k()),-7*e),i=Wi(t,a),n=i.avgOut!=null?Math.round((i.out-i.avgOut)*100)/100:null,s=i.habits.filter(l=>l.n>=l.h.perWeek).length,o=i.cats.length?i.cats[0][1]:1;return`
    ${W(ni(i.mon,i.sun),e===0?"Questa settimana":e===1?"La settimana scorsa":"La tua settimana",`
      <button class="icon-btn" data-action="week-nav" data-n="1" aria-label="Settimana precedente">${S("left")}</button>
      ${e?'<button class="btn" data-action="week-nav" data-n="0">Questa settimana</button>':""}
      <button class="icon-btn" data-action="week-nav" data-n="-1" ${e?"":"disabled"} aria-label="Settimana successiva">${S("right")}</button>`)}
    <section class="metrics">
      ${j("Speso",h(i.out),n!=null&&n>0?"warn":"",i.avgOut!=null?n>0?`${h(n)} più della media`:n<0?`${h(-n)} meno della media`:"come la media":"esclusi giroconti e investimenti")}
      ${j("Entrate",h(i.inc),i.inc?"good":"")}
      ${j("Attività fatte",String(i.doneTodos.length),"",i.chores.length?`+ ${i.chores.length} faccende`:"")}
      ${j("Abitudini rispettate",i.habits.length?`${s} di ${i.habits.length}`:"—",i.habits.length&&s===i.habits.length?"good":"")}
    </section>
    <div class="grid">
      <section class="card" aria-labelledby="h-wcat">
        <h2 id="h-wcat">Dove sono andati i soldi</h2>
        ${i.cats.length?`<div class="stack-sm">${i.cats.slice(0,6).map(([l,c])=>`
          <div><div class="cat-row"><span>${r(l)}</span><span class="money">${h(c)}</span></div><div class="progress cat"><div style="width:${Math.round(c/o*100)}%"></div></div></div>`).join("")}</div>`:'<div class="empty">Nessuna spesa registrata in questa settimana.</div>'}
      </section>
      <section class="card" aria-labelledby="h-whab">
        <h2 id="h-whab">Abitudini</h2>
        ${i.habits.length?`<div class="list">${i.habits.map(({h:l,n:c})=>`
          <div class="item"><div class="text">${r(l.name)}</div><span class="tag ${c>=l.perWeek?"ent":c?"warn":""}">${c}/${l.perWeek}</span></div>`).join("")}</div>`:'<div class="empty">Nessuna abitudine da seguire.</div>'}
      </section>
      <section class="card" aria-labelledby="h-wdone">
        <h2 id="h-wdone">Fatto</h2>
        ${i.doneTodos.length||i.chores.length?`<div class="list tight">${[...i.doneTodos.map(l=>({text:l.text,when:l.doneAt})),...i.chores.map(l=>({text:l.name,when:l.lastDone}))].sort((l,c)=>l.when.localeCompare(c.when)).map(l=>`<div class="item done"><div class="when">${r(I(l.when))}</div><div class="text">${r(l.text)}</div></div>`).join("")}</div>`:'<div class="empty">Niente segnato come fatto.</div>'}
        ${i.late.length?`<div class="banner warn">${i.late.length} ${i.late.length===1,"attività in ritardo"}: ${r(i.late.slice(0,3).map(l=>l.text).join(", "))}${i.late.length>3?"…":""}</div>`:""}
      </section>
      <section class="card" aria-labelledby="h-wnext">
        <div class="card-head"><h2 id="h-wnext">La settimana dopo</h2><span class="sub">${r(ni(i.nMon,i.nSun))}</span></div>
        ${i.next.length?`<div class="list tight">${i.next.map(l=>`
          <div class="item"><div class="when">${r(pt(l.date))}</div><span class="dot-cat ${l.kind}" aria-hidden="true"></span><div class="text"><div>${r(l.text)}</div><div class="hint">${Al[l.kind]}</div></div>${l.amount?`<span class="money">${h(l.amount)}</span>`:""}</div>`).join("")}</div>`:'<div class="empty">Niente in programma.</div>'}
        <div class="row">
          <span class="sub">Menù: ${i.dinners?`${i.dinners} cene su 7 decise`:"ancora da fare"}</span>
          ${i.dinners<7?'<button class="link" data-action="week-meals">Prepara il menù</button>':""}
        </div>
      </section>
    </div>`}L("settimana",{render:Il,actions:{"week-nav"(t){const e=Number(t.dataset.n);d.ui.weekOff=e===0?0:Math.max(0,(d.ui.weekOff||0)+e),b("settimana")},"week-open"(t){d.ui.weekOff=Math.round(Me(t.dataset.mon,st(k()))/7),b("settimana")},"week-meals"(){const t=d.ui.weekOff??0;d.ui.mealWeek=1-t,b("pasti")}}});const Ft=900,Bt=280,J={l:64,r:20,t:16,b:30};function Cl(t,e=4){const a=t/e||1,i=Math.pow(10,Math.floor(Math.log10(a))),n=a/i;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*i}function Dn(t,e){let a=Math.min(...t),i=Math.max(...t);e&&(a=Math.min(a,0),i=Math.max(i,0)),a===i&&(a-=1,i+=1);const n=Cl(i-a);a=Math.floor(a/n)*n,i=Math.ceil(i/n)*n;const s=[];for(let l=a;l<=i+n/2;l+=n)s.push(Math.round(l*100)/100);return{y:l=>J.t+(Bt-J.t-J.b)*(1-(l-a)/(i-a)),ticks:s}}const Ma=t=>{const e=Math.abs(t),a=e>=1e4?(e/1e3).toLocaleString("it-IT",{maximumFractionDigits:e>=1e5?0:1})+"k":e.toLocaleString("it-IT",{maximumFractionDigits:e<10?1:0});return(t<0?"−":"")+a+" €"};function jn(t,e,a,i,n=Ma){const s=t.ticks.map(l=>`<line class="ch-grid ${l===0?"zero":""}" x1="${J.l}" x2="${Ft-J.r}" y1="${t.y(l)}" y2="${t.y(l)}"/><text class="ch-tick" x="${J.l-8}" y="${t.y(l)+4}" text-anchor="end">${r(n(l))}</text>`).join(""),o=e.map((l,c)=>c%i===0||c===e.length-1?`<text class="ch-tick" x="${a(c)}" y="${Bt-8}" text-anchor="middle">${r(l)}</text>`:"").join("");return s+o}function Nn(t,e,a,i){return i.map((n,s)=>`<rect class="ch-hit" x="${e(s)-a/2}" y="${J.t}" width="${a}" height="${Bt-J.t-J.b}" tabindex="0"
    data-i="${s}" data-x="${e(s)}" data-title="${r(n.title)}" data-value="${r(n.value)}" data-sub="${r(n.sub||"")}" aria-label="${r(n.title+": "+n.value)}"/>`).join("")}function Fe(t,{id:e="ch",fmt:a=Ma}={}){if(t.length<2)return'<div class="empty">Servono almeno due mesi di dati.</div>';const i=Dn(t.map(c=>c.value),!1),n=(Ft-J.l-J.r)/(t.length-1),s=c=>J.l+c*n,o=t.map((c,u)=>`${u?"L":"M"}${s(u).toFixed(1)},${i.y(c.value).toFixed(1)}`).join(" "),l=t[t.length-1];return`
    <div class="chart" data-chart="${e}">
      <svg viewBox="0 0 ${Ft} ${Bt}" role="img" aria-label="Grafico a linea, ${t.length} mesi">
        ${jn(i,t.map(c=>c.label),s,Math.ceil(t.length/8),a)}
        <line class="ch-cross" x1="0" x2="0" y1="${J.t}" y2="${Bt-J.b}" hidden/>
        <path class="ch-line" d="${o}"/>
        ${t.map((c,u)=>`<circle class="ch-dot" cx="${s(u)}" cy="${i.y(c.value)}" r="${u===t.length-1?4.5:3}"/>`).join("")}
        <text class="ch-label" x="${s(t.length-1)-6}" y="${i.y(l.value)-10}" text-anchor="end">${r(a(l.value))}</text>
        ${Nn(t.length,s,n,t.map(c=>({title:c.title,value:c.valueText,sub:c.sub})))}
      </svg>
      <div class="ch-tip" hidden></div>
    </div>`}function Pa(t,{id:e="bar",fmt:a=Ma}={}){if(!t.length)return'<div class="empty">Nessun dato.</div>';const i=Dn(t.map(u=>u.value),!0),n=(Ft-J.l-J.r)/t.length,s=u=>J.l+n*(u+.5),o=Math.min(36,n*.62),l=i.y(0),c=t.map((u,p)=>{const g=i.y(u.value),m=Math.min(g,l),y=Math.max(1,Math.abs(l-g)),w=Math.min(4,y/2),z=s(p)-o/2,N=u.value>=0?`M${z},${l} V${m+w} Q${z},${m} ${z+w},${m} H${z+o-w} Q${z+o},${m} ${z+o},${m+w} V${l} Z`:`M${z},${l} V${m+y-w} Q${z},${m+y} ${z+w},${m+y} H${z+o-w} Q${z+o},${m+y} ${z+o},${m+y-w} V${l} Z`;return`<path class="ch-bar ${u.value<0?"neg":"pos"} ${u.partial?"partial":""}" d="${N}" data-bar="${p}"/>`}).join("");return`
    <div class="chart" data-chart="${e}">
      <svg viewBox="0 0 ${Ft} ${Bt}" role="img" aria-label="Grafico a barre, ${t.length} mesi">
        ${jn(i,t.map(u=>u.label),s,Math.ceil(t.length/12),a)}
        ${c}
        ${Nn(t.length,s,n,t.map(u=>({title:u.title,value:u.valueText,sub:u.sub})))}
      </svg>
      <div class="ch-tip" hidden></div>
    </div>`}function Be(){for(const t of document.querySelectorAll(".chart")){const e=t.querySelector("svg"),a=t.querySelector(".ch-tip"),i=t.querySelector(".ch-cross"),n=o=>{const l=o.dataset.i;a.replaceChildren();const c=document.createElement("strong");c.textContent=o.dataset.value;const u=document.createElement("div");if(u.textContent=o.dataset.title,u.className="hint",a.append(c,u),o.dataset.sub){const y=document.createElement("div");y.textContent=o.dataset.sub,y.className="hint",a.append(y)}a.hidden=!1;const p=Number(o.dataset.x);i&&(i.setAttribute("x1",p),i.setAttribute("x2",p),i.hidden=!1),t.querySelectorAll("[data-bar]").forEach(y=>y.classList.toggle("on",y.dataset.bar===l));const g=e.getBoundingClientRect(),m=p/Ft*g.width;a.style.left=Math.min(Math.max(m,70),g.width-70)+"px"},s=()=>{a.hidden=!0,i&&(i.hidden=!0),t.querySelectorAll("[data-bar]").forEach(o=>o.classList.remove("on"))};for(const o of t.querySelectorAll(".ch-hit"))o.addEventListener("pointerenter",()=>n(o)),o.addEventListener("focus",()=>n(o)),o.addEventListener("blur",s);e.addEventListener("pointerleave",s)}}const Ve=()=>new Date().toISOString(),Ce=t=>(t.updatedAt=Ve(),t),Et=t=>String(t||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g," ").trim(),si=`# MODELLO DI SCHEDA – Dashboard Personale
# Le righe che iniziano con # sono commenti: vengono ignorate.
# Compila e importa da Allenamento → Importa una scheda (file .txt oppure incolla il testo).
#
# SCHEDA:     nome della scheda (obbligatorio)
# OBIETTIVO:  allenamenti a settimana (facoltativo, se manca vale 3)
# RECUPERO:   secondi di recupero tra le serie (facoltativo, se manca vale 120)
# NOTE:       riscaldamento, indicazioni generali (facoltativo, anche su più righe NOTE:)
#
# GIORNO <nome>: <descrizione facoltativa>    → un blocco per ogni giorno della scheda
# - Esercizio | serie x ripetizioni | nota    → un esercizio per riga, sotto il suo giorno
#     4 x 8-12      4 serie da 8 a 12 ripetizioni
#     3 x 10        3 serie da 10
#     3 x 20-30 s   3 serie da 20-30 secondi (tenute: plank, hollow…)
#   La nota è facoltativa (es. "per gamba", "zavorra nello zaino", "ultima serie negative").
#   Zavorra (kg) e variante (es. "piedi rialzati", "elastico nero") si scrivono durante l'allenamento.

SCHEDA: La mia scheda
OBIETTIVO: 3
RECUPERO: 120
NOTE: Riscaldamento 5 minuti prima di iniziare.

GIORNO A: Trazioni e gambe
- Trazioni presa prona | 4 x 3-5 | 1-2 ripetizioni in canna
- Plank | 3 x 30-45 s

GIORNO B: Spinta
- Flessioni | 4 x 8-15
`,El=t=>{const e=String(t).replace(/\s+/g,"").toLowerCase().match(/^(\d+)[x×*](\d+)(?:[-–/](\d+))?(s|sec|secondi|")?$/);if(!e)return null;const a=Number(e[1]),i=Number(e[2]),n=Number(e[3]||e[2]);return a>0&&a<=20&&i>0&&n>=i?{sets:a,min:i,max:n,unit:e[4]?"sec":"reps"}:null};function On(t){const e=[],a={name:"",goal:3,rest:120,notes:"",days:[]};let i=null;String(t||"").replace(/^﻿/,"").split(/\r?\n/).forEach((s,o)=>{const l=s.trim(),c=`riga ${o+1}`;if(!l||l.startsWith("#"))return;const u=l.match(/^(scheda|obiettivo|recupero|note|giorno)\b\s*([^:]*?)\s*:\s*(.*)$/i)||l.match(/^(giorno)\s+(.+)$/i);if(u){const p=u[1].toLowerCase(),g=(u[3]??"").trim();if(p==="scheda")a.name=g;else if(p==="obiettivo"){const m=parseInt(g,10);m>=1&&m<=14?a.goal=m:e.push(`${c}: OBIETTIVO deve essere un numero di allenamenti a settimana (es. 3)`)}else if(p==="recupero"){const m=parseInt(g,10);m>=0&&m<=900?a.rest=m:e.push(`${c}: RECUPERO deve essere in secondi (es. 120)`)}else if(p==="note")a.notes=a.notes?a.notes+`
`+g:g;else{const m=(u[2]||"").trim();if(!m){e.push(`${c}: dai un nome al giorno (es. "GIORNO A: Trazioni")`);return}i={id:G(),name:m,note:u[3]?g:"",exercises:[]},a.days.push(i)}return}if(/^[-•*]/.test(l)){if(!i){e.push(`${c}: questo esercizio non sta sotto nessun GIORNO`);return}const p=l.replace(/^[-•*]\s*/,"").split("|").map(z=>z.trim()),g=p[0];if(!g){e.push(`${c}: manca il nome dell'esercizio`);return}const m=(p[1]||"").match(/^(\d+\s*[x×*]\s*\d+(?:\s*[-–/]\s*\d+)?\s*(?:s|sec|secondi|")?)(?:\s+(.*))?$/i),y=m&&El(m[1]);if(!y){e.push(`${c}: scrivi serie e ripetizioni come "4 x 8-12" (o "3 x 30 s" per le tenute)`);return}const w=[m[2],...p.slice(2)].filter(Boolean).join(" · ");i.exercises.push(Object.assign({id:G(),name:g,note:w},y));return}e.push(`${c}: non capisco "${l.slice(0,40)}" (le righe degli esercizi iniziano con "-")`)}),a.name||e.push('manca la riga "SCHEDA: nome della scheda"'),a.days.length||e.push("nessun GIORNO nella scheda");for(const s of a.days)s.exercises.length||e.push(`il giorno "${s.name}" non ha esercizi`);return{plan:a,errors:e}}const Ra=t=>`${t.sets} x ${t.min}${t.max!==t.min?"-"+t.max:""}${t.unit==="sec"?" s":""}`,zl=Ra;function qn(t){const e=[`SCHEDA: ${t.name}`,`OBIETTIVO: ${t.goal||3}`,`RECUPERO: ${t.rest??120}`];for(const a of String(t.notes||"").split(`
`).filter(Boolean))e.push(`NOTE: ${a}`);for(const a of t.days){e.push("",`GIORNO ${a.name}:${a.note?" "+a.note:""}`);for(const i of a.exercises)e.push(`- ${i.name} | ${Ra(i)}${i.note?" | "+i.note:""}`)}return e.join(`
`)+`
`}const Ee=t=>t.plans.find(e=>e.status==="active")||null,Tn=t=>t.plans.filter(e=>e.status!=="active").sort((e,a)=>(a.endedAt||"").localeCompare(e.endedAt||""));function oi(t,e){for(const i of t.plans)i.status==="active"&&i.id!==e.id&&(i.status="archived",i.endedAt=k(),Ce(i));const a=Ve();return t.plans.includes(e)||(Object.assign(e,{id:e.id||G(),createdAt:a}),t.plans.push(e)),Object.assign(e,{status:"active",startedAt:k(),endedAt:null}),Ce(e),e}function Dl(t,e){e.status="archived",e.endedAt=k(),Ce(e)}const Mn=t=>t.sessions.find(e=>e.open)||null,mt=t=>t.sessions.filter(e=>!e.open).sort((e,a)=>a.date.localeCompare(e.date)||(a.startedAt||"").localeCompare(e.startedAt||""));function jl(t,e){const a=mt(t).find(n=>n.planId===e.id);if(!a)return e.days[0];const i=e.days.findIndex(n=>n.id===a.dayId);return e.days[(i+1)%e.days.length]||e.days[0]}function Pn(t,e,a){const i=Et(e);for(const n of mt(t)){if(n.id===a)continue;const s=n.exercises.find(o=>Et(o.name)===i&&o.sets.some(l=>l.done));if(s)return{session:n,ex:s}}return null}function Nl(t,e,a){const i=Ve(),n={id:G(),planId:e.id,planName:e.name,dayId:a.id,dayName:a.name,date:k(),open:!0,startedAt:i,endedAt:null,note:"",createdAt:i,updatedAt:i,exercises:a.exercises.map(s=>{const o=Pn(t,s.name),l=o?o.ex.sets.filter(c=>c.done):[];return{name:s.name,unit:s.unit,note:s.note||"",target:Ra(s),variant:o&&o.ex.variant||"",sets:Array.from({length:s.sets},(c,u)=>{const p=l[u]||l[l.length-1];return{reps:p?p.reps:null,kg:p?p.kg:null,done:!1}})}})};return t.sessions.push(n),n}function Ol(t,e){for(const a of e.exercises)a.sets=a.sets.filter(i=>i.done);return e.exercises=e.exercises.filter(a=>a.sets.length),e.open=!1,e.endedAt=Ve(),Ce(e),e.exercises.length>0}const li=t=>t.startedAt&&t.endedAt?Math.max(1,Math.round((new Date(t.endedAt)-new Date(t.startedAt))/6e4)):null;function La(t){const e=new Date(t+"T12:00:00");return M(t,-((e.getDay()+6)%7))}function ce(t,e){const a=M(e,6),i=n=>n.date>=e&&n.date<=a;return t.sessions.filter(n=>!n.open&&i(n)).length+t.workouts.filter(i).length}function Rn(t){const e=new Map;for(const a of mt(t))for(const i of a.exercises)e.has(Et(i.name))||e.set(Et(i.name),{name:i.name,unit:i.unit});return e}function Ln(t,e){const a=[];for(const i of[...mt(t)].reverse()){const n=i.exercises.find(l=>Et(l.name)===e);if(!n)continue;const s=n.sets.filter(l=>l.done&&l.reps>0);if(!s.length)continue;const o=s.reduce((l,c)=>(c.kg||0)>(l.kg||0)||(c.kg||0)===(l.kg||0)&&c.reps>l.reps?c:l);a.push({date:i.date,variant:n.variant||"",unit:n.unit,maxReps:Math.max(...s.map(l=>l.reps)),maxKg:Math.max(0,...s.map(l=>l.kg||0)),total:s.reduce((l,c)=>l+c.reps,0),sets:s.length,best:o})}return a}function ql(t){const e=[];for(const[a,i]of Rn(t)){const n=Ln(t,a);if(!n.length)continue;const s=n.reduce((l,c)=>c.maxReps>l.maxReps?c:l),o=n.reduce((l,c)=>c.maxKg>l.maxKg?c:l);e.push({key:a,name:i.name,unit:i.unit,reps:s.maxReps,repsDate:s.date,kg:o.maxKg,kgDate:o.date,times:n.length})}return e.sort((a,i)=>a.name.localeCompare(i.name))}function Tl(t,e){const a=[],i=mt(t).filter(n=>n.id!==e.id&&(n.date<e.date||n.date===e.date&&(n.startedAt||"")<(e.startedAt||"")));for(const n of e.exercises){const s=n.sets.filter(g=>g.done&&g.reps>0);if(!s.length)continue;const o=Et(n.name),l=i.flatMap(g=>g.exercises.filter(m=>Et(m.name)===o).flatMap(m=>m.sets.filter(y=>y.done)));if(!l.length)continue;const c=Math.max(0,...s.map(g=>g.kg||0)),u=Math.max(0,...l.map(g=>g.kg||0)),p=(g,m)=>Math.max(0,...g.filter(y=>(y.kg||0)>=m).map(y=>y.reps||0));if(c>u)a.push(`${n.name}: zavorra ${String(c).replace(".",",")} kg`);else{const g=p(s,u),m=p(l,u);g>m&&a.push(`${n.name}: ${g}${n.unit==="sec"?" s":" ripetizioni"}${u?` con ${String(u).replace(".",",")} kg`:""}`)}}return a}const ci=`SCHEDA: Garage – corpo libero
OBIETTIVO: 3
RECUPERO: 120
NOTE: Tutto in garage, senza rientrare in casa: porta giù zaino con i pesi (bottiglie/libri in sacchetti), tappetino, acqua e felpa.
NOTE: Riscaldamento 5 min: rotazioni di spalle e polsi, 20 squat, 10 flessioni facili, 30 s appeso alla sbarra.
NOTE: Chiudi ogni serie con 1-2 ripetizioni ancora in canna. Quando fai il massimo dell'intervallo in tutte le serie: +2 kg nello zaino o variante più difficile.
NOTE: Settimane alternate: A-B-A, poi B-A-B.

GIORNO A: Trazioni, spinta, gambe
- Trazioni presa prona | 4 x 3-5 | dopo l'ultima serie: 5 negative da 5 secondi
- Flessioni con zaino | 4 x 8-15 | se arrivi a 15 facili: piedi rialzati
- Affondi all'indietro con zaino | 3 x 8-12 per gamba
- Rematore con zaino a un braccio | 3 x 10-15 per braccio | busto parallelo a terra, mano libera sul ginocchio
- Hollow hold | 3 x 20-30 s

GIORNO B: Chin-up, spalle, gambe
- Chin-up (presa inversa) | 4 x 3-6
- Pike push-up | 3 x 6-10 | piedi rialzati quando diventano facili
- Flessioni strette | 3 x 8-15 | gomiti vicini al corpo (tricipiti)
- Stacco rumeno su una gamba con zaino | 3 x 8-12 per gamba
- Ginocchia al petto appeso alla sbarra | 3 x 8-12
`,Ml=["Palestra","Corsa","Camminata","Bici","Nuoto","Calcetto","Yoga / stretching","Altro"],dt=t=>t==null?"—":Number(t).toLocaleString("it-IT",{maximumFractionDigits:1}),ze=t=>t.meds.map(e=>({m:e,s:ye(e)})).filter(e=>e.s.low);function Pl(t){const e=d.ui.measKind||"peso",a=Ha[e],i=t.measures.filter(l=>l.kind===e).sort((l,c)=>l.date.localeCompare(c.date)),n=i[i.length-1],s=i.filter(l=>l.date>=M(k(),-30))[0],o=n&&s&&s!==n?H(n.value-s.value):null;return`
    <section class="card" aria-labelledby="h-meas">
      <div class="card-head"><h2 id="h-meas">Misure</h2>
        <div class="pills small">${Object.entries(Ha).map(([l,c])=>`<button class="chip ${l===e?"":"off"}" data-action="meas-kind" data-k="${l}" aria-pressed="${l===e}">${c.label}</button>`).join("")}</div></div>
      <form class="row" data-form="meas-add">
        <input type="hidden" name="kind" value="${e}">
        <label class="sr-only" for="meas-val">${a.label}</label>
        <input class="input amount" id="meas-val" name="value" inputmode="decimal" placeholder="${a.label}${a.unit?" ("+a.unit+")":""}" required>
        <label class="sr-only" for="meas-date">Data</label>
        <input class="input date" id="meas-date" type="date" name="date" value="${k()}">
        <button class="btn primary" type="submit">Segna</button>
        ${n?`<span class="sub">Ultima: <strong>${dt(n.value)} ${r(a.unit)}</strong> il ${r(I(n.date))}${o!=null?` · ${o>0?"+":""}${dt(o)} in 30 giorni`:""}</span>`:""}
      </form>
      ${i.length>1?Fe(i.slice(-40).map(l=>({label:I(l.date),value:l.value,title:I(l.date)+" "+l.date.slice(0,4),valueText:`${dt(l.value)} ${a.unit}`})),{id:"meas",fmt:l=>dt(l)+(a.unit?" "+a.unit:"")}):`<div class="empty">${i.length?"Serve almeno un'altra misura per il grafico.":`Nessuna misura di ${a.label.toLowerCase()}. Basta segnarla ogni tanto, sempre alla stessa ora.`}</div>`}
      ${i.length?`<details class="table-toggle"><summary>Tutte le misure (${i.length})</summary><div class="list tight">${[...i].reverse().slice(0,60).map(l=>`
        <div class="item"><div class="when">${r(I(l.date))}</div><div class="text">${dt(l.value)} ${r(a.unit)}</div><button class="icon-btn" data-action="meas-del" data-id="${l.id}" aria-label="Elimina la misura del ${r(I(l.date))}">${S("trash",16)}</button></div>`).join("")}</div></details>`:""}
    </section>`}function Rl(t){const e=st(k()),a=[];for(let n=7;n>=0;n--){const s=M(e,-7*n),o=ce(t,s);a.push({label:I(s),value:o,title:`Settimana del ${I(s)}`,valueText:`${o} allenament${o===1?"o":"i"}`,partial:n===0})}const i=[...t.workouts].sort((n,s)=>s.date.localeCompare(n.date)).slice(0,8);return`
    <section class="card" aria-labelledby="h-work">
      <div class="card-head"><h2 id="h-work">Allenamenti</h2><button class="link" data-action="nav" data-id="allenamento">Scheda e progressi · questa settimana: ${a[7].value}</button></div>
      <form class="row" data-form="work-add">
        <label class="sr-only" for="w-type">Tipo</label>
        <select class="input" id="w-type" name="type">${Ml.map(n=>`<option>${n}</option>`).join("")}</select>
        <label class="sr-only" for="w-min">Minuti</label>
        <input class="input num" id="w-min" name="minutes" inputmode="numeric" placeholder="minuti">
        <label class="sr-only" for="w-date">Data</label>
        <input class="input date" id="w-date" type="date" name="date" value="${k()}">
        <button class="btn primary" type="submit">Segna</button>
      </form>
      ${t.workouts.length?Pa(a,{id:"work",fmt:n=>Number.isInteger(n)?String(n):""}):'<div class="empty">Qui segni corsa, calcetto e le altre attività; la scheda della sbarra sta in Allenamento. Segna gli allenamenti quando li fai: qui vedi quante volte ti alleni a settimana.</div>'}
      ${i.length?`<div class="list tight">${i.map(n=>`
        <div class="item"><div class="when">${r(I(n.date))}</div><div class="text">${r(n.type)}${n.minutes?` <span class="hint">· ${n.minutes} min</span>`:""}</div>
        <button class="icon-btn" data-action="work-del" data-id="${n.id}" aria-label="Elimina">${S("trash",16)}</button></div>`).join("")}</div>`:""}
    </section>`}function Ll(t){const e=t.deadlines.filter(a=>!a.archived&&a.kind==="Salute").sort((a,i)=>a.due.localeCompare(i.due));return`
    <section class="card" aria-labelledby="h-visit">
      <div class="card-head"><h2 id="h-visit">Visite e controlli</h2><button class="link" data-action="nav" data-id="scadenze">Gestisci in Scadenze</button></div>
      ${e.length?`<div class="list">${e.map(a=>{const i=Aa(a);return`
        <div class="item"><span class="dot-cat scad ${i.state}" aria-hidden="true"></span><div class="text"><div>${r(a.name)}</div><div class="hint">${r(I(a.due))} ${a.due.slice(0,4)}${a.lastDone?" · ultima volta "+r(I(a.lastDone))+" "+a.lastDone.slice(0,4):""}</div></div>
        <span class="tag ${i.state==="late"?"bad":i.state==="soon"?"warn":""}">${r(Xt(i.days))}</span></div>`}).join("")}</div>`:'<div class="empty">Nessuna visita in programma.</div>'}
      <div class="shop-chips">${[["Dentista",6],["Esami del sangue",12],["Visita oculistica",24],["Dermatologo (nei)",12],["Medico di base",12]].filter(([a])=>!e.some(i=>i.name===a)).map(([a,i])=>`<button class="chip" data-action="visit-add" data-name="${r(a)}" data-every="${i}">${S("plus",12)}${r(a)}</button>`).join("")}</div>
      <div class="hint">Tocca per aggiungerla: la trovi in Scadenze con la data da sistemare.</div>
    </section>`}function Fl(t){const e=d.ui.medEdit?t.meds.find(a=>a.id===d.ui.medEdit):null;return`
    <section class="card" aria-labelledby="h-meds">
      <h2 id="h-meds">Farmaci e scorte</h2>
      ${t.meds.length?`<div class="list">${t.meds.map(a=>{const i=ye(a);return`
        <div class="item"><div class="text"><div>${r(a.name)}</div><div class="hint">${dt(a.perDay)} al giorno · restano ${dt(i.left)} ${r(a.unit)}${a.note?" · "+r(a.note):""}</div></div>
          <span class="tag ${i.low?"warn":""}">${i.days==null?"al bisogno":i.days===0?"finito":`${i.days} giorni`}</span>
          ${i.low?`<button class="btn small" data-action="med-shop" data-id="${a.id}">${S("cart",14)}Spesa</button>`:""}
          ${d.ui.medRefill===a.id?`<form class="row nowrap" data-form="med-refill"><input type="hidden" name="id" value="${a.id}"><label class="sr-only" for="refill-q">Quante ne hai adesso</label><input class="input slim num" id="refill-q" name="q" inputmode="decimal" value="${r(String(H(i.left+(a.lastPack||30))).replace(".",","))}"><button class="btn small primary" type="submit">Ok</button></form>`:`<button class="btn small" data-action="med-refill" data-id="${a.id}">Ricomprato</button>`}
          <button class="icon-btn" data-action="med-edit" data-id="${a.id}" aria-label="Modifica ${r(a.name)}">${S("edit",16)}</button>
          <button class="icon-btn" data-action="med-del" data-id="${a.id}" aria-label="Elimina ${r(a.name)}">${S("trash",16)}</button></div>`}).join("")}</div>`:'<div class="empty">Integratori, farmaci che prendi tutti i giorni, lenti a contatto: quando stanno per finire te lo dice Oggi.</div>'}
      <form class="form-grid divider-top" data-form="med-save" style="padding-top:14px">
        <input type="hidden" name="id" value="${e?e.id:""}">
        <label class="field">Nome<input class="input" id="med-name" name="name" value="${r(e?e.name:"")}" placeholder="Vitamina D" required></label>
        <label class="field">Al giorno<input class="input" name="perDay" inputmode="decimal" value="${r(e?String(e.perDay).replace(".",","):"1")}"></label>
        <label class="field">Quante ne hai adesso<input class="input" name="qty" inputmode="decimal" value="${e?r(String(ye(e).left).replace(".",",")):""}" placeholder="30" required></label>
        <label class="field">Unità<input class="input" name="unit" value="${r(e?e.unit:"compresse")}"></label>
        <label class="field">Avvisami quando restano<select class="input" name="notice">${[3,5,7,10,14].map(a=>`<option value="${a}" ${(e?e.notice:7)===a?"selected":""}>${a} giorni</option>`).join("")}</select></label>
        <div class="row"><button class="btn primary" type="submit">${e?"Salva":"Aggiungi"}</button>${e?'<button class="btn" type="button" data-action="med-cancel">Annulla</button>':""}</div>
      </form>
    </section>`}function Bl(){const t=d.data,e=t.measures.filter(s=>s.kind==="peso").sort((s,o)=>s.date.localeCompare(o.date)).pop(),a=st(k()),i=ce(t,a),n=ze(t).length;return`
    ${W("Corpo e salute","Salute")}
    <section class="metrics">
      ${j("Peso",e?`${dt(e.value)} kg`:"—","",e?`il ${I(e.date)}`:"non ancora segnato")}
      ${j("Allenamenti questa settimana",String(i))}
      ${j("Farmaci da ricomprare",String(n),n?"warn":"")}
    </section>
    <div class="grid">
      ${Pl(t)}
      ${Rl(t)}
      ${Ll(t)}
      ${Fl(t)}
    </div>`}const Ht=t=>{const e=U(t);return Number.isFinite(e)?e:NaN};L("salute",{render:Bl,afterRender:Be,actions:{"meas-kind"(t){d.ui.measKind=t.dataset.k,b("salute")},"meas-del"(t){f(e=>{e.measures=e.measures.filter(a=>a.id!==t.dataset.id),K(e,t.dataset.id)})},"work-del"(t){f(e=>{e.workouts=e.workouts.filter(a=>a.id!==t.dataset.id),K(e,t.dataset.id)})},"visit-add"(t){const e=Number(t.dataset.every);f(a=>a.deadlines.push(Te({name:t.dataset.name,kind:"Salute",due:M(k(),30),every:e,notice:15,note:"Data da sistemare: mettila quando prenoti"}))),q(`${t.dataset.name} aggiunta alle Scadenze (tra 30 giorni): correggi la data quando prenoti`),A()},"med-edit"(t){d.ui.medEdit=t.dataset.id,b("salute"),P("#med-name")},"med-cancel"(){d.ui.medEdit=null,b("salute")},"med-del"(t){const e=d.data.meds.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Togliere «${e.name}»?`)||f(a=>{a.meds=a.meds.filter(i=>i.id!==e.id),K(a,e.id)})},"med-refill"(t){d.ui.medRefill=t.dataset.id,b("salute"),P("#refill-q")},"med-shop"(t){const e=d.data.meds.find(a=>a.id===t.dataset.id);e&&(f(a=>{const i=It(a,e.name);i?(i.need=!0,i.boughtAt=null,O(i)):a.shopping.push(Rt({name:e.name,area:a.shopAreas.includes("Farmacia")?"Farmacia":"Bagno e igiene",need:!0}))}),q(`${e.name} messo nella spesa`))}},forms:{"meas-add"(t,e){const a=Ht(t.get("value"));if(!(a>0)){const i=e.querySelector("[name=value]");i.setCustomValidity("Scrivi un numero, es. 72,4"),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0});return}f(i=>i.measures.push(Ps({kind:t.get("kind"),value:a,date:t.get("date")||k()}))),P("#meas-val")},"work-add"(t){const e=String(t.get("minutes")||"").trim(),a=e?Math.round(Ht(e)):null;if(e&&!(a>0))return D("I minuti devono essere un numero."),A();f(i=>i.workouts.push(Ms({type:t.get("type"),minutes:a,date:t.get("date")||k()}))),q("Allenamento segnato")},"med-refill"(t){const e=d.data.meds.find(i=>i.id===t.get("id"));if(!e)return;const a=Ht(t.get("q"));if(!(a>=0))return D("Scrivi quante ne hai adesso, es. 30"),A();f(()=>{const i=ye(e).left;a>i&&(e.lastPack=H(a-i)),e.qty=a,e.countedAt=k(),O(e)}),d.ui.medRefill=null,b("salute",{},`${e.name}: ${dt(a)} ${e.unit}`)},"med-save"(t){const e=String(t.get("name")||"").trim(),a=Ht(t.get("perDay")||"0"),i=Ht(t.get("qty"));if(!e||!(i>=0)||!(a>=0))return D("Controlla nome, quantità e dose (numeri, es. 1 o 0,5)."),A();const n={name:e,perDay:a,qty:i,countedAt:k(),unit:String(t.get("unit")||"compresse").trim(),notice:Number(t.get("notice"))||7},s=t.get("id");f(o=>{if(s){const l=o.meds.find(c=>c.id===s);Object.assign(l,n),O(l)}else o.meds.push(Ts(Object.assign({lastPack:i},n)))}),d.ui.medEdit=null,b("salute",{},s?"Aggiornato":`${e} aggiunto`)}}});const Vl=(t,e,a)=>`${t}|${e}|${a}`;function Fn(t){const e=k(),a=[];for(const s of t.todos.filter(o=>!o.done&&o.due&&o.due<e))a.push({title:s.text,sub:`Attività in ritardo dal ${I(s.due)}`,meta:I(s.due),tag:"RITARDO",cls:"bad",level:"r",nav:"attivita"});for(const s of t.sales.filter(xt))a.push({title:s.name,sub:"Venduto: da spedire",meta:"da spedire",tag:"SPEDIRE",cls:"warn",level:"o",nav:"vendite"});for(const s of xa(t))a.push({title:s.x.name,sub:`Scadenza ${Xt(s.days)}`,meta:Xt(s.days),tag:"SCADENZA",cls:s.days<0?"bad":"warn",level:s.days<=0?"r":s.days<=7?"o":"a",nav:"scadenze"});const i=M(e,1);for(const s of Hi(t,e).tomorrow){const o=Vl(i,s.slot,s.dish.id);a.push({title:s.ahead,sub:`Per domani: ${s.dish.name}`,meta:"per domani",tag:"PRIMA",cls:"warn",level:"o",nav:"pasti",key:o,done:!!(t.aheadDone&&t.aheadDone[o])})}for(const{m:s,s:o}of ze(t))a.push({title:s.name,sub:o.days===0?"Finito: da ricomprare":`Ancora ${o.days} giorni`,meta:o.days===0?"finito":`${o.days} giorni`,tag:"FARMACO",cls:"good",level:o.days===0?"o":"a",nav:"salute"});const n=Ia(t);n.length&&a.push({title:`${n.length} programmat${n.length===1?"o":"i"} da confermare`,sub:n.slice(0,2).map(s=>s.r.name).join(", "),meta:"",tag:"CONFERMA",cls:"acc",level:"a",nav:"programmati"});for(const s of t.sales.filter(o=>o.status==="vendita"&&qt(o)>=te))a.push({title:s.name,sub:`Online da ${qt(s)} giorni`,meta:`online da ${qt(s)} gg`,tag:"FERMO",cls:"vio",level:"a",nav:"vendite"});for(const s of Pe(t,e,M(e,7)))a.push({title:`Compleanno di ${s.contact.name}`,sub:s.date===e?"Oggi":pt(s.date),meta:s.date===e?"oggi":pt(s.date),tag:"AUGURI",cls:"vio",level:s.date===e?"o":"a",nav:"rubrica"});return t.inbox.length&&a.push({title:`${t.inbox.length} da smistare`,sub:"Note e cose non capite da Annota al volo",meta:"",tag:"SMISTA",cls:"acc",level:"a",nav:"oggi",anchor:!0}),a}const St=["oggi","att","abi","pasti"],Bn=102,ri=2*Math.PI*Bn,Vn=134,di=2*Math.PI*Vn,Ul=["L","M","M","G","V","S","D"],ui=[[35,22],[155,-30],[260,8],[95,-12],[205,28],[320,-24]];function Gl(t){const e=new Date(t+"T12:00:00"),a=(e.getDay()+6)%7;e.setDate(e.getDate()-a+3);const i=new Date(e.getFullYear(),0,4);return 1+Math.round(((e-i)/864e5-3+(i.getDay()+6)%7)/7)}const pi=(t,e)=>{const a=e*Math.PI/180;return[140+t*Math.cos(a),140+t*Math.sin(a)]};function _l(t){const e=k(),a=new Date,i=new Map;t.openToday.length&&i.set(e,t.openToday.length);for(const $ of t.days){const E=$.parts.filter(x=>x.cls!=="meteo").length;E&&i.set($.iso,(i.get($.iso)||0)+E)}const n=t.days.reduce(($,E)=>$+E.parts.filter(x=>x.cls!=="meteo").length,0),s=(a.getDay()+6)%7,o=di*(360/7-4)/360;let l="";for(let $=0;$<7;$++){const E=M(t.mon,$),x=-90+$*(360/7)+2,_=-90+$*(360/7)+360/14,C=$===s?"rx-wk on":E<e?"rx-wk past":"rx-wk";l+=`<circle class="${C}" cx="140" cy="140" r="${Vn}" transform="rotate(${x.toFixed(2)} 140 140)" stroke-dasharray="${o.toFixed(2)} ${(di-o).toFixed(2)}"/>`;const T=E>=e&&i.get(E)||0;if(T){const[Z,Dt]=pi(146,_);l+=`<circle class="rx-ev" cx="${Z.toFixed(1)}" cy="${Dt.toFixed(1)}" r="${T>1?4.5:3.5}"><title>${T} ${T===1?"impegno":"impegni"}</title></circle>`}const[B,$t]=pi(160,_);l+=`<text class="rx-wl ${$===s?"on":""}" x="${B.toFixed(1)}" y="${($t+3.5).toFixed(1)}" text-anchor="middle">${Ul[$]}</text>`}const c=ee.find($=>t.targets[$].min&&t.wb.counts[$]<t.targets[$].min),u=c?`${bt[c].label.toLowerCase()} ${t.wb.counts[c]} di ${t.targets[c].min}+`:"equilibrio a posto",p=t.todays.length-t.openToday.length,g={oggi:{label:"Oggi",color:"var(--accent)",pct:(s+1)/7,top:a.toLocaleDateString("it-IT",{weekday:"long"}).toUpperCase(),big:String(a.getDate()),mid:a.toLocaleDateString("it-IT",{month:"long"}).toUpperCase(),sub:`${t.openToday.length} da fare${t.late?` · ${t.late} in ritardo`:""}`},att:{label:`Attività ${p}/${t.todays.length}`,color:"var(--accent)",pct:t.pAtt,top:"ATTIVITÀ",big:t.todays.length?`${p}/${t.todays.length}`:"—",mid:"DI OGGI",sub:t.todays.length?t.openToday.length?`${t.openToday.length} ancora aperte`:"tutto fatto":"niente per oggi"},abi:{label:`Abitudini ${t.habTarget?Math.round(t.pHab*100)+"%":"—"}`,color:"var(--good)",pct:t.pHab,top:"ABITUDINI",big:t.habTarget?`${Math.round(t.pHab*100)}%`:"—",mid:"SETTIMANA",sub:t.habTarget?`${t.habDone} su ${t.habTarget} volte`:"nessuna abitudine"},pasti:{label:`Pasti ${t.wb.meals}/14`,color:"var(--warn)",pct:t.wb.meals/14,top:"PASTI",big:`${t.wb.meals}/14`,mid:"SETTIMANA",sub:u}},m=St.includes(d.ui.coreMode)?d.ui.coreMode:"oggi",y=St.map($=>{const E=Math.max(.01,Math.min(1,g[$].pct||0))*ri;return`<circle class="rx-arc" data-k="${$}" cx="140" cy="140" r="${Bn}" transform="rotate(-90 140 140)" style="stroke:${g[$].color}" stroke-dasharray="${E.toFixed(1)} ${ri.toFixed(1)}"/>`}).join(""),w=St.map($=>{const E=g[$];return`<div class="rx-text" data-k="${$}">
      <span class="rx-top">${r(E.top)}</span>
      <span class="rx-big ${E.big.length>3?"long":""}">${r(E.big)}</span>
      <span class="rx-mid" style="color:${E.color}">${r(E.mid)}</span>
      <span class="rx-sub">${r(E.sub)}</span></div>`}).join(""),z=ui.slice(0,Math.min(n,ui.length)).map(([$,E])=>`<i class="rx-node" style="transform:rotateY(${$}deg) rotateX(${E}deg) translateZ(calc(160 * var(--u)))"></i>`).join(""),N=[0,.5,1.1,1.7,.8,2.3,2.9,2.1,1.4].map(($,E)=>`<i class="rx-pt" style="left:calc(${[250,262,272,283,292,243,266,299,277][E]} * var(--u));animation-delay:${$}s"></i>`).join(""),v=($,E,x)=>`<i class="rx-par${x?" eq":""}" style="width:calc(${$} * var(--u));height:calc(${$} * var(--u));margin:calc(${-$/2} * var(--u)) 0 0 calc(${-$/2} * var(--u));transform:translateY(calc(${E} * var(--u))) rotateX(90deg)"></i>`;return`
    <div class="rx" data-mode="${m}">
      <div class="rx-stage">
        <div class="rx-floor-wrap" aria-hidden="true"><div class="rx-floor">
          <i class="rx-ring" style="--s:310"></i><i class="rx-ring dash" style="--s:440"></i><i class="rx-ring warm" style="--s:200"></i>
          <i class="rx-ripple"></i><i class="rx-ripple" style="animation-delay:2s"></i><i class="rx-scan"></i>
        </div></div>
        <div class="rx-beam" aria-hidden="true"></div>
        <div class="rx-pts" aria-hidden="true">${N}</div>
        <div class="rx-globe-wrap" aria-hidden="true"><div class="rx-globe">
          ${[0,30,60,90,120,150].map($=>`<i class="rx-mer" style="transform:rotateY(${$}deg)"></i>`).join("")}
          ${v(249.8,-100)}${v(302.6,-52)}${v(320,0,!0)}${v(302.6,52)}${v(249.8,100)}
          ${z}
        </div></div>
        <div class="rx-scanwrap" aria-hidden="true"><i class="rx-scanline"></i></div>
        <div class="rx-tel left" aria-hidden="true"><span class="acc">SYS · NUCLEO</span><span>SETT ${Gl(e)} · ${r(a.toLocaleDateString("it-IT"))}</span></div>
        <div class="rx-tel right" aria-hidden="true"><span class="js-save rx-sync"><span class="dot ${d.saveState==="err"?"err":""}"></span><span>${r(d.saveText||"")}</span></span><span>${n} ${n===1?"IMPEGNO":"IMPEGNI"} · 7 GG</span></div>
        <div class="rx-core">
          <svg viewBox="0 0 280 280" aria-hidden="true">
            <g class="rx-ticks"><circle cx="140" cy="140" r="176" class="rx-t1"/><circle cx="140" cy="140" r="176" class="rx-t2"/></g>
            ${l}
            <circle cx="140" cy="140" r="116" class="rx-main"/>
            ${y}
            <circle cx="140" cy="140" r="88" class="rx-disc"/>
          </svg>
          <div class="rx-texts" aria-live="polite">${w}</div>
        </div>
        <div class="rx-orbit-wrap" aria-hidden="true"><div class="rx-orbit"><i class="rx-orbit-ring"></i><i class="rx-orbit-dot"></i></div></div>
      </div>
      <div class="rx-legend" role="group" aria-label="Cosa mostra il nucleo">
        ${St.map($=>`<button type="button" class="rx-btn" data-action="core-mode" data-k="${$}" aria-pressed="${$===m}"><i style="background:${g[$].color}"></i>${r(g[$].label)}</button>`).join("")}
      </div>
    </div>`}function Un(t){const e=document.querySelector(".rx");if(e){e.dataset.mode=t;for(const a of e.querySelectorAll(".rx-btn"))a.setAttribute("aria-pressed",String(a.dataset.k===t))}}const Wl={"core-mode"(t){const e=t.dataset.k;d.ui.coreLock&&d.ui.coreMode===e?d.ui.coreLock=!1:(d.ui.coreLock=!0,d.ui.coreMode=e),Un(d.ui.coreMode||"oggi")}};setInterval(()=>{if(typeof document>"u"||!document.querySelector(".rx")||d.ui.coreLock||document.hidden)return;const t=St.indexOf(d.ui.coreMode);d.ui.coreMode=St[(t+1)%St.length],Un(d.ui.coreMode)},6e3);const lt=t=>d.data.sales.find(e=>e.id===t),Hl=t=>`${I(t)} ${t.slice(0,4)}`,Mt=t=>(t||t===0)&&t!==null?String(t).replace(".",","):"",wa=t=>t===1?"1 giorno":`${t} giorni`;function gt(t,e,a){const i=t.querySelector(`[name=${e}]`);i.setCustomValidity(a),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0})}function Gn(t){return[...new Set([...Fs,...d.data.sales.map(a=>a.platform).filter(Boolean)])].map(a=>`<option ${a===(t||"Subito")?"selected":""}>${r(a)}</option>`).join("")}function Kl(t){return`
    <form class="box-soft stack-sm" data-form="sale-list">
      <input type="hidden" name="id" value="${t.id}">
      <div class="row">
        <label class="field">Prezzo (€)<input class="input amount" id="sl-price" name="price" inputmode="decimal" value="${r(Mt(t.price))}" required></label>
        <label class="field">Dove<select class="input" name="platform">${Gn(t.platform)}</select></label>
        <label class="field grow">Link all'annuncio<input class="input" name="link" type="url" value="${r(t.link||"")}" placeholder="https://www.subito.it/…"></label>
      </div>
      <div class="row">
        <label class="field">Online dal<input class="input date" type="date" name="date" value="${k()}"></label>
        <div class="row self-end"><button class="btn primary" type="submit">Metti in vendita</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
      </div>
    </form>`}function Ql(t){return`
    <form class="box-soft stack-sm" data-form="sale-price">
      <input type="hidden" name="id" value="${t.id}">
      <div class="row">
        <label class="field">Nuovo prezzo (€)<input class="input amount" id="sp-price" name="price" inputmode="decimal" value="${r(Mt(t.price))}" required></label>
        <div class="row self-end"><button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
        <span class="row self-end push"><button class="btn" type="button" data-action="sale-repost" data-id="${t.id}" title="Riparte il conteggio dei giorni online">Ripubblicato oggi</button><button class="btn" type="button" data-action="sale-withdraw" data-id="${t.id}">Ritira</button></span>
      </div>
      <div class="hint">${t.minPrice?`Il tuo prezzo minimo: ${h(t.minPrice)}. `:""}Se hai rinnovato l'annuncio, "Ripubblicato oggi" fa ripartire i giorni online (con il prezzo scritto qui). "Ritira" lo rimette tra le cose da vendere.</div>
    </form>`}function Yl(t,e){const a=ft(t),i=d.ui.saleDelivery||"mano",n=d.ui.saleRecord??!1;return`
    <form class="box-soft stack-sm" data-form="sale-sell">
      <input type="hidden" name="id" value="${e.id}">
      <div class="row">
        <label class="field">Venduto a (€)<input class="input amount" id="ss-price" name="price" inputmode="decimal" value="${r(Mt(e.price))}" required></label>
        <label class="field">Data<input class="input date" type="date" name="date" value="${k()}"></label>
        <label class="field">Acquirente<input class="input" name="buyer" placeholder="facoltativo"></label>
        <label class="field">Spese (€)<input class="input amount" name="fees" inputmode="decimal" placeholder="0"></label>
      </div>
      <div class="pills small" role="radiogroup" aria-label="Consegna">
        <label class="pill"><input type="radio" name="delivery" value="mano" data-change="sale-delivery" ${i==="mano"?"checked":""}><span>Consegnato a mano</span></label>
        <label class="pill"><input type="radio" name="delivery" value="spedizione" data-change="sale-delivery" ${i==="spedizione"?"checked":""}><span>Da spedire</span></label>
      </div>
      <label class="check small"><input type="checkbox" name="record" data-change="sale-record" ${n?"checked":""}>Registra l'entrata sul conto (categoria Vendite)</label>
      ${n?a.length?`<select class="input" name="accountId" aria-label="Conto">${at(Y(t)?.id)}</select>`:'<div class="hint">Crea prima un conto in Finanze.</div>':""}
      <div class="hint">Spese = commissioni, spedizione pagata da te, promozione dell'annuncio: vengono tolte dall'incasso. Lascia spenta la registrazione se l'entrata arriverà importando l'estratto conto, per non contarla due volte.</div>
      <div class="row"><button class="btn primary" type="submit">Venduto</button><button class="btn" type="button" data-action="sale-cancel">Annulla</button></div>
    </form>`}function Zl(t){const e=d.ui.saleOpen&&d.ui.saleOpen.id===t.id?d.ui.saleOpen.kind:null,a=[];return t.link&&a.push(`<button class="icon-btn" data-action="sale-link" data-id="${t.id}" aria-label="Apri l'annuncio di ${r(t.name)}">${S("doc",16)}</button>`),e||(t.status==="magazzino"&&a.push(`<button class="btn small" data-action="sale-open" data-kind="list" data-id="${t.id}">Metti in vendita</button>`),t.status==="vendita"&&a.push(`<button class="btn small" data-action="sale-open" data-kind="price" data-id="${t.id}">Prezzo</button><button class="btn small" data-action="sale-open" data-kind="sell" data-id="${t.id}">Venduto</button>`),xt(t)&&a.push(`<button class="btn small" data-action="sale-shipped" data-id="${t.id}">Spedito</button>`)),t.status!=="venduto"?a.push(`<button class="icon-btn" data-action="sale-edit" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${S("edit",16)}</button>`):a.push(`<button class="link" data-action="sale-unsell" data-id="${t.id}">Annulla vendita</button>`),a.push(`<button class="icon-btn" data-action="sale-del" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button>`),{open:e,html:a.join("")}}function Xl(t,e){const a=k(),{open:i,html:n}=Zl(e),s=[],o=[];let l="";if(e.status==="magazzino")e.where&&s.push("in "+r(e.where)),e.cost&&s.push(`pagato ${h(e.cost)}`),e.price&&s.push(`pensavo ${h(e.price)}`);else if(e.status==="vendita"){const c=qt(e,a);s.push(r(e.platform||"online")),s.push(c?`online da ${wa(c)}`:"online da oggi");const u=e.priceHistory||[];u.length>1&&s.push(`era ${h(u[0].price)}`),e.minPrice&&s.push(`minimo ${h(e.minPrice)}`),e.where&&s.push("in "+r(e.where)),l=`${c>=te?`<span class="tag warn" title="Online da più di ${te} giorni: ribassa o ripubblica">fermo</span>`:""}<span class="money strong">${e.price?h(e.price):"—"}</span>`}else{s.push(`venduto il ${r(Hl(e.soldAt))}${e.buyer?" a "+r(e.buyer):""}`),s.push(r(e.platform||"")),e.listedAt&&s.push(`in ${wa(Math.max(0,_n(e.listedAt,e.soldAt)))}`),e.cost&&o.push(`l'avevi pagato ${h(e.cost)}`),e.fees&&o.push(`prezzo ${h(e.soldPrice)} − spese ${h(e.fees)}`),e.txId&&o.push("entrata su "+r(nt(t,e.accountId)));const c=e.cost?H(we(e)-e.cost):null;l=`${xt(e)?'<span class="tag warn">da spedire</span>':e.delivery==="spedizione"?'<span class="tag">spedito</span>':""}
      ${c!==null?`<span class="tag ${c>=0?"ent":"bad"}" title="Rispetto a quanto l'avevi pagato">${c>=0?"+":"−"}${h(Math.abs(c))}</span>`:""}
      <span class="money strong">${h(we(e))}</span>`}return`
    <div class="dl-row">
      <div class="item sale">
        <div class="text"><div class="strong">${r(e.name)}</div><div class="hint">${s.filter(Boolean).join(" · ")}</div>${o.length||e.note?`<div class="hint">${[...o,e.note?r(e.note):""].filter(Boolean).join(" · ")}</div>`:""}</div>
        <div class="sale-side">${l}${n}</div>
      </div>
      ${i==="list"?Kl(e):i==="price"?Ql(e):i==="sell"?Yl(t,e):""}
    </div>`}const _n=(t,e)=>qt({listedAt:t},e);function Jl(t){const e=d.ui.saleEdit?lt(d.ui.saleEdit):null,a=e?e.status:d.ui.saleNewStatus||"magazzino",i=n=>e?r(e[n]??""):"";return`
    <form class="card stack grow-1" data-form="sale-save" aria-labelledby="h-saleform">
      <h2 id="h-saleform">${e?"Modifica":"Nuovo oggetto"}</h2>
      ${e?`<input type="hidden" name="id" value="${e.id}">`:`
      <div class="pills small" role="radiogroup" aria-label="Stato">
        <label class="pill"><input type="radio" name="status" value="magazzino" data-change="sale-newstatus" ${a==="magazzino"?"checked":""}><span>Da vendere</span></label>
        <label class="pill"><input type="radio" name="status" value="vendita" data-change="sale-newstatus" ${a==="vendita"?"checked":""}><span>Già in vendita</span></label>
      </div>`}
      <label class="field">Cosa<input class="input" id="sale-name" name="name" value="${i("name")}" placeholder="es. bici da corsa, iPhone 12" required></label>
      <div class="form-grid two">
        <label class="field">${a==="vendita"?"Prezzo (€)":"Prezzo pensato (€)"}<input class="input" name="price" inputmode="decimal" value="${e?r(Mt(e.price)):""}" placeholder="${a==="vendita"?"es. 50":"facoltativo"}" ${a==="vendita"&&!e?"required":""}></label>
        <label class="field">Prezzo minimo (€)<input class="input" name="minPrice" inputmode="decimal" value="${e?r(Mt(e.minPrice)):""}" placeholder="sotto non scendo"></label>
      </div>
      ${a==="vendita"?`
      <div class="form-grid two">
        <label class="field">Dove<select class="input" name="platform">${Gn(e?.platform)}</select></label>
        <label class="field">Online dal<input class="input" type="date" name="listedAt" value="${e?.listedAt||k()}"></label>
      </div>
      <label class="field">Link all'annuncio<input class="input" name="link" type="url" value="${i("link")}" placeholder="https://www.subito.it/…"></label>`:""}
      <div class="form-grid two">
        <label class="field">Dove si trova<input class="input" name="where" value="${i("where")}" placeholder="es. cantina, armadio" list="sale-where"></label>
        <label class="field">L'avevo pagato (€)<input class="input" name="cost" inputmode="decimal" value="${e?r(Mt(e.cost)):""}" placeholder="facoltativo"></label>
      </div>
      <datalist id="sale-where">${[...new Set(t.sales.map(n=>n.where).filter(Boolean))].map(n=>`<option value="${r(n)}">`).join("")}</datalist>
      <label class="field">Nota<input class="input" name="note" value="${i("note")}" placeholder="es. scatola originale, graffio sul lato"></label>
      <div class="row"><button class="btn primary" type="submit">${e?"Salva":"Aggiungi"}</button>${e?'<button class="btn" type="button" data-action="sale-edit-cancel">Annulla</button>':""}</div>
    </form>`}function tc(){const t=d.data,e=k(),a=e.slice(0,4),i=t.sales.filter(v=>v.status==="vendita").sort((v,$)=>(v.listedAt||"").localeCompare($.listedAt||"")),n=t.sales.filter(v=>v.status==="magazzino").sort((v,$)=>v.name.localeCompare($.name,"it")),s=t.sales.filter(v=>v.status==="venduto").sort((v,$)=>xt($)-xt(v)||($.soldAt||"").localeCompare(v.soldAt||"")),o=s.filter(xt),l=s.filter(v=>(v.soldAt||"").startsWith(a)),c=H(l.reduce((v,$)=>v+we($),0)),u=i.filter(v=>qt(v,e)>=te),p=H(i.reduce((v,$)=>v+($.price||0),0)),g=l.filter(v=>v.listedAt),m=g.length?Math.round(g.reduce((v,$)=>v+_n($.listedAt,$.soldAt),0)/g.length):null,y=d.ui.saleTab||(o.length?"venduti":i.length?"vendita":n.length?"magazzino":"vendita"),w=[["vendita","In vendita",i.length],["magazzino","Da vendere",n.length],["venduti","Venduti",s.length]],z=y==="vendita"?i:y==="magazzino"?n:s,N={vendita:'Nessun annuncio aperto. Metti in vendita qualcosa da "Da vendere" o aggiungilo a destra.',magazzino:"Niente da vendere. Quando ti viene in mente qualcosa che non usi più, segnalo qui.",venduti:"Ancora nessuna vendita."}[y];return`
    ${W(o.length?`${o.length} da spedire`:i.length?`${i.length} annunci aperti`:"Subito e simili","Vendite")}
    <section class="metrics">
      ${j("In vendita",String(i.length),"",i.length?`chiedi ${h(p)}`:"")}
      ${j("Da vendere",String(n.length))}
      ${j("Da spedire",String(o.length),o.length?"warn":"")}
      ${j(`Incassato ${a}`,h(c),c?"good":"",l.length?`${l.length} venduti${m!==null?` · in media ${wa(m)}`:""}`:"")}
    </section>
    ${u.length?`<div class="banner warn" role="status">${u.length===1?`"${r(u[0].name)}" è online`:`${u.length} annunci sono online`} da più di ${te} giorni: valuta di ribassare o ripubblicare.</div>`:""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <div class="pills small" role="tablist">
          ${w.map(([v,$,E])=>`<button class="chip ${y===v?"":"off"}" role="tab" aria-selected="${y===v}" data-action="sale-tab" data-tab="${v}">${$} · ${E}</button>`).join("")}
        </div>
        <section class="card">
          ${z.length?`<div class="list">${z.map(v=>Xl(t,v)).join("")}</div>`:`<div class="empty">${N}</div>`}
        </section>
      </div>
      ${Jl(t)}
    </div>`}function ec(t){const e=t.sales.filter(xt);return e.length?`<section class="card attention" aria-labelledby="h-ship"><div class="card-head"><h2 id="h-ship">Da spedire</h2><button class="link" data-action="nav" data-id="vendite">Vendite</button></div>
    <div class="list">${e.map(a=>`<div class="item"><div class="text">${r(a.name)}<div class="hint">venduto il ${r(I(a.soldAt))}${a.buyer?" a "+r(a.buyer):""}</div></div><button class="btn small" data-action="sale-shipped" data-id="${a.id}">Spedito</button></div>`).join("")}</div></section>`:""}L("vendite",{render:tc,changes:{"sale-delivery"(t){d.ui.saleDelivery=t.value},"sale-record"(t){d.ui.saleRecord=t.checked;const e=t.form,a=Object.fromEntries(["price","date","buyer","fees"].map(n=>[n,e.querySelector(`[name=${n}]`)?.value]));b("vendite");const i=document.querySelector('[data-form="sale-sell"]');if(i)for(const[n,s]of Object.entries(a)){const o=i.querySelector(`[name=${n}]`);o&&s!=null&&(o.value=s)}},"sale-newstatus"(t){d.ui.saleNewStatus=t.value;const e=t.form,a=Object.fromEntries(["name","price","minPrice","where","cost","note"].map(n=>[n,e.querySelector(`[name=${n}]`)?.value]));b("vendite");const i=document.querySelector('[data-form="sale-save"]');if(i)for(const[n,s]of Object.entries(a)){const o=i.querySelector(`[name=${n}]`);o&&s!=null&&(o.value=s)}}},actions:{"sale-tab"(t){d.ui.saleTab=t.dataset.tab,d.ui.saleOpen=null,b("vendite")},"sale-open"(t){d.ui.saleOpen={id:t.dataset.id,kind:t.dataset.kind},d.ui.saleDelivery="mano",b("vendite"),P({list:"#sl-price",price:"#sp-price",sell:"#ss-price"}[t.dataset.kind])},"sale-cancel"(){d.ui.saleOpen=null,b("vendite")},async"sale-link"(t){const e=lt(t.dataset.id);if(!(!e||!e.link))try{await oe("open_document",{target:e.link})}catch(a){D(String(a)),A()}},"sale-edit"(t){d.ui.saleEdit=t.dataset.id,b("vendite"),P("#sale-name")},"sale-edit-cancel"(){d.ui.saleEdit=null,b("vendite")},"sale-withdraw"(t){const e=lt(t.dataset.id);e&&(f(()=>{e.status="magazzino",e.listedAt=null,O(e)}),d.ui.saleOpen=null,b("vendite",{},`"${e.name}" ritirato: è di nuovo tra le cose da vendere`))},"sale-repost"(t){const e=lt(t.dataset.id);if(!e)return;const a=document.getElementById("sp-price")?.value,i=a?U(a):0;f(n=>{i>0&&_t(n,e,{price:i}),e.listedAt=k(),O(e)}),d.ui.saleOpen=null,b("vendite",{},`"${e.name}" ripubblicato oggi${i>0?` a ${h(e.price)}`:""}`)},"sale-shipped"(t){const e=lt(t.dataset.id);e&&(f(()=>{e.shipped=!0,e.shippedAt=k(),O(e)}),b(d.view,{},`"${e.name}" spedito`))},"sale-unsell"(t){const e=lt(t.dataset.id);!e||!window.confirm(`Annullare la vendita di "${e.name}"?${e.txId?" Viene tolta anche l'entrata registrata sul conto.":""}`)||(f(a=>Ls(a,e)),d.ui.saleTab=e.status==="vendita"?"vendita":"magazzino",b("vendite",{},`Vendita annullata: "${e.name}" è di nuovo ${e.status==="vendita"?"in vendita":"da vendere"}`))},"sale-del"(t){const e=lt(t.dataset.id);!e||!window.confirm(`Eliminare "${e.name}"?${e.txId?" L'entrata già registrata sul conto resta.":""}`)||(f(a=>{a.sales=a.sales.filter(i=>i.id!==e.id),K(a,e.id)}),d.ui.saleEdit===e.id&&(d.ui.saleEdit=null))}},forms:{"sale-save"(t,e){const a=String(t.get("name")||"").trim();if(!a)return gt(e,"name","Scrivi cosa vendi");const i=p=>{const g=String(t.get(p)||"").trim();return g?U(g):null},n=i("price"),s=i("minPrice"),o=i("cost");for(const[p,g]of[["price",n],["minPrice",s],["cost",o]])if(g!==null&&!(g>0))return gt(e,p,"Scrivi un importo, es. 50");const l=d.ui.saleEdit?lt(d.ui.saleEdit):null,c=l?l.status:t.get("status")==="vendita"?"vendita":"magazzino";if(c==="vendita"&&!l&&!(n>0))return gt(e,"price","A quanto lo vendi?");const u={name:a,minPrice:s,cost:o,where:String(t.get("where")||"").trim(),note:String(t.get("note")||"").trim()};c==="vendita"&&Object.assign(u,{platform:t.get("platform")||"Subito",link:String(t.get("link")||"").trim(),listedAt:t.get("listedAt")||k()}),f(p=>{if(l)Object.assign(l,u),l.status==="vendita"&&n>0&&n!==l.price?_t(p,l,{price:n}):l.status!=="vendita"&&(l.price=n),O(l);else{const g=_i(Object.assign(u,{status:"magazzino",price:c==="vendita"?null:n}));c==="vendita"&&_t(p,g,{price:n,date:u.listedAt}),p.sales.push(g)}}),d.ui.saleEdit=null,d.ui.saleTab=c==="vendita"?"vendita":"magazzino",b("vendite",{},l?`"${a}" aggiornato`:c==="vendita"?`"${a}" è in vendita a ${h(n)}`:`"${a}" aggiunto alle cose da vendere`),l||P("#sale-name")},"sale-list"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return gt(e,"price","A quanto lo vendi?");f(n=>_t(n,a,{price:i,platform:t.get("platform"),link:String(t.get("link")||"").trim(),date:t.get("date")||k()})),d.ui.saleOpen=null,d.ui.saleTab="vendita",b("vendite",{},`"${a.name}" in vendita a ${h(i)} su ${a.platform}`)},"sale-price"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return gt(e,"price","Scrivi il nuovo prezzo");const n=a.price;f(s=>_t(s,a,{price:i})),d.ui.saleOpen=null,b("vendite",{},n&&n!==i?`"${a.name}": ${h(n)} → ${h(i)}`:"Prezzo salvato")},"sale-sell"(t,e){const a=lt(t.get("id"));if(!a)return;const i=U(t.get("price"));if(!(i>0))return gt(e,"price","A quanto l'hai venduto?");const n=String(t.get("fees")||"").trim(),s=n?U(n):0;if(n&&!(s>=0))return gt(e,"fees","Scrivi un importo, es. 5");if(s>=i)return gt(e,"fees","Le spese superano il prezzo");const o=t.get("record")==="on",l=o?t.get("accountId"):null;if(o&&!l)return D("Crea prima un conto in Finanze."),A();const c=t.get("delivery")==="spedizione"?"spedizione":"mano";f(u=>Rs(u,a,{price:i,date:t.get("date")||k(),fees:s,delivery:c,buyer:String(t.get("buyer")||"").trim(),accountId:l})),d.ui.saleOpen=null,d.ui.saleTab="venduti",b("vendite",{},`Venduto "${a.name}" a ${h(i)}${o?` · entrata di ${h(we(a))} su ${nt(d.data,l)}`:""}${c==="spedizione"?" · ricordati di spedirlo":""}`)}}});function ac(){const t=new Date().getHours();return t<13?"Buongiorno":t<18?"Buon pomeriggio":"Buonasera"}function ic(){const t=d.data.profile;if(t.lat==null)return`<button class="weather link" data-action="nav" data-id="impostazioni">${S("cloud",26,1.6)}<span>Imposta la tua città per il meteo</span></button>`;if(!d.weather)return`<div class="weather">${S("cloud",26,1.6)}<span class="sub">${r(d.weatherError||"Carico il meteo…")}</span></div>`;const e=d.weather.current,a=d.weather.daily,i=a&&a.weather_code?ua(a.weather_code[1]).toLowerCase():"";return`
    <div class="weather">
      <span class="accent-2">${S("cloud",30,1.6)}</span>
      <div><div class="temp">${Math.round(e.temperature_2m)}°</div>
      <div class="sub small">${r(t.city)} · ${r(ua(e.weather_code))}${i?" · domani "+r(i):""}</div></div>
    </div>`}function nc(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()-t.getDate()+1}function Wn(t){const e=Y(t),a=ut(new Date),i=ke(t,a),n=t.settings.budget||0,s=H(n-i.out);return`
      <section class="card" aria-labelledby="h-fin">
        <div class="card-head"><h2 id="h-fin">Finanze · ${r(Yi(a))}</h2><span class="sub">${nc()} giorni a fine mese</span></div>
        <div class="metrics">
          ${e?`<div class="metric"><div class="label">Saldo ${r(e.name)}</div><div class="value">${h(se(t,e))}</div>${gn(t,e)}</div>`:""}
          <div class="metric"><div class="label">Speso nel mese</div><div class="value">${h(i.out)}</div>${n?`<div class="hint">${s>=0?"restano "+h(s)+" di budget":"budget superato di "+h(-s)}</div>`:`<div class="hint">entrate ${h(i.inc)}</div>`}</div>
        </div>
        ${n?`<div class="progress ${s<0?"over":""}"><div style="width:${Math.min(100,Math.round(i.out/n*100))}%"></div></div>`:""}
        <div class="stack-sm">${rn(i.cats,i.out,t.settings.catBudgets,{limit:4})}</div>
        ${t.goals.some(o=>!o.done)?`<div class="divider-top stack-sm"><div class="card-head"><span class="sub">Obiettivi</span><button class="link" data-action="nav" data-id="obiettivi">Apri</button></div>${Oo(t)}</div>`:""}
        ${i.tx.length?`<div class="list tight">${i.tx.filter(o=>!o.invest).slice(0,4).map(o=>dn(o)).join("")}</div>`:""}
        <form data-form="quick-expense" class="row">
          <label class="sr-only" for="qe-amount">Importo</label>
          <input class="input amount" id="qe-amount" name="amount" inputmode="decimal" placeholder="0,00 €" required>
          <label class="sr-only" for="qe-cat">Categoria</label>
          <select class="input" id="qe-cat" name="category">${Ut("out","Spesa")}</select>
          <label class="sr-only" for="qe-note">Nota</label>
          <input class="input grow" id="qe-note" name="note" placeholder="Nota">
          <label class="sr-only" for="qe-acc">Conto</label>
          <select class="input" id="qe-acc" name="accountId">${at()}</select>
          <button class="btn primary" type="submit">Aggiungi spesa</button>
        </form>
      </section>
`}function Hn(t){return`
      <section class="card" aria-labelledby="h-shop">
        <div class="card-head"><h2 id="h-shop">Spesa</h2><button class="link" data-action="nav" data-id="spesa">${Zt(t).length?Zt(t).length+" da prendere":"Apri"}</button></div>
        ${Do()}
        ${pn("shop-quick-oggi")}
      </section>
`}function Kn(t){return`
      <section class="card" aria-labelledby="h-rub">
        <div class="card-head"><h2 id="h-rub">Contatti rapidi</h2><button class="link" data-action="nav" data-id="rubrica">Rubrica</button></div>
        ${t.contacts.some(e=>e.phone)?`<div class="list">${t.contacts.filter(e=>e.phone).slice(0,6).map(e=>`
          <div class="item"><div class="avatar">${r(e.name.split(/\s+/).slice(0,2).map(a=>a[0]).join("").toUpperCase())}</div>
          <div class="text"><div>${r(e.name)}</div><div class="hint">${r(e.phone)}</div></div>
          <button class="icon-btn" data-action="copy" data-text="${r(e.phone)}" aria-label="Copia il numero di ${r(e.name)}">${S("copy",16)}</button></div>`).join("")}</div>`:'<div class="empty">Aggiungi i numeri dei tuoi contatti dalla Rubrica.</div>'}
      </section>
`}function Qn(t){const e=Ia(t);return`
    ${e.length?`
    <section class="card attention" aria-labelledby="h-due">
      <div class="card-head"><h2 id="h-due">Da confermare</h2><span class="sub">${e.length} programmat${e.length===1?"o":"i"} già passat${e.length===1?"o":"i"}</span></div>
      <div class="list">${e.slice(0,6).map(Na).join("")}</div>
      ${e.length>6?'<button class="link" data-action="nav" data-id="programmati">Vedi tutti</button>':""}
    </section>`:""}
`}function Yn(t,e){const a=k(),i=Zi(t,7),n=Pe(t,M(a,0),M(a,7));return[0,1,2,3,4,5,6].map(s=>{const o=M(a,s),l=[],c=d.weather?.daily;if(c){const u=c.time.indexOf(o);if(u>=0){const p=c.precipitation_probability_max?.[u];l.push({cls:"meteo",text:`${ua(c.weather_code[u])}, ${Math.round(c.temperature_2m_min[u])}°/${Math.round(c.temperature_2m_max[u])}°${p>=50?" · porta l'ombrello":""}`})}}for(const u of n.filter(p=>p.date===o)){const p=wn(t,u.contact.name).length;l.push({cls:"comp",text:`Compleanno di ${u.contact.name}${u.age?" ("+u.age+")":""}${p?` · ${p} ${p===1?"idea":"idee"} regalo`:""}`})}for(const u of i.filter(p=>p.date===o))l.push({cls:"pag",text:`${u.r.name} ${le(u.r)}`});if(s>0)for(const u of e.filter(p=>p.due===o))l.push({cls:"att",text:u.text});if(s>0)for(const u of t.deadlines.filter(p=>!p.archived&&p.due===o))l.push({cls:"scad",text:`Scade: ${u.name}`});return{iso:o,n:s,parts:l}}).filter(s=>s.n>0&&s.parts.some(o=>o.cls!=="meteo")||s.n>0&&s.n<=3)}function sc(){const t=d.data,e=k(),a=Se(t.todos.filter(o=>!o.done)),i=t.todos.filter(o=>o.done&&o.doneAt===e).length,n=Ea(t),s=Yn(t,a);return`
    <header class="head">
      <div><div class="date">${r(new Date().toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).replace(/^./,o=>o.toUpperCase()))}</div>
      <h1>${ac()}${t.profile.name?", "+r(t.profile.name):""}</h1></div>
      ${ic()}
    </header>
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}
    ${qa("card")}
    ${En(t)}
    ${Qn(t)}
    ${bn(t)}
    <div class="grid">
      ${zn(t)}
      ${Vo(t)}
      ${ec(t)}
      ${ze(t).length?`<section class="card attention" aria-labelledby="h-meds-low"><div class="card-head"><h2 id="h-meds-low">Da ricomprare</h2><button class="link" data-action="nav" data-id="salute">Salute</button></div>
        <div class="list">${ze(t).map(({m:o,s:l})=>`<div class="item"><div class="text">${r(o.name)}</div><span class="tag warn">${l.days===0?"finito":`ancora ${l.days} giorni`}</span><button class="btn small" data-action="med-shop" data-id="${o.id}">Metti in spesa</button></div>`).join("")}</div></section>`:""}
      <section class="card" aria-labelledby="h-todo">
        <div class="card-head"><h2 id="h-todo">Da fare</h2><span class="sub">${a.length} aperte · ${i} fatte oggi</span></div>
        ${n.length?`<div class="list">${n.map(o=>Le(o,{tools:!1})).join("")}</div>`:""}
        <div class="list">${a.length?a.slice(0,7).map(ie).join(""):n.length?"":'<div class="empty">Niente in sospeso.</div>'}</div>
        ${a.length>7?`<button class="link" data-action="nav" data-id="attivita">Vedi tutte (${a.length})</button>`:""}
        ${un()}
      </section>
      ${$n(t)}

      ${Wn(t)}

      ${Hn(t)}

      <section class="card" aria-labelledby="h-next">
        <div class="card-head"><h2 id="h-next">Prossimi giorni</h2><button class="link" data-action="nav" data-id="calendario">Calendario</button></div>
        ${s.length?s.map(o=>`
          <div class="day-row"><div class="when">${r(pt(o.iso))}</div>
            <div class="stack-xs">${o.parts.length?o.parts.map(l=>`<span class="${l.cls==="meteo"?"sub":""}"><span class="dot-cat ${l.cls}" aria-hidden="true"></span>${r(l.text)}</span>`).join(""):'<span class="hint">Niente in programma</span>'}</div>
          </div>`).join(""):'<div class="empty">Settimana libera.</div>'}
      </section>

      ${Kn(t)}
    </div>`}const Nt=(t,e,a,i,n)=>{const s=2*Math.PI*40;return`<div class="cmd-mini">
    <div class="cmd-mini-ring"><svg viewBox="0 0 96 96" aria-hidden="true">
      <circle cx="48" cy="48" r="40" fill="none" stroke="var(--track)" stroke-width="6"/>
      <circle cx="48" cy="48" r="40" fill="none" stroke="${e}" stroke-width="6" stroke-dasharray="${(s*Math.min(1,Math.max(0,t))).toFixed(1)} ${s.toFixed(1)}" transform="rotate(-90 48 48)"/>
      <circle cx="48" cy="48" r="46" fill="none" stroke="var(--line-2)" stroke-width="1" stroke-dasharray="2 4"/></svg>
      <span>${r(i)}</span></div>
    <span class="cmd-mini-label">${r(a)}</span><span class="hint">${r(n)}</span></div>`};function oc(){const t=d.data,e=k(),a=st(e),i=Se(t.todos.filter(C=>C.due&&C.due<=e&&(!C.done||C.doneAt===e))),n=i.filter(C=>!C.done),s=n.filter(C=>C.due<e).length,o=Ea(t),l=t.habits.filter(C=>!C.archived),c=l.reduce((C,T)=>C+Math.min(7,T.perWeek),0),u=l.reduce((C,T)=>C+Math.min(T.perWeek,Ct(t,T,a)),0),p=Ki(t,a),g=i.length?(i.length-n.length)/i.length:1,m=c?u/c:0;p.meals/14;const y=Ne(),w=Fn(t).filter(C=>!C.done&&!(y&&(C.tag==="FARMACO"||C.tag==="CONFERMA"))),z=Se(t.todos.filter(C=>!C.done)),N=Yn(t,z),v=[];for(const C of n.filter(T=>T.time))v.push({when:C.time,title:C.text,sub:"Oggi",now:!0});for(const C of N)for(const T of C.parts.filter(B=>B.cls!=="meteo"&&!(y&&B.cls==="pag")))v.push({when:pt(C.iso).toUpperCase(),title:T.text,sub:"",cls:T.cls});const $=qe(t)[0],E=ke(t,ut(new Date)),x=t.settings.budget||0,_=Qi(t);return`
    ${d.notice?`<div class="banner ok" role="status">${r(d.notice)}</div>`:""}
    ${d.error?`<div class="banner bad" role="alert">${r(d.error)}</div>`:""}
    <div class="cmd-row">
      <section class="card cmd-panel" aria-labelledby="h-al">
        <div class="card-head"><h2 id="h-al">Avvisi</h2><span class="cmd-num">${String(w.length).padStart(2,"0")}</span></div>
        ${w.length?`<div class="cmd-alerts">${w.slice(0,7).map(C=>`
          <button class="cmd-alert ${C.cls}" data-action="nav" data-id="${C.nav}">
            <span class="cmd-alert-text"><span>${r(C.title)}</span><span class="hint">${r(C.sub)}</span></span>
            <span class="cmd-tag">${C.tag}</span></button>`).join("")}</div>`:'<div class="empty">Tutto a posto: niente da recuperare.</div>'}
      </section>

      <section class="card cmd-core" aria-label="Il giorno">
        ${_l({todays:i,openToday:n,late:s,habTarget:c,habDone:u,pHab:m,pAtt:g,wb:p,targets:_,days:N,mon:a})}
      </section>

      <section class="card cmd-panel" aria-labelledby="h-todo">
        <div class="card-head"><h2 id="h-todo">Da fare oggi</h2><button class="link" data-action="nav" data-id="attivita">${z.length} aperte</button></div>
        ${o.length?`<div class="list">${o.map(C=>Le(C,{tools:!1})).join("")}</div>`:""}
        <div class="list">${i.length?i.slice(0,7).map(ie).join(""):o.length?"":'<div class="empty">Niente per oggi.</div>'}</div>
        <h2 class="cmd-sub">Comandi rapidi</h2>
        <div class="cmd-quick">
          <button class="cmd-q" data-action="cap-open">${S("plus",16)}Annota</button>
          <button class="cmd-q" data-action="nav" data-id="spesa">${S("cart",16)}Spesa</button>
          <button class="cmd-q" data-action="nav" data-id="finanze">${S("wallet",16)}Movimento</button>
          <button class="cmd-q" data-action="nav" data-id="calendario">${S("calendar",16)}Calendario</button>
        </div>
      </section>
    </div>

    <div class="cmd-row">
      <section class="card cmd-panel" aria-labelledby="h-ag">
        <div class="card-head"><h2 id="h-ag">Agenda</h2><button class="link" data-action="nav" data-id="calendario">Calendario</button></div>
        ${v.length?`<div class="cmd-agenda">${v.slice(0,7).map(C=>`
          <div class="cmd-ag ${C.now?"now":""}"><span class="cmd-ag-when">${r(C.when)}</span><span class="cmd-ag-dot" aria-hidden="true"></span>
            <span class="cmd-ag-text"><span>${r(C.title)}</span>${C.sub?`<span class="hint">${r(C.sub)}</span>`:""}</span></div>`).join("")}</div>`:'<div class="empty">Settimana libera.</div>'}
      </section>

      <section class="card cmd-panel cmd-wide" aria-labelledby="h-obj">
        <h2 id="h-obj">Settimana e obiettivi</h2>
        <div class="cmd-minis">
          ${l.length?Nt(m,"var(--good)","ABITUDINI",Math.round(m*100)+"%",`${u} di ${c} questa settimana`):Nt(0,"var(--good)","ABITUDINI","—","nessuna abitudine")}
          ${$&&!y?Nt($.target?We(t,$)/$.target:0,"var(--accent)",$.name.toUpperCase(),$.target?Math.round(We(t,$)/$.target*100)+"%":"—",`${h(We(t,$))} di ${h($.target)}`):Nt(0,"var(--accent)","OBIETTIVO","—","nessun obiettivo")}
          ${x&&!y?Nt(E.out/x,E.out>x?"var(--bad)":"var(--warn)","BUDGET "+Yi(ut(new Date)).toUpperCase(),Math.round(E.out/x*100)+"%",`${h(E.out)} di ${h(x)}`):Nt(0,"var(--warn)","SPESO NEL MESE",h(E.out).replace(/,\d\d\s*€/," €"),"nessun budget impostato")}
        </div>
      </section>

      <section class="card cmd-panel" aria-labelledby="h-meal">
        <div class="card-head"><h2 id="h-meal">Equilibrio pasti</h2><button class="link" data-action="nav" data-id="pasti">Pasti</button></div>
        <div class="cmd-meals">${ee.map(C=>{const T=p.counts[C],B=_[C],$t=B.min||B.max||1,Z=B.min!=null&&T<B.min,Dt=B.max!=null&&T>B.max,re=B.max!=null&&T>=B.max,Gt=4,Ge=Math.min(Gt,Math.round(T/Math.max($t,1)*Gt));return`<div class="cmd-meal ${Z?"m-low":Dt?"m-over":re?"m-full":"m-ok"}"><span>${r(bt[C].label)}</span><span class="cmd-segs">${Array.from({length:Gt},(Ga,yt)=>`<i class="${yt<Ge?"on":""}"></i>`).join("")}</span><span class="cmd-meal-v">${T} / ${B.min&&B.max?`${B.min}–${B.max}`:B.min?B.min+"+":"max "+B.max}</span></div>`}).join("")}</div>
      </section>
    </div>

    <div class="grid">
      ${En(t)}
      ${y?"":Qn(t)}
      ${y?"":bn(t)}
      ${y?"":zn(t)}
      ${$n(t)}
      ${y?"":Wn(t)}
      ${Hn(t)}
      ${Kn(t)}
    </div>`}L("oggi",{render:()=>Bs()||Vs()?oc():sc(),actions:{...Wl},forms:{"quick-expense"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 12,50");return}q("Spesa aggiunta"),f(i=>i.transactions.push({id:G(),accountId:t.get("accountId")||Y(i)?.id,date:k(),type:"out",amount:a,category:String(t.get("category")||"Altro"),note:String(t.get("note")||"").trim(),transfer:!1,invest:!1,createdAt:new Date().toISOString()}))}}});const lc=[{name:"Bastoncini di merluzzo al forno con piselli",minutes:25,ahead:"",steps:["Accendi il forno a 200 °C (180 °C se ventilato)","Metti i bastoncini ancora surgelati su una teglia con carta forno","Inforna 15–18 minuti, girandoli a metà cottura","Intanto metti i piselli in padella con un filo d'olio, mezzo bicchiere d'acqua e un pizzico di sale","Cuoci i piselli 8–10 minuti col coperchio, poi scopri e fai asciugare l'acqua"]},{name:"Bocconcini di pollo al limone con insalata",minutes:20,ahead:"",steps:["Taglia il petto di pollo a cubetti di 2–3 cm","Passali nella farina e scuoti via quella in eccesso","Rosolali in padella con un filo d'olio a fuoco medio-alto, 5–6 minuti girandoli","Aggiungi il succo del limone e 3–4 cucchiai d'acqua, sala e cuoci 2–3 minuti finché il sugo si addensa","Lava l'insalata e condiscila con olio e sale"]},{name:"Cosce di pollo con patate, rosmarino e aglio",minutes:60,ahead:"",steps:["Accendi il forno a 200 °C","Sbuccia le patate e tagliale a spicchi","In una teglia metti patate e cosce, 2 spicchi d'aglio interi schiacciati, rosmarino, olio, sale e pepe; mescola bene","Sistema le cosce con la pelle verso l'alto","Inforna 45–50 minuti, girando le patate a metà","Sono pronte quando la carne vicino all'osso non è più rosa e la pelle è dorata"]},{name:"Cotolette di pollo in padella con carote al vapore",minutes:25,ahead:"",steps:["Pela le carote e tagliale a rondelle","Cuocile a vapore 10–12 minuti (cestello, oppure pentola con due dita d'acqua e coperchio)","Intanto scalda un dito d'olio in padella a fuoco medio","Cuoci le cotolette 4–5 minuti per lato finché sono dorate (se sono surgelate già impanate, segui la confezione)","Scolale su carta da cucina e sala","Condisci le carote con olio e sale"]},{name:"Fagioli e tonno",minutes:10,ahead:"",steps:["Scola i fagioli e sciacquali sotto l'acqua","Sgocciola il tonno","Lava l'insalata","Unisci tutto e condisci con olio, sale e pepe (un goccio d'aceto se ti piace)"]},{name:"Frittata Pomodori e Pancetta",minutes:20,ahead:"",steps:["Taglia i pomodori a dadini e togli semi e acqua","Rosola la pancetta in una padella antiaderente senza olio, 3–4 minuti","Aggiungi i pomodori e cuoci 2–3 minuti","Sbatti le uova con sale e pepe e versale nella padella","Cuoci a fuoco basso col coperchio 6–8 minuti, finché sopra è quasi rappresa","Girala aiutandoti con un piatto e cuoci altri 2–3 minuti"]},{name:"Insalata di ceci, tonno e pomodorini",minutes:15,ahead:"",steps:["Affetta sottile la cipolla rossa e lasciala 10 minuti in acqua fredda con un goccio d'aceto (diventa meno forte)","Scola i ceci e sciacquali","Taglia i pomodori","Sgocciola il tonno","Scola la cipolla, unisci tutto e condisci con olio, sale e pepe"]},{name:"Insalata di tonno, patate e fagiolini",minutes:30,ahead:"",steps:["Sbuccia le patate e tagliale a cubetti","Mettile in una pentola di acqua fredda salata e porta a bollore","Spunta i fagiolini e aggiungili nella stessa pentola dopo 5 minuti di bollore","Cuoci ancora 10 minuti, finché la forchetta entra nelle patate","Scola e lascia intiepidire","Unisci il tonno sgocciolato e condisci con olio e sale"]},{name:"Lenticchie e salsiccia in padella",minutes:30,ahead:"",steps:["Trita la cipolla e falla appassire in padella con un filo d'olio, 5 minuti","Togli il budello alla salsiccia, sbriciolala e rosolala 5 minuti","Aggiungi la passata, sala e cuoci 10 minuti","Aggiungi le lenticchie scolate e cuoci altri 10 minuti; se si asciuga troppo, un po' d'acqua"]},{name:"Merluzzo al forno con pomodorini e olive nere",minutes:30,ahead:"Sposta il merluzzo dal freezer al frigo per farlo scongelare",steps:["Accendi il forno a 200 °C","Taglia i pomodori a metà e mettili in teglia con le olive, olio, sale e origano","Tampona i filetti con carta da cucina e adagiali sopra, con un filo d'olio e un pizzico di sale","Inforna 15–20 minuti, finché il pesce si sfalda con la forchetta"]},{name:"Piadina Cotto e Formaggio",minutes:10,ahead:"",steps:["Scalda una padella antiaderente a fuoco medio","Scalda la piadina 30 secondi per lato","Metti formaggio e cotto su metà piadina e chiudila","Cuoci 1–2 minuti per lato finché il formaggio si scioglie","Aggiungi l'insalata condita dentro o a parte"]},{name:"Riso al curry con pollo o verdure",minutes:30,ahead:"",steps:["Metti a bollire l'acqua salata e cuoci il riso per il tempo della confezione","Togli pelle e osso alle cosce e taglia la carne a pezzetti (versione verdure: salta questo passaggio)","Rosola il pollo in padella con un filo d'olio, 6–8 minuti","Aggiungi 1–2 cucchiaini di curry e mescola 30 secondi","Aggiungi i piselli e mezzo bicchiere d'acqua (o latte), sala e cuoci 8–10 minuti","Scola il riso e servilo con il pollo al curry sopra"]},{name:"Sgombro con patate lesse",minutes:30,ahead:"",steps:["Sbuccia le patate e tagliale a pezzi","Mettile in acqua fredda salata e lessale 15–20 minuti dal bollore, finché la forchetta entra","Trita il prezzemolo","Scola le patate e condiscile tiepide con olio, sale e prezzemolo","Sgocciola lo sgombro e mettilo sopra"]},{name:"Zuppa di lenticchie con crostini",minutes:35,ahead:"",steps:["Taglia cipolla e carote a dadini","Soffriggile in pentola con un filo d'olio, 5 minuti","Aggiungi 2–3 cucchiai di passata, le lenticchie scolate e acqua (o brodo) fino a coprirle; sala","Cuoci 20 minuti a fuoco basso; se la vuoi cremosa, frullane metà","Intanto taglia il pane a cubetti e tostalo in padella o in forno a 200 °C per 5 minuti","Servi con i crostini e un filo d'olio a crudo"]}],De=[["pranzo","Pranzo"],["cena","Cena"]],cc=["lun","mar","mer","gio","ven","sab","dom"],rc=[["cena","A cena"],["pranzo","A pranzo"],["entrambi","A pranzo e a cena"]],mi=t=>String(t||"").split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean),dc=t=>String(t||"").split(/\n+/).map(e=>e.trim().replace(/^(\d+\s*[.):]|\d+\s+-\s|[-•*])\s*/,"").trim()).filter(Boolean),gi={pranzo:"Pranzo",cena:"Cena"},vi=t=>String(t||"").trim().toLowerCase().replace(/\s+/g," "),Zn=t=>lc.find(e=>vi(e.name)===vi(t.name)),uc=t=>Array.isArray(t.steps)&&t.steps.length>0,je=t=>t.dishes.filter(e=>!uc(e)&&Zn(e));function kt(){const t=M(st(k()),7*(d.ui.mealWeek||0));return{mon:t,sun:M(t,6)}}function pc(t,e){const a=k();return`
    <div class="meal-grid" role="table" aria-label="Menù della settimana">
      <div class="meal-head" role="row"><span role="columnheader"></span>${De.map(([,i])=>`<span role="columnheader">${i}</span>`).join("")}</div>
      ${[0,1,2,3,4,5,6].map(i=>{const n=M(e,i),s=t.mealPlan[n]||{};return`<div class="meal-row ${n===a?"today":""} ${n<a?"past":""}" role="row">
          <span class="meal-day" role="rowheader">${r(pt(n))}</span>
          ${De.map(([o,l])=>{const c=s[o]||"",u=c&&ve(t,c);return`<div class="meal-cell" role="cell">
              <label class="sr-only" for="m-${n}-${o}">${l} di ${r(pt(n))}</label>
              <input class="input slim" id="m-${n}-${o}" list="dish-names" data-change="meal-set" data-date="${n}" data-slot="${o}" value="${r(c)}" placeholder="—" autocomplete="off">
              ${c?u?mc(t,u):`<button class="link small" data-action="dish-from" data-name="${r(c)}">Salva come piatto</button>`:""}
            </div>`}).join("")}
        </div>`}).join("")}
    </div>
    <datalist id="dish-names">${t.dishes.map(i=>`<option value="${r(i.name)}">`).join("")}</datalist>`}function mc(t,e){if(!e.ingredients.length)return'<span class="hint">nessun ingrediente salvato</span>';const a=Xs(t,e),i=n=>r(n.slice(0,2).join(", "))+(n.length>2?` +${n.length-2}`:"");return!a.missing.length&&!a.listed.length?'<span class="hint ok-text">hai tutto in casa</span>':a.missing.length?`<span class="hint warn-text">da comprare: ${i(a.missing)}</span>`:`<span class="hint">in lista: ${i(a.listed)}</span>`}function gc(t){const e=d.ui.prepDay===1?1:0,a=M(k(),e),{meals:i,tomorrow:n}=Hi(t,a),s=d.ui.prepDone||{},o=`<span class="row nowrap gap-sm">${[[0,"Oggi"],[1,"Domani"]].map(([u,p])=>`<button class="chip ${e===u?"on":""}" data-action="prep-day" data-n="${u}" aria-pressed="${e===u}">${p}</button>`).join("")}</span>`,l=n.length?`<div class="prep-ahead">${S("calendar",16)}<div><strong>${e?"Da fare domani":"Da fare oggi"} per ${e?"dopodomani":"domani"}</strong>${n.map(u=>`<div>${r(u.ahead)} <span class="hint">· ${gi[u.slot].toLowerCase()}: ${r(u.dish.name)}</span></div>`).join("")}</div></div>`:"",c=i.length?i.map(u=>{const p=`<div class="prep-head"><span class="tag">${gi[u.slot]}</span><strong>${r(u.dish?u.dish.name:u.text)}</strong>${u.minutes?`<span class="sub">${u.minutes} min</span>`:""}</div>`;if(!u.dish)return`<div class="prep-meal">${p}</div>`;const g=u.ahead?`<div class="hint">Prima: ${r(u.ahead)}</div>`:"";return u.steps.length?`<div class="prep-meal">${p}${g}<ol class="prep-steps">${u.steps.map((m,y)=>{const w=`${a}|${u.slot}|${y}`;return`<li><label class="check"><input type="checkbox" data-change="prep-step" data-key="${r(w)}" ${s[w]?"checked":""}><span>${r(m)}</span></label></li>`}).join("")}</ol></div>`:`<div class="prep-meal">${p}${g}<div class="hint">Nessun passaggio salvato. <button class="link small" data-action="dish-edit" data-id="${u.dish.id}">Aggiungili</button></div></div>`}).join(""):`<div class="empty">${e?"Domani":"Oggi"} nel menù non c'è niente.</div>`;return`
    <section class="card stack-sm" aria-labelledby="h-prep">
      <div class="card-head"><h2 id="h-prep">Preparazione</h2>${o}</div>
      ${l}
      ${c}
    </section>`}const hi=t=>t.min&&t.max!=null?`${t.min}–${t.max}`:t.min?`${t.min}+`:t.max!=null?`max ${t.max}`:"—";function vc(t,e){const a=Qi(t);if(d.ui.targetsEdit)return`
      <form class="card stack-sm" data-form="meal-targets-save" aria-labelledby="h-targets">
        <div class="card-head"><h2 id="h-targets">Obiettivi della settimana</h2><button class="link" type="button" data-action="targets-cancel">Annulla</button></div>
        <div class="hint">Quante volte a settimana. Lascia vuoto per "nessun minimo" o "nessun limite".</div>
        ${ee.map(l=>`
          <div class="bal-row">
            <span>${bt[l].label}</span>
            <label class="field inline">min<input class="input slim num" type="number" min="0" max="14" name="min-${l}" value="${a[l].min??""}"></label>
            <label class="field inline">max<input class="input slim num" type="number" min="0" max="14" name="max-${l}" value="${a[l].max??""}"></label>
          </div>`).join("")}
        <div class="row"><button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-action="targets-reset">Valori delle linee guida</button></div>
      </form>`;const{counts:i,meals:n,known:s}=Ki(t,e);return`
    <section class="card stack-sm" aria-labelledby="h-bal">
      <div class="card-head"><h2 id="h-bal">Equilibrio della settimana</h2><button class="link" data-action="targets-edit">Obiettivi</button></div>
      ${ee.map(l=>{const c=a[l],u=i[l],p=c.max!=null&&u>c.max,g=c.min&&u<c.min,m=c.min||c.max||1,y=Math.min(100,Math.round(u/m*100));return`<div class="bal-row">
      <span>${bt[l].label}</span>
      <div class="progress ${p?"over":g?"near":"goal full"}" role="img" aria-label="${u} su obiettivo ${hi(c)}"><div style="width:${y}%"></div></div>
      <span class="sub ${p?"bad-text":""}">${u} · ${hi(c)}</span>
    </div>`}).join("")}
      <div class="bal-row"><span>Verdure</span><span class="sub bal-wide">${i.verdure} pasti su ${n}</span></div>
      <div class="hint">Volte a settimana (Linee guida CREA per un adulto). Contano solo i pasti del menù con un piatto salvato (${s} su ${n}): i pranzi fuori non ci sono, quindi con le sole cene non si arriva a tutti i minimi. "Proponi la settimana" sceglie prima per l'equilibrio, poi con quello che hai in casa, poi per la varietà.</div>
    </section>`}function hc(t,e,a){const i=e>k()?e:k(),n=Xi(t,i,a);if(!n.length)return'<section class="card"><div class="card-head"><h2>Cosa manca</h2><button class="link" data-action="meal-check-close">Chiudi</button></div><div class="empty">Nei pasti da qui a domenica non ci sono piatti con ingredienti. Scrivi i piatti nel menù usando i nomi salvati in "I miei piatti".</div></section>';const s={missing:"non è in elenco",listed:"già da prendere",have:"risulta che ce l'hai"};return`
    <form class="card stack-sm attention" data-form="meal-to-shop" aria-labelledby="h-miss">
      <div class="card-head"><h2 id="h-miss">Cosa manca da ${r(I(i))} a ${r(I(a))}</h2><button class="link" type="button" data-action="meal-check-close">Chiudi</button></div>
      <div class="hint">Spunta quello da comprare. Le cose che "risulta che ce l'hai" controllale in dispensa: se sono finite, spuntale.</div>
      <div class="list">${n.map((o,l)=>`
        <label class="item check">
          <input type="checkbox" name="ing" value="${l}" ${o.state==="missing"?"checked":""} ${o.state==="listed"?"disabled":""}>
          <span class="text"><span>${r(o.name)}</span><span class="hint"> · per ${r(o.dishes.join(", "))}</span></span>
          <span class="tag ${o.state==="missing"?"warn":o.state==="listed"?"":"ent"}">${s[o.state]}</span>
        </label>`).join("")}</div>
      <button class="btn primary self-start" type="submit">${S("cart",16)}Metti nella spesa</button>
    </form>`}function bc(t){const e=t?Ji(t):[],a=t&&!Array.isArray(t.cats);return`<fieldset class="field plain cats-field"><legend>Cosa contiene (per l'equilibrio)</legend>
    <div class="row">${Object.entries(bt).map(([i,n])=>`<label class="check small"><input type="checkbox" name="cat" value="${i}" ${e.includes(i)?"checked":""}>${n.label}</label>`).join("")}</div>
    <div class="hint">${a?"Stimato dagli ingredienti: controlla e salva.":"Se lo lasci vuoto lo stimo dagli ingredienti."} Il formaggio grattugiato sopra non conta.</div>
  </fieldset>`}function fc(t,e){return`
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
      ${bc(t)}
      <label class="field">Quando lo mangi<select class="input" name="when">${rc.map(([a,i])=>`<option value="${a}" ${(t?t.when||"entrambi":"cena")===a?"selected":""}>${i}</option>`).join("")}</select></label>
      <label class="check small"><input type="checkbox" name="noauto" ${t&&t.auto===!1?"checked":""}>Non propormelo in automatico (es. Avanzi, Pizza fuori)</label>
      <button class="btn primary self-start" type="submit">${t?"Salva":"Aggiungi"}</button>
    </form>`}function $c(t,e){return`
    <form class="card stack-sm" data-form="preset-save" aria-labelledby="h-pform">
      <div class="card-head"><h2 id="h-pform">${e.id?"Modifica "+r(e.name):"Nuova settimana tipo"}</h2><button class="link" type="button" data-action="preset-cancel">Annulla</button></div>
      <input type="hidden" name="id" value="${e.id||""}">
      <label class="field">Nome<input class="input" id="preset-name" name="name" value="${r(e.name||"")}" placeholder="Settimana 1" required></label>
      <div class="hint">Piatti con il giorno fisso (lascia vuoto quello che non è fisso):</div>
      <div class="meal-grid compact">
        <div class="meal-head"><span></span><span>Pranzo</span><span>Cena</span></div>
        ${cc.map((a,i)=>`<div class="meal-row"><span class="meal-day">${a}</span>
          ${De.map(([n,s])=>`<div class="meal-cell"><label class="sr-only" for="p-${i}-${n}">${s} di ${a}</label><input class="input slim" id="p-${i}-${n}" name="d${i}-${n}" list="dish-names" value="${r(e.days?.[i]?.[n]||"")}" placeholder="—" autocomplete="off"></div>`).join("")}
        </div>`).join("")}
      </div>
      <label class="field">Piatti senza giorno fisso (uno per riga): vanno nelle sere libere
        <textarea class="input" name="pool" rows="4" placeholder="Pasta al pomodoro&#10;Pollo al forno">${r((e.pool||[]).join(`
`))}</textarea></label>
      <button class="btn primary self-start" type="submit">Salva</button>
    </form>`}function yc(t,e){const a=t.mealPresets,i=d.ui.presetEdit;return i?$c(t,i==="new"?{name:`Settimana ${a.length+1}`}:a.find(n=>n.id===i)||{}):`
    <section class="card stack-sm" aria-labelledby="h-presets">
      <div class="card-head"><h2 id="h-presets">Settimane tipo</h2><button class="link" data-action="preset-new">+ Nuova</button></div>
      ${a.length?`<div class="list">${a.map(n=>{const s=Object.values(n.days||{}).reduce((o,l)=>o+Object.keys(l).length,0);return`<div class="item"><div class="text"><div>${r(n.name)}${t.mealWeeks[e]===n.id?' <span class="tag ent">questa settimana</span>':""}</div>
          <div class="hint">${s} con giorno fisso · ${(n.pool||[]).length} senza giorno</div></div>
          <button class="icon-btn" data-action="preset-edit" data-id="${n.id}" aria-label="Modifica ${r(n.name)}">${S("edit",16)}</button>
          <button class="icon-btn" data-action="preset-del" data-id="${n.id}" aria-label="Elimina ${r(n.name)}">${S("trash",16)}</button></div>`}).join("")}</div>`:'<div class="empty">Ad esempio "Settimana 1" e "Settimana 2" da alternare: piatti con il giorno fisso e piatti da sistemare nelle sere libere.</div>'}
      <button class="btn small wrap self-start" data-action="preset-from-week">Salva questo menù come settimana tipo</button>
    </section>`}function wc(t,e){const a=Zs(t,e),i=!!t.settings.mealLunch;return`
    <div class="row meal-tools">
      <button class="btn small" data-action="meal-propose">Proponi la settimana</button>
      <button class="btn small" data-action="meal-copy">Copia la settimana scorsa</button>
      ${t.mealPresets.length?`<span class="row nowrap gap-sm"><label class="sr-only" for="preset-pick">Settimana tipo</label>
        <select class="input slim" id="preset-pick">${t.mealPresets.map(n=>`<option value="${n.id}" ${a&&a.id===n.id?"selected":""}>${r(n.name)}</option>`).join("")}</select>
        <button class="btn small" data-action="preset-apply">Applica</button></span>`:""}
      <button class="btn small danger" data-action="meal-clear">Svuota</button>
      <label class="check small push"><input type="checkbox" data-change="meal-lunch" ${i?"checked":""}>Proponi anche i pranzi</label>
    </div>
    <div class="hint">Riempie solo le caselle vuote da oggi in poi: quello che hai già scritto resta.</div>`}function kc(){const t=d.data,{mon:e,sun:a}=kt(),i=d.ui.mealWeek||0,n=d.ui.dishEdit?t.dishes.find(o=>o.id===d.ui.dishEdit):null,s=[...t.dishes].sort((o,l)=>o.name.localeCompare(l.name,"it"));return`
    ${W((i===0?"Questa settimana":i===1?"La prossima settimana":`Settimana del ${I(e)}`)+(t.mealPresets.find(o=>o.id===t.mealWeeks[e])?" · "+t.mealPresets.find(o=>o.id===t.mealWeeks[e]).name:""),"Pasti",`
      <button class="icon-btn" data-action="meal-week" data-n="-1" aria-label="Settimana precedente">${S("left")}</button>
      ${i?'<button class="btn" data-action="meal-week" data-n="0">Questa settimana</button>':""}
      <button class="icon-btn" data-action="meal-week" data-n="1" aria-label="Settimana successiva">${S("right")}</button>`)}
    ${d.ui.mealCheck?hc(t,e,a):""}
    <div class="split">
      <div class="grow-2 stack stack-lg">
      <section class="card" aria-labelledby="h-menu">
        <div class="card-head"><h2 id="h-menu">Menù</h2>${a>=k()?`<button class="btn small" data-action="meal-check">${S("cart",14)}Cosa manca per questa settimana</button>`:""}</div>
        ${a>=k()?wc(t,e):""}
        ${pc(t,e)}
        <div class="hint">Scrivi un piatto salvato (te li suggerisce mentre scrivi) oppure qualsiasi cosa: "fuori", "avanzi", "pizza".</div>
      </section>
      ${gc(t)}
      </div>
      <div class="grow-1 stack stack-lg">
        ${vc(t,e)}
        ${yc(t,e)}
        ${fc(n,d.ui.dishPrefill)}
        <section class="card" aria-labelledby="h-dishes">
          <div class="card-head"><h2 id="h-dishes">I miei piatti</h2><span class="sub">${s.length}</span></div>
          ${je(t).length?`<div class="row prep-fill"><button class="btn small" data-action="prep-fill">Completa le preparazioni (${je(t).length})</button><span class="hint">Passaggi, tempi e "da fare prima" proposti: poi li modifichi come vuoi.</span></div>`:""}
          ${s.length?`<div class="list">${s.map(o=>`
            <div class="item"><div class="text"><div>${r(o.name)} ${o.when==="pranzo"?'<span class="tag">pranzo</span>':o.when==="cena"?'<span class="tag">cena</span>':""}${o.auto===!1?' <span class="tag">non proposto</span>':""}</div><div class="row gap-sm">${Ji(o).map(l=>`<span class="tag ${Array.isArray(o.cats)?"inv":""}">${bt[l].label}</span>`).join("")||'<span class="hint">nessun gruppo</span>'}${Array.isArray(o.cats)?"":' <span class="hint">(stimato)</span>'}</div><div class="hint">${r(o.ingredients.join(", ")||"nessun ingrediente")}</div><div class="hint">${Array.isArray(o.steps)&&o.steps.length?`${o.steps.length} ${o.steps.length===1?"passaggio":"passaggi"}`:"nessuna preparazione"}${o.minutes?` · ${o.minutes} min`:""}${o.ahead?" · da fare prima":""}</div></div>
              <button class="icon-btn" data-action="dish-edit" data-id="${o.id}" aria-label="Modifica ${r(o.name)}">${S("edit",16)}</button>
              <button class="icon-btn" data-action="dish-del" data-id="${o.id}" aria-label="Elimina ${r(o.name)}">${S("trash",16)}</button></div>`).join("")}</div>`:'<div class="empty">Salva i piatti che cucini spesso con i loro ingredienti.</div>'}
        </section>
      </div>
    </div>`}L("pasti",{render:kc,changes:{"prep-step"(t){const e=t.dataset.key;d.ui.prepDone=Object.assign({},d.ui.prepDone,{[e]:t.checked})},"meal-lunch"(t){f(e=>{e.settings.mealLunch=t.checked})},"meal-set"(t){const e=t.dataset.date,a=t.dataset.slot,i=t.value.trim(),n=i&&ve(d.data,i),s=d.data;{const o=Object.assign({},s.mealPlan[e]);i?o[a]=n?n.name:i:delete o[a],delete o.updatedAt,Object.keys(o).length?s.mealPlan[e]=Object.assign(o,{updatedAt:Ys()}):delete s.mealPlan[e]}n&&t.value!==n.name&&(t.value=n.name),pa()}},actions:{"meal-week"(t){const e=Number(t.dataset.n);d.ui.mealWeek=e===0?0:(d.ui.mealWeek||0)+e,d.ui.mealCheck=!1,b("pasti")},"prep-fill"(){const t=je(d.data).length;!t||!window.confirm(`Aggiungere la preparazione proposta a ${t} ${t===1?"piatto":"piatti"}? Tocca solo quelli che non ne hanno.`)||(f(e=>{for(const a of je(e)){const i=Zn(a);a.steps=[...i.steps],a.minutes||(a.minutes=i.minutes),!a.ahead&&i.ahead&&(a.ahead=i.ahead),O(a)}}),b("pasti",{},`Preparazione aggiunta a ${t} ${t===1?"piatto":"piatti"}`))},"prep-day"(t){d.ui.prepDay=Number(t.dataset.n)===1?1:0,b("pasti")},"meal-check"(){d.ui.mealCheck=!0,b("pasti")},"meal-propose"(){const{mon:t}=kt();if(!d.data.dishes.some(a=>a.auto!==!1)){b("pasti",{},'Salva prima qualche piatto in "I miei piatti"');return}let e=0;f(a=>{e=Qs(a,t,{lunch:!!a.settings.mealLunch})}),b("pasti",{},e?`Proposti ${e} pasti: cambia quello che non ti va`:"Non ci sono caselle libere da riempire")},"meal-copy"(){const{mon:t}=kt();let e=0;f(a=>{e=Ks(a,t)}),b("pasti",{},e?`Copiati ${e} pasti dalla settimana scorsa`:"Niente da copiare (settimana scorsa vuota o caselle già piene)")},"preset-apply"(){const{mon:t}=kt(),e=document.getElementById("preset-pick")?.value,a=d.data.mealPresets.find(n=>n.id===e);if(!a)return;let i=0;f(n=>{i=Hs(n,t,a,{lunch:!!n.settings.mealLunch})}),b("pasti",{},`${a.name}: ${i} pasti messi nel menù`)},"meal-clear"(){if(!window.confirm("Svuotare il menù da oggi a domenica?"))return;const{mon:t}=kt();f(e=>Ws(e,t)),b("pasti",{},"Menù svuotato")},"preset-new"(){d.ui.presetEdit="new",b("pasti"),P("#preset-name")},"preset-edit"(t){d.ui.presetEdit=t.dataset.id,b("pasti"),P("#preset-name")},"preset-cancel"(){d.ui.presetEdit=null,b("pasti")},"preset-del"(t){const e=d.data.mealPresets.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare «${e.name}»? Il menù già fatto non viene toccato.`)||f(a=>{a.mealPresets=a.mealPresets.filter(i=>i.id!==e.id),K(a,e.id)})},"preset-from-week"(){const{mon:t}=kt(),e=_s(d.data,t,`Settimana ${d.data.mealPresets.length+1}`);if(!Object.keys(e.days).length){b("pasti",{},"Il menù di questa settimana è vuoto");return}f(a=>{a.mealPresets.push(e),a.mealWeeks[t]=e.id}),d.ui.presetEdit=e.id,b("pasti",{},`Salvata come «${e.name}»: dagli un nome e sposta i piatti "senza giorno" se vuoi`),P("#preset-name")},"targets-edit"(){d.ui.targetsEdit=!0,b("pasti")},"targets-cancel"(){d.ui.targetsEdit=!1,b("pasti")},"targets-reset"(){f(t=>{delete t.settings.mealTargets}),d.ui.targetsEdit=!1,b("pasti",{},"Obiettivi riportati alle linee guida")},"meal-check-close"(){d.ui.mealCheck=!1,b("pasti")},"dish-from"(t){d.ui.dishEdit=null,d.ui.dishPrefill=t.dataset.name,b("pasti"),P("textarea[name=ingredients]")},"dish-edit"(t){d.ui.dishEdit=t.dataset.id,d.ui.dishPrefill="",b("pasti"),P("#dish-name")},"dish-cancel"(){d.ui.dishEdit=null,b("pasti")},"dish-del"(t){const e=d.data.dishes.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare il piatto «${e.name}»? Il menù non viene toccato.`)||f(a=>{a.dishes=a.dishes.filter(i=>i.id!==e.id),K(a,e.id)})}},forms:{"preset-save"(t){const e=String(t.get("name")||"").trim();if(!e)return D("Dai un nome alla settimana tipo."),A();const a=o=>{const l=String(o||"").trim(),c=l&&ve(d.data,l);return c?c.name:l},i={};for(let o=0;o<7;o++){const l={};for(const[c]of De){const u=a(t.get(`d${o}-${c}`));u&&(l[c]=u)}Object.keys(l).length&&(i[o]=l)}const n=mi(t.get("pool")).map(a),s=t.get("id");f(o=>{if(s){const l=o.mealPresets.find(c=>c.id===s);Object.assign(l,{name:e,days:i,pool:n}),O(l)}else o.mealPresets.push(Gs({name:e,days:i,pool:n}))}),d.ui.presetEdit=null,b("pasti",{},`${e} salvata`)},"meal-targets-save"(t){const e=i=>{const n=String(i??"").trim();if(!n)return null;const s=Math.round(Number(n));return Number.isFinite(s)&&s>=0?s:null},a={};for(const i of ee){const n=e(t.get(`min-${i}`)),s=e(t.get(`max-${i}`));if(n!=null&&s!=null&&n>s)return D(`${bt[i].label}: il minimo è più alto del massimo.`),A();a[i]={min:n,max:s}}f(i=>{i.settings.mealTargets=a}),d.ui.targetsEdit=!1,b("pasti",{},"Obiettivi salvati")},"dish-save"(t){const e=String(t.get("name")||"").trim();if(!e)return D("Scrivi il nome del piatto."),A();const a=t.get("id"),i=ve(d.data,e);if(i&&i.id!==a)return D(`Hai già un piatto chiamato «${i.name}».`),A();const n=Math.round(Number(String(t.get("minutes")||"").trim())),s={name:e,ingredients:mi(t.get("ingredients")),note:String(t.get("note")||"").trim(),when:t.get("when")||"entrambi",auto:t.get("noauto")!=="on",steps:dc(t.get("steps")),ahead:String(t.get("ahead")||"").trim(),minutes:Number.isFinite(n)&&n>0?n:null},o=t.getAll("cat").filter(l=>l in bt);o.length&&(s.cats=o),f(l=>{if(a){const c=l.dishes.find(u=>u.id===a);s.cats||delete c.cats,Object.assign(c,s),O(c)}else l.dishes.push(Us(s))}),d.ui.dishEdit=null,d.ui.dishPrefill="",b("pasti",{},a?"Piatto aggiornato":`${e} salvato`)},"meal-to-shop"(t){const{mon:e,sun:a}=kt(),i=e>k()?e:k(),n=Xi(d.data,i,a),s=t.getAll("ing").map(Number).map(o=>n[o]).filter(Boolean);if(!s.length)return q("Non hai spuntato niente"),A();f(o=>{for(const l of s)l.item?(l.item.need=!0,l.item.boughtAt=null,O(l.item)):o.shopping.push(Rt({name:l.name,need:!0}))}),d.ui.mealCheck=!1,b("pasti",{},`${s.length} ${s.length===1?"cosa messa":"cose messe"} nella spesa`)}}});const bi={pag:"Pagamenti",ent:"Entrate",inv:"Investimenti",gir:"Giroconti",obj:"Obiettivi",scad:"Scadenze",comp:"Compleanni",att:"Attività",fac:"Faccende",hab:"Abitudini"},Sc={out:"pag",in:"ent",pac:"inv",transfer:"gir",goal:"obj"};function fi(t,e,a){const i=[];for(const s of Ne()?[]:t.recurring)if(!s.paused)for(const o of za(s,e,a)){const l=s.done?.[o];i.push({date:o,cls:Sc[s.type]||"pag",text:s.name,amount:le(s),rec:s,done:l===!0,skipped:l==="skip"})}for(const s of t.todos)s.due&&s.due>=e&&s.due<=a&&i.push({date:s.due,cls:"att",text:s.text,todo:s,done:s.done});for(const s of t.deadlines)!s.archived&&s.due>=e&&s.due<=a&&i.push({date:s.due,cls:"scad",text:"Scade: "+s.name,amount:s.cost?h(s.cost):""});for(const s of Pe(t,e,a))i.push({date:s.date,cls:"comp",text:"Compleanno di "+s.contact.name+(s.age?` (${s.age})`:""),contact:s.contact});const n=k();for(const s of t.chores){s.lastDone&&s.lastDone>=e&&s.lastDone<=a&&i.push({date:s.lastDone,cls:"fac",text:s.name,chore:s,done:!0});const o=Math.max(1,Number(s.every)||7);let l=Jt(s);const c=l<n;c&&(l=n),l<e&&(l=M(l,Math.ceil(Me(l,e)/o)*o));for(let u=l;u<=a;u=M(u,o))i.push({date:u,cls:"fac",text:s.name,chore:s,late:c&&u===n})}return i}function $i(t,e){return t.habits.filter(a=>ht(t,a,e)||!a.archived&&(a.createdAt||"").slice(0,10)<=e)}const xc=t=>t>=7?"ogni giorno":t===1?"1 volta a settimana":`${t} volte a settimana`;function Ac(){const t=d.data,e=d.ui.calMonth||ut(new Date),a=d.ui.calSel||k(),i=d.ui.calOff||{},[n,s]=e.split("-").map(Number),o=Js(e),l=(new Date(n,s-1,1).getDay()+6)%7,u=fi(t,`${e}-01`,`${e}-${String(o).padStart(2,"0")}`).filter(x=>!i[x.cls]),p=k(),g=[];for(let x=0;x<l;x++)g.push(null);for(let x=1;x<=o;x++)g.push(`${e}-${String(x).padStart(2,"0")}`);for(;g.length%7;)g.push(null);const m=x=>{if(!x)return'<div class="cal-cell empty" aria-hidden="true"></div>';const _=u.filter(Z=>Z.date===x),C=Number(x.slice(8)),T=!i.hab&&x<=p?$i(t,x):[],B=T.filter(Z=>ht(t,Z,x)).length,$t=T.length?`<span class="badge hab ${B===T.length?"done":""}">${B===T.length?"✓ ":""}Abitudini ${B}/${T.length}</span>`:"";return`
      <button class="cal-cell ${x===a?"sel":""}" data-action="cal-pick" data-date="${x}" aria-pressed="${x===a}" aria-label="${r(Yt(x))}${_.length?", "+_.length+" eventi":""}${T.length?`, abitudini ${B} su ${T.length}`:""}">
        <span class="cal-num ${x===p?"today":""}">${C}</span>
        ${_.slice(0,3).map(Z=>`<span class="badge ${Z.cls} ${Z.done||Z.skipped?"done":""}">${Z.done?"✓ ":""}${r(Z.text)}</span>`).join("")}
        ${_.length>3?`<span class="hint">+${_.length-3} altri</span>`:""}
        ${$t}
      </button>`},w=fi(t,a,a).filter(x=>!i[x.cls]).map(x=>x.rec&&!x.done&&!x.skipped&&x.date<=p?Na({r:x.rec,date:x.date}):x.todo?ie(x.todo):x.chore&&!x.done&&x.date===p?Le(x.chore,{tools:!1}):x.chore?`<div class="item ${x.done?"done":""}"><span class="dot-cat fac" aria-hidden="true"></span><div class="text"><div>${r(x.text)}</div><div class="hint">Faccenda · ${x.done?"fatta":"prevista"}</div></div></div>`:`<div class="item"><span class="dot-cat ${x.cls}" aria-hidden="true"></span><div class="text"><div>${r(x.text)}</div><div class="hint">${r(bi[x.cls])}${x.done?" · registrato":x.skipped?" · saltato":""}</div></div>${x.amount?`<span class="money">${x.amount}</span>`:""}</div>`).join(""),z=i.hab?[]:$i(t,a),N=st(a),v=z.map(x=>{const _=ht(t,x,a);return`
      <div class="item ${_?"done":""}">
        <button class="box ${_?"on":""}" data-action="hab-toggle" data-id="${x.id}" data-date="${a}" aria-pressed="${_}" aria-label="${_?"Togli la spunta":"Fatta"}: ${r(x.name)}, ${r(Yt(a))}">${_?S("check",14,3):""}</button>
        <div class="text"><div>${r(x.name)}</div><div class="hint">${r(xc(x.perWeek))} · settimana ${Ct(t,x,N)}/${x.perWeek}</div></div>
      </div>`}).join(""),$=i.hab||!t.habits.some(x=>!x.archived)?"":`
        <section class="card" aria-labelledby="h-calhab">
          <div class="card-head"><h2 id="h-calhab" class="h3">Abitudini</h2>${z.length&&a<=p?`<span class="sub">${z.filter(x=>ht(t,x,a)).length} di ${z.length}</span>`:""}</div>
          ${a>p?'<div class="hint">Le abitudini si spuntano dal giorno stesso in poi.</div>':v?`<div class="list">${v}</div>`:'<div class="empty">Nessuna abitudine in quel giorno.</div>'}
        </section>`,E=d.ui.calAddKind||"att";return`
    ${W("Calendario",X(e),`
      <button class="icon-btn" data-action="cal-month" data-n="-1" aria-label="Mese precedente">${S("left")}</button>
      <button class="btn" data-action="cal-month" data-n="0">Oggi</button>
      <button class="icon-btn" data-action="cal-month" data-n="1" aria-label="Mese successivo">${S("right")}</button>`)}
    <div class="row" role="group" aria-label="Filtri">
      ${Object.entries(bi).map(([x,_])=>`<button class="chip ${i[x]?"off":""}" data-action="cal-filter" data-k="${x}" aria-pressed="${!i[x]}"><span class="dot-cat ${x}" aria-hidden="true"></span>${_}</button>`).join("")}
    </div>
    <div class="split">
      <section class="grow-3 cal-wrap" aria-label="Mese">
        <div class="cal">
          ${["Lun","Mar","Mer","Gio","Ven","Sab","Dom"].map(x=>`<div class="cal-head" aria-hidden="true">${x}</div>`).join("")}
          ${g.map(m).join("")}
        </div>
      </section>
      <aside class="grow-1 stack">
        <section class="card">
          <h2>${r(Yt(a))}</h2>
          ${w?`<div class="list">${w}</div>`:'<div class="empty">Niente in programma.</div>'}
        </section>
        ${$}
        <form class="card stack" data-form="cal-add">
          <h2 class="h3">Aggiungi a questo giorno</h2>
          <input type="hidden" name="date" value="${a}">
          <div class="pills small">
            ${[["att","Attività"],["comp","Compleanno"],["pag","Pagamento"]].map(([x,_])=>`<label class="pill"><input type="radio" name="kind" value="${x}" data-change="cal-kind" ${E===x?"checked":""}><span>${_}</span></label>`).join("")}
          </div>
          <label class="field">${E==="comp"?"Nome":"Cosa"}<input class="input" name="text" placeholder="${E==="comp"?"Luca":E==="pag"?"Bollo auto":"Ritirare il pacco"}" required></label>
          ${E==="pag"?`
            <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="0,00" required></label>
            <label class="field">Conto<select class="input" name="accountId">${at()}</select></label>
            <label class="field">Categoria<select class="input" name="category">${Ut("out","Altro")}</select></label>`:""}
          ${E==="comp"?'<label class="field">Anno di nascita (facoltativo)<input class="input" name="year" inputmode="numeric" maxlength="4" placeholder="1990"></label><div class="hint">Si ripete ogni anno e finisce anche in Rubrica.</div>':""}
          <button class="btn primary" type="submit">Aggiungi</button>
        </form>
      </aside>
    </div>`}L("calendario",{render:Ac,actions:{"cal-month"(t){const e=Number(t.dataset.n),a=d.ui.calMonth||ut(new Date);d.ui.calMonth=e===0?ut(new Date):tn(a,e),d.ui.calSel=e===0?k():`${d.ui.calMonth}-01`,b("calendario")},"cal-pick"(t){d.ui.calSel=t.dataset.date,b("calendario")},"cal-filter"(t){d.ui.calOff=Object.assign({},d.ui.calOff,{[t.dataset.k]:!(d.ui.calOff||{})[t.dataset.k]}),b("calendario")}},changes:{"cal-kind"(t){d.ui.calAddKind=t.value,b("calendario")}},forms:{"cal-add"(t,e){const a=t.get("kind"),i=String(t.get("text")||"").trim(),n=t.get("date");if(!i)return;if(a==="att")return f(o=>o.todos.push(ne({text:i,due:n}))),b("calendario",{},"Attività aggiunta");if(a==="comp"){const o=String(t.get("year")||"").trim();if(o&&!/^\d{4}$/.test(o)){et(e,"year","Scrivi l'anno con 4 cifre");return}const l=(o||"")+(o?n.slice(4):n.slice(5));return f(c=>{const u=c.contacts.find(p=>p.name.toLowerCase()===i.toLowerCase());u?u.birthday=l:c.contacts.push({id:G(),name:i,phone:"",email:"",note:"",birthday:l})}),b("calendario",{},"Compleanno aggiunto")}const s=U(t.get("amount"));if(!(s>0)){et(e,"amount","Inserisci un importo valido");return}f(o=>o.recurring.push({id:G(),name:i,type:"out",amount:s,freq:"once",date:n,day:Number(n.slice(8)),accountId:t.get("accountId")||Y(o)?.id,category:t.get("category")||"Altro",sub:!1,paused:!1,done:{},history:[],startDate:n})),b("calendario",{},"Pagamento aggiunto: comparirà da confermare quando arriva il giorno")}}});function Ic(){const t=d.data,e=d.month,a=d.ui.finAccount||"",i=ke(t,e,a||void 0),n=Fi(t),s=e===ut(new Date),o=ft(t),l=en(t),c=Zi(t,30),u=p=>{const g=ke(t,e,p.id).tx.reduce((m,y)=>m+(y.type==="in"?y.amount:-y.amount),0);return`
      <button class="acc-card" data-action="edit-account" data-id="${p.id}" style="--acc:${r(p.color)}" aria-label="Modifica ${r(p.name)}">
        <div class="row nowrap"><span class="acc-dot" aria-hidden="true"></span><strong>${r(p.name)}</strong><span class="hint push">${r(p.bank||an[p.type]||"")}</span></div>
        <div class="acc-balance">${h(se(t,p))}</div>
        ${gn(t,p)}
        <div class="hint">${r(X(e).split(" ")[0])}: ${ct(Math.round(g*100)/100)}${p.main?" · principale":""}${p.last4?" · •••• "+r(p.last4):""}</div>
      </button>`};return`
    ${W("Finanze",X(e),`
      <button class="icon-btn" data-action="fin-month" data-n="-1" aria-label="Mese precedente">${S("left")}</button>
      ${s?"":'<button class="btn" data-action="fin-month" data-n="0">Mese corrente</button>'}
      <button class="icon-btn" data-action="fin-month" data-n="1" aria-label="Mese successivo">${S("right")}</button>
      <button class="btn" data-action="nav" data-id="importa">Importa estratto conto</button>
      <button class="btn primary" data-action="new-account">Nuovo conto</button>`)}

    <section class="acc-grid" aria-label="Conti">
      ${o.map(u).join("")}
      <button class="acc-card add" data-action="new-account">${S("plus")} Aggiungi un conto</button>
    </section>

    <section class="metrics" aria-label="Riepilogo">
      ${j("Patrimonio totale",h(to(t)),"",l.priced?"conti + investimenti":"somma dei conti")}
      ${j("Entrate",h(i.inc),"good")}
      ${j("Uscite",h(i.out),"","esclusi giroconti e investimenti")}
      ${j("Messo da parte",h(i.transfersOut),"accent","netto dal conto principale ad altri conti")}
      ${j("Spese fisse al mese",h(n.fixed),"",[n.pac?"+ PAC "+h(n.pac):"",n.goals?"+ obiettivi "+h(n.goals):""].filter(Boolean).join(" · "))}
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
        <select class="input" id="tx-to" name="toAccountId" data-transfer hidden>${at(o.find(p=>!p.main)?.id)}</select>
        <label class="sr-only" for="tx-cat">Categoria</label>
        <select class="input" id="tx-cat" name="category" data-cats>${Ut("out")}</select>
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
          <select class="input slim" id="fin-acc" data-change="fin-account"><option value="">Tutti i conti</option>${o.map(p=>`<option value="${p.id}" ${p.id===a?"selected":""}>${r(p.name)}</option>`).join("")}</select>
        </div>
        ${d.ui.budgetEdit?Cc(t):`<div class="stack-sm">${rn(i.cats,i.out,t.settings.catBudgets)}</div>
        <button class="link" data-action="budget-edit">${Object.keys(t.settings.catBudgets||{}).length?"Modifica i limiti":"Imposta un limite mensile per categoria"}</button>`}
      </section>

      <section class="card">
        <div class="card-head"><h2>Prossimi 30 giorni</h2><button class="link" data-action="nav" data-id="programmati">Programmati</button></div>
        ${c.length?`<div class="list">${c.slice(0,10).map(p=>`
          <div class="item"><div class="when">${r(I(p.date))}</div>${ja(p.r.type)}<div class="text">${r(p.r.name)}</div><span class="money ${p.r.type==="in"?"in":""}">${le(p.r)}</span></div>`).join("")}</div>`:'<div class="empty">Nessun programmato. Aggiungili da Programmati o importando un estratto conto.</div>'}
        ${n.income?`<div class="note-box">Dopo spese fisse e PAC, dalle entrate fisse restano <strong>${h(n.left)}</strong> al mese per le spese variabili.</div>`:""}
      </section>
    </div>

    <section class="card">
      <div class="card-head"><h2>Movimenti</h2><span class="sub">${i.tx.length} nel mese</span></div>
      ${i.tx.length?`<div class="list">${i.tx.slice(0,d.ui.finShowAll?1e3:25).map(p=>dn(p,{showAccount:!a&&o.length>1,del:!0})).join("")}</div>
        ${i.tx.length>25&&!d.ui.finShowAll?`<button class="link" data-action="fin-all">Mostra tutti (${i.tx.length})</button>`:""}`:'<div class="empty">Nessun movimento in questo mese.</div>'}
    </section>`}function Cc(t){const e=t.settings.catBudgets||{};return`
    <form data-form="budget-save" class="stack-sm">
      <div class="hint">Limite di spesa al mese per categoria. Lascia vuoto per non averne. La barra diventa gialla all'80% e rossa oltre il limite.</div>
      <div class="form-grid two">${t.categories.out.map(a=>`<label class="field">${r(a)}<input class="input slim" name="b:${r(a)}" inputmode="decimal" value="${e[a]?r(String(e[a]).replace(".",",")):""}" placeholder="—"></label>`).join("")}</div>
      <div class="row"><button class="btn primary" type="submit">Salva i limiti</button><button class="btn" type="button" data-action="budget-cancel">Annulla</button></div>
    </form>`}L("finanze",{render:Ic,actions:{"fin-month"(t){const e=Number(t.dataset.n);d.month=e===0?ut(new Date):tn(d.month,e),d.ui.finShowAll=!1,b("finanze")},"fin-all"(){d.ui.finShowAll=!0,b("finanze")},"budget-edit"(){d.ui.budgetEdit=!0,b("finanze")},"budget-cancel"(){d.ui.budgetEdit=!1,b("finanze")},"new-account"(){b("conto",{id:null})},"edit-account"(t){b("conto",{id:t.dataset.id})}},changes:{"tx-type"(t){const e=t.form,a=t.value==="transfer";e.querySelector("[data-transfer]").hidden=!a;const i=e.querySelector("select[data-cats]");i.hidden=a,a||(i.innerHTML=Ut(t.value))},"fin-account"(t){d.ui.finAccount=t.value,b("finanze")}},forms:{"budget-save"(t,e){const a={};for(const[i,n]of t.entries()){if(!i.startsWith("b:")||!String(n).trim())continue;const s=U(n);if(!(s>0)){et(e,i,"Scrivi un importo, es. 120");return}a[i.slice(2)]=s}d.ui.budgetEdit=!1,f(i=>{i.settings.catBudgets=a}),b("finanze",{},"Limiti salvati")},"add-tx"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 12,50");return}const i=t.get("type"),n=t.get("accountId")||Y(d.data)?.id,s=t.get("date")||k(),o=String(t.get("note")||"").trim(),l=new Date().toISOString();if(i==="transfer"){const c=t.get("toAccountId");if(!c||c===n){et(e,"toAccountId","Scegli un conto diverso");return}const u=G();q("Giroconto registrato"),f(p=>{p.transactions.push({id:G(),accountId:n,date:s,type:"out",amount:a,category:"Giroconto",note:o||"Giroconto",transfer:!0,invest:!1,pairId:u,createdAt:l}),p.transactions.push({id:G(),accountId:c,date:s,type:"in",amount:a,category:"Giroconto",note:o||"Giroconto",transfer:!0,invest:!1,pairId:u,createdAt:l})});return}q("Movimento registrato"),f(c=>c.transactions.push({id:G(),accountId:n,date:s,type:i,amount:a,category:String(t.get("category")||"Altro"),note:o,transfer:!1,invest:!1,createdAt:l}))}}});function Ec(){const t=d.data,e=d.params.id?t.accounts.find(s=>s.id===d.params.id):null,a=e||Da({type:"deposito",color:he[t.accounts.length%he.length],main:t.accounts.length===0}),i=e?se(t,e):0,n=e?t.transactions.filter(s=>s.accountId===e.id).length:0;return`
    ${W("Finanze",e?"Modifica conto":"Nuovo conto")}
    <button class="link" data-action="nav" data-id="finanze">← Torna a Finanze</button>
    <form data-form="save-account" class="card stack-lg">
      <input type="hidden" name="id" value="${e?e.id:""}">
      <fieldset class="plain">
        <legend class="label">Tipo di conto</legend>
        <div class="pills">
          ${Object.entries(an).map(([s,o])=>`<label class="pill"><input type="radio" name="type" value="${s}" ${a.type===s?"checked":""}><span>${r(o)}</span></label>`).join("")}
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
          ${he.map((s,o)=>`<label class="swatch" style="--c:${s}"><input type="radio" name="color" value="${s}" ${a.color===s?"checked":""}><span class="sr-only">Colore ${o+1}</span></label>`).join("")}
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
    </form>`}L("conto",{render:Ec,forms:{"save-account"(t,e){const a=String(t.get("name")||"").trim();if(!a)return D("Dai un nome al conto."),A();const i=String(t.get("balance")||"").trim(),n=i?U(i):0;if(!Number.isFinite(n))return D("Il saldo deve essere un numero, es. 1.250,00"),A();const s=String(t.get("last4")||"").trim();if(s&&!/^\d{4}$/.test(s))return D("Le ultime cifre dell'IBAN devono essere 4 numeri."),A();const o=t.get("id"),l={name:a,bank:String(t.get("bank")||"").trim(),type:t.get("type")||"corrente",color:t.get("color")||he[0],last4:s,main:t.get("main")==="on",includeTotal:t.get("includeTotal")==="on",investments:t.get("investments")==="on"};f(c=>{let u;if(o){u=c.accounts.find(g=>g.id===o);const p=se(c,u);Object.assign(u,l),i&&Math.abs(p-n)>.004&&(u.anchorBalance=n,u.anchorDate=k(),u.anchorAt=new Date().toISOString())}else u=Da(Object.assign(l,{anchorBalance:n,anchorDate:k(),anchorAt:new Date().toISOString()})),c.accounts.push(u);if(u.main)for(const p of c.accounts)p.id!==u.id&&(p.main=!1);c.accounts.some(p=>p.main&&!p.archived)||(u.main=!0)}),b("finanze",{},o?"Conto aggiornato":`Conto «${a}» creato`)}},actions:{"archive-account"(t){const e=d.data,a=e.accounts.find(n=>n.id===t.dataset.id);if(!a)return;const i=e.transactions.some(n=>n.accountId===a.id)||e.recurring.some(n=>n.accountId===a.id);window.confirm(i?`Archiviare «${a.name}»? I movimenti restano nelle statistiche, il conto sparisce dalle liste.`:`Eliminare «${a.name}»?`)&&(f(n=>{if(i?a.archived=!0:n.accounts=n.accounts.filter(s=>s.id!==a.id),a.main){a.main=!1;const s=n.accounts.find(o=>!o.archived);s&&(s.main=!0)}}),b("finanze",{},i?"Conto archiviato":"Conto eliminato"))}}});const zc=[6,12,24],pe=t=>{const[e,a]=t.split("-").map(Number);return new Date(e,a-1,15).toLocaleDateString("it-IT",{month:"short"}).replace(".","")+(a===1?" "+String(e).slice(2):"")};function Dc(){const t=d.data,e=d.ui.trendRange||12,a=eo(t,e),i=a.filter(v=>!v.partial&&(v.inc||v.out)),n=i.length?H(i.reduce((v,$)=>v+$.saved,0)/i.length):0,s=i.reduce((v,$)=>v+$.inc,0),o=s>0?Math.round(i.reduce((v,$)=>v+$.saved,0)/s*100):null,l=i.length?i.reduce((v,$)=>$.saved>v.saved?$:v):null,c=a.find(v=>v.wealth!==0)||a[0],u=a[a.length-1],p=H(u.wealth-c.wealth),g=a.slice(-7),m=g.filter(v=>!v.partial&&(v.inc||v.out)),y=new Map;for(const v of g)for(const[$,E]of v.cats)y.set($,(y.get($)||0)+E);const w=[...y.entries()].sort((v,$)=>$[1]-v[1]).slice(0,10).map(([v])=>v),z=t.settings.catBudgets||{},N=(v,$)=>(v.cats.find(E=>E[0]===$)||[$,0])[1];return`
    ${W("Finanze","Andamento",zc.map(v=>`<button class="chip ${v===e?"":"off"}" data-action="trend-range" data-n="${v}" aria-pressed="${v===e}">${v} mesi</button>`).join(""))}
    <section class="metrics">
      ${j("Patrimonio oggi",h(u.wealth),"",`${p>=0?"+":"−"} ${h(Math.abs(p))} in ${e} mesi`)}
      ${j("Risparmio medio al mese",i.length?ct(n):"—",n>=0?"good":"bad","entrate − uscite, mesi completi")}
      ${j("Quota risparmiata",o==null?"—":o+"%","","delle entrate")}
      ${j("Mese migliore",l?r(X(l.key)):"—","",l?ct(l.saved):"")}
    </section>

    <section class="card">
      <div class="card-head"><h2>Patrimonio a fine mese</h2><span class="hint">conti + investimenti al prezzo pagato</span></div>
      ${Fe(a.map(v=>({label:pe(v.key),value:v.wealth,title:X(v.key)+(v.partial?" (in corso)":""),valueText:h(v.wealth),sub:`conti ${h(v.cash)} · investiti ${h(v.invested)}`})),{id:"wealth"})}
      <details class="table-toggle"><summary>Mostra i numeri</summary>
        <div class="table-wrap"><table class="tx small"><thead><tr><th>Mese</th><th class="r">Patrimonio</th><th class="r">Entrate</th><th class="r">Uscite</th><th class="r">Risparmio</th></tr></thead>
        <tbody>${[...a].reverse().map(v=>`<tr><td>${r(X(v.key))}${v.partial?' <span class="hint">in corso</span>':""}</td><td class="r">${h(v.wealth)}</td><td class="r">${h(v.inc)}</td><td class="r">${h(v.out)}</td><td class="r">${ct(v.saved)}</td></tr>`).join("")}</tbody></table></div>
      </details>
    </section>

    <section class="card">
      <div class="card-head"><h2>Risparmio di ogni mese</h2><span class="hint">entrate − uscite, esclusi giroconti, investimenti e prestiti</span></div>
      ${Pa(a.map(v=>({label:pe(v.key),value:v.saved,partial:v.partial,title:X(v.key)+(v.partial?" (in corso)":""),valueText:ct(v.saved),sub:`entrate ${h(v.inc)} · uscite ${h(v.out)}`})),{id:"saved"})}
    </section>

    <section class="card">
      <div class="card-head"><h2>Spese per categoria</h2><span class="hint">il mese in corso a confronto con la media dei mesi prima</span></div>
      ${w.length?`<div class="table-wrap"><table class="tx small">
        <thead><tr><th>Categoria</th>${m.map(v=>`<th class="r">${r(pe(v.key))}</th>`).join("")}<th class="r">Media</th><th class="r">${r(pe(u.key))}</th><th class="r">Limite</th></tr></thead>
        <tbody>${w.map(v=>{const $=m.length?H(m.reduce((C,T)=>C+N(T,v),0)/m.length):0,E=N(u,v),x=z[v],_=x?E>x:$>0&&E>$*1.25;return`<tr><td>${r(v)}</td>${m.map(C=>`<td class="r">${N(C,v)?h(N(C,v)):'<span class="hint">—</span>'}</td>`).join("")}
            <td class="r">${h($)}</td><td class="r">${_?`<span class="bad-text strong">${h(E)}</span>`:h(E)}</td><td class="r">${x?h(x):'<span class="hint">—</span>'}</td></tr>`}).join("")}</tbody></table></div>`:'<div class="empty">Nessuna spesa registrata in questo periodo.</div>'}
      <div class="hint">In rosso: oltre il limite, oppure (se non hai un limite) più di un quarto sopra la tua media. I limiti si impostano in Finanze → Spese per categoria.</div>
    </section>`}L("andamento",{render:Dc,afterRender:Be,actions:{"trend-range"(t){d.ui.trendRange=Number(t.dataset.n),b("andamento")}}});const yi=t=>Object.entries(nn).map(([e,a])=>`<option value="${e}" ${e===t?"selected":""}>${r(a.label)}</option>`).join(""),jc=t=>/veterin/i.test(`${t.note} ${t.description||""}`)?"veterinarie":"sanitarie",Nc={sanitarie:"Salute",veterinarie:"Salute",trasporti:"Trasporti",assicurazioni:"Altro",universita:"Altro",previdenza:"Altro",altro:"Altro"};function Oc(){const t=d.data,e=Number(k().slice(0,4)),a=d.ui.dedYear||e,i=ao(t,a),n=io(t,a),s=i.reduce((c,u)=>c+u.total,0),o=i.reduce((c,u)=>c+(u.estimate||0),0),l=t.deadlines.some(c=>!c.archived&&/730|dichiarazione dei redditi/i.test(c.name));return`
    ${W("Finanze","Detrazioni",[e-2,e-1,e].map(c=>`<button class="chip ${c===a?"":"off"}" data-action="ded-year" data-y="${c}" aria-pressed="${c===a}">${c}</button>`).join(""))}
    <p class="lead">Segna durante l'anno le spese che potrai detrarre: il 730 del ${a+1} riguarda le spese del ${a}. Le cifre sono una <strong>stima</strong> con le regole generali (19%, franchigie e limiti); per i conti veri fanno fede il precompilato dell'Agenzia delle Entrate o il CAF.</p>
    <section class="metrics">
      ${j(`Spese segnate nel ${a}`,h(s))}
      ${j("Detrazione stimata",h(o),"good","quanto potresti riavere in tasse")}
      ${j("Invio del 730",`30 set ${a+1}`,"","precompilato disponibile da fine aprile")}
    </section>

    ${n.length?`
    <section class="card attention" aria-labelledby="h-cand">
      <div class="card-head"><h2 id="h-cand">Da controllare</h2><span class="sub">movimenti che sembrano spese sanitarie</span></div>
      <div class="list">${n.slice(0,d.ui.dedAll?500:12).map(c=>`
        <form class="item" data-form="ded-mark">
          <input type="hidden" name="id" value="${c.id}">
          <div class="when">${r(I(c.date))}</div>
          <div class="text"><div>${r(c.note||c.category)}</div><div class="hint">${r(nt(t,c.accountId))}${c.description?" · "+r(c.description):""}</div></div>
          <span class="money">${h(c.amount)}</span>
          <label class="sr-only" for="dt-${c.id}">Tipo</label>
          <select class="input slim" id="dt-${c.id}" name="type">${yi(jc(c))}</select>
          <button class="btn small" type="submit">Detraibile</button>
          <button class="btn small" type="submit" name="no" value="1">No</button>
        </form>`).join("")}</div>
      ${n.length>12&&!d.ui.dedAll?`<button class="link" data-action="ded-all">Mostra tutti (${n.length})</button>`:""}
    </section>`:""}

    <div class="split">
      <div class="grow-2 stack stack-lg">
        ${i.length?i.map(c=>`
          <section class="card" aria-label="${r(c.type.label)}">
            <div class="card-head"><h2>${r(c.type.label)}</h2><span class="money">${h(c.total)}${c.estimate!=null?` <span class="hint">→ detrazione ≈</span> <span class="good-text">${h(c.estimate)}</span>`:""}</span></div>
            <div class="hint">${r(c.type.hint)}</div>
            ${c.type.cap&&c.total>c.type.cap?`<div class="banner warn">Hai superato il limite di ${h(c.type.cap)}: la parte in più non conta.</div>`:""}
            ${c.type.franchigia&&c.total<=c.type.franchigia?`<div class="hint warn-text">Sotto i ${h(c.type.franchigia)} di franchigia per ora non c'è detrazione.</div>`:""}
            <div class="list tight">${c.list.map(u=>`
              <div class="item"><div class="when">${r(I(u.date))}</div>
                <div class="text"><div>${r(u.note||u.category)}</div><div class="hint">${r(nt(t,u.accountId))}</div></div>
                <span class="money">${h(u.amount)}</span>
                <button class="link" data-action="ded-unmark" data-id="${u.id}">Togli</button></div>`).join("")}</div>
          </section>`).join(""):`<section class="card"><div class="empty">Nessuna spesa segnata per il ${a}. Le spese della categoria Salute compaiono qui sopra da controllare; le altre aggiungile qui accanto.</div></section>`}
      </div>
      <div class="grow-1 stack stack-lg">
        <form class="card stack" data-form="ded-add" aria-labelledby="h-dedadd">
          <h2 id="h-dedadd">Aggiungi una spesa</h2>
          <div class="hint">Per spese non ancora registrate (es. pagate in contanti in farmacia). Viene registrata anche come uscita dal conto.</div>
          <label class="field">Tipo<select class="input" name="type">${yi("sanitarie")}</select></label>
          <div class="form-grid two">
            <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="35,00" required></label>
            <label class="field">Data<input class="input" type="date" name="date" value="${a===e?k():`${a}-12-31`}"></label>
          </div>
          <label class="field">Descrizione<input class="input" name="note" placeholder="es. visita oculistica"></label>
          <label class="field">Conto<select class="input" name="accountId">${at(Y(t)?.id)}</select></label>
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
    </div>`}L("detrazioni",{render:Oc,actions:{"ded-year"(t){d.ui.dedYear=Number(t.dataset.y),d.ui.dedAll=!1,b("detrazioni")},"ded-all"(){d.ui.dedAll=!0,b("detrazioni")},"ded-unmark"(t){f(e=>{const a=e.transactions.find(i=>i.id===t.dataset.id);a&&(a.deduct=!1)})},"ded-deadline"(){const t=k(),e=Number(t.slice(0,4)),a=`${t<=`${e}-09-30`?e:e+1}-09-30`;f(i=>i.deadlines.push(Te({name:"Dichiarazione dei redditi (730)",kind:"Altro",due:a,every:12,notice:60,note:"Precompilato disponibile da fine aprile; controlla le spese segnate in Finanze → Detrazioni"}))),q("Scadenza del 730 aggiunta: 30 settembre, con avviso 60 giorni prima"),A()}},forms:{"ded-mark"(t,e,a){const i=d.data.transactions.find(s=>s.id===t.get("id"));if(!i)return;const n=a&&a.name==="no";f(()=>{i.deduct=n?!1:t.get("type")})},"ded-add"(t,e){const a=U(t.get("amount"));if(!(a>0)){et(e,"amount","Inserisci un importo valido, es. 35,00");return}const i=t.get("type"),n=t.get("accountId")||Y(d.data)?.id;if(!n)return D("Crea prima un conto in Finanze."),A();f(s=>s.transactions.push({id:G(),accountId:n,date:t.get("date")||k(),type:"out",amount:a,category:Nc[i]||"Altro",note:String(t.get("note")||"").trim()||nn[i].label,transfer:!1,invest:!1,deduct:i,createdAt:new Date().toISOString()})),d.ui.dedYear=Number(String(t.get("date")||k()).slice(0,4)),b("detrazioni",{},"Spesa aggiunta")}}});const wi={ETF:"#8FB4FF",Azione:"#F2B66D","Obbligazione / BTP":"#6FD59A",Altro:"#A9AFB6"},ki=t=>t==null?"—":t.toLocaleString("it-IT",{maximumFractionDigits:6});function Si(){const t=d.data;return(ft(t).find(e=>e.investments)||Y(t)||{}).id}function qc(){const t=d.data,e=en(t),a=sn(t),i=a.filter(m=>!m.closed),n=a.filter(m=>m.closed),s=t.recurring.filter(m=>m.type==="pac"),o=H(s.filter(m=>!m.paused).reduce((m,y)=>m+y.amount,0)),l={};for(const m of i)l[m.instrument]=(l[m.instrument]||0)+(m.value!=null?m.value:m.cost);const c=Object.values(l).reduce((m,y)=>m+y,0),u=[...t.ops].sort((m,y)=>y.date.localeCompare(m.date)),p=d.ui.opsAll?u:u.slice(0,12),g=e.pl;return`
    ${W("Investimenti","Investimenti")}
    <section class="metrics">
      ${j("Valore attuale",e.priced?h(e.value):"—","",e.priced<e.open?`${e.open-e.priced} posizion${e.open-e.priced===1?"e":"i"} senza prezzo`:"prezzi inseriti a mano")}
      ${j("Investito",h(e.cost),"","nelle posizioni aperte")}
      ${j("Guadagno o perdita",e.priced?ct(g):"—",g>0?"good":g<0?"bad":"",e.priced&&e.pricedCost?(g>=0?"+":"")+(g/e.pricedCost*100).toFixed(1).replace(".",",")+"%":"inserisci i prezzi attuali")}
      ${j("Realizzato e dividendi",ct(H(e.realized+e.divs)),"","tasse stimate "+h(Math.max(0,e.realized+e.divs)*.26))}
      ${j("PAC al mese",h(o),"accent",h(o*12)+" in un anno")}
    </section>

    <section class="card" aria-labelledby="h-pac">
      <div class="card-head"><h2 id="h-pac">I tuoi PAC</h2><button class="btn" data-action="toggle-new-pac">${d.ui.newPac?"Chiudi":"Nuovo PAC"}</button></div>
      ${s.length?s.map(m=>`
        <form class="pac-row ${m.paused?"paused":""}" data-form="pac-update">
          <input type="hidden" name="id" value="${m.id}">
          <div class="grow">
            <div class="row nowrap gap-sm"><strong>${r(m.title||m.name)}</strong><span class="tag ${m.paused?"":"ent"}">${m.paused?"In pausa":"Attivo"}</span></div>
            <div class="hint">${r(m.isin||"ISIN non indicato")} · ${r(nt(t,m.accountId))} · prossimo ${$e(m)?r(I($e(m))):"—"}</div>
            ${(m.history||[]).length?`<div class="hint">${m.history.map(y=>`dal ${r(I(y.from))}: ${h(y.amount)} (prima ${h(y.prev)})`).join(" · ")}</div>`:""}
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
          <label class="field">Conto<select class="input" name="accountId">${at(Si())}</select></label>
          <div class="field end"><button class="btn primary" type="submit">Aggiungi PAC</button></div>
        </form>`:""}
      <div class="hint">Ogni PAC compare anche in Programmati e nel calendario. Un cambio d'importo vale dai versamenti successivi, lo storico resta.</div>
    </section>

    <section class="card" aria-labelledby="h-pos">
      <div class="card-head"><h2 id="h-pos">Posizioni</h2><span class="hint">Il prezzo attuale lo aggiorni tu quando vuoi</span></div>
      ${c>0?`
        <div class="alloc" aria-hidden="true">${Object.entries(l).map(([m,y])=>`<div style="width:${y/c*100}%;background:${wi[m]||"#A9AFB6"}"></div>`).join("")}</div>
        <div class="row legend">${Object.entries(l).map(([m,y])=>`<span><span class="sw" style="background:${wi[m]||"#A9AFB6"}"></span>${r(m)} ${Math.round(y/c*100)}%</span>`).join("")}</div>`:""}
      ${i.length?`
      <div class="table-wrap"><table class="tx">
        <thead><tr><th>Titolo</th><th>Quote</th><th>Prezzo medio</th><th>Prezzo attuale (€)</th><th class="r">Valore</th><th class="r">+/−</th></tr></thead>
        <tbody>${i.map(m=>`
          <tr>
            <td><div>${r(m.title)}</div><div class="hint">${r(m.instrument)}${m.isin?" · "+r(m.isin):""}${m.divs?" · dividendi "+h(m.divs):""}</div></td>
            <td>${m.unknownQty?`<label class="sr-only" for="q-${r(m.key)}">Quote totali di ${r(m.title)}</label><input class="input slim num" id="q-${r(m.key)}" data-change="set-qty" data-key="${r(m.key)}" inputmode="decimal" value="${m.qty?r(String(m.qty).replace(".",",")):""}" placeholder="quote totali"><div class="hint">${m.unknownQty} versam. senza quote</div>`:ki(m.qty)}</td>
            <td>${m.qty?h(m.cost/m.qty):h(m.cost)+" versati"}</td>
            <td><label class="sr-only" for="p-${r(m.key)}">Prezzo attuale di ${r(m.title)}</label><input class="input slim num" id="p-${r(m.key)}" data-change="set-price" data-key="${r(m.key)}" inputmode="decimal" value="${m.price?r(String(m.price).replace(".",",")):""}" placeholder="prezzo">${m.priceDate?`<div class="hint">al ${r(I(m.priceDate))}</div>`:""}${m.isin?`<button class="link small" data-action="see-price" data-isin="${r(m.isin)}">Vedi prezzo</button>`:""}</td>
            <td class="r money">${m.value!=null?h(m.value):"—"}</td>
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
          <label class="field">Conto<select class="input" name="accountId">${at(Si())}</select></label>
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
          ${s.length?`
          <label class="field">PAC<select class="input" name="id">${s.map(m=>`<option value="${m.id}">${r(m.title||m.name)}</option>`).join("")}</select></label>
          <label class="field">Primo versamento<input class="input" type="month" name="start" required></label>
          <label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" value="${r(String(s[0].amount).replace(".",","))}"></label>
          <button class="btn" type="submit">Genera versamenti</button>`:'<span class="hint">Crea prima il PAC qui sopra.</span>'}
        </form>
      </div>
    </div>

    ${u.length?`
    <section class="card">
      <div class="card-head"><h2>Storico operazioni</h2><span class="sub">${u.length}</span></div>
      <div class="list">${p.map(m=>`
        <div class="item">
          <div class="when">${r(I(m.date))}</div>
          <div class="text"><div>${m.kind==="buy"?m.plan?"PAC":"Acquisto":m.kind==="sell"?"Vendita":"Dividendo"} · ${r(m.title)}</div><div class="hint">${m.qty?ki(m.qty)+" quote":m.kind==="div"?"":"quote non indicate"}${m.qty&&m.total?" · "+h(m.total/m.qty)+" l'una":""}</div></div>
          <span class="money ${m.kind==="buy"?"":"in"}">${m.kind==="buy"?"− ":"+ "}${h(m.total)}</span>
          <button class="icon-btn" data-action="del-op" data-id="${m.id}" aria-label="Elimina operazione">${S("trash",16)}</button>
        </div>`).join("")}</div>
      ${u.length>12&&!d.ui.opsAll?'<button class="link" data-action="ops-all">Mostra tutte</button>':""}
    </section>`:""}`}L("investimenti",{render:qc,actions:{"toggle-new-pac"(){d.ui.newPac=!d.ui.newPac,b("investimenti")},"ops-all"(){d.ui.opsAll=!0,b("investimenti")},"pac-step"(t){const e=t.form.amount,a=F(e.value),i=Math.max(1,(Number.isFinite(a)?a:0)+Number(t.dataset.step));e.value=String(i).replace(".",",")},"del-op"(t){window.confirm("Eliminare questa operazione? Il movimento sul conto, se c'è, resta.")&&f(e=>{e.ops=e.ops.filter(a=>a.id!==t.dataset.id)})}},changes:{async"see-price"(t){const e=String(t.dataset.isin||"").replace(/[^A-Z0-9]/gi,"");try{await oe("open_document",{target:`https://www.justetf.com/it/etf-profile.html?isin=${e}`})}catch(a){D(String(a)),A()}},"set-price"(t){const e=F(t.value);if(!(e>0)){t.value.trim()===""&&f(a=>{delete a.prices[t.dataset.key]});return}f(a=>{a.prices[t.dataset.key]={price:e,date:k()}})},"set-qty"(t){const e=F(t.value);f(a=>{e>0?a.qtyOverride[t.dataset.key]=e:delete a.qtyOverride[t.dataset.key]})}},forms:{"pac-update"(t,e){const a=d.data.recurring.find(s=>s.id===t.get("id")),i=F(t.get("amount")),n=parseInt(t.get("day"),10);if(!(i>=1)){et(e,"amount","Almeno 1 €");return}if(!(n>=1&&n<=31)){et(e,"day","Da 1 a 31");return}f(()=>{a.amount!==i&&(a.history=(a.history||[]).concat([{from:k(),amount:i,prev:a.amount}])),a.amount=i,a.day=n}),b("investimenti",{},"PAC aggiornato")},"new-pac"(t,e){const a=String(t.get("title")||"").trim(),i=F(t.get("amount")),n=parseInt(t.get("day"),10)||1;if(!(i>=1)){et(e,"amount","Inserisci l'importo mensile, es. 50");return}d.ui.newPac=!1,f(s=>s.recurring.push({id:G(),type:"pac",name:"PAC "+a,title:a,isin:String(t.get("isin")||"").trim().toUpperCase(),amount:i,day:n,freq:"mensile",accountId:t.get("accountId"),category:"Investimenti",paused:!1,done:{},history:[],startDate:k()})),b("investimenti",{},"PAC aggiunto")},"add-op"(t,e){const a=t.get("kind"),i=String(t.get("title")||"").trim(),n=F(t.get("qty")||""),s=F(t.get("total")),o=F(t.get("fee")||"0")||0;if(!i){et(e,"title","Scrivi il titolo");return}if(a!=="div"&&!(n>0)){et(e,"qty","Inserisci le quote");return}if(!(s>0)){et(e,"total","Inserisci l'importo totale");return}const l=String(t.get("isin")||"").trim().toUpperCase(),c=sn(d.data).find(g=>l&&g.isin===l||g.title.toLowerCase()===i.toLowerCase());if(a==="sell"&&(!c||c.qty+1e-9<n))return D("Non risultano abbastanza quote di "+i+" da vendere."),A();const u=t.get("accountId"),p=t.get("date")||k();f(g=>{const m=G();t.get("cash")==="on"&&g.transactions.push({id:m,accountId:u,date:p,type:a==="buy"?"out":"in",amount:H(a==="buy"?s+o:a==="sell"?s-o:s),category:a==="div"?"Dividendi":"Investimenti",note:(a==="buy"?"Acquisto ":a==="sell"?"Vendita ":"Dividendo ")+i,transfer:!1,invest:a!=="div",createdAt:new Date().toISOString()}),g.ops.push({id:G(),accountId:u,date:p,kind:a,isin:l||c?.isin||"",title:c?.title||i,instrument:t.get("instrument"),qty:a==="div"?null:n,total:s,fee:o,txId:m})}),b("investimenti",{},"Operazione registrata")},"rebuild-pac"(t,e){const a=d.data.recurring.find(c=>c.id===t.get("id")),i=t.get("start"),n=F(t.get("amount"));if(!a||!/^\d{4}-\d{2}$/.test(i||"")){et(e,"start","Scegli il mese del primo versamento");return}if(!(n>0)){et(e,"amount","Inserisci l'importo");return}const s=k(),o=Object.assign({},a,{startDate:i+"-01",freq:"mensile"}),l=za(o,i+"-01",s).filter(c=>!d.data.ops.some(u=>u.plan&&(u.isin?u.isin===a.isin:u.title===a.title)&&u.date.slice(0,7)===c.slice(0,7)));if(!l.length)return D("Non ci sono versamenti da aggiungere: risultano già tutti."),A();f(c=>{for(const u of l)c.ops.push({id:G(),accountId:a.accountId,date:u,kind:"buy",isin:a.isin||"",title:a.title||a.name,instrument:"ETF",qty:null,total:n,fee:0,plan:!0,rebuilt:!0}),a.done=Object.assign({},a.done,{[u]:!0})}),b("investimenti",{},`Aggiunti ${l.length} versamenti da ${h(n)}. Ora scrivi le quote totali nella tabella Posizioni.`)}}});function Tc(t){t=t.replace(/^﻿/,"");const e=t.split(/\r?\n/,1)[0]||"",a={",":0,";":0,"	":0};let i=!1;for(const u of e)u==='"'?i=!i:!i&&u in a&&a[u]++;const n=Object.entries(a).sort((u,p)=>p[1]-u[1])[0][0],s=[];let o=[],l="",c=!1;for(let u=0;u<t.length;u++){const p=t[u];c?p==='"'?t[u+1]==='"'?(l+='"',u++):c=!1:l+=p:p==='"'?c=!0:p===n?(o.push(l),l=""):p===`
`||p==="\r"?(p==="\r"&&t[u+1]===`
`&&u++,o.push(l),l="",o.some(g=>g.trim()!=="")&&s.push(o),o=[]):l+=p}return o.push(l),o.some(u=>u.trim()!=="")&&s.push(o),{sep:n,header:(s[0]||[]).map(u=>u.trim()),rows:s.slice(1)}}const Mc={date:[/^data( operazione)?$/i,/data op/i,/^date$/i,/booking date/i,/^data valuta$/i,/^data/i],amount:[/^importo/i,/amount/i,/^valore/i],income:[/^entrat/i,/^accredit/i,/^avere$/i,/credit/i],expense:[/^uscit/i,/^addebit/i,/^dare$/i,/debit/i],name:[/^nome$/i,/beneficiario|controparte|esercente|merchant|payee/i],description:[/descrizione/i,/causale/i,/description/i,/dettagli/i,/^memo$/i],type:[/tipolog/i,/^tipo$/i,/^type$/i,/categoria banca/i]};function Pc(t){const e={},a=new Set;for(const i of["date","amount","income","expense","name","description","type"])for(const n of Mc[i]){const s=t.findIndex((o,l)=>!a.has(l)&&n.test(o));if(s>=0){e[i]=s,a.add(s);break}}return e}function Xn(t){return t.date!=null&&(t.amount!=null||t.income!=null||t.expense!=null)&&(t.name!=null||t.description!=null)}const Rc=t=>t.map(e=>e.toLowerCase()).join("|");function Lc(t,e){const a=[],i=[];return t.rows.forEach((n,s)=>{const o=g=>e[g]!=null?String(n[e[g]]??"").trim():"",l=no(o("date"));let c=NaN;if(e.amount!=null)c=F(o("amount"));else{const g=F(o("income")),m=F(o("expense"));c=(Number.isFinite(g)?Math.abs(g):0)-(Number.isFinite(m)?Math.abs(m):0)}if(!l||!Number.isFinite(c)||c===0){i.push(s+2);return}const u=o("description").replace(/\s+/g," "),p=o("name").replace(/\s+/g," ")||u;a.push({date:l,amount:H(c),name:p,description:u,bankType:o("type")})}),{movements:a,errors:i}}const Fc={gen:1,feb:2,mar:3,apr:4,mag:5,giu:6,lug:7,ago:8,set:9,ott:10,nov:11,dic:12},xi=/^(\d{1,2}) (gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)$/i,Ai=/-?\d{1,3}(?:\.\d{3})*,\d{2} €/g;async function Bc(t,e){return(await(await t.getPage(e)).getTextContent()).items.filter(n=>n.str&&n.str.trim()).map(n=>({s:n.str.trim(),x:n.transform[4],y:n.transform[5]}))}async function Vc(t,e){const a=await e.getDocument({data:t instanceof Uint8Array?t:new Uint8Array(t),isEvalSupported:!1,disableFontFace:!0,useSystemFonts:!1}).promise,i=[];for(let N=1;N<=a.numPages;N++)i.push(await Bc(a,N));const n=i.flat().map(N=>N.s).join(" ");if(!/TRADE REPUBLIC/i.test(n)||!/TRANSAZIONI SUL CONTO/i.test(n))throw new Error("Questo PDF non sembra un estratto conto di Trade Republic.");let s="";const o=i[0],l=o.find(N=>N.s==="DATA"&&N.x>300);l&&(s=o.filter(v=>Math.abs(v.y-l.y)<2&&v.x<300).sort((v,$)=>v.x-$.x).map(v=>v.s).join(" ").trim());const c=o.find(N=>/^IBAN/.test(N.s));let u="";if(c){const N=o.filter($=>Math.abs($.y-c.y)<2).map($=>$.s).join(" "),v=/IT\d{2}[A-Z]\d{10}[A-Z0-9]{12}/.exec(N.replace(/\s/g,""));v&&(u=v[0])}let p=null;const g=o.find(N=>/^Conto corrente/i.test(N.s));if(g){const v=o.filter($=>Math.abs($.y-g.y)<2).sort(($,E)=>$.x-E.x).map($=>$.s).join(" ").match(Ai);v&&(p=F(v[0]))}const m=[];let y=415,w=452;for(const N of i){const v=N.find(C=>C.s==="IN ENTRATA"),$=N.find(C=>C.s==="IN USCITA");v&&$&&(y=v.x,w=$.x);const E=(y+w)/2+4,x=N.filter(C=>C.x<100),_=x.filter(C=>xi.test(C.s)).sort((C,T)=>T.y-C.y);for(const C of _){const T=x.filter(R=>/^\d{4}$/.test(R.s)&&R.y<C.y&&C.y-R.y<20).sort((R,ot)=>ot.y-R.y)[0];if(!T)continue;const B=C.y+2,$t=T.y-2,Z=N.filter(R=>R.x>=100&&R.y<=B&&R.y>=$t),Dt=Z.filter(R=>R.x<145).sort((R,ot)=>ot.y-R.y||R.x-ot.x).map(R=>R.s).join(" ").trim(),re=/^(Transazione con carta|Bonifico|Commercio|Interessi|Imposte|Rendimento|Pagamento|\S+)\s*(.*)$/i.exec(Dt)||["",Dt,""],Gt=re[1],Ge=Z.filter(R=>R.x>=145&&R.x<y-5).sort((R,ot)=>ot.y-R.y||R.x-ot.x),Ua=[re[2],...Ge.map(R=>R.s)].join(" ").replace(/\s+/g," ").trim(),Ga=Z.filter(R=>R.x>=y-5).sort((R,ot)=>R.x-ot.x),yt=[];let _e=null;for(const R of Ga){const ot=R.s.match(Ai)||[];ot.length&&_e==null&&(_e=R.x);for(const hs of ot)yt.push(F(hs))}if(yt.length<2)continue;const[us,ps]=xi.exec(C.s).slice(1),ms=`${T.s}-${String(Fc[ps.toLowerCase()]).padStart(2,"0")}-${us.padStart(2,"0")}`,_a=yt[0],gs=yt[yt.length-1],vs=_e>=E;m.push({date:ms,type:Gt,description:Ua,amount:H(vs?-_a:_a),balance:gs})}}let z=p;for(const N of m){if(z!=null){const v=H(N.balance-z);Math.abs(Math.abs(v)-Math.abs(N.amount))<.011&&(N.amount=v)}z=N.balance}return{holder:s,iban:u,closingBalance:m.length?m[m.length-1].balance:null,movements:m.map(Uc(s))}}function Ii(t){return String(t).toLowerCase().split(/[^a-zà-ù]+/).filter(e=>e.length>1)}function Uc(t){const e=new Set(Ii(t)),a=i=>{const n=Ii(i);return n.length>0&&e.size>0&&n.every(s=>e.has(s))};return i=>{const n={date:i.date,amount:i.amount,balance:i.balance,description:i.description,bankType:i.type,name:i.description},s=i.description;let o;if(o=/(?:Savings plan execution|Buy trade|Sell trade)\s+([A-Z]{2}[A-Z0-9]{9}\d)\s+(.*?),\s*quantity:\s*([\d.]+)/i.exec(s)){const l=/Savings plan/i.test(s),c=/Sell trade/i.test(s),u=parseFloat(o[3]),p=o[2].replace(/^iShares (III|II|IV|V|VI|VII)? ?plc - /i,"").trim();n.name=(l?"PAC ":c?"Vendita ":"Acquisto ")+p,n.op={kind:c?"sell":"buy",plan:l,isin:o[1],title:p,qty:u,total:Math.abs(i.amount)},n.category="Investimenti"}else(o=/Cash Dividend for ISIN\s+([A-Z]{2}[A-Z0-9]{9}\d)/i.exec(s))?(n.name="Dividendo "+o[1],n.op={kind:"div",isin:o[1],total:Math.abs(i.amount)},n.category="Dividendi"):/^Interessi/i.test(i.type)||/interest/i.test(s)?(n.name="Interessi",n.category="Interessi"):/^Imposte/i.test(i.type)||/tax/i.test(s)?(n.name=/Stamp Duty/i.test(s)?/Cancellation/i.test(s)?"Rimborso imposta di bollo":"Imposta di bollo":"Imposte",n.category="Tasse e bolli"):(o=/(Incoming transfer from|Outgoing transfer for)\s+(.+?)(?:\s*\(|$)/i.exec(s))&&(n.name=(i.amount>0?"Bonifico da ":"Bonifico a ")+o[2].trim(),n.counterparty=o[2].trim(),a(o[2])&&(n.transfer=!0,n.category="Giroconto"));return n}}const Gc=[["Spesa",["eurospar","despar","conad","coop","esselunga","lidl","carrefour"," pam ","eurospin","penny","aldi"," iper","famila","tigre","crai","naturasi","supermercat"]],["Delivery",["glovo","deliveroo","just eat","justeat","uber eats"]],["Trasporti",["tper"," atm ","trenitalia"," italo "," uber ","free now","freenow","autostrade","telepass"," eni ","enilive","q8","tamoil"," esso ","carburant","benzin","parcheggi","ryanair","easyjet","flixbus"]],["Telefono e internet",[" tim ","telecom","iliad","vodafone","windtre","wind tre","fastweb","ho mobile","kena","very mobile","sky wifi"]],["Abbonamenti",["netflix","spotify","disney","prime video","amazon prime","apple com","google","anthropic","openai","youtube","dazn","now tv","canone","icloud","microsoft","adobe","patreon"]],["Casa",["affitto","condominio","enel"," hera ","a2a","iren","acea","edison","sorgenia","bolletta"]],["Salute",["farmacia","ospedale","medic","dentist","ottica"," asl ","ticket sanit"]],["Svago",["steam","playstation","nintendo","xbox","cinema","starcasino","sisal","snai","lottomatica","ticketone","teatro","museo"]],["Bar e ristoranti",[" bar "," pub ","ristorant","pizzeria","trattoria","osteria","caffe","caffè","bistrot","sushi","kebab","gelateria","pasticceria","buonristoro","mcdonald","burger","eurofood"]],["Altre entrate",["rimborso","cashback"]]],_c=[["Stipendio",["stipendio","salario","emolument","busta paga","retribuz"]],["Interessi",["interess"]],["Rimborsi",["rimbors","refund"]]],Wc=new Set(["Casa","Telefono e internet","Abbonamenti","Stipendio"]);function Hc(t){return" "+ae(t.name+" "+(t.description||""))+" "}function Kc(t,e){const a=ae(t).split(" ").filter(i=>i.length>1);return a.length?(e||[]).some(i=>{const n=new Set(ae(i).split(" ").filter(s=>s.length>1));return n.size>1&&a.every(s=>n.has(s))}):!1}function Qc(t,e){const a=Hc(t);for(const n of e.rules||[])if(n.match&&a.includes(n.match))return{category:n.category,transfer:!!n.transfer,invest:n.category==="Investimenti",check:!1};if(t.category)return{category:t.category,transfer:!!t.transfer,invest:!!t.op&&t.op.kind!=="div",check:!1};if(Kc(t.name,e.settings.ownNames)||/^passaggio\b/.test(ae(t.description)))return{category:"Giroconto",transfer:!0,invest:!1,check:!1};if((/prelievo|atm/i.test(t.bankType||"")||/\batm\b|prelievo/.test(a))&&t.amount<0)return{category:"Contanti",transfer:!1,invest:!1,check:!1};const i=t.amount>0?_c:Gc;for(const[n,s]of i)if(s.some(o=>a.includes(o)))return{category:n,transfer:!1,invest:!1,check:n==="Bar e ristoranti"&&/sumup|sum up/.test(a)};return{category:t.amount>0?"Altre entrate":"Altro",transfer:!1,invest:!1,check:!0}}function Pt(t){return ae(t.name||t.description).replace(/\b\d+\b/g," ").replace(/\s+/g," ").trim().split(" ").slice(0,3).join(" ")}function Ci(t){const e={};let a=t[0],i=0;for(const n of t)e[n]=(e[n]||0)+1,e[n]>i&&(i=e[n],a=n);return a}function Yc(t,e,a){const i=new Set((e||[]).map(c=>c.match).filter(Boolean)),n=new Set((e||[]).filter(c=>c.isin).map(c=>c.isin)),s=[],o={};for(const c of t)c.op&&c.op.plan&&(o[c.op.isin]=o[c.op.isin]||[]).push(c);for(const[c,u]of Object.entries(o)){if(n.has(c))continue;u.sort((g,m)=>g.date.localeCompare(m.date));const p=u[u.length-1];s.push({type:"pac",name:"PAC "+p.op.title,isin:c,title:p.op.title,amount:p.op.total,day:Number(Ci(u.map(g=>Number(g.date.slice(8))))),category:"Investimenti",accountId:a,when:u.length+" versamenti dal "+u[0].date.split("-").reverse().join("/"),confident:u.length>1,match:"pac "+c.toLowerCase()})}const l={};for(const c of t){if(c.transfer||c.invest||c.op||["Contanti","Tasse e bolli","Interessi","Dividendi"].includes(c.category))continue;const u=Pt(c);!u||i.has(u)||(l[u]=l[u]||[]).push(c)}for(const[c,u]of Object.entries(l)){const p=new Set(u.map(E=>E.date.slice(0,7))),g=u.map(E=>Math.abs(E.amount)),m=g.reduce((E,x)=>E+x,0)/g.length,y=g.every(E=>Math.abs(E-m)<=Math.max(1,m*.15)),w=u[0].amount>0?"in":"out",z=p.size>=2&&y&&u.length<=p.size+1,N=p.size===1&&u.length===1&&Wc.has(u[0].category);if(!z&&!N)continue;const v=u.sort((E,x)=>E.date.localeCompare(x.date))[u.length-1],$=v.category;s.push({type:w,name:Zc(v),amount:H(Math.abs(v.amount)),day:Number(Ci(u.map(E=>Number(E.date.slice(8))))),category:$,accountId:a,sub:$==="Abbonamenti"||$==="Telefono e internet",when:z?"trovato in "+p.size+" mesi":"trovato una volta, da confermare",confident:z,match:c})}return s.sort((c,u)=>c.day-u.day)}function Zc(t){if(/stipendio/i.test(t.description||""))return"Stipendio";if(/affitto/i.test(t.description||""))return"Affitto";const e=(t.name||t.description||"").replace(/\b\d{1,2}\/\d{2,4}\b/g,"").replace(/\*/g," ").replace(/\s+/g," ").trim();return e.length>40?e.slice(0,40)+"…":e.charAt(0).toUpperCase()+e.slice(1)}let ea=null;async function Jn(){return ea||(ea=(async()=>{const t=await Ya(()=>import("./app-BOsQIt_X.js").then(a=>a.bN),__vite__mapDeps([0,1,2,3]),import.meta.url),e=await Ya(()=>import("./app-BOsQIt_X.js").then(a=>a.bN),__vite__mapDeps([0,1,2,3]),import.meta.url);return t.GlobalWorkerOptions.workerSrc=e.default,t})()),ea}async function Xc(t,e){const a=t.name;if(/\.pdf$/i.test(a)||t.type==="application/pdf"){const l=await Jn(),c=await Vc(await t.arrayBuffer(),l);return{kind:"pdf",fileName:a,source:"Trade Republic",movements:c.movements,holder:c.holder,closingBalance:c.closingBalance,ibanLast4:c.iban?c.iban.slice(-4):""}}const i=await t.text(),n=Tc(i);if(!n.header.length||!n.rows.length)throw new Error("Il file è vuoto o non è un CSV.");const s=Rc(n.header),o=e.importProfiles[s]||Pc(n.header);return{kind:"csv",fileName:a,parsed:n,sig:s,map:o,usable:Xn(o)}}function Ei(t){return Lc(t.parsed,t.map)}function Jc(t,e,a){const i={};for(const n of t.transactions){if(n.accountId!==a)continue;const s=n.date+"|"+(n.type==="in"?1:-1)*n.amount;i[s]=(i[s]||0)+1}return e.slice().sort((n,s)=>n.date.localeCompare(s.date)).map((n,s)=>{const o=n.date+"|"+H(n.amount),l=i[o]>0;l&&i[o]--;const c=Qc(n,t);return Object.assign({},n,{i:s,category:c.category,transfer:c.transfer,invest:c.invest,check:c.check&&!l,dup:l,include:!l,autoCategory:c.category})})}function tr(t){const e=t.filter(a=>a.include);return{total:t.length,included:e.length,spese:e.filter(a=>a.amount<0&&!a.transfer&&!a.invest).length,entrate:e.filter(a=>a.amount>0&&!a.transfer&&!a.invest).length,giroconti:e.filter(a=>a.transfer).length,investimenti:e.filter(a=>a.op).length,check:e.filter(a=>a.check).length,dups:t.filter(a=>a.dup).length,from:t.length?t[0].date:null,to:t.length?t[t.length-1].date:null}}function ts(t,e,a){const i=e.filter(n=>n.include).map(n=>({date:n.date,amount:n.amount,name:n.name,description:n.description,category:n.category,transfer:n.transfer,invest:n.invest,op:n.op}));return Yc(i,t.recurring,a).map(n=>Object.assign(n,{on:!0}))}function er(t){return/ETF|UCITS/i.test(t.title||"")?"ETF":"Azione"}function ar(t,e){const{accountId:a,rows:i}=e,n=new Date().toISOString(),s=[],o=new Map;for(const c of i){if(!c.include)continue;const u={id:G(),accountId:a,date:c.date,type:c.amount>0?"in":"out",amount:H(Math.abs(c.amount)),category:c.category,note:c.name,description:c.description||"",transfer:c.category==="Giroconto"||c.transfer&&c.category==="Giroconto",invest:c.category==="Investimenti",imported:!0,createdAt:n};if(t.transactions.push(u),s.push({t:u,r:c}),c.op&&t.ops.push({id:G(),accountId:a,date:c.date,kind:c.op.kind,isin:c.op.isin,title:c.op.title||(t.ops.find(p=>p.isin===c.op.isin)||{}).title||c.op.isin,instrument:c.op.kind==="div"?void 0:er(c.op),qty:c.op.qty||null,total:c.op.total,fee:0,plan:!!c.op.plan,txId:u.id}),c.category!==c.autoCategory){const p=Pt(c);p.length>=3&&o.set(p,{match:p,category:c.category,transfer:c.category==="Giroconto"})}}for(const c of o.values())t.rules=t.rules.filter(u=>u.match!==c.match),t.rules.push(c);for(const c of e.suggestions||[]){if(!c.on)continue;const u=s.filter(({r:m})=>c.isin?m.op&&m.op.isin===c.isin:Pt(m)===c.match).map(({r:m})=>m.date).sort(),p=u[u.length-1]||null,g={id:G(),name:c.name,type:c.type,amount:c.amount,accountId:c.accountId||a,freq:"mensile",day:c.day,category:c.category,sub:!!c.sub,remind:1,paused:!1,match:c.match,isin:c.isin,title:c.title,startDate:p?M(p,-3):void 0,done:{},history:[]};t.recurring.push(g)}for(const c of t.recurring)if(c.accountId===a)for(const{t:u,r:p}of s){if(!(c.isin?p.op&&p.op.isin===c.isin&&p.op.plan:c.match&&Pt(p)===c.match))continue;const m=za(c,M(u.date,-7),M(u.date,7));m.length&&(c.done=Object.assign({},c.done,{[m[0]]:!0}),u.recurringId=c.id)}if(e.holder){const c=t.settings.ownNames;c.some(u=>u.toLowerCase()===e.holder.toLowerCase())||c.push(e.holder)}e.sig&&e.map&&(t.importProfiles[e.sig]=e.map);const l=t.accounts.find(c=>c.id===a);return l&&e.alignBalance&&e.closingBalance!=null&&s.length&&(l.anchorBalance=e.closingBalance,l.anchorDate=s.map(({t:c})=>c.date).sort().pop(),l.anchorAt=n),s.length}const es=[["date","Data",!0],["amount","Importo (con segno)",!1],["income","Entrate (se separate)",!1],["expense","Uscite (se separate)",!1],["name","Nome / controparte",!1],["description","Descrizione",!1],["type","Tipo di operazione",!1]],tt=()=>d.ui.imp||(d.ui.imp={step:"pick"});function ir(t){const e=ft(d.data);return t.kind==="pdf"?(e.find(a=>t.ibanLast4&&a.last4===t.ibanLast4)||e.find(a=>/trade republic/i.test(a.bank+" "+a.name))||e.find(a=>a.investments)||{}).id||"":(Y(d.data)||{}).id||""}function me(){const t=tt(),e=t.file.kind==="pdf"?t.file.movements:Ei(t.file).movements;t.errors=t.file.kind==="csv"?Ei(t.file).errors:[],t.rows=Jc(d.data,e,t.accountId),t.suggestions=ts(d.data,t.rows,t.accountId),t.alignBalance=t.file.kind==="pdf"&&t.file.closingBalance!=null,t.step="preview"}function nr(){const t=tt();return`
    <section class="card stack">
      <label class="drop">
        <input type="file" accept=".csv,.txt,.pdf,text/csv,application/pdf" data-change="imp-file">
        ${S("upload",28)}
        <strong>Scegli un file</strong>
        <span class="sub">CSV della lista movimenti di qualsiasi banca, oppure PDF dell'estratto conto di Trade Republic</span>
      </label>
      ${t.loading?'<div class="sub" role="status">Lettura del file…</div>':""}
      ${t.error?`<div class="error" role="alert">${r(t.error)}</div>`:""}
      <div class="hint">Meglio un mese intero o più: così i pagamenti ricorrenti vengono riconosciuti tutti. I doppioni già presenti vengono saltati da soli.</div>
    </section>`}function sr(){const t=tt(),e=t.file.parsed.header,a=t.file.parsed.rows.slice(0,3),i=n=>'<option value="">—</option>'+e.map((s,o)=>`<option value="${o}" ${t.file.map[n]===o?"selected":""}>${r(s||"Colonna "+(o+1))}</option>`).join("");return`
    <form class="card stack" data-form="imp-map">
      <h2>Abbina le colonne</h2>
      <p class="sub">Non ho riconosciuto tutte le colonne di «${r(t.file.fileName)}». Indica dove si trovano: lo ricorderò per i prossimi file di questa banca.</p>
      <div class="form-grid">
        ${es.map(([n,s,o])=>`<label class="field">${s}${o?" *":""}<select class="input" name="${n}">${i(n)}</select></label>`).join("")}
      </div>
      <div class="table-wrap"><table class="tx small"><thead><tr>${e.map(n=>`<th>${r(n)}</th>`).join("")}</tr></thead>
      <tbody>${a.map(n=>`<tr>${e.map((s,o)=>`<td>${r((n[o]||"").slice(0,40))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      ${t.error?`<div class="error" role="alert">${r(t.error)}</div>`:""}
      <div class="row"><button class="btn primary" type="submit">Continua</button><button class="btn" type="button" data-action="imp-reset">Annulla</button></div>
    </form>`}function or(){const t=tt(),e=tr(t.rows),a=ft(d.data),i=a.find(u=>u.id===t.accountId),n=[...d.data.categories.out,...d.data.categories.in,"Giroconto","Investimenti"],s=[...new Set(n)],o=t.rows.filter(u=>!t.onlyCheck||u.check||u.dup),l=t.showAll?o:o.slice(-80).reverse(),c=t.suggestions.filter(u=>u.on).length;return`
    <section class="split">
      <div class="card row nowrap grow-2">
        <div class="file-badge" aria-hidden="true">${t.file.kind==="pdf"?"PDF":"CSV"}</div>
        <div class="text"><strong>${r(t.file.fileName)}</strong><div class="hint">${e.total} movimenti${e.from?" · dal "+r(I(e.from))+" "+e.from.slice(0,4)+" al "+r(I(e.to))+" "+e.to.slice(0,4):""}${t.file.kind==="pdf"?" · "+r(t.file.source):""}</div></div>
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
          <span class="money ${u.type==="in"?"in":""}">${u.type==="in"?"+ ":u.type==="out"?"− ":""}${h(u.amount)}</span>
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
            <td class="hint nowrap">${r(I(u.date))} ${u.date.slice(2,4)}</td>
            <td><div>${r(u.name)}</div><div class="hint">${r([u.bankType,u.dup?"già presente":""].filter(Boolean).join(" · "))}</div></td>
            <td class="nowrap"><label class="sr-only" for="cat-${u.i}">Categoria di ${r(u.name)}</label>
              <select class="input slim ${u.check?"warn-border":""}" id="cat-${u.i}" data-change="imp-cat" data-i="${u.i}">${s.map(p=>`<option ${p===u.category?"selected":""}>${r(p)}</option>`).join("")}</select>
              ${u.check?'<span class="tag warn">da controllare</span>':""}</td>
            <td class="r money ${u.category==="Giroconto"?"gir":u.amount>0?"in":""}">${ct(u.amount)}</td>
          </tr>`).join("")}</tbody>
      </table></div>
      ${t.lastApplied?`<div class="banner ok" role="status">${r(t.lastApplied)}</div>`:""}
      <div class="hint">Mostrati ${l.length} di ${o.length}${o.length>l.length?' (i più recenti) · <button class="link" data-action="imp-all">mostra tutti</button>':""}. Quando cambi una categoria la regola viene ricordata.</div>
    </section>

    <section class="card stack">
      ${t.file.kind==="pdf"&&t.file.closingBalance!=null?`<label class="check"><input type="checkbox" data-change="imp-align" ${t.alignBalance?"checked":""}><span>Imposta il saldo del conto a ${h(t.file.closingBalance)}, come nell'estratto</span></label>`:""}
      ${t.file.kind==="csv"&&i?`<div class="hint">Il saldo di «${r(i.name)}» conta solo i movimenti successivi al ${r(I(i.anchorDate))} ${i.anchorDate.slice(0,4)}: quelli precedenti servono per statistiche e categorie. Puoi correggere il saldo dal conto.</div>`:""}
      <div class="row">
        <button class="btn primary" data-action="imp-commit" ${t.accountId?"":"disabled"}>Importa ${e.included} movimenti${c?` e ${c} programmati`:""}</button>
        ${t.accountId?"":'<span class="hint">Scegli prima il conto.</span>'}
      </div>
    </section>`}function lr(){const t=tt(),e=t.step==="map"?sr():t.step==="preview"?or():t.step==="done"?`
    <section class="card stack">
      <div class="banner ok" role="status">${r(t.result)}</div>
      <div class="row"><button class="btn primary" data-action="nav" data-id="finanze">Vai a Finanze</button>${t.hadInvest?'<button class="btn" data-action="nav" data-id="investimenti">Vai a Investimenti</button>':""}<button class="btn" data-action="imp-reset">Importa un altro file</button></div>
    </section>`:nr();return`${W("Finanze","Importa estratto conto")}${e}`}L("importa",{render:lr,changes:{async"imp-file"(t){const e=t.files&&t.files[0];if(!e)return;const a=tt();a.loading=!0,a.error="",A();try{a.file=await Xc(e,d.data),a.accountId=ir(a.file),a.loading=!1,a.file.kind==="csv"&&!a.file.usable?a.step="map":me()}catch(i){a.loading=!1,a.error=i.message||String(i)}A()},"imp-account"(t){const e=tt();e.accountId=t.value,e.accountId&&me(),A()},"imp-inc"(t){const e=tt().rows.find(a=>a.i===Number(t.dataset.i));e.include=t.checked,A()},"imp-cat"(t){const e=tt(),a=e.rows.find(o=>o.i===Number(t.dataset.i)),i=o=>{o.category=t.value,o.check=!1,o.manual=!0,o.transfer=t.value==="Giroconto",o.invest=t.value==="Investimenti"};i(a);const n=Pt(a);let s=0;for(const o of e.rows)o===a||o.manual||o.op||Math.sign(o.amount)!==Math.sign(a.amount)&&t.value!=="Giroconto"||Pt(o)===n&&(i(o),s++);e.lastApplied=s?`Categoria applicata anche ad altri ${s} movimenti di «${a.name}».`:"",e.suggestions=ts(d.data,e.rows,e.accountId).map(o=>Object.assign(o,{on:(e.suggestions.find(l=>l.match===o.match)||o).on})),A()},"imp-sug"(t){tt().suggestions[Number(t.dataset.i)].on=t.checked,A()},"imp-only"(t){tt().onlyCheck=t.checked,A()},"imp-align"(t){tt().alignBalance=t.checked}},actions:{"imp-reset"(){d.ui.imp={step:"pick"},b("importa")},"imp-all"(){tt().showAll=!0,A()},"imp-new-tr"(){const t=tt(),e=Da({name:"Trade Republic",bank:"Trade Republic",type:"broker",color:"#6FD59A",investments:!0,last4:t.file.ibanLast4||"",main:!Y(d.data)});f(a=>a.accounts.push(e)),t.accountId=e.id,me(),A()},"imp-commit"(){const t=tt();if(!t.accountId)return;let e=0;f(i=>{e=ar(i,{accountId:t.accountId,rows:t.rows,suggestions:t.suggestions,alignBalance:t.alignBalance,closingBalance:t.file.closingBalance,holder:t.file.holder,sig:t.file.sig,map:t.file.map})});const a=t.suggestions.filter(i=>i.on).length;t.hadInvest=t.rows.some(i=>i.include&&i.op),t.result=`Importati ${e} movimenti${a?` e aggiunti ${a} programmati`:""}. Saldi, categorie e calendario sono aggiornati.`,t.step="done",q(""),b("importa")}},forms:{"imp-map"(t){const e=tt(),a={};for(const[i]of es){const n=t.get(i);n!==""&&n!=null&&(a[i]=Number(n))}if(!Xn(a))return e.error="Servono almeno la data, l'importo (o entrate/uscite) e il nome o la descrizione.",A();e.error="",e.file.map=a,me(),A()}}});function as(t){if(!t)return"";const e=t.slice(-5);return"compleanno "+I("2000-"+e)+(t.length===10?" "+t.slice(0,4):"")}function cr(t){const e=[t.phone,t.email,as(t.birthday)].filter(Boolean).join(" · ");return`
    <div class="item">
      <div class="avatar">${r(so(t.name))}</div>
      <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r(e||"Nessun recapito")}</div>${t.note?`<div class="sub">${r(t.note)}</div>`:""}</div>
      ${t.phone?`<button class="icon-btn" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero di ${r(t.name)}">${S("copy",16)}</button>`:""}
      <button class="icon-btn" data-action="edit-contact" data-id="${t.id}" aria-label="Modifica ${r(t.name)}">${S("edit",16)}</button>
      <button class="icon-btn" data-action="del-contact" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button>
    </div>`}L("rubrica",{render(){const t=[...d.data.contacts].sort((i,n)=>i.name.localeCompare(n.name,"it")),e=d.ui.contactEdit?d.data.contacts.find(i=>i.id===d.ui.contactEdit):null,a=e&&e.birthday&&e.birthday.length===10?e.birthday:"";return`
      ${W(t.length+" contatti","Rubrica")}
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
        ${e&&e.birthday&&e.birthday.length===5?`<div class="hint">Compleanno salvato senza anno (${r(as(e.birthday))}). Lascia vuota la data per tenerlo così.</div>`:""}
      </section>
      <section class="card">
        ${t.length?`<div class="list">${t.map(cr).join("")}</div>`:'<div class="empty">La rubrica è vuota.</div>'}
      </section>`},actions:{"edit-contact"(t){d.ui.contactEdit=t.dataset.id,b("rubrica"),P("#c-name")},"cancel-contact"(){d.ui.contactEdit=null,b("rubrica")},"del-contact"(t){const e=d.data.contacts.find(a=>a.id===t.dataset.id);e&&!window.confirm(`Eliminare ${e.name} dalla rubrica?`)||f(a=>{a.contacts=a.contacts.filter(i=>i.id!==t.dataset.id)})}},forms:{"save-contact"(t){const e=String(t.get("name")||"").trim();if(!e)return;const a=t.get("id"),i={name:e,phone:String(t.get("phone")||"").trim(),email:String(t.get("email")||"").trim(),note:String(t.get("note")||"").trim()},n=t.get("birthday");f(s=>{if(a){const o=s.contacts.find(l=>l.id===a);Object.assign(o,i),n&&(o.birthday=n)}else s.contacts.push(Object.assign({id:G(),birthday:n||""},i))}),d.ui.contactEdit=null,b("rubrica",{},a?"Contatto aggiornato":"Contatto aggiunto"),P("#c-name")}}});const is=t=>`${I(t)} ${t.slice(0,4)}`;function rr(t,e){const a=ft(t);return`
    <form class="box-soft stack-sm" data-form="loan-settle">
      <input type="hidden" name="id" value="${e.id}">
      <div class="row">
        ${e.what==="soldi"?`
          <label class="field">Importo<input class="input amount" id="ls-amount" name="amount" inputmode="decimal" value="${r(String(Tt(e)).replace(".",","))}"></label>
          ${a.length>1?`<label class="field">${e.dir==="out"?"Arrivati sul conto":"Usciti dal conto"}<select class="input" name="accountId">${at((e.payments||[]).slice(-1)[0]?.accountId||e.accountId||Y(t)?.id)}</select></label>`:`<input type="hidden" name="accountId" value="${a[0]?a[0].id:""}">`}`:""}
        <label class="field">Data<input class="input date" type="date" name="date" value="${k()}"></label>
        <div class="row self-end"><button class="btn primary" type="submit">Conferma</button><button class="btn" type="button" data-action="loan-settle-cancel">Annulla</button></div>
      </div>
      ${e.what==="soldi"?`<div class="hint">Se te ne restituisce solo una parte, scrivi quanto: il resto rimane in sospeso. Il movimento ${e.dir==="out"?"in entrata":"in uscita"} non conta tra entrate e spese del mese.${a.length===1?` Conto: ${r(a[0].name)}.`:""}</div>`:""}
    </form>`}function zi(t,e){const a=d.ui.loanSettle===e.id,i=Tt(e);return`
    <div class="dl-row">
      <div class="item">
        <div class="avatar">${r(e.person.trim().split(/\s+/).slice(0,2).map(n=>n[0]).join("").toUpperCase())}</div>
        <div class="text"><div class="strong">${r(e.person)}</div>
          <div class="hint">${e.what==="soldi"?"":r(e.item)+" · "}dal ${r(is(e.date))}${e.paid?` · già restituiti ${h(e.paid)}`:""}${e.note?" · "+r(e.note):""}</div></div>
        ${e.what==="soldi"?`<span class="money strong">${h(i)}</span>`:'<span class="tag">oggetto</span>'}
        ${a?"":`<button class="btn small" data-action="loan-settle" data-id="${e.id}">${e.what==="soldi"?"Restituiti":"Restituito"}</button>`}
        <button class="icon-btn" data-action="loan-del" data-id="${e.id}" aria-label="Elimina il prestito con ${r(e.person)}">${S("trash",16)}</button>
      </div>
      ${a?rr(t,e):""}
    </div>`}function dr(){const t=d.data,e=t.loans.filter(c=>!c.settled).sort((c,u)=>c.date.localeCompare(u.date)),a=e.filter(c=>c.dir==="out"),i=e.filter(c=>c.dir==="in"),n=t.loans.filter(c=>c.settled).sort((c,u)=>(u.settledAt||"").localeCompare(c.settledAt||"")),s=c=>c.filter(u=>u.what==="soldi").reduce((u,p)=>u+Tt(p),0),o=d.ui.loanDir||"out",l=d.ui.loanWhat||"soldi";return`
    ${W(e.length?`${e.length} in sospeso`:"Nessun prestito in sospeso","Prestiti")}
    <section class="metrics">
      ${j("Ti devono",h(s(a)),"good",a.filter(c=>c.what!=="soldi").length?`+ ${a.filter(c=>c.what!=="soldi").length} oggetti`:"")}
      ${j("Devi",h(s(i)),s(i)?"warn":"",i.filter(c=>c.what!=="soldi").length?`+ ${i.filter(c=>c.what!=="soldi").length} oggetti`:"")}
    </section>
    <div class="split">
      <div class="grow-2 stack stack-lg">
        <section class="card"><h2>Ti devono</h2>${a.length?`<div class="list">${a.map(c=>zi(t,c)).join("")}</div>`:'<div class="empty">Nessuno.</div>'}</section>
        <section class="card"><h2>Devi</h2>${i.length?`<div class="list">${i.map(c=>zi(t,c)).join("")}</div>`:'<div class="empty">Niente da restituire.</div>'}</section>
        ${n.length?`<section class="card"><div class="card-head"><h2>Chiusi</h2><span class="sub">${n.length}</span></div>
          <div class="list">${n.slice(0,20).map(c=>`<div class="item done"><div class="text"><div>${r(c.person)} · ${c.what==="soldi"?h(c.amount):r(c.item)}</div>
            <div class="hint">${c.dir==="out"?"restituito a te":"restituito da te"} il ${r(is(c.settledAt||c.date))}${(c.payments||[]).length?" su "+r([...new Set(c.payments.map(u=>nt(t,u.accountId)))].join(", ")):""}</div></div>
            <button class="icon-btn" data-action="loan-del" data-id="${c.id}" aria-label="Elimina">${S("trash",16)}</button></div>`).join("")}</div></section>`:""}
      </div>
      <form class="card stack grow-1" data-form="loan-add" aria-labelledby="h-loanform">
        <h2 id="h-loanform">Nuovo prestito</h2>
        <div class="pills small" role="radiogroup" aria-label="Direzione">
          <label class="pill"><input type="radio" name="dir" value="out" data-change="loan-dir" ${o==="out"?"checked":""}><span>Ho prestato</span></label>
          <label class="pill"><input type="radio" name="dir" value="in" data-change="loan-dir" ${o==="in"?"checked":""}><span>Mi hanno prestato</span></label>
        </div>
        <div class="pills small" role="radiogroup" aria-label="Cosa">
          <label class="pill"><input type="radio" name="what" value="soldi" data-change="loan-what" ${l==="soldi"?"checked":""}><span>Soldi</span></label>
          <label class="pill"><input type="radio" name="what" value="oggetto" data-change="loan-what" ${l!=="soldi"?"checked":""}><span>Un oggetto</span></label>
        </div>
        <label class="field">${o==="out"?"A chi":"Da chi"}<input class="input" id="loan-person" name="person" list="loan-people" placeholder="Nome" required></label>
        <datalist id="loan-people">${[...new Set([...t.contacts.map(c=>c.name),...t.loans.map(c=>c.person)])].map(c=>`<option value="${r(c)}">`).join("")}</datalist>
        ${l==="soldi"?'<label class="field">Importo (€)<input class="input" name="amount" inputmode="decimal" placeholder="20,00" required></label>':'<label class="field">Cosa<input class="input" name="item" placeholder="es. trapano, libro" required></label>'}
        <div class="form-grid two">
          <label class="field">Data<input class="input" type="date" name="date" value="${k()}"></label>
          <label class="field">Nota<input class="input" name="note" placeholder="facoltativa"></label>
        </div>
        ${l==="soldi"?`<label class="check small"><input type="checkbox" name="record" data-change="loan-record" ${d.ui.loanRecord?"checked":""}>Registra anche ${o==="out"?"l'uscita dal":"l'entrata sul"} conto</label>
          ${d.ui.loanRecord?`<select class="input" name="accountId" aria-label="Conto">${at(Y(t)?.id)}</select>`:""}
          <div class="hint">Lascialo spento se il movimento arriverà importando l'estratto conto, per non contarlo due volte.</div>`:""}
        <button class="btn primary self-start" type="submit">Aggiungi</button>
      </form>
    </div>`}const aa=t=>d.data.loans.find(e=>e.id===t);L("prestiti",{render:dr,changes:{"loan-dir"(t){d.ui.loanDir=t.value,b("prestiti")},"loan-what"(t){d.ui.loanWhat=t.value,b("prestiti")},"loan-record"(t){d.ui.loanRecord=t.checked,b("prestiti")}},actions:{"loan-settle"(t){const e=aa(t.dataset.id);e&&(d.ui.loanSettle=e.id,b("prestiti"),P("#ls-amount"))},"loan-settle-cancel"(){d.ui.loanSettle=null,b("prestiti")},"loan-del"(t){const e=aa(t.dataset.id);!e||!window.confirm(`Eliminare il prestito con ${e.person}? I movimenti già registrati sui conti restano.`)||f(a=>{a.loans=a.loans.filter(i=>i.id!==e.id),K(a,e.id)})}},forms:{"loan-add"(t,e){const a=String(t.get("person")||"").trim();if(!a)return D("Scrivi il nome."),A();const i=t.get("dir")==="in"?"in":"out",n=t.get("what")==="oggetto"?"oggetto":"soldi",s=t.get("date")||k(),o=String(t.get("note")||"").trim();let l=0,c="";if(n==="soldi"){if(l=U(t.get("amount")),!(l>0)){const g=e.querySelector("[name=amount]");g.setCustomValidity("Inserisci un importo, es. 20"),g.reportValidity(),g.addEventListener("input",()=>g.setCustomValidity(""),{once:!0});return}}else if(c=String(t.get("item")||"").trim(),!c)return D("Scrivi cosa hai prestato."),A();const u=n==="soldi"&&t.get("record")==="on",p=u?t.get("accountId")||Y(d.data)?.id:null;f(g=>{const m=Gi({person:a,dir:i,what:n,amount:l,item:c,date:s,note:o,accountId:p});u&&p&&g.transactions.push({id:G(),accountId:p,date:s,type:i==="out"?"out":"in",amount:l,category:"Prestiti",note:(i==="out"?"Prestito a ":"Prestito da ")+a,transfer:!1,invest:!1,loan:!0,loanId:m.id,createdAt:new Date().toISOString()}),g.loans.push(m)}),d.ui.loanRecord=!1,b("prestiti",{},i==="out"?`Segnato: ${a} ti deve ${n==="soldi"?h(l):c}`:`Segnato: devi ${n==="soldi"?h(l):c} a ${a}`),P("#loan-person")},"loan-settle"(t,e){const a=aa(t.get("id"));if(!a)return;const i=t.get("date")||k();let n=0;if(a.what==="soldi"){n=U(t.get("amount"));const o=e.querySelector("[name=amount]"),l=c=>{o.setCustomValidity(c),o.reportValidity(),o.addEventListener("input",()=>o.setCustomValidity(""),{once:!0})};if(!(n>0))return l("Inserisci un importo");if(n>Tt(a)+.004)return l(`Restano ${h(Tt(a))}`);if(!t.get("accountId"))return D("Crea prima un conto in Finanze."),A()}f(o=>oo(o,a,{amount:n,accountId:t.get("accountId"),date:i})),d.ui.loanSettle=null;const s=a.settled?`Prestito con ${a.person} chiuso`:`Registrati ${h(n)}: restano ${h(Tt(a))}`;b("prestiti",{},a.what==="soldi"?s+` · ${a.dir==="out"?"entrata su":"uscita da"} ${nt(d.data,t.get("accountId"))}`:s)}}});const Di=["Film","Serie","Libro","Altro"],ns={Film:["da vedere","visto"],Serie:["da vedere","vista"],Libro:["da leggere","letto"],Altro:["da fare","fatto"]};function ia(t){const e=t.status;return`
    <div class="item">
      <span class="tag">${r(t.kind)}</span>
      <div class="text"><div>${r(t.title)}</div>${t.note?`<div class="hint">${r(t.note)}</div>`:""}${e==="fatto"?`<div class="hint">${r(ns[t.kind]?.[1]||"fatto")} il ${r(I(t.doneAt||k()))}</div>`:""}</div>
      ${e==="fatto"?`<span class="stars" role="group" aria-label="Voto">${[1,2,3,4,5].map(a=>`<button class="star ${t.rating>=a?"on":""}" data-action="watch-rate" data-id="${t.id}" data-n="${a}" aria-label="${a} stelle" aria-pressed="${t.rating===a}">★</button>`).join("")}</span>`:e==="da"?`<button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="corso">Iniziato</button><button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="fatto">Finito</button>`:`<button class="btn small" data-action="watch-status" data-id="${t.id}" data-s="fatto">Finito</button>`}
      <button class="icon-btn" data-action="watch-del" data-id="${t.id}" aria-label="Elimina ${r(t.title)}">${S("trash",16)}</button>
    </div>`}function ur(){const t=d.data,e=d.ui.watchKind||"",a=t.watchlist.filter(l=>!e||l.kind===e),i=a.filter(l=>l.status==="corso"),n=a.filter(l=>l.status==="da").sort((l,c)=>(c.createdAt||"").localeCompare(l.createdAt||"")),s=a.filter(l=>l.status==="fatto").sort((l,c)=>(c.doneAt||"").localeCompare(l.doneAt||"")),o=d.ui.watchPick?t.watchlist.find(l=>l.id===d.ui.watchPick):null;return`
    ${W(`${t.watchlist.filter(l=>l.status!=="fatto").length} in lista`,"Da vedere e leggere",["",...Di].map(l=>`<button class="chip ${e===l?"":"off"}" data-action="watch-kind" data-k="${l}" aria-pressed="${e===l}">${l||"Tutto"}</button>`).join(""))}
    <section class="card">
      <form class="row" data-form="watch-add">
        <label class="sr-only" for="w-title">Titolo</label>
        <input class="input grow" id="w-title" name="title" placeholder="Titolo" required autocomplete="off">
        <label class="sr-only" for="w-kind">Tipo</label>
        <select class="input" id="w-kind" name="kind">${Di.map(l=>`<option ${(e||"Film")===l?"selected":""}>${l}</option>`).join("")}</select>
        <label class="sr-only" for="w-note">Nota</label>
        <input class="input grow" id="w-note" name="note" placeholder="Nota (es. consigliato da Marco, su Netflix)">
        <button class="btn primary" type="submit">Aggiungi</button>
      </form>
      ${n.length?`<div class="row"><button class="btn small" data-action="watch-pick">🎲 Pesca a caso</button>${o?`<span class="sub">Stasera: <strong>${r(o.title)}</strong> <span class="hint">(${r(o.kind)})</span></span>`:""}</div>`:""}
    </section>
    ${i.length?`<section class="card"><h2>In corso</h2><div class="list">${i.map(ia).join("")}</div></section>`:""}
    <section class="card"><div class="card-head"><h2>${e?r(ns[e][0]).replace(/^./,l=>l.toUpperCase()):"In lista"}</h2><span class="sub">${n.length}</span></div>
      ${n.length?`<div class="list">${n.map(ia).join("")}</div>`:'<div class="empty">Lista vuota. Aggiungi quello che ti consigliano, così non lo dimentichi.</div>'}
    </section>
    ${s.length?`<section class="card"><div class="card-head"><h2>Finiti</h2><span class="sub">${s.length}</span></div><div class="list">${s.slice(0,d.ui.watchAll?1e3:15).map(ia).join("")}</div>
      ${s.length>15&&!d.ui.watchAll?'<button class="link" data-action="watch-all">Mostra tutti</button>':""}</section>`:""}`}const na=t=>d.data.watchlist.find(e=>e.id===t);L("liste",{render:ur,actions:{"watch-kind"(t){d.ui.watchKind=t.dataset.k,d.ui.watchPick=null,b("liste")},"watch-all"(){d.ui.watchAll=!0,b("liste")},"watch-pick"(){const t=d.ui.watchKind||"",e=d.data.watchlist.filter(i=>i.status==="da"&&(!t||i.kind===t)&&i.id!==d.ui.watchPick),a=e.length?e:d.data.watchlist.filter(i=>i.status==="da"&&(!t||i.kind===t));d.ui.watchPick=a.length?a[Math.floor(Math.random()*a.length)].id:null,b("liste")},"watch-status"(t){const e=na(t.dataset.id);e&&(f(()=>{e.status=t.dataset.s,e.doneAt=e.status==="fatto"?k():null,O(e)}),t.dataset.s==="fatto"&&q(`${e.title}: com'era? Dagli un voto`))},"watch-rate"(t){const e=na(t.dataset.id);if(!e)return;const a=Number(t.dataset.n);f(()=>{e.rating=e.rating===a?null:a,O(e)})},"watch-del"(t){const e=na(t.dataset.id);!e||!window.confirm(`Togliere «${e.title}» dalla lista?`)||(d.ui.watchPick===e.id&&(d.ui.watchPick=null),f(a=>{a.watchlist=a.watchlist.filter(i=>i.id!==e.id),K(a,e.id)}))}},forms:{"watch-add"(t){const e=String(t.get("title")||"").trim();if(!e)return D("Scrivi il titolo."),A();const a=t.get("kind")||"Film",i=d.data.watchlist.find(n=>n.title.toLowerCase()===e.toLowerCase()&&n.kind===a);if(i){b("liste",{},`${i.title} è già in lista`);return}f(n=>n.watchlist.push(Ui({title:e,kind:a,note:String(t.get("note")||"").trim()}))),P("#w-title")}}});const sa=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];async function pr(t,e){const a=await e.getDocument({data:new Uint8Array(t),isEvalSupported:!1}).promise,i=await a.getPage(1),n=i.getViewport({scale:1});return{items:(await i.getTextContent()).items.filter(l=>l.str&&l.str.trim()).map(l=>({s:l.str.trim(),x:l.transform[4]/n.width,y:1-l.transform[5]/n.height})),pages:a.numPages}}const mr=/^-?\d{1,3}(\.\d{3})*,\d{2,5}$|^-?\d+,\d{2,5}$/;function it(t,e,a,i,n){const s=t.filter(o=>o.x>=e&&o.x<a&&o.y>=i&&o.y<n&&mr.test(o.s)).sort((o,l)=>o.y-l.y||o.x-l.x)[0];return s?F(s.s):null}const gr={ferie:.214,permessi:.229,rol:.243,exfest:.257},vr={prec:[.6,.69],mat:[.69,.78],god:[.78,.87],res:[.87,.99]};function ge(t,e){const a=gr[e],i={};for(const[n,[s,o]]of Object.entries(vr))i[n]=it(t,s,o,a-.006,a+.006);return i}function hr(t){if(!t.length)return{format:"immagine"};const e=t.map(l=>l.s).join(" "),a=t.find(l=>new RegExp(`^(${sa.join("|")})\\s+(\\d{4})$`,"i").test(l.s));let i=null;if(a){const[,l,c]=new RegExp(`^(${sa.join("|")})\\s+(\\d{4})$`,"i").exec(a.s);i=`${c}-${String(sa.indexOf(l.toLowerCase())+1).padStart(2,"0")}`}const n=/TREDICESIMA|13\s*\^?\s*MA\b|13ESIMA/i.test(e)?"tredicesima":/QUATTORDICESIMA|14\s*\^?\s*MA\b/i.test(e)?"quattordicesima":"mensile";if(!/Ranocchi/i.test(e))return{format:"sconosciuto",month:i,kind:n};const s={ferie:ge(t,"ferie"),permessi:ge(t,"permessi"),rol:ge(t,"rol"),exfest:ge(t,"exfest")},o=s.rol.mat!=null||s.rol.res!=null||s.rol.prec!=null?s.rol:s.permessi;return{format:"ranocchi",month:i,kind:n,netto:it(t,.6,.8,.825,.85),lordo:it(t,.47,.6,.612,.626),contributi:it(t,.62,.78,.667,.681),imponibile:it(t,.24,.34,.695,.709),irpef:it(t,.62,.78,.695,.709),addizionali:it(t,.62,.78,.781,.795),tfr:it(t,.14,.25,.928,.942),tfrFondo:it(t,.02,.13,.942,.956),oreLavorate:it(t,.44,.53,.928,.942),ggLavorati:it(t,.44,.53,.942,.956),annoImponibileIrpef:it(t,.33,.43,.912,.926),annoIrpef:it(t,.64,.77,.912,.926),annoImponibileInps:it(t,.02,.13,.912,.926),ferie:{prec:s.ferie.prec,mat:s.ferie.mat,god:s.ferie.god,res:s.ferie.res},permessi:{prec:o.prec,mat:o.mat,god:o.god,res:o.res},exfest:{prec:s.exfest.prec,mat:s.exfest.mat,god:s.exfest.god,res:s.exfest.res}}}async function br(t,e){const{items:a}=await pr(await t.arrayBuffer(),e);return hr(a)}const ss={mensile:"Mensile",tredicesima:"Tredicesima",quattordicesima:"Quattordicesima"},Fa=t=>t.settings.workHoursDay||8,Kt=t=>t==null?"—":t.toLocaleString("it-IT",{maximumFractionDigits:2}),oa=(t,e)=>e==null?"":`≈ ${(e/Fa(t)).toLocaleString("it-IT",{maximumFractionDigits:1})} giorni`,ka=t=>t==null?"":String(t).replace(".",","),os=[["netto","Netto in busta"],["lordo","Lordo (totale competenze)"],["contributi","Contributi"],["irpef","IRPEF del mese"],["addizionali","Addizionali"],["tfr","TFR del mese"]],ls=[["ferie","Ferie"],["permessi","Permessi / ROL"],["exfest","Ex festività"]],Sa=[["prec","Anni prec."],["mat","Maturate"],["god","Godute"],["res","Residue"]];function fr(t,e){return`
    <form class="card stack" data-form="pay-save" aria-labelledby="h-payform">
      <div class="card-head"><h2 id="h-payform">${!e.id||!t.payslips.some(i=>i.id===e.id)?"Controlla e salva":"Modifica busta paga"}</h2><button class="link" type="button" data-action="pay-cancel">Annulla</button></div>
      ${e.source==="pdf"?'<div class="banner ok">Letta dal PDF: controlla che i numeri corrispondano alla busta, poi salva.</div>':""}
      ${e.source==="immagine"?'<div class="banner warn">Questo PDF è una foto o una scansione: i numeri non si possono leggere in automatico. Copiali qui guardando la busta (bastano quelli che ti interessano).</div>':""}
      ${e.source==="sconosciuto"?`<div class="banner warn">Non riconosco l'impaginazione di questa busta: inserisci i numeri a mano.</div>`:""}
      <div class="form-grid two">
        <label class="field">Mese<input class="input" type="month" name="month" value="${r(e.month||"")}" required></label>
        <label class="field">Tipo<select class="input" name="kind">${Object.entries(ss).map(([i,n])=>`<option value="${i}" ${e.kind===i?"selected":""}>${n}</option>`).join("")}</select></label>
        ${os.map(([i,n])=>`<label class="field">${n} (€)<input class="input" name="${i}" inputmode="decimal" value="${r(ka(e[i]))}"></label>`).join("")}
      </div>
      <div class="table-wrap"><table class="tx small pay-hours">
        <thead><tr><th>Ore</th>${Sa.map(([,i])=>`<th class="r">${i}</th>`).join("")}</tr></thead>
        <tbody>${ls.map(([i,n])=>`<tr><td>${n}</td>${Sa.map(([s,o])=>`<td class="r"><label class="sr-only" for="h-${i}-${s}">${n} ${o}</label><input class="input slim num" id="h-${i}-${s}" name="${i}.${s}" inputmode="decimal" value="${r(ka(e[i]?.[s]))}"></td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      <div class="hint">Ferie e permessi sono in ore, come sulla busta. In giorni li calcolo io (${Fa(t)} ore al giorno).</div>
      <label class="field">Nota<input class="input" name="note" value="${r(e.note||"")}" placeholder="es. aumento di livello, premio"></label>
      <button class="btn primary self-start" type="submit">Salva</button>
    </form>`}function $r(t){const e={};for(const a of t){const i=a.month.slice(0,4),n=e[i]||(e[i]={y:i,netto:0,lordo:0,n:0,irpefAnno:null,last:""});n.netto+=a.netto||0,n.lordo+=a.lordo||0,n.n++,a.annoIrpef!=null&&a.month>=n.last&&(n.irpefAnno=a.annoIrpef,n.last=a.month)}return Object.values(e).sort((a,i)=>i.y.localeCompare(a.y)).map(a=>Object.assign(a,{netto:H(a.netto),lordo:H(a.lordo)}))}function yr(){const t=d.data,e=lo(t),a=co(t),i=d.ui.payDraft,n=e.filter(o=>o.kind==="mensile"&&o.netto!=null).slice(-24),s=n.length?H(n.reduce((o,l)=>o+l.netto,0)/n.length):null;return`
    ${W(e.length?`${e.length} buste paga`:"Buste paga, ferie e permessi","Lavoro")}
    ${a?`<section class="metrics">
      ${j(`Netto ${X(a.month).toLowerCase()}`,a.netto!=null?h(a.netto):"—","",s!=null&&n.length>1?`media ${h(s)}`:"")}
      ${j("Ferie residue",a.ferie?.res!=null?`${Kt(a.ferie.res)} ore`:"—","accent",oa(t,a.ferie?.res))}
      ${j("Permessi / ROL residui",a.permessi?.res!=null?`${Kt(a.permessi.res)} ore`:"—","",oa(t,a.permessi?.res))}
      ${j("Ex festività residue",a.exfest?.res!=null?`${Kt(a.exfest.res)} ore`:"—","",oa(t,a.exfest?.res))}
      ${a.tfrFondo!=null?j("TFR accumulato in azienda",h(a.tfrFondo)):""}
    </section>`:""}
    ${i?fr(t,i):`
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
      ${Fe(n.map(o=>({label:X(o.month).slice(0,3).toLowerCase()+" "+o.month.slice(2,4),value:o.netto,title:X(o.month),valueText:h(o.netto),sub:o.lordo!=null?`lordo ${h(o.lordo)}`:""})),{id:"netto"})}</section>`:""}
    ${e.length?`<section class="card">
      <h2>Per anno</h2>
      <div class="table-wrap"><table class="tx small"><thead><tr><th>Anno</th><th class="r">Buste</th><th class="r">Netto</th><th class="r">Lordo</th><th class="r">IRPEF dell'anno</th></tr></thead>
      <tbody>${$r(e).map(o=>`<tr><td>${o.y}</td><td class="r">${o.n}</td><td class="r">${h(o.netto)}</td><td class="r">${o.lordo?h(o.lordo):"—"}</td><td class="r">${o.irpefAnno!=null?h(o.irpefAnno):"—"}</td></tr>`).join("")}</tbody></table></div>
      <div class="hint">L'IRPEF dell'anno è quella progressiva dell'ultima busta letta di quell'anno.</div>
    </section>
    <section class="card">
      <h2>Tutte le buste</h2>
      <div class="table-wrap"><table class="tx small"><thead><tr><th>Mese</th><th>Tipo</th><th class="r">Netto</th><th class="r">Lordo</th><th class="r">Ferie res.</th><th class="r">Permessi res.</th><th></th></tr></thead>
      <tbody>${[...e].reverse().map(o=>`<tr><td>${r(X(o.month))}</td><td>${o.kind==="mensile"?"":`<span class="tag">${ss[o.kind]}</span>`}${o.source==="pdf"?"":' <span class="hint">a mano</span>'}</td>
        <td class="r">${o.netto!=null?h(o.netto):"—"}</td><td class="r">${o.lordo!=null?h(o.lordo):"—"}</td>
        <td class="r">${Kt(o.ferie?.res)}</td><td class="r">${Kt(o.permessi?.res)}</td>
        <td class="r"><div class="row nowrap gap-sm" style="justify-content: flex-end"><button class="icon-btn" data-action="pay-edit" data-id="${o.id}" aria-label="Modifica ${r(X(o.month))}">${S("edit",16)}</button><button class="icon-btn" data-action="pay-del" data-id="${o.id}" aria-label="Elimina ${r(X(o.month))}">${S("trash",16)}</button></div></td></tr>`).join("")}</tbody></table></div>
    </section>
    <section class="card">
      <form class="row" data-form="pay-hours">
        <label class="field inline">Ore in una giornata di lavoro<input class="input slim day" name="h" inputmode="decimal" value="${r(ka(Fa(t)))}"></label>
        <button class="btn small" type="submit">Salva</button>
      </form>
    </section>`:""}`}const ji=t=>{const e=String(t??"").trim();if(!e)return null;const a=U(e);return Number.isFinite(a)?a:NaN};L("lavoro",{render:yr,afterRender:Be,changes:{async"pay-file"(t){const e=[...t.files];if(!e.length)return;let a;try{a=await Jn()}catch(c){return D("Non riesco a caricare il lettore PDF: "+c),A()}const i=[];for(const c of e)try{i.push({name:c.name,r:await br(c,a)})}catch(u){i.push({name:c.name,r:{format:"errore",error:String(u)}})}const n=i.filter(c=>c.r.format==="ranocchi"&&c.r.month),s=i.filter(c=>!(c.r.format==="ranocchi"&&c.r.month));if(n.length>1||n.length&&s.length){let c=0,u=0;f(g=>{for(const{r:m}of n){const y=Object.assign({},m,{source:"pdf"});delete y.format;const w=g.payslips.find(z=>z.month===m.month&&z.kind===m.kind);w?(Object.assign(w,y),O(w),u++):(g.payslips.push(Wt(y)),c++)}});const p=`${c} buste lette${u?`, ${u} aggiornate`:""}`+(s.length?`. Da inserire a mano: ${s.map(g=>g.name).join(", ")}`:"");if(s.length){const g=s[0].r;d.ui.payDraft=Object.assign(Wt({month:g.month||"",kind:g.kind||"mensile"}),{id:null,source:g.format==="immagine"?"immagine":"sconosciuto"})}b("lavoro",{},p);return}const o=i[0].r;if(o.format==="errore")return D(`Non riesco a leggere ${i[0].name}: ${o.error}`),A();const l=Object.assign({},o,{source:o.format==="ranocchi"?"pdf":o.format==="immagine"?"immagine":"sconosciuto"});delete l.format,d.ui.payDraft=Object.assign(Wt(l),{id:null}),b("lavoro")}},actions:{"pay-manual"(){d.ui.payDraft=Object.assign(Wt({month:""}),{id:null}),b("lavoro"),P("input[name=month]")},"pay-cancel"(){d.ui.payDraft=null,b("lavoro")},"pay-edit"(t){const e=d.data.payslips.find(a=>a.id===t.dataset.id);e&&(d.ui.payDraft=JSON.parse(JSON.stringify(e)),b("lavoro"),window.scrollTo(0,0))},"pay-del"(t){const e=d.data.payslips.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare la busta di ${X(e.month).toLowerCase()}?`)||f(a=>{a.payslips=a.payslips.filter(i=>i.id!==e.id),K(a,e.id)})}},forms:{"pay-save"(t,e){const a=d.ui.payDraft||{},i=t.get("month");if(!/^\d{4}-\d{2}$/.test(i||""))return D("Indica il mese della busta."),A();const n={};for(const[u]of os)n[u]=ji(t.get(u));for(const[u]of ls){n[u]=Object.assign({},a[u]);for(const[p]of Sa)n[u][p]=ji(t.get(`${u}.${p}`))}if(Object.entries(n).find(([,u])=>typeof u=="object"&&u?Object.values(u).some(Number.isNaN):Number.isNaN(u)))return D("Controlla i numeri: usa la virgola per i decimali, es. 1.733,77"),A();const o=t.get("kind")||"mensile",l=Object.assign({},a,n,{month:i,kind:o,note:String(t.get("note")||"").trim()});let c=!1;f(u=>{const p=a.id&&u.payslips.find(m=>m.id===a.id),g=u.payslips.find(m=>m.month===i&&m.kind===o&&m!==p);if(g&&!p){Object.assign(g,l,{id:g.id}),O(g),c=!0;return}if(p){Object.assign(p,l,{id:p.id}),O(p);return}delete l.id,u.payslips.push(Wt(l))}),d.ui.payDraft=null,b("lavoro",{},c?`${X(i)}: aggiornata la busta che c'era già`:`${X(i)} salvata`)},"pay-hours"(t){const e=U(t.get("h"));if(!(e>0&&e<=24))return D("Scrivi le ore di una giornata, es. 8"),A();f(a=>{a.settings.workHoursDay=e}),q("Salvato")}}});const zt=t=>t==null||t===""?"":String(t).replace(".",","),cs=t=>t?` +${zt(t)} kg`:"",wr=t=>t==="sec"?"s":"",rs=t=>t.sets.filter(e=>e.done).map(e=>`${e.reps??"?"}${wr(t.unit)}${cs(e.kg)}`).join(" · ");function Ni(t,e){try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([e],{type:"text/plain;charset=utf-8"})),a.download=t,document.body.append(a),a.click(),setTimeout(()=>{URL.revokeObjectURL(a.href),a.remove()},1e3)}catch{q('Download non riuscito: usa "Copia"')}}const kr=t=>(String(t||"scheda").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"scheda")+".txt";let Vt=null;function Ue(){return d.ui.trRestEnd?Math.ceil((d.ui.trRestEnd-Date.now())/1e3):null}const Sr=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`;function ds(){const t=Ue();return t==null?"":t>0?`<span>Recupero</span><strong class="tr-clock">${Sr(t)}</strong><button class="btn small" data-action="tr-rest-skip">Salta</button>`:'<strong>Vai con la prossima serie</strong><button class="btn small" data-action="tr-rest-skip">OK</button>'}function fe(){const t=document.getElementById("tr-rest");if(!t){clearInterval(Vt),Vt=null;return}const e=Ue();t.hidden=e==null,t.classList.toggle("go",e!=null&&e<=0),t.innerHTML=ds(),e===0&&navigator.vibrate&&navigator.vibrate([200,100,200])}function xr(t){t&&(d.ui.trRestEnd=Date.now()+t*1e3,Vt||(Vt=setInterval(fe,1e3)))}function Ar(t,e){const a=t.plans.find(o=>o.id===e.planId),i=Math.max(0,Math.round((Date.now()-new Date(e.startedAt))/6e4)),n=e.exercises.reduce((o,l)=>o+l.sets.filter(c=>c.done).length,0),s=e.exercises.reduce((o,l)=>o+l.sets.length,0);return`
    <section class="card tr-session" aria-labelledby="h-sess">
      <div class="card-head"><h2 id="h-sess">Giorno ${r(e.dayName)}</h2><span class="sub">${r(e.planName)} · iniziato ${i} min fa · ${n}/${s} serie</span></div>
      <div class="progress"><div style="width:${s?Math.round(n/s*100):0}%"></div></div>
      ${e.exercises.map((o,l)=>{const c=Pn(t,o.name,e.id);return`
        <div class="tr-ex">
          <div class="tr-ex-head">
            <div><strong>${r(o.name)}</strong> <span class="tag">${r(o.target)}</span>${o.note?`<div class="hint">${r(o.note)}</div>`:""}
              ${c?`<div class="hint">Ultima volta (${r(I(c.session.date))}): ${r(rs(c.ex))}${c.ex.variant?" · "+r(c.ex.variant):""}</div>`:'<div class="hint">Prima volta</div>'}</div>
          </div>
          <label class="tr-var"><span class="sr-only">Variante di ${r(o.name)}</span><input class="input" value="${r(o.variant)}" placeholder="Variante (es. piedi rialzati, elastico)" data-change="tr-var" data-e="${l}"></label>
          <div class="tr-sets">
            ${o.sets.map((u,p)=>`
              <div class="tr-set ${u.done?"done":""}">
                <span class="tr-n">${p+1}</span>
                <label class="tr-field"><span class="sr-only">${o.unit==="sec"?"Secondi":"Ripetizioni"} serie ${p+1}</span><input class="input" inputmode="numeric" value="${zt(u.reps)}" placeholder="${o.unit==="sec"?"sec":"rip."}" data-change="tr-set" data-e="${l}" data-i="${p}" data-f="reps"><span class="tr-unit">${o.unit==="sec"?"s":"rip."}</span></label>
                <label class="tr-field"><span class="sr-only">Zavorra serie ${p+1}</span><input class="input" inputmode="decimal" value="${zt(u.kg)}" placeholder="+kg" data-change="tr-set" data-e="${l}" data-i="${p}" data-f="kg"><span class="tr-unit">kg</span></label>
                <button class="tr-check ${u.done?"on":""}" data-action="tr-done" data-e="${l}" data-i="${p}" aria-pressed="${u.done}" aria-label="Serie ${p+1} fatta">${S("check",20)}</button>
              </div>`).join("")}
          </div>
          <div class="row"><button class="link" data-action="tr-add-set" data-e="${l}">+ serie</button>${o.sets.length>1?`<button class="link" data-action="tr-del-set" data-e="${l}">− togli l'ultima</button>`:""}</div>
        </div>`}).join("")}
      <div class="row tr-end">
        <button class="btn primary" data-action="tr-finish">${S("check",18)} Fine allenamento</button>
        <button class="btn" data-action="tr-cancel">Annulla</button>
        ${a&&a.rest?`<span class="hint">Recupero ${a.rest} s dopo ogni serie spuntata</span>`:""}
      </div>
      <div class="tr-rest" id="tr-rest" role="timer" aria-live="off" ${Ue()==null?"hidden":""}>${ds()}</div>
    </section>`}function Ir(t,e){if(!e)return`
      <section class="card attention">
        <div class="card-head"><h2>Nessuna scheda attiva</h2></div>
        <p class="lead">Importa una scheda scritta col modello. Puoi partire da quella proposta per il garage (sbarra, zaino zavorrato e pavimento) e cambiarla quando vuoi.</p>
        <div class="row">
          <button class="btn primary" data-action="tr-use-garage">Usa la scheda Garage</button>
          <button class="btn" data-action="tr-import-open">Importa una scheda</button>
          <button class="btn" data-action="tr-template">Scarica il modello</button>
        </div>
      </section>`;const a=jl(t,e);return`
    <section class="card tr-start">
      <div class="card-head"><h2>Allenamento di oggi</h2><span class="sub">${r(e.name)}</span></div>
      <div class="row">
        <button class="btn primary" data-action="tr-start" data-day="${a.id}">${S("play",18)} Inizia il giorno ${r(a.name)}</button>
        ${e.days.length>1?`<span class="hint">oppure</span>${e.days.filter(i=>i.id!==a.id).map(i=>`<button class="chip" data-action="tr-start" data-day="${i.id}">${r(i.name)}</button>`).join("")}`:""}
      </div>
      <div class="hint">${r(a.note||"")}${a.note?" · ":""}${a.exercises.map(i=>r(i.name)).join(", ")}</div>
    </section>`}function Ba(t){return t.days.map(e=>`
    <div class="tr-day"><div class="strong">Giorno ${r(e.name)}${e.note?` <span class="hint">· ${r(e.note)}</span>`:""}</div>
      <div class="list tight">${e.exercises.map(a=>`<div class="item"><div class="text">${r(a.name)}${a.note?`<div class="hint">${r(a.note)}</div>`:""}</div><span class="tag">${r(zl(a))}</span></div>`).join("")}</div>
    </div>`).join("")}function Cr(t,e){if(!e)return"";const a=t.sessions.filter(i=>i.planId===e.id&&!i.open).length;return`
    <section class="card" aria-labelledby="h-plan">
      <div class="card-head"><h2 id="h-plan">${r(e.name)}</h2><span class="sub">dal ${r(I(e.startedAt))} · ${a} sedut${a===1?"a":"e"} · obiettivo ${e.goal}/settimana</span></div>
      ${e.notes?`<div class="note-box">${e.notes.split(`
`).map(r).join("<br>")}</div>`:""}
      ${Ba(e)}
      <div class="row">
        <button class="btn" data-action="tr-export" data-id="${e.id}">Esporta (per modificarla)</button>
        <button class="btn" data-action="tr-archive" data-id="${e.id}">Dismetti</button>
      </div>
    </section>`}function Er(){const t=d.ui.trImp||{},e=t.text?On(t.text):null,a=Ee(d.data);return`
    <section class="card" aria-labelledby="h-imp">
      <div class="card-head"><h2 id="h-imp">Importa una scheda</h2><button class="link" data-action="tr-import-close">Chiudi</button></div>
      <p class="lead">Scegli un file .txt scritto col modello, oppure incolla il testo qui sotto.${a?` La scheda attuale «${r(a.name)}» andrà tra le schede vecchie, con tutte le sue sedute.`:""}</p>
      <div class="row">
        <label class="btn">${S("upload",18)} Scegli il file<input type="file" accept=".txt,.md,text/plain" data-change="tr-file" hidden></label>
        <button class="btn" data-action="tr-template">Scarica il modello</button>
        <button class="btn" data-action="tr-template-copy">Copia il modello</button>
        <button class="link" data-action="tr-fill-garage">Metti la scheda Garage</button>
      </div>
      <label class="field">Testo della scheda<textarea class="input tr-text" rows="12" data-change="tr-text" placeholder="SCHEDA: …&#10;GIORNO A: …&#10;- Esercizio | 4 x 8-12">${r(t.text||"")}</textarea></label>
      ${e?e.errors.length?`<div class="banner bad" role="alert"><strong>Da sistemare:</strong><br>${e.errors.map(r).join("<br>")}</div>`:`<div class="box-soft stack-sm"><div><strong>${r(e.plan.name)}</strong> · ${e.plan.days.length} giorn${e.plan.days.length===1?"o":"i"} · ${e.plan.days.reduce((i,n)=>i+n.exercises.length,0)} esercizi · obiettivo ${e.plan.goal}/settimana · recupero ${e.plan.rest} s</div>
            ${Ba(e.plan)}
            <div class="row"><button class="btn primary" data-action="tr-import-do">Attiva questa scheda</button></div></div>`:`<div class="hint">Dopo aver scelto il file o incollato il testo vedi qui l'anteprima prima di attivarla.</div>`}
    </section>`}function zr(t){const e=t.plans.find(i=>i.id===d.ui.trExport);if(!e)return"";const a=qn(e);return`
    <section class="card" aria-labelledby="h-exp">
      <div class="card-head"><h2 id="h-exp">Esporta «${r(e.name)}»</h2><button class="link" data-action="tr-export-close">Chiudi</button></div>
      <p class="lead">Modifica il testo dove vuoi e reimportalo con "Importa una scheda": diventa una scheda nuova e questa va tra le vecchie.</p>
      <textarea class="input tr-text" rows="12" readonly>${r(a)}</textarea>
      <div class="row"><button class="btn" data-action="copy" data-text="${r(a)}">Copia</button><button class="btn" data-action="tr-export-dl" data-id="${e.id}">Scarica .txt</button></div>
    </section>`}function Dr(t){const e=Tn(t);return`
    <section class="card" aria-labelledby="h-old">
      <div class="card-head"><h2 id="h-old">Schede vecchie</h2><button class="link" data-action="tr-old">Chiudi</button></div>
      ${e.length?e.map(a=>{const i=t.sessions.filter(n=>n.planId===a.id&&!n.open).length;return`
        <details class="tr-old">
          <summary><strong>${r(a.name)}</strong> <span class="hint">· ${a.startedAt?r(I(a.startedAt))+" "+a.startedAt.slice(0,4):""} → ${a.endedAt?r(I(a.endedAt))+" "+a.endedAt.slice(0,4):""} · ${i} sedut${i===1?"a":"e"}</span></summary>
          ${a.notes?`<div class="note-box">${a.notes.split(`
`).map(r).join("<br>")}</div>`:""}
          ${Ba(a)}
          <div class="row">
            <button class="btn" data-action="tr-reactivate" data-id="${a.id}">Riattiva</button>
            <button class="btn" data-action="tr-export" data-id="${a.id}">Esporta</button>
            <button class="btn danger" data-action="tr-plan-del" data-id="${a.id}">Elimina</button>
          </div>
        </details>`}).join(""):'<div class="empty">Ancora nessuna. Quando importi una scheda nuova o dismetti quella attuale, la trovi qui con le sue sedute.</div>'}
    </section>`}const Oi={reps:"Serie migliore",kg:"Zavorra massima",total:"Totale ripetizioni"};function jr(t){const e=Rn(t);if(!e.size)return'<section class="card"><h2>Progressi</h2><div class="empty">Dopo i primi allenamenti qui vedi, esercizio per esercizio, ripetizioni e zavorra nel tempo.</div></section>';const a=e.has(d.ui.trEx)?d.ui.trEx:e.keys().next().value,i=e.get(a),n=i.unit==="sec",s=d.ui.trMetric in Oi?d.ui.trMetric:"reps",o=Ln(t,a).slice(-30),l=s==="kg"?" kg":n?" s":" rip.",c=p=>s==="kg"?p.maxKg:s==="total"?p.total:p.maxReps,u=o.map(p=>({label:I(p.date),value:c(p),title:`${I(p.date)} ${p.date.slice(0,4)}${p.variant?" · "+p.variant:""}`,valueText:zt(c(p))+l,sub:`${p.sets} serie, migliore ${p.best.reps}${n?" s":""}${cs(p.best.kg)}`}));return`
    <section class="card" aria-labelledby="h-prog">
      <div class="card-head"><h2 id="h-prog">Progressi</h2>
        <label class="sr-only" for="tr-ex">Esercizio</label>
        <select class="input slim" id="tr-ex" data-change="tr-ex">${[...e].map(([p,g])=>`<option value="${r(p)}" ${p===a?"selected":""}>${r(g.name)}</option>`).join("")}</select></div>
      <div class="pills small">${Object.entries(Oi).map(([p,g])=>`<button class="chip ${p===s?"":"off"}" data-action="tr-metric" data-k="${p}" aria-pressed="${p===s}">${p==="reps"&&n?"Tenuta migliore":p==="total"&&n?"Secondi totali":g}</button>`).join("")}</div>
      ${u.length>1?Fe(u,{id:"tr-prog",fmt:p=>zt(Math.round(p*10)/10)+l}):`<div class="empty">Serve almeno un altro allenamento con ${r(i.name)} per il grafico.</div>`}
    </section>`}function Nr(t){const e=ql(t);return e.length?`
    <section class="card" aria-labelledby="h-rec">
      <div class="card-head"><h2 id="h-rec">Record</h2><span class="sub">migliore serie e zavorra più alta</span></div>
      <div class="list tight">${e.map(a=>`
        <div class="item"><div class="text">${r(a.name)}<div class="hint">${a.times} volt${a.times===1?"a":"e"}</div></div>
          <span class="money" title="${r(I(a.repsDate))}">${a.reps}${a.unit==="sec"?" s":" rip."}</span>
          ${a.kg?`<span class="tag" title="${r(I(a.kgDate))}">+${zt(a.kg)} kg</span>`:""}</div>`).join("")}</div>
    </section>`:""}function Or(t){const e=mt(t).slice(0,d.ui.trAll?200:8);if(!e.length)return"";const a=mt(t).length;return`
    <section class="card" aria-labelledby="h-hist">
      <div class="card-head"><h2 id="h-hist">Ultimi allenamenti</h2><span class="sub">${a} in tutto</span></div>
      ${e.map(i=>`
        <details class="tr-hist">
          <summary><span class="when">${r(I(i.date))}</span> <strong>Giorno ${r(i.dayName)}</strong> <span class="hint">· ${r(i.planName)}${li(i)?" · "+li(i)+" min":""}</span></summary>
          <div class="list tight">${i.exercises.map(n=>`<div class="item"><div class="text">${r(n.name)}${n.variant?` <span class="hint">· ${r(n.variant)}</span>`:""}</div><span class="hint">${r(rs(n))}</span></div>`).join("")}</div>
          <button class="link" data-action="tr-sess-del" data-id="${i.id}">Elimina questo allenamento</button>
        </details>`).join("")}
      ${a>e.length?'<button class="link" data-action="tr-all">Mostra tutti</button>':""}
    </section>`}function qr(t,e){const a=La(k()),i=[];for(let s=9;s>=0;s--){const o=M(a,-7*s),l=ce(t,o);i.push({label:I(o),value:l,title:`Settimana del ${I(o)}`,valueText:`${l} allenament${l===1?"o":"i"}`,sub:l>=e?"obiettivo raggiunto":`obiettivo ${e}`,partial:s===0})}return`
    <section class="card" aria-labelledby="h-weeks">
      <div class="card-head"><h2 id="h-weeks">Settimane</h2><span class="sub">obiettivo raggiunto ${i.slice(0,-1).filter(s=>s.value>=e).length} volte su 9</span></div>
      ${Pa(i,{id:"tr-weeks",fmt:s=>Number.isInteger(s)?String(s):""})}
      <div class="hint">Contano le sedute della scheda e le altre attività segnate in Salute (corsa, calcetto…).</div>
    </section>`}function Tr(){const t=d.data,e=Ee(t),a=Mn(t),i=e?e.goal:3,n=ce(t,La(k())),s=mt(t)[0],o=Tn(t).length;return`
    ${W("Corpo e salute","Allenamento",`
      <button class="btn" data-action="tr-import-open">${S("upload",18)} Importa una scheda</button>
      <button class="btn ${d.ui.trOld?"on":""}" data-action="tr-old">Schede vecchie${o?` (${o})`:""}</button>`)}
    ${d.ui.trImp?Er():""}
    ${d.ui.trExport?zr(t):""}
    ${d.ui.trOld?Dr(t):""}
    ${a?Ar(t,a):`
      <section class="metrics">
        ${j("Questa settimana",`${n}/${i}`,n>=i?"good":"",`<div class="progress ${n>=i?"":"near"}"><div style="width:${Math.min(100,Math.round(n/i*100))}%"></div></div>`)}
        ${j("Ultimo allenamento",s?r(I(s.date)):"—","",s?"giorno "+r(s.dayName):"non ancora")}
        ${j("Allenamenti in tutto",String(mt(t).length))}
      </section>
      ${Ir(t,e)}`}
    <div class="grid">
      ${jr(t)}
      ${Nr(t)}
      ${qr(t,i)}
      ${Or(t)}
      ${Cr(t,e)}
    </div>`}const vt=()=>Mn(d.data);L("allenamento",{render:Tr,afterRender(){Be(),Ue()!=null&&!Vt&&(Vt=setInterval(fe,1e3))},actions:{"tr-import-open"(){d.ui.trImp=d.ui.trImp||{text:""},d.ui.trExport=null,b("allenamento")},"tr-import-close"(){d.ui.trImp=null,b("allenamento")},"tr-fill-garage"(){d.ui.trImp={text:ci},A()},"tr-use-garage"(){d.ui.trImp={text:ci},b("allenamento")},"tr-template"(){Ni("modello-scheda.txt",si)},async"tr-template-copy"(){try{await navigator.clipboard.writeText(si),q("Modello copiato: incollalo in Note o in un file .txt")}catch{q("Copia non riuscita")}A()},"tr-import-do"(){const{plan:t,errors:e}=On(d.ui.trImp?.text||"");e.length||(f(a=>oi(a,t)),d.ui.trImp=null,b("allenamento",{},`Scheda «${t.name}» attiva`))},"tr-export"(t){d.ui.trExport=t.dataset.id,d.ui.trImp=null,b("allenamento")},"tr-export-close"(){d.ui.trExport=null,b("allenamento")},"tr-export-dl"(t){const e=d.data.plans.find(a=>a.id===t.dataset.id);e&&Ni(kr(e.name),qn(e))},"tr-archive"(t){const e=d.data.plans.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Dismettere «${e.name}»? Resta tra le schede vecchie con tutte le sedute.`)||(f(a=>Dl(a,e)),q(`«${e.name}» spostata tra le schede vecchie`))},"tr-reactivate"(t){const e=d.data.plans.find(a=>a.id===t.dataset.id);e&&(f(a=>oi(a,e)),d.ui.trOld=!1,b("allenamento",{},`«${e.name}» di nuovo attiva`))},"tr-plan-del"(t){const e=d.data.plans.find(a=>a.id===t.dataset.id);!e||!window.confirm(`Eliminare la scheda «${e.name}»? Gli allenamenti fatti restano nello storico e nei progressi.`)||f(a=>{a.plans=a.plans.filter(i=>i.id!==e.id)})},"tr-old"(){d.ui.trOld=!d.ui.trOld,b("allenamento")},"tr-start"(t){const e=Ee(d.data),a=e&&e.days.find(i=>i.id===t.dataset.day);!a||vt()||(d.ui.trRestEnd=null,f(i=>Nl(i,e,a)),window.scrollTo(0,0))},"tr-done"(t){const e=vt(),a=e&&e.exercises[t.dataset.e]?.sets[t.dataset.i];a&&(f(()=>{a.done=!a.done}),a.done?xr(d.data.plans.find(i=>i.id===e.planId)?.rest||0):d.ui.trRestEnd=null,fe())},"tr-rest-skip"(){d.ui.trRestEnd=null,fe()},"tr-add-set"(t){const e=vt()?.exercises[t.dataset.e];e&&f(()=>{const a=e.sets[e.sets.length-1];e.sets.push({reps:a?a.reps:null,kg:a?a.kg:null,done:!1})})},"tr-del-set"(t){const e=vt()?.exercises[t.dataset.e];!e||e.sets.length<2||f(()=>{e.sets.pop()})},"tr-finish"(){const t=vt();if(!t)return;const e=t.exercises.some(s=>s.sets.some(o=>o.done));if(!e&&!window.confirm("Nessuna serie spuntata: chiudere senza salvare?"))return;d.ui.trRestEnd=null;let a=[];f(s=>{Ol(s,t)?a=Tl(s,t):s.sessions=s.sessions.filter(o=>o.id!==t.id)});const i=ce(d.data,La(k())),n=Ee(d.data)?.goal||3;b("allenamento",{},e?`Allenamento salvato · ${i}/${n} questa settimana${a.length?" · Record: "+a.join(", "):""}`:"Allenamento chiuso senza serie")},"tr-cancel"(){const t=vt();!t||!window.confirm("Annullare questo allenamento? Le serie segnate si perdono.")||(d.ui.trRestEnd=null,f(e=>{e.sessions=e.sessions.filter(a=>a.id!==t.id)}))},"tr-sess-del"(t){window.confirm("Eliminare questo allenamento dallo storico?")&&f(e=>{e.sessions=e.sessions.filter(a=>a.id!==t.dataset.id)})},"tr-metric"(t){d.ui.trMetric=t.dataset.k,A()},"tr-all"(){d.ui.trAll=!0,A()}},changes:{"tr-set"(t){const e=vt()?.exercises[t.dataset.e]?.sets[t.dataset.i];if(!e)return;const a=t.value.trim(),i=a?U(a):null;if(a&&!(Number.isFinite(i)&&i>=0)){t.value=zt(e[t.dataset.f]);return}e[t.dataset.f]=i==null?null:t.dataset.f==="reps"?Math.round(i):Math.round(i*100)/100,pa()},"tr-var"(t){const e=vt()?.exercises[t.dataset.e];e&&(e.variant=t.value.trim(),pa())},async"tr-file"(t){const e=t.files&&t.files[0];if(e){if(e.size>2e5)return D("Il file è troppo grande per essere una scheda."),A();d.ui.trImp={text:await e.text()},A()}},"tr-text"(t){d.ui.trImp={text:t.value},A()},"tr-ex"(t){d.ui.trEx=t.value,A()}}});const Mr=[[/\b(pin|password|passw|pwd|cvv|cvc|codice segreto|codice di sblocco|puk)\b\s*[:=]?\s*\S{3,}/i,"sembra un PIN, una password o un codice segreto"],[/\b(?:\d[ -]?){15,16}\b/,"sembra il numero completo di una carta"]];function Pr(t){for(const[e,a]of Mr)if(e.test(String(t||"")))return a;return null}function Rr(t){return`<div class="item"><div class="avatar">${r((t.name||"?").trim().split(/\s+/).slice(0,2).map(e=>e[0]).join("").toUpperCase())}</div>
    <div class="text"><div class="strong">${r(t.name)}</div><div class="hint">${r([t.relation,t.phone].filter(Boolean).join(" · "))}</div></div>
    ${t.phone?`<button class="icon-btn no-print" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero di ${r(t.name)}">${S("copy",16)}</button>`:""}
    <button class="icon-btn no-print" data-action="em-del" data-list="contacts" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button></div>`}function Lr(t){return`<div class="item"><div class="text"><div class="strong">${r(t.name)}</div><div class="hint" style="white-space: pre-line">${r(t.how)}</div></div>
    ${t.phone?`<span class="money">${r(t.phone)}</span><button class="icon-btn no-print" data-action="copy" data-text="${r(t.phone)}" aria-label="Copia il numero">${S("copy",16)}</button>`:""}
    <button class="icon-btn no-print" data-action="em-del" data-list="cards" data-id="${t.id}" aria-label="Elimina ${r(t.name)}">${S("trash",16)}</button></div>`}function Fr(){const t=d.data,e=t.emergency,a=t.contacts.filter(i=>i.phone&&!e.contacts.some(n=>n.name===i.name));return`
    ${W(e.updatedAt?`Aggiornate il ${I(e.updatedAt.slice(0,10))} ${e.updatedAt.slice(0,4)}`:"Da compilare con calma, una volta","Emergenza",'<button class="btn no-print" data-action="em-print">Stampa</button>')}
    <div class="banner warn no-print">Qui niente PIN, password, codici segreti o numeri completi delle carte: quelli restano nell'app Password di Apple. Scrivi solo chi chiamare e cosa fare.</div>
    <div class="grid">
      <section class="card" aria-labelledby="h-emc">
        <h2 id="h-emc">Chi chiamare</h2>
        ${e.contacts.length?`<div class="list">${e.contacts.map(Rr).join("")}</div>`:'<div class="empty">Nessun contatto di emergenza.</div>'}
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
        ${e.cards.length?`<div class="list">${e.cards.map(Lr).join("")}</div>`:'<div class="empty">Per ogni carta o conto: come si blocca e il numero da chiamare (lo trovi sul sito della banca o sul retro della carta).</div>'}
        <form class="stack-sm no-print" data-form="em-card">
          <div class="form-grid two">
            <label class="field">Carta o conto<input class="input" id="emk-name" name="name" placeholder="Carta Hype" required></label>
            <label class="field">Numero per il blocco<input class="input" name="phone" inputmode="tel" placeholder="dal sito o dal retro della carta"></label>
          </div>
          <label class="field">Come bloccarla<textarea class="input" name="how" rows="2" placeholder="es. dall'app: Carte → Blocca carta. Poi denuncia e richiesta nuova carta."></textarea></label>
          <button class="btn primary self-start" type="submit">Aggiungi</button>
        </form>
      </section>

      ${[["documents","Dove sono i documenti","Carta d'identità e patente nel portafoglio; passaporto nel cassetto della scrivania; copie in PDF su Drive in Documenti…"],["medical","Informazioni mediche","Gruppo sanguigno, allergie, farmaci che prendi, medico di base e suo numero…"],["notes","Altro da sapere","Chi ha una copia delle chiavi di casa, numero dell'assicurazione auto, amministratore di condominio…"]].map(([i,n,s])=>`
      <section class="card" aria-labelledby="h-em-${i}">
        <h2 id="h-em-${i}">${n}</h2>
        <div class="print-only" style="white-space: pre-line">${r(e[i]||"—")}</div>
        <form class="stack-sm no-print" data-form="em-text">
          <input type="hidden" name="k" value="${i}">
          <label class="sr-only" for="em-${i}">${n}</label>
          <textarea class="input" id="em-${i}" name="text" rows="5" placeholder="${r(s)}">${r(e[i]||"")}</textarea>
          <button class="btn small self-start" type="submit">Salva</button>
        </form>
      </section>`).join("")}
    </div>`}function la(t,e){for(const a of e){const i=t.querySelector(`[name="${a}"]`),n=i&&Pr(i.value);if(n)return i.setCustomValidity(`Non salvato: ${n}. Qui scrivi solo cosa fare, non i codici.`),i.reportValidity(),i.addEventListener("input",()=>i.setCustomValidity(""),{once:!0}),!1}return!0}L("emergenza",{render:Fr,actions:{"em-print"(){window.print()},"em-del"(t){const e=t.dataset.list;["contacts","cards"].includes(e)&&f(a=>{a.emergency[e]=a.emergency[e].filter(i=>i.id!==t.dataset.id),K(a,t.dataset.id),O(a.emergency)})}},forms:{"em-contact"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;let i=String(t.get("phone")||"").trim();if(!i){const s=d.data.contacts.find(o=>o.name.toLowerCase()===a.toLowerCase());s&&(i=s.phone||"")}const n=String(t.get("relation")||"").trim();la(e,["name","relation","phone"])&&(f(s=>{s.emergency.contacts.push({id:G(),name:a,relation:n,phone:i}),O(s.emergency)}),b("emergenza",{},`${a} aggiunto`),P("#emc-name"))},"em-card"(t,e){const a=String(t.get("name")||"").trim();if(!a)return;const i=String(t.get("how")||"").trim(),n=String(t.get("phone")||"").trim();la(e,["name","how","phone"])&&(f(s=>{s.emergency.cards.push({id:G(),name:a,how:i,phone:n}),O(s.emergency)}),b("emergenza",{},`${a} aggiunta`))},"em-text"(t,e){const a=t.get("k");if(!["documents","medical","notes"].includes(a))return;const i=String(t.get("text")||"");la(e,["text"])&&(f(n=>{n.emergency[a]=i,O(n.emergency)}),b("emergenza",{},"Salvato"))}}});function Br(t){const e=ln(t.settings),a=e==="rune",i=on(t.settings.rune),n=ga[e],s=(l,c,u,p,g,m)=>`
    <label class="field">${c} <span class="hint">${m(i[l])}</span>
      <input type="range" class="range" data-change="rune-opt" data-k="${l}" min="${u}" max="${p}" step="${g}" value="${i[l]}"></label>`;let o=`<div class="hint">${r(n.hint)}</div>`;if(a)o=`
      <div class="stack-sm">
        <fieldset class="plain">
          <legend class="label">Colore</legend>
          <div class="swatches">${bo.map((l,c)=>`<label class="swatch" style="--c:${l}"><input type="radio" name="rune-color" value="${l}" data-change="rune-opt" data-k="color" ${i.color===l?"checked":""}><span class="sr-only">Colore ${c+1}</span></label>`).join("")}</div>
        </fieldset>
        <div class="form-grid two">
          <label class="field">Velocità<select class="input" data-change="rune-opt" data-k="speed">${Object.keys(fo).map(l=>`<option ${i.speed===l?"selected":""}>${l}</option>`).join("")}</select></label>
          <label class="field">Anelli<select class="input" data-change="rune-opt" data-k="rings">${[1,2,3,4].map(l=>`<option ${i.rings===l?"selected":""}>${l}</option>`).join("")}</select></label>
        </div>
        ${s("intensity","Intensità",.15,1,.05,l=>Math.round(l*100)+"%")}
        <label class="check small"><input type="checkbox" data-change="rune-opt" data-k="glow" ${i.glow?"checked":""}>Bagliore</label>
        ${s("centerX","Posizione orizzontale",0,100,1,l=>l+"%")}
        ${s("centerY","Posizione verticale",20,120,1,l=>l+"%")}
        ${s("size","Grandezza",.5,1.6,.05,l=>Math.round(l*100)+"%")}
        ${s("panelOpacity","Opacità delle schede",.4,1,.02,l=>Math.round(l*100)+"%")}
        <button class="link self-start" data-action="rune-reset">Torna ai valori di partenza</button>
        <div class="hint">Se il PC rallenta, prova velocità "ferma" o togli il bagliore. Con "Riduci animazioni" di Windows lo sfondo resta fermo.</div>
      </div>`;else if(n.colors){const l=cn(t.settings,e);o=`
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
        <div class="pills small">${Object.entries(ga).map(([l,c])=>`<label class="pill"><input type="radio" name="theme" value="${l}" data-change="theme-set" ${e===l?"checked":""}><span>${r(c.label)}</span></label>`).join("")}</div>
      </fieldset>
      ${o}
      <fieldset class="plain">
        <legend class="label">Effetti grafici su questo computer</legend>
        <div class="pills small">${Object.entries($o).map(([l,c])=>`<label class="pill"><input type="radio" name="effects" value="${l}" data-change="theme-effects" ${Qa()===l?"checked":""}><span>${c}</span></label>`).join("")}</div>
        <div class="hint">Leggeri: niente sfocature né animazioni, stesso aspetto (utile su PC poco potenti e su Linux). Automatici = leggeri su Linux, completi su Windows. Vale solo per questo computer. Ora: <strong>${va()?"leggeri":"completi"}</strong>${Qa()==="auto"&&yo?" (Linux)":""}.</div>
      </fieldset>
    </section>`}function Vr(t){const e=t.settings.cifrario||[],a=d.ui.cipherKind||"abbr",i=d.ui.cipherDest||"expense",n=l=>{if(l.kind==="abbr")return`diventa «${l.to}»`;if(l.kind==="full")return`scrive «${l.to}»`;if(l.kind==="area")return`reparto ${l.area}`;const c=l.category?` · ${l.category}`:l.habit?` · ${l.habit}`:l.area?` · ${l.area}`:"";return`va in ${fa[l.dest]||l.dest}${c}`},s=d.ui.cipherTry?Sn(d.ui.cipherTry,t):null,o=a!=="dest"?"":i==="expense"?`<label class="field">Categoria<select class="input" name="category">${t.categories.out.map(l=>`<option>${r(l)}</option>`).join("")}</select></label>`:i==="income"?`<label class="field">Categoria<select class="input" name="category">${t.categories.in.map(l=>`<option>${r(l)}</option>`).join("")}</select></label>`:i==="habit"?`<label class="field">Abitudine<select class="input" name="habit">${t.habits.filter(l=>!l.archived).map(l=>`<option>${r(l.name)}</option>`).join("")||'<option value="">Nessuna abitudine</option>'}</select></label>`:i==="shop"?'<label class="field">Reparto (facoltativo)<input class="input" name="area" list="cipher-areas" placeholder="es. Frigo"></label>':"";return`
    <section class="card span-2" aria-labelledby="h-cipher" id="cifrario">
      <div class="card-head"><h2 id="h-cipher">Cifrario di Annota al volo</h2><span class="sub">${e.length} ${e.length===1?"parola":"parole"}</span></div>
      <div class="hint">Le tue parole e cosa vogliono dire. Valgono prima delle regole incluse, sul PC e sul telefono. Si riempie anche da solo: quando correggi il tipo di una voce, Annota ti chiede se ricordarlo.</div>
      ${e.length?`<div class="list">${e.map(l=>`
        <div class="item"><span class="tag">${r(ai[l.kind]||l.kind)}</span>
          <div class="text"><strong>${r(l.word)}</strong> <span class="sub">${r(n(l))}</span></div>
          <button class="icon-btn" data-action="cipher-del" data-id="${l.id}" aria-label="Elimina ${r(l.word)}">${S("trash",16)}</button></div>`).join("")}</div>`:'<div class="empty">Ancora vuoto. Esempi: «lav» → lavatrice, «benza» → uscita Trasporti, «parmigiano» → reparto Frigo, «pacco» → "Portare pacco al punto di ritiro domani".</div>'}
      <form data-form="cipher-add" class="stack-sm divider-top">
        <div class="form-grid two">
          <label class="field">Parola<input class="input" name="word" required placeholder="es. benza" autocomplete="off"></label>
          <label class="field">Tipo<select class="input" name="kind" data-change="cipher-kind">${Object.entries(ai).map(([l,c])=>`<option value="${l}" ${l===a?"selected":""}>${r(c)}</option>`).join("")}</select></label>
          ${a==="abbr"?'<label class="field">Diventa<input class="input" name="to" required placeholder="es. lavatrice"></label>':""}
          ${a==="full"?'<label class="field">Scrive al suo posto<input class="input" name="to" required placeholder="es. Portare pacco al punto di ritiro domani"></label>':""}
          ${a==="area"?'<label class="field">Reparto<input class="input" name="area" required list="cipher-areas" placeholder="es. Frigo"></label>':""}
          ${a==="dest"?`<label class="field">Va in<select class="input" name="dest" data-change="cipher-dest">${Object.entries(fa).map(([l,c])=>`<option value="${l}" ${l===i?"selected":""}>${r(c)}</option>`).join("")}</select></label>${o}`:""}
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
      ${s?`<div class="sub">→ ${r(s.dest)}${s.via&&s.via.length?` · dal tuo cifrario: ${r(s.via.map(l=>l.word).join(", "))}`:" · regole incluse"}${s.text||s.note||s.name||s.items?": "+r(s.text||s.note||s.name||s.items.join(", ")):""}${s.category?" · "+r(s.category):""}</div>`:""}
    </section>`}function Ur(){const t=d.data;return`
    ${W("Preferenze","Impostazioni")}
    <div class="grid">
      ${Br(t)}
      ${Vr(t)}
      <section class="${Ne()?"ph-hide ":""}card">
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

      ${Lt.settingsCard?Lt.settingsCard():""}

      <section class="card ph-pc-only">
        <h2>Avvio</h2>
        <label class="check"><input type="checkbox" data-change="autostart" ${d.autostart?"checked":""}><span>Apri la dashboard all'accensione del PC</span></label>
        <div class="hint">Vale solo per questo computer. Attivalo dalla versione installata, non da quella di prova.</div>
        <div class="hint">Chiudere la finestra non esce: la dashboard resta nell'area di notifica (vicino all'orologio). Da lì: Apri, Annota al volo (Ctrl+Alt+Spazio), HUD, Blocca, Esci.</div>
        <button class="btn self-start" data-action="hud-toggle">${S("target",16)}Mostra / nascondi l'HUD sul desktop</button>
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
          <button class="icon-btn" data-action="del-rule" data-i="${a}" aria-label="Elimina la regola ${r(e.match)}">${S("trash",16)}</button></div>`).join("")}</div>`:`<div class="empty">Le regole nascono da sole quando correggi una categoria durante l'importazione.</div>`}
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
          <label class="field">Nuova password (almeno ${ma} caratteri)<input class="input" type="password" name="p1" autocomplete="new-password" required></label>
          <label class="field">Ripeti la nuova password<input class="input" type="password" name="p2" autocomplete="new-password" required></label>
          <button class="btn primary self-start" type="submit">Cambia password</button>
        </form>
      </section>
    </div>`}L("impostazioni",{render:Ur,actions:{"del-rule"(t){f(e=>{e.rules.splice(Number(t.dataset.i),1)})},"rune-reset"(){f(t=>{t.settings.rune=Object.assign({},Ka)})},"cipher-del"(t){f(e=>{e.settings.cifrario=(e.settings.cifrario||[]).filter(a=>a.id!==t.dataset.id)})}},changes:{"cipher-kind"(t){d.ui.cipherKind=t.value,A()},"cipher-dest"(t){d.ui.cipherDest=t.value,A()},"theme-set"(t){f(e=>{e.settings.theme=t.value in ga?t.value:"classico",e.settings.rune||(e.settings.rune=Object.assign({},Ka))})},"theme-accent"(t){const e=ln(d.data.settings);f(a=>{a.settings.themeAccent=Object.assign({},a.settings.themeAccent,{[e]:t.value})})},"theme-motion"(t){f(e=>{e.settings.themeMotion=t.checked})},"theme-effects"(t){ho(t.value),A()},"rune-opt"(t){const e=t.dataset.k,a=t.type==="checkbox"?t.checked:["speed","color"].includes(e)?t.value:Number(t.value);f(i=>{i.settings.rune=on(Object.assign({},i.settings.rune,{[e]:a}))})},async autostart(t){try{t.checked?await mo():await go(),d.autostart=await vo(),q(d.autostart?"Si aprirà all'accensione del PC":"Avvio automatico disattivato")}catch(e){D("Non è stato possibile cambiare l'avvio automatico: "+e)}A()}},forms:{"cipher-add"(t,e){const a=String(t.get("word")||"").trim().toLowerCase(),i=String(t.get("kind")||"abbr");if(!a)return;const n=Vi({word:a,kind:i});if((i==="abbr"||i==="full")&&(n.to=String(t.get("to")||"").trim()),i==="area"&&(n.area=String(t.get("area")||"").trim()),i==="dest"&&(n.dest=String(t.get("dest")||"todo"),n.category=String(t.get("category")||""),n.habit=String(t.get("habit")||""),n.area=String(t.get("area")||"").trim()),(i==="abbr"||i==="full")&&!n.to){const s=e.to;s.setCustomValidity("Scrivi cosa vuol dire"),s.reportValidity(),s.addEventListener("input",()=>s.setCustomValidity(""),{once:!0});return}q(`«${a}» aggiunta al cifrario`),f(s=>{s.settings.cifrario=(s.settings.cifrario||[]).filter(o=>!(Q(o.word)===Q(a)&&o.kind===i)).concat([n])})},"cipher-try"(t){d.ui.cipherTry=String(t.get("t")||"").trim(),A()},profile(t,e){const a=U(t.get("budget")||"0");if(!(a>=0)){const n=e.budget;n.setCustomValidity("Inserisci un numero, es. 1200"),n.reportValidity(),n.addEventListener("input",()=>n.setCustomValidity(""),{once:!0});return}const i=String(t.get("ownNames")||"").split(`
`).map(n=>n.trim()).filter(Boolean);q("Impostazioni salvate"),f(n=>{n.profile.name=String(t.get("name")||"").trim(),n.settings.budget=a,n.settings.ownNames=i})},async city(t){try{const e=await uo(String(t.get("city")).trim());q("Città impostata: "+e.city),f(a=>Object.assign(a.profile,e)),po()}catch(e){D(e.message),A()}},categories(t){const e=n=>[...new Set(String(n||"").split(`
`).map(s=>s.trim()).filter(Boolean))],a=e(t.get("out")),i=e(t.get("in"));if(!a.length||!i.length)return D("Serve almeno una categoria per tipo."),A();q("Categorie salvate"),f(n=>{n.categories.out=a,n.categories.in=i})},async password(t){const e=t.get("p1"),a=t.get("p2");if(e.length<ma)return D(`La password deve avere almeno ${ma} caratteri.`),A();if(e!==a)return D("Le due password non coincidono."),A();await ro(e),q(d.saveState==="err"?"":"Password cambiata. Aggiornala anche nell'app Password."),A()}}});const Va=typeof window<"u"&&"__TAURI_INTERNALS__"in window,qi=3,Ti={r:0,o:1,a:2};function Gr(){if(d.screen!=="main"||!d.data)return{locked:!0,lite:va()};const t=d.data,e=k(),a=t.settings,i=t.todos.filter(v=>v.due&&v.due<=e&&(!v.done||v.doneAt===e)).sort((v,$)=>Number(v.done)-Number($.done)||v.due.localeCompare($.due)||(v.time||"99").localeCompare($.time||"99")),n=i.slice(0,6).map(v=>({id:v.id,text:v.text,done:!!v.done,late:v.due<e,meta:v.due<e?v.due===M(e,-1)?"ieri":I(v.due):v.time||"oggi"})),s=i.filter(v=>!v.done).length,o=i.filter(v=>!v.done&&v.due<e).length,l=new Date().toTimeString().slice(0,5),c=t.todos.filter(v=>!v.done&&v.due&&(v.due>e||v.due===e&&v.time&&v.time>l)).sort((v,$)=>v.due.localeCompare($.due)||(v.time||"99").localeCompare($.time||"99")),u=t.deadlines.filter(v=>!v.archived&&v.due>e).sort((v,$)=>v.due.localeCompare($.due))[0];let p=null;const g=c[0];g&&(p={date:g.due,when:(g.due===e?"OGGI":pt(g.due).toUpperCase())+(g.time?" · "+g.time:""),text:g.text}),u&&(!p||u.due<p.date)&&(p={date:u.due,when:pt(u.due).toUpperCase(),text:"Scade: "+u.name});const m=Fn(t).filter(v=>v.tag!=="RITARDO"),y=m.filter(v=>!v.done).sort((v,$)=>Ti[v.level]-Ti[$.level]),w=[...y.slice(0,qi),...m.filter(v=>v.done)],z=st(e),N=t.habits.filter(v=>!v.archived).map(v=>({id:v.id,name:v.name,done:ht(t,v,e),perWeek:v.perWeek,week:Ct(t,v,z)}));return{locked:!1,accent:cn(a,"comando"),warm:"#ffb02e",motion:a.themeMotion!==!1,lite:va(),tasks:n,more:Math.max(0,i.length-n.length),open:s,late:o,next:p,habits:N,alerts:w.map(v=>({key:v.key||null,title:v.title,meta:v.meta,level:v.level,nav:v.nav,done:!!v.done})),alertCount:y.length,alertMore:Math.max(0,y.length-qi),alertLevel:y.length?y[0].level:null}}let Mi=0;function Pi(){Va&&(clearTimeout(Mi),Mi=setTimeout(()=>{wo("hud","hud-data",Gr()).catch(()=>{})},150))}Va&&(wt(),wt(),wt(),wt(),wt(),wt(),wt(),Lt.after.push(()=>Pi()),setInterval(Pi,6e4));document.addEventListener("keydown",t=>{if(t.key==="Escape"&&d.ui.capOverlay){t.preventDefault(),Ta();return}t.key==="Escape"&&document.activeElement&&document.activeElement.closest&&document.activeElement.closest(".cap-bar")&&document.activeElement.blur(),t.ctrlKey&&t.altKey&&t.code==="Space"&&d.screen==="main"&&(t.preventDefault(),Cn())});L("desktop",{actions:{async"hud-toggle"(){if(!Va){q("L'HUD c'è solo nell'app (npm run tauri dev o installata)"),A();return}try{const t=await oe("hud_toggle");q(t?"HUD sul desktop acceso":"HUD nascosto: lo riaccendi da qui o dall'icona vicino all'orologio"),A()}catch(t){q("HUD non disponibile: "+t),A()}}}});ko();
