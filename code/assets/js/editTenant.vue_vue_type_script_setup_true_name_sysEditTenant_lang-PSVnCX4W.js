import{g as f}from"./index-lw7p-_pG.js";import{S as g}from"./sys-tenant-api-WCCcDxDS.js";import{k as x,r as E,L as H,t as n,x as P,M as Q,D as e,A as o,O as c,T as R,S as i}from"./store-mQZkmHj-.js";const G={class:"sys-tenant-container"},M={style:{color:"#fff"}},I={class:"dialog-footer"},J=x({name:"sysEditTenant"}),j=x({...J,props:{title:String},emits:["handleQuery"],setup(F,{expose:V,emit:v}){const y=F,S=v,p=E(),l=H({isShowDialog:!1,ruleForm:{}}),T=m=>{var a;l.ruleForm=JSON.parse(JSON.stringify(m)),l.isShowDialog=!0,(a=p.value)==null||a.resetFields()},w=()=>{S("handleQuery"),l.isShowDialog=!1},D=()=>{l.isShowDialog=!1},C=()=>{p.value.validate(async m=>{m&&(l.ruleForm.id!=null&&l.ruleForm.id>0?await f(g).apiSysTenantUpdatePost(l.ruleForm):await f(g).apiSysTenantAddPost(l.ruleForm),w())})};return V({openDialog:T}),(m,a)=>{const U=n("ele-Edit"),k=n("el-icon"),_=n("el-radio"),q=n("el-radio-group"),s=n("el-form-item"),u=n("el-col"),d=n("el-input"),A=n("el-input-number"),r=n("el-option"),h=n("el-select"),N=n("el-row"),O=n("el-form"),b=n("el-button"),B=n("el-dialog");return P(),Q("div",G,[e(B,{modelValue:l.isShowDialog,"onUpdate:modelValue":a[10]||(a[10]=t=>l.isShowDialog=t),draggable:"","close-on-click-modal":!1,width:"700px"},{header:o(()=>[c("div",M,[e(k,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[e(U)]),_:1}),c("span",null,R(y.title),1)])]),footer:o(()=>[c("span",I,[e(b,{onClick:D},{default:o(()=>[i("取 消")]),_:1}),e(b,{type:"primary",onClick:C},{default:o(()=>[i("确 定")]),_:1})])]),default:o(()=>[e(O,{model:l.ruleForm,ref_key:"ruleFormRef",ref:p,"label-width":"auto"},{default:o(()=>[e(N,{gutter:35},{default:o(()=>[e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"租户类型",rules:[{required:!0,message:"租户类型不能为空",trigger:"blur"}]},{default:o(()=>[e(q,{modelValue:l.ruleForm.tenantType,"onUpdate:modelValue":a[0]||(a[0]=t=>l.ruleForm.tenantType=t),disabled:l.ruleForm.id!=null},{default:o(()=>[e(_,{label:0},{default:o(()=>[i("ID隔离")]),_:1}),e(_,{label:1},{default:o(()=>[i("库隔离")]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"租户名称",prop:"name",rules:[{required:!0,message:"租户名称不能为空",trigger:"blur"}]},{default:o(()=>[e(d,{modelValue:l.ruleForm.name,"onUpdate:modelValue":a[1]||(a[1]=t=>l.ruleForm.name=t),placeholder:"租户名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"租管账号",prop:"adminAccount",rules:[{required:!0,message:"租管账号不能为空",trigger:"blur"}]},{default:o(()=>[e(d,{modelValue:l.ruleForm.adminAccount,"onUpdate:modelValue":a[2]||(a[2]=t=>l.ruleForm.adminAccount=t),placeholder:"租管账号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"电话",prop:"phone",rules:[{required:!0,message:"电话号码不能为空",trigger:"blur"}]},{default:o(()=>[e(d,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":a[3]||(a[3]=t=>l.ruleForm.phone=t),placeholder:"电话",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"邮箱"},{default:o(()=>[e(d,{modelValue:l.ruleForm.email,"onUpdate:modelValue":a[4]||(a[4]=t=>l.ruleForm.email=t),placeholder:"邮箱",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"排序"},{default:o(()=>[e(A,{modelValue:l.ruleForm.orderNo,"onUpdate:modelValue":a[5]||(a[5]=t=>l.ruleForm.orderNo=t),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"数据库类型"},{default:o(()=>[e(h,{modelValue:l.ruleForm.dbType,"onUpdate:modelValue":a[6]||(a[6]=t=>l.ruleForm.dbType=t),placeholder:"数据库类型",clearable:"",class:"w100",disabled:l.ruleForm.tenantType==0&&l.ruleForm.tenantType!=null},{default:o(()=>[e(r,{label:"MySql",value:0}),e(r,{label:"SqlServer",value:1}),e(r,{label:"Sqlite",value:2}),e(r,{label:"Oracle",value:3}),e(r,{label:"PostgreSQL",value:4}),e(r,{label:"Dm",value:5}),e(r,{label:"Kdbndp",value:6}),e(r,{label:"Oscar",value:7}),e(r,{label:"MySqlConnector",value:8}),e(r,{label:"Access",value:9}),e(r,{label:"OpenGauss",value:10}),e(r,{label:"QuestDB",value:11}),e(r,{label:"HG",value:12}),e(r,{label:"ClickHouse",value:13}),e(r,{label:"GBase",value:14}),e(r,{label:"Custom",value:900})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"连接字符串"},{default:o(()=>[e(d,{modelValue:l.ruleForm.connection,"onUpdate:modelValue":a[7]||(a[7]=t=>l.ruleForm.connection=t),placeholder:"连接字符串",clearable:"",type:"textarea",disabled:l.ruleForm.tenantType==0&&l.ruleForm.tenantType!=null},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"从库连接串"},{default:o(()=>[e(d,{modelValue:l.ruleForm.slaveConnections,"onUpdate:modelValue":a[8]||(a[8]=t=>l.ruleForm.slaveConnections=t),placeholder:"格式：[{'HitRate':10, 'ConnectionString':'xxx'},{'HitRate':10, 'ConnectionString':'xxx'}]",clearable:"",type:"textarea",disabled:l.ruleForm.tenantType==0&&l.ruleForm.tenantType!=null},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"备注"},{default:o(()=>[e(d,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":a[9]||(a[9]=t=>l.ruleForm.remark=t),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{j as _};
