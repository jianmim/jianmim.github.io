import{_ as e}from"./wd-input.38f537ec.js";import{d as l,r as a,o,c as u,w as t,a as d,b as n,h as m,j as p,g as s}from"./index-dce73128.js";import{_ as r}from"./demo-block.28b3373c.js";import{_ as i}from"./wd-button.840eab05.js";import{_ as V}from"./wd-cell-group.3bfb1a4c.js";import{a as c,b as v}from"./page-wraper.5690414d.js";import"./useTranslate.0a311b40.js";import"./useChildren.8ed137fc.js";const f=v(l({__name:"Index",setup(l){const v=a(""),f=a("这是禁用状态"),b=a("这是只读状态"),x=a("123456"),_=a("支持清空"),h=a("password"),y=a(""),g=a("1234"),U=a(""),w=a(null),j=a(""),C=a("该输入框禁用"),k=a("12345678"),I=a(""),z=a(""),B=a(""),q=a(""),T=a("");function A(e){console.log(e)}function D(e){console.log(e)}function E(e){console.log(e)}function F(e){console.log(e)}function G(e){console.log("失焦",e)}return(l,a)=>{const H=m(p("wd-input"),e),J=m(p("demo-block"),r),K=s,L=m(p("wd-button"),i),M=m(p("wd-cell-group"),V),N=m(p("page-wraper"),c);return o(),u(N,null,{default:t((()=>[d(J,{title:"基本用法"},{default:t((()=>[d(H,{type:"text",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),placeholder:"请输入用户名",onChange:A,onBlur:G},null,8,["modelValue"])])),_:1}),d(J,{title:"禁用状态"},{default:t((()=>[d(H,{type:"text",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(J,{title:"只读状态"},{default:t((()=>[d(H,{type:"text",modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),readonly:""},null,8,["modelValue"])])),_:1}),d(J,{title:"错误状态"},{default:t((()=>[d(H,{type:"text",modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value=e),placeholder:"请输入用户名",error:""},null,8,["modelValue"])])),_:1}),d(J,{title:"清空按钮"},{default:t((()=>[d(H,{type:"text",modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=e=>_.value=e),clearable:"",onChange:D},null,8,["modelValue"])])),_:1}),d(J,{title:"密码框"},{default:t((()=>[d(H,{type:"text",modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=e=>h.value=e),disabled:"",clearable:"","show-password":"",onChange:E},null,8,["modelValue"])])),_:1}),d(J,{title:"数字类型"},{default:t((()=>[d(H,{type:"number",modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value=e)},null,8,["modelValue"])])),_:1}),d(J,{title:"设置前后Icon"},{default:t((()=>[d(H,{type:"text",modelValue:y.value,"onUpdate:modelValue":a[7]||(a[7]=e=>y.value=e),"prefix-icon":"dong","suffix-icon":"list",clearable:"",onChange:F},null,8,["modelValue"])])),_:1}),d(J,{title:"字数限制"},{default:t((()=>[d(H,{type:"text",modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=e=>g.value=e),maxlength:20,"show-word-limit":""},null,8,["modelValue"])])),_:1}),d(J,{title:"取消底部边框，自定义使用"},{default:t((()=>[d(H,{modelValue:U.value,"onUpdate:modelValue":a[9]||(a[9]=e=>U.value=e),"no-border":"",placeholder:"请输入价格","custom-style":"display: inline-block; width: 70px; vertical-align: middle;"},null,8,["modelValue"]),d(K,{class:"custom-txt"},{default:t((()=>[n("元")])),_:1})])),_:1}),d(J,{title:"cell 类型",transparent:""},{default:t((()=>[d(M,{border:""},{default:t((()=>[d(H,{type:"text",label:"基本用法",modelValue:j.value,"onUpdate:modelValue":a[10]||(a[10]=e=>j.value=e),placeholder:"请输入..."},null,8,["modelValue"]),d(H,{type:"text",label:"禁用",modelValue:C.value,"onUpdate:modelValue":a[11]||(a[11]=e=>C.value=e),disabled:"",placeholder:"用户名"},null,8,["modelValue"]),d(H,{type:"text",label:"清除、密码",modelValue:k.value,"onUpdate:modelValue":a[12]||(a[12]=e=>k.value=e),placeholder:"密码",clearable:"","show-password":""},null,8,["modelValue"]),d(H,{type:"text",label:"错误状态",modelValue:I.value,"onUpdate:modelValue":a[13]||(a[13]=e=>I.value=e),placeholder:"请输入用户名",error:""},null,8,["modelValue"]),d(H,{type:"text",label:"必填",modelValue:z.value,"onUpdate:modelValue":a[14]||(a[14]=e=>z.value=e),placeholder:"请输入用户名",required:""},null,8,["modelValue"]),d(H,{type:"text",label:"图标",modelValue:B.value,"onUpdate:modelValue":a[15]||(a[15]=e=>B.value=e),placeholder:"请输入...","prefix-icon":"dong","suffix-icon":"list"},null,8,["modelValue"]),d(H,{type:"text",label:"自定义插槽",center:"",modelValue:q.value,"onUpdate:modelValue":a[16]||(a[16]=e=>q.value=e),placeholder:"请输入...","use-suffix-slot":"",clearable:""},{suffix:t((()=>[d(L,{size:"small","custom-class":"button"},{default:t((()=>[n("获取验证码")])),_:1})])),_:1},8,["modelValue"]),d(H,{type:"text",label:"大尺寸",clearable:"",size:"large",modelValue:T.value,"onUpdate:modelValue":a[17]||(a[17]=e=>T.value=e),placeholder:"请输入..."},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-4d5009da"]]);export{f as default};
