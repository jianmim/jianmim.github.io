(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-swiper-swiper"],{"0a0d":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var r={props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}};i.default=r},"0a74":function(t,i,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e("21d4")),a={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};i.default=a},"0fa6":function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-d4342702], uni-scroll-view[data-v-d4342702], uni-swiper-item[data-v-d4342702]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-d4342702]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-d4342702]{flex:1}.u-swiper__wrapper__item[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-d4342702]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-d4342702]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-d4342702]{position:absolute;bottom:10px}',""]),t.exports=i},1012:function(t,i,e){"use strict";e.r(i);var r=e("84ca"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},"137c":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var r={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};i.default=r},1692:function(t,i,e){var r=e("5416");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("4e6b0a63",r,!0,{sourceMap:!1,shadowMode:!1})},"180a":function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-26861ad0], uni-scroll-view[data-v-26861ad0], uni-swiper-item[data-v-26861ad0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-26861ad0]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-26861ad0]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-26861ad0]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-26861ad0 1s linear infinite;animation:u-rotate-data-v-26861ad0 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-26861ad0]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-26861ad0]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-26861ad0]{flex-direction:column}[data-v-26861ad0]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-26861ad0]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-26861ad0]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-26861ad0]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-26861ad0]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-26861ad0]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=i},"1cf1":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return r}));var r={uLoadingIcon:e("d220").default,uSwiperIndicator:e("d7d84").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:t.bgColor,height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)}},[t.loading?e("v-uni-view",{staticClass:"u-swiper__loading"},[e("u-loading-icon",{attrs:{mode:"circle"}})],1):e("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:t.$u.addUnit(t.height)},attrs:{circular:t.circular,interval:t.interval,duration:t.duration,autoplay:t.autoplay,current:t.current,currentItemId:t.currentItemId,previousMargin:t.$u.addUnit(t.previousMargin),nextMargin:t.$u.addUnit(t.nextMargin),acceleration:t.acceleration,displayMultipleItems:t.displayMultipleItems,easingFunction:t.easingFunction},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,r){return e("v-uni-swiper-item",{key:r,staticClass:"u-swiper__wrapper__item"},[e("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[t.itemStyle(r)]},["image"===t.getItemType(i)?e("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)},attrs:{src:t.getSource(i),mode:t.imgMode},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler(r)}}}):t._e(),"video"===t.getItemType(i)?e("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:t.$u.addUnit(t.height)},attrs:{id:"video-"+r,"enable-progress-gesture":!1,src:t.getSource(i),poster:t.getPoster(i),title:t.showTitle&&t.$u.test.object(i)&&i.title?i.title:"",controls:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickHandler(r)}}}):t._e(),t.showTitle&&t.$u.test.object(i)&&i.title&&t.$u.test.image(t.getSource(i))?e("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[t._v(t._s(i.title))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"u-swiper__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[t._t("indicator",[t.loading||!t.indicator||t.showTitle?t._e():e("u-swiper-indicator",{attrs:{indicatorActiveColor:t.indicatorActiveColor,indicatorInactiveColor:t.indicatorInactiveColor,length:t.list.length,current:t.currentIndex,indicatorMode:t.indicatorMode}})])],2)],1)},a=[]},"1f48":function(t,i,e){"use strict";e.r(i);var r=e("0a74"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},"21d4":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var r={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};i.default=r},"2e04":function(t,i,e){"use strict";e.r(i);var r=e("fbd8"),n=e("1012");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("f990");var o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"3a693769",null,!1,r["a"],void 0);i["default"]=u.exports},3571:function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var r=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},n=[]},"4e4e":function(t,i,e){"use strict";var r=e("5cba"),n=e.n(r);n.a},5063:function(t,i,e){var r=e("d261");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("af0208b2",r,!0,{sourceMap:!1,shadowMode:!1})},5416:function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.indicator[data-v-3a693769]{display:flex;flex-direction:row;justify-content:center}.indicator__dot[data-v-3a693769]{height:6px;width:6px;border-radius:100px;background-color:hsla(0,0%,100%,.35);margin:0 5px;transition:background-color .3s}.indicator__dot--active[data-v-3a693769]{background-color:#fff}.indicator-num[data-v-3a693769]{padding:2px 0;background-color:rgba(0,0,0,.35);border-radius:100px;width:35px;display:flex;flex-direction:row;justify-content:center}.indicator-num__text[data-v-3a693769]{color:#fff;font-size:12px}',""]),t.exports=i},5948:function(t,i,e){"use strict";e.r(i);var r=e("1cf1"),n=e("db0b");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("c340");var o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"d4342702",null,!1,r["a"],void 0);i["default"]=u.exports},"5cba":function(t,i,e){var r=e("180a");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("36c22733",r,!0,{sourceMap:!1,shadowMode:!1})},"6f94":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.show?e("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():e("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,i){return e("v-uni-view",{key:i,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?e("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},n=[]},"84ca":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r={data:function(){return{current:0,currentNum:0,list:[{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list1:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],list2:[{image:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"昨夜星辰昨夜风，画楼西畔桂堂东",type:"image"},{image:"https://cdn.uviewui.com/uview/swiper/swiper1.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{image:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list3:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list4:[{url:"https://cdn.uviewui.com/uview/resources/video.mp4",title:"昨夜星辰昨夜风，画楼西畔桂堂东",poster:"https://cdn.uviewui.com/uview/swiper/swiper1.png"},{url:"https://cdn.uviewui.com/uview/swiper/swiper2.png",title:"身无彩凤双飞翼，心有灵犀一点通"},{url:"https://cdn.uviewui.com/uview/swiper/swiper3.png",title:"谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"}],list5:["https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"],list6:["https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png","https://cdn.uviewui.com/uview/swiper/swiper1.png"]}},methods:{change:function(t){},click:function(t){console.log("click",t)}}};i.default=r},8819:function(t,i,e){"use strict";e.r(i);var r=e("3571"),n=e("1f48");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("9195");var o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"3927d88e",null,!1,r["a"],void 0);i["default"]=u.exports},9195:function(t,i,e){"use strict";var r=e("9bce"),n=e.n(r);n.a},"933d":function(t,i,e){"use strict";e.r(i);var r=e("da7b"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},"964d":function(t,i,e){"use strict";var r=e("5063"),n=e.n(r);n.a},"9bce":function(t,i,e){var r=e("f08b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("dacf6382",r,!0,{sourceMap:!1,shadowMode:!1})},c0241:function(t,i,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e("53ca"));e("ac1f"),e("00b4");var a=r(e("0a0d")),o={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{currentIndex:0}},watch:{current:function(t,i){t!==i&&(this.currentIndex=t)}},computed:{itemStyle:function(){var t=this;return function(i){var e={};return t.nextMargin&&t.previousMargin&&(e.borderRadius=uni.$u.addUnit(t.radius),i!==t.currentIndex&&(e.transform="scale(0.92)")),e}}},methods:{getItemType:function(t){return"string"===typeof t?uni.$u.test.video(this.getSource(t))?"video":"image":"object"===(0,n.default)(t)&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":uni.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===(0,n.default)(t)&&this.keyName?t[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(t){var i=t.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=i,this.$emit("change",t.detail)},pauseVideo:function(t){var i=this.getSource(this.list[t]);if(uni.$u.test.video(i)){var e=uni.createVideoContext("video-".concat(t),this);e.pause()}},getPoster:function(t){return"object"===(0,n.default)(t)&&t.poster?t.poster:""},clickHandler:function(t){this.$emit("click",t)}}};i.default=o},c340:function(t,i,e){"use strict";var r=e("c6ab"),n=e.n(r);n.a},c6ab:function(t,i,e){var r=e("0fa6");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("79dff3a7",r,!0,{sourceMap:!1,shadowMode:!1})},d220:function(t,i,e){"use strict";e.r(i);var r=e("6f94"),n=e("933d");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("4e4e");var o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"26861ad0",null,!1,r["a"],void 0);i["default"]=u.exports},d261:function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-23a72621], uni-scroll-view[data-v-23a72621], uni-swiper-item[data-v-23a72621]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-23a72621]{display:flex;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-23a72621]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-23a72621]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-23a72621]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-23a72621]{width:12px}',""]),t.exports=i},d7d84:function(t,i,e){"use strict";e.r(i);var r=e("dd40"),n=e("f0dd");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("964d");var o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"23a72621",null,!1,r["a"],void 0);i["default"]=u.exports},da7b:function(t,i,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a630"),e("3ca3");var n=r(e("137c")),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,i=getCurrentPages(),e=i[i.length-1],r=e.$getAppWebview();r.addEventListener("hide",(function(){t.webviewHide=!0})),r.addEventListener("show",(function(){t.webviewHide=!1}))}}};i.default=a},db0b:function(t,i,e){"use strict";e.r(i);var r=e("c0241"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},dd40:function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===t.indicatorMode?e("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+t.indicatorMode],style:{width:t.$u.addUnit(t.lineWidth*t.length),backgroundColor:t.indicatorInactiveColor}},[e("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[t.lineStyle]})],1):t._e(),"dot"===t.indicatorMode?e("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},t._l(t.length,(function(i,r){return e("v-uni-view",{key:r,staticClass:"u-swiper-indicator__wrapper__dot",class:[r===t.current&&"u-swiper-indicator__wrapper__dot--active"],style:[t.dotStyle(r)]})})),1):t._e()],1)},n=[]},ea02:function(t,i,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e("ff6d")),a={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.lineWidth),t.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),t.backgroundColor=this.indicatorActiveColor,t},dotStyle:function(){var t=this;return function(i){var e={};return e.backgroundColor=i===t.current?t.indicatorActiveColor:t.indicatorInactiveColor,e}}}};i.default=a},f08b:function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=i},f0dd:function(t,i,e){"use strict";e.r(i);var r=e("ea02"),n=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},f990:function(t,i,e){"use strict";var r=e("1692"),n=e.n(r);n.a},fbd8:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return r}));var r={uSwiper:e("5948").default,uGap:e("8819").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-page"},[e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("基础功能")]),e("u-swiper",{attrs:{list:t.list1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("带标题")]),e("u-swiper",{attrs:{list:t.list2,keyName:"image",showTitle:!0,autoplay:!1,circular:!0}})],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("带指示器")]),e("u-swiper",{attrs:{list:t.list3,indicator:!0,indicatorMode:"line",circular:!0}})],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("加载中")]),e("u-swiper",{attrs:{list:t.list3,loading:!0}})],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("嵌入视频")]),e("u-swiper",{attrs:{list:t.list4,keyName:"url",autoplay:!1}})],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("自定义指示器")]),e("u-swiper",{attrs:{list:t.list5,autoplay:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),function(i){return t.current=i.current}.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"indicator",attrs:{slot:"indicator"},slot:"indicator"},t._l(t.list5,(function(i,r){return e("v-uni-view",{key:r,staticClass:"indicator__dot",class:[r===t.current&&"indicator__dot--active"]})})),1)],1),e("u-gap",{attrs:{bgColor:"transparent",height:"15"}}),e("u-swiper",{attrs:{list:t.list6,autoplay:!1,indicatorStyle:"right: 20px"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),function(i){return t.currentNum=i.current}.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"indicator-num",attrs:{slot:"indicator"},slot:"indicator"},[e("v-uni-text",{staticClass:"indicator-num__text"},[t._v(t._s(t.currentNum+1)+"/"+t._s(t.list6.length))])],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("卡片式")]),e("u-swiper",{attrs:{list:t.list3,previousMargin:"30",nextMargin:"30",circular:!0,autoplay:!1,radius:"5",bgColor:"#ffffff"}})],1)],1)},a=[]},ff6d:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var r={props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}};i.default=r}}]);