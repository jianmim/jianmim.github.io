import{B as E,d as A,g as f}from"./index-lw7p-_pG.js";import{b as _,k as z,r as K,L as M,p as $,t as S,x as w,M as x,D as i,A as p,O as U,T as G,S as F,a4 as L,a5 as j,y as B}from"./store-mQZkmHj-.js";import{S as C}from"./sys-tenant-api-WCCcDxDS.js";const T=function(a){return{apiSysOpenAccessAddPost:async(s,t={})=>{const n="/api/sysOpenAccess/add",r=new URL(n,"https://example.com");let o;a&&(o=a.baseOptions);const e={method:"POST",...o,...t},l={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const d=new URLSearchParams(r.search);for(const c in h)d.set(c,h[c]);for(const c in t.params)d.set(c,t.params[c]);r.search=new URLSearchParams(d).toString();let y=o&&o.headers?o.headers:{};e.headers={...l,...y,...t.headers};const P=typeof s!="string"||e.headers["Content-Type"]==="application/json";return e.data=P?JSON.stringify(s!==void 0?s:{}):s||"",{url:r.pathname+r.search+r.hash,options:e}},apiSysOpenAccessDeletePost:async(s,t={})=>{const n="/api/sysOpenAccess/delete",r=new URL(n,"https://example.com");let o;a&&(o=a.baseOptions);const e={method:"POST",...o,...t},l={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const d=new URLSearchParams(r.search);for(const c in h)d.set(c,h[c]);for(const c in t.params)d.set(c,t.params[c]);r.search=new URLSearchParams(d).toString();let y=o&&o.headers?o.headers:{};e.headers={...l,...y,...t.headers};const P=typeof s!="string"||e.headers["Content-Type"]==="application/json";return e.data=P?JSON.stringify(s!==void 0?s:{}):s||"",{url:r.pathname+r.search+r.hash,options:e}},apiSysOpenAccessPagePost:async(s,t={})=>{const n="/api/sysOpenAccess/page",r=new URL(n,"https://example.com");let o;a&&(o=a.baseOptions);const e={method:"POST",...o,...t},l={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const d=new URLSearchParams(r.search);for(const c in h)d.set(c,h[c]);for(const c in t.params)d.set(c,t.params[c]);r.search=new URLSearchParams(d).toString();let y=o&&o.headers?o.headers:{};e.headers={...l,...y,...t.headers};const P=typeof s!="string"||e.headers["Content-Type"]==="application/json";return e.data=P?JSON.stringify(s!==void 0?s:{}):s||"",{url:r.pathname+r.search+r.hash,options:e}},apiSysOpenAccessSecretPost:async(s={})=>{const t="/api/sysOpenAccess/secret",n=new URL(t,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},e={},l={};if(a&&a.accessToken){const y=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;e.Authorization="Bearer "+y}const h=new URLSearchParams(n.search);for(const y in l)h.set(y,l[y]);for(const y in s.params)h.set(y,s.params[y]);n.search=new URLSearchParams(h).toString();let d=r&&r.headers?r.headers:{};return o.headers={...e,...d,...s.headers},{url:n.pathname+n.search+n.hash,options:o}},apiSysOpenAccessUpdatePost:async(s,t={})=>{const n="/api/sysOpenAccess/update",r=new URL(n,"https://example.com");let o;a&&(o=a.baseOptions);const e={method:"POST",...o,...t},l={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const d=new URLSearchParams(r.search);for(const c in h)d.set(c,h[c]);for(const c in t.params)d.set(c,t.params[c]);r.search=new URLSearchParams(d).toString();let y=o&&o.headers?o.headers:{};e.headers={...l,...y,...t.headers};const P=typeof s!="string"||e.headers["Content-Type"]==="application/json";return e.data=P?JSON.stringify(s!==void 0?s:{}):s||"",{url:r.pathname+r.search+r.hash,options:e}}}},V=function(a){return{async apiSysOpenAccessAddPost(s,t){const n=await T(a).apiSysOpenAccessAddPost(s,t);return(r=_,o=A)=>{const e={...n.options,url:o+n.url};return r.request(e)}},async apiSysOpenAccessDeletePost(s,t){const n=await T(a).apiSysOpenAccessDeletePost(s,t);return(r=_,o=A)=>{const e={...n.options,url:o+n.url};return r.request(e)}},async apiSysOpenAccessPagePost(s,t){const n=await T(a).apiSysOpenAccessPagePost(s,t);return(r=_,o=A)=>{const e={...n.options,url:o+n.url};return r.request(e)}},async apiSysOpenAccessSecretPost(s){const t=await T(a).apiSysOpenAccessSecretPost(s);return(n=_,r=A)=>{const o={...t.options,url:r+t.url};return n.request(o)}},async apiSysOpenAccessUpdatePost(s,t){const n=await T(a).apiSysOpenAccessUpdatePost(s,t);return(r=_,o=A)=>{const e={...n.options,url:o+n.url};return r.request(e)}}}};class R extends E{async apiSysOpenAccessAddPost(s,t){return V(this.configuration).apiSysOpenAccessAddPost(s,t).then(n=>n(this.axios,this.basePath))}async apiSysOpenAccessDeletePost(s,t){return V(this.configuration).apiSysOpenAccessDeletePost(s,t).then(n=>n(this.axios,this.basePath))}async apiSysOpenAccessPagePost(s,t){return V(this.configuration).apiSysOpenAccessPagePost(s,t).then(n=>n(this.axios,this.basePath))}async apiSysOpenAccessSecretPost(s){return V(this.configuration).apiSysOpenAccessSecretPost(s).then(t=>t(this.axios,this.basePath))}async apiSysOpenAccessUpdatePost(s,t){return V(this.configuration).apiSysOpenAccessUpdatePost(s,t).then(n=>n(this.axios,this.basePath))}}const W={class:"sys-open-access-container"},X={style:{color:"#fff"}},Y={class:"dialog-footer"},Z=z({name:"sysOpenAccessEdit"}),te=z({...Z,props:{title:String},emits:["handleQuery"],setup(a,{expose:s,emit:t}){const n=a,r=t,o=K(),e=M({isShowDialog:!1,ruleForm:{},tenantData:[],userData:[]});$(async()=>{var u;var O=await f(C).apiSysTenantPagePost({page:1,pageSize:1e4});e.tenantData=((u=O.data.result)==null?void 0:u.items)??[]});const l=O=>{var u;e.ruleForm=JSON.parse(JSON.stringify(O)),e.isShowDialog=!0,(u=o.value)==null||u.resetFields(),P(!1)},h=()=>{r("handleQuery"),e.isShowDialog=!1},d=()=>{e.isShowDialog=!1},y=()=>{o.value.validate(async O=>{O&&(e.ruleForm.id!=null&&e.ruleForm.id>0?await f(R).apiSysOpenAccessUpdatePost(e.ruleForm):await f(R).apiSysOpenAccessAddPost(e.ruleForm),h())})},P=async(O=!0)=>{var u=await f(C).apiSysTenantUserListPost({tenantId:e.ruleForm.bindTenantId??0});e.userData=u.data.result??[],O&&(e.ruleForm.bindUserId=void 0)},c=async()=>{var O=await f(R).apiSysOpenAccessSecretPost();e.ruleForm.accessSecret=O.data.result};return s({openDialog:l}),(O,u)=>{const I=S("ele-Edit"),N=S("el-icon"),q=S("el-input"),k=S("el-form-item"),b=S("el-col"),g=S("el-button"),v=S("el-option"),D=S("el-select"),Q=S("el-row"),H=S("el-form"),J=S("el-dialog");return w(),x("div",W,[i(J,{modelValue:e.isShowDialog,"onUpdate:modelValue":u[4]||(u[4]=m=>e.isShowDialog=m),draggable:"","close-on-click-modal":!1,width:"600px"},{header:p(()=>[U("div",X,[i(N,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:p(()=>[i(I)]),_:1}),U("span",null,G(n.title),1)])]),footer:p(()=>[U("span",Y,[i(g,{onClick:d},{default:p(()=>[F("取 消")]),_:1}),i(g,{type:"primary",onClick:y},{default:p(()=>[F("确 定")]),_:1})])]),default:p(()=>[i(H,{model:e.ruleForm,ref_key:"ruleFormRef",ref:o,"label-width":"auto"},{default:p(()=>[i(Q,{gutter:35},{default:p(()=>[i(b,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:p(()=>[i(k,{label:"身份标识",prop:"accessKey",rules:[{required:!0,message:"身份标识不能为空",trigger:"blur"}]},{default:p(()=>[i(q,{modelValue:e.ruleForm.accessKey,"onUpdate:modelValue":u[0]||(u[0]=m=>e.ruleForm.accessKey=m),placeholder:"身份标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),i(b,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:p(()=>[i(k,{label:"密钥",prop:"accessSecret",rules:[{required:!0,message:"密钥不能为空",trigger:"blur"}]},{default:p(()=>[i(q,{modelValue:e.ruleForm.accessSecret,"onUpdate:modelValue":u[1]||(u[1]=m=>e.ruleForm.accessSecret=m),placeholder:"密钥",clearable:""},{append:p(()=>[i(g,{onClick:c},{default:p(()=>[F("生成密钥")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),i(b,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:p(()=>[i(k,{label:"绑定租户",prop:"bindTenantId",rules:[{required:!0,message:"绑定租户不能为空",trigger:"blur"}]},{default:p(()=>[i(D,{modelValue:e.ruleForm.bindTenantId,"onUpdate:modelValue":u[2]||(u[2]=m=>e.ruleForm.bindTenantId=m),placeholder:"绑定租户",filterable:"","default-first-option":"",style:{width:"100%"},onChange:P},{default:p(()=>[(w(!0),x(L,null,j(e.tenantData,m=>(w(),B(v,{key:m.id,label:m.name,value:m.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),i(b,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:p(()=>[i(k,{label:"绑定用户",prop:"bindUserId",rules:[{required:!0,message:"绑定用户不能为空",trigger:"blur"}]},{default:p(()=>[i(D,{modelValue:e.ruleForm.bindUserId,"onUpdate:modelValue":u[3]||(u[3]=m=>e.ruleForm.bindUserId=m),placeholder:"绑定用户",filterable:"","default-first-option":"",style:{width:"100%"}},{default:p(()=>[(w(!0),x(L,null,j(e.userData,m=>(w(),B(v,{key:m.id,label:`${m.account}(${m.realName})`,value:m.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{R as S,te as _};
