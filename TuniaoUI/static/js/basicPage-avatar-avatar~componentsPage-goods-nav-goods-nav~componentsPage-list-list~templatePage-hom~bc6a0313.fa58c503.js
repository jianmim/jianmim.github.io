(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-avatar-avatar~componentsPage-goods-nav-goods-nav~componentsPage-list-list~templatePage-hom~bc6a0313"],{"0f37":function(t,a,e){"use strict";var n=e("88b2"),i=e.n(n);i.a},"3b1d":function(t,a,e){var n=e("c6b9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("902cf97c",n,!0,{sourceMap:!1,shadowMode:!1})},"3c0e":function(t,a,e){"use strict";e.r(a);var n=e("f9b1"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},7253:function(t,a,e){"use strict";e.r(a);var n=e("ac56"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"73a8":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={tnBadge:e("f74f").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-avatar-class tn-avatar",class:[t.backgroundColorClass,t.avatarClass],style:[t.avatarStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t.showImg?e("v-uni-image",{staticClass:"tn-avatar__img",class:[t.imgClass],attrs:{src:t.src,mode:t.imgMode||"aspectFill"},on:{error:function(a){arguments[0]=a=t.$handleEvent(a),t.loadImageError.apply(void 0,arguments)}}}):e("v-uni-view",{staticClass:"tn-avatar__text"},[t.text?e("v-uni-view",[t._v(t._s(t.text))]):e("v-uni-view",{class:["tn-icon-"+t.icon]})],1),t.badge&&(t.badgeIcon||t.badgeText)?e("tn-badge",{attrs:{radius:t.badgeSize,backgroundColor:t.badgeBgColor,fontColor:t.badgeColor,fontSize:t.badgeSize-8,absolute:!0,top:t.badgePosition[0],right:t.badgePosition[1]}},[t.badgeIcon&&""===t.badgeText?e("v-uni-view",[e("v-uni-view",{class:["tn-icon-"+t.badgeIcon]})],1):e("v-uni-view",[t._v(t._s(t.badgeText))])],1):t._e()],1)},r=[]},"88b2":function(t,a,e){var n=e("dfb7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("07472765",n,!0,{sourceMap:!1,shadowMode:!1})},ac56:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3");var i=n(e("63c7")),r={mixins:[i.default],name:"tn-badge",props:{index:{type:[Number,String],default:"0"},radius:{type:Number,default:0},padding:{type:String,default:""},margin:{type:String,default:""},dot:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},top:{type:[String,Number],default:""},right:{type:[String,Number],default:""},translateCenter:{type:Boolean,default:!0}},computed:{badgeClass:function(){var t="";return this.dot&&(t+=" tn-badge--dot"),this.absolute&&(t+=" tn-badge--absolute",this.translateCenter&&(t+=" tn-badge--center-position")),t},badgeStyle:function(){var t={};return 0!==this.radius&&(t.width=this.radius+"rpx",t.height=this.radius+"rpx",t.lineHeight=this.radius+"rpx"),this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.top&&(t.top=this.$tn.string.getLengthUnitValue(this.top)),this.right&&(t.right=this.$tn.string.getLengthUnitValue(this.right)),t}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}}};a.default=r},c6b9:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-avatar[data-v-40d88c0a]{display:inline-flex;margin:0;padding:0;text-align:center;align-items:center;justify-content:center;background-color:#e6e6e6;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;z-index:1}.tn-avatar--sm[data-v-40d88c0a]{width:%?48?%;height:%?48?%}.tn-avatar--lg[data-v-40d88c0a]{width:%?96?%;height:%?96?%}.tn-avatar--xl[data-v-40d88c0a]{width:%?128?%;height:%?128?%}.tn-avatar--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar--shadow[data-v-40d88c0a]{position:relative}.tn-avatar--shadow[data-v-40d88c0a]::after{content:" ";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}.tn-avatar__img[data-v-40d88c0a]{width:100%;height:100%}.tn-avatar__img--square[data-v-40d88c0a]{border-radius:%?10?%}.tn-avatar__img--circle[data-v-40d88c0a]{border-radius:%?5000?%}.tn-avatar__text[data-v-40d88c0a]{display:flex;flex-direction:row;align-items:center;justify-content:center}',""]),t.exports=a},cd1c:function(t,a,e){"use strict";var n=e("3b1d"),i=e.n(n);i.a},dfb7:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-badge[data-v-24d7672c]{width:auto;height:auto;box-sizing:border-box;display:flex;align-items:center;justify-content:center;z-index:10;font-size:%?20?%;background-color:#fff;border-radius:%?100?%;padding:%?4?% %?8?%;line-height:normal}.tn-badge--dot[data-v-24d7672c]{width:%?8?%;height:%?8?%;border-radius:50%;padding:0}.tn-badge--absolute[data-v-24d7672c]{position:absolute;top:0;right:0}.tn-badge--center-position[data-v-24d7672c]{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}',""]),t.exports=a},f60c:function(t,a,e){"use strict";e.r(a);var n=e("73a8"),i=e("3c0e");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("cd1c");var o=e("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"40d88c0a",null,!1,n["a"],void 0);a["default"]=d.exports},f74f:function(t,a,e){"use strict";e.r(a);var n=e("fdba"),i=e("7253");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("0f37");var o=e("f0c5"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"24d7672c",null,!1,n["a"],void 0);a["default"]=d.exports},f9b1:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("a9e3"),e("99af"),e("ac1f"),e("00b4");var i=n(e("63c7")),r={mixins:[i.default],name:"tn-avatar",props:{index:{type:[Number,String],default:0},shape:{type:String,default:"circle"},size:{type:[Number,String],default:""},shadow:{type:Boolean,default:!1},border:{type:Boolean,default:!1},borderColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},borderSize:{type:Number,default:2},src:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},badge:{type:Boolean,default:!1},badgeSize:{type:Number,default:0},badgeBgColor:{type:String,default:"#AAAAAA"},badgeColor:{type:String,default:"#FFFFFF"},badgeIcon:{type:String,default:""},badgeText:{type:String,default:""},badgePosition:{type:Array,default:function(){return[0,0]}}},data:function(){return{imgLoadError:!1}},computed:{showImg:function(){return""===this.text&&""===this.icon},avatarClass:function(){var t="";return t+=" tn-avatar--".concat(this.shape),this._checkSizeIsInline()&&(t+=" tn-avatar--".concat(this.size)),this.shadow&&(t+=" tn-avatar--shadow"),t},avatarStyle:function(){var t={};return this.backgroundColorStyle?t.background=this.backgroundColorStyle:this.shadow&&this.showImg&&(t.backgroundImage="url(".concat(this.src,")")),this.border&&(t.border="".concat(this.borderSize,"rpx solid ").concat(this.borderColor)),this._checkSizeIsInline()||(t.width=this.size,t.height=this.size),t},imgClass:function(){var t="";return t+=" tn-avatar__img--".concat(this.shape),t}},methods:{loadImageError:function(){this.imgLoadError=!0},click:function(){this.$emit("click",this.index)},_checkSizeIsInline:function(){return!!/^(xs|sm|md|lg|xl|xxl)$/.test(this.size)}}};a.default=r},fdba:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"tn-badge-class tn-badge",class:[t.backgroundColorClass,t.fontColorClass,t.badgeClass],style:[t.badgeStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t.dot?t._e():t._t("default")],2)},i=[]}}]);