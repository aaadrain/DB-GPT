(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{98165:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(87462),i=n(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},a=n(84089),r=i.forwardRef(function(e,t){return i.createElement(a.Z,(0,o.Z)({},e,{ref:t,icon:l}))})},88484:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(87462),i=n(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},a=n(84089),r=i.forwardRef(function(e,t){return i.createElement(a.Z,(0,o.Z)({},e,{ref:t,icon:l}))})},75081:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(94184),i=n.n(o),l=n(98423),a=n(67294),r=n(96159),s=n(53124),c=n(23183),d=n(14747),p=n(67968),m=n(45503);let u=new c.E4("antSpinMove",{to:{opacity:1}}),h=new c.E4("antRotate",{to:{transform:"rotate(405deg)"}}),g=e=>({[`${e.componentCls}`]:Object.assign(Object.assign({},(0,d.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${e.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${e.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-e.spinDotSize/2},[`${e.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(e.spinDotSize-e.fontSize)/2+2,textShadow:`0 1px 2px ${e.colorBgContainer}`,fontSize:e.fontSize},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSize/2)-10},"&-sm":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeSM/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeSM-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeSM/2)-10}},"&-lg":{[`${e.componentCls}-dot`]:{margin:-(e.spinDotSizeLG/2)},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeLG-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-(e.spinDotSizeLG/2)-10}}},[`${e.componentCls}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${e.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:e.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(e.spinDotSize-e.marginXXS/2)/2,height:(e.spinDotSize-e.marginXXS/2)/2,backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:u,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:h,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeSM,i:{width:(e.spinDotSizeSM-e.marginXXS/2)/2,height:(e.spinDotSizeSM-e.marginXXS/2)/2}},[`&-lg ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeLG,i:{width:(e.spinDotSizeLG-e.marginXXS)/2,height:(e.spinDotSizeLG-e.marginXXS)/2}},[`&${e.componentCls}-show-text ${e.componentCls}-text`]:{display:"block"}})});var f=(0,p.Z)("Spin",e=>{let t=(0,m.TS)(e,{spinDotDefault:e.colorTextDescription,spinDotSize:e.controlHeightLG/2,spinDotSizeSM:.35*e.controlHeightLG,spinDotSizeLG:e.controlHeight});return[g(t)]},{contentHeight:400}),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};let x=null,y=e=>{let{spinPrefixCls:t,spinning:n=!0,delay:o=0,className:c,rootClassName:d,size:p="default",tip:m,wrapperClassName:u,style:h,children:g,hashId:f}=e,y=b(e,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[v,C]=a.useState(()=>n&&(!n||!o||!!isNaN(Number(o))));a.useEffect(()=>{if(n){var e;let t=function(e,t,n){var o,i=n||{},l=i.noTrailing,a=void 0!==l&&l,r=i.noLeading,s=void 0!==r&&r,c=i.debounceMode,d=void 0===c?void 0:c,p=!1,m=0;function u(){o&&clearTimeout(o)}function h(){for(var n=arguments.length,i=Array(n),l=0;l<n;l++)i[l]=arguments[l];var r=this,c=Date.now()-m;function h(){m=Date.now(),t.apply(r,i)}function g(){o=void 0}!p&&(s||!d||o||h(),u(),void 0===d&&c>e?s?(m=Date.now(),a||(o=setTimeout(d?g:h,e))):h():!0!==a&&(o=setTimeout(d?g:h,void 0===d?e-c:e)))}return h.cancel=function(e){var t=(e||{}).upcomingOnly;u(),p=!(void 0!==t&&t)},h}(o,()=>{C(!0)},{debounceMode:!1!==(void 0!==(e=({}).atBegin)&&e)});return t(),()=>{var e;null===(e=null==t?void 0:t.cancel)||void 0===e||e.call(t)}}C(!1)},[o,n]);let S=a.useMemo(()=>void 0!==g,[g]),{direction:j,spin:w}=a.useContext(s.E_),$=i()(t,null==w?void 0:w.className,{[`${t}-sm`]:"small"===p,[`${t}-lg`]:"large"===p,[`${t}-spinning`]:v,[`${t}-show-text`]:!!m,[`${t}-rtl`]:"rtl"===j},c,d,f),k=i()(`${t}-container`,{[`${t}-blur`]:v}),Z=(0,l.Z)(y,["indicator","prefixCls"]),N=Object.assign(Object.assign({},null==w?void 0:w.style),h),z=a.createElement("div",Object.assign({},Z,{style:N,className:$,"aria-live":"polite","aria-busy":v}),function(e,t){let{indicator:n}=t,o=`${e}-dot`;return null===n?null:(0,r.l$)(n)?(0,r.Tm)(n,{className:i()(n.props.className,o)}):(0,r.l$)(x)?(0,r.Tm)(x,{className:i()(x.props.className,o)}):a.createElement("span",{className:i()(o,`${e}-dot-spin`)},a.createElement("i",{className:`${e}-dot-item`,key:1}),a.createElement("i",{className:`${e}-dot-item`,key:2}),a.createElement("i",{className:`${e}-dot-item`,key:3}),a.createElement("i",{className:`${e}-dot-item`,key:4}))}(t,e),m&&S?a.createElement("div",{className:`${t}-text`},m):null);return S?a.createElement("div",Object.assign({},Z,{className:i()(`${t}-nested-loading`,u,f)}),v&&a.createElement("div",{key:"loading"},z),a.createElement("div",{className:k,key:"container"},g)):z},v=e=>{let{prefixCls:t}=e,{getPrefixCls:n}=a.useContext(s.E_),o=n("spin",t),[i,l]=f(o),r=Object.assign(Object.assign({},e),{spinPrefixCls:o,hashId:l});return i(a.createElement(y,Object.assign({},r)))};v.setDefaultIndicator=e=>{x=e};var C=v},66309:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var o=n(67294),i=n(97937),l=n(94184),a=n.n(l),r=n(98787),s=n(69760),c=n(45353),d=n(53124),p=n(14747),m=n(45503),u=n(67968);let h=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:i}=e,l=o-n;return{[i]:Object.assign(Object.assign({},(0,p.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${i}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${i}-close-icon`]:{marginInlineStart:t-n,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${i}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${i}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${i}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},g=e=>{let{lineWidth:t,fontSizeIcon:n}=e,o=e.fontSizeSM,i=`${e.lineHeightSM*o}px`,l=(0,m.TS)(e,{tagFontSize:o,tagLineHeight:i,tagIconSize:n-2*t,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return l},f=e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText});var b=(0,u.Z)("Tag",e=>{let t=g(e);return h(t)},f),x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n},y=n(98719);let v=e=>(0,y.Z)(e,(t,n)=>{let{textColor:o,lightBorderColor:i,lightColor:l,darkColor:a}=n;return{[`${e.componentCls}-${t}`]:{color:o,background:l,borderColor:i,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var C=(0,u.b)(["Tag","preset"],e=>{let t=g(e);return v(t)},f);let S=(e,t,n)=>{let o=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{[`${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var j=(0,u.b)(["Tag","status"],e=>{let t=g(e);return[S(t,"success","Success"),S(t,"processing","Info"),S(t,"error","Error"),S(t,"warning","Warning")]},f),w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n};let $=o.forwardRef((e,t)=>{let{prefixCls:n,className:l,rootClassName:p,style:m,children:u,icon:h,color:g,onClose:f,closeIcon:x,closable:y,bordered:v=!0}=e,S=w(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:$,direction:k,tag:Z}=o.useContext(d.E_),[N,z]=o.useState(!0);o.useEffect(()=>{"visible"in S&&z(S.visible)},[S.visible]);let E=(0,r.o2)(g),O=(0,r.yT)(g),D=E||O,P=Object.assign(Object.assign({backgroundColor:g&&!D?g:void 0},null==Z?void 0:Z.style),m),T=$("tag",n),[I,_]=b(T),M=a()(T,null==Z?void 0:Z.className,{[`${T}-${g}`]:D,[`${T}-has-color`]:g&&!D,[`${T}-hidden`]:!N,[`${T}-rtl`]:"rtl"===k,[`${T}-borderless`]:!v},l,p,_),H=e=>{e.stopPropagation(),null==f||f(e),e.defaultPrevented||z(!1)},[,V]=(0,s.Z)(y,x,e=>null===e?o.createElement(i.Z,{className:`${T}-close-icon`,onClick:H}):o.createElement("span",{className:`${T}-close-icon`,onClick:H},e),null,!1),B="function"==typeof S.onClick||u&&"a"===u.type,L=h||null,G=L?o.createElement(o.Fragment,null,L,u&&o.createElement("span",null,u)):u,X=o.createElement("span",Object.assign({},S,{ref:t,className:M,style:P}),G,V,E&&o.createElement(C,{key:"preset",prefixCls:T}),O&&o.createElement(j,{key:"status",prefixCls:T}));return I(B?o.createElement(c.Z,{component:"Tag"},X):X)});$.CheckableTag=e=>{let{prefixCls:t,className:n,checked:i,onChange:l,onClick:r}=e,s=x(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:c}=o.useContext(d.E_),p=c("tag",t),[m,u]=b(p),h=a()(p,`${p}-checkable`,{[`${p}-checkable-checked`]:i},n,u);return m(o.createElement("span",Object.assign({},s,{className:h,onClick:e=>{null==l||l(!i),null==r||r(e)}})))};var k=$},70355:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agent",function(){return n(23867)}])},23867:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var o=n(85893),i=n(50489),l=n(577),a=n(39479),r=n(2453),s=n(83062),c=n(75081),d=n(59566),p=n(71577),m=n(85813),u=n(66309),h=n(67294),g=n(32983),f=n(67421),b=function(e){let{error:t,description:n,refresh:i}=e,{t:l}=(0,f.$G)();return(0,o.jsx)(g.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"flex items-center justify-center flex-col h-full w-full",description:t?(0,o.jsx)(p.ZP,{type:"primary",onClick:i,children:l("try_again")}):null!=n?n:l("no_data")})},x=n(50888),y=n(87462),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},C=n(84089),S=h.forwardRef(function(e,t){return h.createElement(C.Z,(0,y.Z)({},e,{ref:t,icon:v}))}),j=n(23430),w=n(68795),$=n(98165),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},Z=h.forwardRef(function(e,t){return h.createElement(C.Z,(0,y.Z)({},e,{ref:t,icon:k}))}),N=function(){let{t:e}=(0,f.$G)(),[t,n]=(0,h.useState)(!1),[g,y]=(0,h.useState)(!1),[v,C]=(0,h.useState)(),[k]=a.Z.useForm(),N=(0,h.useMemo)(()=>({pageNo:1,pageSize:20}),[]),{data:z=[],loading:E,refresh:O}=(0,l.Z)(async()=>{var e;let t={page_index:N.pageNo,page_size:N.pageSize,filter:k.getFieldsValue()},[n,o]=await (0,i.Vx)((0,i.bC)(t));return y(!!n),null!==(e=null==o?void 0:o.datas)&&void 0!==e?e:[]}),D=async()=>{try{n(!0);let[e]=await (0,i.Vx)((0,i.DM)());if(e)return;r.ZP.success("success"),O()}finally{n(!1)}},P=(0,h.useCallback)(async(e,t,n)=>{if(v)return;C(t);let[o]=await (0,i.Vx)((n?i.v6:i.YU)(e));o||(r.ZP.success("success"),O()),C(void 0)},[v,O]),T=(0,h.useCallback)((e,t)=>t===v?(0,o.jsx)(x.Z,{}):e.installed?(0,o.jsx)(s.Z,{title:"Uninstall",children:(0,o.jsx)("div",{className:"w-full h-full",onClick:()=>{P(e.name,t,!1)},children:(0,o.jsx)(S,{})})}):(0,o.jsx)(s.Z,{title:"Install",children:(0,o.jsx)("div",{className:"w-full h-full",onClick:()=>{P(e.name,t,!0)},children:(0,o.jsx)(j.Z,{})})}),[v,P]);return(0,o.jsxs)(c.Z,{spinning:E,children:[(0,o.jsxs)(a.Z,{form:k,layout:"inline",onFinish:O,className:"mb-2",children:[(0,o.jsx)(a.Z.Item,{className:"!mb-2",name:"name",label:"Name",children:(0,o.jsx)(d.default,{allowClear:!0,className:"w-48"})}),(0,o.jsxs)(a.Z.Item,{children:[(0,o.jsx)(p.ZP,{className:"mr-2",type:"primary",htmlType:"submit",icon:(0,o.jsx)(w.Z,{}),children:e("Search")}),(0,o.jsx)(p.ZP,{loading:t,type:"primary",icon:(0,o.jsx)($.Z,{}),onClick:D,children:e("Update_From_Github")})]})]}),!z.length&&!E&&(0,o.jsx)(b,{error:g,refresh:O}),(0,o.jsx)("div",{className:"flex flex-wrap gap-2 md:gap-4",children:z.map((e,t)=>(0,o.jsxs)(m.Z,{className:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",actions:[T(e,t),(0,o.jsx)(s.Z,{title:"Github",children:(0,o.jsx)("div",{className:"w-full h-full",onClick:()=>{window.open(e.storage_url,"_blank")},children:(0,o.jsx)(Z,{})})},"github")],children:[(0,o.jsx)(s.Z,{title:e.name,children:(0,o.jsx)("h2",{className:"mb-2 text-base font-semibold line-clamp-1",children:e.name})}),e.author&&(0,o.jsx)(u.Z,{children:e.author}),e.version&&(0,o.jsxs)(u.Z,{children:["v",e.version]}),e.type&&(0,o.jsxs)(u.Z,{children:["Type ",e.type]}),e.storage_channel&&(0,o.jsx)(u.Z,{children:e.storage_channel}),(0,o.jsx)(s.Z,{title:e.description,children:(0,o.jsx)("p",{className:"mt-2 line-clamp-2 text-gray-400 text-sm",children:e.description})})]},e.id))})]})},z=n(84553),E=n(88484),O=function(){let{t:e}=(0,f.$G)(),[t,n]=r.ZP.useMessage(),[a,d]=(0,h.useState)(!1),[g,y]=(0,h.useState)(!1),[v,C]=(0,h.useState)(),{data:j=[],loading:w,refresh:$}=(0,l.Z)(async()=>{let[e,t]=await (0,i.Vx)((0,i.N6)());return y(!!e),null!=t?t:[]}),k=async(e,t)=>{if(v)return;C(t);let[n]=await (0,i.Vx)((0,i.YU)(e));r.ZP[n?"error":"success"](n?"failed":"success"),n||$(),C(void 0)},Z=(0,h.useCallback)((e,t)=>t===v?(0,o.jsx)(x.Z,{}):(0,o.jsx)(s.Z,{title:"Uninstall",children:(0,o.jsx)("div",{className:"w-full h-full",onClick:()=>{k(e.name,t)},children:(0,o.jsx)(S,{})})}),[v]),N=async e=>{if(!e){r.ZP.error("Please select the *.zip,*.rar file");return}try{let n=e.file;d(!0);let o=new FormData;o.append("doc_file",n),t.open({content:"Uploading ".concat(n.name),type:"loading",duration:0});let[l]=await (0,i.Vx)((0,i.Kn)(void 0,o,{timeout:6e4}));if(l)return;r.ZP.success("success"),$()}catch(e){r.ZP.error((null==e?void 0:e.message)||"Upload Error")}finally{d(!1),t.destroy()}};return(0,o.jsxs)(c.Z,{spinning:w,children:[n,(0,o.jsx)("div",{children:(0,o.jsx)(z.default,{disabled:w,className:"mr-1",beforeUpload:()=>!1,name:"file",accept:".zip,.rar",multiple:!1,onChange:N,showUploadList:{showDownloadIcon:!1,showPreviewIcon:!1,showRemoveIcon:!1},itemRender:()=>(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(p.ZP,{loading:a,type:"primary",icon:(0,o.jsx)(E.Z,{}),children:e("Upload")})})}),!j.length&&!w&&(0,o.jsx)(b,{error:g,refresh:$}),(0,o.jsx)("div",{className:"flex gap-2 md:gap-4",children:j.map((e,t)=>(0,o.jsxs)(m.Z,{className:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",actions:[Z(e,t)],children:[(0,o.jsx)(s.Z,{title:e.name,children:(0,o.jsx)("h2",{className:"mb-2 text-base font-semibold line-clamp-1",children:e.name})}),e.version&&(0,o.jsxs)(u.Z,{children:["v",e.version]}),e.type&&(0,o.jsxs)(u.Z,{children:["Type ",e.type]}),(0,o.jsx)(s.Z,{title:e.description,children:(0,o.jsx)("p",{className:"mt-2 line-clamp-2 text-gray-400 text-sm",children:e.description})})]},e.id))})]})},D=n(44442),P=function(){let{t:e}=(0,f.$G)(),[t,n]=(0,h.useState)("market"),i=(0,h.useMemo)(()=>[{key:"market",label:e("Market_Plugins"),children:(0,o.jsx)(N,{})},{key:"my",label:e("My_Plugins"),children:"market"===t?null:(0,o.jsx)(O,{})}],[e,t]);return(0,o.jsx)("div",{className:"h-screen p-4 md:p-6 overflow-y-auto",children:(0,o.jsx)(D.Z,{activeKey:t,items:i,onChange:n})})}}},function(e){e.O(0,[113,17,479,442,553,813,774,888,179],function(){return e(e.s=70355)}),_N_E=e.O()}]);