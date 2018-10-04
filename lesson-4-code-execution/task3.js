'use strict';

var userNumbers = [];
var userNumb = prompt('введите число', '');

while ((userNumb !== null) && (userNumb !== '') && (isNaN(userNumb) === false) ) {
  userNumbers.push(userNumb);
  userNumb = prompt('введите число', '');
}

console.log(userNumbers);

var sum = 0;

for (var i = 0; i < userNumbers.length; i++) {
  sum += +userNumbers[i];
}

console.log(sum);
