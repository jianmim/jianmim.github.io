(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-water-list"],{"09f9":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i}));var i={vTabs:a("3fb6").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{position:"fixed",top:"0","margin-top":"93rpx","z-index":"3",width:"750rpx"}},[a("v-tabs",{attrs:{scroll:!1,tabs:e.tabs},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab.apply(void 0,arguments)}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1),a("v-uni-view",{staticClass:"m-position",staticStyle:{"margin-top":"88rpx"}},e._l(e.lists,(function(t,i){return a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{staticClass:"title space-between"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-text",{staticClass:"title-name"},[e._v(e._s(t.Title))])],1),a("v-uni-text",{staticClass:"right text-red icon-title"},[e._v(e._s(t.Salary))])],1),a("v-uni-view",{staticClass:"company"},[a("v-uni-view",{staticClass:"left"},[e._v("开始加水时间："+e._s(t.Demands))])],1),a("v-uni-view",{staticClass:"company"},[a("v-uni-view",{staticClass:"left"},[e._v("加水时长："+e._s(t.CompanyName))])],1),a("v-uni-view",{staticClass:"company"},[a("v-uni-view",{staticClass:"left"},[e._v("加水重量："+e._s(t.CompanyName))]),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"text-cyan",staticStyle:{"font-size":"40rpx","padding-right":"8rpx"}},[e._v("100")]),e._v("元")],1)],1),a("v-uni-view",{staticClass:"desc"},[a("v-uni-text",[e._v(e._s(t.expRequire))]),a("v-uni-text",[e._v(e._s(t.minEducation))]),e._l(t.skill,(function(t,i){return a("v-uni-text",{key:i},[e._v(e._s(t))])}))],2)],1)})),1)],1)},c=[]},"11ab":function(e,t,a){"use strict";(function(e){a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("c7eb")),c=i(a("1da1")),r={data:function(){return{current:0,tabs:["进行中","已完成"],lists:[]}},onLoad:function(e){this.fetchData()},onPullDownRefresh:function(){this.fetchData()},onReachBottom:function(){this.fetchData()},methods:{changeTab:function(t){e.log("当前选中的项："+t)},fetchData:function(){var t=this;return(0,c.default)((0,n.default)().mark((function a(){var i;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/Recruitment/AllList?pageindex=1&pagesize=10&Keyword=&Kind=0");case 2:i=a.sent,e.log("检查登录",i),0==i.code&&(t.lists=i.data.list,e.log("lists",t.lists));case 5:case"end":return a.stop()}}),a)})))()},toSubmit:function(){uni.showToast({icon:"none",title:"应聘成功！"})}}};t.default=r}).call(this,a("5a52")["default"])},"1d51":function(e,t,a){"use strict";a.r(t);var i=a("11ab"),n=a.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(c);t["default"]=n.a},"20db":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.body[data-v-1ec92aec]{margin-top:%?170?%}.top[data-v-1ec92aec]{width:100%;position:fixed;top:0;z-index:999;display:flex;flex-direction:column}.search[data-v-1ec92aec]{width:100%;display:flex;height:%?90?%;z-index:999;flex-direction:row;background-color:#05beb6;color:#fff;align-items:center;justify-content:center}.search .yzb-search[data-v-1ec92aec]{color:#999;font-size:%?28?%;margin:0 %?15?%;margin-top:%?8?%}.search .search-input[data-v-1ec92aec]{width:77%;height:%?65?%;border-radius:%?50?%;display:flex;flex-direction:row;background-color:#fff;align-items:center}.search .search-input uni-image[data-v-1ec92aec]{width:%?35?%;height:%?35?%;margin-right:%?10?%}.search .search-input uni-input[data-v-1ec92aec]{width:65%;font-size:%?28?%;color:#333}.search .btn-search[data-v-1ec92aec]{margin-left:%?20?%}.search .btn-cancel[data-v-1ec92aec]{margin-left:%?20?%}.m-position .item[data-v-1ec92aec]{background-color:#fff;padding:%?20?%;border-bottom:%?10?% solid #f8f8f8}.space-between[data-v-1ec92aec]{display:flex;justify-content:space-between;flex-direction:row}.title[data-v-1ec92aec]{line-height:%?60?%}.title .title-name[data-v-1ec92aec]{font-weight:700;font-size:%?32?%}.title .title-parttime[data-v-1ec92aec]{color:#ff822b;border:%?1?% solid #ff822b;font-size:%?24?%;margin-right:%?15?%;padding:%?5?% %?10?%;border-radius:%?6?%}.title .title-share[data-v-1ec92aec]{color:#05beb6;border:%?1?% solid #05beb6;border-radius:%?20?% %?0?%;font-size:%?24?%;margin-left:%?20?%;padding:%?0?% %?10?%}.title .right[data-v-1ec92aec]{font-size:%?24?%}.company[data-v-1ec92aec]{line-height:%?50?%;color:#666;font-size:%?24?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.company .height-line[data-v-1ec92aec]{height:%?20?%;width:%?4?%;background-color:#ccc;margin:0 %?15?%}.company .left[data-v-1ec92aec]{display:flex;flex-direction:row;align-items:center;margin-right:%?15?%}.company .left uni-text[data-v-1ec92aec]{margin-right:%?10?%;font-size:%?24?%}.company .right uni-text[data-v-1ec92aec]{font-size:%?24?%}.company .yzb-yirenzheng1[data-v-1ec92aec]{color:#4cd964}.share[data-v-1ec92aec]{color:#999;font-size:%?28?%;display:flex;flex-direction:row;align-items:center}.share .height-line[data-v-1ec92aec]{height:%?20?%;width:%?4?%;background-color:#ccc;margin:0 %?15?%}.desc[data-v-1ec92aec]{margin-top:%?5?%;display:flex;flex-wrap:wrap;align-items:center;align-content:flex-start;flex-direction:row;justify-content:flex-start}.desc uni-text[data-v-1ec92aec]{font-size:%?24?%;padding:%?0?% %?10?%;margin-right:%?15?%;margin-bottom:%?8?%;background-color:#f8f8f8;border-radius:%?5?%;color:#666}.desc .position-type2[data-v-1ec92aec]{border:#fa436a %?1?% solid;background-color:#fff;color:#fa436a}.desc .position-type3[data-v-1ec92aec]{border:#ff822b %?1?% solid;background-color:#fff;color:#ff822b}.user[data-v-1ec92aec]{padding-top:%?10?%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.user uni-image[data-v-1ec92aec]{width:%?60?%;height:%?60?%;border-radius:%?30?%}.user .left[data-v-1ec92aec]{display:flex;flex-direction:row;align-items:center;font-size:%?24?%;color:#666}.user .left .name[data-v-1ec92aec]{margin:0 %?20?%}.user .right[data-v-1ec92aec]{display:flex;flex-direction:row;align-items:center}.user .right .area[data-v-1ec92aec]{margin-right:%?15?%}.user .right uni-text[data-v-1ec92aec]{color:#999;font-size:%?24?%}',""]),e.exports=t},"60ce":function(e,t,a){"use strict";a.r(t);var i=a("09f9"),n=a("1d51");for(var c in n)["default"].indexOf(c)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(c);a("c1b0");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"1ec92aec",null,!1,i["a"],void 0);t["default"]=o.exports},6420:function(e,t,a){var i=a("20db");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("062879fe",i,!0,{sourceMap:!1,shadowMode:!1})},c1b0:function(e,t,a){"use strict";var i=a("6420"),n=a.n(i);n.a}}]);