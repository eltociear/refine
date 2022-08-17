"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83359],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={id:"useResource",title:"useResource"},s=void 0,c={unversionedId:"api-references/hooks/resource/useResource",id:"version-2.xx.xx/api-references/hooks/resource/useResource",title:"useResource",description:"useResource is used to get resources that are defined as property of the `` component.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/resource/useResource.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useResource",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/resource/useResource.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1643980448,formattedLastUpdatedAt:"Feb 4, 2022",frontMatter:{id:"useResource",title:"useResource"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useMenu",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useMenu"},next:{title:"useResourceWithRoute",permalink:"/docs/2.xx.xx/api-references/hooks/resource/useResourceWithRoute"}},i={},u=[{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],p={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," that are defined as property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine";\n\nconst resources = useResource();\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resources"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))))),(0,o.kt)("h4",{id:"interfaces"},"Interfaces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps>;\n    create?: React.FunctionComponent<IResourceComponentsProps>;\n    edit?: React.FunctionComponent<IResourceComponentsProps>;\n    show?: React.FunctionComponent<IResourceComponentsProps>;\n}\n\ninterface IResourceComponentsProps<TCrudData = any> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}l.isMDXComponent=!0}}]);