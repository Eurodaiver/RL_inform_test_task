(function(e){function t(t){for(var a,c,n=t[0],o=t[1],r=t[2],u=0,v=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&v.push(l[c][0]),l[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,r||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,n=1;n<s.length;n++){var o=s[n];0!==l[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},l={app:0},i=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var r=0;r<n.length;r++)t(n[r]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0096":function(e,t,s){"use strict";(function(e){s("d3b7");var a=s("bc3a"),l=s.n(a);t["a"]={data:function(){return{active:[],avatar:null,open:[],roles:[],selected:null}},methods:{},mounted:function(){var t=this;l.a.get(e.IP+"/api/Admin/GetRoles").then((function(e){console.log(e),t.roles=e.data})).catch((function(e){console.log(e)})).finally((function(){}))}}}).call(this,s("c8ba"))},"3dfd":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{id:"inspire"}},[s("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},scopedSlots:e._u([{key:"append",fn:function(){return[s("div",{staticClass:"pa-2"},[s("v-btn",{attrs:{block:""},on:{click:function(t){e.selected=2}}},[s("v-icon",[e._v("mdi-help-circle")]),e._v("Help ")],1)],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("v-list",{attrs:{dense:"",mandatory:""}},[s("v-list-item-group",[s("v-list-item",{on:{click:function(t){e.selected=0}}},[s("v-list-item-action",[s("v-icon",[e._v("mdi-contacts")])],1),s("v-list-item-content",[s("v-list-item-title",[e._v("Пользователи")])],1)],1),s("v-list-item",{on:{click:function(t){e.selected=1}}},[s("v-list-item-action",[s("v-icon",[e._v("mdi-account-group")])],1),s("v-list-item-content",[s("v-list-item-title",[e._v("Роли")])],1)],1)],1)],1)],1),s("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[s("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),s("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[s("span",{staticClass:"hidden-sm-and-down"},[e._v("RL-inform Users")])]),s("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search users"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(e.stext)}},model:{value:e.stext,callback:function(t){e.stext=t},expression:"stext"}}),s("v-spacer"),""!=e.login?s("v-text",{staticClass:"mr-3"},[e._v("Hello, "+e._s(e.login)+"!")]):e._e(),e.accessKey?s("v-btn",{staticClass:"ml-3",attrs:{icon:""},on:{click:function(t){return e.logout()}}},[s("v-icon",[e._v("mdi-logout")])],1):e._e()],1),s("v-main",[0==e.selected?s("userpanel",{staticClass:"fill-height"}):e._e(),1==e.selected?s("rolepanel",{staticClass:"fill-height"}):e._e(),2==e.selected?s("helppanel",{staticClass:"fill-height"}):e._e()],1),s("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:e.loginDialog,callback:function(t){e.loginDialog=t},expression:"loginDialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline align-center"},[s("v-icon",{staticClass:"mr-3"},[e._v("mdi-account-key")]),e._v("Please Log In ")],1),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",{staticClass:"px-5"},[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{id:"email",counter:30,rules:e.loginrules,label:"Login",required:""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{id:"password",rules:e.passwordrules,"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",type:e.showPass?"text":"password",label:"Password",required:""},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.tryToLogIn()}}},[e._v("OK")])],1)],1)],1)],1)},l=[],i=s("ef3c"),c=i["a"],n=s("2877"),o=s("6544"),r=s.n(o),d=s("7496"),u=s("40dc"),v=s("5bc1"),p=s("8336"),m=s("b0af"),f=s("99d9"),g=s("62ad"),h=s("a523"),x=s("169a"),b=s("4bd4"),_=s("132d"),C=s("8860"),w=s("da13"),y=s("1800"),k=s("5d23"),V=s("1baa"),I=s("f6c4"),U=s("f774"),S=s("0fd9"),P=s("2fa4"),N=s("8654"),$=s("2a7f"),L=Object(n["a"])(c,a,l,!1,null,null,null);t["a"]=L.exports;r()(L,{VApp:d["a"],VAppBar:u["a"],VAppBarNavIcon:v["a"],VBtn:p["a"],VCard:m["a"],VCardActions:f["a"],VCardTitle:f["c"],VCol:g["a"],VContainer:h["a"],VDialog:x["a"],VForm:b["a"],VIcon:_["a"],VList:C["a"],VListItem:w["a"],VListItemAction:y["a"],VListItemContent:k["a"],VListItemGroup:V["a"],VListItemTitle:k["b"],VMain:I["a"],VNavigationDrawer:U["a"],VRow:S["a"],VSpacer:P["a"],VTextField:N["a"],VToolbarTitle:$["a"]})},"402c":function(e,t,s){"use strict";var a=s("2b0e"),l=s("f309");a["a"].use(l["a"]),t["a"]=new l["a"]({})},"43fe":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"d-flex pa-2 outlined tile",attrs:{cols:"auto"}},[s("v-row",{staticClass:"pa-4 d-flex",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"4"}},[s("v-card-text",[s("p",{staticClass:"display-1 text--primary"},[e._v("Роли")])]),s("v-list",[s("v-list-item-group",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.roles,(function(t,a){return s("v-list-item",{key:a,staticClass:"py-1"},[s("v-avatar",{staticClass:"mr-2",attrs:{color:"indigo",size:"48",tile:""}},[s("span",{staticClass:"white--text headline"},[e._v(e._s(t.name[0]))])]),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1)})),1)],1)],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{staticClass:"d-flex text-center"},[s("v-scroll-y-transition",{attrs:{mode:"out-in"}},[null==e.selected?s("div",{staticClass:"title grey--text text--lighten-1 font-weight-light ma-5",staticStyle:{"align-self":"center"}},[e._v("Select a Role")]):s("v-card",{key:e.roles[e.selected].id,staticClass:"pt-6 mx-auto",attrs:{flat:"","max-width":"400"}},[s("v-card-text",[e.avatar?s("v-avatar",{attrs:{size:"88"}},[s("v-img",{staticClass:"mb-6",attrs:{src:"https://avataaars.io/"+e.avatar}})],1):e._e(),s("h3",{staticClass:"headline mb-2"},[e._v(e._s(e.roles[e.selected].name))])],1),s("v-divider"),s("v-row",{staticClass:"text-left",attrs:{tag:"v-card-text"}},[s("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"5"}},[e._v("ID:")]),s("v-col",[e._v(e._s(e.roles[e.selected].id))])],1)],1)],1)],1)],1)],1)},l=[],i=s("0096"),c=i["a"],n=s("2877"),o=s("6544"),r=s.n(o),d=s("8212"),u=s("b0af"),v=s("99d9"),p=s("62ad"),m=s("ce7e"),f=s("adda"),g=s("8860"),h=s("da13"),x=s("5d23"),b=s("1baa"),_=s("0fd9"),C=s("0789"),w=Object(n["a"])(c,a,l,!1,null,null,null);t["a"]=w.exports;r()(w,{VAvatar:d["a"],VCard:u["a"],VCardText:v["b"],VCol:p["a"],VDivider:m["a"],VImg:f["a"],VList:g["a"],VListItem:h["a"],VListItemContent:x["a"],VListItemGroup:b["a"],VListItemTitle:x["b"],VRow:_["a"],VScrollYTransition:C["d"]})},"56d7":function(e,t,s){"use strict";s.r(t),function(e){s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("2b0e"),a=s("3dfd"),l=s("402c"),i=s("bc3a"),c=s.n(i);e.IP="",t["a"].prototype.$http=c.a;var n=sessionStorage.getItem("accessKey");n&&(t["a"].prototype.$http.defaults.headers.common["Authorization"]="Bearer "+n),t["a"].config.productionTip=!1,new t["a"]({vuetify:l["a"],render:function(e){return e(a["a"])}}).$mount("#app")}.call(this,s("c8ba"))},ca2c:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"d-flex pa-2 outlined tile",attrs:{cols:"auto"}},[s("v-row",{staticClass:"pa-3 d-flex"},[s("v-col",{attrs:{cols:"md-12"}},[s("v-card-text",[s("p",{staticClass:"display-1 text--primary"},[e._v("Задание на разработку")]),s("p",[e._v("Сделать веб-приложение для администрирования пользователей.")]),s("h3",{staticClass:"pb-2"},[e._v("Возможности:")]),s("p",{staticClass:"pl-3"},[e._v("- Просматривать список пользователей (username, имя, роли) "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("p",{staticClass:"pl-3"},[e._v("- Создавать, редактировать и удалять пользователей "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("h3",{staticClass:"pb-2"},[e._v("Свойства пользователя")]),s("p",{staticClass:"pl-3"},[e._v("- Логин (задаётся при создании и не изменяется) "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("p",{staticClass:"pl-3"},[e._v("- Имя"),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline ")])],1),s("p",{staticClass:"pl-3"},[e._v("- Email"),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline ")])],1),s("p",{staticClass:"pl-3"},[e._v("- Пароль"),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline ")])],1),s("p",{staticClass:"pl-3"},[e._v("- Роли (несколько)"),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline ")])],1),s("p",[e._v("Список возможных ролей задан заранее (к примеру, Администратор, Редактор справочников, Заказчик).")]),s("h3",{staticClass:"pb-2"},[e._v("Требования к реализации:")]),s("p",{staticClass:"pl-3"},[e._v("- Приложение должно быть построено по принципу Single-page application, с обменом данными между фронтендом и бэкендом через REST API(строгое соблюдение стандарта REST необязательно) "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("p",{staticClass:"pl-3"},[e._v("- Желательна авторизация на основе jwt "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("p",{staticClass:"pl-3"},[e._v("- Бэкенд должен работать на .net Core и хранить данные в БД "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1),s("p",{staticClass:"pl-3"},[e._v("- Для фронтенда можно использовать typescript или js любой версии и любые фреймворки/библиотеки "),s("v-icon",{staticClass:"green--text"},[e._v("mdi-check-circle-outline")])],1)])],1)],1)],1)},l=[],i={data:function(){return{}},methods:{},mounted:function(){}},c=i,n=s("2877"),o=s("6544"),r=s.n(o),d=s("b0af"),u=s("99d9"),v=s("62ad"),p=s("132d"),m=s("0fd9"),f=Object(n["a"])(c,a,l,!1,null,null,null);t["a"]=f.exports;r()(f,{VCard:d["a"],VCardText:u["b"],VCol:v["a"],VIcon:p["a"],VRow:m["a"]})},dbef:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"d-flex pa-2 outlined tile",attrs:{cols:"auto"}},[s("v-row",{staticClass:"pa-3 d-flex",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"4"}},[s("v-card-text",[s("p",{staticClass:"display-1 text--primary"},[e._v("Пользователи")])]),s("v-list",[s("v-list-item-group",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.users,(function(t,a){return s("v-list-item",{key:a,staticClass:"py-1",on:{click:function(s){return e.getUserRoles(t.userName)}}},[s("v-avatar",{staticClass:"mr-2",attrs:{color:"teal",size:"48"}},[s("span",{staticClass:"white--text headline"},[e._v(e._s(t.userName[0]))])]),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:e._s(t.userName)}})],1)],1)})),1)],1),s("v-btn",{staticClass:"mx-3",attrs:{color:"pink",dark:"",fab:"",center:""},on:{click:function(t){e.dialog=!e.dialog}}},[s("v-icon",[e._v("mdi-plus")])],1)],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{staticClass:"d-flex text-center"},[s("v-scroll-y-transition",{attrs:{mode:"out-in"}},[null==e.selected?s("div",{staticClass:"title grey--text text--lighten-1 font-weight-light pa-5",staticStyle:{"align-self":"center"}},[e._v("Select a User")]):s("v-card",{key:e.users[e.selected].id,staticClass:"pt-6 mx-auto",attrs:{flat:"","max-width":"400"}},[s("v-card-text",[s("h3",{staticClass:"headline mb-2"},[e._v(e._s(e.users[e.selected].userName))]),s("div",{staticClass:"blue--text mb-2"},[e._v(e._s(e.users[e.selected].email))]),s("div",{staticClass:"blue--text subheading font-weight-bold"},[e._v(e._s(e.users[e.selected].firstName))])]),s("v-divider"),s("v-row",{staticClass:"text-left",attrs:{tag:"v-card-text"}},[s("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"3"}},[e._v("Логин:")]),s("v-col",{attrs:{cols:"8"}},[e._v(e._s(e.users[e.selected].userName))]),s("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"3"}},[e._v("Имя:")]),s("v-col",{attrs:{cols:"8"}},[e._v(e._s(e.users[e.selected].firstName))]),s("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"3"}},[e._v("Email:")]),s("v-col",{attrs:{cols:"8"}},[s("a",{attrs:{target:"_blank"}},[e._v(e._s(e.users[e.selected].email))])]),s("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"3"}},[e._v("Роли:")]),s("v-col",{attrs:{cols:"8"}},e._l(e.users[e.selected].roles,(function(t,a){return s("v-chip",{key:a,staticClass:"mb-1",attrs:{color:"green","text-color":"white",small:""}},[e._v(e._s(t))])})),1)],1),s("v-divider"),s("v-btn",{staticClass:"orange darken-3 ma-3",attrs:{dark:""},on:{click:function(t){e.editdialog=!e.editdialog}}},[e._v("РЕДАКТИРОВАТЬ")]),s("v-btn",{staticClass:"red darken-3 ma-3",attrs:{dark:""},on:{click:function(t){t.stopPropagation(),e.deletedialog=!0}}},[e._v("УДАЛИТЬ")]),s("v-dialog",{attrs:{"max-width":"320"},model:{value:e.deletedialog,callback:function(t){e.deletedialog=t},expression:"deletedialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[e._v("Удалить пользователя "+e._s(e.users[e.selected].firstName)+"?")]),s("v-card-text",[e._v("Данное действие необратимо удалит пользователя из системы.")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.deletedialog=!1}}},[e._v("Отмена")]),s("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.deleteUser(e.users[e.selected].userName),e.deletedialog=!1}}},[e._v("OK")])],1)],1)],1)],1)],1)],1)],1),s("v-dialog",{attrs:{width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"blue darken-2 white--text"},[e._v("Создать пользователя")]),s("v-container",[s("v-row",{staticClass:"mx-4"},[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-account",placeholder:"Логин"},model:{value:e.newUser.userName,callback:function(t){e.$set(e.newUser,"userName",t)},expression:"newUser.userName"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-name",placeholder:"Имя"},model:{value:e.newUser.firstName,callback:function(t){e.$set(e.newUser,"firstName",t)},expression:"newUser.firstName"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-mail",placeholder:"Email"},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{"prepend-icon":"mdi-head-plus-outline",items:e.roles,"item-text":"name","item-value":"name",chips:"",dense:"",label:"Роли",multiple:""},model:{value:e.newUser.roles,callback:function(t){e.$set(e.newUser,"roles",t)},expression:"newUser.roles"}})],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Отмена")]),s("v-btn",{attrs:{text:""},on:{click:function(t){e.saveUser(e.newUser),e.dialog=!1}}},[e._v("Сохранить")])],1)],1)],1),s("v-dialog",{attrs:{width:"600px"},model:{value:e.editdialog,callback:function(t){e.editdialog=t},expression:"editdialog"}},[null!=e.users[e.selected]?s("v-card",[s("v-card-title",{staticClass:"blue darken-2 white--text"},[e._v("Редактирование пользователя "+e._s(e.users[e.selected].userName))]),s("v-container",[s("v-row",{staticClass:"mx-4"},[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-name",placeholder:"Имя"},model:{value:e.users[e.selected].firstName,callback:function(t){e.$set(e.users[e.selected],"firstName",t)},expression:"users[selected].firstName"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{"prepend-icon":"mdi-mail",placeholder:"Email"},model:{value:e.users[e.selected].email,callback:function(t){e.$set(e.users[e.selected],"email",t)},expression:"users[selected].email"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-select",{attrs:{"prepend-icon":"mdi-head-plus-outline",items:e.roles,"item-text":"name","item-value":"name",chips:"",dense:"",label:"Роли",multiple:""},model:{value:e.users[e.selected].roles,callback:function(t){e.$set(e.users[e.selected],"roles",t)},expression:"users[selected].roles"}})],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.editdialog=!1}}},[e._v("Отмена")]),s("v-btn",{attrs:{text:""},on:{click:function(t){e.saveUser(e.users[e.selected]),e.editdialog=!1}}},[e._v("Сохранить")])],1)],1):e._e()],1)],1)},l=[],i=s("ebdf"),c=i["a"],n=s("2877"),o=s("6544"),r=s.n(o),d=s("8212"),u=s("8336"),v=s("b0af"),p=s("99d9"),m=s("cc20"),f=s("62ad"),g=s("a523"),h=s("169a"),x=s("ce7e"),b=s("132d"),_=s("8860"),C=s("da13"),w=s("5d23"),y=s("1baa"),k=s("0fd9"),V=s("0789"),I=s("b974"),U=s("2fa4"),S=s("8654"),P=Object(n["a"])(c,a,l,!1,null,null,null);t["a"]=P.exports;r()(P,{VAvatar:d["a"],VBtn:u["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VChip:m["a"],VCol:f["a"],VContainer:g["a"],VDialog:h["a"],VDivider:x["a"],VIcon:b["a"],VList:_["a"],VListItem:C["a"],VListItemContent:w["a"],VListItemGroup:y["a"],VListItemTitle:w["b"],VRow:k["a"],VScrollYTransition:V["d"],VSelect:I["a"],VSpacer:U["a"],VTextField:S["a"]})},ebdf:function(e,t,s){"use strict";(function(e){t["a"]={data:function(){return{dialog:!1,deletedialog:!1,editdialog:!1,active:[],avatar:null,open:[],users:[],selected:null,roles:[],newUser:{email:"",userName:"",firstName:"",roles:[]}}},methods:{saveUser:function(t){var s=this;console.log(t),this.$http.post(e.IP+"/api/Admin/CreateUser",t).then((function(e){console.log(e),s.loadUsers(),s.getUserRoles(s.users[s.selected].userName)})).catch((function(e){console.log(e)}))},getUserRoles:function(t){var s=this;this.$http.get(e.IP+"/api/Admin/GetUserRoles?username="+t).then((function(e){console.log(e),s.users[s.selected].roles=e.data})).catch((function(e){console.log(e)}))},loadUsers:function(){var t=this;this.$http.get(e.IP+"/api/Admin/GetUsers").then((function(e){console.log(e),t.users=e.data,t.selected=0})).catch((function(e){console.log(e)}))},loadRoles:function(){var t=this;this.$http.get(e.IP+"/api/Admin/GetRoles").then((function(e){console.log(e),t.roles=e.data})).catch((function(e){console.log(e)}))},deleteUser:function(t){var s=this;console.log(t),this.$http.delete(e.IP+"/api/Admin/DeleteUser/"+t).then((function(e){s.selected=null,s.loadUsers(),console.log(e)})).catch((function(e){console.log(e)}))}},mounted:function(){this.loadUsers(),this.loadRoles()}}}).call(this,s("c8ba"))},ef3c:function(e,t,s){"use strict";(function(e){var a=s("dbef"),l=s("43fe"),i=s("ca2c");t["a"]={components:{userpanel:a["a"],rolepanel:l["a"],helppanel:i["a"]},props:{source:String},data:function(){return{accessKey:"",drawer:null,userList:null,stext:"",loginDialog:!0,login:"",password:"",showPass:!1,valid:!0,selected:3,loginrules:[function(e){return!!e||"Required."},function(e){return(e||"").length<=30||"Max 30 characters"}],passwordrules:[function(e){return!!e||"Required."},function(e){return(e||"").length<=30||"Max 30 symbols"}]}},methods:{search:function(e){console.log(e),this.selected=0},tryToLogIn:function(){var t=this;if(!this.$refs.form.validate())return console.log("форма не валидна"),null;this.$http.post(e.IP+"/api/Authorization/Auth",{userName:this.login,password:this.password}).then((function(e){console.log("результат запроса ключа на сервер",e.data),t.accessKey=e.data.token,t.accessKey.length>1?(sessionStorage.setItem("accessKey",t.accessKey),t.$http.defaults.headers.common["Authorization"]="Bearer "+t.accessKey,console.log("accessKey",t.accessKey),t.loginDialog=!1,t.selected=0):sessionStorage.removeItem("accessKey")})).catch((function(e){console.log(e)}))},logout:function(){sessionStorage.removeItem("accessKey"),this.accessKey=null,this.login="",this.password="",this.loginDialog=!0,this.selected=3,window.location.reload()}},mounted:function(){null!=sessionStorage.getItem("accessKey")?(this.accessKey=sessionStorage.getItem("accessKey"),console.log("сессия",sessionStorage.getItem("accessKey")),this.loginDialog=!1,this.selected=0):(console.log("сессия",sessionStorage.getItem("accessKey")),this.loginDialog=!0,this.selected=3)}}}).call(this,s("c8ba"))}});
//# sourceMappingURL=app.392d958a.js.map