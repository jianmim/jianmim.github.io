import{d as t,r as e,T as o,q as s,h as i,j as a,o as n,c as l,w as d,a as r,n as u,y as c,u as h,x as p,i as f,J as b,a4 as v,Q as y}from"./index-dce73128.js";import{_ as m}from"./wd-resize.5972a5f9.js";import{g,m as w,G as x,h as $,v as k,p as _,z as C,H as z,b as S}from"./page-wraper.5690414d.js";import{u as T}from"./useChildren.8ed137fc.js";const I={...g,zIndex:w(1),offsetTop:w(0)},L=Symbol("wd-sticky-box"),R=S(t({name:"wd-sticky",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:I,setup(t,{expose:y}){const g=t,w=e(`wd-sticky${x()}`),S=e([]),T=o({position:"absolute",boxLeaved:!1,top:0,height:0,width:0,state:""}),{parent:I}=$(L),{proxy:R}=b(),j=s((()=>{const t={"z-index":g.zIndex,height:k(T.height),width:k(T.width)};return T.boxLeaved||(t.position="relative"),`${_(t)};${g.customStyle}`})),N=s((()=>{const t={"z-index":g.zIndex,height:k(T.height),width:k(T.width)};return T.boxLeaved||(t.position="relative"),`${_(t)};`})),P=s((()=>{const t={position:T.position,top:k(T.top)};return _(t)})),F=s((()=>{let t=0;return t=44,44+g.offsetTop}));function G(t){T.width=t.width,T.height=t.height,C((()=>{!function(){if(0===T.height&&0===T.width)return;const t=F.value+T.height;(function(){for(;0!==S.value.length;)S.value.pop().disconnect()})(),function(){const t=v(R,{thresholds:[0,.5]});return S.value.push(t),t}().relativeToViewport({top:-t}).observe(`#${w.value}`,(t=>{M(t)})),z(`#${w.value}`,!1,R).then((e=>{e.bottom=Number(e.bottom)+44,Number(e.bottom)<=t&&M({boundingClientRect:e})}))}(),I&&I.observerForChild&&I.observerForChild(R)}))}function M({boundingClientRect:t}){if(I&&T.height>=I.boxStyle.height)return T.position="absolute",void(T.top=0);let e=t.top<=F.value;e=t.top<F.value,e?(T.state="sticky",T.boxLeaved=!1,T.position="fixed",T.top=F.value):(T.state="normal",T.boxLeaved=!1,T.position="absolute",T.top=0)}return y({setPosition:function(t,e,o){T.boxLeaved=t,T.position=e,T.top=o},stickyState:T,offsetTop:g.offsetTop}),(t,e)=>{const o=i(a("wd-resize"),m),s=f;return n(),l(s,{style:c(`${h(j)};display: inline-block;`)},{default:d((()=>[r(s,{class:u(`wd-sticky ${t.customClass}`),style:c(h(N)),id:w.value},{default:d((()=>[r(s,{class:"wd-sticky__container",style:c(h(P))},{default:d((()=>[r(o,{onResize:G,"custom-style":"display: inline-block;"},{default:d((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style","id"])])),_:3},8,["style"])}}}),[["__scopeId","data-v-dd4bc16a"]]),j=S(t({name:"wd-sticky-box",options:{addGlobalClass:!0,styleIsolation:"shared"},props:g,setup(t){const s=t,h=e(`wd-sticky-box${x()}`),g=e(new Map),w=o({height:0,width:0}),{proxy:$}=b(),{children:k,linkChildren:_}=T(L);function C(t){w.width=t.width,w.height=t.height;const e=g.value;g.value=new Map;for(const[o]of e){S(k.find((t=>t.$.uid===o)))}e.forEach((t=>{t.disconnect()})),e.clear()}function S(t){!function(t){const e=g.value.get(t.$.uid);e&&(e.disconnect(),g.value.delete(t.$.uid))}(t);const e=function(t){const e=v($,{thresholds:[0,.5]});return g.value.set(t.$.uid,e),e}(t),o=t.$.exposed;let s=o.stickyState.height+o.offsetTop;s+=44,w.height<=o.stickyState.height&&o.setPosition(!1,"absolute",0),e.relativeToViewport({top:-s}).observe(`#${h.value}`,(t=>{I(o,t)})),z(`#${h.value}`,!1,$).then((t=>{t.bottom=Number(t.bottom)+44,Number(t.bottom)<=s&&I(o,{boundingClientRect:t})})).catch((t=>{console.log(t)}))}function I(t,{boundingClientRect:e}){let o=t.offsetTop;o+=44;const s=t.stickyState.height+o;let i=e.bottom<=s;if(i=e.bottom<s,i)t.setPosition(!0,"absolute",e.height-t.stickyState.height);else if(e.top<=s&&!i){if("normal"===t.stickyState.state)return;t.setPosition(!1,"fixed",o)}}return _({boxStyle:w,observerForChild:S}),y((()=>{g.value=new Map})),(t,e)=>{const o=i(a("wd-resize"),m),b=f;return n(),l(b,{style:{position:"relative"}},{default:d((()=>[r(b,{class:u(`wd-sticky-box ${s.customClass}`),style:c(t.customStyle),id:h.value},{default:d((()=>[r(o,{onResize:C},{default:d((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","id"])])),_:3})}}}),[["__scopeId","data-v-4ff88ffa"]]);export{R as _,j as a};
