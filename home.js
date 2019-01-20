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


function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 45.4857, lng:-73.5957}
        });
        directionsDisplay.setMap(map);

        document.getElementById('submit').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var waypts = [];
        var checkboxArray = document.getElementById('waypoints');
        for (var i = 0; i < checkboxArray.length; i++) {
          if (checkboxArray.options[i].selected) {
            waypts.push({
              location: checkboxArray[i].value,
              stopover: true
            });
          }
        }

        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }









function initMap() {
  // Map options
  var options = {
    zoom: 10.5,
    center: {lat:45.5510, lng:-73.6550} //Montreal
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //Imports directionService
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map,
    panel: document.getElementById('right-panel')
  });

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  };
}

