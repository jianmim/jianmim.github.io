import{k as d,r as _,t as p,a6 as m,x as t,M as l,D as u,A as a,B as v,S as h,O as e}from"./store-dof5ccn5.js";const f={class:"workflow-tool-help"},w=e("div",null,"1、拖入：鼠标移入左侧导航中，鼠标形状改变时拖动到右侧网格状的视图中。",-1),g=e("div",{class:"mt10"},"2、移动：鼠标移入到视图中的某个节点元素，鼠标形状改变时拖动改变位置。",-1),k=e("div",{class:"mt10"},'3、连线：鼠标移入到视图中的某个节点元素的icon(图标)，鼠标形状改变（变成"+"），按下鼠标左键进行拖线连接。',-1),x=e("div",{class:"mt10"},"4、节点：鼠标移入到视图中的某个节点元素，点击鼠标右键可进行删除、编辑节点。",-1),V=e("div",{class:"mt10 mb10"},"5、线条：鼠标移入到视图中的某个线条，线条颜色改变时，点击鼠标右键可进行删除、编辑线条。",-1),B=d({name:"pagesWorkflowToolHelp"}),b=d({...B,setup(C,{expose:n}){const o=_(!1);return n({open:()=>{o.value=!0},close:()=>{o.value=!1}}),(S,s)=>{const c=p("el-dialog"),i=m("drag");return t(),l("div",f,[u(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),width:"769px"},{header:a(()=>[v((t(),l("div",null,[h("使用帮助")])),[[i,[".workflow-tool-help .el-dialog",".workflow-tool-help .el-dialog__header"]]])]),default:a(()=>[w,g,k,x,V]),_:1},8,["modelValue"])])}}});export{b as default};
