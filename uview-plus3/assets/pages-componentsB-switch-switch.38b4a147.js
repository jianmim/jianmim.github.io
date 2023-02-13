import{o as e,c as l,w as a,i as u,a as o,f as d,t,g as s,d as c}from"./index.6f985586.js";import{_}from"./u-switch.e303e1d1.js";import{r as m}from"./uni-app.es.6e64b422.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-loading-icon.9827ac16.js";const i=n({data:()=>({value1:!1,value2:!0,value3:!1,value4:!0,value5:!1,value6:!0,value7:!1,value8:!0,value9:!0,value10:!0,value11:!1,value12:!0,value13:!0}),watch:{value1(e,l){console.log("v-model",e)}},methods:{change(e){console.log("change",e)},asyncChange(e){uni.showModal({content:e?"确定要打开吗":"确定要关闭吗",success:l=>{l.confirm&&(this.value13=e)}})}}},[["render",function(n,i,v,f,g,p){const V=s,b=m(c("u-switch"),_),r=u;return e(),l(r,{class:"u-page"},{default:a((()=>[o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("基础功能")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value1,"onUpdate:modelValue":i[0]||(i[0]=e=>g.value1=e),onChange:p.change},null,8,["modelValue","onChange"]),d(" "+t(g.value1),1)])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value2,"onUpdate:modelValue":i[1]||(i[1]=e=>g.value2=e)},null,8,["modelValue"]),d(" "+t(g.value2),1)])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("加载中")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value3,"onUpdate:modelValue":i[2]||(i[2]=e=>g.value3=e),loading:""},null,8,["modelValue"])])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value4,"onUpdate:modelValue":i[3]||(i[3]=e=>g.value4=e),loading:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("禁用状态")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value5,"onUpdate:modelValue":i[4]||(i[4]=e=>g.value5=e),disabled:""},null,8,["modelValue"])])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value6,"onUpdate:modelValue":i[5]||(i[5]=e=>g.value6=e),disabled:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("自定义尺寸")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value7,"onUpdate:modelValue":i[6]||(i[6]=e=>g.value7=e),size:"28"},null,8,["modelValue"])])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value8,"onUpdate:modelValue":i[7]||(i[7]=e=>g.value8=e),size:"20"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("自定义颜色")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value9,"onUpdate:modelValue":i[8]||(i[8]=e=>g.value9=e),activeColor:"#f56c6c",loading:""},null,8,["modelValue"])])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value10,"onUpdate:modelValue":i[9]||(i[9]=e=>g.value10=e),activeColor:"#5ac725",loading:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("自定义样式")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{space:2,modelValue:g.value11,"onUpdate:modelValue":i[10]||(i[10]=e=>g.value11=e),activeColor:"#f56c6c",inactiveColor:"rgb(230, 230, 230)"},null,8,["modelValue"])])),_:1}),o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{space:"2",modelValue:g.value12,"onUpdate:modelValue":i[11]||(i[11]=e=>g.value12=e),activeColor:"#f9ae3d",inactiveColor:"rgb(230, 230, 230)"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(r,{class:"u-demo-block"},{default:a((()=>[o(V,{class:"u-demo-block__title"},{default:a((()=>[d("异步控制")])),_:1}),o(r,{class:"u-demo-block__content"},{default:a((()=>[o(r,{class:"u-page__tag-item"},{default:a((()=>[o(b,{modelValue:g.value13,"onUpdate:modelValue":i[12]||(i[12]=e=>g.value13=e),asyncChange:"",onChange:p.asyncChange},null,8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-04f55c44"]]);export{i as default};
