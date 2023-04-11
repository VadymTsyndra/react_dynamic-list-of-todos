(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),r=c(1),i=(c(10),c(11),c(4)),o=c.n(i),d=c(0);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var j=function(e){var t=e.todos,c=e.fnSelectTodo,a=e.selectTodoId,n=e.fnSelectUser,l=e.status,i=Object(r.useMemo)((function(){return function(e,t){switch(e){case s.All:return t;case s.Active:return t.filter((function(e){return!e.completed}));case s.Completed:return t.filter((function(e){return e.completed}));default:throw new Error("Unexpected values")}}(l,t)}),[t,l]);return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:i.map((function(e){var t=e.id,s=e.completed,l=e.title,r=e.userId;return Object(d.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":t===a}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:s&&Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()({"has-text-danger":!s,"has-text-success":s}),children:l})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:a===t?Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(0)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye-slash"})})}):Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e,t){c(e),n(t)}(t,r)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},u=function(e){var t=e.status,c=e.handleChange,a=e.query,n=e.setQuery;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{value:t,"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},children:[Object(d.jsx)("option",{value:s.All,children:"All"}),Object(d.jsx)("option",{value:s.Active,children:"Active"}),Object(d.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button","aria-label":"Clear search",className:"delete",onClick:function(){return n("")}})})]})]})},b=(c(13),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.userId,c=e.todo,s=e.fnSelectTodo,a=Object(r.useState)(null),n=Object(l.a)(a,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){(function(e){return h("/users/".concat(e))})(t).then((function(e){return o(e)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",c.id]}),Object(d.jsx)("button",{type:"button","aria-label":"Mute volume",className:"delete","data-cy":"modal-close",onClick:function(){return s(0)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(b,{})]})},O=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(0),i=Object(l.a)(n,2),o=i[0],O=i[1],x=Object(r.useState)(0),f=Object(l.a)(x,2),p=f[0],N=f[1],v=Object(r.useState)(s.All),y=Object(l.a)(v,2),g=y[0],C=y[1],S=Object(r.useState)(""),k=Object(l.a)(S,2),w=k[0],T=k[1],A=c.filter((function(e){return e.id===o})),I=Object(l.a)(A,1)[0],E=c.filter((function(e){return function(e,t){return e.toLowerCase().includes(t.toLowerCase())}(e.title,w)}));return Object(r.useEffect)((function(){h("/todos").then((function(e){return a(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(u,{status:g,handleChange:function(e){C(e)},query:w,setQuery:T})}),Object(d.jsx)("div",{className:"block",children:c.length?Object(d.jsx)(j,{todos:E,fnSelectTodo:function(e){return O(e)},selectTodoId:o,fnSelectUser:function(e){return N(e)},status:g}):Object(d.jsx)(b,{})})]})})}),!!o&&Object(d.jsx)(m,{userId:p,todo:I,fnSelectTodo:function(e){return O(e)}})]})};n.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3ecc7f79.chunk.js.map