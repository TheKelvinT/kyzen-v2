const icon = "<i class='bx bxs-home me-3'></i>";

$(".list-group-item").hover(
  function () {
    $(this).prepend($(icon));
  },
  function () {
    $(this).find("i").last().remove();
  }
);
