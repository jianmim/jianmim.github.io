import{b as y}from"./store-dof5ccn5.js";import{B as u,d as m,R as T}from"./index-xdJ7pE-g.js";const d=function(a){return{apiSysPrintAddPost:async(s,e={})=>{const n="/api/sysPrint/add",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...e},p={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;p.Authorization="Bearer "+c}p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(t.search);for(const c in h)i.set(c,h[c]);for(const c in e.params)i.set(c,e.params[c]);t.search=new URLSearchParams(i).toString();let P=r&&r.headers?r.headers:{};o.headers={...p,...P,...e.headers};const l=typeof s!="string"||o.headers["Content-Type"]==="application/json";return o.data=l?JSON.stringify(s!==void 0?s:{}):s||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysPrintDeletePost:async(s,e={})=>{const n="/api/sysPrint/delete",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...e},p={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;p.Authorization="Bearer "+c}p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(t.search);for(const c in h)i.set(c,h[c]);for(const c in e.params)i.set(c,e.params[c]);t.search=new URLSearchParams(i).toString();let P=r&&r.headers?r.headers:{};o.headers={...p,...P,...e.headers};const l=typeof s!="string"||o.headers["Content-Type"]==="application/json";return o.data=l?JSON.stringify(s!==void 0?s:{}):s||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysPrintPagePost:async(s,e={})=>{const n="/api/sysPrint/page",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...e},p={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;p.Authorization="Bearer "+c}p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(t.search);for(const c in h)i.set(c,h[c]);for(const c in e.params)i.set(c,e.params[c]);t.search=new URLSearchParams(i).toString();let P=r&&r.headers?r.headers:{};o.headers={...p,...P,...e.headers};const l=typeof s!="string"||o.headers["Content-Type"]==="application/json";return o.data=l?JSON.stringify(s!==void 0?s:{}):s||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysPrintPrintNameGet:async(s,e={})=>{if(s==null)throw new T("name","Required parameter name was null or undefined when calling apiSysPrintPrintNameGet.");const n="/api/sysPrint/print/{name}".replace("{name}",encodeURIComponent(String(s))),t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"GET",...r,...e},p={},h={};if(a&&a.accessToken){const l=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;p.Authorization="Bearer "+l}const i=new URLSearchParams(t.search);for(const l in h)i.set(l,h[l]);for(const l in e.params)i.set(l,e.params[l]);t.search=new URLSearchParams(i).toString();let P=r&&r.headers?r.headers:{};return o.headers={...p,...P,...e.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysPrintUpdatePost:async(s,e={})=>{const n="/api/sysPrint/update",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...e},p={},h={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;p.Authorization="Bearer "+c}p["Content-Type"]="application/json-patch+json";const i=new URLSearchParams(t.search);for(const c in h)i.set(c,h[c]);for(const c in e.params)i.set(c,e.params[c]);t.search=new URLSearchParams(i).toString();let P=r&&r.headers?r.headers:{};o.headers={...p,...P,...e.headers};const l=typeof s!="string"||o.headers["Content-Type"]==="application/json";return o.data=l?JSON.stringify(s!==void 0?s:{}):s||"",{url:t.pathname+t.search+t.hash,options:o}}}},S=function(a){return{async apiSysPrintAddPost(s,e){const n=await d(a).apiSysPrintAddPost(s,e);return(t=y,r=m)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysPrintDeletePost(s,e){const n=await d(a).apiSysPrintDeletePost(s,e);return(t=y,r=m)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysPrintPagePost(s,e){const n=await d(a).apiSysPrintPagePost(s,e);return(t=y,r=m)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysPrintPrintNameGet(s,e){const n=await d(a).apiSysPrintPrintNameGet(s,e);return(t=y,r=m)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysPrintUpdatePost(s,e){const n=await d(a).apiSysPrintUpdatePost(s,e);return(t=y,r=m)=>{const o={...n.options,url:r+n.url};return t.request(o)}}}};class O extends u{async apiSysPrintAddPost(s,e){return S(this.configuration).apiSysPrintAddPost(s,e).then(n=>n(this.axios,this.basePath))}async apiSysPrintDeletePost(s,e){return S(this.configuration).apiSysPrintDeletePost(s,e).then(n=>n(this.axios,this.basePath))}async apiSysPrintPagePost(s,e){return S(this.configuration).apiSysPrintPagePost(s,e).then(n=>n(this.axios,this.basePath))}async apiSysPrintPrintNameGet(s,e){return S(this.configuration).apiSysPrintPrintNameGet(s,e).then(n=>n(this.axios,this.basePath))}async apiSysPrintUpdatePost(s,e){return S(this.configuration).apiSysPrintUpdatePost(s,e).then(n=>n(this.axios,this.basePath))}}export{O as S};
