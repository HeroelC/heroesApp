import{A as re,B as oe,C as ne,X as ae,Y as y,Z as se,c as B,e as S,g as P,h as q,i as z,m as W,n as C,o as $,p as J,q as K,r as f,s as Q,t as X,u as Y,v as Z,w as ee,x as te,z as ie}from"./chunk-ODWUONVW.js";import{Db as j,Gb as u,Hc as G,Ib as L,Sa as R,Sb as A,Tb as s,Ua as m,Ub as H,Va as c,_ as w,d as N,ha as M,ia as b,ja as U,kb as D,ob as l,pa as g,qa as v,tb as I,ub as V,vb as k,wb as T,xb as a,yb as o,zb as d}from"./chunk-J2U776I6.js";var x=class i{onInputChange(r){let e=r.target,t=e.value;t.length>0&&(e.value=t.charAt(0).toUpperCase()+t.slice(1))}constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=U({type:i,selectors:[["","appUpperFirstLetter",""]],hostBindings:function(e,t){e&1&&u("input",function(p){return t.onInputChange(p)})},standalone:!0})};function ue(i,r){if(i&1&&(a(0,"mat-option",14),s(1),o()),i&2){let e=r.$implicit;l("value",e.value),m(),H(e.description)}}var F=class i{constructor(r,e,t){this.heroesService=r;this.route=e;this.notification=t}heroe=null;form;loading=!1;types=[{value:"hero",description:"H\xE9roe"},{value:"villain",description:"Villano"}];ngOnInit(){this.form=new K({name:new f(this.heroe?.name??"",[C.required,C.minLength(2)]),description:new f(this.heroe?.description??""),power:new f(this.heroe?.power??null),img:new f(this.heroe?.img??"",[C.required]),type:new f(this.heroe?.type??null,[C.required])})}createOrUpdate(){this.form.valid?this.heroe?.id?this.update():this.create():this.notification.showWarning("Por favor, complete los campos requeridos")}back(){this.route.navigate(["/"])}create(){this.loading=!0,this.heroesService.create(this.form.value).subscribe({next:()=>{this.notification.showSuccess("Heroe creado correctamente"),this.loading=!1,this.route.navigate(["/"])},error:()=>{this.loading=!1,this.notification.showError("Error al crear el heroe")}})}update(){this.heroe?.id&&(this.loading=!0,this.heroesService.update(this.heroe.id,this.form.value).subscribe({next:()=>{this.notification.showSuccess("Heroe actualizado correctamente"),this.loading=!1,this.route.navigate(["/"])},error:()=>{this.loading=!1,this.notification.showError("Error al actualizar el heroe")}}))}onFileSelected(r){return N(this,null,function*(){let e=r.target;if(e.files&&e.files[0]){this.loading=!0;let t=e.files[0],n=new FileReader;n.onload=()=>{this.form.get("img")?.setValue(n.result),this.loading=!1},n.readAsDataURL(t)}})}openFileInput(r){r.click()}static \u0275fac=function(e){return new(e||i)(c(y),c(S),c(se))};static \u0275cmp=M({type:i,selectors:[["app-create-or-update-heroe"]],inputs:{heroe:"heroe"},decls:35,vars:5,consts:[["inputFile",""],[1,"border-form","p-20",3,"formGroup"],[1,"d-flex","form"],[1,"avatar-input"],[1,"text-center"],["onerror","this.onerror=null;this.src='default.png'",1,"img-preview",3,"src"],["mat-flat-button","",1,"m-w-120","m-l-8","form-input",3,"click","disabled"],["type","file","accept","image/*",1,"hidden",3,"change"],[1,"form-inputs-general"],["appearance","outline",1,"form-input"],["matInput","","formControlName","name","appUpperFirstLetter",""],["matInput","","formControlName","description"],["matInput","","formControlName","power"],["formControlName","type"],[3,"value"],[1,"w-100","m-t-40"],[1,"d-flex","justify-content-center"],["mat-stroked-button","",1,"m-w-120",3,"click","disabled"],["mat-flat-button","",1,"m-w-120","m-l-8",3,"click","disabled"]],template:function(e,t){if(e&1){let n=j();a(0,"form",1)(1,"div",2)(2,"div",3)(3,"figure",4),d(4,"img",5),o(),a(5,"div")(6,"button",6),u("click",function(){g(n);let h=A(9);return v(t.openFileInput(h))}),s(7,"* Seleccionar un avatar"),o()(),a(8,"input",7,0),u("change",function(h){return g(n),v(t.onFileSelected(h))}),o()(),a(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),s(13,"Nombre"),o(),d(14,"input",10),o(),a(15,"mat-form-field",9)(16,"mat-label"),s(17,"Descripci\xF3n"),o(),d(18,"input",11),o(),a(19,"mat-form-field",9)(20,"mat-label"),s(21,"Poder"),o(),d(22,"input",12),o(),a(23,"mat-form-field",9)(24,"mat-label"),s(25,"Tipo"),o(),a(26,"mat-select",13),k(27,ue,2,2,"mat-option",14,V),o()()()(),a(29,"div",15)(30,"div",16)(31,"button",17),u("click",function(){return g(n),v(t.back())}),s(32,"Volver"),o(),a(33,"button",18),u("click",function(){return g(n),v(t.createOrUpdate())}),s(34,"Guardar"),o()()()()}if(e&2){let n;l("formGroup",t.form),m(4),l("src",(n=(n=t.form.get("img"))==null?null:n.value)!==null&&n!==void 0?n:"default.png",R),m(2),l("disabled",t.loading),m(21),T(t.types),m(4),l("disabled",t.loading),m(2),l("disabled",t.loading)}},dependencies:[z,re,ie,te,ne,q,Q,W,$,J,X,Y,x],styles:["[_nghost-%COMP%]   .border-form[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000001a;border-radius:16px}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]{flex-direction:column}@media screen and (min-width: 1280px){[_nghost-%COMP%]   .form[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}@media screen and (min-width: 1280px){[_nghost-%COMP%]   .avatar-input[_ngcontent-%COMP%]{width:100%;max-width:500px}}[_nghost-%COMP%]   .img-preview[_ngcontent-%COMP%]{width:100px;height:100px}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .m-w-120[_ngcontent-%COMP%]{min-width:120px}@media screen and (min-width: 1280px){[_nghost-%COMP%]   .m-w-120[_ngcontent-%COMP%]{min-width:260px}}[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}"]})};function he(i,r){if(i&1&&d(0,"app-create-or-update-heroe",0),i&2){let e=L();l("heroe",e.heroe)}}function ge(i,r){i&1&&(a(0,"div",1)(1,"div"),d(2,"mat-spinner"),a(3,"p",2),s(4,"Cargando..."),o()()())}var _=class i{constructor(r,e,t){this.route=r;this.heroService=e;this.router=t;this.route.params.subscribe(n=>{this.loading=!0;let p=n.id;p?this.heroService.getById(p).subscribe({next:h=>{this.heroe=h,this.title="Editando heroe",this.loading=!1},error:()=>{this.router.navigate(["/404"])}}):(this.title="Creando nuevo heroe",this.loading=!1)})}title="";heroe=null;loading=!1;static \u0275fac=function(e){return new(e||i)(c(B),c(y),c(S))};static \u0275cmp=M({type:i,selectors:[["app-heroe"]],decls:4,vars:3,consts:[[3,"heroe"],[1,"d-flex","justify-content-center"],[1,"m-t-40"]],template:function(e,t){e&1&&(a(0,"h1"),s(1),o(),D(2,he,1,1,"app-create-or-update-heroe",0)(3,ge,5,0,"div",1)),e&2&&(m(),H(t.title),m(),I(t.loading?-1:2),m(),I(t.loading?3:-1))},dependencies:[oe,F]})};var ve=[{path:"",component:_},{path:":id",component:_}],E=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=w({imports:[P.forChild(ve),P]})};var me=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=w({imports:[G,E,ae,Z,ee]})};export{me as HeroeModule};
