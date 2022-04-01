// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var l=function(r,e,t){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,p="set"in t,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},s=n,p=l,v=t()?s:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=g;var d=function(r){return"number"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var j=function(r){return w.call(r)},O=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&O.call(r,e)},E="function"==typeof Symbol?Symbol.toStringTag:"",_=P,S=E,T=y;var x=j,V=function(r){var e,t,n;if(null==r)return T.call(r);t=r[S],e=_(r,S);try{r[S]=void 0}catch(e){return T.call(r)}return n=T.call(r),e?r[S]=t:delete r[S],n},k=b()?V:x,I=Number,A=I.prototype.toString;var F=k,R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=b();var N=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},C=d,B=N;var G=h,L=function(r){return C(r)||B(r)},W=N;G(L,"isPrimitive",d),G(L,"isObject",W);var X=L,Z=Number.POSITIVE_INFINITY,D=I.NEGATIVE_INFINITY,Y=Math.floor;var z=function(r){return Y(r)===r},H=Z,U=D,q=z;var J=function(r){return r<H&&r>U&&q(r)},K=X.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=X.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,or=nr;var ar=h,ur=function(r){return ir(r)||or(r)},cr=nr;ar(ur,"isPrimitive",rr),ar(ur,"isObject",cr);var fr=ur,lr=fr.isPrimitive;var sr=function(r){return lr(r)&&r>0},pr=fr.isObject;var vr=function(r){return pr(r)&&r.valueOf()>0},gr=sr,hr=vr;var dr=h,mr=function(r){return gr(r)||hr(r)},br=vr;dr(mr,"isPrimitive",sr),dr(mr,"isObject",br);var yr=mr,wr=void 0!==Object.getOwnPropertyDescriptor,jr=Object.getOwnPropertyDescriptor;var Or=P;var Pr=wr?function(r,e){var t;return null==r||void 0===(t=jr(r,e))?null:t}:function(r,e){return Or(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Er=function(r,e){var t=Pr(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)},_r=void 0!==Object.getOwnPropertyNames,Sr=Object.getOwnPropertyNames;var Tr=function(r){return Sr(Object(r))};var xr=function(r){return Object.keys(Object(r))},Vr=xr;var kr=function(){return function(){return 2!==(Vr(arguments)||"").length}(1,2)},Ir=void 0!==Object.keys,Ar=k;var Fr=function(r){return"[object Arguments]"===Ar(r)},Rr=Fr;var $r=function(){return Rr(arguments)}();var Mr=function(r){return"string"==typeof r},Nr=String.prototype.valueOf;var Cr=k,Br=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Gr=b();var Lr=function(r){return"object"==typeof r&&(r instanceof String||(Gr?Br(r):"[object String]"===Cr(r)))},Wr=Mr,Xr=Lr;var Zr=h,Dr=function(r){return Wr(r)||Xr(r)},Yr=Lr;Zr(Dr,"isPrimitive",Mr),Zr(Dr,"isObject",Yr);var zr=Dr;var Hr=function(r){return r!=r},Ur=X.isPrimitive,qr=Hr;var Jr=function(r){return Ur(r)&&qr(r)},Kr=X.isObject,Qr=Hr;var re=function(r){return Kr(r)&&Qr(r.valueOf())},ee=Jr,te=re;var ne=h,ie=function(r){return ee(r)||te(r)},oe=re;ne(ie,"isPrimitive",Jr),ne(ie,"isObject",oe);var ae,ue=ie,ce=Object.prototype.propertyIsEnumerable;ae=!ce.call("beep","0");var fe=zr,le=ue.isPrimitive,se=fr.isPrimitive,pe=ce,ve=ae;var ge=function(r,e){var t;return null!=r&&(!(t=pe.call(r,e))&&ve&&fe(r)?!le(e=+e)&&se(e)&&e>=0&&e<r.length:t)},he=ge,de=k;var me=Array.isArray?Array.isArray:function(r){return"[object Array]"===de(r)},be=P,ye=he,we=me,je=z;var Oe=$r?Fr:function(r){return null!==r&&"object"==typeof r&&!we(r)&&"number"==typeof r.length&&je(r.length)&&r.length>=0&&r.length<=4294967295&&be(r,"callee")&&!ye(r,"callee")},Pe=Oe,Ee=xr,_e=Array.prototype.slice;var Se=function(r){return Pe(r)?Ee(_e.call(r)):Ee(r)},Te=me;var xe=function(r){return null!==r&&"object"==typeof r};h(xe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Te(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xe));var Ve=xe;var ke=he((function(){}),"prototype"),Ie=!he({toString:null},"toString"),Ae=z;var Fe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ae(r.length)&&r.length>=0&&r.length<=9007199254740991},Re=ue,$e=Fe,Me=zr.isPrimitive,Ne=fr.isPrimitive;var Ce=function(r,e,t){var n,i;if(!$e(r)&&!Me(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ne(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Re(e)){for(;i<n;i++)if(Re(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},Be=/./;var Ge=function(r){return"boolean"==typeof r},Le=Boolean.prototype.toString;var We=k,Xe=function(r){try{return Le.call(r),!0}catch(r){return!1}},Ze=b();var De=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ze?Xe(r):"[object Boolean]"===We(r)))},Ye=Ge,ze=De;var He=h,Ue=function(r){return Ye(r)||ze(r)},qe=De;He(Ue,"isPrimitive",Ge),He(Ue,"isObject",qe);var Je="object"==typeof self?self:null,Ke="object"==typeof window?window:null,Qe=Ue.isPrimitive,rt=function(){return new Function("return this;")()},et=Je,tt=Ke,nt=r(Object.freeze({__proto__:null}));var it=function(r){if(arguments.length){if(!Qe(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return rt()}if(et)return et;if(tt)return tt;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")},ot=it(),at=ot.document&&ot.document.childNodes,ut=Int8Array,ct=Be,ft=at,lt=ut;var st=function(){return"function"==typeof ct||"object"==typeof lt||"function"==typeof ft};var pt=function(){return/^\s*function\s*([^(]*)/i},vt=pt;h(vt,"REGEXP",pt());var gt=Ve;var ht=k,dt=vt.REGEXP,mt=function(r){return gt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var bt=function(r){var e,t,n;if(("Object"===(t=ht(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dt.exec(n.toString()))return e[1]}return mt(r)?"Buffer":t},yt=bt;var wt=bt;var jt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?yt(r).toLowerCase():e},Ot=function(r){return wt(r).toLowerCase()},Pt=st()?Ot:jt;var Et,_t=function(r){return r.constructor&&r.constructor.prototype===r},St="undefined"==typeof window?void 0:window,Tt=P,xt=Ce,Vt=Pt,kt=_t,It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],At=St;Et=function(){var r;if("undefined"===Vt(At))return!1;for(r in At)try{-1===xt(It,r)&&Tt(At,r)&&null!==At[r]&&"object"===Vt(At[r])&&kt(At[r])}catch(r){return!0}return!1}();var Ft="undefined"!=typeof window,Rt=Et,$t=_t,Mt=Ft;var Nt=Ve,Ct=P,Bt=Oe,Gt=ke,Lt=Ie,Wt=function(r){if(!1===Mt&&!Rt)return $t(r);try{return $t(r)}catch(r){return!1}},Xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Zt=xr,Dt=Se,Yt=function(r){var e,t,n,i,o,a,u;if(i=[],Bt(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!Ct(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof r)&&!Nt(r))return i;t=Gt&&n}for(o in r)t&&"prototype"===o||!Ct(r,o)||i.push(String(o));if(Lt)for(e=Wt(r),u=0;u<Xt.length;u++)a=Xt[u],e&&"constructor"===a||!Ct(r,a)||i.push(String(a));return i},zt=Ir?kr()?Dt:Zt:Yt;var Ht=_r?Tr:function(r){return zt(Object(r))},Ut=void 0!==Object.getOwnPropertySymbols,qt=Object.getOwnPropertySymbols;var Jt=Ut?function(r){return qt(Object(r))}:function(){return[]},Kt=Pt;var Qt=function(r){return"function"===Kt(r)},rn=Object.getPrototypeOf;var en=function(r){return r.__proto__},tn=k,nn=en;var on=function(r){var e=nn(r);return e||null===e?e:"[object Function]"===tn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},an=rn,un=on,cn=Qt(Object.getPrototypeOf)?an:un;var fn=function(r){return null==r?null:(r=Object(r),cn(r))},ln=Fe,sn=fr.isPrimitive,pn=zr.isPrimitive,vn=ue.isPrimitive;var gn=function(r,e,t){var n,i,o;if(!ln(r)&&!pn(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!sn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(pn(r)){if(!pn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,vn(e)){for(o=i;o<n;o++)if(vn(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},hn=zr.isPrimitive;var dn=function(r){if(!hn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},mn=zr.isPrimitive;var bn=function(r){if(!mn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},yn=dn,wn=bn,jn=zr.isPrimitive;var On=function(r){return jn(r)&&r===wn(r)&&r!==yn(r)},Pn=Z,En=D;var _n=function(r){return r==r&&r>En&&r<Pn},Sn=fr.isPrimitive;var Tn=function(r){return Sn(r)&&r>=0},xn=fr.isObject;var Vn=function(r){return xn(r)&&r.valueOf()>=0},kn=Tn,In=Vn;var An=h,Fn=function(r){return kn(r)||In(r)},Rn=Vn;An(Fn,"isPrimitive",Tn),An(Fn,"isObject",Rn);var $n=Fn.isPrimitive,Mn=zr.isPrimitive;var Nn=function(r,e){var t,n;if(!Mn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!$n(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Cn=fr.isPrimitive,Bn=zr.isPrimitive;var Gn=Nn,Ln=function(r,e,t){var n,i;if(!Bn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Bn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Cn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Wn=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ln(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Gn("0",i):Gn("0",i)+r,n&&(r="-"+r)),r},Xn=On,Zn=bn,Dn=dn,Yn=_n,zn=X.isPrimitive,Hn=Wn;var Un=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Yn(n)){if(!zn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Hn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Hn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Xn(r.specifier)?Zn(t):Dn(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},qn=zr.isPrimitive,Jn=/[-\/\\^$*+?.()|[\]{}]/g;var Kn=function(r){var e,t;if(!qn(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Jn,"\\$&"):(e=(e=r.substring(1,t)).replace(Jn,"\\$&"),r=r[0]+e+r.substring(t))},Qn=RegExp.prototype.exec;var ri=k,ei=function(r){try{return Qn.call(r),!0}catch(r){return!1}},ti=b();var ni=Kn,ii=Qt,oi=zr.isPrimitive,ai=function(r){return"object"==typeof r&&(r instanceof RegExp||(ti?ei(r):"[object RegExp]"===ri(r)))};var ui=On,ci=bn,fi=dn,li=function(r,e,t){if(!oi(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(oi(e))e=ni(e),e=new RegExp(e,"g");else if(!ai(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!oi(t)&&!ii(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},si=_n,pi=X.isPrimitive,vi=function(r){return Math.abs(r)},gi=/e\+(\d)$/,hi=/e-(\d)$/,di=/^(\d+)$/,mi=/^(\d+)e/,bi=/\.0$/,yi=/\.0*e/,wi=/(\..*[^0])0*e/;var ji=function(r){var e,t,n=parseFloat(r.arg);if(!si(n)){if(!pi(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":vi(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=li(t,wi,"$1e"),t=li(t,yi,"e"),t=li(t,bi,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=li(t,gi,"e+0$1"),t=li(t,hi,"e-0$1"),r.alternate&&(t=li(t,di,"$1."),t=li(t,mi,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=ui(r.specifier)?ci(t):fi(t)},Oi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Pi=Nn;var Ei=zr.isPrimitive,_i=gn,Si=Hr,Ti=Un,xi=ji,Vi=function(r){var e,t,n,i,o;for(e=0,n=[],o=Oi.exec(r);o;)(t=r.slice(e,Oi.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Oi.lastIndex,o=Oi.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},ki=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Pi(" ",n):Pi(" ",n)+r},Ii=Wn,Ai=String.fromCharCode;var Fi=yr.isPrimitive,Ri=Er,$i=Ht,Mi=Jt,Ni=fn,Ci=P,Bi=function(r){var e,t,n,i,o,a,u,c,f;if(!Ei(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Vi(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Ei(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!_i(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Si(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Si(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Ti(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Si(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Si(o)?String(n.arg):Ai(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=xi(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ii(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ki(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var Gi=function(r,e){var t,n,i,o,a,u,c,f;if(arguments.length>1){if(!Fi(e))throw new TypeError(Bi("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));a=e}else a=9007199254740991;if(null==r)return[];for(i=Ni(r),t=[],n={},u=1;i&&u<=a;){for(o=$i(i),f=0;f<o.length;f++)c=o[f],!1===Ci(n,c)&&Ri(i,c)&&t.push(c),n[c]=!0;for(o=Mi(i),f=0;f<o.length;f++)c=o[f],!1===Ci(n,c)&&Ri(i,c)&&t.push(c),n[c]=!0;i=Ni(i),u+=1}return t},Li=Gi;export{Li as default};
//# sourceMappingURL=mod.js.map
