(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"Ed/J":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("mrSG"),e=t("ifck"),i=t("V1Vp"),r=t("5/M7"),a=t("ZZ/e"),c=function(){function n(n,l,t,u,o){this.modalCtrl=n,this.cashService=l,this.plt=t,this.storage=u,this.popOverCtrl=o,this.transactions=[],this.allTransactions=[],this.cashFlow=0}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.plt.ready()];case 1:return n.sent(),this.loadTransactions(),[2]}})})},n.prototype.addCashFlow=function(){return o.b(this,void 0,void 0,function(){var n,l=this;return o.e(this,function(t){switch(t.label){case 0:return[4,this.modalCtrl.create({component:r.a,cssClass:"modalCss"})];case 1:return(n=t.sent()).present(),n.onDidDismiss().then(function(n){n&&n.data&&l.loadTransactions()}),[2]}})})},n.prototype.loadTransactions=function(){return o.b(this,void 0,void 0,function(){var n=this;return o.e(this,function(l){switch(l.label){case 0:return[4,this.storage.get("selected-currency").then(function(l){return n.selectedCurrency=l.toUpperCase()})];case 1:return l.sent(),[4,this.cashService.getTransactions().then(function(l){n.transactions=l,n.allTransactions=l})];case 2:return l.sent(),this.updateCashflow(),[2]}})})},n.prototype.removeTransaction=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(l){switch(l.label){case 0:return this.transactions.splice(n,1),this.cashService.updateTransactions(this.transactions),[4,this.slidingList.closeSlidingItems()];case 1:return l.sent(),this.updateCashflow(),[2]}})})},n.prototype.updateCashflow=function(){var n=0;this.transactions.map(function(l){n+=l.type==i.a.Expense?-+l.value:+l.value}),this.cashFlow=n},n.prototype.openFilters=function(n){return o.b(this,void 0,void 0,function(){var l,t=this;return o.e(this,function(u){switch(u.label){case 0:return[4,this.popOverCtrl.create({component:e.a,event:n})];case 1:return[4,(l=u.sent()).present()];case 2:return u.sent(),l.onDidDismiss().then(function(n){n&&n.data&&(t.transactions="All"==n.data.selected.name?t.allTransactions:t.allTransactions.filter(function(l){return l.category.name==n.data.selected.name}))}),[2]}})})},n}(),s=function(){return function(){}}(),b=t("pMnS"),p=t("oBZk"),h=t("Ip0R"),d=t("iw74"),f=u.nb({encapsulation:0,styles:[[".category-icon[_ngcontent-%COMP%]{background:#e6e6e6;padding:10px;border-radius:25px;color:var(--ion-color-tertiary)}"]],data:{}});function m(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,22,"ion-item-sliding",[],null,null,null,p.bb,p.t)),u.ob(1,49152,null,0,a.J,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,14,"ion-item",[],null,null,null,p.cb,p.q)),u.ob(3,49152,null,0,a.E,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,1,"ion-icon",[["class","category-icon"],["slot","start"]],null,null,null,p.X,p.o)),u.ob(5,49152,null,0,a.z,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(6,0,null,0,6,"ion-label",[],null,null,null,p.db,p.u)),u.ob(7,49152,null,0,a.K,[u.h,u.k],null,null),(n()(),u.pb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Fb(9,null,["",""])),(n()(),u.pb(10,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Fb(11,null,[" "," "])),u.Bb(12,2),(n()(),u.pb(13,0,null,0,3,"ion-label",[["slot","end"],["text-right",""]],null,null,null,p.db,p.u)),u.ob(14,49152,null,0,a.K,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.Fb(15,0,[" "," "])),u.Bb(16,3),(n()(),u.pb(17,0,null,0,5,"ion-item-options",[["side","end"]],null,null,null,p.ab,p.s)),u.ob(18,49152,null,0,a.I,[u.h,u.k],{side:[0,"side"]},null),(n()(),u.pb(19,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.removeTransaction(n.context.index)&&u),u},p.Z,p.r)),u.ob(20,49152,null,0,a.H,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(21,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,p.X,p.o)),u.ob(22,49152,null,0,a.z,[u.h,u.k],{name:[0,"name"]},null)],function(n,l){n(l,5,0,l.context.$implicit.category.icon),n(l,14,0,l.context.$implicit.type?"success":"danger"),n(l,18,0,"end"),n(l,20,0,"danger"),n(l,22,0,"trash")},function(n,l){var t=l.component;n(l,9,0,l.context.$implicit.title);var o=u.Gb(l,11,0,n(l,12,0,u.yb(l.parent,0),l.context.$implicit.created_at,"MMM dd"));n(l,11,0,o);var e=u.Gb(l,15,0,n(l,16,0,u.yb(l.parent,1),l.context.$implicit.value,t.selectedCurrency,"symbol"));n(l,15,0,e)})}function v(n){return u.Hb(0,[u.Ab(0,h.e,[u.u]),u.Ab(0,h.c,[u.u]),u.Db(402653184,1,{slidingList:0}),(n()(),u.pb(3,0,null,null,16,"ion-header",[],null,null,null,p.W,p.n)),u.ob(4,49152,null,0,a.y,[u.h,u.k],null,null),(n()(),u.pb(5,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,p.rb,p.I)),u.ob(6,49152,null,0,a.yb,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,p.L,p.c)),u.ob(8,49152,null,0,a.i,[u.h,u.k],null,null),(n()(),u.pb(9,0,null,0,1,"ion-menu-button",[],null,null,null,p.gb,p.y)),u.ob(10,49152,null,0,a.O,[u.h,u.k],null,null),(n()(),u.pb(11,0,null,0,2,"ion-title",[],null,null,null,p.qb,p.H)),u.ob(12,49152,null,0,a.wb,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Tracker"])),(n()(),u.pb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,p.L,p.c)),u.ob(15,49152,null,0,a.i,[u.h,u.k],null,null),(n()(),u.pb(16,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.openFilters(t)&&u),u},p.K,p.b)),u.ob(17,49152,null,0,a.h,[u.h,u.k],null,null),(n()(),u.pb(18,0,null,0,1,"ion-icon",[["name","funnel"]],null,null,null,p.X,p.o)),u.ob(19,49152,null,0,a.z,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(20,0,null,null,11,"ion-content",[],null,null,null,p.R,p.i)),u.ob(21,49152,null,0,a.r,[u.h,u.k],null,null),(n()(),u.pb(22,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,p.U,p.k)),u.ob(23,49152,null,0,a.t,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),u.pb(24,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.addCashFlow()&&u),u},p.T,p.l)),u.ob(25,49152,null,0,a.u,[u.h,u.k],null,null),(n()(),u.pb(26,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,p.X,p.o)),u.ob(27,49152,null,0,a.z,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(28,0,null,0,3,"ion-list",[],null,null,null,p.fb,p.v)),u.ob(29,49152,[[1,4],["slidingList",4]],0,a.L,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,m)),u.ob(31,278528,null,0,h.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(32,0,null,null,6,"ion-footer",[],null,null,null,p.V,p.m)),u.ob(33,49152,null,0,a.w,[u.h,u.k],null,null),(n()(),u.pb(34,0,null,0,4,"ion-toolbar",[["color","secondary"],["text-center",""]],null,null,null,p.rb,p.I)),u.ob(35,49152,null,0,a.yb,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.pb(36,0,null,0,2,"b",[["style","color:#ffffff;"]],null,null,null,null,null)),(n()(),u.Fb(37,null,["",""])),u.Bb(38,3)],function(n,l){var t=l.component;n(l,6,0,"primary"),n(l,19,0,"funnel"),n(l,23,0,"end","bottom"),n(l,27,0,"add"),n(l,31,0,t.transactions),n(l,35,0,"secondary")},function(n,l){var t=l.component,o=u.Gb(l,37,0,n(l,38,0,u.yb(l,1),t.cashFlow,t.selectedCurrency,"symbol"));n(l,37,0,o)})}function k(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-tracker",[],null,null,null,v,f)),u.ob(1,114688,null,0,c,[a.Cb,i.b,a.Eb,d.b,a.Fb],null,null)],function(n,l){n(l,1,0)},null)}var w=u.lb("app-tracker",c,k,{},{},[]),y=t("gIcY"),g=t("ZYCi");t.d(l,"TrackerPageModuleNgFactory",function(){return C});var C=u.mb(s,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[b.a,w]],[3,u.j],u.x]),u.wb(4608,h.m,h.l,[u.u,[2,h.t]]),u.wb(4608,y.g,y.g,[]),u.wb(4608,a.a,a.a,[u.z,u.g]),u.wb(4608,a.Cb,a.Cb,[a.a,u.j,u.q,h.d]),u.wb(4608,a.Fb,a.Fb,[a.a,u.j,u.q,h.d]),u.wb(1073742336,h.b,h.b,[]),u.wb(1073742336,y.f,y.f,[]),u.wb(1073742336,y.a,y.a,[]),u.wb(1073742336,a.Ab,a.Ab,[]),u.wb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),u.wb(1073742336,s,s,[]),u.wb(1024,g.k,function(){return[[{path:"",component:c}]]},[])])})}}]);