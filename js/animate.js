'use strict';

(function () {
  var fragment = document.createDocumentFragment();
  var word = document.querySelector('.j-title-first');
  var arrOfLetters = word.innerHTML;
  word.innerHTML = "";
  arrOfLetters = arrOfLetters.split("");
  var delay = 0.2;

  for (var i = 0; i < arrOfLetters.length; i++) {
    var span = document.createElement("span");
    span.className = "letter";
    span.textContent  = arrOfLetters[i];
    span.style.animationDelay = (delay * i) + 's';
    fragment.appendChild(span);
  }
  word.appendChild(fragment);
  word.style.opacity = '1';

})();
