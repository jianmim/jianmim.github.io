import{k as M,r as D,s as m,L as P,l as b,o as H,w as L,t as g,B as I,C as N,F as f,x as F,M as O,D as p,A as S,y as q,G as z,P as $,i as w,_ as A}from"./store-mQZkmHj-.js";import{Z as j,u as G,a as Z,e as i}from"./index-lw7p-_pG.js";const J={class:"h100"},K=M({name:"layoutAside"}),Y=M({...K,setup(Q){const R=w(()=>A(()=>import("./index-ix6B7ZZl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),T=w(()=>A(()=>import("./vertical-vHVw5WJ3.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url)),u=D(),v=j(),B=G(),E=Z(),{routesList:y}=m(v),{themeConfig:s}=m(B),{isTagsViewCurrenFull:V}=m(E),a=P({menuList:[],clientWidth:0}),W=b(()=>{const{layout:e,isCollapse:t,menuBar:o}=s.value,l=["#FFFFFF","#FFF","#fff","#ffffff"].includes(o)?"layout-el-aside-br-color":"";if(a.clientWidth<=1e3)if(t){document.body.setAttribute("class","el-popup-parent--hidden");const x=document.querySelector(".layout-container"),d=document.createElement("div");return d.setAttribute("class","layout-aside-mobile-mode"),x.appendChild(d),d.addEventListener("click",r),[l,"layout-aside-mobile","layout-aside-mobile-open"]}else return r(),[l,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"||e==="classic"?t?[l,"layout-aside-pc-1"]:[l,"layout-aside-pc-220"]:t?[l,"layout-aside-pc-64"]:[l,"layout-aside-pc-220"]}),k=b(()=>{let{layout:e,isShowLogo:t}=s.value;return t&&e==="defaults"||t&&e==="columns"}),r=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var o;(o=e==null?void 0:e.parentNode)==null||o.removeChild(e)},300),document.body.clientWidth<1e3&&(s.value.isCollapse=!1),document.body.setAttribute("class","")},c=()=>{if(s.value.layout==="columns")return!1;a.menuList=h(y.value)},h=e=>e.filter(t=>{var o;return!((o=t.meta)!=null&&o.isHide)}).map(t=>(t=Object.assign({},t),t.children&&(t.children=h(t.children)),t)),_=e=>{a.clientWidth=e},C=e=>{let{layout:t}=s.value;if(t!=="columns")return!1;e||i.emit("restoreDefault"),s.value.isColumnsMenuHoverPreload&&v.setColumnsMenuHover(e)};return H(()=>{_(document.body.clientWidth),c(),i.on("setSendColumnsChildren",e=>{a.menuList=e.children}),i.on("setSendClassicChildren",e=>{let{layout:t,isClassicSplitMenu:o}=s.value;t==="classic"&&o&&(e.children.length<=1?s.value.isCollapse=!0:s.value.isCollapse=!1,a.menuList=[],a.menuList=e.children)}),i.on("getBreadcrumbIndexSetFilterRoutes",()=>{c()}),i.on("layoutMobileResize",e=>{_(e.clientWidth),r()})}),L(()=>[s.value.isShowLogoChange,s.value.isShowLogo,s.value.layout,s.value.isClassicSplitMenu],([e,t,o,n])=>{if(e!==t&&u.value&&u.value.update(),o==="classic"&&n)return!1}),L(()=>y.value,()=>{c()}),(e,t)=>{const o=g("el-scrollbar"),n=g("el-aside");return I((F(),O("div",J,[p(n,{class:$(["layout-aside",W.value])},{default:S(()=>[k.value?(F(),q(f(R),{key:0})):z("",!0),p(o,{class:"flex-auto",ref_key:"layoutAsideScrollbarRef",ref:u,onMouseenter:t[0]||(t[0]=l=>C(!0)),onMouseleave:t[1]||(t[1]=l=>C(!1))},{default:S(()=>[p(f(T),{menuList:a.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[N,!f(V)]])}}});export{Y as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-ix6B7ZZl.js","./store-mQZkmHj-.js","../css/store-dzCp3yyn.css","./index-lw7p-_pG.js","../css/index-5Z0pdBTT.css","./logo-mini-gwMegSab.js","./_plugin-vue_export-helper-x3n3nnut.js","../css/index-O1w0GJjh.css","./vertical-vHVw5WJ3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
