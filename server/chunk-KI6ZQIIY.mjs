import './polyfills.server.mjs';
import{a as r,b as e,c as t,d as i,e as n,f as l,k as b,n as v,p as x,q as C,t as h,z as w}from"./chunk-IDWDXUCZ.mjs";var s=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=r({type:a,selectors:[["app-navigation"]],standalone:!0,features:[l],decls:24,vars:0,consts:[[1,"container"],[1,"navbar","navbar-expand-md","border-bottom","py-3","mb-4"],[1,"container-fluid"],["href","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","nav-underline","mb-2","mb-lg-0"],[1,"nav-item"],["href","browser/#about",1,"nav-link","text-black"],["href","browser/#skills",1,"nav-link","text-black"],["href","browser/#projects",1,"nav-link","text-black"],["href","browser/#publications",1,"nav-link","text-black"],["href","browser/#contact",1,"nav-link","text-black"]],template:function(o,f){o&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),n(4,"Aleandro Presta"),t(),e(5,"button",4),i(6,"span",5),t(),e(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),n(11,"About"),t()(),e(12,"li",8)(13,"a",10),n(14,"Skills"),t()(),e(15,"li",8)(16,"a",11),n(17,"Projects"),t()(),e(18,"li",8)(19,"a",12),n(20,"Publications"),t()(),e(21,"li",8)(22,"a",13),n(23,"Contact"),t()()()()()()())}})};var m=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=r({type:a,selectors:[["app-profile"]],standalone:!0,features:[l],decls:20,vars:0,consts:[[1,"profile-container","d-flex","justify-content-center","mb-5"],[1,"d-flex","flex-lg-row","flex-column","justify-content-center","align-items-center","gap-5"],[1,"d-flex"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic.png","alt","Profile Picture","width","350",1,"rounded-circle"],[1,"align-self-center","text-center","d-flex","flex-column","gap-3"],[1,"container"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"text-light-emphasis","fs-4","fw-bold"],[1,"container","d-flex","justify-content-center","gap-3"],["onclick","window.open('https://raw.githubusercontent.com/AleandroPresta/personal-portfolio-angular/main/app/src/assets/resume-aleandro-presta.pdf')",1,"btn","btn-outline-dark","rounded-pill","px-3","fw-bold"],["onclick","location.href='./#contact'",1,"btn","btn-dark","rounded-pill","px-3","py-3","fw-bold"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin Profile","onclick","location.href='https://www.linkedin.com/in/aleandro-presta-6523471b9/'",1,"icon"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/github.png","alt","GitHub Profile","onclick","location.href='https://github.com/AleandroPresta'",1,"icon"]],template:function(o,f){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2),i(3,"img",3),t(),e(4,"div",4)(5,"div",5)(6,"p",6),n(7,"Hello, I'm"),t(),e(8,"p",7),n(9,"Aleandro Presta"),t(),e(10,"p",8),n(11,"Software Engineer"),t()(),e(12,"div",9)(13,"button",10),n(14," Download CV "),t(),e(15,"button",11),n(16," Contact Info "),t()(),e(17,"div",9),i(18,"img",12)(19,"img",13),t()()()())},styles:[".profile-container[_ngcontent-%COMP%]{height:80vh}.icon[_ngcontent-%COMP%]{cursor:pointer;height:2rem}"]})};var c=class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=r({type:a,selectors:[["app-about"]],standalone:!0,features:[l],decls:22,vars:0,consts:[["id","about",1,"d-flex","flex-column","justify-content-center"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"container","d-flex","flex-lg-row","flex-column","mt-5","gap-4"],[1,"container","d-flex","justify-content-center","align-items-center"],["src","./assets/profile-pic-2.png","alt","Second profile picture","width","400",1,"rounded-4"],[1,"container","d-flex","flex-md-row","flex-column","gap-5"],[1,"container","d-flex","flex-column","align-items-center","text-center","border","border-black","rounded-4","px-4"],["src","./assets/education.png","alt","Education icon","width","30px",1,"mt-5"],[1,"fw-bold","fs-5"],[1,"text-secondary"]],template:function(o,f){o&1&&(e(0,"section",0)(1,"div",1)(2,"p",2),n(3,"Get to know more"),t(),e(4,"p",3),n(5,"About me"),t()(),e(6,"div",4)(7,"div",5),i(8,"img",6),t(),e(9,"div",7)(10,"div",8),i(11,"img",9),e(12,"p",10),n(13,"Education"),t(),e(14,"p",11),n(15,"Master's Degree "),i(16,"br"),n(17," Computer Engineering"),t(),e(18,"p",11),n(19,"Bachelor's Degree "),i(20,"br"),n(21," Computer Engineering"),t()()()()())}})};var d=class a{title="portfolio-deploy";static \u0275fac=function(o){return new(o||a)};static \u0275cmp=r({type:a,selectors:[["app-root"]],standalone:!0,features:[l],decls:5,vars:0,consts:[[1,"main"]],template:function(o,f){o&1&&(e(0,"header"),i(1,"app-navigation"),t(),e(2,"main",0),i(3,"app-profile")(4,"app-about"),t())},dependencies:[s,m,c]})};var S=[];var y={providers:[b({eventCoalescing:!0}),w(S),C()]};var k={providers:[h()]},E=v(y,k);var A=()=>x(d,E),U=A;export{U as a};
