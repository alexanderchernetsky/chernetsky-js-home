'use strict';


var userNumbers = [];

do {
  var userNumb = prompt('введите число', '');
  userNumbers.push(userNumb);
} while (userNumbers.length < 3);

console.log(userNumbers);

for (var i = 0; i < userNumbers.length; i++) {
  var sum = sum + userNumbers[i];
}

console.log(sum);
