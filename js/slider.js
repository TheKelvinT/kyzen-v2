$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 1,
  nav: true,
  smartSpeed: 800,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-chevron-left' ></i>",
    "<i class='bx bx-chevron-right' ></i>",
  ],
  responsive: {
    0: {
      items: 2,
      center: true,
    },
    767: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
