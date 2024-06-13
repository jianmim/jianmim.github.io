import{i as e,a as t,b as o,h as a,w as n,c as l,d as s,r,e as i,u,f as c,g as d,j as p,s as v,t as g,k as m,o as h,l as y,m as b,n as f,p as S,q as C,v as x,x as _,y as w,z,F as I,A as $,B as k,C as B,D as T,E as N,G as A,H as j,I as P,J as O,K as F,L as E,M,N as V,O as W,P as q,Q as R}from"./index-Du4F44QM.js";function U(e){return null!=e&&"object"==typeof e}const D=Object.prototype.toString;function G(e){return"number"==typeof e||U(e)&&"[object Number]"==D.call(e)}const K=Symbol?Symbol.prototype:void 0;K&&K.toString;const L=/^\s+|\s+$/g,Q=/^0b[01]+$/i,J=/^0o[0-7]+$/i,H=/^[-+]0x[0-9a-f]+$/i;function Y(o){if("number"==typeof o)return o;if(e(o))return NaN;if(t(o)){const e="function"==typeof o.valueOf?o.valueOf():o;o=t(e)?`${e}`:e}if("string"!=typeof o)return 0===o?o:+o;o=o.replace(L,"");const a=Q.test(o);return a||J.test(o)?Number.parseInt(o.slice(2),a?2:8):H.test(o)?NaN:+o}function X(e,o,a){let n,l,s,r,i,u,c=0,d=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){const o=n,a=l;return n=l=void 0,c=t,r=e.apply(a,o),r}function m(e){return c=e,i=setTimeout(y,o),d?g(e):r}function h(e){const t=e-u;return void 0===u||t>=o||t<0||p&&e-c>=s}function y(){const e=Date.now();if(h(e))return b(e);i=setTimeout(y,function(e){const t=e-c,a=o-(e-u);return p?Math.max(a,s-t):a}(e))}function b(e){return i=void 0,v&&n?g(e):(n=l=void 0,r)}function f(){const e=Date.now(),t=h(e);if(n=arguments,l=this,u=e,t){if(void 0===i)return m(u);if(p)return i=setTimeout(y,o),g(u)}return void 0===i&&(i=setTimeout(y,o)),r}return o=Y(o)||0,t(a)&&(d=!!a.leading,p="maxWait"in a,s=p?Math.max(Y(a.maxWait)||0,o):s,v="trailing"in a?!!a.trailing:v),f.cancel=function(){void 0!==i&&clearTimeout(i),c=0,n=u=l=i=void 0},f.flush=function(){return void 0===i?r:b(Date.now())},f}const Z=e=>!e&&0!==e||o(e)&&0===e.length||t(e)&&!Object.keys(e).length,ee=(e,o)=>{if(!t(e)||t(l=e)&&l.__tnPropKey)return e;var l;const{values:s,required:r,default:i,type:u,validator:c}=e,d=s||c?t=>{let l=!1,r=[];if(s&&(r=Array.from(s),a(e,"default")&&r.push(i),l||(l=r.includes(t))),c&&(l||(l=c(t))),!l&&r.length>0){const e=[...new Set(r)].map((e=>JSON.stringify(e))).join(", ");n(`Invalid prop: validation failed${o?` for prop "${o}"`:""}. Expected one of [${e}], got value ${JSON.stringify(t)}.`)}return l}:void 0,p={type:u,required:!!r,validator:d,__tnPropKey:!0};return a(e,"default")&&(p.default=i),p},te=e=>function(e){const t={};if(null==e)return t;for(const o of e)t[o[0]]=o[1];return t}(Object.entries(e).map((([e,t])=>[e,ee(t,e)]))),oe=[String],ae=(e,t="rpx",o=!0)=>e?l(e)&&/(^calc)|(%|vw|vh|px|rpx|auto)$/.test(e)?e:`${e}${t}`:o?"":`0${t}`,ne=()=>Math.floor(1e4*Math.random()),le=te({title:String,subTitle:String,mode:{type:String,values:["normal","vLine","dot","hLine","subTitle","transparent"],default:"normal"},size:String,align:{type:String,values:["left","center","right"],default:"left"},color:String,assistColor:String}),se=(e,t,o,a,n)=>{let l=`${e}-${t}`;return o&&(l+=`-${o}`),a&&(l+=`__${a}`),n&&(l+=`--${n}`),l},re=Symbol("localContextKey"),ie=e=>{const t=(()=>{const e=s(re,r("tn"));return i((()=>u(e)||"tn"))})();return{namespace:t,b:(o="")=>se(t.value,e,o,"",""),e:o=>o?se(t.value,e,"",o,""):"",m:o=>o?se(t.value,e,"","",o):"",be:(o,a)=>o&&a?se(t.value,e,o,a,""):"",em:(o,a)=>o&&a?se(t.value,e,"",o,a):"",bm:(o,a)=>o&&a?se(t.value,e,o,"",a):"",bem:(o,a,n)=>o&&a&&n?se(t.value,e,o,a,n):"",is:(e,...t)=>{const o=!(t.length>=1)||t[0];return e&&o?`is-${e}`:""},cssVar:e=>{const o={};for(const a in e)e[a]&&(o[`--${t.value}-${a}`]=e[a]);return o},cssVarName:e=>`--${t.value}-${e}`,cssVarBlock:o=>{const a={};for(const n in o)o[n]&&(a[`--${t.value}-${e}-${n}`]=o[n]);return a},cssVarBlockName:o=>`--${t.value}-${e}-${o}`}},ue=(e,t="")=>{const o=r(""),a=r(""),n=/^(tn-|gradient)/,l=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{3})$|^rgb\(\d{1,3}(,\s?\d{1,3}){2}\)$|^rgba\(\d{1,3}(,\s?\d{1,3}){2},\s?0?\.?\d{1,}\)|transparent/i,s=e=>{if(o.value="",a.value="",void 0!==e){if(n.test(e)){if("bg"===t&&/.*gradient.*/.test(e)){const t=e.split("__")[1];return void(o.value=`tn-gradient-bg__${t}`)}o.value=`${e}_${t}`}l.test(e)&&(a.value=e)}};s(e.value),c((()=>e.value),(e=>{s(e)}));return[o,a,e=>{s(e)}]},ce=["","sm","lg","xl"],de=["","primary","success","warning","danger","info"],pe=20090,ve=20074,ge=e=>({sizeType:i((()=>e?ce.includes(e)?"inner":"custom":"none"))}),me=e=>{let t=null;e||(e=p()),t=d().in(e);return{query:t,getSelectorNodeInfo:e=>new Promise(((o,a)=>{t?t.select(e).boundingClientRect((t=>{t?o(t):a(new Error(`未找到对应节点: ${e}`))})).exec():a(new Error("未找到对应的SelectorQuery实例"))})),getSelectorNodeInfos:e=>new Promise(((o,a)=>{t?t.selectAll(e).boundingClientRect((t=>{const n=t;n&&n.length>0?o(n):a(new Error(`未找到对应节点: ${e}`))})).exec():a(new Error("未找到对应的SelectorQuery实例"))}))}};r(0);const he=(e,t)=>{const o=e.__vccOpts||e;for(const[a,n]of t)o[a]=n;return o},ye=he(m({__name:"title",props:le,emits:{click:()=>!0},setup(e,{emit:t}){const o=e,a=t,{ns:n,titleClass:l,titleStyle:s,assistColorClass:r,assistColorStyle:c}=(e=>{const t=ie("title"),[o,a]=ue(g(e,"color"),"text"),[n,l]=ue(g(e,"color"),"bg"),[s,r]=ue(g(e,"assistColor"),"text"),[u,c]=ue(g(e,"assistColor"),"bg"),{sizeType:d}=ge(e.size),p=i((()=>{const a=[t.e("title"),t.em("title",e.mode)];return"transparent"===e.mode?(a.push("tn-text-transparent"),n.value&&a.push(n.value)):o.value&&a.push(o.value),e.size&&"inner"===d.value&&a.push(t.em("title",e.size)),a.join(" ")})),v=i((()=>{const t={};return"transparent"===e.mode?n.value||(t.backgroundColor=l.value||"var(--tn-color-primary)"):o.value||(t.color=a.value||"var(--tn-text-color-primary)"),e.size&&"custom"===d.value&&(t.fontSize=ae(e.size)),e.align&&(t.textAlign=e.align),t})),m=i((()=>{const t=[];return"subTitle"===e.mode?s.value&&t.push(s.value):u.value&&t.push(u.value),t.join(" ")})),h=i((()=>{const t={};return"subTitle"===e.mode?s.value||(t.color=r.value||"var(--tn-color-primary-light-7)"):u.value||(t.backgroundColor=c.value||"var(--tn-color-primary)"),t}));return{ns:t,titleClass:p,titleStyle:v,assistColorClass:m,assistColorStyle:h}})(o),d=()=>{a("click")};return(e,t)=>{const o=B;return h(),y(o,{class:S([u(n).b()]),onClick:k(d,["stop"])},{default:b((()=>[f(o,{class:S(["tn-text-ellipsis-1",[u(l)]]),style:C(u(s))},{default:b((()=>[x(e.$slots,"default",{},(()=>[f(o,{class:"content tn-text-ellipsis-1"},{default:b((()=>[_(w(e.title),1)])),_:1})]),!0),"normal"!==e.mode&&"transparent"!==e.mode?(h(),y(o,{key:0,class:S([u(n).e(e.mode),u(r)]),style:C(u(c))},{default:b((()=>["subTitle"===e.mode&&e.subTitle?(h(),z(I,{key:0},[_(w(e.subTitle),1)],64)):$("",!0)])),_:1},8,["class","style"])):$("",!0)])),_:3},8,["class","style"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-92f382ba"]]);function be(e,t){return"string"==typeof e?t:e}ee({type:[Boolean,void 0],default:void 0});const fe=ee({type:String,values:ce,required:!1});ee({type:String,values:["","sm","lg"],required:!1});const Se=ee({type:Object,default:()=>({})}),Ce=ee({type:[String,Number],default:()=>ne()});ee({type:Boolean,default:!0});const xe=te({name:{type:oe,required:!0},type:{type:String,values:de,default:""},color:String,size:{type:[String,Number]},bold:Boolean,transparent:Boolean,transparentBg:String,imgMode:{type:String,values:["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","top left","top right","bottom left","bottom right"],default:"aspectFill"},offsetTop:{type:[String,Number]},customStyle:Se,customClass:String}),_e=he(m({__name:"icon",props:xe,emits:{click:()=>!0},setup(e,{emit:t}){const o=e,a=t,{isImg:n,iconClass:l,iconStyle:s}=(e=>{const t=ie("icon"),[o,a,n]=ue(g(e,"color"),"text"),[l]=ue(g(e,"transparentBg"),"bg"),{sizeType:s}=ge(e.size),r=i((()=>!!(null==e?void 0:e.name)&&e.name.includes("/"))),u=i((()=>{const a=[];return a.push(t.b()),r.value?a.push(t.m("image")):(e.type&&a.push(`tn-type-${e.type}_text`),e.transparent?a.push("tn-text-transparent",l.value):o.value&&a.push(o.value),e.bold&&a.push("tn-text-bold")),"inner"===s.value&&a.push(t.m(e.size)),e.customClass&&a.push(e.customClass),a.join(" ")})),c=i((()=>{const t={};return r.value?"custom"===s.value&&e.size&&(t.width=t.height=ae(e.size)):(a.value&&(t.color=a.value),"custom"===s.value&&e.size&&(t.fontSize=ae(e.size))),e.offsetTop&&(t.transform=`translateY(${ae(e.offsetTop)})`),Z(e.customStyle)||Object.assign(t,e.customStyle),t}));return{isImg:r,iconClass:u,iconStyle:c,updateColor:n}})(o),r=()=>{a("click")};return(e,t)=>{const o=T,a=N,i=B;return h(),y(i,{class:S([u(l)]),style:C(u(s)),onClick:r},{default:b((()=>[u(n)?(h(),y(o,{key:0,class:"image",src:e.name,mode:e.imgMode},null,8,["src","mode"])):(h(),y(a,{key:1,class:S(["icon",`tn-icon-${e.name}`])},null,8,["class"]))])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-9333daaa"]]),we=te({show:Boolean,animation:Boolean,mode:{type:String,values:["semicircle","circle","flower"],default:"circle"},type:{type:String,values:de,default:"primary"},color:String,size:{type:[String,Number]},duration:{type:[String,Number]},timeFunction:String}),ze=he(m({__name:"loading",props:we,setup(e){const t=e,{ns:o,loadingClass:a,loadingStyle:n,loadingContentClass:l,loadingContentStyle:s}=(e=>{const t=ie("loading"),[o,a,n]=ue(g(e,"color"),"bg"),{sizeType:l}=ge(e.size),s=i((()=>{const o=[];return o.push(t.b()),e.size&&"inner"===l.value&&o.push(t.m(e.size)),o.join(" ")})),r=i((()=>{const t={};return e.size&&"custom"===l.value&&(t.width=t.height=ae(e.size)),t})),u=i((()=>{const o=[];return o.push(t.b()),e.animation&&o.push(t.m("animation")),o.join(" ")})),c=i((()=>{const t={};if(e.type&&(t["--loading-color"]=`var(--tn-color-${e.type})`),e.color&&o.value){const o=e.color.replace("tn-","");t["--loading-color"]=`var(--tn-color-${o})`}return a.value&&(t["--loading-color"]=a.value),e.duration&&(t.animationDuration=`${e.duration}s`),"circle"!==e.mode&&"semicircle"!==e.mode||e.timeFunction&&(t.animationTimingFunction=e.timeFunction),t}));return{ns:t,loadingClass:s,loadingStyle:r,loadingContentClass:u,loadingContentStyle:c,updateColor:n}})(t);return(e,t)=>{const r=B;return e.show?(h(),y(r,{key:0,class:S([u(a)]),style:C(u(n))},{default:b((()=>["semicircle"===e.mode?(h(),y(r,{key:0,class:S([u(o).e("semicircle")])},null,8,["class"])):$("",!0),"circle"===e.mode||"semicircle"===e.mode?(h(),y(r,{key:1,class:S([u(o).e("circle"),u(l)]),style:C(u(s))},null,8,["class","style"])):$("",!0),"flower"===e.mode?(h(),y(r,{key:2,class:S([u(o).e("flower"),u(l)]),style:C(u(s))},{default:b((()=>[(h(),z(I,null,A(12,(e=>f(r,{key:e,class:S([u(o).em("flower","item")])},null,8,["class"]))),64))])),_:1},8,["class","style"])):$("",!0)])),_:1},8,["class","style"])):$("",!0)}}}),[["__scopeId","data-v-a5040b8b"]]),Ie=te({width:{type:[String,Number]},height:{type:[String,Number]},size:fe,shape:{type:String,values:["","circle","round"],default:""},type:{type:String,values:de,default:"primary"},icon:{type:oe},bold:Boolean,fontSize:{type:[String,Number]},bgColor:String,textColor:String,text:Boolean,plain:Boolean,borderColor:String,borderBold:Boolean,shadow:Boolean,shadowColor:String,hoverClass:{type:String,default:"tn-u-btn-hover"},customStyle:Se,customClass:String,disabled:Boolean,onlyButton:Boolean,loading:Boolean,debounce:{type:Boolean,default:!1},formType:{type:String,values:["submit","reset"]},openType:{type:String,values:["feedback","share","contact","getPhoneNumber","launchApp","openSetting","getUserInfo","chooseAvatar","agreePrivacyAuthorization"]},appParameter:{type:String,default:""},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1}}),$e=he(m({__name:"button",props:Ie,emits:{click:()=>!0,getphonenumber:e=>!0,error:e=>!0,opensetting:e=>!0,launchapp:e=>!0,getuserinfo:e=>!0,chooseavatar:e=>!0,agreeprivacyauthorization:e=>!0},setup(e,{emit:t}){const o=e,a=t,{buttonClick:n,getPhoneNumber:l,openSetting:s,launchApp:r,getUserInfo:c,chooseAvatar:d,agreePrivacyAuthorization:p,openTypeError:v}=((e,t)=>{const o=()=>{e.disabled||e.loading||t("click")};return{buttonClick:e.debounce?X(o,250):o,getPhoneNumber:e=>{t("getphonenumber",e)},openSetting:e=>{t("opensetting",e)},launchApp:e=>{t("launchapp",e)},getUserInfo:e=>{t("getuserinfo",e)},chooseAvatar:e=>{t("chooseavatar",e)},agreePrivacyAuthorization:e=>{t("agreeprivacyauthorization",e)},openTypeError:e=>{t("error",e)}}})(o,a),{ns:m,buttonClass:_,buttonStyle:w}=(e=>{const t=ie("button"),[o,a]=ue(g(e,"bgColor"),"bg"),[n,l]=ue(g(e,"textColor"),"text"),[s,r]=ue(g(e,"borderColor"),"border"),[u,c]=ue(g(e,"shadowColor"),"shadow"),d=i((()=>{const a=[t.b()];return e.onlyButton?(a.push(t.m("only-button")),a.join(" ")):(e.text&&a.push(t.m("text")),e.plain&&(a.push(t.m("plain")),e.borderBold&&a.push(t.m("plain-bold"))),e.type&&(e.text?e.textColor||a.push(`tn-type-${e.type}_text`):e.plain?e.borderColor||a.push(`tn-type-${e.type}_border`):e.bgColor||a.push(`tn-type-${e.type}_bg`)),e.size&&a.push(t.m(e.size)),!e.text&&e.shape&&a.push(t.m(e.shape)),e.bold&&a.push("tn-text-bold"),e.text||e.plain||o.value&&a.push(o.value),n.value&&a.push(n.value),e.plain&&s.value&&a.push(s.value),e.shadow&&(a.push("tn-shadow"),u.value&&a.push(u.value)),e.customClass&&a.push(e.customClass),a.join(" "))})),p=i((()=>{const t={};return e.onlyButton||(e.width&&(t.width=ae(e.width),"circle"===e.shape&&(t.height=t.width)),e.height&&"circle"!==e.shape&&(t.height=ae(e.height)),e.fontSize&&(t.fontSize=ae(e.fontSize)),e.text||e.plain||a.value&&(t.backgroundColor=a.value),l.value&&(t.color=l.value),e.plain&&r.value&&(t.borderColor=r.value),e.shadow&&c.value&&(t.boxShadow=c.value),Z(e.customStyle)||Object.assign(t,e.customStyle)),t}));return{ns:t,buttonClass:d,buttonStyle:p}})(o);return(e,t)=>{const a=B,i=j;return h(),y(i,{class:S(["tn-u-btn-clear",[u(_)]]),style:C(u(w)),"hover-class":o.disabled||o.loading||o.onlyButton?"":e.hoverClass,disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,onClick:u(n),onGetphonenumber:u(l),onOpensetting:u(s),onLaunchapp:u(r),onGetuserinfo:u(c),onChooseavatar:u(d),onAgreeprivacyauthorization:u(p),onError:u(v)},{default:b((()=>[e.loading?(h(),y(a,{key:0,class:S([u(m).m("loading")])},{default:b((()=>[f(ze,{show:"",animation:"",mode:"flower",color:"tn-gray"})])),_:1},8,["class"])):$("",!0),e.icon?(h(),y(a,{key:1,class:S([u(m).e("icon")])},{default:b((()=>[f(_e,{name:e.icon},null,8,["name"])])),_:1},8,["class"])):x(e.$slots,"default",{key:2},void 0,!0)])),_:3},8,["class","style","hover-class","disabled","form-type","open-type","app-parameter","session-from","send-message-title","send-message-path","send-message-img","show-message-card","onClick","onGetphonenumber","onOpensetting","onLaunchapp","onGetuserinfo","onChooseavatar","onAgreeprivacyauthorization","onError"])}}}),[["__scopeId","data-v-b3fff002"]]),ke=te({value:{type:[String,Number]},max:{type:[String,Number]},type:{type:String,values:de,default:"primary"},bgColor:String,textColor:String,size:{type:[String,Number]},fontSize:{type:[String,Number]},bold:Boolean,customStyle:Se,customClass:String,dot:Boolean,absolute:{type:Boolean,default:!0},absolutePosition:{type:Object,default:()=>({})},absoluteCenter:{type:Boolean,default:!0},index:Ce}),Be=(e,t)=>{const o=i((()=>!!e.dot||""!==e.value&&void 0!==e.value)),a=i((()=>{let t="string";return G(e.value)&&(t="number"),l(e.value)&&e.value.startsWith("icon-")&&(t="icon"),t})),n=i((()=>{if(e.dot)return"";if("number"===a.value&&e.max){const t=Number(e.value||0),o=Number(e.max||0);return t>o?`${o}+`:`${t}`}return"icon"===a.value?e.value.replace("icon-",""):e.value}));return{showBadge:o,contentType:a,content:n,badgeClick:()=>{t&&t("click",e.index)}}},Te=he(m({__name:"badge",props:ke,emits:{click:e=>"number"==typeof e||"string"==typeof e},setup(e,{emit:t}){const o=e,a=t,n=P(),{ns:l,contentNs:s,badgeContentClass:r,badgeContentStyle:c}=(e=>{const t=ie("badge"),o=ie("badge-content"),{contentType:a}=Be(e),[n,l]=ue(g(e,"bgColor"),"bg"),[s,r]=ue(g(e,"textColor"),"text"),{sizeType:u}=ge(e.size),c=i((()=>{const t=[];return t.push(o.b()),e.dot&&t.push(o.m("dot")),"icon"===a.value&&t.push(o.m("icon")),e.absolute&&(t.push(o.e("absolute")),e.absoluteCenter&&t.push(o.em("absolute","center"))),e.type&&t.push(`tn-type-${e.type}_bg`),n.value&&t.push(n.value),s.value&&t.push(s.value),e.size&&"inner"===u.value&&t.push(o.m(e.size)),e.bold&&t.push("tn-text-bold"),e.customClass&&t.push(e.customClass),t.join(" ")})),d=i((()=>{const t={};return l.value&&(t.backgroundColor=l.value),r.value&&(t.color=r.value),!e.size||"custom"!==u.value&&"icon"!==a.value||(t.width=t.height=ae(e.size)),e.fontSize&&(t.fontSize=ae(e.fontSize)),e.absolutePosition.top&&(t.top=ae(e.absolutePosition.top)),e.absolutePosition.right&&(t.right=ae(e.absolutePosition.right)),Z(e.customStyle)||Object.assign(t,e.customStyle),t}));return{ns:t,contentNs:o,badgeContentClass:c,badgeContentStyle:d}})(o),{showBadge:d,contentType:p,content:v,badgeClick:m}=Be(o,a),f=i((()=>{const e=[];return e.push(l.b()),(null==n?void 0:n.default)||o.absolute&&(e.push(l.e("absolute")),o.absoluteCenter&&e.push(l.em("absolute","center"))),e.join(" ")}));return(e,t)=>{const o=B;return h(),y(o,{class:S([f.value])},{default:b((()=>[x(e.$slots,"default",{},void 0,!0),u(d)?(h(),y(o,{key:0,class:S([u(r)]),style:C(u(c)),onClick:k(u(m),["stop"])},{default:b((()=>[u(v)?(h(),z(I,{key:0},["icon"===u(p)?(h(),y(_e,{key:0,name:u(v)},null,8,["name"])):(h(),z("span",{key:1,class:S(`${u(s).e("data")}`)},w(u(v)),3))],64)):$("",!0)])),_:1},8,["class","style","onClick"])):$("",!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-8e9ac582"]]),Ne=te({inactiveColor:String,activeColor:String,iconSize:String,fontSize:String}),Ae=te({...Ne,name:{type:[String,Number]},icon:String,activeIcon:String,text:String,bulge:Boolean,bulgeBgColor:String,bulgeTextColor:String,badge:{type:[String,Number]},badgeConfig:{type:Object,default:()=>({})},disabled:Boolean}),je=Symbol("tabbarContextKey"),Pe=e=>{const{emit:t}=p(),{children:o,addChild:a,removeChild:n}=(()=>{const e={},t=v([]);return{children:t,addChild:o=>{e[o.uid]=o,t.value.push(o)},removeChild:o=>{delete e[o],t.value=t.value.filter((e=>e.uid!==o))}}})(),{getSelectorNodeInfo:l}=me(),s=`tt-${ne()}`,i=r(-1),u=(e,a=!1)=>{var n;i.value=e;const l=o.value.findIndex((t=>t.uid===e)),s=(null==(n=o.value[l])?void 0:n.name)||l;t("update:modelValue",s),a&&O((()=>{t("change",s)}))},d=t=>{if(!e.beforeSwitch)return void u(t,!0);const a=o.value.findIndex((e=>e.uid===t)),n=e.beforeSwitch(a);var l;[V(n),(l=n,!0===l||!1===l||U(l)&&"[object Boolean]"==D.call(l))].includes(!0)&&(V(n)?n.then((e=>{e&&u(t,!0)})):n&&u(t,!0))},g=e=>{var t;if(void 0===e)return void u(o.value[0].uid);let a;"number"==typeof e&&(a=null==(t=o.value)?void 0:t[e]),a||(a=o.value.find((t=>t.name===e))),u(a?a.uid:o.value[0].uid)};c((()=>e.modelValue),(e=>{O((()=>{g(e)}))}));const m=r({width:0,height:0,left:0}),h=r(!1);return F(je,E({...M(e),items:o,activeUid:i,addItem:t=>{void 0!==e.modelValue&&-1===i.value&&(e.modelValue!==t.name&&e.modelValue!==o.value.length||(u(t.uid),O((()=>{setTimeout((()=>{i.value=t.uid}),50)})))),a(t)},removeItem:n,setActiveItem:d,setBulgeCircle:async e=>{const{left:t}=e;try{const o=await l(`#${s}`),{left:a}=o;let n=e.width;(null==e?void 0:e.maxWidth)&&(n=e.maxWidth),m.value.width=.75*n,m.value.height=m.value.width,m.value.left=t-(a||0)+e.width/2,h.value=!0}catch(o){}}})),{rectId:s,hasBulgeButton:h,bulgeRectInfo:m,setActiveItem:d,setActiveItemByValue:g}},Oe=he(m({__name:"tabbar-item",props:Ae,emits:{click:()=>!0},setup(e,{emit:t}){const o=e,a=t,{itemId:n,isActive:l,itemRectInfo:c,iconSize:d,hasBadge:v,itemClick:m}=((e,t)=>{const o=s(je),a=p(),n=a.uid||ne(),l=`tti-${n}`,{getSelectorNodeInfo:u}=me(a),c=i((()=>(null==o?void 0:o.activeUid)===n)),d=i((()=>e.iconSize||(null==o?void 0:o.iconSize)||"")),v=i((()=>!!e.badge)),g=r({width:0,height:0,left:0});let m=0;const h=async()=>{try{const e=await u(`#${l}`);if(e.width&&e.width<30)throw new Error("获取TabbarItem节点宽度失败");m=0,g.value.width=e.width||0,g.value.height=e.height||0,g.value.left=e.left||0,g.value.width>80&&(g.value.maxWidth=80),null==o||o.setBulgeCircle(g.value)}catch(e){if(m>10)return void(m=0);m++,setTimeout((()=>{h()}),150)}};return null==o||o.addItem({uid:n,name:e.name}),W((()=>{O((()=>{e.bulge&&h()}))})),q((()=>{null==o||o.removeItem(n)})),{itemId:l,isActive:c,itemRectInfo:g,iconSize:d,hasBadge:v,itemClick:()=>{c.value||e.disabled||(null==o||o.setActiveItem(n),t("click"))}}})(o,a),{ns:T,tabbarItemClass:N,tabbarItemStyle:A,tabbarItemElementStyle:j,bulgeClass:P,bulgeStyle:F}=((e,t)=>{const o=ie("tabbar-item"),a=s(je),n=i((()=>e.activeColor||(null==a?void 0:a.activeColor))),l=i((()=>e.inactiveColor||(null==a?void 0:a.inactiveColor))),[r,u]=ue(l,"text"),[c,d]=ue(n,"text"),[p,v]=ue(l,"bg"),[m,h]=ue(n,"bg"),[y,b]=ue(g(e,"bulgeBgColor"),"bg"),[f,S]=ue(g(e,"bulgeTextColor"),"text"),C=i((()=>ae(e.fontSize||(null==a?void 0:a.fontSize)||""))),x=i((()=>{const n=[o.b()];return t.value?c.value&&n.push(c.value):r.value&&n.push(r.value),(e.icon&&e.activeIcon&&!e.text||e.text&&!e.icon&&!e.activeIcon)&&n.push(o.is("only-element")),t.value&&n.push(o.is("active")),(null==a?void 0:a.switchAnimation)&&n.push(o.is("animation")),n.join(" ")})),_=i((()=>{const e={};return t.value?c.value||(e.color=d.value||"var(--tn-color-primary)"):r.value||(e.color=u.value||"var(--tn-color-gray)"),e})),w=i((()=>e=>{const t={};return"text"===e&&C.value&&(t.fontSize=C.value),t})),z=i((()=>{const a=[o.e("bulge")];return e.bulgeBgColor?y.value&&a.push(y.value):t.value?m.value&&a.push(m.value):p.value&&a.push(p.value),f.value&&a.push(f.value),a.join(" ")})),I=i((()=>o=>{const a={};let n=o.width;return(null==o?void 0:o.maxWidth)&&(n=o.maxWidth),a.width=.5*n+"px",a.height=a.width,a.top=`-${.16*n}px`,e.bulgeBgColor?y.value||(a.backgroundColor=b.value):t.value?m.value||(a.backgroundColor=h.value||"var(--tn-color-primary)"):p.value||(a.backgroundColor=v.value||"var(--tn-color-gray)"),S.value&&(a.color=S.value),a}));return{ns:o,tabbarItemClass:x,tabbarItemStyle:_,tabbarItemElementStyle:w,bulgeClass:z,bulgeStyle:I}})(o,l);return(e,t)=>{const o=B;return h(),y(o,{id:u(n),class:S([u(N)]),style:C(u(A)),onClick:k(u(m),["stop"])},{default:b((()=>[x(e.$slots,"default",{},(()=>[e.bulge?(h(),y(o,{key:0,class:S([u(P)]),style:C(u(F)(u(c)))},{default:b((()=>[f(_e,{name:u(l)?e.activeIcon:e.icon,size:u(d)},null,8,["name","size"])])),_:1},8,["class","style"])):(h(),z(I,{key:1},[e.icon&&e.activeIcon?(h(),y(o,{key:0,class:S([u(T).e("icon")]),style:C(u(j)("icon"))},{default:b((()=>[f(_e,{name:u(l)?e.activeIcon:e.icon,size:u(d)},null,8,["name","size"]),u(v)?(h(),y(Te,{key:0,value:e.badge,dot:e.badgeConfig.dot,size:e.badgeConfig.dot?"16":"",type:"danger"},null,8,["value","dot","size"])):$("",!0)])),_:1},8,["class","style"])):$("",!0)],64)),e.text?(h(),y(o,{key:2,class:S([u(T).e("text")]),style:C(u(j)("text"))},{default:b((()=>[_(w(e.text),1)])),_:1},8,["class","style"])):$("",!0)]),!0)])),_:3},8,["id","class","style","onClick"])}}}),[["__scopeId","data-v-cfaa1304"]]),Fe=he(m({__name:"tabbar",props:te({...Ne,modelValue:{type:[String,Number],default:0},height:{type:String,default:"100rpx"},bgColor:String,frosted:Boolean,topShadow:{type:Boolean,default:!0},switchAnimation:Boolean,fixed:Boolean,placeholder:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},beforeSwitch:{type:Function},zIndex:{type:Number,default:pe}}),emits:{"update:modelValue":e=>G(e)||l(e),change:e=>G(e)||l(e)},setup(e,{expose:t}){const o=e,{rectId:a,bulgeRectInfo:n,hasBulgeButton:l,setActiveItemByValue:s}=Pe(o),{ns:r,tabbarClass:c,tabbarStyle:d,bgClass:p,bgStyle:v,placeholderStyle:m}=(e=>{const t=ie("tabbar"),[o,a]=ue(g(e,"bgColor"),"bg"),n=i((()=>{const o=[t.b()];return e.fixed&&o.push(t.m("fixed")),e.safeAreaInsetBottom&&o.push("tn-u-safe-area"),e.topShadow&&o.push(t.m("top-shadow")),o.join(" ")})),l=i((()=>{const t={};return e.zIndex&&(t.zIndex=e.zIndex),e.height&&(t.height=ae(e.height)),t})),s=i((()=>{const a=[t.e("bg")];return o.value&&!e.frosted&&a.push(o.value),e.frosted&&a.push(t.em("bg","frosted")),a.join(" ")})),r=i((()=>{const t={};return e.zIndex&&(t.zIndex=e.zIndex-1),o.value||(t.backgroundColor=a.value||"var(--tn-color-white)"),e.frosted&&(t.backgroundColor=a.value||"rgba(255, 255, 255, 0.5)"),t})),u=i((()=>{const t={};return e.zIndex&&(t.zIndex=e.zIndex-2),e.height&&(t.height=ae(e.height)),t}));return{ns:t,tabbarClass:n,tabbarStyle:l,bgClass:s,bgStyle:r,placeholderStyle:u}})(o);return t({setActiveItem:s}),(e,t)=>{const o=B;return h(),z(I,null,[f(o,{id:u(a),class:S([u(c)]),style:C(u(d))},{default:b((()=>[u(l)?(h(),y(o,{key:0,class:S([u(r).e("bulge"),{"top-shadow":e.topShadow}]),style:C({width:`${u(n).width}px`,height:`${u(n).height}px`,left:`${u(n).left}px`,top:`-${.35*u(n).height}px`,zIndex:e.zIndex?e.zIndex-1:"inherit"})},null,8,["class","style"])):$("",!0),f(o,{class:S([u(p)]),style:C(u(v))},null,8,["class","style"]),f(o,{class:S([u(r).e("content"),{"tn-u-safe-area":e.safeAreaInsetBottom}])},{default:b((()=>[x(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])])),_:3},8,["id","class","style"]),e.fixed&&e.placeholder?(h(),y(o,{key:0,class:S([u(r).e("placeholder"),{"tn-u-safe-area":e.safeAreaInsetBottom}]),style:C(u(m))},null,8,["class","style"])):$("",!0)],64)}}}),[["__scopeId","data-v-052b25dc"]]),Ee=te({offsetTop:{type:Number,default:0},zIndex:{type:Number,default:ve}}),Me=he(m({__name:"notify",props:Ee,setup(e,{expose:t}){const o=e,{options:a,isActive:n,showNotify:l}=(()=>{const e={msg:"",type:"primary",position:"top",bgColor:"",textColor:"",duration:3e3},t=r({msg:"",type:"primary",position:"",bgColor:"",textColor:"",duration:3e3}),o=r(!1);let a=null;const n=()=>{a&&clearTimeout(a),a=setTimeout((()=>{o.value=!1}),t.value.duration)};return{options:t,isActive:o,showNotify:a=>{Object.assign(t.value,e,a),o.value=!0,n()}}})(),{notifyClass:s,notifyStyle:c}=((e,t,o)=>{const a=ie("notify"),[n,l]=ue(g(t.value,"bgColor"),"bg"),[s,r]=ue(g(t.value,"textColor"),"text");return{notifyClass:i((()=>{const e=[a.b()];var l;return t.value.type&&e.push(`tn-type-${t.value.type}_bg`),n.value&&e.push(n.value),s.value&&e.push(s.value),e.push(a.m(null==(l=null==t?void 0:t.value.position)?"top":l)),o.value&&e.push(a.is("active")),e.join(" ")})),notifyStyle:i((()=>{const o={};return n.value||t.value.type||(o.backgroundColor=l.value||"var(--tn-color-primary)"),r.value?o.color=r.value:n.value||s.value||t.value.type||(o.color="var(--tn-color-white)"),"top"===t.value.position&&e.offsetTop&&(o.top=ae(e.offsetTop,"px")),e.zIndex&&(o.zIndex=e.zIndex),o}))}})(o,a,n);return t({show:l}),(e,t)=>{const o=B;return h(),y(o,{class:S([u(s)]),style:C(u(c))},{default:b((()=>[_(w(u(a).msg),1)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-5c7ea4ef"]]),Ve=he(m({__name:"index",setup(e){const t=r(),o=r(0),a=()=>{o.value++},n=e=>{var o;null==(o=t.value)||o.show({msg:`当前选中的是第${e}个Tab`})};return(e,l)=>{const s=be(R("tn-title"),ye),r=T,i=B,u=N,c=be(R("tn-button"),$e),d=be(R("tn-tabbar-item"),Oe),p=be(R("tn-tabbar"),Fe),v=be(R("tn-notify"),Me);return h(),z(I,null,[f(i,{class:"content"},{default:b((()=>[f(s,{title:"图鸟科技"}),f(r,{class:"logo",src:"/assets/logo-CwQUoOAU.png"}),f(i,{class:"text-area"},{default:b((()=>[f(i,{class:"counter"},{default:b((()=>[_("Current Counter: "+w(o.value),1)])),_:1})])),_:1}),f(i,{class:"demo-url"},{default:b((()=>[_(" 演示项目是通过tuniao-cli的方式进行编写的所以uni_modules的演示代码并不是线上看到的版本，演示小程序代码: "),f(u,{class:"tn-red_text"},{default:b((()=>[_("https://github.com/tuniaoTech/tuniaoui-uniapp-v3-demo")])),_:1})])),_:1}),f(i,{class:"operation"},{default:b((()=>[f(c,{type:"primary",onClick:a},{default:b((()=>[_("Add Counter Value")])),_:1})])),_:1}),f(p,{fixed:"",onChange:n},{default:b((()=>[f(d,{text:"首页",icon:"home","active-icon":"home-fill"}),f(d,{text:"我的",icon:"my","active-icon":"my-fill"})])),_:1})])),_:1}),f(v,{ref_key:"notifyRef",ref:t},null,512)],64)}}}),[["__scopeId","data-v-b49d0a91"]]);export{Ve as default};
