import{b as t,V as e,W as o,X as s,Y as a,c as l,Z as i,a as n,o as u,e as d,f as c,a1 as r,h as p,a2 as f,K as m,u as g,C as _,k as h,_ as b,D as y,E as v,m as x}from"./index-80b03063.js";import"./index.b621671f.js";import{C as z}from"./custom-page.333ee63a.js";import{D as C}from"./demo-container.59d4003d.js";import{u as S}from"./index.e83e3f39.js";import"./title.e0fd12f0.js";const k=t({icon:String,top:{type:[String,Number],default:"80%"},right:{type:[String,Number],default:"5%"},bgColor:{type:String,default:"tn-type-primary"},textColor:{type:String,default:"tn-color-white"},size:String,shape:{type:String,values:["circle","square"],default:"circle"},opacity:{type:Number,default:.9},shadow:{type:Boolean,default:!0},float:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0}}),j=b(n({__name:"index",props:k,emits:{click:()=>!0},setup(t,{emit:n}){const b=t,{buttonClass:y,buttonStyle:v,iconClass:x,iconStyle:z}=(t=>{const n=e("suspend-button"),[u,d]=o(s(t,"bgColor"),"bg"),[c,r]=o(s(t,"textColor"),"text"),{sizeType:p}=a(t.size);return{buttonClass:l((()=>{const e=[n.b()];return u.value&&e.push(u.value),c.value&&e.push(c.value),t.shape&&e.push(n.m(t.shape)),t.size&&"inner"===p.value&&e.push(n.m(t.size)),t.float&&e.push(n.m("float")),t.fixed&&e.push(n.m("fixed")),t.shadow&&e.push("tn-shadow"),e.join(" ")})),buttonStyle:l((()=>{const e={};return u.value||(e.backgroundColor=d.value||"var(--tn-color-primary)"),r.value?e.color=r.value:u.value||c.value||(e.color="var(--tn-color-white)"),t.size&&"custom"===p.value&&(e.width=e.height=i(t.size)),void 0!==(null==t?void 0:t.opacity)&&(e.opacity=t.opacity),void 0!==(null==t?void 0:t.top)&&(e.top=i(t.top)),void 0!==(null==t?void 0:t.right)&&(e.right=i(t.right)),e})),iconClass:l((()=>[n.e("icon")].join(" "))),iconStyle:l((()=>{const e={};return t.size&&"custom"===p.value&&(e.fontSize=`calc(${i(t.size)} * 0.7)`),e}))}})(b),{clickHandle:C}=(t=>({clickHandle:()=>{t("click")}}))(n);return(t,e)=>{const o=h;return u(),d(o,{class:m([g(y)]),style:_(g(v)),onClick:g(C)},{default:c((()=>[r(t.$slots,"default",{},(()=>[p(o,{class:m([g(x)]),style:_(g(z))},{default:c((()=>[p(f,{name:t.$props.icon},null,8,["name"])])),_:1},8,["class","style"])]),!0)])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-361f50b7"]]),w=b(n({__name:"index",setup(t){y((()=>({}))),v((()=>({})));const{isDemoH5Page:e}=S();return(t,o)=>{const s=h;return u(),d(z,{title:"悬浮按钮","is-h5-demo-page":g(e)},{default:c((()=>[p(C,{title:"基础使用"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{fixed:!1,icon:"logo-tuniao"})])),_:1})])),_:1})])),_:1}),p(C,{title:"修改样式"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{fixed:!1,"bg-color":"tn-gradient__cool-1","text-color":"#fff",icon:"logo-tuniao"})])),_:1})])),_:1})])),_:1}),p(C,{title:"修改位置和尺寸"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{fixed:!1,icon:"logo-tuniao",size:"sm",top:"60",right:"90%"}),p(j,{fixed:!1,icon:"logo-tuniao",size:"lg",top:"40",right:"70%"}),p(j,{fixed:!1,icon:"logo-tuniao",size:"xl",top:"30",right:"46%"})])),_:1})])),_:1})])),_:1}),p(C,{title:"关闭浮动动画"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{fixed:!1,float:!1,icon:"logo-tuniao"})])),_:1})])),_:1})])),_:1}),p(C,{title:"自定义显示的内容"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{fixed:!1,icon:"logo-tuniao"},{default:c((()=>[p(s,{class:"custom-text"},{default:c((()=>[x("图")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),p(C,{title:"相对于页面固定"},{default:c((()=>[p(s,{class:"suspend-button-container"},{default:c((()=>[p(s,{class:"suspend-button-item"},{default:c((()=>[p(j,{icon:"logo-tuniao"})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-34d420dd"]]);export{w as default};