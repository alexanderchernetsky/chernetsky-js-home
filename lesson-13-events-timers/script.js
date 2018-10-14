'use strict';

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
