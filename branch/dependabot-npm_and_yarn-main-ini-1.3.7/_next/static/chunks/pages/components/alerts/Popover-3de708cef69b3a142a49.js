_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),i=n("N4z3"),c=n("f4p7"),u=[].join,a=o!=Object,f=c("join",",");r({target:"Array",proto:!0,forced:a||!f},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},"8+RD":function(t,e,n){var r=n("dSaG");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Ch6y:function(t,e,n){"use strict";var r=n("VCi3"),o=n("q9+l"),i=n("fVMg"),c=n("1Mu/"),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},"DZ+c":function(t,e,n){"use strict";var r=n("uLp7"),o=n("FXyv"),i=n("ct80"),c=n("q/0V"),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n)}),{unsafe:!0})},HRvm:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return l})),n.d(e,"default",(function(){return d}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),u=n("ZVZ0"),a=n("Qi1R"),f=n("b1ss"),s=n("SP0Y"),l=(c.a.createElement,{name:"Popover"}),p={meta:l};function d(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(u.a)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)(a.b,{code:'<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',scope:{Popover:f.a,Button:s.a},mdxType:"LiveEditorBlock"}),Object(u.a)(a.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},LxGA:function(t,e,n){},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},SP0Y:function(t,e,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),c=n.n(i),u=n("ERkP"),a=n.n(u),f=n("O94r"),s=n.n(f),l=(n("j+zR"),n("s+Iv")),p=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),d=n("VehP"),v=function(t){var e=t.className,n=t.block,r=t.children,i=t.disabled,u=t.htmlType,f=t.loading,v=t.size,y=t.type,h=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),g=s()("btn btn-".concat(v),"np-btn np-btn-".concat(v),{"btn-loading":f,"btn-primary":y===p.PRIMARY,"btn-success":y===p.PAY,"btn-default":y===p.SECONDARY,"btn-danger":y===p.DANGER,"btn-link":y===p.LINK,"btn-block np-btn-block":n},e);return Object(l.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",v===d.a.EXTRA_SMALL),a.a.createElement("button",o()({type:u,className:g,disabled:i||f},h),r,f&&a.a.createElement("span",{className:s()("btn-loader",{"m-l-2":!n})}))};v.Type=p,v.Size={EXTRA_SMALL:d.a.EXTRA_SMALL,SMALL:d.a.SMALL,MEDIUM:d.a.MEDIUM,LARGE:d.a.LARGE},v.defaultProps={className:null,size:v.Size.MEDIUM,type:v.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=v},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),i=n("tJVe"),c=n("cww3"),u=n("4/YM"),a=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],d=0;null!==(l=a(c,f));){var v=String(l[0]);p[d]=v,""===v&&(c.lastIndex=u(f,i(c.lastIndex),s)),d++}return 0===d?null:p}]}))},XksX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("7xRU"),n("z84I"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function r(){var t=["iphone","ipad","ipod"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return H}));var r=n("VrFO"),o=n.n(r),i=n("Y9Ll"),c=n.n(i),u=n("1Pcy"),a=n.n(u),f=n("5Yy7"),s=n.n(f),l=n("N+ot"),p=n.n(l),d=n("AuHH"),v=n.n(d),y=n("KEM+"),h=n.n(y),g=n("ERkP"),b=n.n(g),O=n("O94r"),m=n.n(O),E=n("eKd8");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var w=E.a.TOP,R=E.a.RIGHT,T=E.a.BOTTOM,x=E.a.BOTTOM_RIGHT,j=E.a.BOTTOM_LEFT,L=E.a.LEFT,S=E.a.RIGHT_TOP,A=E.a.LEFT_TOP;function _(t,e){return t?function(t,e,n){var r=M(e,R,n),o=M(e,L,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=M(t,T,e);return n.overflowsLeft&&!n.overflowsRight?x:n.overflowsRight&&!n.overflowsLeft?j:T}(e,n);if(r.overflowsRight){if(t===R)return L;if(t===S)return A;if(t===T||t===x)return j}if(o.overflowsLeft){if(t===L)return R;if(t===A)return S;if(t===T||t===j)return x}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function M(t,e,n){var r=function(t,e){return t?N(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}function N(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===w?k({top:n.top-o,left:n.left+n.width/2-r/2},r):e===R?k({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===T?k({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===x?k({top:n.top+n.height,left:n.left+n.width/2-30},r):e===j?k({top:n.top+n.height,left:n.left+n.width/2-r+30},r):e===L?k({top:n.top+n.height/2-o/2,left:n.left-r},r):e===S?k({top:n.top+n.height/2-30,left:n.left+n.width},r):e===A?k({top:n.top+n.height/2-30,left:n.left-r},r):{}}function k(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?P(Object(e),!0).forEach((function(n){h()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var I=n("6gor"),D=n("XksX");n("LxGA");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?G(Object(e),!0).forEach((function(n){h()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):G(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var H=function(t){function e(){var t;return o()(this,e),t=n.call(this),h()(a()(t),"closePopoverOnOutsideClick",(function(e){var n=t.popoverElement.contains(e.target),r=t.triggerElement.contains(e.target);n||r||t.close()})),h()(a()(t),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===I.a.ENTER&&t.toggle()})),h()(a()(t),"open",(function(){t.setState({isOpen:!0}),Object(D.a)(),document.addEventListener("click",t.closePopoverOnOutsideClick,!0)})),h()(a()(t),"close",(function(){t.setState({isOpen:!1}),Object(D.b)(),document.removeEventListener("click",t.closePopoverOnOutsideClick,!0)})),h()(a()(t),"toggle",(function(){return t.state.isOpen?t.close():t.open()})),h()(a()(t),"createTrigger",(function(){var e=t.props,n=e.children,r=e.containsFocusableElement,o=t.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:b.a.createElement("span",null,t)}(n);return Object(g.cloneElement)(i,C(C({},!r&&{tabIndex:0,role:"button","aria-expanded":o}),{},{"data-toggle":"popover",onClick:t.toggle,onKeyUp:t.handleKeyUp,ref:function(e){t.triggerElement=e}}))})),h()(a()(t),"style",(function(e){return t.props.classNames[e]||e})),t.state={isOpen:!1},t}s()(e,t);var n=B(e);return c()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),u=_(this.popoverElement,o),a=m()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),h()({},this.style("scale-down"),!i),this.style(u)),f=function(t,e){if(!t)return{};var n=t.previousElementSibling;return N(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,u),s=f.top,l=f.left;return b.a.createElement(b.a.Fragment,null,c,b.a.createElement("div",{className:a,ref:function(e){t.popoverElement=e},style:{top:s,left:l}},n&&b.a.createElement("h3",{className:m()(this.style("popover-title"))},n),b.a.createElement("p",{className:m()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(g.Component);h()(H,"Placement",E.a),H.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:H.Placement.RIGHT,classNames:{}}},eKd8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top",CENTER:"center"}},"iKE+":function(t,e,n){var r=n("1Mu/"),o=n("9JhN"),i=n("66wQ"),c=n("j6nH"),u=n("q9+l").f,a=n("ZdBB").f,f=n("jl0/"),s=n("q/0V"),l=n("L2rT"),p=n("uLp7"),d=n("ct80"),v=n("zc29").set,y=n("Ch6y"),h=n("fVMg")("match"),g=o.RegExp,b=g.prototype,O=/a/g,m=/a/g,E=new g(O)!==O,P=l.UNSUPPORTED_Y;if(r&&i("RegExp",!E||P||d((function(){return m[h]=!1,g(O)!=O||g(m)==m||"/a/i"!=g(O,"i")})))){for(var w=function(t,e){var n,r=this instanceof w,o=f(t),i=void 0===e;if(!r&&o&&t.constructor===w&&i)return t;E?o&&!i&&(t=t.source):t instanceof w&&(i&&(e=s.call(t)),t=t.source),P&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var u=c(E?new g(t,e):g(t,e),r?this:b,w);return P&&n&&v(u,{sticky:n}),u},R=function(t){t in w||u(w,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},T=a(g),x=0;T.length>x;)R(T[x++]);b.constructor=w,w.prototype=b,p(o,"RegExp",w)}y("RegExp")},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},j6nH:function(t,e,n){var r=n("dSaG"),o=n("waID");t.exports=function(t,e,n){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&o(t,c),t}},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},qh8L:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Popover",function(){return n("HRvm")}])},"s+Iv":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("vrRf");function r(e){var n,r;0<=["development","test"].indexOf(null===(n=t)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(e)}function o(t,e){e&&r(t)}}).call(this,n("F63i"))},vrRf:function(t,e,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),c=n("znGZ"),u=[].indexOf,a=!!u&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},waID:function(t,e,n){var r=n("FXyv"),o=n("8+RD");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),c=n("znGZ"),u=i("map"),a=c("map");r({target:"Array",proto:!0,forced:!u||!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["qh8L",0,1,2,3,5,7,4]]]);