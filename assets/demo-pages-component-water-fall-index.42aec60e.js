import{a,D as t,E as e,o as s,e as l,f as o,h as r,m as i,u as f,k as m,_ as n}from"./index-80b03063.js";import{T as d}from"./button.89b66e38.js";import{t as u}from"./index.b621671f.js";import{C as c}from"./custom-page.333ee63a.js";import{D as p}from"./demo-container.59d4003d.js";import{u as _}from"./index.e83e3f39.js";import"./loading.d4613e36.js";import"./debounce.73e35894.js";import"./title.e0fd12f0.js";const w=n(a({__name:"index",setup(a){t((()=>({}))),e((()=>({})));const{isDemoH5Page:n}=_(),w=()=>{u("/demo-pages/component/water-fall/normal-waterfall")},g=()=>{u("/demo-pages/component/water-fall/calc-waterfall")};return(a,t)=>{const e=m;return s(),l(c,{title:"瀑布流","is-h5-demo-page":f(n)},{default:o((()=>[r(p,{title:"普通模式瀑布流"},{default:o((()=>[r(e,{class:"water-fall-container"},{default:o((()=>[r(e,{class:"water-fall-item"},{default:o((()=>[r(e,{class:"tips"},{default:o((()=>[i(" 普通模式下的瀑布流是将数据通过简单的计算，将单数的数据放在左边，双数的数据放在右边 ")])),_:1}),r(e,{class:"nav-water-fall-button"},{default:o((()=>[r(d,{size:"lg",onClick:w},{default:o((()=>[i(" 普通瀑布流 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),r(p,{title:"计算模式瀑布流"},{default:o((()=>[r(e,{class:"water-fall-container"},{default:o((()=>[r(e,{class:"water-fall-item"},{default:o((()=>[r(e,{class:"tips"},{default:o((()=>[i(" 计算模式下的瀑布流是将数据一一填入待渲染的左右两个队列中，然后读取左右两列的高度，将下一个数据放到高度较小的一列中 ")])),_:1}),r(e,{class:"nav-water-fall-button"},{default:o((()=>[r(d,{size:"lg",onClick:g},{default:o((()=>[i(" 计算瀑布流 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["is-h5-demo-page"])}}}),[["__scopeId","data-v-1d2998ae"]]);export{w as default};