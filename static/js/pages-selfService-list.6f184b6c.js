(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selfService-list"],{"289c":function(t,i,e){"use strict";e.r(i);var a=e("5773"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},5773:function(t,i,e){"use strict";(function(t){e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d3b7"),e("159b"),e("acd8");var a={data:function(){return{regionlevel:3,url:"",Color:"",title:"自助机",keyword:"",id:"",lists:[],tel:""}},onLoad:function(i){this.id=i.id,t.log(this.id),this.url=uni.getStorageSync("accessoryUrl"),this.Color=uni.getStorageSync("Color"),this.tel=uni.getStorageSync("tel"),this.fetchData()},methods:{toSearch:function(){this.fetchData()},fetchData:function(){var i=this,e={page_size:20,page_index:1,key:"5aekiETS5845215sdfasED",addresstype:"03",regionlevel:this.regionlevel};t.log("data",e),this.$http.get("/IMKnowledge/GetKMAddressInfo",e).then((function(e){t.log("res",e),i.lists=e.data.Data.rows,t.log("lists",i.lists),i.lists.forEach((function(t,e){t.distance=i.formatDistance(i.getL(t.Latitude,t.Longitude))}))})).catch((function(i){t.log(i)}))},getL:function(i,e){uni.getLocation({type:"gcj02",success:function(a){t.log("当前位置的经度："+a.longitude),t.log("当前位置的纬度："+a.latitude);var n=a,s=i*Math.PI/180,o=n.latitude*Math.PI/180,c=s-o,r=e*Math.PI/180-n.longitude*Math.PI/180,l=2*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(s)*Math.cos(o)*Math.pow(Math.sin(r/2),2)));return l*=6378.137,l=Math.round(1e4*l)/10,l}})},formatDistance:function(i){if(t.log("distance",i),i){var e=parseFloat(i);return e>1e3?(i/1e3).toFixed(2)+"km":e+"m"}return"0km"},toDetail:function(t){uni.navigateTo({url:"./detail?id="+t})},toService:function(){uni.navigateTo({url:"./gotos"})},toPhone:function(){uni.makePhoneCall({phoneNumber:this.tel})}}};i.default=a}).call(this,e("5a52")["default"])},"5f4b":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uniNavBar:e("0654").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("uni-nav-bar",{attrs:{title:t.title,"left-icon":"left",backgroundColor:t.Color,shadow:!0,dark:!0},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"cu-bar search bg-white padding-tb"},[e("v-uni-view",{staticClass:"search-form round"},[e("v-uni-text",{staticClass:"icon-search"}),e("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"在这里输入您想查找的机器","confirm-type":"search"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.toSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(i){t.keyword=i},expression:"keyword"}})],1)],1),t._l(t.lists,(function(i,a){return[e("v-uni-view",{key:a+"_0",staticClass:"cu-list menu margin-sm sm-border radius",staticStyle:{"background-color":"#fff"}},[e("v-uni-view",{staticClass:"cu-item flex padding-tb",staticStyle:{"align-items":"flex-start"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i.ID)}}},[e("v-uni-view",[i.Url?e("v-uni-image",{staticStyle:{width:"200rpx",height:"200rpx"},attrs:{src:t.url+i.Url}}):e("v-uni-image",{staticStyle:{width:"200rpx",height:"200rpx"},attrs:{src:"/static/m.png"}})],1),e("v-uni-view",{staticStyle:{width:"520rpx",overflow:"hidden"}},[e("v-uni-view",{staticClass:"flex_c"},[e("v-uni-view",{staticClass:"text-bold"},[t._v(t._s(i.Name))])],1),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.Remark))]),e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.AddressInfo))]),e("v-uni-view",{staticClass:"flex_sb_c margin-top"},[e("v-uni-view"),e("v-uni-view",{staticClass:"round bg-gray",staticStyle:{padding:"5rpx 20rpx"}},[e("v-uni-text",{staticClass:"icon-location"}),t._v("1.61km")],1)],1)],1)],1)],1)]}))],2)},s=[]},6844:function(t,i,e){"use strict";var a=e("c7cc"),n=e.n(a);n.a},"699d":function(t,i,e){"use strict";e.r(i);var a=e("5f4b"),n=e("289c");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("6844");var o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"702ccf90",null,!1,a["a"],void 0);i["default"]=c.exports},"76c1":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".lists[data-v-702ccf90]{line-height:%?60?%;margin:%?20?% %?30?%}",""]),t.exports=i},c7cc:function(t,i,e){var a=e("76c1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("f3f940e6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);