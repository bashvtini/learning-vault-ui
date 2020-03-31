(this["webpackJsonplearningcrux-ui"]=this["webpackJsonplearningcrux-ui"]||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},39:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),s=(a(38),a(39),a(10)),o=a(7),i=a(27),m=a(28),u=a(31),d=a(32),E=a(11),p=a.n(E),h=c.a.createContext(),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={data:[],setData:function(t,a,n){e.setState({data:[]}),p.a.get("https://learning-valut-api.herokuapp.com/search/".concat(t)).then((function(t){e.setState({data:t.data.data})})).then((function(){a(!1)})).catch((function(){a(!1),n(!0)}))}},e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),f=h.Consumer,b=a(6),N=a(12),g=a.n(N);function j(e){return c.a.createElement(s.b,{to:e.link},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"cover"},c.a.createElement(g.a,{once:!0,placeholder:c.a.createElement("img",{src:e.cover,alt:e.title+" Cover"})},c.a.createElement("img",{src:e.cover,alt:e.title+" Cover"}))),c.a.createElement("div",{className:"detail"},c.a.createElement("h5",{className:"title"},e.title),c.a.createElement("p",{className:"source"},e.source))))}function O(){var e=this,t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(b.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(b.a)(u,2),E=d[0],p=d[1],h=function(e){r(e.target.value)},v=function(e,t,a,n){n.preventDefault(),m(!0),p(!1),e(l,t,a)};return c.a.createElement(f,null,(function(t){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{id:"title"},"Learning Vault"),c.a.createElement("form",{id:"form",onSubmit:v.bind(e,t.setData,m,p)},c.a.createElement("input",{type:"text",placeholder:"Search...",value:l,onChange:h}),c.a.createElement("button",null,c.a.createElement("i",{className:"fas fa-search"}))),i?c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"lds-dual-ring"})," "):null,E?c.a.createElement("div",{className:"notfound"},c.a.createElement("h1",null,"Not found")):null,0!==t.data.length?c.a.createElement("div",{className:"row"},t.data.map((function(e,t){return c.a.createElement("span",{className:"wrapper",key:t},c.a.createElement(g.a,{placeholder:c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"lds-dual-ring"}))},c.a.createElement(j,{title:e.title,cover:e.cover.replace("?width=250","?width=200"),source:e.source,link:e.link})))}))):null)}))}function w(e){var t=this,a=Object(n.useState)([]),l=Object(b.a)(a,2),r=l[0],o=l[1],i=Object(n.useState)(""),m=Object(b.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)(!1),h=Object(b.a)(E,2),v=h[0],f=h[1],N=Object(n.useState)(!0),g=Object(b.a)(N,2),j=g[0],O=g[1],w=Object(n.useState)(!1),k=Object(b.a)(w,2),y=k[0],S=k[1];Object(n.useEffect)((function(){p.a.get("https://learning-valut-api.herokuapp.com/course/".concat(e.match.params.courseUrl)).then((function(e){0!==e.data.data.curriculum.length?o(e.data.data):f(!0),O(!1)}))}),[]);var C=function(e){S(!0),d("https://www.learningcrux.com"+e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header container"},c.a.createElement(s.b,{to:"/"},c.a.createElement("i",{className:"fas fa-caret-left"})," Go Back")),c.a.createElement("div",{id:"modal",className:y?"open":"close"},c.a.createElement("div",{className:"bc",onClick:function(){S(!1),d("")}}),c.a.createElement("video",{width:"400",controls:!0,autoPlay:!0,src:u}),c.a.createElement("div",{className:"video-failed"},c.a.createElement("p",null,"If video wont load, you can download the video"," ",c.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},"Here")))),v?c.a.createElement("div",{className:"notfound"},c.a.createElement("h1",null,"Videos are not present yet. Team will add them soon")):null,j?c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"lds-dual-ring"})):null,c.a.createElement("div",{className:"container"},0!==r.length?c.a.createElement("div",null,c.a.createElement("div",{className:"course-cover"},c.a.createElement("img",{src:r.cover,alt:r.title+" Cover"})),c.a.createElement("h1",{className:"course-title"},r.title),c.a.createElement("ol",{className:"section-wrapper"},r.curriculum.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("h3",null,e.sectionCount,": ",e.sectionTitle),c.a.createElement("ul",{className:"section"},e.lections.map((function(e,a){return c.a.createElement("li",{key:a,onClick:C.bind(t,e.lectureVideo)},c.a.createElement("span",null,c.a.createElement("p",{className:"lecture-title"},e.info.title),c.a.createElement("span",{className:"type"},e.info.type)),c.a.createElement("span",null,c.a.createElement("p",null,e.info.length),c.a.createElement("button",{className:"watch"},c.a.createElement("i",{className:"fas fa-play"})," Watch")))}))))})))):null))}function k(){return c.a.createElement(v,null,c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:O}),c.a.createElement(o.a,{exact:!0,path:"/course/:courseUrl",component:w}))))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.eb652bd6.chunk.js.map