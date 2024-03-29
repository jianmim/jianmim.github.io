import{_ as e}from"./u-navbar.4d25b388.js";import{o,c as a,w as t,i as r,a as l,f as s,b as i,r as d,F as n,d as m,g as u}from"./index.6f985586.js";import{r as h}from"./uni-app.es.6e64b422.js";import{_ as c}from"./u--input.c24b56e9.js";import{_ as f,a as b}from"./u--form.d9a21a2f.js";import{_ as p}from"./u-icon.3c3802b5.js";import{_ as g,a as y}from"./u-radio-group.d0e63714.js";import{_ as C,a as x}from"./u-checkbox-group.81266297.js";import{_}from"./u--textarea.37ce39eb.js";import{_ as k}from"./u-button.270af68b.js";import{_ as V}from"./u-action-sheet.9d188dac.js";import{_ as j}from"./u-calendar.a5027d3e.js";import{_ as w}from"./u-code.58839d78.js";import{_ as v}from"./u-datetime-picker.621b8c97.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-status-bar.5fac92b4.js";import"./u-line.05730c7c.js";import"./u-loading-icon.9827ac16.js";import"./u-gap.0e6106cb.js";import"./u-popup.7d60b49b.js";import"./u-overlay.bc348baa.js";import"./u-transition.3959075c.js";import"./u-safe-bottom.6e67c0be.js";import"./dayjs.min.6a7fd165.js";import"./_commonjsHelpers.b8add541.js";import"./u-picker.e5a15047.js";const $=I({data:()=>({fileList1:[],disabled1:!1,tips:"",value:"",showCalendar:!1,showBirthday:!1,model1:{userInfo:{name:"楼兰",sex:"",birthday:""},radiovalue1:"苹果",checkboxValue1:[],intro:"",code:""},showSex:!1,birthday:Number(new Date),actions:[{name:"男"},{name:"女"},{name:"保密"}],rules:{"userInfo.name":[{type:"string",required:!0,message:"请填写姓名",trigger:["blur","change"]},{validator:(e,o,a)=>uni.$u.test.chinese(o),message:"姓名必须为中文",trigger:["change","blur"]}],code:{type:"string",required:!0,len:4,message:"请填写4位验证码",trigger:["blur"]},"userInfo.sex":{type:"string",max:1,required:!0,message:"请选择男或女",trigger:["blur","change"]},radiovalue1:{type:"string",min:1,max:2,message:"橙子有毒",trigger:["change"]},checkboxValue1:{type:"array",min:2,required:!0,message:"不能太宅，至少选两项",trigger:["change"]},intro:{type:"string",min:3,required:!0,message:"不低于3个字",trigger:["change"]},hotel:{type:"string",min:2,required:!0,message:"请选择住店时间",trigger:["change"]},"userInfo.birthday":{type:"string",required:!0,message:"请选择生日",trigger:["change"]}},radiolist1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"毒橙子",disabled:!1}],checkboxList1:[{name:"羽毛球",disabled:!1},{name:"跑步",disabled:!1},{name:"爬山",disabled:!1}]}),onReady(){this.$refs.form1.setRules(this.rules)},methods:{afterRead(e){this.fileList1.push({url:e.file,status:"uploading",message:"上传中"})},groupChange(e){},radioChange(e){},navigateBack(){uni.navigateBack()},sexSelect(e){this.model1.userInfo.sex=e.name,this.$refs.form1.validateField("userInfo.sex")},change(e){},formatter(e){const o=new Date;let a=o.getMonth()+1;const t=o.getDate();return e.month==a&&e.day==t+3&&(e.bottomInfo="有优惠",e.dot=!0),e},calendarConfirm(e){this.showCalendar=!1,this.model1.hotel=`${e[0]} / ${e[e.length-1]}`,this.$refs.form1.validateField("hotel")},codeChange(e){this.tips=e},getCode(){this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((()=>{uni.hideLoading(),uni.$u.toast("验证码已发送"),this.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},calendarClose(){this.showCalendar=!1,this.$refs.form1.validateField("hotel")},birthdayClose(){this.showBirthday=!1,this.$refs.form1.validateField("userInfo.birthday")},birthdayConfirm(e){this.showBirthday=!1,this.model1.userInfo.birthday=uni.$u.timeFormat(e.value,"yyyy-mm-dd"),this.$refs.form1.validateField("userInfo.birthday")},submit(){this.$refs.form1.validate().then((e=>{uni.$u.toast("校验通过")})).catch((e=>{uni.$u.toast("校验失败")}))},reset(){const e=["userInfo.name","userInfo.sex","radiovalue1","checkboxValue1","intro","hotel","code","userInfo.birthday"];this.$refs.form1.resetFields(),this.$refs.form1.clearValidate(),setTimeout((()=>{this.$refs.form1.clearValidate(e)}),10)},hideKeyboard(){uni.hideKeyboard()}}},[["render",function(I,$,B,S,q,F){const L=h(m("u-navbar"),e),U=u,T=h(m("u--input"),c),K=h(m("u-form-item"),f),R=h(m("u-icon"),p),D=h(m("u-radio"),g),W=h(m("u-radio-group"),y),O=h(m("u-checkbox"),C),z=h(m("u-checkbox-group"),x),A=h(m("u--textarea"),_),E=h(m("u-button"),k),G=h(m("u--form"),b),H=h(m("u-action-sheet"),V),M=h(m("u-calendar"),j),N=h(m("u-code"),w),P=h(m("u-datetime-picker"),v),J=r;return o(),a(J,{class:"u-page"},{default:t((()=>[l(L,{title:"表单",onLeftClick:F.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),l(J,{class:"u-demo-block"},{default:t((()=>[l(U,{class:"u-demo-block__title"},{default:t((()=>[s("基础使用")])),_:1}),l(J,{class:"u-demo-block__content"},{default:t((()=>[l(G,{labelPosition:"left",model:q.model1,ref:"form1"},{default:t((()=>[l(K,{label:"姓名",prop:"userInfo.name",borderBottom:"",ref:"item1"},{default:t((()=>[l(T,{modelValue:q.model1.userInfo.name,"onUpdate:modelValue":$[0]||($[0]=e=>q.model1.userInfo.name=e),border:"none",placeholder:"姓名,只能为中文"},null,8,["modelValue"])])),_:1},512),l(K,{label:"性别",prop:"userInfo.sex",borderBottom:"",onClick:$[2]||($[2]=e=>{q.showSex=!0,F.hideKeyboard()}),ref:"item1"},{default:t((()=>[l(T,{modelValue:q.model1.userInfo.sex,"onUpdate:modelValue":$[1]||($[1]=e=>q.model1.userInfo.sex=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择性别",border:"none"},null,8,["modelValue"]),l(R,{slot:"right",name:"arrow-right"})])),_:1},512),l(K,{label:"水果",prop:"radiovalue1",borderBottom:"",ref:"item2"},{default:t((()=>[l(W,{modelValue:q.model1.radiovalue1,"onUpdate:modelValue":$[3]||($[3]=e=>q.model1.radiovalue1=e)},{default:t((()=>[(o(!0),i(n,null,d(q.radiolist1,((e,t)=>(o(),a(D,{customStyle:{marginRight:"16px"},key:t,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1},512),l(K,{label:"兴趣爱好",prop:"checkboxValue1",borderBottom:"",labelWidth:"80",ref:"item3"},{default:t((()=>[l(z,{modelValue:q.model1.checkboxValue1,"onUpdate:modelValue":$[4]||($[4]=e=>q.model1.checkboxValue1=e),shape:"square",onChange:F.change},{default:t((()=>[(o(!0),i(n,null,d(q.checkboxList1,((e,t)=>(o(),a(O,{customStyle:{marginRight:"16px"},key:t,label:e.name,name:e.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1},512),l(K,{label:"简介",prop:"intro",borderBottom:"",ref:"item3"},{default:t((()=>[l(A,{placeholder:"不低于3个字",modelValue:q.model1.intro,"onUpdate:modelValue":$[5]||($[5]=e=>q.model1.intro=e),count:""},null,8,["modelValue"])])),_:1},512),l(K,{label:"住店时间",prop:"hotel",labelWidth:"80",borderBottom:"",onClick:$[7]||($[7]=e=>{q.showCalendar=!0,F.hideKeyboard()})},{default:t((()=>[l(T,{modelValue:q.model1.hotel,"onUpdate:modelValue":$[6]||($[6]=e=>q.model1.hotel=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择住店和离店时间",border:"none"},null,8,["modelValue"]),l(R,{slot:"right",name:"arrow-right"})])),_:1}),l(K,{label:"验证码",prop:"code",labelWidth:"80",borderBottom:""},{default:t((()=>[l(T,{modelValue:q.model1.code,"onUpdate:modelValue":$[8]||($[8]=e=>q.model1.code=e),border:"none",placeholder:"请填写验证码"},null,8,["modelValue"]),l(E,{slot:"right",onClick:F.getCode,text:q.tips,type:"success",size:"mini",disabled:q.disabled1},null,8,["onClick","text","disabled"])])),_:1}),l(K,{label:"生日",prop:"userInfo.birthday",borderBottom:"",onClick:$[10]||($[10]=e=>{q.showBirthday=!0,F.hideKeyboard()}),ref:"item1"},{default:t((()=>[l(T,{modelValue:q.model1.userInfo.birthday,"onUpdate:modelValue":$[9]||($[9]=e=>q.model1.userInfo.birthday=e),disabled:"",disabledColor:"#ffffff",placeholder:"请选择生日",border:"none"},null,8,["modelValue"]),l(R,{slot:"right",name:"arrow-right"})])),_:1},512)])),_:1},8,["model"]),l(E,{type:"primary",text:"提交",customStyle:"margin-top: 50px",onClick:F.submit},null,8,["onClick"]),l(E,{type:"error",text:"重置",customStyle:"margin-top: 10px",onClick:F.reset},null,8,["onClick"]),l(H,{show:q.showSex,actions:q.actions,title:"请选择性别",description:"如果选择保密会报错",onClose:$[11]||($[11]=e=>q.showSex=!1),onSelect:F.sexSelect},null,8,["show","actions","onSelect"]),l(M,{show:q.showCalendar,mode:"range",onConfirm:F.calendarConfirm,onClose:F.calendarClose,startText:"住店",endText:"离店",confirmDisabledText:"请选择离店日期",formatter:F.formatter},null,8,["show","onConfirm","onClose","formatter"]),l(N,{ref:"uCode",onChange:F.codeChange,seconds:"20",onStart:$[12]||($[12]=e=>q.disabled1=!0),onEnd:$[13]||($[13]=e=>q.disabled1=!1)},null,8,["onChange"]),l(P,{show:q.showBirthday,value:q.birthday,mode:"date",closeOnClickOverlay:"",onConfirm:F.birthdayConfirm,onCancel:F.birthdayClose,onClose:F.birthdayClose},null,8,["show","value","onConfirm","onCancel","onClose"])])),_:1})])),_:1})])),_:1})}]]);export{$ as default};
