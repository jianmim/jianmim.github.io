import{b as e,a4 as a,c as l,r as o,w as t,X as s,aB as r,H as n,a as c,V as d,o as i,e as u,f as m,h as v,g as b,i as p,K as f,u as h,F as y,j as k,n as _,a2 as g,m as C,U as w,k as x,t as j,_ as L,D as V,E as B,v as T}from"./index-80b03063.js";import{T as E}from"./popup.cb51da11.js";import{Z as K,b as D,a as z}from"./index.b621671f.js";import{U as P,C as I}from"./event.5568c9d8.js";import{u as S}from"./index.a83b462a.js";import{T as U}from"./button.89b66e38.js";import{C as X}from"./custom-page.333ee63a.js";import{D as M}from"./demo-container.59d4003d.js";import{u as H}from"./index.e83e3f39.js";import"./overlay.66eb0f69.js";import"./install.171bae2e.js";import"./loading.d4613e36.js";import"./debounce.73e35894.js";import"./title.e0fd12f0.js";const A=e({modelValue:{type:String,default:""},show:{type:Boolean,default:!1},mode:{type:String,values:["number","digit","idcard","random","car"],default:"number"},carLang:{type:String,values:["cn","en"],default:"cn"},vibrate:{type:Boolean,default:!0},longPressDelete:{type:Boolean,default:!0},disabled:Boolean,overlayCloseable:{type:Boolean,default:!0},zIndex:{type:Number,default:K.popup}}),F=["京","沪","粤","津","冀","豫","云","辽","黑","湘","皖","鲁","苏","浙","赣","鄂","桂","甘","晋","陕","蒙","吉","闽","贵","渝","川","青","琼","宁","藏","港","澳","新","使","学","临","警"],J=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],N=["I","O"],O=L(c({__name:"keyboard",props:A,emits:{[P]:e=>a(e),"update:show":e=>D(e),"update:carLangMode":e=>"cn"===e||"en"===e,[I]:e=>a(e),close:()=>!0,backspace:()=>!0,confirm:()=>!0},setup(e,{emit:a}){const c=e,L=d("keyboard"),{showKeyboard:V,carKeyboardLang:B,popupCloseEvent:T,keyboardClickEvent:K,handleBackspaceEvent:D,clearBackspaceLongPressEvent:P,carKeyboardSwitchLang:I}=((e,a)=>{const l=o(!1);t((()=>e.show),(e=>{l.value=e}));const c=()=>{a("close"),a("update:show",!1)},d=o(e.modelValue||"");t((()=>e.modelValue),(e=>d.value=e));const{handleLongPressEvent:i,clearLongPressTimer:u}=S((()=>{""!==d.value?(e.vibrate&&r(),d.value=d.value.slice(0,-1),a("backspace"),a("update:modelValue",d.value),n((()=>{a("change",d.value)}))):u()}),s(e,"longPressDelete")),m=o(z(e.carLang,"cn"));let v=!1;return t((()=>e.carLang),(e=>{v?v=!1:m.value=e})),{showKeyboard:l,carKeyboardLang:m,popupCloseEvent:c,keyboardClickEvent:(l,o)=>{if(o)return;e.vibrate&&r();let t=!0;if("confirm"===l)return c(),void a("confirm");if("cancel"!==l){if("digit"===e.mode){if("."===l){if(d.value.includes("."))return;""===d.value&&(d.value="0.",t=!1)}if("0"===l&&"0"===d.value)return;"0"===d.value&&"."!==l&&(d.value=l,t=!1)}"idcard"===e.mode&&"X"===l&&d.value.includes("X")||(t&&(d.value+=l),a("update:modelValue",d.value),n((()=>{a("change",d.value)})))}else c()},handleBackspaceEvent:i,clearBackspaceLongPressEvent:u,carKeyboardSwitchLang:()=>{"cn"===m.value?m.value="en":m.value="cn",v=!0,a("update:carLangMode",m.value)}}})(c,a),{keyboardData:U,carKeyboardData:X}=((e,a)=>{const o=(a=!1,l=!1,o=!1)=>{const t=["1","2","3","4","5","6","7","8","9","0"];return a&&t.push("."),l&&t.push("X"),o&&t.sort((()=>Math.random()-.5)),t.map((a=>({value:a,disabled:e.disabled})))};return{keyboardData:l((()=>{let a=[];switch(e.mode){case"number":a=o();break;case"digit":a=o(!0);break;case"idcard":a=o(!1,!0);break;case"random":a=o(!1,!1,e.show)}return a})),carKeyboardData:l((()=>{const l=[],o=a=>a.map((a=>({value:a,disabled:N.includes(a)||e.disabled})));if("car"===e.mode)if("cn"===a.value){const e=o(F);l.push(e.slice(0,10),e.slice(10,20),e.slice(20,30),e.slice(30,37))}else{const e=o(J);l.push(e.slice(0,10),e.slice(10,20),e.slice(20,29),e.slice(29,36))}return l}))}})(c,B);return(e,a)=>{const l=x;return i(),u(E,{modelValue:h(V),"onUpdate:modelValue":a[3]||(a[3]=e=>w(V)?V.value=e:null),"open-direction":"bottom","bg-color":"transparent",radius:"",overlay:"","overlay-opacity":0,"overlay-closeable":e.overlayCloseable,"safe-area-inset-bottom":!1,"z-index":e.zIndex,onClose:h(T)},{default:m((()=>[v(l,{class:f(["tn-u-safe-area",[h(L).b(),h(L).e(e.mode)]])},{default:m((()=>[b(" 普通键盘 "),"car"!==e.mode?(i(),p(y,{key:0},[b(" 左边操作区域 "),v(l,{class:f(["left",h(L).e("normal-container")])},{default:m((()=>[(i(!0),p(y,null,k(h(U),((e,a)=>(i(),u(l,{key:a,class:f(["normal-item",[{full:10===h(U).length&&9===a,fill:11===h(U).length&&9===a,disabled:e.disabled}]]),"hover-class":e.disabled?"":"keyboard-btn-hover","hover-stay-time":150,onClick:_((a=>h(K)(e.value,e.disabled)),["stop"])},{default:m((()=>[C(j(e.value),1)])),_:2},1032,["class","hover-class","onClick"])))),128))])),_:1},8,["class"]),b(" 右边操作区域 "),v(l,{class:f(["right",h(L).e("normal-container")])},{default:m((()=>[v(l,{class:"normal-item delete","hover-class":"keyboard-btn-hover","hover-stay-time":150,onTouchstart:_(h(D),["stop","prevent"]),onTouchend:_(h(P),["stop","prevent"])},{default:m((()=>[v(g,{name:"backspace-fill"})])),_:1},8,["onTouchstart","onTouchend"]),v(l,{class:"normal-item confirm","hover-class":"keyboard-btn-hover","hover-stay-time":150,onClick:a[0]||(a[0]=_((e=>h(K)("confirm",!1)),["stop"]))},{default:m((()=>[C(" 确认 ")])),_:1})])),_:1},8,["class"])],64)):b("v-if",!0),b(" 汽车键盘 "),"car"===e.mode?(i(),p(y,{key:1},[b(" 顶部操作栏 "),v(l,{class:f([h(L).e("car-top-operation-bar")])},{default:m((()=>[v(l,{class:"operation-btn cancel",onClick:a[1]||(a[1]=_((e=>h(K)("cancel",!1)),["stop"]))},{default:m((()=>[C(" 取消 ")])),_:1}),v(l,{class:"operation-btn confirm",onClick:a[2]||(a[2]=_((e=>h(K)("confirm",!1)),["stop"]))},{default:m((()=>[C(" 确认 ")])),_:1})])),_:1},8,["class"]),v(l,{class:f([h(L).e("car-container")])},{default:m((()=>[b(" 行数据 "),(i(!0),p(y,null,k(h(X),((e,a)=>(i(),u(l,{key:a,class:"column-data"},{default:m((()=>[b(" 如果是最后一行，显示切换按钮 "),3===a?(i(),u(l,{key:0,class:"car-item switch-mode","hover-class":"keyboard-btn-hover","hover-stay-time":150,onClick:_(h(I),["stop"])},{default:m((()=>[C(j("cn"===h(B)?"ABC":"返回"),1)])),_:1},8,["onClick"])):b("v-if",!0),b(" 列数据 "),(i(!0),p(y,null,k(e,((e,a)=>(i(),u(l,{key:a,class:f(["car-item",[{disabled:e.disabled}]]),"hover-class":e.disabled?"":"keyboard-btn-hover","hover-stay-time":150,onClick:_((a=>h(K)(e.value,e.disabled)),["stop"])},{default:m((()=>[C(j(e.value),1)])),_:2},1032,["class","hover-class","onClick"])))),128)),b(" 如果是最后一行，显示删除按钮 "),3===a?(i(),u(l,{key:1,class:"car-item delete","hover-class":"keyboard-btn-hover","hover-stay-time":150,onTouchstart:_(h(D),["stop","prevent"]),onTouchend:_(h(P),["stop","prevent"])},{default:m((()=>[v(g,{name:"backspace-fill"})])),_:1},8,["onTouchstart","onTouchend"])):b("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["class"])],64)):b("v-if",!0)])),_:1},8,["class"])])),_:1},8,["modelValue","overlay-closeable","z-index","onClose"])}}}),[["__scopeId","data-v-a6a1fa04"]]),Q=L(c({__name:"index",setup(e){V((()=>({}))),B((()=>({})));const{isDemoH5Page:a}=H(),l=o(!1),t=o("number"),s=o(""),r=()=>{s.value=""},n=()=>{t.value="number",l.value=!0},c=()=>{t.value="digit",l.value=!0},d=()=>{t.value="random",l.value=!0},u=()=>{t.value="idcard",l.value=!0},b=()=>{t.value="car",l.value=!0};return(e,o)=>{const f=T,k=x;return i(),p(y,null,[v(X,{title:"软键盘","is-h5-demo-page":h(a)},{default:m((()=>[v(M,{title:"键盘输入的值"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[C(" 键盘输入的值: "),v(f,{class:"tn-gray_text"},{default:m((()=>[C(j(s.value),1)])),_:1})])),_:1})])),_:1})])),_:1}),v(M,{title:"打开数字键盘"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[v(U,{size:"lg","bg-color":"gradient-bg__cool-6","text-color":"tn-white",onClick:n},{default:m((()=>[C(" 打开数字键盘 ")])),_:1})])),_:1})])),_:1})])),_:1}),v(M,{title:"打开带小数点数字键盘"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[v(U,{size:"lg","bg-color":"gradient-bg__cool-6","text-color":"tn-white",onClick:c},{default:m((()=>[C(" 打开带小数点数字键盘 ")])),_:1})])),_:1})])),_:1})])),_:1}),v(M,{title:"打开随机数字键盘"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[v(U,{size:"lg","bg-color":"gradient-bg__cool-6","text-color":"tn-white",onClick:d},{default:m((()=>[C(" 打开随机位置键盘 ")])),_:1})])),_:1})])),_:1})])),_:1}),v(M,{title:"打开身份证键盘"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[v(U,{size:"lg","bg-color":"gradient-bg__cool-6","text-color":"tn-white",onClick:u},{default:m((()=>[C(" 打开身份证键盘 ")])),_:1})])),_:1})])),_:1})])),_:1}),v(M,{title:"打开车牌键盘"},{default:m((()=>[v(k,{class:"keyboard-container"},{default:m((()=>[v(k,{class:"keyboard-item"},{default:m((()=>[v(U,{size:"lg","bg-color":"gradient-bg__cool-6","text-color":"tn-white",onClick:b},{default:m((()=>[C(" 打开车牌键盘 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"]),v(O,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),show:l.value,"onUpdate:show":o[1]||(o[1]=e=>l.value=e),mode:t.value,onClose:r},null,8,["modelValue","show","mode"])],64)}}}),[["__scopeId","data-v-6962a5ef"]]);export{Q as default};
