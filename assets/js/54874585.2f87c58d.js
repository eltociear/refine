"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,i={unversionedId:"api-references/hooks/translate/useSetLocale",id:"version-2.xx.xx/api-references/hooks/translate/useSetLocale",title:"useSetLocale",description:"If you need to change the locale at runtime, refine provides the useSetLocale hook, It returns the changeLocale method from i18nProvider under the hood.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/translate/useSetLocale.md",sourceDirName:"api-references/hooks/translate",slug:"/api-references/hooks/translate/useSetLocale",permalink:"/docs/2.xx.xx/api-references/hooks/translate/useSetLocale",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/translate/useSetLocale.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useTranslate",permalink:"/docs/2.xx.xx/api-references/hooks/translate/useTranslate"},next:{title:"useGetLocale",permalink:"/docs/2.xx.xx/api-references/hooks/translate/useGetLocale"}},c={},l=[{value:"Usage",id:"usage",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to change the locale at runtime, refine provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSetLocale")," hook, It returns the changeLocale method from ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You can use the features of your own i18n library to change the locale in your own components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Button, useSetLocale } from "@pankod/refine";\n\nexport const LanguageSwicher = () => {\n    const changeLanguage = useSetLocale();\n\n    return (\n        <div>\n            <span>Languages</span>\n            <Button onClick={() => changeLanguage("en")}>English</Button>\n            <Button onClick={() => changeLanguage("es")}>Spanish</Button>\n        </div>\n    );\n};\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," is provided.")))}p.isMDXComponent=!0}}]);