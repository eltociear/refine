"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),i=n(31783);const a={id:"auth0",title:"Auth0 Login"},l=void 0,u={unversionedId:"guides-and-concepts/auth/auth0",id:"guides-and-concepts/auth/auth0",title:"Auth0 Login",description:"Auth0 is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the Auth0 document for details.",source:"@site/docs/guides-and-concepts/auth/auth0.md",sourceDirName:"guides-and-concepts/auth",slug:"/guides-and-concepts/auth/auth0",permalink:"/docs/guides-and-concepts/auth/auth0",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/auth/auth0.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1659155784,formattedLastUpdatedAt:"Jul 30, 2022",frontMatter:{id:"auth0",title:"Auth0 Login"},sidebar:"someSidebar",previous:{title:"Access Control",permalink:"/docs/guides-and-concepts/access-control"},next:{title:"Custom Layout",permalink:"/docs/guides-and-concepts/custom-layout"}},s={},d=[{value:"Installation",id:"installation",level:3},{value:"Configure the Auth0Provider component",id:"configure-the-auth0provider-component",level:4},{value:"Override login page",id:"override-login-page",level:3},{value:"Auth Provider",id:"auth-provider",level:3},{value:"login",id:"login",level:4},{value:"logout",id:"logout",level:4},{value:"checkError &amp; getPermissions",id:"checkerror--getpermissions",level:4},{value:"checkAuth",id:"checkauth",level:4},{value:"getUserIdentity",id:"getuseridentity",level:4},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs"},"Auth0 document")," for details."),(0,o.kt)("p",null,"We will show you how to use Auth0 with refine"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Run the following command within your project directory to install the Auth0 React SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @auth0/auth0-react\n")),(0,o.kt)("h4",{id:"configure-the-auth0provider-component"},"Configure the Auth0Provider component"),(0,o.kt)("p",null,"Wrap your root component with an Auth0Provider that you can import from the SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport { createRoot } from "react-dom/client";\n\n// highlight-next-line\nimport { Auth0Provider } from "@auth0/auth0-react";\n\nimport App from "./App";\n\nconst container = document.getElementById("root");\nconst root = createRoot(container!);\nroot.render(\n    <React.StrictMode>\n// highlight-start\n        <Auth0Provider\n            domain="YOUR_DOMAIN"\n            clientId="YOUR_CLIENT_ID"\n            redirectUri={window.location.origin}\n        >\n            <App />\n        </Auth0Provider>\n// highlight-end\n    </React.StrictMode>,\n);\n\n')),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs/quickstart/spa/react#configure-auth0"},(0,o.kt)("strong",{parentName:"a"},"Auth0 docs"))," for detailed configuration.")),(0,o.kt)("h3",{id:"override-login-page"},"Override login page"),(0,o.kt)("p",null,"First, we need to override the ",(0,o.kt)("strong",{parentName:"p"},"refine")," login page. In this way, we will redirect it to the Auth0 login page. We create a ",(0,o.kt)("inlineCode",{parentName:"p"},"login.tsx")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/login.tsx"',title:'"/pages/login.tsx"'},'import { AntdLayout, Button } from "@pankod/refine-antd";\nimport { useAuth0 } from "@auth0/auth0-react";\n\nexport const Login: React.FC = () => {\n    // highlight-next-line\n    const { loginWithRedirect } = useAuth0();\n\n    const CardTitle = (\n        <div\n            style={{\n                display: "flex",\n                alignItems: "center",\n                justifyContent: "center",\n                height: "60px",\n            }}\n        >\n            <img src="./refine.svg" alt="Logo" />\n        </div>\n    );\n\n    return (\n        <AntdLayout\n            style={{\n                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,\n                backgroundSize: "cover",\n            }}\n        >\n            <div style={{ height: "100vh", display: "flex" }}>\n                <div style={{ maxWidth: "200px", margin: "auto" }}>\n                    <div style={{ marginBottom: "28px" }}>\n                        <img src="./refine.svg" alt="Refine" />\n                    </div>\n                    <Button\n                        type="primary"\n                        size="large"\n                        block\n                        //highlight-next-line\n                        onClick={() => loginWithRedirect()}\n                    >\n                        Sign in\n                    </Button>\n                </div>\n            </div>\n        </AntdLayout>\n    );\n};\n')),(0,o.kt)("p",null,"After clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login")," button, you will be directed to the auth0 login screen."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"auth0-login"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"auth-provider"},"Auth Provider"),(0,o.kt)("p",null,"In refine, authentication and authorization processes are performed with the auth provider. Let's write a provider for Auth0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport { useAuth0 } from "@auth0/auth0-react";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { Login } from "pages/login";\n\nimport axios from "axios";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n    const {\n        isLoading,\n        isAuthenticated,\n        user,\n        logout,\n        getIdTokenClaims,\n    } = useAuth0();\n\n    if (isLoading) {\n        return <span>loading...</span>;\n    }\n\n    const authProvider: AuthProvider = {\n        login: () => {\n            return Promise.resolve();\n        },\n        logout: () => {\n            logout({ returnTo: window.location.origin });\n            return Promise.resolve("/");\n        },\n        checkError: () => Promise.resolve(),\n        checkAuth: () => {\n            if (isAuthenticated) {\n                return Promise.resolve();\n            }\n\n            return Promise.reject();\n        },\n        getPermissions: () => Promise.resolve(),\n        getUserIdentity: () => {\n            if (user) {\n                return Promise.resolve({\n                    ...user,\n                    avatar: user.picture,\n                });\n            }\n        },\n    };\n\n    getIdTokenClaims().then((token) => {\n        if (token) {\n            axios.defaults.headers.common = {\n                Authorization: `Bearer ${token.__raw}`,\n            };\n        }\n    });\n\n    return (\n        <Refine\n            LoginPage={Login}\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL, axios)}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("h4",{id:"login"},"login"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"loginWithRedirect")," method comes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,o.kt)("h4",{id:"logout"},"logout"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"logout")," method comes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,o.kt)("h4",{id:"checkerror--getpermissions"},"checkError & getPermissions"),(0,o.kt)("p",null,"We revert to empty promise because Auth0 does not support it."),(0,o.kt)("h4",{id:"checkauth"},"checkAuth"),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," method, which returns the authentication status of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,o.kt)("h4",{id:"getuseridentity"},"getUserIdentity"),(0,o.kt)("p",null,"We can use it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("p",null,"Auth0 example doesn't work in StackBlitz embed mode. With ",(0,o.kt)("a",{parentName:"p",href:"https://ussft.csb.app/"},"this")," link, you can open the example in the browser and try it."),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/authProvider/auth0?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-auth0-example"}))}p.isMDXComponent=!0},31783:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auth0-login-f693a3bc68fbf5b7698e2088b4743b51.gif"}}]);