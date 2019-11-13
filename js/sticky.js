'use stricr';

(function() {
  var nav = document.querySelector('.j-nav');

  window.stickyEl = function(el) {

    if (window.pageYOffset > el.offsetTop) {
      el.classList.add('sticky');
    } else {
      el.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', function() {
      stickyEl(nav);
  });
})();
