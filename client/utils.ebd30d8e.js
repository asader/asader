function t(){const t=localStorage.getItem("productsById")||"{}";return JSON.parse(t)}function i(i,e){const a=t(),n=a[i.id]||{...i,quantity:0};a[i.id]={...n,quantity:n.quantity+1},localStorage.setItem("productsById",JSON.stringify(a)),e.update(t=>{t[i.id]=t[i.id]||{quantity:0};let e=t[i.id];return e.quantity+=1,e.price=i.price*e.quantity,e.salePrice=i.salePrice*e.quantity,t})}function e(i,e){const a=t();delete a[i.id],localStorage.setItem("productsById",JSON.stringify(a)),e.update(t=>(t[i.id]=t[i.id]||{},delete t[i.id],t))}function a(i,e){const a=t(),n=a[i.id]||{...i,quantity:0};1!==n.quantity&&(a[i.id]={...n,quantity:n.quantity-1},localStorage.setItem("productsById",JSON.stringify(a)),e.update(t=>{let e=t[i.id];return e.quantity-=1,e.price=i.price*e.quantity,e.salePrice=i.salePrice*e.quantity,t}))}export{a as d,t as g,i,e as r};
