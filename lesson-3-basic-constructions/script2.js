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

var fullYears = prompt('Сколько вам лет:', '26');

function userAgeValidation(string) {
  var prohibitedSymbols = [' '];
  if ((string === null) || (string === '')) {
    return 'nothing entered';
  }
  for (var i = 0; i <= string.length; i++) {
    var userSymbol = string.charAt(i);
    if (prohibitedSymbols.indexOf(userSymbol) !== -1) {
      return 'validation failed';
    }
    if (!isFinite(string) ) {
      return 'validation failed';
    }
  }
  return 'validation success';
}

do {
  if (userAgeValidation(fullYears) === 'nothing entered') {
    do {
      fullYears = prompt('Вы ничего не ввели! Пожалуйста введите ваш возраст:', '26');
    } while (userAgeValidation(fullYears) === 'nothing entered');
  }

  if (userAgeValidation(fullYears) === 'validation failed') {
    do {
      fullYears = prompt('Вы ввели возраст неверно! Возраст не может содержать буквы и пробелы! Пожалуйста введите ваш возраст:', '26');
    } while (userAgeValidation(fullYears) === 'validation failed');
  }
} while (userAgeValidation(fullYears) !== 'validation success');


var gender = confirm('Ваш пол - мужской?');
var pension = false;

if (gender && (fullYears >= 63)) {
  pension = true;
} else if (!gender && (fullYears >= 58)) {
  pension = true;
}

var fullName = firstName + ' ' + secondName + ' ' + lastName;
var ageInDays = Math.floor(fullYears * 365.2425);
var futureYears = Number(fullYears) + 5;

gender = (gender) ? 'мужской' : 'женский';
pension = (pension) ? 'да' : 'нет';

var finalMessage = 'ваше ФИО: ' + fullName + '\n' +
    'ваш возраст в годах: ' + fullYears + '\n' +
    'ваш возраст в днях: ' + ageInDays + '\n' +
    'через 5 лет вам будет: ' + futureYears + '\n' +
    'ваш пол: ' + gender + '\n' +
    'вы на пенсии: ' + pension;

alert(finalMessage);
