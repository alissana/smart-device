'use strict';

var mql = window.matchMedia('(max-width: 767px)');

if (mql.matches) {
  var acc = document.querySelectorAll('.accordion');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function (evt) {
      evt.currentTarget.classList.toggle('active');

      var panel = evt.currentTarget.nextElementSibling;
      panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });
  }
}
