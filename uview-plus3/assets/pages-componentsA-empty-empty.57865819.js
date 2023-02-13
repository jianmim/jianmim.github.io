import{j as e,m as t,k as i,d as o,o as s,c as m,w as n,q as a,a as p,f as c,t as r,l,p as u,e as d,g,i as y,y as h,b as w,r as f,F as v}from"./index.6f985586.js";import{_ as S}from"./u-button.270af68b.js";import{r as _}from"./uni-app.es.6e64b422.js";import{_ as x}from"./u-icon.3c3802b5.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as U}from"./u-cell.79bf2487.js";import"./u-loading-icon.9827ac16.js";import"./u-line.05730c7c.js";const b=N({name:"u-empty",mixins:[t,i,{props:{icon:{type:String,default:e.empty.icon},text:{type:String,default:e.empty.text},textColor:{type:String,default:e.empty.textColor},textSize:{type:[String,Number],default:e.empty.textSize},iconColor:{type:String,default:e.empty.iconColor},iconSize:{type:[String,Number],default:e.empty.iconSize},mode:{type:String,default:e.empty.mode},width:{type:[String,Number],default:e.empty.width},height:{type:[String,Number],default:e.empty.height},show:{type:Boolean,default:e.empty.show},marginTop:{type:[String,Number],default:e.empty.marginTop}}}],data:()=>({icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}),computed:{emptyStyle(){const e={};return e.marginTop=uni.$u.addUnit(this.marginTop),uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),e)},textStyle(){const e={};return e.color=this.textColor,e.fontSize=uni.$u.addUnit(this.textSize),e},isSrc(){return this.icon.indexOf("/")>=0}}},[["render",function(e,t,i,h,w,f){const v=_(o("u-icon"),x),S=d,N=g,U=y;return e.show?(s(),m(U,{key:0,class:"u-empty",style:a([f.emptyStyle])},{default:n((()=>[f.isSrc?(s(),m(S,{key:1,style:a({width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}),src:e.icon,mode:"widthFix"},null,8,["style","src"])):(s(),m(v,{key:0,name:"message"===e.mode?"chat":`empty-${e.mode}`,size:e.iconSize,color:e.iconColor,"margin-top":"14"},null,8,["name","size","color"])),p(N,{class:"u-empty__text",style:a([f.textStyle])},{default:n((()=>[c(r(e.text?e.text:w.icons[e.mode]),1)])),_:1},8,["style"]),e.$slots.default||e.$slots.$default?(s(),m(U,{key:2,class:"u-empty__wrap"},{default:n((()=>[l(e.$slots,"default",{},void 0,!0)])),_:3})):u("",!0)])),_:3},8,["style"])):u("",!0)}],["__scopeId","data-v-b7cb1277"]]);const k=N({data(){const e="http://cdn.uviewui.com/uview/empty/";return{mode:"car",imgList:{car:e+"car.png",address:e+"address.png",comment:e+"comment.png",coupon:e+"coupon.png",data:e+"data.png",history:e+"history.png",list:e+"list.png",message:e+"message.png",news:e+"news.png",order:e+"order.png",page:e+"page.png",permission:e+"permission.png",search:e+"search.png",wifi:e+"wifi.png"},list:[{imgName:"car",title:"购物车为空(同时传入slot)",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/car.png"},{imgName:"data",title:"数据为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/data.png"},{imgName:"comment",title:"评论为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/comment.png"},{imgName:"coupon",title:"没有优惠券",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/coupon.png"},{imgName:"history",title:"无历史记录",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/history.png"},{imgName:"list",title:"列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/list.png"},{imgName:"message",title:"消息列表为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/message.png"},{imgName:"news",title:"无新闻列表",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/news.png"},{imgName:"order",title:"订单为空",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/order.png"},{imgName:"page",title:"页面不存在",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/page.png"},{imgName:"permission",title:"无权限",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/permission.png"},{imgName:"search",title:"没有搜索结果",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/search.png"},{imgName:"wifi",title:"没有WiFi",iconUrl:"https://cdn.uviewui.com/uview/demo/empty/wifi.png"}]}},methods:{openImg(e){this.mode=e}}},[["render",function(e,t,i,a,r,l){const x=g,N=y,k=_(o("u-button"),S),$=_(o("u-empty"),b),z=d,j=_(o("u-cell"),U);return s(),m(N,{class:"u-page"},{default:n((()=>[p(N,{class:"u-page__top-box"},{default:n((()=>[p(x,{class:"u-demo-block__title"},{default:n((()=>[c("演示效果")])),_:1})])),_:1}),p($,{mode:r.mode,icon:r.imgList[r.mode]},{default:n((()=>["car"==r.mode?(s(),m(k,{key:0,size:"small",type:"primary",style:{marginTop:"10px"},text:"查看更多商品"})):u("",!0)])),_:1},8,["mode","icon"]),h("div",{class:"empty-select"},[(s(!0),w(v,null,f(r.list,((e,t)=>(s(),m(j,{titleStyle:{fontWeight:500},onClick:t=>l.openImg(e.imgName),title:e.title,key:t,isLink:""},{default:n((()=>[p(z,{slot:"icon",class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])])),_:1})}],["__scopeId","data-v-eca19656"]]);export{k as default};
