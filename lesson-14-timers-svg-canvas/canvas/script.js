// 'use strict';

const baseRadius = 400; // радиус циферблата
const circleRadius = 20; // радиус кружков с цифрами
const numbersBaseRadius = baseRadius / 2.5; // радиус оси цифр циферблата
const hourArrowWidth = 20; // ширина часовой стрелочки часов
const minuteArrowWidth = 10; // ширина минутной стрелочки часов
const secondArrowWidth = 2; // ширина секундной стрелочки часов

const canvas = document.getElementById('canvas');
const cont = canvas.getContext('2d');

setInterval(tickTimer, 1000);

function createWatch() {
  canvas.width = baseRadius;
  canvas.height = baseRadius;
  createClockFaceCircle();
  createClockFaceLittleCircles();
}

// big circle
function createClockFaceCircle() {
  cont.beginPath();
  cont.arc(baseRadius / 2, baseRadius / 2, baseRadius / 2, 0, Math.PI * 2);
  cont.fillStyle = 'lightgray';
  cont.fill();
  cont.closePath();
}

// circles with numbers
function createClockFaceLittleCircles() {
  for (let number = 1; number <= 12; number++) {
    const angle = number * 30 / 180 * Math.PI;
    const x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    const y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    createHourCircle(x, y);
    createHourCircleNumber(x, y, number);
  }
}

function createHourCircle(circleX, circleY) {
  cont.beginPath();
  cont.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  cont.fillStyle = 'green';
  cont.fill();
  cont.closePath();
}

function createHourCircleNumber(x, y, number) {
  cont.beginPath();
  cont.fillStyle = 'black';
  cont.font = `${circleRadius}px sans-serif`;
  cont.textAlign = 'center';
  cont.textBaseline = 'middle';
  cont.fillText(number, x, y);
  cont.closePath();
}

// hour arrow
function createHourArrow(width, degree) {
  cont.beginPath();
  cont.lineWidth = width;
  cont.lineCap = 'round';
  cont.translate(baseRadius / 2, baseRadius / 2);
  cont.moveTo(0, 0);
  cont.rotate(degree * Math.PI / 180);
  cont.lineTo(0, -baseRadius / 4);
  cont.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  cont.setTransform(1, 0, 0, 1, 0, 0);
  cont.stroke();
  cont.closePath();
}

// minute arrow
function createMinuteArrow(width, degree) {
  cont.beginPath();
  cont.lineWidth = width;
  cont.lineCap = 'round';
  cont.translate(baseRadius / 2, baseRadius / 2);
  cont.moveTo(0, 0);
  cont.rotate(degree * Math.PI / 180);
  cont.lineTo(0, -baseRadius / 3);
  cont.strokeStyle = 'rgba(0, 0, 139, 0.8)';
  cont.stroke();
  cont.setTransform(1, 0, 0, 1, 0, 0);
  cont.closePath();
}

// second arrow
function createSecondArrow(width, degree) {
  cont.beginPath();
  cont.lineWidth = width;
  cont.lineCap = 'round';
  cont.translate(baseRadius / 2, baseRadius / 2);
  cont.moveTo(0, 0);
  cont.rotate(degree * Math.PI / 180);
  cont.lineTo(0, -baseRadius / 2.5);
  cont.strokeStyle = 'red';
  cont.stroke();
  cont.setTransform(1, 0, 0, 1, 0, 0);
  cont.closePath();
}

// digital watch
function createDigitalWatch(rusFormatTime) {
  cont.beginPath();
  cont.fillStyle = 'black';
  cont.font = `${circleRadius}px sans-serif`;
  cont.textAlign = 'center';
  cont.textBaseline = 'middle';
  cont.fillText(rusFormatTime, baseRadius / 2, baseRadius / 2 + baseRadius / 10);
  cont.closePath();
}

// Logic

function tickTimer() {
  const now = new Date();
  const thisSecond = now.getSeconds();
  const thisMinute = now.getMinutes();
  const thisHour = now.getHours();
  createWatch();
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
  updateWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  const thisSecondRotate = (second / 60) * 360;
  const thisMinuteRotate = (minute) / 60 * 360;
  const thisHourRotate = (hour + minute / 60) / 12 * 360;
  createHourArrow(hourArrowWidth, thisHourRotate);
  createMinuteArrow(minuteArrowWidth, thisMinuteRotate);
  createSecondArrow(secondArrowWidth, thisSecondRotate);
}

function updateDigitalWatch(hour, minute, second) {
  return createDigitalWatch(`${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
