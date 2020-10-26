$(document).ready(function () {
  $("li").hover(
    function () {
      $(this).css("color", "white");
    },
    function () {
      $(this).css("color", "#303030");
    }
  );
});
