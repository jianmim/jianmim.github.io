import{j as e,m as t,k as l,d as n,o,c as u,w as a,u as s,l as i,n as r,q as d,a as h,p as c,i as m,I as p,f as g,t as b,g as f}from"./index.6f985586.js";import{_ as y}from"./u-icon.3c3802b5.js";import{r as C}from"./uni-app.es.6e64b422.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as V}from"./u-cell.79bf2487.js";import{_ as v}from"./u-cell-group.398f4180.js";import"./u-line.05730c7c.js";const _=x({name:"u-number-box",mixins:[t,l,{props:{name:{type:[String,Number],default:e.numberBox.name},modelValue:{type:[String,Number],default:e.numberBox.value},min:{type:[String,Number],default:e.numberBox.min},max:{type:[String,Number],default:e.numberBox.max},step:{type:[String,Number],default:e.numberBox.step},integer:{type:Boolean,default:e.numberBox.integer},disabled:{type:Boolean,default:e.numberBox.disabled},disabledInput:{type:Boolean,default:e.numberBox.disabledInput},asyncChange:{type:Boolean,default:e.numberBox.asyncChange},inputWidth:{type:[String,Number],default:e.numberBox.inputWidth},showMinus:{type:Boolean,default:e.numberBox.showMinus},showPlus:{type:Boolean,default:e.numberBox.showPlus},decimalLength:{type:[String,Number,null],default:e.numberBox.decimalLength},longPress:{type:Boolean,default:e.numberBox.longPress},color:{type:String,default:e.numberBox.color},buttonSize:{type:[String,Number],default:e.numberBox.buttonSize},bgColor:{type:String,default:e.numberBox.bgColor},cursorSpacing:{type:[String,Number],default:e.numberBox.cursorSpacing},disablePlus:{type:Boolean,default:e.numberBox.disablePlus},disableMinus:{type:Boolean,default:e.numberBox.disableMinus},iconStyle:{type:[Object,String],default:e.numberBox.iconStyle}}}],data:()=>({currentValue:"",longPressTimer:null}),watch:{watchChange(e){this.check()},modelValue(e){e!==this.currentValue&&(this.currentValue=this.format(this.modelValue))}},computed:{getCursorSpacing(){return uni.$u.getPx(this.cursorSpacing)},buttonStyle(){return e=>{const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),color:this.color};return this.isDisabled(e)&&(t.backgroundColor="#f7f8fa"),t}},inputStyle(){this.disabled||this.disabledInput;return{color:this.color,backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),width:uni.$u.addUnit(this.inputWidth)}},watchChange(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled(){return e=>"plus"===e?this.disabled||this.disablePlus||this.currentValue>=this.max:this.disabled||this.disableMinus||this.currentValue<=this.min}},mounted(){this.init()},emits:["update:modelValue","focus","blur","overlimit","change","plus","minus"],methods:{init(){this.currentValue=this.format(this.modelValue)},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),null!==this.decimalLength&&(e=e.toFixed(this.decimalLength)),e},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},check(){const e=this.format(this.currentValue);e!==this.currentValue&&(this.currentValue=e)},onFocus(e){this.$emit("focus",{...e.detail,name:this.name})},onBlur(e){this.format(e.detail.value),this.$emit("blur",{...e.detail,name:this.name})},onInput(e){const{value:t=""}=e.detail||{};if(""===t)return;let l=this.filter(t);if(null!==this.decimalLength&&-1!==l.indexOf(".")){const e=l.split(".");l=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}l=this.format(l),this.emitChange(l)},emitChange(e){this.asyncChange||this.$nextTick((()=>{this.$emit("update:modelValue",e),this.currentValue=e,this.$forceUpdate()})),this.$emit("change",{value:e,name:this.name})},onChange(){const{type:e}=this;if(this.isDisabled(e))return this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,l=this.format(this.add(+this.currentValue,t));this.emitChange(l),this.$emit(e)},add(e,t){const l=Math.pow(10,10);return Math.round((e+t)*l)/l},clickHandler(e){this.type=e,this.onChange()},longPressStep(){this.clearTimeout(),this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),250)},onTouchStart(e){this.longPress&&(this.clearTimeout(),this.type=e,this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),600))},onTouchEnd(){this.longPress&&this.clearTimeout()},clearTimeout(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},[["render",function(e,t,l,g,b,f){const x=m,V=C(n("u-icon"),y),v=p;return o(),u(x,{class:"u-number-box"},{default:a((()=>[e.showMinus&&e.$slots.minus?(o(),u(x,{key:0,class:"u-number-box__slot",onClick:t[0]||(t[0]=s((e=>f.clickHandler("minus")),["stop"])),onTouchstart:t[1]||(t[1]=e=>f.onTouchStart("minus")),onTouchend:s(f.clearTimeout,["stop"])},{default:a((()=>[i(e.$slots,"minus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showMinus?(o(),u(x,{key:1,class:r(["u-number-box__minus",{"u-number-box__minus--disabled":f.isDisabled("minus")}]),onClick:t[2]||(t[2]=s((e=>f.clickHandler("minus")),["stop"])),onTouchstart:t[3]||(t[3]=e=>f.onTouchStart("minus")),onTouchend:s(f.clearTimeout,["stop"]),"hover-class":"u-number-box__minus--hover","hover-stay-time":"150",style:d([f.buttonStyle("minus")])},{default:a((()=>[h(V,{name:"minus",color:f.isDisabled("minus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):c("",!0),i(e.$slots,"input",{},(()=>[h(v,{disabled:e.disabledInput||e.disabled,"cursor-spacing":f.getCursorSpacing,class:r([{"u-number-box__input--disabled":e.disabled||e.disabledInput},"u-number-box__input"]),modelValue:b.currentValue,"onUpdate:modelValue":t[4]||(t[4]=e=>b.currentValue=e),onBlur:f.onBlur,onFocus:f.onFocus,onInput:f.onInput,type:"number",style:d([f.inputStyle])},null,8,["disabled","cursor-spacing","class","modelValue","onBlur","onFocus","onInput","style"])]),!0),e.showPlus&&e.$slots.plus?(o(),u(x,{key:2,class:"u-number-box__slot",onClick:t[5]||(t[5]=s((e=>f.clickHandler("plus")),["stop"])),onTouchstart:t[6]||(t[6]=e=>f.onTouchStart("plus")),onTouchend:s(f.clearTimeout,["stop"])},{default:a((()=>[i(e.$slots,"plus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showPlus?(o(),u(x,{key:3,class:r(["u-number-box__plus",{"u-number-box__minus--disabled":f.isDisabled("plus")}]),onClick:t[7]||(t[7]=s((e=>f.clickHandler("plus")),["stop"])),onTouchstart:t[8]||(t[8]=e=>f.onTouchStart("plus")),onTouchend:s(f.clearTimeout,["stop"]),"hover-class":"u-number-box__plus--hover","hover-stay-time":"150",style:d([f.buttonStyle("plus")])},{default:a((()=>[h(V,{name:"plus",color:f.isDisabled("plus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):c("",!0)])),_:3})}],["__scopeId","data-v-2e799c96"]]);const S=x({data:()=>({value1:3,value2:3,value3:3,value4:3,value5:3,value6:3,value7:3,value8:3.1,value9:3,value10:3,value11:3,step1:2,min1:5,max1:8,asyncChange:!0,color:"#FFFFFF",buttonSize:36,bgColor:"#2979ff"}),methods:{change(e){console.log("change",e)},myAsyncChange(e){this.asyncChange=!1,uni.showLoading({title:"正在加载"}),setTimeout((()=>{uni.hideLoading(),this.value9=e,this.asyncChange=!0}),3e3)}}},[["render",function(e,t,l,s,i,r){const d=C(n("u-number-box"),_),c=C(n("u-cell"),V),p=C(n("u-icon"),y),x=m,S=f,T=C(n("u-cell-group"),v);return o(),u(x,{class:""},{default:a((()=>[h(T,{border:!0},{default:a((()=>[h(c,{border:!0,title:"基础用法"},{"right-icon":a((()=>[h(d,{modelValue:i.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value1=e),step:"1",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"步长设置"},{"right-icon":a((()=>[h(d,{modelValue:i.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value2=e),step:i.step1,onChange:r.change},null,8,["modelValue","step","onChange"])])),_:1}),h(c,{border:!0,title:"限制输入范围"},{"right-icon":a((()=>[h(d,{modelValue:i.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value3=e),step:"1",min:i.min1,max:i.max1,onChange:r.change},null,8,["modelValue","min","max","onChange"])])),_:1}),h(c,{border:!0,title:"限制输入整数"},{"right-icon":a((()=>[h(d,{modelValue:i.value4,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value4=e),step:"1",integer:"",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"禁用状态"},{"right-icon":a((()=>[h(d,{modelValue:i.value5,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value5=e),step:"1",disabled:!0,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"禁用输入框"},{"right-icon":a((()=>[h(d,{modelValue:i.value6,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value6=e),step:"1",disabledInput:!0,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"禁用长按"},{"right-icon":a((()=>[h(d,{modelValue:i.value7,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value7=e),step:"1",longPress:!1,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"固定小数位数"},{"right-icon":a((()=>[h(d,{modelValue:i.value8,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value8=e),step:"0.2",decimalLength:"1",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),h(c,{border:!0,title:"异步变更"},{"right-icon":a((()=>[h(d,{modelValue:i.value9,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value9=e),step:"1",asyncChange:i.asyncChange,onChange:r.myAsyncChange},null,8,["modelValue","asyncChange","onChange"])])),_:1}),h(c,{border:!0,title:"自定义大小颜色样式"},{"right-icon":a((()=>[h(d,{modelValue:i.value10,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value10=e),step:"1",color:i.color,buttonSize:i.buttonSize,bgColor:i.bgColor,onChange:r.change,iconStyle:"color: #fff"},null,8,["modelValue","color","buttonSize","bgColor","onChange"])])),_:1}),h(c,{border:!0,title:"自定义(为0时减少按钮会消失)"},{"right-icon":a((()=>[h(d,{modelValue:i.value11,"onUpdate:modelValue":t[10]||(t[10]=e=>i.value11=e),step:"1",min:0,showMinus:i.value11>0},{minus:a((()=>[h(x,{class:"minus"},{default:a((()=>[h(p,{name:"minus",size:"12"})])),_:1})])),input:a((()=>[h(S,{style:{width:"50px","text-align":"center"},class:"input"},{default:a((()=>[g(b(i.value11),1)])),_:1})])),plus:a((()=>[h(x,{class:"plus"},{default:a((()=>[h(p,{name:"plus",color:"#FFFFFF",size:"12"})])),_:1})])),_:1},8,["modelValue","showMinus"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-8a87e1e8"]]);export{S as default};