'use strict';

function drawGrid(scale) {
  var gridOdd = '# # # # \n';
  var gridEven = ' # # # #\n';
  var grid = '';
  for (var i = 1; i <= scale; i++) {
    if (i % 2 !== 0) {
      grid += gridOdd;
    } else {
      grid += gridEven;
    }
  }
  return grid;
}

console.log(drawGrid(1));
console.log(drawGrid(2));
console.log(drawGrid(8));
