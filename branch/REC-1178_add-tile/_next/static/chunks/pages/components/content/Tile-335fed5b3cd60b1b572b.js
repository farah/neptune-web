_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"+kY7":function(t,e,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"0FSu":function(t,e,n){var r=n("IRf+"),o=n("g6a+"),i=n("N9G2"),c=n("tJVe"),a=n("aoZ+"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,y,v,m){for(var b,h,g=i(d),S=o(g),w=r(y,v,3),O=c(S.length),E=0,j=m||a,x=e?j(d,O):n?j(d,0):void 0;O>E;E++)if((p||E in S)&&(h=w(b=S[E],E,g),t))if(e)x[E]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:u.call(x,b)}else if(f)return!1;return l?-1:s||f?f:x}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},"1t7P":function(t,e,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),c=n("DpO5"),a=n("1Mu/"),u=n("56Cj"),s=n("TbR9"),f=n("ct80"),l=n("8aeu"),p=n("xt6W"),d=n("dSaG"),y=n("FXyv"),v=n("N9G2"),m=n("N4z3"),b=n("CD8Q"),h=n("lhjL"),g=n("guiJ"),S=n("DEeE"),w=n("ZdBB"),O=n("7lg/"),E=n("JAL5"),j=n("GFpt"),x=n("q9+l"),N=n("4Sk5"),T=n("WxKw"),P=n("uLp7"),k=n("TN3B"),C=n("MyxS"),A=n("1odi"),_=n("HYrn"),G=n("fVMg"),R=n("TkGI"),M=n("aokA"),L=n("+kY7"),D=n("zc29"),X=n("0FSu").forEach,F=C("hidden"),I=G("toPrimitive"),J=D.set,V=D.getterFor("Symbol"),Z=Object.prototype,z=o.Symbol,B=i("JSON","stringify"),W=j.f,q=x.f,Y=O.f,H=N.f,Q=k("symbols"),U=k("op-symbols"),K=k("string-to-symbol-registry"),$=k("symbol-to-string-registry"),tt=k("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&f((function(){return 7!=g(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(Z,e);r&&delete Z[e],q(t,e,n),r&&t!==Z&&q(Z,e,r)}:q,ot=function(t,e){var n=Q[t]=g(z.prototype);return J(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,n){t===Z&&ct(U,e,n),y(t);var r=b(e,!0);return y(n),l(Q,r)?(n.enumerable?(l(t,F)&&t[F][r]&&(t[F][r]=!1),n=g(n,{enumerable:h(0,!1)})):(l(t,F)||q(t,F,h(1,{})),t[F][r]=!0),rt(t,r,n)):q(t,r,n)},at=function(t,e){y(t);var n=m(e),r=S(n).concat(lt(n));return X(r,(function(e){a&&!ut.call(n,e)||ct(t,e,n[e])})),t},ut=function(t){var e=b(t,!0),n=H.call(this,e);return!(this===Z&&l(Q,e)&&!l(U,e))&&(!(n||!l(this,e)||!l(Q,e)||l(this,F)&&this[F][e])||n)},st=function(t,e){var n=m(t),r=b(e,!0);if(n!==Z||!l(Q,r)||l(U,r)){var o=W(n,r);return!o||!l(Q,r)||l(n,F)&&n[F][r]||(o.enumerable=!0),o}},ft=function(t){var e=Y(m(t)),n=[];return X(e,(function(t){l(Q,t)||l(A,t)||n.push(t)})),n},lt=function(t){var e=t===Z,n=Y(e?U:m(t)),r=[];return X(n,(function(t){!l(Q,t)||e&&!l(Z,t)||r.push(Q[t])})),r};(u||(P((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===Z&&n.call(U,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),rt(this,e,h(1,t))};return a&&nt&&rt(Z,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return V(this).tag})),P(z,"withoutSetter",(function(t){return ot(_(t),t)})),N.f=ut,x.f=ct,j.f=st,w.f=O.f=ft,E.f=lt,R.f=function(t){return ot(G(t),t)},a&&(q(z.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),c||P(Z,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),X(S(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(K,e))return K[e];var n=z(e);return K[e]=n,$[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l($,t))return $[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?g(t):at(g(t),e)},defineProperty:ct,defineProperties:at,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(v(t))}}),B)&&r({target:"JSON",stat:!0,forced:!u||f((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,B.apply(null,o)}});z.prototype[I]||T(z.prototype,I,z.prototype.valueOf),L(z,"Symbol"),A[F]=!0},"56Cj":function(t,e,n){var r=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"6XZG":function(t,e,n){},"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7lg/":function(t,e,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return c.slice()}}(t):o(r(t))}},DCNs:function(t,e,n){"use strict";n("1t7P"),n("jQ/y");var r=n("ERkP"),o=n.n(r),i=n("O94r"),c=n.n(i),a=n("VehP"),u=n("6gor"),s=(n("6XZG"),function t(e){var n=e.className,r=e.description,i=e.disabled,a=e.href,s=e.media,f=e.onClick,l=e.size,p=e.title,d=l===t.Size.SMALL;return o.a.createElement("a",{className:c()("decision","flex-column","media","np-tile","text-no-decoration","text-xs-center",n,{"p-y-5 p-x-4":!d,"np-tile--small p-a-2":d,disabled:i}),href:a,onClick:i?null:f,onKeyDown:i?null:function(t){(t.keyCode===u.a.ENTER||t.keyCode===u.a.SPACE||32===t.code)&&f()},"aria-label":p},o.a.createElement("div",{className:"np-tile__media d-flex justify-content-center"},s),o.a.createElement("div",{className:"np-tile__title"},p),r&&o.a.createElement("div",{className:"np-tile__description"},r))});s.Size=a.a,s.defaultProps={className:"",description:null,disabled:!1,size:s.Size.LARGE},e.a=s},DEeE:function(t,e,n){var r=n("yRya"),o=n("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},"IRf+":function(t,e,n){var r=n("hpdy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TkGI:function(t,e,n){var r=n("fVMg");e.f=r},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},Y6eP:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Tile",function(){return n("oh1a")}])},"aoZ+":function(t,e,n){var r=n("dSaG"),o=n("xt6W"),i=n("fVMg")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},aokA:function(t,e,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),c=n("q9+l").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},fVMg:function(t,e,n){var r=n("9JhN"),o=n("TN3B"),i=n("8aeu"),c=n("HYrn"),a=n("56Cj"),u=n("TbR9"),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},guiJ:function(t,e,n){var r,o=n("FXyv"),i=n("uZvN"),c=n("sX5C"),a=n("1odi"),u=n("kySU"),s=n("8r/q"),f=n("MyxS"),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}y=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):function(){var t,e=s("iframe");return e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}();for(var t=c.length;t--;)delete y.prototype[c[t]];return y()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===e?n:i(n,e)}},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"jQ/y":function(t,e,n){"use strict";var r=n("ax0f"),o=n("1Mu/"),i=n("9JhN"),c=n("8aeu"),a=n("dSaG"),u=n("q9+l").f,s=n("tjTa"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var y=d.toString,v="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=y.call(t);if(c(l,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},kySU:function(t,e,n){var r=n("VCi3");t.exports=r("document","documentElement")},oh1a:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return f})),n.d(e,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),a=n("ZVZ0"),u=n("Qi1R"),s=n("DCNs"),f=(c.a.createElement,{name:"Tile"}),l={meta:f};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.a)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.a)(u.b,{code:'() => (\n  <Tile\n    description="Click here to be redirected to transferflow."\n    media={\n      <img\n        src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"\n        alt="illustration"\n        style={{ width: \'100%\' }}\n      />\n    }\n    onClick={() => alert(\'onClick\')}\n    size={Tile.Size.LARGE}\n    title="Send money"\n    disabled={false}\n  />\n);\n',scope:{Tile:s.a},mdxType:"LiveEditorBlock"}),Object(a.a)(u.a,{componentName:"Tile",mdxType:"GeneratePropsTable"}),Object(a.a)("h2",{id:"groups-of-tiles"},"Groups of tiles"),Object(a.a)("p",null,"It's recommended to use ",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/components/content/Decision"}),Object(a.a)("inlineCode",{parentName:"a"},"Decision"))," for displaying groups of tiles."))}p.isMDXComponent=!0},uZvN:function(t,e,n){var r=n("1Mu/"),o=n("q9+l"),i=n("FXyv"),c=n("DEeE");t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}}},[["Y6eP",0,1,2,3,5,4]]]);