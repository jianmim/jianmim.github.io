import{k as m,r as _,u as k,s as w,p as x,w as f,n as p,t as d,x as C,y as L,A as a,D as e,F as r,i as s,_ as l}from"./store-dof5ccn5.js";import{u as g,N as A}from"./index-xdJ7pE-g.js";const E=m({name:"layoutDefaults"}),B=m({...E,setup(M){const y=s(()=>l(()=>import("./aside-PQpEdDpk.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),v=s(()=>l(()=>import("./header-vjn_f7kK.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url)),R=s(()=>l(()=>import("./main-2FIrqyDr.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url)),t=_(""),o=_(),T=k(),h=g(),{themeConfig:n}=w(h),u=()=>{t.value.update(),o.value.layoutMainScrollbarRef.update()},c=()=>{p(()=>{setTimeout(()=>{u(),t.value.wrapRef.scrollTop=0,o.value!=null&&(o.value.layoutMainScrollbarRef.wrapRef.scrollTop=0)},500)})};return x(()=>{c(),A.done(600)}),f(()=>T.path,()=>{c()}),f(()=>[n.value.isTagsview,n.value.isFixedHeader],()=>{p(()=>{u()})},{deep:!0}),(S,D)=>{const b=d("el-scrollbar"),i=d("el-container");return C(),L(i,{class:"layout-container"},{default:a(()=>[e(r(y)),e(i,{class:"layout-container-view h100"},{default:a(()=>[e(b,{ref_key:"layoutScrollbarRef",ref:t,class:"layout-backtop"},{default:a(()=>[e(r(v)),e(r(R),{ref_key:"layoutMainRef",ref:o},null,512)]),_:1},512)]),_:1})]),_:1})}}});export{B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./aside-PQpEdDpk.js","./store-dof5ccn5.js","../css/store-dzCp3yyn.css","./index-xdJ7pE-g.js","../css/index-5Z0pdBTT.css","./header-vjn_f7kK.js","./main-2FIrqyDr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}