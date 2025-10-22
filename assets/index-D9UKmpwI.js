(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rl={exports:{}},Ti={},Ml={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),eu=Symbol.for("react.portal"),tu=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),lu=Symbol.for("react.memo"),cu=Symbol.for("react.lazy"),wo=Symbol.iterator;function du(e){return e===null||typeof e!="object"?null:(e=wo&&e[wo]||e["@@iterator"],typeof e=="function"?e:null)}var El={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zl=Object.assign,Dl={};function Cn(e,n,s){this.props=e,this.context=n,this.refs=Dl,this.updater=s||El}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ol(){}Ol.prototype=Cn.prototype;function ka(e,n,s){this.props=e,this.context=n,this.refs=Dl,this.updater=s||El}var Sa=ka.prototype=new Ol;Sa.constructor=ka;zl(Sa,Cn.prototype);Sa.isPureReactComponent=!0;var jo=Array.isArray,Fl=Object.prototype.hasOwnProperty,Ca={current:null},Ll={key:!0,ref:!0,__self:!0,__source:!0};function Bl(e,n,s){var i,r={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Fl.call(n,i)&&!Ll.hasOwnProperty(i)&&(r[i]=n[i]);var l=arguments.length-2;if(l===1)r.children=s;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:fs,type:e,key:a,ref:o,props:r,_owner:Ca.current}}function uu(e,n){return{$$typeof:fs,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function mu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return n[s]})}var No=/\/+/g;function Ji(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mu(""+e.key):n.toString(36)}function Hs(e,n,s,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fs:case eu:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Ji(o,0):i,jo(r)?(s="",e!=null&&(s=e.replace(No,"$&/")+"/"),Hs(r,n,s,"",function(d){return d})):r!=null&&(Ia(r)&&(r=uu(r,s+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(No,"$&/")+"/")+e)),n.push(r)),1;if(o=0,i=i===""?".":i+":",jo(e))for(var l=0;l<e.length;l++){a=e[l];var c=i+Ji(a,l);o+=Hs(a,n,s,c,r)}else if(c=du(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=i+Ji(a,l++),o+=Hs(a,n,s,c,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,n,s){if(e==null)return e;var i=[],r=0;return Hs(e,i,"","",function(a){return n.call(s,a,r++)}),i}function pu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Vs={transition:null},hu={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:Ca};function _l(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Cs,forEach:function(e,n,s){Cs(e,function(){n.apply(this,arguments)},s)},count:function(e){var n=0;return Cs(e,function(){n++}),n},toArray:function(e){return Cs(e,function(n){return n})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Cn;M.Fragment=tu;M.Profiler=su;M.PureComponent=ka;M.StrictMode=nu;M.Suspense=ou;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hu;M.act=_l;M.cloneElement=function(e,n,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=zl({},e.props),r=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Ca.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in n)Fl.call(n,c)&&!Ll.hasOwnProperty(c)&&(i[c]=n[c]===void 0&&l!==void 0?l[c]:n[c])}var c=arguments.length-2;if(c===1)i.children=s;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:fs,type:e.type,key:r,ref:a,props:i,_owner:o}};M.createContext=function(e){return e={$$typeof:ru,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iu,_context:e},e.Consumer=e};M.createElement=Bl;M.createFactory=function(e){var n=Bl.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:au,render:e}};M.isValidElement=Ia;M.lazy=function(e){return{$$typeof:cu,_payload:{_status:-1,_result:e},_init:pu}};M.memo=function(e,n){return{$$typeof:lu,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Vs.transition;Vs.transition={};try{e()}finally{Vs.transition=n}};M.unstable_act=_l;M.useCallback=function(e,n){return fe.current.useCallback(e,n)};M.useContext=function(e){return fe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};M.useEffect=function(e,n){return fe.current.useEffect(e,n)};M.useId=function(){return fe.current.useId()};M.useImperativeHandle=function(e,n,s){return fe.current.useImperativeHandle(e,n,s)};M.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return fe.current.useMemo(e,n)};M.useReducer=function(e,n,s){return fe.current.useReducer(e,n,s)};M.useRef=function(e){return fe.current.useRef(e)};M.useState=function(e){return fe.current.useState(e)};M.useSyncExternalStore=function(e,n,s){return fe.current.useSyncExternalStore(e,n,s)};M.useTransition=function(){return fe.current.useTransition()};M.version="18.3.1";Ml.exports=M;var W=Ml.exports;const ql=Jd(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=W,xu=Symbol.for("react.element"),fu=Symbol.for("react.fragment"),yu=Object.prototype.hasOwnProperty,vu=gu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bu={key:!0,ref:!0,__self:!0,__source:!0};function Ul(e,n,s){var i,r={},a=null,o=null;s!==void 0&&(a=""+s),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)yu.call(n,i)&&!bu.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:xu,type:e,key:a,ref:o,props:r,_owner:vu.current}}Ti.Fragment=fu;Ti.jsx=Ul;Ti.jsxs=Ul;Rl.exports=Ti;var t=Rl.exports,Wl={exports:{}},Pe={},Hl={exports:{}},Vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,A){var R=C.length;C.push(A);e:for(;0<R;){var Q=R-1>>>1,ne=C[Q];if(0<r(ne,A))C[Q]=A,C[R]=ne,R=Q;else break e}}function s(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var A=C[0],R=C.pop();if(R!==A){C[0]=R;e:for(var Q=0,ne=C.length,ks=ne>>>1;Q<ks;){var Rt=2*(Q+1)-1,Xi=C[Rt],Mt=Rt+1,Ss=C[Mt];if(0>r(Xi,R))Mt<ne&&0>r(Ss,Xi)?(C[Q]=Ss,C[Mt]=R,Q=Mt):(C[Q]=Xi,C[Rt]=R,Q=Rt);else if(Mt<ne&&0>r(Ss,R))C[Q]=Ss,C[Mt]=R,Q=Mt;else break e}}return A}function r(C,A){var R=C.sortIndex-A.sortIndex;return R!==0?R:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],g=1,x=null,h=3,b=!1,w=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var A=s(d);A!==null;){if(A.callback===null)i(d);else if(A.startTime<=C)i(d),A.sortIndex=A.expirationTime,n(c,A);else break;A=s(d)}}function f(C){if(j=!1,p(C),!w)if(s(c)!==null)w=!0,Ki(S);else{var A=s(d);A!==null&&Zi(f,A.startTime-C)}}function S(C,A){w=!1,j&&(j=!1,m(T),T=-1),b=!0;var R=h;try{for(p(A),x=s(c);x!==null&&(!(x.expirationTime>A)||C&&!Oe());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,h=x.priorityLevel;var ne=Q(x.expirationTime<=A);A=e.unstable_now(),typeof ne=="function"?x.callback=ne:x===s(c)&&i(c),p(A)}else i(c);x=s(c)}if(x!==null)var ks=!0;else{var Rt=s(d);Rt!==null&&Zi(f,Rt.startTime-A),ks=!1}return ks}finally{x=null,h=R,b=!1}}var I=!1,P=null,T=-1,G=5,E=-1;function Oe(){return!(e.unstable_now()-E<G)}function An(){if(P!==null){var C=e.unstable_now();E=C;var A=!0;try{A=P(!0,C)}finally{A?Rn():(I=!1,P=null)}}else I=!1}var Rn;if(typeof u=="function")Rn=function(){u(An)};else if(typeof MessageChannel<"u"){var bo=new MessageChannel,Xd=bo.port2;bo.port1.onmessage=An,Rn=function(){Xd.postMessage(null)}}else Rn=function(){_(An,0)};function Ki(C){P=C,I||(I=!0,Rn())}function Zi(C,A){T=_(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,Ki(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return s(c)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var R=h;h=A;try{return C()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=h;h=C;try{return A()}finally{h=R}},e.unstable_scheduleCallback=function(C,A,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,C){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,C={id:g++,callback:A,priorityLevel:C,startTime:R,expirationTime:ne,sortIndex:-1},R>Q?(C.sortIndex=R,n(d,C),s(c)===null&&C===s(d)&&(j?(m(T),T=-1):j=!0,Zi(f,R-Q))):(C.sortIndex=ne,n(c,C),w||b||(w=!0,Ki(S))),C},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(C){var A=h;return function(){var R=h;h=A;try{return C.apply(this,arguments)}finally{h=R}}}})(Vl);Hl.exports=Vl;var wu=Hl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=W,Ie=wu;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $l=new Set,Jn={};function $t(e,n){hn(e,n),hn(e+"Capture",n)}function hn(e,n){for(Jn[e]=n,e=0;e<n.length;e++)$l.add(n[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pr=Object.prototype.hasOwnProperty,Nu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ko={},So={};function ku(e){return Pr.call(So,e)?!0:Pr.call(ko,e)?!1:Nu.test(e)?So[e]=!0:(ko[e]=!0,!1)}function Su(e,n,s,i){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cu(e,n,s,i){if(n===null||typeof n>"u"||Su(e,n,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,s,i,r,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Pa,Ta);ce[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Pa,Ta);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Pa,Ta);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,n,s,i){var r=ce.hasOwnProperty(n)?ce[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cu(n,s,r,i)&&(s=null),i||r===null?ku(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):r.mustUseProperty?e[r.propertyName]=s===null?r.type===3?!1:"":s:(n=r.attributeName,i=r.attributeNamespace,s===null?e.removeAttribute(n):(r=r.type,s=r===3||r===4&&s===!0?"":""+s,i?e.setAttributeNS(i,n,s):e.setAttribute(n,s))))}var dt=ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),Tr=Symbol.for("react.profiler"),Gl=Symbol.for("react.provider"),Ql=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),Ar=Symbol.for("react.suspense"),Rr=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Yl=Symbol.for("react.offscreen"),Co=Symbol.iterator;function Mn(e){return e===null||typeof e!="object"?null:(e=Co&&e[Co]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,er;function _n(e){if(er===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);er=n&&n[1]||""}return`
`+er+e}var tr=!1;function nr(e,n){if(!e||tr)return"";tr=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var i=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){i=d}e.call(n.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==a[l]){var c=`
`+r[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{tr=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?_n(e):""}function Iu(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=nr(e.type,!1),e;case 11:return e=nr(e.type.render,!1),e;case 1:return e=nr(e.type,!0),e;default:return""}}function Mr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Yt:return"Portal";case Tr:return"Profiler";case Ra:return"StrictMode";case Ar:return"Suspense";case Rr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ql:return(e.displayName||"Context")+".Consumer";case Gl:return(e._context.displayName||"Context")+".Provider";case Ma:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return n=e.displayName||null,n!==null?n:Mr(e.type)||"Memo";case mt:n=e._payload,e=e._init;try{return Mr(e(n))}catch{}}return null}function Pu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mr(n);case 8:return n===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tu(e){var n=Kl(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,a=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ps(e){e._valueTracker||(e._valueTracker=Tu(e))}function Zl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),i="";return e&&(i=Kl(e)?e.checked?"true":"false":e.value),e=i,e!==s?(n.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Er(e,n){var s=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Io(e,n){var s=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;s=Ct(n.value!=null?n.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xl(e,n){n=n.checked,n!=null&&Aa(e,"checked",n,!1)}function zr(e,n){Xl(e,n);var s=Ct(n.value),i=n.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Dr(e,n.type,s):n.hasOwnProperty("defaultValue")&&Dr(e,n.type,Ct(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Po(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Dr(e,n,s){(n!=="number"||ii(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var qn=Array.isArray;function ln(e,n,s,i){if(e=e.options,n){n={};for(var r=0;r<s.length;r++)n["$"+s[r]]=!0;for(s=0;s<e.length;s++)r=n.hasOwnProperty("$"+e[s].value),e[s].selected!==r&&(e[s].selected=r),r&&i&&(e[s].defaultSelected=!0)}else{for(s=""+Ct(s),n=null,r=0;r<e.length;r++){if(e[r].value===s){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Or(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function To(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(y(92));if(qn(s)){if(1<s.length)throw Error(y(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:Ct(s)}}function Jl(e,n){var s=Ct(n.value),i=Ct(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function Ao(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ec(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ts,tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,s,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function es(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Au=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Au.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Hn[n]=Hn[e]})});function nc(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+n).trim():n+"px"}function sc(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var i=s.indexOf("--")===0,r=nc(s,n[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,r):e[s]=r}}var Ru=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lr(e,n){if(n){if(Ru[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function Br(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _r=null;function za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qr=null,cn=null,dn=null;function Ro(e){if(e=bs(e)){if(typeof qr!="function")throw Error(y(280));var n=e.stateNode;n&&(n=zi(n),qr(e.stateNode,e.type,n))}}function ic(e){cn?dn?dn.push(e):dn=[e]:cn=e}function rc(){if(cn){var e=cn,n=dn;if(dn=cn=null,Ro(e),n)for(e=0;e<n.length;e++)Ro(n[e])}}function ac(e,n){return e(n)}function oc(){}var sr=!1;function lc(e,n,s){if(sr)return e(n,s);sr=!0;try{return ac(e,n,s)}finally{sr=!1,(cn!==null||dn!==null)&&(oc(),rc())}}function ts(e,n){var s=e.stateNode;if(s===null)return null;var i=zi(s);if(i===null)return null;s=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(y(231,n,typeof s));return s}var Ur=!1;if(it)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ur=!1}function Mu(e,n,s,i,r,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{n.apply(s,d)}catch(g){this.onError(g)}}var Vn=!1,ri=null,ai=!1,Wr=null,Eu={onError:function(e){Vn=!0,ri=e}};function zu(e,n,s,i,r,a,o,l,c){Vn=!1,ri=null,Mu.apply(Eu,arguments)}function Du(e,n,s,i,r,a,o,l,c){if(zu.apply(this,arguments),Vn){if(Vn){var d=ri;Vn=!1,ri=null}else throw Error(y(198));ai||(ai=!0,Wr=d)}}function Gt(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function cc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mo(e){if(Gt(e)!==e)throw Error(y(188))}function Ou(e){var n=e.alternate;if(!n){if(n=Gt(e),n===null)throw Error(y(188));return n!==e?null:e}for(var s=e,i=n;;){var r=s.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){s=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===s)return Mo(r),e;if(a===i)return Mo(r),n;a=a.sibling}throw Error(y(188))}if(s.return!==i.return)s=r,i=a;else{for(var o=!1,l=r.child;l;){if(l===s){o=!0,s=r,i=a;break}if(l===i){o=!0,i=r,s=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===s){o=!0,s=a,i=r;break}if(l===i){o=!0,i=a,s=r;break}l=l.sibling}if(!o)throw Error(y(189))}}if(s.alternate!==i)throw Error(y(190))}if(s.tag!==3)throw Error(y(188));return s.stateNode.current===s?e:n}function dc(e){return e=Ou(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uc(e);if(n!==null)return n;e=e.sibling}return null}var mc=Ie.unstable_scheduleCallback,Eo=Ie.unstable_cancelCallback,Fu=Ie.unstable_shouldYield,Lu=Ie.unstable_requestPaint,Y=Ie.unstable_now,Bu=Ie.unstable_getCurrentPriorityLevel,Da=Ie.unstable_ImmediatePriority,pc=Ie.unstable_UserBlockingPriority,oi=Ie.unstable_NormalPriority,_u=Ie.unstable_LowPriority,hc=Ie.unstable_IdlePriority,Ai=null,Ye=null;function qu(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Hu,Uu=Math.log,Wu=Math.LN2;function Hu(e){return e>>>=0,e===0?32:31-(Uu(e)/Wu|0)|0}var As=64,Rs=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,n){var s=e.pendingLanes;if(s===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=s&268435455;if(o!==0){var l=o&~r;l!==0?i=Un(l):(a&=o,a!==0&&(i=Un(a)))}else o=s&~r,o!==0?i=Un(o):a!==0&&(i=Un(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(i&4&&(i|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)s=31-We(n),r=1<<s,i|=e[s],n&=~r;return i}function Vu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(e,n){for(var s=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-We(a),l=1<<o,c=r[o];c===-1?(!(l&s)||l&i)&&(r[o]=Vu(l,n)):c<=n&&(e.expiredLanes|=l),a&=~l}}function Hr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=As;return As<<=1,!(As&4194240)&&(As=64),e}function ir(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ys(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-We(n),e[n]=s}function Gu(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var r=31-We(s),a=1<<r;n[r]=0,i[r]=-1,e[r]=-1,s&=~a}}function Oa(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var i=31-We(s),r=1<<i;r&n|e[i]&n&&(e[i]|=n),s&=~r}}var D=0;function xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,Fa,yc,vc,bc,Vr=!1,Ms=[],yt=null,vt=null,bt=null,ns=new Map,ss=new Map,ht=[],Qu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zo(e,n){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(n.pointerId)}}function zn(e,n,s,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:s,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},n!==null&&(n=bs(n),n!==null&&Fa(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Yu(e,n,s,i,r){switch(n){case"focusin":return yt=zn(yt,e,n,s,i,r),!0;case"dragenter":return vt=zn(vt,e,n,s,i,r),!0;case"mouseover":return bt=zn(bt,e,n,s,i,r),!0;case"pointerover":var a=r.pointerId;return ns.set(a,zn(ns.get(a)||null,e,n,s,i,r)),!0;case"gotpointercapture":return a=r.pointerId,ss.set(a,zn(ss.get(a)||null,e,n,s,i,r)),!0}return!1}function wc(e){var n=Dt(e.target);if(n!==null){var s=Gt(n);if(s!==null){if(n=s.tag,n===13){if(n=cc(s),n!==null){e.blockedOn=n,bc(e.priority,function(){yc(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=$r(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);_r=i,s.target.dispatchEvent(i),_r=null}else return n=bs(s),n!==null&&Fa(n),e.blockedOn=s,!1;n.shift()}return!0}function Do(e,n,s){$s(e)&&s.delete(n)}function Ku(){Vr=!1,yt!==null&&$s(yt)&&(yt=null),vt!==null&&$s(vt)&&(vt=null),bt!==null&&$s(bt)&&(bt=null),ns.forEach(Do),ss.forEach(Do)}function Dn(e,n){e.blockedOn===n&&(e.blockedOn=null,Vr||(Vr=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ku)))}function is(e){function n(r){return Dn(r,e)}if(0<Ms.length){Dn(Ms[0],e);for(var s=1;s<Ms.length;s++){var i=Ms[s];i.blockedOn===e&&(i.blockedOn=null)}}for(yt!==null&&Dn(yt,e),vt!==null&&Dn(vt,e),bt!==null&&Dn(bt,e),ns.forEach(n),ss.forEach(n),s=0;s<ht.length;s++)i=ht[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<ht.length&&(s=ht[0],s.blockedOn===null);)wc(s),s.blockedOn===null&&ht.shift()}var un=dt.ReactCurrentBatchConfig,ci=!0;function Zu(e,n,s,i){var r=D,a=un.transition;un.transition=null;try{D=1,La(e,n,s,i)}finally{D=r,un.transition=a}}function Xu(e,n,s,i){var r=D,a=un.transition;un.transition=null;try{D=4,La(e,n,s,i)}finally{D=r,un.transition=a}}function La(e,n,s,i){if(ci){var r=$r(e,n,s,i);if(r===null)hr(e,n,i,di,s),zo(e,i);else if(Yu(r,e,n,s,i))i.stopPropagation();else if(zo(e,i),n&4&&-1<Qu.indexOf(e)){for(;r!==null;){var a=bs(r);if(a!==null&&fc(a),a=$r(e,n,s,i),a===null&&hr(e,n,i,di,s),a===r)break;r=a}r!==null&&i.stopPropagation()}else hr(e,n,i,null,s)}}var di=null;function $r(e,n,s,i){if(di=null,e=za(i),e=Dt(e),e!==null)if(n=Gt(e),n===null)e=null;else if(s=n.tag,s===13){if(e=cc(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return di=e,null}function jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bu()){case Da:return 1;case pc:return 4;case oi:case _u:return 16;case hc:return 536870912;default:return 16}default:return 16}}var xt=null,Ba=null,Gs=null;function Nc(){if(Gs)return Gs;var e,n=Ba,s=n.length,i,r="value"in xt?xt.value:xt.textContent,a=r.length;for(e=0;e<s&&n[e]===r[e];e++);var o=s-e;for(i=1;i<=o&&n[s-i]===r[a-i];i++);return Gs=r.slice(e,1<i?1-i:void 0)}function Qs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function Oo(){return!1}function Te(e){function n(s,i,r,a,o){this._reactName=s,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(s=e[l],this[l]=s?s(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Es:Oo,this.isPropagationStopped=Oo,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),n}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Te(In),vs=V({},In,{view:0,detail:0}),Ju=Te(vs),rr,ar,On,Ri=V({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(rr=e.screenX-On.screenX,ar=e.screenY-On.screenY):ar=rr=0,On=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),Fo=Te(Ri),em=V({},Ri,{dataTransfer:0}),tm=Te(em),nm=V({},vs,{relatedTarget:0}),or=Te(nm),sm=V({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),im=Te(sm),rm=V({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),am=Te(rm),om=V({},In,{data:0}),Lo=Te(om),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dm[e])?!!n[e]:!1}function qa(){return um}var mm=V({},vs,{key:function(e){if(e.key){var n=lm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?Qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Te(mm),hm=V({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=Te(hm),gm=V({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),xm=Te(gm),fm=V({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Te(fm),vm=V({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Te(vm),wm=[9,13,27,32],Ua=it&&"CompositionEvent"in window,$n=null;it&&"documentMode"in document&&($n=document.documentMode);var jm=it&&"TextEvent"in window&&!$n,kc=it&&(!Ua||$n&&8<$n&&11>=$n),_o=" ",qo=!1;function Sc(e,n){switch(e){case"keyup":return wm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Nm(e,n){switch(e){case"compositionend":return Cc(n);case"keypress":return n.which!==32?null:(qo=!0,_o);case"textInput":return e=n.data,e===_o&&qo?null:e;default:return null}}function km(e,n){if(Zt)return e==="compositionend"||!Ua&&Sc(e,n)?(e=Nc(),Gs=Ba=xt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kc&&n.locale!=="ko"?null:n.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sm[e.type]:n==="textarea"}function Ic(e,n,s,i){ic(i),n=ui(n,"onChange"),0<n.length&&(s=new _a("onChange","change",null,s,i),e.push({event:s,listeners:n}))}var Gn=null,rs=null;function Cm(e){Lc(e,0)}function Mi(e){var n=en(e);if(Zl(n))return e}function Im(e,n){if(e==="change")return n}var Pc=!1;if(it){var lr;if(it){var cr="oninput"in document;if(!cr){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),cr=typeof Wo.oninput=="function"}lr=cr}else lr=!1;Pc=lr&&(!document.documentMode||9<document.documentMode)}function Ho(){Gn&&(Gn.detachEvent("onpropertychange",Tc),rs=Gn=null)}function Tc(e){if(e.propertyName==="value"&&Mi(rs)){var n=[];Ic(n,rs,e,za(e)),lc(Cm,n)}}function Pm(e,n,s){e==="focusin"?(Ho(),Gn=n,rs=s,Gn.attachEvent("onpropertychange",Tc)):e==="focusout"&&Ho()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(rs)}function Am(e,n){if(e==="click")return Mi(n)}function Rm(e,n){if(e==="input"||e==="change")return Mi(n)}function Mm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ve=typeof Object.is=="function"?Object.is:Mm;function as(e,n){if(Ve(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),i=Object.keys(n);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var r=s[i];if(!Pr.call(n,r)||!Ve(e[r],n[r]))return!1}return!0}function Vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $o(e,n){var s=Vo(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=n&&i>=n)return{node:s,offset:n-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Vo(s)}}function Ac(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ac(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rc(){for(var e=window,n=ii();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=ii(e.document)}return n}function Wa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Em(e){var n=Rc(),s=e.focusedElem,i=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Ac(s.ownerDocument.documentElement,s)){if(i!==null&&Wa(s)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=s.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=$o(s,a);var o=$o(s,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zm=it&&"documentMode"in document&&11>=document.documentMode,Xt=null,Gr=null,Qn=null,Qr=!1;function Go(e,n,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Qr||Xt==null||Xt!==ii(i)||(i=Xt,"selectionStart"in i&&Wa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qn&&as(Qn,i)||(Qn=i,i=ui(Gr,"onSelect"),0<i.length&&(n=new _a("onSelect","select",null,n,s),e.push({event:n,listeners:i}),n.target=Xt)))}function zs(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Jt={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},dr={},Mc={};it&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Ei(e){if(dr[e])return dr[e];if(!Jt[e])return e;var n=Jt[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Mc)return dr[e]=n[s];return e}var Ec=Ei("animationend"),zc=Ei("animationiteration"),Dc=Ei("animationstart"),Oc=Ei("transitionend"),Fc=new Map,Qo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,n){Fc.set(e,n),$t(n,[e])}for(var ur=0;ur<Qo.length;ur++){var mr=Qo[ur],Dm=mr.toLowerCase(),Om=mr[0].toUpperCase()+mr.slice(1);Pt(Dm,"on"+Om)}Pt(Ec,"onAnimationEnd");Pt(zc,"onAnimationIteration");Pt(Dc,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Oc,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Yo(e,n,s){var i=e.type||"unknown-event";e.currentTarget=s,Du(i,n,void 0,e),e.currentTarget=null}function Lc(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],r=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&r.isPropagationStopped())break e;Yo(r,l,d),a=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&r.isPropagationStopped())break e;Yo(r,l,d),a=c}}}if(ai)throw e=Wr,ai=!1,Wr=null,e}function L(e,n){var s=n[Jr];s===void 0&&(s=n[Jr]=new Set);var i=e+"__bubble";s.has(i)||(Bc(n,e,2,!1),s.add(i))}function pr(e,n,s){var i=0;n&&(i|=4),Bc(s,e,i,n)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Ds]){e[Ds]=!0,$l.forEach(function(s){s!=="selectionchange"&&(Fm.has(s)||pr(s,!1,e),pr(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ds]||(n[Ds]=!0,pr("selectionchange",!1,n))}}function Bc(e,n,s,i){switch(jc(n)){case 1:var r=Zu;break;case 4:r=Xu;break;default:r=La}s=r.bind(null,n,s,e),r=void 0,!Ur||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,s,{capture:!0,passive:r}):e.addEventListener(n,s,!0):r!==void 0?e.addEventListener(n,s,{passive:r}):e.addEventListener(n,s,!1)}function hr(e,n,s,i,r){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Dt(l),o===null)return;if(c=o.tag,c===5||c===6){i=a=o;continue e}l=l.parentNode}}i=i.return}lc(function(){var d=a,g=za(s),x=[];e:{var h=Fc.get(e);if(h!==void 0){var b=_a,w=e;switch(e){case"keypress":if(Qs(s)===0)break e;case"keydown":case"keyup":b=pm;break;case"focusin":w="focus",b=or;break;case"focusout":w="blur",b=or;break;case"beforeblur":case"afterblur":b=or;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=xm;break;case Ec:case zc:case Dc:b=im;break;case Oc:b=ym;break;case"scroll":b=Ju;break;case"wheel":b=bm;break;case"copy":case"cut":case"paste":b=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Bo}var j=(n&4)!==0,_=!j&&e==="scroll",m=j?h!==null?h+"Capture":null:h;j=[];for(var u=d,p;u!==null;){p=u;var f=p.stateNode;if(p.tag===5&&f!==null&&(p=f,m!==null&&(f=ts(u,m),f!=null&&j.push(ls(u,f,p)))),_)break;u=u.return}0<j.length&&(h=new b(h,w,null,s,g),x.push({event:h,listeners:j}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&s!==_r&&(w=s.relatedTarget||s.fromElement)&&(Dt(w)||w[rt]))break e;if((b||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,b?(w=s.relatedTarget||s.toElement,b=d,w=w?Dt(w):null,w!==null&&(_=Gt(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=d),b!==w)){if(j=Fo,f="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Bo,f="onPointerLeave",m="onPointerEnter",u="pointer"),_=b==null?h:en(b),p=w==null?h:en(w),h=new j(f,u+"leave",b,s,g),h.target=_,h.relatedTarget=p,f=null,Dt(g)===d&&(j=new j(m,u+"enter",w,s,g),j.target=p,j.relatedTarget=_,f=j),_=f,b&&w)t:{for(j=b,m=w,u=0,p=j;p;p=Qt(p))u++;for(p=0,f=m;f;f=Qt(f))p++;for(;0<u-p;)j=Qt(j),u--;for(;0<p-u;)m=Qt(m),p--;for(;u--;){if(j===m||m!==null&&j===m.alternate)break t;j=Qt(j),m=Qt(m)}j=null}else j=null;b!==null&&Ko(x,h,b,j,!1),w!==null&&_!==null&&Ko(x,_,w,j,!0)}}e:{if(h=d?en(d):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var S=Im;else if(Uo(h))if(Pc)S=Rm;else{S=Tm;var I=Pm}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Am);if(S&&(S=S(e,d))){Ic(x,S,s,g);break e}I&&I(e,h,d),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Dr(h,"number",h.value)}switch(I=d?en(d):window,e){case"focusin":(Uo(I)||I.contentEditable==="true")&&(Xt=I,Gr=d,Qn=null);break;case"focusout":Qn=Gr=Xt=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":Qr=!1,Go(x,s,g);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":Go(x,s,g)}var P;if(Ua)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zt?Sc(e,s)&&(T="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(T="onCompositionStart");T&&(kc&&s.locale!=="ko"&&(Zt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zt&&(P=Nc()):(xt=g,Ba="value"in xt?xt.value:xt.textContent,Zt=!0)),I=ui(d,T),0<I.length&&(T=new Lo(T,e,null,s,g),x.push({event:T,listeners:I}),P?T.data=P:(P=Cc(s),P!==null&&(T.data=P)))),(P=jm?Nm(e,s):km(e,s))&&(d=ui(d,"onBeforeInput"),0<d.length&&(g=new Lo("onBeforeInput","beforeinput",null,s,g),x.push({event:g,listeners:d}),g.data=P))}Lc(x,n)})}function ls(e,n,s){return{instance:e,listener:n,currentTarget:s}}function ui(e,n){for(var s=n+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ts(e,s),a!=null&&i.unshift(ls(e,a,r)),a=ts(e,n),a!=null&&i.push(ls(e,a,r))),e=e.return}return i}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ko(e,n,s,i,r){for(var a=n._reactName,o=[];s!==null&&s!==i;){var l=s,c=l.alternate,d=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&d!==null&&(l=d,r?(c=ts(s,a),c!=null&&o.unshift(ls(s,c,l))):r||(c=ts(s,a),c!=null&&o.push(ls(s,c,l)))),s=s.return}o.length!==0&&e.push({event:n,listeners:o})}var Lm=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function Zo(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Bm,"")}function Os(e,n,s){if(n=Zo(n),Zo(e)!==n&&s)throw Error(y(425))}function mi(){}var Yr=null,Kr=null;function Zr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xr=typeof setTimeout=="function"?setTimeout:void 0,_m=typeof clearTimeout=="function"?clearTimeout:void 0,Xo=typeof Promise=="function"?Promise:void 0,qm=typeof queueMicrotask=="function"?queueMicrotask:typeof Xo<"u"?function(e){return Xo.resolve(null).then(e).catch(Um)}:Xr;function Um(e){setTimeout(function(){throw e})}function gr(e,n){var s=n,i=0;do{var r=s.nextSibling;if(e.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(i===0){e.removeChild(r),is(n);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=r}while(s);is(n)}function wt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Jo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Pn,cs="__reactProps$"+Pn,rt="__reactContainer$"+Pn,Jr="__reactEvents$"+Pn,Wm="__reactListeners$"+Pn,Hm="__reactHandles$"+Pn;function Dt(e){var n=e[Qe];if(n)return n;for(var s=e.parentNode;s;){if(n=s[rt]||s[Qe]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Jo(e);e!==null;){if(s=e[Qe])return s;e=Jo(e)}return n}e=s,s=e.parentNode}return null}function bs(e){return e=e[Qe]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function zi(e){return e[cs]||null}var ea=[],tn=-1;function Tt(e){return{current:e}}function B(e){0>tn||(e.current=ea[tn],ea[tn]=null,tn--)}function F(e,n){tn++,ea[tn]=e.current,e.current=n}var It={},pe=Tt(It),we=Tt(!1),qt=It;function gn(e,n){var s=e.type.contextTypes;if(!s)return It;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in s)r[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function je(e){return e=e.childContextTypes,e!=null}function pi(){B(we),B(pe)}function el(e,n,s){if(pe.current!==It)throw Error(y(168));F(pe,n),F(we,s)}function _c(e,n,s){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(y(108,Pu(e)||"Unknown",r));return V({},s,i)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,qt=pe.current,F(pe,e),F(we,we.current),!0}function tl(e,n,s){var i=e.stateNode;if(!i)throw Error(y(169));s?(e=_c(e,n,qt),i.__reactInternalMemoizedMergedChildContext=e,B(we),B(pe),F(pe,e)):B(we),F(we,s)}var Je=null,Di=!1,xr=!1;function qc(e){Je===null?Je=[e]:Je.push(e)}function Vm(e){Di=!0,qc(e)}function At(){if(!xr&&Je!==null){xr=!0;var e=0,n=D;try{var s=Je;for(D=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Je=null,Di=!1}catch(r){throw Je!==null&&(Je=Je.slice(e+1)),mc(Da,At),r}finally{D=n,xr=!1}}return null}var nn=[],sn=0,gi=null,xi=0,Ae=[],Re=0,Ut=null,et=1,tt="";function Et(e,n){nn[sn++]=xi,nn[sn++]=gi,gi=e,xi=n}function Uc(e,n,s){Ae[Re++]=et,Ae[Re++]=tt,Ae[Re++]=Ut,Ut=e;var i=et;e=tt;var r=32-We(i)-1;i&=~(1<<r),s+=1;var a=32-We(n)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,et=1<<32-We(n)+r|s<<r|i,tt=a+e}else et=1<<a|s<<r|i,tt=e}function Ha(e){e.return!==null&&(Et(e,1),Uc(e,1,0))}function Va(e){for(;e===gi;)gi=nn[--sn],nn[sn]=null,xi=nn[--sn],nn[sn]=null;for(;e===Ut;)Ut=Ae[--Re],Ae[Re]=null,tt=Ae[--Re],Ae[Re]=null,et=Ae[--Re],Ae[Re]=null}var Ce=null,Se=null,q=!1,_e=null;function Wc(e,n){var s=Me(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function nl(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ce=e,Se=wt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ce=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Ut!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Me(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,Ce=e,Se=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(q){var n=Se;if(n){var s=n;if(!nl(e,n)){if(ta(e))throw Error(y(418));n=wt(s.nextSibling);var i=Ce;n&&nl(e,n)?Wc(i,s):(e.flags=e.flags&-4097|2,q=!1,Ce=e)}}else{if(ta(e))throw Error(y(418));e.flags=e.flags&-4097|2,q=!1,Ce=e}}}function sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Fs(e){if(e!==Ce)return!1;if(!q)return sl(e),q=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zr(e.type,e.memoizedProps)),n&&(n=Se)){if(ta(e))throw Hc(),Error(y(418));for(;n;)Wc(e,n),n=wt(n.nextSibling)}if(sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){Se=wt(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=Ce?wt(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=Se;e;)e=wt(e.nextSibling)}function xn(){Se=Ce=null,q=!1}function $a(e){_e===null?_e=[e]:_e.push(e)}var $m=dt.ReactCurrentBatchConfig;function Fn(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(y(309));var i=s.stateNode}if(!i)throw Error(y(147,e));var r=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=r.refs;o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(y(284));if(!s._owner)throw Error(y(290,e))}return e}function Ls(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function il(e){var n=e._init;return n(e._payload)}function Vc(e){function n(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function s(m,u){if(!e)return null;for(;u!==null;)n(m,u),u=u.sibling;return null}function i(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function r(m,u){return m=St(m,u),m.index=0,m.sibling=null,m}function a(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,p,f){return u===null||u.tag!==6?(u=Nr(p,m.mode,f),u.return=m,u):(u=r(u,p),u.return=m,u)}function c(m,u,p,f){var S=p.type;return S===Kt?g(m,u,p.props.children,f,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&il(S)===u.type)?(f=r(u,p.props),f.ref=Fn(m,u,p),f.return=m,f):(f=ti(p.type,p.key,p.props,null,m.mode,f),f.ref=Fn(m,u,p),f.return=m,f)}function d(m,u,p,f){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=kr(p,m.mode,f),u.return=m,u):(u=r(u,p.children||[]),u.return=m,u)}function g(m,u,p,f,S){return u===null||u.tag!==7?(u=Bt(p,m.mode,f,S),u.return=m,u):(u=r(u,p),u.return=m,u)}function x(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Nr(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Is:return p=ti(u.type,u.key,u.props,null,m.mode,p),p.ref=Fn(m,null,u),p.return=m,p;case Yt:return u=kr(u,m.mode,p),u.return=m,u;case mt:var f=u._init;return x(m,f(u._payload),p)}if(qn(u)||Mn(u))return u=Bt(u,m.mode,p,null),u.return=m,u;Ls(m,u)}return null}function h(m,u,p,f){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(m,u,""+p,f);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Is:return p.key===S?c(m,u,p,f):null;case Yt:return p.key===S?d(m,u,p,f):null;case mt:return S=p._init,h(m,u,S(p._payload),f)}if(qn(p)||Mn(p))return S!==null?null:g(m,u,p,f,null);Ls(m,p)}return null}function b(m,u,p,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return m=m.get(p)||null,l(u,m,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Is:return m=m.get(f.key===null?p:f.key)||null,c(u,m,f,S);case Yt:return m=m.get(f.key===null?p:f.key)||null,d(u,m,f,S);case mt:var I=f._init;return b(m,u,p,I(f._payload),S)}if(qn(f)||Mn(f))return m=m.get(p)||null,g(u,m,f,S,null);Ls(u,f)}return null}function w(m,u,p,f){for(var S=null,I=null,P=u,T=u=0,G=null;P!==null&&T<p.length;T++){P.index>T?(G=P,P=null):G=P.sibling;var E=h(m,P,p[T],f);if(E===null){P===null&&(P=G);break}e&&P&&E.alternate===null&&n(m,P),u=a(E,u,T),I===null?S=E:I.sibling=E,I=E,P=G}if(T===p.length)return s(m,P),q&&Et(m,T),S;if(P===null){for(;T<p.length;T++)P=x(m,p[T],f),P!==null&&(u=a(P,u,T),I===null?S=P:I.sibling=P,I=P);return q&&Et(m,T),S}for(P=i(m,P);T<p.length;T++)G=b(P,m,T,p[T],f),G!==null&&(e&&G.alternate!==null&&P.delete(G.key===null?T:G.key),u=a(G,u,T),I===null?S=G:I.sibling=G,I=G);return e&&P.forEach(function(Oe){return n(m,Oe)}),q&&Et(m,T),S}function j(m,u,p,f){var S=Mn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var I=S=null,P=u,T=u=0,G=null,E=p.next();P!==null&&!E.done;T++,E=p.next()){P.index>T?(G=P,P=null):G=P.sibling;var Oe=h(m,P,E.value,f);if(Oe===null){P===null&&(P=G);break}e&&P&&Oe.alternate===null&&n(m,P),u=a(Oe,u,T),I===null?S=Oe:I.sibling=Oe,I=Oe,P=G}if(E.done)return s(m,P),q&&Et(m,T),S;if(P===null){for(;!E.done;T++,E=p.next())E=x(m,E.value,f),E!==null&&(u=a(E,u,T),I===null?S=E:I.sibling=E,I=E);return q&&Et(m,T),S}for(P=i(m,P);!E.done;T++,E=p.next())E=b(P,m,T,E.value,f),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?T:E.key),u=a(E,u,T),I===null?S=E:I.sibling=E,I=E);return e&&P.forEach(function(An){return n(m,An)}),q&&Et(m,T),S}function _(m,u,p,f){if(typeof p=="object"&&p!==null&&p.type===Kt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Is:e:{for(var S=p.key,I=u;I!==null;){if(I.key===S){if(S=p.type,S===Kt){if(I.tag===7){s(m,I.sibling),u=r(I,p.props.children),u.return=m,m=u;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&il(S)===I.type){s(m,I.sibling),u=r(I,p.props),u.ref=Fn(m,I,p),u.return=m,m=u;break e}s(m,I);break}else n(m,I);I=I.sibling}p.type===Kt?(u=Bt(p.props.children,m.mode,f,p.key),u.return=m,m=u):(f=ti(p.type,p.key,p.props,null,m.mode,f),f.ref=Fn(m,u,p),f.return=m,m=f)}return o(m);case Yt:e:{for(I=p.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){s(m,u.sibling),u=r(u,p.children||[]),u.return=m,m=u;break e}else{s(m,u);break}else n(m,u);u=u.sibling}u=kr(p,m.mode,f),u.return=m,m=u}return o(m);case mt:return I=p._init,_(m,u,I(p._payload),f)}if(qn(p))return w(m,u,p,f);if(Mn(p))return j(m,u,p,f);Ls(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(s(m,u.sibling),u=r(u,p),u.return=m,m=u):(s(m,u),u=Nr(p,m.mode,f),u.return=m,m=u),o(m)):s(m,u)}return _}var fn=Vc(!0),$c=Vc(!1),fi=Tt(null),yi=null,rn=null,Ga=null;function Qa(){Ga=rn=yi=null}function Ya(e){var n=fi.current;B(fi),e._currentValue=n}function sa(e,n,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===s)break;e=e.return}}function mn(e,n){yi=e,Ga=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function ze(e){var n=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:n,next:null},rn===null){if(yi===null)throw Error(y(308));rn=e,yi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return n}var Ot=null;function Ka(e){Ot===null?Ot=[e]:Ot.push(e)}function Gc(e,n,s,i){var r=n.interleaved;return r===null?(s.next=s,Ka(n)):(s.next=r.next,r.next=s),n.interleaved=s,at(e,i)}function at(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var pt=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jt(e,n,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,z&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,at(e,s)}return r=i.interleaved,r===null?(n.next=n,Ka(i)):(n.next=r.next,r.next=n),i.interleaved=n,at(e,s)}function Ys(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,s|=i,n.lanes=s,Oa(e,s)}}function rl(e,n){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var r=null,a=null;if(s=s.firstBaseUpdate,s!==null){do{var o={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};a===null?r=a=o:a=a.next=o,s=s.next}while(s!==null);a===null?r=a=n:a=a.next=n}else r=a=n;s={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function vi(e,n,s,i){var r=e.updateQueue;pt=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==o&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=c))}if(a!==null){var x=r.baseState;o=0,g=d=c=null,l=a;do{var h=l.lane,b=l.eventTime;if((i&h)===h){g!==null&&(g=g.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,j=l;switch(h=n,b=s,j.tag){case 1:if(w=j.payload,typeof w=="function"){x=w.call(b,x,h);break e}x=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,h=typeof w=="function"?w.call(b,x,h):w,h==null)break e;x=V({},x,h);break e;case 2:pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=b,c=x):g=g.next=b,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(g===null&&(c=x),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Ht|=o,e.lanes=o,e.memoizedState=x}}function al(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=s,typeof r!="function")throw Error(y(191,r));r.call(i)}}}var ws={},Ke=Tt(ws),ds=Tt(ws),us=Tt(ws);function Ft(e){if(e===ws)throw Error(y(174));return e}function Xa(e,n){switch(F(us,n),F(ds,e),F(Ke,ws),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fr(n,e)}B(Ke),F(Ke,n)}function yn(){B(Ke),B(ds),B(us)}function Yc(e){Ft(us.current);var n=Ft(Ke.current),s=Fr(n,e.type);n!==s&&(F(ds,e),F(Ke,s))}function Ja(e){ds.current===e&&(B(Ke),B(ds))}var U=Tt(0);function bi(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fr=[];function eo(){for(var e=0;e<fr.length;e++)fr[e]._workInProgressVersionPrimary=null;fr.length=0}var Ks=dt.ReactCurrentDispatcher,yr=dt.ReactCurrentBatchConfig,Wt=0,H=null,J=null,se=null,wi=!1,Yn=!1,ms=0,Gm=0;function de(){throw Error(y(321))}function to(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Ve(e[s],n[s]))return!1;return!0}function no(e,n,s,i,r,a){if(Wt=a,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ks.current=e===null||e.memoizedState===null?Zm:Xm,e=s(i,r),Yn){a=0;do{if(Yn=!1,ms=0,25<=a)throw Error(y(301));a+=1,se=J=null,n.updateQueue=null,Ks.current=Jm,e=s(i,r)}while(Yn)}if(Ks.current=ji,n=J!==null&&J.next!==null,Wt=0,se=J=H=null,wi=!1,n)throw Error(y(300));return e}function so(){var e=ms!==0;return ms=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=e:se=se.next=e,se}function De(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=se===null?H.memoizedState:se.next;if(n!==null)se=n,J=e;else{if(e===null)throw Error(y(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},se===null?H.memoizedState=se=e:se=se.next=e}return se}function ps(e,n){return typeof n=="function"?n(e):n}function vr(e){var n=De(),s=n.queue;if(s===null)throw Error(y(311));s.lastRenderedReducer=e;var i=J,r=i.baseQueue,a=s.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,s.pending=null}if(r!==null){a=r.next,i=i.baseState;var l=o=null,c=null,d=a;do{var g=d.lane;if((Wt&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var x={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=x,o=i):c=c.next=x,H.lanes|=g,Ht|=g}d=d.next}while(d!==null&&d!==a);c===null?o=i:c.next=l,Ve(i,n.memoizedState)||(be=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=c,s.lastRenderedState=i}if(e=s.interleaved,e!==null){r=e;do a=r.lane,H.lanes|=a,Ht|=a,r=r.next;while(r!==e)}else r===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function br(e){var n=De(),s=n.queue;if(s===null)throw Error(y(311));s.lastRenderedReducer=e;var i=s.dispatch,r=s.pending,a=n.memoizedState;if(r!==null){s.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);Ve(a,n.memoizedState)||(be=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),s.lastRenderedState=a}return[a,i]}function Kc(){}function Zc(e,n){var s=H,i=De(),r=n(),a=!Ve(i.memoizedState,r);if(a&&(i.memoizedState=r,be=!0),i=i.queue,io(ed.bind(null,s,i,e),[e]),i.getSnapshot!==n||a||se!==null&&se.memoizedState.tag&1){if(s.flags|=2048,hs(9,Jc.bind(null,s,i,r,n),void 0,null),re===null)throw Error(y(349));Wt&30||Xc(s,n,r)}return r}function Xc(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Jc(e,n,s,i){n.value=s,n.getSnapshot=i,td(n)&&nd(e)}function ed(e,n,s){return s(function(){td(n)&&nd(e)})}function td(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Ve(e,s)}catch{return!0}}function nd(e){var n=at(e,1);n!==null&&He(n,e,1,-1)}function ol(e){var n=Ge();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},n.queue=e,e=e.dispatch=Km.bind(null,H,e),[n.memoizedState,e]}function hs(e,n,s,i){return e={tag:e,create:n,destroy:s,deps:i,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,n.lastEffect=e)),e}function sd(){return De().memoizedState}function Zs(e,n,s,i){var r=Ge();H.flags|=e,r.memoizedState=hs(1|n,s,void 0,i===void 0?null:i)}function Oi(e,n,s,i){var r=De();i=i===void 0?null:i;var a=void 0;if(J!==null){var o=J.memoizedState;if(a=o.destroy,i!==null&&to(i,o.deps)){r.memoizedState=hs(n,s,a,i);return}}H.flags|=e,r.memoizedState=hs(1|n,s,a,i)}function ll(e,n){return Zs(8390656,8,e,n)}function io(e,n){return Oi(2048,8,e,n)}function id(e,n){return Oi(4,2,e,n)}function rd(e,n){return Oi(4,4,e,n)}function ad(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function od(e,n,s){return s=s!=null?s.concat([e]):null,Oi(4,4,ad.bind(null,n,e),s)}function ro(){}function ld(e,n){var s=De();n=n===void 0?null:n;var i=s.memoizedState;return i!==null&&n!==null&&to(n,i[1])?i[0]:(s.memoizedState=[e,n],e)}function cd(e,n){var s=De();n=n===void 0?null:n;var i=s.memoizedState;return i!==null&&n!==null&&to(n,i[1])?i[0]:(e=e(),s.memoizedState=[e,n],e)}function dd(e,n,s){return Wt&21?(Ve(s,n)||(s=gc(),H.lanes|=s,Ht|=s,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=s)}function Qm(e,n){var s=D;D=s!==0&&4>s?s:4,e(!0);var i=yr.transition;yr.transition={};try{e(!1),n()}finally{D=s,yr.transition=i}}function ud(){return De().memoizedState}function Ym(e,n,s){var i=kt(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},md(e))pd(n,s);else if(s=Gc(e,n,s,i),s!==null){var r=ge();He(s,e,i,r),hd(s,n,i)}}function Km(e,n,s){var i=kt(e),r={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(md(e))pd(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,s);if(r.hasEagerState=!0,r.eagerState=l,Ve(l,o)){var c=n.interleaved;c===null?(r.next=r,Ka(n)):(r.next=c.next,c.next=r),n.interleaved=r;return}}catch{}finally{}s=Gc(e,n,r,i),s!==null&&(r=ge(),He(s,e,i,r),hd(s,n,i))}}function md(e){var n=e.alternate;return e===H||n!==null&&n===H}function pd(e,n){Yn=wi=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function hd(e,n,s){if(s&4194240){var i=n.lanes;i&=e.pendingLanes,s|=i,n.lanes=s,Oa(e,s)}}var ji={readContext:ze,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Zm={readContext:ze,useCallback:function(e,n){return Ge().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:ll,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Zs(4194308,4,ad.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Zs(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zs(4,2,e,n)},useMemo:function(e,n){var s=Ge();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var i=Ge();return n=s!==void 0?s(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Ym.bind(null,H,e),[i.memoizedState,e]},useRef:function(e){var n=Ge();return e={current:e},n.memoizedState=e},useState:ol,useDebugValue:ro,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=ol(!1),n=e[0];return e=Qm.bind(null,e[1]),Ge().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var i=H,r=Ge();if(q){if(s===void 0)throw Error(y(407));s=s()}else{if(s=n(),re===null)throw Error(y(349));Wt&30||Xc(i,n,s)}r.memoizedState=s;var a={value:s,getSnapshot:n};return r.queue=a,ll(ed.bind(null,i,a,e),[e]),i.flags|=2048,hs(9,Jc.bind(null,i,a,s,n),void 0,null),s},useId:function(){var e=Ge(),n=re.identifierPrefix;if(q){var s=tt,i=et;s=(i&~(1<<32-We(i)-1)).toString(32)+s,n=":"+n+"R"+s,s=ms++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Gm++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Xm={readContext:ze,useCallback:ld,useContext:ze,useEffect:io,useImperativeHandle:od,useInsertionEffect:id,useLayoutEffect:rd,useMemo:cd,useReducer:vr,useRef:sd,useState:function(){return vr(ps)},useDebugValue:ro,useDeferredValue:function(e){var n=De();return dd(n,J.memoizedState,e)},useTransition:function(){var e=vr(ps)[0],n=De().memoizedState;return[e,n]},useMutableSource:Kc,useSyncExternalStore:Zc,useId:ud,unstable_isNewReconciler:!1},Jm={readContext:ze,useCallback:ld,useContext:ze,useEffect:io,useImperativeHandle:od,useInsertionEffect:id,useLayoutEffect:rd,useMemo:cd,useReducer:br,useRef:sd,useState:function(){return br(ps)},useDebugValue:ro,useDeferredValue:function(e){var n=De();return J===null?n.memoizedState=e:dd(n,J.memoizedState,e)},useTransition:function(){var e=br(ps)[0],n=De().memoizedState;return[e,n]},useMutableSource:Kc,useSyncExternalStore:Zc,useId:ud,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function ia(e,n,s,i){n=e.memoizedState,s=s(i,n),s=s==null?n:V({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Fi={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var i=ge(),r=kt(e),a=nt(i,r);a.payload=n,s!=null&&(a.callback=s),n=jt(e,a,r),n!==null&&(He(n,e,r,i),Ys(n,e,r))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var i=ge(),r=kt(e),a=nt(i,r);a.tag=1,a.payload=n,s!=null&&(a.callback=s),n=jt(e,a,r),n!==null&&(He(n,e,r,i),Ys(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=ge(),i=kt(e),r=nt(s,i);r.tag=2,n!=null&&(r.callback=n),n=jt(e,r,i),n!==null&&(He(n,e,i,s),Ys(n,e,i))}};function cl(e,n,s,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!as(s,i)||!as(r,a):!0}function gd(e,n,s){var i=!1,r=It,a=n.contextType;return typeof a=="object"&&a!==null?a=ze(a):(r=je(n)?qt:pe.current,i=n.contextTypes,a=(i=i!=null)?gn(e,r):It),n=new n(s,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Fi,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function dl(e,n,s,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,i),n.state!==e&&Fi.enqueueReplaceState(n,n.state,null)}function ra(e,n,s,i){var r=e.stateNode;r.props=s,r.state=e.memoizedState,r.refs={},Za(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=ze(a):(a=je(n)?qt:pe.current,r.context=gn(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(ia(e,n,a,s),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Fi.enqueueReplaceState(r,r.state,null),vi(e,s,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,n){try{var s="",i=n;do s+=Iu(i),i=i.return;while(i);var r=s}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function wr(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function aa(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var ep=typeof WeakMap=="function"?WeakMap:Map;function xd(e,n,s){s=nt(-1,s),s.tag=3,s.payload={element:null};var i=n.value;return s.callback=function(){ki||(ki=!0,xa=i),aa(e,n)},s}function fd(e,n,s){s=nt(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;s.payload=function(){return i(r)},s.callback=function(){aa(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(s.callback=function(){aa(e,n),typeof i!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),s}function ul(e,n,s){var i=e.pingCache;if(i===null){i=e.pingCache=new ep;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(s)||(r.add(s),e=hp.bind(null,e,n,s),n.then(e,e))}function ml(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function pl(e,n,s,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=nt(-1,1),n.tag=2,jt(s,n,1))),s.lanes|=1),e)}var tp=dt.ReactCurrentOwner,be=!1;function he(e,n,s,i){n.child=e===null?$c(n,null,s,i):fn(n,e.child,s,i)}function hl(e,n,s,i,r){s=s.render;var a=n.ref;return mn(n,r),i=no(e,n,s,i,a,r),s=so(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ot(e,n,r)):(q&&s&&Ha(n),n.flags|=1,he(e,n,i,r),n.child)}function gl(e,n,s,i,r){if(e===null){var a=s.type;return typeof a=="function"&&!ho(a)&&a.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=a,yd(e,n,a,i,r)):(e=ti(s.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(s=s.compare,s=s!==null?s:as,s(o,i)&&e.ref===n.ref)return ot(e,n,r)}return n.flags|=1,e=St(a,i),e.ref=n.ref,e.return=n,n.child=e}function yd(e,n,s,i,r){if(e!==null){var a=e.memoizedProps;if(as(a,i)&&e.ref===n.ref)if(be=!1,n.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,ot(e,n,r)}return oa(e,n,s,i,r)}function vd(e,n,s){var i=n.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(on,ke),ke|=s;else{if(!(s&1073741824))return e=a!==null?a.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(on,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:s,F(on,ke),ke|=i}else a!==null?(i=a.baseLanes|s,n.memoizedState=null):i=s,F(on,ke),ke|=i;return he(e,n,r,s),n.child}function bd(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function oa(e,n,s,i,r){var a=je(s)?qt:pe.current;return a=gn(n,a),mn(n,r),s=no(e,n,s,i,a,r),i=so(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,ot(e,n,r)):(q&&i&&Ha(n),n.flags|=1,he(e,n,s,r),n.child)}function xl(e,n,s,i,r){if(je(s)){var a=!0;hi(n)}else a=!1;if(mn(n,r),n.stateNode===null)Xs(e,n),gd(n,s,i),ra(n,s,i,r),i=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var c=o.context,d=s.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=je(s)?qt:pe.current,d=gn(n,d));var g=s.getDerivedStateFromProps,x=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==d)&&dl(n,o,i,d),pt=!1;var h=n.memoizedState;o.state=h,vi(n,i,o,r),c=n.memoizedState,l!==i||h!==c||we.current||pt?(typeof g=="function"&&(ia(n,s,g,i),c=n.memoizedState),(l=pt||cl(n,s,l,i,h,c,d))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=c),o.props=i,o.state=c,o.context=d,i=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,Qc(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:Le(n.type,l),o.props=d,x=n.pendingProps,h=o.context,c=s.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=je(s)?qt:pe.current,c=gn(n,c));var b=s.getDerivedStateFromProps;(g=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==x||h!==c)&&dl(n,o,i,c),pt=!1,h=n.memoizedState,o.state=h,vi(n,i,o,r);var w=n.memoizedState;l!==x||h!==w||we.current||pt?(typeof b=="function"&&(ia(n,s,b,i),w=n.memoizedState),(d=pt||cl(n,s,d,i,h,w,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=w),o.props=i,o.state=w,o.context=c,i=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),i=!1)}return la(e,n,s,i,a,r)}function la(e,n,s,i,r,a){bd(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return r&&tl(n,s,!1),ot(e,n,a);i=n.stateNode,tp.current=n;var l=o&&typeof s.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=fn(n,e.child,null,a),n.child=fn(n,null,l,a)):he(e,n,l,a),n.memoizedState=i.state,r&&tl(n,s,!0),n.child}function wd(e){var n=e.stateNode;n.pendingContext?el(e,n.pendingContext,n.pendingContext!==n.context):n.context&&el(e,n.context,!1),Xa(e,n.containerInfo)}function fl(e,n,s,i,r){return xn(),$a(r),n.flags|=256,he(e,n,s,i),n.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,n,s){var i=n.pendingProps,r=U.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),F(U,r&1),e===null)return na(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=_i(o,i,0,null),e=Bt(e,i,s,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=da(s),n.memoizedState=ca,e):ao(n,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return np(e,n,o,i,l,r,s);if(a){a=i.fallback,o=n.mode,r=e.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=c,n.deletions=null):(i=St(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=St(l,a):(a=Bt(a,o,s,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?da(s):{baseLanes:o.baseLanes|s,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~s,n.memoizedState=ca,i}return a=e.child,e=a.sibling,i=St(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=s),i.return=n,i.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=i,n.memoizedState=null,i}function ao(e,n){return n=_i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Bs(e,n,s,i){return i!==null&&$a(i),fn(n,e.child,null,s),e=ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function np(e,n,s,i,r,a,o){if(s)return n.flags&256?(n.flags&=-257,i=wr(Error(y(422))),Bs(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,r=n.mode,i=_i({mode:"visible",children:i.children},r,0,null),a=Bt(a,r,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&fn(n,e.child,null,o),n.child.memoizedState=da(o),n.memoizedState=ca,a);if(!(n.mode&1))return Bs(e,n,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(y(419)),i=wr(a,i,void 0),Bs(e,n,o,i)}if(l=(o&e.childLanes)!==0,be||l){if(i=re,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,at(e,r),He(i,e,r,-1))}return po(),i=wr(Error(y(421))),Bs(e,n,o,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=gp.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,Se=wt(r.nextSibling),Ce=n,q=!0,_e=null,e!==null&&(Ae[Re++]=et,Ae[Re++]=tt,Ae[Re++]=Ut,et=e.id,tt=e.overflow,Ut=n),n=ao(n,i.children),n.flags|=4096,n)}function yl(e,n,s){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),sa(e.return,n,s)}function jr(e,n,s,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=s,a.tailMode=r)}function Nd(e,n,s){var i=n.pendingProps,r=i.revealOrder,a=i.tail;if(he(e,n,i.children,s),i=U.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yl(e,s,n);else if(e.tag===19)yl(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(F(U,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(s=n.child,r=null;s!==null;)e=s.alternate,e!==null&&bi(e)===null&&(r=s),s=s.sibling;s=r,s===null?(r=n.child,n.child=null):(r=s.sibling,s.sibling=null),jr(n,!1,r,s,a);break;case"backwards":for(s=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&bi(e)===null){n.child=r;break}e=r.sibling,r.sibling=s,s=r,r=e}jr(n,!0,s,null,a);break;case"together":jr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ot(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Ht|=n.lanes,!(s&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,s=St(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=St(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function sp(e,n,s){switch(n.tag){case 3:wd(n),xn();break;case 5:Yc(n);break;case 1:je(n.type)&&hi(n);break;case 4:Xa(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;F(fi,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(F(U,U.current&1),n.flags|=128,null):s&n.child.childLanes?jd(e,n,s):(F(U,U.current&1),e=ot(e,n,s),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(i=(s&n.childLanes)!==0,e.flags&128){if(i)return Nd(e,n,s);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(U,U.current),i)break;return null;case 22:case 23:return n.lanes=0,vd(e,n,s)}return ot(e,n,s)}var kd,ua,Sd,Cd;kd=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};ua=function(){};Sd=function(e,n,s,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,Ft(Ke.current);var a=null;switch(s){case"input":r=Er(e,r),i=Er(e,i),a=[];break;case"select":r=V({},r,{value:void 0}),i=V({},i,{value:void 0}),a=[];break;case"textarea":r=Or(e,r),i=Or(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=mi)}Lr(s,i);var o;s=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(o in l)l.hasOwnProperty(o)&&(s||(s={}),s[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var c=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(s||(s={}),s[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(s||(s={}),s[o]=c[o])}else s||(a||(a=[]),a.push(d,s)),s=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&L("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}s&&(a=a||[]).push("style",s);var d=a;(n.updateQueue=d)&&(n.flags|=4)}};Cd=function(e,n,s,i){s!==i&&(n.flags|=4)};function Ln(e,n){if(!q)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(n)for(var r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=s,n}function ip(e,n,s){var i=n.pendingProps;switch(Va(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(n),null;case 1:return je(n.type)&&pi(),ue(n),null;case 3:return i=n.stateNode,yn(),B(we),B(pe),eo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(va(_e),_e=null))),ua(e,n),ue(n),null;case 5:Ja(n);var r=Ft(us.current);if(s=n.type,e!==null&&n.stateNode!=null)Sd(e,n,s,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(y(166));return ue(n),null}if(e=Ft(Ke.current),Fs(n)){i=n.stateNode,s=n.type;var a=n.memoizedProps;switch(i[Qe]=n,i[cs]=a,e=(n.mode&1)!==0,s){case"dialog":L("cancel",i),L("close",i);break;case"iframe":case"object":case"embed":L("load",i);break;case"video":case"audio":for(r=0;r<Wn.length;r++)L(Wn[r],i);break;case"source":L("error",i);break;case"img":case"image":case"link":L("error",i),L("load",i);break;case"details":L("toggle",i);break;case"input":Io(i,a),L("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},L("invalid",i);break;case"textarea":To(i,a),L("invalid",i)}Lr(s,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Os(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Os(i.textContent,l,e),r=["children",""+l]):Jn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&L("scroll",i)}switch(s){case"input":Ps(i),Po(i,a,!0);break;case"textarea":Ps(i),Ao(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=mi)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ec(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(s,{is:i.is}):(e=o.createElement(s),s==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,s),e[Qe]=n,e[cs]=i,kd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Br(s,i),s){case"dialog":L("cancel",e),L("close",e),r=i;break;case"iframe":case"object":case"embed":L("load",e),r=i;break;case"video":case"audio":for(r=0;r<Wn.length;r++)L(Wn[r],e);r=i;break;case"source":L("error",e),r=i;break;case"img":case"image":case"link":L("error",e),L("load",e),r=i;break;case"details":L("toggle",e),r=i;break;case"input":Io(e,i),r=Er(e,i),L("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=V({},i,{value:void 0}),L("invalid",e);break;case"textarea":To(e,i),r=Or(e,i),L("invalid",e);break;default:r=i}Lr(s,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?sc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tc(e,c)):a==="children"?typeof c=="string"?(s!=="textarea"||c!=="")&&es(e,c):typeof c=="number"&&es(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&L("scroll",e):c!=null&&Aa(e,a,c,o))}switch(s){case"input":Ps(e),Po(e,i,!1);break;case"textarea":Ps(e),Ao(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ct(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ln(e,!!i.multiple,a,!1):i.defaultValue!=null&&ln(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=mi)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ue(n),null;case 6:if(e&&n.stateNode!=null)Cd(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(y(166));if(s=Ft(us.current),Ft(Ke.current),Fs(n)){if(i=n.stateNode,s=n.memoizedProps,i[Qe]=n,(a=i.nodeValue!==s)&&(e=Ce,e!==null))switch(e.tag){case 3:Os(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Os(i.nodeValue,s,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[Qe]=n,n.stateNode=i}return ue(n),null;case 13:if(B(U),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Se!==null&&n.mode&1&&!(n.flags&128))Hc(),xn(),n.flags|=98560,a=!1;else if(a=Fs(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(y(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(y(317));a[Qe]=n}else xn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ue(n),a=!1}else _e!==null&&(va(_e),_e=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=s,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?ee===0&&(ee=3):po())),n.updateQueue!==null&&(n.flags|=4),ue(n),null);case 4:return yn(),ua(e,n),e===null&&os(n.stateNode.containerInfo),ue(n),null;case 10:return Ya(n.type._context),ue(n),null;case 17:return je(n.type)&&pi(),ue(n),null;case 19:if(B(U),a=n.memoizedState,a===null)return ue(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)Ln(a,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=bi(e),o!==null){for(n.flags|=128,Ln(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=s,s=n.child;s!==null;)a=s,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return F(U,U.current&1|2),n.child}e=e.sibling}a.tail!==null&&Y()>bn&&(n.flags|=128,i=!0,Ln(a,!1),n.lanes=4194304)}else{if(!i)if(e=bi(o),e!==null){if(n.flags|=128,i=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!q)return ue(n),null}else 2*Y()-a.renderingStartTime>bn&&s!==1073741824&&(n.flags|=128,i=!0,Ln(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(s=a.last,s!==null?s.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Y(),n.sibling=null,s=U.current,F(U,i?s&1|2:s&1),n):(ue(n),null);case 22:case 23:return mo(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?ke&1073741824&&(ue(n),n.subtreeFlags&6&&(n.flags|=8192)):ue(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function rp(e,n){switch(Va(n),n.tag){case 1:return je(n.type)&&pi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yn(),B(we),B(pe),eo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ja(n),null;case 13:if(B(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));xn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(U),null;case 4:return yn(),null;case 10:return Ya(n.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var _s=!1,me=!1,ap=typeof WeakSet=="function"?WeakSet:Set,k=null;function an(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){$(e,n,i)}else s.current=null}function ma(e,n,s){try{s()}catch(i){$(e,n,i)}}var vl=!1;function op(e,n){if(Yr=ci,e=Rc(),Wa(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{s.nodeType,a.nodeType}catch{s=null;break e}var o=0,l=-1,c=-1,d=0,g=0,x=e,h=null;t:for(;;){for(var b;x!==s||r!==0&&x.nodeType!==3||(l=o+r),x!==a||i!==0&&x.nodeType!==3||(c=o+i),x.nodeType===3&&(o+=x.nodeValue.length),(b=x.firstChild)!==null;)h=x,x=b;for(;;){if(x===e)break t;if(h===s&&++d===r&&(l=o),h===a&&++g===i&&(c=o),(b=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=b}s=l===-1||c===-1?null:{start:l,end:c}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kr={focusedElem:e,selectionRange:s},ci=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,_=w.memoizedState,m=n.stateNode,u=m.getSnapshotBeforeUpdate(n.elementType===n.type?j:Le(n.type,j),_);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(f){$(n,n.return,f)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return w=vl,vl=!1,w}function Kn(e,n,s){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&ma(n,s,a)}r=r.next}while(r!==i)}}function Li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==n)}}function pa(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function Id(e){var n=e.alternate;n!==null&&(e.alternate=null,Id(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[cs],delete n[Jr],delete n[Wm],delete n[Hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,n,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=mi));else if(i!==4&&(e=e.child,e!==null))for(ha(e,n,s),e=e.sibling;e!==null;)ha(e,n,s),e=e.sibling}function ga(e,n,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ga(e,n,s),e=e.sibling;e!==null;)ga(e,n,s),e=e.sibling}var ae=null,Be=!1;function ut(e,n,s){for(s=s.child;s!==null;)Td(e,n,s),s=s.sibling}function Td(e,n,s){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ai,s)}catch{}switch(s.tag){case 5:me||an(s,n);case 6:var i=ae,r=Be;ae=null,ut(e,n,s),ae=i,Be=r,ae!==null&&(Be?(e=ae,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):ae.removeChild(s.stateNode));break;case 18:ae!==null&&(Be?(e=ae,s=s.stateNode,e.nodeType===8?gr(e.parentNode,s):e.nodeType===1&&gr(e,s),is(e)):gr(ae,s.stateNode));break;case 4:i=ae,r=Be,ae=s.stateNode.containerInfo,Be=!0,ut(e,n,s),ae=i,Be=r;break;case 0:case 11:case 14:case 15:if(!me&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ma(s,n,o),r=r.next}while(r!==i)}ut(e,n,s);break;case 1:if(!me&&(an(s,n),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(l){$(s,n,l)}ut(e,n,s);break;case 21:ut(e,n,s);break;case 22:s.mode&1?(me=(i=me)||s.memoizedState!==null,ut(e,n,s),me=i):ut(e,n,s);break;default:ut(e,n,s)}}function wl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new ap),n.forEach(function(i){var r=xp.bind(null,e,i);s.has(i)||(s.add(i),i.then(r,r))})}}function Fe(e,n){var s=n.deletions;if(s!==null)for(var i=0;i<s.length;i++){var r=s[i];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,Be=!1;break e;case 3:ae=l.stateNode.containerInfo,Be=!0;break e;case 4:ae=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(ae===null)throw Error(y(160));Td(a,o,r),ae=null,Be=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){$(r,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ad(n,e),n=n.sibling}function Ad(e,n){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(n,e),$e(e),i&4){try{Kn(3,e,e.return),Li(3,e)}catch(j){$(e,e.return,j)}try{Kn(5,e,e.return)}catch(j){$(e,e.return,j)}}break;case 1:Fe(n,e),$e(e),i&512&&s!==null&&an(s,s.return);break;case 5:if(Fe(n,e),$e(e),i&512&&s!==null&&an(s,s.return),e.flags&32){var r=e.stateNode;try{es(r,"")}catch(j){$(e,e.return,j)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=s!==null?s.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Xl(r,a),Br(l,o);var d=Br(l,a);for(o=0;o<c.length;o+=2){var g=c[o],x=c[o+1];g==="style"?sc(r,x):g==="dangerouslySetInnerHTML"?tc(r,x):g==="children"?es(r,x):Aa(r,g,x,d)}switch(l){case"input":zr(r,a);break;case"textarea":Jl(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?ln(r,!!a.multiple,b,!1):h!==!!a.multiple&&(a.defaultValue!=null?ln(r,!!a.multiple,a.defaultValue,!0):ln(r,!!a.multiple,a.multiple?[]:"",!1))}r[cs]=a}catch(j){$(e,e.return,j)}}break;case 6:if(Fe(n,e),$e(e),i&4){if(e.stateNode===null)throw Error(y(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(j){$(e,e.return,j)}}break;case 3:if(Fe(n,e),$e(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(j){$(e,e.return,j)}break;case 4:Fe(n,e),$e(e);break;case 13:Fe(n,e),$e(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(co=Y())),i&4&&wl(e);break;case 22:if(g=s!==null&&s.memoizedState!==null,e.mode&1?(me=(d=me)||g,Fe(n,e),me=d):Fe(n,e),$e(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(k=e,g=e.child;g!==null;){for(x=k=g;k!==null;){switch(h=k,b=h.child,h.tag){case 0:case 11:case 14:case 15:Kn(4,h,h.return);break;case 1:an(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){i=h,s=h.return;try{n=i,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(j){$(i,s,j)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){Nl(x);continue}}b!==null?(b.return=h,k=b):Nl(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{r=x.stateNode,d?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=x.stateNode,c=x.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=nc("display",o))}catch(j){$(e,e.return,j)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=d?"":x.memoizedProps}catch(j){$(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Fe(n,e),$e(e),i&4&&wl(e);break;case 21:break;default:Fe(n,e),$e(e)}}function $e(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(Pd(s)){var i=s;break e}s=s.return}throw Error(y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(es(r,""),i.flags&=-33);var a=bl(e);ga(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=bl(e);ha(e,l,o);break;default:throw Error(y(161))}}catch(c){$(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lp(e,n,s){k=e,Rd(e)}function Rd(e,n,s){for(var i=(e.mode&1)!==0;k!==null;){var r=k,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_s;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||me;l=_s;var d=me;if(_s=o,(me=c)&&!d)for(k=r;k!==null;)o=k,c=o.child,o.tag===22&&o.memoizedState!==null?kl(r):c!==null?(c.return=o,k=c):kl(r);for(;a!==null;)k=a,Rd(a),a=a.sibling;k=r,_s=l,me=d}jl(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,k=a):jl(e)}}function jl(e){for(;k!==null;){var n=k;if(n.flags&8772){var s=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||Li(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!me)if(s===null)i.componentDidMount();else{var r=n.elementType===n.type?s.memoizedProps:Le(n.type,s.memoizedProps);i.componentDidUpdate(r,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&al(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}al(n,o,s)}break;case 5:var l=n.stateNode;if(s===null&&n.flags&4){s=l;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&s.focus();break;case"img":c.src&&(s.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&is(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}me||n.flags&512&&pa(n)}catch(h){$(n,n.return,h)}}if(n===e){k=null;break}if(s=n.sibling,s!==null){s.return=n.return,k=s;break}k=n.return}}function Nl(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var s=n.sibling;if(s!==null){s.return=n.return,k=s;break}k=n.return}}function kl(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Li(4,n)}catch(c){$(n,s,c)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(c){$(n,r,c)}}var a=n.return;try{pa(n)}catch(c){$(n,a,c)}break;case 5:var o=n.return;try{pa(n)}catch(c){$(n,o,c)}}}catch(c){$(n,n.return,c)}if(n===e){k=null;break}var l=n.sibling;if(l!==null){l.return=n.return,k=l;break}k=n.return}}var cp=Math.ceil,Ni=dt.ReactCurrentDispatcher,oo=dt.ReactCurrentOwner,Ee=dt.ReactCurrentBatchConfig,z=0,re=null,K=null,le=0,ke=0,on=Tt(0),ee=0,gs=null,Ht=0,Bi=0,lo=0,Zn=null,ve=null,co=0,bn=1/0,Xe=null,ki=!1,xa=null,Nt=null,qs=!1,ft=null,Si=0,Xn=0,fa=null,Js=-1,ei=0;function ge(){return z&6?Y():Js!==-1?Js:Js=Y()}function kt(e){return e.mode&1?z&2&&le!==0?le&-le:$m.transition!==null?(ei===0&&(ei=gc()),ei):(e=D,e!==0||(e=window.event,e=e===void 0?16:jc(e.type)),e):1}function He(e,n,s,i){if(50<Xn)throw Xn=0,fa=null,Error(y(185));ys(e,s,i),(!(z&2)||e!==re)&&(e===re&&(!(z&2)&&(Bi|=s),ee===4&&gt(e,le)),Ne(e,i),s===1&&z===0&&!(n.mode&1)&&(bn=Y()+500,Di&&At()))}function Ne(e,n){var s=e.callbackNode;$u(e,n);var i=li(e,e===re?le:0);if(i===0)s!==null&&Eo(s),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(s!=null&&Eo(s),n===1)e.tag===0?Vm(Sl.bind(null,e)):qc(Sl.bind(null,e)),qm(function(){!(z&6)&&At()}),s=null;else{switch(xc(i)){case 1:s=Da;break;case 4:s=pc;break;case 16:s=oi;break;case 536870912:s=hc;break;default:s=oi}s=Bd(s,Md.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function Md(e,n){if(Js=-1,ei=0,z&6)throw Error(y(327));var s=e.callbackNode;if(pn()&&e.callbackNode!==s)return null;var i=li(e,e===re?le:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=Ci(e,i);else{n=i;var r=z;z|=2;var a=zd();(re!==e||le!==n)&&(Xe=null,bn=Y()+500,Lt(e,n));do try{mp();break}catch(l){Ed(e,l)}while(!0);Qa(),Ni.current=a,z=r,K!==null?n=0:(re=null,le=0,n=ee)}if(n!==0){if(n===2&&(r=Hr(e),r!==0&&(i=r,n=ya(e,r))),n===1)throw s=gs,Lt(e,0),gt(e,i),Ne(e,Y()),s;if(n===6)gt(e,i);else{if(r=e.current.alternate,!(i&30)&&!dp(r)&&(n=Ci(e,i),n===2&&(a=Hr(e),a!==0&&(i=a,n=ya(e,a))),n===1))throw s=gs,Lt(e,0),gt(e,i),Ne(e,Y()),s;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(y(345));case 2:zt(e,ve,Xe);break;case 3:if(gt(e,i),(i&130023424)===i&&(n=co+500-Y(),10<n)){if(li(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Xr(zt.bind(null,e,ve,Xe),n);break}zt(e,ve,Xe);break;case 4:if(gt(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var o=31-We(i);a=1<<o,o=n[o],o>r&&(r=o),i&=~a}if(i=r,i=Y()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cp(i/1960))-i,10<i){e.timeoutHandle=Xr(zt.bind(null,e,ve,Xe),i);break}zt(e,ve,Xe);break;case 5:zt(e,ve,Xe);break;default:throw Error(y(329))}}}return Ne(e,Y()),e.callbackNode===s?Md.bind(null,e):null}function ya(e,n){var s=Zn;return e.current.memoizedState.isDehydrated&&(Lt(e,n).flags|=256),e=Ci(e,n),e!==2&&(n=ve,ve=s,n!==null&&va(n)),e}function va(e){ve===null?ve=e:ve.push.apply(ve,e)}function dp(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var r=s[i],a=r.getSnapshot;r=r.value;try{if(!Ve(a(),r))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n){for(n&=~lo,n&=~Bi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-We(n),i=1<<s;e[s]=-1,n&=~i}}function Sl(e){if(z&6)throw Error(y(327));pn();var n=li(e,0);if(!(n&1))return Ne(e,Y()),null;var s=Ci(e,n);if(e.tag!==0&&s===2){var i=Hr(e);i!==0&&(n=i,s=ya(e,i))}if(s===1)throw s=gs,Lt(e,0),gt(e,n),Ne(e,Y()),s;if(s===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zt(e,ve,Xe),Ne(e,Y()),null}function uo(e,n){var s=z;z|=1;try{return e(n)}finally{z=s,z===0&&(bn=Y()+500,Di&&At())}}function Vt(e){ft!==null&&ft.tag===0&&!(z&6)&&pn();var n=z;z|=1;var s=Ee.transition,i=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=i,Ee.transition=s,z=n,!(z&6)&&At()}}function mo(){ke=on.current,B(on)}function Lt(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,_m(s)),K!==null)for(s=K.return;s!==null;){var i=s;switch(Va(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pi();break;case 3:yn(),B(we),B(pe),eo();break;case 5:Ja(i);break;case 4:yn();break;case 13:B(U);break;case 19:B(U);break;case 10:Ya(i.type._context);break;case 22:case 23:mo()}s=s.return}if(re=e,K=e=St(e.current,null),le=ke=n,ee=0,gs=null,lo=Bi=Ht=0,ve=Zn=null,Ot!==null){for(n=0;n<Ot.length;n++)if(s=Ot[n],i=s.interleaved,i!==null){s.interleaved=null;var r=i.next,a=s.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}s.pending=i}Ot=null}return e}function Ed(e,n){do{var s=K;try{if(Qa(),Ks.current=ji,wi){for(var i=H.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wi=!1}if(Wt=0,se=J=H=null,Yn=!1,ms=0,oo.current=null,s===null||s.return===null){ee=1,gs=n,K=null;break}e:{var a=e,o=s.return,l=s,c=n;if(n=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=l,x=g.tag;if(!(g.mode&1)&&(x===0||x===11||x===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var b=ml(o);if(b!==null){b.flags&=-257,pl(b,o,l,a,n),b.mode&1&&ul(a,d,n),n=b,c=d;var w=n.updateQueue;if(w===null){var j=new Set;j.add(c),n.updateQueue=j}else w.add(c);break e}else{if(!(n&1)){ul(a,d,n),po();break e}c=Error(y(426))}}else if(q&&l.mode&1){var _=ml(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),pl(_,o,l,a,n),$a(vn(c,l));break e}}a=c=vn(c,l),ee!==4&&(ee=2),Zn===null?Zn=[a]:Zn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=xd(a,c,n);rl(a,m);break e;case 1:l=c;var u=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){a.flags|=65536,n&=-n,a.lanes|=n;var f=fd(a,l,n);rl(a,f);break e}}a=a.return}while(a!==null)}Od(s)}catch(S){n=S,K===s&&s!==null&&(K=s=s.return);continue}break}while(!0)}function zd(){var e=Ni.current;return Ni.current=ji,e===null?ji:e}function po(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Ht&268435455)&&!(Bi&268435455)||gt(re,le)}function Ci(e,n){var s=z;z|=2;var i=zd();(re!==e||le!==n)&&(Xe=null,Lt(e,n));do try{up();break}catch(r){Ed(e,r)}while(!0);if(Qa(),z=s,Ni.current=i,K!==null)throw Error(y(261));return re=null,le=0,ee}function up(){for(;K!==null;)Dd(K)}function mp(){for(;K!==null&&!Fu();)Dd(K)}function Dd(e){var n=Ld(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Od(e):K=n,oo.current=null}function Od(e){var n=e;do{var s=n.alternate;if(e=n.return,n.flags&32768){if(s=rp(s,n),s!==null){s.flags&=32767,K=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,K=null;return}}else if(s=ip(s,n,ke),s!==null){K=s;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);ee===0&&(ee=5)}function zt(e,n,s){var i=D,r=Ee.transition;try{Ee.transition=null,D=1,pp(e,n,s,i)}finally{Ee.transition=r,D=i}return null}function pp(e,n,s,i){do pn();while(ft!==null);if(z&6)throw Error(y(327));s=e.finishedWork;var r=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var a=s.lanes|s.childLanes;if(Gu(e,a),e===re&&(K=re=null,le=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||qs||(qs=!0,Bd(oi,function(){return pn(),null})),a=(s.flags&15990)!==0,s.subtreeFlags&15990||a){a=Ee.transition,Ee.transition=null;var o=D;D=1;var l=z;z|=4,oo.current=null,op(e,s),Ad(s,e),Em(Kr),ci=!!Yr,Kr=Yr=null,e.current=s,lp(s),Lu(),z=l,D=o,Ee.transition=a}else e.current=s;if(qs&&(qs=!1,ft=e,Si=r),a=e.pendingLanes,a===0&&(Nt=null),qu(s.stateNode),Ne(e,Y()),n!==null)for(i=e.onRecoverableError,s=0;s<n.length;s++)r=n[s],i(r.value,{componentStack:r.stack,digest:r.digest});if(ki)throw ki=!1,e=xa,xa=null,e;return Si&1&&e.tag!==0&&pn(),a=e.pendingLanes,a&1?e===fa?Xn++:(Xn=0,fa=e):Xn=0,At(),null}function pn(){if(ft!==null){var e=xc(Si),n=Ee.transition,s=D;try{if(Ee.transition=null,D=16>e?16:e,ft===null)var i=!1;else{if(e=ft,ft=null,Si=0,z&6)throw Error(y(331));var r=z;for(z|=4,k=e.current;k!==null;){var a=k,o=a.child;if(k.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(k=d;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:Kn(8,g,a)}var x=g.child;if(x!==null)x.return=g,k=x;else for(;k!==null;){g=k;var h=g.sibling,b=g.return;if(Id(g),g===d){k=null;break}if(h!==null){h.return=b,k=h;break}k=b}}}var w=a.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}k=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,k=o;else e:for(;k!==null;){if(a=k,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Kn(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,k=m;break e}k=a.return}}var u=e.current;for(k=u;k!==null;){o=k;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,k=p;else e:for(o=u;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Li(9,l)}}catch(S){$(l,l.return,S)}if(l===o){k=null;break e}var f=l.sibling;if(f!==null){f.return=l.return,k=f;break e}k=l.return}}if(z=r,At(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ai,e)}catch{}i=!0}return i}finally{D=s,Ee.transition=n}}return!1}function Cl(e,n,s){n=vn(s,n),n=xd(e,n,1),e=jt(e,n,1),n=ge(),e!==null&&(ys(e,1,n),Ne(e,n))}function $(e,n,s){if(e.tag===3)Cl(e,e,s);else for(;n!==null;){if(n.tag===3){Cl(n,e,s);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nt===null||!Nt.has(i))){e=vn(s,e),e=fd(n,e,1),n=jt(n,e,1),e=ge(),n!==null&&(ys(n,1,e),Ne(n,e));break}}n=n.return}}function hp(e,n,s){var i=e.pingCache;i!==null&&i.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&s,re===e&&(le&s)===s&&(ee===4||ee===3&&(le&130023424)===le&&500>Y()-co?Lt(e,0):lo|=s),Ne(e,n)}function Fd(e,n){n===0&&(e.mode&1?(n=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):n=1);var s=ge();e=at(e,n),e!==null&&(ys(e,n,s),Ne(e,s))}function gp(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Fd(e,s)}function xp(e,n){var s=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(s=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(y(314))}i!==null&&i.delete(n),Fd(e,s)}var Ld;Ld=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)be=!0;else{if(!(e.lanes&s)&&!(n.flags&128))return be=!1,sp(e,n,s);be=!!(e.flags&131072)}else be=!1,q&&n.flags&1048576&&Uc(n,xi,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Xs(e,n),e=n.pendingProps;var r=gn(n,pe.current);mn(n,s),r=no(null,n,i,e,r,s);var a=so();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,je(i)?(a=!0,hi(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Za(n),r.updater=Fi,n.stateNode=r,r._reactInternals=n,ra(n,i,e,s),n=la(null,n,i,!0,a,s)):(n.tag=0,q&&a&&Ha(n),he(null,n,r,s),n=n.child),n;case 16:i=n.elementType;e:{switch(Xs(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=yp(i),e=Le(i,e),r){case 0:n=oa(null,n,i,e,s);break e;case 1:n=xl(null,n,i,e,s);break e;case 11:n=hl(null,n,i,e,s);break e;case 14:n=gl(null,n,i,Le(i.type,e),s);break e}throw Error(y(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),oa(e,n,i,r,s);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),xl(e,n,i,r,s);case 3:e:{if(wd(n),e===null)throw Error(y(387));i=n.pendingProps,a=n.memoizedState,r=a.element,Qc(e,n),vi(n,i,null,s);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=vn(Error(y(423)),n),n=fl(e,n,i,s,r);break e}else if(i!==r){r=vn(Error(y(424)),n),n=fl(e,n,i,s,r);break e}else for(Se=wt(n.stateNode.containerInfo.firstChild),Ce=n,q=!0,_e=null,s=$c(n,null,i,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(xn(),i===r){n=ot(e,n,s);break e}he(e,n,i,s)}n=n.child}return n;case 5:return Yc(n),e===null&&na(n),i=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,Zr(i,r)?o=null:a!==null&&Zr(i,a)&&(n.flags|=32),bd(e,n),he(e,n,o,s),n.child;case 6:return e===null&&na(n),null;case 13:return jd(e,n,s);case 4:return Xa(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=fn(n,null,i,s):he(e,n,i,s),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),hl(e,n,i,r,s);case 7:return he(e,n,n.pendingProps,s),n.child;case 8:return he(e,n,n.pendingProps.children,s),n.child;case 12:return he(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,a=n.memoizedProps,o=r.value,F(fi,i._currentValue),i._currentValue=o,a!==null)if(Ve(a.value,o)){if(a.children===r.children&&!we.current){n=ot(e,n,s);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=nt(-1,s&-s),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}a.lanes|=s,c=a.alternate,c!==null&&(c.lanes|=s),sa(a.return,s,n),l.lanes|=s;break}c=c.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(y(341));o.lanes|=s,l=o.alternate,l!==null&&(l.lanes|=s),sa(o,s,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}he(e,n,r.children,s),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,mn(n,s),r=ze(r),i=i(r),n.flags|=1,he(e,n,i,s),n.child;case 14:return i=n.type,r=Le(i,n.pendingProps),r=Le(i.type,r),gl(e,n,i,r,s);case 15:return yd(e,n,n.type,n.pendingProps,s);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Le(i,r),Xs(e,n),n.tag=1,je(i)?(e=!0,hi(n)):e=!1,mn(n,s),gd(n,i,r),ra(n,i,r,s),la(null,n,i,!0,e,s);case 19:return Nd(e,n,s);case 22:return vd(e,n,s)}throw Error(y(156,n.tag))};function Bd(e,n){return mc(e,n)}function fp(e,n,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,s,i){return new fp(e,n,s,i)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yp(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===Ea)return 14}return 2}function St(e,n){var s=e.alternate;return s===null?(s=Me(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ti(e,n,s,i,r,a){var o=2;if(i=e,typeof e=="function")ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kt:return Bt(s.children,r,a,n);case Ra:o=8,r|=8;break;case Tr:return e=Me(12,s,n,r|2),e.elementType=Tr,e.lanes=a,e;case Ar:return e=Me(13,s,n,r),e.elementType=Ar,e.lanes=a,e;case Rr:return e=Me(19,s,n,r),e.elementType=Rr,e.lanes=a,e;case Yl:return _i(s,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gl:o=10;break e;case Ql:o=9;break e;case Ma:o=11;break e;case Ea:o=14;break e;case mt:o=16,i=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=Me(o,s,n,r),n.elementType=e,n.type=i,n.lanes=a,n}function Bt(e,n,s,i){return e=Me(7,e,i,n),e.lanes=s,e}function _i(e,n,s,i){return e=Me(22,e,i,n),e.elementType=Yl,e.lanes=s,e.stateNode={isHidden:!1},e}function Nr(e,n,s){return e=Me(6,e,null,n),e.lanes=s,e}function kr(e,n,s){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vp(e,n,s,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ir(0),this.expirationTimes=ir(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function go(e,n,s,i,r,a,o,l,c){return e=new vp(e,n,s,l,c),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Me(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(a),e}function bp(e,n,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:i==null?null:""+i,children:e,containerInfo:n,implementation:s}}function _d(e){if(!e)return It;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var s=e.type;if(je(s))return _c(e,s,n)}return n}function qd(e,n,s,i,r,a,o,l,c){return e=go(s,i,!0,e,r,a,o,l,c),e.context=_d(null),s=e.current,i=ge(),r=kt(s),a=nt(i,r),a.callback=n??null,jt(s,a,r),e.current.lanes=r,ys(e,r,i),Ne(e,i),e}function qi(e,n,s,i){var r=n.current,a=ge(),o=kt(r);return s=_d(s),n.context===null?n.context=s:n.pendingContext=s,n=nt(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=jt(r,n,o),e!==null&&(He(e,r,o,a),Ys(e,r,o)),o}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Il(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function xo(e,n){Il(e,n),(e=e.alternate)&&Il(e,n)}function wp(){return null}var Ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function fo(e){this._internalRoot=e}Ui.prototype.render=fo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));qi(e,n,null,null)};Ui.prototype.unmount=fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vt(function(){qi(null,e,null,null)}),n[rt]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var n=vc();e={blockedOn:null,target:e,priority:n};for(var s=0;s<ht.length&&n!==0&&n<ht[s].priority;s++);ht.splice(s,0,e),s===0&&wc(e)}};function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pl(){}function jp(e,n,s,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var d=Ii(o);a.call(d)}}var o=qd(n,i,e,0,null,!1,!1,"",Pl);return e._reactRootContainer=o,e[rt]=o.current,os(e.nodeType===8?e.parentNode:e),Vt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Ii(c);l.call(d)}}var c=go(e,0,!1,null,null,!1,!1,"",Pl);return e._reactRootContainer=c,e[rt]=c.current,os(e.nodeType===8?e.parentNode:e),Vt(function(){qi(n,c,s,i)}),c}function Hi(e,n,s,i,r){var a=s._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var l=r;r=function(){var c=Ii(o);l.call(c)}}qi(n,o,e,r)}else o=jp(s,n,e,r,i);return Ii(o)}fc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=Un(n.pendingLanes);s!==0&&(Oa(n,s|1),Ne(n,Y()),!(z&6)&&(bn=Y()+500,At()))}break;case 13:Vt(function(){var i=at(e,1);if(i!==null){var r=ge();He(i,e,1,r)}}),xo(e,1)}};Fa=function(e){if(e.tag===13){var n=at(e,134217728);if(n!==null){var s=ge();He(n,e,134217728,s)}xo(e,134217728)}};yc=function(e){if(e.tag===13){var n=kt(e),s=at(e,n);if(s!==null){var i=ge();He(s,e,n,i)}xo(e,n)}};vc=function(){return D};bc=function(e,n){var s=D;try{return D=e,n()}finally{D=s}};qr=function(e,n,s){switch(n){case"input":if(zr(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var i=s[n];if(i!==e&&i.form===e.form){var r=zi(i);if(!r)throw Error(y(90));Zl(i),zr(i,r)}}}break;case"textarea":Jl(e,s);break;case"select":n=s.value,n!=null&&ln(e,!!s.multiple,n,!1)}};ac=uo;oc=Vt;var Np={usingClientEntryPoint:!1,Events:[bs,en,zi,ic,rc,uo]},Bn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Ai=Us.inject(kp),Ye=Us}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;Pe.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yo(n))throw Error(y(200));return bp(e,n,null,s)};Pe.createRoot=function(e,n){if(!yo(e))throw Error(y(299));var s=!1,i="",r=Ud;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=go(e,1,!1,null,null,s,!1,i,r),e[rt]=n.current,os(e.nodeType===8?e.parentNode:e),new fo(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=dc(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Vt(e)};Pe.hydrate=function(e,n,s){if(!Wi(n))throw Error(y(200));return Hi(null,e,n,!0,s)};Pe.hydrateRoot=function(e,n,s){if(!yo(e))throw Error(y(405));var i=s!=null&&s.hydratedSources||null,r=!1,a="",o=Ud;if(s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onRecoverableError!==void 0&&(o=s.onRecoverableError)),n=qd(n,null,e,1,s??null,r,!1,a,o),e[rt]=n.current,os(e),i)for(e=0;e<i.length;e++)s=i[e],r=s._getVersion,r=r(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,r]:n.mutableSourceEagerHydrationData.push(s,r);return new Ui(n)};Pe.render=function(e,n,s){if(!Wi(n))throw Error(y(200));return Hi(null,e,n,!1,s)};Pe.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(y(40));return e._reactRootContainer?(Vt(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Pe.unstable_batchedUpdates=uo;Pe.unstable_renderSubtreeIntoContainer=function(e,n,s,i){if(!Wi(s))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Hi(e,n,s,!1,i)};Pe.version="18.3.1-next-f1338f8080-20240426";function Wd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd)}catch(e){console.error(e)}}Wd(),Wl.exports=Pe;var Sp=Wl.exports,Hd,Tl=Sp;Hd=Tl.createRoot,Tl.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),N=(e,n)=>{const s=W.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:c,...d},g)=>W.createElement("svg",{ref:g,...Cp,width:r,height:r,stroke:i,strokeWidth:o?Number(a)*24/Number(r):a,className:["lucide",`lucide-${Ip(e)}`,l].join(" "),...d},[...n.map(([x,h])=>W.createElement(x,h)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=N("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=N("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=N("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=N("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=N("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=N("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=N("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=N("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=N("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=N("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=N("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=N("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=N("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=N("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=N("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=N("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=N("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=N("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=N("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=N("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=N("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=N("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=N("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=N("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=N("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=N("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=N("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=N("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=N("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=N("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=N("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=N("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=N("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=N("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=N("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=N("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=N("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=N("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=N("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=N("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=N("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=N("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=N("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=N("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=N("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=N("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=N("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=N("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=N("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=N("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=N("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=N("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=N("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=N("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=N("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=N("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=N("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=N("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=N("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=N("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=N("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=N("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=N("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=N("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=N("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=N("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=N("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=N("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Gp=({currentPage:e,setCurrentPage:n})=>{const[s,i]=W.useState(!1),[r,a]=W.useState(null),o=()=>{i(!s),a(null)},l=d=>{a(r===d?null:d)},c=d=>{n(d),i(!1),a(null),window.scrollTo({top:0,behavior:"smooth"})};return ql.useEffect(()=>{const d=()=>{const g=window.location.hash.replace("#","");g==="privacy-policy"?(n("privacy-policy"),window.scrollTo({top:0,behavior:"smooth"})):g==="terms-of-service"?(n("terms-of-service"),window.scrollTo({top:0,behavior:"smooth"})):g==="cookie-policy"?(n("cookie-policy"),window.scrollTo({top:0,behavior:"smooth"})):g==="cookie-policy"&&(n("cookie-policy"),window.scrollTo({top:0,behavior:"smooth"}))};return window.addEventListener("hashchange",d),d(),()=>window.removeEventListener("hashchange",d)},[n]),t.jsx("header",{className:"bg-white shadow-lg fixed top-0 left-0 right-0 z-50",children:t.jsxs("nav",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"flex justify-between items-center py-0",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("button",{onClick:()=>c("home"),className:"flex items-center focus:outline-none",children:t.jsx("img",{className:"h-32 w-auto",src:"/binapulse/binapulse-logo.png",alt:"Binapulse"})})}),t.jsx("div",{className:"hidden lg:block",children:t.jsxs("div",{className:"ml-10 flex items-baseline space-x-8",children:[t.jsx("button",{onClick:()=>c("home"),className:`px-3 py-2 text-sm font-medium transition-colors ${e==="home"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Home"}),t.jsxs("div",{className:"relative group",children:[t.jsxs("button",{className:"text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors",children:["Software Services",t.jsx(Ws,{className:"ml-1 h-4 w-4"})]}),t.jsx("div",{className:"absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",children:t.jsxs("div",{className:"py-2",children:[t.jsx("button",{onClick:()=>c("custom-software"),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Custom Software Development"}),t.jsx("button",{onClick:()=>c("ai-agents"),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"AI Agent Development"})]})})]}),t.jsxs("div",{className:"relative group",children:[t.jsxs("button",{className:"text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors",children:["IT Services",t.jsx(Ws,{className:"ml-1 h-4 w-4"})]}),t.jsx("div",{className:"absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",children:t.jsxs("div",{className:"py-2",children:[t.jsx("button",{onClick:()=>c("network-infrastructure"),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Network Infrastructure"}),t.jsx("button",{onClick:()=>c("cabling-hardware"),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"Cabling & Hardware Installation"}),t.jsx("button",{onClick:()=>c("it-consultation"),className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",children:"IT Consultation"})]})})]}),t.jsx("a",{href:"#solutions",className:"text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors",children:"Solutions"}),t.jsx("button",{onClick:()=>c("about"),className:`px-3 py-2 text-sm font-medium transition-colors ${e==="about"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"About"}),t.jsx("button",{onClick:()=>c("contact"),className:`px-3 py-2 text-sm font-medium transition-colors ${e==="contact"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Contact"}),t.jsx("button",{onClick:()=>c("careers"),className:`px-3 py-2 text-sm font-medium transition-colors ${e==="careers"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Careers"}),t.jsx("button",{onClick:()=>c("blog"),className:`px-3 py-2 text-sm font-medium transition-colors ${e==="blog"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Blog"})]})}),t.jsx("div",{className:"hidden lg:block",children:t.jsx("a",{href:"#contact",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors",children:"Get Free Quote"})}),t.jsx("div",{className:"lg:hidden",children:t.jsx("button",{onClick:o,className:"bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",children:s?t.jsx($p,{className:"h-6 w-6"}):t.jsx(Fp,{className:"h-6 w-6"})})})]}),s&&t.jsx("div",{className:"lg:hidden",children:t.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t",children:[t.jsx("button",{onClick:()=>c("home"),className:`w-full text-left px-3 py-2 text-base font-medium ${e==="home"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Home"}),t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>l("software"),className:"text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between",children:["Software Services",t.jsx(Ws,{className:`h-4 w-4 transition-transform ${r==="software"?"rotate-180":""}`})]}),r==="software"&&t.jsxs("div",{className:"pl-6 space-y-1",children:[t.jsx("button",{onClick:()=>c("custom-software"),className:"block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600",children:"Custom Software Development"}),t.jsx("button",{onClick:()=>c("ai-agents"),className:"block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600",children:"AI Agent Development"})]})]}),t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>l("it"),className:"text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between",children:["IT Services",t.jsx(Ws,{className:`h-4 w-4 transition-transform ${r==="it"?"rotate-180":""}`})]}),r==="it"&&t.jsxs("div",{className:"pl-6 space-y-1",children:[t.jsx("button",{onClick:()=>c("network-infrastructure"),className:"block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600",children:"Network Infrastructure"}),t.jsx("button",{onClick:()=>c("cabling-hardware"),className:"block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600",children:"Cabling & Hardware Installation"}),t.jsx("button",{onClick:()=>c("it-consultation"),className:"block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600",children:"IT Consultation"})]})]}),t.jsx("a",{href:"#solutions",className:"text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium",onClick:o,children:"Solutions"}),t.jsx("button",{onClick:()=>c("about"),className:`w-full text-left px-3 py-2 text-base font-medium ${e==="about"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"About"}),t.jsx("button",{onClick:()=>c("contact"),className:`w-full text-left px-3 py-2 text-base font-medium ${e==="contact"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Contact"}),t.jsx("button",{onClick:()=>c("careers"),className:`w-full text-left px-3 py-2 text-base font-medium ${e==="careers"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Careers"}),t.jsx("button",{onClick:()=>c("blog"),className:`w-full text-left px-3 py-2 text-base font-medium ${e==="blog"?"text-blue-600":"text-gray-900 hover:text-blue-600"}`,children:"Blog"}),t.jsx("div",{className:"px-3 py-4",children:t.jsx("a",{href:"#contact",className:"bg-blue-600 hover:bg-blue-700 text-white block text-center px-6 py-2 rounded-lg text-base font-medium transition-colors",children:"Get Free Quote"})})]})})]})})},Qp=()=>t.jsxs("section",{id:"home",className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-16 items-center",children:[t.jsxs("div",{className:"order-2 lg:order-1",children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx("span",{className:"w-2 h-2 bg-blue-600 rounded-full mr-2"}),"Trusted by 500+ businesses across Africa"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Innovative Software &",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" IT Solutions"})," to Propel Your Business Forward"]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Transform your business with custom software development, AI agents, ERP solutions, and comprehensive IT infrastructure services designed for the African market."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-12",children:[t.jsxs("a",{href:"#software-services",className:"inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Explore Our Software Solutions",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsxs("a",{href:"#it-services",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:[t.jsx(Lp,{className:"mr-2 h-5 w-5"}),"Discover Our IT Services"]})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-gray-900 mb-1",children:"500+"}),t.jsx("div",{className:"text-gray-600 text-sm",children:"Happy Clients"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-gray-900 mb-1",children:"200+"}),t.jsx("div",{className:"text-gray-600 text-sm",children:"Projects Delivered"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-gray-900 mb-1",children:"24/7"}),t.jsx("div",{className:"text-gray-600 text-sm",children:"Support Available"})]})]})]}),t.jsx("div",{className:"order-1 lg:order-2",children:t.jsxs("div",{className:"relative hidden lg:block",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Modern office with technology solutions",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx("div",{className:"w-3 h-3 bg-green-600 rounded-full"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"AI Agent Active"}),t.jsx("div",{className:"text-xs text-gray-500",children:"24/7 Automation"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"99.9%"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Uptime Guaranteed"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"})]})})]})})]}),Yp=()=>{const e=[{icon:Qd,title:"Custom Software Development & AI Agent Development",description:"Tailored software solutions and intelligent AI agents that automate your business processes and scale with your growth.",features:["Custom Web & Mobile Apps","AI-Powered Automation","ERP Systems","E-commerce Solutions"],link:"#custom-software",color:"from-blue-500 to-cyan-500"},{icon:si,title:"Network and IT Design and Setup",description:"Complete IT infrastructure design, implementation, and maintenance services to keep your business connected and secure.",features:["Network Architecture","Server Setup","Security Implementation","Cloud Integration"],link:"#network-infrastructure",color:"from-teal-500 to-green-500"},{icon:ni,title:"IT & Network Consultation",description:"Strategic technology advisory services to align your IT investments with business objectives and drive digital transformation.",features:["Technology Strategy","Infrastructure Assessment","Digital Transformation","Cybersecurity Planning"],link:"#it-consultation",color:"from-purple-500 to-pink-500"}];return t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our Core Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey."})]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:e.map((n,s)=>t.jsxs("div",{className:"group relative",children:[t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"relative mb-6",children:t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${n.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(n.icon,{className:"h-8 w-8 text-white"})})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors",children:n.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:n.description}),t.jsx("ul",{className:"space-y-2 mb-8",children:n.features.map((i,r)=>t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full mr-3"}),i]},r))}),t.jsxs("a",{href:n.link,className:"inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1",children:["Learn More",t.jsx(O,{className:"ml-2 h-4 w-4"})]}),t.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${n.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`})]}),t.jsx("div",{className:`absolute -inset-1 bg-gradient-to-br ${n.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`})]},s))}),t.jsxs("div",{className:"text-center mt-16",children:[t.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"Ready to transform your business with our technology solutions?"}),t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105",children:["Get Your Free Consultation",t.jsx(O,{className:"ml-2 h-5 w-5"})]})]})]})})},Kp=()=>{const e=[{icon:Na,name:"Awoyaa",title:"ERP for General Shops & Retail",description:"Comprehensive business management solution designed for retail stores, supermarkets, and general merchandise businesses across Africa.",features:["Multi-Business & Multi-Location Support","Advanced User & Role Management","Smart Inventory Management","POS & Sales Management","Accounting & Financial Reporting","Customer & Supplier Management"],additionalFeatures:["HRM Module","CRM Integration","Barcode Support","Offline Functionality","Multi-Currency Support"],badge:"Most Popular",color:"from-blue-500 to-cyan-500",link:"#"},{icon:Vp,name:"Edziban",title:"ERP for Restaurants and Food Businesses",description:"Specialized restaurant management system with table management, kitchen integration, and food-specific inventory control.",features:["Table & Order Management","Kitchen Display System Integration","Ingredient-Level Inventory Control","Menu Management & Pricing","Customer & Loyalty Management","Restaurant-Tailored POS System"],additionalFeatures:["Online Order Support","Staff Management","Sales Analytics","Recipe Management","Secure & Scalable"],badge:"Industry Specific",color:"from-orange-500 to-red-500",link:"#"},{icon:X,name:"Erkamka",title:"Email Marketing Platform",description:"Powerful email marketing automation platform with AI-powered suggestions and comprehensive analytics for businesses of all sizes.",features:["Drag-and-Drop Campaign Builder","Advanced Campaign Analytics","Contact Management & Segmentation","Automated Email Workflows","AI-Powered Content Suggestions","GDPR & CAN-SPAM Compliance"],additionalFeatures:["Custom Templates","A/B Testing","Integration APIs","Multi-language Support","Real-time Reporting"],badge:"AI-Powered",color:"from-purple-500 to-pink-500",link:"#"},{icon:Sn,name:"Daavi",title:"Custom Business Solutions",description:"Tailored business management solutions built specifically for your unique industry requirements and business processes.",features:["Custom Workflow Design","Industry-Specific Features","Scalable Architecture","Integration Capabilities","Advanced Reporting","Multi-Platform Support"],additionalFeatures:["API Integration","Cloud & On-Premise","Mobile Apps","24/7 Support","Regular Updates"],badge:"Fully Customizable",color:"from-teal-500 to-green-500",link:"#"}];return t.jsx("section",{id:"solutions",className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our Solutions Portfolio"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Proven software solutions designed for African businesses, from retail management to email marketing automation."})]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",children:e.map((n,s)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 h-full",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx("div",{className:`inline-flex items-center bg-gradient-to-r ${n.color} text-white px-4 py-2 rounded-full text-sm font-semibold`,children:n.badge}),t.jsx("div",{className:"flex items-center text-yellow-500",children:[...Array(5)].map((i,r)=>t.jsx(ct,{className:"h-4 w-4 fill-current"},r))})]}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${n.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(n.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:n.name}),t.jsx("p",{className:"text-lg text-gray-600",children:n.title})]})]}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:n.description}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Core Features:"}),t.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:n.features.map((i,r)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx("div",{className:`w-2 h-2 bg-gradient-to-r ${n.color} rounded-full mr-3 mt-2 flex-shrink-0`}),i]},r))})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Additional Features:"}),t.jsx("div",{className:"flex flex-wrap gap-2",children:n.additionalFeatures.map((i,r)=>t.jsx("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs",children:i},r))})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("a",{href:n.link,className:`inline-flex items-center justify-center bg-gradient-to-r ${n.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`,children:["Learn More",t.jsx(zp,{className:"ml-2 h-4 w-4"})]}),t.jsx("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors",children:"Request Demo"})]}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${n.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},s))}),t.jsxs("div",{className:"text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg",children:[t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold text-gray-900 mb-4",children:"Need a Custom Solution?"}),t.jsx("p",{className:"text-lg text-gray-600 mb-6 max-w-2xl mx-auto",children:"Our team specializes in creating bespoke software solutions tailored to your specific industry and business requirements."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsx("a",{href:"#contact",className:"inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105",children:"Discuss Your Project"}),t.jsx("a",{href:"#custom-software",className:"inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors",children:"View Development Process"})]})]})]})})},Zp=()=>{const e=[{icon:xe,title:"Locally Built, Globally Aligned",description:"Deep understanding of African business challenges with international quality standards and best practices.",stats:"10+ Years Local Experience"},{icon:oe,title:"End-to-End Expertise",description:"Complete technology solutions from initial consultation to deployment, training, and ongoing maintenance.",stats:"Full Stack Capabilities"},{icon:Tn,title:"Support That Stays",description:"Local community tech representatives provide on-ground support, ensuring you're never alone in your digital journey.",stats:"24/7 Local Support"},{icon:Z,title:"Solutions That Scale",description:"Future-proof technology solutions designed to grow with your business, from startup to enterprise level.",stats:"500+ Scaling Businesses"}];return t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:["Why Choose",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Binapulse"}),"?"]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"We're not just another tech company. We're your strategic partner in digital transformation, combining local insights with global expertise."}),t.jsx("div",{className:"space-y-8",children:e.map((n,s)=>t.jsxs("div",{className:"flex items-start group",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:t.jsx(n.icon,{className:"h-6 w-6 text-white"})})}),t.jsxs("div",{className:"ml-6",children:[t.jsxs("div",{className:"flex items-center mb-2",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors",children:n.title}),t.jsx("span",{className:"ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",children:n.stats})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:n.description})]})]},s))}),t.jsx("div",{className:"mt-10",children:t.jsx("a",{href:"#contact",className:"inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:"Experience the Difference"})})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Team collaboration and technology",className:"w-full h-[600px] object-cover rounded-3xl shadow-2xl"})}),t.jsx("div",{className:"absolute top-8 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:"98%"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Client Satisfaction"})]})}),t.jsx("div",{className:"absolute bottom-8 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4",children:t.jsx(Z,{className:"h-6 w-6 text-blue-600"})}),t.jsxs("div",{children:[t.jsx("div",{className:"font-bold text-gray-900",children:"200+ Projects"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Successfully Delivered"})]})]})}),t.jsx("div",{className:"absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl z-10 pointer-events-none"})]})]}),t.jsxs("div",{className:"mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white",children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold mb-4",children:"Our Track Record Speaks"}),t.jsx("p",{className:"text-lg opacity-90",children:"Numbers that reflect our commitment to excellence and client success"})]}),t.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold mb-2",children:"500+"}),t.jsx("div",{className:"text-sm lg:text-base opacity-90",children:"Happy Clients"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold mb-2",children:"200+"}),t.jsx("div",{className:"text-sm lg:text-base opacity-90",children:"Projects Completed"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold mb-2",children:"15+"}),t.jsx("div",{className:"text-sm lg:text-base opacity-90",children:"Countries Served"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold mb-2",children:"99.9%"}),t.jsx("div",{className:"text-sm lg:text-base opacity-90",children:"Uptime Guarantee"})]})]})]})]})})},Xp=()=>{const[e,n]=W.useState(0),s=[{name:"Kwame Asante",position:"CEO, Asante Retail Group",company:"Multi-location retail chain",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",content:"Binapulse transformed our entire retail operation with Awoyaa. We now manage 12 locations seamlessly, and our inventory accuracy has improved by 95%. Their local support team is exceptional.",rating:5,results:"95% inventory accuracy improvement",industry:"Retail"},{name:"Fatima Al-Hassan",position:"Operations Manager",company:"Golden Spoon Restaurant Chain",image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",content:"Edziban revolutionized how we manage our restaurant operations. The kitchen integration and inventory control have reduced our food waste by 40% and improved customer satisfaction significantly.",rating:5,results:"40% reduction in food waste",industry:"Food & Beverage"},{name:"David Osei",position:"IT Director",company:"Osei Manufacturing Ltd.",image:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",content:"The network infrastructure setup by Binapulse has been rock solid for 3 years. Their proactive monitoring and 24/7 support have kept our operations running smoothly without any major downtime.",rating:5,results:"99.9% network uptime achieved",industry:"Manufacturing"},{name:"Aisha Mohammed",position:"Marketing Director",company:"Sahara Marketing Agency",image:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",content:"Erkamka has transformed our email marketing campaigns. The AI-powered suggestions and automation features have increased our client engagement rates by 60% and saved us countless hours.",rating:5,results:"60% increase in engagement",industry:"Marketing"},{name:"Samuel Mensah",position:"Founder",company:"Tech Startup Incubator",image:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",content:"Working with Binapulse on our custom software development was a game-changer. They understood our vision and delivered beyond expectations. Their ongoing support has been phenomenal.",rating:5,results:"300% faster processes",industry:"Technology"}];W.useEffect(()=>{const a=setInterval(()=>{n(o=>(o+1)%s.length)},6e3);return()=>clearInterval(a)},[s.length]);const i=()=>{n(a=>(a+1)%s.length)},r=()=>{n(a=>(a-1+s.length)%s.length)};return t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"What Our Clients Say"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Don't just take our word for it. Here's what business leaders across Africa say about their experience with Binapulse Technologies."})]}),t.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[t.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-50 transform translate-x-32 -translate-y-32"}),t.jsx("div",{className:"absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center",children:t.jsx(_p,{className:"h-8 w-8 text-white"})}),t.jsx("div",{className:"relative z-10",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center",children:[t.jsxs("div",{className:"text-center lg:text-left order-2 lg:order-1",children:[t.jsxs("div",{className:"inline-block relative mb-6",children:[t.jsx("img",{src:s[e].image,alt:s[e].name,className:"w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 ring-4 ring-white shadow-lg"}),t.jsx("div",{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold",children:s[e].industry})]}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:s[e].name}),t.jsx("p",{className:"text-gray-600 mb-2",children:s[e].position}),t.jsx("p",{className:"text-sm text-gray-500 mb-4",children:s[e].company}),t.jsx("div",{className:"flex justify-center lg:justify-start mb-4",children:[...Array(s[e].rating)].map((a,o)=>t.jsx(ct,{className:"h-5 w-5 text-yellow-400 fill-current"},o))}),t.jsxs("div",{className:"inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold",children:[t.jsx("div",{className:"w-2 h-2 bg-green-600 rounded-full mr-2"}),s[e].results]})]}),t.jsx("div",{className:"lg:col-span-2 order-1 lg:order-2",children:t.jsxs("blockquote",{className:"text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-8",children:['"',s[e].content,'"']})})]})})]}),t.jsxs("div",{className:"flex items-center justify-between mt-8",children:[t.jsx("button",{onClick:r,className:"w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors",children:t.jsx(Pp,{className:"h-6 w-6 text-gray-600"})}),t.jsx("div",{className:"flex space-x-2",children:s.map((a,o)=>t.jsx("button",{onClick:()=>n(o),className:`w-3 h-3 rounded-full transition-colors ${o===e?"bg-blue-600":"bg-gray-300 hover:bg-gray-400"}`},o))}),t.jsx("button",{onClick:i,className:"w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors",children:t.jsx(Tp,{className:"h-6 w-6 text-gray-600"})})]})]}),t.jsxs("div",{className:"mt-16 text-center",children:[t.jsx("p",{className:"text-gray-600 mb-8",children:"Trusted by leading businesses across Africa"}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60",children:[t.jsx("div",{className:"text-gray-400 font-semibold text-lg",children:"Asante Retail"}),t.jsx("div",{className:"text-gray-400 font-semibold text-lg",children:"Golden Spoon"}),t.jsx("div",{className:"text-gray-400 font-semibold text-lg",children:"Osei Manufacturing"}),t.jsx("div",{className:"text-gray-400 font-semibold text-lg",children:"Sahara Marketing"})]})]}),t.jsxs("div",{className:"text-center mt-12",children:[t.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"Ready to join our satisfied clients?"}),t.jsx("a",{href:"#contact",className:"inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105",children:"Start Your Success Story"})]})]})})},Jp=()=>{const[e,n]=W.useState({name:"",email:"",phone:"",company:"",service:"",message:""}),[s,i]=W.useState(!1),[r,a]=W.useState("idle"),o=c=>{n({...e,[c.target.name]:c.target.value})},l=async c=>{c.preventDefault(),i(!0),setTimeout(()=>{a("success"),i(!1),n({name:"",email:"",phone:"",company:"",service:"",message:""})},2e3)};return t.jsx("section",{id:"contact",className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Get Your Free Consultation"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Ready to transform your business with innovative technology solutions? Let's discuss your project and explore how we can help you succeed."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-12",children:[t.jsx("div",{className:"lg:col-span-2",children:t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"}),t.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Let's Start a Conversation"}),t.jsx("p",{className:"text-lg opacity-90 mb-8",children:"Our team is ready to discuss your technology needs and provide tailored solutions for your business."}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(ie,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Phone"}),t.jsx("p",{className:"opacity-90",children:"+233 55 412 9334"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(X,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Email"}),t.jsx("p",{className:"opacity-90",children:"info@binapulse.com"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(kn,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Head Office"}),t.jsx("p",{className:"opacity-90",children:"Accra, Ghana"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(Ze,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Business Hours"}),t.jsx("p",{className:"opacity-90",children:"Mon-Fri 9AM-6PM"}),t.jsx("p",{className:"opacity-90",children:"Sat 10AM-2PM"})]})]})]}),t.jsxs("div",{className:"mt-8 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"font-semibold mb-4",children:"Follow Us"}),t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Vi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Gi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx($i,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Yi,{className:"h-5 w-5"})})]})]}),t.jsx("div",{className:"mt-8",children:t.jsxs("a",{href:"#",className:"inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:[t.jsx(wa,{className:"mr-2 h-5 w-5"}),"Chat on WhatsApp"]})})]})]})}),t.jsx("div",{className:"lg:col-span-3",children:t.jsx("div",{className:"bg-white rounded-3xl p-8 lg:p-10 shadow-lg",children:t.jsxs("form",{onSubmit:l,className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Full Name *"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"John Doe"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email Address *"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"john@company.com"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"phone",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Phone Number"}),t.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"+233 24 123 4567"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"company",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Company Name"}),t.jsx("input",{type:"text",id:"company",name:"company",value:e.company,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"Your Company"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"service",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Service of Interest *"}),t.jsxs("select",{id:"service",name:"service",required:!0,value:e.service,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select a service"}),t.jsx("option",{value:"custom-software",children:"Custom Software Development"}),t.jsx("option",{value:"ai-agents",children:"AI Agent Development"}),t.jsx("option",{value:"network-infrastructure",children:"Network Infrastructure"}),t.jsx("option",{value:"cabling-hardware",children:"Cabling & Hardware Installation"}),t.jsx("option",{value:"it-consultation",children:"IT Consultation"}),t.jsx("option",{value:"awoyaa",children:"Awoyaa ERP"}),t.jsx("option",{value:"edziban",children:"Edziban Restaurant ERP"}),t.jsx("option",{value:"erkamka",children:"Erkamka Email Marketing"}),t.jsx("option",{value:"other",children:"Other / Multiple Services"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Project Details *"}),t.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:e.message,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical",placeholder:"Tell us about your project, challenges, and goals..."})]}),r==="success"&&t.jsx("div",{className:"p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg",children:"Thank you for your inquiry! We'll get back to you within 24 hours."}),r==="error"&&t.jsx("div",{className:"p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg",children:"There was an error submitting your form. Please try again."}),t.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",children:s?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Submitting..."]}):t.jsxs(t.Fragment,{children:["Send Message",t.jsx(vo,{className:"ml-2 h-5 w-5"})]})}),t.jsx("p",{className:"text-sm text-gray-600 text-center",children:"We respect your privacy and will never share your information with third parties."})]})})})]})]})})},eh=({setCurrentPage:e})=>{const n=s=>{e&&(e(s),window.scrollTo({top:0,behavior:"smooth"}))};return t.jsxs("footer",{className:"bg-gray-900 text-white",children:[t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-16",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[t.jsxs("div",{className:"lg:col-span-1",children:[t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-3",children:t.jsx("span",{className:"text-white font-bold text-xl",children:"B"})}),t.jsx("span",{className:"text-xl font-bold",children:"Binapulse Technologies"})]}),t.jsx("p",{className:"text-gray-400 mb-6 leading-relaxed",children:"Empowering African businesses with innovative software solutions, AI agents, and comprehensive IT infrastructure services."}),t.jsxs("div",{className:"space-y-3 text-sm",children:[t.jsxs("div",{className:"flex items-center text-gray-400",children:[t.jsx(ie,{className:"h-4 w-4 mr-3 flex-shrink-0"}),t.jsx("span",{children:"+233 55 412 9334"})]}),t.jsxs("div",{className:"flex items-center text-gray-400",children:[t.jsx(X,{className:"h-4 w-4 mr-3 flex-shrink-0"}),t.jsx("span",{children:"info@binapulse.com"})]}),t.jsxs("div",{className:"flex items-center text-gray-400",children:[t.jsx(kn,{className:"h-4 w-4 mr-3 flex-shrink-0"}),t.jsx("span",{children:"Accra, Ghana"})]}),t.jsxs("div",{className:"flex items-center text-gray-400",children:[t.jsx(Ze,{className:"h-4 w-4 mr-3 flex-shrink-0"}),t.jsx("span",{children:"Mon-Fri 9AM-6PM, Sat 10AM-2PM"})]})]}),t.jsxs("div",{className:"flex space-x-4 mt-6",children:[t.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors",children:t.jsx(Vi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors",children:t.jsx(Gi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors",children:t.jsx($i,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors",children:t.jsx(Yi,{className:"h-5 w-5"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Services"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsx("li",{children:t.jsxs("button",{onClick:()=>n("custom-software"),className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Custom Software Development"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("button",{onClick:()=>n("ai-agents"),className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"AI Agent Development"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("button",{onClick:()=>n("network-infrastructure"),className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Network Infrastructure"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("button",{onClick:()=>n("cabling-hardware"),className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Cabling & Hardware Installation"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("button",{onClick:()=>n("it-consultation"),className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"IT Consultation"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Solutions"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsx("li",{children:t.jsxs("a",{href:"#solutions",className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Awoyaa - Retail ERP"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#solutions",className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Edziban - Restaurant ERP"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#solutions",className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Erkamka - Email Marketing"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"#solutions",className:"text-gray-400 hover:text-white transition-colors flex items-center group",children:[t.jsx("span",{children:"Daavi - Custom Solutions"}),t.jsx(O,{className:"h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"})]})})]}),t.jsxs("div",{className:"mt-6",children:[t.jsx("h4",{className:"font-semibold mb-3",children:"Company"}),t.jsxs("ul",{className:"space-y-3",children:[t.jsx("li",{children:t.jsx("button",{onClick:()=>n("about"),className:"text-gray-400 hover:text-white transition-colors",children:"About Us"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>n("contact"),className:"text-gray-400 hover:text-white transition-colors",children:"Contact"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>n("careers"),className:"text-gray-400 hover:text-white transition-colors",children:"Careers"})}),t.jsx("li",{children:t.jsx("button",{onClick:()=>n("blog"),className:"text-gray-400 hover:text-white transition-colors",children:"Blog"})})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold mb-6",children:"Stay Updated"}),t.jsx("p",{className:"text-gray-400 mb-4 text-sm",children:"Subscribe to our newsletter for the latest technology insights and business tips."}),t.jsxs("form",{className:"space-y-3",children:[t.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"}),t.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105",children:"Subscribe"})]}),t.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg",children:[t.jsx("h4",{className:"font-semibold mb-2",children:"Need Immediate Help?"}),t.jsx("p",{className:"text-sm opacity-90 mb-3",children:"Our support team is available 24/7 to assist you."}),t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors",children:["Get Support",t.jsx(O,{className:"ml-1 h-4 w-4"})]})]})]})]})}),t.jsx("div",{className:"border-t border-gray-800",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-6",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[t.jsx("div",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2025 Binapulse Technologies. All rights reserved."}),t.jsxs("div",{className:"flex flex-wrap items-center space-x-6 text-sm",children:[t.jsx("button",{onClick:()=>{n("privacy-policy")},className:"text-gray-400 hover:text-white transition-colors",children:"Privacy Policy"}),t.jsx("button",{onClick:()=>{n("terms-of-service")},className:"text-gray-400 hover:text-white transition-colors",children:"Terms of Service"}),t.jsx("button",{onClick:()=>{n("cookie-policy")},className:"text-gray-400 hover:text-white transition-colors",children:"Cookie Policy"}),t.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:"Sitemap"})]})]})})})]})},th=()=>{const e=[{icon:xe,title:"Custom Software Development",description:"Tailored applications that fit your unique business processes"},{icon:st,title:"AI Agent Development",description:"Intelligent automation solutions for enhanced productivity"},{icon:te,title:"Network Infrastructure",description:"Robust, secure networking solutions for seamless connectivity"},{icon:oe,title:"IT Consultation",description:"Strategic technology advisory to align IT with business goals"},{icon:Z,title:"ERP Solutions",description:"Comprehensive business management systems for operational excellence"}],n=[{icon:xe,title:"Locally Built, Globally Aligned",description:"Deep understanding of African business challenges combined with international quality standards and best practices."},{icon:oe,title:"End-to-End Expertise",description:"Complete technology solutions from initial consultation to deployment, training, and ongoing maintenance support."},{icon:te,title:"Support That Stays",description:"Local community tech representatives provide on-ground support, ensuring you're never alone in your digital journey."},{icon:Z,title:"Solutions That Scale",description:"Future-proof technology solutions designed to grow with your business, from startup to enterprise level."}],s=[{number:"500+",label:"Happy Clients"},{number:"200+",label:"Projects Delivered"},{number:"15+",label:"Countries Served"},{number:"10+",label:"Years Experience"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsxs("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["About",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Binapulse Technologies"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Empowering African businesses with innovative technology solutions that drive growth, efficiency, and digital transformation."})]}),t.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:s.map((i,r)=>t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-2",children:i.number}),t.jsx("div",{className:"text-gray-600",children:i.label})]},r))})]})]}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Who We Are"}),t.jsx("p",{className:"text-lg text-gray-600 mb-6 leading-relaxed",children:"Binapulse Technologies is a leading technology company specializing in custom software development, AI solutions, and comprehensive IT infrastructure services. Founded with a vision to bridge the digital divide in Africa, we combine local market insights with global technology standards."}),t.jsx("p",{className:"text-lg text-gray-600 mb-8 leading-relaxed",children:"Our team of experienced developers, network engineers, and IT consultants work tirelessly to deliver solutions that not only meet current business needs but also prepare organizations for future growth and technological advancement."}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-6 w-6 text-green-600 mr-3 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700",children:"10+ years of combined industry experience"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-6 w-6 text-green-600 mr-3 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700",children:"Certified professionals and industry experts"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-6 w-6 text-green-600 mr-3 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700",children:"Commitment to quality and customer satisfaction"})]})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:"./about-hero.jpeg",alt:"Professional team collaboration",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"}),t.jsx("div",{className:"absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4",children:t.jsx(lt,{className:"h-6 w-6 text-blue-600"})}),t.jsxs("div",{children:[t.jsx("div",{className:"font-bold text-gray-900",children:"Excellence"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Driven by Quality"})]})]})})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"What We Do"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We provide comprehensive technology solutions across five main service areas, each designed to address specific business challenges and opportunities."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((i,r)=>t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(i.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors",children:i.title}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:i.description})]},r))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Ue,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold mb-6",children:"Our Mission"}),t.jsx("p",{className:"text-lg opacity-90 leading-relaxed",children:"To empower businesses with affordable, intelligent, and scalable technology solutions that drive growth, improve efficiency, and enable digital transformation across Africa and beyond."})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-teal-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(wn,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold mb-6",children:"Our Vision"}),t.jsx("p",{className:"text-lg opacity-90 leading-relaxed",children:"To be the most trusted partner for business automation and IT transformation in Africa and beyond, setting the standard for innovation, quality, and customer success in the technology industry."})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Why We Stand Out"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Four key differentiators that make Binapulse Technologies the preferred choice for businesses seeking reliable technology partners."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map((i,r)=>t.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group",children:t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:t.jsx(i.icon,{className:"h-6 w-6 text-white"})})}),t.jsxs("div",{className:"ml-6",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors",children:i.title}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:i.description})]})]})},r))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Ready to transform your business with innovative technology solutions? We're here to help you succeed."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white",children:[t.jsx("h3",{className:"text-2xl font-bold mb-8",children:"Contact Information"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(kn,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Head Office"}),t.jsx("p",{className:"opacity-90",children:"Accra, Ghana"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(ie,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Phone"}),t.jsx("p",{className:"opacity-90",children:"+233 24 123 4567"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(X,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Email"}),t.jsx("p",{className:"opacity-90",children:"info@binapulse.com"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(Ze,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Business Hours"}),t.jsx("p",{className:"opacity-90",children:"Mon-Fri 9AM-6PM"}),t.jsx("p",{className:"opacity-90",children:"Sat 10AM-2PM, Sun Closed"})]})]})]}),t.jsxs("div",{className:"mt-8 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"font-semibold mb-4",children:"Follow Us"}),t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Vi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Gi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx($i,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Yi,{className:"h-5 w-5"})})]})]})]}),t.jsxs("div",{className:"bg-gray-50 rounded-3xl p-8 lg:p-10",children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Request a Custom Quote"}),t.jsxs("form",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Full Name *"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"John Doe"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email Address *"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"john@company.com"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"company",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Company Name"}),t.jsx("input",{type:"text",id:"company",name:"company",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"Your Company"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"service",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Service of Interest *"}),t.jsxs("select",{id:"service",name:"service",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select a service"}),t.jsx("option",{value:"custom-software",children:"Custom Software Development"}),t.jsx("option",{value:"ai-agents",children:"AI Agent Development"}),t.jsx("option",{value:"network-infrastructure",children:"Network Infrastructure"}),t.jsx("option",{value:"it-consultation",children:"IT Consultation"}),t.jsx("option",{value:"erp-solutions",children:"ERP Solutions"}),t.jsx("option",{value:"other",children:"Other"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Project Details *"}),t.jsx("textarea",{id:"message",name:"message",required:!0,rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical",placeholder:"Tell us about your project requirements..."})]}),t.jsxs("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center",children:["Send Message",t.jsx(O,{className:"ml-2 h-5 w-5"})]})]})]})]})]})})]})},nh=()=>{const[e,n]=W.useState({name:"",email:"",phone:"",company:"",service:"",budget:"",timeline:"",message:""}),[s,i]=W.useState(!1),[r,a]=W.useState("idle"),o=g=>{n({...e,[g.target.name]:g.target.value})},l=async g=>{g.preventDefault(),i(!0),setTimeout(()=>{a("success"),i(!1),n({name:"",email:"",phone:"",company:"",service:"",budget:"",timeline:"",message:""})},2e3)},c=[{icon:ie,title:"Call Us",description:"Speak directly with our team",contact:"+233 55 412 9334",action:"Call Now",color:"from-green-500 to-emerald-500"},{icon:X,title:"Email Us",description:"Send us a detailed message",contact:"info@binapulse.com",action:"Send Email",color:"from-blue-500 to-cyan-500"},{icon:wa,title:"WhatsApp",description:"Quick chat on WhatsApp",contact:"+233 55 412 9334",action:"Chat Now",color:"from-green-600 to-green-500"}],d=[{day:"Monday - Friday",hours:"9:00 AM - 6:00 PM"},{day:"Saturday",hours:"10:00 AM - 2:00 PM"},{day:"Sunday",hours:"Closed"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsxs("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Let's Build Something",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Amazing Together"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Transform your business with cutting-edge technology solutions. Our expert team is ready to understand your challenges, explore opportunities, and deliver results that exceed expectations."})]}),t.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold text-blue-600 mb-2",children:"500+"}),t.jsx("div",{className:"text-gray-600",children:"Happy Clients"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold text-teal-600 mb-2",children:"200+"}),t.jsx("div",{className:"text-gray-600",children:"Projects Delivered"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold text-purple-600 mb-2",children:"15+"}),t.jsx("div",{className:"text-gray-600",children:"Countries Served"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl lg:text-4xl font-bold text-green-600 mb-2",children:"24/7"}),t.jsx("div",{className:"text-gray-600",children:"Support Available"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:c.map((g,x)=>t.jsxs("div",{className:"relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 overflow-hidden",children:[t.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}),t.jsxs("div",{className:"relative z-10",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${g.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`,children:t.jsx(g.icon,{className:"h-8 w-8 text-white"})}),t.jsx("div",{className:"text-right",children:t.jsx("div",{className:"w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors",children:t.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full"})})})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300",children:g.title}),t.jsx("p",{className:"text-gray-600 mb-4 leading-relaxed text-sm",children:g.description}),t.jsx("div",{className:"mb-6",children:t.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 group-hover:bg-gray-100 transition-colors",children:[t.jsx("p",{className:"font-bold text-gray-900 text-lg",children:g.contact}),t.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Available 24/7"})]})}),t.jsxs("button",{className:`w-full bg-gradient-to-r ${g.color} text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group-hover:shadow-2xl`,children:[t.jsx(g.icon,{className:"mr-3 h-5 w-5"}),g.action]}),t.jsx("div",{className:"absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"}),t.jsx("div",{className:"absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500 -z-10"}),t.jsx(g.icon,{className:"h-8 w-8 text-white"})]})]},x))})]})]}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-12",children:[t.jsx("div",{className:"lg:col-span-2",children:t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden h-full",children:[t.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"}),t.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("h2",{className:"text-2xl lg:text-3xl font-bold mb-6",children:"Let's Start a Conversation"}),t.jsx("p",{className:"text-lg opacity-90 mb-8",children:"Our team is ready to discuss your technology needs and provide tailored solutions for your business growth."}),t.jsxs("div",{className:"space-y-6 mb-8",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(kn,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Head Office"}),t.jsx("p",{className:"opacity-90",children:"Accra, Ghana"}),t.jsx("p",{className:"opacity-75 text-sm",children:"West Africa"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(ie,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Phone"}),t.jsx("p",{className:"opacity-90",children:"+233 55 412 9334"}),t.jsx("p",{className:"opacity-75 text-sm",children:"24/7 Support Available"})]})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4",children:t.jsx(X,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Email"}),t.jsx("p",{className:"opacity-90",children:"info@binapulse.com"}),t.jsx("p",{className:"opacity-75 text-sm",children:"Response within 24 hours"})]})]})]}),t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx(Ze,{className:"h-6 w-6 mr-3"}),t.jsx("h3",{className:"font-semibold text-lg",children:"Business Hours"})]}),t.jsx("div",{className:"space-y-2",children:d.map((g,x)=>t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{className:"opacity-90",children:g.day}),t.jsx("span",{className:"font-semibold",children:g.hours})]},x))})]}),t.jsxs("div",{className:"border-t border-white border-opacity-20 pt-6",children:[t.jsx("p",{className:"font-semibold mb-4",children:"Follow Us"}),t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Vi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Gi,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx($i,{className:"h-5 w-5"})}),t.jsx("a",{href:"#",className:"w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors",children:t.jsx(Yi,{className:"h-5 w-5"})})]})]})]})]})}),t.jsx("div",{className:"lg:col-span-3",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-10 shadow-lg",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("h2",{className:"text-2xl lg:text-3xl font-bold text-gray-900 mb-4",children:"Request Your Free Consultation"}),t.jsx("p",{className:"text-gray-600",children:"Fill out the form below and we'll get back to you within 24 hours with a customized solution for your business needs."})]}),t.jsxs("form",{onSubmit:l,className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(xs,{className:"inline h-4 w-4 mr-1"}),"Full Name *"]}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"John Doe"})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(X,{className:"inline h-4 w-4 mr-1"}),"Email Address *"]}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"john@company.com"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"phone",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(ie,{className:"inline h-4 w-4 mr-1"}),"Phone Number"]}),t.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"+233 24 123 4567"})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"company",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(Gd,{className:"inline h-4 w-4 mr-1"}),"Company Name"]}),t.jsx("input",{type:"text",id:"company",name:"company",value:e.company,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"Your Company"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"service",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx($d,{className:"inline h-4 w-4 mr-1"}),"Service of Interest *"]}),t.jsxs("select",{id:"service",name:"service",required:!0,value:e.service,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select a service"}),t.jsx("option",{value:"custom-software",children:"Custom Software Development"}),t.jsx("option",{value:"ai-agents",children:"AI Agent Development"}),t.jsx("option",{value:"network-infrastructure",children:"Network Infrastructure"}),t.jsx("option",{value:"cabling-hardware",children:"Cabling & Hardware Installation"}),t.jsx("option",{value:"it-consultation",children:"IT Consultation"}),t.jsx("option",{value:"awoyaa",children:"Awoyaa ERP"}),t.jsx("option",{value:"edziban",children:"Edziban Restaurant ERP"}),t.jsx("option",{value:"erkamka",children:"Erkamka Email Marketing"}),t.jsx("option",{value:"multiple",children:"Multiple Services"}),t.jsx("option",{value:"other",children:"Other"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"budget",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Budget Range"}),t.jsxs("select",{id:"budget",name:"budget",value:e.budget,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select budget range"}),t.jsx("option",{value:"under-5k",children:"Under $5,000"}),t.jsx("option",{value:"5k-15k",children:"$5,000 - $15,000"}),t.jsx("option",{value:"15k-50k",children:"$15,000 - $50,000"}),t.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),t.jsx("option",{value:"over-100k",children:"Over $100,000"}),t.jsx("option",{value:"discuss",children:"Prefer to discuss"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"timeline",className:"block text-sm font-semibold text-gray-700 mb-2",children:"Project Timeline"}),t.jsxs("select",{id:"timeline",name:"timeline",value:e.timeline,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select timeline"}),t.jsx("option",{value:"asap",children:"ASAP"}),t.jsx("option",{value:"1-3-months",children:"1-3 months"}),t.jsx("option",{value:"3-6-months",children:"3-6 months"}),t.jsx("option",{value:"6-12-months",children:"6-12 months"}),t.jsx("option",{value:"over-12-months",children:"Over 12 months"}),t.jsx("option",{value:"flexible",children:"Flexible"})]})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"message",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(Kd,{className:"inline h-4 w-4 mr-1"}),"Project Details *"]}),t.jsx("textarea",{id:"message",name:"message",required:!0,rows:5,value:e.message,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical",placeholder:"Tell us about your project, challenges, goals, and any specific requirements..."})]}),r==="success"&&t.jsxs("div",{className:"p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center",children:[t.jsx(v,{className:"h-5 w-5 mr-2"}),"Thank you for your inquiry! We'll get back to you within 24 hours with a customized proposal."]}),r==="error"&&t.jsx("div",{className:"p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg",children:"There was an error submitting your form. Please try again or contact us directly."}),t.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",children:s?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Submitting..."]}):t.jsxs(t.Fragment,{children:["Send Message",t.jsx(vo,{className:"ml-2 h-5 w-5"})]})}),t.jsx("p",{className:"text-sm text-gray-600 text-center",children:"We respect your privacy and will never share your information with third parties. By submitting this form, you agree to our privacy policy."})]})]})})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Frequently Asked Questions"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Quick answers to common questions about our services and processes."})]}),t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"How quickly can you start my project?"}),t.jsx("p",{className:"text-gray-600",children:"Most projects can begin within 1-2 weeks after contract signing and initial requirements gathering."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Do you provide ongoing support?"}),t.jsx("p",{className:"text-gray-600",children:"Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Can you work with our existing systems?"}),t.jsx("p",{className:"text-gray-600",children:"Absolutely. We specialize in integrating new solutions with existing infrastructure and legacy systems."})]})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"What's included in a free consultation?"}),t.jsx("p",{className:"text-gray-600",children:"A comprehensive assessment of your needs, technology recommendations, project timeline, and detailed cost estimate."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"Do you work with international clients?"}),t.jsx("p",{className:"text-gray-600",children:"Yes, we serve clients across Africa and internationally, with remote collaboration tools and local support networks."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"font-bold text-gray-900 mb-3",children:"What payment options do you accept?"}),t.jsx("p",{className:"text-gray-600",children:"We accept various payment methods including bank transfers, mobile money, and international payment platforms."})]})]})]})})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Transform Your Business?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Join hundreds of satisfied clients who have accelerated their growth with our innovative technology solutions."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#",className:"inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:[t.jsx(ie,{className:"mr-2 h-5 w-5"}),"Call +233 55 412 9334"]}),t.jsxs("a",{href:"#",className:"inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors",children:[t.jsx(wa,{className:"mr-2 h-5 w-5"}),"WhatsApp Us"]})]})]})})]})},sh=()=>{const[e,n]=W.useState({name:"",email:"",phone:"",location:"",roleType:"",experience:"",motivation:"",availability:""}),[s,i]=W.useState(!1),[r,a]=W.useState("idle"),o=h=>{n({...e,[h.target.name]:h.target.value})},l=async h=>{h.preventDefault(),i(!0),setTimeout(()=>{a("success"),i(!1),n({name:"",email:"",phone:"",location:"",roleType:"",experience:"",motivation:"",availability:""})},2e3)},c=[{title:"Binapulse Agents",type:"Individual",icon:xs,description:"Join our network of individual representatives promoting innovative technology solutions across Ghana.",color:"from-blue-500 to-cyan-500",benefits:["Flexible working hours","Commission-based earnings","Comprehensive training provided","Work from anywhere in Ghana","Direct support from head office"]},{title:"Binapulse Partners",type:"Company",icon:Gd,description:"Partner with us as a company to expand our reach and provide technology solutions in your region.",color:"from-teal-500 to-green-500",benefits:["Higher commission rates","Bulk setup opportunities","Priority support access","Co-marketing opportunities","Exclusive territory rights"]}],d=[{icon:Ue,title:"Promote Software Solutions",description:"Introduce businesses to our ERP systems, AI agents, and custom software solutions"},{icon:oe,title:"Business Setup & Onboarding",description:"Guide new clients through system setup and initial configuration processes"},{icon:jn,title:"Data & Product Entry",description:"Assist clients with initial data migration and product catalog setup"},{icon:Dp,title:"Customer Support",description:"Provide both remote and in-person support to ensure client satisfaction"},{icon:v,title:"System Compliance Audits",description:"Conduct regular checks to ensure systems are running optimally"},{icon:Z,title:"Continuous Learning",description:"Stay updated with new features and industry best practices"}],g=["Basic computer knowledge and digital literacy","High integrity and self-motivation","Quick learning ability and adaptability","Excellent communication skills in local languages","Ability to work independently with minimal supervision","Reliable internet connection and smartphone/computer access"],x=["Greater Accra Region","Ashanti Region","Western Region","Central Region","Eastern Region","Volta Region","Northern Region","Upper East Region","Upper West Region","Brong-Ahafo Region"];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(ct,{className:"w-4 h-4 mr-2"}),"Join Our Growing Network Across Ghana"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Join Us in Powering",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Business Growth"})," Across Ghana"]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",children:"Become part of our mission to transform businesses across Ghana with innovative technology solutions. Whether you're an individual or a company, we have opportunities that fit your goals."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"500+"}),t.jsx("div",{className:"text-gray-600",children:"Businesses Served"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-teal-600 mb-2",children:"50+"}),t.jsx("div",{className:"text-gray-600",children:"Active Partners"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:"10"}),t.jsx("div",{className:"text-gray-600",children:"Regions Covered"})]})]})]})})]}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Available Opportunities"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Choose the role that best fits your goals and capabilities. Both options offer excellent earning potential and growth opportunities."})]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",children:c.map((h,b)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx("div",{className:`inline-flex items-center bg-gradient-to-r ${h.color} text-white px-4 py-2 rounded-full text-sm font-semibold`,children:h.type}),t.jsx("div",{className:"flex items-center text-yellow-500",children:[...Array(5)].map((w,j)=>t.jsx(ct,{className:"h-4 w-4 fill-current"},j))})]}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${h.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(h.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:h.title}),t.jsxs("p",{className:"text-lg text-gray-600",children:["For ",h.type,"s"]})]})]}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:h.description}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-4",children:"Key Benefits:"}),t.jsx("ul",{className:"space-y-2",children:h.benefits.map((w,j)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-green-600"}),w]},j))})]}),t.jsxs("button",{onClick:()=>{var w;n({...e,roleType:h.title}),(w=document.getElementById("application-form"))==null||w.scrollIntoView({behavior:"smooth"})},className:`w-full bg-gradient-to-r ${h.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`,children:["Apply for ",h.title]}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},b))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Your Responsibilities"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"As a Binapulse representative, you'll play a crucial role in helping businesses across Ghana embrace digital transformation."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map((h,b)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(h.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors",children:h.title}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:h.description})]},b))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs("div",{className:"bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Ep,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold mb-6",children:"Compensation Structure"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 mr-3 mt-1 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Commission-Based Earnings"}),t.jsx("p",{className:"opacity-90 text-sm",children:"Earn competitive commissions on every successful setup"})]})]}),t.jsxs("div",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 mr-3 mt-1 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Setup Fees"}),t.jsx("p",{className:"opacity-90 text-sm",children:"Immediate payment for each business onboarding"})]})]}),t.jsxs("div",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 mr-3 mt-1 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Recurring Monthly Commissions"}),t.jsx("p",{className:"opacity-90 text-sm",children:"Ongoing earnings from active client subscriptions"})]})]}),t.jsxs("div",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 mr-3 mt-1 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Performance Bonuses"}),t.jsx("p",{className:"opacity-90 text-sm",children:"Additional rewards for exceeding targets"})]})]})]}),t.jsxs("div",{className:"mt-6 p-4 bg-white bg-opacity-20 rounded-lg",children:[t.jsx("p",{className:"font-semibold text-center",children:"Potential Monthly Earnings"}),t.jsx("p",{className:"text-2xl font-bold text-center mt-2",children:"GHS 0 - 15,000+"}),t.jsx("p",{className:"text-sm opacity-90 text-center",children:"Based on performance and client base"})]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"}),t.jsxs("div",{className:"relative z-10",children:[t.jsx("div",{className:"w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(lt,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-2xl lg:text-3xl font-bold mb-6",children:"Requirements"}),t.jsx("div",{className:"space-y-4",children:g.map((h,b)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 mr-3 mt-1 flex-shrink-0"}),t.jsx("p",{className:"opacity-90",children:h})]},b))}),t.jsxs("div",{className:"mt-8 p-4 bg-white bg-opacity-20 rounded-lg",children:[t.jsx("p",{className:"font-semibold mb-2",children:"Training Provided"}),t.jsx("p",{className:"text-sm opacity-90",children:"Comprehensive training on all our products, sales techniques, and customer support processes. No prior experience required!"})]})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Available Locations"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We're expanding across all regions of Ghana. Find opportunities in your area and help bring technology solutions to local businesses."})]}),t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-lg",children:[t.jsx("div",{className:"flex items-center justify-center mb-8",children:t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center",children:t.jsx(kn,{className:"h-8 w-8 text-white"})})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:x.map((h,b)=>t.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors",children:[t.jsx(xe,{className:"h-5 w-5 text-blue-600 mx-auto mb-2"}),t.jsx("p",{className:"font-semibold text-gray-900",children:h})]},b))}),t.jsxs("div",{className:"text-center mt-8",children:[t.jsx("p",{className:"text-gray-600 mb-4",children:"Don't see your location? We're always expanding!"}),t.jsx("p",{className:"text-sm text-gray-500",children:"Contact us to discuss opportunities in your area."})]})]})]})}),t.jsx("section",{id:"application-form",className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Apply Now"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Ready to join our team? Fill out the application form below and we'll get back to you within 48 hours."})]}),t.jsx("div",{className:"bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100",children:t.jsxs("form",{onSubmit:l,className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"name",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(xs,{className:"inline h-4 w-4 mr-1"}),"Full Name *"]}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"John Doe"})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(X,{className:"inline h-4 w-4 mr-1"}),"Email Address *"]}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"john@example.com"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"phone",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(ie,{className:"inline h-4 w-4 mr-1"}),"Phone Number *"]}),t.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,value:e.phone,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"+233 24 123 4567"})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"location",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(kn,{className:"inline h-4 w-4 mr-1"}),"Location/Region *"]}),t.jsxs("select",{id:"location",name:"location",required:!0,value:e.location,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select your region"}),x.map((h,b)=>t.jsx("option",{value:h,children:h},b))]})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"roleType",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx($d,{className:"inline h-4 w-4 mr-1"}),"Role Interest *"]}),t.jsxs("select",{id:"roleType",name:"roleType",required:!0,value:e.roleType,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select role type"}),t.jsx("option",{value:"Binapulse Agents",children:"Binapulse Agents (Individual)"}),t.jsx("option",{value:"Binapulse Partners",children:"Binapulse Partners (Company)"})]})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"experience",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(lt,{className:"inline h-4 w-4 mr-1"}),"Relevant Experience"]}),t.jsxs("select",{id:"experience",name:"experience",value:e.experience,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select experience level"}),t.jsx("option",{value:"no-experience",children:"No prior experience"}),t.jsx("option",{value:"some-sales",children:"Some sales experience"}),t.jsx("option",{value:"tech-background",children:"Technology background"}),t.jsx("option",{value:"business-owner",children:"Business owner/manager"}),t.jsx("option",{value:"extensive",children:"Extensive relevant experience"})]})]})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"availability",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(Ze,{className:"inline h-4 w-4 mr-1"}),"Availability"]}),t.jsxs("select",{id:"availability",name:"availability",value:e.availability,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",children:[t.jsx("option",{value:"",children:"Select availability"}),t.jsx("option",{value:"full-time",children:"Full-time (40+ hours/week)"}),t.jsx("option",{value:"part-time",children:"Part-time (20-40 hours/week)"}),t.jsx("option",{value:"flexible",children:"Flexible hours"}),t.jsx("option",{value:"weekends",children:"Weekends only"}),t.jsx("option",{value:"evenings",children:"Evenings only"})]})]}),t.jsxs("div",{children:[t.jsxs("label",{htmlFor:"motivation",className:"block text-sm font-semibold text-gray-700 mb-2",children:[t.jsx(jn,{className:"inline h-4 w-4 mr-1"}),"Why do you want to join Binapulse? *"]}),t.jsx("textarea",{id:"motivation",name:"motivation",required:!0,rows:4,value:e.motivation,onChange:o,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical",placeholder:"Tell us about your motivation, goals, and how you plan to contribute to our mission..."})]}),r==="success"&&t.jsxs("div",{className:"p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center",children:[t.jsx(v,{className:"h-5 w-5 mr-2"}),"Thank you for your application! We'll review it and get back to you within 48 hours."]}),r==="error"&&t.jsx("div",{className:"p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg",children:"There was an error submitting your application. Please try again or contact us directly."}),t.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",children:s?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Submitting Application..."]}):t.jsxs(t.Fragment,{children:["Submit Application",t.jsx(vo,{className:"ml-2 h-5 w-5"})]})}),t.jsx("p",{className:"text-sm text-gray-600 text-center",children:"By submitting this application, you agree to our terms and conditions. We'll contact you within 48 hours to discuss next steps."})]})})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Have Questions?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Our careers team is here to help you understand the opportunities and guide you through the application process."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"mailto:careers@binapulse.com",className:"inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:[t.jsx(X,{className:"mr-2 h-5 w-5"}),"careers@binapulse.com"]}),t.jsxs("a",{href:"#",className:"inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors",children:[t.jsx(ie,{className:"mr-2 h-5 w-5"}),"WhatsApp Us"]})]})]})})]})},ih=()=>{const e=[{step:1,icon:Ue,title:"Discovery",description:"Understanding Your Business Challenges",details:"We dive deep into your business processes, pain points, and goals to create a comprehensive understanding of your needs.",color:"from-blue-500 to-cyan-500"},{step:2,icon:Nn,title:"Design",description:"Crafting Intuitive User Interfaces",details:"Our design team creates user-friendly interfaces that prioritize usability and align with your brand identity.",color:"from-cyan-500 to-teal-500"},{step:3,icon:qe,title:"Development",description:"Building with Modern Frameworks",details:"Using cutting-edge technologies and best practices to build scalable, secure, and high-performance applications.",color:"from-teal-500 to-green-500"},{step:4,icon:Qi,title:"Testing",description:"Rigorous Quality Assurance",details:"Comprehensive testing across all devices and scenarios to ensure flawless functionality and user experience.",color:"from-green-500 to-emerald-500"},{step:5,icon:Ns,title:"Deployment",description:"Secure Launch Process",details:"Smooth deployment with minimal downtime, including data migration and staff training for seamless transition.",color:"from-emerald-500 to-blue-500"},{step:6,icon:Tn,title:"Support & Maintenance",description:"Ongoing Partnership",details:"Continuous support, updates, and enhancements to ensure your software evolves with your business needs.",color:"from-blue-500 to-purple-500"}],n=[{icon:Na,title:"Retail & E-commerce",description:"Point-of-sale systems, inventory management, and online store solutions",features:["POS Systems","Inventory Control","Customer Management","Sales Analytics"]},{icon:Up,title:"Beauty & Wellness",description:"Appointment booking, client management, and service tracking systems",features:["Booking Systems","Client Profiles","Service Tracking","Payment Processing"]},{icon:Op,title:"Hospitality & Food",description:"Restaurant management, hotel booking, and guest experience platforms",features:["Reservation Systems","Menu Management","Guest Services","Staff Coordination"]},{icon:X,title:"Marketing & Sales",description:"CRM systems, campaign management, and lead tracking solutions",features:["Lead Management","Campaign Tracking","Customer Analytics","Automation Tools"]},{icon:Hp,title:"Logistics & Delivery",description:"Fleet management, route optimization, and delivery tracking systems",features:["Fleet Tracking","Route Planning","Delivery Management","Real-time Updates"]},{icon:ie,title:"Telecommunications & IT",description:"Network management, billing systems, and customer service platforms",features:["Network Monitoring","Billing Systems","Service Management","Customer Support"]}],s=[{name:"React & Next.js",category:"Frontend"},{name:"Node.js & Python",category:"Backend"},{name:"PostgreSQL & MongoDB",category:"Database"},{name:"AWS & Azure",category:"Cloud"},{name:"Docker & Kubernetes",category:"DevOps"},{name:"React Native & Flutter",category:"Mobile"}],i=[{icon:st,title:"Built Around Your Workflow",description:"Custom solutions designed to fit your exact business processes, not the other way around."},{icon:Z,title:"Scalable as You Grow",description:"Architecture that grows with your business, handling increased users and data seamlessly."},{icon:te,title:"Fast, Secure, and User-Friendly",description:"Optimized performance with enterprise-grade security and intuitive user interfaces."},{icon:oe,title:"Africa-Focused, Globally Applicable",description:"Solutions designed for African businesses but built to international standards."}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(Qd,{className:"w-4 h-4 mr-2"}),"Custom Software Development"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Building Smart,",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Scalable Solutions"})," That Fit Your Business"]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Transform your business operations with custom software solutions designed specifically for your workflow. From concept to deployment, we build applications that grow with your business and deliver measurable results."}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:i.map((r,a)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",children:t.jsx(r.icon,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:r.title}),t.jsx("p",{className:"text-sm text-gray-600",children:r.description})]})]},a))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Get a Free Quote for Your Project",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#process",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:"View Our Process"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Software development team working on custom solutions",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx(v,{className:"w-5 h-5 text-green-600"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"Custom Built"}),t.jsx("div",{className:"text-xs text-gray-500",children:"For Your Business"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"100%"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Scalable Solutions"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"})]})]})})]}),t.jsx("section",{id:"process",className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our Development Process"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"A proven 6-step approach that ensures your custom software solution is delivered on time, within budget, and exceeds your expectations."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((r,a)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{className:`inline-flex items-center bg-gradient-to-r ${r.color} text-white px-4 py-2 rounded-full text-sm font-bold`,children:["Step ",r.step]})}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(r.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:r.title}),t.jsx("p",{className:"text-sm text-gray-600",children:r.description})]})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:r.details}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},a))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Technologies We Use"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We leverage the latest technologies and frameworks to build robust, scalable, and future-proof software solutions."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:s.map((r,a)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(js,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:r.name}),t.jsx("p",{className:"text-sm text-gray-600",children:r.category})]},a))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Industries We Serve"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"From retail to telecommunications, we've built custom software solutions across diverse industries, understanding unique challenges and requirements."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((r,a)=>t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(r.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors",children:r.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:r.description}),t.jsx("div",{className:"space-y-2",children:r.features.map((o,l)=>t.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 flex-shrink-0"}),o]},l))})]},a))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-6xl mx-auto",children:t.jsx("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-2xl",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(ct,{className:"w-4 h-4 mr-2"}),"Success Story"]}),t.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-6",children:"Awoyaa ERP: Transforming Retail Operations"}),t.jsx("p",{className:"text-lg text-gray-600 mb-6 leading-relaxed",children:"We developed Awoyaa, a comprehensive ERP solution specifically designed for general shops and retail businesses across Africa. The system handles everything from inventory management to multi-location operations."}),t.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"500+"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Active Businesses"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:"95%"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Efficiency Improvement"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:"12"}),t.jsx("div",{className:"text-sm text-gray-600",children:"Countries Served"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-teal-600 mb-2",children:"24/7"}),t.jsx("div",{className:"text-sm text-gray-600",children:"System Availability"})]})]}),t.jsxs("div",{className:"space-y-3 mb-8",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3"}),t.jsx("span",{className:"text-gray-700",children:"Multi-business & multi-location support"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3"}),t.jsx("span",{className:"text-gray-700",children:"Advanced inventory management with barcode support"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3"}),t.jsx("span",{className:"text-gray-700",children:"Integrated POS, accounting, and CRM modules"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3"}),t.jsx("span",{className:"text-gray-700",children:"Offline functionality and multi-currency support"})]})]}),t.jsxs("a",{href:"#solutions",className:"inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105",children:["Read Full Story",t.jsx(O,{className:"ml-2 h-5 w-5"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Awoyaa ERP dashboard showing retail analytics",className:"w-full h-[400px] object-cover rounded-2xl shadow-lg"}),t.jsx("div",{className:"absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx(Na,{className:"h-5 w-5 text-blue-600 mr-2"}),t.jsx("span",{className:"font-semibold text-gray-900",children:"Awoyaa ERP"})]})})]})]})})})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Build Your Custom Solution?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss your project requirements and create a software solution that transforms your business operations and drives growth."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Get a Free Quote for Your Project",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#process",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors",children:"View Our Process"})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"text-white opacity-90 mb-4",children:"Have questions? Our development team is here to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[t.jsx("a",{href:"mailto:info@binapulse.com",className:"text-white hover:text-gray-200 transition-colors",children:"info@binapulse.com"}),t.jsx("span",{className:"hidden sm:block text-white opacity-50",children:"|"}),t.jsx("a",{href:"tel:+233241234567",className:"text-white hover:text-gray-200 transition-colors",children:"+233 24 123 4567"})]})]})]})})]})},rh=()=>{const e=[{step:1,icon:Ue,title:"Discovery & Analysis",description:"Understanding Your Automation Needs",details:"We analyze your current workflows, identify repetitive tasks, and determine the best opportunities for AI automation to maximize efficiency.",color:"from-blue-500 to-cyan-500"},{step:2,icon:Nn,title:"AI Strategy Design",description:"Crafting Intelligent Solutions",details:"Our AI experts design custom agent architectures that integrate seamlessly with your existing systems and business processes.",color:"from-cyan-500 to-teal-500"},{step:3,icon:qe,title:"Agent Development",description:"Building Smart Automation",details:"Using advanced AI frameworks and machine learning models to create intelligent agents that learn and adapt to your business needs.",color:"from-teal-500 to-green-500"},{step:4,icon:Qi,title:"Training & Testing",description:"Optimizing Performance",details:"Comprehensive training with your data and rigorous testing to ensure agents perform accurately and reliably in real-world scenarios.",color:"from-green-500 to-emerald-500"},{step:5,icon:Ns,title:"Deployment & Integration",description:"Seamless Implementation",details:"Smooth deployment with minimal disruption, including integration with existing systems and comprehensive staff training.",color:"from-emerald-500 to-blue-500"},{step:6,icon:Tn,title:"Monitoring & Optimization",description:"Continuous Improvement",details:"Ongoing monitoring, performance optimization, and updates to ensure your AI agents continue to deliver maximum value.",color:"from-blue-500 to-purple-500"}],n=[{icon:Kd,title:"Customer Service Automation",description:"24/7 intelligent customer support with natural language processing",features:["Multi-language Support","Sentiment Analysis","Escalation Management","Knowledge Base Integration"],benefits:"Reduce response time by 90%, handle 80% of inquiries automatically"},{icon:Sr,title:"IT Workflow Automation",description:"Streamline IT operations with intelligent process automation",features:["Ticket Routing","System Monitoring","Automated Diagnostics","Preventive Maintenance"],benefits:"Cut IT response time by 70%, reduce manual tasks by 85%"},{icon:ba,title:"Data Processing & Analysis",description:"Intelligent data extraction, processing, and reporting automation",features:["Document Processing","Data Validation","Report Generation","Trend Analysis"],benefits:"Process data 10x faster, eliminate manual data entry errors"},{icon:oe,title:"Employee Onboarding",description:"Automated onboarding processes with personalized guidance",features:["Document Collection","Training Scheduling","Progress Tracking","Compliance Checks"],benefits:"Reduce onboarding time by 60%, improve new hire satisfaction"},{icon:Z,title:"Sales & Lead Management",description:"Intelligent lead qualification and sales process automation",features:["Lead Scoring","Follow-up Automation","Pipeline Management","Performance Analytics"],benefits:"Increase conversion rates by 40%, save 20 hours per week"},{icon:te,title:"Security & Compliance",description:"Automated security monitoring and compliance management",features:["Threat Detection","Compliance Monitoring","Risk Assessment","Incident Response"],benefits:"Detect threats 24/7, ensure 100% compliance monitoring"}],s=[{name:"OpenAI GPT",category:"Language Models",icon:Sr},{name:"TensorFlow",category:"Machine Learning",icon:Rp},{name:"Python & FastAPI",category:"Backend",icon:qe},{name:"React & TypeScript",category:"Frontend",icon:js},{name:"Vector Databases",category:"Data Storage",icon:ba},{name:"Cloud Platforms",category:"Infrastructure",icon:xe}],i=[{icon:Ze,title:"24/7 Availability",description:"AI agents work around the clock, providing consistent service without breaks or downtime."},{icon:Z,title:"Cost Reduction",description:"Reduce operational costs by up to 60% through intelligent automation of repetitive tasks."},{icon:st,title:"Instant Response",description:"Provide immediate responses to customer inquiries and internal requests, improving satisfaction."},{icon:te,title:"Consistent Quality",description:"Eliminate human error and ensure consistent, high-quality outputs every time."}],r=["Financial Services","Healthcare","E-commerce","Manufacturing","Education","Real Estate","Telecommunications","Government"];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(ni,{className:"w-4 h-4 mr-2"}),"AI Agent Development"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Automate Your Business,",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Amplify Your Success"})," with AI Agents"]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Transform your operations with intelligent AI agents that handle repetitive tasks, provide 24/7 customer support, and streamline workflows. Built specifically for your business needs and integrated seamlessly with your existing systems."}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:i.map((a,o)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",children:t.jsx(a.icon,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]},o))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Request a Demo of Our AI Capabilities",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#use-cases",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:"Explore Use Cases"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"AI and automation technology in modern business environment",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx(ni,{className:"w-5 h-5 text-green-600"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"AI Agent Active"}),t.jsx("div",{className:"text-xs text-gray-500",children:"24/7 Automation"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-purple-600",children:"90%"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Task Automation"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl opacity-20 -z-10"})]})]})})]}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"What are AI Agents?"}),t.jsx("p",{className:"text-xl text-gray-600 leading-relaxed mb-8",children:"AI Agents are intelligent software tools that can understand, learn, and act autonomously to complete tasks on behalf of your business. They combine the power of artificial intelligence with deep integration into your existing systems to provide 24/7 automated assistance."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6",children:[t.jsx(Sr,{className:"h-12 w-12 text-blue-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Intelligent"}),t.jsx("p",{className:"text-gray-600",children:"Learn from data and improve performance over time"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6",children:[t.jsx(st,{className:"h-12 w-12 text-purple-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Autonomous"}),t.jsx("p",{className:"text-gray-600",children:"Work independently without constant human supervision"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6",children:[t.jsx(qe,{className:"h-12 w-12 text-teal-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Integrated"}),t.jsx("p",{className:"text-gray-600",children:"Seamlessly connect with your existing business systems"})]})]})]})})}),t.jsx("section",{id:"use-cases",className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"AI Agent Use Cases"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Discover how AI agents can transform different aspects of your business operations, from customer service to data processing."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors",children:a.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:a.description}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Key Features:"}),t.jsx("ul",{className:"space-y-2",children:a.features.map((l,c)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),l]},c))})]}),t.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4",children:[t.jsx("p",{className:"text-sm font-semibold text-purple-800 mb-1",children:"Expected Results:"}),t.jsx("p",{className:"text-sm text-purple-700",children:a.benefits})]}),t.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our AI Development Process"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"A proven 6-step approach that ensures your AI agents are perfectly tailored to your business needs and deliver measurable results."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((a,o)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{className:`inline-flex items-center bg-gradient-to-r ${a.color} text-white px-4 py-2 rounded-full text-sm font-bold`,children:["Step ",a.step]})}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${a.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:a.details}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"AI Technologies We Use"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We leverage cutting-edge AI technologies and frameworks to build intelligent, scalable, and reliable AI agents."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:s.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:a.name}),t.jsx("p",{className:"text-sm text-gray-600",children:a.category})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Industries We Serve"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our AI agents are successfully deployed across diverse industries, each with customized solutions for specific sector needs."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:r.map((a,o)=>t.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:-translate-y-1 group",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(xe,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-semibold text-gray-900",children:a})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Our AI Agent Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive AI agent development services tailored to your specific business requirements and objectives."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(ni,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Custom AI Agent Development"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Build intelligent agents tailored to your specific business processes and requirements."}),t.jsxs("ul",{className:"space-y-2 mb-6",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Custom workflow automation"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Natural language processing"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Machine learning integration"]})]})]}),t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(qe,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Integration with Existing Systems"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Seamlessly integrate AI agents with your current software and business systems."}),t.jsxs("ul",{className:"space-y-2 mb-6",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"API integration and development"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Database connectivity"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Legacy system compatibility"]})]})]}),t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(st,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"AI-Powered Workflow Automation"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Automate complex business workflows with intelligent decision-making capabilities."}),t.jsxs("ul",{className:"space-y-2 mb-6",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Process optimization"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Intelligent routing"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Performance analytics"]})]})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Transform Your Business with AI?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss how AI agents can automate your processes, reduce costs, and improve efficiency. Get a personalized demo of our AI capabilities."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Request a Demo of Our AI Capabilities",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#use-cases",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors",children:"Explore Use Cases"})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"text-white opacity-90 mb-4",children:"Have questions about AI implementation? Our AI specialists are here to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[t.jsxs("a",{href:"mailto:ai@binapulse.com",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(X,{className:"h-4 w-4 mr-2"}),"ai@binapulse.com"]}),t.jsx("span",{className:"hidden sm:block text-white opacity-50",children:"|"}),t.jsxs("a",{href:"tel:+233241234567",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(ie,{className:"h-4 w-4 mr-2"}),"+233 24 123 4567"]})]})]})]})})]})},ah=()=>{const e=[{step:1,icon:Ue,title:"Consultation & Discovery",description:"Understanding Your Network Requirements",details:"We conduct a thorough assessment of your current infrastructure, business needs, and growth plans to design the optimal network solution.",color:"from-blue-500 to-cyan-500"},{step:2,icon:Nn,title:"Planning & Design",description:"Architecting Your Network Solution",details:"Our network engineers create detailed network diagrams, select appropriate hardware, and plan the implementation strategy.",color:"from-cyan-500 to-teal-500"},{step:3,icon:qe,title:"Implementation & Configuration",description:"Building Your Network Infrastructure",details:"Professional installation and configuration of all network components, ensuring optimal performance and security.",color:"from-teal-500 to-green-500"},{step:4,icon:Qi,title:"Testing & Optimization",description:"Ensuring Peak Performance",details:"Comprehensive testing of all network components, performance optimization, and security validation before go-live.",color:"from-green-500 to-emerald-500"},{step:5,icon:Ns,title:"Deployment & Go-Live",description:"Seamless Network Activation",details:"Smooth transition to the new network with minimal downtime and comprehensive staff training on new systems.",color:"from-emerald-500 to-blue-500"},{step:6,icon:Tn,title:"Support & Documentation",description:"Ongoing Network Management",details:"Complete network documentation, monitoring setup, and ongoing support to ensure optimal network performance.",color:"from-blue-500 to-purple-500"}],n=[{icon:si,title:"Network Design and Architecture",description:"Custom network topologies designed for your specific business requirements and growth plans",features:["Network Topology Design","Scalability Planning","Performance Optimization","Redundancy Implementation"],benefits:"Optimized performance, future-proof design, reduced downtime"},{icon:Sn,title:"Router and Switch Configuration",description:"Professional setup and configuration of network routing and switching equipment",features:["VLAN Configuration","Routing Protocols","Quality of Service (QoS)","Load Balancing"],benefits:"Improved network efficiency, better traffic management, enhanced performance"},{icon:te,title:"Firewall and Security Implementation",description:"Comprehensive network security solutions to protect your business data and systems",features:["Firewall Configuration","Intrusion Detection","VPN Setup","Access Control"],benefits:"Enhanced security, controlled access, protected data transmission"},{icon:Zd,title:"Wireless Network Solutions",description:"Enterprise-grade wireless networks with seamless coverage and robust security",features:["Wi-Fi 6 Implementation","Coverage Optimization","Guest Networks","Mobile Device Management"],benefits:"Seamless connectivity, improved mobility, secure wireless access"},{icon:ie,title:"Corporate Voice Service Setup",description:"Modern VoIP and unified communications solutions for efficient business communication",features:["VoIP Implementation","PBX Systems","Video Conferencing","Mobile Integration"],benefits:"Reduced communication costs, improved collaboration, unified messaging"},{icon:js,title:"Network Documentation and Monitoring",description:"Comprehensive network documentation and 24/7 monitoring for optimal performance",features:["Network Mapping","Performance Monitoring","Alert Systems","Maintenance Scheduling"],benefits:"Proactive issue resolution, improved uptime, simplified troubleshooting"}],s=[{icon:st,title:"High-Performance Networks",description:"Optimized network architectures that deliver maximum speed and reliability for your business operations."},{icon:te,title:"Enterprise-Grade Security",description:"Multi-layered security implementations that protect your data and systems from cyber threats."},{icon:Z,title:"Scalable Infrastructure",description:"Future-proof network designs that can easily accommodate business growth and new technologies."},{icon:oe,title:"24/7 Support & Monitoring",description:"Round-the-clock network monitoring and support to ensure optimal performance and quick issue resolution."}],i=[{name:"Financial Services",icon:Z},{name:"Healthcare",icon:te},{name:"Education",icon:oe},{name:"Manufacturing",icon:qe},{name:"Retail & E-commerce",icon:xe},{name:"Government",icon:lt},{name:"Hospitality",icon:ct},{name:"Professional Services",icon:Nn}],r=[{name:"Cisco Systems",category:"Enterprise Hardware"},{name:"Ubiquiti Networks",category:"Wireless Solutions"},{name:"Fortinet",category:"Security Appliances"},{name:"VMware",category:"Virtualization"},{name:"Microsoft Azure",category:"Cloud Integration"},{name:"Aruba Networks",category:"Wireless & Switching"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(si,{className:"w-4 h-4 mr-2"}),"Network Infrastructure"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Robust Infrastructure.",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Seamless Connectivity."})," Reliable Support."]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Build a network infrastructure that powers your business growth. From design to deployment, we create high-performance, secure, and scalable network solutions that keep your operations running smoothly 24/7."}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:s.map((a,o)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",children:t.jsx(a.icon,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]},o))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Book a Free Network Assessment",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:"View Our Services"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Modern network infrastructure and server room",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx(v,{className:"w-5 h-5 text-green-600"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"99.9% Uptime"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Guaranteed"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"24/7"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Monitoring"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"})]})]})})]}),t.jsx("section",{id:"services",className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Network Infrastructure Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive network solutions designed to meet your business needs, from initial design to ongoing support and maintenance."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors",children:a.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:a.description}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Key Features:"}),t.jsx("ul",{className:"space-y-2",children:a.features.map((l,c)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),l]},c))})]}),t.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4",children:[t.jsx("p",{className:"text-sm font-semibold text-blue-800 mb-1",children:"Benefits:"}),t.jsx("p",{className:"text-sm text-blue-700",children:a.benefits})]}),t.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our 5-Step Implementation Approach"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"A proven methodology that ensures your network infrastructure is delivered on time, within budget, and exceeds performance expectations."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((a,o)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{className:`inline-flex items-center bg-gradient-to-r ${a.color} text-white px-4 py-2 rounded-full text-sm font-bold`,children:["Step ",a.step]})}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${a.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:a.details}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Technologies We Use"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We partner with leading technology vendors to deliver enterprise-grade network solutions that are reliable, secure, and scalable."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:r.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(si,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:a.name}),t.jsx("p",{className:"text-sm text-gray-600",children:a.category})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Industries We Serve"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our network infrastructure solutions are successfully deployed across diverse industries, each with customized configurations for specific sector requirements."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:i.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-semibold text-gray-900",children:a.name})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Why Choose Our Network Infrastructure Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Experience the difference of working with network professionals who understand your business needs and deliver solutions that drive growth."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(lt,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Certified Expertise"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Our team holds industry certifications from leading vendors and brings years of enterprise networking experience."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Cisco certified professionals"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"10+ years experience"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Continuous training"]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Ze,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"24/7 Support"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Round-the-clock monitoring and support ensure your network stays operational when you need it most."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Proactive monitoring"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Rapid response times"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Remote troubleshooting"]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Z,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Scalable Solutions"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Future-proof network designs that grow with your business and adapt to new technologies."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Modular architecture"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Easy expansion"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Technology upgrades"]})]})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Build Your Network Infrastructure?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss your network requirements and design a solution that supports your business growth and ensures reliable connectivity."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Book a Free Network Assessment",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors",children:"View Our Services"})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"text-white opacity-90 mb-4",children:"Have questions about network infrastructure? Our network specialists are here to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[t.jsxs("a",{href:"mailto:network@binapulse.com",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(X,{className:"h-4 w-4 mr-2"}),"network@binapulse.com"]}),t.jsx("span",{className:"hidden sm:block text-white opacity-50",children:"|"}),t.jsxs("a",{href:"tel:+233241234567",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(ie,{className:"h-4 w-4 mr-2"}),"+233 24 123 4567"]})]})]})]})})]})},oh=()=>{const e=[{step:1,icon:Ue,title:"Site Survey & Assessment",description:"Comprehensive Infrastructure Analysis",details:"We conduct thorough site surveys to assess your current infrastructure, identify requirements, and plan optimal cable routes and hardware placement.",color:"from-blue-500 to-cyan-500"},{step:2,icon:Nn,title:"Design & Planning",description:"Structured Cabling Design",details:"Our engineers create detailed cabling diagrams, select appropriate materials, and plan installation schedules to minimize business disruption.",color:"from-cyan-500 to-teal-500"},{step:3,icon:qe,title:"Installation & Implementation",description:"Professional Installation Services",details:"Expert installation of all cabling infrastructure and hardware components following industry standards and best practices.",color:"from-teal-500 to-green-500"},{step:4,icon:Qi,title:"Testing & Certification",description:"Quality Assurance & Compliance",details:"Comprehensive testing of all installed cables and hardware to ensure optimal performance and compliance with industry standards.",color:"from-green-500 to-emerald-500"},{step:5,icon:Ns,title:"Documentation & Handover",description:"Complete System Documentation",details:"Detailed documentation of all installations, including cable maps, hardware specifications, and maintenance guidelines.",color:"from-emerald-500 to-blue-500"},{step:6,icon:Tn,title:"Maintenance & Support",description:"Ongoing Infrastructure Support",details:"Regular maintenance schedules, troubleshooting support, and hardware replacement services to ensure optimal performance.",color:"from-blue-500 to-purple-500"}],n=[{icon:Cr,title:"Structured Cabling Systems",description:"Professional installation of Cat6, Cat6A, and fiber optic cabling infrastructure",features:["Cat6/Cat6A Installation","Fiber Optic Cabling","Cable Management","Patch Panel Setup"],benefits:"Future-proof connectivity, organized infrastructure, optimal performance"},{icon:Ir,title:"Server & Network Hardware Installation",description:"Professional setup and configuration of servers, switches, and network equipment",features:["Server Rack Installation","Network Switch Setup","UPS Configuration","Cable Management"],benefits:"Reliable hardware setup, proper ventilation, organized installations"},{icon:Zd,title:"Wireless Access Point Installation",description:"Strategic placement and configuration of wireless access points for optimal coverage",features:["Site Survey","AP Placement","Coverage Optimization","Security Configuration"],benefits:"Seamless wireless coverage, optimal signal strength, secure connections"},{icon:js,title:"Audio/Visual System Installation",description:"Professional installation of conference room AV systems and digital displays",features:["Conference Room Setup","Digital Signage","Video Conferencing","Sound Systems"],benefits:"Enhanced communication, professional presentations, seamless collaboration"},{icon:te,title:"Security System Installation",description:"Installation of CCTV cameras, access control systems, and security infrastructure",features:["CCTV Installation","Access Control","Alarm Systems","Security Cabling"],benefits:"Enhanced security, controlled access, comprehensive monitoring"},{icon:Sn,title:"Maintenance & Troubleshooting",description:"Ongoing maintenance and rapid troubleshooting of installed infrastructure",features:["Preventive Maintenance","Cable Testing","Hardware Diagnostics","Emergency Repairs"],benefits:"Minimized downtime, extended equipment life, rapid issue resolution"}],s=[{icon:st,title:"Professional Installation",description:"Certified technicians ensure all installations meet industry standards and best practices for optimal performance."},{icon:te,title:"Quality Materials",description:"We use only premium-grade cables, connectors, and hardware from trusted manufacturers for long-lasting reliability."},{icon:Z,title:"Future-Proof Solutions",description:"Infrastructure designed to support current needs while accommodating future technology upgrades and expansions."},{icon:oe,title:"Minimal Disruption",description:"Careful planning and execution ensure installations are completed with minimal impact on your daily operations."}],i=[{name:"Corporate Offices",icon:Z},{name:"Healthcare Facilities",icon:te},{name:"Educational Institutions",icon:oe},{name:"Manufacturing Plants",icon:qe},{name:"Retail Stores",icon:xe},{name:"Government Buildings",icon:lt},{name:"Hotels & Hospitality",icon:ct},{name:"Data Centers",icon:Ir}],r=[{name:"Cat6 Ethernet",category:"Data Cabling",speed:"1 Gbps"},{name:"Cat6A Ethernet",category:"High-Speed Data",speed:"10 Gbps"},{name:"Fiber Optic",category:"Long Distance",speed:"100+ Gbps"},{name:"Coaxial Cable",category:"Video/CCTV",speed:"Various"},{name:"Audio Cable",category:"Sound Systems",speed:"N/A"},{name:"Power Cable",category:"Electrical",speed:"N/A"}],a=[{name:"Network Switches",category:"Networking"},{name:"Wireless Access Points",category:"Wireless"},{name:"Server Racks",category:"Infrastructure"},{name:"Patch Panels",category:"Connectivity"},{name:"UPS Systems",category:"Power"},{name:"Security Cameras",category:"Surveillance"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(Cr,{className:"w-4 h-4 mr-2"}),"Cabling & Hardware Installation"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Professional Infrastructure.",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Expert Installation."})," Reliable Performance."]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Build a solid foundation for your technology infrastructure with professional cabling and hardware installation services. From structured cabling to server setup, we ensure your physical infrastructure supports optimal performance and future growth."}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:s.map((o,l)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",children:t.jsx(o.icon,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:o.title}),t.jsx("p",{className:"text-sm text-gray-600",children:o.description})]})]},l))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Schedule a Site Survey",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:"View Our Services"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"Professional network cabling and hardware installation",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx(v,{className:"w-5 h-5 text-green-600"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"Certified Install"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Industry Standards"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-orange-600",children:"25+"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Years Experience"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"})]})]})})]}),t.jsx("section",{id:"services",className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Cabling & Hardware Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive infrastructure installation services designed to provide reliable, scalable, and future-proof solutions for your business needs."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((o,l)=>t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(o.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors",children:o.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:o.description}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Key Features:"}),t.jsx("ul",{className:"space-y-2",children:o.features.map((c,d)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),c]},d))})]}),t.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4",children:[t.jsx("p",{className:"text-sm font-semibold text-orange-800 mb-1",children:"Benefits:"}),t.jsx("p",{className:"text-sm text-orange-700",children:o.benefits})]}),t.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"})]},l))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Cable Types & Hardware We Install"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We work with industry-standard cables and hardware from leading manufacturers to ensure optimal performance and reliability."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:"Cable Types"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((o,l)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(Cr,{className:"h-6 w-6 text-white"})}),t.jsx("h4",{className:"font-bold text-gray-900 mb-2",children:o.name}),t.jsx("p",{className:"text-sm text-gray-600 mb-1",children:o.category}),t.jsxs("p",{className:"text-xs text-orange-600 font-semibold",children:["Speed: ",o.speed]})]},l))})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:"Hardware Types"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.map((o,l)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(Ir,{className:"h-6 w-6 text-white"})}),t.jsx("h4",{className:"font-bold text-gray-900 mb-2",children:o.name}),t.jsx("p",{className:"text-sm text-gray-600",children:o.category})]},l))})]})]})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our 6-Step Installation Process"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"A proven methodology that ensures your cabling and hardware installations are completed professionally, on time, and to the highest standards."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((o,l)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{className:`inline-flex items-center bg-gradient-to-r ${o.color} text-white px-4 py-2 rounded-full text-sm font-bold`,children:["Step ",o.step]})}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${o.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(o.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:o.title}),t.jsx("p",{className:"text-sm text-gray-600",children:o.description})]})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:o.details}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${o.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},l))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Industries We Serve"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our cabling and hardware installation services are successfully deployed across diverse industries, each with customized solutions for specific requirements."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:i.map((o,l)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(o.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-semibold text-gray-900",children:o.name})]},l))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Why Choose Our Installation Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Experience the difference of working with certified professionals who deliver quality installations that stand the test of time."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(lt,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Certified Technicians"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Our team holds industry certifications and brings years of hands-on installation experience."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Industry certified professionals"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"25+ years combined experience"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Ongoing training and certification"]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Ze,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Quality Assurance"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Every installation is thoroughly tested and certified to ensure optimal performance and compliance."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Comprehensive testing protocols"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Industry standard compliance"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Performance certification"]})]})]}),t.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Z,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Future-Proof Solutions"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Infrastructure designed to support current needs while accommodating future technology upgrades."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Scalable infrastructure design"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Easy expansion capabilities"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Technology upgrade support"]})]})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-red-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Upgrade Your Infrastructure?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss your cabling and hardware needs and design a professional installation that supports your business operations and growth."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Schedule a Site Survey",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors",children:"View Our Services"})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"text-white opacity-90 mb-4",children:"Have questions about cabling and hardware installation? Our installation specialists are here to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[t.jsxs("a",{href:"mailto:install@binapulse.com",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(X,{className:"h-4 w-4 mr-2"}),"install@binapulse.com"]}),t.jsx("span",{className:"hidden sm:block text-white opacity-50",children:"|"}),t.jsxs("a",{href:"tel:+233241234567",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(ie,{className:"h-4 w-4 mr-2"}),"+233 24 123 4567"]})]})]})]})})]})},lh=()=>{const e=[{step:1,icon:ja,title:"IT Assessment & Discovery",description:"Comprehensive Technology Audit",details:"We conduct thorough assessments of your current IT infrastructure, processes, and business objectives to identify opportunities and challenges.",color:"from-blue-500 to-cyan-500"},{step:2,icon:Ue,title:"Strategic Planning",description:"Technology Roadmap Development",details:"Our experts develop customized IT strategies aligned with your business goals, including technology roadmaps and implementation timelines.",color:"from-cyan-500 to-teal-500"},{step:3,icon:Bp,title:"Solution Design",description:"Architecture & Implementation Plan",details:"We design comprehensive solutions and create detailed implementation plans with clear milestones, budgets, and resource requirements.",color:"from-teal-500 to-green-500"},{step:4,icon:qe,title:"Implementation Support",description:"Guided Technology Deployment",details:"Our team provides hands-on support during implementation, ensuring smooth deployment and minimal business disruption.",color:"from-green-500 to-emerald-500"},{step:5,icon:Pi,title:"Performance Monitoring",description:"Continuous Optimization",details:"We monitor system performance, track KPIs, and provide ongoing optimization recommendations to maximize ROI.",color:"from-emerald-500 to-blue-500"},{step:6,icon:Tn,title:"Ongoing Advisory",description:"Strategic Technology Partnership",details:"Continuous strategic guidance, technology updates, and advisory services to keep your IT aligned with business evolution.",color:"from-blue-500 to-purple-500"}],n=[{icon:Ue,title:"IT Strategy & Planning",description:"Develop comprehensive IT strategies that align technology investments with business objectives",features:["Technology Roadmapping","Budget Planning","Risk Assessment","ROI Analysis"],benefits:"Aligned IT investments, reduced costs, improved efficiency"},{icon:te,title:"Cybersecurity Assessment",description:"Comprehensive security audits and strategic cybersecurity planning for robust protection",features:["Security Audits","Vulnerability Assessment","Compliance Planning","Incident Response"],benefits:"Enhanced security posture, regulatory compliance, risk mitigation"},{icon:Z,title:"Digital Transformation",description:"Guide your organization through digital transformation initiatives and technology modernization",features:["Process Digitization","Cloud Migration","Automation Strategy","Change Management"],benefits:"Improved productivity, competitive advantage, operational efficiency"},{icon:ba,title:"Data Strategy & Analytics",description:"Develop data strategies and implement analytics solutions for data-driven decision making",features:["Data Architecture","Analytics Implementation","BI Strategy","Data Governance"],benefits:"Better insights, informed decisions, competitive intelligence"},{icon:xe,title:"Cloud Strategy & Migration",description:"Strategic cloud planning and migration services for scalable, cost-effective infrastructure",features:["Cloud Assessment","Migration Planning","Cost Optimization","Hybrid Solutions"],benefits:"Reduced infrastructure costs, improved scalability, enhanced flexibility"},{icon:oe,title:"IT Governance & Compliance",description:"Establish IT governance frameworks and ensure compliance with industry regulations",features:["Governance Framework","Policy Development","Compliance Audits","Risk Management"],benefits:"Regulatory compliance, reduced risk, improved governance"}],s=[{icon:st,title:"Strategic Alignment",description:"Ensure your IT investments directly support and accelerate your business objectives and growth plans."},{icon:te,title:"Risk Mitigation",description:"Identify and address potential IT risks before they impact your business operations or security."},{icon:Z,title:"Cost Optimization",description:"Optimize IT spending through strategic planning, vendor management, and efficient resource allocation."},{icon:oe,title:"Expert Guidance",description:"Access to experienced IT professionals and industry best practices without full-time hiring costs."}],i=[{name:"Financial Services",icon:Z},{name:"Healthcare",icon:te},{name:"Manufacturing",icon:qe},{name:"Retail & E-commerce",icon:xe},{name:"Education",icon:oe},{name:"Government",icon:lt},{name:"Professional Services",icon:Nn},{name:"Non-Profit Organizations",icon:ct}],r=[{name:"IT Strategy",category:"Strategic Planning",icon:Ue},{name:"Cybersecurity",category:"Security & Compliance",icon:te},{name:"Cloud Computing",category:"Infrastructure",icon:xe},{name:"Data Analytics",category:"Business Intelligence",icon:Pi},{name:"Digital Transformation",category:"Modernization",icon:Ns},{name:"IT Governance",category:"Management",icon:Sn}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(oe,{className:"w-4 h-4 mr-2"}),"IT Consultation & Advisory"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Strategic Technology.",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Expert Guidance."})," Business Growth."]}),t.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Navigate the complex technology landscape with confidence. Our IT consultation services provide strategic guidance, expert recommendations, and actionable roadmaps to align your technology investments with business success."}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:s.map((a,o)=>t.jsxs("div",{className:"flex items-start",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",children:t.jsx(a.icon,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]},o))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg",children:["Schedule a Strategic IT Assessment",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105",children:"View Our Services"})]})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"relative z-10",children:t.jsx("img",{src:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",alt:"IT consultation and strategic planning session",className:"w-full h-[500px] object-cover rounded-2xl shadow-2xl"})}),t.jsx("div",{className:"absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:t.jsx(v,{className:"w-5 h-5 text-green-600"})}),t.jsxs("div",{className:"ml-3",children:[t.jsx("div",{className:"text-sm font-semibold text-gray-900",children:"Strategic Planning"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Expert Guidance"})]})]})}),t.jsx("div",{className:"absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl font-bold text-green-600",children:"200+"}),t.jsx("div",{className:"text-xs text-gray-500",children:"Successful Projects"})]})}),t.jsx("div",{className:"absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-20 -z-10"}),t.jsx("div",{className:"absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"})]})]})})]}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"What is IT Consultation?"}),t.jsx("p",{className:"text-xl text-gray-600 leading-relaxed mb-8",children:"IT Consultation is strategic advisory service that helps businesses make informed technology decisions, optimize IT investments, and align technology initiatives with business objectives. Our experts provide guidance on everything from infrastructure planning to digital transformation."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6",children:[t.jsx(Ue,{className:"h-12 w-12 text-green-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Strategic"}),t.jsx("p",{className:"text-gray-600",children:"Align technology with business goals and objectives"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6",children:[t.jsx(oe,{className:"h-12 w-12 text-blue-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Expert"}),t.jsx("p",{className:"text-gray-600",children:"Access to experienced IT professionals and best practices"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6",children:[t.jsx(Z,{className:"h-12 w-12 text-teal-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Results-Driven"}),t.jsx("p",{className:"text-gray-600",children:"Focus on measurable outcomes and business value"})]})]})]})})}),t.jsx("section",{id:"services",className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"IT Consultation Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive IT advisory services designed to help you make informed technology decisions and maximize your IT investments."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors",children:a.title}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:a.description}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Key Areas:"}),t.jsx("ul",{className:"space-y-2",children:a.features.map((l,c)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),l]},c))})]}),t.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4",children:[t.jsx("p",{className:"text-sm font-semibold text-green-800 mb-1",children:"Expected Outcomes:"}),t.jsx("p",{className:"text-sm text-green-700",children:a.benefits})]}),t.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our Consultation Process"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"A proven 6-step approach that ensures you receive strategic guidance tailored to your business needs and technology objectives."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((a,o)=>t.jsx("div",{className:"group relative",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{className:`inline-flex items-center bg-gradient-to-r ${a.color} text-white px-4 py-2 rounded-full text-sm font-bold`,children:["Step ",a.step]})}),t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${a.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`,children:t.jsx(a.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-1",children:a.title}),t.jsx("p",{className:"text-sm text-gray-600",children:a.description})]})]}),t.jsx("p",{className:"text-gray-600 leading-relaxed",children:a.details}),t.jsx("div",{className:`absolute inset-0 rounded-3xl bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]})},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Our Areas of Expertise"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We provide strategic guidance across all major areas of information technology and business systems."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",children:r.map((a,o)=>t.jsxs("div",{className:"bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-bold text-gray-900 mb-2",children:a.name}),t.jsx("p",{className:"text-sm text-gray-600",children:a.category})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Industries We Serve"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our IT consultation services are successfully deployed across diverse industries, each with customized strategies for specific sector requirements."})]}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:i.map((a,o)=>t.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 text-center hover:from-green-50 hover:to-teal-50 transition-all duration-300 hover:-translate-y-1 group",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",children:t.jsx(a.icon,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"font-semibold text-gray-900",children:a.name})]},o))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-teal-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Why Choose Our IT Consultation Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Experience the difference of working with strategic IT advisors who understand your business and deliver actionable recommendations."})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(lt,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Proven Expertise"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Our consultants bring decades of combined experience across various industries and technology domains."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Industry certified professionals"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"15+ years combined experience"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Cross-industry expertise"]})]})]}),t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(jn,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Actionable Recommendations"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"We provide clear, practical recommendations with detailed implementation roadmaps and success metrics."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Detailed implementation plans"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Clear success metrics"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Ongoing support available"]})]})]}),t.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:t.jsx(Z,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Measurable Results"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Our consultation services deliver measurable business value and return on investment."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"ROI-focused recommendations"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Performance tracking"]}),t.jsxs("li",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2"}),"Continuous optimization"]})]})]})]})]})})}),t.jsx("section",{className:"py-16 lg:py-24 bg-gradient-to-r from-green-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Optimize Your IT Strategy?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss your technology challenges and develop a strategic roadmap that aligns IT with your business objectives and drives growth."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Schedule a Strategic IT Assessment",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors",children:"View Our Services"})]}),t.jsxs("div",{className:"mt-12 pt-8 border-t border-white border-opacity-20",children:[t.jsx("p",{className:"text-white opacity-90 mb-4",children:"Have questions about IT strategy? Our consultation specialists are here to help."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[t.jsxs("a",{href:"mailto:consulting@binapulse.com",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(X,{className:"h-4 w-4 mr-2"}),"consulting@binapulse.com"]}),t.jsx("span",{className:"hidden sm:block text-white opacity-50",children:"|"}),t.jsxs("a",{href:"tel:+233241234567",className:"text-white hover:text-gray-200 transition-colors flex items-center",children:[t.jsx(ie,{className:"h-4 w-4 mr-2"}),"+233 24 123 4567"]})]})]})]})})]})},ch=()=>{const e="January 15, 2025",n=[{id:"information-collection",title:"Information We Collect",icon:jn,content:[{subtitle:"Personal Information",items:["Name, email address, phone number, and business contact details","Company information including business name, industry, and size","Professional details such as job title and role responsibilities","Communication preferences and marketing consent"]},{subtitle:"Technical Information",items:["IP address, browser type, and device information","Website usage data including pages visited and time spent","Cookies and similar tracking technologies data","System performance and error logs for our services"]},{subtitle:"Business Information",items:["Project requirements and technical specifications","Business processes and workflow information","System configurations and infrastructure details","Support tickets and communication history"]}]},{id:"information-use",title:"How We Use Your Information",icon:oe,content:[{subtitle:"Service Delivery",items:["Provide and maintain our software and IT services","Process transactions and manage client accounts","Deliver customer support and technical assistance","Customize services to meet your specific business needs"]},{subtitle:"Communication",items:["Respond to inquiries and provide requested information","Send service updates, security alerts, and important notices","Share relevant industry insights and technology updates","Conduct satisfaction surveys and gather feedback"]},{subtitle:"Business Operations",items:["Improve our services and develop new offerings","Analyze usage patterns to enhance user experience","Conduct research and development activities","Ensure compliance with legal and regulatory requirements"]}]},{id:"information-sharing",title:"Information Sharing and Disclosure",icon:xe,content:[{subtitle:"We Do Not Sell Personal Information",items:["We never sell, rent, or trade your personal information to third parties","Your data is used exclusively for providing our services","We maintain strict confidentiality of all client information"]},{subtitle:"Limited Sharing Scenarios",items:["With trusted service providers who assist in service delivery","When required by law or legal process","To protect our rights, property, or safety","With your explicit consent for specific purposes"]},{subtitle:"Business Partners",items:["Technology vendors for software licensing and support","Cloud service providers for hosting and infrastructure","Payment processors for transaction handling","All partners are bound by strict confidentiality agreements"]}]},{id:"data-security",title:"Data Security and Protection",icon:te,content:[{subtitle:"Security Measures",items:["Industry-standard encryption for data transmission and storage","Multi-factor authentication for system access","Regular security audits and vulnerability assessments","Secure data centers with physical and digital protection"]},{subtitle:"Access Controls",items:["Role-based access controls limiting data access to authorized personnel","Regular access reviews and permission updates","Secure authentication protocols for all systems","Monitoring and logging of all data access activities"]},{subtitle:"Data Backup and Recovery",items:["Regular automated backups of all client data","Geographically distributed backup storage","Tested disaster recovery procedures","Business continuity planning for service availability"]}]},{id:"data-retention",title:"Data Retention and Deletion",icon:_t,content:[{subtitle:"Retention Periods",items:["Client data retained for the duration of active service agreements","Communication records kept for 7 years for business purposes","Technical logs and system data retained for 2 years","Marketing data retained until consent is withdrawn"]},{subtitle:"Data Deletion",items:["Secure deletion of data upon service termination","Right to request data deletion at any time","Automated deletion of expired backup data","Certificate of data destruction provided upon request"]}]},{id:"your-rights",title:"Your Privacy Rights",icon:wn,content:[{subtitle:"Access and Control",items:["Right to access all personal information we hold about you","Right to correct or update inaccurate information","Right to request deletion of your personal data","Right to restrict or object to certain data processing"]},{subtitle:"Data Portability",items:["Right to receive your data in a structured, machine-readable format","Right to transfer your data to another service provider","Assistance with data migration when switching services"]},{subtitle:"Marketing Communications",items:["Right to opt-out of marketing communications at any time","Granular control over communication preferences","Easy unsubscribe options in all marketing emails"]}]}],s=[{icon:X,title:"Email",contact:"privacy@binapulse.com",description:"For privacy-related inquiries and requests"},{icon:ie,title:"Phone",contact:"+233 24 123 4567",description:"Speak directly with our privacy officer"},{icon:X,title:"Postal Address",contact:"Binapulse Technologies, Accra, Ghana",description:"For formal privacy requests and notices"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(te,{className:"w-4 h-4 mr-2"}),"Privacy Policy"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Your Privacy is",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Our Priority"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",children:"We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data."}),t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex items-center justify-center mb-4",children:[t.jsx(_t,{className:"h-6 w-6 text-blue-600 mr-2"}),t.jsxs("span",{className:"font-semibold text-gray-900",children:["Last Updated: ",e]})]}),t.jsx("p",{className:"text-gray-600",children:"This privacy policy applies to all services provided by Binapulse Technologies and governs our collection and use of your information."})]})]})})]}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:"Table of Contents"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map((i,r)=>t.jsx("a",{href:`#${i.id}`,className:"bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200",children:t.jsx(i.icon,{className:"h-5 w-5 text-white"})}),t.jsx("div",{children:t.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-blue-600 transition-colors",children:i.title})})]})},r))})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto space-y-16",children:n.map((i,r)=>t.jsx("div",{id:i.id,className:"scroll-mt-24",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(i.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:i.title})]}),t.jsx("div",{className:"space-y-8",children:i.content.map((a,o)=>t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:a.subtitle}),t.jsx("ul",{className:"space-y-3",children:a.items.map((l,c)=>t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 leading-relaxed",children:l})]},c))})]},o))})]})},r))})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-lg",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(Yd,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Cookies and Tracking Technologies"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"What Are Cookies"}),t.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:"Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Types of Cookies We Use"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Essential Cookies"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"Required for basic website functionality and security. These cannot be disabled."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Analytics Cookies"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"Help us understand how visitors interact with our website to improve user experience."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Functional Cookies"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"Remember your preferences and settings to provide personalized features."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Marketing Cookies"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"Used to deliver relevant advertisements and track campaign effectiveness."})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Managing Cookies"}),t.jsx("p",{className:"text-gray-700 leading-relaxed",children:"You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse cookies or alert you when cookies are being sent."})]})]})]})})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(xe,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"International Data Transfers"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("p",{className:"text-gray-700 leading-relaxed",children:"As a technology company serving clients across Africa and internationally, we may transfer your personal information to countries outside of Ghana. We ensure that all international data transfers are protected by appropriate safeguards."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3",children:"Safeguards We Use"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Standard contractual clauses approved by data protection authorities"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Adequacy decisions for countries with equivalent protection"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Binding corporate rules for intra-group transfers"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3",children:"Your Rights"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Right to be informed about international transfers"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Right to object to transfers in certain circumstances"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Right to receive copies of safeguards in place"})]})]})]})]})]})]})})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Privacy Questions or Concerns?"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Our privacy team is here to help you understand your rights and address any concerns about how we handle your personal information."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:s.map((i,r)=>t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6",children:t.jsx(i.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:i.title}),t.jsx("p",{className:"text-gray-600 mb-4",children:i.description}),t.jsx("p",{className:"font-semibold text-blue-600",children:i.contact})]},r))}),t.jsxs("div",{className:"mt-12 bg-white rounded-2xl p-8 shadow-lg text-center",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Response Time"}),t.jsxs("p",{className:"text-gray-600",children:["We aim to respond to all privacy-related inquiries within ",t.jsx("strong",{children:"30 days"}),". For urgent matters, please call us directly at +233 24 123 4567."]})]})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center",children:[t.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Policy Updates"}),t.jsx("p",{className:"text-xl opacity-90 mb-8 max-w-2xl mx-auto",children:"We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"How We Notify You"}),t.jsxs("ul",{className:"text-left space-y-2 opacity-90",children:[t.jsx("li",{children:"• Email notification to registered users"}),t.jsx("li",{children:"• Website banner announcement"}),t.jsx("li",{children:'• Updated "Last Modified" date'})]})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Your Options"}),t.jsxs("ul",{className:"text-left space-y-2 opacity-90",children:[t.jsx("li",{children:"• Review changes before they take effect"}),t.jsx("li",{children:"• Contact us with questions or concerns"}),t.jsx("li",{children:"• Opt-out of services if you disagree"})]})]})]})]})})})})]})},dh=()=>{const e="January 15, 2025",n=[{id:"acceptance-of-terms",title:"Acceptance of Terms",icon:jn,content:[{subtitle:"Agreement to Terms",items:["By accessing or using Binapulse Technologies services, you agree to be bound by these Terms of Service","These terms constitute a legally binding agreement between you and Binapulse Technologies","If you do not agree to these terms, you must not use our services","Your continued use of our services constitutes acceptance of any updates to these terms"]},{subtitle:"Capacity to Enter Agreement",items:["You must be at least 18 years old or have legal capacity to enter into contracts","If representing a business, you must have authority to bind that entity to these terms","You represent that all information provided is accurate and complete","You agree to update information as necessary to maintain accuracy"]}]},{id:"services-description",title:"Description of Services",icon:xe,content:[{subtitle:"Software Development Services",items:["Custom software application development and deployment","AI agent development and automation solutions","ERP system implementation and customization","Mobile and web application development"]},{subtitle:"IT Infrastructure Services",items:["Network design, implementation, and management","Cabling and hardware installation services","IT consultation and strategic planning","System maintenance and technical support"]},{subtitle:"Service Availability",items:["We strive to maintain 99.9% uptime for our hosted services","Scheduled maintenance will be communicated in advance","Emergency maintenance may occur without prior notice","Service availability may vary based on third-party dependencies"]}]},{id:"user-obligations",title:"User Obligations and Responsibilities",icon:oe,content:[{subtitle:"Acceptable Use",items:["Use services only for lawful business purposes","Comply with all applicable laws and regulations","Respect intellectual property rights of others","Maintain confidentiality of access credentials"]},{subtitle:"Prohibited Activities",items:["Attempting to gain unauthorized access to systems or data","Interfering with or disrupting service operations","Using services to transmit malicious code or content","Violating any applicable laws or regulations"]},{subtitle:"Data and Content Responsibility",items:["You are responsible for all data and content you provide","Ensure you have rights to use and share all provided content","Maintain appropriate backups of your critical data","Comply with data protection and privacy regulations"]}]},{id:"payment-terms",title:"Payment Terms and Billing",icon:Mp,content:[{subtitle:"Payment Obligations",items:["All fees are due according to the agreed payment schedule","Payments must be made in the currency specified in your agreement","Late payments may incur additional charges as specified","You are responsible for all taxes related to your use of services"]},{subtitle:"Billing and Invoicing",items:["Invoices will be sent to your designated billing contact","Payment is due within 30 days of invoice date unless otherwise agreed","Disputed charges must be reported within 30 days of invoice date","Continued service may be suspended for overdue accounts"]},{subtitle:"Refund Policy",items:["Refunds are handled on a case-by-case basis","Custom development work is generally non-refundable once commenced","Subscription services may be refunded on a pro-rata basis","Hardware purchases are subject to manufacturer warranty terms"]}]},{id:"intellectual-property",title:"Intellectual Property Rights",icon:te,content:[{subtitle:"Our Intellectual Property",items:["Binapulse Technologies retains all rights to our proprietary software and methodologies","Our trademarks, logos, and brand materials remain our exclusive property","Pre-existing intellectual property is not transferred through service agreements","You receive only the rights explicitly granted in your service agreement"]},{subtitle:"Custom Development Work",items:["Custom software developed specifically for you becomes your property upon full payment","We retain rights to general methodologies and non-specific technical approaches","Third-party components remain subject to their respective licenses","We may retain rights to use general knowledge and experience gained"]},{subtitle:"Client Content and Data",items:["You retain ownership of all data and content you provide","You grant us necessary rights to use your content to provide services","We will not use your confidential information for other purposes","You are responsible for ensuring you have rights to all content provided"]}]},{id:"confidentiality",title:"Confidentiality and Data Protection",icon:Yd,content:[{subtitle:"Confidential Information",items:["We will maintain confidentiality of your proprietary business information","Confidential information includes business processes, data, and strategic plans","Our employees and contractors are bound by confidentiality agreements","Confidentiality obligations survive termination of our agreement"]},{subtitle:"Data Security",items:["We implement industry-standard security measures to protect your data","Regular security audits and updates are performed on our systems","Data breaches will be reported according to applicable legal requirements","You are responsible for maintaining security of your access credentials"]},{subtitle:"Data Processing",items:["We process personal data in accordance with our Privacy Policy","Data processing is limited to what is necessary to provide services","We comply with applicable data protection regulations","Data retention periods are specified in our Privacy Policy"]}]},{id:"limitation-of-liability",title:"Limitation of Liability and Disclaimers",icon:Vd,content:[{subtitle:"Service Warranties",items:["Services are provided 'as is' without warranties beyond those explicitly stated","We warrant that services will be performed with professional skill and care","We do not warrant that services will be uninterrupted or error-free","Third-party components are subject to their respective warranty terms"]},{subtitle:"Limitation of Liability",items:["Our liability is limited to the amount paid for services in the 12 months preceding the claim","We are not liable for indirect, consequential, or punitive damages","We are not liable for damages caused by factors beyond our reasonable control","Some jurisdictions may not allow certain liability limitations"]},{subtitle:"Indemnification",items:["You agree to indemnify us against claims arising from your use of services","This includes claims related to your content, data, or violation of these terms","We will provide reasonable notice of any claims requiring indemnification","We reserve the right to participate in defense of any indemnified claims"]}]},{id:"termination",title:"Termination and Suspension",icon:Al,content:[{subtitle:"Termination Rights",items:["Either party may terminate agreements with appropriate notice as specified","We may terminate immediately for material breach of these terms","You may terminate at any time with written notice","Termination does not relieve obligations that accrued before termination"]},{subtitle:"Effect of Termination",items:["Upon termination, access to services will be discontinued","We will provide reasonable assistance with data export","Outstanding fees remain due and payable","Confidentiality and intellectual property provisions survive termination"]},{subtitle:"Data Retention After Termination",items:["We will retain your data for 30 days after termination for recovery purposes","After 30 days, data will be securely deleted unless legally required to retain","You are responsible for exporting any data you wish to retain","Some data may be retained in anonymized form for analytical purposes"]}]}],s=[{icon:X,title:"Email",contact:"legal@binapulse.com",description:"For legal and terms-related inquiries"},{icon:ie,title:"Phone",contact:"+233 24 123 4567",description:"Speak directly with our legal team"},{icon:X,title:"Postal Address",contact:"Binapulse Technologies, Accra, Ghana",description:"For formal legal notices and correspondence"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(qp,{className:"w-4 h-4 mr-2"}),"Terms of Service"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Terms of",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Service"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",children:"These terms govern your use of Binapulse Technologies services. Please read them carefully as they contain important information about your rights and obligations."}),t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex items-center justify-center mb-4",children:[t.jsx(_t,{className:"h-6 w-6 text-blue-600 mr-2"}),t.jsxs("span",{className:"font-semibold text-gray-900",children:["Last Updated: ",e]})]}),t.jsx("p",{className:"text-gray-600",children:"These terms of service apply to all services provided by Binapulse Technologies and constitute a legally binding agreement."})]})]})})]}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-8 text-center",children:"Table of Contents"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map((i,r)=>t.jsx("a",{href:`#${i.id}`,className:"bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group",children:t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200",children:t.jsx(i.icon,{className:"h-5 w-5 text-white"})}),t.jsx("div",{children:t.jsx("h3",{className:"font-semibold text-gray-900 group-hover:text-blue-600 transition-colors",children:i.title})})]})},r))})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto space-y-16",children:n.map((i,r)=>t.jsx("div",{id:i.id,className:"scroll-mt-24",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(i.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:i.title})]}),t.jsx("div",{className:"space-y-8",children:i.content.map((a,o)=>t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:a.subtitle}),t.jsx("ul",{className:"space-y-3",children:a.items.map((l,c)=>t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 leading-relaxed",children:l})]},c))})]},o))})]})},r))})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-white rounded-3xl p-8 lg:p-12 shadow-lg",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(Al,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Dispute Resolution"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Governing Law"}),t.jsx("p",{className:"text-gray-700 leading-relaxed mb-4",children:"These Terms of Service are governed by the laws of Ghana. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Ghana."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Dispute Resolution Process"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"1. Direct Negotiation"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"We encourage direct communication to resolve disputes amicably and efficiently."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"2. Mediation"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"If direct negotiation fails, we may engage in mediation through a mutually agreed mediator."})]}),t.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"3. Legal Action"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"As a last resort, disputes may be resolved through the appropriate legal channels."})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Limitation Period"}),t.jsx("p",{className:"text-gray-700 leading-relaxed",children:"Any claims arising from these terms or your use of our services must be brought within one (1) year of the date the claim arose, or such claim will be permanently barred."})]})]})]})})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12",children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6",children:t.jsx(jn,{className:"h-8 w-8 text-white"})}),t.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"Modifications to Terms"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("p",{className:"text-gray-700 leading-relaxed",children:"We may update these Terms of Service from time to time to reflect changes in our services, legal requirements, or business practices. We will notify you of any material changes through appropriate channels."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3",children:"How We Notify You"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Email notification to registered users"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Website banner announcement"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:'Updated "Last Modified" date'})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Direct communication for material changes"})]})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-3",children:"Your Options"}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Review changes before they take effect"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Contact us with questions or concerns"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Terminate services if you disagree"})]}),t.jsxs("li",{className:"flex items-start",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0"}),t.jsx("span",{className:"text-gray-700 text-sm",children:"Continued use implies acceptance"})]})]})]})]})]})]})})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Legal Questions or Concerns?"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Our legal team is here to help you understand these terms and address any questions about your rights and obligations."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:s.map((i,r)=>t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6",children:t.jsx(i.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:i.title}),t.jsx("p",{className:"text-gray-600 mb-4",children:i.description}),t.jsx("p",{className:"font-semibold text-blue-600",children:i.contact})]},r))}),t.jsxs("div",{className:"mt-12 bg-white rounded-2xl p-8 shadow-lg text-center",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Response Time"}),t.jsxs("p",{className:"text-gray-600",children:["We aim to respond to all legal inquiries within ",t.jsx("strong",{children:"5 business days"}),". For urgent matters, please call us directly at +233 24 123 4567."]})]})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center",children:[t.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Important Legal Notes"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 text-left",children:[t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Severability"}),t.jsx("p",{className:"opacity-90 text-sm",children:"If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. The unenforceable provision will be replaced with an enforceable provision that most closely reflects the original intent."})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Entire Agreement"}),t.jsx("p",{className:"opacity-90 text-sm",children:"These Terms of Service, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and Binapulse Technologies regarding your use of our services."})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Assignment"}),t.jsx("p",{className:"opacity-90 text-sm",children:"You may not assign or transfer your rights under these terms without our written consent. We may assign our rights and obligations under these terms to any third party without restriction."})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Waiver"}),t.jsx("p",{className:"opacity-90 text-sm",children:"Our failure to enforce any provision of these terms does not constitute a waiver of that provision or any other provision. Any waiver must be in writing and signed by an authorized representative."})]})]})]})})})})]})},uh=()=>{const e="January 15, 2025",n=[{id:"essential-cookies",title:"Essential Cookies",icon:te,color:"from-green-500 to-emerald-500",description:"These cookies are necessary for the website to function properly and cannot be disabled.",purpose:"Enable basic website functionality, security, and user authentication",examples:["Session management cookies","Security authentication tokens","Load balancing cookies","CSRF protection tokens"],retention:"Session or up to 24 hours",canDisable:!1},{id:"functional-cookies",title:"Functional Cookies",icon:Sn,color:"from-blue-500 to-cyan-500",description:"These cookies enhance functionality and personalization but are not essential for basic operation.",purpose:"Remember user preferences, settings, and provide enhanced features",examples:["Language preference cookies","Theme selection cookies","Form auto-fill data","Accessibility settings"],retention:"Up to 1 year",canDisable:!0},{id:"analytics-cookies",title:"Analytics Cookies",icon:Pi,color:"from-purple-500 to-pink-500",description:"These cookies help us understand how visitors interact with our website.",purpose:"Collect anonymous data about website usage and performance",examples:["Google Analytics cookies","Page view tracking","User journey analysis","Performance monitoring"],retention:"Up to 2 years",canDisable:!0},{id:"marketing-cookies",title:"Marketing Cookies",icon:Ue,color:"from-orange-500 to-red-500",description:"These cookies are used to deliver relevant advertisements and track campaign effectiveness.",purpose:"Personalize advertising and measure marketing campaign performance",examples:["Ad targeting cookies","Conversion tracking pixels","Social media integration","Remarketing tags"],retention:"Up to 1 year",canDisable:!0}],s=[{name:"Google Analytics",purpose:"Website analytics and user behavior tracking",cookies:["_ga","_gid","_gat"],retention:"Up to 2 years",privacyPolicy:"https://policies.google.com/privacy"},{name:"Google Tag Manager",purpose:"Tag and script management",cookies:["_gtm"],retention:"Session",privacyPolicy:"https://policies.google.com/privacy"},{name:"Facebook Pixel",purpose:"Social media integration and advertising",cookies:["_fbp","fr"],retention:"Up to 90 days",privacyPolicy:"https://www.facebook.com/privacy/policy"},{name:"LinkedIn Insight Tag",purpose:"Professional network integration and B2B advertising",cookies:["li_gc","lidc"],retention:"Up to 2 years",privacyPolicy:"https://www.linkedin.com/legal/privacy-policy"}],i=[{icon:X,title:"Email",contact:"privacy@binapulse.com",description:"For cookie and privacy-related inquiries"},{icon:ie,title:"Phone",contact:"+233 24 123 4567",description:"Speak directly with our privacy team"},{icon:X,title:"Postal Address",contact:"Binapulse Technologies, Accra, Ghana",description:"For formal privacy notices and correspondence"}];return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(Ap,{className:"w-4 h-4 mr-2"}),"Cookie Policy"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Cookie",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Policy"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",children:"This Cookie Policy explains how Binapulse Technologies uses cookies and similar technologies to enhance your browsing experience, analyze website usage, and provide personalized content."}),t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto",children:[t.jsxs("div",{className:"flex items-center justify-center mb-4",children:[t.jsx(_t,{className:"h-6 w-6 text-blue-600 mr-2"}),t.jsxs("span",{className:"font-semibold text-gray-900",children:["Last Updated: ",e]})]}),t.jsx("p",{className:"text-gray-600",children:"This cookie policy applies to all websites and services provided by Binapulse Technologies and explains our use of cookies and your choices."})]})]})})]}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"What Are Cookies?"}),t.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services."})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center",children:[t.jsx(js,{className:"h-12 w-12 text-blue-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Small Files"}),t.jsx("p",{className:"text-gray-600",children:"Tiny text files stored locally on your device by your web browser"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center",children:[t.jsx(st,{className:"h-12 w-12 text-purple-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Enhanced Experience"}),t.jsx("p",{className:"text-gray-600",children:"Remember your preferences and improve website functionality"})]}),t.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 text-center",children:[t.jsx(Pi,{className:"h-12 w-12 text-teal-600 mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"Analytics"}),t.jsx("p",{className:"text-gray-600",children:"Help us understand how visitors interact with our website"})]})]})]})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Types of Cookies We Use"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We use different types of cookies for various purposes. Here's a detailed breakdown of each category and how you can manage them."})]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:n.map((r,a)=>t.jsxs("div",{id:r.id,className:"bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100",children:[t.jsxs("div",{className:"flex items-center mb-6",children:[t.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mr-4`,children:t.jsx(r.icon,{className:"h-8 w-8 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-1",children:r.title}),t.jsx("div",{className:"flex items-center",children:r.canDisable?t.jsx("span",{className:"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium",children:"Can be disabled"}):t.jsx("span",{className:"bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",children:"Always active"})})]})]}),t.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:r.description}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Purpose:"}),t.jsx("p",{className:"text-gray-600 text-sm",children:r.purpose})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Examples:"}),t.jsx("ul",{className:"space-y-1",children:r.examples.map((o,l)=>t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),o]},l))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Retention Period:"}),t.jsx("p",{className:"text-gray-600 text-sm",children:r.retention})]})]})]},a))})]})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Third-Party Services"}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We use trusted third-party services to enhance our website functionality. Each service has its own privacy policy and cookie usage."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map((r,a)=>t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4",children:t.jsx(xe,{className:"h-6 w-6 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900",children:r.name})]}),t.jsx("p",{className:"text-gray-600 mb-4",children:r.purpose}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-1",children:"Cookies Used:"}),t.jsx("div",{className:"flex flex-wrap gap-2",children:r.cookies.map((o,l)=>t.jsx("span",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono",children:o},l))})]}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-gray-900 mb-1",children:"Retention:"}),t.jsx("p",{className:"text-gray-600 text-sm",children:r.retention})]}),t.jsx("div",{children:t.jsxs("a",{href:r.privacyPolicy,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium",children:["View Privacy Policy",t.jsx(wn,{className:"ml-1 h-4 w-4"})]})})]})]},a))})]})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Managing Your Cookie Preferences"}),t.jsx("p",{className:"text-xl text-gray-600",children:"You have control over how cookies are used on our website. Here are your options for managing cookie preferences."})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(Sn,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Browser Settings"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Most browsers allow you to control cookies through their settings."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Block all cookies or specific types"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Delete existing cookies"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Set notifications for new cookies"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Configure privacy settings"]})]})]}),t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6",children:t.jsx(wn,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Opt-Out Options"}),t.jsx("p",{className:"text-gray-600 mb-6",children:"Use these tools to opt out of specific tracking services."}),t.jsxs("ul",{className:"space-y-2",children:[t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Google Analytics Opt-out Browser Add-on"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Facebook advertising preferences"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"LinkedIn advertising controls"]}),t.jsxs("li",{className:"flex items-start text-sm text-gray-600",children:[t.jsx(v,{className:"h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"}),"Industry opt-out initiatives"]})]})]})]}),t.jsx("div",{className:"mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6",children:t.jsxs("div",{className:"flex items-start",children:[t.jsx(Vd,{className:"h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"Important Note"}),t.jsx("p",{className:"text-yellow-700 text-sm",children:"Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic website operation and security."})]})]})})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-6",children:"Browser-Specific Cookie Management"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Step-by-step instructions for managing cookies in popular web browsers."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Google Chrome",steps:["Settings → Privacy and security → Cookies and other site data","Choose your preferred cookie settings","Manage exceptions for specific sites"]},{name:"Mozilla Firefox",steps:["Settings → Privacy & Security","Cookies and Site Data section","Manage Data or Clear Data options"]},{name:"Safari",steps:["Preferences → Privacy","Manage Website Data","Configure cookie preferences"]},{name:"Microsoft Edge",steps:["Settings → Cookies and site permissions","Cookies and site data","Manage and delete cookies"]},{name:"Opera",steps:["Settings → Advanced → Privacy & security","Site Settings → Cookies","Configure cookie behavior"]},{name:"Mobile Browsers",steps:["Access browser settings menu","Find Privacy or Security section","Manage cookie preferences"]}].map((r,a)=>t.jsxs("div",{className:"bg-gray-50 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:r.name}),t.jsx("ol",{className:"space-y-2",children:r.steps.map((o,l)=>t.jsxs("li",{className:"text-sm text-gray-600 flex items-start",children:[t.jsx("span",{className:"bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0",children:l+1}),o]},l))})]},a))})]})})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Cookie Questions or Concerns?"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Our privacy team is here to help you understand our cookie usage and manage your preferences."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:i.map((r,a)=>t.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6",children:t.jsx(r.icon,{className:"h-8 w-8 text-white"})}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:r.title}),t.jsx("p",{className:"text-gray-600 mb-4",children:r.description}),t.jsx("p",{className:"font-semibold text-blue-600",children:r.contact})]},a))}),t.jsxs("div",{className:"mt-12 bg-white rounded-2xl p-8 shadow-lg text-center",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Response Time"}),t.jsxs("p",{className:"text-gray-600",children:["We aim to respond to all cookie and privacy-related inquiries within ",t.jsx("strong",{children:"48 hours"}),". For urgent matters, please call us directly at +233 24 123 4567."]})]})]})})}),t.jsx("section",{className:"py-16 bg-white",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center",children:[t.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Cookie Policy Updates"}),t.jsx("p",{className:"text-xl opacity-90 mb-8 max-w-2xl mx-auto",children:"We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements."}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"How We Notify You"}),t.jsxs("ul",{className:"text-left space-y-2 opacity-90",children:[t.jsx("li",{children:"• Email notification to registered users"}),t.jsx("li",{children:"• Website banner announcement"}),t.jsx("li",{children:'• Updated "Last Modified" date'}),t.jsx("li",{children:"• Cookie consent banner updates"})]})]}),t.jsxs("div",{className:"bg-white bg-opacity-20 rounded-2xl p-6",children:[t.jsx("h3",{className:"text-lg font-bold mb-3",children:"Your Options"}),t.jsxs("ul",{className:"text-left space-y-2 opacity-90",children:[t.jsx("li",{children:"• Review changes before they take effect"}),t.jsx("li",{children:"• Update your cookie preferences"}),t.jsx("li",{children:"• Contact us with questions"}),t.jsx("li",{children:"• Opt-out of non-essential cookies"})]})]})]})]})})})})]})},mh=()=>{const[e,n]=W.useState(""),[s,i]=W.useState("All"),r=[{id:1,title:"The Ultimate Guide to Digital Transformation for African Businesses in 2025",slug:"digital-transformation-guide-african-businesses-2025",excerpt:"Discover how African businesses can leverage digital transformation to compete globally while addressing local market challenges. Learn practical strategies, implementation roadmaps, and success stories.",content:`Digital transformation is no longer a luxury for African businesses—it's a necessity for survival and growth in today's competitive landscape. As we enter 2025, companies across Africa are recognizing that embracing technology isn't just about keeping up; it's about leapfrogging traditional limitations and creating new opportunities.

## Understanding Digital Transformation in the African Context

Digital transformation in Africa presents unique opportunities and challenges. Unlike developed markets where businesses are often replacing legacy systems, many African companies have the advantage of building digital-first operations from the ground up.

### Key Areas of Focus:

**1. Mobile-First Approach**
With mobile phone penetration exceeding 80% across most African countries, businesses must prioritize mobile-optimized solutions. This includes mobile payment systems, mobile-responsive websites, and mobile apps that work efficiently on various devices and network conditions.

**2. Cloud Infrastructure**
Cloud adoption allows African businesses to access enterprise-grade technology without massive upfront investments. This levels the playing field, enabling small and medium enterprises to compete with larger corporations.

**3. Data-Driven Decision Making**
Implementing analytics and business intelligence tools helps businesses understand customer behavior, optimize operations, and identify new market opportunities.

## Implementation Roadmap

### Phase 1: Assessment and Planning (Months 1-2)
- Conduct digital maturity assessment
- Identify key business processes for digitization
- Set clear objectives and KPIs
- Allocate budget and resources

### Phase 2: Foundation Building (Months 3-6)
- Implement core digital infrastructure
- Train staff on new technologies
- Establish data governance policies
- Begin customer-facing digital initiatives

### Phase 3: Optimization and Scaling (Months 7-12)
- Analyze performance data
- Optimize processes based on insights
- Scale successful initiatives
- Explore advanced technologies like AI and IoT

## Success Stories

**Case Study: Retail Chain Transformation**
A major retail chain in Ghana increased revenue by 40% after implementing an integrated ERP system, mobile POS solutions, and customer analytics platform. The transformation enabled better inventory management, improved customer experience, and data-driven decision making.

**Case Study: Manufacturing Efficiency**
A Nigerian manufacturing company reduced operational costs by 30% through IoT sensors, predictive maintenance, and automated reporting systems. The digital transformation improved equipment uptime and reduced waste.

## Overcoming Common Challenges

**Infrastructure Limitations**
- Invest in reliable internet connectivity
- Implement offline-capable solutions
- Use cloud services with local data centers

**Skills Gap**
- Partner with technology providers for training
- Hire digital natives
- Invest in continuous learning programs

**Change Resistance**
- Communicate benefits clearly
- Involve employees in the transformation process
- Celebrate early wins

## The Role of Local Technology Partners

Working with local technology partners like Binapulse Technologies offers several advantages:
- Understanding of local market conditions
- Compliance with local regulations
- Ongoing support in local time zones
- Cultural alignment and communication

## Conclusion

Digital transformation is not a destination but a continuous journey. African businesses that start this journey now will be better positioned to capitalize on emerging opportunities and build sustainable competitive advantages. The key is to start with a clear strategy, choose the right technology partners, and remain committed to continuous improvement.

Ready to begin your digital transformation journey? Contact our experts for a free consultation and assessment of your current digital maturity.`,author:"Samuel Mensah",date:"2025-01-15",readTime:"8 min read",category:"Digital Transformation",tags:["Digital Transformation","African Business","Technology Strategy","Business Growth"],image:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!0,views:2847},{id:2,title:"AI Agents vs Traditional Automation: Why Smart Businesses Are Making the Switch",slug:"ai-agents-vs-traditional-automation-smart-business-switch",excerpt:"Explore the key differences between AI agents and traditional automation, and discover why forward-thinking businesses are investing in intelligent automation solutions.",content:`The automation landscape is evolving rapidly, and businesses face a critical decision: stick with traditional automation or embrace the power of AI agents. Understanding the differences between these approaches is crucial for making informed technology investments.

## Traditional Automation: The Foundation

Traditional automation has served businesses well for decades. It excels at:
- Repetitive, rule-based tasks
- Predictable workflows
- Simple data processing
- Basic decision trees

However, traditional automation has limitations:
- Requires explicit programming for every scenario
- Cannot adapt to unexpected situations
- Limited learning capabilities
- Breaks down when faced with exceptions

## AI Agents: The Next Evolution

AI agents represent a significant leap forward in automation technology. They offer:

### Intelligent Decision Making
Unlike traditional automation, AI agents can analyze context, understand nuances, and make intelligent decisions based on data patterns and learned experiences.

### Adaptive Learning
AI agents continuously learn from interactions and outcomes, improving their performance over time without manual reprogramming.

### Natural Language Processing
Modern AI agents can understand and respond to human language, making them ideal for customer service, content creation, and communication tasks.

### Exception Handling
When faced with unexpected scenarios, AI agents can reason through problems and find solutions, rather than simply failing or requiring human intervention.

## Key Comparison Areas

### 1. Flexibility and Adaptability
**Traditional Automation:** Rigid, requires reprogramming for changes
**AI Agents:** Adaptive, learns and adjusts automatically

### 2. Implementation Complexity
**Traditional Automation:** Simpler initial setup, complex maintenance
**AI Agents:** More complex initial setup, self-improving maintenance

### 3. Cost Considerations
**Traditional Automation:** Lower upfront costs, higher long-term maintenance
**AI Agents:** Higher initial investment, lower long-term operational costs

### 4. ROI Timeline
**Traditional Automation:** Immediate but limited returns
**AI Agents:** Longer payback period but exponentially growing returns

## Real-World Applications

### Customer Service
**Traditional:** Basic chatbots with scripted responses
**AI Agents:** Intelligent assistants that understand context, emotion, and can handle complex queries

### Data Processing
**Traditional:** Rule-based data extraction and processing
**AI Agents:** Intelligent document processing that understands content meaning and context

### Business Process Management
**Traditional:** Workflow automation based on predefined rules
**AI Agents:** Dynamic process optimization based on real-time analysis and learning

## Implementation Strategy

### Phase 1: Assessment
- Identify processes suitable for AI automation
- Evaluate current automation infrastructure
- Define success metrics and ROI expectations

### Phase 2: Pilot Program
- Start with a single, well-defined use case
- Implement AI agent solution
- Monitor performance and gather feedback

### Phase 3: Scaling
- Expand successful AI agents to similar processes
- Integrate with existing systems
- Train staff on AI agent management

## Choosing the Right Approach

The decision between traditional automation and AI agents depends on several factors:

**Choose Traditional Automation When:**
- Processes are highly standardized
- Budget is limited
- Quick implementation is required
- Compliance requires predictable outcomes

**Choose AI Agents When:**
- Processes involve decision-making
- Customer interaction is involved
- Data analysis is required
- Long-term scalability is important

## The Hybrid Approach

Many successful businesses adopt a hybrid approach:
- Use traditional automation for simple, repetitive tasks
- Deploy AI agents for complex, decision-intensive processes
- Integrate both systems for comprehensive automation coverage

## Future Considerations

The AI agent landscape is evolving rapidly. Key trends to watch:
- Improved natural language capabilities
- Better integration with business systems
- Lower implementation costs
- Enhanced security and compliance features

## Conclusion

While traditional automation will continue to have its place, AI agents represent the future of business automation. Companies that begin exploring AI agent technology now will be better positioned to capitalize on its benefits as the technology matures.

The key is to start with a clear strategy, choose appropriate use cases, and work with experienced technology partners who understand both traditional automation and AI agent implementation.

Ready to explore AI agents for your business? Our team can help you assess your automation needs and develop a strategy that combines the best of both worlds.`,author:"Dr. Fatima Al-Hassan",date:"2025-01-12",readTime:"10 min read",category:"AI & Automation",tags:["AI Agents","Automation","Business Intelligence","Technology Comparison"],image:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!0,views:1923},{id:3,title:"Network Security Best Practices for Small and Medium Businesses in 2025",slug:"network-security-best-practices-smb-2025",excerpt:"Comprehensive guide to implementing robust network security measures that protect your business without breaking the budget. Learn essential security practices every SMB should implement.",content:`Network security is no longer just a concern for large enterprises. Small and medium businesses (SMBs) are increasingly targeted by cybercriminals, making robust security measures essential for business survival. This comprehensive guide outlines practical, cost-effective security strategies that every SMB should implement.

## The Current Threat Landscape

SMBs face unique security challenges:
- Limited IT budgets and resources
- Lack of dedicated security personnel
- Increasing sophistication of cyber attacks
- Remote work security complexities
- Compliance requirements

### Common Threats Targeting SMBs:
- Ransomware attacks
- Phishing and social engineering
- Insider threats
- Unsecured remote access
- IoT device vulnerabilities

## Essential Network Security Components

### 1. Firewall Implementation
A properly configured firewall is your first line of defense.

**Next-Generation Firewalls (NGFW) Features:**
- Application-aware filtering
- Intrusion prevention systems (IPS)
- Deep packet inspection
- VPN capabilities
- Centralized management

**Configuration Best Practices:**
- Default deny policy
- Regular rule reviews
- Logging and monitoring
- Firmware updates

### 2. Secure Wi-Fi Networks
Wireless networks present unique security challenges.

**Wi-Fi Security Essentials:**
- WPA3 encryption (minimum WPA2)
- Strong, unique passwords
- Guest network isolation
- Regular password rotation
- Hidden SSID (additional layer)

**Enterprise Wi-Fi Features:**
- 802.1X authentication
- Certificate-based access
- Network access control (NAC)
- Bandwidth management

### 3. Network Segmentation
Dividing your network into segments limits the impact of security breaches.

**Segmentation Strategies:**
- Separate guest and corporate networks
- Isolate IoT devices
- Create DMZ for public-facing services
- Implement VLAN separation
- Micro-segmentation for critical assets

## Access Control and Authentication

### Multi-Factor Authentication (MFA)
MFA significantly reduces the risk of unauthorized access.

**Implementation Areas:**
- VPN access
- Administrative accounts
- Cloud services
- Email systems
- Critical applications

### Zero Trust Architecture
Adopt a "never trust, always verify" approach.

**Zero Trust Principles:**
- Verify every user and device
- Least privilege access
- Continuous monitoring
- Assume breach mentality
- Encrypt all communications

## Monitoring and Incident Response

### Security Information and Event Management (SIEM)
Centralized logging and monitoring are crucial for threat detection.

**SIEM Benefits:**
- Real-time threat detection
- Compliance reporting
- Incident investigation
- Automated responses
- Threat intelligence integration

### Incident Response Planning
Prepare for security incidents before they occur.

**Response Plan Components:**
- Incident classification
- Response team roles
- Communication procedures
- Recovery processes
- Lessons learned documentation

## Employee Security Training

### Security Awareness Programs
Employees are often the weakest link in security.

**Training Topics:**
- Phishing recognition
- Password security
- Social engineering tactics
- Incident reporting procedures
- Remote work security

### Regular Testing
Conduct simulated attacks to test employee awareness.

**Testing Methods:**
- Phishing simulations
- Social engineering tests
- Physical security assessments
- Security policy compliance checks

## Backup and Recovery

### 3-2-1 Backup Strategy
Implement a comprehensive backup strategy.

**3-2-1 Rule:**
- 3 copies of important data
- 2 different storage media
- 1 offsite backup

**Backup Best Practices:**
- Regular backup testing
- Automated backup processes
- Encryption of backup data
- Air-gapped backups
- Recovery time objectives (RTO)

## Compliance Considerations

### Industry Regulations
Understand applicable compliance requirements.

**Common Frameworks:**
- ISO 27001
- NIST Cybersecurity Framework
- PCI DSS (for payment processing)
- GDPR (for EU data)
- Local data protection laws

### Documentation Requirements
Maintain proper security documentation.

**Required Documentation:**
- Security policies and procedures
- Risk assessments
- Incident reports
- Training records
- Audit trails

## Cost-Effective Security Solutions

### Cloud-Based Security Services
Leverage cloud services for enterprise-grade security.

**Cloud Security Benefits:**
- Lower upfront costs
- Automatic updates
- Scalable solutions
- Expert management
- Reduced complexity

### Managed Security Services
Consider outsourcing security operations.

**MSP Services:**
- 24/7 monitoring
- Threat detection and response
- Compliance management
- Security consulting
- Incident response

## Implementation Roadmap

### Phase 1: Foundation (Months 1-2)
- Conduct security assessment
- Implement basic firewall
- Secure Wi-Fi networks
- Deploy endpoint protection
- Establish backup procedures

### Phase 2: Enhancement (Months 3-4)
- Implement MFA
- Deploy network monitoring
- Conduct employee training
- Develop incident response plan
- Review and update policies

### Phase 3: Optimization (Months 5-6)
- Implement advanced threat detection
- Conduct penetration testing
- Optimize security processes
- Establish compliance procedures
- Plan for continuous improvement

## Measuring Security Effectiveness

### Key Performance Indicators (KPIs)
Track security metrics to measure effectiveness.

**Security Metrics:**
- Mean time to detection (MTTD)
- Mean time to response (MTTR)
- Number of security incidents
- Employee training completion rates
- Compliance audit results

## Conclusion

Network security for SMBs requires a balanced approach that considers budget constraints while providing adequate protection. The key is to start with fundamental security measures and gradually build a comprehensive security program.

Remember that security is not a one-time implementation but an ongoing process that requires regular review, updates, and improvements. Working with experienced security professionals can help ensure your security investments are effective and aligned with your business needs.

Ready to strengthen your network security? Contact our security experts for a comprehensive assessment and customized security strategy for your business.`,author:"David Osei",date:"2025-01-10",readTime:"12 min read",category:"Cybersecurity",tags:["Network Security","Cybersecurity","SMB Security","Best Practices"],image:"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:1654},{id:4,title:"Custom ERP vs Off-the-Shelf Solutions: Making the Right Choice for Your Business",slug:"custom-erp-vs-off-shelf-solutions-business-choice",excerpt:"Navigate the complex decision between custom ERP development and off-the-shelf solutions. Learn when to choose each option and how to maximize your ERP investment.",content:`Choosing the right Enterprise Resource Planning (ERP) solution is one of the most critical technology decisions a business can make. The choice between custom ERP development and off-the-shelf solutions can significantly impact your operations, costs, and competitive advantage. This comprehensive guide will help you make an informed decision.

## Understanding ERP Solutions

### What is an ERP System?
An ERP system integrates various business processes into a single, unified platform, including:
- Financial management
- Human resources
- Supply chain management
- Customer relationship management
- Inventory management
- Manufacturing processes

### The Two Main Approaches

**Off-the-Shelf ERP Solutions**
Pre-built software packages designed to serve multiple industries and business types.

**Custom ERP Solutions**
Tailor-made systems developed specifically for your business requirements and processes.

## Off-the-Shelf ERP Solutions

### Advantages

**1. Lower Initial Costs**
- Reduced development expenses
- Shared development costs across multiple users
- Predictable licensing fees

**2. Faster Implementation**
- Pre-built functionality
- Established implementation methodologies
- Existing documentation and training materials

**3. Proven Reliability**
- Tested by multiple organizations
- Regular updates and bug fixes
- Established vendor support

**4. Industry Best Practices**
- Incorporates proven business processes
- Compliance with industry standards
- Benchmarking against competitors

### Disadvantages

**1. Limited Customization**
- May not fit unique business processes
- Forced process changes
- Generic functionality

**2. Ongoing Licensing Costs**
- Recurring subscription fees
- Per-user pricing models
- Additional module costs

**3. Vendor Dependency**
- Reliance on vendor roadmap
- Limited control over updates
- Potential vendor lock-in

**4. Over-Engineering**
- Unnecessary features and complexity
- Higher resource requirements
- Steeper learning curve

## Custom ERP Solutions

### Advantages

**1. Perfect Fit**
- Designed for your specific processes
- Incorporates unique business rules
- Competitive advantage through customization

**2. Scalability**
- Built to grow with your business
- Flexible architecture
- Easy modification and enhancement

**3. Integration Capabilities**
- Seamless integration with existing systems
- Custom APIs and connectors
- Data consistency across platforms

**4. Ownership and Control**
- Complete control over functionality
- No vendor lock-in
- Intellectual property ownership

### Disadvantages

**1. Higher Initial Investment**
- Significant development costs
- Longer payback period
- Resource-intensive implementation

**2. Development Time**
- Longer implementation timeline
- Extensive testing requirements
- Potential delays and scope creep

**3. Maintenance Responsibility**
- Ongoing development and support costs
- Need for technical expertise
- Security and compliance updates

**4. Implementation Risks**
- Potential for project failure
- Requirement changes during development
- Technical challenges and complexities

## Decision Framework

### When to Choose Off-the-Shelf Solutions

**Business Characteristics:**
- Standard industry processes
- Limited customization requirements
- Budget constraints
- Quick implementation needs
- Small to medium-sized operations

**Scenarios:**
- Startup companies with standard processes
- Businesses in well-established industries
- Organizations with limited IT resources
- Companies needing quick ROI

### When to Choose Custom ERP

**Business Characteristics:**
- Unique business processes
- Complex integration requirements
- Competitive differentiation needs
- Large-scale operations
- Specific compliance requirements

**Scenarios:**
- Manufacturing with unique processes
- Multi-industry conglomerates
- Businesses with proprietary workflows
- Organizations with legacy system integration needs

## Hybrid Approach: Customized Off-the-Shelf

Many businesses find success with a hybrid approach:

### Configuration and Customization
- Extensive configuration of off-the-shelf solutions
- Custom modules for unique requirements
- Integration with existing systems
- Custom reporting and analytics

### Benefits of Hybrid Approach
- Balanced cost and functionality
- Faster implementation than full custom
- Reduced risk compared to full custom development
- Leverages vendor expertise while meeting specific needs

## Implementation Considerations

### Project Planning

**Requirements Analysis**
- Detailed business process mapping
- Stakeholder interviews and workshops
- Gap analysis between current and desired state
- Priority ranking of requirements

**Vendor Selection**
- Request for Proposal (RFP) process
- Vendor demonstrations and evaluations
- Reference checks and site visits
- Total cost of ownership analysis

### Change Management

**User Adoption Strategies**
- Comprehensive training programs
- Change champion networks
- Communication and awareness campaigns
- Incentive programs for adoption

**Process Optimization**
- Business process reengineering
- Workflow optimization
- Performance measurement
- Continuous improvement programs

## Cost Analysis Framework

### Total Cost of Ownership (TCO)

**Off-the-Shelf TCO Components:**
- Software licensing fees
- Implementation services
- Training and change management
- Ongoing support and maintenance
- Customization and integration costs

**Custom ERP TCO Components:**
- Development costs
- Infrastructure and hosting
- Testing and quality assurance
- Training and documentation
- Ongoing maintenance and support

### ROI Calculation

**Quantifiable Benefits:**
- Process efficiency improvements
- Reduced manual labor costs
- Inventory optimization savings
- Improved decision-making speed
- Compliance cost reductions

**Intangible Benefits:**
- Improved customer satisfaction
- Better data visibility
- Enhanced competitive advantage
- Increased agility and flexibility
- Risk reduction

## Success Factors

### Critical Success Factors for Any ERP Implementation

**1. Executive Sponsorship**
- Strong leadership commitment
- Adequate resource allocation
- Clear vision and objectives

**2. User Engagement**
- Early and continuous involvement
- Comprehensive training programs
- Feedback incorporation

**3. Data Quality**
- Clean and accurate master data
- Data migration planning
- Ongoing data governance

**4. Project Management**
- Experienced project team
- Clear milestones and deliverables
- Risk management processes

## Industry-Specific Considerations

### Manufacturing
- Complex bill of materials
- Production planning and scheduling
- Quality management systems
- Regulatory compliance requirements

### Retail
- Multi-channel inventory management
- Point-of-sale integration
- Customer loyalty programs
- Seasonal demand planning

### Professional Services
- Project-based accounting
- Resource allocation and scheduling
- Time and expense tracking
- Client relationship management

## Future-Proofing Your ERP Investment

### Technology Trends
- Cloud-native architectures
- Artificial intelligence integration
- Mobile-first design
- API-driven ecosystems

### Scalability Planning
- User growth accommodation
- Geographic expansion support
- New business line integration
- Acquisition and merger support

## Conclusion

The choice between custom ERP and off-the-shelf solutions depends on your specific business requirements, budget, timeline, and strategic objectives. There's no one-size-fits-all answer, but a thorough analysis of your needs and constraints will guide you to the right decision.

Key takeaways:
- Assess your unique requirements honestly
- Consider total cost of ownership, not just initial costs
- Evaluate your internal capabilities and resources
- Plan for long-term scalability and growth
- Choose experienced implementation partners

Whether you choose custom development, off-the-shelf solutions, or a hybrid approach, success depends on proper planning, stakeholder engagement, and ongoing commitment to the implementation process.

Ready to explore ERP options for your business? Our ERP specialists can help you assess your requirements and recommend the best approach for your specific situation.`,author:"Aisha Mohammed",date:"2025-01-08",readTime:"15 min read",category:"ERP Solutions",tags:["ERP","Custom Software","Business Systems","Technology Strategy"],image:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:2156},{id:5,title:"The Complete Guide to IT Infrastructure Planning for Growing Businesses",slug:"complete-guide-it-infrastructure-planning-growing-businesses",excerpt:"Strategic IT infrastructure planning guide for businesses experiencing growth. Learn how to build scalable, secure, and cost-effective IT systems that support expansion.",content:`As your business grows, your IT infrastructure needs evolve rapidly. What worked for a 10-person startup may not support a 100-person company. This comprehensive guide provides a strategic approach to IT infrastructure planning that scales with your business growth.

## Understanding IT Infrastructure Components

### Core Infrastructure Elements

**1. Network Infrastructure**
- Local Area Networks (LAN)
- Wide Area Networks (WAN)
- Internet connectivity
- Wireless networks
- Network security appliances

**2. Server Infrastructure**
- Physical servers
- Virtual servers
- Cloud services
- Storage systems
- Backup solutions

**3. End-User Computing**
- Desktop computers
- Laptops and mobile devices
- Peripherals and accessories
- Software licensing
- Support and maintenance

**4. Communication Systems**
- Voice over IP (VoIP)
- Video conferencing
- Unified communications
- Collaboration platforms
- Mobile communications

## Growth-Driven Planning Approach

### Phase 1: Current State Assessment

**Infrastructure Audit**
- Inventory existing hardware and software
- Assess current performance and capacity
- Identify bottlenecks and limitations
- Evaluate security posture
- Document current costs

**Business Requirements Analysis**
- Understand current business processes
- Identify technology dependencies
- Assess user needs and pain points
- Evaluate compliance requirements
- Determine budget constraints

### Phase 2: Future State Design

**Growth Projections**
- Employee growth forecasts
- Geographic expansion plans
- New product or service launches
- Market expansion strategies
- Technology trend considerations

**Scalability Planning**
- Capacity planning for growth
- Modular architecture design
- Cloud adoption strategy
- Automation opportunities
- Performance optimization

### Phase 3: Implementation Roadmap

**Prioritization Framework**
- Business impact assessment
- Technical complexity evaluation
- Resource requirement analysis
- Risk assessment
- ROI calculations

**Phased Implementation**
- Quick wins and immediate needs
- Medium-term improvements
- Long-term strategic initiatives
- Contingency planning
- Success metrics definition

## Network Infrastructure Planning

### Bandwidth Requirements

**Current Usage Analysis**
- Monitor existing bandwidth utilization
- Identify peak usage periods
- Analyze application bandwidth requirements
- Assess video conferencing needs
- Plan for cloud service usage

**Future Bandwidth Planning**
- Factor in employee growth
- Consider new applications
- Plan for increased cloud usage
- Account for video and collaboration tools
- Include redundancy requirements

### Network Architecture Design

**Hierarchical Network Design**
- Core layer for high-speed switching
- Distribution layer for policy enforcement
- Access layer for end-user connectivity
- DMZ for public-facing services
- Management network for administration

**Redundancy and Reliability**
- Multiple internet service providers
- Redundant network paths
- Failover mechanisms
- Load balancing
- Disaster recovery connectivity

## Server and Storage Planning

### On-Premises vs. Cloud Strategy

**On-Premises Advantages**
- Complete control over infrastructure
- Predictable performance
- Data sovereignty
- Customization flexibility
- One-time capital investment

**Cloud Advantages**
- Scalability and elasticity
- Reduced capital expenditure
- Automatic updates and maintenance
- Geographic distribution
- Disaster recovery capabilities

**Hybrid Approach Benefits**
- Best of both worlds
- Gradual migration path
- Risk mitigation
- Cost optimization
- Compliance flexibility

### Virtualization Strategy

**Server Virtualization**
- Improved hardware utilization
- Reduced physical footprint
- Simplified management
- Enhanced disaster recovery
- Cost savings

**Desktop Virtualization**
- Centralized management
- Enhanced security
- BYOD support
- Reduced hardware costs
- Simplified software deployment

## Security Infrastructure

### Layered Security Approach

**Perimeter Security**
- Next-generation firewalls
- Intrusion detection/prevention
- VPN concentrators
- Web application firewalls
- Email security gateways

**Internal Security**
- Network segmentation
- Access control systems
- Endpoint protection
- Data loss prevention
- Security monitoring

**User Security**
- Multi-factor authentication
- Identity and access management
- Security awareness training
- Privileged access management
- Mobile device management

### Compliance Considerations

**Regulatory Requirements**
- Data protection regulations
- Industry-specific compliance
- International standards
- Audit requirements
- Documentation needs

**Security Frameworks**
- NIST Cybersecurity Framework
- ISO 27001
- CIS Controls
- COBIT
- Industry-specific frameworks

## Communication Infrastructure

### Unified Communications

**VoIP Implementation**
- Cost savings over traditional telephony
- Advanced features and functionality
- Integration with business applications
- Scalability and flexibility
- Remote work support

**Collaboration Platforms**
- Video conferencing solutions
- Team collaboration tools
- Document sharing systems
- Project management platforms
- Mobile collaboration apps

### Integration Strategy

**System Integration**
- CRM integration
- ERP connectivity
- Email system integration
- Directory services
- Single sign-on (SSO)

## Capacity Planning and Performance Management

### Performance Monitoring

**Key Performance Indicators**
- Network utilization and latency
- Server performance metrics
- Application response times
- User experience measurements
- Security incident metrics

**Monitoring Tools**
- Network monitoring systems
- Server performance tools
- Application performance monitoring
- User experience analytics
- Security information and event management (SIEM)

### Capacity Planning Methodology

**Trend Analysis**
- Historical usage patterns
- Growth trend identification
- Seasonal variations
- Peak usage analysis
- Capacity threshold planning

**Predictive Modeling**
- Statistical forecasting
- Machine learning algorithms
- Scenario planning
- What-if analysis
- Risk assessment

## Budget Planning and Cost Management

### Capital vs. Operational Expenditure

**CapEx Considerations**
- Hardware purchases
- Software licensing
- Infrastructure investments
- Implementation costs
- Depreciation planning

**OpEx Benefits**
- Predictable monthly costs
- Reduced upfront investment
- Included maintenance and support
- Scalability flexibility
- Tax advantages

### Cost Optimization Strategies

**Right-Sizing Resources**
- Regular capacity reviews
- Unused resource identification
- Performance optimization
- Consolidation opportunities
- Automation implementation

**Vendor Management**
- Contract negotiation
- Volume discounts
- Multi-year agreements
- Service level agreements
- Performance penalties

## Implementation Best Practices

### Project Management

**Stakeholder Engagement**
- Executive sponsorship
- User involvement
- IT team participation
- Vendor coordination
- Change management

**Risk Management**
- Risk identification and assessment
- Mitigation strategies
- Contingency planning
- Regular risk reviews
- Issue escalation procedures

### Change Management

**Communication Strategy**
- Regular updates and progress reports
- Training and education programs
- Feedback collection and incorporation
- Success story sharing
- Resistance management

**Training and Support**
- Comprehensive training programs
- Documentation and knowledge base
- Help desk support
- User champions
- Ongoing education

## Measuring Success

### Key Performance Indicators

**Technical Metrics**
- System uptime and availability
- Performance improvements
- Security incident reduction
- User satisfaction scores
- Cost per user/transaction

**Business Metrics**
- Productivity improvements
- Revenue impact
- Cost savings
- Time to market
- Customer satisfaction

### Continuous Improvement

**Regular Reviews**
- Quarterly performance reviews
- Annual strategy assessments
- Technology trend analysis
- User feedback incorporation
- Vendor performance evaluation

**Optimization Opportunities**
- Process improvements
- Technology upgrades
- Cost optimization
- Security enhancements
- Performance tuning

## Future-Proofing Strategies

### Emerging Technologies

**Artificial Intelligence and Machine Learning**
- Predictive analytics
- Automated decision making
- Intelligent monitoring
- Process optimization
- Enhanced security

**Internet of Things (IoT)**
- Smart building systems
- Asset tracking
- Environmental monitoring
- Predictive maintenance
- Data collection and analysis

**Edge Computing**
- Reduced latency
- Improved performance
- Local data processing
- Bandwidth optimization
- Enhanced security

### Technology Trends

**Cloud-Native Architecture**
- Microservices design
- Container orchestration
- Serverless computing
- API-first approach
- DevOps integration

**Zero Trust Security**
- Never trust, always verify
- Continuous authentication
- Micro-segmentation
- Least privilege access
- Comprehensive monitoring

## Conclusion

Effective IT infrastructure planning is crucial for supporting business growth while maintaining security, performance, and cost-effectiveness. The key is to balance current needs with future requirements, ensuring your infrastructure can scale and adapt as your business evolves.

Key success factors:
- Align IT strategy with business objectives
- Plan for scalability from the beginning
- Invest in security and compliance
- Monitor and optimize continuously
- Stay informed about technology trends

Remember that IT infrastructure planning is not a one-time activity but an ongoing process that requires regular review and adjustment as your business grows and technology evolves.

Ready to plan your IT infrastructure for growth? Our infrastructure specialists can help you assess your current environment and develop a strategic roadmap for scalable, secure, and cost-effective IT systems.`,author:"Kwame Asante",date:"2025-01-05",readTime:"18 min read",category:"IT Infrastructure",tags:["IT Infrastructure","Business Growth","Technology Planning","Scalability"],image:"https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:1789},{id:6,title:"Cloud Migration Strategies: A Step-by-Step Guide for African Businesses",slug:"cloud-migration-strategies-guide-african-businesses",excerpt:"Comprehensive cloud migration guide tailored for African businesses. Learn proven strategies, overcome common challenges, and maximize the benefits of cloud adoption.",content:`Cloud migration is transforming how African businesses operate, offering unprecedented opportunities for growth, efficiency, and innovation. However, successful cloud migration requires careful planning, strategic thinking, and understanding of local market conditions. This comprehensive guide provides a roadmap for African businesses embarking on their cloud journey.

## Understanding Cloud Migration

### What is Cloud Migration?
Cloud migration is the process of moving digital business operations from on-premises infrastructure to cloud-based services. This includes:
- Applications and software
- Data and databases
- IT processes and workflows
- Infrastructure components
- Security and compliance systems

### Types of Cloud Migration

**1. Rehosting (Lift and Shift)**
- Moving applications to cloud without changes
- Fastest migration approach
- Minimal disruption to operations
- Limited cloud benefits realization

**2. Replatforming (Lift, Tinker, and Shift)**
- Minor optimizations for cloud environment
- Balanced approach between speed and benefits
- Some cloud-native features adoption
- Moderate complexity and risk

**3. Refactoring (Re-architecting)**
- Redesigning applications for cloud-native architecture
- Maximum cloud benefits realization
- Highest complexity and investment
- Long-term strategic approach

**4. Repurchasing (Drop and Shop)**
- Moving to different cloud-based products
- Often involves SaaS solutions
- Reduced maintenance overhead
- Potential feature limitations

**5. Retiring**
- Decommissioning unnecessary applications
- Cost reduction opportunity
- Simplified IT landscape
- Risk mitigation

**6. Retaining**
- Keeping certain applications on-premises
- Hybrid cloud approach
- Compliance or performance requirements
- Gradual migration strategy

## Cloud Migration Benefits for African Businesses

### Cost Optimization

**Reduced Capital Expenditure**
- Elimination of hardware purchases
- Reduced data center costs
- Lower maintenance expenses
- Predictable operational costs

**Operational Efficiency**
- Automated scaling and management
- Reduced IT staff requirements
- Improved resource utilization
- Energy cost savings

### Enhanced Scalability

**Elastic Resources**
- Scale up or down based on demand
- Handle seasonal business fluctuations
- Support rapid business growth
- Pay-as-you-use model

**Geographic Expansion**
- Deploy services in multiple regions
- Serve customers globally
- Reduce latency for users
- Comply with local data regulations

### Improved Reliability

**High Availability**
- 99.9%+ uptime guarantees
- Redundant infrastructure
- Automatic failover capabilities
- Disaster recovery built-in

**Data Protection**
- Automated backups
- Geographic data replication
- Advanced security measures
- Compliance certifications

## African Market Considerations

### Connectivity Challenges

**Internet Infrastructure**
- Variable internet quality and speed
- Higher latency to global cloud regions
- Bandwidth cost considerations
- Reliability concerns

**Solutions and Mitigation**
- Choose cloud providers with local presence
- Implement hybrid cloud architectures
- Optimize applications for low bandwidth
- Use content delivery networks (CDNs)

### Regulatory Compliance

**Data Sovereignty**
- Local data residency requirements
- Cross-border data transfer restrictions
- Industry-specific regulations
- Privacy law compliance

**Compliance Strategies**
- Select cloud providers with local data centers
- Implement data classification systems
- Establish data governance policies
- Regular compliance audits

### Skills and Expertise

**Technical Skills Gap**
- Limited cloud expertise locally
- Need for training and development
- Dependence on external consultants
- Knowledge transfer requirements

**Capacity Building**
- Invest in staff training programs
- Partner with experienced cloud providers
- Engage local system integrators
- Develop internal cloud competencies

## Pre-Migration Planning

### Business Case Development

**Cost-Benefit Analysis**
- Current IT costs assessment
- Cloud migration investment requirements
- Projected cost savings and benefits
- Return on investment calculations

**Risk Assessment**
- Technical migration risks
- Business continuity risks
- Security and compliance risks
- Vendor lock-in considerations

### Application Assessment

**Application Inventory**
- Catalog all applications and systems
- Document dependencies and integrations
- Assess technical architecture
- Evaluate business criticality

**Migration Readiness**
- Technical compatibility assessment
- Performance requirements analysis
- Security and compliance evaluation
- Integration complexity review

### Infrastructure Analysis

**Current State Documentation**
- Network architecture mapping
- Server and storage inventory
- Security configuration review
- Performance baseline establishment

**Target State Design**
- Cloud architecture planning
- Service selection and sizing
- Network connectivity design
- Security framework development

## Migration Strategy Development

### Phased Migration Approach

**Phase 1: Foundation (Months 1-3)**
- Cloud account setup and configuration
- Network connectivity establishment
- Security framework implementation
- Pilot application migration

**Phase 2: Core Systems (Months 4-8)**
- Business-critical application migration
- Data migration and synchronization
- Integration testing and validation
- User training and change management

**Phase 3: Optimization (Months 9-12)**
- Performance optimization
- Cost optimization initiatives
- Advanced feature adoption
- Continuous improvement processes

### Application Prioritization

**Migration Wave Planning**
- Low-risk applications first
- Business-critical systems second
- Complex integrations last
- Dependencies consideration

**Success Criteria**
- Performance benchmarks
- Availability targets
- Security requirements
- User satisfaction metrics

## Technical Implementation

### Data Migration Strategies

**Database Migration**
- Schema conversion and optimization
- Data transfer methods selection
- Synchronization and cutover planning
- Validation and testing procedures

**File and Object Storage**
- Content migration planning
- Bandwidth optimization
- Incremental synchronization
- Access pattern analysis

### Application Migration

**Containerization**
- Application containerization benefits
- Docker and Kubernetes adoption
- Microservices architecture
- DevOps integration

**API Integration**
- RESTful API development
- Legacy system integration
- Third-party service connections
- API security implementation

### Network Configuration

**Hybrid Connectivity**
- VPN connections setup
- Direct connect services
- Network segmentation
- Traffic routing optimization

**Security Implementation**
- Identity and access management
- Network security groups
- Encryption in transit and at rest
- Monitoring and logging

## Security and Compliance

### Cloud Security Framework

**Shared Responsibility Model**
- Cloud provider responsibilities
- Customer responsibilities
- Security control mapping
- Compliance verification

**Security Best Practices**
- Multi-factor authentication
- Least privilege access
- Regular security assessments
- Incident response planning

### Data Protection

**Encryption Strategies**
- Data encryption at rest
- Data encryption in transit
- Key management systems
- Certificate management

**Backup and Recovery**
- Automated backup policies
- Cross-region replication
- Recovery testing procedures
- Business continuity planning

## Cost Management and Optimization

### Cost Monitoring

**Usage Tracking**
- Resource utilization monitoring
- Cost allocation and chargeback
- Budget alerts and controls
- Regular cost reviews

**Optimization Strategies**
- Right-sizing resources
- Reserved instance planning
- Spot instance utilization
- Automated scaling policies

### Financial Management

**Budget Planning**
- Migration cost budgeting
- Operational cost forecasting
- ROI tracking and reporting
- Cost optimization initiatives

**Vendor Management**
- Contract negotiation
- Service level agreements
- Performance monitoring
- Relationship management

## Change Management and Training

### Stakeholder Engagement

**Executive Sponsorship**
- Leadership commitment
- Resource allocation
- Change advocacy
- Success communication

**User Adoption**
- Training program development
- Change champion networks
- Feedback collection
- Resistance management

### Training and Support

**Technical Training**
- Cloud platform training
- New tool and process training
- Certification programs
- Knowledge transfer sessions

**End-User Training**
- Application usage training
- New workflow training
- Self-service capabilities
- Support documentation

## Monitoring and Optimization

### Performance Monitoring

**Key Performance Indicators**
- Application performance metrics
- Infrastructure utilization
- User experience measurements
- Business impact indicators

**Monitoring Tools**
- Cloud-native monitoring services
- Third-party monitoring solutions
- Custom dashboard development
- Automated alerting systems

### Continuous Improvement

**Regular Reviews**
- Monthly performance reviews
- Quarterly cost optimization
- Annual strategy assessment
- Lessons learned documentation

**Optimization Initiatives**
- Performance tuning
- Cost reduction projects
- Security enhancements
- Feature adoption

## Common Challenges and Solutions

### Technical Challenges

**Legacy System Integration**
- API development and integration
- Data format conversion
- Protocol translation
- Performance optimization

**Network Latency**
- CDN implementation
- Edge computing adoption
- Application optimization
- Caching strategies

### Business Challenges

**Change Resistance**
- Communication and education
- Gradual transition approach
- Success story sharing
- Incentive programs

**Skills Gap**
- Training and development programs
- External expertise engagement
- Knowledge transfer planning
- Certification initiatives

## Success Metrics and KPIs

### Technical Metrics

**Performance Indicators**
- Application response times
- System availability and uptime
- Data transfer speeds
- Error rates and incidents

**Efficiency Metrics**
- Resource utilization rates
- Automation levels
- Deployment frequency
- Recovery times

### Business Metrics

**Financial Indicators**
- Total cost of ownership reduction
- Operational cost savings
- Revenue impact
- ROI achievement

**Operational Metrics**
- Time to market improvements
- Productivity gains
- Customer satisfaction
- Innovation velocity

## Future Considerations

### Emerging Technologies

**Artificial Intelligence and Machine Learning**
- AI/ML service adoption
- Predictive analytics implementation
- Intelligent automation
- Data-driven insights

**Internet of Things (IoT)**
- IoT platform integration
- Edge computing deployment
- Real-time data processing
- Predictive maintenance

### Technology Evolution

**Serverless Computing**
- Function-as-a-Service adoption
- Event-driven architectures
- Cost optimization benefits
- Scalability advantages

**Multi-Cloud Strategies**
- Vendor diversification
- Best-of-breed services
- Risk mitigation
- Negotiation leverage

## Conclusion

Cloud migration represents a significant opportunity for African businesses to modernize their IT infrastructure, reduce costs, and accelerate innovation. Success requires careful planning, strategic thinking, and commitment to change management.

Key success factors:
- Develop a comprehensive migration strategy
- Address local market challenges proactively
- Invest in skills development and training
- Focus on security and compliance
- Monitor and optimize continuously

The cloud migration journey is not just about technology transformation—it's about business transformation. Organizations that approach cloud migration strategically will be better positioned to compete in the digital economy and serve their customers more effectively.

Ready to begin your cloud migration journey? Our cloud specialists can help you assess your current environment, develop a migration strategy, and execute a successful transition to the cloud.`,author:"Dr. Fatima Al-Hassan",date:"2025-01-03",readTime:"20 min read",category:"Cloud Computing",tags:["Cloud Migration","Digital Transformation","African Business","Cloud Strategy"],image:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:2341},{id:7,title:"Building Resilient Business Systems: Disaster Recovery and Business Continuity Planning",slug:"building-resilient-business-systems-disaster-recovery-continuity",excerpt:"Essential guide to building resilient business systems with comprehensive disaster recovery and business continuity planning. Protect your business from unexpected disruptions.",content:`In today's interconnected business environment, system failures, natural disasters, and cyber attacks can bring operations to a halt within minutes. Building resilient business systems with robust disaster recovery and business continuity plans is no longer optional—it's essential for survival. This comprehensive guide provides a framework for protecting your business from unexpected disruptions.

## Understanding Business Resilience

### What is Business Resilience?
Business resilience is the ability of an organization to adapt and respond to disruptions while maintaining continuous business operations and safeguarding people, assets, and overall brand equity.

### Key Components of Resilience

**1. Risk Assessment and Management**
- Identification of potential threats
- Impact analysis and probability assessment
- Risk mitigation strategies
- Continuous monitoring and review

**2. Business Continuity Planning**
- Critical business process identification
- Alternative operating procedures
- Resource allocation and management
- Communication strategies

**3. Disaster Recovery Planning**
- IT system recovery procedures
- Data backup and restoration
- Infrastructure redundancy
- Recovery time objectives

**4. Crisis Management**
- Incident response procedures
- Decision-making frameworks
- Communication protocols
- Stakeholder management

## Risk Assessment Framework

### Threat Identification

**Natural Disasters**
- Earthquakes and floods
- Severe weather events
- Power outages
- Infrastructure failures

**Cyber Threats**
- Ransomware attacks
- Data breaches
- System intrusions
- Denial of service attacks

**Human Factors**
- Key personnel loss
- Human error
- Sabotage or insider threats
- Skills and knowledge gaps

**Technology Failures**
- Hardware failures
- Software bugs and crashes
- Network outages
- Third-party service disruptions

### Impact Analysis

**Business Impact Assessment (BIA)**
- Revenue loss calculations
- Operational disruption costs
- Regulatory and compliance impacts
- Reputation and brand damage

**Recovery Time Objectives (RTO)**
- Maximum acceptable downtime
- Service level requirements
- Customer impact thresholds
- Regulatory compliance timeframes

**Recovery Point Objectives (RPO)**
- Maximum acceptable data loss
- Backup frequency requirements
- Data criticality classification
- Synchronization needs

### Risk Prioritization Matrix

**High Probability, High Impact**
- Immediate attention required
- Comprehensive mitigation strategies
- Regular monitoring and testing
- Executive-level oversight

**High Probability, Low Impact**
- Standard mitigation procedures
- Routine monitoring
- Operational-level management
- Cost-effective solutions

**Low Probability, High Impact**
- Contingency planning focus
- Insurance considerations
- Scenario planning exercises
- Strategic-level oversight

**Low Probability, Low Impact**
- Basic awareness and monitoring
- Minimal resource allocation
- Periodic review
- Standard procedures

## Business Continuity Planning

### Critical Business Process Identification

**Process Mapping**
- End-to-end process documentation
- Dependency identification
- Resource requirements analysis
- Performance metrics definition

**Criticality Assessment**
- Revenue impact evaluation
- Customer service impact
- Regulatory compliance requirements
- Operational dependencies

### Alternative Operating Procedures

**Workaround Strategies**
- Manual process alternatives
- Simplified procedures
- Reduced service levels
- Temporary solutions

**Resource Allocation**
- Personnel reassignment
- Equipment and facility alternatives
- Vendor and supplier alternatives
- Financial resource management

### Communication Planning

**Internal Communication**
- Employee notification systems
- Management reporting procedures
- Status update protocols
- Decision-making authorities

**External Communication**
- Customer communication strategies
- Vendor and supplier notifications
- Regulatory reporting requirements
- Media and public relations

## Disaster Recovery Planning

### IT Infrastructure Protection

**Data Backup Strategies**
- 3-2-1 backup rule implementation
- Automated backup procedures
- Offsite storage solutions
- Cloud backup services

**System Redundancy**
- Hardware redundancy planning
- Network path diversification
- Geographic distribution
- Load balancing and failover

### Recovery Procedures

**System Recovery Priorities**
- Critical system identification
- Recovery sequence planning
- Resource allocation priorities
- Testing and validation procedures

**Data Recovery Processes**
- Backup verification procedures
- Data restoration testing
- Integrity checking protocols
- Version control management

### Technology Solutions

**High Availability Systems**
- Clustering and load balancing
- Real-time data replication
- Automatic failover mechanisms
- Performance monitoring

**Cloud-Based Recovery**
- Infrastructure as a Service (IaaS)
- Disaster Recovery as a Service (DRaaS)
- Backup as a Service (BaaS)
- Hybrid cloud solutions

## Implementation Framework

### Phase 1: Planning and Assessment (Months 1-2)

**Risk Assessment**
- Comprehensive threat analysis
- Business impact assessment
- Current capability evaluation
- Gap analysis and recommendations

**Strategy Development**
- Recovery strategy selection
- Resource requirement planning
- Budget allocation and approval
- Timeline and milestone definition

### Phase 2: Infrastructure Development (Months 3-6)

**Technical Implementation**
- Backup system deployment
- Redundancy implementation
- Recovery site establishment
- Network and security configuration

**Process Development**
- Procedure documentation
- Workflow design and testing
- Training material development
- Communication system setup

### Phase 3: Testing and Validation (Months 7-8)

**Testing Program**
- Tabletop exercises
- Functional testing
- Full-scale simulations
- Third-party assessments

**Validation and Refinement**
- Test result analysis
- Procedure refinement
- Performance optimization
- Documentation updates

### Phase 4: Training and Awareness (Months 9-10)

**Staff Training**
- Role-specific training programs
- Emergency response procedures
- Communication protocols
- Decision-making authorities

**Awareness Programs**
- Organization-wide awareness
- Regular refresher training
- Simulation exercises
- Performance feedback

### Phase 5: Maintenance and Improvement (Ongoing)

**Regular Reviews**
- Annual plan reviews
- Quarterly testing schedules
- Monthly monitoring reports
- Continuous improvement initiatives

**Updates and Maintenance**
- Technology updates
- Procedure modifications
- Staff changes accommodation
- Regulatory compliance updates

## Technology Solutions for Resilience

### Backup and Recovery Technologies

**Traditional Backup Solutions**
- Tape backup systems
- Disk-based backup
- Network-attached storage (NAS)
- Storage area networks (SAN)

**Modern Backup Technologies**
- Cloud backup services
- Continuous data protection
- Snapshot technologies
- Deduplication and compression

### High Availability Solutions

**Server Clustering**
- Active-passive clustering
- Active-active clustering
- Load balancing
- Automatic failover

**Database Replication**
- Synchronous replication
- Asynchronous replication
- Multi-master replication
- Geographic distribution

### Virtualization and Cloud

**Virtual Infrastructure**
- Server virtualization
- Storage virtualization
- Network virtualization
- Desktop virtualization

**Cloud Services**
- Public cloud solutions
- Private cloud deployment
- Hybrid cloud architectures
- Multi-cloud strategies

## Testing and Validation

### Testing Methodologies

**Tabletop Exercises**
- Scenario-based discussions
- Decision-making simulations
- Communication testing
- Process validation

**Functional Testing**
- Individual component testing
- System integration testing
- Performance validation
- Recovery time measurement

**Full-Scale Simulations**
- Complete system failover
- End-to-end process testing
- Real-world scenario simulation
- Stakeholder involvement

### Testing Schedule

**Regular Testing Frequency**
- Monthly component testing
- Quarterly functional testing
- Annual full-scale simulations
- Ad-hoc scenario testing

**Documentation and Reporting**
- Test plan documentation
- Results analysis and reporting
- Issue identification and resolution
- Improvement recommendations

## Compliance and Regulatory Considerations

### Industry Regulations

**Financial Services**
- Basel III requirements
- Solvency regulations
- Data protection laws
- Operational risk management

**Healthcare**
- HIPAA compliance
- Patient data protection
- Medical device regulations
- Emergency preparedness requirements

**Manufacturing**
- Safety regulations
- Environmental compliance
- Supply chain requirements
- Quality management standards

### Compliance Framework

**Documentation Requirements**
- Policy and procedure documentation
- Risk assessment reports
- Testing and validation records
- Incident response documentation

**Audit and Reporting**
- Regular compliance audits
- Regulatory reporting requirements
- Third-party assessments
- Continuous monitoring

## Cost Considerations and ROI

### Investment Areas

**Technology Infrastructure**
- Backup and recovery systems
- Redundant hardware and software
- Network and security infrastructure
- Cloud services and subscriptions

**Process and People**
- Planning and documentation
- Training and awareness programs
- Testing and validation activities
- Ongoing maintenance and support

### Cost-Benefit Analysis

**Quantifiable Benefits**
- Reduced downtime costs
- Avoided revenue losses
- Lower insurance premiums
- Regulatory compliance savings

**Intangible Benefits**
- Improved customer confidence
- Enhanced reputation
- Competitive advantage
- Peace of mind

### ROI Calculation

**Cost Avoidance Model**
- Potential loss calculations
- Probability assessments
- Risk reduction quantification
- Investment payback analysis

## Vendor and Third-Party Management

### Vendor Risk Assessment

**Supplier Evaluation**
- Financial stability assessment
- Service capability evaluation
- Security and compliance review
- Business continuity planning

**Contract Management**
- Service level agreements
- Recovery time commitments
- Penalty and incentive clauses
- Regular performance reviews

### Third-Party Dependencies

**Critical Vendor Identification**
- Service dependency mapping
- Alternative vendor evaluation
- Contingency planning
- Relationship management

**Supply Chain Resilience**
- Supplier diversification
- Geographic distribution
- Inventory management
- Alternative sourcing strategies

## Emerging Trends and Technologies

### Artificial Intelligence and Machine Learning

**Predictive Analytics**
- Failure prediction models
- Risk assessment automation
- Performance optimization
- Proactive maintenance

**Automated Response**
- Intelligent incident response
- Automated recovery procedures
- Dynamic resource allocation
- Self-healing systems

### Edge Computing

**Distributed Resilience**
- Local processing capabilities
- Reduced dependency on central systems
- Improved response times
- Enhanced data protection

### Blockchain Technology

**Data Integrity**
- Immutable audit trails
- Distributed data storage
- Smart contract automation
- Trust and verification

## Measuring Success

### Key Performance Indicators

**Availability Metrics**
- System uptime percentages
- Mean time between failures (MTBF)
- Mean time to recovery (MTTR)
- Service level achievement

**Recovery Metrics**
- Recovery time objectives achievement
- Recovery point objectives achievement
- Data loss measurements
- Process recovery success rates

### Continuous Improvement

**Performance Analysis**
- Regular metric reviews
- Trend analysis
- Benchmark comparisons
- Gap identification

**Improvement Initiatives**
- Process optimization
- Technology upgrades
- Training enhancements
- Cost optimization

## Conclusion

Building resilient business systems requires a comprehensive approach that combines risk assessment, business continuity planning, disaster recovery preparation, and continuous improvement. The investment in resilience pays dividends not only during crisis situations but also in improved operational efficiency, customer confidence, and competitive advantage.

Key success factors:
- Comprehensive risk assessment and planning
- Regular testing and validation
- Continuous improvement and updates
- Strong leadership and organizational commitment
- Integration with overall business strategy

Remember that resilience is not a destination but a journey. As your business evolves and new threats emerge, your resilience strategies must adapt and improve. The organizations that invest in building truly resilient systems will be better positioned to thrive in an increasingly uncertain world.

Ready to build resilience into your business systems? Our business continuity specialists can help you assess your current resilience posture and develop comprehensive plans to protect your organization from unexpected disruptions.`,author:"David Osei",date:"2025-01-01",readTime:"22 min read",category:"Business Continuity",tags:["Disaster Recovery","Business Continuity","Risk Management","System Resilience"],image:"https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:1432},{id:8,title:"The ROI of Custom Software Development: Measuring Success Beyond Initial Investment",slug:"roi-custom-software-development-measuring-success-investment",excerpt:"Learn how to calculate and maximize the return on investment for custom software development projects. Discover metrics, methodologies, and strategies for long-term success.",content:`Custom software development represents a significant investment for most businesses, often requiring substantial upfront costs and resources. However, when executed properly, custom software can deliver exceptional returns that far exceed the initial investment. This comprehensive guide explores how to measure, calculate, and maximize the ROI of custom software development projects.

## Understanding ROI in Software Development

### What is Software Development ROI?
Return on Investment (ROI) in software development measures the financial benefit gained from a software project relative to its cost. Unlike traditional ROI calculations, software ROI often includes both quantifiable financial returns and intangible benefits that contribute to long-term business success.

### Traditional ROI Formula
**ROI = (Gain from Investment - Cost of Investment) / Cost of Investment × 100**

### Software-Specific ROI Considerations
- Long-term value creation
- Intangible benefits quantification
- Ongoing operational improvements
- Competitive advantage gains
- Risk mitigation value

## Types of ROI in Custom Software Development

### Direct Financial ROI

**Cost Savings**
- Reduced operational expenses
- Eliminated licensing fees
- Decreased manual labor costs
- Lower error and rework costs

**Revenue Generation**
- New product or service offerings
- Improved customer acquisition
- Enhanced customer retention
- Market expansion opportunities

**Efficiency Gains**
- Faster process execution
- Reduced time-to-market
- Improved resource utilization
- Automated workflow benefits

### Indirect Financial ROI

**Risk Mitigation**
- Reduced security vulnerabilities
- Improved compliance adherence
- Decreased system downtime
- Better disaster recovery capabilities

**Strategic Advantages**
- Competitive differentiation
- Market positioning improvements
- Innovation capabilities
- Scalability benefits

**Organizational Benefits**
- Improved employee satisfaction
- Enhanced decision-making capabilities
- Better customer experience
- Increased agility and flexibility

## ROI Measurement Framework

### Pre-Development Assessment

**Baseline Establishment**
- Current process costs and timelines
- Existing system limitations and inefficiencies
- Manual effort requirements
- Error rates and associated costs

**Objective Setting**
- Specific, measurable goals
- Timeline expectations
- Success criteria definition
- Stakeholder alignment

### Development Phase Tracking

**Cost Monitoring**
- Development expenses tracking
- Resource allocation monitoring
- Timeline adherence measurement
- Scope change impact assessment

**Progress Indicators**
- Milestone achievement rates
- Quality metrics tracking
- Stakeholder satisfaction scores
- Risk mitigation progress

### Post-Implementation Measurement

**Performance Metrics**
- System performance improvements
- User adoption rates
- Process efficiency gains
- Error reduction measurements

**Business Impact Assessment**
- Revenue impact analysis
- Cost reduction quantification
- Productivity improvement measurement
- Customer satisfaction changes

## Quantifying Intangible Benefits

### Customer Experience Improvements

**Measurement Approaches**
- Customer satisfaction surveys
- Net Promoter Score (NPS) tracking
- Customer retention rate analysis
- Support ticket reduction

**Value Calculation**
- Customer lifetime value increases
- Acquisition cost reductions
- Churn rate improvements
- Upselling and cross-selling opportunities

### Employee Productivity and Satisfaction

**Productivity Metrics**
- Task completion time reductions
- Output quality improvements
- Multi-tasking capability enhancements
- Learning curve reductions

**Satisfaction Indicators**
- Employee engagement scores
- Turnover rate changes
- Training time reductions
- Job satisfaction surveys

### Competitive Advantage

**Market Position Indicators**
- Market share changes
- Competitive response analysis
- Innovation capability assessments
- Brand perception improvements

**Strategic Value Assessment**
- Time-to-market improvements
- Product differentiation capabilities
- Market expansion opportunities
- Partnership and collaboration enhancements

## ROI Calculation Methodologies

### Net Present Value (NPV) Analysis

**NPV Formula**
NPV = Σ(Cash Flow / (1 + Discount Rate)^Period) - Initial Investment

**Application to Software Projects**
- Multi-year benefit projection
- Risk-adjusted discount rates
- Ongoing maintenance cost considerations
- Technology refresh requirements

### Internal Rate of Return (IRR)

**IRR Calculation**
The discount rate that makes NPV equal to zero

**Software Project Considerations**
- Long-term value realization
- Compound benefit effects
- Technology lifecycle impacts
- Market condition changes

### Payback Period Analysis

**Simple Payback Period**
Initial Investment / Annual Cash Flow

**Discounted Payback Period**
Considers time value of money in calculations

**Software-Specific Factors**
- Learning curve impacts
- Adoption timeline considerations
- Benefit realization curves
- Maintenance and upgrade cycles

## Industry-Specific ROI Patterns

### Retail and E-commerce

**Common ROI Drivers**
- Inventory management improvements
- Customer experience enhancements
- Sales process automation
- Supply chain optimization

**Typical ROI Ranges**
- 200-400% over 3-5 years
- Payback periods of 12-24 months
- Strong correlation with customer satisfaction

### Manufacturing

**Key Value Areas**
- Production efficiency improvements
- Quality control enhancements
- Supply chain optimization
- Predictive maintenance capabilities

**ROI Characteristics**
- High initial investments
- Substantial long-term returns
- 300-600% ROI potential
- 18-36 month payback periods

### Healthcare

**Value Drivers**
- Patient care improvements
- Operational efficiency gains
- Compliance and safety enhancements
- Cost reduction opportunities

**ROI Considerations**
- Regulatory compliance benefits
- Risk mitigation value
- Patient outcome improvements
- Staff productivity gains

### Financial Services

**Primary Benefits**
- Risk management improvements
- Regulatory compliance automation
- Customer service enhancements
- Operational cost reductions

**ROI Patterns**
- High compliance value
- Risk mitigation benefits
- Customer retention improvements
- Operational efficiency gains

## Maximizing Software Development ROI

### Strategic Planning

**Requirements Optimization**
- Clear objective definition
- Stakeholder alignment
- Scope management
- Priority-based development

**Technology Selection**
- Future-proof architecture
- Scalability considerations
- Integration capabilities
- Maintenance requirements

### Development Best Practices

**Agile Methodology Benefits**
- Faster value delivery
- Reduced development risks
- Improved stakeholder satisfaction
- Better requirement adaptation

**Quality Assurance**
- Reduced post-deployment costs
- Improved user adoption
- Lower maintenance expenses
- Enhanced system reliability

### Change Management

**User Adoption Strategies**
- Comprehensive training programs
- Change champion networks
- Gradual rollout approaches
- Continuous support provision

**Process Optimization**
- Workflow redesign opportunities
- Automation potential identification
- Integration optimization
- Performance monitoring

## Common ROI Pitfalls and How to Avoid Them

### Unrealistic Expectations

**Common Mistakes**
- Overly optimistic benefit projections
- Underestimated implementation timelines
- Ignored change management costs
- Inadequate risk assessment

**Prevention Strategies**
- Conservative benefit estimates
- Comprehensive cost analysis
- Realistic timeline planning
- Thorough risk evaluation

### Inadequate Measurement

**Measurement Failures**
- Lack of baseline data
- Insufficient tracking mechanisms
- Inconsistent measurement approaches
- Limited stakeholder involvement

**Improvement Approaches**
- Establish clear baselines
- Implement comprehensive tracking
- Use consistent methodologies
- Engage all stakeholders

### Scope Creep Impact

**ROI Erosion Factors**
- Uncontrolled feature additions
- Timeline extensions
- Resource allocation increases
- Quality compromises

**Management Strategies**
- Strict change control processes
- Regular scope reviews
- Stakeholder communication
- Value-based prioritization

## Long-Term ROI Optimization

### Continuous Improvement

**Performance Monitoring**
- Regular system performance reviews
- User feedback collection
- Process efficiency analysis
- Technology trend assessment

**Enhancement Opportunities**
- Feature additions and improvements
- Integration expansions
- Performance optimizations
- User experience enhancements

### Technology Evolution

**Upgrade Planning**
- Technology refresh strategies
- Compatibility maintenance
- Security update management
- Performance optimization

**Innovation Integration**
- Emerging technology adoption
- AI and machine learning integration
- Cloud migration benefits
- Mobile and IoT capabilities

## ROI Reporting and Communication

### Stakeholder Communication

**Executive Reporting**
- High-level ROI summaries
- Strategic impact assessments
- Competitive advantage analysis
- Future investment recommendations

**Operational Reporting**
- Detailed performance metrics
- Process improvement documentation
- User adoption statistics
- Technical performance data

### Documentation Best Practices

**ROI Documentation**
- Comprehensive calculation methodologies
- Assumption documentation
- Risk factor identification
- Sensitivity analysis results

**Success Story Development**
- Case study creation
- Lesson learned documentation
- Best practice identification
- Knowledge sharing facilitation

## Future Trends in Software ROI

### Artificial Intelligence Integration

**AI-Enhanced ROI**
- Predictive analytics capabilities
- Automated decision-making benefits
- Intelligent process optimization
- Enhanced user experiences

### Cloud-Native Development

**Cloud ROI Advantages**
- Reduced infrastructure costs
- Improved scalability benefits
- Enhanced reliability and availability
- Faster deployment capabilities

### Low-Code/No-Code Platforms

**Development Efficiency**
- Reduced development costs
- Faster time-to-market
- Improved business user involvement
- Lower maintenance requirements

## Conclusion

Measuring and maximizing the ROI of custom software development requires a comprehensive approach that considers both quantifiable financial returns and intangible strategic benefits. Success depends on careful planning, realistic expectations, thorough measurement, and continuous optimization.

Key success factors for maximizing software development ROI:
- Establish clear objectives and success criteria
- Implement comprehensive measurement frameworks
- Focus on user adoption and change management
- Continuously monitor and optimize performance
- Communicate value effectively to stakeholders

Remember that software ROI is not just about the initial return—it's about creating long-term value that compounds over time. Organizations that approach custom software development with a strategic, measurement-focused mindset will be better positioned to realize exceptional returns on their technology investments.

The most successful software projects are those that deliver immediate operational benefits while building a foundation for future innovation and growth. By following the frameworks and best practices outlined in this guide, you can ensure your custom software development investments deliver maximum value to your organization.

Ready to maximize the ROI of your software development projects? Our development team can help you plan, implement, and measure custom software solutions that deliver exceptional returns on your technology investments.`,author:"Samuel Mensah",date:"2024-12-28",readTime:"16 min read",category:"Software Development",tags:["ROI","Custom Software","Business Value","Investment Analysis"],image:"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:1876},{id:9,title:"Cybersecurity Trends 2025: Protecting Your Business in an Evolving Threat Landscape",slug:"cybersecurity-trends-2025-protecting-business-evolving-threats",excerpt:"Stay ahead of emerging cybersecurity threats with our comprehensive guide to 2025 security trends. Learn about new attack vectors, defense strategies, and protection technologies.",content:`The cybersecurity landscape continues to evolve at an unprecedented pace, with new threats emerging as quickly as defenses are developed. As we move through 2025, businesses face increasingly sophisticated attacks while navigating complex regulatory requirements and technological changes. This comprehensive guide explores the key cybersecurity trends shaping 2025 and provides actionable strategies for protecting your business.

## The Current Threat Landscape

### Evolving Attack Vectors

**AI-Powered Attacks**
Cybercriminals are leveraging artificial intelligence to create more sophisticated and targeted attacks:
- AI-generated phishing emails that are nearly indistinguishable from legitimate communications
- Deepfake technology used for social engineering and fraud
- Automated vulnerability discovery and exploitation
- Machine learning-powered password cracking and credential stuffing

**Supply Chain Attacks**
Attacks targeting the software supply chain have become increasingly common:
- Third-party vendor compromises affecting multiple organizations
- Open-source software vulnerabilities exploited at scale
- Hardware-level attacks through compromised components
- Cloud service provider security breaches

**Ransomware Evolution**
Ransomware attacks have become more targeted and destructive:
- Double and triple extortion tactics
- Ransomware-as-a-Service (RaaS) proliferation
- Targeting of critical infrastructure and healthcare
- Cryptocurrency-enabled payment systems

### Emerging Threat Categories

**Cloud-Native Attacks**
As businesses migrate to cloud environments, new attack vectors emerge:
- Container and Kubernetes security vulnerabilities
- Serverless function exploitation
- Cloud misconfigurations and exposed databases
- Identity and access management weaknesses

**IoT and Edge Computing Threats**
The proliferation of connected devices creates new security challenges:
- Unsecured IoT devices as entry points
- Edge computing infrastructure vulnerabilities
- 5G network security concerns
- Industrial IoT (IIoT) targeted attacks

**Quantum Computing Implications**
While still emerging, quantum computing poses future cryptographic challenges:
- Current encryption method vulnerabilities
- Post-quantum cryptography development needs
- Timeline for quantum threat realization
- Preparation strategies for quantum-safe security

## Key Cybersecurity Trends for 2025

### 1. Zero Trust Architecture Mainstream Adoption

**Zero Trust Principles**
- Never trust, always verify
- Least privilege access
- Continuous monitoring and validation
- Assume breach mentality

**Implementation Strategies**
- Identity-centric security models
- Micro-segmentation of networks
- Continuous authentication and authorization
- Comprehensive logging and monitoring

**Business Benefits**
- Reduced attack surface
- Improved compliance posture
- Enhanced visibility and control
- Better remote work security

### 2. AI and Machine Learning in Cybersecurity

**Defensive AI Applications**
- Threat detection and response automation
- Behavioral analysis and anomaly detection
- Predictive threat intelligence
- Automated incident response

**AI Security Challenges**
- Adversarial AI attacks
- Model poisoning and data manipulation
- AI system vulnerabilities
- Ethical AI considerations

**Implementation Considerations**
- Data quality and training requirements
- False positive management
- Human oversight and validation
- Continuous model improvement

### 3. Extended Detection and Response (XDR)

**XDR Evolution**
- Integration of multiple security tools
- Unified threat detection and response
- Cross-platform visibility and correlation
- Automated investigation and remediation

**Key Components**
- Endpoint detection and response (EDR)
- Network detection and response (NDR)
- Cloud workload protection platforms (CWPP)
- Security information and event management (SIEM)

**Business Value**
- Reduced complexity and tool sprawl
- Improved threat detection accuracy
- Faster incident response times
- Lower total cost of ownership

### 4. Privacy-Enhancing Technologies (PETs)

**Technology Categories**
- Homomorphic encryption
- Secure multi-party computation
- Differential privacy
- Federated learning

**Business Applications**
- Data sharing without exposure
- Privacy-compliant analytics
- Secure collaboration
- Regulatory compliance enhancement

**Implementation Benefits**
- Enhanced data protection
- Improved customer trust
- Competitive advantage
- Regulatory compliance

### 5. Cybersecurity Mesh Architecture

**Mesh Architecture Principles**
- Distributed security perimeter
- Composable security services
- Identity-centric approach
- Scalable and flexible design

**Key Components**
- Security analytics and intelligence
- Distributed identity fabric
- Consolidated policy and posture management
- Integrated security dashboards

**Organizational Benefits**
- Improved security scalability
- Enhanced flexibility and agility
- Better support for hybrid environments
- Reduced complexity

## Industry-Specific Security Trends

### Financial Services

**Regulatory Developments**
- Enhanced data protection requirements
- Open banking security standards
- Cryptocurrency regulation impacts
- Cross-border data transfer restrictions

**Emerging Threats**
- Sophisticated financial fraud schemes
- API security vulnerabilities
- Mobile banking attack vectors
- Insider threat risks

**Protection Strategies**
- Advanced fraud detection systems
- API security gateways
- Behavioral biometrics
- Comprehensive employee monitoring

### Healthcare

**Unique Challenges**
- Medical device security vulnerabilities
- Patient data protection requirements
- Interoperability security concerns
- Telemedicine security risks

**Compliance Requirements**
- HIPAA and regional privacy laws
- Medical device regulations
- Interoperability standards
- Breach notification requirements

**Security Solutions**
- Medical device security platforms
- Healthcare-specific SIEM solutions
- Patient data encryption
- Secure communication platforms

### Manufacturing and Industrial

**Industrial IoT Security**
- Operational technology (OT) protection
- Industrial control system security
- Supply chain security
- Physical security integration

**Threat Landscape**
- Nation-state attacks on infrastructure
- Ransomware targeting production systems
- Intellectual property theft
- Sabotage and disruption attacks

**Protection Approaches**
- OT/IT network segmentation
- Industrial security monitoring
- Secure remote access solutions
- Incident response planning

## Regulatory and Compliance Trends

### Global Privacy Regulations

**Expanding Privacy Laws**
- GDPR enforcement evolution
- State-level privacy laws (CCPA, CDPA, etc.)
- Emerging market privacy regulations
- Cross-border data transfer requirements

**Compliance Implications**
- Data mapping and inventory requirements
- Privacy by design implementation
- Consent management systems
- Data subject rights automation

### Cybersecurity Regulations

**Critical Infrastructure Protection**
- Enhanced reporting requirements
- Mandatory security standards
- Incident response obligations
- Supply chain security requirements

**Industry-Specific Regulations**
- Financial services cybersecurity rules
- Healthcare security requirements
- Energy sector security standards
- Transportation security mandates

### International Cooperation

**Global Security Initiatives**
- International cybercrime cooperation
- Threat intelligence sharing
- Joint incident response efforts
- Standardization initiatives

## Technology and Solution Trends

### Cloud Security Evolution

**Cloud-Native Security**
- Container and Kubernetes security
- Serverless security solutions
- Cloud security posture management (CSPM)
- Cloud workload protection platforms (CWPP)

**Multi-Cloud Security**
- Unified security management
- Cross-cloud visibility and control
- Consistent policy enforcement
- Integrated threat detection

### Identity and Access Management

**Modern IAM Trends**
- Passwordless authentication
- Continuous authentication
- Identity governance and administration (IGA)
- Privileged access management (PAM)

**Emerging Technologies**
- Biometric authentication advances
- Blockchain-based identity
- Decentralized identity solutions
- Risk-based authentication

### Security Automation and Orchestration

**SOAR Platform Evolution**
- Enhanced automation capabilities
- Improved integration ecosystems
- AI-powered playbook optimization
- Self-healing security systems

**Benefits and Challenges**
- Reduced response times
- Improved consistency
- Skills gap mitigation
- Implementation complexity

## Building a Future-Ready Security Program

### Strategic Planning

**Risk Assessment and Management**
- Comprehensive threat modeling
- Business impact analysis
- Risk appetite definition
- Continuous risk monitoring

**Security Architecture Design**
- Zero trust implementation
- Defense in depth strategies
- Resilience and recovery planning
- Scalability considerations

### Technology Implementation

**Tool Selection Criteria**
- Integration capabilities
- Scalability and performance
- Vendor stability and support
- Total cost of ownership

**Implementation Best Practices**
- Phased deployment approaches
- Pilot testing and validation
- Change management processes
- Performance monitoring

### Organizational Capabilities

**Skills Development**
- Cybersecurity training programs
- Certification and professional development
- Cross-functional collaboration
- External expertise engagement

**Culture and Awareness**
- Security awareness training
- Incident reporting culture
- Executive leadership engagement
- Continuous improvement mindset

## Practical Implementation Strategies

### Short-Term Actions (0-6 months)

**Immediate Priorities**
- Security assessment and gap analysis
- Critical vulnerability remediation
- Employee security awareness training
- Incident response plan updates

**Quick Wins**
- Multi-factor authentication deployment
- Endpoint protection improvements
- Email security enhancements
- Backup and recovery testing

### Medium-Term Initiatives (6-18 months)

**Strategic Implementations**
- Zero trust architecture planning
- Security tool consolidation
- Advanced threat detection deployment
- Compliance program enhancement

**Capability Building**
- Security team expansion
- Skills development programs
- Process automation implementation
- Vendor relationship optimization

### Long-Term Vision (18+ months)

**Transformational Changes**
- AI-powered security operations
- Quantum-safe cryptography preparation
- Advanced threat hunting capabilities
- Integrated security ecosystem

**Continuous Evolution**
- Threat landscape monitoring
- Technology trend assessment
- Regulatory compliance adaptation
- Performance optimization

## Measuring Security Program Effectiveness

### Key Performance Indicators

**Technical Metrics**
- Mean time to detection (MTTD)
- Mean time to response (MTTR)
- Security incident frequency
- Vulnerability remediation times

**Business Metrics**
- Security investment ROI
- Business continuity maintenance
- Compliance audit results
- Customer trust indicators

### Continuous Improvement

**Regular Assessments**
- Annual security program reviews
- Quarterly threat landscape updates
- Monthly performance evaluations
- Continuous monitoring and adjustment

**Benchmarking and Maturity**
- Industry benchmark comparisons
- Security maturity assessments
- Best practice adoption
- Innovation integration

## Conclusion

The cybersecurity landscape of 2025 presents both significant challenges and unprecedented opportunities for organizations willing to invest in comprehensive security programs. Success requires a strategic approach that combines advanced technologies, skilled personnel, and strong organizational commitment to security.

Key success factors for 2025 cybersecurity:
- Embrace zero trust architecture principles
- Leverage AI and automation for defense
- Implement comprehensive threat detection and response
- Focus on privacy-enhancing technologies
- Build resilient and adaptable security programs

The organizations that thrive in 2025 will be those that view cybersecurity not as a cost center but as a strategic enabler of business growth and innovation. By staying informed about emerging trends, investing in the right technologies and capabilities, and maintaining a proactive security posture, businesses can protect themselves while capitalizing on new opportunities.

Remember that cybersecurity is not a destination but a continuous journey of adaptation and improvement. The threat landscape will continue to evolve, and successful organizations must be prepared to evolve with it.

Ready to strengthen your cybersecurity posture for 2025? Our security experts can help you assess your current capabilities, identify gaps, and develop a comprehensive strategy to protect your business in the evolving threat landscape.`,author:"Dr. Fatima Al-Hassan",date:"2024-12-25",readTime:"19 min read",category:"Cybersecurity",tags:["Cybersecurity","Security Trends","Threat Protection","2025 Predictions"],image:"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:2198},{id:10,title:"Scaling Your Business with Technology: A Strategic Roadmap for Growth",slug:"scaling-business-technology-strategic-roadmap-growth",excerpt:"Comprehensive guide to using technology as a growth enabler. Learn how to build scalable systems, optimize operations, and leverage technology for sustainable business expansion.",content:`Business growth is exciting, but it also presents unique challenges that can overwhelm unprepared organizations. Technology plays a crucial role in enabling sustainable growth by automating processes, improving efficiency, and providing the infrastructure needed to scale operations. This comprehensive guide provides a strategic roadmap for leveraging technology to scale your business effectively.

## Understanding Technology-Enabled Growth

### What is Technology-Enabled Scaling?
Technology-enabled scaling involves using digital tools, systems, and processes to support business growth without proportionally increasing costs, complexity, or resource requirements. It's about building systems that can handle increased volume, complexity, and geographic reach while maintaining or improving efficiency.

### Key Principles of Scalable Technology

**1. Automation First**
- Automate repetitive and time-consuming tasks
- Reduce human error and increase consistency
- Free up human resources for strategic activities
- Enable 24/7 operations

**2. Data-Driven Decision Making**
- Collect and analyze business data
- Use insights to guide strategic decisions
- Monitor performance and identify opportunities
- Predict and prepare for future needs

**3. Flexible and Modular Architecture**
- Build systems that can adapt to changing needs
- Use modular components that can be scaled independently
- Implement cloud-based solutions for elasticity
- Design for integration and interoperability

**4. Customer-Centric Technology**
- Focus on improving customer experience
- Use technology to better understand customer needs
- Provide self-service options and support
- Enable personalized interactions at scale

## Growth Challenges and Technology Solutions

### Common Scaling Challenges

**Operational Inefficiencies**
- Manual processes that don't scale
- Inconsistent quality and service delivery
- Communication and coordination difficulties
- Resource allocation and management issues

**Customer Service Limitations**
- Inability to maintain personal service at scale
- Longer response times and reduced quality
- Difficulty tracking customer interactions
- Limited self-service options

**Data and Information Management**
- Scattered data across multiple systems
- Lack of real-time visibility into operations
- Difficulty generating insights and reports
- Compliance and security concerns

**Financial and Resource Constraints**
- Limited capital for infrastructure investment
- Difficulty predicting and managing costs
- Inefficient resource utilization
- Cash flow and working capital challenges

### Technology Solutions Framework

**Process Automation**
- Workflow automation tools
- Robotic process automation (RPA)
- Business process management (BPM) systems
- Integration platforms and APIs

**Customer Relationship Management**
- CRM systems for customer data management
- Marketing automation platforms
- Customer service and support tools
- E-commerce and online sales platforms

**Data Analytics and Business Intelligence**
- Data warehousing and analytics platforms
- Business intelligence and reporting tools
- Predictive analytics and machine learning
- Real-time dashboards and monitoring

**Cloud Infrastructure and Services**
- Scalable computing and storage resources
- Platform-as-a-Service (PaaS) solutions
- Software-as-a-Service (SaaS) applications
- Infrastructure-as-a-Service (IaaS) platforms

## Strategic Technology Roadmap

### Phase 1: Foundation Building (Months 1-6)

**Assessment and Planning**
- Current state technology audit
- Business process mapping and analysis
- Growth objectives and requirements definition
- Technology strategy development

**Core System Implementation**
- Customer relationship management (CRM)
- Enterprise resource planning (ERP) or business management system
- Financial management and accounting systems
- Communication and collaboration platforms

**Data Infrastructure**
- Data collection and storage systems
- Basic reporting and analytics capabilities
- Data quality and governance processes
- Security and backup procedures

### Phase 2: Optimization and Integration (Months 7-12)

**Process Automation**
- Workflow automation implementation
- Integration between core systems
- Automated reporting and notifications
- Quality assurance and monitoring systems

**Customer Experience Enhancement**
- Self-service portals and applications
- Automated customer communication
- Personalization and recommendation engines
- Multi-channel customer support

**Advanced Analytics**
- Business intelligence and reporting tools
- Predictive analytics capabilities
- Performance monitoring and KPI tracking
- Market and competitive analysis tools

### Phase 3: Advanced Capabilities (Months 13-24)

**Artificial Intelligence and Machine Learning**
- AI-powered customer service and support
- Predictive maintenance and optimization
- Intelligent process automation
- Advanced analytics and insights

**Scalable Infrastructure**
- Cloud-native architecture implementation
- Microservices and containerization
- Auto-scaling and load balancing
- Global content delivery and edge computing

**Innovation and Differentiation**
- Custom application development
- API economy and ecosystem development
- Emerging technology experimentation
- Competitive advantage creation

## Technology Areas for Scaling

### Customer Acquisition and Marketing

**Digital Marketing Platforms**
- Marketing automation and lead nurturing
- Social media management and advertising
- Search engine optimization and marketing
- Content management and distribution

**Sales Enablement Tools**
- Sales force automation and CRM
- Lead scoring and qualification
- Proposal and contract management
- Sales performance analytics

**E-commerce and Online Presence**
- E-commerce platforms and marketplaces
- Mobile applications and responsive websites
- Payment processing and financial integration
- Inventory management and fulfillment

### Operations and Supply Chain

**Supply Chain Management**
- Supplier relationship management
- Inventory optimization and forecasting
- Logistics and transportation management
- Quality control and compliance tracking

**Manufacturing and Production**
- Manufacturing execution systems (MES)
- Internet of Things (IoT) and sensor networks
- Predictive maintenance and optimization
- Quality management and control systems

**Project and Resource Management**
- Project management and collaboration tools
- Resource planning and allocation systems
- Time tracking and productivity monitoring
- Performance management and optimization

### Financial Management and Control

**Financial Planning and Analysis**
- Budgeting and forecasting systems
- Financial reporting and analytics
- Cash flow management and optimization
- Risk management and compliance

**Accounting and Bookkeeping**
- Automated accounting and bookkeeping
- Expense management and approval workflows
- Tax compliance and reporting
- Audit trail and documentation

**Performance Monitoring**
- Key performance indicator (KPI) tracking
- Real-time financial dashboards
- Variance analysis and reporting
- Profitability analysis and optimization

### Human Resources and Talent Management

**Talent Acquisition and Management**
- Applicant tracking and recruitment systems
- Employee onboarding and training platforms
- Performance management and review systems
- Compensation and benefits administration

**Workforce Optimization**
- Workforce planning and scheduling
- Skills management and development
- Employee engagement and satisfaction monitoring
- Productivity tracking and optimization

**Compliance and Risk Management**
- HR compliance and policy management
- Employee data protection and privacy
- Workplace safety and incident tracking
- Legal and regulatory compliance

## Implementation Strategies

### Technology Selection Criteria

**Scalability and Performance**
- Ability to handle increased volume and complexity
- Performance under load and stress conditions
- Elastic scaling and resource optimization
- Future growth accommodation

**Integration and Compatibility**
- API availability and documentation
- Data import/export capabilities
- Third-party integration support
- Standards compliance and interoperability

**Total Cost of Ownership**
- Initial implementation and setup costs
- Ongoing licensing and subscription fees
- Maintenance and support expenses
- Training and change management costs

**Vendor Stability and Support**
- Vendor financial stability and market position
- Product roadmap and development commitment
- Support quality and responsiveness
- User community and ecosystem

### Implementation Best Practices

**Phased Approach**
- Start with high-impact, low-risk implementations
- Build momentum with early wins and successes
- Learn and adapt based on experience
- Scale successful implementations across the organization

**Change Management**
- Communicate vision and benefits clearly
- Involve stakeholders in planning and decision-making
- Provide comprehensive training and support
- Address resistance and concerns proactively

**Data Migration and Integration**
- Plan data migration carefully and thoroughly
- Ensure data quality and integrity
- Test integration points and workflows
- Maintain data backup and recovery procedures

**Performance Monitoring**
- Establish baseline metrics and KPIs
- Monitor system performance and user adoption
- Track business impact and ROI
- Continuously optimize and improve

## Measuring Success and ROI

### Key Performance Indicators

**Operational Efficiency**
- Process cycle time reduction
- Error rate and quality improvements
- Resource utilization optimization
- Cost per transaction or unit

**Customer Experience**
- Customer satisfaction and Net Promoter Score
- Response time and resolution rates
- Self-service adoption and success rates
- Customer retention and loyalty metrics

**Financial Performance**
- Revenue growth and profitability
- Cost reduction and savings
- Return on technology investment
- Cash flow and working capital improvements

**Growth Enablement**
- Market expansion and new customer acquisition
- Product and service innovation
- Time to market improvements
- Competitive advantage and differentiation

### ROI Calculation Framework

**Direct Benefits**
- Cost savings from automation and efficiency
- Revenue increases from improved capabilities
- Risk reduction and compliance benefits
- Resource optimization and productivity gains

**Indirect Benefits**
- Improved decision-making capabilities
- Enhanced customer and employee satisfaction
- Competitive advantage and market positioning
- Innovation and growth enablement

**Cost Considerations**
- Technology acquisition and implementation costs
- Training and change management expenses
- Ongoing maintenance and support costs
- Opportunity costs and resource allocation

## Common Pitfalls and How to Avoid Them

### Technology-First Approach

**The Problem**
- Selecting technology without understanding business needs
- Over-engineering solutions for current requirements
- Ignoring user experience and adoption challenges
- Focusing on features rather than outcomes

**Prevention Strategies**
- Start with business objectives and requirements
- Involve end users in selection and design processes
- Focus on solving specific business problems
- Prioritize user experience and adoption

### Underestimating Change Management

**The Problem**
- Insufficient training and support for users
- Resistance to new processes and systems
- Poor communication about changes and benefits
- Lack of leadership support and commitment

**Prevention Strategies**
- Develop comprehensive change management plans
- Provide extensive training and ongoing support
- Communicate benefits and progress regularly
- Ensure strong leadership sponsorship and involvement

### Integration and Data Challenges

**The Problem**
- Siloed systems that don't communicate
- Poor data quality and inconsistency
- Complex integration requirements
- Lack of data governance and standards

**Prevention Strategies**
- Plan for integration from the beginning
- Establish data quality and governance processes
- Use standard APIs and integration platforms
- Implement master data management practices

## Future-Proofing Your Technology Strategy

### Emerging Technology Trends

**Artificial Intelligence and Machine Learning**
- Automated decision-making and optimization
- Predictive analytics and forecasting
- Natural language processing and chatbots
- Computer vision and image recognition

**Internet of Things (IoT)**
- Connected devices and sensor networks
- Real-time monitoring and control
- Predictive maintenance and optimization
- Smart buildings and facilities

**Blockchain and Distributed Ledger**
- Supply chain transparency and traceability
- Smart contracts and automation
- Digital identity and authentication
- Decentralized applications and services

**Extended Reality (AR/VR/MR)**
- Immersive training and education
- Remote collaboration and visualization
- Product design and prototyping
- Customer experience and engagement

### Building Adaptive Capabilities

**Flexible Architecture**
- Microservices and containerization
- API-first design and development
- Cloud-native and serverless computing
- Event-driven and reactive systems

**Continuous Learning and Improvement**
- Data-driven decision making
- Experimentation and A/B testing
- Feedback loops and iteration
- Performance monitoring and optimization

**Innovation Culture**
- Encourage experimentation and risk-taking
- Invest in research and development
- Partner with technology vendors and startups
- Stay informed about industry trends and developments

## Conclusion

Scaling your business with technology requires a strategic approach that aligns technology investments with business objectives and growth plans. Success depends on careful planning, thoughtful implementation, and continuous optimization based on performance data and user feedback.

Key success factors for technology-enabled scaling:
- Start with clear business objectives and requirements
- Take a phased approach to implementation
- Focus on user experience and adoption
- Invest in change management and training
- Monitor performance and optimize continuously
- Plan for future growth and technology evolution

Remember that technology is an enabler, not a solution in itself. The most successful scaling initiatives are those that combine the right technology with strong processes, skilled people, and effective change management.

The organizations that successfully scale with technology are those that view it as a strategic asset and invest in building capabilities that can adapt and evolve with their business needs. By following the roadmap and best practices outlined in this guide, you can leverage technology to achieve sustainable, profitable growth.

Ready to scale your business with technology? Our growth specialists can help you assess your current capabilities, identify opportunities, and develop a strategic technology roadmap that supports your expansion goals.`,author:"Kwame Asante",date:"2024-12-22",readTime:"21 min read",category:"Business Growth",tags:["Business Scaling","Technology Strategy","Growth Planning","Digital Transformation"],image:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",featured:!1,views:1654}],a=["All","Digital Transformation","AI & Automation","Cybersecurity","ERP Solutions","IT Infrastructure","Cloud Computing","Business Continuity","Software Development","Business Growth"],o=r.filter(d=>{const g=d.title.toLowerCase().includes(e.toLowerCase())||d.excerpt.toLowerCase().includes(e.toLowerCase())||d.tags.some(h=>h.toLowerCase().includes(e.toLowerCase())),x=s==="All"||d.category===s;return g&&x}),l=r.filter(d=>d.featured),c=r.slice(0,5);return t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsxs("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden",children:[t.jsxs("div",{className:"absolute inset-0 opacity-10",children:[t.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"})]}),t.jsx("div",{className:"relative container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"text-center mb-16",children:[t.jsxs("div",{className:"inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6",children:[t.jsx(Z,{className:"w-4 h-4 mr-2"}),"Technology Insights & Expertise"]}),t.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["Binapulse",t.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600",children:" Technology Blog"})]}),t.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8",children:"Stay ahead of the curve with expert insights, industry trends, and practical guides on software development, IT infrastructure, cybersecurity, and digital transformation."}),t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-8",children:[t.jsxs("div",{className:"relative flex-1",children:[t.jsx(ja,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),t.jsx("input",{type:"text",placeholder:"Search articles...",value:e,onChange:d=>n(d.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),t.jsx("select",{value:s,onChange:d=>i(d.target.value),className:"px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:a.map(d=>t.jsx("option",{value:d,children:d},d))})]}),t.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:a.slice(1).map(d=>t.jsxs("button",{onClick:()=>i(d),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${s===d?"bg-blue-600 text-white":"bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"}`,children:[t.jsx(Wp,{className:"inline h-3 w-3 mr-1"}),d]},d))})]})]})})]}),l.length>0&&t.jsx("section",{className:"py-16 bg-white",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Featured Articles"}),t.jsx("p",{className:"text-xl text-gray-600",children:"Our most popular and impactful content"})]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:l.map(d=>t.jsxs("article",{className:"bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group",children:[t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:d.image,alt:d.title,className:"w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"}),t.jsx("div",{className:"absolute top-4 left-4",children:t.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold",children:"Featured"})}),t.jsx("div",{className:"absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full",children:t.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(wn,{className:"h-4 w-4 mr-1"}),d.views.toLocaleString()]})})]}),t.jsxs("div",{className:"p-8",children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("span",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",children:d.category}),t.jsxs("div",{className:"ml-4 flex items-center text-sm text-gray-500",children:[t.jsx(_t,{className:"h-4 w-4 mr-1"}),new Date(d.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2",children:d.title}),t.jsx("p",{className:"text-gray-600 mb-6 line-clamp-3",children:d.excerpt}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(xs,{className:"h-4 w-4 text-gray-400 mr-2"}),t.jsx("span",{className:"text-sm text-gray-600",children:d.author}),t.jsx(Ze,{className:"h-4 w-4 text-gray-400 ml-4 mr-1"}),t.jsx("span",{className:"text-sm text-gray-600",children:d.readTime})]}),t.jsxs("button",{className:"inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors",children:["Read More",t.jsx(O,{className:"ml-2 h-4 w-4"})]})]}),t.jsx("div",{className:"mt-4 pt-4 border-t border-gray-100",children:t.jsx("div",{className:"flex flex-wrap gap-2",children:d.tags.slice(0,3).map((g,x)=>t.jsx("span",{className:"bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs",children:g},x))})})]})]},d.id))})]})}),t.jsx("section",{className:"py-16 bg-gray-50",children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[t.jsxs("div",{className:"lg:col-span-3",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:s==="All"?"All Articles":`${s} Articles`}),t.jsxs("p",{className:"text-gray-600",children:[o.length," article",o.length!==1?"s":""," found"]})]}),t.jsx("div",{className:"space-y-8",children:o.map(d=>t.jsx("article",{className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden group",children:t.jsxs("div",{className:"md:flex",children:[t.jsx("div",{className:"md:w-1/3",children:t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:d.image,alt:d.title,className:"w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"}),d.featured&&t.jsx("div",{className:"absolute top-4 left-4",children:t.jsxs("span",{className:"bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center",children:[t.jsx(ct,{className:"h-3 w-3 mr-1"}),"Featured"]})}),t.jsx("div",{className:"absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full",children:t.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[t.jsx(wn,{className:"h-4 w-4 mr-1"}),d.views.toLocaleString()]})})]})}),t.jsxs("div",{className:"md:w-2/3 p-8",children:[t.jsxs("div",{className:"flex items-center mb-4",children:[t.jsx("span",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",children:d.category}),t.jsxs("div",{className:"ml-4 flex items-center text-sm text-gray-500",children:[t.jsx(_t,{className:"h-4 w-4 mr-1"}),new Date(d.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2",children:d.title}),t.jsx("p",{className:"text-gray-600 mb-4 line-clamp-2",children:d.excerpt}),t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(xs,{className:"h-4 w-4 text-gray-400 mr-2"}),t.jsx("span",{className:"text-sm text-gray-600",children:d.author}),t.jsx(Ze,{className:"h-4 w-4 text-gray-400 ml-4 mr-1"}),t.jsx("span",{className:"text-sm text-gray-600",children:d.readTime})]}),t.jsxs("button",{className:"inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors",children:["Read More",t.jsx(O,{className:"ml-2 h-4 w-4"})]})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:d.tags.slice(0,4).map((g,x)=>t.jsx("span",{className:"bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs",children:g},x))})]})]})},d.id))}),o.length===0&&t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(ja,{className:"h-12 w-12 text-gray-400"})}),t.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"No articles found"}),t.jsx("p",{className:"text-gray-600 mb-4",children:"Try adjusting your search terms or category filter."}),t.jsx("button",{onClick:()=>{n(""),i("All")},className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Clear Filters"})]})]}),t.jsx("div",{className:"lg:col-span-1",children:t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Recent Posts"}),t.jsx("div",{className:"space-y-4",children:c.map(d=>t.jsxs("div",{className:"flex items-start space-x-3 group cursor-pointer",children:[t.jsx("img",{src:d.image,alt:d.title,className:"w-16 h-16 object-cover rounded-lg flex-shrink-0"}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h4",{className:"text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors",children:d.title}),t.jsxs("div",{className:"flex items-center mt-1 text-xs text-gray-500",children:[t.jsx(_t,{className:"h-3 w-3 mr-1"}),new Date(d.date).toLocaleDateString()]})]})]},d.id))})]}),t.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg",children:[t.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Categories"}),t.jsx("div",{className:"space-y-2",children:a.slice(1).map(d=>{const g=r.filter(x=>x.category===d).length;return t.jsxs("button",{onClick:()=>i(d),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${s===d?"bg-blue-100 text-blue-800":"text-gray-600 hover:bg-gray-100"}`,children:[t.jsx("span",{children:d}),t.jsx("span",{className:"text-xs",children:g})]},d)})})]}),t.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-6 text-white",children:[t.jsx("h3",{className:"text-lg font-bold mb-2",children:"Stay Updated"}),t.jsx("p",{className:"text-sm opacity-90 mb-4",children:"Get the latest technology insights and business tips delivered to your inbox."}),t.jsxs("form",{className:"space-y-3",children:[t.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"}),t.jsx("button",{type:"submit",className:"w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Subscribe"})]})]})]})})]})})}),t.jsx("section",{className:"py-16 bg-gradient-to-r from-blue-600 to-teal-600",children:t.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[t.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Ready to Transform Your Business?"}),t.jsx("p",{className:"text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto",children:"Let's discuss how our technology solutions can help you achieve your business goals and drive growth."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("a",{href:"#contact",className:"inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors",children:["Get Free Consultation",t.jsx(O,{className:"ml-2 h-5 w-5"})]}),t.jsx("a",{href:"#services",className:"inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors",children:"View Our Services"})]})]})})]})};function ph(){const[e,n]=ql.useState("home");return W.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(r){r.preventDefault();const a=this.getAttribute("href");if(a==="#about")n("about");else if(a==="#home")n("home");else{const o=document.querySelector(a);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}})}),document.title="Binapulse Technologies - Innovative Software & IT Solutions";let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s)),s.setAttribute("content","Binapulse Technologies provides custom software development, AI agents, ERP solutions, and comprehensive IT infrastructure services for African businesses. Transform your business with our innovative technology solutions.")},[]),t.jsxs("div",{className:"min-h-screen bg-white",children:[t.jsx(Gp,{currentPage:e,setCurrentPage:n}),e==="home"?t.jsxs("main",{children:[t.jsx(Qp,{}),t.jsx(Yp,{}),t.jsx(Kp,{}),t.jsx(Zp,{}),t.jsx(Xp,{}),t.jsx(Jp,{})]}):e==="about"?t.jsx(th,{}):e==="contact"?t.jsx(nh,{}):e==="careers"?t.jsx(sh,{}):e==="custom-software"?t.jsx(ih,{}):e==="ai-agents"?t.jsx(rh,{}):e==="network-infrastructure"?t.jsx(ah,{}):e==="cabling-hardware"?t.jsx(oh,{}):e==="it-consultation"?t.jsx(lh,{}):e==="privacy-policy"?t.jsx(ch,{}):e==="terms-of-service"?t.jsx(dh,{}):e==="cookie-policy"?t.jsx(uh,{}):e==="blog"?t.jsx(mh,{}):null,t.jsx(eh,{setCurrentPage:n})]})}Hd(document.getElementById("root")).render(t.jsx(W.StrictMode,{children:t.jsx(ph,{})}));
