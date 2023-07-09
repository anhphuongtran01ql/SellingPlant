$(document).ready(function () {
  ("use strict");
  var header_tag = document.querySelector("header");
  var header = document.querySelector(".header-container");
  var logo = document.querySelector(".logo-wrapper");
  var btn_open_menu = document.getElementById("btn-mobile");
  var btn_close_menu = document.getElementById("btn-close");
  btn_open_menu.onclick = function () {
    toggleMenu();
    logo.style.display = "none";
    btn_open_menu.style.display = "none";
    header.style.cssText = "justify-content: center;";
    header_tag.style.backgroundColor = "var(--button-color)";
    btn_close_menu.classList.toggle("active");
  };

  btn_close_menu.onclick = function () {
    closeMenu();
    logo.style.display = "flex";
    btn_open_menu.style.display = "flex";
    header.style.cssText = "justify-content: space-between;";
    header_tag.style.backgroundColor = "var(--button-normal-color)";
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
