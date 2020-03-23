(this["webpackJsonpgithub-profiles"]=this["webpackJsonpgithub-profiles"]||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(26),s=a.n(c),o=(a(35),a(36),a(9)),l=a.n(o),i=a(11),u=a(10),m=(a(38),a(14)),p=a(28),d=a(29),f=(a(39),a(12)),E=function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(r.useRef)(null),l=e.setNewGithubUser,i=function(){s(""),o&&o.current&&""!==o.current.value?l(o.current.value):s("Error")};return Object(r.useEffect)((function(){s(e.errorText)}),[e.errorText]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{className:"SearchForm"},n.a.createElement(p.a,{ref:o,onKeyPress:function(e){"Enter"===e.key&&i()},placeholder:"Github Username"}),n.a.createElement(m.a.Append,null,n.a.createElement(d.a,{onClick:function(){i()}},n.a.createElement(f.b,null)))),c&&n.a.createElement("span",{className:"SearchForm__WarningText"},c))},b=a(8),h=(a(43),a(13)),v=function(e){var t=e.repository;return(n.a.createElement(b.a,{className:"ProjectCard"},n.a.createElement(b.a.Body,null,n.a.createElement(b.a.Title,null,t.name),n.a.createElement(b.a.Subtitle,{className:"mb-2 text-muted"},n.a.createElement("span",null,n.a.createElement(h.a,null)," ",t.forks_count),n.a.createElement("span",{className:"ProjectCard__CardSubtitle--span"},n.a.createElement(h.c,null)," ",t.stargazers_count)),n.a.createElement(b.a.Text,null,t.description))))},_=(a(44),function(e){var t=e.login,a=e.avatarUrl,r=e.bio,c=e.repositoriesCount,s=e.watchingCount;return(n.a.createElement("div",{className:"AvatarCard"},n.a.createElement(b.a,null,n.a.createElement(b.a.Img,{variant:"top",src:a}),n.a.createElement(b.a.Body,{className:"AvatarCard__Card--body"},n.a.createElement(b.a.Title,null,t),n.a.createElement(b.a.Subtitle,{className:"mb-2 text-muted"},r))),n.a.createElement("div",{className:"AvatarCard__Username"},n.a.createElement(f.a,null),n.a.createElement("span",null,t)),n.a.createElement("div",{className:"AvatarCard__Watching"},n.a.createElement(f.c,null),n.a.createElement("span",null,s," ","Followers")),n.a.createElement("div",{className:"AvatarCard__Repositories"},n.a.createElement(h.b,null),n.a.createElement("span",null,c," ","Repositories"))))}),w=a(16),g=a.n(w),N=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://api.github.com/users/").concat(t)).then((function(e){if(console.log(e),e.data.errors)throw new Error("Invalid Query Provided.");return e.data})).catch((function(e){if(console.log(e.response),e.response&&404===e.response.status)throw new Error("User could not be Found!");throw e.response&&403===e.response.status?new Error("API Rate Limit has been reached!"):e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://api.github.com/users/").concat(t,"/repos"),{params:{type:"owner",sort:"created",direction:"desc"}}).then((function(e){if(e.data.errors)throw new Error("Invalid Query Provided.");return e.data})).catch((function(e){if(console.log(e.response),e.response&&404===e.response.status)throw new Error("User could not be Found!");throw e.response&&403===e.response.status?new Error("API Rate Limit has been reached!"):e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={login:"",avatar_url:"",bio:"",public_repos:0,followers:0},C=[{id:"",name:"",created_at:"",description:"",html_url:"",forks_count:0,stargazers_count:0}],x=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(y),o=Object(u.a)(s,2),m=o[0],p=o[1],d=Object(r.useState)(C),f=Object(u.a)(d,2),b=f[0],h=f[1],w=Object(r.useState)(""),g=Object(u.a)(w,2),x=g[0],O=g[1];Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a);case 3:t=e.sent,p(t),O(""),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),p(y),O(""),O(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}0!==a.length&&function(){e.apply(this,arguments)}()}),[a]),Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(a);case 3:t=e.sent,console.log(t),h(t),O(""),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),h(C),O(""),O(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}0!==a.length&&function(){e.apply(this,arguments)}()}),[a]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"GithubProfiles"},n.a.createElement("header",{className:"GithubProfiles__header"},n.a.createElement("p",null,"Github Profiles")),n.a.createElement(E,{setNewGithubUser:function(e){c(e)},errorText:x})),n.a.createElement("div",{className:"GithubContainer"},n.a.createElement("div",{className:"GithubContainer__Wrapper"},n.a.createElement("div",{className:"GithubContainer__Avatar"},m.login&&n.a.createElement(_,{login:m.login,avatarUrl:m.avatar_url,bio:m.bio,repositoriesCount:m.public_repos,watchingCount:m.followers})),n.a.createElement("div",{className:"GithubContainer__Repositories"},n.a.createElement("div",{className:"GithubContainer__Repositories--firstRow"},b[0]&&b[0].id&&n.a.createElement(v,{repository:b[0]}),b[1]&&b[1].id&&n.a.createElement(v,{repository:b[1]})),n.a.createElement("div",{className:"GithubContainer__Repositories--secondRow"},b[2]&&b[2].id&&n.a.createElement(v,{repository:b[2]}),b[3]&&b[3].id&&n.a.createElement(v,{repository:b[3]}))))))},O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(x,null))};s.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3eb2b9be.chunk.js.map