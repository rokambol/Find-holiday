// global variables show submenu1 when choose is made
// Sample of the general data structure


// location data for each city with name
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
    ['London', 51.409136, -0.062758, 13],
    ['Paris', 48.856871, 2.335072, 14],
    ['Copenhagen', 55.678157, 12.578024, 15],
    ['Moscow', 55.754242, 37.599643, 16],
    ['Rome', 41.901298, 12.488610, 17],
    ['Athens', 37.996834, 23.725499, 18],
    ['Casablanka', 33.575700, -7.593175, 19],
    ['Cairo', 30.019941, 31.209710, 20],
    ['Lagos', 6.526206, 3.374584, 21],
    ['Johannesburg', -26.199541, 28.044828, 22],
    ['Cape Town', -33.932501, 18.455402, 23],
    ['Entebbe', 0.052616, 32.464036, 24],
    ['Dubai', 25.215561, 55.273019, 25],
    ['Mumbai', 19.084794, 72.883234, 26],
    ['Colombo', 6.926264, 79.861009, 27],
    ['Kuala Lumpur', 3.137818, 101.689046, 28],
    ['Hong Kong', 22.337251, 114.183957, 29],
    ['Tokyo', 35.710376, 139.732444, 30],
    ['Perth', -32.023278, 115.892434, 31],
    ['Melbourne', -37.817348, 144.940379, 32],
    ['Sydney', -33.864985, 151.185559, 33],
    ['Queenstown', -45.050422, 168.720692, 34],
    ['Auckland', -36.870763, 174.697222, 35],
    ['Nadi', -17.757309, 177.445846, 36]
];



 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 1
        });
      }

$.getJSON('data/places.json', function (data) {
    console.log(data);
    
    // JQuery function help code below to execute after page is loaded 
    $(document).ready(function() {
        var citySelect =  $('#citySelect');
        var listMenu = $('#listMenu');
        var placesTypeSelect = $('#placesTypeSelect');
        var continentSelect = $('#continentSelect');
        var selectedCity = null;
        var selectedContinent = null;
        
        function renderCityInfo(cityDetails) {
            return `
                <div class="pic">
                <img src="${cityDetails.picture}">
                </div>
                <div class= 'text'>
                    <b>${cityDetails.cityName}</b>
                    <br/>Country: ${cityDetails.country}
                    <br/>Population: ${cityDetails.population}
                </div>
            `;
        }
        
        function markerSet(place) {
            var marker = new google.maps.Marker({
                position: {lat: place.location[0], lng: place.location[1]},
                map: map
            });
            if (place.hasOwnProperty('cityDetails')) {
                var infowindow = new google.maps.InfoWindow({
                    content: renderCityInfo(place.cityDetails)
                });
                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });   
            }
        }
     
        
        /*function newLocation() to use in next fuction block for new map center */
        
        function newLocation(newLat, newLng) {
            map.setCenter({
                lat: newLat,
                lng: newLng
            });
        }

        function setLocationAndZoom(place) {
            map.setCenter({
                lat: place.location[0],
                lng: place.location[1]
            });
            map.setZoom(4);
            markerSet(place);
        }
        
        function renderAttractions(attractions) {
            return '<h2>Our recommendation:</h2>' +
                '<ul><li>' + attractions.join('</li><li>') + '</li></ul>';
        }
        
        function optionsRender(options, $selectElement) {
            $selectElement.append(
                $('<option></option>')
                    .attr('selected', 'selected')
                    .text('Choose...')
            );
            options.forEach(function(element) {
                $selectElement.append($('<option></option>')
                    .attr('value', element.id)
                    .text(element.text)); 
            });
        }
        
        function renderContinents(continents, $selectElement) {
            optionsRender(continents.map((d) => {
                d.text = d.continentName;
                d.id = d.continentId;
                return d;
            }), $selectElement);
        }
        
        function renderCities(cities, $selectElement) {
            optionsRender(cities, $selectElement);
        }
        
        function getPlacesType(value) {
            if (value === 1) {
                return 'attractions';
            }
            else if (value === 2) {
                return 'hotels';
            }
            return 'restaurants';
        }
        
        // set different zoom on each map
        renderContinents(data, continentSelect);
        
        /*function to change each continent from dropdown menu to new location */
        continentSelect.on('change', function() {
            placesTypeSelect.val(0);
            citySelect.empty();
            listMenu.empty();
            selectedCity = null; // reset the selected city
            var value = parseInt(continentSelect.val(), 10);
            selectedContinent = data.find((d) => {
                return d.continentId === value;
            });
            renderCities(selectedContinent.cities.map((d) => {
                d.id = d.cityId;
                d.text = d.cityName;
                return d;
            }), citySelect);
            setLocationAndZoom(   selectedContinent,
                selectedContinent
            );
            
            citySelect.on('change', function () {
                placesTypeSelect.val(0);
                listMenu.empty();
                var value = parseInt(citySelect.val(), 10);
                selectedCity = selectedContinent.cities.find((d) => {
                    return d.cityId === value;
                });
                setLocationAndZoom(selectedCity);
            });
        });
        
        placesTypeSelect.on('change', function() {
            if (selectedCity) {
                listMenu.empty();
                var value = parseInt(placesTypeSelect.val(), 10);
                var placesType = getPlacesType(value);
                listMenu.append(renderAttractions(selectedCity[placesType]));
            }
        });
    });
});


//script help make search box functional
$('#pac-input').on('click', function(){

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
        
});
      