'use strict';

function multiplyNumeric(obj) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}

module.exports = multiplyNumeric;
