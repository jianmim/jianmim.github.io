import{_ as e}from"./wd-button.840eab05.js";import{d as t,r as a,o as l,c as o,w as n,a as s,b as u,h as i,j as c,i as d}from"./index-dce73128.js";import{_ as f}from"./demo-block.28b3373c.js";import{j as r,a as m,b as _}from"./page-wraper.5690414d.js";const v=_(t({__name:"Index",setup(t){const _=a(!1),v=a(""),k=a(!1);function p(){F("fade")}function w(){F("fade-up")}function C(){F("fade-down")}function b(){F("fade-left")}function h(){F("fade-right")}function j(){F("slide-up")}function g(){F("slide-down")}function x(){F("slide-left")}function z(){F("slide-right")}function I(){F("zoom-in")}function T(){k.value=!0,setTimeout((()=>{k.value=!1}),1200)}function F(e){v.value=e,_.value=!0,setTimeout((()=>{_.value=!1}),500)}return(t,a)=>{const F=i(c("wd-button"),e),S=i(c("demo-block"),f),Z=i(c("wd-transition"),r),q=i(c("page-wraper"),m),y=d;return l(),o(y,null,{default:n((()=>[s(q,null,{default:n((()=>[s(S,{title:"Fade 动画"},{default:n((()=>[s(F,{onClick:p},{default:n((()=>[u("fade")])),_:1}),s(F,{onClick:w},{default:n((()=>[u("fade-up")])),_:1}),s(F,{onClick:C},{default:n((()=>[u("fade-down")])),_:1}),s(F,{onClick:b},{default:n((()=>[u("fade-left")])),_:1}),s(F,{onClick:h},{default:n((()=>[u("fade-right")])),_:1})])),_:1}),s(S,{title:"Slide 动画"},{default:n((()=>[s(F,{onClick:j},{default:n((()=>[u("slide-up")])),_:1}),s(F,{onClick:g},{default:n((()=>[u("slide-down")])),_:1}),s(F,{onClick:x},{default:n((()=>[u("slide-left")])),_:1}),s(F,{onClick:z},{default:n((()=>[u("slide-right")])),_:1})])),_:1}),s(S,{title:"Zoom 动画"},{default:n((()=>[s(F,{onClick:I},{default:n((()=>[u("zoom-in")])),_:1})])),_:1}),s(S,{title:"自定义动画"},{default:n((()=>[s(F,{onClick:T},{default:n((()=>[u("custom")])),_:1})])),_:1}),s(Z,{show:_.value,name:v.value,"custom-class":"block"},null,8,["show","name"]),s(Z,{show:k.value,name:"",duration:{enter:700,leave:1e3},"enter-class":"custom-enter","enter-active-class":"custom-enter-active","enter-to-class":"custom-enter-to","leave-class":"custom-leave","leave-active-class":"custom-leave-active","leave-to-class":"custom-leave-to","custom-class":"block"},null,8,["show"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-a06b6b73"]]);export{v as default};