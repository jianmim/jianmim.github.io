(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-count-scroll-count-scroll"],{"06e9":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},"0970":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3"),e("14d9"),e("d401"),e("d3b7"),e("25f0"),e("3c65"),e("ddb0");var a=i(e("63c7")),o={name:"tn-count-scroll",mixins:[a.default],props:{value:{type:Number,default:0},height:{type:Number,default:32},width:{type:[String,Number],default:"auto"},bold:{type:Boolean,default:!1},duration:{type:Number,default:1.2},decimalSeparator:{type:String,default:"."},thousandthsSeparator:{type:String,default:""}},computed:{heightPxValue:function(){return uni.upx2px(this.height||0)}},data:function(){return{columns:[],keys:[]}},watch:{value:function(t){this.initColumn(t)}},created:function(){var t=this;this.initColumn(),setTimeout((function(){t.initColumn(t.value)}),20)},methods:{initColumn:function(t){t+="";for(var n=t.length,e=[],i=["0","1","2","3","4","5","6","7","8","9"],a=0;a<n;a++)t[a]===this.decimalSeparator||t[a]===this.thousandthsSeparator?e.push(t[a]):e.push(i);this.columns=e,this.roll(t)},roll:function(t){var n=t.toString().split(""),e=this.columns.length,i=[];while(n.length){var a=n.pop();a===this.decimalSeparator||a===this.thousandthsSeparator?i.unshift(0):i.unshift(Number(a))}while(i.length<e)i.unshift(0);this.keys=i}}};n.default=o},"0a1b":function(t,n,e){var i=e("06e9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("a62b35b2",i,!0,{sourceMap:!1,shadowMode:!1})},"116b":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"demo-title"},[e("v-uni-view",["first"===t.type?e("v-uni-view",{staticClass:"main_title"},[t.leftIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),e("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?e("v-uni-view",{staticClass:"second_title"},[e("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),e("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},a=[]},2497:function(t,n,e){"use strict";var i=e("4dc5"),a=e.n(i);a.a},"2dcf":function(t,n,e){"use strict";e.r(n);var i=e("116b"),a=e("9915");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("4882");var s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);n["default"]=c.exports},"2ffe":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-count-scroll-class tn-count-scroll"},t._l(t.columns,(function(n,i){return e("v-uni-view",{key:i,staticClass:"tn-count-scroll__box",style:{width:t.$tn.string.getLengthUnitValue(t.width),height:t.heightPxValue+"px"}},[e("v-uni-view",{staticClass:"tn-count-scroll__column",style:{transform:"translate3d(0, -"+t.keys[i]*t.heightPxValue+"px, 0)",transitionDuration:t.duration+"s"}},t._l(n,(function(n,i){return e("v-uni-view",{key:i,staticClass:"tn-count-scroll__column__item",class:[t.fontColorClass],style:{height:t.heightPxValue+"px",lineHeight:t.heightPxValue+"px",fontSize:t.fontSizeStyle||"32rpx",fontWeight:t.bold?"bold":"normal",color:t.fontColorStyle||"#080808"}},[t._v(t._s(n))])})),1)],1)})),1)},a=[]},"472b":function(t,n,e){"use strict";e.r(n);var i=e("2ffe"),a=e("dd64");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("2497");var s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7f0c9e5c",null,!1,i["a"],void 0);n["default"]=c.exports},4882:function(t,n,e){"use strict";var i=e("0a1b"),a=e.n(i);a.a},"4dc5":function(t,n,e){var i=e("b110");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2ac8d964",i,!0,{sourceMap:!1,shadowMode:!1})},5894:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("739c").default,tnCountScroll:e("472b").default},a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"components-count_scroll tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("countScroll数字滚动")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"基本使用"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-scroll",{attrs:{value:888.88}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-scroll",{attrs:{value:9999}})],1)],1)],1),n("demo-title",{attrs:{title:"加长持续时间"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-scroll",{attrs:{value:888.88,duration:.5}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-scroll",{attrs:{value:9999,duration:3}})],1)],1)],1),n("demo-title",{attrs:{title:"字体加大加粗"}},[n("tn-count-scroll",{attrs:{value:888.88,height:100,fontSize:100,bold:!0}})],1),n("demo-title",{attrs:{title:"自定义颜色"}},[n("tn-count-scroll",{attrs:{value:888.88,fontColor:"#E88C30"}})],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},"6bf4":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.components-count_scroll[data-v-36e94c2f]{min-height:100vh}',""]),t.exports=n},"79b8":function(t,n,e){"use strict";e.r(n);var i=e("5894"),a=e("fa85");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("c475");var s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"36e94c2f",null,!1,i["a"],void 0);n["default"]=c.exports},9915:function(t,n,e){"use strict";e.r(n);var i=e("c4ad"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},b110:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-count-scroll[data-v-7f0c9e5c]{display:inline-flex;align-items:center;justify-content:space-between}.tn-count-scroll__box[data-v-7f0c9e5c]{overflow:hidden}.tn-count-scroll__column[data-v-7f0c9e5c]{-webkit-transform:translateZ(0);transform:translateZ(0);display:flex;align-items:center;justify-content:center;flex-direction:column;transition-timing-function:cubic-bezier(0,1,0,1)}.tn-count-scroll__column__item[data-v-7f0c9e5c]{display:flex;align-items:center;justify-content:center}',""]),t.exports=n},bc0b:function(t,n,e){var i=e("6bf4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("72d0b341",i,!0,{sourceMap:!1,shadowMode:!1})},c475:function(t,n,e){"use strict";var i=e("bc0b"),a=e.n(i);a.a},c4ad:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=i},cf0d:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("2dcf")),o={name:"componentsCountTo",components:{demoTitle:a.default},data:function(){return{}},methods:{}};n.default=o},dd64:function(t,n,e){"use strict";e.r(n);var i=e("0970"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},fa85:function(t,n,e){"use strict";e.r(n);var i=e("cf0d"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}}]);