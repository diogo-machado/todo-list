(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(6),s=o.n(c),l=(o(13),o(2)),r=o(7),i=function(e){var t=e.inputText,o=e.setInputText,a=e.todos,c=e.setTodos,s=e.setStatus;return n.a.createElement("form",{action:""},n.a.createElement("div",{className:"control"},n.a.createElement("input",{value:t,onChange:function(e){o(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){if(e.preventDefault(),!t)return"empty";c([].concat(Object(r.a)(a),[{text:t,completed:!1,id:1e3*Math.random()}])),o("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"}))),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){s(e.target.value)},name:"",id:"",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))};i.defaultProps={inputText:"",todos:[],setTodos:function(){},setStatus:function(){}};var u=i,d=o(4),m=function(e){var t=e.text,o=e.todos,a=e.setTodos,c=e.todo;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(c.completed?"completed":"")},t),n.a.createElement("button",{type:"button",onClick:function(){a(o.map((function(e){return e.id===c.id?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{type:"button",onClick:function(){a(o.filter((function(e){return e.id!==c.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))};m.defaultProps={text:"",todos:[],setTodos:function(){},todo:{text:"",completed:!1,id:1}};var f=m,p=function(e){var t=e.todos,o=e.setTodos,a=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},a.map((function(e){return n.a.createElement(f,{setTodos:o,todos:t,key:e.id,text:e.text,todo:e})}))))};p.defaultProps={todos:[],setTodos:function(){},filteredTodos:[]};var E=p;o(14);var b=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),i=r[0],d=r[1],m=Object(a.useState)("all"),f=Object(l.a)(m,2),p=f[0],b=f[1],v=Object(a.useState)([]),h=Object(l.a)(v,2),g=h[0],N=h[1];return Object(a.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));d(e)}}()}),[]),Object(a.useEffect)((function(){!function(){switch(p){case"completed":N(i.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(i.filter((function(e){return!1===e.completed})));break;default:N(i)}}(),localStorage.setItem("todos",JSON.stringify(i))}),[i,p]),n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Diogo Todo List")),n.a.createElement(u,{inputText:o,setInputText:c,todos:i,setTodos:d,setStatus:b}),n.a.createElement(E,{setTodos:d,todos:i,filteredTodos:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,o){e.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3b572fc2.chunk.js.map