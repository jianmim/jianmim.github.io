(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-shadow"],{"12fc":function(i,t,s){"use strict";s.r(t);var a=s("3798"),e=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(i){s.d(t,i,(function(){return a[i]}))}(n);t["default"]=e.a},3798:function(i,t,s){"use strict";s("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{size:!1}},methods:{SetSize:function(i){this.size=i.detail.value}}}},"9aff":function(i,t,s){"use strict";s.r(t);var a=s("dcc39"),e=s("12fc");for(var n in e)["default"].indexOf(n)<0&&function(i){s.d(t,i,(function(){return e[i]}))}(n);var c=s("f0c5"),l=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"7012a1e4",null,!1,a["a"],void 0);t["default"]=l.exports},dcc39:function(i,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return e})),s.d(t,"a",(function(){}));var a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[i._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[i._v("边框阴影")])],2),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),i._v("边框")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{staticClass:"sm",class:i.size?"checked":"",on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.SetSize.apply(void 0,arguments)}}})],1)],1),s("v-uni-view",{staticClass:"padding bg-white text-center"},[s("v-uni-view",{staticClass:"padding",class:i.size?"solids":"solid"},[i._v("四周")]),s("v-uni-view",{staticClass:"padding margin-top",class:i.size?"solids-top":"solid-top"},[i._v("上")]),s("v-uni-view",{staticClass:"padding margin-top",class:i.size?"solids-right":"solid-right"},[i._v("右")]),s("v-uni-view",{staticClass:"padding margin-top",class:i.size?"solids-bottom":"solid-bottom"},[i._v("下")]),s("v-uni-view",{staticClass:"padding margin-top",class:i.size?"solids-left":"solid-left"},[i._v("左")])],1),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),i._v("阴影")],1)],1),s("v-uni-view",{staticClass:"padding text-center"},[s("v-uni-view",{staticClass:"padding-xl radius shadow bg-white"},[i._v("默认阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow bg-blue margin-top"},[i._v("根据背景颜色而改变的阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow shadow-lg bg-white margin-top"},[i._v("长阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow shadow-lg bg-blue margin-top"},[i._v("长阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow-warp bg-white margin-top"},[i._v("翘边阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow-blur bg-red margin-top bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg)"}},[s("v-uni-view",[i._v("根据背景图而改变的阴影")])],1)],1)],1)},e=[]}}]);