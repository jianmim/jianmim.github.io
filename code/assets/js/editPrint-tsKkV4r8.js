import z from"./index-OuhQFshS.js";import{g as V}from"./index-lw7p-_pG.js";import{S as w}from"./sys-print-api-ezzqCXX3.js";import{k as D,r as S,L as I,p as M,t as a,x as Q,M as q,O as n,D as l,A as o,T as v,S as i,n as H}from"./store-mQZkmHj-.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./preview-J91Nyzbc.js";const j={class:"sys-print-container"},G={class:"printDialog"},K={style:{color:"#fff"}},W={style:{margin:"-16px 0px 0px 0px"}},X={class:"dialog-footer",style:{"margin-top":"10px"}},Y={style:{color:"#fff"}},Z={class:"dialog-footer"},$=D({name:"sysEditPrint"}),ee=D({...$,props:{title:String},emits:["handleQuery"],setup(k,{expose:N,emit:C}){const m=S(),c=k,P=C,_=S(),e=I({isShowDialog:!1,ruleForm:{},showDialog2:!1});M(async()=>{});const T=s=>{var t;e.ruleForm=JSON.parse(JSON.stringify(s)),e.isShowDialog=!0,(t=_.value)==null||t.resetFields(),H(()=>{U()})},U=()=>{var s,t;(s=m.value)==null||s.hiprintTemplate.clear(),JSON.stringify(e.ruleForm)!=="{}"&&((t=m.value)==null||t.hiprintTemplate.update(JSON.parse(e.ruleForm.template)))},f=()=>{e.isShowDialog=!1},J=async()=>{e.showDialog2=!0,e.ruleForm.orderNo==null&&(e.ruleForm.orderNo=100),e.ruleForm.status==null&&(e.ruleForm.status=1)},g=()=>{e.showDialog2=!1},O=async()=>{var s;e.ruleForm.template=JSON.stringify((s=m.value)==null?void 0:s.hiprintTemplate.getJson()),e.ruleForm.id!=null&&e.ruleForm.id>0?await V(w).apiSysPrintUpdatePost(e.ruleForm):await V(w).apiSysPrintAddPost(e.ruleForm),f(),g(),P("handleQuery")};return N({openDialog:T}),(s,t)=>{const y=a("ele-Edit"),x=a("el-icon"),d=a("el-button"),F=a("el-dialog"),h=a("el-input"),u=a("el-form-item"),p=a("el-col"),E=a("el-input-number"),b=a("el-radio"),A=a("el-radio-group"),R=a("el-row"),B=a("el-form");return Q(),q("div",j,[n("div",G,[l(F,{modelValue:e.isShowDialog,"onUpdate:modelValue":t[0]||(t[0]=r=>e.isShowDialog=r),draggable:"","close-on-click-modal":!1,fullscreen:""},{header:o(()=>[n("div",K,[l(x,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[l(y)]),_:1}),n("span",null,v(c.title),1)])]),footer:o(()=>[n("span",X,[l(d,{onClick:f},{default:o(()=>[i("取 消")]),_:1}),l(d,{type:"primary",onClick:J},{default:o(()=>[i("保存模板")]),_:1})])]),default:o(()=>[n("div",W,[l(z,{ref_key:"hiprintDesignRef",ref:m},null,512)])]),_:1},8,["modelValue"])]),l(F,{modelValue:e.showDialog2,"onUpdate:modelValue":t[5]||(t[5]=r=>e.showDialog2=r),draggable:"","close-on-click-modal":!1,width:"600px"},{header:o(()=>[n("div",Y,[l(x,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[l(y)]),_:1}),n("span",null,v(c.title),1)])]),footer:o(()=>[n("span",Z,[l(d,{onClick:g},{default:o(()=>[i("取 消")]),_:1}),l(d,{type:"primary",onClick:O},{default:o(()=>[i("确 定")]),_:1})])]),default:o(()=>[l(B,{model:e.ruleForm,ref_key:"ruleFormRef",ref:_,"label-width":"auto"},{default:o(()=>[l(R,{gutter:35},{default:o(()=>[l(p,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(u,{label:"模板名称",prop:"name",rules:[{required:!0,message:"模板名称不能为空",trigger:"blur"}]},{default:o(()=>[l(h,{modelValue:e.ruleForm.name,"onUpdate:modelValue":t[1]||(t[1]=r=>e.ruleForm.name=r),placeholder:"模板名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(p,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(u,{label:"排序"},{default:o(()=>[l(E,{modelValue:e.ruleForm.orderNo,"onUpdate:modelValue":t[2]||(t[2]=r=>e.ruleForm.orderNo=r),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(p,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(u,{label:"状态"},{default:o(()=>[l(A,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=r=>e.ruleForm.status=r)},{default:o(()=>[l(b,{label:1},{default:o(()=>[i("启用")]),_:1}),l(b,{label:2},{default:o(()=>[i("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(p,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(u,{label:"备注"},{default:o(()=>[l(h,{modelValue:e.ruleForm.remark,"onUpdate:modelValue":t[4]||(t[4]=r=>e.ruleForm.remark=r),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}}),ne=L(ee,[["__scopeId","data-v-ceee9fa1"]]);export{ne as default};
