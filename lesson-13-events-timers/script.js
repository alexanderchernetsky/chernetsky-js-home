'use strict';

var clockFace = document.createElement('div');
var hourHand = document.createElement('div');
var minuteHand = document.createElement('div');
var secondHand = document.createElement('div');
var bodyArr = document.getElementsByTagName('body');
var body = bodyArr[0];

body.appendChild(clockFace);
clockFace.appendChild(hourHand);
clockFace.appendChild(minuteHand);
clockFace.appendChild(secondHand);

clockFace.classList.add('clock-face');
hourHand.classList.add('hour-hand');
minuteHand.classList.add('minute-hand');
secondHand.classList.add('second-hand');


var MINANGLE = (90 / 3) / 180 * Math.PI; // находим угол который нужен для построения кружков с числами и переводим его в радианы
var angle = 0;

var RADIUS = clockFace.offsetWidth / 2.5; // это произвольное расстояние от центра круга до центра кружков с числами

var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;


for (var i = 12; i > 0; i--) {
  var circleEl = document.createElement('div');
  var numberEl = document.createElement('div');
  var number = document.createTextNode(i);
  numberEl.appendChild(number);
  circleEl.appendChild(numberEl);
  body.appendChild(circleEl);

  circleEl.classList.add('circle');
  numberEl.classList.add('number');

  var circleElCenterX = clockFaceCenterX  + RADIUS * Math.sin(angle);
  var circleElCenterY = clockFaceCenterY  - RADIUS * Math.cos(angle);

  circleEl.style.left = Math.round(circleElCenterX - circleEl.offsetWidth / 2) + 'px';
  circleEl.style.top = Math.round(circleElCenterY - circleEl.offsetHeight / 2) + 'px';

  angle -= MINANGLE;
}


function tickTackClock() {
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

// форматирует переданную дату-время в формате чч:мм:сс
function formatTime() {
  var hours = this.getHours();
  var minutes = this.getMinutes();
  var seconds = this.getSeconds();
  return str0L(hours, 2) + ':' + str0L(minutes, 2) + ':' + str0L(seconds, 2);
}

// дополняет строку Val слева нулями до длины Len
function str0L(val, len) {
  var strVal = val.toString();
  while (strVal.length < len) {
    strVal = '0' + strVal;
  }
  return strVal;
}

Date.prototype.formatRus = formatTime; // описываем новый метод для класса Date

var belTimeEl = document.createElement('div');
var bodyAr = document.getElementsByTagName('body');
bodyAr[0].appendChild(belTimeEl);
belTimeEl.classList.add('rus-format-time');

var currTime = new Date();
var processedTime = currTime.formatRus();
belTimeEl.innerHTML = processedTime;

belTimeEl.style.left = clockFaceCenterX - belTimeEl.offsetWidth / 2 + 'px';
belTimeEl.style.top = clockFace.offsetTop + clockFace.offsetHeight / 4 + 'px';


function tickTack() {
  currTime = new Date();
  processedTime = currTime.formatRus();
  belTimeEl.innerHTML = processedTime;
}

setInterval(tickTack, 1000);
