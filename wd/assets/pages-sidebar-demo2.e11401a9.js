import{_ as l,a as e}from"./wd-sidebar.bd8f5cbc.js";import{d as a,r as t,o as s,c as i,w as d,a as o,e as u,f as r,F as b,y as n,a5 as c,h as m,j as p,i as f,a3 as h}from"./index-dce73128.js";import{c as w,_,a as v,b as y}from"./page-wraper.5690414d.js";import{_ as g}from"./wd-cell-group.3bfb1a4c.js";import"./wd-badge.2aec3616.js";import"./useChildren.8ed137fc.js";const j=y(a({__name:"demo2",setup(a){const y=t(1),j=t(0),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),x=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:k,disabled:!1},{label:"分类二",title:"标题二",icon:"thumb-up",items:k,disabled:!1},{label:"分类三",title:"标题三",icon:"thumb-up",items:k.slice(0,18),disabled:!1},{label:"分类四",title:"标题四",icon:"thumb-up",items:k.slice(0,21),disabled:!1},{label:"分类五",title:"标题五",icon:"thumb-up",items:k,disabled:!1},{label:"分类六",title:"标题六",icon:"thumb-up",items:k.slice(0,18),disabled:!1},{label:"分类七",title:"标题七",icon:"thumb-up",items:k,disabled:!0}]);function V({value:l}){y.value=l,j.value=-1,c((()=>{j.value=0}))}return(a,t)=>{const c=m(p("wd-sidebar-item"),l),k=m(p("wd-sidebar"),e),C=m(p("wd-icon"),w),Y=m(p("wd-cell"),_),z=m(p("wd-cell-group"),g),A=h,F=f,I=m(p("page-wraper"),v);return s(),i(I,null,{default:d((()=>[o(F,{class:"wraper"},{default:d((()=>[o(k,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=l=>y.value=l),onChange:V},{default:d((()=>[(s(!0),u(b,null,r(x.value,((l,e)=>(s(),i(c,{key:e,value:e,label:l.label,icon:l.icon,disabled:l.disabled},null,8,["value","label","icon","disabled"])))),128))])),_:1},8,["modelValue"]),o(F,{class:"content",style:n(`transform: translateY(-${100*y.value}%)`)},{default:d((()=>[(s(!0),u(b,null,r(x.value,((l,e)=>(s(),i(A,{key:e,class:"category","scroll-y":"","scroll-with-animation":"","show-scrollbar":!1,"scroll-top":j.value,throttle:!1},{default:d((()=>[o(z,{title:l.title,border:""},{default:d((()=>[(s(!0),u(b,null,r(l.items,((l,e)=>(s(),i(Y,{key:e,title:l.title,label:l.label},{default:d((()=>[o(C,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1032,["scroll-top"])))),128))])),_:1},8,["style"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-04b5e0c2"]]);export{j as default};