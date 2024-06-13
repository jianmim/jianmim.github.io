import{aa as e,b as l,ab as a,a4 as t,V as o,W as s,X as r,c as n,r as u,w as c,H as i,a as d,o as p,e as h,f as v,g as f,h as m,u as y,K as C,C as B,a1 as b,a2 as x,m as g,t as k,i as S,U as E,n as V,F as _,k as T,ac as j,_ as F}from"./index-80b03063.js";import{U as w,C as I}from"./event.5568c9d8.js";import"./index.b621671f.js";import{d as z}from"./debounce.73e35894.js";const A=l({modelValue:{type:String,default:""},placeholder:{type:String,default:"请输入搜索内容"},placeholderIcon:{type:String,default:"search"},shape:{type:String,values:["square","round"],default:"square"},size:a,textColor:String,placeholderColor:String,textAlign:{type:String,values:["left","center","right"],default:"left"},border:{type:Boolean,default:!0},borderColor:String,focus:Boolean,disabled:Boolean,clearable:{type:Boolean,default:!0},searchButton:{type:Boolean,default:!0},searchButtonText:{type:String,default:"搜 索"},searchButtonTextColor:String,searchButtonBgColor:String,throllte:{type:Boolean,default:!0},throllteTime:{type:Number,default:1e3}}),U=(l,a)=>{const t=u(!l.modelValue),o=u(l.modelValue);c((()=>l.modelValue),(e=>{l.modelValue!==o.value&&(o.value=e,t.value=!e)}));const s=u(!1);l.focus&&(t.value=!1,i((()=>{s.value=!0})));const r=()=>{a(w,o.value),i((()=>{a(I,o.value),a("input",o.value)}))},n=l.throllte?function(l,a,t){let o=!0,s=!0;if("function"!=typeof l)throw new TypeError("Expected a function");return e(t)&&(o="leading"in t?!!t.leading:o,s="trailing"in t?!!t.trailing:s),z(l,a,{leading:o,maxWait:a,trailing:s})}(r,l.throllteTime):r,d=z((()=>{l.disabled||a("search",o.value)}),250);return{showPlaceholder:t,inputValue:o,inputFocus:s,searchBoxClickEvent:()=>{a("click"),l.disabled||(t.value=!1,s.value=!0)},inputFocusEvent:()=>{a("focus")},inputBlurEvent:()=>{t.value=!o.value,s.value=!1,a("blur")},inputValueEvent:n,clearClickEvent:()=>{o.value="",a(w,""),i((()=>{s.value=!0,a(I,""),a("clear")}))},searchBtnClickEvent:d}},q=F(d({__name:"search-box",props:A,emits:{[w]:e=>t(e),[I]:e=>t(e),input:e=>t(e),click:()=>!0,focus:()=>!0,blur:()=>!0,search:e=>t(e),clear:()=>!0},setup(e,{emit:l}){const a=e,{showPlaceholder:t,inputValue:u,inputFocus:c,searchBoxClickEvent:i,inputFocusEvent:d,inputBlurEvent:F,inputValueEvent:w,clearClickEvent:I,searchBtnClickEvent:z}=U(a,l),{ns:A,searchBoxClass:q,searchBoxStyle:P,placeholderClass:W,placeholderStyle:$,searchButtonClass:H,searchButtonStyle:K}=(e=>{const l=o("search-box"),[a,t]=s(r(e,"textColor"),"text"),[u,c]=s(r(e,"borderColor"),"border"),[i,d]=s(r(e,"placeholderColor"),"text"),[p,h]=s(r(e,"searchButtonTextColor"),"text"),[v,f]=s(r(e,"searchButtonBgColor"),"bg"),m=n((()=>{const t=[l.b(),l.m(e.shape),l.is("no-search-btn",!e.searchButton),l.is("disabled",e.disabled)];return e.border&&(t.push(l.m("border")),u.value&&t.push(u.value)),e.size&&t.push(l.m(e.size)),a.value&&t.push(a.value),t.join(" ")})),y=n((()=>{const l={};return a.value||(l.color=t.value||"var(--tn-text-color-primary)"),e.border&&(u.value||(l.borderColor=c.value||"var(--tn-color-gray)")),l})),C=n((()=>{const a=[l.e("placeholder"),l.em("placeholder",e.textAlign)];return i.value&&a.push(i.value),a.join(" ")})),B=n((()=>{const e={};return i.value||(e.color=d.value||"var(--tn-text-color-secondary)"),e})),b=n((()=>{const e=[l.e("search-button")];return v.value&&e.push(v.value),p.value&&e.push(p.value),e.join(" ")})),x=n((()=>{const e={};return v.value||(e.backgroundColor=f.value||"var(--tn-color-primary)"),h.value?e.color=h.value:v.value||p.value||(e.color="var(--tn-color-white)"),e}));return{ns:l,searchBoxClass:m,searchBoxStyle:y,placeholderClass:C,placeholderStyle:B,searchButtonClass:b,searchButtonStyle:x}})(a);return(e,l)=>{const a=T,o=j;return p(),h(a,{class:C([y(q)]),style:B(y(P)),onClick:V(y(i),["stop"])},{default:v((()=>[f(" 搜索框内容输入区 "),m(a,{class:C([y(A).e("content")])},{default:v((()=>[y(t)?(p(),h(a,{key:0,class:C([y(W)]),style:B(y($))},{default:v((()=>[b(e.$slots,"placeholder",{},(()=>[e.placeholderIcon?(p(),h(a,{key:0,class:C([y(A).e("placeholder-icon")])},{default:v((()=>[m(x,{name:e.placeholderIcon},null,8,["name"])])),_:1},8,["class"])):f("v-if",!0),e.placeholder?(p(),h(a,{key:1,class:C([y(A).e("placeholder-text")])},{default:v((()=>[g(k(e.placeholder),1)])),_:1},8,["class"])):f("v-if",!0)]),!0)])),_:3},8,["class","style"])):(p(),S(_,{key:1},[f(" input输入框 "),m(o,{modelValue:y(u),"onUpdate:modelValue":l[0]||(l[0]=e=>E(u)?u.value=e:null),class:C([y(A).e("input"),y(A).em("input",e.textAlign)]),focus:y(c),"confirm-type":"search",onFocus:y(d),onBlur:y(F),onInput:y(w),onConfirm:y(z)},null,8,["modelValue","class","focus","onFocus","onBlur","onInput","onConfirm"]),f(" 清除按钮 "),e.clearable&&y(u)?(p(),h(a,{key:0,class:C([y(A).e("clear-button")]),onClick:V(y(I),["stop"])},{default:v((()=>[m(x,{name:"close-fill"})])),_:1},8,["class","onClick"])):f("v-if",!0)],64))])),_:3},8,["class"]),f(" 搜索按钮 "),e.searchButton?(p(),h(a,{key:0,class:C([y(H)]),style:B(y(K)),"hover-class":"tn-u-btn-hover","hover-stay-time":150,onClick:V(y(z),["stop"])},{default:v((()=>[b(e.$slots,"search",{},(()=>[g(k(e.searchButtonText),1)]),!0)])),_:3},8,["class","style","onClick"])):f("v-if",!0)])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-56f2c1ae"]]);export{q as T};
