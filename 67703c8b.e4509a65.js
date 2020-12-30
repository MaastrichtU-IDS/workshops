(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(114)),i={id:"education-workshops",title:"Try IDS workshops"},c={unversionedId:"education-workshops",id:"education-workshops",isDocsHomePage:!1,title:"Try IDS workshops",description:"Publish a Python package with automated tests",source:"@site/docs/education-workshops.md",slug:"/education-workshops",permalink:"/best-practices/docs/education-workshops",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/master/website/docs/education-workshops.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609358897,sidebar:"docs",previous:{title:"Publish RDF data",permalink:"/best-practices/docs/publish-rdf-data"},next:{title:"Create a workshop",permalink:"/best-practices/docs/create-workshops"}},s=[{value:"Publish a Python package with automated tests",id:"publish-a-python-package-with-automated-tests",children:[]},{value:"Foundation Skills for Data Analysis with R",id:"foundation-skills-for-data-analysis-with-r",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"publish-a-python-package-with-automated-tests"},"Publish a Python package with automated tests"),Object(o.b)("p",null,"Follow the workshop at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maastrichtu-ids.github.io/workshop-ci"}),"https://maastrichtu-ids.github.io/workshop-ci")),Object(o.b)("p",null,"A workshop to build, test and publish a Python package in an automated way with GitHub Actions"),Object(o.b)("p",null,"You will learn:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The structure and configuration files to write a Python package "),Object(o.b)("li",{parentName:"ul"},"How to publish your package to ",Object(o.b)("inlineCode",{parentName:"li"},"pip")," and Docker"),Object(o.b)("li",{parentName:"ul"},"Run automated tests at each push to the GitHub repository"),Object(o.b)("li",{parentName:"ul"},"Automatically publish the package at each new release created on GitHub if the tests pass")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Estimated time")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"2 hours"))),Object(o.b)("h2",{id:"foundation-skills-for-data-analysis-with-r"},"Foundation Skills for Data Analysis with R"),Object(o.b)("p",null,"Follow the workshop at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://carlosug.github.io/IDS-RDM-202019-FSFDAWR/"}),"https://carlosug.github.io/IDS-RDM-202019-FSFDAWR/")),Object(o.b)("p",null,"IDS aims is to teach researchers basic concepts, skills, and tools for working with data so that they can get more done in less time, and with less pain. The lessons below were designed for those interested in working with social science data in R."),Object(o.b)("p",null,"The curriculum for these students will be:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Introduction to Exploratory Data Analysis"),Object(o.b)("li",{parentName:"ul"},"Create graphs for exploring your data"),Object(o.b)("li",{parentName:"ul"},"Research Data Management"),Object(o.b)("li",{parentName:"ul"},"Interpret Pearson correlation and scatter plots"),Object(o.b)("li",{parentName:"ul"},"Loop functions in R"),Object(o.b)("li",{parentName:"ul"},"Inferential Statistics")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Estimated time")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"8 hours"))),Object(o.b)("p",null,"Course is currently offered in Venlo Campus for Applied Research Course: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://carlosug.github.io/AppliedRR/"}),"https://carlosug.github.io/AppliedRR/")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"TODO")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Python self-placed tutorials: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/carlosug/IDS-RDM-202004-Python-Basics"}),"https://github.com/carlosug/IDS-RDM-202004-Python-Basics")))))}p.isMDXComponent=!0}}]);