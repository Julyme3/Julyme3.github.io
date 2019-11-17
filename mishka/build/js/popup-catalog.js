var popup = document.querySelector(".popup");
var overlay = document.querySelector(".popup-overlay");
var cart = document.getElementsByClassName("product-item__icon-cart");

cart[0].addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Ok")
  popup.classList.add("popup--show");
  overlay.classList.add("popup-overlay--show");
});

cart[1].addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Ok")
  popup.classList.add("popup--show");
  overlay.classList.add("popup-overlay--show");
});

cart[2].addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Ok")
  popup.classList.add("popup--show");
  overlay.classList.add("popup-overlay--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
  overlay.classList.remove("popup-overlay--show");
});
