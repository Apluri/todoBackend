(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{60:function(e,t,n){},62:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),a=n(23),l=n.n(a),o=(n(60),n(22)),i=n(33),d=n(9),u=n.n(d),j=n(20),b=n(4),f=(n(62),n(15)),O=n(6),h=n(49),x=n(21),v=n.n(x),m=function(){var e=Object(O.g)();return Object(c.jsx)("h1",{children:function(){switch(e.pathname){case"/":return"Home";case"/folders":return"Folders";case"/settings":return"Settings";case"/add":return"Add task";case"/task":return"Task description";default:return"Something went wrong :)"}}()})},p=function(e){e.searchData;var t=Object(s.useState)(""),n=Object(b.a)(t,2);n[0],n[1];return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(m,{})})},g=n(100),k=n(101),N=function(e){var t=e.selectedFolder,n=e.todos,r=(e.sortTodosHandler,e.folders),a=e.handleDelete,l=e.postTaskHandler,i=e.setSelectedTask,d=Object(s.useState)([3,1,5]),u=Object(b.a)(d,2),j=u[0],f=(u[1],Object(O.f)()),h=function(e){if(null!==e){var t=new Date(e);return"".concat(("0"+t.getDate()).slice(-2),".").concat(("0"+(t.getMonth()+1)).slice(-2),".")}return""};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Things to do"}),Object(c.jsxs)("div",{className:"todos",children:[" ",function(){var e=function(e){return Object(c.jsx)(c.Fragment,{children:j.map((function(t){switch(t){case 1:return s(e);case 2:return Object(c.jsxs)("div",{children:[" ",d(e)]});case 4:return Object(c.jsxs)("div",{children:[" ",e.timeCreated]});case 5:return Object(c.jsx)("div",{children:u(e)});case 6:return Object(c.jsxs)("div",{children:[" ",b(e.folder_id)]});default:return Object(c.jsx)(c.Fragment,{children:" "})}}))})},s=function(e){return Object(c.jsx)("div",{className:e.isDone?"task-done":"task-test",children:e.title})},d=function(e){return Object(c.jsxs)(c.Fragment,{children:[e.description," "]})},u=function(e){return Object(c.jsxs)(c.Fragment,{children:[" ",h(e.deadline)," "]})},b=function(e){return 0===r.length||null===e?null:r[r.map((function(e){return e.id})).indexOf(e)].name},O=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(g.a,{className:"fa fa-trash",onClick:function(){return a(e.id)}})})},x=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(k.a,{checked:Boolean(e.isDone),onChange:function(t){return function(e,t){var n=Object(o.a)({},t);n.isDone=!n.isDone,l(n)}(0,e)},color:"default",inputProps:{"aria-label":"checkbox with default color"}})})};return Object(c.jsx)(c.Fragment,{children:n.map((function(n){return s=n.folder_id,(null===t||void 0===t||t.id===s)&&Object(c.jsxs)("div",{className:"todo-item",children:[Object(c.jsxs)("div",{children:[x(n)," "]}),Object(c.jsx)("div",{className:"clickable-area",onClick:function(){return function(e){i(e),f.push("/task")}(n)},children:e(n)}),Object(c.jsx)("div",{children:O(n)})]},n.id);var s}))})}()]})]})},S=function(e){var t=e.todos,n=e.folders,s=e.handleDelete,r=e.closeNav,a=e.postTaskHandler,l=e.setSelectedTask,o=e.sortTodosHandler,i=Object(O.f)();return Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsx)("div",{className:"add-btn",children:Object(c.jsx)(g.a,{classes:!0,className:"fa fa-plus-square",onClick:function(){return r(),void i.push("/add")}})}),Object(c.jsx)(N,{selectFolder:null,todos:t,folders:n,handleDelete:s,postTaskHandler:a,setSelectedTask:l,sortTodosHandler:o})]})},w=function(e){var t=e.todos,n=e.folders,r=e.handleDelete,a=e.postTaskHandler,l=e.setSelectedTask,o=e.sortTodosHandler,i=e.handleFolderDelete,d=e.postFolderHandler,u=Object(s.useState)(null),j=Object(b.a)(u,2),f=j[0],O=j[1],h=Object(s.useRef)(null),x=Object(s.useState)(!1),v=Object(b.a)(x,2),m=v[0],p=v[1],g=Object(s.useRef)(),k=Object(s.useState)(""),S=Object(b.a)(k,2),w=S[0],T=S[1],C=Object(s.useState)(!1),F=Object(b.a)(C,2),D=(F[0],F[1]);Object(s.useEffect)((function(){var e=function(e){g.current.contains(e.target)||m&&p(!m)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[m]);var H=function(){d({name:w})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:g,children:["Folder selected:",null!==f?" ".concat(f.name):" No folder selected",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return p(!m)},className:"folder-button-trigger",children:"Select folder"}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:h,className:"menu ".concat(m?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Create Folder",Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:w,onChange:function(e){return T(e.target.value)}})}),Object(c.jsx)("button",{onClick:function(e){H(),D(!1)},children:"Add"})]}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return O(e)},children:e.name}),Object(c.jsx)("button",{onClick:function(){return i(e.id)},children:"delete"})]},e.id)}))})]})})})]}),Object(c.jsx)(N,{selectedFolder:f,todos:t,folders:n,handleDelete:r,postTaskHandler:a,setSelectedTask:l,sortTodosHandler:o})]})},T=function(e){var t=e.deleteAllTasks,n=e.deleteAllFolders;return Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return t()},children:"Delete all tasks"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return n()},children:"Delete all folders"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return t(),void n()},children:"Full reset"})]})},C=n(32),F=function(e){e.todos,e.setTodos;var t=e.folders,n=(e.navSize,e.postTaskHandler),r=e.postFolderHandler,a=Object(s.useState)(""),l=Object(b.a)(a,2),o=l[0],i=l[1],d=Object(s.useState)(""),u=Object(b.a)(d,2),j=u[0],f=u[1],h=Object(s.useState)(null),x=Object(b.a)(h,2),v=x[0],m=x[1],p=Object(s.useState)(""),k=Object(b.a)(p,2),N=k[0],S=k[1],w=Object(s.useState)(""),T=Object(b.a)(w,2),F=T[0],D=T[1],H=Object(s.useState)(null),y=Object(b.a)(H,2),z=y[0],E=y[1],A=Object(s.useRef)(null),R=Object(s.useState)(!1),M=Object(b.a)(R,2),_=M[0],L=M[1],q=Object(s.useState)(!1),I=Object(b.a)(q,2),B=I[0],J=I[1],P=Object(s.useRef)(),Q=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(e){P.current.contains(e.target)||_&&L(!_),Q.current.contains(e.target)||B&&J(!B)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[_,B]);var G=Object(O.f)(),K=function(e){var t=e.getTimezoneOffset()/60;return t<0&&(t-=2*t),e.setHours(t),e=e.toISOString().split("T")[0]},U=function(e){e.preventDefault();var t={title:o,description:j,deadline:null===z?null:K(z),folder_id:v};n(t),i(""),G.push("/")},V=function(){r({name:N})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"add-todo",children:[Object(c.jsxs)("form",{onSubmit:U,children:[Object(c.jsx)("input",{type:"text",placeholder:"Task title",value:o,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{children:"Add"})]}),Object(c.jsx)("form",{onSubmit:U,children:Object(c.jsx)("div",{className:"description-box",children:Object(c.jsx)("textarea",{type:"text",placeholder:"Task description (optional)",value:j,onChange:function(e){return f(e.target.value)}})})})]}),Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:P,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(g.a,{classes:!0,className:"fa fa-folder-open",onClick:function(){return B&&J(!B),void L(!_)}}),""==F?"No folder selected":F]}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:A,className:"menu ".concat(_?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Create Folder",Object(c.jsx)("form",{onSubmit:U,children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:N,onChange:function(e){return S(e.target.value)}})}),Object(c.jsx)(g.a,{className:"fa fa-plus-square",onClick:function(){return V()}})]}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return function(e){isNaN(e.id)?V():m(e.id),D(e.name),L(!1)}(e)},children:e.name})},e.id)}))})]})})}),Object(c.jsxs)("div",{className:"date-selection-show",children:[Object(c.jsx)(g.a,{className:"fa fa-calendar",onClick:function(){return J(!B)}}),null===z?"No date selected":z.toDateString()]}),Object(c.jsx)("div",{className:"calendar-container",ref:Q,children:Object(c.jsx)("nav",{ref:Q,className:"menu ".concat(B?"active":"inactive"),children:Object(c.jsx)(C.a,{value:null,locale:"en-EN",onChange:E})})})]})]})},D=function(e){var t=e.navSize,n=e.handleNavSizeChange;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"left-sidebar",style:{width:t},children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsxs)(f.b,{exact:!0,to:"/",className:"navlink-home",activeClassName:"active",children:[Object(c.jsx)(g.a,{classes:!0,className:"fa fa-home"}),"Home"]}),Object(c.jsxs)(f.b,{to:"/folders",className:"navlink",activeClassName:"active",children:[Object(c.jsx)(g.a,{classes:!0,className:"fa fa-folder-open"}),"Folders"]}),Object(c.jsxs)(f.b,{to:"/settings",className:"navlink",activeClassName:"active",children:[Object(c.jsx)(g.a,{classes:!0,className:"fa fa-cog"}),"Settings"]})]})}),Object(c.jsx)("div",{className:"burger-btn",children:Object(c.jsx)(g.a,{classes:!0,className:"fa fa-bars",onClick:function(){return n()}})})]})},H=function(e){return Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"100%"===e.navSize?"blur":"",children:e.children})})},y=function(e){var t=e.folders,n=e.selectedTask,r=e.setSelectedTask,a=e.postTaskHandler,l=e.postFolderHandler,i=e.toggleMode,d=e.handleDelete,u=e.redirect,j=Object(s.useState)(n.title),f=Object(b.a)(j,2),O=f[0],h=f[1],x=Object(s.useState)(n.description),v=Object(b.a)(x,2),m=v[0],p=v[1],g=Object(s.useState)(null===n.deadline?null:new Date(n.deadline)),k=Object(b.a)(g,2),N=k[0],S=k[1],w=Object(s.useState)(n.folder_id),T=Object(b.a)(w,2),F=T[0],D=T[1],H=Object(s.useState)(""),y=Object(b.a)(H,2),z=y[0],E=y[1],A=Object(s.useRef)(null),R=Object(s.useState)(!1),M=Object(b.a)(R,2),_=M[0],L=M[1],q=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(e){q.current.contains(e.target)||_&&L(!_)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[_]);var I,B=function(e){isNaN(e.id)?P():D(e.id),L(!1)},J=function(){var e=Object(o.a)({},n);e.id=n.id,e.title=O,e.description=m,e.deadline=null===N?null:function(e){var t=e.getTimezoneOffset()/60;return t<0&&(t-=2*t),e.setHours(t),e.toISOString().split("T")[0]}(N),e.folder_id=F,r(e),a(e),h(""),i()},P=function(){l({name:z})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return J(),void i()},children:"save"}),Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"text",placeholder:"Task title",value:O,onChange:function(e){return h(e.target.value)}})}),Object(c.jsx)("br",{}),Object(c.jsx)("form",{children:Object(c.jsx)("div",{className:"description-box",children:Object(c.jsx)("textarea",{type:"text",placeholder:"Task description (optional)",value:m,onChange:function(e){return p(e.target.value)}})})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:q,children:["Folder selected:"," ",null==F?"nothing":(I=F,0===t.length?null:t[t.map((function(e){return e.id})).indexOf(I)].name),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return L(!_)},className:"folder-button-trigger",children:"Select folder"}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:A,className:"menu ".concat(_?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Create Folder",Object(c.jsx)("form",{onSubmit:J,children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:z,onChange:function(e){return E(e.target.value)}})}),Object(c.jsx)("button",{onClick:B,children:"Add"})]}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return B(e)},children:e.name})},e.id)}))})]})})})]}),"Date selected:"," ",null===N&&null===n.deadline?"nothing":null===N&&null!==n.deadline?new Date(n.deadline).toDateString():N.toDateString(),Object(c.jsx)("div",{className:"calendar-container",children:Object(c.jsx)(C.a,{value:N,locale:"en-EN",onChange:S})}),Object(c.jsx)("button",{onClick:function(){return d(n.id),void u()},children:"Delete task"})]})},z=function(e){var t,n=e.folders,s=e.selectedTask,r=e.toggleMode,a=e.handleDelete,l=e.redirect;return Object(c.jsxs)("div",{className:"show-container",children:[Object(c.jsx)("button",{onClick:function(){return r()},children:"edit"}),Object(c.jsx)("div",{className:"show-folder",children:"Folder:"}),Object(c.jsxs)("div",{className:"show-folder-content",children:[null===s.folder_id?"":(t=s.folder_id,0===n.length?null:n[n.map((function(e){return e.id})).indexOf(t)].name),Object(c.jsx)("div",{className:"show-title",children:"Title"}),Object(c.jsx)("div",{className:"show-title-content",children:s.title})]}),Object(c.jsx)("div",{className:"show-description",children:"Description:"}),Object(c.jsx)("div",{className:"show-description-content",children:s.description}),Object(c.jsx)("div",{className:"show-deadline",children:"Deadline:"}),Object(c.jsxs)("div",{className:"show-deadline-content",children:[" ",null===s.deadline?"":new Date(s.deadline).toDateString()]}),Object(c.jsx)("button",{onClick:function(){return a(s.id),void l()},children:"Delete task"})]})},E=function(e){var t=e.folders,n=e.selectedTask,r=e.setSelectedTask,a=e.postTaskHandler,l=e.postFolderHandler,o=e.handleDelete,i=Object(O.f)(),d=function(){i.push("/")},u=Object(s.useState)(!1),j=Object(b.a)(u,2),f=j[0],h=j[1],x=function(){h(!f)};return n?f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("br",{}),Object(c.jsx)(y,{folders:t,selectedTask:n,setSelectedTask:r,postTaskHandler:a,postFolderHandler:l,toggleMode:x,handleDelete:o,redirect:d})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("br",{}),Object(c.jsx)(z,{folders:t,selectedTask:n,toggleMode:x,handleDelete:o,redirect:d})]}):Object(c.jsxs)(c.Fragment,{children:[" ",d()]})},A=function(){var e="",t=Object(s.useState)(""),n=Object(b.a)(t,2),r=n[0],a=n[1],l=Object(s.useRef)(!0),d=Object(s.useState)("timeCreated"),x=Object(b.a)(d,2),m=x[0],g=x[1];e="https://tamk-4a00ez62-3001-group04.herokuapp.com/api";var k=Object(s.useState)([]),N=Object(b.a)(k,2),C=N[0],y=N[1],z=Object(s.useState)([]),A=Object(b.a)(z,2),R=A[0],M=A[1],_=Object(s.useState)(null),L=Object(b.a)(_,2),q=L[0],I=L[1];Object(s.useEffect)((function(){Q()}),[r]);var B=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(null===t?"":"?search=".concat(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e,t){var n=Object(i.a)(e),c=function(e,n){return e[t]>n[t]?1:e[t]<n[t]||null===e[t]?-1:0};return l.current?n.sort((function(e,t){return c(e,t)})):n.sort((function(e,t){return c(t,e)})),n},P=function(e){e!==m&&g(e),l.current=!l.current,y(J(C,e))},Q=function(){var t=function(){var t=Object(j.a)(u.a.mark((function t(n){var c,s,r=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.length>1&&void 0!==r[1]?r[1]:"",t.next=3,v.a.get(e+"/"+n+c);case 3:return s=t.sent,t.abrupt("return",s.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Promise.all([t("tasks",r),t("folders")]).then((function(e){var t=J(e[0],m);y(t),M(e[1])})).catch((function(e){return console.log(e)}))},G=function(){var t=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,void 0===n.id){t.next=6;break}return t.next=4,v.a.post(e+"/tasks/".concat(n.id),Object(o.a)({},n));case 4:t.next=8;break;case 6:return t.next=8,v.a.post(e+"/tasks",Object(o.a)({},n));case 8:Q(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post(e+"/folders",Object(o.a)({},n));case 3:Q(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(j.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/tasks/"+n);case 2:204!==(c=t.sent).status&&(console.log("error while deleting"),console.log(c)),Q();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(j.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/folders/"+n);case 2:204!==(c=t.sent).status&&(console.log("error while deleting"),console.log(c)),Q();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/tasks/");case 2:204!==(n=t.sent).status&&(console.log("error while deleting"),console.log(n)),Q();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/folders/");case 2:204!==(n=t.sent).status&&(console.log("error while deleting"),console.log(n)),Q();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=Object(s.useState)("0px"),Z=Object(b.a)(Y,2),$=Z[0],ee=Z[1],te=Object(h.useMediaQuery)({query:"(max-width: 900px)"}),ne=function(){te&&ee("0px")};return Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p,{searchData:B}),Object(c.jsx)(D,{navSize:$,handleNavSizeChange:function(){ee(te?"100%"===$?"0%":"100%":"300px"===$?"0px":"300px")}}),Object(c.jsx)(H,{navSize:$,children:Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{exact:!0,path:"/",children:Object(c.jsx)(S,{todos:C,folders:R,handleDelete:U,closeNav:ne,navSize:$,postTaskHandler:G,setSelectedTask:I,sortTodosHandler:P})}),Object(c.jsx)(O.a,{path:"/folders",children:Object(c.jsx)(w,{todos:C,folders:R,handleDelete:U,closeNav:ne,navSize:$,postTaskHandler:G,setSelectedTask:I,sortTodosHandler:P,handleFolderDelete:V,postFolderHandler:K})}),Object(c.jsx)(O.a,{path:"/settings",children:Object(c.jsx)(T,{deleteAllTasks:W,deleteAllFolders:X})}),Object(c.jsx)(O.a,{path:"/add",children:Object(c.jsx)(F,{todos:C,folders:R,setTodos:y,navSize:$,postTaskHandler:G,postFolderHandler:K})}),Object(c.jsx)(O.a,{path:"/task",children:Object(c.jsx)(E,{folders:R,selectedTask:q,setSelectedTask:I,postTaskHandler:G,postFolderHandler:K,todos:C,handleDelete:U})})]})})]})};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.da7c8f91.chunk.js.map