"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{9947:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,i,a=t(5705),u=t(168),c=t(6444),l=(0,c.ZP)(a.l0)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 30px 20px;\n  width: 300px;\n  height: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=(0,c.ZP)(a.gN)(o||(o=(0,u.Z)(["\n  font-size: 18px;\n  padding-left: 20px;\n  border-radius: 6px;\n  border: none;\n  height: 35px;\n  width: 280px;\n\n  color: #566574;\n  &:focus {\n    color: #fff;\n  }\n\n  &:hover::-webkit-input-placeholder {\n    transition: all 0.3s;\n    color: paleturquoise;\n  }\n  &:focus::-webkit-input-placeholder {\n    transition: all 0.3s;\n    color: paleturquoise;\n  }\n\n  &:hover {\n    transition: all 0.3s;\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n  &:focus {\n    transition: all 0.3s;\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n"]))),p=c.ZP.button(i||(i=(0,u.Z)(["\n  display: block;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 18px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),f=t(9434),d="NOT_FOUND";var h=function(n,e){return n===e};function x(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?h:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:d},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return d}return{get:r,put:function(e,o){r(e)===d&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===d){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function m(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function g(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,p=void 0===s?t:s,f=Array.isArray(p)?p:[p],d=m(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var v,b,y,j,w,Z,k,C,z=g(x),A=function(n){return n.filters.filterValue},P=z([function(n){return n.contacts.items},A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),q=function(){return(0,f.v9)(P)},E=t(4647),F=t(184),N=function(){var n=(0,f.I0)(),e=q();return(0,F.jsx)(a.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):(n((0,E.uK)(t)),r.resetForm())},children:(0,F.jsxs)(l,{children:[(0,F.jsxs)("label",{children:[(0,F.jsx)(s,{type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,F.jsx)(a.Bc,{name:"name"})]}),(0,F.jsxs)("label",{children:[(0,F.jsx)(s,{type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,F.jsx)(a.Bc,{name:"number"})]}),(0,F.jsx)(p,{type:"submit",children:"Add contact"})]})})},I=c.ZP.ul(v||(v=(0,u.Z)(["\n  margin-top: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  border-radius: 6px;\n  width: 380px;\n  padding: 10px;\n  background-color: #e7e4e4df;\n"]))),O=c.ZP.li(b||(b=(0,u.Z)(["\n  color: #3e3c3c;\n  font-size: 16px;\n"]))),_=c.ZP.div(y||(y=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),L=function(){var n=q(),e=(0,f.I0)();return(0,F.jsx)(I,{children:n.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,F.jsxs)(_,{children:[(0,F.jsxs)(O,{children:[r," - ",o]}),(0,F.jsx)("button",{type:"button",onClick:function(){return e((0,E.GK)(t))},children:"Delete"})]},t)}))})},S=t(4808),B=c.ZP.input(j||(j=(0,u.Z)(["\n  font-size: 14px;\n  padding-left: 20px;\n  border-radius: 6px;\n  border: none;\n  height: 25px;\n  width: 180px;\n\n  color: #566574;\n  &:focus {\n    color: #fff;\n  }\n\n  &:hover::-webkit-input-placeholder {\n    transition: all 0.3s;\n    color: paleturquoise;\n  }\n  &:focus::-webkit-input-placeholder {\n    transition: all 0.3s;\n    color: paleturquoise;\n  }\n\n  &:hover {\n    transition: all 0.3s;\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n  &:focus {\n    transition: all 0.3s;\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n"]))),R=function(){var n=(0,f.I0)(),e=(0,f.v9)(A);return(0,F.jsx)("div",{children:(0,F.jsx)(B,{type:"text",name:"filter",placeholder:"Find contacts by name",value:e,onChange:function(e){var t=e.currentTarget.value;n((0,S.W1)(t))}})})},D=c.ZP.div(w||(w=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  /* flex-direction: column; */\n  align-items: center;\n  gap: 100px;\n  margin-top: 20px;\n"]))),J=c.ZP.div(Z||(Z=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n\n  min-height: 256px;\n"]))),K=c.ZP.h1(k||(k=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 30px;\n  text-align: center;\n  color: paleturquoise;\n"]))),T=c.ZP.h1(C||(C=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 30px;\n  text-align: center;\n  color: paleturquoise;\n  margin-bottom: 30px;\n"]))),V=t(2791),G=function(){var n=(0,f.I0)();return(0,V.useEffect)((function(){n((0,E.yF)())}),[n]),(0,F.jsxs)(D,{children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(K,{children:"Create contact"}),(0,F.jsx)(N,{})]}),(0,F.jsxs)(J,{children:[(0,F.jsx)(T,{children:"Yours contacts"}),(0,F.jsx)(R,{}),(0,F.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=947.4aef76d5.chunk.js.map