(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10,12],{133:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return s}));a(132);var r=["en"],n=!1,l=null,c="fa191bd2",i=8,s=50},135:function(e,t,a){"use strict";var r=a(3),n=a(7),l=a(0),c=a.n(l),i=a(128),s=a(130),m=a(129),o=a(131);a(55);function u(e){var t=e.to,a=e.href,l=e.label,i=e.prependBaseUrlToHref,m=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(o.a)(t),f=Object(o.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:i?f:a}:{to:u},m),l)}t.a=function(){var e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,l=t.logo,s=void 0===l?{}:l;return Object(o.a)(s.src),e?c.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},n&&n.length>0&&c.a.createElement("div",{className:"row footer__links"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(u,e))}))):null)}))),(s||a)&&c.a.createElement("div",{className:"text--center"},c.a.createElement("div",null,c.a.createElement("a",{rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"},c.a.createElement("img",{src:"/best-practices/img/cc-by.svg",alt:"cc by license"}))),c.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:a}})))):null}},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r),l=a(128),c=a(130),i=a(62),s=a.n(i);function m(e){var t=e.sidebar;return 0===t.items.length?null:n.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:s.a.sidebarItemTitle},t.title),n.a.createElement("ul",{className:s.a.sidebarItemList},t.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},n.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(134),c=a(130),i=a(144);t.default=function(e){var t=e.tags,a=e.sidebar,r={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);r[t]=r[t]||[],r[t].push(e)}));var s=Object.entries(r).sort((function(e,t){var a=e[0],r=t[0];return a===r?0:a>r?1:-1})).map((function(e){var a=e[0],r=e[1];return n.a.createElement("div",{key:a},n.a.createElement("h3",null,a),r.map((function(e){return n.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(i.a,{sidebar:a})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},s)))))}}}]);