import{d as e,q as s,v as l,h as o,j as a,o as t,c as d,w as i,a as n,y as r,u as c,x as p,p as u,n as h,i as m}from"./index-dce73128.js";import{g as b,i as y,l as f,x as g,h as k,c as $,b as v}from"./page-wraper.5690414d.js";import{u as C}from"./useChildren.8ed137fc.js";const _=Symbol("wd-radio-group"),S={...b,modelValue:[String,Number,Boolean],shape:y("check"),checkedColor:String,disabled:f(!1),cell:f(!1),size:y(""),inline:f(!1)},w=v(e({name:"wd-radio",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...b,value:g([String,Number,Boolean]),shape:String,checkedColor:String,disabled:{type:[Boolean,null],default:null},cell:{type:[Boolean,null],default:null},size:String,inline:{type:[Boolean,null],default:null},maxWidth:String},setup(e){const b=e,{parent:y}=k(_),f=s((()=>!!y&&b.value===y.props.modelValue)),g=s((()=>!b.shape&&y&&y.props.shape?y.props.shape:b.shape)),v=s((()=>!b.checkedColor&&y&&y.props.checkedColor?y.props.checkedColor:b.checkedColor)),C=s((()=>(null===b.disabled||void 0===b.disabled)&&y&&y.props.disabled?y.props.disabled:b.disabled)),S=s((()=>(null===b.inline||void 0===b.inline)&&y&&y.props.inline?y.props.inline:b.inline)),w=s((()=>!b.size&&y&&y.props.size?y.props.size:b.size)),x=s((()=>(null===b.cell||void 0===b.cell)&&y&&y.props.cell?y.props.cell:b.cell));function z(){const{value:e}=b;!C.value&&y&&null!=e&&y.updateValue(e)}return l((()=>b.shape),(e=>{const s=["check","dot","button"];e&&-1!==s.indexOf(e)||console.error(`shape must be one of ${s.toString()}`)})),(e,s)=>{const l=m,b=o(a("wd-icon"),$);return t(),d(l,{class:h(`wd-radio ${c(x)?"is-cell-radio":""} ${c(x)&&"button"==c(g)?"is-button-radio":""} ${c(w)?"is-"+c(w):""} ${c(S)?"is-inline":""} ${c(f)?"is-checked":""} ${"check"!==c(g)?"is-"+c(g):""} ${c(C)?"is-disabled":""} ${e.customClass}`),style:r(e.customStyle),onClick:z},{default:i((()=>[n(l,{class:"wd-radio__label",style:r(`${e.maxWidth?"max-width:"+e.maxWidth:""};  ${c(f)&&"button"===c(g)&&!c(C)?"color :"+c(v):""}`)},{default:i((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),n(l,{class:"wd-radio__shape",style:r(c(f)&&!e.disabled?"color: "+c(v):"")},{default:i((()=>["check"===c(g)?(t(),d(b,{key:0,style:r(c(f)&&!e.disabled?"color: "+c(v):""),name:"check"},null,8,["style"])):u("",!0)])),_:1},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-c5b976fd"]]),x=v(e({name:"wd-radio-group",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:S,emits:["change","update:modelValue"],setup(e,{emit:s}){const o=e,{linkChildren:a,children:n}=C(_);return a({props:o,updateValue:function(e){s("update:modelValue",e),s("change",{value:e})}}),l((()=>o.shape),(e=>{const s=["check","dot","button"];-1===s.indexOf(e)&&console.error(`shape must be one of ${s.toString()}`)}),{deep:!0,immediate:!0}),(e,s)=>{const l=m;return t(),d(l,{class:h(`wd-radio-group  ${e.customClass} ${e.cell&&"button"===e.shape?"is-button":""}`),style:r(e.customStyle)},{default:i((()=>[p(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-dd67956c"]]);export{w as _,x as a};