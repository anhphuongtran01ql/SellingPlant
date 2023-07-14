"use strict";

const displaySliderHomepage = () => {
  var element = document.querySelector(".owl-carousel");

  if (element) {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      dotsEach: 1,
      smartSpeed: 500,
      center: true,
    });
    owl.trigger("play.owl.autoplay", [4000]);
  }
};

displaySliderHomepage();

var index = 0;
const displaySliderNewsPage = () => {
  var elements = document.getElementsByClassName("news-event");

  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    index++;

    index > elements.length ? (index = 1) : {};

    if (index > 0 && elements[index - 1]) {
      elements[index - 1].style.cssText =
        "display:flex;justify-content:center; align-items:center";
    }

    setTimeout(displaySliderNewsPage, 5000);
  }
};

displaySliderNewsPage();

let activeIndex = 0;

const activateNextImage = () => {
  const images = document.querySelectorAll(".contact-slider");

  if (images && images.length !== 0) {
    if (images && images[activeIndex].classList.contains("active")) {
      images[activeIndex].classList.remove("active");
      images[activeIndex].style.display = "none";
      activeIndex++;
      if (images && activeIndex >= images.length) {
        activeIndex = 0;
      }
      images[activeIndex].classList.add("active");
      images[activeIndex].style.display = "block";
    } else {
      images[activeIndex].classList.add("active");
      images[activeIndex].style.display = "block";
    }
    setTimeout(activateNextImage, 3000);
  }
};

activateNextImage();

const handleMenuMobile = () => {
  var header_tag = document.querySelector("header");
  var header_container = document.querySelector(".header-container");
  var logo = document.querySelector(".logo-wrapper");
  var btn_open_menu = document.getElementById("btn-mobile");
  var btn_close_menu = document.getElementById("btn-close");

  btn_open_menu.onclick = function () {
    toggleMenu();
    header_tag.classList.toggle("header-mobile");
    header_container.classList.remove("header-container-mobile-close");
    header_container.classList.toggle("header-container-mobile-menu");
    logo.classList.toggle("mobile-none");

    btn_open_menu.style.display = "none";
    btn_close_menu.classList.toggle("active");
  };

  btn_close_menu.onclick = function () {
    closeMenu();
    header_tag.classList.toggle("header-mobile");
    header_container.classList.remove("header-container-mobile-menu");
    header_container.classList.toggle("header-container-mobile-close");
    logo.classList.remove("mobile-none");

    btn_open_menu.style.display = "flex";
    btn_close_menu.classList.remove("active");
  };

  function toggleMenu() {
    var menu = document.querySelector(".menu-list");
    menu.classList.toggle("active");
  }

  function closeMenu() {
    var menu = document.querySelector(".menu-list");
    menu.classList.remove("active");
  }
};

handleMenuMobile();
