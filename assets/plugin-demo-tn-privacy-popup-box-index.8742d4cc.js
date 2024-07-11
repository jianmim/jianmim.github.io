import{b as e,V as a,W as o,X as t,c as l,r as s,w as r,a as n,o as i,e as u,f as c,h as p,K as d,u as g,m,t as v,a1 as f,n as C,C as y,U as _,k as b,v as k,_ as x,D as B,E as j,i as h,F as S,H}from"./index-80b03063.js";import{T as V}from"./button.89b66e38.js";import{T as D}from"./popup.cb51da11.js";import{b as T}from"./index.b621671f.js";import{U as w}from"./event.5568c9d8.js";import{C as P}from"./custom-page.333ee63a.js";import{D as U}from"./demo-container.59d4003d.js";import{u as I}from"./index.e83e3f39.js";import"./loading.d4613e36.js";import"./debounce.73e35894.js";import"./overlay.66eb0f69.js";import"./install.171bae2e.js";import"./title.e0fd12f0.js";const K=e({modelValue:Boolean,openDirection:{type:String,values:["center","bottom"],default:"center"},title:{type:String,default:"用户隐私保护提示"},agreeText:{type:String,default:"同意并继续"},disagreeText:{type:String,default:"不同意"},agreeBgColor:String,agreeColor:String,disagreeBgColor:String,disagreeColor:String}),E=x(n({__name:"index",props:K,emits:{[w]:e=>T(e),agree:()=>!0,disagree:()=>!0,"open-protocol":()=>!0},setup(e,{emit:n}){const x=e,{showPrivacyPopup:B,popupCloseHandle:j,agreeBtnClickHandle:h,disagreeBtnClickHandle:S,protocolClickHandle:H}=((e,a)=>{const o=s(!1);r((()=>e.modelValue),(e=>{o.value=e}),{immediate:!0});const t=()=>{a("update:modelValue",!1)};return{showPrivacyPopup:o,popupCloseHandle:t,agreeBtnClickHandle:()=>{a("agree"),t()},disagreeBtnClickHandle:()=>{a("disagree"),t()},protocolClickHandle:()=>{a("open-protocol")}}})(x,n),{ns:V,agreeBtnClass:T,agreeBtnStyle:w,disagreeBtnClass:P,disagreeBtnStyle:U}=(e=>{const s=a("privacy-popup-box"),[r,n]=o(t(e,"agreeBgColor"),"bg"),[i,u]=o(t(e,"agreeColor"),"text"),[c,p]=o(t(e,"disagreeBgColor"),"bg"),[d,g]=o(t(e,"disagreeColor"),"text"),m=l((()=>{const e=[s.e("agree-btn")];return r.value&&e.push(r.value),i.value&&e.push(i.value),e.join(" ")})),v=l((()=>{const e={};return n.value?e.backgroundColor=n.value:u.value?e.color=u.value:r.value||i.value||(e.backgroundColor="var(--tn-color-primary)",e.color="#fff"),e})),f=l((()=>{const e=[s.e("disagree-btn")];return c.value&&e.push(c.value),d.value&&e.push(d.value),e.join(" ")})),C=l((()=>{const a={};return p.value?a.backgroundColor=p.value:g.value?a.color=g.value:c.value||d.value||("center"===e.openDirection?(a.backgroundColor="transparent",a.color="var(--tn-color-gray)"):"bottom"===e.openDirection&&(a.backgroundColor="var(--tn-color-danger)",a.color="#fff")),a}));return{ns:s,agreeBtnClass:m,agreeBtnStyle:v,disagreeBtnClass:f,disagreeBtnStyle:C}})(x);return(e,a)=>{const o=b,t=k;return i(),u(D,{modelValue:g(B),"onUpdate:modelValue":a[0]||(a[0]=e=>_(B)?B.value=e:null),"open-direction":e.openDirection,width:"center"===e.openDirection?"84%":"100%","overlay-closeable":!1,radius:"30","safe-area-inset-bottom":!1,onClose:g(j)},{default:c((()=>[p(o,{class:d([g(V).b(),g(V).is(e.openDirection)])},{default:c((()=>[p(o,{class:d([g(V).e("title")])},{default:c((()=>[m(v(e.title),1)])),_:1},8,["class"]),p(o,{class:d([g(V).e("content")])},{default:c((()=>[f(e.$slots,"default",{},(()=>[m(" 亲爱的用户，感谢您信任并使用本小程序！我们非常重视用户的隐私和个人信息保护，您在使用我们的产品/服务时，我们可能会收集和使用您的相关信息，为此我们依据相关法律制定了 "),p(t,{class:d([g(V).em("content","protocol")]),onClick:C(g(H),["stop"])},{default:c((()=>[m(" 《用户隐私保护指引》 ")])),_:1},8,["class","onClick"]),m(" ，请您在点击同意之前仔细阅读并充分理解相关条款内容，我们将严格按照指引内容使用您的信息，以便为您提供更好的服务。 ")]),!0)])),_:3},8,["class"]),p(o,{class:d([g(V).e("operation-container")])},{default:c((()=>[p(o,{class:d([[g(T)],"tn-flex-center"]),style:y(g(w)),onClick:C(g(h),["stop"])},{default:c((()=>[m(v(e.agreeText),1)])),_:1},8,["class","style","onClick"]),p(o,{class:d([[g(P)],"tn-flex-center"]),style:y(g(U)),onClick:C(g(S),["stop"])},{default:c((()=>[m(v(e.disagreeText),1)])),_:1},8,["class","style","onClick"])])),_:1},8,["class"])])),_:3},8,["class"])])),_:3},8,["modelValue","open-direction","width","onClose"])}}}),[["__scopeId","data-v-efd01910"]]),F=x(n({__name:"index",setup(e){B((()=>({}))),j((()=>({})));const{isDemoH5Page:a}=I(),o=s(!1),t=s("center"),l=()=>{t.value="center",setTimeout((()=>{H((()=>{o.value=!0}))}),50)},r=()=>{t.value="bottom",setTimeout((()=>{H((()=>{o.value=!0}))}),50)};return(e,s)=>{const n=b;return i(),h(S,null,[p(P,{title:"隐私弹框","is-h5-demo-page":g(a)},{default:c((()=>[p(U,{title:"居中隐私弹框"},{default:c((()=>[p(n,{class:"privacy-popup-box-container"},{default:c((()=>[p(n,{class:"privacy-popup-box-item"},{default:c((()=>[p(V,{type:"primary",onClick:l},{default:c((()=>[m(" 打开隐私弹框 ")])),_:1})])),_:1})])),_:1})])),_:1}),p(U,{title:"底部隐私弹框"},{default:c((()=>[p(n,{class:"privacy-popup-box-container"},{default:c((()=>[p(n,{class:"privacy-popup-box-item"},{default:c((()=>[p(V,{type:"primary",onClick:r},{default:c((()=>[m(" 打开隐私弹框 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"]),p(E,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),"open-direction":t.value},null,8,["modelValue","open-direction"])],64)}}}),[["__scopeId","data-v-b06706ef"]]);export{F as default};