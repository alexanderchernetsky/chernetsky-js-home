'use strict';

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

var clockFaceSize = 400; // clock diameter px

clockFace.style.width = clockFaceSize + 'px';
clockFace.style.height = clockFaceSize + 'px';
clockFace.style.borderRadius = clockFaceSize / 2 + 'px';

var hourHandLength = clockFaceSize / 4; // hour hand length

hourHand.style.height = hourHandLength + 'px';
hourHand.style.width  = hourHandLength / 5 + 'px';
hourHand.style.borderRadius = hourHandLength / 10 + 'px';
hourHand.style.transformOrigin =  hourHandLength / 10  + 'px bottom';
hourHand.style.left =  clockFaceSize / 2 - hourHandLength / 10 + 'px';
hourHand.style.top =  clockFaceSize / 2 - hourHandLength + 'px';

var minuteHandLength = clockFaceSize / 2.8; // minute hand length

minuteHand.style.height = minuteHandLength + 'px';
minuteHand.style.width  = minuteHandLength / 16 + 'px';
minuteHand.style.borderRadius = minuteHandLength / 32 + 'px';
minuteHand.style.transformOrigin =  minuteHandLength / 32  + 'px bottom';
minuteHand.style.left =  clockFaceSize / 2 - minuteHandLength / 32 + 'px';
minuteHand.style.top =  clockFaceSize / 2 - minuteHandLength + 'px';

var secondHandLength = clockFaceSize / 2.2; // second hand length

secondHand.style.height = secondHandLength + 'px';
secondHand.style.width  = secondHandLength / 50 + 'px';
secondHand.style.borderRadius = secondHandLength / 100 + 'px';
secondHand.style.transformOrigin =  secondHandLength / 100  + 'px bottom';
secondHand.style.left =  clockFaceSize / 2 - secondHandLength / 100 + 'px';
secondHand.style.top =  clockFaceSize / 2 - secondHandLength + 'px';

var MINANGLE = (90 / 3) / 180 * Math.PI; // находим угол который нужен для построения кружков с числами и переводим его в радианы
var angle = 0; // это угол на который будут отклоняться прямые к центрам кружков(в первоначальный момент угол д.б. равен 0)

var RADIUS = clockFace.offsetWidth / 2.5; // это расстояние от центра циферблата до центра кружков с числами

for (var i = 12; i > 0; i--) {
  var circleEl = document.createElement('div');
  var numberEl = document.createElement('div');
  var number = document.createTextNode(i);
  numberEl.appendChild(number);
  circleEl.appendChild(numberEl);
  clockFace.appendChild(circleEl);

  circleEl.classList.add('circle');
  circleEl.style.height = clockFaceSize / 8 + 'px';
  circleEl.style.width  = clockFaceSize / 8 + 'px';
  circleEl.style.borderRadius = clockFaceSize / 16 + 'px';

  numberEl.classList.add('number');
  numberEl.style.fontSize = clockFaceSize / 8 + 'px';
  numberEl.style.lineHeight = clockFaceSize / 8 + 'px';

  var circleElCenterX = clockFace.offsetWidth / 2 + RADIUS * Math.sin(angle);
  var circleElCenterY = clockFace.offsetHeight / 2 - RADIUS * Math.cos(angle);

  circleEl.style.left = Math.round(circleElCenterX - circleEl.offsetWidth / 2) + 'px';
  circleEl.style.top = Math.round(circleElCenterY - circleEl.offsetHeight / 2) + 'px';

  angle -= MINANGLE;
}

function tickTackClock(hourH, minuteH, ) {
  var currTime = new Date();

  var hours = currTime.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  var minutes = currTime.getMinutes();
  var seconds = currTime.getSeconds();

  var secondHandAngle = (360 / 60) * seconds;
  secondHand.style.transform = 'rotate(' + secondHandAngle + 'deg)';

  var minuteHandAngle = (360 / 60) * minutes;
  minuteHand.style.transform = 'rotate(' + minuteHandAngle + 'deg)';

  var hourHandAngle = (360 / 12) * hours;
  hourHand.style.transform = 'rotate(' + hourHandAngle + 'deg)';
}

setInterval(tickTackClock, 1000);

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

Date.prototype.formatRus = formatTime; // описываем новый метод для класса Date

var belTimeEl = document.createElement('div');
clockFace.appendChild(belTimeEl);
belTimeEl.classList.add('rus-format-time');
belTimeEl.style.fontSize = clockFaceSize / 12 + 'px';

var currTime = new Date();
var processedTime = currTime.formatRus();
belTimeEl.innerHTML = processedTime;

belTimeEl.style.left =  clockFace.offsetWidth / 2 - belTimeEl.offsetWidth / 2 + 'px';
belTimeEl.style.top = clockFace.offsetHeight / 2 - 2 * belTimeEl.offsetHeight + 'px';

function showCurrentTime() {
  currTime = new Date();
  processedTime = currTime.formatRus();
  belTimeEl.innerHTML = processedTime;
}

setInterval(showCurrentTime, 1000);
