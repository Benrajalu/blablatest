(this.webpackJsonpblablatest=this.webpackJsonpblablatest||[]).push([[0],{14:function(t,e,n){t.exports={result:"TripResult_result__1QvSv",detail:"TripResult_detail__iu6TC",link:"TripResult_link__1aT6c"}},19:function(t,e,n){t.exports={app:"App_app__3xquF"}},21:function(t,e,n){t.exports={loader:"Loader_loader__2hqdz",load:"Loader_load__3eQlQ"}},27:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(4),r=n.n(c),s=n(18),a=n.n(s),i=(n(27),n(19)),o=n.n(i),l=n(7),u=n(33),j=n(1),p=n(8),b=n(3);function d(t){return Object(p.pipe)(t.trips)}function O(t){return Object(p.pipe)(t.waypoints,b.b)}function h(t){return Object(p.pipe)(t.vehicle,b.b)}function _(t){return Object(p.pipe)(t.search_info,(function(t){return 0===t.count}))}function x(t){return Object(p.pipe)(t.next_cursor)}var f=n(16),m=n.n(f),g=n(20);function y(t){return N.apply(this,arguments)}function N(){return(N=Object(g.a)(m.a.mark((function t(e){var n,c,r,s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"YzbiA8L6DcqxTvSna1lOFQQU66FosDVs",n={lat:48.8566,lng:2.3522},c={lat:45.764043,lng:4.835659},r=(new Date).toISOString(),s=e?"&from_cursor=".concat(e):"",a="https://public-api.blablacar.com/api/v3/trips?key=".concat("YzbiA8L6DcqxTvSna1lOFQQU66FosDVs","&from_coordinate=").concat(n.lat,"%2C").concat(n.lng,"&from_country=FR&to_coordinate=").concat(c.lat,"%2C").concat(c.lng,"&to_country=GB&locale=fr-FR&currency=EUR&start_date_local=").concat(r).concat(s),t.abrupt("return",fetch(a).then((function(t){return t.json()})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=n(21),S=n.n(v),w=n(2);function T(){return Object(w.jsx)("p",{className:S.a.loader,children:"Loading..."})}var L=n(5),k=n.n(L);function F(){return Object(w.jsxs)("article",{className:k.a.empty,children:[Object(w.jsx)(T,{}),Object(w.jsx)("p",{className:k.a.title,children:"Loading your results..."})]})}function C(t){var e=t.error;return Object(w.jsxs)("article",{className:k.a.empty,children:[Object(w.jsx)("h2",{className:k.a.title,children:"Oups, something is wrong"}),Object(w.jsx)("p",{className:k.a.copy,children:"Please retry!"}),Object(w.jsx)("p",{className:k.a.copySmall,children:e.message})]})}function E(){return Object(w.jsxs)("article",{className:k.a.empty,children:[Object(w.jsx)("h2",{className:k.a.title,children:"Ready to go?"}),Object(w.jsx)("p",{className:k.a.copy,children:"Please select your location and destination"})]})}function P(){return Object(w.jsx)("article",{className:k.a.empty,"data-testid":"no-results",children:Object(w.jsx)("h2",{className:k.a.title,children:"Sorry, we have not found any trip for with the requested options..."})})}var Q=n(17),R=n(13),A=n(22),D=n(14),M=n.n(D);function q(t){var e=t.trip;return Object(w.jsxs)("article",{className:M.a.result,children:[Object(w.jsxs)("p",{children:["You'll reach you destination in ",Object(w.jsxs)("strong",{children:[e.duration_in_seconds/60," minutes"]}),"\xa0",Object(w.jsxs)("span",{className:M.a.detail,children:["(",e.distance_in_meters/1e3,"km)"]})]}),Object(w.jsxs)("p",{children:["It would cost you ",Object(w.jsxs)("strong",{children:[e.price.amount,e.price.currency]})]}),Object(j.g)(e,h,b.a((function(){return null}),(function(t){return Object(w.jsxs)("p",{children:["You would be riding a sweet ",Object(w.jsxs)("strong",{children:[t.make," ",t.model]})]})}))),Object(j.g)(e,O,b.a((function(){return null}),(function(t){return Object(j.g)(t,A.a,b.a((function(){return Object(w.jsx)("p",{children:"This is a direct trip"})}),(function(t){return Object(w.jsxs)("p",{children:["This trip has ",Object(w.jsxs)("strong",{children:[t.length," waypoints"]})]})})))}))),Object(w.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:M.a.link,children:"Interested? Check the details on Blablacar!"})]})}var I=n(9),Y=n.n(I);function z(t){var e=Object(c.useState)(t.trips),n=Object(l.a)(e,2),r=n[0],s=n[1],a=Object(c.useState)(!!t.hasNextPage),i=Object(l.a)(a,2),o=i[0],u=i[1],p=Object(c.useState)(t.hasNextPage),b=Object(l.a)(p,2),d=b[0],O=b[1],h=Object(c.useState)(!1),_=Object(l.a)(h,2),x=_[0],f=_[1];return Object(w.jsxs)("div",{className:Y.a.wrapper,children:[Object(w.jsx)("p",{className:Y.a.title,children:"Results"}),Object(w.jsxs)("h1",{className:Y.a.subtitle,children:["Available trips from ",Object(w.jsx)("strong",{children:"Paris"})," to ",Object(w.jsx)("strong",{children:"Lyon"})]}),Object(w.jsxs)("ul",{className:Y.a.listing,children:[Object(j.g)(r,R.b((function(t,e){return Object(w.jsx)("li",{children:Object(w.jsx)(q,{trip:e})},"".concat(e.distance_in_meters,"-").concat(t))}))),o&&!x&&Object(w.jsx)("li",{children:Object(w.jsx)("button",{type:"button",onClick:function(){f(!0),y(d).then((function(t){u(!!t.next_cursor),O(t.next_cursor),s([].concat(Object(Q.a)(r),Object(Q.a)(t.trips))),f(!1)}))},className:Y.a.loadMore,children:"Load more"})}),x&&Object(w.jsx)("li",{children:Object(w.jsx)(T,{})})]})]})}function B(){var t=Object(c.useState)(u.b),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){r(u.c),y().then((function(t){return r(u.d(t))}))}),[r]),Object(w.jsx)(w.Fragment,{children:Object(j.g)(n,u.a((function(){return Object(w.jsx)(E,{})}),(function(){return Object(w.jsx)(F,{})}),(function(t){return Object(w.jsx)(C,{error:t})}),(function(t){return Object(w.jsxs)(w.Fragment,{children:[_(t)&&Object(w.jsx)(P,{}),!_(t)&&Object(w.jsx)(z,{trips:d(t),hasNextPage:x(t)})]})})))})}var J=function(){return Object(w.jsx)("div",{className:o.a.app,children:Object(w.jsx)(B,{})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};a.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),U()},5:function(t,e,n){t.exports={empty:"EmptyScreen_empty__1K1DJ",loader:"EmptyScreen_loader__bOrnw",load:"EmptyScreen_load__2ozsA",title:"EmptyScreen_title__250Yt",copy:"EmptyScreen_copy__34gQl"}},9:function(t,e,n){t.exports={wrapper:"TripsList_wrapper__uACtM",title:"TripsList_title__2WsMk",subtitle:"TripsList_subtitle__14x4N",listing:"TripsList_listing__1_AiL",loadMore:"TripsList_loadMore__1x_Tx"}}},[[31,1,2]]]);
//# sourceMappingURL=main.737f5af8.chunk.js.map