import{b as a,d as e,as as s,c as t,aA as l,a as o,V as c,o as i,e as r,f as m,i as n,j as d,u,F as p,K as f,k as y,C as g,n as k,h as _,p as b,_ as h}from"./index-80b03063.js";import{T as v}from"./lazy-load.2475d186.js";import"./index.b621671f.js";import{i as x}from"./is-number.acae358a.js";const j=a({data:{type:e(Array),default:()=>[]},max:{type:Number,default:9},column:{type:Number,default:3},imgMode:{type:String,values:s,default:"aspectFill"},lazyLoad:{type:Boolean,default:!0},preview:{type:Boolean,default:!0}}),C=h(o({__name:"photo-album",props:j,emits:{click:a=>x(a)},setup(a,{emit:e}){const s=a,o=c("photo-album"),{imageData:h,imageClickEvent:x}=((a,e)=>{const s=t((()=>{const e=Math.min(a.data.length,a.max);return a.data.slice(0,e)}));return{imageData:s,imageClickEvent:t=>{e("click",t),a.preview&&l({urls:s.value,current:t})}}})(s,e),j=t((()=>{const a={};let e=`calc(100% / ${s.column} - 20rpx)`;return a.width=a.paddingBottom=e,a}));return(a,e)=>{const t=b,l=y;return i(),r(l,{class:f([u(o).b()])},{default:m((()=>[(i(!0),n(p,null,d(u(h),((e,c)=>(i(),r(l,{key:c,class:f([u(o).e("container")]),style:g(u(j)),onClick:k((a=>u(x)(c)),["stop"])},{default:m((()=>[_(l,{class:f(u(o).e("item"))},{default:m((()=>[a.lazyLoad?(i(),r(v,{key:0,src:e,mode:s.imgMode},null,8,["src","mode"])):(i(),r(t,{key:1,class:f(u(o).e("item__image")),src:e,mode:s.imgMode},null,8,["class","src","mode"]))])),_:2},1032,["class"])])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class"])}}}),[["__scopeId","data-v-d9046fbf"]]);export{C as T};