function c(e,t,o,r){const a=typeof r<"u"?[r,e]:[e],n=new Blob(a,{type:o||"application/octet-stream"}),d=window.URL.createObjectURL(n),i=document.createElement("a");i.style.display="none",i.href=d,i.setAttribute("download",t),typeof i.download>"u"&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(d)}function l({url:e,target:t="_blank",fileName:o}){const r=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,a=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(r||a){const n=document.createElement("a");if(n.href=e,n.target=t,n.download!==void 0&&(n.download=o||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const d=document.createEvent("MouseEvents");return d.initEvent("click",!0,!0),n.dispatchEvent(d),!0}}return e.indexOf("?")===-1&&(e+="?download"),s(e,{target:t}),!0}function s(e,t){const{target:o="__blank",noopener:r=!0,noreferrer:a=!0}=t||{},n=[];r&&n.push("noopener=yes"),a&&n.push("noreferrer=yes"),window.open(e,o,n.join(","))}function f(e){var t=e["content-disposition"].split(";")[1].split("filename=")[1],o=e["content-disposition"].split("filename*=")[1];return o&&(t=decodeURIComponent(o.split("''")[1])),t}export{c as a,l as d,f as g};
