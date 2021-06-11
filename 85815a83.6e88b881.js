(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),o=(a(0),a(136)),r=["components"],c={title:"Create a web app",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["web","application","development"],description:"Create a web application with React and TypeScript",hide_table_of_contents:!1},p={permalink:"/best-practices/blog/2020/12/15/create-webapp",source:"@site/blog/2020-12-15-create-webapp.md",description:"Create a web application with React and TypeScript",date:"2020-12-15T00:00:00.000Z",tags:[{label:"web",permalink:"/best-practices/blog/tags/web"},{label:"application",permalink:"/best-practices/blog/tags/application"},{label:"development",permalink:"/best-practices/blog/tags/development"}],title:"Create a web app",readingTime:5.88,truncated:!0,prevItem:{title:"VisualStudio Code extensions",permalink:"/best-practices/blog/2020/12/17/vscode-extensions"}},b=[{value:"Create your website",id:"create-your-website",children:[]},{value:"Improve your website",id:"improve-your-website",children:[{value:"Recommended UI libraries",id:"recommended-ui-libraries",children:[]},{value:"Add a CSS file",id:"add-a-css-file",children:[]},{value:"Add multiple pages",id:"add-multiple-pages",children:[]}]},{value:"Build a SOLID app",id:"build-a-solid-app",children:[{value:"Add SOLID login",id:"add-solid-login",children:[]},{value:"Use SOLID user data",id:"use-solid-user-data",children:[]}]},{value:"Deploy your website",id:"deploy-your-website",children:[{value:"On GitHub Pages",id:"on-github-pages",children:[]},{value:"On IDS servers with Docker",id:"on-ids-servers-with-docker",children:[]},{value:"On AWS Amplify",id:"on-aws-amplify",children:[]}]},{value:"Diagram of tools and frameworks used",id:"diagram-of-tools-and-frameworks-used",children:[]}],l={toc:b};function s(e){var t=e.components,c=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This web page will help you quickly create a ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org"},"ReactJS")," web application using ",Object(o.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," in a ",Object(o.b)("a",{parentName:"p",href:"https://jamstack.org/"},"Jamstack")," fashion in a few minutes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bootstrap a React TypeScript application"),Object(o.b)("li",{parentName:"ul"},"Recommended libraries for the web UI"),Object(o.b)("li",{parentName:"ul"},"Integrate ",Object(o.b)("a",{parentName:"li",href:"https://solidproject.org/"},"SOLID")," for user authentication and user data"),Object(o.b)("li",{parentName:"ul"},"Deploy for free on ",Object(o.b)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages"))),Object(o.b)("h2",{id:"create-your-website"},"Create your website"),Object(o.b)("p",null,"Requirements: ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com"},Object(o.b)("inlineCode",{parentName:"a"},"npm"))," and ",Object(o.b)("a",{parentName:"p",href:"https://yarnpkg.com"},Object(o.b)("inlineCode",{parentName:"a"},"yarn"))," installed"),Object(o.b)("p",null,"Checkout the ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/guides/typescript/"},"Expo documentation")," for the complete up-to-date documentation."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install the command line packages in your terminal:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn global add expo-cli create-react-native-app\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create your project from the default ",Object(o.b)("inlineCode",{parentName:"li"},"expo init")," TypeScript template:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"expo init -t expo-template-blank-typescript\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Alternative")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also create your project using one of the available ",Object(o.b)("a",{parentName:"p",href:"https://github.com/expo/create-react-native-app"},Object(o.b)("inlineCode",{parentName:"a"},"create-react-native-app"))," template:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"create-react-native-app my-project\n")))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Once your projects has been generated, go in its folder:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd my-project\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Start the application on http://localhost:19006")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn web\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Start editing")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can now make changes to ",Object(o.b)("inlineCode",{parentName:"p"},"App.tsx")," to develop your application!"))),Object(o.b)("h2",{id:"improve-your-website"},"Improve your website"),Object(o.b)("h3",{id:"recommended-ui-libraries"},"Recommended UI libraries"),Object(o.b)("p",null,"Various libraries are available to design your UI, if you don't know which one to pick we recommend the following:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Web app in browser")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Material UI for web applications: ",Object(o.b)("a",{parentName:"p",href:"https://material-ui.com"},"https://material-ui.com")))),Object(o.b)("p",null,"Why we use Material UI:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Popular open source library, supported by a company (which sell a deluxe version of the lib, with support for multi sort in datatables for example)"),Object(o.b)("li",{parentName:"ul"},"The Material Design style is familiar to a lot of users (promoted by Google)"),Object(o.b)("li",{parentName:"ul"},"Optimized to design web app running on desktop browser, but also automatically rendering well on mobile size"),Object(o.b)("li",{parentName:"ul"},"I usually can find components to easily implement the UI features I want")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Mobile app (native Android and iOS)")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"UI Kitten for native applications: ",Object(o.b)("a",{parentName:"p",href:"https://akveo.github.io/react-native-ui-kitten"},"https://akveo.github.io/react-native-ui-kitten")),Object(o.b)("p",{parentName:"div"},"Support for ",Object(o.b)("a",{parentName:"p",href:"https://akveo.github.io/react-native-ui-kitten/docs/guides/running-on-the-web"},"web app is still experimental"),"."))),Object(o.b)("h3",{id:"add-a-css-file"},"Add a CSS file"),Object(o.b)("p",null,"It can be useful to define global CSS styles:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"App.css")," file. Here to import a font and define default body text alignment to the center:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-css"},'@import url("https://fonts.googleapis.com/css?family=Open+Sans");\nbody {\n  text-align: center; \n} \n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Import the CSS file in ",Object(o.b)("inlineCode",{parentName:"p"},"App.tsx"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import './App.css';\n")))),Object(o.b)("h3",{id:"add-multiple-pages"},"Add multiple pages"),Object(o.b)("p",null,"Add a ",Object(o.b)("a",{parentName:"p",href:"https://reactrouter.com/web/guides/quick-start"},"React Router")," to be able to have more than one page."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Server-side rendering")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," is a framework to easily build complete React applications that are rendered on the server (not client), it includes:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"A routing system"),Object(o.b)("li",{parentName:"ul"},"Built-in CSS and Sass support"),Object(o.b)("li",{parentName:"ul"},"API routes to build API endpoints with Serverless Functions")))),Object(o.b)("h2",{id:"build-a-solid-app"},"Build a SOLID app"),Object(o.b)("p",null,"Build a SOLID app with React using ",Object(o.b)("a",{parentName:"p",href:"https://solid.github.io/react-components"},"SOLID React Components"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Alternative")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/javascript-in-plain-english/building-a-solid-app-in-react-with-tripledoc-27fd47d8bdda"},"query SOLID data with Tripledoc"),"."))),Object(o.b)("h3",{id:"add-solid-login"},"Add SOLID login"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add SOLID for React npm package to your project:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @solid/react\nyarn add @types/solid__react --dev\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Add the login/logout button to your navigation bar:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { AuthButton } from '@solid/react';\n\n<AuthButton popup=\"https://inrupt.net/common/popup.html\"/>\n")),Object(o.b)("h3",{id:"use-solid-user-data"},"Use SOLID user data"),Object(o.b)("p",null,"Show the user name if logged in with SOLID:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { LoggedIn, LoggedOut, Value } from '@solid/react';\n\n<LoggedIn>\n  <p>\n    Welcome <Value src=\"user.name\"/>!\n  </p>\n</LoggedIn>\n<LoggedOut>\n  <p>\n    Please login with SOLID\n  </p>\n</LoggedOut>\n")),Object(o.b)("h2",{id:"deploy-your-website"},"Deploy your website"),Object(o.b)("p",null,"We recommend to deploy for free on GitHub Pages. If your application need to run NodeJS on the server then contact us to deploy on IDS servers."),Object(o.b)("h3",{id:"on-github-pages"},"On GitHub Pages"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Free website hosting")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We recommend you to deploy your React applications as a static websites for free on GitHub Pages. "))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Use a custom URL")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can also use a custom URL with GitHub Pages if you don't want to use the default github.io URL. This can be easily defined in your GitHub repository settings."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install ",Object(o.b)("inlineCode",{parentName:"li"},"gh-pages"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add gh-pages --dev\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Add GitHub Pages scripts to deploy to GitHub Pages in ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," and provide the URL of the website on GitHub Page in ",Object(o.b)("inlineCode",{parentName:"li"},"homepage"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n    "build": "expo build:web",\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d web-build"\n},\n"homepage": "https://maastrichtu-ids.github.io/my-github-repository",\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Make sure the base path is properly set in your application if the GitHub Page is deployed on a specific path (e.g. ",Object(o.b)("a",{parentName:"li",href:"https://maastrichtu-ids.github.io/my-github-repository/"},"https://maastrichtu-ids.github.io/my-github-repository/"),"):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'<Router basename="/my-github-repository/">\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Link within the app")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Then use ",Object(o.b)("inlineCode",{parentName:"p"},'<Link to="/">')," to link within the app (instead of ",Object(o.b)("inlineCode",{parentName:"p"},"<a href>"),")."))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Deploy to GitHub Pages from your terminal:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn deploy\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Automate deployment")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can automate this process at each push to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch by creating the file ",Object(o.b)("inlineCode",{parentName:"p"},".github/workflows/deploy-github.yml")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: Deploy to GitHub Pages\non:\n  workflow_dispatch:\n  push:\n    branches: [ main ]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v1\n      with:\n        node-version: 12\n    - name: Install dependencies and build\n      run: |\n        git config --global user.email "MY.EMAIL@maastrichtuniversity.nl"\n        git config --global user.name "FirstName LastName"\n        yarn install\n        yarn build\n    - name: Deploy on GitHub\n      uses: JamesIves/github-pages-deploy-action@3.7.1\n      with:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        BRANCH: gh-pages\n        FOLDER: web-build\n        CLEAN: true\n')),Object(o.b)("h3",{id:"on-ids-servers-with-docker"},"On IDS servers with Docker"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define the scripts to build and serve for production in ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n    "build": "expo build:web",\n    "serve": "serve -s web-build"\n}\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Define a simple ",Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile")," to install your application, and serve it in production mode:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:12-alpine\nWORKDIR /webapp\n\n# Only install NPM packages if package.json or yarn.lock change\nCOPY package.json package.json\nCOPY yarn.lock yarn.lock\nRUN yarn install\n\nCOPY . .\n# Build in /web-build folder\nRUN yarn build\n\nEXPOSE 5000\nENTRYPOINT [ "yarn", "serve" ]\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Copy your ",Object(o.b)("inlineCode",{parentName:"li"},".gitignore")," and rename the copy to ",Object(o.b)("inlineCode",{parentName:"li"},".dockerignore")," to avoid conflict with Docker and your local environment:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cp .gitignore .dockerignore\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Once the Docker configuration has be done, you can build it:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-project .\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"And try starting the application on http://localhost:5000")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -p 5000:5000 my-project\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Deploy publicly")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When this has be done, contact us if you want to deploy your website publicly on IDS servers."))),Object(o.b)("h3",{id:"on-aws-amplify"},"On AWS Amplify"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/amplify/"},"AWS Amplify"),"  is a set of products and tools that enables mobile and front-end web  developers to build and deploy secure, scalable full stack applications, powered by Amazon. With Amplify, you can configure app backends in  minutes, connect them to your app in just a few lines of code, and  deploy static web apps in three steps"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Always free")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/free/"},"Always free"),":"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Amazon DynamoDB 25 GB of storage"),Object(o.b)("li",{parentName:"ul"},"AWS Lambda 1 Million free requests per month")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Temporarily free")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Free for the 12 first months:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Hosting: 5 GB stored and 15 GB served per month"),Object(o.b)("li",{parentName:"ul"},"1000 build minutes per month "),Object(o.b)("li",{parentName:"ul"},"AWS AppSync 250 k query or data modifications per month (Develop, secure and run GraphQL APIs at any scale)")))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Pricing")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"See the ",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/amplify/pricing"},"pricing page")," for more details on prices outside of the free tier."))),Object(o.b)("h2",{id:"diagram-of-tools-and-frameworks-used"},"Diagram of tools and frameworks used"),Object(o.b)("p",null,"Here is a simple diagram to better understand the stack of tools and framework used:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Stack diagram",src:a(206).default})," "),Object(o.b)("p",null,"The Semantic Web stack using React and TypeScript for static web app, and additional services:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Semantic web stack diagram",src:a(207).default})," "))}s.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(a),m=n,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||o;return a?i.a.createElement(u,c(c({ref:t},b),{},{components:a})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/react_frameworks_stack-4786cabcddb7acf9ef0bef7dcea6d2d1.png"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/semantic_web_stack-1cf19066eca2de32fb22aa0d6cc5286e.png"}}]);