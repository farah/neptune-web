_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"2G9S":function(e,t,r){"use strict";var n=r("ax0f"),a=r("ct80"),o=r("xt6W"),i=r("dSaG"),s=r("N9G2"),c=r("tJVe"),l=r("2sZ7"),u=r("aoZ+"),p=r("GJtw"),d=r("fVMg"),f=r("T+0C"),m=d("isConcatSpreadable"),b=f>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),O=p("concat"),h=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)};n({target:"Array",proto:!0,forced:!b||!O},{concat:function(e){var t,r,n,a,o,i=s(this),p=u(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(h(o=-1===t?i:arguments[t])){if(d+(a=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<a;r++,d++)r in o&&l(p,d,o[r])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(p,d++,o)}return p.length=d,p}})},"2sZ7":function(e,t,r){"use strict";var n=r("CD8Q"),a=r("q9+l"),o=r("lhjL");e.exports=function(e,t,r){var i=n(t);i in e?a.f(e,i,o(0,r)):e[i]=r}},"3g/d":function(e,t,r){"use strict";r("2G9S"),r("vrRf"),r("1IsZ");var n=r("KEM+"),a=r.n(n),o=r("ERkP"),i=r.n(o),s=r("O94r"),c=r.n(s),l=(r("j+zR"),r("/Vl7")),u=r("PFiD"),p=r("VehP"),d=r("Ohp4"),f=r("97Jx"),m=r.n(f),b={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"};var O,h,y=function(e,t){var r=function(r){var n=c()(r.className,function(e){if(e){var t=["arrow"];switch(e){case b.BOTTOM:return t.concat("arrow-bottom","arrow-center");case b.BOTTOM_LEFT:return t.concat("arrow-bottom","arrow-left");case b.BOTTOM_RIGHT:return t.concat("arrow-bottom","arrow-right");case b.TOP:return t.concat("arrow-center");case b.TOP_RIGHT:return t.concat("arrow-right");case b.TOP_LEFT:default:return t}}return null}(t));return i.a.createElement(e,m()({},r,{className:n}))};return r.defaultProps={arrow:null,className:""},r},v=r("UTRh"),E=r("UlFz"),T=[E.a.EMPH,E.a.STRONG,E.a.TEXT],w=function(e){return i.a.createElement(v.a,m()({},e,{as:"span",allowList:T,blockList:void 0}))},j=(r("TP9f"),function(e){var t=e.action,r=e.className,n=e.onDismiss,a=e.message,o=e.type,s=e.arrow,p=e.children;!function(e){var t=e.arrow,r=e.children,n=e.dismissible,a=e.size,o=e.type;t&&console.warn("Alert has deprecated the `arrow` prop. Please update your usage to remove it."),n&&console.warn("Alert has deprecated the use of `dismissible`. The Alert will be considered dismissible if you provide an `onDismiss` hander."),r&&console.warn("Alert has deprecated the use of `children`. Please use the `message` prop instead."),a&&console.warn("Alert no longer recognises the prop `size`. Please update your usage to remove it."),0<=[u.a.INFO,u.a.ERROR,u.a.SUCCESS].indexOf(o)&&console.warn("Alert has deprecated the ".concat(o," value for the `type` prop. Please update to ").concat(x[o],"."))}({arrow:s,children:p,dismissible:e.dismissible,size:e.size,type:o});var f=A[o]||o,m=i.a.createElement("div",{role:"alert",className:c()("alert-detach np-alert d-flex","np-".concat(f),r)},function(e){return e===u.a.POSITIVE?i.a.createElement(l.e,{size:24}):e===u.a.NEUTRAL?i.a.createElement(l.q,{size:24}):e===u.a.WARNING?i.a.createElement(l.a,{size:24}):e===u.a.NEGATIVE?i.a.createElement(l.j,{size:24}):null}(f),i.a.createElement("div",{className:"p-l-2"},p&&i.a.createElement("div",null,p)||i.a.createElement(w,{className:"d-inline-block"},a),t&&i.a.createElement("a",{href:t.href,className:"m-t-1 d-inline-block"},t.text)),n&&i.a.createElement(d.a,{onClick:n,size:16,className:"m-l-2"}));return s?y(m):m}),A=(O={},a()(O,u.a.SUCCESS,u.a.POSITIVE),a()(O,u.a.INFO,u.a.NEUTRAL),a()(O,u.a.ERROR,u.a.NEGATIVE),O);var x=(h={},a()(h,u.a.SUCCESS,"Alert.Type.POSITIVE"),a()(h,u.a.INFO,"Alert.Type.NEUTRAL"),a()(h,u.a.ERROR,"Alert.Type.NEGATIVE"),h);j.Size={SMALL:p.a.SMALL,LARGE:p.a.LARGE},j.Type=u.a,j.ArrowPosition=b,j.defaultProps={action:null,arrow:null,className:"",dismissible:!1,size:null,type:j.Type.INFO};t.a=j},"56Cj":function(e,t,r){var n=r("ct80");e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},"97Jx":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},DEeE:function(e,t,r){var n=r("yRya"),a=r("sX5C");e.exports=Object.keys||function(e){return n(e,a)}},GJtw:function(e,t,r){var n=r("ct80"),a=r("fVMg"),o=r("T+0C"),i=a("species");e.exports=function(e){return o>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HbAC:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Alert",function(){return r("cZ+Q")}])},"KEM+":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},N9G2:function(e,t,r){var n=r("cww3");e.exports=function(e){return Object(n(e))}},O94r:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},Ohp4:function(e,t,r){"use strict";var n=r("ERkP"),a=r.n(n),o=r("O94r"),i=r.n(o),s=r("/Vl7"),c=(r("ryiH"),function(e){var t=e.onClick,r=e.className,n=e.size;return a.a.createElement("button",{type:"button",className:i()("np-close-button",r),"aria-label":"Close",onClick:t},a.a.createElement(s.i,{size:n}))});c.defaultProps={className:null,size:(c.Size={SMALL:16,LARGE:24}).LARGE},t.a=c},PFiD:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={NEGATIVE:"negative",NEUTRAL:"neutral",POSITIVE:"positive",WARNING:"warning",INFO:"info",ERROR:"error",SUCCESS:"success"}},"T+0C":function(e,t,r){var n,a,o=r("9JhN"),i=r("ZORK"),s=o.process,c=s&&s.versions,l=c&&c.v8;l?a=(n=l.split("."))[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(a=n[1]),e.exports=a&&+a},TP9f:function(e,t,r){},TbR9:function(e,t,r){var n=r("56Cj");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},VehP:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},ZORK:function(e,t,r){var n=r("VCi3");e.exports=n("navigator","userAgent")||""},"aoZ+":function(e,t,r){var n=r("dSaG"),a=r("xt6W"),o=r("fVMg")("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"cZ+Q":function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r("cxan"),a=r("HbGN"),o=r("ERkP"),i=r.n(o),s=r("ZVZ0"),c=r("Qi1R"),l=r("3g/d"),u=(i.a.createElement,{name:"Alert"}),p={meta:u};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.a)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"Use Alert for contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(s.a)(c.b,{code:"() => {\n  const [dismissed, setDismissed] = React.useState(false);\n  return dismissed ? null : (\n    <Alert\n      dismissible\n      size={Alert.Size.SMALL}\n      arrow={Alert.ArrowPosition.TOP_LEFT}\n      type={Alert.Type.WARNING}\n      onDismiss={() => setDismissed(true)}\n    >\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\n      been the industry's standard dummy text ever since the 1500s when an unknown printer\n    </Alert>\n  );\n};\n",scope:{Alert:l.a},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Alert",mdxType:"GeneratePropsTable"}),Object(s.a)("h2",{id:"types"},"Types"),Object(s.a)("table",{className:"docs-table table table-condensed"},Object(s.a)("thead",null,Object(s.a)("tr",null,Object(s.a)("th",null,"Name"),Object(s.a)("th",null,"Preview"))),Object(s.a)("tbody",null,Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},"Default"),Object(s.a)("td",null,Object(s.a)(l.a,{size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},"Warning"),Object(s.a)("td",null,Object(s.a)(l.a,{type:"warning",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},"Success"),Object(s.a)("td",null,Object(s.a)(l.a,{type:"success",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},"Error"),Object(s.a)("td",null,Object(s.a)(l.a,{type:"error",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))))),Object(s.a)("h2",{id:"content-options"},"Content options"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"<Alert />")," component accepts anything that can be rendered: numbers, strings, elements or an array (or ",Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/fragments.html"}),"fragment"),") containing these types."),Object(s.a)("table",{className:"table docs-table table-condensed"},Object(s.a)("thead",null,Object(s.a)("tr",null,Object(s.a)("th",null,"Description"),Object(s.a)("th",null,"Preview"))),Object(s.a)("tbody",null,Object(s.a)("tr",null,Object(s.a)("td",null,"Example of message with list items"),Object(s.a)("td",null,Object(s.a)(l.a,{size:"sm",type:"error",arrow:"up-center",mdxType:"Alert"},Object(s.a)("div",null,"Number is required"),Object(s.a)("div",null,"Must be 10 or greater"),Object(s.a)("div",null,"Must be 99 or less")))),Object(s.a)("tr",null,Object(s.a)("td",null,"Example of message with bold text and link"),Object(s.a)("td",null,Object(s.a)(l.a,{size:"sm",mdxType:"Alert"},Object(s.a)("b",null,"Lorem")," ipsum dolor sit amet, consectetur"," ",Object(s.a)("a",{href:"https://transferwise.com/help"},"adipisicing elit"),"."))))))}d.isMDXComponent=!0},f4p7:function(e,t,r){"use strict";var n=r("ct80");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},fVMg:function(e,t,r){var n=r("9JhN"),a=r("TN3B"),o=r("8aeu"),i=r("HYrn"),s=r("56Cj"),c=r("TbR9"),l=a("wks"),u=n.Symbol,p=c?u:u&&u.withoutSetter||i;e.exports=function(e){return o(l,e)||(s&&o(u,e)?l[e]=u[e]:l[e]=p("Symbol."+e)),l[e]}},"j+zR":function(e,t){e.exports=function(e,t){return function(r,n,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=t(r)?e.isRequired:e;return o.apply(this,arguments)}}},ryiH:function(e,t,r){},vrRf:function(e,t,r){"use strict";var n=r("ax0f"),a=r("H17f").indexOf,o=r("f4p7"),i=r("znGZ"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(e){return c?s.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},xt6W:function(e,t,r){var n=r("amH4");e.exports=Array.isArray||function(e){return"Array"==n(e)}},znGZ:function(e,t,r){var n=r("1Mu/"),a=r("ct80"),o=r("8aeu"),i=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,t){if(o(s,e))return s[e];t||(t={});var r=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:c,p=o(t,1)?t[1]:void 0;return s[e]=!!r&&!a((function(){if(l&&!n)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,u,p)}))}}},[["HbAC",0,1,2,6,3,5,11,4]]]);