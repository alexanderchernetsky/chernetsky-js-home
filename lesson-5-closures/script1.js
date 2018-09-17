'use strict';

function drawGrid(length, width) {
  var gridSharp = '#';
  var gridSpace = ' ';
  var gridLineBreak = '\n';
  var grid = '';
  for (var n = 1; n <= length; n++) {
    if (n % 2 !== 0) {
      for (var i = 1; i <= width; i++) {
        if (i % 2 !== 0) {
          grid += gridSharp;
        } else {
          grid += gridSpace;
        }
      }
      grid += gridLineBreak;
    } else {
      for (i = 1; i <= width; i++) {
        if (i % 2 !== 0) {
          grid += gridSpace;
        } else {
          grid += gridSharp;
        }
      }
      grid += gridLineBreak;
    }
  }
  console.log(grid);
}

drawGrid(8, 8);
drawGrid(10, 32);
