"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(31783);const a={id:"auth0",title:"Auth0 Login"},l=void 0,s={unversionedId:"guides-and-concepts/auth/auth0",id:"version-2.xx.xx/guides-and-concepts/auth/auth0",title:"Auth0 Login",description:"Auth0 is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the Auth0 document for details.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/auth/auth0.md",sourceDirName:"guides-and-concepts/auth",slug:"/guides-and-concepts/auth/auth0",permalink:"/docs/2.xx.xx/guides-and-concepts/auth/auth0",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/auth/auth0.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"auth0",title:"Auth0 Login"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Base64 Upload",permalink:"/docs/2.xx.xx/guides-and-concepts/upload/base64-upload"},next:{title:"Search",permalink:"/docs/2.xx.xx/guides-and-concepts/search/"}},u={},d=[{value:"Installation",id:"installation",level:3},{value:"Configure the Auth0Provider component",id:"configure-the-auth0provider-component",level:4},{value:"Override login page",id:"override-login-page",level:3},{value:"Auth Provider",id:"auth-provider",level:3},{value:"login",id:"login",level:4},{value:"logout",id:"logout",level:4},{value:"checkError &amp; getPermissions",id:"checkerror--getpermissions",level:4},{value:"checkAuth",id:"checkauth",level:4},{value:"getUserIdentity",id:"getuseridentity",level:4},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs"},"Auth0 document")," for details."),(0,r.kt)("p",null,"We will show you how to use Auth0 with refine"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Run the following command within your project directory to install the Auth0 React SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @auth0/auth0-react\n")),(0,r.kt)("h4",{id:"configure-the-auth0provider-component"},"Configure the Auth0Provider component"),(0,r.kt)("p",null,"Wrap your root component with an Auth0Provider that you can import from the SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\n\n// highlight-next-line\nimport { Auth0Provider } from "@auth0/auth0-react";\n\nimport App from "./App";\n\nReactDOM.render(\n    <React.StrictMode>\n// highlight-start\n        <Auth0Provider\n            domain="YOUR_DOMAIN"\n            clientId="YOUR_CLIENT_ID"\n            redirectUri={window.location.origin}\n        >\n            <App />\n        </Auth0Provider>\n// highlight-end\n    </React.StrictMode>,\n    document.getElementById("root"),\n);\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/quickstart/spa/react#configure-auth0"},(0,r.kt)("strong",{parentName:"a"},"Auth0 docs"))," for detailed configuration.")),(0,r.kt)("h3",{id:"override-login-page"},"Override login page"),(0,r.kt)("p",null,"First, we need to override the ",(0,r.kt)("strong",{parentName:"p"},"refine")," login page. In this way, we will redirect it to the Auth0 login page. We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"login.tsx")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/pages")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/login.tsx"',title:'"/pages/login.tsx"'},'import { \n    Row,\n    Col,\n    AntdLayout,\n    Card,\n    Typography,\n    Button,\n// highlight-next-line\n    useLogin\n} from "@pankod/refine";\n\nexport const Login: React.FC = () => {\n// highlight-next-line\n    const { mutate: login } = useLogin();\n\n    const CardTitle = (\n        <div\n            style={{\n                display: "flex",\n                alignItems: "center",\n                justifyContent: "center",\n                height: "60px",\n            }}\n        >\n            <img src="./refine.svg" alt="Logo" />\n        </div>\n    );\n\n    return (\n        <AntdLayout\n            style={{\n                backgroundColor: "#eff7f7",\n            }}\n        >\n            <Row\n                justify="center"\n                align="middle"\n                style={{\n                    height: "100vh",\n                }}\n            >\n                <Col xs={22}>\n                    <Card\n                        style={{\n                            maxWidth: "400px",\n                            margin: "auto",\n                        }}\n                        title={CardTitle}\n                    >\n                        <Button\n                            type="primary"\n                            size="large"\n                            htmlType="submit"\n                            block\n// highlight-next-line\n                            onClick={() => login({})}\n                        >\n                            Login\n                        </Button>\n                        <br />\n                        <br />\n                        <div\n                            style={{ textAlign: "center", padding: "10px 0px" }}\n                        >\n                            <Typography.Text>\n                                Still no account? Please go to\n                                <a href="#"> Sign up</a>\n                            </Typography.Text>\n                        </div>\n                    </Card>\n                </Col>\n            </Row>\n        </AntdLayout>\n    );\n};\n')),(0,r.kt)("p",null,"After clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Login")," button, you will be directed to the auth0 login screen."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"auth0-login"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"auth-provider"},"Auth Provider"),(0,r.kt)("p",null,"In refine, authentication and authorization processes are performed with the auth provider. Let's write a provider for Auth0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\nimport { useAuth0 } from "@auth0/auth0-react";\n\nimport { Login } from "pages/login";\n\nimport axios from "axios";\n\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n    const {\n        isLoading,\n        loginWithRedirect,\n        isAuthenticated,\n        user,\n        logout,\n        getIdTokenClaims,\n    } = useAuth0();\n\n    if (isLoading) {\n        return <span>loading...</span>;\n    }\n\n    const authProvider: AuthProvider = {\n        login: () => {\n            loginWithRedirect();\n            return Promise.resolve();\n        },\n        logout: () => {\n            logout({ returnTo: window.location.origin });\n            return Promise.resolve("/");\n        },\n        checkError: () => Promise.resolve(),\n        checkAuth: () => {\n            if (isAuthenticated) {\n                return Promise.resolve();\n            }\n\n            return Promise.reject();\n        },\n        getPermissions: () => Promise.resolve(),\n        getUserIdentity: () => {\n            if (user) {\n                return Promise.resolve({\n                    ...user,\n                    avatar: user.picture,\n                });\n            }\n        },\n    };\n\n    getIdTokenClaims().then((token) => {\n        if (token) {\n            axios.defaults.headers.common = {\n                Authorization: `Bearer ${token.__raw}`,\n            };\n        }\n    });\n\n    return (\n        <Refine\n            LoginPage={Login}\n            routerProvider={routerProvider}\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL, axios)}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h4",{id:"login"},"login"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loginWithRedirect")," method comes from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,r.kt)("h4",{id:"logout"},"logout"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method comes from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,r.kt)("h4",{id:"checkerror--getpermissions"},"checkError & getPermissions"),(0,r.kt)("p",null,"We revert to empty promise because Auth0 does not support it."),(0,r.kt)("h4",{id:"checkauth"},"checkAuth"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," method, which returns the authentication status of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,r.kt)("h4",{id:"getuseridentity"},"getUserIdentity"),(0,r.kt)("p",null,"We can use it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("p",null,"Auth0 example doesn't work in codesandbox embed mode. With ",(0,r.kt)("a",{parentName:"p",href:"https://ussft.csb.app/"},"this")," link, you can open the example in the browser and try it."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-auth0-example-7drxm?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-auth0-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0},31783:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/auth0-login-f693a3bc68fbf5b7698e2088b4743b51.gif"}}]);