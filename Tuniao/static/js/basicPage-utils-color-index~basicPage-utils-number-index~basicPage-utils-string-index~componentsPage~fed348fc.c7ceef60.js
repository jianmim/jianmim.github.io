(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-utils-color-index~basicPage-utils-number-index~basicPage-utils-string-index~componentsPage~fed348fc"],{"143a":function(e,t,r){"use strict";function n(e,t,r){this.$children.map((function(i){e===i.$options.name?i.$emit.apply(i,[t].concat(r)):n.apply(i,[e,t].concat(r))}))}r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("d81d"),r("99af");var i={methods:{dispatch:function(e,t,r){var n=this.$parent||this.$root,i=n.$options.name;while(n&&(!i||i!==e))n=n.$parent,n&&(i=n.$options.name);n&&n.$emit.apply(n,[t].concat(r))},broadcast:function(e,t,r){n.call(this,e,t,r)}}};t.default=i},4362:function(e,t,r){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=r("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"4dc5":function(e,t,r){"use strict";var n=r("adc6"),i=r.n(n);i.a},"55c4":function(e,t,r){"use strict";(function(e){r("7a82");var n=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("53ca"));function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}r("d3b7"),r("159b"),r("14d9"),r("fb6a"),r("ac1f"),r("5319"),r("a9e3"),r("e9c4"),r("b64b"),r("c975"),r("00b4"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("e25e"),r("466d"),r("d9e2"),r("d401"),r("99af"),r("ddb0"),r("d81d"),r("a434");var s=/%[sdj%]/g,o=function(){};function l(e){if(!e||!e.length)return null;var t={};return e.forEach((function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)})),t}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=1,i=t[0],a=t.length;if("function"===typeof i)return i.apply(null,t.slice(1));if("string"===typeof i){for(var o=String(i).replace(s,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(t[n++]);case"%d":return Number(t[n++]);case"%j":try{return JSON.stringify(t[n++])}catch(r){return"[Circular]"}break;default:return e}})),l=t[n];n<a;l=t[++n])o+=" "+l;return o}return i}function f(e,t){return void 0===e||null===e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!==typeof e||e))}function c(e,t,r){var n=0,i=e.length;(function a(s){if(s&&s.length)r(s);else{var o=n;n+=1,o<i?t(e[o],a):r([])}})([])}function d(e,t,r,n){if(t.first){var i=new Promise((function(t,i){var a=function(e){var t=[];return Object.keys(e).forEach((function(r){t.push.apply(t,e[r])})),t}(e);c(a,r,(function(e){return n(e),e.length?i({errors:e,fields:l(e)}):t()}))}));return i["catch"]((function(e){return e})),i}var a=t.firstFields||[];!0===a&&(a=Object.keys(e));var s=Object.keys(e),o=s.length,u=0,f=[],d=new Promise((function(t,i){var d=function(e){if(f.push.apply(f,e),u++,u===o)return n(f),f.length?i({errors:f,fields:l(f)}):t()};s.length||(n(f),t()),s.forEach((function(t){var n=e[t];-1!==a.indexOf(t)?c(n,r,d):function(e,t,r){var n=[],i=0,a=e.length;function s(e){n.push.apply(n,e),i++,i===a&&r(n)}e.forEach((function(e){t(e,s)}))}(n,r,d)}))}));return d["catch"]((function(e){return e})),d}function h(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"===typeof t?t():t,field:t.field||e.fullField}}}function p(e,t){if(t)for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];"object"===(0,i.default)(n)&&"object"===(0,i.default)(e[r])?e[r]=a({},e[r],{},n):e[r]=n}return e}function m(e,t,r,n,i,a){!e.required||r.hasOwnProperty(e.field)&&!f(t,a||e.type)||n.push(u(i.messages.required,e.fullField))}"undefined"!==typeof e&&Object({NODE_ENV:"production",VUE_APP_DARK_MODE:"false",VUE_APP_NAME:"图鸟UI",VUE_APP_PLATFORM:"h5",VUE_APP_INDEX_CSS_HASH:"5841170f",VUE_APP_INDEX_DARK_CSS_HASH:"657fc187",BASE_URL:"./"});var g={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},v={integer:function(e){return v.number(e)&&parseInt(e,10)===e},float:function(e){return v.number(e)&&!v.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"===typeof e.getTime&&"function"===typeof e.getMonth&&"function"===typeof e.getYear},number:function(e){return!isNaN(e)&&"number"===typeof+e},object:function(e){return"object"===(0,i.default)(e)&&!v.array(e)},method:function(e){return"function"===typeof e},email:function(e){return"string"===typeof e&&!!e.match(g.email)&&e.length<255},url:function(e){return"string"===typeof e&&!!e.match(g.url)},hex:function(e){return"string"===typeof e&&!!e.match(g.hex)}};var y={required:m,whitespace:function(e,t,r,n,i){(/^\s+$/.test(t)||""===t)&&n.push(u(i.messages.whitespace,e.fullField))},type:function(e,t,r,n,a){if(e.required&&void 0===t)m(e,t,r,n,a);else{var s=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(s)>-1?v[s](t)||n.push(u(a.messages.types[s],e.fullField,e.type)):s&&(0,i.default)(t)!==e.type&&n.push(u(a.messages.types[s],e.fullField,e.type))}},range:function(e,t,r,n,i){var a="number"===typeof e.len,s="number"===typeof e.min,o="number"===typeof e.max,l=t,f=null,c="number"===typeof t,d="string"===typeof t,h=Array.isArray(t);if(c?f="number":d?f="string":h&&(f="array"),!f)return!1;h&&(l=t.length),d&&(l=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?l!==e.len&&n.push(u(i.messages[f].len,e.fullField,e.len)):s&&!o&&l<e.min?n.push(u(i.messages[f].min,e.fullField,e.min)):o&&!s&&l>e.max?n.push(u(i.messages[f].max,e.fullField,e.max)):s&&o&&(l<e.min||l>e.max)&&n.push(u(i.messages[f].range,e.fullField,e.min,e.max))},enum:function(e,t,r,n,i){e["enum"]=Array.isArray(e["enum"])?e["enum"]:[],-1===e["enum"].indexOf(t)&&n.push(u(i.messages["enum"],e.fullField,e["enum"].join(", ")))},pattern:function(e,t,r,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||n.push(u(i.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"===typeof e.pattern){var a=new RegExp(e.pattern);a.test(t)||n.push(u(i.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function b(e,t,r,n,i){var a=e.type,s=[],o=e.required||!e.required&&n.hasOwnProperty(e.field);if(o){if(f(t,a)&&!e.required)return r();y.required(e,t,n,s,i,a),f(t,a)||y.type(e,t,n,s,i)}r(s)}var w={string:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t,"string")&&!e.required)return r();y.required(e,t,n,a,i,"string"),f(t,"string")||(y.type(e,t,n,a,i),y.range(e,t,n,a,i),y.pattern(e,t,n,a,i),!0===e.whitespace&&y.whitespace(e,t,n,a,i))}r(a)},method:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&y.type(e,t,n,a,i)}r(a)},number:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(""===t&&(t=void 0),f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&(y.type(e,t,n,a,i),y.range(e,t,n,a,i))}r(a)},boolean:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&y.type(e,t,n,a,i)}r(a)},regexp:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),f(t)||y.type(e,t,n,a,i)}r(a)},integer:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&(y.type(e,t,n,a,i),y.range(e,t,n,a,i))}r(a)},float:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&(y.type(e,t,n,a,i),y.range(e,t,n,a,i))}r(a)},array:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t,"array")&&!e.required)return r();y.required(e,t,n,a,i,"array"),f(t,"array")||(y.type(e,t,n,a,i),y.range(e,t,n,a,i))}r(a)},object:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&y.type(e,t,n,a,i)}r(a)},enum:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i),void 0!==t&&y["enum"](e,t,n,a,i)}r(a)},pattern:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t,"string")&&!e.required)return r();y.required(e,t,n,a,i),f(t,"string")||y.pattern(e,t,n,a,i)}r(a)},date:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();var o;if(y.required(e,t,n,a,i),!f(t))o="number"===typeof t?new Date(t):t,y.type(e,o,n,a,i),o&&y.range(e,o.getTime(),n,a,i)}r(a)},url:b,hex:b,email:b,required:function(e,t,r,n,a){var s=[],o=Array.isArray(t)?"array":(0,i.default)(t);y.required(e,t,n,s,a,o),r(s)},any:function(e,t,r,n,i){var a=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(f(t)&&!e.required)return r();y.required(e,t,n,a,i)}r(a)}};function _(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var x=_();function q(e){this.rules=null,this._messages=x,this.define(e)}q.prototype={messages:function(e){return e&&(this._messages=p(_(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!==(0,i.default)(e)||Array.isArray(e))throw new Error("Rules must be an object");var t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){var n=this;void 0===t&&(t={}),void 0===r&&(r=function(){});var s,o,f=e,c=t,m=r;if("function"===typeof c&&(m=c,c={}),!this.rules||0===Object.keys(this.rules).length)return m&&m(),Promise.resolve();if(c.messages){var g=this.messages();g===x&&(g=_()),p(g,c.messages),c.messages=g}else c.messages=this.messages();var v={},y=c.keys||Object.keys(this.rules);y.forEach((function(t){s=n.rules[t],o=f[t],s.forEach((function(r){var i=r;"function"===typeof i.transform&&(f===e&&(f=a({},f)),o=f[t]=i.transform(o)),i="function"===typeof i?{validator:i}:a({},i),i.validator=n.getValidationMethod(i),i.field=t,i.fullField=i.fullField||t,i.type=n.getType(i),i.validator&&(v[t]=v[t]||[],v[t].push({rule:i,value:o,source:f,field:t}))}))}));var b={};return d(v,c,(function(e,t){var r,n=e.rule,s=("object"===n.type||"array"===n.type)&&("object"===(0,i.default)(n.fields)||"object"===(0,i.default)(n.defaultField));function o(e,t){return a({},t,{fullField:n.fullField+"."+e})}function l(r){void 0===r&&(r=[]);var i=r;if(Array.isArray(i)||(i=[i]),!c.suppressWarning&&i.length&&q.warning("async-validator:",i),i.length&&n.message&&(i=[].concat(n.message)),i=i.map(h(n)),c.first&&i.length)return b[n.field]=1,t(i);if(s){if(n.required&&!e.value)return i=n.message?[].concat(n.message).map(h(n)):c.error?[c.error(n,u(c.messages.required,n.field))]:[],t(i);var l={};if(n.defaultField)for(var f in e.value)e.value.hasOwnProperty(f)&&(l[f]=n.defaultField);for(var d in l=a({},l,{},e.rule.fields),l)if(l.hasOwnProperty(d)){var p=Array.isArray(l[d])?l[d]:[l[d]];l[d]=p.map(o.bind(null,d))}var m=new q(l);m.messages(c.messages),e.rule.options&&(e.rule.options.messages=c.messages,e.rule.options.error=c.error),m.validate(e.value,e.rule.options||c,(function(e){var r=[];i&&i.length&&r.push.apply(r,i),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(i)}s=s&&(n.required||!n.required&&e.value),n.field=e.field,n.asyncValidator?r=n.asyncValidator(n,e.value,l,e.source,c):n.validator&&(r=n.validator(n,e.value,l,e.source,c),!0===r?l():!1===r?l(n.message||n.field+" fails"):r instanceof Array?l(r):r instanceof Error&&l(r.message)),r&&r.then&&r.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){(function(e){var t,r=[],n={};function i(e){var t;Array.isArray(e)?r=(t=r).concat.apply(t,e):r.push(e)}for(t=0;t<e.length;t++)i(e[t]);r.length?n=l(r):(r=null,n=null),m(r,n)})(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!==typeof e.validator&&e.type&&!w.hasOwnProperty(e.type))throw new Error(u("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"===typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?w.required:w[this.getType(e)]||!1}},q.register=function(e,t){if("function"!==typeof t)throw new Error("Cannot register a validator by type, validator is not a function");w[e]=t},q.warning=o,q.messages=x;var A=q;t.default=A}).call(this,r("4362"))},"5c79":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"tn-form-item-class tn-form-item",class:{"tn-border-solid-bottom":e.elBorderBottom,"tn-form-item__border-bottom--error":"error"===e.validateState&&e.showError("border-bottom")}},[r("v-uni-view",{staticClass:"tn-form-item__body",style:{flexDirection:"left"==e.elLabelPosition?"row":"column"}},[r("v-uni-view",{staticClass:"tn-form-item--left",style:{width:e.wLabelWidth,flex:"0 0 "+e.wLabelWidth,marginBottom:"left"==e.elLabelPosition?0:"10rpx"}},[e.required||e.leftIcon||e.label?r("v-uni-view",{staticClass:"tn-form-item--left__content",style:[e.leftContentStyle]},[e.leftIcon?r("v-uni-view",{staticClass:"tn-form-item--left__content__icon"},[r("v-uni-view",{class:["tn-icon-"+e.leftIcon],style:e.leftIconStyle})],1):e._e(),r("v-uni-view",{staticClass:"tn-form-item--left__content__label",style:[e.elLabelStyle]},[e._v(e._s(e.label))]),e.required?r("v-uni-text",{staticClass:"tn-form-item--left__content--required"},[e._v("*")]):e._e()],1):e._e()],1),r("v-uni-view",{staticClass:"tn-form-item--right tn-flex"},[r("v-uni-view",{staticClass:"tn-form-item--right__content"},[r("v-uni-view",{staticClass:"tn-form-item--right__content__slot"},[e._t("default")],2),e.$slots.right||e.rightIcon?r("v-uni-view",{staticClass:"tn-form-item--right__content__icon tn-flex"},[e.rightIcon?r("v-uni-view",{class:["tn-icon-"+e.rightIcon],style:e.rightIconStyle}):e._e(),e._t("right")],2):e._e()],1)],1)],1),"error"===e.validateState&&e.showError("message")?r("v-uni-view",{staticClass:"tn-form-item__message",style:{paddingLeft:"left"===e.elLabelPosition?e.elLabelWidth+"rpx":"0"}},[e._v(e._s(e.validateMessage))]):e._e()],1)},i=[]},"7b3a":function(e,t,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("ade3"));r("a9e3"),r("c975"),r("b64b"),r("d81d"),r("14d9"),r("a434"),r("99af"),r("4de4"),r("d3b7");var a=n(r("143a")),s=n(r("55c4"));s.default.warning=function(){};var o={mixins:[a.default],name:"tn-form-item",inject:{tnForm:{default:function(){return null}}},props:{label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:""},labelWidth:{type:Number,default:0},labelAlign:{type:String,default:""},labelStyle:{type:Object,default:function(){return{}}},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},leftIconStyle:{type:Object,default:function(){return{}}},rightIconStyle:{type:Object,default:function(){return{}}},required:{type:Boolean,default:!1}},computed:{wLabelWidth:function(){return"left"===this.elLabelPosition?"true"===this.label||""===this.label?"auto":this.elLabelWidth+"rpx":"100%"},showError:function(){var e=this;return function(t){return!(e.errorType.indexOf("none")>=0)&&e.errorType.indexOf(t)>=0}},elLabelWidth:function(){return 0!=this.labelWidth?this.labelWidth:0!=this.parentData.labelWidth?this.parentData.labelWidth:90},elLabelStyle:function(){return Object.keys(this.labelStyle).length?this.labelStyle:Object.keys(this.parentData.labelStyle).length?this.parentData.labelStyle:{}},elLabelPosition:function(){return this.labelPosition?this.labelPosition:this.parentData.labelPosition?this.parentData.labelPosition:"left"},elLabelAlign:function(){return this.labelAlign?this.labelAlign:this.parentData.labelAlign?this.parentData.labelAlign:"left"},elBorderBottom:function(){return""!==this.borderBottom?this.borderBottom:""===this.parentData.borderBottom||this.parentData.borderBottom},leftContentStyle:function(){var e={};if("left"===this.elLabelPosition)switch(this.elLabelAlign){case"left":e.justifyContent="flex-start";break;case"center":e.justifyContent="center";break;default:e.justifyContent="flex-end";break}return e}},data:function(){return{initialValue:"",validateState:"",validateMessage:"",errorType:["message"],fieldValue:"",parentData:{borderBottom:!0,labelWidth:90,labelPosition:"left",labelAlign:"left",labelStyle:{}}}},watch:{validateState:function(e){this.broadcastInputError()},"tnForm.errorType":function(e){this.errorType=e,this.broadcastInputError()}},mounted:function(){var e=this;this.parent=this.$t.$parent.call(this,"tn-form"),this.parent&&(Object.keys(this.parentData).map((function(t){e.parentData[t]=e.parent[t]})),this.prop&&(this.parent.fields.push(this),this.errorType=this.parent.errorType,this.initialValue=this.fieldValue,this.$nextTick((function(){e.setRules()}))))},beforeDestroy:function(){var e=this;this.parent&&this.prop&&this.parent.fields.map((function(t,r){t===e&&e.parent.fields.splice(r,1)}))},methods:{broadcastInputError:function(){this.broadcast("tn-input","on-form-item-error","error"===this.validateState&&this.showError("border"))},setRules:function(){this.$on("on-form-blur",this.onFieldBlur),this.$on("on-form-change",this.onFieldChange)},getRules:function(){var e=this.parent.rules;return e=e?e[this.prop]:[],[].concat(e||[])},onFieldBlur:function(){this.validation("blur")},onFieldChange:function(){this.validation("change")},getFilterRule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.getRules();return e?t.filter((function(t){return t.trigger&&-1!==t.trigger.indexOf(e)})):t},validation:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.fieldValue=this.parent.model[this.prop];var n=this.getFilterRule(e);if(!n||0===n.length)return r("");this.validateState="validating";var a=new s.default((0,i.default)({},this.prop,n));a.validate((0,i.default)({},this.prop,this.fieldValue),{firstFields:!0},(function(e,n){t.validateState=e?"error":"success",t.validateMessage=e?e[0].message:"",r(t.validateMessage)}))},resetField:function(){this.parent.model[this.prop]=this.initialValue,this.validateState="success"}}};t.default=o},"8ec9":function(e,t,r){"use strict";r.r(t);var n=r("5c79"),i=r("cc1f");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("4dc5");var s=r("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"393c2f46",null,!1,n["a"],void 0);t["default"]=o.exports},adc6:function(e,t,r){var n=r("b5a7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("50786071",n,!0,{sourceMap:!1,shadowMode:!1})},b5a7:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \n */.tn-form-item[data-v-393c2f46]{display:flex;flex-direction:column;padding:%?20?% 0;font-size:%?28?%;color:#080808;box-sizing:border-box;line-height:%?70?%}.tn-form-item__border-bottom--error[data-v-393c2f46]:after{border-color:#e83a30}.tn-form-item__body[data-v-393c2f46]{display:flex;flex-direction:row}.tn-form-item--left[data-v-393c2f46]{display:flex;flex-direction:row;align-items:center}.tn-form-item--left__content[data-v-393c2f46]{display:flex;flex-direction:row;position:relative;align-items:center;padding-right:%?18?%;flex:1}.tn-form-item--left__content--required[data-v-393c2f46]{position:relative;right:0;vertical-align:middle;color:#e83a30}.tn-form-item--left__content__icon[data-v-393c2f46]{color:#aaa;margin-right:%?8?%}.tn-form-item--right[data-v-393c2f46]{flex:1}.tn-form-item--right__content[data-v-393c2f46]{display:flex;flex-direction:row;align-items:center;flex:1}.tn-form-item--right__content__slot[data-v-393c2f46]{flex:1;display:flex;flex-direction:row;align-items:center}.tn-form-item--right__content__icon[data-v-393c2f46]{margin-left:%?10?%;color:#aaa;font-size:%?30?%}.tn-form-item__message[data-v-393c2f46]{font-size:%?24?%;line-height:%?24?%;color:#e83a30;margin-top:%?12?%}',""]),e.exports=t},cc1f:function(e,t,r){"use strict";r.r(t);var n=r("7b3a"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},df7c:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var s=a>=0?arguments[a]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,i="/"===s.charAt(0))}return t=r(n(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var a=t.isAbsolute(e),s="/"===i(e,-1);return e=r(n(e.split("/"),(function(e){return!!e})),!a).join("/"),e||a||(e="."),e&&s&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var r=e.length-1;r>=0;r--)if(""!==e[r])break;return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var i=n(e.split("/")),a=n(r.split("/")),s=Math.min(i.length,a.length),o=s,l=0;l<s;l++)if(i[l]!==a[l]){o=l;break}var u=[];for(l=o;l<i.length;l++)u.push("..");return u=u.concat(a.slice(o)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),47===t){if(!i){n=a;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){r=t+1;break}}else-1===n&&(i=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,i=!0,a=0,s=e.length-1;s>=0;--s){var o=e.charCodeAt(s);if(47!==o)-1===n&&(i=!1,n=s+1),46===o?-1===t?t=s:1!==a&&(a=1):-1!==t&&(a=-1);else if(!i){r=s+1;break}}return-1===t||-1===n||0===a||1===a&&t===n-1&&t===r+1?"":e.slice(t,n)};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("4362"))}}]);