import{k as E,r as m,L as F,p as G,w as I,t as l,a6 as K,x as h,y as M,A as o,O as d,D as a,F as g,aE as z,S as i,aF as O,B as P,M as U}from"./store-dof5ccn5.js";import{g as v}from"./index-zQlakb1H.js";import{S as y}from"./sys-region-api-6q5-maV7.js";import{_ as j}from"./_plugin-vue_export-helper-x3n3nnut.js";const q={class:"card-header"},H={class:"tree-h-flex"},J={class:"tree-h-left"},Q={class:"tree-h-right"},W={style:{"margin-bottom":"45px"}},X=E({__name:"regionTree",emits:["node-click"],setup(Y,{expose:x,emit:w}){const c=m(""),n=m(),s=F({loading:!1,regionData:[]});G(()=>{_()}),I(c,e=>{n.value.filter(e)});const _=async()=>{s.loading=!0;var e=await v(y).apiSysRegionListGet(0);s.regionData=e.data.result??[],s.loading=!1},k=async(e,t)=>{if(!(e.data==null||Array.isArray(e.data))){s.loading=!0;var f=await v(y).apiSysRegionListGet(e.data.id),p=f.data.result??[];s.loading=!1,t(p)}},A=()=>n.value.getCheckedKeys(),N=(e,t)=>e?t.name.includes(e):!0,C=async e=>{if(e=="expandAll")for(let t=0;t<n.value.store._getAllNodes().length;t++)n.value.store._getAllNodes()[t].expanded=!0;else if(e=="collapseAll")for(let t=0;t<n.value.store._getAllNodes().length;t++)n.value.store._getAllNodes()[t].expanded=!1;else e=="refresh"?_():e=="rootNode"&&u("node-click",{id:0,name:""})},u=w,D=e=>{u("node-click",{id:e.id,name:e.name})};return x({initTreeData:_,getCheckedKeys:A}),(e,t)=>{const f=l("el-input"),p=l("el-icon"),b=l("el-button"),r=l("el-dropdown-item"),R=l("el-dropdown-menu"),V=l("el-dropdown"),B=l("el-tree"),S=l("el-card"),T=K("loading");return h(),M(S,{class:"box-card",shadow:"hover",style:{height:"100%"},"body-style":"height:100%; overflow:auto"},{header:o(()=>[d("div",q,[d("div",H,[d("div",J,[a(f,{"prefix-icon":g(z),modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=L=>c.value=L),placeholder:"行政区域名称"},null,8,["prefix-icon","modelValue"])]),d("div",Q,[a(V,{onCommand:C},{dropdown:o(()=>[a(R,null,{default:o(()=>[a(r,{command:"expandAll"},{default:o(()=>[i("全部展开")]),_:1}),a(r,{command:"collapseAll"},{default:o(()=>[i("全部折叠")]),_:1}),a(r,{command:"rootNode"},{default:o(()=>[i("根节点")]),_:1}),a(r,{command:"refresh"},{default:o(()=>[i("刷新")]),_:1})]),_:1})]),default:o(()=>[a(b,{style:{"margin-left":"8px",width:"34px"}},{default:o(()=>[a(p,{class:"el-icon--center"},{default:o(()=>[a(g(O))]),_:1})]),_:1})]),_:1})])])])]),default:o(()=>[P((h(),U("div",W,[a(B,{ref_key:"treeRef",ref:n,class:"filter-tree",data:s.regionData,"node-key":"id",props:{children:"children",label:"name"},"filter-node-method":N,onNodeClick:D,"highlight-current":"","check-strictly":"",accordion:"",lazy:"",load:k},null,8,["data"])])),[[T,s.loading]])]),_:1})}}}),oe=j(X,[["__scopeId","data-v-e16f46e7"]]);export{oe as default};
