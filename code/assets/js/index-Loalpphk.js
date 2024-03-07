import{a as z}from"./authFunction-Sl3GZ0Ah.js";import ee from"./editRole-9Yi2zd9Z.js";import{_ as le}from"./grantData.vue_vue_type_script_setup_true_name_sysGrantData_lang-p5omaNr2.js";import{g as T}from"./index-xdJ7pE-g.js";import{S as q}from"./sys-role-api-kfGN22Gz.js";import{k as E,r as B,L as te,p as ae,t as n,a6 as V,x as i,M as oe,D as l,A as e,B as v,y as u,S as o,G as ne,T as b,F as U,ai as re,E as de}from"./store-dof5ccn5.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./orgTree-guTnitiD.js";import"./sys-org-api-Edv2nJUp.js";const ie={class:"sys-role-container"},se=E({name:"sysRole"}),ve=E({...se,setup(ue){const h=B(),k=B(),t=te({loading:!1,roleData:[],queryParams:{name:void 0,code:void 0},tableParams:{page:1,pageSize:20,total:0},editRoleTitle:""});ae(async()=>{c()});const c=async()=>{var g,p;t.loading=!0;let d=Object.assign(t.queryParams,t.tableParams);var r=await T(q).apiSysRolePagePost(d);t.roleData=((g=r.data.result)==null?void 0:g.items)??[],t.tableParams.total=(p=r.data.result)==null?void 0:p.total,t.loading=!1},F=()=>{t.queryParams.name=void 0,t.queryParams.code=void 0,c()},N=()=>{var d;t.editRoleTitle="添加角色",(d=h.value)==null||d.openDialog({id:void 0,status:1,orderNo:100})},M=async d=>{var r;t.editRoleTitle="编辑角色",(r=h.value)==null||r.openDialog(d)},$=d=>{var r;(r=k.value)==null||r.openDialog(d)},A=d=>{re.confirm(`确定删角色：【${d.name}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await T(q).apiSysRoleDeletePost({id:d.id}),c(),de.success("删除成功")}).catch(()=>{})},Q=d=>{t.tableParams.pageSize=d,c()},I=d=>{t.tableParams.page=d,c()};return(d,r)=>{const g=n("el-input"),p=n("el-form-item"),y=n("el-button"),j=n("el-button-group"),G=n("el-form"),R=n("el-card"),_=n("el-table-column"),s=n("el-tag"),H=n("ele-InfoFilled"),m=n("el-icon"),f=n("el-text"),C=n("ele-UserFilled"),w=n("el-descriptions-item"),S=n("ele-Calendar"),O=n("ele-Tickets"),L=n("el-descriptions"),J=n("el-popover"),x=n("el-dropdown-item"),K=n("el-dropdown-menu"),W=n("el-dropdown"),X=n("el-table"),Y=n("el-pagination"),P=V("auth"),Z=V("loading");return i(),oe("div",ie,[l(R,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:e(()=>[l(G,{model:t.queryParams,ref:"queryForm",inline:!0},{default:e(()=>[l(p,{label:"角色名称"},{default:e(()=>[l(g,{modelValue:t.queryParams.name,"onUpdate:modelValue":r[0]||(r[0]=a=>t.queryParams.name=a),placeholder:"角色名称",clearable:""},null,8,["modelValue"])]),_:1}),l(p,{label:"角色编码"},{default:e(()=>[l(g,{modelValue:t.queryParams.code,"onUpdate:modelValue":r[1]||(r[1]=a=>t.queryParams.code=a),placeholder:"角色编码",clearable:""},null,8,["modelValue"])]),_:1}),l(p,null,{default:e(()=>[l(j,null,{default:e(()=>[v((i(),u(y,{type:"primary",icon:"ele-Search",onClick:c},{default:e(()=>[o(" 查询 ")]),_:1})),[[P,"sysRole:page"]]),l(y,{icon:"ele-Refresh",onClick:F},{default:e(()=>[o(" 重置 ")]),_:1})]),_:1})]),_:1}),l(p,null,{default:e(()=>[v((i(),u(y,{type:"primary",icon:"ele-Plus",onClick:N},{default:e(()=>[o(" 新增 ")]),_:1})),[[P,"sysRole:add"]])]),_:1})]),_:1},8,["model"])]),_:1}),l(R,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:e(()=>[v((i(),u(X,{data:t.roleData,style:{width:"100%"},border:""},{default:e(()=>[l(_,{type:"index",label:"序号",width:"55",align:"center",fixed:""}),l(_,{prop:"name",label:"角色名称",align:"center","show-overflow-tooltip":""}),l(_,{prop:"code",label:"角色编码",align:"center","show-overflow-tooltip":""}),l(_,{label:"数据范围",align:"center","show-overflow-tooltip":""},{default:e(a=>[a.row.dataScope===1?(i(),u(s,{key:0,effect:"plain"},{default:e(()=>[o("全部数据")]),_:1})):a.row.dataScope===2?(i(),u(s,{key:1,effect:"plain"},{default:e(()=>[o("本部门及以下数据")]),_:1})):a.row.dataScope===3?(i(),u(s,{key:2,effect:"plain"},{default:e(()=>[o("本部门数据")]),_:1})):a.row.dataScope===4?(i(),u(s,{key:3,effect:"plain"},{default:e(()=>[o("仅本人数据")]),_:1})):a.row.dataScope===5?(i(),u(s,{key:4,effect:"plain"},{default:e(()=>[o("自定义数据")]),_:1})):ne("",!0)]),_:1}),l(_,{prop:"orderNo",label:"排序",width:"70",align:"center","show-overflow-tooltip":""}),l(_,{label:"状态",width:"70",align:"center","show-overflow-tooltip":""},{default:e(a=>[a.row.status===1?(i(),u(s,{key:0,type:"success"},{default:e(()=>[o("启用")]),_:1})):(i(),u(s,{key:1,type:"danger"},{default:e(()=>[o("禁用")]),_:1}))]),_:1}),l(_,{label:"修改记录",width:"100",align:"center","show-overflow-tooltip":""},{default:e(a=>[l(J,{placement:"bottom",width:"280",trigger:"hover"},{reference:e(()=>[l(f,{type:"primary"},{default:e(()=>[l(m,null,{default:e(()=>[l(H)]),_:1}),o("详情 ")]),_:1})]),default:e(()=>[l(L,{direction:"vertical",column:2,border:""},{default:e(()=>[l(w,{width:"140"},{label:e(()=>[l(f,null,{default:e(()=>[l(m,null,{default:e(()=>[l(C)]),_:1}),o("创建者 ")]),_:1})]),default:e(()=>[l(s,null,{default:e(()=>[o(b(a.row.createUserName??"无"),1)]),_:2},1024)]),_:2},1024),l(w,null,{label:e(()=>[l(f,null,{default:e(()=>[l(m,null,{default:e(()=>[l(S)]),_:1}),o("创建时间 ")]),_:1})]),default:e(()=>[l(s,null,{default:e(()=>[o(b(a.row.createTime??"无"),1)]),_:2},1024)]),_:2},1024),l(w,null,{label:e(()=>[l(f,null,{default:e(()=>[l(m,null,{default:e(()=>[l(C)]),_:1}),o("修改者 ")]),_:1})]),default:e(()=>[l(s,null,{default:e(()=>[o(b(a.row.updateUserName??"无"),1)]),_:2},1024)]),_:2},1024),l(w,null,{label:e(()=>[l(f,null,{default:e(()=>[l(m,null,{default:e(()=>[l(S)]),_:1}),o("修改时间 ")]),_:1})]),default:e(()=>[l(s,null,{default:e(()=>[o(b(a.row.updateTime??"无"),1)]),_:2},1024)]),_:2},1024),l(w,null,{label:e(()=>[l(f,null,{default:e(()=>[l(m,null,{default:e(()=>[l(O)]),_:1}),o("备注 ")]),_:1})]),default:e(()=>[o(" "+b(a.row.remark),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),l(_,{label:"操作",width:"110",fixed:"right",align:"center","show-overflow-tooltip":""},{default:e(a=>[v((i(),u(y,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:D=>M(a.row)},{default:e(()=>[o(" 编辑 ")]),_:2},1032,["onClick"])),[[P,"sysRole:update"]]),l(W,null,{dropdown:e(()=>[l(K,null,{default:e(()=>[l(x,{icon:"ele-OfficeBuilding",onClick:D=>$(a.row),disabled:!U(z)("sysRole:grantDataScope")},{default:e(()=>[o(" 数据范围 ")]),_:2},1032,["onClick","disabled"]),l(x,{icon:"ele-Delete",onClick:D=>A(a.row),divided:"",disabled:!U(z)("sysRole:delete")},{default:e(()=>[o(" 删除角色 ")]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),default:e(()=>[l(y,{icon:"ele-MoreFilled",size:"small",text:"",type:"primary",style:{"padding-left":"12px"}})]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[Z,t.loading]]),l(Y,{currentPage:t.tableParams.page,"onUpdate:currentPage":r[2]||(r[2]=a=>t.tableParams.page=a),"page-size":t.tableParams.pageSize,"onUpdate:pageSize":r[3]||(r[3]=a=>t.tableParams.pageSize=a),total:t.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:Q,onCurrentChange:I,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),l(ee,{ref_key:"editRoleRef",ref:h,title:t.editRoleTitle,onHandleQuery:c},null,8,["title"]),l(le,{ref_key:"grantDataRef",ref:k,onHandleQuery:c},null,512)])}}});export{ve as default};
