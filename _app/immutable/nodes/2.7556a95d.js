import{s as _,n as m,f as G,h as y}from"../chunks/scheduler.fb1cce36.js";import{S as p,i as b,g as u,s as C,m as E,h as d,j as v,x as H,c as T,n as k,f as l,k as h,a as g,y as f,o as U,r as x,u as I,v as D,d as P,t as V,w}from"../chunks/index.4975a6a8.js";import{C as L,a as M,b as S,g as j}from"../chunks/store.b04afae3.js";import{b as B}from"../chunks/paths.be118a62.js";function q(i){let t,e,r=`<div class="w-10 rounded-full"><img src="${B}/turtle.png" class="invert" alt="ChatGPT profile"/></div>`,a,s,n;return{c(){t=u("div"),e=u("div"),e.innerHTML=r,a=C(),s=u("div"),n=E(i[0]),this.h()},l(c){t=d(c,"DIV",{class:!0});var o=v(t);e=d(o,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-4pbrh5"&&(e.innerHTML=r),a=T(o),s=d(o,"DIV",{class:!0});var $=v(s);n=k($,i[0]),$.forEach(l),o.forEach(l),this.h()},h(){h(e,"class","chat-image avatar"),h(s,"class","chat-bubble chat-bubble-secondary"),h(t,"class","chat chat-start")},m(c,o){g(c,t,o),f(t,e),f(t,a),f(t,s),f(s,n)},p(c,[o]){o&1&&U(n,c[0])},i:m,o:m,d(c){c&&l(t)}}}function A(i,t,e){let{content:r}=t;return i.$$set=a=>{"content"in a&&e(0,r=a.content)},[r]}class R extends p{constructor(t){super(),b(this,t,A,q,_,{content:0})}}function z(i){let t,e,r;return{c(){t=u("div"),e=u("div"),r=E(i[0]),this.h()},l(a){t=d(a,"DIV",{class:!0});var s=v(t);e=d(s,"DIV",{class:!0});var n=v(e);r=k(n,i[0]),n.forEach(l),s.forEach(l),this.h()},h(){h(e,"class","chat-bubble chat-bubble-primary"),h(t,"class","chat chat-end")},m(a,s){g(a,t,s),f(t,e),f(e,r)},p(a,[s]){s&1&&U(r,a[0])},i:m,o:m,d(a){a&&l(t)}}}function F(i,t,e){let{content:r}=t;return i.$$set=a=>{"content"in a&&e(0,r=a.content)},[r]}class J extends p{constructor(t){super(),b(this,t,F,z,_,{content:0})}}function K(i){let t,e,r,a,s;return e=new R({props:{content:"바다거북 스프"}}),a=new J({props:{content:"안녕"}}),{c(){t=u("div"),x(e.$$.fragment),r=C(),x(a.$$.fragment)},l(n){t=d(n,"DIV",{});var c=v(t);I(e.$$.fragment,c),r=T(c),I(a.$$.fragment,c),c.forEach(l)},m(n,c){g(n,t,c),D(e,t,null),f(t,r),D(a,t,null),s=!0},p:m,i(n){s||(P(e.$$.fragment,n),P(a.$$.fragment,n),s=!0)},o(n){V(e.$$.fragment,n),V(a.$$.fragment,n),s=!1},d(n){n&&l(t),w(e),w(a)}}}function N(i){let t;return G(async()=>{try{t=new L({accessToken:y(M),apiReverseProxyUrl:y(S)})}catch{j(B+"/login")}}),[]}class Y extends p{constructor(t){super(),b(this,t,N,K,_,{})}}export{Y as component};
