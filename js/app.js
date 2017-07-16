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
  const filterForm = filterMenu.find("form");
  const header = $("header");
  const hamburger = $("#hamburger");
  const hamburgerMenu = $(".hamburger-menu");
  const logo = $("#logo");
  let headerHeight = header.height() + "px";
  console.log(headerHeight);
  $(header).find("h1").css("lineHeight", headerHeight);
  $(logo).css("height" , headerHeight)

  filter.on("click", () => {
    filterMenu.toggleClass("slide");
    filterForm.toggleClass("slide");
  });

  hamburger.on("click", () => {
    hamburgerMenu.toggleClass("slide");
    console.log("dsda");
  });

$(window).on("resize", (() => {
  headerHeight = header.height() + "px";
  $(header).find("h1").css("lineHeight", headerHeight);

}));






});
