$(".scroll_to_top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

$(window).scroll(function() {
  $(".top_content").css("opacity", 1 - $(window).scrollTop() / 400);
});

window.sr = ScrollReveal();
sr.reveal('.features_block_img', { duration: 500 });

$(".mobile_menu_icon").click(function () {
  $(".mobile_links").toggleClass("mobile_links_open");
});
