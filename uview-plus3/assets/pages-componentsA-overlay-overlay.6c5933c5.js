import{_ as o}from"./u-navbar.4d25b388.js";import{o as s,c as t,w as a,i as e,a as i,b as l,r as c,F as n,d as r,e as h}from"./index.6f985586.js";import{r as p}from"./uni-app.es.6e64b422.js";import{_ as u}from"./u-cell.79bf2487.js";import{_ as w}from"./u-overlay.bc348baa.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-status-bar.5fac92b4.js";import"./u-icon.3c3802b5.js";import"./u-line.05730c7c.js";import"./u-transition.3959075c.js";const m=d({data:()=>({show:!1,showSlot:!1,showOpcatiy:!1,list:[{title:"基本案列",iconUrl:"https://cdn.uviewui.com/uview/demo/overlay/baseCases.png"},{title:"嵌入内容",iconUrl:"https://cdn.uviewui.com/uview/demo/overlay/embeddedContent.png"},{title:"设置透明度",iconUrl:"https://cdn.uviewui.com/uview/demo/overlay/setTransparency.png"}]}),methods:{openMask(o){0==o?this.show=!this.show:1==o?this.showSlot=!this.showSlot:2==o&&(this.showOpcatiy=!this.showOpcatiy)},navigateBack(){uni.navigateBack()}}},[["render",function(d,m,f,v,y,b){const k=p(r("u-navbar"),o),_=h,j=p(r("u-cell"),u),g=p(r("u-overlay"),w),C=e;return s(),t(C,{class:"u-page"},{default:a((()=>[i(k,{title:"遮罩层",onLeftClick:b.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),(s(!0),l(n,null,c(y.list,((o,e)=>(s(),t(j,{titleStyle:{fontWeight:500},onClick:o=>b.openMask(e),title:o.title,key:e,isLink:""},{default:a((()=>[i(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128)),i(g,{show:y.show,onClick:m[0]||(m[0]=o=>y.show=!y.show)},null,8,["show"]),i(g,{show:y.showSlot,onClick:m[1]||(m[1]=o=>y.showSlot=!y.showSlot)},{default:a((()=>[i(C,{class:"overlay-wrap"},{default:a((()=>[i(C,{class:"overlay-wrap__box"})])),_:1})])),_:1},8,["show"]),i(g,{opacity:".85",show:y.showOpcatiy,onClick:m[2]||(m[2]=o=>y.showOpcatiy=!y.showOpcatiy)},null,8,["show"])])),_:1})}],["__scopeId","data-v-ac44ac89"]]);export{m as default};