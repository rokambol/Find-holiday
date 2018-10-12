
//$(document).ready(function(){ 
       

/*coords = {
  africa: '39.953050,-75.163961',
  europe: '40.875597,-77.776226',
  asia: '41.763633,-72.682662'
};   */ 
var map;
/*initial load default map center when page is loaded */
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 3
        });
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
       newLocation(49.020956,-103.076235),listNY();
} else if (value == 2) {
     newLocation(-13.777778, -57.812563);
} else if (value == 3) {
    newLocation(50.720127, 16.191343);
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

 
 function listNY() {
    var newItem = document.createElement('li');
    var textnode = document.createTextNode("New York");
    newItem.appendChild(textnode);

    var list = document.getElementById("list1");
    list.insertBefore(newItem, list.childNodes[0]);
    for( i = 0; i < 5; i = i + 1 ) {
        
    var li = document.createElement( 'li' );               // create a new li element
    list1.appendChild( li );                           // every time append a new item
  }
}
    
});