import{d as e,e as a,a as l}from"./page-wraper.5690414d.js";import{d as t,r as o,o as n,c as u,w as r,a as d,h as s,j as m}from"./index-dce73128.js";import{_ as i}from"./wd-datetime-picker-view.fc8b2783.js";import{_ as p}from"./demo-block.28b3373c.js";import"./wd-picker-view.7fc1632f.js";const c=t({__name:"Index",setup(t){const c=o(""),f=o(Date.now()),v=o(Date.now()),V=o("11:12"),w=o(Date.now()),g=o(Date.now()),h=o(""),_=(e,a)=>{switch(e){case"year":return a+"年";case"month":return a+"月";case"date":return a+"日";case"hour":return a+"时";case"minute":return a+"分";default:return a}},j=(e,a)=>"minute"===e?a.filter((e=>e%5==0)):a,y=e();function C({value:e}){y.show("选择了"+new Date(e))}function U({value:e}){console.log(e)}function D({value:e}){console.log(e)}function k({value:e}){console.log(e)}function x({value:e}){console.log(e)}function b({value:e}){console.log(e)}function F({value:e}){console.log(new Date(e).getFullYear())}return(e,t)=>{const o=s(m("wd-toast"),a),y=s(m("wd-datetime-picker-view"),i),I=s(m("demo-block"),p),K=s(m("page-wraper"),l);return n(),u(K,null,{default:r((()=>[d(o),d(I,{title:"日期选择",transparent:""},{default:r((()=>[d(y,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),onChange:C},null,8,["modelValue"])])),_:1}),d(I,{title:"年月日",transparent:""},{default:r((()=>[d(y,{type:"date",modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=e=>f.value=e),onChange:U},null,8,["modelValue"])])),_:1}),d(I,{title:"年月",transparent:""},{default:r((()=>[d(y,{type:"year-month",modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),onChange:D},null,8,["modelValue"])])),_:1}),d(I,{title:"年",transparent:""},{default:r((()=>[d(y,{type:"year",modelValue:h.value,"onUpdate:modelValue":t[3]||(t[3]=e=>h.value=e),onChange:F},null,8,["modelValue"])])),_:1}),d(I,{title:"时分",transparent:""},{default:r((()=>[d(y,{type:"time",modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=e=>V.value=e),onChange:k},null,8,["modelValue"])])),_:1}),d(I,{title:"内部格式",transparent:""},{default:r((()=>[d(y,{modelValue:w.value,"onUpdate:modelValue":t[5]||(t[5]=e=>w.value=e),formatter:_,onChange:x},null,8,["modelValue"])])),_:1}),d(I,{title:"过滤选项",transparent:""},{default:r((()=>[d(y,{modelValue:g.value,"onUpdate:modelValue":t[6]||(t[6]=e=>g.value=e),filter:j,onChange:b},null,8,["modelValue"])])),_:1})])),_:1})}}});export{c as default};