import "../scss/style.scss";


$(function() {

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");


var config = {
  apiKey: "AIzaSyBD5bKLZyfDUTHWSQrMdOU6Z6tsreYaak4",
  authDomain: "koty-c79fd.firebaseapp.com",
  databaseURL: "https://koty-c79fd.firebaseio.com",
  projectId: "koty-c79fd",
  storageBucket: "koty-c79fd.appspot.com",
  messagingSenderId: "511321533732"
};

let fb = firebase.initializeApp(config);
let db = fb.database();
const resultsDiv = $("#results");
console.log(resultsDiv);

for (var i = 1; i < 5; i++) {
  db.ref(i).on("value", (snap)=>{
      let name = snap.val().name;
      let ageMths = snap.val().ageMonths;
      let features = snap.val().features;
      let desc = snap.val().desc.substring(0, 250) + "...";
      let photoLink = snap.val().photo;
      let catContainer = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'></div>");
      let catCard = $('<div class="tile cat-card"></div>');
      let cardImg = $('<img>');
      let cardName = $('<h1>');
      let cardKeywords = $('<p id="keywords"></p>');
      let cardDesc = $('<p class="cat-short-desc"></p');
      let cardMoreBtn = $('<button class="button more">więcej</button>');

      $(cardImg).attr("src", photoLink);
      $(cardName).text(name);
      $(cardKeywords).text(features);
      $(cardDesc).text(desc);

      $(resultsDiv).append(catContainer);
      $(catContainer).append(catCard);
      $(catCard).append(cardImg).append(cardName).append(cardKeywords).append(cardDesc).append(cardMoreBtn);

  });
}




  const bannerX = $("#banner i"); //index.html banner
  const filterClick = $(".filter-click");
  const filterArrow = $(filterClick).find("i");
  const filterMenu = $("#filter-menu");
  const blackBlend = $(".black-blend");



  bannerX.on("click", () => {
    $(banner).addClass("hidden");
  });

  filterClick.on("click", () => {
    //ogarnąć animacje! .slideToggle()
    $(filterMenu).toggleClass("hidden");
    $(blackBlend).toggleClass("hidden");
    if ($(filterArrow).hasClass("fa-arrow-circle-down")) {
      $(filterArrow).removeClass("fa-arrow-circle-down").addClass("fa-arrow-circle-up");
    } else {
      $(filterArrow).removeClass("fa-arrow-circle-up").addClass("fa-arrow-circle-down");
    }

  });









});
