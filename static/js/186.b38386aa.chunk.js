"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(439),c=n(791),o=n(689),i=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],u=n[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("6b6b4d8285a49ce753cf1ed9382a2a8f")).then((function(e){return e.json()})).then((function(e){return u(e.results)})).catch((function(e){return console.error("Error:",e)}))}),[e]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Reviews"}),s.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:e.author}),(0,i.jsx)("p",{children:e.content})]},e.id)}))]})}}}]);
//# sourceMappingURL=186.b38386aa.chunk.js.map