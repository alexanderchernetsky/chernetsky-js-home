'use strict';

const baseRadius = 400; // радиус циферблата
const circleRadius = 20; // радиус кружков с цифрами
const numbersBaseRadius = baseRadius / 2.5; // радиус оси цифр циферблата
const hourArrowWidth = 20; // ширина часовой стрелочки часов
const hourArrowLength = 90; // длина часовой стрелочки часов
const minuteArrowWidth = 10; // ширина минутной стрелочки часов
const minuteArrowLength = 130; // длина минутной стрелочки часов
const secondArrowWidth = 2; // ширина секундной стрелочки часов
const secondArrowLength = 160; // длина секундной стрелочки часов

const body = document.getElementsByTagName('body')[0];
body.appendChild(createWatch());

setInterval(tickTimer, 1000);

function createWatch() {
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.id = 'clock';
  svgEl.setAttribute('width', baseRadius);
  svgEl.setAttribute('height', baseRadius);
  svgEl.appendChild(createClockFaceCircle());
  svgEl.appendChild(createClockFaceLittleCircles());
  svgEl.appendChild(createDigitalWatch());
  svgEl.appendChild(createArrow(hourArrowWidth, hourArrowLength, 'black', 'hours'));
  svgEl.appendChild(createArrow(minuteArrowWidth, minuteArrowLength, 'darkblue', 'minutes'));
  svgEl.appendChild(createArrow(secondArrowWidth, secondArrowLength, 'red', 'seconds'));
  return svgEl;
}

function createClockFaceCircle() {
  const circleEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleEl.setAttribute('cx', baseRadius / 2);
  circleEl.setAttribute('cy', baseRadius / 2);
  circleEl.setAttribute('r', baseRadius / 2);
  circleEl.setAttribute('fill', 'lightgray');
  return circleEl;
}

function createClockFaceLittleCircles() {
  const clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++) {
    const angle = number * 30 / 180 * Math.PI;
    const x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    const y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    clockFace.appendChild(createHourCircle(x, y));
    clockFace.appendChild(createHourCircleNumber(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', circleX);
  circle.setAttribute('cy', circleY);
  circle.setAttribute('r', circleRadius);
  circle.setAttribute('fill', 'green');
  return circle;
}

function createHourCircleNumber(x, y, number) {
  const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  txt.innerHTML = number;
  txt.setAttribute('x', x);
  txt.setAttribute('y', y);
  txt.setAttribute('fill', 'black');
  txt.setAttribute('font-size', `${circleRadius}px`);
  txt.setAttribute('text-anchor', 'middle');
  txt.setAttribute('alignment-baseline', 'central');
  return txt;
}

function createDigitalWatch() {
  const textClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textClock.setAttribute('x', baseRadius / 2);
  textClock.setAttribute('y', baseRadius / 2 + baseRadius / 10);
  textClock.setAttribute('fill', 'white');
  textClock.setAttribute('font-size', circleRadius);
  textClock.setAttribute('text-anchor', 'middle');
  textClock.id = 'text-clock';
  return textClock;
}

function createArrow(width, length, color, id) {
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.setAttribute('x1', baseRadius / 2);
  arrow.setAttribute('y1', baseRadius / 2);
  arrow.setAttribute('x2', baseRadius / 2);
  arrow.setAttribute('y2', baseRadius / 2 - length);
  arrow.setAttribute('stroke-width', width);
  arrow.setAttribute('stroke', color);
  arrow.setAttribute('stroke-linecap', 'round');
  arrow.id = id;
  return arrow;
}

// Logic

function tickTimer() {
  const now = new Date();
  const thisSecond = now.getSeconds();
  const thisMinute = now.getMinutes();
  const thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  const thisSecondRotate = (second / 60) * 360;
  const thisMinuteRotate = (minute) / 60 * 360;
  const thisHourRotate = (hour + minute / 60) / 12 * 360;
  rotateHandle('seconds', thisSecondRotate);
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  const arrow = document.querySelector(`#${handle}`);
  arrow.setAttribute('transform', `rotate(${degree},${baseRadius / 2},${baseRadius / 2})`);
}

function updateDigitalWatch(hour, minute, second) {
  const textClock = document.getElementById('text-clock');
  textClock.innerHTML = `${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`;
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
