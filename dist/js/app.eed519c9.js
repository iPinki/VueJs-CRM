(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-10b86dd9":"f21cb8b8","chunk-2d217a99":"ac09d4bf","chunk-2d21a3d2":"3cf6a663","chunk-49ee4951":"4c2c4264","chunk-53c8ec65":"61508633","chunk-5f4ad635":"9961b5cd","chunk-72449522":"51335284","chunk-ac563e06":"23c53a22","chunk-c420df12":"c81ae3f2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-ac563e06":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-10b86dd9":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-49ee4951":"31d6cfe0","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-72449522":"31d6cfe0","chunk-ac563e06":"76ae812b","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("1da1"),a=r("2b0e"),o=r("2f62"),i=(r("b0c0"),r("59ca")),c=r.n(i),s={actions:{login:function(e,t){e.dispatch;var r=e.commit,a=t.email,o=t.password;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.auth().signInWithEmailAndPassword(a,o);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),r("setError",e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},register:function(e,t){var r=e.dispatch,a=e.commit,o=t.email,i=t.password,s=t.name;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.auth().createUserWithEmailAndPassword(o,i);case 3:return e.next=5,r("getUid");case 5:return t=e.sent,e.next=8,c.a.database().ref("/users/".concat(t,"/info")).set({bill:1e4,name:s});case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),a("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getUid:function(){var e=c.a.auth().currentUser;return e?e.uid:null},logout:function(e){var t=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.auth().signOut();case 2:t("clearInfo");case 3:case"end":return e.stop()}}),e)})))()}}},u=r("5530"),l={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{updateInfo:function(e,t){var r=e.dispatch,a=e.commit,o=e.getters;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("getUid");case 3:return n=e.sent,i=Object(u["a"])({},o.info,{},t),e.next=7,c.a.database().ref("/users/".concat(n,"/info")).update(t);case 7:a("setInfo",i),e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),a("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},fetchInfo:function(e){var t=e.dispatch,r=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/info")).once("value");case 6:a=e.sent.val(),r("setInfo",a),e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](0),r("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},getters:{info:function(e){return e.info}}},d=(r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){var t=e.commit,r=e.dispatch;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/categories")).once("value");case 6:if(e.t0=e.sent.val(),e.t0){e.next=9;break}e.t0={};case 9:return a=e.t0,e.abrupt("return",Object.keys(a).map((function(e){return Object(u["a"])({},a[e],{id:e})})));case 13:throw e.prev=13,e.t1=e["catch"](0),t("setError",e.t1),e.t1;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},fetchCategoryById:function(e,t){var r=e.commit,a=e.dispatch;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/categories")).child(t).once("value");case 6:if(e.t0=e.sent.val(),e.t0){e.next=9;break}e.t0={};case 9:return o=e.t0,e.abrupt("return",Object(u["a"])({},o,{id:t}));case 13:throw e.prev=13,e.t1=e["catch"](0),r("setError",e.t1),e.t1;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},updateCategory:function(e,t){var r=e.commit,a=e.dispatch,o=t.title,i=t.limit,s=t.id;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("getUid");case 3:return t=e.sent,e.next=6,c.a.database().ref("/users/".concat(t,"/categories")).child(s).update({title:o,limit:i});case 6:e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](0),r("setError",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},createCategory:function(e,t){var r=e.commit,a=e.dispatch,o=t.title,i=t.limit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("getUid");case 3:return t=e.sent,e.next=6,c.a.database().ref("/users/".concat(t,"/categories")).push({title:o,limit:i});case 6:return n=e.sent,e.abrupt("return",{title:o,limit:i,id:n.key});case 10:throw e.prev=10,e.t0=e["catch"](0),r("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}}),p={actions:{createRecord:function(e,t){var r=e.dispatch,a=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/records")).push(t);case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e["catch"](0),a("setError",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},fetchRecords:function(e){var t=e.dispatch,r=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/records")).once("value");case 6:if(e.t0=e.sent.val(),e.t0){e.next=9;break}e.t0={};case 9:return a=e.t0,e.abrupt("return",Object.keys(a).map((function(e){return Object(u["a"])({},a[e],{id:e})})));case 13:throw e.prev=13,e.t1=e["catch"](0),r("setError",e.t1),e.t1;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},fetchRecordById:function(e,t){var r=e.dispatch,a=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("getUid");case 3:return n=e.sent,e.next=6,c.a.database().ref("/users/".concat(n,"/records")).child(t).once("value");case 6:if(e.t0=e.sent.val(),e.t0){e.next=9;break}e.t0={};case 9:return o=e.t0,e.abrupt("return",Object(u["a"])({},o,{id:t}));case 13:throw e.prev=13,e.t1=e["catch"](0),a("setError",e.t1),e.t1;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="cdca85a6eb6a4bc34d8023e1aaad98fe",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,UAH"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},getters:{error:function(e){return e.error}},modules:{auth:s,info:l,category:d,record:p}})},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),i=r("8832"),c=r.n(i),s=r("58ca"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},p=[],f=r("b444"),m={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(f["a"][e.code]||"Что-то пошло не так")}}},h=m,g=r("2877"),v=Object(g["a"])(h,d,p,!1,null,null,null),b=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{key:e.locale+"1",staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"CreateNewRecord",expression:"'CreateNewRecord'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},y=[],k=(r("b0c0"),r("96cf"),r("1da1")),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(" "+e._s(e._f("localize")("ProfileTitle"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(" "+e._s(e._f("localize")("Exit"))+" ")])])])])])])])},_=[],x={data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},E=x,O=Object(g["a"])(E,C,_,!1,null,null,null),R=O.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},N=[],T=r("e977"),U={props:["value"],data:function(){return{links:[{title:Object(T["a"])("Menu_Bill"),url:"/",exact:!0},{title:Object(T["a"])("Menu_History"),url:"/history"},{title:Object(T["a"])("Menu_Planning"),url:"/planning"},{title:Object(T["a"])("Menu_NewRecord"),url:"/record"},{title:Object(T["a"])("Menu_Categories"),url:"/categories"}]}}},A=U,I=Object(g["a"])(A,j,N,!1,null,null,null),P=I.exports,$={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.getters.info.bill&&e.$store.getters.info.name){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:R,Sidebar:P},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(f["a"][e.code]||"Что-то пошло не так")}}},B=$,L=Object(g["a"])(B,w,y,!1,null,null,null),D=L.exports,S={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:b,MainLayout:D}},H=S,F=(r("5c0b"),Object(g["a"])(H,u,l,!1,null,null,null)),W=F.exports,z=(r("45fc"),r("d3b7"),r("8c4f")),q=r("59ca"),J=r.n(q);n["a"].use(z["a"]);var V=new z["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-49ee4951").then(r.bind(null,"e4bb"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-72449522").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-ac563e06").then(r.bind(null,"c66d"))}},{path:"/record",name:"reord",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}]});V.beforeEach((function(e,t,r){var n=J.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var K=V,Y=r("4360");r("caad"),r("2532");function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");Y["a"].getters.info.locale;return new Intl.DateTimeFormat("locale",r).format(new Date(e))}var G=r("5bb3"),X={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},Z={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},ee=(r("99af"),{install:function(e){e.prototype.$title=function(e){var t="iPinki CRM";return"".concat(Object(T["a"])(e)," | ").concat(t)}}}),te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],ne={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},ae=ne,oe=Object(g["a"])(ae,te,re,!1,null,null,null),ie=oe.exports,ce=r("9483");Object(ce["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var se;r("6885"),r("ea7b"),r("66ce");n["a"].use(Z),n["a"].use(ee),n["a"].use(o.a),n["a"].use(s["a"]),n["a"].filter("date",Q),n["a"].filter("currency",G["a"]),n["a"].filter("localize",T["a"]),n["a"].directive("tooltip",X),n["a"].component("Loader",ie),n["a"].component("Paginate",c.a),J.a.initializeApp({apiKey:"AIzaSyDF75grQ1nMc9xRv4oTVY6ksT22jDrNJsI",authDomain:"ipinki-vue-crm.firebaseapp.com",databaseURL:"https://ipinki-vue-crm.firebaseio.com",projectId:"ipinki-vue-crm",storageBucket:"ipinki-vue-crm.appspot.com",messagingSenderId:"757183221061",appId:"1:757183221061:web:090c0e8c9788e9e5c9c22c"}),J.a.auth().onAuthStateChanged((function(){se||(se=new n["a"]({router:K,store:Y["a"],render:function(e){return e(W)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"UAH";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Введите имя","Update":"Обновить","Create":"Создать","Bill":"Счет","Name":"Имя","Exit":"Выйти","Edit":"Редактировать","Menu_Bill":"Счет","Detail_Title":"Запись","Menu_History":"История","Menu_Planning":"Планирование","Menu_NewRecord":"Новая запись","Menu_Categories":"Категории","Выйти":"Выйти","Title":"Название","Limit":"Лимит","Message_EnterDescription":"Введите описание","Message_CategoryTitle":"Введите название категории","Message_MinLength":"Минимальная значение","Category_HasBeenCreated":"Категория была создана","Category_HasBeenUpdated":"Категория упешно обновлена","SelectCategory":"Выберите категорию","Amount":"Сумма","Date":"Дата","Description":"Описание","Category":"Категория","Categories":"Категории","NoCategories":"Категорий пока нет","Type":"Тип","Open":"Открыть","OpenRecord":"Посмотреть запись","BillInCurrency":"Счет в валюте","Currency":"Валюта","CurrencyType":"Курс","CurrencyAmountTitle":"Курс валют","Income":"Доход","Outcome":"Расход","Of":"из","History_Title":"История записей","NoRecords":"Записей пока нет","AddFirst":"Добавьте первую","Back":"Назад","Forward":"Вперед","CostsForCategories":"Расходы по категориям","MoreThan":"Превышение на","Stayed":"Осталось","RecordHasBeenCreated":"Запись успешно создана","NotEnoughMoney":"Недостаточно средств на счете","CRM_Title":"Домашняя бухгалтерия","Message_EmailRequired":"Поле Email не должно быть пустым","Message_EmailValid":"Введите корретный Email","Password":"Пароль","Message_EnterPassword":"Введите пароль","Login":"Войти","NoAccount":"Нет аккаунта?","HasAccount":"Уже есть аккаунт?","Register":"Зарегистрироваться","AcceptRules":"С правилами согласен","CreateNewRecord":"Создать новую запись","Logout":"Вы вышли из системы","FirstLogin":"Для начала войдите в систему","NoUserWithEmail":"Пользователя с таким email не существует","WrongPassword":"Неверный пароль","EmailInUse":"Email уже занят","Error":"Ошибка"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logout",login:"FirstLogin","auth/user-not-found":"NoUserWithEmail","auth/wrong-password":"WrongPassword","auth/email-already-in-use":"EmailInUse"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("4360"),a=r("7704"),o=r("edd4"),i={"ru-RU":a,"en-US":o};function c(e){var t=n["a"].getters.info.locale||"ru-RU";return i[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter name","Update":"Update","Create":"Create","Bill":"Bill","Name":"Name","Exit":"Exit","Edit":"Edit","Menu_Bill":"Bill","Detail_Title":"Detail","Menu_History":"History","Menu_Planning":"Planning","Menu_NewRecord":"New record","Menu_Categories":"Categories","Title":"Title","Limit":"Limit","Message_EnterDescription":"Enter description","Message_CategoryTitle":"Enter category name","Message_MinLength":"Mininum length is","Category_HasBeenCreated":"Category has been created","Category_HasBeenUpdated":"Category has been updated","SelectCategory":"Select category","Amount":"Amount","Date":"Date","Description":"Description","Category":"Category","Categories":"Categories","NoCategories":"No categories","Type":"Type","Open":"Open","OpenRecord":"Open record","BillInCurrency":"Bill in currencies","Currency":"Currency","CurrencyType":"Rate","CurrencyAmountTitle":"Currencies rates","Income":"Income","Outcome":"Outcome","Of":"of","History_Title":"Records history","NoRecords":"No records","AddFirst":"Add first","Back":"Back","Forward":"Forward","CostsForCategories":"Categories costs","MoreThan":"Excess on","Stayed":"Left","RecordHasBeenCreated":"Record has been created","NotEnoughMoney":"Not enough money","CRM_Title":"CRM by iPinki","Message_EmailRequired":"Email field is required","Message_EmailValid":"Enter valid email","Password":"Password","Message_EnterPassword":"Enter password","Login":"Login","NoAccount":"Has no account?","HasAccount":"Has account?","Register":"Register","AcceptRules":"Agree with rules","CreateNewRecord":"Create new record","Logout":"You have logged out","FirstLogin":"First login","NoUserWithEmail":"No user with email","WrongPassword":"Invalid password","EmailInUse":"Email is already in use","Error":"Error"}')}});
//# sourceMappingURL=app.eed519c9.js.map