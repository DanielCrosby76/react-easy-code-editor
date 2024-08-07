(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._editorDisplay_5sge9_1{position:absolute;outline:none;box-sizing:border-box;height:100%;width:100%;overflow:hidden;margin:0;padding:5px;font:inherit;line-height:inherit}._editorDisplayPre_5sge9_27{position:relative;box-sizing:border-box;margin:0;font:inherit;line-height:inherit}._editorDisplayCode_5sge9_45{position:absolute;box-sizing:border-box;display:inline-block;margin:0;font:inherit;line-height:inherit}._editorLineNumbers_1y25c_1{box-sizing:border-box;overflow:hidden;text-align:right;padding:5px 10px 10px;margin:0;font:inherit;line-height:inherit;pointer-events:none;-webkit-user-select:none;user-select:none}._easyCodeEditor_5i6jr_1{all:initial;position:relative;display:flex;box-sizing:border-box;width:100%;height:100%}._easyCodeEditorContainer_5i6jr_19{position:relative;display:flex;flex:1;font:inherit;line-height:inherit}._easyCodeEditorInput_5i6jr_35{box-sizing:border-box;height:100%;width:100%;border:none;resize:none;scrollbar-width:thin;outline:none;margin:0;padding:5px;color:transparent;background:transparent;z-index:999;font:inherit;line-height:inherit}._header_1l3da_1{padding:15px;border-bottom:1px solid var(--text-secondary-color)}._headerContainer_1l3da_11{display:flex;justify-content:space-between;margin:auto;width:75%;max-width:1500px}._headerTextContainer_1l3da_27{display:flex;align-items:center}._headerIcon_1l3da_37{animation:_rotating_1l3da_1 20s linear infinite;margin-right:10px}._headerText_1l3da_27{font-weight:700;font-size:large}._themeSelect_1l3da_57{display:flex;align-items:center;cursor:pointer}@keyframes _rotating_1l3da_1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (width <= 1024px){._header_1l3da_1{margin-bottom:1px}._headerContainer_1l3da_11{width:100%}}._realTimePreview_3hwhe_1{width:100%;height:600px;background:linear-gradient(180deg,var(--background-color) 0%,var(--background-secondary-color) 100%);box-shadow:#00000059 0 5px 15px}._realTimePreviewContainer_3hwhe_23{margin:auto;display:flex;width:75%;height:100%;max-width:1500px}._editorContainer_3hwhe_39{width:50%;padding-top:10px;padding-bottom:10px}._output_3hwhe_51{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;text-align:center;width:50%;height:100%;overflow-y:auto;scrollbar-width:thin;padding:20px}@media only screen and (width <= 1024px){._realTimePreview_3hwhe_1{height:100%}._realTimePreviewContainer_3hwhe_23{width:100%}._editorContainer_3hwhe_39{display:none}._output_3hwhe_51{width:100%;height:100%}}._performance_11q24_1{width:100%;height:600px}._performanceContainer_11q24_11{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}._performanceInfo_11q24_27{margin:auto;width:50%}._performanceInfoP_11q24_37{color:var(--text-color);width:90%}._performanceLink_11q24_47{color:#61dbfb}._performanceEditor_11q24_55{margin:auto;width:50%;height:80%}@media only screen and (width <= 1024px){._performance_11q24_1{display:none}}._theme_q5bhw_1{width:100%;height:300px}._themeContainer_q5bhw_11{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}._themeInfo_q5bhw_27{width:50%;margin:auto auto auto 5%}._themeInfoP_q5bhw_39{color:var(--text-color);width:90%}._themeEditor_q5bhw_49{margin:auto;width:45%;height:190px}._toggleLineNumbers_q5bhw_61{display:flex}._lineNumbersCheckbox_q5bhw_69{margin-left:0}@media only screen and (width <= 1024px){._theme_q5bhw_1{display:none}}._simple_62vy4_1{width:100%;height:600px}._simpleContainer_62vy4_11{width:75%;margin:auto;display:flex;height:100%;max-width:1500px}._simpleInfo_62vy4_27{margin:auto;width:50%}._simpleInfoP_62vy4_37{color:var(--text-color);width:90%}._simpleLink_62vy4_47{color:#61dbfb}._simpleEditor_62vy4_55{margin:auto;width:50%;height:80%}@media only screen and (width <= 1024px){._simple_62vy4_1{display:none}}._footer_18zwo_1{width:100%;border-top:1px solid var(--text-secondary-color)}._footerContainer_18zwo_11{display:flex;justify-content:space-between;width:75%;margin:auto;text-align:center;padding-top:20px;padding-bottom:20px;max-width:1500px}._footerContainerImg_18zwo_33{position:relative;height:40px}@media only screen and (width <= 1024px){._footer_18zwo_1{display:none}._footerContainer_18zwo_11{width:100%}._footerContainerImg_18zwo_33{width:20%}}code[class*=language-],pre[class*=language-]{color:#fff;background:none;text-shadow:0 -.1em .2em black;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-],:not(pre)>code[class*=language-]{background:#4d4033}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border:.3em solid hsl(30,20%,40%);border-radius:.5em;box-shadow:1px 1px .5em #000 inset}:not(pre)>code[class*=language-]{padding:.15em .2em .05em;border-radius:.3em;border:.13em solid hsl(30,20%,40%);box-shadow:1px 1px .3em -.1em #000 inset;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#998066}.token.punctuation,.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol{color:#d1949e}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#bde052}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#f5b83d}.token.atrule,.token.attr-value,.token.keyword{color:#d1949e}.token.regex,.token.important{color:#e90}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.deleted{color:red}body{margin:0;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;background-color:var(--background-color);color:var(--text-secondary-color);overflow-y:auto;overflow-x:hidden}#root{width:100vw;height:100vh}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (width <= 1024px){#root{overflow:auto;scrollbar-width:thin}}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ds={exports:{}},So={},ps={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),xc=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),Nc=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Ic=Symbol.for("react.memo"),Oc=Symbol.for("react.lazy"),na=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hs=Object.assign,ms={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||fs}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gs(){}gs.prototype=Pn.prototype;function al(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||fs}var sl=al.prototype=new gs;sl.constructor=al;hs(sl,Pn.prototype);sl.isPureReactComponent=!0;var ra=Array.isArray,ys=Object.prototype.hasOwnProperty,ul={current:null},vs={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ys.call(t,r)&&!vs.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),d=0;d<a;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:gr,type:e,key:i,ref:l,props:o,_owner:ul.current}}function Dc(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bc(""+e.key):t.toString(36)}function $r(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case gr:case xc:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+$o(l,0):r,ra(o)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),$r(o,t,n,"",function(d){return d})):o!=null&&(cl(o)&&(o=Dc(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(oa,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ra(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+$o(i,a);l+=$r(i,t,n,s,o)}else if(s=Lc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+$o(i,a++),l+=$r(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Er(e,t,n){if(e==null)return e;var r=[],o=0;return $r(e,r,"","",function(i){return t.call(n,i,o++)}),r}function zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Ur={transition:null},Mc={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:ul};function Cs(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Er,forEach:function(e,t,n){Er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Er(e,function(){t++}),t},toArray:function(e){return Er(e,function(t){return t})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Pn;D.Fragment=Tc;D.Profiler=Pc;D.PureComponent=al;D.StrictMode=Rc;D.Suspense=jc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mc;D.act=Cs;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hs({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ul.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ys.call(t,s)&&!vs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var d=0;d<s;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:gr,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:Fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nc,_context:e},e.Consumer=e};D.createElement=ws;D.createFactory=function(e){var t=ws.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Ac,render:e}};D.isValidElement=cl;D.lazy=function(e){return{$$typeof:Oc,_payload:{_status:-1,_result:e},_init:zc}};D.memo=function(e,t){return{$$typeof:Ic,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};D.unstable_act=Cs;D.useCallback=function(e,t){return ve.current.useCallback(e,t)};D.useContext=function(e){return ve.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};D.useEffect=function(e,t){return ve.current.useEffect(e,t)};D.useId=function(){return ve.current.useId()};D.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ve.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};D.useRef=function(e){return ve.current.useRef(e)};D.useState=function(e){return ve.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ve.current.useTransition()};D.version="18.3.1";ps.exports=D;var N=ps.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=N,Uc=Symbol.for("react.element"),Vc=Symbol.for("react.fragment"),Wc=Object.prototype.hasOwnProperty,Bc=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hc={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Wc.call(t,r)&&!Hc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uc,type:e,key:i,ref:l,props:o,_owner:Bc.current}}So.Fragment=Vc;So.jsx=ks;So.jsxs=ks;ds.exports=So;var P=ds.exports,hi={},Es={exports:{}},Ne={},Ss={exports:{}},_s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,A){var O=_.length;_.push(A);e:for(;0<O;){var $=O-1>>>1,z=_[$];if(0<o(z,A))_[$]=A,_[O]=z,O=$;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],O=_.pop();if(O!==A){_[0]=O;e:for(var $=0,z=_.length,tt=z>>>1;$<tt;){var te=2*($+1)-1,Ae=_[te],me=te+1,Ue=_[me];if(0>o(Ae,O))me<z&&0>o(Ue,Ae)?(_[$]=Ue,_[me]=O,$=me):(_[$]=Ae,_[te]=O,$=te);else if(me<z&&0>o(Ue,O))_[$]=Ue,_[me]=O,$=me;else break e}}return A}function o(_,A){var O=_.sortIndex-A.sortIndex;return O!==0?O:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],d=[],y=1,h=null,m=3,C=!1,S=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(_){for(var A=n(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=_)r(d),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(d)}}function p(_){if(E=!1,c(_),!S)if(n(s)!==null)S=!0,pt(g);else{var A=n(d);A!==null&&et(p,A.startTime-_)}}function g(_,A){S=!1,E&&(E=!1,f(x),x=-1),C=!0;var O=m;try{for(c(A),h=n(s);h!==null&&(!(h.expirationTime>A)||_&&!b());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var z=$(h.expirationTime<=A);A=e.unstable_now(),typeof z=="function"?h.callback=z:h===n(s)&&r(s),c(A)}else r(s);h=n(s)}if(h!==null)var tt=!0;else{var te=n(d);te!==null&&et(p,te.startTime-A),tt=!1}return tt}finally{h=null,m=O,C=!1}}var v=!1,w=null,x=-1,T=5,F=-1;function b(){return!(e.unstable_now()-F<T)}function le(){if(w!==null){var _=e.unstable_now();F=_;var A=!0;try{A=w(!0,_)}finally{A?$e():(v=!1,w=null)}}else v=!1}var $e;if(typeof u=="function")$e=function(){u(le)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,G=Ot.port2;Ot.port1.onmessage=le,$e=function(){G.postMessage(null)}}else $e=function(){I(le,0)};function pt(_){w=_,v||(v=!0,$e())}function et(_,A){x=I(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||C||(S=!0,pt(g))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var O=m;m=A;try{return _()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var O=m;m=_;try{return A()}finally{m=O}},e.unstable_scheduleCallback=function(_,A,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,_){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=O+z,_={id:y++,callback:A,priorityLevel:_,startTime:O,expirationTime:z,sortIndex:-1},O>$?(_.sortIndex=O,t(d,_),n(s)===null&&_===n(d)&&(E?(f(x),x=-1):E=!0,et(p,O-$))):(_.sortIndex=z,t(s,_),S||C||(S=!0,pt(g))),_},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(_){var A=m;return function(){var O=m;m=A;try{return _.apply(this,arguments)}finally{m=O}}}})(_s);Ss.exports=_s;var Yc=Ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=N,Pe=Yc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xs=new Set,Jn={};function Gt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)xs.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},la={};function qc(e){return mi.call(la,e)?!0:mi.call(ia,e)?!1:Qc.test(e)?la[e]=!0:(ia[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dl,pl);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dl,pl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dl,pl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function fl(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xc(t,n,o,r)&&(n=null),r||o===null?qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),nn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),gi=Symbol.for("react.profiler"),Ts=Symbol.for("react.provider"),Rs=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),yi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Ps=Symbol.for("react.offscreen"),aa=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Uo;function $n(e){if(Uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||""}return`
`+Uo+e}var Vo=!1;function Wo(e,t){if(!e||Vo)return"";Vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Vo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function Zc(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case nn:return"Portal";case gi:return"Profiler";case hl:return"StrictMode";case yi:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case Ts:return(e._context.displayName||"Context")+".Provider";case ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return t=e.displayName||null,t!==null?t:wi(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return wi(e(t))}catch{}}return null}function Jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ed(e){var t=Ns(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=ed(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ns(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function As(e,t){t=t.checked,t!=null&&fl(e,"checked",t,!1)}function ki(e,t){As(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ei(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ei(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function mn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Si(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Un(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function js(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Is(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Is(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Os=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},td=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Ls(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Ds(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ls(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var nd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,gn=null,yn=null;function pa(e){if(e=wr(e)){if(typeof Pi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Po(t),Pi(e.stateNode,e.type,t))}}function bs(e){gn?yn?yn.push(e):yn=[e]:gn=e}function zs(){if(gn){var e=gn,t=yn;if(yn=gn=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function Ms(e,t){return e(t)}function $s(){}var Bo=!1;function Us(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Ms(e,t,n)}finally{Bo=!1,(gn!==null||yn!==null)&&($s(),zs())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ni=!1;if(at)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Ni=!1}function rd(e,t,n,r,o,i,l,a,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Hn=!1,Jr=null,eo=!1,Fi=null,od={onError:function(e){Hn=!0,Jr=e}};function id(e,t,n,r,o,i,l,a,s){Hn=!1,Jr=null,rd.apply(od,arguments)}function ld(e,t,n,r,o,i,l,a,s){if(id.apply(this,arguments),Hn){if(Hn){var d=Jr;Hn=!1,Jr=null}else throw Error(k(198));eo||(eo=!0,Fi=d)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if(Xt(e)!==e)throw Error(k(188))}function ad(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fa(o),e;if(i===r)return fa(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ws(e){return e=ad(e),e!==null?Bs(e):null}function Bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bs(e);if(t!==null)return t;e=e.sibling}return null}var Hs=Pe.unstable_scheduleCallback,ha=Pe.unstable_cancelCallback,sd=Pe.unstable_shouldYield,ud=Pe.unstable_requestPaint,J=Pe.unstable_now,cd=Pe.unstable_getCurrentPriorityLevel,vl=Pe.unstable_ImmediatePriority,Ys=Pe.unstable_UserBlockingPriority,to=Pe.unstable_NormalPriority,dd=Pe.unstable_LowPriority,Ks=Pe.unstable_IdlePriority,_o=null,Ze=null;function pd(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:md,fd=Math.log,hd=Math.LN2;function md(e){return e>>>=0,e===0?32:31-(fd(e)/hd|0)|0}var Tr=64,Rr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Vn(a):(i&=l,i!==0&&(r=Vn(i)))}else l=n&~o,l!==0?r=Vn(l):i!==0&&(r=Vn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),o=1<<n,r|=e[n],t&=~o;return r}function gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ye(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=gd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qs(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ye(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function qs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gs,Cl,Xs,Zs,Js,ji=!1,Pr=[],Ct=null,kt=null,Et=null,nr=new Map,rr=new Map,gt=[],wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function In(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=wr(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cd(e,t,n,r,o){switch(t){case"focusin":return Ct=In(Ct,e,t,n,r,o),!0;case"dragenter":return kt=In(kt,e,t,n,r,o),!0;case"mouseover":return Et=In(Et,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return nr.set(i,In(nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,rr.set(i,In(rr.get(i)||null,e,t,n,r,o)),!0}return!1}function eu(e){var t=$t(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Vs(n),t!==null){e.blockedOn=t,Js(e.priority,function(){Xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ri=r,n.target.dispatchEvent(r),Ri=null}else return t=wr(n),t!==null&&Cl(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Vr(e)&&n.delete(t)}function kd(){ji=!1,Ct!==null&&Vr(Ct)&&(Ct=null),kt!==null&&Vr(kt)&&(kt=null),Et!==null&&Vr(Et)&&(Et=null),nr.forEach(ga),rr.forEach(ga)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,kd)))}function or(e){function t(o){return On(o,e)}if(0<Pr.length){On(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&On(Ct,e),kt!==null&&On(kt,e),Et!==null&&On(Et,e),nr.forEach(t),rr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)eu(n),n.blockedOn===null&&gt.shift()}var vn=dt.ReactCurrentBatchConfig,ro=!0;function Ed(e,t,n,r){var o=U,i=vn.transition;vn.transition=null;try{U=1,kl(e,t,n,r)}finally{U=o,vn.transition=i}}function Sd(e,t,n,r){var o=U,i=vn.transition;vn.transition=null;try{U=4,kl(e,t,n,r)}finally{U=o,vn.transition=i}}function kl(e,t,n,r){if(ro){var o=Ii(e,t,n,r);if(o===null)ti(e,t,r,oo,n),ma(e,r);else if(Cd(o,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<wd.indexOf(e)){for(;o!==null;){var i=wr(o);if(i!==null&&Gs(i),i=Ii(e,t,n,r),i===null&&ti(e,t,r,oo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ti(e,t,r,null,n)}}var oo=null;function Ii(e,t,n,r){if(oo=null,e=yl(r),e=$t(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function tu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cd()){case vl:return 1;case Ys:return 4;case to:case dd:return 16;case Ks:return 536870912;default:return 16}default:return 16}}var vt=null,El=null,Wr=null;function nu(){if(Wr)return Wr;var e,t=El,n=t.length,r,o="value"in vt?vt.value:vt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Wr=o.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function ya(){return!1}function Fe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nr:ya,this.isPropagationStopped=ya,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Fe(Nn),vr=q({},Nn,{view:0,detail:0}),_d=Fe(vr),Yo,Ko,Ln,xo=q({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Yo=e.screenX-Ln.screenX,Ko=e.screenY-Ln.screenY):Ko=Yo=0,Ln=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),va=Fe(xo),xd=q({},xo,{dataTransfer:0}),Td=Fe(xd),Rd=q({},vr,{relatedTarget:0}),Qo=Fe(Rd),Pd=q({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=Fe(Pd),Fd=q({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=Fe(Fd),jd=q({},Nn,{data:0}),wa=Fe(jd),Id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function _l(){return Dd}var bd=q({},vr,{key:function(e){if(e.key){var t=Id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Fe(bd),Md=q({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=Fe(Md),$d=q({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Ud=Fe($d),Vd=q({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Fe(Vd),Bd=q({},xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=Fe(Bd),Yd=[9,13,27,32],xl=at&&"CompositionEvent"in window,Yn=null;at&&"documentMode"in document&&(Yn=document.documentMode);var Kd=at&&"TextEvent"in window&&!Yn,ru=at&&(!xl||Yn&&8<Yn&&11>=Yn),ka=" ",Ea=!1;function ou(e,t){switch(e){case"keyup":return Yd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var on=!1;function Qd(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(Ea=!0,ka);case"textInput":return e=t.data,e===ka&&Ea?null:e;default:return null}}function qd(e,t){if(on)return e==="compositionend"||!xl&&ou(e,t)?(e=nu(),Wr=El=vt=null,on=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ru&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function lu(e,t,n,r){bs(r),t=io(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,ir=null;function Xd(e){yu(e,0)}function To(e){var t=sn(e);if(Fs(t))return e}function Zd(e,t){if(e==="change")return t}var au=!1;if(at){var qo;if(at){var Go="oninput"in document;if(!Go){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),Go=typeof _a.oninput=="function"}qo=Go}else qo=!1;au=qo&&(!document.documentMode||9<document.documentMode)}function xa(){Kn&&(Kn.detachEvent("onpropertychange",su),ir=Kn=null)}function su(e){if(e.propertyName==="value"&&To(ir)){var t=[];lu(t,ir,e,yl(e)),Us(Xd,t)}}function Jd(e,t,n){e==="focusin"?(xa(),Kn=t,ir=n,Kn.attachEvent("onpropertychange",su)):e==="focusout"&&xa()}function ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(ir)}function tp(e,t){if(e==="click")return To(t)}function np(e,t){if(e==="input"||e==="change")return To(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:rp;function lr(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!mi.call(t,o)||!Qe(e[o],t[o]))return!1}return!0}function Ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=Ta(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ta(n)}}function uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cu(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function op(e){var t=cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uu(n.ownerDocument.documentElement,n)){if(r!==null&&Tl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ra(n,i);var l=Ra(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ip=at&&"documentMode"in document&&11>=document.documentMode,ln=null,Oi=null,Qn=null,Li=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||ln==null||ln!==Zr(r)||(r=ln,"selectionStart"in r&&Tl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&lr(Qn,r)||(Qn=r,r=io(Oi,"onSelect"),0<r.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ln)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var an={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},Xo={},du={};at&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Ro(e){if(Xo[e])return Xo[e];if(!an[e])return e;var t=an[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in du)return Xo[e]=t[n];return e}var pu=Ro("animationend"),fu=Ro("animationiteration"),hu=Ro("animationstart"),mu=Ro("transitionend"),gu=new Map,Na="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){gu.set(e,t),Gt(t,[e])}for(var Zo=0;Zo<Na.length;Zo++){var Jo=Na[Zo],lp=Jo.toLowerCase(),ap=Jo[0].toUpperCase()+Jo.slice(1);At(lp,"on"+ap)}At(pu,"onAnimationEnd");At(fu,"onAnimationIteration");At(hu,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(mu,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ld(r,t,void 0,e),e.currentTarget=null}function yu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,d=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Fa(o,a,d),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,d=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Fa(o,a,d),i=s}}}if(eo)throw e=Fi,eo=!1,Fi=null,e}function B(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var r=e+"__bubble";n.has(r)||(vu(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),vu(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Ar]){e[Ar]=!0,xs.forEach(function(n){n!=="selectionchange"&&(sp.has(n)||ei(n,!1,e),ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,ei("selectionchange",!1,t))}}function vu(e,t,n,r){switch(tu(t)){case 1:var o=Ed;break;case 4:o=Sd;break;default:o=kl}n=o.bind(null,t,n,e),o=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ti(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=$t(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Us(function(){var d=i,y=yl(n),h=[];e:{var m=gu.get(e);if(m!==void 0){var C=Sl,S=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":C=zd;break;case"focusin":S="focus",C=Qo;break;case"focusout":S="blur",C=Qo;break;case"beforeblur":case"afterblur":C=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Ud;break;case pu:case fu:case hu:C=Nd;break;case mu:C=Wd;break;case"scroll":C=_d;break;case"wheel":C=Hd;break;case"copy":case"cut":case"paste":C=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ca}var E=(t&4)!==0,I=!E&&e==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var u=d,c;u!==null;){c=u;var p=c.stateNode;if(c.tag===5&&p!==null&&(c=p,f!==null&&(p=tr(u,f),p!=null&&E.push(sr(u,p,c)))),I)break;u=u.return}0<E.length&&(m=new C(m,S,null,n,y),h.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",m&&n!==Ri&&(S=n.relatedTarget||n.fromElement)&&($t(S)||S[st]))break e;if((C||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,C?(S=n.relatedTarget||n.toElement,C=d,S=S?$t(S):null,S!==null&&(I=Xt(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(C=null,S=d),C!==S)){if(E=va,p="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ca,p="onPointerLeave",f="onPointerEnter",u="pointer"),I=C==null?m:sn(C),c=S==null?m:sn(S),m=new E(p,u+"leave",C,n,y),m.target=I,m.relatedTarget=c,p=null,$t(y)===d&&(E=new E(f,u+"enter",S,n,y),E.target=c,E.relatedTarget=I,p=E),I=p,C&&S)t:{for(E=C,f=S,u=0,c=E;c;c=en(c))u++;for(c=0,p=f;p;p=en(p))c++;for(;0<u-c;)E=en(E),u--;for(;0<c-u;)f=en(f),c--;for(;u--;){if(E===f||f!==null&&E===f.alternate)break t;E=en(E),f=en(f)}E=null}else E=null;C!==null&&Aa(h,m,C,E,!1),S!==null&&I!==null&&Aa(h,I,S,E,!0)}}e:{if(m=d?sn(d):window,C=m.nodeName&&m.nodeName.toLowerCase(),C==="select"||C==="input"&&m.type==="file")var g=Zd;else if(Sa(m))if(au)g=np;else{g=ep;var v=Jd}else(C=m.nodeName)&&C.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(g=tp);if(g&&(g=g(e,d))){lu(h,g,n,y);break e}v&&v(e,m,d),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Ei(m,"number",m.value)}switch(v=d?sn(d):window,e){case"focusin":(Sa(v)||v.contentEditable==="true")&&(ln=v,Oi=d,Qn=null);break;case"focusout":Qn=Oi=ln=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,Pa(h,n,y);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":Pa(h,n,y)}var w;if(xl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else on?ou(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ru&&n.locale!=="ko"&&(on||x!=="onCompositionStart"?x==="onCompositionEnd"&&on&&(w=nu()):(vt=y,El="value"in vt?vt.value:vt.textContent,on=!0)),v=io(d,x),0<v.length&&(x=new wa(x,e,null,n,y),h.push({event:x,listeners:v}),w?x.data=w:(w=iu(n),w!==null&&(x.data=w)))),(w=Kd?Qd(e,n):qd(e,n))&&(d=io(d,"onBeforeInput"),0<d.length&&(y=new wa("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=w))}yu(h,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=tr(e,n),i!=null&&r.unshift(sr(e,i,o)),i=tr(e,t),i!=null&&r.push(sr(e,i,o))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,d=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&d!==null&&(a=d,o?(s=tr(n,i),s!=null&&l.unshift(sr(n,s,a))):o||(s=tr(n,i),s!=null&&l.push(sr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var up=/\r\n?/g,cp=/\u0000|\uFFFD/g;function ja(e){return(typeof e=="string"?e:""+e).replace(up,`
`).replace(cp,"")}function jr(e,t,n){if(t=ja(t),ja(e)!==t&&n)throw Error(k(425))}function lo(){}var Di=null,bi=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,dp=typeof clearTimeout=="function"?clearTimeout:void 0,Ia=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ia<"u"?function(e){return Ia.resolve(null).then(e).catch(fp)}:Mi;function fp(e){setTimeout(function(){throw e})}function ni(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Fn,ur="__reactProps$"+Fn,st="__reactContainer$"+Fn,$i="__reactEvents$"+Fn,hp="__reactListeners$"+Fn,mp="__reactHandles$"+Fn;function $t(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oa(e);e!==null;){if(n=e[Xe])return n;e=Oa(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Po(e){return e[ur]||null}var Ui=[],un=-1;function jt(e){return{current:e}}function H(e){0>un||(e.current=Ui[un],Ui[un]=null,un--)}function W(e,t){un++,Ui[un]=e.current,e.current=t}var Nt={},he=jt(Nt),Ee=jt(!1),Ht=Nt;function En(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function ao(){H(Ee),H(he)}function La(e,t,n){if(he.current!==Nt)throw Error(k(168));W(he,t),W(Ee,n)}function wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Jc(e)||"Unknown",o));return q({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Ht=he.current,W(he,e),W(Ee,Ee.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=wu(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,H(Ee),H(he),W(he,e)):H(Ee),W(Ee,n)}var rt=null,No=!1,ri=!1;function Cu(e){rt===null?rt=[e]:rt.push(e)}function gp(e){No=!0,Cu(e)}function It(){if(!ri&&rt!==null){ri=!0;var e=0,t=U;try{var n=rt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,No=!1}catch(o){throw rt!==null&&(rt=rt.slice(e+1)),Hs(vl,It),o}finally{U=t,ri=!1}}return null}var cn=[],dn=0,uo=null,co=0,Oe=[],Le=0,Yt=null,ot=1,it="";function zt(e,t){cn[dn++]=co,cn[dn++]=uo,uo=e,co=t}function ku(e,t,n){Oe[Le++]=ot,Oe[Le++]=it,Oe[Le++]=Yt,Yt=e;var r=ot;e=it;var o=32-Ye(r)-1;r&=~(1<<o),n+=1;var i=32-Ye(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ot=1<<32-Ye(t)+o|n<<o|r,it=i+e}else ot=1<<i|n<<o|r,it=e}function Rl(e){e.return!==null&&(zt(e,1),ku(e,1,0))}function Pl(e){for(;e===uo;)uo=cn[--dn],cn[dn]=null,co=cn[--dn],cn[dn]=null;for(;e===Yt;)Yt=Oe[--Le],Oe[Le]=null,it=Oe[--Le],Oe[Le]=null,ot=Oe[--Le],Oe[Le]=null}var Re=null,Te=null,Y=!1,He=null;function Eu(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Te=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:ot,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Te=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wi(e){if(Y){var t=Te;if(t){var n=t;if(!ba(e,t)){if(Vi(e))throw Error(k(418));t=St(n.nextSibling);var r=Re;t&&ba(e,t)?Eu(r,n):(e.flags=e.flags&-4097|2,Y=!1,Re=e)}}else{if(Vi(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Re=e}}}function za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Ir(e){if(e!==Re)return!1;if(!Y)return za(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=Te)){if(Vi(e))throw Su(),Error(k(418));for(;t;)Eu(e,t),t=St(t.nextSibling)}if(za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Re?St(e.stateNode.nextSibling):null;return!0}function Su(){for(var e=Te;e;)e=St(e.nextSibling)}function Sn(){Te=Re=null,Y=!1}function Nl(e){He===null?He=[e]:He.push(e)}var yp=dt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ma(e){var t=e._init;return t(e._payload)}function _u(e){function t(f,u){if(e){var c=f.deletions;c===null?(f.deletions=[u],f.flags|=16):c.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Rt(f,u),f.index=0,f.sibling=null,f}function i(f,u,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<u?(f.flags|=2,u):c):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,c,p){return u===null||u.tag!==6?(u=ci(c,f.mode,p),u.return=f,u):(u=o(u,c),u.return=f,u)}function s(f,u,c,p){var g=c.type;return g===rn?y(f,u,c.props.children,p,c.key):u!==null&&(u.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&Ma(g)===u.type)?(p=o(u,c.props),p.ref=Dn(f,u,c),p.return=f,p):(p=Xr(c.type,c.key,c.props,null,f.mode,p),p.ref=Dn(f,u,c),p.return=f,p)}function d(f,u,c,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=di(c,f.mode,p),u.return=f,u):(u=o(u,c.children||[]),u.return=f,u)}function y(f,u,c,p,g){return u===null||u.tag!==7?(u=Bt(c,f.mode,p,g),u.return=f,u):(u=o(u,c),u.return=f,u)}function h(f,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ci(""+u,f.mode,c),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return c=Xr(u.type,u.key,u.props,null,f.mode,c),c.ref=Dn(f,null,u),c.return=f,c;case nn:return u=di(u,f.mode,c),u.return=f,u;case ht:var p=u._init;return h(f,p(u._payload),c)}if(Un(u)||An(u))return u=Bt(u,f.mode,c,null),u.return=f,u;Or(f,u)}return null}function m(f,u,c,p){var g=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return g!==null?null:a(f,u,""+c,p);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Sr:return c.key===g?s(f,u,c,p):null;case nn:return c.key===g?d(f,u,c,p):null;case ht:return g=c._init,m(f,u,g(c._payload),p)}if(Un(c)||An(c))return g!==null?null:y(f,u,c,p,null);Or(f,c)}return null}function C(f,u,c,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return f=f.get(c)||null,a(u,f,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return f=f.get(p.key===null?c:p.key)||null,s(u,f,p,g);case nn:return f=f.get(p.key===null?c:p.key)||null,d(u,f,p,g);case ht:var v=p._init;return C(f,u,c,v(p._payload),g)}if(Un(p)||An(p))return f=f.get(c)||null,y(u,f,p,g,null);Or(u,p)}return null}function S(f,u,c,p){for(var g=null,v=null,w=u,x=u=0,T=null;w!==null&&x<c.length;x++){w.index>x?(T=w,w=null):T=w.sibling;var F=m(f,w,c[x],p);if(F===null){w===null&&(w=T);break}e&&w&&F.alternate===null&&t(f,w),u=i(F,u,x),v===null?g=F:v.sibling=F,v=F,w=T}if(x===c.length)return n(f,w),Y&&zt(f,x),g;if(w===null){for(;x<c.length;x++)w=h(f,c[x],p),w!==null&&(u=i(w,u,x),v===null?g=w:v.sibling=w,v=w);return Y&&zt(f,x),g}for(w=r(f,w);x<c.length;x++)T=C(w,f,x,c[x],p),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?x:T.key),u=i(T,u,x),v===null?g=T:v.sibling=T,v=T);return e&&w.forEach(function(b){return t(f,b)}),Y&&zt(f,x),g}function E(f,u,c,p){var g=An(c);if(typeof g!="function")throw Error(k(150));if(c=g.call(c),c==null)throw Error(k(151));for(var v=g=null,w=u,x=u=0,T=null,F=c.next();w!==null&&!F.done;x++,F=c.next()){w.index>x?(T=w,w=null):T=w.sibling;var b=m(f,w,F.value,p);if(b===null){w===null&&(w=T);break}e&&w&&b.alternate===null&&t(f,w),u=i(b,u,x),v===null?g=b:v.sibling=b,v=b,w=T}if(F.done)return n(f,w),Y&&zt(f,x),g;if(w===null){for(;!F.done;x++,F=c.next())F=h(f,F.value,p),F!==null&&(u=i(F,u,x),v===null?g=F:v.sibling=F,v=F);return Y&&zt(f,x),g}for(w=r(f,w);!F.done;x++,F=c.next())F=C(w,f,x,F.value,p),F!==null&&(e&&F.alternate!==null&&w.delete(F.key===null?x:F.key),u=i(F,u,x),v===null?g=F:v.sibling=F,v=F);return e&&w.forEach(function(le){return t(f,le)}),Y&&zt(f,x),g}function I(f,u,c,p){if(typeof c=="object"&&c!==null&&c.type===rn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Sr:e:{for(var g=c.key,v=u;v!==null;){if(v.key===g){if(g=c.type,g===rn){if(v.tag===7){n(f,v.sibling),u=o(v,c.props.children),u.return=f,f=u;break e}}else if(v.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&Ma(g)===v.type){n(f,v.sibling),u=o(v,c.props),u.ref=Dn(f,v,c),u.return=f,f=u;break e}n(f,v);break}else t(f,v);v=v.sibling}c.type===rn?(u=Bt(c.props.children,f.mode,p,c.key),u.return=f,f=u):(p=Xr(c.type,c.key,c.props,null,f.mode,p),p.ref=Dn(f,u,c),p.return=f,f=p)}return l(f);case nn:e:{for(v=c.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(f,u.sibling),u=o(u,c.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=di(c,f.mode,p),u.return=f,f=u}return l(f);case ht:return v=c._init,I(f,u,v(c._payload),p)}if(Un(c))return S(f,u,c,p);if(An(c))return E(f,u,c,p);Or(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,c),u.return=f,f=u):(n(f,u),u=ci(c,f.mode,p),u.return=f,f=u),l(f)):n(f,u)}return I}var _n=_u(!0),xu=_u(!1),po=jt(null),fo=null,pn=null,Fl=null;function Al(){Fl=pn=fo=null}function jl(e){var t=po.current;H(po),e._currentValue=t}function Bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wn(e,t){fo=e,Fl=pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},pn===null){if(fo===null)throw Error(k(308));pn=e,fo.dependencies={lanes:0,firstContext:e}}else pn=pn.next=e;return t}var Ut=null;function Il(e){Ut===null?Ut=[e]:Ut.push(e)}function Tu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Il(t)):(n.next=o.next,o.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ut(e,n)}return o=r.interleaved,o===null?(t.next=t,Il(r)):(t.next=o.next,o.next=t),r.interleaved=t,ut(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var o=e.updateQueue;mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,d=s.next;s.next=null,l===null?i=d:l.next=d,l=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==l&&(a===null?y.firstBaseUpdate=d:a.next=d,y.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,y=d=s=null,a=i;do{var m=a.lane,C=a.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,E=a;switch(m=t,C=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){h=S.call(C,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(C,h,m):S,m==null)break e;h=q({},h,m);break e;case 2:mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else C={eventTime:C,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(d=y=C,s=h):y=y.next=C,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(y===null&&(s=h),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Qt|=l,e.lanes=l,e.memoizedState=h}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Cr={},Je=jt(Cr),cr=jt(Cr),dr=jt(Cr);function Vt(e){if(e===Cr)throw Error(k(174));return e}function Ll(e,t){switch(W(dr,t),W(cr,e),W(Je,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_i(t,e)}H(Je),W(Je,t)}function xn(){H(Je),H(cr),H(dr)}function Pu(e){Vt(dr.current);var t=Vt(Je.current),n=_i(t,e.type);t!==n&&(W(cr,e),W(Je,n))}function Dl(e){cr.current===e&&(H(Je),H(cr))}var K=jt(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function bl(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Yr=dt.ReactCurrentDispatcher,ii=dt.ReactCurrentBatchConfig,Kt=0,Q=null,ne=null,oe=null,go=!1,qn=!1,pr=0,vp=0;function de(){throw Error(k(321))}function zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function Ml(e,t,n,r,o,i){if(Kt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Ep:Sp,e=n(r,o),qn){i=0;do{if(qn=!1,pr=0,25<=i)throw Error(k(301));i+=1,oe=ne=null,t.updateQueue=null,Yr.current=_p,e=n(r,o)}while(qn)}if(Yr.current=yo,t=ne!==null&&ne.next!==null,Kt=0,oe=ne=Q=null,go=!1,t)throw Error(k(300));return e}function $l(){var e=pr!==0;return pr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Q.memoizedState=oe=e:oe=oe.next=e,oe}function Me(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Q.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Q.memoizedState=oe=e:oe=oe.next=e}return oe}function fr(e,t){return typeof t=="function"?t(e):t}function li(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,d=i;do{var y=d.lane;if((Kt&y)===y)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Q.lanes|=y,Qt|=y}d=d.next}while(d!==null&&d!==i);s===null?l=r:s.next=a,Qe(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ai(e){var t=Me(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Qe(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Nu(){}function Fu(e,t){var n=Q,r=Me(),o=t(),i=!Qe(r.memoizedState,o);if(i&&(r.memoizedState=o,ke=!0),r=r.queue,Ul(Iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,hr(9,ju.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(k(349));Kt&30||Au(n,t,o)}return o}function Au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ju(e,t,n,r){t.value=n,t.getSnapshot=r,Ou(t)&&Lu(e)}function Iu(e,t,n){return n(function(){Ou(t)&&Lu(e)})}function Ou(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function Lu(e){var t=ut(e,1);t!==null&&Ke(t,e,1,-1)}function Va(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=kp.bind(null,Q,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Du(){return Me().memoizedState}function Kr(e,t,n,r){var o=Ge();Q.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var o=Me();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&zl(r,l.deps)){o.memoizedState=hr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=hr(1|t,n,i,r)}function Wa(e,t){return Kr(8390656,8,e,t)}function Ul(e,t){return Fo(2048,8,e,t)}function bu(e,t){return Fo(4,2,e,t)}function zu(e,t){return Fo(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,Mu.bind(null,t,e),n)}function Vl(){}function Uu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wu(e,t,n){return Kt&21?(Qe(n,t)||(n=Qs(),Q.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function wp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),t()}finally{U=n,ii.transition=r}}function Bu(){return Me().memoizedState}function Cp(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hu(e))Yu(t,n);else if(n=Tu(e,t,n,r),n!==null){var o=ye();Ke(n,e,r,o),Ku(n,t,r)}}function kp(e,t,n){var r=Tt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Yu(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Qe(a,l)){var s=t.interleaved;s===null?(o.next=o,Il(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Tu(e,t,o,r),n!==null&&(o=ye(),Ke(n,e,r,o),Ku(n,t,r))}}function Hu(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Yu(e,t){qn=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ku(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wl(e,n)}}var yo={readContext:ze,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Ep={readContext:ze,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kr(4194308,4,Mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:Vl,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=wp.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ge();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));Kt&30||Au(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wa(Iu.bind(null,r,i,e),[e]),r.flags|=2048,hr(9,ju.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ie.identifierPrefix;if(Y){var n=it,r=ot;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sp={readContext:ze,useCallback:Uu,useContext:ze,useEffect:Ul,useImperativeHandle:$u,useInsertionEffect:bu,useLayoutEffect:zu,useMemo:Vu,useReducer:li,useRef:Du,useState:function(){return li(fr)},useDebugValue:Vl,useDeferredValue:function(e){var t=Me();return Wu(t,ne.memoizedState,e)},useTransition:function(){var e=li(fr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Fu,useId:Bu,unstable_isNewReconciler:!1},_p={readContext:ze,useCallback:Uu,useContext:ze,useEffect:Ul,useImperativeHandle:$u,useInsertionEffect:bu,useLayoutEffect:zu,useMemo:Vu,useReducer:ai,useRef:Du,useState:function(){return ai(fr)},useDebugValue:Vl,useDeferredValue:function(e){var t=Me();return ne===null?t.memoizedState=e:Wu(t,ne.memoizedState,e)},useTransition:function(){var e=ai(fr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Fu,useId:Bu,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Tt(e),i=lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Ke(t,e,o,r),Hr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Tt(e),i=lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_t(e,i,o),t!==null&&(Ke(t,e,o,r),Hr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Tt(e),o=lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Ke(t,e,r,n),Hr(t,e,r))}};function Ba(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(o,i):!0}function Qu(e,t,n){var r=!1,o=Nt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(o=Se(t)?Ht:he.current,r=t.contextTypes,i=(r=r!=null)?En(e,o):Nt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ol(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ze(i):(i=Se(t)?Ht:he.current,o.context=En(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ao.enqueueReplaceState(o,o.state,null),ho(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=Zc(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function si(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ki(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,rl=r),Ki(e,t)},n}function Gu(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ki(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ki(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mp.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var Tp=dt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?xu(t,null,n,r):_n(t,e.child,n,r)}function qa(e,t,n,r,o){n=n.render;var i=t.ref;return wn(t,o),r=Ml(e,t,n,r,i,o),n=$l(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&n&&Rl(t),t.flags|=1,ge(e,t,r,o),t.child)}function Ga(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Gl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xu(e,t,i,r,o)):(e=Xr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(l,r)&&e.ref===t.ref)return ct(e,t,o)}return t.flags|=1,e=Rt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ct(e,t,o)}return Qi(e,t,n,r,o)}function Zu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(hn,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(hn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(hn,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(hn,xe),xe|=r;return ge(e,t,o,n),t.child}function Ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,o){var i=Se(n)?Ht:he.current;return i=En(t,i),wn(t,o),n=Ml(e,t,n,r,i,o),r=$l(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ct(e,t,o)):(Y&&r&&Rl(t),t.flags|=1,ge(e,t,n,o),t.child)}function Xa(e,t,n,r,o){if(Se(n)){var i=!0;so(t)}else i=!1;if(wn(t,o),t.stateNode===null)Qr(e,t),Qu(t,n,r),Yi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=Se(n)?Ht:he.current,d=En(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==d)&&Ha(t,l,r,d),mt=!1;var m=t.memoizedState;l.state=m,ho(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Ee.current||mt?(typeof y=="function"&&(Hi(t,n,y,r),s=t.memoizedState),(a=mt||Ba(t,n,a,r,m,s,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ru(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:We(t.type,a),l.props=d,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=Se(n)?Ht:he.current,s=En(t,s));var C=n.getDerivedStateFromProps;(y=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Ha(t,l,r,s),mt=!1,m=t.memoizedState,l.state=m,ho(t,r,l,o);var S=t.memoizedState;a!==h||m!==S||Ee.current||mt?(typeof C=="function"&&(Hi(t,n,C,r),S=t.memoizedState),(d=mt||Ba(t,n,d,r,m,S,s)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return qi(e,t,n,r,i,o)}function qi(e,t,n,r,o,i){Ju(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Da(t,n,!1),ct(e,t,i);r=t.stateNode,Tp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,a,i)):ge(e,t,a,i),t.memoizedState=r.state,o&&Da(t,n,!0),t.child}function ec(e){var t=e.stateNode;t.pendingContext?La(e,t.pendingContext,t.pendingContext!==t.context):t.context&&La(e,t.context,!1),Ll(e,t.containerInfo)}function Za(e,t,n,r,o){return Sn(),Nl(o),t.flags|=256,ge(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(K,o&1),e===null)return Wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Oo(l,r,0,null),e=Bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xi(n),t.memoizedState=Gi,e):Wl(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Rp(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Rt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Rt(a,i):(i=Bt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Xi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=Rt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wl(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Nl(r),_n(t,e.child,null,n),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=si(Error(k(422))),Lr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Oo({mode:"visible",children:r.children},o,0,null),i=Bt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&_n(t,e.child,null,l),t.child.memoizedState=Xi(l),t.memoizedState=Gi,i);if(!(t.mode&1))return Lr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=si(i,r,void 0),Lr(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ut(e,o),Ke(r,e,o,-1))}return ql(),r=si(Error(k(421))),Lr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=$p.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Te=St(o.nextSibling),Re=t,Y=!0,He=null,e!==null&&(Oe[Le++]=ot,Oe[Le++]=it,Oe[Le++]=Yt,ot=e.id,it=e.overflow,Yt=t),t=Wl(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bi(e.return,t,n)}function ui(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function nc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ui(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&mo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ui(t,!0,n,null,i);break;case"together":ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:ec(t),Sn();break;case 5:Pu(t);break;case 1:Se(t.type)&&so(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(po,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?tc(e,t,n):(W(K,K.current&1),e=ct(e,t,n),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Zu(e,t,n)}return ct(e,t,n)}var rc,Zi,oc,ic;rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zi=function(){};oc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(Je.current);var i=null;switch(n){case"input":o=Ci(e,o),r=Ci(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=Si(e,o),r=Si(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}xi(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var a=o[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(a=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&s!==a&&(s!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&B("scroll",e),i||a===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(Pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Se(t.type)&&ao(),pe(t),null;case 3:return r=t.stateNode,xn(),H(Ee),H(he),bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ll(He),He=null))),Zi(e,t),pe(t),null;case 5:Dl(t);var o=Vt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Vt(Je.current),Ir(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xe]=t,r[ur]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":sa(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":ca(r,i),B("invalid",r)}xi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),o=["children",""+a]):Jn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":_r(r),ua(r,i,!0);break;case"textarea":_r(r),da(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Is(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[ur]=r,rc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ti(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":sa(e,r),o=Ci(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),B("invalid",e);break;case"textarea":ca(e,r),o=Si(e,r),B("invalid",e);break;default:o=r}xi(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ds(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Os(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&er(e,s):typeof s=="number"&&er(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&B("scroll",e):s!=null&&fl(e,i,s,l))}switch(n){case"input":_r(e),ua(e,r,!1);break;case"textarea":_r(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Vt(dr.current),Vt(Je.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return pe(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Te!==null&&t.mode&1&&!(t.flags&128))Su(),Sn(),t.flags|=98560,i=!1;else if(i=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Xe]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else He!==null&&(ll(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):ql())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return xn(),Zi(e,t),e===null&&ar(t.stateNode.containerInfo),pe(t),null;case 10:return jl(t.type._context),pe(t),null;case 17:return Se(t.type)&&ao(),pe(t),null;case 19:if(H(K),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)bn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mo(e),l!==null){for(t.flags|=128,bn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Rn&&(t.flags|=128,r=!0,bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return pe(t),null}else 2*J()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,bn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,W(K,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Fp(e,t){switch(Pl(t),t.tag){case 1:return Se(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),H(Ee),H(he),bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return xn(),null;case 10:return jl(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Dr=!1,fe=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,R=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ji(e,t,n){try{n()}catch(r){X(e,t,r)}}var es=!1;function jp(e,t){if(Di=ro,e=cu(),Tl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,d=0,y=0,h=e,m=null;t:for(;;){for(var C;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(C=h.firstChild)!==null;)m=h,h=C;for(;;){if(h===e)break t;if(m===n&&++d===o&&(a=l),m===i&&++y===r&&(s=l),(C=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=C}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bi={focusedElem:e,selectionRange:n},ro=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,I=S.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?E:We(t.type,E),I);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(p){X(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return S=es,es=!1,S}function Gn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ji(t,n,i)}o=o.next}while(o!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function el(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[ur],delete t[$i],delete t[hp],delete t[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}var se=null,Be=!1;function ft(e,t,n){for(n=n.child;n!==null;)sc(e,t,n),n=n.sibling}function sc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:fe||fn(n,t);case 6:var r=se,o=Be;se=null,ft(e,t,n),se=r,Be=o,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?ni(e.parentNode,n):e.nodeType===1&&ni(e,n),or(e)):ni(se,n.stateNode));break;case 4:r=se,o=Be,se=n.stateNode.containerInfo,Be=!0,ft(e,t,n),se=r,Be=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ji(n,t,l),o=o.next}while(o!==r)}ft(e,t,n);break;case 1:if(!fe&&(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,ft(e,t,n),fe=r):ft(e,t,n);break;default:ft(e,t,n)}}function ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var o=Up.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Be=!1;break e;case 3:se=a.stateNode.containerInfo,Be=!0;break e;case 4:se=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(se===null)throw Error(k(160));sc(i,l,o),se=null,Be=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){X(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uc(t,e),t=t.sibling}function uc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),qe(e),r&4){try{Gn(3,e,e.return),jo(3,e)}catch(E){X(e,e.return,E)}try{Gn(5,e,e.return)}catch(E){X(e,e.return,E)}}break;case 1:Ve(t,e),qe(e),r&512&&n!==null&&fn(n,n.return);break;case 5:if(Ve(t,e),qe(e),r&512&&n!==null&&fn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(E){X(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&As(o,i),Ti(a,l);var d=Ti(a,i);for(l=0;l<s.length;l+=2){var y=s[l],h=s[l+1];y==="style"?Ds(o,h):y==="dangerouslySetInnerHTML"?Os(o,h):y==="children"?er(o,h):fl(o,y,h,d)}switch(a){case"input":ki(o,i);break;case"textarea":js(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?mn(o,!!i.multiple,C,!1):m!==!!i.multiple&&(i.defaultValue!=null?mn(o,!!i.multiple,i.defaultValue,!0):mn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ur]=i}catch(E){X(e,e.return,E)}}break;case 6:if(Ve(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){X(e,e.return,E)}}break;case 3:if(Ve(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(E){X(e,e.return,E)}break;case 4:Ve(t,e),qe(e);break;case 13:Ve(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Yl=J())),r&4&&ns(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(d=fe)||y,Ve(t,e),fe=d):Ve(t,e),qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(R=e,y=e.child;y!==null;){for(h=R=y;R!==null;){switch(m=R,C=m.child,m.tag){case 0:case 11:case 14:case 15:Gn(4,m,m.return);break;case 1:fn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){X(r,n,E)}}break;case 5:fn(m,m.return);break;case 22:if(m.memoizedState!==null){os(h);continue}}C!==null?(C.return=m,R=C):os(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ls("display",l))}catch(E){X(e,e.return,E)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(E){X(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ve(t,e),qe(e),r&4&&ns(e);break;case 21:break;default:Ve(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ac(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var i=ts(e);nl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ts(e);tl(e,a,l);break;default:throw Error(k(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ip(e,t,n){R=e,cc(e)}function cc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Dr;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||fe;a=Dr;var d=fe;if(Dr=l,(fe=s)&&!d)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?is(o):s!==null?(s.return=l,R=s):is(o);for(;i!==null;)R=i,cc(i),i=i.sibling;R=o,Dr=a,fe=d}rs(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):rs(e)}}function rs(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ua(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||t.flags&512&&el(t)}catch(m){X(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function os(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function is(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var i=t.return;try{el(t)}catch(s){X(t,i,s)}break;case 5:var l=t.return;try{el(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Op=Math.ceil,vo=dt.ReactCurrentDispatcher,Bl=dt.ReactCurrentOwner,be=dt.ReactCurrentBatchConfig,M=0,ie=null,ee=null,ue=0,xe=0,hn=jt(0),re=0,mr=null,Qt=0,Io=0,Hl=0,Xn=null,Ce=null,Yl=0,Rn=1/0,nt=null,wo=!1,rl=null,xt=null,br=!1,wt=null,Co=0,Zn=0,ol=null,qr=-1,Gr=0;function ye(){return M&6?J():qr!==-1?qr:qr=J()}function Tt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:yp.transition!==null?(Gr===0&&(Gr=Qs()),Gr):(e=U,e!==0||(e=window.event,e=e===void 0?16:tu(e.type)),e):1}function Ke(e,t,n,r){if(50<Zn)throw Zn=0,ol=null,Error(k(185));yr(e,n,r),(!(M&2)||e!==ie)&&(e===ie&&(!(M&2)&&(Io|=n),re===4&&yt(e,ue)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(Rn=J()+500,No&&It()))}function _e(e,t){var n=e.callbackNode;yd(e,t);var r=no(e,e===ie?ue:0);if(r===0)n!==null&&ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ha(n),t===1)e.tag===0?gp(ls.bind(null,e)):Cu(ls.bind(null,e)),pp(function(){!(M&6)&&It()}),n=null;else{switch(qs(r)){case 1:n=vl;break;case 4:n=Ys;break;case 16:n=to;break;case 536870912:n=Ks;break;default:n=to}n=vc(n,dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dc(e,t){if(qr=-1,Gr=0,M&6)throw Error(k(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=no(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ko(e,r);else{t=r;var o=M;M|=2;var i=fc();(ie!==e||ue!==t)&&(nt=null,Rn=J()+500,Wt(e,t));do try{bp();break}catch(a){pc(e,a)}while(!0);Al(),vo.current=i,M=o,ee!==null?t=0:(ie=null,ue=0,t=re)}if(t!==0){if(t===2&&(o=Ai(e),o!==0&&(r=o,t=il(e,o))),t===1)throw n=mr,Wt(e,0),yt(e,r),_e(e,J()),n;if(t===6)yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lp(o)&&(t=ko(e,r),t===2&&(i=Ai(e),i!==0&&(r=i,t=il(e,i))),t===1))throw n=mr,Wt(e,0),yt(e,r),_e(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Mt(e,Ce,nt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Yl+500-J(),10<t)){if(no(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Mi(Mt.bind(null,e,Ce,nt),t);break}Mt(e,Ce,nt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ye(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Op(r/1960))-r,10<r){e.timeoutHandle=Mi(Mt.bind(null,e,Ce,nt),r);break}Mt(e,Ce,nt);break;case 5:Mt(e,Ce,nt);break;default:throw Error(k(329))}}}return _e(e,J()),e.callbackNode===n?dc.bind(null,e):null}function il(e,t){var n=Xn;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=ko(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ll(t)),e}function ll(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Hl,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(M&6)throw Error(k(327));Cn();var t=no(e,0);if(!(t&1))return _e(e,J()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var r=Ai(e);r!==0&&(t=r,n=il(e,r))}if(n===1)throw n=mr,Wt(e,0),yt(e,t),_e(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,Ce,nt),_e(e,J()),null}function Kl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Rn=J()+500,No&&It())}}function qt(e){wt!==null&&wt.tag===0&&!(M&6)&&Cn();var t=M;M|=1;var n=be.transition,r=U;try{if(be.transition=null,U=1,e)return e()}finally{U=r,be.transition=n,M=t,!(M&6)&&It()}}function Ql(){xe=hn.current,H(hn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dp(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:xn(),H(Ee),H(he),bl();break;case 5:Dl(r);break;case 4:xn();break;case 13:H(K);break;case 19:H(K);break;case 10:jl(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(ie=e,ee=e=Rt(e.current,null),ue=xe=t,re=0,mr=null,Hl=Io=Qt=0,Ce=Xn=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ut=null}return e}function pc(e,t){do{var n=ee;try{if(Al(),Yr.current=yo,go){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}go=!1}if(Kt=0,oe=ne=Q=null,qn=!1,pr=0,Bl.current=null,n===null||n.return===null){re=1,mr=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,y=a,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=Ka(l);if(C!==null){C.flags&=-257,Qa(C,l,a,i,t),C.mode&1&&Ya(i,d,t),t=C,s=d;var S=t.updateQueue;if(S===null){var E=new Set;E.add(s),t.updateQueue=E}else S.add(s);break e}else{if(!(t&1)){Ya(i,d,t),ql();break e}s=Error(k(426))}}else if(Y&&a.mode&1){var I=Ka(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Qa(I,l,a,i,t),Nl(Tn(s,a));break e}}i=s=Tn(s,a),re!==4&&(re=2),Xn===null?Xn=[i]:Xn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=qu(i,s,t);$a(i,f);break e;case 1:a=s;var u=i.type,c=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(xt===null||!xt.has(c)))){i.flags|=65536,t&=-t,i.lanes|=t;var p=Gu(i,a,t);$a(i,p);break e}}i=i.return}while(i!==null)}mc(n)}catch(g){t=g,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function fc(){var e=vo.current;return vo.current=yo,e===null?yo:e}function ql(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Qt&268435455)&&!(Io&268435455)||yt(ie,ue)}function ko(e,t){var n=M;M|=2;var r=fc();(ie!==e||ue!==t)&&(nt=null,Wt(e,t));do try{Dp();break}catch(o){pc(e,o)}while(!0);if(Al(),M=n,vo.current=r,ee!==null)throw Error(k(261));return ie=null,ue=0,re}function Dp(){for(;ee!==null;)hc(ee)}function bp(){for(;ee!==null&&!sd();)hc(ee)}function hc(e){var t=yc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?mc(e):ee=t,Bl.current=null}function mc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=Np(n,t,xe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Mt(e,t,n){var r=U,o=be.transition;try{be.transition=null,U=1,zp(e,t,n,r)}finally{be.transition=o,U=r}return null}function zp(e,t,n,r){do Cn();while(wt!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vd(e,i),e===ie&&(ee=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||br||(br=!0,vc(to,function(){return Cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=be.transition,be.transition=null;var l=U;U=1;var a=M;M|=4,Bl.current=null,jp(e,n),uc(n,e),op(bi),ro=!!Di,bi=Di=null,e.current=n,Ip(n),ud(),M=a,U=l,be.transition=i}else e.current=n;if(br&&(br=!1,wt=e,Co=o),i=e.pendingLanes,i===0&&(xt=null),pd(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wo)throw wo=!1,e=rl,rl=null,e;return Co&1&&e.tag!==0&&Cn(),i=e.pendingLanes,i&1?e===ol?Zn++:(Zn=0,ol=e):Zn=0,It(),null}function Cn(){if(wt!==null){var e=qs(Co),t=be.transition,n=U;try{if(be.transition=null,U=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Co=0,M&6)throw Error(k(331));var o=M;for(M|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var d=a[s];for(R=d;R!==null;){var y=R;switch(y.tag){case 0:case 11:case 15:Gn(8,y,i)}var h=y.child;if(h!==null)h.return=y,R=h;else for(;R!==null;){y=R;var m=y.sibling,C=y.return;if(lc(y),y===d){R=null;break}if(m!==null){m.return=C,R=m;break}R=C}}}var S=i.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var u=e.current;for(R=u;R!==null;){l=R;var c=l.child;if(l.subtreeFlags&2064&&c!==null)c.return=l,R=c;else e:for(l=u;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jo(9,a)}}catch(g){X(a,a.return,g)}if(a===l){R=null;break e}var p=a.sibling;if(p!==null){p.return=a.return,R=p;break e}R=a.return}}if(M=o,It(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{U=n,be.transition=t}}return!1}function as(e,t,n){t=Tn(n,t),t=qu(e,t,1),e=_t(e,t,1),t=ye(),e!==null&&(yr(e,1,t),_e(e,t))}function X(e,t,n){if(e.tag===3)as(e,e,n);else for(;t!==null;){if(t.tag===3){as(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Tn(n,e),e=Gu(t,e,1),t=_t(t,e,1),e=ye(),t!==null&&(yr(t,1,e),_e(t,e));break}}t=t.return}}function Mp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>J()-Yl?Wt(e,0):Hl|=n),_e(e,t)}function gc(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ye();e=ut(e,t),e!==null&&(yr(e,t,n),_e(e,n))}function $p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gc(e,n)}function Up(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),gc(e,n)}var yc;yc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Pp(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Y&&t.flags&1048576&&ku(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var o=En(t,he.current);wn(t,n),o=Ml(null,t,r,e,o,n);var i=$l();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,so(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ol(t),o.updater=Ao,t.stateNode=o,o._reactInternals=t,Yi(t,r,e,n),t=qi(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Rl(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wp(r),e=We(r,e),o){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=qa(null,t,r,e,n);break e;case 14:t=Ga(null,t,r,We(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Qi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Xa(e,t,r,o,n);case 3:e:{if(ec(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ru(e,t),ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tn(Error(k(423)),t),t=Za(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(k(424)),t),t=Za(e,t,r,n,o);break e}else for(Te=St(t.stateNode.containerInfo.firstChild),Re=t,Y=!0,He=null,n=xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===o){t=ct(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&Wi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zi(r,o)?l=null:i!==null&&zi(r,i)&&(t.flags|=32),Ju(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Wi(t),null;case 13:return tc(e,t,n);case 4:return Ll(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),qa(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(po,r._currentValue),r._currentValue=l,i!==null)if(Qe(i.value,l)){if(i.children===o.children&&!Ee.current){t=ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=lt(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?s.next=s:(s.next=y.next,y.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Bi(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Bi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,wn(t,n),o=ze(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),Ga(e,t,r,o,n);case 15:return Xu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Qr(e,t),t.tag=1,Se(r)?(e=!0,so(t)):e=!1,wn(t,n),Qu(t,r,o),Yi(t,r,o,n),qi(null,t,r,!0,e,n);case 19:return nc(e,t,n);case 22:return Zu(e,t,n)}throw Error(k(156,t.tag))};function vc(e,t){return Hs(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new Vp(e,t,n,r)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return Gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===gl)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case rn:return Bt(n.children,o,i,t);case hl:l=8,o|=8;break;case gi:return e=De(12,n,t,o|2),e.elementType=gi,e.lanes=i,e;case yi:return e=De(13,n,t,o),e.elementType=yi,e.lanes=i,e;case vi:return e=De(19,n,t,o),e.elementType=vi,e.lanes=i,e;case Ps:return Oo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ts:l=10;break e;case Rs:l=9;break e;case ml:l=11;break e;case gl:l=14;break e;case ht:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=De(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Bt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=De(22,e,r,t),e.elementType=Ps,e.lanes=n,e.stateNode={isHidden:!1},e}function ci(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function di(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xl(e,t,n,r,o,i,l,a,s){return e=new Bp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(i),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wc(e){if(!e)return Nt;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Se(n))return wu(e,n,t)}return t}function Cc(e,t,n,r,o,i,l,a,s){return e=Xl(n,r,!0,e,o,i,l,a,s),e.context=wc(null),n=e.current,r=ye(),o=Tt(n),i=lt(r,o),i.callback=t??null,_t(n,i,o),e.current.lanes=o,yr(e,o,r),_e(e,r),e}function Lo(e,t,n,r){var o=t.current,i=ye(),l=Tt(o);return n=wc(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,l),e!==null&&(Ke(e,o,l,i),Hr(e,o,l)),l}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zl(e,t){ss(e,t),(e=e.alternate)&&ss(e,t)}function Yp(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Do.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Lo(e,t,null,null)};Do.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Lo(null,e,null,null)}),t[st]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&eu(e)}};function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function us(){}function Kp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Eo(l);i.call(d)}}var l=Cc(t,r,e,0,null,!1,!1,"",us);return e._reactRootContainer=l,e[st]=l.current,ar(e.nodeType===8?e.parentNode:e),qt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var d=Eo(s);a.call(d)}}var s=Xl(e,0,!1,null,null,!1,!1,"",us);return e._reactRootContainer=s,e[st]=s.current,ar(e.nodeType===8?e.parentNode:e),qt(function(){Lo(t,s,n,r)}),s}function zo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Eo(l);a.call(s)}}Lo(t,l,e,o)}else l=Kp(n,t,e,o,r);return Eo(l)}Gs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(wl(t,n|1),_e(t,J()),!(M&6)&&(Rn=J()+500,It()))}break;case 13:qt(function(){var r=ut(e,1);if(r!==null){var o=ye();Ke(r,e,1,o)}}),Zl(e,1)}};Cl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}Zl(e,134217728)}};Xs=function(e){if(e.tag===13){var t=Tt(e),n=ut(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}Zl(e,t)}};Zs=function(){return U};Js=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Pi=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Po(r);if(!o)throw Error(k(90));Fs(r),ki(r,o)}}}break;case"textarea":js(e,n);break;case"select":t=n.value,t!=null&&mn(e,!!n.multiple,t,!1)}};Ms=Kl;$s=qt;var Qp={usingClientEntryPoint:!1,Events:[wr,sn,Po,bs,zs,Kl]},zn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ws(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{_o=zr.inject(qp),Ze=zr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(t))throw Error(k(200));return Hp(e,t,null,n)};Ne.createRoot=function(e,t){if(!ea(e))throw Error(k(299));var n=!1,r="",o=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xl(e,1,!1,null,null,n,!1,r,o),e[st]=t.current,ar(e.nodeType===8?e.parentNode:e),new Jl(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ws(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return qt(e)};Ne.hydrate=function(e,t,n){if(!bo(t))throw Error(k(200));return zo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!ea(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=kc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Cc(t,null,e,1,n??null,o,!1,i,l),e[st]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Do(t)};Ne.render=function(e,t,n){if(!bo(t))throw Error(k(200));return zo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!bo(e))throw Error(k(40));return e._reactRootContainer?(qt(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Ne.unstable_batchedUpdates=Kl;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zo(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec)}catch(e){console.error(e)}}Ec(),Es.exports=Ne;var Gp=Es.exports,cs=Gp;hi.createRoot=cs.createRoot,hi.hydrateRoot=cs.hydrateRoot;const Xp=(e,t,n)=>N.useCallback(o=>{if(n<0)return[0,e(o.join(`
`)+`

`)];const i=Math.ceil(n),l=Math.max(t-i,0),a=Math.min(t+i,o.length),s=o.slice(l,a),d=e(s.join(`
`)+`

`);return[l,d]},[e,t,n]),Zp="_editorDisplay_5sge9_1",Jp="_editorDisplayPre_5sge9_27",ef="_editorDisplayCode_5sge9_45",pi={editorDisplay:Zp,editorDisplayPre:Jp,editorDisplayCode:ef},tf=N.forwardRef((e,t)=>{const{code:n,highlight:r,visibleLine:o,visibleLineCount:i,scrollWidth:l,theme:a}=e,s=Xp(r,o,i),{backgroundColor:d,color:y,fontSize:h}=a,m=n.split(`
`),C=m.length,[S,E]=s(m),I=N.useMemo(()=>C*h+h,[C,h]),f=N.useMemo(()=>S*h,[S,h]),u=typeof E=="string";return P.jsx("div",{ref:t,className:pi.editorDisplay,style:{backgroundColor:d},"aria-hidden":!0,children:P.jsx("pre",{className:pi.editorDisplayPre,style:{height:I},children:P.jsx("code",{className:pi.editorDisplayCode,style:{width:l+h,color:y,top:f},children:u?void 0:E,dangerouslySetInnerHTML:u?{__html:E}:void 0})})})}),nf=e=>{const t=N.useCallback((l,a,s)=>{const d=l.substring(0,a),y=l.substring(s);return[d+" ".repeat(e)+y,a+e,s+e]},[e]),n=N.useCallback((l,a,s)=>{const y=(l.substring(0,a).match(/\n/g)||[]).length,h=l.split(`
`),m=h[y],C=new RegExp(`^ {0,${e}}`),E=m.match(C)[0].length;return E===0?[l,a,s]:(h[y]=m.replace(C,""),[h.join(`
`),a-E,s-E])},[e]),r=N.useCallback((l,a,s)=>{const d=l.split(`
`),h=(l.substring(0,a).match(/\n/g)||[]).length,m=d.slice(0,h),S=(l.substring(0,s).match(/\n/g)||[]).length,E=d.slice(S+1),I=d.slice(h,S+1);return[m,I,E]},[]),o=N.useCallback((l,a,s)=>{const[d,y,h]=r(l,a,s);let m=a,C=s;const S=" ".repeat(e),E=y.map((I,f)=>(f===0&&(m+=e),C+=e,`${S}${I}`));return[[...d,...E,...h].join(`
`),m,C]},[e]),i=N.useCallback((l,a,s)=>{const[d,y,h]=r(l,a,s);let m=a,C=s;const S=y.map((E,I)=>{const f=new RegExp(`^ {0,${e}}`),c=E.match(f)[0].length;return c===0?E:(I===0&&(m-=c),C-=c,E.replace(f,""))});return[[...d,...S,...h].join(`
`),m,C]},[e]);return N.useCallback((l,a,s,d)=>a===s?d?n(l,a,s):t(l,a,s):d?i(l,a,s):o(l,a,s),[t,n,o,i])},Sc={border:"1px solid black",backgroundColor:"white",color:"black",numbersBackgroundColor:"#f5f5f5",numbersColor:"#6c6c6c",numbersBorder:"1px solid #ddd",caretColor:"black",font:"Fira code, Fira Mono, Consolas, Menlo, Courier, monospace",fontSize:16},rf="_editorLineNumbers_1y25c_1",of={editorLineNumbers:rf},lf=N.memo(N.forwardRef((e,t)=>{const{lineCount:n,showLineNumbers:r,theme:o}=e;if(r)return P.jsx("pre",{className:of.editorLineNumbers,ref:t,style:{fontSize:o.fontSize,borderRight:o.numbersBorder,backgroundColor:o.numbersBackgroundColor,color:o.numbersColor},"aria-hidden":!0,children:Array.from({length:n},(i,l)=>l+1).join(`
`)+`

`})})),af=(e,t)=>{const n=e===void 0,r=n?"":e,[o,i]=N.useState(r),l=N.useCallback(a=>{n&&i(a),t(a)},[n]);return!n&&e!==o&&i(e),[o,l]},sf=()=>{const e=N.useCallback((n,r,o)=>n.slice(0,o)+r+n.slice(o),[]),t=N.useMemo(()=>{const n=[["(",["(",")"]],[")",["(",")"]],["[",["[","]"]],["]",["[","]"]],["{",["{","}"]],["}",["{","}"]],["<",["<",">"]],[">",["<",">"]],["'",["'","'"]],['"',['"','"']],["`",["`","`"]]];return new Map(n)},[]);return N.useCallback((n,r,o,i)=>{const l=t.get(r);if(!l)return n;const[a,s]=l;return e(e(n,s,i),a,o)},[])},uf=()=>N.useCallback((e,t)=>{const n=e.substring(0,t),r=n.split(`
`),i=r[r.length-1].match(/^ +/),l=i?i[0].length:0,a=" ".repeat(l),s=`${n}
${a}${e.substring(t)}`,d=r.length+1,y=t+a.length+1;return[d,s,y]},[]),cf=e=>{const t=N.useRef([{code:e,start:e.length,end:e.length}]),n=N.useRef(t.current.length-1),r=N.useCallback((l,a,s)=>{const d={code:l,start:a,end:s};t.current[++n.current]=d},[]),o=N.useCallback(()=>{const l=t.current[--n.current];return l||(n.current=0),l},[]),i=N.useCallback(()=>{const l=t.current[++n.current];return l||n.current--,l},[]);return[r,o,i]},df="_easyCodeEditor_5i6jr_1",pf="_easyCodeEditorContainer_5i6jr_19",ff="_easyCodeEditorInput_5i6jr_35",fi={easyCodeEditor:df,easyCodeEditorContainer:pf,easyCodeEditorInput:ff},Mo=e=>{var Jt;const{value:t=void 0,onChange:n=()=>{},placeholder:r,highlight:o=j=>P.jsx(P.Fragment,{children:j}),dynamicHighlight:i=!0,readonly:l=!1,wrapParens:a=!0,autoIndent:s=!0,trapTab:d=!1,tabWidth:y=2,showLineNumbers:h=!0,theme:m=Sc}=e,{border:C,caretColor:S,font:E,fontSize:I,color:f,backgroundColor:u}=m,[c,p]=af(t,n),[g,v,w]=cf(c),[x,T]=N.useState(0),[F,b]=N.useState(c.split(`
`).length),le=nf(y),$e=sf(),Ot=uf(),G=N.useRef(null),pt=N.useRef(null),et=N.useRef(null),_=N.useMemo(()=>i&&G.current?Math.ceil(G.current.clientHeight/I):-1,[G.current,I]),A=N.useCallback(j=>{const L=j.target.value,V=j.target.selectionStart,Z=(L.substring(0,V).match(/\n/g)||[]).length;b((L.match(/\n/g)||[]).length+1),T(Z),p(L),g(L,V,j.target.selectionEnd)},[p]),O=N.useCallback(j=>{var je,Ie;const L=j.currentTarget.scrollTop,V=j.currentTarget.scrollLeft;(je=et.current)==null||je.scroll({top:L,left:V,behavior:"instant"}),(Ie=pt.current)==null||Ie.scroll({top:L,behavior:"instant"});const ae=Math.floor(L/I),Z=Math.ceil(_/2);T(ae+Z)},[I,_]),$=N.useCallback((j,L)=>{queueMicrotask(()=>{G.current&&(j&&(G.current.selectionStart=j),L&&(G.current.selectionEnd=L))})},[]),z=N.useCallback(j=>{j.preventDefault();const L=j.currentTarget.value,V=j.currentTarget.selectionStart,ae=j.currentTarget.selectionEnd,Z=j.shiftKey,[je,Ie,kr]=le(L,V,ae,Z);p(je),g(je,Ie,kr),$(V!==ae?Ie:void 0,kr)},[le,p]),tt=N.useCallback(j=>{const L=j.currentTarget.selectionStart,V=j.currentTarget.selectionEnd;if(L===V)return;j.preventDefault();const ae=j.currentTarget.value,Z=$e(ae,j.key,L,V),je=L+1,Ie=V+1;p(Z),g(Z,je,Ie),$(je,Ie)},[$e,p]),te=N.useCallback(j=>{const L=j.currentTarget.selectionStart,V=j.currentTarget.selectionEnd;if(L!==V)return;j.preventDefault();const ae=j.currentTarget.value,[Z,je,Ie]=Ot(ae,L),kr=_+Math.floor(j.currentTarget.scrollTop/I);T(Z),b((je.match(/\n/g)||[]).length+1),p(je),g(je,Ie,Ie),$(void 0,Ie),queueMicrotask(()=>{G.current&&(Z>=kr&&(G.current.scrollTop+=I),G.current.scrollLeft=0)})},[_,I,p]),Ae=N.useCallback(j=>{j.preventDefault();const L=v();if(!L)return;const{code:V,start:ae,end:Z}=L;p(V),b((V.match(/\n/g)||[]).length+1),$(ae,Z)},[p]),me=N.useCallback(j=>{j.preventDefault();const L=w();if(!L)return;const{code:V,start:ae,end:Z}=L;p(V),b((V.match(/\n/g)||[]).length+1),$(ae,Z)},[p]),Ue=N.useCallback(j=>{const L=j.key;d&&L==="Tab"?z(j):a&&/[\[\]{}()<>\"'`]/g.test(L)?tt(j):s&&L==="Enter"?te(j):j.ctrlKey&&L==="z"?Ae(j):j.ctrlKey&&L==="y"&&me(j)},[z,tt,te,Ae,me]);return N.useEffect(()=>{const j=()=>{if(!G.current)return;const V=Math.ceil(G.current.clientHeight/I),ae=Math.floor(G.current.scrollTop/I),Z=Math.ceil(V/2);T(ae+Z)},L=new ResizeObserver(j);return G.current&&L.observe(G.current),window.addEventListener("resize",j),()=>{G.current&&L.unobserve(G.current),window.removeEventListener("resize",j)}},[]),P.jsxs("div",{className:fi.easyCodeEditor,style:{border:C,font:E,fontSize:I,lineHeight:1},children:[P.jsx(lf,{showLineNumbers:h,lineCount:F,theme:m,ref:pt}),P.jsxs("div",{className:fi.easyCodeEditorContainer,children:[P.jsx("textarea",{className:fi.easyCodeEditorInput,wrap:"off",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,onChange:A,onScroll:O,onKeyDown:Ue,ref:G,style:{caretColor:S,scrollbarColor:`${f} ${u}`},value:c,readOnly:l,"aria-label":"React Easy Code Editor","aria-readonly":l,placeholder:r}),P.jsx(tf,{ref:et,code:c,highlight:o,visibleLine:x,visibleLineCount:_,scrollWidth:((Jt=G.current)==null?void 0:Jt.scrollWidth)||0,theme:m})]})]})},hf={border:"1px solid #686868",backgroundColor:"#18181b",color:"rgb(188, 188, 188)",numbersBackgroundColor:"#18181b",numbersColor:"#686868",numbersBorder:"1px solid #686868",caretColor:"#f5f5f5",font:"Fira code, Fira Mono, Consolas, Menlo, Courier, monospace",fontSize:16},Zt=N.createContext(void 0),mf=({children:e})=>{const[t,n]=N.useState("dark"),r=N.useCallback(()=>{n(i=>i==="dark"?"light":"dark")},[]),o=t==="dark"?hf:Sc;return document.documentElement.style.setProperty("--background-color",o.backgroundColor),document.documentElement.style.setProperty("--background-secondary-color",t==="dark"?"#202024":"#ececec"),document.documentElement.style.setProperty("--text-color",o.color),document.documentElement.style.setProperty("--text-secondary-color",t==="dark"?"aliceblue":"#202024"),P.jsx(Zt.Provider,{value:{theme:o,themeName:t,switchTheme:r},children:e})},gf="_header_1l3da_1",yf="_headerContainer_1l3da_11",vf="_headerTextContainer_1l3da_27",wf="_headerIcon_1l3da_37",Cf="_rotating_1l3da_1",kf="_headerText_1l3da_27",Ef="_themeSelect_1l3da_57",tn={header:gf,headerContainer:yf,headerTextContainer:vf,headerIcon:wf,rotating:Cf,headerText:kf,themeSelect:Ef},Sf=()=>{const{themeName:e,switchTheme:t}=N.useContext(Zt);return P.jsx("div",{className:tn.header,children:P.jsxs("div",{className:tn.headerContainer,children:[P.jsxs("span",{className:tn.headerTextContainer,children:[P.jsx("img",{className:tn.headerIcon,src:"./react.svg",alt:"react"}),P.jsx("span",{className:tn.headerText,children:"React Easy Code Editor"})]}),P.jsx("div",{className:tn.themeSelect,onClick:t,children:e==="dark"?"🌒":"☀️"})]})})};var _c={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(c){return c instanceof s?new s(c.type,u(c.content),c.alias):Array.isArray(c)?c.map(u):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(c,p){p=p||{};var g,v;switch(a.util.type(c)){case"Object":if(v=a.util.objId(c),p[v])return p[v];g={},p[v]=g;for(var w in c)c.hasOwnProperty(w)&&(g[w]=u(c[w],p));return g;case"Array":return v=a.util.objId(c),p[v]?p[v]:(g=[],p[v]=g,c.forEach(function(x,T){g[T]=u(x,p)}),g);default:return c}},getLanguage:function(u){for(;u;){var c=o.exec(u.className);if(c)return c[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,c){u.className=u.className.replace(RegExp(o,"gi"),""),u.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(g){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(u){var c=document.getElementsByTagName("script");for(var p in c)if(c[p].src==u)return c[p]}return null}},isActive:function(u,c,p){for(var g="no-"+c;u;){var v=u.classList;if(v.contains(c))return!0;if(v.contains(g))return!1;u=u.parentElement}return!!p}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(u,c){var p=a.util.clone(a.languages[u]);for(var g in c)p[g]=c[g];return p},insertBefore:function(u,c,p,g){g=g||a.languages;var v=g[u],w={};for(var x in v)if(v.hasOwnProperty(x)){if(x==c)for(var T in p)p.hasOwnProperty(T)&&(w[T]=p[T]);p.hasOwnProperty(x)||(w[x]=v[x])}var F=g[u];return g[u]=w,a.languages.DFS(a.languages,function(b,le){le===F&&b!=u&&(this[b]=w)}),w},DFS:function u(c,p,g,v){v=v||{};var w=a.util.objId;for(var x in c)if(c.hasOwnProperty(x)){p.call(c,x,c[x],g||x);var T=c[x],F=a.util.type(T);F==="Object"&&!v[w(T)]?(v[w(T)]=!0,u(T,p,null,v)):F==="Array"&&!v[w(T)]&&(v[w(T)]=!0,u(T,p,x,v))}}},plugins:{},highlightAll:function(u,c){a.highlightAllUnder(document,u,c)},highlightAllUnder:function(u,c,p){var g={callback:p,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),a.hooks.run("before-all-elements-highlight",g);for(var v=0,w;w=g.elements[v++];)a.highlightElement(w,c===!0,g.callback)},highlightElement:function(u,c,p){var g=a.util.getLanguage(u),v=a.languages[g];a.util.setLanguage(u,g);var w=u.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(w,g);var x=u.textContent,T={element:u,language:g,grammar:v,code:x};function F(le){T.highlightedCode=le,a.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,a.hooks.run("after-highlight",T),a.hooks.run("complete",T),p&&p.call(T.element)}if(a.hooks.run("before-sanity-check",T),w=T.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!T.code){a.hooks.run("complete",T),p&&p.call(T.element);return}if(a.hooks.run("before-highlight",T),!T.grammar){F(a.util.encode(T.code));return}if(c&&r.Worker){var b=new Worker(a.filename);b.onmessage=function(le){F(le.data)},b.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else F(a.highlight(T.code,T.grammar,T.language))},highlight:function(u,c,p){var g={code:u,grammar:c,language:p};if(a.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=a.tokenize(g.code,g.grammar),a.hooks.run("after-tokenize",g),s.stringify(a.util.encode(g.tokens),g.language)},tokenize:function(u,c){var p=c.rest;if(p){for(var g in p)c[g]=p[g];delete c.rest}var v=new h;return m(v,v.head,u),y(u,v,c,v.head,0),S(v)},hooks:{all:{},add:function(u,c){var p=a.hooks.all;p[u]=p[u]||[],p[u].push(c)},run:function(u,c){var p=a.hooks.all[u];if(!(!p||!p.length))for(var g=0,v;v=p[g++];)v(c)}},Token:s};r.Prism=a;function s(u,c,p,g){this.type=u,this.content=c,this.alias=p,this.length=(g||"").length|0}s.stringify=function u(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var g="";return c.forEach(function(F){g+=u(F,p)}),g}var v={type:c.type,content:u(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},w=c.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(v.classes,w):v.classes.push(w)),a.hooks.run("wrap",v);var x="";for(var T in v.attributes)x+=" "+T+'="'+(v.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+x+">"+v.content+"</"+v.tag+">"};function d(u,c,p,g){u.lastIndex=c;var v=u.exec(p);if(v&&g&&v[1]){var w=v[1].length;v.index+=w,v[0]=v[0].slice(w)}return v}function y(u,c,p,g,v,w){for(var x in p)if(!(!p.hasOwnProperty(x)||!p[x])){var T=p[x];T=Array.isArray(T)?T:[T];for(var F=0;F<T.length;++F){if(w&&w.cause==x+","+F)return;var b=T[F],le=b.inside,$e=!!b.lookbehind,Ot=!!b.greedy,G=b.alias;if(Ot&&!b.pattern.global){var pt=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,pt+"g")}for(var et=b.pattern||b,_=g.next,A=v;_!==c.tail&&!(w&&A>=w.reach);A+=_.value.length,_=_.next){var O=_.value;if(c.length>u.length)return;if(!(O instanceof s)){var $=1,z;if(Ot){if(z=d(et,A,u,$e),!z||z.index>=u.length)break;var me=z.index,tt=z.index+z[0].length,te=A;for(te+=_.value.length;me>=te;)_=_.next,te+=_.value.length;if(te-=_.value.length,A=te,_.value instanceof s)continue;for(var Ae=_;Ae!==c.tail&&(te<tt||typeof Ae.value=="string");Ae=Ae.next)$++,te+=Ae.value.length;$--,O=u.slice(A,te),z.index-=A}else if(z=d(et,0,O,$e),!z)continue;var me=z.index,Ue=z[0],Jt=O.slice(0,me),j=O.slice(me+Ue.length),L=A+O.length;w&&L>w.reach&&(w.reach=L);var V=_.prev;Jt&&(V=m(c,V,Jt),A+=Jt.length),C(c,V,$);var ae=new s(x,le?a.tokenize(Ue,le):Ue,G,Ue);if(_=m(c,V,ae),j&&m(c,_,j),$>1){var Z={cause:x+","+F,reach:L};y(u,c,p,_.prev,A,Z),w&&Z.reach>w.reach&&(w.reach=Z.reach)}}}}}}function h(){var u={value:null,prev:null,next:null},c={value:null,prev:u,next:null};u.next=c,this.head=u,this.tail=c,this.length=0}function m(u,c,p){var g=c.next,v={value:p,prev:c,next:g};return c.next=v,g.prev=v,u.length++,v}function C(u,c,p){for(var g=c.next,v=0;v<p&&g!==u.tail;v++)g=g.next;c.next=g,g.prev=c,u.length-=v}function S(u){for(var c=[],p=u.head.next;p!==u.tail;)c.push(p.value),p=p.next;return c}if(!r.document)return r.addEventListener&&(a.disableWorkerMessageHandler||r.addEventListener("message",function(u){var c=JSON.parse(u.data),p=c.language,g=c.code,v=c.immediateClose;r.postMessage(a.highlight(g,a.languages[p],p)),v&&r.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function I(){a.manual||a.highlightAll()}if(!a.manual){var f=document.readyState;f==="loading"||f==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return a}(t);e.exports&&(e.exports=n),typeof ta<"u"&&(ta.Prism=n)})(_c);var Ft=_c.exports;const _f=`<!-- Welcome to the <ReactEasyCodeEditor /> real-time demo! -->
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
<a class="link" href="https://www.npmjs.com/package/react-easy-code-editor">v1.2.0</a>
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
</p>`,xf="_realTimePreview_3hwhe_1",Tf="_realTimePreviewContainer_3hwhe_23",Rf="_editorContainer_3hwhe_39",Pf="_output_3hwhe_51",Mr={realTimePreview:xf,realTimePreviewContainer:Tf,editorContainer:Rf,output:Pf},Nf=()=>{const[e,t]=N.useState(_f),[n,r]=N.useState(e),[o,i]=N.useTransition(),{theme:l}=N.useContext(Zt),a=N.useCallback(d=>{t(d),i(()=>r(d))},[]),s=N.useCallback(d=>Ft.highlight(d,Ft.languages.html),[]);return P.jsx("div",{className:Mr.realTimePreview,children:P.jsxs("div",{className:Mr.realTimePreviewContainer,children:[P.jsx("div",{className:Mr.editorContainer,children:P.jsx(Mo,{value:e,onChange:a,highlight:s,theme:{...l,border:"none",backgroundColor:"transparent"},showLineNumbers:!1})}),P.jsx("div",{className:Mr.output,dangerouslySetInnerHTML:{__html:n}})]})})},Ff=`/**
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
}`,Af="_performance_11q24_1",jf="_performanceContainer_11q24_11",If="_performanceInfo_11q24_27",Of="_performanceInfoP_11q24_37",Lf="_performanceLink_11q24_47",Df="_performanceEditor_11q24_55",Lt={performance:Af,performanceContainer:jf,performanceInfo:If,performanceInfoP:Of,performanceLink:Lf,performanceEditor:Df},bf=()=>{const[e,t]=N.useState(Ff),{theme:n}=N.useContext(Zt);return P.jsx("div",{className:Lt.performance,children:P.jsxs("div",{className:Lt.performanceContainer,children:[P.jsxs("div",{className:Lt.performanceInfo,children:[P.jsx("h1",{children:"Performance First."}),P.jsxs("p",{className:Lt.performanceInfoP,children:["Highlight thousands of code lines efficiently, using some of your favourite libraries such as"," ",P.jsx("a",{className:Lt.performanceLink,href:"https://prismjs.com/",children:"prism.js"}),","," ",P.jsx("a",{className:Lt.performanceLink,href:"https://highlightjs.org/",children:"highlight.js"})," ","or through a custom function."]})]}),P.jsx("div",{className:Lt.performanceEditor,children:P.jsx(Mo,{value:e,onChange:r=>t(r),highlight:r=>Ft.highlight(r,Ft.languages.js),theme:n})})]})})},zf="_theme_q5bhw_1",Mf="_themeContainer_q5bhw_11",$f="_themeInfo_q5bhw_27",Uf="_themeInfoP_q5bhw_39",Vf="_themeEditor_q5bhw_49",Wf="_toggleLineNumbers_q5bhw_61",Bf="_lineNumbersCheckbox_q5bhw_69",Dt={theme:zf,themeContainer:Mf,themeInfo:$f,themeInfoP:Uf,themeEditor:Vf,toggleLineNumbers:Wf,lineNumbersCheckbox:Bf},Hf=()=>{const{theme:e}=N.useContext(Zt),[t,n]=N.useState(e),[r,o]=N.useState(JSON.stringify(t,void 0,4)),[i,l]=N.useState(!1),a=N.useRef(!1);return!a.current&&e!==t&&n(e),P.jsx("div",{className:Dt.theme,children:P.jsxs("div",{className:Dt.themeContainer,children:[P.jsx("div",{className:Dt.themeEditor,children:P.jsx(Mo,{value:r,onChange:s=>{a.current=!0,o(s);try{const d=JSON.parse(s);n(d)}catch{console.log("Invalid Theme")}},highlight:s=>Ft.highlight(s,Ft.languages.js),theme:t,showLineNumbers:i})}),P.jsxs("div",{className:Dt.themeInfo,children:[P.jsx("h1",{children:"Customizable."}),P.jsx("p",{className:Dt.themeInfoP,children:"Style the editor component to suit your needs or personal preferences using a simple theme object."}),P.jsxs("p",{className:Dt.toggleLineNumbers,children:[P.jsx("input",{className:Dt.lineNumbersCheckbox,type:"checkbox",onChange:()=>l(!i)}),"Show Line Numbers?"]})]})]})})},Yf=`/**
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

export default App;`,Kf="_simple_62vy4_1",Qf="_simpleContainer_62vy4_11",qf="_simpleInfo_62vy4_27",Gf="_simpleInfoP_62vy4_37",Xf="_simpleLink_62vy4_47",Zf="_simpleEditor_62vy4_55",Mn={simple:Kf,simpleContainer:Qf,simpleInfo:qf,simpleInfoP:Gf,simpleLink:Xf,simpleEditor:Zf},Jf=()=>{const[e,t]=N.useState(Yf),{theme:n}=N.useContext(Zt);return P.jsx("div",{className:Mn.simple,children:P.jsxs("div",{className:Mn.simpleContainer,children:[P.jsxs("div",{className:Mn.simpleInfo,children:[P.jsx("h1",{children:"Simple."}),P.jsx("p",{className:Mn.simpleInfoP,children:"Ready to use out of the box. Perfect for example code embeds, forms where code can be submitted, or simply as an input with line numbering."})]}),P.jsx("div",{className:Mn.simpleEditor,children:P.jsx(Mo,{value:e,onChange:r=>t(r),highlight:r=>Ft.highlight(r,Ft.languages.jsx),theme:n,dynamicHighlight:!1,readonly:!0})})]})})},eh="_footer_18zwo_1",th="_footerContainer_18zwo_11",nh="_footerContainerImg_18zwo_33",bt={footer:eh,footerContainer:th,footerContainerImg:nh},rh=()=>{const{theme:e,themeName:t}=N.useContext(Zt),n=e.backgroundColor.replace("#",""),r=t==="dark"?"aliceblue":"202024";return P.jsx("div",{className:bt.footer,children:P.jsxs("div",{className:bt.footerContainer,children:[P.jsx("img",{className:bt.footerContainerImg,src:`https://shields.io/badge/Node-${n}?logo=nodedotjs&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:bt.footerContainerImg,src:`https://shields.io/badge/React-${n}?logo=React&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:bt.footerContainerImg,src:`https://shields.io/badge/TypeScript-${n}?logo=TypeScript&logoColor=${r}&style=flat-square`}),P.jsx("img",{className:bt.footerContainerImg,src:`https://img.shields.io/badge/vite-${n}?style=flat-square&logo=vite&logoColor=${r}`}),P.jsx("img",{className:bt.footerContainerImg,src:`https://img.shields.io/badge/vitest-${n}?style=flat-square&logo=vitest&logoColor=${r}`})]})})};Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(s,d){return s=s.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(s,d)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(s){return s?typeof s=="string"?s:typeof s.content=="string"?s.content:s.content.map(l).join(""):""},a=function(s){for(var d=[],y=0;y<s.length;y++){var h=s[y],m=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===l(h.content[0].content[1])&&d.pop():h.content[h.content.length-1].content==="/>"||d.push({tagName:l(h.content[0].content[1]),openedBraces:0}):d.length>0&&h.type==="punctuation"&&h.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?d[d.length-1].openedBraces--:m=!0),(m||typeof h=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var C=l(h);y<s.length-1&&(typeof s[y+1]=="string"||s[y+1].type==="plain-text")&&(C+=l(s[y+1]),s.splice(y+1,1)),y>0&&(typeof s[y-1]=="string"||s[y-1].type==="plain-text")&&(C=l(s[y-1])+C,s.splice(y-1,1),y--),s[y]=new e.Token("plain-text",C,null,C)}h.content&&typeof h.content!="string"&&a(h.content)}};e.hooks.add("after-tokenize",function(s){s.language!=="jsx"&&s.language!=="tsx"||a(s.tokens)})})(Prism);const oh=()=>P.jsxs(mf,{children:[P.jsx(Sf,{}),P.jsx(Nf,{}),P.jsx(bf,{}),P.jsx(Hf,{}),P.jsx(Jf,{}),P.jsx(rh,{})]});hi.createRoot(document.getElementById("root")).render(P.jsx(N.StrictMode,{children:P.jsx(oh,{})}));
