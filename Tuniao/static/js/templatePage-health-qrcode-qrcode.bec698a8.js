(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-health-qrcode-qrcode"],{3243:function(t,e,n){"use strict";n.r(e);var a=n("b508"),i=n("ad76");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8a85");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"09d7b210",null,!1,a["a"],o);e["default"]=c.exports},"7a6d":function(t,e,n){var a=n("8fb6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("35c494da",a,!0,{sourceMap:!1,shadowMode:!1})},"8a85":function(t,e,n){"use strict";var a=n("7a6d"),i=n.n(a);i.a},"8fb6":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-09d7b210]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-09d7b210]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-09d7b210]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 自定义导航栏内容 start */.custom-nav[data-v-09d7b210]{height:100%}.custom-nav__back[data-v-09d7b210]{margin:auto %?5?%;font-size:%?40?%;margin-right:%?10?%;margin-left:%?30?%;flex-basis:5%}.custom-nav__search[data-v-09d7b210]{flex-basis:71%;width:100%;height:100%}.custom-nav__search__box[data-v-09d7b210]{width:100%;height:70%;padding:%?10?% 0;margin:0 %?30?%;border-radius:%?60?% %?60?% %?60?% 0;font-size:%?24?%}.custom-nav__search__icon[data-v-09d7b210]{padding-right:%?10?%;margin-left:%?20?%;font-size:%?30?%}\n/* 自定义导航栏内容 end */.screen-shadow[data-v-09d7b210]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.07);border-radius:%?20?%}\n/* 图标容器12 start */.icon12__item[data-v-09d7b210]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon12__item--icon[data-v-09d7b210]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1}.icon12__item--icon[data-v-09d7b210]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png)}\n/* 文章内容 start*/.tn-blogger-content__wrap[data-v-09d7b210]{box-shadow:%?0?% %?0?% %?80?% %?0?% rgba(0,0,0,.09);border-radius:%?20?%;margin:%?30?%}.tn-blogger-content__info__btn[data-v-09d7b210]{margin-right:%?-12?%;opacity:.5}.tn-blogger-content__label__item[data-v-09d7b210]{line-height:%?45?%;padding:0 %?20?%;margin:%?5?% %?18?% 0 0}.tn-blogger-content__label__item--prefix[data-v-09d7b210]{color:#00ffc8;padding-right:%?10?%}.tn-blogger-content__label__desc[data-v-09d7b210]{line-height:%?55?%}.tn-blogger-content__main-image[data-v-09d7b210]{border-radius:%?16?% %?16?% 0 0}.tn-blogger-content__main-image--1[data-v-09d7b210]{max-width:%?690?%;min-width:%?690?%;max-height:%?400?%;min-height:%?400?%}.tn-blogger-content__main-image--2[data-v-09d7b210]{max-width:%?260?%;max-height:%?260?%}.tn-blogger-content__main-image--3[data-v-09d7b210]{height:%?212?%;width:100%}.tn-blogger-content__count-icon[data-v-09d7b210]{font-size:%?40?%;padding-right:%?5?%}.image-qrcode[data-v-09d7b210]{padding:%?180?% %?0?%;font-size:%?40?%;font-weight:300;position:relative}.image-pic[data-v-09d7b210]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}\n/* 文章内容 end*/\n/* 移动背景部分 start*/.bg-contaniner[data-v-09d7b210]{position:fixed;top:%?0?%;left:%?0?%;--text-color:hsl(0 95% 60%);--bg-color:hsl(0 0% 100%);--bg-size:%?750?%;height:100%;display:grid;place-items:center;place-content:center;overflow:hidden;background-color:#4392f4;z-index:-1}.bg-contaniner[data-v-09d7b210]::before{--size:150vmax;grid-area:body;content:"";inline-size:var(--size);block-size:var(--size);background-image:url(https://tnuiimage.tnkjapp.com/animate/health.png);background-size:var(--bg-size);background-repeat:repeat;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:.15;-webkit-animation:bg-data-v-09d7b210 6s linear infinite;animation:bg-data-v-09d7b210 6s linear infinite}@media (prefers-reduced-motion:reduce){.bg-contaniner[data-v-09d7b210]::before{-webkit-animation-duration:0s;animation-duration:0s}}@-webkit-keyframes bg-data-v-09d7b210{to{background-position:0 calc(var(--bg-size) * -1)}}@keyframes bg-data-v-09d7b210{to{background-position:0 calc(var(--bg-size) * -1)}}\n/* 移动背景部分 end*/\n/* 底部tabbar start*/.footerfixed[data-v-09d7b210]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-09d7b210]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-09d7b210]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.tabbar .action .bar-icon[data-v-09d7b210]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-09d7b210]{width:%?50?%;height:%?50?%;display:inline-block}.tabbar .action .bar-circle[data-v-09d7b210]{position:relative;display:block;margin:%?-60?% auto %?20?%;text-align:center;font-size:%?52?%;line-height:%?90?%;background-color:#01beff;width:%?90?%!important;height:%?90?%!important;overflow:hidden;border-radius:50%;box-shadow:%?0?% %?0?% %?20?% %?0?% rgba(1,190,255,.5)}.tabbar .action .bar-circle uni-image[data-v-09d7b210]{width:%?60?%;height:%?60?%;display:inline-block;margin:%?15?% auto %?15?%}',""]),t.exports=e},"9e7f":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a2ab")),r={name:"TemplateScreen",mixins:[i.default],data:function(){return{content:[{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:["https://tnuiimage.tnkjapp.com/shop/prototype1.jpg"],viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:65},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:["https://tnuiimage.tnkjapp.com/shop/prototype2.jpg"],viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:65},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:["https://tnuiimage.tnkjapp.com/shop/computer2.jpg"],viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:65},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg",userName:"可我会像",date:"2021年12月20日",label:["站点","链接"],desc:"https://www.yuque.com/tuniao",mainImage:["https://tnuiimage.tnkjapp.com/shop/pillow2.jpg"],viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:65},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:["https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg"],viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:65},collectionCount:265,commentCount:22,likeCount:62}]}},methods:{}};e.default=r},a2ab:function(t,e,n){n("96cf");var a=n("c973");t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,a=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},ad76:function(t,e,n){"use strict";n.r(e);var a=n("9e7f"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},b508:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("0e08").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-screen tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{isBack:!1,bottomShadow:!1,backgroundColor:"none"}},[n("v-uni-view",{staticClass:"custom-nav tn-flex tn-flex-col-center tn-flex-row-left",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"custom-nav__back"},[n("v-uni-view",{staticClass:"tn-icon-backspace tn-color-white",staticStyle:{"font-size":"60rpx"}})],1),n("v-uni-view",{staticClass:"custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center "},[n("v-uni-view",{staticClass:"custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-center tn-color-white"},[n("v-uni-text",{staticClass:"tn-text-bold tn-text-xl"},[t._v("健康码")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"bg-contaniner"}),n("v-uni-view",{},[n("v-uni-view",{staticClass:"tn-margin-top",style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"tn-bg-white tn-margin tn-text-center",staticStyle:{"border-radius":"20rpx"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-around tn-padding-sm tn-bg-blue--light",staticStyle:{"border-radius":"20rpx 20rpx 0 0"}},[n("v-uni-view",{staticClass:"justify-content-item"},[t._v("广州"),n("v-uni-text",{staticClass:"tn-icon-down-triangle"})],1),n("v-uni-view",{staticClass:"justify-content-item"},[t._v("蔡*东")]),n("v-uni-view",{staticClass:"justify-content-item"},[t._v("添加成员")])],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"tn-text-bold tn-margin-top-xl",staticStyle:{"font-size":"60rpx"}},[t._v("12-1 17:01:42")]),n("v-uni-view",{staticClass:"tn-icon-qr-beibei tn-color-orange",staticStyle:{"font-size":"450rpx"}}),n("v-uni-view",{staticClass:"tn-border-solid-top tn-padding"},[n("v-uni-text",{staticClass:"tn-icon-qr-code tn-padding-right-sm"}),n("v-uni-text",[t._v("不敢弄太真实，万一坏人拿去了，放黄码")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex tn-margin-xs"},[n("v-uni-view",{staticClass:"tn-flex-1 screen-shadow tn-bg-white",staticStyle:{margin:"30rpx 20rpx",padding:"40rpx 0"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-cyan--light tn-color-cyan--dark"},[n("v-uni-view",{staticClass:"tn-icon-safe-fill tn-three"})],1),n("v-uni-view",{staticClass:"tn-text-center"},[n("v-uni-view",{staticClass:"tn-text-ellipsis tn-text-xl tn-color-teal--dark"},[t._v("核酸阴性")]),n("v-uni-view",{staticClass:"tn-text-ellipsis tn-color-gray--dark tn-padding-top-sm"},[t._v("2021-06-13 08:38")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 screen-shadow tn-bg-white",staticStyle:{margin:"30rpx 20rpx",padding:"40rpx 0"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-cyan--light tn-color-cyan--dark"},[n("v-uni-view",{staticClass:"tn-icon-trusty-fill tn-three"})],1),n("v-uni-view",{staticClass:"tn-text-center"},[n("v-uni-view",{staticClass:"tn-text-ellipsis tn-text-xl tn-color-teal--dark"},[t._v("已完成全程接种")]),n("v-uni-view",{staticClass:"tn-text-ellipsis tn-color-gray--dark tn-padding-top-sm"},[t._v("2021-11-15")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-bg-white",staticStyle:{"border-radius":"50rpx 50rpx 0 0"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-row-center tn-radius tn-padding-top"},[n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-orange--light tn-color-orange"},[n("v-uni-view",{staticClass:"tn-icon-honor tn-three"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("通关凭证")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purple--light tn-color-purple"},[n("v-uni-view",{staticClass:"tn-icon-chemistry tn-three"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("核酸检测")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-blue--light tn-color-blue"},[n("v-uni-view",{staticClass:"tn-icon-edit-form tn-three"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("健康申报")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purplered--light tn-color-purplered"},[n("v-uni-view",{staticClass:"tn-icon-identity tn-three"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("通信行程")])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-bg-white tn-flex tn-flex-direction-column",staticStyle:{"padding-bottom":"110rpx"}},[t._l(t.content,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-blogger-content__wrap"},[n("v-uni-view",{},[n("v-uni-image",{staticClass:"tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom",attrs:{src:e.mainImage[0],mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"tn-blogger-content__label tn-text-justify"},[n("v-uni-text",{staticClass:"tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-padding"},[t._v(t._s(e.desc))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs"},[n("v-uni-view",{staticClass:"justify-content-item tn-flex tn-flex-col-center"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx","margin-left":"0rpx"}},[n("v-uni-view",{staticClass:"tn-color-gray tn-padding"},[n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-flower"}),n("v-uni-text",{staticClass:"tn-padding-right"},[t._v(t._s(e.collectionCount))]),n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-message"}),n("v-uni-text",{staticClass:"tn-padding-right"},[t._v(t._s(e.commentCount))]),n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-like"}),n("v-uni-text",{},[t._v(t._s(e.likeCount))])],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item tn-text-center"},t._l(e.label,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold"},[n("v-uni-text",{staticClass:"tn-blogger-content__label__item--prefix"},[t._v("#")]),t._v(t._s(e))],1)})),1)],1)],1)]}))],2)],1),n("v-uni-view",{staticClass:"tabbar footerfixed"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-view",{staticClass:"tn-icon-home-smile tn-color-gray--dark"})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("首页")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-circle tn-shadow-blur"},[n("v-uni-view",{staticClass:"tn-icon-qr-code tn-color-white"})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("粤码通城")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-view",{staticClass:"tn-icon-emoji-good tn-color-gray--dark"})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("我的")])],1)],1)],1)},r=[]},c973:function(t,e,n){function a(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(a,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,c,"next",t)}function c(t){a(o,i,r,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),t.exports=i}}]);