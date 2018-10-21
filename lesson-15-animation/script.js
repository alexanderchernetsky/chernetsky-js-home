'use strict';

var FIELDWIDTH = 600; // the width of game table
var FIELDHEIGHT = 400; // the height of game table
var BALLSIZE = 40; // the size of the ball
var FIRSTRAQUETLENGTH = 120; // the length of first player raquet
var SECONDRAQUETLENGTH = 120; // the length of second player raquet

var body = document.getElementsByTagName('body')[0];

(function createGameTable() {
  body.appendChild(createButton());
  body.appendChild(createScore());
  body.appendChild(createField());
  field.appendChild(createRaquet1());
  field.appendChild(createRaquet2());
  field.appendChild(createBall());

  function createField() {
    var field = document.createElement('div');
    field.id = 'field';
    field.style.width = FIELDWIDTH + 'px';
    field.style.height = FIELDHEIGHT + 'px';
    field.style.backgroundColor = '#F0EE7E';
    field.style.border = '2px solid darkgray';
    field.style.position = 'relative';
    return field;
  }

  function createScore() {
    var score = document.createElement('div');
    score.id = 'score';
    var score1 = document.createElement('span');
    score1.id = 'player1';
    var score2 = document.createElement('span');
    score2.id = 'player2';
    var colon = document.createElement('span');
    colon.textContent = ':';
    score1.textContent = '0';
    score2.textContent = '0';
    score.appendChild(score1);
    score.appendChild(colon);
    score.appendChild(score2);
    score.style.display = 'inline-block';
    score.style.fontSize = '40px';
    score.style.paddingLeft = '160px';
    score.style.display = 'inline-block';
    return score;
  }

  function createRaquet1() {
    var racquet1 = document.createElement('div');
    racquet1.id = 'raquet1';
    racquet1.style.height = FIRSTRAQUETLENGTH + 'px';
    racquet1.style.width = FIRSTRAQUETLENGTH / 10 + 'px';
    racquet1.style.backgroundColor = 'green';
    racquet1.style.position = 'absolute';
    racquet1.style.left = 0;
    return racquet1;
  }

  function createRaquet2() {
    var racquet2 = document.createElement('div');
    racquet2.id = 'raquet2';
    racquet2.style.height = SECONDRAQUETLENGTH + 'px';
    racquet2.style.width = SECONDRAQUETLENGTH / 10 + 'px';
    racquet2.style.backgroundColor = '#191497';
    racquet2.style.position = 'absolute';
    racquet2.style.left = FIELDWIDTH - SECONDRAQUETLENGTH / 10 + 'px';
    return racquet2;
  }

  function createBall() {
    var ball = document.createElement('div');
    ball.id = 'ball';
    ball.style.width = BALLSIZE + 'px';
    ball.style.height = BALLSIZE + 'px';
    ball.style.borderRadius = BALLSIZE / 2 + 'px';
    ball.style.backgroundColor = 'red';
    ball.style.position = 'absolute';
    ball.style.left = '50%';
    ball.style.top = '50%';
    ball.style.transform = 'translate(-50%, -50%)';
    return ball;
  }

  function createButton() {
    var button = document.createElement('input');
    button.type = 'button';
    button.value = 'старт!';
    button.style.border = 'none';
    button.style.fontSize = '20px';
    button.style.width = '120px';
    return button;
  }
}());

var ball = {
  width: BALLSIZE,
  height: BALLSIZE,
  posX: 0,
  posY: 0,
  speedX: 10,
  speedY: 10,
  update: function () {
    var ballObj = document.getElementById('ball');
    ballObj.style.top = Math.round(this.posY) + 'px';
    ballObj.style.left = Math.round(this.posX) + 'px';
  }
};

var area = {
  width: FIELDWIDTH,
  height: FIELDHEIGHT
};

var raqLeft = {
  height: FIRSTRAQUETLENGTH,
  width: FIRSTRAQUETLENGTH / 10,
  speedY: 0,
  posY: 0,
  update: function () {
    var raqObj1 = document.getElementById('raquet1');
    raqObj1.style.top = Math.round(this.posY) + 'px';
  }
};

var raqRight = {
  height: SECONDRAQUETLENGTH,
  width: SECONDRAQUETLENGTH / 10,
  speedY: 0,
  posY: 0,
  update: function () {
    var raqObj2 = document.getElementById('raquet2');
    console.log(raqObj2);
    raqObj2.style.top = Math.round(this.posY) + 'px';
  }
};

window.addEventListener('keydown', startMoveRaquets, false);

function startMoveRaquets(EO) {
  setInterval(moveRaquets(EO), 40);
}

function moveRaquets(EO) {
  console.log(EO.which);

  switch (EO.which) {
  case 38:
    raqRight.speedY = -2;
    raqRight.posY += raqRight.speedY;
    raqRight.update();
    break;
  case 40:
    raqRight.speedY = 2;
    raqRight.posY += raqRight.speedY;
    raqRight.update();
    break;
  case 16:
    raqLeft.speedY = -2;
    raqLeft.posY += raqLeft.speedY;
    raqLeft.update();
    break;
  case 17:
    raqLeft.speedY = 2;
    raqLeft.posY += raqLeft.speedY;
    raqLeft.update();
    break;
  default:
    break;
  }




}
