$(document).ready(function () {
  ("use strict");

  var index = 0;

  const changeEvent = () => {
    var elements = document.getElementsByClassName("news-event");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    index++;

    index > elements.length ? (index = 1) : {};

    elements[index - 1].style.cssText =
      "display:flex;justify-content:center; align-items:center";

    setTimeout(changeEvent, 5000);
  };

  changeEvent();
});
