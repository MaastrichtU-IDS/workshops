(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(128)),o={id:"git-tutorial",title:"Git tutorial"},c={unversionedId:"git-tutorial",id:"git-tutorial",isDocsHomePage:!1,title:"Git tutorial",description:"Why use git?",source:"@site/docs/git-tutorial.md",slug:"/git-tutorial",permalink:"/best-practices/docs/git-tutorial",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/git-tutorial.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1611316018,sidebar:"docs",previous:{title:"Code management",permalink:"/best-practices/docs/code-management"},next:{title:"Software management",permalink:"/best-practices/docs/software-management"}},l=[{value:"Why use git?",id:"why-use-git",children:[]},{value:"Choose your weapon",id:"choose-your-weapon",children:[{value:"The terminal",id:"the-terminal",children:[]},{value:"IDE built-in support",id:"ide-built-in-support",children:[]},{value:"Desktop UI applications",id:"desktop-ui-applications",children:[]}]},{value:"Get familiar with the basic concepts",id:"get-familiar-with-the-basic-concepts",children:[{value:"Clone",id:"clone",children:[]},{value:"Status and diff",id:"status-and-diff",children:[]},{value:"Add changed files",id:"add-changed-files",children:[]},{value:"Commit changes",id:"commit-changes",children:[]},{value:"Push changes",id:"push-changes",children:[]},{value:"Pull changes",id:"pull-changes",children:[]},{value:"Branching (checkout and merge)",id:"branching-checkout-and-merge",children:[]},{value:"Pull request",id:"pull-request",children:[]}]},{value:"More advanced concepts",id:"more-advanced-concepts",children:[{value:"Initialize a repository",id:"initialize-a-repository",children:[]},{value:"Configure user",id:"configure-user",children:[]},{value:"Add remote repositories",id:"add-remote-repositories",children:[]},{value:"Use submodules",id:"use-submodules",children:[]},{value:"Revert and reset",id:"revert-and-reset",children:[]},{value:"Search in commits",id:"search-in-commits",children:[]},{value:"Check the <code>.git</code> folder",id:"check-the-git-folder",children:[]}]},{value:"External resources",id:"external-resources",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"why-use-git"},"Why use git?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The best solution to version your code. Most code development today are versioned with git"),Object(r.b)("li",{parentName:"ul"},"Open source, standard, multi-platform, incredibly efficient and modular. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"git")," is supported by all code hosting platforms, and development environments (IDE)"),Object(r.b)("li",{parentName:"ul"},"A lot of systems directly uses ",Object(r.b)("inlineCode",{parentName:"li"},"git")," in their implementation (e.g. installing python or javascript packages can be done directly from ",Object(r.b)("inlineCode",{parentName:"li"},"git")," repositories)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"git")," allows you to easily document, host and share your code. From the smallest programs with 2 files, to the largest software stacks!"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"git")," helps you adopt an efficient process to develop code by improving it incrementally. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It helps you reviewing your code before committing it, to make sure you only save what you want. "),Object(r.b)("li",{parentName:"ul"},"It allows you to check the history and changes you made to your code, allowing you to find where issues have been introduced"))),Object(r.b)("li",{parentName:"ul"},"Bonus: allows you to run your code in GitHub Actions workflow for free (for data processing, testing, app deployment, etc)")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Write code = use git")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Whenever you start working on code (scripts, mappings, Jupyter notebooks) ",Object(r.b)("strong",{parentName:"p"},"use ",Object(r.b)("inlineCode",{parentName:"strong"},"git")),". It's that simple! Especially if you want to show this code to other people."))),Object(r.b)("h2",{id:"choose-your-weapon"},"Choose your weapon"),Object(r.b)("p",null,"Which tools do you want to use to manage your ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repositories? "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Why not both?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A lot of people use multiple tools depending on the moment and the task they want to perform!"))),Object(r.b)("h3",{id:"the-terminal"},"The terminal"),Object(r.b)("p",null,"55% of ",Object(r.b)("inlineCode",{parentName:"p"},"git")," users at IDS use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),Object(r.b)("inlineCode",{parentName:"a"},"git")," command")," in the terminal."),Object(r.b)("p",null,"\u2714\ufe0f Available anywhere (even when accessing a remote server without user interface)"),Object(r.b)("p",null,"\u2714\ufe0f Quick and efficient, especially when you already need to use the terminal to run your programs"),Object(r.b)("p",null,"\u2714\ufe0f Can be easily customized to have a more personal process to commit and push"),Object(r.b)("p",null,"\u274c More work to learn, and to get nice branches visualizations"),Object(r.b)("h3",{id:"ide-built-in-support"},"IDE built-in support"),Object(r.b)("p",null,"25% of ",Object(r.b)("inlineCode",{parentName:"p"},"git")," users at IDS use their favorite IDE ",Object(r.b)("inlineCode",{parentName:"p"},"git")," built-in support (e.g. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VisualStudio Code")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/idea/"}),"IntelliJ"),")."),Object(r.b)("p",null,"\u2714\ufe0f To manage ",Object(r.b)("inlineCode",{parentName:"p"},"git")," with a friendly UI without exiting your IDE"),Object(r.b)("p",null,"\u2714\ufe0f Some IDEs integrate ",Object(r.b)("inlineCode",{parentName:"p"},"git")," really well in their UI, e.g. VS Code allows you to revert only selected lines that changed directly from the test editor."),Object(r.b)("p",null,"\u274c Not always well integrated depending on the IDE, and how you use ",Object(r.b)("inlineCode",{parentName:"p"},"git")," (have you seen the size of the buttons in the VSCode UI?!)"),Object(r.b)("h3",{id:"desktop-ui-applications"},"Desktop UI applications"),Object(r.b)("p",null,"15% of ",Object(r.b)("inlineCode",{parentName:"p"},"git")," users at IDS use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://desktop.github.com/"}),"GitHub Desktop")," UI application."),Object(r.b)("p",null,"Other applications that focuses on managing ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repositories are also available (such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gitkraken.com/"}),"GitKraken")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sourcetreeapp.com/"}),"SourceTree"),")"),Object(r.b)("p",null,"\u2714\ufe0f If you want to avoid the terminal, and have a nice UI well integrated with GitHub, and really focusing on the ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repository management"),Object(r.b)("p",null,"\u2714\ufe0f Quite helpful when needing to visualize repositories with complex branching"),Object(r.b)("p",null,"\u274c Add one more app just for ",Object(r.b)("inlineCode",{parentName:"p"},"git")," management"),Object(r.b)("p",null,"\u274c They don't support all operating systems for most of them"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"get-familiar-with-the-basic-concepts"},"Get familiar with the basic concepts"),Object(r.b)("h3",{id:"clone"},"Clone"),Object(r.b)("p",null,'Download a remote repository from GitHub to your computer (here mentioned as "your local repository").'),Object(r.b)("p",null,"Using SSH (requires to have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"}),"set SSH keys to login"),", but is safer and really easier on the long term)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("p",null,"Or HTTPS"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("p",null,"You can also clone submodules if present:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("h3",{id:"status-and-diff"},"Status and diff"),Object(r.b)("p",null,"Check the global status of your local repository: display modified files, committed files, commits that needs to be pushed"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git status\n")),Object(r.b)("p",null,"Check all the current changes you made that are not committed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git diff\n")),Object(r.b)("h3",{id:"add-changed-files"},"Add changed files"),Object(r.b)("p",null,"In your local repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git add .\ngit add folder/\n")),Object(r.b)("h3",{id:"commit-changes"},"Commit changes"),Object(r.b)("p",null,"In your local repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git commit -m "I did those changes"\n')),Object(r.b)("h3",{id:"push-changes"},"Push changes"),Object(r.b)("p",null,"From your local repository to the remote repository on GitHub."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push\n")),Object(r.b)("h3",{id:"pull-changes"},"Pull changes"),Object(r.b)("p",null,"From the remote repository on GitHub to your local repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git pull\n")),Object(r.b)("h3",{id:"branching-checkout-and-merge"},"Branching (checkout and merge)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"The default main branch")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that the previous the default main branch of a repository was by standard ",Object(r.b)("inlineCode",{parentName:"p"},"master"),". It now has changed to be ",Object(r.b)("inlineCode",{parentName:"p"},"main")," (which is shorter, and less derogatory)"))),Object(r.b)("p",null,"Create a new branch"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout -b develop\n")),Object(r.b)("p",null,"Merge with other branch"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git merge main\n")),Object(r.b)("p",null,"Change to existing branch"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout main\n")),Object(r.b)("h3",{id:"pull-request"},"Pull request"),Object(r.b)("p",null,"Do it on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MaastrichtU-IDS/best-practices/compare"}),"https://github.com/MaastrichtU-IDS/best-practices/compare")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"more-advanced-concepts"},"More advanced concepts"),Object(r.b)("h3",{id:"initialize-a-repository"},"Initialize a repository"),Object(r.b)("p",null,"You can also initialize an existing local folder to be a ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repository:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git init\n")),Object(r.b)("p",null,"Then you will probably want to add a remote repository on GitHub to push your changes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("p",null,"Push and save to the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch in the ",Object(r.b)("inlineCode",{parentName:"p"},"origin")," repository:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push -u origin main\n")),Object(r.b)("h3",{id:"configure-user"},"Configure user"),Object(r.b)("p",null,"Configure the ",Object(r.b)("inlineCode",{parentName:"p"},"git")," user globally (just need to be done once when first using ",Object(r.b)("inlineCode",{parentName:"p"},"git")," on a machine)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.name "Firstname Lastname"\ngit config --global user.email "Firstname.Lastname@gmail.com"\n')),Object(r.b)("h3",{id:"add-remote-repositories"},"Add remote repositories"),Object(r.b)("p",null,"The default remote repository is named ",Object(r.b)("inlineCode",{parentName:"p"},"origin")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("p",null,"You can add more remote repositories (usually other forks of the repository) with the name you want"),Object(r.b)("p",null,"You can then pull in your current branch from any remote repository (here from the ",Object(r.b)("inlineCode",{parentName:"p"},"main")," branch in the ",Object(r.b)("inlineCode",{parentName:"p"},"origin")," remote repository):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git pull origin main\n")),Object(r.b)("h3",{id:"use-submodules"},"Use submodules"),Object(r.b)("p",null,"Add a submodule:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git submodule add https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("p",null,"Also add recursively all the submodules of the repository added as submodule:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git submodule add --recursive https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(r.b)("h3",{id:"revert-and-reset"},"Revert and reset"),Object(r.b)("p",null,"Soft reset, without losing it (unlike reset). Creates a new commit that cancel the last commit."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git revert HEAD\n")),Object(r.b)("p",null,"This will go back to last commit by reseting all files to their state at this commit in your local repository."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git reset --hard HEAD\n")),Object(r.b)("p",null,"Remove all commits pushed to GitHub that are more recents than the provided commit in the ",Object(r.b)("inlineCode",{parentName:"p"},"origin")," remote repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git push origin +$COMMIT^:$BRANCH\n")),Object(r.b)("h3",{id:"search-in-commits"},"Search in commits"),Object(r.b)("p",null,"Current branch"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git log --grep=searchme\n")),Object(r.b)("p",null,"All branches"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git log --all --grep=searchme\n")),Object(r.b)("h3",{id:"check-the-git-folder"},"Check the ",Object(r.b)("inlineCode",{parentName:"h3"},".git")," folder"),Object(r.b)("p",null,"Checkout ",Object(r.b)("inlineCode",{parentName:"p"},".git/config")," file to find where your ",Object(r.b)("inlineCode",{parentName:"p"},"git")," repository configuration is stored"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"external-resources"},"External resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"GitHub tutorial: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://try.github.io"}),"https://try.github.io"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Another tutorial: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://rogerdudler.github.io/git-guide"}),"https://rogerdudler.github.io/git-guide"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A problem? Visit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ohshitgit.com/"}),"OhShitGit!")))))}s.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?i.a.createElement(m,c(c({ref:t},b),{},{components:a})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);