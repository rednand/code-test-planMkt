$(document).ready(function () {
  $("a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const $simpleCarousel = document.querySelector(".js-carousel--simple");
new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});

function openNav() {
  document.querySelector("#mobile-nav").style.width = "35%";
}
function closeNav() {
  document.querySelector("#mobile-nav").style.width = "0%";
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
