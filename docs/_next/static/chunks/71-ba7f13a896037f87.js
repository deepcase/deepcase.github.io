"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{2136:function(n,t,e){e.d(t,{UQy:function(){return h.UQy},KFZ:function(){return h.KFZ},XEm:function(){return h.XEm},Qdk:function(){return h.Qdk},Hk3:function(){return h.Hk3},oM5:function(){return h.oM5},xuv:function(){return h.xuv},zxk:function(){return h.zxk},hE2:function(){return h.hE2},M5Y:function(){return h.M5Y},W20:function(){return h.W20},kCb:function(){return h.kCb},MJg:function(){return v},rjZ:function(){return h.rjZ},Ugi:function(){return h.Ugi},X6q:function(){return h.X6q},caK:function(){return h.caK},hU:function(){return h.hU},Eep:function(){return h.Eep},EiF:function(){return h.EiF},rUS:function(){return h.rUS},fGe:function(){return h.fGe},AB5:function(){return h.AB5},HCh:function(){return h.HCh},u_l:function(){return h.u_l},fef:function(){return h.fef},hzk:function(){return h.hzk},ZAr:function(){return h.ZAr},diJ:function(){return h.diJ},LZC:function(){return h.LZC},Kqy:function(){return h.Kqy},cXX:function(){return h.cXX},xvT:function(){return h.xvT},QI$:function(){return h.QI$},gCW:function(){return h.gCW},Eq9:function(){return h.Eq9},Ucj:function(){return h.Ucj},F4b:function(){return h.F4b},ach:function(){return x},Tb6:function(){return h.Tb6}});var r=e(603),i=e(5893),o=e(2684),u=(e(1664),e(9149),e(1799)),c=e(9396),a=e(9534),s=e(7294),f=e(9920),l=function(n,t,e,r,i,o){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,a=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1.1;return[-(t-o-r/2)/10*c,(n-i-e/2)/10*u,a]},d=function(n,t,e){return"perspective(600px) rotateX(".concat(-n,"deg) rotateY(").concat(-t,"deg) scale(").concat(e,")")};function v(n){var t=n.children,e=n.disabled,o=n.animatedProps,v=n.PaperProps,x=n.xm,p=void 0===x?1:x,g=n.ym,m=void 0===g?1:g,y=n.zm,j=void 0===y?1.1:y,b=n.folder,Z=void 0!==b&&b,k=n.paperComponent,C=void 0===k?h.zxk:k,E=n.setRef,w=(0,a.Z)(n,["children","disabled","animatedProps","PaperProps","xm","ym","zm","folder","paperComponent","setRef"]),P=(0,s.useState)(!1),R=P[0],S=P[1],U=(0,r.Z)((0,f.useSpring)((function(){return{xys:[0,0,1],config:{mass:2,tension:150,friction:100}}})),2),A=U[0],M=U[1],X=(0,s.useRef)();return E&&(E.current=M),(0,i.jsx)(h.xuv,(0,c.Z)((0,u.Z)({ref:X},w),{sx:(0,u.Z)({position:"relative",height:"100%",width:"100%"},null===w||void 0===w?void 0:w.style),children:(0,i.jsx)(f.animated.div,(0,c.Z)((0,u.Z)({onMouseMove:function(n){var t=n.clientX,r=n.clientY,i=n.currentTarget;if(!e){var o,u,c=X.current.getBoundingClientRect();o=t-(null===c||void 0===c?void 0:c.x),u=r-(null===c||void 0===c?void 0:c.y),M({xys:l(o,u,i.offsetWidth,i.offsetHeight,i.offsetLeft,i.offsetTop,p,m,j)}),R||S(!0)}},onMouseLeave:function(){e||(M({xys:[0,0,1]}),S(!1))}},o),{style:(0,u.Z)({transform:A.xys.to(d),height:"100%",width:"100%"},null===o||void 0===o?void 0:o.style),children:(0,i.jsx)(h.xuv,(0,c.Z)((0,u.Z)({as:C,disabled:e,h:"100%",w:"100%"},v),{sx:(0,u.Z)({opacity:e?.5:1,textAlign:"left",borderRadius:Z?16:void 0},null===v||void 0===v?void 0:v.style),children:t}))}))}))}e(11);var h=e(9032),x=function(n){var t=(0,r.Z)((0,o.ac)(n),2),e=t[0],i=t[1],u=(0,s.useState)(!1),c=u[0],a=u[1];return(0,s.useEffect)((function(){return a(e)}),[e,i]),[c,i]}},3908:function(n,t,e){e.d(t,{v:function(){return g}});var r=e(1799),i=e(9396),o=e(603),u=e(5893),c=e(2933),a=e(2116),s=e(6513),f=e(7294),l=e(1567),d=e(9583),v=e(1649),h=e(7650),x=e(2136),p={open:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*n+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},g=f.memo((function(n){var t=(0,o.Z)((0,c.n)(!1,!0),2),e=t[0],s=t[1],h=(0,f.useRef)(null),g=function(n){var t=(0,f.useRef)({width:0,height:0});return(0,f.useEffect)((function(){t.current.width=n.current.offsetWidth,t.current.height=n.current.offsetHeight}),[]),t.current}(h).height,j=(0,l.$)().i18n,b=j.language,Z=(0,f.useCallback)((function(n){j.changeLanguage(n)}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(x.kCb,(0,i.Z)((0,r.Z)({},n),{children:[(0,u.jsx)(y,{boxVariant:m,children:(0,u.jsx)(x.hU,{variant:"outline",isRound:!0,colorScheme:"purple","aria-label":"menu button",icon:(0,u.jsx)(v.M1X,{}),onClick:function(){return s()},_focus:{boxShadow:"none"},_hover:{transform:"scale(1.1)"}})}),(0,u.jsx)(x.LZC,{}),(0,u.jsx)(y,{boxVariant:m,children:(0,u.jsx)(x.hU,{variant:"outline",isRound:!0,colorScheme:"purple","aria-label":"russian language button",icon:(0,u.jsx)(d.hTt,{}),_focus:{boxShadow:"none"},_hover:{transform:"scale(1.1)"},onClick:function(){Z("en"===b?"ru":"en")}})})]})),(0,u.jsxs)(a.E.nav,{initial:!1,animate:e?"open":"closed",custom:g,ref:h,children:[(0,u.jsx)(a.E.div,{variants:p}),(0,u.jsx)(k,{isOpen:e,onClose:s})]})]})})),m={visible:{opacity:1,scale:1,transition:{duration:.5}},hidden:{opacity:0,scale:0}},y=f.memo((function(n){var t=n.children,e=n.boxVariant,r=(0,s._)(),i=(0,o.Z)((0,h.YD)(),2),c=i[0],l=i[1];return(0,f.useEffect)((function(){l?r.start("visible"):r.start("hidden")}),[r,l]),(0,u.jsx)(a.E.div,{ref:c,variants:e,initial:"hidden",animate:r,children:t})})),j={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},b=f.memo((function(n){var t=n.children;return(0,u.jsx)(a.E.li,{variants:j,whileHover:{scale:1.1},whileTap:{scale:.95},style:{width:120,height:30,background:"red",marginLeft:"2rem",listStyle:"none"},children:t})})),Z={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},k=f.memo((function(n){n.isOpen,n.onClose;return(0,u.jsx)(a.E.ul,{variants:Z,style:{position:"absolute",top:0,left:100,zIndex:1e4},children:C.map((function(n){return(0,u.jsx)(b,{children:n},n)}))})})),C=[0,1,2,3,4]},4285:function(n,t,e){e.d(t,{z:function(){return v}});var r=e(5893),i=e(1596),o=e(4450),u=e(7294),c=e(1163),a=e(3282),s=e(542),f=u.createContext({event:function(n){(0,a.ZP)("reachGoal",n),s.ZP.event({category:"events",action:n})}});var l=function(){var n=(0,c.useRouter)();return(0,u.useEffect)((function(){s.ZP.pageview(null===n||void 0===n?void 0:n.asPath)}),[]),null},d=u.memo((function(n){var t=n.yandexMetrikaAccounts,e=void 0===t?[]:t,i=n.googleAnalyticsAccounts,o=void 0===i?[]:i,c=n.context,d=void 0===c?f:c,v=n.debug,h=void 0!==v&&v,x=n.children;return(0,u.useEffect)((function(){var n=null===o||void 0===o?void 0:o[0];n&&s.ZP.initialize({trackingId:n},{debug:h})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.OR,{accounts:e,options:{clickmap:!0,webvisor:!0,ecommerce:!0,trackHash:!0,trackLinks:!0,triggerEvent:!0}}),(0,r.jsxs)(d.Provider,{value:{},children:[(0,r.jsx)(l,{}),x]})]})}));function v(n){var t=n.children;return(0,r.jsx)(d,{yandexMetrikaAccounts:[84258358],googleAnalyticsAccounts:["G-3WH4B0WR4L"],children:(0,r.jsx)(o.QueryStoreProvider,{children:(0,r.jsx)(i.LocalStoreProvider,{children:t})})})}},3324:function(n,t,e){e.d(t,{H:function(){return c},T:function(){return u}});var r=e(5893),i=e(7294),o=e(2136),u=i.memo((function(n){var t=n.unit,e=void 0===t?2:t;return(0,r.jsx)(o.xuv,{sx:{width:"100%",height:"".concat(e,"em")}})})),c=i.memo((function(n){var t=n.unit;return(0,r.jsx)(o.xuv,{w:"100%",h:t})}))}}]);