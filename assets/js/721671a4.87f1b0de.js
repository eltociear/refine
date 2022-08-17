"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={id:"useSubscription",title:"useSubscription"},a=void 0,s={unversionedId:"core/hooks/live/useSubscription",id:"core/hooks/live/useSubscription",title:"useSubscription",description:"It is used to subscribe to a Realtime channel. It returns the subscribe method from liveProvider under the hood.",source:"@site/docs/core/hooks/live/useSubscription.md",sourceDirName:"core/hooks/live",slug:"/core/hooks/live/useSubscription",permalink:"/docs/core/hooks/live/useSubscription",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/live/useSubscription.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"Feb 9, 2022",frontMatter:{id:"useSubscription",title:"useSubscription"},sidebar:"someSidebar",previous:{title:"usePublish",permalink:"/docs/core/hooks/live/usePublish"},next:{title:"useNavigation",permalink:"/docs/core/hooks/navigation/useNavigation"}},c={},u=[{value:"Usage",id:"usage",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is used to subscribe to a Realtime channel. It returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/live-provider#subscribe"},(0,o.kt)("inlineCode",{parentName:"a"},"liveProvider"))," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," is provided.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@pankod/refine-core";\n\nuseSubscription({\n    channel: "channel-name",\n    types: ["event-name", "another-event-name"]\n    onLiveEvent: (event) => {},\n});\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can publish events with ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/live/usePublish"},(0,o.kt)("inlineCode",{parentName:"a"},"usePublish")),".")))}l.isMDXComponent=!0}}]);