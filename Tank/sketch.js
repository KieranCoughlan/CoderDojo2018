let tanks = [];
let shells = [];
let gameOver = false;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  rectMode(CENTER);

  tanks.push(new Tank(createVector(width / 4, height / 2),
    'Olive', 'Brown'));
  tanks[0].angle = 180;

  tanks.push(new Tank(createVector(3 * width / 4, height / 2),
    'Green', 'DarkGreen'));
}

function draw() {
  background("Black");
  checkInput();
  removeFinishedShells();

  shells.forEach(function (shell) {
    shell.draw();
  });

  tanks.forEach(function (tank) {
    tank.draw();
  });

  drawTankHealth();
}

function removeFinishedShells() {
  shells = shells.filter(function (value, index, arr) {
    return value.finished() == false;
  });
}

function checkInput() {
  if (keyIsDown(LEFT_ARROW)) {
    tanks[0].rotate(-1);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    tanks[0].rotate(1);
  }

  if (keyIsDown(UP_ARROW)) {
    tanks[0].drive(1);
  }
  else if (keyIsDown(DOWN_ARROW)) {
    tanks[0].drive(-1);
  }

  if (keyIsPressed && key == 'a') {
    tanks[1].rotate(-1);
  }
  else if (keyIsPressed && key == 'd') {
    tanks[1].rotate(1);
  }

  if (keyIsPressed && key == 'w') {
    tanks[1].drive(1);
  }
  else if (keyIsPressed && key == 's') {
    tanks[1].drive(-1);
  }
}

function keyPressed() {
  if (key == 'm') {
    tanks[0].fire();
  }

  if (key == 'v') {
    tanks[1].fire();
  }
}

function drawTankHealth(){
  push();

  textSize(20);
  fill('Olive');
  textAlign(LEFT, TOP);
  text("Player 1: " + tanks[0].health, 20, 20);

  fill('Green');
  textAlign(RIGHT, TOP);
  text("Player 2: " + tanks[1].health, width - 20, 20);

  pop();
}