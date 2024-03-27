import q from"./index-DTvg54wF.js";import{b as u,k as L,r as v,L as D,p as U,t as K,a6 as b,x,M as G,D as p,A as d,B as k,y as _,O as V,F as A,ao as g,T as I,S as N,ap as E,E as O,ai as z,X as F,Y as $}from"./store-mQZkmHj-.js";import{B as H,d as m,R as C,g as R}from"./index-lw7p-_pG.js";import{_ as Q}from"./_plugin-vue_export-helper-x3n3nnut.js";const f=function(a){return{apiSysCacheDeleteByPreKeyPrefixKeyPost:async(r,s={})=>{if(r==null)throw new C("prefixKey","Required parameter prefixKey was null or undefined when calling apiSysCacheDeleteByPreKeyPrefixKeyPost.");const e="/api/sysCache/deleteByPreKey/{prefixKey}".replace("{prefixKey}",encodeURIComponent(String(r))),t=new URL(e,"https://example.com");let o;a&&(o=a.baseOptions);const h={method:"POST",...o,...s},y={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;y.Authorization="Bearer "+c}const n=new URLSearchParams(t.search);for(const c in i)n.set(c,i[c]);for(const c in s.params)n.set(c,s.params[c]);t.search=new URLSearchParams(n).toString();let l=o&&o.headers?o.headers:{};return h.headers={...y,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:h}},apiSysCacheDeleteKeyPost:async(r,s={})=>{if(r==null)throw new C("key","Required parameter key was null or undefined when calling apiSysCacheDeleteKeyPost.");const e="/api/sysCache/delete/{key}".replace("{key}",encodeURIComponent(String(r))),t=new URL(e,"https://example.com");let o;a&&(o=a.baseOptions);const h={method:"POST",...o,...s},y={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;y.Authorization="Bearer "+c}const n=new URLSearchParams(t.search);for(const c in i)n.set(c,i[c]);for(const c in s.params)n.set(c,s.params[c]);t.search=new URLSearchParams(n).toString();let l=o&&o.headers?o.headers:{};return h.headers={...y,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:h}},apiSysCacheKeyListGet:async(r={})=>{const s="/api/sysCache/keyList",e=new URL(s,"https://example.com");let t;a&&(t=a.baseOptions);const o={method:"GET",...t,...r},h={},y={};if(a&&a.accessToken){const l=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;h.Authorization="Bearer "+l}const i=new URLSearchParams(e.search);for(const l in y)i.set(l,y[l]);for(const l in r.params)i.set(l,r.params[l]);e.search=new URLSearchParams(i).toString();let n=t&&t.headers?t.headers:{};return o.headers={...h,...n,...r.headers},{url:e.pathname+e.search+e.hash,options:o}},apiSysCacheKeysByPrefixKeyPrefixKeyGet:async(r,s={})=>{if(r==null)throw new C("prefixKey","Required parameter prefixKey was null or undefined when calling apiSysCacheKeysByPrefixKeyPrefixKeyGet.");const e="/api/sysCache/keysByPrefixKey/{prefixKey}".replace("{prefixKey}",encodeURIComponent(String(r))),t=new URL(e,"https://example.com");let o;a&&(o=a.baseOptions);const h={method:"GET",...o,...s},y={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;y.Authorization="Bearer "+c}const n=new URLSearchParams(t.search);for(const c in i)n.set(c,i[c]);for(const c in s.params)n.set(c,s.params[c]);t.search=new URLSearchParams(n).toString();let l=o&&o.headers?o.headers:{};return h.headers={...y,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:h}},apiSysCacheValueKeyGet:async(r,s={})=>{if(r==null)throw new C("key","Required parameter key was null or undefined when calling apiSysCacheValueKeyGet.");const e="/api/sysCache/value/{key}".replace("{key}",encodeURIComponent(String(r))),t=new URL(e,"https://example.com");let o;a&&(o=a.baseOptions);const h={method:"GET",...o,...s},y={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;y.Authorization="Bearer "+c}const n=new URLSearchParams(t.search);for(const c in i)n.set(c,i[c]);for(const c in s.params)n.set(c,s.params[c]);t.search=new URLSearchParams(n).toString();let l=o&&o.headers?o.headers:{};return h.headers={...y,...l,...s.headers},{url:t.pathname+t.search+t.hash,options:h}}}},P=function(a){return{async apiSysCacheDeleteByPreKeyPrefixKeyPost(r,s){const e=await f(a).apiSysCacheDeleteByPreKeyPrefixKeyPost(r,s);return(t=u,o=m)=>{const h={...e.options,url:o+e.url};return t.request(h)}},async apiSysCacheDeleteKeyPost(r,s){const e=await f(a).apiSysCacheDeleteKeyPost(r,s);return(t=u,o=m)=>{const h={...e.options,url:o+e.url};return t.request(h)}},async apiSysCacheKeyListGet(r){const s=await f(a).apiSysCacheKeyListGet(r);return(e=u,t=m)=>{const o={...s.options,url:t+s.url};return e.request(o)}},async apiSysCacheKeysByPrefixKeyPrefixKeyGet(r,s){const e=await f(a).apiSysCacheKeysByPrefixKeyPrefixKeyGet(r,s);return(t=u,o=m)=>{const h={...e.options,url:o+e.url};return t.request(h)}},async apiSysCacheValueKeyGet(r,s){const e=await f(a).apiSysCacheValueKeyGet(r,s);return(t=u,o=m)=>{const h={...e.options,url:o+e.url};return t.request(h)}}}};class B extends H{async apiSysCacheDeleteByPreKeyPrefixKeyPost(r,s){return P(this.configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(r,s).then(e=>e(this.axios,this.basePath))}async apiSysCacheDeleteKeyPost(r,s){return P(this.configuration).apiSysCacheDeleteKeyPost(r,s).then(e=>e(this.axios,this.basePath))}async apiSysCacheKeyListGet(r){return P(this.configuration).apiSysCacheKeyListGet(r).then(s=>s(this.axios,this.basePath))}async apiSysCacheKeysByPrefixKeyPrefixKeyGet(r,s){return P(this.configuration).apiSysCacheKeysByPrefixKeyPrefixKeyGet(r,s).then(e=>e(this.axios,this.basePath))}async apiSysCacheValueKeyGet(r,s){return P(this.configuration).apiSysCacheValueKeyGet(r,s).then(e=>e(this.axios,this.basePath))}}const j=a=>(F("data-v-ba1df66b"),a=a(),$(),a),M={class:"sys-cache-container"},J={class:"card-header"},X=j(()=>V("span",null,"缓存列表",-1)),Y={class:"card-header"},W=L({name:"sysCache"}),Z=L({...W,setup(a){const r=v(),s=v({}),e=D({loading:!1,loading1:!1,cacheData:[],cacheValue:void 0,cacheKey:void 0});U(async()=>{t()});const t=async()=>{e.cacheData=[],e.cacheValue=void 0,e.cacheKey=void 0,e.loading=!0;var y=await R(B).apiSysCacheKeyListGet();let i=y.data.result;for(let n=0;n<i.length;n++){let l=i[n].split(":"),c=l[0];e.cacheData.filter(S=>S.name==c).length===0&&e.cacheData.push({id:l.length>1?0:i[n],name:c,children:[]}),l.length>1&&(e.cacheData.filter(w=>w.name==c)[0]||{}).children.push({id:i[n],name:i[n].substr(c.length+1)})}e.loading=!1},o=()=>{if(s.value.id==0){O.warning("禁止删除顶层缓存");return}z.confirm(`确定删除缓存：【${s.value.id}】?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await R(B).apiSysCacheDeleteKeyPost(s.value.id),t(),e.cacheValue=void 0,e.cacheKey=void 0,O.success("删除成功")}).catch(()=>{})},h=async y=>{if(y.id!=0){s.value=y,e.loading1=!0;var i=await R(B).apiSysCacheValueKeyGet(y.id),n=i.data.result;if(typeof n=="string")try{var l=JSON.parse(n);typeof l=="object"?e.cacheValue=l:e.cacheValue=n}catch{e.cacheValue=n}else e.cacheValue=n;e.cacheKey=y.id,e.loading1=!1}};return(y,i)=>{const n=K("el-button"),l=K("el-card"),c=K("el-col"),S=K("el-row"),w=b("auth"),T=b("loading");return x(),G("div",M,[p(q,{text:"系统缓存数据管理，请慎重操作！",leftIcon:"iconfont icon-tongzhi2",background:"var(--el-color-primary-light-9)",color:"var(--el-color-primary)"}),p(S,{gutter:8,style:{width:"100%"}},{default:d(()=>[p(c,{span:8,xs:24},{default:d(()=>[k((x(),_(l,{shadow:"hover",header:"缓存列表",class:"mt8"},{header:d(()=>[V("div",J,[X,k(p(n,{icon:"ele-Refresh",size:"small",circle:"",text:"",onClick:t},null,512),[[w,"sysCache:keyList"]])])]),default:d(()=>[p(A(g),{ref_key:"treeRef",ref:r,class:"filter-tree",data:e.cacheData,"node-key":"id",props:{children:"children",label:"name"},onNodeClick:h,"default-checked-keys":e.cacheData,"highlight-current":"","check-strictly":"","default-expand-all":"",accordion:""},null,8,["data","default-checked-keys"])]),_:1})),[[T,e.loading]])]),_:1}),p(c,{span:16,xs:24},{default:d(()=>[k((x(),_(l,{shadow:"hover",header:"缓存数据",class:"mt8"},{header:d(()=>[V("div",Y,[V("span",null,I(`缓存数据${e.cacheKey?`【${e.cacheKey}】`:""}`),1),k((x(),_(n,{icon:"ele-Delete",size:"small",type:"danger",onClick:o},{default:d(()=>[N(" 删除缓存 ")]),_:1})),[[w,"sysCache:delete"]])])]),default:d(()=>[p(A(E),{data:e.cacheValue,showLength:"",showIcon:"",showLineNumber:"",showSelectController:""},null,8,["data"])]),_:1})),[[T,e.loading1]])]),_:1})]),_:1})])}}}),re=Q(Z,[["__scopeId","data-v-ba1df66b"]]);export{re as default};
