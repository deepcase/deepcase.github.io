"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{2136:function(n,t,e){e.d(t,{oM5:function(){return h.oM5},xuv:function(){return h.xuv},zxk:function(){return h.zxk},hE2:function(){return h.hE2},M5Y:function(){return h.M5Y},Cdc:function(){return h.Cdc},W20:function(){return h.W20},kCb:function(){return h.kCb},MJg:function(){return v},rjZ:function(){return h.rjZ},Ugi:function(){return h.Ugi},X6q:function(){return h.X6q},caK:function(){return h.caK},hU:function(){return h.hU},Eep:function(){return h.Eep},EiF:function(){return h.EiF},IIB:function(){return h.IIB},rUS:function(){return h.rUS},fGe:function(){return h.fGe},AB5:function(){return h.AB5},HCh:function(){return h.HCh},u_l:function(){return h.u_l},fef:function(){return h.fef},hzk:function(){return h.hzk},ZAr:function(){return h.ZAr},h_i:function(){return h.h_i},diJ:function(){return h.diJ},LZC:function(){return h.LZC},Kqy:function(){return h.Kqy},cXX:function(){return h.cXX},xvT:function(){return h.xvT},QI$:function(){return h.QI$},gCW:function(){return h.gCW},Eq9:function(){return h.Eq9},Ucj:function(){return h.Ucj},F4b:function(){return h.F4b},ach:function(){return g},O3d:function(){return h.O3d},Tb6:function(){return h.Tb6}});var r=e(603),o=e(5893),i=e(2684),u=(e(1664),e(9149),e(1799)),c=e(9396),a=e(9534),f=e(7294),s=e(9920),l=function(n,t,e,r,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,a=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1.1;return[-(t-i-r/2)/10*c,(n-o-e/2)/10*u,a]},d=function(n,t,e){return"perspective(600px) rotateX(".concat(-n,"deg) rotateY(").concat(-t,"deg) scale(").concat(e,")")};function v(n){var t=n.children,e=n.disabled,i=n.animatedProps,v=n.PaperProps,g=n.xm,p=void 0===g?1:g,m=n.ym,y=void 0===m?1:m,x=n.zm,b=void 0===x?1.1:x,E=n.folder,k=void 0!==E&&E,C=n.paperComponent,Z=void 0===C?h.zxk:C,j=n.setRef,w=(0,a.Z)(n,["children","disabled","animatedProps","PaperProps","xm","ym","zm","folder","paperComponent","setRef"]),P=(0,f.useState)(!1),O=P[0],z=P[1],I=(0,r.Z)((0,s.useSpring)((function(){return{xys:[0,0,1],config:{mass:2,tension:150,friction:100}}})),2),M=I[0],A=I[1],S=(0,f.useRef)();return j&&(j.current=A),(0,o.jsx)(h.xuv,(0,c.Z)((0,u.Z)({ref:S},w),{sx:(0,u.Z)({position:"relative",height:"100%",width:"100%"},null===w||void 0===w?void 0:w.style),children:(0,o.jsx)(s.animated.div,(0,c.Z)((0,u.Z)({onMouseMove:function(n){var t=n.clientX,r=n.clientY,o=n.currentTarget;if(!e){var i,u,c=S.current.getBoundingClientRect();i=t-(null===c||void 0===c?void 0:c.x),u=r-(null===c||void 0===c?void 0:c.y),A({xys:l(i,u,o.offsetWidth,o.offsetHeight,o.offsetLeft,o.offsetTop,p,y,b)}),O||z(!0)}},onMouseLeave:function(){e||(A({xys:[0,0,1]}),z(!1))}},i),{style:(0,u.Z)({transform:M.xys.to(d),height:"100%",width:"100%"},null===i||void 0===i?void 0:i.style),children:(0,o.jsx)(h.xuv,(0,c.Z)((0,u.Z)({as:Z,disabled:e,h:"100%",w:"100%"},v),{sx:(0,u.Z)({opacity:e?.5:1,textAlign:"left",borderRadius:k?16:void 0},null===v||void 0===v?void 0:v.style),children:t}))}))}))}e(11);var h=e(5367),g=function(n){var t=(0,r.Z)((0,i.ac)(n),2),e=t[0],o=t[1],u=(0,f.useState)(!1),c=u[0],a=u[1];return(0,f.useEffect)((function(){return a(e)}),[e,o]),[c,o]}},4285:function(n,t,e){e.d(t,{z:function(){return v}});var r=e(5893),o=e(1596),i=e(4450),u=e(7294),c=e(1163),a=e(3282),f=e(542),s=u.createContext({event:function(n){(0,a.ZP)("reachGoal",n),f.ZP.event({category:"events",action:n})}});var l=function(){var n=(0,c.useRouter)();return(0,u.useEffect)((function(){f.ZP.pageview(null===n||void 0===n?void 0:n.asPath)}),[]),null},d=u.memo((function(n){var t=n.yandexMetrikaAccounts,e=void 0===t?[]:t,o=n.googleAnalyticsAccounts,i=void 0===o?[]:o,c=n.context,d=void 0===c?s:c,v=n.debug,h=void 0!==v&&v,g=n.children;return(0,u.useEffect)((function(){var n=null===i||void 0===i?void 0:i[0];n&&f.ZP.initialize({trackingId:n},{debug:h})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.OR,{accounts:e,options:{clickmap:!0,webvisor:!0,ecommerce:!0,trackHash:!0,trackLinks:!0,triggerEvent:!0}}),(0,r.jsxs)(d.Provider,{value:{},children:[(0,r.jsx)(l,{}),g]})]})}));function v(n){var t=n.children;return(0,r.jsx)(d,{yandexMetrikaAccounts:[84258358],googleAnalyticsAccounts:["G-3WH4B0WR4L"],children:(0,r.jsx)(i.QueryStoreProvider,{children:(0,r.jsx)(o.LocalStoreProvider,{children:t})})})}},5177:function(n,t,e){e.d(t,{w_:function(){return f},Pd:function(){return i}});var r=e(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},u.apply(this,arguments)},c=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function a(n){return n&&n.map((function(n,t){return r.createElement(n.tag,u({key:t},n.attr),a(n.child))}))}function f(n){return function(t){return r.createElement(s,u({attr:u({},n.attr)},t),a(n.child))}}function s(n){var t=function(t){var e,o=n.attr,i=n.size,a=n.title,f=c(n,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:e,style:u(u({color:n.color||t.color},t.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(n){return t(n)})):t(o)}},1117:function(n,t,e){e.d(t,{Y:function(){return c}});var r=e(1439),o=e(7294),i=e(1732);const u={any:0,all:1};function c(n,t){var e=void 0===t?{}:t,c=e.root,a=e.margin,f=e.amount,s=e.once,l=void 0!==s&&s,d=(0,r.CR)((0,o.useState)(!1),2),v=d[0],h=d[1];return(0,o.useEffect)((function(){var t;if(!(!n.current||l&&v)){var e={root:null!==(t=null===c||void 0===c?void 0:c.current)&&void 0!==t?t:void 0,margin:a,amount:"some"===f?"any":f};return function(n,t,{root:e,margin:r,amount:o="any"}={}){if("undefined"===typeof IntersectionObserver)return()=>{};const c=(0,i.I)(n),a=new WeakMap,f=new IntersectionObserver((n=>{n.forEach((n=>{const e=a.get(n.target);if(n.isIntersecting!==Boolean(e))if(n.isIntersecting){const e=t(n);"function"===typeof e?a.set(n.target,e):f.unobserve(n.target)}else e&&(e(n),a.delete(n.target))}))}),{root:e,rootMargin:r,threshold:"number"===typeof o?o:u[o]});return c.forEach((n=>f.observe(n))),()=>f.disconnect()}(n.current,(function(){return h(!0),l?void 0:function(){return h(!1)}}),e)}}),[c,n,a,l]),v}}}]);