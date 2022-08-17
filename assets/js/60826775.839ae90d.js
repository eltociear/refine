"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(91454);const o={id:"date",title:"Date"},l=void 0,s={unversionedId:"api-references/components/fields/date",id:"version-2.xx.xx/api-references/components/fields/date",title:"Date",description:"This field is used to display dates. It uses Day.js to display date format.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/fields/date.md",sourceDirName:"api-references/components/fields",slug:"/api-references/components/fields/date",permalink:"/docs/2.xx.xx/api-references/components/fields/date",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/fields/date.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1643024876,formattedLastUpdatedAt:"Jan 24, 2022",frontMatter:{id:"date",title:"Date"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"File",permalink:"/docs/2.xx.xx/api-references/components/fields/file"},next:{title:"Email",permalink:"/docs/2.xx.xx/api-references/components/fields/email"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display dates. It uses ",(0,a.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/display/format"},(0,a.kt)("inlineCode",{parentName:"a"},"Day.js"))," to display date format."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<DateField>")," with the example in the post list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { \n    List,\n    Table,\n    // highlight-next-line\n    DateField \n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n\n    return (\n        <List>\n            <Table rowKey="id">\n                ...\n                <Table.Column<IPost>\n                    dataIndex="createdAt"\n                    title="Created At"\n                    render={(value) => (\n                        // highlight-next-line\n                        <DateField format="LLL" value={value} />\n                    )}\n                />\n                ...\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {   \n    id: string;    \n    createdAt: string;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"DateField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"required-block"},(0,a.kt)("div",null,"value")," ",(0,a.kt)("div",{className:" required"},"Required"))),(0,a.kt)("td",{parentName:"tr",align:null},"Date value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"dayjs.Dayjs")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://day.js.org/docs/en/display/format"},"format")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets the formatted date according to the string of the tokens passed in."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"L"'))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},"Refer to Text props ","\u2192")))}m.isMDXComponent=!0},91454:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dateField-5bc1e343e8e6caf40edc39e91ffc5e0c.png"}}]);