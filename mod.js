// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(t){var e,n,f;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,f=parseInt(n,10),!isFinite(f)){if(!r(n))throw new Error("invalid integer. Value: "+n);f=0}return f<0&&("u"===t.specifier||10!==e)&&(f=4294967295+f+1),f<0?(n=(-f).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=f.toString(e),f||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,u=String.prototype.toLowerCase,c=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,_,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,h,"e-0$1"),t.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):u.call(n)}function v(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var w=String.fromCharCode,O=isNaN,A=Array.isArray;function E(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function j(t){var e,r,n,o,a,s,u,c,l,p,h,g,y;if(!A(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",u=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)s+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,O(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):w(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,y=void 0,(y=h-p.length)<0?p:p=g?p+v(y):v(y)+p)),s+=n.arg||"",u+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function U(t){var e,r,n,i;for(r=[],i=0,n=x.exec(t);n;)(e=t.slice(i,x.lastIndex-n[0].length)).length&&r.push(e),r.push(I(n)),i=x.lastIndex,n=x.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function S(t){var e,r;if("string"!=typeof t)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[U(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return j.apply(null,e)}var N,T=Object.prototype,R=T.toString,B=T.__defineGetter__,F=T.__defineSetter__,L=T.__lookupGetter__,V=T.__lookupSetter__;N=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(L.call(t,e)||V.call(t,e)?(n=t.__proto__,t.__proto__=T,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(t,e,r.get),a&&F&&F.call(t,e,r.set),t};var C=N;function k(t,e,r){C(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function M(t){return"boolean"==typeof t}var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return P&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function $(t,e){return null!=t&&Y.call(t,e)}var J="function"==typeof Symbol?Symbol:void 0,W="function"==typeof J?J.toStringTag:"";var z=G()?function(t){var e,r,n;if(null==t)return D.call(t);r=t[W],e=$(t,W);try{t[W]=void 0}catch(e){return D.call(t)}return n=D.call(t),e?t[W]=r:delete t[W],n}:function(t){return D.call(t)},X=Boolean,Z=Boolean.prototype.toString;var H=G();function q(t){return"object"==typeof t&&(t instanceof X||(H?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function K(t){return M(t)||q(t)}k(K,"isPrimitive",M),k(K,"isObject",q);var Q="object"==typeof self?self:null,tt="object"==typeof window?window:null,et="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},rt="object"==typeof et?et:null,nt="object"==typeof globalThis?globalThis:null;function it(t){if(arguments.length){if(!M(t))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(nt)return nt;if(Q)return Q;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}var ot=it();function at(t,e,r){C(t,e,{configurable:!1,enumerable:!1,get:r})}var ft={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function st(t){return Math.abs(t)}function ut(t,e){return e&&(2===t||3===t)}function ct(t,e){return e&&(1===t||3===t)}function lt(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function pt(t){return t.re}function ht(t){return t.im}function gt(t){return"string"==typeof t}k(lt,"assign",(function(t,e,r,n){var i,o,a,f,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(f=e[s])>0?a+=f*(t[s]-1):f<0&&(o+=f*(t[s]-1))}return n[0]=o,n[1]=a,n}));var yt=String.prototype.valueOf;var dt=G();function _t(t){return"object"==typeof t&&(t instanceof String||(dt?function(t){try{return yt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function bt(t){return gt(t)||_t(t)}k(bt,"isPrimitive",gt),k(bt,"isObject",_t);var mt=/[-\/\\^$*+?.()|[\]{}]/g;var vt=/./,wt=it(),Ot=wt.document&&wt.document.childNodes,At=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;k(Et,"REGEXP",jt);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function It(t){return null!==t&&"object"==typeof t}function Ut(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=jt.exec(n.toString()))return e[1]}return It(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}k(It,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!xt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(It));var St="function"==typeof vt||"object"==typeof At||"function"==typeof Ot?function(t){return Ut(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ut(t).toLowerCase():e};var Nt=RegExp.prototype.exec;var Tt=G();function Rt(t){return"object"==typeof t&&(t instanceof RegExp||(Tt?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function Bt(t,e,r){if(!gt(t))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",t));if(gt(e))e=new RegExp(function(t){var e,r;if(!gt(t))throw new TypeError(S("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(mt,"\\$&"):(e=(e=t.substring(1,r)).replace(mt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Rt(e))throw new TypeError(S("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!gt(r)&&"function"!==St(r))throw new TypeError(S("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Ft={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Lt="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null;var Ct,kt="function"==typeof Uint8Array?Uint8Array:void 0;Ct=function(){var t,e,r;if("function"!=typeof Vt)return!1;try{e=new Vt(e=[1,3.14,-3.14,256,257]),r=e,t=(Lt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?kt:function(){throw new Error("not implemented")};var Mt=Ct,Pt="function"==typeof Uint16Array;var Gt="function"==typeof Uint16Array?Uint16Array:null;var Dt,Yt="function"==typeof Uint16Array?Uint16Array:void 0;Dt=function(){var t,e,r;if("function"!=typeof Gt)return!1;try{e=new Gt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Pt&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Yt:function(){throw new Error("not implemented")};var $t,Jt={uint16:Dt,uint8:Mt};($t=new Jt.uint16(1))[0]=4660;var Wt=52===new Jt.uint8($t.buffer)[0],zt="function"==typeof ArrayBuffer;var Xt="function"==typeof Float64Array;var Zt="function"==typeof Float64Array?Float64Array:null;var Ht,qt="function"==typeof Float64Array?Float64Array:void 0;Ht=function(){var t,e,r;if("function"!=typeof Zt)return!1;try{e=new Zt([1,3.14,-3.14,NaN]),r=e,t=(Xt&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?qt:function(){throw new Error("not implemented")};var Kt=Ht,Qt="function"==typeof ArrayBuffer?ArrayBuffer:null;var te,ee="function"==typeof ArrayBuffer?ArrayBuffer:void 0;te=function(){var t,e,r,n;if("function"!=typeof Qt)return!1;try{r=new Qt(16),n=r,(t=(zt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof Qt.isView)&&((e=new Kt(r))[0]=-3.14,e[1]=NaN,t=t&&Qt.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ee:function(){throw new Error("not implemented")};var re=te,ne="function"==typeof DataView;var ie="function"==typeof DataView?DataView:null;var oe,ae="function"==typeof DataView?DataView:void 0;oe=function(){var t,e,r,n;if("function"!=typeof ie)return!1;try{r=new re(24),e=new ie(r,8),n=e,(t=(ne&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?ae:function(){throw new Error("not implemented")};var fe=oe,se="function"==typeof BigInt?BigInt:void 0,ue={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ce(){var t;return 0===arguments.length?ue.all.slice():(t=ue[arguments[0]])?t.slice():[]}function le(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function pe(t,e,r){C(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function he(t){return Object.keys(Object(t))}var ge=void 0!==Object.keys;function ye(t){return"[object Arguments]"===z(t)}var de=function(){return ye(arguments)}();function _e(t){return"number"==typeof t}var be=Number,me=be.prototype.toString;var ve=G();function we(t){return"object"==typeof t&&(t instanceof be||(ve?function(t){try{return me.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function Oe(t){return _e(t)||we(t)}function Ae(t){return t!=t}function Ee(t){return _e(t)&&Ae(t)}function je(t){return we(t)&&Ae(t.valueOf())}function xe(t){return Ee(t)||je(t)}k(Oe,"isPrimitive",_e),k(Oe,"isObject",we),k(xe,"isPrimitive",Ee),k(xe,"isObject",je);var Ie=Number.POSITIVE_INFINITY,Ue=be.NEGATIVE_INFINITY,Se=Math.floor;function Ne(t){return Se(t)===t}function Te(t){return t<Ie&&t>Ue&&Ne(t)}function Re(t){return _e(t)&&Te(t)}function Be(t){return we(t)&&Te(t.valueOf())}function Fe(t){return Re(t)||Be(t)}k(Fe,"isPrimitive",Re),k(Fe,"isObject",Be);var Le=Object.prototype.propertyIsEnumerable;var Ve=!Le.call("beep","0");function Ce(t,e){var r;return null!=t&&(!(r=Le.call(t,e))&&Ve&&bt(t)?!Ee(e=+e)&&Re(e)&&e>=0&&e<t.length:r)}var ke=de?ye:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&Ne(t.length)&&t.length>=0&&t.length<=4294967295&&$(t,"callee")&&!Ce(t,"callee")},Me=Array.prototype.slice;var Pe=Ce((function(){}),"prototype"),Ge=!Ce({toString:null},"toString"),De=9007199254740991;function Ye(t,e,r){var n,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&Ne(o.length)&&o.length>=0&&o.length<=De||gt(t)))throw new TypeError(S("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Re(r))throw new TypeError(S("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(xe(e)){for(;i<n;i++)if(xe(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function $e(t){return t.constructor&&t.constructor.prototype===t}var Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],We="undefined"==typeof window?void 0:window;var ze=function(){var t;if("undefined"===St(We))return!1;for(t in We)try{-1===Ye(Je,t)&&$(We,t)&&null!==We[t]&&"object"===St(We[t])&&$e(We[t])}catch(t){return!0}return!1}(),Xe="undefined"!=typeof window;var Ze=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var He=ge?function(){return 2!==(he(arguments)||"").length}(1,2)?function(t){return ke(t)?he(Me.call(t)):he(t)}:he:function(t){var e,r,n,i,o,a,f;if(i=[],ke(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!$(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!It(t))return i;r=Pe&&n}for(o in t)r&&"prototype"===o||!$(t,o)||i.push(String(o));if(Ge)for(e=function(t){if(!1===Xe&&!ze)return $e(t);try{return $e(t)}catch(t){return!1}}(t),f=0;f<Ze.length;f++)a=Ze[f],e&&"constructor"===a||!$(t,a)||i.push(String(a));return i};k(ce,"enum",le),function(t,e){var r,n,i;for(r=He(e),i=0;i<r.length;i++)pe(t,n=r[i],e[n])}(ce,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var qe=["row-major","column-major"];function Ke(){return{"row-major":1,"column-major":2}}k((function(){return qe.slice()}),"enum",Ke);var Qe=["throw","normalize","clamp","wrap"];function tr(){return{throw:1,clamp:2,wrap:3,normalize:4}}k((function(){return Qe.slice()}),"enum",tr);var er={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},rr={"row-major":1,"column-major":2},nr={throw:1,clamp:2,wrap:3,normalize:4};var ir=4294967295,or=4294967296,ar=new Mt(8),fr=new fe(ar.buffer);function sr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<ar.length;a++)e[n]=0,n+=r;return e}for(o=(t&ir)>>>0,i=Se(t/or),Wt?(fr.setUint32(0,o,Wt),fr.setUint32(4,i,Wt)):(fr.setUint32(0,i,Wt),fr.setUint32(4,o,Wt)),a=0;a<ar.length;a++)e[n]=ar[a],n+=r;return e}k((function(t){var e,r,n,i;return e=new Mt(8),0===t||(i=(4294967295&t)>>>0,n=Se(t/4294967296),r=new fe(e.buffer),Wt?(r.setUint32(0,i,Wt),r.setUint32(4,n,Wt)):(r.setUint32(0,n,Wt),r.setUint32(4,i,Wt))),e}),"assign",sr);var ur={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},cr={"row-major":1,"column-major":2},lr={throw:1,clamp:2,wrap:3,normalize:4};function pr(t,e,r,n,i,o){var a,f,s,u,c;if(!(this instanceof pr))return new pr(t,e,r,n,i,o);for(u=1,c=0;c<r.length;c++)u*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*u:null,this._byteLength=f,this._bytesPerElement=function(t){return ft[t]||null}(t),this._buffer=e,this._dtype=t,this._length=u,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=X(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=lt(e,r,n))[1]-o[0]+1}(u,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=st(t[0]),a=1;a<r;a++){if(o=st(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:ct(s,a),COLUMN_MAJOR_CONTIGUOUS:ut(s,a),READONLY:!1},this.__meta_dataview__=null,this}function hr(t){return function(t){return t instanceof pr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length}function gr(t){var e,r,n,i;if(!function(t){return hr(t)&&t.shape[0]===t.shape[1]}(t))return!1;for(e=t.shape[0]-1,n=0;n<e;n++)for(r=e-n,i=0;i<r;i++)if(t.get(n,i)!==t.get(e-i,r))return!1;return!0}k(pr,"name","ndarray"),at(pr.prototype,"byteLength",(function(){return this._byteLength})),at(pr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),at(pr.prototype,"data",(function(){return this._buffer})),at(pr.prototype,"dtype",(function(){return this._dtype})),at(pr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),at(pr.prototype,"length",(function(){return this._length})),at(pr.prototype,"ndims",(function(){return this._ndims})),at(pr.prototype,"offset",(function(){return this._offset})),at(pr.prototype,"order",(function(){return this._order})),at(pr.prototype,"shape",(function(){return this._shape.slice()})),at(pr.prototype,"strides",(function(){return this._strides.slice()})),k(pr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),k(pr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),k(pr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),k(pr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),k(pr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=pt(i=this.iget(o))+", "+ht(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=pt(i=this.iget(o))+", "+ht(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=pt(i=this.iget(this._length-1-o))+", "+ht(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Bt(Ft[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),k(pr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(pt(r),ht(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),k(pr.prototype,"__array_meta_dataview__","function"==typeof ot.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ot.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new fe(new re(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,f.setInt8(u,Wt?1:0),u+=1,f.setInt16(u,er[n],Wt),u+=2,f.setBigInt64(u,se(l),Wt),c=8*l,u+=8,h=0;h<l;h++)f.setBigInt64(u,se(i[h]),Wt),f.setBigInt64(u+c,se(o[h]*t),Wt),u+=8;for(u+=c,f.setBigInt64(u,se(this._offset*t),Wt),u+=8,f.setInt8(u,rr[this._order]),u+=1,f.setInt8(u,nr[s]),u+=1,f.setBigInt64(u,se(p),Wt),u+=8,h=0;h<p;h++)f.setInt8(u,nr[a[h]]),u+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(u,e,Wt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,s,u,c,l,p,h,g;if(u=this._mode||"throw",f=this._submode||[u],n=33+16*(p=this._ndims)+(h=f.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new fe(new re(n)),e=new Mt(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,Wt?1:0),c+=1,s.setInt16(c,ur[i],Wt),sr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)sr(o[g],e,1,c),sr(a[g]*t,e,1,c+l),c+=8;for(c+=l,sr(this._offset*t,e,1,c),c+=8,s.setInt8(c,cr[this._order]),c+=1,s.setInt8(c,lr[u]),sr(h,e,1,c+=1),c+=8,g=0;g<h;g++)s.setInt8(c,lr[f[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,Wt),this.__meta_dataview__=s,s});export{gr as default};
//# sourceMappingURL=mod.js.map
