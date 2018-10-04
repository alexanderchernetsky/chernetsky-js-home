'use strict';

function drawGrid(length, width) {
  var gridSharp = '#';
  var gridSpace = ' ';
  var gridLineBreak = '\n';
  var grid = '';
  for (var n = 1; n <= length; n++) {
    for (var i = 1; i <= width; i++) {
      if ((n + i) % 2 === 0) {
        grid += gridSharp;
      }  else {
        grid += gridSpace;
      }
    }
    grid += gridLineBreak;
  }
  console.log(grid);
}

drawGrid(8, 8);
drawGrid(10, 32);
drawGrid(14, 44);
