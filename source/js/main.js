'use strict';

document.documentElement.classList.remove('no-js');

/* Аккордеон */

var mql = window.matchMedia('(max-width: 767px)');

if (mql.matches) {
  var acc = document.querySelectorAll('.js-toggle-accordion');

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function (evt) {
      var parentEl = evt.currentTarget.parentElement;

      if (parentEl.classList.contains('active')) {
        parentEl.classList.remove('active');
      } else {
        document.querySelectorAll('.accordion').forEach(function (panel) {
          panel.classList.remove('active');
        });
        evt.currentTarget.parentElement.classList.add('active');
      }
    });
  }
}

/* Модальное окно */

function documentReady() {
  var link = document.querySelector('.page-header__link');
  var popup = document.querySelector('.modal');
  var popupOverlay = document.querySelector('.modal-overlay');
  var close = popup.querySelector('.modal__close-button');
  var form = popup.querySelector('.modal-form');
  var name = popup.querySelector('[name=your-name]');
  var phone = popup.querySelector('[name=your-phone]');
  var question = popup.querySelector('[name=yourquestion]');

  var isStorageSupport = true;
  var storage;

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOverlay.classList.add('modal-overlay--show');
    popup.classList.add('modal-show');
    if (storage) {
      name.value = storage;
      phone.focus();
    } else {
      if (isStorageSupport) {
        name.focus();
      }
    }
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    close.focus();
    popupOverlay.classList.remove('modal-overlay--show');
    popup.classList.remove('modal-show');
  });

  popupOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOverlay.classList.remove('modal-overlay--show');
    popup.classList.remove('modal-show');
  });

  form.addEventListener('submit', function (evt) {
    if (!name.value || !phone.value || !question.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('modal-show')) {
        evt.preventDefault();
        popupOverlay.classList.remove('modal-overlay--show');
        popup.classList.remove('modal-show');
      }
    }
  });
}

/* Маска для телефона */

document.addEventListener('DOMContentLoaded', documentReady);

var inp = document.querySelectorAll('[name=your-phone]');
var j = 0;
var old = 0;

for (j = 0; j < inp.length; j++) {
  inp[j].addEventListener('click', function (evt) {
    evt.currentTarget.value = '+7';
  });

  inp[j].addEventListener('keyup', function (e) {
    e.currentTarget.value = e.currentTarget.value.replace(/[^\d+()-]/g, '');
  });

  inp[j].addEventListener('keydown', function (evt) {
    var curLen = evt.currentTarget.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen === 2) {
      evt.currentTarget.value = evt.currentTarget.value + '(';
    }

    if (curLen === 6) {
      evt.currentTarget.value = evt.currentTarget.value + ')-';
    }

    if (curLen === 11) {
      evt.currentTarget.value = evt.currentTarget.value + '-';
    }

    if (curLen === 14) {
      evt.currentTarget.value = evt.currentTarget.value + '-';
    }

    if (curLen > 16) {
      evt.currentTarget.value = evt.currentTarget.value.substring(0, evt.currentTarget.value.length - 1);
    }

    old++;
  });
}
