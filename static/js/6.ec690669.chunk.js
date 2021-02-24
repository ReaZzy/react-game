(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[6],{1926:function(e,t,a){"use strict";a.r(t);var c=a(48),l=a(0),s=a(1783),n=a(1931),i=a(1932),r=a(1698),j=a(1930),o=a(9),d=a(10),b=a(14),u=a(27),O=a(12),h=a(1789),x=a.n(h),m=a(4);t.default=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),a=t[0],h=t[1],g=Object(o.b)(),f=Object(o.c)(b.k),y=Object(o.c)(b.m),v=Object(o.c)(b.e),p=Object(O.f)(),k=Object(o.c)(b.f),N=Object(o.c)(b.d);return Object(m.jsx)("div",{className:"menu settings",children:Object(m.jsxs)("div",{className:"menu-content",children:[Object(m.jsx)("label",{className:"label",children:" Difficulty "}),Object(m.jsxs)(s.a.Group,{defaultValue:k,value:k,buttonStyle:"solid",onChange:function(e){g(Object(d.l)(e.target.value))},children:[Object(m.jsx)(s.a.Button,{value:"easy",children:"Easy"}),Object(m.jsx)(s.a.Button,{value:"normal",children:"Normal"}),Object(m.jsx)(s.a.Button,{value:"hard",children:"Hard"})]}),Object(m.jsx)("label",{className:"label",children:" Board size "}),Object(m.jsxs)(s.a.Group,{defaultValue:v,value:v,buttonStyle:"solid",onChange:function(e){g(Object(d.i)(e.target.value))},children:[Object(m.jsx)(s.a.Button,{value:"small",children:"Small"}),Object(m.jsx)(s.a.Button,{value:"normal",children:"Normal"}),Object(m.jsx)(s.a.Button,{value:"big",children:"Big"}),Object(m.jsx)(s.a.Button,{value:"huge",children:"Huge"})]}),Object(m.jsx)("label",{className:"label",children:" Music "}),Object(m.jsx)(n.a,{className:"slider",value:100*f,defaultValue:100*f,onChange:function(e){g(Object(d.n)(e/100)),localStorage.setItem("musicVolume","".concat(e/100))}}),Object(m.jsx)("label",{className:"label",children:" Sounds "}),Object(m.jsx)(n.a,{className:"slider",value:100*y,defaultValue:100*y,onChange:function(e){g(Object(d.o)(e/100)),localStorage.setItem("soundsVolume","".concat(e/100))}}),Object(m.jsxs)("label",{style:{backgroundColor:a?"#FF0000":"#1890ff"},className:"label label-input reset",children:[a?"Max image size is 1MB":"Upload your card style",Object(m.jsx)("input",{type:"file",className:"file-input",onChange:function(e){var t=new FileReader;e.target.files[0]&&t.readAsDataURL(e.target.files[0]),t.onerror=function(){console.log("error")},t.onloadend=function(){var a,c=t.result;(null===(a=e.target)||void 0===a?void 0:a.files[0].size)>=1e6?(h(!0),setTimeout((function(){h(!1)}),2e3)):function(e){localStorage.setItem("imgURL",e),h(!1),g(Object(d.k)(e))}(c)}}})]}),Object(m.jsx)("label",{className:"label",children:" Autoplay "}),Object(m.jsx)(i.a,{checked:N,onChange:function(e){g(Object(d.h)(e))}}),Object(m.jsxs)("div",{className:"hotkeys",children:[Object(m.jsx)(x.a,{level:2,children:"Hotkeys"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{type:"dashed",size:"large",children:"CTRL + Z"}),Object(m.jsx)(j.a.Text,{keyboard:!0,children:"Back to homepage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{type:"dashed",size:"large",children:"CTRL + X"}),Object(m.jsx)(j.a.Text,{keyboard:!0,children:"Settings"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{type:"dashed",size:"large",children:"CTRL + C"}),Object(m.jsx)(j.a.Text,{keyboard:!0,children:"Stats"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{type:"dashed",size:"large",children:"CTRL + V"}),Object(m.jsx)(j.a.Text,{keyboard:!0,children:"Refresh your board"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{type:"dashed",size:"large",children:"CTRL + ENTER"}),Object(m.jsx)(j.a.Text,{keyboard:!0,children:"Start game"})]})]}),Object(m.jsx)(r.a,{className:"reset",onClick:function(){g(Object(d.g)())},type:"primary",danger:!0,children:"Reset"}),Object(m.jsx)(r.a,{className:"reset",onClick:function(){p.goBack()},type:"primary",children:Object(m.jsx)(u.ArrowLeftOutlined,{})})]})})}}}]);
//# sourceMappingURL=6.ec690669.chunk.js.map