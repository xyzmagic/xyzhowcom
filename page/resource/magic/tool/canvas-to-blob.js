'use strict';(function(a){var f=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c;if(c=a.Blob)try{c=!!new Blob}catch(b){c=!1}var g=c;if(c=g&&a.Uint8Array)try{c=100===(new Blob([new Uint8Array(100)])).size}catch(b){c=!1}var k=c,h=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,l=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,e=(g||h)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(b){var a;var d=b.match(l);if(!d)throw Error("invalid data URI");var c=d[2]?d[1]:"text/plain"+(d[3]||
";charset\x3dUS-ASCII");var e=!!d[4];b=b.slice(d[0].length);b=e?atob(b):decodeURIComponent(b);e=new ArrayBuffer(b.length);d=new Uint8Array(e);for(a=0;a<b.length;a+=1)d[a]=b.charCodeAt(a);if(g)return new Blob([k?d:e],{type:c});b=new h;b.append(e);return b.getBlob(c)};a.HTMLCanvasElement&&!f.toBlob&&(f.mozGetAsFile?f.toBlob=function(a,c,d){var b=this;setTimeout(function(){d&&f.toDataURL&&e?a(e(b.toDataURL(c,d))):a(b.mozGetAsFile("blob",c))})}:f.toDataURL&&e&&(f.toBlob=function(a,c,d){var b=this;setTimeout(function(){a(e(b.toDataURL(c,
d)))})}));"function"===typeof define&&define.amd?define(function(){return e}):"object"===typeof module&&module.exports?module.exports=e:a.dataURLtoBlob=e})(window);