_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"/4xM":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/Modal",function(){return n("LR2r")}])},"05Xt":function(e,t,n){"use strict";var r=n("cxan"),o=n("+wNj"),a=n("BFfR");n("aWzz");function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n("ERkP"),c=n.n(s),l=n("sypB"),u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"===typeof n.className?n.className=i(n.className,r):n.setAttribute("class",i(n.className&&n.className.baseVal||"",r)));var n,r}))},p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1];t.removeClasses(o,"exit"),t.addClass(o,a?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1]?"appear":"enter";t.addClass(o,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1]?"appear":"enter";t.removeClasses(o,a),t.addClass(o,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"===typeof n,o=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}Object(a.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,a=n.done;this.appliedClasses[t]={},r&&u(e,r),o&&u(e,o),a&&u(e,a)},n.render=function(){var e=this.props,t=(e.classNames,Object(o.a)(e,["classNames"]));return c.a.createElement(l.a,Object(r.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(c.a.Component);p.defaultProps={classNames:""},p.propTypes={};t.a=p},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),i=n("dSaG"),s=n("N9G2"),c=n("tJVe"),l=n("2sZ7"),u=n("aoZ+"),p=n("GJtw"),f=n("fVMg"),d=n("T+0C"),m=f("isConcatSpreadable"),v=d>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=p("concat"),h=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)};r({target:"Array",proto:!0,forced:!v||!y},{concat:function(e){var t,n,r,o,a,i=s(this),p=u(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(h(a=-1===t?i:arguments[t])){if(f+(o=c(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,f++)n in a&&l(p,f,a[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(p,f++,a)}return p.length=f,p}})},"2lU4":function(e,t,n){},"5Yy7":function(e,t,n){var r=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"695J":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7yHk":function(e,t,n){},"91IA":function(e,t,n){},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"99fE":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n.n(a),s=n("7nmT");t.a=function(e){return function(t){var n=Object(a.useState)(!1),r=o()(n,2),c=r[0],l=r[1];return Object(a.useEffect)((function(){l(!0)}),[l]),c?Object(s.createPortal)(i.a.createElement(e,t),document.body):null}}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},LR2r:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return V})),n.d(t,"default",(function(){return J}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),s=n("ZVZ0"),c=n("Qi1R"),l=(n("2G9S"),n("vrRf"),n("7x/C"),n("OZaJ"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("97Jx")),u=n.n(l),p=n("m3Bd"),f=n.n(p),d=n("VrFO"),m=n.n(d),v=n("Y9Ll"),y=n.n(v),h=n("1Pcy"),E=n.n(h),b=n("5Yy7"),g=n.n(b),x=n("N+ot"),O=n.n(x),C=n("AuHH"),w=n.n(C),N=n("KEM+"),A=n.n(N),k=n("O94r"),S=n.n(k),R=n("05Xt"),P=n("/Vl7"),j=n("6gor"),M=(n("2lU4"),n("bRoR")),L=n("VehP"),T=n("P8nL");function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w()(e);if(t){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var z=function(e){function t(){var e;m()(this,t);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),A()(E()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===j.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),A()(E()(e),"handleOnClick",(function(t){var n=e.props,r=n.onClose,o=n.closeOnClick;t.target===t.currentTarget&&r&&o&&r(t)})),A()(E()(e),"handleOnEnter",(function(){Object(M.a)()})),A()(E()(e),"handleOnClose",(function(){Object(M.b)()})),A()(E()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}g()(t,e);var n=I(t);return y()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(M.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.body,o=t.footer,a=t.onClose,s=t.className,c=t.open,l=(t.size,t.closeOnClick,f()(t,["title","body","footer","onClose","className","open","size","closeOnClick"])),p=this.checkSpecialClasses("compact"),d=this.checkSpecialClasses("no-divider");return i.a.createElement(T.a,{open:c},i.a.createElement(R.a,{appear:!0,in:c,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},i.a.createElement("div",u()({className:"tw-modal fade ".concat(s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},l),i.a.createElement("div",{className:S()("tw-modal-dialog",A()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},i.a.createElement("div",{className:S()("tw-modal-content",{"tw-modal-compact":p,"tw-modal-no-title":!n})},i.a.createElement("div",{className:S()("tw-modal-header",{"modal--withoutborder":!n||d})},i.a.createElement("h4",{className:"tw-modal-title"},n),i.a.createElement("button",{type:"button",onClick:a,className:"close","aria-label":"close"},i.a.createElement(P.h,{size:24}))),i.a.createElement("div",{className:"tw-modal-body"},r),o&&i.a.createElement("div",{className:S()("tw-modal-footer",{"modal--withoutborder":d})},o))))))}}]),t}(a.Component);A()(z,"Size",L.a),z.defaultProps={title:null,footer:null,size:z.Size.MEDIUM,className:"",closeOnClick:!0};var D=z,_=n("SP0Y"),V=(i.a.createElement,{name:"Modal"}),G={meta:V};function J(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},G,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(c.b,{code:'() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Open Modal</Button>\n      <Modal\n        body="Lorem Ipsum is simply dummy text of the printing 1500s, when an"\n        open={open}\n        onClose={() => setOpen(false)}\n        size={Modal.Size.MEDIUM}\n        title="title"\n        className=""\n        footer={\n          <Button block onClick={() => alert(\'clicked\')}>\n            Action\n          </Button>\n        }\n        closeOnClick\n      />\n    </>\n  );\n};\n',scope:{Modal:D,Button:_.a},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Modal",mdxType:"GeneratePropsTable"}))}J.isMDXComponent=!0},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"N+ot":function(e,t,n){var r=n("T0aG"),o=n("1Pcy");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},OZaJ:function(e,t,n){var r=n("ax0f"),o=n("VCi3"),a=n("hpdy"),i=n("FXyv"),s=n("dSaG"),c=n("guiJ"),l=n("zh11"),u=n("ct80"),p=o("Reflect","construct"),f=u((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),d=!u((function(){p((function(){}))})),m=f||d;r({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(e,t){a(e),i(t);var n=arguments.length<3?e:a(arguments[2]);if(d&&!f)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var o=n.prototype,u=c(s(o)?o:Object.prototype),m=Function.apply.call(e,u,t);return s(m)?m:u}})},P8nL:function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),s=n("05Xt"),c=n("99fE"),l=(n("7yHk"),n("6gor")),u=function(e){var t=e.open,n=e.children,a=e.onClose,c=e.fadeContentOnExit,u=e.fadeContentOnEnter;Object(r.useEffect)((function(){return function(){return d()}}),[]);var p=function(e){e&&(e.keyCode===l.a.ESCAPE||"Escape"===e.key)&&f(e)},f=function(e){d(),a&&a(e)},d=function(){document.removeEventListener("keydown",p)};return o.a.createElement(s.a,{in:t,appear:!0,timeout:{enter:0,exit:350},onEnter:function(){document.addEventListener("keydown",p)},onExited:f,classNames:{enter:i()({"dimmer--enter-fade":u}),enterDone:i()("dimmer--enter-done",{"dimmer--enter-fade":u}),exit:i()("dimmer--exit",{"dimmer--exit-fade":c})},unmountOnExit:!0},o.a.createElement("div",{role:"presentation",className:"dimmer",onClick:function(e){e.target===e.currentTarget&&f(e)}},n))};u.defaultProps={open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1},t.a=Object(c.a)(u)},Qzre:function(e,t,n){var r=n("FXyv"),o=n("hpdy"),a=n("fVMg")("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[a])?t:o(n)}},SP0Y:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=n("m3Bd"),i=n.n(a),s=n("ERkP"),c=n.n(s),l=n("O94r"),u=n.n(l),p=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=n("VehP"),d=function(e){var t=e.className,n=e.block,r=e.children,a=e.disabled,s=e.htmlType,l=e.loading,d=e.size,m=e.type,v=i()(e,["className","block","children","disabled","htmlType","loading","size","type"]),y=u()("btn btn-".concat(d),"tw-btn tw-btn-".concat(d),{"btn-loading":l,"btn-primary":m===p.PRIMARY,"btn-success":m===p.PAY,"btn-default":m===p.SECONDARY,"btn-danger":m===p.DANGER,"btn-link":m===p.LINK,"btn-block tw-btn-block":n},t);return f.a.EXTRA_SMALL,c.a.createElement("button",o()({type:s,className:y,disabled:a||l},v),r,l&&c.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};d.Type=p,d.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},d.defaultProps={className:null,size:d.Size.MEDIUM,type:d.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=d},T0aG:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),o=n("jl0/"),a=n("FXyv"),i=n("cww3"),s=n("Qzre"),c=n("4/YM"),l=n("tJVe"),u=n("34wW"),p=n("QsUS"),f=n("ct80"),d=[].push,m=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,a);for(var s,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,f+"g");(s=p.call(v,r))&&!((c=v.lastIndex)>m&&(u.push(r.slice(m,s.index)),s.length>1&&s.index<r.length&&d.apply(u,s.slice(1)),l=s[0].length,m=c,u.length>=a));)v.lastIndex===s.index&&v.lastIndex++;return m===r.length?!l&&v.test("")||u.push(""):u.push(r.slice(m)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,o,n):r.call(String(o),t,n)},function(e,o){var i=n(r,e,this,o,r!==t);if(i.done)return i.value;var p=a(e),f=String(this),d=s(p,RegExp),y=p.unicode,h=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),E=new d(v?p:"^(?:"+p.source+")",h),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===f.length)return null===u(E,f)?[f]:[];for(var g=0,x=0,O=[];x<f.length;){E.lastIndex=v?x:0;var C,w=u(E,v?f:f.slice(x));if(null===w||(C=m(l(E.lastIndex+(v?0:x)),f.length))===g)x=c(f,x,y);else{if(O.push(f.slice(g,x)),O.length===b)return O;for(var N=1;N<=w.length-1;N++)if(O.push(w[N]),O.length===b)return O;x=g=C}}return O.push(f.slice(g)),O}]}),!v)},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){document.body.classList.add("no-scroll")},o=function(){document.body.classList.remove("no-scroll")}},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=t(n)?e.isRequired:e;return a.apply(this,arguments)}}},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},vrRf:function(e,t,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,a=n("f4p7"),i=n("znGZ"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(e){return c?s.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},zh11:function(e,t,n){"use strict";var r=n("hpdy"),o=n("dSaG"),a=[].slice,i={},s=function(e,t,n){if(!(t in i)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";i[t]=Function("C,a","return new C("+r.join(",")+")")}return i[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=a.call(arguments,1),i=function(){var r=n.concat(a.call(arguments));return this instanceof i?s(t,r.length,r):t.apply(e,r)};return o(t.prototype)&&(i.prototype=t.prototype),i}}},[["/4xM",0,1,2,5,3,4,6,7]]]);