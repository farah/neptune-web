_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[92],{"91IA":function(n,e,t){},"97Jx":function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},t.apply(this,arguments)}n.exports=t},I5Kg:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return f})),t.d(e,"default",(function(){return y}));var i=t("cxan"),o=t("HbGN"),r=t("ERkP"),a=t.n(r),l=t("ZVZ0"),c=t("Qi1R"),s=t("sob3"),u=function(n){var e=n.open,t=n.position,i=n.children;return a.a.createElement(s.a,{open:e,position:t,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},i)};u.defaultProps={open:!0,position:"bottom",children:null};var p=u,d=t("SP0Y"),f=(a.a.createElement,{name:"Sticky"}),b={meta:f};function y(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(l.a)("wrapper",Object(i.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(l.a)("p",null,"This component is used inside other components, such as Drawer. Please do not use it directly."),Object(l.a)("div",null,Object(l.a)(c.b,{code:"() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",scope:{Sticky:p,Button:d.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})))}y.isMDXComponent=!0},LdEA:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}},SP0Y:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),r=t("m3Bd"),a=t.n(r),l=t("ERkP"),c=t.n(l),s=t("O94r"),u=t.n(s),p=(t("j+zR"),t("s+Iv")),d=(t("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=t("VehP"),b=function(n){var e=n.className,t=n.block,i=n.children,r=n.disabled,l=n.htmlType,s=n.loading,b=n.size,y=n.type,m=a()(n,["className","block","children","disabled","htmlType","loading","size","type"]),v=u()("btn btn-".concat(b),"np-btn np-btn-".concat(b),{"btn-loading":s,"btn-primary":y===d.PRIMARY,"btn-success":y===d.PAY,"btn-default":y===d.SECONDARY,"btn-danger":y===d.DANGER,"btn-link":y===d.LINK,"btn-block np-btn-block":t},e);return Object(p.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",b===f.a.EXTRA_SMALL),c.a.createElement("button",o()({type:l,className:v,disabled:r||s},m),i,s&&c.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!t})}))};b.Type=d,b.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},b.defaultProps={className:null,size:b.Size.MEDIUM,type:b.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=b},f4p7:function(n,e,t){"use strict";var i=t("ct80");n.exports=function(n,e){var t=[][n];return!!t&&i((function(){t.call(null,e||function(){throw 1},1)}))}},"j+zR":function(n,e){n.exports=function(n,e){return function(t,i,o){if("function"!==typeof n)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var r=e(t)?n.isRequired:n;return r.apply(this,arguments)}}},m3Bd:function(n,e,t){var i=t("LdEA");n.exports=function(n,e){if(null==n)return{};var t,o,r=i(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}},"s+Iv":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));t("vrRf");function i(e){var t,i;0<=["development","test"].indexOf(null===(t=n)||void 0===t||null===(i=t.env)||void 0===i?void 0:"production")&&console.warn(e)}function o(n,e){e&&i(n)}}).call(this,t("F63i"))},sob3:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),r=t("m3Bd"),a=t.n(r),l=t("ERkP"),c=t.n(l),s=t("O94r"),u=t.n(s),p=t("05Xt"),d=(t("yiBs"),function(n){var e=n.open,t=n.position,i=n.children,r=n.slidingPanelPositionFixed,l=n.showSlidingPanelBorder,s=a()(n,["open","position","children","slidingPanelPositionFixed","showSlidingPanelBorder"]);return c.a.createElement(p.a,o()({},s,{in:e,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(t),l&&"sliding-panel--border-".concat(t),{"sliding-panel--fixed":r},"sliding-panel"),appear:!0,unmountOnExit:!0}),c.a.createElement("div",{className:"sliding-panel"},i))});d.defaultProps={open:!1,slidingPanelPositionFixed:!1,showSlidingPanelBorder:!1,position:"left",children:null},e.a=d},vrRf:function(n,e,t){"use strict";var i=t("ax0f"),o=t("H17f").indexOf,r=t("f4p7"),a=t("znGZ"),l=[].indexOf,c=!!l&&1/[1].indexOf(1,-0)<0,s=r("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!s||!u},{indexOf:function(n){return c?l.apply(this,arguments)||0:o(this,n,arguments.length>1?arguments[1]:void 0)}})},yiBs:function(n,e,t){},yu9r:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/internal/Sticky",function(){return t("I5Kg")}])},znGZ:function(n,e,t){var i=t("1Mu/"),o=t("ct80"),r=t("8aeu"),a=Object.defineProperty,l={},c=function(n){throw n};n.exports=function(n,e){if(r(l,n))return l[n];e||(e={});var t=[][n],s=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,p=r(e,1)?e[1]:void 0;return l[n]=!!t&&!o((function(){if(s&&!i)return!0;var n={length:-1};s?a(n,1,{enumerable:!0,get:c}):n[1]=1,t.call(n,u,p)}))}}},[["yu9r",0,1,2,3,5,8,4]]]);