(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-water-water"],{3108:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-460c6ebc]{background-color:#eee\n\t/* padding: 20rpx; */}body.?%PAGE?%[data-v-460c6ebc]{background-color:#eee}.plate-number-view[data-v-460c6ebc]{\n\t/* background: #FFFFFF; */border-radius:%?12?%;padding:%?40?% 0}uni-button[data-v-460c6ebc]{margin:%?50?% %?57?% 0}.buttons[data-v-460c6ebc]{position:fixed;bottom:0;width:%?750?%;height:%?100?%;background-color:#05beb6;border-radius:%?10?%;color:#fff;font-size:%?40?%}",""]),t.exports=n},"419c":function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{formData:{},type:"",state:!1,states:!1}},methods:{iTab:function(t){this.type=t},toCount:function(){this.formData.count=10*this.formData.water},toJoin:function(){this.state=!this.state},toJoins:function(){this.states=!this.states},toCounts:function(){this.formData.waters=10*this.formData.counts},toList:function(){uni.navigateTo({url:"./list"})}}};n.default=e},"5c8e":function(t,n,a){var e=a("3108");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("2d63f6df",e,!0,{sourceMap:!1,shadowMode:!1})},"8d13":function(t,n,a){"use strict";a.r(n);var e=a("419c"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},b006:function(t,n,a){"use strict";a.r(n);var e=a("e75d"),i=a("8d13");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("f88d");var c=a("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"460c6ebc",null,!1,e["a"],void 0);n["default"]=r.exports},e75d:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-image",{staticStyle:{width:"750px",height:"449rpx"},attrs:{src:"/static/water.png",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"text-cyan text-bold text-xxl margin-left-xl margin-top-xl"},[t._v("泊位号:2")]),a("v-uni-view",{staticClass:"text-red text-bold text-xxl margin-left-xl margin-top-lg"},[t._v("水价:20元/吨")]),1==t.type?a("v-uni-view",[a("v-uni-view",{staticClass:"flex_c margin-left-xl margin-top-lg text-xl"},[a("v-uni-text",[t._v("加水量：")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入加水量"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.toCount.apply(void 0,arguments)}},model:{value:t.formData.water,callback:function(n){t.$set(t.formData,"water",n)},expression:"formData.water"}})],1),a("v-uni-view",{staticClass:"flex_c margin-left-xl margin-top-lg text-xl"},[t._v("加水量费用："+t._s(t.formData.count))]),a("v-uni-view",{staticClass:"flex_sb_c"},[a("v-uni-button",{staticStyle:{"background-color":"RGBA(241, 123, 46, 1)",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.iTab("")}}},[t._v("返回")]),t.state?a("v-uni-button",{staticStyle:{"background-color":"#05beb6",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toJoin()}}},[t._v("结束加水")]):a("v-uni-button",{staticStyle:{"background-color":"#05beb6",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toJoin()}}},[t._v("启动加水")])],1)],1):2==t.type?a("v-uni-view",[a("v-uni-view",{staticClass:"flex_c margin-left-xl margin-top-lg text-xl"},[a("v-uni-text",[t._v("加水费用：")]),a("v-uni-input",{attrs:{type:"number",placeholder:"请输入加水量"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.toCounts.apply(void 0,arguments)}},model:{value:t.formData.counts,callback:function(n){t.$set(t.formData,"counts",n)},expression:"formData.counts"}})],1),a("v-uni-view",{staticClass:"flex_c margin-left-xl margin-top-lg text-xl"},[t._v("加水量："+t._s(t.formData.waters))]),a("v-uni-view",{staticClass:"flex_sb_c"},[a("v-uni-button",{staticStyle:{"background-color":"RGBA(241, 123, 46, 1)",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.iTab("")}}},[t._v("返回")]),t.states?a("v-uni-button",{staticStyle:{"background-color":"#05beb6",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toJoins()}}},[t._v("结束加水")]):a("v-uni-button",{staticStyle:{"background-color":"#05beb6",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toJoins()}}},[t._v("启动加水")])],1)],1):a("v-uni-view",{staticClass:"flex_sb_c"},[a("v-uni-button",{staticStyle:{"background-color":"#05beb6",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.iTab(1)}}},[t._v("定量加水")]),a("v-uni-button",{staticStyle:{"background-color":"RGBA(241, 123, 46, 1)",width:"350rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.iTab(2)}}},[t._v("定额加水")])],1),a("v-uni-view",{staticClass:"flex_c_c buttons",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toList.apply(void 0,arguments)}}},[t._v("查看账单")])],1)},i=[]},f88d:function(t,n,a){"use strict";var e=a("5c8e"),i=a.n(e);i.a}}]);