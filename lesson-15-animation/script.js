'use strict';

var FIELDWIDTH = 600; // the width of game table
var FIELDHEIGHT = 400; // the height of game table
var BALLSIZE = 40; // the size of the ball
var FIRSTRAQUETLENGTH = 120; // the length of first player raquet
var SECONDRAQUETLENGTH = 120; // the length of second player raquet

var body = document.getElementsByTagName('body')[0];

// draw UI

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

// describe objects

var ball = {
  width: BALLSIZE,
  height: BALLSIZE,
  posX: FIELDWIDTH / 2 - BALLSIZE / 2,
  posY: FIELDHEIGHT / 2 - BALLSIZE / 2,
  speedX: 0,
  speedY: 0,
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

var racLeft = {
  height: FIRSTRAQUETLENGTH,
  width: FIRSTRAQUETLENGTH / 10,
  speedY: 0,
  posY: 0,
  update: function () {
    var raqObj1 = document.getElementById('raquet1');
    raqObj1.style.top = Math.round(this.posY) + 'px';
  }
};

var racRight = {
  height: SECONDRAQUETLENGTH,
  width: SECONDRAQUETLENGTH / 10,
  speedY: 0,
  posY: 0,
  update: function () {
    var raqObj2 = document.getElementById('raquet2');
    raqObj2.style.top = Math.round(this.posY) + 'px';
  }
};

var player1score = 0;
var player2score = 0;
var scoreEl1 = document.getElementById('player1');
scoreEl1.textContent = player1score;
var scoreEl2 = document.getElementById('player2');
scoreEl2.textContent = player2score;

// logic

var timer = setInterval(tick, 40);

window.addEventListener('keydown', moveRaquets, false);
window.addEventListener('keyup', stopRaquets, false);

var but = document.getElementsByTagName('input')[0];
but.addEventListener('click', startGame, false);

var stopped = false;


function startGame() {
  ball.posX = FIELDWIDTH / 2 - BALLSIZE / 2;
  ball.posY = FIELDHEIGHT / 2 - BALLSIZE / 2;

  if (Math.floor(Math.random() * 2) + 1 === 1) {
    ball.speedX = -(Math.floor(Math.random() * 6) + 5);
  } else {
    ball.speedX = Math.floor(Math.random() * 6) + 5;
  }

  if (Math.floor(Math.random() * 2) + 1 === 1) {
    ball.speedY = -(Math.floor(Math.random() * 5) + 1);
  } else {
    ball.speedY = Math.floor(Math.random() * 5) + 1;
  }

  if (stopped === true) {
    timer = setInterval(tick, 40);
  }


}




function stop() {
  clearInterval(timer);
  stopped = true;
}


function tick() {
  // racquets
  racRight.posY += racRight.speedY;
  racLeft.posY += racLeft.speedY;
  if (racRight.posY < 0) {
    racRight.posY = 0;
  }
  if (racRight.posY + racRight.height > area.height) {
    racRight.posY = area.height - racRight.height;
  }
  if (racLeft.posY < 0) {
    racLeft.posY = 0;
  }
  if (racLeft.posY + racLeft.height > area.height) {
    racLeft.posY = area.height - racLeft.height;
  }
  racRight.update();
  racLeft.update();

  // ball and area

  ball.posX += ball.speedX;
  ball.posY += ball.speedY;

  if (ball.posX + ball.width > area.width) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = area.width - ball.width;
  }

  if (ball.posX < 0) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = 0;
  }

  if (ball.posY + ball.height > area.height) {
    ball.speedY = -ball.speedY;
    ball.posY = area.height - ball.height;
  }

  if (ball.posY < 0) {
    ball.speedY = -ball.speedY;
    ball.posY = 0;
  }

  // ball and racquet

  if (ball.posX > area.width - ball.width - racRight.width) {
    if (ball.posY > racRight.posY && ball.posY < racRight.posY + racRight.height) {
      ball.posX = area.width - ball.width - racRight.width
      ball.speedX = -ball.speedX;
    } else if (ball.posX === area.width - ball.width) {
      player1score++;
      console.log('goal right');
      stop();

    }
  }

  if (ball.posX < racRight.width) {
    if (ball.posY > racLeft.posY && ball.posY < racLeft.posY + racLeft.height) {
      ball.posX = racRight.width
      ball.speedX = -ball.speedX;
    } else if (ball.posX === 0) {
      player2score++;
      console.log('goal left');
      stop();
    }
  }

  ball.update();
  scoreEl1.textContent = player1score;
  scoreEl2.textContent = player2score;
}

function stopRaquets(EO) {
  EO = EO || window.event;

  switch (EO.which) {
  case 38:
    racRight.speedY = 0;
    break;
  case 40:
    racRight.speedY = 0;
    break;
  case 16:
    racLeft.speedY = 0;
    break;
  case 17:
    racLeft.speedY = 0;
    break;
  default:
    break;
  }
}

function moveRaquets(EO) {
  EO = EO || window.event;

  switch (EO.which) {
  case 38:
    racRight.speedY = -3;
    break;
  case 40:
    racRight.speedY = 3;
    break;
  case 16:
    racLeft.speedY = -3;
    break;
  case 17:
    racLeft.speedY = 3;
    break;
  default:
    break;
  }
}
