// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,b,"e-0$1"),e.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,h,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+O(n):O(n)+e}var _=String.fromCharCode,E=isNaN,P=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,i,a,u,l,s,p;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function F(e){var r,t,n;if(!V(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,$=Object.prototype,C=$.toString,B=$.__defineGetter__,L=$.__defineSetter__,R=$.__lookupGetter__,W=$.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var G=N;function X(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&U.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",J=Y()?function(e){var r,t,n;if(null==e)return D.call(e);t=e[q],r=H(e,q);try{e[q]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[q]=t:delete e[q],n}:function(e){return D.call(e)},K=Number,Q=K.prototype.toString,ee=Y();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function te(e){return Z(e)||re(e)}X(te,"isPrimitive",Z),X(te,"isObject",re);var ne=Number.POSITIVE_INFINITY,ie=K.NEGATIVE_INFINITY,oe=Math.floor;function ae(e){return oe(e)===e}function ue(e){return e<ne&&e>ie&&ae(e)}function ce(e){return Z(e)&&ue(e)}function fe(e){return re(e)&&ue(e.valueOf())}function le(e){return ce(e)||fe(e)}function se(e){return ce(e)&&e>0}function pe(e){return fe(e)&&e.valueOf()>0}function ge(e){return se(e)||pe(e)}X(le,"isPrimitive",ce),X(le,"isObject",fe),X(ge,"isPrimitive",se),X(ge,"isObject",pe);var ye,be=void 0!==Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptor;ye=be?function(e,r){var t;return null==e||void 0===(t=de(e,r))?null:t}:function(e,r){return H(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};var he=ye;function ve(e,r){var t=he(e,r);return null!==t&&(!0===t.writable||"function"==typeof t.set)}var we=void 0!==Object.getOwnPropertyNames,me=Object,je=me.getOwnPropertyNames;function Oe(e){return Object.keys(Object(e))}var Se,_e=void 0!==Object.keys;function Ee(e){return"[object Arguments]"===J(e)}Se=function(){return Ee(arguments)}();var Pe=Se;function Te(e){return"string"==typeof e}var ke=String.prototype.valueOf,xe=Y();function Ie(e){return"object"==typeof e&&(e instanceof String||(xe?function(e){try{return ke.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function Ae(e){return Te(e)||Ie(e)}function Ve(e){return e!=e}function Fe(e){return Z(e)&&Ve(e)}function Ne(e){return re(e)&&Ve(e.valueOf())}function $e(e){return Fe(e)||Ne(e)}X(Ae,"isPrimitive",Te),X(Ae,"isObject",Ie),X($e,"isPrimitive",Fe),X($e,"isObject",Ne);var Ce,Be=Object.prototype.propertyIsEnumerable,Le=!Be.call("beep","0");function Re(e,r){var t;return null!=e&&(!(t=Be.call(e,r))&&Le&&Ae(e)?!Fe(r=+r)&&ce(r)&&r>=0&&r<e.length:t)}Ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var We,Ge=Ce;We=Pe?Ee:function(e){return null!==e&&"object"==typeof e&&!Ge(e)&&"number"==typeof e.length&&ae(e.length)&&e.length>=0&&e.length<=4294967295&&H(e,"callee")&&!Re(e,"callee")};var Xe=We,Ze=Array.prototype.slice;function Me(e){return null!==e&&"object"==typeof e}var Ye=function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Me);X(Me,"isObjectLikeArray",Ye);var De=Re((function(){}),"prototype"),Ue=!Re({toString:null},"toString");function He(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ae(e.length)&&e.length>=0&&e.length<=9007199254740991}function ze(e,r,t){var n,i;if(!He(e)&&!Te(e))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ce(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if($e(r)){for(;i<n;i++)if($e(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var qe=/./;function Je(e){return"boolean"==typeof e}var Ke=Boolean,Qe=Boolean.prototype.toString,er=Y();function rr(e){return"object"==typeof e&&(e instanceof Ke||(er?function(e){try{return Qe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function tr(e){return Je(e)||rr(e)}function nr(){return new Function("return this;")()}X(tr,"isPrimitive",Je),X(tr,"isObject",rr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(e){if(arguments.length){if(!Je(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return nr()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function pr(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=sr.exec(n.toString()))return r[1]}return Me(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(lr,"REGEXP",sr);var gr="function"==typeof qe||"object"==typeof fr||"function"==typeof cr?function(e){return pr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?pr(e).toLowerCase():r};function yr(e){return e.constructor&&e.constructor.prototype===e}var br,dr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],hr="undefined"==typeof window?void 0:window,vr=function(){var e;if("undefined"===gr(hr))return!1;for(e in hr)try{-1===ze(dr,e)&&H(hr,e)&&null!==hr[e]&&"object"===gr(hr[e])&&yr(hr[e])}catch(e){return!0}return!1}(),wr="undefined"!=typeof window,mr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];br=_e?function(){return 2!==(Oe(arguments)||"").length}(1,2)?function(e){return Xe(e)?Oe(Ze.call(e)):Oe(e)}:Oe:function(e){var r,t,n,i,o,a,u;if(i=[],Xe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!H(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Me(e))return i;t=De&&n}for(o in e)t&&"prototype"===o||!H(e,o)||i.push(String(o));if(Ue)for(r=function(e){if(!1===wr&&!vr)return yr(e);try{return yr(e)}catch(e){return!1}}(e),u=0;u<mr.length;u++)a=mr[u],r&&"constructor"===a||!H(e,a)||i.push(String(a));return i};var jr,Or=br;jr=we?function(e){return je(me(e))}:function(e){return Or(me(e))};var Sr,_r=jr,Er=void 0!==Object.getOwnPropertySymbols,Pr=me.getOwnPropertySymbols;Sr=Er?function(e){return Pr(me(e))}:function(){return[]};var Tr,kr,xr=Sr,Ir=Object.getPrototypeOf;kr=Object.getPrototypeOf,Tr="function"===gr(kr)?Ir:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ar=Tr;function Vr(e){return null==e?null:(e=me(e),Ar(e))}return function(r,t){var n,i,o,a,u,c,f,l;if(arguments.length>1){if(!se(t))throw new TypeError(F("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));u=t}else u=e;if(null==r)return[];for(o=Vr(r),n=[],i={},c=1;o&&c<=u;){for(a=_r(o),l=0;l<a.length;l++)!1===H(i,f=a[l])&&ve(o,f)&&n.push(f),i[f]=!0;for(a=xr(o),l=0;l<a.length;l++)!1===H(i,f=a[l])&&ve(o,f)&&n.push(f),i[f]=!0;o=Vr(o),c+=1}return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).inheritedWritableProperties=r();
//# sourceMappingURL=browser.js.map
