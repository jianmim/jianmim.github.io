(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-count-scroll-count-scroll"],{"0591":function(t,n,e){var i=e("1f7f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("5d4cdf47",i,!0,{sourceMap:!1,shadowMode:!1})},"0c3f":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"demo-title"},[e("v-uni-view",["first"===t.type?e("v-uni-view",{staticClass:"main_title"},[t.leftIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),e("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?e("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?e("v-uni-view",{staticClass:"second_title"},[e("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),e("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},o=[]},"0cf8":function(t,n,e){"use strict";var i=e("9f33"),a=e.n(i);a.a},"1f7f":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-count-scroll[data-v-58ff08e9]{display:inline-flex;align-items:center;justify-content:space-between}.tn-count-scroll__box[data-v-58ff08e9]{overflow:hidden}.tn-count-scroll__column[data-v-58ff08e9]{-webkit-transform:translateZ(0);transform:translateZ(0);display:flex;align-items:center;justify-content:center;flex-direction:column;transition-timing-function:cubic-bezier(0,1,0,1)}.tn-count-scroll__column__item[data-v-58ff08e9]{display:flex;align-items:center;justify-content:center}',""]),t.exports=n},3692:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("0e08").default,tnCountScroll:e("c441").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"components-count_scroll tn-safe-area-inset-bottom"},[e("tn-nav-bar",{attrs:{fixed:!0}},[t._v("countScroll数字滚动")]),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[e("demo-title",{attrs:{title:"基本使用"}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",[e("tn-count-scroll",{attrs:{value:888.88}})],1),e("v-uni-view",{staticClass:"tn-margin-left"},[e("tn-count-scroll",{attrs:{value:9999}})],1)],1)],1),e("demo-title",{attrs:{title:"加长持续时间"}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",[e("tn-count-scroll",{attrs:{value:888.88,duration:.5}})],1),e("v-uni-view",{staticClass:"tn-margin-left"},[e("tn-count-scroll",{attrs:{value:9999,duration:3}})],1)],1)],1),e("demo-title",{attrs:{title:"字体加大加粗"}},[e("tn-count-scroll",{attrs:{value:888.88,height:100,fontSize:100,bold:!0}})],1),e("demo-title",{attrs:{title:"自定义颜色"}},[e("tn-count-scroll",{attrs:{value:888.88,fontColor:"#E88C30"}})],1),e("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},"3a32":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=i},"3f8d":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("cc38")),o={name:"componentsCountTo",components:{demoTitle:a.default},data:function(){return{}},methods:{}};n.default=o},"4a09":function(t,n,e){"use strict";e.r(n);var i=e("7ff3"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},7570:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-count-scroll-class tn-count-scroll"},t._l(t.columns,(function(n,i){return e("v-uni-view",{key:i,staticClass:"tn-count-scroll__box",style:{width:t.$t.string.getLengthUnitValue(t.width),height:t.heightPxValue+"px"}},[e("v-uni-view",{staticClass:"tn-count-scroll__column",style:{transform:"translate3d(0, -"+t.keys[i]*t.heightPxValue+"px, 0)",transitionDuration:t.duration+"s"}},t._l(n,(function(n,i){return e("v-uni-view",{key:i,staticClass:"tn-count-scroll__column__item",class:[t.fontColorClass],style:{height:t.heightPxValue+"px",lineHeight:t.heightPxValue+"px",fontSize:t.fontSizeStyle||"32rpx",fontWeight:t.bold?"bold":"normal",color:t.fontColorStyle||"#080808"}},[t._v(t._s(n))])})),1)],1)})),1)},o=[]},"7705c":function(t,n,e){"use strict";e.r(n);var i=e("3f8d"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"7da2":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.components-count_scroll[data-v-3f760410]{min-height:100vh}',""]),t.exports=n},"7ff3":function(t,n,e){"use strict";var i=e("4ea4");e("a9e3"),e("d3b7"),e("ac1f"),e("25f0"),e("1276"),e("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("1af1")),o={name:"tn-count-scroll",mixins:[a.default],props:{value:{type:Number,default:0},height:{type:Number,default:32},width:{type:[String,Number],default:"auto"},bold:{type:Boolean,default:!1},duration:{type:Number,default:1.2},decimalSeparator:{type:String,default:"."},thousandthsSeparator:{type:String,default:""}},computed:{heightPxValue:function(){return uni.upx2px(this.height||0)}},data:function(){return{columns:[],keys:[]}},watch:{value:function(t){this.initColumn(t)}},created:function(){var t=this;this.initColumn(),setTimeout((function(){t.initColumn(t.value)}),20)},methods:{initColumn:function(t){t+="";for(var n=t.length,e=[],i=["0","1","2","3","4","5","6","7","8","9"],a=0;a<n;a++)t[a]===this.decimalSeparator||t[a]===this.thousandthsSeparator?e.push(t[a]):e.push(i);this.columns=e,this.roll(t)},roll:function(t){var n=t.toString().split(""),e=this.columns.length,i=[];while(n.length){var a=n.pop();a===this.decimalSeparator||a===this.thousandthsSeparator?i.unshift(0):i.unshift(Number(a))}while(i.length<e)i.unshift(0);this.keys=i}}};n.default=o},"9f33":function(t,n,e){var i=e("a035");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("773963b1",i,!0,{sourceMap:!1,shadowMode:!1})},a000:function(t,n,e){"use strict";e.r(n);var i=e("3692"),a=e("7705c");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("d752");var s,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3f760410",null,!1,i["a"],s);n["default"]=l.exports},a035:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.main_title[data-v-3bc5a1fa]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-3bc5a1fa]{padding:0 %?18?%}.main_title__icon[data-v-3bc5a1fa]{font-size:%?34?%}.second_title[data-v-3bc5a1fa]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-3bc5a1fa]{font-size:%?32?%;font-weight:700}.content[data-v-3bc5a1fa]{margin-top:%?30?%}.content--padding[data-v-3bc5a1fa]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},c441:function(t,n,e){"use strict";e.r(n);var i=e("7570"),a=e("4a09");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("eb4d");var s,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"58ff08e9",null,!1,i["a"],s);n["default"]=l.exports},cc38:function(t,n,e){"use strict";e.r(n);var i=e("0c3f"),a=e("e457");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("0cf8");var s,c=e("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"3bc5a1fa",null,!1,i["a"],s);n["default"]=l.exports},d752:function(t,n,e){"use strict";var i=e("fd72"),a=e.n(i);a.a},e457:function(t,n,e){"use strict";e.r(n);var i=e("3a32"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},eb4d:function(t,n,e){"use strict";var i=e("0591"),a=e.n(i);a.a},fd72:function(t,n,e){var i=e("7da2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("43977d84",i,!0,{sourceMap:!1,shadowMode:!1})}}]);