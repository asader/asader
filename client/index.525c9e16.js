import{S as t,i as e,s,a as r,m as a,w as n,f as l,g as o,o as c,j as i,p as f,q as h,r as m,v as $,e as u,t as g,c as d,b as p,d as x,h as v,k as j,x as b,y,z as w,n as E}from"./client.2429bc99.js";import"./config.7b5ad26e.js";import{A as D}from"./ArticleCard.38a4a1b2.js";import"./Footer.44426527.js";import{L as I}from"./LayoutWithHeader.cf0acc56.js";function V(t,e,s){const r=t.slice();return r[1]=e[s],r}function q(t){let e,s,r;return{c(){e=u("div"),s=u("h1"),r=g("Блог"),this.h()},l(t){e=d(t,"DIV",{slot:!0});var a=p(e);s=d(a,"H1",{class:!0});var n=p(s);r=x(n,"Блог"),n.forEach(l),a.forEach(l),this.h()},h(){v(s,"class","text-3xl font-bold leading-tight text-gray-900"),v(e,"slot","header")},m(t,a){i(t,e,a),j(e,s),j(s,r)},d(t){t&&l(e)}}}function A(t){let e,s;return e=new D({props:{article:t[1]}}),{c(){a(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,r){f(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.article=t[1]),e.$set(r)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){$(e,t)}}}function H(t){let e,s,r,a=t[0],n=[];for(let e=0;e<a.length;e+=1)n[e]=A(V(t,a,e));const o=t=>m(n[t],1,1,()=>{n[t]=null});return{c(){e=u("div"),s=u("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=d(t,"DIV",{slot:!0});var r=p(e);s=d(r,"DIV",{class:!0});var a=p(s);for(let t=0;t<n.length;t+=1)n[t].l(a);a.forEach(l),r.forEach(l),this.h()},h(){v(s,"class","mt-6 grid gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"),v(e,"slot","content")},m(t,a){i(t,e,a),j(e,s);for(let t=0;t<n.length;t+=1)n[t].m(s,null);r=!0},p(t,e){if(1&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const l=V(t,a,r);n[r]?(n[r].p(l,e),h(n[r],1)):(n[r]=A(l),n[r].c(),h(n[r],1),n[r].m(s,null))}for(b(),r=a.length;r<n.length;r+=1)o(r);y()}},i(t){if(!r){for(let t=0;t<a.length;t+=1)h(n[t]);r=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)m(n[t]);r=!1},d(t){t&&l(e),w(n,t)}}}function L(t){let e;return{c(){e=r()},l(t){e=o(t)},m(t,s){i(t,e,s)},p:E,i:E,o:E,d(t){t&&l(e)}}}function k(t){let e,s,u;return s=new I({props:{$$slots:{default:[L],content:[H],header:[q]},$$scope:{ctx:t}}}),{c(){e=r(),a(s.$$.fragment),this.h()},l(t){n('[data-svelte="svelte-jhdil8"]',document.head).forEach(l),e=o(t),c(s.$$.fragment,t),this.h()},h(){document.title="articles"},m(t,r){i(t,e,r),f(s,t,r),u=!0},p(t,[e]){const r={};17&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){u||(h(s.$$.fragment,t),u=!0)},o(t){m(s.$$.fragment,t),u=!1},d(t){t&&l(e),$(s,t)}}}function z(t,e,s){let{articles:r}=e;return t.$set=t=>{"articles"in t&&s(0,r=t.articles)},[r]}class B extends t{constructor(t){super(),e(this,t,z,k,s,{articles:0})}}function C(t){let e,s;return e=new B({props:{articles:t[0]}}),{c(){a(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,r){f(e,t,r),s=!0},p(t,[s]){const r={};1&s&&(r.articles=t[0]),e.$set(r)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){$(e,t)}}}async function F({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({articles:t}))}function S(t,e,s){let{articles:r}=e;return t.$set=t=>{"articles"in t&&s(0,r=t.articles)},[r]}export default class extends t{constructor(t){super(),e(this,t,S,C,s,{articles:0})}}export{F as preload};
