$(document).ready(function() {
    $(".page-logo").on("mouseenter", function() {
        $(this).addClass("animated swing");
    });
    $(".page-logo").on("mouseleave", function() {
        $(this).removeClass("animated swing");
    });
});
