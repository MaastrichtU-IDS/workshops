(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),h=n,m=b["".concat(o,".").concat(h)]||b[h]||d[h]||r;return a?i.a.createElement(m,c(c({ref:t},p),{},{components:a})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<r;p++)o[p]=a[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),r=(a(0),a(127)),o={id:"workshops",title:"IDS development workshops"},c={unversionedId:"workshops",id:"workshops",isDocsHomePage:!1,title:"IDS development workshops",description:"Publish a Python package",source:"@site/docs/workshops.md",slug:"/workshops",permalink:"/best-practices/docs/workshops",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/workshops.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1614084968,sidebar:"docs",previous:{title:"Services available at IDS",permalink:"/best-practices/docs/ids-services"},next:{title:"FAIR principles",permalink:"/best-practices/docs/fair-principles"}},s=[{value:"Publish a Python package",id:"publish-a-python-package",children:[]},{value:"Foundation Skills for Data Analysis with R",id:"foundation-skills-for-data-analysis-with-r",children:[]},{value:"Start Data Science app on the DSRI",id:"start-data-science-app-on-the-dsri",children:[]},{value:"Get started with Docker",id:"get-started-with-docker",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"publish-a-python-package"},"Publish a Python package"),Object(r.b)("p",null,"Follow the workshop at ",Object(r.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/workshop-ci"},"https://maastrichtu-ids.github.io/workshop-ci")),Object(r.b)("p",null,"A workshop to build, test and publish a Python package in an automated way with GitHub Actions"),Object(r.b)("p",null,"You will learn:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The structure and configuration files to write a Python package "),Object(r.b)("li",{parentName:"ul"},"How to publish your package to ",Object(r.b)("inlineCode",{parentName:"li"},"pip")," and Docker"),Object(r.b)("li",{parentName:"ul"},"Run automated tests at each push to the GitHub repository"),Object(r.b)("li",{parentName:"ul"},"Automatically publish the package at each new release created on GitHub if the tests pass")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Estimated time \ud83d\udd50")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"2 hours"))),Object(r.b)("h2",{id:"foundation-skills-for-data-analysis-with-r"},"Foundation Skills for Data Analysis with R"),Object(r.b)("p",null,"Follow the workshop at ",Object(r.b)("a",{parentName:"p",href:"https://carlosug.github.io/IDS-RDM-202019-FSFDAWR/"},"https://carlosug.github.io/IDS-RDM-202019-FSFDAWR/")),Object(r.b)("p",null,"IDS aims is to teach researchers basic concepts, skills, and tools for working with data so that they can get more done in less time, and with less pain. The lessons below were designed for those interested in working with social science data in R."),Object(r.b)("p",null,"The curriculum for these students will be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Introduction to Exploratory Data Analysis"),Object(r.b)("li",{parentName:"ul"},"Create graphs for exploring your data"),Object(r.b)("li",{parentName:"ul"},"Research Data Management"),Object(r.b)("li",{parentName:"ul"},"Interpret Pearson correlation and scatter plots"),Object(r.b)("li",{parentName:"ul"},"Loop functions in R"),Object(r.b)("li",{parentName:"ul"},"Inferential Statistics")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Estimated time \ud83d\udd50")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"8 hours"))),Object(r.b)("p",null,"Course is currently offered in Venlo Campus for Applied Research Course: ",Object(r.b)("a",{parentName:"p",href:"https://carlosug.github.io/AppliedRR/"},"https://carlosug.github.io/AppliedRR/")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"TODO")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Python self-placed tutorials: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/carlosug/IDS-RDM-202004-Python-Basics"},"https://github.com/carlosug/IDS-RDM-202004-Python-Basics")))),Object(r.b)("h2",{id:"start-data-science-app-on-the-dsri"},"Start Data Science app on the DSRI"),Object(r.b)("p",null,"A short workshop to start Data Science applications on the Data Science Research Infrastructure at Maastricht University."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://maastrichtu-ids.github.io/dsri-workshop-start-app"},"https://maastrichtu-ids.github.io/dsri-workshop-start-app")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Estimated time \ud83d\udd50")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"1 hour"))),Object(r.b)("h2",{id:"get-started-with-docker"},"Get started with Docker"),Object(r.b)("p",null,"A straightforward workshop to get started with Docker in an hour."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/get-started-with-docker"},"https://github.com/MaastrichtU-IDS/get-started-with-docker")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Estimated time \ud83d\udd50")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"1 hour"))))}l.isMDXComponent=!0}}]);