"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{40411:function(t,e,o){o.d(e,{Z:function(){return z}});var n=o(67294),r=o(93967),a=o.n(r),i=o(82225),l=o(98787),s=o(96159),c=o(53124),u=o(43109),d=o(14747),m=o(98719),b=o(45503),g=o(91945);let p=new u.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),f=new u.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),$=new u.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),v=new u.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),h=new u.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),y=new u.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),O=t=>{let{componentCls:e,iconCls:o,antCls:n,badgeShadowSize:r,motionDurationSlow:a,textFontSize:i,textFontSizeSM:l,statusSize:s,dotSize:c,textFontWeight:b,indicatorHeight:g,indicatorHeightSM:O,marginXS:w,calc:E}=t,N=`${n}-scroll-number`,S=(0,m.Z)(t,(t,o)=>{let{darkColor:n}=o;return{[`&${e} ${e}-color-${t}`]:{background:n,[`&:not(${e}-count)`]:{color:n}}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,d.Wf)(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{zIndex:t.indicatorZIndex,minWidth:g,height:g,color:t.badgeTextColor,fontWeight:b,fontSize:i,lineHeight:(0,u.bf)(g),whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:E(g).div(2).equal(),boxShadow:`0 0 0 ${(0,u.bf)(r)} ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:O,height:O,fontSize:l,lineHeight:(0,u.bf)(O),borderRadius:E(O).div(2).equal()},[`${e}-multiple-words`]:{padding:`0 ${(0,u.bf)(t.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${e}-dot`]:{zIndex:t.indicatorZIndex,width:c,minWidth:c,height:c,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,u.bf)(r)} ${t.badgeShadowColor}`},[`${e}-dot${N}`]:{transition:`background ${a}`},[`${e}-count, ${e}-dot, ${N}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${o}-spin`]:{animationName:y,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:s,height:s,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{overflow:"visible",color:t.colorPrimary,backgroundColor:t.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:r,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:p,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:w,color:t.colorText,fontSize:t.fontSize}}}),S),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:f,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:$,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:v,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:h,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${N}-custom-component, ${e}-count`]:{transform:"none"},[`${N}-custom-component, ${N}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${N}`]:{overflow:"hidden",[`${N}-only`]:{position:"relative",display:"inline-block",height:g,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${N}-only-unit`]:{height:g,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${N}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${N}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},w=t=>{let{fontHeight:e,lineWidth:o,marginXS:n,colorBorderBg:r}=t,a=t.colorBgContainer,i=t.colorError,l=t.colorErrorHover,s=(0,b.TS)(t,{badgeFontHeight:e,badgeShadowSize:o,badgeTextColor:a,badgeColor:i,badgeColorHover:l,badgeShadowColor:r,badgeProcessingDuration:"1.2s",badgeRibbonOffset:n,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return s},E=t=>{let{fontSize:e,lineHeight:o,fontSizeSM:n,lineWidth:r}=t;return{indicatorZIndex:"auto",indicatorHeight:Math.round(e*o)-2*r,indicatorHeightSM:e,dotSize:n/2,textFontSize:n,textFontSizeSM:n,textFontWeight:"normal",statusSize:n/2}};var N=(0,g.I$)("Badge",t=>{let e=w(t);return O(e)},E);let S=t=>{let{antCls:e,badgeFontHeight:o,marginXS:n,badgeRibbonOffset:r,calc:a}=t,i=`${e}-ribbon`,l=`${e}-ribbon-wrapper`,s=(0,m.Z)(t,(t,e)=>{let{darkColor:o}=e;return{[`&${i}-color-${t}`]:{background:o,color:o}}});return{[`${l}`]:{position:"relative"},[`${i}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,d.Wf)(t)),{position:"absolute",top:n,padding:`0 ${(0,u.bf)(t.paddingXS)}`,color:t.colorPrimary,lineHeight:(0,u.bf)(o),whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${i}-text`]:{color:t.colorTextLightSolid},[`${i}-corner`]:{position:"absolute",top:"100%",width:r,height:r,color:"currentcolor",border:`${(0,u.bf)(a(r).div(2).equal())} solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),s),{[`&${i}-placement-end`]:{insetInlineEnd:a(r).mul(-1).equal(),borderEndEndRadius:0,[`${i}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${i}-placement-start`]:{insetInlineStart:a(r).mul(-1).equal(),borderEndStartRadius:0,[`${i}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var C=(0,g.I$)(["Badge","Ribbon"],t=>{let e=w(t);return S(e)},E);function j(t){let e,{prefixCls:o,value:r,current:i,offset:l=0}=t;return l&&(e={position:"absolute",top:`${l}00%`,left:0}),n.createElement("span",{style:e,className:a()(`${o}-only-unit`,{current:i})},r)}function x(t){let e,o;let{prefixCls:r,count:a,value:i}=t,l=Number(i),s=Math.abs(a),[c,u]=n.useState(l),[d,m]=n.useState(s),b=()=>{u(l),m(s)};if(n.useEffect(()=>{let t=setTimeout(()=>{b()},1e3);return()=>{clearTimeout(t)}},[l]),c===l||Number.isNaN(l)||Number.isNaN(c))e=[n.createElement(j,Object.assign({},t,{key:l,current:!0}))],o={transition:"none"};else{e=[];let r=l+10,a=[];for(let t=l;t<=r;t+=1)a.push(t);let i=a.findIndex(t=>t%10===c);e=a.map((e,o)=>n.createElement(j,Object.assign({},t,{key:e,value:e%10,offset:o-i,current:o===i})));let u=d<s?1:-1;o={transform:`translateY(${-function(t,e,o){let n=t,r=0;for(;(n+10)%10!==e;)n+=o,r+=o;return r}(c,l,u)}00%)`}}return n.createElement("span",{className:`${r}-only`,style:o,onTransitionEnd:b},e)}var k=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)0>e.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};let I=n.forwardRef((t,e)=>{let{prefixCls:o,count:r,className:i,motionClassName:l,style:u,title:d,show:m,component:b="sup",children:g}=t,p=k(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:f}=n.useContext(c.E_),$=f("scroll-number",o),v=Object.assign(Object.assign({},p),{"data-show":m,style:u,className:a()($,i,l),title:d}),h=r;if(r&&Number(r)%1==0){let t=String(r).split("");h=n.createElement("bdi",null,t.map((e,o)=>n.createElement(x,{prefixCls:$,count:Number(r),value:e,key:t.length-o})))}return(u&&u.borderColor&&(v.style=Object.assign(Object.assign({},u),{boxShadow:`0 0 0 1px ${u.borderColor} inset`})),g)?(0,s.Tm)(g,t=>({className:a()(`${$}-custom-component`,null==t?void 0:t.className,l)})):n.createElement(b,Object.assign({},v,{ref:e}),h)});var T=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)0>e.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};let R=n.forwardRef((t,e)=>{var o,r,u,d,m;let{prefixCls:b,scrollNumberPrefixCls:g,children:p,status:f,text:$,color:v,count:h=null,overflowCount:y=99,dot:O=!1,size:w="default",title:E,offset:S,style:C,className:j,rootClassName:x,classNames:k,styles:R,showZero:z=!1}=t,B=T(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:P,direction:D,badge:W}=n.useContext(c.E_),F=P("badge",b),[Z,H,M]=N(F),_=h>y?`${y}+`:h,A="0"===_||0===_,q=null===h||A&&!z,L=(null!=f||null!=v)&&q,V=O&&!A,X=V?"":_,Y=(0,n.useMemo)(()=>{let t=null==X||""===X;return(t||A&&!z)&&!V},[X,A,z,V]),G=(0,n.useRef)(h);Y||(G.current=h);let J=G.current,K=(0,n.useRef)(X);Y||(K.current=X);let Q=K.current,U=(0,n.useRef)(V);Y||(U.current=V);let tt=(0,n.useMemo)(()=>{if(!S)return Object.assign(Object.assign({},null==W?void 0:W.style),C);let t={marginTop:S[1]};return"rtl"===D?t.left=parseInt(S[0],10):t.right=-parseInt(S[0],10),Object.assign(Object.assign(Object.assign({},t),null==W?void 0:W.style),C)},[D,S,C,null==W?void 0:W.style]),te=null!=E?E:"string"==typeof J||"number"==typeof J?J:void 0,to=Y||!$?null:n.createElement("span",{className:`${F}-status-text`},$),tn=J&&"object"==typeof J?(0,s.Tm)(J,t=>({style:Object.assign(Object.assign({},tt),t.style)})):void 0,tr=(0,l.o2)(v,!1),ta=a()(null==k?void 0:k.indicator,null===(o=null==W?void 0:W.classNames)||void 0===o?void 0:o.indicator,{[`${F}-status-dot`]:L,[`${F}-status-${f}`]:!!f,[`${F}-color-${v}`]:tr}),ti={};v&&!tr&&(ti.color=v,ti.background=v);let tl=a()(F,{[`${F}-status`]:L,[`${F}-not-a-wrapper`]:!p,[`${F}-rtl`]:"rtl"===D},j,x,null==W?void 0:W.className,null===(r=null==W?void 0:W.classNames)||void 0===r?void 0:r.root,null==k?void 0:k.root,H,M);if(!p&&L){let t=tt.color;return Z(n.createElement("span",Object.assign({},B,{className:tl,style:Object.assign(Object.assign(Object.assign({},null==R?void 0:R.root),null===(u=null==W?void 0:W.styles)||void 0===u?void 0:u.root),tt)}),n.createElement("span",{className:ta,style:Object.assign(Object.assign(Object.assign({},null==R?void 0:R.indicator),null===(d=null==W?void 0:W.styles)||void 0===d?void 0:d.indicator),ti)}),$&&n.createElement("span",{style:{color:t},className:`${F}-status-text`},$)))}return Z(n.createElement("span",Object.assign({ref:e},B,{className:tl,style:Object.assign(Object.assign({},null===(m=null==W?void 0:W.styles)||void 0===m?void 0:m.root),null==R?void 0:R.root)}),p,n.createElement(i.ZP,{visible:!Y,motionName:`${F}-zoom`,motionAppear:!1,motionDeadline:1e3},t=>{var e,o;let{className:r,ref:i}=t,l=P("scroll-number",g),s=U.current,c=a()(null==k?void 0:k.indicator,null===(e=null==W?void 0:W.classNames)||void 0===e?void 0:e.indicator,{[`${F}-dot`]:s,[`${F}-count`]:!s,[`${F}-count-sm`]:"small"===w,[`${F}-multiple-words`]:!s&&Q&&Q.toString().length>1,[`${F}-status-${f}`]:!!f,[`${F}-color-${v}`]:tr}),u=Object.assign(Object.assign(Object.assign({},null==R?void 0:R.indicator),null===(o=null==W?void 0:W.styles)||void 0===o?void 0:o.indicator),tt);return v&&!tr&&((u=u||{}).background=v),n.createElement(I,{prefixCls:l,show:!Y,motionClassName:r,className:c,count:Q,title:te,style:u,key:"scrollNumber",ref:i},tn)}),to))});R.Ribbon=t=>{let{className:e,prefixCls:o,style:r,color:i,children:s,text:u,placement:d="end",rootClassName:m}=t,{getPrefixCls:b,direction:g}=n.useContext(c.E_),p=b("ribbon",o),f=`${p}-wrapper`,[$,v,h]=C(p,f),y=(0,l.o2)(i,!1),O=a()(p,`${p}-placement-${d}`,{[`${p}-rtl`]:"rtl"===g,[`${p}-color-${i}`]:y},e),w={},E={};return i&&!y&&(w.background=i,E.color=i),$(n.createElement("div",{className:a()(f,m,v,h)},s,n.createElement("div",{className:a()(O,v),style:Object.assign(Object.assign({},w),r)},n.createElement("span",{className:`${p}-text`},u),n.createElement("div",{className:`${p}-corner`,style:E}))))};var z=R}}]);