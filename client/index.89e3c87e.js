import{S as t,i as o,s,a as r,m as a,w as e,f as c,g as n,o as p,j as i,p as m,q as u,r as d,v as f}from"./client.2429bc99.js";import"./config.7b5ad26e.js";import"./Footer.44426527.js";import"./Price.6988f19f.js";import"./ProductCard.ef541259.js";import"./LayoutWithHeader.cf0acc56.js";import"./Breadcrumb.1a2a2078.js";import{P as g}from"./Products.acf8fb41.js";function h(t){let o,s,h;return s=new g({props:{products:t[1],category:t[0],components:t[2]}}),{c(){o=r(),a(s.$$.fragment),this.h()},l(t){e('[data-svelte="svelte-akbpoo"]',document.head).forEach(c),o=n(t),p(s.$$.fragment,t),this.h()},h(){document.title="products"},m(t,r){i(t,o,r),m(s,t,r),h=!0},p(t,[o]){const r={};2&o&&(r.products=t[1]),1&o&&(r.category=t[0]),4&o&&(r.components=t[2]),s.$set(r)},i(t){h||(u(s.$$.fragment,t),h=!0)},o(t){d(s.$$.fragment,t),h=!1},d(t){t&&c(o),f(s,t)}}}async function y({params:t,query:o}){const s=await this.fetch(t.category+".json"),{products:r,components:a}=await s.json();if(200===s.status)return{products:r,components:a,category:r[0].product_category};this.error(s.status,data.message)}function j(t,o,s){let{category:r}=o,{products:a}=o,{components:e}=o;return t.$set=t=>{"category"in t&&s(0,r=t.category),"products"in t&&s(1,a=t.products),"components"in t&&s(2,e=t.components)},[r,a,e]}export default class extends t{constructor(t){super(),o(this,t,j,h,s,{category:0,products:1,components:2})}}export{y as preload};
