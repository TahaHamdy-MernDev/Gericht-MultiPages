"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[214],{7214:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var t=a(2791),l=a(7689),r=a(879),n=a(4942),o=a(1413),c=a(9439),i=a(3853),h=a(1087),u=a(4789),p=a(184),_=function(){var e=(0,l.UO)().type,s=(0,t.useState)({search:e||""}),a=(0,c.Z)(s,2),r=a[0],_=a[1],d=(0,l.s0)(),g=u.C.filter((function(s){return s.title.toLowerCase().includes(e.toLowerCase())||s.tags.join(" ").toLowerCase().includes(e.toLowerCase())}));return console.log(g),(0,p.jsx)("div",{className:"app__searchreasult flex__center section__padding",children:g.length>0?g.map((function(e,s){return(0,p.jsxs)("div",{className:"app__allblogs-blog",children:[(0,p.jsx)("img",{src:e.images[0],alt:"gg"}),(0,p.jsxs)("div",{className:"app__allblogs-blog_about flex__center",children:[(0,p.jsxs)("p",{children:["Posted by : ",e.by]}),(0,p.jsx)("p",{children:e.in}),(0,p.jsx)("p",{className:"app__allblogs-blog_about-tag",children:e.tags[0]}),(0,p.jsx)("p",{className:"app__allblogs-blog_about-tag",children:e.tags[1]}),(0,p.jsx)("p",{className:"app__allblogs-blog_about-tag",children:e.tags[2]})]}),(0,p.jsxs)(h.rU,{to:"/ourblogs/blog/".concat(e.id,"/").concat(e.title),className:"app__allblogs-blog_title",children:[e.title," "]}),(0,p.jsx)("p",{className:"app__allblogs-blog_text p__opensans",children:e.text}),(0,p.jsxs)("div",{className:"app__allblogs-blog_hashTags flex__center",children:[(0,p.jsx)("p",{children:"0 Comments"}),(0,p.jsxs)("p",{children:["#",e.hashTags[0]]}),(0,p.jsxs)("p",{children:["#",e.hashTags[1]]})]}),(0,p.jsx)("button",{type:"buttton",children:"Read More"})]},s)})):(0,p.jsxs)("div",{className:"app__searchreasult-error flex__center",children:[(0,p.jsx)("h2",{className:"headtext__cormorant",children:"Nothing Found"}),(0,p.jsx)("p",{className:"p__opensans",children:"Sorry, but nothing matched your search terms. Please try again with some different keywords."}),(0,p.jsxs)("form",{className:"app__searchreasult-error_form",onSubmit:function(e){e.preventDefault(),d("/ourblogs/search-resault/".concat(r.search))},children:[(0,p.jsx)("input",{required:!0,value:r.search,name:"search",onChange:function(e){var s=e.target,a=s.name,t=s.value;_((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,n.Z)({},a,t))}))},type:"text",className:"app__searchreasult-error_form-input",placeholder:"search..."}),(0,p.jsx)("span",{className:"icon",children:(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)(i.jRj,{})})})]}),(0,p.jsxs)("div",{className:"btns flex__center",children:[(0,p.jsx)("button",{type:"button",className:" custom__button",children:(0,p.jsx)(h.rU,{to:"/home",children:"back to Home"})}),(0,p.jsx)("button",{type:"button",className:" custom__button",children:(0,p.jsx)(h.rU,{to:"/ourblogs",children:"back to blogs"})})]})]})})},d=function(){var e=(0,l.UO)().type;return console.log(e),(0,p.jsxs)("div",{className:"app__reasultpage",children:[(0,p.jsx)(r.cy,{pageTiltle:"Search Reasult",path1:"Home",to1:"/home",path2:'Search results for :"'.concat(e,'"'),to2:""}),(0,p.jsx)(_,{}),(0,p.jsx)(r.$_,{})]})}}}]);
//# sourceMappingURL=214.d46c9257.chunk.js.map