import{a as e,D as l,E as a,r as t,c as u,o as d,e as o,f as s,h as c,m as f,t as _,u as m,v as i,k as b,_ as n}from"./index-80b03063.js";import{a as r,T as p}from"./checkbox-group.e105bb7b.js";import{C as v}from"./custom-page.333ee63a.js";import{D as x}from"./demo-container.59d4003d.js";import{u as U}from"./index.e83e3f39.js";import"./index.b621671f.js";import"./is-number.acae358a.js";import"./event.5568c9d8.js";import"./index.f7e3486a.js";import"./install.171bae2e.js";import"./index.38361e72.js";import"./debounce.73e35894.js";import"./clone-deep.2124c060.js";import"./title.e0fd12f0.js";const h=n(e({__name:"index",setup(e){l((()=>({}))),a((()=>({})));const{isDemoH5Page:n}=U(),h=t(!1),V=t([]),k=u((()=>3===V.value.length)),I=e=>{V.value=e?["凶姐太漂亮了","UI太酷炫","响应快"]:[]},j=t([]),g=t([]),y=t([]),z=t([]),D=t([]),C=t([]);return(e,l)=>{const a=i,t=b;return d(),o(v,{title:"复选框 - 使用图鸟的理由","is-h5-demo-page":m(n)},{default:s((()=>[c(x,{title:"基础使用"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[f(" 当前项是否被选中: "),c(a,{class:"tn-gray_text"},{default:s((()=>[f(_(h.value?"同意协议":"不同意协议"),1)])),_:1})])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[c(r,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value=e)},{default:s((()=>[c(a,{class:"tn-gray_text",style:{"line-height":"1"}},{default:s((()=>[f(" 同意协议 "),c(a,{class:"tn-type-primary_text"},{default:s((()=>[f("《图鸟UI使用协议》")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[f(" 当前已选的值: "),c(a,{class:"tn-gray_text"},{default:s((()=>[f(_(V.value.join(",")),1)])),_:1})])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[c(t,null,{default:s((()=>[c(r,{"model-value":m(k),"checked-shape":"circle",indeterminate:!m(k)&&V.value.length>0,onChange:I},{default:s((()=>[c(a,{class:"tn-black_text"},{default:s((()=>[f("全选")])),_:1})])),_:1},8,["model-value","indeterminate"])])),_:1}),c(p,{modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e)},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"修改复选框的形状"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:V.value,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value=e),"checked-shape":"circle"},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"设置允许选择的最大数量"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:j.value,"onUpdate:modelValue":l[3]||(l[3]=e=>j.value=e),max:2},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"禁止点击标签"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:g.value,"onUpdate:modelValue":l[4]||(l[4]=e=>g.value=e),"label-disabled":""},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"显示边框"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:y.value,"onUpdate:modelValue":l[5]||(l[5]=e=>y.value=e),border:""},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"复选框尺寸"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:z.value,"onUpdate:modelValue":l[6]||(l[6]=e=>z.value=e),size:"sm"},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:z.value,"onUpdate:modelValue":l[7]||(l[7]=e=>z.value=e),size:"sm",border:""},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:z.value,"onUpdate:modelValue":l[8]||(l[8]=e=>z.value=e),size:"lg"},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:z.value,"onUpdate:modelValue":l[9]||(l[9]=e=>z.value=e),size:"lg",border:""},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{default:s((()=>[f("凶姐太漂亮")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快"},{default:s((()=>[f("响应快")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"修改颜色"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:D.value,"onUpdate:modelValue":l[10]||(l[10]=e=>D.value=e),"active-color":"tn-blue"},{default:s((()=>[c(r,{label:"凶姐太漂亮了","active-color":"tn-red"},{default:s((()=>[f(" 凶姐太漂亮 ")])),_:1}),c(r,{label:"UI太酷炫"},{default:s((()=>[f("UI太酷炫")])),_:1}),c(r,{label:"响应快","active-color":"#3646ff"},{default:s((()=>[f(" 响应快 ")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(x,{title:"内容显示在左边"},{default:s((()=>[c(t,{class:"checkbox-container"},{default:s((()=>[c(t,{class:"checkbox-item"},{default:s((()=>[c(p,{modelValue:C.value,"onUpdate:modelValue":l[11]||(l[11]=e=>C.value=e)},{default:s((()=>[c(r,{label:"凶姐太漂亮了"},{left:s((()=>[f(" 凶姐太漂亮 ")])),_:1}),c(r,{label:"UI太酷炫"},{left:s((()=>[f(" UI太酷炫 ")])),_:1}),c(r,{label:"响应快"},{left:s((()=>[f(" 响应快 ")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-5f5080bf"]]);export{h as default};
