(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-login-demo1-demo1"],{"174b":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-code-class tn-code"})},a=[]},"20bd":function(t,n,e){"use strict";var i=e("6d45"),o=e.n(i);o.a},"2c9b":function(t,n,e){var i=e("f75c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("33a0539f",i,!0,{sourceMap:!1,shadowMode:!1})},"38de":function(t,n,e){"use strict";var i=e("4ea4");e("caad"),e("c975"),e("baa5"),e("fb6a"),e("a9e3"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("1af1")),a={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(n)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(e)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var n=(new Date).getTime();if(n-this.clickTime<=this.clickIntervalTime)return;this.clickTime=n,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("getuserinfo",e)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("contact",e)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("getphonenumber",e)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.detail,e=void 0===n?{}:n;this.$emit("error",e)}}};n.default=a},4192:function(t,n,e){"use strict";e.r(n);var i=e("7989"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"48b6":function(t,n,e){"use strict";e.r(n);var i=e("174b"),o=e("4192");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("ca29");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7415c746",null,!1,i["a"],s);n["default"]=c.exports},5263:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(n){arguments[0]=n=t.$handleEvent(n),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(n){arguments[0]=n=t.$handleEvent(n),t.handleContact.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.handleError.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},a=[]},"5fe4":function(t,n,e){"use strict";var i=e("d6b1"),o=e.n(i);o.a},"6d45":function(t,n,e){var i=e("fc31");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("24731190",i,!0,{sourceMap:!1,shadowMode:!1})},7989:function(t,n,e){"use strict";e("a9e3"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"tn-verification-code",props:{seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},countDownText:{type:String,default:"s秒后重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{timer:null,secNum:this.seconds,canGetCode:!0}},watch:{seconds:{handler:function(t){this.secNum=t},immediate:!0}},mounted:function(){this.checkKeepRunning()},beforeDestroy:function(){this.setTimeToStorage(),this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{checkKeepRunning:function(){var t=Number(uni.getStorageSync(this.uniqueKey+"_$tCountDownTimestamp"));if(!t)return this.changeEvent(this.startText);var n=Math.floor(+new Date/1e3);this.keepRunning&&t&&t>n?(this.secNum=t-n,uni.removeStorageSync(this.uniqueKey+"_$tCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var t=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.countDownText.replace(/s|S/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--t.secNum?t.changeEvent(t.countDownText.replace(/s|S/,t.secNum)):(t.reset(),t.$emit("end"))}),1e3)},reset:function(){this.canGetCode=!0,this.timer&&(clearInterval(this.timer),this.timer=null),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(t){this.$emit("change",t)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var t=Math.floor(+new Date/1e3);uni.setStorageSync(this.uniqueKey+"_$tCountDownTimestamp",t+this.secNum)}}}};n.default=i},"7e55":function(t,n,e){"use strict";e.r(n);var i=e("ba94"),o=e("c799");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("5fe4");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0c380560",null,!1,i["a"],s);n["default"]=c.exports},a2ab:function(t,n,e){e("96cf");var i=e("c973");t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var n=t[0];1!=t.length||n.route&&"pages/index/index"==n.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(regeneratorRuntime.mark((function n(){var e,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,e){n.next=15;break}return n.prev=3,n.next=6,t.$t.updateCustomBar();case 6:o=n.sent,e=o.customBarHeight,i=o.statusBarHeight,n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),n.abrupt("return");case 15:t.$t.vuex("vuex_status_bar_height",i),t.$t.vuex("vuex_custom_bar_height",e);case 17:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}}},b1dd:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("a2ab")),a={name:"login-demo-1",mixins:[o.default],data:function(){return{currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,tips:"获取验证码"}},watch:{currentModeIndex:function(t){var n=uni.upx2px(238);this.modeSliderStyle.left="".concat(n*t,"px")}},methods:{modeSwitch:function(t){this.currentModeIndex=t,this.showPassword=!1},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$t.message.loading("正在获取验证码"),setTimeout((function(){t.$t.message.closeLoading(),t.$t.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$t.message.toast(this.$refs.code.secNum+"秒后再重试")},codeChange:function(t){this.tips=t}}};n.default=a},ba94:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("0e08").default,tnButton:e("fc68").default,tnVerificationCode:e("48b6").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"template-login"},[e("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[e("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}},slot:"back"},[e("v-uni-text",{staticClass:"icon tn-icon-left"}),e("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),e("v-uni-view",{staticClass:"login"},[e("v-uni-view",{staticClass:"login__bg login__bg--top"},[e("v-uni-image",{staticClass:"bg",attrs:{src:"https://tnuiimage.tnkjapp.com/login/1/login_top2.jpg",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"login__bg login__bg--top"},[e("v-uni-image",{staticClass:"rocket rocket-sussuspension",attrs:{src:"https://tnuiimage.tnkjapp.com/login/1/login_top3.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"login__wrapper"},[e("v-uni-view",{staticClass:"login__mode tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center"},[e("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":0===t.currentModeIndex}],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.modeSwitch(0)}}},[t._v("登录")]),e("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":1===t.currentModeIndex}],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.modeSwitch(1)}}},[t._v("注册")]),e("v-uni-view",{staticClass:"login__mode__slider tn-cool-bg-color-15--reverse",style:[t.modeSliderStyle]})],1),e("v-uni-view",{staticClass:"login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[0===t.currentModeIndex?[e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-phone"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入登录手机号码"}})],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-lock"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}},[e("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),1===t.currentModeIndex?[e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-phone"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入注册手机号码"}})],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-code"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content login__info__item__input__content--verify-code"},[e("v-uni-input",{attrs:{"placeholder-class":"input-placeholder",placeholder:"请输入验证码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-verify-code",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.getCode.apply(void 0,arguments)}}},[e("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm",padding:"5rpx 10rpx",width:"100%",shape:"round"}},[t._v(t._s(t.tips))])],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-lock"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}},[e("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),e("v-uni-view",{staticClass:"login__info__item__button tn-cool-bg-color-7--reverse",attrs:{"hover-class":"tn-hover","hover-stay-time":150}},[t._v(t._s(0===t.currentModeIndex?"登录":"注册"))]),0===t.currentModeIndex?e("v-uni-view",{staticClass:"login__info__item__tips"},[t._v("忘记密码?")]):t._e()],2),e("v-uni-view",{staticClass:"login__way tn-flex tn-flex-col-center tn-flex-row-center"},[e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-green tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-wechat-fill"})],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-sina"})],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-qq"})],1)],1)],1)],1),e("v-uni-view",{staticClass:"login__bg login__bg--bottom"},[e("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/login/1/login_bottom_bg.jpg",mode:"widthFix"}})],1)],1),e("tn-verification-code",{ref:"code",attrs:{uniqueKey:"login-demo-1",seconds:60},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.codeChange.apply(void 0,arguments)}}})],1)},a=[]},baa5:function(t,n,e){var i=e("23e7"),o=e("e58c");i({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},c799:function(t,n,e){"use strict";e.r(n);var i=e("b1dd"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},c973:function(t,n,e){function i(t,n,e,i,o,a,s){try{var r=t[a](s),c=r.value}catch(l){return void e(l)}r.done?n(c):Promise.resolve(c).then(i,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var s=t.apply(n,e);function r(t){i(s,o,a,r,c,"next",t)}function c(t){i(s,o,a,r,c,"throw",t)}r(void 0)}))}}e("d3b7"),t.exports=o},ca29:function(t,n,e){"use strict";var i=e("2c9b"),o=e.n(i);o.a},d6b1:function(t,n,e){var i=e("fbfe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("1526e058",i,!0,{sourceMap:!1,shadowMode:!1})},d721:function(t,n,e){"use strict";e.r(n);var i=e("38de"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},f75c:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-code[data-v-7415c746]{width:0;height:0;position:fixed;z-index:-1}',""]),t.exports=n},fbfe:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-0c380560]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-0c380560]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-0c380560]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\n/* 悬浮 */.rocket-sussuspension[data-v-0c380560]{-webkit-animation:suspension-data-v-0c380560 3s ease-in-out infinite;animation:suspension-data-v-0c380560 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-0c380560{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}@keyframes suspension-data-v-0c380560{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translate(-.8rem,1rem);transform:translate(-.8rem,1rem)}}.login[data-v-0c380560]{position:relative;height:100%;z-index:1\n  /* 背景图片 start */\n  /* 背景图片 end */\n  /* 内容 start */\n  /* 切换 start */\n  /* 切换 end */\n  /* 登录注册信息 start */\n  /* 登录注册信息 end */\n  /* 登录方式切换 start */\n  /* 登录方式切换 end */\n  /* 内容 end */}.login__bg[data-v-0c380560]{z-index:-1;position:fixed}.login__bg--top[data-v-0c380560]{top:0;left:0;right:0;width:100%}.login__bg--top .bg[data-v-0c380560]{width:%?750?%;will-change:transform}.login__bg--top .rocket[data-v-0c380560]{margin:%?50?% 28%;width:%?400?%;will-change:transform}.login__bg--bottom[data-v-0c380560]{bottom:%?-10?%;left:0;right:0;width:100%;margin-bottom:env(safe-area-inset-bottom)}.login__bg--bottom uni-image[data-v-0c380560]{width:%?750?%;will-change:transform}.login__wrapper[data-v-0c380560]{margin-top:%?403?%;width:100%}.login__mode[data-v-0c380560]{position:relative;margin:0 auto;width:%?476?%;height:%?77?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?39?%}.login__mode__item[data-v-0c380560]{height:%?77?%;width:100%;line-height:%?77?%;text-align:center;font-size:%?31?%;color:#908f8f;letter-spacing:1em;text-indent:1em;z-index:2;transition:all .4s}.login__mode__item--active[data-v-0c380560]{font-weight:700;color:#fff}.login__mode__slider[data-v-0c380560]{position:absolute;height:inherit;width:calc(%?476?% / 2);border-radius:inherit;box-shadow:%?0?% %?18?% %?72?% %?18?% rgba(0,195,255,.1);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.login__info[data-v-0c380560]{margin:0 %?30?%;margin-top:%?105?%;padding:%?30?% %?51?%;padding-bottom:0;border-radius:%?20?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1)}.login__info__item__input[data-v-0c380560]{margin-top:%?59?%;width:100%;height:%?77?%;border:%?1?% solid #e6e6e6;border-radius:%?39?%}.login__info__item__input__left-icon[data-v-0c380560]{width:10%;font-size:%?44?%;margin-left:%?20?%;color:#aaa}.login__info__item__input__content[data-v-0c380560]{width:80%;padding-left:%?10?%}.login__info__item__input__content--verify-code[data-v-0c380560]{width:56%}.login__info__item__input__content uni-input[data-v-0c380560]{font-size:%?24?%}.login__info__item__input__right-icon[data-v-0c380560]{width:10%;font-size:%?44?%;margin-right:%?20?%;color:#aaa}.login__info__item__input__right-verify-code[data-v-0c380560]{width:34%;margin-right:%?20?%}.login__info__item__button[data-v-0c380560]{margin-top:%?75?%;margin-bottom:%?39?%;width:100%;height:%?77?%;text-align:center;font-size:%?31?%;font-weight:700;line-height:%?77?%;letter-spacing:1em;text-indent:1em;border-radius:%?39?%;box-shadow:%?1?% %?10?% %?24?% %?0?% rgba(60,129,254,.35)}.login__info__item__tips[data-v-0c380560]{margin:%?30?% 0;color:#aaa}.login__way[data-v-0c380560]{margin:0 auto;margin-top:%?110?%}.login__way__item--icon[data-v-0c380560]{width:%?77?%;height:%?77?%;font-size:%?50?%;border-radius:%?100?%;margin-bottom:%?18?%;position:relative;z-index:1}.login__way__item--icon[data-v-0c380560]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png)}[data-v-0c380560] .input-placeholder{font-size:%?24?%;color:#e6e6e6}',""]),t.exports=n},fc31:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-btn[data-v-8b7a20a2]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-8b7a20a2]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-8b7a20a2]{border-radius:%?1000?%!important}',""]),t.exports=n},fc68:function(t,n,e){"use strict";e.r(n);var i=e("5263"),o=e("d721");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("20bd");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"8b7a20a2",null,!1,i["a"],s);n["default"]=c.exports}}]);