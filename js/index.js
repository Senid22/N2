// JQuery Code
$(document).ready(function () {

    $("#side-menu").hover(function(){
        $("#side-menu").addClass("opened");
        $(".side-nav").removeClass("justify-content-center");
    }, function () {
        $(".side-nav").addClass("justify-content-start");
        $("#side-menu").removeClass("opened");
    });

});