$(function () {
  $('#header').load("html/header.html");
  $('#footer').load("html/footer.html");

  $('#icon-home').hover (function () {
    console.log('mouseenter');
    $(this).attr('src', 'html/images/icon-world.png');
  }, function () {
    $(this).attr('src', 'html/images/icon-world-inverse.png');
  });

});