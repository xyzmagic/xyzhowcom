(function(a){a.HSCore.components.HSGMap={_baseConfig:{zoom:14,scrollwheel:!1,infoWindowTemplate:function(b,a,l,i,d){return'<img class="rounded-circle" src="'+b+'" alt="'+a+'"><div class="p-2"><strong class="d-block mb-1">'+l+'</strong><p class="mb-1"><i class="fa fa-map-marker mr-2"></i>'+i+'</p><h2 class="h6 mb-0">'+d+"</h2></div>"}},pageCollection:a(),init:function(b,o){this.collection=b&&a(b).length?a(b):a();if(a(b).length)return this.config=o&&a.isPlainObject(o)?a.extend({},this._baseConfig,o):
this._baseConfig,this.config.itemSelector=b,this.initGMap(),this.pageCollection},initGMap:function(){var b=this.config,o=this.pageCollection;this.collection.each(function(l,i){var d=a(i),p=d.attr("id"),g=d.data("type"),j=d.data("lat"),k=d.data("lng"),h=d.data("zoom"),q=d.data("title"),e=JSON.parse(i.getAttribute("data-styles")),v=[],D=Boolean(d.data("polygon")),E=JSON.parse(i.getAttribute("data-polygon-cords")),r=JSON.parse(i.getAttribute("data-polygon-styles")),F=Boolean(d.data("polylines")),G=JSON.parse(i.getAttribute("data-polylines-cords")),
w=JSON.parse(i.getAttribute("data-polylines-styles")),H=Boolean(d.data("routes")),x=JSON.parse(i.getAttribute("data-routes-cords")),t=JSON.parse(i.getAttribute("data-routes-styles")),y=Boolean(d.data("geolocation")),I=Boolean(d.data("geocoding")),z=d.data("cords-target"),n=Boolean(d.data("pin")),s=d.data("pin-icon"),m=Boolean(d.data("multiple-markers")),f=JSON.parse(i.getAttribute("data-markers-locations")),c;if(g=="satellite")c=new google.maps.Map(document.getElementById(p),{zoom:h?h:b.zoom,scrollwheel:b.scrollwheel}),
c.setCenter({lat:j,lng:k}),c.setMapTypeId(google.maps.MapTypeId.SATELLITE);else if(g=="terrain")c=new google.maps.Map(document.getElementById(p),{zoom:h?h:b.zoom,scrollwheel:b.scrollwheel}),c.setCenter({lat:j,lng:k}),c.setMapTypeId(google.maps.MapTypeId.TERRAIN);else if(g=="street-view")c=new google.maps.StreetViewPanorama(document.getElementById(p),{zoom:h?h:b.zoom,scrollwheel:b.scrollwheel}),c.setPosition({lat:j,lng:k});else if(g=="static")a(document).ready(function(){c=GMaps.staticMapURL({size:[2048,
2048],lat:j,lng:k,zoom:h?h:b.zoom});a("#"+p).css("background-image","url("+c+")")});else if(g=="custom"){for(var J=e.length,l=0;l<J;l++){var A=e[l][0],B=e[l][1],K=e[l][2],u=a.extend({},v[l]);if(A!="")u.featureType=A;if(B!="")u.elementType=B;u.stylers=K;v.push(u)}c=new GMaps({div:"#"+p,lat:j,lng:k,zoom:h?h:b.zoom,scrollwheel:b.scrollwheel,styles:v});n&&m!=!0&&c.addMarker({lat:j,lng:k,title:q,icon:s});if(n&&m==!0)for(e=0;e<f.length;e++)c.addMarker({title:f[e][1],lat:f[e][2],lng:f[e][3],icon:f[e][0],
infoWindow:{content:b.infoWindowTemplate(f[e][4],f[e][5],f[e][6],f[e][7],f[e][8]),maxWidth:150}})}else c=new GMaps({div:"#"+p,lat:j,lng:k,zoom:h?h:b.zoom,scrollwheel:b.scrollwheel}),n&&c.addMarker({lat:j,lng:k,title:q,icon:s});if(n&&g=="satellite"||g=="terrain"||g=="street-view")n=new google.maps.Marker({position:{lat:j,lng:k},map:c}),s&&(e=new google.maps.MarkerImage(s),n.setIcon(e)),q&&n.setOptions({title:q});if(m==!0&&g=="terrain")for(var C=new google.maps.InfoWindow,m=0;m<f.length;m++)g=new google.maps.Marker({position:new google.maps.LatLng(f[m][1],
f[m][2]),map:c}),google.maps.event.addListener(g,"click",function(a,b){return function(){C.setContent(f[b][0]);C.open(c,a)}}(g,m));y||google.maps.event.addDomListener(window,"resize",function(){setTimeout(function(){c.setCenter({lat:j,lng:k})},100)});D&&a(document).ready(function(){c.drawPolygon({paths:E,strokeColor:r.strokeColor,strokeOpacity:r.strokeOpacity,strokeWeight:r.strokeWeight,fillColor:r.fillColor,fillOpacity:r.fillOpacity})});F&&a(document).ready(function(){c.drawPolyline({path:G,strokeColor:w.strokeColor,
strokeOpacity:w.strokeOpacity,strokeWeight:w.strokeWeight})});H&&a(document).ready(function(){c.drawRoute({origin:x[0],destination:x[1],travelMode:t.travelMode,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight})});y&&GMaps.geolocate({success:function(a){c.setCenter({lat:a.coords.latitude,lng:a.coords.longitude});c.addMarker({lat:a.coords.latitude,lng:a.coords.longitude,title:q,icon:s});google.maps.event.addDomListener(window,"resize",function(){setTimeout(function(){c.setCenter({lat:a.coords.latitude,
lng:a.coords.longitude})},100)})},error:function(a){alert("Geolocation failed: "+a.message)},not_supported:function(){alert("Your browser does not support geolocation")}});I&&a(document).ready(function(){var b=a(z).closest("form");a(b).submit(function(b){b.preventDefault();GMaps.geocode({address:a(z).val().trim(),callback:function(a,b){if(b=="OK"){var d=a[0].geometry.location;c.setCenter(d.lat(),d.lng());c.addMarker({lat:d.lat(),lng:d.lng()});j=d.lat();k=d.lng()}}})})});o=o.add(d)})}}})(jQuery);