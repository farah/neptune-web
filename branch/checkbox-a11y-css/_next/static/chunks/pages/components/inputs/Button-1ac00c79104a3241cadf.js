_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"91IA":function(t,e,n){},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},"B/vg":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Button",function(){return n("gqKJ")}])},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}},O94r:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&t.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&t.push(i)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},SP0Y:function(t,e,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),c=n.n(o),i=n("ERkP"),l=n.n(i),u=n("O94r"),s=n.n(u),p=(n("j+zR"),n("s+Iv")),d=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),b=n("VehP"),f=function(t){var e=t.className,n=t.block,a=t.children,o=t.disabled,i=t.htmlType,u=t.loading,f=t.size,y=t.type,O=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),m=s()("btn btn-".concat(f),"np-btn np-btn-".concat(f),{"btn-loading":u,"btn-primary":y===d.PRIMARY,"btn-success":y===d.PAY,"btn-default":y===d.SECONDARY,"btn-danger":y===d.DANGER,"btn-link":y===d.LINK,"btn-block np-btn-block":n},e);return Object(p.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",f===b.a.EXTRA_SMALL),l.a.createElement("button",r()({type:i,className:m,disabled:o||u},O),a,u&&l.a.createElement("span",{className:s()("btn-loader",{"m-l-2":!n})}))};f.Type=d,f.Size={EXTRA_SMALL:b.a.EXTRA_SMALL,SMALL:b.a.SMALL,MEDIUM:b.a.MEDIUM,LARGE:b.a.LARGE},f.defaultProps={className:null,size:f.Size.MEDIUM,type:f.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=f},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},f4p7:function(t,e,n){"use strict";var a=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},gqKJ:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return s})),n.d(e,"default",(function(){return d}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),c=n.n(o),i=n("ZVZ0"),l=n("Qi1R"),u=n("SP0Y"),s=(c.a.createElement,{name:"Button"}),p={meta:s};function d(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Simple wrapper component for all button types and their states."),Object(i.a)(l.b,{code:"<Button\n  size={Button.Size.MEDIUM}\n  type={Button.Type.PRIMARY}\n  block={false}\n  className={''}\n  onClick={() => alert('clicked')}\n>\n  Continue\n</Button>;\n",scope:{Button:u.a},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"Button",mdxType:"GeneratePropsTable"}),Object(i.a)("h2",{id:"types"},"Types"),Object(i.a)("div",{className:"scroll-table"},Object(i.a)("table",{className:"docs-table table "},Object(i.a)("thead",null,Object(i.a)("tr",null,Object(i.a)("th",null,"Name"),Object(i.a)("th",null,"Preview"))),Object(i.a)("tbody",null,Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Primary"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"primary",block:!0,mdxType:"Button"},"Continue"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Pay"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"pay",block:!0,mdxType:"Button"},"Send money"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Secondary"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"secondary",block:!0,mdxType:"Button"},"Manage my card")))," ",Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Danger"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"danger",block:!0,mdxType:"Button"},"Delete recipient"))),Object(i.a)("tr",null,Object(i.a)("th",{scope:"row"},"Link"),Object(i.a)("td",null,Object(i.a)(u.a,{size:"md",type:"link",block:!0,mdxType:"Button"},"Get help")))))))}d.isMDXComponent=!0},"j+zR":function(t,e){t.exports=function(t,e){return function(n,a,r){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var o=e(n)?t.isRequired:t;return o.apply(this,arguments)}}},m3Bd:function(t,e,n){var a=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,r,o=a(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},"s+Iv":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));n("vrRf");function a(e){var n,a;0<=["development","test"].indexOf(null===(n=t)||void 0===n||null===(a=n.env)||void 0===a?void 0:"production")&&console.warn(e)}function r(t,e){e&&a(t)}}).call(this,n("F63i"))},vrRf:function(t,e,n){"use strict";var a=n("ax0f"),r=n("H17f").indexOf,o=n("f4p7"),c=n("znGZ"),i=[].indexOf,l=!!i&&1/[1].indexOf(1,-0)<0,u=o("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!u||!s},{indexOf:function(t){return l?i.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["B/vg",0,1,2,3,5,4]]]);