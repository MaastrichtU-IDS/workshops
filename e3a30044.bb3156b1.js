(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(134)),r={id:"code-management",title:"Code management"},c={unversionedId:"code-management",id:"code-management",isDocsHomePage:!1,title:"Code management",description:"Git",source:"@site/docs/code-management.md",slug:"/code-management",permalink:"/best-practices/docs/code-management",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/main/website/docs/code-management.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1616083125,sidebar:"docs",previous:{title:"Development environment",permalink:"/best-practices/docs/development-environment"},next:{title:"Publishing Code",permalink:"/best-practices/docs/publishing-code"}},l=[{value:"Git",id:"git",children:[{value:"Why use git?",id:"why-use-git",children:[]}]},{value:"IDS Git usage",id:"ids-git-usage",children:[{value:"The terminal",id:"the-terminal",children:[]},{value:"IDE built-in support",id:"ide-built-in-support",children:[]},{value:"Desktop UI applications",id:"desktop-ui-applications",children:[]}]},{value:"Basic Git concepts",id:"basic-git-concepts",children:[{value:"Clone",id:"clone",children:[]},{value:"Status and diff",id:"status-and-diff",children:[]},{value:"Add changed files",id:"add-changed-files",children:[]},{value:"Commit changes",id:"commit-changes",children:[]},{value:"Push changes",id:"push-changes",children:[]},{value:"Pull changes",id:"pull-changes",children:[]},{value:"Use branches",id:"use-branches",children:[]},{value:"Pull request",id:"pull-request",children:[]}]},{value:"Advanced concepts",id:"advanced-concepts",children:[{value:"Initialize a repository",id:"initialize-a-repository",children:[]},{value:"Configure user",id:"configure-user",children:[]},{value:"Add remote repositories",id:"add-remote-repositories",children:[]},{value:"Use submodules",id:"use-submodules",children:[]},{value:"Revert and reset",id:"revert-and-reset",children:[]},{value:"Search in commits",id:"search-in-commits",children:[]},{value:"Check the <code>.git</code> folder",id:"check-the-git-folder",children:[]}]},{value:"Git best practices",id:"git-best-practices",children:[{value:"Do not commit all your files",id:"do-not-commit-all-your-files",children:[]},{value:"Commit frequently",id:"commit-frequently",children:[]},{value:"Atomic commits",id:"atomic-commits",children:[]},{value:"Write descriptive commit messages",id:"write-descriptive-commit-messages",children:[]},{value:"Git branching strategies",id:"git-branching-strategies",children:[]}]},{value:"\ud83d\udd17 External resources",id:"-external-resources",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"git"},"Git"),Object(o.b)("p",null,"The most important step to managing your code is to save it in a manner that will allow a version history as well as collaboration with others. The current standard for this is to use ",Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". It pays off quickly to get familiar with the workings of Git and make sure all your code related work is stored in a Git repository. There are multiple different possible locations to store your Git 'repository', by default we recommend using ",Object(o.b)("a",{parentName:"p",href:"https://github.com"},"GitHub"),". Create an account for ",Object(o.b)("a",{parentName:"p",href:"https://github.com"},"GitHub")," if you don't have one. It is particularly useful as it can also be used to login to various websites (like your Google account)"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Join the IDS GitHub organization")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Contact Vincent on IDS Slack (or someone else) to add your GitHub user to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS"},"MaastrichtU-IDS organization")," on GitHub. You will then be able to create and edit repositories in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS"},"organization"),"."))),Object(o.b)("h3",{id:"why-use-git"},"Why use git?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The best solution to ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Version_control"},"version")," your code. Most (if not all) projects including code development today are using ",Object(o.b)("inlineCode",{parentName:"li"},"git"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git")," allows you to easily document, host and share your code. From the smallest programs with 2 files, to the largest software stacks!"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git")," helps you adopt an efficient process to develop code by improving it incrementally. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It helps you by reviewing your code before committing it, to making sure you only save what you want. "),Object(o.b)("li",{parentName:"ul"},"It allows you to check the history and changes you made to your code, allowing you to find where issues have been introduced and go back to any earlier version of the code. "),Object(o.b)("li",{parentName:"ul"},"Code is stored both locally and on remote servers. You never have to worry about losing any of your work in a disaster scenario."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git")," offers a plethora of features to work together and in parallel on the same codebase. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Changes from others contributing to your code can be reviewed and merged into your codebase. "),Object(o.b)("li",{parentName:"ul"},"Instead of copy pasting existing code, a ",Object(o.b)("em",{parentName:"li"},"fork")," can be created to build on the code of other projects. This allows you to continually update your code with changes done to the original project."))))),Object(o.b)("li",{parentName:"ul"},"Open source, standard, multi-platform, incredibly efficient and modular. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git")," is supported by all code hosting platforms, and development environments (IDE)"),Object(o.b)("li",{parentName:"ul"},"A lot of systems directly use ",Object(o.b)("inlineCode",{parentName:"li"},"git")," in their implementation (e.g. installing python or javascript packages can be done directly from ",Object(o.b)("inlineCode",{parentName:"li"},"git")," repositories)"))),Object(o.b)("li",{parentName:"ul"},"Alows you to publish static websites on ",Object(o.b)("a",{parentName:"li",href:"https://pages.github.com"},"GitHub Pages"),", and run your code in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Actions")," workflow for free (for data processing, testing, app deployment, etc)")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Write code = use git")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Whenever you start working on code (scripts, mappings, Jupyter notebooks) ",Object(o.b)("strong",{parentName:"p"},"use ",Object(o.b)("inlineCode",{parentName:"strong"},"git")),". It's that simple! Especially if you want to show this code to other people."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"GitLab for specific private projects")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Some projects in collaboration with other entities can be hosted on GitLab depending on the requirements and project stack. You can use the ",Object(o.b)("a",{parentName:"p",href:"https://gitlab.maastrichtuniversity.nl/"},"UM-hosted GitLab")," for private projects."))),Object(o.b)("h2",{id:"ids-git-usage"},"IDS Git usage"),Object(o.b)("p",null,"Depending on your usecase and preference, there are numerous tools to help you use ",Object(o.b)("inlineCode",{parentName:"p"},"git"),". Below are some of the ways other colleagues utilize different environments for ",Object(o.b)("inlineCode",{parentName:"p"},"git"),"."),Object(o.b)("h3",{id:"the-terminal"},"The terminal"),Object(o.b)("p",null,"55% of ",Object(o.b)("inlineCode",{parentName:"p"},"git")," users at IDS use the ",Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},Object(o.b)("inlineCode",{parentName:"a"},"git")," command")," in the terminal."),Object(o.b)("p",null,"\u2714\ufe0f Available anywhere (even when accessing a remote server without user interface)"),Object(o.b)("p",null,"\u2714\ufe0f Quick and efficient, especially when you already use the terminal to run your programs and scripts"),Object(o.b)("p",null,"\u2714\ufe0f Can be easily customized to have a more personal process to commit and push"),Object(o.b)("p",null,"\u274c More difficult to learn, poor branching visualization"),Object(o.b)("h3",{id:"ide-built-in-support"},"IDE built-in support"),Object(o.b)("p",null,"25% of ",Object(o.b)("inlineCode",{parentName:"p"},"git")," users at IDS use their favorite IDE ",Object(o.b)("inlineCode",{parentName:"p"},"git")," built-in support (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VisualStudio Code")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ"),")."),Object(o.b)("p",null,"\u2714\ufe0f Manage ",Object(o.b)("inlineCode",{parentName:"p"},"git")," with a friendly UI without exiting your IDE"),Object(o.b)("p",null,"\u2714\ufe0f Some IDEs integrate ",Object(o.b)("inlineCode",{parentName:"p"},"git")," really well in their UI, e.g. VS Code allows you to revert only selected lines that changed directly from the test editor."),Object(o.b)("p",null,"\u274c Not always well integrated depending on the IDE, and how you use ",Object(o.b)("inlineCode",{parentName:"p"},"git")),Object(o.b)("h3",{id:"desktop-ui-applications"},"Desktop UI applications"),Object(o.b)("p",null,"20% of ",Object(o.b)("inlineCode",{parentName:"p"},"git")," users at IDS use the ",Object(o.b)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop")," UI application."),Object(o.b)("p",null,"Other applications that focuses on managing ",Object(o.b)("inlineCode",{parentName:"p"},"git")," repositories are also available, such as ",Object(o.b)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.sourcetreeapp.com/"},"SourceTree"),"."),Object(o.b)("p",null,"\u2714\ufe0f More user friendly; avoids using the terminal"),Object(o.b)("p",null,"\u2714\ufe0f Helpful for visualizing repositories with complex branching"),Object(o.b)("p",null,"\u274c Less flexibility (when scripting for example)"),Object(o.b)("p",null,"\u274c The need to install one more app just for ",Object(o.b)("inlineCode",{parentName:"p"},"git")," management"),Object(o.b)("p",null,"\u274c Most tools do not support multiple operating systems"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"basic-git-concepts"},"Basic Git concepts"),Object(o.b)("h3",{id:"clone"},"Clone"),Object(o.b)("p",null,'Download a remote repository from GitHub to your computer (here mentioned as "your local repository").'),Object(o.b)("p",null,"Using SSH (requires to have ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account"},"set SSH keys to login"),", but is safer and easier in the long run)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("p",null,"Or HTTPS"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("p",null,"You can also clone submodules if present:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("h3",{id:"status-and-diff"},"Status and diff"),Object(o.b)("p",null,"Check the global status of your local repository: display modified files, committed files, commits that needs to be pushed"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git status\n")),Object(o.b)("p",null,"Check all the current changes you made that are not committed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git diff\n")),Object(o.b)("h3",{id:"add-changed-files"},"Add changed files"),Object(o.b)("p",null,"In your local repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit add folder/\n")),Object(o.b)("h3",{id:"commit-changes"},"Commit changes"),Object(o.b)("p",null,"In your local repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git commit -m "I did those changes"\n')),Object(o.b)("h3",{id:"push-changes"},"Push changes"),Object(o.b)("p",null,"From your local repository to the remote repository on GitHub."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git push\n")),Object(o.b)("h3",{id:"pull-changes"},"Pull changes"),Object(o.b)("p",null,"From the remote repository on GitHub to your local repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git pull\n")),Object(o.b)("h3",{id:"use-branches"},"Use branches"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The default main branch")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note that the previous the default main branch of a repository was by standard ",Object(o.b)("inlineCode",{parentName:"p"},"master"),". It now has changed to be ",Object(o.b)("inlineCode",{parentName:"p"},"main")," (which is shorter, and less derogatory)"))),Object(o.b)("p",null,"Create a new branch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git checkout -b develop\n")),Object(o.b)("p",null,"Commit your changes to this ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," branch."),Object(o.b)("p",null,"Then merge the ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," branch with the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch, to make sure ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," has no conflict with ",Object(o.b)("inlineCode",{parentName:"p"},"main")," before merging the changes to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git merge main\n")),Object(o.b)("p",null,"Now change back to ",Object(o.b)("inlineCode",{parentName:"p"},"main"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git checkout main\n")),Object(o.b)("p",null,"Finally, merge the changes you committed in the ",Object(o.b)("inlineCode",{parentName:"p"},"develop")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git merge develop\n")),Object(o.b)("h3",{id:"pull-request"},"Pull request"),Object(o.b)("p",null,"Do it on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/MaastrichtU-IDS/best-practices/compare"},"https://github.com/MaastrichtU-IDS/best-practices/compare")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"advanced-concepts"},"Advanced concepts"),Object(o.b)("h3",{id:"initialize-a-repository"},"Initialize a repository"),Object(o.b)("p",null,"You can also initialize an existing local folder to be a ",Object(o.b)("inlineCode",{parentName:"p"},"git")," repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git init\n")),Object(o.b)("p",null,"Then you will probably want to add a remote repository on GitHub to push your changes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("p",null,"Push and save to the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch in the ",Object(o.b)("inlineCode",{parentName:"p"},"origin")," repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git push -u origin main\n")),Object(o.b)("h3",{id:"configure-user"},"Configure user"),Object(o.b)("p",null,"Configure the ",Object(o.b)("inlineCode",{parentName:"p"},"git")," user globally (just need to be done once when first using ",Object(o.b)("inlineCode",{parentName:"p"},"git")," on a machine)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Firstname Lastname"\ngit config --global user.email "Firstname.Lastname@gmail.com"\n')),Object(o.b)("h3",{id:"add-remote-repositories"},"Add remote repositories"),Object(o.b)("p",null,"The default remote repository is named ",Object(o.b)("inlineCode",{parentName:"p"},"origin")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("p",null,"You can add more remote repositories (usually other forks of the repository) with the name you want"),Object(o.b)("p",null,"You can then pull in your current branch from any remote repository (here from the ",Object(o.b)("inlineCode",{parentName:"p"},"main")," branch in the ",Object(o.b)("inlineCode",{parentName:"p"},"origin")," remote repository):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git pull origin main\n")),Object(o.b)("h3",{id:"use-submodules"},"Use submodules"),Object(o.b)("p",null,"Add a submodule:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git submodule add https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("p",null,"Also add recursively all the submodules of the repository added as submodule:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git submodule add --recursive https://github.com/MaastrichtU-IDS/best-practices.git\n")),Object(o.b)("h3",{id:"revert-and-reset"},"Revert and reset"),Object(o.b)("p",null,"Soft reset, without losing it (unlike reset). Creates a new commit that cancel the last commit."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git revert HEAD\n")),Object(o.b)("p",null,"This will go back to last commit by reseting all files to their state at this commit in your local repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git reset --hard HEAD\n")),Object(o.b)("p",null,"Remove all commits pushed to GitHub that are more recents than the provided commit in the ",Object(o.b)("inlineCode",{parentName:"p"},"origin")," remote repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git push origin +$COMMIT^:$BRANCH\n")),Object(o.b)("h3",{id:"search-in-commits"},"Search in commits"),Object(o.b)("p",null,"Current branch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git log --grep=searchme\n")),Object(o.b)("p",null,"All branches"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git log --all --grep=searchme\n")),Object(o.b)("h3",{id:"check-the-git-folder"},"Check the ",Object(o.b)("inlineCode",{parentName:"h3"},".git")," folder"),Object(o.b)("p",null,"Checkout ",Object(o.b)("inlineCode",{parentName:"p"},".git/config")," file to find where your ",Object(o.b)("inlineCode",{parentName:"p"},"git")," repository configuration is stored"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"git-best-practices"},"Git best practices"),Object(o.b)("h3",{id:"do-not-commit-all-your-files"},"Do not commit all your files"),Object(o.b)("p",null,"In general, binary files should not be included in your commit as they can drastically reduce performance and make your repository bulky. The .gitignore file can be used to ignore any such files. Check ",Object(o.b)("a",{parentName:"p",href:"https://www.toptal.com/developers/gitignore"},"here")," for examples. Furthermore, make sure never to include any credentials in your commits that can reside in configuration files. "),Object(o.b)("h3",{id:"commit-frequently"},"Commit frequently"),Object(o.b)("p",null,"As commits are stored locally until pushed, commit as frequently as possible. Undesired commits can always be changed, removed, squashed and so on as long as the commits have not yet been pushed. Once you are confident with your work, ",Object(o.b)("inlineCode",{parentName:"p"},"git push"),". Even if you have made mistakes pushing your code to a remote repository they can always be fixed. Don't panic, and ask the developer team for help."),Object(o.b)("h3",{id:"atomic-commits"},"Atomic commits"),Object(o.b)("p",null,"Once you are familiar with the some of the technical basics of ",Object(o.b)("inlineCode",{parentName:"p"},"git"),", it can be helpful to start utilizing ",Object(o.b)("a",{parentName:"p",href:"https://www.pauline-vos.nl/atomic-commits/"},"atomic commits"),". Among other advantages, this practice of making small changes at a time without breaking the code allows you to go back to any point earlier point in time and run that version of the code without issues."),Object(o.b)("h3",{id:"write-descriptive-commit-messages"},"Write descriptive commit messages"),Object(o.b)("p",null,"When writing the commit message, describe which changes were made and why they are important. By doing this, a later ",Object(o.b)("inlineCode",{parentName:"p"},"git log")," will allow you to read which changes were made where, making decision making involving earlier commits much easier."),Object(o.b)("h3",{id:"git-branching-strategies"},"Git branching strategies"),Object(o.b)("p",null,"When working on a codebase with a larger group, consider branching strategies such as ",Object(o.b)("a",{parentName:"p",href:"https://datasift.github.io/gitflow/IntroducingGitFlow.html"},"git flow"),". As in most IDS cases this will be too involved, consider as a lightweight strategy to no longer commit to the master and create separate branches for each issue."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"-external-resources"},"\ud83d\udd17 External resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"GitHub tutorial: ",Object(o.b)("a",{parentName:"p",href:"https://try.github.io"},"https://try.github.io"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Another tutorial: ",Object(o.b)("a",{parentName:"p",href:"https://rogerdudler.github.io/git-guide"},"https://rogerdudler.github.io/git-guide"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A problem? Visit ",Object(o.b)("a",{parentName:"p",href:"https://ohshitgit.com/"},"OhShitGit!")))))}b.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return a?i.a.createElement(d,c(c({ref:t},s),{},{components:a})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);