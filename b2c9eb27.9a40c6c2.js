(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),o=(a(0),a(114)),c={id:"dev-on-windows",title:"Develop on Windows"},r={unversionedId:"dev-on-windows",id:"dev-on-windows",isDocsHomePage:!1,title:"Develop on Windows",description:"This page provides instructions to prepare a Windows computer, and yourself, for data science development.",source:"@site/docs/dev-on-windows.md",slug:"/dev-on-windows",permalink:"/best-practices/docs/dev-on-windows",editUrl:"https://github.com/MaastrichtU-IDS/best-practices/edit/master/website/docs/dev-on-windows.md",version:"current",lastUpdatedBy:"Vincent Emonet",lastUpdatedAt:1609358897,sidebar:"docs",previous:{title:"IDS Dashboard",permalink:"/best-practices/docs/create-doap"},next:{title:"FAIR principles",permalink:"/best-practices/docs/fair-principles"}},l=[{value:"Install Windows Subsystem for Linux",id:"install-windows-subsystem-for-linux",children:[]},{value:"Learn the basic to use the terminal",id:"learn-the-basic-to-use-the-terminal",children:[{value:"First, which terminal?",id:"first-which-terminal",children:[]},{value:"Navigate the terminal",id:"navigate-the-terminal",children:[]}]},{value:"Install packages",id:"install-packages",children:[{value:"On Ubuntu",id:"on-ubuntu",children:[]},{value:"On Windows",id:"on-windows",children:[]}]}],s={toc:l};function b(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page provides instructions to prepare a Windows computer, and yourself, for data science development. "),Object(o.b)("p",null,"We highly recommend to install Windows Subsystem for Linux (aka. Ubuntu Linux in Windows), but you will also find tips to develop on the Windows OS (Operating System)."),Object(o.b)("h2",{id:"install-windows-subsystem-for-linux"},"Install Windows Subsystem for Linux"),Object(o.b)("p",null,"It is recommended to constantly update your Windows OS to the latest available version to make sure you can install cutting edges softwares! Go to the update window and install all available updates (you might need to restart and install other update multiple times, Microsoft could not do better apparently)"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"}),"official instructions to install WSL 2")," on your machine."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Install with the command line")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A simpler solution is available only if you signed up for Windows 10 insider to access development builds of Windows:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"wsl --install --distribution Ubuntu\n")))),Object(o.b)("p",null,"If you installed Windows Subsystem for Linux (WSL), then you have now 2 OS (Operating Systems) available: Windows and Ubuntu Linux."),Object(o.b)("p",null,"Be aware, if you install an application using the Ubuntu terminal, then this application will only be available through the Ubuntu terminal."),Object(o.b)("h2",{id:"learn-the-basic-to-use-the-terminal"},"Learn the basic to use the terminal"),Object(o.b)("p",null,"The terminal is usually seen as a complex matrix. But it is just a natural way to interact with your computer, like for humans, just learn its (simple) language!"),Object(o.b)("h3",{id:"first-which-terminal"},"First, which terminal?"),Object(o.b)("p",null,"The default Windows terminals are not user-friendly! (Default Ubuntu Shell, PowerShell, CMD...)"),Object(o.b)("p",null,"Thankfully Microsoft has been developing a ",Object(o.b)("strong",{parentName:"p"},"new open source and modern terminal now released")," in version ",Object(o.b)("inlineCode",{parentName:"p"},"1.0")," ! "),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/terminal"}),"instructions to install the new Microsoft Terminal")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Install with Winget")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"winget install --id=Microsoft.WindowsTerminal -e\n")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Install with Chocolatey")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"choco install microsoft-windows-terminal\n")))),Object(o.b)("p",null,"But if you still want to use the already installed terminal:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use the PowerShell! Do not use the old Command Invite!")),Object(o.b)("p",null,"Here is a quote from a senior project manager working on developing terminals at Microsoft to convince you that you should not use the CMD (aka. Command Invite):"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Do not use CMD please",src:a(184).default})),Object(o.b)("h3",{id:"navigate-the-terminal"},"Navigate the terminal"),Object(o.b)("p",null,"Using the terminal is not as complicated as muggles think, all you need to do is to go to the right directory (aka. folder) and tell your computer what he should do (aka. run a command)."),Object(o.b)("p",null,"List files and directories in the current directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"ls\n")),Object(o.b)("p",null,"Change directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"cd my-subdirectory\n\n# Go back one directory:\ncd ../my-parent-directory\n")),Object(o.b)("p",null,"Get the current directory you are in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"pwd\n")),Object(o.b)("p",null,"To open and edit a file in the terminal the easiest is to use ",Object(o.b)("inlineCode",{parentName:"p"},"nano"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"nano my_file.txt\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"For purists")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"vim")," and ",Object(o.b)("inlineCode",{parentName:"p"},"emacs")," are also available."))),Object(o.b)("h2",{id:"install-packages"},"Install packages"),Object(o.b)("h3",{id:"on-ubuntu"},"On Ubuntu"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"apt")," package manager to install packages on WSL."),Object(o.b)("p",null,'When you want to install a package just google "install MY_APPLICATION ubuntu", you should be proposed a few easy way to install your application/package in a few commands.'),Object(o.b)("p",null,"We highly recommend you to install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ohmyz.sh/"}),"zsh and oh-my-zsh"),", it will take a minute and upgrade your Ubuntu terminal. Providing a much more user-friendly way to navigate the terminal!"),Object(o.b)("h3",{id:"on-windows"},"On Windows"),Object(o.b)("p",null,"It took several decades for Microsoft to properly understand interaction with computer, but the official Windows package manager is now available!"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Use Winget")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/winget-cli"}),"Install winget"),", the official Windows package manager. Still in beta at the moment. So the list of available packages is limited."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Use Chocolatey")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For package not available in ",Object(o.b)("inlineCode",{parentName:"p"},"winget")," we recommend to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://chocolatey.org/"}),"Chocolatey"),", the most popular tool to install packages on Windows. "))),Object(o.b)("hr",null),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Congratulation")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Congratulation! If you installed those software you have now a cutting edge installation of Windows suited for any kind of development! "))))}b.isMDXComponent=!0},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?i.a.createElement(u,r(r({ref:t},s),{},{components:a})):i.a.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var s=2;s<o;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},184:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/do_not_use_cmd_please-442e5b2e3664c587ccb0e6b2355d22d4.png"}}]);