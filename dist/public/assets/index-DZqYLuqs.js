(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var sd={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function IM(){if(iv)return al;iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return al.Fragment=t,al.jsx=n,al.jsxs=n,al}var av;function zM(){return av||(av=1,sd.exports=IM()),sd.exports}var Rn=zM(),rd={exports:{}},sl={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function BM(){return sv||(sv=1,(function(r){function t(B,F){var tt=B.length;B.push(F);t:for(;0<tt;){var pt=tt-1>>>1,Tt=B[pt];if(0<o(Tt,F))B[pt]=F,B[tt]=Tt,tt=pt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var F=B[0],tt=B.pop();if(tt!==F){B[0]=tt;t:for(var pt=0,Tt=B.length,P=Tt>>>1;pt<P;){var Q=2*(pt+1)-1,Mt=B[Q],Ut=Q+1,Vt=B[Ut];if(0>o(Mt,tt))Ut<Tt&&0>o(Vt,Mt)?(B[pt]=Vt,B[Ut]=tt,pt=Ut):(B[pt]=Mt,B[Q]=tt,pt=Q);else if(Ut<Tt&&0>o(Vt,tt))B[pt]=Vt,B[Ut]=tt,pt=Ut;else break t}}return F}function o(B,F){var tt=B.sortIndex-F.sortIndex;return tt!==0?tt:B.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,p=u.now();r.unstable_now=function(){return u.now()-p}}var m=[],d=[],g=1,v=null,_=3,x=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=B)a(d),F.sortIndex=F.expirationTime,t(m,F);else break;F=n(d)}}function O(B){if(A=!1,w(B),!E)if(n(m)!==null)E=!0,D||(D=!0,J());else{var F=n(d);F!==null&&Z(O,F.startTime-B)}}var D=!1,I=-1,T=5,U=-1;function V(){return M?!0:!(r.unstable_now()-U<T)}function H(){if(M=!1,D){var B=r.unstable_now();U=B;var F=!0;try{t:{E=!1,A&&(A=!1,z(I),I=-1),x=!0;var tt=_;try{e:{for(w(B),v=n(m);v!==null&&!(v.expirationTime>B&&V());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,_=v.priorityLevel;var Tt=pt(v.expirationTime<=B);if(B=r.unstable_now(),typeof Tt=="function"){v.callback=Tt,w(B),F=!0;break e}v===n(m)&&a(m),w(B)}else a(m);v=n(m)}if(v!==null)F=!0;else{var P=n(d);P!==null&&Z(O,P.startTime-B),F=!1}}break t}finally{v=null,_=tt,x=!1}F=void 0}}finally{F?J():D=!1}}}var J;if(typeof N=="function")J=function(){N(H)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,gt=ft.port2;ft.port1.onmessage=H,J=function(){gt.postMessage(null)}}else J=function(){y(H,0)};function Z(B,F){I=y(function(){B(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var tt=_;_=F;try{return B()}finally{_=tt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var tt=_;_=B;try{return F()}finally{_=tt}},r.unstable_scheduleCallback=function(B,F,tt){var pt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?pt+tt:pt):tt=pt,B){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=tt+Tt,B={id:g++,callback:F,priorityLevel:B,startTime:tt,expirationTime:Tt,sortIndex:-1},tt>pt?(B.sortIndex=tt,t(d,B),n(m)===null&&B===n(d)&&(A?(z(I),I=-1):A=!0,Z(O,tt-pt))):(B.sortIndex=Tt,t(m,B),E||x||(E=!0,D||(D=!0,J()))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var F=_;return function(){var tt=_;_=F;try{return B.apply(this,arguments)}finally{_=tt}}}})(ld)),ld}var rv;function FM(){return rv||(rv=1,od.exports=BM()),od.exports}var cd={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function HM(){if(ov)return _e;ov=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function y(P,Q,Mt){this.props=P,this.context=Q,this.refs=M,this.updater=Mt||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function z(){}z.prototype=y.prototype;function N(P,Q,Mt){this.props=P,this.context=Q,this.refs=M,this.updater=Mt||E}var w=N.prototype=new z;w.constructor=N,A(w,y.prototype),w.isPureReactComponent=!0;var O=Array.isArray;function D(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,Q,Mt){var Ut=Mt.ref;return{$$typeof:r,type:P,key:Q,ref:Ut!==void 0?Ut:null,props:Mt}}function V(P,Q){return U(P.type,Q,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Mt){return Q[Mt]})}var ft=/\/+/g;function gt(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Q.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,Q,Mt,Ut,Vt){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var xt=!1;if(P===null)xt=!0;else switch(nt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(P.$$typeof){case r:case t:xt=!0;break;case g:return xt=P._init,B(xt(P._payload),Q,Mt,Ut,Vt)}}if(xt)return Vt=Vt(P),xt=Ut===""?"."+gt(P,0):Ut,O(Vt)?(Mt="",xt!=null&&(Mt=xt.replace(ft,"$&/")+"/"),B(Vt,Q,Mt,"",function(Ct){return Ct})):Vt!=null&&(H(Vt)&&(Vt=V(Vt,Mt+(Vt.key==null||P&&P.key===Vt.key?"":(""+Vt.key).replace(ft,"$&/")+"/")+xt)),Q.push(Vt)),1;xt=0;var bt=Ut===""?".":Ut+":";if(O(P))for(var Gt=0;Gt<P.length;Gt++)Ut=P[Gt],nt=bt+gt(Ut,Gt),xt+=B(Ut,Q,Mt,nt,Vt);else if(Gt=x(P),typeof Gt=="function")for(P=Gt.call(P),Gt=0;!(Ut=P.next()).done;)Ut=Ut.value,nt=bt+gt(Ut,Gt++),xt+=B(Ut,Q,Mt,nt,Vt);else if(nt==="object"){if(typeof P.then=="function")return B(Z(P),Q,Mt,Ut,Vt);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function F(P,Q,Mt){if(P==null)return P;var Ut=[],Vt=0;return B(P,Ut,"","",function(nt){return Q.call(Mt,nt,Vt++)}),Ut}function tt(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(Mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=Mt)},function(Mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=Mt)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var pt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Tt={map:F,forEach:function(P,Q,Mt){F(P,function(){Q.apply(this,arguments)},Mt)},count:function(P){var Q=0;return F(P,function(){Q++}),Q},toArray:function(P){return F(P,function(Q){return Q})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return _e.Activity=v,_e.Children=Tt,_e.Component=y,_e.Fragment=n,_e.Profiler=o,_e.PureComponent=N,_e.StrictMode=a,_e.Suspense=m,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,_e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},_e.cache=function(P){return function(){return P.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(P,Q,Mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ut=A({},P.props),Vt=P.key;if(Q!=null)for(nt in Q.key!==void 0&&(Vt=""+Q.key),Q)!T.call(Q,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Q.ref===void 0||(Ut[nt]=Q[nt]);var nt=arguments.length-2;if(nt===1)Ut.children=Mt;else if(1<nt){for(var xt=Array(nt),bt=0;bt<nt;bt++)xt[bt]=arguments[bt+2];Ut.children=xt}return U(P.type,Vt,Ut)},_e.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_e.createElement=function(P,Q,Mt){var Ut,Vt={},nt=null;if(Q!=null)for(Ut in Q.key!==void 0&&(nt=""+Q.key),Q)T.call(Q,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(Vt[Ut]=Q[Ut]);var xt=arguments.length-2;if(xt===1)Vt.children=Mt;else if(1<xt){for(var bt=Array(xt),Gt=0;Gt<xt;Gt++)bt[Gt]=arguments[Gt+2];Vt.children=bt}if(P&&P.defaultProps)for(Ut in xt=P.defaultProps,xt)Vt[Ut]===void 0&&(Vt[Ut]=xt[Ut]);return U(P,nt,Vt)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(P){return{$$typeof:p,render:P}},_e.isValidElement=H,_e.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:tt}},_e.memo=function(P,Q){return{$$typeof:d,type:P,compare:Q===void 0?null:Q}},_e.startTransition=function(P){var Q=I.T,Mt={};I.T=Mt;try{var Ut=P(),Vt=I.S;Vt!==null&&Vt(Mt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(D,pt)}catch(nt){pt(nt)}finally{Q!==null&&Mt.types!==null&&(Q.types=Mt.types),I.T=Q}},_e.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},_e.use=function(P){return I.H.use(P)},_e.useActionState=function(P,Q,Mt){return I.H.useActionState(P,Q,Mt)},_e.useCallback=function(P,Q){return I.H.useCallback(P,Q)},_e.useContext=function(P){return I.H.useContext(P)},_e.useDebugValue=function(){},_e.useDeferredValue=function(P,Q){return I.H.useDeferredValue(P,Q)},_e.useEffect=function(P,Q){return I.H.useEffect(P,Q)},_e.useEffectEvent=function(P){return I.H.useEffectEvent(P)},_e.useId=function(){return I.H.useId()},_e.useImperativeHandle=function(P,Q,Mt){return I.H.useImperativeHandle(P,Q,Mt)},_e.useInsertionEffect=function(P,Q){return I.H.useInsertionEffect(P,Q)},_e.useLayoutEffect=function(P,Q){return I.H.useLayoutEffect(P,Q)},_e.useMemo=function(P,Q){return I.H.useMemo(P,Q)},_e.useOptimistic=function(P,Q){return I.H.useOptimistic(P,Q)},_e.useReducer=function(P,Q,Mt){return I.H.useReducer(P,Q,Mt)},_e.useRef=function(P){return I.H.useRef(P)},_e.useState=function(P){return I.H.useState(P)},_e.useSyncExternalStore=function(P,Q,Mt){return I.H.useSyncExternalStore(P,Q,Mt)},_e.useTransition=function(){return I.H.useTransition()},_e.version="19.2.1",_e}var lv;function tm(){return lv||(lv=1,cd.exports=HM()),cd.exports}var ud={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function GM(){if(cv)return zn;cv=1;var r=tm();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},zn.flushSync=function(m){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=d,a.p=g,a.d.f()}},zn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},zn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},zn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=p(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},zn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=p(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},zn.requestFormReset=function(m){a.d.r(m)},zn.unstable_batchedUpdates=function(m,d){return m(d)},zn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.2.1",zn}var uv;function VM(){if(uv)return ud.exports;uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ud.exports=GM(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function kM(){if(fv)return sl;fv=1;var r=FM(),t=tm(),n=VM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),e;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=h;break}if(C===l){S=!0,l=f,s=h;break}C=C.sibling}if(!S){for(C=h.child;C;){if(C===s){S=!0,s=h,l=f;break}if(C===l){S=!0,l=h,s=f;break}C=C.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case D:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:gt(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return gt(e(i))}catch{}}return null}var Z=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},pt=[],Tt=-1;function P(e){return{current:e}}function Q(e){0>Tt||(e.current=pt[Tt],pt[Tt]=null,Tt--)}function Mt(e,i){Tt++,pt[Tt]=e.current,e.current=i}var Ut=P(null),Vt=P(null),nt=P(null),xt=P(null);function bt(e,i){switch(Mt(nt,i),Mt(Vt,e),Mt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?A_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=A_(i),e=R_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Ut),Mt(Ut,e)}function Gt(){Q(Ut),Q(Vt),Q(nt)}function Ct(e){e.memoizedState!==null&&Mt(xt,e);var i=Ut.current,s=R_(i,e.type);i!==s&&(Mt(Vt,e),Mt(Ut,s))}function wt(e){Vt.current===e&&(Q(Ut),Q(Vt)),xt.current===e&&(Q(xt),tl._currentValue=tt)}var fe,ne;function lt(e){if(fe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);fe=i&&i[1]||"",ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+e+ne}var _t=!1;function yt(e,i){if(!e||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(dt){var ut=dt}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(dt){ut=dt}e.call(Et.prototype)}}else{try{throw Error()}catch(dt){ut=dt}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(dt){if(dt&&ut&&typeof dt.stack=="string")return[dt.stack,ut.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],C=h[1];if(S&&C){var G=S.split(`
`),at=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===at.length)for(l=G.length-1,f=at.length-1;1<=l&&0<=f&&G[l]!==at[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==at[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==at[f]){var mt=`
`+G[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?lt(s):""}function Lt(e,i){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return e.child!==i&&i!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return yt(e.type,!1);case 11:return yt(e.type.render,!1);case 1:return yt(e.type,!0);case 31:return lt("Activity");default:return""}}function Ot(e){try{var i="",s=null;do i+=Lt(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qt=Object.prototype.hasOwnProperty,Qt=r.unstable_scheduleCallback,ce=r.unstable_cancelCallback,pe=r.unstable_shouldYield,X=r.unstable_requestPaint,me=r.unstable_now,ge=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,j=r.unstable_NormalPriority,st=r.unstable_LowPriority,K=r.unstable_IdlePriority,Rt=r.log,Nt=r.unstable_setDisableYieldValue,ht=null,et=null;function Pt(e){if(typeof Rt=="function"&&Nt(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(ht,e)}catch{}}var Ft=Math.clz32?Math.clz32:ie,zt=Math.log,Bt=Math.LN2;function ie(e){return e>>>=0,e===0?32:31-(zt(e)/Bt|0)|0}var $t=256,he=262144,Y=4194304;function It(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~h,l!==0?f=It(l):(S&=C,S!==0?f=It(S):s||(s=C&~e,s!==0&&(f=It(s))))):(C=l&~h,C!==0?f=It(C):S!==0?f=It(S):s||(s=l&~e,s!==0&&(f=It(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ht(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Yt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function ae(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Jt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,i,s,l,f,h){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(s=S&~s;0<s;){var mt=31-Ft(s),Et=1<<mt;C[mt]=0,G[mt]=-1;var ut=at[mt];if(ut!==null)for(at[mt]=null,mt=0;mt<ut.length;mt++){var dt=ut[mt];dt!==null&&(dt.lane&=-536870913)}s&=~Et}l!==0&&Be(e,l,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~i))}function Be(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ft(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function ii(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Ft(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function ai(e,i){var s=i&-i;return s=(s&42)!==0?1:po(s),(s&(e.suspendedLanes|i))!==0?0:s}function po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function go(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Q_(e.type))}function ar(e,i){var s=F.p;try{return F.p=e,i()}finally{F.p=s}}var Gi=Math.random().toString(36).slice(2),hn="__reactFiber$"+Gi,wn="__reactProps$"+Gi,qn="__reactContainer$"+Gi,Ts="__reactEvents$"+Gi,Hl="__reactListeners$"+Gi,Gl="__reactHandles$"+Gi,As="__reactResources$"+Gi,za="__reactMarker$"+Gi;function Ba(e){delete e[hn],delete e[wn],delete e[Ts],delete e[Hl],delete e[Gl]}function sa(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[qn]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=O_(e);e!==null;){if(s=e[hn])return s;e=O_(e)}return i}e=s,s=e.parentNode}return null}function ra(e){if(e=e[hn]||e[qn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Rs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Fa(e){var i=e[As];return i||(i=e[As]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dn(e){e[za]=!0}var Vl=new Set,R={};function q(e,i){ct(e,i),ct(e+"Capture",i)}function ct(e,i){for(R[e]=i,e=0;e<i.length;e++)Vl.add(i[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},Xt={};function Kt(e){return qt.call(Xt,e)?!0:qt.call(ot,e)?!1:rt.test(e)?Xt[e]=!0:(ot[e]=!0,!1)}function kt(e,i,s){if(Kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function te(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function jt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function oe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function re(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ne(e){if(!e._valueTracker){var i=xe(e)?"checked":"value";e._valueTracker=re(e,i,""+e[i])}}function nn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=xe(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fe=/[\n"\\]/g;function He(e){return e.replace(Fe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zt(e,i,s,l,f,h,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+oe(i)):e.value!==""+oe(i)&&(e.value=""+oe(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Te(e,S,oe(i)):s!=null?Te(e,S,oe(s)):l!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+oe(C):e.removeAttribute("name")}function In(e,i,s,l,f,h,S,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Ne(e);return}s=s!=null?""+oe(s):"",i=i!=null?""+oe(i):s,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ne(e)}function Te(e,i,s){i==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xn(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+oe(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function si(e,i,s){if(i!=null&&(i=""+oe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+oe(s):""}function Ui(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Z(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=oe(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ne(e)}function ri(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Ge=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Ge.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Li(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&an(e,f,l)}else for(var h in i)i.hasOwnProperty(h)&&an(e,h,i[h])}function ze(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cs(e){return Ha.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var ef=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,rr=null;function Tm(e){var i=ra(e);if(i&&(e=i.stateNode)){var s=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Zt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+He(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[wn]||null;if(!f)throw Error(a(90));Zt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&nn(l)}break t;case"textarea":si(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&xn(e,!!s.multiple,i,!1)}}}var af=!1;function Am(e,i,s){if(af)return e(i,s);af=!0;try{var l=e(i);return l}finally{if(af=!1,(sr!==null||rr!==null)&&(wc(),sr&&(i=sr,e=rr,rr=sr=null,Tm(i),e)))for(i=0;i<e.length;i++)Tm(e[i])}}function _o(e,i){var s=e.stateNode;if(s===null)return null;var l=s[wn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(la)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){sf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{sf=!1}var Ga=null,rf=null,kl=null;function Rm(){if(kl)return kl;var e,i=rf,s=i.length,l,f="value"in Ga?Ga.value:Ga.textContent,h=f.length;for(e=0;e<s&&i[e]===f[e];e++);var S=s-e;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return kl=f.slice(e,1<l?1-l:void 0)}function Xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function Cm(){return!1}function Zn(e){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(s=e[C],this[C]=s?s(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Wl:Cm,this.isPropagationStopped=Cm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Zn(ws),xo=v({},ws,{view:0,detail:0}),Oy=Zn(xo),of,lf,yo,ql=v({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(of=e.screenX-yo.screenX,lf=e.screenY-yo.screenY):lf=of=0,yo=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),wm=Zn(ql),Py=v({},ql,{dataTransfer:0}),Iy=Zn(Py),zy=v({},xo,{relatedTarget:0}),cf=Zn(zy),By=v({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Zn(By),Hy=v({},ws,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Zn(Hy),Vy=v({},ws,{data:0}),Dm=Zn(Vy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Wy[e])?!!i[e]:!1}function uf(){return Yy}var qy=v({},xo,{key:function(e){if(e.key){var i=ky[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zy=Zn(qy),Ky=v({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Zn(Ky),Qy=v({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),Jy=Zn(Qy),jy=v({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=Zn(jy),tS=v({},ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Zn(tS),nS=v({},ws,{newState:0,oldState:0}),iS=Zn(nS),aS=[9,13,27,32],ff=la&&"CompositionEvent"in window,So=null;la&&"documentMode"in document&&(So=document.documentMode);var sS=la&&"TextEvent"in window&&!So,Lm=la&&(!ff||So&&8<So&&11>=So),Nm=" ",Om=!1;function Pm(e,i){switch(e){case"keyup":return aS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function rS(e,i){switch(e){case"compositionend":return Im(i);case"keypress":return i.which!==32?null:(Om=!0,Nm);case"textInput":return e=i.data,e===Nm&&Om?null:e;default:return null}}function oS(e,i){if(or)return e==="compositionend"||!ff&&Pm(e,i)?(e=Rm(),kl=rf=Ga=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lm&&i.locale!=="ko"?null:i.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!lS[e.type]:i==="textarea"}function Bm(e,i,s,l){sr?rr?rr.push(l):rr=[l]:sr=l,i=Ic(i,"onChange"),0<i.length&&(s=new Yl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Mo=null,Eo=null;function cS(e){y_(e,0)}function Zl(e){var i=Rs(e);if(nn(i))return e}function Fm(e,i){if(e==="change")return i}var Hm=!1;if(la){var hf;if(la){var df="oninput"in document;if(!df){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),df=typeof Gm.oninput=="function"}hf=df}else hf=!1;Hm=hf&&(!document.documentMode||9<document.documentMode)}function Vm(){Mo&&(Mo.detachEvent("onpropertychange",km),Eo=Mo=null)}function km(e){if(e.propertyName==="value"&&Zl(Eo)){var i=[];Bm(i,Eo,e,nf(e)),Am(cS,i)}}function uS(e,i,s){e==="focusin"?(Vm(),Mo=i,Eo=s,Mo.attachEvent("onpropertychange",km)):e==="focusout"&&Vm()}function fS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Eo)}function hS(e,i){if(e==="click")return Zl(i)}function dS(e,i){if(e==="input"||e==="change")return Zl(i)}function pS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:pS;function bo(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qt.call(i,f)||!oi(e[f],i[f]))return!1}return!0}function Xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,i){var s=Xm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Xm(s)}}function Ym(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ym(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function qm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Qe(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Qe(e.document)}return i}function pf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var mS=la&&"documentMode"in document&&11>=document.documentMode,lr=null,mf=null,To=null,gf=!1;function Zm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||lr==null||lr!==Qe(l)||(l=lr,"selectionStart"in l&&pf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),To&&bo(To,l)||(To=l,l=Ic(mf,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=lr)))}function Ds(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var cr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},_f={},Km={};la&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Us(e){if(_f[e])return _f[e];if(!cr[e])return e;var i=cr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Km)return _f[e]=i[s];return e}var Qm=Us("animationend"),Jm=Us("animationiteration"),jm=Us("animationstart"),gS=Us("transitionrun"),_S=Us("transitionstart"),vS=Us("transitioncancel"),$m=Us("transitionend"),tg=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Ni(e,i){tg.set(e,i),q(i,[e])}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],ur=0,xf=0;function Ql(){for(var e=ur,i=xf=ur=0;i<e;){var s=_i[i];_i[i++]=null;var l=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var h=_i[i];if(_i[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&eg(s,f,h)}}function Jl(e,i,s,l){_i[ur++]=e,_i[ur++]=i,_i[ur++]=s,_i[ur++]=l,xf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yf(e,i,s,l){return Jl(e,i,s,l),jl(e)}function Ls(e,i){return Jl(e,null,null,i),jl(e)}function eg(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=e.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&i!==null&&(f=31-Ft(s),e=h.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function jl(e){if(50<qo)throw qo=0,wh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var fr={};function xS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,s,l){return new xS(e,i,s,l)}function Sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,i){var s=e.alternate;return s===null?(s=li(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function ng(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function $l(e,i,s,l,f,h){var S=0;if(l=e,typeof e=="function")Sf(e)&&(S=1);else if(typeof e=="string")S=bM(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=li(31,s,i,f),e.elementType=U,e.lanes=h,e;case A:return Ns(s.children,f,h,i);case M:S=8,f|=24;break;case y:return e=li(12,s,i,f|2),e.elementType=y,e.lanes=h,e;case O:return e=li(13,s,i,f),e.elementType=O,e.lanes=h,e;case D:return e=li(19,s,i,f),e.elementType=D,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break t;case z:S=9;break t;case w:S=11;break t;case I:S=14;break t;case T:S=16,l=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=li(S,s,i,f),i.elementType=e,i.type=l,i.lanes=h,i}function Ns(e,i,s,l){return e=li(7,e,l,i),e.lanes=s,e}function Mf(e,i,s){return e=li(6,e,null,i),e.lanes=s,e}function ig(e){var i=li(18,null,null,0);return i.stateNode=e,i}function Ef(e,i,s){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ag=new WeakMap;function vi(e,i){if(typeof e=="object"&&e!==null){var s=ag.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Ot(i)},ag.set(e,i),i)}return{value:e,source:i,stack:Ot(i)}}var hr=[],dr=0,tc=null,Ao=0,xi=[],yi=0,Va=null,ki=1,Xi="";function ua(e,i){hr[dr++]=Ao,hr[dr++]=tc,tc=e,Ao=i}function sg(e,i,s){xi[yi++]=ki,xi[yi++]=Xi,xi[yi++]=Va,Va=e;var l=ki;e=Xi;var f=32-Ft(l)-1;l&=~(1<<f),s+=1;var h=32-Ft(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ki=1<<32-Ft(i)+f|s<<f|l,Xi=h+e}else ki=1<<h|s<<f|l,Xi=e}function bf(e){e.return!==null&&(ua(e,1),sg(e,1,0))}function Tf(e){for(;e===tc;)tc=hr[--dr],hr[dr]=null,Ao=hr[--dr],hr[dr]=null;for(;e===Va;)Va=xi[--yi],xi[yi]=null,Xi=xi[--yi],xi[yi]=null,ki=xi[--yi],xi[yi]=null}function rg(e,i){xi[yi++]=ki,xi[yi++]=Xi,xi[yi++]=Va,ki=i.id,Xi=i.overflow,Va=e}var Dn=null,je=null,Ue=!1,ka=null,Si=!1,Af=Error(a(519));function Xa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(vi(i,e)),Af}function og(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[hn]=e,i[wn]=l,s){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(s=0;s<Ko.length;s++)Re(Ko[s],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),In(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),Ui(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b_(i.textContent,s)?(l.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),l.onScroll!=null&&Re("scroll",i),l.onScrollEnd!=null&&Re("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||Xa(e,!0)}function lg(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function pr(e){if(e!==Dn)return!1;if(!Ue)return lg(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Xh(e.type,e.memoizedProps)),s=!s),s&&je&&Xa(e),lg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=N_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=N_(e)}else i===27?(i=je,as(e.type)?(e=Kh,Kh=null,je=e):je=i):je=Dn?Ei(e.stateNode.nextSibling):null;return!0}function Os(){je=Dn=null,Ue=!1}function Rf(){var e=ka;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ka=null),e}function Ro(e){ka===null?ka=[e]:ka.push(e)}var Cf=P(null),Ps=null,fa=null;function Wa(e,i,s){Mt(Cf,i._currentValue),i._currentValue=s}function ha(e){e._currentValue=Cf.current,Q(Cf)}function wf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Df(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=f;for(var G=0;G<i.length;G++)if(C.context===i[G]){h.lanes|=s,C=h.alternate,C!==null&&(C.lanes|=s),wf(h.return,s,e),l||(S=null);break t}h=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),wf(S,s,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function mr(e,i,s,l){e=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=f.type;oi(f.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(f===xt.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}f=f.return}e!==null&&Df(i,e,s,l),i.flags|=262144}function ec(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Is(e){Ps=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return cg(Ps,e)}function nc(e,i){return Ps===null&&Is(e),cg(e,i)}function cg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var yS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},SS=r.unstable_scheduleCallback,MS=r.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new yS,data:new Map,refCount:0}}function Co(e){e.refCount--,e.refCount===0&&SS(MS,function(){e.controller.abort()})}var wo=null,Lf=0,gr=0,_r=null;function ES(e,i){if(wo===null){var s=wo=[];Lf=0,gr=Ph(),_r={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Lf++,i.then(ug,ug),i}function ug(){if(--Lf===0&&wo!==null){_r!==null&&(_r.status="fulfilled");var e=wo;wo=null,gr=0,_r=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function bS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var fg=B.S;B.S=function(e,i){Z0=me(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ES(e,i),fg!==null&&fg(e,i)};var zs=P(null);function Nf(){var e=zs.current;return e!==null?e:Je.pooledCache}function ic(e,i){i===null?Mt(zs,zs.current):Mt(zs,i.pool)}function hg(){var e=Nf();return e===null?null:{parent:pn._currentValue,pool:e}}var vr=Error(a(460)),Of=Error(a(474)),ac=Error(a(542)),sc={then:function(){}};function dg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gg(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gg(e),e}throw Fs=i,vr}}function Bs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Fs=s,vr):s}}var Fs=null;function mg(){if(Fs===null)throw Error(a(459));var e=Fs;return Fs=null,e}function gg(e){if(e===vr||e===ac)throw Error(a(483))}var xr=null,Do=0;function rc(e){var i=Do;return Do+=1,xr===null&&(xr=[]),pg(xr,e,i)}function Uo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function oc(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function _g(e){function i($,W){if(e){var it=$.deletions;it===null?($.deletions=[W],$.flags|=16):it.push(W)}}function s($,W){if(!e)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function l($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function f($,W){return $=ca($,W),$.index=0,$.sibling=null,$}function h($,W,it){return $.index=it,e?(it=$.alternate,it!==null?(it=it.index,it<W?($.flags|=67108866,W):it):($.flags|=67108866,W)):($.flags|=1048576,W)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function C($,W,it,St){return W===null||W.tag!==6?(W=Mf(it,$.mode,St),W.return=$,W):(W=f(W,it),W.return=$,W)}function G($,W,it,St){var le=it.type;return le===A?mt($,W,it.props.children,St,it.key):W!==null&&(W.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&Bs(le)===W.type)?(W=f(W,it.props),Uo(W,it),W.return=$,W):(W=$l(it.type,it.key,it.props,null,$.mode,St),Uo(W,it),W.return=$,W)}function at($,W,it,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=Ef(it,$.mode,St),W.return=$,W):(W=f(W,it.children||[]),W.return=$,W)}function mt($,W,it,St,le){return W===null||W.tag!==7?(W=Ns(it,$.mode,St,le),W.return=$,W):(W=f(W,it),W.return=$,W)}function Et($,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Mf(""+W,$.mode,it),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return it=$l(W.type,W.key,W.props,null,$.mode,it),Uo(it,W),it.return=$,it;case E:return W=Ef(W,$.mode,it),W.return=$,W;case T:return W=Bs(W),Et($,W,it)}if(Z(W)||J(W))return W=Ns(W,$.mode,it,null),W.return=$,W;if(typeof W.then=="function")return Et($,rc(W),it);if(W.$$typeof===N)return Et($,nc($,W),it);oc($,W)}return null}function ut($,W,it,St){var le=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return le!==null?null:C($,W,""+it,St);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===le?G($,W,it,St):null;case E:return it.key===le?at($,W,it,St):null;case T:return it=Bs(it),ut($,W,it,St)}if(Z(it)||J(it))return le!==null?null:mt($,W,it,St,null);if(typeof it.then=="function")return ut($,W,rc(it),St);if(it.$$typeof===N)return ut($,W,nc($,it),St);oc($,it)}return null}function dt($,W,it,St,le){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(it)||null,C(W,$,""+St,le);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return $=$.get(St.key===null?it:St.key)||null,G(W,$,St,le);case E:return $=$.get(St.key===null?it:St.key)||null,at(W,$,St,le);case T:return St=Bs(St),dt($,W,it,St,le)}if(Z(St)||J(St))return $=$.get(it)||null,mt(W,$,St,le,null);if(typeof St.then=="function")return dt($,W,it,rc(St),le);if(St.$$typeof===N)return dt($,W,it,nc(W,St),le);oc(W,St)}return null}function ee($,W,it,St){for(var le=null,Oe=null,se=W,Se=W=0,we=null;se!==null&&Se<it.length;Se++){se.index>Se?(we=se,se=null):we=se.sibling;var Pe=ut($,se,it[Se],St);if(Pe===null){se===null&&(se=we);break}e&&se&&Pe.alternate===null&&i($,se),W=h(Pe,W,Se),Oe===null?le=Pe:Oe.sibling=Pe,Oe=Pe,se=we}if(Se===it.length)return s($,se),Ue&&ua($,Se),le;if(se===null){for(;Se<it.length;Se++)se=Et($,it[Se],St),se!==null&&(W=h(se,W,Se),Oe===null?le=se:Oe.sibling=se,Oe=se);return Ue&&ua($,Se),le}for(se=l(se);Se<it.length;Se++)we=dt(se,$,Se,it[Se],St),we!==null&&(e&&we.alternate!==null&&se.delete(we.key===null?Se:we.key),W=h(we,W,Se),Oe===null?le=we:Oe.sibling=we,Oe=we);return e&&se.forEach(function(cs){return i($,cs)}),Ue&&ua($,Se),le}function de($,W,it,St){if(it==null)throw Error(a(151));for(var le=null,Oe=null,se=W,Se=W=0,we=null,Pe=it.next();se!==null&&!Pe.done;Se++,Pe=it.next()){se.index>Se?(we=se,se=null):we=se.sibling;var cs=ut($,se,Pe.value,St);if(cs===null){se===null&&(se=we);break}e&&se&&cs.alternate===null&&i($,se),W=h(cs,W,Se),Oe===null?le=cs:Oe.sibling=cs,Oe=cs,se=we}if(Pe.done)return s($,se),Ue&&ua($,Se),le;if(se===null){for(;!Pe.done;Se++,Pe=it.next())Pe=Et($,Pe.value,St),Pe!==null&&(W=h(Pe,W,Se),Oe===null?le=Pe:Oe.sibling=Pe,Oe=Pe);return Ue&&ua($,Se),le}for(se=l(se);!Pe.done;Se++,Pe=it.next())Pe=dt(se,$,Se,Pe.value,St),Pe!==null&&(e&&Pe.alternate!==null&&se.delete(Pe.key===null?Se:Pe.key),W=h(Pe,W,Se),Oe===null?le=Pe:Oe.sibling=Pe,Oe=Pe);return e&&se.forEach(function(PM){return i($,PM)}),Ue&&ua($,Se),le}function Ze($,W,it,St){if(typeof it=="object"&&it!==null&&it.type===A&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var le=it.key;W!==null;){if(W.key===le){if(le=it.type,le===A){if(W.tag===7){s($,W.sibling),St=f(W,it.props.children),St.return=$,$=St;break t}}else if(W.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===T&&Bs(le)===W.type){s($,W.sibling),St=f(W,it.props),Uo(St,it),St.return=$,$=St;break t}s($,W);break}else i($,W);W=W.sibling}it.type===A?(St=Ns(it.props.children,$.mode,St,it.key),St.return=$,$=St):(St=$l(it.type,it.key,it.props,null,$.mode,St),Uo(St,it),St.return=$,$=St)}return S($);case E:t:{for(le=it.key;W!==null;){if(W.key===le)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){s($,W.sibling),St=f(W,it.children||[]),St.return=$,$=St;break t}else{s($,W);break}else i($,W);W=W.sibling}St=Ef(it,$.mode,St),St.return=$,$=St}return S($);case T:return it=Bs(it),Ze($,W,it,St)}if(Z(it))return ee($,W,it,St);if(J(it)){if(le=J(it),typeof le!="function")throw Error(a(150));return it=le.call(it),de($,W,it,St)}if(typeof it.then=="function")return Ze($,W,rc(it),St);if(it.$$typeof===N)return Ze($,W,nc($,it),St);oc($,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(s($,W.sibling),St=f(W,it),St.return=$,$=St):(s($,W),St=Mf(it,$.mode,St),St.return=$,$=St),S($)):s($,W)}return function($,W,it,St){try{Do=0;var le=Ze($,W,it,St);return xr=null,le}catch(se){if(se===vr||se===ac)throw se;var Oe=li(29,se,null,$.mode);return Oe.lanes=St,Oe.return=$,Oe}finally{}}}var Hs=_g(!0),vg=_g(!1),Ya=!1;function Pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=jl(e),eg(e,null,s),i}return Jl(e,l,i,s),jl(e)}function Lo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ii(e,s)}}function zf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Bf=!1;function No(){if(Bf){var e=_r;if(e!==null)throw e}}function Oo(e,i,s,l){Bf=!1;var f=e.updateQueue;Ya=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,at=G.next;G.next=null,S===null?h=at:S.next=at,S=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==S&&(C===null?mt.firstBaseUpdate=at:C.next=at,mt.lastBaseUpdate=G))}if(h!==null){var Et=f.baseState;S=0,mt=at=G=null,C=h;do{var ut=C.lane&-536870913,dt=ut!==C.lane;if(dt?(Ce&ut)===ut:(l&ut)===ut){ut!==0&&ut===gr&&(Bf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var ee=e,de=C;ut=i;var Ze=s;switch(de.tag){case 1:if(ee=de.payload,typeof ee=="function"){Et=ee.call(Ze,Et,ut);break t}Et=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=de.payload,ut=typeof ee=="function"?ee.call(Ze,Et,ut):ee,ut==null)break t;Et=v({},Et,ut);break t;case 2:Ya=!0}}ut=C.callback,ut!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=f.callbacks,dt===null?f.callbacks=[ut]:dt.push(ut))}else dt={lane:ut,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(at=mt=dt,G=Et):mt=mt.next=dt,S|=ut;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;dt=C,C=dt.next,dt.next=null,f.lastBaseUpdate=dt,f.shared.pending=null}}while(!0);mt===null&&(G=Et),f.baseState=G,f.firstBaseUpdate=at,f.lastBaseUpdate=mt,h===null&&(f.shared.lanes=0),$a|=S,e.lanes=S,e.memoizedState=Et}}function xg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function yg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)xg(s[e],i)}var yr=P(null),lc=P(0);function Sg(e,i){e=Sa,Mt(lc,e),Mt(yr,i),Sa=e|i.baseLanes}function Ff(){Mt(lc,Sa),Mt(yr,yr.current)}function Hf(){Sa=lc.current,Q(yr),Q(lc)}var ci=P(null),Mi=null;function Ka(e){var i=e.alternate;Mt(un,un.current&1),Mt(ci,e),Mi===null&&(i===null||yr.current!==null||i.memoizedState!==null)&&(Mi=e)}function Gf(e){Mt(un,un.current),Mt(ci,e),Mi===null&&(Mi=e)}function Mg(e){e.tag===22?(Mt(un,un.current),Mt(ci,e),Mi===null&&(Mi=e)):Qa()}function Qa(){Mt(un,un.current),Mt(ci,ci.current)}function ui(e){Q(ci),Mi===e&&(Mi=null),Q(un)}var un=P(0);function cc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||qh(s)||Zh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,ye=null,Ye=null,mn=null,uc=!1,Sr=!1,Gs=!1,fc=0,Po=0,Mr=null,TS=0;function on(){throw Error(a(321))}function Vf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!oi(e[s],i[s]))return!1;return!0}function kf(e,i,s,l,f,h){return da=h,ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?s0:ah,Gs=!1,h=s(l,f),Gs=!1,Sr&&(h=bg(i,s,l,f)),Eg(e),h}function Eg(e){B.H=Bo;var i=Ye!==null&&Ye.next!==null;if(da=0,mn=Ye=ye=null,uc=!1,Po=0,Mr=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&ec(e)&&(gn=!0))}function bg(e,i,s,l){ye=e;var f=0;do{if(Sr&&(Mr=null),Po=0,Sr=!1,25<=f)throw Error(a(301));if(f+=1,mn=Ye=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=r0,h=i(s,l)}while(Sr);return h}function AS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Io(i):i,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(ye.flags|=1024),i}function Xf(){var e=fc!==0;return fc=0,e}function Wf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Yf(e){if(uc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}uc=!1}da=0,mn=Ye=ye=null,Sr=!1,Po=fc=0,Mr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ye.memoizedState=mn=e:mn=mn.next=e,mn}function fn(){if(Ye===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var i=mn===null?ye.memoizedState:mn.next;if(i!==null)mn=i,Ye=e;else{if(e===null)throw ye.alternate===null?Error(a(467)):Error(a(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},mn===null?ye.memoizedState=mn=e:mn=mn.next=e}return mn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var i=Po;return Po+=1,Mr===null&&(Mr=[]),e=pg(Mr,e,i),i=ye,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?s0:ah),e}function dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===N)return Un(e)}throw Error(a(438,String(e)))}function qf(e){var i=null,s=ye.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ye.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=hc(),ye.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=V;return i.index++,s}function pa(e,i){return typeof i=="function"?i(e):i}function pc(e){var i=fn();return Zf(i,Ye,e)}function Zf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{i=f.next;var C=S=null,G=null,at=i,mt=!1;do{var Et=at.lane&-536870913;if(Et!==at.lane?(Ce&Et)===Et:(da&Et)===Et){var ut=at.revertLane;if(ut===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Et===gr&&(mt=!0);else if((da&ut)===ut){at=at.next,ut===gr&&(mt=!0);continue}else Et={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(C=G=Et,S=h):G=G.next=Et,ye.lanes|=ut,$a|=ut;Et=at.action,Gs&&s(h,Et),h=at.hasEagerState?at.eagerState:s(h,Et)}else ut={lane:Et,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(C=G=ut,S=h):G=G.next=ut,ye.lanes|=Et,$a|=Et;at=at.next}while(at!==null&&at!==i);if(G===null?S=h:G.next=C,!oi(h,e.memoizedState)&&(gn=!0,mt&&(s=_r,s!==null)))throw s;e.memoizedState=h,e.baseState=S,e.baseQueue=G,l.lastRenderedState=h}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kf(e){var i=fn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=e(h,S.action),S=S.next;while(S!==f);oi(h,i.memoizedState)||(gn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Tg(e,i,s){var l=ye,f=fn(),h=Ue;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!oi((Ye||f).memoizedState,s);if(S&&(f.memoizedState=s,gn=!0),f=f.queue,jf(Cg.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Er(9,{destroy:void 0},Rg.bind(null,l,f,s,i),null),Je===null)throw Error(a(349));h||(da&127)!==0||Ag(l,i,s)}return s}function Ag(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ye.updateQueue,i===null?(i=hc(),ye.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Rg(e,i,s,l){i.value=s,i.getSnapshot=l,wg(i)&&Dg(e)}function Cg(e,i,s){return s(function(){wg(i)&&Dg(e)})}function wg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!oi(e,s)}catch{return!0}}function Dg(e){var i=Ls(e,2);i!==null&&$n(i,e,2)}function Qf(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),Gs){Pt(!0);try{s()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function Ug(e,i,s,l){return e.baseState=s,Zf(e,Ye,typeof l=="function"?l:pa)}function RS(e,i,s,l,f){if(_c(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,Lg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function Lg(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var h=B.T,S={};B.T=S;try{var C=s(f,l),G=B.S;G!==null&&G(S,C),Ng(e,i,C)}catch(at){Jf(e,i,at)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=s(f,l),Ng(e,i,h)}catch(at){Jf(e,i,at)}}function Ng(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Og(e,i,l)},function(l){return Jf(e,i,l)}):Og(e,i,s)}function Og(e,i,s){i.status="fulfilled",i.value=s,Pg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Lg(e,s)))}function Jf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Pg(i),i=i.next;while(i!==l)}e.action=null}function Pg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Ig(e,i){return i}function zg(e,i){if(Ue){var s=Je.formState;if(s!==null){t:{var l=ye;if(Ue){if(je){e:{for(var f=je,h=Si;f.nodeType!==8;){if(!h){f=null;break e}if(f=Ei(f.nextSibling),f===null){f=null;break e}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){je=Ei(f.nextSibling),l=f.data==="F!";break t}}Xa(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ig,lastRenderedState:i},s.queue=l,s=n0.bind(null,ye,l),l.dispatch=s,l=Qf(!1),h=ih.bind(null,ye,!1,l.queue),l=Vn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=RS.bind(null,ye,f,h,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function Bg(e){var i=fn();return Fg(i,Ye,e)}function Fg(e,i,s){if(i=Zf(e,i,Ig)[0],e=pc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Io(i)}catch(S){throw S===vr?ac:S}else l=i;i=fn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(ye.flags|=2048,Er(9,{destroy:void 0},CS.bind(null,f,s),null)),[l,h,e]}function CS(e,i){e.action=i}function Hg(e){var i=fn(),s=Ye;if(s!==null)return Fg(i,s,e);fn(),i=i.memoizedState,s=fn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Er(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ye.updateQueue,i===null&&(i=hc(),ye.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Gg(){return fn().memoizedState}function mc(e,i,s,l){var f=Vn();ye.flags|=e,f.memoizedState=Er(1|i,{destroy:void 0},s,l===void 0?null:l)}function gc(e,i,s,l){var f=fn();l=l===void 0?null:l;var h=f.memoizedState.inst;Ye!==null&&l!==null&&Vf(l,Ye.memoizedState.deps)?f.memoizedState=Er(i,h,s,l):(ye.flags|=e,f.memoizedState=Er(1|i,h,s,l))}function Vg(e,i){mc(8390656,8,e,i)}function jf(e,i){gc(2048,8,e,i)}function wS(e){ye.flags|=4;var i=ye.updateQueue;if(i===null)i=hc(),ye.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function kg(e){var i=fn().memoizedState;return wS({ref:i,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Xg(e,i){return gc(4,2,e,i)}function Wg(e,i){return gc(4,4,e,i)}function Yg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function qg(e,i,s){s=s!=null?s.concat([e]):null,gc(4,4,Yg.bind(null,i,e),s)}function $f(){}function Zg(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Vf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Kg(e,i){var s=fn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Vf(i,l[1]))return l[0];if(l=e(),Gs){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[l,i],l}function th(e,i,s){return s===void 0||(da&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Q0(),ye.lanes|=e,$a|=e,s)}function Qg(e,i,s,l){return oi(s,i)?s:yr.current!==null?(e=th(e,s,l),oi(e,i)||(gn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Ce&261930)===0?(gn=!0,e.memoizedState=s):(e=Q0(),ye.lanes|=e,$a|=e,i)}function Jg(e,i,s,l,f){var h=F.p;F.p=h!==0&&8>h?h:8;var S=B.T,C={};B.T=C,ih(e,!1,i,s);try{var G=f(),at=B.S;if(at!==null&&at(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=bS(G,l);zo(e,i,mt,di(e))}else zo(e,i,l,di(e))}catch(Et){zo(e,i,{then:function(){},status:"rejected",reason:Et},di())}finally{F.p=h,S!==null&&C.types!==null&&(S.types=C.types),B.T=S}}function DS(){}function eh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=jg(e).queue;Jg(e,f,i,tt,s===null?DS:function(){return $g(e),s(l)})}function jg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:tt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function $g(e){var i=jg(e);i.next===null&&(i=e.alternate.memoizedState),zo(e,i.next.queue,{},di())}function nh(){return Un(tl)}function t0(){return fn().memoizedState}function e0(){return fn().memoizedState}function US(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();e=qa(s);var l=Za(i,e,s);l!==null&&($n(l,i,s),Lo(l,i,s)),i={cache:Uf()},e.payload=i;return}i=i.return}}function LS(e,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(e)?i0(i,s):(s=yf(e,i,s,l),s!==null&&($n(s,e,l),a0(s,i,l)))}function n0(e,i,s){var l=di();zo(e,i,s,l)}function zo(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(e))i0(i,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,C=h(S,s);if(f.hasEagerState=!0,f.eagerState=C,oi(C,S))return Jl(e,i,f,0),Je===null&&Ql(),!1}catch{}finally{}if(s=yf(e,i,f,l),s!==null)return $n(s,e,l),a0(s,i,l),!0}return!1}function ih(e,i,s,l){if(l={lane:2,revertLane:Ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(e)){if(i)throw Error(a(479))}else i=yf(e,s,l,2),i!==null&&$n(i,e,2)}function _c(e){var i=e.alternate;return e===ye||i!==null&&i===ye}function i0(e,i){Sr=uc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function a0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ii(e,s)}}var Bo={readContext:Un,use:dc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Bo.useEffectEvent=on;var s0={readContext:Un,use:dc,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Vg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,mc(4194308,4,Yg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return mc(4194308,4,e,i)},useInsertionEffect:function(e,i){mc(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var l=e();if(Gs){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Vn();if(s!==void 0){var f=s(i);if(Gs){Pt(!0);try{s(i)}finally{Pt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=LS.bind(null,ye,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=Qf(e);var i=e.queue,s=n0.bind(null,ye,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:$f,useDeferredValue:function(e,i){var s=Vn();return th(s,e,i)},useTransition:function(){var e=Qf(!1);return e=Jg.bind(null,ye,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ye,f=Vn();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Je===null)throw Error(a(349));(Ce&127)!==0||Ag(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,Vg(Cg.bind(null,l,h,e),[e]),l.flags|=2048,Er(9,{destroy:void 0},Rg.bind(null,l,h,s,i),null),s},useId:function(){var e=Vn(),i=Je.identifierPrefix;if(Ue){var s=Xi,l=ki;s=(l&~(1<<32-Ft(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=TS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:nh,useFormState:zg,useActionState:zg,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ih.bind(null,ye,!0,s),s.dispatch=i,[e,i]},useMemoCache:qf,useCacheRefresh:function(){return Vn().memoizedState=US.bind(null,ye)},useEffectEvent:function(e){var i=Vn(),s={impl:e};return i.memoizedState=s,function(){if((Ie&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},ah={readContext:Un,use:dc,useCallback:Zg,useContext:Un,useEffect:jf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Kg,useReducer:pc,useRef:Gg,useState:function(){return pc(pa)},useDebugValue:$f,useDeferredValue:function(e,i){var s=fn();return Qg(s,Ye.memoizedState,e,i)},useTransition:function(){var e=pc(pa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Io(e),i]},useSyncExternalStore:Tg,useId:t0,useHostTransitionStatus:nh,useFormState:Bg,useActionState:Bg,useOptimistic:function(e,i){var s=fn();return Ug(s,Ye,e,i)},useMemoCache:qf,useCacheRefresh:e0};ah.useEffectEvent=kg;var r0={readContext:Un,use:dc,useCallback:Zg,useContext:Un,useEffect:jf,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Kg,useReducer:Kf,useRef:Gg,useState:function(){return Kf(pa)},useDebugValue:$f,useDeferredValue:function(e,i){var s=fn();return Ye===null?th(s,e,i):Qg(s,Ye.memoizedState,e,i)},useTransition:function(){var e=Kf(pa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Io(e),i]},useSyncExternalStore:Tg,useId:t0,useHostTransitionStatus:nh,useFormState:Hg,useActionState:Hg,useOptimistic:function(e,i){var s=fn();return Ye!==null?Ug(s,Ye,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:qf,useCacheRefresh:e0};r0.useEffectEvent=kg;function sh(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var rh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=di(),f=qa(l);f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&($n(i,e,l),Lo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=di(),f=qa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&($n(i,e,l),Lo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=di(),l=qa(s);l.tag=2,i!=null&&(l.callback=i),i=Za(e,l,s),i!==null&&($n(i,e,s),Lo(i,e,s))}};function o0(e,i,s,l,f,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!bo(s,l)||!bo(f,h):!0}function l0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&rh.enqueueReplaceState(i,i.state,null)}function Vs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function c0(e){Kl(e)}function u0(e){console.error(e)}function f0(e){Kl(e)}function vc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function h0(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function oh(e,i,s){return s=qa(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(e,i)},s}function d0(e){return e=qa(e),e.tag=3,e}function p0(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;e.payload=function(){return f(h)},e.callback=function(){h0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){h0(i,s,l),typeof f!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function NS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&mr(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Mi===null?Dc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Lh(e,l,f)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Lh(e,l,f)),!1}throw Error(a(435,s.tag))}return Lh(e,l,f),Dc(),!1}if(Ue)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Af&&(e=Error(a(422),{cause:l}),Ro(vi(e,s)))):(l!==Af&&(i=Error(a(423),{cause:l}),Ro(vi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=vi(l,s),f=oh(e.stateNode,l,f),zf(e,f),ln!==4&&(ln=2)),!1;var h=Error(a(520),{cause:l});if(h=vi(h,s),Yo===null?Yo=[h]:Yo.push(h),ln!==4&&(ln=2),i===null)return!0;l=vi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=oh(s.stateNode,l,e),zf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=d0(f),p0(f,e,s,l),zf(s,f),!1}s=s.return}while(s!==null);return!1}var lh=Error(a(461)),gn=!1;function Ln(e,i,s,l){i.child=e===null?vg(i,null,s,l):Hs(i,e.child,s,l)}function m0(e,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Is(i),l=kf(e,i,s,S,h,f),C=Xf(),e!==null&&!gn?(Wf(e,i,f),ma(e,i,f)):(Ue&&C&&bf(i),i.flags|=1,Ln(e,i,l,f),i.child)}function g0(e,i,s,l,f){if(e===null){var h=s.type;return typeof h=="function"&&!Sf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,_0(e,i,h,l,f)):(e=$l(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!gh(e,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:bo,s(S,l)&&e.ref===i.ref)return ma(e,i,f)}return i.flags|=1,e=ca(h,l),e.ref=i.ref,e.return=i,i.child=e}function _0(e,i,s,l,f){if(e!==null){var h=e.memoizedProps;if(bo(h,l)&&e.ref===i.ref)if(gn=!1,i.pendingProps=l=h,gh(e,f))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,ma(e,i,f)}return ch(e,i,s,l,f)}function v0(e,i,s,l){var f=l.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return x0(e,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ic(i,h!==null?h.cachePool:null),h!==null?Sg(i,h):Ff(),Mg(i);else return l=i.lanes=536870912,x0(e,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(ic(i,h.cachePool),Sg(i,h),Qa(),i.memoizedState=null):(e!==null&&ic(i,null),Ff(),Qa());return Ln(e,i,f,s),i.child}function Fo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function x0(e,i,s,l,f){var h=Nf();return h=h===null?null:{parent:pn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&ic(i,null),Ff(),Mg(i),e!==null&&mr(e,i,l,!0),i.childLanes=f,null}function xc(e,i){return i=Sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function y0(e,i,s){return Hs(i,e.child,null,s),e=xc(i,i.pendingProps),e.flags|=2,ui(i),i.memoizedState=null,e}function OS(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ue){if(l.mode==="hidden")return e=xc(i,l),i.lanes=536870912,Fo(null,e);if(Gf(i),(e=je)?(e=L_(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Va!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=ig(e),s.return=i,i.child=s,Dn=i,je=null)):e=null,e===null)throw Xa(i);return i.lanes=536870912,null}return xc(i,l)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(Gf(i),f)if(i.flags&256)i.flags&=-257,i=y0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(gn||mr(e,i,s,!1),f=(s&e.childLanes)!==0,gn||f){if(l=Je,l!==null&&(S=ai(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Ls(e,S),$n(l,e,S),lh;Dc(),i=y0(e,i,s)}else e=h.treeContext,je=Ei(S.nextSibling),Dn=i,Ue=!0,ka=null,Si=!1,e!==null&&rg(i,e),i=xc(i,l),i.flags|=4096;return i}return e=ca(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function yc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function ch(e,i,s,l,f){return Is(i),s=kf(e,i,s,l,void 0,f),l=Xf(),e!==null&&!gn?(Wf(e,i,f),ma(e,i,f)):(Ue&&l&&bf(i),i.flags|=1,Ln(e,i,s,f),i.child)}function S0(e,i,s,l,f,h){return Is(i),i.updateQueue=null,s=bg(i,l,s,f),Eg(e),l=Xf(),e!==null&&!gn?(Wf(e,i,h),ma(e,i,h)):(Ue&&l&&bf(i),i.flags|=1,Ln(e,i,s,h),i.child)}function M0(e,i,s,l,f){if(Is(i),i.stateNode===null){var h=fr,S=s.contextType;typeof S=="object"&&S!==null&&(h=Un(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=rh,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Pf(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Un(S):fr,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(sh(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&rh.enqueueReplaceState(h,h.state,null),Oo(i,l,h,f),No(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){h=i.stateNode;var C=i.memoizedProps,G=Vs(s,C);h.props=G;var at=h.context,mt=s.contextType;S=fr,typeof mt=="object"&&mt!==null&&(S=Un(mt));var Et=s.getDerivedStateFromProps;mt=typeof Et=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||at!==S)&&l0(i,h,l,S),Ya=!1;var ut=i.memoizedState;h.state=ut,Oo(i,l,h,f),No(),at=i.memoizedState,C||ut!==at||Ya?(typeof Et=="function"&&(sh(i,s,Et,l),at=i.memoizedState),(G=Ya||o0(i,s,G,l,ut,at,S))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=at),h.props=l,h.state=at,h.context=S,l=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,If(e,i),S=i.memoizedProps,mt=Vs(s,S),h.props=mt,Et=i.pendingProps,ut=h.context,at=s.contextType,G=fr,typeof at=="object"&&at!==null&&(G=Un(at)),C=s.getDerivedStateFromProps,(at=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Et||ut!==G)&&l0(i,h,l,G),Ya=!1,ut=i.memoizedState,h.state=ut,Oo(i,l,h,f),No();var dt=i.memoizedState;S!==Et||ut!==dt||Ya||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof C=="function"&&(sh(i,s,C,l),dt=i.memoizedState),(mt=Ya||o0(i,s,mt,l,ut,dt,G)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,dt,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,dt,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=dt),h.props=l,h.state=dt,h.context=G,l=mt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(i.flags|=1024),l=!1)}return h=l,yc(e,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&l?(i.child=Hs(i,e.child,null,f),i.child=Hs(i,null,s,f)):Ln(e,i,s,f),i.memoizedState=h.state,e=i.child):e=ma(e,i,f),e}function E0(e,i,s,l){return Os(),i.flags|=256,Ln(e,i,s,l),i.child}var uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fh(e){return{baseLanes:e,cachePool:hg()}}function hh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=hi),e}function b0(e,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(f?Ka(i):Qa(),(e=je)?(e=L_(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Va!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=ig(e),s.return=i,i.child=s,Dn=i,je=null)):e=null,e===null)throw Xa(i);return Zh(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(Qa(),f=i.mode,C=Sc({mode:"hidden",children:C},f),l=Ns(l,f,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=fh(s),l.childLanes=hh(e,S,s),i.memoizedState=uh,Fo(null,l)):(Ka(i),dh(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(h)i.flags&256?(Ka(i),i.flags&=-257,i=ph(e,i,s)):i.memoizedState!==null?(Qa(),i.child=e.child,i.flags|=128,i=null):(Qa(),C=l.fallback,f=i.mode,l=Sc({mode:"visible",children:l.children},f),C=Ns(C,f,s,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Hs(i,e.child,null,s),l=i.child,l.memoizedState=fh(s),l.childLanes=hh(e,S,s),i.memoizedState=uh,i=Fo(null,l));else if(Ka(i),Zh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var at=S.dgst;S=at,l=Error(a(419)),l.stack="",l.digest=S,Ro({value:l,source:null,stack:null}),i=ph(e,i,s)}else if(gn||mr(e,i,s,!1),S=(s&e.childLanes)!==0,gn||S){if(S=Je,S!==null&&(l=ai(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Ls(e,l),$n(S,e,l),lh;qh(C)||Dc(),i=ph(e,i,s)}else qh(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,je=Ei(C.nextSibling),Dn=i,Ue=!0,ka=null,Si=!1,e!==null&&rg(i,e),i=dh(i,l.children),i.flags|=4096);return i}return f?(Qa(),C=l.fallback,f=i.mode,G=e.child,at=G.sibling,l=ca(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,at!==null?C=ca(at,C):(C=Ns(C,f,s,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Fo(null,l),l=i.child,C=e.child.memoizedState,C===null?C=fh(s):(f=C.cachePool,f!==null?(G=pn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=hg(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=hh(e,S,s),i.memoizedState=uh,Fo(e.child,l)):(Ka(i),s=e.child,e=s.sibling,s=ca(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function dh(e,i){return i=Sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sc(e,i){return e=li(22,e,null,i),e.lanes=0,e}function ph(e,i,s){return Hs(i,e.child,null,s),e=dh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function T0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),wf(e.return,i,s)}function mh(e,i,s,l,f,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function A0(e,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=un.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,Mt(un,S),Ln(e,i,l,s),l=Ue?Ao:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&T0(e,s,i);else if(e.tag===19)T0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&cc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),mh(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&cc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}mh(i,!0,s,null,h,l);break;case"together":mh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),$a|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(mr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function gh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function PS(e,i,s){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),Wa(i,pn,e.memoizedState.cache),Os();break;case 27:case 5:Ct(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:Wa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Gf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?b0(e,i,s):(Ka(i),e=ma(e,i,s),e!==null?e.sibling:null);Ka(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(mr(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return A0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(un,un.current),l)break;return null;case 22:return i.lanes=0,v0(e,i,s,i.pendingProps);case 24:Wa(i,pn,e.memoizedState.cache)}return ma(e,i,s)}function R0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!gh(e,s)&&(i.flags&128)===0)return gn=!1,PS(e,i,s);gn=(e.flags&131072)!==0}else gn=!1,Ue&&(i.flags&1048576)!==0&&sg(i,Ao,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Bs(i.elementType),i.type=e,typeof e=="function")Sf(e)?(l=Vs(e,l),i.tag=1,i=M0(null,i,e,l,s)):(i.tag=0,i=ch(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===w){i.tag=11,i=m0(null,i,e,l,s);break t}else if(f===I){i.tag=14,i=g0(null,i,e,l,s);break t}}throw i=gt(e)||e,Error(a(306,i,""))}}return i;case 0:return ch(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Vs(l,i.pendingProps),M0(e,i,l,f,s);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,If(e,i),Oo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Wa(i,pn,l),l!==h.cache&&Df(i,[pn],s,!0),No(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=E0(e,i,l,s);break t}else if(l!==f){f=vi(Error(a(424)),i),Ro(f),i=E0(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Ei(e.firstChild),Dn=i,Ue=!0,ka=null,Si=!0,s=vg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Os(),l===f){i=ma(e,i,s);break t}Ln(e,i,l,s)}i=i.child}return i;case 26:return yc(e,i),e===null?(s=B_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,l=zc(nt.current).createElement(s),l[hn]=i,l[wn]=e,Nn(l,s,e),dn(l),i.stateNode=l):i.memoizedState=B_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ct(i),e===null&&Ue&&(l=i.stateNode=P_(i.type,i.pendingProps,nt.current),Dn=i,Si=!0,f=je,as(i.type)?(Kh=f,je=Ei(l.firstChild)):je=f),Ln(e,i,i.pendingProps.children,s),yc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((f=l=je)&&(l=fM(l,i.type,i.pendingProps,Si),l!==null?(i.stateNode=l,Dn=i,je=Ei(l.firstChild),Si=!1,f=!0):f=!1),f||Xa(i)),Ct(i),f=i.type,h=i.pendingProps,S=e!==null?e.memoizedProps:null,l=h.children,Xh(f,h)?l=null:S!==null&&Xh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=kf(e,i,AS,null,null,s),tl._currentValue=f),yc(e,i),Ln(e,i,l,s),i.child;case 6:return e===null&&Ue&&((e=s=je)&&(s=hM(s,i.pendingProps,Si),s!==null?(i.stateNode=s,Dn=i,je=null,e=!0):e=!1),e||Xa(i)),null;case 13:return b0(e,i,s);case 4:return bt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Hs(i,null,l,s):Ln(e,i,l,s),i.child;case 11:return m0(e,i,i.type,i.pendingProps,s);case 7:return Ln(e,i,i.pendingProps,s),i.child;case 8:return Ln(e,i,i.pendingProps.children,s),i.child;case 12:return Ln(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Wa(i,i.type,l.value),Ln(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Is(i),f=Un(f),l=l(f),i.flags|=1,Ln(e,i,l,s),i.child;case 14:return g0(e,i,i.type,i.pendingProps,s);case 15:return _0(e,i,i.type,i.pendingProps,s);case 19:return A0(e,i,s);case 31:return OS(e,i,s);case 22:return v0(e,i,s,i.pendingProps);case 24:return Is(i),l=Un(pn),e===null?(f=Nf(),f===null&&(f=Je,h=Uf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Pf(i),Wa(i,pn,f)):((e.lanes&s)!==0&&(If(e,i),Oo(i,null,null,s),No()),f=e.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Wa(i,pn,l)):(l=h.cache,Wa(i,pn,l),l!==f.cache&&Df(i,[pn],s,!0))),Ln(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ga(e){e.flags|=4}function _h(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(t_())e.flags|=8192;else throw Fs=sc,Of}else e.flags&=-16777217}function C0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k_(i))if(t_())e.flags|=8192;else throw Fs=sc,Of}function Mc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?At():536870912,e.lanes|=i,Rr|=i)}function Ho(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function IS(e,i,s){var l=i.pendingProps;switch(Tf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(pn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(pr(i)?ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Rf())),$e(i),null;case 26:var f=i.type,h=i.memoizedState;return e===null?(ga(i),h!==null?($e(i),C0(i,h)):($e(i),_h(i,f,null,l,s))):h?h!==e.memoizedState?(ga(i),$e(i),C0(i,h)):($e(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ga(i),$e(i),_h(i,f,e,l,s)),null;case 27:if(wt(i),s=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=Ut.current,pr(i)?og(i):(e=P_(f,l,s),i.stateNode=e,ga(i))}return $e(i),null;case 5:if(wt(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(h=Ut.current,pr(i))og(i);else{var S=zc(nt.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[hn]=i,h[wn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;t:switch(Nn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ga(i)}}return $e(i),_h(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ga(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,pr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b_(e.nodeValue,s)),e||Xa(i,!0)}else e=zc(e).createTextNode(l),e[hn]=i,i.stateNode=e}return $e(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=pr(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),e=!1}else s=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $e(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=pr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[hn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Mc(i,i.updateQueue),$e(i),null);case 4:return Gt(),e===null&&Fh(i.stateNode.containerInfo),$e(i),null;case 10:return ha(i.type),$e(i),null;case 19:if(Q(un),l=i.memoizedState,l===null)return $e(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Ho(l,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=cc(e),h!==null){for(i.flags|=128,Ho(l,!1),e=h.updateQueue,i.updateQueue=e,Mc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)ng(s,e),s=s.sibling;return Mt(un,un.current&1|2),Ue&&ua(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&me()>Rc&&(i.flags|=128,f=!0,Ho(l,!1),i.lanes=4194304)}else{if(!f)if(e=cc(h),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Mc(i,e),Ho(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Ue)return $e(i),null}else 2*me()-l.renderingStartTime>Rc&&s!==536870912&&(i.flags|=128,f=!0,Ho(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(e=l.last,e!==null?e.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=me(),e.sibling=null,s=un.current,Mt(un,f?s&1|2:s&1),Ue&&ua(i,l.treeForkCount),e):($e(i),null);case 22:case 23:return ui(i),Hf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),s=i.updateQueue,s!==null&&Mc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Q(zs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(pn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function zS(e,i){switch(Tf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(pn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return wt(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(un),null;case 4:return Gt(),null;case 10:return ha(i.type),null;case 22:case 23:return ui(i),Hf(),e!==null&&Q(zs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(pn),null;case 25:return null;default:return null}}function w0(e,i){switch(Tf(i),i.tag){case 3:ha(pn),Gt();break;case 26:case 27:case 5:wt(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:Q(un);break;case 10:ha(i.type);break;case 22:case 23:ui(i),Hf(),e!==null&&Q(zs);break;case 24:ha(pn)}}function Go(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){ke(i,i.return,C)}}function Ja(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&e)===e){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=i;var G=s,at=C;try{at()}catch(mt){ke(f,G,mt)}}}l=l.next}while(l!==h)}}catch(mt){ke(i,i.return,mt)}}function D0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{yg(i,s)}catch(l){ke(e,e.return,l)}}}function U0(e,i,s){s.props=Vs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){ke(e,i,l)}}function Vo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){ke(e,i,f)}}function Wi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){ke(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){ke(e,i,f)}else s.current=null}function L0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){ke(e,e.return,f)}}function vh(e,i,s){try{var l=e.stateNode;sM(l,e.type,s,i),l[wn]=i}catch(f){ke(e,e.return,f)}}function N0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&as(e.type)||e.tag===4}function xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||N0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&as(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yh(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&as(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(yh(e,i,s),e=e.sibling;e!==null;)yh(e,i,s),e=e.sibling}function Ec(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&as(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ec(e,i,s),e=e.sibling;e!==null;)Ec(e,i,s),e=e.sibling}function O0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,l,s),i[hn]=e,i[wn]=s}catch(h){ke(e,e.return,h)}}var _a=!1,_n=!1,Sh=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function BS(e,i){if(e=e.containerInfo,Vh=Xc,e=qm(e),pf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var S=0,C=-1,G=-1,at=0,mt=0,Et=e,ut=null;e:for(;;){for(var dt;Et!==s||f!==0&&Et.nodeType!==3||(C=S+f),Et!==h||l!==0&&Et.nodeType!==3||(G=S+l),Et.nodeType===3&&(S+=Et.nodeValue.length),(dt=Et.firstChild)!==null;)ut=Et,Et=dt;for(;;){if(Et===e)break e;if(ut===s&&++at===f&&(C=S),ut===h&&++mt===l&&(G=S),(dt=Et.nextSibling)!==null)break;Et=ut,ut=Et.parentNode}Et=dt}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(kh={focusedElem:e,selectionRange:s},Xc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var ee=Vs(s.type,f);e=l.getSnapshotBeforeUpdate(ee,h),l.__reactInternalSnapshotBeforeUpdate=e}catch(de){ke(s,s.return,de)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Yh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function I0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),l&4&&Go(5,s);break;case 1:if(xa(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){ke(s,s.return,S)}else{var f=Vs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){ke(s,s.return,S)}}l&64&&D0(s),l&512&&Vo(s,s.return);break;case 3:if(xa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{yg(e,i)}catch(S){ke(s,s.return,S)}}break;case 27:i===null&&l&4&&O0(s);case 26:case 5:xa(e,s),i===null&&l&4&&L0(s),l&512&&Vo(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),l&4&&F0(e,s);break;case 13:xa(e,s),l&4&&H0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=qS.bind(null,s),dM(e,s))));break;case 22:if(l=s.memoizedState!==null||_a,!l){i=i!==null&&i.memoizedState!==null||_n,f=_a;var h=_n;_a=l,(_n=i)&&!h?ya(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),_a=f,_n=h}break;case 30:break;default:xa(e,s)}}function z0(e){var i=e.alternate;i!==null&&(e.alternate=null,z0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ba(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,Kn=!1;function va(e,i,s){for(s=s.child;s!==null;)B0(e,i,s),s=s.sibling}function B0(e,i,s){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:_n||Wi(s,i),va(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_n||Wi(s,i);var l=sn,f=Kn;as(s.type)&&(sn=s.stateNode,Kn=!1),va(e,i,s),Jo(s.stateNode),sn=l,Kn=f;break;case 5:_n||Wi(s,i);case 6:if(l=sn,f=Kn,sn=null,va(e,i,s),sn=l,Kn=f,sn!==null)if(Kn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(s.stateNode)}catch(h){ke(s,i,h)}else try{sn.removeChild(s.stateNode)}catch(h){ke(s,i,h)}break;case 18:sn!==null&&(Kn?(e=sn,D_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Pr(e)):D_(sn,s.stateNode));break;case 4:l=sn,f=Kn,sn=s.stateNode.containerInfo,Kn=!0,va(e,i,s),sn=l,Kn=f;break;case 0:case 11:case 14:case 15:Ja(2,s,i),_n||Ja(4,s,i),va(e,i,s);break;case 1:_n||(Wi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&U0(s,i,l)),va(e,i,s);break;case 21:va(e,i,s);break;case 22:_n=(l=_n)||s.memoizedState!==null,va(e,i,s),_n=l;break;default:va(e,i,s)}}function F0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pr(e)}catch(s){ke(i,i.return,s)}}}function H0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pr(e)}catch(s){ke(i,i.return,s)}}function FS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new P0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new P0),i;default:throw Error(a(435,e.tag))}}function bc(e,i){var s=FS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=ZS.bind(null,e,l);l.then(f,f)}})}function Qn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=e,S=i,C=S;t:for(;C!==null;){switch(C.tag){case 27:if(as(C.type)){sn=C.stateNode,Kn=!1;break t}break;case 5:sn=C.stateNode,Kn=!1;break t;case 3:case 4:sn=C.stateNode.containerInfo,Kn=!0;break t}C=C.return}if(sn===null)throw Error(a(160));B0(h,S,f),sn=null,Kn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)G0(i,e),i=i.sibling}var Oi=null;function G0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),Jn(e),l&4&&(Ja(3,e,e.return),Go(3,e),Ja(5,e,e.return));break;case 1:Qn(i,e),Jn(e),l&512&&(_n||s===null||Wi(s,s.return)),l&64&&_a&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Oi;if(Qn(i,e),Jn(e),l&512&&(_n||s===null||Wi(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[za]||h[hn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Nn(h,l,s),h[hn]=e,dn(h),l=h;break t;case"link":var S=G_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(h=S[C],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break e}}h=f.createElement(l),Nn(h,l,s),f.head.appendChild(h);break;case"meta":if(S=G_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(h=S[C],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break e}}h=f.createElement(l),Nn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[hn]=e,dn(h),l=h}e.stateNode=l}else V_(f,e.type,e.stateNode);else e.stateNode=H_(f,l,e.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?V_(f,e.type,e.stateNode):H_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,e),Jn(e),l&512&&(_n||s===null||Wi(s,s.return)),s!==null&&l&4&&vh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,e),Jn(e),l&512&&(_n||s===null||Wi(s,s.return)),e.flags&32){f=e.stateNode;try{ri(f,"")}catch(ee){ke(e,e.return,ee)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,vh(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Sh=!0);break;case 6:if(Qn(i,e),Jn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ee){ke(e,e.return,ee)}}break;case 3:if(Hc=null,f=Oi,Oi=Bc(i.containerInfo),Qn(i,e),Oi=f,Jn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Pr(i.containerInfo)}catch(ee){ke(e,e.return,ee)}Sh&&(Sh=!1,V0(e));break;case 4:l=Oi,Oi=Bc(e.stateNode.containerInfo),Qn(i,e),Jn(e),Oi=l;break;case 12:Qn(i,e),Jn(e);break;case 31:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 13:Qn(i,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=me()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,at=_a,mt=_n;if(_a=at||f,_n=mt||G,Qn(i,e),_n=mt,_a=at,Jn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||_a||_n||ks(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(h=G.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Et=G.memoizedProps.style,ut=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;C.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(ee){ke(G,G.return,ee)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(ee){ke(G,G.return,ee)}}}else if(i.tag===18){if(s===null){G=i;try{var dt=G.stateNode;f?U_(dt,!0):U_(G.stateNode,!1)}catch(ee){ke(G,G.return,ee)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bc(e,s))));break;case 19:Qn(i,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bc(e,l)));break;case 30:break;case 21:break;default:Qn(i,e),Jn(e)}}function Jn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(N0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=xh(e);Ec(e,h,f);break;case 5:var S=s.stateNode;s.flags&32&&(ri(S,""),s.flags&=-33);var C=xh(e);Ec(e,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,at=xh(e);yh(e,at,G);break;default:throw Error(a(161))}}catch(mt){ke(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function V0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;V0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)I0(e,i.alternate,i),i=i.sibling}function ks(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ja(4,i,i.return),ks(i);break;case 1:Wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&U0(i,i.return,s),ks(i);break;case 27:Jo(i.stateNode);case 26:case 5:Wi(i,i.return),ks(i);break;case 22:i.memoizedState===null&&ks(i);break;case 30:ks(i);break;default:ks(i)}e=e.sibling}}function ya(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:ya(f,h,s),Go(4,h);break;case 1:if(ya(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){ke(l,l.return,at)}if(l=h,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)xg(G[f],C)}catch(at){ke(l,l.return,at)}}s&&S&64&&D0(h),Vo(h,h.return);break;case 27:O0(h);case 26:case 5:ya(f,h,s),s&&l===null&&S&4&&L0(h),Vo(h,h.return);break;case 12:ya(f,h,s);break;case 31:ya(f,h,s),s&&S&4&&F0(f,h);break;case 13:ya(f,h,s),s&&S&4&&H0(f,h);break;case 22:h.memoizedState===null&&ya(f,h,s),Vo(h,h.return);break;case 30:break;default:ya(f,h,s)}i=i.sibling}}function Mh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Co(s))}function Eh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Co(e))}function Pi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)k0(e,i,s,l),i=i.sibling}function k0(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(e,i,s,l),f&2048&&Go(9,i);break;case 1:Pi(e,i,s,l);break;case 3:Pi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Co(e)));break;case 12:if(f&2048){Pi(e,i,s,l),e=i.stateNode;try{var h=i.memoizedProps,S=h.id,C=h.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ke(i,i.return,G)}}else Pi(e,i,s,l);break;case 31:Pi(e,i,s,l);break;case 13:Pi(e,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Pi(e,i,s,l):ko(e,i):h._visibility&2?Pi(e,i,s,l):(h._visibility|=2,br(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Mh(S,i);break;case 24:Pi(e,i,s,l),f&2048&&Eh(i.alternate,i);break;default:Pi(e,i,s,l)}}function br(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,S=i,C=s,G=l,at=S.flags;switch(S.tag){case 0:case 11:case 15:br(h,S,C,G,f),Go(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?br(h,S,C,G,f):ko(h,S):(mt._visibility|=2,br(h,S,C,G,f)),f&&at&2048&&Mh(S.alternate,S);break;case 24:br(h,S,C,G,f),f&&at&2048&&Eh(S.alternate,S);break;default:br(h,S,C,G,f)}i=i.sibling}}function ko(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:ko(s,l),f&2048&&Mh(l.alternate,l);break;case 24:ko(s,l),f&2048&&Eh(l.alternate,l);break;default:ko(s,l)}i=i.sibling}}var Xo=8192;function Tr(e,i,s){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)X0(e,i,s),e=e.sibling}function X0(e,i,s){switch(e.tag){case 26:Tr(e,i,s),e.flags&Xo&&e.memoizedState!==null&&TM(s,Oi,e.memoizedState,e.memoizedProps);break;case 5:Tr(e,i,s);break;case 3:case 4:var l=Oi;Oi=Bc(e.stateNode.containerInfo),Tr(e,i,s),Oi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Xo,Xo=16777216,Tr(e,i,s),Xo=l):Tr(e,i,s));break;default:Tr(e,i,s)}}function W0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,q0(l,e)}W0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Y0(e),e=e.sibling}function Y0(e){switch(e.tag){case 0:case 11:case 15:Wo(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:Wo(e);break;case 12:Wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Tc(e)):Wo(e);break;default:Wo(e)}}function Tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,q0(l,e)}W0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ja(8,i,i.return),Tc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(i));break;default:Tc(i)}e=e.sibling}}function q0(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:Ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Co(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Tn=l;else t:for(s=e;Tn!==null;){l=Tn;var f=l.sibling,h=l.return;if(z0(l),l===s){Tn=null;break t}if(f!==null){f.return=h,Tn=f;break t}Tn=h}}}var HS={getCacheForType:function(e){var i=Un(pn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Un(pn).controller.signal}},GS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Je=null,Ae=null,Ce=0,Ve=0,fi=null,ja=!1,Ar=!1,bh=!1,Sa=0,ln=0,$a=0,Xs=0,Th=0,hi=0,Rr=0,Yo=null,jn=null,Ah=!1,Ac=0,Z0=0,Rc=1/0,Cc=null,ts=null,yn=0,es=null,Cr=null,Ma=0,Rh=0,Ch=null,K0=null,qo=0,wh=null;function di(){return(Ie&2)!==0&&Ce!==0?Ce&-Ce:B.T!==null?Ph():go()}function Q0(){if(hi===0)if((Ce&536870912)===0||Ue){var e=he;he<<=1,(he&3932160)===0&&(he=262144),hi=e}else hi=536870912;return e=ci.current,e!==null&&(e.flags|=32),hi}function $n(e,i,s){(e===Je&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(wr(e,0),ns(e,Ce,hi,!1)),Jt(e,s),((Ie&2)===0||e!==Je)&&(e===Je&&((Ie&2)===0&&(Xs|=s),ln===4&&ns(e,Ce,hi,!1)),Yi(e))}function J0(e,i,s){if((Ie&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ht(e,i),f=l?XS(e,i):Uh(e,i,!0),h=l;do{if(f===0){Ar&&!l&&ns(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!VS(s)){f=Uh(e,i,!1),h=!1;continue}if(f===2){if(h=i,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var C=e;f=Yo;var G=C.current.memoizedState.isDehydrated;if(G&&(wr(C,S).flags|=256),S=Uh(C,S,!1),S!==2){if(bh&&!G){C.errorRecoveryDisabledLanes|=h,Xs|=h,f=4;break t}h=jn,jn=f,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){wr(e,0),ns(e,i,0,!0);break}t:{switch(l=e,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ns(l,i,hi,!ja);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Ac+300-me(),10<f)){if(ns(l,i,hi,!ja),vt(l,0,!0)!==0)break t;Ma=i,l.timeoutHandle=C_(j0.bind(null,l,s,jn,Cc,Ah,i,hi,Xs,Rr,ja,h,"Throttled",-0,0),f);break t}j0(l,s,jn,Cc,Ah,i,hi,Xs,Rr,ja,h,null,-0,0)}}break}while(!0);Yi(e)}function j0(e,i,s,l,f,h,S,C,G,at,mt,Et,ut,dt){if(e.timeoutHandle=-1,Et=i.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},X0(i,h,Et);var ee=(h&62914560)===h?Ac-me():(h&4194048)===h?Z0-me():0;if(ee=AM(Et,ee),ee!==null){Ma=h,e.cancelPendingCommit=ee(r_.bind(null,e,i,h,s,l,f,S,C,G,mt,Et,null,ut,dt)),ns(e,h,S,!at);return}}r_(e,i,h,s,l,f,S,C,G)}function VS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!oi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ns(e,i,s,l){i&=~Th,i&=~Xs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var h=31-Ft(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&Be(e,s,i)}function wc(){return(Ie&6)===0?(Zo(0),!1):!0}function Dh(){if(Ae!==null){if(Ve===0)var e=Ae.return;else e=Ae,fa=Ps=null,Yf(e),xr=null,Do=0,e=Ae;for(;e!==null;)w0(e.alternate,e),e=e.return;Ae=null}}function wr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,lM(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ma=0,Dh(),Je=e,Ae=s=ca(e.current,null),Ce=i,Ve=0,fi=null,ja=!1,Ar=Ht(e,i),bh=!1,Rr=hi=Th=Xs=$a=ln=0,jn=Yo=null,Ah=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Ft(l),h=1<<f;i|=e[f],l&=~h}return Sa=i,Ql(),s}function $0(e,i){ye=null,B.H=Bo,i===vr||i===ac?(i=mg(),Ve=3):i===Of?(i=mg(),Ve=4):Ve=i===lh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,Ae===null&&(ln=1,vc(e,vi(i,e.current)))}function t_(){var e=ci.current;return e===null?!0:(Ce&4194048)===Ce?Mi===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Mi:!1}function e_(){var e=B.H;return B.H=Bo,e===null?Bo:e}function n_(){var e=B.A;return B.A=HS,e}function Dc(){ln=4,ja||(Ce&4194048)!==Ce&&ci.current!==null||(Ar=!0),($a&134217727)===0&&(Xs&134217727)===0||Je===null||ns(Je,Ce,hi,!1)}function Uh(e,i,s){var l=Ie;Ie|=2;var f=e_(),h=n_();(Je!==e||Ce!==i)&&(Cc=null,wr(e,i)),i=!1;var S=ln;t:do try{if(Ve!==0&&Ae!==null){var C=Ae,G=fi;switch(Ve){case 8:Dh(),S=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var at=Ve;if(Ve=0,fi=null,Dr(e,C,G,at),s&&Ar){S=0;break t}break;default:at=Ve,Ve=0,fi=null,Dr(e,C,G,at)}}kS(),S=ln;break}catch(mt){$0(e,mt)}while(!0);return i&&e.shellSuspendCounter++,fa=Ps=null,Ie=l,B.H=f,B.A=h,Ae===null&&(Je=null,Ce=0,Ql()),S}function kS(){for(;Ae!==null;)i_(Ae)}function XS(e,i){var s=Ie;Ie|=2;var l=e_(),f=n_();Je!==e||Ce!==i?(Cc=null,Rc=me()+500,wr(e,i)):Ar=Ht(e,i);t:do try{if(Ve!==0&&Ae!==null){i=Ae;var h=fi;e:switch(Ve){case 1:Ve=0,fi=null,Dr(e,i,h,1);break;case 2:case 9:if(dg(h)){Ve=0,fi=null,a_(i);break}i=function(){Ve!==2&&Ve!==9||Je!==e||(Ve=7),Yi(e)},h.then(i,i);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:dg(h)?(Ve=0,fi=null,a_(i)):(Ve=0,fi=null,Dr(e,i,h,7));break;case 5:var S=null;switch(Ae.tag){case 26:S=Ae.memoizedState;case 5:case 27:var C=Ae;if(S?k_(S):C.stateNode.complete){Ve=0,fi=null;var G=C.sibling;if(G!==null)Ae=G;else{var at=C.return;at!==null?(Ae=at,Uc(at)):Ae=null}break e}}Ve=0,fi=null,Dr(e,i,h,5);break;case 6:Ve=0,fi=null,Dr(e,i,h,6);break;case 8:Dh(),ln=6;break t;default:throw Error(a(462))}}WS();break}catch(mt){$0(e,mt)}while(!0);return fa=Ps=null,B.H=l,B.A=f,Ie=s,Ae!==null?0:(Je=null,Ce=0,Ql(),ln)}function WS(){for(;Ae!==null&&!pe();)i_(Ae)}function i_(e){var i=R0(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,i===null?Uc(e):Ae=i}function a_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=S0(s,i,i.pendingProps,i.type,void 0,Ce);break;case 11:i=S0(s,i,i.pendingProps,i.type.render,i.ref,Ce);break;case 5:Yf(i);default:w0(s,i),i=Ae=ng(i,Sa),i=R0(s,i,Sa)}e.memoizedProps=e.pendingProps,i===null?Uc(e):Ae=i}function Dr(e,i,s,l){fa=Ps=null,Yf(i),xr=null,Do=0;var f=i.return;try{if(NS(e,f,i,s,Ce)){ln=1,vc(e,vi(s,e.current)),Ae=null;return}}catch(h){if(f!==null)throw Ae=f,h;ln=1,vc(e,vi(s,e.current)),Ae=null;return}i.flags&32768?(Ue||l===1?e=!0:Ar||(Ce&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),s_(i,e)):Uc(i)}function Uc(e){var i=e;do{if((i.flags&32768)!==0){s_(i,ja);return}e=i.return;var s=IS(i.alternate,i,Sa);if(s!==null){Ae=s;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=e}while(i!==null);ln===0&&(ln=5)}function s_(e,i){do{var s=zS(e.alternate,e);if(s!==null){s.flags&=32767,Ae=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=s}while(e!==null);ln=6,Ae=null}function r_(e,i,s,l,f,h,S,C,G){e.cancelPendingCommit=null;do Lc();while(yn!==0);if((Ie&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=xf,en(e,s,h,S,C,G),e===Je&&(Ae=Je=null,Ce=0),Cr=i,es=e,Ma=s,Rh=h,Ch=f,K0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(j,function(){return f_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=F.p,F.p=2,S=Ie,Ie|=4;try{BS(e,i,s)}finally{Ie=S,F.p=f,B.T=l}}yn=1,o_(),l_(),c_()}}function o_(){if(yn===1){yn=0;var e=es,i=Cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=F.p;F.p=2;var f=Ie;Ie|=4;try{G0(i,e);var h=kh,S=qm(e.containerInfo),C=h.focusedElem,G=h.selectionRange;if(S!==C&&C&&C.ownerDocument&&Ym(C.ownerDocument.documentElement,C)){if(G!==null&&pf(C)){var at=G.start,mt=G.end;if(mt===void 0&&(mt=at),"selectionStart"in C)C.selectionStart=at,C.selectionEnd=Math.min(mt,C.value.length);else{var Et=C.ownerDocument||document,ut=Et&&Et.defaultView||window;if(ut.getSelection){var dt=ut.getSelection(),ee=C.textContent.length,de=Math.min(G.start,ee),Ze=G.end===void 0?de:Math.min(G.end,ee);!dt.extend&&de>Ze&&(S=Ze,Ze=de,de=S);var $=Wm(C,de),W=Wm(C,Ze);if($&&W&&(dt.rangeCount!==1||dt.anchorNode!==$.node||dt.anchorOffset!==$.offset||dt.focusNode!==W.node||dt.focusOffset!==W.offset)){var it=Et.createRange();it.setStart($.node,$.offset),dt.removeAllRanges(),de>Ze?(dt.addRange(it),dt.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),dt.addRange(it))}}}}for(Et=[],dt=C;dt=dt.parentNode;)dt.nodeType===1&&Et.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Et.length;C++){var St=Et[C];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Xc=!!Vh,kh=Vh=null}finally{Ie=f,F.p=l,B.T=s}}e.current=i,yn=2}}function l_(){if(yn===2){yn=0;var e=es,i=Cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=F.p;F.p=2;var f=Ie;Ie|=4;try{I0(e,i.alternate,i)}finally{Ie=f,F.p=l,B.T=s}}yn=3}}function c_(){if(yn===4||yn===3){yn=0,X();var e=es,i=Cr,s=Ma,l=K0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,Cr=es=null,u_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ts=null),mo(s),i=i.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=F.p,F.p=2,B.T=null;try{for(var h=e.onRecoverableError,S=0;S<l.length;S++){var C=l[S];h(C.value,{componentStack:C.stack})}}finally{B.T=i,F.p=f}}(Ma&3)!==0&&Lc(),Yi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===wh?qo++:(qo=0,wh=e):qo=0,Zo(0)}}function u_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Co(i)))}function Lc(){return o_(),l_(),c_(),f_()}function f_(){if(yn!==5)return!1;var e=es,i=Rh;Rh=0;var s=mo(Ma),l=B.T,f=F.p;try{F.p=32>s?32:s,B.T=null,s=Ch,Ch=null;var h=es,S=Ma;if(yn=0,Cr=es=null,Ma=0,(Ie&6)!==0)throw Error(a(331));var C=Ie;if(Ie|=4,Y0(h.current),k0(h,h.current,S,s),Ie=C,Zo(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ht,h)}catch{}return!0}finally{F.p=f,B.T=l,u_(e,i)}}function h_(e,i,s){i=vi(s,i),i=oh(e.stateNode,i,2),e=Za(e,i,2),e!==null&&(Jt(e,2),Yi(e))}function ke(e,i,s){if(e.tag===3)h_(e,e,s);else for(;i!==null;){if(i.tag===3){h_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ts===null||!ts.has(l))){e=vi(s,e),s=d0(2),l=Za(i,s,2),l!==null&&(p0(s,l,i,e),Jt(l,2),Yi(l));break}}i=i.return}}function Lh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new GS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(bh=!0,f.add(s),e=YS.bind(null,e,i,s),i.then(e,e))}function YS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Je===e&&(Ce&s)===s&&(ln===4||ln===3&&(Ce&62914560)===Ce&&300>me()-Ac?(Ie&2)===0&&wr(e,0):Th|=s,Rr===Ce&&(Rr=0)),Yi(e)}function d_(e,i){i===0&&(i=At()),e=Ls(e,i),e!==null&&(Jt(e,i),Yi(e))}function qS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),d_(e,s)}function ZS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),d_(e,s)}function KS(e,i){return Qt(e,i)}var Nc=null,Ur=null,Nh=!1,Oc=!1,Oh=!1,is=0;function Yi(e){e!==Ur&&e.next===null&&(Ur===null?Nc=Ur=e:Ur=Ur.next=e),Oc=!0,Nh||(Nh=!0,JS())}function Zo(e,i){if(!Oh&&Oc){Oh=!0;do for(var s=!1,l=Nc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,C=l.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=f&~(S&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,__(l,h))}else h=Ce,h=vt(l,l===Je?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ht(l,h)||(s=!0,__(l,h));l=l.next}while(s);Oh=!1}}function QS(){p_()}function p_(){Oc=Nh=!1;var e=0;is!==0&&oM()&&(e=is);for(var i=me(),s=null,l=Nc;l!==null;){var f=l.next,h=m_(l,i);h===0?(l.next=null,s===null?Nc=f:s.next=f,f===null&&(Ur=s)):(s=l,(e!==0||(h&3)!==0)&&(Oc=!0)),l=f}yn!==0&&yn!==5||Zo(e),is!==0&&(is=0)}function m_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Ft(h),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=Yt(C,i)):G<=i&&(e.expiredLanes|=C),h&=~C}if(i=Je,s=Ce,s=vt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ce(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ht(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ce(l),mo(s)){case 2:case 8:s=b;break;case 32:s=j;break;case 268435456:s=K;break;default:s=j}return l=g_.bind(null,e),s=Qt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ce(l),e.callbackPriority=2,e.callbackNode=null,2}function g_(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Lc()&&e.callbackNode!==s)return null;var l=Ce;return l=vt(e,e===Je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(J0(e,l,i),m_(e,me()),e.callbackNode!=null&&e.callbackNode===s?g_.bind(null,e):null)}function __(e,i){if(Lc())return null;J0(e,i,!0)}function JS(){cM(function(){(Ie&6)!==0?Qt(L,QS):p_()})}function Ph(){if(is===0){var e=gr;e===0&&(e=$t,$t<<=1,($t&261888)===0&&($t=256)),is=e}return is}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cs(""+e)}function x_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function jS(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=v_((f[wn]||null).action),S=l.submitter;S&&(i=(i=S[wn]||null)?v_(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var C=new Yl("action","action",null,l,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(is!==0){var G=S?x_(f,S):new FormData(f);eh(s,{pending:!0,data:G,method:f.method,action:h},null,G)}}else typeof h=="function"&&(C.preventDefault(),G=S?x_(f,S):new FormData(f),eh(s,{pending:!0,data:G,method:f.method,action:h},h,G))},currentTarget:f}]})}}for(var Ih=0;Ih<vf.length;Ih++){var zh=vf[Ih],$S=zh.toLowerCase(),tM=zh[0].toUpperCase()+zh.slice(1);Ni($S,"on"+tM)}Ni(Qm,"onAnimationEnd"),Ni(Jm,"onAnimationIteration"),Ni(jm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(gS,"onTransitionRun"),Ni(_S,"onTransitionStart"),Ni(vS,"onTransitionCancel"),Ni($m,"onTransitionEnd"),ct("onMouseEnter",["mouseout","mouseover"]),ct("onMouseLeave",["mouseout","mouseover"]),ct("onPointerEnter",["pointerout","pointerover"]),ct("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function y_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,at=C.currentTarget;if(C=C.listener,G!==h&&f.isPropagationStopped())break t;h=C,f.currentTarget=at;try{h(f)}catch(mt){Kl(mt)}f.currentTarget=null,h=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,at=C.currentTarget,C=C.listener,G!==h&&f.isPropagationStopped())break t;h=C,f.currentTarget=at;try{h(f)}catch(mt){Kl(mt)}f.currentTarget=null,h=G}}}}function Re(e,i){var s=i[Ts];s===void 0&&(s=i[Ts]=new Set);var l=e+"__bubble";s.has(l)||(S_(i,e,2,!1),s.add(l))}function Bh(e,i,s){var l=0;i&&(l|=4),S_(s,e,l,i)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Fh(e){if(!e[Pc]){e[Pc]=!0,Vl.forEach(function(s){s!=="selectionchange"&&(eM.has(s)||Bh(s,!1,e),Bh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Pc]||(i[Pc]=!0,Bh("selectionchange",!1,i))}}function S_(e,i,s,l){switch(Q_(i)){case 2:var f=wM;break;case 8:f=DM;break;default:f=td}s=f.bind(null,i,s,e),f=void 0,!sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Hh(e,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=sa(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=h=S;continue t}C=C.parentNode}}l=l.return}Am(function(){var at=h,mt=nf(s),Et=[];t:{var ut=tg.get(e);if(ut!==void 0){var dt=Yl,ee=e;switch(e){case"keypress":if(Xl(s)===0)break t;case"keydown":case"keyup":dt=Zy;break;case"focusin":ee="focus",dt=cf;break;case"focusout":ee="blur",dt=cf;break;case"beforeblur":case"afterblur":dt=cf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Jy;break;case Qm:case Jm:case jm:dt=Fy;break;case $m:dt=$y;break;case"scroll":case"scrollend":dt=Oy;break;case"wheel":dt=eS;break;case"copy":case"cut":case"paste":dt=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Um;break;case"toggle":case"beforetoggle":dt=iS}var de=(i&4)!==0,Ze=!de&&(e==="scroll"||e==="scrollend"),$=de?ut!==null?ut+"Capture":null:ut;de=[];for(var W=at,it;W!==null;){var St=W;if(it=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||it===null||$===null||(St=_o(W,$),St!=null&&de.push(Qo(W,St,it))),Ze)break;W=W.return}0<de.length&&(ut=new dt(ut,ee,null,s,mt),Et.push({event:ut,listeners:de}))}}if((i&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ut&&s!==ef&&(ee=s.relatedTarget||s.fromElement)&&(sa(ee)||ee[qn]))break t;if((dt||ut)&&(ut=mt.window===mt?mt:(ut=mt.ownerDocument)?ut.defaultView||ut.parentWindow:window,dt?(ee=s.relatedTarget||s.toElement,dt=at,ee=ee?sa(ee):null,ee!==null&&(Ze=c(ee),de=ee.tag,ee!==Ze||de!==5&&de!==27&&de!==6)&&(ee=null)):(dt=null,ee=at),dt!==ee)){if(de=wm,St="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(de=Um,St="onPointerLeave",$="onPointerEnter",W="pointer"),Ze=dt==null?ut:Rs(dt),it=ee==null?ut:Rs(ee),ut=new de(St,W+"leave",dt,s,mt),ut.target=Ze,ut.relatedTarget=it,St=null,sa(mt)===at&&(de=new de($,W+"enter",ee,s,mt),de.target=it,de.relatedTarget=Ze,St=de),Ze=St,dt&&ee)e:{for(de=nM,$=dt,W=ee,it=0,St=$;St;St=de(St))it++;St=0;for(var le=W;le;le=de(le))St++;for(;0<it-St;)$=de($),it--;for(;0<St-it;)W=de(W),St--;for(;it--;){if($===W||W!==null&&$===W.alternate){de=$;break e}$=de($),W=de(W)}de=null}else de=null;dt!==null&&M_(Et,ut,dt,de,!1),ee!==null&&Ze!==null&&M_(Et,Ze,ee,de,!0)}}t:{if(ut=at?Rs(at):window,dt=ut.nodeName&&ut.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ut.type==="file")var Oe=Fm;else if(zm(ut))if(Hm)Oe=dS;else{Oe=fS;var se=uS}else dt=ut.nodeName,!dt||dt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?at&&ze(at.elementType)&&(Oe=Fm):Oe=hS;if(Oe&&(Oe=Oe(e,at))){Bm(Et,Oe,s,mt);break t}se&&se(e,ut,at),e==="focusout"&&at&&ut.type==="number"&&at.memoizedProps.value!=null&&Te(ut,"number",ut.value)}switch(se=at?Rs(at):window,e){case"focusin":(zm(se)||se.contentEditable==="true")&&(lr=se,mf=at,To=null);break;case"focusout":To=mf=lr=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Zm(Et,s,mt);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":Zm(Et,s,mt)}var Se;if(ff)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else or?Pm(e,s)&&(we="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(we="onCompositionStart");we&&(Lm&&s.locale!=="ko"&&(or||we!=="onCompositionStart"?we==="onCompositionEnd"&&or&&(Se=Rm()):(Ga=mt,rf="value"in Ga?Ga.value:Ga.textContent,or=!0)),se=Ic(at,we),0<se.length&&(we=new Dm(we,e,null,s,mt),Et.push({event:we,listeners:se}),Se?we.data=Se:(Se=Im(s),Se!==null&&(we.data=Se)))),(Se=sS?rS(e,s):oS(e,s))&&(we=Ic(at,"onBeforeInput"),0<we.length&&(se=new Dm("onBeforeInput","beforeinput",null,s,mt),Et.push({event:se,listeners:we}),se.data=Se)),jS(Et,e,at,s,mt)}y_(Et,i)})}function Qo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Ic(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=_o(e,s),f!=null&&l.unshift(Qo(e,f,h)),f=_o(e,i),f!=null&&l.push(Qo(e,f,h))),e.tag===3)return l;e=e.return}return[]}function nM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,at=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||at===null||(G=at,f?(at=_o(s,h),at!=null&&S.unshift(Qo(s,at,G))):f||(at=_o(s,h),at!=null&&S.push(Qo(s,at,G)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var iM=/\r\n?/g,aM=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(iM,`
`).replace(aM,"")}function b_(e,i){return i=E_(i),E_(e)===i}function qe(e,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ri(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ri(e,""+l);break;case"className":te(e,"class",l);break;case"tabIndex":te(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,s,l);break;case"style":Li(e,l,h);break;case"data":if(i!=="object"){te(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Cs(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&qe(e,i,"name",f.name,f,null),qe(e,i,"formEncType",f.formEncType,f,null),qe(e,i,"formMethod",f.formMethod,f,null),qe(e,i,"formTarget",f.formTarget,f,null)):(qe(e,i,"encType",f.encType,f,null),qe(e,i,"method",f.method,f,null),qe(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Cs(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=oa);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Cs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Re("beforetoggle",e),Re("toggle",e),kt(e,"popover",l);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Vi.get(s)||s,kt(e,s,l))}}function Gh(e,i,s,l,f,h){switch(s){case"style":Li(e,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ri(e,l):(typeof l=="number"||typeof l=="bigint")&&ri(e,""+l);break;case"onScroll":l!=null&&Re("scroll",e);break;case"onScrollEnd":l!=null&&Re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=e[wn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):kt(e,s,l)}}}function Nn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qe(e,i,h,S,s,null)}}f&&qe(e,i,"srcSet",s.srcSet,s,null),l&&qe(e,i,"src",s.src,s,null);return;case"input":Re("invalid",e);var C=h=S=f=null,G=null,at=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":f=mt;break;case"type":S=mt;break;case"checked":G=mt;break;case"defaultChecked":at=mt;break;case"value":h=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:qe(e,i,l,mt,s,null)}}In(e,h,C,G,at,S,f,!1);return;case"select":Re("invalid",e),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":h=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:qe(e,i,f,C,s,null)}i=h,s=S,e.multiple=!!l,i!=null?xn(e,!!l,i,!1):s!=null&&xn(e,!!l,s,!0);return;case"textarea":Re("invalid",e),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:qe(e,i,S,C,s,null)}Ui(e,l,f,h);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:qe(e,i,G,l,s,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(l=0;l<Ko.length;l++)Re(Ko[l],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(l=s[at],l!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qe(e,i,at,l,s,null)}return;default:if(ze(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&Gh(e,i,mt,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&qe(e,i,C,l,s,null))}function sM(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,C=null,G=null,at=null,mt=null;for(dt in s){var Et=s[dt];if(s.hasOwnProperty(dt)&&Et!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":G=Et;default:l.hasOwnProperty(dt)||qe(e,i,dt,null,l,Et)}}for(var ut in l){var dt=l[ut];if(Et=s[ut],l.hasOwnProperty(ut)&&(dt!=null||Et!=null))switch(ut){case"type":h=dt;break;case"name":f=dt;break;case"checked":at=dt;break;case"defaultChecked":mt=dt;break;case"value":S=dt;break;case"defaultValue":C=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==Et&&qe(e,i,ut,dt,l,Et)}}Zt(e,S,C,G,at,mt,h,f);return;case"select":dt=S=C=ut=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":dt=G;default:l.hasOwnProperty(h)||qe(e,i,h,null,l,G)}for(f in l)if(h=l[f],G=s[f],l.hasOwnProperty(f)&&(h!=null||G!=null))switch(f){case"value":ut=h;break;case"defaultValue":C=h;break;case"multiple":S=h;default:h!==G&&qe(e,i,f,h,l,G)}i=C,s=S,l=dt,ut!=null?xn(e,!!s,ut,!1):!!l!=!!s&&(i!=null?xn(e,!!s,i,!0):xn(e,!!s,s?[]:"",!1));return;case"textarea":dt=ut=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qe(e,i,C,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":ut=f;break;case"defaultValue":dt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&qe(e,i,S,f,l,h)}si(e,ut,dt);return;case"option":for(var ee in s)if(ut=s[ee],s.hasOwnProperty(ee)&&ut!=null&&!l.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:qe(e,i,ee,null,l,ut)}for(G in l)if(ut=l[G],dt=s[G],l.hasOwnProperty(G)&&ut!==dt&&(ut!=null||dt!=null))switch(G){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:qe(e,i,G,ut,l,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in s)ut=s[de],s.hasOwnProperty(de)&&ut!=null&&!l.hasOwnProperty(de)&&qe(e,i,de,null,l,ut);for(at in l)if(ut=l[at],dt=s[at],l.hasOwnProperty(at)&&ut!==dt&&(ut!=null||dt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:qe(e,i,at,ut,l,dt)}return;default:if(ze(i)){for(var Ze in s)ut=s[Ze],s.hasOwnProperty(Ze)&&ut!==void 0&&!l.hasOwnProperty(Ze)&&Gh(e,i,Ze,void 0,l,ut);for(mt in l)ut=l[mt],dt=s[mt],!l.hasOwnProperty(mt)||ut===dt||ut===void 0&&dt===void 0||Gh(e,i,mt,ut,l,dt);return}}for(var $ in s)ut=s[$],s.hasOwnProperty($)&&ut!=null&&!l.hasOwnProperty($)&&qe(e,i,$,null,l,ut);for(Et in l)ut=l[Et],dt=s[Et],!l.hasOwnProperty(Et)||ut===dt||ut==null&&dt==null||qe(e,i,Et,ut,l,dt)}function T_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,C=f.duration;if(h&&C&&T_(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],at=G.startTime;if(at>C)break;var mt=G.transferSize,Et=G.initiatorType;mt&&T_(Et)&&(G=G.responseEnd,S+=mt*(G<C?1:(C-at)/(G-at)))}if(--l,i+=8*(h+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vh=null,kh=null;function zc(e){return e.nodeType===9?e:e.ownerDocument}function A_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Xh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wh=null;function oM(){var e=window.event;return e&&e.type==="popstate"?e===Wh?!1:(Wh=e,!0):(Wh=null,!1)}var C_=typeof setTimeout=="function"?setTimeout:void 0,lM=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,cM=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(uM)}:C_;function uM(e){setTimeout(function(){throw e})}function as(e){return e==="head"}function D_(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),Pr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Jo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Jo(s);for(var h=s.firstChild;h;){var S=h.nextSibling,C=h.nodeName;h[za]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&Jo(e.ownerDocument.body);s=f}while(s);Pr(i)}function U_(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Yh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Yh(s),Ba(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function fM(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[za])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function hM(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ei(e.nextSibling),e===null))return null;return e}function L_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ei(e.nextSibling),e===null))return null;return e}function qh(e){return e.data==="$?"||e.data==="$~"}function Zh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dM(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ei(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Kh=null;function N_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ei(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function O_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function P_(e,i,s){switch(i=zc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Jo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ba(e)}var bi=new Map,I_=new Set;function Bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=F.d;F.d={f:pM,r:mM,D:gM,C:_M,L:vM,m:xM,X:SM,S:yM,M:MM};function pM(){var e=Ea.f(),i=wc();return e||i}function mM(e){var i=ra(e);i!==null&&i.tag===5&&i.type==="form"?$g(i):Ea.r(e)}var Lr=typeof document>"u"?null:document;function z_(e,i,s){var l=Lr;if(l&&typeof i=="string"&&i){var f=He(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),I_.has(f)||(I_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Nn(i,"link",e),dn(i),l.head.appendChild(i)))}}function gM(e){Ea.D(e),z_("dns-prefetch",e,null)}function _M(e,i){Ea.C(e,i),z_("preconnect",e,i)}function vM(e,i,s){Ea.L(e,i,s);var l=Lr;if(l&&e&&i){var f='link[rel="preload"][as="'+He(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+He(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+He(s.imageSizes)+'"]')):f+='[href="'+He(e)+'"]';var h=f;switch(i){case"style":h=Nr(e);break;case"script":h=Or(e)}bi.has(h)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),bi.set(h,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(jo(h))||i==="script"&&l.querySelector($o(h))||(i=l.createElement("link"),Nn(i,"link",e),dn(i),l.head.appendChild(i)))}}function xM(e,i){Ea.m(e,i);var s=Lr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+He(l)+'"][href="'+He(e)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Or(e)}if(!bi.has(h)&&(e=v({rel:"modulepreload",href:e},i),bi.set(h,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($o(h)))return}l=s.createElement("link"),Nn(l,"link",e),dn(l),s.head.appendChild(l)}}}function yM(e,i,s){Ea.S(e,i,s);var l=Lr;if(l&&e){var f=Fa(l).hoistableStyles,h=Nr(e);i=i||"default";var S=f.get(h);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(jo(h)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=bi.get(h))&&Qh(e,s);var G=S=l.createElement("link");dn(G),Nn(G,"link",e),G._p=new Promise(function(at,mt){G.onload=at,G.onerror=mt}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Fc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(h,S)}}}function SM(e,i){Ea.X(e,i);var s=Lr;if(s&&e){var l=Fa(s).hoistableScripts,f=Or(e),h=l.get(f);h||(h=s.querySelector($o(f)),h||(e=v({src:e,async:!0},i),(i=bi.get(f))&&Jh(e,i),h=s.createElement("script"),dn(h),Nn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function MM(e,i){Ea.M(e,i);var s=Lr;if(s&&e){var l=Fa(s).hoistableScripts,f=Or(e),h=l.get(f);h||(h=s.querySelector($o(f)),h||(e=v({src:e,async:!0,type:"module"},i),(i=bi.get(f))&&Jh(e,i),h=s.createElement("script"),dn(h),Nn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function B_(e,i,s,l){var f=(f=nt.current)?Bc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Nr(s.href),s=Fa(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Nr(s.href);var h=Fa(f).hoistableStyles,S=h.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=f.querySelector(jo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),bi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},bi.set(e,s),h||EM(f,e,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Or(s),s=Fa(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Nr(e){return'href="'+He(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function F_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function EM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),dn(i),e.head.appendChild(i))}function Or(e){return'[src="'+He(e)+'"]'}function $o(e){return"script[async]"+e}function H_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+He(s.href)+'"]');if(l)return i.instance=l,dn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dn(l),Nn(l,"style",f),Fc(l,s.precedence,e),i.instance=l;case"stylesheet":f=Nr(s.href);var h=e.querySelector(jo(f));if(h)return i.state.loading|=4,i.instance=h,dn(h),h;l=F_(s),(f=bi.get(f))&&Qh(l,f),h=(e.ownerDocument||e).createElement("link"),dn(h);var S=h;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Nn(h,"link",l),i.state.loading|=4,Fc(h,s.precedence,e),i.instance=h;case"script":return h=Or(s.src),(f=e.querySelector($o(h)))?(i.instance=f,dn(f),f):(l=s,(f=bi.get(h))&&(l=v({},s),Jh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),dn(f),Nn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Fc(l,s.precedence,e));return i.instance}function Fc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)h=C;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Qh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Jh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Hc=null;function G_(e,i,s){if(Hc===null){var l=new Map,f=Hc=new Map;f.set(s,l)}else f=Hc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var h=s[f];if(!(h[za]||h[hn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=e+S;var C=l.get(S);C?C.push(h):l.set(S,[h])}}return l}function V_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function bM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function TM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Nr(l.href),h=i.querySelector(jo(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Gc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,dn(h);return}h=i.ownerDocument||i,l=F_(l),(f=bi.get(f))&&Qh(l,f),h=h.createElement("link"),dn(h);var S=h;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Nn(h,"link",l),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Gc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var jh=0;function AM(e,i){return e.stylesheets&&e.count===0&&kc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&jh===0&&(jh=62500*rM());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>jh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vc=null;function kc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,i.forEach(RM,e),Vc=null,Gc.call(e))}function RM(e,i){if(!(i.state.loading&4)){var s=Vc.get(e);if(s)var l=s.get(null);else{s=new Map,Vc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=Gc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var tl={$$typeof:N,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function CM(e,i,s,l,f,h,S,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ae(0),this.hiddenUpdates=ae(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function X_(e,i,s,l,f,h,S,C,G,at,mt,Et){return e=new CM(e,i,s,S,G,at,mt,Et,C),i=1,h===!0&&(i|=24),h=li(3,null,null,i),e.current=h,h.stateNode=e,i=Uf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Pf(h),e}function W_(e){return e?(e=fr,e):fr}function Y_(e,i,s,l,f,h){f=W_(f),l.context===null?l.context=f:l.pendingContext=f,l=qa(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Za(e,l,i),s!==null&&($n(s,e,i),Lo(s,e,i))}function q_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function $h(e,i){q_(e,i),(e=e.alternate)&&q_(e,i)}function Z_(e){if(e.tag===13||e.tag===31){var i=Ls(e,67108864);i!==null&&$n(i,e,67108864),$h(e,67108864)}}function K_(e){if(e.tag===13||e.tag===31){var i=di();i=po(i);var s=Ls(e,i);s!==null&&$n(s,e,i),$h(e,i)}}var Xc=!0;function wM(e,i,s,l){var f=B.T;B.T=null;var h=F.p;try{F.p=2,td(e,i,s,l)}finally{F.p=h,B.T=f}}function DM(e,i,s,l){var f=B.T;B.T=null;var h=F.p;try{F.p=8,td(e,i,s,l)}finally{F.p=h,B.T=f}}function td(e,i,s,l){if(Xc){var f=ed(l);if(f===null)Hh(e,i,l,Wc,s),J_(e,l);else if(LM(f,e,i,s,l))l.stopPropagation();else if(J_(e,l),i&4&&-1<UM.indexOf(e)){for(;f!==null;){var h=ra(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=It(h.pendingLanes);if(S!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-Ft(S);C.entanglements[1]|=G,S&=~G}Yi(h),(Ie&6)===0&&(Rc=me()+500,Zo(0))}}break;case 31:case 13:C=Ls(h,2),C!==null&&$n(C,h,2),wc(),$h(h,2)}if(h=ed(l),h===null&&Hh(e,i,l,Wc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Hh(e,i,l,null,s)}}function ed(e){return e=nf(e),nd(e)}var Wc=null;function nd(e){if(Wc=null,e=sa(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=p(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Wc=e,null}function Q_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case L:return 2;case b:return 8;case j:case st:return 32;case K:return 268435456;default:return 32}default:return 32}}var id=!1,ss=null,rs=null,os=null,el=new Map,nl=new Map,ls=[],UM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J_(e,i){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":el.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(i.pointerId)}}function il(e,i,s,l,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ra(i),i!==null&&Z_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function LM(e,i,s,l,f){switch(i){case"focusin":return ss=il(ss,e,i,s,l,f),!0;case"dragenter":return rs=il(rs,e,i,s,l,f),!0;case"mouseover":return os=il(os,e,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return el.set(h,il(el.get(h)||null,e,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,nl.set(h,il(nl.get(h)||null,e,i,s,l,f)),!0}return!1}function j_(e){var i=sa(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,ar(e.priority,function(){K_(s)});return}}else if(i===31){if(i=p(s),i!==null){e.blockedOn=i,ar(e.priority,function(){K_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ed(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);ef=l,s.target.dispatchEvent(l),ef=null}else return i=ra(s),i!==null&&Z_(i),e.blockedOn=s,!1;i.shift()}return!0}function $_(e,i,s){Yc(e)&&s.delete(i)}function NM(){id=!1,ss!==null&&Yc(ss)&&(ss=null),rs!==null&&Yc(rs)&&(rs=null),os!==null&&Yc(os)&&(os=null),el.forEach($_),nl.forEach($_)}function qc(e,i){e.blockedOn===i&&(e.blockedOn=null,id||(id=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,NM)))}var Zc=null;function tv(e){Zc!==e&&(Zc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zc===e&&(Zc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(nd(l||s)===null)continue;break}var h=ra(s);h!==null&&(e.splice(i,3),i-=3,eh(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Pr(e){function i(G){return qc(G,e)}ss!==null&&qc(ss,e),rs!==null&&qc(rs,e),os!==null&&qc(os,e),el.forEach(i),nl.forEach(i);for(var s=0;s<ls.length;s++){var l=ls[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ls.length&&(s=ls[0],s.blockedOn===null);)j_(s),s.blockedOn===null&&ls.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[wn]||null;if(typeof h=="function")S||tv(s);else if(S){var C=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[wn]||null)C=S.formAction;else if(nd(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),tv(s)}}}function ev(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function ad(e){this._internalRoot=e}Kc.prototype.render=ad.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=di();Y_(s,l,e,i,null,null)},Kc.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Y_(e.current,2,null,e,null,null),wc(),i[qn]=null}};function Kc(e){this._internalRoot=e}Kc.prototype.unstable_scheduleHydration=function(e){if(e){var i=go();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ls.length&&i!==0&&i<ls[s].priority;s++);ls.splice(s,0,e),s===0&&j_(e)}};var nv=t.version;if(nv!=="19.2.1")throw Error(a(527,nv,"19.2.1"));F.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var OM={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{ht=Qc.inject(OM),et=Qc}catch{}}return sl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=c0,h=u0,S=f0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=X_(e,1,!1,null,null,s,l,null,f,h,S,ev),e[qn]=i.current,Fh(e),new ad(i)},sl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",h=c0,S=u0,C=f0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=X_(e,1,!0,i,s??null,l,f,G,h,S,C,ev),i.context=W_(null),s=i.current,l=di(),l=po(l),f=qa(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,Jt(i,s),Yi(i),e[qn]=i.current,Fh(e),new Kc(i)},sl.version="19.2.1",sl}var hv;function XM(){if(hv)return rd.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=kM(),rd.exports}var WM=XM(),ei=tm();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="185",ao={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YM=0,dv=1,qM=2,Du=1,ZM=2,vl=3,ys=0,ni=1,Qi=2,La=0,tr=1,Na=2,pv=3,mv=4,KM=5,Ks=100,QM=101,JM=102,jM=103,$M=104,tE=200,eE=201,nE=202,iE=203,Jd=204,jd=205,aE=206,sE=207,rE=208,oE=209,lE=210,cE=211,uE=212,fE=213,hE=214,$d=0,tp=1,ep=2,oo=3,np=4,ip=5,ap=6,sp=7,Ox=0,dE=1,pE=2,$i=0,Px=1,Ix=2,zx=3,nm=4,Bx=5,Fx=6,Hx=7,Gx=300,er=301,lo=302,fd=303,hd=304,Ju=306,rp=1e3,Ua=1001,op=1002,On=1003,mE=1004,Jc=1005,Hn=1006,dd=1007,Js=1008,Ri=1009,Vx=1010,kx=1011,Al=1012,im=1013,na=1014,Ji=1015,Pa=1016,am=1017,sm=1018,Rl=1020,Xx=35902,Wx=35899,Yx=1021,qx=1022,Hi=1023,Ia=1026,js=1027,Zx=1028,rm=1029,nr=1030,om=1031,lm=1033,Uu=33776,Lu=33777,Nu=33778,Ou=33779,lp=35840,cp=35841,up=35842,fp=35843,hp=36196,dp=37492,pp=37496,mp=37488,gp=37489,zu=37490,_p=37491,vp=37808,xp=37809,yp=37810,Sp=37811,Mp=37812,Ep=37813,bp=37814,Tp=37815,Ap=37816,Rp=37817,Cp=37818,wp=37819,Dp=37820,Up=37821,Lp=36492,Np=36494,Op=36495,Pp=36283,Ip=36284,Bu=36285,zp=36286,gE=3200,Bp=0,_E=1,_s="",Wn="srgb",Fu="srgb-linear",Hu="linear",Xe="srgb",Ir=7680,gv=519,vE=512,xE=513,yE=514,cm=515,SE=516,ME=517,um=518,EE=519,Fp=35044,_v="300 es",ji=2e3,Gu=2001;function bE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TE(){const r=Cl("canvas");return r.style.display="block",r}const vv={};function Vu(...r){const t="THREE."+r.shift();console.log(t,...r)}function Kx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ue(...r){r=Kx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function De(...r){r=Kx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function so(...r){const t=r.join(" ");t in vv||(vv[t]=!0,ue(...r))}function AE(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const RE={[$d]:tp,[ep]:ap,[np]:sp,[oo]:ip,[tp]:$d,[ap]:ep,[sp]:np,[ip]:oo};class Es{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xv=1234567;const Sl=Math.PI/180,wl=180/Math.PI;function ta(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function Ee(r,t,n){return Math.max(t,Math.min(n,r))}function fm(r,t){return(r%t+t)%t}function CE(r,t,n,a,o){return a+(r-t)*(o-a)/(n-t)}function wE(r,t,n){return r!==t?(n-r)/(t-r):0}function Ml(r,t,n){return(1-n)*r+n*t}function DE(r,t,n,a){return Ml(r,t,1-Math.exp(-n*a))}function UE(r,t=1){return t-Math.abs(fm(r,t*2)-t)}function LE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function NE(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function OE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function PE(r,t){return r+Math.random()*(t-r)}function IE(r){return r*(.5-Math.random())}function zE(r){r!==void 0&&(xv=r);let t=xv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function BE(r){return r*Sl}function FE(r){return r*wl}function HE(r){return(r&r-1)===0&&r!==0}function GE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function VE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kE(r,t,n,a,o){const c=Math.cos,u=Math.sin,p=c(n/2),m=u(n/2),d=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),E=u((a-t)/2);switch(o){case"XYX":r.set(p*g,m*v,m*_,p*d);break;case"YZY":r.set(m*_,p*g,m*v,p*d);break;case"ZXZ":r.set(m*v,m*_,p*g,p*d);break;case"XZX":r.set(p*g,m*E,m*x,p*d);break;case"YXY":r.set(m*x,p*g,m*E,p*d);break;case"ZYZ":r.set(m*E,m*x,p*g,p*d);break;default:ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Fi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gi={DEG2RAD:Sl,RAD2DEG:wl,generateUUID:ta,clamp:Ee,euclideanModulo:fm,mapLinear:CE,inverseLerp:wE,lerp:Ml,damp:DE,pingpong:UE,smoothstep:LE,smootherstep:NE,randInt:OE,randFloat:PE,randFloatSpread:IE,seededRandom:zE,degToRad:BE,radToDeg:FE,isPowerOfTwo:HE,ceilPowerOfTwo:GE,floorPowerOfTwo:VE,setQuaternionFromProperEuler:kE,normalize:We,denormalize:Fi},ym=class ym{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;let Dt=ym;class Ss{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,p){let m=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3],_=c[u+0],x=c[u+1],E=c[u+2],A=c[u+3];if(v!==A||m!==_||d!==x||g!==E){let M=m*_+d*x+g*E+v*A;M<0&&(_=-_,x=-x,E=-E,A=-A,M=-M);let y=1-p;if(M<.9995){const z=Math.acos(M),N=Math.sin(z);y=Math.sin(y*z)/N,p=Math.sin(p*z)/N,m=m*y+_*p,d=d*y+x*p,g=g*y+E*p,v=v*y+A*p}else{m=m*y+_*p,d=d*y+x*p,g=g*y+E*p,v=v*y+A*p;const z=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=z,d*=z,g*=z,v*=z}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const p=a[o],m=a[o+1],d=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],E=c[u+3];return t[n]=p*E+g*v+m*x-d*_,t[n+1]=m*E+g*_+d*v-p*x,t[n+2]=d*E+g*x+p*_-m*v,t[n+3]=g*E-p*v-m*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,p=Math.cos,m=Math.sin,d=p(a/2),g=p(o/2),v=p(c/2),_=m(a/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"YXZ":this._x=_*g*v+d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"ZXY":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v-_*x*E;break;case"ZYX":this._x=_*g*v-d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v+_*x*E;break;case"YZX":this._x=_*g*v+d*x*E,this._y=d*x*v+_*g*E,this._z=d*g*E-_*x*v,this._w=d*g*v-_*x*E;break;case"XZY":this._x=_*g*v-d*x*E,this._y=d*x*v-_*g*E,this._z=d*g*E+_*x*v,this._w=d*g*v+_*x*E;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],p=n[5],m=n[9],d=n[2],g=n[6],v=n[10],_=a+p+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>p&&a>v){const x=2*Math.sqrt(1+a-p-v);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(p>v){const x=2*Math.sqrt(1+p-a-v);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-a-p);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,p=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+u*p+o*d-c*m,this._y=o*g+u*m+c*p-a*d,this._z=c*g+u*d+a*m-o*p,this._w=u*g-a*p-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,p=this.dot(t);p<0&&(a=-a,o=-o,c=-c,u=-u,p=-p);let m=1-n;if(p<.9995){const d=Math.acos(p),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sm=class Sm{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(yv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(yv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,p=t.z,m=t.w,d=2*(u*o-p*a),g=2*(p*n-c*o),v=2*(c*a-u*n);return this.x=n+m*d+u*v-p*g,this.y=a+m*g+p*d-c*v,this.z=o+m*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,p=n.y,m=n.z;return this.x=o*m-c*p,this.y=c*u-a*m,this.z=a*p-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return pd.copy(this).projectOnVector(t),this.sub(pd)}reflect(t){return this.sub(pd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sm.prototype.isVector3=!0;let k=Sm;const pd=new k,yv=new Ss,Mm=class Mm{constructor(t,n,a,o,c,u,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,p,m,d)}set(t,n,a,o,c,u,p,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=p,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],p=a[3],m=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],E=a[8],A=o[0],M=o[3],y=o[6],z=o[1],N=o[4],w=o[7],O=o[2],D=o[5],I=o[8];return c[0]=u*A+p*z+m*O,c[3]=u*M+p*N+m*D,c[6]=u*y+p*w+m*I,c[1]=d*A+g*z+v*O,c[4]=d*M+g*N+v*D,c[7]=d*y+g*w+v*I,c[2]=_*A+x*z+E*O,c[5]=_*M+x*N+E*D,c[8]=_*y+x*w+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*p*d-a*c*g+a*p*m+o*c*d-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],d=t[7],g=t[8],v=g*u-p*d,_=p*m-g*c,x=d*c-u*m,E=n*v+a*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(o*d-g*a)*A,t[2]=(p*a-o*u)*A,t[3]=_*A,t[4]=(g*n-o*m)*A,t[5]=(o*c-p*n)*A,t[6]=x*A,t[7]=(a*m-d*n)*A,t[8]=(u*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,p){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*u+d*p)+u+t,-o*d,o*m,-o*(-d*u+m*p)+p+n,0,0,1),this}scale(t,n){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(t,n)),this}rotate(t){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-t)),this}translate(t,n){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mm.prototype.isMatrix3=!0;let ve=Mm;const md=new ve,Sv=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const r={enabled:!0,workingColorSpace:Fu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_s?Hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Fu]:{primaries:t,whitePoint:a,transfer:Hu,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Le=XE();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class WE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{zr===void 0&&(zr=Cl("canvas")),zr.width=t.width,zr.height=t.height;const o=zr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=zr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Cl("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let YE=0;class hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?c.push(gd(o[u].image)):c.push(gd(o[u]))}else c=gd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function gd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?WE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let qE=0;const _d=new k;class Pn extends Es{constructor(t=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,a=Ua,o=Ua,c=Hn,u=Js,p=Hi,m=Ri,d=Pn.DEFAULT_ANISOTROPY,g=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=ta(),this.name="",this.source=new hm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rp:t.x=t.x-Math.floor(t.x);break;case Ua:t.x=t.x<0?0:1;break;case op:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rp:t.y=t.y-Math.floor(t.y);break;case Ua:t.y=t.y<0?0:1;break;case op:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gx;Pn.DEFAULT_ANISOTROPY=1;const Em=class Em{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,d=m[0],g=m[4],v=m[8],_=m[1],x=m[5],E=m[9],A=m[2],M=m[6],y=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+M)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,w=(x+1)/2,O=(y+1)/2,D=(g+_)/4,I=(v+A)/4,T=(E+M)/4;return N>w&&N>O?N<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(N),o=D/a,c=I/a):w>O?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=D/o,c=T/o):O<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),a=I/c,o=T/c),this.set(a,o,c,n),this}let z=Math.sqrt((M-E)*(M-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(v-A)/z,this.z=(_-g)/z,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Em.prototype.isVector4=!0;let cn=Em;class ZE extends Es{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new cn(0,0,t,n),this.scissorTest=!1,this.viewport=new cn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Pn(o),u=a.count;for(let p=0;p<u;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new hm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends ZE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Qx extends Pn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class KE extends Pn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=class Qu{constructor(t,n,a,o,c,u,p,m,d,g,v,_,x,E,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,p,m,d,g,v,_,x,E,A,M)}set(t,n,a,o,c,u,p,m,d,g,v,_,x,E,A,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=p,y[13]=m,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qu().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Br.setFromMatrixColumn(t,0).length(),c=1/Br.setFromMatrixColumn(t,1).length(),u=1/Br.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),p=Math.sin(a),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,E=p*g,A=p*v;n[0]=m*g,n[4]=-m*v,n[8]=d,n[1]=x+E*d,n[5]=_-A*d,n[9]=-p*m,n[2]=A-_*d,n[6]=E+x*d,n[10]=u*m}else if(t.order==="YXZ"){const _=m*g,x=m*v,E=d*g,A=d*v;n[0]=_+A*p,n[4]=E*p-x,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-p,n[2]=x*p-E,n[6]=A+_*p,n[10]=u*m}else if(t.order==="ZXY"){const _=m*g,x=m*v,E=d*g,A=d*v;n[0]=_-A*p,n[4]=-u*v,n[8]=E+x*p,n[1]=x+E*p,n[5]=u*g,n[9]=A-_*p,n[2]=-u*d,n[6]=p,n[10]=u*m}else if(t.order==="ZYX"){const _=u*g,x=u*v,E=p*g,A=p*v;n[0]=m*g,n[4]=E*d-x,n[8]=_*d+A,n[1]=m*v,n[5]=A*d+_,n[9]=x*d-E,n[2]=-d,n[6]=p*m,n[10]=u*m}else if(t.order==="YZX"){const _=u*m,x=u*d,E=p*m,A=p*d;n[0]=m*g,n[4]=A-_*v,n[8]=E*v+x,n[1]=v,n[5]=u*g,n[9]=-p*g,n[2]=-d*g,n[6]=x*v+E,n[10]=_-A*v}else if(t.order==="XZY"){const _=u*m,x=u*d,E=p*m,A=p*d;n[0]=m*g,n[4]=-v,n[8]=d*g,n[1]=_*v+A,n[5]=u*g,n[9]=x*v-E,n[2]=E*v-x,n[6]=p*g,n[10]=A*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(QE,t,JE)}lookAt(t,n,a){const o=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),us.crossVectors(a,pi),us.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),us.crossVectors(a,pi)),us.normalize(),jc.crossVectors(pi,us),o[0]=us.x,o[4]=jc.x,o[8]=pi.x,o[1]=us.y,o[5]=jc.y,o[9]=pi.y,o[2]=us.z,o[6]=jc.z,o[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],p=a[4],m=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],E=a[2],A=a[6],M=a[10],y=a[14],z=a[3],N=a[7],w=a[11],O=a[15],D=o[0],I=o[4],T=o[8],U=o[12],V=o[1],H=o[5],J=o[9],ft=o[13],gt=o[2],Z=o[6],B=o[10],F=o[14],tt=o[3],pt=o[7],Tt=o[11],P=o[15];return c[0]=u*D+p*V+m*gt+d*tt,c[4]=u*I+p*H+m*Z+d*pt,c[8]=u*T+p*J+m*B+d*Tt,c[12]=u*U+p*ft+m*F+d*P,c[1]=g*D+v*V+_*gt+x*tt,c[5]=g*I+v*H+_*Z+x*pt,c[9]=g*T+v*J+_*B+x*Tt,c[13]=g*U+v*ft+_*F+x*P,c[2]=E*D+A*V+M*gt+y*tt,c[6]=E*I+A*H+M*Z+y*pt,c[10]=E*T+A*J+M*B+y*Tt,c[14]=E*U+A*ft+M*F+y*P,c[3]=z*D+N*V+w*gt+O*tt,c[7]=z*I+N*H+w*Z+O*pt,c[11]=z*T+N*J+w*B+O*Tt,c[15]=z*U+N*ft+w*F+O*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],p=t[5],m=t[9],d=t[13],g=t[2],v=t[6],_=t[10],x=t[14],E=t[3],A=t[7],M=t[11],y=t[15],z=m*x-d*_,N=p*x-d*v,w=p*_-m*v,O=u*x-d*g,D=u*_-m*g,I=u*v-p*g;return n*(A*z-M*N+y*w)-a*(E*z-M*O+y*D)+o*(E*N-A*O+y*I)-c*(E*w-A*D+M*I)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],p=t[9],m=t[2],d=t[6],g=t[10];return n*(u*g-p*d)-a*(c*g-p*m)+o*(c*d-u*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],d=t[7],g=t[8],v=t[9],_=t[10],x=t[11],E=t[12],A=t[13],M=t[14],y=t[15],z=n*p-a*u,N=n*m-o*u,w=n*d-c*u,O=a*m-o*p,D=a*d-c*p,I=o*d-c*m,T=g*A-v*E,U=g*M-_*E,V=g*y-x*E,H=v*M-_*A,J=v*y-x*A,ft=_*y-x*M,gt=z*ft-N*J+w*H+O*V-D*U+I*T;if(gt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/gt;return t[0]=(p*ft-m*J+d*H)*Z,t[1]=(o*J-a*ft-c*H)*Z,t[2]=(A*I-M*D+y*O)*Z,t[3]=(_*D-v*I-x*O)*Z,t[4]=(m*V-u*ft-d*U)*Z,t[5]=(n*ft-o*V+c*U)*Z,t[6]=(M*w-E*I-y*N)*Z,t[7]=(g*I-_*w+x*N)*Z,t[8]=(u*J-p*V+d*T)*Z,t[9]=(a*V-n*J-c*T)*Z,t[10]=(E*D-A*w+y*z)*Z,t[11]=(v*w-g*D-x*z)*Z,t[12]=(p*U-u*H-m*T)*Z,t[13]=(n*H-a*U+o*T)*Z,t[14]=(A*N-E*O-M*z)*Z,t[15]=(g*O-v*N+_*z)*Z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,p=t.y,m=t.z,d=c*u,g=c*p;return this.set(d*u+a,d*p-o*m,d*m+o*p,0,d*p+o*m,g*p+a,g*m-o*u,0,d*m-o*p,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,p=n._z,m=n._w,d=c+c,g=u+u,v=p+p,_=c*d,x=c*g,E=c*v,A=u*g,M=u*v,y=p*v,z=m*d,N=m*g,w=m*v,O=a.x,D=a.y,I=a.z;return o[0]=(1-(A+y))*O,o[1]=(x+w)*O,o[2]=(E-N)*O,o[3]=0,o[4]=(x-w)*D,o[5]=(1-(_+y))*D,o[6]=(M+z)*D,o[7]=0,o[8]=(E+N)*I,o[9]=(M-z)*I,o[10]=(1-(_+A))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Br.set(o[0],o[1],o[2]).length();const p=Br.set(o[4],o[5],o[6]).length(),m=Br.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ii.copy(this);const d=1/u,g=1/p,v=1/m;return Ii.elements[0]*=d,Ii.elements[1]*=d,Ii.elements[2]*=d,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,n.setFromRotationMatrix(Ii),a.x=u,a.y=p,a.z=m,this}makePerspective(t,n,a,o,c,u,p=ji,m=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(p===ji)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(p===Gu)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,p=ji,m=!1){const d=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),x=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(p===ji)E=-2/(u-c),A=-(u+c)/(u-c);else if(p===Gu)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Qu.prototype.isMatrix4=!0;let tn=Qu;const Br=new k,Ii=new tn,QE=new k(0,0,0),JE=new k(1,1,1),us=new k,jc=new k,pi=new k,Ev=new tn,bv=new Ss;class Ms{constructor(t=0,n=0,a=0,o=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],p=o[8],m=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,x));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ev,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return bv.setFromEuler(this),this.setFromQuaternion(bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class dm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jE=0;const Tv=new k,Fr=new Ss,ba=new tn,$c=new k,rl=new k,$E=new k,tb=new Ss,Av=new k(1,0,0),Rv=new k(0,1,0),Cv=new k(0,0,1),wv={type:"added"},eb={type:"removed"},Hr={type:"childadded",child:null},vd={type:"childremoved",child:null};class Gn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new k,n=new Ms,a=new Ss,o=new k(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new ve}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(Av,t)}rotateY(t){return this.rotateOnAxis(Rv,t)}rotateZ(t){return this.rotateOnAxis(Cv,t)}translateOnAxis(t,n){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Av,t)}translateY(t){return this.translateOnAxis(Rv,t)}translateZ(t){return this.translateOnAxis(Cv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?$c.copy(t):$c.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(rl,$c,this.up):ba.lookAt($c,rl,this.up),this.quaternion.setFromRotationMatrix(ba),o&&(ba.extractRotation(o.matrixWorld),Fr.setFromRotationMatrix(ba),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eb),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wv),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,t,$E),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,tb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,p=c.length;u<p;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));o.material=p}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(t.animations,m))}}if(n){const p=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),E=u(t.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new k(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wi extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,a),y=this._getHandJoint(d,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new wi;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},tu={h:0,s:0,l:0};function yd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class be{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Le.workingColorSpace){return this.r=t,this.g=n,this.b=a,Le.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Le.workingColorSpace){if(t=fm(t,1),n=Ee(n,0,1),a=Ee(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=yd(u,c,t+1/3),this.g=yd(u,c,t),this.b=yd(u,c,t-1/3)}return Le.colorSpaceToWorking(this,o),this}setStyle(t,n=Wn){function a(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){const a=Jx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Le.workingToColorSpace(Fn.copy(this),t),Math.round(Ee(Fn.r*255,0,255))*65536+Math.round(Ee(Fn.g*255,0,255))*256+Math.round(Ee(Fn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.workingToColorSpace(Fn.copy(this),n);const a=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(a,o,c),p=Math.min(a,o,c);let m,d;const g=(p+u)/2;if(p===u)m=0,d=0;else{const v=u-p;switch(d=g<=.5?v/(u+p):v/(2-u-p),u){case a:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-a)/v+2;break;case c:m=(a-o)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Le.workingColorSpace){return Le.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Wn){Le.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,a=Fn.g,o=Fn.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+n,fs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(fs),t.getHSL(tu);const a=Ml(fs.h,tu.h,n),o=Ml(fs.s,tu.s,n),c=Ml(fs.l,tu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new be;be.NAMES=Jx;class ib extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zi=new k,Ta=new k,Sd=new k,Aa=new k,Gr=new k,Vr=new k,Dv=new k,Md=new k,Ed=new k,bd=new k,Td=new cn,Ad=new cn,Rd=new cn;class Ci{constructor(t=new k,n=new k,a=new k){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),zi.subVectors(t,n),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){zi.subVectors(o,n),Ta.subVectors(a,n),Sd.subVectors(t,n);const u=zi.dot(zi),p=zi.dot(Ta),m=zi.dot(Sd),d=Ta.dot(Ta),g=Ta.dot(Sd),v=u*d-p*p;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(d*m-p*g)*_,E=(u*g-p*m)*_;return c.set(1-x-E,E,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,n,a,o,c,u,p,m){return this.getBarycoord(t,n,a,o,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(u,Aa.y),m.addScaledVector(p,Aa.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(t,n),Ad.fromBufferAttribute(t,a),Rd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Td,c.x),u.addScaledVector(Ad,c.y),u.addScaledVector(Rd,c.z),u}static isFrontFacing(t,n,a,o){return zi.subVectors(a,n),Ta.subVectors(t,n),zi.cross(Ta).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ci.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ci.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,p;Gr.subVectors(o,a),Vr.subVectors(c,a),Md.subVectors(t,a);const m=Gr.dot(Md),d=Vr.dot(Md);if(m<=0&&d<=0)return n.copy(a);Ed.subVectors(t,o);const g=Gr.dot(Ed),v=Vr.dot(Ed);if(g>=0&&v<=g)return n.copy(o);const _=m*v-g*d;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Gr,u);bd.subVectors(t,c);const x=Gr.dot(bd),E=Vr.dot(bd);if(E>=0&&x<=E)return n.copy(c);const A=x*d-m*E;if(A<=0&&d>=0&&E<=0)return p=d/(d-E),n.copy(a).addScaledVector(Vr,p);const M=g*E-x*v;if(M<=0&&v-g>=0&&x-E>=0)return Dv.subVectors(c,o),p=(v-g)/(v-g+(x-E)),n.copy(o).addScaledVector(Dv,p);const y=1/(M+A+_);return u=A*y,p=_*y,n.copy(a).addScaledVector(Gr,u).addScaledVector(Vr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ol{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,p=c.count;u<p;u++)t.isMesh===!0?t.getVertexPosition(u,Bi):Bi.fromBufferAttribute(c,u),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),eu.copy(a.boundingBox)),eu.applyMatrix4(t.matrixWorld),this.union(eu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),nu.subVectors(this.max,ol),kr.subVectors(t.a,ol),Xr.subVectors(t.b,ol),Wr.subVectors(t.c,ol),hs.subVectors(Xr,kr),ds.subVectors(Wr,Xr),Ws.subVectors(kr,Wr);let n=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Ws.z,Ws.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Ws.z,0,-Ws.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Ws.y,Ws.x,0];return!Cd(n,kr,Xr,Wr,nu)||(n=[1,0,0,0,1,0,0,0,1],!Cd(n,kr,Xr,Wr,nu))?!1:(iu.crossVectors(hs,ds),n=[iu.x,iu.y,iu.z],Cd(n,kr,Xr,Wr,nu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new k,new k,new k,new k,new k,new k,new k,new k],Bi=new k,eu=new Ol,kr=new k,Xr=new k,Wr=new k,hs=new k,ds=new k,Ws=new k,ol=new k,nu=new k,iu=new k,Ys=new k;function Cd(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ys.fromArray(r,c);const p=o.x*Math.abs(Ys.x)+o.y*Math.abs(Ys.y)+o.z*Math.abs(Ys.z),m=t.dot(Ys),d=n.dot(Ys),g=a.dot(Ys);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const vn=new k,au=new Dt;let ab=0;class Mn extends Es{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Fp,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)au.fromBufferAttribute(this,n),au.applyMatrix3(t),this.setXY(n,au.x,au.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=We(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fi(n,this.array)),n}setX(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fi(n,this.array)),n}setY(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fi(n,this.array)),n}setW(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),a=We(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),a=We(a,this.array),o=We(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),a=We(a,this.array),o=We(o,this.array),c=We(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class jx extends Mn{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class $x extends Mn{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Yn extends Mn{constructor(t,n,a){super(new Float32Array(t),n,a)}}const sb=new Ol,ll=new k,wd=new k;class Pl{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):sb.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);const n=ll.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ll,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(wd)),this.expandByPoint(ll.copy(t.center).sub(wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rb=0;const Ti=new tn,Dd=new Gn,Yr=new k,mi=new Ol,cl=new Ol,An=new k;class Cn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bE(t)?$x:jx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,n,a){return Ti.makeTranslation(t,n,a),this.applyMatrix4(Ti),this}scale(t,n,a){return Ti.makeScale(t,n,a),this.applyMatrix4(Ti),this}lookAt(t){return Dd.lookAt(t),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const p=n[c];cl.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(mi.min,cl.min),mi.expandByPoint(An),An.addVectors(mi.max,cl.max),mi.expandByPoint(An)):(mi.expandByPoint(cl.min),mi.expandByPoint(cl.max))}mi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)An.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(An));if(n)for(let c=0,u=n.length;c<u;c++){const p=n[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)An.fromBufferAttribute(p,d),m&&(Yr.fromBufferAttribute(t,d),An.add(Yr)),o=Math.max(o,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Mn(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const p=[],m=[];for(let T=0;T<a.count;T++)p[T]=new k,m[T]=new k;const d=new k,g=new k,v=new k,_=new Dt,x=new Dt,E=new Dt,A=new k,M=new k;function y(T,U,V){d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,U),v.fromBufferAttribute(a,V),_.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,V),g.sub(d),v.sub(d),x.sub(_),E.sub(_);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(H),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(H),p[T].add(A),p[U].add(A),p[V].add(A),m[T].add(M),m[U].add(M),m[V].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let T=0,U=z.length;T<U;++T){const V=z[T],H=V.start,J=V.count;for(let ft=H,gt=H+J;ft<gt;ft+=3)y(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const N=new k,w=new k,O=new k,D=new k;function I(T){O.fromBufferAttribute(o,T),D.copy(O);const U=p[T];N.copy(U),N.sub(O.multiplyScalar(O.dot(U))).normalize(),w.crossVectors(D,U);const H=w.dot(m[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,H)}for(let T=0,U=z.length;T<U;++T){const V=z[T],H=V.start,J=V.count;for(let ft=H,gt=H+J;ft<gt;ft+=3)I(t.getX(ft+0)),I(t.getX(ft+1)),I(t.getX(ft+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new k,c=new k,u=new k,p=new k,m=new k,d=new k,g=new k,v=new k;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),p.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),d.fromBufferAttribute(a,M),p.add(g),m.add(g),d.add(g),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,v=p.normalized,_=new d.constructor(m.length*g);let x=0,E=0;for(let A=0,M=m.length;A<M;A++){p.isInterleavedBufferAttribute?x=m[A]*p.data.stride+p.offset:x=m[A]*g;for(let y=0;y<g;y++)_[E++]=d[x++]}return new Mn(_,g,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,a=this.index.array,o=this.attributes;for(const p in o){const m=o[p],d=t(m,a);n.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=t(_,a);m.push(x)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,m=u.length;p<m;p++){const d=u[p];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ob{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Fp,this.updateRanges=[],this.version=0,this.uuid=ta()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new k;class ku{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Fi(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=We(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Fi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Fi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Fi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Fi(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),a=We(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),a=We(a,this.array),o=We(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),a=We(a,this.array),o=We(o,this.array),c=We(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Vu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Mn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ku(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lb=0;class bs extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=tr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=jd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(a.blending=this.blending),this.side!==ys&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Jd&&(a.blendSrc=this.blendSrc),this.blendDst!==jd&&(a.blendDst=this.blendDst),this.blendEquation!==Ks&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const p in c){const m=c[p];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new be().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Dt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ty extends bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qr;const ul=new k,Zr=new k,Kr=new k,Qr=new Dt,fl=new Dt,ey=new tn,su=new k,hl=new k,ru=new k,Uv=new Dt,Ud=new Dt,Lv=new Dt;class ny extends Gn{constructor(t=new ty){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new ob(n,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new ku(a,3,0,!1)),qr.setAttribute("uv",new ku(a,2,3,!1))}this.geometry=qr,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),ey.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;ou(su.set(-.5,-.5,0),Kr,u,Zr,o,c),ou(hl.set(.5,-.5,0),Kr,u,Zr,o,c),ou(ru.set(.5,.5,0),Kr,u,Zr,o,c),Uv.set(0,0),Ud.set(1,0),Lv.set(1,1);let p=t.ray.intersectTriangle(su,hl,ru,!1,ul);if(p===null&&(ou(hl.set(-.5,.5,0),Kr,u,Zr,o,c),Ud.set(0,1),p=t.ray.intersectTriangle(su,ru,hl,!1,ul),p===null))return;const m=t.ray.origin.distanceTo(ul);m<t.near||m>t.far||n.push({distance:m,point:ul.clone(),uv:Ci.getInterpolation(ul,su,hl,ru,Uv,Ud,Lv,new Dt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ou(r,t,n,a,o,c){Qr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(fl.x=c*Qr.x-o*Qr.y,fl.y=o*Qr.x+c*Qr.y):fl.copy(Qr),r.copy(t),r.x+=fl.x,r.y+=fl.y,r.applyMatrix4(ey)}const Ca=new k,Ld=new k,lu=new k,ps=new k,Nd=new k,cu=new k,Od=new k;class Il{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ca.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,n),Ca.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ld.copy(t).add(n).multiplyScalar(.5),lu.copy(n).sub(t).normalize(),ps.copy(this.origin).sub(Ld);const c=t.distanceTo(n)*.5,u=-this.direction.dot(lu),p=ps.dot(this.direction),m=-ps.dot(lu),d=ps.lengthSq(),g=Math.abs(1-u*u);let v,_,x,E;if(g>0)if(v=u*m-p,_=u*p-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,x=v*(v+u*_+2*p)+_*(u*v+_+2*m)+d}else _=c,v=Math.max(0,-(u*_+p)),x=-v*v+_*(_+2*m)+d;else _=-c,v=Math.max(0,-(u*_+p)),x=-v*v+_*(_+2*m)+d;else _<=-E?(v=Math.max(0,-(-u*c+p)),_=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+d):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),x=_*(_+2*m)+d):(v=Math.max(0,-(u*c+p)),_=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+p)),x=-v*v+_*(_+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ld).addScaledVector(lu,_),x}intersectSphere(t,n){Ca.subVectors(t.center,this.origin);const a=Ca.dot(this.direction),o=Ca.dot(Ca)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),p=a-u,m=a+u;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,p,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(p=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(p=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),a>m||p>o)||((p>a||a!==a)&&(a=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,n,a,o,c){Nd.subVectors(n,t),cu.subVectors(a,t),Od.crossVectors(Nd,cu);let u=this.direction.dot(Od),p;if(u>0){if(o)return null;p=1}else if(u<0)p=-1,u=-u;else return null;ps.subVectors(this.origin,t);const m=p*this.direction.dot(cu.crossVectors(ps,cu));if(m<0)return null;const d=p*this.direction.dot(Nd.cross(ps));if(d<0||m+d>u)return null;const g=-p*ps.dot(Od);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ju extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=Ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nv=new tn,qs=new Il,uu=new Pl,Ov=new k,fu=new k,hu=new k,du=new k,Pd=new k,pu=new k,Pv=new k,mu=new k;class Di extends Gn{constructor(t=new Cn,n=new ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const p=this.morphTargetInfluences;if(c&&p){pu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],v=c[m];g!==0&&(Pd.fromBufferAttribute(v,t),u?pu.addScaledVector(Pd,g):pu.addScaledVector(Pd.sub(n),g))}n.add(pu)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),uu.copy(a.boundingSphere),uu.applyMatrix4(c),qs.copy(t.ray).recast(t.near),!(uu.containsPoint(qs.origin)===!1&&(qs.intersectSphere(uu,Ov)===null||qs.origin.distanceToSquared(Ov)>(t.far-t.near)**2))&&(Nv.copy(c).invert(),qs.copy(t.ray).applyMatrix4(Nv),!(a.boundingBox!==null&&qs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,qs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(p!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const M=_[E],y=u[M.materialIndex],z=Math.max(M.start,x.start),N=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let w=z,O=N;w<O;w+=3){const D=p.getX(w),I=p.getX(w+1),T=p.getX(w+2);o=gu(this,y,t,a,d,g,v,D,I,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=E,y=A;M<y;M+=3){const z=p.getX(M),N=p.getX(M+1),w=p.getX(M+2);o=gu(this,u,t,a,d,g,v,z,N,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const M=_[E],y=u[M.materialIndex],z=Math.max(M.start,x.start),N=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=z,O=N;w<O;w+=3){const D=w,I=w+1,T=w+2;o=gu(this,y,t,a,d,g,v,D,I,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=E,y=A;M<y;M+=3){const z=M,N=M+1,w=M+2;o=gu(this,u,t,a,d,g,v,z,N,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function cb(r,t,n,a,o,c,u,p){let m;if(t.side===ni?m=a.intersectTriangle(u,c,o,!0,p):m=a.intersectTriangle(o,c,u,t.side===ys,p),m===null)return null;mu.copy(p),mu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(mu);return d<n.near||d>n.far?null:{distance:d,point:mu.clone(),object:r}}function gu(r,t,n,a,o,c,u,p,m,d){r.getVertexPosition(p,fu),r.getVertexPosition(m,hu),r.getVertexPosition(d,du);const g=cb(r,t,n,a,fu,hu,du,Pv);if(g){const v=new k;Ci.getBarycoord(Pv,fu,hu,du,v),o&&(g.uv=Ci.getInterpolatedAttribute(o,p,m,d,v,new Dt)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,p,m,d,v,new Dt)),u&&(g.normal=Ci.getInterpolatedAttribute(u,p,m,d,v,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new k,materialIndex:0};Ci.getNormal(fu,hu,du,_.normal),g.face=_,g.barycoord=v}return g}class ub extends Pn{constructor(t=null,n=1,a=1,o,c,u,p,m,d=On,g=On,v,_){super(null,u,p,m,d,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new k,fb=new k,hb=new ve;class gs{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Id.subVectors(a,n).cross(fb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Id),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||hb.getNormalMatrix(t),o=this.coplanarPoint(Id).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new Pl,db=new Dt(.5,.5),_u=new k;class iy{constructor(t=new gs,n=new gs,a=new gs,o=new gs,c=new gs,u=new gs){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const p=this.planes;return p[0].copy(t),p[1].copy(n),p[2].copy(a),p[3].copy(o),p[4].copy(c),p[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ji,a=!1){const o=this.planes,c=t.elements,u=c[0],p=c[1],m=c[2],d=c[3],g=c[4],v=c[5],_=c[6],x=c[7],E=c[8],A=c[9],M=c[10],y=c[11],z=c[12],N=c[13],w=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,y-E,O-z).normalize(),o[1].setComponents(d+u,x+g,y+E,O+z).normalize(),o[2].setComponents(d+p,x+v,y+A,O+N).normalize(),o[3].setComponents(d-p,x-v,y-A,O-N).normalize(),a)o[4].setComponents(m,_,M,w).normalize(),o[5].setComponents(d-m,x-_,y-M,O-w).normalize();else if(o[4].setComponents(d-m,x-_,y-M,O-w).normalize(),n===ji)o[5].setComponents(d+m,x+_,y+M,O+w).normalize();else if(n===Gu)o[5].setComponents(m,_,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){Zs.center.set(0,0,0);const n=db.distanceTo(t.center);return Zs.radius=.7071067811865476+n,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(_u.x=o.normal.x>0?t.max.x:t.min.x,_u.y=o.normal.y>0?t.max.y:t.min.y,_u.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(_u)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ay extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xu=new k,Wu=new k,Iv=new tn,dl=new Il,vu=new Pl,zd=new k,zv=new k;class pb extends Gn{constructor(t=new Cn,n=new ay){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Xu.fromBufferAttribute(n,o-1),Wu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Xu.distanceTo(Wu);t.setAttribute("lineDistance",new Yn(a,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),vu.copy(a.boundingSphere),vu.applyMatrix4(o),vu.radius+=c,t.ray.intersectsSphere(vu)===!1)return;Iv.copy(o).invert(),dl.copy(t.ray).applyMatrix4(Iv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=x,M=E-1;A<M;A+=d){const y=g.getX(A),z=g.getX(A+1),N=xu(this,t,dl,m,y,z,A);N&&n.push(N)}if(this.isLineLoop){const A=g.getX(E-1),M=g.getX(x),y=xu(this,t,dl,m,A,M,E-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=x,M=E-1;A<M;A+=d){const y=xu(this,t,dl,m,A,A+1,A);y&&n.push(y)}if(this.isLineLoop){const A=xu(this,t,dl,m,E-1,x,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function xu(r,t,n,a,o,c,u){const p=r.geometry.attributes.position;if(Xu.fromBufferAttribute(p,o),Wu.fromBufferAttribute(p,c),n.distanceSqToSegment(Xu,Wu,zd,zv)>a)return;zd.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(zd);if(!(d<t.near||d>t.far))return{distance:d,point:zv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class mb extends pb{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class Yu extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bv=new tn,Hp=new Il,yu=new Pl,Su=new k;class Dl extends Gn{constructor(t=new Cn,n=new Yu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(o),yu.radius+=c,t.ray.intersectsSphere(yu)===!1)return;Bv.copy(o).invert(),Hp.copy(t.ray).applyMatrix4(Bv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let E=_,A=x;E<A;E++){const M=d.getX(E);Su.fromBufferAttribute(v,M),Fv(Su,M,m,o,t,n,this)}}else{const _=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let E=_,A=x;E<A;E++)Su.fromBufferAttribute(v,E),Fv(Su,E,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Fv(r,t,n,a,o,c,u){const p=Hp.distanceSqToPoint(r);if(p<n){const m=new k;Hp.closestPointToPoint(r,m),m.applyMatrix4(a);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class sy extends Pn{constructor(t=[],n=er,a,o,c,u,p,m,d,g){super(t,n,a,o,c,u,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ry extends Pn{constructor(t,n,a,o,c,u,p,m,d){super(t,n,a,o,c,u,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class co extends Pn{constructor(t,n,a=na,o,c,u,p=On,m=On,d,g=Ia,v=1){if(g!==Ia&&g!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,p,m,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gb extends co{constructor(t,n=na,a=er,o,c,u=On,p=On,m,d=Ia){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class oy extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zl extends Cn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const p=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],v=[];let _=0,x=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Yn(d,3)),this.setAttribute("normal",new Yn(g,3)),this.setAttribute("uv",new Yn(v,2));function E(A,M,y,z,N,w,O,D,I,T,U){const V=w/I,H=O/T,J=w/2,ft=O/2,gt=D/2,Z=I+1,B=T+1;let F=0,tt=0;const pt=new k;for(let Tt=0;Tt<B;Tt++){const P=Tt*H-ft;for(let Q=0;Q<Z;Q++){const Mt=Q*V-J;pt[A]=Mt*z,pt[M]=P*N,pt[y]=gt,d.push(pt.x,pt.y,pt.z),pt[A]=0,pt[M]=0,pt[y]=D>0?1:-1,g.push(pt.x,pt.y,pt.z),v.push(Q/I),v.push(1-Tt/T),F+=1}}for(let Tt=0;Tt<T;Tt++)for(let P=0;P<I;P++){const Q=_+P+Z*Tt,Mt=_+P+Z*(Tt+1),Ut=_+(P+1)+Z*(Tt+1),Vt=_+(P+1)+Z*Tt;m.push(Q,Mt,Vt),m.push(Mt,Ut,Vt),tt+=6}p.addGroup(x,tt,U),x+=tt,_+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class aa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ue("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let p=0,m=c-1,d;for(;p<=m;)if(o=Math.floor(p+(m-p)/2),d=a[o]-u,d<0)p=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),p=this.getPoint(c),m=n||(u.isVector2?new Dt:new k);return m.copy(p).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new k,o=[],c=[],u=[],p=new k,m=new tn;for(let x=0;x<=t;x++){const E=x/t;o[x]=this.getTangentAt(E,new k)}c[0]=new k,u[0]=new k;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),p.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],p),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),p.crossVectors(o[x-1],o[x]),p.length()>Number.EPSILON){p.normalize();const E=Math.acos(Ee(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(p,E))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Ee(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(p.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pm extends aa{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,p=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=p,this.aRotation=m}getPoint(t,n=new Dt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const p=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(p),d=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=m-this.aX,x=d-this.aY;m=_*g-x*v+this.aX,d=_*v+x*g+this.aY}return a.set(m,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _b extends pm{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function mm(){let r=0,t=0,n=0,a=0;function o(c,u,p,m){r=c,t=p,n=-3*c+3*u-2*p-m,a=2*c-2*u+p+m}return{initCatmullRom:function(c,u,p,m,d){o(u,p,d*(p-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,p,m,d,g,v){let _=(u-c)/d-(p-c)/(d+g)+(p-u)/g,x=(p-u)/g-(m-u)/(g+v)+(m-p)/v;_*=g,x*=g,o(u,p,_,x)},calc:function(c){const u=c*c,p=u*c;return r+t*c+n*u+a*p}}}const Hv=new k,Gv=new k,Bd=new mm,Fd=new mm,Hd=new mm;class vb extends aa{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new k){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let p=Math.floor(u),m=u-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/c)+1)*c:m===0&&p===c-1&&(p=c-2,m=1);let d,g;this.closed||p>0?d=o[(p-1)%c]:(Gv.subVectors(o[0],o[1]).add(o[0]),d=Gv);const v=o[p%c],_=o[(p+1)%c];if(this.closed||p+2<c?g=o[(p+2)%c]:(Hv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Hv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(v),x),A=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Bd.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,E,A,M),Fd.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,E,A,M),Hd.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(Bd.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),Fd.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),Hd.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(Bd.calc(m),Fd.calc(m),Hd.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new k().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vv(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,p=r*r,m=r*p;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*p+c*r+n}function xb(r,t){const n=1-r;return n*n*t}function yb(r,t){return 2*(1-r)*r*t}function Sb(r,t){return r*r*t}function El(r,t,n,a){return xb(r,t)+yb(r,n)+Sb(r,a)}function Mb(r,t){const n=1-r;return n*n*n*t}function Eb(r,t){const n=1-r;return 3*n*n*r*t}function bb(r,t){return 3*(1-r)*r*r*t}function Tb(r,t){return r*r*r*t}function bl(r,t,n,a,o){return Mb(r,t)+Eb(r,n)+bb(r,a)+Tb(r,o)}class ly extends aa{constructor(t=new Dt,n=new Dt,a=new Dt,o=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Dt){const a=n,o=this.v0,c=this.v1,u=this.v2,p=this.v3;return a.set(bl(t,o.x,c.x,u.x,p.x),bl(t,o.y,c.y,u.y,p.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ab extends aa{constructor(t=new k,n=new k,a=new k,o=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new k){const a=n,o=this.v0,c=this.v1,u=this.v2,p=this.v3;return a.set(bl(t,o.x,c.x,u.x,p.x),bl(t,o.y,c.y,u.y,p.y),bl(t,o.z,c.z,u.z,p.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cy extends aa{constructor(t=new Dt,n=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Dt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Dt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rb extends aa{constructor(t=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new k){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uy extends aa{constructor(t=new Dt,n=new Dt,a=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Dt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(El(t,o.x,c.x,u.x),El(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cb extends aa{constructor(t=new k,n=new k,a=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new k){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(El(t,o.x,c.x,u.x),El(t,o.y,c.y,u.y),El(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fy extends aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Dt){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),p=c-u,m=o[u===0?u:u-1],d=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(Vv(p,m.x,d.x,g.x,v.x),Vv(p,m.y,d.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Dt().fromArray(o))}return this}}var Gp=Object.freeze({__proto__:null,ArcCurve:_b,CatmullRomCurve3:vb,CubicBezierCurve:ly,CubicBezierCurve3:Ab,EllipseCurve:pm,LineCurve:cy,LineCurve3:Rb,QuadraticBezierCurve:uy,QuadraticBezierCurve3:Cb,SplineCurve:fy});class wb extends aa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gp[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,p=this.curves[c],m=p.getLength(),d=m===0?0:1-u/m;return p.getPointAt(d,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],p=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(p);for(let d=0;d<m.length;d++){const g=m[d];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new Gp[o.type]().fromJSON(o))}return this}}class qu extends wb{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new cy(this.currentPoint.clone(),new Dt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new uy(this.currentPoint.clone(),new Dt(t,n),new Dt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const p=new ly(this.currentPoint.clone(),new Dt(t,n),new Dt(a,o),new Dt(c,u));return this.curves.push(p),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new fy(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+p,n+m,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,p,m){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+d,n+g,a,o,c,u,p,m),this}absellipse(t,n,a,o,c,u,p,m){const d=new pm(t,n,a,o,c,u,p,m);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hy extends qu{constructor(t){super(t),this.uuid=ta(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new qu().fromJSON(o))}return this}}function Db(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=dy(r,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let p,m,d;if(a&&(c=Pb(r,t,c,n)),r.length>80*n){p=r[0],m=r[1];let g=p,v=m;for(let _=n;_<o;_+=n){const x=r[_],E=r[_+1];x<p&&(p=x),E<m&&(m=E),x>g&&(g=x),E>v&&(v=E)}d=Math.max(g-p,v-m),d=d!==0?32767/d:0}return Ul(c,u,n,p,m,d,0),u}function dy(r,t,n,a,o){let c;if(o===Yb(r,t,n,a)>0)for(let u=t;u<n;u+=a)c=kv(u/a|0,r[u],r[u+1],c);else for(let u=n-a;u>=t;u-=a)c=kv(u/a|0,r[u],r[u+1],c);return c&&uo(c,c.next)&&(Nl(c),c=c.next),c}function ir(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(uo(n,n.next)||rn(n.prev,n,n.next)===0)){if(Nl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Ul(r,t,n,a,o,c,u){if(!r)return;!u&&c&&Hb(r,a,o,c);let p=r;for(;r.prev!==r.next;){const m=r.prev,d=r.next;if(c?Lb(r,a,o,c):Ub(r)){t.push(m.i,r.i,d.i),Nl(r),r=d.next,p=d.next;continue}if(r=d,r===p){u?u===1?(r=Nb(ir(r),t),Ul(r,t,n,a,o,c,2)):u===2&&Ob(r,t,n,a,o,c):Ul(ir(r),t,n,a,o,c,1);break}}}function Ub(r){const t=r.prev,n=r,a=r.next;if(rn(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,p=t.y,m=n.y,d=a.y,g=Math.min(o,c,u),v=Math.min(p,m,d),_=Math.max(o,c,u),x=Math.max(p,m,d);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=_&&E.y>=v&&E.y<=x&&xl(o,p,c,m,u,d,E.x,E.y)&&rn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Lb(r,t,n,a){const o=r.prev,c=r,u=r.next;if(rn(o,c,u)>=0)return!1;const p=o.x,m=c.x,d=u.x,g=o.y,v=c.y,_=u.y,x=Math.min(p,m,d),E=Math.min(g,v,_),A=Math.max(p,m,d),M=Math.max(g,v,_),y=Vp(x,E,t,n,a),z=Vp(A,M,t,n,a);let N=r.prevZ,w=r.nextZ;for(;N&&N.z>=y&&w&&w.z<=z;){if(N.x>=x&&N.x<=A&&N.y>=E&&N.y<=M&&N!==o&&N!==u&&xl(p,g,m,v,d,_,N.x,N.y)&&rn(N.prev,N,N.next)>=0||(N=N.prevZ,w.x>=x&&w.x<=A&&w.y>=E&&w.y<=M&&w!==o&&w!==u&&xl(p,g,m,v,d,_,w.x,w.y)&&rn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;N&&N.z>=y;){if(N.x>=x&&N.x<=A&&N.y>=E&&N.y<=M&&N!==o&&N!==u&&xl(p,g,m,v,d,_,N.x,N.y)&&rn(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;w&&w.z<=z;){if(w.x>=x&&w.x<=A&&w.y>=E&&w.y<=M&&w!==o&&w!==u&&xl(p,g,m,v,d,_,w.x,w.y)&&rn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Nb(r,t){let n=r;do{const a=n.prev,o=n.next.next;!uo(a,o)&&my(a,n,n.next,o)&&Ll(a,o)&&Ll(o,a)&&(t.push(a.i,n.i,o.i),Nl(n),Nl(n.next),n=r=o),n=n.next}while(n!==r);return ir(n)}function Ob(r,t,n,a,o,c){let u=r;do{let p=u.next.next;for(;p!==u.prev;){if(u.i!==p.i&&kb(u,p)){let m=gy(u,p);u=ir(u,u.next),m=ir(m,m.next),Ul(u,t,n,a,o,c,0),Ul(m,t,n,a,o,c,0);return}p=p.next}u=u.next}while(u!==r)}function Pb(r,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const p=t[c]*a,m=c<u-1?t[c+1]*a:r.length,d=dy(r,p,m,a,!1);d===d.next&&(d.steiner=!0),o.push(Vb(d))}o.sort(Ib);for(let c=0;c<o.length;c++)n=zb(o[c],n);return n}function Ib(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function zb(r,t){const n=Bb(r,t);if(!n)return t;const a=gy(n,r);return ir(a,a.next),ir(n,n.next)}function Bb(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,u;if(uo(r,n))return n;do{if(uo(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const v=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=a&&v>c&&(c=v,u=n.x<n.next.x?n:n.next,v===a))return u}n=n.next}while(n!==t);if(!u)return null;const p=u,m=u.x,d=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&py(o<d?a:c,o,m,d,o<d?c:a,o,n.x,n.y)){const v=Math.abs(o-n.y)/(a-n.x);Ll(n,r)&&(v<g||v===g&&(n.x>u.x||n.x===u.x&&Fb(u,n)))&&(u=n,g=v)}n=n.next}while(n!==p);return u}function Fb(r,t){return rn(r.prev,r,t.prev)<0&&rn(t.next,r,r.next)<0}function Hb(r,t,n,a){let o=r;do o.z===0&&(o.z=Vp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,Gb(o)}function Gb(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let u=a,p=0;for(let d=0;d<n&&(p++,u=u.nextZ,!!u);d++);let m=n;for(;p>0||m>0&&u;)p!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,p--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return r}function Vp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Vb(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function py(r,t,n,a,o,c,u,p){return(o-u)*(t-p)>=(r-u)*(c-p)&&(r-u)*(a-p)>=(n-u)*(t-p)&&(n-u)*(c-p)>=(o-u)*(a-p)}function xl(r,t,n,a,o,c,u,p){return!(r===u&&t===p)&&py(r,t,n,a,o,c,u,p)}function kb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Xb(r,t)&&(Ll(r,t)&&Ll(t,r)&&Wb(r,t)&&(rn(r.prev,r,t.prev)||rn(r,t.prev,t))||uo(r,t)&&rn(r.prev,r,r.next)>0&&rn(t.prev,t,t.next)>0)}function rn(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function uo(r,t){return r.x===t.x&&r.y===t.y}function my(r,t,n,a){const o=Eu(rn(r,t,n)),c=Eu(rn(r,t,a)),u=Eu(rn(n,a,r)),p=Eu(rn(n,a,t));return!!(o!==c&&u!==p||o===0&&Mu(r,n,t)||c===0&&Mu(r,a,t)||u===0&&Mu(n,r,a)||p===0&&Mu(n,t,a))}function Mu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Eu(r){return r>0?1:r<0?-1:0}function Xb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&my(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function Ll(r,t){return rn(r.prev,r,r.next)<0?rn(r,t,r.next)>=0&&rn(r,r.prev,t)>=0:rn(r,t,r.prev)<0||rn(r,r.next,t)<0}function Wb(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function gy(r,t){const n=kp(r.i,r.x,r.y),a=kp(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function kv(r,t,n,a){const o=kp(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Nl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function kp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yb(r,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class qb{static triangulate(t,n,a=2){return Db(t,n,a)}}class $s{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return $s.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];Xv(t),Wv(a,t);let u=t.length;n.forEach(Xv);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,Wv(a,n[m]);const p=qb.triangulate(a,o);for(let m=0;m<p.length;m+=3)c.push(p.slice(m,m+3));return c}}function Xv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Wv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class gm extends Cn{constructor(t=new hy([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let p=0,m=t.length;p<m;p++){const d=t[p];u(d)}this.setAttribute("position",new Yn(o,3)),this.setAttribute("uv",new Yn(c,2)),this.computeVertexNormals();function u(p){const m=[],d=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,v=n.depth!==void 0?n.depth:1;let _=n.bevelEnabled!==void 0?n.bevelEnabled:!0,x=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:x-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const y=n.extrudePath,z=n.UVGenerator!==void 0?n.UVGenerator:Zb;let N,w=!1,O,D,I,T;if(y){N=y.getSpacedPoints(g),w=!0,_=!1;const lt=y.isCatmullRomCurve3?y.closed:!1;O=y.computeFrenetFrames(g,lt),D=new k,I=new k,T=new k}_||(M=0,x=0,E=0,A=0);const U=p.extractPoints(d);let V=U.shape;const H=U.holes;if(!$s.isClockWise(V)){V=V.reverse();for(let lt=0,_t=H.length;lt<_t;lt++){const yt=H[lt];$s.isClockWise(yt)&&(H[lt]=yt.reverse())}}function ft(lt){const yt=10000000000000001e-36;let Lt=lt[0];for(let Ot=1;Ot<=lt.length;Ot++){const qt=Ot%lt.length,Qt=lt[qt],ce=Qt.x-Lt.x,pe=Qt.y-Lt.y,X=ce*ce+pe*pe,me=Math.max(Math.abs(Qt.x),Math.abs(Qt.y),Math.abs(Lt.x),Math.abs(Lt.y)),ge=yt*me*me;if(X<=ge){lt.splice(qt,1),Ot--;continue}Lt=Qt}}ft(V),H.forEach(ft);const gt=H.length,Z=V;for(let lt=0;lt<gt;lt++){const _t=H[lt];V=V.concat(_t)}function B(lt,_t,yt){return _t||De("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(_t,yt)}const F=V.length;function tt(lt,_t,yt){let Lt,Ot,qt;const Qt=lt.x-_t.x,ce=lt.y-_t.y,pe=yt.x-lt.x,X=yt.y-lt.y,me=Qt*Qt+ce*ce,ge=Qt*X-ce*pe;if(Math.abs(ge)>Number.EPSILON){const L=Math.sqrt(me),b=Math.sqrt(pe*pe+X*X),j=_t.x-ce/L,st=_t.y+Qt/L,K=yt.x-X/b,Rt=yt.y+pe/b,Nt=((K-j)*X-(Rt-st)*pe)/(Qt*X-ce*pe);Lt=j+Qt*Nt-lt.x,Ot=st+ce*Nt-lt.y;const ht=Lt*Lt+Ot*Ot;if(ht<=2)return new Dt(Lt,Ot);qt=Math.sqrt(ht/2)}else{let L=!1;Qt>Number.EPSILON?pe>Number.EPSILON&&(L=!0):Qt<-Number.EPSILON?pe<-Number.EPSILON&&(L=!0):Math.sign(ce)===Math.sign(X)&&(L=!0),L?(Lt=-ce,Ot=Qt,qt=Math.sqrt(me)):(Lt=Qt,Ot=ce,qt=Math.sqrt(me/2))}return new Dt(Lt/qt,Ot/qt)}const pt=[];for(let lt=0,_t=Z.length,yt=_t-1,Lt=lt+1;lt<_t;lt++,yt++,Lt++)yt===_t&&(yt=0),Lt===_t&&(Lt=0),pt[lt]=tt(Z[lt],Z[yt],Z[Lt]);const Tt=[];let P,Q=pt.concat();for(let lt=0,_t=gt;lt<_t;lt++){const yt=H[lt];P=[];for(let Lt=0,Ot=yt.length,qt=Ot-1,Qt=Lt+1;Lt<Ot;Lt++,qt++,Qt++)qt===Ot&&(qt=0),Qt===Ot&&(Qt=0),P[Lt]=tt(yt[Lt],yt[qt],yt[Qt]);Tt.push(P),Q=Q.concat(P)}let Mt;if(M===0)Mt=$s.triangulateShape(Z,H);else{const lt=[],_t=[];for(let yt=0;yt<M;yt++){const Lt=yt/M,Ot=x*Math.cos(Lt*Math.PI/2),qt=E*Math.sin(Lt*Math.PI/2)+A;for(let Qt=0,ce=Z.length;Qt<ce;Qt++){const pe=B(Z[Qt],pt[Qt],qt);Gt(pe.x,pe.y,-Ot),Lt===0&&lt.push(pe)}for(let Qt=0,ce=gt;Qt<ce;Qt++){const pe=H[Qt];P=Tt[Qt];const X=[];for(let me=0,ge=pe.length;me<ge;me++){const L=B(pe[me],P[me],qt);Gt(L.x,L.y,-Ot),Lt===0&&X.push(L)}Lt===0&&_t.push(X)}}Mt=$s.triangulateShape(lt,_t)}const Ut=Mt.length,Vt=E+A;for(let lt=0;lt<F;lt++){const _t=_?B(V[lt],Q[lt],Vt):V[lt];w?(I.copy(O.normals[0]).multiplyScalar(_t.x),D.copy(O.binormals[0]).multiplyScalar(_t.y),T.copy(N[0]).add(I).add(D),Gt(T.x,T.y,T.z)):Gt(_t.x,_t.y,0)}for(let lt=1;lt<=g;lt++)for(let _t=0;_t<F;_t++){const yt=_?B(V[_t],Q[_t],Vt):V[_t];w?(I.copy(O.normals[lt]).multiplyScalar(yt.x),D.copy(O.binormals[lt]).multiplyScalar(yt.y),T.copy(N[lt]).add(I).add(D),Gt(T.x,T.y,T.z)):Gt(yt.x,yt.y,v/g*lt)}for(let lt=M-1;lt>=0;lt--){const _t=lt/M,yt=x*Math.cos(_t*Math.PI/2),Lt=E*Math.sin(_t*Math.PI/2)+A;for(let Ot=0,qt=Z.length;Ot<qt;Ot++){const Qt=B(Z[Ot],pt[Ot],Lt);Gt(Qt.x,Qt.y,v+yt)}for(let Ot=0,qt=H.length;Ot<qt;Ot++){const Qt=H[Ot];P=Tt[Ot];for(let ce=0,pe=Qt.length;ce<pe;ce++){const X=B(Qt[ce],P[ce],Lt);w?Gt(X.x,X.y+N[g-1].y,N[g-1].x+yt):Gt(X.x,X.y,v+yt)}}}nt(),xt();function nt(){const lt=o.length/3;if(_){let _t=0,yt=F*_t;for(let Lt=0;Lt<Ut;Lt++){const Ot=Mt[Lt];Ct(Ot[2]+yt,Ot[1]+yt,Ot[0]+yt)}_t=g+M*2,yt=F*_t;for(let Lt=0;Lt<Ut;Lt++){const Ot=Mt[Lt];Ct(Ot[0]+yt,Ot[1]+yt,Ot[2]+yt)}}else{for(let _t=0;_t<Ut;_t++){const yt=Mt[_t];Ct(yt[2],yt[1],yt[0])}for(let _t=0;_t<Ut;_t++){const yt=Mt[_t];Ct(yt[0]+F*g,yt[1]+F*g,yt[2]+F*g)}}a.addGroup(lt,o.length/3-lt,0)}function xt(){const lt=o.length/3;let _t=0;bt(Z,_t),_t+=Z.length;for(let yt=0,Lt=H.length;yt<Lt;yt++){const Ot=H[yt];bt(Ot,_t),_t+=Ot.length}a.addGroup(lt,o.length/3-lt,1)}function bt(lt,_t){let yt=lt.length;for(;--yt>=0;){const Lt=yt;let Ot=yt-1;Ot<0&&(Ot=lt.length-1);for(let qt=0,Qt=g+M*2;qt<Qt;qt++){const ce=F*qt,pe=F*(qt+1),X=_t+Lt+ce,me=_t+Ot+ce,ge=_t+Ot+pe,L=_t+Lt+pe;wt(X,me,ge,L)}}}function Gt(lt,_t,yt){m.push(lt),m.push(_t),m.push(yt)}function Ct(lt,_t,yt){fe(lt),fe(_t),fe(yt);const Lt=o.length/3,Ot=z.generateTopUV(a,o,Lt-3,Lt-2,Lt-1);ne(Ot[0]),ne(Ot[1]),ne(Ot[2])}function wt(lt,_t,yt,Lt){fe(lt),fe(_t),fe(Lt),fe(_t),fe(yt),fe(Lt);const Ot=o.length/3,qt=z.generateSideWallUV(a,o,Ot-6,Ot-3,Ot-2,Ot-1);ne(qt[0]),ne(qt[1]),ne(qt[3]),ne(qt[1]),ne(qt[2]),ne(qt[3])}function fe(lt){o.push(m[lt*3+0]),o.push(m[lt*3+1]),o.push(m[lt*3+2])}function ne(lt){c.push(lt.x),c.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return Kb(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const p=n[t.shapes[c]];a.push(p)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Gp[o.type]().fromJSON(o)),new gm(a,t.options)}}const Zb={generateTopUV:function(r,t,n,a,o){const c=t[n*3],u=t[n*3+1],p=t[a*3],m=t[a*3+1],d=t[o*3],g=t[o*3+1];return[new Dt(c,u),new Dt(p,m),new Dt(d,g)]},generateSideWallUV:function(r,t,n,a,o,c){const u=t[n*3],p=t[n*3+1],m=t[n*3+2],d=t[a*3],g=t[a*3+1],v=t[a*3+2],_=t[o*3],x=t[o*3+1],E=t[o*3+2],A=t[c*3],M=t[c*3+1],y=t[c*3+2];return Math.abs(p-g)<Math.abs(u-d)?[new Dt(u,1-m),new Dt(d,1-v),new Dt(_,1-E),new Dt(A,1-y)]:[new Dt(p,1-m),new Dt(g,1-v),new Dt(x,1-E),new Dt(M,1-y)]}};function Kb(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,o=r.length;a<o;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Bl extends Cn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,p=Math.floor(a),m=Math.floor(o),d=p+1,g=m+1,v=t/p,_=n/m,x=[],E=[],A=[],M=[];for(let y=0;y<g;y++){const z=y*_-u;for(let N=0;N<d;N++){const w=N*v-c;E.push(w,-z,0),A.push(0,0,1),M.push(N/p),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let z=0;z<p;z++){const N=z+d*y,w=z+d*(y+1),O=z+1+d*(y+1),D=z+1+d*y;x.push(N,w,D),x.push(w,O,D)}this.setIndex(x),this.setAttribute("position",new Yn(E,3)),this.setAttribute("normal",new Yn(A,3)),this.setAttribute("uv",new Yn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.width,t.height,t.widthSegments,t.heightSegments)}}class _m extends Cn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:p},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+p,Math.PI);let d=0;const g=[],v=new k,_=new k,x=[],E=[],A=[],M=[];for(let y=0;y<=a;y++){const z=[],N=y/a,w=u+N*p,O=t*Math.cos(w),D=Math.sqrt(t*t-O*O);let I=0;y===0&&u===0?I=.5/n:y===a&&m===Math.PI&&(I=-.5/n);for(let T=0;T<=n;T++){const U=T/n,V=o+U*c;v.x=-D*Math.cos(V),v.y=O,v.z=D*Math.sin(V),E.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),M.push(U+I,1-N),z.push(d++)}g.push(z)}for(let y=0;y<a;y++)for(let z=0;z<n;z++){const N=g[y][z+1],w=g[y][z],O=g[y+1][z],D=g[y+1][z+1];(y!==0||u>0)&&x.push(N,w,D),(y!==a-1||m<Math.PI)&&x.push(w,O,D)}this.setIndex(x),this.setAttribute("position",new Yn(E,3)),this.setAttribute("normal",new Yn(A,3)),this.setAttribute("uv",new Yn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _m(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function fo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];if(Yv(o))o.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(Yv(o[0])){const c=[];for(let u=0,p=o.length;u<p;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function Xn(r){const t={};for(let n=0;n<r.length;n++){const a=fo(r[n]);for(const o in a)t[o]=a[o]}return t}function Yv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Qb(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function _y(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Jb={clone:fo,merge:Xn};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=$b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=Qb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new be().setHex(o.value);break;case"v2":this.uniforms[a].value=new Dt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new k().fromArray(o.value);break;case"v4":this.uniforms[a].value=new cn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ve().fromArray(o.value);break;case"m4":this.uniforms[a].value=new tn().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class tT extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eT extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nT extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iT extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(qv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!qv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function qv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class aT{constructor(t,n,a){const o=this;let c=!1,u=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){p++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,p),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,p),u===p&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=d.length;v<_;v+=2){const x=d[v],E=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sT=new aT;class Fl{constructor(t){this.manager=t!==void 0?t:sT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";const wa={};class rT extends Error{constructor(t,n){super(t),this.response=n}}class oT extends Fl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Tl.get(`file:${t}`);if(c!==void 0){this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0);return}if(wa[t]!==void 0){wa[t].push({onLoad:n,onProgress:a,onError:o});return}wa[t]=[],wa[t].push({onLoad:n,onProgress:a,onError:o});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=wa[t],v=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,E=x!==0;let A=0;const M=new ReadableStream({start(y){z();function z(){v.read().then(({done:N,value:w})=>{if(N)y.close();else{A+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:x});for(let D=0,I=g.length;D<I;D++){const T=g[D];T.onProgress&&T.onProgress(O)}y.enqueue(w),z()}},N=>{y.error(N)})}}});return new Response(M)}else throw new rT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,p));case"json":return d.json();default:if(p==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(p),_=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Tl.add(`file:${t}`,d);const g=wa[t];delete wa[t];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=wa[t];if(g===void 0)throw this.manager.itemError(t),d;delete wa[t];for(let v=0,_=g.length;v<_;v++){const x=g[v];x.onError&&x.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jr=new WeakMap;class lT extends Fl{constructor(t){super(t)}load(t,n,a,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=Tl.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(u),c.manager.itemEnd(t)},0);else{let v=Jr.get(u);v===void 0&&(v=[],Jr.set(u,v)),v.push({onLoad:n,onError:o})}return u}const p=Cl("img");function m(){g(),n&&n(this);const v=Jr.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Jr.delete(this),c.manager.itemEnd(t)}function d(v){g(),o&&o(v),Tl.remove(`image:${t}`);const _=Jr.get(this)||[];for(let x=0;x<_.length;x++){const E=_[x];E.onError&&E.onError(v)}Jr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Tl.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class cT extends Fl{constructor(t){super(t)}load(t,n,a,o){const c=new Pn,u=new lT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(p){c.image=p,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}const bu=new k,Tu=new Ss,qi=new k;class vy extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bu,Tu,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Tu,qi.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(bu,Tu,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Tu,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new k,Zv=new Dt,Kv=new Dt;class Ai extends vy{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,n){return this.getViewBounds(t,Zv,Kv),n.subVectors(Kv,Zv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Sl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/d,o*=u.width/m,a*=u.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class xy extends vy{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,p=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const jr=-90,$r=1;class uT extends Gn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(jr,$r,t,n);o.layers=this.layers,this.add(o);const c=new Ai(jr,$r,t,n);c.layers=this.layers,this.add(c);const u=new Ai(jr,$r,t,n);u.layers=this.layers,this.add(u);const p=new Ai(jr,$r,t,n);p.layers=this.layers,this.add(p);const m=new Ai(jr,$r,t,n);m.layers=this.layers,this.add(m);const d=new Ai(jr,$r,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,p,m]=n;for(const d of n)this.remove(d);if(t===ji)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,p,m,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,3,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class fT extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Qv=new tn;class hT{constructor(t,n,a=0,o=1/0){this.ray=new Il(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new dm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):De("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Qv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qv),this}intersectObject(t,n=!0,a=[]){return Xp(t,this,a,n),a.sort(Jv),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)Xp(t[o],this,a,n);return a.sort(Jv),a}}function Jv(r,t){return r.distance-t.distance}function Xp(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,p=c.length;u<p;u++)Xp(c[u],t,n,!0)}}class jv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Ee(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bm=class bm{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};bm.prototype.isMatrix2=!0;let $v=bm;const tx=new Dt;class dT{constructor(t=new Dt(1/0,1/0),n=new Dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=tx.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tx).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class pT{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,n){return this.currentPath=new qu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,a,o){return this.currentPath.quadraticCurveTo(t,n,a,o),this}bezierCurveTo(t,n,a,o,c,u){return this.currentPath.bezierCurveTo(t,n,a,o,c,u),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(m,d){let g=!1;const v=d.length;for(let _=0,x=v-1;_<v;x=_++){const E=d[_],A=d[x];E.y>m.y!=A.y>m.y&&m.x<(A.x-E.x)*(m.y-E.y)/(A.y-E.y)+E.x&&(g=!g)}return g}function n(m,d){const g=d.getCenter(new Dt);if(t(g,m))return g;const v=g.y,_=[],x=m.length;for(let E=0;E<x;E++){const A=m[E],M=m[(E+1)%x];if(A.y>v!=M.y>v){const y=A.x+(v-A.y)*(M.x-A.x)/(M.y-A.y);_.push(y)}}return _.length>1&&(_.sort((E,A)=>E-A),g.x=(_[0]+_[1])/2),g}let a=this.userData.style&&this.userData.style.fillRule||"nonzero";a!=="nonzero"&&a!=="evenodd"&&(ue('Fill-rule "'+a+'" is not supported, falling back to "nonzero".'),a="nonzero");const o=a==="nonzero"?(m=>m!==0):(m=>(m&1)!==0),c=[];for(const m of this.subPaths){const d=m.getPoints();if(d.length<3)continue;const g=$s.area(d);if(g===0)continue;const v=new dT;for(let _=0;_<d.length;_++)v.expandByPoint(d[_]);c.push({subPath:m,points:d,boundingBox:v,interiorPoint:n(d,v),absArea:Math.abs(g),winding:g<0?-1:1,container:null,exclude:!1,role:null})}c.sort((m,d)=>d.absArea-m.absArea);for(let m=0;m<c.length;m++){const d=c[m];let g=0;for(let v=m-1;v>=0;v--){const _=c[v];if(_.boundingBox.containsBox(d.boundingBox)&&t(d.interiorPoint,_.points)){d.container=_.exclude?_.container:_,g=_.winding,d.winding+=g;break}}o(d.winding)===o(g)&&(d.exclude=!0)}for(const m of c)m.exclude||(m.role=m.container===null||m.container.role==="hole"?"outer":"hole");const u=[],p=new Map;for(const m of c){if(m.exclude||m.role!=="outer")continue;const d=new hy;d.curves=m.subPath.curves,u.push(d),p.set(m,d)}for(const m of c){if(m.exclude||m.role!=="hole")continue;const d=p.get(m.container);if(!d)continue;const g=new qu;g.curves=m.subPath.curves,d.holes.push(g)}return u}}class mT extends Es{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ue("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ex(r,t,n,a){const o=gT(a);switch(n){case Yx:return r*t;case Zx:return r*t/o.components*o.byteLength;case rm:return r*t/o.components*o.byteLength;case nr:return r*t*2/o.components*o.byteLength;case om:return r*t*2/o.components*o.byteLength;case qx:return r*t*3/o.components*o.byteLength;case Hi:return r*t*4/o.components*o.byteLength;case lm:return r*t*4/o.components*o.byteLength;case Uu:case Lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cp:case fp:return Math.max(r,16)*Math.max(t,8)/4;case lp:case up:return Math.max(r,8)*Math.max(t,8)/2;case hp:case dp:case mp:case gp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pp:case zu:case _p:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Sp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Up:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Lp:case Np:case Op:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Pp:case Ip:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bu:case zp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gT(r){switch(r){case Ri:case Vx:return{byteLength:1,components:1};case Al:case kx:case Pa:return{byteLength:2,components:1};case am:case sm:return{byteLength:2,components:4};case na:case im:case Ji:return{byteLength:4,components:1};case Xx:case Wx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yy(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function _T(r){const t=new WeakMap;function n(p,m){const d=p.array,g=p.usage,v=d.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,d,g),p.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function a(p,m,d){const g=m.array,v=m.updateRanges;if(r.bindBuffer(d,p),v.length===0)r.bufferSubData(d,0,g);else{v.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<v.length;x++){const E=v[_],A=v[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let x=0,E=v.length;x<E;x++){const A=v[x];r.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function u(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,n(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,p,m),d.version=p.version}}return{get:o,remove:c,update:u}}var vT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ST=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ET=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:vT,alphahash_pars_fragment:xT,alphamap_fragment:yT,alphamap_pars_fragment:ST,alphatest_fragment:MT,alphatest_pars_fragment:ET,aomap_fragment:bT,aomap_pars_fragment:TT,batching_pars_vertex:AT,batching_vertex:RT,begin_vertex:CT,beginnormal_vertex:wT,bsdfs:DT,iridescence_fragment:UT,bumpmap_pars_fragment:LT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:PT,clipping_planes_vertex:IT,color_fragment:zT,color_pars_fragment:BT,color_pars_vertex:FT,color_vertex:HT,common:GT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:kT,displacementmap_pars_vertex:XT,displacementmap_vertex:WT,emissivemap_fragment:YT,emissivemap_pars_fragment:qT,colorspace_fragment:ZT,colorspace_pars_fragment:KT,envmap_fragment:QT,envmap_common_pars_fragment:JT,envmap_pars_fragment:jT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:u1,envmap_vertex:t1,fog_vertex:e1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:a1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:r1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:f1,lights_toon_pars_fragment:h1,lights_phong_fragment:d1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:_1,lights_fragment_maps:v1,lights_fragment_end:x1,lightprobes_pars_fragment:y1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:b1,map_fragment:T1,map_pars_fragment:A1,map_particle_fragment:R1,map_particle_pars_fragment:C1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:D1,morphinstance_vertex:U1,morphcolor_vertex:L1,morphnormal_vertex:N1,morphtarget_pars_vertex:O1,morphtarget_vertex:P1,normal_fragment_begin:I1,normal_fragment_maps:z1,normal_pars_fragment:B1,normal_pars_vertex:F1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:W1,opaque_fragment:Y1,packing:q1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:tA,shadowmap_pars_vertex:eA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:aA,skinning_pars_vertex:sA,skinning_vertex:rA,skinnormal_vertex:oA,specularmap_fragment:lA,specularmap_pars_fragment:cA,tonemapping_fragment:uA,tonemapping_pars_fragment:fA,transmission_fragment:hA,transmission_pars_fragment:dA,uv_pars_fragment:pA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:_A,background_vert:vA,background_frag:xA,backgroundCube_vert:yA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:EA,depth_vert:bA,depth_frag:TA,distance_vert:AA,distance_frag:RA,equirect_vert:CA,equirect_frag:wA,linedashed_vert:DA,linedashed_frag:UA,meshbasic_vert:LA,meshbasic_frag:NA,meshlambert_vert:OA,meshlambert_frag:PA,meshmatcap_vert:IA,meshmatcap_frag:zA,meshnormal_vert:BA,meshnormal_frag:FA,meshphong_vert:HA,meshphong_frag:GA,meshphysical_vert:VA,meshphysical_frag:kA,meshtoon_vert:XA,meshtoon_frag:WA,points_vert:YA,points_frag:qA,shadow_vert:ZA,shadow_frag:KA,sprite_vert:QA,sprite_frag:JA},Wt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Xn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Xn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new be(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Xn([Wt.points,Wt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Xn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Xn([Wt.common,Wt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Xn([Wt.sprite,Wt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Xn([Wt.common,Wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Xn([Wt.lights,Wt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Au={r:0,b:0,g:0},jA=new tn,Sy=new ve;Sy.set(-1,0,0,0,1,0,0,0,1);function $A(r,t,n,a,o,c){const u=new be(0);let p=o===!0?0:1,m,d,g=null,v=0,_=null;function x(z){let N=z.isScene===!0?z.background:null;if(N&&N.isTexture){const w=z.backgroundBlurriness>0;N=t.get(N,w)}return N}function E(z){let N=!1;const w=x(z);w===null?M(u,p):w&&w.isColor&&(M(w,1),N=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(z,N){const w=x(N);w&&(w.isCubeTexture||w.mapping===Ju)?(d===void 0&&(d=new Di(new zl(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:fo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(jA.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Sy),d.material.toneMapped=Le.getTransfer(w.colorSpace)!==Xe,(g!==w||v!==w.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,g=w,v=w.version,_=r.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Di(new Bl(2,2),new ia({name:"BackgroundMaterial",uniforms:fo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Le.getTransfer(w.colorSpace)!==Xe,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=r.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function M(z,N){z.getRGB(Au,_y(r)),n.buffers.color.setClear(Au.r,Au.g,Au.b,N,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(z,N=1){u.set(z),p=N,M(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,M(u,p)},render:E,addToRenderList:A,dispose:y}}function tR(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function p(H,J,ft,gt,Z){let B=!1;const F=v(H,gt,ft,J);c!==F&&(c=F,d(c.object)),B=x(H,gt,ft,Z),B&&E(H,gt,ft,Z),Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,w(H,J,ft,gt),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function v(H,J,ft,gt){const Z=gt.wireframe===!0;let B=a[J.id];B===void 0&&(B={},a[J.id]=B);const F=H.isInstancedMesh===!0?H.id:0;let tt=B[F];tt===void 0&&(tt={},B[F]=tt);let pt=tt[ft.id];pt===void 0&&(pt={},tt[ft.id]=pt);let Tt=pt[Z];return Tt===void 0&&(Tt=_(m()),pt[Z]=Tt),Tt}function _(H){const J=[],ft=[],gt=[];for(let Z=0;Z<n;Z++)J[Z]=0,ft[Z]=0,gt[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ft,attributeDivisors:gt,object:H,attributes:{},index:null}}function x(H,J,ft,gt){const Z=c.attributes,B=J.attributes;let F=0;const tt=ft.getAttributes();for(const pt in tt)if(tt[pt].location>=0){const P=Z[pt];let Q=B[pt];if(Q===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==gt}function E(H,J,ft,gt){const Z={},B=J.attributes;let F=0;const tt=ft.getAttributes();for(const pt in tt)if(tt[pt].location>=0){let P=B[pt];P===void 0&&(pt==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),pt==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),Z[pt]=Q,F++}c.attributes=Z,c.attributesNum=F,c.index=gt}function A(){const H=c.newAttributes;for(let J=0,ft=H.length;J<ft;J++)H[J]=0}function M(H){y(H,0)}function y(H,J){const ft=c.newAttributes,gt=c.enabledAttributes,Z=c.attributeDivisors;ft[H]=1,gt[H]===0&&(r.enableVertexAttribArray(H),gt[H]=1),Z[H]!==J&&(r.vertexAttribDivisor(H,J),Z[H]=J)}function z(){const H=c.newAttributes,J=c.enabledAttributes;for(let ft=0,gt=J.length;ft<gt;ft++)J[ft]!==H[ft]&&(r.disableVertexAttribArray(ft),J[ft]=0)}function N(H,J,ft,gt,Z,B,F){F===!0?r.vertexAttribIPointer(H,J,ft,Z,B):r.vertexAttribPointer(H,J,ft,gt,Z,B)}function w(H,J,ft,gt){A();const Z=gt.attributes,B=ft.getAttributes(),F=J.defaultAttributeValues;for(const tt in B){const pt=B[tt];if(pt.location>=0){let Tt=Z[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&H.instanceMatrix&&(Tt=H.instanceMatrix),tt==="instanceColor"&&H.instanceColor&&(Tt=H.instanceColor)),Tt!==void 0){const P=Tt.normalized,Q=Tt.itemSize,Mt=t.get(Tt);if(Mt===void 0)continue;const Ut=Mt.buffer,Vt=Mt.type,nt=Mt.bytesPerElement,xt=Vt===r.INT||Vt===r.UNSIGNED_INT||Tt.gpuType===im;if(Tt.isInterleavedBufferAttribute){const bt=Tt.data,Gt=bt.stride,Ct=Tt.offset;if(bt.isInstancedInterleavedBuffer){for(let wt=0;wt<pt.locationSize;wt++)y(pt.location+wt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let wt=0;wt<pt.locationSize;wt++)M(pt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let wt=0;wt<pt.locationSize;wt++)N(pt.location+wt,Q/pt.locationSize,Vt,P,Gt*nt,(Ct+Q/pt.locationSize*wt)*nt,xt)}else{if(Tt.isInstancedBufferAttribute){for(let bt=0;bt<pt.locationSize;bt++)y(pt.location+bt,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let bt=0;bt<pt.locationSize;bt++)M(pt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let bt=0;bt<pt.locationSize;bt++)N(pt.location+bt,Q/pt.locationSize,Vt,P,Q*nt,Q/pt.locationSize*bt*nt,xt)}}else if(F!==void 0){const P=F[tt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(pt.location,P);break;case 3:r.vertexAttrib3fv(pt.location,P);break;case 4:r.vertexAttrib4fv(pt.location,P);break;default:r.vertexAttrib1fv(pt.location,P)}}}}z()}function O(){U();for(const H in a){const J=a[H];for(const ft in J){const gt=J[ft];for(const Z in gt){const B=gt[Z];for(const F in B)g(B[F].object),delete B[F];delete gt[Z]}}delete a[H]}}function D(H){if(a[H.id]===void 0)return;const J=a[H.id];for(const ft in J){const gt=J[ft];for(const Z in gt){const B=gt[Z];for(const F in B)g(B[F].object),delete B[F];delete gt[Z]}}delete a[H.id]}function I(H){for(const J in a){const ft=a[J];for(const gt in ft){const Z=ft[gt];if(Z[H.id]===void 0)continue;const B=Z[H.id];for(const F in B)g(B[F].object),delete B[F];delete Z[H.id]}}}function T(H){for(const J in a){const ft=a[J],gt=H.isInstancedMesh===!0?H.id:0,Z=ft[gt];if(Z!==void 0){for(const B in Z){const F=Z[B];for(const tt in F)g(F[tt].object),delete F[tt];delete Z[B]}delete ft[gt],Object.keys(ft).length===0&&delete a[J]}}}function U(){V(),u=!0,c!==o&&(c=o,d(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:U,resetDefaultState:V,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function eR(r,t,n){let a;function o(m){a=m}function c(m,d){r.drawArrays(a,m,d),n.update(d,a,1)}function u(m,d,g){g!==0&&(r.drawArraysInstanced(a,m,d,g),n.update(d,a,g))}function p(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,d,0,g);let _=0;for(let x=0;x<g;x++)_+=d[x];n.update(_,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p}function nR(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Hi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===Pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ri&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ji&&!T)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(ue("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:w,maxSamples:O,samples:D}}function iR(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new gs,p=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const E=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):d();else{const z=c?0:a,N=z*4;let w=y.clippingState||null;m.value=w,w=g(E,_,N,x);for(let O=0;O!==N;++O)w[O]=n[O];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,E){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const y=x+A*4,z=_.matrixWorldInverse;p.getNormalMatrix(z),(M===null||M.length<y)&&(M=new Float32Array(y));for(let N=0,w=x;N!==A;++N,w+=4)u.copy(v[N]).applyMatrix4(z,p),u.normal.toArray(M,w),M[w+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const xs=4,nx=[.125,.215,.35,.446,.526,.582],Qs=20,aR=256,pl=new xy,ix=new be;let Gd=null,Vd=0,kd=0,Xd=!1;const sR=new k;class ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:p=sR}=c;Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gd,Vd,kd),this._renderer.xr.enabled=Xd,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===er||t.mapping===lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Pa,format:Hi,colorSpace:Fu,depthBuffer:!1},o=sx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rR(c)),this._blurMaterial=lR(c,t,n),this._ggxMaterial=oR(c,t,n)}return o}_compileMaterial(t){const n=new Di(new Cn,t);this._renderer.compile(n,pl)}_sceneToCubeUV(t,n,a,o,c){const m=new Ai(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(ix),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new zl,new ju({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,y=!0):(M.color.copy(ix),y=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):w===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const O=this._cubeSize;to(o,w*O,N>2?O:0,O,O),v.setRenderTarget(o),y&&v.render(A,m),v.render(t,m)}v.toneMapping=x,v.autoClear=_,t.background=z}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===er||t.mapping===lo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;to(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,pl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,p=this._lodMeshes[a];p.material=u;const m=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:E}=this,A=this._sizeLods[a],M=3*A*(a>E-xs?a-E+xs:0),y=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-n,to(c,M,y,3*A,2*A),o.setRenderTarget(c),o.render(p,pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,to(t,M,y,3*A,2*A),o.setRenderTarget(t),o.render(p,pl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,p){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Qs-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Qs;M>Qs&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const y=[];let z=0;for(let I=0;I<Qs;++I){const T=I/A,U=Math.exp(-T*T/2);y.push(U),I===0?z+=U:I<M&&(z+=2*U)}for(let I=0;I<y.length;I++)y[I]=y[I]/z;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-a;const w=this._sizeLods[o],O=3*w*(o>N-xs?o-N+xs:0),D=4*(this._cubeSize-w);to(n,O,D,3*w,2*w),m.setRenderTarget(n),m.render(v,pl)}}function rR(r){const t=[],n=[],a=[];let o=r;const c=r-xs+1+nx.length;for(let u=0;u<c;u++){const p=Math.pow(2,o);t.push(p);let m=1/p;u>r-xs?m=nx[u-r+xs-1]:u===0&&(m=0),n.push(m);const d=1/(p-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,E=6,A=3,M=2,y=1,z=new Float32Array(A*E*x),N=new Float32Array(M*E*x),w=new Float32Array(y*E*x);for(let D=0;D<x;D++){const I=D%3*2/3-1,T=D>2?0:-1,U=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];z.set(U,A*E*D),N.set(_,M*E*D);const V=[D,D,D,D,D,D];w.set(V,y*E*D)}const O=new Cn;O.setAttribute("position",new Mn(z,A)),O.setAttribute("uv",new Mn(N,M)),O.setAttribute("faceIndex",new Mn(w,y)),a.push(new Di(O,null)),o>xs&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function sx(r,t,n){const a=new ea(r,t,n);return a.texture.mapping=Ju,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function to(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function oR(r,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function lR(r,t,n){const a=new Float32Array(Qs),o=new k(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function rx(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function ox(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class My extends ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new sy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new zl(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:fo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:La});c.uniforms.tEquirect.value=n;const u=new Di(o,c),p=n.minFilter;return n.minFilter===Js&&(n.minFilter=Hn),new uT(1,10,this).update(t,u),n.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function cR(r){let t=new WeakMap,n=new WeakMap,a=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===fd||x===hd)if(t.has(_)){const E=t.get(_).texture;return p(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const A=new My(E.height);return A.fromEquirectangularTexture(r,_),t.set(_,A),_.addEventListener("dispose",d),p(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,E=x===fd||x===hd,A=x===er||x===lo;if(E||A){let M=n.get(_);const y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return a===null&&(a=new ax(r)),M=E?a.fromEquirectangular(_,M):a.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),M.texture;if(M!==void 0)return M.texture;{const z=_.image;return E&&z&&z.height>0||A&&z&&m(z)?(a===null&&(a=new ax(r)),M=E?a.fromEquirectangular(_):a.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function p(_,x){return x===fd?_.mapping=er:x===hd&&(_.mapping=lo),_}function m(_){let x=0;const E=6;for(let A=0;A<E;A++)_[A]!==void 0&&x++;return x===E}function d(_){const x=_.target;x.removeEventListener("dispose",d);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function uR(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&so("WebGLRenderer: "+a+" extension not supported."),o}}}function fR(r,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function p(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,E=v.attributes.position;let A=0;if(E===void 0)return;if(x!==null){const z=x.array;A=x.version;for(let N=0,w=z.length;N<w;N+=3){const O=z[N+0],D=z[N+1],I=z[N+2];_.push(O,D,D,I,I,O)}}else{const z=E.array;A=E.version;for(let N=0,w=z.length/3-1;N<w;N+=3){const O=N+0,D=N+1,I=N+2;_.push(O,D,D,I,I,O)}}const M=new(E.count>=65535?$x:jx)(_,1);M.version=A;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function hR(r,t,n){let a;function o(v){a=v}let c,u;function p(v){c=v.type,u=v.bytesPerElement}function m(v,_){r.drawElements(a,_,c,v*u),n.update(_,a,1)}function d(v,_,x){x!==0&&(r.drawElementsInstanced(a,_,c,v*u,x),n.update(_,a,x))}function g(v,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,c,v,0,x);let A=0;for(let M=0;M<x;M++)A+=_[M];n.update(A,a,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function dR(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,p){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=p*(c/3);break;case r.LINES:n.lines+=p*(c/2);break;case r.LINE_STRIP:n.lines+=p*(c-1);break;case r.LINE_LOOP:n.lines+=p*c;break;case r.POINTS:n.points+=p*c;break;default:De("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function pR(r,t,n){const a=new WeakMap,o=new cn;function c(u,p,m){const d=u.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(p);if(_===void 0||_.count!==v){let V=function(){T.dispose(),a.delete(p),p.removeEventListener("dispose",V)};var x=V;_!==void 0&&_.texture.dispose();const E=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let O=p.attributes.position.count*w,D=1;O>t.maxTextureSize&&(D=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*D*4*v),T=new Qx(I,O,D,v);T.type=Ji,T.needsUpdate=!0;const U=w*4;for(let H=0;H<v;H++){const J=y[H],ft=z[H],gt=N[H],Z=O*D*4*H;for(let B=0;B<J.count;B++){const F=B*U;E===!0&&(o.fromBufferAttribute(J,B),I[Z+F+0]=o.x,I[Z+F+1]=o.y,I[Z+F+2]=o.z,I[Z+F+3]=0),A===!0&&(o.fromBufferAttribute(ft,B),I[Z+F+4]=o.x,I[Z+F+5]=o.y,I[Z+F+6]=o.z,I[Z+F+7]=0),M===!0&&(o.fromBufferAttribute(gt,B),I[Z+F+8]=o.x,I[Z+F+9]=o.y,I[Z+F+10]=o.z,I[Z+F+11]=gt.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new Dt(O,D)},a.set(p,_),p.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<d.length;M++)E+=d[M];const A=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function mR(r,t,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,v=d.geometry,_=t.get(d,v);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return _}function p(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:p}}const gR={[Px]:"LINEAR_TONE_MAPPING",[Ix]:"REINHARD_TONE_MAPPING",[zx]:"CINEON_TONE_MAPPING",[nm]:"ACES_FILMIC_TONE_MAPPING",[Fx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function _R(r,t,n,a,o,c){const u=new ea(t,n,{type:r,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new co(t,n):void 0}),p=new ea(t,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new Cn;m.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const d=new tT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Di(m,d),v=new xy(-1,1,1,-1,0,1);let _=null,x=null,E=!1,A,M=null,y=[],z=!1;this.setSize=function(N,w){u.setSize(N,w),p.setSize(N,w);for(let O=0;O<y.length;O++){const D=y[O];D.setSize&&D.setSize(N,w)}},this.setEffects=function(N){y=N,z=y.length>0&&y[0].isRenderPass===!0;const w=u.width,O=u.height;for(let D=0;D<y.length;D++){const I=y[D];I.setSize&&I.setSize(w,O)}},this.begin=function(N,w){if(E||N.toneMapping===$i&&y.length===0)return!1;if(M=w,w!==null){const O=w.width,D=w.height;(u.width!==O||u.height!==D)&&this.setSize(O,D)}return z===!1&&N.setRenderTarget(u),A=N.toneMapping,N.toneMapping=$i,!0},this.hasRenderPass=function(){return z},this.end=function(N,w){N.toneMapping=A,E=!0;let O=u,D=p;for(let I=0;I<y.length;I++){const T=y[I];if(T.enabled!==!1&&(T.render(N,D,O,w),T.needsSwap!==!1)){const U=O;O=D,D=U}}if(_!==N.outputColorSpace||x!==N.toneMapping){_=N.outputColorSpace,x=N.toneMapping,d.defines={},Le.getTransfer(_)===Xe&&(d.defines.SRGB_TRANSFER="");const I=gR[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,N.setRenderTarget(M),N.render(g,v),M=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Ey=new Pn,Wp=new co(1,1),by=new Qx,Ty=new KE,Ay=new sy,lx=[],cx=[],ux=new Float32Array(16),fx=new Float32Array(9),hx=new Float32Array(4);function ho(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=lx[o];if(c===void 0&&(c=new Float32Array(o),lx[o]=c),t!==0){a.toArray(c,0);for(let u=1,p=0;u!==t;++u)p+=n,r[u].toArray(c,p)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function bn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function tf(r,t){let n=cx[t];n===void 0&&(n=new Int32Array(t),cx[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function vR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function xR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2fv(this.addr,t),bn(n,t)}}function yR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;r.uniform3fv(this.addr,t),bn(n,t)}}function SR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4fv(this.addr,t),bn(n,t)}}function MR(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;hx.set(a),r.uniformMatrix2fv(this.addr,!1,hx),bn(n,a)}}function ER(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;fx.set(a),r.uniformMatrix3fv(this.addr,!1,fx),bn(n,a)}}function bR(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;ux.set(a),r.uniformMatrix4fv(this.addr,!1,ux),bn(n,a)}}function TR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function AR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2iv(this.addr,t),bn(n,t)}}function RR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3iv(this.addr,t),bn(n,t)}}function CR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4iv(this.addr,t),bn(n,t)}}function wR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function DR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2uiv(this.addr,t),bn(n,t)}}function UR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3uiv(this.addr,t),bn(n,t)}}function LR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4uiv(this.addr,t),bn(n,t)}}function NR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Wp.compareFunction=n.isReversedDepthBuffer()?um:cm,c=Wp):c=Ey,n.setTexture2D(t||c,o)}function OR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Ty,o)}function PR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Ay,o)}function IR(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||by,o)}function zR(r){switch(r){case 5126:return vR;case 35664:return xR;case 35665:return yR;case 35666:return SR;case 35674:return MR;case 35675:return ER;case 35676:return bR;case 5124:case 35670:return TR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return CR;case 5125:return wR;case 36294:return DR;case 36295:return UR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return IR}}function BR(r,t){r.uniform1fv(this.addr,t)}function FR(r,t){const n=ho(t,this.size,2);r.uniform2fv(this.addr,n)}function HR(r,t){const n=ho(t,this.size,3);r.uniform3fv(this.addr,n)}function GR(r,t){const n=ho(t,this.size,4);r.uniform4fv(this.addr,n)}function VR(r,t){const n=ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function kR(r,t){const n=ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function XR(r,t){const n=ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function WR(r,t){r.uniform1iv(this.addr,t)}function YR(r,t){r.uniform2iv(this.addr,t)}function qR(r,t){r.uniform3iv(this.addr,t)}function ZR(r,t){r.uniform4iv(this.addr,t)}function KR(r,t){r.uniform1uiv(this.addr,t)}function QR(r,t){r.uniform2uiv(this.addr,t)}function JR(r,t){r.uniform3uiv(this.addr,t)}function jR(r,t){r.uniform4uiv(this.addr,t)}function $R(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Wp:u=Ey;for(let p=0;p!==o;++p)n.setTexture2D(t[p]||u,c[p])}function t2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Ty,c[u])}function e2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Ay,c[u])}function n2(r,t,n){const a=this.cache,o=t.length,c=tf(n,o);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||by,c[u])}function i2(r){switch(r){case 5126:return BR;case 35664:return FR;case 35665:return HR;case 35666:return GR;case 35674:return VR;case 35675:return kR;case 35676:return XR;case 5124:case 35670:return WR;case 35667:case 35671:return YR;case 35668:case 35672:return qR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return QR;case 36295:return JR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return $R;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return n2}}class a2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}}class s2{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i2(n.type)}}class r2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const p=o[c];p.setValue(t,n[p.id],a)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function dx(r,t){r.seq.push(t),r.map[t.id]=t}function o2(r,t,n){const a=r.name,o=a.length;for(Wd.lastIndex=0;;){const c=Wd.exec(a),u=Wd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&u+2===o){dx(n,d===void 0?new a2(p,r,t):new s2(p,r,t));break}else{let v=n.map[p];v===void 0&&(v=new r2(p),dx(n,v)),n=v}}}class Pu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const p=t.getActiveUniform(n,u),m=t.getUniformLocation(n,p.name);o2(p,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const p=n[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function px(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const l2=37297;let c2=0;function u2(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const p=u+1;a.push(`${p===t?">":" "} ${p}: ${n[u]}`)}return a.join(`
`)}const mx=new ve;function f2(r){Le._getMatrix(mx,Le.workingColorSpace,r);const t=`mat3( ${mx.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(r)){case Hu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gx(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const p=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+u2(r.getShaderSource(t),p)}else return c}function h2(r,t){const n=f2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const d2={[Px]:"Linear",[Ix]:"Reinhard",[zx]:"Cineon",[nm]:"ACESFilmic",[Fx]:"AgX",[Hx]:"Neutral",[Bx]:"Custom"};function p2(r,t){const n=d2[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ru=new k;function m2(){Le.getLuminanceCoefficients(Ru);const r=Ru.x.toFixed(4),t=Ru.y.toFixed(4),n=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function _2(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function v2(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:p}}return n}function yl(r){return r!==""}function _x(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(r){return r.replace(x2,S2)}const y2=new Map;function S2(r,t){let n=Me[t];if(n===void 0){const a=y2.get(t);if(a!==void 0)n=Me[a],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yp(n)}const M2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xx(r){return r.replace(M2,E2)}function E2(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function yx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const b2={[Du]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function T2(r){return b2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A2={[er]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function R2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":A2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const C2={[lo]:"ENVMAP_MODE_REFRACTION"};function w2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":C2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D2={[Ox]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[pE]:"ENVMAP_BLENDING_ADD"};function U2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":D2[r.combine]||"ENVMAP_BLENDING_NONE"}function L2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function N2(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,p=n.fragmentShader;const m=T2(n),d=R2(n),g=w2(n),v=U2(n),_=L2(n),x=g2(n),E=_2(c),A=o.createProgram();let M,y,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(yl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(yl).join(`
`),y.length>0&&(y+=`
`)):(M=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),y=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Me.tonemapping_pars_fragment:"",n.toneMapping!==$i?p2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,h2("linearToOutputTexel",n.outputColorSpace),m2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yl).join(`
`)),u=Yp(u),u=_x(u,n),u=vx(u,n),p=Yp(p),p=_x(p,n),p=vx(p,n),u=xx(u),p=xx(p),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=z+M+u,w=z+y+p,O=px(o,o.VERTEX_SHADER,N),D=px(o,o.FRAGMENT_SHADER,w);o.attachShader(A,O),o.attachShader(A,D),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(H){if(r.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",ft=o.getShaderInfoLog(O)||"",gt=o.getShaderInfoLog(D)||"",Z=J.trim(),B=ft.trim(),F=gt.trim();let tt=!0,pt=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,O,D);else{const Tt=gx(o,O,"vertex"),P=gx(o,D,"fragment");De("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+Tt+`
`+P)}else Z!==""?ue("WebGLProgram: Program Info Log:",Z):(B===""||F==="")&&(pt=!1);pt&&(H.diagnostics={runnable:tt,programLog:Z,vertexShader:{log:B,prefix:M},fragmentShader:{log:F,prefix:y}})}o.deleteShader(O),o.deleteShader(D),T=new Pu(o,A),U=v2(o,A)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(A,l2)),V},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=D,this}let O2=0;class P2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new I2(t),n.set(t,a)),a}}class I2{constructor(t){this.id=O2++,this.code=t,this.usedTimes=0}}function z2(r){return r===nr||r===zu||r===Bu}function B2(r,t,n,a,o,c){const u=new dm,p=new P2,m=new Set,d=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,U,V,H,J,ft){const gt=H.fog,Z=J.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,tt=t.get(T.envMap||B,F),pt=tt&&tt.mapping===Ju?tt.image.height:null,Tt=x[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&ue("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=P!==void 0?P.length:0;let Mt=0;Z.morphAttributes.position!==void 0&&(Mt=1),Z.morphAttributes.normal!==void 0&&(Mt=2),Z.morphAttributes.color!==void 0&&(Mt=3);let Ut,Vt,nt,xt;if(Tt){const Jt=Ki[Tt];Ut=Jt.vertexShader,Vt=Jt.fragmentShader}else{Ut=T.vertexShader,Vt=T.fragmentShader;const Jt=p.getVertexShaderStage(T),en=p.getFragmentShaderStage(T);p.update(T,Jt,en),nt=Jt.id,xt=en.id}const bt=r.getRenderTarget(),Gt=r.state.buffers.depth.getReversed(),Ct=J.isInstancedMesh===!0,wt=J.isBatchedMesh===!0,fe=!!T.map,ne=!!T.matcap,lt=!!tt,_t=!!T.aoMap,yt=!!T.lightMap,Lt=!!T.bumpMap&&T.wireframe===!1,Ot=!!T.normalMap,qt=!!T.displacementMap,Qt=!!T.emissiveMap,ce=!!T.metalnessMap,pe=!!T.roughnessMap,X=T.anisotropy>0,me=T.clearcoat>0,ge=T.dispersion>0,L=T.iridescence>0,b=T.sheen>0,j=T.transmission>0,st=X&&!!T.anisotropyMap,K=me&&!!T.clearcoatMap,Rt=me&&!!T.clearcoatNormalMap,Nt=me&&!!T.clearcoatRoughnessMap,ht=L&&!!T.iridescenceMap,et=L&&!!T.iridescenceThicknessMap,Pt=b&&!!T.sheenColorMap,Ft=b&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Bt=!!T.specularColorMap,ie=!!T.specularIntensityMap,$t=j&&!!T.transmissionMap,he=j&&!!T.thicknessMap,Y=!!T.gradientMap,It=!!T.alphaMap,vt=T.alphaTest>0,Ht=!!T.alphaHash,Yt=!!T.extensions;let At=$i;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(At=r.toneMapping);const ae={shaderID:Tt,shaderType:T.type,shaderName:T.name,vertexShader:Ut,fragmentShader:Vt,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:wt,batchingColor:wt&&J._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&J.instanceColor!==null,instancingMorph:Ct&&J.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:fe,matcap:ne,envMap:lt,envMapMode:lt&&tt.mapping,envMapCubeUVHeight:pt,aoMap:_t,lightMap:yt,bumpMap:Lt,normalMap:Ot,displacementMap:qt,emissiveMap:Qt,normalMapObjectSpace:Ot&&T.normalMapType===_E,normalMapTangentSpace:Ot&&T.normalMapType===Bp,packedNormalMap:Ot&&T.normalMapType===Bp&&z2(T.normalMap.format),metalnessMap:ce,roughnessMap:pe,anisotropy:X,anisotropyMap:st,clearcoat:me,clearcoatMap:K,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Nt,dispersion:ge,iridescence:L,iridescenceMap:ht,iridescenceThicknessMap:et,sheen:b,sheenColorMap:Pt,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Bt,specularIntensityMap:ie,transmission:j,transmissionMap:$t,thicknessMap:he,gradientMap:Y,opaque:T.transparent===!1&&T.blending===tr&&T.alphaToCoverage===!1,alphaMap:It,alphaTest:vt,alphaHash:Ht,combine:T.combine,mapUv:fe&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:yt&&E(T.lightMap.channel),bumpMapUv:Lt&&E(T.bumpMap.channel),normalMapUv:Ot&&E(T.normalMap.channel),displacementMapUv:qt&&E(T.displacementMap.channel),emissiveMapUv:Qt&&E(T.emissiveMap.channel),metalnessMapUv:ce&&E(T.metalnessMap.channel),roughnessMapUv:pe&&E(T.roughnessMap.channel),anisotropyMapUv:st&&E(T.anisotropyMap.channel),clearcoatMapUv:K&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:zt&&E(T.specularMap.channel),specularColorMapUv:Bt&&E(T.specularColorMap.channel),specularIntensityMapUv:ie&&E(T.specularIntensityMap.channel),transmissionMapUv:$t&&E(T.transmissionMap.channel),thicknessMapUv:he&&E(T.thicknessMap.channel),alphaMapUv:It&&E(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ot||X),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(fe||It),fog:!!gt,useFog:T.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&Ot===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Gt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Mt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ft.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,decodeVideoTexture:fe&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Xe,decodeVideoTextureEmissive:Qt&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Xe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ae.vertexUv1s=m.has(1),ae.vertexUv2s=m.has(2),ae.vertexUv3s=m.has(3),m.clear(),ae}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)U.push(V),U.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(y(U,T),z(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function y(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function z(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function N(T){const U=x[T.type];let V;if(U){const H=Ki[U];V=Jb.clone(H.uniforms)}else V=T.uniforms;return V}function w(T,U){let V=g.get(U);return V!==void 0?++V.usedTimes:(V=new N2(r,U,T,o),d.push(V),g.set(U,V)),V}function O(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){p.remove(T)}function I(){p.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:N,acquireProgram:w,releaseProgram:O,releaseShaderCache:D,programs:d,dispose:I}}function F2(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let p=r.get(u);return p===void 0&&(p={},r.set(u,p)),p}function a(u){r.delete(u)}function o(u,p,m){r.get(u)[p]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function H2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Sx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Mx(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function p(_,x,E,A,M,y){let z=r[t];return z===void 0?(z={id:_.id,object:_,geometry:x,material:E,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:M,group:y},r[t]=z):(z.id=_.id,z.object=_,z.geometry=x,z.material=E,z.materialVariant=u(_),z.groupOrder=A,z.renderOrder=_.renderOrder,z.z=M,z.group=y),t++,z}function m(_,x,E,A,M,y){const z=p(_,x,E,A,M,y);E.transmission>0?a.push(z):E.transparent===!0?o.push(z):n.push(z)}function d(_,x,E,A,M,y){const z=p(_,x,E,A,M,y);E.transmission>0?a.unshift(z):E.transparent===!0?o.unshift(z):n.unshift(z)}function g(_,x,E){n.length>1&&n.sort(_||H2),a.length>1&&a.sort(x||Sx),o.length>1&&o.sort(x||Sx),E&&(n.reverse(),a.reverse(),o.reverse())}function v(){for(let _=t,x=r.length;_<x;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:d,finish:v,sort:g}}function G2(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new Mx,r.set(a,[u])):o>=c.length?(u=new Mx,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function V2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new k,color:new be};break;case"SpotLight":n={position:new k,direction:new k,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=n,n}}}function k2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let X2=0;function W2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Y2(r){const t=new V2,n=k2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new k);const o=new k,c=new tn,u=new tn;function p(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,E=0,A=0,M=0,y=0,z=0,N=0,w=0,O=0,D=0,I=0;d.sort(W2);for(let U=0,V=d.length;U<V;U++){const H=d[U],J=H.color,ft=H.intensity,gt=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===nr?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=J.r*ft,v+=J.g*ft,_+=J.b*ft;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],ft);I++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,tt=n.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,a.directionalShadow[x]=tt,a.directionalShadowMap[x]=Z,a.directionalShadowMatrix[x]=H.shadow.matrix,z++}a.directional[x]=B,x++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(J).multiplyScalar(ft),B.distance=gt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[A]=B;const F=H.shadow;if(H.map&&(a.spotLightMap[O]=H.map,O++,F.updateMatrices(H),H.castShadow&&D++),a.spotLightMatrix[A]=F.matrix,H.castShadow){const tt=n.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,a.spotShadow[A]=tt,a.spotShadowMap[A]=Z,w++}A++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(J).multiplyScalar(ft),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=B,M++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const F=H.shadow,tt=n.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,a.pointShadow[E]=tt,a.pointShadowMap[E]=Z,a.pointShadowMatrix[E]=H.shadow.matrix,N++}a.point[E]=B,E++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(ft),B.groundColor.copy(H.groundColor).multiplyScalar(ft),a.hemi[y]=B,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Wt.LTC_FLOAT_1,a.rectAreaLTC2=Wt.LTC_FLOAT_2):(a.rectAreaLTC1=Wt.LTC_HALF_1,a.rectAreaLTC2=Wt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const T=a.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==z||T.numPointShadows!==N||T.numSpotShadows!==w||T.numSpotMaps!==O||T.numLightProbes!==I)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=w+O-D,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=I,T.directionalLength=x,T.pointLength=E,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=z,T.numPointShadows=N,T.numSpotShadows=w,T.numSpotMaps=O,T.numLightProbes=I,a.version=X2++)}function m(d,g){let v=0,_=0,x=0,E=0,A=0;const M=g.matrixWorldInverse;for(let y=0,z=d.length;y<z;y++){const N=d[y];if(N.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(N.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),x++}else if(N.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(N.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),_++}else if(N.isHemisphereLight){const w=a.hemi[A];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:p,setupView:m,state:a}}function Ex(r){const t=new Y2(r),n=[],a=[],o=[];function c(_){v.camera=_,n.length=0,a.length=0,o.length=0}function u(_){n.push(_)}function p(_){a.push(_)}function m(_){o.push(_)}function d(){t.setup(n)}function g(_){t.setupView(n,_)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:p,pushLightProbeGrid:m}}function q2(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let p;return u===void 0?(p=new Ex(r),t.set(o,[p])):c>=u.length?(p=new Ex(r),u.push(p)):p=u[c],p}function a(){t=new WeakMap}return{get:n,dispose:a}}const Z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q2=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],J2=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],bx=new tn,ml=new k,Yd=new k;function j2(r,t,n){let a=new iy;const o=new Dt,c=new Dt,u=new cn,p=new nT,m=new iT,d={},g=n.maxTextureSize,v={[ys]:ni,[ni]:ys,[Qi]:Qi},_=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Z2,fragmentShader:K2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new Cn;E.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Di(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let y=this.type;this.render=function(D,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===ZM&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const U=r.getRenderTarget(),V=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),J=r.state;J.setBlending(La),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ft=y!==this.type;ft&&I.traverse(function(gt){gt.material&&(Array.isArray(gt.material)?gt.material.forEach(Z=>Z.needsUpdate=!0):gt.material.needsUpdate=!0)});for(let gt=0,Z=D.length;gt<Z;gt++){const B=D[gt],F=B.shadow;if(F===void 0){ue("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const tt=F.getFrameExtents();o.multiply(tt),c.copy(F.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/tt.x),o.x=c.x*tt.x,F.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/tt.y),o.y=c.y*tt.y,F.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=pt,F.map===null||ft===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===vl){if(B.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ea(o.x,o.y,{format:nr,type:Pa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new co(o.x,o.y,Ji),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Ia,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On}else B.isPointLight?(F.map=new My(o.x),F.map.depthTexture=new gb(o.x,na)):(F.map=new ea(o.x,o.y),F.map.depthTexture=new co(o.x,o.y,na)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Ia,this.type===Du?(F.map.depthTexture.compareFunction=pt?um:cm,F.map.depthTexture.minFilter=Hn,F.map.depthTexture.magFilter=Hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On);F.camera.updateProjectionMatrix()}const Tt=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Tt;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const Q=F.getViewport(P);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),J.viewport(u)}if(B.isPointLight){const Q=F.camera,Mt=F.matrix,Ut=B.distance||Q.far;Ut!==Q.far&&(Q.far=Ut,Q.updateProjectionMatrix()),ml.setFromMatrixPosition(B.matrixWorld),Q.position.copy(ml),Yd.copy(Q.position),Yd.add(Q2[P]),Q.up.copy(J2[P]),Q.lookAt(Yd),Q.updateMatrixWorld(),Mt.makeTranslation(-ml.x,-ml.y,-ml.z),bx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(bx,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(B);a=F.getFrustum(),w(I,T,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===vl&&z(F,T),F.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(U,V,H)};function z(D,I){const T=t.update(A);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ea(o.x,o.y,{format:nr,type:Pa})),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(I,null,T,_,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(I,null,T,x,A,null)}function N(D,I,T,U){let V=null;const H=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)V=H;else if(V=T.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=V.uuid,ft=I.uuid;let gt=d[J];gt===void 0&&(gt={},d[J]=gt);let Z=gt[ft];Z===void 0&&(Z=V.clone(),gt[ft]=Z,I.addEventListener("dispose",O)),V=Z}if(V.visible=I.visible,V.wireframe=I.wireframe,U===vl?V.side=I.shadowSide!==null?I.shadowSide:I.side:V.side=I.shadowSide!==null?I.shadowSide:v[I.side],V.alphaMap=I.alphaMap,V.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,V.map=I.map,V.clipShadows=I.clipShadows,V.clippingPlanes=I.clippingPlanes,V.clipIntersection=I.clipIntersection,V.displacementMap=I.displacementMap,V.displacementScale=I.displacementScale,V.displacementBias=I.displacementBias,V.wireframeLinewidth=I.wireframeLinewidth,V.linewidth=I.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const J=r.properties.get(V);J.light=T}return V}function w(D,I,T,U,V){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===vl)&&(!D.frustumCulled||a.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ft=t.update(D),gt=D.material;if(Array.isArray(gt)){const Z=ft.groups;for(let B=0,F=Z.length;B<F;B++){const tt=Z[B],pt=gt[tt.materialIndex];if(pt&&pt.visible){const Tt=N(D,pt,U,V);D.onBeforeShadow(r,D,I,T,ft,Tt,tt),r.renderBufferDirect(T,null,ft,Tt,D,tt),D.onAfterShadow(r,D,I,T,ft,Tt,tt)}}}else if(gt.visible){const Z=N(D,gt,U,V);D.onBeforeShadow(r,D,I,T,ft,Z,null),r.renderBufferDirect(T,null,ft,Z,D,null),D.onAfterShadow(r,D,I,T,ft,Z,null)}}const J=D.children;for(let ft=0,gt=J.length;ft<gt;ft++)w(J[ft],I,T,U,V)}function O(D){D.target.removeEventListener("dispose",O);for(const T in d){const U=d[T],V=D.target.uuid;V in U&&(U[V].dispose(),delete U[V])}}}function $2(r,t){function n(){let Y=!1;const It=new cn;let vt=null;const Ht=new cn(0,0,0,0);return{setMask:function(Yt){vt!==Yt&&!Y&&(r.colorMask(Yt,Yt,Yt,Yt),vt=Yt)},setLocked:function(Yt){Y=Yt},setClear:function(Yt,At,ae,Jt,en){en===!0&&(Yt*=Jt,At*=Jt,ae*=Jt),It.set(Yt,At,ae,Jt),Ht.equals(It)===!1&&(r.clearColor(Yt,At,ae,Jt),Ht.copy(It))},reset:function(){Y=!1,vt=null,Ht.set(-1,0,0,0)}}}function a(){let Y=!1,It=!1,vt=null,Ht=null,Yt=null;return{setReversed:function(At){if(It!==At){const ae=t.get("EXT_clip_control");At?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),It=At;const Jt=Yt;Yt=null,this.setClear(Jt)}},getReversed:function(){return It},setTest:function(At){At?bt(r.DEPTH_TEST):Gt(r.DEPTH_TEST)},setMask:function(At){vt!==At&&!Y&&(r.depthMask(At),vt=At)},setFunc:function(At){if(It&&(At=RE[At]),Ht!==At){switch(At){case $d:r.depthFunc(r.NEVER);break;case tp:r.depthFunc(r.ALWAYS);break;case ep:r.depthFunc(r.LESS);break;case oo:r.depthFunc(r.LEQUAL);break;case np:r.depthFunc(r.EQUAL);break;case ip:r.depthFunc(r.GEQUAL);break;case ap:r.depthFunc(r.GREATER);break;case sp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=At}},setLocked:function(At){Y=At},setClear:function(At){Yt!==At&&(Yt=At,It&&(At=1-At),r.clearDepth(At))},reset:function(){Y=!1,vt=null,Ht=null,Yt=null,It=!1}}}function o(){let Y=!1,It=null,vt=null,Ht=null,Yt=null,At=null,ae=null,Jt=null,en=null;return{setTest:function(Be){Y||(Be?bt(r.STENCIL_TEST):Gt(r.STENCIL_TEST))},setMask:function(Be){It!==Be&&!Y&&(r.stencilMask(Be),It=Be)},setFunc:function(Be,ii,ai){(vt!==Be||Ht!==ii||Yt!==ai)&&(r.stencilFunc(Be,ii,ai),vt=Be,Ht=ii,Yt=ai)},setOp:function(Be,ii,ai){(At!==Be||ae!==ii||Jt!==ai)&&(r.stencilOp(Be,ii,ai),At=Be,ae=ii,Jt=ai)},setLocked:function(Be){Y=Be},setClear:function(Be){en!==Be&&(r.clearStencil(Be),en=Be)},reset:function(){Y=!1,It=null,vt=null,Ht=null,Yt=null,At=null,ae=null,Jt=null,en=null}}}const c=new n,u=new a,p=new o,m=new WeakMap,d=new WeakMap;let g={},v={},_={},x=new WeakMap,E=[],A=null,M=!1,y=null,z=null,N=null,w=null,O=null,D=null,I=null,T=new be(0,0,0),U=0,V=!1,H=null,J=null,ft=null,gt=null,Z=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,tt=0;const pt=r.getParameter(r.VERSION);pt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),F=tt>=1):pt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),F=tt>=2);let Tt=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Ut=new cn().fromArray(Q),Vt=new cn().fromArray(Mt);function nt(Y,It,vt,Ht){const Yt=new Uint8Array(4),At=r.createTexture();r.bindTexture(Y,At),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<vt;ae++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(It,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,Yt):r.texImage2D(It+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Yt);return At}const xt={};xt[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),p.setClear(0),bt(r.DEPTH_TEST),u.setFunc(oo),Lt(!1),Ot(dv),bt(r.CULL_FACE),_t(La);function bt(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function Gt(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Ct(Y,It){return _[Y]!==It?(r.bindFramebuffer(Y,It),_[Y]=It,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=It),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=It),!0):!1}function wt(Y,It){let vt=E,Ht=!1;if(Y){vt=x.get(It),vt===void 0&&(vt=[],x.set(It,vt));const Yt=Y.textures;if(vt.length!==Yt.length||vt[0]!==r.COLOR_ATTACHMENT0){for(let At=0,ae=Yt.length;At<ae;At++)vt[At]=r.COLOR_ATTACHMENT0+At;vt.length=Yt.length,Ht=!0}}else vt[0]!==r.BACK&&(vt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(vt)}function fe(Y){return A!==Y?(r.useProgram(Y),A=Y,!0):!1}const ne={[Ks]:r.FUNC_ADD,[QM]:r.FUNC_SUBTRACT,[JM]:r.FUNC_REVERSE_SUBTRACT};ne[jM]=r.MIN,ne[$M]=r.MAX;const lt={[tE]:r.ZERO,[eE]:r.ONE,[nE]:r.SRC_COLOR,[Jd]:r.SRC_ALPHA,[lE]:r.SRC_ALPHA_SATURATE,[rE]:r.DST_COLOR,[aE]:r.DST_ALPHA,[iE]:r.ONE_MINUS_SRC_COLOR,[jd]:r.ONE_MINUS_SRC_ALPHA,[oE]:r.ONE_MINUS_DST_COLOR,[sE]:r.ONE_MINUS_DST_ALPHA,[cE]:r.CONSTANT_COLOR,[uE]:r.ONE_MINUS_CONSTANT_COLOR,[fE]:r.CONSTANT_ALPHA,[hE]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,It,vt,Ht,Yt,At,ae,Jt,en,Be){if(Y===La){M===!0&&(Gt(r.BLEND),M=!1);return}if(M===!1&&(bt(r.BLEND),M=!0),Y!==KM){if(Y!==y||Be!==V){if((z!==Ks||O!==Ks)&&(r.blendEquation(r.FUNC_ADD),z=Ks,O=Ks),Be)switch(Y){case tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFunc(r.ONE,r.ONE);break;case pv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",Y);break}else switch(Y){case tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case pv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",Y);break}N=null,w=null,D=null,I=null,T.set(0,0,0),U=0,y=Y,V=Be}return}Yt=Yt||It,At=At||vt,ae=ae||Ht,(It!==z||Yt!==O)&&(r.blendEquationSeparate(ne[It],ne[Yt]),z=It,O=Yt),(vt!==N||Ht!==w||At!==D||ae!==I)&&(r.blendFuncSeparate(lt[vt],lt[Ht],lt[At],lt[ae]),N=vt,w=Ht,D=At,I=ae),(Jt.equals(T)===!1||en!==U)&&(r.blendColor(Jt.r,Jt.g,Jt.b,en),T.copy(Jt),U=en),y=Y,V=!1}function yt(Y,It){Y.side===Qi?Gt(r.CULL_FACE):bt(r.CULL_FACE);let vt=Y.side===ni;It&&(vt=!vt),Lt(vt),Y.blending===tr&&Y.transparent===!1?_t(La):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ht=Y.stencilWrite;p.setTest(Ht),Ht&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(Y){H!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),H=Y)}function Ot(Y){Y!==YM?(bt(r.CULL_FACE),Y!==J&&(Y===dv?r.cullFace(r.BACK):Y===qM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Gt(r.CULL_FACE),J=Y}function qt(Y){Y!==ft&&(F&&r.lineWidth(Y),ft=Y)}function Qt(Y,It,vt){Y?(bt(r.POLYGON_OFFSET_FILL),(gt!==It||Z!==vt)&&(gt=It,Z=vt,u.getReversed()&&(It=-It),r.polygonOffset(It,vt))):Gt(r.POLYGON_OFFSET_FILL)}function ce(Y){Y?bt(r.SCISSOR_TEST):Gt(r.SCISSOR_TEST)}function pe(Y){Y===void 0&&(Y=r.TEXTURE0+B-1),Tt!==Y&&(r.activeTexture(Y),Tt=Y)}function X(Y,It,vt){vt===void 0&&(Tt===null?vt=r.TEXTURE0+B-1:vt=Tt);let Ht=P[vt];Ht===void 0&&(Ht={type:void 0,texture:void 0},P[vt]=Ht),(Ht.type!==Y||Ht.texture!==It)&&(Tt!==vt&&(r.activeTexture(vt),Tt=vt),r.bindTexture(Y,It||xt[Y]),Ht.type=Y,Ht.texture=It)}function me(){const Y=P[Tt];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{r.compressedTexImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function b(){try{r.texSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function j(){try{r.texSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Rt(){try{r.texStorage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Nt(){try{r.texStorage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function ht(){try{r.texImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function et(){try{r.texImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Pt(Y){return v[Y]!==void 0?v[Y]:r.getParameter(Y)}function Ft(Y,It){v[Y]!==It&&(r.pixelStorei(Y,It),v[Y]=It)}function zt(Y){Ut.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function Bt(Y){Vt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Vt.copy(Y))}function ie(Y,It){let vt=d.get(It);vt===void 0&&(vt=new WeakMap,d.set(It,vt));let Ht=vt.get(Y);Ht===void 0&&(Ht=r.getUniformBlockIndex(It,Y.name),vt.set(Y,Ht))}function $t(Y,It){const Ht=d.get(It).get(Y);m.get(It)!==Ht&&(r.uniformBlockBinding(It,Ht,Y.__bindingPointIndex),m.set(It,Ht))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},Tt=null,P={},_={},x=new WeakMap,E=[],A=null,M=!1,y=null,z=null,N=null,w=null,O=null,D=null,I=null,T=new be(0,0,0),U=0,V=!1,H=null,J=null,ft=null,gt=null,Z=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),p.reset()}return{buffers:{color:c,depth:u,stencil:p},enable:bt,disable:Gt,bindFramebuffer:Ct,drawBuffers:wt,useProgram:fe,setBlending:_t,setMaterial:yt,setFlipSided:Lt,setCullFace:Ot,setLineWidth:qt,setPolygonOffset:Qt,setScissorTest:ce,activeTexture:pe,bindTexture:X,unbindTexture:me,compressedTexImage2D:ge,compressedTexImage3D:L,texImage2D:ht,texImage3D:et,pixelStorei:Ft,getParameter:Pt,updateUBOMapping:ie,uniformBlockBinding:$t,texStorage2D:Rt,texStorage3D:Nt,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:st,compressedTexSubImage3D:K,scissor:zt,viewport:Bt,reset:he}}function tC(r,t,n,a,o,c,u){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Dt,g=new WeakMap,v=new Set;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,b){return E?new OffscreenCanvas(L,b):Cl("canvas")}function M(L,b,j){let st=1;const K=ge(L);if((K.width>j||K.height>j)&&(st=j/Math.max(K.width,K.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Rt=Math.floor(st*K.width),Nt=Math.floor(st*K.height);_===void 0&&(_=A(Rt,Nt));const ht=b?A(Rt,Nt):_;return ht.width=Rt,ht.height=Nt,ht.getContext("2d").drawImage(L,0,0,Rt,Nt),ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Rt+"x"+Nt+")."),ht}else return"data"in L&&ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function y(L){return L.generateMipmaps}function z(L){r.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(L,b,j,st,K,Rt=!1){if(L!==null){if(r[L]!==void 0)return r[L];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Nt;st&&(Nt=t.get("EXT_texture_norm16"),Nt||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=b;if(b===r.RED&&(j===r.FLOAT&&(ht=r.R32F),j===r.HALF_FLOAT&&(ht=r.R16F),j===r.UNSIGNED_BYTE&&(ht=r.R8),j===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.R16_EXT),j===r.SHORT&&Nt&&(ht=Nt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.R8UI),j===r.UNSIGNED_SHORT&&(ht=r.R16UI),j===r.UNSIGNED_INT&&(ht=r.R32UI),j===r.BYTE&&(ht=r.R8I),j===r.SHORT&&(ht=r.R16I),j===r.INT&&(ht=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ht=r.RG32F),j===r.HALF_FLOAT&&(ht=r.RG16F),j===r.UNSIGNED_BYTE&&(ht=r.RG8),j===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RG16_EXT),j===r.SHORT&&Nt&&(ht=Nt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RG8UI),j===r.UNSIGNED_SHORT&&(ht=r.RG16UI),j===r.UNSIGNED_INT&&(ht=r.RG32UI),j===r.BYTE&&(ht=r.RG8I),j===r.SHORT&&(ht=r.RG16I),j===r.INT&&(ht=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),j===r.UNSIGNED_INT&&(ht=r.RGB32UI),j===r.BYTE&&(ht=r.RGB8I),j===r.SHORT&&(ht=r.RGB16I),j===r.INT&&(ht=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),j===r.UNSIGNED_INT&&(ht=r.RGBA32UI),j===r.BYTE&&(ht=r.RGBA8I),j===r.SHORT&&(ht=r.RGBA16I),j===r.INT&&(ht=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RGB16_EXT),j===r.SHORT&&Nt&&(ht=Nt.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),b===r.RGBA){const et=Rt?Hu:Le.getTransfer(K);j===r.FLOAT&&(ht=r.RGBA32F),j===r.HALF_FLOAT&&(ht=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ht=et===Xe?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RGBA16_EXT),j===r.SHORT&&Nt&&(ht=Nt.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function O(L,b){let j;return L?b===null||b===na||b===Rl?j=r.DEPTH24_STENCIL8:b===Ji?j=r.DEPTH32F_STENCIL8:b===Al&&(j=r.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===na||b===Rl?j=r.DEPTH_COMPONENT24:b===Ji?j=r.DEPTH_COMPONENT32F:b===Al&&(j=r.DEPTH_COMPONENT16),j}function D(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==On&&L.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&v.delete(b)}function T(L){const b=L.target;b.removeEventListener("dispose",T),H(b)}function U(L){const b=a.get(L);if(b.__webglInit===void 0)return;const j=L.source,st=x.get(j);if(st){const K=st[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(L),Object.keys(st).length===0&&x.delete(j)}a.remove(L)}function V(L){const b=a.get(L);r.deleteTexture(b.__webglTexture);const j=L.source,st=x.get(j);delete st[b.__cacheKey],u.memory.textures--}function H(L){const b=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let K=0;K<b.__webglFramebuffer[st].length;K++)r.deleteFramebuffer(b.__webglFramebuffer[st][K]);else r.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)r.deleteFramebuffer(b.__webglFramebuffer[st]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=L.textures;for(let st=0,K=j.length;st<K;st++){const Rt=a.get(j[st]);Rt.__webglTexture&&(r.deleteTexture(Rt.__webglTexture),u.memory.textures--),a.remove(j[st])}a.remove(L)}let J=0;function ft(){J=0}function gt(){return J}function Z(L){J=L}function B(){const L=J;return L>=o.maxTextures&&ue("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),J+=1,L}function F(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function tt(L,b){const j=a.get(L);if(L.isVideoTexture&&X(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const st=L.image;if(st===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(j,L,b);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function pt(L,b){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Gt(j,L,b);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function Tt(L,b){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Gt(j,L,b);return}n.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function P(L,b){const j=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){Ct(j,L,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Q={[rp]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[op]:r.MIRRORED_REPEAT},Mt={[On]:r.NEAREST,[mE]:r.NEAREST_MIPMAP_NEAREST,[Jc]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[dd]:r.LINEAR_MIPMAP_NEAREST,[Js]:r.LINEAR_MIPMAP_LINEAR},Ut={[vE]:r.NEVER,[EE]:r.ALWAYS,[xE]:r.LESS,[cm]:r.LEQUAL,[yE]:r.EQUAL,[um]:r.GEQUAL,[SE]:r.GREATER,[ME]:r.NOTEQUAL};function Vt(L,b){if(b.type===Ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===dd||b.magFilter===Jc||b.magFilter===Js||b.minFilter===Hn||b.minFilter===dd||b.minFilter===Jc||b.minFilter===Js)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==Jc&&b.minFilter!==Js||b.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function nt(L,b){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const st=b.source;let K=x.get(st);K===void 0&&(K={},x.set(st,K));const Rt=F(b);if(Rt!==L.__cacheKey){K[Rt]===void 0&&(K[Rt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,j=!0),K[Rt].usedTimes++;const Nt=K[L.__cacheKey];Nt!==void 0&&(K[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&V(b)),L.__cacheKey=Rt,L.__webglTexture=K[Rt].texture}return j}function xt(L,b,j){return Math.floor(Math.floor(L/j)/b)}function bt(L,b,j,st){const Rt=L.updateRanges;if(Rt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,st,b.data);else{Rt.sort((Ft,zt)=>Ft.start-zt.start);let Nt=0;for(let Ft=1;Ft<Rt.length;Ft++){const zt=Rt[Nt],Bt=Rt[Ft],ie=zt.start+zt.count,$t=xt(Bt.start,b.width,4),he=xt(zt.start,b.width,4);Bt.start<=ie+1&&$t===he&&xt(Bt.start+Bt.count-1,b.width,4)===$t?zt.count=Math.max(zt.count,Bt.start+Bt.count-zt.start):(++Nt,Rt[Nt]=Bt)}Rt.length=Nt+1;const ht=n.getParameter(r.UNPACK_ROW_LENGTH),et=n.getParameter(r.UNPACK_SKIP_PIXELS),Pt=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ft=0,zt=Rt.length;Ft<zt;Ft++){const Bt=Rt[Ft],ie=Math.floor(Bt.start/4),$t=Math.ceil(Bt.count/4),he=ie%b.width,Y=Math.floor(ie/b.width),It=$t,vt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,he),n.pixelStorei(r.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(r.TEXTURE_2D,0,he,Y,It,vt,j,st,b.data)}L.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ht),n.pixelStorei(r.UNPACK_SKIP_PIXELS,et),n.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function Gt(L,b,j){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);const K=nt(L,b),Rt=b.source;n.bindTexture(st,L.__webglTexture,r.TEXTURE0+j);const Nt=a.get(Rt);if(Rt.version!==Nt.__version||K===!0){if(n.activeTexture(r.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const vt=Le.getPrimaries(Le.workingColorSpace),Ht=b.colorSpace===_s?null:Le.getPrimaries(b.colorSpace),Yt=b.colorSpace===_s||vt===Ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let et=M(b.image,!1,o.maxTextureSize);et=me(b,et);const Pt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let zt=w(b.internalFormat,Pt,Ft,b.normalized,b.colorSpace,b.isVideoTexture);Vt(st,b);let Bt;const ie=b.mipmaps,$t=b.isVideoTexture!==!0,he=Nt.__version===void 0||K===!0,Y=Rt.dataReady,It=D(b,et);if(b.isDepthTexture)zt=O(b.format===js,b.type),he&&($t?n.texStorage2D(r.TEXTURE_2D,1,zt,et.width,et.height):n.texImage2D(r.TEXTURE_2D,0,zt,et.width,et.height,0,Pt,Ft,null));else if(b.isDataTexture)if(ie.length>0){$t&&he&&n.texStorage2D(r.TEXTURE_2D,It,zt,ie[0].width,ie[0].height);for(let vt=0,Ht=ie.length;vt<Ht;vt++)Bt=ie[vt],$t?Y&&n.texSubImage2D(r.TEXTURE_2D,vt,0,0,Bt.width,Bt.height,Pt,Ft,Bt.data):n.texImage2D(r.TEXTURE_2D,vt,zt,Bt.width,Bt.height,0,Pt,Ft,Bt.data);b.generateMipmaps=!1}else $t?(he&&n.texStorage2D(r.TEXTURE_2D,It,zt,et.width,et.height),Y&&bt(b,et,Pt,Ft)):n.texImage2D(r.TEXTURE_2D,0,zt,et.width,et.height,0,Pt,Ft,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&he&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,zt,ie[0].width,ie[0].height,et.depth);for(let vt=0,Ht=ie.length;vt<Ht;vt++)if(Bt=ie[vt],b.format!==Hi)if(Pt!==null)if($t){if(Y)if(b.layerUpdates.size>0){const Yt=ex(Bt.width,Bt.height,b.format,b.type);for(const At of b.layerUpdates){const ae=Bt.data.subarray(At*Yt/Bt.data.BYTES_PER_ELEMENT,(At+1)*Yt/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,At,Bt.width,Bt.height,1,Pt,ae)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,Bt.width,Bt.height,et.depth,Pt,Bt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,vt,zt,Bt.width,Bt.height,et.depth,0,Bt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?Y&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,Bt.width,Bt.height,et.depth,Pt,Ft,Bt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,vt,zt,Bt.width,Bt.height,et.depth,0,Pt,Ft,Bt.data)}else{$t&&he&&n.texStorage2D(r.TEXTURE_2D,It,zt,ie[0].width,ie[0].height);for(let vt=0,Ht=ie.length;vt<Ht;vt++)Bt=ie[vt],b.format!==Hi?Pt!==null?$t?Y&&n.compressedTexSubImage2D(r.TEXTURE_2D,vt,0,0,Bt.width,Bt.height,Pt,Bt.data):n.compressedTexImage2D(r.TEXTURE_2D,vt,zt,Bt.width,Bt.height,0,Bt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?Y&&n.texSubImage2D(r.TEXTURE_2D,vt,0,0,Bt.width,Bt.height,Pt,Ft,Bt.data):n.texImage2D(r.TEXTURE_2D,vt,zt,Bt.width,Bt.height,0,Pt,Ft,Bt.data)}else if(b.isDataArrayTexture)if($t){if(he&&n.texStorage3D(r.TEXTURE_2D_ARRAY,It,zt,et.width,et.height,et.depth),Y)if(b.layerUpdates.size>0){const vt=ex(et.width,et.height,b.format,b.type);for(const Ht of b.layerUpdates){const Yt=et.data.subarray(Ht*vt/et.data.BYTES_PER_ELEMENT,(Ht+1)*vt/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ht,et.width,et.height,1,Pt,Ft,Yt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Pt,Ft,et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,et.width,et.height,et.depth,0,Pt,Ft,et.data);else if(b.isData3DTexture)$t?(he&&n.texStorage3D(r.TEXTURE_3D,It,zt,et.width,et.height,et.depth),Y&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Pt,Ft,et.data)):n.texImage3D(r.TEXTURE_3D,0,zt,et.width,et.height,et.depth,0,Pt,Ft,et.data);else if(b.isFramebufferTexture){if(he)if($t)n.texStorage2D(r.TEXTURE_2D,It,zt,et.width,et.height);else{let vt=et.width,Ht=et.height;for(let Yt=0;Yt<It;Yt++)n.texImage2D(r.TEXTURE_2D,Yt,zt,vt,Ht,0,Pt,Ft,null),vt>>=1,Ht>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const vt=r.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),et.parentNode!==vt){vt.appendChild(et),v.add(b),vt.onpaint=Ht=>{const Yt=Ht.changedElements;for(const At of v)Yt.includes(At.image)&&(At.needsUpdate=!0)},vt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{const Yt=r.RGBA,At=r.RGBA,ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Yt,At,ae,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ie.length>0){if($t&&he){const vt=ge(ie[0]);n.texStorage2D(r.TEXTURE_2D,It,zt,vt.width,vt.height)}for(let vt=0,Ht=ie.length;vt<Ht;vt++)Bt=ie[vt],$t?Y&&n.texSubImage2D(r.TEXTURE_2D,vt,0,0,Pt,Ft,Bt):n.texImage2D(r.TEXTURE_2D,vt,zt,Pt,Ft,Bt);b.generateMipmaps=!1}else if($t){if(he){const vt=ge(et);n.texStorage2D(r.TEXTURE_2D,It,zt,vt.width,vt.height)}Y&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,Ft,et)}else n.texImage2D(r.TEXTURE_2D,0,zt,Pt,Ft,et);y(b)&&z(st),Nt.__version=Rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ct(L,b,j){if(b.image.length!==6)return;const st=nt(L,b),K=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+j);const Rt=a.get(K);if(K.version!==Rt.__version||st===!0){n.activeTexture(r.TEXTURE0+j);const Nt=Le.getPrimaries(Le.workingColorSpace),ht=b.colorSpace===_s?null:Le.getPrimaries(b.colorSpace),et=b.colorSpace===_s||Nt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,zt=[];for(let At=0;At<6;At++)!Pt&&!Ft?zt[At]=M(b.image[At],!0,o.maxCubemapSize):zt[At]=Ft?b.image[At].image:b.image[At],zt[At]=me(b,zt[At]);const Bt=zt[0],ie=c.convert(b.format,b.colorSpace),$t=c.convert(b.type),he=w(b.internalFormat,ie,$t,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,It=Rt.__version===void 0||st===!0,vt=K.dataReady;let Ht=D(b,Bt);Vt(r.TEXTURE_CUBE_MAP,b);let Yt;if(Pt){Y&&It&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,he,Bt.width,Bt.height);for(let At=0;At<6;At++){Yt=zt[At].mipmaps;for(let ae=0;ae<Yt.length;ae++){const Jt=Yt[ae];b.format!==Hi?ie!==null?Y?vt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae,0,0,Jt.width,Jt.height,ie,Jt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae,he,Jt.width,Jt.height,0,Jt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?vt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae,0,0,Jt.width,Jt.height,ie,$t,Jt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae,he,Jt.width,Jt.height,0,ie,$t,Jt.data)}}}else{if(Yt=b.mipmaps,Y&&It){Yt.length>0&&Ht++;const At=ge(zt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,he,At.width,At.height)}for(let At=0;At<6;At++)if(Ft){Y?vt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,zt[At].width,zt[At].height,ie,$t,zt[At].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,he,zt[At].width,zt[At].height,0,ie,$t,zt[At].data);for(let ae=0;ae<Yt.length;ae++){const en=Yt[ae].image[At].image;Y?vt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae+1,0,0,en.width,en.height,ie,$t,en.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae+1,he,en.width,en.height,0,ie,$t,en.data)}}else{Y?vt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ie,$t,zt[At]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,he,ie,$t,zt[At]);for(let ae=0;ae<Yt.length;ae++){const Jt=Yt[ae];Y?vt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae+1,0,0,ie,$t,Jt.image[At]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,ae+1,he,ie,$t,Jt.image[At])}}}y(b)&&z(r.TEXTURE_CUBE_MAP),Rt.__version=K.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function wt(L,b,j,st,K,Rt){const Nt=c.convert(j.format,j.colorSpace),ht=c.convert(j.type),et=w(j.internalFormat,Nt,ht,j.normalized,j.colorSpace),Pt=a.get(b),Ft=a.get(j);if(Ft.__renderTarget=b,!Pt.__hasExternalTextures){const zt=Math.max(1,b.width>>Rt),Bt=Math.max(1,b.height>>Rt);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?n.texImage3D(K,Rt,et,zt,Bt,b.depth,0,Nt,ht,null):n.texImage2D(K,Rt,et,zt,Bt,0,Nt,ht,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),pe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,K,Ft.__webglTexture,0,ce(b)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,K,Ft.__webglTexture,Rt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(L,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const st=b.depthTexture,K=st&&st.isDepthTexture?st.type:null,Rt=O(b.stencilBuffer,K),Nt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce(b),Rt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce(b),Rt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,L)}else{const st=b.textures;for(let K=0;K<st.length;K++){const Rt=st[K],Nt=c.convert(Rt.format,Rt.colorSpace),ht=c.convert(Rt.type),et=w(Rt.internalFormat,Nt,ht,Rt.normalized,Rt.colorSpace);pe(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce(b),et,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce(b),et,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,et,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(L,b,j){const st=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=a.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Pt=c.convert(b.depthTexture.format),Ft=c.convert(b.depthTexture.type);let zt;b.depthTexture.format===Ia?zt=r.DEPTH_COMPONENT24:b.depthTexture.format===js&&(zt=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,zt,b.width,b.height,0,Pt,Ft,null)}}else tt(b.depthTexture,0);const Rt=K.__webglTexture,Nt=ce(b),ht=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,et=b.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ia)pe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,ht,Rt,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,et,ht,Rt,0);else if(b.depthTexture.format===js)pe(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,ht,Rt,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,et,ht,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(L){const b=a.get(L),j=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",K)};st.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=st}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let st=0;st<6;st++)ne(b.__webglFramebuffer[st],L,st);else{const st=L.texture.mipmaps;st&&st.length>0?ne(b.__webglFramebuffer[0],L,0):ne(b.__webglFramebuffer,L,0)}else if(j){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=r.createRenderbuffer(),fe(b.__webglDepthbuffer[st],L,!1);else{const K=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=b.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Rt)}}else{const st=L.texture.mipmaps;if(st&&st.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),fe(b.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Rt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(L,b,j){const st=a.get(L);b!==void 0&&wt(st.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&lt(L)}function yt(L){const b=L.texture,j=a.get(L),st=a.get(b);L.addEventListener("dispose",T);const K=L.textures,Rt=L.isWebGLCubeRenderTarget===!0,Nt=K.length>1;if(Nt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,u.memory.textures++),Rt){j.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ht]=[];for(let et=0;et<b.mipmaps.length;et++)j.__webglFramebuffer[ht][et]=r.createFramebuffer()}else j.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)j.__webglFramebuffer[ht]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let ht=0,et=K.length;ht<et;ht++){const Pt=a.get(K[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&pe(L)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const et=K[ht];j.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ht]);const Pt=c.convert(et.format,et.colorSpace),Ft=c.convert(et.type),zt=w(et.internalFormat,Pt,Ft,et.normalized,et.colorSpace,L.isXRRenderTarget===!0),Bt=ce(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,zt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,j.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Rt){n.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)wt(j.__webglFramebuffer[ht][et],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,et);else wt(j.__webglFramebuffer[ht],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(b)&&z(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Nt){for(let ht=0,et=K.length;ht<et;ht++){const Pt=K[ht],Ft=a.get(Pt);let zt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(zt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(zt,Ft.__webglTexture),Vt(zt,Pt),wt(j.__webglFramebuffer,L,Pt,r.COLOR_ATTACHMENT0+ht,zt,0),y(Pt)&&z(zt)}n.unbindTexture()}else{let ht=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ht=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ht,st.__webglTexture),Vt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let et=0;et<b.mipmaps.length;et++)wt(j.__webglFramebuffer[et],L,b,r.COLOR_ATTACHMENT0,ht,et);else wt(j.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,ht,0);y(b)&&z(ht),n.unbindTexture()}L.depthBuffer&&lt(L)}function Lt(L){const b=L.textures;for(let j=0,st=b.length;j<st;j++){const K=b[j];if(y(K)){const Rt=N(L),Nt=a.get(K).__webglTexture;n.bindTexture(Rt,Nt),z(Rt),n.unbindTexture()}}}const Ot=[],qt=[];function Qt(L){if(L.samples>0){if(pe(L)===!1){const b=L.textures,j=L.width,st=L.height;let K=r.COLOR_BUFFER_BIT;const Rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=a.get(L),ht=b.length>1;if(ht)for(let Pt=0;Pt<b.length;Pt++)n.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const et=L.texture.mipmaps;et&&et.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const Ft=a.get(b[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,j,st,0,0,j,st,K,r.NEAREST),m===!0&&(Ot.length=0,qt.length=0,Ot.push(r.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ot.push(Rt),qt.push(Rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<b.length;Pt++){n.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const Ft=a.get(b[Pt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,Ft,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ce(L){return Math.min(o.maxSamples,L.samples)}function pe(L){const b=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(L){const b=u.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function me(L,b){const j=L.colorSpace,st=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Fu&&j!==_s&&(Le.getTransfer(j)===Xe?(st!==Hi||K!==Ri)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",j)),b}function ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ft,this.getTextureUnits=gt,this.setTextureUnits=Z,this.setTexture2D=tt,this.setTexture2DArray=pt,this.setTexture3D=Tt,this.setTextureCube=P,this.rebindTextures=_t,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eC(r,t){function n(a,o=_s){let c;const u=Le.getTransfer(o);if(a===Ri)return r.UNSIGNED_BYTE;if(a===am)return r.UNSIGNED_SHORT_4_4_4_4;if(a===sm)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Xx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Wx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Vx)return r.BYTE;if(a===kx)return r.SHORT;if(a===Al)return r.UNSIGNED_SHORT;if(a===im)return r.INT;if(a===na)return r.UNSIGNED_INT;if(a===Ji)return r.FLOAT;if(a===Pa)return r.HALF_FLOAT;if(a===Yx)return r.ALPHA;if(a===qx)return r.RGB;if(a===Hi)return r.RGBA;if(a===Ia)return r.DEPTH_COMPONENT;if(a===js)return r.DEPTH_STENCIL;if(a===Zx)return r.RED;if(a===rm)return r.RED_INTEGER;if(a===nr)return r.RG;if(a===om)return r.RG_INTEGER;if(a===lm)return r.RGBA_INTEGER;if(a===Uu||a===Lu||a===Nu||a===Ou)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===lp||a===cp||a===up||a===fp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===lp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===up)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===fp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hp||a===dp||a===pp||a===mp||a===gp||a===zu||a===_p)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===hp||a===dp)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===pp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===mp)return c.COMPRESSED_R11_EAC;if(a===gp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===zu)return c.COMPRESSED_RG11_EAC;if(a===_p)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===vp||a===xp||a===yp||a===Sp||a===Mp||a===Ep||a===bp||a===Tp||a===Ap||a===Rp||a===Cp||a===wp||a===Dp||a===Up)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===vp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===yp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ep)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===bp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Tp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ap)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Cp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===wp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Dp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Up)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Lp||a===Np||a===Op)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Lp)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Op)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Pp||a===Ip||a===Bu||a===zp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Pp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Rl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new oy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ia({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Bl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends Es{constructor(t,n){super();const a=this;let o=null,c=1,u=null,p="local-floor",m=1,d=null,g=null,v=null,_=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",M=new aC,y={},z=n.getContextAttributes();let N=null,w=null;const O=[],D=[],I=new Dt;let T=null;const U=new Ai;U.viewport=new cn;const V=new Ai;V.viewport=new cn;const H=[U,V],J=new fT;let ft=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let xt=O[nt];return xt===void 0&&(xt=new xd,O[nt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(nt){let xt=O[nt];return xt===void 0&&(xt=new xd,O[nt]=xt),xt.getGripSpace()},this.getHand=function(nt){let xt=O[nt];return xt===void 0&&(xt=new xd,O[nt]=xt),xt.getHandSpace()};function Z(nt){const xt=D.indexOf(nt.inputSource);if(xt===-1)return;const bt=O[xt];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,d||u),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",F);for(let nt=0;nt<O.length;nt++){const xt=D[nt];xt!==null&&(D[nt]=null,O[nt].disconnect(xt))}ft=null,gt=null,M.reset();for(const nt in y)delete y[nt];t.setRenderTarget(N),x=null,_=null,v=null,o=null,w=null,Vt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(N=t.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",B),o.addEventListener("inputsourceschange",F),z.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Gt=null,Ct=null;z.depth&&(Ct=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=z.stencil?js:Ia,Gt=z.stencil?Rl:na);const wt={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(wt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new ea(_.textureWidth,_.textureHeight,{format:Hi,type:Ri,depthTexture:new co(_.textureWidth,_.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,bt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new ea(x.framebufferWidth,x.framebufferHeight,{format:Hi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(p),Vt.setContext(o),Vt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(nt){for(let xt=0;xt<nt.removed.length;xt++){const bt=nt.removed[xt],Gt=D.indexOf(bt);Gt>=0&&(D[Gt]=null,O[Gt].disconnect(bt))}for(let xt=0;xt<nt.added.length;xt++){const bt=nt.added[xt];let Gt=D.indexOf(bt);if(Gt===-1){for(let wt=0;wt<O.length;wt++)if(wt>=D.length){D.push(bt),Gt=wt;break}else if(D[wt]===null){D[wt]=bt,Gt=wt;break}if(Gt===-1)break}const Ct=O[Gt];Ct&&Ct.connect(bt)}}const tt=new k,pt=new k;function Tt(nt,xt,bt){tt.setFromMatrixPosition(xt.matrixWorld),pt.setFromMatrixPosition(bt.matrixWorld);const Gt=tt.distanceTo(pt),Ct=xt.projectionMatrix.elements,wt=bt.projectionMatrix.elements,fe=Ct[14]/(Ct[10]-1),ne=Ct[14]/(Ct[10]+1),lt=(Ct[9]+1)/Ct[5],_t=(Ct[9]-1)/Ct[5],yt=(Ct[8]-1)/Ct[0],Lt=(wt[8]+1)/wt[0],Ot=fe*yt,qt=fe*Lt,Qt=Gt/(-yt+Lt),ce=Qt*-yt;if(xt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ce),nt.translateZ(Qt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const pe=fe+Qt,X=ne+Qt,me=Ot-ce,ge=qt+(Gt-ce),L=lt*ne/X*pe,b=_t*ne/X*pe;nt.projectionMatrix.makePerspective(me,ge,L,b,pe,X),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,xt){xt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(xt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let xt=nt.near,bt=nt.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),J.near=V.near=U.near=xt,J.far=V.far=U.far=bt,(ft!==J.near||gt!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ft=J.near,gt=J.far),J.layers.mask=nt.layers.mask|6,U.layers.mask=J.layers.mask&-5,V.layers.mask=J.layers.mask&-3;const Gt=nt.parent,Ct=J.cameras;P(J,Gt);for(let wt=0;wt<Ct.length;wt++)P(Ct[wt],Gt);Ct.length===2?Tt(J,U,V):J.projectionMatrix.copy(U.projectionMatrix),Q(nt,J,Gt)};function Q(nt,xt,bt){bt===null?nt.matrix.copy(xt.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(xt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(xt.projectionMatrix),nt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=wl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&x===null))return m},this.setFoveation=function(nt){m=nt,_!==null&&(_.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(nt){return y[nt]};let Mt=null;function Ut(nt,xt){if(g=xt.getViewerPose(d||u),E=xt,g!==null){const bt=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Gt=!1;bt.length!==J.cameras.length&&(J.cameras.length=0,Gt=!0);for(let ne=0;ne<bt.length;ne++){const lt=bt[ne];let _t=null;if(x!==null)_t=x.getViewport(lt);else{const Lt=v.getViewSubImage(_,lt);_t=Lt.viewport,ne===0&&(t.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),t.setRenderTarget(w))}let yt=H[ne];yt===void 0&&(yt=new Ai,yt.layers.enable(ne),yt.viewport=new cn,H[ne]=yt),yt.matrix.fromArray(lt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(lt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(_t.x,_t.y,_t.width,_t.height),ne===0&&(J.matrix.copy(yt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Gt===!0&&J.cameras.push(yt)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=a.getBinding();const ne=v.getDepthInformation(bt[0]);ne&&ne.isValid&&ne.texture&&M.init(ne,o.renderState)}if(Ct&&Ct.includes("camera-access")&&A){t.state.unbindTexture(),v=a.getBinding();for(let ne=0;ne<bt.length;ne++){const lt=bt[ne].camera;if(lt){let _t=y[lt];_t||(_t=new oy,y[lt]=_t);const yt=v.getCameraImage(lt);_t.sourceTexture=yt}}}}for(let bt=0;bt<O.length;bt++){const Gt=D[bt],Ct=O[bt];Gt!==null&&Ct!==void 0&&Ct.update(Gt,xt,d||u)}Mt&&Mt(nt,xt),xt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Vt=new yy;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(nt){Mt=nt},this.dispose=function(){}}}const rC=new tn,Ry=new ve;Ry.set(-1,0,0,0,1,0,0,0,1);function oC(r,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,_y(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,z,N,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?m(M,y,z,N):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ni&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ni&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const z=t.get(y),N=z.envMap,w=z.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(rC.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Ry),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,z,N){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*z,M.scale.value=N*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,z){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const z=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function lC(r,t,n,a){let o={},c={},u=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,O){const D=O.program;a.uniformBlockBinding(w,D)}function d(w,O){let D=o[w.id];D===void 0&&(M(w),D=g(w),o[w.id]=D,w.addEventListener("dispose",z));const I=O.program;a.updateUBOMapping(w,I);const T=t.render.frame;c[w.id]!==T&&(_(w),c[w.id]=T)}function g(w){const O=v();w.__bindingPointIndex=O;const D=r.createBuffer(),I=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let w=0;w<p;w++)if(u.indexOf(w)===-1)return u.push(w),w;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const O=o[w.id],D=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,U=D.length;T<U;T++){const V=D[T];if(Array.isArray(V))for(let H=0,J=V.length;H<J;H++)x(V[H],T,H,I);else x(V,T,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,O,D,I){if(A(w,O,D,I)===!0){const T=w.__offset,U=w.value;if(Array.isArray(U)){let V=0;for(let H=0;H<U.length;H++){const J=U[H],ft=y(J);E(J,w.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function E(w,O,D){typeof w=="number"||typeof w=="boolean"?O[0]=w:w.isMatrix3?(O[0]=w.elements[0],O[1]=w.elements[1],O[2]=w.elements[2],O[3]=0,O[4]=w.elements[3],O[5]=w.elements[4],O[6]=w.elements[5],O[7]=0,O[8]=w.elements[6],O[9]=w.elements[7],O[10]=w.elements[8],O[11]=0):ArrayBuffer.isView(w)?O.set(new w.constructor(w.buffer,w.byteOffset,O.length)):w.toArray(O,D)}function A(w,O,D,I){const T=w.value,U=O+"_"+D;if(I[U]===void 0)return typeof T=="number"||typeof T=="boolean"?I[U]=T:ArrayBuffer.isView(T)?I[U]=T.slice():I[U]=T.clone(),!0;{const V=I[U];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return I[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function M(w){const O=w.uniforms;let D=0;const I=16;for(let U=0,V=O.length;U<V;U++){const H=Array.isArray(O[U])?O[U]:[O[U]];for(let J=0,ft=H.length;J<ft;J++){const gt=H[J],Z=Array.isArray(gt.value)?gt.value:[gt.value];for(let B=0,F=Z.length;B<F;B++){const tt=Z[B],pt=y(tt),Tt=D%I,P=Tt%pt.boundary,Q=Tt+P;D+=P,Q!==0&&I-Q<pt.storage&&(D+=I-Q),gt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),gt.__offset=D,D+=pt.storage}}}const T=D%I;return T>0&&(D+=I-T),w.__size=D,w.__cache={},this}function y(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",w),O}function z(w){const O=w.target;O.removeEventListener("dispose",z);const D=u.indexOf(O.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function N(){for(const w in o)r.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:d,dispose:N}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function uC(){return Zi===null&&(Zi=new ub(cC,16,16,nr,Pa),Zi.name="DFG_LUT",Zi.minFilter=Hn,Zi.magFilter=Hn,Zi.wrapS=Ua,Zi.wrapT=Ua,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class fC{constructor(t={}){const{canvas:n=TE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Ri}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const A=x,M=new Set([lm,om,rm]),y=new Set([Ri,na,Al,Rl,am,sm]),z=new Uint32Array(4),N=new Int32Array(4),w=new k;let O=null,D=null;const I=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let H=!1,J=null,ft=null,gt=null,Z=null;this._outputColorSpace=Wn;let B=0,F=0,tt=null,pt=-1,Tt=null;const P=new cn,Q=new cn;let Mt=null;const Ut=new be(0);let Vt=0,nt=n.width,xt=n.height,bt=1,Gt=null,Ct=null;const wt=new cn(0,0,nt,xt),fe=new cn(0,0,nt,xt);let ne=!1;const lt=new iy;let _t=!1,yt=!1;const Lt=new tn,Ot=new k,qt=new cn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function pe(){return tt===null?bt:1}let X=a;function me(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${em}`),n.addEventListener("webglcontextlost",en,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",ii,!1),X===null){const q="webgl2";if(X=me(q,R),X===null)throw me(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let ge,L,b,j,st,K,Rt,Nt,ht,et,Pt,Ft,zt,Bt,ie,$t,he,Y,It,vt,Ht,Yt,At;function ae(){ge=new uR(X),ge.init(),Ht=new eC(X,ge),L=new nR(X,ge,t,Ht),b=new $2(X,ge),L.reversedDepthBuffer&&_&&b.buffers.depth.setReversed(!0),ft=X.createFramebuffer(),gt=X.createFramebuffer(),Z=X.createFramebuffer(),j=new dR(X),st=new F2,K=new tC(X,ge,b,st,L,Ht,j),Rt=new cR(V),Nt=new _T(X),Yt=new tR(X,Nt),ht=new fR(X,Nt,j,Yt),et=new mR(X,ht,Nt,Yt,j),Y=new pR(X,L,K),ie=new iR(st),Pt=new B2(V,Rt,ge,L,Yt,ie),Ft=new oC(V,st),zt=new G2,Bt=new q2(ge),he=new $A(V,Rt,b,et,E,m),$t=new j2(V,et,L),At=new lC(X,j,L,b),It=new eR(X,ge,j),vt=new hR(X,ge,j),j.programs=Pt.programs,V.capabilities=L,V.extensions=ge,V.properties=st,V.renderLists=zt,V.shadowMap=$t,V.state=b,V.info=j}ae(),A!==Ri&&(U=new _R(A,n.width,n.height,p,o,c));const Jt=new sC(V,X);this.xr=Jt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(R){R!==void 0&&(bt=R,this.setSize(nt,xt,!1))},this.getSize=function(R){return R.set(nt,xt)},this.setSize=function(R,q,ct=!0){if(Jt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=R,xt=q,n.width=Math.floor(R*bt),n.height=Math.floor(q*bt),ct===!0&&(n.style.width=R+"px",n.style.height=q+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(nt*bt,xt*bt).floor()},this.setDrawingBufferSize=function(R,q,ct){nt=R,xt=q,bt=ct,n.width=Math.floor(R*ct),n.height=Math.floor(q*ct),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(A===Ri){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(wt)},this.setViewport=function(R,q,ct,rt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,q,ct,rt),b.viewport(P.copy(wt).multiplyScalar(bt).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,q,ct,rt){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,q,ct,rt),b.scissor(Q.copy(fe).multiplyScalar(bt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){b.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Gt=R},this.setTransparentSort=function(R){Ct=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ct=!0){let rt=0;if(R){let ot=!1;if(tt!==null){const Xt=tt.texture.format;ot=M.has(Xt)}if(ot){const Xt=tt.texture.type,Kt=y.has(Xt),kt=he.getClearColor(),te=he.getClearAlpha(),jt=kt.r,oe=kt.g,xe=kt.b;Kt?(z[0]=jt,z[1]=oe,z[2]=xe,z[3]=te,X.clearBufferuiv(X.COLOR,0,z)):(N[0]=jt,N[1]=oe,N[2]=xe,N[3]=te,X.clearBufferiv(X.COLOR,0,N))}else rt|=X.COLOR_BUFFER_BIT}q&&(rt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),J=R},this.dispose=function(){n.removeEventListener("webglcontextlost",en,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",ii,!1),he.dispose(),zt.dispose(),Bt.dispose(),st.dispose(),Rt.dispose(),et.dispose(),Yt.dispose(),At.dispose(),Pt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",hn),Jt.removeEventListener("sessionend",wn),qn.stop()};function en(R){R.preventDefault(),Vu("WebGLRenderer: Context Lost."),H=!0}function Be(){Vu("WebGLRenderer: Context Restored."),H=!1;const R=j.autoReset,q=$t.enabled,ct=$t.autoUpdate,rt=$t.needsUpdate,ot=$t.type;ae(),j.autoReset=R,$t.enabled=q,$t.autoUpdate=ct,$t.needsUpdate=rt,$t.type=ot}function ii(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const q=R.target;q.removeEventListener("dispose",ai),po(q)}function po(R){mo(R),st.remove(R)}function mo(R){const q=st.get(R).programs;q!==void 0&&(q.forEach(function(ct){Pt.releaseProgram(ct)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ct,rt,ot,Xt){q===null&&(q=Qt);const Kt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,kt=Fa(R,q,ct,rt,ot);b.setMaterial(rt,Kt);let te=ct.index,jt=1;if(rt.wireframe===!0){if(te=ht.getWireframeAttribute(ct),te===void 0)return;jt=2}const oe=ct.drawRange,xe=ct.attributes.position;let re=oe.start*jt,Ne=(oe.start+oe.count)*jt;Xt!==null&&(re=Math.max(re,Xt.start*jt),Ne=Math.min(Ne,(Xt.start+Xt.count)*jt)),te!==null?(re=Math.max(re,0),Ne=Math.min(Ne,te.count)):xe!=null&&(re=Math.max(re,0),Ne=Math.min(Ne,xe.count));const nn=Ne-re;if(nn<0||nn===1/0)return;Yt.setup(ot,rt,kt,ct,te);let Qe,Fe=It;if(te!==null&&(Qe=Nt.get(te),Fe=vt,Fe.setIndex(Qe)),ot.isMesh)rt.wireframe===!0?(b.setLineWidth(rt.wireframeLinewidth*pe()),Fe.setMode(X.LINES)):Fe.setMode(X.TRIANGLES);else if(ot.isLine){let He=rt.linewidth;He===void 0&&(He=1),b.setLineWidth(He*pe()),ot.isLineSegments?Fe.setMode(X.LINES):ot.isLineLoop?Fe.setMode(X.LINE_LOOP):Fe.setMode(X.LINE_STRIP)}else ot.isPoints?Fe.setMode(X.POINTS):ot.isSprite&&Fe.setMode(X.TRIANGLES);if(ot.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Fe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const He=ot._multiDrawStarts,Zt=ot._multiDrawCounts,In=ot._multiDrawCount,Te=te?Nt.get(te).bytesPerElement:1,xn=st.get(rt).currentProgram.getUniforms();for(let si=0;si<In;si++)xn.setValue(X,"_gl_DrawID",si),Fe.render(He[si]/Te,Zt[si])}else if(ot.isInstancedMesh)Fe.renderInstances(re,nn,ot.count);else if(ct.isInstancedBufferGeometry){const He=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Zt=Math.min(ct.instanceCount,He);Fe.renderInstances(re,nn,Zt)}else Fe.render(re,nn)};function go(R,q,ct){R.transparent===!0&&R.side===Qi&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,Ba(R,q,ct),R.side=ys,R.needsUpdate=!0,Ba(R,q,ct),R.side=Qi):Ba(R,q,ct)}this.compile=function(R,q,ct=null){ct===null&&(ct=R),D=Bt.get(ct),D.init(q),T.push(D),ct.traverseVisible(function(ot){ot.isLight&&ot.layers.test(q.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),R!==ct&&R.traverseVisible(function(ot){ot.isLight&&ot.layers.test(q.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights();const rt=new Set;return R.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Xt=ot.material;if(Xt)if(Array.isArray(Xt))for(let Kt=0;Kt<Xt.length;Kt++){const kt=Xt[Kt];go(kt,ct,ot),rt.add(kt)}else go(Xt,ct,ot),rt.add(Xt)}),D=T.pop(),rt},this.compileAsync=function(R,q,ct=null){const rt=this.compile(R,q,ct);return new Promise(ot=>{function Xt(){if(rt.forEach(function(Kt){st.get(Kt).currentProgram.isReady()&&rt.delete(Kt)}),rt.size===0){ot(R);return}setTimeout(Xt,10)}ge.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let ar=null;function Gi(R){ar&&ar(R)}function hn(){qn.stop()}function wn(){qn.start()}const qn=new yy;qn.setAnimationLoop(Gi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){ar=R,Jt.setAnimationLoop(R),R===null?qn.stop():qn.start()},Jt.addEventListener("sessionstart",hn),Jt.addEventListener("sessionend",wn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(R,q);const ct=Jt.enabled===!0&&Jt.isPresenting===!0,rt=U!==null&&(tt===null||ct)&&U.begin(V,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(q),q=Jt.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,q,tt),D=Bt.get(R,T.length),D.init(q),D.state.textureUnits=K.getTextureUnits(),T.push(D),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),lt.setFromProjectionMatrix(Lt,ji,q.reversedDepth),yt=this.localClippingEnabled,_t=ie.init(this.clippingPlanes,yt),O=zt.get(R,I.length),O.init(),I.push(O),Jt.enabled===!0&&Jt.isPresenting===!0){const Kt=V.xr.getDepthSensingMesh();Kt!==null&&Ts(Kt,q,-1/0,V.sortObjects)}Ts(R,q,0,V.sortObjects),O.finish(),V.sortObjects===!0&&O.sort(Gt,Ct,q.reversedDepth),ce=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1,ce&&he.addToRenderList(O,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ie.beginShadows();const ot=D.state.shadowsArray;if($t.render(ot,R,q),_t===!0&&ie.endShadows(),(rt&&U.hasRenderPass())===!1){const Kt=O.opaque,kt=O.transmissive;if(D.setupLights(),q.isArrayCamera){const te=q.cameras;if(kt.length>0)for(let jt=0,oe=te.length;jt<oe;jt++){const xe=te[jt];Gl(Kt,kt,R,xe)}ce&&he.render(R);for(let jt=0,oe=te.length;jt<oe;jt++){const xe=te[jt];Hl(O,R,xe,xe.viewport)}}else kt.length>0&&Gl(Kt,kt,R,q),ce&&he.render(R),Hl(O,R,q)}tt!==null&&F===0&&(K.updateMultisampleRenderTarget(tt),K.updateRenderTargetMipmap(tt)),rt&&U.end(V),R.isScene===!0&&R.onAfterRender(V,R,q),Yt.resetDefaultState(),pt=-1,Tt=null,T.pop(),T.length>0?(D=T[T.length-1],K.setTextureUnits(D.state.textureUnits),_t===!0&&ie.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?O=I[I.length-1]:O=null,J!==null&&J.renderEnd()};function Ts(R,q,ct,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||lt.intersectsSprite(R)){rt&&qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const Kt=et.update(R),kt=R.material;kt.visible&&O.push(R,Kt,kt,ct,qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||lt.intersectsObject(R))){const Kt=et.update(R),kt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qt.copy(R.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),qt.copy(Kt.boundingSphere.center)),qt.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(kt)){const te=Kt.groups;for(let jt=0,oe=te.length;jt<oe;jt++){const xe=te[jt],re=kt[xe.materialIndex];re&&re.visible&&O.push(R,Kt,re,ct,qt.z,xe)}}else kt.visible&&O.push(R,Kt,kt,ct,qt.z,null)}}const Xt=R.children;for(let Kt=0,kt=Xt.length;Kt<kt;Kt++)Ts(Xt[Kt],q,ct,rt)}function Hl(R,q,ct,rt){const{opaque:ot,transmissive:Xt,transparent:Kt}=R;D.setupLightsView(ct),_t===!0&&ie.setGlobalState(V.clippingPlanes,ct),rt&&b.viewport(P.copy(rt)),ot.length>0&&As(ot,q,ct),Xt.length>0&&As(Xt,q,ct),Kt.length>0&&As(Kt,q,ct),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Gl(R,q,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[rt.id]===void 0){const re=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[rt.id]=new ea(1,1,{generateMipmaps:!0,type:re?Pa:Ri,minFilter:Js,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Xt=D.state.transmissionRenderTarget[rt.id],Kt=rt.viewport||P;Xt.setSize(Kt.z*V.transmissionResolutionScale,Kt.w*V.transmissionResolutionScale);const kt=V.getRenderTarget(),te=V.getActiveCubeFace(),jt=V.getActiveMipmapLevel();V.setRenderTarget(Xt),V.getClearColor(Ut),Vt=V.getClearAlpha(),Vt<1&&V.setClearColor(16777215,.5),V.clear(),ce&&he.render(ct);const oe=V.toneMapping;V.toneMapping=$i;const xe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),D.setupLightsView(rt),_t===!0&&ie.setGlobalState(V.clippingPlanes,rt),As(R,ct,rt),K.updateMultisampleRenderTarget(Xt),K.updateRenderTargetMipmap(Xt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Ne=0,nn=q.length;Ne<nn;Ne++){const Qe=q[Ne],{object:Fe,geometry:He,material:Zt,group:In}=Qe;if(Zt.side===Qi&&Fe.layers.test(rt.layers)){const Te=Zt.side;Zt.side=ni,Zt.needsUpdate=!0,za(Fe,ct,rt,He,Zt,In),Zt.side=Te,Zt.needsUpdate=!0,re=!0}}re===!0&&(K.updateMultisampleRenderTarget(Xt),K.updateRenderTargetMipmap(Xt))}V.setRenderTarget(kt,te,jt),V.setClearColor(Ut,Vt),xe!==void 0&&(rt.viewport=xe),V.toneMapping=oe}function As(R,q,ct){const rt=q.isScene===!0?q.overrideMaterial:null;for(let ot=0,Xt=R.length;ot<Xt;ot++){const Kt=R[ot],{object:kt,geometry:te,group:jt}=Kt;let oe=Kt.material;oe.allowOverride===!0&&rt!==null&&(oe=rt),kt.layers.test(ct.layers)&&za(kt,q,ct,te,oe,jt)}}function za(R,q,ct,rt,ot,Xt){R.onBeforeRender(V,q,ct,rt,ot,Xt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ot.onBeforeRender(V,q,ct,rt,R,Xt),ot.transparent===!0&&ot.side===Qi&&ot.forceSinglePass===!1?(ot.side=ni,ot.needsUpdate=!0,V.renderBufferDirect(ct,q,rt,ot,R,Xt),ot.side=ys,ot.needsUpdate=!0,V.renderBufferDirect(ct,q,rt,ot,R,Xt),ot.side=Qi):V.renderBufferDirect(ct,q,rt,ot,R,Xt),R.onAfterRender(V,q,ct,rt,ot,Xt)}function Ba(R,q,ct){q.isScene!==!0&&(q=Qt);const rt=st.get(R),ot=D.state.lights,Xt=D.state.shadowsArray,Kt=ot.state.version,kt=Pt.getParameters(R,ot.state,Xt,q,ct,D.state.lightProbeGridArray),te=Pt.getProgramCacheKey(kt);let jt=rt.programs;rt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,rt.fog=q.fog;const oe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;rt.envMap=Rt.get(R.envMap||rt.environment,oe),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",ai),jt=new Map,rt.programs=jt);let xe=jt.get(te);if(xe!==void 0){if(rt.currentProgram===xe&&rt.lightsStateVersion===Kt)return ra(R,kt),xe}else kt.uniforms=Pt.getUniforms(R),J!==null&&R.isNodeMaterial&&J.build(R,ct,kt),R.onBeforeCompile(kt,V),xe=Pt.acquireProgram(kt,te),jt.set(te,xe),rt.uniforms=kt.uniforms;const re=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(re.clippingPlanes=ie.uniform),ra(R,kt),rt.needsLights=Vl(R),rt.lightsStateVersion=Kt,rt.needsLights&&(re.ambientLightColor.value=ot.state.ambient,re.lightProbe.value=ot.state.probe,re.directionalLights.value=ot.state.directional,re.directionalLightShadows.value=ot.state.directionalShadow,re.spotLights.value=ot.state.spot,re.spotLightShadows.value=ot.state.spotShadow,re.rectAreaLights.value=ot.state.rectArea,re.ltc_1.value=ot.state.rectAreaLTC1,re.ltc_2.value=ot.state.rectAreaLTC2,re.pointLights.value=ot.state.point,re.pointLightShadows.value=ot.state.pointShadow,re.hemisphereLights.value=ot.state.hemi,re.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,re.spotLightMatrix.value=ot.state.spotLightMatrix,re.spotLightMap.value=ot.state.spotLightMap,re.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=D.state.lightProbeGridArray.length>0,rt.currentProgram=xe,rt.uniformsList=null,xe}function sa(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Pu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ra(R,q){const ct=st.get(R);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function Rs(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ct=0,rt=R.length;ct<rt;ct++){const ot=R[ct];if(ot.texture!==null&&ot.boundingBox.containsPoint(w))return ot}return null}function Fa(R,q,ct,rt,ot){q.isScene!==!0&&(q=Qt),K.resetTextureUnits();const Xt=q.fog,Kt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?q.environment:null,kt=tt===null?V.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Le.workingColorSpace,te=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,jt=Rt.get(rt.envMap||Kt,te),oe=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,xe=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),re=!!ct.morphAttributes.position,Ne=!!ct.morphAttributes.normal,nn=!!ct.morphAttributes.color;let Qe=$i;rt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Qe=V.toneMapping);const Fe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,He=Fe!==void 0?Fe.length:0,Zt=st.get(rt),In=D.state.lights;if(_t===!0&&(yt===!0||R!==Tt)){const ze=R===Tt&&rt.id===pt;ie.setState(rt,R,ze)}let Te=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==In.state.version||Zt.outputColorSpace!==kt||ot.isBatchedMesh&&Zt.batching===!1||!ot.isBatchedMesh&&Zt.batching===!0||ot.isBatchedMesh&&Zt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&Zt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&Zt.instancing===!1||!ot.isInstancedMesh&&Zt.instancing===!0||ot.isSkinnedMesh&&Zt.skinning===!1||!ot.isSkinnedMesh&&Zt.skinning===!0||ot.isInstancedMesh&&Zt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Zt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Zt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Zt.instancingMorph===!1&&ot.morphTexture!==null||Zt.envMap!==jt||rt.fog===!0&&Zt.fog!==Xt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ie.numPlanes||Zt.numIntersection!==ie.numIntersection)||Zt.vertexAlphas!==oe||Zt.vertexTangents!==xe||Zt.morphTargets!==re||Zt.morphNormals!==Ne||Zt.morphColors!==nn||Zt.toneMapping!==Qe||Zt.morphTargetsCount!==He||!!Zt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Te=!0):(Te=!0,Zt.__version=rt.version);let xn=Zt.currentProgram;Te===!0&&(xn=Ba(rt,q,ot),J&&rt.isNodeMaterial&&J.onUpdateProgram(rt,xn,Zt));let si=!1,Ui=!1,ri=!1;const Ge=xn.getUniforms(),an=Zt.uniforms;if(b.useProgram(xn.program)&&(si=!0,Ui=!0,ri=!0),rt.id!==pt&&(pt=rt.id,Ui=!0),Zt.needsLights){const ze=Rs(D.state.lightProbeGridArray,ot);Zt.lightProbeGrid!==ze&&(Zt.lightProbeGrid=ze,Ui=!0)}if(si||Tt!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ge.setValue(X,"projectionMatrix",R.projectionMatrix),Ge.setValue(X,"viewMatrix",R.matrixWorldInverse);const Vi=Ge.map.cameraPosition;Vi!==void 0&&Vi.setValue(X,Ot.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Tt!==R&&(Tt=R,Ui=!0,ri=!0)}if(Zt.needsLights&&(In.state.directionalShadowMap.length>0&&Ge.setValue(X,"directionalShadowMap",In.state.directionalShadowMap,K),In.state.spotShadowMap.length>0&&Ge.setValue(X,"spotShadowMap",In.state.spotShadowMap,K),In.state.pointShadowMap.length>0&&Ge.setValue(X,"pointShadowMap",In.state.pointShadowMap,K)),ot.isSkinnedMesh){Ge.setOptional(X,ot,"bindMatrix"),Ge.setOptional(X,ot,"bindMatrixInverse");const ze=ot.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ge.setValue(X,"boneTexture",ze.boneTexture,K))}ot.isBatchedMesh&&(Ge.setOptional(X,ot,"batchingTexture"),Ge.setValue(X,"batchingTexture",ot._matricesTexture,K),Ge.setOptional(X,ot,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",ot._indirectTexture,K),Ge.setOptional(X,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",ot._colorsTexture,K));const Li=ct.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Y.update(ot,ct,xn),(Ui||Zt.receiveShadow!==ot.receiveShadow)&&(Zt.receiveShadow=ot.receiveShadow,Ge.setValue(X,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&q.environment!==null&&(an.envMapIntensity.value=q.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=uC()),Ui){if(Ge.setValue(X,"toneMappingExposure",V.toneMappingExposure),Zt.needsLights&&dn(an,ri),Xt&&rt.fog===!0&&Ft.refreshFogUniforms(an,Xt),Ft.refreshMaterialUniforms(an,rt,bt,xt,D.state.transmissionRenderTarget[R.id]),Zt.needsLights&&Zt.lightProbeGrid){const ze=Zt.lightProbeGrid;an.probesSH.value=ze.texture,an.probesMin.value.copy(ze.boundingBox.min),an.probesMax.value.copy(ze.boundingBox.max),an.probesResolution.value.copy(ze.resolution)}Pu.upload(X,sa(Zt),an,K)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Pu.upload(X,sa(Zt),an,K),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ge.setValue(X,"center",ot.center),Ge.setValue(X,"modelViewMatrix",ot.modelViewMatrix),Ge.setValue(X,"normalMatrix",ot.normalMatrix),Ge.setValue(X,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){const ze=rt.uniformsGroups;for(let Vi=0,Ha=ze.length;Vi<Ha;Vi++){const Cs=ze[Vi];At.update(Cs,xn),At.bind(Cs,xn)}}return xn}function dn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Vl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,q,ct){const rt=st.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),st.get(R.texture).__webglTexture=q,st.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ct=st.get(R);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ct=0){tt=R,B=q,F=ct;let rt=null,ot=!1,Xt=!1;if(R){const kt=st.get(R);if(kt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,kt.__webglFramebuffer),P.copy(R.viewport),Q.copy(R.scissor),Mt=R.scissorTest,b.viewport(P),b.scissor(Q),b.setScissorTest(Mt),pt=-1;return}else if(kt.__webglFramebuffer===void 0)K.setupRenderTarget(R);else if(kt.__hasExternalTextures)K.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const oe=R.depthTexture;if(kt.__boundDepthTexture!==oe){if(oe!==null&&st.has(oe)&&(R.width!==oe.image.width||R.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Xt=!0);const jt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?rt=jt[q][ct]:rt=jt[q],ot=!0):R.samples>0&&K.useMultisampledRTT(R)===!1?rt=st.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?rt=jt[ct]:rt=jt,P.copy(R.viewport),Q.copy(R.scissor),Mt=R.scissorTest}else P.copy(wt).multiplyScalar(bt).floor(),Q.copy(fe).multiplyScalar(bt).floor(),Mt=ne;if(ct!==0&&(rt=ft),b.bindFramebuffer(X.FRAMEBUFFER,rt)&&b.drawBuffers(R,rt),b.viewport(P),b.scissor(Q),b.setScissorTest(Mt),ot){const kt=st.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,kt.__webglTexture,ct)}else if(Xt){const kt=q;for(let te=0;te<R.textures.length;te++){const jt=st.get(R.textures[te]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+te,jt.__webglTexture,ct,kt)}}else if(R!==null&&ct!==0){const kt=st.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,kt.__webglTexture,ct)}pt=-1},this.readRenderTargetPixels=function(R,q,ct,rt,ot,Xt,Kt,kt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Kt!==void 0&&(te=te[Kt]),te){b.bindFramebuffer(X.FRAMEBUFFER,te);try{const jt=R.textures[kt],oe=jt.format,xe=jt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+kt),!L.textureFormatReadable(oe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(xe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&ct>=0&&ct<=R.height-ot&&X.readPixels(q,ct,rt,ot,Ht.convert(oe),Ht.convert(xe),Xt)}finally{const jt=tt!==null?st.get(tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,q,ct,rt,ot,Xt,Kt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Kt!==void 0&&(te=te[Kt]),te)if(q>=0&&q<=R.width-rt&&ct>=0&&ct<=R.height-ot){b.bindFramebuffer(X.FRAMEBUFFER,te);const jt=R.textures[kt],oe=jt.format,xe=jt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+kt),!L.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.bufferData(X.PIXEL_PACK_BUFFER,Xt.byteLength,X.STREAM_READ),X.readPixels(q,ct,rt,ot,Ht.convert(oe),Ht.convert(xe),0);const Ne=tt!==null?st.get(tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Ne);const nn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await AE(X,nn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Xt),X.deleteBuffer(re),X.deleteSync(nn),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ct=0){const rt=Math.pow(2,-ct),ot=Math.floor(R.image.width*rt),Xt=Math.floor(R.image.height*rt),Kt=q!==null?q.x:0,kt=q!==null?q.y:0;K.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ct,0,0,Kt,kt,ot,Xt),b.unbindTexture()},this.copyTextureToTexture=function(R,q,ct=null,rt=null,ot=0,Xt=0){let Kt,kt,te,jt,oe,xe,re,Ne,nn;const Qe=R.isCompressedTexture?R.mipmaps[Xt]:R.image;if(ct!==null)Kt=ct.max.x-ct.min.x,kt=ct.max.y-ct.min.y,te=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,oe=ct.min.y,xe=ct.isBox3?ct.min.z:0;else{const an=Math.pow(2,-ot);Kt=Math.floor(Qe.width*an),kt=Math.floor(Qe.height*an),R.isDataArrayTexture?te=Qe.depth:R.isData3DTexture?te=Math.floor(Qe.depth*an):te=1,jt=0,oe=0,xe=0}rt!==null?(re=rt.x,Ne=rt.y,nn=rt.z):(re=0,Ne=0,nn=0);const Fe=Ht.convert(q.format),He=Ht.convert(q.type);let Zt;q.isData3DTexture?(K.setTexture3D(q,0),Zt=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(K.setTexture2DArray(q,0),Zt=X.TEXTURE_2D_ARRAY):(K.setTexture2D(q,0),Zt=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const In=b.getParameter(X.UNPACK_ROW_LENGTH),Te=b.getParameter(X.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(X.UNPACK_SKIP_PIXELS),si=b.getParameter(X.UNPACK_SKIP_ROWS),Ui=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,Qe.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qe.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,jt),b.pixelStorei(X.UNPACK_SKIP_ROWS,oe),b.pixelStorei(X.UNPACK_SKIP_IMAGES,xe);const ri=R.isDataArrayTexture||R.isData3DTexture,Ge=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const an=st.get(R),Li=st.get(q),ze=st.get(an.__renderTarget),Vi=st.get(Li.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,ze.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ha=0;Ha<te;Ha++)ri&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,st.get(R).__webglTexture,ot,xe+Ha),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,st.get(q).__webglTexture,Xt,nn+Ha)),X.blitFramebuffer(jt,oe,Kt,kt,re,Ne,Kt,kt,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ot!==0||R.isRenderTargetTexture||st.has(R)){const an=st.get(R),Li=st.get(q);b.bindFramebuffer(X.READ_FRAMEBUFFER,gt),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Z);for(let ze=0;ze<te;ze++)ri?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,an.__webglTexture,ot,xe+ze):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,an.__webglTexture,ot),Ge?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Li.__webglTexture,Xt,nn+ze):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Li.__webglTexture,Xt),ot!==0?X.blitFramebuffer(jt,oe,Kt,kt,re,Ne,Kt,kt,X.COLOR_BUFFER_BIT,X.NEAREST):Ge?X.copyTexSubImage3D(Zt,Xt,re,Ne,nn+ze,jt,oe,Kt,kt):X.copyTexSubImage2D(Zt,Xt,re,Ne,jt,oe,Kt,kt);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ge?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Zt,Xt,re,Ne,nn,Kt,kt,te,Fe,He,Qe.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Zt,Xt,re,Ne,nn,Kt,kt,te,Fe,Qe.data):X.texSubImage3D(Zt,Xt,re,Ne,nn,Kt,kt,te,Fe,He,Qe):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Xt,re,Ne,Kt,kt,Fe,He,Qe.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Xt,re,Ne,Qe.width,Qe.height,Fe,Qe.data):X.texSubImage2D(X.TEXTURE_2D,Xt,re,Ne,Kt,kt,Fe,He,Qe);b.pixelStorei(X.UNPACK_ROW_LENGTH,In),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Te),b.pixelStorei(X.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(X.UNPACK_SKIP_ROWS,si),b.pixelStorei(X.UNPACK_SKIP_IMAGES,Ui),Xt===0&&q.generateMipmaps&&X.generateMipmap(Zt),b.unbindTexture()},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&K.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?K.setTextureCube(R,0):R.isData3DTexture?K.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?K.setTexture2DArray(R,0):K.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){B=0,F=0,tt=null,b.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}const Tx={type:"change"},vm={type:"start"},Cy={type:"end"},Cu=new Il,Ax=new gs,hC=Math.cos(70*gi.DEG2RAD),Sn=new k,ti=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class dC extends mT{constructor(t,n=null){super(t,n),this.state=Ke.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Ss,this._lastTargetPosition=new k,this._quat=new Ss().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jv,this._sphericalDelta=new jv,this._scale=1,this._panOffset=new k,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new k,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mC.bind(this),this._onPointerDown=pC.bind(this),this._onPointerUp=gC.bind(this),this._onContextMenu=EC.bind(this),this._onMouseWheel=xC.bind(this),this._onKeyDown=yC.bind(this),this._onTouchStart=SC.bind(this),this._onTouchMove=MC.bind(this),this._onMouseDown=_C.bind(this),this._onMouseMove=vC.bind(this),this._interceptControlDown=bC.bind(this),this._interceptControlUp=TC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tx),this.update(),this.state=Ke.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Sn.copy(n).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ti:a>Math.PI&&(a-=ti),o<-Math.PI?o+=ti:o>Math.PI&&(o-=ti),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const p=Sn.length();u=this._clampDistance(p*this._scale);const m=p-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),u=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Cu.origin.copy(this.object.position),Cu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cu.direction))<hC?this.object.lookAt(this.target):(Ax.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cu.intersectPlane(Ax,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(Tx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ti/60*this.autoRotateSpeed*t:ti/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Sn.setFromMatrixColumn(n,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,n){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(n,1):(Sn.setFromMatrixColumn(n,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Sn.copy(o).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,p=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,p=(t.pageY+n.y)*.5;this._updateZoomParameters(u,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Dt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function pC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function gC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cy),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function _C(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ke.DOLLY;break;case ao.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ke.ROTATE}break;case ao.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vm)}function vC(r){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function xC(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(r.preventDefault(),this.dispatchEvent(vm),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cy))}function yC(r){this.enabled!==!1&&this._handleKeyDown(r)}function SC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ke.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ke.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(vm)}function MC(r){switch(this._trackPointer(r),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ke.NONE}}function EC(r){this.enabled!==!1&&r.preventDefault()}function bC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class AC extends Fl{constructor(t){super(t)}load(t,n,a,o){const c=this,u=new oT(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(p){const m=c.parse(JSON.parse(p));n&&n(m)},a,o)}parse(t){return new wy(t)}}class wy{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100,a="ltr"){const o=[],c=RC(t,n,this.data,a);for(let u=0,p=c.length;u<p;u++)o.push(...c[u].toShapes());return o}}function RC(r,t,n,a){const o=Array.from(r),c=t/n.resolution,u=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*c,p=[];let m=0,d=0;(a=="rtl"||a=="tb")&&o.reverse();for(let g=0;g<o.length;g++){const v=o[g];if(v===`
`)m=0,d-=u;else{const _=CC(v,c,m,d,n);a=="tb"?(m=0,d+=n.ascender*c):m+=_.offsetX,p.push(_.path)}}return p}function CC(r,t,n,a,o){const c=o.glyphs[r]||o.glyphs["?"];if(!c){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const u=new pT;let p,m,d,g,v,_,x,E;if(c.o){const A=c._cachedOutline||(c._cachedOutline=c.o.split(" "));for(let M=0,y=A.length;M<y;)switch(A[M++]){case"m":p=A[M++]*t+n,m=A[M++]*t+a,u.moveTo(p,m);break;case"l":p=A[M++]*t+n,m=A[M++]*t+a,u.lineTo(p,m);break;case"q":d=A[M++]*t+n,g=A[M++]*t+a,v=A[M++]*t+n,_=A[M++]*t+a,u.quadraticCurveTo(v,_,d,g);break;case"b":d=A[M++]*t+n,g=A[M++]*t+a,v=A[M++]*t+n,_=A[M++]*t+a,x=A[M++]*t+n,E=A[M++]*t+a,u.bezierCurveTo(v,_,x,E,d,g);break}}return{offsetX:c.ha*t,path:u}}class xm extends gm{constructor(t,n={}){const a=n.font;if(a===void 0)super();else{const o=a.generateShapes(t,n.size,n.direction);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(o,n)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(t){const n=t.options;return n.font=new wy(n.font.data),new xm(n.text,n)}}const Dy=["/manus-storage/0F31B765-09CF-479F-9909-73BE91F7C1E4_c21c36bd.jpg","/manus-storage/589A8B41-AD51-4E0C-BA80-DD72062B9EC1_15516ba7.jpg","/manus-storage/02240ABB-407A-4985-8497-F23DAEED0A08_4e5c8e51.jpg","/manus-storage/3B75A832-18FE-4DF9-BFF0-E033A5D2421B_f7589c99.jpg","/manus-storage/D31C3B4F-7BCF-4567-ADEC-5042607AE9E0_555ec6d6.jpg","/manus-storage/3F8B1E4A-3F9D-4661-A170-2F617034AFD9_9e5a0154.jpg","/manus-storage/247F79AB-1B2E-459B-AE9F-B6E1E9091836_485c80e1.jpg","/manus-storage/13BE0240-8FB8-450A-9C8D-5563E4E68A7A_d9dfbb63.jpg","/manus-storage/9D078558-1896-4EA7-BCB8-F497D4EEE4DF_ee4a8e4e.jpg","/manus-storage/F281A9AE-0DA4-4969-A381-2A6FCB97F7E4_b09202f0.jpg","/manus-storage/20427892-6290-4B93-8A17-B322F00E35D7_f68d2a3d.jpg","/manus-storage/7F684C4E-0C97-43EF-A2CF-7E7A26405E89_55f0d6aa.jpg","/manus-storage/E21DC02D-B527-4DC6-9FCC-D417370E112A_3646c58e.jpg","/manus-storage/82955931-FC38-4008-8481-4709039CAE6F_8f8f33a3.jpg","/manus-storage/E6F52163-12D8-42C2-9F5B-C22B859BC720_564c6255.jpg","/manus-storage/A697F2ED-D3F9-4875-A01B-4AC6A38A3597_0a74000c.jpg","/manus-storage/0B286833-85B2-428A-9C5C-C371853C1F88_8c81db44.jpg","/manus-storage/D3F23855-C4A0-42A0-8F80-3D0796DDE7CB_e390d162.jpg","/manus-storage/18561B44-3C9A-4442-A041-F916CD5DC03C_22e49ac0.jpg","/manus-storage/396914B5-E7C8-4D5A-8E42-CB688FCC6F77_61f2ae3e.jpg","/manus-storage/F4230B69-47BA-43E2-8859-FCA9E92446D9_799f26b8.jpg","/manus-storage/72F58EED-3B20-4509-AD95-57969EA76153_25bf36c1.jpg","/manus-storage/6B36B023-BCCE-4E51-9618-24FB7EB142B3_79815742.jpg","/manus-storage/2DDE7103-1290-4D9C-81DE-230E664C8831_6bdf21ee.jpg","/manus-storage/301FC993-AE2D-4921-B0EE-F9BDD1DB32F6_e28ba1f8.jpg","/manus-storage/3B63AC19-3802-4928-8CBA-6082AF769FA0_3ad7c901.jpg","/manus-storage/IMG_8747_8fdacb88.jpeg","/manus-storage/IMG_8638_618844cc.jpeg","/manus-storage/IMG_8626_8a084d2f.jpeg","/manus-storage/IMG_8647_7ac7a84c.jpeg","/manus-storage/IMG_8746_9a0ce663.jpeg","/manus-storage/IMG_8749_cb1dad09.jpeg","/manus-storage/IMG_8748_81736b30.jpeg"];if(Dy.length!==33)throw new Error("Uploaded picture tile manifest must contain exactly 33 source images");const wC=["You make ordinary moments","Your smile makes every day","Thinking of you makes my heart","You bring a little more light to","Your kindness turns small moments into","Every memory with you feels","You make the quiet moments","Your presence makes everything","You are the sweetest part of","A little thought of you makes today","Your laugh makes the whole world","You make every simple moment","Your heart makes this life","You turn memories into","Being near you feels like","Your warmth makes every place","You make my favorite moments","Your gentle spirit makes everything","Remembering you makes my day","You are a beautiful reason to","Your eyes make the world","You bring joy to the little things and","Your love makes each memory","You make every photograph feel","Your sweet soul makes life","One thought of you makes my heart","You make happiness feel","Your magic makes ordinary days","You are the lovely feeling behind","Every moment with you becomes"],DC=["feel brighter.","feel special.","feel like home.","feel worth keeping.","feel full of wonder.","shine a little longer.","feel beautifully unforgettable.","feel warmer somehow.","feel like a gift.","feel wonderfully yours."],Zu=wC.flatMap(r=>DC.map(t=>`${r} ${t}`));if(Zu.length!==300)throw new Error(`Expected 300 sweet tile messages, got ${Zu.length}`);const UC="/audio/arthur-miguel-your-universe.mp3",wu=Dy,LC="/manus-storage/DancingScript_760c67cb.json",qp=22,Da=5,io=12,NC=5,Uy=216,Rx=Uy,gl=240,Zd=540,OC=18,Cx=.002,PC=.001,wx=.001,IC=.022,Dx=440,Zp=550,zC=20,BC=530,FC=Zp/BC,Kp=Math.hypot(30,600)*FC,Ux=Kp+zC,Qp=34,Ly=2.1,HC=Ly*2,GC=9e3,VC=.66,kC=1.12,XC=.44,WC=1.04,YC=.08,qC=.34,ZC=22e4,Ku=300,KC=12e4,QC=1.12,no=0,Kd={r:.86,g:.34,b:.7},Jp=r=>({r:Math.min(1,Kd.r*r),g:Math.min(1,Kd.g*r),b:Math.min(1,Kd.b*r)}),jp=r=>{const t=Jp(r);return{r:Math.min(1,t.r*1.04),g:Math.min(1,t.g*1.12),b:t.b*.9}},Ny=1.18,JC=.18,jC=(r,t=Ny)=>{const n=jp(r),a=(n.r+n.g+n.b)/3;return{r:Math.min(1,a+(n.r-a)*t),g:Math.min(1,a+(n.g-a)*t),b:Math.min(1,a+(n.b-a)*t)}},$C=r=>{let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)},Iu=r=>r*r*r*(r*(r*6-15)+10),t3=r=>r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2,Lx=(r,t,n)=>r.clone().lerp(t,n);function e3(r,t){const a=new Float32Array(6900),o=new Float32Array(2300*3);for(let x=0;x<2300;x+=1){const E=500+t()*850,A=t()*Math.PI*2,M=Math.acos(2*t()-1),y=x*3;a[y]=E*Math.sin(M)*Math.cos(A),a[y+1]=E*Math.cos(M)*.82,a[y+2]=E*Math.sin(M)*Math.sin(A);const z=t()>.68,N=new be(z?"#cdb7ff":t()>.45?"#f5c9ef":"#ffe2f8");o[y]=N.r,o[y+1]=N.g,o[y+2]=N.b}const c=new Cn;c.setAttribute("position",new Mn(a,3)),c.setAttribute("color",new Mn(o,3));const u=new Dl(c,new Yu({size:1.05,sizeAttenuation:!0,vertexColors:!0,map:$p(),transparent:!0,alphaTest:.01,opacity:.64,depthWrite:!1,blending:Na}));u.name="reference-starfield",r.add(u);const p=new wi;p.name="reference-large-stars";for(let x=0;x<84;x+=1){const E=new Di(new _m(1.8+t()*3.4,8,8),new ju({color:new be().setHSL(.88+t()*.07,.42,.66+t()*.13),transparent:!0,opacity:.6,depthWrite:!1})),A=t()*Math.PI*2,M=440+t()*780;E.position.set(Math.cos(A)*M,(t()-.5)*640,Math.sin(A)*M),p.add(E)}const m=8e3,d=2400,g=new Float32Array(m*3),v=new Float32Array(m*3);for(let x=0;x<m;x+=1){const E=x*3,A=Math.floor(t()*6),M=(t()*2-1)*d,y=(t()*2-1)*d,z=t()>.5?d:-d;A<2?g.set([z,M,y],E):A<4?g.set([M,z,y],E):g.set([M,y,z],E);const N=new be(A%3===0?"#cdb7ff":A%3===1?"#f5c9ef":"#ffe2f8");v[E]=N.r,v[E+1]=N.g,v[E+2]=N.b}const _=new Dl(new Cn().setAttribute("position",new Mn(g,3)).setAttribute("color",new Mn(v,3)),new Yu({size:.62,sizeAttenuation:!0,vertexColors:!0,map:$p(),transparent:!0,alphaTest:.01,opacity:.28,depthWrite:!1,blending:Na}));return _.name="cubic-galaxy-starfield",r.add(_),r.add(p),{points:u,distantStars:p,cubicStars:_}}let _l=null;function $p(){if(_l)return _l;const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d");if(t){const n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.48,"rgba(255,255,255,0.96)"),n.addColorStop(.78,"rgba(255,255,255,0.42)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64)}return _l=new ry(r),_l.needsUpdate=!0,_l}function eo(r,t,n,a,o,c=!1,u=Na,p=!1,m=2,d=1){const g=new Cn;if(g.setAttribute("position",new Mn(r,3)),g.setAttribute("color",new Mn(t,3)),c){const _=new Float32Array(r.length/3*4);for(let x=0;x<r.length/3;x+=1){const E=x*4;_[E]=Math.abs(Math.sin(x*12.9898))*Math.PI,_[E+1]=Math.abs(Math.sin(x*78.233+.4))*Math.PI*2,_[E+2]=(.1+Math.abs(Math.sin(x*39.17+1.7))*.9)*Math.PI,_[E+3]=.9+Math.abs(Math.sin(x*5.37+2.2))*1.8}g.setAttribute("sphereShift",new Mn(_,4))}const v=new Dl(g,new Yu({size:n,sizeAttenuation:!0,vertexColors:!0,map:$p(),transparent:!0,alphaTest:.01,opacity:a,depthTest:!o.startsWith("planet-"),depthWrite:p,blending:u}));if(c){const _=v.material;_.onBeforeCompile=x=>{x.uniforms.innerSphereTime={value:0},x.uniforms.innerSphereParticleSpeed={value:m},x.uniforms.innerSphereParticleAmplitude={value:d},x.vertexShader=x.vertexShader.replace("#include <common>",`attribute vec4 sphereShift;
uniform float innerSphereTime;
uniform float innerSphereParticleSpeed;
uniform float innerSphereParticleAmplitude;
#include <common>`).replace("#include <begin_vertex>",`vec3 transformed = position;
float sphereT = innerSphereTime * innerSphereParticleSpeed;
float moveT = mod(sphereShift.x + sphereShift.z * sphereT, 6.28318530718);
float moveS = mod(sphereShift.y + sphereShift.z * sphereT, 6.28318530718);
transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * sphereShift.w * innerSphereParticleAmplitude;`),v.userData.innerSphereShader=x},_.needsUpdate=!0}return v.name=o,v.userData.baseOpacity=a,v.userData.baseSize=n,v}function n3(r,t){const n=new wi;n.name="reference-hollow-purple-planet";const a=3e4,o=new Float32Array(a*3),c=new Float32Array(a*3);for(let O=0;O<a;O+=1){const D=92+Math.pow(t(),.62)*16,I=t()*Math.PI*2,T=Math.acos(2*t()-1),U=O*3;o[U]=D*Math.sin(T)*Math.cos(I),o[U+1]=D*Math.cos(T),o[U+2]=D*Math.sin(T)*Math.sin(I);const V=Jp(.82+t()*.18);c[U]=V.r,c[U+1]=V.g,c[U+2]=V.b}const u=new wi;u.name="reference-sphere-shell-group",u.rotation.z=.2,u.add(eo(o,c,1.46,.78,"planet-purple-shell",!0,Na,!1,.16,1.35));const p=6500,m=new Float32Array(p*3),d=new Float32Array(p*3);for(let O=0;O<p;O+=1){const D=102+Math.cbrt(t())*12,I=t()*Math.PI*2,T=Math.acos(2*t()-1),U=O*3;m[U]=D*Math.sin(T)*Math.cos(I),m[U+1]=D*Math.cos(T),m[U+2]=D*Math.sin(T)*Math.sin(I);const H=O%4===0?{r:1,g:1,b:1}:Jp(1.02+t()*.08);d[U]=H.r,d[U+1]=H.g,d[U+2]=H.b}u.add(eo(m,d,1.52,.78,"planet-white-pink-boundary-fireflies",!0,Na,!1,.24,2)),u.add(eo(m,d,2.7,.12,"planet-white-pink-boundary-glow",!0,Na,!1,.24,2)),n.add(u),n.userData.shellGroup=u;const g=new wi;g.name="planet-equatorial-orbits";const v=new wi;v.name="compact-inner-orbit";const _=GC,x=new Float32Array(_*3),E=new Float32Array(_*3);for(let O=0;O<_;O+=1){const D=Math.sqrt(t())*Uy,I=t()*Math.PI*2,T=O*3;x[T]=Math.cos(I)*D,x[T+1]=(t()-.5)*1.8,x[T+2]=Math.sin(I)*D;const U=jp(kC);E[T]=U.r,E[T+1]=U.g,E[T+2]=U.b}v.add(eo(x,E,HC,VC,"thin-sphere-outline-radius",!1,tr,!1)),v.rotation.z=0,n.add(v),n.userData.compactOrbit=v;const A=6e4,M=new Float32Array(A*3),y=new Float32Array(A*3);for(let O=0;O<A;O+=1){const D=Math.pow(t(),1.5),I=Math.sqrt(Dx*Dx*D+(1-D)*Rx*Rx),T=t()*Math.PI*2,U=O*3;M[U]=Math.cos(T)*I,M[U+1]=(t()-.5)*2,M[U+2]=Math.sin(T)*I;const V=jp(1.08);y[U]=V.r,y[U+1]=V.g,y[U+2]=V.b}g.add(eo(M,y,Ly,.76,"bright-pink-transition-radius"));const z=ZC,N=new Float32Array(z*3),w=new Float32Array(z*3);for(let O=0;O<z;O+=1){const D=350+t()*(Zp-350),I=t()*Math.PI*2,T=O*3;N[T]=Math.cos(I)*D,N[T+1]=(t()-.5)*4,N[T+2]=Math.sin(I)*D;const U=gi.clamp((D-350)/(Zp-350),0,1),V=Ny+(1-U)*JC,H=jC(WC+t()*YC,V);w[T]=H.r,w[T+1]=H.g,w[T+2]=H.b}return g.add(eo(N,w,XC,qC,"light-open-outer-radius")),g.rotation.z=0,n.add(g),n.userData.orbitalBands=g,r.add(n),n}const i3=async r=>{const t=new cT,a=(await Promise.all(r.map(async o=>{try{return await t.loadAsync(o)}catch{return null}}))).filter(o=>o!==null);return a.forEach(o=>{o.colorSpace=Wn,o.needsUpdate=!0}),a};function a3(r,t,n,a){const o=new wi;o.name="reference-landscape-photo-ring";const c=[],u=[];for(let p=0;p<Ku;p+=1){const m=t[p%t.length];if(!m)continue;const d=6+n()*.9,g=d,v=d*1.2,_=12,x=Math.ceil(Ku/_),E=p%_,A=Math.floor(p/_),M=(Zd-gl)/(_-1);let y=0,z=gl,N=0,w=new k;for(let U=0;U<96;U+=1){const V=(E+U*5)%_,J=(A+Math.floor(U/_))%x/x*Math.PI*2+V*.125+(n()-.5)*.014,ft=gi.clamp(gl+V*M+(n()-.5)*2.5,gl,Zd),gt=(V%3-1)*OC*.52+(n()-.5)*1.5,Z=new k(Math.cos(J)*ft,gt,Math.sin(J)*ft);if(!u.some(({position:F,clearance:tt})=>Z.distanceToSquared(F)<(v+tt)**2)||U===95){y=J,z=ft,N=gt,w=Z;break}}const O=new ty({map:m,transparent:!0,opacity:.9+n()*.1,depthTest:!1,depthWrite:!1,color:16777215});O.rotation=(n()-.5)*.13;const D=new ny(O);D.position.copy(w),D.scale.set(d,g,1),D.renderOrder=8,o.add(D),u.push({position:w.clone(),clearance:v});const I=y+(n()-.5)*.012,T=gi.clamp(z+(n()-.5)*1.5,gl,Zd);c.push({sprite:D,base:D.position.clone(),target:new k(Math.cos(I)*T,N+(n()-.5)*.8,Math.sin(I)*T),originalScale:D.scale.clone(),delay:Math.floor(p/32),phase:n()*Math.PI*2,drift:.4+n()*.9,baseOpacity:O.opacity,detailUrl:a[p%a.length]??""})}return r.add(o),{ring:o,sprites:c}}function s3(r,t){const n=new wi;n.name="surrounding-soft-aurora-halo",n.rotation.x=.2;const a=[],o=Qp,c=[16762613,14268415,16770299];for(let u=0;u<6;u+=1){const p=new Float32Array(o*3),m=new Cn;m.setAttribute("position",new Mn(p,3));const d=new ay({color:c[u%c.length],transparent:!0,opacity:.08+u*.02,depthWrite:!1,blending:Na}),g=new mb(m,d);g.frustumCulled=!1;const v=610+u*14,_=200+u*12,x=(u-2.5)*30;g.rotation.set((u-2.5)*.12,u*.52,(u%2===0?1:-1)*.12),g.position.y=x,n.add(g),a.push({line:g,phase:t()*Math.PI*2,speed:.08+t()*.05,amplitude:16+t()*10,radiusX:v,radiusY:_,verticalOffset:x})}return r.add(n),a}function r3(r){const t=new wi;t.name="reference-back-facing-title",t.renderOrder=8,r.add(t);const n=document.createElement("canvas");n.width=1500,n.height=220;const a=n.getContext("2d");if(a){a.font='600 70px "Brush Script MT", "Segoe Script", cursive',a.textAlign="center",a.textBaseline="middle",a.shadowColor="rgba(255,255,255,0.46)",a.shadowBlur=16,a.fillStyle="rgba(255,255,255,0.96)",a.fillText("Happy Monthsarry Mylove",750,110);const o=new ry(n);o.colorSpace=Wn;const c=new Di(new Bl(300,44),new ju({map:o,transparent:!0,depthTest:!1,depthWrite:!1,side:Qi}));c.position.set(0,330,0),t.add(c)}return new AC().load(LC,o=>{const c=new xm("Happy Monthsarry Mylove",{font:o,size:28,depth:2,curveSegments:12,bevelEnabled:!0,bevelThickness:.5,bevelSize:.2,bevelSegments:5});c.computeBoundingBox();const u=c.boundingBox?c.boundingBox.max.x-c.boundingBox.min.x:0,p=new Di(c,new eT({color:16777215,emissive:16777215,emissiveIntensity:.55,metalness:.3,roughness:.2,transparent:!0,depthTest:!1,depthWrite:!1}));p.position.set(-u/2,330,0),t.children.forEach(m=>{const d=m;d.geometry?.dispose();const g=d.material;g?.map?.dispose(),g?.dispose(),t.remove(m)}),t.add(p)}),t}function Nx(r,t){const n=Math.min(Math.max(r-no,0),qp),a=1,o=new k(0,60,200).multiplyScalar(a),c=new k(0,10,138).multiplyScalar(a),u=new k(0,0,Kp).multiplyScalar(a),p=new k(-200,360,-700).normalize().multiplyScalar(Ux).multiplyScalar(a);let m;if(n<=Da)m=Lx(o,c,t3(n/Da));else if(n<=Da+io){const _=(n-Da)/io,x=Iu(Math.min(Math.max(_,0),1));m=Lx(c,u,x)}else{const _=(n-Da-io)/NC,x=Iu(Math.min(Math.max(_,0),1)),E=u.clone().normalize(),A=p.clone().normalize(),M=E.angleTo(A),y=Math.sin(M),z=y<1e-4?E:E.multiplyScalar(Math.sin((1-x)*M)/y).add(A.multiplyScalar(Math.sin(x*M)/y)),N=gi.lerp(Kp,Ux,x);m=z.normalize().multiplyScalar(N)}const d=gi.clamp((n-Da)/io,0,1),g=.85*(1-Iu(d)),v=t<1?1+(1-t)*g:1;return m.multiplyScalar(v),{position:m,target:new k(0,0,0),textY:Math.PI}}function o3({runState:r,initialTime:t=0,isPlaying:n=!0}){const a=ei.useRef(null),o=ei.useRef(r),c=ei.useRef(n);return o.current=r,c.current=n,ei.useEffect(()=>{const u=a.current;if(!u)return;const p=$C(314159),m=new ib;m.background=new be(0);const d=new Ai(75,1,.1,5e3),g=new fC({antialias:!1,powerPreference:"high-performance"});g.setPixelRatio(Math.min(window.devicePixelRatio,1.2)),g.outputColorSpace=Wn,g.toneMapping=nm,g.toneMappingExposure=.78,g.setClearColor(0,1),g.domElement.className="galaxy-canvas",g.domElement.setAttribute("aria-label","Interactive memory galaxy"),u.appendChild(g.domElement);const v=new dC(d,g.domElement);v.enableDamping=!0,v.dampingFactor=.14,v.rotateSpeed=.3,v.zoomSpeed=.6,v.enablePan=!0,v.screenSpacePanning=!0,v.enableRotate=!0,v.touches.ONE=vs.ROTATE,v.touches.TWO=vs.DOLLY_PAN,v.minDistance=.01,v.maxDistance=1/0,v.target.set(0,0,0);const{points:_,distantStars:x,cubicStars:E}=e3(m,p),A=n3(m,p),M=[];A.traverse(Ct=>{Ct instanceof Dl&&M.push(Ct)});const y=A.userData.orbitalBands;y&&(y.rotation.y=t*60*.001);const z=A.userData.compactOrbit;z&&(z.rotation.y=t*60*wx),A.rotation.order="ZYX",A.rotation.z=0;const N=s3(m,p),w=r3(m);let O=null,D=!1,I=0,T=performance.now()-t*1e3,U=r,V=performance.now()-t*1e3,H=null,J=null,ft=null;const gt=new hT,Z=new Dt,B=Ct=>{if(!O)return null;const wt=g.domElement.getBoundingClientRect();Z.x=(Ct.clientX-wt.left)/wt.width*2-1,Z.y=-((Ct.clientY-wt.top)/wt.height)*2+1,gt.setFromCamera(Z,d);const fe=gt.intersectObjects(O.ring.children,!1)[0]?.object;return fe instanceof ny?fe:null},F=()=>{ft?.remove(),ft=null};let tt=-1;const pt=Ct=>{const wt=O?.sprites??[];if(!wt.length)return;tt=(Ct+wt.length)%wt.length;const fe=wt[tt];if(!fe?.detailUrl)return;F(),ft=document.createElement("div"),ft.setAttribute("role","dialog"),ft.setAttribute("aria-modal","true"),ft.setAttribute("aria-label","Picture detail"),Object.assign(ft.style,{position:"fixed",inset:"0",zIndex:"30",display:"grid",placeItems:"center",padding:"clamp(16px, 5vw, 56px)",background:"rgba(0,0,0,0.84)",backdropFilter:"blur(10px)"});const ne=document.createElement("div");Object.assign(ne.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",maxWidth:"92vw"});const lt=document.createElement("img");lt.src=fe.detailUrl,lt.alt=`Memory picture ${tt+1}`,Object.assign(lt.style,{maxWidth:"min(92vw, 920px)",maxHeight:"78vh",objectFit:"contain",borderRadius:"14px",boxShadow:"0 24px 90px rgba(0,0,0,0.6)"});const _t=document.createElement("p");_t.textContent=`${Zu[tt%Zu.length]} · Memory ${tt+1} of ${wt.length}`,Object.assign(_t.style,{margin:"0",color:"rgba(255,255,255,0.9)",font:"500 clamp(13px, 1.8vw, 17px)/1.4 system-ui",letterSpacing:"0.02em",textAlign:"center"}),ne.append(lt,_t);const yt={position:"absolute",padding:"10px 16px",borderRadius:"999px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(20,12,28,0.88)",color:"white",font:"600 14px system-ui",cursor:"pointer"},Lt=document.createElement("button");Lt.type="button",Lt.textContent="Close",Lt.setAttribute("aria-label","Close picture detail"),Object.assign(Lt.style,{...yt,top:"max(16px, env(safe-area-inset-top))",right:"max(16px, env(safe-area-inset-right))"}),Lt.addEventListener("click",F);const Ot=document.createElement("button");Ot.type="button",Ot.textContent="‹",Ot.setAttribute("aria-label","Previous picture"),Object.assign(Ot.style,{...yt,left:"max(16px, env(safe-area-inset-left))",top:"50%",transform:"translateY(-50%)",fontSize:"30px",lineHeight:"1"}),Ot.addEventListener("click",()=>pt(tt-1));const qt=document.createElement("button");qt.type="button",qt.textContent="›",qt.setAttribute("aria-label","Next picture"),Object.assign(qt.style,{...yt,right:"max(16px, env(safe-area-inset-right))",top:"50%",transform:"translateY(-50%)",fontSize:"30px",lineHeight:"1"}),qt.addEventListener("click",()=>pt(tt+1)),ft.addEventListener("click",Qt=>{Qt.target===ft&&F()}),ft.append(ne,Lt,Ot,qt),u.appendChild(ft),Lt.focus()},Tt=Ct=>{const wt=O?.sprites.findIndex(fe=>fe.sprite===Ct)??-1;wt>=0&&pt(wt)},P=Ct=>{const wt=B(Ct);J=wt,g.domElement.style.cursor=wt?"pointer":"grab"},Q=()=>{J=null,g.domElement.style.cursor="grab"},Mt=Ct=>{const wt=B(Ct);wt&&Tt(wt)},Ut=Ct=>{Ct.key==="Escape"?F():ft&&Ct.key==="ArrowLeft"?pt(tt-1):ft&&Ct.key==="ArrowRight"&&pt(tt+1)};g.domElement.addEventListener("pointermove",P),g.domElement.addEventListener("pointerleave",Q),g.domElement.addEventListener("click",Mt),window.addEventListener("keydown",Ut);const Vt=Nx(t,window.innerWidth/window.innerHeight);d.position.copy(t>=no?Vt.position:new k(0,120,400)),d.lookAt(Vt.target);const nt=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight,!1)};g.domElement.style.touchAction="none",window.addEventListener("resize",nt),nt();const xt=Array.from({length:Ku},(Ct,wt)=>wu[wt%wu.length]);for(let Ct=xt.length-1;Ct>0;Ct-=1){const wt=Math.floor(p()*(Ct+1));[xt[Ct],xt[wt]]=[xt[wt],xt[Ct]]}(async()=>{const Ct=await i3(xt);if(D)return;O=a3(m,Ct,p,xt),O.ring.rotation.y=t*60*Cx;const wt=new Map;Ct.forEach(lt=>{const _t=xt.find(yt=>yt===lt.image?.currentSrc||yt===lt.image?.src||lt.image?.src.endsWith(new URL(yt,window.location.origin).pathname.split("/").at(-1)??""));_t&&wt.set(_t,lt)});const fe=lt=>{O&&O.sprites.forEach((_t,yt)=>{const Lt=lt[yt%lt.length];_t.detailUrl=Lt;const Ot=_t.sprite.material,qt=wt.get(Lt)??Ct.find(Qt=>Qt.image?.src?.includes(Lt.split("/").at(-1)??""));qt&&(Ot.map=qt),Ot.opacity=Math.max(_t.baseOpacity,.9),Ot.needsUpdate=!0})},ne=()=>{if(!O)return;const lt=Array.from({length:Ku},(_t,yt)=>wu[yt%wu.length]);for(let _t=lt.length-1;_t>0;_t-=1){const yt=Math.floor(p()*(_t+1));[lt[_t],lt[yt]]=[lt[yt],lt[_t]]}fe(lt)};window.addEventListener("shuffle-photo-tiles",ne)})();const Gt=Ct=>{if(D)return;I=window.requestAnimationFrame(Gt);const wt=o.current,fe=c.current;if(!fe&&H===null&&(H=Ct),fe&&H!==null){const K=Ct-H;T+=K,V+=K,H=null}wt!==U&&(U=wt,T=Ct,V=Ct);const ne=wt==="launch"?fe?(Ct-T)/1e3:((H??Ct)-T)/1e3:0,lt=fe?Ct/1e3:(H??Ct)/1e3,_t=Nx(ne,d.aspect),yt=d.position.distanceTo(_t.target),Lt=gi.clamp((yt-360)/780,0,1),Ot=wt==="launch"&&ne<no,qt=Math.max(0,ne-no),Qt=gi.clamp(1-Math.abs(qt-(Da+io))/1.5,0,1),ce=1-Iu(Qt)*.34,pe=wt==="launch"&&qt<=qp&&!Ot,X=wt==="launch"&&ne>=no;Ot?v.enabled=!1:pe?(v.enabled=!1,d.position.copy(_t.position),d.lookAt(_t.target)):(v.enabled=!0,v.update());const me=wt==="launch"?ne:lt;A.rotation.y=0,A.rotation.x=0;const ge=A.userData.shellGroup;ge&&(ge.rotation.y=me*IC,ge.rotation.x=Math.sin(lt*.22)*.035,ge.rotation.z=.2+Math.cos(lt*.16)*.018);const L=A.userData.orbitalBands;L&&(L.rotation.y+=PC,L.rotation.x=0);const b=A.userData.compactOrbit;if(b&&(b.rotation.y+=wx,b.rotation.x=0),M.forEach(K=>{if(K instanceof Dl){const Rt=K.material,Nt=K.userData.innerSphereShader;Nt?.uniforms?.innerSphereTime&&(Nt.uniforms.innerSphereTime.value=me);const ht=Number(K.userData.baseOpacity??.5),et=Number(K.userData.baseSize??Rt.size),Pt=K.name==="thin-sphere-outline-radius",Ft=K.name.includes("bright-"),zt=K.name==="light-open-outer-radius",Bt=Pt?1-Lt*.12:Ft?1+Lt*.7:zt?1+Lt*.42:1,ie=.92+(Math.sin(lt*.65+K.id*.17)+1)*.045,$t=Ft||zt?ce:1;Rt.opacity=ht*Bt*ie*$t,Rt.size=et*(1+Lt*(Ft?.1:zt?.12:.04))*$t}}),_.rotation.y=lt*.0025,x.rotation.y=-lt*.004,E.rotation.y=lt*.0014,E.rotation.x=Math.sin(lt*8e-4)*.06,x.children.forEach((K,Rt)=>{const Nt=K.material;Nt.opacity=.42+(Math.sin(lt*(.55+Rt*.013))+1)*.12}),O)if(O.ring.rotation.y+=Cx,!X)O.sprites.forEach(K=>{K.sprite.position.copy(K.base),K.sprite.position.y+=Math.sin(lt*(.42+K.drift*.22)+K.phase)*1.35,K.sprite.scale.copy(K.originalScale),K.sprite.rotation.z=Math.sin(lt*.18+K.phase)*.018;const Rt=K.sprite.material;Rt.opacity=K.baseOpacity*(.9+(Math.sin(lt*.72+K.phase)+1)*.05)});else{const K=Ct-V-no*1e3,Rt=gi.smoothstep(qt/Da,0,1),Nt=gi.lerp(.68,1,Rt),ht=gi.lerp(1,.82,gi.smoothstep(qt,Da+io,qp));O.sprites.forEach(et=>{const Pt=Math.max(0,Math.min(1,(K-et.delay*1e3)/KC)),Ft=1-Math.pow(1-Pt,2),zt=Math.sin(Ct*2e-5+et.phase)*1.35,Bt=Math.sin(Ct*15e-5+et.phase)*.65,ie=Math.cos(Ct*15e-5+et.phase)*.65,$t=Ft*.72,he=Nt*(1+(QC-1)*$t);et.sprite.position.lerpVectors(et.base,et.target,$t),et.sprite.position.x+=Bt*$t,et.sprite.position.y+=zt*$t,et.sprite.position.z+=ie*$t,et.sprite.scale.copy(et.originalScale).multiplyScalar(he),et.sprite.material.opacity=et.baseOpacity*(.9+(Math.sin(lt*.72+et.phase)+1)*.05)*ht,et.sprite.rotation.x=Math.sin(Ct*.001*et.drift+et.phase)*.028,et.sprite.rotation.y=Math.cos(Ct*.001*et.drift+et.phase)*.028,et.sprite.rotation.z=Math.sin(Ct*8e-4*et.drift+et.phase)*.022})}if(J){J.scale.multiplyScalar(1.16);const K=J.material;K.opacity=Math.min(1,K.opacity+.16)}w.rotation.y=_t.textY+Math.sin(lt*.25)*.018;const j=gi.clamp(d.position.distanceTo(_t.target)/320,.45,1),st=d.aspect<1?qt<2?.58:.85:1;w.scale.setScalar(Math.min(j,st)),w.position.y=Math.sin(lt*.18)*3,N.forEach((K,Rt)=>{const Nt=K.line.geometry.getAttribute("position");for(let et=0;et<Qp;et+=1){const Ft=et/Qp*Math.PI*2,zt=Math.sin(Ft*(1.1+Rt*.08)+lt*K.speed+K.phase),Bt=Math.sin(Ft*2.6-lt*K.speed*.8+K.phase)*.22,ie=K.radiusX+(zt+Bt)*K.amplitude,$t=K.radiusY+(zt*.8+Bt*.4)*K.amplitude*.6,he=Math.cos(Ft)*ie,Y=Math.sin(Ft)*$t,It=Math.sin(Ft*2+K.phase)*K.amplitude*.3;Nt.setXYZ(et,he,Y,It)}Nt.needsUpdate=!0;const ht=K.line.material;ht.opacity=.12+(Math.sin(lt*.18+K.phase)+1)*.03,K.line.position.y=K.verticalOffset+Math.sin(lt*.22+K.phase)*12}),g.render(m,d)};return I=window.requestAnimationFrame(Gt),()=>{D=!0,window.cancelAnimationFrame(I),window.removeEventListener("resize",nt),g.domElement.removeEventListener("pointermove",P),g.domElement.removeEventListener("pointerleave",Q),g.domElement.removeEventListener("click",Mt),window.removeEventListener("keydown",Ut),window.removeEventListener("shuffle-photo-tiles",shufflePhotoTiles),F(),g.dispose(),g.dispose(),u.removeChild(g.domElement),m.traverse(Ct=>{const wt=Ct;wt.geometry?.dispose(),wt.material&&(Array.isArray(wt.material)?wt.material:[wt.material]).forEach(ne=>{ne.map?.dispose(),ne.dispose()})})}},[]),Rn.jsx("div",{"data-loc":"client\\src\\components\\GalaxyScene.tsx:1061",ref:a,className:"galaxy-stage","aria-hidden":"true"})}const Qd=`I’m sorry this is all I could offer for now. I know I’m not like the others who could buy you something special, but I made this with my heart just for you. I wanted to give you something true, personal, and meaningful because you deserve more than anything material.

If I ever get rich, I will give you everything you’ve ever wanted and more. I will do my best to make sure you feel loved, cared for, and treasured every single day. For now, this is all I can offer, but please know it comes from my heart and I made it special for you.

You mean so much to me, and I hope you can feel how much love and effort I put into this. Thank you for being in my life and for making every day brighter. I love you, and I hope this little surprise reminds you that my heart is always with you.`;function l3(){const r=typeof window<"u"&&new URLSearchParams(window.location.search).get("scene")==="1",t=typeof window<"u"?Number(new URLSearchParams(window.location.search).get("sceneTime")??0):0,[n,a]=ei.useState("idle"),[o,c]=ei.useState(!1),[u,p]=ei.useState(""),[m,d]=ei.useState(!1),[g,v]=ei.useState(!1),_=ei.useRef(null);return ei.useEffect(()=>{const x=window.setTimeout(()=>{a("launch")},1e4);return()=>window.clearTimeout(x)},[]),ei.useEffect(()=>{const x=_.current;x&&(x.volume=.7,n==="launch"&&x.play().catch(()=>{}))},[n]),ei.useEffect(()=>{if(n!=="launch"){v(!1);return}const x=window.setTimeout(()=>{v(!0)},17e3);return()=>window.clearTimeout(x)},[n]),ei.useEffect(()=>{if(!o||n!=="launch")return;if(m){p(Qd);return}let x=0;const E=window.setInterval(()=>{x+=1,p(Qd.slice(0,x)),x>=Qd.length&&(window.clearInterval(E),d(!0))},35);return()=>window.clearInterval(E)},[o,n,m]),Rn.jsxs("main",{"data-loc":"client\\src\\pages\\Home.tsx:76",className:"for-my-world","data-scene-state":n,children:[Rn.jsx("style",{"data-loc":"client\\src\\pages\\Home.tsx:77",children:`
        @keyframes noteBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}),Rn.jsx(o3,{"data-loc":"client\\src\\pages\\Home.tsx:83",runState:n,initialTime:r?t:0}),Rn.jsx("audio",{"data-loc":"client\\src\\pages\\Home.tsx:84",ref:_,src:UC,autoPlay:!0,loop:!0,preload:"auto","aria-hidden":"true"}),Rn.jsxs("div",{"data-loc":"client\\src\\pages\\Home.tsx:86",style:{position:"fixed",inset:0,zIndex:40,pointerEvents:"none"},children:[n==="launch"&&g&&!o&&Rn.jsx("button",{"data-loc":"client\\src\\pages\\Home.tsx:95",type:"button",onClick:()=>{c(!0),m||p("")},style:{position:"absolute",right:"max(12px, env(safe-area-inset-right))",bottom:"max(14px, env(safe-area-inset-bottom))",zIndex:55,border:"1px solid rgba(255, 181, 214, 0.38)",background:"rgba(22, 12, 19, 0.72)",color:"#fff1f8",borderRadius:"999px",padding:"10px 16px",cursor:"pointer",fontFamily:'"Segoe Script", "Lucida Handwriting", cursive',fontSize:"clamp(12px, 3.2vw, 18px)",boxShadow:"0 14px 38px rgba(195, 98, 151, 0.22)",backdropFilter:"blur(12px)",pointerEvents:"auto",maxWidth:"calc(100vw - 24px)"},children:"Read my note"}),o&&Rn.jsx("div",{"data-loc":"client\\src\\pages\\Home.tsx:127",style:{position:"fixed",inset:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"rgba(13, 7, 11, 0.54)",backdropFilter:"blur(8px)"},children:Rn.jsxs("div",{"data-loc":"client\\src\\pages\\Home.tsx:140",style:{width:"min(720px, 92vw)",maxHeight:"78vh",padding:"18px 16px 14px",borderRadius:"24px",background:"linear-gradient(135deg, rgba(255, 240, 246, 0.22), rgba(255, 214, 228, 0.09))",border:"1px solid rgba(255, 181, 214, 0.38)",boxShadow:"0 25px 70px rgba(195, 98, 151, 0.2)",color:"#fff1f8",fontFamily:'"Segoe Script", "Lucida Handwriting", cursive',lineHeight:1.6,textShadow:"0 0 18px rgba(255, 170, 206, 0.6)",pointerEvents:"auto"},children:[Rn.jsxs("div",{"data-loc":"client\\src\\pages\\Home.tsx:156",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",marginBottom:"10px"},children:[Rn.jsx("div",{"data-loc":"client\\src\\pages\\Home.tsx:165",style:{fontSize:"clamp(18px, 4vw, 30px)",fontWeight:700,textAlign:"center",flex:1},children:"Happy 2nd Monthsarry"}),Rn.jsx("button",{"data-loc":"client\\src\\pages\\Home.tsx:176",type:"button",onClick:()=>c(!1),"aria-label":"Close note",style:{border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.05)",color:"#fff1f8",borderRadius:"999px",width:"34px",height:"34px",display:"grid",placeItems:"center",cursor:"pointer",fontSize:"18px"},children:"×"})]}),Rn.jsx("div",{"data-loc":"client\\src\\pages\\Home.tsx:197",style:{maxHeight:"56vh",overflowY:"auto",paddingRight:"8px",whiteSpace:"pre-line",textAlign:"center",fontSize:"clamp(16px, 3.6vw, 28px)",scrollbarWidth:"thin",scrollbarColor:"rgba(255,180,214,0.7) transparent"},children:Rn.jsxs("div",{"data-loc":"client\\src\\pages\\Home.tsx:209","aria-live":"polite",style:{minHeight:"120px"},children:[u,!m&&!u&&Rn.jsx("span",{"data-loc":"client\\src\\pages\\Home.tsx:211",style:{opacity:.5},children:"Click again to start typing…"}),!m&&u&&Rn.jsx("span",{"data-loc":"client\\src\\pages\\Home.tsx:212",style:{display:"inline-block",width:"0.34em",animation:"noteBlink 0.8s infinite"},children:"|"})]})})]})})]})]})}function c3(){return Rn.jsx(l3,{"data-loc":"client\\src\\App.tsx:4"})}WM.createRoot(document.getElementById("root")).render(Rn.jsx(c3,{"data-loc":"client\\src\\main.tsx:16"}));
