import{d as e,v as s,o as a,c as o,w as t,x as n,n as l,y as r,i as c}from"./index-dce73128.js";import{R as u,q as i,b as m}from"./page-wraper.5690414d.js";import{u as d}from"./useChildren.8ed137fc.js";import{c as p,C as h}from"./wd-checkbox.e046a1e3.js";const b=m(e({name:"wd-checkbox-group",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:p,emits:["change","update:modelValue"],setup(e,{emit:m}){const p=e,{linkChildren:b}=d(h);return b({props:p,changeSelectState:function(e){const s=u(p.modelValue),a=s.indexOf(e);a>-1?s.splice(a,1):s.push(e);m("update:modelValue",s),m("change",{value:s})}}),s((()=>p.modelValue),(e=>{new Set(e).size!==e.length&&console.error("checkboxGroup's bound value includes same value"),e.length<p.min&&console.error("checkboxGroup's bound value's length can't be less than min"),0!==p.max&&e.length>p.max&&console.error("checkboxGroup's bound value's length can't be large than max")}),{deep:!0,immediate:!0}),s((()=>p.shape),(e=>{const s=["circle","square","button"];-1===s.indexOf(e)&&console.error(`shape must be one of ${s.toString()}`)}),{deep:!0,immediate:!0}),s((()=>p.min),(e=>{i(e,"min")}),{deep:!0,immediate:!0}),s((()=>p.max),(e=>{i(e,"max")}),{deep:!0,immediate:!0}),(e,s)=>{const u=c;return a(),o(u,{class:l(`wd-checkbox-group ${"button"===e.shape&&e.cell?"is-button":""} ${e.customClass}`),style:r(e.customStyle)},{default:t((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6bf84ba4"]]);export{b as _};