import{b as P}from"./store-dof5ccn5.js";import{B as S,d,R as u}from"./index-zQlakb1H.js";const R=function(a){return{apiSysRegionAddPost:async(e,s={})=>{const n="/api/sysRegion/add",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},i={},l={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;i.Authorization="Bearer "+c}i["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in l)h.set(c,l[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let p=r&&r.headers?r.headers:{};o.headers={...i,...p,...s.headers};const y=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysRegionDeletePost:async(e,s={})=>{const n="/api/sysRegion/delete",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},i={},l={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;i.Authorization="Bearer "+c}i["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in l)h.set(c,l[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let p=r&&r.headers?r.headers:{};o.headers={...i,...p,...s.headers};const y=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysRegionListGet:async(e,s={})=>{if(e==null)throw new u("id","Required parameter id was null or undefined when calling apiSysRegionListGet.");const n="/api/sysRegion/list",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"GET",...r,...s},i={},l={};if(a&&a.accessToken){const y=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;i.Authorization="Bearer "+y}e!==void 0&&(l.Id=e);const h=new URLSearchParams(t.search);for(const y in l)h.set(y,l[y]);for(const y in s.params)h.set(y,s.params[y]);t.search=new URLSearchParams(h).toString();let p=r&&r.headers?r.headers:{};return o.headers={...i,...p,...s.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysRegionPagePost:async(e,s={})=>{const n="/api/sysRegion/page",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},i={},l={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;i.Authorization="Bearer "+c}i["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in l)h.set(c,l[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let p=r&&r.headers?r.headers:{};o.headers={...i,...p,...s.headers};const y=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysRegionSyncPost:async(e={})=>{const s="/api/sysRegion/sync",n=new URL(s,"https://example.com");let t;a&&(t=a.baseOptions);const r={method:"POST",...t,...e},o={},i={};if(a&&a.accessToken){const p=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;o.Authorization="Bearer "+p}const l=new URLSearchParams(n.search);for(const p in i)l.set(p,i[p]);for(const p in e.params)l.set(p,e.params[p]);n.search=new URLSearchParams(l).toString();let h=t&&t.headers?t.headers:{};return r.headers={...o,...h,...e.headers},{url:n.pathname+n.search+n.hash,options:r}},apiSysRegionUpdatePost:async(e,s={})=>{const n="/api/sysRegion/update",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},i={},l={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;i.Authorization="Bearer "+c}i["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in l)h.set(c,l[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let p=r&&r.headers?r.headers:{};o.headers={...i,...p,...s.headers};const y=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=y?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}}}},m=function(a){return{async apiSysRegionAddPost(e,s){const n=await R(a).apiSysRegionAddPost(e,s);return(t=P,r=d)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysRegionDeletePost(e,s){const n=await R(a).apiSysRegionDeletePost(e,s);return(t=P,r=d)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysRegionListGet(e,s){const n=await R(a).apiSysRegionListGet(e,s);return(t=P,r=d)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysRegionPagePost(e,s){const n=await R(a).apiSysRegionPagePost(e,s);return(t=P,r=d)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysRegionSyncPost(e){const s=await R(a).apiSysRegionSyncPost(e);return(n=P,t=d)=>{const r={...s.options,url:t+s.url};return n.request(r)}},async apiSysRegionUpdatePost(e,s){const n=await R(a).apiSysRegionUpdatePost(e,s);return(t=P,r=d)=>{const o={...n.options,url:r+n.url};return t.request(o)}}}};class w extends S{async apiSysRegionAddPost(e,s){return m(this.configuration).apiSysRegionAddPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysRegionDeletePost(e,s){return m(this.configuration).apiSysRegionDeletePost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysRegionListGet(e,s){return m(this.configuration).apiSysRegionListGet(e,s).then(n=>n(this.axios,this.basePath))}async apiSysRegionPagePost(e,s){return m(this.configuration).apiSysRegionPagePost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysRegionSyncPost(e){return m(this.configuration).apiSysRegionSyncPost(e).then(s=>s(this.axios,this.basePath))}async apiSysRegionUpdatePost(e,s){return m(this.configuration).apiSysRegionUpdatePost(e,s).then(n=>n(this.axios,this.basePath))}}export{w as S};
