(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"2lU4":function(e,t,n){},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh");var o=n("97Jx"),r=n.n(o),a=n("m3Bd"),i=n.n(a),s=n("VrFO"),l=n.n(s),c=n("Y9Ll"),u=n.n(c),f=n("1Pcy"),p=n.n(f),m=n("5Yy7"),d=n.n(m),h=n("N+ot"),v=n.n(h),O=n("AuHH"),y=n.n(O),g=n("KEM+"),b=n.n(g),E=n("ERkP"),w=n.n(E),P=n("O94r"),N=n.n(P),S=n("05Xt"),L=n("/Vl7"),k=n("6gor"),j=(n("2lU4"),n("bRoR")),R=n("VehP"),C=n("P8nL");function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v()(this,n)}}var A=function(e){function t(){var e;l()(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),b()(p()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===k.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),b()(p()(e),"handleOnClick",(function(t){var n=e.props,o=n.onClose,r=n.closeOnClick;t.target===t.currentTarget&&o&&r&&o(t)})),b()(p()(e),"handleOnEnter",(function(){Object(j.a)()})),b()(p()(e),"handleOnClose",(function(){Object(j.b)()})),b()(p()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}d()(t,e);var n=D(t);return u()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(j.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.body,a=t.footer,s=t.onClose,l=t.className,c=t.open,u=(t.size,t.closeOnClick,i()(t,["title","body","footer","onClose","className","open","size","closeOnClick"])),f=this.checkSpecialClasses("compact"),p=this.checkSpecialClasses("no-divider");return w.a.createElement(C.a,{open:c},w.a.createElement(S.a,{appear:!0,in:c,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},w.a.createElement("div",r()({className:"tw-modal fade ".concat(l),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},u),w.a.createElement("div",{className:N()("tw-modal-dialog",b()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},w.a.createElement("div",{className:N()("tw-modal-content",{"tw-modal-compact":f,"tw-modal-no-title":!n})},w.a.createElement("div",{className:N()("tw-modal-header",{"modal--withoutborder":!n||p})},w.a.createElement("h4",{className:"tw-modal-title"},n),w.a.createElement("button",{type:"button",onClick:s,className:"close","aria-label":"close"},w.a.createElement(L.h,{size:24}))),w.a.createElement("div",{className:"tw-modal-body"},o),a&&w.a.createElement("div",{className:N()("tw-modal-footer",{"modal--withoutborder":p})},a))))))}}]),t}(E.Component);b()(A,"Size",R.a),A.defaultProps={title:null,footer:null,size:A.Size.MEDIUM,className:"",closeOnClick:!0},t.a=A},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return P})),n.d(t,"default",(function(){return S}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),i=n.n(a),s=n("ZVZ0"),l=(n("1t7P"),n("jQ/y"),n("O94r")),c=n.n(l),u=n("/Vl7"),f=(n("j+zR"),n("ddV6")),p=n.n(f),m=n("b1ss"),d=n("GAp3"),h=n("VehP"),v=(n("mSMe"),function e(t){var n=t.className,o=t.content,r=t.presentation,s=t.size,l=t.title,f=Object(a.useState)(!1),h=p()(f,2),v=h[0],O=h[1],y=r===e.Presentation.MODAL,g=s===e.Size.SMALL,b=i.a.createElement(u.m,{size:g?16:24});return i.a.createElement("span",{className:c()(n,"np-info",{"np-info__small":g,"np-info__large":!g})},y?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",onClick:function(){return O(!0)}},b),i.a.createElement(d.a,{body:o,onClose:function(){return O(!1)},open:v,title:l})):i.a.createElement(m.a,{content:o,preferredPlacement:m.a.Placement.BOTTOM_LEFT,title:l},b))});v.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},v.Size={SMALL:h.a.SMALL,LARGE:h.a.LARGE},v.defaultProps={className:null,content:null,presentation:v.Presentation.POPOVER,size:v.Size.SMALL,title:null};var O=v,y=n("0Q6q"),g=(n("rrw+"),{done:u.d,pending:u.o}),b=function(e){var t,n=e.action,o=e.as,r=e.className,s=e.content,l=e.description,u=void 0===l?s:l,f=e.help,p=e.icon,m=e.illustration,d=e.info,h=void 0===d?f:d,v=e.status,y=e.title,b=m;p&&(b=24===(null===p||void 0===p||null===(t=p.props)||void 0===t?void 0:t.size)?p:Object(a.cloneElement)(p,{size:24}));var E=v&&g[v];return i.a.createElement(o,{className:c()("np-summary d-flex align-items-start",r)},i.a.createElement("div",{className:"np-summary__icon"},b,v&&i.a.createElement(E,{size:16,filled:!0,className:"np-summary-icon__".concat(v)})),i.a.createElement("div",{className:"np-summary__body m-l-2"},i.a.createElement("div",{className:"np-summary__title d-flex"},i.a.createElement("strong",null,y),h&&i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{className:"m-l-1 hidden-xs",content:h.content,presentation:h.presentation,title:h.title}))),u&&i.a.createElement("div",{className:"np-summary__description"},u),n&&i.a.createElement("a",{href:n.href,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),h&&i.a.createElement(O,{className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:h.content,presentation:h.presentation,size:O.Size.LARGE,title:h.title}))};b.Status={DONE:y.a.DONE,PENDING:y.a.PENDING},b.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var E=b,w=n("Qi1R"),P=(i.a.createElement,{name:"Summary"}),N={meta:P};function S(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(o.a)({},N,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(s.a)("div",null,Object(s.a)(w.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Summary.Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Summary.Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:E,HomeIcon:u.n},mdxType:"LiveEditorBlock"}),Object(s.a)(w.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}S.isMDXComponent=!0},LxGA:function(e,t,n){},b1ss:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));n("1t7P"),n("LW0h"),n("jwue"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ");var o=n("VrFO"),r=n.n(o),a=n("Y9Ll"),i=n.n(a),s=n("1Pcy"),l=n.n(s),c=n("5Yy7"),u=n.n(c),f=n("N+ot"),p=n.n(f),m=n("AuHH"),d=n.n(m),h=n("KEM+"),v=n.n(h),O=n("ERkP"),y=n.n(O),g=n("O94r"),b=n.n(g),E=n("eKd8");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=E.b.TOP,N=E.b.RIGHT,S=E.b.BOTTOM,L=E.b.BOTTOM_RIGHT,k=E.b.BOTTOM_LEFT,j=E.b.LEFT,R=E.b.RIGHT_TOP,C=E.b.LEFT_TOP;function D(e,t){return e?function(e,t,n){var o=A(t,N,n),r=A(t,j,n);if(!o.overflowsRight&&!r.overflowsLeft)return e;if(o.overflowsRight&&r.overflowsLeft)return function(e,t){var n=A(e,S,t);return n.overflowsLeft&&!n.overflowsRight?L:n.overflowsRight&&!n.overflowsLeft?k:S}(t,n);if(o.overflowsRight){if(e===N)return j;if(e===R)return C;if(e===S||e===L)return k}if(r.overflowsLeft){if(e===j)return N;if(e===C)return R;if(e===S||e===k)return L}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function A(e,t,n){var o=function(e,t){return e?T(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:o.right>n.right,overflowsLeft:o.left<n.left}}function T(e,t,n){var o=e.offsetWidth,r=e.offsetHeight;return t===P?x({top:n.top-r,left:n.left+n.width/2-o/2},o):t===N?x({top:n.top+n.height/2-r/2,left:n.left+n.width},o):t===S?x({top:n.top+n.height,left:n.left+n.width/2-o/2},o):t===L?x({top:n.top+n.height,left:n.left+n.width/2-30},o):t===k?x({top:n.top+n.height,left:n.left+n.width/2-o+30},o):t===j?x({top:n.top+n.height/2-r/2,left:n.left-o},o):t===R?x({top:n.top+n.height/2-30,left:n.left+n.width},o):t===C?x({top:n.top+n.height/2-30,left:n.left-o},o):{}}function x(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?w(Object(t),!0).forEach((function(n){v()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var _=n("6gor"),z=n("XksX");n("LxGA");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function G(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?M(Object(t),!0).forEach((function(n){v()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}var I=function(e){function t(){var e;return r()(this,t),e=n.call(this),v()(l()(e),"closePopoverOnOutsideClick",(function(t){var n=e.popoverElement.contains(t.target),o=e.triggerElement.contains(t.target);n||o||e.close()})),v()(l()(e),"handleKeyUp",(function(t){"BUTTON"!==t.target.nodeName&&t.keyCode===_.a.ENTER&&e.toggle()})),v()(l()(e),"open",(function(){e.setState({isOpen:!0}),Object(z.a)(),document.addEventListener("click",e.closePopoverOnOutsideClick,!0)})),v()(l()(e),"close",(function(){e.setState({isOpen:!1}),Object(z.b)(),document.removeEventListener("click",e.closePopoverOnOutsideClick,!0)})),v()(l()(e),"toggle",(function(){return e.state.isOpen?e.close():e.open()})),v()(l()(e),"createTrigger",(function(){var t=e.props,n=t.children,o=t.containsFocusableElement,r=e.state.isOpen,a=function(e){return function(e){return"string"==typeof e.type}(e)?e:y.a.createElement("span",null,e)}(n);return Object(O.cloneElement)(a,G(G({},!o&&{tabIndex:0,role:"button","aria-expanded":r}),{},{"data-toggle":"popover",onClick:e.toggle,onKeyUp:e.handleKeyUp,ref:function(t){e.triggerElement=t}}))})),v()(l()(e),"style",(function(t){return e.props.classNames[t]||t})),e.state={isOpen:!1},e}u()(t,e);var n=H(t);return i()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.content,r=t.preferredPlacement,a=this.state.isOpen,i=this.createTrigger(),s=D(this.popoverElement,r),l=b()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),v()({},this.style("scale-down"),!a),this.style(s)),c=function(e,t){if(!e)return{};var n=e.previousElementSibling;return T(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,s),u=c.top,f=c.left;return y.a.createElement(y.a.Fragment,null,i,y.a.createElement("div",{className:l,ref:function(t){e.popoverElement=t},style:{top:u,left:f}},n&&y.a.createElement("h3",{className:b()(this.style("popover-title"))},n),y.a.createElement("p",{className:b()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof o?o({isOpen:a,close:this.close.bind(this)}):o)))}}]),t}(O.Component);v()(I,"Placement",E.b),I.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:I.Placement.RIGHT,classNames:{}}},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){document.body.classList.add("no-scroll")},r=function(){document.body.classList.remove("no-scroll")}},mSMe:function(e,t,n){},"rrw+":function(e,t,n){}}]);