'use strict';

function anClean(arg) {
  var newArr = [];
  var auxiliaryArr = [];

  for (var key of arg) {
    var oneOfValues = key.toLowerCase().split('').sort().join('');
    if (auxiliaryArr.indexOf(oneOfValues) === -1) {
      auxiliaryArr.push(oneOfValues);
      newArr.push(key);
    }
  }
  return newArr;
}

module.exports = anClean;
