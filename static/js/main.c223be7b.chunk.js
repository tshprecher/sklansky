(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a,i=t(0),c=t(3),r=t(1);t(10);!function(e){e[e.Clubs=1]="Clubs",e[e.Diamonds=2]="Diamonds",e[e.Hearts=3]="Hearts",e[e.Spades=4]="Spades"}(a||(a={}));var s,o=[a.Clubs,a.Diamonds,a.Hearts,a.Spades];!function(e){e[e.Two=2]="Two",e[e.Three=3]="Three",e[e.Four=4]="Four",e[e.Five=5]="Five",e[e.Six=6]="Six",e[e.Seven=7]="Seven",e[e.Eight=8]="Eight",e[e.Nine=9]="Nine",e[e.Ten=10]="Ten",e[e.Jack=11]="Jack",e[e.Queen=12]="Queen",e[e.King=13]="King",e[e.Ace=14]="Ace"}(s||(s={}));var l=[s.Two,s.Three,s.Four,s.Five,s.Six,s.Seven,s.Eight,s.Nine,s.Ten,s.Jack,s.Queen,s.King,s.Ace],u=function(){function e(e,n){this.value=e,this.suit=n}return e.prototype.toString=function(){var e=new Map([[s.Two,"2"],[s.Three,"3"],[s.Four,"4"],[s.Five,"5"],[s.Six,"6"],[s.Seven,"7"],[s.Eight,"8"],[s.Nine,"9"],[s.Ten,"10"],[s.Jack,"J"],[s.Queen,"Q"],[s.King,"K"],[s.Ace,"A"]]),n=new Map([[a.Clubs,"C"],[a.Diamonds,"D"],[a.Hearts,"H"],[a.Spades,"S"]]);return""+e.get(this.value)+n.get(this.suit)},e.prototype.equals=function(e){return this.value===e.value&&this.suit===e.suit},e}(),d=function(){function e(e,n,t){this.value1=e,this.value2=n,this.suited=t}return e.prototype.equals=function(e){var n,t;if(this.suited!==e.suited)return!1;var a=this.value1,i=this.value2,c=e.value1,r=e.value2;return a>i&&(a=(n=[i,a])[0],i=n[1]),c>r&&(c=(t=[r,c])[0],r=t[1]),a===c&&i===r},e}(),h={1:[new d(s.Ace,s.Ace,!1),new d(s.King,s.King,!1),new d(s.Queen,s.Queen,!1),new d(s.Jack,s.Jack,!1),new d(s.Ace,s.King,!0)],2:[new d(s.Ten,s.Ten,!1),new d(s.Ace,s.Queen,!0),new d(s.Ace,s.Jack,!0),new d(s.King,s.Queen,!0),new d(s.Ace,s.King,!1)],3:[new d(s.Nine,s.Nine,!1),new d(s.Ace,s.Ten,!0),new d(s.King,s.Jack,!0),new d(s.Queen,s.Jack,!0),new d(s.Jack,s.Ten,!0),new d(s.Ace,s.Queen,!1)],4:[new d(s.Eight,s.Eight,!1),new d(s.King,s.Ten,!0),new d(s.Queen,s.Ten,!0),new d(s.Jack,s.Nine,!0),new d(s.Ten,s.Nine,!0),new d(s.Nine,s.Eight,!0),new d(s.Ace,s.Jack,!1),new d(s.King,s.Queen,!1)],5:[new d(s.Seven,s.Seven,!1),new d(s.Ace,s.Nine,!0),new d(s.Ace,s.Eight,!0),new d(s.Ace,s.Seven,!0),new d(s.Ace,s.Six,!0),new d(s.Ace,s.Five,!0),new d(s.Ace,s.Four,!0),new d(s.Ace,s.Three,!0),new d(s.Ace,s.Two,!0),new d(s.Queen,s.Nine,!0),new d(s.Ten,s.Eight,!0),new d(s.Nine,s.Seven,!0),new d(s.Eight,s.Seven,!0),new d(s.Seven,s.Six,!0),new d(s.King,s.Jack,!1),new d(s.Queen,s.Jack,!1),new d(s.Jack,s.Ten,!1),new d(s.Six,s.Five,!0)],6:[new d(s.Six,s.Six,!1),new d(s.Five,s.Five,!0),new d(s.King,s.Nine,!0),new d(s.Jack,s.Eight,!0),new d(s.Eight,s.Six,!0),new d(s.Seven,s.Five,!0),new d(s.Five,s.Four,!0),new d(s.Ace,s.Ten,!1),new d(s.King,s.Ten,!1),new d(s.Queen,s.Ten,!1)],7:[new d(s.Four,s.Four,!1),new d(s.Three,s.Three,!1),new d(s.Two,s.Two,!1),new d(s.King,s.Eight,!0),new d(s.King,s.Seven,!0),new d(s.King,s.Six,!0),new d(s.King,s.Five,!0),new d(s.King,s.Four,!0),new d(s.King,s.Three,!0),new d(s.King,s.Two,!0),new d(s.Queen,s.Eight,!0),new d(s.Ten,s.Seven,!0),new d(s.Six,s.Four,!0),new d(s.Five,s.Three,!0),new d(s.Four,s.Three,!0),new d(s.Jack,s.Nine,!1),new d(s.Ten,s.Nine,!1),new d(s.Nine,s.Eight,!1)],8:[new d(s.Jack,s.Seven,!0),new d(s.Nine,s.Six,!0),new d(s.Eight,s.Five,!0),new d(s.Seven,s.Four,!0),new d(s.Four,s.Two,!0),new d(s.Three,s.Two,!0),new d(s.Ace,s.Nine,!1),new d(s.King,s.Nine,!1),new d(s.Queen,s.Nine,!1),new d(s.Jack,s.Eight,!1),new d(s.Ten,s.Eight,!1),new d(s.Eight,s.Seven,!1),new d(s.Seven,s.Six,!1),new d(s.Six,s.Five,!1),new d(s.Five,s.Four,!1)]};function w(e){var n;for(n=1;n<9;n++){var t=h[n],a=void 0;for(a=0;a<t.length;a++)if(e.equals(t[a]))return n}return-1}function v(e){var n=e.selected;return i.createElement("div",null,i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(1)},disabled:!n.has(1)},"1"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(1),onChange:function(){e.onChangeHandler(1)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(2)},disabled:!n.has(2)},"2"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(2),onChange:function(){e.onChangeHandler(2)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(3)},disabled:!n.has(3)},"3"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(3),onChange:function(){e.onChangeHandler(3)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(4)},disabled:!n.has(4)},"4"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(4),onChange:function(){e.onChangeHandler(4)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(5)},disabled:!n.has(5)},"5"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(5),onChange:function(){e.onChangeHandler(5)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(6)},disabled:!n.has(6)},"6"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(6),onChange:function(){e.onChangeHandler(6)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(7)},disabled:!n.has(7)},"7"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(7),onChange:function(){e.onChangeHandler(7)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(8)},disabled:!n.has(8)},"8"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(8),onChange:function(){e.onChangeHandler(8)}}))),i.createElement("div",{className:"App-answer-select"},i.createElement("button",{onClick:function(){e.onClickHandler(-1)},disabled:!n.has(-1)},"never"),i.createElement("div",null,i.createElement("input",{type:"checkbox",checked:n.has(-1),onChange:function(){e.onChangeHandler(-1)}}))))}function g(e){return i.createElement("div",{className:"App-message-"+e.classSuffix},e.message)}var p=function(e){function n(n){var t=e.call(this,n)||this,i=(new Set).add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(-1);return t.state={card1:new u(s.Ace,a.Clubs),card2:new u(s.Ace,a.Clubs),answer:void 0,selected:i},t.state=r.a({},t.resetHand()),t.handleUserInput=t.handleUserInput.bind(t),t.handleSelectChange=t.handleSelectChange.bind(t),t.handleKeyPress=t.handleKeyPress.bind(t),t.resetHand=t.resetHand.bind(t),t}return r.b(n,e),n.prototype.componentDidMount=function(){document.addEventListener("keypress",this.handleKeyPress)},n.prototype.componentWillUnmount=function(){document.removeEventListener("keypress",this.handleKeyPress)},n.prototype.handleKeyPress=function(e){console.log("keypress event: ",e.keyCode);var n=e.keyCode;110===n?this.setState(this.resetHand()):48===n?this.handleUserInput(-1):n>=49&&n<=56&&this.handleUserInput(n-49+1)},n.prototype.handleUserInput=function(e){console.log("user answer: ",e),void 0===this.state.answer&&this.setState(r.a({},this.state,{answer:e}))},n.prototype.handleSelectChange=function(e){console.log("select changed: ",e);var n=this.state.selected;n.has(e)?1===n.size?alert("At least one option must be selected"):n.delete(e):n.add(e),this.setState(r.a({},this.state,{selected:n})),n.has(e)||this.setState(this.resetHand())},n.prototype.resetHand=function(){for(var e=new u(s.Ace,a.Clubs),n=new u(s.Ace,a.Clubs),t=new d(e.value,n.value,!0);e.equals(n)||!this.state.selected.has(w(t));)e=new u(l[Math.floor(13*Math.random())],o[Math.floor(4*Math.random())]),n=new u(l[Math.floor(13*Math.random())],o[Math.floor(4*Math.random())]),t=new d(e.value,n.value,e.suit===n.suit);return r.a({},this.state,{card1:e,card2:n,answer:void 0})},n.prototype.render=function(){var e=new d(this.state.card1.value,this.state.card2.value,this.state.card1.suit===this.state.card2.suit);return i.createElement("div",{className:"App"},i.createElement("header",null,i.createElement("h1",{className:"App-title"},"Learn Your Sklansky Starting Hands!")),i.createElement("div",{className:"App-instructions"},"Press numeric keys 1-8 to answer, 0 for never and 'n' to move to the next hand."),i.createElement("div",null,i.createElement("img",{className:"App-card",src:"/svgs/"+this.state.card1.toString()+".svg"}),i.createElement("img",{className:"App-card",src:"/svgs/"+this.state.card2.toString()+".svg"})),i.createElement(v,{onClickHandler:this.handleUserInput,onChangeHandler:this.handleSelectChange,selected:this.state.selected}),void 0!==this.state.answer&&(this.state.answer===w(e)&&i.createElement(g,{classSuffix:"correct",message:"Correct!"})||this.state.answer!==w(e)&&i.createElement(g,{classSuffix:"incorrect",message:"Incorrect :(. Correct answer is "+(-1!==w(e)?w(e):"never")+"."})))},n}(i.Component),m=(t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function f(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.render(i.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/sklansky",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/sklansky/service-worker.js";m?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):f(e)})}}()},4:function(e,n,t){e.exports=t(14)}},[[4,2,1]]]);
//# sourceMappingURL=main.c223be7b.chunk.js.map