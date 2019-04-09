(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=(a(35),a(7)),i=a(8),s=a(10),u=a(9),m=a(11),h=a(65),p=a(64),g=a(14),d=a(15),b=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",{className:"navbar__heading"},"Book App"))},E=function(){return r.a.createElement("footer",{className:"footer"},"Book App 2019")},f=a(66),_=a(6),v=a.n(_),N=a(16),y=a.n(N),k=function(e){var t=e.booksCount,a=e.pageSize,n=e.onPageChange,l=e.currentPage,o=Math.ceil(t/a);if(1===o)return null;var c=y.a.range(1,o+1);return r.a.createElement("nav",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},c.map(function(e){return r.a.createElement("li",{key:e,className:e===l?"pagination__item pagination__item--active":"pagination__item"},r.a.createElement("a",{className:"pagination__link",href:"#",onClick:function(){return n(e)}},e))})))};var C=a(12),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,a.onDeleteClick=function(e){v.a.delete("/api/books/"+e).then(function(e){a.setState({books:a.state.books.filter(function(t){return t._id!==e.data._id})})})},a.handlePageChange=function(e){a.setState({currentPage:e})},a.state={books:[],pageSize:5,currentPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,v.a.get("/api/books").then(function(t){e.setState({books:t.data})}).catch(function(e){return console.log(e)})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(){var e=this;v.a.get("/api/books").then(function(t){e._isMounted&&e.setState({books:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,n=t.pageSize,l=t.currentPage,o=function(e,t,a){var n=(t-1)*a;return y()(e).slice(n).take(a).value()}(a,l,n);return a?r.a.createElement("div",{className:"list"},r.a.createElement("table",{className:"list__table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Genre"),r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Pages"),r.a.createElement("th",null,"ISBN"),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,o.map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.author),r.a.createElement("td",null,t.genre),r.a.createElement("td",null,t.year),r.a.createElement("td",null,t.pages),r.a.createElement("td",null,t.isbn),r.a.createElement("td",null,r.a.createElement(f.a,{className:"button button--edit",to:"/edit/".concat(t._id)},r.a.createElement(C.a,{className:"icon",icon:"pencil-alt"}),"Edit")),r.a.createElement("td",null,r.a.createElement("button",{className:"button button--delete",onClick:function(){return e.onDeleteClick(t._id)}},r.a.createElement(C.a,{className:"icon",icon:"minus-circle"}),"Delete")))}))),r.a.createElement(k,{booksCount:a.length,pageSize:n,currentPage:l,onPageChange:this.handlePageChange})):r.a.createElement("p",{className:"loading"},"Loading...")}}]),t}(n.Component),O=function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(f.a,{className:"button button--add",to:"books/add"},r.a.createElement(C.a,{className:"icon icon--add",icon:"plus-circle"}),"Add book"),r.a.createElement(j,null))},S=a(17),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",author:"",genre:"",year:"",pages:"",isbn:""},a.onChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state;v.a.post("/api/books/add",t).then(function(e){return console.log(e.data)}),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.author,n=e.genre,l=e.year,o=e.pages,c=e.isbn;return r.a.createElement("div",{className:"form"},r.a.createElement(f.a,{className:"button button--back",to:"/"},r.a.createElement(C.a,{className:"icon icon--back",icon:"long-arrow-alt-left"}),"Back"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form__container"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",value:t,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("input",{type:"text",name:"author",value:a,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"genre"},"Genre"),r.a.createElement("input",{type:"text",name:"genre",value:n,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"year"},"Year"),r.a.createElement("input",{type:"number",name:"year",value:l,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"pages"},"Pages"),r.a.createElement("input",{type:"number",name:"pages",value:o,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"isbn"},"ISBN"),r.a.createElement("input",{type:"number",name:"isbn",value:c,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("button",{className:"button button--submit",type:"submit"},"Submit"))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t={title:a.state.title,author:a.state.author,genre:a.state.genre,year:a.state.year,pages:a.state.pages,isbn:a.state.isbn};v.a.post("/api/books/edit/"+a.props.match.params.id,t).then(function(e){return console.log(e.data)}),a.props.history.push("/")},a.onChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.state={title:"",author:"",genre:"",year:"",pages:"",isbn:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/books/"+this.props.match.params.id).then(function(t){e.setState({title:t.data.title,author:t.data.author,genre:t.data.genre,year:t.data.year,pages:t.data.pages,isbn:t.data.isbn})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.author,n=e.genre,l=e.year,o=e.pages,c=e.isbn;return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"form__container"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",value:t,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"author"},"Author"),r.a.createElement("input",{type:"text",name:"author",value:a,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"genre"},"Genre"),r.a.createElement("input",{type:"text",name:"genre",value:n,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"year"},"Year"),r.a.createElement("input",{type:"number",name:"year",value:l,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"pages"},"Pages"),r.a.createElement("input",{type:"number",name:"pages",value:o,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"isbn"},"ISBN"),r.a.createElement("input",{type:"number",name:"isbn",value:c,onChange:this.onChange,className:"form__input",required:!0})),r.a.createElement("button",{className:"button button--submit",type:"submit"},"Submit")))}}]),t}(n.Component);a(61);g.b.add(d.d,d.c,d.b,d.a);var F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/books/add",component:w}),r.a.createElement(p.a,{path:"/edit/:id",component:q}),r.a.createElement(E,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.6cfdc272.chunk.js.map