(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-index-list-avatar-index-list~componentsPage-index-list-base-index-list"],{3831:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("2c3e"),n("159b"),n("7db0");var o={name:"tn-index-list",props:{indexList:{type:Array,default:function(){return function(){for(var e=[],t="A".charCodeAt(0),n=0;n<26;n++)e.push(String.fromCharCode(t+n));return e}()}},sticky:{type:Boolean,default:!0},stickyTop:{type:Number,default:0},customBarHeight:{type:Number,default:0},scrollTop:{type:Number,default:0},activeColor:{type:String,default:"#01BEFF"},zIndex:{type:Number,default:0}},computed:{selectAlertZIndex:function(){return this.$tn.zIndex.toast},stickyOffsetTop:function(){return""!==this.stickyTop?this.stickyTop:44}},data:function(){return{activeAnchorIndex:0,showSidebar:!0,touchMove:!1,touchMoveIndex:0,scrollToAnchorIndex:0,sidebar:{height:0,top:0},height:0,top:0}},watch:{scrollTop:function(){this.updateData()}},created:function(){this.childrens=[]},methods:{updateData:function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){e.showSidebar=!!e.childrens.length,e.getRect().then((function(){e.onScroll()}))}),0)},getRect:function(){return Promise.all([this.getAnchorRect(),this.getListRect(),this.getSidebarRect()])},getAnchorRect:function(){var e=this;return Promise.all(this.childrens.map((function(t,n){t._tGetRect(".tn-index-anchor__wrap").then((function(n){Object.assign(t,{height:n.height,top:n.top-e.customBarHeight})}))})))},getListRect:function(){var e=this;return this._tGetRect(".tn-index-list").then((function(t){Object.assign(e,{height:t.height,top:t.top+e.scrollTop})}))},getSidebarRect:function(){var e=this;return this._tGetRect(".tn-index-list__sidebar").then((function(t){e.sidebar={height:t.height,top:t.top}}))},onScroll:function(){var e=this,t=this.childrens,n=void 0===t?[]:t;if(n.length){var o=this.sticky,i=this.stickyOffsetTop,a=this.zIndex,r=(this.scrollTop,this.activeColor),d=this.getActiveAnchorIndex();if(this.activeAnchorIndex=d,o){var l=!1;-1!==d&&(l=n[d].top<=0),n.forEach((function(t,o){if(o===d){var c="",s={color:"".concat(r)};l&&(c={height:"".concat(n[o].height,"px")},s={position:"fixed",top:"".concat(i,"px"),zIndex:"".concat(a||e.$tn.zIndex.indexListSticky),color:"".concat(r)}),t.active=!0,t.wrapperStyle=c,t.anchorStyle=s}else if(o===d-1){var m=n[o],u=m.top,h=o===n.length-1?e.top:n[o+1].top,f=h-u,b=f-m.height,y={position:"relative",transform:"translate3d(0, ".concat(b,"px, 0)"),zIndex:"".concat(a||e.$tn.zIndex.indexListSticky),color:"".concat(r)};t.active=!1,t.anchorStyle=y}else t.active=!1,t.wrapperStyle="",t.anchorStyle=""}))}}},onTouchMove:function(e){this.touchMove=!0;var t=this.childrens.length,n=e.touches[0],o=this.sidebar.height/t,i=n.clientY,a=Math.floor((i-this.sidebar.top)/o);a<0?a=0:a>t-1&&(a=t-1),this.touchMoveIndex=a,this.scrollToAnchor(a)},onTouchStop:function(){this.touchMove=!1,this.scrollToAnchorIndex=null},getActiveAnchorIndex:function(){for(var e=this.childrens,t=this.sticky,n=this.childrens.length-1;n>=0;n--){var o=n>0?e[n-1].height:0,i=t?o:0;if(i>=e[n].top)return n}return-1},scrollToAnchor:function(e){var t=this;if(this.scrollToAnchorIndex!==e){this.scrollToAnchorIndex=e;var n=this.childrens.find((function(n){return n.index===t.indexList[e]}));if(n){var o=n.top+this.scrollTop;this.$emit("select",{index:n.index,scrollTop:o}),uni.pageScrollTo({duration:0,scrollTop:o})}}}}};t.default=o},"3f29":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"tn-index-anchor__wrap",style:[e.wrapperStyle],attrs:{id:e.elId}},[n("v-uni-view",{staticClass:"tn-index-anchor",class:[e.active?"tn-index-anchor--active":""],style:[e.customAnchorStyle]},[e.useSlot?n("v-uni-view",[e._t("default")],2):[n("v-uni-text",[e._v(e._s(e.index))])]],2)],1)],1)},i=[]},"3f9c":function(e,t,n){"use strict";var o=n("b796"),i=n.n(o);i.a},"557c":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-index-anchor[data-v-704f3d3b]{width:100%;box-sizing:border-box;padding:%?8?% %?24?%;color:#080808;font-size:%?28?%;font-weight:500;line-height:1.2;background-color:#f5f5f5}.tn-index-anchor--active[data-v-704f3d3b]{right:0;left:0;color:#01beff;background-color:#fff}',""]),e.exports=t},"558e":function(e,t,n){"use strict";n.r(t);var o=n("3831"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"616e":function(e,t,n){"use strict";n.r(t);var o=n("3f29"),i=n("b826");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("8084");var r=n("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"704f3d3b",null,!1,o["a"],void 0);t["default"]=d.exports},8084:function(e,t,n){"use strict";var o=n("a315"),i=n.n(o);i.a},"81e5":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9");var o={name:"tn-index-anchor",props:{useSlot:{type:Boolean,default:!1},index:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}}},computed:{customAnchorStyle:function(){return Object.assign(this.anchorStyle,this.customStyle)}},data:function(){return{elId:this.$tn.uuid(),height:0,top:0,active:!1,wrapperStyle:{},anchorStyle:{}}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$tn.$parent.call(this,"tn-index-list"),this.parent&&(this.parent.childrens.push(this),this.parent.updateData())}};t.default=o},"94c7":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-index-list[data-v-7adab4d5]{position:relative}.tn-index-list__sidebar[data-v-7adab4d5]{display:flex;flex-direction:column;position:fixed;top:50%;right:0;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;user-select:none;z-index:99}.tn-index-list__sidebar__item[data-v-7adab4d5]{font-weight:500;padding:%?8?% %?18?%;font-size:%?22?%;line-height:1}.tn-index-list__alert[data-v-7adab4d5]{display:flex;flex-direction:row;position:fixed;width:%?120?%;height:%?120?%;top:50%;right:%?90?%;align-items:center;justify-content:center;margin-top:%?-60?%;border-radius:%?24?%;font-size:%?50?%;color:#fff;background-color:#aaa;padding:0;z-index:9999999}.tn-index-list__alert uni-text[data-v-7adab4d5]{line-height:%?50?%}',""]),e.exports=t},"9cf2":function(e,t,n){"use strict";n.r(t);var o=n("c0b4"),i=n("558e");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("3f9c");var r=n("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"7adab4d5",null,!1,o["a"],void 0);t["default"]=d.exports},a315:function(e,t,n){var o=n("557c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("1b886fd0",o,!0,{sourceMap:!1,shadowMode:!1})},b796:function(e,t,n){var o=n("94c7");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("feb2e8c0",o,!0,{sourceMap:!1,shadowMode:!1})},b826:function(e,t,n){"use strict";n.r(t);var o=n("81e5"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},c0b4:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"tn-index-list-class tn-index-list"},[e._t("default"),e.showSidebar?n("v-uni-view",{staticClass:"tn-index-list__sidebar",on:{touchstart:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.onTouchMove.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.onTouchMove.apply(void 0,arguments)},touchend:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.onTouchStop.apply(void 0,arguments)},touchcancel:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.onTouchStop.apply(void 0,arguments)}}},e._l(e.indexList,(function(t,o){return n("v-uni-view",{key:o,staticClass:"tn-index-list__sidebar__item",style:{zIndex:e.zIndex+1,color:e.activeAnchorIndex===o?e.activeColor:""}},[e._v(e._s(t))])})),1):e._e(),e.touchMove&&e.indexList[e.touchMoveIndex]?n("v-uni-view",{staticClass:"tn-index-list__alert",style:{zIndex:e.selectAlertZIndex}},[n("v-uni-text",[e._v(e._s(e.indexList[e.touchMoveIndex]))])],1):e._e()],2)],1)},i=[]},cb36:function(e,t){e.exports={list:[{letter:"A",data:[{name:"阿拉斯加",mobile:"13588889999",keyword:"阿拉斯加ABA13588889999"},{name:"阿克苏",mobile:"0551-4386721",keyword:"阿克苏AKESU0551-4386721"},{name:"阿拉善",mobile:"4008009100",keyword:"阿拉善ALASHAN4008009100"},{name:"阿勒泰",mobile:"13588889999",keyword:"阿勒泰ALETAI13588889999"},{name:"阿里",mobile:"13588889999",keyword:"阿里ALI13588889999"},{name:"安阳",mobile:"13588889999",keyword:"13588889999安阳ANYANG"}]},{letter:"B",data:[{name:"白城",mobile:"该主子没有留电话~",keyword:"白城BAICHENG"},{name:"白山",mobile:"13588889999",keyword:"白山BAISHAN13588889999"},{name:"白银",mobile:"13588889999",keyword:"白银BAIYIN13588889999"},{name:"保定",mobile:"13588889999",keyword:"保定BAODING13588889999"}]},{letter:"C",data:[{name:"沧州",mobile:"13588889999",keyword:"沧州CANGZHOU13588889999"},{name:"长春",mobile:"13588889999",keyword:"长春CHANGCHUN13588889999"}]},{letter:"D",data:[{name:"大理",mobile:"13588889999",keyword:"大理DALI13588889999"},{name:"大连",mobile:"13588889999",keyword:"大连DALIAN13588889999"}]},{letter:"E",data:[{name:"鄂尔多斯",mobile:"13588889999",keyword:"鄂尔多斯EERDUOSI13588889999"},{name:"恩施",mobile:"13588889999",keyword:"恩施ENSHI13588889999"},{name:"鄂州",mobile:"13588889999",keyword:"鄂州EZHOU13588889999"}]},{letter:"F",data:[{name:"防城港",mobile:"该主子没有留电话~",keyword:"防城港FANGCHENGGANG"},{name:"抚顺",mobile:"13588889999",keyword:"抚顺FUSHUN13588889999"},{name:"阜新",mobile:"13588889999",keyword:"阜新FUXIN13588889999"},{name:"阜阳",mobile:"13588889999",keyword:"阜阳FUYANG13588889999"},{name:"抚州",mobile:"13588889999",keyword:"抚州FUZHOU13588889999"},{name:"福州",mobile:"13588889999",keyword:"福州FUZHOU13588889999"}]},{letter:"G",data:[{name:"甘南",mobile:"13588889999",keyword:"甘南GANNAN13588889999"},{name:"赣州",mobile:"13588889999",keyword:"赣州GANZHOU13588889999"},{name:"甘孜",mobile:"13588889999",keyword:"甘孜GANZI13588889999"}]},{letter:"H",data:[{name:"哈尔滨",mobile:"13588889999",keyword:"哈尔滨HAERBIN13588889999"},{name:"海北",mobile:"13588889999",keyword:"海北HAIBEI13588889999"},{name:"海东",mobile:"13588889999",keyword:"海东HAIDONG13588889999"},{name:"海口",mobile:"13588889999",keyword:"海口HAIKOU13588889999"}]},{letter:"I",data:[{name:"ice",mobile:"13588889999",keyword:"佳木斯JIAMUSI13588889999"}]},{letter:"J",data:[{name:"佳木斯",mobile:"13588889999",keyword:"佳木斯JIAMUSI13588889999"},{name:"吉安",mobile:"13588889999",keyword:"吉安JIAN13588889999"},{name:"江门",mobile:"13588889999",keyword:"江门JIANGMEN13588889999"}]},{letter:"K",data:[{name:"开封",mobile:"13588889999",keyword:"开封KAIFENG13588889999"},{name:"喀什",mobile:"13588889999",keyword:"喀什KASHI13588889999"},{name:"克拉玛依",mobile:"13588889999",keyword:"克拉玛依KELAMAYI13588889999"}]},{letter:"L",data:[{name:"来宾",mobile:"13588889999",keyword:"来宾LAIBIN13588889999"},{name:"兰州",mobile:"13588889999",keyword:"兰州LANZHOU13588889999"},{name:"拉萨",mobile:"13588889999",keyword:"拉萨LASA13588889999"},{name:"乐山",mobile:"13588889999",keyword:"乐山LESHAN13588889999"},{name:"凉山",mobile:"13588889999",keyword:"凉山LIANGSHAN13588889999"},{name:"连云港",mobile:"13588889999",keyword:"连云港LIANYUNGANG13588889999"},{name:"聊城",mobile:"18322223333",keyword:"聊城LIAOCHENG18322223333"},{name:"辽阳",mobile:"18322223333",keyword:"辽阳LIAOYANG18322223333"},{name:"辽源",mobile:"18322223333",keyword:"辽源LIAOYUAN18322223333"},{name:"丽江",mobile:"18322223333",keyword:"丽江LIJIANG18322223333"},{name:"临沧",mobile:"18322223333",keyword:"临沧LINCANG18322223333"},{name:"临汾",mobile:"18322223333",keyword:"临汾LINFEN18322223333"},{name:"临夏",mobile:"18322223333",keyword:"临夏LINXIA18322223333"},{name:"临沂",mobile:"18322223333",keyword:"临沂LINYI18322223333"},{name:"林芝",mobile:"18322223333",keyword:"林芝LINZHI18322223333"},{name:"丽水",mobile:"18322223333",keyword:"丽水LISHUI18322223333"}]},{letter:"M",data:[{name:"眉山",mobile:"15544448888",keyword:"眉山MEISHAN15544448888"},{name:"梅州",mobile:"15544448888",keyword:"梅州MEIZHOU15544448888"},{name:"绵阳",mobile:"15544448888",keyword:"绵阳MIANYANG15544448888"},{name:"牡丹江",mobile:"15544448888",keyword:"牡丹江MUDANJIANG15544448888"}]},{letter:"N",data:[{name:"南昌",mobile:"15544448888",keyword:"南昌NANCHANG15544448888"},{name:"南充",mobile:"15544448888",keyword:"南充NANCHONG15544448888"},{name:"南京",mobile:"15544448888",keyword:"南京NANJING15544448888"},{name:"南宁",mobile:"15544448888",keyword:"南宁NANNING15544448888"},{name:"南平",mobile:"15544448888",keyword:"南平NANPING15544448888"}]},{letter:"O",data:[{name:"欧阳",mobile:"15544448888",keyword:"欧阳ouyang15544448888"}]},{letter:"P",data:[{name:"盘锦",mobile:"15544448888",keyword:"盘锦PANJIN15544448888"},{name:"攀枝花",mobile:"15544448888",keyword:"攀枝花PANZHIHUA15544448888"},{name:"平顶山",mobile:"15544448888",keyword:"平顶山PINGDINGSHAN15544448888"},{name:"平凉",mobile:"15544448888",keyword:"平凉PINGLIANG15544448888"},{name:"萍乡",mobile:"15544448888",keyword:"萍乡PINGXIANG15544448888"},{name:"普洱",mobile:"15544448888",keyword:"普洱PUER15544448888"},{name:"莆田",mobile:"15544448888",keyword:"莆田PUTIAN15544448888"},{name:"濮阳",mobile:"15544448888",keyword:"濮阳PUYANG15544448888"}]},{letter:"Q",data:[{name:"黔东南",mobile:"15544448888",keyword:"黔东南QIANDONGNAN15544448888"},{name:"黔南",mobile:"15544448888",keyword:"黔南QIANNAN15544448888"},{name:"黔西南",mobile:"15544448888",keyword:"黔西南QIANXINAN15544448888"}]},{letter:"R",data:[{name:"日喀则",mobile:"15544448888",keyword:"日喀则RIKAZE15544448888"},{name:"日照",mobile:"15544448888",keyword:"日照RIZHAO15544448888"}]},{letter:"S",data:[{name:"三门峡",mobile:"15544448888",keyword:"三门峡SANMENXIA15544448888"},{name:"三明",mobile:"15544448888",keyword:"三明SANMING15544448888"},{name:"三沙",mobile:"15544448888",keyword:"三沙SANSHA15544448888"}]},{letter:"T",data:[{name:"塔城",mobile:"15544448888",keyword:"塔城TACHENG15544448888"},{name:"漯河",mobile:"15544448888",keyword:"漯河TAHE15544448888"},{name:"泰安",mobile:"15544448888",keyword:"泰安TAIAN15544448888"}]},{letter:"W",data:[{name:"潍坊",mobile:"15544448888",keyword:"潍坊WEIFANG15544448888"},{name:"威海",mobile:"15544448888",keyword:"威海WEIHAI15544448888"},{name:"渭南",mobile:"15544448888",keyword:"渭南WEINAN15544448888"},{name:"文山",mobile:"15544448888",keyword:"文山WENSHAN15544448888"}]},{letter:"X",data:[{name:"厦门",mobile:"15544448888",keyword:"厦门XIAMEN15544448888"},{name:"西安",mobile:"15544448888",keyword:"西安XIAN15544448888"},{name:"湘潭",mobile:"15544448888",keyword:"湘潭XIANGTAN15544448888"}]},{letter:"Y",data:[{name:"雅安",mobile:"15544448888",keyword:"雅安YAAN15544448888"},{name:"延安",mobile:"15544448888",keyword:"延安YANAN15544448888"},{name:"延边",mobile:"15544448888",keyword:"延边YANBIAN15544448888"},{name:"盐城",mobile:"15544448888",keyword:"盐城YANCHENG15544448888"}]},{letter:"Z",data:[{name:"枣庄",mobile:"15544448888",keyword:"枣庄ZAOZHUANG15544448888"},{name:"张家界",mobile:"15544448888",keyword:"张家界ZHANGJIAJIE15544448888"},{name:"张家口",mobile:"15544448888",keyword:"张家口ZHANGJIAKOU15544448888"}]},{letter:"#",data:[{name:"其他.",mobile:"16666666666",keyword:"echo16666666666"}]}]}}}]);