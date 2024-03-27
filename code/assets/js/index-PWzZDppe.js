import{_ as O,S}from"./editPlugin.vue_vue_type_script_setup_true_name_sysEditPlugin_lang-6YQpoBpe.js";import{g as z}from"./index-lw7p-_pG.js";import{k as D,r as G,L as J,p as K,t as a,a6 as T,x as s,M as W,D as e,A as l,B as P,y as _,S as n,T as b,ai as X,E as Y}from"./store-mQZkmHj-.js";const Z={class:"sys-plugin-container"},ee=D({name:"sysPlugin"}),oe=D({...ee,setup(le){const v=G(),t=J({loading:!1,pluginData:[],queryParams:{name:void 0},tableParams:{page:1,pageSize:20,total:0},editPluginTitle:""});K(async()=>{u()});const u=async()=>{var h,c;t.loading=!0;let i=Object.assign(t.queryParams,t.tableParams);var r=await z(S).apiSysPluginPagePost(i);t.pluginData=((h=r.data.result)==null?void 0:h.items)??[],t.tableParams.total=(c=r.data.result)==null?void 0:c.total,t.loading=!1},B=()=>{t.queryParams.name=void 0,u()},q=()=>{var i;t.editPluginTitle="添加动态插件",(i=v.value)==null||i.openDialog({orderNo:100,status:1})},N=i=>{var r;t.editPluginTitle="编辑动态插件",(r=v.value)==null||r.openDialog(i)},U=i=>{X.confirm(`确定删除动态插件：【${i.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await z(S).apiSysPluginDeletePost({id:i.id}),u(),Y.success("删除成功")}).catch(()=>{})},E=i=>{t.tableParams.pageSize=i,u()},F=i=>{t.tableParams.page=i,u()};return(i,r)=>{const h=a("el-input"),c=a("el-form-item"),f=a("el-button"),V=a("el-button-group"),A=a("el-form"),k=a("el-card"),d=a("el-table-column"),p=a("el-tag"),M=a("ele-InfoFilled"),m=a("el-icon"),g=a("el-text"),C=a("ele-UserFilled"),y=a("el-descriptions-item"),x=a("ele-Calendar"),$=a("ele-Tickets"),I=a("el-descriptions"),Q=a("el-popover"),R=a("el-table"),j=a("el-pagination"),w=T("auth"),H=T("loading");return s(),W("div",Z,[e(k,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:l(()=>[e(A,{model:t.queryParams,ref:"queryForm",inline:!0},{default:l(()=>[e(c,{label:"功能名称"},{default:l(()=>[e(h,{modelValue:t.queryParams.name,"onUpdate:modelValue":r[0]||(r[0]=o=>t.queryParams.name=o),placeholder:"功能名称",clearable:""},null,8,["modelValue"])]),_:1}),e(c,null,{default:l(()=>[e(V,null,{default:l(()=>[P((s(),_(f,{type:"primary",icon:"ele-Search",onClick:u},{default:l(()=>[n(" 查询 ")]),_:1})),[[w,"sysPlugin:page"]]),e(f,{icon:"ele-Refresh",onClick:B},{default:l(()=>[n(" 重置 ")]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[P((s(),_(f,{type:"primary",icon:"ele-Plus",onClick:q},{default:l(()=>[n(" 新增 ")]),_:1})),[[w,"sysPlugin:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),e(k,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:l(()=>[P((s(),_(R,{data:t.pluginData,style:{width:"100%"},border:""},{default:l(()=>[e(d,{type:"index",label:"序号",width:"55",align:"center",fixed:""}),e(d,{prop:"name",label:"功能名称","header-align":"center","show-overflow-tooltip":""}),e(d,{prop:"assemblyName",label:"程序集名称","header-align":"center","show-overflow-tooltip":""}),e(d,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),e(d,{label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:l(o=>[o.row.status===1?(s(),_(p,{key:0,type:"success"},{default:l(()=>[n("启用")]),_:1})):(s(),_(p,{key:1,type:"danger"},{default:l(()=>[n("禁用")]),_:1}))]),_:1}),e(d,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:l(o=>[e(Q,{placement:"bottom",width:"280",trigger:"hover"},{reference:l(()=>[e(g,{type:"primary"},{default:l(()=>[e(m,null,{default:l(()=>[e(M)]),_:1}),n("详情 ")]),_:1})]),default:l(()=>[e(I,{direction:"vertical",column:2,border:""},{default:l(()=>[e(y,{width:"140"},{label:l(()=>[e(g,null,{default:l(()=>[e(m,null,{default:l(()=>[e(C)]),_:1}),n("创建者 ")]),_:1})]),default:l(()=>[e(p,null,{default:l(()=>[n(b(o.row.createUserName??"无"),1)]),_:2},1024)]),_:2},1024),e(y,null,{label:l(()=>[e(g,null,{default:l(()=>[e(m,null,{default:l(()=>[e(x)]),_:1}),n("创建时间 ")]),_:1})]),default:l(()=>[e(p,null,{default:l(()=>[n(b(o.row.createTime??"无"),1)]),_:2},1024)]),_:2},1024),e(y,null,{label:l(()=>[e(g,null,{default:l(()=>[e(m,null,{default:l(()=>[e(C)]),_:1}),n("修改者 ")]),_:1})]),default:l(()=>[e(p,null,{default:l(()=>[n(b(o.row.updateUserName??"无"),1)]),_:2},1024)]),_:2},1024),e(y,null,{label:l(()=>[e(g,null,{default:l(()=>[e(m,null,{default:l(()=>[e(x)]),_:1}),n("修改时间 ")]),_:1})]),default:l(()=>[e(p,null,{default:l(()=>[n(b(o.row.updateTime??"无"),1)]),_:2},1024)]),_:2},1024),e(y,null,{label:l(()=>[e(g,null,{default:l(()=>[e(m,null,{default:l(()=>[e($)]),_:1}),n("备注 ")]),_:1})]),default:l(()=>[n(" "+b(o.row.remark),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),e(d,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:l(o=>[P((s(),_(f,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:L=>N(o.row)},{default:l(()=>[n(" 编辑 ")]),_:2},1032,["onClick"])),[[w,"sysPlugin:update"]]),P((s(),_(f,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:L=>U(o.row)},{default:l(()=>[n(" 删除 ")]),_:2},1032,["onClick"])),[[w,"sysPlugin:delete"]])]),_:1})]),_:1},8,["data"])),[[H,t.loading]]),e(j,{currentPage:t.tableParams.page,"onUpdate:currentPage":r[1]||(r[1]=o=>t.tableParams.page=o),"page-size":t.tableParams.pageSize,"onUpdate:pageSize":r[2]||(r[2]=o=>t.tableParams.pageSize=o),total:t.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:E,onCurrentChange:F,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),e(O,{ref_key:"editPluginRef",ref:v,title:t.editPluginTitle,onHandleQuery:u},null,8,["title"])])}}});export{oe as default};
