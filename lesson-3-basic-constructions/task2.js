'use strict';

function userAnswerValidation(string) {
  var prohibitedSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];
  if ((string === null) || (string === '')) {
    return 'nothing entered';
  }
  for (var i = 0; i <= string.length; i++) {
    var userSymbol = string.charAt(i);
    if (prohibitedSymbols.indexOf(userSymbol) !== -1) {
      return 'validation failed';
    }
  }
  return 'validation success';
}

var firstName = prompt('Введите вашe имя:', 'Гадя');

do  {
  if (userAnswerValidation(firstName) === 'nothing entered') {
    do {
      firstName = prompt('Вы ничего не ввели! Пожалуйста введите вашe имя:', 'Гадя');
    } while (userAnswerValidation(firstName) === 'nothing entered');
  }

  if (userAnswerValidation(firstName) === 'validation failed') {
    do {
      firstName = prompt('Вы ввели имя неверно! Имя не может содержать цифры и пробелы! Пожалуйста введите вашe имя:', 'Гадя');
    } while (userAnswerValidation(firstName) === 'validation failed');
  }
} while (userAnswerValidation(firstName) !== 'validation success');

var secondName = prompt('Введите ваше отчество:', 'Петрович');

do  {
  if (userAnswerValidation(secondName) === 'nothing entered') {
    do {
      secondName = prompt('Вы ничего не ввели! Пожалуйста введите вашe отчество:', 'Петрович');
    } while (userAnswerValidation(secondName) === 'nothing entered');
  }

  if (userAnswerValidation(secondName) === 'validation failed') {
    do {
      secondName = prompt('Вы ввели отчество неверно! Отчество не может содержать цифры и пробелы! Пожалуйста введите вашe отчество:', 'Петрович');
    } while (userAnswerValidation(secondName) === 'validation failed');
  }
} while (userAnswerValidation(secondName) !== 'validation success');

var lastName = prompt('Введите вашу фамилию:', 'Хренова');

do  {
  if (userAnswerValidation(lastName) === 'nothing entered') {
    do {
      lastName = prompt('Вы ничего не ввели! Пожалуйста введите вашу фамилию:', 'Хренова');
    } while (userAnswerValidation(lastName) === 'nothing entered');
  }

  if (userAnswerValidation(lastName) === 'validation failed') {
    do {
      lastName = prompt('Вы ввели фамилию неверно! Фамилия не может содержать цифры и пробелы! Пожалуйста введите вашу фамилию:', 'Хренова');
    } while (userAnswerValidation(lastName) === 'validation failed');
  }
} while (userAnswerValidation(lastName) !== 'validation success');

var fullYears = parseInt(prompt('Сколько вам лет:', ''), 10);


var gender = confirm('Ваш пол - мужской?');
var pension = false;

if (gender && (fullYears >= 63)) {
  pension = true;
} else if (!gender && (fullYears >= 58)) {
  pension = true;
}

var fullName = firstName + ' ' + secondName + ' ' + lastName;
var ageInDays = Math.floor(fullYears * 365.2425);
var futureYears = fullYears + 5;

gender = (gender) ? 'мужской' : 'женский';
pension = (pension) ? 'да' : 'нет';

var finalMessage = 'ваше ФИО: ' + fullName + '\n' +
    'ваш возраст в годах: ' + fullYears + '\n' +
    'ваш возраст в днях: ' + ageInDays + '\n' +
    'через 5 лет вам будет: ' + futureYears + '\n' +
    'ваш пол: ' + gender + '\n' +
    'вы на пенсии: ' + pension;

alert(finalMessage);
*/
