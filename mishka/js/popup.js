var btn = document.querySelector(".card-product__btn");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".popup-overlay");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup--show");
  overlay.classList.add("popup-overlay--show");
  });

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
  overlay.classList.remove("popup-overlay--show");
  });
