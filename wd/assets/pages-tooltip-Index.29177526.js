import{g as e,i as l,l as o,m as t,c as a,j as n,b as u,d,e as s,a as c}from"./page-wraper.5690414d.js";import{d as m,N as i,v as p,m as r,Q as f,Y as _,h as g,j as V,o as v,c as h,w,a as C,b as y,t as b,p as k,u as U,n as S,y as j,x,R as A,J as Q,i as $,r as I}from"./index-dce73128.js";import{_ as O}from"./wd-button.840eab05.js";import{u as F}from"./usePopover.c9692131.js";import{p as P,r as T,q,c as z,u as G}from"./clickoutside.6858d0d2.js";import{_ as H}from"./demo-block.28b3373c.js";const J=u(m({name:"wd-tooltip",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,customArrow:l(""),customPop:l(""),visibleArrow:o(!0),content:{type:[String,Array]},placement:l("bottom"),offset:t(0),useContentSlot:o(!1),disabled:o(!1),showClose:o(!1),modelValue:o(!1)},emits:["update:modelValue","menuclick","change","open","close"],setup(e,{expose:l,emit:o}){const t=e,u=F(),d=i(q,null),{proxy:s}=Q();function c(){t.disabled||o("update:modelValue",!t.modelValue)}return p((()=>t.content),(e=>{null==e&&console.error("[wot-design] warning(wd-tooltip): content can't be null or undefined")})),p((()=>t.modelValue),(e=>{e&&(u.control(t.placement,t.offset),d&&d.closeOther?d.closeOther(s):z(s)),u.showStyle.value=e?"display: inline-block;":"display: none;",o("change",{show:e}),o(""+(e?"open":"close"))})),r((()=>{u.init(t.placement,t.visibleArrow,"tooltip")})),f((()=>{d&&d.pushToQueue?d.pushToQueue(s):P(s),u.showStyle.value=t.modelValue?"opacity: 1;":"opacity: 0;"})),_((()=>{d&&d.removeFromQueue?d.removeFromQueue(s):T(s)})),l({open:function(){o("update:modelValue",!0)},close:function(){o("update:modelValue",!1)}}),(e,l)=>{const o=$,t=g(V("wd-icon"),a),d=g(V("wd-transition"),n);return v(),h(o,{class:S(`wd-tooltip ${e.customClass}`),style:j(e.customStyle),id:"tooltip",onClick:A(U(u).noop,["stop"])},{default:w((()=>[C(o,{class:"wd-tooltip__pos wd-tooltip__hidden",id:"pos"},{default:w((()=>[C(o,{class:"wd-tooltip__container custom-pop"},{default:w((()=>[e.useContentSlot?k("",!0):(v(),h(o,{key:0,class:"wd-tooltip__inner"},{default:w((()=>[y(b(e.content),1)])),_:1}))])),_:1})])),_:1}),C(d,{"custom-class":"wd-tooltip__pos","custom-style":U(u).popStyle.value,show:e.modelValue,name:"fade",duration:200},{default:w((()=>[C(o,{class:"wd-tooltip__container custom-pop"},{default:w((()=>[e.visibleArrow?(v(),h(o,{key:0,class:S(`wd-tooltip__arrow ${U(u).arrowClass.value} ${e.customArrow}`),style:j(U(u).arrowStyle.value)},null,8,["class","style"])):k("",!0),e.useContentSlot?x(e.$slots,"content",{key:2},void 0,!0):(v(),h(o,{key:1,class:"wd-tooltip__inner"},{default:w((()=>[y(b(e.content),1)])),_:1}))])),_:3}),e.showClose?(v(),h(t,{key:0,name:"close","custom-class":"wd-tooltip__close-icon",onClick:c})):k("",!0)])),_:3},8,["custom-style","show"]),C(o,{onClick:c,class:"wd-tooltip__target",id:"target"},{default:w((()=>[x(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-9ed2a926"]]),N=u(m({__name:"Index",setup(e){const l=I(!1),o=I(!1),t=I(!1),n=I(!1),u=I(!1),m=I(!1),i=I(!1),p=I(!1),r=I(!1),f=I(!1),_=I(!1),k=I(!1),S=I(!1),j=I(!1),x=I(!1),Q=I(!1),F=I(!1),P=I("显示内容"),T=d(),{closeOutside:q}=G();function z(){x.value=!x.value}function N(){console.log("显示")}function R(){T.show("文字提示关闭")}function Y(e){console.log(e)}function B(e){console.log(e)}function D(e){console.log(e)}function E(e){console.log(e)}function K(e){console.log(e)}function L(e){console.log(e)}function M(e){console.log(e)}function W(e){console.log(e)}function X(e){console.log(e)}function Z(e){console.log(e)}function ee(e){console.log(e)}function le(e){console.log(e)}function oe(e){console.log(e)}function te(e){console.log(e)}function ae(e){console.log(e)}function ne(e){console.log(e)}return(e,d)=>{const I=g(V("wd-toast"),s),T=g(V("wd-button"),O),G=g(V("wd-tooltip"),J),ue=$,de=g(V("wd-icon"),a),se=g(V("demo-block"),H),ce=g(V("page-wraper"),c);return v(),h(ce,null,{default:w((()=>[C(I),C(ue,{style:{overflow:"hidden"},onClick:A(U(q),["stop"])},{default:w((()=>[C(se,{title:"基本用法"},{default:w((()=>[C(ue,{class:"top"},{default:w((()=>[C(G,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=e=>l.value=e),placement:"bottom-start",content:"bottom-start 提示文字",onChange:Y},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("bottom-start")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=e=>o.value=e),placement:"bottom",content:"bottom 提示文字",onChange:B},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("bottom")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:t.value,"onUpdate:modelValue":d[2]||(d[2]=e=>t.value=e),placement:"bottom-end",content:"bottom-end 提示文字",onChange:D},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("bottom-end")])),_:1})])),_:1},8,["modelValue"])])),_:1}),C(ue,{class:"left"},{default:w((()=>[C(G,{modelValue:n.value,"onUpdate:modelValue":d[3]||(d[3]=e=>n.value=e),placement:"right-start",content:"right-start 提示文字",onChange:E},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("right-start")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=e=>u.value=e),placement:"right",content:"right 提示文字",customStyle:"margin: 20px 0",onChange:K},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("right")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:m.value,"onUpdate:modelValue":d[5]||(d[5]=e=>m.value=e),placement:"right-end",content:"right-end 提示文字",onChange:L},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("right-end")])),_:1})])),_:1},8,["modelValue"])])),_:1}),C(ue,{class:"right"},{default:w((()=>[C(G,{modelValue:i.value,"onUpdate:modelValue":d[6]||(d[6]=e=>i.value=e),placement:"left-start",content:"left-start 提示文字",onChange:M},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y(" left-start "),C(de,{name:"setting"})])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:p.value,"onUpdate:modelValue":d[7]||(d[7]=e=>p.value=e),placement:"left",content:"left 提示文字",customStyle:"margin: 20px 0",onChange:W},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("left")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:r.value,"onUpdate:modelValue":d[8]||(d[8]=e=>r.value=e),placement:"left-end",content:"left-end 提示文字",onChange:X},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("left-end")])),_:1})])),_:1},8,["modelValue"])])),_:1}),C(ue,{class:"bottom"},{default:w((()=>[C(G,{modelValue:f.value,"onUpdate:modelValue":d[9]||(d[9]=e=>f.value=e),placement:"top-start",content:"top-start 提示文字",onChange:Z},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("top-start")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:_.value,"onUpdate:modelValue":d[10]||(d[10]=e=>_.value=e),placement:"top",content:"top 提示文字",onChange:ee},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("top")])),_:1})])),_:1},8,["modelValue"]),C(G,{modelValue:k.value,"onUpdate:modelValue":d[11]||(d[11]=e=>k.value=e),placement:"top-end",content:"top-end 提示文字",onChange:le},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("top-end")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),C(se,{title:"显示关闭按钮"},{default:w((()=>[C(ue,{class:"demo-left"},{default:w((()=>[C(G,{modelValue:S.value,"onUpdate:modelValue":d[12]||(d[12]=e=>S.value=e),content:"显示关闭按钮",placement:"right","show-close":"",onChange:oe},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("显示关闭按钮")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),C(se,{title:"多行文本"},{default:w((()=>[C(ue,{class:"demo-left lines-demo"},{default:w((()=>[C(G,{modelValue:j.value,"onUpdate:modelValue":d[13]||(d[13]=e=>j.value=e),placement:"right","use-content-slot":"",onChange:te},{content:w((()=>[C(ue,{class:"lines-content"},{default:w((()=>[C(ue,null,{default:w((()=>[y("多行文本1")])),_:1}),C(ue,null,{default:w((()=>[y("多行文本2")])),_:1}),C(ue,null,{default:w((()=>[y("多行文本3")])),_:1})])),_:1})])),default:w((()=>[C(T,{round:!1},{default:w((()=>[y("多行文本")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),C(se,{title:"控制显隐"},{default:w((()=>[C(ue,{onClick:A(z,["stop"])},{default:w((()=>[C(T,{plain:"",size:"small",class:"button-control"},{default:w((()=>[y(b(x.value?"关闭":"打开"),1)])),_:1})])),_:1},8,["onClick"]),C(ue,{class:"demo-left demo-control"},{default:w((()=>[C(G,{placement:"top",content:"控制显隐",modelValue:x.value,"onUpdate:modelValue":d[14]||(d[14]=e=>x.value=e)},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("top")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),C(se,{title:"绑定事件"},{default:w((()=>[C(ue,{class:"demo-left"},{default:w((()=>[C(G,{modelValue:Q.value,"onUpdate:modelValue":d[15]||(d[15]=e=>Q.value=e),placement:"right-end",content:P.value,onOpen:N,onClose:R,onChange:ae},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("事件")])),_:1})])),_:1},8,["modelValue","content"])])),_:1})])),_:1}),C(se,{title:"禁用"},{default:w((()=>[C(ue,{class:"demo-left"},{default:w((()=>[C(G,{modelValue:F.value,"onUpdate:modelValue":d[16]||(d[16]=e=>F.value=e),placement:"right-end",content:"禁用",disabled:"",onChange:ne},{default:w((()=>[C(T,{round:!1},{default:w((()=>[y("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-711fc0ed"]]);export{N as default};