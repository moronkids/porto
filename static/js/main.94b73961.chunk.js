(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(42)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);t(20);var n=t(0),s=t.n(n),l=t(2),o=t.n(l),r=(t(25),t(4)),c=t(5),i=t(8),m=t(6),d=t(7),h=(t(26),t(27),function(e){return s.a.createElement("div",{className:"Person"},s.a.createElement("p",null,"I'am a Programmer ! my name ",e.name," and my age is ",e.age),s.a.createElement("p",null,e.children),s.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),u=t(3),p=(t(28),t(29),t(30),t(31),t(32),t(16)),g=t(44),v=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClickOutside=function(){t.state.collapse&&t.setState(function(e){return{collapse:!e.collapse}})},t.toggle=t.toggle.bind(Object(u.a)(t)),t.state={collapse:!1},t.handleScroll=t.handleScroll.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{collapse:!e.collapse}})}},{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){var e=document.querySelector("nav");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll,this.state.top,document.body.style.paddingTop=0}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:this.state.scroll>this.state.top?"navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg ":"navbar navbar-yeis navbar-custom navbar-expand-lg align-items-center"},s.a.createElement("button",{onClick:this.toggle,className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mosh-navbar","aria-controls":"mosh-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement(g.a,{isOpen:this.state.collapse,className:"collapse navbar-collapse justify-content-end",id:"mosh-navbar"},s.a.createElement("ul",{className:"navbar-nav animated",id:"nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"index.html"},"Home")),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"moshDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Pages"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"moshDropdown"},s.a.createElement("a",{className:"dropdown-item",href:"index.html"},"Home"),s.a.createElement("a",{className:"dropdown-item",href:"about.html"},"About Us"),s.a.createElement("a",{className:"dropdown-item",href:"services.html"},"Services"),s.a.createElement("a",{className:"dropdown-item",href:"portfolio.html"},"Portfolio"),s.a.createElement("a",{className:"dropdown-item",href:"blog.html"},"Blog"),s.a.createElement("a",{className:"dropdown-item",href:"contact.html"},"Contact"),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("a",{className:"dropdown-item",href:"elements.html"},"Elements"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"about.html"},"About Us")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"services.html"},"Services")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"portfolio.html"},"Portfolio")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"blog.html"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"contact.html"},"Contact"))))))}}]),a}(n.Component),b=Object(p.a)(v),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={persons:[{name:"Ardani",age:23},{name:"Astuti",age:21},{name:"Risma",age:21}],otherState:"another value"},t.switchNameHandler=function(e){t.setState({persons:[{name:e,age:23},{name:"Astuti",age:21},{name:"Risma",age:21}]})},t.handleClickOutside=function(){console.log("tes")},t.nameChangedHandler=function(e){t.setState({persons:[{name:"Ardani",age:23},{name:e.target.value,age:21},{name:"Risma",age:21}]})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null),s.a.createElement("h1",null,"Hi, I'am React App"),s.a.createElement("button",{className:"btn btn-primary",onClick:this.switchNameHandler.bind(this,"Kontol2")},"Switch name"),s.a.createElement(h,{name:this.state.persons[0].name,age:this.state.persons[0].age},"hobbies: coding"),s.a.createElement(h,{name:this.state.persons[1].name,age:this.state.persons[1].age,changed:this.nameChangedHandler},"hobbies: sleeping"),s.a.createElement(h,{name:this.state.persons[2].name,age:this.state.persons[2].age},"hobbies: goodies"),s.a.createElement(h,{name:this.state.persons[2].name,age:this.state.persons[2].age},"hobbies: goodies"),s.a.createElement(h,{name:this.state.persons[2].name,age:this.state.persons[2].age},"hobbies: goodies"),s.a.createElement(h,{name:this.state.persons[2].name,age:this.state.persons[2].age},"hobbies: goodies"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.94b73961.chunk.js.map