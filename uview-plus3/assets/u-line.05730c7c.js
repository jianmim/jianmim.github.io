import{j as e,m as t,k as i,o as n,c as r,q as l,i as d}from"./index.6f985586.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";const o=a({name:"u-line",mixins:[t,i,{props:{color:{type:String,default:e.line.color},length:{type:[String,Number],default:e.line.length},direction:{type:String,default:e.line.direction},hairline:{type:Boolean,default:e.line.hairline},margin:{type:[String,Number],default:e.line.margin},dashed:{type:Boolean,default:e.line.dashed}}}],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=uni.$u.addUnit(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}},[["render",function(e,t,i,a,o,s){const h=d;return n(),r(h,{class:"u-line",style:l([s.lineStyle])},null,8,["style"])}],["__scopeId","data-v-d80a5a46"]]);export{o as _};
