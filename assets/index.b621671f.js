import{ad as t,ae as e,af as a,ag as s,ah as n,ai as i,z as o,aj as r,r as c}from"./index-80b03063.js";const h=(t,e=void 0)=>null==t?e:t,u=(t,e,a=void 0)=>h(t,h(e,a));function l(t){return null!=t&&"object"==typeof t}const g=Object.prototype.toString;function f(t){return!0===t||!1===t||l(t)&&"[object Boolean]"==g.call(t)}class d extends Error{constructor(t){super(t),this.name="TuniaoUIError"}}function b(t,e){throw new d(`[${t}] ${e}`)}function p(t,e){}function m(t,e=1){const a=h(t,"/pages/index/index"),s=n();if(null==s?void 0:s.length){const t=s[0];return 1!==s.length||t.route&&(null==t?void 0:t.route)==a?(i({delta:e}),Promise.resolve()):w(a,"reLaunch")}return w(a,"reLaunch")}function w(n,i="navigateTo"){return new Promise(((o,r)=>{switch(i){case"navigateTo":s({url:n,success:()=>{o()},fail:t=>{r(t)}});break;case"redirectTo":a({url:n,success:()=>{o()},fail:t=>{r(t)}});break;case"reLaunch":e({url:n,success:()=>{o()},fail:t=>{r(t)}});break;case"switchTab":t({url:n,success:()=>{o()},fail:t=>{r(t)}})}}))}const v={navbar:20090,tabbar:20090,modal:20076,popup:20075,notify:20074,sticky:10030,bubble:10020,mask:9999},y=()=>{const t=o({height:0,statusHeight:45}),e=o({width:0,height:32,top:0,right:0,bottom:0,left:0,marginRight:0}),a=o({width:0,height:0,operationHeight:0}),s=()=>{try{const s=r(),{statusBarHeight:n,windowWidth:i,windowHeight:o,titleBarHeight:c}=s;let h=0;h=(n||0)+45,e.width=87,e.height=32,e.right=i-7,e.left=i-7-87,e.top=4,e.bottom=36,e.marginRight=7,t.height=h,t.statusHeight=n,a.width=i,a.height=o,a.operationHeight=o-h}catch(s){}};return s(),{navBarInfo:t,navBarBoundingInfo:e,systemScreenInfo:a,getSystemRectInfo:s}};c(0);export{v as Z,h as a,f as b,l as c,p as d,m as e,b as f,u as i,g as o,w as t,y as u};