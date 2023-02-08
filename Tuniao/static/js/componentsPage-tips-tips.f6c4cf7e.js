(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-tips-tips"],{"136c":function(t,n,o){"use strict";o.r(n);var e=o("57d5"),i=o.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},"209f":function(t,n,o){"use strict";o.r(n);var e=o("6e04"),i=o.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},"3c5f":function(t,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("a9e3");var e={name:"tn-tips",props:{zIndex:{type:Number,default:0},position:{type:String,default:"top"},top:{type:Number,default:0}},computed:{tipsClass:function(){var t="";switch(this.position){case"top":t+=" tn-tips--top";break;case"center":t+=" tn-tips--center";break;case"bottom":t+=" tn-tips--bottom";break;default:t+=" tn-tips--top"}return this.showTips&&(t+=" tn-tips--show"),t},tipsStyle:function(){var t={};return"top"!==this.position&&""!==this.position||!this.top||(t.top=this.top+"px"),t.zIndex=(this.zIndex?this.zIndex:this.$t.zIndex.tips)+1,t},backgroundColorStyle:function(){return this.$t.color.getBackgroundColorStyle(this.backgroundColor)},backgroundColorClass:function(){return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor)},fontColorStyle:function(){return this.$t.color.getFontColorStyle(this.fontColor)},fontColorClass:function(){return this.$t.color.getFontColorInternalClass(this.fontColor)}},data:function(){return{timer:null,visibleSync:!1,showTips:!1,msg:"",backgroundColor:"",fontColor:""}},methods:{show:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.duration,e=void 0===o?2e3:o,i=n.msg,a=void 0===i?"":i,r=n.backgroundColor,s=void 0===r?"":r,l=n.fontColor,c=void 0===l?"":l;if(null!==this.timer&&clearTimeout(this.timer),!a)return this._clearOptions(),void this.$emit("close");this.msg=a,this.backgroundColor=s||"#01BEFF",this.fontColor=c||"#FFFFFF",this.change("visibleSync","showTips",!0),this.timer=setTimeout((function(){clearTimeout(t.timer),t.timer=null,t.change("showTips","visibleSync",!1)}),e)},change:function(t,n,o){var e=this;this[t]=o,this.timer=o?setTimeout((function(){e[n]=o,e.$emit(o?"open":"close")}),50):setTimeout((function(){e[n]=o,e.$emit(o?"open":"close"),e._clearOptions()}),300)},_clearOptions:function(){this.msg="",this.backgroundColor="",this.fontColor=""}}};n.default=e},"47de":function(t,n,o){"use strict";var e=o("cdf2"),i=o.n(e);i.a},"57d5":function(t,n,o){"use strict";o("7a82");var e=o("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("a9e3");var i=e(o("eab2")),a={name:"componentsTips",components:{dynamicDemoTemplate:i.default},data:function(){return{msg:"这是一条信息",backgroundColor:"",fontColor:"",duration:2e3,position:"",tips:["无需依赖额外的样式文件","使用tn-tips组件"],sectionList:[{name:"参数切换",section:[{title:"自定义颜色",optional:["默认","自定义"],methods:"colorChange"},{title:"弹出位置",optional:["默认","顶部","中间","底部"],methods:"positionChange"},{title:"关闭时间",optional:["默认","5000"],methods:"durationChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},showTips:function(){this.openTips()},positionChange:function(t){switch(t.index){case 0:this.position="";break;case 1:this.position="top";break;case 2:this.position="center";break;case 3:this.position="bottom";break}this.openTips()},colorChange:function(t){0===t.index?(this.backgroundColor="",this.fontColor=""):(this.backgroundColor="tn-bg-gray--light",this.fontColor="#E83A30"),this.openTips()},durationChange:function(t){this.duration=0===t.index?2e3:Number(t.name),this.openTips()},openTips:function(){this.$refs.tips.show({msg:this.msg,backgroundColor:this.backgroundColor,fontColor:this.fontColor,duration:this.duration})},closeTips:function(){this.$t.message.toast("tips提示框关闭了")}}};n.default=a},"5ac2":function(t,n,o){"use strict";o.r(n);var e=o("7452"),i=o("136c");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(a);var r=o("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"17341bec",null,!1,e["a"],void 0);n["default"]=s.exports},"5bfa":function(t,n,o){"use strict";var e=o("aff9"),i=o.n(e);i.a},"6e04":function(t,n,o){"use strict";o("7a82");var e=o("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("a9e3"),o("c975"),o("fb6a"),o("baa5"),o("caad"),o("2532");var i=e(o("63c7")),a={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(n)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var o=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(o)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var n=(new Date).getTime();if(n-this.clickTime<=this.clickIntervalTime)return;this.clickTime=n,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,o=void 0===n?{}:n;this.$emit("getuserinfo",o)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,o=void 0===n?{}:n;this.$emit("contact",o)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,o=void 0===n?{}:n;this.$emit("getphonenumber",o)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,o=void 0===n?{}:n;this.$emit("error",o)}}};n.default=a},7452:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}));var e={tnNavBar:o("739c").default,tnButton:o("fc2a").default,tnTips:o("c6b8").default},i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"components-tips"},[o("tn-nav-bar",{attrs:{fixed:!0}},[t._v("提示信息框")]),o("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[o("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!1},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)}}},[o("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showTips.apply(void 0,arguments)}}},[t._v("弹出Tips")])],1)],1),o("tn-tips",{ref:"tips",attrs:{position:t.position,top:t.vuex_custom_bar_height},on:{close:function(n){arguments[0]=n=t.$handleEvent(n),t.closeTips.apply(void 0,arguments)}}})],1)},a=[]},"758a":function(t,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.visibleSync?o("v-uni-view",{staticClass:"tn-tips-class tn-tips",class:[t.tipsClass],style:[t.tipsStyle]},[o("v-uni-view",{staticClass:"tn-tips__content",class:[t.backgroundColorClass,t.fontColorClass],style:{backgroundColor:t.backgroundColorStyle,color:t.fontColorStyle}},[t._v(t._s(t.msg))])],1):t._e()},i=[]},"8df4":function(t,n,o){"use strict";o.r(n);var e=o("3c5f"),i=o.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},aff9:function(t,n,o){var e=o("d70f");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("8a6d4ca8",e,!0,{sourceMap:!1,shadowMode:!1})},baa5:function(t,n,o){var e=o("23e7"),i=o("e58c");e({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},bc71:function(t,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(n){arguments[0]=n=t.$handleEvent(n),t.handleContact.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.handleError.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},c6b8:function(t,n,o){"use strict";o.r(n);var e=o("758a"),i=o("8df4");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(a);o("47de");var r=o("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"19cdb8ba",null,!1,e["a"],void 0);n["default"]=s.exports},cdf2:function(t,n,o){var e=o("f740");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("2ed3fe9a",e,!0,{sourceMap:!1,shadowMode:!1})},d70f:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=n},f740:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */\n/*注意问题：\n 1、fixed 元素宽度无法自适应，所以增加了子元素\n 2、fixed 和 display冲突导致动画效果消失，暂时使用visibility替代\n*/.tn-tips[data-v-19cdb8ba]{height:auto;position:fixed;box-sizing:border-box;display:flex;align-items:center;justify-content:center;transition:all .3s ease-in-out;opacity:0}.tn-tips__content[data-v-19cdb8ba]{word-wrap:break-word;word-break:break-all;width:100%;height:auto;text-align:center;background-color:rgba(0,0,0,.7);color:#fff}.tn-tips--top[data-v-19cdb8ba]{width:100%!important;\n  /* padding: 18rpx 30rpx; */top:0;left:0;-webkit-transform:translateY(-100%) translateZ(0);transform:translateY(-100%) translateZ(0);word-break:break-all}.tn-tips--center[data-v-19cdb8ba]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tn-tips--bottom[data-v-19cdb8ba]{bottom:%?120?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tn-tips--center .content[data-v-19cdb8ba], .tn-tips--bottom .content[data-v-19cdb8ba]{border-radius:%?8?%;padding:0}.tn-tips--center .tn-tips__content[data-v-19cdb8ba], .tn-tips--bottom .tn-tips__content[data-v-19cdb8ba]{padding:%?18?% %?30?%!important}.tn-tips--show[data-v-19cdb8ba]{opacity:1}.tn-tips--show.tn-tips--top[data-v-19cdb8ba]{-webkit-transform:translateY(0) translateZ(0)!important;transform:translateY(0) translateZ(0)!important}',""]),t.exports=n},fc2a:function(t,n,o){"use strict";o.r(n);var e=o("bc71"),i=o("209f");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(a);o("5bfa");var r=o("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"778c77a3",null,!1,e["a"],void 0);n["default"]=s.exports}}]);