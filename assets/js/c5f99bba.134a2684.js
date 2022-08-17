"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||l[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={id:"mui-custom-layout",title:"Custom Layout"},i=void 0,u={unversionedId:"ui-frameworks/mui/customization/mui-custom-layout",id:"ui-frameworks/mui/customization/mui-custom-layout",title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/docs/ui-frameworks/mui/customization/layout.md",sourceDirName:"ui-frameworks/mui/customization",slug:"/ui-frameworks/mui/customization/mui-custom-layout",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-layout",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/customization/layout.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1655468686,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"mui-custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Custom Theme",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-theme"},next:{title:"Custom Sider",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-sider"}},p={},m=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2}],c={toc:m};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create custom layouts using ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#footer"},(0,r.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#header"},(0,r.kt)("inlineCode",{parentName:"a"},"Header"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title")))),(0,r.kt)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,r.kt)("p",null,"Let's start with creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomLayout/>")," component using ",(0,r.kt)("inlineCode",{parentName:"p"},"LayoutProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout.tsx"',title:'"src/components/layout.tsx"'},'import React from "react";\nimport { LayoutProps } from "@pankod/refine-core";\n// highlight-next-line\nimport { Sider as DefaultSider, Box } from "@pankod/refine-mui";\n\nexport const CustomLayout: React.FC<LayoutProps> = ({\n    Sider,\n    Header,\n    Footer,\n    OffLayoutArea,\n    children,\n}) => {\n    const SiderToRender = Sider ?? DefaultSider;\n\n    return (\n        <Box display="flex" flexDirection="row">\n            <SiderToRender />\n            <Box\n                sx={{\n                    display: "flex",\n                    flexDirection: "column",\n                    flex: 1,\n                    minHeight: "100vh",\n                }}\n            >\n                {Header && <Header />}\n                <Box\n                    component="main"\n                    sx={{\n                        p: { xs: 1, md: 2, lg: 3 },\n                        flexGrow: 1,\n                        bgcolor: "background.default",\n                    }}\n                >\n                    {children}\n                </Box>\n                {Footer && <Footer />}\n            </Box>\n            {OffLayoutArea && <OffLayoutArea />}\n        </Box>\n    );\n};\n')),(0,r.kt)("p",null,"We can now pass ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomLayout")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { ReadyPage } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomLayout } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            // highlight-start\n            Layout={CustomLayout}\n            // highlight-end\n            ReadyPage={ReadyPage}\n            // ...\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"After this, ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomLayout")," instead of it's default ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," component."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},"refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))))}l.isMDXComponent=!0}}]);