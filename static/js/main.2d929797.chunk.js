(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(46),t(5)),i=t(6),s=t(9),m=t(7),u=t(8),f=(t(47),t(48),t(10)),d=(t(49),t(50),t(51),t(52),t(53),t(24),t(37)),p=t(114),h=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleClickOutside=function(){t.state.collapse&&t.setState(function(e){return{collapse:!e.collapse}})},t.toggle=t.toggle.bind(Object(f.a)(t)),t.state={collapse:!1},t.handleScroll=t.handleScroll.bind(Object(f.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{collapse:!e.collapse}})}},{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){var e=document.querySelector("nav");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll,this.state.top,document.body.style.paddingTop=0}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:this.state.scroll>this.state.top?"navbar navbar-yeis navbar-custom bootstrap-iso navbar navbar-default navbar-absolute navbar-expand-lg ":"navbar navbar-yeis navbar-custom navbar-expand-lg align-items-center"},l.a.createElement("button",{onClick:this.toggle,className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mosh-navbar","aria-controls":"mosh-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(p.a,{isOpen:this.state.collapse,className:"collapse navbar-collapse justify-content-end",id:"mosh-navbar"},l.a.createElement("ul",{className:"navbar-nav animated",id:"nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"index.html"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"portfolio.html"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"contact.html"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"about.html"},"About Me"))))))}}]),a}(n.Component),v=Object(d.a)(h),b=(t(63),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"teks"},"Web Dev."),l.a.createElement("hr",null),l.a.createElement("p",{className:"teks"},"PHP | Slim | Laravel | JavaScript | React JS | Python | Django | PostGre SQL | MySql "),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square ikon","aria-hidden":"true"})),l.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-github-square ikon","aria-hidden":"true"})),l.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-youtube-square ikon","aria-hidden":"true"})))))}}]),a}(n.Component)),E=(t(36),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{class:"footer-distributed"},l.a.createElement("div",{class:"footer-left"},l.a.createElement("h3",null,"Company",l.a.createElement("span",null,"logo"))),l.a.createElement("div",{class:"footer-center"},l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-map-marker"}),l.a.createElement("p",null,l.a.createElement("span",null,"21 Revolution Street")," Paris, France")),l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-phone"}),l.a.createElement("p",null,"+1 555 123456")),l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-envelope"}),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:support@company.com"},"support@company.com")))),l.a.createElement("div",{class:"footer-right"},l.a.createElement("p",{class:"footer-company-about"},l.a.createElement("span",null,"About the company"),"Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet."),l.a.createElement("div",{class:"footer-icons"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-facebook"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-linkedin"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fa fa-github"})))))}}]),a}(n.Component)),g=(t(111),t(39)),k=t.n(g),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={persons:[{name:"Ardani",age:23},{name:"Astuti",age:21},{name:"Risma",age:21}],otherState:"another value"},t.switchNameHandler=function(e){t.setState({persons:[{name:e,age:23},{name:"Astuti",age:21},{name:"Risma",age:21}]})},t.handleClickOutside=function(){console.log("tes")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement("div",{style:{backgroundImage:"url(".concat(k.a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},l.a.createElement("h1",{className:"teks",style:{paddingBottom:"150px"}},'"Hi, this website build with React :)"'),l.a.createElement(b,null)),l.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,a,t){},36:function(e,a,t){},39:function(e,a,t){e.exports=t.p+"static/media/20180810_135105.62605e4a.jpg"},40:function(e,a,t){e.exports=t(112)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.2d929797.chunk.js.map