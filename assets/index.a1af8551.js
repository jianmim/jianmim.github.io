import{r as e}from"./index-80b03063.js";const a=()=>{const a={disabled:!1,left:0,right:0,top:0,bottom:0,faultTolerance:10},u=e(0),l=e(0),t=e(0),o=e(0),c=e(0),n=e(0),s=e(0),v=e(0),d=e(!1),h=e(!1),r=e(!1);let g;const i=()=>{c.value=t.value-u.value,n.value=o.value-l.value,s.value=Math.abs(c.value),v.value=Math.abs(n.value)},T=(e,u)=>{const{left:l,right:t,top:o,bottom:c}=a;return"x"===u?e<l?0:e>t?t-l:e-l:e<o?0:e>c?c-o:e-o};return{startX:u,startY:l,currentX:t,currentY:o,deltaX:c,deltaY:n,distanceX:s,distanceY:v,isVertical:d,isHorizontal:h,isClick:r,updateOptions:e=>{Object.assign(a,e)},onTouchStart:e=>{!a.disabled&&e.changedTouches[0]&&(u.value=T(e.changedTouches[0].pageX,"x"),l.value=T(e.changedTouches[0].pageY,"y"),g="touch")},onTouchMove:e=>{!a.disabled&&e.changedTouches[0]&&(t.value=T(e.changedTouches[0].pageX,"x"),o.value=T(e.changedTouches[0].pageY,"y"),i(),g="moving")},onTouchEnd:e=>{!a.disabled&&e.changedTouches[0]&&"end"!==g&&(t.value=T(e.changedTouches[0].pageX,"x"),o.value=T(e.changedTouches[0].pageY,"y"),i(),d.value=s.value<a.faultTolerance&&v.value>=a.faultTolerance,h.value=s.value>=a.faultTolerance&&v.value<a.faultTolerance,r.value=!h.value&&!d.value,g="end")}}};export{a as u};
