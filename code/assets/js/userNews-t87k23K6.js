import{k as b,L as C,t as s,x as l,M as r,D as e,A as t,O as n,a4 as B,a5 as L,B as T,T as _,F as I,C as A,y as D,G as P,S as F,X as H,Y as M}from"./store-dof5ccn5.js";import{$,g as U}from"./index-zQlakb1H.js";import{c as E}from"./commonFunction-gGlUyf--.js";import{S as G}from"./sys-notice-api-Ah_QpBKb.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./formatTime-sb5Dmd3Z.js";const f=i=>(H("data-v-5270b9b6"),i=i(),M(),i),R={class:"user-news-container"},X=f(()=>n("span",{style:{"margin-left":"5px"}},"站内信",-1)),Y={class:"notice-box"},j=["onClick"],q={class:"notice-title"},z={class:"notice-content"},J={class:"notice-time"},K=f(()=>n("span",{style:{"margin-left":"5px"}},"我的",-1)),Q={style:{height:"400px","overflow-y":"auto","padding-right":"10px"}},W=["innerHTML"],Z={class:"dialog-footer"},ee=b({name:"layoutBreadcrumbUserNews"}),te=b({...ee,props:{noticeList:Array},setup(i){const{removeHtmlSub:g}=E(),a=C({dialogVisible:!1,content:""}),h=()=>{$.push("/dashboard/notice")},y=async c=>{a.content=c.content,a.dialogVisible=!0,c.readStatus=1,await U(G).apiSysNoticeSetReadPost({id:c.id})};return(c,d)=>{const v=s("ele-Bell"),p=s("el-icon"),x=s("el-divider"),m=s("el-empty"),u=s("el-tab-pane"),S=s("ele-Position"),k=s("el-tabs"),V=s("el-button"),w=s("el-dialog");return l(),r("div",R,[e(k,{stretch:"",class:"content-box"},{default:t(()=>[e(u,{label:"站内信"},{label:t(()=>[e(p,null,{default:t(()=>[e(v)]),_:1}),X]),default:t(()=>[n("div",Y,[i.noticeList.length>0?(l(!0),r(B,{key:0},L(i.noticeList,(o,N)=>T((l(),r("div",{class:"notice-item",key:N,onClick:oe=>y(o)},[n("div",q,_(o.type==1?"【通知】":"【公告】")+_(o.title),1),n("div",z,_(I(g)(o.content)),1),n("div",J,_(o.publicTime),1),e(x,{"border-style":"dashed",style:{margin:"10px 0"}})],8,j)),[[A,o.readStatus!=1]])),128)):(l(),D(m,{key:1,description:"空"}))]),i.noticeList.length>0?(l(),r("div",{key:0,class:"notice-foot",onClick:h},"前往通知中心")):P("",!0)]),_:1}),e(u,{label:"我的"},{label:t(()=>[e(p,null,{default:t(()=>[e(S)]),_:1}),K]),default:t(()=>[n("div",Q,[e(m,{description:"空"})])]),_:1})]),_:1}),e(w,{modelValue:a.dialogVisible,"onUpdate:modelValue":d[1]||(d[1]=o=>a.dialogVisible=o),title:"消息详情",draggable:"",width:"769px"},{footer:t(()=>[n("span",Z,[e(V,{type:"primary",onClick:d[0]||(d[0]=o=>a.dialogVisible=!1)},{default:t(()=>[F("确认")]),_:1})])]),default:t(()=>[n("p",{innerHTML:a.content},null,8,W)]),_:1},8,["modelValue"])])}}}),de=O(te,[["__scopeId","data-v-5270b9b6"]]);export{de as default};
