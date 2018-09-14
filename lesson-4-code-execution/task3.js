'use strict';


var userNumbers = [];

do {
  var userNumb = prompt('введите число', '');
  userNumbers.push(userNumb);
} while (userNumbers.length < 3);

console.log(userNumbers);

var sum = 0;

for (var i = 0; i < userNumbers.length; i++) {
  sum += +userNumbers[i];
}

console.log(sum);
