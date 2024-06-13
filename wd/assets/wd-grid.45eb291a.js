import{d as e,r as s,q as t,v as o,m as a,h as r,j as l,o as i,c as n,w as u,a as d,n as p,y as c,x as m,e as g,F as b,a9 as v,b as $,t as h,aa as x,P as f,ab as y,k,i as w,u as C}from"./index-dce73128.js";import{g as _,l as S,i as I,h as T,t as q,c as j,b as z,O as N}from"./page-wraper.5690414d.js";import{_ as P}from"./wd-badge.2aec3616.js";import{u as B}from"./useChildren.8ed137fc.js";const D=Symbol("wd-grid"),G={..._,clickable:S(!1),square:S(!1),column:Number,border:S(!1),bgColor:I(""),gutter:Number},H=z(e({name:"wd-grid-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{..._,customText:I(""),customIcon:I(""),icon:I(""),iconSize:I("26px"),text:String,url:String,linkType:I("navigateTo"),useSlot:S(!1),useIconSlot:S(!1),useTextSlot:S(!1),isDot:Boolean,type:String,value:Number,max:Number,badgeProps:Object},emits:["itemclick"],setup(e,{expose:C,emit:_}){const S=e,I=s(""),z=s(""),N=s(""),B=s(0),G=s(!1),H=s(!0),{parent:O}=T(D),V=t((()=>q(O)&&q(O.children)?O.children.length:0));function E(){if(!O)return;const e=O.children,s=O.props.column?100/O.props.column+"%":100/e.length+"%",t=O.props.gutter?`padding:${O.props.gutter}px ${O.props.gutter}px 0 0; background-color: transparent;`:"",o=O.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${s}`:"";z.value=O.props.gutter&&O.props.square?`right: ${O.props.gutter}px; bottom:${O.props.gutter}px;height: auto; background-color: ${O.props.bgColor}`:`background-color: ${O.props.bgColor}`,H.value=Boolean(O.props.border),G.value=Boolean(O.props.square),B.value=Number(O.props.gutter),I.value=`width: ${s}; ${o||t}`}function F(){if(O&&!O.props.clickable)return;const{url:e,linkType:s}=S;if(_("itemclick"),e)switch(s){case"navigateTo":k({url:e});break;case"reLaunch":y({url:e});break;case"redirectTo":f({url:e});break;case"switchTab":x({url:e});break;default:console.error(`[wot-design] warning(wd-grid-item): linkType can not be ${s}`)}}return o((()=>V.value),(()=>{if(!O)return;const e=O.props.column?100/O.props.column+"%":100/(V.value||1)+"%",s=O.props.gutter?`padding:${O.props.gutter}px ${O.props.gutter}px 0 0; background-color: transparent;`:"",t=O.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${e}`:"";I.value=`width: ${e}; ${t||s}`}),{deep:!0,immediate:!0}),a((()=>{E()})),C({setiIemClass:function(e){N.value=e},itemClass:N,init:E}),(e,s)=>{const t=r(l("wd-icon"),j),o=r(l("wd-badge"),P),a=w;return i(),n(a,{class:p(`wd-grid-item ${H.value&&!B.value?N.value:""} ${e.customClass}`),onClick:F,style:c(`${I.value};${e.customStyle}`)},{default:u((()=>[d(a,{class:p(`wd-grid-item__content ${G.value?"is-square":""} ${H.value&&B.value>0?"is-round":""}`),style:c(z.value)},{default:u((()=>[e.useSlot?m(e.$slots,"default",{key:0},void 0,!0):(i(),g(b,{key:1},[d(a,{style:c("width:"+e.iconSize+"; height: "+e.iconSize),class:"wd-grid-item__wrapper"},{default:u((()=>[d(o,v({"custom-class":"badge","is-dot":e.isDot,modelValue:e.value,max:e.max,type:e.type},e.badgeProps),{default:u((()=>[e.useIconSlot?m(e.$slots,"icon",{key:0},void 0,!0):(i(),n(t,{key:1,name:e.icon,size:e.iconSize,"custom-class":e.customIcon},null,8,["name","size","custom-class"]))])),_:3},16,["is-dot","modelValue","max","type"])])),_:3},8,["style"]),e.useTextSlot?m(e.$slots,"text",{key:0},void 0,!0):(i(),n(a,{key:1,class:"wd-grid-item__text custom-text"},{default:u((()=>[$(h(e.text),1)])),_:1}))],64))])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-70ff684b"]]),O=z(e({name:"wd-grid",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:G,setup(e){const s=e,a=()=>new Promise((e=>setTimeout(e,20))),{linkChildren:r,children:l}=B(D);r({props:s}),o((()=>s.column),((e,s)=>{e!==s&&((!e||e<=0)&&console.error("The number of columns attribute value is invalid. The attribute must be greater than 0 and it is not recommended to use a larger value attribute."),s&&b())}),{deep:!0,immediate:!0}),o((()=>s.border),(e=>{e&&Promise.resolve().then(a).then((()=>{b()}))}),{deep:!0,immediate:!0}),o((()=>l),(()=>{g()}),{deep:!0});const d=t((()=>`${s.gutter?"padding-left:"+s.gutter+"px;padding-bottom:"+s.gutter+"px;":""}${s.customStyle}`)),g=N((()=>{b()}),50);function b(){l&&l.forEach(((e,t)=>{if(s.border){const{column:o}=s;if(o){const s=l.length-1===t||(t+1)%o==0,a=t+1<=o;a&&e.$.exposed.setiIemClass("is-first"),s&&e.$.exposed.setiIemClass("is-right"),!a&&e.$.exposed.setiIemClass("is-border")}else e.$.exposed.setiIemClass("is-first");l.length-1===t&&e.$.exposed.setiIemClass(e.$.exposed.itemClass.value+" is-last")}e.$.exposed.init()}))}return(e,s)=>{const t=w;return i(),n(t,{class:p(`wd-grid ${e.customClass}`),style:c(C(d))},{default:u((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-44139fa2"]]);export{H as _,O as a};