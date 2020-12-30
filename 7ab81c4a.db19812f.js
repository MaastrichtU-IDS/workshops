(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(109)),i={id:"documentation",title:"Documentation"},l={unversionedId:"documentation",id:"documentation",isDocsHomePage:!1,title:"Documentation",description:"README",source:"@site/docs/documentation.md",slug:"/documentation",permalink:"/best-practices/docs/documentation",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/master/website/docs/documentation.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609345831,sidebar:"docs",previous:{title:"Software distribution",permalink:"/best-practices/docs/software-distribution"},next:{title:"Continuous integration",permalink:"/best-practices/docs/continuous-integration"}},c=[{value:"README",id:"readme",children:[]},{value:"Additional in-depth documentation",id:"additional-in-depth-documentation",children:[]},{value:"Manuals",id:"manuals",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"readme"},"README"),Object(o.b)("p",null,"The README.MD at the root of the git repository should be used for all iformation targeted at other developers. The README.md ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/python-template"}),"here")," can be used as an outline or example. At the minimum should contain the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Provide a short description of the tool (2 to 3 lines will not kill anyone)."),Object(o.b)("li",{parentName:"ul"},"Provide which language versions are supported, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"Python 3.6<"),"  "),Object(o.b)("li",{parentName:"ul"},"Provide a list of prerequisites required to run the application."),Object(o.b)("li",{parentName:"ul"},"Provide instuctions on how to install the program locally, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"pip install my_package"),"  if applicable."),Object(o.b)("li",{parentName:"ul"},"Provide a few working examples that illustrate how to run the program.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Whenever possible users should be able to copy paste the provided examples."),Object(o.b)("li",{parentName:"ul"},"If necessary, store sample files in the git repository (so everything is accessible with a ",Object(o.b)("inlineCode",{parentName:"li"},"git clone"),")."),Object(o.b)("li",{parentName:"ul"},"Try to cover a few features and mechanisms of your program."),Object(o.b)("li",{parentName:"ul"},"Try to keep those examples up-to-date."))),Object(o.b)("li",{parentName:"ul"},"Provide instructions on how to build and publish the application if applicable."),Object(o.b)("li",{parentName:"ul"},"Provide build/run/stop/update docker instructions if applicable (try to use docker as much as possible).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Should not be more than ",Object(o.b)("inlineCode",{parentName:"li"},"docker run")," or a ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose up -d")," in case of multiple containers."),Object(o.b)("li",{parentName:"ul"},"Add details about Docker deployment if necessary (shared volume, initialization and so on).")))),Object(o.b)("h2",{id:"additional-in-depth-documentation"},"Additional in-depth documentation"),Object(o.b)("p",null,"Add ",Object(o.b)("strong",{parentName:"p"},"Wiki pages")," on GitHub or GitLab for in-depth documentation targeted at developers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to contribute (pull request etiquette, how to run tests)"),Object(o.b)("li",{parentName:"ul"},"Diagrams to explain your code"),Object(o.b)("li",{parentName:"ul"},"Additional deployments (for production, Docker, Kubernetes)"),Object(o.b)("li",{parentName:"ul"},"Initialization and ETL tasks")),Object(o.b)("h2",{id:"manuals"},"Manuals"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages")," for all extensive documentation on general information and how to use the software targeted at a general audience. "))}p.isMDXComponent=!0}}]);