import{c as u}from"./commonFunction-gGlUyf--.js";import{k as p,L as i,t as a,x as _,M as V,D as t,A as n,F as f,S as b}from"./store-dof5ccn5.js";import"./formatTime-sb5Dmd3Z.js";const h={class:"layout-pd"},v=p({name:"funClipboard"}),g=p({...v,setup(y){const{copyText:c}=u(),o=i({copyVal:"https://gitee.com/lyt-top/vue-next-admin",shearVal:""});return(x,e)=>{const r=a("el-alert"),d=a("el-button"),s=a("el-input"),m=a("el-card");return _(),V("div",h,[t(m,{shadow:"hover",header:"复制剪切演示"},{default:n(()=>[t(r,{title:"感谢优秀的 `vue-clipboard3`，项目地址：https://github.com/JamieCurnow/vue-clipboard3`",type:"success",closable:!1,class:"mb15"}),t(s,{placeholder:"请输入内容",modelValue:o.copyVal,"onUpdate:modelValue":e[1]||(e[1]=l=>o.copyVal=l)},{append:n(()=>[t(d,{onClick:e[0]||(e[0]=l=>f(c)(o.copyVal))},{default:n(()=>[b("复制链接")]),_:1})]),_:1},8,["modelValue"]),t(s,{placeholder:"先点击上方 `复制链接` 按钮，然后 `Ctrl + V` 进行粘贴！ ",modelValue:o.shearVal,"onUpdate:modelValue":e[2]||(e[2]=l=>o.shearVal=l),class:"mt15"},null,8,["modelValue"])]),_:1})])}}});export{g as default};
