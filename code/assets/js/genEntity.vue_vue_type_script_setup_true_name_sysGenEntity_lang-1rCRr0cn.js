import{g,t as T}from"./index-zQlakb1H.js";import{S as M}from"./sys-database-api-8F8NB6RO.js";import{k as V,r as P,L as Q,p as R,t,x as r,M as u,D as l,A as a,O as d,S as y,a4 as N,a5 as F,aq as z,ar as O,y as C}from"./store-dof5ccn5.js";const j={class:"sys-dbEntity-container"},H={style:{color:"#fff"}},J=d("span",null," 生成实体 ",-1),K={class:"dialog-footer"},W=V({name:"sysGenEntity"}),$=V({...W,props:{applicationNamespaces:{type:Array}},emits:["handleQueryColumn"],setup(x,{expose:D,emit:v}){const w=v,c=P(),e=Q({isShowDialog:!1,ruleForm:{},codeGenBaseClassName:[]}),S=x;R(async()=>{let n=await g(T).apiSysDictTypeDataListGet("code_gen_base_class");e.codeGenBaseClassName=n.data.result});const h=n=>{e.ruleForm.configId=n.configId,e.ruleForm.tableName=n.tableName,e.ruleForm.entityName=z(O(n.tableName)),e.ruleForm.baseClassName="EntityBase",e.ruleForm.position=n.position,e.isShowDialog=!0},k=()=>{w("handleQueryColumn"),e.isShowDialog=!1},B=()=>{e.isShowDialog=!1},A=()=>{c.value.validate(async n=>{n&&(await g(M).apiSysDatabaseCreateEntityPost(e.ruleForm),k())})};return D({openDialog:h}),(n,s)=>{const E=t("ele-Cpu"),G=t("el-icon"),p=t("el-input"),m=t("el-form-item"),i=t("el-col"),_=t("el-option"),f=t("el-select"),U=t("el-row"),q=t("el-form"),b=t("el-button"),I=t("el-dialog");return r(),u("div",j,[l(I,{modelValue:e.isShowDialog,"onUpdate:modelValue":s[4]||(s[4]=o=>e.isShowDialog=o),draggable:"","close-on-click-modal":!1,width:"700px"},{header:a(()=>[d("div",H,[l(G,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[l(E)]),_:1}),J])]),footer:a(()=>[d("span",K,[l(b,{onClick:B},{default:a(()=>[y("取 消")]),_:1}),l(b,{type:"primary",onClick:A},{default:a(()=>[y("确 定")]),_:1})])]),default:a(()=>[l(q,{model:e.ruleForm,ref_key:"ruleFormRef",ref:c,"label-width":"auto"},{default:a(()=>[l(U,{gutter:35},{default:a(()=>[l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[l(m,{label:"表名",prop:"tableName",rules:[{required:!0,message:"表名不能为空",trigger:"blur"}]},{default:a(()=>[l(p,{disabled:"",modelValue:e.ruleForm.tableName,"onUpdate:modelValue":s[0]||(s[0]=o=>e.ruleForm.tableName=o),placeholder:"表名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[l(m,{label:"实体名称",prop:"entityName",rules:[{required:!1,message:"实体名称不能为空",trigger:"blur"}]},{default:a(()=>[l(p,{modelValue:e.ruleForm.entityName,"onUpdate:modelValue":s[1]||(s[1]=o=>e.ruleForm.entityName=o),placeholder:"实体名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[l(m,{label:"基类",prop:"baseClassName"},{default:a(()=>[l(f,{modelValue:e.ruleForm.baseClassName,"onUpdate:modelValue":s[2]||(s[2]=o=>e.ruleForm.baseClassName=o),clearable:"",class:"w100"},{default:a(()=>[(r(!0),u(N,null,F(e.codeGenBaseClassName,o=>(r(),C(_,{key:o.code,label:o.value,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[l(m,{label:"存放位置",prop:"position"},{default:a(()=>[l(f,{modelValue:e.ruleForm.position,"onUpdate:modelValue":s[3]||(s[3]=o=>e.ruleForm.position=o),filterable:"",clearable:"",class:"w100",placeholder:"存放位置"},{default:a(()=>[(r(!0),u(N,null,F(S.applicationNamespaces,(o,L)=>(r(),C(_,{key:L,label:o,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{$ as _};
