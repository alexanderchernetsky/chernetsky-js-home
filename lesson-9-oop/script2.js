'use strict';

function isPal(someString) {
  function trim(item) {
    return item.trim();
  }

  var reverseStr = someString.toLowerCase().split('').map(trim).reverse().join('');

  return reverseStr === someString.toLowerCase().split('').map(trim).join('');
}

module.exports = isPal;
