import{d as s,T as e,v as a,o,c as r,w as t,x as p,n,y as l,i}from"./index-dce73128.js";import{Z as c,B as m,t as u,$ as f,R as d,N as h,b as g}from"./page-wraper.5690414d.js";import{u as y}from"./useChildren.8ed137fc.js";const v=g(s({name:"wd-form",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:c,setup(s,{expose:c}){const g=s,{children:v,linkChildren:b}=y(h);let w=e({});function C(s){s?w[s]="":Object.keys(w).forEach((s=>{w[s]=""}))}return b({props:g,errorMessages:w}),a((()=>g.model),(()=>{g.resetOnChange&&C()}),{immediate:!0,deep:!0}),c({validate:async function(s){const e=[];let a=!0;const o=[],r=function(){const s=d(g.rules);return v.forEach((e=>{u(e.prop)&&u(e.rules)&&e.rules.length&&(s[e.prop]?s[e.prop]=[...s[e.prop],...e.rules]:s[e.prop]=e.rules)})),s}(),t=s?{[s]:r[s]}:r;for(const p in t){const s=t[p],r=m(g.model,p);if(s&&s.length>0)for(const t of s){if(t.required&&(!u(r)||""===r)){e.push({prop:p,message:t.message}),a=!1;break}if(t.pattern&&!t.pattern.test(r)){e.push({prop:p,message:t.message}),a=!1;break}const{validator:s,...n}=t;if(s){const l=s(r,n);f(l)?o.push(l.then((s=>{"string"==typeof s?(e.push({prop:p,message:s}),a=!1):"boolean"!=typeof s||s||(e.push({prop:p,message:t.message}),a=!1)})).catch((s=>{e.push({prop:p,message:s||t.message}),a=!1}))):l||(e.push({prop:p,message:t.message}),a=!1)}}}return await Promise.all(o),e.forEach((s=>{var e;(e=s).message&&(w[e.prop]=e.message)})),a&&(s?C(s):C()),{valid:a,errors:e}},reset:function(){C()}}),(s,e)=>{const a=i;return o(),r(a,{class:n(`wd-form ${s.customClass}`),style:l(s.customStyle)},{default:t((()=>[p(s.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-523f1bf6"]]);export{v as _};
