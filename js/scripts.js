$(window).scroll(function () {
    var wScroll = $(window).scrollTop();
    $(".bg").css({
        "transform": "translate(0,-" + wScroll / 2 + "px)"
    });
});

$(".menuButton").click(function() {
    $("nav").animate({
        top: 0
    });
});

function emailMe(address) {
    window.open("mailto:" + address + "@english-now.com");
}
