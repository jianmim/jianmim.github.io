import{g as b}from"./index-xdJ7pE-g.js";import{S as p}from"./sys-code-gen-api-JhrPjZzh.js";import{k,r as z,L as O,p as P,t as s,x as r,M as c,D as o,A as a,O as D,S as w,a4 as g,a5 as N,y}from"./store-dof5ccn5.js";const j={class:"sys-codeGenFk-container"},q={style:{color:"#fff"}},H=D("span",null," 外键配置",-1),J={class:"dialog-footer"},K=k({name:"sysCodeGenFk"}),Z=k({...K,emits:["submitRefreshFk"],setup(Q,{expose:v,emit:I}){var m={};const V=I,F=z(),e=O({isShowDialog:!1,ruleForm:{},dbData:[],tableData:[],columnData:[]});P(async()=>{await S()});const x=async()=>{e.tableData=[],e.columnData=[],await G()},h=async()=>{e.columnData=[],await T()},S=async()=>{var n=await b(p).apiSysCodeGenDatabaseListGet();e.dbData=n.data.result},G=async()=>{if(e.ruleForm.configId!=""){var n=await b(p).apiSysCodeGenTableListConfigIdGet(e.ruleForm.configId);e.tableData=n.data.result}},T=async()=>{if(!(e.ruleForm.configId==""||e.ruleForm.tableName=="")){console.log(e.ruleForm.configId,e.ruleForm.tableName);var n=await b(p).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(e.ruleForm.tableName,e.ruleForm.configId);e.columnData=n.data.result}},L=n=>{m=n,e.isShowDialog=!0},B=()=>{m.fkTableName=e.ruleForm.tableName;let n=e.tableData.filter(u=>u.tableName==e.ruleForm.tableName);m.fkEntityName=n.length==0?"":n[0].entityName,m.fkColumnName=e.ruleForm.columnName;let t=e.columnData.filter(u=>u.columnName==e.ruleForm.columnName);m.fkColumnNetType=t.length==0?"":t[0].netType,V("submitRefreshFk",m),e.isShowDialog=!1},E=()=>{e.isShowDialog=!1},R=()=>{F.value.validate(async n=>{n&&B()})};return v({openDialog:L}),(n,t)=>{const u=s("ele-Edit"),U=s("el-icon"),d=s("el-option"),i=s("el-select"),f=s("el-form-item"),_=s("el-col"),A=s("el-row"),M=s("el-form"),C=s("el-button"),$=s("el-dialog");return r(),c("div",j,[o($,{modelValue:e.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=l=>e.isShowDialog=l),draggable:"","close-on-click-modal":!1,width:"700px","destroy-on-close":""},{header:a(()=>[D("div",q,[o(U,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[o(u)]),_:1}),H])]),footer:a(()=>[D("span",J,[o(C,{onClick:E},{default:a(()=>[w("取 消")]),_:1}),o(C,{type:"primary",onClick:R},{default:a(()=>[w("确 定")]),_:1})])]),default:a(()=>[o(M,{model:e.ruleForm,ref_key:"ruleFormRef",ref:F,"label-width":"auto"},{default:a(()=>[o(A,{gutter:35},{default:a(()=>[o(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(f,{label:"库定位器",prop:"configId"},{default:a(()=>[o(i,{clearable:"",modelValue:e.ruleForm.configId,"onUpdate:modelValue":t[0]||(t[0]=l=>e.ruleForm.configId=l),placeholder:"库名",filterable:"",onChange:t[1]||(t[1]=l=>x()),class:"w100"},{default:a(()=>[(r(!0),c(g,null,N(e.dbData,l=>(r(),y(d,{key:l.configId,label:l.configId,value:l.configId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(f,{label:"数据库表",prop:"tableName"},{default:a(()=>[o(i,{modelValue:e.ruleForm.tableName,"onUpdate:modelValue":t[2]||(t[2]=l=>e.ruleForm.tableName=l),filterable:"",clearable:"",onChange:t[3]||(t[3]=l=>h()),class:"w100"},{default:a(()=>[(r(!0),c(g,null,N(e.tableData,l=>(r(),y(d,{key:l.entityName,label:l.entityName+" ( "+l.tableName+" )["+l.tableComment+"]",value:l.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(_,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[o(f,{label:"显示字段",prop:"columnName"},{default:a(()=>[o(i,{modelValue:e.ruleForm.columnName,"onUpdate:modelValue":t[4]||(t[4]=l=>e.ruleForm.columnName=l),class:"w100"},{default:a(()=>[(r(!0),c(g,null,N(e.columnData,l=>(r(),y(d,{key:l.columnName,label:l.columnName+" ["+l.columnComment+"]",value:l.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{Z as _};
