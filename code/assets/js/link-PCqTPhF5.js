import{k as c,u as _,L as u,w as p,t as r,x as m,M as f,O as o,T as k,D as h,A as w,X as v,Y as y}from"./store-dof5ccn5.js";import{b as g}from"./index-xdJ7pE-g.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";const e=s=>(v("data-v-6c4f31f3"),s=s(),y(),s),x={class:"layout-padding layout-link-container"},C={class:"layout-padding-auto layout-padding-view"},I={class:"layout-link-warp"},S=e(()=>o("i",{class:"layout-link-icon iconfont icon-xingqiu"},null,-1)),$={class:"layout-link-msg"},b=e(()=>o("i",{class:"iconfont icon-lianjie"},null,-1)),B=e(()=>o("span",null,"立即前往体验",-1)),V=c({name:"layoutLinkView"}),D=c({...V,setup(s){const i=_(),t=u({title:"",isLink:""}),l=()=>{const{origin:n,pathname:a}=window.location;g(t.isLink)?window.open(t.isLink):window.open(`${n}${a}#${t.isLink}`)};return p(()=>i.path,()=>{t.title=i.meta.title,t.isLink=i.meta.isLink},{immediate:!0}),(n,a)=>{const d=r("el-button");return m(),f("div",x,[o("div",C,[o("div",I,[S,o("div",$,'页面 "'+k(n.$t(t.title))+'" 已在新窗口中打开',1),h(d,{class:"mt30",round:"",size:"default",onClick:l},{default:w(()=>[b,B]),_:1})])])])}}}),z=L(D,[["__scopeId","data-v-6c4f31f3"]]);export{z as default};
