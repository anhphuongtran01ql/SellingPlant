$(document).ready(function () {
  ("use strict");
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
    logo.classList.toggle("logo-wrapper-none");

    btn_open_menu.style.display = "none";
    btn_close_menu.classList.toggle("active");
  };

  btn_close_menu.onclick = function () {
    closeMenu();
    header_tag.classList.toggle("header-mobile");
    header_container.classList.remove("header-container-mobile-menu");
    header_container.classList.toggle("header-container-mobile-close");
    logo.classList.remove("logo-wrapper-none");

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
});
