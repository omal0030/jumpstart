$(document).ready(function(){
  $(".banner").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });

  var header = $("#header");
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      header.fadeOut(1000);
    }
    if (st < lastScrollTop) {
      header.fadeIn(1000);
    };
    lastScrollTop = st;
  });
});
