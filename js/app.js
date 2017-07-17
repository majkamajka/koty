import "../scss/style.scss";

$(function() {

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
//
//
// var config = {
//   apiKey: "AIzaSyBD5bKLZyfDUTHWSQrMdOU6Z6tsreYaak4",
//   authDomain: "koty-c79fd.firebaseapp.com",
//   databaseURL: "https://koty-c79fd.firebaseio.com",
//   projectId: "koty-c79fd",
//   storageBucket: "koty-c79fd.appspot.com",
//   messagingSenderId: "511321533732"
// };
// firebase.initializeApp(config);


  // filter.on("click", () => {
  //   filterMenu.toggleClass("slide");
  //   filterForm.toggleClass("slide");
  // });


  const bannerX = $("#banner i"); //index.html banner
  const filterClick = $(".filter-click");
  let filterArrow = $(filterClick).find("i");
  //const filterMenu = $()
  console.log(filterArrow);



  bannerX.on("click", () => {
    $(banner).addClass("hidden");
  });

  filterClick.on("click", () => {
    if ($(filterArrow).hasClass("fa-arrow-circle-down")) {
      $(filterArrow).removeClass("fa-arrow-circle-down").addClass("fa-arrow-circle-up");

    } else {
      $(filterArrow).removeClass("fa-arrow-circle-up").addClass("fa-arrow-circle-down");
    }

  })





});
