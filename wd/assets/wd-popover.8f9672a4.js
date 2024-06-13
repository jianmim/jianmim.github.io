import{d as e,N as o,v as s,m as t,Q as l,Y as a,h as n,j as c,o as u,c as p,w as r,a as d,n as i,b as m,t as _,p as y,e as v,F as w,f,u as k,y as C,x as b,R as h,J as S,i as g,g as j}from"./index-dce73128.js";import{g as V,i as x,l as A,m as $,c as Q,j as P,r as T,b as F}from"./page-wraper.5690414d.js";import{u as O}from"./usePopover.c9692131.js";import{r as I,q,c as G,p as H}from"./clickoutside.6858d0d2.js";const J=F(e({name:"wd-popover",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...V,customArrow:x(""),customPop:x(""),visibleArrow:A(!0),content:[String,Object],placement:x("bottom"),offset:$(0),useContentSlot:A(!1),disabled:A(!1),showClose:A(!1),modelValue:A(!1),mode:x("normal")},emits:["update:modelValue","menuclick","change","open","close"],setup(e,{expose:V,emit:x}){const A=e,$=o(q,null),F="popover",{proxy:J}=S();s((()=>A.content),(e=>{const{mode:o}=A;"normal"===o&&"string"!=typeof e?console.error("The value type must be a string type in normal mode"):"menu"!==o||T(e)||console.error("The value type must be a Array type in menu mode")})),s((()=>A.placement),(()=>{N.init(A.placement,A.visibleArrow,F)})),s((()=>A.modelValue),(e=>{e&&(N.control(A.placement,A.offset),$&&$.closeOther?$.closeOther(J):G(J)),N.showStyle.value=e?"display: inline-block;":"display: none;",x("change",{show:e}),x(""+(e?"open":"close"))})),t((()=>{N.init(A.placement,A.visibleArrow,F)})),l((()=>{$&&$.pushToQueue?$.pushToQueue(J):H(J),N.showStyle.value=A.modelValue?"opacity: 1;":"opacity: 0;"})),a((()=>{$&&$.removeFromQueue?$.removeFromQueue(J):I(J)}));const N=O();function R(e){x("update:modelValue",!1),x("menuclick",{item:A.content[e],index:e})}function Y(){A.disabled||x("update:modelValue",!A.modelValue)}return V({open:function(){x("update:modelValue",!0)},close:function(){x("update:modelValue",!1)}}),(e,o)=>{const s=g,t=n(c("wd-icon"),Q),l=j,a=n(c("wd-transition"),P);return u(),p(s,{class:i(`wd-popover ${e.customClass}`),style:C(e.customStyle),id:"popover",onClick:h(k(N).noop,["stop"])},{default:r((()=>[d(s,{class:"wd-popover__pos wd-popover__hidden",id:"pos"},{default:r((()=>[d(s,{class:i(`wd-popover__container ${e.customPop}`)},{default:r((()=>[e.useContentSlot||"normal"!==e.mode?y("",!0):(u(),p(s,{key:0,class:"wd-popover__inner"},{default:r((()=>[m(_(e.content),1)])),_:1})),e.useContentSlot||"menu"!==e.mode||"object"!=typeof e.content?y("",!0):(u(),p(s,{key:1,class:"wd-popover__menu"},{default:r((()=>[(u(!0),v(w,null,f(e.content,((e,o)=>(u(),p(s,{key:o,class:"wd-popover__menu-inner",onClick:e=>R(o)},{default:r((()=>[e.iconClass?(u(),p(t,{key:0,name:e.iconClass,"custom-class":"wd-popover__icon"},null,8,["name"])):y("",!0),d(l,null,{default:r((()=>[m(_(e.content),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}))])),_:1},8,["class"])])),_:1}),d(a,{"custom-class":"wd-popover__pos","custom-style":k(N).popStyle.value,show:e.modelValue,name:"fade",duration:200},{default:r((()=>[d(s,{class:i(`wd-popover__container ${e.customPop}`)},{default:r((()=>[A.visibleArrow?(u(),p(s,{key:0,class:i(`wd-popover__arrow ${k(N).arrowClass.value} ${e.customArrow}`),style:C(k(N).arrowStyle.value)},null,8,["class","style"])):y("",!0),e.useContentSlot||"normal"!==e.mode?y("",!0):(u(),p(s,{key:1,class:"wd-popover__inner"},{default:r((()=>[m(_(e.content),1)])),_:1})),e.useContentSlot||"menu"!==e.mode?b(e.$slots,"content",{key:3},void 0,!0):(u(),p(s,{key:2,class:"wd-popover__menu"},{default:r((()=>[(u(!0),v(w,null,f(e.content,((e,o)=>(u(),p(s,{key:o,class:"wd-popover__menu-inner",onClick:e=>R(o),style:C(0===o?"border-top: none":"")},{default:r((()=>["object"==typeof e&&e.iconClass?(u(),p(t,{key:0,name:e.iconClass,"custom-class":"wd-popover__icon"},null,8,["name"])):y("",!0),d(s,{style:{display:"inline-block"}},{default:r((()=>[m(_("object"==typeof e&&e.content?e.content:""),1)])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1}))])),_:3},8,["class"]),e.showClose?(u(),p(t,{key:0,name:"close","custom-class":"wd-popover__close-icon",onClick:Y})):y("",!0)])),_:3},8,["custom-style","show"]),d(s,{onClick:Y,class:"wd-popover__target",id:"target"},{default:r((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-ed1bc409"]]);export{J as _};