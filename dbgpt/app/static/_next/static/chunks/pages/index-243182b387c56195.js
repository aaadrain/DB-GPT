(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(57464)}])},57464:function(e,s,a){"use strict";a.r(s);var n=a(85893),t=a(577),c=a(67294),r=a(96074),l=a(75081),i=a(66309),o=a(11163),d=a(25675),h=a.n(d),u=a(89182),m=a(41468),x=a(67421);a(62418);var _=a(53014),p=a(82353),w=a(93967),f=a.n(w);s.default=()=>{let e=(0,o.useRouter)(),{model:s,setModel:a,userId:d,setUserId:w}=(0,c.useContext)(m.p);(0,c.useEffect)(()=>{if(e.isReady){let s=e.query.userId||e.query.userid;s&&(localStorage.setItem("userId",s),w&&w(s))}},[e.isReady,e.query.userId,e.query.userid,w]);let{t:N}=(0,x.$G)(),[j,y]=(0,c.useState)(!1),[b,g]=(0,c.useState)(!1),{data:v=[]}=(0,t.Z)(async()=>{g(!0);let[,e]=await (0,u.Vx)((0,u.CU)());return g(!1),null!=e?e:[]}),Z=async a=>{if(a.show_disable)return;let[,n]=await (0,u.Vx)((0,u.sW)({chat_mode:"chat_normal",user_id:d}));n&&e.push("/chat?scene=".concat(a.chat_scene,"&userid=").concat(d,"&id=").concat(n.conv_uid).concat(s?"&model=".concat(s):""))};return(0,n.jsx)("div",{className:"px-4 h-screen flex flex-col justify-center items-center overflow-hidden",children:(0,n.jsxs)("div",{className:"max-w-3xl max-h-screen overflow-y-auto",children:[(0,n.jsx)(h(),{src:"/LOGO.png",alt:"Revolutionizing Database Interactions with Private LLM Technology",width:856,height:160,className:"w-full mt-4",unoptimized:!0}),(0,n.jsx)(r.Z,{className:"!text-[#878c93] !my-6",plain:!0,children:N("Quick_Start")}),(0,n.jsx)(l.Z,{spinning:b,children:(0,n.jsx)("div",{className:"flex flex-wrap -m-1 md:-m-2",children:v.map(e=>(0,n.jsx)("div",{className:"w-full sm:w-1/2 p-1 md:p-2",onClick:()=>{Z(e)},children:(0,n.jsxs)("div",{className:f()("flex flex-row justify-center h-[102px] min-h-min bg-white dark:bg-[#232734] dark:text-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-[transform_shadow] duration-300 hover:shadow-[0_14px_20px_-10px_rgba(100,100,100,.1)]",{"grayscale !cursor-no-drop":e.show_disable}),children:[function(e){switch(e){case"chat_knowledge":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.je});case"chat_with_db_execute":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.zM});case"chat_excel":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.DL});case"chat_with_db_qa":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.RD});case"chat_dashboard":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.In});case"chat_agent":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.si});case"dbgpt_chat":return(0,n.jsx)(_.Z,{className:"w-10 h-10 mr-4 p-1",component:p.O7});default:return null}}(e.chat_scene),(0,n.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,n.jsxs)("h2",{className:"flex items-center text-lg font-sans font-semibold",children:[e.scene_name,e.show_disable&&(0,n.jsx)(i.Z,{className:"ml-2",children:"Comming soon"})]}),(0,n.jsx)("p",{className:"opacity-80 line-clamp-2",children:e.scene_describe})]})]})},e.chat_scene))})})]})})}}},function(e){e.O(0,[5081,9838,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);