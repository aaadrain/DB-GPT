(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6997],{76735:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flow/canvas",function(){return l(32990)}])},45247:function(e,t,l){"use strict";var a=l(85893),s=l(50888);t.Z=function(e){let{visible:t}=e;return t?(0,a.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,a.jsx)(s.Z,{})}):null}},99743:function(e,t,l){"use strict";var a=l(85893);l(67294);var s=l(36851);t.Z=e=>{let{id:t,sourceX:l,sourceY:n,targetX:r,targetY:o,sourcePosition:i,targetPosition:d,style:c={},data:u,markerEnd:p}=e,[m,f,x]=(0,s.OQ)({sourceX:l,sourceY:n,sourcePosition:i,targetX:r,targetY:o,targetPosition:d}),h=(0,s._K)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.u5,{id:t,style:c,path:m,markerEnd:p}),(0,a.jsx)("foreignObject",{width:40,height:40,x:f-20,y:x-20,className:"bg-transparent w-10 h-10 relative",requiredExtensions:"http://www.w3.org/1999/xhtml",children:(0,a.jsx)("button",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-stone-400 dark:bg-zinc-700 cursor-pointer text-sm",onClick:e=>{e.stopPropagation(),h.setEdges(h.getEdges().filter(e=>e.id!==t))},children:"\xd7"})})]})}},32990:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return es}});var a=l(85893),s=l(89182),n=l(45247),r=l(24969),o=l(79531),i=l(40411),d=l(55241),c=l(47221),u=l(14726),p=l(67294),m=l(67421),f=l(98399),x=l(2487),h=l(7134),g=l(32983),v=e=>{let{nodes:t}=e,{t:l}=(0,m.$G)();return(null==t?void 0:t.length)>0?(0,a.jsx)(x.Z,{className:"overflow-hidden overflow-y-auto w-full",itemLayout:"horizontal",dataSource:t,renderItem:e=>(0,a.jsx)(x.Z.Item,{className:"cursor-move hover:bg-[#F1F5F9] dark:hover:bg-theme-dark p-0 py-2",draggable:!0,onDragStart:t=>{t.dataTransfer.setData("application/reactflow",JSON.stringify(e)),t.dataTransfer.effectAllowed="move"},children:(0,a.jsx)(x.Z.Item.Meta,{className:"flex items-center justify-center",avatar:(0,a.jsx)(h.C,{src:"/icons/node/vis.png",size:"large"}),title:(0,a.jsx)("p",{className:"line-clamp-1 font-medium",children:e.label}),description:(0,a.jsx)("p",{className:"line-clamp-2",children:e.description})})})}):(0,a.jsx)(g.Z,{className:"px-2",description:l("no_node")})};let{Search:j}=o.default;var b=()=>{let{t:e}=(0,m.$G)(),[t,l]=(0,p.useState)([]),[n,o]=(0,p.useState)([]),[x,h]=(0,p.useState)([]),[g,b]=(0,p.useState)([]),[w,y]=(0,p.useState)("");async function _(){let[e,t]=await (0,s.Vx)((0,s.As)());if(t&&t.length>0){localStorage.setItem(f.zN,JSON.stringify(t));let e=t.filter(e=>"operator"===e.flow_type),a=t.filter(e=>"resource"===e.flow_type);l(e),o(a),h(N(e)),b(N(a))}}function N(e){let t=[],l={};return e.forEach(e=>{let{category:a,category_label:s}=e;l[a]||(l[a]={category:a,categoryLabel:s,nodes:[]},t.push(l[a])),l[a].nodes.push(e)}),t}(0,p.useEffect)(()=>{_()},[]);let Z=(0,p.useMemo)(()=>{if(!w)return x.map(e=>{let{category:t,categoryLabel:l,nodes:s}=e;return{key:t,label:l,children:(0,a.jsx)(v,{nodes:s}),extra:(0,a.jsx)(i.Z,{showZero:!0,count:s.length||0,style:{backgroundColor:s.length>0?"#52c41a":"#7f9474"}})}});{let e=t.filter(e=>e.label.toLowerCase().includes(w.toLowerCase()));return N(e).map(e=>{let{category:t,categoryLabel:l,nodes:s}=e;return{key:t,label:l,children:(0,a.jsx)(v,{nodes:s}),extra:(0,a.jsx)(i.Z,{showZero:!0,count:s.length||0,style:{backgroundColor:s.length>0?"#52c41a":"#7f9474"}})}})}},[x,w]),k=(0,p.useMemo)(()=>{if(!w)return g.map(e=>{let{category:t,categoryLabel:l,nodes:s}=e;return{key:t,label:l,children:(0,a.jsx)(v,{nodes:s}),extra:(0,a.jsx)(i.Z,{showZero:!0,count:s.length||0,style:{backgroundColor:s.length>0?"#52c41a":"#7f9474"}})}});{let e=n.filter(e=>e.label.toLowerCase().includes(w.toLowerCase()));return N(e).map(e=>{let{category:t,categoryLabel:l,nodes:s}=e;return{key:t,label:l,children:(0,a.jsx)(v,{nodes:s}),extra:(0,a.jsx)(i.Z,{showZero:!0,count:s.length||0,style:{backgroundColor:s.length>0?"#52c41a":"#7f9474"}})}})}},[g,w]);return(0,a.jsx)(d.Z,{placement:"bottom",trigger:["click"],content:(0,a.jsxs)("div",{className:"w-[320px] overflow-hidden overflow-y-auto scrollbar-default",children:[(0,a.jsx)("p",{className:"my-2 font-bold",children:e("add_node")}),(0,a.jsx)(j,{placeholder:"Search node",onSearch:function(e){y(e)}}),(0,a.jsx)("h2",{className:"my-2 ml-2 font-semibold",children:e("operators")}),(0,a.jsx)(c.Z,{className:"max-h-[300px] overflow-hidden overflow-y-auto scrollbar-default",size:"small",defaultActiveKey:[""],items:Z}),(0,a.jsx)("h2",{className:"my-2 ml-2 font-semibold",children:e("resource")}),(0,a.jsx)(c.Z,{className:"max-h-[300px] overflow-hidden overflow-y-auto scrollbar-default",size:"small",defaultActiveKey:[""],items:k})]}),children:(0,a.jsx)(u.ZP,{type:"primary",className:"flex items-center justify-center rounded-full left-4 top-4",style:{zIndex:1050},icon:(0,a.jsx)(r.Z,{})})})},w=l(99743),y=l(25675),_=l.n(y),N=l(83062),Z=l(10418),k=l(66184),C=l(84567),P=e=>{let{optional:t}=e;return t?null:(0,a.jsx)("span",{className:"text-red-600 align-middle inline-block",children:"\xa0*"})},S=l(2453),V=l(99612),E=l(86738),z=l(36851),F=l(45605),T=l(93967),I=l.n(T),D=e=>{let{node:t,data:l,type:s,label:n,index:o}=e,{t:i}=(0,m.$G)(),d=(0,z._K)(),[c,u]=p.useState([]);function x(){let e=localStorage.getItem(f.zN);if(!e)return;let a=JSON.parse(e),s=l.type_cls,r=[];"inputs"===n?r=a.filter(e=>"operator"===e.flow_type).filter(e=>{var t;return null===(t=e.outputs)||void 0===t?void 0:t.some(e=>e.type_cls===s&&e.is_list===(null==l?void 0:l.is_list))}):"parameters"===n?r=a.filter(e=>"resource"===e.flow_type).filter(e=>{var t;return null===(t=e.parent_cls)||void 0===t?void 0:t.includes(s)}):"outputs"===n&&("operator"===t.flow_type?r=a.filter(e=>"operator"===e.flow_type).filter(e=>{var t;return null===(t=e.inputs)||void 0===t?void 0:t.some(e=>e.type_cls===s&&e.is_list===(null==l?void 0:l.is_list))}):"resource"===t.flow_type&&(r=a.filter(e=>{var l,a;return(null===(l=e.inputs)||void 0===l?void 0:l.some(e=>{var l;return null===(l=t.parent_cls)||void 0===l?void 0:l.includes(e.type_cls)}))||(null===(a=e.parameters)||void 0===a?void 0:a.some(e=>{var l;return null===(l=t.parent_cls)||void 0===l?void 0:l.includes(e.type_cls)}))}))),u(r)}return(0,a.jsxs)("div",{className:I()("relative flex items-center",{"justify-start":"parameters"===n||"inputs"===n,"justify-end":"outputs"===n}),children:[(0,a.jsx)(z.HH,{className:"w-2 h-2",type:s,position:"source"===s?z.Ly.Right:z.Ly.Left,id:"".concat(t.id,"|").concat(n,"|").concat(o),isValidConnection:e=>(function(e){let{sourceHandle:t,targetHandle:l,source:a,target:s}=e,n=d.getNode(a),r=d.getNode(s),{flow_type:o}=null==n?void 0:n.data,{flow_type:c}=null==r?void 0:r.data,u=null==t?void 0:t.split("|")[1],p=null==l?void 0:l.split("|")[1],m=null==t?void 0:t.split("|")[2],f=null==l?void 0:l.split("|")[2],x=null==r?void 0:r.data[p][f].type_cls;if(o===c&&"operator"===o){let e=null==n?void 0:n.data[u][m].type_cls,t=null==n?void 0:n.data[u][m].is_list,l=null==r?void 0:r.data[p][f].is_list;return e===x&&t===l}if("resource"===o&&("operator"===c||"resource"===c)){let e=null==n?void 0:n.data.parent_cls;return e.includes(x)}return S.ZP.warning(i("connect_warning")),!1})(e)}),(0,a.jsxs)(V.Z,{className:I()("p-2",{"pr-4":"outputs"===n}),children:[(0,a.jsx)(E.Z,{placement:"left",icon:null,showCancel:!1,okButtonProps:{className:"hidden"},title:i("related_nodes"),description:(0,a.jsx)("div",{className:"w-60",children:(0,a.jsx)(v,{nodes:c})}),children:["inputs","parameters"].includes(n)&&(0,a.jsx)(r.Z,{className:"mr-2 cursor-pointer",onClick:x})}),l.type_name,":","outputs"!==n&&(0,a.jsx)(P,{optional:l.optional}),l.description&&(0,a.jsx)(N.Z,{title:l.description,children:(0,a.jsx)(F.Z,{className:"ml-2 cursor-pointer"})}),(0,a.jsx)(E.Z,{placement:"right",icon:null,showCancel:!1,okButtonProps:{className:"hidden"},title:i("related_nodes"),description:(0,a.jsx)("div",{className:"w-60",children:(0,a.jsx)(v,{nodes:c})}),children:["outputs"].includes(n)&&(0,a.jsx)(r.Z,{className:"ml-2 cursor-pointer",onClick:x})})]})]})},L=e=>{let{node:t,data:l,label:s,index:n}=e;function r(e){l.value=e}if("resource"===l.category)return(0,a.jsx)(D,{node:t,data:l,type:"target",label:s,index:n});if("common"===l.category){let e=null!==l.value&&void 0!==l.value?l.value:l.default;switch(l.type_name){case"int":return(0,a.jsxs)("div",{className:"p-2 text-sm",children:[(0,a.jsxs)("p",{children:[l.label,":",(0,a.jsx)(P,{optional:l.optional}),l.description&&(0,a.jsx)(N.Z,{title:l.description,children:(0,a.jsx)(F.Z,{className:"ml-2 cursor-pointer"})})]}),(0,a.jsx)(Z.Z,{className:"w-full",defaultValue:e,onChange:e=>{r(e.target.value)}})]});case"str":var i;return(0,a.jsxs)("div",{className:"p-2 text-sm",children:[(0,a.jsxs)("p",{children:[l.label,":",(0,a.jsx)(P,{optional:l.optional}),l.description&&(0,a.jsx)(N.Z,{title:l.description,children:(0,a.jsx)(F.Z,{className:"ml-2 cursor-pointer"})})]}),(null===(i=l.options)||void 0===i?void 0:i.length)>0?(0,a.jsx)(k.default,{className:"w-full nodrag",defaultValue:e,options:l.options.map(e=>({label:e.label,value:e.value})),onChange:r}):(0,a.jsx)(o.default,{className:"w-full",defaultValue:e,onChange:e=>{r(e.target.value)}})]});case"bool":return e="True"===(e="False"!==e&&e)||e,(0,a.jsx)("div",{className:"p-2 text-sm",children:(0,a.jsxs)("p",{children:[l.label,":",(0,a.jsx)(P,{optional:l.optional}),l.description&&(0,a.jsx)(N.Z,{title:l.description,children:(0,a.jsx)(F.Z,{className:"ml-2 cursor-pointer"})}),(0,a.jsx)(C.Z,{className:"ml-2",defaultChecked:e,onChange:e=>{r(e.target.checked)}})]})})}}},O=l(57132),A=l(48689),K=e=>{let{children:t,className:l}=e;return(0,a.jsx)("div",{className:I()("flex justify-center items-center w-8 h-8 rounded-full dark:bg-zinc-700 hover:bg-stone-200 dark:hover:bg-zinc-900",l),children:t})},q=l(67919),B=l(96486);function H(e){let{label:t}=e;return(0,a.jsx)("div",{className:"w-full h-8 bg-stone-100 dark:bg-zinc-700 px-2 flex items-center justify-center",children:t})}var M=l(12906),R=l(60219),$=l(23323),G=l(16568),J=l(96074),W=l(17788),X=l(78957),Q=l(39332),Y=l(24885),U=l(59819);l(4583);let{TextArea:ee}=o.default,et={customNode:e=>{let{data:t}=e,{inputs:l,outputs:s,parameters:n,flow_type:r}=t,[o,i]=(0,p.useState)(!1),c=(0,z._K)();return(0,a.jsx)(d.Z,{placement:"rightTop",trigger:["hover"],content:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(K,{className:"hover:text-blue-500",children:(0,a.jsx)(O.Z,{className:"h-full text-lg cursor-pointer",onClick:function(e){e.preventDefault(),e.stopPropagation();let l=c.getNodes(),a=l.find(e=>e.id===t.id);if(a){let e=(0,q.VZ)(a,l),t=(0,B.cloneDeep)(a),s={...t,id:e,position:{x:t.position.x+400,y:t.position.y},positionAbsolute:{x:t.positionAbsolute.x+400,y:t.positionAbsolute.y},data:{...t.data,id:e},selected:!1};c.setNodes(e=>[...e,s])}}})}),(0,a.jsx)(K,{className:"mt-2 hover:text-red-500",children:(0,a.jsx)(A.Z,{className:"h-full text-lg cursor-pointer",onClick:function(e){e.preventDefault(),e.stopPropagation(),c.setNodes(e=>e.filter(e=>e.id!==t.id)),c.setEdges(e=>e.filter(e=>e.source!==t.id&&e.target!==t.id))}})}),(0,a.jsx)(K,{className:"mt-2",children:(0,a.jsx)(N.Z,{title:t.description,placement:"right",children:(0,a.jsx)(F.Z,{className:"h-full text-lg cursor-pointer"})})})]}),children:(0,a.jsxs)("div",{className:I()("w-72 h-auto rounded-xl shadow-md p-0 border bg-white dark:bg-zinc-800 cursor-grab",{"border-blue-500":t.selected||o,"border-stone-400 dark:border-white":!t.selected&&!o,"border-dashed":"operator"!==r,"border-red-600":t.invalid}),onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},children:[(0,a.jsxs)("div",{className:"flex flex-row items-center p-2",children:[(0,a.jsx)(_(),{src:"/icons/node/vis.png",width:24,height:24,alt:""}),(0,a.jsx)("p",{className:"ml-2 text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap",children:t.label})]}),l&&l.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{label:"Inputs"}),(l||[]).map((e,l)=>(0,a.jsx)(D,{node:t,data:e,type:"target",label:"inputs",index:l},"".concat(t.id,"_input_").concat(l)))]}),n&&n.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{label:"Parameters"}),(n||[]).map((e,l)=>(0,a.jsx)(L,{node:t,data:e,label:"parameters",index:l},"".concat(t.id,"_param_").concat(l)))]}),"operator"===r&&(null==s?void 0:s.length)>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{label:"Outputs"}),(s||[]).map((e,l)=>(0,a.jsx)(D,{node:t,data:e,type:"source",label:"outputs",index:l},"".concat(t.id,"_input_").concat(l)))]}):"resource"===r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{label:"Outputs"}),(0,a.jsx)(D,{node:t,data:t,type:"source",label:"outputs",index:0},"".concat(t.id,"_input_0"))]}):void 0]})})}},el={buttonedge:w.Z},ea=()=>{let{t:e}=(0,m.$G)(),[t,l]=S.ZP.useMessage(),[r]=$.Z.useForm(),i=(0,Q.useSearchParams)(),d=(null==i?void 0:i.get("id"))||"",c=(0,z._K)(),[f,x]=(0,p.useState)(!1),[h,g,v]=(0,z.Rr)([]),[j,w,y]=(0,z.ll)([]),_=(0,p.useRef)(null),[N,Z]=(0,p.useState)(!1),[k,P]=(0,p.useState)(),[V,E]=(0,p.useState)(!0);async function F(){x(!0);let[e,t]=await (0,s.Vx)((0,s._d)(d));if(t){let e=(0,q.z5)(t.flow_data);P(t),g(e.nodes),w(e.edges)}x(!1)}(0,p.useEffect)(()=>{d&&F()},[d]),(0,p.useEffect)(()=>{let e=e=>{e.returnValue=S.ZP};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[]);let T=(0,p.useCallback)(e=>{e.preventDefault();let t=_.current.getBoundingClientRect(),l=e.dataTransfer.getData("application/reactflow");if(!l||void 0===l)return;let a=JSON.parse(l),s=c.screenToFlowPosition({x:e.clientX-t.left,y:e.clientY-t.top}),n=(0,q.VZ)(a,c.getNodes());a.id=n;let r={id:n,position:s,type:"customNode",data:a};g(e=>e.concat(r).map(e=>(e.id===r.id?e.data={...e.data,selected:!0}:e.data={...e.data,selected:!1},e)))},[c]),I=(0,p.useCallback)(e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"},[]);async function D(){let{name:l,label:a,description:n="",editable:o=!1,state:i="deployed"}=r.getFieldsValue();console.log(r.getFieldsValue());let u=(0,q.Wf)(c.toObject());if(d){let[,,r]=await (0,s.Vx)((0,s.ao)(d,{name:l,label:a,description:n,editable:o,uid:d,flow_data:u,state:i}));Z(!1),(null==r?void 0:r.success)?t.success(e("save_flow_success")):(null==r?void 0:r.err_msg)&&t.error(null==r?void 0:r.err_msg)}else{let[r,d]=await (0,s.Vx)((0,s.zd)({name:l,label:a,description:n,editable:o,flow_data:u,state:i}));if(null==d?void 0:d.uid){t.success(e("save_flow_success"));let l=window.history;l.pushState(null,"","/flow/canvas?id=".concat(d.uid))}Z(!1)}}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{visible:f}),(0,a.jsx)("div",{className:"my-2 mx-4 flex flex-row justify-end items-center",children:(0,a.jsx)("div",{className:"w-8 h-8 rounded-md bg-stone-300 dark:bg-zinc-700 dark:text-zinc-200 flext justify-center items-center hover:text-blue-500 dark:hover:text-zinc-100",children:(0,a.jsx)(R.Z,{className:"block text-xl",onClick:function(){let e=c.toObject(),[t,l,s]=(0,q.Rv)(e);if(!t&&s)return g(e=>e.map(e=>(e.id===(null==l?void 0:l.id)?e.data={...e.data,invalid:!0}:e.data={...e.data,invalid:!1},e))),G.ZP.error({message:"Error",description:s,icon:(0,a.jsx)(M.Z,{className:"text-red-600"})});Z(!0)}})})}),(0,a.jsx)(J.Z,{className:"mt-0 mb-0"}),(0,a.jsx)("div",{className:"h-[calc(100vh-60px)] w-full",ref:_,children:(0,a.jsxs)(z.x$,{nodes:h,edges:j,nodeTypes:et,edgeTypes:el,onNodesChange:v,onEdgesChange:y,onNodeClick:function(e,t){c.setNodes(e=>e.map(e=>(e.id===t.id?e.data={...e.data,selected:!0}:e.data={...e.data,selected:!1},e)))},onConnect:function(e){let t={...e,type:"buttonedge",id:"".concat(e.source,"|").concat(e.target)};w(e=>(0,z.Z_)(t,e))},onDrop:T,onDragOver:I,minZoom:.1,fitView:!0,deleteKeyCode:["Backspace","Delete"],children:[(0,a.jsx)(Y.Z,{className:"flex flex-row items-center",position:"bottom-center"}),(0,a.jsx)(U.A,{color:"#aaa",gap:16}),(0,a.jsx)(b,{})]})}),(0,a.jsx)(W.default,{title:e("flow_modal_title"),open:N,onCancel:()=>{Z(!1)},cancelButtonProps:{className:"hidden"},okButtonProps:{className:"hidden"},children:(0,a.jsxs)($.Z,{name:"flow_form",form:r,labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:D,autoComplete:"off",children:[(0,a.jsx)($.Z.Item,{label:"Title",name:"label",initialValue:null==k?void 0:k.label,rules:[{required:!0,message:"Please input flow title!"}],children:(0,a.jsx)(o.default,{onChange:function(e){let t=e.target.value,l=t.replace(/\s+/g,"_").replace(/[^a-z0-9_-]/g,"").toLowerCase();r.setFieldsValue({name:l})}})}),(0,a.jsx)($.Z.Item,{label:"Name",name:"name",initialValue:null==k?void 0:k.name,rules:[{required:!0,message:"Please input flow name!"},()=>({validator:(e,t)=>/^[a-zA-Z0-9_\-]+$/.test(t)?Promise.resolve():Promise.reject("Can only contain numbers, letters, underscores, and dashes")})],children:(0,a.jsx)(o.default,{})}),(0,a.jsx)($.Z.Item,{label:"Description",initialValue:null==k?void 0:k.description,name:"description",children:(0,a.jsx)(ee,{rows:3})}),(0,a.jsx)($.Z.Item,{label:"Editable",name:"editable",initialValue:null==k?void 0:k.editable,valuePropName:"checked",children:(0,a.jsx)(C.Z,{})}),(0,a.jsx)($.Z.Item,{hidden:!0,name:"state",children:(0,a.jsx)(o.default,{})}),(0,a.jsx)($.Z.Item,{label:"Deploy",children:(0,a.jsx)(C.Z,{defaultChecked:(null==k?void 0:k.state)==="deployed"||(null==k?void 0:k.state)==="running",value:V,onChange:e=>{let t=e.target.checked;r.setFieldValue("state",t?"deployed":"developing"),E(t)}})}),(0,a.jsx)($.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,a.jsxs)(X.Z,{children:[(0,a.jsx)(u.ZP,{htmlType:"button",onClick:()=>{Z(!1)},children:"Cancel"}),(0,a.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:"Submit"})]})})]})}),l]})};function es(){return(0,a.jsx)(z.tV,{children:(0,a.jsx)(ea,{})})}},67919:function(e,t,l){"use strict";l.d(t,{Rv:function(){return r},VZ:function(){return a},Wf:function(){return s},z5:function(){return n}});let a=(e,t)=>{let l=0;return t.forEach(t=>{t.data.name===e.name&&l++}),"".concat(e.id,"_").concat(l)},s=e=>{let{nodes:t,edges:l,...a}=e,s=t.map(e=>{let{positionAbsolute:t,...l}=e;return{position_absolute:t,...l}}),n=l.map(e=>{let{sourceHandle:t,targetHandle:l,...a}=e;return{source_handle:t,target_handle:l,...a}});return{nodes:s,edges:n,...a}},n=e=>{let{nodes:t,edges:l,...a}=e,s=t.map(e=>{let{position_absolute:t,...l}=e;return{positionAbsolute:t,...l}}),n=l.map(e=>{let{source_handle:t,target_handle:l,...a}=e;return{sourceHandle:t,targetHandle:l,...a}});return{nodes:s,edges:n,...a}},r=e=>{let{nodes:t,edges:l}=e,a=[!0,t[0],""];e:for(let e=0;e<t.length;e++){let s=t[e].data,{inputs:n=[],parameters:r=[]}=s;for(let r=0;r<n.length;r++)if(!l.some(l=>l.targetHandle==="".concat(t[e].id,"|inputs|").concat(r))){a=[!1,t[e],"The input ".concat(n[r].type_name," of node ").concat(s.label," is required")];break e}for(let n=0;n<r.length;n++){let o=r[n];if(o.optional||"resource"!==o.category||l.some(l=>l.targetHandle==="".concat(t[e].id,"|parameters|").concat(n))){if(!o.optional&&"common"===o.category&&(void 0===o.value||null===o.value)){a=[!1,t[e],"The parameter ".concat(o.type_name," of node ").concat(s.label," is required")];break e}}else{a=[!1,t[e],"The parameter ".concat(o.type_name," of node ").concat(s.label," is required")];break e}}}return a}}},function(e){e.O(0,[3662,8241,6274,5503,3323,6184,5081,4567,1980,411,418,1644,2282,2487,3188,9774,2888,179],function(){return e(e.s=76735)}),_N_E=e.O()}]);