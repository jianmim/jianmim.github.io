(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-popup-popup"],{"27d0":function(t,e,o){"use strict";o.r(e);var n=o("5874"),s=o("ba31");for(var i in s)"default"!==i&&function(t){o.d(e,t,(function(){return s[t]}))}(i);o("4839");var a,c=o("f0c5"),l=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"b4d3dc76",null,!1,n["a"],a);e["default"]=l.exports},4839:function(t,e,o){"use strict";var n=o("7d9f"),s=o.n(n);s.a},5874:function(t,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var n={tnNavBar:o("0e08").default,tnButton:o("fc68").default,tnPopup:o("65b5").default},s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"components-popup"},[o("tn-nav-bar",{attrs:{fixed:!0}},[t._v("弹框")]),o("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[o("dynamic-demo-template",{ref:"demoTemplate",attrs:{tips:t.tips,sectionList:t.sectionList,full:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[o("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"tn-color-white",disabled:t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPopup.apply(void 0,arguments)}}},[t._v("弹出弹框")])],1)],1),o("tn-popup",{attrs:{marginTop:t.vuex_custom_bar_height,length:"50%",mode:t.mode,backgroundColor:t.backgroundColor,width:t.width,height:t.height,borderRadius:t.borderRadius,closeBtn:t.closeBtn,closeBtnIcon:t.closeBtnIcon,closeBtnPosition:t.closeBtnPosition,maskCloseable:t.maskCloseable},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closedPopup.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("v-uni-view",{staticClass:"popup-content",class:{"popup-content--center":"center"===t.mode}},[o("tn-button",{attrs:{shape:"round",width:"220rpx",fontColor:"#080808"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closedPopup.apply(void 0,arguments)}}},[t._v("关闭弹窗")])],1)],1)],1)},i=[]},"6d0c":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.popup-content[data-v-b4d3dc76]{height:100%;width:auto;display:flex;justify-content:center;align-items:center}.popup-content--center[data-v-b4d3dc76]{padding:%?150?% %?50?%}',""]),t.exports=e},"7d9f":function(t,e,o){var n=o("6d0c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=o("4f06").default;s("3b9ba0ca",n,!0,{sourceMap:!1,shadowMode:!1})},ba31:function(t,e,o){"use strict";o.r(e);var n=o("be1b"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},be1b:function(t,e,o){"use strict";var n=o("4ea4");o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(o("6273")),i={name:"componentsPopup",components:{dynamicDemoTemplate:s.default},data:function(){return{show:!1,mode:"left",backgroundColor:"",width:"",height:"",borderRadius:0,closeBtn:!0,closeBtnIcon:"close",closeBtnPosition:"top-right",maskCloseable:!0,popupShowSubsectionIndex:1,tips:["无需依赖额外的样式文件","使用tn-popup组件, 如果使用了自定义顶部，需要设置marginTop属性为自定义顶部的高度"],sectionList:[{name:"参数切换",section:[{title:"背景颜色",optional:["默认","tn-bg-grey--light","#C6D1D8"],methods:"backgroundColorChange"},{title:"宽高",optional:["默认","自定义"],methods:"widthHeightChange"},{title:"圆角",optional:["0","23"],methods:"borderRadiusChange"},{title:"弹出位置",optional:["上","下","中","左","右"],methods:"modeChange",current:3},{title:"关闭按钮",optional:["显示","隐藏"],methods:"closeBtnChange"},{title:"关闭按钮图标",optional:["close","cross-fill"],methods:"closeBtnIconChange"},{title:"关闭按钮位置",optional:["左上","右上","左下","右下"],methods:"closeBtnPositionChange",current:1},{title:"点击遮罩关闭",optional:["是","否"],methods:"maskCloseableChange"}]}]}},methods:{click:function(t){this[t.methods]&&this[t.methods](t)},showPopup:function(){this.openPopup()},modeChange:function(t){switch(t.index){case 0:this.mode="top";break;case 1:this.mode="bottom";break;case 2:this.mode="center";break;case 3:this.mode="left";break;case 4:this.mode="right";break}this.openPopup()},backgroundColorChange:function(t){this.backgroundColor=0===t.index?"":t.name,this.openPopup()},widthHeightChange:function(t){0===t.index?(this.width="",this.height=""):(this.width="center"!==this.mode?"30%":"60%",this.height="center"!==this.mode?"30%":"20%"),this.openPopup()},borderRadiusChange:function(t){this.borderRadius=Number(t.name),this.openPopup()},closeBtnChange:function(t){0===t.index?(this.closeBtn=!0,this.$refs.demoTemplate.updateSectionBtnsState([5,6],!0)):(this.closeBtn=!1,this.$refs.demoTemplate.updateSectionBtnsState([5,6],!1)),this.openPopup()},closeBtnIconChange:function(t){this.closeBtnIcon=t.name,this.openPopup()},closeBtnPositionChange:function(t){switch(t.index){case 0:this.closeBtnPosition="top-left";break;case 1:this.closeBtnPosition="top-right";break;case 2:this.closeBtnPosition="bottom-left";break;case 3:this.closeBtnPosition="bottom-right";break}this.openPopup()},maskCloseableChange:function(t){0===t.index?this.maskCloseable=!0:(this.maskCloseable=!1,this.closeBtn=!0,this.$refs.demoTemplate.updateSectionBtnsValue(0,4,0),this.$refs.demoTemplate.updateSectionBtnsState([5,6],!0)),this.openPopup()},openPopup:function(){this.show=!0},closedPopup:function(){this.show=!1}}};e.default=i}}]);