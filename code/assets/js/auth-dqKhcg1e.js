import{k as t,s as u,l as f,aq as c,G as l}from"./store-mQZkmHj-.js";import{f as m}from"./index-lw7p-_pG.js";const p=t({name:"auth"}),h=t({...p,props:{value:{type:String,default:()=>""}},setup(s){const o=s,r=m(),{userInfos:a}=u(r),n=f(()=>a.value.authBtnList.some(e=>e===o.value));return(e,d)=>n.value?c(e.$slots,"default",{key:0}):l("",!0)}});export{h as default};