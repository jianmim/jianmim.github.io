import{_ as E,S as b}from"./editWeChatUser.vue_vue_type_script_setup_true_name_sysEditWeChatUser_lang-9DnwxItq.js";import{g as v}from"./index-zQlakb1H.js";import{k,r as I,L as Q,p as A,t as d,a6 as C,x as r,M,D as e,A as t,B as g,y as s,S as i,ai as $,E as R}from"./store-dof5ccn5.js";const j={class:"weChatUser-container"},O=k({name:"weChatUser"}),J=k({...O,setup(F){const h=I(),a=Q({loading:!1,weChatUserData:[],queryParams:{nickName:void 0,mobile:void 0},tableParams:{page:1,pageSize:20,total:0},editWeChatUserTitle:""});A(async()=>{m()});const m=async()=>{var _,u;a.loading=!0;let p=Object.assign(a.queryParams,a.tableParams);var o=await v(b).apiSysWechatUserPagePost(p);a.weChatUserData=((_=o.data.result)==null?void 0:_.items)??[],a.tableParams.total=(u=o.data.result)==null?void 0:u.total,a.loading=!1},P=()=>{a.queryParams.nickName=void 0,a.queryParams.mobile=void 0,m()},U=p=>{var o;a.editWeChatUserTitle="编辑微信账号",(o=h.value)==null||o.openDialog(p)},x=p=>{$.confirm(`确定删除微信账号：【${p.nickName}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await v(b).apiSysWechatUserDeletePost({id:p.id}),m(),R.success("删除成功")}).catch(()=>{})},z=p=>{a.tableParams.pageSize=p,m()},S=p=>{a.tableParams.page=p,m()};return(p,o)=>{const _=d("el-input"),u=d("el-form-item"),f=d("el-button"),W=d("el-button-group"),T=d("el-form"),w=d("el-card"),n=d("el-table-column"),c=d("el-tag"),q=d("el-avatar"),D=d("el-table"),B=d("el-pagination"),y=C("auth"),N=C("loading");return r(),M("div",j,[e(w,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:t(()=>[e(T,{model:a.queryParams,ref:"queryForm",inline:!0},{default:t(()=>[e(u,{label:"微信昵称"},{default:t(()=>[e(_,{modelValue:a.queryParams.nickName,"onUpdate:modelValue":o[0]||(o[0]=l=>a.queryParams.nickName=l),placeholder:"微信昵称",clearable:""},null,8,["modelValue"])]),_:1}),e(u,{label:"手机号码"},{default:t(()=>[e(_,{modelValue:a.queryParams.mobile,"onUpdate:modelValue":o[1]||(o[1]=l=>a.queryParams.mobile=l),placeholder:"手机号码",clearable:""},null,8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(W,null,{default:t(()=>[g((r(),s(f,{type:"primary",icon:"ele-Search",onClick:m},{default:t(()=>[i(" 查询 ")]),_:1})),[[y,"sysWechatUser:page"]]),e(f,{icon:"ele-Refresh",onClick:P},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(w,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:t(()=>[g((r(),s(D,{data:a.weChatUserData,style:{width:"100%"},border:""},{default:t(()=>[e(n,{type:"index",label:"序号",width:"55",align:"center"}),e(n,{prop:"openId",label:"OpenId",align:"center","show-overflow-tooltip":""}),e(n,{prop:"unionId",label:"UnionId",align:"center","show-overflow-tooltip":""}),e(n,{prop:"platformType",label:"平台类型",width:"110",align:"center","show-overflow-tooltip":""},{default:t(l=>[l.row.platformType===1?(r(),s(c,{key:0},{default:t(()=>[i(" 微信公众号 ")]),_:1})):l.row.platformType===2?(r(),s(c,{key:1},{default:t(()=>[i(" 微信小程序 ")]),_:1})):l.row.platformType===3?(r(),s(c,{key:2},{default:t(()=>[i(" QQ ")]),_:1})):l.row.platformType===4?(r(),s(c,{key:3},{default:t(()=>[i(" Alipay ")]),_:1})):l.row.platformType===5?(r(),s(c,{key:4},{default:t(()=>[i(" Gitee ")]),_:1})):(r(),s(c,{key:5},{default:t(()=>[i(" 未知 ")]),_:1}))]),_:1}),e(n,{prop:"nickName",label:"昵称",align:"center","show-overflow-tooltip":""}),e(n,{prop:"avatar",label:"头像",width:"70",align:"center"},{default:t(l=>[e(q,{src:l.row.avatar,size:24,style:{"vertical-align":"middle"}},null,8,["src"])]),_:1}),e(n,{prop:"mobile",label:"手机号码",align:"center","show-overflow-tooltip":""}),e(n,{prop:"sex",label:"性别",width:"60",align:"center","show-overflow-tooltip":""},{default:t(l=>[l.row.sex===0?(r(),s(c,{key:0},{default:t(()=>[i(" 男 ")]),_:1})):(r(),s(c,{key:1,type:"danger"},{default:t(()=>[i(" 女 ")]),_:1}))]),_:1}),e(n,{prop:"city",label:"城市",align:"center","show-overflow-tooltip":""}),e(n,{prop:"province",label:"省",align:"center","show-overflow-tooltip":""}),e(n,{prop:"country",label:"国家",align:"center","show-overflow-tooltip":""}),e(n,{label:"操作",width:"140",fixed:"right",align:"center","show-overflow-tooltip":""},{default:t(l=>[g((r(),s(f,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:V=>U(l.row)},{default:t(()=>[i(" 编辑 ")]),_:2},1032,["onClick"])),[[y,"sysWechatUser:update"]]),g((r(),s(f,{icon:"ele-Delete",size:"small",text:"",type:"danger",onClick:V=>x(l.row)},{default:t(()=>[i(" 删除 ")]),_:2},1032,["onClick"])),[[y,"sysWechatUser:delete"]])]),_:1})]),_:1},8,["data"])),[[N,a.loading]]),e(B,{currentPage:a.tableParams.page,"onUpdate:currentPage":o[2]||(o[2]=l=>a.tableParams.page=l),"page-size":a.tableParams.pageSize,"onUpdate:pageSize":o[3]||(o[3]=l=>a.tableParams.pageSize=l),total:a.tableParams.total,"page-sizes":[10,20,50,100],small:"",background:"",onSizeChange:z,onCurrentChange:S,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"])]),_:1}),e(E,{ref_key:"editWeChatUserRef",ref:h,title:a.editWeChatUserTitle,onHandleQuery:m},null,8,["title"])])}}});export{J as default};
