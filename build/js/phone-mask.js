'use strict';
var inp = document.querySelectorAll('[name=your-phone]');
var i = 0;
var old = 0;

for (i = 0; i < inp.length; i++) {
  inp[i].addEventListener('click', function (evt) {
    evt.currentTarget.value = '+7';
  });

  inp[i].addEventListener('keydown', function (evt) {
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

// inp.onclick = function () {
//   inp.value = '+7';
// };

// var old = 0;

// inp.onkeydown = function () {
//   var curLen = inp.value.length;

//   if (curLen < old) {
//     old--;
//     return;
//   }

//   if (curLen === 2) {
//     inp.value = inp.value + '(';
//   }

//   if (curLen === 6) {
//     inp.value = inp.value + ')-';
//   }

//   if (curLen === 11) {
//     inp.value = inp.value + '-';
//   }

//   if (curLen === 14) {
//     inp.value = inp.value + '-';
//   }

//   if (curLen > 16) {
//     inp.value = inp.value.substring(0, inp.value.length - 1);
//   }
//   old++;
// };
