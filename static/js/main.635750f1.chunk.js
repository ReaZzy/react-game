(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"e",(function(){return w})),n.d(t,"j",(function(){return k})),n.d(t,"n",(function(){return P})),n.d(t,"o",(function(){return C})),n.d(t,"i",(function(){return L})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return z})),n.d(t,"p",(function(){return M})),n.d(t,"h",(function(){return B})),n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return G})),n.d(t,"f",(function(){return H})),n.d(t,"r",(function(){return Z})),n.d(t,"g",(function(){return W})),n.d(t,"d",(function(){return X})),n.d(t,"q",(function(){return K})),n.d(t,"m",(function(){return Q}));var r=n(88),c=n(11),a=n.n(c),o=n(22),i=n(15),u=n(6),s=n(48),l=n.p+"static/media/wrong-audio.70fff5c7.wav",d=n.p+"static/media/correct-audio.62721562.wav",f=n.p+"static/media/open-sound.15057a5c.wav",b=n.p+"static/media/win.aa3ddaa5.wav",j=n.p+"static/media/lose.02ef6b82.wav",O={board:[],boardDisabled:!1,cardPair:[],gameType:"wait",musicVolume:1,soundsVolume:1,boardSize:"normal",games:[],imgURL:null,difficulty:"normal",time:0,score:0,highScore:0,autoPlay:!1},m=new Audio(f),p=new Audio(l),g=new Audio(d),v=new Audio(b),y=new Audio(j),S=(new Date).toLocaleDateString("en-US").split("/"),h=Object(s.a)(S,3),x=h[0],E=h[1],_=h[2],w=function(e){return{type:"OPEN_CARD",number:e}},T=function(e){return{type:"SET_BOARD",board:e}},I=function(e,t){return{type:"SET_ANSWERS",data:{cardPair:e,type:t}}},A=function(e){return{type:"DISABLE_BOARD",boolean:e}},R=function(e){return{type:"SET_GAME_TYPE",gameType:e}},k=function(e){return{type:"SET_CARD_PAIR",card:e}},N=function(e){return{type:"SET_CARD_PAIRS",cards:e}},P=function(e){return{type:"SET_MUSIC_VOLUME",volume:e}},C=function(e){return{type:"SET_SOUNDS_VOLUME",volume:e}},L=function(e){return{type:"SET_BOARD_SIZE",boardSize:e}},D=function(e){return{type:"SET_CARD_STYLE",imgURL:e}},z=function(e){return{type:"SET_DIFFICULTY",difficulty:e}},M=function(e){return{type:"SET_TIMER",time:e}},U=function(e){return{type:"SET_SCORE",score:e}},V=function(e){return{type:"SET_HIGH_SCORE",score:e}},J=function(e){return{type:"SET_GAMES",game:e}},B=function(e){return{type:"SET_AUTO_PLAY",autoPlay:e}},Y=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var c,i,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r(),i=c.game,m.volume=i.soundsVolume,p.volume=i.soundsVolume,g.volume=i.soundsVolume,v.volume=i.soundsVolume,y.volume=i.soundsVolume,u=function(){p.play(),n(A(!0)),n(I(e,"wrong")),setTimeout((function(){n(I(e,"closed")),n(A(!1))}),1e3)},s=function(){var t=Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.play();case 2:n(I(e,"correct")),n(U(i.score+2)),i.score>=i.highScore&&(n(V(i.score+2)),localStorage.setItem("highScore",JSON.stringify(i.score+2)));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),2===e.length&&(e[0].content===e[1].content?s():u(),n({type:"CLEAR_CARD_PAIR"})),!i.board.every((function(e){return"correct"===e.type}))){t.next=15;break}return n(R("win")),t.next=13,n(q("win"));case 13:return t.next=15,v.play();case 15:localStorage.setItem("board",JSON.stringify(i.board.map((function(e){return"wrong"===e.type?{content:e.content,type:"closed"}:e})))),localStorage.setItem("cardPair",JSON.stringify(e)),localStorage.setItem("score",JSON.stringify(i.score));case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},F=function(e){return function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(),c=r.game,t(N([])),t(U(0)),t(M("easy"===c.difficulty?60:"normal"===c.difficulty?50:30)),localStorage.removeItem("cardPair");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(T([].concat(Object(i.a)(e),Object(i.a)(e)).sort((function(){return.5-Math.random()})))),n(F()),n(R("wait")),localStorage.removeItem("board");case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(T([].concat(Object(i.a)(e),Object(i.a)(e)).sort((function(){return.5-Math.random()})))),m.play(),n(F());case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},q=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=r(),o=c.game,n(J({key:Math.random(),date:"".concat(x,"/").concat(E,"/").concat(_),boardSize:o.boardSize,difficulty:o.difficulty,score:o.score,winOrLose:e,time:("easy"===o.difficulty?60:"normal"===o.difficulty?50:30)-o.time})),localStorage.setItem("games",JSON.stringify([{key:Math.random(),date:"".concat(x,"/").concat(E,"/").concat(_),boardSize:o.boardSize,difficulty:o.difficulty,score:o.score,winOrLose:e,time:("easy"===o.difficulty?60:"normal"===o.difficulty?50:30)-o.time}].concat(Object(i.a)(o.games))));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(R("playing")),n(T([].concat(Object(i.a)(e),Object(i.a)(e)).sort((function(){return.5-Math.random()})))),n(F());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(D("")),t(z("normal")),t(L("normal")),t(P(1)),t(C(1)),localStorage.removeItem("imgURL"),localStorage.removeItem("musicVolume"),localStorage.removeItem("soundsVolume");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R("lose")),e.next=3,t(q("lose"));case 3:return e.next=5,y.play();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(e){return function(){var e=Object(o.a)(a.a.mark((function e(t,n){var c,o,u,s,l,d,f,b,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n(),(o=c.game).autoPlay){t(R("playing")),u=Object(i.a)(o.board),s=u.map((function(e,t){return Object(i.a)(u.reduce((function(e,n,r){return n.content==="".concat(t)?e.push(r)&&e:e}),[]))})),l=Object(i.a)(s).sort((function(){return.5-Math.random()})),d=0,f=Object(r.a)(l.flat());try{for(j=function(){var e=b.value;d++,setTimeout((function(){"closed"===o.board[e].type&&(t(k(o.board[e])),t(w(e)))}),600*d)},f.s();!(b=f.n()).done;)j()}catch(a){f.e(a)}finally{f.f()}t(F())}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,c,o,u,s,l,d,f,b,j,O,m,p,g,v,y,S,h,x,E,_,w,I;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=function(){return localStorage.getItem("cardPair")},c=function(){return localStorage.getItem("gameType")},o=function(){return localStorage.getItem("musicVolume")},u=function(){return localStorage.getItem("soundsVolume")},s=function(){return localStorage.getItem("boardSize")},l=function(){return localStorage.getItem("imgURL")},d=function(){return localStorage.getItem("difficulty")},f=function(){return localStorage.getItem("timer")},b=function(){return localStorage.getItem("score")},j=function(){return localStorage.getItem("highScore")},O=function(){return localStorage.getItem("games")},m=function(){return localStorage.getItem("board")}(),p=c(),g=r(),v=o(),y=u(),S=s(),h=l(),x=d(),E=f(),_=b(),w=j(),I=O(),g&&n(N(JSON.parse(g))),p&&n(R(JSON.parse(p))),v&&n(P(JSON.parse(v))),y&&n(C(JSON.parse(y))),h&&n(D(h)),x&&n(z(x)),S&&n(L(S)),E&&n(M(+E)),_&&n(U(+_)),w&&n(V(+w)),I&&n({type:"SET_ALL_GAMES",games:JSON.parse(I)}),n(T(m?JSON.parse(m):[].concat(Object(i.a)(e),Object(i.a)(e)).sort((function(){return.5-Math.random()}))));case 36:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOARD":return Object(u.a)(Object(u.a)({},e),{},{board:Object(i.a)(t.board)});case"OPEN_CARD":return m.play(),Object(u.a)(Object(u.a)({},e),{},{board:e.board.map((function(e,n){return n===t.number?Object(u.a)(Object(u.a)({},e),{},{type:"open"}):e}))});case"SET_ANSWERS":var n=t.data,r=n.cardPair,c=n.type,a=function(e,t){return e.content===r[0].content||e.content===r[1].content?Object(u.a)(Object(u.a)({},e),{},{type:t}):e};return Object(u.a)(Object(u.a)({},e),{},{board:e.board.map((function(e){return"open"===e.type||"wrong"===e.type?a(e,c):e}))});case"SET_GAME_TYPE":return localStorage.setItem("gameType",JSON.stringify(t.gameType)),Object(u.a)(Object(u.a)({},e),{},{gameType:t.gameType});case"SET_BOARD_SIZE":return localStorage.setItem("boardSize","".concat(t.boardSize)),Object(u.a)(Object(u.a)({},e),{},{boardSize:t.boardSize});case"DISABLE_BOARD":return Object(u.a)(Object(u.a)({},e),{},{boardDisabled:t.boolean});case"SET_SOUNDS_VOLUME":return Object(u.a)(Object(u.a)({},e),{},{soundsVolume:t.volume});case"SET_MUSIC_VOLUME":return Object(u.a)(Object(u.a)({},e),{},{musicVolume:t.volume});case"SET_CARD_PAIR":return Object(u.a)(Object(u.a)({},e),{},{cardPair:[].concat(Object(i.a)(e.cardPair),[t.card])});case"SET_CARD_STYLE":return Object(u.a)(Object(u.a)({},e),{},{imgURL:t.imgURL});case"SET_CARD_PAIRS":return Object(u.a)(Object(u.a)({},e),{},{cardPair:Object(i.a)(t.cards)});case"SET_DIFFICULTY":return localStorage.setItem("difficulty","".concat(t.difficulty)),Object(u.a)(Object(u.a)({},e),{},{difficulty:t.difficulty});case"SET_TIMER":return Object(u.a)(Object(u.a)({},e),{},{time:t.time});case"SET_SCORE":return Object(u.a)(Object(u.a)({},e),{},{score:t.score});case"SET_HIGH_SCORE":return Object(u.a)(Object(u.a)({},e),{},{highScore:t.score});case"SET_GAMES":return Object(u.a)(Object(u.a)({},e),{},{games:[t.game].concat(Object(i.a)(e.games))});case"SET_ALL_GAMES":return Object(u.a)(Object(u.a)({},e),{},{games:t.games});case"SET_AUTO_PLAY":return Object(u.a)(Object(u.a)({},e),{},{autoPlay:t.autoPlay});case"CLEAR_CARD_PAIR":return Object(u.a)(Object(u.a)({},e),{},{cardPair:[]});default:return e}}},116:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"g",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"k",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"n",(function(){return f})),n.d(t,"l",(function(){return b})),n.d(t,"i",(function(){return j})),n.d(t,"h",(function(){return O})),n.d(t,"d",(function(){return m}));var r=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.board},c=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.boardDisabled},a=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.cardPair},o=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.gameType},i=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.soundsVolume},u=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.musicVolume},s=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.boardSize},l=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.imgURL},d=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.difficulty},f=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.time},b=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.score},j=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.highScore},O=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.games},m=function(e){var t;return null===e||void 0===e||null===(t=e.game)||void 0===t?void 0:t.autoPlay}},1697:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(32),o=n.n(a),i=(n(116),n(117),n(15)),u=n(48),s=n(9),l=n(10),d=n(14),f=n(12),b=n(4),j=function(e){var t=e.card,n=e.index,r=Object(s.b)(),c=Object(s.c)(d.j);return Object(b.jsx)("div",{className:"noselect card ".concat(t.type),onClick:function(){return e=n,void("closed"===t.type&&(r(Object(l.e)(e)),r(Object(l.j)(t))));var e},children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"front",children:[" ","closed"!==t.type&&"".concat(t.content)," "]}),Object(b.jsxs)("div",{className:"back noselect",children:[" ",c&&Object(b.jsx)("img",{src:"".concat(c),alt:"card",id:"output"})," "]})]})})},O=n(1698),m=n(27),p=n(33),g=n(1702),v=function(){var e=Object(s.c)(d.n),t=Object(s.b)();return Object(r.useEffect)((function(){var n=setInterval((function(){e>0?(localStorage.setItem("timer","".concat(e-1)),t(Object(l.p)(e-1))):t(Object(l.d)())}),1e3);return function(){clearInterval(n)}}),[e]),Object(b.jsxs)(O.a,{size:"large",className:"timer",danger:e<10,children:[Object(b.jsx)(g.a,{})," ",e]})},y=function(e){var t=e.boardItems,n=Object(s.c)(d.c),r=Object(s.b)(),c=Object(s.c)(d.g),a=Object(s.c)(d.a),o=Object(s.c)(d.b),i=Object(s.c)(d.e),u=Object(s.c)(d.l),f=Object(s.c)(d.d),g=Object(s.c)(d.i);return Object(b.jsx)("div",{children:"playing"===c?Object(b.jsxs)("div",{className:"appContent",children:[Object(b.jsxs)("div",{className:"score",children:[Object(b.jsxs)(O.a,{size:"large",children:["Current score: ",u]}),Object(b.jsxs)(O.a,{size:"large",children:["High score: ",g]}),Object(b.jsx)(v,{})]}),Object(b.jsx)("div",{className:"board ".concat(i," ").concat(n&&"disabled"," ").concat(f&&"autoPlay"),children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(b.jsx)(j,{cardPair:o,index:t,card:e},t)}))}),!f&&Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)(O.a,{onClick:function(){r(Object(l.f)(t))},className:"reset-button",type:"primary",size:"large",children:Object(b.jsx)(m.ReloadOutlined,{})}),Object(b.jsx)(O.a,{onClick:function(){r(Object(l.b)(t))},className:"reset-button",type:"primary",size:"large",children:Object(b.jsx)(m.ArrowLeftOutlined,{})})]})]}):Object(b.jsx)("div",{className:"menu ".concat(c," ").concat(i),children:Object(b.jsxs)("div",{className:"menu-content",children:[Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("div",{className:"end-text",children:"win"===c?"You won !":"lose"===c?"You lose :(":"wait"===c&&"Memory game"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"small-text",children:["High score: ",g]})})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)(O.a,{type:"primary",size:"large",onClick:function(){f?(r(Object(l.b)(t)),r(Object(l.q)(t))):r(Object(l.r)(t))},children:["wait"!==c?"Play again":"Play"," ",Object(b.jsx)(m.CaretRightOutlined,{})]}),Object(b.jsx)(O.a,{type:"primary",size:"large",onClick:function(){r(Object(l.b)(t))},children:Object(b.jsx)(p.b,{to:"/settings",children:Object(b.jsx)(m.SettingOutlined,{})})}),Object(b.jsx)(O.a,{type:"primary",size:"large",onClick:function(){r(Object(l.b)(t))},children:Object(b.jsx)(p.b,{to:"/stats",children:Object(b.jsx)(m.BarChartOutlined,{})})})]})]})})})},S=n(90),h=n.p+"static/media/music.601c07ae.mp3",x=n(91),E=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,1926))})),_=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,1927))}));var w=function(){var e=Object(s.b)(),t=Object(s.c)(d.g),n=Object(s.c)(d.a),c=Object(s.c)(d.b),a=Object(s.c)(d.k),o=Object(s.c)(d.e),j=Object(f.f)(),O=Object(s.c)(d.d),p=Object(S.a)(h,{volume:Number(localStorage.getItem("musicVolume")||a),interrupt:!0}),g=Object(u.a)(p,2),v=g[0],w=g[1].stop;Object(r.useEffect)((function(){"wait"===t?v():w()}),[v,t]),Object(r.useEffect)((function(){e(Object(l.m)(T))}),[]),Object(r.useEffect)((function(){e(Object(l.a)(Object(i.a)(c)))}),[n,c]),Object(r.useEffect)((function(){var t=function(t){e(Object(l.b)(T)),j.push(t)},n=function(){O?(e(Object(l.b)(T)),e(Object(l.q)(T))):e(Object(l.r)(T)),j.push("/")};Object(x.a)("ctrl+x,ctrl+z,ctrl+c,ctrl+enter,ctrl+v",{keyup:!0},(function(r,c){switch(c.key){case"ctrl+x":"keyup"===r.type&&t("settings");break;case"ctrl+z":"keyup"===r.type&&t("");break;case"ctrl+c":"keyup"===r.type&&t("stats");break;case"ctrl+enter":"keyup"===r.type&&n();break;case"ctrl+v":"keyup"===r.type&&!O&&e(Object(l.f)(T))}}))}),[o,O]);var T=Array("small"===o?4:"normal"===o?8:"big"===o?10:18).fill(0).map((function(e,t){return{content:"".concat(t),type:"closed",id:t}}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"game",children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{path:"/settings",render:function(){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading"}),children:Object(b.jsx)(E,{})})}}),Object(b.jsx)(f.a,{path:"/stats",render:function(){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading"}),children:Object(b.jsx)(_,{})})}}),Object(b.jsx)(f.a,{path:"/",render:function(){return Object(b.jsx)(y,{boardItems:T})}}),Object(b.jsx)(f.a,{path:"*",render:function(){return Object(b.jsx)("h1",{children:"404"})}})]})}),Object(b.jsxs)("footer",{children:[Object(b.jsx)("a",{href:"https://rs.school/react/",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("img",{src:"https://rs.school/images/rs_school_js.svg",alt:"course-logo"})}),Object(b.jsx)("b",{children:"2021"}),Object(b.jsx)("a",{href:"https://github.com/ReaZzy",rel:"noreferrer",target:"_blank",children:Object(b.jsx)(m.GithubOutlined,{className:"githubSvg"})})]})]})},T=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,1928)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},I=n(30),A=n(92),R=Object(I.c)({game:l.c}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,N=Object(I.e)(R,k(Object(I.a)(A.a)));o.a.render(Object(b.jsx)(p.a,{children:Object(b.jsx)(s.a,{store:N,children:Object(b.jsx)(w,{})})}),document.getElementById("root")),T()}},[[1697,2,3]]]);
//# sourceMappingURL=main.635750f1.chunk.js.map