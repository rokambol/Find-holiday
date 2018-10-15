
var map;
var childLi1="<li>Washington</li> <li>New York</li> <li>Toronto</li> <li>Monreal</li> <li>Quebec City</li> <li>Vancouver</li>";
var childLi2="<li>Rio de Jenairo</li> <li>Buenos Aires</li> <li>Montivideo</li> <li>Falkland Islands</li> <li>Rio Grande</li> <li>Santiago</li>";
var childLi3="<li>New York</li> <li>Montivideo</li>";
 
var locations = [
      ['Washington DC', 38.893558, -77.063383, 1],
      ['New York', 40.773882, -74.019295, 2],
      ['Toronto', 43.697069, -79.383891, 3],
      ['Monreal', 45.605755, -73.538326, 4],
      ['Quebec City', 46.867889, -71.226519, 5],
      ['Vancouver', 49.384010, -123.156729, 6],
      ['Rio de Jenairo', -22.922876, -43.462457, 7],
      ['Buenos Aires', -34.604760, -58.426976, 8],
      ['Montivideo', -34.902597, -56.172354, 9],
      ['Falkland Islands (Islas Malvinas)', -51.746976, -58.910415, 10],
      ['Rio Grande', -53.763299, -67.696776, 11],
      ['Santiago', -33.439446, -70.667641, 12],
      [],
      [],
      [],
    ];
//var iternityNY = {lat: -25.344, lng: 131.036};
//var marker =  new google.maps.Marker({position: iternityNY, map: map});

/*initial load default map center when page is loaded */
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 3
        });
        var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })
      (marker, i));
    }
    }
    
    
 /*function newLocation() to use in next fuction block for ne map center */
 function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

  /*function to change each continent from dropdown menu to new location */
$(document).ready(function() {
 $('#inlineFormCustomSelect').on('change', function (){
 var value =  $('#inlineFormCustomSelect').val();
  
  if (value == 1) {
       newLocation(49.020956,-103.076235);
        $('li').replaceWith(childLi1);
} else if (value == 2) {
     newLocation(-33.139444, -65.501989);
     $('li').replaceWith(childLi2);
} else if (value == 3) {
    newLocation(50.720127, 16.191343);
     $('li').replaceWith(childLi3);
} else if (value == 4) {
    newLocation(3.575398, 23.046812);
} else if (value == 5) {
    newLocation(29.168012, 103.906187);  
} else if (value == 6) {
    newLocation(-34.397, 150.644);
} else if (value == 7) {
    newLocation(-83.382304, 48.454375);
}
});


/*$('#inlineFormCustomSelect').on('change', function (){
var value =  $('#inlineFormCustomSelect').val();
if (value == 1 ) {

    $('li').replaceWith(childLi1);
    
} else if(value == 2) {
 
    $('li').replaceWith(childLi2);
}



});*/
});