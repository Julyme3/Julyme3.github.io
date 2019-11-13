var link = document.querySelector(".btn-map");
var popup = document.querySelector(".popup-map");
var popupmap = document.querySelector(".popup-overlay-map");
var linkclose = popup.querySelector(".popup-map-close");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("popup-map-show");
  popupmap.classList.add("popup-overlay-show");
});
linkclose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-map-show");
    popupmap.classList.remove("popup-overlay-show");
});