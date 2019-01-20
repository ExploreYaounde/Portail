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
