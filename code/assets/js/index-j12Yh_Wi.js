import{b as w,k as $,L as I,p as D,aA as E,t as d,a6 as x,x as S,M as Q,D as s,A as m,U as V,S as U,B as v,y as k,ai as H,aB as K}from"./store-mQZkmHj-.js";import{B as M,d as N,g as A,y as J,n as G}from"./index-lw7p-_pG.js";import{c as _}from"./signalR-d6g4Ksin.js";const T=function(n){return{apiSysOnlineUserForceOfflinePost:async(o,e={})=>{const c="/api/sysOnlineUser/forceOffline",i=new URL(c,"https://example.com");let a;n&&(a=n.baseOptions);const p={method:"POST",...a,...e},h={},y={};if(n&&n.accessToken){const t=typeof n.accessToken=="function"?await n.accessToken():await n.accessToken;h.Authorization="Bearer "+t}h["Content-Type"]="application/json-patch+json";const f=new URLSearchParams(i.search);for(const t in y)f.set(t,y[t]);for(const t in e.params)f.set(t,e.params[t]);i.search=new URLSearchParams(f).toString();let r=a&&a.headers?a.headers:{};p.headers={...h,...r,...e.headers};const l=typeof o!="string"||p.headers["Content-Type"]==="application/json";return p.data=l?JSON.stringify(o!==void 0?o:{}):o||"",{url:i.pathname+i.search+i.hash,options:p}},apiSysOnlineUserPagePost:async(o,e={})=>{const c="/api/sysOnlineUser/page",i=new URL(c,"https://example.com");let a;n&&(a=n.baseOptions);const p={method:"POST",...a,...e},h={},y={};if(n&&n.accessToken){const t=typeof n.accessToken=="function"?await n.accessToken():await n.accessToken;h.Authorization="Bearer "+t}h["Content-Type"]="application/json-patch+json";const f=new URLSearchParams(i.search);for(const t in y)f.set(t,y[t]);for(const t in e.params)f.set(t,e.params[t]);i.search=new URLSearchParams(f).toString();let r=a&&a.headers?a.headers:{};p.headers={...h,...r,...e.headers};const l=typeof o!="string"||p.headers["Content-Type"]==="application/json";return p.data=l?JSON.stringify(o!==void 0?o:{}):o||"",{url:i.pathname+i.search+i.hash,options:p}}}},C=function(n){return{async apiSysOnlineUserForceOfflinePost(o,e){const c=await T(n).apiSysOnlineUserForceOfflinePost(o,e);return(i=w,a=N)=>{const p={...c.options,url:a+c.url};return i.request(p)}},async apiSysOnlineUserPagePost(o,e){const c=await T(n).apiSysOnlineUserPagePost(o,e);return(i=w,a=N)=>{const p={...c.options,url:a+c.url};return i.request(p)}}}};class W extends M{async apiSysOnlineUserForceOfflinePost(o,e){return C(this.configuration).apiSysOnlineUserForceOfflinePost(o,e).then(c=>c(this.axios,this.basePath))}async apiSysOnlineUserPagePost(o,e){return C(this.configuration).apiSysOnlineUserPagePost(o,e).then(c=>c(this.axios,this.basePath))}}const X={class:"sys-onlineUser-container"},te=$({__name:"index",setup(n,{expose:o}){const e=I({loading:!1,isVisible:!1,queryParams:{userName:void 0,realName:void 0},tableParams:{page:1,pageSize:10,total:1},onlineUserList:[],lastUserState:{online:!1,realName:""}});D(async()=>{_.off("OnlineUserList"),_.on("OnlineUserList",r=>{e.onlineUserList=r.userList,e.lastUserState={online:r.online,realName:r.realName},c()}),_.off("ForceOffline"),_.on("ForceOffline",async r=>{console.log("强制下线",r),await _.stop(),await A(G).apiSysAuthLogoutPost(),J()})});const c=E(function(){K({title:"提示",message:`${e.lastUserState.online?`【${e.lastUserState.realName}】上线了`:`【${e.lastUserState.realName}】离开了`}`,type:`${e.lastUserState.online?"info":"error"}`,position:"bottom-right"})},3e3,{leading:!0,trailing:!1}),i=()=>{e.isVisible=!0,a()},a=async()=>{var t,P;e.loading=!0;let r=Object.assign(e.queryParams,e.tableParams);var l=await A(W).apiSysOnlineUserPagePost(r);e.onlineUserList=((t=l.data.result)==null?void 0:t.items)??[],e.tableParams.total=(P=l.data.result)==null?void 0:P.total,e.loading=!1},p=()=>{e.queryParams.userName=void 0,e.queryParams.realName=void 0,a()},h=async r=>{H.confirm(`确定踢掉账号：【${r.realName}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await _.send("ForceOffline",{connectionId:r.connectionId}).catch(function(l){console.log(l)})}).catch(()=>{})},y=r=>{e.tableParams.pageSize=r,a()},f=r=>{e.tableParams.page=r,a()};return o({openDrawer:i}),(r,l)=>{const t=d("el-input"),P=d("el-form-item"),O=d("el-button"),q=d("el-button-group"),z=d("el-form"),b=d("el-card"),g=d("el-table-column"),B=d("el-table"),L=d("el-pagination"),F=d("el-drawer"),R=x("auth"),j=x("loading");return S(),Q("div",X,[s(F,{modelValue:e.isVisible,"onUpdate:modelValue":l[4]||(l[4]=u=>e.isVisible=u),title:"在线用户列表",size:"45%"},{default:m(()=>[s(b,{shadow:"hover","body-style":{paddingBottom:"0"},style:{margin:"8px"}},{default:m(()=>[s(z,{model:e.queryParams,ref:"queryForm",inline:!0},{default:m(()=>[s(P,{label:"账号",prop:"userName"},{default:m(()=>[s(t,{placeholder:"账号",clearable:"",onKeyup:V(a,["enter"]),modelValue:e.queryParams.userName,"onUpdate:modelValue":l[0]||(l[0]=u=>e.queryParams.userName=u)},null,8,["modelValue"])]),_:1}),s(P,{label:"姓名",prop:"realName"},{default:m(()=>[s(t,{placeholder:"姓名",clearable:"",onKeyup:V(a,["enter"]),modelValue:e.queryParams.realName,"onUpdate:modelValue":l[1]||(l[1]=u=>e.queryParams.realName=u)},null,8,["modelValue"])]),_:1}),s(P,null,{default:m(()=>[s(q,null,{default:m(()=>[s(O,{type:"primary",icon:"ele-Search",onClick:a},{default:m(()=>[U(" 查询 ")]),_:1}),s(O,{icon:"ele-Refresh",onClick:p},{default:m(()=>[U(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s(b,{shadow:"hover",style:{margin:"8px","padding-bottom":"15px"}},{default:m(()=>[v((S(),k(B,{data:e.onlineUserList,style:{width:"100%"},border:""},{default:m(()=>[s(g,{type:"index",label:"序号",width:"55",align:"center"}),s(g,{prop:"userName",label:"账号","header-align":"center","show-overflow-tooltip":""}),s(g,{prop:"realName",label:"姓名","header-align":"center","show-overflow-tooltip":""}),s(g,{prop:"ip",label:"IP地址","header-align":"center","show-overflow-tooltip":""}),s(g,{prop:"browser",label:"浏览器","header-align":"center","show-overflow-tooltip":""}),s(g,{prop:"time",label:"登录时间","min-width":"120","header-align":"center","show-overflow-tooltip":""}),s(g,{label:"操作",width:"81",fixed:"right",align:"center","show-overflow-tooltip":""},{default:m(u=>[v((S(),k(O,{icon:"ele-CircleCloseFilled",size:"small",text:"",type:"danger",onClick:Y=>h(u.row)},{default:m(()=>[U(" 下线 ")]),_:2},1032,["onClick"])),[[R,"sysOnlineUser:forceOffline"]])]),_:1})]),_:1},8,["data"])),[[j,e.loading]]),s(L,{currentPage:e.tableParams.page,"onUpdate:currentPage":l[2]||(l[2]=u=>e.tableParams.page=u),"page-size":e.tableParams.pageSize,"onUpdate:pageSize":l[3]||(l[3]=u=>e.tableParams.pageSize=u),total:e.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:y,onCurrentChange:f,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1})]),_:1},8,["modelValue"])])}}});export{te as default};
