import{g as _,r as P}from"./index-xdJ7pE-g.js";import{S as g}from"./sys-role-api-kfGN22Gz.js";import{k as v,r as x,L as T,p as q,t,a6 as G,x as F,M as J,D as l,A as o,O as b,T as Q,S as p,B as z,y as j}from"./store-dof5ccn5.js";import{_ as H}from"./_plugin-vue_export-helper-x3n3nnut.js";const W={class:"sys-role-container"},X={style:{color:"#fff"}},Y={class:"dialog-footer"},Z=v({name:"sysEditRole"}),$=v({...Z,props:{title:String},emits:["handleQuery"],setup(V,{expose:S,emit:k}){const w=V,D=k,f=x(),c=x(),e=T({loading:!1,isShowDialog:!1,ruleForm:{},menuData:[]});q(async()=>{e.loading=!0;var s=await _(P).apiSysMenuListGet();e.menuData=s.data.result??[],e.loading=!1});const C=async s=>{var n,d;if((n=f.value)==null||n.resetFields(),(d=c.value)==null||d.setCheckedKeys([]),e.ruleForm=JSON.parse(JSON.stringify(s)),s.id!=null){var a=await _(g).apiSysRoleOwnMenuListGet(s.id);setTimeout(()=>{var i;(i=c.value)==null||i.setCheckedKeys(a.data.result??[])},100)}e.isShowDialog=!0},R=()=>{D("handleQuery"),e.isShowDialog=!1},N=()=>{e.isShowDialog=!1},U=()=>{f.value.validate(async s=>{var a;s&&(e.ruleForm.menuIdList=(a=c.value)==null?void 0:a.getCheckedKeys(),e.ruleForm.id!=null&&e.ruleForm.id>0?await _(g).apiSysRoleUpdatePost(e.ruleForm):await _(g).apiSysRoleAddPost(e.ruleForm),R())})},M=s=>{var d;let a=!0;for(var n in s.children)if(((d=s.children[n].children)==null?void 0:d.length)??0>0){a=!1;break}return a?"penultimate-node":""};return S({openDialog:C}),(s,a)=>{const n=t("ele-Edit"),d=t("el-icon"),i=t("el-input"),u=t("el-form-item"),m=t("el-col"),A=t("el-input-number"),y=t("el-radio"),B=t("el-radio-group"),E=t("el-tree"),L=t("el-row"),O=t("el-form"),h=t("el-button"),I=t("el-dialog"),K=G("loading");return F(),J("div",W,[l(I,{modelValue:e.isShowDialog,"onUpdate:modelValue":a[5]||(a[5]=r=>e.isShowDialog=r),draggable:"","close-on-click-modal":!1,width:"700px"},{header:o(()=>[b("div",X,[l(d,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[l(n)]),_:1}),b("span",null,Q(w.title),1)])]),footer:o(()=>[b("span",Y,[l(h,{onClick:N},{default:o(()=>[p("取 消")]),_:1}),l(h,{type:"primary",onClick:U},{default:o(()=>[p("确 定")]),_:1})])]),default:o(()=>[l(O,{model:e.ruleForm,ref_key:"ruleFormRef",ref:f,"label-width":"auto"},{default:o(()=>[l(L,{gutter:35},{default:o(()=>[l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(u,{label:"角色名称",prop:"name",rules:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},{default:o(()=>[l(i,{modelValue:e.ruleForm.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.ruleForm.name=r),placeholder:"角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(u,{label:"角色编码",prop:"code",rules:[{required:!0,message:"角色编码不能为空",trigger:"blur"}]},{default:o(()=>[l(i,{modelValue:e.ruleForm.code,"onUpdate:modelValue":a[1]||(a[1]=r=>e.ruleForm.code=r),placeholder:"角色编码",clearable:"",disabled:e.ruleForm.code=="sys_admin"&&e.ruleForm.id!=null},null,8,["modelValue","disabled"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(u,{label:"排序"},{default:o(()=>[l(A,{modelValue:e.ruleForm.orderNo,"onUpdate:modelValue":a[2]||(a[2]=r=>e.ruleForm.orderNo=r),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(u,{label:"状态"},{default:o(()=>[l(B,{modelValue:e.ruleForm.status,"onUpdate:modelValue":a[3]||(a[3]=r=>e.ruleForm.status=r)},{default:o(()=>[l(y,{label:1},{default:o(()=>[p("启用")]),_:1}),l(y,{label:2},{default:o(()=>[p("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(u,{label:"备注"},{default:o(()=>[l(i,{modelValue:e.ruleForm.remark,"onUpdate:modelValue":a[4]||(a[4]=r=>e.ruleForm.remark=r),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),l(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[z((F(),j(u,{label:"菜单权限"},{default:o(()=>[l(E,{ref_key:"treeRef",ref:c,data:e.menuData,"node-key":"id","show-checkbox":"",props:{children:"children",label:"title",class:M},icon:"ele-Menu","highlight-current":"","default-expand-all":""},null,8,["data","props"])]),_:1})),[[K,e.loading]])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}}),te=H($,[["__scopeId","data-v-b8491fab"]]);export{te as default};