$(document).ready(function() {
    // STICKY NAV AT ABOUT US
    // $('.js--aboutUs').waypoint(function(direction) {
    //     if(direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // }, {
    //     offset: '60px'
    // })

    // MOBILE NAVIGATION
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);

        // change button icon on click
        if(icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
        
    });

});