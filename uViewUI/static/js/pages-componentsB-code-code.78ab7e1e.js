(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-code-code"],{"21bb":function(t,e,n){var i=n("c320");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("fa5f7cc2",i,!0,{sourceMap:!1,shadowMode:!1})},"34b2":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tips:"",tips1:"",tips2:"",disabled1:!1,disabled2:!1,disabled3:!1}},onReady:function(){},methods:{codeChange:function(t){this.tips=t},codeChange1:function(t){this.tips1=t},codeChange2:function(t){this.tips2=t},getCode:function(){var t=this;this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("验证码已发送"),t.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode1:function(){var t=this;this.$refs.uCode1.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("验证码已发送"),t.$refs.uCode1.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},getCode2:function(){var t=this;this.$refs.uCode2.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("验证码已发送"),t.$refs.uCode2.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")}}};e.default=i},"6a2c":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uCode:n("db80").default,uButton:n("f849").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-page"},[n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("基础功能")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-code",{ref:"uCode",attrs:{seconds:"20","change-text":"XS获取"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)},start:function(e){arguments[0]=e=t.$handleEvent(e),t.disabled1=!0},end:function(e){arguments[0]=e=t.$handleEvent(e),t.disabled1=!1}}}),n("u-button",{attrs:{text:t.tips,type:"success",size:"small",disabled:t.disabled1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-code",{ref:"uCode1",attrs:{"keep-running":!0,"change-text":"倒计时XS"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange1.apply(void 0,arguments)},start:function(e){arguments[0]=e=t.$handleEvent(e),t.disabled2=!0},end:function(e){arguments[0]=e=t.$handleEvent(e),t.disabled2=!1}}}),n("u-button",{attrs:{type:"primary",text:t.tips1,size:"small",disabled:t.disabled2},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode1.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("文本样式")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("u-code",{ref:"uCode2",attrs:{"keep-running":!0,"start-text":"点我获取验证码"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange2.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"u-page__code-text",attrs:{text:t.tips2},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode2.apply(void 0,arguments)}}},[t._v(t._s(t.tips2))])],1)],1)],1)},a=[]},"94c5":function(t,e,n){"use strict";n.r(e);var i=n("6a2c"),o=n("e91c");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d6bc");var s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6b83095c",null,!1,i["a"],void 0);e["default"]=u.exports},c320:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-page__code-text[data-v-6b83095c]{color:#3c9cff;font-size:15px}.u-demo-block__content[data-v-6b83095c]{display:flex;flex-direction:row}',""]),t.exports=e},d6bc:function(t,e,n){"use strict";var i=n("21bb"),o=n.n(i);o.a},e91c:function(t,e,n){"use strict";n.r(e);var i=n("34b2"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);