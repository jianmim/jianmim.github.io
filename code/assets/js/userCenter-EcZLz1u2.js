import{k as W,s as we,r as B,L as ve,p as ye,w as be,t,a6 as Y,x as F,M as Fe,D as e,A as a,O as n,B as V,F as g,T as k,S as i,y as P,aI as q,ai as z,aJ as Ve,X as xe,Y as he}from"./store-mQZkmHj-.js";import{f as Se,g as x,y as Be}from"./index-lw7p-_pG.js";import Pe from"./orgTree-64J2YTiB.js";import Ue from"./index-3narxeUY.js";import{S as I}from"./sys-file-api-F5kUk1jA.js";import{S as O}from"./sys-user-api-4XI57V_l.js";import{_ as ke}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./sys-org-api-I_KY1ixH.js";function Ce(b,C,N=null){var d=b.split(","),h=d[0].match(/:(.*?);/)[1],c=atob(d[1]);let w=c.length;for(var S=new Uint8Array(w);w--;)S[w]=c.charCodeAt(w);return new File([S],C,{type:N||h})}const Ne=b=>(xe("data-v-ac0c30cc"),b=b(),he(),b),De={class:"sys-userCenter-container"},Ie={class:"account-center-avatarHolder"},Oe={class:"username"},Te={class:"account-center-org"},Re={class:"image-signature"},Me={style:{color:"#fff"}},Ae=Ne(()=>n("span",null," 电子签名 ",-1)),Ee={style:{border:"1px dashed gray",width:"100%",height:"250px"}},Le={style:{"margin-top":"10px"}},Ye={style:{display:"inline"}},qe={style:{display:"inline","margin-left":"30px"}},ze={class:"dialog-footer"},We=W({name:"sysUserCenter"}),Ge=W({...We,setup(b,{expose:C}){const N=Se(),{userInfos:d}=we(N),h=B(),c=B(),w=B(),S=B(),T=B(),l=ve({loading:!1,avatarLoading:!1,signDialogVisible:!1,ruleFormBase:{},ruleFormPassword:{},signOptions:{penColor:"#000000",minWidth:1,onBegin:()=>{c.value.resizeCanvas()}},signFileList:[],passwordNew2:"",cropperTitle:""});ye(async()=>{l.loading=!0;var r=await x(O).apiSysUserBaseInfoGet();l.ruleFormBase=r.data.result??{account:""},l.loading=!1}),be(l.signOptions,()=>{c.value.signaturePad.penColor=l.signOptions.penColor,c.value.signaturePad.minWidth=l.signOptions.minWidth});const G=async r=>{var u,v;var o=await x(I).apiSysFileUploadAvatarPostForm(r.img);d.value.avatar=((u=o.data.result)==null?void 0:u.filePath)+"/"+((v=o.data.result)==null?void 0:v.name)},H=()=>{l.signDialogVisible=!0},J=async()=>{var v,y;const{isEmpty:r,data:o}=c.value.saveSignature();if(!r){var u=await x(I).apiSysFileUploadSignaturePostForm(Ce(o,d.value.account+".png"));d.value.signature=((v=u.data.result)==null?void 0:v.filePath)+"/"+((y=u.data.result)==null?void 0:y.name),R(),l.signDialogVisible=!1}},X=()=>{c.value.undoSignature()},R=()=>{c.value.clearSignature()},j=async r=>{var u;var o=await x(I).apiSysFileUploadSignaturePostForm(r.raw);d.value.signature=((u=o.data.result)==null?void 0:u.url)+""},K=(r,o)=>{l.signFileList=o},Q=()=>{var r;(r=w.value)==null||r.validate(async o=>{o&&z.confirm("确定修改个人基础信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await x(O).apiSysUserBaseInfoPost(l.ruleFormBase)})})},Z=(r,o,u)=>{l.passwordNew2!=l.ruleFormPassword.passwordNew?u(new Error("两次密码不一致！")):u()},$=()=>{l.ruleFormPassword.passwordOld="",l.ruleFormPassword.passwordNew="",l.passwordNew2=""},ee=()=>{var r;(r=S.value)==null||r.validate(async o=>{o&&(await x(O).apiSysUserChangePwdPost(l.ruleFormPassword),z.confirm("密码已修改，是否重新登录系统？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{Be()}))})},le=()=>{var r;l.cropperTitle="更换头像",(r=T.value)==null||r.openDialog(d.value.avatar)},ae=()=>{l.avatarLoading=!0},oe=()=>{l.avatarLoading=!1},se=r=>{h.value.clearFiles();const o=r[0];o.uid=Ve(),h.value.handleStart(o)};return C({handleChangeSignFile:K}),(r,o)=>{const u=t("el-avatar"),v=t("ele-School"),y=t("el-icon"),te=t("ele-Mug"),re=t("ele-LocationInformation"),ne=t("el-image"),f=t("el-button"),ie=t("el-upload"),M=t("el-card"),m=t("el-col"),_=t("el-input"),p=t("el-form-item"),de=t("el-date-picker"),A=t("el-radio"),ue=t("el-radio-group"),E=t("el-row"),D=t("el-tab-pane"),pe=t("el-tabs"),me=t("ele-EditPen"),ce=t("VueSignaturePad"),_e=t("el-input-number"),fe=t("el-color-picker"),ge=t("el-dialog"),L=Y("loading"),U=Y("auth");return F(),Fe("div",De,[e(E,{gutter:8,style:{width:"100%"}},{default:a(()=>[e(m,{span:8,xs:24},{default:a(()=>[e(M,{shadow:"hover"},{default:a(()=>[n("div",Ie,[V(e(u,{size:100,src:g(d).avatar,onClick:le,"element-loading-spinner":"el-icon-Upload","element-loading-background":"rgba(0, 0, 0, 0.2)",onMouseenter:ae,onMouseleave:oe},null,8,["src"]),[[L,l.avatarLoading]]),n("div",Oe,k(g(d).realName),1)]),n("div",Te,[n("p",null,[e(y,null,{default:a(()=>[e(v)]),_:1}),i(),n("span",null,k(g(d).orgName??"超级管理员"),1)]),n("p",null,[e(y,null,{default:a(()=>[e(te)]),_:1}),i(),n("span",null,k(g(d).posName??"超级管理员"),1)]),n("p",null,[e(y,null,{default:a(()=>[e(re)]),_:1}),i(),n("span",null,k(g(d).address??"家庭住址"),1)])]),n("div",Re,[e(ne,{src:g(d).signature,fit:"contain",alt:"电子签名",loading:"lazy",style:{width:"100%",height:"100%"}},null,8,["src"])]),V((F(),P(f,{icon:"ele-Edit",type:"primary",onClick:H},{default:a(()=>[i(" 电子签名 ")]),_:1})),[[U,"sysFile:uploadSignature"]]),e(ie,{ref_key:"uploadSignRef",ref:h,action:"",accept:".png",limit:1,"show-file-list":!1,"auto-upload":!1,"on-change":j,"on-exceed":se,style:{display:"inline-block","margin-left":"12px",position:"absolute"}},{default:a(()=>[V((F(),P(f,{icon:"ele-UploadFilled"},{default:a(()=>[i("上传手写签名")]),_:1})),[[U,"sysFile:uploadSignature"]])]),_:1},512)]),_:1})]),_:1}),V((F(),P(m,{span:16,xs:24},{default:a(()=>[e(M,{shadow:"hover"},{default:a(()=>[e(pe,null,{default:a(()=>[e(D,{label:"基础信息"},{default:a(()=>[e(g(q),{model:l.ruleFormBase,ref_key:"ruleFormBaseRef",ref:w,"label-width":"auto"},{default:a(()=>[e(E,{gutter:35},{default:a(()=>[e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"真实姓名",prop:"realName",rules:[{required:!0,message:"真实姓名不能为空",trigger:"blur"}]},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.realName,"onUpdate:modelValue":o[0]||(o[0]=s=>l.ruleFormBase.realName=s),placeholder:"真实姓名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"昵称"},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.nickName,"onUpdate:modelValue":o[1]||(o[1]=s=>l.ruleFormBase.nickName=s),placeholder:"昵称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"手机号码",prop:"phone",rules:[{required:!0,message:"手机号码不能为空",trigger:"blur"}]},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.phone,"onUpdate:modelValue":o[2]||(o[2]=s=>l.ruleFormBase.phone=s),placeholder:"手机号码",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"邮箱"},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.email,"onUpdate:modelValue":o[3]||(o[3]=s=>l.ruleFormBase.email=s),placeholder:"邮箱",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"出生日期",prop:"birthday",rules:[{required:!0,message:"出生日期不能为空",trigger:"blur"}]},{default:a(()=>[e(de,{modelValue:l.ruleFormBase.birthday,"onUpdate:modelValue":o[4]||(o[4]=s=>l.ruleFormBase.birthday=s),type:"date",placeholder:"出生日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:a(()=>[e(p,{label:"性别"},{default:a(()=>[e(ue,{modelValue:l.ruleFormBase.sex,"onUpdate:modelValue":o[5]||(o[5]=s=>l.ruleFormBase.sex=s)},{default:a(()=>[e(A,{label:1},{default:a(()=>[i("男")]),_:1}),e(A,{label:2},{default:a(()=>[i("女")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(p,{label:"地址"},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.address,"onUpdate:modelValue":o[6]||(o[6]=s=>l.ruleFormBase.address=s),placeholder:"地址",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(p,{label:"备注"},{default:a(()=>[e(_,{modelValue:l.ruleFormBase.remark,"onUpdate:modelValue":o[7]||(o[7]=s=>l.ruleFormBase.remark=s),placeholder:"备注",clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:a(()=>[e(p,null,{default:a(()=>[V((F(),P(f,{icon:"ele-SuccessFilled",type:"primary",onClick:Q},{default:a(()=>[i(" 保存基本信息 ")]),_:1})),[[U,"sysUser:baseInfo"]])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(D,{label:"组织机构"},{default:a(()=>[e(Pe,{ref:"orgTreeRef"},null,512)]),_:1}),e(D,{label:"修改密码"},{default:a(()=>[e(g(q),{ref_key:"ruleFormPasswordRef",ref:S,model:l.ruleFormPassword,"label-width":"auto"},{default:a(()=>[e(p,{label:"当前密码",prop:"passwordOld",rules:[{required:!0,message:"当前密码不能为空",trigger:"blur"}]},{default:a(()=>[e(_,{modelValue:l.ruleFormPassword.passwordOld,"onUpdate:modelValue":o[8]||(o[8]=s=>l.ruleFormPassword.passwordOld=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"新密码",prop:"passwordNew",rules:[{required:!0,message:"新密码不能为空",trigger:"blur"}]},{default:a(()=>[e(_,{modelValue:l.ruleFormPassword.passwordNew,"onUpdate:modelValue":o[9]||(o[9]=s=>l.ruleFormPassword.passwordNew=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(p,{label:"确认密码",prop:"passwordNew2",rules:[{validator:Z,required:!0,trigger:"blur"}]},{default:a(()=>[e(_,{modelValue:l.passwordNew2,"onUpdate:modelValue":o[10]||(o[10]=s=>l.passwordNew2=s),type:"password",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["rules"]),e(p,null,{default:a(()=>[e(f,{icon:"ele-Refresh",onClick:$},{default:a(()=>[i("重 置")]),_:1}),V((F(),P(f,{icon:"ele-SuccessFilled",type:"primary",onClick:ee},{default:a(()=>[i("确 定")]),_:1})),[[U,"sysUser:changePwd"]])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})]),_:1})),[[L,l.loading]])]),_:1}),e(ge,{modelValue:l.signDialogVisible,"onUpdate:modelValue":o[13]||(o[13]=s=>l.signDialogVisible=s),draggable:"",width:"600px"},{header:a(()=>[n("div",Me,[e(y,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:a(()=>[e(me)]),_:1}),Ae])]),footer:a(()=>[n("span",ze,[e(f,{onClick:X},{default:a(()=>[i("撤销")]),_:1}),e(f,{onClick:R},{default:a(()=>[i("清屏")]),_:1}),e(f,{type:"primary",onClick:J},{default:a(()=>[i("保存")]),_:1})])]),default:a(()=>[n("div",Ee,[e(ce,{ref_key:"signaturePadRef",ref:c,options:l.signOptions,style:{"background-color":"#fff"}},null,8,["options"])]),n("div",Le,[n("div",Ye,[i("画笔粗细："),e(_e,{modelValue:l.signOptions.minWidth,"onUpdate:modelValue":o[11]||(o[11]=s=>l.signOptions.minWidth=s),min:.5,max:2.5,step:.1,size:"small"},null,8,["modelValue"])]),n("div",qe,[i("画笔颜色："),e(fe,{modelValue:l.signOptions.penColor,"onUpdate:modelValue":o[12]||(o[12]=s=>l.signOptions.penColor=s),"color-format":"hex",size:"default"},null,8,["modelValue"])])])]),_:1},8,["modelValue"]),e(Ue,{ref_key:"cropperDialogRef",ref:T,title:l.cropperTitle,onUploadCropperImg:G},null,8,["title"])])}}}),el=ke(Ge,[["__scopeId","data-v-ac0c30cc"]]);export{el as default};
