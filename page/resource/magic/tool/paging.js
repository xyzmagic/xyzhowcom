'use strict';function paging(e,k,l,f,b){f=f?f:"";var g="";b&&(g=$.param(b))&&0<g.length&&(g+="\x26");b=[];for(var a=5;0<a;a--){var d=e-a;0<e-a&&b.push(d)}b.push(e);var c=b.length;for(a=1;a<=10-c;a++)if(d=e+a,d<=k)b.push(d);else break;c=b.length;c=10-c;if(0<c)for(a=1;a<=c;a++)if(d=b[0]-1,0<d)b.unshift(d);else break;d=$("\x3cul class\x3d'pagination mb-0'/\x3e");a=$("\x3cli class\x3d'page-item ml-0'\x3e");c=$("\x3ca class\x3d'page-link' aria-label\x3d'Previous'/\x3e");var h=e-1;0<h&&(c.attr("href",f+
"?"+g+"current\x3d"+h),c.append("\x3cspan aria-hidden\x3d'true'\x3e\x26laquo;\x3c/span\x3e"),c.append("\x3cspan class\x3d'sr-only'\x3ePrevious\x3c/span\x3e"),a.append(c),d.append(a));for(a=0;a<b.length;a++)c=$("\x3cli class\x3d'page-item d-none d-sm-block'\x3e"),e==b[a]&&(c.addClass("active"),c.removeClass("d-none d-sm-block")),e-1!=b[a]&&e+1!=b[a]||c.removeClass("d-none d-sm-block"),h=$("\x3ca class\x3d'page-link'/\x3e"),h.attr("href",f+"?"+g+"current\x3d"+b[a]).text(b[a]),c.append(h),d.append(c);
b=$("\x3cli class\x3d'page-item'\x3e");a=$("\x3ca class\x3d'page-link' aria-label\x3d'Next'/\x3e");e+=1;e<=k&&(a.attr("href",f+"?"+g+"current\x3d"+e),a.append("\x3cspan aria-hidden\x3d'true'\x3e\x26raquo;\x3c/span\x3e"),a.append("\x3cspan class\x3d'sr-only'\x3eNext\x3c/span\x3e"),b.append(a),d.append(b));$("#"+l).append(d)};