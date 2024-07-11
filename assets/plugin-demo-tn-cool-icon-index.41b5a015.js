import{b as l,d as o,V as e,c as t,W as c,X as a,Z as i,a as n,o as r,e as s,f as g,h as d,K as f,u as p,C as u,a2 as m,n as _,k as y,_ as b,D as v,E as h}from"./index-80b03063.js";import"./index.b621671f.js";import{C as w}from"./custom-page.333ee63a.js";import{D as z}from"./demo-container.59d4003d.js";import{u as k}from"./index.e83e3f39.js";import"./title.e0fd12f0.js";const x=l({name:String,color:String,bgColor:String,size:{type:String,default:"100"},type:{type:o(String),values:["mimic","circle","square","oval","triangle","flower","capsule","dark-goldborder"],default:"mimic"}}),C=b(n({__name:"index",props:x,emits:{click:()=>!0},setup(l,{emit:o}){const n=l,{ns:b,gradientIcon:v,coolIconStyle:h,coolIconBgClass:w,coolIconBgStyle:z}=(l=>{const o=e("cool-icon"),n=t((()=>{var o;return"dark-goldborder"!==l.type&&((null==(o=l.color)?void 0:o.startsWith("gradient"))||!1)})),[r,s]=c(a(l,"bgColor"),"bg"),g=t((()=>{const o={};if(l.size){const e=i(l.size);o.height=o.width=e,o.fontSize=`calc(${e} * 0.6)`,"capsule"===l.type&&(o.height=`calc(${e} * 0.75)`,o.fontSize=`calc(${e} * 0.5)`,o.borderRadius=`calc(${e} * 2)`),"flower"===l.type&&(o.width=`calc(${e} * 1.2)`,o.height=`calc(${e} * 0.75)`,o.borderRadius=`calc(${e} * 2)`)}return o})),d=t((()=>{const e=[o.e("bg")];return"mimic"!==l.type&&"dark-goldborder"!==l.type&&r.value&&e.push(r.value),e.join(" ")})),f=t((()=>{const o={};return s.value&&(o.backgroundColor=s.value),"mimic"===l.type&&(o.backgroundColor="transparent"),"circle"!==l.type&&"oval"!==l.type||r.value||(o.backgroundColor="#fff"),"dark-goldborder"===l.type&&(o.backgroundColor="var(--tn-color-black)",o.border="3px solid var(--tn-color-orangeyellow)",o.boxShadow="6px 6px 8px var(--tn-color-orangeyellow-light)"),o}));return{ns:o,gradientIcon:n,coolIconStyle:g,coolIconBgClass:d,coolIconBgStyle:f}})(n),k=()=>{o("click")};return(l,o)=>{const e=y;return r(),s(e,{class:f([p(b).b(),p(b).m(l.type)]),style:u(p(h)),onClick:_(k,["stop"])},{default:g((()=>[d(e,{class:f([p(w)]),style:u(p(z))},null,8,["class","style"]),d(e,{class:f([p(b).e("icon")])},{default:g((()=>[d(m,{name:l.name,color:"dark-goldborder"!==l.type?l.color:"tn-orangeyellow",transparent:p(v),"transparent-bg":l.color},null,8,["name","color","transparent","transparent-bg"])])),_:1},8,["class"])])),_:1},8,["class","style","onClick"])}}}),[["__scopeId","data-v-04ccdaa0"]]),S=b(n({__name:"index",setup(l){v((()=>({}))),h((()=>({})));const{isDemoH5Page:o}=k();return(l,e)=>{const t=y;return r(),s(w,{title:"酷炫图标","is-h5-demo-page":p(o)},{default:g((()=>[d(z,{title:"新拟态"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__cool-2"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__cool-8"})])),_:1})])),_:1})])),_:1}),d(z,{title:"暗黑金边"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"birthday",type:"dark-goldborder"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"prize",type:"dark-goldborder"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"service-simple",type:"dark-goldborder"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"brand",type:"dark-goldborder"})])),_:1})])),_:1})])),_:1}),d(z,{title:"圆形"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"circle","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"椭圆"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"方形"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"square","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"三角形"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"胶囊"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-fill",type:"capsule","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"live-stream-fill",type:"capsule","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-text-fill",type:"capsule","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"topics-fill",type:"capsule","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-fill",type:"capsule","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"live-stream-fill",type:"capsule","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-text-fill",type:"capsule","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"topics-fill",type:"capsule","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"花朵"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-orange",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"gradient__cool-8",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"gradient__cool-15",color:"tn-white"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-orange-light",color:"tn-orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-purple-light",color:"tn-purple"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-indigo-light",color:"tn-indigo"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-purplered-light",color:"tn-purplered"})])),_:1})])),_:1})])),_:1}),d(z,{title:"修改尺寸"},{default:g((()=>[d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"tn-orange",size:"80"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__orange"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__cool-2",size:"120"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",color:"gradient__cool-8",size:"80px"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-orange",color:"tn-white",size:"80"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"gradient__cool-8",color:"tn-white",size:"120"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"oval","bg-color":"gradient__cool-15",color:"tn-white",size:"80px"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-orange",color:"tn-white",size:"80"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"gradient__cool-8",color:"tn-white",size:"120"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"triangle","bg-color":"gradient__cool-15",color:"tn-white",size:"80px"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-fill",type:"capsule","bg-color":"tn-orange",color:"tn-white",size:"80"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"live-stream-fill",type:"capsule","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"image-text-fill",type:"capsule","bg-color":"gradient__cool-8",color:"tn-white",size:"120"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"topics-fill",type:"capsule","bg-color":"gradient__cool-15",color:"tn-white",size:"80px"})])),_:1})])),_:1}),d(t,{class:"cool-icon-container"},{default:g((()=>[d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-orange",color:"tn-white",size:"80"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"tn-purple",color:"tn-white"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"gradient__cool-8",color:"tn-white",size:"120"})])),_:1}),d(t,{class:"cool-icon-item"},{default:g((()=>[d(C,{name:"gloves-fill",type:"flower","bg-color":"gradient__cool-15",color:"tn-white",size:"80px"})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-e2edd374"]]);export{S as default};