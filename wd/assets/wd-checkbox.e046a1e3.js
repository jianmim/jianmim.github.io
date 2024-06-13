import{g as e,l as s,i as l,m as a,h as o,t,c,b as u}from"./page-wraper.5690414d.js";import{d as r,q as d,v as i,Q as n,h as p,j as h,o as m,c as b,w as x,u as f,n as k,y as V,a as g,p as y,x as $,i as _,J as S}from"./index-dce73128.js";const v=Symbol("wd-checkbox-group"),C={...e,modelValue:{type:Array,default:()=>[]},cell:s(!1),shape:l("circle"),checkedColor:String,disabled:s(!1),min:a(0),max:a(0),inline:s(!1),size:String},w=u(r({name:"wd-checkbox",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,customLabelClass:l(""),customShapeClass:l(""),modelValue:{type:[String,Number,Boolean],required:!0,default:!1},shape:l("circle"),checkedColor:String,disabled:{type:[Boolean,null],default:null},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},size:String,maxWidth:String},emits:["change","update:modelValue"],setup(e,{expose:s,emit:l}){const a=e;s({toggle:O});const{parent:u,index:r}=o(v),C=d((()=>u?u.props.modelValue.indexOf(a.modelValue)>-1:a.modelValue===a.trueValue)),w=d((()=>0===r.value)),z=d((()=>{const e=t(u)?u.children:[];return r.value===e.length-1})),{proxy:q}=S();i((()=>a.modelValue),(()=>{u&&u&&u.children&&u.children.forEach((e=>{e.$.uid!==q.$.uid&&e.modelValue===a.modelValue&&console.error(`The checkbox's bound value: ${a.modelValue} has been used`)}))})),i((()=>a.shape),(e=>{const s=["circle","square","button"];-1===s.indexOf(e)&&console.error(`shape must be one of ${s.toString()}`)}));const B=d((()=>!a.shape&&u&&u.props.shape?u.props.shape:a.shape)),j=d((()=>!a.checkedColor&&u&&u.props.checkedColor?u.props.checkedColor:a.checkedColor)),N=d((()=>{let e=a.disabled;return u&&(u.props.max&&u.props.modelValue.length>=u.props.max&&!C.value||u.props.min&&u.props.modelValue.length<=u.props.min&&C.value||!0===a.disabled||u.props.disabled&&null===a.disabled)&&(e=!0),e})),W=d((()=>!(!u||!u.props.inline)&&u.props.inline)),I=d((()=>!(!u||!u.props.cell)&&u.props.cell)),L=d((()=>!a.size&&u&&u.props.size?u.props.size:a.size));function O(){if(!N.value)if(u)l("change",{value:!C.value}),u.changeSelectState(a.modelValue);else{const e=a.modelValue===a.trueValue?a.falseValue:a.trueValue;l("update:modelValue",e),l("change",{value:e})}}return n((()=>{null===a.modelValue&&console.error("checkbox's value must be set")})),(e,s)=>{const l=p(h("wd-icon"),c),a=_;return m(),b(a,{class:k(`wd-checkbox ${f(I)?"is-cell-box":""} ${"button"===f(B)?"is-button-box":""} ${f(C)?"is-checked":""} ${f(w)?"is-first-child":""} ${f(z)?"is-last-child":""} ${f(W)?"is-inline":""} ${"button"===f(B)?"is-button":""} ${f(N)?"is-disabled":""} ${f(L)?"is-"+f(L):""} ${e.customClass}`),style:V(e.customStyle),onClick:O},{default:x((()=>["button"!==f(B)?(m(),b(a,{key:0,class:k(`wd-checkbox__shape ${"square"===f(B)?"is-square":""} ${e.customShapeClass}`),style:V(f(C)&&!f(N)&&f(j)?"color :"+f(j):"")},{default:x((()=>[g(l,{"custom-class":"wd-checkbox__check",name:"check-bold",size:"14px"})])),_:1},8,["class","style"])):y("",!0),g(a,{class:k(`wd-checkbox__label ${e.customLabelClass}`),style:V(f(C)&&"button"===f(B)&&!f(N)&&f(j)?"color:"+f(j):"")},{default:x((()=>["button"===f(B)&&f(C)?(m(),b(l,{key:0,"custom-class":"wd-checkbox__btn-check",name:"check-bold",size:"14px"})):y("",!0),g(a,{class:"wd-checkbox__txt",style:V(e.maxWidth?"max-width:"+e.maxWidth:"")},{default:x((()=>[$(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6ff7c175"]]);export{v as C,w as _,C as c};
