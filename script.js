const collapseEl = document.getElementById("collapsibleNavId");
const navbar = document.querySelector(".second-Navbar");

collapseEl.addEventListener("show.bs.collapse", () => {
  navbar.classList.add("show-navbar");
});

collapseEl.addEventListener("hide.bs.collapse", () => {
  navbar.classList.remove("show-navbar");
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});
