$(document).ready(function () {
  ("use strict");

  const images = document.querySelectorAll(".contact-slider");

  let activeIndex = 0;

  function activateNextImage() {
    if (images[activeIndex].classList.contains("active")) {
      images[activeIndex].classList.remove("active");
      images[activeIndex].style.display = "none";
      activeIndex++;
      if (activeIndex >= images.length) {
        activeIndex = 0;
      }
      images[activeIndex].classList.add("active");
      images[activeIndex].style.display = "block";
    } else {
      images[activeIndex].classList.add("active");
      images[activeIndex].style.display = "block";
    }
  }

  setInterval(activateNextImage, 3000);
});
