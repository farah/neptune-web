(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"2lU4":function(e,t,n){},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh");var o,r=n("97Jx"),a=n.n(r),i=n("m3Bd"),l=n.n(i),s=n("VrFO"),c=n.n(s),u=n("Y9Ll"),f=n.n(u),p=n("1Pcy"),d=n.n(p),m=n("5Yy7"),h=n.n(m),v=n("N+ot"),O=n.n(v),y=n("AuHH"),b=n.n(y),E=n("KEM+"),g=n.n(E),w=n("ERkP"),P=n.n(w),L=n("O94r"),N=n.n(L),S=n("05Xt"),C=n("/Vl7"),k=n("6gor"),A=(n("2lU4"),n("bRoR")),R={SCROLLABLE:"scrollable",ADAPTIVE:"adaptive"},D=n("VehP"),j=n("P8nL");function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O()(this,n)}}var x=function(e){function t(){var e;c()(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),g()(d()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===k.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),g()(d()(e),"handleOnClick",(function(t){var n=e.props,o=n.onClose,r=n.closeOnClick;t.target===t.currentTarget&&o&&r&&o(t)})),g()(d()(e),"handleOnEnter",(function(){Object(A.a)()})),g()(d()(e),"handleOnClose",(function(){Object(A.b)()})),g()(d()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}h()(t,e);var n=T(t);return f()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(A.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.body,r=t.footer,i=t.onClose,s=t.className,c=t.open,u=(t.size,t.closeOnClick,t.container),f=l()(t,["title","body","footer","onClose","className","open","size","closeOnClick","container"]),p=this.checkSpecialClasses("compact"),d=this.checkSpecialClasses("no-divider");return P.a.createElement(j.a,{open:c,scrollable:u===R.ADAPTIVE},P.a.createElement(S.a,{appear:!0,in:c,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},P.a.createElement("div",a()({className:N()("tw-modal",{"tw-modal--adaptive":u===R.ADAPTIVE},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},f),P.a.createElement("div",{className:N()("tw-modal-dialog",g()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},P.a.createElement("div",{className:N()("tw-modal-content",{"tw-modal-compact":p,"tw-modal-no-title":!n})},P.a.createElement("div",{className:N()("tw-modal-header",{"modal--withoutborder":!n||d})},P.a.createElement("h4",{className:"tw-modal-title"},n),P.a.createElement("button",{type:"button",onClick:i,className:"close","aria-label":"close"},P.a.createElement(C.i,{size:24}))),P.a.createElement("div",{className:"tw-modal-body"},o),r&&P.a.createElement("div",{className:N()("tw-modal-footer",{"modal--withoutborder":d})},r))))))}}]),t}(w.Component);g()(x,"Size",D.a),g()(x,"Container",(o={},g()(o,R.ADAPTIVE.toUpperCase(),R.ADAPTIVE),g()(o,R.SCROLLABLE.toUpperCase(),R.SCROLLABLE),o)),x.defaultProps={title:null,footer:null,size:x.Size.MEDIUM,className:"",closeOnClick:!0,container:x.Container.SCROLLABLE};t.a=x},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return N})),n.d(t,"default",(function(){return C}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),i=n.n(a),l=n("ZVZ0"),s=(n("1t7P"),n("jQ/y"),n("O94r")),c=n.n(s),u=n("/Vl7"),f=(n("j+zR"),n("97Jx")),p=n.n(f),d=n("ddV6"),m=n.n(d),h=n("b1ss"),v=n("GAp3"),O=n("VehP"),y=(n("mSMe"),function e(t){var n=t.className,o=t.content,r=t.presentation,l=t.size,s=t.title,f=Object(a.useState)(!1),d=m()(f,2),O=d[0],y=d[1],b=r===e.Presentation.MODAL,E=l===e.Size.SMALL,g={"aria-label":t["aria-label"],className:"btn-unstyled",children:i.a.createElement(u.n,{size:E?16:24})};return i.a.createElement("span",{className:c()(n,"np-info",{"np-info__small":E,"np-info__large":!E})},b?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",p()({type:"button",onClick:function(){return y(!0)}},g)),i.a.createElement(v.a,{body:o,onClose:function(){return y(!1)},open:O,title:s})):i.a.createElement(h.a,{content:o,preferredPlacement:h.a.Placement.BOTTOM_LEFT,title:s},i.a.createElement("button",p()({type:"button"},g))))});y.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},y.Size={SMALL:O.a.SMALL,LARGE:O.a.LARGE},y.defaultProps={"aria-label":void 0,className:void 0,content:void 0,presentation:y.Presentation.POPOVER,size:y.Size.SMALL,title:void 0};var b=y,E=n("0Q6q"),g=(n("rrw+"),{done:u.e,pending:u.q}),w=function(e){var t,n=e.action,o=e.as,r=e.className,l=e.content,s=e.description,u=void 0===s?l:s,f=e.help,p=e.icon,d=e.illustration,m=e.info,h=void 0===m?f:m,v=e.status,O=e.title,y=d;p&&(y=24===(null===p||void 0===p||null===(t=p.props)||void 0===t?void 0:t.size)?p:Object(a.cloneElement)(p,{size:24}));var E=v&&g[v];return i.a.createElement(o,{className:c()("np-summary d-flex align-items-start",r)},i.a.createElement("div",{className:"np-summary__icon"},y,v&&i.a.createElement(E,{size:16,filled:!0,className:"np-summary-icon__".concat(v)})),i.a.createElement("div",{className:"np-summary__body m-l-2"},i.a.createElement("div",{className:"np-summary__title d-flex"},i.a.createElement("strong",null,O),h&&i.a.createElement(b,{"aria-label":h["aria-label"],className:"m-l-1 hidden-xs",content:h.content,presentation:h.presentation,title:h.title})),u&&i.a.createElement("div",{className:"np-summary__description"},u),n&&i.a.createElement("a",{href:n.href,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),h&&i.a.createElement(b,{"aria-label":h["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:h.content,presentation:h.presentation,size:b.Size.LARGE,title:h.title}))};w.Status={DONE:E.a.DONE,PENDING:E.a.PENDING},w.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var P=w,L=n("Qi1R"),N=(i.a.createElement,{name:"Summary"}),S={meta:N};function C(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(o.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(l.a)("div",null,Object(l.a)(L.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Summary.Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Summary.Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:P,HomeIcon:u.o},mdxType:"LiveEditorBlock"}),Object(l.a)(L.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}C.isMDXComponent=!0},LxGA:function(e,t,n){},b1ss:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));n("1t7P"),n("LW0h"),n("jwue"),n("daRM"),n("FtHn"),n("+KXO"),n("7x/C"),n("OZaJ"),n("DZ+c"),n("+oxZ");var o=n("VrFO"),r=n.n(o),a=n("Y9Ll"),i=n.n(a),l=n("1Pcy"),s=n.n(l),c=n("5Yy7"),u=n.n(c),f=n("N+ot"),p=n.n(f),d=n("AuHH"),m=n.n(d),h=n("KEM+"),v=n.n(h),O=n("ERkP"),y=n.n(O),b=n("O94r"),E=n.n(b),g=n("eKd8");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=g.a.TOP,L=g.a.RIGHT,N=g.a.BOTTOM,S=g.a.BOTTOM_RIGHT,C=g.a.BOTTOM_LEFT,k=g.a.LEFT,A=g.a.RIGHT_TOP,R=g.a.LEFT_TOP;function D(e,t){return e?function(e,t,n){var o=j(t,L,n),r=j(t,k,n);if(!o.overflowsRight&&!r.overflowsLeft)return e;if(o.overflowsRight&&r.overflowsLeft)return function(e,t){var n=j(e,N,t);return n.overflowsLeft&&!n.overflowsRight?S:n.overflowsRight&&!n.overflowsLeft?C:N}(t,n);if(o.overflowsRight){if(e===L)return k;if(e===A)return R;if(e===N||e===S)return C}if(r.overflowsLeft){if(e===k)return L;if(e===R)return A;if(e===N||e===C)return S}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function j(e,t,n){var o=function(e,t){return e?T(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:o.right>n.right,overflowsLeft:o.left<n.left}}function T(e,t,n){var o=e.offsetWidth,r=e.offsetHeight;return t===P?x({top:n.top-r,left:n.left+n.width/2-o/2},o):t===L?x({top:n.top+n.height/2-r/2,left:n.left+n.width},o):t===N?x({top:n.top+n.height,left:n.left+n.width/2-o/2},o):t===S?x({top:n.top+n.height,left:n.left+n.width/2-30},o):t===C?x({top:n.top+n.height,left:n.left+n.width/2-o+30},o):t===k?x({top:n.top+n.height/2-r/2,left:n.left-o},o):t===A?x({top:n.top+n.height/2-30,left:n.left+n.width},o):t===R?x({top:n.top+n.height/2-30,left:n.left-o},o):{}}function x(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?w(Object(t),!0).forEach((function(n){v()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var _=n("6gor"),z=n("XksX");n("LxGA");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function I(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?M(Object(t),!0).forEach((function(n){v()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}var V=function(e){function t(){var e;return r()(this,t),e=n.call(this),v()(s()(e),"closePopoverOnOutsideClick",(function(t){var n=e.popoverElement.contains(t.target),o=e.triggerElement.contains(t.target);n||o||e.close()})),v()(s()(e),"handleKeyUp",(function(t){"BUTTON"!==t.target.nodeName&&t.keyCode===_.a.ENTER&&e.toggle()})),v()(s()(e),"open",(function(){e.setState({isOpen:!0}),Object(z.a)(),document.addEventListener("click",e.closePopoverOnOutsideClick,!0)})),v()(s()(e),"close",(function(){e.setState({isOpen:!1}),Object(z.b)(),document.removeEventListener("click",e.closePopoverOnOutsideClick,!0)})),v()(s()(e),"toggle",(function(){return e.state.isOpen?e.close():e.open()})),v()(s()(e),"createTrigger",(function(){var t=e.props,n=t.children,o=t.containsFocusableElement,r=e.state.isOpen,a=function(e){return function(e){return"string"==typeof e.type}(e)?e:y.a.createElement("span",null,e)}(n);return Object(O.cloneElement)(a,I(I({},!o&&{tabIndex:0,role:"button","aria-expanded":r}),{},{"data-toggle":"popover",onClick:e.toggle,onKeyUp:e.handleKeyUp,ref:function(t){e.triggerElement=t}}))})),v()(s()(e),"style",(function(t){return e.props.classNames[t]||t})),e.state={isOpen:!1},e}u()(t,e);var n=G(t);return i()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.content,r=t.preferredPlacement,a=this.state.isOpen,i=this.createTrigger(),l=D(this.popoverElement,r),s=E()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),v()({},this.style("scale-down"),!a),this.style(l)),c=function(e,t){if(!e)return{};var n=e.previousElementSibling;return T(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,l),u=c.top,f=c.left;return y.a.createElement(y.a.Fragment,null,i,y.a.createElement("div",{className:s,ref:function(t){e.popoverElement=t},style:{top:u,left:f}},n&&y.a.createElement("h3",{className:E()(this.style("popover-title"))},n),y.a.createElement("p",{className:E()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof o?o({isOpen:a,close:this.close.bind(this)}):o)))}}]),t}(O.Component);v()(V,"Placement",g.a),V.defaultProps={title:null,containsFocusableElement:!1,preferredPlacement:V.Placement.RIGHT,classNames:{}}},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){document.body.classList.add("no-scroll")},r=function(){document.body.classList.remove("no-scroll")}},mSMe:function(e,t,n){},"rrw+":function(e,t,n){}}]);