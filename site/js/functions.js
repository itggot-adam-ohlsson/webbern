$(".top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 200);
});

$(window).scroll(function() {
  $(".top_content").css("opacity", 1 - $(window).scrollTop() / 400);
});

window.sr = ScrollReveal();
sr.reveal('.features_block_img', { duration: 500 });
