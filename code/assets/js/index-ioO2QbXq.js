import{k as m,r as I,L as S,p as R,t as e,x as i,M as u,D as o,A as n,a4 as B,a5 as L,O as t,S as M,n as j,aa as p,y as q,Z as d,T as _,P as z,X as T,Y as V}from"./store-dof5ccn5.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";const f=s=>(T("data-v-b3a01b07"),s=s(),V(),s),D={class:"layout-pd"},E={class:"countup-card-item-title pb3"},U=f(()=>t("div",{class:"countup-card-item-title-num pb6"},null,-1)),F={class:"countup-card-item-tip pb3"},O=f(()=>t("div",{class:"countup-card-item-tip-num"},null,-1)),P={class:"flex-warp"},X={class:"flex-warp-item"},Y={class:"flex-warp-item-box"},Z=m({name:"funCountup"}),$=m({...Z,setup(s){const l=I([]),h=S({topCardItemList:[{title:"今日访问人数",titleNum:"123",tip:"在场人数",tipNum:"911",color:"--el-color-primary",iconColor:"#ffcb47",icon:"iconfont icon-jinridaiban"},{title:"实验室总数",titleNum:"123",tip:"使用中",tipNum:"611",color:"--el-color-success",iconColor:"#70cf41",icon:"iconfont icon-AIshiyanshi"},{title:"申请人数（月）",titleNum:"123",tip:"通过人数",tipNum:"911",color:"--el-color-warning",iconColor:"#dfae64",icon:"iconfont icon-shenqingkaiban"},{title:"销售情况",titleNum:"123",tip:"销售数",tipNum:"911",color:"--el-color-danger",iconColor:"#e56565",icon:"iconfont icon-ditu"}]}),r=()=>{j(()=>{l.value.forEach(a=>{new p(a.querySelector(".countup-card-item-title-num"),Math.random()*1e4).start(),new p(a.querySelector(".countup-card-item-tip-num"),Math.random()*1e3).start()})})},b=()=>{r()};return R(()=>{r()}),(a,G)=>{const C=e("el-alert"),y=e("el-col"),x=e("el-row"),v=e("ele-RefreshRight"),N=e("el-icon"),g=e("el-button"),k=e("el-card");return i(),u("div",D,[o(k,{shadow:"hover",header:"数字滚动演示"},{default:n(()=>[o(C,{title:"感谢优秀的 `countup.js`，项目地址：https://github.com/inorganik/countUp.js",type:"success",closable:!1,class:"mb15"}),o(x,{gutter:20},{default:n(()=>[(i(!0),u(B,null,L(h.topCardItemList,(c,w)=>(i(),q(y,{sm:6,class:"mb15",key:w},{default:n(()=>[t("div",{class:"countup-card-item countup-card-item-box",style:d({background:`var(${c.color})`})},[t("div",{class:"countup-card-item-flex",ref_for:!0,ref_key:"topCardItemRefs",ref:l},[t("div",E,_(c.title),1),U,t("div",F,_(c.tip),1),O],512),t("i",{class:z(c.icon),style:d({color:c.iconColor})},null,6)],4)]),_:2},1024))),128))]),_:1}),t("div",P,[t("div",X,[t("div",Y,[o(g,{type:"primary",size:"default",onClick:b},{default:n(()=>[o(N,null,{default:n(()=>[o(v)]),_:1}),M(" 重置/刷新数值 ")]),_:1})])])])]),_:1})])}}}),K=A($,[["__scopeId","data-v-b3a01b07"]]);export{K as default};
