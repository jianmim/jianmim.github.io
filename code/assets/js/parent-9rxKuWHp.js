import{k as K,u as C,a0 as I,s as p,L as x,l as m,o as B,n as h,p as P,q as D,w as E,t as M,x as l,M as S,D as o,A as f,W as _,y as d,B as w,C as R,$ as O,a8 as U,F as q,i as F,_ as W}from"./store-dof5ccn5.js";import{c as $,u as b,e as y,S as j}from"./index-xdJ7pE-g.js";const z={class:"layout-parent"},G=K({name:"layoutParentView"}),X=K({...G,setup(H){const V=F(()=>W(()=>import("./iframes-p2H7ghQx.js"),__vite__mapDeps([0,1,2]),import.meta.url)),t=C(),g=I(),A=$(),L=b(),{keepAliveNames:r,cachedViews:c}=p(A),{themeConfig:n}=p(L),e=x({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),u=m(()=>n.value.animation),k=m(()=>n.value.isTagsview?c.value:e.keepAliveNameList),v=m(()=>t.meta.isIframe),T=async()=>{g.getRoutes().forEach(s=>{s.meta.isIframe&&(s.meta.isIframeOpen=!1,s.meta.loading=!0,e.iframeList.push({...s}))})};return B(()=>{e.keepAliveNameList=r.value,y.on("onTagsViewRefreshRouterView",s=>{e.keepAliveNameList=r.value.filter(a=>t.name!==a),e.refreshRouterViewKey="",e.iframeRefreshKey="",h(()=>{e.refreshRouterViewKey=s,e.iframeRefreshKey=s,e.keepAliveNameList=r.value})})}),P(()=>{T(),h(()=>{setTimeout(()=>{if(n.value.isCacheTagsView){let s=j.get("tagsViewList")||[];c.value=s.filter(a=>{var i;return(i=a.meta)==null?void 0:i.isKeepAlive}).map(a=>a.name)}},0)})}),D(()=>{y.off("onTagsViewRefreshRouterView",()=>{})}),E(()=>t.fullPath,()=>{e.refreshRouterViewKey=decodeURI(t.fullPath)},{immediate:!0}),(s,a)=>{const i=M("router-view");return l(),S("div",z,[o(i,null,{default:f(({Component:N})=>[o(_,{name:u.value,mode:"out-in"},{default:f(()=>[(l(),d(U,{include:k.value},[w((l(),d(O(N),{key:e.refreshRouterViewKey,class:"w100"})),[[R,!v.value]])],1032,["include"]))]),_:2},1032,["name"])]),_:1}),o(_,{name:u.value,mode:"out-in"},{default:f(()=>[w(o(q(V),{class:"w100",refreshKey:e.iframeRefreshKey,name:u.value,list:e.iframeList},null,8,["refreshKey","name","list"]),[[R,v.value]])]),_:1},8,["name"])])}}});export{X as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./iframes-p2H7ghQx.js","./store-dof5ccn5.js","../css/store-dzCp3yyn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}