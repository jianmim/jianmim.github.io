(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-transition-transition"],{"0395":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-c496bc48], uni-scroll-view[data-v-c496bc48], uni-swiper-item[data-v-c496bc48]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-cell-group[data-v-c496bc48]{flex:1}.u-cell-group__title[data-v-c496bc48]{padding:16px 16px 8px}.u-cell-group__title__text[data-v-c496bc48]{font-size:15px;line-height:16px;color:#303133}.u-cell-group__wrapper[data-v-c496bc48]{position:relative}',""]),t.exports=e},"0a74":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("21d4")),r={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],computed:{gapStyle:function(){var t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=r},"180b":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("9995")),r={name:"u-cell-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default]};e.default=r},"1c67":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-page[data-v-4bcae401]{padding:0}.transition[data-v-4bcae401]{background-color:#3c9cff}',""]),t.exports=e},"1f48":function(t,e,a){"use strict";a.r(e);var n=a("0a74"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"21d4":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}};e.default=n},"2eab":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uLine:a("8435").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-cell-group",class:[t.customClass],style:[t.$u.addStyle(t.customStyle)]},[t.title?a("v-uni-view",{staticClass:"u-cell-group__title"},[t._t("title",[a("v-uni-text",{staticClass:"u-cell-group__title__text"},[t._v(t._s(t.title))])])],2):t._e(),a("v-uni-view",{staticClass:"u-cell-group__wrapper"},[t.border?a("u-line"):t._e(),t._t("default")],2)],1)},r=[]},3571:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},i=[]},"3c8f":function(t,e,a){"use strict";a.r(e);var n=a("aade"),i=a("4098");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c71c");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4bcae401",null,!1,n["a"],void 0);e["default"]=s.exports},4098:function(t,e,a){"use strict";a.r(e);var n=a("d20e"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"562c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={fade:{enter:{opacity:0},"enter-to":{opacity:1},leave:{opacity:1},"leave-to":{opacity:0}},"fade-up":{enter:{opacity:0,transform:"translateY(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(100%)"}},"fade-down":{enter:{opacity:0,transform:"translateY(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateY(-100%)"}},"fade-left":{enter:{opacity:0,transform:"translateX(-100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(-100%)"}},"fade-right":{enter:{opacity:0,transform:"translateX(100%)"},"enter-to":{opacity:1,transform:"translateY(0)"},leave:{opacity:1,transform:"translateY(0)"},"leave-to":{opacity:0,transform:"translateX(100%)"}},"slide-up":{enter:{transform:"translateY(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(100%)"}},"slide-down":{enter:{transform:"translateY(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateY(-100%)"}},"slide-left":{enter:{transform:"translateX(-100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(-100%)"}},"slide-right":{enter:{transform:"translateX(100%)"},"enter-to":{transform:"translateY(0)"},leave:{transform:"translateY(0)"},"leave-to":{transform:"translateX(100%)"}},zoom:{enter:{transform:"scale(0.95)"},"enter-to":{transform:"scale(1)"},leave:{transform:"scale(1)"},"leave-to":{transform:"scale(0.95)"}},"fade-zoom":{enter:{opacity:0,transform:"scale(0.95)"},"enter-to":{opacity:1,transform:"scale(1)"},leave:{opacity:1,transform:"scale(1)"},"leave-to":{opacity:0,transform:"scale(0.95)"}}}},"5d4f":function(t,e,a){var n=a("637b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("171dc923",n,!0,{sourceMap:!1,shadowMode:!1})},"637b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-a75f7a08], uni-scroll-view[data-v-a75f7a08], uni-swiper-item[data-v-a75f7a08]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}\n/**\n * vue版本动画内置的动画模式有如下：\n * fade：淡入\n * zoom：缩放\n * fade-zoom：缩放淡入\n * fade-up：上滑淡入\n * fade-down：下滑淡入\n * fade-left：左滑淡入\n * fade-right：右滑淡入\n * slide-up：上滑进入\n * slide-down：下滑进入\n * slide-left：左滑进入\n * slide-right：右滑进入\n */.u-fade-enter-active[data-v-a75f7a08],\n.u-fade-leave-active[data-v-a75f7a08]{transition-property:opacity}.u-fade-enter[data-v-a75f7a08],\n.u-fade-leave-to[data-v-a75f7a08]{opacity:0}.u-fade-zoom-enter[data-v-a75f7a08],\n.u-fade-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95);opacity:0}.u-fade-zoom-enter-active[data-v-a75f7a08],\n.u-fade-zoom-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.u-fade-down-enter-active[data-v-a75f7a08],\n.u-fade-down-leave-active[data-v-a75f7a08],\n.u-fade-left-enter-active[data-v-a75f7a08],\n.u-fade-left-leave-active[data-v-a75f7a08],\n.u-fade-right-enter-active[data-v-a75f7a08],\n.u-fade-right-leave-active[data-v-a75f7a08],\n.u-fade-up-enter-active[data-v-a75f7a08],\n.u-fade-up-leave-active[data-v-a75f7a08]{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.u-fade-up-enter[data-v-a75f7a08],\n.u-fade-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.u-fade-down-enter[data-v-a75f7a08],\n.u-fade-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.u-fade-left-enter[data-v-a75f7a08],\n.u-fade-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.u-fade-right-enter[data-v-a75f7a08],\n.u-fade-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.u-slide-down-enter-active[data-v-a75f7a08],\n.u-slide-down-leave-active[data-v-a75f7a08],\n.u-slide-left-enter-active[data-v-a75f7a08],\n.u-slide-left-leave-active[data-v-a75f7a08],\n.u-slide-right-enter-active[data-v-a75f7a08],\n.u-slide-right-leave-active[data-v-a75f7a08],\n.u-slide-up-enter-active[data-v-a75f7a08],\n.u-slide-up-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-slide-up-enter[data-v-a75f7a08],\n.u-slide-up-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.u-slide-down-enter[data-v-a75f7a08],\n.u-slide-down-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-slide-left-enter[data-v-a75f7a08],\n.u-slide-left-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-slide-right-enter[data-v-a75f7a08],\n.u-slide-right-leave-to[data-v-a75f7a08]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-zoom-enter-active[data-v-a75f7a08],\n.u-zoom-leave-active[data-v-a75f7a08]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.u-zoom-enter[data-v-a75f7a08],\n.u-zoom-leave-to[data-v-a75f7a08]{-webkit-transform:scale(.95);transform:scale(.95)}',""]),t.exports=e},"86c5":function(t,e,a){"use strict";var n=a("d294"),i=a.n(n);i.a},8819:function(t,e,a){"use strict";a.r(e);var n=a("3571"),i=a("1f48");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9195");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"3927d88e",null,!1,n["a"],void 0);e["default"]=s.exports},"8a34":function(t,e,a){"use strict";a.r(e);var n=a("ecb7"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},9110:function(t,e,a){"use strict";a.r(e);var n=a("180b"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},9195:function(t,e,a){"use strict";var n=a("9bce"),i=a.n(n);i.a},9299:function(t,e,a){var n=a("1c67");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("57b709b4",n,!0,{sourceMap:!1,shadowMode:!1})},"92c6":function(t,e,a){"use strict";a.r(e);var n=a("2eab"),i=a("9110");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("86c5");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"c496bc48",null,!1,n["a"],void 0);e["default"]=s.exports},9995:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:uni.$u.props.cellGroup.title},border:{type:Boolean,default:uni.$u.props.cellGroup.border}}};e.default=n},"9bce":function(t,e,a){var n=a("f08b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("dacf6382",n,!0,{sourceMap:!1,shadowMode:!1})},"9cd1":function(t,e,a){"use strict";var n=a("5d4f"),i=a.n(n);i.a},aade:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uGap:a("8819").default,uCellGroup:a("92c6").default,uCell:a("8486").default,uTransition:a("c55d").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-page"},[a("u-gap",{attrs:{height:"20",bgColor:"#fff"}}),a("u-cell-group",{attrs:{border:!0}},[t._l(t.list,(function(e,n){return a("u-cell",{key:n,attrs:{titleStyle:{fontWeight:500},title:e.title,clickable:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openTransition(e.mode)}}},[a("v-uni-image",{staticClass:"u-cell-icon",attrs:{slot:"icon",src:e.iconUrl,mode:"widthFix"},slot:"icon"})],1)})),a("u-transition",{attrs:{mode:t.mode,show:t.show,"custom-style":t.style},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)},beforeEnter:function(e){arguments[0]=e=t.$handleEvent(e),t.beforeEnter.apply(void 0,arguments)},enter:function(e){arguments[0]=e=t.$handleEvent(e),t.enter.apply(void 0,arguments)},afterEnter:function(e){arguments[0]=e=t.$handleEvent(e),t.afterEnter.apply(void 0,arguments)},beforeLeave:function(e){arguments[0]=e=t.$handleEvent(e),t.beforeLeave.apply(void 0,arguments)},leave:function(e){arguments[0]=e=t.$handleEvent(e),t.leave.apply(void 0,arguments)},afterLeave:function(e){arguments[0]=e=t.$handleEvent(e),t.afterLeave.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"transition"})],1)],2)],1)},r=[]},bc50:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.inited?a("v-uni-view",{ref:"u-transition",staticClass:"u-transition",class:t.classes,style:[t.mergeStyle],on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},c55d:function(t,e,a){"use strict";a.r(e);var n=a("bc50"),i=a("8a34");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9cd1");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"a75f7a08",null,!1,n["a"],void 0);e["default"]=s.exports},c71c:function(t,e,a){"use strict";var n=a("9299"),i=a.n(n);i.a},d20e:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mode:"",show:!1,style:{position:"fixed",top:"".concat(uni.$u.sys().windowHeight/2-50,"px"),left:"".concat(uni.$u.sys().windowWidth/2-50,"px"),width:"120px",height:"120px",backgroundColor:"#1989fa"},list:[{mode:"fade",title:"淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fade.png"},{mode:"fade-up",title:"上滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeUp.png"},{mode:"zoom",title:"缩放",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/zoom.png"},{mode:"fade-zoom",title:"缩放淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png"},{mode:"fade-down",title:"下滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeDown.png"},{mode:"fade-left",title:"左滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png"},{mode:"fade-right",title:"右滑淡入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/fadeRight.png"},{mode:"slide-up",title:"上滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideUp.png"},{mode:"slide-down",title:"下滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideDown.png"},{mode:"slide-left",title:"左滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideLeft.png"},{mode:"slide-right",title:"右滑进入",iconUrl:"https://cdn.uviewui.com/uview/demo/transition/slideRight.png"}]}},mixins:[uni.$u.mixin],methods:{openTransition:function(t){var e=this;this.mode=t,this.show=!0,setTimeout((function(){e.show=!1}),1500)},click:function(){},beforeEnter:function(){},enter:function(){},afterEnter:function(){},beforeLeave:function(){},leave:function(){},afterLeave:function(){}}};e.default=n},d294:function(t,e,a){var n=a("0395");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("48534348",n,!0,{sourceMap:!1,shadowMode:!1})},ecb7:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=n(a("f1d5")),o=n(a("f349")),s={name:"u-transition",data:function(){return{inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}},computed:{mergeStyle:function(){var t=this.viewStyle,e=this.customStyle;return(0,i.default)((0,i.default)({transitionDuration:"".concat(this.duration,"ms"),transitionTimingFunction:this.timingFunction},uni.$u.addStyle(e)),t)}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default,r.default],watch:{show:{handler:function(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}};e.default=s},f08b:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-3927d88e], uni-scroll-view[data-v-3927d88e], uni-swiper-item[data-v-3927d88e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t.exports=e},f1d5:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.transition.show},mode:{type:String,default:uni.$u.props.transition.mode},duration:{type:[String,Number],default:uni.$u.props.transition.duration},timingFunction:{type:String,default:uni.$u.props.transition.timingFunction}}};e.default=n},f349:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),r=n(a("1da1"));a("d3b7"),a("99af");n(a("562c"));var o=function(t){return{enter:"u-".concat(t,"-enter u-").concat(t,"-enter-active"),"enter-to":"u-".concat(t,"-enter-to u-").concat(t,"-enter-active"),leave:"u-".concat(t,"-leave u-").concat(t,"-leave-active"),"leave-to":"u-".concat(t,"-leave-to u-").concat(t,"-leave-active")}},s={methods:{clickHandler:function(){this.$emit("click")},vueEnter:function(){var t=this,e=o(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=e.enter,this.$nextTick((0,r.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,uni.$u.sleep(20);case 2:t.$emit("enter"),t.transitionEnded=!1,t.$emit("afterEnter"),t.classes=e["enter-to"];case 6:case"end":return a.stop()}}),a)}))))},vueLeave:function(){var t=this;if(this.display){var e=o(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=e.leave,this.$nextTick((function(){t.transitionEnded=!1,t.$emit("leave"),setTimeout(t.onTransitionEnd,t.duration),t.classes=e["leave-to"]}))}},onTransitionEnd:function(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}};e.default=s}}]);