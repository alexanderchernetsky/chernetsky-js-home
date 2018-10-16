// 'use strict'

const baseRadius = 400; // радиус циферблата
const circleRadius = 20; // радиус кружков с цифрами
const numbersBaseRadius = baseRadius / 2.5; // радиус оси цифр циферблата
const hourArrowWidth = 20; // ширина часовой стрелочки часов
const minuteArrowWidth = 10; // ширина минутной стрелочки часов
const secondArrowWidth = 2; // ширина секундной стрелочки часов

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
  svgEl.appendChild(createHourArrow(hourArrowWidth));
  svgEl.appendChild(createMinuteArrow(minuteArrowWidth));
  svgEl.appendChild(createSecondArrow(secondArrowWidth));
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
  txt.setAttribute('font-size', circleRadius);
  txt.setAttribute('text-anchor', 'middle');
  return txt;
}

function createHourArrow(width) {
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.setAttribute('x1', baseRadius / 2);
  arrow.setAttribute('y1', baseRadius / 2);
  arrow.setAttribute('x2', baseRadius / 2);
  arrow.setAttribute('y2', baseRadius / 4);
  arrow.setAttribute('stroke', 'black');
  arrow.setAttribute('stroke-width', width);
  arrow.setAttribute('stroke-linecap', 'round');
  arrow.id = 'hours';
  arrow.style.transformOrigin = `0% ${width / 2}px`;
  return arrow;
}

function createMinuteArrow(width) {
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.setAttribute('x1', baseRadius / 2);
  arrow.setAttribute('y1', baseRadius / 2);
  arrow.setAttribute('x2', baseRadius / 2);
  arrow.setAttribute('y2', baseRadius / 6);
  arrow.setAttribute('stroke', 'darkblue');
  arrow.setAttribute('stroke-width', width);
  arrow.setAttribute('stroke-linecap', 'round');
  arrow.id = 'minutes';
  return arrow;
}

function createSecondArrow(width) {
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.setAttribute('x1', baseRadius / 2);
  arrow.setAttribute('y1', baseRadius / 2);
  arrow.setAttribute('x2', baseRadius / 2);
  arrow.setAttribute('y2', baseRadius / 10);
  arrow.setAttribute('stroke', 'red');
  arrow.setAttribute('stroke-width', width);
  arrow.setAttribute('stroke-linecap', 'round');
  arrow.id = 'seconds';
  return arrow;
}

// Logic

function tickTimer() {
  const now = new Date();
  const thisSecond = now.getSeconds();
  const thisMinute = now.getMinutes();
  const thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  //updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  const thisSecondRotate = (second / 60) * 360 - 90;
  const thisMinuteRotate = (minute) / 60 * 360 - 90;
  const thisHourRotate = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate);
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  const arrow = document.querySelector(`#${handle}`);
  arrow.style.transform = `rotate(${degree}deg`;

}

/*function updateDigitalWatch(hour, minute, second) {
  const digitalWatchSeconds = document.querySelector('.secondstext');
  const digitalWatchMinutes = document.querySelector('.minutestext');
  const digitalWatchHours = document.querySelector('.hourstext');
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}*/

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
