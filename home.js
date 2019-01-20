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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


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
