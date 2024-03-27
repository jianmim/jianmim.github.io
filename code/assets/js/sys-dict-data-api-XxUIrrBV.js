import{b as y}from"./store-mQZkmHj-.js";import{B as P,d,R as u}from"./index-lw7p-_pG.js";const S=function(s){return{apiSysDictDataAddPost:async(a,e={})=>{const c="/api/sysDictData/add",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"POST",...t,...e},l={},p={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+o}l["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(r.search);for(const o in p)i.set(o,p[o]);for(const o in e.params)i.set(o,e.params[o]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};n.headers={...l,...D,...e.headers};const h=typeof a!="string"||n.headers["Content-Type"]==="application/json";return n.data=h?JSON.stringify(a!==void 0?a:{}):a||"",{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataDataListCodeGet:async(a,e={})=>{if(a==null)throw new u("code","Required parameter code was null or undefined when calling apiSysDictDataDataListCodeGet.");const c="/api/sysDictData/dataList/{code}".replace("{code}",encodeURIComponent(String(a))),r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"GET",...t,...e},l={},p={};if(s&&s.accessToken){const h=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+h}const i=new URLSearchParams(r.search);for(const h in p)i.set(h,p[h]);for(const h in e.params)i.set(h,e.params[h]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};return n.headers={...l,...D,...e.headers},{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataDataListGet:async(a,e,c={})=>{if(a==null)throw new u("code","Required parameter code was null or undefined when calling apiSysDictDataDataListGet.");const r="/api/sysDictData/dataList",t=new URL(r,"https://example.com");let n;s&&(n=s.baseOptions);const l={method:"GET",...n,...c},p={},i={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;p.Authorization="Bearer "+o}a!==void 0&&(i.Code=a),e!==void 0&&(i.Status=e);const D=new URLSearchParams(t.search);for(const o in i)D.set(o,i[o]);for(const o in c.params)D.set(o,c.params[o]);t.search=new URLSearchParams(D).toString();let h=n&&n.headers?n.headers:{};return l.headers={...p,...h,...c.headers},{url:t.pathname+t.search+t.hash,options:l}},apiSysDictDataDeletePost:async(a,e={})=>{const c="/api/sysDictData/delete",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"POST",...t,...e},l={},p={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+o}l["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(r.search);for(const o in p)i.set(o,p[o]);for(const o in e.params)i.set(o,e.params[o]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};n.headers={...l,...D,...e.headers};const h=typeof a!="string"||n.headers["Content-Type"]==="application/json";return n.data=h?JSON.stringify(a!==void 0?a:{}):a||"",{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataDetailGet:async(a,e,c={})=>{if(a==null)throw new u("id","Required parameter id was null or undefined when calling apiSysDictDataDetailGet.");const r="/api/sysDictData/detail",t=new URL(r,"https://example.com");let n;s&&(n=s.baseOptions);const l={method:"GET",...n,...c},p={},i={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;p.Authorization="Bearer "+o}e!==void 0&&(i.Status=e),a!==void 0&&(i.Id=a);const D=new URLSearchParams(t.search);for(const o in i)D.set(o,i[o]);for(const o in c.params)D.set(o,c.params[o]);t.search=new URLSearchParams(D).toString();let h=n&&n.headers?n.headers:{};return l.headers={...p,...h,...c.headers},{url:t.pathname+t.search+t.hash,options:l}},apiSysDictDataListGet:async(a,e={})=>{if(a==null)throw new u("dictTypeId","Required parameter dictTypeId was null or undefined when calling apiSysDictDataListGet.");const c="/api/sysDictData/list",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"GET",...t,...e},l={},p={};if(s&&s.accessToken){const h=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+h}a!==void 0&&(p.DictTypeId=a);const i=new URLSearchParams(r.search);for(const h in p)i.set(h,p[h]);for(const h in e.params)i.set(h,e.params[h]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};return n.headers={...l,...D,...e.headers},{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataPagePost:async(a,e={})=>{const c="/api/sysDictData/page",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"POST",...t,...e},l={},p={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+o}l["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(r.search);for(const o in p)i.set(o,p[o]);for(const o in e.params)i.set(o,e.params[o]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};n.headers={...l,...D,...e.headers};const h=typeof a!="string"||n.headers["Content-Type"]==="application/json";return n.data=h?JSON.stringify(a!==void 0?a:{}):a||"",{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataSetStatusPost:async(a,e={})=>{const c="/api/sysDictData/setStatus",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"POST",...t,...e},l={},p={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+o}l["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(r.search);for(const o in p)i.set(o,p[o]);for(const o in e.params)i.set(o,e.params[o]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};n.headers={...l,...D,...e.headers};const h=typeof a!="string"||n.headers["Content-Type"]==="application/json";return n.data=h?JSON.stringify(a!==void 0?a:{}):a||"",{url:r.pathname+r.search+r.hash,options:n}},apiSysDictDataUpdatePost:async(a,e={})=>{const c="/api/sysDictData/update",r=new URL(c,"https://example.com");let t;s&&(t=s.baseOptions);const n={method:"POST",...t,...e},l={},p={};if(s&&s.accessToken){const o=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;l.Authorization="Bearer "+o}l["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(r.search);for(const o in p)i.set(o,p[o]);for(const o in e.params)i.set(o,e.params[o]);r.search=new URLSearchParams(i).toString();let D=t&&t.headers?t.headers:{};n.headers={...l,...D,...e.headers};const h=typeof a!="string"||n.headers["Content-Type"]==="application/json";return n.data=h?JSON.stringify(a!==void 0?a:{}):a||"",{url:r.pathname+r.search+r.hash,options:n}}}},m=function(s){return{async apiSysDictDataAddPost(a,e){const c=await S(s).apiSysDictDataAddPost(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataDataListCodeGet(a,e){const c=await S(s).apiSysDictDataDataListCodeGet(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataDataListGet(a,e,c){const r=await S(s).apiSysDictDataDataListGet(a,e,c);return(t=y,n=d)=>{const l={...r.options,url:n+r.url};return t.request(l)}},async apiSysDictDataDeletePost(a,e){const c=await S(s).apiSysDictDataDeletePost(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataDetailGet(a,e,c){const r=await S(s).apiSysDictDataDetailGet(a,e,c);return(t=y,n=d)=>{const l={...r.options,url:n+r.url};return t.request(l)}},async apiSysDictDataListGet(a,e){const c=await S(s).apiSysDictDataListGet(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataPagePost(a,e){const c=await S(s).apiSysDictDataPagePost(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataSetStatusPost(a,e){const c=await S(s).apiSysDictDataSetStatusPost(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}},async apiSysDictDataUpdatePost(a,e){const c=await S(s).apiSysDictDataUpdatePost(a,e);return(r=y,t=d)=>{const n={...c.options,url:t+c.url};return r.request(n)}}}};class k extends P{async apiSysDictDataAddPost(a,e){return m(this.configuration).apiSysDictDataAddPost(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataDataListCodeGet(a,e){return m(this.configuration).apiSysDictDataDataListCodeGet(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataDataListGet(a,e,c){return m(this.configuration).apiSysDictDataDataListGet(a,e,c).then(r=>r(this.axios,this.basePath))}async apiSysDictDataDeletePost(a,e){return m(this.configuration).apiSysDictDataDeletePost(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataDetailGet(a,e,c){return m(this.configuration).apiSysDictDataDetailGet(a,e,c).then(r=>r(this.axios,this.basePath))}async apiSysDictDataListGet(a,e){return m(this.configuration).apiSysDictDataListGet(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataPagePost(a,e){return m(this.configuration).apiSysDictDataPagePost(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataSetStatusPost(a,e){return m(this.configuration).apiSysDictDataSetStatusPost(a,e).then(c=>c(this.axios,this.basePath))}async apiSysDictDataUpdatePost(a,e){return m(this.configuration).apiSysDictDataUpdatePost(a,e).then(c=>c(this.axios,this.basePath))}}export{k as S};
