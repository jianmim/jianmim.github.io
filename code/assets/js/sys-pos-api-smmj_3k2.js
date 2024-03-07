import{b as y}from"./store-dof5ccn5.js";import{B as u,d}from"./index-xdJ7pE-g.js";const m=function(s){return{apiSysPosAddPost:async(e,a={})=>{const n="/api/sysPos/add",o=new URL(n,"https://example.com");let t;s&&(t=s.baseOptions);const c={method:"POST",...t,...a},i={},h={};if(s&&s.accessToken){const r=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;i.Authorization="Bearer "+r}i["Content-Type"]="application/json-patch+json";const p=new URLSearchParams(o.search);for(const r in h)p.set(r,h[r]);for(const r in a.params)p.set(r,a.params[r]);o.search=new URLSearchParams(p).toString();let l=t&&t.headers?t.headers:{};c.headers={...i,...l,...a.headers};const P=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=P?JSON.stringify(e!==void 0?e:{}):e||"",{url:o.pathname+o.search+o.hash,options:c}},apiSysPosDeletePost:async(e,a={})=>{const n="/api/sysPos/delete",o=new URL(n,"https://example.com");let t;s&&(t=s.baseOptions);const c={method:"POST",...t,...a},i={},h={};if(s&&s.accessToken){const r=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;i.Authorization="Bearer "+r}i["Content-Type"]="application/json-patch+json";const p=new URLSearchParams(o.search);for(const r in h)p.set(r,h[r]);for(const r in a.params)p.set(r,a.params[r]);o.search=new URLSearchParams(p).toString();let l=t&&t.headers?t.headers:{};c.headers={...i,...l,...a.headers};const P=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=P?JSON.stringify(e!==void 0?e:{}):e||"",{url:o.pathname+o.search+o.hash,options:c}},apiSysPosListGet:async(e,a,n={})=>{const o="/api/sysPos/list",t=new URL(o,"https://example.com");let c;s&&(c=s.baseOptions);const i={method:"GET",...c,...n},h={},p={};if(s&&s.accessToken){const r=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;h.Authorization="Bearer "+r}e!==void 0&&(p.Name=e),a!==void 0&&(p.Code=a);const l=new URLSearchParams(t.search);for(const r in p)l.set(r,p[r]);for(const r in n.params)l.set(r,n.params[r]);t.search=new URLSearchParams(l).toString();let P=c&&c.headers?c.headers:{};return i.headers={...h,...P,...n.headers},{url:t.pathname+t.search+t.hash,options:i}},apiSysPosUpdatePost:async(e,a={})=>{const n="/api/sysPos/update",o=new URL(n,"https://example.com");let t;s&&(t=s.baseOptions);const c={method:"POST",...t,...a},i={},h={};if(s&&s.accessToken){const r=typeof s.accessToken=="function"?await s.accessToken():await s.accessToken;i.Authorization="Bearer "+r}i["Content-Type"]="application/json-patch+json";const p=new URLSearchParams(o.search);for(const r in h)p.set(r,h[r]);for(const r in a.params)p.set(r,a.params[r]);o.search=new URLSearchParams(p).toString();let l=t&&t.headers?t.headers:{};c.headers={...i,...l,...a.headers};const P=typeof e!="string"||c.headers["Content-Type"]==="application/json";return c.data=P?JSON.stringify(e!==void 0?e:{}):e||"",{url:o.pathname+o.search+o.hash,options:c}}}},S=function(s){return{async apiSysPosAddPost(e,a){const n=await m(s).apiSysPosAddPost(e,a);return(o=y,t=d)=>{const c={...n.options,url:t+n.url};return o.request(c)}},async apiSysPosDeletePost(e,a){const n=await m(s).apiSysPosDeletePost(e,a);return(o=y,t=d)=>{const c={...n.options,url:t+n.url};return o.request(c)}},async apiSysPosListGet(e,a,n){const o=await m(s).apiSysPosListGet(e,a,n);return(t=y,c=d)=>{const i={...o.options,url:c+o.url};return t.request(i)}},async apiSysPosUpdatePost(e,a){const n=await m(s).apiSysPosUpdatePost(e,a);return(o=y,t=d)=>{const c={...n.options,url:t+n.url};return o.request(c)}}}};class A extends u{async apiSysPosAddPost(e,a){return S(this.configuration).apiSysPosAddPost(e,a).then(n=>n(this.axios,this.basePath))}async apiSysPosDeletePost(e,a){return S(this.configuration).apiSysPosDeletePost(e,a).then(n=>n(this.axios,this.basePath))}async apiSysPosListGet(e,a,n){return S(this.configuration).apiSysPosListGet(e,a,n).then(o=>o(this.axios,this.basePath))}async apiSysPosUpdatePost(e,a){return S(this.configuration).apiSysPosUpdatePost(e,a).then(n=>n(this.axios,this.basePath))}}export{A as S};
