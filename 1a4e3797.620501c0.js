(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,8],{105:function(e,t,a){"use strict";a.r(t);var n=a(131),r=a.n(n),c=a(132),l=a(0),o=a.n(l),s=a(22),u=a(119),i=a(25),m=a(112),f=a(117),h=a(10);var d=function(){var e=Object(f.useHistory)(),t=Object(f.useLocation)(),a=Object(s.default)().siteConfig.baseUrl;return{searchValue:h.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return a+"search?q="+encodeURIComponent(e)}}},b=a(143),p=a(158),E=a(133),g=a(159),v=a(145),j=a(146),O=a(72),y=a.n(O);function _(e){var t=e.searchResult,a=t.document,n=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===n,u=2===n,i=(s?a.b:r.b).slice(),f=u?a.s:a.t;return s||i.push(r.t),o.a.createElement("article",{className:y.a.searchResultItem},o.a.createElement("h2",null,o.a.createElement(m.a,{to:a.u+(a.h||""),dangerouslySetInnerHTML:{__html:u?Object(E.a)(f,c):Object(g.a)(f,Object(v.a)(l,"t"),c,100)}})),i.length>0&&o.a.createElement("p",{className:y.a.searchResultItemPath},i.join(" \u203a ")),u&&o.a.createElement("p",{className:y.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(g.a)(a.t,Object(v.a)(l,"t"),c,100)}}))}t.default=function(){var e=Object(s.default)().siteConfig.baseUrl,t=d(),a=t.searchValue,n=t.updateSearchPath,m=Object(l.useState)(a),f=m[0],h=m[1],E=Object(l.useState)(),g=E[0],v=E[1],O=Object(l.useState)(),k=O[0],S=O[1],N=Object(l.useMemo)((function(){return f?'Search results for "'+f+'"':"Search the documentation"}),[f]);Object(l.useEffect)((function(){n(f),g&&(f?g(f,(function(e){S(e)})):S(void 0))}),[f,g]);var w=Object(l.useCallback)((function(e){h(e.target.value)}),[]);return Object(l.useEffect)((function(){a&&a!==f&&h(a)}),[a]),Object(l.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.a)(e);case 2:a=t.sent,n=a.wrappedIndexes,c=a.zhDictionary,v((function(){return Object(p.a)(n,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),o.a.createElement(u.a,{title:N},o.a.createElement(i.a,null,o.a.createElement("meta",{property:"robots",content:"noindex, follow"})),o.a.createElement("div",{className:"container margin-vert--lg"},o.a.createElement("h1",null,N),o.a.createElement("form",null,o.a.createElement("input",{type:"search",name:"q",className:y.a.searchQueryInput,"aria-label":"Search",onChange:w,value:f,autoComplete:"off",autoFocus:!0})),!g&&f&&o.a.createElement("div",null,o.a.createElement(j.a,null)),k&&(k.length>0?o.a.createElement("p",null,k.length," document",1===k.length?"":"s"," found"):o.a.createElement("p",null,"No documents were found")),o.a.createElement("section",null,k&&k.map((function(e){return o.a.createElement(_,{key:e.document.i,searchResult:e})})))))}},118:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return s}));a(114);var n=["en"],r=!1,c=null,l="6c45c3e6",o=8,s=50},120:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(110),s=a(112),u=a(111),i=a(113);a(55);function m(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,u=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(i.a)(t),f=Object(i.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?f:a}:{to:m},u),c)}t.a=function(){var e=Object(u.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,c=t.logo,s=void 0===c?{}:c;return Object(i.a)(s.src),e?l.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},r&&r.length>0&&l.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(m,e))}))):null)}))),(s||a)&&l.a.createElement("div",{className:"text--center"},l.a.createElement("div",null,l.a.createElement("a",{rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"},l.a.createElement("img",{src:"/best-practices/img/cc-by.svg",alt:"cc by license"}))),l.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:a}})))):null}}}]);