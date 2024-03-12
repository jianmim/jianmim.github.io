import{k as R,r as m,p as T,t as r,x as g,M as y,D as l,A as t,O as _,T as z,F as L,S as U,B as j,a4 as q,a5 as E,E as $,C as J,y as P}from"./store-dof5ccn5.js";import{s as u}from"./request-k9quR_KD.js";import{_ as G}from"./_plugin-vue_export-helper-x3n3nnut.js";const H=s=>u({url:"/api/appApiUrlMng/add",method:"post",data:s}),re=s=>u({url:"/api/appApiUrlMng/delete",method:"post",data:s}),K=s=>u({url:"/api/appApiUrlMng/update",method:"post",data:s}),ne=s=>u({url:"/api/appApiUrlMng/page",method:"post",data:s}),Q=s=>u({url:"/api/appApiUrlMng/detail",method:"get",data:{id:s}}),W=()=>u({url:"/api/licRecordInfo/SysUserApplyUserIdDropdown",method:"get"}),X={class:"appapiUrlMng-container"},Y={style:{color:"#fff"}},Z={class:"dialog-footer"},ee=R({__name:"editDialog",props:{title:{type:String,default:""}},emits:["reloadTable"],setup(s,{expose:w,emit:x}){var D=s;const V=x,f=m(),p=m(!1),a=m({}),h=m({companyName:[{required:!0,message:"请输入公司名称！",trigger:"blur"}],apiUrl:[{required:!0,message:"请输入接口地址！",trigger:"blur"},{validator:(d,e)=>(console.log(e),!!/^(https?:\/\/)([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}(:[0-9]+)?(?!\/)$/.test(e)),message:"请输入正确的接口地址！",trigger:"blur"}],userID:[{required:!0,message:"请选中负责人！",trigger:"blur"}]}),A=async d=>{let e=JSON.parse(JSON.stringify(d));e.id?a.value=(await Q(e.id)).data.result:a.value=e,p.value=!0},M=()=>{V("reloadTable"),p.value=!1},S=()=>{p.value=!1},k=async()=>{f.value.validate(async(d,e)=>{if(d){let n=a.value;a.value.id==null||a.value.id==null||a.value.id==""||a.value.id==0?await H(n):await K(n),M()}else $({message:`表单有${Object.keys(e).length}处验证失败，请修改后再提交`,type:"error"})})},v=m([]);return(async()=>{let d=await W();v.value=d.data.result??[]})(),T(async()=>{}),w({openDialog:A}),(d,e)=>{const n=r("el-input"),i=r("el-form-item"),c=r("el-col"),I=r("el-option"),N=r("el-select"),C=r("el-row"),O=r("el-form"),b=r("el-button"),B=r("el-dialog");return g(),y("div",X,[l(B,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=o=>p.value=o),width:800,draggable:""},{header:t(()=>[_("div",Y,[_("span",null,z(L(D).title),1)])]),footer:t(()=>[_("span",Z,[l(b,{onClick:S},{default:t(()=>[U("取 消")]),_:1}),l(b,{type:"primary",onClick:k},{default:t(()=>[U("确 定")]),_:1})])]),default:t(()=>[l(O,{model:a.value,ref_key:"ruleFormRef",ref:f,"label-width":"auto",rules:h.value},{default:t(()=>[l(C,{gutter:35},{default:t(()=>[j(l(i,null,{default:t(()=>[l(n,{modelValue:a.value.id,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.id=o)},null,8,["modelValue"])]),_:1},512),[[J,!1]]),l(c,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(i,{label:"公司名称",prop:"companyName"},{default:t(()=>[l(n,{modelValue:a.value.companyName,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.companyName=o),placeholder:"请输入公司名称",type:"textarea",rows:"1",maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(c,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(i,{label:"接口地址",prop:"apiUrl"},{default:t(()=>[l(n,{modelValue:a.value.apiUrl,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.apiUrl=o),placeholder:"请输入接口地址",type:"textarea",rows:"1",maxlength:"500","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(c,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(i,{label:"备注",prop:"remark"},{default:t(()=>[l(n,{modelValue:a.value.remark,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.remark=o),placeholder:"请输入备注",type:"textarea",rows:"3",maxlength:"1000","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(c,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(i,{label:"负责人",prop:"userID"},{default:t(()=>[l(N,{clearable:"",filterable:"",modelValue:a.value.userID,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.userID=o),placeholder:"请选择负责人"},{default:t(()=>[(g(!0),y(q,null,E(v.value,(o,F)=>(g(),P(I,{key:F,value:o.value,label:o.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}}),le=G(ee,[["__scopeId","data-v-5863d445"]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{de as a,re as d,le as e,W as g,ne as p};
