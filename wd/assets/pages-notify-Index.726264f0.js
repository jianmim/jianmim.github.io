import{u as e,_ as t,c as l,n as i,a as s}from"./page-wraper.5690414d.js";import{d as a,r as n,o,c as r,w as u,a as c,b as d,h as p,j as k}from"./index-dce73128.js";import{_ as f}from"./wd-cell-group.3bfb1a4c.js";import{_ as m}from"./demo-block.28b3373c.js";import"./useChildren.8ed137fc.js";const _=a({__name:"Index",setup(a){let _;const g=n(!1),{showNotify:w}=e(),C=e=>{w({message:"通知内容",type:e})},b=()=>w("测试"),v=()=>{w({color:"#ad0000",message:"自定义颜色",background:"#ffe1e1"})},h=()=>{w({message:"自定义位置",position:"bottom"})},j=()=>{w({message:"自定义时长",duration:1e3})},y=()=>{g.value=!0,_&&clearTimeout(_),_=setTimeout((()=>{g.value=!1}),2e3)};return(e,a)=>{const n=p(k("wd-cell"),t),_=p(k("wd-cell-group"),f),w=p(k("demo-block"),m),x=p(k("wd-icon"),l),N=p(k("wd-notify"),i),T=p(k("page-wraper"),s);return o(),r(T,null,{default:u((()=>[c(w,{title:"基本用法",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"基础用法","is-link":"",onClick:b})])),_:1})])),_:1}),c(w,{title:"通知类型",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"主要通知","is-link":"",onClick:a[0]||(a[0]=e=>C("primary"))}),c(n,{title:"成功通知","is-link":"",onClick:a[1]||(a[1]=e=>C("success"))}),c(n,{title:"危险通知","is-link":"",onClick:a[2]||(a[2]=e=>C("danger"))}),c(n,{title:"警告通知","is-link":"",onClick:a[3]||(a[3]=e=>C("warning"))})])),_:1})])),_:1}),c(w,{title:"自定义配置",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"自定义颜色","is-link":"",onClick:v}),c(n,{title:"自定义位置","is-link":"",onClick:h}),c(n,{title:"自定义时长","is-link":"",onClick:j})])),_:1})])),_:1}),c(w,{title:"使用 Notify 组件",transparent:""},{default:u((()=>[c(_,null,{default:u((()=>[c(n,{title:"使用 Notify 组件","is-link":"",onClick:y})])),_:1})])),_:1}),c(N,{selector:"visible",type:"success",visible:g.value,"onUpdate:visible":a[4]||(a[4]=e=>g.value=e)},{default:u((()=>[c(x,{name:"check-outline",size:"inherit",color:"inherit"}),d(" 成功通知 ")])),_:1},8,["visible"])])),_:1})}}});export{_ as default};
