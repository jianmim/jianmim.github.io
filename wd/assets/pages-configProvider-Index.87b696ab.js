import{u as e,_ as l}from"./wd-message-box.0da513d9.js";import{d as a,r as o,o as u,c as t,w as n,a as d,b as s,h as m,j as i,i as r,g as c,ad as p}from"./index-dce73128.js";import{d as v,e as f,_ as b,f as w,a as h,b as V}from"./page-wraper.5690414d.js";import{_ as g}from"./wd-action-sheet.cefcbdec.js";import{_}from"./wd-input.38f537ec.js";import{_ as x}from"./wd-select-picker.81796f6e.js";import{_ as j}from"./wd-picker.52c576de.js";import{_ as k}from"./wd-cell-group.3bfb1a4c.js";import{_ as C}from"./wd-datetime-picker.c7af9f69.js";import{a as U,_ as y}from"./area.9f968c4d.js";import{_ as I}from"./wd-input-number.bcab96be.js";import{_ as O}from"./wd-checkbox.e046a1e3.js";import{_ as q}from"./wd-button.840eab05.js";import"./useTranslate.0a311b40.js";import"./wd-search.8048eb56.js";import"./wd-checkbox-group.4289d39a.js";import"./useChildren.8ed137fc.js";import"./wd-radio-group.6152e9d7.js";import"./wd-picker-view.7fc1632f.js";import"./wd-datetime-picker-view.fc8b2783.js";const D=V(a({__name:"Index",setup(a){const V=o(!1),D=o([]),N=o(""),Q=o(!1),z=o([]),A=o([{value:"1",label:"京东"},{value:"2",label:"开普勒"},{value:"3",label:"手Q"},{value:"4",label:"微信"},{value:"5",label:"1号店"},{value:"6",label:"十元街"},{value:"7",label:"京东极速版"}]),B=o("1"),J=o([{value:"1",label:"满减"},{value:"2",label:"无门槛"}]),K=o(""),L=o(""),P=o(new Date),S=o([]),T=o(1),W=o([Object.keys(U[86]).map((e=>({value:e,label:U[86][e]})))]),E=({selectedItem:e,resolve:l,finish:a})=>{U[e.value]?l(Object.keys(U[e.value]).map((l=>({value:l,label:U[e.value][l]})))):a()},F=o("");o(1);const G=o(!1),H=o(!0),M=o(""),R=o(""),X=v(),Y=e();function Z({value:e}){console.log(e),Q.value=!1}function $({value:e}){console.log(e)}function ee({value:e}){console.log(e)}function le({value:e}){console.log(e)}function ae({value:e}){console.log(e)}function oe({value:e}){console.log(e)}function ue({value:e}){console.log(e)}function te({value:e}){console.log(e)}function ne({value:e}){G.value=e}function de({value:e}){console.log(e)}function se({value:e}){console.log(e)}function me(e){console.log(e),N.value?Y.alert("提交成功"):X.error("请填写优惠券名称")}function ie(){X.info("优惠券提示信息")}function re({value:e}){console.log(e)}return(e,a)=>{const o=m(i("wd-message-box"),l),v=m(i("wd-toast"),f),U=m(i("wd-action-sheet"),g),Q=m(i("wd-input"),_),X=m(i("wd-select-picker"),x),Y=m(i("wd-picker"),j),ce=r,pe=m(i("wd-cell"),b),ve=m(i("wd-cell-group"),k),fe=m(i("wd-datetime-picker"),C),be=m(i("wd-col-picker"),y),we=m(i("wd-input-number"),I),he=m(i("wd-switch"),w),Ve=c,ge=m(i("wd-checkbox"),O),_e=m(i("wd-button"),q),xe=p,je=m(i("page-wraper"),h);return u(),t(je,{"show-dark-mode":""},{default:n((()=>[d(o),d(v),d(U,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),actions:D.value},null,8,["modelValue","actions"]),d(xe,{onSubmit:me},{default:n((()=>[d(ve,{"custom-class":"group",title:"基础信息",border:""},{default:n((()=>[d(Q,{label:"优惠券名称","label-width":"100px",maxlength:20,"show-word-limit":"",name:"couponName",required:"","suffix-icon":"warn-bold",clearable:"",modelValue:N.value,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value=e),placeholder:"请输入优惠券名称",onChange:Z,onClicksuffixicon:ie},null,8,["modelValue"]),d(X,{label:"推广平台","label-width":"100px",name:"platform",modelValue:z.value,"onUpdate:modelValue":a[2]||(a[2]=e=>z.value=e),columns:A.value,placeholder:"请选择推广平台",onConfirm:$},null,8,["modelValue","columns"]),d(Y,{label:"优惠方式","label-width":"100px",name:"promotion","align-right":"",modelValue:B.value,"onUpdate:modelValue":a[3]||(a[3]=e=>B.value=e),columns:J.value},null,8,["modelValue","columns"]),d(pe,{title:"券面额",required:"","title-width":"100px","custom-value-class":"cell-left"},{default:n((()=>[d(ce,{style:{"text-align":"left"}},{default:n((()=>[d(ce,{class:"inline-txt",style:{"margin-left":"0"}},{default:n((()=>[s("满")])),_:1}),d(Q,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:K.value,"onUpdate:modelValue":a[4]||(a[4]=e=>K.value=e),name:"threshold",onChange:ee},null,8,["modelValue"]),d(ce,{class:"inline-txt"},{default:n((()=>[s("减")])),_:1}),d(Q,{"no-border":"","custom-style":"display: inline-block; width: 70px; vertical-align: middle",placeholder:"请输入金额",modelValue:L.value,"onUpdate:modelValue":a[5]||(a[5]=e=>L.value=e),name:"price",onChange:le},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(ve,{"custom-class":"group",title:"时间和地址",border:""},{default:n((()=>[d(fe,{label:"时间","label-width":"100px",name:"date",modelValue:P.value,"onUpdate:modelValue":a[6]||(a[6]=e=>P.value=e),onConfirm:re},null,8,["modelValue"]),d(be,{label:"地址","label-width":"100px",name:"address",modelValue:S.value,"onUpdate:modelValue":a[7]||(a[7]=e=>S.value=e),columns:W.value,"column-change":E,onConfirm:ae},null,8,["modelValue","columns"])])),_:1}),d(ve,{"custom-class":"group",title:"其他信息",border:""},{default:n((()=>[d(Q,{label:"活动细则","label-width":"100px",type:"textarea",modelValue:F.value,"onUpdate:modelValue":a[8]||(a[8]=e=>F.value=e),maxlength:300,"show-word-limit":"",placeholder:"请输入活动细则信息",clearable:"",name:"content",onChange:oe},null,8,["modelValue"]),d(pe,{title:"发货数量",center:""},{default:n((()=>[d(we,{modelValue:T.value,"onUpdate:modelValue":a[9]||(a[9]=e=>T.value=e),name:"count",onChange:ue},null,8,["modelValue"])])),_:1}),d(pe,{title:"这里显示的是多文字标题包含非常的文字","title-width":"240px",center:""},{default:n((()=>[d(he,{modelValue:H.value,"onUpdate:modelValue":a[10]||(a[10]=e=>H.value=e),name:"switchVal",onChange:te},null,8,["modelValue"])])),_:1}),d(Q,{label:"卡号","label-width":"100px",name:"cardId","suffix-icon":"camera",placeholder:"请输入卡号",clearable:"",modelValue:M.value,"onUpdate:modelValue":a[11]||(a[11]=e=>M.value=e),onChange:de},null,8,["modelValue"]),d(Q,{label:"手机号","label-width":"100px",name:"phone",placeholder:"请输入手机号",clearable:"",modelValue:R.value,"onUpdate:modelValue":a[12]||(a[12]=e=>R.value=e),onChange:se},null,8,["modelValue"])])),_:1}),d(ce,{class:"tip"},{default:n((()=>[d(ge,{modelValue:G.value,"onUpdate:modelValue":a[13]||(a[13]=e=>G.value=e),name:"read",onChange:ne,"custom-label-class":"label-class"},{default:n((()=>[s(" 已阅读并同意 "),d(Ve,{style:{color:"#4d80f0"}},{default:n((()=>[s("《借款额度合同及相关授权》")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(ce,{class:"footer"},{default:n((()=>[d(_e,{block:"",round:"",size:"large"},{default:n((()=>[s("提交")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-bab0d5ea"]]);export{D as default};
