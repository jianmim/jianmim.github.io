(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-count-to-count-to"],{"06e9":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=n},"0a1b":function(t,n,a){var i=a("06e9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("a62b35b2",i,!0,{sourceMap:!1,shadowMode:!1})},"0a8a":function(t,n,a){"use strict";a.r(n);var i=a("3fd3"),e=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},"0f4a":function(t,n,a){"use strict";var i=a("ac3c"),e=a.n(i);e.a},"116b":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"demo-title"},[a("v-uni-view",["first"===t.type?a("v-uni-view",{staticClass:"main_title"},[t.leftIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),a("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?a("v-uni-view",{staticClass:"second_title"},[a("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),a("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},e=[]},"13e0":function(t,n,a){"use strict";a.r(n);var i=a("af83"),e=a("d988");for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("0f4a");var o=a("f0c5"),l=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"430c269e",null,!1,i["a"],void 0);n["default"]=l.exports},"2dcf":function(t,n,a){"use strict";a.r(n);var i=a("116b"),e=a("9915");for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("4882");var o=a("f0c5"),l=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);n["default"]=l.exports},"2dd0":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return i}));var i={tnNavBar:a("739c").default,tnCountTo:a("13e0").default},e=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"components-count_to tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[this._v("countTo数字跳转")]),n("v-uni-view",{style:{paddingTop:this.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"基本使用"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-to",{attrs:{startVal:0,endVal:1e3}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-to",{attrs:{startVal:100,endVal:2e3}})],1)],1)],1),n("demo-title",{attrs:{title:"显示小数"}},[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-left"},[n("v-uni-view",[n("tn-count-to",{attrs:{startVal:0,endVal:1000.9,decimals:1}})],1),n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-count-to",{attrs:{startVal:0,endVal:1000.99,decimals:2}})],1)],1)],1),n("demo-title",{attrs:{title:"字体加大加粗显示"}},[n("tn-count-to",{attrs:{startVal:0,endVal:1e3,bold:!0,fontSize:100}})],1),n("demo-title",{attrs:{title:"自定义字体颜色"}},[n("tn-count-to",{attrs:{startVal:0,endVal:1e3,fontColor:"#A4E82F"}})],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},s=[]},"3fd3":function(t,n,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("2dcf")),s={name:"componentsCountTo",components:{demoTitle:e.default},data:function(){return{}},methods:{}};n.default=s},4882:function(t,n,a){"use strict";var i=a("0a1b"),e=a.n(i);e.a},"8aba":function(t,n,a){"use strict";a.r(n);var i=a("2dd0"),e=a("0a8a");for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("fe58");var o=a("f0c5"),l=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"1393bf4a",null,!1,i["a"],void 0);n["default"]=l.exports},9915:function(t,n,a){"use strict";a.r(n);var i=a("c4ad"),e=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},ac3c:function(t,n,a){var i=a("ffcf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("f36f4a90",i,!0,{sourceMap:!1,shadowMode:!1})},af83:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return e})),a.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"tn-count-num-class tn-count-num",class:[this.fontColorClass],style:{fontSize:this.fontSizeStyle||"50rpx",fontWeight:this.bold?"bold":"normal",color:this.fontColorStyle||"#080808"}},[this._v(this._s(this.displayValue))])},e=[]},c4ad:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};n.default=i},d579:function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.components-count_to[data-v-1393bf4a]{min-height:100vh}',""]),t.exports=n},d988:function(t,n,a){"use strict";a.r(n);var i=a("ffa4"),e=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},e294:function(t,n,a){var i=a("d579");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("2cc420f4",i,!0,{sourceMap:!1,shadowMode:!1})},fe58:function(t,n,a){"use strict";var i=a("e294"),e=a.n(i);e.a},ffa4:function(t,n,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("a9e3"),a("ac1f"),a("00b4"),a("5319"),a("acd8");var e=i(a("63c7")),s={name:"tn-count-to",mixins:[e.default],props:{startVal:{type:Number,default:0},endVal:{type:Number,default:0,required:!0},autoplay:{type:Boolean,default:!0},duration:{type:Number,default:2e3},useEasing:{type:Boolean,default:!0},decimals:{type:Number,default:0},decimalSeparator:{type:String,default:"."},thousandthsSeparator:{type:String,default:""},bold:{type:Boolean,default:!1}},computed:{countDown:function(){return this.startVal>this.endVal}},data:function(){return{localStartVal:this.startVal,localDuration:this.duration,displayValue:this.formatNumber(this.startVal),printValue:null,paused:!1,startTime:null,remainingTime:null,timestamp:null,lastTime:0,rAF:null}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remainingTime,this.localStartVal=this.printValue,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cnacelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},destroyed:function(){this.cancelAnimationFrame(this.rAF)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var n=t-this.startTime;this.remainingTime=this.localDuration-n,this.useEasing?(this.countDown&&(this.printValue=this.localStartVal-this.easingFn(n,0,this.localStartVal-this.endVal,this.localDuration)),this.printValue=this.easingFn(n,this.localStartVal,this.endVal-this.localStartVal,this.localDuration)):this.countDown?this.printValue=this.localStartVal-(this.localStartVal-this.endVal)*(n/this.localDuration):this.printValue=this.localStartVal+(this.endVal-this.localStartVal)*(n/this.localDuration),this.countDown?this.printValue=this.printValue<this.endVal?this.endVal:this.printValue:this.printValue=this.printValue>this.endVal?this.endVal:this.printValue,this.displayValue=this.formatNumber(this.printValue),n<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},easingFn:function(t,n,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+n},requestAnimationFrame:function(t){var n=(new Date).getTime(),a=Math.max(0,16-(n-this.lastTime)),i=setTimeout((function(){t&&t(n+a)}),a);return this.lastTime=n+a,i},clearAnimationFrame:function(t){clearTimeout(t)},formatNumber:function(t){var n=/(\d+)(\d{3})/;t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var a=t.split("."),i=a[0],e=a.length>1?this.decimalSeparator+a[1]:"";if(this.thousandthsSeparator&&!this.isNumber(this.thousandthsSeparator))while(n.test(i))i=i.replace(n,"$1"+this.thousandthsSeparator+"$2");return i+e},isNumber:function(t){return!isNaN(parseFloat(t))}}};n.default=s},ffcf:function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-count-num[data-v-430c269e]{display:inline-flex;text-align:center;line-height:1}',""]),t.exports=n}}]);