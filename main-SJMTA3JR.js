import{A as ve,B as ye,D as Se,E as xe,F as He,G as Te,H as Me,I as we,J as Ee,K as De,L as Ae,M as Ie,N as Pe,O as ke,P as Fe,Q as N,R as Re,S as Oe,T as Ne,U as Ve,V as je,W as Le,X as y,Y as Be,Z as $e,a as ce,b as pe,d as de,e as O,f as ue,i as fe,j as he,k as T,l as ge,x as _e,y as Ce,z as be}from"./chunk-AWEVEOPD.js";import{$ as q,$b as le,Ab as v,Cb as w,Fa as Z,Fb as c,Hb as C,Kb as oe,Mb as k,Nb as F,Ob as R,Ra as I,Sb as l,Ta as s,Tb as re,Ua as g,Ub as H,Va as X,Vb as ae,W as U,Xa as J,Y as W,Za as K,_b as h,ab as ee,ca as z,ga as u,ja as G,jb as d,jc as se,nb as f,oa as S,pa as x,sb as P,tb as te,ub as ne,vb as ie,wa as A,wb as a,xa as Y,xb as r,xc as me,yb as p,zb as b}from"./chunk-CLD7H7M4.js";var Ge=()=>[5,10,20];function Ye(n,t){if(n&1){let e=w();a(0,"th",14)(1,"mat-checkbox",15),c("change",function(o){S(e);let m=C();return x(o?m.masterToggle():null)}),r()()}if(n&2){let e=C();s(),f("checked",e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())}}function Ze(n,t){if(n&1){let e=w();a(0,"td",16)(1,"mat-checkbox",17),c("click",function(o){return S(e),x(o.stopPropagation())})("change",function(o){let m=S(e).$implicit,_=C();return x(o?_.selection.toggle(m):null)}),r()()}if(n&2){let e=t.$implicit,i=C();s(),oe("aria-label","Seleccionar fila ",e.id,""),f("checked",i.selection.isSelected(e))}}function Xe(n,t){n&1&&(a(0,"th",14),l(1," ID "),r())}function Je(n,t){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let e=t.$implicit;s(),H(" ",e.id," ")}}function Ke(n,t){n&1&&(a(0,"th",14),l(1," Avatar "),r())}function et(n,t){if(n&1&&(a(0,"td",16),p(1,"img",18),r()),n&2){let e=t.$implicit;s(),f("src",e.img,I)}}function tt(n,t){n&1&&(a(0,"th",14),l(1," Nombre "),r())}function nt(n,t){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let e=t.$implicit;s(),H(" ",e.name," ")}}function it(n,t){n&1&&(a(0,"th",14),l(1," Descripci\xF3n "),r())}function ot(n,t){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let e=t.$implicit;s(),H(" ",e.description," ")}}function rt(n,t){n&1&&(a(0,"th",14),l(1," Tipo "),r())}function at(n,t){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let e=t.$implicit;s(),H(" ",e.type," ")}}function lt(n,t){n&1&&(a(0,"th",14),l(1," Poder "),r())}function st(n,t){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let e=t.$implicit;s(),H(" ",e.power," ")}}function mt(n,t){n&1&&p(0,"tr",19)}function ct(n,t){n&1&&p(0,"tr",20)}var E=class n{displayedColumns=["select","id","avatar","name","description","type","power"];set changeDataSource(t){this.dataSource.data=t}selectedHeroes=new A;dataSource=new ke;paginator;selection=new ge(!0,[]);ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.selection.changed.subscribe(t=>{this.selectedHeroes.emit(t.source.selected)})}isAllSelected(){let t=this.selection.selected.length,e=this.dataSource.data.length;return t===e}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["app-table-heroes"]],viewQuery:function(e,i){if(e&1&&k(N,5),e&2){let o;F(o=R())&&(i.paginator=o.first)}},inputs:{changeDataSource:"changeDataSource"},outputs:{selectedHeroes:"selectedHeroes"},standalone:!0,features:[h],decls:26,vars:5,consts:[[1,"max-width-1440"],["mat-table","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","avatar"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","type"],["matColumnDef","power"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Selecci\xF3n de p\xE1gina de h\xE9roes",3,"pageSizeOptions"],["mat-header-cell",""],["aria-label","Seleccionar todo",3,"change","checked","indeterminate"],["mat-cell",""],[3,"click","change","checked","aria-label"],["onerror","this.onerror=null;this.src='default.png'",1,"avatar",3,"src"],["mat-header-row",""],["mat-row",""]],template:function(e,i){e&1&&(a(0,"div",0)(1,"table",1),b(2,2),d(3,Ye,2,2,"th",3)(4,Ze,2,3,"td",4),v(),b(5,5),d(6,Xe,2,0,"th",3)(7,Je,2,1,"td",4),v(),b(8,6),d(9,Ke,2,0,"th",3)(10,et,2,1,"td",4),v(),b(11,7),d(12,tt,2,0,"th",3)(13,nt,2,1,"td",4),v(),b(14,8),d(15,it,2,0,"th",3)(16,ot,2,1,"td",4),v(),b(17,9),d(18,rt,2,0,"th",3)(19,at,2,1,"td",4),v(),b(20,10),d(21,lt,2,0,"th",3)(22,st,2,1,"td",4),v(),d(23,mt,1,0,"tr",11)(24,ct,1,0,"tr",12),r(),p(25,"mat-paginator",13),r()),e&2&&(s(),f("dataSource",i.dataSource),s(22),f("matHeaderRowDef",i.displayedColumns),s(),f("matRowDefColumns",i.displayedColumns),s(),f("pageSizeOptions",le(4,Ge)))},dependencies:[y,Se,xe,Te,De,Me,He,Ae,we,Ee,Ie,Pe,N],styles:["[_nghost-%COMP%]   .avatar[_ngcontent-%COMP%]{width:75px;height:75px;border-radius:50%;margin:16px}@media screen and (max-width: 630px){[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%;overflow-x:auto;display:block}}"]})};var V=class n{pressAction=new A;action(t){this.pressAction.emit(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["app-panel-action-heroes"]],outputs:{pressAction:"pressAction"},standalone:!0,features:[h],decls:6,vars:0,consts:[["matTooltip","Agregar heroe",1,"circle-icon",3,"click"],["matTooltip","Editar heroe",1,"circle-icon",3,"click"],["matTooltip","Eliminar heroe",1,"circle-icon",3,"click"]],template:function(e,i){e&1&&(a(0,"mat-icon",0),c("click",function(){return i.action("ADD")}),l(1,"add"),r(),a(2,"mat-icon",1),c("click",function(){return i.action("EDIT")}),l(3,"edit"),r(),a(4,"mat-icon",2),c("click",function(){return i.action("DELETE")}),l(5,"delete"),r())},dependencies:[y,T,Fe],styles:[".circle-icon[_ngcontent-%COMP%]{padding:4px;border:1px solid grey;border-radius:16px;margin-left:8px}.circle-icon[_ngcontent-%COMP%]:hover{background-color:#0000001a;cursor:pointer}"]})};function dt(n,t){if(n&1&&(a(0,"div",4),p(1,"img",8),a(2,"span",9),l(3),r()()),n&2){let e=t.$implicit;s(),f("src",e.img,I)("alt","Imagen de "+e.name),s(2),re(e.name)}}var j=class n{constructor(t,e){this.data=t;this.dialogRef=e}confirm(t){this.dialogRef.close(t)}static \u0275fac=function(e){return new(e||n)(g(Oe),g(Re))};static \u0275cmp=u({type:n,selectors:[["app-confirm"]],standalone:!0,features:[h],decls:14,vars:2,consts:[[1,"d-flex","justify-between","align-items-center","p-20"],[1,"m-b-0","font-32","m-r-8"],["mat-icon-button","","mat-dialog-close",""],["mat-dialog-content",""],[1,"d-flex","align-items-center","m-b-16"],["mat-dialog-actions",""],["mat-button","","mat-stroked-button","",3,"click"],["mat-button","","cdkFocusInitial","","mat-flat-button","",3,"click"],["width","64","height","64","onerror","this.onerror=null;this.src='default.png'",1,"b-r-img",3,"src","alt"],[1,"m-l-16"]],template:function(e,i){e&1&&(a(0,"header",0)(1,"h1",1),l(2),r(),a(3,"button",2)(4,"mat-icon"),l(5,"close"),r()()(),a(6,"div",3),ne(7,dt,4,3,"div",4,te),r(),a(9,"div",5)(10,"button",6),c("click",function(){return i.confirm(!1)}),l(11,"Cancelar"),r(),a(12,"button",7),c("click",function(){return i.confirm(!0)}),l(13,"Confirmar"),r()()),e&2&&(s(2),ae("\xBFDesea eliminar ",i.data.heroes.length==1?"el":"los"," heroe",i.data.heroes.length==1?"":"s","?"),s(5),ie(i.data.heroes))},dependencies:[y,fe,he,T,Ve,Le,je],styles:["[_nghost-%COMP%]   .font-32[_ngcontent-%COMP%]{font-size:32px}[_nghost-%COMP%]   .b-r-img[_ngcontent-%COMP%]{border-radius:50%}"]})};function ft(n,t){n&1&&(a(0,"div",5),p(1,"mat-spinner",9),r())}function ht(n,t){n&1&&(a(0,"mat-icon",6),l(1,"search"),r())}function gt(n,t){n&1&&(a(0,"div",8)(1,"mat-icon"),l(2,"search_off"),r(),a(3,"p"),l(4,"No se encontraron resultados"),r()())}function _t(n,t){if(n&1){let e=w();a(0,"app-table-heroes",11,0),c("selectedHeroes",function(o){S(e);let m=C(2);return x(m.selectedHeroes(o))}),r()}if(n&2){let e=C(2);f("changeDataSource",e.filterHeroesList)}}function Ct(n,t){if(n&1&&d(0,gt,5,0,"div",8)(1,_t,2,1,"app-table-heroes",10),n&2){let e=C();P(e.filterHeroesList.length==0?0:1)}}function bt(n,t){n&1&&(a(0,"div",8)(1,"div"),p(2,"mat-spinner"),a(3,"p",12),l(4,"Cargando..."),r()()())}var L=class n{constructor(t,e,i,o){this.heroesService=t;this.router=e;this.notification=i;this.matDialog=o}tableHeroes;heroes=[];filterHeroesList=[];heroesSelected=[];loading=!1;loadingFilter=!1;ngAfterViewInit(){this.getAllHeroes()}applyFilter(t){let e=t.target.value;e?(this.loadingFilter=!0,this.heroesService.search(e).subscribe({next:i=>{this.filterHeroesList=i,this.loadingFilter=!1},error:()=>{this.notification.showError("Disculpa, ocurrio un error al buscar los heroes"),this.loadingFilter=!1}})):this.filterHeroesList=this.heroes}selectedHeroes(t){this.heroesSelected=t}action(t){switch(t){case"ADD":this.router.navigate(["/heroe"]);break;case"EDIT":if(this.heroesSelected.length===0){this.notification.showWarning("Debes selecionar un heroe para editar");return}if(this.heroesSelected.length>1){this.notification.showWarning("Solo puedes selecionar un heroe para editar");return}this.router.navigate(["/heroe",this.heroesSelected[0].id]);break;case"DELETE":if(this.heroesSelected.length===0){this.notification.showWarning("Seleccionar al menos un heroe para eliminar");return}this.matDialog.open(j,{data:{heroes:this.heroesSelected}}).afterClosed().subscribe(e=>{if(e){let i=this.heroesSelected.map(o=>o.id);this.tableHeroes.selection.clear(),this.loading=!0,this.heroesService.delete(i).subscribe({next:()=>{this.notification.showSuccess("Heroes eliminados correctamente"),this.loading=!1,this.getAllHeroes()},error:()=>{this.notification.showError("Disculpa, ocurrio un error al eliminar los heroes"),this.loading=!1}})}});break}}getAllHeroes(){this.loading=!0,this.heroesService.get().subscribe({next:t=>{this.heroes=t,this.filterHeroesList=t,this.loading=!1},error:()=>{this.notification.showError("Disculpa, ocurrio un error al obtener los heroes"),this.loading=!1}})}static \u0275fac=function(e){return new(e||n)(g(Be),g(O),g($e),g(Ne))};static \u0275cmp=u({type:n,selectors:[["app-home"]],viewQuery:function(e,i){if(e&1&&k(E,5),e&2){let o;F(o=R())&&(i.tableHeroes=o.first)}},standalone:!0,features:[h],decls:11,vars:2,consts:[["tableHeroes",""],[1,"background-hero"],[1,"d-flex","beetwen","panel-responsive"],["appearance","outline"],["matInput","",3,"keyup"],["matSuffix","",1,"p-l-20","p-r-10"],["matSuffix",""],[3,"pressAction"],[1,"d-flex","justify-content-center"],["diameter","18"],[3,"changeDataSource"],[3,"selectedHeroes","changeDataSource"],[1,"m-t-40"]],template:function(e,i){e&1&&(p(0,"div",1),a(1,"div",2)(2,"mat-form-field",3)(3,"mat-label"),l(4,"Buscar"),r(),a(5,"input",4),c("keyup",function(m){return i.applyFilter(m)}),r(),d(6,ft,2,0,"div",5)(7,ht,2,0,"mat-icon",6),r(),a(8,"app-panel-action-heroes",7),c("pressAction",function(m){return i.action(m)}),r()(),d(9,Ct,2,1)(10,bt,5,0,"div",8)),e&2&&(s(6),P(i.loadingFilter?6:7),s(3),P(i.loading?10:9))},dependencies:[E,V,y,T,ve,be,_e,Ce,ye],styles:[".d-flex[_ngcontent-%COMP%]{display:flex}.beetwen[_ngcontent-%COMP%]{justify-content:space-between}.font-24[_ngcontent-%COMP%]{font-size:24px}.p-l-20[_ngcontent-%COMP%]{padding-left:20px}.p-r-10[_ngcontent-%COMP%]{padding-right:10px}.panel-responsive[_ngcontent-%COMP%]{flex-direction:column}@media screen and (min-width: 500px){.panel-responsive[_ngcontent-%COMP%]{flex-direction:row}}"]})};var B=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["app-error404"]],standalone:!0,features:[h],decls:5,vars:0,consts:[[1,"m-t-40"],[1,"text-center"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"h1",1),l(2,"Error 404"),r(),a(3,"p",1),l(4,"P\xE1gina no encontrada"),r()())}})};var Qe=[{path:"",component:L},{path:"heroe",loadChildren:()=>import("./chunk-T5QXQN4K.js").then(n=>n.HeroeModule)},{path:"404",component:B},{path:"**",redirectTo:""}];var vt="@",yt=(()=>{class n{constructor(e,i,o,m,_){this.doc=e,this.delegate=i,this.zone=o,this.animationType=m,this.moduleImpl=_,this._rendererFactoryPromise=null,this.scheduler=z(J,{optional:!0}),this.loadingSchedulerFn=z(St,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MKHFOW7H.js").then(o=>o),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(o=>{throw new U(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:m})=>{this._engine=o(this.animationType,this.doc);let _=new m(this.delegate,this._engine,this.zone);return this.delegate=_,_})}createRenderer(e,i){let o=this.delegate.createRenderer(e,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let m=new Q(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let qe=_.createRenderer(e,i);m.use(qe),this.scheduler?.notify(10)}).catch(_=>{m.use(o)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(i){X()}}static{this.\u0275prov=W({token:n,factory:n.\u0275fac})}}return n})(),Q=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,o){this.delegate.insertBefore(t,e,i,o)}removeChild(t,e,i){this.delegate.removeChild(t,e,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,o){this.delegate.setAttribute(t,e,i,o)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,o){this.delegate.setStyle(t,e,i,o)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,i)),this.delegate.listen(t,e,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(vt)}},St=new q("");function Ue(n="animations"){return ee("NgAsyncAnimations"),G([{provide:K,useFactory:(t,e,i)=>new yt(t,e,i,n),deps:[me,ce,Y]},{provide:Z,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var We={providers:[se({eventCoalescing:!0}),ue(Qe),Ue()]};var $=class n{constructor(t){this.router=t}redirectHome(){this.router.navigate(["/"])}static \u0275fac=function(e){return new(e||n)(g(O))};static \u0275cmp=u({type:n,selectors:[["app-root"]],standalone:!0,features:[h],decls:6,vars:0,consts:[[1,"max-width-1440"],[1,"d-flex","justify-between","align-item-center","m-b-16"],["src","logo.png","alt","logo heroesApp",1,"pointer",3,"click"],[1,"m-b-0"],["src","mindata.png","alt","logo Mindata",1,"logo-mindata"]],template:function(e,i){e&1&&(a(0,"main",0)(1,"nav",1)(2,"img",2),c("click",function(){return i.redirectHome()}),r(),a(3,"p",3),p(4,"img",4),r()(),p(5,"router-outlet"),r())},dependencies:[de],styles:[".max-width-1440[_ngcontent-%COMP%]{max-width:1440px;margin:0 auto;padding:0 16px}.logo-mindata[_ngcontent-%COMP%]{width:0}@media screen and (min-width: 500px){.logo-mindata[_ngcontent-%COMP%]{width:auto}}.pointer[_ngcontent-%COMP%]:hover{cursor:pointer}"]})};pe($,We).catch(n=>console.error(n));