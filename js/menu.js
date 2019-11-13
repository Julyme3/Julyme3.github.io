'use strict';

(function() {

  var btn = document.querySelector('.j-hamburger');
  var menu = document.querySelector('.j-menu');

  if (btn) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('is-active');
      menu.classList.toggle('show');
    });
  }
})();
