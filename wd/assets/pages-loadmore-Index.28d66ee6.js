import{d as a,r as e,h as s,j as t,o as l,c as o,w as r,b as d,t as i,u as n,p as u,e as c,F as m,a as f,n as _,y as g,g as p,i as v,A as w,B as x,f as h,l as y}from"./index-dce73128.js";import{_ as T}from"./wd-divider.fe98a8cf.js";import{g as j,i as k,c as b,o as I,b as S,a as z}from"./page-wraper.5690414d.js";import{u as C}from"./useTranslate.0a311b40.js";const A=S(a({name:"wd-loadmore",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...j,state:String,loadingText:String,finishedText:String,errorText:k("加载失败，点击重试")},emits:["reload"],setup(a,{emit:w}){const x=a,{translate:h}=C("loadmore"),y=e(null);function j(){"error"===x.state&&(y.value="loading",w("reload"))}return(a,e)=>{const w=s(t("wd-divider"),T),x=p,y=s(t("wd-icon"),b),k=s(t("wd-loading"),I),S=v;return l(),o(S,{class:_(["wd-loadmore",a.customClass]),style:g(a.customStyle),onClick:j},{default:r((()=>["finished"===a.state?(l(),o(w,{key:0},{default:r((()=>[d(i(a.finishedText||n(h)("finished")),1)])),_:1})):u("",!0),"error"===a.state?(l(),c(m,{key:1},[a.errorText?(l(),c(m,{key:0},[d(i(a.errorText),1)],64)):(l(),c(m,{key:1},[f(x,{class:"wd-loadmore__text"},{default:r((()=>[d(i(n(h)("error")),1)])),_:1}),f(x,{class:"wd-loadmore__text is-light"},{default:r((()=>[d(i(n(h)("retry")),1)])),_:1}),f(y,{name:"refresh",size:"16px","custom-class":"wd-loadmore__refresh"})],64))],64)):u("",!0),"loading"===a.state?(l(),c(m,{key:2},[f(k,{size:"16px","custom-class":"wd-loadmore__loading"}),f(x,{class:"wd-loadmore__text"},{default:r((()=>[d(i(a.loadingText||n(h)("loading")),1)])),_:1})],64)):u("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-2a0d0ca7"]]),B=S(a({__name:"Index",setup(a){const n=e("loading"),u=e(0),_=e(60);function g(){setTimeout((()=>{u.value=u.value+15,n.value="loading"}),200)}return w((()=>{45===u.value?n.value="error":u.value<_.value?g():u.value===_.value&&(n.value="finished")})),x((()=>{g()})),(a,e)=>{const _=y,p=v,w=s(t("wd-loadmore"),A),x=s(t("page-wraper"),z);return l(),o(x,null,{default:r((()=>[f(p,{class:"container"},{default:r((()=>[(l(!0),c(m,null,h(u.value,(a=>(l(),o(p,{key:a,class:"list-item"},{default:r((()=>[f(_,{src:"https://img10.360buyimg.com/jmadvertisement/jfs/t1/70325/36/14954/36690/5dcd3e3bEee5006e0/aed1ccf6d5ffc764.png"}),f(p,{class:"right"},{default:r((()=>[d("这是一条测试"+i(a+1),1)])),_:2},1024)])),_:2},1024)))),128)),f(w,{state:n.value,onReload:g},null,8,["state"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-352265f8"]]);export{B as default};
