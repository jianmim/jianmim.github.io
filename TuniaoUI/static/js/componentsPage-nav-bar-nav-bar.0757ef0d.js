(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-nav-bar-nav-bar"],{"143a":function(t,e,n){"use strict";function a(t,e,n){this.$children.map((function(o){t===o.$options.name?o.$emit.apply(o,[e].concat(n)):a.apply(o,[t,e].concat(n))}))}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("99af");var o={methods:{dispatch:function(t,e,n){var a=this.$parent||this.$root,o=a.$options.name;while(a&&(!o||o!==t))a=a.$parent,a&&(o=a.$options.name);a&&a.$emit.apply(a,[e].concat(n))},broadcast:function(t,e,n){a.call(this,t,e,n)}}};e.default=o},2510:function(t,e,n){var a=n("6a2f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("006be4b8",a,!0,{sourceMap:!1,shadowMode:!1})},"6a2f":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-custom-nav-bar__back[data-v-50dbd3d7]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-50dbd3d7]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-50dbd3d7]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}.custom-nav-content[data-v-50dbd3d7]{width:80%;height:100%;display:flex;align-items:center;margin-left:%?20?%}.custom-nav-content .search-content[data-v-50dbd3d7]{flex:1}.custom-nav-content .search-content .search-input[data-v-50dbd3d7]{border-radius:%?30?%}',""]),t.exports=e},"8d3e":function(t,e,n){var a=n("a113");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("1112e7e6",a,!0,{sourceMap:!1,shadowMode:!1})},"97ad":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var o=a(n("143a")),i={mixins:[o.default],name:"tn-input",props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:"color: #AAAAAA"},disabled:{type:Boolean,default:!1},maxLength:{type:Number,default:255},height:{type:Number,default:0},autoHeight:{type:Boolean,default:!0},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},selectOpen:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},trim:{type:Boolean,default:!0},showConfirmBar:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},computed:{inputStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"===this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},elSelectionStart:function(){return String(this.selectionStart)},elSelectionEnd:function(){return String(this.selectionEnd)}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!==e&&"select"===this.type&&this.handleInput({detail:{value:t}})}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$tn.string.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("tn-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("tn-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=i},"98f5":function(t,e,n){"use strict";n.r(e);var a=n("97ad"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},a113:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-input[data-v-4a3a2be0]{display:flex;flex-direction:row;position:relative;flex:1}.tn-input__input[data-v-4a3a2be0]{font-size:%?28?%;color:#080808;flex:1}.tn-input__textarea[data-v-4a3a2be0]{width:auto;font-size:%?28?%;color:#080808;padding:%?10?% 0;line-height:normal;flex:1}.tn-input--border[data-v-4a3a2be0]{border-radius:%?6?%;border:%?2?% solid rgba(0,0,0,.1)}.tn-input--error[data-v-4a3a2be0]{border-color:#e83a30!important}.tn-input__right-icon[data-v-4a3a2be0]{line-height:1}.tn-input__right-icon .icon[data-v-4a3a2be0]{color:#aaa}.tn-input__right-icon__item[data-v-4a3a2be0]{margin-left:%?10?%}.tn-input__right-icon__clear .icon[data-v-4a3a2be0]{font-size:%?32?%}.tn-input__right-icon__select[data-v-4a3a2be0]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.tn-input__right-icon__select .icon[data-v-4a3a2be0]{font-size:%?26?%}.tn-input__right-icon__select--reverse[data-v-4a3a2be0]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},b05c:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var o=a(n("eab2")),i={name:"componentsNavbar",components:{dynamicDemoTemplate:o.default},data:function(){return{searchValue:"",mode:"normal",height:0,backgroundColor:"#FFFFFF",fontColor:"",alpha:!1,bottomShadow:!0,tips:["无需依赖额外的样式文件","使用tn-toast组件"],sectionList:[{name:"参数切换",section:[{title:"高度",optional:["默认","38","80"],methods:"heightChange"},{title:"样式",optional:["默认","自定义返回按钮","隐藏返回栏自定义内容"],methods:"modeChange"},{title:"背景颜色",optional:["默认","#01BEFF","tn-bg-grey","tn-main-gradient-indigo","透明"],methods:"backgroundColorChange"},{title:"底部阴影",optional:["默认","隐藏"],methods:"bottomShadowChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},heightChange:function(t){this.height=0===t.index?0:Number(t.name)},modeChange:function(t){switch(t.index){case 0:this.mode="normal";break;case 1:this.mode="customBack";break;case 2:this.mode="customNav";break}},backgroundColorChange:function(t){switch(t.index){case 0:this.backgroundColor="#FFFFFF",this.fontColor="",this.alpha=!1;break;case 1:case 2:case 3:this.fontColor="#FFFFFF",this.backgroundColor=t.name,this.alpha=!1;break;case 4:this.backgroundColor="",this.fontColor="",this.alpha=!0;break}},bottomShadowChange:function(t){this.bottomShadow=0===t.index}}};e.default=i},bbc8:function(t,e,n){"use strict";n.r(e);var a=n("b05c"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},be0a:function(t,e,n){"use strict";n.r(e);var a=n("fb13"),o=n("bbc8");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("f926");var r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"50dbd3d7",null,!1,a["a"],void 0);e["default"]=s.exports},c1ad:function(t,e,n){"use strict";var a=n("8d3e"),o=n.n(a);o.a},d23c:function(t,e,n){"use strict";n.r(e);var a=n("e5b6"),o=n("98f5");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("c1ad");var r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"4a3a2be0",null,!1,a["a"],void 0);e["default"]=s.exports},e5b6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-input-class tn-input",class:{"tn-input--border":t.border,"tn-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"===t.type?n("v-uni-textarea",{staticClass:"tn-input__input tn-input__textarea",style:[t.inputStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"tn-input__input",style:[t.inputStyle],attrs:{type:"password"===t.type?"text":t.type,value:t.defaultValue,password:"password"===t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,focus:t.focus,confirmType:t.confirmType,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tn-input__right-icon tn-flex tn-flex-col-center"},[t.clearable&&""!==t.value&&t.focused?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tn-icon-close"})],1):"text"===t.type&&!t.focused&&t.showRightIcon&&""!==t.rightIcon?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear"},[n("v-uni-view",{staticClass:"icon",class:["tn-icon-"+t.rightIcon]})],1):t._e(),t.passwordIcon&&"password"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[t.showPassword?n("v-uni-view",{staticClass:"icon tn-icon-eye"}):n("v-uni-view",{staticClass:"tn-icon-eye-hide"})],1):t._e(),"select"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__select",class:{"tn-input__right-icon__select--reverse":t.selectOpen}},[n("v-uni-view",{staticClass:"icon tn-icon-up-triangle"})],1):t._e()],1)],1)},o=[]},f926:function(t,e,n){"use strict";var a=n("2510"),o=n.n(a);o.a},fb13:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("739c").default,tnInput:n("d23c").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components-nav_bar"},["normal"===t.mode?n("tn-nav-bar",{attrs:{fixed:!0,height:t.height,backgroundColor:t.backgroundColor,fontColor:t.fontColor,alpha:t.alpha,bottomShadow:t.bottomShadow}},[t._v("navBar导航栏")]):t._e(),"customBack"===t.mode?n("tn-nav-bar",{attrs:{fixed:!0,height:t.height,customBack:!0,backgroundColor:t.backgroundColor,fontColor:t.fontColor,alpha:t.alpha,bottomShadow:t.bottomShadow}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},slot:"back"},[n("v-uni-view",[n("v-uni-text",{staticClass:"tn-icon-left"})],1),n("v-uni-view",[n("v-uni-text",{staticClass:"tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"custom-nav-content"},[n("v-uni-view",{staticClass:"search-content"},[n("tn-input",{staticClass:"search-input",attrs:{placeholder:"请输入要搜索的内容",border:!0,height:50,showRightIcon:!0,rightIcon:"search"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1):t._e(),"customNav"===t.mode?n("tn-nav-bar",{attrs:{fixed:!0,height:t.height,isBack:!1,backgroundColor:t.backgroundColor,fontColor:t.fontColor,alpha:t.alpha,bottomShadow:t.bottomShadow}},[n("v-uni-view",{staticClass:"custom-nav-content"},[n("v-uni-view",{staticClass:"search-content"},[n("tn-input",{staticClass:"search-input",attrs:{placeholder:"请输入要搜索的内容",border:!0,height:50,showRightIcon:!0,rightIcon:"search"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1):t._e(),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!0,noDemo:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1)},i=[]}}]);