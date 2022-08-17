"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64195],{83375:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(67294),n=a(86010);const r="browserWindow_NI4q",c="browserWindowHeader_nZEk",o="buttons_iIn6",l="browserWindowAddressBar_K9wW",i="dot_VUxd",m="browserWindowMenuIcon_TbEo",p="bar_Ghqi",d="browserWindowBody_x6m3";function u(e){let{children:t,minHeight:a,url:u="http://localhost:3000",right:g}=e;return s.createElement("div",{className:r,style:{minHeight:a}},s.createElement("div",{className:c},s.createElement("div",{className:o},s.createElement("span",{className:i,style:{background:"#f25f58"}}),s.createElement("span",{className:i,style:{background:"#fbbe3c"}}),s.createElement("span",{className:i,style:{background:"#58cb42"}})),s.createElement("div",{className:(0,n.Z)(l,"text--truncate")},u),g||s.createElement("div",{className:m},s.createElement("div",null,s.createElement("span",{className:p}),s.createElement("span",{className:p}),s.createElement("span",{className:p})))),s.createElement("div",{className:d,style:{overflow:"hidden"}},t))}},97374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var s=a(67294),n=a(80584),r=a(1216),c=a(39960),o=a(44996),l=a(56310),i=a(86010),m=a(54798);const p="section_oNvt",d="mainTitle_JLDp",u="linkButtons_et4Y",g="tutorialButton_p1XF",h="docButton_HITX",f="playerContainer_Bn8n",b="reactPlayer_gOiv",E="playerButtons_XKPx",w="playerButton_JuBb",v="controlsContainer_FZeH",k="icon_EcOV",N="indexCtasGitHubButtonWrapper_P6rG",y="indexCtasGitHubButton_J4Mx",x=()=>{const e=(0,s.useRef)(),[t,a]=(0,s.useState)(!0),[n,r]=(0,s.useState)(0);return s.createElement("section",{className:p},s.createElement("div",{className:"container"},s.createElement("div",{className:"row row--justify--center"},s.createElement("div",{className:"col col--6"},s.createElement("h1",{className:d},s.createElement("span",null,"A React-based framework"),s.createElement("br",null),"for building internal tools, rapidly."))),s.createElement("div",{className:"row row--justify--center",style:{marginTop:"24px"}},s.createElement("a",{href:"https://www.producthunt.com/posts/refine-open-source-react-framework?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-refine-open-source-react-framework",target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=319164&theme=light",alt:"refine: Open Source React Framework - Focus your business logic. refine will do the rest. | Product Hunt",style:{width:"250px",height:"54px"},width:"250",height:"54"}))),s.createElement("div",{className:u},s.createElement(c.Z,{className:(0,i.Z)("button","button--primary","button--lg",g),to:(0,o.Z)("docs/")},"Start Tutorial"),s.createElement(c.Z,{className:(0,i.Z)("button","button--link","button--lg",h),to:(0,o.Z)("docs/getting-started/overview")},"Read the docs",s.createElement(m.hjJ,null)),s.createElement("span",{className:N},s.createElement("iframe",{className:y,src:"https://ghbtns.com/github-btn.html?user=pankod&repo=refine&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))),s.createElement("div",{className:"row row--justify--center"},s.createElement("div",{className:"col col--9"},s.createElement("div",{className:f},s.createElement(l.Z,{ref:e,className:b,width:"100%",height:"100%",muted:!0,loop:!0,playing:t,controls:!1,url:"https://www.youtube.com/watch?v=T1WrdAFsM7M&ab_channel=PankodTV",progressInterval:500,onProgress:e=>r(e.played),onPause:()=>a(!1),onPlay:()=>a(!0)})),s.createElement("div",{className:E},s.createElement("div",{className:w},s.createElement("progress",{max:1,value:n}),s.createElement("div",{className:v},s.createElement(m.Fer,{onClick:()=>e.current.seekTo(0),className:k}),t?s.createElement(m.IWN,{onClick:()=>a((e=>!e)),className:k}):s.createElement(m.v$e,{onClick:()=>a((e=>!e)),className:k}))))))))};var _=a(87462),P=a(23746),Z=a(95424);const S="section_uK7z",T="title_dsT5",C="description_lwiS",j="imgContainer_whVR",I="arrowImg_hHro",R='\nimport { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n'.trim(),A=()=>s.createElement("section",{className:S},s.createElement("div",{className:"container"},s.createElement("div",{className:"row row--justify--center row--no-gutters"},s.createElement("div",{className:"col col--4"},s.createElement("h2",{className:T},"Fast and Flexible ",s.createElement("br",null)," Solution"),s.createElement("p",{className:C},"Higher-level frontend frameworks can save you a lot time, but they typically offer you a"," ",s.createElement("strong",null,"trade-off between speed and flexibility.")),s.createElement("p",{className:C},s.createElement("strong",null,"Refine is a collection of helper hooks, components and providers."),"They are all decoupled from your UI components and business logic, so they never keep you from\xa0",s.createElement("strong",null,"customizing your UI or coding your own flow."))),s.createElement("div",{className:"col col--1"},s.createElement("div",{className:j},s.createElement("img",{className:I,src:"/landing-page/fast-flexible-arrow.png",alt:"Arrow"}))),s.createElement("div",{className:"col col--7"},s.createElement(P.ZP,(0,_.Z)({},P.lG,{theme:Z.Z,code:R,language:"jsx"}),(e=>{let{className:t,style:a,tokens:n,getLineProps:r,getTokenProps:c}=e;return s.createElement("pre",{className:(0,i.Z)("pre",t),style:a},n.map(((e,t)=>s.createElement("div",(0,_.Z)({className:"code-line",key:t},r({line:e,key:t})),s.createElement("span",{className:"code-line-no"},t+1),s.createElement("span",{className:"code-line-content"},e.map(((e,t)=>s.createElement("span",(0,_.Z)({key:t},c({token:e,key:t}))))))))))})))))),F="section_pvq0",H="mainTitle_nEnu",B="description_GTFP",G="supportContainer_rlzM",L="imgGroup_TyIQ",W="mainFeatureTitle_Amrd",U="featuresContainer_O0WA",q="feature_x9Bv",z="featureTitle_NmZ5",M="featureDescription_ed4B",J=[[{src:"/icons/backends/nodejs.png",srcset:"/icons/backends/nodejs@2x.png 768w",alt:"nodejs"},{src:"/icons/backends/appwrite.png",srcset:"/icons/backends/appwrite@2x.png 768w",alt:"Appwrite"}],[{src:"/icons/backends/strapi.png",srcset:"/icons/backends/strapi@2x.png 768w",alt:"strapi"},{src:"/icons/backends/nhost.png",srcset:"/icons/backends/nhost@2x.png 768w",alt:"nhost"}],[{src:"/icons/backends/airtable.png",srcset:"/icons/backends/airtable@2x.png 768w",alt:"airtable"},{src:"/icons/backends/json-api.png",srcset:"/icons/backends/json-api@2x.png 768w",alt:"json-api"}],[{src:"/icons/backends/nest.png",srcset:"/icons/backends/nest@2x.png 768w",alt:"nest"},{src:"/icons/backends/python.png",srcset:"/icons/backends/python@2x.png 768w",alt:"python"}],[{src:"/icons/backends/supabase.png",srcset:"/icons/backends/supabase@2x.png 768w",alt:"supabase"},{src:"/icons/backends/go.png",srcset:"/icons/backends/go@2x.png 768w",alt:"go"}],[{src:"/icons/backends/graphql.png",srcset:"/icons/backends/graphql@2x.png 768w",alt:"GraphQL"},{src:"/icons/backends/altogic.png",srcset:"/icons/backends/altogic@2x.png 768w",alt:"altogic"}]],D=[{src:"/icons/features/fast.png",srcset:"/icons/features/fast@2x.png 768w",title:"Fast",description:'Up to 3x increase in speed of development. (<a href="/docs/getting-started/overview/#benchmark" target="_blank">*</a>)'},{src:"/icons/features/headless.png",srcset:"/icons/features/headless@2x.png 768w",title:"Headless",description:"Works with any UI framework."},{src:"/icons/features/union.png",srcset:"/icons/features/union@2x.png 768w",title:"Flexible",description:"No limits for your custom styling and business logic."},{src:"/icons/features/universal.png",srcset:"/icons/features/universal@2x.png 768w",title:"Universal",description:"Single framework for internal tools and customer-facing apps. SSR included."},{src:"/icons/features/vector.png",srcset:"/icons/features/vector@2x.png 768w",title:"Future-proof",description:"Robust architecture, full test coverage and no technical debt."},{src:"/icons/features/one-min-setup.png",srcset:"/icons/features/one-min-setup@2x.png 768w",title:"1-minute setup",description:"Start your project with a single CLI command."}],K=[{href:"https://github.com/nestjsx/crud",text:"NestJs CRUD"},{href:"https://airtable.com",text:"Airtable"},{href:"https://strapi.io",text:"Strapi"},{href:"https://strapi.io/documentation/developer-docs/latest/development/plugins/graphql.html",text:"Strapi GraphQL"},{href:"https://supabase.io/",text:"Supabase"},{href:"https://hasura.io/",text:"Hasura"},{href:"https://appwrite.io/",text:"Appwrite"},{href:"https://medusajs.com/",text:"Medusa"},{href:"https://firebase.google.com/",text:"Firebase"},{href:"https://directus.io/",text:"Directus"},{href:"https://altogic.com/",text:"Altogic"}],O=()=>s.createElement("section",{className:F},s.createElement("div",{className:"container"},s.createElement("div",{className:"row row--justify--center"},s.createElement("div",{className:"col col--10"},s.createElement("h2",{className:W},"Key features"),s.createElement("div",{className:U},D.map(((e,t)=>{let{srcset:a,src:n,title:r,description:c}=e;return s.createElement("div",{className:q,key:"backend-"+t},s.createElement("img",{srcSet:a,src:n,alt:r}),s.createElement("div",null,s.createElement("p",{className:z},r),s.createElement("p",{className:M,dangerouslySetInnerHTML:{__html:c}})))}))))),s.createElement("h2",{className:H},"Your API is supported, out of the box!"),s.createElement("p",{className:B},"Connects to"," ",s.createElement("strong",null,"any"," ",s.createElement("a",{href:"https://github.com/pankod/refine/tree/master/packages/simple-rest",target:"_blank",rel:"noreferrer"},"REST")," ","or"," ",s.createElement("a",{href:"https://github.com/pankod/refine/tree/master/packages/graphql",target:"_blank",rel:"noreferrer"},"GraphQL")," ")," ","custom backend.",s.createElement("br",null),s.createElement("br",null),"Built-in support for ",s.createElement("br",null),K.map(((e,t)=>s.createElement(s.Fragment,null,0===t?"":t===K.length-1?" and ":", ",s.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer",key:e.text},e.text))))),s.createElement("div",{className:"row row--justify--center"},s.createElement("div",{className:"col col--6"},s.createElement("div",{className:G},J.map(((e,t)=>s.createElement("div",{key:"img-group-"+t,className:L},e.map((e=>{let{src:t,srcset:a,alt:n}=e;return s.createElement("img",{key:n,src:t,srcSet:a,alt:n})})))))))))),Q="section_FO_G",V="row_yhzT",X=()=>s.createElement("section",{className:Q},s.createElement("div",{className:"container"},s.createElement("div",{className:(0,i.Z)("row","row--no-gutters","row--justify--center",V)},s.createElement("iframe",{src:"https://stackblitz.com/github/pankod/refine/tree/master/examples/tutorial/antd?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"70vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-tutorial"})))),Y="section_bkeJ",$="title_v6TK",ee="buttonContainer_ZhHc",te="getStarted_Hvf3",ae=()=>s.createElement("section",{className:Y},s.createElement("h2",{className:$},"Get started using refine"),s.createElement("div",{className:ee},s.createElement(c.Z,{className:(0,i.Z)("button","button--primary","button--lg",te),to:(0,o.Z)("docs/")},"Start")));a(83375);const se=function(){return s.createElement(n.Z,{title:"refine | A React-based framework for building internal tools, rapidly!",description:"Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. It ships with Ant Design System, an enterprise-level UI toolkit."},s.createElement("main",null,s.createElement(x,null),s.createElement(O,null),s.createElement(A,null),s.createElement(r.ZP,{once:!0,offset:200},s.createElement(X,null)),s.createElement(ae,null)))}}}]);