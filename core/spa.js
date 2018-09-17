$(function() {
    setListener();
});

var setListener = function() {
    $("#spa-nav a").click(function() {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        var hash = $(this).attr("data-page");
        window.location.hash = hash;
    });

    $("#spa-btn button.btn-back").click(function() {
        if (!Router.back()) {
            $(this).addClass("btn-unable");
        }
    });

    $("#spa-btn button.btn-refresh").click(function() {
        Router.refresh();
    });
}