'use strict';

var userString = prompt('Введите строку', 'Счастье - это самая неопределенная вещь на свете, которая идет по самой дорогой цене.');

if (userString === null) {
  alert('Вы ничего не ввели!');
} else {
  var userStringLowCase = userString.toLowerCase();
  console.log(russianVowelCount(userStringLowCase));
}

function russianVowelCount(string) {
  var userVowelNumber = 0;
  var russianVowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
  for (var i = 0; i <= string.length; i++) {
    var userLetter = string.charAt(i);
    if (russianVowel.indexOf(userLetter) !== -1) {
      userVowelNumber += 1;
    }
  }
  return userVowelNumber;
}
