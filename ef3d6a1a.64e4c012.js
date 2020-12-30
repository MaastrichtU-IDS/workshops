(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(109)),i={title:"Improving code security",author:"Vincent Emonet",authorURL:"https://github.com/vemonet/"},c={permalink:"/best-practices/blog/2020/12/20/code-security",source:"@site/blog/2020-12-20-code-security.md",description:"Work in progress",date:"2020-12-20T00:00:00.000Z",tags:[],title:"Improving code security",readingTime:.83,truncated:!1,nextItem:{title:"Create a web application",permalink:"/best-practices/blog/2020/11/13/create-webapp"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Work in progress \ud83c\udfd7\ufe0f"))),Object(o.b)("p",null,"Securing softwares is a complex task, especially for research softwares."),Object(o.b)("p",null,"But some actions can be easily taken to improve your code security."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Example of GitHub dependabot warning triggered when doing ",Object(o.b)("inlineCode",{parentName:"li"},"git push"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Counting objects: 6, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (6/6), done.\nWriting objects: 100% (6/6), 1.01 KiB | 1.01 MiB/s, done.\nTotal 6 (delta 4), reused 0 (delta 0)\nremote: Resolving deltas: 100% (4/4), completed with 4 local objects.\nremote: \nremote: GitHub found 2 vulnerabilities on MaastrichtU-IDS/dsri-documentation's default branch (1 moderate, 1 low). To find out more, visit:\nremote:      https://github.com/MaastrichtU-IDS/dsri-documentation/security/dependabot\nremote: \nTo github.com:MaastrichtU-IDS/dsri-documentation.git\n")),Object(o.b)("p",null,"Note that you can also enable dependabot to automatically update problematic dependencies, e.g. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls"}),"https://github.com/MaastrichtU-IDS/dsri-documentation/pulls")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"CodeQL analysis via GitHub Actions."),Object(o.b)("li",{parentName:"ol"},'SonarCloud is quite nice for Test coverage + relevant reports on dangerous code ("code smells")'),Object(o.b)("li",{parentName:"ol"},"Too many issues with some tools like Anchore."),Object(o.b)("li",{parentName:"ol"},"High quality Docker image analysis with Snyke, but require to pay.")))}p.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);