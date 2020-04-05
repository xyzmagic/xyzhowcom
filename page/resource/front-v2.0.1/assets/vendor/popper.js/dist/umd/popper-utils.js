/*

 Copyright (c) 2016 Federico Zivolo and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
(function(f,i){typeof exports==="object"&&typeof module!=="undefined"?i(exports):typeof define==="function"&&define.amd?define(["exports"],i):i(f.PopperUtils={})})(this,function(f){function i(a,b){if(a.nodeType!==1)return[];var c=getComputedStyle(a,null);return b?c[b]:c}function p(a){return a.nodeName==="HTML"?a:a.parentNode||a.host}function n(a){if(!a)return document.body;switch(a.nodeName){case "HTML":case "BODY":return a.ownerDocument.body;case "#document":return a.body}var b=i(a);return/(auto|scroll|overlay)/.test(b.overflow+
b.overflowY+b.overflowX)?a:n(p(a))}function o(a){return a===11?F:a===10?G:F||G}function q(a){if(!a)return document.documentElement;for(var b=o(10)?document.body:null,c=a.offsetParent;c===b&&a.nextElementSibling;)c=(a=a.nextElementSibling).offsetParent;b=c&&c.nodeName;return!b||b==="BODY"||b==="HTML"?a?a.ownerDocument.documentElement:document.documentElement:["TD","TABLE"].indexOf(c.nodeName)!==-1&&i(c,"position")==="static"?q(c):c}function y(a){return a.parentNode!==null?y(a.parentNode):a}function t(a,
b){if(!a||!a.nodeType||!b||!b.nodeType)return document.documentElement;var c=a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING,d=c?a:b,c=c?b:a,e=document.createRange();e.setStart(d,0);e.setEnd(c,0);e=e.commonAncestorContainer;if(a!==e&&b!==e||d.contains(c))return d=e.nodeName,(d==="BODY"?0:d==="HTML"||q(e.firstElementChild)===e)?e:q(e);d=y(a);return d.host?t(d.host,b):t(a,y(b).host)}function j(a){var b=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top")==="top"?"scrollTop":
"scrollLeft",c=a.nodeName;return c==="BODY"||c==="HTML"?(c=a.ownerDocument.documentElement,(a.ownerDocument.scrollingElement||c)[b]):a[b]}function $(a,b){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=j(b,"top"),e=j(b,"left"),c=c?-1:1;a.top+=d*c;a.bottom+=d*c;a.left+=e*c;a.right+=e*c;return a}function u(a,b){var c=b==="x"?"Left":"Top",d=c==="Left"?"Right":"Bottom";return parseFloat(a["border"+c+"Width"],10)+parseFloat(a["border"+d+"Width"],10)}function H(a,b,c,d){return Math.max(b["offset"+
a],b["scroll"+a],c["client"+a],c["offset"+a],c["scroll"+a],o(10)?parseInt(c["offset"+a])+parseInt(d["margin"+(a==="Height"?"Top":"Left")])+parseInt(d["margin"+(a==="Height"?"Bottom":"Right")]):0)}function r(a){var b=a.body,a=a.documentElement,c=o(10)&&getComputedStyle(a);return{height:H("Height",b,a,c),width:H("Width",b,a,c)}}function l(a){return I({},a,{right:a.left+a.width,bottom:a.top+a.height})}function v(a){var b={};try{if(o(10)){var b=a.getBoundingClientRect(),c=j(a,"top"),d=j(a,"left");b.top+=
c;b.left+=d;b.bottom+=c;b.right+=d}else b=a.getBoundingClientRect()}catch(e){}b={left:b.left,top:b.top,width:b.right-b.left,height:b.bottom-b.top};d=a.nodeName==="HTML"?r(a.ownerDocument):{};c=a.offsetWidth-(d.width||a.clientWidth||b.right-b.left);d=a.offsetHeight-(d.height||a.clientHeight||b.bottom-b.top);if(c||d)a=i(a),c-=u(a,"x"),d-=u(a,"y"),b.width-=c,b.height-=d;return l(b)}function s(a,b){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=o(10),e=b.nodeName==="HTML",g=v(a),f=
v(b),h=n(a),m=i(b),j=parseFloat(m.borderTopWidth,10),k=parseFloat(m.borderLeftWidth,10);if(c&&e)f.top=Math.max(f.top,0),f.left=Math.max(f.left,0);g=l({top:g.top-f.top-j,left:g.left-f.left-k,width:g.width,height:g.height});g.marginTop=0;g.marginLeft=0;if(!d&&e)e=parseFloat(m.marginTop,10),m=parseFloat(m.marginLeft,10),g.top-=j-e,g.bottom-=j-e,g.left-=k-m,g.right-=k-m,g.marginTop=e,g.marginLeft=m;if(d&&!c?b.contains(h):b===h&&h.nodeName!=="BODY")g=$(g,b);return g}function aa(a){var b=arguments.length>
1&&arguments[1]!==void 0?arguments[1]:!1,c=a.ownerDocument.documentElement,d=s(a,c),e=Math.max(c.clientWidth,window.innerWidth||0),g=Math.max(c.clientHeight,window.innerHeight||0),f=!b?j(c):0,b=!b?j(c,"left"):0;return l({top:f-d.top+d.marginTop,left:b-d.left+d.marginLeft,width:e,height:g})}function w(a){var b=a.nodeName;return b==="BODY"||b==="HTML"?!1:i(a,"position")==="fixed"?!0:w(p(a))}function J(a){if(!a||!a.parentElement||o())return document.documentElement;for(a=a.parentElement;a&&i(a,"transform")===
"none";)a=a.parentElement;return a||document.documentElement}function z(a,b,c,d){var e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,g={top:0,left:0},f=e?J(a):t(a,b);if(d==="viewport")g=aa(f,e);else{var h=void 0;if(d==="scrollParent"){if(h=n(p(b)),h.nodeName==="BODY")h=a.ownerDocument.documentElement}else h=d==="window"?a.ownerDocument.documentElement:d;e=s(h,f,e);h.nodeName==="HTML"&&!w(f)?(h=r(a.ownerDocument),f=h.height,h=h.width,g.top+=e.top-e.marginTop,g.bottom=f+e.top,g.left+=e.left-
e.marginLeft,g.right=h+e.left):g=e}c=c||0;e=typeof c==="number";g.left+=e?c:c.left||0;g.top+=e?c:c.top||0;g.right-=e?c:c.right||0;g.bottom-=e?c:c.bottom||0;return g}function K(a,b,c,d,e){var g=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(a.indexOf("auto")===-1)return a;var g=z(c,d,g,e),f={top:{width:g.width,height:b.top-g.top},right:{width:g.right-b.right,height:g.height},bottom:{width:g.width,height:g.bottom-b.bottom},left:{width:b.left-g.left,height:g.height}},g=Object.keys(f).map(function(a){return I({key:a},
f[a],{area:f[a].width*f[a].height})}).sort(function(a,b){return b.area-a.area}),h=g.filter(function(a){var b=a.height;return a.width>=c.clientWidth&&b>=c.clientHeight}),g=h.length>0?h[0].key:g[0].key,h=a.split("-")[1];return g+(h?"-"+h:"")}function ba(a){var b=!1;return function(){b||(b=!0,window.Promise.resolve().then(function(){b=!1;a()}))}}function ca(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){b=!1;a()},L))}}function M(a,b){return Array.prototype.find?a.find(b):a.filter(b)[0]}
function A(a,b,c){if(Array.prototype.findIndex)return a.findIndex(function(a){return a[b]===c});var d=M(a,function(a){return a[b]===c});return a.indexOf(d)}function N(a){var b=void 0;a.nodeName==="HTML"?(a=r(a.ownerDocument),b={width:a.width,height:a.height,left:0,top:0}):b={width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop};return l(b)}function B(a){var b=getComputedStyle(a),c=parseFloat(b.marginTop)+parseFloat(b.marginBottom),b=parseFloat(b.marginLeft)+parseFloat(b.marginRight);
return{width:a.offsetWidth+b,height:a.offsetHeight+c}}function da(a){var b={left:"right",right:"left",bottom:"top",top:"bottom"};return a.replace(/left|right|bottom|top/g,function(a){return b[a]})}function O(a,b,c){var c=c.split("-")[0],a=B(a),d={width:a.width,height:a.height},e=["right","left"].indexOf(c)!==-1,g=e?"top":"left",f=e?"left":"top",h=e?"height":"width";d[g]=b[g]+b[h]/2-a[h]/2;d[f]=c===f?b[f]-a[!e?"height":"width"]:b[da(f)];return d}function P(a,b,c){var d=arguments.length>3&&arguments[3]!==
void 0?arguments[3]:null,e=d?J(b):t(b,c);return s(c,e,d)}function Q(a){for(var b=[!1,"ms","Webkit","Moz","O"],c=a.charAt(0).toUpperCase()+a.slice(1),d=0;d<b.length;d++){var e=b[d],e=e?""+e+c:a;if(typeof document.body.style[e]!=="undefined")return e}return null}function C(a){var b={};return a&&b.toString.call(a)==="[object Function]"}function R(a,b){return a.some(function(a){var d=a.name;return a.enabled&&d===b})}function S(a,b,c){var d=M(a,function(a){return a.name===b}),a=!!d&&a.some(function(a){return a.name===
c&&a.enabled&&a.order<d.order});if(!a){var e="`"+b+"`";console.warn("`"+c+"` modifier is required by "+e+" modifier in order to work, be sure to include it before "+e+"!")}return a}function D(a){return a!==""&&!isNaN(parseFloat(a))&&isFinite(a)}function T(a){return(a=a.ownerDocument)?a.defaultView:window}function U(a,b){T(a).removeEventListener("resize",b.updateBound);b.scrollParents.forEach(function(a){a.removeEventListener("scroll",b.updateBound)});b.updateBound=null;b.scrollParents=[];b.scrollElement=
null;b.eventsEnabled=!1;return b}function V(a,b,c){(c===void 0?a:a.slice(0,A(a,"name",c))).forEach(function(a){a["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var c=a["function"]||a.fn;if(a.enabled&&C(c))b.offsets.popper=l(b.offsets.popper),b.offsets.reference=l(b.offsets.reference),b=c(b,a)});return b}function W(a,b){Object.keys(b).forEach(function(c){b[c]!==!1?a.setAttribute(c,b[c]):a.removeAttribute(c)})}function X(a,b){Object.keys(b).forEach(function(c){var d=
"";["width","height","top","right","bottom","left"].indexOf(c)!==-1&&D(b[c])&&(d="px");a.style[c]=b[c]+d})}function Y(a,b,c,d){var e=a.nodeName==="BODY",a=e?a.ownerDocument.defaultView:a;a.addEventListener(b,c,{passive:!0});e||Y(n(a.parentNode),b,c,d);d.push(a)}function Z(a,b,c,d){c.updateBound=d;T(a).addEventListener("resize",c.updateBound,{passive:!0});a=n(a);Y(a,"scroll",c.updateBound,c.scrollParents);c.scrollElement=a;c.eventsEnabled=!0;return c}for(var k=typeof window!=="undefined"&&typeof document!==
"undefined",F=k&&!(!window.MSInputMethodContext||!document.documentMode),G=k&&/MSIE 10/.test(navigator.userAgent),I=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},x=["Edge","Trident","Firefox"],L=0,E=0;E<x.length;E+=1)if(k&&navigator.userAgent.indexOf(x[E])>=0){L=1;break}k=k&&window.Promise?ba:ca;x={computeAutoPlacement:K,debounce:k,findIndex:A,getBordersSize:u,getBoundaries:z,getBoundingClientRect:v,
getClientRect:l,getOffsetParent:q,getOffsetRect:N,getOffsetRectRelativeToArbitraryNode:s,getOuterSizes:B,getParentNode:p,getPopperOffsets:O,getReferenceOffsets:P,getScroll:j,getScrollParent:n,getStyleComputedProperty:i,getSupportedPropertyName:Q,getWindowSizes:r,isFixed:w,isFunction:C,isModifierEnabled:R,isModifierRequired:S,isNumeric:D,removeEventListeners:U,runModifiers:V,setAttributes:W,setStyles:X,setupEventListeners:Z};f.computeAutoPlacement=K;f.debounce=k;f.findIndex=A;f.getBordersSize=u;f.getBoundaries=
z;f.getBoundingClientRect=v;f.getClientRect=l;f.getOffsetParent=q;f.getOffsetRect=N;f.getOffsetRectRelativeToArbitraryNode=s;f.getOuterSizes=B;f.getParentNode=p;f.getPopperOffsets=O;f.getReferenceOffsets=P;f.getScroll=j;f.getScrollParent=n;f.getStyleComputedProperty=i;f.getSupportedPropertyName=Q;f.getWindowSizes=r;f.isFixed=w;f.isFunction=C;f.isModifierEnabled=R;f.isModifierRequired=S;f.isNumeric=D;f.removeEventListeners=U;f.runModifiers=V;f.setAttributes=W;f.setStyles=X;f.setupEventListeners=Z;
f["default"]=x;Object.defineProperty(f,"__esModule",{value:!0})});