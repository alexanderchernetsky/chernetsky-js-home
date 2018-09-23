'use strict';

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(sum(1)(2));
console.log(sum(5)(-1));


