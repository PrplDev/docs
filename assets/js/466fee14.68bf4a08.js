"use strict";(self.webpackChunkjsm_docs=self.webpackChunkjsm_docs||[]).push([[794],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>u});var o=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,o,r=function(A,e){if(null==A)return{};var t,o,r={},n=Object.keys(A);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=o.createContext({}),f=function(A){var e=o.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},s=function(A){var e=f(A.components);return o.createElement(l.Provider,{value:e},A.children)},d="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(A,e){var t=A.components,r=A.mdxType,n=A.originalType,l=A.parentName,s=a(A,["components","mdxType","originalType","parentName"]),d=f(t),p=r,u=d["".concat(l,".").concat(p)]||d[p]||c[p]||n;return t?o.createElement(u,i(i({ref:e},s),{},{components:t})):o.createElement(u,i({ref:e},s))}));function u(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var n=t.length,i=new Array(n);i[0]=p;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=A,a[d]="string"==typeof A?A:r,i[1]=a;for(var f=2;f<n;f++)i[f]=t[f];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7344:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>f});var o=t(7462),r=(t(7294),t(3905));const n={},i="Installation",a={unversionedId:"whitehill/net2/net2",id:"whitehill/net2/net2",title:"Installation",description:"Download the recent available file for this product via Axon.",source:"@site/docs/whitehill/net2/net2.md",sourceDirName:"whitehill/net2",slug:"/whitehill/net2/",permalink:"/docs/whitehill/net2/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"whSidebar",previous:{title:"Net2",permalink:"/docs/category/net2"},next:{title:"AutoPro",permalink:"/docs/category/autopro"}},l={},f=[{value:"1) Publish your game &amp; enable HTTP Requests",id:"publish-http",level:3},{value:"2) Product Insertion",id:"product-insertion",level:3},{value:"3) Discord webhook monitoring",id:"discord-webhook",level:3},{value:"3.1) Configuring what is logged via the webhook",id:"discord-webhook.1",level:4},{value:"4) Door Configuration",id:"door-config",level:3}],s={toc:f},d="wrapper";function c(A){let{components:e,...n}=A;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Download the recent available file for this product via ",(0,r.kt)("a",{parentName:"p",href:"https://axon.whitehill.club"},"Axon"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You will need a licence to use Net2!")),(0,r.kt)("h3",{id:"publish-http"},"1) Publish your game & enable HTTP Requests"),(0,r.kt)("p",null,'In Roblox Studio please publish your game by doing the following "File > Publish to Roblox (or Publish to Roblox as...)"'),(0,r.kt)("p",null,"With your newly published game open, select the 'Home' tab, then 'Game Settings'. Move to the 'Security' tab in the open window and make sure the slider for 'Allow HTTP Requests' is enabled and then hit 'Save'."),(0,r.kt)("h3",{id:"product-insertion"},"2) Product Insertion"),(0,r.kt)("p",null,"Insert your file by 'dragging' the product file into Roblox Studio with your game fully loaded. This will add Net2+ to your game."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Ungroup the doors from the pack (press "Control + U" ONCE ONLY!)'),(0,r.kt)("li",{parentName:"ol"},"Drag your doors to where you want them.\nPlease make sure your doors are NOT colliding with other parts as this will cause the doors to misbehave or not function at all")),(0,r.kt)("h3",{id:"discord-webhook"},"3) Discord webhook monitoring"),(0,r.kt)("p",null,"This part requires a ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com"},"Discord")," account (13+) - although you do not need to configure Webhooks for the door to work."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the door in the Roblox Studio explorer"),(0,r.kt)("li",{parentName:"ol"},'Scroll down to "PaxtonSettings"'),(0,r.kt)("li",{parentName:"ol"},'Expand "PaxtonSettings"'),(0,r.kt)("li",{parentName:"ol"},'Double-click "WebhookURL"'),(0,r.kt)("li",{parentName:"ol"},"Paste a discord Webhook URL ",(0,r.kt)("a",{parentName:"li",href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"},"Your guide to Discord Webhooks")),(0,r.kt)("li",{parentName:"ol"},"Save the script")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"examplewebhookconfig",src:t(8605).Z,width:"1856",height:"430"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"exampleimageconfig",src:t(806).Z,width:"1296",height:"63"})),(0,r.kt)("h4",{id:"discord-webhook.1"},"3.1) Configuring what is logged via the webhook"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open the "PaxtonSettings" script'),(0,r.kt)("li",{parentName:"ol"},'Locate the "Webhook Settings"'),(0,r.kt)("li",{parentName:"ol"},'Change whatever values from there that you would like to log from "false" to "true"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"exampleloggingconfig",src:t(6307).Z,width:"1277",height:"101"})),(0,r.kt)("h3",{id:"door-config"},"4) Door Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"settingsfile",src:t(2623).Z,width:"949",height:"180"}),'\nThis is the "settings" script'),(0,r.kt)("p",null,"The settings script is pretty self explanatory but here is a table of what everything does\n",(0,r.kt)("img",{alt:"table",src:t(4201).Z,width:"1072",height:"150"})),(0,r.kt)("p",null,'Secondly is the "PaxtonSettings" script'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"settingsfile",src:t(1264).Z,width:"1881",height:"816"}),'\nThis is the "PaxtonSettings" script'),(0,r.kt)("p",null,"A lot of this script is out of the scope of this tutorial, we will only cover the basics of this file here."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"OpenTime" how long (in seconds) the door stays open for'),(0,r.kt)("li",{parentName:"ol"},'"CabinetMaximumAngle" is the maximum angle that the Net2 cabinet door will open'),(0,r.kt)("li",{parentName:"ol"},'"AuthorisedPeople" list of userid\'s that can open the door while whitelist is enabled. "AuthorisedGroups" is the same but with groupid\'s and ranks'),(0,r.kt)("li",{parentName:"ol"},'"CabinetAuthorisedPeople", "CabinetAuthorisedGroups", "DoorReleaseAuthorisedPeople", "DoorReleaseAuthorisedGroups", "DoorBellAuthorisedPeople" and "DoorBellAuthorisedGroups" are all the same as above but for the cabinet, the door release and the doorbell instead.')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If require more in-depth assistance, please make a ticket in our ",(0,r.kt)("a",{parentName:"p",href:"https://whitehill.club/discord"},"Discord server")," (13+)")))}c.isMDXComponent=!0},806:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,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"},6307:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/net2log-758817b9a40b00fe247f3ab1e015bb25.png"},2623:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/net2settings-c4e93255cef794a46139459d484f6168.png"},8605:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/net2webhook-2155bc51dd5f52b9ccdeaefe48ebea2d.png"},1264:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/paxtonsettings-dcbf72cc9fd3383d3c7fb2b57167b437.png"},4201:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/table-dd1b0af53c4d8998cebcbac871606ab7.png"}}]);