"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"useMany",title:"useMany",siderbar_label:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource"},l=void 0,o={unversionedId:"core/hooks/data/useMany",id:"core/hooks/data/useMany",title:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource",source:"@site/docs/core/hooks/data/useMany.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useMany",permalink:"/docs/core/hooks/data/useMany",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useMany.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1646061793,formattedLastUpdatedAt:"Feb 28, 2022",frontMatter:{id:"useMany",title:"useMany",siderbar_label:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource"},sidebar:"someSidebar",previous:{title:"useList",permalink:"/docs/core/hooks/data/useList"},next:{title:"useOne",permalink:"/docs/core/hooks/data/useOne"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," is a modified version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/queries"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for retrieving multiple items from a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),"."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method as query function from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's say that we have a resource named ",(0,r.kt)("inlineCode",{parentName:"p"},"categories"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n        },\n    ];\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@pankod/refine-core";\n\ntype ICategory = {\n    id: number;\n    title: string;\n};\n\nconst categoryQueryResult = useMany<ICategory>({\n    resource: "categories",\n    ids: [1, 2],\n});\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," can also accept all ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," options.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For example, to disable query from running automatically you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const categoryQueryResult = useMany<ICategory>({\n    resource: "categories",\n    ids: [1, 2],\n    queryOptions: { enabled: false },\n});\n'))),(0,r.kt)("br",null),(0,r.kt)("p",null,"After query runs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"categoryQueryResult")," will include the retrieved data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="categoryQueryResult.data"',title:'"categoryQueryResult.data"'},'{\n    "data": [\n        {\n            "id": 1,\n            "title": "E-business"\n        },\n        {\n            "id": 2,\n            "title": "Virtual Invoice Avon"\n        }\n    ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes properties such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isFetching"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"resource")," ",(0,r.kt)("div",{className:" required"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids ",(0,r.kt)("div",{className:"required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"ids of the item in the resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey[]"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"{ data: TData[]; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"TError>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful Query notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsuccessful Query notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,r.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaData"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,r.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,r.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,r.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,r.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,r.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData[]; }>")))))))}u.isMDXComponent=!0}}]);