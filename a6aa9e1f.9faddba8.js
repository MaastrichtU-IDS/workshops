(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,10],{112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),i=t(121),c=t(141),o=t(117);var m=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(131);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,o=Object(l.default)().siteConfig.title,u=a.blogDescription,d=a.blogTitle,f="/"===a.permalink?o:d;return r.a.createElement(i.a,{title:f,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(m,{metadata:a})))))}},120:function(e,a,t){"use strict";t.d(a,"c",(function(){return n})),t.d(a,"d",(function(){return r})),t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return i})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return o}));t(119);var n=["en"],r=!1,l=null,i="39e8a545",c=8,o=50},122:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),i=t.n(l),c=t(115),o=t(117),m=t(116),s=t(118);t(55);function u(e){var a=e.to,t=e.href,l=e.label,c=e.prependBaseUrlToHref,m=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(s.a)(a),d=Object(s.a)(t,{forcePrependBaseUrl:!0});return i.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:c?d:t}:{to:u},m),l)}a.a=function(){var e=Object(m.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,r=void 0===n?[]:n,l=a.logo,o=void 0===l?{}:l;return Object(s.a)(o.src),e?i.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},i.a.createElement("div",{className:"container"},r&&r.length>0&&i.a.createElement("div",{className:"row footer__links"},r.map((function(e,a){return i.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?i.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(u,e))}))):null)}))),(o||t)&&i.a.createElement("div",{className:"text--center"},i.a.createElement("div",null,i.a.createElement("a",{rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"},i.a.createElement("img",{src:"/best-practices/img/cc-by.svg",alt:"cc by license"}))),i.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:t}})))):null}}}]);