// JQuery Code
$(document).ready(function () {

    // Side menu slide-in-left
    $("#side-menu").hover(function(){
        $("#side-menu").addClass("opened");
        $(".side-nav").removeClass("justify-content-center");
    }, function () {
        $(".side-nav").addClass("justify-content-start");
        $("#side-menu").removeClass("opened");
    });

    // Header Shadow on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#site-header").addClass("scrolled");
        }
        else {
            $("#site-header").removeClass("scrolled");
        }
    });

});