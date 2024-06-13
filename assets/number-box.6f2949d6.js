import{b as e,ab as t,V as a,W as s,X as n,c as l,Z as o,r,w as u,H as i,y as m,a as p,o as d,e as h,f as b,g as c,h as v,a1 as g,a2 as f,K as x,u as y,C as S,n as B,U as C,k as T,ac as z,_ as P}from"./index-80b03063.js";import{U as I,C as _,I as j}from"./event.5568c9d8.js";import{i as E}from"./is-number.acae358a.js";import{a as N}from"./index.b621671f.js";import{u as V}from"./index.a83b462a.js";import{b as w}from"./index.f7e3486a.js";const O=e({modelValue:{type:Number,default:0},size:t,width:String,height:String,fontSize:String,bgColor:String,textColor:String,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,inputDisabled:Boolean,inputSpacing:{type:Number,default:20},longPress:{type:Boolean,default:!0},longPressInterval:{type:Number,default:250},validateEvent:{type:Boolean,default:!0}}),W=P(p({__name:"number-box",props:O,emits:{[I]:e=>E(e),[_]:e=>E(e),[j]:e=>E(e)},setup(e){const t=e,{inputValue:p,handleOperationEvent:P,clearLongPressTimer:E,numberBoxInputEvent:O}=(e=>{const{emit:t}=m(),{formItem:a}=w(),s=r(0);u((()=>e.modelValue),(t=>{const a=N(t,0);s.value=Math.max(e.min,Math.min(a,e.max))}),{immediate:!0});const o=l((()=>e.step||1)),{clearLongPressTimer:p,handleLongPressEvent:d}=V((t=>{if(e.disabled)return;let a=s.value;"minus"===t?a-=o.value:"plus"===t&&(a+=o.value),a<e.min&&(a=e.min,e.longPress&&p()),a>e.max&&(a=e.max,e.longPress&&p()),h(a)}),n(e,"longPress"),e.longPressInterval),h=n=>{const l=o.value.toString().split("."),r=l.length>1?l[1].length:0;n=Number(n.toFixed(r)),i((()=>{setTimeout((()=>{s.value=n}),0)})),t(I,n),i((()=>{var s;t(_,n),e.validateEvent&&(null==(s=null==a?void 0:a.validate)||s.call(a,"change").catch((e=>{})))}))};return{inputValue:s,handleOperationEvent:d,clearLongPressTimer:p,numberBoxInputEvent:s=>{const n=s.detail.value||0;let l=Number(n);l<e.min&&(l=e.min),l>e.max&&(l=e.max),t(j,n),e.validateEvent&&(null==a||a.validate("input").catch((()=>{}))),h(l)}}})(t),{ns:W,numberBoxClass:L,numberBoxStyle:M,numberBoxOperationWrapperClass:U,numberBoxOperationWrapperStyle:$}=((e,t)=>{const r=a("number-box"),[u,i]=s(n(e,"bgColor"),"bg"),[m,p]=s(n(e,"textColor"),"text"),d=l((()=>{const t=[r.b()];return e.size&&t.push(r.m(e.size)),e.disabled&&t.push(r.m("disabled")),t.join(" ")})),h=l((()=>{const t={};return e.width&&(t.width=o(e.width)),e.height&&(t.height=o(e.height)),e.fontSize&&(t.fontSize=o(e.fontSize)),t})),b=l((()=>a=>{const s=[];return u.value&&s.push(u.value),m.value&&s.push(m.value),("minus"===a&&t.value<=e.min||"plus"===a&&t.value>=e.max)&&s.push(r.is("disabled")),s.join(" ")})),c=l((()=>t=>{const a={};return u.value||(a.backgroundColor=i.value||"var(--tn-color-gray-light)"),p.value&&(a.color=p.value),"minus"!==t&&"plus"!==t||(e.height&&(a.width=o(e.height),a.height=a.width),e.fontSize&&(a.fontSize=`calc(${o(e.fontSize)} * 1.2)`)),a}));return{ns:r,numberBoxClass:d,numberBoxStyle:h,numberBoxOperationWrapperClass:b,numberBoxOperationWrapperStyle:c}})(t,p);return(e,t)=>{const a=T,s=z;return d(),h(a,{class:x([y(L)]),style:S(y(M))},{default:b((()=>[c(" 减操作按钮 "),v(a,{class:x([y(W).e("operation-btn"),y(W).em("operation-btn","minus"),y(U)("minus")]),style:S(y($)("minus")),"hover-class":"tn-u-btn-hover","hover-stay-time":250,onTouchstart:t[0]||(t[0]=B((e=>y(P)("minus")),["stop","prevent"])),onTouchend:B(y(E),["stop","prevent"])},{default:b((()=>[g(e.$slots,"minus",{},(()=>[v(f,{name:"reduce"})]),!0)])),_:3},8,["class","style","onTouchend"]),c(" 输入框 "),v(a,{class:x([y(W).e("input"),y(U)("input")]),style:S(y($)("input"))},{default:b((()=>[v(s,{modelValue:y(p),"onUpdate:modelValue":t[1]||(t[1]=e=>C(p)?p.value=e:null),modelModifiers:{number:!0},type:"digit",disabled:e.disabled||e.inputDisabled,onInput:y(O)},null,8,["modelValue","disabled","onInput"])])),_:1},8,["class","style"]),c(" 加操作按钮 "),v(a,{class:x([y(W).e("operation-btn"),y(W).em("operation-btn","plus"),y(U)("plus")]),style:S(y($)("plus")),"hover-class":"tn-u-btn-hover","hover-stay-time":250,onTouchstart:t[2]||(t[2]=B((e=>y(P)("plus")),["stop","prevent"])),onTouchend:B(y(E),["stop","prevent"])},{default:b((()=>[g(e.$slots,"plus",{},(()=>[v(f,{name:"add"})]),!0)])),_:3},8,["class","style","onTouchend"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-831e2fe2"]]);export{W as T};
