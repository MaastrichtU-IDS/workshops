(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(136)),a=["components"],i={title:"Improve code security",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["security","development"],description:"Improve the security of your code, web app and containers",hide_table_of_contents:!1},p={permalink:"/best-practices/blog/2020/12/20/code-security",source:"@site/blog/2020-12-20-code-security.md",description:"Improve the security of your code, web app and containers",date:"2020-12-20T00:00:00.000Z",tags:[{label:"security",permalink:"/best-practices/blog/tags/security"},{label:"development",permalink:"/best-practices/blog/tags/development"}],title:"Improve code security",readingTime:2.415,truncated:!0,prevItem:{title:"Hosting docker images for DSRI",permalink:"/best-practices/blog/2021/01/19/private-image-openshift-deploy"},nextItem:{title:"VisualStudio Code extensions",permalink:"/best-practices/blog/2020/12/17/vscode-extensions"}},u=[],s={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Securing softwares is a complex task, especially for research softwares."),Object(c.b)("p",null,"But some easy actions can be taken to quickly improve your code security."))}l.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,b=l["".concat(a,".").concat(m)]||l[m]||f[m]||c;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);