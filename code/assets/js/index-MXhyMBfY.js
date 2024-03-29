import{a as z}from"./authFunction-fIb3RNfc.js";import X from"./preview-J91Nyzbc.js";import{e as ee,p as le,d as ae,g as te}from"./editDialog-f097OoZz.js";import{k as B,r as p,t as s,a6 as I,x as r,M as T,D as e,A as l,y as u,G as _,a4 as oe,a5 as ne,B as w,S as b,O as re,T as se,F as R,ai as ue,E as pe}from"./store-mQZkmHj-.js";import{_ as ie}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-lw7p-_pG.js";import"./request--bhxBvPJ.js";const de={class:"appApiUrlMng-container"},me=B({name:"appApiUrlMng"}),ce=B({...me,setup(_e){const i=p(!1),N=p(),h=p(),k=p(!1),A=p([]),o=p({}),d=p({page:1,pageSize:10,total:0}),P=p(""),x=p(""),C=()=>{i.value=!i.value},m=async()=>{var t,y;k.value=!0;var n=await le(Object.assign(o.value,d.value));A.value=((t=n.data.result)==null?void 0:t.items)??[],d.value.total=(y=n.data.result)==null?void 0:y.total,k.value=!1},E=async n=>{o.value.field=n.prop,o.value.order=n.order,await m()},L=()=>{x.value="添加移动端-接口地址管理",h.value.openDialog({})},Y=n=>{x.value="编辑移动端-接口地址管理",h.value.openDialog(n)},F=n=>{ue.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await ae(n),m(),pe.success("删除成功")}).catch(()=>{})},O=n=>{d.value.pageSize=n,m()},Q=n=>{d.value.page=n,m()},V=p([]);return(async()=>{let n=await te();V.value=n.data.result??[]})(),m(),(n,t)=>{const y=s("el-input"),g=s("el-form-item"),f=s("el-col"),j=s("el-option"),q=s("el-select"),Z=s("el-input-number"),$=s("el-date-picker"),v=s("el-button"),M=s("el-button-group"),G=s("el-row"),W=s("el-form"),S=s("el-card"),c=s("el-table-column"),H=s("el-table"),J=s("el-pagination"),U=I("auth"),K=I("loading");return r(),T("div",de,[e(S,{shadow:"hover","body-style":{paddingBottom:"0"}},{default:l(()=>[e(W,{model:o.value,ref:"queryForm",labelWidth:"90"},{default:l(()=>[e(G,null,{default:l(()=>[e(f,{xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"公司名称"},{default:l(()=>[e(y,{modelValue:o.value.companyName,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.companyName=a),clearable:"",placeholder:"请输入公司名称"},null,8,["modelValue"])]),_:1})]),_:1}),i.value?(r(),u(f,{key:0,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"备注"},{default:l(()=>[e(y,{modelValue:o.value.remark,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value.remark=a),clearable:"",placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),i.value?(r(),u(f,{key:1,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"负责人"},{default:l(()=>[e(q,{clearable:"",filterable:"",modelValue:o.value.userID,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value.userID=a),placeholder:"请选择负责人"},{default:l(()=>[(r(!0),T(oe,null,ne(V.value,(a,D)=>(r(),u(j,{key:D,value:a.value,label:a.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):_("",!0),i.value?(r(),u(f,{key:2,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"接口地址"},{default:l(()=>[e(y,{modelValue:o.value.apiUrl,"onUpdate:modelValue":t[3]||(t[3]=a=>o.value.apiUrl=a),clearable:"",placeholder:"请输入接口地址"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),i.value?(r(),u(f,{key:3,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"使用次数"},{default:l(()=>[e(Z,{modelValue:o.value.useCount,"onUpdate:modelValue":t[4]||(t[4]=a=>o.value.useCount=a),clearable:"",placeholder:"请输入使用次数"},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),i.value?(r(),u(f,{key:4,xs:24,sm:12,md:12,lg:8,xl:4,class:"mb10"},{default:l(()=>[e(g,{label:"最后使用时间"},{default:l(()=>[e($,{placeholder:"请选择最后使用时间","value-format":"YYYY/MM/DD",type:"daterange",modelValue:o.value.lastUseTimeRange,"onUpdate:modelValue":t[5]||(t[5]=a=>o.value.lastUseTimeRange=a)},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),e(f,{xs:24,sm:12,md:12,lg:6,xl:6,class:"mb10"},{default:l(()=>[e(g,null,{default:l(()=>[e(M,null,{default:l(()=>[w((r(),u(v,{type:"primary",icon:"ele-Search",onClick:m},{default:l(()=>[b(" 查询 ")]),_:1})),[[U,"appApiUrlMng:page"]]),e(v,{icon:"ele-Refresh",onClick:t[6]||(t[6]=()=>o.value={})},{default:l(()=>[b(" 重置 ")]),_:1}),i.value?_("",!0):(r(),u(v,{key:0,icon:"ele-ZoomIn",onClick:C},{default:l(()=>[b(" 高级 ")]),_:1})),i.value?(r(),u(v,{key:1,icon:"ele-ZoomOut",onClick:C},{default:l(()=>[b(" 隐藏 ")]),_:1})):_("",!0)]),_:1}),e(M,{style:{"margin-left":"20px"}},{default:l(()=>[w((r(),u(v,{type:"primary",icon:"ele-Plus",onClick:L},{default:l(()=>[b(" 新增 ")]),_:1})),[[U,"appApiUrlMng:add"]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(S,{class:"full-table",shadow:"hover",style:{"margin-top":"8px"}},{default:l(()=>[w((r(),u(H,{data:A.value,style:{width:"100%"},"tooltip-effect":"light","row-key":"id",onSortChange:E,border:""},{default:l(()=>[e(c,{type:"index",label:"序号","min-width":"55",align:"center"}),e(c,{prop:"companyName",label:"公司名称","min-width":"140","show-overflow-tooltip":""}),e(c,{prop:"remark",label:"备注","min-width":"140","show-overflow-tooltip":""}),e(c,{prop:"userID",label:"负责人","min-width":"120","show-overflow-tooltip":""},{default:l(a=>[re("span",null,se(a.row.userIDRealName),1)]),_:1}),e(c,{prop:"apiUrl",label:"接口地址","min-width":"140","show-overflow-tooltip":""}),e(c,{prop:"useCount",label:"使用次数","min-width":"140","show-overflow-tooltip":""}),e(c,{prop:"lastUseTime",label:"最后使用时间","min-width":"90","show-overflow-tooltip":""}),R(z)("appApiUrlMng:edit")||R(z)("appApiUrlMng:delete")?(r(),u(c,{key:0,label:"操作","min-width":"140",align:"center",fixed:"right","show-overflow-tooltip":""},{default:l(a=>[w((r(),u(v,{icon:"ele-Edit",size:"small",text:"",type:"primary",onClick:D=>Y(a.row)},{default:l(()=>[b(" 编辑 ")]),_:2},1032,["onClick"])),[[U,"appApiUrlMng:edit"]]),w((r(),u(v,{icon:"ele-Delete",size:"small",text:"",type:"primary",onClick:D=>F(a.row)},{default:l(()=>[b(" 删除 ")]),_:2},1032,["onClick"])),[[U,"appApiUrlMng:delete"]])]),_:1})):_("",!0)]),_:1},8,["data"])),[[K,k.value]]),e(J,{currentPage:d.value.page,"onUpdate:currentPage":t[7]||(t[7]=a=>d.value.page=a),"page-size":d.value.pageSize,"onUpdate:pageSize":t[8]||(t[8]=a=>d.value.pageSize=a),total:d.value.total,"page-sizes":[10,20,50,100,200,500],small:"",background:"",onSizeChange:O,onCurrentChange:Q,layout:"total, sizes, prev, pager, next, jumper"},null,8,["currentPage","page-size","total"]),e(X,{ref_key:"printDialogRef",ref:N,title:P.value,onReloadTable:m},null,8,["title"]),e(ee,{ref_key:"editDialogRef",ref:h,title:x.value,onReloadTable:m},null,8,["title"])]),_:1})])}}}),ke=ie(ce,[["__scopeId","data-v-f632e3dd"]]);export{ke as default};