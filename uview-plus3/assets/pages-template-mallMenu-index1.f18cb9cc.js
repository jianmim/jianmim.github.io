import{_ as e}from"./u-icon.3c3802b5.js";import{o as t,c as s,w as a,i as l,a as i,f as c,b as u,r,F as n,d as o,g as m,S as h,n as d,u as f,t as p,p as _,e as g}from"./index.6f985586.js";import{r as b}from"./uni-app.es.6e64b422.js";import{c as w}from"./classify.data.5ac72fa4.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const H=y({data:()=>({tabbar:w,scrollTop:0,current:0,menuHeight:0,menuItemHeight:0}),computed:{},methods:{getImg:()=>Math.floor(35*Math.random()),async swichMenu(e){e!=this.current&&(this.current=e,0!=this.menuHeight&&0!=this.menuItemHeight||(await this.getElRect("menu-scroll-view","menuHeight"),await this.getElRect("u-tab-item","menuItemHeight")),this.scrollTop=e*this.menuItemHeight+this.menuItemHeight/2-this.menuHeight/2)},getElRect(e,t){new Promise(((s,a)=>{uni.createSelectorQuery().in(this).select("."+e).fields({size:!0},(s=>{s?this[t]=s.height:setTimeout((()=>{this.getElRect(e)}),10)})).exec()}))}}},[["render",function(w,y,H,x,v,I){const k=b(o("u-icon"),e),j=m,E=l,M=h,R=g;return t(),s(E,{class:"u-wrap"},{default:a((()=>[i(E,{class:"u-search-box"},{default:a((()=>[i(E,{class:"u-search-inner"},{default:a((()=>[i(k,{name:"search",color:"#909399",size:28}),i(j,{class:"u-search-text"},{default:a((()=>[c("搜索uView")])),_:1})])),_:1})])),_:1}),i(E,{class:"u-menu-wrap"},{default:a((()=>[i(M,{"scroll-y":"","scroll-with-animation":"",class:"u-tab-view menu-scroll-view","scroll-top":v.scrollTop},{default:a((()=>[(t(!0),u(n,null,r(v.tabbar,((e,l)=>(t(),s(E,{key:l,class:d(["u-tab-item",[v.current==l?"u-tab-item-active":""]]),"data-current":l,onClick:f((e=>I.swichMenu(l)),["stop"])},{default:a((()=>[i(j,{class:"u-line-1"},{default:a((()=>[c(p(e.name),1)])),_:2},1024)])),_:2},1032,["class","data-current","onClick"])))),128))])),_:1},8,["scroll-top"]),(t(!0),u(n,null,r(v.tabbar,((e,l)=>(t(),u(n,{key:l},[v.current==l?(t(),s(M,{key:0,"scroll-y":"",class:"right-box"},{default:a((()=>[i(E,{class:"page-view"},{default:a((()=>[i(E,{class:"class-item"},{default:a((()=>[i(E,{class:"item-title"},{default:a((()=>[i(j,null,{default:a((()=>[c(p(e.name),1)])),_:2},1024)])),_:2},1024),i(E,{class:"item-container"},{default:a((()=>[(t(!0),u(n,null,r(e.foods,((e,l)=>(t(),s(E,{class:"thumb-box",key:l},{default:a((()=>[i(R,{class:"item-menu-image",src:e.icon,mode:""},null,8,["src"]),i(E,{class:"item-menu-name"},{default:a((()=>[c(p(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)):_("",!0)],64)))),128))])),_:1})])),_:1})}],["__scopeId","data-v-083618f1"]]);export{H as default};