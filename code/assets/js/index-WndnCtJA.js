import{k as a,r as u,L as f,t as o,x as g,M as h,D as e,A as t,O as r,S as v,F as C,i as b,_ as x}from"./store-dof5ccn5.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";const D={class:"croppers-container layout-pd"},k={class:"cropper-img-warp"},I={class:"mb15 mt15"},w=["src"],E=a({name:"funCropper"}),V=a({...E,setup(A){const n=b(()=>x(()=>import("./index-GEwA5miB.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),s=u(),c=f({cropperImg:"https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"}),p=()=>{s.value.openDialog(c.cropperImg)};return(B,N)=>{const _=o("el-alert"),l=o("ele-Crop"),i=o("el-icon"),m=o("el-button"),d=o("el-card");return g(),h("div",D,[e(d,{shadow:"hover",header:"cropper 图片裁剪"},{default:t(()=>[e(_,{title:"感谢优秀的 `cropperjs`，项目地址：https://github.com/fengyuanchen/cropperjs",type:"success",closable:!1,class:"mb15"}),r("div",k,[r("div",I,[r("img",{class:"cropper-img",src:c.cropperImg},null,8,w)]),e(m,{type:"primary",size:"default",onClick:p},{default:t(()=>[e(i,null,{default:t(()=>[e(l)]),_:1}),v(" 更换头像 ")]),_:1})])]),_:1}),e(C(n),{ref_key:"cropperDialogRef",ref:s},null,512)])}}}),R=y(V,[["__scopeId","data-v-a8ee7d87"]]);export{R as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-GEwA5miB.js","./store-dof5ccn5.js","../css/store-dzCp3yyn.css","./_plugin-vue_export-helper-x3n3nnut.js","../css/index-Bv31TiWq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
