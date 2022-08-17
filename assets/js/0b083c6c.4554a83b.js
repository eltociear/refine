"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/create-mui-d8921ca1b0f82ec0e55998bd5f65e714.png",l={id:"create-button",title:"Create"},i=void 0,p={unversionedId:"ui-frameworks/mui/components/buttons/create-button",id:"ui-frameworks/mui/components/buttons/create-button",title:"Create",description:"` uses Material UI  component. It uses the create method from useNavigation` under the hood. It can be useful to redirect the app to the create page route of resource.",source:"@site/docs/ui-frameworks/mui/components/buttons/create.md",sourceDirName:"ui-frameworks/mui/components/buttons",slug:"/ui-frameworks/mui/components/buttons/create-button",permalink:"/docs/ui-frameworks/mui/components/buttons/create-button",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/buttons/create.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1656407404,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{id:"create-button",title:"Create"},sidebar:"someSidebar",previous:{title:"Clone",permalink:"/docs/ui-frameworks/mui/components/buttons/clone-button"},next:{title:"Delete",permalink:"/docs/ui-frameworks/mui/components/buttons/delete-button"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CreateButton>")," uses Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the create page route of resource."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    // highlight-next-line\n    CreateButton,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>();\n\n    const { data } = tableQueryResult;\n\n    return (\n        // highlight-next-line\n        <List cardHeaderProps={{ action: <CreateButton /> }}>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>ID</TableCell>\n                        <TableCell>Title</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.title}>\n                            <TableCell>{row.id}</TableCell>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,a.kt)("p",null,"Will look like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o,alt:"Default create button"})),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resourcenameorroutename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,a.kt)("p",null,"It is used to redirect the app to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/create")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,a.kt)("inlineCode",{parentName:"p"},"/create")," defined by the name property of resource object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@pankod/refine-mui";\n\nexport const MyCreateComponent = () => {\n    return <CreateButton resourceNameOrRouteName="posts" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/create"),"."),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@pankod/refine-mui";\n\nexport const MyCreateComponent = () => {\n    return <CreateButton hideText />;\n};\n')),(0,a.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,a.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,a.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@pankod/refine-mui";\n\nexport const MyListComponent = () => {\n    return <CreateButton ignoreAccessControlProvider />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Material UI button props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceNameOrRouteName"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,a.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Create"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"startIcon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/material-icons/?query=add+box&theme=Outlined&selected=AddBoxOutlined/"},(0,a.kt)("inlineCode",{parentName:"a"},"<AddBoxOutlinedIcon />")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svgIconProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to set icon props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/svg-icon/#props"},(0,a.kt)("inlineCode",{parentName:"a"},"SvgIconProps"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClick"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the handler to handle click event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(event) => void")),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers navigation for redirect to the create page of resource")))))}c.isMDXComponent=!0}}]);