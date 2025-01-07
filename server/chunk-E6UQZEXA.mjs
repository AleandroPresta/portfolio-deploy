import './polyfills.server.mjs';
import{$ as $1,A as x,F as R1,I as j1,J as U1,L as V,M as w2,N as _1,O as q1,P as W1,Q as G1,R as V1,U as Y1,Y as X1,a as Z,b as v1,c as b2,d as A1,e as g,f as P1,g as T1,h as S2,i as F1,j as E1,k as i2,l as d,m as F,n as D1,o as j,p as B1,q as S,r as i,s as t,t as C,u as O1,v as I1,w as H1,x as t2,y as f,z as U}from"./chunk-JAA2WKDV.mjs";import{a as m,b as w}from"./chunk-5XUXGTUW.mjs";var y2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-navigation"]],standalone:!0,features:[x],decls:21,vars:0,consts:[[1,"container"],[1,"navbar","navbar-expand-md","border-bottom","py-3","mb-4"],[1,"container-fluid"],[1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","nav-underline","mb-2","mb-lg-0"],[1,"nav-item"],["href","#about",1,"nav-link","text-black"],["href","#projects",1,"nav-link","text-black"],["href","#publications",1,"nav-link","text-black"],["href","#contact",1,"nav-link","text-black"]],template:function(s,e){s&1&&(i(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),f(4,"Aleandro Presta"),t(),i(5,"button",4),C(6,"span",5),t(),i(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),f(11,"About"),t()(),i(12,"li",8)(13,"a",10),f(14,"Projects"),t()(),i(15,"li",8)(16,"a",11),f(17,"Publications"),t()(),i(18,"li",8)(19,"a",12),f(20,"Contact"),t()()()()()()())}})};var k2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-profile"]],standalone:!0,features:[x],decls:20,vars:0,consts:[[1,"profile-container","d-flex","justify-content-center","mb-5"],[1,"d-flex","flex-lg-row","flex-column","justify-content-center","align-items-center","gap-5"],[1,"d-flex"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic.png","alt","Profile Picture","width","350",1,"rounded-circle","fade-in","fade-in-1"],[1,"align-self-center","text-center","d-flex","flex-column","gap-3"],[1,"container"],[1,"text-secondary","fw-bold","fade-in","fade-in-2"],[1,"fs-1","fw-bold","fade-in","fade-in-3"],[1,"text-light-emphasis","fs-4","fw-bold","fade-in","fade-in-4"],[1,"container","d-flex","justify-content-center","gap-3","fade-in","fade-in-5"],["onclick","window.open('https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/resume-aleandro-presta.pdf')",1,"btn","btn-outline-dark","rounded-pill","px-3","fw-bold"],["onclick","location.href='#contact'",1,"btn","btn-dark","rounded-pill","px-3","py-3","fw-bold"],[1,"container","d-flex","justify-content-center","gap-3","fade-in","fade-in-6"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin Profile","onclick","location.href='https://www.linkedin.com/in/aleandro-presta-6523471b9/'",1,"icon"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/github.png","alt","GitHub Profile","onclick","location.href='https://github.com/AleandroPresta'",1,"icon"]],template:function(s,e){s&1&&(i(0,"section",0)(1,"div",1)(2,"div",2),C(3,"img",3),t(),i(4,"div",4)(5,"div",5)(6,"p",6),f(7,"Hello, I'm"),t(),i(8,"p",7),f(9,"Aleandro Presta"),t(),i(10,"p",8),f(11,"Software Engineer"),t()(),i(12,"div",9)(13,"button",10),f(14," Download CV "),t(),i(15,"button",11),f(16," Contact Info "),t()(),i(17,"div",12),C(18,"img",13)(19,"img",14),t()()()())},styles:[".profile-container[_ngcontent-%COMP%]{height:80vh}.icon[_ngcontent-%COMP%]{cursor:pointer;height:2rem}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fade-in[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_fadeIn 1s ease-in-out forwards}.fade-in-1[_ngcontent-%COMP%]{animation-delay:.5s}.fade-in-2[_ngcontent-%COMP%]{animation-delay:1s}.fade-in-3[_ngcontent-%COMP%]{animation-delay:1.5s}.fade-in-4[_ngcontent-%COMP%]{animation-delay:2s}.fade-in-5[_ngcontent-%COMP%]{animation-delay:2.5s}.fade-in-6[_ngcontent-%COMP%]{animation-delay:3s}"]})};var K1=()=>{},C1={},x3={},h3=null,N3={mark:K1,measure:K1};try{typeof window<"u"&&(C1=window),typeof document<"u"&&(x3=document),typeof MutationObserver<"u"&&(h3=MutationObserver),typeof performance<"u"&&(N3=performance)}catch{}var{userAgent:Q1=""}=C1.navigator||{},$=C1,N=x3,J1=h3,v2=N3,P6=!!$.document,W=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",b3=~Q1.indexOf("MSIE")||~Q1.indexOf("Trident/"),b="classic",S3="duotone",A="sharp",P="sharp-duotone",d4=[b,S3,A,P],u4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Z1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},g4=["kit"],x4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,h4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,N4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},b4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},S4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},w4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},y4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},k4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},w3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},v4=["solid","regular","light","thin","duotone","brands"],y3=[1,2,3,4,5,6,7,8,9,10],A4=y3.concat([11,12,13,14,15,16,17,18,19,20]),M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P4=[...Object.keys(w4),...v4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY].concat(y3.map(c=>"".concat(c,"x"))).concat(A4.map(c=>"w-".concat(c))),T4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},F4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},E4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_="___FONT_AWESOME___",l1=16,k3="fa",v3="svg-inline--fa",e2="data-fa-i2svg",s1="data-fa-pseudo-element",D4="data-fa-pseudo-element-pending",d1="data-prefix",u1="data-icon",l3="fontawesome-i2svg",B4="async",O4=["HTML","HEAD","STYLE","SCRIPT"],A3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),P3=[b,A,P];function h2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[b]}})}var T3=m({},w3);T3[b]=m(m(m({},w3[b]),Z1.kit),Z1["kit-duotone"]);var l2=h2(T3),e1=m({},k4);e1[b]=m(m(m({},e1[b]),c3.kit),c3["kit-duotone"]);var g2=h2(e1),a1=m({},y4);a1[b]=m(m({},a1[b]),E4.kit);var s2=h2(a1),n1=m({},S4);n1[b]=m(m({},n1[b]),F4.kit);var I4=h2(n1),H4=x4,F3="fa-layers-text",R4=h4,j4=m({},u4),T6=h2(j4),U4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K2=M2,m2=new Set;Object.keys(g2[b]).map(m2.add.bind(m2));Object.keys(g2[A]).map(m2.add.bind(m2));Object.keys(g2[P]).map(m2.add.bind(m2));var _4=[...g4,...P4],d2=$.FontAwesomeConfig||{};function q4(c){var l=N.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function W4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l,a=W4(q4(s));a!=null&&(d2[e]=a)});var E3={styleDefault:"solid",familyDefault:"classic",cssPrefix:k3,replacementClass:v3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d2.familyPrefix&&(d2.cssPrefix=d2.familyPrefix);var z2=m(m({},E3),d2);z2.autoReplaceSvg||(z2.observeMutations=!1);var p={};Object.keys(E3).forEach(c=>{Object.defineProperty(p,c,{enumerable:!0,set:function(l){z2[c]=l,u2.forEach(s=>s(p))},get:function(){return z2[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){z2.cssPrefix=c,u2.forEach(l=>l(p))},get:function(){return z2.cssPrefix}});$.FontAwesomeConfig=p;var u2=[];function G4(c){return u2.push(c),()=>{u2.splice(u2.indexOf(c),1)}}var Y=l1,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V4(c){if(!c||!W)return;let l=N.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=N.head.childNodes,e=null;for(let a=s.length-1;a>-1;a--){let n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return N.head.insertBefore(l,e),c}var Y4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x2(){let c=12,l="";for(;c-- >0;)l+=Y4[Math.random()*62|0];return l}function L2(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function g1(c){return c.classList?L2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function D3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(D3(c[s]),'" '),"").trim()}function E2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function x1(c){return c.size!==O.size||c.x!==O.x||c.y!==O.y||c.rotate!==O.rotate||c.flipX||c.flipY}function $4(c){let{transform:l,containerWidth:s,iconWidth:e}=c,a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(r)},L={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:z,path:L}}function K4(c){let{transform:l,width:s=l1,height:e=l1,startCentered:a=!1}=c,n="";return a&&b3?n+="translate(".concat(l.x/Y-s/2,"em, ").concat(l.y/Y-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/Y,"em), calc(-50% + ").concat(l.y/Y,"em)) "):n+="translate(".concat(l.x/Y,"em, ").concat(l.y/Y,"em) "),n+="scale(".concat(l.size/Y*(l.flipX?-1:1),", ").concat(l.size/Y*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Q4=`:root, :host {
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
}`;function B3(){let c=k3,l=v3,s=p.cssPrefix,e=p.replacementClass,a=Q4;if(s!==c||e!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(r,".".concat(e))}return a}var s3=!1;function Q2(){p.autoAddCss&&!s3&&(V4(B3()),s3=!0)}var J4={mixout(){return{dom:{css:B3,insertCss:Q2}}},hooks(){return{beforeDOMElementCreation(){Q2()},beforeI2svg(){Q2()}}}},q=$||{};q[_]||(q[_]={});q[_].styles||(q[_].styles={});q[_].hooks||(q[_].hooks={});q[_].shims||(q[_].shims=[]);var I=q[_],O3=[],I3=function(){N.removeEventListener("DOMContentLoaded",I3),T2=1,O3.map(c=>c())},T2=!1;W&&(T2=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),T2||N.addEventListener("DOMContentLoaded",I3));function Z4(c){W&&(T2?setTimeout(c,0):O3.push(c))}function N2(c){let{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?D3(c):"<".concat(l," ").concat(X4(s),">").concat(e.map(N2).join(""),"</").concat(l,">")}function e3(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var c0=function(l,s){return function(e,a,n,o){return l.call(s,e,a,n,o)}},J2=function(l,s,e,a){var n=Object.keys(l),o=n.length,r=a!==void 0?c0(s,a):s,z,L,M;for(e===void 0?(z=1,M=l[n[0]]):(z=0,M=e);z<o;z++)L=n[z],M=r(M,l[L],L,l);return M};function l0(c){let l=[],s=0,e=c.length;for(;s<e;){let a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function o1(c){let l=l0(c);return l.length===1?l[0].toString(16):null}function s0(c,l){let s=c.length,e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function a3(c){return Object.keys(c).reduce((l,s)=>{let e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function i1(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=s,a=a3(l);typeof I.hooks.addPack=="function"&&!e?I.hooks.addPack(c,a3(l)):I.styles[c]=m(m({},I.styles[c]||{}),a),c==="fas"&&i1("fa",l)}var{styles:c2,shims:e0}=I,a0={[b]:Object.values(s2[b]),[A]:Object.values(s2[A]),[P]:Object.values(s2[P])},h1=null,H3={},R3={},j3={},U3={},_3={},n0={[b]:Object.keys(l2[b]),[A]:Object.keys(l2[A]),[P]:Object.keys(l2[P])};function o0(c){return~_4.indexOf(c)}function i0(c,l){let s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!o0(a)?a:null}var q3=()=>{let c=e=>J2(c2,(a,n,o)=>(a[o]=J2(n,e,{}),a),{});H3=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(r=>typeof r=="number").forEach(r=>{e[r.toString(16)]=n}),e)),R3=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(r=>typeof r=="string").forEach(r=>{e[r]=n}),e)),_3=c((e,a,n)=>{let o=a[2];return e[n]=n,o.forEach(r=>{e[r]=n}),e});let l="far"in c2||p.autoFetchSvg,s=J2(e0,(e,a)=>{let n=a[0],o=a[1],r=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:r}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:r}),e},{names:{},unicodes:{}});j3=s.names,U3=s.unicodes,h1=D2(p.styleDefault,{family:p.familyDefault})};G4(c=>{h1=D2(c.styleDefault,{family:p.familyDefault})});q3();function N1(c,l){return(H3[c]||{})[l]}function t0(c,l){return(R3[c]||{})[l]}function X(c,l){return(_3[c]||{})[l]}function W3(c){return j3[c]||{prefix:null,iconName:null}}function r0(c){let l=U3[c],s=N1("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function K(){return h1}var b1=()=>({prefix:null,iconName:null,rest:[]});function D2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=b}=l,e=l2[s][c],a=g2[s][c]||g2[s][e],n=c in I.styles?c:null;return a||n||null}var f0={[b]:Object.keys(s2[b]),[A]:Object.keys(s2[A]),[P]:Object.keys(s2[P])};function B2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,e={[b]:"".concat(p.cssPrefix,"-").concat(b),[A]:"".concat(p.cssPrefix,"-").concat(A),[P]:"".concat(p.cssPrefix,"-").concat(P)},a=null,n=b,o=d4.filter(z=>z!==S3);o.forEach(z=>{(c.includes(e[z])||c.some(L=>f0[z].includes(L)))&&(n=z)});let r=c.reduce((z,L)=>{let M=i0(p.cssPrefix,L);if(c2[L]?(L=a0[n].includes(L)?I4[n][L]:L,a=L,z.prefix=L):n0[n].indexOf(L)>-1?(a=L,z.prefix=D2(L,{family:n})):M?z.iconName=M:L!==p.replacementClass&&!o.some(h=>L===e[h])&&z.rest.push(L),!s&&z.prefix&&z.iconName){let h=a==="fa"?W3(z.iconName):{},u=X(z.prefix,z.iconName);h.prefix&&(a=null),z.iconName=h.iconName||u||z.iconName,z.prefix=h.prefix||z.prefix,z.prefix==="far"&&!c2.far&&c2.fas&&!p.autoFetchSvg&&(z.prefix="fas")}return z},b1());return(c.includes("fa-brands")||c.includes("fab"))&&(r.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(r.prefix="fad"),!r.prefix&&n===A&&(c2.fass||p.autoFetchSvg)&&(r.prefix="fass",r.iconName=X(r.prefix,r.iconName)||r.iconName),!r.prefix&&n===P&&(c2.fasds||p.autoFetchSvg)&&(r.prefix="fasds",r.iconName=X(r.prefix,r.iconName)||r.iconName),(r.prefix==="fa"||a==="fa")&&(r.prefix=K()||"fas"),r}var t1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];let a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=m(m({},this.definitions[n]||{}),a[n]),i1(n,a[n]);let o=s2[b][n];o&&i1(o,a[n]),q3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{let{prefix:n,iconName:o,icon:r}=e[a],z=r[2];l[n]||(l[n]={}),z.length>0&&z.forEach(L=>{typeof L=="string"&&(l[n][L]=r)}),l[n][o]=r}),l}},n3=[],r2={},f2={},m0=Object.keys(f2);function z0(c,l){let{mixoutsTo:s}=l;return n3=c,r2={},Object.keys(f2).forEach(e=>{m0.indexOf(e)===-1&&delete f2[e]}),n3.forEach(e=>{let a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(o=>{r2[o]||(r2[o]=[]),r2[o].push(n[o])})}e.provides&&e.provides(f2)}),s}function r1(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(r2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function a2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(r2[c]||[]).forEach(n=>{n.apply(null,s)})}function Q(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return f2[c]?f2[c].apply(null,l):void 0}function f1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||K();if(l)return l=X(s,l)||l,e3(G3.definitions,s,l)||e3(I.styles,s,l)}var G3=new t1,L0=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,a2("noAuto")},p0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(a2("beforeI2svg",c),Q("pseudoElements2svg",c),Q("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Z4(()=>{C0({autoReplaceSvgRoot:l}),a2("watch",c)})}},M0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:X(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=D2(c[0]);return{prefix:s,iconName:X(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(H4))){let l=B2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||K(),iconName:X(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=K();return{prefix:l,iconName:X(l,c)||c}}}},T={noAuto:L0,config:p,dom:p0,parse:M0,library:G3,findIconDefinition:f1,toHtml:N2},C0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=N}=c;(Object.keys(I.styles).length>0||p.autoFetchSvg)&&W&&p.autoReplaceSvg&&T.dom.i2svg({node:l})};function O2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>N2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!W)return;let s=N.createElement("div");return s.innerHTML=c.html,s.children}}),c}function d0(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(x1(o)&&s.found&&!e.found){let{width:r,height:z}=s,L={x:r/z/2,y:.5};a.style=E2(w(m({},n),{"transform-origin":"".concat(L.x+o.x/16,"em ").concat(L.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:l}]}function u0(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(p.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(m({},a),{id:o}),children:e}]}]}function S1(c){let{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:r,maskId:z,titleId:L,extra:M,watchable:h=!1}=c,{width:u,height:k}=s.found?s:l,G=e==="fak",J=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(o2=>M.classes.indexOf(o2)===-1).filter(o2=>o2!==""||!!o2).concat(M.classes).join(" "),D={children:[],attributes:w(m({},M.attributes),{"data-prefix":e,"data-icon":a,class:J,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(k)})},R=G&&!~M.classes.indexOf("fa-fw")?{width:"".concat(u/k*16*.0625,"em")}:{};h&&(D.attributes[e2]=""),r&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(L||x2())},children:[r]}),delete D.attributes.title);let v=w(m({},D),{prefix:e,iconName:a,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:m(m({},R),M.styles)}),{children:B,attributes:n2}=s.found&&l.found?Q("generateAbstractMask",v)||{children:[],attributes:{}}:Q("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=B,v.attributes=n2,o?u0(v):d0(v)}function o3(c){let{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:r=!1}=c,z=w(m(m({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});r&&(z[e2]="");let L=m({},o.styles);x1(a)&&(L.transform=K4({transform:a,startCentered:!0,width:s,height:e}),L["-webkit-transform"]=L.transform);let M=E2(L);M.length>0&&(z.style=M);let h=[];return h.push({tag:"span",attributes:z,children:[l]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}function g0(c){let{content:l,title:s,extra:e}=c,a=w(m(m({},e.attributes),s?{title:s}:{}),{class:e.classes.join(" ")}),n=E2(e.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:Z2}=I;function m1(c){let l=c[0],s=c[1],[e]=c.slice(4),a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(K2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(K2.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(K2.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}var x0={found:!1,width:512,height:512};function h0(c,l){!A3&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function z1(c,l){let s=l;return l==="fa"&&p.styleDefault!==null&&(l=K()),new Promise((e,a)=>{if(s==="fa"){let n=W3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&Z2[l]&&Z2[l][c]){let n=Z2[l][c];return e(m1(n))}h0(c,l),e(w(m({},x0),{icon:p.showMissingIcons&&c?Q("missingIconAbstract")||{}:{}}))})}var i3=()=>{},L1=p.measurePerformance&&v2&&v2.mark&&v2.measure?v2:{mark:i3,measure:i3},C2='FA "6.6.0"',N0=c=>(L1.mark("".concat(C2," ").concat(c," begins")),()=>V3(c)),V3=c=>{L1.mark("".concat(C2," ").concat(c," ends")),L1.measure("".concat(C2," ").concat(c),"".concat(C2," ").concat(c," begins"),"".concat(C2," ").concat(c," ends"))},w1={begin:N0,end:V3},A2=()=>{};function t3(c){return typeof(c.getAttribute?c.getAttribute(e2):null)=="string"}function b0(c){let l=c.getAttribute?c.getAttribute(d1):null,s=c.getAttribute?c.getAttribute(u1):null;return l&&s}function S0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function w0(){return p.autoReplaceSvg===!0?P2.replace:P2[p.autoReplaceSvg]||P2.replace}function y0(c){return N.createElementNS("http://www.w3.org/2000/svg",c)}function k0(c){return N.createElement(c)}function Y3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?y0:k0}=l;if(typeof c=="string")return N.createTextNode(c);let e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(Y3(n,{ceFn:s}))}),e}function v0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var P2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(Y3(s),l)}),l.getAttribute(e2)===null&&p.keepOriginalSource){let s=N.createComment(v0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~g1(l).indexOf(p.replacementClass))return P2.replace(c);let e=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,r)=>(r===p.replacementClass||r.match(e)?o.toSvg.push(r):o.toNode.push(r),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let a=s.map(n=>N2(n)).join(`
`);l.setAttribute(e2,""),l.innerHTML=a}};function r3(c){c()}function X3(c,l){let s=typeof l=="function"?l:A2;if(c.length===0)s();else{let e=r3;p.mutateApproach===B4&&(e=$.requestAnimationFrame||r3),e(()=>{let a=w0(),n=w1.begin("mutate");c.map(a),n(),s()})}}var y1=!1;function $3(){y1=!0}function p1(){y1=!1}var F2=null;function f3(c){if(!J1||!p.observeMutations)return;let{treeCallback:l=A2,nodeCallback:s=A2,pseudoElementsCallback:e=A2,observeMutationsRoot:a=N}=c;F2=new J1(n=>{if(y1)return;let o=K();L2(n).forEach(r=>{if(r.type==="childList"&&r.addedNodes.length>0&&!t3(r.addedNodes[0])&&(p.searchPseudoElements&&e(r.target),l(r.target)),r.type==="attributes"&&r.target.parentNode&&p.searchPseudoElements&&e(r.target.parentNode),r.type==="attributes"&&t3(r.target)&&~U4.indexOf(r.attributeName))if(r.attributeName==="class"&&b0(r.target)){let{prefix:z,iconName:L}=B2(g1(r.target));r.target.setAttribute(d1,z||o),L&&r.target.setAttribute(u1,L)}else S0(r.target)&&s(r.target)})}),W&&F2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function A0(){F2&&F2.disconnect()}function P0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((e,a)=>{let n=a.split(":"),o=n[0],r=n.slice(1);return o&&r.length>0&&(e[o]=r.join(":").trim()),e},{})),s}function T0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",a=B2(g1(c));return a.prefix||(a.prefix=K()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=t0(a.prefix,c.innerText)||N1(a.prefix,o1(c.innerText))),!a.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function F0(c){let l=L2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return p.autoA11y&&(s?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||x2()):(l["aria-hidden"]="true",l.focusable="false")),l}function E0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:e,rest:a}=T0(c),n=F0(c),o=r1("parseNodeAttributes",{},c),r=l.styleParser?P0(c):[];return m({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:r,attributes:n}},o)}var{styles:D0}=I;function K3(c){let l=p.autoReplaceSvg==="nest"?m3(c,{styleParser:!1}):m3(c);return~l.extra.classes.indexOf(F3)?Q("generateLayersText",c,l):Q("generateSvgReplacementMutation",c,l)}var H=new Set;P3.map(c=>{H.add("fa-".concat(c))});Object.keys(l2[b]).map(H.add.bind(H));Object.keys(l2[A]).map(H.add.bind(H));Object.keys(l2[P]).map(H.add.bind(H));H=[...H];function z3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();let s=N.documentElement.classList,e=M=>s.add("".concat(l3,"-").concat(M)),a=M=>s.remove("".concat(l3,"-").concat(M)),n=p.autoFetchSvg?H:P3.map(M=>"fa-".concat(M)).concat(Object.keys(D0));n.includes("fa")||n.push("fa");let o=[".".concat(F3,":not([").concat(e2,"])")].concat(n.map(M=>".".concat(M,":not([").concat(e2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let r=[];try{r=L2(c.querySelectorAll(o))}catch{}if(r.length>0)e("pending"),a("complete");else return Promise.resolve();let z=w1.begin("onTree"),L=r.reduce((M,h)=>{try{let u=K3(h);u&&M.push(u)}catch(u){A3||u.name==="MissingIcon"&&console.error(u)}return M},[]);return new Promise((M,h)=>{Promise.all(L).then(u=>{X3(u,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),z(),M()})}).catch(u=>{z(),h(u)})})}function B0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K3(c).then(s=>{s&&X3([s],l)})}function O0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:f1(l||{}),{mask:a}=s;return a&&(a=(a||{}).icon?a:f1(a||{})),c(e,w(m({},s),{mask:a}))}}var I0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=O,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:r=null,classes:z=[],attributes:L={},styles:M={}}=l;if(!c)return;let{prefix:h,iconName:u,icon:k}=c;return O2(m({type:"icon"},c),()=>(a2("beforeDOMElementCreation",{iconDefinition:c,params:l}),p.autoA11y&&(o?L["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||x2()):(L["aria-hidden"]="true",L.focusable="false")),S1({icons:{main:m1(k),mask:a?m1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:u,transform:m(m({},O),s),symbol:e,title:o,maskId:n,titleId:r,extra:{attributes:L,styles:M,classes:z}})))},H0={mixout(){return{icon:O0(I0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=z3,c.nodeCallback=B0,c}}},provides(c){c.i2svg=function(l){let{node:s=N,callback:e=()=>{}}=l;return z3(s,e)},c.generateSvgReplacementMutation=function(l,s){let{iconName:e,title:a,titleId:n,prefix:o,transform:r,symbol:z,mask:L,maskId:M,extra:h}=s;return new Promise((u,k)=>{Promise.all([z1(e,o),L.iconName?z1(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(G=>{let[J,D]=G;u([l,S1({icons:{main:J,mask:D},prefix:o,iconName:e,transform:r,symbol:z,maskId:M,title:a,titleId:n,extra:h,watchable:!0})])}).catch(k)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l,r=E2(o);r.length>0&&(e.style=r);let z;return x1(n)&&(z=Q("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(z||a.icon),{children:s,attributes:e}}}},R0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return O2({type:"layer"},()=>{a2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},j0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return O2({type:"counter",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),g0({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(p.cssPrefix,"-layers-counter"),...e]}})))}}}},U0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=O,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return O2({type:"text",content:c},()=>(a2("beforeDOMElementCreation",{content:c,params:l}),o3({content:c,transform:m(m({},O),s),title:e,extra:{attributes:n,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:e,transform:a,extra:n}=s,o=null,r=null;if(b3){let z=parseInt(getComputedStyle(l).fontSize,10),L=l.getBoundingClientRect();o=L.width/z,r=L.height/z}return p.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,o3({content:l.innerHTML,width:o,height:r,transform:a,title:e,extra:n,watchable:!0})])}}},_0=new RegExp('"',"ug"),L3=[1105920,1112319],p3=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},b4),N4),T4),M1=Object.keys(p3).reduce((c,l)=>(c[l.toLowerCase()]=p3[l],c),{}),q0=Object.keys(M1).reduce((c,l)=>{let s=M1[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function W0(c){let l=c.replace(_0,""),s=s0(l,0),e=s>=L3[0]&&s<=L3[1],a=l.length===2?l[0]===l[1]:!1;return{value:o1(a?l[0]:l),isSecondary:e||a}}function G0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(M1[s]||{})[a]||q0[s]}function M3(c,l){let s="".concat(D4).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();let o=L2(c.children).filter(u=>u.getAttribute(s1)===l)[0],r=$.getComputedStyle(c,l),z=r.getPropertyValue("font-family"),L=z.match(R4),M=r.getPropertyValue("font-weight"),h=r.getPropertyValue("content");if(o&&!L)return c.removeChild(o),e();if(L&&h!=="none"&&h!==""){let u=r.getPropertyValue("content"),k=G0(z,M),{value:G,isSecondary:J}=W0(u),D=L[0].startsWith("FontAwesome"),R=N1(k,G),v=R;if(D){let B=r0(G);B.iconName&&B.prefix&&(R=B.iconName,k=B.prefix)}if(R&&!J&&(!o||o.getAttribute(d1)!==k||o.getAttribute(u1)!==v)){c.setAttribute(s,v),o&&c.removeChild(o);let B=E0(),{extra:n2}=B;n2.attributes[s1]=l,z1(R,k).then(o2=>{let M4=S1(w(m({},B),{icons:{main:o2,mask:b1()},prefix:k,iconName:v,extra:n2,watchable:!0})),$2=N.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore($2,c.firstChild):c.appendChild($2),$2.outerHTML=M4.map(C4=>N2(C4)).join(`
`),c.removeAttribute(s),e()}).catch(a)}else e()}else e()})}function V0(c){return Promise.all([M3(c,"::before"),M3(c,"::after")])}function Y0(c){return c.parentNode!==document.head&&!~O4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(s1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function C3(c){if(W)return new Promise((l,s)=>{let e=L2(c.querySelectorAll("*")).filter(Y0).map(V0),a=w1.begin("searchPseudoElements");$3(),Promise.all(e).then(()=>{a(),p1(),l()}).catch(()=>{a(),p1(),s()})})}var X0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=C3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=N}=l;p.searchPseudoElements&&C3(s)}}},d3=!1,$0={mixout(){return{dom:{unwatch(){$3(),d3=!0}}}},hooks(){return{bootstrap(){f3(r1("mutationObserverCallbacks",{}))},noAuto(){A0()},watch(c){let{observeMutationsRoot:l}=c;d3?p1():f3(r1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},u3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,e)=>{let a=e.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},K0={mixout(){return{parse:{transform:c=>u3(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=u3(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:e,containerWidth:a,iconWidth:n}=l,o={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),z="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),L="rotate(".concat(e.rotate," 0 0)"),M={transform:"".concat(r," ").concat(z," ").concat(L)},h={transform:"translate(".concat(n/2*-1," -256)")},u={outer:o,inner:M,path:h};return{tag:"g",attributes:m({},u.outer),children:[{tag:"g",attributes:m({},u.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:m(m({},s.icon.attributes),u.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function g3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function Q0(c){return c.tag==="g"?c.children:[c]}var J0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),e=s?B2(s.split(" ").map(a=>a.trim())):b1();return e.prefix||(e.prefix=K()),c.mask=e,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:e,main:a,mask:n,maskId:o,transform:r}=l,{width:z,icon:L}=a,{width:M,icon:h}=n,u=$4({transform:r,containerWidth:M,iconWidth:z}),k={tag:"rect",attributes:w(m({},c1),{fill:"white"})},G=L.children?{children:L.children.map(g3)}:{},J={tag:"g",attributes:m({},u.inner),children:[g3(m({tag:L.tag,attributes:m(m({},L.attributes),u.path)},G))]},D={tag:"g",attributes:m({},u.outer),children:[J]},R="mask-".concat(o||x2()),v="clip-".concat(o||x2()),B={tag:"mask",attributes:w(m({},c1),{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,D]},n2={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Q0(h)},B]};return s.push(n2,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(R,")")},c1)}),{children:s,attributes:e}}}},Z0={provides(c){let l=!1;$.matchMedia&&(l=$.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],e={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:w(m({},e),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=w(m({},a),{attributeName:"opacity"}),o={tag:"circle",attributes:w(m({},e),{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:w(m({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:w(m({},n),{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:w(m({},e),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:w(m({},n),{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:w(m({},e),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:w(m({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},c6={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),e=s===null?!1:s===""?!0:s;return c.symbol=e,c}}}},l6=[J4,H0,R0,j0,U0,X0,$0,K0,J0,Z0,c6];z0(l6,{mixoutsTo:T});var F6=T.noAuto,Q3=T.config,E6=T.library,J3=T.dom,Z3=T.parse,D6=T.findIconDefinition,B6=T.toHtml,c4=T.icon,O6=T.layer,s6=T.text,e6=T.counter;var a6=["*"],n6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},o6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},i6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},k1=new WeakSet,l4="fa-auto-css";function t6(c,l){if(!l.autoAddCss||k1.has(c))return;if(c.getElementById(l4)!=null){l.autoAddCss=!1,k1.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",l4),s.innerHTML=J3.css();let e=c.head.childNodes,a=null;for(let n=e.length-1;n>-1;n--){let o=e[n],r=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=o)}c.head.insertBefore(s,a),l.autoAddCss=!1,k1.add(c)}var r6=c=>c.prefix!==void 0&&c.iconName!==void 0,f6=(c,l)=>r6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},m6=(()=>{let l=class l{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){Q3.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=Z({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),z6=(()=>{let l=class l{constructor(){this.definitions={}}addIcons(...e){for(let a of e){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let n of a.icon[2])typeof n=="string"&&(this.definitions[a.prefix][n]=a)}}addIconPacks(...e){for(let a of e){let n=Object.keys(a).map(o=>a[o]);this.addIcons(...n)}}getIconDefinition(e,a){return e in this.definitions&&a in this.definitions[e]?this.definitions[e][a]:null}};l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=Z({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),L6=(()=>{let l=class l{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};l.\u0275fac=function(a){return new(a||l)},l.\u0275dir=T1({type:l,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[S2]});let c=l;return c})(),p6=(()=>{let l=class l{constructor(e,a){this.renderer=e,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};l.\u0275fac=function(a){return new(a||l)(F(D1),F(F1))},l.\u0275cmp=g({type:l,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[S2,x],ngContentSelectors:a6,decls:1,vars:0,template:function(a,n){a&1&&(I1(),H1(0))},encapsulation:2});let c=l;return c})(),s4=(()=>{let l=class l{constructor(e,a,n,o,r){this.sanitizer=e,this.config=a,this.iconLibrary=n,this.stackItem=o,this.document=A1(U1),r!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){o6();return}if(e){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let n=this.buildParams();t6(this.document,this.config);let o=c4(a,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(o.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let a=f6(e,this.config.defaultPrefix);if("icon"in a)return a;let n=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return n??(n6(a),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?Z3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:i6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};l.\u0275fac=function(a){return new(a||l)(F(G1),F(m6),F(z6),F(L6,8),F(p6,8))},l.\u0275cmp=g({type:l,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,n){a&2&&(O1("innerHTML",n.renderedIconHTML,E1),B1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[S2,x],decls:0,vars:0,template:function(a,n){},encapsulation:2});let c=l;return c})();var e4=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=P1({type:l}),l.\u0275inj=v1({});let c=l;return c})();var a4={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]};var n4={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var o4={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]};var C6={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},i4=C6;var t4={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"]};var r4={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]};var d6={prefix:"fas",iconName:"building-columns",icon:[512,512,["bank","institution","museum","university"],"f19c","M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};var f4=d6;var m4={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};var I2=class c{faGraduationCap=m4;faCode=n4;faLaptopCode=a4;faCubes=t4;faDatabase=r4;faChartLine=o4;faTools=i4;faUniversity=f4;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-about"]],standalone:!0,features:[x],decls:134,vars:9,consts:[["id","about",1,"d-flex","flex-column","justify-content-center","py-5","bg-light"],[1,"container","text-center","mb-5"],[1,"text-dark","fw-bold","text-uppercase","letter-spacing-2"],[1,"fas","fa-user-circle","me-2"],[1,"display-4","fw-bold","mb-3"],[1,"divider-custom","mx-auto"],[1,"divider-custom-line"],[1,"divider-custom-icon"],[1,"fas","fa-star"],[1,"container"],[1,"row","gy-4"],[1,"col-12"],[1,"card","border-0","shadow-sm","hover-lift"],[1,"card-body","p-4"],[1,"icon-box","icon-box-dark","mb-3"],[1,"text-dark",3,"icon"],[1,"h4","mb-4","text-center"],[1,"education-category"],[1,"education-category-title"],[1,"me-2",3,"icon"],[1,"education-details"],[1,"education-period"],[1,"education-school"],[1,"education-degree"],[1,"skill-category"],[1,"skill-category-title"],[1,"skill-pills"],[1,"skill-pill"]],template:function(s,e){s&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),C(3,"i",3),f(4,"Get to know more "),t(),i(5,"h2",4),f(6,"About me"),t(),i(7,"div",5),C(8,"div",6),i(9,"div",7),C(10,"i",8),t(),C(11,"div",6),t()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14),C(18,"fa-icon",15),t(),i(19,"h3",16),f(20,"Education"),t(),i(21,"div",17)(22,"div",18),C(23,"fa-icon",19),f(24," University Degrees "),t(),i(25,"div",20)(26,"div",21),f(27,"2020 - 2024"),t(),i(28,"div",22),f(29,"Master's Degree in Software Engineering"),t(),i(30,"div",23),f(31,"Specialization in AI and Machine Learning"),t()(),i(32,"div",20)(33,"div",21),f(34,"2015 - 2020"),t(),i(35,"div",22),f(36,"Bachelor's Degree in Software Engineering"),t()()()()()(),i(37,"div",11)(38,"div",12)(39,"div",13)(40,"div",14),C(41,"fa-icon",15),t(),i(42,"h3",16),f(43,"Skills"),t(),i(44,"div",24)(45,"div",25),C(46,"fa-icon",19),f(47," Programming Languages "),t(),i(48,"div",26)(49,"span",27),f(50,"Java"),t(),i(51,"span",27),f(52,"Python"),t(),i(53,"span",27),f(54,"Scala"),t(),i(55,"span",27),f(56,"C"),t()()(),i(57,"div",24)(58,"div",25),C(59,"fa-icon",19),f(60," Web Development "),t(),i(61,"div",26)(62,"span",27),f(63,"HTML"),t(),i(64,"span",27),f(65,"JavaScript"),t(),i(66,"span",27),f(67,"CSS"),t(),i(68,"span",27),f(69,"Angular"),t(),i(70,"span",27),f(71,"Spring Boot"),t(),i(72,"span",27),f(73,"Django"),t(),i(74,"span",27),f(75,"Bootstrap"),t()()(),i(76,"div",24)(77,"div",25),C(78,"fa-icon",19),f(79," Machine Learning & Big Data "),t(),i(80,"div",26)(81,"span",27),f(82,"Apache Spark"),t(),i(83,"span",27),f(84,"TensorFlow"),t(),i(85,"span",27),f(86,"PyTorch"),t(),i(87,"span",27),f(88,"Scikit-learn"),t(),i(89,"span",27),f(90,"Hadoop"),t()()(),i(91,"div",24)(92,"div",25),C(93,"fa-icon",19),f(94," Databases "),t(),i(95,"div",26)(96,"span",27),f(97,"PostgreSQL"),t(),i(98,"span",27),f(99,"MySQL"),t(),i(100,"span",27),f(101,"Amazon RDS"),t()()(),i(102,"div",24)(103,"div",25),C(104,"fa-icon",19),f(105," Data Analysis "),t(),i(106,"div",26)(107,"span",27),f(108,"Matplotlib"),t(),i(109,"span",27),f(110,"Seaborn"),t(),i(111,"span",27),f(112,"NumPy"),t(),i(113,"span",27),f(114,"Pandas"),t(),i(115,"span",27),f(116,"PENTAHO PDI"),t(),i(117,"span",27),f(118,"Tableau"),t()()(),i(119,"div",24)(120,"div",25),C(121,"fa-icon",19),f(122," Other Tools "),t(),i(123,"div",26)(124,"span",27),f(125,"AWS"),t(),i(126,"span",27),f(127,"Arduino"),t(),i(128,"span",27),f(129,"Git"),t(),i(130,"span",27),f(131,"Docker"),t(),i(132,"span",27),f(133,"Linux"),t()()()()()()()()()),s&2&&(d(18),S("icon",e.faGraduationCap),d(5),S("icon",e.faUniversity),d(18),S("icon",e.faCode),d(5),S("icon",e.faCode),d(13),S("icon",e.faLaptopCode),d(19),S("icon",e.faCubes),d(15),S("icon",e.faDatabase),d(11),S("icon",e.faChartLine),d(17),S("icon",e.faTools))},dependencies:[e4,s4],styles:[".letter-spacing-2[_ngcontent-%COMP%]{letter-spacing:2px}.divider-custom[_ngcontent-%COMP%]{width:100%;max-width:7rem;height:.25rem;padding:0;display:flex;align-items:center;margin:1.25rem 0}.divider-custom[_ngcontent-%COMP%]   .divider-custom-line[_ngcontent-%COMP%]{width:100%;height:.25rem;background-color:#212529;border-radius:1rem;opacity:.3}.divider-custom[_ngcontent-%COMP%]   .divider-custom-icon[_ngcontent-%COMP%]{padding:0 1rem;color:#212529;font-size:1rem}.transform-diagonal[_ngcontent-%COMP%]{transform:rotate(-3deg)}.hover-lift[_ngcontent-%COMP%]{transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.hover-lift[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 .5rem 1rem #00000026!important}.icon-box[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto}.icon-box-dark[_ngcontent-%COMP%]{background-color:#2125291a}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.75rem;font-size:.95rem;display:flex;align-items:center;padding:.5rem;border-radius:.25rem;transition:background-color .2s ease-in-out}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#2125290d}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.skill-category[_ngcontent-%COMP%]{margin-bottom:1.5rem;max-width:800px;margin-left:auto;margin-right:auto}.skill-category-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:.75rem;color:#212529;display:flex;align-items:center}.skill-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.skill-pill[_ngcontent-%COMP%]{background-color:#2125290d;padding:.35rem .75rem;border-radius:1rem;font-size:.85rem;color:#495057;transition:all .2s ease-in-out}.skill-pill[_ngcontent-%COMP%]:hover{background-color:#2125291a;transform:translateY(-2px)}.skills-card[_ngcontent-%COMP%]{height:auto!important}.education-category[_ngcontent-%COMP%]{margin-bottom:1.5rem;text-align:left;max-width:800px;margin-left:auto;margin-right:auto}.education-category-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:.75rem;color:#212529;display:flex;align-items:center}.education-details[_ngcontent-%COMP%]{background-color:#2125290d;padding:1rem;border-radius:.5rem;margin-bottom:.75rem;transition:all .2s ease-in-out}.education-details[_ngcontent-%COMP%]:hover{background-color:#2125291a;transform:translateY(-2px)}.education-period[_ngcontent-%COMP%]{font-size:.85rem;color:#6c757d;margin-bottom:.25rem}.education-school[_ngcontent-%COMP%]{font-weight:600;margin-bottom:.25rem}.education-degree[_ngcontent-%COMP%]{font-size:.9rem;color:#495057}"]})};var p2=class c{badgeText="Badge Text";static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-custom-badge"]],inputs:{badgeText:"badgeText"},standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"tag"]],template:function(s,e){s&1&&(i(0,"span",0),f(1),t()),s&2&&(d(),U(e.badgeText))},styles:[".tag[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;font-size:14px;text-decoration:none;white-space:nowrap}.tag[_ngcontent-%COMP%]:hover{background-color:#424242;cursor:pointer}"]})};function u6(c,l){if(c&1&&C(0,"app-custom-badge",9),c&2){let s=l.$implicit;S("badgeText",s)}}var H2=class c{projectTitle="Project 1";projectDescription="Description 1";projectImageUrl="https://placehold.co/300x300/orange/white";projectUrl="https://www.google.com";projectTags=["Tag 1","Tag 2","Tag 3"];static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-project-content"]],inputs:{projectTitle:"projectTitle",projectDescription:"projectDescription",projectImageUrl:"projectImageUrl",projectUrl:"projectUrl",projectTags:"projectTags"},standalone:!0,features:[x],decls:12,vars:5,consts:[[1,"container","d-flex","gap-2","my-2"],[1,"card","custom-width","scroll-reveal-down"],["alt","Project image","width","300px","height","300px",1,"card-img-top",3,"src"],[1,"m-2","d-flex","flex-row","flex-wrap","gap-1"],[3,"badgeText",4,"ngFor","ngForOf"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"card-text"],[1,"btn","btn-dark",3,"href"],[3,"badgeText"]],template:function(s,e){s&1&&(i(0,"div",0)(1,"div",1),C(2,"img",2),i(3,"div",3),j(4,u6,1,1,"app-custom-badge",4),t(),i(5,"div",5)(6,"h5",6),f(7),t(),i(8,"p",7),f(9),t(),i(10,"a",8),f(11,"Go to project"),t()()()()),s&2&&(d(2),t2("src",e.projectImageUrl,i2),d(2),S("ngForOf",e.projectTags),d(3),U(e.projectTitle),d(2),U(e.projectDescription),d(),t2("href",e.projectUrl,i2))},dependencies:[p2,V],styles:["img[_ngcontent-%COMP%]{object-fit:cover}.card[_ngcontent-%COMP%]{transition:transform .4s ease-in-out,box-shadow .4s ease-in-out}.card[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 15px #0003}.card-img-top[_ngcontent-%COMP%]{transition:transform .5s ease-in-out}.card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]{font-weight:700;color:#000}.card[_ngcontent-%COMP%]:hover   .card-text[_ngcontent-%COMP%]{color:#333}.custom-width[_ngcontent-%COMP%]{width:20rem}@media (max-width: 576px){.custom-width[_ngcontent-%COMP%]{width:100%}}@keyframes _ngcontent-%COMP%_appear-down{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}.scroll-reveal-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appear-down linear;animation-timeline:view();animation-range:entry 0% cover 40%}"]})};var R2=class c{constructor(l){this.http=l}BASE_URL="https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/projects";getProjects(){return this.http.get(`${this.BASE_URL}/data.json`)}static \u0275fac=function(s){return new(s||c)(b2(w2))};static \u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"})};function h6(c,l){if(c&1&&(i(0,"div"),C(1,"app-project-content",5),t()),c&2){let s=l.$implicit;d(),S("projectTitle",s.projectTitle)("projectDescription",s.projectDescription)("projectImageUrl",s.projectImageUrl)("projectUrl",s.projectUrl)("projectTags",s.projectTags)}}var j2=class c{constructor(l){this.projectsService=l}projects=[];ngOnInit(){this.projectsService.getProjects().subscribe(l=>this.projects=l)}static \u0275fac=function(s){return new(s||c)(F(R2))};static \u0275cmp=g({type:c,selectors:[["app-projects-list"]],standalone:!0,features:[x],decls:5,vars:1,consts:[[1,"container","my-5"],[1,"row"],[1,"col","m-4"],[1,"d-flex","flex-wrap","justify-content-center","gap-2"],[4,"ngFor","ngForOf"],[3,"projectTitle","projectDescription","projectImageUrl","projectUrl","projectTags"]],template:function(s,e){s&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),j(4,h6,2,5,"div",4),t()()()()),s&2&&(d(4),S("ngForOf",e.projects))},dependencies:[H2,V]})};var U2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-projects"]],standalone:!0,features:[x],decls:7,vars:0,consts:[["id","projects",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"]],template:function(s,e){s&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),f(3,"See my"),t(),i(4,"p",3),f(5,"Projects"),t()(),C(6,"app-projects-list"),t())},dependencies:[j2]})};function N6(c,l){if(c&1&&C(0,"app-custom-badge",8),c&2){let s=l.$implicit;S("badgeText",s)}}function b6(c,l){if(c&1&&(i(0,"div",9),C(1,"img",10),i(2,"p",11),f(3),t()()),c&2){let s=l.$implicit;d(),t2("src",s.authorProfilePicture,i2),d(2),U(s.authorName)}}var _2=class c{publicationTitle="Paper Title";publicationTags=["Tag 1","Tag 2","Tag 3"];publicationPreviewImage="https://placehold.co/150x150";publicationDate="Aug 2024";publicationAuthors=[{authorName:"Author 1",authorProfilePicture:"https://placehold.co/25x25"},{authorName:"Author 2",authorProfilePicture:"https://placehold.co/25x25"},{authorName:"Author 3",authorProfilePicture:"https://placehold.co/25x25"}];constructor(){}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-publications-content"]],inputs:{publicationTitle:"publicationTitle",publicationTags:"publicationTags",publicationPreviewImage:"publicationPreviewImage",publicationDate:"publicationDate",publicationAuthors:"publicationAuthors"},standalone:!0,features:[x],decls:12,vars:5,consts:[[1,"publications-component","row","p-4","rounded-3","border","border-black","scroll-reveal-down"],[1,"col"],[1,"d-flex","flex-row","flex-wrap","gap-1"],[3,"badgeText",4,"ngFor","ngForOf"],[1,"d-flex","gap-2","flex-column","flex-md-row"],["class","d-flex gap-2",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center","justify-content-xl-end"],["alt","Paper preview image","width","500px","height","300px",1,"publication-image",3,"src"],[3,"badgeText"],[1,"d-flex","gap-2"],["alt","Author profile picture","height","25px","width","25px",1,"rounded-circle",3,"src"],[1,""]],template:function(s,e){s&1&&(i(0,"div",0)(1,"div",1)(2,"h5"),f(3),t(),i(4,"div",2),j(5,N6,1,1,"app-custom-badge",3),t(),i(6,"p"),f(7),t(),i(8,"div",4),j(9,b6,4,2,"div",5),t()(),i(10,"div",6),C(11,"img",7),t()()),s&2&&(d(3),U(e.publicationTitle),d(2),S("ngForOf",e.publicationTags),d(2),U(e.publicationDate),d(2),S("ngForOf",e.publicationAuthors),d(2),t2("src",e.publicationPreviewImage,i2))},dependencies:[p2,V],styles:["img[_ngcontent-%COMP%]{object-fit:cover}.publications-component[_ngcontent-%COMP%]{transition:transform .4s ease-in-out,box-shadow .4s ease-in-out}.publications-component[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 15px #0003}@media (max-width: 576px){.publication-image[_ngcontent-%COMP%]{width:320px}.publications-component[_ngcontent-%COMP%]{width:370px}}@keyframes _ngcontent-%COMP%_appear-down{0%{opacity:0;transform:translateY(100px)}to{opacity:1;transform:translateY(0)}}.scroll-reveal-down[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appear-down linear;animation-timeline:view();animation-range:entry 0% cover 40%}"]})};var q2=class c{constructor(l){this.http=l}BASE_URL="https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/publications";getPublications(){return this.http.get(`${this.BASE_URL}/data.json`)}static \u0275fac=function(s){return new(s||c)(b2(w2))};static \u0275prov=Z({token:c,factory:c.\u0275fac,providedIn:"root"})};function w6(c,l){if(c&1&&C(0,"app-publications-content",2),c&2){let s=l.$implicit;S("publicationTitle",s.publicationTitle)("publicationTags",s.publicationTags)("publicationPreviewImage",s.publicationPreviewImage)("publicationDate",s.publicationDate)("publicationAuthors",s.publicationAuthors)}}var W2=class c{constructor(l){this.publicationsService=l}publications=[];ngOnInit(){this.publicationsService.getPublications().subscribe(l=>{this.publications=l})}static \u0275fac=function(s){return new(s||c)(F(q2))};static \u0275cmp=g({type:c,selectors:[["app-publications-list"]],standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"container","my-5","d-flex","flex-column","justify-content-center","align-items-center","gap-3"],[3,"publicationTitle","publicationTags","publicationPreviewImage","publicationDate","publicationAuthors",4,"ngFor","ngForOf"],[3,"publicationTitle","publicationTags","publicationPreviewImage","publicationDate","publicationAuthors"]],template:function(s,e){s&1&&(i(0,"div",0),j(1,w6,1,5,"app-publications-content",1),t()),s&2&&(d(),S("ngForOf",e.publications))},dependencies:[_2,V]})};var G2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-publications"]],standalone:!0,features:[x],decls:7,vars:0,consts:[["id","publications",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"]],template:function(s,e){s&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),f(3,"Read my"),t(),i(4,"p",3),f(5,"Publications"),t()(),C(6,"app-publications-list"),t())},dependencies:[W2]})};var V2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-contact"]],standalone:!0,features:[x],decls:16,vars:0,consts:[["id","contact",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"container","d-flex","justify-content-center","gap-4"],[1,"d-flex","gap-4","border","border-black","rounded-4","px-3","px-sm-5","py-3"],[1,"d-flex","align-items-center","gap-2"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/email.png","alt","Email picture","width","60px","height","60px",1,"rounded-4"],["href","mailto:aleandro.presta@outlook.com",1,"m-0","text-black","link-dark","link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin picture","height","50px","width","50px",1,"rounded-4"],["href","https://www.linkedin.com/in/aleandro-presta-6523471b9/",1,"m-0","text-black","link-dark","link-offset-2","link-offset-3-hover","link-underline","link-underline-opacity-0","link-underline-opacity-75-hover"]],template:function(s,e){s&1&&(i(0,"section",0)(1,"div",1)(2,"p",2),f(3,"Get in touch"),t(),i(4,"p",3),f(5,"Contact me"),t()(),i(6,"div",4)(7,"div",5)(8,"div",6),C(9,"img",7),i(10,"a",8),f(11," Email "),t()(),i(12,"div",6),C(13,"img",9),i(14,"a",10),f(15," Linkedin "),t()()()()())},styles:["a[_ngcontent-%COMP%]{cursor:pointer}"]})};var Y2=class c{static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-footer"]],standalone:!0,features:[x],decls:17,vars:0,consts:[[1,"container"],[1,"py-3","my-4"],[1,"nav","nav-underline","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#about",1,"nav-link","px-2","text-black"],["href","#projects",1,"nav-link","px-2","text-black"],["href","#publications",1,"nav-link","px-2","text-black"],["href","#contact",1,"nav-link","px-2","text-black"],[1,"text-center","text-body-secondary"]],template:function(s,e){s&1&&(i(0,"div",0)(1,"footer",1)(2,"ul",2)(3,"li",3)(4,"a",4),f(5,"About"),t()(),i(6,"li",3)(7,"a",5),f(8,"Projects"),t()(),i(9,"li",3)(10,"a",6),f(11,"Publications"),t()(),i(12,"li",3)(13,"a",7),f(14,"Contact"),t()()(),i(15,"p",8),f(16,"\xA9 2024 Aleandro Presta"),t()()())}})};var X2=class c{title="portfolio-deploy";static \u0275fac=function(s){return new(s||c)};static \u0275cmp=g({type:c,selectors:[["app-root"]],standalone:!0,features:[x],decls:11,vars:0,consts:[[1,"main"]],template:function(s,e){s&1&&(i(0,"header"),C(1,"app-navigation"),t(),i(2,"main",0),C(3,"app-profile")(4,"app-about")(5,"app-projects")(6,"app-publications")(7,"app-contact"),t(),i(8,"footer"),C(9,"app-footer"),t(),C(10,"router-outlet"))},dependencies:[X1,y2,k2,I2,U2,G2,V2,Y2]})};var z4=[];var L4={providers:[R1({eventCoalescing:!0}),$1(z4),V1(),_1(q1())]};var y6={providers:[Y1()]},p4=j1(L4,y6);var k6=()=>W1(X2,p4),Y8=k6;export{Y8 as a};
