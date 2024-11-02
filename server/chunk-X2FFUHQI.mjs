import './polyfills.server.mjs';
import{$ as $1,A as h,F as H1,I as j1,J as U1,L as V,M as w2,N as _1,O as q1,P as W1,Q as G1,R as V1,U as Y1,Y as X1,a as Z,b as v1,c as b2,d as A1,e as u,f as P1,g as T1,h as S2,i as F1,j as D1,k as i2,l as N,m as F,n as E1,o as j,p as B1,q as w,r as t,s as r,t as C,u as I1,v as O1,w as R1,x as t2,y as p,z as U}from"./chunk-JAA2WKDV.mjs";import{a as f,b as S}from"./chunk-5XUXGTUW.mjs";var y2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-navigation"]],standalone:!0,features:[h],decls:21,vars:0,consts:[[1,"container"],[1,"navbar","navbar-expand-md","border-bottom","py-3","mb-4"],[1,"container-fluid"],[1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","nav-underline","mb-2","mb-lg-0"],[1,"nav-item"],["href","#about",1,"nav-link","text-black"],["href","#projects",1,"nav-link","text-black"],["href","#publications",1,"nav-link","text-black"],["href","#contact",1,"nav-link","text-black"]],template:function(s,e){s&1&&(t(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),p(4,"Aleandro Presta"),r(),t(5,"button",4),C(6,"span",5),r(),t(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),p(11,"About"),r()(),t(12,"li",8)(13,"a",10),p(14,"Projects"),r()(),t(15,"li",8)(16,"a",11),p(17,"Publications"),r()(),t(18,"li",8)(19,"a",12),p(20,"Contact"),r()()()()()()())}})};var k2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-profile"]],standalone:!0,features:[h],decls:20,vars:0,consts:[[1,"profile-container","d-flex","justify-content-center","mb-5"],[1,"d-flex","flex-lg-row","flex-column","justify-content-center","align-items-center","gap-5"],[1,"d-flex"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic.png","alt","Profile Picture","width","350",1,"rounded-circle","fade-in","fade-in-1"],[1,"align-self-center","text-center","d-flex","flex-column","gap-3"],[1,"container"],[1,"text-secondary","fw-bold","fade-in","fade-in-2"],[1,"fs-1","fw-bold","fade-in","fade-in-3"],[1,"text-light-emphasis","fs-4","fw-bold","fade-in","fade-in-4"],[1,"container","d-flex","justify-content-center","gap-3","fade-in","fade-in-5"],["onclick","window.open('https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/resume-aleandro-presta.pdf')",1,"btn","btn-outline-dark","rounded-pill","px-3","fw-bold"],["onclick","location.href='#contact'",1,"btn","btn-dark","rounded-pill","px-3","py-3","fw-bold"],[1,"container","d-flex","justify-content-center","gap-3","fade-in","fade-in-6"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin Profile","onclick","location.href='https://www.linkedin.com/in/aleandro-presta-6523471b9/'",1,"icon"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/github.png","alt","GitHub Profile","onclick","location.href='https://github.com/AleandroPresta'",1,"icon"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"div",2),C(3,"img",3),r(),t(4,"div",4)(5,"div",5)(6,"p",6),p(7,"Hello, I'm"),r(),t(8,"p",7),p(9,"Aleandro Presta"),r(),t(10,"p",8),p(11,"Software Engineer"),r()(),t(12,"div",9)(13,"button",10),p(14," Download CV "),r(),t(15,"button",11),p(16," Contact Info "),r()(),t(17,"div",12),C(18,"img",13)(19,"img",14),r()()()())},styles:[".profile-container[_ngcontent-%COMP%]{height:80vh}.icon[_ngcontent-%COMP%]{cursor:pointer;height:2rem}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fade-in[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out forwards}.fade-in-1[_ngcontent-%COMP%]{animation-delay:.5s}.fade-in-2[_ngcontent-%COMP%]{animation-delay:1s}.fade-in-3[_ngcontent-%COMP%]{animation-delay:1.5s}.fade-in-4[_ngcontent-%COMP%]{animation-delay:2s}.fade-in-5[_ngcontent-%COMP%]{animation-delay:2.5s}.fade-in-6[_ngcontent-%COMP%]{animation-delay:3s}"]})};var K1=()=>{},C1={},x3={},g3=null,N3={mark:K1,measure:K1};try{typeof window<"u"&&(C1=window),typeof document<"u"&&(x3=document),typeof MutationObserver<"u"&&(g3=MutationObserver),typeof performance<"u"&&(N3=performance)}catch{}var{userAgent:Q1=""}=C1.navigator||{},$=C1,g=x3,J1=g3,v2=N3,N6=!!$.document,W=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",b3=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),b="classic",S3="duotone",A="sharp",P="sharp-duotone",m4=[b,S3,A,P],z4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Z1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},L4=["kit"],p4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,M4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,C4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},d4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},u4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},h4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},x4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},g4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},w3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},N4=["solid","regular","light","thin","duotone","brands"],y3=[1,2,3,4,5,6,7,8,9,10],b4=y3.concat([11,12,13,14,15,16,17,18,19,20]),M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S4=[...Object.keys(h4),...N4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY].concat(y3.map(c=>"".concat(c,"x"))).concat(b4.map(c=>"w-".concat(c))),w4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},y4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},k4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_="___FONT_AWESOME___",l1=16,k3="fa",v3="svg-inline--fa",e2="data-fa-i2svg",s1="data-fa-pseudo-element",v4="data-fa-pseudo-element-pending",d1="data-prefix",u1="data-icon",l3="fontawesome-i2svg",A4="async",P4=["HTML","HEAD","STYLE","SCRIPT"],A3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),P3=[b,A,P];function g2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[b]}})}var T3=f({},w3);T3[b]=f(f(f({},w3[b]),Z1.kit),Z1["kit-duotone"]);var l2=g2(T3),e1=f({},g4);e1[b]=f(f(f({},e1[b]),c3.kit),c3["kit-duotone"]);var h2=g2(e1),a1=f({},x4);a1[b]=f(f({},a1[b]),k4.kit);var s2=g2(a1),n1=f({},u4);n1[b]=f(f({},n1[b]),y4.kit);var T4=g2(n1),F4=p4,F3="fa-layers-text",D4=M4,E4=f({},z4),b6=g2(E4),B4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K2=M2,m2=new Set;Object.keys(h2[b]).map(m2.add.bind(m2));Object.keys(h2[A]).map(m2.add.bind(m2));Object.keys(h2[P]).map(m2.add.bind(m2));var I4=[...L4,...S4],d2=$.FontAwesomeConfig||{};function O4(c){var l=g.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function R4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l,a=R4(O4(s));a!=null&&(d2[e]=a)});var D3={styleDefault:"solid",familyDefault:"classic",cssPrefix:k3,replacementClass:v3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d2.familyPrefix&&(d2.cssPrefix=d2.familyPrefix);var z2=f(f({},D3),d2);z2.autoReplaceSvg||(z2.observeMutations=!1);var L={};Object.keys(D3).forEach(c=>{Object.defineProperty(L,c,{enumerable:!0,set:function(l){z2[c]=l,u2.forEach(s=>s(L))},get:function(){return z2[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(c){z2.cssPrefix=c,u2.forEach(l=>l(L))},get:function(){return z2.cssPrefix}});$.FontAwesomeConfig=L;var u2=[];function H4(c){return u2.push(c),()=>{u2.splice(u2.indexOf(c),1)}}var Y=l1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j4(c){if(!c||!W)return;let l=g.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=g.head.childNodes,e=null;for(let a=s.length-1;a>-1;a--){let n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return g.head.insertBefore(l,e),c}var U4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x2(){let c=12,l="";for(;c-- >0;)l+=U4[Math.random()*62|0];return l}function L2(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function h1(c){return c.classList?L2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function E3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(E3(c[s]),'" '),"").trim()}function D2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function x1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function q4(c){let{transform:l,containerWidth:s,iconWidth:e}=c,a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),m={transform:"".concat(n," ").concat(o," ").concat(i)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:m,path:z}}function W4(c){let{transform:l,width:s=l1,height:e=l1,startCentered:a=!1}=c,n="";return a&&b3?n+="translate(".concat(l.x/Y-s/2,"em, ").concat(l.y/Y-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/Y,"em), calc(-50% + ").concat(l.y/Y,"em)) "):n+="translate(".concat(l.x/Y,"em, ").concat(l.y/Y,"em) "),n+="scale(".concat(l.size/Y*(l.flipX?-1:1),", ").concat(l.size/Y*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var G4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function B3(){let c=k3,l=v3,s=L.cssPrefix,e=L.replacementClass,a=G4;if(s!==c||e!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(e))}return a}var s3=!1;function Q2(){L.autoAddCss&&!s3&&(j4(B3()),s3=!0)}var V4={mixout(){return{dom:{css:B3,insertCss:Q2}}},hooks(){return{beforeDOMElementCreation(){Q2()},beforeI2svg(){Q2()}}}},q=$||{};q[_]||(q[_]={});q[_].styles||(q[_].styles={});q[_].hooks||(q[_].hooks={});q[_].shims||(q[_].shims=[]);var O=q[_],I3=[],O3=function(){g.removeEventListener("DOMContentLoaded",O3),T2=1,I3.map(c=>c())},T2=!1;W&&(T2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),T2||g.addEventListener("DOMContentLoaded",O3));function Y4(c){W&&(T2?setTimeout(c,0):I3.push(c))}function N2(c){let{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?E3(c):"<".concat(l," ").concat(_4(s),">").concat(e.map(N2).join(""),"</").concat(l,">")}function e3(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var X4=function(l,s){return function(e,a,n,o){return l.call(s,e,a,n,o)}},J2=function(l,s,e,a){var n=Object.keys(l),o=n.length,i=a!==void 0?X4(s,a):s,m,z,M;for(e===void 0?(m=1,M=l[n[0]]):(m=0,M=e);m<o;m++)z=n[m],M=i(M,l[z],z,l);return M};function $4(c){let l=[],s=0,e=c.length;for(;s<e;){let a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function o1(c){let l=$4(c);return l.length===1?l[0].toString(16):null}function K4(c,l){let s=c.length,e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function a3(c){return Object.keys(c).reduce((l,s)=>{let e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function i1(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=s,a=a3(l);typeof O.hooks.addPack=="function"&&!e?O.hooks.addPack(c,a3(l)):O.styles[c]=f(f({},O.styles[c]||{}),a),c==="fas"&&i1("fa",l)}var{styles:c2,shims:Q4}=O,J4={[b]:Object.values(s2[b]),[A]:Object.values(s2[A]),[P]:Object.values(s2[P])},g1=null,R3={},H3={},j3={},U3={},_3={},Z4={[b]:Object.keys(l2[b]),[A]:Object.keys(l2[A]),[P]:Object.keys(l2[P])};function c0(c){return~I4.indexOf(c)}function l0(c,l){let s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!c0(a)?a:null}var q3=()=>{let c=e=>J2(c2,(a,n,o)=>(a[o]=J2(n,e,{}),a),{});R3=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{e[i.toString(16)]=n}),e)),H3=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{e[i]=n}),e)),_3=c((e,a,n)=>{let o=a[2];return e[n]=n,o.forEach(i=>{e[i]=n}),e});let l="far"in c2||L.autoFetchSvg,s=J2(Q4,(e,a)=>{let n=a[0],o=a[1],i=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:i}),e},{names:{},unicodes:{}});j3=s.names,U3=s.unicodes,g1=E2(L.styleDefault,{family:L.familyDefault})};H4(c=>{g1=E2(c.styleDefault,{family:L.familyDefault})});q3();function N1(c,l){return(R3[c]||{})[l]}function s0(c,l){return(H3[c]||{})[l]}function X(c,l){return(_3[c]||{})[l]}function W3(c){return j3[c]||{prefix:null,iconName:null}}function e0(c){let l=U3[c],s=N1("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function K(){return g1}var b1=()=>({prefix:null,iconName:null,rest:[]});function E2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=b}=l,e=l2[s][c],a=h2[s][c]||h2[s][e],n=c in O.styles?c:null;return a||n||null}var a0={[b]:Object.keys(s2[b]),[A]:Object.keys(s2[A]),[P]:Object.keys(s2[P])};function B2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,e={[b]:"".concat(L.cssPrefix,"-").concat(b),[A]:"".concat(L.cssPrefix,"-").concat(A),[P]:"".concat(L.cssPrefix,"-").concat(P)},a=null,n=b,o=m4.filter(m=>m!==S3);o.forEach(m=>{(c.includes(e[m])||c.some(z=>a0[m].includes(z)))&&(n=m)});let i=c.reduce((m,z)=>{let M=l0(L.cssPrefix,z);if(c2[z]?(z=J4[n].includes(z)?T4[n][z]:z,a=z,m.prefix=z):Z4[n].indexOf(z)>-1?(a=z,m.prefix=E2(z,{family:n})):M?m.iconName=M:z!==L.replacementClass&&!o.some(x=>z===e[x])&&m.rest.push(z),!s&&m.prefix&&m.iconName){let x=a==="fa"?W3(m.iconName):{},d=X(m.prefix,m.iconName);x.prefix&&(a=null),m.iconName=x.iconName||d||m.iconName,m.prefix=x.prefix||m.prefix,m.prefix==="far"&&!c2.far&&c2.fas&&!L.autoFetchSvg&&(m.prefix="fas")}return m},b1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===A&&(c2.fass||L.autoFetchSvg)&&(i.prefix="fass",i.iconName=X(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===P&&(c2.fasds||L.autoFetchSvg)&&(i.prefix="fasds",i.iconName=X(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||a==="fa")&&(i.prefix=K()||"fas"),i}var t1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];let a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=f(f({},this.definitions[n]||{}),a[n]),i1(n,a[n]);let o=s2[b][n];o&&i1(o,a[n]),q3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{let{prefix:n,iconName:o,icon:i}=e[a],m=i[2];l[n]||(l[n]={}),m.length>0&&m.forEach(z=>{typeof z=="string"&&(l[n][z]=i)}),l[n][o]=i}),l}},n3=[],r2={},f2={},n0=Object.keys(f2);function o0(c,l){let{mixoutsTo:s}=l;return n3=c,r2={},Object.keys(f2).forEach(e=>{n0.indexOf(e)===-1&&delete f2[e]}),n3.forEach(e=>{let a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(o=>{r2[o]||(r2[o]=[]),r2[o].push(n[o])})}e.provides&&e.provides(f2)}),s}function r1(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(r2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function a2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(r2[c]||[]).forEach(n=>{n.apply(null,s)})}function Q(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return f2[c]?f2[c].apply(null,l):void 0}function f1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||K();if(l)return l=X(s,l)||l,e3(G3.definitions,s,l)||e3(O.styles,s,l)}var G3=new t1,i0=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,a2("noAuto")},t0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(a2("beforeI2svg",c),Q("pseudoElements2svg",c),Q("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Y4(()=>{f0({autoReplaceSvgRoot:l}),a2("watch",c)})}},r0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=E2(c[0]);return{prefix:s,iconName:X(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(L.cssPrefix,"-"))>-1||c.match(F4))){let l=B2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||K(),iconName:X(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=K();return{prefix:l,iconName:X(l,c)||c}}}},T={noAuto:i0,config:L,dom:t0,parse:r0,library:G3,findIconDefinition:f1,toHtml:N2},f0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=g}=c;(Object.keys(O.styles).length>0||L.autoFetchSvg)&&W&&L.autoReplaceSvg&&T.dom.i2svg({node:l})};function I2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>N2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!W)return;let s=g.createElement("div");return s.innerHTML=c.html,s.children}}),c}function m0(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(x1(o)&&s.found&&!e.found){let{width:i,height:m}=s,z={x:i/m/2,y:.5};a.style=D2(S(f({},n),{"transform-origin":"".concat(z.x+o.x/16,"em ").concat(z.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:l}]}function z0(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(L.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(f({},a),{id:o}),children:e}]}]}function S1(c){let{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:i,maskId:m,titleId:z,extra:M,watchable:x=!1}=c,{width:d,height:k}=s.found?s:l,G=e==="fak",J=[L.replacementClass,a?"".concat(L.cssPrefix,"-").concat(a):""].filter(o2=>M.classes.indexOf(o2)===-1).filter(o2=>o2!==""||!!o2).concat(M.classes).join(" "),E={children:[],attributes:S(f({},M.attributes),{"data-prefix":e,"data-icon":a,class:J,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(k)})},H=G&&!~M.classes.indexOf("fa-fw")?{width:"".concat(d/k*16*.0625,"em")}:{};x&&(E.attributes[e2]=""),i&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(z||x2())},children:[i]}),delete E.attributes.title);let v=S(f({},E),{prefix:e,iconName:a,main:l,mask:s,maskId:m,transform:n,symbol:o,styles:f(f({},H),M.styles)}),{children:B,attributes:n2}=s.found&&l.found?Q("generateAbstractMask",v)||{children:[],attributes:{}}:Q("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=B,v.attributes=n2,o?z0(v):m0(v)}function o3(c){let{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:i=!1}=c,m=S(f(f({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});i&&(m[e2]="");let z=f({},o.styles);x1(a)&&(z.transform=W4({transform:a,startCentered:!0,width:s,height:e}),z["-webkit-transform"]=z.transform);let M=D2(z);M.length>0&&(m.style=M);let x=[];return x.push({tag:"span",attributes:m,children:[l]}),n&&x.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),x}function L0(c){let{content:l,title:s,extra:e}=c,a=S(f(f({},e.attributes),s?{title:s}:{}),{class:e.classes.join(" ")}),n=D2(e.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:Z2}=O;function m1(c){let l=c[0],s=c[1],[e]=c.slice(4),a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(K2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(K2.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(K2.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}var p0={found:!1,width:512,height:512};function M0(c,l){!A3&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function z1(c,l){let s=l;return l==="fa"&&L.styleDefault!==null&&(l=K()),new Promise((e,a)=>{if(s==="fa"){let n=W3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&Z2[l]&&Z2[l][c]){let n=Z2[l][c];return e(m1(n))}M0(c,l),e(S(f({},p0),{icon:L.showMissingIcons&&c?Q("missingIconAbstract")||{}:{}}))})}var i3=()=>{},L1=L.measurePerformance&&v2&&v2.mark&&v2.measure?v2:{mark:i3,measure:i3},C2='FA "6.6.0"',C0=c=>(L1.mark("".concat(C2," ").concat(c," begins")),()=>V3(c)),V3=c=>{L1.mark("".concat(C2," ").concat(c," ends")),L1.measure("".concat(C2," ").concat(c),"".concat(C2," ").concat(c," begins"),"".concat(C2," ").concat(c," ends"))},w1={begin:C0,end:V3},A2=()=>{};function t3(c){return typeof(c.getAttribute?c.getAttribute(e2):null)=="string"}function d0(c){let l=c.getAttribute?c.getAttribute(d1):null,s=c.getAttribute?c.getAttribute(u1):null;return l&&s}function u0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function h0(){return L.autoReplaceSvg===!0?P2.replace:P2[L.autoReplaceSvg]||P2.replace}function x0(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function g0(c){return g.createElement(c)}function Y3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?x0:g0}=l;if(typeof c=="string")return g.createTextNode(c);let e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(Y3(n,{ceFn:s}))}),e}function N0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var P2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(Y3(s),l)}),l.getAttribute(e2)===null&&L.keepOriginalSource){let s=g.createComment(N0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~h1(l).indexOf(L.replacementClass))return P2.replace(c);let e=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===L.replacementClass||i.match(e)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let a=s.map(n=>N2(n)).join(`
`);l.setAttribute(e2,""),l.innerHTML=a}};function r3(c){c()}function X3(c,l){let s=typeof l=="function"?l:A2;if(c.length===0)s();else{let e=r3;L.mutateApproach===A4&&(e=$.requestAnimationFrame||r3),e(()=>{let a=h0(),n=w1.begin("mutate");c.map(a),n(),s()})}}var y1=!1;function $3(){y1=!0}function p1(){y1=!1}var F2=null;function f3(c){if(!J1||!L.observeMutations)return;let{treeCallback:l=A2,nodeCallback:s=A2,pseudoElementsCallback:e=A2,observeMutationsRoot:a=g}=c;F2=new J1(n=>{if(y1)return;let o=K();L2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!t3(i.addedNodes[0])&&(L.searchPseudoElements&&e(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&L.searchPseudoElements&&e(i.target.parentNode),i.type==="attributes"&&t3(i.target)&&~B4.indexOf(i.attributeName))if(i.attributeName==="class"&&d0(i.target)){let{prefix:m,iconName:z}=B2(h1(i.target));i.target.setAttribute(d1,m||o),z&&i.target.setAttribute(u1,z)}else u0(i.target)&&s(i.target)})}),W&&F2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function b0(){F2&&F2.disconnect()}function S0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((e,a)=>{let n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(e[o]=i.join(":").trim()),e},{})),s}function w0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",a=B2(h1(c));return a.prefix||(a.prefix=K()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=s0(a.prefix,c.innerText)||N1(a.prefix,o1(c.innerText))),!a.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function y0(c){let l=L2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return L.autoA11y&&(s?l["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(e||x2()):(l["aria-hidden"]="true",l.focusable="false")),l}function k0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:e,rest:a}=w0(c),n=y0(c),o=r1("parseNodeAttributes",{},c),i=l.styleParser?S0(c):[];return f({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n}},o)}var{styles:v0}=O;function K3(c){let l=L.autoReplaceSvg==="nest"?m3(c,{styleParser:!1}):m3(c);return~l.extra.classes.indexOf(F3)?Q("generateLayersText",c,l):Q("generateSvgReplacementMutation",c,l)}var R=new Set;P3.map(c=>{R.add("fa-".concat(c))});Object.keys(l2[b]).map(R.add.bind(R));Object.keys(l2[A]).map(R.add.bind(R));Object.keys(l2[P]).map(R.add.bind(R));R=[...R];function z3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();let s=g.documentElement.classList,e=M=>s.add("".concat(l3,"-").concat(M)),a=M=>s.remove("".concat(l3,"-").concat(M)),n=L.autoFetchSvg?R:P3.map(M=>"fa-".concat(M)).concat(Object.keys(v0));n.includes("fa")||n.push("fa");let o=[".".concat(F3,":not([").concat(e2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(e2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=L2(c.querySelectorAll(o))}catch{}if(i.length>0)e("pending"),a("complete");else return Promise.resolve();let m=w1.begin("onTree"),z=i.reduce((M,x)=>{try{let d=K3(x);d&&M.push(d)}catch(d){A3||d.name==="MissingIcon"&&console.error(d)}return M},[]);return new Promise((M,x)=>{Promise.all(z).then(d=>{X3(d,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),m(),M()})}).catch(d=>{m(),x(d)})})}function A0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K3(c).then(s=>{s&&X3([s],l)})}function P0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:f1(l||{}),{mask:a}=s;return a&&(a=(a||{}).icon?a:f1(a||{})),c(e,S(f({},s),{mask:a}))}}var T0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=I,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:m=[],attributes:z={},styles:M={}}=l;if(!c)return;let{prefix:x,iconName:d,icon:k}=c;return I2(f({type:"icon"},c),()=>(a2("beforeDOMElementCreation",{iconDefinition:c,params:l}),L.autoA11y&&(o?z["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(i||x2()):(z["aria-hidden"]="true",z.focusable="false")),S1({icons:{main:m1(k),mask:a?m1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:d,transform:f(f({},I),s),symbol:e,title:o,maskId:n,titleId:i,extra:{attributes:z,styles:M,classes:m}})))},F0={mixout(){return{icon:P0(T0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=z3,c.nodeCallback=A0,c}}},provides(c){c.i2svg=function(l){let{node:s=g,callback:e=()=>{}}=l;return z3(s,e)},c.generateSvgReplacementMutation=function(l,s){let{iconName:e,title:a,titleId:n,prefix:o,transform:i,symbol:m,mask:z,maskId:M,extra:x}=s;return new Promise((d,k)=>{Promise.all([z1(e,o),z.iconName?z1(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(G=>{let[J,E]=G;d([l,S1({icons:{main:J,mask:E},prefix:o,iconName:e,transform:i,symbol:m,maskId:M,title:a,titleId:n,extra:x,watchable:!0})])}).catch(k)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l,i=D2(o);i.length>0&&(e.style=i);let m;return x1(n)&&(m=Q("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(m||a.icon),{children:s,attributes:e}}}},D0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return I2({type:"layer"},()=>{a2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},E0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return I2({type:"counter",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),L0({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(L.cssPrefix,"-layers-counter"),...e]}})))}}}},B0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=I,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return I2({type:"text",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),o3({content:c,transform:f(f({},I),s),title:e,extra:{attributes:n,styles:o,classes:["".concat(L.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:e,transform:a,extra:n}=s,o=null,i=null;if(b3){let m=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();o=z.width/m,i=z.height/m}return L.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,o3({content:l.innerHTML,width:o,height:i,transform:a,title:e,extra:n,watchable:!0})])}}},I0=new RegExp('"',"ug"),L3=[1105920,1112319],p3=f(f(f({FontAwesome:{normal:"fas",400:"fas"}},d4),C4),w4),M1=Object.keys(p3).reduce((c,l)=>(c[l.toLowerCase()]=p3[l],c),{}),O0=Object.keys(M1).reduce((c,l)=>{let s=M1[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function R0(c){let l=c.replace(I0,""),s=K4(l,0),e=s>=L3[0]&&s<=L3[1],a=l.length===2?l[0]===l[1]:!1;return{value:o1(a?l[0]:l),isSecondary:e||a}}function H0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(M1[s]||{})[a]||O0[s]}function M3(c,l){let s="".concat(v4).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();let o=L2(c.children).filter(d=>d.getAttribute(s1)===l)[0],i=$.getComputedStyle(c,l),m=i.getPropertyValue("font-family"),z=m.match(D4),M=i.getPropertyValue("font-weight"),x=i.getPropertyValue("content");if(o&&!z)return c.removeChild(o),e();if(z&&x!=="none"&&x!==""){let d=i.getPropertyValue("content"),k=H0(m,M),{value:G,isSecondary:J}=R0(d),E=z[0].startsWith("FontAwesome"),H=N1(k,G),v=H;if(E){let B=e0(G);B.iconName&&B.prefix&&(H=B.iconName,k=B.prefix)}if(H&&!J&&(!o||o.getAttribute(d1)!==k||o.getAttribute(u1)!==v)){c.setAttribute(s,v),o&&c.removeChild(o);let B=k0(),{extra:n2}=B;n2.attributes[s1]=l,z1(H,k).then(o2=>{let r4=S1(S(f({},B),{icons:{main:o2,mask:b1()},prefix:k,iconName:v,extra:n2,watchable:!0})),$2=g.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore($2,c.firstChild):c.appendChild($2),$2.outerHTML=r4.map(f4=>N2(f4)).join(`
`),c.removeAttribute(s),e()}).catch(a)}else e()}else e()})}function j0(c){return Promise.all([M3(c,"::before"),M3(c,"::after")])}function U0(c){return c.parentNode!==document.head&&!~P4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(s1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function C3(c){if(W)return new Promise((l,s)=>{let e=L2(c.querySelectorAll("*")).filter(U0).map(j0),a=w1.begin("searchPseudoElements");$3(),Promise.all(e).then(()=>{a(),p1(),l()}).catch(()=>{a(),p1(),s()})})}var _0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=C3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=g}=l;L.searchPseudoElements&&C3(s)}}},d3=!1,q0={mixout(){return{dom:{unwatch(){$3(),d3=!0}}}},hooks(){return{bootstrap(){f3(r1("mutationObserverCallbacks",{}))},noAuto(){b0()},watch(c){let{observeMutationsRoot:l}=c;d3?p1():f3(r1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},u3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,e)=>{let a=e.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},W0={mixout(){return{parse:{transform:c=>u3(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=u3(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:e,containerWidth:a,iconWidth:n}=l,o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),m="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),z="rotate(".concat(e.rotate," 0 0)"),M={transform:"".concat(i," ").concat(m," ").concat(z)},x={transform:"translate(".concat(n/2*-1," -256)")},d={outer:o,inner:M,path:x};return{tag:"g",attributes:f({},d.outer),children:[{tag:"g",attributes:f({},d.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:f(f({},s.icon.attributes),d.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function h3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function G0(c){return c.tag==="g"?c.children:[c]}var V0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),e=s?B2(s.split(" ").map(a=>a.trim())):b1();return e.prefix||(e.prefix=K()),c.mask=e,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:e,main:a,mask:n,maskId:o,transform:i}=l,{width:m,icon:z}=a,{width:M,icon:x}=n,d=q4({transform:i,containerWidth:M,iconWidth:m}),k={tag:"rect",attributes:S(f({},c1),{fill:"white"})},G=z.children?{children:z.children.map(h3)}:{},J={tag:"g",attributes:f({},d.inner),children:[h3(f({tag:z.tag,attributes:f(f({},z.attributes),d.path)},G))]},E={tag:"g",attributes:f({},d.outer),children:[J]},H="mask-".concat(o||x2()),v="clip-".concat(o||x2()),B={tag:"mask",attributes:S(f({},c1),{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,E]},n2={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:G0(x)},B]};return s.push(n2,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(H,")")},c1)}),{children:s,attributes:e}}}},Y0={provides(c){let l=!1;$.matchMedia&&(l=$.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],e={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:S(f({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=S(f({},a),{attributeName:"opacity"}),o={tag:"circle",attributes:S(f({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:S(f({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(f({},n),{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:S(f({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:S(f({},n),{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:S(f({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(f({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},X0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),e=s===null?!1:s===""?!0:s;return c.symbol=e,c}}}},$0=[V4,F0,D0,E0,B0,_0,q0,W0,V0,Y0,X0];o0($0,{mixoutsTo:T});var S6=T.noAuto,Q3=T.config,w6=T.library,J3=T.dom,Z3=T.parse,y6=T.findIconDefinition,k6=T.toHtml,c4=T.icon,v6=T.layer,K0=T.text,Q0=T.counter;var J0=["*"],Z0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},c6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},l6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},k1=new WeakSet,l4="fa-auto-css";function s6(c,l){if(!l.autoAddCss||k1.has(c))return;if(c.getElementById(l4)!=null){l.autoAddCss=!1,k1.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",l4),s.innerHTML=J3.css();let e=c.head.childNodes,a=null;for(let n=e.length-1;n>-1;n--){let o=e[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}c.head.insertBefore(s,a),l.autoAddCss=!1,k1.add(c)}var e6=c=>c.prefix!==void 0&&c.iconName!==void 0,a6=(c,l)=>e6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},n6=(()=>{let l=class l{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){Q3.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=Z({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),o6=(()=>{let l=class l{constructor(){this.definitions={}}addIcons(...e){for(let a of e){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let n of a.icon[2])typeof n=="string"&&(this.definitions[a.prefix][n]=a)}}addIconPacks(...e){for(let a of e){let n=Object.keys(a).map(o=>a[o]);this.addIcons(...n)}}getIconDefinition(e,a){return e in this.definitions&&a in this.definitions[e]?this.definitions[e][a]:null}};l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=Z({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),i6=(()=>{let l=class l{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};l.\u0275fac=function(a){return new(a||l)},l.\u0275dir=T1({type:l,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[S2]});let c=l;return c})(),t6=(()=>{let l=class l{constructor(e,a){this.renderer=e,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};l.\u0275fac=function(a){return new(a||l)(F(E1),F(F1))},l.\u0275cmp=u({type:l,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[S2,h],ngContentSelectors:J0,decls:1,vars:0,template:function(a,n){a&1&&(O1(),R1(0))},encapsulation:2});let c=l;return c})(),s4=(()=>{let l=class l{constructor(e,a,n,o,i){this.sanitizer=e,this.config=a,this.iconLibrary=n,this.stackItem=o,this.document=A1(U1),i!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){c6();return}if(e){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let n=this.buildParams();s6(this.document,this.config);let o=c4(a,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(o.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let a=a6(e,this.config.defaultPrefix);if("icon"in a)return a;let n=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return n??(Z0(a),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?Z3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:l6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};l.\u0275fac=function(a){return new(a||l)(F(G1),F(n6),F(o6),F(i6,8),F(t6,8))},l.\u0275cmp=u({type:l,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,n){a&2&&(I1("innerHTML",n.renderedIconHTML,D1),B1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[S2,h],decls:0,vars:0,template:function(a,n){},encapsulation:2});let c=l;return c})();var e4=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=P1({type:l}),l.\u0275inj=v1({});let c=l;return c})();var a4={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var n4={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};var O2=class c{faGraduationCap=n4;faCode=a4;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-about"]],standalone:!0,features:[h],decls:54,vars:2,consts:[["id","about",1,"d-flex","flex-column","justify-content-center","py-5","bg-light"],[1,"container","text-center","mb-5"],[1,"text-dark","fw-bold","text-uppercase","letter-spacing-2"],[1,"fas","fa-user-circle","me-2"],[1,"display-4","fw-bold","mb-3"],[1,"divider-custom","mx-auto"],[1,"divider-custom-line"],[1,"divider-custom-icon"],[1,"fas","fa-star"],[1,"container"],[1,"row","align-items-center","gy-5"],[1,"col-lg-6"],[1,"position-relative"],[1,"bg-dark","position-absolute","top-0","start-0","w-100","h-100","rounded-4","opacity-10","transform-diagonal"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic-2.png","alt","Second profile picture","width","400",1,"rounded-4","about-image","img-fluid","position-relative","shadow-lg"],[1,"row","g-4"],[1,"col-md-6"],[1,"card","h-100","border-0","shadow-sm","hover-lift"],[1,"card-body","text-center","p-4"],[1,"icon-box","icon-box-dark","mb-3"],[1,"text-dark",3,"icon"],[1,"h4","mb-3"],[1,"education-item","mb-3"],[1,"h6","text-dark","mb-1"],[1,"text-muted","mb-0"],[1,"education-item"],[1,"list-unstyled","text-muted","skill-list"],[1,"fas","fa-brain","me-2","text-dark"],[1,"fas","fa-layer-group","me-2","text-dark"],[1,"fas","fa-database","me-2","text-dark"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"p",2),C(3,"i",3),p(4,"Get to know more "),r(),t(5,"h2",4),p(6,"About me"),r(),t(7,"div",5),C(8,"div",6),t(9,"div",7),C(10,"i",8),r(),C(11,"div",6),r()(),t(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12),C(16,"div",13)(17,"img",14),r()(),t(18,"div",11)(19,"div",15)(20,"div",16)(21,"div",17)(22,"div",18)(23,"div",19),C(24,"fa-icon",20),r(),t(25,"h3",21),p(26,"Education"),r(),t(27,"div",22)(28,"h4",23),p(29,"Master's Degree"),r(),t(30,"p",24),p(31,"Computer Engineering"),r()(),t(32,"div",25)(33,"h4",23),p(34,"Bachelor's Degree"),r(),t(35,"p",24),p(36,"Computer Engineering"),r()()()()(),t(37,"div",16)(38,"div",17)(39,"div",18)(40,"div",19),C(41,"fa-icon",20),r(),t(42,"h3",21),p(43,"Skills"),r(),t(44,"ul",26)(45,"li"),C(46,"i",27),p(47," Machine Learning "),r(),t(48,"li"),C(49,"i",28),p(50," Full-stack Development "),r(),t(51,"li"),C(52,"i",29),p(53," Big Data "),r()()()()()()()()()()),s&2&&(N(24),w("icon",e.faGraduationCap),N(17),w("icon",e.faCode))},dependencies:[e4,s4],styles:[".letter-spacing-2[_ngcontent-%COMP%]{letter-spacing:2px}.divider-custom[_ngcontent-%COMP%]{width:100%;max-width:7rem;height:.25rem;padding:0;display:flex;align-items:center;margin:1.25rem 0}.divider-custom[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]{width:100%;height:.25rem;background-color:#212529;border-radius:1rem;opacity:.3}.divider-custom[_ngcontent-%COMP%]   .divider-custom-icon[_ngcontent-%COMP%]{padding:0 1rem;color:#212529;font-size:1rem}.transform-diagonal[_ngcontent-%COMP%]{transform:rotate(-3deg)}.hover-lift[_ngcontent-%COMP%]{transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.hover-lift[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 .5rem 1rem #00000026!important}.icon-box[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto}.icon-box-dark[_ngcontent-%COMP%]{background-color:#2125291a}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.75rem;font-size:.95rem;display:flex;align-items:center;padding:.5rem;border-radius:.25rem;transition:background-color .2s ease-in-out}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#2125290d}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}@media (max-width: 576px){.about-image[_ngcontent-%COMP%]{width:350px}}@media (max-width: 768px){.education-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2rem}}"]})};var p2=class c{badgeText="Badge Text";static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-custom-badge"]],inputs:{badgeText:"badgeText"},standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"tag"]],template:function(s,e){s&1&&(t(0,"span",0),p(1),r()),s&2&&(N(),U(e.badgeText))},styles:[".tag[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;font-size:14px;text-decoration:none;white-space:nowrap}.tag[_ngcontent-%COMP%]:hover{background-color:#424242;cursor:pointer}"]})};function f6(c,l){if(c&1&&C(0,"app-custom-badge",9),c&2){let s=l.$implicit;w("badgeText",s)}}var R2=class c{projectTitle="Project 1";projectDescription="Description 1";projectImageUrl="https://placehold.co/300x300/orange/white";projectUrl="https://www.google.com";projectTags=["Tag 1","Tag 2","Tag 3"];static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-project-content"]],inputs:{projectTitle:"projectTitle",projectDescription:"projectDescription",projectImageUrl:"projectImageUrl",projectUrl:"projectUrl",projectTags:"projectTags"},standalone:!0,features:[h],decls:12,vars:5,consts:[[1,"container","d-flex","gap-2","my-2"],[1,"card","custom-width","scroll-reveal-down"],["alt","Project image","width","300px","height","300px",1,"card-img-top",3,"src"],[1,"m-2","d-flex","flex-row","flex-wrap","gap-1"],[3,"badgeText",4,"ngFor","ngForOf"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"card-text"],[1,"btn","btn-dark",3,"href"],[3,"badgeText"]],template:function(s,e){s&1&&(t(0,"div",0)(1,"div",1),C(2,"img",2),t(3,"div",3),j(4,f6,1,1,"app-custom-badge",4),r(),t(5,"div",5)(6,"h5",6),p(7),r(),t(8,"p",7),p(9),r(),t(10,"a",8),p(11,"Go to project"),r()()()()),s&2&&(N(2),t2("src",e.projectImageUrl,i2),N(2),w("ngForOf",e.projectTags),N(3),U(e.projectTitle),N(2),U(e.projectDescription),N(),t2("href",e.projectUrl,i2))},dependencies:[p2,V],styles:["img[_ngcontent-%COMP%]{object-fit:cover}.card[_ngcontent-%COMP%]{transition:transform .4s ease-in-out,box-shadow .4s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 15px #0003}.card-img-top[_ngcontent-%COMP%]{transition:transform .5s ease-in-out}.card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]{font-weight:700;color:#000}.card[_ngcontent-%COMP%]:hover   .card-text[_ngcontent-%COMP%]{color:#333}.custom-width[_ngcontent-%COMP%]{width:20rem}@media (max-width: 576px){.custom-width[_ngcontent-%COMP%]{width:100%}}@keyframes _ngcontent-%COMP%_appear-down{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}.scroll-reveal-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appear-down linear;animation-timeline:view();animation-range:entry 0% cover 40%}"]})};var H2=class c{constructor(l){this.http=l}BASE_URL="https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/projects";getProjects(){return this.http.get(`${this.BASE_URL}/data.json`)}static \u0275fac=function(s){return new(s||c)(b2(w2))};static \u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"})};function L6(c,l){if(c&1&&(t(0,"div"),C(1,"app-project-content",5),r()),c&2){let s=l.$implicit;N(),w("projectTitle",s.projectTitle)("projectDescription",s.projectDescription)("projectImageUrl",s.projectImageUrl)("projectUrl",s.projectUrl)("projectTags",s.projectTags)}}var j2=class c{constructor(l){this.projectsService=l}projects=[];ngOnInit(){this.projectsService.getProjects().subscribe(l=>this.projects=l)}static \u0275fac=function(s){return new(s||c)(F(H2))};static \u0275cmp=u({type:c,selectors:[["app-projects-list"]],standalone:!0,features:[h],decls:5,vars:1,consts:[[1,"container","my-5"],[1,"row"],[1,"col","m-4"],[1,"d-flex","flex-wrap","justify-content-center","gap-2"],[4,"ngFor","ngForOf"],[3,"projectTitle","projectDescription","projectImageUrl","projectUrl","projectTags"]],template:function(s,e){s&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),j(4,L6,2,5,"div",4),r()()()()),s&2&&(N(4),w("ngForOf",e.projects))},dependencies:[R2,V]})};var U2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-projects"]],standalone:!0,features:[h],decls:7,vars:0,consts:[["id","projects",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"p",2),p(3,"See my"),r(),t(4,"p",3),p(5,"Projects"),r()(),C(6,"app-projects-list"),r())},dependencies:[j2]})};function p6(c,l){if(c&1&&C(0,"app-custom-badge",8),c&2){let s=l.$implicit;w("badgeText",s)}}function M6(c,l){if(c&1&&(t(0,"div",9),C(1,"img",10),t(2,"p",11),p(3),r()()),c&2){let s=l.$implicit;N(),t2("src",s.authorProfilePicture,i2),N(2),U(s.authorName)}}var _2=class c{publicationTitle="Paper Title";publicationTags=["Tag 1","Tag 2","Tag 3"];publicationPreviewImage="https://placehold.co/150x150";publicationDate="Aug 2024";publicationAuthors=[{authorName:"Author 1",authorProfilePicture:"https://placehold.co/25x25"},{authorName:"Author 2",authorProfilePicture:"https://placehold.co/25x25"},{authorName:"Author 3",authorProfilePicture:"https://placehold.co/25x25"}];constructor(){}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-publications-content"]],inputs:{publicationTitle:"publicationTitle",publicationTags:"publicationTags",publicationPreviewImage:"publicationPreviewImage",publicationDate:"publicationDate",publicationAuthors:"publicationAuthors"},standalone:!0,features:[h],decls:12,vars:5,consts:[[1,"publications-component","row","p-4","rounded-3","border","border-black","scroll-reveal-down"],[1,"col"],[1,"d-flex","flex-row","flex-wrap","gap-1"],[3,"badgeText",4,"ngFor","ngForOf"],[1,"d-flex","gap-2","flex-column","flex-md-row"],["class","d-flex gap-2",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center","justify-content-xl-end"],["alt","Paper preview image","width","500px","height","300px",1,"publication-image",3,"src"],[3,"badgeText"],[1,"d-flex","gap-2"],["alt","Author profile picture","height","25px","width","25px",1,"rounded-circle",3,"src"],[1,""]],template:function(s,e){s&1&&(t(0,"div",0)(1,"div",1)(2,"h5"),p(3),r(),t(4,"div",2),j(5,p6,1,1,"app-custom-badge",3),r(),t(6,"p"),p(7),r(),t(8,"div",4),j(9,M6,4,2,"div",5),r()(),t(10,"div",6),C(11,"img",7),r()()),s&2&&(N(3),U(e.publicationTitle),N(2),w("ngForOf",e.publicationTags),N(2),U(e.publicationDate),N(2),w("ngForOf",e.publicationAuthors),N(2),t2("src",e.publicationPreviewImage,i2))},dependencies:[p2,V],styles:["img[_ngcontent-%COMP%]{object-fit:cover}.publications-component[_ngcontent-%COMP%]{transition:transform .4s ease-in-out,box-shadow .4s ease-in-out}.publications-component[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 15px #0003}@media (max-width: 576px){.publication-image[_ngcontent-%COMP%]{width:320px}.publications-component[_ngcontent-%COMP%]{width:370px}}@keyframes _ngcontent-%COMP%_appear-down{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}.scroll-reveal-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appear-down linear;animation-timeline:view();animation-range:entry 0% cover 40%}"]})};var q2=class c{constructor(l){this.http=l}BASE_URL="https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/publications";getPublications(){return this.http.get(`${this.BASE_URL}/data.json`)}static \u0275fac=function(s){return new(s||c)(b2(w2))};static \u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"})};function d6(c,l){if(c&1&&C(0,"app-publications-content",2),c&2){let s=l.$implicit;w("publicationTitle",s.publicationTitle)("publicationTags",s.publicationTags)("publicationPreviewImage",s.publicationPreviewImage)("publicationDate",s.publicationDate)("publicationAuthors",s.publicationAuthors)}}var W2=class c{constructor(l){this.publicationsService=l}publications=[];ngOnInit(){this.publicationsService.getPublications().subscribe(l=>{this.publications=l})}static \u0275fac=function(s){return new(s||c)(F(q2))};static \u0275cmp=u({type:c,selectors:[["app-publications-list"]],standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"container","my-5","d-flex","flex-column","justify-content-center","align-items-center","gap-3"],[3,"publicationTitle","publicationTags","publicationPreviewImage","publicationDate","publicationAuthors",4,"ngFor","ngForOf"],[3,"publicationTitle","publicationTags","publicationPreviewImage","publicationDate","publicationAuthors"]],template:function(s,e){s&1&&(t(0,"div",0),j(1,d6,1,5,"app-publications-content",1),r()),s&2&&(N(),w("ngForOf",e.publications))},dependencies:[_2,V]})};var G2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-publications"]],standalone:!0,features:[h],decls:7,vars:0,consts:[["id","publications",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"p",2),p(3,"Read my"),r(),t(4,"p",3),p(5,"Publications"),r()(),C(6,"app-publications-list"),r())},dependencies:[W2]})};var V2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-contact"]],standalone:!0,features:[h],decls:16,vars:0,consts:[["id","contact",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"container","d-flex","justify-content-center","gap-4"],[1,"d-flex","gap-4","border","border-black","rounded-4","px-3","px-sm-5","py-3"],[1,"d-flex","align-items-center","gap-2"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/email.png","alt","Email picture","width","60px","height","60px",1,"rounded-4"],["href","mailto:aleandro.presta@outlook.com",1,"m-0","text-black","link-dark","link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin picture","height","50px","width","50px",1,"rounded-4"],["href","https://www.linkedin.com/in/aleandro-presta-6523471b9/",1,"m-0","text-black","link-dark","link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover"]],template:function(s,e){s&1&&(t(0,"section",0)(1,"div",1)(2,"p",2),p(3,"Get in touch"),r(),t(4,"p",3),p(5,"Contact me"),r()(),t(6,"div",4)(7,"div",5)(8,"div",6),C(9,"img",7),t(10,"a",8),p(11," Email "),r()(),t(12,"div",6),C(13,"img",9),t(14,"a",10),p(15," Linkedin "),r()()()()())},styles:["a[_ngcontent-%COMP%]{cursor:pointer}"]})};var Y2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-footer"]],standalone:!0,features:[h],decls:17,vars:0,consts:[[1,"container"],[1,"py-3","my-4"],[1,"nav","nav-underline","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#about",1,"nav-link","px-2","text-black"],["href","#projects",1,"nav-link","px-2","text-black"],["href","#publications",1,"nav-link","px-2","text-black"],["href","#contact",1,"nav-link","px-2","text-black"],[1,"text-center","text-body-secondary"]],template:function(s,e){s&1&&(t(0,"div",0)(1,"footer",1)(2,"ul",2)(3,"li",3)(4,"a",4),p(5,"About"),r()(),t(6,"li",3)(7,"a",5),p(8,"Projects"),r()(),t(9,"li",3)(10,"a",6),p(11,"Publications"),r()(),t(12,"li",3)(13,"a",7),p(14,"Contact"),r()()(),t(15,"p",8),p(16,"\xA9 2024 Aleandro Presta"),r()()())}})};var X2=class c{title="portfolio-deploy";static \u0275fac=function(s){return new(s||c)};static \u0275cmp=u({type:c,selectors:[["app-root"]],standalone:!0,features:[h],decls:11,vars:0,consts:[[1,"main"]],template:function(s,e){s&1&&(t(0,"header"),C(1,"app-navigation"),r(),t(2,"main",0),C(3,"app-profile")(4,"app-about")(5,"app-projects")(6,"app-publications")(7,"app-contact"),r(),t(8,"footer"),C(9,"app-footer"),r(),C(10,"router-outlet"))},dependencies:[X1,y2,k2,O2,U2,G2,V2,Y2]})};var o4=[];var i4={providers:[H1({eventCoalescing:!0}),$1(o4),V1(),_1(q1())]};var u6={providers:[Y1()]},t4=j1(i4,u6);var h6=()=>W1(X2,t4),H8=h6;export{H8 as a};
