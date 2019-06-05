$(document).ready(function() {
    $(".page-logo").on("mouseenter", function() {
        $(this).addClass("animated swing");
    });
    $(".page-logo").on("mouseleave", function() {
        $(this).removeClass("animated swing");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $("nav").addClass("fixed-header");
            $(".fixed-header").css("color", "red");
        } else {
            $("nav").removeClass("fixed-header");
        }
    });
});
