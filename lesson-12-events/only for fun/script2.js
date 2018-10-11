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
  picturesArr[i].addEventListener('transitionend', removeCss, false);
}

var wrapper = document.getElementById('wrapper');
wrapper.addEventListener('mouseup', dragStop, false);

var dragImage = null;
var dragShiftX;
var dragShiftY;

function dragStart(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  (function playAudio() {
    var dragElem = EO.target;
    var dragElemClass = dragElem.className;
    var audio = document.querySelector('audio[class="' + dragElemClass + '"]');
    if (!audio) return;
    audio.play();
  })();

  dragImage = EO.target;
  dragImage.style.zIndex = '2';
  dragImage.style.cursor = 'move';

  (function markPlaying() {
    dragImage.classList.add('playing');
  })();


  dragShiftX = EO.pageX - dragImage.offsetLeft;
  dragShiftY = EO.pageY - dragImage.offsetTop;

  wrapper.onmousemove = function dragMove(EO)  {
    EO = EO || window.event;
    EO.preventDefault();

    dragImage.style.left = EO.pageX - dragShiftX + 'px';
    dragImage.style.top =  EO.pageY - dragShiftY + 'px';
  };
}

function dragStop(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  dragImage.style.cursor = 'default';
  dragImage.style.zIndex = '1';
  wrapper.onmousemove = null;
  dragImage = null;
  dragShiftX = null;
  dragShiftY = null;
}

function removeCss(EO) {
  this.classList.remove('playing');
}
