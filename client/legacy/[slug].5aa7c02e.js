import{_ as t,a as n,b as r,c as e,i as c,s as o,d as a,S as i,e as s,t as u,f,g as l,h as d,j as h,k as v,l as p,m,n as g,o as $,w as x,H as y,p as w,r as E,u as b,v as D,y as k,z as R,A as I,C as V,D as j,E as P,q as B,x as L,I as _,M as S,P as H,F as M,G as T,B as C}from"./client.1b81e0cd.js";import"./config.e94a8f5a.js";import"./Footer.79642ec4.js";import{L as A}from"./LayoutWithHeader.b9607ef3.js";import{B as q}from"./Breadcrumb.db849123.js";import{i as F}from"./utils.c48507a8.js";import{P as G}from"./Price.5957d971.js";function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function U(t){var n,r,e,c,o,a;return{c:function(){n=s("div"),r=s("dt"),e=u(t[0]),c=f(),o=s("dd"),a=u(t[1]),this.h()},l:function(i){n=l(i,"DIV",{class:!0});var s=d(n);r=l(s,"DT",{class:!0});var u=d(r);e=h(u,t[0]),u.forEach(v),c=p(s),o=l(s,"DD",{class:!0});var f=d(o);a=h(f,t[1]),f.forEach(v),s.forEach(v),this.h()},h:function(){m(r,"class","text-sm leading-5 font-medium text-gray-500"),m(o,"class","mb-0 text-sm leading-5 text-gray-900 mt-0 md:col-span-2"),m(n,"class","mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 border-t border-gray-200 px-4 sm:px-4 md:px-6 py-2")},m:function(t,i){g(t,n,i),$(n,r),$(r,e),$(n,c),$(n,o),$(o,a)},p:function(t,n){var r=x(n,1)[0];1&r&&y(e,t[0]),2&r&&y(a,t[1])},i:w,o:w,d:function(t){t&&v(n)}}}function z(t,n,r){var e=n.title,c=n.value;return t.$set=function(t){"title"in t&&r(0,e=t.title),"value"in t&&r(1,c=t.value)},[e,c]}var O=function(n){t(s,i);var r=N(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,z,U,o,{title:0,value:1}),n}return s}();function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function J(t,n,r){var e=t.slice();return e[1]=n[r].title,e[2]=n[r].value,e}function K(t){var n,r;return n=new O({props:{title:t[1],value:t[2]}}),{c:function(){E(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,e){D(n,t,e),r=!0},p:function(t,r){var e={};1&r&&(e.title=t[1]),1&r&&(e.value=t[2]),n.$set(e)},i:function(t){r||(k(n.$$.fragment,t),r=!0)},o:function(t){R(n.$$.fragment,t),r=!1},d:function(t){I(n,t)}}}function Q(t){for(var n,r,e,c,o,a,i,w,E=t[0],b=[],D=0;D<E.length;D+=1)b[D]=K(J(t,E,D));var I=function(t){return R(b[t],1,1,(function(){b[t]=null}))};return{c:function(){n=s("div"),r=s("div"),e=s("h3"),c=u(t[1]),o=f(),a=s("div"),i=s("dl");for(var l=0;l<b.length;l+=1)b[l].c();this.h()},l:function(s){n=l(s,"DIV",{class:!0});var u=d(n);r=l(u,"DIV",{class:!0});var f=d(r);e=l(f,"H3",{class:!0});var m=d(e);c=h(m,t[1]),m.forEach(v),f.forEach(v),o=p(u),a=l(u,"DIV",{});var g=d(a);i=l(g,"DL",{});for(var $=d(i),x=0;x<b.length;x+=1)b[x].l($);$.forEach(v),g.forEach(v),u.forEach(v),this.h()},h:function(){m(e,"class","text-lg leading-6 font-medium text-gray-900 m-0"),m(r,"class","px-4 py-4 sm:px-6"),m(n,"class","bg-white shadow overflow-hidden sm:rounded-lg")},m:function(t,s){g(t,n,s),$(n,r),$(r,e),$(e,c),$(n,o),$(n,a),$(a,i);for(var u=0;u<b.length;u+=1)b[u].m(i,null);w=!0},p:function(t,n){var r=x(n,1)[0];if((!w||2&r)&&y(c,t[1]),1&r){var e;for(E=t[0],e=0;e<E.length;e+=1){var o=J(t,E,e);b[e]?(b[e].p(o,r),k(b[e],1)):(b[e]=K(o),b[e].c(),k(b[e],1),b[e].m(i,null))}for(V(),e=E.length;e<b.length;e+=1)I(e);j()}},i:function(t){if(!w){for(var n=0;n<E.length;n+=1)k(b[n]);w=!0}},o:function(t){b=b.filter(Boolean);for(var n=0;n<b.length;n+=1)R(b[n]);w=!1},d:function(t){t&&v(n),P(b,t)}}}function X(t,n,r){var e=n.title,c=n.attributes;return t.$set=function(t){"title"in t&&r(1,e=t.title),"attributes"in t&&r(0,c=t.attributes)},[c,e]}var Y=function(n){t(s,i);var r=W(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,X,Q,o,{title:1,attributes:0}),n}return s}();function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function tt(t){var n,r,e=t[1].default,c=B(e,t,t[0],null);return{c:function(){n=s("span"),c&&c.c(),this.h()},l:function(t){n=l(t,"SPAN",{class:!0});var r=d(n);c&&c.l(r),r.forEach(v),this.h()},h:function(){m(n,"class","inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800 m-1")},m:function(t,e){g(t,n,e),c&&c.m(n,null),r=!0},p:function(t,n){var r=x(n,1)[0];c&&c.p&&1&r&&L(c,e,t,t[0],r,null,null)},i:function(t){r||(k(c,t),r=!0)},o:function(t){R(c,t),r=!1},d:function(t){t&&v(n),c&&c.d(t)}}}function nt(t,n,r){var e=n.$$slots,c=void 0===e?{}:e,o=n.$$scope;return t.$set=function(t){"$$scope"in t&&r(0,o=t.$$scope)},[o,c]}var rt=function(n){t(s,i);var r=Z(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,nt,tt,o,{}),n}return s}();function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function ct(t){var n,r,e,c,o,a,i,w,V,j,P,B,L,H,M,T,C,A,q,F,N,U,z,O,W,J,K,Q,X,Y,Z,tt,nt,rt,et,ct,ot,at,it,st,ut,ft=t[0].weight+"";return c=new G({props:{product:t[0]}}),{c:function(){n=s("div"),r=s("div"),e=s("div"),E(c.$$.fragment),o=f(),a=s("p"),i=u(ft),w=u(" грамм."),V=f(),j=s("div"),P=s("ul"),B=s("li"),L=s("div"),H=_("svg"),M=_("path"),T=f(),C=s("p"),A=u("Быстрая доставка"),q=f(),F=s("li"),N=s("div"),U=_("svg"),z=_("path"),O=f(),W=s("p"),J=u("Гарантия качества"),K=f(),Q=s("li"),X=s("div"),Y=_("svg"),Z=_("path"),tt=f(),nt=s("p"),rt=u("Произведено в России"),et=f(),ct=s("div"),ot=s("button"),at=u("Добавить в корзину"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var s=d(n);r=l(s,"DIV",{class:!0});var u=d(r);e=l(u,"DIV",{class:!0});var f=d(e);b(c.$$.fragment,f),f.forEach(v),o=p(u),a=l(u,"P",{class:!0});var m=d(a);i=h(m,ft),w=h(m," грамм."),m.forEach(v),u.forEach(v),V=p(s),j=l(s,"DIV",{class:!0});var g=d(j);P=l(g,"UL",{});var $=d(P);B=l($,"LI",{class:!0});var x=d(B);L=l(x,"DIV",{class:!0});var y=d(L);H=l(y,"svg",{class:!0,stroke:!0,fill:!0,viewBox:!0},1);var E=d(H);M=l(E,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(M).forEach(v),E.forEach(v),y.forEach(v),T=p(x),C=l(x,"P",{class:!0});var D=d(C);A=h(D,"Быстрая доставка"),D.forEach(v),x.forEach(v),q=p($),F=l($,"LI",{class:!0});var k=d(F);N=l(k,"DIV",{class:!0});var R=d(N);U=l(R,"svg",{class:!0,stroke:!0,fill:!0,viewBox:!0},1);var I=d(U);z=l(I,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(z).forEach(v),I.forEach(v),R.forEach(v),O=p(k),W=l(k,"P",{class:!0});var _=d(W);J=h(_,"Гарантия качества"),_.forEach(v),k.forEach(v),K=p($),Q=l($,"LI",{class:!0});var S=d(Q);X=l(S,"DIV",{class:!0});var G=d(X);Y=l(G,"svg",{class:!0,stroke:!0,fill:!0,viewBox:!0},1);var it=d(Y);Z=l(it,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(Z).forEach(v),it.forEach(v),G.forEach(v),tt=p(S),nt=l(S,"P",{class:!0});var st=d(nt);rt=h(st,"Произведено в России"),st.forEach(v),S.forEach(v),$.forEach(v),et=p(g),ct=l(g,"DIV",{class:!0});var ut=d(ct);ot=l(ut,"BUTTON",{type:!0,class:!0});var lt=d(ot);at=h(lt,"Добавить в корзину"),lt.forEach(v),ut.forEach(v),g.forEach(v),s.forEach(v),this.h()},h:function(){m(e,"class","mt-4 flex items-baseline xl:text-4xl md:text-3xl text-2xl leading-none font-extrabold"),m(a,"class","mt-2 text-lg leading-7 text-gray-500"),m(r,"class","bg-white p-2 md:p-4"),m(M,"stroke-linecap","round"),m(M,"stroke-linejoin","round"),m(M,"stroke-width","2"),m(M,"d","M5 13l4 4L19 7"),m(H,"class","h-6 w-6 text-green-500"),m(H,"stroke","currentColor"),m(H,"fill","none"),m(H,"viewBox","0 0 24 24"),m(L,"class","flex-shrink-0"),m(C,"class","ml-3 text-base leading-6 text-gray-700"),m(B,"class","flex items-start"),m(z,"stroke-linecap","round"),m(z,"stroke-linejoin","round"),m(z,"stroke-width","2"),m(z,"d","M5 13l4 4L19 7"),m(U,"class","h-6 w-6 text-green-500"),m(U,"stroke","currentColor"),m(U,"fill","none"),m(U,"viewBox","0 0 24 24"),m(N,"class","flex-shrink-0"),m(W,"class","ml-3 text-base leading-6 text-gray-700"),m(F,"class","mt-4 flex items-start"),m(Z,"stroke-linecap","round"),m(Z,"stroke-linejoin","round"),m(Z,"stroke-width","2"),m(Z,"d","M5 13l4 4L19 7"),m(Y,"class","h-6 w-6 text-green-500"),m(Y,"stroke","currentColor"),m(Y,"fill","none"),m(Y,"viewBox","0 0 24 24"),m(X,"class","flex-shrink-0"),m(nt,"class","ml-3 text-base leading-6 text-gray-700"),m(Q,"class","mt-4 flex items-start"),m(ot,"type","button"),m(ot,"class","w-full text-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"),m(ct,"class","mt-6 rounded-md shadow"),m(j,"class","p-2 md:p-4 bg-gray-50"),m(n,"class","rounded-lg shadow-lg overflow-hidden")},m:function(s,u){g(s,n,u),$(n,r),$(r,e),D(c,e,null),$(r,o),$(r,a),$(a,i),$(a,w),$(n,V),$(n,j),$(j,P),$(P,B),$(B,L),$(L,H),$(H,M),$(B,T),$(B,C),$(C,A),$(P,q),$(P,F),$(F,N),$(N,U),$(U,z),$(F,O),$(F,W),$(W,J),$(P,K),$(P,Q),$(Q,X),$(X,Y),$(Y,Z),$(Q,tt),$(Q,nt),$(nt,rt),$(j,et),$(j,ct),$(ct,ot),$(ot,at),it=!0,st||(ut=S(ot,"click",t[1]),st=!0)},p:function(t,n){var r=x(n,1)[0],e={};1&r&&(e.product=t[0]),c.$set(e),(!it||1&r)&&ft!==(ft=t[0].weight+"")&&y(i,ft)},i:function(t){it||(k(c.$$.fragment,t),it=!0)},o:function(t){R(c.$$.fragment,t),it=!1},d:function(t){t&&v(n),I(c),st=!1,ut()}}}function ot(t,n,r){var e=n.product;return t.$set=function(t){"product"in t&&r(0,e=t.product)},[e,function(){return F(e,H)}]}var at=function(n){t(s,i);var r=et(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,ot,ct,o,{product:0}),n}return s}();function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function st(t,n,r){var e=t.slice();return e[3]=n[r],e}function ut(t){var n,r,e,c,o,a,i=t[0].title+"";return o=new q({props:{items:t[2]}}),{c:function(){n=s("div"),r=s("h1"),e=u(i),c=f(),E(o.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{slot:!0});var a=d(n);r=l(a,"H1",{class:!0});var s=d(r);e=h(s,i),s.forEach(v),c=p(a),b(o.$$.fragment,a),a.forEach(v),this.h()},h:function(){m(r,"class","text-3xl font-bold leading-tight text-gray-900"),m(n,"slot","header")},m:function(t,i){g(t,n,i),$(n,r),$(r,e),$(n,c),D(o,n,null),a=!0},p:function(t,n){(!a||1&n)&&i!==(i=t[0].title+"")&&y(e,i)},i:function(t){a||(k(o.$$.fragment,t),a=!0)},o:function(t){R(o.$$.fragment,t),a=!1},d:function(t){t&&v(n),I(o)}}}function ft(t){var n,r,e,c,o=t[3].name+"";return{c:function(){n=s("a"),r=u(o),c=f(),this.h()},l:function(t){n=l(t,"A",{href:!0});var e=d(n);r=h(e,o),e.forEach(v),c=p(t),this.h()},h:function(){m(n,"href",e="".concat(t[0].product_category.slug,"/with-").concat(t[3].slug))},m:function(t,e){g(t,n,e),$(n,r),g(t,c,e)},p:function(t,c){1&c&&o!==(o=t[3].name+"")&&y(r,o),1&c&&e!==(e="".concat(t[0].product_category.slug,"/with-").concat(t[3].slug))&&m(n,"href",e)},d:function(t){t&&v(n),t&&v(c)}}}function lt(t){var n,r;return n=new rt({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c:function(){E(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,e){D(n,t,e),r=!0},p:function(t,r){var e={};65&r&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i:function(t){r||(k(n.$$.fragment,t),r=!0)},o:function(t){R(n.$$.fragment,t),r=!1},d:function(t){I(n,t)}}}function dt(t){var n,r,e,c,o,a,i,x,w,B,L,_,S,H,M,T,C,A,q,F,G,N,U,z,O,W,J=t[0].description+"";T=new at({props:{product:t[0]}});for(var K=t[0].product_compositions,Q=[],X=0;X<K.length;X+=1)Q[X]=lt(st(t,K,X));var Z=function(t){return R(Q[t],1,1,(function(){Q[t]=null}))};return O=new Y({props:{attributes:t[1],title:"Информация о чае"}}),{c:function(){n=s("div"),r=s("div"),e=s("div"),c=s("img"),i=f(),x=s("div"),w=s("h3"),B=u("Описание:"),L=f(),_=s("div"),S=u(J),H=f(),M=s("div"),E(T.$$.fragment),C=f(),A=s("div"),q=s("h3"),F=u("Состав:"),G=f(),N=s("div");for(var t=0;t<Q.length;t+=1)Q[t].c();U=f(),z=s("div"),E(O.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{slot:!0});var o=d(n);r=l(o,"DIV",{class:!0});var a=d(r);e=l(a,"DIV",{class:!0});var s=d(e);c=l(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(v),i=p(a),x=l(a,"DIV",{class:!0});var u=d(x);w=l(u,"H3",{class:!0});var f=d(w);B=h(f,"Описание:"),f.forEach(v),L=p(u),_=l(u,"DIV",{class:!0});var m=d(_);S=h(m,J),m.forEach(v),u.forEach(v),H=p(a),M=l(a,"DIV",{class:!0});var g=d(M);b(T.$$.fragment,g),g.forEach(v),C=p(a),A=l(a,"DIV",{class:!0});var $=d(A);q=l($,"H3",{class:!0});var y=d(q);F=h(y,"Состав:"),y.forEach(v),G=p($),N=l($,"DIV",{});for(var E=d(N),D=0;D<Q.length;D+=1)Q[D].l(E);E.forEach(v),$.forEach(v),U=p(a),z=l(a,"DIV",{class:!0});var k=d(z);b(O.$$.fragment,k),k.forEach(v),a.forEach(v),o.forEach(v),this.h()},h:function(){c.src!==(o=t[0].cover.formats.medium.url)&&m(c,"src",o),m(c,"alt",a=t[0].cover.alternativeText),m(c,"class","w-full rounded-lg"),m(e,"class","w-full md:w-1/2 lg:w-5/12 px-2 mb-4 order-1\t"),m(w,"class","text-lg leading-6 font-medium text-gray-900 m-0"),m(_,"class","content"),m(x,"class","w-full sm:w-1/2 md:w1/2 lg:w-1/3 px-2 order-2"),m(M,"class","w-full sm:w-1/2 lg:w-1/4 px-2 mb-6 order-3"),m(q,"class","text-lg leading-6 font-medium text-gray-900 m-0 mx-1"),m(A,"class","w-full sm:w-1/2 md:w-1/2 px-2 mb-4 order-4 md:order-5"),m(z,"class","w-full md:w-1/2 px-2 mb-4 order-5 md:order-4"),m(r,"class","flex flex-wrap -mx-2"),m(n,"slot","content")},m:function(t,o){g(t,n,o),$(n,r),$(r,e),$(e,c),$(r,i),$(r,x),$(x,w),$(w,B),$(x,L),$(x,_),$(_,S),$(r,H),$(r,M),D(T,M,null),$(r,C),$(r,A),$(A,q),$(q,F),$(A,G),$(A,N);for(var a=0;a<Q.length;a+=1)Q[a].m(N,null);$(r,U),$(r,z),D(O,z,null),W=!0},p:function(t,n){(!W||1&n&&c.src!==(o=t[0].cover.formats.medium.url))&&m(c,"src",o),(!W||1&n&&a!==(a=t[0].cover.alternativeText))&&m(c,"alt",a),(!W||1&n)&&J!==(J=t[0].description+"")&&y(S,J);var r={};if(1&n&&(r.product=t[0]),T.$set(r),1&n){var e;for(K=t[0].product_compositions,e=0;e<K.length;e+=1){var i=st(t,K,e);Q[e]?(Q[e].p(i,n),k(Q[e],1)):(Q[e]=lt(i),Q[e].c(),k(Q[e],1),Q[e].m(N,null))}for(V(),e=K.length;e<Q.length;e+=1)Z(e);j()}},i:function(t){if(!W){k(T.$$.fragment,t);for(var n=0;n<K.length;n+=1)k(Q[n]);k(O.$$.fragment,t),W=!0}},o:function(t){R(T.$$.fragment,t),Q=Q.filter(Boolean);for(var n=0;n<Q.length;n+=1)R(Q[n]);R(O.$$.fragment,t),W=!1},d:function(t){t&&v(n),I(T),P(Q,t),I(O)}}}function ht(t){var n;return{c:function(){n=f()},l:function(t){n=p(t)},m:function(t,r){g(t,n,r)},p:w,i:w,o:w,d:function(t){t&&v(n)}}}function vt(t){var n,r;return n=new A({props:{$$slots:{default:[ht],content:[dt],header:[ut]},$$scope:{ctx:t}}}),{c:function(){E(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,e){D(n,t,e),r=!0},p:function(t,r){var e=x(r,1)[0],c={};65&e&&(c.$$scope={dirty:e,ctx:t}),n.$set(c)},i:function(t){r||(k(n.$$.fragment,t),r=!0)},o:function(t){R(n.$$.fragment,t),r=!1},d:function(t){I(n,t)}}}function pt(t,n,r){var e=n.product,c=[{title:"Вес",value:"".concat(e.weight," грамм")},{title:"Производитель",value:e.product_brand.name},{title:"Вид чая",value:e.product_category.name},{title:"Срок годности",value:e.shelfLife}],o=[{url:e.product_category.slug,name:e.product_category.name},{url:"",name:e.title}];return t.$set=function(t){"product"in t&&r(0,e=t.product)},[e,c,o]}var mt=function(n){t(s,i);var r=it(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,pt,vt,o,{product:0}),n}return s}();function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function $t(t){var n,r,e,c;return document.title=n=t[0].title,e=new mt({props:{product:t[0]}}),{c:function(){r=f(),E(e.$$.fragment)},l:function(t){C('[data-svelte="svelte-h38v7l"]',document.head).forEach(v),r=p(t),b(e.$$.fragment,t)},m:function(t,n){g(t,r,n),D(e,t,n),c=!0},p:function(t,r){var o=x(r,1)[0];(!c||1&o)&&n!==(n=t[0].title)&&(document.title=n);var a={};1&o&&(a.product=t[0]),e.$set(a)},i:function(t){c||(k(e.$$.fragment,t),c=!0)},o:function(t){R(e.$$.fragment,t),c=!1},d:function(t){t&&v(r),I(e,t)}}}function xt(t){return yt.apply(this,arguments)}function yt(){return(yt=M(T.mark((function t(n){var r,e,c;return T.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,n.query,t.next=3,this.fetch("".concat(r.category,"/").concat(r.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(c=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{product:c});case 11:this.error(e.status,data.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function wt(t,n,r){var e=n.product;return t.$set=function(t){"product"in t&&r(0,e=t.product)},[e]}var Et=function(n){t(s,i);var r=gt(s);function s(t){var n;return e(this,s),n=r.call(this),c(a(n),t,wt,$t,o,{product:0}),n}return s}();export default Et;export{xt as preload};
