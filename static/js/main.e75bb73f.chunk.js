(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{10:function(e,t,a){},25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),i=(a(25),a(10),a(7)),o=a(0);var l=function(){var e={color:"white"};return Object(o.jsxs)("nav",{children:[Object(o.jsxs)("h1",{children:["TheThrift ",Object(o.jsx)("i",{class:"fa fa-paper-plane-o","aria-hidden":"true"})]}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)(i.b,{style:e,to:"/",children:Object(o.jsx)("button",{children:"Home"})}),Object(o.jsx)(i.b,{style:e,to:"/shop",children:Object(o.jsx)("button",{children:"Shop"})}),Object(o.jsx)(i.b,{style:e,to:"/about",children:Object(o.jsx)("button",{children:"About"})})]})]})};var j=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{children:"The Thrift..."}),Object(o.jsx)("p",{children:"The exclusive collection is available for one week only. You can bid on your favourite pieces over on our eBay store with everything starting at just 99p. Yes, that\u2019s right, 99p! The collection features items that have been handpicked from Barnardo\u2019s stores by Little Big Bell. Geraldine has also kindly donated a number of her own beautiful pieces. You can quite literally shop Little Big Bell\u2019s home. The collection also features a number of items which have been kindly donated which includes @Doodle_Moo , Eleanor Bowmer, Gayle Mansfield Designs, Nanas of Anarchy, Particular People , The Native State, Sugar Snap Studio, Bombay Duck London, Catherine Rowe Designs, W.A Green, Hannah Carvell, Kitty McCall and Moi Mili."}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-instagram  foter-url fa-3x","aria-hidden":"true"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-facebook  foter-url fa-3x","aria-hidden":"true"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-linkedin  foter-url fa-3x","aria-hidden":"true"})})]}),Object(o.jsx)("div",{className:"production",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{class:"fa fa-product-hunt","aria-hidden":"true fa-2x"}),"  2021 production Blaze"]})})]})]})},h=a(9),d=a.n(h),b=a(12),u=a(13);var f=function(){Object(c.useEffect)((function(){n()}),[]);var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/upcoming/get");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.data),s(a.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"shops",children:[Object(o.jsx)("h1",{children:"Featured Products...."}),a.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("h2",{className:"item",children:Object(o.jsx)(i.b,{to:"/shop/".concat(e.itemId),children:e.item.name})},e.itemId),Object(o.jsx)("img",{src:e.item.images.icon,alt:""}),Object(o.jsx)("p",{children:e.item.description})]})}))]})};var x=function(e){var t=e.match;Object(c.useEffect)((function(){i()}),[]);var a=Object(c.useState)({images:{}}),s=Object(u.a)(a,2),n=s[0],r=s[1],i=function(){var e=Object(b.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.theapinetwork.com/item/get?id=".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,r(c.data.item),console.log(c.data.item);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:n.name}),Object(o.jsx)("img",{src:n.images.icon,alt:""})]})},O=a(2),p=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"contain",children:[Object(o.jsxs)("h1",{className:"header",children:["TheThrift ",Object(o.jsx)("i",{class:"fa fa-paper-plane-o","aria-hidden":"true"})]}),Object(o.jsx)("p",{className:"para",children:"Marshmello bundle, including Marshmello outfit, Mello Mallets pickaxe, Mello Rider glider and Marsh Walk emote...."}),Object(o.jsx)("span",{class:"line-1"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{class:"line-2"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{class:"line-3"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"",children:"Get Started \u2605"})]}),Object(o.jsx)("div",{className:"img",children:Object(o.jsx)("img",{src:"/images/photo.svg",alt:""})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"footer-item",children:[Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-instagram  foter-url fa-3x","aria-hidden":"true"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-facebook  foter-url fa-3x","aria-hidden":"true"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("i",{class:"fa fa-linkedin  foter-url fa-3x","aria-hidden":"true"})})]}),Object(o.jsx)("div",{className:"production",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{class:"fa fa-product-hunt","aria-hidden":"true fa-2x"}),"  2021 production Blaze"]})})]})]})};var m=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/",exact:!0,component:p}),Object(o.jsx)(O.a,{path:"/about",component:j}),Object(o.jsx)(O.a,{path:"/shop",exact:!0,component:f}),Object(o.jsx)(O.a,{path:"/shop/:id",component:x})]})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.e75bb73f.chunk.js.map