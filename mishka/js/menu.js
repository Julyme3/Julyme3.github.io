var btn = document.querySelector(".main-navigation__btn-burger");
var menu = document.querySelector(".main-navigation");

menu.classList.remove("main-navigation--nojs");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-navigation--closed")) {
    menu.classList.remove("main-navigation--closed");
    menu.classList.add("main-navigation--opened");
  } else {
    menu.classList.add("main-navigation--closed");
    menu.classList.remove("main-navigation--opened");
    }
});
