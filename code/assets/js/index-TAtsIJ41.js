import{k as v,L as V,t as d,a6 as b,x as c,M as f,D as a,A as e,S as l,O as r,B as m,y as x,X as k,Y as y}from"./store-dof5ccn5.js";import{_ as D}from"./_plugin-vue_export-helper-x3n3nnut.js";const w=s=>(k("data-v-c821f5ce"),s=s(),y(),s),C={class:"drag-container layout-pd"},B={class:"drag-dom"},z={class:"drag-header"},I=w(()=>r("p",null,"鼠标放标题头进行 Dialog 对话框拖动",-1)),S={class:"dialog-footer"},N=v({name:"pagesDrag"}),$=v({...N,setup(s){const t=V({dialogVisible:!1});return(P,o)=>{const _=d("ele-Pointer"),p=d("el-icon"),i=d("el-button"),u=d("el-card"),h=d("el-dialog"),g=b("drag");return c(),f("div",C,[a(u,{shadow:"hover",header:"拖动指令效果（v-drag）作用于 Dialog 对话框"},{default:e(()=>[a(i,{type:"primary",onClick:o[0]||(o[0]=n=>t.dialogVisible=!0),size:"default"},{default:e(()=>[a(p,null,{default:e(()=>[a(_)]),_:1}),l(" 点击打开 Dialog ")]),_:1})]),_:1}),a(u,{shadow:"hover",header:"自定义div",class:"mt15"},{default:e(()=>[r("div",B,[r("div",z,[m((c(),x(i,{type:"success",size:"default"},{default:e(()=>[a(p,null,{default:e(()=>[a(_)]),_:1}),l(" 按住进行拖动测试 ")]),_:1})),[[g,[".drag-container .drag-dom",".drag-container .drag-header"]]])])])]),_:1}),a(h,{modelValue:t.dialogVisible,"onUpdate:modelValue":o[3]||(o[3]=n=>t.dialogVisible=n),width:"769px"},{header:e(()=>[m((c(),f("div",null,[l("拖动指令效果（v-drag）")])),[[g,[".drag-container .el-dialog",".drag-container .el-dialog__header"]]])]),footer:e(()=>[r("span",S,[a(i,{onClick:o[1]||(o[1]=n=>t.dialogVisible=!1),size:"default"},{default:e(()=>[l("取 消")]),_:1}),a(i,{type:"primary",onClick:o[2]||(o[2]=n=>t.dialogVisible=!1),size:"default"},{default:e(()=>[l("确 定")]),_:1})])]),default:e(()=>[I]),_:1},8,["modelValue"])])}}}),L=D($,[["__scopeId","data-v-c821f5ce"]]);export{L as default};