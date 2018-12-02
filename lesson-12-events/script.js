'use strict';

var picturesArr = document.getElementsByTagName('img');

for (var i = picturesArr.length - 1; i > -1; i--) {
  picturesArr[i].style.position = 'absolute';
  picturesArr[i].style.left = picturesArr[i].offsetLeft + 'px';
  picturesArr[i].style.top = picturesArr[i].offsetTop + 'px';

  picturesArr[i].addEventListener('mousedown', dragStart, false);
}

var dragImage = null;
var dragShiftX;
var dragShiftY;

function dragStart(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  dragImage = EO.target;
  dragImage.style.zIndex = '2';
  dragImage.style.cursor = 'move';

  dragShiftX = EO.pageX - dragImage.offsetLeft;
  dragShiftY = EO.pageY - dragImage.offsetTop;

  window.addEventListener('mouseup', dragStop, false);
  window.addEventListener('mousemove', dragMove, false);
}

function dragStop(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  dragImage.style.cursor = 'default';
  dragImage.style.zIndex = '1';

  dragImage = null;
  dragShiftX = null;
  dragShiftY = null;

  window.removeEventListener('mousemove', dragMove, false);
  window.removeEventListener('mouseup', dragStop, false);
}

function dragMove(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  dragImage.style.left = EO.pageX - dragShiftX + 'px';
  dragImage.style.top =  EO.pageY - dragShiftY + 'px';
}
