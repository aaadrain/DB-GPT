"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8813],{27015:function(e,t,o){var n=o(64836);t.Z=void 0;var l=n(o(64938)),r=o(85893);t.Z=(0,l.default)((0,r.jsx)("path",{d:"M14 2H4c-1.11 0-2 .9-2 2v10h2V4h10zm4 4H8c-1.11 0-2 .9-2 2v10h2V8h10zm2 4h-8c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2"}),"AutoAwesomeMotion")},64938:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=o(27695)},27695:function(e,t,o){o.r(t),o.d(t,{capitalize:function(){return l.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return a.Z},debounce:function(){return i},deprecatedPropType:function(){return d},isMuiElement:function(){return u},ownerDocument:function(){return s},ownerWindow:function(){return c},requirePropFactory:function(){return v},setRef:function(){return p},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h},unstable_useId:function(){return f},unsupportedProp:function(){return m},useControlled:function(){return b},useEventCallback:function(){return g},useForkRef:function(){return x},useIsFocusVisible:function(){return y}});var n=o(31983),l=o(98216),r=function(...e){return e.reduce((e,t)=>null==t?e:function(...o){e.apply(this,o),t.apply(this,o)},()=>{})},a=o(34678),i=o(86145).Z,d=function(e,t){return()=>null},u=o(16485).Z,s=o(36425).Z,c=o(96613).Z;o(87462);var v=function(e,t){return()=>null},p=o(25091).Z,h=o(54895).Z,f=o(89326).Z,m=function(e,t,o,n,l){return null},b=o(81222).Z,g=o(22010).Z,x=o(22760).Z,y=o(11136).Z;let w={configure:e=>{n.Z.configure(e)}}},63185:function(e,t,o){o.d(t,{C2:function(){return d}});var n=o(43109),l=o(14747),r=o(45503),a=o(91945);let i=e=>{let{checkboxCls:t}=e,o=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,l.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[o]:Object.assign(Object.assign({},(0,l.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:0},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,l.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,l.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${(0,n.bf)(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${o}:not(${o}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${o}-checked:not(${o}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function d(e,t){let o=(0,r.TS)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[i(o)]}t.ZP=(0,a.I$)("Checkbox",(e,t)=>{let{prefixCls:o}=t;return[d(o,e)]})},53913:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var n=o(85893),l=o(67294),r=o(577),a=o(61685),i=o(63366),d=o(87462),u=o(90512),s=o(62908),c=o(81222),v=o(89326),p=o(22010),h=o(11136),f=o(22760),m=o(58510),b=o(53406),g=o(74312),x=o(20407),y=o(30220),w=o(78653),k=o(26821);function S(e){return(0,k.d6)("MuiTooltip",e)}(0,k.sI)("MuiTooltip",["root","tooltipArrow","arrow","touch","placementLeft","placementRight","placementTop","placementBottom","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);let Z=["children","className","component","arrow","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","disablePortal","direction","keepMounted","modifiers","placement","title","color","variant","size","slots","slotProps"],T=e=>{let{arrow:t,variant:o,color:n,size:l,placement:r,touch:a}=e,i={root:["root",t&&"tooltipArrow",a&&"touch",l&&`size${(0,s.Z)(l)}`,n&&`color${(0,s.Z)(n)}`,o&&`variant${(0,s.Z)(o)}`,`tooltipPlacement${(0,s.Z)(r.split("-")[0])}`],arrow:["arrow"]};return(0,m.Z)(i,S,{})},j=(0,g.Z)("div",{name:"JoyTooltip",slot:"Root",overridesResolver:(e,t)=>t.root})(({ownerState:e,theme:t})=>{var o,n,l;let r=null==(o=t.variants[e.variant])?void 0:o[e.color];return(0,d.Z)({},"sm"===e.size&&{"--Icon-fontSize":t.vars.fontSize.md,"--Tooltip-arrowSize":"8px",padding:t.spacing(.25,.625)},"md"===e.size&&{"--Icon-fontSize":t.vars.fontSize.lg,"--Tooltip-arrowSize":"10px",padding:t.spacing(.5,.75)},"lg"===e.size&&{"--Icon-fontSize":t.vars.fontSize.xl,"--Tooltip-arrowSize":"12px",padding:t.spacing(.75,1)},{zIndex:t.vars.zIndex.tooltip,borderRadius:t.vars.radius.sm,boxShadow:t.shadow.sm,wordWrap:"break-word",position:"relative"},e.disableInteractive&&{pointerEvents:"none"},t.typography[`body-${({sm:"xs",md:"sm",lg:"md"})[e.size]}`],r,!r.backgroundColor&&{backgroundColor:t.vars.palette.background.surface},{"&::before":{content:'""',display:"block",position:"absolute",width:null!=(n=e.placement)&&n.match(/(top|bottom)/)?"100%":"calc(10px + var(--variant-borderWidth, 0px))",height:null!=(l=e.placement)&&l.match(/(top|bottom)/)?"calc(10px + var(--variant-borderWidth, 0px))":"100%"},'&[data-popper-placement*="bottom"]::before':{top:0,left:0,transform:"translateY(-100%)"},'&[data-popper-placement*="left"]::before':{top:0,right:0,transform:"translateX(100%)"},'&[data-popper-placement*="right"]::before':{top:0,left:0,transform:"translateX(-100%)"},'&[data-popper-placement*="top"]::before':{bottom:0,left:0,transform:"translateY(100%)"}})}),C=(0,g.Z)("span",{name:"JoyTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e,ownerState:t})=>{var o,n,l;let r=null==(o=e.variants[t.variant])?void 0:o[t.color];return{"--unstable_Tooltip-arrowRotation":0,width:"var(--Tooltip-arrowSize)",height:"var(--Tooltip-arrowSize)",boxSizing:"border-box","&:before":{content:'""',display:"block",position:"absolute",width:0,height:0,border:"calc(var(--Tooltip-arrowSize) / 2) solid",borderLeftColor:"transparent",borderBottomColor:"transparent",borderTopColor:null!=(n=null==r?void 0:r.backgroundColor)?n:e.vars.palette.background.surface,borderRightColor:null!=(l=null==r?void 0:r.backgroundColor)?l:e.vars.palette.background.surface,borderRadius:"0px 2px 0px 0px",boxShadow:`var(--variant-borderWidth, 0px) calc(-1 * var(--variant-borderWidth, 0px)) 0px 0px ${r.borderColor}`,transformOrigin:"center center",transform:"rotate(calc(-45deg + 90deg * var(--unstable_Tooltip-arrowRotation)))"},'[data-popper-placement*="bottom"] &':{top:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="top"] &':{"--unstable_Tooltip-arrowRotation":2,bottom:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="left"] &':{"--unstable_Tooltip-arrowRotation":1,right:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="right"] &':{"--unstable_Tooltip-arrowRotation":3,left:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"}}}),$=!1,_=null,z={x:0,y:0};function N(e,t){return o=>{t&&t(o),e(o)}}function E(e,t){return o=>{t&&t(o),e(o)}}let R=l.forwardRef(function(e,t){var o;let r=(0,x.Z)({props:e,name:"JoyTooltip"}),{children:a,className:s,component:m,arrow:g=!1,describeChild:k=!1,disableFocusListener:S=!1,disableHoverListener:R=!1,disableInteractive:P=!1,disableTouchListener:q=!1,enterDelay:M=100,enterNextDelay:D=0,enterTouchDelay:I=700,followCursor:O=!1,id:B,leaveDelay:W=0,leaveTouchDelay:F=1500,onClose:L,onOpen:A,open:H,disablePortal:V,direction:X,keepMounted:Y,modifiers:G,placement:J="bottom",title:U,color:K="neutral",variant:Q="solid",size:ee="md",slots:et={},slotProps:eo={}}=r,en=(0,i.Z)(r,Z),{getColor:el}=(0,w.VT)(Q),er=V?el(e.color,K):K,[ea,ei]=l.useState(),[ed,eu]=l.useState(null),es=l.useRef(!1),ec=P||O,ev=l.useRef(),ep=l.useRef(),eh=l.useRef(),ef=l.useRef(),[em,eb]=(0,c.Z)({controlled:H,default:!1,name:"Tooltip",state:"open"}),eg=em,ex=(0,v.Z)(B),ey=l.useRef(),ew=l.useCallback(()=>{void 0!==ey.current&&(document.body.style.WebkitUserSelect=ey.current,ey.current=void 0),clearTimeout(ef.current)},[]);l.useEffect(()=>()=>{clearTimeout(ev.current),clearTimeout(ep.current),clearTimeout(eh.current),ew()},[ew]);let ek=e=>{_&&clearTimeout(_),$=!0,eb(!0),A&&!eg&&A(e)},eS=(0,p.Z)(e=>{_&&clearTimeout(_),_=setTimeout(()=>{$=!1},800+W),eb(!1),L&&eg&&L(e),clearTimeout(ev.current),ev.current=setTimeout(()=>{es.current=!1},150)}),eZ=e=>{es.current&&"touchstart"!==e.type||(ea&&ea.removeAttribute("title"),clearTimeout(ep.current),clearTimeout(eh.current),M||$&&D?ep.current=setTimeout(()=>{ek(e)},$?D:M):ek(e))},eT=e=>{clearTimeout(ep.current),clearTimeout(eh.current),eh.current=setTimeout(()=>{eS(e)},W)},{isFocusVisibleRef:ej,onBlur:eC,onFocus:e$,ref:e_}=(0,h.Z)(),[,ez]=l.useState(!1),eN=e=>{eC(e),!1===ej.current&&(ez(!1),eT(e))},eE=e=>{ea||ei(e.currentTarget),e$(e),!0===ej.current&&(ez(!0),eZ(e))},eR=e=>{es.current=!0;let t=a.props;t.onTouchStart&&t.onTouchStart(e)};l.useEffect(()=>{if(eg)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&eS(e)}},[eS,eg]);let eP=(0,f.Z)(ei,t),eq=(0,f.Z)(e_,eP),eM=(0,f.Z)(a.ref,eq);"number"==typeof U||U||(eg=!1);let eD=l.useRef(null),eI={},eO="string"==typeof U;k?(eI.title=eg||!eO||R?null:U,eI["aria-describedby"]=eg?ex:null):(eI["aria-label"]=eO?U:null,eI["aria-labelledby"]=eg&&!eO?ex:null);let eB=(0,d.Z)({},eI,en,{component:m},a.props,{className:(0,u.Z)(s,a.props.className),onTouchStart:eR,ref:eM},O?{onMouseMove:e=>{let t=a.props;t.onMouseMove&&t.onMouseMove(e),z={x:e.clientX,y:e.clientY},eD.current&&eD.current.update()}}:{}),eW={};q||(eB.onTouchStart=e=>{eR(e),clearTimeout(eh.current),clearTimeout(ev.current),ew(),ey.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ef.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ey.current,eZ(e)},I)},eB.onTouchEnd=e=>{a.props.onTouchEnd&&a.props.onTouchEnd(e),ew(),clearTimeout(eh.current),eh.current=setTimeout(()=>{eS(e)},F)}),R||(eB.onMouseOver=N(eZ,eB.onMouseOver),eB.onMouseLeave=N(eT,eB.onMouseLeave),ec||(eW.onMouseOver=eZ,eW.onMouseLeave=eT)),S||(eB.onFocus=E(eE,eB.onFocus),eB.onBlur=E(eN,eB.onBlur),ec||(eW.onFocus=eE,eW.onBlur=eN));let eF=(0,d.Z)({},r,{arrow:g,disableInteractive:ec,placement:J,touch:es.current,color:er,variant:Q,size:ee}),eL=T(eF),eA=(0,d.Z)({},en,{component:m,slots:et,slotProps:eo}),eH=l.useMemo(()=>[{name:"arrow",enabled:!!ed,options:{element:ed,padding:6}},{name:"offset",options:{offset:[0,10]}},...G||[]],[ed,G]),[eV,eX]=(0,y.Z)("root",{additionalProps:(0,d.Z)({id:ex,popperRef:eD,placement:J,anchorEl:O?{getBoundingClientRect:()=>({top:z.y,left:z.x,right:z.x,bottom:z.y,width:0,height:0})}:ea,open:!!ea&&eg,disablePortal:V,keepMounted:Y,direction:X,modifiers:eH},eW),ref:null,className:eL.root,elementType:j,externalForwardedProps:eA,ownerState:eF}),[eY,eG]=(0,y.Z)("arrow",{ref:eu,className:eL.arrow,elementType:C,externalForwardedProps:eA,ownerState:eF}),eJ=(0,n.jsxs)(eV,(0,d.Z)({},eX,!(null!=(o=r.slots)&&o.root)&&{as:b.r,slots:{root:m||"div"}},{children:[U,g?(0,n.jsx)(eY,(0,d.Z)({},eG)):null]}));return(0,n.jsxs)(l.Fragment,{children:[l.isValidElement(a)&&l.cloneElement(a,eB),V?eJ:(0,n.jsx)(w.ZP.Provider,{value:void 0,children:eJ})]})});var P=o(40911),q=o(99056),M=o(57814),D=o(48665),I=o(14726),O=o(27015),B=o(79531),W=o(32983),F=o(57346),L=o(92398),A=o(99513),H=o(30119),V=o(39332),X=o(67772),Y=o(39156);let{Search:G}=B.default;function J(e){var t,o,r;let{editorValue:i,chartData:d,tableData:u,handleChange:s}=e,c=l.useMemo(()=>d?(0,n.jsx)("div",{className:"flex-1 overflow-auto p-3",style:{flexShrink:0,overflow:"hidden"},children:(0,n.jsx)(Y.ZP,{chartsData:[d]})}):(0,n.jsx)("div",{}),[d]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex-1 flex overflow-hidden",children:[(0,n.jsx)("div",{className:"flex-1",style:{flexShrink:0,overflow:"auto"},children:(0,n.jsx)(A.Z,{value:(null==i?void 0:i.sql)||"",language:"mysql",onChange:s,thoughts:(null==i?void 0:i.thoughts)||""})}),c]}),(0,n.jsx)("div",{className:"h-96 border-[var(--joy-palette-divider)] border-t border-solid overflow-auto",children:(null==u?void 0:null===(t=u.values)||void 0===t?void 0:t.length)>0?(0,n.jsxs)(a.Z,{"aria-label":"basic table",stickyHeader:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:null==u?void 0:null===(o=u.columns)||void 0===o?void 0:o.map((e,t)=>(0,n.jsx)("th",{children:e},e+t))})}),(0,n.jsx)("tbody",{children:null==u?void 0:null===(r=u.values)||void 0===r?void 0:r.map((e,t)=>{var o;return(0,n.jsx)("tr",{children:null===(o=Object.keys(e))||void 0===o?void 0:o.map(t=>(0,n.jsx)("td",{children:e[t]},t))},t)})})]}):(0,n.jsx)("div",{className:"h-full flex justify-center items-center",children:(0,n.jsx)(W.Z,{})})})]})}var U=function(){var e,t,o,a,i;let[d,u]=l.useState([]),[s,c]=l.useState(""),[v,p]=l.useState(),[h,f]=l.useState(!0),[m,b]=l.useState(),[g,x]=l.useState(),[y,w]=l.useState(),[k,S]=l.useState(),[Z,T]=l.useState(),j=(0,V.useSearchParams)(),C=null==j?void 0:j.get("id"),$=null==j?void 0:j.get("scene"),{data:_,loading:z}=(0,r.Z)(async()=>await (0,H.Tk)("/v1/editor/sql/rounds",{con_uid:C}),{onSuccess:e=>{var t,o;let n=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t[(null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.length)-1];n&&p(null==n?void 0:n.round)}}),{run:N,loading:E}=(0,r.Z)(async()=>{var e,t;let o=null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name;return await (0,H.PR)("/api/v1/editor/sql/run",{db_name:o,sql:null==y?void 0:y.sql})},{manual:!0,onSuccess:e=>{var t,o;S({columns:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.colunms,values:null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.values})}}),{run:B,loading:W}=(0,r.Z)(async()=>{var e,t;let o=null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name,n={db_name:o,sql:null==y?void 0:y.sql};return"chat_dashboard"===$&&(n.chart_type=null==y?void 0:y.showcase),await (0,H.PR)("/api/v1/editor/chart/run",n)},{manual:!0,ready:!!(null==y?void 0:y.sql),onSuccess:e=>{if(null==e?void 0:e.success){var t,o,n,l,r,a,i;S({columns:(null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(o=t.sql_data)||void 0===o?void 0:o.colunms)||[],values:(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(l=n.sql_data)||void 0===l?void 0:l.values)||[]}),(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.chart_values)?b({type:null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.chart_type,values:null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.chart_values,title:null==y?void 0:y.title,description:null==y?void 0:y.thoughts}):b(void 0)}}}),{run:A,loading:Y}=(0,r.Z)(async()=>{var e,t,o,n,l;let r=null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name;return await (0,H.PR)("/api/v1/sql/editor/submit",{conv_uid:C,db_name:r,conv_round:v,old_sql:null==g?void 0:g.sql,old_speak:null==g?void 0:g.thoughts,new_sql:null==y?void 0:y.sql,new_speak:(null===(o=null==y?void 0:null===(n=y.thoughts)||void 0===n?void 0:n.match(/^\n--(.*)\n\n$/))||void 0===o?void 0:null===(l=o[1])||void 0===l?void 0:l.trim())||(null==y?void 0:y.thoughts)})},{manual:!0,onSuccess:e=>{(null==e?void 0:e.success)&&N()}}),{run:U,loading:K}=(0,r.Z)(async()=>{var e,t,o,n,l,r;let a=null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name;return await (0,H.PR)("/api/v1/chart/editor/submit",{conv_uid:C,chart_title:null==y?void 0:y.title,db_name:a,old_sql:null==g?void 0:null===(o=g[Z])||void 0===o?void 0:o.sql,new_chart_type:null==y?void 0:y.showcase,new_sql:null==y?void 0:y.sql,new_comment:(null===(n=null==y?void 0:null===(l=y.thoughts)||void 0===l?void 0:l.match(/^\n--(.*)\n\n$/))||void 0===n?void 0:null===(r=n[1])||void 0===r?void 0:r.trim())||(null==y?void 0:y.thoughts),gmt_create:new Date().getTime()})},{manual:!0,onSuccess:e=>{(null==e?void 0:e.success)&&B()}}),{data:Q}=(0,r.Z)(async()=>{var e,t;let o=null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name;return await (0,H.Tk)("/v1/editor/db/tables",{db_name:o,page_index:1,page_size:200})},{ready:!!(null===(e=null==_?void 0:null===(t=_.data)||void 0===t?void 0:t.find(e=>e.round===v))||void 0===e?void 0:e.db_name),refreshDeps:[null===(o=null==_?void 0:null===(a=_.data)||void 0===a?void 0:a.find(e=>e.round===v))||void 0===o?void 0:o.db_name]}),{run:ee}=(0,r.Z)(async e=>await (0,H.Tk)("/v1/editor/sql",{con_uid:C,round:e}),{manual:!0,onSuccess:e=>{let t;try{if(Array.isArray(null==e?void 0:e.data))t=null==e?void 0:e.data,T("0");else if("string"==typeof(null==e?void 0:e.data)){let o=JSON.parse(null==e?void 0:e.data);t=o}else t=null==e?void 0:e.data}catch(e){console.log(e)}finally{x(t),Array.isArray(t)?w(null==t?void 0:t[Number(Z||0)]):w(t)}}}),et=l.useMemo(()=>{let e=(t,o)=>t.map(t=>{let l=t.title,r=l.indexOf(s),a=l.substring(0,r),i=l.slice(r+s.length),d=r>-1?(0,n.jsx)(R,{title:((null==t?void 0:t.comment)||(null==t?void 0:t.title))+((null==t?void 0:t.can_null)==="YES"?"(can null)":"(can't null)"),children:(0,n.jsxs)("span",{children:[a,(0,n.jsx)("span",{className:"text-[#1677ff]",children:s}),i,(null==t?void 0:t.type)&&(0,n.jsx)(P.ZP,{gutterBottom:!0,level:"body3",className:"pl-0.5",style:{display:"inline"},children:"[".concat(null==t?void 0:t.type,"]")})]})}):(0,n.jsx)(R,{title:((null==t?void 0:t.comment)||(null==t?void 0:t.title))+((null==t?void 0:t.can_null)==="YES"?"(can null)":"(can't null)"),children:(0,n.jsxs)("span",{children:[l,(null==t?void 0:t.type)&&(0,n.jsx)(P.ZP,{gutterBottom:!0,level:"body3",className:"pl-0.5",style:{display:"inline"},children:"[".concat(null==t?void 0:t.type,"]")})]})});if(t.children){let n=o?String(o)+"_"+t.key:t.key;return{title:l,showTitle:d,key:n,children:e(t.children,n)}}return{title:l,showTitle:d,key:t.key}});return(null==Q?void 0:Q.data)?(u([null==Q?void 0:Q.data.key]),e([null==Q?void 0:Q.data])):[]},[s,Q]),eo=l.useMemo(()=>{let e=[],t=(o,n)=>{if(o&&!((null==o?void 0:o.length)<=0))for(let l=0;l<o.length;l++){let r=o[l],{key:a,title:i}=r;e.push({key:a,title:i,parentKey:n}),r.children&&t(r.children,a)}};return et&&t(et),e},[et]),en=(e,t)=>{let o;for(let n=0;n<t.length;n++){let l=t[n];l.children&&(l.children.some(t=>t.key===e)?o=l.key:en(e,l.children)&&(o=en(e,l.children)))}return o};function el(e){let t;if(!e)return{sql:"",thoughts:""};let o=e&&e.match(/(--.*)\n([\s\S]*)/),n="";return o&&o.length>=3&&(n=o[1],t=o[2]),{sql:t,thoughts:n}}return l.useEffect(()=>{v&&ee(v)},[ee,v]),l.useEffect(()=>{g&&"chat_dashboard"===$&&Z&&B()},[Z,$,g,B]),l.useEffect(()=>{g&&"chat_dashboard"!==$&&N()},[$,g,N]),(0,n.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,n.jsx)(X.Z,{}),(0,n.jsxs)("div",{className:"relative flex flex-1 overflow-auto",children:[(0,n.jsxs)("div",{className:"text h-full border-[var(--joy-palette-divider)] border-r border-solid p-3 max-h-full overflow-auto",style:{width:"300px"},children:[(0,n.jsxs)("div",{className:"absolute right-4 top-2 z-10",children:[(0,n.jsx)(I.ZP,{className:"mr-2",type:"primary",loading:E||W,onClick:async()=>{"chat_dashboard"===$?B():N()},children:"Run"}),(0,n.jsx)(I.ZP,{loading:Y||K,onClick:async()=>{"chat_dashboard"===$?await U():await A()},children:"Save"})]}),(0,n.jsxs)("div",{className:"flex items-center py-3",children:[(0,n.jsx)(q.Z,{className:"h-4 min-w-[240px]",size:"sm",value:v,onChange:(e,t)=>{p(t)},children:null==_?void 0:null===(i=_.data)||void 0===i?void 0:i.map(e=>(0,n.jsx)(M.Z,{value:null==e?void 0:e.round,children:null==e?void 0:e.round_name},null==e?void 0:e.round))}),(0,n.jsx)(O.Z,{className:"ml-2"})]}),(0,n.jsx)(G,{style:{marginBottom:8},placeholder:"Search",onChange:e=>{let{value:t}=e.target;if(null==Q?void 0:Q.data){if(t){let e=eo.map(e=>e.title.indexOf(t)>-1?en(e.key,et):null).filter((e,t,o)=>e&&o.indexOf(e)===t);u(e)}else u([]);c(t),f(!0)}}}),et&&et.length>0&&(0,n.jsx)(F.Z,{onExpand:e=>{u(e),f(!1)},expandedKeys:d,autoExpandParent:h,treeData:et,fieldNames:{title:"showTitle"}})]}),(0,n.jsx)("div",{className:"flex flex-col flex-1 max-w-full overflow-hidden",children:Array.isArray(g)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(D.Z,{className:"h-full",sx:{".ant-tabs-content, .ant-tabs-tabpane-active":{height:"100%"},"& .ant-tabs-card.ant-tabs-top >.ant-tabs-nav .ant-tabs-tab, & .ant-tabs-card.ant-tabs-top >div>.ant-tabs-nav .ant-tabs-tab":{borderRadius:"0"}},children:(0,n.jsx)(L.Z,{className:"h-full dark:text-white px-2",activeKey:Z,onChange:e=>{T(e),w(null==g?void 0:g[Number(e)])},items:null==g?void 0:g.map((e,t)=>({key:t+"",label:null==e?void 0:e.title,children:(0,n.jsx)("div",{className:"flex flex-col h-full",children:(0,n.jsx)(J,{editorValue:e,handleChange:e=>{let{sql:t,thoughts:o}=el(e);w(e=>Object.assign({},e,{sql:t,thoughts:o}))},tableData:k,chartData:m})})}))})})}):(0,n.jsx)(J,{editorValue:g,handleChange:e=>{let{sql:t,thoughts:o}=el(e);w(e=>Object.assign({},e,{sql:t,thoughts:o}))},tableData:k,chartData:void 0})})]})]})}},50132:function(e,t,o){var n=o(87462),l=o(1413),r=o(4942),a=o(97685),i=o(45987),d=o(93967),u=o.n(d),s=o(21770),c=o(67294),v=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],p=(0,c.forwardRef)(function(e,t){var o=e.prefixCls,d=void 0===o?"rc-checkbox":o,p=e.className,h=e.style,f=e.checked,m=e.disabled,b=e.defaultChecked,g=e.type,x=void 0===g?"checkbox":g,y=e.title,w=e.onChange,k=(0,i.Z)(e,v),S=(0,c.useRef)(null),Z=(0,s.Z)(void 0!==b&&b,{value:f}),T=(0,a.Z)(Z,2),j=T[0],C=T[1];(0,c.useImperativeHandle)(t,function(){return{focus:function(e){var t;null===(t=S.current)||void 0===t||t.focus(e)},blur:function(){var e;null===(e=S.current)||void 0===e||e.blur()},input:S.current}});var $=u()(d,p,(0,r.Z)((0,r.Z)({},"".concat(d,"-checked"),j),"".concat(d,"-disabled"),m));return c.createElement("span",{className:$,title:y,style:h},c.createElement("input",(0,n.Z)({},k,{className:"".concat(d,"-input"),ref:S,onChange:function(t){m||("checked"in e||C(t.target.checked),null==w||w({target:(0,l.Z)((0,l.Z)({},e),{},{type:x,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:m,checked:!!j,type:x})),c.createElement("span",{className:"".concat(d,"-inner")}))});t.Z=p}}]);