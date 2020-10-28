'use strict';
function documentReady() {
  var link = document.querySelector('.page-header__link');
  var popup = document.querySelector('.modal');
  var close = popup.querySelector('.form__close-button');
  var form = popup.querySelector('.modal-form');
  var name = popup.querySelector('[name=yourname]');
  var phone = popup.querySelector('[name=yourphone]');
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
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
  });

  form.addEventListener('submit', function (evt) {
    if (!name.value || !phone.value || !question.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
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
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', documentReady);
