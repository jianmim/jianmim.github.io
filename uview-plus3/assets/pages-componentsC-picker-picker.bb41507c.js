import{_ as n}from"./u-navbar.4d25b388.js";import{o,c as e,w as l,i as c,a as s,b as i,r as a,F as u,d as t,e as r}from"./index.6f985586.js";import{r as m}from"./uni-app.es.6e64b422.js";import{_ as h}from"./u-cell.79bf2487.js";import{_ as p}from"./u-cell-group.398f4180.js";import{_ as d}from"./u-picker.e5a15047.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-status-bar.5fac92b4.js";import"./u-icon.3c3802b5.js";import"./u-line.05730c7c.js";import"./u-loading-icon.9827ac16.js";import"./u-popup.7d60b49b.js";import"./u-overlay.bc348baa.js";import"./u-transition.3959075c.js";import"./u-safe-bottom.6e67c0be.js";const C=f({data:()=>({index:0,loading:!1,columnData:[["深圳","厦门","上海","拉萨"],["得州","华盛顿","纽约","阿拉斯加"]],columns1:[["中国","美国","日本"]],columns2:[["中国","美国","日本"]],columns3:[["中国","美国"],["深圳","厦门","上海","拉萨"]],columns4:[["中国","美国"],["深圳","厦门","上海","拉萨"]],columns5:[["中国","美国","日本"]],columns6:[["中国","美国","日本"]],columns7:[[{label:"苹果",value:1},{label:"橘子",value:2},{label:"香蕉",value:3}]],show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,list:[{title:"基础使用",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/2.png"},{title:"设置默认项",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/5.png"},{title:"多列联动",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/1.png"},{title:"加载中状态(切换第一列)",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/3.png"},{title:"设置标题",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/4.png"},{title:"允许点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/picker/6.png"}]}),methods:{changeHandler1(n){this.change(n);const{columnIndex:o,value:e,values:l,index:c,picker:s=this.$refs.uPicker3}=n;0===o&&s.setColumnValues(1,this.columnData[c])},changeHandler2(n){this.change(n);const{columnIndex:o,value:e,values:l,index:c,picker:s=this.$refs.uPicker4}=n;0===o&&(this.loading=!0,uni.$u.sleep(1500).then((()=>{s.setColumnValues(1,this.columnData[c]),this.loading=!1})))},navigateBack(){uni.navigateBack()},change(n){},showPicker(n){this.index=n+1,this[`show${n+1}`]=!0},close(){this[`show${this.index}`]=!1},confirm(n){this[`show${this.index}`]=!1},cancel(){this[`show${this.index}`]=!1}}},[["render",function(f,C,g,w,v,k){const b=m(t("u-navbar"),n),j=r,x=m(t("u-cell"),h),_=m(t("u-cell-group"),p),U=m(t("u-picker"),d),$=c;return o(),e($,{class:"u-page",ref:"page"},{default:l((()=>[s(b,{title:"选择器",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),s(_,null,{default:l((()=>[(o(!0),i(u,null,a(v.list,((n,c)=>(o(),e(x,{onClick:n=>k.showPicker(c),title:n.title,key:c,isLink:""},{default:l((()=>[s(j,{slot:"icon",class:"u-cell-icon",src:n.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),s(U,{show:v.show1,columns:v.columns1,onChange:k.change,onCancel:k.cancel,onConfirm:k.confirm},null,8,["show","columns","onChange","onCancel","onConfirm"]),s(U,{show:v.show2,columns:v.columns2,defaultIndex:[1],onCancel:k.cancel,onConfirm:k.confirm,onChange:k.change},null,8,["show","columns","onCancel","onConfirm","onChange"]),s(U,{show:v.show3,columns:v.columns3,ref:"uPicker3",onCancel:k.cancel,onConfirm:k.confirm,onChange:k.changeHandler1},null,8,["show","columns","onCancel","onConfirm","onChange"]),s(U,{show:v.show4,columns:v.columns4,onCancel:k.cancel,onConfirm:k.confirm,loading:v.loading,onChange:k.changeHandler2,ref:"uPicker4"},null,8,["show","columns","onCancel","onConfirm","loading","onChange"]),s(U,{show:v.show5,columns:v.columns5,title:"标题太长就会显示省略号",onCancel:k.cancel,onConfirm:k.confirm,onChange:k.change},null,8,["show","columns","onCancel","onConfirm","onChange"]),s(U,{show:v.show6,columns:v.columns6,closeOnClickOverlay:"",onCancel:k.cancel,onConfirm:k.confirm,onClose:k.close,onChange:k.change},null,8,["show","columns","onCancel","onConfirm","onClose","onChange"])])),_:1},512)}],["__scopeId","data-v-839a0456"]]);export{C as default};