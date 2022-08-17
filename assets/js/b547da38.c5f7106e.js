"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"useOne",title:"useOne",siderbar_label:"useOne",description:"useOne data hook from refine is a modified version of react-query's useQuery for retrieving single items from a resource"},o=void 0,l={unversionedId:"core/hooks/data/useOne",id:"core/hooks/data/useOne",title:"useOne",description:"useOne data hook from refine is a modified version of react-query's useQuery for retrieving single items from a resource",source:"@site/docs/core/hooks/data/useOne.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useOne",permalink:"/docs/core/hooks/data/useOne",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useOne.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1646061793,formattedLastUpdatedAt:"Feb 28, 2022",frontMatter:{id:"useOne",title:"useOne",siderbar_label:"useOne",description:"useOne data hook from refine is a modified version of react-query's useQuery for retrieving single items from a resource"},sidebar:"someSidebar",previous:{title:"useMany",permalink:"/docs/core/hooks/data/useMany"},next:{title:"useUpdate",permalink:"/docs/core/hooks/data/useUpdate"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," is a modified version of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for retrieving single items from a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),"."),(0,n.kt)("p",null,"It uses ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method as query function from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Let's say that we have a resource named ",(0,n.kt)("inlineCode",{parentName:"p"},"posts"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n    ];\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@pankod/refine-core";\n\ntype ICategory = {\n    id: number;\n    title: string;\n};\n\nconst categoryQueryResult = useOne<ICategory>({\n    resource: "categories",\n    id: 1,\n});\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," can also accept all ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," options.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"For example, to disable the query from running automatically you can set ",(0,n.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"))),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const categoryQueryResult = useOne<ICategory>({\n    resource: "categories",\n    id: 1,\n    queryOptions: {\n        enabled: false,\n    },\n});\n'))),(0,n.kt)("br",null),(0,n.kt)("p",null,"After query runs, the ",(0,n.kt)("inlineCode",{parentName:"p"},"categoryQueryResult")," will include the retrieved data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="categoryQueryResult.data"',title:'"categoryQueryResult.data"'},'{\n    "data": {\n        "id": 1,\n        "title": "E-business"\n    }\n}\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties such as ",(0,n.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"isFetching"),".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192"))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"resource")," ",(0,n.kt)("div",{className:" required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id ",(0,n.kt)("div",{className:"required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},"id of the item in the resource"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"{ data: TData; },"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"TError>")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Query notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"Unsuccessful Query notification"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,n.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,n.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,n.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metaData"),(0,n.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,n.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,n.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"default"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,n.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,n.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,n.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,n.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,n.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,n.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,n.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey; [key: string]: any; }"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,n.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,n.kt)("h3",{id:"return-values"},"Return values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData; }>")))))))}u.isMDXComponent=!0}}]);