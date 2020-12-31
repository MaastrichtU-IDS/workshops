(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),d=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return a?c.a.createElement(u,r(r({ref:t},b),{},{components:a})):c.a.createElement(u,r({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var b=2;b<o;b++)i[b]=a[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),c=a(7),o=(a(0),a(116)),i={title:"Improve code security",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["security","development"],description:"Improve the security of your code, web app and containers",hide_table_of_contents:!1},r={permalink:"/best-practices/blog/2020/12/20/code-security",source:"@site/blog/2020-12-20-code-security.md",description:"Improve the security of your code, web app and containers",date:"2020-12-20T00:00:00.000Z",tags:[{label:"security",permalink:"/best-practices/blog/tags/security"},{label:"development",permalink:"/best-practices/blog/tags/development"}],title:"Improve code security",readingTime:1.42,truncated:!0,nextItem:{title:"VisualStudio Code extensions",permalink:"/best-practices/blog/2020/11/23/vscode-extensions"}},s=[{value:"Update dependencies",id:"update-dependencies",children:[]},{value:"CodeQL analysis",id:"codeql-analysis",children:[]},{value:"Test coverage and additional analysis",id:"test-coverage-and-additional-analysis",children:[]},{value:"Container scan",id:"container-scan",children:[]}],b={toc:s};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Securing softwares is a complex task, especially for research softwares."),Object(o.b)("p",null,"But some easy actions can be taken to quickly improve your code security."),Object(o.b)("h2",{id:"update-dependencies"},"Update dependencies"),Object(o.b)("p",null,"GitHub proposes a tool, the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/features/security"}),"Dependabot")),", to spot and warn you about deprecated dependencies that needs to be upgraded to fix known vulnerabilities."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Dependabot example")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check the DSRI documentation ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot"}),"GitHub Dependabot alerts"),"."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Update dependencies automatically")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can enable Dependabot to ",Object(o.b)("strong",{parentName:"p"},"automatically update problematic dependencies")),Object(o.b)("p",{parentName:"div"},"See this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pull/24"}),"DSRI documentation automatic pull request"),"."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Integrates with git")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Dependabot warning will be displayed when doing ",Object(o.b)("inlineCode",{parentName:"p"},"git push"),":"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"remote: Resolving deltas: 100% (4/4), completed with 4 local objects.\nremote: \nremote: GitHub found 2 vulnerabilities on MaastrichtU-IDS/dsri-documentation's default branch (1 moderate, 1 low). To find out more, visit:\nremote:      https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot\nremote: \nTo github.com:MaastrichtU-IDS/dsri-documentation.git\n")))),Object(o.b)("h2",{id:"codeql-analysis"},"CodeQL analysis"),Object(o.b)("p",null,"Tool from GitHub to spot dangerous coding practices, e.g. hardcoded credentials, known JavaScript vulnerability."),Object(o.b)("p",null,"Runs in a GitHub Actions workflow."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"CodeQL analysis example")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check the OpenPredict API ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/codeql-analysis.yml"}),"CodeQL Analysis workflow")))),Object(o.b)("h2",{id:"test-coverage-and-additional-analysis"},"Test coverage and additional analysis"),Object(o.b)("p",null,"SonarCloud is quite nice for test coverage, and various relevant reports on your code quality (spot security issues, code blocks that could be improved)"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"SonarCloud report example")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check the OpenPredict API ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://sonarcloud.io/dashboard?id=MaastrichtU-IDS_translator-openpredict"}),"SonarCloud report")))),Object(o.b)("h2",{id:"container-scan"},"Container scan"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Free Open Source tool")),Object(o.b)("p",null,"Too many irrelevant issues with some Docker container analysis tools like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/anchore-container-scan"}),"Anchore Container scan"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Anchore container scan example")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check the OpenPredict API ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/translator-openpredict/blob/master/.github/workflows/security-scan-docker.yml"}),"Anchore docker scan workflow"),". "))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Commercial tool")),Object(o.b)("p",null,"Better quality Docker image analysis with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://snyk.io/"}),"Snyk"),", but require to pay for extensive automated usage."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Docker enable to do a limited number of Snyk vulnerability scan. "),Object(o.b)("p",{parentName:"div"},"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/partners/snyk"}),"Docker and Snyk documentation")," for more details"))))}d.isMDXComponent=!0}}]);