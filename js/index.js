$(document).ready(function() {
    $(".menu-btn").click(function() {
        $("header").toggleClass("mobilemenu-active");
        $(".menu-btn").toggleClass("humburger-active");
    });
});
var scroll_pos = 0;
$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
        $("header").addClass("fixed");
        $("header").css("background-color", "#4d8dff");
    } else {
        $("header").css("background-color", "");
        $("header").removeClass("fixed overlay");
    }
});