(this.webpackJsonpagency_website=this.webpackJsonpagency_website||[]).push([[0],{22:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var n=s(10),c=s(1),r=s(16),i=s.n(r),o=s(7),a=s(2),l=(s(22),s(0)),u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{id:"image-home"}),Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)("h2",{children:"Confiez vos r\xeaves \xe0 des experts du Web"}),Object(l.jsx)("p",{children:"Gr\xe2ce \xe0 notre savoir-faire, notre exp\xe9rience et notre \xe9coute, nous accompagnons nos clients dans la cr\xe9ation de site internet: \xe9tude, UX, conception, design, d\xe9veloppement, SEO."}),Object(l.jsx)("p",{children:"Notre agence web est capable de r\xe9pondre \xe0 tous vos besoins et d'\xe9laborer une v\xe9ritable strat\xe9gie digitale."})]})]})},d=(s(24),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{id:"image-about"}),Object(l.jsxs)("div",{className:"About",children:[Object(l.jsx)("h2",{children:"Websitic est une Agence de communication digitale \xe0 paris ayant pour mission de vous accompagner sur vos projets digitaux."}),Object(l.jsx)("p",{children:'De l\u2019\xe9tape d\u2019avant projet web au lancement effectif du site, nous somme l\xe0 pour vous. Tout au long de la dur\xe9e de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des strat\xe9gies digitales efficaces et vous permettre d\u2019atteindre vos objectifs. Laissez votre projet entre des mains dignes de confiance, ayant accompagn\xe9 "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.'})]})]})}),j=[{slug:"sedal-study-case",title:"Sedal",subtitle:"Sedal, l'entreprise qui a commenc\xe9 tout en bas... Et qui est toujours tout en bas",description:'Malgr\xe9 nos conseils et notre site web cr\xe9\xe9 sur Wix, Sedal semble ne pas vouloir d\xe9coller. Mais comme un grand homme et une grande femme l\'ont dit, "les derniers seront les premiers".'},{slug:"platon-study-case",title:"Platon",subtitle:"Le challenge",description:"Platon a d\xe9cid\xe9 de se lancer \xe0 l'\xe9poque malgr\xe9 une crise \xe9conomique difficile. Nous avons \xe9t\xe9 derri\xe8re eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."},{slug:"solane-study-case",title:"Solane",subtitle:"Solane est le premier vendeur de fraises du Poitou-Charentes",description:"Et c'est gr\xe2ce \xe0 nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du march\xe9 ont fonctionn\xe9."}],b=(s(25),function(){var e=Object(a.f)().workSlug,t=Object(c.useState)(void 0),s=Object(n.a)(t,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){var t=j.find((function(t){return t.slug===e}));i(t)}),[e]),Object(l.jsxs)("div",{className:"StudyCase",children:[!r&&Object(l.jsx)("p",{children:"Pas de projet avec ce slug\u2026"}),r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:r.subtitle}),Object(l.jsx)("p",{children:r.description})]})]})}),m=(s(31),function(){return Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"NavWork",children:j.map((function(e){return Object(l.jsx)(o.b,{to:"/works/".concat(e.slug),children:e.title},e.slug)}))})})}),p=(s(32),function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsxs)("div",{className:"Works",children:[Object(l.jsx)("h2",{children:"Au fil des ann\xe9es, nous avons pu accompagner les meilleurs."}),Object(l.jsx)("p",{children:"D\xe9couvrez pas \xe0 pas comment nous avons \xe9t\xe9 pr\xe9sent pour lancer vos marques pr\xe9f\xe9r\xe9es."})]}),Object(l.jsx)(m,{}),Object(l.jsx)(a.c,{children:Object(l.jsx)(a.a,{path:"/works/:workSlug",children:Object(l.jsx)(b,{})})})]})}),h=Object(c.createContext)({theme:"",updateTheme:function(e){}}),O=(s(33),function(){var e=Object(c.useContext)(h),t=e.theme,s=e.updateTheme;Object(c.useEffect)((function(){s(localStorage.getItem("value")||"light")}),[]);return Object(l.jsxs)("select",{name:"theme",defaultValue:t,onChange:function(e){var t=e.currentTarget.value;localStorage.setItem("value",t),s(t)},children:[Object(l.jsx)("option",{value:"dark",children:"\ud83c\udf1d"}),Object(l.jsx)("option",{value:"light",children:"\ud83c\udf1a"})]})}),x=(s(34),function(){return Object(l.jsxs)("div",{className:"Navbar",children:[Object(l.jsx)(o.b,{to:"/",children:"Home"})," ",Object(l.jsx)(o.b,{to:"/about",children:"L'agence"})," ",Object(l.jsx)(o.b,{to:"/works",children:"Projets"})," ",Object(l.jsx)(O,{})]})}),v=(s(35),function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),s=t[0],r={theme:s,updateTheme:t[1]};return Object(l.jsx)(h.Provider,{value:r,children:Object(l.jsx)("div",{className:s,children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("main",{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,children:Object(l.jsx)(u,{})}),Object(l.jsx)(a.a,{path:"/about",children:Object(l.jsx)(d,{})}),Object(l.jsx)(a.a,{path:"/works",children:Object(l.jsx)(p,{})})]})})]})})})});i.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.05001684.chunk.js.map