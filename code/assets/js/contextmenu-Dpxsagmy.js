import{k as m,L as g,l as y,p as v,q as L,w as I,t as M,x as o,y as S,A as V,B as b,M as a,Z as d,O as i,a4 as u,a5 as E,D as B,T as W,G as $,C as D,W as O}from"./store-mQZkmHj-.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";const A={class:"el-dropdown-menu"},N=["onClick"],j=m({name:"layoutTagsViewContextmenu"}),z=m({...j,props:{dropdown:{type:Object,default:()=>({x:0,y:0})}},emits:["currentContextmenuClick"],setup(p,{expose:f,emit:x}){const n=p,w=x,e=g({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"message.tagsView.refresh",affix:!1,icon:"ele-RefreshRight"},{contextMenuClickId:1,txt:"message.tagsView.close",affix:!1,icon:"ele-Close"},{contextMenuClickId:2,txt:"message.tagsView.closeOther",affix:!1,icon:"ele-CircleClose"},{contextMenuClickId:3,txt:"message.tagsView.closeAll",affix:!1,icon:"ele-FolderDelete"},{contextMenuClickId:4,txt:"message.tagsView.fullscreen",affix:!1,icon:"iconfont icon-fullscreen"}],item:{},arrowLeft:10}),r=y(()=>n.dropdown.x+117>document.documentElement.clientWidth?{x:document.documentElement.clientWidth-117-5,y:n.dropdown.y}:n.dropdown),C=t=>{w("currentContextmenuClick",Object.assign({},{contextMenuClickId:t},e.item))},_=t=>{var c;e.item=t,(c=t.meta)!=null&&c.isAffix?e.dropdownList[1].affix=!0:e.dropdownList[1].affix=!1,l(),setTimeout(()=>{e.isShow=!0},10)},l=()=>{e.isShow=!1};return v(()=>{document.body.addEventListener("click",l)}),L(()=>{document.body.removeEventListener("click",l)}),I(()=>n.dropdown,({x:t})=>{t+117>document.documentElement.clientWidth?e.arrowLeft=117-(document.documentElement.clientWidth-t):e.arrowLeft=10},{deep:!0}),f({openContextmenu:_}),(t,c)=>{const h=M("SvgIcon");return o(),S(O,{name:"el-zoom-in-center"},{default:V(()=>[b((o(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:d(`top: ${r.value.y+5}px;left: ${r.value.x}px;`),key:Math.random()},[i("ul",A,[(o(!0),a(u,null,E(e.dropdownList,(s,k)=>(o(),a(u,null,[s.affix?$("",!0):(o(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:k,onClick:F=>C(s.contextMenuClickId)},[B(h,{name:s.icon},null,8,["name"]),i("span",null,W(t.$t(s.txt)),1)],8,N))],64))),256))]),i("div",{class:"el-popper__arrow",style:d({left:`${e.arrowLeft}px`})},null,4)],4)),[[D,e.isShow]])]),_:1})}}}),G=T(z,[["__scopeId","data-v-525acb34"]]);export{G as default};