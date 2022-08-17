"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64398],{3905:(A,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>g});var n=e(67294);function r(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function a(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,n)}return e}function o(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function s(A,t){if(null==A)return{};var e,n,r=function(A,t){if(null==A)return{};var e,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(r[e]=A[e]);return r}(A,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}var i=n.createContext({}),l=function(A){var t=n.useContext(i),e=t;return A&&(e="function"==typeof A?A(t):o(o({},t),A)),e},d=function(A){var t=l(A.components);return n.createElement(i.Provider,{value:t},A.children)},p={inlineCode:"code",wrapper:function(A){var t=A.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(A,t){var e=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,d=s(A,["components","mdxType","originalType","parentName"]),u=l(e),g=r,f=u["".concat(i,".").concat(g)]||u[g]||p[g]||a;return e?n.createElement(f,o(o({ref:t},d),{},{components:e})):n.createElement(f,o({ref:t},d))}));function g(A,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof A||r){var a=e.length,o=new Array(a);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=A,s.mdxType="string"==typeof A?A:r,o[1]=s;for(var l=2;l<a;l++)o[l]=e[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},64655:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=e(87462),r=(e(67294),e(3905)),a=e(55776);const o={id:"save-button",title:"Save"},s=void 0,i={unversionedId:"api-references/components/buttons/save-button",id:"version-2.xx.xx/api-references/components/buttons/save-button",title:"Save",description:"` uses Ant Design's ` component. It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/buttons/save.md",sourceDirName:"api-references/components/buttons",slug:"/api-references/components/buttons/save-button",permalink:"/docs/2.xx.xx/api-references/components/buttons/save-button",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/buttons/save.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"save-button",title:"Save"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Refresh",permalink:"/docs/2.xx.xx/api-references/components/buttons/refresh-button"},next:{title:"Import",permalink:"/docs/2.xx.xx/api-references/components/buttons/import-button"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],p={toc:d};function u(A){let{components:t,...e}=A;return(0,r.kt)("wrapper",(0,n.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that ",(0,r.kt)("strong",{parentName:"p"},"refine")," has adds features to this button."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For example, let's add logic to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Form, Input, useForm } from "@pankod/refine";\n\nexport const PostEdit: React.FC = () => {\n    // highlight-next-line\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    return (\n        // highlight-next-line\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,r.kt)("p",null,"Will look like this:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:a.Z,alt:"Default save button"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," to be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component which includes submitting the form action, button loading, and disable states."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SaveButton } from "@pankod/refine";\n\nexport const MyRefreshComponent = () => {\n    return <SaveButton hideText />;\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design button props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,r.kt)("inlineCode",{parentName:"td"},"{ hideText?: boolean; }")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hideText"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Save"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the button type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,r.kt)("inlineCode",{parentName:"a"},"<SaveOutlined />")))))))}u.isMDXComponent=!0},55776:(A,t,e)=>{e.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAQAAAEQCAYAAAAnGKbFAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR42u3deZAc1Z0ncP5Y2384/Idj/nGYmBgb78D6GI+B3QjYCBwsDtsbeB0e1g6bYI0ZGBlG1liI4bAwNuDlMPdh7ktc4jYIIy7dCAkkkEEgTgkBEhJCQjfqbrVarX7bv9RmTXUd3VWtPpWfD/GC7qrMrKz3qlr5vvny5T5bPmlN29s7UmfnrgQAAADsvaLvHxlAZAH7CAIAAACgWCIL2Ec1AAAAQPEIBAAAAKCABAIAAABQQAIBAAAAKCCBAAAAABSQQAAAAAAKSCAAAAAABSQQAAAAgAISCAAAAEABCQQAAACggAQCAAAAUEACAQAAACgggQAAAAAUkEAAAAAACkggAAAAAAUkEAAAAIACEggAAABAAQkEAAAAoIAEAgAAAFBAAgEAAAAoIIEAAAAAFJBAAAAAAApIIAAAAAAFJBAAAACAAhIIAAAAQAEJBJrU2dmZtm7dmpUdO3aUHl+7dm264oor0i233JJaWlpUFAAAAAKB4bJ9+/a0ZMmShkos24hFixal/fffPyt33XVX6fFTTjml9Phtt922x/v+8ccf19zPt99+u+F9BQAAgBEXCMyZM6dUBsurr75a6qT3Vd544409CgTOOeec0uMPP/xw6fH169enF198MSsbN25seN8jVOhtf7/3ve9lrxkjFYbSK6+8kr2X1157zbcHAABAINCcCRMmpH322SeNHTt2UF9nKAOB6Jjfe++96amnnko7d+4sPT516tTS8jNmzBiwQCAv3/nOd9J77703ZG337W9/O3vdI4880rcHAABAINCYjo6OdMwxx2RhwOWXXz7or1ceCJx++ulp+fLldUtvw/B37drVZyBQz0AEAjfffHN2qUCUxYsXZ9v88Y9/3GO0QG/K978RMU+CQAAAAEAgMCA+/PDD9N3vfjcLAx599NEhec3yQODCCy9sat2XXnopW+eHP/xhqdMdv8clDrUCgfvvvz8deuihWXnrrbeySQZj3bwDHSV+jsei9HVWvzwQqBUkRLhSHgp89NFHPZ5/7rnneux/LHvppZeml19+uWYAEG1y9NFHpwMPPDBbPv7/05/+NN10001p3bp16ZprriltKy/5e/njH//omwQAACAQqN0x/9a3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"}}]);