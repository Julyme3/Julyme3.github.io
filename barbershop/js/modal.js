var linklogin = document.querySelector(".login");
var modal = document.querySelector(".user-login");
var popupuser = document.querySelector(".popup-overlay-user");
var closeuser = document.querySelector(".user-login-close");
linklogin.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("user-login-show");
  popupuser.classList.add("popup-overlay-show");
});

closeuser.addEventListener("click", function(event) {
    event.preventDefault(); {
      if (modal.classList.contains("user-login-show") &&
       popupuser.classList.contains("popup-overlay-show")) {
       modal.classList.remove("user-login-show");
       popupuser.classList.remove("popup-overlay-show");
      }
    }
});