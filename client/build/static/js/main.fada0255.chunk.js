(this["webpackJsonpmeeting-your-av-needs"]=this["webpackJsonpmeeting-your-av-needs"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=(a(39),a(13)),s=a(1),i=a(3),u=a(4),m=a(6),d=a(5),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"top-bar-left"},r.a.createElement("ul",{className:"dropdown menu","data-dropdown-menu":!0},r.a.createElement("li",{className:"menu-text"},r.a.createElement(o.b,{to:"/home",className:"link"},"Meeting Your (AV) Needs")))),r.a.createElement("div",null,"800-555-1234"))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-x"},r.a.createElement("div",{className:"homeBox cell large-4"},r.a.createElement("a",{href:"/order"},r.a.createElement("div",{className:"media-object"},r.a.createElement("div",{className:"media-object-section"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{src:"http://www.fillmurray.com/200/300",alt:"fill murray"}))),r.a.createElement("div",{className:"media-object-section"},r.a.createElement("h4",null,"Click here to start your AV order"),r.a.createElement("p",null,"Just need a projector or screen or even a laptop for your local meeting? Place a quick order here and we'll have your equipment ready when you arrive."))))))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"cell large-4"}),r.a.createElement("div",{className:"grid-x"},r.a.createElement(E,null)),r.a.createElement("div",{className:"cell large-4"})))}}]),a}(n.Component),f=a(14),v=a(8),b=a.n(v),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={projectors:[],orderProjectors:[]},e.handleButtonClick=function(t){b.a.get("/api/gears/"+t).then((function(t){e.setState((function(e){return{orderProjectors:[].concat(Object(f.a)(e.orderProjectors),[t.data])}})),e.props.handleProjectors(e.state.orderProjectors)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/gears").then((function(t){e.setState({projectors:t.data.slice(0,3)})}))}},{key:"render",value:function(){var e=this,t=this.state.projectors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Projectors"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Model"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.proj),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleButtonClick(t._id)},type:"button",className:"success button"},"Select")))}))))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={screens:[],orderScreens:[]},e.handleButtonClick=function(t){b.a.get("/api/gears/"+t).then((function(t){e.setState((function(e){return{orderScreens:[].concat(Object(f.a)(e.orderScreens),[t.data])}})),e.props.handleScreens(e.state.orderScreens)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/gears").then((function(t){return e.setState({screens:t.data.slice(5)})}))}},{key:"render",value:function(){var e=this,t=this.state.screens;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Screens"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Size"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.screen),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleButtonClick(t._id)},type:"button",className:"success button"},"Select")))}))))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={laptops:[],orderLaptops:[]},e.handleButtonClick=function(t){b.a.get("/api/gears/"+t).then((function(t){e.setState((function(e){return{orderLaptops:[].concat(Object(f.a)(e.orderLaptops),[t.data])}})),e.props.handleLaptops(e.state.orderLaptops)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/gears").then((function(t){return e.setState({laptops:t.data.slice(3,5)})}))}},{key:"render",value:function(){var e=this,t=this.state.laptops;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Laptops"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Type"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.comp),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleButtonClick(t._id)},type:"button",className:"success button"},"Select")))}))))))}}]),a}(n.Component),N=function(e){return b.a.post("/api/orders",e)},O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],fetching:!0},e.handleButtonClick=function(t){t.preventDefault(),e.state.orders?N({items:e.state.orders}).then((function(){return e.props.history.push("/customer-info")})).catch((function(e){return console.log(e)})):alert("Please select at least one item")},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){e.ordering!==this.props.ordering&&this.setState({orders:this.props.ordering,fetching:!1})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.orders,a=e.fetching;return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Your items:"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,!a&&t.flat().map((function(e,t){return r.a.createElement("p",{id:e._id,key:"".concat(e._id,"_").concat(t)},e.proj&&e.proj||e.screen&&e.screen||e.comp&&e.comp)})))))),r.a.createElement(o.b,{to:"/customer-info"},r.a.createElement("button",{onClick:this.handleButtonClick,type:"button",className:"primary button"},"Confirm order and go to customer info screen")))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={projectors:[],screens:[],laptops:[]},e.handleProjectors=function(t){e.setState({projectors:t})},e.handleScreens=function(t){e.setState({screens:t})},e.handleLaptops=function(t){e.setState({laptops:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-x grid-margin-x small-up-2 medium-up-3"},r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-section"},r.a.createElement(j,{handleProjectors:this.handleProjectors})))),r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-section"},r.a.createElement(y,{handleScreens:this.handleScreens})))),r.a.createElement("div",{className:"cell"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-section"},r.a.createElement(g,{handleLaptops:this.handleLaptops}))))),r.a.createElement("div",null,r.a.createElement(O,{ordering:[this.state.projectors,this.state.screens,this.state.laptops],history:this.props.history}))))}}]),a}(n.Component),C=a(21);function S(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(C.a)(l,2),s=o[0],i=o[1],u=function(e){e.preventDefault(),"name"===e.target.id?c(e.target.value):i(e.target.value)},m=function(e){e.preventDefault();var t={name:a,email:s};b.a.post("/api/sendMail",t),alert("Thank you for your order!")};return r.a.createElement("div",null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-x grid-margin-x"},r.a.createElement("div",{className:"cell medium-6"},r.a.createElement("form",{onSubmit:m},r.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Name",value:a,onChange:u}),r.a.createElement("input",{id:"email",type:"text",name:"email",placeholder:"Email",value:s,onChange:u}),r.a.createElement("button",{onClick:m,className:"success button",value:"Confirm order"},"Click here to recieve confirmation email"))))))}var w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))}}]),a}(n.Component);function x(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{classame:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h4",null,"Contact Info"),r.a.createElement("p",null,r.a.createElement("span",null,"Phone")," 800.555.1234"),r.a.createElement("p",null,r.a.createElement("span",null,"Email")," AVRental@company.com"),r.a.createElement("p",null,r.a.createElement("span",null,"Address")," 123 Center Street"))))}var P=function(e){return r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/home"},r.a.createElement(h,null)),r.a.createElement(s.a,{component:k,path:"/order"}),r.a.createElement(s.a,{path:"/customer-info"},r.a.createElement(w,null)),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(h,null))),r.a.createElement(x,null))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fada0255.chunk.js.map