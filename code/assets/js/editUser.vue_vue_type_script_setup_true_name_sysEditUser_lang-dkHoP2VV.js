import{k as E,r as re,s as te,L as de,p as se,t as u,a6 as ue,x as i,M as g,D as e,A as a,O as b,T as F,S as _,B as me,y as V,a4 as U,a5 as I,F as A,G as R}from"./store-dof5ccn5.js";import{f as ne,g as x}from"./index-zQlakb1H.js";import{S as ie}from"./sys-pos-api-Js4fKc92.js";import{S as pe}from"./sys-role-api-_c0ZYyVU.js";import{S as D}from"./sys-user-api-KuBATUTj.js";const ce={class:"sys-user-container"},be={style:{color:"#fff"}},ge=b("div",{style:{color:"#b1b3b8"}},"机构组织",-1),fe={key:0},_e=b("div",{style:{color:"#b1b3b8"}},"附属机构",-1),Ve=b("span",{style:{"font-size":"12px",color:"gray","padding-left":"5px"}}," 具有相应组织机构的数据权限 ",-1),xe=b("span",{class:"ml5"},"机构",-1),Fe={key:0},ye={class:"dialog-footer"},ve=E({name:"sysEditUser"}),Se=E({...ve,props:{title:String,orgData:Array},emits:["handleQuery"],setup(B,{expose:G,emit:j}){const w=B,z=j,L=re(),$=ne(),{userInfos:k}=te($),l=de({loading:!1,isShowDialog:!1,selectedTabName:"0",ruleForm:{},posData:[],roleData:[]});se(async()=>{l.loading=!0;var n=await x(ie).apiSysPosListGet();l.posData=n.data.result??[];var r=await x(pe).apiSysRoleListGet();l.roleData=r.data.result??[],l.loading=!1});const J=async n=>{var y;if((y=L.value)==null||y.resetFields(),l.selectedTabName="0",l.ruleForm=JSON.parse(JSON.stringify(n)),n.id!=null){var r=await x(D).apiSysUserOwnRoleListUserIdGet(n.id);l.ruleForm.roleIdList=r.data.result;var S=await x(D).apiSysUserOwnExtOrgListUserIdGet(n.id);l.ruleForm.extOrgIdList=S.data.result}else l.ruleForm.accountType=777;l.isShowDialog=!0},Q=()=>{z("handleQuery"),l.isShowDialog=!1},H=()=>{l.isShowDialog=!1},K=()=>{L.value.validate(async n=>{n&&(l.ruleForm.id!=null&&l.ruleForm.id>0?await x(D).apiSysUserUpdatePost(l.ruleForm):await x(D).apiSysUserAddPost(l.ruleForm),Q())})},W=()=>{var n;l.ruleForm.extOrgIdList==null&&(l.ruleForm.extOrgIdList=[]),(n=l.ruleForm.extOrgIdList)==null||n.push({})},X=n=>{var r;(r=l.ruleForm.extOrgIdList)==null||r.splice(n,1)};return G({openDialog:J}),(n,r)=>{const S=u("ele-Edit"),y=u("el-icon"),m=u("el-input"),d=u("el-form-item"),t=u("el-col"),s=u("el-option"),f=u("el-select"),N=u("el-input-number"),T=u("el-divider"),Y=u("el-cascader"),C=u("el-date-picker"),v=u("el-button"),O=u("el-row"),Z=u("el-empty"),P=u("el-form"),M=u("el-tab-pane"),h=u("el-radio"),ee=u("el-radio-group"),le=u("el-tabs"),ae=u("el-dialog"),oe=ue("loading");return i(),g("div",ce,[e(ae,{modelValue:l.isShowDialog,"onUpdate:modelValue":r[28]||(r[28]=o=>l.isShowDialog=o),draggable:"","close-on-click-modal":!1,width:"700px"},{header:a(()=>[b("div",be,[e(y,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[e(S)]),_:1}),b("span",null,F(w.title),1)])]),footer:a(()=>[b("span",ye,[e(v,{onClick:H},{default:a(()=>[_("取 消")]),_:1}),e(v,{type:"primary",onClick:K},{default:a(()=>[_("确 定")]),_:1})])]),default:a(()=>[me((i(),V(le,{modelValue:l.selectedTabName,"onUpdate:modelValue":r[27]||(r[27]=o=>l.selectedTabName=o)},{default:a(()=>[e(M,{label:"基础信息",style:{height:"550px"}},{default:a(()=>[e(P,{model:l.ruleForm,ref_key:"ruleFormRef",ref:L,"label-width":"auto"},{default:a(()=>[e(O,{gutter:35},{default:a(()=>[e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"账号名称",prop:"account",rules:[{required:!0,message:"账号名称不能为空",trigger:"blur"}]},{default:a(()=>[e(m,{modelValue:l.ruleForm.account,"onUpdate:modelValue":r[0]||(r[0]=o=>l.ruleForm.account=o),placeholder:"账号名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"昵称"},{default:a(()=>[e(m,{modelValue:l.ruleForm.nickName,"onUpdate:modelValue":r[1]||(r[1]=o=>l.ruleForm.nickName=o),placeholder:"昵称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"手机号码",prop:"phone",rules:[{required:!0,message:"手机号码不能为空",trigger:"blur"}]},{default:a(()=>[e(m,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":r[2]||(r[2]=o=>l.ruleForm.phone=o),placeholder:"手机号码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"真实姓名",prop:"realName",rules:[{required:!0,message:"真实姓名不能为空",trigger:"blur"}]},{default:a(()=>[e(m,{modelValue:l.ruleForm.realName,"onUpdate:modelValue":r[3]||(r[3]=o=>l.ruleForm.realName=o),placeholder:"真实姓名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"角色集合",prop:"roleIdList",rules:[{required:!0,message:"角色集合不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:l.ruleForm.roleIdList,"onUpdate:modelValue":r[4]||(r[4]=o=>l.ruleForm.roleIdList=o),multiple:"","value-key":"id",clearable:"",placeholder:"角色集合","collapse-tags":"","collapse-tags-tooltip":"",class:"w100",filterable:""},{default:a(()=>[(i(!0),g(U,null,I(l.roleData,o=>(i(),V(s,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"账号类型",prop:"accountType",rules:[{required:!0,message:"账号类型不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:l.ruleForm.accountType,"onUpdate:modelValue":r[5]||(r[5]=o=>l.ruleForm.accountType=o),placeholder:"账号类型","collapse-tags":"","collapse-tags-tooltip":"",class:"w100"},{default:a(()=>[e(s,{label:"系统管理员",value:888,disabled:A(k).accountType!=888&&A(k).accountType!=999},null,8,["disabled"]),e(s,{label:"普通账号",value:777}),e(s,{label:"会员",value:666})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"邮箱"},{default:a(()=>[e(m,{modelValue:l.ruleForm.email,"onUpdate:modelValue":r[6]||(r[6]=o=>l.ruleForm.email=o),placeholder:"邮箱",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb5"},{default:a(()=>[e(d,{label:"排序"},{default:a(()=>[e(N,{modelValue:l.ruleForm.orderNo,"onUpdate:modelValue":r[7]||(r[7]=o=>l.ruleForm.orderNo=o),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{"border-style":"dashed","content-position":"center"},{default:a(()=>[ge]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"所属机构",prop:"orgId",rules:[{required:!0,message:"所属机构不能为空",trigger:"blur"}]},{default:a(()=>[e(Y,{options:w.orgData,props:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",expandTrigger:"hover"},placeholder:"所属机构",clearable:"",class:"w100",modelValue:l.ruleForm.orgId,"onUpdate:modelValue":r[8]||(r[8]=o=>l.ruleForm.orgId=o)},{default:a(({node:o,data:p})=>[b("span",null,F(p.name),1),o.isLeaf?R("",!0):(i(),g("span",fe," ("+F(p.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"职位",prop:"posId",rules:[{required:!0,message:"职位名称不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:l.ruleForm.posId,"onUpdate:modelValue":r[9]||(r[9]=o=>l.ruleForm.posId=o),placeholder:"职位",class:"w100"},{default:a(()=>[(i(!0),g(U,null,I(l.posData,o=>(i(),V(s,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"工号"},{default:a(()=>[e(m,{modelValue:l.ruleForm.jobNum,"onUpdate:modelValue":r[10]||(r[10]=o=>l.ruleForm.jobNum=o),placeholder:"工号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"入职日期"},{default:a(()=>[e(C,{modelValue:l.ruleForm.joinDate,"onUpdate:modelValue":r[11]||(r[11]=o=>l.ruleForm.joinDate=o),type:"date",placeholder:"入职日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(T,{"border-style":"dashed","content-position":"center"},{default:a(()=>[_e]),_:1}),e(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(v,{icon:"ele-Plus",type:"primary",plain:"",onClick:W},{default:a(()=>[_(" 增加附属机构 ")]),_:1}),Ve]),_:1}),e(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[l.ruleForm.extOrgIdList!=null&&l.ruleForm.extOrgIdList.length>0?(i(!0),g(U,{key:0},I(l.ruleForm.extOrgIdList,(o,p)=>(i(),V(O,{gutter:35,key:p},{default:a(()=>[e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"机构",prop:`extOrgIdList[${p}].orgId`,rules:[{required:!0,message:"机构不能为空",trigger:"blur"}]},{label:a(()=>[e(v,{icon:"ele-Delete",type:"danger",circle:"",plain:"",size:"small",onClick:c=>X(p)},null,8,["onClick"]),xe]),default:a(()=>[e(Y,{options:w.orgData,props:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",expandTrigger:"hover"},placeholder:"机构组织",clearable:"",class:"w100",modelValue:l.ruleForm.extOrgIdList[p].orgId,"onUpdate:modelValue":c=>l.ruleForm.extOrgIdList[p].orgId=c},{default:a(({node:c,data:q})=>[b("span",null,F(q.name),1),c.isLeaf?R("",!0):(i(),g("span",Fe," ("+F(q.children.length)+") ",1))]),_:2},1032,["options","modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"职位",prop:`extOrgIdList[${p}].posId`,rules:[{required:!0,message:"职位不能为空",trigger:"blur"}]},{default:a(()=>[e(f,{modelValue:l.ruleForm.extOrgIdList[p].posId,"onUpdate:modelValue":c=>l.ruleForm.extOrgIdList[p].posId=c,placeholder:"职位名称",class:"w100"},{default:a(()=>[(i(!0),g(U,null,I(l.posData,c=>(i(),V(s,{key:c.id,label:c.name,value:c.id},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128)):(i(),V(Z,{key:1,"image-size":50,description:"空数据"}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(M,{label:"档案信息",style:{height:"550px"}},{default:a(()=>[e(P,{model:l.ruleForm,"label-width":"auto"},{default:a(()=>[e(O,{gutter:35},{default:a(()=>[e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"证件类型",prop:"cardType"},{default:a(()=>[e(f,{modelValue:l.ruleForm.cardType,"onUpdate:modelValue":r[12]||(r[12]=o=>l.ruleForm.cardType=o),placeholder:"证件类型",class:"w100"},{default:a(()=>[e(s,{label:"身份证",value:0}),e(s,{label:"护照",value:1}),e(s,{label:"出生证",value:2}),e(s,{label:"港澳台通行证",value:3}),e(s,{label:"外国人居留证",value:4})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"证件号码"},{default:a(()=>[e(m,{modelValue:l.ruleForm.idCardNum,"onUpdate:modelValue":r[13]||(r[13]=o=>l.ruleForm.idCardNum=o),placeholder:"证件号码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"出生日期",prop:"birthday"},{default:a(()=>[e(C,{modelValue:l.ruleForm.birthday,"onUpdate:modelValue":r[14]||(r[14]=o=>l.ruleForm.birthday=o),type:"date",placeholder:"出生日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"性别"},{default:a(()=>[e(ee,{modelValue:l.ruleForm.sex,"onUpdate:modelValue":r[15]||(r[15]=o=>l.ruleForm.sex=o)},{default:a(()=>[e(h,{label:1},{default:a(()=>[_("男")]),_:1}),e(h,{label:2},{default:a(()=>[_("女")]),_:1}),e(h,{label:3},{default:a(()=>[_("其他")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb5"},{default:a(()=>[e(d,{label:"年龄"},{default:a(()=>[e(N,{modelValue:l.ruleForm.age,"onUpdate:modelValue":r[16]||(r[16]=o=>l.ruleForm.age=o),placeholder:"年龄",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"民族"},{default:a(()=>[e(m,{modelValue:l.ruleForm.nation,"onUpdate:modelValue":r[17]||(r[17]=o=>l.ruleForm.nation=o),placeholder:"民族",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(d,{label:"地址"},{default:a(()=>[e(m,{modelValue:l.ruleForm.address,"onUpdate:modelValue":r[18]||(r[18]=o=>l.ruleForm.address=o),placeholder:"地址",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"毕业学校"},{default:a(()=>[e(m,{modelValue:l.ruleForm.college,"onUpdate:modelValue":r[19]||(r[19]=o=>l.ruleForm.college=o),placeholder:"毕业学校",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"文化程度"},{default:a(()=>[e(f,{modelValue:l.ruleForm.cultureLevel,"onUpdate:modelValue":r[20]||(r[20]=o=>l.ruleForm.cultureLevel=o),placeholder:"文化程度",class:"w100"},{default:a(()=>[e(s,{label:"其他",value:0}),e(s,{label:"小学",value:1}),e(s,{label:"初中",value:2}),e(s,{label:"普通高中",value:3}),e(s,{label:"技工学校",value:4}),e(s,{label:"职业教育",value:5}),e(s,{label:"职业高中",value:6}),e(s,{label:"中等专科",value:7}),e(s,{label:"大学专科",value:8}),e(s,{label:"大学本科",value:9}),e(s,{label:"硕士研究生",value:10}),e(s,{label:"博士研究生",value:11})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"政治面貌"},{default:a(()=>[e(m,{modelValue:l.ruleForm.politicalOutlook,"onUpdate:modelValue":r[21]||(r[21]=o=>l.ruleForm.politicalOutlook=o),placeholder:"政治面貌",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"办公电话"},{default:a(()=>[e(m,{modelValue:l.ruleForm.officePhone,"onUpdate:modelValue":r[22]||(r[22]=o=>l.ruleForm.officePhone=o),placeholder:"办公电话",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"紧急联系人"},{default:a(()=>[e(m,{modelValue:l.ruleForm.emergencyContact,"onUpdate:modelValue":r[23]||(r[23]=o=>l.ruleForm.emergencyContact=o),placeholder:"紧急联系人",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(d,{label:"联系人电话"},{default:a(()=>[e(m,{modelValue:l.ruleForm.emergencyPhone,"onUpdate:modelValue":r[24]||(r[24]=o=>l.ruleForm.emergencyPhone=o),placeholder:"联系人电话",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(d,{label:"联系人地址"},{default:a(()=>[e(m,{modelValue:l.ruleForm.emergencyAddress,"onUpdate:modelValue":r[25]||(r[25]=o=>l.ruleForm.emergencyAddress=o),placeholder:"紧急联系人",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(d,{label:"备注"},{default:a(()=>[e(m,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":r[26]||(r[26]=o=>l.ruleForm.remark=o),placeholder:"备注",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue"])),[[oe,l.loading]])]),_:1},8,["modelValue"])])}}});export{Se as _};
