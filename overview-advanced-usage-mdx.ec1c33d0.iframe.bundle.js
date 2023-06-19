"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8835],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/stories/overview/advanced-usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>advanced_usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const advanced_usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Overview/Advanced Usage"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"# Advanced Usage\n\nLouis is a fully featured React component library. Simple components can be composed to construct robust frontend applications. To best see this in action, we recommend studying our example repository created over here: [louis-demo-cra](https://github.com/lokalise/louis-demo-cra). In that repo we demonstrate typical usage of a number of different Louis components working together to create a multi input form.\n\n## Working with an API\n\nIf you are creating your own application with Louis, it remains up to you how you handle API interaction. It is not Louis' responsibility to dictate how you achieve this. Generally speaking Louis components expect to receive any data _synchronously_. So let's demonstrate how we can achieve this when waiting for some _asynchronous_ API interactions to complete.\n\nFor this demonstration we'll abstract away the specifics of how the API is implemented. Let's suppose however that we have the following functions provided by our API layer:\n\n```ts\n/**\n * Given a user ID, return a promise which resolves to the User object having that ID.\n */\nconst getUserDetails = (userId: string): Promise<User> => {\n\t// This guide is API implementation agnostic\n};\n\n/**\n * Given a User object, post it to the API.\n * The returned promise resolves when the backend confirms the post is complete.\n */\nconst postUserDetails = (user: User): Promise<void> => {\n\t// This guide is API implementation agnostic\n};\n```\n\nThen how might we interact with these functions in our UI?\n\n```tsx\nimport { Flex, Input, Label, Loading } from '@lokalise/louis';\nimport { useCallback, useEffect, useState } from 'react';\n\nimport { getUserDetails, postUserDetails } from '../api';\n\n/**\n * useUserDetails handles state and behaviour for our form.\n * This helps to separate behaviour from rendering.\n */\nconst useUserDetails = (userId: string) => {\n\tconst [user, setUser] = useState({ name: '', email: '' });\n\n\t// We'll use this state to keep track of in progress API calls.\n\tconst [loading, setLoading] = useState(false);\n\n\t// This useEffect manages retrieving user information from the API.\n\t// It starts as soon as this component mounts, or any time the userId changes.\n\tuseEffect(() => {\n\t\tsetLoading(true);\n\t\tgetUserDetails(userId)\n\t\t\t.then((userFromBackend) => {\n\t\t\t\tsetUser(userFromBackend);\n\t\t\t})\n\t\t\t.finally(() => setLoading(false));\n\t}, [userId]);\n\n\t// This function handles form submission.\n\t// We immediately update our local state to recognise an async process has started.\n\t// We clear the loading state only after the API call resolves.\n\tconst submitUserDetails = () => {\n\t\tsetLoading(true);\n\t\tpostUserDetails(user).finally(() => setLoading(false));\n\t};\n\n\tconst onChangeEmail = useCallback<ChangeEventHandler<HTMLInputElement>>(\n\t\t(e) => setUser((u) => ({ ...u, email: e.currentTarget.value })),\n\t\t[],\n\t);\n\tconst onChangeName = useCallback<ChangeEventHandler<HTMLInputElement>>(\n\t\t(e) => setUser((u) => ({ ...u, name: e.currentTarget.value })),\n\t\t[],\n\t);\n\n\treturn {\n\t\tloading,\n\t\tonChangeEmail,\n\t\tonChangeName,\n\t\tsubmitUserDetails,\n\t\tuser,\n\t};\n};\n\ntype UserDetailsUpdateFormProps = {\n\tuserId: string;\n};\n\nconst UserDetailsUpdateForm = ({ userId }: UserDetailsUpdateFormProps) => {\n\tconst {\n\t\tloading,\n\t\tonChangeEmail,\n\t\tonChangeName,\n\t\tsubmitUserDetails,\n\t\tuser: { email, name },\n\t} = useUserDetails(userId);\n\n\t// We have an in flight API call, and should wait for it to resolve\n\tif (loading) {\n\t\treturn <Loading />;\n\t}\n\n\t// We have loaded user details from the backend.\n\t// The user can edit them synchronously as much as they like until they are ready to submit the form.\n\treturn (\n\t\t<form onSubmit={submitUserDetails}>\n\t\t\t<Flex direction=\"column\" gap={4}>\n\t\t\t\t<Label text=\"Full name\" underline>\n\t\t\t\t\t<Input name=\"fullName\" value={name} onChange={onChangeName} />\n\t\t\t\t</Label>\n\t\t\t\t<Label text=\"E-mail\" underline>\n\t\t\t\t\t<Input\n\t\t\t\t\t\tname=\"email\"\n\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\tvalue={email}\n\t\t\t\t\t\tonChange={onChangeEmail}\n\t\t\t\t\t\tplaceholder=\"someone@example.com\"\n\t\t\t\t\t/>\n\t\t\t\t</Label>\n\t\t\t</Flex>\n\t\t</form>\n\t);\n};\n```\n\nThis pattern of blocking entirely on form submission might not be acceptable if the API is particularly slow. In such cases we recommend using the Toast component. Here's how you would change the form submission handler above, if you wanted to use the Toast approach instead:\n\n```tsx\nconst submitUserDetails = () => {\n\tshowToast({\n\t\ttype: 'info',\n\t\ttitle: 'Initiated user details upload. This will take just a moment.',\n\t});\n\tpostUserDetails({\n\t\tname: userName,\n\t\temail: userEmail,\n\t})\n\t\t.then(() =>\n\t\t\tshowToast({\n\t\t\t\ttype: 'success',\n\t\t\t\ttitle: 'User details uploaded successfully!',\n\t\t\t}),\n\t\t)\n\t\t.catch(() => {\n\t\t\tshowToast({\n\t\t\t\ttype: 'error',\n\t\t\t\ttitle: 'User details upload failed unexpectedly. Please try again.',\n\t\t\t});\n\t\t});\n};\n```\n"})]})}}}}]);