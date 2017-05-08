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

window.sr = ScrollReveal();
sr.reveal('.features_block_img', { duration: 500 });
