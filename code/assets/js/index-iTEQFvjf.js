import{k as f,v as V,L as I,t,x as v,M as x,D as e,A as l,O as w,S as _}from"./store-dof5ccn5.js";const $={class:"form-i18n-container layout-pd"},z={style:{"text-align":"center","margin-top":"15px"}},C=f({name:"pagesFormI18n"}),k=f({...C,setup(L){const{locale:p}=V.useI18n(),a=I({radio:"zh-cn",form:{name:"",email:"",autograph:""}}),c=()=>{p.value=a.radio};return(n,o)=>{const r=t("el-radio-button"),i=t("el-radio-group"),d=t("el-input"),s=t("el-form-item"),u=t("el-col"),b=t("el-row"),g=t("el-form"),h=t("el-card");return v(),x("div",$,[e(h,{shadow:"hover",header:"表单国际化演示(不适用于动态项 form-item)"},{default:l(()=>[w("div",z,[e(i,{modelValue:a.radio,"onUpdate:modelValue":o[0]||(o[0]=m=>a.radio=m),size:"default",onChange:c},{default:l(()=>[e(r,{label:"zh-cn"},{default:l(()=>[_("中文简体")]),_:1}),e(r,{label:"en"},{default:l(()=>[_("英文")]),_:1}),e(r,{label:"zh-tw"},{default:l(()=>[_("中文繁体")]),_:1})]),_:1},8,["modelValue"])]),e(g,{model:a.form,size:"default","label-width":"100px",class:"mt35 mb35"},{default:l(()=>[e(b,{gutter:35},{default:l(()=>[e(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:l(()=>[e(s,{label:n.$t("message.formI18nLabel.name")},{default:l(()=>[e(d,{modelValue:a.form.name,"onUpdate:modelValue":o[1]||(o[1]=m=>a.form.name=m),placeholder:n.$t("message.formI18nPlaceholder.name"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:l(()=>[e(s,{label:n.$t("message.formI18nLabel.email")},{default:l(()=>[e(d,{modelValue:a.form.email,"onUpdate:modelValue":o[2]||(o[2]=m=>a.form.email=m),placeholder:n.$t("message.formI18nPlaceholder.email"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:l(()=>[e(s,{label:n.$t("message.formI18nLabel.autograph")},{default:l(()=>[e(d,{modelValue:a.form.autograph,"onUpdate:modelValue":o[3]||(o[3]=m=>a.form.autograph=m),placeholder:n.$t("message.formI18nPlaceholder.autograph"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});export{k as default};
