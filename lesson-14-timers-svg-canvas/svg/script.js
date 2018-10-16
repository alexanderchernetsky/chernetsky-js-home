// 'use strict'

const baseRadius = 400; // радиус циферблата



function createWatch() {
  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.id = 'clock';
  svgEl.setAttribute('width', baseRadius);
  svgEl.setAttribute('height', baseRadius);

  /* base.appendChild(createClockFace());
  base.appendChild(createDigitalWatch());
  base.appendChild(createArrow('hours', 6));
  base.appendChild(createArrow('minutes', 4));
  base.appendChild(createArrow('seconds', 2));
  base.appendChild(createDecorativeDot(dotSize)); */


  return svgEl;
}

console.log(createWatch());


const body = document.getElementsByTagName('body')[0];
body.appendChild(createWatch());
