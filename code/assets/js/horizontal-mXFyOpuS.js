import{k as L,s as _,u as P,L as w,l as z,o as H,aP as O,t as l,x as o,M as m,D as a,A as r,a4 as k,a5 as V,y as C,O as g,T as d,F as E,al as F,S as y,Q as N,i as j,_ as v}from"./store-mQZkmHj-.js";import{Z as Q,u as U,o as Z,e as q}from"./index-lw7p-_pG.js";import{_ as G}from"./_plugin-vue_export-helper-x3n3nnut.js";const J={class:"el-menu-horizontal-warp"},K=L({name:"navMenuHorizontal"}),W=L({...K,props:{menuList:{type:Array,default:()=>[]}},setup(S){const A=j(()=>v(()=>import("./subItem-kRcN59cM.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),x=S,R=Q(),b=U(),{routesList:B}=_(R),{themeConfig:p}=_(b),D=P(),c=w({defaultActive:""}),I=z(()=>x.menuList),f=s=>s.filter(t=>{var e;return!((e=t.meta)!=null&&e.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=f(t.children)),t)),T=s=>{const t=s.split("/");let e={children:[]};return f(B.value).map((i,u)=>{i.path===`/${t[1]}`&&(i.k=u,e.item={...i},e.children=[{...i}],i.children&&(e.children=i.children))}),e},h=s=>{const{path:t,meta:e}=s;if(p.value.layout==="classic")c.defaultActive=`/${t==null?void 0:t.split("/")[1]}`;else{const i=e!=null&&e.isDynamic?e.isDynamicPath.split("/"):t.split("/");i.length>=4&&(e!=null&&e.isHide)?c.defaultActive=i.splice(0,3).join("/"):c.defaultActive=t}},$=s=>{Z.handleOpenLink(s)};return H(()=>{h(D)}),O(s=>{h(s);let{layout:t,isClassicSplitMenu:e}=p.value;t==="classic"&&e&&q.emit("setSendClassicChildren",T(s.path))}),(s,t)=>{const e=l("SvgIcon"),i=l("el-sub-menu"),u=l("el-menu-item"),M=l("el-menu");return o(),m("div",J,[a(M,{router:"","default-active":c.defaultActive,"background-color":"transparent",mode:"horizontal"},{default:r(()=>[(o(!0),m(k,null,V(I.value,n=>(o(),m(k,null,[n.children&&n.children.length>0?(o(),C(i,{index:n.path,key:n.path},{title:r(()=>[a(e,{name:n.meta.icon},null,8,["name"]),g("span",null,d(s.$t(n.meta.title)),1)]),default:r(()=>[a(E(A),{chil:n.children},null,8,["chil"])]),_:2},1032,["index"])):(o(),C(u,{index:n.path,key:n.path},F({_:2},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?{name:"title",fn:r(()=>[a(e,{name:n.meta.icon},null,8,["name"]),y(" "+d(s.$t(n.meta.title)),1)]),key:"0"}:{name:"title",fn:r(()=>[g("a",{class:"w100",onClick:N(X=>$(n),["prevent"])},[a(e,{name:n.meta.icon},null,8,["name"]),y(" "+d(s.$t(n.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])])}}}),ne=G(W,[["__scopeId","data-v-bfa3ac3f"]]);export{ne as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./subItem-kRcN59cM.js","./store-mQZkmHj-.js","../css/store-dzCp3yyn.css","./index-lw7p-_pG.js","../css/index-5Z0pdBTT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
