(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"//SO":function(e,t,n){},"3IAW":function(e,t,n){"use strict";n("Ee2X");var a=n("ERkP"),o=n.n(a),i=n("O94r"),r=n.n(i),l=n("EUyq"),c=(n("S/L2"),function e(t){var n=t.className,a=t.theme,i=["logo","logo-3","logo-primary"];return t.type===e.Type.FLAG?i=["flag","flag-info"]:a===e.Theme.DARK&&i.splice(2,1,"logo-inverse"),o.a.createElement("div",{className:r()("np-logo",i,n)})});c.Theme=l.a,c.Type={FULL:"FULL",FLAG:"FLAG"},c.defaultProps={className:void 0,theme:l.a.LIGHT,type:c.Type.FULL};var s=c;t.a=s},"7CQW":function(e,t,n){"use strict";n("2G9S"),n("7x/C"),n("OZaJ"),n("DZ+c");var a=n("VrFO"),o=n.n(a),i=n("Y9Ll"),r=n.n(i),l=n("1Pcy"),c=n.n(l),s=n("5Yy7"),u=n.n(s),f=n("N+ot"),p=n.n(f),d=n("AuHH"),m=n.n(d),v=n("KEM+"),h=n.n(v),b=n("ERkP"),y=n.n(b),g=n("eKd8");n("7gtC");function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}var w=function(e){function t(){var e;return o()(this,t),e=n.call(this),h()(c()(e),"ensureHidden",(function(t){e.state.show||(t.stopPropagation(),e.hide())})),e.state={show:!1,tooltipId:null},e}u()(t,e);var n=E(t);return r()(t,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.tooltipId,n=this.props,a=n.position,o=n.children,i=n.label,r=n.offset,l=this.elementReference&&this.tooltipReference?function(e,t,n,a){return n===g.a.TOP?{top:"".concat(e.offsetTop-t.offsetHeight-a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:n===g.a.LEFT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft-t.offsetWidth-a,"px")}:n===g.a.RIGHT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft+e.offsetWidth+a,"px")}:n===g.a.BOTTOM?{top:"".concat(e.offsetTop+e.offsetHeight+a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,r):{};return y.a.createElement("span",{onMouseOver:function(){return e.show()},onFocus:function(){return e.show()},onMouseOut:function(){return e.hide()},onBlur:function(){return e.hide()},ref:function(t){e.elementReference=t},"aria-describedby":t,className:"tw-tooltip-container"},y.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:l,ref:function(t){e.tooltipReference=t},id:t},y.a.createElement("div",{className:"tooltip-arrow"}),y.a.createElement("div",{className:"tooltip-inner"},i)),o)}}]),t}(b.Component);w.Position=g.a,w.defaultProps={position:w.Position.TOP,offset:0};var N=w;t.a=N},"7gtC":function(e,t,n){},"7ndt":function(e,t,n){},"9YZu":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),i=n("O94r"),r=n.n(i),l=n("VehP"),c=n("EUyq"),s=(n("DGa2"),function(e){var t=e.backgroundColor,n=e.children,a=e.className,i=e.outlined,l=e.size,c=e.theme,s=e.type;return o.a.createElement("div",{className:r()("tw-avatar",a,"tw-avatar--".concat(l),"tw-avatar--".concat(s),"tw-avatar--".concat(c),{"tw-avatar--outlined":i})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},n))});s.Size={SMALL:l.a.SMALL,MEDIUM:l.a.MEDIUM,LARGE:l.a.LARGE},s.Theme=c.a,s.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:s.Size.MEDIUM,theme:c.a.LIGHT,type:s.Type.THUMBNAIL},t.a=s},DGa2:function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYta:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return x})),n.d(t,"default",(function(){return A}));var a=n("cxan"),o=n("HbGN"),i=n("ERkP"),r=n.n(i),l=n("ZVZ0"),c=n("Qi1R"),s=(n("z84I"),n("ddV6")),u=n.n(s),f=n("O94r"),p=n.n(f),d=n("Ohp4"),m=n("/Vl7"),v=(n("ePcE"),function(e){var t=e.label,n=e.className,a=e.onClick;return r.a.createElement("button",{type:"button",className:p()("np-back-button","d-flex","align-items-center","btn-unstyled",n),onClick:a},r.a.createElement(m.c,{size:24}),t)});v.defaultProps={className:void 0,label:null};var h=v,b=n("05Xt"),y=(n("aDaW"),function(e){var t=e.activeStep,n=e.backward;return e.labels.map((function(e,a){return r.a.createElement(b.a,{key:a,in:a===t-1,timeout:450,classNames:"np-animated-label",unmountOnExit:!0},r.a.createElement("div",{className:p()("np-animated-label",{"np-animated-label--backward":n}),"aria-hidden":a!==t-1},e))}))});y.defaultProps={backward:!1};var g=y,E=n("3IAW"),w=n("ToGa"),N=n("Fr7r"),O=n("5BfY"),T=n("EUyq"),k=n("Tz8v"),L=(n("7ndt"),function(e){var t=e.avatar,n=e.stepper,a=n.steps,o=n.activeStep,l=e.onClose,c=e.onGoBack,s=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current}(o),f=Object(i.useRef)(null),m=Object(k.a)({ref:f}),v=u()(m,1)[0],b=l&&r.a.createElement(d.a,{onClick:l});return console.log(v),r.a.createElement(N.a,{ref:f,className:"np-flow-navigation",leftContent:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{type:E.a.Type.FULL,className:"hidden-xs"}),r.a.createElement("div",{className:"visible-xs"},c?r.a.createElement(h,{onClick:c,label:r.a.createElement(g,{labels:a.map((function(e){return e.label})),activeStep:o,backward:o<s})}):r.a.createElement(E.a,{type:E.a.Type.FLAG}))),rightContent:r.a.createElement(r.a.Fragment,null,t,t&&b&&r.a.createElement("span",{className:"separator"}),b),bottomContent:r.a.createElement(w.a,{activeStep:o,steps:a,className:p()("np-flow-navigation__stepper m-t-1")}),layout:v<O.a.MEDIUM?"vertical":"horizontal"})});L.Theme=T.a,L.defaultProps={avatar:null,onGoBack:null,onClose:null};var j=L,C=n("9YZu"),x=(r.a.createElement,{name:"FlowNavigation"}),S={meta:x};function A(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      avatar={\n        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>\n          <ProfileIcon />\n        </Avatar>\n      }\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      stepper={{\n        activeStep,\n        steps: [\n          {\n            label: 'Amount',\n            hoverLabel: (\n              <>\n                <div>\n                  <strong>100 GBP</strong>\n                </div>\n                0.2351 ETH\n              </>\n            ),\n            onClick: () => setActiveStep(0),\n          },\n          {\n            label: 'My details',\n            hoverLabel: (\n              <>\n                <div>\n                  <strong>Elena Durante</strong>\n                </div>\n                elenadurante@test.com\n              </>\n            ),\n            onClick: () => setActiveStep(1),\n          },\n          { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n          { label: 'Something', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        ],\n      }}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:j,Avatar:C.a,BriefcaseIcon:m.d,ProfileIcon:m.t},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)("p",null,"Please use FlowNavigation to help a user navigate through a flow."),Object(l.a)("h2",{id:"when-to-use"},"When to use"),Object(l.a)("p",null,"Use FlowNavigation inside flows to help customers identify and navigate between a set o steps"),Object(l.a)("h2",{id:"when-not-to-use"},"When not to use"),Object(l.a)("p",null,"Do not use a FlowNavigation if a Stepper does not need to be included. Please use ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead"),Object(l.a)("h2",{id:"anatomy"},"Anatomy"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Logo - always visible. Displayed as full logo on desktop and a flag version on mobile."),Object(l.a)("li",{parentName:"ul"},"BackButton - visible if a ",Object(l.a)("inlineCode",{parentName:"li"},"ongoBack")," function is provided. It's visible only on mobile."),Object(l.a)("li",{parentName:"ul"},"Animated label - visible on mobile replace the stepper's labels and indicate the active step."),Object(l.a)("li",{parentName:"ul"},"Avatar - visible if provided and can be a user profile or a business avatar."),Object(l.a)("li",{parentName:"ul"},"separator - vsibile if both Avatar and Closebutton are provided. It's vertical line that separates Avatar and closeButton."),Object(l.a)("li",{parentName:"ul"},"CloseButton- shows only if a onClose function is provided and it is normally used to close the flow."),Object(l.a)("li",{parentName:"ul"},"Stepper - always visible helps the user to navigate back and forth the flow and indicate the active step."),Object(l.a)("li",{parentName:"ul"},"BorderBottom - always visible and associated with the presence of the stepper")),Object(l.a)(c.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}A.isMDXComponent=!0},Fr7r:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),i=n("O94r"),r=n.n(i),l=o.a.forwardRef((function(e,t){var n=e.bottomContent,a=e.className,i=e.layout,l=e.leftContent,c=e.rightContent,s="vertical"===i;return o.a.createElement("div",{className:r()("d-flex","flex-wrap","np-header",a),ref:t},o.a.createElement("div",{className:r()("align-items-center","d-flex","justify-content-start",{"flex__item--6":s})},l),o.a.createElement("div",{className:r()("align-items-center","d-flex","justify-content-end",{"flex__item--6 ":s,"order-2":!s})},c),o.a.createElement("div",{className:r()("align-items-center","d-flex","justify-content-center",{"flex__item--12":s,"order-1 flex-grow-1":!s})},n))}));l.defaultProps={bottomContent:null,className:null,layout:null,leftContent:null,rightContent:null},t.a=l},Ohp4:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),i=n("O94r"),r=n.n(i),l=n("/Vl7"),c=(n("ryiH"),function(e){var t=e.onClick,n=e.className;return o.a.createElement("button",{type:"button",className:r()("np-close-button","btn-link","text-no-decoration",n),"aria-label":"Close",onClick:t},o.a.createElement(l.j,{size:24}))});c.defaultProps={className:null},t.a=c},"S/L2":function(e,t,n){},ToGa:function(e,t,n){"use strict";n("2G9S"),n("z84I");var a=n("ERkP"),o=n.n(a),i=n("O94r"),r=n.n(i),l=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function c(){return function(){var e=void 0!==window.ontouchstart,t="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(e||t||n)}()||function(){var e=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}()}var s=function(e){var t=e.steps,n=e.activeStep,a=e.className;if(0===t.length)return null;var i=function(e,t,n){return Math.max(Math.min(t,n),e)}(0,t.length-1,n),s=1/(t.length-1),u=i/(t.length-1),f=Math.max(u-s,0),p=Math.min(i,1)*s;return o.a.createElement("div",{className:r()("tw-stepper",a)},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*f,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},t.map((function(e,t){var n=t===i,a=e.onClick&&!n,r=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!a,onClick:function(){return a&&e.onClick()}},o.a.createElement("small",null,e.label));return o.a.createElement("li",{key:t,style:{left:"".concat(t*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(a?"tw-stepper__step--clickable":"","\n        ")},e.hoverLabel&&!c()?o.a.createElement(l.a,{position:l.a.Position.BOTTOM,label:e.hoverLabel},r):r)}))))};s.defaultProps={activeStep:0,className:void 0};var u=s;t.a=u},Tz8v:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ddV6"),o=n.n(a),i=n("ERkP"),r=n("XORh"),l=n.n(r),c=i.useLayoutEffect,s=function(e){var t=e.ref,n=e.throttleMs,a=void 0===n?100:n,r=Object(i.useState)(null),s=o()(r,2),u=s[0],f=s[1],p=function(){t&&t.current&&f(t.current.clientWidth)};return c((function(){return window.addEventListener("resize",l()(p,a)),p(),function(){return window.removeEventListener("resize",p)}}),[]),[u]};s.THROTTLE_MS=100},XORh:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return s.Date.now()};function m(e,t,n){var a,o,i,r,l,c,s=0,u=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,i=o;return a=o=void 0,s=t,r=e.apply(i,n)}function g(e){return s=e,l=setTimeout(w,t),u?y(e):r}function E(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-s>=i}function w(){var e=d();if(E(e))return N(e);l=setTimeout(w,function(e){var n=t-(e-c);return m?p(n,i-(e-s)):n}(e))}function N(e){return l=void 0,b&&a?y(e):(a=o=void 0,r)}function O(){var e=d(),n=E(e);if(a=arguments,o=this,c=e,n){if(void 0===l)return g(c);if(m)return l=setTimeout(w,t),y(c)}return void 0===l&&(l=setTimeout(w,t)),r}return t=h(t)||0,v(n)&&(u=!!n.leading,i=(m="maxWait"in n)?f(h(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==l&&clearTimeout(l),s=0,a=c=o=l=void 0},O.flush=function(){return void 0===l?r:N(d())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||i.test(e)?r(e.slice(2),l?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:a,maxWait:t,trailing:o})}}).call(this,n("lpmq"))},aDaW:function(e,t,n){},ePcE:function(e,t,n){},ryiH:function(e,t,n){}}]);