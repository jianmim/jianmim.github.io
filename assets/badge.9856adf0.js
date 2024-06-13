import{b as e,O as t,$ as s,d as a,al as o,c as n,a4 as u,V as l,W as i,X as r,Y as c,Z as b,a0 as p,a as d,am as m,o as g,e as v,f as y,a1 as h,g as f,u as C,K as S,C as k,n as x,i as z,a2 as N,t as _,F as j,k as B,_ as $}from"./index-80b03063.js";import"./index.b621671f.js";import{i as P}from"./is-number.acae358a.js";const T=e({value:{type:[String,Number]},max:{type:[String,Number]},type:{type:String,values:t,default:"primary"},bgColor:String,textColor:String,size:{type:[String,Number]},fontSize:{type:[String,Number]},bold:Boolean,customStyle:s,customClass:String,dot:Boolean,absolute:{type:Boolean,default:!0},absolutePosition:{type:a(Object),default:()=>({})},absoluteCenter:{type:Boolean,default:!0},index:o}),w=(e,t)=>{const s=n((()=>!!e.dot||""!==e.value&&void 0!==e.value)),a=n((()=>{let t="string";return P(e.value)&&(t="number"),u(e.value)&&e.value.startsWith("icon-")&&(t="icon"),t})),o=n((()=>{if(e.dot)return"";if("number"===a.value&&e.max){const t=Number(e.value||0),s=Number(e.max||0);return t>s?`${s}+`:`${t}`}return"icon"===a.value?e.value.replace("icon-",""):e.value}));return{showBadge:s,contentType:a,content:o,badgeClick:()=>{t&&t("click",e.index)}}},O=$(d({__name:"badge",props:T,emits:{click:e=>"number"==typeof e||"string"==typeof e},setup(e,{emit:t}){const s=e,a=m(),{ns:o,contentNs:u,badgeContentClass:d,badgeContentStyle:$}=(e=>{const t=l("badge"),s=l("badge-content"),{contentType:a}=w(e),[o,u]=i(r(e,"bgColor"),"bg"),[d,m]=i(r(e,"textColor"),"text"),{sizeType:g}=c(e.size),v=n((()=>{const t=[];return t.push(s.b()),e.dot&&t.push(s.m("dot")),"icon"===a.value&&t.push(s.m("icon")),e.absolute&&(t.push(s.e("absolute")),e.absoluteCenter&&t.push(s.em("absolute","center"))),e.type&&t.push(`tn-type-${e.type}_bg`),o.value&&t.push(o.value),d.value&&t.push(d.value),e.size&&"inner"===g.value&&t.push(s.m(e.size)),e.bold&&t.push("tn-text-bold"),e.customClass&&t.push(e.customClass),t.join(" ")})),y=n((()=>{const t={};return u.value&&(t.backgroundColor=u.value),m.value&&(t.color=m.value),!e.size||"custom"!==g.value&&"icon"!==a.value||(t.width=t.height=b(e.size)),e.fontSize&&(t.fontSize=b(e.fontSize)),e.absolutePosition.top&&(t.top=b(e.absolutePosition.top)),e.absolutePosition.right&&(t.right=b(e.absolutePosition.right)),p(e.customStyle)||Object.assign(t,e.customStyle),t}));return{ns:t,contentNs:s,badgeContentClass:v,badgeContentStyle:y}})(s),{showBadge:P,contentType:T,content:O,badgeClick:W}=w(s,t),q=n((()=>{const e=[];return e.push(o.b()),(null==a?void 0:a.default)||s.absolute&&(e.push(o.e("absolute")),s.absoluteCenter&&e.push(o.em("absolute","center"))),e.join(" ")}));return(e,t)=>{const s=B;return g(),v(s,{class:S([C(q)])},{default:y((()=>[h(e.$slots,"default",{},void 0,!0),f(" 徽标 "),C(P)?(g(),v(s,{key:0,class:S([C(d)]),style:k(C($)),onClick:x(C(W),["stop"])},{default:y((()=>[C(O)?(g(),z(j,{key:0},["icon"===C(T)?(g(),v(N,{key:0,name:C(O)},null,8,["name"])):(g(),z("span",{key:1,class:S(`${C(u).e("data")}`)},_(C(O)),3))],64)):f("v-if",!0)])),_:1},8,["class","style","onClick"])):f("v-if",!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-9fe16ac8"]]);export{O as T};
