(this["webpackJsonpgithub-profiles"]=this["webpackJsonpgithub-profiles"]||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),u=(a(33),a(34),a(7)),i=a.n(u),o=a(10),s=a(8),m=(a(36),a(11)),E=a(26),f=a(27),h=(a(37),a(25)),p=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useRef)(null),i=e.setNewGithubUser,o=function(){l(""),u&&u.current&&""!==u.current.value?i(u.current.value):l("Error")};return Object(n.useEffect)((function(){l(e.errorText)}),[e.errorText]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"SearchForm"},r.a.createElement(E.a,{ref:u,onKeyPress:function(e){"Enter"===e.key&&o()},placeholder:"Github Username"}),r.a.createElement(m.a.Append,null,r.a.createElement(f.a,{onClick:function(){o()}},r.a.createElement(h.a,null)))),c&&r.a.createElement("span",{className:"SearchForm__WarningText"},c))},b=a(9),d=(a(41),function(){return r.a.createElement(b.a,null,r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,"Card Title"),r.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))}),v=a(24),_=a.n(v),O=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a='\n    {\n        user(login: "'.concat(t,'" ) {\n            avatarUrl\n            bio\n        }\n    }\n    '),e.next=3,_.a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Profiles",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)}}).post("",{query:a}).then((function(e){if(e.data.errors)throw new Error("Invalid Query Provided.");return e.data.data.user})).catch((function(e){throw e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],E=u[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),b=h[0],v=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(a);case 3:t=e.sent,E(t),v(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}0!==a.length&&function(){e.apply(this,arguments)}()}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GithubProfiles"},r.a.createElement("header",{className:"GithubProfiles__header"},r.a.createElement("p",null,"Github Profiles")),r.a.createElement(p,{setNewGithubUser:function(e){c(e)},errorText:b})),r.a.createElement("div",{className:"GithubContainer"},r.a.createElement("div",{className:"GithubContainer__Wrapper"},r.a.createElement("div",{className:"GithubContainer__Avatar"},m&&r.a.createElement(d,null)),r.a.createElement("div",{className:"GithubContainer__Repositories"},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GithubContainer__Repositories--firstRow"},r.a.createElement(d,null),r.a.createElement(d,null)),r.a.createElement("div",{className:"GithubContainer__Repositories--secondRow"},r.a.createElement(d,null),r.a.createElement(d,null)))))))},S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.91966663.chunk.js.map