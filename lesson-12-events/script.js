'use strict';

var picturesArr = document.getElementsByTagName('img');

var picturesOffsetLeft = [];
var picturesOffsetTop = [];

for (var n = 0; n < picturesArr.length; n++) {
  picturesOffsetLeft.push(picturesArr[n].offsetLeft);
  picturesOffsetTop.push(picturesArr[n].offsetTop);
}

for (var i = 0; i < picturesArr.length; i++) {
  picturesArr[i].style.position = 'absolute';
  picturesArr[i].style.left = picturesOffsetLeft[i] + 'px';
  picturesArr[i].style.top = picturesOffsetTop[i] + 'px';

  picturesArr[i].addEventListener('mousedown', dragStart, false);
}

var wrapper = document.getElementById('wrapper');
wrapper.addEventListener('mouseup', dragStop, false);

var dragImage = null;
var dragShiftX;
var dragShiftY;

function dragStart(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  console.log('mousedown ok');
  dragImage = EO.target;

  console.log(EO.pageX);
  console.log(EO.pageY);
  console.log(dragImage.offsetLeft);
  console.log(dragImage.offsetTop);

  dragShiftX = EO.pageX - dragImage.offsetLeft;
  dragShiftY = EO.pageY - dragImage.offsetTop;

  console.log(dragImage);
  console.log(dragShiftX);
  console.log(dragShiftY);
}

function dragStop(EO) {
  EO = EO || window.event;
  console.log('mouseup ok');
  dragImage = null;
  dragShiftX = null;
  dragShiftY = null;

  console.log(dragImage);
  console.log(dragShiftX);
  console.log(dragShiftY);
}

function Drag_Move(EO) {
  EO = EO || window.event;
  console.log('mousemove ok');
  console.log(EO.pageX);
  console.log(EO.pageY);
  // dragImage.style.left =   'px';
  // dragImage.style.top =  'px';
}
