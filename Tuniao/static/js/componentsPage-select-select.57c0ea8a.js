(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-select-select"],{"1d51":function(e,t,l){var a=l("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.select-result[data-v-5ecf1e16]{margin-top:%?10?%;padding:%?10?% %?30?%;background-color:#e6e6e6;text-align:center}',""]),e.exports=t},"247a":function(e,t,l){"use strict";l.d(t,"b",(function(){return n})),l.d(t,"c",(function(){return i})),l.d(t,"a",(function(){return a}));var a={tnPopup:l("65b5").default},n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.value?l("v-uni-view",{staticClass:"tn-select-class tn-select"},[l("tn-popup",{attrs:{mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,maskCloseable:e.maskCloseable,zIndex:e.elZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[l("v-uni-view",{staticClass:"tn-select__content"},[l("v-uni-view",{staticClass:"tn-select__content__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[l("v-uni-view",{staticClass:"tn-select__content__header__btn tn-select__content__header--cancel",style:{color:e.cancelColor},attrs:{"hover-class":"tn-hover-class","hover-stay-time":"150"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),l("v-uni-view",{staticClass:"tn-select__content__header__title"},[e._v(e._s(e.title))]),l("v-uni-view",{staticClass:"tn-select__content__header__btn tn-select__content__header--confirm",style:{color:e.confirmColor},attrs:{"hover-class":"tn-hover-class","hover-stay-time":"150"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),l("v-uni-view",{staticClass:"tn-select__content__body"},[l("v-uni-picker-view",{staticClass:"tn-select__content__body__view",attrs:{value:e.defaultSelector},on:{pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickStart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickEnd.apply(void 0,arguments)},change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,a){return l("v-uni-picker-view-column",{key:a},e._l(t,(function(t,a){return l("v-uni-view",{key:a,staticClass:"tn-select__content__body__item"},[l("v-uni-view",{staticClass:"tn-text-ellipsis"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1):e._e()},i=[]},"466c":function(e,t,l){"use strict";l.r(t);var a=l("889a"),n=l.n(a);for(var i in a)"default"!==i&&function(e){l.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},"5a9b":function(e,t,l){var a=l("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-select__content[data-v-a22c038e]{position:relative}.tn-select__content__header[data-v-a22c038e]{position:relative;display:flex;flex-direction:row;width:100%;height:%?90?%;padding:0 %?40?%;align-items:center;justify-content:space-between;box-sizing:border-box;font-size:%?30?%;background-color:#fff}.tn-select__content__header__btn[data-v-a22c038e]{padding:%?16?%;box-sizing:border-box;text-align:center;text-decoration:none}.tn-select__content__header__title[data-v-a22c038e]{color:#080808}.tn-select__content__header--cancel[data-v-a22c038e]{color:#aaa}.tn-select__content__header--confirm[data-v-a22c038e]{color:#01beff}.tn-select__content__body[data-v-a22c038e]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.tn-select__content__body__view[data-v-a22c038e]{height:100%;box-sizing:border-box}.tn-select__content__body__item[data-v-a22c038e]{display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?32?%;color:#080808;padding:0 %?8?%}',""]),e.exports=t},"6efa":function(e,t,l){"use strict";l("cb29"),l("d81d"),l("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"tn-select",props:{value:{type:Boolean,default:!1},mode:{type:String,default:"single"},list:{type:Array,default:function(){return[]}},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},defaultValue:{type:Array,default:function(){return[0]}},title:{type:String,default:""},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:""},confirmText:{type:String,default:"确认"},confirmColor:{type:String,default:""},maskCloseable:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},zIndex:{type:Number,default:0}},computed:{elZIndex:function(){return this.zIndex?this.zIndex:this.$t.zIndex.popup}},data:function(){return{moving:!1,defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0}},watch:{value:{handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)},immediate:!0}},methods:{pickStart:function(){},pickEnd:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length===this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$t.deepClone(this.defaultSelector)},setColumnNum:function(){if("single"===this.mode)this.columnNum=1;else if("multi"===this.mode)this.columnNum=this.list.length;else if("multi-auto"===this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"multi-auto"===this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],l=0;l<this.columnNum;l++)0===l?(e[l]=this.list,t=t[this.childName]):(e[l]=t,t=t[this.defaultSelector[l]][this.childName]);else"single"===this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var l={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(l.extra=e.extra),this.selectValue.push(l)}},columnChange:function(e){var t=this,l=null,a=e.detail.value;if(this.selectValue=[],"multi-auto"===this.mode){this.lastSelectIndex.map((function(e,t){e!=a[t]&&(l=t)})),this.defaultSelector=a;for(var n=l+1;n<this.columnNum;n++)this.columnData[n]=this.columnData[n-1][n-1==l?a[l]:0][this.childName],this.defaultSelector[n]=0;a.map((function(e,l){var n=t.columnData[l][a[l]],i={value:n?n[t.valueName]:null,label:n?n[t.labelName]:null};n&&void 0!==n.extra&&(i.extra=n.extra),t.selectValue.push(i)})),this.lastSelectIndex=a}else if("single"===this.mode){var i=this.columnData[0][a[0]],s={value:i?i[this.valueName]:null,label:i?i[this.labelName]:null};i&&void 0!==i.extra&&(s.extra=i.extra),this.selectValue.push(s)}else"multi"===this.mode&&a.map((function(e,l){var n=t.columnData[l][a[l]],i={value:n?n[t.valueName]:null,label:n?n[t.labelName]:null};n&&void 0!==n.extra&&(i.extra=n.extra),t.selectValue.push(i)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()}}};t.default=a},"869d":function(e,t,l){var a=l("5a9b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=l("4f06").default;n("09d53907",a,!0,{sourceMap:!1,shadowMode:!1})},"889a":function(e,t,l){"use strict";var a=l("4ea4");l("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l("6273")),i={name:"componentsSelect",components:{dynamicDemoTemplate:n.default},data:function(){return{result:"Select结果",show:!1,mode:"single",list:[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"}],maskCloseable:!0,tips:["无需依赖额外的样式文件","使用tn-select组件"],sectionList:[{name:"参数切换",section:[{title:"模式",optional:["单列","多列","自动多列"],methods:"modeChange"},{title:"点击遮罩关闭",optional:["是","否"],methods:"maskCloseableChange"}]}]}},methods:{click:function(e){this[e.methods]&&this[e.methods](e)},showSelect:function(e){this.openSelect()},modeChange:function(e){switch(e.index){case 0:this.mode="single",this.list=[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"}];break;case 1:this.mode="multi",this.list=[[{value:1,label:"哆啦A梦"},{value:2,label:"大熊"},{value:3,label:"小夫"},{value:4,label:"静香"},{value:5,label:"胖虎"}],[{value:1,label:"家"},{value:2,label:"学校"},{value:3,label:"操场"}]];break;case 2:this.mode="multi-auto",this.list=[{value:11,label:"森林—1",children:[{value:1101,label:"树-11",children:[{value:110101,label:"树叶-111"},{value:110102,label:"树叶-112"},{value:110103,label:"树叶-113"},{value:110104,label:"树叶-114"}]},{value:1102,label:"树-12",children:[{value:110201,label:"树叶-121"},{value:110202,label:"树叶-122"},{value:110203,label:"树叶-123"},{value:110204,label:"树叶-124"}]},{value:1103,label:"树-13",children:[{value:110301,label:"树叶-131"},{value:110302,label:"树叶-132"},{value:110303,label:"树叶-133"},{value:110304,label:"树叶-134"}]}]},{value:12,label:"森林—2",children:[{value:1201,label:"树-21",children:[{value:120101,label:"树叶-211"},{value:120102,label:"树叶-212"},{value:120103,label:"树叶-213"},{value:120104,label:"树叶-214"}]},{value:1202,label:"树-22",children:[{value:120201,label:"树叶-221"},{value:120202,label:"树叶-222"},{value:120203,label:"树叶-223"},{value:120204,label:"树叶-224"}]},{value:1203,label:"树-23",children:[{value:120301,label:"树叶-231"},{value:120302,label:"树叶-232"},{value:120303,label:"树叶-233"},{value:120304,label:"树叶-234"}]}]}];break}this.openSelect()},maskCloseableChange:function(e){this.maskCloseable=0===e.index,this.openSelect()},cancelSelect:function(e){this.$t.message.toast("点击了取消按钮")},confirmSelect:function(e){var t=this;switch(console.log(e),this.mode){case"single":this.result=e[0]["label"];break;case"multi":this.result="",e.length&&e.map((function(e,l){0!==l&&(t.result+=" - "),t.result+=e.label}));break;case"multi-auto":this.result="",e.length&&e.map((function(e,l){0!==l&&(t.result+=" - "),t.result+=e.label}));break}},openSelect:function(){this.show=!0}}};t.default=i},"953e":function(e,t,l){var a=l("1d51");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=l("4f06").default;n("6325ca5e",a,!0,{sourceMap:!1,shadowMode:!1})},"9b92":function(e,t,l){"use strict";l.r(t);var a=l("247a"),n=l("a348");for(var i in n)"default"!==i&&function(e){l.d(t,e,(function(){return n[e]}))}(i);l("ee6b");var s,o=l("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"a22c038e",null,!1,a["a"],s);t["default"]=c.exports},a348:function(e,t,l){"use strict";l.r(t);var a=l("6efa"),n=l.n(a);for(var i in a)"default"!==i&&function(e){l.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a},c04b:function(e,t,l){"use strict";l.d(t,"b",(function(){return n})),l.d(t,"c",(function(){return i})),l.d(t,"a",(function(){return a}));var a={tnNavBar:l("0e08").default,tnButton:l("fc68").default,tnSelect:l("9b92").default},n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-uni-view",{staticClass:"components-select"},[l("tn-nav-bar",{attrs:{fixed:!0}},[e._v("Select列选择器")]),l("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[l("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:e.tips,sectionList:e.sectionList,full:!1},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}},[l("v-uni-view",{staticClass:"tn-flex tn-flex-row-center"},[l("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showSelect.apply(void 0,arguments)}}},[e._v("弹出Select")])],1),l("v-uni-view",{staticClass:"select-result tn-border-dashed"},[e._v(e._s(e.result))])],1)],1),l("tn-select",{attrs:{mode:e.mode,title:"请选择数据",list:e.list,maskCloseable:e.maskCloseable},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelSelect.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmSelect.apply(void 0,arguments)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},i=[]},c653:function(e,t,l){"use strict";var a=l("953e"),n=l.n(a);n.a},e89f:function(e,t,l){"use strict";l.r(t);var a=l("c04b"),n=l("466c");for(var i in n)"default"!==i&&function(e){l.d(t,e,(function(){return n[e]}))}(i);l("c653");var s,o=l("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5ecf1e16",null,!1,a["a"],s);t["default"]=c.exports},ee6b:function(e,t,l){"use strict";var a=l("869d"),n=l.n(a);n.a}}]);