import{b as e,d as t,a3 as l,a4 as a,V as s,x as o,W as i,X as n,c,r as u,w as d,I as r,z as m,a5 as _,H as f,a6 as p,L as v,y,N as h,a as w,o as g,e as b,f as x,a1 as k,K as C,u as I,k as j,_ as V,g as A,h as $,n as S,m as U,t as H,C as B,a2 as D,D as N,E as K,i as T,j as q,F as z,v as E,l as F}from"./index-80b03063.js";import{a as L}from"./index.b621671f.js";import{U as P,C as W}from"./event.5568c9d8.js";import{i as X}from"./is-number.acae358a.js";import{u as G}from"./index.ec111f4e.js";import{u as J}from"./index.38361e72.js";import{C as M}from"./custom-page.333ee63a.js";import{D as O}from"./demo-container.59d4003d.js";import{u as Q}from"./index.e83e3f39.js";import"./title.e0fd12f0.js";const R=Symbol("collapseContextKey"),Y=e({modelValue:{type:t([Number,Array])},accordion:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0},arrowColor:String}),Z=V(w({__name:"collapse",props:Y,emits:{[P]:e=>l(e)||a(e)||X(e),[W]:e=>l(e)||a(e)||X(e)},setup(e,{emit:t}){const a=e,o=s("collapse");return((e,t)=>{const{children:a,addChild:s,removeChild:o}=G(),i=u([]),n=u(),c=e=>{f((()=>{let t;t=void 0===e||-1===e?[]:X(e)?[e]:[...e],i.value=a.value.filter(((e,l)=>t.includes(l))).map((e=>e.uid))}))};let p=!1;d((()=>e.modelValue),(e=>{p?p=!1:(n.value=e,c(e))}),{immediate:!0}),r(R,m({..._(e),items:a,addItem:s,removeItem:o,activeUid:i,handleItemClick:s=>{const{accordion:o}=e,u=a.value.findIndex((e=>e.uid===s)),d=i.value.includes(s);let r;r=o?d?-1:u:d?n.value.filter((e=>e!==u)):n.value&&l(n.value)?[...n.value,u]:n.value?[n.value,u]:[u],p=!0,n.value=r,t(P,r),c(r),f((()=>{t(W,r)}))}}))})(a,t),(e,t)=>{const l=j;return g(),b(l,{class:C([I(o).b()])},{default:x((()=>[k(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-5f674a2c"]]),ee=V(w({__name:"collapse-item",props:e({title:String,disabled:Boolean}),setup(e){const t=e,{componentContentId:l,showArrow:a,isActive:d,componentHeight:r,collapseItemClick:m}=(e=>{const t=y(),{uid:l}=t,a=o(R);null==a||a.addItem({uid:l});const s=`tcic-${h()}`,{getSelectorNodeInfo:i}=J(t),n=c((()=>!!a&&a.activeUid.includes(l))),d=c((()=>L(null==a?void 0:a.showArrow,!1))),r=u(0),m=u(p(100)),_=c((()=>n.value?`${m.value+r.value}px`:`${m.value}px`));let w=0;const g=async()=>{try{const e=await i(`#${s}`);w=0,r.value=e.height||0}catch(e){if(w>10)return void(w=0);w++,setTimeout((()=>{g()}),150)}};return v((()=>{f((()=>{g()}))})),{componentContentId:s,showArrow:d,isActive:n,componentHeight:_,collapseItemClick:()=>{e.disabled||null==a||a.handleItemClick(l)}}})(t),{ns:_,arrowClass:w,arrowStyle:V}=(()=>{const e=s("collapse-item"),t=o(R),[l,a]=i(n(t,"arrowColor"),"text");return{ns:e,arrowClass:c((()=>{const e=[];return l.value&&e.push(l.value),e.join(" ")})),arrowStyle:c((()=>{const e={};return l.value||(e.color=a.value||"var(--tn-color-gray)"),e}))}})();return(e,t)=>{const s=j;return g(),b(s,{class:C([I(_).b(),I(_).is("active",I(d)),I(_).is("disabled",e.disabled)]),style:B({height:I(r)})},{default:x((()=>[A(" 标题 "),$(s,{class:C([I(_).e("title")]),onClick:S(I(m),["stop"])},{default:x((()=>[$(s,{class:"content tn-text-ellipsis-1"},{default:x((()=>[k(e.$slots,"title",{},(()=>[U(H(e.title),1)]),!0)])),_:3}),I(a)?(g(),b(s,{key:0,class:C(["arrow",[I(w)]]),style:B(I(V))},{default:x((()=>[$(D,{name:"right"})])),_:1},8,["class","style"])):A("v-if",!0)])),_:3},8,["class","onClick"]),A(" 内容区域 "),$(s,{id:I(l),class:C([I(_).e("content")])},{default:x((()=>[k(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-f8eea947"]]),te=V(w({__name:"index",setup(e){N((()=>({}))),K((()=>({})));const{isDemoH5Page:t}=Q(),l=u(),a=u(1),s=[{title:"关雎",content:"关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"},{title:"长歌行",content:"青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！"},{title:"秋风辞",content:"秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！"}];return(e,o)=>{const i=E,n=j,c=F("TnIcon");return g(),b(M,{title:"折叠面板","page-bg-color":"tn-gray-light","is-h5-demo-page":I(t)},{default:x((()=>[$(O,{title:"基础使用"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-black_text"},{default:x((()=>[U(" 当前选中的折叠面板： "),$(i,{class:"tn-gray_text"},{default:x((()=>[U(H(void 0===l.value?"没有打开折叠面板":l.value),1)])),_:1})])),_:1}),$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t,title:e.title},{default:x((()=>[U(H(e.content),1)])),_:2},1032,["title"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),$(O,{title:"全部面板可以打开"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,{accordion:!1},{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t,title:e.title},{default:x((()=>[U(H(e.content),1)])),_:2},1032,["title"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),$(O,{title:"隐藏右边箭头"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,{"show-arrow":!1},{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t,title:e.title},{default:x((()=>[U(H(e.content),1)])),_:2},1032,["title"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),$(O,{title:"修改右边箭头的颜色"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,{"arrow-color":"tn-type-primary"},{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t,title:e.title},{default:x((()=>[U(H(e.content),1)])),_:2},1032,["title"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),$(O,{title:"禁止第二项进行点击"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,null,{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t,title:e.title,disabled:1===t},{default:x((()=>[U(H(e.content),1)])),_:2},1032,["title","disabled"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),$(O,{title:"自定义标题"},{default:x((()=>[$(n,{class:"collapse-container"},{default:x((()=>[$(n,{class:"collapse-item tn-white_bg"},{default:x((()=>[$(Z,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e)},{default:x((()=>[(g(),T(z,null,q(s,((e,t)=>$(ee,{key:t},{title:x((()=>[$(n,{class:"collapse-item__title"},{default:x((()=>[1===t?(g(),b(n,{key:0,class:"icon tn-yellow_text"},{default:x((()=>[$(c,{name:"star-fill"})])),_:1})):A("v-if",!0),$(n,{class:C(["value",[t===a.value?"tn-black_text":"tn-gray_text"]])},{default:x((()=>[U(H(e.title),1)])),_:2},1032,["class"])])),_:2},1024)])),default:x((()=>[U(" "+H(e.content),1)])),_:2},1024))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-ca972e6e"]]);export{te as default};
