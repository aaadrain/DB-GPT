(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1113],{47329:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/models",function(){return l(34962)}])},81799:function(e,a,l){"use strict";l.d(a,{A:function(){return u}});var t=l(85893),s=l(41468),n=l(19284),r=l(34041),i=l(25675),d=l.n(i),o=l(67294),c=l(67421);let m="/models/huggingface.svg";function u(e,a){var l,s;let{width:r,height:i}=a||{};return e?(0,t.jsx)(d(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:r||24,height:i||24,src:(null===(l=n.Hf[e])||void 0===l?void 0:l.icon)||m,alt:"llm"},(null===(s=n.Hf[e])||void 0===s?void 0:s.icon)||m):null}a.Z=function(e){let{onChange:a}=e,{t:l}=(0,c.$G)(),{modelList:i,model:d}=(0,o.useContext)(s.p);return!i||i.length<=0?null:(0,t.jsx)(r.default,{value:d,placeholder:l("choose_model"),className:"w-52",onChange:e=>{null==a||a(e)},children:i.map(e=>{var a;return(0,t.jsx)(r.default.Option,{children:(0,t.jsxs)("div",{className:"flex items-center",children:[u(e),(0,t.jsx)("span",{className:"ml-2",children:(null===(a=n.Hf[e])||void 0===a?void 0:a.label)||e})]})},e)})})}},98198:function(e,a,l){"use strict";l.d(a,{Z:function(){return u}});var t=l(85893),s=l(34041),n=l(25278),r=l(13457),i=l(84567),d=l(99859),o=l(67294),c=e=>{let{parentName:a,fields:l,form:c}=e,[m,u]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=c.getFieldValue(a);(null==e?void 0:e.type)&&!m&&u(e.type)},[c,a]);let p=e=>{let l;let o=e.param_type.toLowerCase(),c=[a,e.param_name];return l="str"===o||"string"===o?e.valid_values?(0,t.jsx)(s.default,{children:e.valid_values.map(e=>(0,t.jsx)(s.default.Option,{value:e,children:e},e))}):(0,t.jsx)(n.default,{}):"int"===o||"integer"===o||"number"===o||"float"===o?(0,t.jsx)(r.Z,{className:"w-full"}):"bool"===o||"boolean"===o?(0,t.jsx)(i.Z,{}):(0,t.jsx)(n.default,{}),(0,t.jsx)(d.default.Item,{label:e.label||e.param_name,name:c,valuePropName:"bool"===o||"boolean"===o?"checked":"value",tooltip:e.description,rules:m&&e.required?[{required:!0,message:"Please input ".concat(e.param_name)}]:[],children:l},e.param_name)};return(0,t.jsxs)("div",{className:"space-y-4 border rounded-md p-4",children:[(0,t.jsx)(d.default.Item,{label:"Type",name:[a,"type"],children:(0,t.jsx)(s.default,{onChange:e=>{u(e);let t=l[e]||[],s={type:e};t.forEach(e=>{s[e.param_name]=e.default_value}),c.setFieldsValue({[a]:s})},placeholder:"Select a type",children:Object.keys(l).map(e=>(0,t.jsx)(s.default.Option,{value:e,children:e},e))})}),m&&l[m]&&(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("h4",{className:"mb-4 text-base font-medium",children:[m," Configuration"]}),(0,t.jsx)("div",{className:"space-y-4",children:l[m].map(e=>p(e))})]})]})};let m=e=>!!Array.isArray(e)&&0!==e.length&&"object"==typeof e[0]&&null!==e[0]&&"key"in e[0]&&"label"in e[0];var u=function(e){let{params:a,form:l}=e;if((0,o.useEffect)(()=>{if(a){let e={};a.forEach(a=>{if(!a.nested_fields){let t=l.getFieldValue(a.param_name);void 0===t&&(e[a.param_name]=a.default_value)}}),l.setFieldsValue(e)}},[a,l]),!a||(null==a?void 0:a.length)<1)return null;let u=e=>{let l={...e};return null==a||a.forEach(e=>{if(e.nested_fields&&l[e.param_name]){let a=l[e.param_name];if(a.type){let t=e.nested_fields[a.type]||[],s={};t.forEach(e=>{void 0!==a[e.param_name]&&(s[e.param_name]=a[e.param_name])}),l[e.param_name]={type:a.type,...s}}}}),l},p=l.submit;return l.submit=()=>{let e=l.getFieldsValue(),a=u(e);l.setFieldsValue(a),p.call(l)},(0,t.jsx)("div",{className:"space-y-4",children:null==a?void 0:a.map(e=>(0,t.jsx)(d.default.Item,{label:(0,t.jsx)("p",{className:"whitespace-normal overflow-wrap-break-word",children:e.label||e.param_name}),name:e.param_name,initialValue:e.default_value,valuePropName:"bool"===e.param_type.toLowerCase()||"boolean"===e.param_type.toLowerCase()?"checked":"value",tooltip:e.description,rules:e.required?[{required:!0,message:"Please input ".concat(e.label||e.param_name)}]:[],children:function(e){var a,d,o,u;if(e.nested_fields)return(0,t.jsx)(c,{parentName:e.param_name,fields:e.nested_fields,form:l});let p=e.param_type.toLowerCase(),h=null===(a=e.ext_metadata)||void 0===a?void 0:null===(d=a.tags)||void 0===d?void 0:d.includes("fixed"),x=null===(o=e.ext_metadata)||void 0===o?void 0:null===(u=o.tags)||void 0===u?void 0:u.includes("privacy");return"str"===p||"string"===p?e.valid_values?m(e.valid_values)?(0,t.jsx)(s.default,{disabled:h,children:e.valid_values.map(e=>(0,t.jsx)(s.default.Option,{value:e.key,children:e.label},e.key))}):(0,t.jsx)(s.default,{disabled:h,children:e.valid_values.map(e=>(0,t.jsx)(s.default.Option,{value:e,children:e},e))}):x?(0,t.jsx)(n.default.Password,{disabled:h,autoComplete:"new-password",placeholder:"请输入密码"}):(0,t.jsx)(n.default,{disabled:h}):"int"===p||"integer"===p||"number"===p||"float"===p?(0,t.jsx)(r.Z,{className:"w-full",disabled:h}):"bool"===p||"boolean"===p?(0,t.jsx)(i.Z,{disabled:h}):(0,t.jsx)(n.default,{disabled:h})}(e)},e.param_name))})}},48218:function(e,a,l){"use strict";var t=l(85893),s=l(82353),n=l(16165),r=l(67294);a.Z=e=>{let{width:a,height:l,scene:i}=e,d=(0,r.useCallback)(()=>{switch(i){case"chat_knowledge":return s.je;case"chat_with_db_execute":return s.zM;case"chat_excel":return s.DL;case"chat_with_db_qa":case"chat_dba":return s.RD;case"chat_dashboard":return s.In;case"chat_agent":return s.si;case"chat_normal":return s.O7;default:return}},[i]);return(0,t.jsx)(n.Z,{className:"w-".concat(a||7," h-").concat(l||7),component:d()})}},91467:function(e,a,l){"use strict";l.d(a,{TH:function(){return x},ZS:function(){return f}});var t=l(85893),s=l(89705),n=l(83062),r=l(96074),i=l(45030),d=l(85418),o=l(93967),c=l.n(o),m=l(36609),u=l(25675),p=l.n(u);l(67294);var h=l(48218);l(11873);let x=e=>{let{onClick:a,Icon:l="/pictures/card_chat.png",text:s=(0,m.t)("start_chat")}=e;return"string"==typeof l&&(l=(0,t.jsx)(p(),{src:l,alt:l,width:17,height:15})),(0,t.jsxs)("div",{className:"flex items-center gap-1 text-default",onClick:e=>{e.stopPropagation(),a&&a()},children:[l,(0,t.jsx)("span",{children:s})]})},f=e=>{let{menu:a}=e;return(0,t.jsx)(d.Z,{menu:a,getPopupContainer:e=>e.parentNode,placement:"bottomRight",autoAdjustOverflow:!1,children:(0,t.jsx)(s.Z,{className:"p-2 hover:bg-white hover:dark:bg-black rounded-md"})})};a.ZP=e=>{let{RightTop:a,Tags:l,LeftBottom:s,RightBottom:d,onClick:o,rightTopHover:m=!0,logo:u,name:x,description:f,className:_,scene:v,code:j}=e;return"string"==typeof f&&(f=(0,t.jsx)("p",{className:"line-clamp-2 relative bottom-4 text-ellipsis min-h-[42px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]",children:f})),(0,t.jsx)("div",{className:c()("hover-underline-gradient flex justify-center mt-6 relative group w-1/3 px-2 mb-6",_),children:(0,t.jsxs)("div",{onClick:o,className:"backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-lg shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",children:[(0,t.jsxs)("div",{className:"flex items-end relative bottom-8 justify-between w-full",children:[(0,t.jsxs)("div",{className:"flex items-end gap-4 w-11/12  flex-1",children:[(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-sm w-14 h-14 flex items-center p-3",children:v?(0,t.jsx)(h.Z,{scene:v,width:14,height:14}):u&&(0,t.jsx)(p(),{src:u,width:44,height:44,alt:x,className:"w-8 min-w-8 rounded-full max-w-none"})}),(0,t.jsx)("div",{className:"flex-1",children:x.length>6?(0,t.jsx)(n.Z,{title:x,children:(0,t.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:x})}):(0,t.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:x})})]}),(0,t.jsx)("span",{className:c()("shrink-0",{hidden:m,"group-hover:block":m}),onClick:e=>{e.stopPropagation()},children:a})]}),f,(0,t.jsx)("div",{className:"relative bottom-2",children:l}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("div",{children:s}),(0,t.jsx)("div",{children:d})]}),j&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{className:"my-3"}),(0,t.jsx)(i.Z.Text,{copyable:!0,className:"absolute bottom-1 right-4 text-xs text-gray-500",children:j})]})]})})}},1771:function(e,a,l){"use strict";var t=l(85893),s=l(82353),n=l(41156),r=l(9641),i=l(16165),d=l(9020),o=l(92962),c=l(38545),m=l(50067),u=l(28459),p=l(92398),h=l(36609),x=l(11163);l(67294),l(53878),a.Z=function(e){let{children:a}=e,l=[{key:"app",name:(0,h.t)("App"),path:"/app",icon:(0,t.jsx)(n.Z,{})},{key:"flow",name:(0,h.t)("awel_flow"),icon:(0,t.jsx)(r.Z,{}),path:"/flow"},{key:"models",name:(0,h.t)("model_manage"),path:"/models",icon:(0,t.jsx)(i.Z,{component:s.IN})},{key:"database",name:(0,h.t)("Database"),icon:(0,t.jsx)(d.Z,{}),path:"/database"},{key:"knowledge",name:(0,h.t)("Knowledge_Space"),icon:(0,t.jsx)(o.Z,{}),path:"/knowledge"},{key:"prompt",name:(0,h.t)("Prompt"),icon:(0,t.jsx)(c.Z,{}),path:"/prompt"},{key:"dbgpts",name:(0,h.t)("dbgpts_community"),path:"/dbgpts",icon:(0,t.jsx)(m.Z,{})}],f=(0,x.useRouter)(),_=f.pathname.split("/")[2];return(0,t.jsx)("div",{className:"flex flex-col h-full w-full  dark:bg-gradient-dark bg-gradient-light bg-cover bg-center",children:(0,t.jsx)(u.ZP,{theme:{components:{Button:{},Segmented:{itemSelectedBg:"#2867f5",itemSelectedColor:"white"}}},children:(0,t.jsx)(p.Z,{activeKey:_,items:l.map(e=>({key:e.key,label:e.name,children:a,icon:e.icon})),onTabClick:e=>{f.push("/construct/".concat(e))}})})})}},34962:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return P}});var t=l(85893),s=l(76212),n=l(81799),r=l(34041),i=l(99859),d=l(45360),o=l(49288),c=l(83062),m=l(14726),u=l(67294),p=l(67421),h=l(72510),x=l(98198);let{Option:f}=r.default,_=i.default.Item,v=["llm","text2vec","reranker"];var j=function(e){var a;let{onCancel:l,onSuccess:j}=e,{t:b}=(0,p.$G)(),[g,y]=(0,u.useState)([]),[w,N]=(0,u.useState)(),[k,Z]=(0,u.useState)(),[C,P]=(0,u.useState)(null),[S,E]=(0,u.useState)(!1),[F]=i.default.useForm(),[O,V]=(0,u.useState)({}),[H,T]=(0,u.useState)([]);async function A(){let[,e]=await (0,s.Vx)((0,s.xv)());if(e&&e.length){let a=e.sort((e,a)=>e.enabled&&!a.enabled?-1:!e.enabled&&a.enabled?1:e.model.localeCompare(a.model));y(a);let l=a.reduce((e,a)=>{let l=a.provider;return e[l]||(e[l]=[]),e[l].push(a),e},{});V(l),T([])}}async function q(e){if(k&&w){E(!0);try{var a;let l=(e=>{let a={...e};return null==C||C.forEach(e=>{if(e.nested_fields&&a[e.param_name]){let l=a[e.param_name];if(l.type){let t=e.nested_fields[l.type]||[],s={};t.forEach(e=>{void 0!==l[e.param_name]&&(s[e.param_name]=l[e.param_name])}),a[e.param_name]={...s,type:l.type}}}}),a})(e),t=null===(a=O[k])||void 0===a?void 0:a.find(e=>e.model===l.name),n={host:(null==t?void 0:t.host)||"",port:(null==t?void 0:t.port)||0,model:l.name,worker_type:w,params:l},[,,r]=await (0,s.Vx)((0,s.NY)(n));(null==r?void 0:r.success)&&(d.ZP.success(b("start_model_success")),F.resetFields(),null==j||j())}catch(e){d.ZP.error(b("start_model_failed"))}finally{E(!1)}}}(0,u.useEffect)(()=>{A()},[]);let I=e=>(0,t.jsxs)("div",{className:"max-w-md",children:[(0,t.jsx)("div",{className:"whitespace-pre-wrap markdown-body",children:(0,t.jsx)(h.U,{children:e.description||e.model})}),(0,t.jsx)("div",{className:"mt-2 text-xs opacity-75",children:e.enabled?"".concat(e.host,":").concat(e.port):b("download_model_tip")})]});return(0,t.jsxs)(i.default,{form:F,labelCol:{span:8},wrapperCol:{span:16},onFinish:q,children:[(0,t.jsx)(_,{label:"Worker Type",name:"worker_type",rules:[{required:!0,message:b("worker_type_select_tips")}],children:(0,t.jsx)(r.default,{onChange:function(e){N(e),Z(void 0),F.resetFields(),F.setFieldValue("worker_type",e),function(e){let a=new Set;Object.entries(O).forEach(l=>{let[t,s]=l;s.some(a=>a.worker_type===e)&&a.add(t)}),T(Array.from(a).sort())}(e)},placeholder:b("model_select_worker_type"),children:v.map(e=>(0,t.jsx)(f,{value:e,children:e},e))})}),w&&(0,t.jsx)(_,{label:"Provider",name:"provider",rules:[{required:!0,message:b("provider_select_tips")}],children:(0,t.jsx)(r.default,{onChange:function(e){Z(e),F.setFieldValue("provider",e);let a=O[e]||[],l=a.filter(e=>e.worker_type===w);if(l.length>0){let e=l[0];(null==e?void 0:e.params)&&P(Array.isArray(e.params)?e.params:[e.params])}},placeholder:b("model_select_provider"),value:k,children:H.map(e=>(0,t.jsx)(f,{value:e,children:e},e))})}),k&&w&&C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_,{label:b("model_deploy_name"),name:"name",rules:[{required:!0,message:b("model_please_input_name")}],children:(0,t.jsx)(o.Z,{style:{width:"100%"},placeholder:b("model_select_or_input_model"),options:null===(a=O[k])||void 0===a?void 0:a.filter(e=>e.worker_type===w).map(e=>({value:e.model,label:(0,t.jsx)("div",{className:"flex items-center w-full",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,n.A)(e.model),(0,t.jsx)(c.Z,{title:I(e),placement:"right",children:(0,t.jsx)("span",{className:"ml-2",children:e.model})})]})})})),filterOption:(e,a)=>-1!==a.value.toUpperCase().indexOf(e.toUpperCase())})}),(0,t.jsx)(x.Z,{params:C.filter(e=>"name"!==e.param_name),form:F})]}),(0,t.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,t.jsx)(m.ZP,{type:"primary",htmlType:"submit",loading:S,children:b("submit")}),(0,t.jsx)(m.ZP,{onClick:l,children:b("cancel")})]})]})},b=l(91467),g=l(1771),y=l(19284),w=l(24969),N=l(85576),k=l(66309),Z=l(30381),C=l.n(Z),P=function(){let{t:e}=(0,p.$G)(),[a,l]=(0,u.useState)([]),[n,r]=(0,u.useState)(!1),[i,o]=(0,u.useState)(!1);async function c(){let[,e]=await (0,s.Vx)((0,s.fZ)());l(null!=e?e:[])}async function h(a){if(i)return;let l=e("confirm_start_model")+a.model_name;f(e("start_model"),l,async()=>{o(!0);let[,,l]=await (0,s.Vx)((0,s.vA)({host:a.host,port:a.port,model:a.model_name,worker_type:a.worker_type,delete_after:!1,params:{}}));o(!1),(null==l?void 0:l.success)&&(d.ZP.success(e("start_model_success")),await c())})}async function x(a){let l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(i)return;let t=l?"stop_and_delete":"stop",n=e("confirm_".concat(t,"_model"))+a.model_name;f(e("".concat(t,"_model")),n,async()=>{o(!0);let[,,n]=await (0,s.Vx)((0,s.kU)({host:a.host,port:a.port,model:a.model_name,worker_type:a.worker_type,delete_after:l,params:{}}));o(!1),(null==n?void 0:n.success)===!0&&(d.ZP.success(e("".concat(t,"_model_success"))),await c())})}let f=(e,a,l)=>{N.default.confirm({title:e,content:a,onOk:async()=>{await l()},okButtonProps:{className:"bg-button-gradient"}})};(0,u.useEffect)(()=>{c()},[]);let _=e=>(0,y.ab)(e);return(0,t.jsx)(g.Z,{children:(0,t.jsxs)("div",{className:"px-6 overflow-y-auto",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,t.jsx)("div",{className:"flex items-center gap-4"}),(0,t.jsx)("div",{className:"flex items-center gap-4",children:(0,t.jsx)(m.ZP,{className:"border-none text-white bg-button-gradient",icon:(0,t.jsx)(w.Z,{}),onClick:()=>{r(!0)},children:e("create_model")})})]}),(0,t.jsx)("div",{className:"flex flex-wrap mx-[-8px] ",children:a.map(a=>(0,t.jsx)(b.ZP,{logo:_(a.model_name),description:(0,t.jsxs)("div",{className:"flex flex-col gap-1 relative text-xs bottom-4",children:[(0,t.jsxs)("div",{className:"flex overflow-hidden",children:[(0,t.jsx)("p",{className:"w-28 text-gray-500 mr-2",children:"Host:"}),(0,t.jsx)("p",{className:"flex-1 text-ellipsis",children:a.host})]}),(0,t.jsxs)("div",{className:"flex overflow-hidden",children:[(0,t.jsx)("p",{className:"w-28 text-gray-500 mr-2",children:"Manage Host:"}),(0,t.jsxs)("p",{className:"flex-1 text-ellipsis",children:[a.manager_host,":",a.manager_port]})]}),(0,t.jsxs)("div",{className:"flex overflow-hidden",children:[(0,t.jsx)("p",{className:"w-28 text-gray-500 mr-2",children:"Last Heart Beat:"}),(0,t.jsx)("p",{className:"flex-1 text-ellipsis",children:C()(a.last_heartbeat).format("YYYY-MM-DD HH:mm:ss")})]})]}),name:a.model_name,RightTop:(0,t.jsx)(b.ZS,{menu:{items:[{key:"stop_model",label:(0,t.jsx)("span",{className:"text-red-400",onClick:()=>x(a),children:e("stop_model")})},{key:"start_model",label:(0,t.jsx)("span",{className:"text-green-400",onClick:()=>h(a),children:e("start_model")})},{key:"stop_and_delete_model",label:(0,t.jsx)("span",{className:"text-red-400",onClick:()=>x(a,!0),children:e("stop_and_delete_model")})}]}}),rightTopHover:!1,Tags:(0,t.jsxs)("div",{children:[(0,t.jsx)(k.Z,{color:a.healthy?"green":"red",children:a.healthy?"Healthy":"Unhealthy"}),(0,t.jsx)(k.Z,{children:a.worker_type})]})},a.model_name))}),(0,t.jsx)(N.default,{width:800,open:n,title:e("create_model"),onCancel:()=>{r(!1)},footer:null,children:(0,t.jsx)(j,{onCancel:()=>{r(!1)},onSuccess:()=>{r(!1),c()}})})]})})}},11873:function(){},53878:function(){}},function(e){e.O(0,[2913,3791,5278,7611,8791,5030,5418,3457,4567,2398,9859,2510,7782,9774,2888,179],function(){return e(e.s=47329)}),_N_E=e.O()}]);