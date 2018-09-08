var firstName = prompt('Введите вашe имя:', '');
var secondName = prompt('Введите ваше отчество:', '');
var lastName = prompt('Введите вашу фамилию:', '');
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
