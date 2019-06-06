$(".wod-article").on("mouseenter", function() {
    $(this).addClass("wod-triangle active");
});
$(".wod-article").on("mouseleave", function() {
    $(this).removeClass("wod-triangle active");
});
