'use strict';

var CLOCKFACESIZE = 400; // clock diameter px (use it to scale the clock)
var hourHandLength = CLOCKFACESIZE / 4; // hour hand length (divide by 4 to save proportions)
var hourHandWidth = hourHandLength / 5; // hour hand width (divide by 20 to save proportions)
var minuteHandLength = CLOCKFACESIZE / 2.8; // minute hand length (divide by 2.8 to save proportions)
var minuteHandWidth = minuteHandLength / 16; // minute hand width (divide by 16 to save proportions)
var secondHandLength = CLOCKFACESIZE / 2.2; // second hand length (divide by 2.2 to save proportions)
var secondHandWidth = secondHandLength / 50; // second hand width (divide by 50 to save proportions)
var radius = CLOCKFACESIZE / 2.5; // it's the length from the center of clock face to the center of every circle with number
var CIRCLERADIUS = 40; // radius of circles with numbers

var bodyArr = document.getElementsByTagName('body');
var body = bodyArr[0];
body.appendChild(createWatch());

setInterval(updateDigitalWatch, 1000);
setInterval(moveMechanicalWatches.bind(null, '.hour-hand', '.minute-hand', '.second-hand'), 1000);

// UI

function createWatch() {
  var clockFace = document.createElement('div');
  clockFace.classList.add('clock-face');
  clockFace.style.width = CLOCKFACESIZE + 'px';
  clockFace.style.height = CLOCKFACESIZE + 'px';
  clockFace.style.borderRadius = CLOCKFACESIZE / 2 + 'px';
  clockFace.appendChild(createClockFace());
  clockFace.appendChild(createDigitalWatch());
  clockFace.appendChild(createHourHandArrow());
  clockFace.appendChild(createMinuteHandArrow());
  clockFace.appendChild(createSecondHandArrow());
  return clockFace;
}

function createClockFace() {
  var angle = 0; // current angle for drawing circles with numbers(initially it should be equal 0)
  var MINANGLE = (90 / 3) / 180 * Math.PI; // calculate the angle that is necessary for creating circles with numbers and translate it to radians
  var clockFaceEl = document.createElement('div');

  for (var i = 12; i > 0; i--) {
    var circleEl = document.createElement('div');
    var numberEl = document.createElement('div');
    var number = document.createTextNode(i);
    numberEl.appendChild(number);
    circleEl.appendChild(numberEl);
    clockFaceEl.appendChild(circleEl);

    circleEl.classList.add('circle');
    circleEl.style.height = CIRCLERADIUS + 'px';
    circleEl.style.width  = CIRCLERADIUS + 'px';
    circleEl.style.borderRadius = CIRCLERADIUS / 2 + 'px';

    numberEl.classList.add('number');
    numberEl.style.fontSize = CIRCLERADIUS + 'px';
    numberEl.style.lineHeight = CIRCLERADIUS + 'px';

    var circleElCenterX = CLOCKFACESIZE / 2 + radius * Math.sin(angle) - CIRCLERADIUS / 2;
    var circleElCenterY = CLOCKFACESIZE / 2 - radius * Math.cos(angle) - CIRCLERADIUS / 2;

    circleEl.style.left = Math.round(circleElCenterX - circleEl.offsetWidth / 2) + 'px';
    circleEl.style.top = Math.round(circleElCenterY - circleEl.offsetHeight / 2) + 'px';

    angle -= MINANGLE;
  }
  return clockFaceEl;
}

function createDigitalWatch() {
  var digitalWatchEl = document.createElement('div');
  digitalWatchEl.classList.add('rus-format-time');
  digitalWatchEl.style.fontSize = CLOCKFACESIZE / 12 + 'px';
  digitalWatchEl.style.left =  CLOCKFACESIZE / 2 - CLOCKFACESIZE / 6 + 'px';
  digitalWatchEl.style.top = CLOCKFACESIZE / 2 - CLOCKFACESIZE / 6 + 'px';
  return digitalWatchEl;
}

function createHourHandArrow() {
  var hourHand = document.createElement('div');
  hourHand.classList.add('hour-hand');
  hourHand.style.height = hourHandLength + 'px';
  hourHand.style.width  = hourHandWidth + 'px';
  hourHand.style.borderRadius = hourHandLength / 10 + 'px';
  hourHand.style.transformOrigin =  hourHandLength / 10  + 'px bottom';
  hourHand.style.left =  CLOCKFACESIZE / 2 - hourHandLength / 10 + 'px';
  hourHand.style.top =  CLOCKFACESIZE / 2 - hourHandLength + 'px';
  return hourHand;
}

function createMinuteHandArrow() {
  var minuteHand = document.createElement('div');
  minuteHand.classList.add('minute-hand');
  minuteHand.style.height = minuteHandLength + 'px';
  minuteHand.style.width = minuteHandWidth + 'px';
  minuteHand.style.borderRadius = minuteHandLength / 32 + 'px';
  minuteHand.style.transformOrigin = minuteHandLength / 32 + 'px bottom';
  minuteHand.style.left = CLOCKFACESIZE / 2 - minuteHandLength / 32 + 'px';
  minuteHand.style.top = CLOCKFACESIZE / 2 - minuteHandLength + 'px';
  return minuteHand;
}

function createSecondHandArrow() {
  var secondHand = document.createElement('div');
  secondHand.classList.add('second-hand');
  secondHand.style.height = secondHandLength + 'px';
  secondHand.style.width = secondHandWidth + 'px';
  secondHand.style.borderRadius = secondHandLength / 100 + 'px';
  secondHand.style.transformOrigin = secondHandLength / 100 + 'px bottom';
  secondHand.style.left = CLOCKFACESIZE / 2 - secondHandLength / 100 + 'px';
  secondHand.style.top = CLOCKFACESIZE / 2 - secondHandLength + 'px';
  return secondHand;
}

// Logic

function moveMechanicalWatches(hourHandClassName, minuteHandClassName, secondHandClassName) {
  var currTime = new Date();

  var hourHandArrow = document.querySelector(hourHandClassName);
  var minuteHandArrow = document.querySelector(minuteHandClassName);
  var secondHandArrow = document.querySelector(secondHandClassName);

  var hours = currTime.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  var minutes = currTime.getMinutes();
  var seconds = currTime.getSeconds();

  var secondHandAngle = (360 / 60) * seconds;
  secondHandArrow.style.transform = 'rotate(' + secondHandAngle + 'deg)';

  var minuteHandAngle = (360 / 60) * minutes;
  minuteHandArrow.style.transform = 'rotate(' + minuteHandAngle + 'deg)';

  var hourHandAngle = (360 / 12) * hours;
  hourHandArrow.style.transform = 'rotate(' + hourHandAngle + 'deg)';
}

function updateDigitalWatch() {
  var digitalWatchEl = document.querySelector('.rus-format-time');
  var currTime = new Date();
  digitalWatchEl.innerHTML = currTime.formatRus();
}

// форматирует время в формате чч:мм:сс
function formatTime() {
  var hours = this.getHours();
  var minutes = this.getMinutes();
  var seconds = this.getSeconds();
  return str0L(hours, 2) + ':' + str0L(minutes, 2) + ':' + str0L(seconds, 2);
}

// дополняет строку val слева нулями до длины len
function str0L(val, len) {
  var strVal = val.toString();
  while (strVal.length < len) {
    strVal = '0' + strVal;
  }
  return strVal;
}

Date.prototype.formatRus = formatTime; // описываем новый метод formatRus для класса Date
