(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-utils-color-index"],{"0199":function(t,e,n){"use strict";n.r(e);var i=n("f80b"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},1194:function(t,e,n){"use strict";n.r(e);var i=n("e955"),o=n("0199");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("224f");var r,l=n("f0c5"),s=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"1d2bc776",null,!1,i["a"],r);e["default"]=s.exports},"20bd":function(t,e,n){"use strict";var i=n("6d45"),o=n.n(i);o.a},"224f":function(t,e,n){"use strict";var i=n("f7ee"),o=n.n(i);o.a},2447:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("0e08").default,tnListView:n("bca1").default,tnListCell:n("6fc4").default,tnButton:n("fc68").default,tnFormItem:n("542d").default,tnInput:n("1194").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"basic-utils__color tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("Color工具")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"获取内置随机颜色"}},[n("tn-list-view",{attrs:{backgroundColor:"tn-bg-white"}},[n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",{staticClass:"bg-color-item",class:t.randomBgColorClass},[t._v("背景颜色")]),n("v-uni-view",[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRandomBgColor.apply(void 0,arguments)}}},[t._v("获取")])],1)],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",{staticClass:"bg-color-item",class:t.randomColorClass},[t._v("文字颜色")]),n("v-uni-view",[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRandomColor.apply(void 0,arguments)}}},[t._v("获取")])],1)],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",{staticClass:"bg-color-item",class:t.randomCoolBgColorClass},[t._v("酷炫背景颜色")]),n("v-uni-view",[n("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRandomCoolColor.apply(void 0,arguments)}}},[t._v("获取")])],1)],1)],1)],1)],1),n("demo-title",{attrs:{title:"hex与rgb互转"}},[n("v-uni-view",{staticClass:"tn-bg-white"},[n("tn-form-item",[n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-input",{model:{value:t.hexRGBValue,callback:function(e){t.hexRGBValue=e},expression:"hexRGBValue"}})],1),n("template",{slot:"right"},[n("v-uni-view",{staticClass:"tn-margin-right-sm"},[n("tn-button",{attrs:{size:"sm",backgroundColor:"#01BEFF",fontColor:"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.convertToRGBOrHex.apply(void 0,arguments)}}},[t._v(t._s(t.rgbFlag?"转换为hex":"转换为rgb"))])],1)],1)],2)],1)],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},a=[]},"25f8":function(t,e,n){"use strict";var i=n("58ba"),o=n.n(i);o.a},"38de":function(t,e,n){"use strict";var i=n("4ea4");n("caad"),n("c975"),n("baa5"),n("fb6a"),n("a9e3"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("1af1")),a={mixins:[o.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=a},5263:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},a=[]},"58ba":function(t,e,n){var i=n("a983");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("20261f78",i,!0,{sourceMap:!1,shadowMode:!1})},"6d45":function(t,e,n){var i=n("fc31");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("24731190",i,!0,{sourceMap:!1,shadowMode:!1})},"9f49":function(t,e,n){"use strict";n.r(e);var i=n("af23"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a983:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.basic-utils__color[data-v-0b7819a2]{background-color:#f4f4f4;min-height:100vh}.basic-utils__color .bg-color-item[data-v-0b7819a2]{height:100%;width:auto;padding:%?10?% %?20?%}',""]),t.exports=e},ae45:function(t,e,n){"use strict";n.r(e);var i=n("2447"),o=n("9f49");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("25f8");var r,l=n("f0c5"),s=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"0b7819a2",null,!1,i["a"],r);e["default"]=s.exports},af23:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("cc38")),a={name:"basicUtilsColor",components:{demoTitle:o.default},data:function(){return{randomBgColorClass:"",randomColorClass:"",randomCoolBgColorClass:"",hexRGBValue:"#01BEFF",rgbFlag:!1}},methods:{getRandomBgColor:function(){this.randomBgColorClass=this.$t.color.getRandomColorClass()},getRandomColor:function(){this.randomColorClass=this.$t.color.getRandomColorClass("color")},getRandomCoolColor:function(){this.randomCoolBgColorClass=this.$t.color.getRandomCoolBgClass()},convertToRGBOrHex:function(){this.rgbFlag?this.hexRGBValue=this.$t.color.rgbToHex(this.hexRGBValue):this.hexRGBValue=this.$t.color.hexToRGB(this.hexRGBValue),this.rgbFlag=!this.rgbFlag}}};e.default=a},baa5:function(t,e,n){var i=n("23e7"),o=n("e58c");i({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},d721:function(t,e,n){"use strict";n.r(e);var i=n("38de"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},e955:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-input-class tn-input",class:{"tn-input--border":t.border,"tn-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"===t.type?n("v-uni-textarea",{staticClass:"tn-input__input tn-input__textarea",style:[t.inputStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"tn-input__input",style:[t.inputStyle],attrs:{type:"password"===t.type?"text":t.type,value:t.defaultValue,password:"password"===t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,focus:t.focus,confirmType:t.confirmType,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tn-input__right-icon tn-flex tn-flex-col-center"},[t.clearable&&""!==t.value&&t.focused?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tn-icon-close"})],1):"text"===t.type&&!t.focused&&t.showRightIcon&&""!==t.rightIcon?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear"},[n("v-uni-view",{staticClass:"icon",class:["tn-icon-"+t.rightIcon]})],1):t._e(),t.passwordIcon&&"password"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[t.showPassword?n("v-uni-view",{staticClass:"icon tn-icon-eye"}):n("v-uni-view",{staticClass:"tn-icon-eye-hide"})],1):t._e(),"select"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__select",class:{"tn-input__right-icon__select--reverse":t.selectOpen}},[n("v-uni-view",{staticClass:"icon tn-icon-up-triangle"})],1):t._e()],1)],1)},a=[]},f73d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-input[data-v-1d2bc776]{display:flex;flex-direction:row;position:relative;flex:1}.tn-input__input[data-v-1d2bc776]{font-size:%?28?%;color:#080808;flex:1}.tn-input__textarea[data-v-1d2bc776]{width:auto;font-size:%?28?%;color:#080808;padding:%?10?% 0;line-height:normal;flex:1}.tn-input--border[data-v-1d2bc776]{border-radius:%?6?%;border:%?2?% solid rgba(0,0,0,.1)}.tn-input--error[data-v-1d2bc776]{border-color:#e83a30!important}.tn-input__right-icon[data-v-1d2bc776]{line-height:1}.tn-input__right-icon .icon[data-v-1d2bc776]{color:#aaa}.tn-input__right-icon__item[data-v-1d2bc776]{margin-left:%?10?%}.tn-input__right-icon__clear .icon[data-v-1d2bc776]{font-size:%?32?%}.tn-input__right-icon__select[data-v-1d2bc776]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.tn-input__right-icon__select .icon[data-v-1d2bc776]{font-size:%?26?%}.tn-input__right-icon__select--reverse[data-v-1d2bc776]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},f7ee:function(t,e,n){var i=n("f73d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("14adceaa",i,!0,{sourceMap:!1,shadowMode:!1})},f80b:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2521")),a={mixins:[o.default],name:"tn-input",props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:"color: #AAAAAA"},disabled:{type:Boolean,default:!1},maxLength:{type:Number,default:255},height:{type:Number,default:0},autoHeight:{type:Boolean,default:!0},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},selectOpen:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},trim:{type:Boolean,default:!0},showConfirmBar:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},computed:{inputStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"===this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},elSelectionStart:function(){return String(this.selectionStart)},elSelectionEnd:function(){return String(this.selectionEnd)}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!==e&&"select"===this.type&&this.handleInput({detail:{value:t}})}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$t.string.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("tn-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("tn-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=a},fc31:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-btn[data-v-8b7a20a2]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-8b7a20a2]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-8b7a20a2]{border-radius:%?1000?%!important}',""]),t.exports=e},fc68:function(t,e,n){"use strict";n.r(e);var i=n("5263"),o=n("d721");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("20bd");var r,l=n("f0c5"),s=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"8b7a20a2",null,!1,i["a"],r);e["default"]=s.exports}}]);