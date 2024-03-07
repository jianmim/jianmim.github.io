import{k as M,r as oe,L as C,l as h,t as a,x as f,M as U,D as e,A as l,O as c,T as w,S as d,y as v,a4 as re,a5 as te,F as ae,at as ne,E as Y}from"./store-dof5ccn5.js";import{g as N}from"./index-xdJ7pE-g.js";import{S as O}from"./sys-job-api-m6Bw6aYl.js";const se={class:"sys-jobTrigger-container"},ue={style:{color:"#fff"}},de={class:"dialog-footer"},me={style:{color:"#fff"}},ie=c("span",null," Cron表达式生成器 ",-1),pe=M({name:"sysEditJobTrigger"}),_e=M({...pe,props:{title:String},emits:["handleQuery"],setup(E,{expose:H,emit:J}){const R=E,I=J,V=oe(),o=C({isShowDialog:!1,ruleForm:{},showCronDialog:!1}),P=C([{key:"@secondly",description:"每秒 .0000000"},{key:"@minutely",description:"每分钟 00"},{key:"@hourly",description:"每小时 00:00"},{key:"@daily",description:"每天 00:00:00"},{key:"@monthly",description:"每月 1 号 00:00:00"},{key:"@weekly",description:"每周日 00:00:00"},{key:"@yearly",description:"每年 1 月 1 号 00:00:00"},{key:"@workday",description:"每周一至周五 00:00:00"}]),F=h({get(){if(o.ruleForm.triggerType!="Furion.Schedule.PeriodTrigger"||!o.ruleForm.args)return;const r=Number(o.ruleForm.args);if(!Number.isNaN(r))return r},set(n){o.ruleForm.args=String(n)}}),i=h({get(){const n="";if(o.ruleForm.triggerType!="Furion.Schedule.CronTrigger"||!o.ruleForm.args)return n;const r=String(o.ruleForm.args),m=r.split(",");return m.length<2?n:m.length==2?m[0].replace(new RegExp('"',"gm"),"").trim():r.substring(0,r.lastIndexOf(",")).replace(new RegExp('"',"gm"),"").trim()},set(n){if(o.ruleForm.args==n)return;const r=n.trim();let m=-1;r.startsWith("@")?m=0:r.split(" ").length==6?m=2:m=3,o.ruleForm.args=`"${r}",${m}`}}),z=n=>{var r;o.ruleForm=JSON.parse(JSON.stringify(n)),o.isShowDialog=!0,(r=V.value)==null||r.resetFields()},A=()=>{I("handleQuery"),o.isShowDialog=!1},B=()=>{o.isShowDialog=!1},$=()=>{V.value.validate(async n=>{if(n){if(o.ruleForm.triggerType=="Furion.Schedule.PeriodTrigger"&&!F.value){Y.warning("间隔时间不能为空");return}else if(o.ruleForm.triggerType=="Furion.Schedule.CronTrigger"&&!i.value){Y.warning("Cron表达式不能为空");return}o.ruleForm.id!=null&&o.ruleForm.id>0?await N(O).apiSysJobUpdateJobTriggerPost(o.ruleForm):await N(O).apiSysJobAddJobTriggerPost(o.ruleForm),A()}})},q=n=>{i.value=n==null||n==null?"":n},L=n=>{i.value=n.key};return H({openDialog:z}),(n,r)=>{const m=a("ele-Edit"),_=a("el-icon"),b=a("el-input"),u=a("el-form-item"),s=a("el-col"),S=a("el-option"),Q=a("el-select"),g=a("el-input-number"),y=a("el-button"),k=a("el-row"),j=a("el-dropdown-item"),W=a("el-dropdown-menu"),G=a("el-dropdown"),K=a("el-space"),D=a("el-date-picker"),p=a("el-radio"),x=a("el-radio-group"),X=a("SvgIcon"),Z=a("el-tooltip"),ee=a("el-form"),T=a("el-dialog");return f(),U("div",se,[e(T,{modelValue:o.isShowDialog,"onUpdate:modelValue":r[15]||(r[15]=t=>o.isShowDialog=t),draggable:"","close-on-click-modal":!1,width:"700px"},{header:l(()=>[c("div",ue,[e(_,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:l(()=>[e(m)]),_:1}),c("span",null,w(R.title),1)])]),footer:l(()=>[c("span",de,[e(y,{onClick:B},{default:l(()=>[d("取 消")]),_:1}),e(y,{type:"primary",onClick:$},{default:l(()=>[d("确 定")]),_:1})])]),default:l(()=>[e(ee,{model:o.ruleForm,ref_key:"ruleFormRef",ref:V,"label-width":"auto"},{default:l(()=>[e(k,{gutter:35},{default:l(()=>[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"触发器编号",prop:"triggerId",rules:[{required:!0,message:"触发器编号不能为空",trigger:"blur"}]},{default:l(()=>[e(b,{modelValue:o.ruleForm.triggerId,"onUpdate:modelValue":r[0]||(r[0]=t=>o.ruleForm.triggerId=t),placeholder:"触发器编号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"触发器类型"},{default:l(()=>[e(Q,{modelValue:o.ruleForm.triggerType,"onUpdate:modelValue":r[1]||(r[1]=t=>o.ruleForm.triggerType=t),style:{width:"100%"}},{default:l(()=>[e(S,{value:"Furion.Schedule.PeriodTrigger",label:"间隔"}),e(S,{value:"Furion.Schedule.CronTrigger",label:"Cron表达式"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o.ruleForm.triggerType=="Furion.Schedule.PeriodTrigger"?(f(),v(s,{key:0,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"间隔时间(ms)"},{default:l(()=>[e(g,{modelValue:F.value,"onUpdate:modelValue":r[2]||(r[2]=t=>F.value=t),placeholder:"间隔",min:1e3,step:1e3,class:"w100"},null,8,["modelValue"])]),_:1})]),_:1})):(f(),v(s,{key:1,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(u,{label:"Cron表达式"},{default:l(()=>[e(b,{modelValue:i.value,"onUpdate:modelValue":r[4]||(r[4]=t=>i.value=t),placeholder:"Cron表达式"},{append:l(()=>[e(K,{size:10,spacer:"|"},{default:l(()=>[e(G,{style:{color:"inherit"},trigger:"click",onCommand:L},{dropdown:l(()=>[e(W,null,{default:l(()=>[(f(!0),U(re,null,te(P,(t,le)=>(f(),v(j,{key:le,command:t},{default:l(()=>[e(k,{style:{width:"240px"}},{default:l(()=>[e(s,{span:9},{default:l(()=>[d(w(t.key),1)]),_:2},1024),e(s,{span:15},{default:l(()=>[d(w(t.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["command"]))),128))]),_:1})]),default:l(()=>[e(y,{style:{margin:"0px 0px 0px -20px",color:"inherit"}},{default:l(()=>[d(" Macro ")]),_:1})]),_:1}),e(y,{style:{margin:"0px -20px 0px -10px","font-size":"14px"},onClick:r[3]||(r[3]=t=>o.showCronDialog=!0)},{default:l(()=>[d("Cron表达式")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"起始时间"},{default:l(()=>[e(D,{modelValue:o.ruleForm.startTime,"onUpdate:modelValue":r[5]||(r[5]=t=>o.ruleForm.startTime=t),type:"datetime",placeholder:"起始时间",style:{width:"100%"},format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"结束时间"},{default:l(()=>[e(D,{modelValue:o.ruleForm.endTime,"onUpdate:modelValue":r[6]||(r[6]=t=>o.ruleForm.endTime=t),type:"datetime",placeholder:"结束时间",style:{width:"100%"},format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"最大触发次数"},{default:l(()=>[e(g,{modelValue:o.ruleForm.maxNumberOfRuns,"onUpdate:modelValue":r[7]||(r[7]=t=>o.ruleForm.maxNumberOfRuns=t),placeholder:"最大触发次数",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"最大出错次数"},{default:l(()=>[e(g,{modelValue:o.ruleForm.maxNumberOfErrors,"onUpdate:modelValue":r[8]||(r[8]=t=>o.ruleForm.maxNumberOfErrors=t),placeholder:"最大出错次数",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"重试次数"},{default:l(()=>[e(g,{modelValue:o.ruleForm.numRetries,"onUpdate:modelValue":r[9]||(r[9]=t=>o.ruleForm.numRetries=t),placeholder:"重试次数",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"重试间隔(ms)"},{default:l(()=>[e(g,{modelValue:o.ruleForm.retryTimeout,"onUpdate:modelValue":r[10]||(r[10]=t=>o.ruleForm.retryTimeout=t),placeholder:"重试间隔ms",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"立即启动"},{default:l(()=>[e(x,{modelValue:o.ruleForm.startNow,"onUpdate:modelValue":r[11]||(r[11]=t=>o.ruleForm.startNow=t)},{default:l(()=>[e(p,{label:!0},{default:l(()=>[d("是")]),_:1}),e(p,{label:!1},{default:l(()=>[d("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(u,{label:"启动时执行一次"},{default:l(()=>[e(x,{modelValue:o.ruleForm.runOnStart,"onUpdate:modelValue":r[12]||(r[12]=t=>o.ruleForm.runOnStart=t)},{default:l(()=>[e(p,{label:!0},{default:l(()=>[d("是")]),_:1}),e(p,{label:!1},{default:l(()=>[d("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(u,null,{label:l(()=>[c("div",null,[d(" 重置触发次数 "),e(Z,{"raw-content":"",content:"是否在启动时重置最大触发次数等于一次的作业<br/>解决因持久化数据已完成一次触发但启动时不再执行的问题",placement:"top"},{default:l(()=>[e(X,{name:"fa fa-question-circle-o",size:16,style:{"vertical-align":"middle"}})]),_:1})])]),default:l(()=>[e(x,{modelValue:o.ruleForm.resetOnlyOnce,"onUpdate:modelValue":r[13]||(r[13]=t=>o.ruleForm.resetOnlyOnce=t)},{default:l(()=>[e(p,{label:!0},{default:l(()=>[d("是")]),_:1}),e(p,{label:!1},{default:l(()=>[d("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(u,{label:"描述信息",prop:"description"},{default:l(()=>[e(b,{modelValue:o.ruleForm.description,"onUpdate:modelValue":r[14]||(r[14]=t=>o.ruleForm.description=t),placeholder:"描述信息",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(T,{modelValue:o.showCronDialog,"onUpdate:modelValue":r[17]||(r[17]=t=>o.showCronDialog=t),draggable:"","close-on-click-modal":!1,class:"scrollbar"},{header:l(()=>[c("div",me,[e(_,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:l(()=>[e(m)]),_:1}),ie])]),default:l(()=>[e(ae(ne),{onHide:r[16]||(r[16]=t=>o.showCronDialog=!1),onFill:q,expression:i.value},null,8,["expression"])]),_:1},8,["modelValue"])])}}});export{_e as _};
