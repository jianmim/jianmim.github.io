import{k as p,l as C,t as o,x as n,M as s,a5 as b,a4 as c,y as l,A as m,D as a,O as u,T as r,Q as g,S as L}from"./store-mQZkmHj-.js";import{o as S}from"./index-lw7p-_pG.js";const B=["onClick"],I=p({name:"navMenuSubItem"}),N=p({...I,props:{chil:{type:Array,default:()=>[]}},setup(_){const d=_,h=C(()=>d.chil),k=t=>{S.handleOpenLink(t)};return(t,$)=>{const i=o("SvgIcon"),f=o("sub-item",!0),y=o("el-sub-menu"),x=o("el-menu-item");return n(!0),s(c,null,b(h.value,e=>(n(),s(c,null,[e.children&&e.children.length>0?(n(),l(y,{index:e.path,key:e.path},{title:m(()=>[a(i,{name:e.meta.icon},null,8,["name"]),u("span",null,r(t.$t(e.meta.title)),1)]),default:m(()=>[a(f,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(n(),l(x,{index:e.path,key:e.path},{default:m(()=>[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?(n(),s(c,{key:0},[a(i,{name:e.meta.icon},null,8,["name"]),u("span",null,r(t.$t(e.meta.title)),1)],64)):(n(),s("a",{key:1,class:"w100",onClick:g(w=>k(e),["prevent"])},[a(i,{name:e.meta.icon},null,8,["name"]),L(" "+r(t.$t(e.meta.title)),1)],8,B))]),_:2},1032,["index"]))],64))),256)}}});export{N as default};
