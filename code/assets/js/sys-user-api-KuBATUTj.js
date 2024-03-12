import{b as d}from"./store-dof5ccn5.js";import{B as u,d as P,R as m}from"./index-zQlakb1H.js";const U=function(a){return{apiSysUserAddPost:async(e,s={})=>{const n="/api/sysUser/add",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserBaseInfoGet:async(e={})=>{const s="/api/sysUser/baseInfo",n=new URL(s,"https://example.com");let t;a&&(t=a.baseOptions);const r={method:"GET",...t,...e},o={},l={};if(a&&a.accessToken){const y=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;o.Authorization="Bearer "+y}const i=new URLSearchParams(n.search);for(const y in l)i.set(y,l[y]);for(const y in e.params)i.set(y,e.params[y]);n.search=new URLSearchParams(i).toString();let h=t&&t.headers?t.headers:{};return r.headers={...o,...h,...e.headers},{url:n.pathname+n.search+n.hash,options:r}},apiSysUserBaseInfoPost:async(e,s={})=>{const n="/api/sysUser/baseInfo",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserChangePwdPost:async(e,s={})=>{const n="/api/sysUser/changePwd",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserDeletePost:async(e,s={})=>{const n="/api/sysUser/delete",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserGrantRolePost:async(e,s={})=>{const n="/api/sysUser/grantRole",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserOwnExtOrgListUserIdGet:async(e,s={})=>{if(e==null)throw new m("userId","Required parameter userId was null or undefined when calling apiSysUserOwnExtOrgListUserIdGet.");const n="/api/sysUser/ownExtOrgList/{userId}".replace("{userId}",encodeURIComponent(String(e))),t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"GET",...r,...s},l={},i={};if(a&&a.accessToken){const p=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+p}const h=new URLSearchParams(t.search);for(const p in i)h.set(p,i[p]);for(const p in s.params)h.set(p,s.params[p]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};return o.headers={...l,...y,...s.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysUserOwnRoleListUserIdGet:async(e,s={})=>{if(e==null)throw new m("userId","Required parameter userId was null or undefined when calling apiSysUserOwnRoleListUserIdGet.");const n="/api/sysUser/ownRoleList/{userId}".replace("{userId}",encodeURIComponent(String(e))),t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"GET",...r,...s},l={},i={};if(a&&a.accessToken){const p=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+p}const h=new URLSearchParams(t.search);for(const p in i)h.set(p,i[p]);for(const p in s.params)h.set(p,s.params[p]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};return o.headers={...l,...y,...s.headers},{url:t.pathname+t.search+t.hash,options:o}},apiSysUserPagePost:async(e,s={})=>{const n="/api/sysUser/page",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserResetPwdPost:async(e,s={})=>{const n="/api/sysUser/resetPwd",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserSetStatusPost:async(e,s={})=>{const n="/api/sysUser/setStatus",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}},apiSysUserUpdatePost:async(e,s={})=>{const n="/api/sysUser/update",t=new URL(n,"https://example.com");let r;a&&(r=a.baseOptions);const o={method:"POST",...r,...s},l={},i={};if(a&&a.accessToken){const c=typeof a.accessToken=="function"?await a.accessToken():await a.accessToken;l.Authorization="Bearer "+c}l["Content-Type"]="application/json-patch+json";const h=new URLSearchParams(t.search);for(const c in i)h.set(c,i[c]);for(const c in s.params)h.set(c,s.params[c]);t.search=new URLSearchParams(h).toString();let y=r&&r.headers?r.headers:{};o.headers={...l,...y,...s.headers};const p=typeof e!="string"||o.headers["Content-Type"]==="application/json";return o.data=p?JSON.stringify(e!==void 0?e:{}):e||"",{url:t.pathname+t.search+t.hash,options:o}}}},S=function(a){return{async apiSysUserAddPost(e,s){const n=await U(a).apiSysUserAddPost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserBaseInfoGet(e){const s=await U(a).apiSysUserBaseInfoGet(e);return(n=d,t=P)=>{const r={...s.options,url:t+s.url};return n.request(r)}},async apiSysUserBaseInfoPost(e,s){const n=await U(a).apiSysUserBaseInfoPost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserChangePwdPost(e,s){const n=await U(a).apiSysUserChangePwdPost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserDeletePost(e,s){const n=await U(a).apiSysUserDeletePost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserGrantRolePost(e,s){const n=await U(a).apiSysUserGrantRolePost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserOwnExtOrgListUserIdGet(e,s){const n=await U(a).apiSysUserOwnExtOrgListUserIdGet(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserOwnRoleListUserIdGet(e,s){const n=await U(a).apiSysUserOwnRoleListUserIdGet(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserPagePost(e,s){const n=await U(a).apiSysUserPagePost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserResetPwdPost(e,s){const n=await U(a).apiSysUserResetPwdPost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserSetStatusPost(e,s){const n=await U(a).apiSysUserSetStatusPost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}},async apiSysUserUpdatePost(e,s){const n=await U(a).apiSysUserUpdatePost(e,s);return(t=d,r=P)=>{const o={...n.options,url:r+n.url};return t.request(o)}}}};class T extends u{async apiSysUserAddPost(e,s){return S(this.configuration).apiSysUserAddPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserBaseInfoGet(e){return S(this.configuration).apiSysUserBaseInfoGet(e).then(s=>s(this.axios,this.basePath))}async apiSysUserBaseInfoPost(e,s){return S(this.configuration).apiSysUserBaseInfoPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserChangePwdPost(e,s){return S(this.configuration).apiSysUserChangePwdPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserDeletePost(e,s){return S(this.configuration).apiSysUserDeletePost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserGrantRolePost(e,s){return S(this.configuration).apiSysUserGrantRolePost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserOwnExtOrgListUserIdGet(e,s){return S(this.configuration).apiSysUserOwnExtOrgListUserIdGet(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserOwnRoleListUserIdGet(e,s){return S(this.configuration).apiSysUserOwnRoleListUserIdGet(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserPagePost(e,s){return S(this.configuration).apiSysUserPagePost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserResetPwdPost(e,s){return S(this.configuration).apiSysUserResetPwdPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserSetStatusPost(e,s){return S(this.configuration).apiSysUserSetStatusPost(e,s).then(n=>n(this.axios,this.basePath))}async apiSysUserUpdatePost(e,s){return S(this.configuration).apiSysUserUpdatePost(e,s).then(n=>n(this.axios,this.basePath))}}export{T as S};
