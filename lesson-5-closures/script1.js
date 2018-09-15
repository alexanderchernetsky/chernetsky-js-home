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
  console.log(grid);
}

drawGrid(1);
drawGrid(2);
drawGrid(8);
