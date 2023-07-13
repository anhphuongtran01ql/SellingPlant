"use strict";
const displaySliderHomepage = () => {
  var e;
  if (document.querySelector(".owl-carousel")) {
    let t = $(".owl-carousel");
    t.owlCarousel({
      items: 1,
      loop: !0,
      dots: !0,
      dotsEach: 1,
      smartSpeed: 500,
      center: !0,
    }),
      t.trigger("play.owl.autoplay", [4e3]);
  }
};
displaySliderHomepage();
var index = 0;
const displaySliderNewsPage = () => {
  var e = document.getElementsByClassName("news-event");
  if (e) {
    for (let t = 0; t < e.length; t++) e[t].style.display = "none";
    ++index > e.length && (index = 1),
      index > 0 &&
        e[index - 1] &&
        (e[index - 1].style.cssText =
          "display:flex;justify-content:center; align-items:center"),
      setTimeout(displaySliderNewsPage, 5e3);
  }
};
displaySliderNewsPage();
let activeIndex = 0;
const activateNextImage = () => {
  let e = document.querySelectorAll(".contact-slider");
  e &&
    0 !== e.length &&
    (e && e[activeIndex].classList.contains("active")
      ? (e[activeIndex].classList.remove("active"),
        (e[activeIndex].style.display = "none"),
        ++activeIndex >= e.length && (activeIndex = 0),
        e[activeIndex].classList.add("active"),
        (e[activeIndex].style.display = "block"))
      : (e[activeIndex].classList.add("active"),
        (e[activeIndex].style.display = "block")),
    setInterval(activateNextImage, 3e3));
};
activateNextImage();
const handleMenuMobile = () => {
  var e = document.querySelector("header"),
    t = document.querySelector(".header-container"),
    l = document.querySelector(".logo-wrapper"),
    s = document.getElementById("btn-mobile"),
    a = document.getElementById("btn-close");
  function i() {
    document.querySelector(".menu-list").classList.toggle("active");
  }
  function c() {
    document.querySelector(".menu-list").classList.remove("active");
  }
  (s.onclick = function () {
    i(),
      e.classList.toggle("header-mobile"),
      t.classList.remove("header-container-mobile-close"),
      t.classList.toggle("header-container-mobile-menu"),
      l.classList.toggle("mobile-none"),
      (s.style.display = "none"),
      a.classList.toggle("active");
  }),
    (a.onclick = function () {
      c(),
        e.classList.toggle("header-mobile"),
        t.classList.remove("header-container-mobile-menu"),
        t.classList.toggle("header-container-mobile-close"),
        l.classList.remove("mobile-none"),
        (s.style.display = "flex"),
        a.classList.remove("active");
    });
};
handleMenuMobile();
