(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-tabs-tabs"],{"06e9":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},"0a1b":function(t,n,e){var a=e("06e9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("a62b35b2",a,!0,{sourceMap:!1,shadowMode:!1})},"116b":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"demo-title"},[e("v-uni-view",["first"===t.type?e("v-uni-view",{staticClass:"main_title"},[t.leftIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),e("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?e("v-uni-view",{staticClass:"second_title"},[e("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),e("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},i=[]},"2dcf":function(t,n,e){"use strict";e.r(n);var a=e("116b"),i=e("9915");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("4882");var s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5d860f10",null,!1,a["a"],void 0);n["default"]=c.exports},4882:function(t,n,e){"use strict";var a=e("0a1b"),i=e.n(a);i.a},"4d36":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.components-tabs[data-v-39a75280]{background-color:#f4f4f4;min-height:100vh}',""]),t.exports=n},"72f0":function(t,n,e){"use strict";e.r(n);var a=e("a376"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"89f4":function(t,n,e){"use strict";e.r(n);var a=e("c00d"),i=e("72f0");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("afad");var s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"39a75280",null,!1,a["a"],void 0);n["default"]=c.exports},9915:function(t,n,e){"use strict";e.r(n);var a=e("c4ad"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},a376:function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2dcf")),o={name:"componentsTabs",components:{demoTitle:i.default},data:function(){return{current:0,activeItemStyle:{borderTop:"1rpx solid #E6E6E6"},barStyle:{boxShadow:"12rpx 12rpx 16rpx #01BEFF"},scrollList:[{name:"关注",count:10},{name:"推荐"},{name:"热榜",count:"99+"},{name:"搞笑"},{name:"视频"},{name:"科技"},{name:"音乐"},{name:"电影"},{name:"游戏"}],fixedList:[{name:"关注",count:10},{name:"推荐"},{name:"热榜",count:"99+"},{name:"搞笑"}]}},methods:{tabChange:function(t){this.current=t}}};n.default=o},afad:function(t,n,e){"use strict";var a=e("da50"),i=e.n(a);i.a},c00d:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={tnNavBar:e("739c").default,tnTabs:e("dfa1").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"components-tabs tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0}},[t._v("tabs标签")]),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("demo-title",{attrs:{title:"默认",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1),e("demo-title",{attrs:{title:"隐藏底部滑块",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current,showBar:!1},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1),e("demo-title",{attrs:{title:"修改背景颜色",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current,backgroundColor:"#FFFFFF"},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"tn-margin-top"},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current,backgroundColor:"tn-main-gradient-indigo",activeColor:"#FFFFFF"},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1)],1),e("demo-title",{attrs:{title:"自定义标签宽高",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current,height:120,itemWidth:200,barWidth:140},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1),e("demo-title",{attrs:{title:"自定义标签、滑块",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.scrollList,current:t.current,backgroundColor:"#FFFFFF",activeItemStyle:t.activeItemStyle,barStyle:t.barStyle},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1),e("demo-title",{attrs:{title:"固定选项标签",contentPadding:!1}},[e("tn-tabs",{attrs:{list:t.fixedList,current:t.current,isScroll:!1,badgeOffset:[20,50]},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.tabChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},c4ad:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=a},da50:function(t,n,e){var a=e("4d36");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("e2f70876",a,!0,{sourceMap:!1,shadowMode:!1})}}]);