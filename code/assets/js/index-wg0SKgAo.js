import{k as h,r as u,L as k,t as r,x,M as V,D as e,A as o,F as c,O as C,S as p,i as f,E as D,_}from"./store-mQZkmHj-.js";const P={class:"form-rules-container layout-pd"},A={class:"flex-margin"},I=h({name:"pagesFormRules"}),$=h({...I,setup(L){const v=f(()=>_(()=>import("./formRulesOne-kbbhJaqM.js"),__vite__mapDeps([0,1,2]),import.meta.url)),F=f(()=>_(()=>import("./formRulesTwo-Vetp2-Tg.js"),__vite__mapDeps([3,1,2]),import.meta.url)),g=f(()=>_(()=>import("./formRulesThree-lad4ps7B.js"),__vite__mapDeps([4,1,2]),import.meta.url)),a=u(),l=u(),n=u(),T=k({formRulesOneData:{name:"lyt",email:"lyt123@.com",autograph:"lyt123456",occupation:"1"}}),m=(i,d)=>new Promise(s=>{i.value.$refs[d].validate(t=>{t&&s(t)})}),w=()=>{a.value.$refs.formRulesOneRef.resetFields(),l.value.$refs.formRulesTwoRef.resetFields(),n.value.$refs.formRulesThreeRef.resetFields()},O=()=>{Promise.all([m(a,"formRulesOneRef"),m(l,"formRulesTwoRef"),m(n,"formRulesThreeRef")]).then(()=>{D.success("表单全部验证成功")})},y=()=>{w()};return(i,d)=>{const s=r("el-card"),t=r("SvgIcon"),R=r("el-button"),E=r("el-row");return x(),V("div",P,[e(s,{shadow:"hover",header:"表单组件1"},{default:o(()=>[e(c(v),{data:T.formRulesOneData,ref_key:"pagesFormRulesOneRef",ref:a},null,8,["data"])]),_:1}),e(s,{shadow:"hover",header:"表单组件2",class:"mt15"},{default:o(()=>[e(c(F),{ref_key:"pagesFormRulesTwoRef",ref:l},null,512)]),_:1}),e(s,{shadow:"hover",header:"表单组件3",class:"mt15"},{default:o(()=>[e(c(g),{ref_key:"pagesFormRulesThreeRef",ref:n},null,512)]),_:1}),e(E,{class:"flex mt15"},{default:o(()=>[C("div",A,[e(R,{size:"default",onClick:y},{default:o(()=>[e(t,{name:"ele-RefreshRight"}),p(" 重置表单 ")]),_:1}),e(R,{size:"default",type:"primary",onClick:O},{default:o(()=>[e(t,{name:"iconfont icon-shuxing"}),p(" 验证表单 ")]),_:1})])]),_:1})])}}});export{$ as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./formRulesOne-kbbhJaqM.js","./store-mQZkmHj-.js","../css/store-dzCp3yyn.css","./formRulesTwo-Vetp2-Tg.js","./formRulesThree-lad4ps7B.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}