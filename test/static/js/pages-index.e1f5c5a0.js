(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index"],{"005f":function(t,e,n){"use strict";n.r(e);var r=n("40a1"),a=n("6668");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("960a");var o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"28d17f37",null,!1,r["a"],void 0);e["default"]=c.exports},"0c47":function(t,e,n){var r=n("da84"),a=n("d44e");a(r.JSON,"JSON",!0)},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,a,i,o){try{var c=t[i](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,s,"next",t)}function s(t){r(o,a,i,c,s,"throw",t)}c(void 0)}))}},n("d3b7")},"23dc":function(t,e,n){var r=n("d44e");r(Math,"Math",!0)},"3fad":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'uni-page-body[data-v-a7a34406]{background-color:#f1f5fb}body.?%PAGE?%[data-v-a7a34406]{background-color:#f1f5fb}.info[data-v-a7a34406]{height:42vh;align-items:center;position:absolute;top:0;right:0;left:0;background-image:linear-gradient(45deg,#3688ff,#5c8dff);overflow:hidden;z-index:-1}.info[data-v-a7a34406]::before,\n.info[data-v-a7a34406]::after{content:"";position:absolute;left:50%;min-width:300vw;min-height:300vw;background:#fff;-webkit-animation:roateOne-data-v-a7a34406 10s linear infinite;animation:roateOne-data-v-a7a34406 10s linear infinite}.info[data-v-a7a34406]::before{top:39vh;border-radius:45%}.info[data-v-a7a34406]::after{top:36vh;opacity:.5;border-radius:52%}@-webkit-keyframes roateOne-data-v-a7a34406{0%{-webkit-transform:translate(-50%) rotate(0deg);transform:translate(-50%) rotate(0deg)}50%{-webkit-transform:translate(-50%,-2%) rotate(180deg);transform:translate(-50%,-2%) rotate(180deg)}100%{-webkit-transform:translate(-50%) rotate(1turn);transform:translate(-50%) rotate(1turn)}}@keyframes roateOne-data-v-a7a34406{0%{-webkit-transform:translate(-50%) rotate(0deg);transform:translate(-50%) rotate(0deg)}50%{-webkit-transform:translate(-50%,-2%) rotate(180deg);transform:translate(-50%,-2%) rotate(180deg)}100%{-webkit-transform:translate(-50%) rotate(1turn);transform:translate(-50%) rotate(1turn)}}.grid.col-3 > uni-view[data-v-a7a34406],\n.grid.col-3 > uni-navigator[data-v-a7a34406]{width:29%}.bg-img[data-v-a7a34406]{background-size:cover;background-position:50%;background-repeat:no-repeat}.max-400[data-v-a7a34406]{max-height:%?400?%;width:%?690?%}.max-300[data-v-a7a34406]{max-height:%?300?%;width:%?300?%}.max-150[data-v-a7a34406]{max-height:%?150?%;width:%?150?%}.max-100[data-v-a7a34406]{max-height:%?86?%;width:%?87?%}.paddings[data-v-a7a34406]{padding:%?20?% %?30?%}',""]),t.exports=e},"40a1":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"notice-main radius"},[n("v-uni-swiper",{staticClass:"notice-swiper",style:"height:"+t.height+"rpx;line-height:"+t.height+"rpx;",attrs:{autoplay:"true",interval:t.interval,duration:"1000",circular:"true",vertical:1==t.type}},t._l(t.dataList,(function(e,r){return n("v-uni-swiper-item",{key:r,on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.clickList(e)}}},[n("v-uni-view",{staticClass:"flex",style:"font-size:"+t.fontSize+"rpx;color:"+t.color},[n("v-uni-view",{staticClass:"margin-left-sm",staticStyle:{"margin-top":"6rpx"}},[n("v-uni-image",{staticStyle:{width:"32rpx",height:"24rpx"},attrs:{src:"/static/notice.png",mode:"aspectFill"}})],1),n("v-uni-text",{staticClass:"margin-left-xs"},[t._v(t._s(e.Title))])],1)],1)})),1)],1)},a=[]},4675:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r={props:{dataList:{type:Array,default:function(){return[]}},type:{type:Number,default:1},interval:{type:Number,default:3e3},height:{type:Number,default:66},fontSize:{type:Number,default:24},color:{type:String,default:"#05BEB6"}},data:function(){return{}},methods:{clickList:function(t){this.$emit("click",t)}}};e.default=r},5498:function(t,e,n){"use strict";n.r(e);var r=n("c5de"),a=n("6910");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7395");var o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"a7a34406",null,!1,r["a"],void 0);e["default"]=c.exports},6668:function(t,e,n){"use strict";n.r(e);var r=n("4675"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},6910:function(t,e,n){"use strict";n.r(e);var r=n("f900"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},7395:function(t,e,n){"use strict";var r=n("abf7"),a=n.n(r);a.a},7888:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".notice-main[data-v-28d17f37]{width:100%;height:%?68?%;background-color:#fff}.notice-swiper-item[data-v-28d17f37]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}",""]),t.exports=e},"944a":function(t,e,n){var r=n("d066"),a=n("e065"),i=n("d44e");a("toStringTag"),i(r("Symbol"),"Symbol")},"960a":function(t,e,n){"use strict";var r=n("fe16"),a=n.n(r);a.a},abf7:function(t,e,n){var r=n("3fad");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("16034202",r,!0,{sourceMap:!1,shadowMode:!1})},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c5de:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={liuNoticeBar:n("005f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.bannerList.banner?n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.bannerList.banner.length>0,expression:"bannerList.banner.length > 0"}]},[n("v-uni-image",{staticStyle:{width:"750rpx",height:"388rpx"},attrs:{src:t.imgUrl+t.bannerList.banner[0],mode:"aspectFill"}})],1)],1):t._e(),t.noticeList.length>0?n("v-uni-view",{staticClass:"margin-sm radius",staticStyle:{"margin-bottom":"0"}},[n("liu-notice-bar",{attrs:{dataList:t.noticeList,color:"#333333",interval:2e3},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1):t._e(),t._l(t.appList,(function(e,r){return[2==e.Depth&&0==e.MenuType?[1==e.MenuNum?n("v-uni-view",[t._l(e.children,(function(e,r){return[n("v-uni-image",{key:r+"_0",staticClass:"margin-sm",staticStyle:{"border-radius":"20rpx",width:"710rpx",height:"400rpx","margin-top":"0"},attrs:{src:t.imgUrl+e.MenuIcon}})]}))],2):t._e(),e.MenuNum>1?n("v-uni-view",{staticClass:"margin-sm radius bg-white"},[n("v-uni-view",{staticClass:"padding-tb-sm",staticStyle:{"border-bottom":"solid 1rpx #ddd"}},[e.IsText?n("v-uni-view",{staticClass:"text-grey text-bold text-lg margin-left-sm",staticStyle:{color:"#333333"}},[n("v-uni-text",{staticClass:"icon-titles text-cyan"}),t._v(t._s(e.MenuName))],1):t._e()],1),n("v-uni-view",{staticClass:"cu-item shadow padding"},[n("v-uni-view",{staticClass:"cu-card no-card",class:[3==e.MenuNum?"margin-left-xxl":""]},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"grid text-center",class:"col-"+e.MenuNum},[t._l(e.children,(function(r,a){return[n("v-uni-view",{key:a+"_0",staticClass:"margin-bottom-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navGoto(r.MenuUrl,r.MenuUrlType)}}},[n("v-uni-view",[n("v-uni-image",{class:[1==e.MenuNum?"max-400":2==e.MenuNum?"max-300":3==e.MenuNum?"max-150":"max-100"],staticStyle:{"border-radius":"20rpx"},attrs:{src:t.imgUrl+r.MenuIcon}})],1),r.IsText?n("v-uni-text",{staticStyle:{color:"#333333"}},[t._v(t._s(r.MenuName))]):t._e()],1)]}))],2)],1)],1)],1)],1):t._e()]:t._e(),2==e.Depth&&1==e.MenuType?[n("v-uni-view",{staticClass:"paddings"},[e.IsText?n("v-uni-view",{staticClass:"text-grey text-bold text-lg",staticStyle:{color:"#333333"}},[t._v(t._s(e.MenuName))]):t._e()],1),1==e.MenuNum?n("v-uni-view",[t._l(e.children,(function(e,r){return[n("v-uni-image",{key:r+"_0",staticClass:"margin-sm",staticStyle:{"border-radius":"20rpx",width:"710rpx",height:"400rpx","margin-top":"0"},attrs:{src:t.imgUrl+e.MenuIcon}})]}))],2):e.MenuNum>1?n("v-uni-view",{staticClass:"margin-lr-sm radius bg-white padding",staticStyle:{"margin-top":"0"}},[3==e.MenuNum?n("v-uni-view",[t._l(e.children,(function(r,a){return[3==a?n("v-uni-view",{key:a+"_0",staticClass:"flex"},[n("v-uni-view",{staticClass:"bg-img",staticStyle:{width:"350rpx",height:"220rpx","border-radius":"20rpx"},style:[{backgroundImage:"url("+t.imgUrl+e.children[0].MenuIcon+")"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navGotos(e.children[0])}}}),n("v-uni-view",{staticClass:"margin-left"},[n("v-uni-view",{staticClass:"bg-img",staticStyle:{width:"270rpx",height:"100rpx","border-radius":"20rpx"},style:[{backgroundImage:"url("+t.imgUrl+e.children[1].MenuIcon+")"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navGotos(e.children[1])}}}),n("v-uni-view",{staticClass:"bg-img margin-top-sm",staticStyle:{width:"270rpx",height:"100rpx","border-radius":"20rpx"},style:[{backgroundImage:"url("+t.imgUrl+e.children[2].MenuIcon+")"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navGotos(e.children[2])}}})],1)],1):t._e()]}))],2):n("v-uni-view",{staticClass:"cu-card no-card",class:"col-"+e.MenuNum},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"grid text-center",class:"col-"+e.MenuNum},[t._l(e.children,(function(r,a){return[n("v-uni-view",{key:a+"_0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navGoto(r.MenuUrl,r.MenuUrlType)}}},[n("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[n("v-uni-image",{class:[1==e.MenuNum?"max-400":2==e.MenuNum?"max-300":"max-100"],staticStyle:{"border-radius":"20rpx"},attrs:{src:t.imgUrl+r.MenuIcon}})],1),r.IsText?n("v-uni-text",{staticStyle:{color:"#333333"}},[t._v(t._s(r.MenuName))]):t._e()],1)]}))],2)],1)],1)],1):t._e()]:t._e()]})),n("v-uni-view",{staticStyle:{height:"120rpx"}})],2)},i=[]},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),c=new C(r||[]);return i(o,"_invoke",{value:L(t,n,c)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=d;var h={};function v(){}function p(){}function g(){}var m={};l(m,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==n&&a.call(w,c)&&(m=w);var y=g.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;i(this,"_invoke",{value:function(i,o){function c(){return new e((function(n,c){(function n(i,o,c,s){var u=f(t[i],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==(0,r.default)(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)})(i,o,n,c)}))}return n=n?n.then(c,c):c()}})}function L(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return E()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=_(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g,i(y,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new k(d(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(y),l(y,u,"Generator"),l(y,c,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},f900:function(t,e,n){"use strict";(function(t){n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("841c");var a=r(n("c7eb")),i=r(n("1da1")),o=r(n("ade3")),c={data:function(){var t;return t={isShow:!1,messageReminder:"",busyNum:0,typeid:"",token:"",userInfo:"",ColorList:this.ColorList,StatusBar:this.StatusBar,CustomBar:this.CustomBar,cardCur:1,serviceList:[],appList:[],contactList:[],bannerList:[],adList:[],navList:[],xjList:{},hdList:{},role:2,addmitApp:!1,count:1,newMsgContent:"",newMsgID:"",sorta:"CreateTime desc",keyWord:"",imgUrl:"",noticeList:[{id:"1",titile:"这里是第1条通知公告的内容"},{id:"2",titile:"这里是第2条通知公告的内容"}],avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],code:null,openid:null,uid:null},(0,o.default)(t,"token",""),(0,o.default)(t,"code2",""),t},onLoad:function(t){this.code2=t.code},onShow:function(){this.fetchData(),this.getBanner(),this.getNotice(),this.imgUrl=this.$imgUrl,this.openid=uni.getStorageSync("openid");var t=this.getQueryVariable("code");this.code=t||this.code2,this.CheckLogin()},methods:{toScanCode:function(){uni.scanCode({success:function(e){t.log("res: ",e);var n=decodeURIComponent(e.path),r=n.split(",");t.log("tmp: ",r),uni.navigateTo({url:"/pages/order/add"})}})},fetchData:function(e){var n=this;return(0,i.default)((0,a.default)().mark((function e(){var r,i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={Role:n.role},t.log("data",r),e.next=4,n.$http.get("MemberMenu/List",r);case 4:i=e.sent,t.log("res",i),0==i.code&&(n.appList=i.data);case 7:case"end":return e.stop()}}),e)})))()},fetchAllData:function(t){var e=this;return(0,i.default)((0,a.default)().mark((function n(){var r,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={ID:t},n.next=3,e.$http.get("MemberMenu/AllList",r);case 3:if(i=n.sent,0!=i.code){n.next=14;break}n.t0=t,n.next=2101e5===n.t0?8:2102e5===n.t0?10:2103e5===n.t0?12:14;break;case 8:return e.serviceList=i.data,n.abrupt("break",14);case 10:return e.appList=i.data,n.abrupt("break",14);case 12:return e.contactList=i.data,n.abrupt("break",14);case 14:case"end":return n.stop()}}),n)})))()},getBanner:function(){var e=this;return(0,i.default)((0,a.default)().mark((function n(){var r,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={type:1},n.next=3,e.$http.get("AppConfig/Get",r);case 3:i=n.sent,t.log("res",i),0==i.code&&(e.bannerList=i.data,e.bannerList.banner=e.bannerList.banner?JSON.parse(e.bannerList.banner):[],t.log("bannerList",e.bannerList));case 6:case"end":return n.stop()}}),n)})))()},getAd:function(){var e=this;return(0,i.default)((0,a.default)().mark((function n(){var r;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("MemberMenu/AdList");case 2:r=n.sent,t.log("res",r),0==r.code&&(e.adList=r.data);case 5:case"end":return n.stop()}}),n)})))()},getNotice:function(){var e=this;return(0,i.default)((0,a.default)().mark((function n(){var r,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={PageSize:10,PageIndex:1},n.next=3,e.$http.get("AppNotice/List",r);case 3:i=n.sent,t.log("res",i),0==i.code&&(e.noticeList=i.data.list,t.log("noticeList",e.noticeList));case 6:case"end":return n.stop()}}),n)})))()},navGotos:function(e){switch(t.log(e),e.MenuUrlType){case"1":uni.navigateTo({url:e.MenuUrl});break;case"2":uni.navigateTo({url:"/pages/goto/goto?url="+encodeURIComponent(e.MenuUrl)});break;case"3":this.toScanCode();break}},navGoto:function(e,n){switch(t.log(e,n),n){case"1":uni.navigateTo({url:e});break;case"2":uni.navigateTo({url:"/pages/goto/goto?url="+encodeURIComponent(e)});break;case"3":this.toScanCode();break}},toService:function(){t.log("toService")},CheckLogin:function(){var e=this;return(0,i.default)((0,a.default)().mark((function n(){var r,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http_a.get("TradingAccount/CheckLogin");case 2:if(r=n.sent,t.log("res: ",r),0!=r.code){n.next=10;break}e.uid=r.data,uni.setStorageSync("uid",r.data.Uid),uni.setStorageSync("gztoken",r.data.Token),n.next=19;break;case 10:if(!e.code){n.next=18;break}return n.next=13,e.$http_a.get("TradingAccount/CheckRegBind",{code:e.code,loginType:99});case 13:i=n.sent,t.log("res: ",i),0==i.code?(e.openid=i.data.openid,e.uid=i.data.Uid,e.token=i.data.token,uni.setStorageSync("openid",e.openid),uni.setStorageSync("gztoken",e.token),e.uid>0?uni.setStorageSync("uid",e.uid):uni.reLaunch({url:"../pages/login/register"})):(e.openid=i.data.openid,uni.setStorageSync("openid",e.openid),e.token=i.data.token,uni.setStorageSync("gztoken",e.token)),n.next=19;break;case 18:e.getCode();case 19:case"end":return n.stop()}}),n)})))()},getCode:function(){var t=this;return(0,i.default)((0,a.default)().mark((function e(){var n,r;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:"wx8b00d7ed650fa976",n=encodeURIComponent("http://zhyggzd.maixincloud.com/?source=public"),t.code=t.getQueryVariable(),null!=t.code&&""!==t.code&&void 0!=t.code||(r="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8b00d7ed650fa976&redirect_uri="+n+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",window.location.href=r);case 4:case"end":return e.stop()}}),e)})))()},getQueryVariable:function(t){for(var e=window.location.search.substring(1),n=e.split("&"),r=0;r<n.length;r++){var a=n[r].split("=");if(a[0]==t)return a[1]}return null}}};e.default=c}).call(this,n("5a52")["default"])},fe16:function(t,e,n){var r=n("7888");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("2f03d431",r,!0,{sourceMap:!1,shadowMode:!1})}}]);