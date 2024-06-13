import{d as e,e as l,a}from"./page-wraper.5690414d.js";import{d as o,r as n,o as u,c as t,w as d,a as m,h as r,j as i}from"./index-dce73128.js";import{_ as s}from"./wd-datetime-picker.c7af9f69.js";import{_ as f}from"./wd-cell-group.3bfb1a4c.js";import{_ as v}from"./demo-block.28b3373c.js";import"./wd-datetime-picker-view.fc8b2783.js";import"./wd-picker-view.7fc1632f.js";import"./useTranslate.0a311b40.js";import"./useChildren.8ed137fc.js";const V=o({__name:"Index",setup(o){const V=n(""),c=n(Date.now()),p=n(Date.now()),b=n("09:20"),w=n(Date.now()),g=n(Date.now()),D=n(Date.now()),C=n(Date.now()),U=n(Date.now()),_=n(Date.now()),j=n(""),$=n(""),h=n(Date.now()),y=n(["",""]),k=n(["",Date.now()]),x=n(Date.now()),T=n(Date.now()),L=n(Date.now()),q=n(new Date((new Date).getFullYear()+1,(new Date).getMonth(),(new Date).getDate()).getTime()),z=(e,l)=>{switch(e){case"year":return l+"年";case"month":return l+"月";case"date":return l+"日";case"hour":return l+"时";case"minute":return l+"分";default:return l}},F=(e,l)=>"minute"===e?l.filter((e=>e%5==0)):l,I=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`,K=e(),M=(e,l,a)=>{a.setLoading(!0),setTimeout((()=>{a.setLoading(!1),e>Date.now()?(l(!1),K.error("不能选择大于今天的日期")):l(!0)}),2e3)},W=e=>`${e[0].label}年${e[1].label}月${e[2].label}日 ${e[3].label}:${e[4].label}`;function Y({value:e}){console.log(new Date(e))}function A({value:e}){console.log(e)}function B({value:e}){console.log(e)}function E({value:e}){console.log(e)}function G({value:e}){console.log(e)}function H({value:e}){console.log(e)}function J({value:e}){console.log(e)}function N({value:e}){console.log(e)}function O({value:e}){console.log(e)}function P({value:e}){console.log(e)}function Q({value:e}){console.log(e)}function R({value:e}){console.log(e)}function S({value:e}){console.log(e)}function X({value:e}){console.log(e)}function Z({value:e}){console.log(e)}function ee({value:e}){console.log(e)}return(e,o)=>{const n=r(i("wd-toast"),l),K=r(i("wd-datetime-picker"),s),le=r(i("wd-cell-group"),f),ae=r(i("demo-block"),v),oe=r(i("page-wraper"),a);return u(),t(oe,null,{default:d((()=>[m(n),m(ae,{transparent:""},{default:d((()=>[m(le,{border:""},{default:d((()=>[m(K,{label:"日期选择",modelValue:V.value,"onUpdate:modelValue":o[0]||(o[0]=e=>V.value=e),onConfirm:Y},null,8,["modelValue"]),m(K,{label:"年月日",modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e),type:"date",onConfirm:A},null,8,["modelValue"]),m(K,{label:"年月",modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value=e),type:"year-month",onConfirm:B},null,8,["modelValue"]),m(K,{label:"年",modelValue:x.value,"onUpdate:modelValue":o[3]||(o[3]=e=>x.value=e),type:"year",onConfirm:ee},null,8,["modelValue"]),m(K,{label:"时分",modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=e=>b.value=e),type:"time",onConfirm:E},null,8,["modelValue"]),m(K,{label:"展示格式",modelValue:w.value,"onUpdate:modelValue":o[5]||(o[5]=e=>w.value=e),"display-format":I,onConfirm:G},null,8,["modelValue"]),m(K,{label:"内部格式",modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=e=>g.value=e),formatter:z,onConfirm:H},null,8,["modelValue"]),m(K,{label:"过滤选项",modelValue:D.value,"onUpdate:modelValue":o[7]||(o[7]=e=>D.value=e),filter:F,onConfirm:J},null,8,["modelValue"]),m(K,{label:"before-confirm",modelValue:C.value,"onUpdate:modelValue":o[8]||(o[8]=e=>C.value=e),"before-confirm":M,onConfirm:N},null,8,["modelValue"]),m(K,{label:"错误",modelValue:U.value,"onUpdate:modelValue":o[9]||(o[9]=e=>U.value=e),error:"",onConfirm:O},null,8,["modelValue"]),m(K,{label:"必填",modelValue:_.value,"onUpdate:modelValue":o[10]||(o[10]=e=>_.value=e),required:"",onConfirm:P},null,8,["modelValue"]),m(K,{label:"默认日期",modelValue:c.value,"onUpdate:modelValue":o[11]||(o[11]=e=>c.value=e),"default-value":c.value},null,8,["modelValue","default-value"]),m(K,{label:"时间范围一年",minDate:L.value,maxDate:q.value,modelValue:T.value,"onUpdate:modelValue":o[12]||(o[12]=e=>T.value=e),onConfirm:Y},null,8,["minDate","maxDate","modelValue"])])),_:1})])),_:1}),m(ae,{title:"label 不传",transparent:""},{default:d((()=>[m(K,{modelValue:j.value,"onUpdate:modelValue":o[13]||(o[13]=e=>j.value=e),onConfirm:Q},null,8,["modelValue"])])),_:1}),m(ae,{title:"大小",transparent:""},{default:d((()=>[m(K,{label:"日期选择",size:"large",modelValue:$.value,"onUpdate:modelValue":o[14]||(o[14]=e=>$.value=e),onConfirm:R},null,8,["modelValue"])])),_:1}),m(ae,{title:"值靠右展示",transparent:""},{default:d((()=>[m(K,{label:"日期选择","align-right":"",modelValue:h.value,"onUpdate:modelValue":o[15]||(o[15]=e=>h.value=e),onConfirm:S},null,8,["modelValue"])])),_:1}),m(ae,{title:"区域选择",transparent:""},{default:d((()=>[m(K,{label:"日期选择",title:"请选择区间",modelValue:y.value,"onUpdate:modelValue":o[16]||(o[16]=e=>y.value=e),onConfirm:X},null,8,["modelValue"])])),_:1}),m(ae,{title:"范围tab展示格式",transparent:""},{default:d((()=>[m(K,{label:"日期选择",modelValue:k.value,"onUpdate:modelValue":o[17]||(o[17]=e=>k.value=e),onConfirm:Z,"display-format-tab-label":W},null,8,["modelValue"])])),_:1})])),_:1})}}});export{V as default};
