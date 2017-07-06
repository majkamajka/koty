import "../scss/style.scss";

$(function() {

  const filter = $("#filter");
  const filterMenu = $(".filter-menu");


  filter.on("click", () => {
    filterMenu.toggleClass("hidden");
  });




});
