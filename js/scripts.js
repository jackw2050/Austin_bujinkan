
var myCenter=new google.maps.LatLng(30.348063, -97.714806);
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(30.348063, -97.714806), //51.508742,-0.120850),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker=new google.maps.Marker({
  position:myCenter,
    animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
var infowindow = new google.maps.InfoWindow({
  content:"Austin Bunjinkan"
  });

infowindow.open(map,marker);
}



google.maps.event.addDomListener(window, 'load', initialize);



var arr = [4,7, 2, 66];

var testArr = arr.sort(); if(arr.length < 2){console.log(testArr[i]);}
var i = testArr[testArr.length - 1];
while ( i > 0){
  if( testArr[i] > testArr[i - 1]){
  console.log(testArr[i]);
  break;
  }
  i--;
}
if(i == 0){
console.log(testArr[i]);
}






/*
The mapTypeId property specifies the map type to display. The following map types are supported:

ROADMAP (normal, default 2D map)
SATELLITE (photographic map)
HYBRID (photographic map + roads and city names)
TERRAIN (map with mountains, rivers, etc.)
*/
