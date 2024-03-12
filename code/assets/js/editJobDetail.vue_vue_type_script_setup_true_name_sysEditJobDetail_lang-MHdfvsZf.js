import{k,r as R,L as ee,l as F,t as s,x as f,M as le,D as l,A as t,O as y,T as te,S as r,B as D,C as T,F as N,y as x,G as V,as as oe}from"./store-dof5ccn5.js";import{g as B}from"./index-zQlakb1H.js";import{S as C}from"./sys-job-api-81hlTwQe.js";var p=(m=>(m[m.NUMBER_0=0]="NUMBER_0",m[m.NUMBER_1=1]="NUMBER_1",m[m.NUMBER_2=2]="NUMBER_2",m))(p||{});const ae=`#region using

using Furion;
using Furion.Logging;
using Furion.RemoteRequest.Extensions;
using Furion.Schedule;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Data;
using System.Linq.Dynamic.Core;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Yitter.IdGenerator;

#endregion

namespace Admin.NET.Core;

/// <summary>
/// 动态作业任务
/// </summary>
[JobDetail("你的作业编号")]
public class DynamicJob : IJob
{
    private readonly IServiceProvider _serviceProvider;

    public DynamicJob(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _serviceProvider.CreateScope();
        
        // 获取用户仓储
        // var rep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysUser>>();

        // 请求网址
        // var result = await "http://www.baidu.com".GetAsStringAsync();
        // Console.WriteLine(result);

        // 日志
        // Log.Information("日志消息");
    }
}`,se={class:"sys-jobDetail-container"},re={style:{color:"#fff"}},ie={class:"dialog-footer"},ne=k({name:"sysEditJobDetail"}),pe=k({...ne,props:{title:String},emits:["handleQuery"],setup(m,{expose:P,emit:q}){const b={get:'{"Method":"GET"}',post:'{"Method":"POST"}',put:'{"Method":"PUT"}',delete:'{"Method":"DELETE"}'},I=m,L=q,M=R(),U=R(),e=ee({isShowDialog:!1,selectedTabName:"0",ruleForm:{},httpJobMessage:{requestUri:"",httpMethod:b.get,body:""}}),v=F(()=>e.ruleForm.id!=null&&e.ruleForm.id>0),O=F(()=>e.ruleForm.createType===p.NUMBER_1),_=F(()=>e.ruleForm.createType===p.NUMBER_2);var S=null;const A=()=>{S=oe.create(U.value,{theme:"vs-dark",value:"",language:"csharp",formatOnPaste:!0,wordWrap:"on",wrappingIndent:"indent",folding:!0,foldingHighlight:!0,foldingStrategy:"indentation",showFoldingControls:"always",disableLayerHinting:!0,emptySelectionClipboard:!1,selectionClipboard:!1,automaticLayout:!0,codeLens:!1,scrollBeyondLastLine:!1,colorDecorators:!0,accessibilitySupport:"auto",lineNumbers:"on",lineNumbersMinChars:5,readOnly:!1})},H=i=>{var o;e.selectedTabName="0",e.ruleForm=JSON.parse(JSON.stringify(i)),e.isShowDialog=!0,(o=M.value)==null||o.resetFields(),i.id&&e.ruleForm.createType===p.NUMBER_2&&(e.httpJobMessage=J(e.ruleForm.properties)),setTimeout(()=>{S==null&&A(),S.setValue(i.id==null?ae:e.ruleForm.scriptCode)},1)},G=()=>{L("handleQuery"),e.isShowDialog=!1},j=()=>{e.isShowDialog=!1},z=()=>{M.value.validate(async i=>{if(i){if(e.ruleForm.createType===p.NUMBER_1?e.ruleForm.scriptCode=S.getValue():e.ruleForm.scriptCode="",e.ruleForm.createType===p.NUMBER_2){const c={HttpJob:JSON.stringify({RequestUri:e.httpJobMessage.requestUri,HttpMethod:JSON.parse(e.httpJobMessage.httpMethod+""),Body:e.httpJobMessage.body,ClientName:"HttpJob",EnsureSuccessStatusCode:!0})};e.ruleForm.properties=JSON.stringify(c)}e.ruleForm.id!=null&&e.ruleForm.id>0?await B(C).apiSysJobUpdateJobDetailPost(e.ruleForm):await B(C).apiSysJobAddJobDetailPost(e.ruleForm),G()}})},J=i=>{if(i==null||i==="")return{};const o=JSON.parse(i),c=JSON.parse(o.HttpJob);return{requestUri:c.RequestUri,httpMethod:JSON.stringify(c.HttpMethod),body:c.Body}};return P({httpMethodDef:b,openDialog:H,getHttpJobMessage:J}),(i,o)=>{const c=s("ele-Edit"),Q=s("el-icon"),g=s("el-input"),d=s("el-form-item"),u=s("el-col"),n=s("el-radio"),h=s("el-radio-group"),W=s("SvgIcon"),Y=s("el-tooltip"),K=s("el-row"),X=s("el-form"),w=s("el-tab-pane"),Z=s("el-tabs"),E=s("el-button"),$=s("el-dialog");return f(),le("div",se,[l($,{modelValue:e.isShowDialog,"onUpdate:modelValue":o[11]||(o[11]=a=>e.isShowDialog=a),draggable:"","close-on-click-modal":!1,width:"900px"},{header:t(()=>[y("div",re,[l(Q,{size:"16",style:{"margin-right":"3px",display:"inline","vertical-align":"middle"}},{default:t(()=>[l(c)]),_:1}),y("span",null,te(I.title),1)])]),footer:t(()=>[y("span",ie,[l(E,{onClick:j},{default:t(()=>[r("取 消")]),_:1}),l(E,{type:"primary",onClick:z},{default:t(()=>[r("确 定")]),_:1})])]),default:t(()=>[l(Z,{modelValue:e.selectedTabName,"onUpdate:modelValue":o[10]||(o[10]=a=>e.selectedTabName=a)},{default:t(()=>[l(w,{label:"作业信息"},{default:t(()=>[l(X,{model:e.ruleForm,ref_key:"ruleFormRef",ref:M,"label-width":"auto",style:{height:"500px"}},{default:t(()=>[l(K,{gutter:35},{default:t(()=>[l(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(d,{label:"作业编号",prop:"jobId",rules:[{required:!0,message:"作业编号不能为空",trigger:"blur"}]},{default:t(()=>[l(g,{modelValue:e.ruleForm.jobId,"onUpdate:modelValue":o[0]||(o[0]=a=>e.ruleForm.jobId=a),placeholder:"作业编号",disabled:v.value,clearable:""},null,8,["modelValue","disabled"])]),_:1})]),_:1}),l(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(d,{label:"组名称",prop:"groupName",rules:[{required:!0,message:"组名称不能为空",trigger:"blur"}]},{default:t(()=>[l(g,{modelValue:e.ruleForm.groupName,"onUpdate:modelValue":o[1]||(o[1]=a=>e.ruleForm.groupName=a),placeholder:"组名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"创建类型"},{default:t(()=>[l(h,{modelValue:e.ruleForm.createType,"onUpdate:modelValue":o[2]||(o[2]=a=>e.ruleForm.createType=a),disabled:v.value},{default:t(()=>[D(l(n,{label:N(p).NUMBER_0},{default:t(()=>[r("内置")]),_:1},8,["label"]),[[T,v.value]]),l(n,{label:N(p).NUMBER_1},{default:t(()=>[r("脚本")]),_:1},8,["label"]),l(n,{label:N(p).NUMBER_2},{default:t(()=>[r("Http请求")]),_:1},8,["label"])]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),l(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(d,{label:"执行方式"},{default:t(()=>[l(h,{modelValue:e.ruleForm.concurrent,"onUpdate:modelValue":o[3]||(o[3]=a=>e.ruleForm.concurrent=a)},{default:t(()=>[l(n,{label:!0},{default:t(()=>[r("并行")]),_:1}),l(n,{label:!1},{default:t(()=>[r("串行")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),D(l(u,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[l(d,{prop:"includeAnnotations"},{label:t(()=>[y("div",null,[r(" 扫描触发器 "),l(Y,{"raw-content":"",content:"此参数只在新增作业时生效<br/>扫描定义在作业上的触发器",placement:"top"},{default:t(()=>[l(W,{name:"fa fa-question-circle-o",size:16,style:{"vertical-align":"middle"}})]),_:1})])]),default:t(()=>[l(h,{modelValue:e.ruleForm.includeAnnotations,"onUpdate:modelValue":o[4]||(o[4]=a=>e.ruleForm.includeAnnotations=a)},{default:t(()=>[l(n,{label:!0},{default:t(()=>[r("是")]),_:1}),l(n,{label:!1},{default:t(()=>[r("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},512),[[T,!v.value&&!_.value]]),l(u,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"描述信息"},{default:t(()=>[l(g,{modelValue:e.ruleForm.description,"onUpdate:modelValue":o[5]||(o[5]=a=>e.ruleForm.description=a),placeholder:"描述信息",clearable:"",type:"textarea",autosize:{minRows:1,maxRows:3}},null,8,["modelValue"])]),_:1})]),_:1}),_.value?V("",!0):(f(),x(u,{key:0,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"额外数据"},{default:t(()=>[l(g,{modelValue:e.ruleForm.properties,"onUpdate:modelValue":o[6]||(o[6]=a=>e.ruleForm.properties=a),placeholder:"额外数据",clearable:"",type:"textarea",autosize:{minRows:3,maxRows:6}},null,8,["modelValue"])]),_:1})]),_:1})),_.value?(f(),x(u,{key:1,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"请求地址"},{default:t(()=>[l(g,{modelValue:e.httpJobMessage.requestUri,"onUpdate:modelValue":o[7]||(o[7]=a=>e.httpJobMessage.requestUri=a),placeholder:"请求地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):V("",!0),_.value?(f(),x(u,{key:2,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"请求方法"},{default:t(()=>[l(h,{modelValue:e.httpJobMessage.httpMethod,"onUpdate:modelValue":o[8]||(o[8]=a=>e.httpJobMessage.httpMethod=a)},{default:t(()=>[l(n,{label:b.get},{default:t(()=>[r("Get")]),_:1},8,["label"]),l(n,{label:b.post},{default:t(()=>[r("Post")]),_:1},8,["label"]),l(n,{label:b.put},{default:t(()=>[r("Put")]),_:1},8,["label"]),l(n,{label:b.delete},{default:t(()=>[r("Delete")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})):V("",!0),_.value?(f(),x(u,{key:3,xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:t(()=>[l(d,{label:"请求报文体"},{default:t(()=>[l(g,{modelValue:e.httpJobMessage.body,"onUpdate:modelValue":o[9]||(o[9]=a=>e.httpJobMessage.body=a),placeholder:"请求报文体",clearable:"",type:"textarea",autosize:{minRows:3,maxRows:6}},null,8,["modelValue"])]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1},8,["model"])]),_:1}),l(w,{label:"脚本代码",disabled:!O.value},{default:t(()=>[y("div",{ref_key:"monacoEditorRef",ref:U,style:{width:"100%",height:"500px"}},null,512)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{p as J,pe as _};
