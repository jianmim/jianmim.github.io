import{d as e,N as o,r as l,v as a,Q as t,Y as n,q as u,h as s,j as d,o as i,c as r,w as p,a as c,e as m,F as v,f,n as _,b as w,t as b,p as g,x as h,y,u as V,J as k,g as x,i as C,E as $,R as K}from"./index-dce73128.js";import{g as S,m as j,i as I,l as U,K as z,h as N,c as P,k as O,t as E,b as H,G as M,H as Q,_ as T,a as B}from"./page-wraper.5690414d.js";import{p as F,r as G,q,c as A,u as L}from"./clickoutside.6858d0d2.js";import{u as D}from"./useChildren.8ed137fc.js";import{_ as J}from"./demo-block.28b3373c.js";import{_ as R}from"./wd-slider.ee468f35.js";import{_ as Y}from"./wd-button.840eab05.js";import{_ as W}from"./wd-sort-button.04cb86cc.js";import"./useTouch.8a27f9aa.js";const X=Symbol("wd-drop-menu"),Z={...S,zIndex:j(12),direction:I("down"),modal:U(!0),closeOnClickModal:U(!0),duration:j(200)},ee=H(e({name:"wd-drop-menu-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...S,customTitle:I(""),customIcon:I(""),modelValue:[String,Number],options:z(),disabled:U(!1),iconName:I("check"),title:String,valueKey:I("value"),labelKey:I("label"),tipKey:I("tip")},emits:["change","update:modelValue","open","opened","closed","close"],setup(e,{expose:$,emit:K}){const S=e,j=o(q,null),I=l(!1),U=l(!1),z=l(),H=l(12),M=l(!0),Q=l(!0),T=l(0),{parent:B}=N(X),{proxy:A}=k();function L(){U.value&&(U.value=!1,B&&B.fold())}a((()=>S.modelValue),(e=>{E(e)&&"number"!=typeof e&&"string"!=typeof e&&console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.")}),{deep:!0,immediate:!0}),t((()=>{j&&j.pushToQueue?j.pushToQueue(A):F(A)})),n((()=>{j&&j.removeFromQueue?j.removeFromQueue(A):G(A)}));const D=u((()=>{let e="";return e=I.value&&B?"down"===B.props.direction?`top: calc(var(--window-top) + ${B.offset.value}px); bottom: 0;`:`top: 0; bottom: calc(var(--window-bottom) + ${B.offset.value}px)`:"",e}));function J(){I.value=!1,K("closed")}function R(){K("open")}function Y(){K("opened")}function W(){K("close")}return $({setShowPop:function(e){U.value=e},getShowPop:function(){return U.value},open:function(){I.value=!0,U.value=!0,B&&(M.value=Boolean(B.props.modal),T.value=Number(B.props.duration),Q.value=Boolean(B.props.closeOnClickModal),z.value="down"===B.props.direction?"top":"bottom"),K("open")},close:L}),(e,o)=>{const l=x,a=C,t=s(d("wd-icon"),P),n=s(d("wd-popup"),O);return I.value?(i(),r(a,{key:0,class:_(`wd-drop-item  ${e.customClass}`),style:y(`z-index: ${H.value}; ${V(D)};${e.customStyle}`)},{default:p((()=>[c(n,{modelValue:U.value,"onUpdate:modelValue":o[0]||(o[0]=e=>U.value=e),"z-index":H.value,duration:T.value,position:z.value,"custom-style":"position: absolute; max-height: 80%;","modal-style":"position: absolute;",modal:M.value,"close-on-click-modal":Q.value,onClickModal:L,onBeforeEnter:R,onAfterEnter:Y,onBeforeLeave:W,onAfterLeave:J},{default:p((()=>[e.options.length?(i(),r(a,{key:0},{default:p((()=>[(i(!0),m(v,null,f(e.options,((o,n)=>(i(),r(a,{key:n,onClick:e=>function(e){if(S.disabled)return;const{valueKey:o}=S,l=S.options[e];K("update:modelValue",""!==l[o]&&void 0!==l[o]?l[o]:l),L(),K("change",{value:""!==l[o]&&void 0!==l[o]?l[o]:l,selectedItem:l})}(n),class:_("wd-drop-item__option "+((""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?"is-active":""))},{default:p((()=>[c(a,{class:_(`wd-drop-item__title ${e.customTitle}`)},{default:p((()=>[c(l,null,{default:p((()=>[w(b(o[e.labelKey]?o[e.labelKey]:o),1)])),_:2},1024),o[e.tipKey]?(i(),r(l,{key:0,class:"wd-drop-item__tip"},{default:p((()=>[w(b(o[e.tipKey]),1)])),_:2},1024)):g("",!0)])),_:2},1032,["class"]),(""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?(i(),r(t,{key:0,name:e.iconName,size:"20px",class:_(`wd-drop-item__icon ${e.customIcon}`)},null,8,["name","class"])):g("",!0)])),_:2},1032,["onClick","class"])))),128))])),_:1})):h(e.$slots,"default",{key:1},void 0,!0)])),_:3},8,["modelValue","z-index","duration","position","modal","close-on-click-modal"])])),_:3},8,["class","style"])):g("",!0)}}}),[["__scopeId","data-v-4fb5f046"]]),oe=H(e({name:"wd-drop-menu",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:Z,setup(e){const n=e,u=o(q,null),g=l(`dropMenuId${M()}`),x=l(null),S=l(0),j=l(0),{proxy:I}=k(),{linkChildren:U,children:z}=D(X);function N(e){e.preventDefault(),e.stopPropagation()}function O(e){const{title:o,modelValue:l,options:a,valueKey:t,labelKey:n}=e;if(o)return o;for(let u=0,s=a.length;u<s;u++)if(l===a[u][t])return a[u][n];console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.")}function E(e){x.value=e?e.$.uid:null,e?Q(`#${g.value}`,!1,I).then((o=>{if(!o)return;const{top:l,bottom:a}=o;"down"===n.direction?S.value=Number(a):S.value=j.value-Number(l);e.$.exposed.getShowPop()?(e.$.exposed.setShowPop(!1),x.value=null):z.forEach((o=>{e.$.uid===o.$.uid?o.$.exposed.open():o.$.exposed.setShowPop(!1)}))})):z.forEach((e=>{e.$.exposed.setShowPop(!1)}))}return U({props:n,fold:E,offset:S}),a((()=>n.direction),(e=>{"up"!==e&&"down"!==e&&console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'")}),{deep:!0,immediate:!0}),t((()=>{j.value=$().windowHeight})),(e,o)=>{const l=C,a=s(d("wd-icon"),P);return i(),r(l,{style:y(e.customStyle),class:_(`wd-drop-menu ${e.customClass}`),onClick:K(N,["stop"]),id:g.value},{default:p((()=>[c(l,{class:"wd-drop-menu__list"},{default:p((()=>[(i(!0),m(v,null,f(V(z),((e,o)=>(i(),r(l,{key:o,onClick:o=>function(e){e&&!e.disabled&&(u&&u.closeOther?u.closeOther(e):A(e),E(e))}(e),class:_(`wd-drop-menu__item ${e.disabled?"is-disabled":""} ${x.value===e.$.uid?"is-active":""}`)},{default:p((()=>[c(l,{class:"wd-drop-menu__item-title"},{default:p((()=>[c(l,{class:"wd-drop-menu__item-title-text"},{default:p((()=>[w(b(O(e)),1)])),_:2},1024),c(a,{name:"arrow-down",size:"14px","custom-class":"wd-drop-menu__arrow"})])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),h(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick","id"])}}}),[["__scopeId","data-v-ec37ceaa"]]),le=H(e({__name:"Index",setup(e){const{closeOutside:o}=L(),a=l(),t=l(),n=l(30);l(!1);const u=l(1),m=l(0),v=l(0),f=l(0),_=l(0),b=l(0),g=l(0),h=l(0),y=l(0),k=l([{label:"全部商品",value:0},{label:"新款商品",value:1,tip:"这是补充信息"},{label:"这是比较长的筛选条件这是比较长的筛选条件",value:2}]),x=l([{label:"综合",value:0},{label:"销量",value:1},{label:"上架时间",value:2}]);function $(){var e;null==(e=t.value)||e.initSlider()}function K({value:e}){console.log(e)}function S({value:e}){console.log(e)}function j({value:e}){console.log(e)}function I({value:e}){console.log(e)}function U({value:e}){console.log(e)}function z({value:e}){console.log(e)}function N({value:e}){console.log(e)}function P({value:e}){console.log(e)}function O({value:e}){console.log(e)}function E(){a.value.close()}return(e,l)=>{const H=s(d("wd-drop-menu-item"),ee),M=s(d("wd-drop-menu"),oe),Q=s(d("demo-block"),J),F=s(d("wd-slider"),R),G=s(d("wd-cell"),T),q=s(d("wd-button"),Y),A=C,L=s(d("wd-sort-button"),W),D=s(d("page-wraper"),B);return i(),r(D,null,{default:p((()=>[c(A,{class:"demo-body",onClick:V(o)},{default:p((()=>[c(Q,{title:"基本用法",transparent:""},{default:p((()=>[c(M,null,{default:p((()=>[c(H,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),options:k.value,onChange:K},null,8,["modelValue","options"]),c(H,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),options:x.value,onChange:S},null,8,["modelValue","options"])])),_:1})])),_:1}),c(Q,{title:"自定义菜单内容",transparent:""},{default:p((()=>[c(M,null,{default:p((()=>[c(H,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value=e),options:k.value,onChange:j},null,8,["modelValue","options"]),c(H,{ref_key:"dropMenu",ref:a,title:"筛选",onOpened:$},{default:p((()=>[c(A,null,{default:p((()=>[c(F,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=e=>n.value=e),ref_key:"slider",ref:t},null,8,["modelValue"]),c(G,{title:"标题文字",value:"内容"}),c(G,{title:"标题文字",label:"描述信息",value:"内容"}),c(A,{style:{padding:"0 10px 20px","box-sizing":"border-box"}},{default:p((()=>[c(q,{block:"",size:"large",onClick:E},{default:p((()=>[w("主要按钮")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),c(Q,{title:"自定义菜单选项",transparent:""},{default:p((()=>[c(A,{class:"custom-menu"},{default:p((()=>[c(M,{"custom-style":"flex: 1; min-width: 0"},{default:p((()=>[c(H,{modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=e),options:k.value,onChange:I},null,8,["modelValue","options"])])),_:1}),c(A,{style:{flex:"1"}},{default:p((()=>[c(L,{modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=e=>_.value=e),title:"上架时间",onChange:U},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(Q,{title:"向上弹出",transparent:""},{default:p((()=>[c(M,{direction:"up"},{default:p((()=>[c(H,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value=e),options:k.value,onChange:z},null,8,["modelValue","options"]),c(H,{modelValue:g.value,"onUpdate:modelValue":l[7]||(l[7]=e=>g.value=e),options:x.value,onChange:N},null,8,["modelValue","options"])])),_:1})])),_:1}),c(Q,{title:"禁用",transparent:""},{default:p((()=>[c(M,{direction:"up"},{default:p((()=>[c(H,{modelValue:h.value,"onUpdate:modelValue":l[8]||(l[8]=e=>h.value=e),disabled:"",options:k.value,onChange:P},null,8,["modelValue","options"]),c(H,{modelValue:y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>y.value=e),options:x.value,onChange:O},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-c2e0aff6"]]);export{le as default};