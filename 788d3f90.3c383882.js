(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(75)),s={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},c={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"NPM",source:"@site/docs\\getting-started\\installation.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",next:{title:"Examples",permalink:"/docs/getting-started/examples"}},l=[{value:"NPM",id:"npm",children:[]},{value:"CDN",id:"cdn",children:[]},{value:"Preprocessors",id:"preprocessors",children:[{value:"SCSS",id:"scss",children:[]},{value:"Less",id:"less",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"npm"},"NPM"),Object(o.b)("p",null,"You can install css pro layout with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"NPM")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install css-pro-layout\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"yarn add css-pro-layout\n")),Object(o.b)("h2",{id:"cdn"},"CDN"),Object(o.b)("p",null,"If you're not using a module bundler or package manager, you can use the CDN link from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://unpkg.com"}),"unpkg.com")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<link href="https://unpkg.com/css-pro-layout/dist/css/css-pro-layout.min.css" rel="stylesheet" />\n')),Object(o.b)("h2",{id:"preprocessors"},"Preprocessors"),Object(o.b)("p",null,"A set of SCSS and Less files are also available for you to use"),Object(o.b)("h3",{id:"scss"},"SCSS"),Object(o.b)("p",null,"If you are using SCSS in your project than you can import ",Object(o.b)("inlineCode",{parentName:"p"},"css-pro-layout.scss")," into your scss file"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"@import 'css-pro-layout/dist/scss/css-pro-layout.scss';\n")),Object(o.b)("h3",{id:"less"},"Less"),Object(o.b)("p",null,"You can do the same thing with Less files, just import ",Object(o.b)("inlineCode",{parentName:"p"},"css-pro-layout.less")," into your less file and you are good to go"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-less"}),"@import 'css-pro-layout/dist/less/css-pro-layout.less';\n")))}p.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);