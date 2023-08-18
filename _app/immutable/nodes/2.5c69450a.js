import{s as j,n as B,r as le,o as re,a as oe,b as ae}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as K,e as M,a as V,f as m,g as v,s as S,m as N,h as g,j as y,x as P,c as x,n as z,k as p,l as G,y as b,o as X,z as L,A as H,B as ce,d as D,b as J,t as I,C as ie,p as Q,r as W,u as Y,v as Z,w as ee}from"../chunks/index.6006ec2e.js";import{C as fe,g as ue,i as de,a as he,e as _e}from"../chunks/chatbot.fe28fc0f.js";import{b as te}from"../chunks/paths.a774a467.js";function q(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function me(r){let e,t,s=`<div class="w-10 rounded-full"><img src="${te}/turtle.png" class="invert" alt="ChatGPT profile"/></div>`,l,n,o;return{c(){e=v("div"),t=v("div"),t.innerHTML=s,l=S(),n=v("div"),o=N(r[1]),this.h()},l(f){e=g(f,"DIV",{class:!0});var a=y(e);t=g(a,"DIV",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-uc30a3"&&(t.innerHTML=s),l=x(a),n=g(a,"DIV",{class:!0,style:!0});var d=y(n);o=z(d,r[1]),d.forEach(m),a.forEach(m),this.h()},h(){p(t,"class","chat-image avatar"),p(n,"class","chat-bubble chat-bubble-secondary"),G(n,"white-space","pre-line"),p(e,"class","chat chat-start")},m(f,a){V(f,e,a),b(e,t),b(e,l),b(e,n),b(n,o)},p(f,a){a&2&&X(o,f[1])},d(f){f&&m(e)}}}function be(r){let e,t,s;return{c(){e=v("div"),t=v("div"),s=N(r[1]),this.h()},l(l){e=g(l,"DIV",{class:!0});var n=y(e);t=g(n,"DIV",{class:!0,style:!0});var o=y(t);s=z(o,r[1]),o.forEach(m),n.forEach(m),this.h()},h(){p(t,"class","chat-bubble chat-bubble-primary"),G(t,"white-space","pre-line"),p(e,"class","chat chat-end")},m(l,n){V(l,e,n),b(e,t),b(t,s)},p(l,n){n&2&&X(s,l[1])},d(l){l&&m(e)}}}function pe(r){let e;function t(n,o){return n[0]?be:me}let s=t(r),l=s(r);return{c(){l.c(),e=M()},l(n){l.l(n),e=M()},m(n,o){l.m(n,o),V(n,e,o)},p(n,[o]){s===(s=t(n))&&l?l.p(n,o):(l.d(1),l=s(n),l&&(l.c(),l.m(e.parentNode,e)))},i:B,o:B,d(n){n&&m(e),l.d(n)}}}function ve(r,e,t){let{isUser:s=!1}=e,{content:l}=e;return r.$$set=n=>{"isUser"in n&&t(0,s=n.isUser),"content"in n&&t(1,l=n.content)},[s,l]}class ne extends F{constructor(e){super(),K(this,e,ve,pe,j,{isUser:0,content:1})}}function O(r,e,t){const s=r.slice();return s[8]=e[t],s}function ge(r){let e,t;return e=new ne({props:{content:r[8].content}}),{c(){W(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){Z(e,s,l),t=!0},p(s,l){const n={};l&1&&(n.content=s[8].content),e.$set(n)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function ye(r){let e,t;return e=new ne({props:{isUser:!0,content:r[8].content}}),{c(){W(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){Z(e,s,l),t=!0},p(s,l){const n={};l&1&&(n.content=s[8].content),e.$set(n)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function R(r){let e,t,s,l;const n=[ye,ge],o=[];function f(a,d){return a[8].isUser?0:1}return e=f(r),t=o[e]=n[e](r),{c(){t.c(),s=M()},l(a){t.l(a),s=M()},m(a,d){o[e].m(a,d),V(a,s,d),l=!0},p(a,d){let k=e;e=f(a),e===k?o[e].p(a,d):(Q(),I(o[k],1,1,()=>{o[k]=null}),J(),t=o[e],t?t.p(a,d):(t=o[e]=n[e](a),t.c()),D(t,1),t.m(s.parentNode,s))},i(a){l||(D(t),l=!0)},o(a){I(t),l=!1},d(a){a&&m(s),o[e].d(a)}}}function ke(r){let e,t,s,l,n,o,f,a,d,k='<button type="submit" class="btn btn-primary">Submit</button>',_,w,U,E=q(r[0]),c=[];for(let i=0;i<E.length;i+=1)c[i]=R(O(r,E,i));const se=i=>I(c[i],1,1,()=>{c[i]=null});return{c(){e=v("div"),t=v("div");for(let i=0;i<c.length;i+=1)c[i].c();s=S(),l=v("footer"),n=v("form"),o=v("div"),f=v("textarea"),a=S(),d=v("div"),d.innerHTML=k,this.h()},l(i){e=g(i,"DIV",{class:!0});var h=y(e);t=g(h,"DIV",{class:!0});var u=y(t);for(let $=0;$<c.length;$+=1)c[$].l(u);u.forEach(m),s=x(h),l=g(h,"FOOTER",{class:!0});var T=y(l);n=g(T,"FORM",{class:!0});var C=y(n);o=g(C,"DIV",{class:!0});var A=y(o);f=g(A,"TEXTAREA",{class:!0,placeholder:!0}),y(f).forEach(m),A.forEach(m),a=x(C),d=g(C,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-132mtek"&&(d.innerHTML=k),C.forEach(m),T.forEach(m),h.forEach(m),this.h()},h(){p(t,"class","container p-2 pb-10 grow"),p(f,"class","textarea textarea-bordered items-center grid-flow-col w-full"),p(f,"placeholder",de),p(o,"class","w-full"),p(d,"class","grid-flow-col gap-4 md:place-self-center md:justify-self-end"),p(n,"class","flex w-full"),p(l,"class","footer footer-center text-base-content"),p(e,"class","flex flex-col h-full")},m(i,h){V(i,e,h),b(e,t);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(t,null);b(e,s),b(e,l),b(l,n),b(n,o),b(o,f),L(f,r[2]),b(n,a),b(n,d),r[6](n),_=!0,w||(U=[H(f,"input",r[5]),H(f,"keydown",r[4]),H(n,"submit",ce(r[3]))],w=!0)},p(i,[h]){if(h&1){E=q(i[0]);let u;for(u=0;u<E.length;u+=1){const T=O(i,E,u);c[u]?(c[u].p(T,h),D(c[u],1)):(c[u]=R(T),c[u].c(),D(c[u],1),c[u].m(t,null))}for(Q(),u=E.length;u<c.length;u+=1)se(u);J()}h&4&&L(f,i[2])},i(i){if(!_){for(let h=0;h<E.length;h+=1)D(c[h]);_=!0}},o(i){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)I(c[h]);_=!1},d(i){i&&m(e),ie(c,i),r[6](null),w=!1,le(U)}}}function we(r,e,t){let s,l=[{isUser:!1,content:he}],n,o;re(async()=>{try{s=fe.getInstance()}catch(_){console.log(_),ue(te+"/login")}}),oe(async()=>{window.scrollTo(0,document.body.scrollHeight)});function f(){const _={isUser:!0,content:o};t(0,l=[...l,_]),s.sendThreadMessage(o).then(w=>{const U={isUser:!1,content:w};t(0,l=[...l,U])}).catch(w=>{console.log(w);const U={isUser:!1,content:_e};t(0,l=[...l,U])}),t(2,o="")}function a(_){_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),n.requestSubmit())}function d(){o=this.value,t(2,o)}function k(_){ae[_?"unshift":"push"](()=>{n=_,t(1,n)})}return[l,n,o,f,a,d,k]}class Te extends F{constructor(e){super(),K(this,e,we,ke,j,{})}}export{Te as component};
