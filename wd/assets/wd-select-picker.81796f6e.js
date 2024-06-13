import{d as e,r as l,q as a,v as o,Q as s,h as t,j as r,o as i,c,w as d,a as u,x as n,n as p,u as m,y as f,e as v,F as b,b as y,t as h,p as k,f as _,a5 as g,i as w,g as x,a3 as C,J as V}from"./index-dce73128.js";import{g as $,i as K,l as S,m as z,x as j,K as F,M as I,r as M,h as O,c as q,o as B,C as T,N as A,t as P,H as L,z as U,b as W}from"./page-wraper.5690414d.js";import{_ as D}from"./wd-search.8048eb56.js";import{_ as N}from"./wd-checkbox.e046a1e3.js";import{_ as R}from"./wd-checkbox-group.4289d39a.js";import{_ as E,a as H}from"./wd-radio-group.6152e9d7.js";import{_ as J}from"./wd-button.840eab05.js";import{_ as G}from"./wd-action-sheet.cefcbdec.js";import{u as Q}from"./useTranslate.0a311b40.js";const X=W(e({name:"wd-select-picker",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...$,label:String,labelWidth:K("33%"),disabled:S(!1),readonly:Boolean,placeholder:String,title:String,alignRight:S(!1),error:S(!1),required:S(!1),useLabelSlot:S(!1),useDefaultSlot:S(!1),size:String,checkedColor:String,min:z(0),max:z(0),selectSize:String,loading:S(!1),loadingColor:K("#4D80F0"),closeOnClickModal:S(!0),modelValue:j([String,Number,Boolean,Array]),columns:F(),type:K("checkbox"),valueKey:K("value"),labelKey:K("label"),confirmButtonText:String,displayFormat:Function,beforeConfirm:Function,zIndex:z(15),safeAreaInsetBottom:S(!0),filterable:S(!1),filterPlaceholder:String,ellipsis:S(!1),scrollIntoView:S(!0),prop:String,rules:F(),customContentClass:K(""),customLabelClass:K(""),customValueClass:K(""),showConfirm:S(!0)},emits:["change","cancel","confirm","update:modelValue"],setup(e,{expose:$,emit:K}){const S=e,{translate:z}=Q("select-picker"),j=l(!1),F=l([]),W=l(!1),X=l([]),Y=l(""),Z=l([]),ee=l(0),le=I(),ae=a((()=>{const e=de(S.modelValue);let l="";if(S.displayFormat)l=S.displayFormat(e,S.columns);else{const{type:a,labelKey:o}=S;if("checkbox"===a){l=(M(e)?e:[]).map((e=>ce(e))).map((e=>e[o])).join(", ")}else if("radio"===a){l=ce(e)[o]}else l=e}return l}));o((()=>S.modelValue),(e=>{e!==F.value&&(F.value=de(e),X.value=de(e))}),{deep:!0,immediate:!0}),o((()=>S.columns),(e=>{S.filterable&&Y.value?ye(e,Y.value):Z.value=e}),{deep:!0,immediate:!0}),o((()=>S.displayFormat),(e=>{e&&!T(e)&&console.error("The type of displayFormat must be Function")}),{deep:!0,immediate:!0}),o((()=>S.beforeConfirm),(e=>{e&&!T(e)&&console.error("The type of beforeConfirm must be Function")}),{deep:!0,immediate:!0});const{parent:oe}=O(A),se=a((()=>oe&&S.prop&&oe.errorMessages&&oe.errorMessages[S.prop]?oe.errorMessages[S.prop]:"")),te=a((()=>{let e=!1;if(oe&&oe.props.rules){const l=oe.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===S.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return S.required||S.rules.some((e=>e.required))||e}));s((()=>{F.value=de(S.modelValue),Z.value=S.columns}));const{proxy:re}=V();function ie(){}function ce(e){const{valueKey:l,labelKey:a,columns:o}=S,s=o.filter((a=>a[l]===e));return s.length>0?s[0]:{[l]:e,[a]:""}}function de(e){return"checkbox"===S.type?M(e)?e:[]:e}function ue({value:e}){F.value=e,K("change",{value:e}),"radio"!==S.type||S.showConfirm||me()}function ne(){j.value=!1,W.value||(F.value=de(X.value)),K("cancel")}function pe(){S.disabled||S.readonly||(F.value=de(S.modelValue),j.value=!0,W.value=!1)}function me(){if(S.loading)return j.value=!1,void K("confirm");S.beforeConfirm?S.beforeConfirm(F.value,(e=>{e&&fe()})):fe()}function fe(){W.value=!0,j.value=!1,X.value=de(F.value);let e={};e="checkbox"===S.type?(M(X.value)?X.value:[]).map((e=>ce(e))):ce(X.value),K("update:modelValue",X.value),K("confirm",{value:X.value,selectedItems:e})}function ve(e,l){const a=new RegExp(`(${l})`,"g");return e.split(a).map((e=>({type:e===l?"active":"normal",label:e})))}function be({value:e}){""===e?(Z.value=[],Y.value=e,g((()=>{Z.value=S.columns}))):(Y.value=e,ye(S.columns,e))}function ye(e,l){const a=e.filter((e=>e[S.labelKey].indexOf(l)>-1)).map((e=>({...e,[S.labelKey]:ve(e[S.labelKey],l)})));Z.value=[],g((()=>{Z.value=a}))}const he=a((()=>"radio"===S.type&&S.showConfirm||"checkbox"===S.type));return $({close:ne,open:pe}),(e,l)=>{const a=w,o=t(r("wd-icon"),q),s=t(r("wd-search"),D),V=x,$=t(r("wd-checkbox"),N),K=t(r("wd-checkbox-group"),R),S=t(r("wd-radio"),E),I=t(r("wd-radio-group"),H),O=t(r("wd-loading"),B),T=C,A=t(r("wd-button"),J),W=t(r("wd-action-sheet"),G);return i(),c(a,{class:p(`wd-select-picker ${m(le).border.value?"is-border":""} ${e.customClass}`),style:f(e.customStyle)},{default:d((()=>[u(a,{class:"wd-select-picker__field",onClick:pe},{default:d((()=>[e.useDefaultSlot?n(e.$slots,"default",{key:0},void 0,!0):(i(),c(a,{key:1,class:p(`wd-select-picker__cell ${e.disabled&&"is-disabled"} ${e.readonly&&"is-readonly"} ${e.alignRight&&"is-align-right"} ${e.error&&"is-error"} ${e.size&&"is-"+e.size}`)},{default:d((()=>[e.label||e.useLabelSlot?(i(),c(a,{key:0,class:p(`wd-select-picker__label ${m(te)&&"is-required"} ${e.customLabelClass}`),style:f(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:d((()=>[e.label?(i(),v(b,{key:0},[y(h(e.label),1)],64)):n(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):k("",!0),u(a,{class:"wd-select-picker__body"},{default:d((()=>[u(a,{class:"wd-select-picker__value-wraper"},{default:d((()=>[u(a,{class:p(`wd-select-picker__value ${e.ellipsis&&"is-ellipsis"} ${e.customValueClass} ${m(ae)?"":"wd-select-picker__value--placeholder"}`)},{default:d((()=>[y(h(m(ae)||e.placeholder||m(z)("placeholder")),1)])),_:1},8,["class"]),e.disabled||e.readonly?k("",!0):(i(),c(o,{key:0,"custom-class":"wd-select-picker__arrow",name:"arrow-right"}))])),_:1}),m(se)?(i(),c(a,{key:0,class:"wd-select-picker__error-message"},{default:d((()=>[y(h(m(se)),1)])),_:1})):k("",!0)])),_:1})])),_:3},8,["class"]))])),_:3}),u(W,{modelValue:j.value,"onUpdate:modelValue":l[3]||(l[3]=e=>j.value=e),duration:250,title:e.title||m(z)("title"),"close-on-click-modal":e.closeOnClickModal,"z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,onClose:ne,onOpened:l[4]||(l[4]=l=>e.scrollIntoView?function(){let e="",l=[];P(F.value)&&""!==F.value&&!M(F.value)?(e="#wd-radio-group",l=[L(`#radio${F.value}`,!1,re)]):M(F.value)&&F.value.length>0&&(F.value.forEach((e=>{l.push(L(`#check${e}`,!1,re))})),e="#wd-checkbox-group"),e&&U().then((()=>{U().then((()=>{Promise.all([L(".wd-select-picker__wrapper",!1,re),L(e,!1,re),...l]).then((e=>{if(P(e)&&M(e)){const l=e[0],a=e[1],o=e.slice(2)||[];P(a)&&P(l)&&o.findIndex((e=>e.top>=l.top&&e.bottom<=l.bottom))<0&&(ee.value=-1,g((()=>{ee.value=Math.max(0,o[0].top-a.top-l.height/2)})))}})).catch((e=>{console.log(e)}))}))}))}():""),"custom-header-class":"wd-select-picker__header"},{default:d((()=>[e.filterable?(i(),c(s,{key:0,modelValue:Y.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Y.value=e),placeholder:e.filterPlaceholder||m(z)("filterPlaceholder"),"hide-cancel":"","placeholder-left":"",onChange:be},null,8,["modelValue","placeholder"])):k("",!0),u(T,{class:p(`wd-select-picker__wrapper ${e.filterable?"is-filterable":""} ${e.loading?"is-loading":""} ${e.customContentClass}`),"scroll-y":!e.loading,"scroll-top":ee.value,"scroll-with-animation":!0},{default:d((()=>["checkbox"===e.type&&m(M)(F.value)?(i(),c(a,{key:0,id:"wd-checkbox-group"},{default:d((()=>[u(K,{modelValue:F.value,"onUpdate:modelValue":l[1]||(l[1]=e=>F.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,min:e.min,max:e.max,onChange:ue},{default:d((()=>[(i(!0),v(b,null,_(Z.value,(l=>(i(),c(a,{key:l[e.valueKey],id:"check"+l[e.valueKey]},{default:d((()=>[u($,{modelValue:l[e.valueKey],disabled:l.disabled},{default:d((()=>[e.filterable&&Y.value?(i(!0),v(b,{key:0},_(l[e.labelKey],(e=>(i(),v(b,{key:e.label},["active"===e.type?(i(),c(V,{key:0,class:"wd-select-picker__text-active"},{default:d((()=>[y(h(e.label),1)])),_:2},1024)):(i(),v(b,{key:1},[y(h(e.label),1)],64))],64)))),128)):(i(),v(b,{key:1},[y(h(l[e.labelKey]),1)],64))])),_:2},1032,["modelValue","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color","min","max"])])),_:1})):k("",!0),"radio"!==e.type||m(M)(F.value)?k("",!0):(i(),c(a,{key:1,id:"wd-radio-group"},{default:d((()=>[u(I,{modelValue:F.value,"onUpdate:modelValue":l[2]||(l[2]=e=>F.value=e),cell:"",size:e.selectSize,"checked-color":e.checkedColor,onChange:ue},{default:d((()=>[(i(!0),v(b,null,_(Z.value,((l,o)=>(i(),c(a,{key:o,id:"radio"+l[e.valueKey]},{default:d((()=>[u(S,{value:l[e.valueKey],disabled:l.disabled},{default:d((()=>[e.filterable&&Y.value?(i(!0),v(b,{key:0},_(l[e.labelKey],(e=>(i(),c(V,{key:e.label,clsss:""+("active"===e.type?"wd-select-picker__text-active":"")},{default:d((()=>[y(h(e.label),1)])),_:2},1032,["clsss"])))),128)):(i(),v(b,{key:1},[y(h(l[e.labelKey]),1)],64))])),_:2},1032,["value","disabled"])])),_:2},1032,["id"])))),128))])),_:1},8,["modelValue","size","checked-color"])])),_:1})),e.loading?(i(),c(a,{key:2,class:"wd-select-picker__loading",onTouchmove:ie},{default:d((()=>[u(O,{color:e.loadingColor},null,8,["color"])])),_:1})):k("",!0)])),_:1},8,["class","scroll-y","scroll-top"]),m(he)?(i(),c(a,{key:1,class:"wd-select-picker__footer"},{default:d((()=>[u(A,{block:"",size:"large",onClick:me,disabled:e.loading},{default:d((()=>[y(h(e.confirmButtonText||m(z)("confirm")),1)])),_:1},8,["disabled"])])),_:1})):k("",!0)])),_:1},8,["modelValue","title","close-on-click-modal","z-index","safe-area-inset-bottom"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-98761016"]]);export{X as _};