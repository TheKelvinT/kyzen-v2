$(".share-popup").click(function () {
  var window_size = "width=585,height=511";
  var url = this.href;
  var domain = url.split("/")[2];
  switch (domain) {
    case "www.facebook.com":
      window_size = "width=585,height=368";
      break;
    case "www.twitter.com":
      window_size = "width=585,height=261";
      break;
    case "plus.google.com":
      window_size = "width=517,height=511";
      break;
  }
  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes," + window_size
  );
  return false;
});

$(() =>
  $("#ShareButton").on("click", () =>
    navigator.clipboard.writeText(window.location.href)
  )
);

function copy() {
  var Url = document.getElementById("box");
  Url.value = window.location.href;
  Url.focus();
  Url.select();
  document.getElementById("custom-tooltip").style.display = "inline";
  document.execCommand("copy");
  setTimeout(function () {
    document.getElementById("custom-tooltip").style.display = "none";
  }, 1000);
}

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

$(document).ready(function () {
  $('[data-bs-toggle="popover"]').popover({
    placement: "bottom",
    delay: {
      show: 500,
      hide: 100,
    },
  });

  $('[data-bs-toggle="popover"]').click(function () {
    setTimeout(function () {
      $(".popover").fadeOut("slow");
    }, 3000);
  });
});
