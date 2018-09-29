'use strict';

function isPal(someString) {
  var lowStr = someString.toLowerCase();
  var trimedStr = '';
  for (var key of lowStr) {
    trimedStr += key.trim();
  }

  var reverseStr = trimedStr.split('').reverse().join('');

  return reverseStr === trimedStr;
}

module.exports = isPal;
