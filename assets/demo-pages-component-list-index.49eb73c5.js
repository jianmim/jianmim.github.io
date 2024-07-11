import{b as t,$ as e,V as s,W as l,X as a,c as o,Z as i,a0 as n,a as r,o as c,e as u,f as d,g as _,h as f,a1 as g,K as m,u as h,C as b,a2 as p,n as v,k as y,_ as x,D as C,E as S,m as I,l as j}from"./index-80b03063.js";import"./index.b621671f.js";import{C as k}from"./custom-page.333ee63a.js";import{D as w}from"./demo-container.59d4003d.js";import{u as B}from"./index.e83e3f39.js";import"./title.e0fd12f0.js";const z=t({width:{type:String},height:{type:String},fontSize:String,bgColor:String,textColor:String,rightIcon:String,rightIconColor:String,radius:Boolean,bottomBorder:Boolean,bottomBorderIndent:Boolean,hoverClass:{type:String,default:""},customStyle:e,customClass:String}),D=x(r({__name:"list-item",props:z,emits:{click:()=>!0},setup(t,{emit:e}){const r=t,{ns:x,listClass:C,listStyle:S,rightIconClass:I,rightIconStyle:j}=(t=>{const e=s("list-item"),[r,c]=l(a(t,"bgColor"),"bg"),[u,d]=l(a(t,"textColor"),"text"),[_,f]=l(a(t,"rightIconColor"),"text"),g=o((()=>{const s=[e.b()];return r.value&&s.push(r.value),u.value&&s.push(u.value),t.radius&&s.push(e.m("radius")),t.customClass&&s.push(t.customClass),s.join(" ")})),m=o((()=>{const e={};return t.width&&(e.width=i(t.width)),t.height&&(e.height=i(t.height)),r.value||(e.backgroundColor=c.value||"var(--tn-color-white)",u.value||(e.color="var(--tn-text-color-primary)")),d.value&&(e.color=d.value),t.fontSize&&(e.fontSize=i(t.fontSize)),n(t.customStyle)||Object.assign(e,t.customStyle),e})),h=o((()=>{const t=[e.e("right-icon")];return _.value&&t.push(_.value),t.join(" ")})),b=o((()=>{const t={};return _.value||(t.color=f.value||"var(--tn-color-gray)"),t}));return{ns:e,listClass:g,listStyle:m,rightIconClass:h,rightIconStyle:b}})(r),k=()=>{e("click")};return(t,e)=>{const s=y;return c(),u(s,{class:m([h(C)]),style:b(h(S)),"hover-class":t.hoverClass,"hover-stay-time":150,onClick:v(k,["stop"])},{default:d((()=>[_(" 内容 "),f(s,{class:m(["tn-text-ellipsis-1",[h(x).e("content")]])},{default:d((()=>[g(t.$slots,"default",{},void 0,!0)])),_:3},8,["class"]),_(" 右图标 "),t.rightIcon?(c(),u(s,{key:0,class:m(h(I)),style:b(h(j))},{default:d((()=>[f(p,{name:t.rightIcon},null,8,["name"])])),_:1},8,["class","style"])):_("v-if",!0),_(" 底部边框 "),t.bottomBorder?(c(),u(s,{key:1,class:m([h(x).e("bottom-border"),h(x).is("indent",t.bottomBorderIndent)])},null,8,["class"])):_("v-if",!0)])),_:3},8,["class","style","hover-class","onClick"])}}}),[["__scopeId","data-v-aba4f4d3"]]),$=x(r({__name:"index",setup(t){C((()=>({}))),S((()=>({})));const{isDemoH5Page:e}=B();return(t,s)=>{const l=y,a=j("TnIcon");return c(),u(k,{title:"列表","page-bg-color":"tn-gray-light","is-h5-demo-page":h(e)},{default:d((()=>[f(w,{title:"基础使用"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,null,{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"圆角列表"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{radius:""},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"设置右边图标"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{"right-icon":"right"},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"设置底部分割线"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{"bottom-border":""},{default:d((()=>[I("关于图鸟")])),_:1}),f(D,{"bottom-border":""},{default:d((()=>[I("关于图鸟")])),_:1}),f(D,null,{default:d((()=>[I("关于图鸟")])),_:1})])),_:1}),f(l,{class:"list-item"},{default:d((()=>[f(D,{"bottom-border":"","bottom-border-indent":""},{default:d((()=>[I("关于图鸟")])),_:1}),f(D,{"bottom-border":"","bottom-border-indent":""},{default:d((()=>[I("关于图鸟")])),_:1}),f(D,null,{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"设置尺寸"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{"font-size":"32rpx"},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"修改颜色"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{"bg-color":"tn-grey-light","text-color":"tn-gray","right-icon":"right","right-icon-color":"tn-blue"},{default:d((()=>[I(" 关于图鸟 ")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{title:"案例演示"},{default:d((()=>[f(l,{class:"list-container"},{default:d((()=>[f(l,{class:"list-item"},{default:d((()=>[f(D,{"bottom-border":"","bottom-border-indent":"","right-icon":"right","custom-class":"list-first-item"},{default:d((()=>[f(l,{class:"list-content"},{default:d((()=>[f(l,{class:"icon tn-gradient-bg__indigo tn-white_text"},{default:d((()=>[f(a,{name:"logo-tuniao"})])),_:1}),f(l,{class:"text"},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1}),f(D,{"bottom-border":"","bottom-border-indent":"","right-icon":"right"},{default:d((()=>[f(l,{class:"list-content"},{default:d((()=>[f(l,{class:"icon tn-gradient-bg__indigo tn-white_text"},{default:d((()=>[f(a,{name:"logo-tuniao"})])),_:1}),f(l,{class:"text"},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1}),f(D,{"right-icon":"right","custom-class":"list-last-item"},{default:d((()=>[f(l,{class:"list-content"},{default:d((()=>[f(l,{class:"icon tn-gradient-bg__indigo tn-white_text"},{default:d((()=>[f(a,{name:"logo-tuniao"})])),_:1}),f(l,{class:"text"},{default:d((()=>[I("关于图鸟")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-2340c280"]]);export{$ as default};