import{d as s,q as a,r as e,o,c as r,w as l,a as t,n as i,y as d,x as c,p as n,u,X as m,l as h,i as g}from"./index-dce73128.js";import{g as v,i as w,l as y,D as p,t as f,v as $,p as _,b}from"./page-wraper.5690414d.js";const k=b(s({name:"wd-img",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...v,customImage:w(""),src:String,round:y(!1),mode:w("scaleToFill"),lazyLoad:y(!1),width:p,height:p,radius:p,enablePreview:y(!1)},emits:["error","click","load"],setup(s,{emit:v}){const w=s,y=a((()=>{const s={};return f(w.height)&&(s.height=$(w.height)),f(w.width)&&(s.width=$(w.width)),f(w.radius)&&(s["border-radius"]=$(w.radius),s.overflow="hidden"),`${_(s)};${w.customStyle}`})),p=a((()=>`wd-img  ${w.round?"is-round":""} ${w.customClass}`)),b=e("loading");function k(s){b.value="error",v("error",s)}function z(){w.enablePreview&&w.src&&m({urls:[w.src]}),v("click")}function I(s){b.value="success",v("load",s)}return(s,a)=>{const e=h,m=g;return o(),r(m,{class:i(u(p)),onClick:z,style:d(u(y))},{default:l((()=>[t(e,{class:i(`wd-img__image ${s.customImage}`),style:d("success"!==b.value?"width: 0;height: 0;":""),src:s.src,mode:s.mode,"lazy-load":s.lazyLoad,onLoad:I,onError:k},null,8,["class","style","src","mode","lazy-load"]),"loading"===b.value?c(s.$slots,"loading",{key:0},void 0,!0):n("",!0),"error"===b.value?c(s.$slots,"error",{key:1},void 0,!0):n("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-520f6e84"]]);export{k as _};