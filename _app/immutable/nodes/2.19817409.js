import{s as j,n as S,r as le,f as re,a as oe,b as ce}from"../chunks/scheduler.2f7340eb.js";import{S as F,i as K,e as B,a as T,f as m,g as v,s as x,m as N,h as g,j as y,x as P,c as A,n as z,k as p,l as G,y as b,o as X,z as L,A as M,B as ae,d as D,b as J,t as U,C as ie,p as Q,r as W,u as Y,v as Z,w as ee}from"../chunks/index.24168e23.js";import{C as ue,g as fe}from"../chunks/chatbot.c8a44a0f.js";import{b as te}from"../chunks/paths.8f049da4.js";function q(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function de(r){let e,t,s=`<div class="w-10 rounded-full"><img src="${te}/turtle.png" class="invert" alt="ChatGPT profile"/></div>`,l,n,o;return{c(){e=v("div"),t=v("div"),t.innerHTML=s,l=x(),n=v("div"),o=N(r[1]),this.h()},l(u){e=g(u,"DIV",{class:!0});var c=y(e);t=g(c,"DIV",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-uc30a3"&&(t.innerHTML=s),l=A(c),n=g(c,"DIV",{class:!0,style:!0});var d=y(n);o=z(d,r[1]),d.forEach(m),c.forEach(m),this.h()},h(){p(t,"class","chat-image avatar"),p(n,"class","chat-bubble chat-bubble-secondary"),G(n,"white-space","pre-line"),p(e,"class","chat chat-start")},m(u,c){T(u,e,c),b(e,t),b(e,l),b(e,n),b(n,o)},p(u,c){c&2&&X(o,u[1])},d(u){u&&m(e)}}}function he(r){let e,t,s;return{c(){e=v("div"),t=v("div"),s=N(r[1]),this.h()},l(l){e=g(l,"DIV",{class:!0});var n=y(e);t=g(n,"DIV",{class:!0,style:!0});var o=y(t);s=z(o,r[1]),o.forEach(m),n.forEach(m),this.h()},h(){p(t,"class","chat-bubble chat-bubble-primary"),G(t,"white-space","pre-line"),p(e,"class","chat chat-end")},m(l,n){T(l,e,n),b(e,t),b(t,s)},p(l,n){n&2&&X(s,l[1])},d(l){l&&m(e)}}}function _e(r){let e;function t(n,o){return n[0]?he:de}let s=t(r),l=s(r);return{c(){l.c(),e=B()},l(n){l.l(n),e=B()},m(n,o){l.m(n,o),T(n,e,o)},p(n,[o]){s===(s=t(n))&&l?l.p(n,o):(l.d(1),l=s(n),l&&(l.c(),l.m(e.parentNode,e)))},i:S,o:S,d(n){n&&m(e),l.d(n)}}}function me(r,e,t){let{isUser:s=!1}=e,{content:l}=e;return r.$$set=n=>{"isUser"in n&&t(0,s=n.isUser),"content"in n&&t(1,l=n.content)},[s,l]}class ne extends F{constructor(e){super(),K(this,e,me,_e,j,{isUser:0,content:1})}}function O(r,e,t){const s=r.slice();return s[8]=e[t],s}function be(r){let e,t;return e=new ne({props:{content:r[8].content}}),{c(){W(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){Z(e,s,l),t=!0},p(s,l){const n={};l&1&&(n.content=s[8].content),e.$set(n)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){U(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function pe(r){let e,t;return e=new ne({props:{isUser:!0,content:r[8].content}}),{c(){W(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){Z(e,s,l),t=!0},p(s,l){const n={};l&1&&(n.content=s[8].content),e.$set(n)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){U(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function R(r){let e,t,s,l;const n=[pe,be],o=[];function u(c,d){return c[8].isUser?0:1}return e=u(r),t=o[e]=n[e](r),{c(){t.c(),s=B()},l(c){t.l(c),s=B()},m(c,d){o[e].m(c,d),T(c,s,d),l=!0},p(c,d){let k=e;e=u(c),e===k?o[e].p(c,d):(Q(),U(o[k],1,1,()=>{o[k]=null}),J(),t=o[e],t?t.p(c,d):(t=o[e]=n[e](c),t.c()),D(t,1),t.m(s.parentNode,s))},i(c){l||(D(t),l=!0)},o(c){U(t),l=!1},d(c){c&&m(s),o[e].d(c)}}}function ve(r){let e,t,s,l,n,o,u,c,d,k='<button type="submit" class="btn btn-primary">Submit</button>',_,w,E,C=q(r[0]),a=[];for(let i=0;i<C.length;i+=1)a[i]=R(O(r,C,i));const se=i=>U(a[i],1,1,()=>{a[i]=null});return{c(){e=v("div"),t=v("div");for(let i=0;i<a.length;i+=1)a[i].c();s=x(),l=v("footer"),n=v("form"),o=v("div"),u=v("textarea"),c=x(),d=v("div"),d.innerHTML=k,this.h()},l(i){e=g(i,"DIV",{class:!0});var h=y(e);t=g(h,"DIV",{class:!0});var f=y(t);for(let $=0;$<a.length;$+=1)a[$].l(f);f.forEach(m),s=A(h),l=g(h,"FOOTER",{class:!0});var I=y(l);n=g(I,"FORM",{class:!0});var V=y(n);o=g(V,"DIV",{class:!0});var H=y(o);u=g(H,"TEXTAREA",{class:!0,placeholder:!0}),y(u).forEach(m),H.forEach(m),c=A(V),d=g(V,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-132mtek"&&(d.innerHTML=k),V.forEach(m),I.forEach(m),h.forEach(m),this.h()},h(){p(t,"class","container p-2 pb-10 grow"),p(u,"class","textarea textarea-bordered items-center grid-flow-col w-full"),p(u,"placeholder","질문을 입력해주세요"),p(o,"class","w-full"),p(d,"class","grid-flow-col gap-4 md:place-self-center md:justify-self-end"),p(n,"class","flex w-full"),p(l,"class","footer footer-center text-base-content"),p(e,"class","flex flex-col h-full")},m(i,h){T(i,e,h),b(e,t);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(t,null);b(e,s),b(e,l),b(l,n),b(n,o),b(o,u),L(u,r[2]),b(n,c),b(n,d),r[6](n),_=!0,w||(E=[M(u,"input",r[5]),M(u,"keydown",r[4]),M(n,"submit",ae(r[3]))],w=!0)},p(i,[h]){if(h&1){C=q(i[0]);let f;for(f=0;f<C.length;f+=1){const I=O(i,C,f);a[f]?(a[f].p(I,h),D(a[f],1)):(a[f]=R(I),a[f].c(),D(a[f],1),a[f].m(t,null))}for(Q(),f=C.length;f<a.length;f+=1)se(f);J()}h&4&&L(u,i[2])},i(i){if(!_){for(let h=0;h<C.length;h+=1)D(a[h]);_=!0}},o(i){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)U(a[h]);_=!1},d(i){i&&m(e),ie(a,i),r[6](null),w=!1,le(E)}}}function ge(r,e,t){let s,l=[],n,o;re(async()=>{try{s=ue.getInstance()}catch(_){console.log(_),fe(te+"/login")}}),oe(async()=>{window.scrollTo(0,document.body.scrollHeight)});function u(){const _={isUser:!0,content:o};t(0,l=[...l,_]),s.sendMessage(o).then(w=>{const E={isUser:!1,content:w.text};t(0,l=[...l,E])}).catch(w=>{console.log(w);const E={isUser:!1,content:"오류가 발생했어요"};t(0,l=[...l,E])}),t(2,o="")}function c(_){_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),n.requestSubmit())}function d(){o=this.value,t(2,o)}function k(_){ce[_?"unshift":"push"](()=>{n=_,t(1,n)})}return[l,n,o,u,c,d,k]}class De extends F{constructor(e){super(),K(this,e,ge,ve,j,{})}}export{De as component};
