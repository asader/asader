import{S as s,i as a,s as r,e as t,a as e,t as c,m as l,c as o,b as f,f as i,g as n,d as u,o as h,h as d,j as g,k as p,p as v,A as m,q as x,r as b,v as $}from"./client.2429bc99.js";import"./config.7b5ad26e.js";import{P as E}from"./Price.6988f19f.js";function w(s){let a,r,w,y,j,I,P,k,D,V,_,A,T,q,G,H,M,S,z,B,C,F,J=s[0].title+"",K=s[0].weight+"";return C=new E({props:{product:s[0]}}),{c(){a=t("div"),r=t("div"),w=t("a"),y=t("img"),k=e(),D=t("div"),V=t("div"),_=t("a"),A=t("h3"),T=c(J),G=e(),H=t("p"),M=c(K),S=c(" грамм"),z=e(),B=t("p"),l(C.$$.fragment),this.h()},l(s){a=o(s,"DIV",{class:!0});var t=f(a);r=o(t,"DIV",{class:!0});var e=f(r);w=o(e,"A",{href:!0,class:!0});var c=f(w);y=o(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(i),e.forEach(i),k=n(t),D=o(t,"DIV",{class:!0});var l=f(D);V=o(l,"DIV",{class:!0});var d=f(V);_=o(d,"A",{href:!0,class:!0});var g=f(_);A=o(g,"H3",{class:!0});var p=f(A);T=u(p,J),p.forEach(i),g.forEach(i),G=n(d),H=o(d,"P",{class:!0});var v=f(H);M=u(v,K),S=u(v," грамм"),v.forEach(i),z=n(d),B=o(d,"P",{class:!0});var m=f(B);h(C.$$.fragment,m),m.forEach(i),d.forEach(i),l.forEach(i),t.forEach(i),this.h()},h(){d(y,"class","h-48 w-full object-cover"),y.src!==(j=s[0].cover.formats.medium.url)&&d(y,"src",j),d(y,"alt",I=s[0].cover.alternativeText),d(w,"href",P=s[0].product_category.slug+"/"+s[0].slug),d(w,"class","block"),d(r,"class","flex-shrink-0"),d(A,"class","text-2xl font-bold leading-tight text-gray-900"),d(_,"href",q=s[0].product_category.slug+"/"+s[0].slug),d(_,"class","block"),d(H,"class","mt-3 text-base leading-6 text-gray-500"),d(B,"class","mt-3 flex items-baseline text-xl leading-none font-extrabold"),d(V,"class","flex-1"),d(D,"class","flex-1 bg-white p-4 flex flex-col justify-between"),d(a,"class","flex flex-col rounded-lg shadow-lg overflow-hidden")},m(s,t){g(s,a,t),p(a,r),p(r,w),p(w,y),p(a,k),p(a,D),p(D,V),p(V,_),p(_,A),p(A,T),p(V,G),p(V,H),p(H,M),p(H,S),p(V,z),p(V,B),v(C,B,null),F=!0},p(s,[a]){(!F||1&a&&y.src!==(j=s[0].cover.formats.medium.url))&&d(y,"src",j),(!F||1&a&&I!==(I=s[0].cover.alternativeText))&&d(y,"alt",I),(!F||1&a&&P!==(P=s[0].product_category.slug+"/"+s[0].slug))&&d(w,"href",P),(!F||1&a)&&J!==(J=s[0].title+"")&&m(T,J),(!F||1&a&&q!==(q=s[0].product_category.slug+"/"+s[0].slug))&&d(_,"href",q),(!F||1&a)&&K!==(K=s[0].weight+"")&&m(M,K);const r={};1&a&&(r.product=s[0]),C.$set(r)},i(s){F||(x(C.$$.fragment,s),F=!0)},o(s){b(C.$$.fragment,s),F=!1},d(s){s&&i(a),$(C)}}}function y(s,a,r){let{product:t}=a;return s.$set=s=>{"product"in s&&r(0,t=s.product)},[t]}class j extends s{constructor(s){super(),a(this,s,y,w,r,{product:0})}}export{j as P};
