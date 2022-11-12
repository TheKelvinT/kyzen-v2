Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,

  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },
  showClass: "fancybox-zoomIn",
  hideClass: "fancybox-zoomOut",

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});

// Get all images
var $images = $(".imglist img");

// Create and populate array containing gallery objects for fancybox
var fancyGroup = [];

$images.each(function (index, item) {
  fancyGroup.push({
    src: item.src,
    type: "image",
    // Little trick to make zoom effect work.
    // If each image already has own wrapping element,
    // then remove `wrap('<span />')`
    $orig: $(item).wrap("<span />").parent(),
  });
});

// Add click event that starts fancybox using custom gallery items
$(".imglist img").click(function () {
  $.fancybox.open(
    fancyGroup,
    {
      // Custom options
    },
    $images.index(this)
  );
});
