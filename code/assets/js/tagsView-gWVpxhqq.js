import{k as te,r as _,s as $,u as Te,a0 as Re,L as be,l as O,o as xe,q as qe,aO as Se,p as _e,aP as De,w as Ae,t as Y,x as p,M as C,D as E,A as Ie,O as Z,P as M,a4 as J,a5 as ke,Q as T,G as R,y as N,T as Pe,F as Ue,i as $e,_ as Oe,n as j,E as Ee,am as Me}from"./store-mQZkmHj-.js";import{a as ee,u as Ne,Z as je,c as Be,o as se,e as d,S as y,_ as ae}from"./index-lw7p-_pG.js";import{_ as Fe}from"./_plugin-vue_export-helper-x3n3nnut.js";const He=["data-url","onContextmenu","onMousedown","onClick"],We={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},ve=te({name:"layoutTagsView"}),ze=te({...ve,setup(Ke){const ie=$e(()=>Oe(()=>import("./contextmenu-Dpxsagmy.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),m=_([]),b=_(),B=_(),ne=_(),le=ee(),re=Ne(),ue=ee(),ce=je(),{themeConfig:F}=$(re),{tagsViewRoutes:H}=$(ue),{routesList:oe}=$(ce),h=Be(),f=Te(),o=Re(),t=be({routeActive:"",routePath:f.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),fe=O(()=>F.value.tagsStyle),u=O(()=>F.value),me=O(()=>s=>se.setTagsViewNameI18n(s)),x=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,g=s=>{y.set("tagsViewList",s)},W=async()=>{t.routeActive=await w(f),t.routePath=await f.meta.isDynamic?f.meta.isDynamicPath:f.path,t.tagsViewList=[],t.tagsViewRoutesList=H.value,ge()},ge=async()=>{y.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await y.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),h.addCachedView(s))}),await D(f.path,f)),Q(u.value.isShareTagsView?t.routePath:t.routeActive)},v=async(s,e)=>{var i,r;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(l=>{var c,L;return l.path===a&&ae((c=e==null?void 0:e.meta)!=null&&c.isDynamic?l.params?l.params:null:l.query?l.query:null,(L=e==null?void 0:e.meta)!=null&&L.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let l=t.tagsViewRoutesList.find(c=>c.path===a);if(!l||l.meta.isAffix||l.meta.isLink&&!l.meta.isIframe)return!1;(r=e==null?void 0:e.meta)!=null&&r.isDynamic?l.params=e.params:l.query=e==null?void 0:e.query,l.url=w(l),t.tagsViewList.push({...l}),await h.addCachedView(l),g(t.tagsViewList)}},z=(s,e)=>{var n;let a=(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(i=>{var r,l,c;i.path===a&&!ae((r=e==null?void 0:e.meta)!=null&&r.isDynamic?i.params?i.params:null:i.query?i.query:null,(l=e==null?void 0:e.meta)!=null&&l.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((c=e==null?void 0:e.meta)!=null&&c.isDynamic?i.params=e.params:i.query=e==null?void 0:e.query,i.url=w(i),g(t.tagsViewList))})},D=(s,e)=>{j(async()=>{var n,i,r;let a;if((n=e==null?void 0:e.meta)!=null&&n.isDynamic){if(u.value.isShareTagsView?await z(s,e):await v(s,e),t.tagsViewList.some(l=>{var c;return l.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)}))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(l=>{var c;return l.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)})}else{if(u.value.isShareTagsView?await z(s,e):await v(s,e),t.tagsViewList.some(l=>l.path===s))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(l=>l.path===s)}if(!a||(i=a==null?void 0:a.meta)!=null&&i.isLink&&!a.meta.isIframe)return!1;(r=e==null?void 0:e.meta)!=null&&r.isDynamic?a.params=e!=null&&e.params?e==null?void 0:e.params:f.params:a.query=e!=null&&e.query?e==null?void 0:e.query:f.query,a.url=w(a),await h.addCachedView(a),await t.tagsViewList.push({...a}),await g(t.tagsViewList)})},K=async s=>{var n;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(i=>{i.transUrl=V(i),i.transUrl?i.transUrl===V(i)&&(a=i):i.path===e&&(a=i)}),!a)return!1;await h.delCachedView(a),d.emit("onTagsViewRefreshRouterView",s),(n=a.meta)!=null&&n.isKeepAlive&&h.addCachedView(a)},A=s=>{t.tagsViewList.map((e,a,n)=>{var i;(i=e.meta)!=null&&i.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(h.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?n[n.length-1].meta.isDynamic?a!==n.length?o.push({name:n[a].name,params:n[a].params}):o.push({name:n[n.length-1].name,params:n[n.length-1].params}):a!==n.length?o.push({path:n[a].path,query:n[a].query}):o.push({path:n[n.length-1].path,query:n[n.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(n[a].meta.isDynamic?o.push({name:n[a].name,params:n[a].params}):o.push({path:n[a].path,query:n[a].query}))},0))}),g(t.tagsViewList)},we=s=>{y.get("tagsViewList")&&(t.tagsViewList=[],y.get("tagsViewList").map(e=>{var a;(a=e.meta)!=null&&a.isAffix&&!e.meta.isHide&&(e.url=w(e),h.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),D(s,f),g(t.tagsViewList))},he=()=>{y.get("tagsViewList")&&(h.delAllCachedViews(),t.tagsViewList=[],y.get("tagsViewList").map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}),o.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),g(t.tagsViewList))},pe=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await o.push({name:e.name,params:e.params}):await o.push({name:e.name,query:e.query}),le.setCurrenFullscreen(!0)},G=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=V(a),a.transUrl?a.transUrl===V(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},I=async s=>{if(s.commonUrl=V(s),!G(s))return Ee({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:n,query:i,meta:r,url:l}=G(s);switch(s.contextMenuClickId){case 0:r.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),K(f.fullPath);break;case 1:A(u.value.isShareTagsView?e:l);break;case 2:r.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),we(e);break;case 3:he();break;case 4:pe(u.value.isShareTagsView?e:l);break}},de=(s,e)=>{const{clientX:a,clientY:n}=e;t.dropdown.x=a,t.dropdown.y=n,B.value.openContextmenu(s)},ye=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const n=Object.assign({},{contextMenuClickId:1,...s});I(n)}},Ve=(s,e)=>{t.tagsRefsIndex=e,o.push(s),u.value.layout==="columns"&&(oe.value.find(n=>n.path.indexOf(`/${s.path.split("/")[1]}`)>-1).children?u.value.isCollapse=!1:u.value.isCollapse=!0)},V=s=>{var n,i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[r,l]of Object.entries(e))(n=s.meta)!=null&&n.isDynamic?a+=`/${l}`:a+=`&${r}=${l}`;return(i=s.meta)!=null&&i.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},w=s=>{var n;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let i in e)a+=e[i];return`${(n=s.meta)!=null&&n.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Le=s=>{b.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},Ce=()=>{j(()=>{if(m.value.length<=0)return!1;let s=m.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=m.value.length,n=m.value[0],i=m.value[m.value.length-1],r=b.value.$refs.wrapRef,l=r.scrollWidth,c=r.offsetWidth,L=r.scrollLeft,U=m.value[t.tagsRefsIndex-1],X=m.value[t.tagsRefsIndex+1],q=0,S=0;s===n?r.scrollLeft=0:s===i?r.scrollLeft=l-c:(e===0?q=n.offsetLeft-5:q=(U==null?void 0:U.offsetLeft)-5,e===a?S=i.offsetLeft+i.offsetWidth+5:S=X.offsetLeft+X.offsetWidth+5,S>L+c?r.scrollLeft=S-c:q<L&&(r.scrollLeft=q)),b.value.update()})},Q=s=>{j(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),Ce()})},k=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=Me.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(n=>{n.url===a&&e.push({...n})})}),g(e)}})},P=async()=>{await k(),se.isMobile()&&t.sortable.el&&t.sortable.destroy()};return xe(()=>{P(),window.addEventListener("resize",P),d.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,I(s)}),d.on("openOrCloseSortable",()=>{k()}),d.on("openShareTagsView",()=>{u.value.isShareTagsView&&(o.push("/home"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;(e=s.meta)!=null&&e.isAffix&&!s.meta.isHide&&(s.url=w(s),t.tagsViewList.push({...s}))}))})}),qe(()=>{d.off("onCurrentContextmenuClick",()=>{}),d.off("openOrCloseSortable",()=>{}),d.off("openShareTagsView",()=>{}),window.removeEventListener("resize",P)}),Se(()=>{m.value=[]}),_e(()=>{W(),k()}),De(async s=>{t.routeActive=w(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await D(s.path,s),Q(u.value.isShareTagsView?t.routePath:t.routeActive)}),Ae(()=>H.value,s=>{if(s.length===t.tagsViewRoutesList.length)return!1;W()},{deep:!0}),(s,e)=>{const a=Y("SvgIcon"),n=Y("el-scrollbar");return p(),C("div",{class:M(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":u.value.layout==="classic"}])},[E(n,{ref_key:"scrollbarRef",ref:b,onWheel:T(Le,["prevent"])},{default:Ie(()=>[Z("ul",{class:M(["layout-navbars-tagsview-ul",fe.value]),ref_key:"tagsUlRef",ref:ne},[(p(!0),C(J,null,ke(t.tagsViewList,(i,r)=>(p(),C("li",{key:r,class:M(["layout-navbars-tagsview-ul-li",{"is-active":x(i)}]),"data-url":i.url,onContextmenu:T(l=>de(i,l),["prevent"]),onMousedown:l=>ye(i,l),onClick:l=>Ve(i,r),ref_for:!0,ref:l=>{l&&(m.value[r]=l)}},[x(i)?(p(),C("i",We)):R("",!0),!x(i)&&u.value.isTagsviewIcon?(p(),N(a,{key:1,name:i.meta.icon,class:"pr5"},null,8,["name"])):R("",!0),Z("span",null,Pe(me.value(i)),1),x(i)?(p(),C(J,{key:2},[E(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=T(l=>K(s.$route.fullPath),["stop"]))}),i.meta.isAffix?R("",!0):(p(),N(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:T(l=>A(u.value.isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],64)):R("",!0),i.meta.isAffix?R("",!0):(p(),N(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:T(l=>A(u.value.isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],42,He))),128))],2)]),_:1},512),E(Ue(ie),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:B,onCurrentContextmenuClick:I},null,8,["dropdown"])],2)}}}),Ye=Fe(ze,[["__scopeId","data-v-02a42754"]]);export{Ye as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./contextmenu-Dpxsagmy.js","./store-mQZkmHj-.js","../css/store-dzCp3yyn.css","./_plugin-vue_export-helper-x3n3nnut.js","../css/contextmenu-Y_QP_mOm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
