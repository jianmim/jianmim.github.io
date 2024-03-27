import{g as Q,a as J}from"./download-0Y1BJycW.js";import{B as X,d as E,g as V}from"./index-lw7p-_pG.js";import{b as C,k as R,L as $,p as G,t as u,a6 as U,B as L,x as y,M as K,D as t,A as l,y as P,S as w,O as D,T as W,E as Z,X as ee,Y as ae}from"./store-mQZkmHj-.js";import{_ as te}from"./_plugin-vue_export-helper-x3n3nnut.js";const q=function(s){return{apiSysLogExClearPost:async(e={})=>{const o="/api/sysLogEx/clear",n=new URL(o,"https://example.com");let r;s&&(r=s.baseOptions);const i={method:"POST",...r,...e},p={},g={};if(s&&s.accessToken){const h=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;p.Authorization="Bearer "+h}const _=new URLSearchParams(n.search);for(const h in g)_.set(h,g[h]);for(const h in e.params)_.set(h,e.params[h]);n.search=new URLSearchParams(_).toString();let f=r&&r.headers?r.headers:{};return i.headers={...p,...f,...e.headers},{url:n.pathname+n.search+n.hash,options:i}},apiSysLogExExportPost:async(e,o={})=>{const n="/api/sysLogEx/export",r=new URL(n,"https://example.com");let i;s&&(i=s.baseOptions);const p={method:"POST",...i,...o},g={},_={};if(s&&s.accessToken){const a=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;g.Authorization="Bearer "+a}g["Content-Type"]="application/json-patch+json";const f=new URLSearchParams(r.search);for(const a in _)f.set(a,_[a]);for(const a in o.params)f.set(a,o.params[a]);r.search=new URLSearchParams(f).toString();let h=i&&i.headers?i.headers:{};p.headers={...g,...h,...o.headers};const v=typeof e!="string"||p.headers["Content-Type"]==="application/json";return p.data=v?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:p}},apiSysLogExPagePost:async(e,o={})=>{const n="/api/sysLogEx/page",r=new URL(n,"https://example.com");let i;s&&(i=s.baseOptions);const p={method:"POST",...i,...o},g={},_={};if(s&&s.accessToken){const a=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;g.Authorization="Bearer "+a}g["Content-Type"]="application/json-patch+json";const f=new URLSearchParams(r.search);for(const a in _)f.set(a,_[a]);for(const a in o.params)f.set(a,o.params[a]);r.search=new URLSearchParams(f).toString();let h=i&&i.headers?i.headers:{};p.headers={...g,...h,...o.headers};const v=typeof e!="string"||p.headers["Content-Type"]==="application/json";return p.data=v?JSON.stringify(e!==void 0?e:{}):e||"",{url:r.pathname+r.search+r.hash,options:p}}}},O=function(s){return{async apiSysLogExClearPost(e){const o=await q(s).apiSysLogExClearPost(e);return(n=C,r=E)=>{const i={...o.options,url:r+o.url};return n.request(i)}},async apiSysLogExExportPost(e,o){const n=await q(s).apiSysLogExExportPost(e,o);return(r=C,i=E)=>{const p={...n.options,url:i+n.url};return r.request(p)}},async apiSysLogExPagePost(e,o){const n=await q(s).apiSysLogExPagePost(e,o);return(r=C,i=E)=>{const p={...n.options,url:i+n.url};return r.request(p)}}}};class A extends X{async apiSysLogExClearPost(e){return O(this.configuration).apiSysLogExClearPost(e).then(o=>o(this.axios,this.basePath))}async apiSysLogExExportPost(e,o){return O(this.configuration).apiSysLogExExportPost(e,o).then(n=>n(this.axios,this.basePath))}async apiSysLogExPagePost(e,o){return O(this.configuration).apiSysLogExPagePost(e,o).then(n=>n(this.axios,this.basePath))}}const oe=s=>(ee("data-v-b3163408"),s=s(),ae(),s),se={class:"sys-exlog-container"},le={style:{color:"#fff"}},re=oe(()=>D("span",null," 日志详情 ",-1)),ne=R({name:"sysExLog"}),ie=R({...ne,setup(s){const e=$({loading:!1,queryParams:{startTime:void 0,endTime:void 0},tableParams:{page:1,pageSize:20,field:"createTime",order:"descending",descStr:"descending",total:0},logData:[],dialogVisible:!1,content:""});G(async()=>{o()});const o=async()=>{var S,x;e.queryParams.startTime==null&&(e.queryParams.startTime=void 0),e.queryParams.endTime==null&&(e.queryParams.endTime=void 0),e.loading=!0;let a=Object.assign(e.queryParams,e.tableParams);var m=await V(A).apiSysLogExPagePost(a);e.logData=((S=m.data.result)==null?void 0:S.items)??[],e.tableParams.total=(x=m.data.result)==null?void 0:x.total,e.loading=!1},n=()=>{e.queryParams.startTime=void 0,e.queryParams.endTime=void 0,o()},r=async()=>{e.loading=!0,await V(A).apiSysLogExClearPost(),e.loading=!1,Z.success("清空成功"),o()},i=async()=>{e.loading=!0;var a=await V(A).apiSysLogExExportPost(e.queryParams,{responseType:"blob"});e.loading=!1;var m=Q(a.headers);J(a.data,m)},p=a=>{e.tableParams.pageSize=a,o()},g=a=>{e.tableParams.page=a,o()},_=a=>{e.content=a.message,e.dialogVisible=!0},f=a=>a.row.exception!=null?"warning-row":"",h=[{text:"今天",value:new Date},{text:"昨天",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24),a}},{text:"上周",value:()=>{const a=new Date;return a.setTime(a.getTime()-3600*1e3*24*7),a}}],v=a=>{e.tableParams.field=a.prop,e.tableParams.order=a.order,o()};return(a,m)=>{const S=u("el-date-picker"),x=u("el-form-item"),T=u("el-button"),B=u("el-button-group"),I=u("el-form"),z=u("el-card"),c=u("el-table-column"),b=u("el-tag"),j=u("el-table"),N=u("el-pagination"),F=u("ele-Document"),Y=u("el-icon"),H=u("el-dialog"),k=U("auth"),M=U("loading");return L((y(),K("div",se,[t(z,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:l(()=>[t(I,{model:e.queryParams,ref:"queryForm",inline:!0},{default:l(()=>[t(x,{label:"开始时间"},{default:l(()=>[t(S,{modelValue:e.queryParams.startTime,"onUpdate:modelValue":m[0]||(m[0]=d=>e.queryParams.startTime=d),type:"datetime",placeholder:"开始时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:h},null,8,["modelValue"])]),_:1}),t(x,{label:"结束时间"},{default:l(()=>[t(S,{modelValue:e.queryParams.endTime,"onUpdate:modelValue":m[1]||(m[1]=d=>e.queryParams.endTime=d),type:"datetime",placeholder:"结束时间","value-format":"YYYY-MM-DD HH:mm:ss",shortcuts:h},null,8,["modelValue"])]),_:1}),t(x,null,{default:l(()=>[t(B,null,{default:l(()=>[L((y(),P(T,{type:"primary",icon:"ele-Search",onClick:o},{default:l(()=>[w(" 查询 ")]),_:1})),[[k,"sysExlog:page"]]),t(T,{icon:"ele-Refresh",onClick:n},{default:l(()=>[w(" 重置 ")]),_:1})]),_:1})]),_:1}),t(x,null,{default:l(()=>[L((y(),P(T,{icon:"ele-DeleteFilled",type:"danger",onClick:r},{default:l(()=>[w(" 清空 ")]),_:1})),[[k,"sysExlog:clear"]]),L((y(),P(T,{icon:"ele-FolderOpened",onClick:i},{default:l(()=>[w(" 导出 ")]),_:1})),[[k,"sysOplog:export"]])]),_:1})]),_:1},8,["model"])]),_:1}),t(z,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:l(()=>[t(j,{data:e.logData,onSortChange:v,style:{width:"100%"},border:"","row-class-name":f},{default:l(()=>[t(c,{type:"index",label:"序号",width:"55",align:"center"}),t(c,{prop:"controllerName",label:"模块名称",width:"100","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"displayTitle",label:"显示名称",width:"150","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"actionName",label:"方法名称",width:"100","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"httpMethod",label:"请求方式",width:"90",align:"center","show-overflow-tooltip":""}),t(c,{prop:"requestUrl",label:"请求地址",width:"300","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"logLevel",label:"级别",width:"70",align:"center","show-overflow-tooltip":""},{default:l(d=>[d.row.logLevel===1?(y(),P(b,{key:0},{default:l(()=>[w("调试")]),_:1})):d.row.logLevel===2?(y(),P(b,{key:1},{default:l(()=>[w("消息")]),_:1})):d.row.logLevel===3?(y(),P(b,{key:2},{default:l(()=>[w("警告")]),_:1})):d.row.logLevel===4?(y(),P(b,{key:3},{default:l(()=>[w("错误")]),_:1})):(y(),P(b,{key:4},{default:l(()=>[w("其他")]),_:1}))]),_:1}),t(c,{prop:"eventId",label:"事件Id",width:"70",align:"center","show-overflow-tooltip":""}),t(c,{prop:"threadId",label:"线程Id",sortable:"custom",width:"90",align:"center","show-overflow-tooltip":""}),t(c,{prop:"traceId",label:"请求跟踪Id",width:"150","header-align":"center",sortable:"custom","show-overflow-tooltip":""}),t(c,{prop:"account",label:"账号名称",width:"100",align:"center","show-overflow-tooltip":""}),t(c,{prop:"realName",label:"真实姓名",width:"100",align:"center","show-overflow-tooltip":""}),t(c,{prop:"remoteIp",label:"IP地址",width:"120",align:"center","show-overflow-tooltip":""}),t(c,{prop:"location",label:"登录地点",width:"150",align:"center","show-overflow-tooltip":""}),t(c,{prop:"browser",label:"浏览器",width:"160",align:"center","show-overflow-tooltip":""}),t(c,{prop:"os",label:"操作系统",width:"120",align:"center","show-overflow-tooltip":""}),t(c,{prop:"status",label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:l(d=>[d.row.status==="200"?(y(),P(b,{key:0,type:"success"},{default:l(()=>[w("成功")]),_:1})):(y(),P(b,{key:1,type:"danger"},{default:l(()=>[w("失败")]),_:1}))]),_:1}),t(c,{prop:"elapsed",label:"耗时(ms)",width:"90",align:"center","show-overflow-tooltip":""}),t(c,{prop:"exception",label:"异常对象",width:"150","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"logDateTime",label:"日志时间",width:"160",align:"center",fixed:"right","show-overflow-tooltip":""}),t(c,{label:"操作",width:"80",align:"center",fixed:"right","show-overflow-tooltip":""},{default:l(d=>[L((y(),P(T,{icon:"ele-InfoFilled",size:"small",text:"",type:"primary",onClick:ce=>_(d.row)},{default:l(()=>[w("详情 ")]),_:2},1032,["onClick"])),[[k,"sysOplog:page"]])]),_:1})]),_:1},8,["data"]),t(N,{currentPage:e.tableParams.page,"onUpdate:currentPage":m[2]||(m[2]=d=>e.tableParams.page=d),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":m[3]||(m[3]=d=>e.tableParams.pageSize=d),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:p,onCurrentChange:g,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),t(H,{modelValue:e.dialogVisible,"onUpdate:modelValue":m[4]||(m[4]=d=>e.dialogVisible=d),draggable:"",width:"1000px"},{header:l(()=>[D("div",le,[t(Y,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:l(()=>[t(F)]),_:1}),re])]),default:l(()=>[D("pre",null,W(e.content),1)]),_:1},8,["modelValue"])])),[[M,e.loading]])}}}),ue=te(ie,[["__scopeId","data-v-b3163408"]]);export{ue as default};
