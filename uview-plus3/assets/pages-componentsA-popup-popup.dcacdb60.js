import{_ as o}from"./u-navbar.4d25b388.js";import{o as e,c as t,w as p,i as l,a,b as i,r as s,F as u,q as r,d as c,e as n}from"./index.6f985586.js";import{r as d}from"./uni-app.es.6e64b422.js";import{_ as m}from"./u-gap.0e6106cb.js";import{_ as v}from"./u-cell.79bf2487.js";import{_ as b}from"./u-cell-group.398f4180.js";import{_ as h}from"./u-button.270af68b.js";import{_ as f}from"./u-popup.7d60b49b.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-status-bar.5fac92b4.js";import"./u-icon.3c3802b5.js";import"./u-line.05730c7c.js";import"./u-loading-icon.9827ac16.js";import"./u-overlay.bc348baa.js";import"./u-transition.3959075c.js";import"./u-safe-bottom.6e67c0be.js";const y=w({data:()=>({show:!1,popupData:{overlay:!0,mode:"bottom",borderRadius:"",closeable:!0,closeOnClickOverlay:!0},list:[{popupData:{overlay:!0,mode:"top",closeOnClickOverlay:!0},title:"顶部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeTop.png"},{popupData:{overlay:!0,mode:"right",closeOnClickOverlay:!0},title:"右侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeRight.png"},{popupData:{overlay:!0,mode:"bottom",closeOnClickOverlay:!0},title:"底部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"},{popupData:{overlay:!0,mode:"left",closeOnClickOverlay:!0},title:"左侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"},{popupData:{overlay:!0,mode:"center",round:10,closeOnClickOverlay:!0},title:"居中弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"},{popupData:{overlay:!0,mode:"bottom",round:10,closeOnClickOverlay:!0},title:"显示圆角",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showRadis.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!1,closeOnClickOverlay:!1},title:"禁止点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/noClose.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!0,closeOnClickOverlay:!0},title:"显示关闭按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"}]}),methods:{openPopup(o){this.popupData=o,uni.$u.sleep().then((()=>{this.show=!this.show}))},navigateBack(){uni.navigateBack()},open(){},close(){this.show=!1}}},[["render",function(w,y,O,g,C,k){const D=d(c("u-navbar"),o),j=d(c("u-gap"),m),_=n,x=d(c("u-cell"),v),U=d(c("u-cell-group"),b),B=d(c("u-button"),h),R=l,I=d(c("u-popup"),f);return e(),t(R,null,{default:p((()=>[a(D,{title:"弹窗",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),a(j,{height:"20",bgColor:"#fff"}),a(U,null,{default:p((()=>[(e(!0),i(u,null,s(C.list,((o,l)=>(e(),t(x,{titleStyle:{fontWeight:500},onClick:e=>k.openPopup(o.popupData),title:o.title,key:l,isLink:""},{default:p((()=>[a(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),a(I,{safeAreaInsetBottom:!0,safeAreaInsetTop:!0,mode:C.popupData.mode,show:C.show,round:C.popupData.round,overlay:C.popupData.overlay,borderRadius:C.popupData.borderRadius,closeable:C.popupData.closeable,closeOnClickOverlay:C.popupData.closeOnClickOverlay,onClose:k.close,onOpen:k.open},{default:p((()=>[a(R,{class:"u-popup-slot",style:r({width:["bottom","top"].includes(C.popupData.mode)?"750rpx":"200px",marginTop:["left","right"].includes(C.popupData.mode)?"480rpx":"0"})},{default:p((()=>[a(B,{type:"success",text:"点我关闭",customStyle:"width: 200rpx",onClick:y[0]||(y[0]=o=>C.show=!C.show)})])),_:1},8,["style"])])),_:1},8,["mode","show","round","overlay","borderRadius","closeable","closeOnClickOverlay","onClose","onOpen"])])),_:1})}],["__scopeId","data-v-3dd9d7d4"]]);export{y as default};