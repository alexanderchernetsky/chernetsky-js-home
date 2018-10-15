'use strict';

var CLOCKFACESIZE = 400; // clock diameter px (use it to scale the clock)
var MINANGLE = (90 / 3) / 180 * Math.PI; // calculate the angle that is necessary for creating circles with numbers and translate it to radians

var clockFace = document.createElement('div');
var hourHand = document.createElement('div');
var minuteHand = document.createElement('div');
var secondHand = document.createElement('div');
var bodyArr = document.getElementsByTagName('body');
var body = bodyArr[0];

clockFace.classList.add('clock-face');
hourHand.classList.add('hour-hand');
minuteHand.classList.add('minute-hand');
secondHand.classList.add('second-hand');

body.appendChild(clockFace);
clockFace.appendChild(hourHand);
clockFace.appendChild(minuteHand);
clockFace.appendChild(secondHand);

clockFace.style.width = CLOCKFACESIZE + 'px';
clockFace.style.height = CLOCKFACESIZE + 'px';
clockFace.style.borderRadius = CLOCKFACESIZE / 2 + 'px';

var hourHandLength = CLOCKFACESIZE / 4; // hour hand length (devide by 4 to save proportions)

hourHand.style.height = hourHandLength + 'px';
hourHand.style.width  = hourHandLength / 5 + 'px';
hourHand.style.borderRadius = hourHandLength / 10 + 'px';
hourHand.style.transformOrigin =  hourHandLength / 10  + 'px bottom';
hourHand.style.left =  CLOCKFACESIZE / 2 - hourHandLength / 10 + 'px';
hourHand.style.top =  CLOCKFACESIZE / 2 - hourHandLength + 'px';

var minuteHandLength = CLOCKFACESIZE / 2.8; // minute hand length (devide by 2.8 to save proportions)

minuteHand.style.height = minuteHandLength + 'px';
minuteHand.style.width  = minuteHandLength / 16 + 'px';
minuteHand.style.borderRadius = minuteHandLength / 32 + 'px';
minuteHand.style.transformOrigin =  minuteHandLength / 32  + 'px bottom';
minuteHand.style.left =  CLOCKFACESIZE / 2 - minuteHandLength / 32 + 'px';
minuteHand.style.top =  CLOCKFACESIZE / 2 - minuteHandLength + 'px';

var secondHandLength = CLOCKFACESIZE / 2.2; // second hand length (devide by 2.2 to save proportions)

secondHand.style.height = secondHandLength + 'px';
secondHand.style.width  = secondHandLength / 50 + 'px';
secondHand.style.borderRadius = secondHandLength / 100 + 'px';
secondHand.style.transformOrigin =  secondHandLength / 100  + 'px bottom';
secondHand.style.left =  CLOCKFACESIZE / 2 - secondHandLength / 100 + 'px';
secondHand.style.top =  CLOCKFACESIZE / 2 - secondHandLength + 'px';

var angle = 0; // current angle for drawing circles with numbers(initially it should be equal 0)
var radius = clockFace.offsetWidth / 2.5; // it's the length from the center of clock face to the center of every circle with number

for (var i = 12; i > 0; i--) {
  var circleEl = document.createElement('div');
  var numberEl = document.createElement('div');
  var number = document.createTextNode(i);
  numberEl.appendChild(number);
  circleEl.appendChild(numberEl);
  clockFace.appendChild(circleEl);

  circleEl.classList.add('circle');
  circleEl.style.height = CLOCKFACESIZE / 8 + 'px';
  circleEl.style.width  = CLOCKFACESIZE / 8 + 'px';
  circleEl.style.borderRadius = CLOCKFACESIZE / 16 + 'px';

  numberEl.classList.add('number');
  numberEl.style.fontSize = CLOCKFACESIZE / 8 + 'px';
  numberEl.style.lineHeight = CLOCKFACESIZE / 8 + 'px';

  var circleElCenterX = clockFace.offsetWidth / 2 + radius * Math.sin(angle);
  var circleElCenterY = clockFace.offsetHeight / 2 - radius * Math.cos(angle);

  circleEl.style.left = Math.round(circleElCenterX - circleEl.offsetWidth / 2) + 'px';
  circleEl.style.top = Math.round(circleElCenterY - circleEl.offsetHeight / 2) + 'px';

  angle -= MINANGLE;
}

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

setInterval(moveMechanicalWatches.bind(null, '.hour-hand', '.minute-hand', '.second-hand'), 1000);

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

var digitalWatchEl = document.createElement('div');
digitalWatchEl.classList.add('rus-format-time');
digitalWatchEl.style.fontSize = CLOCKFACESIZE / 12 + 'px';
clockFace.appendChild(digitalWatchEl);

var currTime = new Date();
var processedTime = currTime.formatRus();
digitalWatchEl.innerHTML = processedTime;

digitalWatchEl.style.left =  clockFace.offsetWidth / 2 - digitalWatchEl.offsetWidth / 2 + 'px';
digitalWatchEl.style.top = clockFace.offsetHeight / 2 - 2 * digitalWatchEl.offsetHeight + 'px';

function showCurrentTime() {
  currTime = new Date();
  processedTime = currTime.formatRus();
  digitalWatchEl.innerHTML = processedTime;
}

setInterval(showCurrentTime, 1000);
