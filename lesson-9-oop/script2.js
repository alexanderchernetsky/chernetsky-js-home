'use strict';

function isPal(someString) {
  function trim(item) {
    return item.trim();
  }
  var auxArr = someString.toLowerCase().split('').map(trim);
  var processedStr = auxArr.join('');
  var reverseStr = auxArr.reverse().join('');
  return reverseStr === processedStr;
}

module.exports = isPal;
