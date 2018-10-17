// 'use strict';

const baseRadius = 400; // радиус циферблата
const circleRadius = 20; // радиус кружков с цифрами
const numbersBaseRadius = baseRadius / 2.5; // радиус оси цифр циферблата
const hourArrowWidth = 20; // ширина часовой стрелочки часов
const minuteArrowWidth = 10; // ширина минутной стрелочки часов
const secondArrowWidth = 2; // ширина секундной стрелочки часов

const canvas = document.getElementById('canvas');
canvas.width = baseRadius;
canvas.height = baseRadius;
const cont = canvas.getContext('2d');

// big circle
cont.beginPath();
cont.arc(baseRadius / 2, baseRadius / 2, baseRadius / 2, 0, Math.PI * 2);
cont.fillStyle = 'lightgray';
cont.fill();
cont.closePath();



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

createClockFaceLittleCircles();

function createHourCircle(circleX, circleY) {
  cont.beginPath();
  cont.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  cont.fillStyle = 'green';
  cont.fill();
  cont.closePath();
}

function createHourCircleNumber(x, y, number) {
  
}




// hour arrow
cont.beginPath();
cont.lineWidth = hourArrowWidth;
cont.lineCap = 'round';
cont.moveTo(baseRadius / 2, baseRadius / 2);
cont.lineTo(baseRadius / 2, baseRadius / 4);
cont.stroke();
cont.closePath();

// minute arrow
cont.beginPath();
cont.lineWidth = minuteArrowWidth;
cont.lineCap = 'round';
cont.moveTo(baseRadius / 2, baseRadius / 2);
cont.lineTo(baseRadius / 2, baseRadius / 6);
cont.strokeStyle = 'darkblue';
cont.stroke();
cont.closePath();

// second arrow
cont.beginPath();
cont.lineWidth = secondArrowWidth;
cont.lineCap = 'round';
cont.moveTo(baseRadius / 2, baseRadius / 2);
cont.lineTo(baseRadius / 2, baseRadius / 10);
cont.strokeStyle = 'red';
cont.stroke();
cont.closePath();
