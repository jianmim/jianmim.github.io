import{s}from"./store-dof5ccn5.js";import{f as a}from"./index-zQlakb1H.js";import{s as o}from"./request-k9quR_KD.js";const i=a(),{dictList:n}=s(i);function I(t,r){const e=n.value.filter(c=>c.code===t);if(e.length===0)return null;const d=e[0].children.filter(c=>c.code==r);return d.length===0?null:d[0]}function l(t){const r=n.value.filter(e=>e.code===t);return r.length===0?null:r[0]}function m(t){var e;return((e=l(t))==null?void 0:e.children)??[]}const g=t=>o({url:"/api/licRecordInfo/add",method:"post",data:t}),R=t=>o({url:"/api/licRecordInfo/delete",method:"post",data:t}),h=t=>o({url:"/api/licRecordInfo/update",method:"post",data:t}),D=t=>o({url:"/api/licRecordInfo/page",method:"post",data:t}),L=t=>o({url:"/api/licRecordInfo/detail",method:"get",data:{id:t}}),y=()=>o({url:"/api/licRecordInfo/SysUserApplyUserIdDropdown",method:"get"});export{g as a,y as b,I as c,L as d,R as e,m as g,D as p,h as u};
