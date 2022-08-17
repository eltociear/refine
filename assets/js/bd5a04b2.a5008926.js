"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l=n.p+"assets/images/urlFieldMui-03a5aada9dcc1f2f8630be4647309b7e.png",i={id:"url",title:"Url"},o=void 0,s={unversionedId:"ui-frameworks/mui/components/fields/url",id:"ui-frameworks/mui/components/fields/url",title:"Url",description:"This field lets you embed a link. It uses Material UI ` and Link components. You can pass a URL in its value prop and you can show a text in its place by passing any children`.",source:"@site/docs/ui-frameworks/mui/components/fields/url.md",sourceDirName:"ui-frameworks/mui/components/fields",slug:"/ui-frameworks/mui/components/fields/url",permalink:"/docs/ui-frameworks/mui/components/fields/url",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/fields/url.md",tags:[],version:"current",lastUpdatedBy:"Melih \xd6zkalay",lastUpdatedAt:1654779882,formattedLastUpdatedAt:"Jun 9, 2022",frontMatter:{id:"url",title:"Url"},sidebar:"someSidebar",previous:{title:"Text",permalink:"/docs/ui-frameworks/mui/components/fields/text"},next:{title:"Custom Theme",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-theme"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field lets you embed a link. It uses Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Typography>"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"Link"))," components. You can pass a URL in its ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop and you can show a text in its place by passing any ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<UrlField>")," with an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useTable, useMany } from "@pankod/refine-core";\nimport {\n    Table,\n    TableBody,\n    TableCell,\n    TableHead,\n    TableRow,\n    List,\n    // highlight-next-line\n    UrlField,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>Title</TableCell>\n                        <TableCell>Image</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.title}>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell>\n                                // highlight-next-line\n                                <UrlField value={row.image[0].url} />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    title: string;\n    image: IImage[];\n}\n\ninterface IImage {\n    url: string;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:l,alt:"UrlField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"URL for link to reference to"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"What to show instead of URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode"))))))}m.isMDXComponent=!0}}]);