'use strict';
var navFooter = document.querySelector('.footer-nav');
var navToggle = document.querySelector('.footer-nav__title--toggle');

navFooter.classList.remove('footer-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navFooter.classList.contains('footer-nav--closed')) {
    navFooter.classList.remove('footer-nav--closed');
    navFooter.classList.add('footer-nav--opened');
  } else {
    navFooter.classList.add('footer-nav--closed');
    navFooter.classList.remove('footer-nav--opened');
  }
});
