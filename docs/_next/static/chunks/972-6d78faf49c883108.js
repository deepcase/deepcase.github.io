"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{5461:function(n,e,t){t.d(e,{S:function(){return o}});var r=t(7294);var i=n=>{const e=r.useRef(n);return r.useEffect((()=>{e.current=n})),e};const o=(n,e=100,t=!1)=>{const o=i(n),a=r.useRef(),c=[e,t,o];function u(){a.current&&clearTimeout(a.current),a.current=void 0}function s(){a.current=void 0}return r.useEffect((()=>u),c),r.useCallback((function(){const n=arguments,{current:r}=a;if(void 0===r&&t)return a.current=setTimeout(s,e),o.current.apply(null,n);r&&clearTimeout(r),a.current=setTimeout((()=>{a.current=void 0,o.current.apply(null,n)}),e)}),c)}},2136:function(n,e,t){t.d(e,{oM5:function(){return p.oM5},xuv:function(){return p.xuv},zxk:function(){return p.zxk},hE2:function(){return p.hE2},M5Y:function(){return p.M5Y},Cdc:function(){return p.Cdc},W20:function(){return p.W20},kCb:function(){return p.kCb},MJg:function(){return v},rjZ:function(){return p.rjZ},Ugi:function(){return p.Ugi},X6q:function(){return p.X6q},caK:function(){return p.caK},hU:function(){return p.hU},Eep:function(){return p.Eep},EiF:function(){return p.EiF},IIB:function(){return p.IIB},rUS:function(){return p.rUS},fGe:function(){return p.fGe},AB5:function(){return p.AB5},HCh:function(){return p.HCh},u_l:function(){return p.u_l},fef:function(){return p.fef},hzk:function(){return p.hzk},ZAr:function(){return p.ZAr},h_i:function(){return p.h_i},diJ:function(){return p.diJ},LZC:function(){return p.LZC},Kqy:function(){return p.Kqy},cXX:function(){return p.cXX},xvT:function(){return p.xvT},QI$:function(){return p.QI$},gCW:function(){return p.gCW},Eq9:function(){return p.Eq9},Ucj:function(){return p.Ucj},F4b:function(){return p.F4b},ach:function(){return g},O3d:function(){return p.O3d},Tb6:function(){return p.Tb6}});var r=t(603),i=t(5893),o=t(2684),a=(t(1664),t(9149),t(1799)),c=t(9396),u=t(9534),s=t(7294),l=t(9920),f=function(n,e,t,r,i,o){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1.1;return[-(e-o-r/2)/10*c,(n-i-t/2)/10*a,u]},d=function(n,e,t){return"perspective(600px) rotateX(".concat(-n,"deg) rotateY(").concat(-e,"deg) scale(").concat(t,")")};function v(n){var e=n.children,t=n.disabled,o=n.animatedProps,v=n.PaperProps,g=n.xm,h=void 0===g?1:g,m=n.ym,x=void 0===m?1:m,y=n.zm,b=void 0===y?1.1:y,Q=n.folder,j=void 0!==Q&&Q,C=n.paperComponent,_=void 0===C?p.zxk:C,w=n.setRef,Z=(0,u.Z)(n,["children","disabled","animatedProps","PaperProps","xm","ym","zm","folder","paperComponent","setRef"]),k=(0,s.useState)(!1),E=k[0],S=k[1],I=(0,r.Z)((0,l.useSpring)((function(){return{xys:[0,0,1],config:{mass:2,tension:150,friction:100}}})),2),L=I[0],R=I[1],z=(0,s.useRef)();return w&&(w.current=R),(0,i.jsx)(p.xuv,(0,c.Z)((0,a.Z)({ref:z},Z),{sx:(0,a.Z)({position:"relative",height:"100%",width:"100%"},null===Z||void 0===Z?void 0:Z.style),children:(0,i.jsx)(l.animated.div,(0,c.Z)((0,a.Z)({onMouseMove:function(n){var e=n.clientX,r=n.clientY,i=n.currentTarget;if(!t){var o,a,c=z.current.getBoundingClientRect();o=e-(null===c||void 0===c?void 0:c.x),a=r-(null===c||void 0===c?void 0:c.y),R({xys:f(o,a,i.offsetWidth,i.offsetHeight,i.offsetLeft,i.offsetTop,h,x,b)}),E||S(!0)}},onMouseLeave:function(){t||(R({xys:[0,0,1]}),S(!1))}},o),{style:(0,a.Z)({transform:L.xys.to(d),height:"100%",width:"100%"},null===o||void 0===o?void 0:o.style),children:(0,i.jsx)(p.xuv,(0,c.Z)((0,a.Z)({as:_,disabled:t,h:"100%",w:"100%"},v),{sx:(0,a.Z)({opacity:t?.5:1,textAlign:"left",borderRadius:j?16:void 0},null===v||void 0===v?void 0:v.style),children:e}))}))}))}t(11);var p=t(5367),g=function(n){var e=(0,r.Z)((0,o.ac)(n),2),t=e[0],i=e[1],a=(0,s.useState)(!1),c=a[0],u=a[1];return(0,s.useEffect)((function(){return u(t)}),[t,i]),[c,i]}},9062:function(n,e,t){t.d(e,{L:function(){return Z}});var r=t(5893),i=t(7294),o=t(1567),a=t(2136),c=t(1799),u=t(9396),s=t(9534),l=t(5461),f=t(6513),d=t(2116),v={type:"spring",damping:10,stiffness:100,duration:2},p={active:{opacity:0,display:"none",transition:v},inactive:{opacity:1,display:"flex",transition:v}},g={active:{opacity:1,display:"block",transition:v},inactive:{opacity:0,display:"none",transition:v}},h=i.memo((function(n){var e=n.onEnterCave,t=(n.ref,(0,o.$)().t);return(0,r.jsxs)(a.gCW,{spacing:2,textAlign:"center",width:"max-content",children:[(0,r.jsx)(a.xvT,{color:"rgb(252, 255, 254)",sx:{"&:first-letter":{color:"primary"}},children:t("podcast-invitation")}),(0,r.jsx)(a.xvT,{color:"primary",children:t("podcast-invitation--dragon_cave")}),(0,r.jsx)(a.xvT,{color:"rgb(252, 255, 254)",children:t("podcast-invitation--description")}),(0,r.jsx)(a.xvT,{color:"rgb(244, 4, 3)",children:t("podcast-invitation--all_record")}),(0,r.jsx)(a.xvT,{color:"primary",children:t("podcast-invitation--podcast_published")}),(0,r.jsx)(a.xvT,{color:"rgb(252, 255, 254)",children:t("podcast-invitation--podcast_available_for_crew")}),(0,r.jsx)(a.zxk,{bg:"rgb(102, 118, 135)",borderRadius:"none",_hover:{bg:"#54626b"},_active:{bg:"#54626b",transform:"scale(0.85)"},_focus:{border:"1px solid rgb(255, 255, 251)"},_last:{mt:6},onClick:function(n){return e(n)},"aria-label":t("podcast-invitation--button_enter_the_cave"),children:t("podcast-invitation--button_enter_the_cave")})]})})),m=i.memo((function(n){var e=n.contentReplacement,t=void 0!==e&&e,l=n.setContentReplacement,v=n.onSubmit,m=(0,s.Z)(n,["contentReplacement","setContentReplacement","onSubmit"]),y=((0,o.$)().t,(0,f._)());return(0,i.useEffect)((function(){!0===t?y.start("active"):y.start("inactive")}),[y,t]),(0,i.useEffect)((function(){var n=function(n){"Enter"!==n.code&&"NumpadEnter"!==n.code||(n.preventDefault(),l(!t))};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[]),(0,r.jsxs)(a.xuv,(0,u.Z)((0,c.Z)({pos:"relative",w:"100%",h:"100%",justifyContent:"center"},m),{children:[(0,r.jsx)(a.xuv,{as:d.E.div,variants:p,animate:y,sx:{width:"calc(19rem + 5vmax)"},children:(0,r.jsx)(h,{onEnterCave:function(n){n.stopPropagation(),l(!t)}})}),(0,r.jsx)(a.xuv,{as:d.E.div,variants:g,animate:y,sx:{width:"calc(19rem + 5vmax)"},children:(0,r.jsx)(x,{onSubmit:v})})]}))})),x=i.memo((function(n){var e=n.onSubmit,t=(0,o.$)().t,c=(0,i.useState)(""),u=c[0],s=c[1],f=(0,l.S)((function(){s(u)}),1e3);return(0,r.jsxs)(a.gCW,{spacing:2,align:"flex-start",children:[(0,r.jsx)(a.xvT,{htmlFor:"name",as:"label",fontSize:"sm",color:"primary",id:"nameLabel",children:t("podcast-invitation--your_name")}),(0,r.jsx)(a.IIB,{id:"name",type:"text",size:"sm",value:u,onChange:f,"aria-placeholder":t("podcast-invitation--your_name"),"aria-required":"false","aria-labelledby":"nameLabel"}),(0,r.jsx)(a.xvT,{htmlFor:"phone",as:"label",fontSize:"sm",color:"primary",id:"phoneLabel",children:t("podcast-invitation--your_phone")}),(0,r.jsx)(a.IIB,{id:"phone",type:"tel",size:"sm",value:u,onChange:f,"aria-placeholder":t("podcast-invitation--your_phone"),"aria-required":"false","aria-labelledby":"phoneLabel"}),(0,r.jsx)(a.xvT,{htmlFor:"email",as:"label",fontSize:"sm",color:"primary",id:"emailLabel",children:t("podcast-invitation--your_email")}),(0,r.jsx)(a.IIB,{id:"email",type:"email",size:"sm",value:u,onChange:f,"aria-placeholder":t("podcast-invitation--your_email"),"aria-required":"false","aria-labelledby":"emailLabel"}),(0,r.jsx)(a.xvT,{htmlFor:"greatest_achievement",as:"label",fontSize:"sm",color:"primary",id:"greatest_achievementLabel",children:t("podcast-invitation--greatest_achievement")}),(0,r.jsx)(a.IIB,{id:"greatest_achievement",type:"text",size:"sm",value:u,onChange:f,"aria-placeholder":t("podcast-invitation--greatest_achievement"),"aria-required":"false","aria-multiline":"true","aria-labelledby":"greatest_achievementLabel"}),(0,r.jsx)(a.xvT,{htmlFor:"legendary_event",as:"label",fontSize:"sm",color:"primary",id:"legendary_eventLabel",children:t("podcast-invitation--legendary_event")}),(0,r.jsx)(a.IIB,{id:"legendary_event",type:"text",size:"sm",value:u,onChange:f,"aria-required":"false","aria-placeholder":t("podcast-invitation--legendary_event"),"aria-labelledby":"legendary_eventLabel"}),(0,r.jsx)(a.xvT,{color:"whiteAlpha.800",fontSize:"xs",children:t("podcast-invitation--podcast_name")}),(0,r.jsx)(a.zxk,{colorScheme:"red",borderRadius:"none",width:"100%",_active:{transform:"scale(0.85)"},_last:{mt:6},onClick:e,"aria-label":t("podcast-invitation--button_call_the_dragon"),children:t("podcast-invitation--button_call_the_dragon")})]})})),y=t(4002),b=t(9342),Q={initial:{scale:1,originX:.5,originY:.5,transition:{type:"spring",bounce:.36}},grow:{scale:1.1,originX:.5,originY:.5,transition:{type:"spring",bounce:.36}}},j=i.memo((function(n){var e=n.contentReplacement,t=void 0!==e&&e,o=n.children,c=((0,i.useRef)(null),(0,f._)()),u=(0,y.q)(.5,{mass:.5,bounce:.25,stiffness:200,damping:100}),s=(0,y.q)(.5,{mass:.5,bounce:.25,stiffness:200,damping:100});console.log({x:u,y:s});var l=(0,b.H)(u,[0,.5],[50,50]),v=(0,b.H)(s,[0,.5],[50,50]);return(0,i.useEffect)((function(){1==t?c.start("grow"):c.start("initial")}),[c,t]),console.log({x:u,y:s}),console.log({xn:l,yn:v}),(0,r.jsxs)(a.xuv,{position:"relative",w:"100%",h:"100%",children:[(0,r.jsxs)(d.E.svg,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"100%",height:"100%",id:"blobSvg",style:{originX:l,originY:l},filter:"blur(0.4px)",animate:c,variants:Q,children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",style:{stopColor:"rgb(2, 25, 1)"}}),(0,r.jsx)("stop",{offset:"100%",style:{stopColor:"rgb(0, 0, 99)"}})]}),(0,r.jsxs)("linearGradient",{id:"gradient2",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",style:{stopColor:"rgb(0, 0, 52)"}}),(0,r.jsx)("stop",{offset:"100%",style:{stopColor:"rgb(0, 21, 179)"}})]}),(0,r.jsxs)("linearGradient",{id:"gradient3",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",style:{stopColor:"rgb(0, 0, 12)"}}),(0,r.jsx)("stop",{offset:"100%",style:{stopColor:"rgb(0, 169, 243)"}})]})]}),(0,r.jsx)(d.E.path,{id:"blob",fill:"url(#gradient2)",style:{opacity:.5,originX:.5,originY:.5},children:(0,r.jsx)("animate",{attributeName:"d",dur:"80s",repeatCount:"indefinite",values:"M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z"})}),(0,r.jsx)(d.E.path,{id:"blob",fill:"url(#gradient)",style:{opacity:.4,originX:.5,originY:.5},children:(0,r.jsx)("animate",{attributeName:"d",dur:"80s",repeatCount:"indefinite",values:"M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z;M384.02639,318.52969Q359.04619,387.05939,278.02474,435.01815Q197.0033,482.97691,137.94391,408.01485Q78.88453,333.05279,75.91422,249.0132Q72.94391,164.97361,138.46041,107.43731Q203.97691,49.90102,276.0132,88.41917Q348.04949,126.93731,378.52804,188.46866Q409.0066,250,384.02639,318.52969Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M451.77435,331.68776Q380.0333,413.37552,297.8522,408.1811Q215.67111,402.98668,163.20108,360.14446Q110.73105,317.30225,116.40549,253.17111Q122.07993,189.03996,169.7144,146.88551Q217.34887,104.73105,314.55328,76.47669Q411.75769,48.22232,467.63654,149.11116Q523.51539,250,451.77435,331.68776Z"})})]}),(0,r.jsx)(a.xuv,{position:"absolute",top:0,left:0,w:"100%",h:"100%",children:o})]})})),C={type:"spring",damping:10,stiffness:100,duration:2},_={active:{scale:1,opacity:1,display:"block",transition:C},inactive:{scale:0,opacity:0,display:"none",transition:C}},w={active:{scale:1,opacity:1,transition:C},inactive:{scale:0,opacity:0,transition:C}},Z=i.memo((function(n){var e=n.portalOpen,t=void 0===e||e,c=n.onClosePortal,u=((0,o.$)().t,(0,i.useState)(!1)),s=u[0],l=u[1],v=(0,f._)(),p=(0,i.useRef)();return(0,a.O3d)({ref:p,handler:c}),(0,i.useEffect)((function(){!0===t?v.start("active"):v.start("inactive")}),[v,t]),(0,r.jsx)(a.h_i,{children:(0,r.jsx)(a.M5Y,{as:d.E.div,animate:v,variants:w,width:"100vw",height:"100vh",position:"fixed",top:0,left:0,zIndex:3,backdropFilter:" blur(2px) contrast(1.2) ",backdropInvert:"25%",onClick:c,children:t&&(0,r.jsx)(a.xuv,{as:d.E.div,animate:v,variants:_,w:"100%",h:"100%",ref:p,children:(0,r.jsx)(j,{contentReplacement:s,children:(0,r.jsx)(m,{display:"flex",alignItems:"center",contentReplacement:s,setContentReplacement:function(){return l(!s)},onSubmit:function(){return l(!1)}})})})})})}))},4285:function(n,e,t){t.d(e,{z:function(){return v}});var r=t(5893),i=t(1596),o=t(4450),a=t(7294),c=t(1163),u=t(3282),s=t(542),l=a.createContext({event:function(n){(0,u.ZP)("reachGoal",n),s.ZP.event({category:"events",action:n})}});var f=function(){var n=(0,c.useRouter)();return(0,a.useEffect)((function(){s.ZP.pageview(null===n||void 0===n?void 0:n.asPath)}),[]),null},d=a.memo((function(n){var e=n.yandexMetrikaAccounts,t=void 0===e?[]:e,i=n.googleAnalyticsAccounts,o=void 0===i?[]:i,c=n.context,d=void 0===c?l:c,v=n.debug,p=void 0!==v&&v,g=n.children;return(0,a.useEffect)((function(){var n=null===o||void 0===o?void 0:o[0];n&&s.ZP.initialize({trackingId:n},{debug:p})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.OR,{accounts:t,options:{clickmap:!0,webvisor:!0,ecommerce:!0,trackHash:!0,trackLinks:!0,triggerEvent:!0}}),(0,r.jsxs)(d.Provider,{value:{},children:[(0,r.jsx)(f,{}),g]})]})}));function v(n){var e=n.children;return(0,r.jsx)(d,{yandexMetrikaAccounts:[84258358],googleAnalyticsAccounts:["G-3WH4B0WR4L"],children:(0,r.jsx)(o.QueryStoreProvider,{children:(0,r.jsx)(i.LocalStoreProvider,{children:e})})})}},1567:function(n,e,t){t.d(e,{$:function(){return h}});var r=t(7685),i=t(4942),o=t(7294),a=t(7715);function c(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var u={};function s(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];"string"===typeof e[0]&&u[e[0]]||("string"===typeof e[0]&&(u[e[0]]=new Date),c.apply(void 0,e))}function l(n,e,t){n.loadNamespaces(e,(function(){if(n.isInitialized)t();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),t()}))}}))}function f(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.languages[0],i=!!e.options&&e.options.fallbackLng,o=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(n,t){var r=e.services.backendConnector.state["".concat(n,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(r,n)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!a(r,n)||i&&!a(o,n))))}function d(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return s("i18n.languages were undefined or empty",e.languages),!0;var r=void 0!==e.options.ignoreJSONStructure;return r?e.hasLoadedNamespace(n,{precheck:function(e,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n))return!1}}):f(n,e,t)}function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=function(n,e){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=e?t.current:n}),[n,e]),t.current};function h(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,i=(0,o.useContext)(a.OO)||{},c=i.i18n,u=i.defaultNS,f=t||c||(0,a.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new a.zv),!f){s("You will need to pass in an i18next instance by using initReactI18next");var v=function(n){return Array.isArray(n)?n[n.length-1]:n},h=[v,{},!1];return h.t=v,h.i18n={},h.ready=!1,h}f.options.react&&void 0!==f.options.react.wait&&s("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=p(p(p({},(0,a.JP)()),f.options.react),e),x=m.useSuspense,y=m.keyPrefix,b=n||u||f.options&&f.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(b);var Q=(f.isInitialized||f.initializedStoreOnce)&&b.every((function(n){return d(n,f,m)}));function j(){return f.getFixedT(null,"fallback"===m.nsMode?b:b[0],y)}var C=(0,o.useState)(j),_=(0,r.Z)(C,2),w=_[0],Z=_[1],k=b.join(),E=g(k),S=(0,o.useRef)(!0);(0,o.useEffect)((function(){var n=m.bindI18n,e=m.bindI18nStore;function t(){S.current&&Z(j)}return S.current=!0,Q||x||l(f,b,(function(){S.current&&Z(j)})),Q&&E&&E!==k&&S.current&&Z(j),n&&f&&f.on(n,t),e&&f&&f.store.on(e,t),function(){S.current=!1,n&&f&&n.split(" ").forEach((function(n){return f.off(n,t)})),e&&f&&e.split(" ").forEach((function(n){return f.store.off(n,t)}))}}),[f,k]);var I=(0,o.useRef)(!0);(0,o.useEffect)((function(){S.current&&!I.current&&Z(j),I.current=!1}),[f]);var L=[w,f,Q];if(L.t=w,L.i18n=f,L.ready=Q,Q)return L;if(!Q&&!x)return L;throw new Promise((function(n){l(f,b,(function(){n()}))}))}},7685:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(3878);var i=t(181),o=t(5267);function a(n,e){return(0,r.Z)(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||(0,i.Z)(n,e)||(0,o.Z)()}},5512:function(n,e,t){t.d(e,{N:function(){return a}});var r=t(4960),i=t(5262),o=t(9073);function a(n,e){var t=(0,r.c)(e()),a=function(){return t.set(e())};return a(),(0,i.f)(n,(function(){return o.ZP.update(a,!1,!0)})),t}},4960:function(n,e,t){t.d(e,{c:function(){return u}});var r=t(1439),i=t(7294),o=t(3234),a=t(6014),c=t(6681);function u(n){var e=(0,c.h)((function(){return(0,o.B)(n)}));if((0,i.useContext)(a._).isStatic){var t=(0,r.CR)((0,i.useState)(n),2)[1];(0,i.useEffect)((function(){return e.onChange(t)}),[])}return e}},5262:function(n,e,t){t.d(e,{f:function(){return a},p:function(){return o}});var r=t(406),i=t(8868);function o(n,e){(0,i.L)((function(){if((0,r.i)(n))return n.onChange(e)}),[e])}function a(n,e){(0,i.L)((function(){var t=n.map((function(n){return n.onChange(e)}));return function(){return t.forEach((function(n){return n()}))}}))}},4002:function(n,e,t){t.d(e,{q:function(){return l}});var r=t(1439),i=t(7294),o=t(6228),a=t(406),c=t(4960),u=t(5262),s=t(6014);function l(n,e){void 0===e&&(e={});var t=(0,i.useContext)(s._).isStatic,l=(0,i.useRef)(null),f=(0,c.c)((0,a.i)(n)?n.get():n);return(0,i.useMemo)((function(){return f.attach((function(n,i){return t?i(n):(l.current&&l.current.stop(),l.current=(0,o.j)((0,r.pi)((0,r.pi)({from:f.get(),to:n,velocity:f.getVelocity()},e),{onUpdate:i})),f.get())}))}),[JSON.stringify(e)]),(0,u.p)(n,(function(n){return f.set(parseFloat(n))})),f}},9342:function(n,e,t){t.d(e,{H:function(){return u}});var r=t(1439),i=t(9180),o=function(n){return function(n){return"object"===typeof n&&n.mix}(n)?n.mix:void 0};var a=t(5512),c=t(6681);function u(n,e,t,a){var c="function"===typeof e?e:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=!Array.isArray(n[0]),a=t?0:-1,c=n[0+a],u=n[1+a],s=n[2+a],l=n[3+a],f=(0,i.s)(u,s,(0,r.pi)({mixer:o(s[0])},l));return t?f(c):f}(e,t,a);return Array.isArray(n)?s(n,c):s([n],(function(n){var e=(0,r.CR)(n,1)[0];return c(e)}))}function s(n,e){var t=(0,c.h)((function(){return[]}));return(0,a.N)(n,(function(){t.length=0;for(var r=n.length,i=0;i<r;i++)t[i]=n[i].get();return e(t)}))}}}]);