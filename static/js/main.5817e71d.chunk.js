(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{32:function(e,t,n){e.exports=n(49)},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(9),c=n.n(s),i=(n(37),n(23)),u=n(24),r=n(12),l=n(27),d=n(26),h=(n(38),n(19)),m=(n(40),n(72)),f=n(77),b=n(73),g=n(71),x=n(74),w=n(75),Q=n(20),I=n(18),E=(n(46),function(e){var t=e.assignNewQuoteIndex,n=e.selectedQuote;return o.a.createElement(f.a,null,o.a.createElement(g.a,null,o.a.createElement(m.a,{id:"text"},'"',n.quote,'" - ',o.a.createElement("span",{id:"author"}," ",n.author))),o.a.createElement(b.a,null,o.a.createElement(x.a,{id:"new-quote",size:"small",onClick:t},"Next Quote"),o.a.createElement(w.a,{id:"tweet-quote",target:"_blank",href:encodeURI("https://twitter.com/intent/tweet?text=".concat(n.quote,"&hashtags=thewebdevcoach"))},o.a.createElement(Q.a,{icon:I.b,size:"xs"})),o.a.createElement(w.a,{target:"_blank",href:encodeURI("https://facebook.com")},o.a.createElement(Q.a,{icon:I.a,size:"xs"}))))}),p=n(76),v=n(5),k=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={quotes:[],selectedQuoteIndex:null},a.selectQuoteIndex=a.selectQuoteIndex.bind(Object(r.a)(a)),a.assignNewQuoteIndex=a.assignNewQuoteIndex.bind(Object(r.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t},e.assignNewQuoteIndex)}))}},{key:"selectQuoteIndex",value:function(){if(this.state.quotes.length)return Object(h.random)(0,this.state.quotes.length-1)}},{key:"assignNewQuoteIndex",value:function(){this.setState({selectedQuoteIndex:this.selectQuoteIndex()})}},{key:"render",value:function(){return o.a.createElement(p.a,{style:{backgroundColor:k[Object(h.random)(0,k.length-1)]},className:this.props.classes.container,id:"quote-box",justify:"center",container:!0},o.a.createElement(p.a,{xs:11,lg:8,item:!0},this.selectedQuote?o.a.createElement(E,{selectedQuote:this.selectedQuote,assignNewQuoteIndex:this.assignNewQuoteIndex}):null))}},{key:"selectedQuote",get:function(){if(this.state.quotes.length&&Number.isInteger(this.state.selectedQuoteIndex))return this.state.quotes[this.state.selectedQuoteIndex]}}]),n}(a.Component),j=Object(v.a)({container:{alignItems:"center",display:"flex",height:"100vh"}})(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5817e71d.chunk.js.map