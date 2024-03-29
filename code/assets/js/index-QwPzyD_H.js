import O from"./editPrint-HZ7NWgfv.js";import{g as S}from"./index-zQlakb1H.js";import{S as z}from"./sys-print-api-JeTJ4IRT.js";import{k as D,r as G,L as J,p as K,t as a,a6 as T,x as s,M as W,D as t,A as e,B as P,y as u,S as n,T as b,ai as X,E as Y}from"./store-dof5ccn5.js";import"./index-f4jHO7Jy.js";import"./preview-0euLzwVu.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const Z={class:"sys-print-container"},ee=D({name:"sysPrint"}),de=D({...ee,setup(te){const v=G(),l=J({loading:!1,printData:[],queryParams:{name:void 0},tableParams:{page:1,pageSize:10,total:0},editPrintTitle:""});K(async()=>{d()});const d=async()=>{var h,_;l.loading=!0;let r=Object.assign(l.queryParams,l.tableParams);var i=await S(z).apiSysPrintPagePost(r);l.printData=((h=i.data.result)==null?void 0:h.items)??[],l.tableParams.total=(_=i.data.result)==null?void 0:_.total,l.loading=!1},B=()=>{l.queryParams.name=void 0,d()},q=()=>{var r;l.editPrintTitle="添加打印模板",(r=v.value)==null||r.openDialog({})},E=r=>{var i;l.editPrintTitle="编辑打印模板",(i=v.value)==null||i.openDialog(r)},U=r=>{X.confirm(`确定删除打印模板：【${r.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await S(z).apiSysPrintDeletePost({id:r.id}),d(),Y.success("删除成功")}).catch(()=>{})},F=r=>{l.tableParams.pageSize=r,d()},N=r=>{l.tableParams.page=r,d()};return(r,i)=>{const h=a("el-input"),_=a("el-form-item"),g=a("el-button"),V=a("el-button-group"),A=a("el-form"),k=a("el-card"),c=a("el-table-column"),p=a("el-tag"),M=a("ele-InfoFilled"),m=a("el-icon"),f=a("el-text"),C=a("ele-UserFilled"),y=a("el-descriptions-item"),x=a("ele-Calendar"),I=a("ele-Tickets"),Q=a("el-descriptions"),R=a("el-popover"),$=a("el-table"),j=a("el-pagination"),w=T("auth"),H=T("loading");return s(),W("div",Z,[t(k,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:e(()=>[t(A,{model:l.queryParams,ref:"queryForm",inline:!0},{default:e(()=>[t(_,{label:"模板名称"},{default:e(()=>[t(h,{modelValue:l.queryParams.name,"onUpdate:modelValue":i[0]||(i[0]=o=>l.queryParams.name=o),placeholder:"模板名称",clearable:""},null,8,["modelValue"])]),_:1}),t(_,null,{default:e(()=>[t(V,null,{default:e(()=>[P((s(),u(g,{type:"primary",icon:"ele-Search",onClick:d},{default:e(()=>[n(" 查询 ")]),_:1})),[[w,"sysPrint:page"]]),t(g,{icon:"ele-Refresh",onClick:B},{default:e(()=>[n(" 重置 ")]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[P((s(),u(g,{type:"primary",icon:"ele-Plus",onClick:q},{default:e(()=>[n(" 新增 ")]),_:1})),[[w,"sysPrint:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),t(k,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:e(()=>[P((s(),u($,{data:l.printData,style:{width:"100%"},border:""},{default:e(()=>[t(c,{type:"index",label:"序号",width:"55",align:"center",fixed:""}),t(c,{prop:"name",label:"名称","header-align":"center","show-overflow-tooltip":""}),t(c,{prop:"orderNo",label:"排序",align:"center","show-overflow-tooltip":""}),t(c,{label:"状态",align:"center","show-overflow-tooltip":""},{default:e(o=>[o.row.status===1?(s(),u(p,{key:0,type:"success"},{default:e(()=>[n("启用")]),_:1})):(s(),u(p,{key:1,type:"danger"},{default:e(()=>[n("禁用")]),_:1}))]),_:1}),t(c,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:e(o=>[t(R,{placement:"bottom",width:"280",trigger:"hover"},{reference:e(()=>[t(f,{type:"primary"},{default:e(()=>[t(m,null,{default:e(()=>[t(M)]),_:1}),n("详情 ")]),_:1})]),default:e(()=>[t(Q,{direction:"vertical",column:2,border:""},{default:e(()=>[t(y,{width:"140"},{label:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(C)]),_:1}),n("创建者 ")]),_:1})]),default:e(()=>[t(p,null,{default:e(()=>[n(b(o.row.createUserName??"无"),1)]),_:2},1024)]),_:2},1024),t(y,null,{label:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(x)]),_:1}),n("创建时间 ")]),_:1})]),default:e(()=>[t(p,null,{default:e(()=>[n(b(o.row.createTime??"无"),1)]),_:2},1024)]),_:2},1024),t(y,null,{label:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(C)]),_:1}),n("修改者 ")]),_:1})]),default:e(()=>[t(p,null,{default:e(()=>[n(b(o.row.updateUserName??"无"),1)]),_:2},1024)]),_:2},1024),t(y,null,{label:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(x)]),_:1}),n("修改时间 ")]),_:1})]),default:e(()=>[t(p,null,{default:e(()=>[n(b(o.row.updateTime??"无"),1)]),_:2},1024)]),_:2},1024),t(y,null,{label:e(()=>[t(f,null,{default:e(()=>[t(m,null,{default:e(()=>[t(I)]),_:1}),n("备注 ")]),_:1})]),default:e(()=>[n(" "+b(o.row.remark),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),t(c,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:e(o=>[P((s(),u(g,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:L=>E(o.row)},{default:e(()=>[n(" 编辑 ")]),_:2},1032,["onClick"])),[[w,"sysPrint:update"]]),P((s(),u(g,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:L=>U(o.row)},{default:e(()=>[n(" 删除 ")]),_:2},1032,["onClick"])),[[w,"sysPrint:delete"]])]),_:1})]),_:1},8,["data"])),[[H,l.loading]]),t(j,{currentPage:l.tableParams.page,"onUpdate:currentPage":i[1]||(i[1]=o=>l.tableParams.page=o),"page-size":l.tableParams.pageSize,"onUpdate:pageSize":i[2]||(i[2]=o=>l.tableParams.pageSize=o),total:l.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:F,onCurrentChange:N,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),t(O,{ref_key:"editPrintRef",ref:v,title:l.editPrintTitle,onHandleQuery:d},null,8,["title"])])}}});export{de as default};