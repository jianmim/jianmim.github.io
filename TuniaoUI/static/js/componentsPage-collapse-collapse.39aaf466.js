(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-collapse-collapse"],{"06e9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"0754":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-collapse-item-class tn-collapse-item",style:[t.itemStyle]},[n("v-uni-view",{staticClass:"tn-collapse-item__head",style:[t.headStyle],attrs:{"hover-stay-time":200,"hover-class":t.hoverClass},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots["title-all"]&&t.$slots["$title-all"]?n("v-uni-view",[t._t("title-all")],2):[t.$slots.title&&t.$slots.$title?n("v-uni-view",[t._t("title")],2):n("v-uni-view",{staticClass:"tn-collapse-item__head__title tn-text-ellipsis",style:[{textAlign:t.align?t.align:"left"},t.isShow&&t.activeStyle&&!t.arrow?t.activeStyle:""]},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"tn-collapse-item__head__icon__wrap"},[t.arrow?n("v-uni-view",{staticClass:"tn-icon-down tn-collapse-item__head__icon__arrow",class:{"tn-collapse-item__head__icon__arrow--active":t.isShow},style:[t.arrowIconStyle]}):t._e()],1)]],2),n("v-uni-view",{staticClass:"tn-collapse-item__body",style:[{height:t.isShow?t.height+"px":"0"}]},[n("v-uni-view",{staticClass:"tn-collapse-item__body__content",style:[t.bodyStyle],attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},a=[]},"0a1b":function(t,e,n){var i=n("06e9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a62b35b2",i,!0,{sourceMap:!1,shadowMode:!1})},"0bb6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-collapse-class tn-collapse"},[this._t("default")],2)},a=[]},"0f31":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("739c").default,tnCollapse:n("b9be").default,tnCollapseItem:n("bd41").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"components-collapse tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("Collapse折叠面板")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"手风琴模式"}},[n("tn-collapse",t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1),n("demo-title",{attrs:{title:"允许全部展开"}},[n("tn-collapse",{attrs:{accordion:!1}},t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1),n("demo-title",{attrs:{title:"禁止第二项展开"}},[n("tn-collapse",t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title,disabled:1===i}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1),n("demo-title",{attrs:{title:"关闭点击效果"}},[n("tn-collapse",{attrs:{hoverClass:""}},t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1),n("demo-title",{attrs:{title:"隐藏箭头"}},[n("tn-collapse",{attrs:{arrow:!1}},t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1),n("demo-title",{attrs:{title:"自定义样式"}},[n("tn-collapse",{attrs:{headStyle:t.headStyle,bodyStyle:t.bodyStyle,itemStyle:t.itemStyle}},t._l(t.list,(function(e,i){return n("tn-collapse-item",{key:i,attrs:{title:e.title,align:"center"}},[n("v-uni-view",{staticClass:"tn-text-break-word"},[t._v(t._s(e.content))])],1)})),1)],1)],1)],1)},s=[]},"116b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-title"},[n("v-uni-view",["first"===t.type?n("v-uni-view",{staticClass:"main_title"},[t.leftIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),n("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?n("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?n("v-uni-view",{staticClass:"second_title"},[n("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),n("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},a=[]},"2dcf":function(t,e,n){"use strict";n.r(e);var i=n("116b"),a=n("9915");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("4882");var o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5d860f10",null,!1,i["a"],void 0);e["default"]=l.exports},"44e2":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2dcf")),s={name:"componentsCollapse",components:{demoTitle:a.default},data:function(){return{list:[{title:"关雎",content:"关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"},{title:"长歌行",content:"青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！"},{title:"秋风辞",content:"秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！"}],headStyle:{backgroundColor:"#EFEFEF"},bodyStyle:{backgroundColor:"#EFEFEF"},itemStyle:{backgroundColor:"#EFEFEF",borderRadius:"20rpx",overflow:"hidden"}}},methods:{}};e.default=s},4882:function(t,e,n){"use strict";var i=n("0a1b"),a=n.n(i);a.a},5836:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-collapse-item__head[data-v-78cae184]{position:relative;display:flex;flex-direction:row;justify-content:space-around;align-items:center;color:#080808;font-size:%?30?%;line-height:1;padding:%?24?% 0;padding-left:%?24?%;text-align:left;background-color:#fff}.tn-collapse-item__head__title[data-v-78cae184]{flex:1;overflow:hidden}.tn-collapse-item__head__icon__arrow[data-v-78cae184]{transition:all .3s;margin-right:%?20?%;margin-left:%?14?%;font-size:inherit}.tn-collapse-item__head__icon__arrow--active[data-v-78cae184]{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:center center;transform-origin:center center}.tn-collapse-item__body[data-v-78cae184]{transition:all .3s;overflow:hidden}.tn-collapse-item__body__content[data-v-78cae184]{overflow:hidden;font-size:%?28?%;color:#080808;text-align:left;background-color:#fff;padding-left:%?24?%}',""]),t.exports=e},"884a":function(t,e,n){"use strict";n.r(e);var i=n("0f31"),a=n("e140");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("fbba");var o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"895ae2dc",null,!1,i["a"],void 0);e["default"]=l.exports},"985b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b"),n("14d9");var i={name:"tn-collapse",props:{accordion:{type:Boolean,default:!0},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},itemStyle:{type:Object,default:function(){return{}}},arrow:{type:Boolean,default:!0},arrowColor:{type:String,default:"#AAAAAA"},hoverClass:{type:String,default:"tn-hover"}},computed:{parentData:function(){return[this.headStyle,this.bodyStyle,this.itemStyle,this.arrow,this.arrowColor,this.hoverClass]}},data:function(){return{}},watch:{parentData:function(){this.childrens.length>0&&this.init()}},created:function(){this.childrens=[]},methods:{init:function(){this.childrens.forEach((function(t,e){t.init()}))},onChange:function(){var t=[];this.childrens.forEach((function(e,n){e.isShow&&t.push(e.nameSync)})),this.accordion&&(t=t.join(",")),this.$emit("change",t)}}};e.default=i},9915:function(t,e,n){"use strict";n.r(e);var i=n("c4ad"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},b7c0:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.components-collapse[data-v-895ae2dc]{background-color:#f4f4f4}',""]),t.exports=e},b9a7:function(t,e,n){"use strict";n.r(e);var i=n("985b"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},b9be:function(t,e,n){"use strict";n.r(e);var i=n("0bb6"),a=n("b9a7");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"8e0d98dc",null,!1,i["a"],void 0);e["default"]=l.exports},bd41:function(t,e,n){"use strict";n.r(e);var i=n("0754"),a=n("eae1");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("ce3f");var o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"78cae184",null,!1,i["a"],void 0);e["default"]=l.exports},c3df:function(t,e,n){var i=n("5836");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5bf17435",i,!0,{sourceMap:!1,shadowMode:!1})},c4ad:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=i},ce3f:function(t,e,n){"use strict";var i=n("c3df"),a=n.n(i);a.a},df6c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("caad"),n("2532"),n("14d9"),n("d81d");var i={name:"tn-collapse-item",props:{open:{type:Boolean,default:!1},name:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},disabled:{type:Boolean,default:!1},activeStyle:{type:Object,default:function(){return{}}},index:{type:[Number,String],default:""}},computed:{arrowIconStyle:function(){var t={};return this.arrowColor&&(t.color=this.arrowColor),t}},data:function(){return{isShow:!1,elId:this.$tn.uuid(),height:0,headStyle:{},bodyStyle:{},itemStyle:{},arrow:!0,arrowColor:"",hoverClass:""}},watch:{open:function(t){this.isShow=t}},created:function(){this.parent=!1,this.isShow=this.open},mounted:function(){this.init()},methods:{init:function(){var t=this;this.parent=this.$tn.$parent.call(this,"tn-collapse"),this.parent&&(this.nameSync=this.name?this.name:this.parent.childrens.length,!this.parent.childrens.includes(this)&&this.parent.childrens.push(this),this.headStyle=this.parent.headStyle,this.bodyStyle=this.parent.bodyStyle,this.itemStyle=this.parent.itemStyle,this.arrow=this.parent.arrow,this.arrowColor=this.parent.arrowColor,this.hoverClass=this.parent.hoverClass),this.$nextTick((function(){t.queryRect()}))},headClick:function(){var t=this;this.disabled||(this.parent&&this.parent.accordion&&this.parent.childrens.map((function(e){t!==e&&(e.isShow=!1)})),this.isShow=!this.isShow,this.$emit("change",{index:this.index,show:this.isShow}),this.isShow&&this.parent&&this.parent.onChange(),this.$forceUpdate())},queryRect:function(){var t=this;this._tGetRect("#"+this.elId).then((function(e){t.height=e.height}))}}};e.default=i},e140:function(t,e,n){"use strict";n.r(e);var i=n("44e2"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},eae1:function(t,e,n){"use strict";n.r(e);var i=n("df6c"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},f071:function(t,e,n){var i=n("b7c0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3e758dde",i,!0,{sourceMap:!1,shadowMode:!1})},fbba:function(t,e,n){"use strict";var i=n("f071"),a=n.n(i);a.a}}]);