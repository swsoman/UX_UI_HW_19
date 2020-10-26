$(document).ready(function () {
  $("nav li").hover(
    function () {
      $(this).css("color", "white");
    },
    function () {
      $(this).css("color", "#303030");
    }
  );

  // softscroll //
  $("#aboutlink").on("click", function () {
    document.querySelector("#About").scrollIntoView({
      behavior: "smooth",
    });
  });

  $("#contactlink").on("click", function () {
    document.querySelector("#contactMe").scrollIntoView({
      behavior: "smooth",
    });
  });
  // background image animation  //
  $(".socialMediaFooter img").hover(
    function () {
      $(this).animate({ width: "45px", height: "45px" }, "fast");
    },
    function () {
      $(this).animate({ width: "40px", height: "40px" }, "fast");
    }
  );
  // footer image animation  //
  $(".socialMediaFooter1 img").hover(
    function () {
      $(this).animate({ width: "55px", height: "55px" }, "fast");
    },
    function () {
      $(this).animate({ width: "50px", height: "50px" }, "fast");
    }
  );
  // Accordion for tools //
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
