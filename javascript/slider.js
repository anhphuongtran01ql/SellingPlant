$(document).ready(function () {
  ("use strict");
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    dotsEach: 1,
    smartSpeed: 500,
    center: true,
  });
  owl.trigger("play.owl.autoplay", [4000]);
});
