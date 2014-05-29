$(function () {
  $('#footer').load("html/footer.html");
  $('#header').load("html/header.html", function () {
    $('#icon-home').hover (function () {
      $(this).attr('src', 'html/images/icon-world.png');
    }, function () {
      $(this).attr('src', 'html/images/icon-world-inverse.png');
    });
  });
});