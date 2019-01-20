// var $toTop = $('.scroll');
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100px) {
//         $toTop.fadeIn();
//     } else if ($toTop.is(':visible')) {
//         $toTop.fadeOut();
//     }
// });

// let content = document.getElementsByClassName('dropdownContent');
//


// $(document).ready(function(){
//   $("button").click(function(){
//     $(".explore").toggle());
//   });
// });



$(function() {
    $(".Hotels" ).click(function() {
        $("#dropDownHotels").toggle();
    });

    $(".Attractions" ).click(function() {
        $("#dropDownAttractions").toggle();
    });

    $(".Events" ).click(function() {
        $("#dropDownEvents").toggle();
    });

    $(".Restaurants" ).click(function() {
        $("#dropDownRestaurants").toggle();
    });
});

var markers = [];
var map;

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 45.4857, lng:-73.5957}
  });
  var ritzCarlton = {lat : 45.500, lng: -73.578};
  addMarker(ritzCarlton);
  var leCrystal = {lat:45.497, lng: -73.573};
  addMarker(leCrystal);
  var sofitelMontreal = {lat:45.5015, lng:-73.5774};
  addMarker(sofitelMontreal);
  // markers[2].push(marker);
  var leSaintJames = {lat:45.5027, lng:-73.5596};
  addMarker(leSaintJames);
  // markers[3].push(marker);
  var chateauVaudreuil = {lat:45.4161, lng:-74.0119};
  addMarker(chateauVaudreuil);
  // markers[4].push(marker);
  var mountStephen = {lat:45.4991, lng:-73.5758};
  addMarker(mountStephen);
  // markers[5].push(marker);
  var placeDarmes = {lat:45.5054, lng:-73.5574};
  addMarker(placeDarmes);
  // markers[6].push(marker);
  var gardenInn = {lat:45.5076, lng:-73.5714};
  addMarker(gardenInn);
  // markers[7].push(marker);
  var leDauphin = {lat:45.5043, lng:-73.5622};
  addMarker(leDauphin);
  // markers[8].push(marker);
  var interContinental = {lat:45.5029, lng:-73.5604};
  addMarker(interContinental);
  // markers[9].push(marker);
  // setMapOnAll(null);


  $('#ritz').change(function() {
    if(this.checked) {
      markers[0].setMap(map);
    }
    else{
      markers[0].setMap(null);
    }
  });
  $('#leCrystal').change(function() {
    if(this.checked) {
      markers[1].setMap(map);
    }
    else{
      markers[1].setMap(null);
    }
  });
  $('#sofitelMontreal').change(function() {
    if(this.checked) {
      markers[2].setMap(map);
    }
    else{
      markers[2].setMap(null);
    }
  });
  $('#leSaintJames').change(function() {
    if(this.checked) {
      markers[3].setMap(map);
    }
    else{
      markers[3].setMap(null);
    }
  });
  $('#chateauVaudreuil').change(function() {
    if(this.checked) {
      markers[4].setMap(map);
    }
    else{
      markers[4].setMap(null);
    }
  });
  $('#mountStephen').change(function() {
    if(this.checked) {
      markers[5].setMap(map);
    }
    else{
      markers[5].setMap(null);
    }
  });
  $('#placeDarmes').change(function() {
    if(this.checked) {
      markers[6].setMap(map);
    }
    else{
      markers[6].setMap(null);
    }
  });
  $('#gardenInn').change(function() {
    if(this.checked) {
      markers[7].setMap(map);
    }
    else{
      markers[7].setMap(null);
    }
  });
  $('#leDauphin').change(function() {
    if(this.checked) {
      markers[8].setMap(map);
    }
    else{
      markers[8].setMap(null);
    }
  });
  $('#interContinental').change(function() {
    if(this.checked) {
      markers[9].setMap(map);
    }
    else{
      markers[9].setMap(null);
    }
  });
}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}
  //directionsDisplay.setMap(map);
// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   var waypts = [];
//   var checkboxArray = document.getElementById('waypoints');
//   for (var i = 0; i < checkboxArray.length; i++) {
//     if (checkboxArray.options[i].selected) {
//       waypts.push({
//         location: checkboxArray[i].value,
//         stopover: true
//       });
//     }
//   }
// }
  function geocodePlaceId(geocoder, map, infowindow) {
    var placeId = document.getElementById('cb').value;
    geocoder.geocode({'placeId': placeId}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          map.setZoom(11);
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  // directionsService.route({
  //   origin: document.getElementById('start').value,
  //   destination: document.getElementById('end').value,
  //   waypoints: waypts,
  //   optimizeWaypoints: true,
  //   travelMode: 'DRIVING'
  // }, function(response, status) {
  //   if (status === 'OK') {
  //     directionsDisplay.setDirections(response);
  //     var route = response.routes[0];
  //     var summaryPanel = document.getElementById('directions-panel');
  //     summaryPanel.innerHTML = '';
  //     // For each route, display summary information.
  //     for (var i = 0; i < route.legs.length; i++) {
  //       var routeSegment = i + 1;
  //       summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
  //           '</b><br>';
  //       summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
  //       summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
  //       summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
  //     }
  //   } else {
  //     window.alert('Directions request failed due to ' + status);
  //   }
  // });











// function initMap() {
//   // Map options
//   var options = {
//     zoom: 10.5,
//     center: {lat:45.5510, lng:-73.6550} //Montreal
//   }
//
//   // New Map
//   var map = new google.maps.Map(document.getElementById('map'), options);
//
//   //Imports directionService
//   var directionsService = new google.maps.DirectionsService;
//   var directionsDisplay = new google.maps.DirectionsRenderer({
//     draggable: true,
//     map: map,
//     panel: document.getElementById('right-panel')
//   });
//
//   // Listen for click on map
//   google.maps.event.addListener(map, 'click', function(event) {
//     // Add marker
//     addMarker(event.latLng);
//   });
//   var myLatLong = event.latLng;
//   addMarker({lat: 45.4857, lng:-73.5957});
//
//   // Add marker function
//   function addMarker(coords) {
//     var marker = new google.maps.Marker({
//       position: coords,
//       map: map,
//       // icon:
//     });
//   }

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event) {
    // Add marker
    addMarker(event.latLng);
  });
  var myLatLong = event.latLng;
  addMarker({lat: 45.4857, lng:-73.5957});

  // Add marker function
  function addMarker(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      // icon:
    });
}


//
//   document.getElementById('submit').addEventListener('click', function() {
//     calculateAndDisplayRoute(directionsService, directionsDisplay);
//     });
//   }
//
//   function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     var waypts = [];
//     var checkboxArray = document.getElementByClassName('categories');
//     for (var i = 0; i < checkboxArray.length; i++) {
//       if (checkboxObject.checked) {
//         waypts.push({
//           location: $('.messageCheckbox:checked').val();,
//           stopover: true
//         });
//       }
//     }
//
//     directionsService.route({
//       origin: "montreal, quebec",
//       destination: "montreal, quebec",
//       waypoints: waypts,
//       optimizeWaypoints: true,
//       travelMode: 'DRIVING'
//     }, function(response, status) {
//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//         var route = response.routes[0];
//         var summaryPanel = document.getElementById('directions-panel');
//         summaryPanel.innerHTML = '';
//         // For each route, display summary information.
//         for (var i = 0; i < route.legs.length; i++) {
//           var routeSegment = i + 1;
//           summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
//           summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//           summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//           summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//         }
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     });
//   }
//
// }

