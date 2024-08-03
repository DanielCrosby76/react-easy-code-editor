(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".easy-editor{all:initial;position:relative;display:flex;box-sizing:border-box;width:100%;height:100%}.editor-container{position:relative;display:flex;flex:1;font:inherit;line-height:inherit}.easy-editor-input{box-sizing:border-box;height:100%;width:100%;border:none;resize:none;scrollbar-width:thin;outline:none;margin:0;padding:5px;color:transparent;background:transparent;z-index:999;font:inherit;line-height:inherit}.easy-editor-display{position:absolute;outline:none;box-sizing:border-box;height:100%;width:100%;overflow:hidden;margin:0;padding:5px;font:inherit;line-height:inherit}.easy-editor-display-pre{position:relative;box-sizing:border-box;margin:0;font:inherit;line-height:inherit}.easy-editor-display-code{position:absolute;box-sizing:border-box;display:inline-block;margin:0;font:inherit;line-height:inherit}.easy-editor-line-numbers{box-sizing:border-box;overflow:hidden;text-align:right;padding:5px 10px 10px;margin:0;font:inherit;line-height:inherit;pointer-events:none;-webkit-user-select:none;user-select:none}#real-time-preview{width:100%;height:600px;background:linear-gradient(180deg,var(--background-color) 0%,var(--background-secondary-color) 100%);box-shadow:#00000059 0 5px 15px}#real-time-preview-container{margin:auto;display:flex;width:75%;height:100%;max-width:1500px}#editor-container{width:50%;padding-top:10px;padding-bottom:10px}#output{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;text-align:center;width:50%;height:100%;overflow-y:auto;scrollbar-width:thin;padding:20px}#desktop-site{display:none}@media only screen and (width <= 1024px){#real-time-preview{height:100%}#real-time-preview-container{width:100%}#editor-container{display:none}#output{width:100%;height:100%}#edit{display:none}#desktop-site{display:block}}#performance{width:100%;height:600px}#performance-container{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}#performance-info{margin:auto;width:50%}#performance-info-p{color:var(--text-color);width:90%}.performance-link{color:#61dbfb}#performance-editor{margin:auto;width:50%;height:80%}@media only screen and (width <= 1024px){#performance{display:none}}#theme{width:100%;height:300px}#theme-container{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}#theme-info{width:50%;margin:auto auto auto 5%}#theme-info-p{color:var(--text-color);width:90%}#theme-editor{margin:auto;width:45%;height:190px}#toggle-line-numbers{display:flex}#line-numbers-checkbox{margin-left:0}@media only screen and (width <= 1024px){#theme{display:none}}#simple{width:100%;height:600px}#simple-container{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}#simple-info{margin:auto;width:50%}#simple-info-p{color:var(--text-color);width:90%}.simple-link{color:#61dbfb}#simple-editor{margin:auto;width:50%;height:80%}@media only screen and (width <= 1024px){#simple{display:none}}#powered{width:100%;border-top:1px solid var(--text-secondary-color)}#powered-container{display:flex;justify-content:space-between;width:75%;margin:auto;text-align:center;padding-top:20px;padding-bottom:20px;max-width:1500px}.powered-container-img{position:relative;height:40px}@media only screen and (width <= 1024px){#powered{display:none}#powered-container{width:100%}.powered-container-img{width:20%}}code[class*=language-],pre[class*=language-]{color:#fff;background:none;text-shadow:0 -.1em .2em black;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-],:not(pre)>code[class*=language-]{background:#4d4033}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border:.3em solid hsl(30,20%,40%);border-radius:.5em;box-shadow:1px 1px .5em #000 inset}:not(pre)>code[class*=language-]{padding:.15em .2em .05em;border-radius:.3em;border:.13em solid hsl(30,20%,40%);box-shadow:1px 1px .3em -.1em #000 inset;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#998066}.token.punctuation,.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol{color:#d1949e}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#bde052}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#f5b83d}.token.atrule,.token.attr-value,.token.keyword{color:#d1949e}.token.regex,.token.important{color:#e90}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.deleted{color:red}body{margin:0;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;background-color:var(--background-color);color:var(--text-secondary-color);overflow-y:auto;overflow-x:hidden}#root{width:100vw;height:100vh}#header{padding:15px;border-bottom:1px solid var(--text-secondary-color)}#header-container{display:flex;justify-content:space-between;margin:auto;width:75%;max-width:1500px}#header-text-container{display:flex;align-items:center}#header-icon{animation:rotating 20s linear infinite;margin-right:10px}#header-text{font-weight:700;font-size:large}#theme-select{display:flex;align-items:center;cursor:pointer}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (width <= 1024px){#root{overflow:auto;scrollbar-width:thin}#header-container{width:100%}#header{margin-bottom:1px}}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ts={exports:{}},ho={},ns={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),mc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),Yl=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Yl&&e[Yl]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},os=Object.assign,is={};function kn(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ls(){}ls.prototype=kn.prototype;function Xi(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}var Zi=Xi.prototype=new ls;Zi.constructor=Xi;os(Zi,kn.prototype);Zi.isPureReactComponent=!0;var Kl=Array.isArray,as=Object.prototype.hasOwnProperty,Ji={current:null},ss={key:!0,ref:!0,__self:!0,__source:!0};function us(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)as.call(t,r)&&!ss.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:sr,type:e,key:i,ref:l,props:o,_owner:Ji.current}}function Tc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Rc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ql=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rc(""+e.key):t.toString(36)}function Ar(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case mc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+jo(l,0):r,Kl(o)?(n="",e!=null&&(n=e.replace(Ql,"$&/")+"/"),Ar(o,t,n,"",function(d){return d})):o!=null&&(el(o)&&(o=Tc(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ql,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Kl(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+jo(i,a);l+=Ar(i,t,n,s,o)}else if(s=_c(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+jo(i,a++),l+=Ar(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function hr(e,t,n){if(e==null)return e;var r=[],o=0;return Ar(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},jr={transition:null},Fc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Ji};function cs(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=kn;D.Fragment=gc;D.Profiler=vc;D.PureComponent=Xi;D.StrictMode=yc;D.Suspense=Ec;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fc;D.act=cs;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=os({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ji.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)as.call(t,s)&&!ss.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:sr,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};D.createElement=us;D.createFactory=function(e){var t=us.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Sc,render:e}};D.isValidElement=el;D.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:Pc}};D.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};D.unstable_act=cs;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";ns.exports=D;var A=ns.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=A,Ac=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),Oc=Object.prototype.hasOwnProperty,Lc=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ic={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Oc.call(t,r)&&!Ic.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ac,type:e,key:i,ref:l,props:o,_owner:Lc.current}}ho.Fragment=jc;ho.jsx=ds;ho.jsxs=ds;ts.exports=ho;var P=ts.exports,oi={},ps={exports:{}},Te={},fs={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,N){var O=_.length;_.push(N);e:for(;0<O;){var U=O-1>>>1,b=_[U];if(0<o(b,N))_[U]=N,_[O]=b,O=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],O=_.pop();if(O!==N){_[0]=O;e:for(var U=0,b=_.length,L=b>>>1;U<L;){var I=2*(U+1)-1,H=_[I],Y=I+1,X=_[Y];if(0>o(H,O))Y<b&&0>o(X,H)?(_[U]=X,_[Y]=O,U=Y):(_[U]=H,_[I]=O,U=I);else if(Y<b&&0>o(X,O))_[U]=X,_[Y]=O,U=Y;else break e}}return N}function o(_,N){var O=_.sortIndex-N.sortIndex;return O!==0?O:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],d=[],g=1,m=null,h=3,k=!1,x=!1,E=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(_){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=_)r(d),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(d)}}function f(_){if(E=!1,c(_),!x)if(n(s)!==null)x=!0,Nt(y);else{var N=n(d);N!==null&&at(f,N.startTime-_)}}function y(_,N){x=!1,E&&(E=!1,p(T),T=-1),k=!0;var O=h;try{for(c(N),m=n(s);m!==null&&(!(m.expirationTime>N)||_&&!M());){var U=m.callback;if(typeof U=="function"){m.callback=null,h=m.priorityLevel;var b=U(m.expirationTime<=N);N=e.unstable_now(),typeof b=="function"?m.callback=b:m===n(s)&&r(s),c(N)}else r(s);m=n(s)}if(m!==null)var L=!0;else{var I=n(d);I!==null&&at(f,I.startTime-N),L=!1}return L}finally{m=null,h=O,k=!1}}var v=!1,w=null,T=-1,C=5,F=-1;function M(){return!(e.unstable_now()-F<C)}function ie(){if(w!==null){var _=e.unstable_now();F=_;var N=!0;try{N=w(!0,_)}finally{N?Le():(v=!1,w=null)}}else v=!1}var Le;if(typeof u=="function")Le=function(){u(ie)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Qe=lt.port2;lt.port1.onmessage=ie,Le=function(){Qe.postMessage(null)}}else Le=function(){j(ie,0)};function Nt(_){w=_,v||(v=!0,Le())}function at(_,N){T=j(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Nt(y))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var O=h;h=N;try{return _()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=h;h=_;try{return N()}finally{h=O}},e.unstable_scheduleCallback=function(_,N,O){var U=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=O+b,_={id:g++,callback:N,priorityLevel:_,startTime:O,expirationTime:b,sortIndex:-1},O>U?(_.sortIndex=O,t(d,_),n(s)===null&&_===n(d)&&(E?(p(T),T=-1):E=!0,at(f,O-U))):(_.sortIndex=b,t(s,_),x||k||(x=!0,Nt(y))),_},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(_){var N=h;return function(){var O=h;h=N;try{return _.apply(this,arguments)}finally{h=O}}}})(hs);fs.exports=hs;var Dc=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=A,_e=Dc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,Hn={};function Ht(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gl={},ql={};function Mc(e){return ii.call(ql,e)?!0:ii.call(Gl,e)?!1:zc.test(e)?ql[e]=!0:(Gl[e]=!0,!1)}function $c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||$c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,t,n,r){var o=se.hasOwnProperty(t)?se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,o,r)&&(n=null),r||o===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),li=Symbol.for("react.profiler"),gs=Symbol.for("react.provider"),ys=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),si=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Xl=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Oo;function jn(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Lo=!1;function Io(e,t){if(!e||Lo)return"";Lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Vc(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Qt:return"Portal";case li:return"Profiler";case ol:return"StrictMode";case ai:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ys:return(e.displayName||"Context")+".Consumer";case gs:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Bc(e))}function ks(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ci(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ss(e,t){t=t.checked,t!=null&&rl(e,"checked",t,!1)}function di(e,t){Ss(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(On(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Es(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function _s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Yc=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(Yc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,sn=null,un=null;function na(e){if(e=dr(e)){if(typeof vi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=wo(t),vi(e.stateNode,e.type,t))}}function Rs(e){sn?un?un.push(e):un=[e]:sn=e}function Ps(){if(sn){var e=sn,t=un;if(un=sn=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function Fs(e,t){return e(t)}function Ns(){}var Do=!1;function As(e,t,n){if(Do)return e(t,n);Do=!0;try{return Fs(e,t,n)}finally{Do=!1,(sn!==null||un!==null)&&(Ns(),Ps())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var wi=!1;if(tt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){wi=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{wi=!1}function Kc(e,t,n,r,o,i,l,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var bn=!1,Br=null,Hr=!1,ki=null,Qc={onError:function(e){bn=!0,Br=e}};function Gc(e,t,n,r,o,i,l,a,s){bn=!1,Br=null,Kc.apply(Qc,arguments)}function qc(e,t,n,r,o,i,l,a,s){if(Gc.apply(this,arguments),bn){if(bn){var d=Br;bn=!1,Br=null}else throw Error(S(198));Hr||(Hr=!0,ki=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(Yt(e)!==e)throw Error(S(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ra(o),e;if(i===r)return ra(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Os(e){return e=Xc(e),e!==null?Ls(e):null}function Ls(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ls(e);if(t!==null)return t;e=e.sibling}return null}var Is=_e.unstable_scheduleCallback,oa=_e.unstable_cancelCallback,Zc=_e.unstable_shouldYield,Jc=_e.unstable_requestPaint,J=_e.unstable_now,ed=_e.unstable_getCurrentPriorityLevel,sl=_e.unstable_ImmediatePriority,Ds=_e.unstable_UserBlockingPriority,Yr=_e.unstable_NormalPriority,td=_e.unstable_LowPriority,bs=_e.unstable_IdlePriority,mo=null,Ye=null;function nd(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:id,rd=Math.log,od=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(rd(e)/od|0)|0}var vr=64,wr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Ln(a):(i&=l,i!==0&&(r=Ln(i)))}else l=n&~o,l!==0?r=Ln(l):i!==0&&(r=Ln(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),o=1<<n,r|=e[n],t&=~o;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-$e(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=ld(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$e(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ul(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function Ms(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $s,cl,Us,Vs,Ws,Ei=!1,kr=[],mt=null,gt=null,yt=null,Qn=new Map,Gn=new Map,dt=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ia(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Tn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=dr(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cd(e,t,n,r,o){switch(t){case"focusin":return mt=Tn(mt,e,t,n,r,o),!0;case"dragenter":return gt=Tn(gt,e,t,n,r,o),!0;case"mouseover":return yt=Tn(yt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qn.set(i,Tn(Qn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gn.set(i,Tn(Gn.get(i)||null,e,t,n,r,o)),!0}return!1}function Bs(e){var t=Lt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=js(n),t!==null){e.blockedOn=t,Ws(e.priority,function(){Us(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=dr(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function la(e,t,n){Or(e)&&n.delete(t)}function dd(){Ei=!1,mt!==null&&Or(mt)&&(mt=null),gt!==null&&Or(gt)&&(gt=null),yt!==null&&Or(yt)&&(yt=null),Qn.forEach(la),Gn.forEach(la)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ei||(Ei=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,dd)))}function qn(e){function t(o){return Rn(o,e)}if(0<kr.length){Rn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&Rn(mt,e),gt!==null&&Rn(gt,e),yt!==null&&Rn(yt,e),Qn.forEach(t),Gn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Bs(n),n.blockedOn===null&&dt.shift()}var cn=it.ReactCurrentBatchConfig,Qr=!0;function pd(e,t,n,r){var o=$,i=cn.transition;cn.transition=null;try{$=1,dl(e,t,n,r)}finally{$=o,cn.transition=i}}function fd(e,t,n,r){var o=$,i=cn.transition;cn.transition=null;try{$=4,dl(e,t,n,r)}finally{$=o,cn.transition=i}}function dl(e,t,n,r){if(Qr){var o=Ci(e,t,n,r);if(o===null)Ko(e,t,r,Gr,n),ia(e,r);else if(cd(o,e,t,n,r))r.stopPropagation();else if(ia(e,r),t&4&&-1<ud.indexOf(e)){for(;o!==null;){var i=dr(o);if(i!==null&&$s(i),i=Ci(e,t,n,r),i===null&&Ko(e,t,r,Gr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ko(e,t,r,null,n)}}var Gr=null;function Ci(e,t,n,r){if(Gr=null,e=al(r),e=Lt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Hs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case sl:return 1;case Ds:return 4;case Yr:case td:return 16;case bs:return 536870912;default:return 16}default:return 16}}var ft=null,pl=null,Lr=null;function Ys(){if(Lr)return Lr;var e,t=pl,n=t.length,r,o="value"in ft?ft.value:ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Lr=o.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function aa(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:aa,this.isPropagationStopped=aa,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Re(Sn),cr=q({},Sn,{view:0,detail:0}),hd=Re(cr),zo,Mo,Pn,go=q({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(zo=e.screenX-Pn.screenX,Mo=e.screenY-Pn.screenY):Mo=zo=0,Pn=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),sa=Re(go),md=q({},go,{dataTransfer:0}),gd=Re(md),yd=q({},cr,{relatedTarget:0}),$o=Re(yd),vd=q({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Re(vd),kd=q({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sd=Re(kd),Ed=q({},Sn,{data:0}),ua=Re(Ed),Cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function hl(){return Td}var Rd=q({},cr,{key:function(e){if(e.key){var t=Cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=Re(Rd),Fd=q({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ca=Re(Fd),Nd=q({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Ad=Re(Nd),jd=q({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Re(jd),Ld=q({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Re(Ld),Dd=[9,13,27,32],ml=tt&&"CompositionEvent"in window,zn=null;tt&&"documentMode"in document&&(zn=document.documentMode);var bd=tt&&"TextEvent"in window&&!zn,Ks=tt&&(!ml||zn&&8<zn&&11>=zn),da=" ",pa=!1;function Qs(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function zd(e,t){switch(e){case"compositionend":return Gs(t);case"keypress":return t.which!==32?null:(pa=!0,da);case"textInput":return e=t.data,e===da&&pa?null:e;default:return null}}function Md(e,t){if(qt)return e==="compositionend"||!ml&&Qs(e,t)?(e=Ys(),Lr=pl=ft=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$d[e.type]:t==="textarea"}function qs(e,t,n,r){Rs(r),t=qr(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Xn=null;function Ud(e){au(e,0)}function yo(e){var t=Jt(e);if(ks(t))return e}function Vd(e,t){if(e==="change")return t}var Xs=!1;if(tt){var Uo;if(tt){var Vo="oninput"in document;if(!Vo){var ha=document.createElement("div");ha.setAttribute("oninput","return;"),Vo=typeof ha.oninput=="function"}Uo=Vo}else Uo=!1;Xs=Uo&&(!document.documentMode||9<document.documentMode)}function ma(){Mn&&(Mn.detachEvent("onpropertychange",Zs),Xn=Mn=null)}function Zs(e){if(e.propertyName==="value"&&yo(Xn)){var t=[];qs(t,Xn,e,al(e)),As(Ud,t)}}function Wd(e,t,n){e==="focusin"?(ma(),Mn=t,Xn=n,Mn.attachEvent("onpropertychange",Zs)):e==="focusout"&&ma()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Xn)}function Hd(e,t){if(e==="click")return yo(t)}function Yd(e,t){if(e==="input"||e==="change")return yo(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Kd;function Zn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ii.call(t,o)||!Ve(e[o],t[o]))return!1}return!0}function ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,t){var n=ga(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ga(n)}}function Js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qd(e){var t=eu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Js(n.ownerDocument.documentElement,n)){if(r!==null&&gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ya(n,i);var l=ya(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=tt&&"documentMode"in document&&11>=document.documentMode,Xt=null,xi=null,$n=null,_i=!1;function va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||Xt==null||Xt!==Wr(r)||(r=Xt,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&Zn($n,r)||($n=r,r=qr(xi,"onSelect"),0<r.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Wo={},tu={};tt&&(tu=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function vo(e){if(Wo[e])return Wo[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tu)return Wo[e]=t[n];return e}var nu=vo("animationend"),ru=vo("animationiteration"),ou=vo("animationstart"),iu=vo("transitionend"),lu=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){lu.set(e,t),Ht(t,[e])}for(var Bo=0;Bo<wa.length;Bo++){var Ho=wa[Bo],qd=Ho.toLowerCase(),Xd=Ho[0].toUpperCase()+Ho.slice(1);Rt(qd,"on"+Xd)}Rt(nu,"onAnimationEnd");Rt(ru,"onAnimationIteration");Rt(ou,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(iu,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function ka(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qc(r,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;ka(o,a,d),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,d=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;ka(o,a,d),i=s}}}if(Hr)throw e=ki,Hr=!1,ki=null,e}function W(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(su(t,e,2,!1),n.add(r))}function Yo(e,t,n){var r=0;t&&(r|=4),su(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Cr]){e[Cr]=!0,ms.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,Yo("selectionchange",!1,t))}}function su(e,t,n,r){switch(Hs(t)){case 1:var o=pd;break;case 4:o=fd;break;default:o=dl}n=o.bind(null,t,n,e),o=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ko(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Lt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}As(function(){var d=i,g=al(n),m=[];e:{var h=lu.get(e);if(h!==void 0){var k=fl,x=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":k=Pd;break;case"focusin":x="focus",k=$o;break;case"focusout":x="blur",k=$o;break;case"beforeblur":case"afterblur":k=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ad;break;case nu:case ru:case ou:k=wd;break;case iu:k=Od;break;case"scroll":k=hd;break;case"wheel":k=Id;break;case"copy":case"cut":case"paste":k=Sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ca}var E=(t&4)!==0,j=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var u=d,c;u!==null;){c=u;var f=c.stateNode;if(c.tag===5&&f!==null&&(c=f,p!==null&&(f=Kn(u,p),f!=null&&E.push(er(u,f,c)))),j)break;u=u.return}0<E.length&&(h=new k(h,x,null,n,g),m.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==yi&&(x=n.relatedTarget||n.fromElement)&&(Lt(x)||x[nt]))break e;if((k||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Lt(x):null,x!==null&&(j=Yt(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(E=sa,f="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=ca,f="onPointerLeave",p="onPointerEnter",u="pointer"),j=k==null?h:Jt(k),c=x==null?h:Jt(x),h=new E(f,u+"leave",k,n,g),h.target=j,h.relatedTarget=c,f=null,Lt(g)===d&&(E=new E(p,u+"enter",x,n,g),E.target=c,E.relatedTarget=j,f=E),j=f,k&&x)t:{for(E=k,p=x,u=0,c=E;c;c=Kt(c))u++;for(c=0,f=p;f;f=Kt(f))c++;for(;0<u-c;)E=Kt(E),u--;for(;0<c-u;)p=Kt(p),c--;for(;u--;){if(E===p||p!==null&&E===p.alternate)break t;E=Kt(E),p=Kt(p)}E=null}else E=null;k!==null&&Sa(m,h,k,E,!1),x!==null&&j!==null&&Sa(m,j,x,E,!0)}}e:{if(h=d?Jt(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var y=Vd;else if(fa(h))if(Xs)y=Yd;else{y=Bd;var v=Wd}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(y=Hd);if(y&&(y=y(e,d))){qs(m,y,n,g);break e}v&&v(e,h,d),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&pi(h,"number",h.value)}switch(v=d?Jt(d):window,e){case"focusin":(fa(v)||v.contentEditable==="true")&&(Xt=v,xi=d,$n=null);break;case"focusout":$n=xi=Xt=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,va(m,n,g);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":va(m,n,g)}var w;if(ml)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else qt?Qs(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ks&&n.locale!=="ko"&&(qt||T!=="onCompositionStart"?T==="onCompositionEnd"&&qt&&(w=Ys()):(ft=g,pl="value"in ft?ft.value:ft.textContent,qt=!0)),v=qr(d,T),0<v.length&&(T=new ua(T,e,null,n,g),m.push({event:T,listeners:v}),w?T.data=w:(w=Gs(n),w!==null&&(T.data=w)))),(w=bd?zd(e,n):Md(e,n))&&(d=qr(d,"onBeforeInput"),0<d.length&&(g=new ua("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=w))}au(m,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Kn(e,n),i!=null&&r.unshift(er(e,i,o)),i=Kn(e,t),i!=null&&r.push(er(e,i,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,o?(s=Kn(n,i),s!=null&&l.unshift(er(n,s,a))):o||(s=Kn(n,i),s!=null&&l.push(er(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jd=/\r\n?/g,ep=/\u0000|\uFFFD/g;function Ea(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(ep,"")}function xr(e,t,n){if(t=Ea(t),Ea(e)!==t&&n)throw Error(S(425))}function Xr(){}var Ti=null,Ri=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fi=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(e){return Ca.resolve(null).then(e).catch(rp)}:Fi;function rp(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),He="__reactFiber$"+En,tr="__reactProps$"+En,nt="__reactContainer$"+En,Ni="__reactEvents$"+En,op="__reactListeners$"+En,ip="__reactHandles$"+En;function Lt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xa(e);e!==null;){if(n=e[He])return n;e=xa(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[He]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function wo(e){return e[tr]||null}var Ai=[],en=-1;function Pt(e){return{current:e}}function B(e){0>en||(e.current=Ai[en],Ai[en]=null,en--)}function V(e,t){en++,Ai[en]=e.current,e.current=t}var xt={},pe=Pt(xt),we=Pt(!1),Mt=xt;function hn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function Zr(){B(we),B(pe)}function _a(e,t,n){if(pe.current!==xt)throw Error(S(168));V(pe,t),V(we,n)}function uu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Wc(e)||"Unknown",o));return q({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Mt=pe.current,V(pe,e),V(we,we.current),!0}function Ta(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=uu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,B(we),B(pe),V(pe,e)):B(we),V(we,n)}var Xe=null,ko=!1,Go=!1;function cu(e){Xe===null?Xe=[e]:Xe.push(e)}function lp(e){ko=!0,cu(e)}function Ft(){if(!Go&&Xe!==null){Go=!0;var e=0,t=$;try{var n=Xe;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,ko=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),Is(sl,Ft),o}finally{$=t,Go=!1}}return null}var tn=[],nn=0,eo=null,to=0,Pe=[],Fe=0,$t=null,Ze=1,Je="";function jt(e,t){tn[nn++]=to,tn[nn++]=eo,eo=e,to=t}function du(e,t,n){Pe[Fe++]=Ze,Pe[Fe++]=Je,Pe[Fe++]=$t,$t=e;var r=Ze;e=Je;var o=32-$e(r)-1;r&=~(1<<o),n+=1;var i=32-$e(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ze=1<<32-$e(t)+o|n<<o|r,Je=i+e}else Ze=1<<i|n<<o|r,Je=e}function yl(e){e.return!==null&&(jt(e,1),du(e,1,0))}function vl(e){for(;e===eo;)eo=tn[--nn],tn[nn]=null,to=tn[--nn],tn[nn]=null;for(;e===$t;)$t=Pe[--Fe],Pe[Fe]=null,Je=Pe[--Fe],Pe[Fe]=null,Ze=Pe[--Fe],Pe[Fe]=null}var xe=null,Ce=null,K=!1,Me=null;function pu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,Ce=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,Ce=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(K){var t=Ce;if(t){var n=t;if(!Ra(e,t)){if(ji(e))throw Error(S(418));t=vt(n.nextSibling);var r=xe;t&&Ra(e,t)?pu(r,n):(e.flags=e.flags&-4097|2,K=!1,xe=e)}}else{if(ji(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,xe=e}}}function Pa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function _r(e){if(e!==xe)return!1;if(!K)return Pa(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=Ce)){if(ji(e))throw fu(),Error(S(418));for(;t;)pu(e,t),t=vt(t.nextSibling)}if(Pa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=xe?vt(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=Ce;e;)e=vt(e.nextSibling)}function mn(){Ce=xe=null,K=!1}function wl(e){Me===null?Me=[e]:Me.push(e)}var ap=it.ReactCurrentBatchConfig;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function hu(e){function t(p,u){if(e){var c=p.deletions;c===null?(p.deletions=[u],p.flags|=16):c.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=Et(p,u),p.index=0,p.sibling=null,p}function i(p,u,c){return p.index=c,e?(c=p.alternate,c!==null?(c=c.index,c<u?(p.flags|=2,u):c):(p.flags|=2,u)):(p.flags|=1048576,u)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,u,c,f){return u===null||u.tag!==6?(u=ni(c,p.mode,f),u.return=p,u):(u=o(u,c),u.return=p,u)}function s(p,u,c,f){var y=c.type;return y===Gt?g(p,u,c.props.children,f,c.key):u!==null&&(u.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ut&&Fa(y)===u.type)?(f=o(u,c.props),f.ref=Fn(p,u,c),f.return=p,f):(f=Vr(c.type,c.key,c.props,null,p.mode,f),f.ref=Fn(p,u,c),f.return=p,f)}function d(p,u,c,f){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=ri(c,p.mode,f),u.return=p,u):(u=o(u,c.children||[]),u.return=p,u)}function g(p,u,c,f,y){return u===null||u.tag!==7?(u=zt(c,p.mode,f,y),u.return=p,u):(u=o(u,c),u.return=p,u)}function m(p,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ni(""+u,p.mode,c),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mr:return c=Vr(u.type,u.key,u.props,null,p.mode,c),c.ref=Fn(p,null,u),c.return=p,c;case Qt:return u=ri(u,p.mode,c),u.return=p,u;case ut:var f=u._init;return m(p,f(u._payload),c)}if(On(u)||xn(u))return u=zt(u,p.mode,c,null),u.return=p,u;Tr(p,u)}return null}function h(p,u,c,f){var y=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return y!==null?null:a(p,u,""+c,f);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return c.key===y?s(p,u,c,f):null;case Qt:return c.key===y?d(p,u,c,f):null;case ut:return y=c._init,h(p,u,y(c._payload),f)}if(On(c)||xn(c))return y!==null?null:g(p,u,c,f,null);Tr(p,c)}return null}function k(p,u,c,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return p=p.get(c)||null,a(u,p,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mr:return p=p.get(f.key===null?c:f.key)||null,s(u,p,f,y);case Qt:return p=p.get(f.key===null?c:f.key)||null,d(u,p,f,y);case ut:var v=f._init;return k(p,u,c,v(f._payload),y)}if(On(f)||xn(f))return p=p.get(c)||null,g(u,p,f,y,null);Tr(u,f)}return null}function x(p,u,c,f){for(var y=null,v=null,w=u,T=u=0,C=null;w!==null&&T<c.length;T++){w.index>T?(C=w,w=null):C=w.sibling;var F=h(p,w,c[T],f);if(F===null){w===null&&(w=C);break}e&&w&&F.alternate===null&&t(p,w),u=i(F,u,T),v===null?y=F:v.sibling=F,v=F,w=C}if(T===c.length)return n(p,w),K&&jt(p,T),y;if(w===null){for(;T<c.length;T++)w=m(p,c[T],f),w!==null&&(u=i(w,u,T),v===null?y=w:v.sibling=w,v=w);return K&&jt(p,T),y}for(w=r(p,w);T<c.length;T++)C=k(w,p,T,c[T],f),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?T:C.key),u=i(C,u,T),v===null?y=C:v.sibling=C,v=C);return e&&w.forEach(function(M){return t(p,M)}),K&&jt(p,T),y}function E(p,u,c,f){var y=xn(c);if(typeof y!="function")throw Error(S(150));if(c=y.call(c),c==null)throw Error(S(151));for(var v=y=null,w=u,T=u=0,C=null,F=c.next();w!==null&&!F.done;T++,F=c.next()){w.index>T?(C=w,w=null):C=w.sibling;var M=h(p,w,F.value,f);if(M===null){w===null&&(w=C);break}e&&w&&M.alternate===null&&t(p,w),u=i(M,u,T),v===null?y=M:v.sibling=M,v=M,w=C}if(F.done)return n(p,w),K&&jt(p,T),y;if(w===null){for(;!F.done;T++,F=c.next())F=m(p,F.value,f),F!==null&&(u=i(F,u,T),v===null?y=F:v.sibling=F,v=F);return K&&jt(p,T),y}for(w=r(p,w);!F.done;T++,F=c.next())F=k(w,p,T,F.value,f),F!==null&&(e&&F.alternate!==null&&w.delete(F.key===null?T:F.key),u=i(F,u,T),v===null?y=F:v.sibling=F,v=F);return e&&w.forEach(function(ie){return t(p,ie)}),K&&jt(p,T),y}function j(p,u,c,f){if(typeof c=="object"&&c!==null&&c.type===Gt&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:e:{for(var y=c.key,v=u;v!==null;){if(v.key===y){if(y=c.type,y===Gt){if(v.tag===7){n(p,v.sibling),u=o(v,c.props.children),u.return=p,p=u;break e}}else if(v.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ut&&Fa(y)===v.type){n(p,v.sibling),u=o(v,c.props),u.ref=Fn(p,v,c),u.return=p,p=u;break e}n(p,v);break}else t(p,v);v=v.sibling}c.type===Gt?(u=zt(c.props.children,p.mode,f,c.key),u.return=p,p=u):(f=Vr(c.type,c.key,c.props,null,p.mode,f),f.ref=Fn(p,u,c),f.return=p,p=f)}return l(p);case Qt:e:{for(v=c.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(p,u.sibling),u=o(u,c.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=ri(c,p.mode,f),u.return=p,p=u}return l(p);case ut:return v=c._init,j(p,u,v(c._payload),f)}if(On(c))return x(p,u,c,f);if(xn(c))return E(p,u,c,f);Tr(p,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(p,u.sibling),u=o(u,c),u.return=p,p=u):(n(p,u),u=ni(c,p.mode,f),u.return=p,p=u),l(p)):n(p,u)}return j}var gn=hu(!0),mu=hu(!1),no=Pt(null),ro=null,rn=null,kl=null;function Sl(){kl=rn=ro=null}function El(e){var t=no.current;B(no),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ro=e,kl=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ro===null)throw Error(S(308));rn=e,ro.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var It=null;function Cl(e){It===null?It=[e]:It.push(e)}function gu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Cl(t)):(n.next=o.next,o.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Cl(r)):(t.next=o.next,o.next=t),r.interleaved=t,rt(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var o=e.updateQueue;ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,d=s.next;s.next=null,l===null?i=d:l.next=d,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,g=d=s=null,a=i;do{var h=a.lane,k=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,E=a;switch(h=t,k=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){m=x.call(k,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,h=typeof x=="function"?x.call(k,m,h):x,h==null)break e;m=q({},m,h);break e;case 2:ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=k,s=m):g=g.next=k,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(s=m),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vt|=l,e.lanes=l,e.memoizedState=m}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var pr={},Ke=Pt(pr),nr=Pt(pr),rr=Pt(pr);function Dt(e){if(e===pr)throw Error(S(174));return e}function _l(e,t){switch(V(rr,t),V(nr,e),V(Ke,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}B(Ke),V(Ke,t)}function yn(){B(Ke),B(nr),B(rr)}function vu(e){Dt(rr.current);var t=Dt(Ke.current),n=hi(t,e.type);t!==n&&(V(nr,e),V(Ke,n))}function Tl(e){nr.current===e&&(B(Ke),B(nr))}var Q=Pt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Rl(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var br=it.ReactCurrentDispatcher,Xo=it.ReactCurrentBatchConfig,Ut=0,G=null,te=null,re=null,lo=!1,Un=!1,or=0,sp=0;function ue(){throw Error(S(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,o,i){if(Ut=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?pp:fp,e=n(r,o),Un){i=0;do{if(Un=!1,or=0,25<=i)throw Error(S(301));i+=1,re=te=null,t.updateQueue=null,br.current=hp,e=n(r,o)}while(Un)}if(br.current=ao,t=te!==null&&te.next!==null,Ut=0,re=te=G=null,lo=!1,t)throw Error(S(300));return e}function Nl(){var e=or!==0;return or=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Oe(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function ir(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,d=i;do{var g=d.lane;if((Ut&g)===g)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,G.lanes|=g,Vt|=g}d=d.next}while(d!==null&&d!==i);s===null?l=r:s.next=a,Ve(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,Vt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ve(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wu(){}function ku(e,t){var n=G,r=Oe(),o=t(),i=!Ve(r.memoizedState,o);if(i&&(r.memoizedState=o,ve=!0),r=r.queue,Al(Cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,lr(9,Eu.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(S(349));Ut&30||Su(n,t,o)}return o}function Su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&_u(e)}function Cu(e,t,n){return n(function(){xu(t)&&_u(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function _u(e){var t=rt(e,1);t!==null&&Ue(t,e,1,-1)}function ja(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,G,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tu(){return Oe().memoizedState}function zr(e,t,n,r){var o=Be();G.flags|=e,o.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var o=Oe();r=r===void 0?null:r;var i=void 0;if(te!==null){var l=te.memoizedState;if(i=l.destroy,r!==null&&Pl(r,l.deps)){o.memoizedState=lr(t,n,i,r);return}}G.flags|=e,o.memoizedState=lr(1|t,n,i,r)}function Oa(e,t){return zr(8390656,8,e,t)}function Al(e,t){return So(2048,8,e,t)}function Ru(e,t){return So(4,2,e,t)}function Pu(e,t){return So(4,4,e,t)}function Fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,Fu.bind(null,t,e),n)}function jl(){}function Au(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ju(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return Ut&21?(Ve(n,t)||(n=zs(),G.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function up(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{$=n,Xo.transition=r}}function Lu(){return Oe().memoizedState}function cp(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))Du(t,n);else if(n=gu(e,t,n,r),n!==null){var o=he();Ue(n,e,r,o),bu(n,t,r)}}function dp(e,t,n){var r=St(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Du(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ve(a,l)){var s=t.interleaved;s===null?(o.next=o,Cl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=gu(e,t,o,r),n!==null&&(o=he(),Ue(n,e,r,o),bu(n,t,r))}}function Iu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Du(e,t){Un=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}var ao={readContext:je,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},pp={readContext:je,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:ja,useDebugValue:jl,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=ja(!1),t=e[0];return e=up.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Be();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Ut&30||Su(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Oa(Cu.bind(null,r,i,e),[e]),r.flags|=2048,lr(9,Eu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Be(),t=oe.identifierPrefix;if(K){var n=Je,r=Ze;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:je,useCallback:Au,useContext:je,useEffect:Al,useImperativeHandle:Nu,useInsertionEffect:Ru,useLayoutEffect:Pu,useMemo:ju,useReducer:Zo,useRef:Tu,useState:function(){return Zo(ir)},useDebugValue:jl,useDeferredValue:function(e){var t=Oe();return Ou(t,te.memoizedState,e)},useTransition:function(){var e=Zo(ir)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:Lu,unstable_isNewReconciler:!1},hp={readContext:je,useCallback:Au,useContext:je,useEffect:Al,useImperativeHandle:Nu,useInsertionEffect:Ru,useLayoutEffect:Pu,useMemo:ju,useReducer:Jo,useRef:Tu,useState:function(){return Jo(ir)},useDebugValue:jl,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:Ou(t,te.memoizedState,e)},useTransition:function(){var e=Jo(ir)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:Lu,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=St(e),i=et(r,o);i.payload=t,n!=null&&(i.callback=n),t=wt(e,i,o),t!==null&&(Ue(t,e,o,r),Dr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=St(e),i=et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wt(e,i,o),t!==null&&(Ue(t,e,o,r),Dr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=St(e),o=et(n,r);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,r),t!==null&&(Ue(t,e,r,n),Dr(t,e,r))}};function La(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(o,i):!0}function zu(e,t,n){var r=!1,o=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=ke(t)?Mt:pe.current,r=t.contextTypes,i=(r=r!=null)?hn(e,o):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=ke(t)?Mt:pe.current,o.context=hn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ii(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),oo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Vc(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,Ki=r),bi(e,t)},n}function $u(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bi(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Da(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Fp.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var gp=it.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?mu(t,null,n,r):gn(t,e.child,n,r)}function Ma(e,t,n,r,o){n=n.render;var i=t.ref;return dn(t,o),r=Fl(e,t,n,r,i,o),n=Nl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(K&&n&&yl(t),t.flags|=1,fe(e,t,r,o),t.child)}function $a(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!$l(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uu(e,t,i,r,o)):(e=Vr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=Et(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ot(e,t,o)}return zi(e,t,n,r,o)}function Vu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(ln,Ee),Ee|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(ln,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(ln,Ee),Ee|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(ln,Ee),Ee|=r;return fe(e,t,o,n),t.child}function Wu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,o){var i=ke(n)?Mt:pe.current;return i=hn(t,i),dn(t,o),n=Fl(e,t,n,r,i,o),r=Nl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(K&&r&&yl(t),t.flags|=1,fe(e,t,n,o),t.child)}function Ua(e,t,n,r,o){if(ke(n)){var i=!0;Jr(t)}else i=!1;if(dn(t,o),t.stateNode===null)Mr(e,t),zu(t,n,r),Di(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=je(d):(d=ke(n)?Mt:pe.current,d=hn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==d)&&Ia(t,l,r,d),ct=!1;var h=t.memoizedState;l.state=h,oo(t,r,l,o),s=t.memoizedState,a!==r||h!==s||we.current||ct?(typeof g=="function"&&(Ii(t,n,g,r),s=t.memoizedState),(a=ct||La(t,n,a,r,h,s,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:be(t.type,a),l.props=d,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=je(s):(s=ke(n)?Mt:pe.current,s=hn(t,s));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Ia(t,l,r,s),ct=!1,h=t.memoizedState,l.state=h,oo(t,r,l,o);var x=t.memoizedState;a!==m||h!==x||we.current||ct?(typeof k=="function"&&(Ii(t,n,k,r),x=t.memoizedState),(d=ct||La(t,n,d,r,h,x,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mi(e,t,n,r,i,o)}function Mi(e,t,n,r,o,i){Wu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ta(t,n,!1),ot(e,t,i);r=t.stateNode,gp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=gn(t,e.child,null,i),t.child=gn(t,null,a,i)):fe(e,t,a,i),t.memoizedState=r.state,o&&Ta(t,n,!0),t.child}function Bu(e){var t=e.stateNode;t.pendingContext?_a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_a(e,t.context,!1),_l(e,t.containerInfo)}function Va(e,t,n,r,o){return mn(),wl(o),t.flags|=256,fe(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Q,o&1),e===null)return Oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=_o(l,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ui(n),t.memoizedState=$i,e):Ol(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return yp(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Et(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Et(a,i):(i=zt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ui(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=Et(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&wl(r),gn(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ei(Error(S(422))),Rr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=_o({mode:"visible",children:r.children},o,0,null),i=zt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&gn(t,e.child,null,l),t.child.memoizedState=Ui(l),t.memoizedState=$i,i);if(!(t.mode&1))return Rr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=ei(i,r,void 0),Rr(e,t,l,r)}if(a=(l&e.childLanes)!==0,ve||a){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rt(e,o),Ue(r,e,o,-1))}return Ml(),r=ei(Error(S(421))),Rr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ce=vt(o.nextSibling),xe=t,K=!0,Me=null,e!==null&&(Pe[Fe++]=Ze,Pe[Fe++]=Je,Pe[Fe++]=$t,Ze=e.id,Je=e.overflow,$t=t),t=Ol(t,r.children),t.flags|=4096,t)}function Wa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function ti(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,n,t);else if(e.tag===19)Wa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ti(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ti(t,!0,n,null,i);break;case"together":ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vp(e,t,n){switch(t.tag){case 3:Bu(t),mn();break;case 5:vu(t);break;case 1:ke(t.type)&&Jr(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(no,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(V(Q,Q.current&1),e=ot(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Vu(e,t,n)}return ot(e,t,n)}var Ku,Vi,Qu,Gu;Ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};Qu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dt(Ke.current);var i=null;switch(n){case"input":o=ci(e,o),r=ci(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=fi(e,o),r=fi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}mi(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(a=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Gu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&Zr(),ce(t),null;case 3:return r=t.stateNode,yn(),B(we),B(pe),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(qi(Me),Me=null))),Vi(e,t),ce(t),null;case 5:Tl(t);var o=Dt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Dt(Ke.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[He]=t,r[tr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<In.length;o++)W(In[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Zl(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":ea(r,i),W("invalid",r)}mi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),o=["children",""+a]):Hn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":gr(r),Jl(r,i,!0);break;case"textarea":gr(r),ta(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[He]=t,e[tr]=r,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(l=gi(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<In.length;o++)W(In[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":Zl(e,r),o=ci(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),W("invalid",e);break;case"textarea":ea(e,r),o=fi(e,r),W("invalid",e);break;default:o=r}mi(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ts(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yn(e,s):typeof s=="number"&&Yn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&rl(e,i,s,l))}switch(n){case"input":gr(e),Jl(e,r,!1);break;case"textarea":gr(e),ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(rr.current),Dt(Ke.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ce(t),null;case 13:if(B(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ce!==null&&t.mode&1&&!(t.flags&128))fu(),mn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[He]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else Me!==null&&(qi(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Ml())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return yn(),Vi(e,t),e===null&&Jn(t.stateNode.containerInfo),ce(t),null;case 10:return El(t.type._context),ce(t),null;case 17:return ke(t.type)&&Zr(),ce(t),null;case 19:if(B(Q),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Nn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=io(e),l!==null){for(t.flags|=128,Nn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>wn&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304)}else{if(!r)if(e=io(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return ce(t),null}else 2*J()-i.renderingStartTime>wn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return zl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function kp(e,t){switch(vl(t),t.tag){case 1:return ke(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),B(we),B(pe),Rl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(B(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Q),null;case 4:return yn(),null;case 10:return El(t.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var Pr=!1,de=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,R=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Wi(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Ba=!1;function Ep(e,t){if(Ti=Qr,e=eu(),gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var k;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(k=m.firstChild)!==null;)h=m,m=k;for(;;){if(m===e)break t;if(h===n&&++d===o&&(a=l),h===i&&++g===r&&(s=l),(k=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ri={focusedElem:e,selectionRange:n},Qr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,j=x.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:be(t.type,E),j);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(f){Z(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=Ba,Ba=!1,x}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wi(t,n,i)}o=o.next}while(o!==r)}}function Co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qu(e){var t=e.alternate;t!==null&&(e.alternate=null,qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[tr],delete t[Ni],delete t[op],delete t[ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var le=null,ze=!1;function st(e,t,n){for(n=n.child;n!==null;)Zu(e,t,n),n=n.sibling}function Zu(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:de||on(n,t);case 6:var r=le,o=ze;le=null,st(e,t,n),le=r,ze=o,le!==null&&(ze?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(ze?(e=le,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),qn(e)):Qo(le,n.stateNode));break;case 4:r=le,o=ze,le=n.stateNode.containerInfo,ze=!0,st(e,t,n),le=r,ze=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Wi(n,t,l),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!de&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,st(e,t,n),de=r):st(e,t,n);break;default:st(e,t,n)}}function Ya(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var o=Ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,ze=!1;break e;case 3:le=a.stateNode.containerInfo,ze=!0;break e;case 4:le=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(le===null)throw Error(S(160));Zu(i,l,o),le=null,ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){Z(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}function Ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{Vn(3,e,e.return),Co(3,e)}catch(E){Z(e,e.return,E)}try{Vn(5,e,e.return)}catch(E){Z(e,e.return,E)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var o=e.stateNode;try{Yn(o,"")}catch(E){Z(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ss(o,i),gi(a,l);var d=gi(a,i);for(l=0;l<s.length;l+=2){var g=s[l],m=s[l+1];g==="style"?Ts(o,m):g==="dangerouslySetInnerHTML"?xs(o,m):g==="children"?Yn(o,m):rl(o,g,m,d)}switch(a){case"input":di(o,i);break;case"textarea":Es(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?an(o,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?an(o,!!i.multiple,i.defaultValue,!0):an(o,!!i.multiple,i.multiple?[]:"",!1))}o[tr]=i}catch(E){Z(e,e.return,E)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){Z(e,e.return,E)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(E){Z(e,e.return,E)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Dl=J())),r&4&&Ya(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||g,De(t,e),de=d):De(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(m=R=g;R!==null;){switch(h=R,k=h.child,h.tag){case 0:case 11:case 14:case 15:Vn(4,h,h.return);break;case 1:on(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(E){Z(r,n,E)}}break;case 5:on(h,h.return);break;case 22:if(h.memoizedState!==null){Qa(m);continue}}k!==null?(k.return=h,R=k):Qa(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{o=m.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=_s("display",l))}catch(E){Z(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){Z(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),We(e),r&4&&Ya(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xu(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yn(o,""),r.flags&=-33);var i=Ha(e);Yi(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ha(e);Hi(e,a,l);break;default:throw Error(S(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cp(e,t,n){R=e,ec(e)}function ec(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Pr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||de;a=Pr;var d=de;if(Pr=l,(de=s)&&!d)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Ga(o):s!==null?(s.return=l,R=s):Ga(o);for(;i!==null;)R=i,ec(i),i=i.sibling;R=o,Pr=a,de=d}Ka(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Ka(e)}}function Ka(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Co(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&qn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Bi(t)}catch(h){Z(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Qa(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ga(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Co(4,t)}catch(s){Z(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Z(t,o,s)}}var i=t.return;try{Bi(t)}catch(s){Z(t,i,s)}break;case 5:var l=t.return;try{Bi(t)}catch(s){Z(t,l,s)}}}catch(s){Z(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var xp=Math.ceil,so=it.ReactCurrentDispatcher,Ll=it.ReactCurrentOwner,Ae=it.ReactCurrentBatchConfig,z=0,oe=null,ee=null,ae=0,Ee=0,ln=Pt(0),ne=0,ar=null,Vt=0,xo=0,Il=0,Wn=null,ye=null,Dl=0,wn=1/0,qe=null,uo=!1,Ki=null,kt=null,Fr=!1,ht=null,co=0,Bn=0,Qi=null,$r=-1,Ur=0;function he(){return z&6?J():$r!==-1?$r:$r=J()}function St(e){return e.mode&1?z&2&&ae!==0?ae&-ae:ap.transition!==null?(Ur===0&&(Ur=zs()),Ur):(e=$,e!==0||(e=window.event,e=e===void 0?16:Hs(e.type)),e):1}function Ue(e,t,n,r){if(50<Bn)throw Bn=0,Qi=null,Error(S(185));ur(e,n,r),(!(z&2)||e!==oe)&&(e===oe&&(!(z&2)&&(xo|=n),ne===4&&pt(e,ae)),Se(e,r),n===1&&z===0&&!(t.mode&1)&&(wn=J()+500,ko&&Ft()))}function Se(e,t){var n=e.callbackNode;ad(e,t);var r=Kr(e,e===oe?ae:0);if(r===0)n!==null&&oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oa(n),t===1)e.tag===0?lp(qa.bind(null,e)):cu(qa.bind(null,e)),np(function(){!(z&6)&&Ft()}),n=null;else{switch(Ms(r)){case 1:n=sl;break;case 4:n=Ds;break;case 16:n=Yr;break;case 536870912:n=bs;break;default:n=Yr}n=sc(n,tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tc(e,t){if($r=-1,Ur=0,z&6)throw Error(S(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=Kr(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var o=z;z|=2;var i=rc();(oe!==e||ae!==t)&&(qe=null,wn=J()+500,bt(e,t));do try{Rp();break}catch(a){nc(e,a)}while(!0);Sl(),so.current=i,z=o,ee!==null?t=0:(oe=null,ae=0,t=ne)}if(t!==0){if(t===2&&(o=Si(e),o!==0&&(r=o,t=Gi(e,o))),t===1)throw n=ar,bt(e,0),pt(e,r),Se(e,J()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!_p(o)&&(t=po(e,r),t===2&&(i=Si(e),i!==0&&(r=i,t=Gi(e,i))),t===1))throw n=ar,bt(e,0),pt(e,r),Se(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ot(e,ye,qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=Dl+500-J(),10<t)){if(Kr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fi(Ot.bind(null,e,ye,qe),t);break}Ot(e,ye,qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-$e(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xp(r/1960))-r,10<r){e.timeoutHandle=Fi(Ot.bind(null,e,ye,qe),r);break}Ot(e,ye,qe);break;case 5:Ot(e,ye,qe);break;default:throw Error(S(329))}}}return Se(e,J()),e.callbackNode===n?tc.bind(null,e):null}function Gi(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(bt(e,t).flags|=256),e=po(e,t),e!==2&&(t=ye,ye=n,t!==null&&qi(t)),e}function qi(e){ye===null?ye=e:ye.push.apply(ye,e)}function _p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ve(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Il,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function qa(e){if(z&6)throw Error(S(327));pn();var t=Kr(e,0);if(!(t&1))return Se(e,J()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Gi(e,r))}if(n===1)throw n=ar,bt(e,0),pt(e,t),Se(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ot(e,ye,qe),Se(e,J()),null}function bl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(wn=J()+500,ko&&Ft())}}function Wt(e){ht!==null&&ht.tag===0&&!(z&6)&&pn();var t=z;z|=1;var n=Ae.transition,r=$;try{if(Ae.transition=null,$=1,e)return e()}finally{$=r,Ae.transition=n,z=t,!(z&6)&&Ft()}}function zl(){Ee=ln.current,B(ln)}function bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tp(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:yn(),B(we),B(pe),Rl();break;case 5:Tl(r);break;case 4:yn();break;case 13:B(Q);break;case 19:B(Q);break;case 10:El(r.type._context);break;case 22:case 23:zl()}n=n.return}if(oe=e,ee=e=Et(e.current,null),ae=Ee=t,ne=0,ar=null,Il=xo=Vt=0,ye=Wn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}It=null}return e}function nc(e,t){do{var n=ee;try{if(Sl(),br.current=ao,lo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}lo=!1}if(Ut=0,re=te=G=null,Un=!1,or=0,Ll.current=null,n===null||n.return===null){ne=1,ar=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=ba(l);if(k!==null){k.flags&=-257,za(k,l,a,i,t),k.mode&1&&Da(i,d,t),t=k,s=d;var x=t.updateQueue;if(x===null){var E=new Set;E.add(s),t.updateQueue=E}else x.add(s);break e}else{if(!(t&1)){Da(i,d,t),Ml();break e}s=Error(S(426))}}else if(K&&a.mode&1){var j=ba(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),za(j,l,a,i,t),wl(vn(s,a));break e}}i=s=vn(s,a),ne!==4&&(ne=2),Wn===null?Wn=[i]:Wn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Mu(i,s,t);Na(i,p);break e;case 1:a=s;var u=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(kt===null||!kt.has(c)))){i.flags|=65536,t&=-t,i.lanes|=t;var f=$u(i,a,t);Na(i,f);break e}}i=i.return}while(i!==null)}ic(n)}catch(y){t=y,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function rc(){var e=so.current;return so.current=ao,e===null?ao:e}function Ml(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Vt&268435455)&&!(xo&268435455)||pt(oe,ae)}function po(e,t){var n=z;z|=2;var r=rc();(oe!==e||ae!==t)&&(qe=null,bt(e,t));do try{Tp();break}catch(o){nc(e,o)}while(!0);if(Sl(),z=n,so.current=r,ee!==null)throw Error(S(261));return oe=null,ae=0,ne}function Tp(){for(;ee!==null;)oc(ee)}function Rp(){for(;ee!==null&&!Zc();)oc(ee)}function oc(e){var t=ac(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?ic(e):ee=t,Ll.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=wp(n,t,Ee),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ot(e,t,n){var r=$,o=Ae.transition;try{Ae.transition=null,$=1,Pp(e,t,n,r)}finally{Ae.transition=o,$=r}return null}function Pp(e,t,n,r){do pn();while(ht!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(sd(e,i),e===oe&&(ee=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fr||(Fr=!0,sc(Yr,function(){return pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var l=$;$=1;var a=z;z|=4,Ll.current=null,Ep(e,n),Ju(n,e),Qd(Ri),Qr=!!Ti,Ri=Ti=null,e.current=n,Cp(n),Jc(),z=a,$=l,Ae.transition=i}else e.current=n;if(Fr&&(Fr=!1,ht=e,co=o),i=e.pendingLanes,i===0&&(kt=null),nd(n.stateNode),Se(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(uo)throw uo=!1,e=Ki,Ki=null,e;return co&1&&e.tag!==0&&pn(),i=e.pendingLanes,i&1?e===Qi?Bn++:(Bn=0,Qi=e):Bn=0,Ft(),null}function pn(){if(ht!==null){var e=Ms(co),t=Ae.transition,n=$;try{if(Ae.transition=null,$=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,co=0,z&6)throw Error(S(331));var o=z;for(z|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(R=d;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:Vn(8,g,i)}var m=g.child;if(m!==null)m.return=g,R=m;else for(;R!==null;){g=R;var h=g.sibling,k=g.return;if(qu(g),g===d){R=null;break}if(h!==null){h.return=k,R=h;break}R=k}}}var x=i.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var j=E.sibling;E.sibling=null,E=j}while(E!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,R=p;break e}R=i.return}}var u=e.current;for(R=u;R!==null;){l=R;var c=l.child;if(l.subtreeFlags&2064&&c!==null)c.return=l,R=c;else e:for(l=u;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Co(9,a)}}catch(y){Z(a,a.return,y)}if(a===l){R=null;break e}var f=a.sibling;if(f!==null){f.return=a.return,R=f;break e}R=a.return}}if(z=o,Ft(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{$=n,Ae.transition=t}}return!1}function Xa(e,t,n){t=vn(n,t),t=Mu(e,t,1),e=wt(e,t,1),t=he(),e!==null&&(ur(e,1,t),Se(e,t))}function Z(e,t,n){if(e.tag===3)Xa(e,e,n);else for(;t!==null;){if(t.tag===3){Xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=vn(n,e),e=$u(t,e,1),t=wt(t,e,1),e=he(),t!==null&&(ur(t,1,e),Se(t,e));break}}t=t.return}}function Fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>J()-Dl?bt(e,0):Il|=n),Se(e,t)}function lc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=he();e=rt(e,t),e!==null&&(ur(e,t,n),Se(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lc(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),lc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,vp(e,t,n);ve=!!(e.flags&131072)}else ve=!1,K&&t.flags&1048576&&du(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var o=hn(t,pe.current);dn(t,n),o=Fl(null,t,r,e,o,n);var i=Nl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,Jr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xl(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Di(t,r,e,n),t=Mi(null,t,r,!0,i,n)):(t.tag=0,K&&i&&yl(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Op(r),e=be(r,e),o){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Ua(null,t,r,e,n);break e;case 11:t=Ma(null,t,r,e,n);break e;case 14:t=$a(null,t,r,be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),zi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Ua(e,t,r,o,n);case 3:e:{if(Bu(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yu(e,t),oo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vn(Error(S(423)),t),t=Va(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(S(424)),t),t=Va(e,t,r,n,o);break e}else for(Ce=vt(t.stateNode.containerInfo.firstChild),xe=t,K=!0,Me=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===o){t=ot(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&Oi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Pi(r,o)?l=null:i!==null&&Pi(r,i)&&(t.flags|=32),Wu(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&Oi(t),null;case 13:return Hu(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Ma(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(no,r._currentValue),r._currentValue=l,i!==null)if(Ve(i.value,l)){if(i.children===o.children&&!we.current){t=ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=et(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Li(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Li(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=je(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=be(r,t.pendingProps),o=be(r.type,o),$a(e,t,r,o,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:be(r,o),Mr(e,t),t.tag=1,ke(r)?(e=!0,Jr(t)):e=!1,dn(t,n),zu(t,r,o),Di(t,r,o,n),Mi(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return Vu(e,t,n)}throw Error(S(156,t.tag))};function sc(e,t){return Is(e,t)}function jp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new jp(e,t,n,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ll)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")$l(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gt:return zt(n.children,o,i,t);case ol:l=8,o|=8;break;case li:return e=Ne(12,n,t,o|2),e.elementType=li,e.lanes=i,e;case ai:return e=Ne(13,n,t,o),e.elementType=ai,e.lanes=i,e;case si:return e=Ne(19,n,t,o),e.elementType=si,e.lanes=i,e;case vs:return _o(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gs:l=10;break e;case ys:l=9;break e;case il:l=11;break e;case ll:l=14;break e;case ut:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ne(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function _o(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=vs,e.lanes=n,e.stateNode={isHidden:!1},e}function ni(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ri(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ul(e,t,n,r,o,i,l,a,s){return e=new Lp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(i),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uc(e){if(!e)return xt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ke(n))return uu(e,n,t)}return t}function cc(e,t,n,r,o,i,l,a,s){return e=Ul(n,r,!0,e,o,i,l,a,s),e.context=uc(null),n=e.current,r=he(),o=St(n),i=et(r,o),i.callback=t??null,wt(n,i,o),e.current.lanes=o,ur(e,o,r),Se(e,r),e}function To(e,t,n,r){var o=t.current,i=he(),l=St(o);return n=uc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(o,t,l),e!==null&&(Ue(e,o,l,i),Dr(e,o,l)),l}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Za(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vl(e,t){Za(e,t),(e=e.alternate)&&Za(e,t)}function Dp(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wl(e){this._internalRoot=e}Ro.prototype.render=Wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));To(e,t,null,null)};Ro.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){To(null,e,null,null)}),t[nt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Bs(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ja(){}function bp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=fo(l);i.call(d)}}var l=cc(t,r,e,0,null,!1,!1,"",Ja);return e._reactRootContainer=l,e[nt]=l.current,Jn(e.nodeType===8?e.parentNode:e),Wt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var d=fo(s);a.call(d)}}var s=Ul(e,0,!1,null,null,!1,!1,"",Ja);return e._reactRootContainer=s,e[nt]=s.current,Jn(e.nodeType===8?e.parentNode:e),Wt(function(){To(t,s,n,r)}),s}function Fo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=fo(l);a.call(s)}}To(t,l,e,o)}else l=bp(n,t,e,o,r);return fo(l)}$s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(ul(t,n|1),Se(t,J()),!(z&6)&&(wn=J()+500,Ft()))}break;case 13:Wt(function(){var r=rt(e,1);if(r!==null){var o=he();Ue(r,e,1,o)}}),Vl(e,1)}};cl=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=he();Ue(t,e,134217728,n)}Vl(e,134217728)}};Us=function(e){if(e.tag===13){var t=St(e),n=rt(e,t);if(n!==null){var r=he();Ue(n,e,t,r)}Vl(e,t)}};Vs=function(){return $};Ws=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};vi=function(e,t,n){switch(t){case"input":if(di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=wo(r);if(!o)throw Error(S(90));ks(r),di(r,o)}}}break;case"textarea":Es(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Fs=bl;Ns=Wt;var zp={usingClientEntryPoint:!1,Events:[dr,Jt,wo,Rs,Ps,bl]},An={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{mo=Nr.inject(Mp),Ye=Nr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(t))throw Error(S(200));return Ip(e,t,null,n)};Te.createRoot=function(e,t){if(!Bl(e))throw Error(S(299));var n=!1,r="",o=dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ul(e,1,!1,null,null,n,!1,r,o),e[nt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Wl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Os(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Wt(e)};Te.hydrate=function(e,t,n){if(!Po(t))throw Error(S(200));return Fo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Bl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=dc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=cc(t,null,e,1,n??null,o,!1,i,l),e[nt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ro(t)};Te.render=function(e,t,n){if(!Po(t))throw Error(S(200));return Fo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Po(e))throw Error(S(40));return e._reactRootContainer?(Wt(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Te.unstable_batchedUpdates=bl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Po(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Fo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc)}catch(e){console.error(e)}}pc(),ps.exports=Te;var $p=ps.exports,es=$p;oi.createRoot=es.createRoot,oi.hydrateRoot=es.hydrateRoot;const Up=(e,t,n)=>A.useCallback(o=>{if(n<0)return[0,e(o.join(`
`)+`

`)];const i=Math.ceil(n),l=Math.max(t-i,0),a=Math.min(t+i,o.length),s=o.slice(l,a),d=e(s.join(`
`)+`

`);return[l,d]},[e,t,n]),Vp=A.forwardRef((e,t)=>{const{code:n,highlight:r,visibleLine:o,visibleLineCount:i,fontSize:l,scrollWidth:a,theme:s}=e,d=Up(r,o,i),{backgroundColor:g,color:m}=s,h=n.split(`
`),k=h.length,[x,E]=d(h),j=A.useMemo(()=>k*l+l,[k,l]),p=A.useMemo(()=>x*l,[x,l]),u=typeof E=="string";return P.jsx("div",{ref:t,className:"easy-editor-display",style:{backgroundColor:g},"aria-hidden":!0,children:P.jsx("pre",{className:"easy-editor-display-pre",style:{height:j},children:P.jsx("code",{className:"easy-editor-display-code",style:{width:a+l,color:m,top:p},children:u?void 0:E,dangerouslySetInnerHTML:u?{__html:E}:void 0})})})}),Wp=e=>{const t=A.useCallback((l,a,s)=>{const d=l.substring(0,a),g=l.substring(s);return[d+" ".repeat(e)+g,a+e,s+e]},[e]),n=A.useCallback((l,a,s)=>{const g=(l.substring(0,a).match(/\n/g)||[]).length,m=l.split(`
`),h=m[g],k=new RegExp(`^ {0,${e}}`),E=h.match(k)[0].length;return E===0?[l,a,s]:(m[g]=h.replace(k,""),[m.join(`
`),a-E,s-E])},[e]),r=A.useCallback((l,a,s)=>{const d=l.split(`
`),m=(l.substring(0,a).match(/\n/g)||[]).length,h=d.slice(0,m),x=(l.substring(0,s).match(/\n/g)||[]).length,E=d.slice(x+1),j=d.slice(m,x+1);return[h,j,E]},[]),o=A.useCallback((l,a,s)=>{const[d,g,m]=r(l,a,s);let h=a,k=s;const x=" ".repeat(e),E=g.map((j,p)=>(p===0&&(h+=e),k+=e,`${x}${j}`));return[[...d,...E,...m].join(`
`),h,k]},[e,r]),i=A.useCallback((l,a,s)=>{const[d,g,m]=r(l,a,s);let h=a,k=s;const x=g.map((E,j)=>{const p=new RegExp(`^ {0,${e}}`),c=E.match(p)[0].length;return c===0?E:(j===0&&(h-=c),k-=c,E.replace(p,""))});return[[...d,...x,...m].join(`
`),h,k]},[e,r]);return A.useCallback((l,a,s,d)=>a===s?d?n(l,a,s):t(l,a,s):d?i(l,a,s):o(l,a,s),[t,n,o,i])},_t={border:"1px solid black",backgroundColor:"white",color:"black",numbersBackgroundColor:"#f5f5f5",numbersColor:"#6c6c6c",numbersBorder:"1px solid #ddd",caretColor:"black",font:"Fira code, Fira Mono, Consolas, Menlo, Courier, monospace",fontSize:16},Bp=A.memo(A.forwardRef((e,t)=>{const{lineCount:n,showLineNumbers:r,theme:o}=e;if(r)return P.jsx("pre",{className:"easy-editor-line-numbers",ref:t,style:{fontSize:o.fontSize,borderRight:o.numbersBorder,backgroundColor:o.numbersBackgroundColor,color:o.numbersColor},"aria-hidden":!0,children:Array.from({length:n},(i,l)=>l+1).join(`
`)+`

`})})),Hp=(e,t)=>{const n=e===void 0,[r,o]=A.useState(n?"":e),i=A.useCallback(l=>{o(l),t(l)},[t]);return!n&&e!==r&&o(e),[r,n?i:t]},Yp=()=>{const e=A.useCallback((n,r,o)=>n.slice(0,o)+r+n.slice(o),[]),t=A.useMemo(()=>{const n=[["(",["(",")"]],[")",["(",")"]],["[",["[","]"]],["]",["[","]"]],["{",["{","}"]],["}",["{","}"]],["<",["<",">"]],[">",["<",">"]],["'",["'","'"]],['"',['"','"']],["`",["`","`"]]];return new Map(n)},[]);return A.useCallback((n,r,o,i)=>{const l=t.get(r);if(!l)return n;const[a,s]=l;return e(e(n,s,i),a,o)},[e,t])},Kp=()=>A.useCallback((e,t)=>{const n=e.substring(0,t),r=n.split(`
`),i=r[r.length-1].match(/^ +/),l=i?i[0].length:0,a=" ".repeat(l),s=`${n}
${a}${e.substring(t)}`,d=r.length+1,g=t+a.length+1;return[d,s,g]},[]),No=e=>{var b;const{value:t=void 0,onChange:n=()=>{},placeholder:r,highlight:o=L=>P.jsx(P.Fragment,{children:L}),dynamicHighlight:i=!0,readonly:l=!1,wrapParens:a=!0,autoIndent:s=!0,trapTab:d=!1,tabWidth:g=2,showLineNumbers:m=!0,theme:h=_t}=e,{border:k,caretColor:x,font:E,fontSize:j,color:p,backgroundColor:u}=h,[c,f]=Hp(t,n),[y,v]=A.useState(0),[w,T]=A.useState(c.split(`
`).length),C=A.useRef(null),F=A.useRef(null),M=A.useRef(null),ie=Wp(g),Le=Yp(),lt=Kp(),Qe=A.useMemo(()=>i&&C.current?Math.ceil(C.current.clientHeight/j):-1,[C.current,j]),Nt=A.useCallback(L=>{const I=L.target.value,H=L.target.selectionStart,X=(I.substring(0,H).match(/\n/g)||[]).length;T((I.match(/\n/g)||[]).length+1),v(X),f(I)},[]),at=A.useCallback(L=>{var Ie,Ge;const I=L.currentTarget.scrollTop,H=L.currentTarget.scrollLeft;(Ie=M.current)==null||Ie.scroll({top:I,left:H,behavior:"instant"}),(Ge=F.current)==null||Ge.scroll({top:I,behavior:"instant"});const Y=Math.floor(I/j),X=Math.ceil(Qe/2);v(Y+X)},[j,Qe]),_=A.useCallback(L=>{L.preventDefault();const I=L.currentTarget.value,H=L.currentTarget.selectionStart,Y=L.currentTarget.selectionEnd,X=L.shiftKey,[Ie,Ge,At]=ie(I,H,Y,X);f(Ie),queueMicrotask(()=>{C.current&&(H!==Y&&(C.current.selectionStart=Ge),C.current.selectionEnd=At)})},[ie]),N=A.useCallback(L=>{const I=L.currentTarget.selectionStart,H=L.currentTarget.selectionEnd;if(I===H)return;L.preventDefault();const Y=L.currentTarget.value,X=Le(Y,L.key,I,H);f(X),queueMicrotask(()=>{C.current&&(C.current.selectionStart=I+1,C.current.selectionEnd=H+1)})},[Le]),O=A.useCallback(L=>{const I=L.currentTarget.selectionStart,H=L.currentTarget.selectionEnd;if(I!==H)return;L.preventDefault();const Y=L.currentTarget.value,[X,Ie,Ge]=lt(Y,I),At=Qe+Math.floor(L.currentTarget.scrollTop/j);v(X),T((Ie.match(/\n/g)||[]).length+1),f(Ie),queueMicrotask(()=>{C.current&&(C.current.selectionEnd=Ge,X>=At&&(C.current.scrollTop+=j),C.current.scrollLeft=0)})},[Qe,j,lt]),U=A.useCallback(L=>{const I=L.key;d&&I==="Tab"?_(L):a&&/[\[\]{}()<>\"'`]/g.test(I)?N(L):s&&I==="Enter"&&O(L)},[_,O]);return A.useEffect(()=>{const L=()=>{if(!C.current)return;const H=Math.ceil(C.current.clientHeight/j),Y=Math.floor(C.current.scrollTop/j),X=Math.ceil(H/2);v(Y+X)},I=new ResizeObserver(L);return C.current&&I.observe(C.current),window.addEventListener("resize",L),()=>{C.current&&I.unobserve(C.current),window.removeEventListener("resize",L)}},[]),P.jsxs("div",{className:"easy-editor",style:{border:k,font:E,fontSize:j,lineHeight:1},children:[P.jsx(Bp,{showLineNumbers:m,lineCount:w,theme:h,ref:F}),P.jsxs("div",{className:"editor-container",children:[P.jsx("textarea",{className:"easy-editor-input",wrap:"off",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,onChange:Nt,onScroll:at,onKeyDown:U,ref:C,style:{caretColor:x,scrollbarColor:`${p} ${u}`},value:c,disabled:l,"aria-label":"React Easy Code Editor","aria-readonly":l,placeholder:r}),P.jsx(Vp,{ref:M,code:c,highlight:o,visibleLine:y,visibleLineCount:Qe,fontSize:j,scrollWidth:((b=C.current)==null?void 0:b.scrollWidth)||0,theme:h})]})]})},Bt={border:"1px solid #686868",backgroundColor:"#18181b",color:"rgb(188, 188, 188)",numbersBackgroundColor:"#18181b",numbersColor:"#686868",numbersBorder:"1px solid #686868",caretColor:"#f5f5f5",font:"Fira code, Fira Mono, Consolas, Menlo, Courier, monospace",fontSize:16},Qp=`<!-- Welcome to the <ReactEasyCodeEditor /> real-time demo! -->
<style>
#react-icon {
    animation: rotating 20s linear infinite;
    height: 150px;
    padding: 10px
}
#description {
    color: gray;
}
#install {
    font-style: italic;
    background-color: var(--background-color);
    text-align: center;
    color: rgb(188, 188, 188);
    padding: 20px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
.link {
    color: #61DBFB;
}
.link:hover {
    color: rgb(188, 188, 188);
}
</style>
<img id="react-icon" src="./react.svg" alt="react"></img>
<h1>
    React Easy Code Editor
</h1>
<a class="link" href="https://www.npmjs.com/package/react-easy-code-editor">v1.1.1</a>
<h3 id="description">
    An easy to use react based code editor component library.
</h3>
<p>
    Check out the <a class="link" href="https://github.com/DanielCrosby76/react-easy-code-editor">github</a>
    or install the package yourself:
</p>
<div id="install">npm i react-easy-code-editor</div>
<p id="edit">
    Edit the code to see changes on the page in real time.
</p>`;var fc={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(c){return c instanceof s?new s(c.type,u(c.content),c.alias):Array.isArray(c)?c.map(u):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(c,f){f=f||{};var y,v;switch(a.util.type(c)){case"Object":if(v=a.util.objId(c),f[v])return f[v];y={},f[v]=y;for(var w in c)c.hasOwnProperty(w)&&(y[w]=u(c[w],f));return y;case"Array":return v=a.util.objId(c),f[v]?f[v]:(y=[],f[v]=y,c.forEach(function(T,C){y[C]=u(T,f)}),y);default:return c}},getLanguage:function(u){for(;u;){var c=o.exec(u.className);if(c)return c[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,c){u.className=u.className.replace(RegExp(o,"gi"),""),u.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(y){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(u){var c=document.getElementsByTagName("script");for(var f in c)if(c[f].src==u)return c[f]}return null}},isActive:function(u,c,f){for(var y="no-"+c;u;){var v=u.classList;if(v.contains(c))return!0;if(v.contains(y))return!1;u=u.parentElement}return!!f}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(u,c){var f=a.util.clone(a.languages[u]);for(var y in c)f[y]=c[y];return f},insertBefore:function(u,c,f,y){y=y||a.languages;var v=y[u],w={};for(var T in v)if(v.hasOwnProperty(T)){if(T==c)for(var C in f)f.hasOwnProperty(C)&&(w[C]=f[C]);f.hasOwnProperty(T)||(w[T]=v[T])}var F=y[u];return y[u]=w,a.languages.DFS(a.languages,function(M,ie){ie===F&&M!=u&&(this[M]=w)}),w},DFS:function u(c,f,y,v){v=v||{};var w=a.util.objId;for(var T in c)if(c.hasOwnProperty(T)){f.call(c,T,c[T],y||T);var C=c[T],F=a.util.type(C);F==="Object"&&!v[w(C)]?(v[w(C)]=!0,u(C,f,null,v)):F==="Array"&&!v[w(C)]&&(v[w(C)]=!0,u(C,f,T,v))}}},plugins:{},highlightAll:function(u,c){a.highlightAllUnder(document,u,c)},highlightAllUnder:function(u,c,f){var y={callback:f,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var v=0,w;w=y.elements[v++];)a.highlightElement(w,c===!0,y.callback)},highlightElement:function(u,c,f){var y=a.util.getLanguage(u),v=a.languages[y];a.util.setLanguage(u,y);var w=u.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(w,y);var T=u.textContent,C={element:u,language:y,grammar:v,code:T};function F(ie){C.highlightedCode=ie,a.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,a.hooks.run("after-highlight",C),a.hooks.run("complete",C),f&&f.call(C.element)}if(a.hooks.run("before-sanity-check",C),w=C.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!C.code){a.hooks.run("complete",C),f&&f.call(C.element);return}if(a.hooks.run("before-highlight",C),!C.grammar){F(a.util.encode(C.code));return}if(c&&r.Worker){var M=new Worker(a.filename);M.onmessage=function(ie){F(ie.data)},M.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else F(a.highlight(C.code,C.grammar,C.language))},highlight:function(u,c,f){var y={code:u,grammar:c,language:f};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),s.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(u,c){var f=c.rest;if(f){for(var y in f)c[y]=f[y];delete c.rest}var v=new m;return h(v,v.head,u),g(u,v,c,v.head,0),x(v)},hooks:{all:{},add:function(u,c){var f=a.hooks.all;f[u]=f[u]||[],f[u].push(c)},run:function(u,c){var f=a.hooks.all[u];if(!(!f||!f.length))for(var y=0,v;v=f[y++];)v(c)}},Token:s};r.Prism=a;function s(u,c,f,y){this.type=u,this.content=c,this.alias=f,this.length=(y||"").length|0}s.stringify=function u(c,f){if(typeof c=="string")return c;if(Array.isArray(c)){var y="";return c.forEach(function(F){y+=u(F,f)}),y}var v={type:c.type,content:u(c.content,f),tag:"span",classes:["token",c.type],attributes:{},language:f},w=c.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(v.classes,w):v.classes.push(w)),a.hooks.run("wrap",v);var T="";for(var C in v.attributes)T+=" "+C+'="'+(v.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+T+">"+v.content+"</"+v.tag+">"};function d(u,c,f,y){u.lastIndex=c;var v=u.exec(f);if(v&&y&&v[1]){var w=v[1].length;v.index+=w,v[0]=v[0].slice(w)}return v}function g(u,c,f,y,v,w){for(var T in f)if(!(!f.hasOwnProperty(T)||!f[T])){var C=f[T];C=Array.isArray(C)?C:[C];for(var F=0;F<C.length;++F){if(w&&w.cause==T+","+F)return;var M=C[F],ie=M.inside,Le=!!M.lookbehind,lt=!!M.greedy,Qe=M.alias;if(lt&&!M.pattern.global){var Nt=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,Nt+"g")}for(var at=M.pattern||M,_=y.next,N=v;_!==c.tail&&!(w&&N>=w.reach);N+=_.value.length,_=_.next){var O=_.value;if(c.length>u.length)return;if(!(O instanceof s)){var U=1,b;if(lt){if(b=d(at,N,u,Le),!b||b.index>=u.length)break;var Y=b.index,L=b.index+b[0].length,I=N;for(I+=_.value.length;Y>=I;)_=_.next,I+=_.value.length;if(I-=_.value.length,N=I,_.value instanceof s)continue;for(var H=_;H!==c.tail&&(I<L||typeof H.value=="string");H=H.next)U++,I+=H.value.length;U--,O=u.slice(N,I),b.index-=N}else if(b=d(at,0,O,Le),!b)continue;var Y=b.index,X=b[0],Ie=O.slice(0,Y),Ge=O.slice(Y+X.length),At=N+O.length;w&&At>w.reach&&(w.reach=At);var fr=_.prev;Ie&&(fr=h(c,fr,Ie),N+=Ie.length),k(c,fr,U);var hc=new s(T,ie?a.tokenize(X,ie):X,Qe,X);if(_=h(c,fr,hc),Ge&&h(c,_,Ge),U>1){var Ao={cause:T+","+F,reach:At};g(u,c,f,_.prev,N,Ao),w&&Ao.reach>w.reach&&(w.reach=Ao.reach)}}}}}}function m(){var u={value:null,prev:null,next:null},c={value:null,prev:u,next:null};u.next=c,this.head=u,this.tail=c,this.length=0}function h(u,c,f){var y=c.next,v={value:f,prev:c,next:y};return c.next=v,y.prev=v,u.length++,v}function k(u,c,f){for(var y=c.next,v=0;v<f&&y!==u.tail;v++)y=y.next;c.next=y,y.prev=c,u.length-=v}function x(u){for(var c=[],f=u.head.next;f!==u.tail;)c.push(f.value),f=f.next;return c}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(u){var c=JSON.parse(u.data),f=c.language,y=c.code,v=c.immediateClose;r.postMessage(a.highlight(y,a.languages[f],f)),v&&r.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function j(){a.manual||a.highlightAll()}if(!a.manual){var p=document.readyState;p==="loading"||p==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",j):window.requestAnimationFrame?window.requestAnimationFrame(j):window.setTimeout(j,16)}return a}(t);e.exports&&(e.exports=n),typeof Hl<"u"&&(Hl.Prism=n)})(fc);var Tt=fc.exports;const Gp=()=>{const[e,t]=A.useState(Qp),[n,r]=A.useState(e),[o,i]=A.useTransition(),a=A.useContext(Cn)==="dark"?Bt:_t,s=A.useCallback(g=>{t(g),i(()=>r(g))},[]),d=A.useCallback(g=>Tt.highlight(g,Tt.languages.html),[]);return P.jsx("div",{id:"real-time-preview",children:P.jsxs("div",{id:"real-time-preview-container",children:[P.jsx("div",{id:"editor-container",children:P.jsx(No,{value:e,onChange:s,highlight:d,theme:{...a,border:"none",backgroundColor:"transparent"},showLineNumbers:!1})}),P.jsx("div",{id:"output",dangerouslySetInnerHTML:{__html:`${n}<p id="desktop-site">Note: the demo code editors are only accessible on larger screens.</p>`}})]})})},qp=`/**
 * Welcome to the <ReactEasyCodeEditor /> performance demo!
 * This file is ~3000 lines long.
 *
 * Both react-simple-code-editor and react-textarea-code-editor
 * run into major performance issue with files of signifigantly smaller size.
 *
 * Note: This demo code is licensed under the MIT license.
 * Source: react.development.js
 */
"use strict";

if (process.env.NODE_ENV !== "production") {
  (function () {
    "use strict";

    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function"
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
    var ReactVersion = "18.3.1";

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object") {
        return null;
      }

      var maybeIterator =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === "function") {
        return maybeIterator;
      }

      return null;
    }

    /**
     * Keeps track of the current dispatcher.
     */
    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null,
    };

    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */
    var ReactCurrentBatchConfig = {
      transition: null,
    };

    var ReactCurrentActQueue = {
      current: null,
      // Used to reproduce behavior of "batchedUpdates" in legacy mode.
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
    };

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null,
    };

    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }

    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.

      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ""; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation

        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || "";
        }

        return stack;
      };
    }

    // -----------------------------------------------------------------------------

    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing

    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.

    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
    };

    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    }

    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        {
          for (
            var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          printWarning("warn", format, args);
        }
      }
    }
    function error(format) {
      {
        {
          for (
            var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning("error", format, args);
        }
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== "") {
          format += "%s";
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion

        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName =
          (_constructor && (_constructor.displayName || _constructor.name)) || "ReactClass";
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error(
          "Can't call %s on a component that is not yet mounted. " +
            "This is a no-op, but it might indicate a bug in your application. " +
            'Instead, assign to "this.state" directly or define a "state = {};" ' +
            "class property with the desired state in the %s component.",
          callerName,
          componentName
        );

        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */

    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but "setState" was not called.
       *
       * This will not invoke "shouldComponentUpdate", but it will invoke
       * "componentWillUpdate" and "componentDidUpdate".
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, "forceUpdate");
      },

      /**
       * Replaces all of the state. Always use this or "setState" to mutate state.
       * You should treat "this.state" as immutable.
       *
       * There is no guarantee that "this.state" will be immediately updated, so
       * accessing "this.state" after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, "replaceState");
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, "setState");
      },
    };

    var assign = Object.assign;

    var emptyObject = {};

    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat "this.state" as immutable.
     *
     * There is no guarantee that "this.state" will be immediately updated, so
     * accessing "this.state" after calling this method may return the old value.
     *
     * There is no guarantee that calls to "setState" will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (
        typeof partialState !== "object" &&
        typeof partialState !== "function" &&
        partialState != null
      ) {
        throw new Error(
          "setState(...): takes an object of state variables to update or a " +
            "function which returns an object of state variables."
        );
      }

      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but "setState" was not called.
     *
     * This will not invoke "shouldComponentUpdate", but it will invoke
     * "componentWillUpdate" and "componentDidUpdate".
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */

    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */

    {
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in " +
            "componentWillUnmount to prevent memory leaks.",
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see " +
            "https://github.com/facebook/react/issues/3236).",
        ],
      };

      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);

            return undefined;
          },
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    // an immutable object with a single mutable value
    function createRef() {
      var refObject = {
        current: null,
      };

      {
        Object.seal(refObject);
      }

      return refObject;
    }

    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

    function isArray(a) {
      return isArrayImpl(a);
    }

    /*
     * The "'' + value" pattern (used in in perf-sensitive code) throws for Symbol
     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
     *
     * The functions in this module will throw an easier-to-understand,
     * easier-to-debug exception with a clear errors message message explaining the
     * problem. (Instead of a confusing exception thrown inside the implementation
     * of the "value" object).
     */
    // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
      {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type =
          (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || "Object";
        return type;
      }
    } // $FlowFixMe only called in DEV, so void return is not possible.

    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }

    function testStringCoercion(value) {
      // If you ended up here by following an exception call stack, here's what's
      // happened: you supplied an object or symbol value to React (as a prop, key,
      // DOM attribute, CSS property, string ref, etc.) and when React tried to
      // coerce it to a string using "'' + value", an exception was thrown.
      //
      // The most common types that will cause this exception are "Symbol" instances
      // and Temporal objects like "Temporal.Instant". But any object that has a
      // "valueOf" or "[Symbol.toPrimitive]" method that throws will also cause this
      // exception. (Library authors do this to prevent users from using built-in
      // numeric operators like "+" or comparison operators like ">=" because custom
      // methods are needed to perform accurate arithmetic or comparison.)
      //
      // To fix the problem, coerce this object or symbol value to a string before
      // passing it to React. The most reliable way is usually "String(value)".
      //
      // To find which value is throwing, check the browser or debugger console.
      // Before this exception was thrown, there should be "console.error" output
      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
      // problem and how that type was used: key, atrribute, input value prop, etc.
      // In most cases, this console output also shows the component and its
      // ancestor components where the exception happened.
      //
      // eslint-disable-next-line react-internal/safe-string-coercion
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error(
            "The provided key is an unsupported type %s." +
              " This value must be coerced to a string before before using it here.",
            typeName(value)
          );

          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
      }
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;

      if (displayName) {
        return displayName;
      }

      var functionName = innerType.displayName || innerType.name || "";
      return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber

    function getContextName(type) {
      return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

    function getComponentNameFromType(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === "number") {
          error(
            "Received an unexpected object in getComponentNameFromType(). " +
              "This is likely a bug in React. Please file an issue."
          );
        }
      }

      if (typeof type === "function") {
        return type.displayName || type.name || null;
      }

      if (typeof type === "string") {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";

        case REACT_PORTAL_TYPE:
          return "Portal";

        case REACT_PROFILER_TYPE:
          return "Profiler";

        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";

        case REACT_SUSPENSE_TYPE:
          return "Suspense";

        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }

      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + ".Consumer";

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + ".Provider";

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, "ForwardRef");

          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;

            if (outerName !== null) {
              return outerName;
            }

            return getComponentNameFromType(type.type) || "Memo";

          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;

            try {
              return getComponentNameFromType(init(payload));
            } catch (x) {
              return null;
            }
          }

          // eslint-disable-next-line no-fallthrough
        }
      }

      return null;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true,
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config, "ref").get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }

      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }

      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;

            error(
              '%s: "key" is not a prop. Trying to access it will result ' +
                'in "undefined" being returned. If you need to access the same ' +
                "value within the child component, you should pass it as a different " +
                "prop. (https://reactjs.org/link/special-props)",
              displayName
            );
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true,
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;

            error(
              '%s: "ref" is not a prop. Trying to access it will result ' +
                'in "undefined" being returned. If you need to access the same ' +
                "value within the child component, you should pass it as a different " +
                "prop. (https://reactjs.org/link/special-props)",
              displayName
            );
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, "ref", {
        get: warnAboutAccessingRef,
        configurable: true,
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (
          typeof config.ref === "string" &&
          ReactCurrentOwner.current &&
          config.__self &&
          ReactCurrentOwner.current.stateNode !== config.__self
        ) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error(
              'Component "%s" contains the string ref "%s". ' +
                "Support for string refs will be removed in a future major release. " +
                "This case cannot be automatically converted to an arrow function. " +
                "We ask you to manually fix this case by using useRef() or createRef() instead. " +
                "Learn more about using refs safely here: " +
                "https://reactjs.org/link/strict-mode-string-ref",
              componentName,
              config.ref
            );

            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where "this" is
     * different from the "owner" when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string "ref"s with arrow
     * functions, and as long as "this" and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */

    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner,
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false,
        }); // self and source are DEV only properties.

        Object.defineProperty(element, "_self", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self,
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, "_source", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source,
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */

    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;

          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }

          key = "" + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.

      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }

        props.children = childArray;
      } // Resolve default props

      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName =
            typeof type === "function" ? type.displayName || type.name || "Unknown" : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }

      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(
        oldElement.type,
        newKey,
        oldElement.ref,
        oldElement._self,
        oldElement._source,
        oldElement._owner,
        oldElement.props
      );
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */

    function cloneElement(element, config, children) {
      if (element === null || element === undefined) {
        throw new Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            element +
            "."
        );
      }

      var propName; // Original props are copied

      var props = assign({}, element.props); // Reserved names are extracted

      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }

          key = "" + config.key;
        } // Remaining properties override existing props

        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.

      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if "object" is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      return (
        typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
      );
    }

    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        "=": "=0",
        ":": "=2",
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return "$" + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = //+/g;

    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */

    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof element === "object" && element !== null && element.key != null) {
        // Explicit key
        {
          checkKeyStringCoercion(element.key);
        }

        return escape("" + element.key);
      } // Implicit key determined by the index in the set

      return index.toString(36);
    }

    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;

      if (type === "undefined" || type === "boolean") {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case "string":
          case "number":
            invokeCallback = true;
            break;

          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }
        }
      }

      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

        if (isArray(mappedChild)) {
          var escapedChildKey = "";

          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + "/";
          }

          mapIntoArray(mappedChild, array, escapedChildKey, "", function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            {
              // The "if" statement here prevents auto-disabling of the safe
              // coercion ESLint rule, so we must manually disable it below.
              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                checkKeyStringCoercion(mappedChild.key);
              }
            }

            mappedChild = cloneAndReplaceKey(
              mappedChild, // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                (mappedChild.key && (!_child || _child.key !== mappedChild.key) // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                  ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  : "") +
                childKey
            );
          }

          array.push(mappedChild);
        }

        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === "function") {
          var iterableChildren = children;

          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn(
                  "Using Maps as children is not supported. " +
                    "Use an array of keyed ReactElements instead."
                );
              }

              didWarnAboutMaps = true;
            }
          }

          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === "object") {
          // eslint-disable-next-line react-internal/safe-string-coercion
          var childrenString = String(children);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (childrenString === "[object Object]"
                ? "object with keys {" + Object.keys(children).join(", ") + "}"
                : childrenString) +
              "). " +
              "If you meant to render a collection of children, use an array " +
              "instead."
          );
        }
      }

      return subtreeCount;
    }

    /**
     * Maps children that are typically specified as "props.children".
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      var count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * "props.children".
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */

    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }

    /**
     * Iterates through children that are typically specified as "props.children".
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(
        children,
        function () {
          forEachFunc.apply(this, arguments); // Don't return anything.
        },
        forEachContext
      );
    }
    /**
     * Flatten a children object (typically specified as "props.children") and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */

    function toArray(children) {
      return (
        mapChildren(children, function (child) {
          return child;
        }) || []
      );
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only "ReactElement" contained in the
     * structure.
     */

    function onlyChild(children) {
      if (!isValidElement(children)) {
        throw new Error("React.Children.only expected to receive a single React element child.");
      }

      return children;
    }

    function createContext(defaultValue) {
      // TODO: Second argument used to be an optional "calculateChangedBits"
      // function. Warn to reserve for future use?
      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null,
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context,
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;

      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;

                error(
                  "Rendering <Context.Consumer.Provider> is not supported and will be removed in " +
                    "a future major release. Did you mean to render <Context.Provider> instead?"
                );
              }

              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            },
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            },
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            },
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            },
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;

                error(
                  "Rendering <Context.Consumer.Consumer> is not supported and will be removed in " +
                    "a future major release. Did you mean to render <Context.Consumer> instead?"
                );
              }

              return context.Consumer;
            },
          },
          displayName: {
            get: function () {
              return context.displayName;
            },
            set: function (displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn(
                  'Setting "displayName" on Context.Consumer has no effect. ' +
                    "You should set it directly on the context with Context.displayName = '%s'.",
                  displayName
                );

                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            },
          },
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }

      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }

      return context;
    }

    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.
        // This might throw either because it's missing or throws. If so, we treat it
        // as still uninitialized and try again next time. Which is the same as what
        // happens if the ctor or any wrappers processing the ctor throws. This might
        // end up fixing it if the resolution was a concurrency bug.

        thenable.then(
          function (moduleObject) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              // Transition to the next state.
              var resolved = payload;
              resolved._status = Resolved;
              resolved._result = moduleObject;
            }
          },
          function (error) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              // Transition to the next state.
              var rejected = payload;
              rejected._status = Rejected;
              rejected._result = error;
            }
          }
        );

        if (payload._status === Uninitialized) {
          // In case, we're still uninitialized, then we're waiting for the thenable
          // to resolve. Set it as pending in the meantime.
          var pending = payload;
          pending._status = Pending;
          pending._result = thenable;
        }
      }

      if (payload._status === Resolved) {
        var moduleObject = payload._result;

        {
          if (moduleObject === undefined) {
            error(
              "lazy: Expected the result of a dynamic imp" +
                "ort() call. " +
                "Instead received: %s

Your code should look like: 
  " + // Break up imports to avoid accidentally parsing them as dependencies.
                "const MyComponent = lazy(() => imp" +
                "ort('./MyComponent'))

" +
                "Did you accidentally put curly braces around the import?",
              moduleObject
            );
          }
        }

        {
          if (!("default" in moduleObject)) {
            error(
              "lazy: Expected the result of a dynamic imp" +
                "ort() call. " +
                "Instead received: %s

Your code should look like: 
  " + // Break up imports to avoid accidentally parsing them as dependencies.
                "const MyComponent = lazy(() => imp" +
                "ort('./MyComponent'))",
              moduleObject
            );
          }
        }

        return moduleObject.default;
      } else {
        throw payload._result;
      }
    }

    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: Uninitialized,
        _result: ctor,
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer,
      };

      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              error(
                'React.lazy(...): It is not supported to assign "defaultProps" to ' +
                  "a lazy component import. Either specify them where the component " +
                  "is defined, or create a wrapping component around it."
              );

              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, "defaultProps", {
                enumerable: true,
              });
            },
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              error(
                'React.lazy(...): It is not supported to assign "propTypes" to ' +
                  "a lazy component import. Either specify them where the component " +
                  "is defined, or create a wrapping component around it."
              );

              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, "propTypes", {
                enumerable: true,
              });
            },
          },
        });
      }

      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error(
            'forwardRef requires a render function but received a "memo" ' +
              "component. Instead of forwardRef(memo(...)), use " +
              "memo(forwardRef(...))."
          );
        } else if (typeof render !== "function") {
          error(
            "forwardRef requires a render function but was given %s.",
            render === null ? "null" : typeof render
          );
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              render.length === 1
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error(
              "forwardRef render functions do not support propTypes or defaultProps. " +
                "Did you accidentally pass a React component?"
            );
          }
        }
      }

      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render,
      };

      {
        var ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name; // The inner component shouldn't inherit this display name in most cases,
            // because the component may be used elsewhere.
            // But it's nice for anonymous functions to inherit the name,
            // so that our component-stack generation logic will display their frames.
            // An anonymous function generally suggests a pattern like:
            //   React.forwardRef((props, ref) => {...});
            // This kind of inner function is not used elsewhere so the side effect is okay.

            if (!render.name && !render.displayName) {
              render.displayName = name;
            }
          },
        });
      }

      return elementType;
    }

    var REACT_MODULE_REFERENCE;

    {
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    }

    function isValidElementType(type) {
      if (typeof type === "string" || typeof type === "function") {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

      if (
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        enableDebugTracing ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        enableLegacyHidden ||
        type === REACT_OFFSCREEN_TYPE ||
        enableScopeAPI ||
        enableCacheElement ||
        enableTransitionTracing
      ) {
        return true;
      }

      if (typeof type === "object" && type !== null) {
        if (
          type.$$typeof === REACT_LAZY_TYPE ||
          type.$$typeof === REACT_MEMO_TYPE ||
          type.$$typeof === REACT_PROVIDER_TYPE ||
          type.$$typeof === REACT_CONTEXT_TYPE ||
          type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE ||
          type.getModuleId !== undefined
        ) {
          return true;
        }
      }

      return false;
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error(
            "memo: The first argument must be a component. Instead " + "received: %s",
            type === null ? "null" : typeof type
          );
        }
      }

      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare,
      };

      {
        var ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name; // The inner component shouldn't inherit this display name in most cases,
            // because the component may be used elsewhere.
            // But it's nice for anonymous functions to inherit the name,
            // so that our component-stack generation logic will display their frames.
            // An anonymous function generally suggests a pattern like:
            //   React.memo((props) => {...});
            // This kind of inner function is not used elsewhere so the side effect is okay.

            if (!type.name && !type.displayName) {
              type.displayName = name;
            }
          },
        });
      }

      return elementType;
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      {
        if (dispatcher === null) {
          error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for" +
              " one of the following reasons:
" +
              "1. You might have mismatching versions of React and the renderer (such as React DOM)
" +
              "2. You might be breaking the Rules of Hooks
" +
              "3. You might have more than one copy of React in the same app
" +
              "See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
        }
      } // Will result in a null access error if accessed outside render phase. We
      // intentionally don't throw our own error because this is in a hot path.
      // Also helps ensure this is inlined.

      return dispatcher;
    }
    function useContext(Context) {
      var dispatcher = resolveDispatcher();

      {
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error(
              "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " +
                "removed in a future major release. Did you mean to call useContext(Context) instead?"
            );
          } else if (realContext.Provider === Context) {
            error(
              "Calling useContext(Context.Provider) is not supported. " +
                "Did you mean to call useContext(Context) instead?"
            );
          }
        }
      }

      return dispatcher.useContext(Context);
    }
    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }
    function useTransition() {
      var dispatcher = resolveDispatcher();
      return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useDeferredValue(value);
    }
    function useId() {
      var dispatcher = resolveDispatcher();
      return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }

    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true,
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props,
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true,
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog,
            }),
            info: assign({}, props, {
              value: prevInfo,
            }),
            warn: assign({}, props, {
              value: prevWarn,
            }),
            error: assign({}, props, {
              value: prevError,
            }),
            group: assign({}, props, {
              value: prevGroup,
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed,
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd,
            }),
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error(
            "disabledDepth fell below zero. " + "This is a bug in React. Please file an issue."
          );
        }
      }
    }

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/
( *(at )?)/);
            prefix = (match && match[1]) || "";
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.

        return "
" + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;

    {
      var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return "";
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }

      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;

      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe

          Object.defineProperty(Fake.prototype, "props", {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            },
          });

          if (typeof Reflect === "object" && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === "string") {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split("
");
          var controlLines = control.stack.split("
");
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = "
" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                    // but we have a user-provided "displayName"
                    // splice it in to make the stack more readable.

                    if (fn.displayName && _frame.includes("<anonymous>")) {
                      _frame = _frame.replace("<anonymous>", fn.displayName);
                    }

                    {
                      if (typeof fn === "function") {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;

        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }

        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.

      var name = fn ? fn.displayName || fn.name : "";
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";

      {
        if (typeof fn === "function") {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }

      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return "";
      }

      if (typeof type === "function") {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === "string") {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }

      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;

            try {
              // Lazy may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
            } catch (x) {}
          }
        }
      }

      return "";
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(
            element.type,
            element._source,
            owner ? owner.type : null
          );
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== "function") {
                // eslint-disable-next-line react-internal/prod-error-codes
                var err = Error(
                  (componentName || "React class") +
                    ": " +
                    location +
                    ' type "' +
                    typeSpecName +
                    '" is invalid; ' +
                    'it must be a function, usually from the "prop-types" package, but received "' +
                    typeof typeSpecs[typeSpecName] +
                    '".' +
                    'This often happens because of typos such as "PropTypes.function" instead of "PropTypes.func".'
                );
                err.name = "Invariant Violation";
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](
                values,
                typeSpecName,
                componentName,
                location,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
              );
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);

              error(
                "%s: type specification of %s" +
                  ' "%s" is invalid; the type checker ' +
                  'function must return "null" or an "Error" but returned a %s. ' +
                  "You may have forgotten to pass an argument to the type checker " +
                  "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                  "shape all require an argument).",
                componentName || "React class",
                location,
                typeSpecName,
                typeof error$1
              );

              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);

              error("Failed %s type: %s", location, error$1.message);

              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(
            element.type,
            element._source,
            owner ? owner.type : null
          );
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;

    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentNameFromType(ReactCurrentOwner.current.type);

        if (name) {
          return '

Check the render method of "' + name + '".';
        }
      }

      return "";
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\/]/, "");
        var lineNumber = source.lineNumber;
        return "

Check your code at " + fileName + ":" + lineNumber + ".";
      }

      return "";
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return "";
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */

    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName =
          typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "

Check the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */

    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = "";

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner =
          " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
      }

      {
        setCurrentlyValidatingElement$1(element);

        error(
          'Each child in a list should have a unique "key" prop.' +
            "%s%s See https://reactjs.org/link/warning-keys for more information.",
          currentComponentErrorInfo,
          childOwner
        );

        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */

    function validateChildKeys(node, parentType) {
      if (typeof node !== "object") {
        return;
      }

      if (isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === "function") {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */

    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === "string") {
          return;
        }

        var propTypes;

        if (typeof type === "function") {
          propTypes = type.propTypes;
        } else if (
          typeof type === "object" &&
          (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)
        ) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentNameFromType(type);
          checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentNameFromType(type);

          error(
            'Component %s declared "PropTypes" instead of "propTypes". Did you misspell the property assignment?',
            _name || "Unknown"
          );
        }

        if (
          typeof type.getDefaultProps === "function" &&
          !type.getDefaultProps.isReactClassApproved
        ) {
          error(
            "getDefaultProps is only used on classic React.createClass " +
              'definitions. Use a static property named "defaultProps" instead.'
          );
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */

    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== "children" && key !== "key") {
            setCurrentlyValidatingElement$1(fragment);

            error(
              'Invalid prop "%s" supplied to "React.Fragment". ' +
                'React.Fragment can only have "key" and "children" props.',
              key
            );

            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);

          error('Invalid attribute "ref" supplied to "React.Fragment".');

          setCurrentlyValidatingElement$1(null);
        }
      }
    }
    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = "";

        if (
          type === undefined ||
          (typeof type === "object" && type !== null && Object.keys(type).length === 0)
        ) {
          info +=
            " You likely forgot to export your component from the file " +
            "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = "null";
        } else if (isArray(type)) {
          typeString = "array";
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
          info = " Did you accidentally export a JSX literal instead of a component?";
        } else {
          typeString = typeof type;
        }

        {
          error(
            "React.createElement: type is invalid -- expected a string (for " +
              "built-in components) or a class/function (for composite " +
              "components) but got: %s.%s",
            typeString,
            info
          );
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)

      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;

      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;

          warn(
            "React.createFactory() is deprecated and will be removed in " +
              "a future major release. Consider using JSX " +
              "or use React.createElement() directly instead."
          );
        } // Legacy hook: remove it

        Object.defineProperty(validatedFactory, "type", {
          enumerable: false,
          get: function () {
            warn(
              "Factory.type is deprecated. Access the class directly " +
                "before passing it to createFactory."
            );

            Object.defineProperty(this, "type", {
              value: type,
            });
            return type;
          },
        });
      }

      return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    function startTransition(scope, options) {
      var prevTransition = ReactCurrentBatchConfig.transition;
      ReactCurrentBatchConfig.transition = {};
      var currentTransition = ReactCurrentBatchConfig.transition;

      {
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
      }

      try {
        scope();
      } finally {
        ReactCurrentBatchConfig.transition = prevTransition;

        {
          if (prevTransition === null && currentTransition._updatedFibers) {
            var updatedFibersCount = currentTransition._updatedFibers.size;

            if (updatedFibersCount > 10) {
              warn(
                "Detected a large number of updates inside startTransition. " +
                  "If this is due to a subscription please re-write it to use React provided hooks. " +
                  "Otherwise concurrent mode guarantees are off the table."
              );
            }

            currentTransition._updatedFibers.clear();
          }
        }
      }
    }

    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
      if (enqueueTaskImpl === null) {
        try {
          // read require off the module object to get around the bundlers.
          // we don't want them to detect a require and bundle a Node polyfill.
          var requireString = ("require" + Math.random()).slice(0, 7);
          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
          // version of setImmediate, bypassing fake timers if any.

          enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
        } catch (_err) {
          // we're in a browser
          // we can't use regular timers because they may still be faked
          // so we try MessageChannel+postMessage instead
          enqueueTaskImpl = function (callback) {
            {
              if (didWarnAboutMessageChannel === false) {
                didWarnAboutMessageChannel = true;

                if (typeof MessageChannel === "undefined") {
                  error(
                    "This browser does not have a MessageChannel implementation, " +
                      "so enqueuing tasks via await act(async () => ...) will fail. " +
                      "Please file an issue at https://github.com/facebook/react/issues " +
                      "if you encounter this warning."
                  );
                }
              }
            }

            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      }

      return enqueueTaskImpl(task);
    }

    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
      {
        // "act" calls can be nested, so we track the depth. This represents the
        // number of "act" scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;

        if (ReactCurrentActQueue.current === null) {
          // This is the outermost "act" scope. Initialize the queue. The reconciler
          // will detect the queue and use it instead of Scheduler.
          ReactCurrentActQueue.current = [];
        }

        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;

        try {
          // Used to reproduce behavior of "batchedUpdates" in legacy mode. Only
          // set to "true" while the given callback is executed, not for updates
          // triggered during an async event, because this is how the legacy
          // implementation of "act" behaved.
          ReactCurrentActQueue.isBatchingLegacy = true;
          result = callback(); // Replicate behavior of original "act" implementation in legacy mode,
          // which flushed updates immediately after the scope function exits, even
          // if it's an async function.

          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
            var queue = ReactCurrentActQueue.current;

            if (queue !== null) {
              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
              flushActQueue(queue);
            }
          }
        } catch (error) {
          popActScope(prevActScopeDepth);
          throw error;
        } finally {
          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }

        if (result !== null && typeof result === "object" && typeof result.then === "function") {
          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
          // for it to resolve before exiting the current scope.

          var wasAwaited = false;
          var thenable = {
            then: function (resolve, reject) {
              wasAwaited = true;
              thenableResult.then(
                function (returnValue) {
                  popActScope(prevActScopeDepth);

                  if (actScopeDepth === 0) {
                    // We've exited the outermost act scope. Recursively flush the
                    // queue until there's no remaining work.
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  } else {
                    resolve(returnValue);
                  }
                },
                function (error) {
                  // The callback threw an error.
                  popActScope(prevActScopeDepth);
                  reject(error);
                }
              );
            },
          };

          {
            if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
              // eslint-disable-next-line no-undef
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  if (!wasAwaited) {
                    didWarnNoAwaitAct = true;

                    error(
                      "You called act(async () => ...) without await. " +
                        "This could lead to unexpected testing behaviour, " +
                        "interleaving multiple act calls and mixing their " +
                        "scopes. " +
                        "You should - await act(async () => ...);"
                    );
                  }
                });
            }
          }

          return thenable;
        } else {
          var returnValue = result; // The callback is not an async function. Exit the current scope
          // immediately, without awaiting.

          popActScope(prevActScopeDepth);

          if (actScopeDepth === 0) {
            // Exiting the outermost act scope. Flush the queue.
            var _queue = ReactCurrentActQueue.current;

            if (_queue !== null) {
              flushActQueue(_queue);
              ReactCurrentActQueue.current = null;
            } // Return a thenable. If the user awaits it, we'll flush again in
            // case additional work was scheduled by a microtask.

            var _thenable = {
              then: function (resolve, reject) {
                // Confirm we haven't re-entered another "act" scope, in case
                // the user does something weird like await the thenable
                // multiple times.
                if (ReactCurrentActQueue.current === null) {
                  // Recursively flush the queue until there's no remaining work.
                  ReactCurrentActQueue.current = [];
                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                } else {
                  resolve(returnValue);
                }
              },
            };
            return _thenable;
          } else {
            // Since we're inside a nested "act" scope, the returned thenable
            // immediately resolves. The outer scope will flush the queue.
            var _thenable2 = {
              then: function (resolve, reject) {
                resolve(returnValue);
              },
            };
            return _thenable2;
          }
        }
      }
    }

    function popActScope(prevActScopeDepth) {
      {
        if (prevActScopeDepth !== actScopeDepth - 1) {
          error(
            "You seem to have overlapping act() calls, this is not supported. " +
              "Be sure to await previous act() calls before making a new one. "
          );
        }

        actScopeDepth = prevActScopeDepth;
      }
    }

    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              if (queue.length === 0) {
                // No additional work was scheduled. Finish.
                ReactCurrentActQueue.current = null;
                resolve(returnValue);
              } else {
                // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              }
            });
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(returnValue);
        }
      }
    }

    var isFlushing = false;

    function flushActQueue(queue) {
      {
        if (!isFlushing) {
          // Prevent re-entrance.
          isFlushing = true;
          var i = 0;

          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];

              do {
                callback = callback(true);
              } while (callback !== null);
            }

            queue.length = 0;
          } catch (error) {
            // If something throws, leave the remaining callbacks on the queue.
            queue = queue.slice(i + 1);
            throw error;
          } finally {
            isFlushing = false;
          }
        }
      }
    }

    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild,
    };

    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.act = act;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function"
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
  })();
}`,Xp=()=>{const[e,t]=A.useState(qp),n=A.useContext(Cn);return P.jsx("div",{id:"performance",children:P.jsxs("div",{id:"performance-container",children:[P.jsxs("div",{id:"performance-info",children:[P.jsx("h1",{children:"Performance First."}),P.jsxs("p",{id:"performance-info-p",children:["Highlight thousands of code lines efficiently, using some of your favourite libraries such as"," ",P.jsx("a",{className:"performance-link",href:"https://prismjs.com/",children:"prism.js"}),","," ",P.jsx("a",{className:"performance-link",href:"https://highlightjs.org/",children:"highlight.js"})," ","or through a custom function."]})]}),P.jsx("div",{id:"performance-editor",children:P.jsx(No,{value:e,onChange:r=>t(r),highlight:r=>Tt.highlight(r,Tt.languages.js),theme:n==="dark"?Bt:_t})})]})})},Zp=()=>{const e=A.useContext(Cn),[t,n]=A.useState(e==="dark"?Bt:_t),[r,o]=A.useState(JSON.stringify(t,void 0,4)),[i,l]=A.useState(!1),a=e==="dark"?Bt:_t,s=A.useRef(!1);return!s.current&&a!==t&&n(a),P.jsx("div",{id:"theme",children:P.jsxs("div",{id:"theme-container",children:[P.jsx("div",{id:"theme-editor",children:P.jsx(No,{value:r,onChange:d=>{s.current=!0,o(d),n(JSON.parse(d))},highlight:d=>Tt.highlight(d,Tt.languages.js),theme:t,showLineNumbers:i})}),P.jsxs("div",{id:"theme-info",children:[P.jsx("h1",{children:"Customizable."}),P.jsx("p",{id:"theme-info-p",children:"Style the editor component to suit your needs or personal preferences using a simple theme object."}),P.jsxs("p",{id:"toggle-line-numbers",children:[P.jsx("input",{id:"line-numbers-checkbox",type:"checkbox",onChange:()=>l(!i)}),"Show Line Numbers?"]})]})]})})},Jp=`/**
 * Welcome to the <ReactEasyCodeEditor /> basic usage demo!
 *
 * See the github's readme for more info.
 */
import { useState } from "react";
import EasyCodeEditor from "react-easy-code-editor";

// A third party library is not needed for syntax highlighing
// A custom highlight function can be created instead
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; // prismjs offers other themes

// If you prefer highlight.js
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// A style that does not affect font sizing needs to be used
// import "highlight.js/styles/qtcreator-light.css";

// hljs.registerLanguage("javascript", javascript);

const App = () => {
  // Optionally controll the editors state
  const [code, setCode] = useState('console.log("Hello, World!");');
  return (
    // The editor will fill the width/height of its parent
    <div style={{ height: 500 }}>
      <EasyCodeEditor
        // The editor will manage its own state when no value is passed in
        value={code}
        // Handle updated code
        onChange={(code) => setCode(code)}
        // Handle syntax highlighting
        highlight={(code) => highlight(code, languages.js)}
        // For highlight.js
        // highlight={(code) => hljs.highlight(code, { language: "javascript" }).value}
      />
    </div>
  );
};

export default App;`,ef=()=>{const[e,t]=A.useState(Jp),n=A.useContext(Cn);return P.jsx("div",{id:"simple",children:P.jsxs("div",{id:"simple-container",children:[P.jsxs("div",{id:"simple-info",children:[P.jsx("h1",{children:"Simple."}),P.jsx("p",{id:"simple-info-p",children:"Ready to use out of the box. Perfect for example code embeds, forms where code can be submitted, or simply as an input with line numbering."})]}),P.jsx("div",{id:"simple-editor",children:P.jsx(No,{value:e,onChange:r=>t(r),highlight:r=>Tt.highlight(r,Tt.languages.jsx),theme:n==="dark"?Bt:_t,dynamicHighlight:!1,readonly:!0})})]})})},tf=()=>{const e=A.useContext(Cn),n=(e==="dark"?Bt:_t).backgroundColor.replace("#",""),r=e==="dark"?"aliceblue":"202024";return P.jsx("div",{id:"powered",children:P.jsxs("div",{id:"powered-container",children:[P.jsx("img",{className:"powered-container-img",src:`https://shields.io/badge/Node-${n}?logo=nodedotjs&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:"powered-container-img",src:`https://shields.io/badge/React-${n}?logo=React&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:"powered-container-img",src:`https://shields.io/badge/TypeScript-${n}?logo=TypeScript&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:"powered-container-img",src:`https://img.shields.io/badge/vite-${n}?style=flat-square&logo=vite&logoColor=${r}`}),P.jsx("img",{className:"powered-container-img",src:`https://img.shields.io/badge/vitest-${n}?style=flat-square&logo=vitest&logoColor=${r}`})]})})};Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(s,d){return s=s.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(s,d)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(s){return s?typeof s=="string"?s:typeof s.content=="string"?s.content:s.content.map(l).join(""):""},a=function(s){for(var d=[],g=0;g<s.length;g++){var m=s[g],h=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===l(m.content[0].content[1])&&d.pop():m.content[m.content.length-1].content==="/>"||d.push({tagName:l(m.content[0].content[1]),openedBraces:0}):d.length>0&&m.type==="punctuation"&&m.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?d[d.length-1].openedBraces--:h=!0),(h||typeof m=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var k=l(m);g<s.length-1&&(typeof s[g+1]=="string"||s[g+1].type==="plain-text")&&(k+=l(s[g+1]),s.splice(g+1,1)),g>0&&(typeof s[g-1]=="string"||s[g-1].type==="plain-text")&&(k=l(s[g-1])+k,s.splice(g-1,1),g--),s[g]=new e.Token("plain-text",k,null,k)}m.content&&typeof m.content!="string"&&a(m.content)}};e.hooks.add("after-tokenize",function(s){s.language!=="jsx"&&s.language!=="tsx"||a(s.tokens)})})(Prism);const Cn=A.createContext("dark"),nf=()=>{const[e,t]=A.useState("dark"),n=e==="dark"?Bt:_t;return document.documentElement.style.setProperty("--background-color",n.backgroundColor),document.documentElement.style.setProperty("--background-secondary-color",e==="dark"?"#202024":"#ececec"),document.documentElement.style.setProperty("--text-color",n.color),document.documentElement.style.setProperty("--text-secondary-color",e==="dark"?"aliceblue":"#202024"),P.jsxs(P.Fragment,{children:[P.jsx("div",{id:"header",children:P.jsxs("div",{id:"header-container",children:[P.jsxs("span",{id:"header-text-container",children:[P.jsx("img",{id:"header-icon",src:"./react.svg",alt:"react"}),P.jsx("span",{id:"header-text",children:"React Easy Code Editor"})]}),P.jsx("div",{id:"theme-select",onClick:()=>t(e==="dark"?"light":"dark"),children:e==="dark"?"🌒":"☀️"})]})}),P.jsxs(Cn.Provider,{value:e,children:[P.jsx(Gp,{}),P.jsx(Xp,{}),P.jsx(Zp,{}),P.jsx(ef,{}),P.jsx(tf,{})]})]})};oi.createRoot(document.getElementById("root")).render(P.jsx(A.StrictMode,{children:P.jsx(nf,{})}));
