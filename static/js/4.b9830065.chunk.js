(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[4],{1702:function(e,a,t){"use strict";t.r(a);t(0);var l=t(1705),c=t(1704),s=t(1687),n=t(12),o=t(11),i=t(15),r=t(39),u=t(9),j=t(4);a.default=function(){var e=Object(n.b)(),a=Object(n.c)(i.g),t=Object(n.c)(i.h),b=Object(n.c)(i.d),d=Object(u.f)();return Object(j.jsx)("div",{className:"menu settings",children:Object(j.jsxs)("div",{className:"menu-content",children:[Object(j.jsx)("label",{className:"label",children:" Difficulty "}),Object(j.jsxs)(l.a.Group,{defaultValue:"a",buttonStyle:"solid",children:[Object(j.jsx)(l.a.Button,{value:"a",children:"Easy"}),Object(j.jsx)(l.a.Button,{value:"b",children:"Normal"}),Object(j.jsx)(l.a.Button,{value:"c",children:"Hard"})]}),Object(j.jsx)("label",{className:"label",children:" Board size "}),Object(j.jsxs)(l.a.Group,{defaultValue:b,buttonStyle:"solid",onChange:function(a){e(Object(o.h)(a.target.value)),localStorage.setItem("boardSize","".concat(a.target.value))},children:[Object(j.jsx)(l.a.Button,{value:"small",children:"Small"}),Object(j.jsx)(l.a.Button,{value:"normal",children:"Normal"}),Object(j.jsx)(l.a.Button,{value:"big",children:"Big"}),Object(j.jsx)(l.a.Button,{value:"huge",children:"Huge"})]}),Object(j.jsx)("label",{className:"label",children:" Music "}),Object(j.jsx)(c.a,{className:"slider",defaultValue:100*a,onChange:function(a){e(Object(o.m)(a/100)),localStorage.setItem("musicVolume","".concat(a/100))}}),Object(j.jsx)("label",{className:"label",children:" Sounds "}),Object(j.jsx)(c.a,{className:"slider",defaultValue:100*t,onChange:function(a){e(Object(o.n)(a/100)),localStorage.setItem("soundsVolume","".concat(a/100))}}),Object(j.jsxs)("label",{className:"label label-input",children:[" Upload your own card style",Object(j.jsx)("input",{type:"file",className:"file-input",onChange:function(a){var t,l=new FileReader;l.readAsDataURL(null===(t=a.target)||void 0===t?void 0:t.files[0]),l.onloadend=function(){var a=l.result;e(Object(o.k)(a)),localStorage.setItem("imgURL",a)}}})]}),Object(j.jsx)(s.a,{className:"reset",onClick:function(){e(Object(o.f)())},type:"primary",danger:!0,children:"Reset"}),Object(j.jsx)(s.a,{className:"reset",onClick:function(){d.goBack()},type:"primary",children:Object(j.jsx)(r.ArrowLeftOutlined,{})})]})})}}}]);
//# sourceMappingURL=4.b9830065.chunk.js.map