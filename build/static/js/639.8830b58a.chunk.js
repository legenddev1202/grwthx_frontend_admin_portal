"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[639],{97639:function(e,t,o){var r=o(63366),n=o(87462),i=o(72791),p=o(63733),a=o(94419),l=o(90183),s=o(12065),c=o(66934),u=o(13967),m=o(31402),d=o(14036),h=o(13208),f=o(91098),g=o(89683),b=o(42071),v=o(67384),T=o(23031),Z=o(98278),w=o(69293),y=o(80184);const x=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const R=(0,c.ZP)(f.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((e=>{let{theme:t,ownerState:o,open:r}=e;return(0,n.Z)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${w.Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${w.Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${w.Z.arrow}`]:(0,n.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${w.Z.arrow}`]:(0,n.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),P=(0,c.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(o.placement.split("-")[0])}`]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,s.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:(r=16/14,Math.round(1e5*r)/1e5)+"em",fontWeight:t.typography.fontWeightRegular},{[`.${w.Z.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},o.isRtl?(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${w.Z.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},o.isRtl?(0,n.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${w.Z.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${w.Z.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})});var r})),M=(0,c.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,s.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let C=!1,L=null,S={x:0,y:0};function k(e,t){return o=>{t&&t(o),e(o)}}const O=i.forwardRef((function(e,t){var o,s,c,O,E,$,F,N,I,B,D,W,A,j,_,z,U,H,q;const Q=(0,m.Z)({props:e,name:"MuiTooltip"}),{arrow:V=!1,children:X,components:Y={},componentsProps:G={},describeChild:J=!1,disableFocusListener:K=!1,disableHoverListener:ee=!1,disableInteractive:te=!1,disableTouchListener:oe=!1,enterDelay:re=100,enterNextDelay:ne=0,enterTouchDelay:ie=700,followCursor:pe=!1,id:ae,leaveDelay:le=0,leaveTouchDelay:se=1500,onClose:ce,onOpen:ue,open:me,placement:de="bottom",PopperComponent:he,PopperProps:fe={},slotProps:ge={},slots:be={},title:ve,TransitionComponent:Te=h.Z,TransitionProps:Ze}=Q,we=(0,r.Z)(Q,x),ye=i.isValidElement(X)?X:(0,y.jsx)("span",{children:X}),xe=(0,u.Z)(),Re="rtl"===xe.direction,[Pe,Me]=i.useState(),[Ce,Le]=i.useState(null),Se=i.useRef(!1),ke=te||pe,Oe=i.useRef(),Ee=i.useRef(),$e=i.useRef(),Fe=i.useRef(),[Ne,Ie]=(0,Z.Z)({controlled:me,default:!1,name:"Tooltip",state:"open"});let Be=Ne;const De=(0,v.Z)(ae),We=i.useRef(),Ae=i.useCallback((()=>{void 0!==We.current&&(document.body.style.WebkitUserSelect=We.current,We.current=void 0),clearTimeout(Fe.current)}),[]);i.useEffect((()=>()=>{clearTimeout(Oe.current),clearTimeout(Ee.current),clearTimeout($e.current),Ae()}),[Ae]);const je=e=>{clearTimeout(L),C=!0,Ie(!0),ue&&!Be&&ue(e)},_e=(0,g.Z)((e=>{clearTimeout(L),L=setTimeout((()=>{C=!1}),800+le),Ie(!1),ce&&Be&&ce(e),clearTimeout(Oe.current),Oe.current=setTimeout((()=>{Se.current=!1}),xe.transitions.duration.shortest)})),ze=e=>{Se.current&&"touchstart"!==e.type||(Pe&&Pe.removeAttribute("title"),clearTimeout(Ee.current),clearTimeout($e.current),re||C&&ne?Ee.current=setTimeout((()=>{je(e)}),C?ne:re):je(e))},Ue=e=>{clearTimeout(Ee.current),clearTimeout($e.current),$e.current=setTimeout((()=>{_e(e)}),le)},{isFocusVisibleRef:He,onBlur:qe,onFocus:Qe,ref:Ve}=(0,T.Z)(),[,Xe]=i.useState(!1),Ye=e=>{qe(e),!1===He.current&&(Xe(!1),Ue(e))},Ge=e=>{Pe||Me(e.currentTarget),Qe(e),!0===He.current&&(Xe(!0),ze(e))},Je=e=>{Se.current=!0;const t=ye.props;t.onTouchStart&&t.onTouchStart(e)},Ke=ze,et=Ue,tt=e=>{Je(e),clearTimeout($e.current),clearTimeout(Oe.current),Ae(),We.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Fe.current=setTimeout((()=>{document.body.style.WebkitUserSelect=We.current,ze(e)}),ie)},ot=e=>{ye.props.onTouchEnd&&ye.props.onTouchEnd(e),Ae(),clearTimeout($e.current),$e.current=setTimeout((()=>{_e(e)}),se)};i.useEffect((()=>{if(Be)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||_e(e)}}),[_e,Be]);const rt=(0,b.Z)(ye.ref,Ve,Me,t);ve||0===ve||(Be=!1);const nt=i.useRef(),it={},pt="string"===typeof ve;J?(it.title=Be||!pt||ee?null:ve,it["aria-describedby"]=Be?De:null):(it["aria-label"]=pt?ve:null,it["aria-labelledby"]=Be&&!pt?De:null);const at=(0,n.Z)({},it,we,ye.props,{className:(0,p.Z)(we.className,ye.props.className),onTouchStart:Je,ref:rt},pe?{onMouseMove:e=>{const t=ye.props;t.onMouseMove&&t.onMouseMove(e),S={x:e.clientX,y:e.clientY},nt.current&&nt.current.update()}}:{});const lt={};oe||(at.onTouchStart=tt,at.onTouchEnd=ot),ee||(at.onMouseOver=k(Ke,at.onMouseOver),at.onMouseLeave=k(et,at.onMouseLeave),ke||(lt.onMouseOver=Ke,lt.onMouseLeave=et)),K||(at.onFocus=k(Ge,at.onFocus),at.onBlur=k(Ye,at.onBlur),ke||(lt.onFocus=Ge,lt.onBlur=Ye));const st=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(Ce),options:{element:Ce,padding:4}}];return null!=(e=fe.popperOptions)&&e.modifiers&&(t=t.concat(fe.popperOptions.modifiers)),(0,n.Z)({},fe.popperOptions,{modifiers:t})}),[Ce,fe]),ct=(0,n.Z)({},Q,{isRtl:Re,arrow:V,disableInteractive:ke,placement:de,PopperComponentProp:he,touch:Se.current}),ut=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,p={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,d.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,a.Z)(p,w.Q,t)})(ct),mt=null!=(o=null!=(s=be.popper)?s:Y.Popper)?o:R,dt=null!=(c=null!=(O=null!=(E=be.transition)?E:Y.Transition)?O:Te)?c:h.Z,ht=null!=($=null!=(F=be.tooltip)?F:Y.Tooltip)?$:P,ft=null!=(N=null!=(I=be.arrow)?I:Y.Arrow)?N:M,gt=(0,l.$)(mt,(0,n.Z)({},fe,null!=(B=ge.popper)?B:G.popper,{className:(0,p.Z)(ut.popper,null==fe?void 0:fe.className,null==(D=null!=(W=ge.popper)?W:G.popper)?void 0:D.className)}),ct),bt=(0,l.$)(dt,(0,n.Z)({},Ze,null!=(A=ge.transition)?A:G.transition),ct),vt=(0,l.$)(ht,(0,n.Z)({},null!=(j=ge.tooltip)?j:G.tooltip,{className:(0,p.Z)(ut.tooltip,null==(_=null!=(z=ge.tooltip)?z:G.tooltip)?void 0:_.className)}),ct),Tt=(0,l.$)(ft,(0,n.Z)({},null!=(U=ge.arrow)?U:G.arrow,{className:(0,p.Z)(ut.arrow,null==(H=null!=(q=ge.arrow)?q:G.arrow)?void 0:H.className)}),ct);return(0,y.jsxs)(i.Fragment,{children:[i.cloneElement(ye,at),(0,y.jsx)(mt,(0,n.Z)({as:null!=he?he:f.Z,placement:de,anchorEl:pe?{getBoundingClientRect:()=>({top:S.y,left:S.x,right:S.x,bottom:S.y,width:0,height:0})}:Pe,popperRef:nt,open:!!Pe&&Be,id:De,transition:!0},lt,gt,{popperOptions:st,children:e=>{let{TransitionProps:t}=e;return(0,y.jsx)(dt,(0,n.Z)({timeout:xe.transitions.duration.shorter},t,bt,{children:(0,y.jsxs)(ht,(0,n.Z)({},vt,{children:[ve,V?(0,y.jsx)(ft,(0,n.Z)({},Tt,{ref:Le})):null]}))}))}}))]})}));t.Z=O},69293:function(e,t,o){o.d(t,{Q:function(){return i}});var r=o(75878),n=o(21217);function i(e){return(0,n.Z)("MuiTooltip",e)}const p=(0,r.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=p}}]);
//# sourceMappingURL=639.8830b58a.chunk.js.map