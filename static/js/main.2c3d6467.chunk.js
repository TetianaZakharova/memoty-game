(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{28:function(e,c,a){},29:function(e,c,a){},30:function(e,c,a){},31:function(e,c,a){},33:function(e,c,a){},52:function(e,c,a){"use strict";a.r(c);var o=a(0),r=a.n(o),n=a(19),l=a.n(n),s=(a(28),a(29),a(4)),t=a(2),u=a(20),i=(a(30),a(31),a(1)),m=function(e){var c=e.card,a=e.handleChoice,o=e.flipped,r=e.disabled;return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:o?"flipped":"",children:[Object(i.jsx)("img",{className:"front",src:c.src,alt:"card front"}),Object(i.jsx)("img",{className:"back",src:"./img/cover.png",onClick:function(){r||a(c)},alt:"card back"})]})})},d=[{src:"./img/canario.png",matched:!1,spell:"./sound/canario.m4a"},{src:"./img/caracol.png",matched:!1,spell:"./sound/caracol.m4a"},{src:"./img/chinchilla.png",matched:!1,spell:"./sound/chinchilla.m4a"},{src:"./img/cobaya.png",matched:!1,spell:"./sound/cobaya.m4a"},{src:"./img/conejo.png",matched:!1,spell:"./sound/conejo.m4a"},{src:"./img/gato.png",matched:!1,spell:"./sound/gato.m4a"},{src:"./img/hamster.png",matched:!1,spell:"./sound/hamster.m4a"},{src:"./img/lagarto.png",matched:!1,spell:"./sound/lagarto.m4a"},{src:"./img/loro.png",matched:!1,spell:"./sound/loro.m4a"},{src:"./img/perro.png",matched:!1,spell:"./sound/perro.m4a"},{src:"./img/pez.png",matched:!1,spell:"./sound/pez.m4a"},{src:"./img/rata.png",matched:!1,spell:"./sound/rata.m4a"},{src:"./img/raton.png",matched:!1,spell:"./sound/raton.m4a"},{src:"./img/tortuga.png",matched:!1,spell:"./sound/tortuga.m4a"}],w=function(){var e=Object(o.useState)([]),c=Object(t.a)(e,2),a=c[0],r=c[1],n=Object(o.useState)(0),l=Object(t.a)(n,2),w=l[0],g=l[1],j=Object(o.useState)(null),O=Object(t.a)(j,2),h=O[0],p=O[1],b=Object(o.useState)(null),f=Object(t.a)(b,2),A=f[0],E=f[1],C=Object(o.useState)(!1),R=Object(t.a)(C,2),x=R[0],S=R[1],v=Object(o.useState)(null),N=Object(t.a)(v,2),M=(N[0],N[1]),T=Object(u.useStopwatch)({autoStart:!1}),y=T.seconds,L=T.minutes,k=T.start,I=T.reset,Q=T.pause,B=function(){var e=[].concat(d,d).sort((function(){return Math.random()-.5})).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Math.random()})}));p(null),E(null),r(e),g(0),I({},!1)},P=function(e){var c=new Audio(e.spell);M(c.play()),h?E(e):p(e)};Object(o.useEffect)((function(){h&&!A&&0===w&&k()}),[h]),Object(o.useEffect)((function(){h&&A&&(S(!0),h.src===A.src?(setTimeout((function(){return function(){var e=new Audio("./sound/bingo.m4a");M(e.play())}()}),800),r((function(e){return e.map((function(e){return e.src===h.src?Object(s.a)(Object(s.a)({},e),{},{matched:!0}):e}))})),setTimeout((function(){return G()}),2e3)):setTimeout((function(){return G()}),1e3))}),[h,A]),Object(o.useEffect)((function(){a.every((function(e){return!0===e.matched}))&&Q()}),[A]);var G=function(){p(null),E(null),g((function(e){return e+1})),S(!1)};return Object(o.useEffect)((function(){B()}),[]),Object(i.jsxs)("div",{className:"CardList",children:[Object(i.jsx)("h3",{children:"Magic Match"}),Object(i.jsxs)("div",{className:"counter-box",children:[Object(i.jsx)("button",{onClick:B,children:"New Game"}),Object(i.jsxs)("div",{className:"counter",children:[Object(i.jsxs)("span",{children:["Timer: ",L,":",y," "]}),Object(i.jsxs)("span",{children:[" Turns: ",w]})]})]}),Object(i.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(i.jsx)(m,{card:e,handleChoice:P,flipped:e===h||e===A||e.matched,disabled:x},e.id)}))})]})},g=a(7),j=a.n(g),O=(a(33),{across:{12:{clue:"\xbfQui\xe9n es muy divertido?",answer:"PERRO",row:1,col:9},15:{clue:"\xbfC\xf3mo se llama el deportista?",answer:"RAMON",row:1,col:9},18:{clue:"\xbfC\xf3mo es la tortuga?",answer:"TRANQUILA",row:1,col:9},19:{clue:"Es listo y travieso. \xbfQui\xe9n es?",answer:"GATO",row:2,col:5},20:{clue:"La chinchilla: \u201cMe gusta comer \u2026\u201d",answer:"COL",row:3,col:13},21:{clue:"Pirata: \u201cMe gusta \u2026\u201d",answer:"PESCA",row:5,col:3},22:{clue:"\xbfQui\xe9n es de color gris?",answer:"RATA",row:5,col:15},23:{clue:"\xbfC\xf3mo es el h\xe1mster?,",answer:"AMISTROSO",row:6,col:8},24:{clue:"\xbfQui\xe9n es Andr\xe9s?",answer:"PEZ",row:8,col:12},25:{clue:"Pirata es \u2026 ",answer:"LISTRO",row:8,col:16},26:{clue:"\xc1lvaro: \u201cMe gusta \u2026\u201d",answer:"CANTAR",row:9,col:6},27:{clue:"\xbfQui\xe9n es pensativo?",answer:"LAGARTO",row:12,col:5},28:{clue:"El lagarto: \u201cMe gusta jugar al \u2026\u201d",answer:"AJEDREZ",row:14,col:5},29:{clue:"\xbfC\xf3mo es la rata?",answer:"GRIS",row:14,col:13},30:{clue:"El color de la tortuga",answer:"AZUL",row:15,col:17},31:{clue:"El lagarto es de color \u2026 ",answer:"VERDE",row:16,col:0},32:{clue:"\xbfC\xf3mo se llama la cobaya?",answer:"ANAIA",row:18,col:1},33:{clue:"El caracol: \u201cMe gusta jugar al \u2026\u201d.",answer:"FUTBOL",row:18,col:14}},down:{1:{clue:"El color del conejo",answer:"CAFE",row:0,col:17},2:{clue:"\xbfQui\xe9n es Ram\xf3n?",answer:"CARACOL",row:1,col:6},3:{clue:"\xbfC\xf3mo se llama el pez?",answer:"ANDRES",row:1,col:11},4:{clue:"\xbfC\xf3mo es el gato?",answer:"TRAVIESO",row:1,col:20},5:{clue:"\xbfQui\xe9n es Manolo?",answer:"LORO",row:3,col:15},6:{clue:"\xbfC\xf3mo es la chinchilla?",answer:"NERVIOSA",row:4,col:4},7:{clue:"\xbfQui\xe9n es de color morado?",answer:"RATON",row:5,col:8},8:{clue:"\xbfQui\xe9n es Alejo?",answer:"CONEJO",row:5,col:13},9:{clue:"\xbfC\xf3mo es el canario?",answer:"TIMIDO",row:5,col:17},10:{clue:"La tortuga: \u201cMe gusta nadar en el\u2026\u201d.",answer:"MAR",row:7,col:2},11:{clue:"\xbfC\xf3mo es Salom\xf3n?",answer:"TRAGON",row:8,col:19},12:{clue:"\xbfC\xf3mo es el lagarto?",answer:"PENSATIVO",row:9,col:0},13:{clue:"\xbfC\xf3mo es Manolo?",answer:"ALEGRE",row:9,col:7},14:{clue:"El caracol es de color \u2026 ",answer:"ROJO",row:9,col:11},15:{clue:"\xbfC\xf3mo es la chinchilla?",answer:"ROSA",row:12,col:16},16:{clue:"El h\xe1mster y el perro son de color \u2026 ",answer:"MARRON",row:13,col:2},17:{clue:"Soy Salom\xf3n. Me gusta comer \u2026 ",answer:"QUESO",row:14,col:18}}}),h=function(){return Object(i.jsx)("div",{style:{width:"75%",margin:"0 auto"},children:Object(i.jsx)(g.ThemeProvider,{theme:{columnBreakpoint:"9999px",gridBackground:"transparent",cellBackground:"#a9e5c5",cellBorder:"#ffe",textColor:"#d617f2",numberColor:"#30161f",focusBackground:"#eea9c0",highlightBackground:"#f99"},children:Object(i.jsx)(j.a,{data:O,useStorage:!1,reset:g.reset})})})};var p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{}),Object(i.jsx)(h,{})]})};l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.2c3d6467.chunk.js.map