import{k as u,L as h,t as a,x as k,M as C,D as e,A as t,S as r}from"./store-dof5ccn5.js";const v={class:"pt15 pr15 pb15 pl15"},w=u({name:"pagesWorkflowDrawerLine"}),D=u({...w,emits:["change","close"],setup(y,{expose:_,emit:f}){const c=f,l=h({line:{}}),b=i=>{l.line=i},V=()=>{l.line.label=""},x=()=>{c("change",l.line.label),c("close")};return _({getParentData:b}),(i,o)=>{const d=a("el-input"),s=a("el-form-item"),m=a("SvgIcon"),p=a("el-button"),g=a("el-form");return k(),C("div",v,[e(g,{model:l.line,size:"default","label-width":"50px"},{default:t(()=>[e(s,{label:"来往"},{default:t(()=>[e(d,{modelValue:l.line.contact,"onUpdate:modelValue":o[0]||(o[0]=n=>l.line.contact=n),placeholder:"来往",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(s,{label:"类型"},{default:t(()=>[e(d,{modelValue:l.line.type,"onUpdate:modelValue":o[1]||(o[1]=n=>l.line.type=n),placeholder:"类型",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(s,{label:"label"},{default:t(()=>[e(d,{modelValue:l.line.label,"onUpdate:modelValue":o[2]||(o[2]=n=>l.line.label=n),placeholder:"请输入label内容",clearable:""},null,8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(p,{onClick:V},{default:t(()=>[e(m,{name:"ele-RefreshRight"}),r(" 重置 ")]),_:1}),e(p,{onClick:x,type:"primary"},{default:t(()=>[e(m,{name:"ele-Check"}),r(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model"])])}}});export{D as default};
