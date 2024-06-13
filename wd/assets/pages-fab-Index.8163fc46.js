import{g as e,l as a,i as t,m as l,t as o,p as s,c as u,j as i,b as d,d as n,e as c,f as r,a as m}from"./page-wraper.5690414d.js";import{d as v,r as p,N as f,v as _,T as b,q as w,Q as h,Y as g,h as x,j as y,o as k,c as T,w as C,R as V,a as I,p as j,x as z,n as L,y as $,u as U,J as Q,E as F,i as O,e as Y,b as q,F as H}from"./index-dce73128.js";import{_ as J,a as X}from"./wd-radio-group.6152e9d7.js";import{_ as E}from"./demo-block.28b3373c.js";import{_ as G}from"./wd-button.840eab05.js";import{p as N,r as R,q as S,c as W,u as A}from"./clickoutside.6858d0d2.js";import"./useChildren.8ed137fc.js";const B=d(v({name:"wd-fab",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,active:a(!1),type:t("primary"),position:t("right-bottom"),direction:t("top"),disabled:a(!1),inactiveIcon:t("add"),activeIcon:t("close"),zIndex:l(99),draggable:a(!1)},emits:["update:active"],setup(e,{expose:a,emit:t}){const l=e,d=p(!1),n=p(!1),c=f(S,null),{proxy:r}=Q();_((()=>l.active),(e=>{n.value=e}),{immediate:!0,deep:!0}),_((()=>n.value),(e=>{e&&(c&&c.closeOther?c.closeOther(r):W(r))}));const m=p(l.direction);_((()=>l.direction),(e=>m.value=e)),_((()=>l.position),(()=>E()));const v=p(0),Y=p(0),q=b({width:0,height:0}),H=p(56),J=b({minTop:0,minLeft:0,maxTop:0,maxLeft:0}),X=16;function E(){const e=l.position,{minLeft:a,minTop:t,maxLeft:o,maxTop:s}=J;"left-top"===e?(v.value=t,Y.value=a):"right-top"===e?(v.value=t,Y.value=o):"left-bottom"===e?(v.value=s,Y.value=a):"right-bottom"===e&&(v.value=s,Y.value=o)}const A=b({x:0,y:0}),B=p(!1);function D(e){if(!1===l.draggable)return;const a=e.touches[0];A.x=a.clientX-Y.value,A.y=a.clientY-v.value,B.value=!1}function K(e){if(!1===l.draggable)return;const a=e.touches[0],{minLeft:t,minTop:o,maxLeft:s,maxTop:u}=J;let i=a.clientX-A.x,d=a.clientY-A.y;i<t?i=t:i>s&&(i=s),d<o?d=o:d>u&&(d=u),v.value=d,Y.value=i}function M(){if(!1===l.draggable)return;const e=q.width/2,a=Y.value+H.value/2;B.value=!0,a<e?(Y.value=J.minLeft,m.value="right"):(Y.value=J.maxLeft,m.value="left")}const P=w((()=>{const e={top:v.value+"px",left:Y.value+"px",transition:B.value?"all ease 0.3s":"none"};return o(l.zIndex)&&(e["z-index"]=l.zIndex),`${s(e)};${l.customStyle}`}));function Z(){l.disabled||(n.value=!n.value,t("update:active",n.value))}return h((()=>{!function(){const e=F();q.width=e.windowWidth,q.height=e.windowTop+e.windowHeight,J.minTop=e.windowTop+X,J.minLeft=X,J.maxLeft=q.width-H.value-X,J.maxTop=q.height-H.value-X}(),E(),d.value=!0,c&&c.pushToQueue?c.pushToQueue(r):N(r)})),g((()=>{c&&c.removeFromQueue?c.removeFromQueue(r):R(r)})),a({open:function(){n.value=!0,t("update:active",!0)},close:function(){n.value=!1,t("update:active",!1)}}),(e,a)=>{const t=x(y("wd-icon"),u),l=x(y("wd-button"),G),o=O,s=x(y("wd-transition"),i);return k(),T(o,{onTouchmove:V(K,["stop","prevent"]),onTouchstart:D,onTouchend:M,class:L(`wd-fab ${e.customClass}`),style:$(U(P)),onClick:a[1]||(a[1]=V((()=>{}),["stop"]))},{default:C((()=>[d.value?(k(),T(o,{key:0,onClick:a[0]||(a[0]=V((()=>{}),["stop"]))},{default:C((()=>[I(l,{onClick:Z,"custom-class":"wd-fab__trigger",round:"",type:e.type,disabled:e.disabled},{default:C((()=>[I(t,{"custom-class":"wd-fab__icon",name:n.value?e.activeIcon:e.inactiveIcon},null,8,["name"])])),_:1},8,["type","disabled"])])),_:1})):j("",!0),I(s,{"enter-class":`wd-fab__transition-enter--${m.value}`,"enter-active-class":"wd-fab__transition-enter-active","leave-to-class":`wd-fab__transition-leave-to--${m.value}`,"leave-active-class":"wd-fab__transition-leave-active","custom-class":`wd-fab__actions wd-fab__actions--${m.value}`,show:n.value,duration:300,name:""},{default:C((()=>[z(e.$slots,"default",{},void 0,!0)])),_:3},8,["enter-class","leave-to-class","custom-class","show"])])),_:3},8,["onTouchmove","class","style"])}}}),[["__scopeId","data-v-2b97fd40"]]),D=d(v({__name:"Index",setup(e){const{show:a}=n(),t=p(!1),l=p("primary"),o=p("left-bottom"),s=p("top"),i=p(!1),d=p(!1),{closeOutside:v}=A();return(e,n)=>{const p=x(y("wd-toast"),c),f=x(y("wd-radio"),J),_=x(y("wd-radio-group"),X),b=x(y("demo-block"),E),w=x(y("wd-switch"),r),h=O,g=x(y("wd-button"),G),T=x(y("wd-icon"),u),j=x(y("wd-fab"),B),z=x(y("page-wraper"),m);return k(),Y(H,null,[I(p),I(h,{class:"fab",onClick:U(v)},{default:C((()=>[I(z,null,{default:C((()=>[I(b,{title:"悬浮按钮主题色"},{default:C((()=>[I(_,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),inline:"",shape:"dot"},{default:C((()=>[I(f,{value:"primary","custom-class":"custom-radio"},{default:C((()=>[q("主要按钮")])),_:1}),I(f,{value:"success","custom-class":"custom-radio"},{default:C((()=>[q("成功按钮")])),_:1}),I(f,{value:"warning","custom-class":"custom-radio"},{default:C((()=>[q("警告按钮")])),_:1}),I(f,{value:"error","custom-class":"custom-radio"},{default:C((()=>[q("危险按钮")])),_:1}),I(f,{value:"info","custom-class":"custom-radio"},{default:C((()=>[q("信息按钮")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(b,{title:"悬浮按钮位置"},{default:C((()=>[I(_,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),inline:"",shape:"dot"},{default:C((()=>[I(f,{value:"left-top","custom-class":"custom-radio"},{default:C((()=>[q("左上")])),_:1}),I(f,{value:"right-top","custom-class":"custom-radio"},{default:C((()=>[q("右上")])),_:1}),I(f,{value:"left-bottom","custom-class":"custom-radio"},{default:C((()=>[q("左下")])),_:1}),I(f,{value:"right-bottom","custom-class":"custom-radio"},{default:C((()=>[q("右下")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(b,{title:"菜单弹出方向"},{default:C((()=>[I(_,{modelValue:s.value,"onUpdate:modelValue":n[2]||(n[2]=e=>s.value=e),inline:"",shape:"dot"},{default:C((()=>[I(f,{value:"top","custom-class":"custom-radio"},{default:C((()=>[q("向上")])),_:1}),I(f,{value:"bottom","custom-class":"custom-radio"},{default:C((()=>[q("向下")])),_:1}),I(f,{value:"right","custom-class":"custom-radio"},{default:C((()=>[q("向右")])),_:1}),I(f,{value:"left","custom-class":"custom-radio"},{default:C((()=>[q("向左")])),_:1})])),_:1},8,["modelValue"])])),_:1}),I(b,{title:"禁用"},{default:C((()=>[I(h,{onClick:n[4]||(n[4]=V((()=>{}),["stop"]))},{default:C((()=>[I(w,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=e=>i.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),I(b,{title:"可拖动"},{default:C((()=>[I(h,{onClick:n[6]||(n[6]=V((()=>{}),["stop"]))},{default:C((()=>[I(w,{modelValue:d.value,"onUpdate:modelValue":n[5]||(n[5]=e=>d.value=e),size:"22px"},null,8,["modelValue"])])),_:1})])),_:1}),I(b,{title:"切换展示"},{default:C((()=>[I(h,{onClick:n[8]||(n[8]=V((()=>{}),["stop"]))},{default:C((()=>[I(g,{type:"primary",onClick:n[7]||(n[7]=e=>t.value=!t.value),round:""},{default:C((()=>[q("切换")])),_:1})])),_:1})])),_:1}),I(j,{active:t.value,"onUpdate:active":n[13]||(n[13]=e=>t.value=e),disabled:i.value,type:l.value,position:o.value,direction:s.value,draggable:d.value},{default:C((()=>[I(g,{onClick:n[9]||(n[9]=e=>U(a)("一键三连")),disabled:i.value,"custom-class":"custom-button",type:"primary",round:""},{default:C((()=>[I(T,{name:"github-filled",size:"22px"})])),_:1},8,["disabled"]),I(g,{onClick:n[10]||(n[10]=e=>U(a)("我要收藏")),disabled:i.value,"custom-class":"custom-button",type:"success",round:""},{default:C((()=>[I(T,{name:"star",size:"22px"})])),_:1},8,["disabled"]),I(g,{onClick:n[11]||(n[11]=e=>U(a)("我要投币")),disabled:i.value,"custom-class":"custom-button",type:"error",round:""},{default:C((()=>[I(T,{name:"money-circle",size:"22px"})])),_:1},8,["disabled"]),I(g,{onClick:n[12]||(n[12]=e=>U(a)("我要点赞")),disabled:i.value,"custom-class":"custom-button",type:"warning",round:""},{default:C((()=>[I(T,{name:"thumb-up",size:"22px"})])),_:1},8,["disabled"])])),_:1},8,["active","disabled","type","position","direction","draggable"])])),_:1})])),_:1},8,["onClick"])],64)}}}),[["__scopeId","data-v-f98b189b"]]);export{D as default};
