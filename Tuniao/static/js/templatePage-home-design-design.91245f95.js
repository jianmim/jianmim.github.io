(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-home-design-design"],{"0122":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-swiper__wrap-class tn-swiper__wrap",style:{borderRadius:t.radius+"rpx"}},[n("v-uni-swiper",{staticClass:"tn-swiper",class:[t.backgroundColorClass],style:[t.swiperStyle],attrs:{current:t.current,interval:t.interval,circular:t.circular,autoplay:t.autoplay,duration:t.duration,"previous-margin":t.effect3d?t.effect3dPreviousSpacing+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousSpacing+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return n("v-uni-swiper-item",{key:a,staticClass:"tn-swiper__item"},[n("v-uni-view",{staticClass:"tn-swiper__item__image__wrap",class:[t.swiperIndex!==a?"tn-swiper__item__image--scale":""],style:{borderRadius:t.radius+"rpx",transform:t.effect3d&&t.swiperIndex!==a?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.swiperIndex!==a?"0 20rpx":0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(a)}}},[n("v-uni-image",{staticClass:"tn-swiper__item__image",attrs:{src:e[t.name]||e,mode:t.imageMode}}),t.title&&e[t.titleName]?n("v-uni-view",{staticClass:"tn-swiper__item__title tn-text-ellipsis",style:[t.titleStyle]},[t._v(t._s(e[t.titleName]))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"tn-swiper__indicator",style:[t.indicatorStyle]},["rect"===t.mode?t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tn-swiper__indicator__rect",class:{"tn-swiper__indicator__rect--active":t.swiperIndex===a}})})):t._e(),"dot"===t.mode?t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tn-swiper__indicator__dot",class:{"tn-swiper__indicator__dot--active":t.swiperIndex===a}})})):t._e(),"round"===t.mode?t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tn-swiper__indicator__round",class:{"tn-swiper__indicator__round--active":t.swiperIndex===a}})})):t._e(),"number"===t.mode?[n("v-uni-view",{staticClass:"tn-swiper__indicator__number"},[t._v(t._s(t.swiperIndex+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},r=[]},"0c73":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-1c7cbaf4]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-1c7cbaf4]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-1c7cbaf4]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 图标容器10 start */.icon10__item[data-v-1c7cbaf4]{width:30%;background-color:#fff;border-radius:%?10?%;padding:%?30?%;margin:%?20?% %?10?%;-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear;-webkit-transform-origin:center center;transform-origin:center center}.icon10__item--icon[data-v-1c7cbaf4]{width:%?84?%;height:%?65?%;font-size:%?45?%;border-radius:%?200?%;margin-bottom:%?18?%;position:relative;z-index:1}.icon10__item--icon[data-v-1c7cbaf4]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}\n/* 图标容器10 end */\n/* 文章内容 start*/.tn-blogger-content__wrap[data-v-1c7cbaf4]{padding:%?30?%}.tn-blogger-content__info__btn[data-v-1c7cbaf4]{margin-right:%?-12?%;opacity:.5}.tn-blogger-content__label__item[data-v-1c7cbaf4]{line-height:%?45?%;padding:0 %?20?%;margin:%?5?% %?18?% 0 0}.tn-blogger-content__label__item--prefix[data-v-1c7cbaf4]{color:#00ffc8;padding-right:%?10?%}.tn-blogger-content__label__desc[data-v-1c7cbaf4]{line-height:%?55?%}.tn-blogger-content__main-image[data-v-1c7cbaf4]{box-shadow:%?0?% %?5?% %?40?% %?0?% rgba(43,158,246,.2);border-radius:%?16?%}.tn-blogger-content__main-image--1[data-v-1c7cbaf4]{max-width:%?690?%;min-width:%?690?%;max-height:%?400?%;min-height:%?400?%}.tn-blogger-content__main-image--2[data-v-1c7cbaf4]{max-width:%?260?%;max-height:%?260?%}.tn-blogger-content__main-image--3[data-v-1c7cbaf4]{height:%?212?%;width:100%}.tn-blogger-content__count-icon[data-v-1c7cbaf4]{font-size:%?40?%;padding-right:%?5?%}.image-design[data-v-1c7cbaf4]{padding:%?180?% %?0?%;font-size:%?40?%;font-weight:300;position:relative}.image-pic[data-v-1c7cbaf4]{background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}\n/* 文章内容 end*/\n/* 间隔线 start*/.tn-strip-bottom[data-v-1c7cbaf4]{width:100%;border-bottom:%?20?% solid hsla(0,0%,94.5%,.3)}\n/* 间隔线 end*/\n/* 底部tabbar start*/.footerfixed[data-v-1c7cbaf4]{position:fixed;width:100%;bottom:0;z-index:999;background-color:#fff;box-shadow:%?0?% %?0?% %?30?% %?0?% rgba(0,0,0,.07)}.tabbar[data-v-1c7cbaf4]{display:flex;align-items:center;min-height:%?110?%;justify-content:space-between;padding:0;height:calc(%?110?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.tabbar .action[data-v-1c7cbaf4]{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;overflow:initial}.tabbar .action .bar-icon[data-v-1c7cbaf4]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?42?%}.tabbar .action .bar-icon uni-image[data-v-1c7cbaf4]{width:%?50?%;height:%?50?%;display:inline-block}',""]),t.exports=e},1289:function(t,e,n){"use strict";var a=n("d4ba"),i=n.n(a);i.a},"279b":function(t,e,n){"use strict";n.r(e);var a=n("2b33"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"2b33":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var t=getCurrentPages();if(t&&t.length>0){var e=this.indexPath||"/pages/index/index",n=t[0];1!=t.length||n.route&&n.route==e.substring(1,e.length)?uni.navigateBack({delta:1}):uni.reLaunch({url:e})}else uni.reLaunch({url:indexPath})}}};e.default=a},"3b35":function(t,e,n){"use strict";n.r(e);var a=n("4c15"),i=n("a59c");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("49e6");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1c7cbaf4",null,!1,a["a"],o);e["default"]=c.exports},"49e6":function(t,e,n){"use strict";var a=n("caf6"),i=n.n(a);i.a},"4c15":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={tnSwiper:n("88c5").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-design tn-safe-area-inset-bottom"},[n("v-uni-view",[n("tn-swiper",{attrs:{list:t.banner,height:1e3,effect3d:!1,mode:"number"}})],1),n("v-uni-view",{staticClass:"tn-flex tn-margin-top"},[n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-image-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("相册")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-live-stream-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("视频")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-orange tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-image-text-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("日志")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-purple tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-topics-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("话题")])],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex-1 tn-padding-sm tn-margin-xs tn-radius"},[n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"},[n("v-uni-view",{staticClass:"icon10__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white"},[n("v-uni-view",{staticClass:"tn-icon-discover-fill"})],1),n("v-uni-view",{staticClass:"tn-color-black tn-text-lg tn-text-center"},[n("v-uni-text",{staticClass:"tn-text-ellipsis"},[t._v("发现")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-direction-column"},[t._l(t.content,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"tn-blogger-content__wrap"},[n("v-uni-view",{staticClass:"tn-padding-top-xs"},[n("v-uni-view",{staticClass:"tn-shadow-blur image-pic",style:"background-image:url("+e.mainImage+")"},[n("v-uni-view",{staticClass:"image-design"})],1)],1),n("v-uni-view",{staticClass:"tn-blogger-content__label tn-text-justify tn-margin-top tn-margin-bottom-sm"},[n("v-uni-text",{staticClass:"tn-blogger-content__label__desc tn-text-bold tn-text-xl"},[t._v(t._s(e.desc))])],1),n("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs"},[n("v-uni-view",{staticClass:"justify-content-item tn-flex tn-flex-col-center"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx","margin-left":"0rpx"}},[n("v-uni-view",{staticClass:"tn-color-gray"},[n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-flower"}),n("v-uni-text",{staticClass:"tn-padding-right"},[t._v(t._s(e.collectionCount))]),n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-message"}),n("v-uni-text",{staticClass:"tn-padding-right"},[t._v(t._s(e.commentCount))]),n("v-uni-text",{staticClass:"tn-blogger-content__count-icon tn-icon-like"}),n("v-uni-text",{},[t._v(t._s(e.likeCount))])],1)],1)],1),n("v-uni-view",{staticClass:"justify-content-item tn-text-center"},t._l(e.label,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold"},[n("v-uni-text",{staticClass:"tn-blogger-content__label__item--prefix"},[t._v("#")]),t._v(t._s(e))],1)})),1)],1)],1),a!=t.content.length-1?n("v-uni-view",{key:a+"_1",staticClass:"tn-strip-bottom"}):t._e()]}))],2),n("v-uni-view",{staticClass:"tabbar footerfixed"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/home_tnnew.png"}})],1),n("v-uni-view",{staticClass:"tn-color-black"},[t._v("首页")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/information_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("圈子")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/case_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("案例")])],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-view",{staticClass:"bar-icon"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/tabbar/my_tn.png"}})],1),n("v-uni-view",{staticClass:"tn-color-gray"},[t._v("我的")])],1)],1),n("v-uni-view",{staticClass:"tn-padding-xl"}),n("nav-index-button")],1)},r=[]},"4f2b":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-swiper__wrap[data-v-0ec3ba2d]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.tn-swiper__item[data-v-0ec3ba2d]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.tn-swiper__item__image[data-v-0ec3ba2d]{width:100%;height:100%;will-change:transform;display:block;pointer-events:none}.tn-swiper__item__image__wrap[data-v-0ec3ba2d]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.tn-swiper__item__image--scale[data-v-0ec3ba2d]{-webkit-transform-origin:center center;transform-origin:center center}.tn-swiper__item__title[data-v-0ec3ba2d]{width:100%;position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.8)}.tn-swiper__indicator[data-v-0ec3ba2d]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.tn-swiper__indicator__rect[data-v-0ec3ba2d]{width:%?26?%;height:%?8?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__rect--active[data-v-0ec3ba2d]{background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__dot[data-v-0ec3ba2d]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__dot--active[data-v-0ec3ba2d]{background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__round[data-v-0ec3ba2d]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;background-color:rgba(0,0,0,.3);transition:all .5s}.tn-swiper__indicator__round--active[data-v-0ec3ba2d]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.tn-swiper__indicator__number[data-v-0ec3ba2d]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);color:hsla(0,0%,100%,.8);border-radius:%?100?%;font-size:%?26?%}',""]),t.exports=e},"6d3c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.nav-index-button[data-v-7e83731e]{position:fixed;-webkit-animation:suspension-data-v-7e83731e 3s ease-in-out infinite;animation:suspension-data-v-7e83731e 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-7e83731e]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-7e83731e]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-7e83731e]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}.nav-index-button__meteor[data-v-7e83731e]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-7e83731e]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-7e83731e 20s linear infinite;animation:spin-data-v-7e83731e 20s linear infinite}.nav-index-button__meteor__item[data-v-7e83731e]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-7e83731e]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc3.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-7e83731e 4s linear infinite;animation:arc-data-v-7e83731e 4s linear infinite}@-webkit-keyframes suspension-data-v-7e83731e{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-7e83731e{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@-webkit-keyframes spin-data-v-7e83731e{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-7e83731e{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-7e83731e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-7e83731e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"88c5":function(t,e,n){"use strict";n.r(e);var a=n("0122"),i=n("f990");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("94f1");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"0ec3ba2d",null,!1,a["a"],o);e["default"]=c.exports},9328:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav-index-button",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navIndex.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nav-index-button__content"},[n("v-uni-view",{staticClass:"nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-cool-bg-color-7"},[n("v-uni-view",{staticClass:"tn-icon-home-vertical-fill"})],1)],1),n("v-uni-view",{staticClass:"nav-index-button__meteor"},[n("v-uni-view",{staticClass:"nav-index-button__meteor__wrapper"},t._l(6,(function(t,e){return n("v-uni-view",{key:e,staticClass:"nav-index-button__meteor__item",style:{transform:"rotateX("+(30*e-60)+"deg) rotateZ("+(30*e-60)+"deg)"}},[n("v-uni-view",{staticClass:"nav-index-button__meteor__item--pic"})],1)})),1)],1)],1)},r=[]},"94f1":function(t,e,n){"use strict";var a=n("d269"),i=n.n(a);i.a},"96cf":function(t,e){!function(e){"use strict";var n,a=Object.prototype,i=a.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=w;var p="suspendedStart",d="suspendedYield",g="executing",f="completed",v={},m={};m[o]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(N([])));b&&b!==a&&i.call(b,o)&&(m=b);var _=C.prototype=y.prototype=Object.create(m);k.prototype=_.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},u.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(t,e,n,a){var i=new L(w(t,e,n,a));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(_),_[c]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},u.values=N,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,i){return s.type="throw",s.arg=t,e.next=a,i&&(e.method="next",e.arg=n),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var i=a.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:N(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,a){var i=e&&e.prototype instanceof y?e:y,r=Object.create(i.prototype),o=new E(a||[]);return r._invoke=I(t,n,o),r}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(a){return{type:"throw",arg:a}}}function y(){}function k(){}function C(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,a,r,o){var s=x(t[n],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(l).then((function(t){c.value=t,r(c)}),(function(t){return e("throw",t,r,o)}))}o(s.arg)}var n;function a(t,a){function i(){return new Promise((function(n,i){e(t,a,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=a}function I(t,e,n){var a=p;return function(i,r){if(a===g)throw new Error("Generator is already running");if(a===f){if("throw"===i)throw r;return z()}n.method=i,n.arg=r;while(1){var o=n.delegate;if(o){var s=U(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var c=x(t,e,n);if("normal"===c.type){if(a=n.done?f:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=f,n.method="throw",n.arg=c.arg)}}}function U(t,e){var a=t.iterator[e.method];if(a===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,U(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(a,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){while(++a<t.length)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a192:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a2ab")),r=a(n("a3c4")),o={name:"TemplateDesign",mixins:[i.default],components:{NavIndexButton:r.default},data:function(){return{banner:[{image:"https://tnuiimage.tnkjapp.com/swiper/swiper1.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg"},{image:"https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg"}],content:[{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/prototype2.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:999,commentCount:999,likeCount:999},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/prototype1.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/computer2.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"我们都是好孩子",mainImage:"https://tnuiimage.tnkjapp.com/shop/watch1.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/sticker.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62},{userAvatar:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg",userName:"可我会像",date:"2021年12月20日",label:["开源","创意"],desc:"免费开源可商用组件",mainImage:"https://tnuiimage.tnkjapp.com/shop/card.jpg",viewUser:{latestUserAvatar:[{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"},{src:"https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"}],viewUserCount:129},collectionCount:265,commentCount:22,likeCount:62}]}},methods:{}};e.default=o},a2ab:function(t,e,n){n("96cf");var a=n("c973");t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$t.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,a=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",a),t.$t.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},a3c4:function(t,e,n){"use strict";n.r(e);var a=n("9328"),i=n("279b");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("1289");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7e83731e",null,!1,a["a"],o);e["default"]=c.exports},a59c:function(t,e,n){"use strict";n.r(e);var a=n("a192"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},b689:function(t,e,n){"use strict";n("c975"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tn-swiper",props:{list:{type:Array,default:function(){return[]}},current:{type:Number,default:0},height:{type:Number,default:250},backgroundColor:{type:String,default:"transparent"},name:{type:String,default:"image"},title:{type:Boolean,default:!1},titleName:{type:String,default:"title"},titleStyle:{type:Object,default:function(){return{}}},radius:{type:Number,default:8},mode:{type:String,default:"round"},indicatorPosition:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousSpacing:{type:Number,default:50},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},duration:{type:Number,default:500},circular:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"}},computed:{backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},swiperStyle:function(){var t={};return this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.height&&(t.height=this.height+"rpx"),t},indicatorStyle:function(){var t={};return"topLeft"!==this.indicatorPosition&&"bottomLeft"!==this.indicatorPosition||(t.justifyContent="flex-start"),"topCenter"!==this.indicatorPosition&&"bottomCenter"!==this.indicatorPosition||(t.justifyContent="center"),"topRight"!==this.indicatorPosition&&"bottomRight"!==this.indicatorPosition||(t.justifyContent="flex-end"),["topLeft","topCenter","topRight"].indexOf(this.indicatorPosition)>=0?(t.top="12rpx",t.bottom="auto"):(t.top="auto",t.bottom="12rpx"),t.padding="0 ".concat(this.effect3d?"74rpx":"24rpx"),t},swiperTitleStyle:function(){var t={};return"none"!==this.mode&&""!==this.mode||(t.paddingBottom="12rpx"),["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"===this.mode?t.paddingBottom="60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPosition)>=0&&"number"!==this.mode?t.paddingBottom="40rpx":t.paddingBottom="12rpx",t=Object.assign(t,this.titleStyle),t}},data:function(){return{swiperIndex:this.current}},watch:{list:function(t,e){t.length!==e.length&&(this.swiperIndex=0)},current:function(t){this.swiperIndex=t}},methods:{click:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.swiperIndex=e,this.$emit("change",e)}}};e.default=a},c973:function(t,e,n){function a(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(a,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function s(t){a(o,i,r,s,c,"next",t)}function c(t){a(o,i,r,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),t.exports=i},caf6:function(t,e,n){var a=n("0c73");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2f875d86",a,!0,{sourceMap:!1,shadowMode:!1})},d269:function(t,e,n){var a=n("4f2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("23202ef7",a,!0,{sourceMap:!1,shadowMode:!1})},d4ba:function(t,e,n){var a=n("6d3c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("c82a5054",a,!0,{sourceMap:!1,shadowMode:!1})},f990:function(t,e,n){"use strict";n.r(e);var a=n("b689"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}}]);