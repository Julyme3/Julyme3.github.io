var link = document.querySelector(".search-title-link");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var datein = popup.querySelector("[name=datein]");
var dateout = popup.querySelector("[name=dateout]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("search-form-show");
});

form.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value) {
    event.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  } 
});