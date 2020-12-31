(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return a?n.a.createElement(u,c(c({ref:t},p),{},{components:a})):n.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),i=(a(0),a(114)),o={id:"fair-data",title:"FAIR data"},c={unversionedId:"fair-data",id:"fair-data",isDocsHomePage:!1,title:"FAIR data",description:"Publishing FAIR data",source:"@site/docs/fair-data.md",slug:"/fair-data",permalink:"/best-practices/docs/fair-data",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/fair-data.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609382233,sidebar:"docs",previous:{title:"FAIR principles",permalink:"/best-practices/docs/fair-principles"},next:{title:"FAIR workflows",permalink:"/best-practices/docs/fair-workflows"}},s=[],p={toc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"publishing-fair-data"},"Publishing FAIR data"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Data persistence"),": Data repositories, such as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://figshare.com/"}),"Figshare"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://zenodo.org/"}),"Zenodo"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://datadryad.org/"}),"DataDryad"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kaggle.com/datasets"}),"Kaggle Datasets")," and many others, are a good way to ensure dataset persistence. Many of these repositories have ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://knowledge.figshare.com/articles/item/preservation-and-continuity-of-access-policy"}),"agreements with libraries")," to preserve data in perpetuity.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Provenance"),": with datasets often published in multiple repositories, it would be useful for repositories to describe the provenance information more explicitly in the metadata. "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The provenance information helps users  understand who collected the data, where the primary source of the  dataset is, or how it might have changed. "),Object(i.b)("li",{parentName:"ul"},"The prov ontology can be used. "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Licensing"),": datasets should include licensing information, ideally in a  machine-readable format. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Assigning persistent identifiers"),", such as DOIs (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.doi.org/"}),"Digital Object Identifier"),"), is critical for long-term tracking and useability."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Easier citation of datasets and version tracking"),Object(i.b)("li",{parentName:"ul"},"Dereferenceable: if a dataset moves, the  identifier can point to a different location.")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Source")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Recommendations adapted from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ai.googleblog.com/2020/08/an-analysis-of-online-datasets-using.html"}),"this article"),"."))),Object(i.b)("h1",{id:"tools-and-frameworks"},"Tools and frameworks"),Object(i.b)("p",null,"Pointer to tools and framework to build FAIR data systems (depend on the use-case)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://smart-api.info"}),"Smart API")," specifications to document your API (extension of OpenAPI).",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Take advantage of the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://swagger.io/tools/swagger-ui/"}),"Swagger UI")," to try your API."))),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://json-ld.org/"}),"JSON-LD")," format to add a ",Object(i.b)("inlineCode",{parentName:"li"},"@context")," to your JSON objects, and obtain Linked Data."),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.w3.org/TR/hcls-dataset/"}),"Health Care and Life Science (HCLS) descriptive metadata profile")," to generate and store relevant metadata for Biomedical datasets (in RDF)."),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://fairsharing.github.io/FAIR-Evaluator-FrontEnd/"}),"FAIR evaluator")," to assess the FAIRness of your services.")))}l.isMDXComponent=!0}}]);