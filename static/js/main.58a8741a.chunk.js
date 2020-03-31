(this["webpackJsonplearningcrux-ui"]=this["webpackJsonplearningcrux-ui"]||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),s=(a(38),a(10)),o=a(7),i=a(27),m=a(28),u=a(31),d=a(32),E=a(11),p=a.n(E),h=l.a.createContext(),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={data:[],setData:function(t,a,n){e.setState({data:[]}),p.a.get("https://learning-valut-api.herokuapp.com/search/".concat(t)).then((function(t){e.setState({data:t.data.data})})).then((function(){a(!1)})).catch((function(){a(!1),n(!0)}))}},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),v=h.Consumer,b=a(6),N=a(12),g=a.n(N);function j(e){return l.a.createElement(s.b,{to:e.link},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"cover"},l.a.createElement(g.a,{once:!0,placeholder:l.a.createElement("img",{src:e.cover,alt:e.title+" Cover"})},l.a.createElement("img",{src:e.cover,alt:e.title+" Cover"}))),l.a.createElement("div",{className:"detail"},l.a.createElement("h5",{className:"title"},e.title),l.a.createElement("p",{className:"source"},e.source))))}function O(){var e=this,t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(b.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(b.a)(u,2),E=d[0],p=d[1],h=function(e){r(e.target.value)},f=function(e,t,a,n){n.preventDefault(),m(!0),p(!1),e(c,t,a)};return l.a.createElement(v,null,(function(t){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{id:"title"},"Learning Vault"),l.a.createElement("form",{id:"form",onSubmit:f.bind(e,t.setData,m,p)},l.a.createElement("input",{type:"text",placeholder:"Search...",value:c,onChange:h}),l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-search"}))),i?l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"lds-dual-ring"})," "):null,E?l.a.createElement("div",{className:"notfound"},l.a.createElement("h1",null,"Not found")):null,0!==t.data.length?l.a.createElement("div",{className:"row"},t.data.map((function(e,t){return l.a.createElement("span",{className:"wrapper",key:t},l.a.createElement(g.a,{placeholder:l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"lds-dual-ring"}))},l.a.createElement(j,{title:e.title,cover:e.cover.replace("?width=250","?width=200"),source:e.source,link:e.link})))}))):null)}))}function w(e){var t=this,a=Object(n.useState)([]),c=Object(b.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(""),m=Object(b.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)(!1),h=Object(b.a)(E,2),f=h[0],v=h[1],N=Object(n.useState)(!0),g=Object(b.a)(N,2),j=g[0],O=g[1],w=Object(n.useState)(!1),k=Object(b.a)(w,2),y=k[0],S=k[1];Object(n.useEffect)((function(){p.a.get("https://learning-valut-api.herokuapp.com/course/".concat(e.match.params.courseUrl)).then((function(e){0!==e.data.data.curriculum.length?o(e.data.data):v(!0),O(!1)}))}),[]);var C=function(e){S(!0),d("https://www.learningcrux.com"+e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header container"},l.a.createElement(s.b,{to:"/"},l.a.createElement("i",{className:"fas fa-caret-left"})," Go Back")),l.a.createElement("div",{id:"modal",className:y?"open":"close"},l.a.createElement("div",{className:"bc",onClick:function(){S(!1),d("")}}),l.a.createElement("video",{width:"400",controls:!0,autoPlay:!0,on:!0,src:u}),l.a.createElement("div",{className:"video-failed"},l.a.createElement("p",null,"If video wont load, you can download the video"," ",l.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},"Here")))),f?l.a.createElement("div",{className:"notfound"},l.a.createElement("h1",null,"Videos are not present yet. Team will add them soon")):null,j?l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"lds-dual-ring"})):null,l.a.createElement("div",{className:"container"},0!==r.length?l.a.createElement("div",null,l.a.createElement("h1",{className:"course-title"},r.title),l.a.createElement("ol",{className:"section-wrapper"},r.curriculum.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("h3",null,e.sectionCount,": ",e.sectionTitle),l.a.createElement("ul",{className:"section"},e.lections.map((function(e,a){return l.a.createElement("li",{key:a,onClick:C.bind(t,e.lectureVideo)},l.a.createElement("span",null,l.a.createElement("p",{className:"lecture-title"},e.info.title),l.a.createElement("span",{className:"type"},e.info.type)),l.a.createElement("span",null,l.a.createElement("p",null,e.info.length),l.a.createElement("button",{className:"watch"},l.a.createElement("i",{className:"fas fa-play"})," Watch")))}))))})))):null))}function k(){return l.a.createElement(f,null,l.a.createElement(s.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:O}),l.a.createElement(o.a,{exact:!0,path:"/course/:courseUrl",component:w}))))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.58a8741a.chunk.js.map