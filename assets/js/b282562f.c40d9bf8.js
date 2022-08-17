"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var r=n(87462),o=(n(67294),n(3905)),a=n(74467),i=n(69282),l=n(51490),s=n(97081),c=n(99359),p=n(63562);const m={title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-react-admin-invoice-genarator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},d=void 0,u={permalink:"/blog/refine-react-admin-invoice-genarator",source:"@site/blog/2022-02-22-refine-invoice-genarator.md",title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"invoice-generator",permalink:"/blog/tags/invoice-generator"},{label:"react",permalink:"/blog/tags/react"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"},{label:"business-tool",permalink:"/blog/tags/business-tool"},{label:"internal-tool",permalink:"/blog/tags/internal-tool"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:11.205,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-react-admin-invoice-genarator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},prevItem:{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator"},nextItem:{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022"}},g={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Setup Refine Project",id:"setup-refine-project",level:2},{value:"Usage",id:"usage",level:2},{value:"Auth Provider",id:"auth-provider",level:3},{value:"Configure Refine for Strapi-v4\u200b",id:"configure-refine-for-strapi-v4",level:3},{value:"Create Strapi Collections\u200b",id:"create-strapi-collections",level:2},{value:"Your Company Detail Page",id:"your-company-detail-page",level:2},{value:"Company Card Component",id:"company-card-component",level:3},{value:"Company List Page",id:"company-list-page",level:3},{value:"Contact Page",id:"contact-page",level:2},{value:"Client List Page",id:"client-list-page",level:2},{value:"Client Card Component",id:"client-card-component",level:3},{value:"Client Create and Edit Page",id:"client-create-and-edit-page",level:3},{value:"Client List Page",id:"client-list-page-1",level:3},{value:"Live CodeSandbox Example",id:"live-codesandbox-example",level:2},{value:"Conclusion",id:"conclusion",level:2}],f={toc:h};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Invoice management can be a daunting task for any business. With so many different software programs and options, it's hard to know where you need start or what will work best with your company culture! You can solve this problem with ",(0,o.kt)("strong",{parentName:"p"},"refine"),". With Refine, you can develop your own customizable invoice generator with ease."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We are going to develop an invoice generator application for our business using ",(0,o.kt)("strong",{parentName:"p"},"refine")," and ",(0,o.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),". Let's see together how simple yet functional it can be!"),(0,o.kt)("p",null,"This article will consist of two parts and we will try to explain each step in detail. In this section, we will create the basic parts of our application."),(0,o.kt)("p",null,"In this part, we will create a panel where our own company information is included, where we can create customers and create contacts with customer companies."),(0,o.kt)("h2",{id:"setup-refine-project"},"Setup Refine Project"),(0,o.kt)("p",null,"Let's start by creating our refine project. You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," to create a refine project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx superplate-cli -p refine-react refine-invoice-genarator\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 What will be the name of your app \xb7refine-invoice-genarator\n\u2714 Package manager: \xb7 Npm\n\u2714 Do you want to use a UI Framework? \xb7 Ant Design\n\u2714 Do you want a customized theme?: Default theme\n\u2714 Router Provider: \xb7 React Router v6\n\u2714 Data Provider: Strapi\n\u2714 Do you want a customized layout? No\n\u2714 i18n - Internationalization: \xb7 No\n")),(0,o.kt)("p",null,"superplate will quickly create our refine project according to the features we choose. Let's continue by install the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/data-provider/strapi-v4/"},"refine Strapi-v4 Data Provider")," that we will use later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-strapi-v4\n")),(0,o.kt)("p",null,"Our refine project and installations are now ready! Let's start using it."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"auth-provider"},"Auth Provider"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\nimport { AuthHelper } from "@pankod/refine-strapi-v4";\n\nimport { TOKEN_KEY, API_URL } from "./constants";\n\nimport axios from "axios";\n\nexport const axiosInstance = axios.create();\nconst strapiAuthHelper = AuthHelper(API_URL + "/api");\n\nexport const authProvider: AuthProvider = {\n    login: async ({ username, password }) => {\n        const { data, status } = await strapiAuthHelper.login(\n            username,\n            password,\n        );\n        if (status === 200) {\n            localStorage.setItem(TOKEN_KEY, data.jwt);\n\n            // set header axios instance\n            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;\n\n            return Promise.resolve();\n        }\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem(TOKEN_KEY);\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () => {\n        const token = localStorage.getItem(TOKEN_KEY);\n        if (token) {\n            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: async () => {\n        const token = localStorage.getItem(TOKEN_KEY);\n        if (!token) {\n            return Promise.reject();\n        }\n\n        const { data, status } = await strapiAuthHelper.me(token);\n        if (status === 200) {\n            const { id, username, email } = data;\n            return Promise.resolve({\n                id,\n                username,\n                email,\n            });\n        }\n\n        return Promise.reject();\n    },\n};\n')))),(0,o.kt)("h3",{id:"configure-refine-for-strapi-v4"},"Configure Refine for Strapi-v4\u200b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { notificationProvider, Layout, LoginPage } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n//highlight-start\nimport { DataProvider } from "@pankod/refine-strapi-v4";\nimport { authProvider, axiosInstance } from "./authProvider";\n//highlight-end\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nfunction App() {\n    const API_URL = "Your_Strapi_Url";\n    //highlight-next-line\n    const dataProvider = DataProvider(API_URL + "/api", axiosInstance);\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            notificationProvider={notificationProvider}\n            Layout={Layout}\n            //highlight-start\n            dataProvider={dataProvider}\n            authProvider={authProvider}\n            //highlight-end\n            LoginPage={LoginPage}\n        />\n    );\n}\n')),(0,o.kt)("h2",{id:"create-strapi-collections"},"Create Strapi Collections\u200b"),(0,o.kt)("p",null,"We created three collections on Strapi as ",(0,o.kt)("inlineCode",{parentName:"p"},"company"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"contact")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Company:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logo: Media"),(0,o.kt)("li",{parentName:"ul"},"Name: Text"),(0,o.kt)("li",{parentName:"ul"},"Address: Text"),(0,o.kt)("li",{parentName:"ul"},"Country: Text"),(0,o.kt)("li",{parentName:"ul"},"City: Text"),(0,o.kt)("li",{parentName:"ul"},"email: Email"),(0,o.kt)("li",{parentName:"ul"},"Website: Text")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:a.Z,alt:"Strapi Company Collection"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Client:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Text"),(0,o.kt)("li",{parentName:"ul"},"Contacts: Relation with Contact")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"Strapi Client Collection"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Contact:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First_name: Text"),(0,o.kt)("li",{parentName:"ul"},"Last_name: Text"),(0,o.kt)("li",{parentName:"ul"},"Phone_number Text"),(0,o.kt)("li",{parentName:"ul"},"Email: email"),(0,o.kt)("li",{parentName:"ul"},"Job: Text"),(0,o.kt)("li",{parentName:"ul"},"Client: Relation with Client")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Strapi Contact Collection"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"We have created our collections by Strapi, now we can create Clients and their contacts with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("h2",{id:"your-company-detail-page"},"Your Company Detail Page"),(0,o.kt)("p",null,"As a first step, let's start to create the part where our own ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," will be located. If there are other companies you need to manage you can create them on the Your Company page and view them here."),(0,o.kt)("h3",{id:"company-card-component"},"Company Card Component"),(0,o.kt)("p",null,"Let's design a component that includes the details of our company. Then let's show it using ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-antd")," ",(0,o.kt)("inlineCode",{parentName:"p"},"List"),". We will put the information such as name, logo and address from the Company collection we created on Strapi into Card component."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/company/CompanyItem.tsx"',title:'"src/components/company/CompanyItem.tsx"'},'import {\n    Card,\n    DeleteButton,\n    UrlField,\n    EmailField,\n    EditButton,\n    Typography,\n} from "@pankod/refine-antd";\n\nimport { ICompany } from "interfaces";\nimport { API_URL } from "../../constants";\n\nconst { Title, Text } = Typography;\n\n//highlight-start\ntype CompanyItemProps = {\n    item: ICompany;\n};\n//highlight-end\n\nexport const CompanyItem: React.FC<CompanyItemProps> = ({ item }) => {\n    const image = item.logo ? API_URL + item.logo.url : "./error.png";\n\n    return (\n        //highlight-start\n        <Card\n            style={{ width: "300px" }}\n            cover={\n                <div style={{ display: "flex", justifyContent: "center" }}>\n                    <img\n                        style={{\n                            width: 220,\n                            height: 100,\n                            padding: 24,\n                        }}\n                        src={image}\n                        alt="logo"\n                    />\n                </div>\n            }\n            actions={[\n                <EditButton key="edit" size="small" hideText />,\n                <DeleteButton\n                    key="delete"\n                    size="small"\n                    hideText\n                    recordItemId={item.id}\n                />,\n            ]}\n        >\n            <Title level={5}>Company Name:</Title>\n            <Text>{item.name}</Text>\n            <Title level={5}>Company Address:</Title>\n            <Text>{item.address}</Text>\n            <Title level={5}>County:</Title>\n            <Text>{item.country}</Text>\n            <Title level={5}>City:</Title>\n            <Text>{item.city}</Text>\n            <Title level={5}>Email:</Title>\n            <EmailField value={item.email} />\n            <Title level={5}>Website:</Title>\n            <UrlField value={item.website} />\n        </Card>\n        //highlight-end\n    );\n};\n')))),(0,o.kt)("h3",{id:"company-list-page"},"Company List Page"),(0,o.kt)("p",null,"Let's place the ",(0,o.kt)("inlineCode",{parentName:"p"},"CompanyItem")," component that we created above in the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/list/useSimpleList/"},"refine-antd List")," and display company information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/company/CompanyList.tsx"',title:'"src/pages/company/CompanyList.tsx"'},'import { IResourceComponentsProps } from "@pankod/refine-core";\n//highlight-next-line\nimport { useSimpleList, AntdList, List } from "@pankod/refine-antd";\n\n//highlight-next-line\nimport { CompanyItem } from "components/company";\n\nexport const CompanyList: React.FC<IResourceComponentsProps> = () => {\n    const { listProps } = useSimpleList<ICompany>({\n        metaData: { populate: ["logo"] },\n    });\n\n    return (\n        //highlight-start\n        <List title={"Your Companies"}>\n            <AntdList\n                grid={{ gutter: 16 }}\n                {...listProps}\n                renderItem={(item) => (\n                    <AntdList.Item>\n                        //highlight-next-line\n                        <CompanyItem item={item} />\n                    </AntdList.Item>\n                )}\n            />\n        </List>\n        //highlight-end\n    );\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'...\n\n//highlight-next-line\nimport { CompanyList } from "pages/company";\n\nfunction App() {\n    const API_URL = "Your_Strapi_Url";\n    const dataProvider = DataProvider(API_URL + "/api", axiosInstance);\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            notificationProvider={notificationProvider}\n            Layout={Layout}\n            dataProvider={dataProvider}\n            authProvider={authProvider}\n            LoginPage={LoginPage}\n            //highlight-start\n            resources={[\n                {\n                    name: "companies",\n                    options: { label: "Your Company" },\n                    list: CompanyList,\n                },\n            ]}\n             //highlight-end\n        />\n    );\n}\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:s.Z,alt:"Refine Company List"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"We fetch the data of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," collection that we created by Strapi, thanks to the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),", and put it into the card component we created."),(0,o.kt)("h2",{id:"contact-page"},"Contact Page"),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact Page")," is a page related to ",(0,o.kt)("inlineCode",{parentName:"p"},"Clients"),". Communication with client companies will be through the contacts we create here. The Contact Page will contain the information of the people we will contact. Let's create our list using ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/table/useTable/"},"useTable")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/contact/ContactList.tsx"',title:'"src/pages/contact/ContactList.tsx"'},'import {\n    List,\n    Table,\n    TagField,\n    useTable,\n    Space,\n    EditButton,\n    DeleteButton,\n    useModalForm,\n} from "@pankod/refine-antd";\n\nimport { IContact } from "interfaces";\nimport { CreateContact } from "components/contacts";\n\nexport const ContactsList: React.FC = () => {\n    //highlight-start\n    const { tableProps } = useTable<IContact>({\n        metaData: { populate: ["client"] },\n    });\n    //highlight-end\n\n    const {\n        formProps: createContactFormProps,\n        modalProps,\n        show,\n    } = useModalForm({\n        resource: "contacts",\n        action: "create",\n        redirect: false,\n    });\n\n    return (\n        <>\n            <List\n                createButtonProps={{\n                    onClick: () => {\n                        show();\n                    },\n                }}\n            >\n                //highlight-start\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column dataIndex="first_name" title="First Name" />\n                    <Table.Column dataIndex="last_name" title="Last Name" />\n                    <Table.Column\n                        dataIndex="phone_number"\n                        title="Phone Number"\n                    />\n                    <Table.Column dataIndex="email" title="Email" />\n                    <Table.Column\n                        dataIndex="job"\n                        title="Job"\n                        render={(value: string) => (\n                            <TagField color={"blue"} value={value} />\n                        )}\n                    />\n                    <Table.Column<{ id: string }>\n                        title="Actions"\n                        dataIndex="actions"\n                        render={(_, record) => (\n                            <Space>\n                                <EditButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                                <DeleteButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                            </Space>\n                        )}\n                    />\n                </Table>\n                //highlight-end\n            </List>\n            <CreateContact\n                modalProps={modalProps}\n                formProps={createContactFormProps}\n            />\n        </>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:c.Z,alt:"Refine Contacts List"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"client-list-page"},"Client List Page"),(0,o.kt)("p",null,"We have created example company and contacts above. Now let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Client List")," where we can view our clients."),(0,o.kt)("h3",{id:"client-card-component"},"Client Card Component"),(0,o.kt)("p",null,"Let's design the cards that will appear in our Client List."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/ClientItem.tsx"',title:'"src/components/client/ClientItem.tsx"'},'import { useDelete } from "@pankod/refine-core";\nimport {\n    Card,\n    TagField,\n    Typography,\n    Dropdown,\n    Menu,\n    Icons,\n} from "@pankod/refine-antd";\n\nimport { IClient } from "interfaces";\n\nconst { FormOutlined, DeleteOutlined } = Icons;\nconst { Title, Text } = Typography;\n\ntype ClientItemProps = {\n    item: IClient;\n    editShow: (id?: string | undefined) => void;\n};\n\nexport const ClientItem: React.FC<ClientItemProps> = ({ item, editShow }) => {\n    const { mutate } = useDelete();\n\n    return (\n        <Card style={{ width: 300, height: 300, borderColor: "black" }}>\n            <div style={{ position: "absolute", top: "10px", right: "5px" }}>\n                <Dropdown\n                    overlay={\n                        <Menu mode="vertical">\n                            <Menu.Item\n                                key="1"\n                                style={{\n                                    fontWeight: 500,\n                                }}\n                                icon={\n                                    <FormOutlined\n                                        style={{\n                                            color: "green",\n                                        }}\n                                    />\n                                }\n                                onClick={() => editShow(item.id)}\n                            >\n                                Edit Client\n                            </Menu.Item>\n                            <Menu.Item\n                                key="2"\n                                style={{\n                                    fontWeight: 500,\n                                }}\n                                icon={\n                                    <DeleteOutlined\n                                        style={{\n                                            color: "red",\n                                        }}\n                                    />\n                                }\n                                onClick={() =>\n                                    mutate({\n                                        resource: "clients",\n                                        id: item.id,\n                                        mutationMode: "undoable",\n                                        undoableTimeout: 5000,\n                                    })\n                                }\n                            >\n                                Delete Client\n                            </Menu.Item>\n                        </Menu>\n                    }\n                    trigger={["click"]}\n                >\n                    <Icons.MoreOutlined\n                        style={{\n                            fontSize: 24,\n                        }}\n                    />\n                </Dropdown>\n            </div>\n\n            <Title level={4}>{item.name}</Title>\n            <Title level={5}>Client Id:</Title>\n            <Text>{item.id}</Text>\n            <Title level={5}>Contacts:</Title>\n\n            {item.contacts.map((item) => {\n                return (\n                    <TagField\n                        color={"#d1c4e9"}\n                        value={`${item.first_name} ${item.last_name}`}\n                    />\n                );\n            })}\n        </Card>\n    );\n};\n')))),(0,o.kt)("h3",{id:"client-create-and-edit-page"},"Client Create and Edit Page"),(0,o.kt)("p",null,"The client page is a place where you can update your client info and add new clients. Let's create the Create and Edit pages to create new customers and update existing customers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create Client")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Create Component"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/CreateClient.tsx"',title:'"src/components/client/CreateClient.tsx"'},'import {\n    Create,\n    Drawer,\n    DrawerProps,\n    Form,\n    FormProps,\n    Input,\n    ButtonProps,\n    Grid,\n    Select,\n    useSelect,\n    useModalForm,\n    Button,\n} from "@pankod/refine-antd";\n\nimport { IContact } from "interfaces";\nimport { CreateContact } from "components/contacts";\n\ntype CreateClientProps = {\n    drawerProps: DrawerProps;\n    formProps: FormProps;\n    saveButtonProps: ButtonProps;\n};\n\nexport const CreateClient: React.FC<CreateClientProps> = ({\n    drawerProps,\n    formProps,\n    saveButtonProps,\n}) => {\n    const breakpoint = Grid.useBreakpoint();\n\n    const { selectProps } = useSelect<IContact>({\n        resource: "contacts",\n        optionLabel: "first_name",\n    });\n\n    const {\n        formProps: createContactFormProps,\n        modalProps,\n        show,\n    } = useModalForm({\n        resource: "contacts",\n        action: "create",\n        redirect: false,\n    });\n\n    return (\n        <>\n            <Drawer\n                {...drawerProps}\n                width={breakpoint.sm ? "500px" : "100%"}\n                bodyStyle={{ padding: 0 }}\n            >\n                <Create saveButtonProps={saveButtonProps}>\n                    <Form\n                        {...formProps}\n                        layout="vertical"\n                        initialValues={{\n                            isActive: true,\n                        }}\n                    >\n                        <Form.Item\n                            label="Client Company Name"\n                            name="name"\n                            rules={[\n                                {\n                                    required: true,\n                                },\n                            ]}\n                        >\n                            <Input />\n                        </Form.Item>\n                        <Form.Item label="Select Contact">\n                            <div style={{ display: "flex" }}>\n                                <Form.Item name={"contacts"} noStyle>\n                                    <Select {...selectProps} mode="multiple" />\n                                </Form.Item>\n                                <Button type="link" onClick={() => show()}>\n                                    Create Contact\n                                </Button>\n                            </div>\n                        </Form.Item>\n                    </Form>\n                </Create>\n            </Drawer>\n\n            <CreateContact\n                modalProps={modalProps}\n                formProps={createContactFormProps}\n            />\n        </>\n    );\n};\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit Client")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Edit Component"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/client/EditClient.tsx"',title:'"src/components/client/EditClient.tsx"'},'import {\n    Edit,\n    Drawer,\n    DrawerProps,\n    Form,\n    FormProps,\n    Input,\n    ButtonProps,\n    Grid,\n    Select,\n    useSelect,\n} from "@pankod/refine-antd";\n\ntype EditClientProps = {\n    drawerProps: DrawerProps;\n    formProps: FormProps;\n    saveButtonProps: ButtonProps;\n};\n\nexport const EditClient: React.FC<EditClientProps> = ({\n    drawerProps,\n    formProps,\n    saveButtonProps,\n}) => {\n    const breakpoint = Grid.useBreakpoint();\n\n    const { selectProps } = useSelect({\n        resource: "contacts",\n        optionLabel: "first_name",\n    });\n\n    return (\n        <Drawer\n            {...drawerProps}\n            width={breakpoint.sm ? "500px" : "100%"}\n            bodyStyle={{ padding: 0 }}\n        >\n            <Edit saveButtonProps={saveButtonProps}>\n                <Form\n                    {...formProps}\n                    layout="vertical"\n                    initialValues={{\n                        isActive: true,\n                    }}\n                >\n                    <Form.Item\n                        label="Client Company Name"\n                        name="name"\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Select Contact" name="contacts">\n                        <Select {...selectProps} mode="multiple" />\n                    </Form.Item>\n                </Form>\n            </Edit>\n        </Drawer>\n    );\n};\n')))),(0,o.kt)("h3",{id:"client-list-page-1"},"Client List Page"),(0,o.kt)("p",null,"Above, we created Card, Create and Edit components. Let's define and use these components we have created in our ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientList"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/client/ClientList.tsx"',title:'"src/pages/client/ClientList.tsx"'},'import { IResourceComponentsProps, HttpError } from "@pankod/refine-core";\n\nimport {\n    useSimpleList,\n    AntdList,\n    List,\n    useDrawerForm,\n    CreateButton,\n} from "@pankod/refine-antd";\n\nimport { IClient } from "interfaces";\n//highlight-next-line\nimport { ClientItem, CreateClient, EditClient } from "components/client";\n\nexport const ClientList: React.FC<IResourceComponentsProps> = () => {\n    const { listProps } = useSimpleList<IClient>({\n        metaData: { populate: ["contacts"] },\n    });\n\n    const {\n        drawerProps: createDrawerProps,\n        formProps: createFormProps,\n        saveButtonProps: createSaveButtonProps,\n        show: createShow,\n    } = useDrawerForm<IClient, HttpError, IClient>({\n        action: "create",\n        resource: "clients",\n        redirect: false,\n    });\n\n    const {\n        drawerProps: editDrawerProps,\n        formProps: editFormProps,\n        saveButtonProps: editSaveButtonProps,\n        show: editShow,\n    } = useDrawerForm<IClient, HttpError, IClient>({\n        action: "edit",\n        resource: "clients",\n        redirect: false,\n    });\n\n    return (\n        <>\n            <List\n                pageHeaderProps={{\n                    extra: <CreateButton onClick={() => createShow()} />,\n                }}\n            >\n                <AntdList\n                    grid={{ gutter: 24, xs: 1 }}\n                    {...listProps}\n                    renderItem={(item) => (\n                        <AntdList.Item>\n                            //highlight-next-line\n                            <ClientItem item={item} editShow={editShow} />\n                        </AntdList.Item>\n                    )}\n                />\n            </List>\n            //highlight-start\n            <CreateClient\n                drawerProps={createDrawerProps}\n                formProps={createFormProps}\n                saveButtonProps={createSaveButtonProps}\n            />\n            <EditClient\n                drawerProps={editDrawerProps}\n                formProps={editFormProps}\n                saveButtonProps={editSaveButtonProps}\n            />\n            //highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"We created our ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact")," pages. Now, let's create a Client with ",(0,o.kt)("strong",{parentName:"p"},"refine")," and define contacts for our clients."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:p.Z,alt:"Refine Clients Overview"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live CodeSandbox Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Username"),": demo"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Password"),": demodemo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-invoice-genarator-basics-i7h78z?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-invoice-genarator-basics",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We have completed the first step of our project, creating a basic platform for users to create their company and clients. In the next section, we will add more functionality to this program by allowing users to generate invoices and track payments. Stay tuned as we continue working on ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine Invoice Generator"),"!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/refine-invoice-generator/"},"You can find the Refine Invoice Generator Part II article here \u2192")))}k.isMDXComponent=!0},69282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-a24436814ad892320d9445ad5d701686.png"},63562:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clients_overview-760b646e00ab5f544e3538e34b5d9d74.gif"},74467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/company-616dcbcbe80108c7cc5d64f967183fea.png"},51490:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/contact-32984105c391d11f177f35aa6b7621a9.png"},97081:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/refine_company-ceffca28c9e1e29e95bb41a82009372f.png"},99359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/refine_contacts-56b6792c4a1c7a1be6535f82c22c6edc.png"}}]);