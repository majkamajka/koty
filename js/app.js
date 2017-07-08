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
firebase.initializeApp(config);

  const filter = $("#filter");
  const filterMenu = $(".filter-menu");
  const header = $("header");



  filter.on("click", () => {
    filterMenu.toggleClass("hidden");
  });

$(window).on("resize", (() => {
  let headerHeight = header.height() + "px";
  console.log(headerHeight);
  $(header).find("h1").css("lineHeight", headerHeight);
}));


});
