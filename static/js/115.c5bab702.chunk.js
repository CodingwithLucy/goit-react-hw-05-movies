"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,n){n.r(t);var r=n(439),c=n(791),i=n(87),a=n(184);t.default=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],o=(0,c.useState)([]),s=(0,r.Z)(o,2),l=s[0],h=s[1];return(0,a.jsxs)("div",{style:{marginTop:"25px"},children:[(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("6b6b4d8285a49ce753cf1ed9382a2a8f","&query=").concat(n)).then((function(e){return e.json()})).then((function(e){return h(e.results)})).catch((function(e){return console.error("Error:",e)}))},children:[(0,a.jsx)("input",{type:"text",value:n,onChange:function(e){u(e.target.value)},style:{marginLeft:"25px",marginRight:"25px"}}),(0,a.jsx)("button",{type:"submit",children:"Szukaj"})]}),(0,a.jsx)("ul",{children:l.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.c5bab702.chunk.js.map