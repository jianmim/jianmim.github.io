import{_ as e}from"./u-picker.e5a15047.js";import{j as t,m as i,k as n,d as r,o as a,c as o}from"./index.6f985586.js";import{r as m}from"./uni-app.es.6e64b422.js";import{d as u}from"./dayjs.min.6a7fd165.js";import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";const l=s({name:"datetime-picker",mixins:[i,n,{props:{show:{type:Boolean,default:t.datetimePicker.show},showToolbar:{type:Boolean,default:t.datetimePicker.showToolbar},modelValue:{type:[String,Number],default:t.datetimePicker.value},title:{type:String,default:t.datetimePicker.title},mode:{type:String,default:t.datetimePicker.mode},maxDate:{type:Number,default:t.datetimePicker.maxDate},minDate:{type:Number,default:t.datetimePicker.minDate},minHour:{type:Number,default:t.datetimePicker.minHour},maxHour:{type:Number,default:t.datetimePicker.maxHour},minMinute:{type:Number,default:t.datetimePicker.minMinute},maxMinute:{type:Number,default:t.datetimePicker.maxMinute},filter:{type:[Function,null],default:t.datetimePicker.filter},formatter:{type:[Function,null],default:t.datetimePicker.formatter},loading:{type:Boolean,default:t.datetimePicker.loading},itemHeight:{type:[String,Number],default:t.datetimePicker.itemHeight},cancelText:{type:String,default:t.datetimePicker.cancelText},confirmText:{type:String,default:t.datetimePicker.confirmText},cancelColor:{type:String,default:t.datetimePicker.cancelColor},confirmColor:{type:String,default:t.datetimePicker.confirmColor},visibleItemCount:{type:[String,Number],default:t.datetimePicker.visibleItemCount},closeOnClickOverlay:{type:Boolean,default:t.datetimePicker.closeOnClickOverlay},defaultIndex:{type:Array,default:t.datetimePicker.defaultIndex}}}],data:()=>({columns:[],innerDefaultIndex:[],innerFormatter:(e,t)=>t}),watch:{show(e,t){e&&this.updateColumnValue(this.innerValue)},propsChange(){this.init()}},computed:{propsChange(){return[this.mode,this.maxDate,this.minDate,this.minHour,this.maxHour,this.minMinute,this.maxMinute,this.filter]}},mounted(){this.init()},emits:["close","cancel","confirm","change"],methods:{init(){this.innerValue=this.correctValue(this.modelValue),this.updateColumnValue(this.innerValue)},setFormatter(e){this.innerFormatter=e},close(){this.closeOnClickOverlay&&this.$emit("close")},cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm",{value:this.innerValue,mode:this.mode}),this.$emit("update:modelValue",this.innerValue)},intercept(e,t){let i=e.match(/\d+/g);return i.length>1?(uni.$u.error("请勿在过滤或格式化函数时添加数字"),0):t&&4==i[0].length?i[0]:i[0].length>2?(uni.$u.error("请勿在过滤或格式化函数时添加数字"),0):i[0]},change(e){const{indexs:t,values:i}=e;let n="";if("time"===this.mode)n=`${this.intercept(i[0][t[0]])}:${this.intercept(i[1][t[1]])}`;else{const e=parseInt(this.intercept(i[0][t[0]],"year")),r=parseInt(this.intercept(i[1][t[1]]));let a=parseInt(i[2]?this.intercept(i[2][t[2]]):1),o=0,m=0;const s=u(`${e}-${r}`).daysInMonth();"year-month"===this.mode&&(a=1),a=Math.min(s,a),"datetime"===this.mode&&(o=parseInt(this.intercept(i[3][t[3]])),m=parseInt(this.intercept(i[4][t[4]]))),n=Number(new Date(e,r-1,a,o,m))}n=this.correctValue(n),this.innerValue=n,this.updateColumnValue(n),this.$emit("change",{value:n,picker:this.$refs.picker,mode:this.mode})},updateColumnValue(e){this.innerValue=e,this.updateColumns(),this.updateIndexs(e)},updateIndexs(e){let t=[];const i=this.formatter||this.innerFormatter,n=uni.$u.padZero;if("time"===this.mode){const n=e.split(":");t=[i("hour",n[0]),i("minute",n[1])]}else t=[i("year",`${u(e).year()}`),i("month",n(u(e).month()+1))],"date"===this.mode&&t.push(i("day",n(u(e).date()))),"datetime"===this.mode&&t.push(i("day",n(u(e).date())),i("hour",n(u(e).hour())),i("minute",n(u(e).minute())));const r=this.columns.map(((e,i)=>Math.max(0,e.findIndex((e=>e===t[i])))));this.innerDefaultIndex=r},updateColumns(){const e=this.formatter||this.innerFormatter,t=this.getOriginColumns().map((t=>t.values.map((i=>e(t.type,i)))));this.columns=t},getOriginColumns(){return this.getRanges().map((({type:e,range:t})=>{let i=function(e,t){let i=-1;const n=Array(e<0?0:e);for(;++i<e;)n[i]=t(i);return n}(t[1]-t[0]+1,(i=>{let n=t[0]+i;return n="year"===e?`${n}`:uni.$u.padZero(n),n}));return this.filter&&(i=this.filter(e,i)),{type:e,values:i}}))},generateArray:(e,t)=>Array.from(new Array(t+1).keys()).slice(e),correctValue(e){const t="time"!==this.mode;if(t&&!uni.$u.test.date(e)?e=this.minDate:t||e||(e=`${uni.$u.padZero(this.minHour)}:${uni.$u.padZero(this.minMinute)}`),t)return e=u(e).isBefore(u(this.minDate))?this.minDate:e,e=u(e).isAfter(u(this.maxDate))?this.maxDate:e;{if(-1===String(e).indexOf(":"))return uni.$u.error("时间错误，请传递如12:24的格式");let[t,i]=e.split(":");return t=uni.$u.padZero(uni.$u.range(this.minHour,this.maxHour,Number(t))),i=uni.$u.padZero(uni.$u.range(this.minMinute,this.maxMinute,Number(i))),`${t}:${i}`}},getRanges(){if("time"===this.mode)return[{type:"hour",range:[this.minHour,this.maxHour]},{type:"minute",range:[this.minMinute,this.maxMinute]}];const{maxYear:e,maxDate:t,maxMonth:i,maxHour:n,maxMinute:r}=this.getBoundary("max",this.innerValue),{minYear:a,minDate:o,minMonth:m,minHour:u,minMinute:s}=this.getBoundary("min",this.innerValue),l=[{type:"year",range:[a,e]},{type:"month",range:[m,i]},{type:"day",range:[o,t]},{type:"hour",range:[u,n]},{type:"minute",range:[s,r]}];return"date"===this.mode&&l.splice(3,2),"year-month"===this.mode&&l.splice(2,3),l},getBoundary(e,t){const i=new Date(t),n=new Date(this[`${e}Date`]),r=u(n).year();let a=1,o=1,m=0,s=0;return"max"===e&&(a=12,o=u(i).daysInMonth(),m=23,s=59),u(i).year()===r&&(a=u(n).month()+1,u(i).month()+1===a&&(o=u(n).date(),u(i).date()===o&&(m=u(n).hour(),u(i).hour()===m&&(s=u(n).minute())))),{[`${e}Year`]:r,[`${e}Month`]:a,[`${e}Date`]:o,[`${e}Hour`]:m,[`${e}Minute`]:s}}}},[["render",function(t,i,n,u,s,l){const c=m(r("u-picker"),e);return a(),o(c,{ref:"picker",show:t.show,closeOnClickOverlay:t.closeOnClickOverlay,columns:s.columns,title:t.title,itemHeight:t.itemHeight,showToolbar:t.showToolbar,visibleItemCount:t.visibleItemCount,defaultIndex:s.innerDefaultIndex,cancelText:t.cancelText,confirmText:t.confirmText,cancelColor:t.cancelColor,confirmColor:t.confirmColor,onClose:l.close,onCancel:l.cancel,onConfirm:l.confirm,onChange:l.change},null,8,["show","closeOnClickOverlay","columns","title","itemHeight","showToolbar","visibleItemCount","defaultIndex","cancelText","confirmText","cancelColor","confirmColor","onClose","onCancel","onConfirm","onChange"])}],["__scopeId","data-v-3283e0df"]]);export{l as _};
