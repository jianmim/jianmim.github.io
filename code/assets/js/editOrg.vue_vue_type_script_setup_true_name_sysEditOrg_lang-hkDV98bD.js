import{g as _}from"./index-xdJ7pE-g.js";import{S as M}from"./sys-dict-data-api--sEh4YcZ.js";import{S as D}from"./sys-org-api-Edv2nJUp.js";import{k as S,r as Q,L as R,p as z,t as r,x as m,M as f,D as e,A as o,O as u,T as g,S as i,G as I,a4 as j,a5 as H,y as K}from"./store-dof5ccn5.js";const W={class:"sys-org-container"},X={style:{color:"#fff"}},Y={key:0},Z={class:"dialog-footer"},$=S({name:"sysEditOrg"}),te=S({...$,props:{title:String,orgData:Array},emits:["handleQuery"],setup(w,{expose:v,emit:k}){const b=w,h=k,p=Q(),l=R({isShowDialog:!1,ruleForm:{},orgTypeList:[]});z(async()=>{let d=await _(M).apiSysDictDataDataListCodeGet("org_type");l.orgTypeList=d.data.result});const U=d=>{var t;l.ruleForm=JSON.parse(JSON.stringify(d)),l.isShowDialog=!0,(t=p.value)==null||t.resetFields()},N=()=>{h("handleQuery",!0),l.isShowDialog=!1},C=()=>{l.isShowDialog=!1},L=()=>{p.value.validate(async d=>{d&&(l.ruleForm.id!=null&&l.ruleForm.id>0?await _(D).apiSysOrgUpdatePost(l.ruleForm):await _(D).apiSysOrgAddPost(l.ruleForm),N())})};return v({openDialog:U}),(d,t)=>{const O=r("ele-Edit"),A=r("el-icon"),T=r("el-cascader"),s=r("el-form-item"),n=r("el-col"),c=r("el-input"),y=r("el-input-number"),B=r("el-option"),E=r("el-select"),V=r("el-radio"),P=r("el-radio-group"),q=r("el-row"),G=r("el-form"),F=r("el-button"),J=r("el-dialog");return m(),f("div",W,[e(J,{modelValue:l.isShowDialog,"onUpdate:modelValue":t[8]||(t[8]=a=>l.isShowDialog=a),draggable:"","close-on-click-modal":!1,width:"700px"},{header:o(()=>[u("div",X,[e(A,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:o(()=>[e(O)]),_:1}),u("span",null,g(b.title),1)])]),footer:o(()=>[u("span",Z,[e(F,{onClick:C},{default:o(()=>[i("取 消")]),_:1}),e(F,{type:"primary",onClick:L},{default:o(()=>[i("确 定")]),_:1})])]),default:o(()=>[e(G,{model:l.ruleForm,ref_key:"ruleFormRef",ref:p,"label-width":"auto"},{default:o(()=>[e(q,{gutter:35},{default:o(()=>[e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"上级机构"},{default:o(()=>[e(T,{options:b.orgData,props:{checkStrictly:!0,emitPath:!1,value:"id",label:"name"},placeholder:"请选择上级机构",clearable:"",class:"w100",modelValue:l.ruleForm.pid,"onUpdate:modelValue":t[0]||(t[0]=a=>l.ruleForm.pid=a)},{default:o(({node:a,data:x})=>[u("span",null,g(x.name),1),a.isLeaf?I("",!0):(m(),f("span",Y," ("+g(x.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"机构名称",prop:"name",rules:[{required:!0,message:"机构名称不能为空",trigger:"blur"}]},{default:o(()=>[e(c,{modelValue:l.ruleForm.name,"onUpdate:modelValue":t[1]||(t[1]=a=>l.ruleForm.name=a),placeholder:"机构名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"机构编码",prop:"code",rules:[{required:!0,message:"机构编码不能为空",trigger:"blur"}]},{default:o(()=>[e(c,{modelValue:l.ruleForm.code,"onUpdate:modelValue":t[2]||(t[2]=a=>l.ruleForm.code=a),placeholder:"机构编码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"级别"},{default:o(()=>[e(y,{modelValue:l.ruleForm.level,"onUpdate:modelValue":t[3]||(t[3]=a=>l.ruleForm.level=a),placeholder:"级别",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"机构类型"},{default:o(()=>[e(E,{modelValue:l.ruleForm.type,"onUpdate:modelValue":t[4]||(t[4]=a=>l.ruleForm.type=a),filterable:"",clearable:"",class:"w100"},{default:o(()=>[(m(!0),f(j,null,H(l.orgTypeList,a=>(m(),K(B,{key:a.value,label:a.value,value:a.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"排序"},{default:o(()=>[e(y,{modelValue:l.ruleForm.orderNo,"onUpdate:modelValue":t[5]||(t[5]=a=>l.ruleForm.orderNo=a),placeholder:"排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"状态"},{default:o(()=>[e(P,{modelValue:l.ruleForm.status,"onUpdate:modelValue":t[6]||(t[6]=a=>l.ruleForm.status=a)},{default:o(()=>[e(V,{label:1},{default:o(()=>[i("启用")]),_:1}),e(V,{label:2},{default:o(()=>[i("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"备注"},{default:o(()=>[e(c,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":t[7]||(t[7]=a=>l.ruleForm.remark=a),placeholder:"请输入备注内容",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{te as _};