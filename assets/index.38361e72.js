import{ap as e,y as r}from"./index-80b03063.js";const n=n=>{let o=null;n||(n=r()),o=e().in(n);return{query:o,getSelectorNodeInfo:e=>new Promise(((r,n)=>{o?o.select(e).boundingClientRect((o=>{o?r(o):n(new Error(`未找到对应节点: ${e}`))})).exec():n(new Error("未找到对应的SelectorQuery实例"))})),getSelectorNodeInfos:e=>new Promise(((r,n)=>{o?o.selectAll(e).boundingClientRect((o=>{const t=o;t&&t.length>0?r(t):n(new Error(`未找到对应节点: ${e}`))})).exec():n(new Error("未找到对应的SelectorQuery实例"))}))}};export{n as u};
