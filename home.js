var $toTop = $('.scroll');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100px) {
        $toTop.fadeIn();
    } else if ($toTop.is(':visible')) {
        $toTop.fadeOut();
    }
});
