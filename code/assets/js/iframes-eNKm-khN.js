import{k as p,r as _,u as y,l as d,w as m,a6 as w,x as n,M as o,O as I,a4 as k,a5 as O,B as c,D as v,A as x,C as B,a7 as L,n as R}from"./store-mQZkmHj-.js";const b={class:"layout-padding layout-padding-unset layout-iframe"},C={class:"layout-padding-auto layout-padding-view"},D=["src","data-url"],P=p({name:"layoutIframeView"}),T=p({...P,props:{refreshKey:{type:String,default:()=>""},name:{type:String,default:()=>"slide-right"},list:{type:Array,default:()=>[]}},setup(f){const r=f,l=_(),i=y(),h=d(()=>r.list.filter(e=>{var a;return(a=e.meta)==null?void 0:a.isIframeOpen})),g=d(()=>i.path),u=(e,a)=>{R(()=>{if(!l.value)return!1;l.value.forEach(s=>{s.dataset.url===e&&(s.onload=()=>{var t;(t=a.meta)!=null&&t.isIframeOpen&&a.meta.loading&&(a.meta.loading=!1)})})})};return m(()=>i.fullPath,e=>{const a=r.list.find(s=>s.path===e);if(!a)return!1;a.meta.isIframeOpen||(a.meta.isIframeOpen=!0),u(e,a)},{immediate:!0}),m(()=>r.refreshKey,()=>{const e=r.list.find(a=>a.path===i.path);if(!e)return!1;e.meta.isIframeOpen&&(e.meta.isIframeOpen=!1),setTimeout(()=>{e.meta.isIframeOpen=!0,e.meta.loading=!0,u(i.fullPath,e)})},{deep:!0}),(e,a)=>{const s=w("loading");return n(),o("div",b,[I("div",C,[(n(!0),o(k,null,O(h.value,t=>c((n(),o("div",{class:"w100",key:t.path,"element-loading-background":"white"},[v(L,{name:f.name},{default:x(()=>[c((n(),o("iframe",{src:t.meta.isLink,key:t.path,frameborder:"0",height:"100%",width:"100%",style:{position:"absolute"},"data-url":t.path,ref_for:!0,ref_key:"iframeRef",ref:l},null,8,D)),[[B,g.value===t.path]])]),_:2},1032,["name"])])),[[s,t.meta.loading]])),128))])])}}});export{T as default};