setInterval(function () {
  header_move = $("body").scrollTop();
  if (header_move > 0) {
    $("header").addClass("header");
    $(".header_content").addClass("header");
    $(".logo").addClass("logo_mini");
  }
  else {
    $("header").removeClass("header");
    $(".header_content").removeClass("header");
    $(".logo").removeClass("logo_mini");
  }
}, 100);

$(".top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 200);
});

$(window).scroll(function() {
  $(".top_content").css("opacity", 1 - $(window).scrollTop() / 400);
});

var images = ["./img/webbern.png", "./img/animated.jpg", "./img/hej.jpg"];
var i = 0;
$(".top").attr("data-image-src", images[i]);

$("#slide_left").click(function() {
  if (i > 0) {
    i = i - 1
    $(".top").attr("data-image-src", images[i]);
  }
});

$("#slide_right").click(function() {
  if (i < images.length-1) {
    i = i + 1
    $(".top").attr("data-image-src", images[i]);
  }
});
