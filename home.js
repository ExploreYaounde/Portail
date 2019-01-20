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
  // Map options
  var options = {
    zoom: 10.5,
    center: {lat:45.5510, lng:-73.6550}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event) {
    // Add marker
    addMarker(event.latLng);
  });

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
