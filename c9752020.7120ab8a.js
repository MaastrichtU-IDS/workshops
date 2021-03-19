(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(134)),i={title:"Build a FAIR Knowledge Graph",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["knowledge graph","rdf","mapping"],description:"Build a RDF Knowledge Graph from CSV files",hide_table_of_contents:!1},l={permalink:"/best-practices/blog/2021/03/18/build-a-kg",source:"@site/blog/2021-03-18-build-a-kg.md",description:"Build a RDF Knowledge Graph from CSV files",date:"2021-03-18T00:00:00.000Z",tags:[{label:"knowledge graph",permalink:"/best-practices/blog/tags/knowledge-graph"},{label:"rdf",permalink:"/best-practices/blog/tags/rdf"},{label:"mapping",permalink:"/best-practices/blog/tags/mapping"}],title:"Build a FAIR Knowledge Graph",readingTime:7.32,truncated:!0,nextItem:{title:"A triplestore in your browser?",permalink:"/best-practices/blog/2021/03/12/rdf-in-the-browser"}},c=[],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This short tutorial guides you through building a RDF Knowledge Graph about restaurants and cuisines from ",Object(o.b)("a",{parentName:"p",href:"https://data.world/mgarfield/restaurants/"},"2 CSV sample files generated from a dataset found on Kaggle"),", using mappings expressed in YAML. "),Object(o.b)("p",null,"We will use tools, data models and formats based on recommendations from the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3.org/"},"World Wide Web Consortium (W3C)")," to build a knowledge graph as ",Object(o.b)("a",{parentName:"p",href:"https://www.go-fair.org/fair-principles/"},"FAIR")," as possible (Findable, Accessible, Interoperable, Reusable)."),Object(o.b)("p",null,"The instructions and tools are accessible to anyone without the need to understand anything else than reading English, just follow the instructions and copy/paste the text at the right place in a website, and build a knowledge graph!"))}s.isMDXComponent=!0},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,l(l({ref:t},p),{},{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);