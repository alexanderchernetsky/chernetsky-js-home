'use strict';

var picturesArr = document.getElementsByTagName('img');
console.log(picturesArr);

var cartman = document.getElementById('curt');

for (var i of picturesArr) {
  i.addEventListener('mousedown', myFunc, false);
}


function myFunc(EO) {
  EO = EO || window.event;
  console.log('ok');

}