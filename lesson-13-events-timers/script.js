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


var MINANGLE = (90 / 3) / 180 * Math.PI;
var angle = 0;

var RADIUS = clockFace.offsetWidth / 2.5;

var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;

for (var i = 12; i > 0; i--) {
  var circleEl = document.createElement('div');
  var numberEl = document.createElement('div');
  var number = document.createTextNode(i);
  numberEl.appendChild(number);
  circleEl.appendChild(numberEl);
  clockFace.appendChild(circleEl);

  circleEl.classList.add('circle');
  numberEl.classList.add('number');

  console.log(angle);

  var circleElCenterX = clockFaceCenterX  + RADIUS * Math.sin(angle);
  var circleElCenterY = clockFaceCenterY  - RADIUS * Math.cos(angle);

  circleEl.style.left = Math.round(circleElCenterX - circleEl.offsetWidth / 2) + 'px';
  circleEl.style.top = Math.round(circleElCenterY - circleEl.offsetHeight / 2) + 'px';


  angle -= MINANGLE;

}


/* var RedCenterX = Red.offsetLeft + Red.offsetWidth / 2;
      var RedCenterY = Red.offsetTop + Red.offsetHeight / 2;
var GreenCenterX = RedCenterX + Radius * Math.sin(Angle);
var GreenCenterY = RedCenterY - Radius * Math.cos(Angle);

Green.style.left = Math.round(GreenCenterX - Green.offsetWidth / 2) + 'px';
Green.style.top = Math.round(GreenCenterY - Green.offsetHeight / 2) + 'px';*/


/*
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
var el = document.createElement('div');
var bodyAr = document.getElementsByTagName('body');
bodyAr[0].appendChild(el);
el.classList.add('rus-format-time');

function tickTack() {
  var currTime = new Date();
  var processedTime = currTime.formatRus();
  el.innerHTML = processedTime;
}

setInterval(tickTack, 1000);
*/
