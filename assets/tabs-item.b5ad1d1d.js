import{b as e,d as t,a4 as a,V as l,W as s,X as o,c as i,Z as r,x as n,a0 as d,L as u,H as c,M as f,y as h,N as v,am as m,r as b,w as p,I as g,z as y,a5 as S,a8 as C,a as w,o as I,e as x,f as _,g as k,K as $,u as z,C as B,h as j,a1 as T,k as N,J as V,_ as L,m as A,t as F,n as W}from"./index-80b03063.js";import{U as O,C as U}from"./event.5568c9d8.js";import{i as q}from"./is-number.acae358a.js";import{a as E,b as K}from"./index.b621671f.js";import{u as R}from"./index.38361e72.js";import{u as H}from"./index.ec111f4e.js";import{T as J}from"./badge.9856adf0.js";const M=Symbol("tabsContextKey"),X=e({color:String,activeColor:String,fontSize:String,activeFontSize:String}),Z=e({...X,modelValue:{type:[String,Number],default:0},height:{type:String,default:"80rpx"},barWidth:{type:String,default:"40rpx"},bgColor:String,barColor:String,bottomShadow:{type:Boolean,default:!0},scroll:{type:Boolean,default:!0},bar:{type:Boolean,default:!0},activeBold:{type:Boolean,default:!0},offsetTop:{type:Number,default:0},beforeSwitch:{type:t(Function)}}),D=e=>{const t=h(),{emit:a}=t,l=m(),{children:s,addChild:o,removeChild:r}=H(),{getSelectorNodeInfo:n}=R(t),d=`tt-${v()}`,f=`${d}-b`,w=i((()=>e.bar||!!l.bar)),I=b(-1),x={width:0,height:0,left:0},_={width:0,height:0,left:0},k=b(0),$=b(0),z=(t,o=!1)=>{I.value=t;const i=s.value.findIndex((e=>e.uid===t)),r=s.value[i].name?s.value[i].name:i;(t=>{if(!e.scroll&&!e.bar&&!l.bar)return;const a=s.value[t].elementRect;if((e.bar||l.bar)&&(k.value=a.left-x.left+(a.width-_.width)/2),e.scroll){const e=a.left-x.left-(x.width-a.width)/2;$.value=e<0?0:e}})(i),a(O,r),o&&a(U,r)};p((()=>e.modelValue),(e=>{(e=>{var t;if(void 0===e)return void z(s.value[0].uid);let a;"number"==typeof e&&(a=null==(t=s.value)?void 0:t[e]),a||(a=s.value.find((t=>t.name===e))),z(a?a.uid:s.value[0].uid)})(e)}));let B=0;const j=async()=>{try{const e=await n(`#${d}`);B=0,x.width=e.width||0,x.height=e.height||0,x.left=e.left||0}catch(e){if(B>10)return void(B=0);B++,setTimeout((()=>{j()}),150)}},T=async()=>{if(e.bar||l.bar)try{const e=await n(`#${f}`);B=0,_.width=e.width||0,_.height=e.height||0,_.left=e.left||0}catch(t){if(B>10)return void(B=0);B++,setTimeout((()=>{T()}),150)}};return u((()=>{c((()=>{j(),T()}))})),g(M,y({...S(e),items:s,activeUid:I,showBar:w,addItem:t=>{void 0!==e.modelValue&&-1===I.value&&(e.modelValue!==t.name&&e.modelValue!==s.value.length||c((()=>{z(t.uid)}))),o(t)},removeItem:r,setActiveItem:t=>{if(!e.beforeSwitch)return void z(t,!0);const a=s.value.findIndex((e=>e.uid===t)),l=e.beforeSwitch(a);[C(l),K(l)].includes(!0)&&(C(l)?l.then((e=>{e&&z(t,!0)})).catch((e=>{})):l&&z(t,!0))}})),{tabItems:s,componentId:d,barComponentId:f,barOffsetLeft:k,scrollLeft:$,showBar:w}},G=L(w({__name:"tabs",props:Z,emits:{[O]:e=>a(e)||q(e),[U]:e=>a(e)||q(e)},setup(e){const t=e,{tabItems:a,componentId:n,barComponentId:d,barOffsetLeft:u,scrollLeft:c,showBar:f}=D(t),{ns:h,tabsClass:v,tabsStyle:m,barClass:b,barStyle:p}=(e=>{const t=l("tabs"),[a,n]=s(o(e,"bgColor"),"bg"),[d,u]=s(o(e,"barColor"),"bg"),c=i((()=>{const l=[t.b()];return e.bottomShadow&&l.push(t.m("bottom-shadow")),a.value&&l.push(a.value),l.join(" ")})),f=i((()=>{const t={};return a.value||(t.backgroundColor=n.value||"var(--tn-color-white)"),e.height&&(t.height=r(e.height),e.offsetTop&&(t.height=`calc(${t.height} + ${e.offsetTop}px)`)),t})),h=i((()=>{const e=[t.e("bar")];return d.value&&e.push(d.value),e.join(" ")})),v=i((()=>{const t={};return d.value||(t.backgroundColor=u.value||"var(--tn-color-primary)"),e.barWidth&&(t.width=r(e.barWidth)),t}));return{ns:t,tabsClass:c,tabsStyle:f,barClass:h,barStyle:v}})(t);return(e,t)=>{const l=N,s=V;return I(),x(l,{id:z(n),class:$([z(v)]),style:B(z(m))},{default:_((()=>[k(" 距离顶部的距离占位 "),e.offsetTop?(I(),x(l,{key:0,class:$([z(h).e("top-placeholder")]),style:B({height:`${e.offsetTop}px`})},null,8,["class","style"])):k("v-if",!0),k(" 内容区域 "),j(s,{class:$([z(h).e("scroll-view")]),style:B({height:z(r)(e.height||"100%")}),"scroll-x":e.scroll,"scroll-with-animation":"","scroll-left":z(c)},{default:_((()=>[j(l,{class:$([z(h).e("container"),z(h).is("scroll",e.scroll),z(h).is("no-bar",!z(f))])},{default:_((()=>[T(e.$slots,"default",{},void 0,!0),k(" 滑块 "),e.bar||e.$slots.bar?(I(),x(l,{key:0,id:z(d),class:$([z(h).e("bar-container")]),style:B({left:`${z(u)}px`,opacity:""+(z(u)&&z(a).length?1:0)})},{default:_((()=>[T(e.$slots,"bar",{},(()=>[j(l,{class:$([z(b)]),style:B(z(p))},null,8,["class","style"])]),!0)])),_:3},8,["id","class","style"])):k("v-if",!0)])),_:3},8,["class"])])),_:3},8,["class","style","scroll-x","scroll-left"])])),_:3},8,["id","class","style"])}}}),[["__scopeId","data-v-f53c1c3a"]]),P=L(w({__name:"tabs-item",props:e({...X,name:{type:[String,Number]},title:{type:String,required:!0},badgeConfig:{type:t(Object),default:()=>({})},disabled:Boolean}),emits:{click:()=>!0},setup(e){const t=e,{componentId:a,isActive:o,hasBadge:m,itemClickEvent:b}=(e=>{const t=h(),{emit:a,uid:l}=t,s=`tti-${v()}`,o=n(M),{getSelectorNodeInfo:r}=R(t),m=i((()=>(null==o?void 0:o.activeUid)===l)),b=i((()=>!d(e.badgeConfig))),p={width:0,height:0,left:0};let g=0;const y=async()=>{try{const t=await r(`#${s}`);p.width=t.width||0,p.height=t.height||0,p.left=t.left||0,null==o||o.addItem({uid:l,elementRect:p,name:e.name})}catch(t){if(g>10)return void(g=0);g++,setTimeout((()=>{y()}),150)}};return u((()=>{c((()=>{setTimeout((()=>{y()}),200)}))})),f((()=>{null==o||o.removeItem(l)})),{componentId:s,isActive:m,hasBadge:b,itemClickEvent:()=>{e.disabled||(a("click"),null==o||o.setActiveItem(l))}}})(t),{ns:p,tabsItemClass:g,tabsItemStyle:y}=((e,t)=>{const a=l("tabs-item"),o=n(M),d=i((()=>e.color||(null==o?void 0:o.color))),u=i((()=>e.activeColor||(null==o?void 0:o.activeColor))),c=i((()=>E(null==o?void 0:o.activeBold,!0))),f=i((()=>e.activeFontSize||(null==o?void 0:o.activeFontSize))),[h,v]=s(d,"text"),[m,b]=s(u,"text"),p=i((()=>{const e=[a.b()];return t.value?(m.value&&e.push(m.value),c.value&&e.push(a.m("bold"))):h.value&&e.push(h.value),(null==o?void 0:o.scroll)&&e.push(a.m("scroll")),(null==o?void 0:o.showBar)||e.push(a.is("no-bar")),e.join(" ")})),g=i((()=>{const a={};return(e.fontSize||(null==o?void 0:o.fontSize))&&(a.fontSize=r(e.fontSize||(null==o?void 0:o.fontSize)||"")),t.value?(m.value||(a.color=b.value||"var(--tn-color-primary)"),f.value&&(a.fontSize=r(f.value))):h.value||(a.color=v.value||"var(--tn-text-color-primary)"),a}));return{ns:a,tabsItemClass:p,tabsItemStyle:g}})(t,o);return(e,t)=>{const l=N;return I(),x(l,{id:z(a),class:$([z(g)]),style:B(z(y)),onClick:W(z(b),["stop"])},{default:_((()=>[T(e.$slots,"default",{},(()=>[j(l,{class:$([z(p).e("content")])},{default:_((()=>[j(l,{class:$([z(p).e("content__value")])},{default:_((()=>[k(" 角标 "),z(m)?(I(),x(J,{key:0,value:e.badgeConfig.value,dot:e.badgeConfig.dot,size:e.badgeConfig.dot?"16":"",type:"danger",onClick:z(b)},null,8,["value","dot","size","onClick"])):k("v-if",!0),A(" "+F(e.title),1)])),_:1},8,["class"])])),_:1},8,["class"])]),!0)])),_:3},8,["id","class","style","onClick"])}}}),[["__scopeId","data-v-245e6fe3"]]);export{G as T,P as a};