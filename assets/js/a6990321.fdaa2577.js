"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o=n.p+"assets/images/basic-usage-427e332ad44ad89f8d7f60a2bd70d357.png",l=n.p+"assets/images/search-30cfc6b2ceadc67f453c4fa72c4894fb.png",i={id:"useAutocomplete",title:"useAutocomplete"},p=void 0,s={unversionedId:"ui-frameworks/mui/hooks/useAutocomplete",id:"ui-frameworks/mui/hooks/useAutocomplete",title:"useAutocomplete",description:"The useAutocomplete hook is used to get data from the API and to manage the Material UI `` component.",source:"@site/docs/ui-frameworks/mui/hooks/useAutocomplete.md",sourceDirName:"ui-frameworks/mui/hooks",slug:"/ui-frameworks/mui/hooks/useAutocomplete",permalink:"/docs/ui-frameworks/mui/hooks/useAutocomplete",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/hooks/useAutocomplete.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1659098500,formattedLastUpdatedAt:"Jul 29, 2022",frontMatter:{id:"useAutocomplete",title:"useAutocomplete"},sidebar:"someSidebar",previous:{title:"Tutorial",permalink:"/docs/ui-frameworks/mui/tutorial"},next:{title:"useDataGrid",permalink:"/docs/ui-frameworks/mui/hooks/useDataGrid"}},u={},d=[{value:"Usage with React Hook Form (<code>@pankod/refine-react-hook-form</code>)",id:"usage-with-react-hook-form-pankodrefine-react-hook-form",level:2},{value:"Options",id:"options",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",level:3},{value:"<code>filters</code>",id:"filters",level:3},{value:"<code>sort</code>",id:"sort",level:3},{value:"<code>fetchSize</code>",id:"fetchsize",level:3},{value:"<code>onSearch</code>",id:"onsearch",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>defaultValueQueryOptions</code>",id:"defaultvaluequeryoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook is used to get data from the API and to manage the Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete>"))," component."),(0,r.kt)("h2",{id:"usage-with-react-hook-form-pankodrefine-react-hook-form"},"Usage with React Hook Form (",(0,r.kt)("inlineCode",{parentName:"h2"},"@pankod/refine-react-hook-form"),")"),(0,r.kt)("p",null,"We'll demonstrate how to get data at ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Unbranded",\n        },\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { HttpError } from "@pankod/refine-core";\nimport {\n    Create,\n    Box,\n    //highlight-start\n    Autocomplete,\n    useAutocomplete,\n    //highlight-end\n    TextField,\n} from "@pankod/refine-mui";\nimport { useForm, Controller } from "@pankod/refine-react-hook-form";\n\nexport const PostCreate = () => {\n    const {\n        saveButtonProps,\n        refineCore: { formLoading, queryResult },\n        register,\n        control,\n        formState: { errors },\n    } = useForm<IPost, HttpError, IPost & { category: ICategory }>();\n\n    // highlight-start\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n    });\n    // highlight-end\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <Box component="form">\n                <Controller\n                    control={control}\n                    name="category"\n                    rules={{ required: "This field is required" }}\n                    render={({ field }) => (\n                        <Autocomplete\n                            //highlight-next-line\n                            {...autocompleteProps}\n                            {...field}\n                            onChange={(_, value) => {\n                                field.onChange(value);\n                            }}\n                            getOptionLabel={(item) => {\n                                return (\n                                    autocompleteProps?.options?.find(\n                                        (p) =>\n                                            p?.id?.toString() ===\n                                            item?.id?.toString(),\n                                    )?.title ?? ""\n                                );\n                            }}\n                            isOptionEqualToValue={(option, value) =>\n                                value === undefined ||\n                                option.id.toString() === value.toString()\n                            }\n                            renderInput={(params) => (\n                                <TextField\n                                    {...params}\n                                    label="Category"\n                                    margin="normal"\n                                    variant="outlined"\n                                    error={!!errors.category}\n                                    helperText={errors.category?.message}\n                                    required\n                                />\n                            )}\n                        />\n                    )}\n                />\n            </Box>\n        </Create>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nexport interface IPost {\n    id: number;\n    category: { id: number };\n}\n\n')),(0,r.kt)("p",null,"The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," with ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/react-hook-form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," is demonstrated in the code above. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook independently of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm"),"hook."),(0,r.kt)("div",{class:"img-container",style:{"max-width":"500px"}},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o,alt:"Basic use of Autocomplete"})),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container",style:{"max-width":"500px"}},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l,alt:"Search functionality"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, refine does the search using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useDelete"},(0,r.kt)("inlineCode",{parentName:"a"},"useList"))," hook and passes it to the search parameter. If you get a problem you should check your ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," function in your Data Provider. If you want to change this behavior to make client-side filtering, you can examine ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/#search-as-you-type"},"this")," documentation.")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," values for ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete>"))," options."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/#options-structure"},"Refer to Material UI ",(0,r.kt)("inlineCode",{parentName:"a"},"Autocomplete")," component documentation for detailed info for ",(0,r.kt)("inlineCode",{parentName:"a"},"options"),". ","\u2192")),(0,r.kt)("h3",{id:"defaultvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-next-line\n    defaultValue: "1",\n});\n')),(0,r.kt)("p",null,"Adds extra ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Autocomplete>"))," component. It uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany"))," so ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," can be an array of strings like follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'defaultValue: ["1", "2"],\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useMany"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for detailed usage. ","\u2192")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Can use ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," property when edit a record in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," component.")),(0,r.kt)("h3",{id:"filters"},(0,r.kt)("inlineCode",{parentName:"h3"},"filters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-start\n    filters: [\n        {\n            field: "isActive",\n            operator: "eq",\n            value: true,\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"It allows us to add some filters while fetching the data. For example, if you want to list only the active records."),(0,r.kt)("h3",{id:"sort"},(0,r.kt)("inlineCode",{parentName:"h3"},"sort")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"It allows us to sort the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,r.kt)("h3",{id:"fetchsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"fetchSize")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-next-line\n    fetchSize: 20,\n});\n')),(0,r.kt)("p",null,"Amount of records to fetch in the select box."),(0,r.kt)("h3",{id:"onsearch"},(0,r.kt)("inlineCode",{parentName:"h3"},"onSearch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-start\n    onSearch: (value) => [\n        {\n            field: "title",\n            operator: "containss",\n            value,\n        },\n    ],\n    // highlight-end\n});\n')),(0,r.kt)("p",null,"If defined, it allows us to override the filters to use when fetching the list of records. Thus, it. It should return ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters")),"."),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n    // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,r.kt)("h3",{id:"defaultvaluequeryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultValueQueryOptions")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," property is given, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useMany"},(0,r.kt)("inlineCode",{parentName:"a"},"useMany"))," data hook is called for the selected records. With this property, you can change the options of this query. If not given, the values given in ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," will be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { autocompleteProps } = useAutocomplete({\n    resource: "categories",\n    // highlight-start\n    defaultValueQueryOptions: {\n        onSuccess: (data) => {\n            console.log("triggers when on query return on success");\n        },\n    },\n    // highlight-end\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options for default value query can be set by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource ",(0,r.kt)("div",{className:"required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds extra ",(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters"),(0,r.kt)("td",{parentName:"tr",align:null},"Add filters while fetching the data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow us to sort the options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debounce"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to delay"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"react-query ",(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetListResponse<TData>, TError>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValueQueryOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"react-query ",(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetManyResponse<TData>, TError>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fetchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of records to fetch in select box list."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"If defined, this callback allows us to override all filters for every search request."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(value: string) => CrudFilters "),"|",(0,r.kt)("inlineCode",{parentName:"td"}," Promise<CrudFilters>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaData"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,r.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,r.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,r.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,r.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autocompleteProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Material UI Autocomplete props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#autocompletereturnvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"AutoCompleteReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValueQueryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a ",(0,r.kt)("inlineCode",{parentName:"td"},"defaultValue")," record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))))),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"autocompletereturnvalues"},"AutoCompleteReturnValues"),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TData"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Loading state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onInputChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback fired when the input value changes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(event: React.SyntheticEvent, value: string, reason: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the filtered options to be rendered on search."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(options: TData, state: object) => TData")))))),(0,r.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,r.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/field/useSelect/mui?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-select-example"}))}c.isMDXComponent=!0}}]);