import{g as y}from"./index-zQlakb1H.js";import{S as v}from"./sys-job-api-81hlTwQe.js";import{k as _,L as h,p as C,t as r,a6 as V,x as l,M as x,D as t,A as o,B as k,y as n,S as d,G as c}from"./store-dof5ccn5.js";const D={class:"sys-jobCluster-container"},L=_({name:"sysJobCluster"}),N=_({...L,setup(j,{expose:m}){const e=h({loading:!1,isVisible:!1,jobClusterList:[]});C(async()=>{b()});const b=async()=>{e.loading=!0;var p=await y(v).apiSysJobJobClusterListGet();e.jobClusterList=p.data.result??[],e.loading=!1};return m({openDrawer:()=>{e.isVisible=!0}}),(p,u)=>{const a=r("el-table-column"),i=r("el-tag"),w=r("el-table"),f=r("el-drawer"),g=V("loading");return l(),x("div",D,[t(f,{modelValue:e.isVisible,"onUpdate:modelValue":u[0]||(u[0]=s=>e.isVisible=s),title:"作业集群",size:"40%"},{default:o(()=>[k((l(),n(w,{data:e.jobClusterList,style:{width:"100%",margin:"8px"},border:""},{default:o(()=>[t(a,{type:"index",label:"序号",width:"55",align:"center"}),t(a,{prop:"clusterId",label:"集群编号","header-align":"center","show-overflow-tooltip":""}),t(a,{prop:"status",label:"状态",align:"center","show-overflow-tooltip":""},{default:o(s=>[s.row.status==0?(l(),n(i,{key:0},{default:o(()=>[d(" 宕机 ")]),_:1})):c("",!0),s.row.status==1?(l(),n(i,{key:1},{default:o(()=>[d(" 工作中 ")]),_:1})):c("",!0),s.row.status==2?(l(),n(i,{key:2},{default:o(()=>[d(" 等待被唤醒 ")]),_:1})):c("",!0)]),_:1}),t(a,{prop:"description",label:"描述","header-align":"center","show-overflow-tooltip":""}),t(a,{prop:"updatedTime ",label:"更新时间",align:"center","show-overflow-tooltip":""})]),_:1},8,["data"])),[[g,e.loading]])]),_:1},8,["modelValue"])])}}});export{N as _};
