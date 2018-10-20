'use strict';

var FIELDWIDTH = 600; // the width of game table
var FIELDHEIGHT = 400; // the height of game table
var BALLSIZE = 40; // the size of the ball
var FIRSTRAQUETLENGTH = 120; // the length of first player raquet
var SECONDRAQUETLENGTH = 120; // the length of second player raquet

var field = document.getElementById('field');
var ball = document.getElementById('ball');
var racquet1 = document.getElementById('racquet1');
var racquet2 = document.getElementById('racquet2');

(function customizeGameTable() {
  field.style.width = FIELDWIDTH + 'px';
  field.style.height = FIELDHEIGHT + 'px';
  ball.style.width = BALLSIZE + 'px';
  ball.style.height = BALLSIZE + 'px';
  ball.style.borderRadius = BALLSIZE / 2 + 'px';
  racquet1.style.height = FIRSTRAQUETLENGTH + 'px';
  racquet1.style.width = FIRSTRAQUETLENGTH / 10 + 'px';
  racquet2.style.height = SECONDRAQUETLENGTH + 'px';
  racquet2.style.width = SECONDRAQUETLENGTH / 10 + 'px';
}());

