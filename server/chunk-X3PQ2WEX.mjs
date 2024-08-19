import './polyfills.server.mjs';
import{A as j,B as T,C as O,F as H,L as _,a as w,b as E,c as l,d as c,e as P,f as h,g as f,h as e,i as t,j as a,k as o,l as y,m as s,r as A,u as D,w as F,x as I,y as M,z as N}from"./chunk-VK4AGWRV.mjs";var u=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-navigation"]],standalone:!0,features:[s],decls:24,vars:0,consts:[[1,"container"],[1,"navbar","navbar-expand-md","border-bottom","py-3","mb-4"],[1,"container-fluid"],["href","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","justify-content-end"],[1,"navbar-nav","nav-underline","mb-2","mb-lg-0"],[1,"nav-item"],["href","browser/#about",1,"nav-link","text-black"],["href","browser/#skills",1,"nav-link","text-black"],["href","browser/#projects",1,"nav-link","text-black"],["href","browser/#publications",1,"nav-link","text-black"],["href","browser/#contact",1,"nav-link","text-black"]],template:function(n,p){n&1&&(e(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),o(4,"Aleandro Presta"),t(),e(5,"button",4),a(6,"span",5),t(),e(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),o(11,"About"),t()(),e(12,"li",8)(13,"a",10),o(14,"Skills"),t()(),e(15,"li",8)(16,"a",11),o(17,"Projects"),t()(),e(18,"li",8)(19,"a",12),o(20,"Publications"),t()(),e(21,"li",8)(22,"a",13),o(23,"Contact"),t()()()()()()())}})};var g=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-profile"]],standalone:!0,features:[s],decls:20,vars:0,consts:[[1,"profile-container","d-flex","justify-content-center","mb-5"],[1,"d-flex","flex-lg-row","flex-column","justify-content-center","align-items-center","gap-5"],[1,"d-flex"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic.png","alt","Profile Picture","width","350",1,"rounded-circle"],[1,"align-self-center","text-center","d-flex","flex-column","gap-3"],[1,"container"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"text-light-emphasis","fs-4","fw-bold"],[1,"container","d-flex","justify-content-center","gap-3"],["onclick","window.open('https://raw.githubusercontent.com/AleandroPresta/personal-portfolio-angular/main/app/src/assets/resume-aleandro-presta.pdf')",1,"btn","btn-outline-dark","rounded-pill","px-3","fw-bold"],["onclick","location.href='./#contact'",1,"btn","btn-dark","rounded-pill","px-3","py-3","fw-bold"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/linkedin.png","alt","Linkedin Profile","onclick","location.href='https://www.linkedin.com/in/aleandro-presta-6523471b9/'",1,"icon"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/github.png","alt","GitHub Profile","onclick","location.href='https://github.com/AleandroPresta'",1,"icon"]],template:function(n,p){n&1&&(e(0,"section",0)(1,"div",1)(2,"div",2),a(3,"img",3),t(),e(4,"div",4)(5,"div",5)(6,"p",6),o(7,"Hello, I'm"),t(),e(8,"p",7),o(9,"Aleandro Presta"),t(),e(10,"p",8),o(11,"Software Engineer"),t()(),e(12,"div",9)(13,"button",10),o(14," Download CV "),t(),e(15,"button",11),o(16," Contact Info "),t()(),e(17,"div",9),a(18,"img",12)(19,"img",13),t()()()())},styles:[".profile-container[_ngcontent-%COMP%]{height:80vh}.icon[_ngcontent-%COMP%]{cursor:pointer;height:2rem}"]})};var v=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-about"]],standalone:!0,features:[s],decls:22,vars:0,consts:[["id","about",1,"d-flex","flex-column","justify-content-center"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"],[1,"container","d-flex","flex-lg-row","flex-column","mt-5","gap-4"],[1,"container","d-flex","justify-content-center","align-items-center"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/profile-pic-2.png","alt","Second profile picture","width","400",1,"rounded-4"],[1,"container","d-flex","flex-md-row","flex-column","gap-5"],[1,"container","d-flex","flex-column","align-items-center","text-center","border","border-black","rounded-4","px-4"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/education.png","alt","Education icon","width","30px",1,"mt-5"],[1,"fw-bold","fs-5"],[1,"text-secondary"]],template:function(n,p){n&1&&(e(0,"section",0)(1,"div",1)(2,"p",2),o(3,"Get to know more"),t(),e(4,"p",3),o(5,"About me"),t()(),e(6,"div",4)(7,"div",5),a(8,"img",6),t(),e(9,"div",7)(10,"div",8),a(11,"img",9),e(12,"p",10),o(13,"Education"),t(),e(14,"p",11),o(15,"Master's Degree "),a(16,"br"),o(17," Computer Engineering"),t(),e(18,"p",11),o(19,"Bachelor's Degree "),a(20,"br"),o(21," Computer Engineering"),t()()()()())}})};var b=class i{skill="Angular";experience="Basic";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-skill-content"]],inputs:{skill:"skill",experience:"experience"},standalone:!0,features:[s],decls:7,vars:2,consts:[[1,"container","d-flex","gap-2","p-3"],["src","https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/portfolio-assets/checkmark.png","alt","Experience icon","height","40px"],[1,"d-flex","flex-column"],[1,"fw-bold","mb-0"],[1,"text-secondary"]],template:function(n,p){n&1&&(e(0,"div",0),a(1,"img",1),e(2,"div",2)(3,"p",3),o(4),t(),e(5,"p",4),o(6),t()()()),n&2&&(c(4),y(p.skill),c(2),y(p.experience))}})};var x=class i{constructor(r){this.http=r}getSkillSet1(){return this.http.get("https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/skills/1/data.json")}getSkillSet2(){return this.http.get("https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/skills/2/data.json")}static \u0275fac=function(n){return new(n||i)(E(I))};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function $(i,r){if(i&1&&(e(0,"div"),a(1,"app-skill-content",6),t()),i&2){let n=r.$implicit;c(),f("skill",n.name)("experience",n.experience)}}function V(i,r){if(i&1&&(e(0,"div"),a(1,"app-skill-content",6),t()),i&2){let n=r.$implicit;c(),f("skill",n.name)("experience",n.experience)}}var k=class i{constructor(r){this.skillService=r}skillset1=[];skillset2=[];ngOnInit(){this.skillService.getSkillSet1().subscribe(r=>{this.skillset1=r}),this.skillService.getSkillSet2().subscribe(r=>{this.skillset2=r})}static \u0275fac=function(n){return new(n||i)(P(x))};static \u0275cmp=l({type:i,selectors:[["app-skills-container"]],standalone:!0,features:[s],decls:12,vars:2,consts:[[1,"container","my-5"],[1,"row"],[1,"col","border","border-black","rounded-4","m-4"],[1,"text-center","my-5","text-secondary"],[1,"d-flex","flex-wrap","justify-content-start","justify-content-lg-center","gap-5"],[4,"ngFor","ngForOf"],[3,"skill","experience"]],template:function(n,p){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),o(4,"Web Development"),t(),e(5,"div",4),h(6,$,2,2,"div",5),t()(),e(7,"div",2)(8,"h2",3),o(9,"Machine Learning"),t(),e(10,"div",4),h(11,V,2,2,"div",5),t()()()()),n&2&&(c(6),f("ngForOf",p.skillset1),c(5),f("ngForOf",p.skillset2))},dependencies:[b,F,j]})};var S=class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-skills"]],standalone:!0,features:[s],decls:7,vars:0,consts:[["id","skills",1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"container","text-center"],[1,"text-secondary","fw-bold"],[1,"fs-1","fw-bold"]],template:function(n,p){n&1&&(e(0,"section",0)(1,"div",1)(2,"p",2),o(3,"Explore my"),t(),e(4,"p",3),o(5,"Skills"),t()(),a(6,"app-skills-container"),t())},dependencies:[k]})};var C=class i{title="portfolio-deploy";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["app-root"]],standalone:!0,features:[s],decls:6,vars:0,consts:[[1,"main"]],template:function(n,p){n&1&&(e(0,"header"),a(1,"app-navigation"),t(),e(2,"main",0),a(3,"app-profile")(4,"app-about")(5,"app-skills"),t())},dependencies:[u,g,v,S]})};var R=[];var B={providers:[A({eventCoalescing:!0}),_(R),O(),M(N())]};var W={providers:[H()]},G=D(B,W);var Z=()=>T(C,G),we=Z;export{we as a};
