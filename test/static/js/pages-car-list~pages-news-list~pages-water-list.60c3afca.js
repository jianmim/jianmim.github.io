(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car-list~pages-news-list~pages-water-list"],{"0426":function(t,e,n){"use strict";n.r(e);var r=n("301be"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"0c47":function(t,e,n){var r=n("da84"),i=n("d44e");i(r.JSON,"JSON",!0)},"15ef":function(t,e,n){var r=n("5395");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("6557850a",r,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var l=t[o](a),c=l.value}catch(u){return void n(u)}l.done?e(c):Promise.resolve(c).then(r,i)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function l(t){r(a,i,o,l,c,"next",t)}function c(t){r(a,i,o,l,c,"throw",t)}l(void 0)}))}},n("d3b7")},"23dc":function(t,e,n){var r=n("d44e");r(Math,"Math",!0)},"301be":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f");var r={props:{value:{type:Number,default:0},tabs:{type:Array,default:function(){return[]}},bgColor:{type:String,default:"#fff"},padding:{type:String,default:"0"},color:{type:String,default:"#333"},activeColor:{type:String,default:"#05BEB6"},fontSize:{type:String,default:"28rpx"},activeFontSize:{type:String,default:"32rpx"},bold:{type:Boolean,default:!0},scroll:{type:Boolean,default:!0},height:{type:String,default:"80rpx"},lineColor:{type:String,default:"#05BEB6"},lineHeight:{type:String,default:"5rpx"},lineScale:{type:Number,default:1},lineRadius:{type:String,default:"10rpx"},pills:{type:Boolean,default:!1},pillsColor:{type:String,default:"#F1F4F7"},pillsBorderRadius:{type:String,default:"10rpx"},field:{type:String,default:""},fixed:{type:Boolean,default:!1},paddingItem:{type:String,default:"0 22rpx"},lineAnimation:{type:Boolean,default:!0}},data:function(){return{elId:"",lineWidth:30,currentWidth:0,lineLeft:0,pillsLeft:0,scrollLeft:0,containerWidth:0,current:0}},watch:{value:function(t){var e=this;this.current=t,this.$nextTick((function(){e.getTabItemWidth()}))},current:function(t){this.$emit("input",t)},tabs:function(t){var e=this;this.$nextTick((function(){e.getTabItemWidth()}))}},methods:{randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r},change:function(t){var e=!!this.tabs[t].disabled;this.current===t||e||(this.current=t,this.$emit("change",t))},getTabItemWidth:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#scrollContainer").boundingClientRect((function(e){!t.containerWidth&&e&&(t.containerWidth=e.width)})).exec(),e.selectAll(".v-tabs__container-item").boundingClientRect((function(e){if(e){var n=0,r=0;if(e)for(var i=0;i<e.length;i++)if(i<t.current)n+=e[i].width;else{if(i!=t.current)break;r=e[i].width}t.currentWidth=r,t.lineWidth=r*t.lineScale*1,t.lineLeft=n+r/2,t.pillsLeft=n,t.scroll&&(t.scrollLeft=t.lineLeft-t.containerWidth/2)}})).exec()}},mounted:function(){var t=this;this.elId="xfjpeter_"+this.randomString(),this.current=this.value,this.$nextTick((function(){t.getTabItemWidth()}))}};e.default=r},"3fb6":function(t,e,n){"use strict";n.r(e);var r=n("6227"),i=n("0426");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ffc9");var a=n("f0c5"),l=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"3edb9c36",null,!1,r["a"],void 0);e["default"]=l.exports},5395:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.v-tabs[data-v-3edb9c36]{width:100%;box-sizing:border-box;overflow:hidden}.v-tabs[data-v-3edb9c36] ::-webkit-scrollbar{display:none}.v-tabs__container[data-v-3edb9c36]{min-width:100%;position:relative;display:inline-flex;align-items:center;white-space:nowrap;overflow:hidden}.v-tabs__container-item[data-v-3edb9c36]{display:flex;align-items:center;height:100%;position:relative;z-index:1;transition:all .3s;white-space:nowrap}.v-tabs__container-item.disabled[data-v-3edb9c36]{opacity:.5;color:#999}.v-tabs__container-line[data-v-3edb9c36]{position:absolute;bottom:0}.v-tabs__container-pills[data-v-3edb9c36]{position:absolute;z-index:0}.v-tabs__container-line.animation[data-v-3edb9c36], .v-tabs__container-pills.animation[data-v-3edb9c36]{transition:all .3s linear}',""]),t.exports=e},6227:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"v-tabs",attrs:{id:t.elId}},[n("v-uni-scroll-view",{style:{position:t.fixed?"fixed":"relative",zIndex:9},attrs:{id:"scrollContainer","scroll-x":t.scroll,"scroll-left":t.scroll?t.scrollLeft:0,"scroll-with-animation":t.scroll}},[n("v-uni-view",{staticClass:"v-tabs__container",style:{display:t.scroll?"inline-flex":"flex",whiteSpace:t.scroll?"nowrap":"normal",background:t.bgColor,height:t.height,padding:t.padding}},[t._l(t.tabs,(function(e,r){return n("v-uni-view",{key:r,class:["v-tabs__container-item",{disabled:!!e.disabled}],style:{color:t.current==r?t.activeColor:t.color,fontSize:(t.current,t.fontSize),fontWeight:t.bold&&t.current==r?"bold":"",justifyContent:t.scroll?"":"center",flex:t.scroll?"":1,padding:t.paddingItem},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(r)}}},[t._v(t._s(t.field?e[t.field]:e))])})),t.pills?n("v-uni-view",{class:["v-tabs__container-pills",{animation:t.lineAnimation}],style:{background:t.pillsColor,borderRadius:t.pillsBorderRadius,left:t.pillsLeft+"px",width:t.currentWidth+"px",height:t.height}}):n("v-uni-view",{class:["v-tabs__container-line",{animation:t.lineAnimation}],style:{background:t.lineColor,width:t.lineWidth+"px",height:t.lineHeight,borderRadius:t.lineRadius,left:t.lineLeft+"px",transform:"translateX(-"+t.lineWidth/2+"px)"}})],2)],1),n("v-uni-view",{staticClass:"v-tabs__placeholder",style:{height:t.fixed?t.height:"0",padding:t.padding}})],1)},i=[]},"944a":function(t,e,n){var r=n("d066"),i=n("e065"),o=n("d44e");i("toStringTag"),o(r("Symbol"),"Symbol")},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(W){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new k(r||[]);return o(a,"_invoke",{value:L(t,n,l)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(W){return{type:"throw",arg:W}}}t.wrap=f;var h={};function p(){}function v(){}function y(){}var g={};s(g,l,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(j([])));m&&m!==n&&i.call(m,l)&&(g=m);var w=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;o(this,"_invoke",{value:function(o,a){function l(){return new e((function(n,l){(function n(o,a,l,c){var u=d(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==(0,r.default)(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,l,c)}),(function(t){n("throw",t,l,c)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return n("throw",t,l,c)}))}c(u.arg)})(o,a,n,l)}))}return n=n?n.then(l,l):l()}})}function L(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return C()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=S(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=d(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=y,o(w,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,l,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},ffc9:function(t,e,n){"use strict";var r=n("15ef"),i=n.n(r);i.a}}]);