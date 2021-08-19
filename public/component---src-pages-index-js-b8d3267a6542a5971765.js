/*! For license information please see component---src-pages-index-js-b8d3267a6542a5971765.js.LICENSE.txt */
(self.webpackChunkfun_play=self.webpackChunkfun_play||[]).push([[678],{5900:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&e.push(i)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},9575:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=t(5900),c=t.n(i),u=t(5893);var l=n.createContext({prefixes:{}});l.Consumer,l.Provider;function f(e,r){var t=(0,n.useContext)(l).prefixes;return e||t[r]||r}var s=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((function(e){return null!=e})).reduce((function(e,r){if("function"!=typeof r)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?r:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.apply(this,n),r.apply(this,n)}}),null)},p=["as","disabled","onKeyDown"];function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){return!e||"#"===e.trim()}var d=n.forwardRef((function(e,r){var t=e.as,n=void 0===t?"a":t,o=e.disabled,i=e.onKeyDown,c=a(e,p),l=function(e){var r=c.href,t=c.onClick;(o||v(r))&&e.preventDefault(),o?e.stopPropagation():null==t||t(e)};return v(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),o&&(c.tabIndex=-1,c["aria-disabled"]=!0),(0,u.jsx)(n,b(b({ref:r},c),{},{onClick:l,onKeyDown:s((function(e){" "===e.key&&(e.preventDefault(),l(e))}),i)}))}));d.displayName="SafeAnchor";var O=d,m=["bsPrefix","variant","size","active","className","type","as"];function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=n.forwardRef((function(e,r){var t=e.bsPrefix,n=e.variant,o=e.size,i=e.active,l=e.className,s=e.type,p=e.as,y=a(e,m),b=f(t,"btn"),v=c()(l,b,i&&"active",n&&"".concat(b,"-").concat(n),o&&"".concat(b,"-").concat(o));if(y.href)return(0,u.jsx)(O,h(h({},y),{},{as:p,ref:r,className:c()(v,y.disabled&&"disabled")}));s||p||(s="button");var d=p||"button";return(0,u.jsx)(d,h(h({},y),{},{ref:r,type:s,className:v}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};var w=j,P=function(){return n.createElement(n.Fragment,null,n.createElement("h2",null,"main"),n.createElement(w,null,"test"))},x=t(9),D=x.ZP.div.withConfig({displayName:"Grid__Row",componentId:"sc-1u5ghxc-0"})(["  display:flex;"]),E=x.ZP.div.withConfig({displayName:"Grid__Container",componentId:"sc-1u5ghxc-1"})(["  margin:0 auto;padding:0 20px;max-width:1380px;"]),k=function(){return n.createElement(n.Fragment,null,n.createElement(E,null,n.createElement(D,null,n.createElement(P,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b8d3267a6542a5971765.js.map