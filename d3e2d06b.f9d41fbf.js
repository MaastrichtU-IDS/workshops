(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return b}));var a=o(3),i=o(7),r=(o(0),o(136)),n={id:"using-ontologies",title:"Using ontologies"},l={unversionedId:"using-ontologies",id:"using-ontologies",isDocsHomePage:!1,title:"Using ontologies",description:"You will need to define the class and relations for the properties in your data. The easiest way is to find classes and properties in existing model (aka. ontologies). Some properties are standard like rdflabel, but for more specific concepts the best is to find an existing data model matching your model.",source:"@site/docs/build-ontologies.md",slug:"/using-ontologies",permalink:"/best-practices/docs/using-ontologies",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/build-ontologies.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1621935330,sidebar:"docs",previous:{title:"Write documentation",permalink:"/best-practices/docs/documentation"},next:{title:"IDS Projects",permalink:"/best-practices/docs/ids-projects"}},s=[{value:"Reuse existing ontologies \u267b\ufe0f",id:"reuse-existing-ontologies-\ufe0f",children:[{value:"Ontologies repositories",id:"ontologies-repositories",children:[]},{value:"Popular ontologies",id:"popular-ontologies",children:[]},{value:"Define the schema",id:"define-the-schema",children:[]}]},{value:"Ontology design \ud83c\udfa8",id:"ontology-design-",children:[{value:"Prot\xe9g\xe9",id:"prot\xe9g\xe9",children:[]},{value:"VocBench",id:"vocbench",children:[]},{value:"Gra.fo",id:"grafo",children:[]},{value:"Chowlk",id:"chowlk",children:[]},{value:"OwlReady2",id:"owlready2",children:[]},{value:"TopBraid Composer",id:"topbraid-composer",children:[]},{value:"StarDog",id:"stardog",children:[]},{value:"Resolve prefixes",id:"resolve-prefixes",children:[]}]},{value:"Publish the ontology \ud83d\udcf0",id:"publish-the-ontology-",children:[{value:"Publish documentation",id:"publish-documentation",children:[]},{value:"Use persistent identifier",id:"use-persistent-identifier",children:[]},{value:"Add it to an ontology repository",id:"add-it-to-an-ontology-repository",children:[]}]}],c={toc:s};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You will need to define the class and relations for the properties in your data. The easiest way is to find classes and properties in existing model (aka. ontologies). Some properties are standard like ",Object(r.b)("inlineCode",{parentName:"p"},"rdf:type")," and  ",Object(r.b)("inlineCode",{parentName:"p"},"rdfs:label"),", but for more specific concepts the best is to find an existing data model matching your model."),Object(r.b)("h2",{id:"reuse-existing-ontologies-\ufe0f"},"Reuse existing ontologies \u267b\ufe0f"),Object(r.b)("p",null,"A number of ontologies have already been defined for different use-cases and domain. Re-using existing ontologies is faster as you don't need to build the ontology yourself, and it improves the interoperability of your data."),Object(r.b)("h3",{id:"ontologies-repositories"},"Ontologies repositories"),Object(r.b)("p",null,"Search for relevant existing models in ontology repositories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://lov.linkeddata.es/dataset/lov/"},"Linked Open Vocabulary (LOV)")," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://bioportal.bioontology.org/recommender"},"BioPortal")," for biomedical concepts by the NCBI."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ebi.ac.uk/ols/ontologies"},"OntologyLookupService")," by the EBI"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://agroportal.lirmm.fr/recommender"},"AgroPortal")," for agronomy by INRIA."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://ecoportal.lifewatchitaly.eu/"},"EcoPortal")," for ecology by Life Watch Italy.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("a",{parentName:"p",href:"https://bioportal.bioontology.org/recommender"},"BioPortal Recommender")," and ",Object(r.b)("a",{parentName:"p",href:"https://bioportal.bioontology.org/search"},"Search")," services are efficient to look for concepts in most existing biomedical ontologies.")),Object(r.b)("h3",{id:"popular-ontologies"},"Popular ontologies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/MaastrichtU-IDS/semanticscience"},Object(r.b)("strong",{parentName:"a"},"Semanticscience Integrated Ontology")," (SIO)"),", a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/"},Object(r.b)("strong",{parentName:"a"},"BioLink Model")),", A high level datamodel of biological entities (",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/Gene"},"genes"),", ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/Disease"},"diseases"),", ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/Phenotype"},"phenotypes"),", ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/Pathway"},"pathways"),", ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/IndividualOrganism"},"individuals"),", ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/ChemicalSubstance"},"substances"),", etc) and their ",Object(r.b)("a",{parentName:"li",href:"https://biolink.github.io/biolink-model/docs/Association"},"associations"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://schema.org/docs/schemas.html"},Object(r.b)("strong",{parentName:"a"},"Schema.org")),", a collaborative project to define schemes for structured data on the Internet, on web pages, in email messages, and beyond.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Various classes described such as ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/Person"},"schema:Person"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/MedicalGuideline"},"schema:MedicalGuideline"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/Review"},"schema:Review"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/ScholarlyArticle"},"schema:ScholarlyArticle"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/MedicalScholarlyArticle"},"schema:MedicalScholarlyArticle"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/Dataset"},"schema:Dataset"),", ",Object(r.b)("a",{parentName:"li",href:"https://schema.org/docs/full.html"},"etc"),"."),Object(r.b)("li",{parentName:"ul"},"Extensions available, such as ",Object(r.b)("a",{parentName:"li",href:"https://bioschemas.org/profiles/Dataset/0.3-RELEASE-2019_06_14/"},"BioSchemas")," for biological data"),Object(r.b)("li",{parentName:"ul"},"Alternatively you can look into ",Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/search/docs/data-types/article"},"Google Data Types"),", which are mainly built from schema.org and allow to describe and index your website using RDF (JSON-LD)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://dublincore.org/specifications/dublin-core/dcmi-terms"},Object(r.b)("strong",{parentName:"a"},"DublinCore")," (dc, dct, dctypes)"),", one of the most generic vocabulary (includes properties such as ",Object(r.b)("inlineCode",{parentName:"li"},"dc:identifier"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dct:description"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dct:creator"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dct:license"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dct:rights"),"...)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://pav-ontology.github.io/pav/"},Object(r.b)("strong",{parentName:"a"},"PAV"),": Provenance, Authoring and Versioning ontology"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.w3.org/TR/prov-o/"},Object(r.b)("strong",{parentName:"a"},"PROV"),": The Provenance Ontology"),", another ontology to describe provenance with more details."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.w3.org/TR/vocab-dcat-2/"},Object(r.b)("strong",{parentName:"a"},"DCAT"),": Data Catalog Vocabulary"),", to describe datasets."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://bioportal.bioontology.org/ontologies/NCIT"},Object(r.b)("strong",{parentName:"a"},"NCIT"),": National Cancer Institute Thesaurus"),", a vocabulary for clinical care, translational and basic research, and public information and administrative activities.")),Object(r.b)("h3",{id:"define-the-schema"},"Define the schema"),Object(r.b)("p",null,"In the case you are reusing existing ontologies the best is to define the schema your data will follow using ",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/shacl/"},"SHACL shapes"),", or ",Object(r.b)("a",{parentName:"p",href:"https://shex.io/"},"ShEx expressions"),". This will allow you to validate the generated data, and other users will be able to quickly understand your data."),Object(r.b)("p",null,"Here are a few examples of tools and methods to generate SHACL or ShEx shapes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SHACLGEN - Python library to generate SHACL shapes: ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=https://pypi.org/project/shaclgen/&sa=D&source=editors&ust=1621615866020000&usg=AFQjCNGy0AEqxuJh6STr174DdBdAxpxkow"},"https://pypi.org/project/shaclgen/")),Object(r.b)("li",{parentName:"ul"},"RDFShape - A Web app and library to generate SHACL/ShEx: ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=http://rdfshape.weso.es&sa=D&source=editors&ust=1621615866021000&usg=AFQjCNF8SCbK9kCRv7Xkk_VN_8bIUNwibw"},"http://rdfshape.weso.es")),Object(r.b)("li",{parentName:"ul"},"SheXer: A library to perform automatic extraction of SHACL/ShEx schemata in RDF graphs: ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=http://shexer.weso.es&sa=D&source=editors&ust=1621615866021000&usg=AFQjCNHOqDm387itlz5uRXpv651kfG9X3g"},"http://shexer.weso.es")),Object(r.b)("li",{parentName:"ul"},'"Shape Designer for ShEx and SHACL constraints" by Boneva et al presented in ISWC 2019: ',Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=https://gitlab.inria.fr/jdusart/shexjapp&sa=D&source=editors&ust=1621615866022000&usg=AFQjCNEMv2EPD-EOv8Kd7fxtdpjY1zmZRw"},"https://gitlab.inria.fr/jdusart/shexjapp")),Object(r.b)("li",{parentName:"ul"},"Astrea: Automatic generation of SHACL shapes from ontologies: ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=https://astrea.linkeddata.es&sa=D&source=editors&ust=1621615866022000&usg=AFQjCNGH5-JHds9woPhLlCDuCcGDd0pV_g"},"https://astrea.linkeddata.es")),Object(r.b)("li",{parentName:"ul"},"TopBraid Composer: ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=https://www.topquadrant.com/products/topbraid-composer/&sa=D&source=editors&ust=1621615866023000&usg=AFQjCNHQk4ZmakcNAguXYeZ3oB7IN2EFAQ"},"https://www.topquadrant.com/products/topbraid-composer/"),"  & ",Object(r.b)("a",{parentName:"li",href:"https://www.google.com/url?q=https://www.topquadrant.com/from-owl-to-shacl-in-an-automated-way/&sa=D&source=editors&ust=1621615866023000&usg=AFQjCNEUeYu_5tZKMh51DPz13k6qvpNZbw"},"https://www.topquadrant.com/from-owl-to-shacl-in-an-automated-way/")),Object(r.b)("li",{parentName:"ul"},'"RDF shape induction using knowledge base profiling" to generate Shapes by  Mihindukulasooriya et al. presented in  Annual ACM Symposium on Applied  Computing in 2018.'),Object(r.b)("li",{parentName:"ul"},'"Towards improving the quality of knowledge graphs with data-driven ontology  patterns and SHACL" by Spahiu et al. presented as a Workshape Paper in  ISWC in 2018.')),Object(r.b)("h2",{id:"ontology-design-"},"Ontology design \ud83c\udfa8"),Object(r.b)("p",null,"If you don't find an ontology that fits, or if you need to edit an ontology, you can check at the following tools:"),Object(r.b)("h3",{id:"prot\xe9g\xe9"},"Prot\xe9g\xe9"),Object(r.b)("p",null,"You can use the ",Object(r.b)("a",{parentName:"p",href:"https://protege.stanford.edu/"},"Prot\xe9g\xe9 ontology editor")," to build your ontology, using a tree view"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://protegeproject.github.io/protege/installation/"},"Install Prot\xe9g\xe9")," on your computer for better performance than the web hosted service."),Object(r.b)("li",{parentName:"ul"},"Or use ",Object(r.b)("a",{parentName:"li",href:"https://webprotege.stanford.edu/"},"WebProt\xe9g\xe9")," for its collaborative features.")),Object(r.b)("h3",{id:"vocbench"},"VocBench"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://vocbench.uniroma2.it/"},"VocBench")," is a web-based, multilingual, collaborative development platform for managing ",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/owl2-overview/"},"OWL")," ontologies, ",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/skos-reference/"},"SKOS"),"(/",Object(r.b)("a",{parentName:"p",href:"https://www.w3.org/TR/skos-reference/skos-xl.html"},"XL"),") thesauri, and generic RDF datasets."),Object(r.b)("h3",{id:"grafo"},"Gra.fo"),Object(r.b)("p",null,"Gra.fo is a commercial product, but use it for free to build simple RDFS/OWL ontologies with a diagram view and collaboration features."),Object(r.b)("h3",{id:"chowlk"},"Chowlk"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://chowlk.linkeddata.es/"},"Chowlk")," is a web service that automatically generates the OWL code from your Ontology Diagram made with ",Object(r.b)("a",{parentName:"p",href:"https://www.diagrams.net/"},"diagrams.net"),". You will need to follow the instructions to define the diagrams block following a specific format."),Object(r.b)("h3",{id:"owlready2"},"OwlReady2"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://owlready2.readthedocs.io"},"OwlReady2")," is a Python library to work with OWL ontologies. It helps you build OWL ontologies with Python code and Jupyter notebooks."),Object(r.b)("h3",{id:"topbraid-composer"},"TopBraid Composer"),Object(r.b)("p",null,"Now with free edition: ",Object(r.b)("a",{parentName:"p",href:"https://www.topquadrant.com/products/topbraid-composer/"},"https://www.topquadrant.com/products/topbraid-composer/")),Object(r.b)("h3",{id:"stardog"},"StarDog"),Object(r.b)("p",null,"The StarDog triplestore includes an ontology editor, but it requires a license."),Object(r.b)("h3",{id:"resolve-prefixes"},"Resolve prefixes"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://prefix.cc"},"http://prefix.cc")," is a handy service to resolve prefixes."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"E.g. ",Object(r.b)("a",{parentName:"p",href:"http://prefix.cc/bl"},"http://prefix.cc/bl"))),Object(r.b)("h2",{id:"publish-the-ontology-"},"Publish the ontology \ud83d\udcf0"),Object(r.b)("p",null,"The easiest place to publish your ontology is in a GitHub repository."),Object(r.b)("h3",{id:"publish-documentation"},"Publish documentation"),Object(r.b)("p",null,"2 options are available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/dgarijo/Widoco"},"Widoco"),": generate ontology documentation following the W3C style"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://lambdamusic.github.io/Ontospy/"},"Ontospy"),": provide multiple choices for ontology documentation (more user-friendly for larger ontologies)")),Object(r.b)("p",null,"See this example workflow implementing Widoco and Ontospy: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/vemonet/semanticscience/blob/master/.github/workflows/generate-docs.yml"},"https://github.com/vemonet/semanticscience/blob/master/.github/workflows/generate-docs.yml")),Object(r.b)("p",null,"It allows to automatically generate and publish documentation for your ontology using GitHub Actions and GitHub Pages:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ontology is published in a GitHub repository, in our case in ",Object(r.b)("inlineCode",{parentName:"p"},"ontology/sio.owl"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The GitHub Actions workflow is triggered when there is a change in the ontology file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The GitHub Actions workflow runs Ontospy, or Widoco (yours to choose), given the latest committed ontology file (",Object(r.b)("inlineCode",{parentName:"p"},"ontology/sio.owl")," in this example), which generates the HTML documentation in the ",Object(r.b)("inlineCode",{parentName:"p"},"gh-pages")," branch, in a different folder for each documentation type.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"gh-pages")," branch is published as a GitHub Page"))),Object(r.b)("p",null,"In this example we have a simple ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," file to let the user choose the documentation types he wants to access"),Object(r.b)("p",null,"Feel free to adapt this GitHub Actions workflow"),Object(r.b)("h3",{id:"use-persistent-identifier"},"Use persistent identifier"),Object(r.b)("p",null,"We recommend to use the ",Object(r.b)("a",{parentName:"p",href:"http://w3id.org/"},"w3id.org")," system, as it allows any GitHub user to define and reserve your persistent namespace for free in a few minutes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Fork the")," ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"http://w3id.org/"},"w3id.org"))," ",Object(r.b)("strong",{parentName:"li"},"repository"),": ",Object(r.b)("a",{parentName:"li",href:"https://github.com/perma-id/w3id.org"},"https://github.com/perma-id/w3id.org")," "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Create a folder")," with your namespace name (e.g. my-onto)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Add a ",Object(r.b)("inlineCode",{parentName:"strong"},".htaccess")," file")," with the redirection to your ontology (and a ",Object(r.b)("inlineCode",{parentName:"li"},"README.md")," file shortly explaining the purpose of this namespace)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Send a pull request")," to the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/perma-id/w3id.org"},"https://github.com/perma-id/w3id.org")," repository. It usually takes between a few hours and a few days to be accepted.")),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/vemonet/w3id.org/blob/master/d2s/.htaccess"},"See this example")," for a ",Object(r.b)("inlineCode",{parentName:"li"},".htaccess")," passing the original w3id URI queries"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/vemonet/w3id.org/blob/master/um/.htaccess"},"Or this example")," to redirect to different websites depending on the path.")),Object(r.b)("p",null,"The persistent identifiers can be easily modified later if necessary, you  will just need to send a new pull request with the changes."),Object(r.b)("h3",{id:"add-it-to-an-ontology-repository"},"Add it to an ontology repository"),Object(r.b)("p",null,"Depends on the ontology domain (see above)."))}b.isMDXComponent=!0},136:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return u}));var a=o(0),i=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,n=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(o),d=a,u=p["".concat(n,".").concat(d)]||p[d]||h[d]||r;return o?i.a.createElement(u,l(l({ref:t},c),{},{components:o})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var c=2;c<r;c++)n[c]=o[c];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);