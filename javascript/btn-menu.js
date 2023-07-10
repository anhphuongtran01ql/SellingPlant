$(document).ready(function () {

  let btnMobile = $('#btn-mobile'),
  headerMenu = $('.header-menu');

  btnMobile.click(()=>{
    btnMobile.toggleClass("active");
    headerMenu.toggleClass("active");
  })
});
