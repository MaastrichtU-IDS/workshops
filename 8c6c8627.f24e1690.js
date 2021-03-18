(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(134)),i={title:"Simply build a Knowledge Graph",author:"Vincent Emonet",author_title:"Data Science engineer at IDS",author_url:"https://github.com/vemonet",tags:["knowledge graph","rdf","mapping"],description:"Build a RDF Knowledge Graph from CSV files",hide_table_of_contents:!1},s={permalink:"/best-practices/blog/2021/03/18/build-a-kg",source:"@site/blog/2021-03-18-build-a-kg.md",description:"Build a RDF Knowledge Graph from CSV files",date:"2021-03-18T00:00:00.000Z",tags:[{label:"knowledge graph",permalink:"/best-practices/blog/tags/knowledge-graph"},{label:"rdf",permalink:"/best-practices/blog/tags/rdf"},{label:"mapping",permalink:"/best-practices/blog/tags/mapping"}],title:"Simply build a Knowledge Graph",readingTime:5.97,truncated:!0,nextItem:{title:"A triplestore in your browser?",permalink:"/best-practices/blog/2021/03/12/rdf-in-the-browser"}},l=[{value:"Knowledge Graph 101",id:"knowledge-graph-101",children:[]},{value:"Choose a data model",id:"choose-a-data-model",children:[]},{value:"Convert the data to a RDF knowledge graph",id:"convert-the-data-to-a-rdf-knowledge-graph",children:[]},{value:"Publish the RDF Knowledge Graph",id:"publish-the-rdf-knowledge-graph",children:[]}],c={toc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This short tutorial guides you through building a RDF Knowledge Graph about restaurants and cuisines from ",Object(o.b)("a",{parentName:"p",href:"https://data.world/mgarfield/restaurants/"},"2 CSV sample files generated from a dataset found on Kaggle"),", using mappings expressed in YAML. "),Object(o.b)("p",null,"The instructions and tools are accessible to anyone without the need to understand anything else than reading English, just follow the instructions and copy/paste the text at the right place in a website, and build a knowledge graph!"),Object(o.b)("h2",{id:"knowledge-graph-101"},"Knowledge Graph 101"),Object(o.b)("p",null,"Back in 1999 the W3C laid down the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_Web"},"Semantic Web principles"),", a utopia where all data published on the web would be published in a standard manner, interconnected, and shared. To accomplish this dream, a standard way to describe and link knowledge graphs has been defined: the Resource Description Framework (RDF). "),Object(o.b)("p",null,"Multiple concepts have been defined since then, to provide a structured and coherent framework for knowledge representations (going further than just building graphs and networks). Here is a quick glossary of some of concepts that will be used in this tutorial \ud83d\udcd6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"URI"),": aka. URL, they are used to identify concepts, properties and entities. e.g. https:///w3id.org/mykg/MyConcept"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RDF"),': the standard knowledge graph format to describe nodes and edges as triples (subject, predicate, object). e.g. "MyConcept is a Restaurant"')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-turtle"},"<https:///w3id.org/mykg/MyConcept> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https:///w3id.org/mykg/Restaurant> .  \n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ontologies"),": data models for knowledge graphs, they define classes and properties. e.g. ",Object(o.b)("a",{parentName:"li",href:"https://schema.org/Restaurant"},"https://schema.org/Restaurant")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SPARQL"),": the language to query RDF Knowledge Graphs stored in triplestores (database for RDF) through a SPARQL endpoint"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RML"),": the RDF Mapping Language is a language recently developed at Ghent university, based on the R2RML W3C recommendation, to map any structured data (CSV, JSON, XML, SQL) to RDF. Mappings are expressed in RDF."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"YARRRML"),": a simplification of RML to define RML mappings in the popular YAML format, easier to define than the RML RDF.")),Object(o.b)("p",null,"There are multiple ways to define what a knowledge graph is, most descriptions come down to nodes connected by edges. The Semantic Web/RDF stack provides standards to build interconnected knowledge graphs at the web scale."),Object(o.b)("h2",{id:"choose-a-data-model"},"Choose a data model"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Choosing the concepts and properties")," for your Knowledge Graph from existing and recognized ontologies is the most important part of the process. Using existing ontologies connects your graph to existing data published using the same ontologies. Using your own URIs for properties and entities types makes your RDF Knowledge Graph isolated, and completely missed the point of build a knowledge graph."),Object(o.b)("p",null,"In this case we followed those steps to define our Knowledge Graph classes and properties (see below for more details on the input CSV files we are going to transform):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://schema.org/"},"Schema.org")," is a good vocabulary built by Google which cover a large amount of concepts and properties. It is the standard vocabulary used by Search Engines, such as Google search, to understand metadata. It covers most of the entities and properties we want to create for the columns of our CSV files. "),Object(o.b)("li",{parentName:"ul"},'But the "Cuisine" concept does not exist in Schema.org: the ',Object(o.b)("inlineCode",{parentName:"li"},"schema:cuisine")," points to a text, but we want to create a new entity for cuisines, to better connect them). So we will ",Object(o.b)("a",{parentName:"li",href:"https://www.google.com/search?q=food+ontology+cuisine"},'search "food ontology cuisine" in Google'),", to find a more specific ontology about food. We find the ",Object(o.b)("inlineCode",{parentName:"li"},"fo:Cuisine")," concept from the ",Object(o.b)("a",{parentName:"li",href:"https://www.bbc.co.uk/ontologies/fo#terms_cuisine"},"Food Ontology published by the BBC"),". "),Object(o.b)("li",{parentName:"ul"},"Another interesting ontology would have been ",Object(o.b)("a",{parentName:"li",href:"https://foodon.org/"},"FoodON"),", which is really detailed and well connected to other ontologies, but in our simple use-case the Cuisine concept from the BBC Food Ontology is good enough.")),Object(o.b)("h2",{id:"convert-the-data-to-a-rdf-knowledge-graph"},"Convert the data to a RDF knowledge graph"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Go to ",Object(o.b)("a",{parentName:"strong",href:"https://rml.io/yarrrml/matey"},"https://rml.io/yarrrml/matey \ud83e\udd9c")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Create 2 new datasources")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"dataworld-restaurants.csv")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dataworld-cuisines.csv")," files. Click on the ",Object(o.b)("strong",{parentName:"p"},"Input:")," tab on the left of the Matey web UI to create new datasources."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataworld-restaurants.csv"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Restaurant ID,Restaurant Name,City,country name,Address,Locality,Locality Verbose,Longitude,Latitude,Cuisines,Average Cost for two,Currency,Has Table booking,Has Online delivery,Is delivering now,Switch to order menu,Price range,Aggregate rating,Rating color,Rating text,Votes\n53,Amber,New Delhi,India,"N-19, Connaught Place, New Delhi",Connaught Place,"Connaught Place, New Delhi",77.220891,28.630197,indian,1800,Indian Rupees(Rs.),Yes,Yes,No,No,3,2.6,Orange,Average,152\n55,Berco\'s,New Delhi,India,"G-2/43, Middle Circle, Connaught Place, New Delhi",Connaught Place,"Connaught Place, New Delhi",77.217298,28.632452,Chinese,1100,Indian Rupees(Rs.),Yes,Yes,No,No,3,3.9,Yellow,Good,2639\n60,Colonel\'s Kababz,New Delhi,India,"29, Defence Colony Market, Defence Colony, New Delhi",Defence Colony,"Defence Colony, New Delhi",77.230591,28.574036,indian,900,Indian Rupees(Rs.),Yes,No,No,No,2,3.2,Orange,Average,600\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataworld-cuisines.csv"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cuisines,diets\nChinese,vegetarian|low_lactose_diet\nindian,halal|low_lactose_diet|vegetarian\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Copy/paste those YARRRML mappings in the ",Object(o.b)("strong",{parentName:"li"},"input: YARRRML")," box in the middle of the Matey web UI:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'prefixes:\n  grel: "http://users.ugent.be/~bjdmeest/function/grel.ttl#"\n  rdfs: "http://www.w3.org/2000/01/rdf-schema#"\n  schema: "https://schema.org/"\n  fo: "http://purl.org/ontology/fo/"\n  mykg: "https://w3id.org/mykg/"\n  # We use w3id.org to simulate persistent ID for our entities\nmappings:\n  restaurants:\n    sources:\n      - [\'dataworld-restaurants.csv~csv\']\n    # We define the subject and graph of this mapping\n    s: mykg:restaurant/$(Restaurant ID)\n    g: mykg:graph/restaurants\n    # Then we define the predicate/objects for this subject\n    # aka. the properties/values for this entity\n    po:\n      - [a, schema:Restaurant]\n      - [rdfs:label, $(Restaurant Name)]\n      # We link to cuisine here by creating the same URI (identifier):\n      - [schema:servesCuisine, mykg:cuisine/$(Cuisines)~iri]\n      - [schema:location, $(country name)]\n      - [schema:address, $(Address)]\n      - [schema:priceRange, $(Price range)]\n      - [schema:currenciesAccepted, $(Currency)]\n      - [schema:acceptsReservations, $(Has Table booking)]\n      - [schema:aggregateRating, $(Aggregate rating)]\n  cuisines:\n    sources:\n      - [\'dataworld-cuisines.csv~csv\']\n    s: mykg:cuisine/$(cuisines)\n    g: mykg:graph/cuisines\n    po:\n      - [a, fo:Cuisine]\n      - [rdfs:label, $(cuisines)]\n      # We use a function to split the "diets" cells using |\n      - p: schema:suitableForDiet\n        o:\n          function: grel:string_split\n          parameters:\n          - [grel:p_string_sep, "\\|"]\n          - [grel:valueParameter, $(diets)]\n')),Object(o.b)("p",null,"Note that we use our own ",Object(o.b)("inlineCode",{parentName:"p"},"mykg:")," namespace for the Knowledge Graph entities URIs (the restaurants and cuisines entities generated). But we use already existing ontology terms for the properties and entity classes."),Object(o.b)("p",null,"We used the free ",Object(o.b)("a",{parentName:"p",href:"https://w3id.org/"},"w3id.org")," persistent ID system to define our ",Object(o.b)("inlineCode",{parentName:"p"},"mykg:")," URI. We did not created a new entry in w3id.org since this is an example, but this can be easily done with a simple ",Object(o.b)("a",{parentName:"p",href:"https://github.com/perma-id/w3id.org"},"pull request to their GitHub repository"),"."),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Generate RML"),", then ",Object(o.b)("strong",{parentName:"li"},"Generate LD")," buttons. The conversion should take around 10s.")),Object(o.b)("p",null,"Here is a screenshot of what you should see after converting the data, the RDF Knowledge Graph has been generated in the ",Object(o.b)("strong",{parentName:"p"},"Output: Turtle/TriG")," panel on the right."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screenshot of Matey Web UI",src:a(206).default})),Object(o.b)("h2",{id:"publish-the-rdf-knowledge-graph"},"Publish the RDF Knowledge Graph"),Object(o.b)("p",null,"To be able to query your RDF Knowledge Graph, you will need to host it a triplestore (a database for RDF data). There are a lot of different triplestore solutions out there, most of them expose a SPARQL endpoint which enable anyone to query your RDF Knowledge Graph using the SPARQL query language. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Host your own triplestore: if you have access to a server, and are savvy enough, you can easily deploy a triplestore for free such as ",Object(o.b)("a",{parentName:"p",href:"http://vos.openlinksw.com/owiki/wiki/VOS"},"OpenLink Virtuoso"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/blazegraph/database"},"Blazegraph"),", or ",Object(o.b)("a",{parentName:"p",href:"https://graphdb.ontotext.com/"},"Ontotext GraphDB"),", and load your RDF Knowledge graph in it.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Another solution, for small pieces of RDF data, would be to publish your RDF as ",Object(o.b)("a",{parentName:"p",href:"http://nanopub.org/wordpress/"},"Nanopublications")," which is a decentralized network of triplestores using encrypted keys and ",Object(o.b)("a",{parentName:"p",href:"https://orcid.org/"},"ORCID accounts")," to authenticate publishers. This can be done easily with the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Nanopublication/nanopub-java"},"nanopub-java")," library, or the ",Object(o.b)("a",{parentName:"p",href:"https://pypi.org/project/nanopub/"},"nanopub Python")," package.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can also pay for a cloud service provider to publish and expose RDF Knowledge Graphs, such as ",Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/neptune/"},"Amazon Neptune")," or ",Object(o.b)("a",{parentName:"p",href:"https://dydra.com/login"},"Dydra")))),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Thanks to")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://idlab.technology/"},"IDLab")," team at Ghent University for defining the RML specifications, and deploying the Matey web editor for YARRRML"),Object(o.b)("li",{parentName:"ul"},"The people all other the world who worked, and still work, to define those standards through the ",Object(o.b)("a",{parentName:"li",href:"https://www.w3.org/"},"W3C"),", and their implementations")))}p.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screenshot-matey-web-ui-691a28ba1aa0c21a8d2f417a408669b8.png"}}]);