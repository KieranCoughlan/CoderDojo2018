let tank; 

function setup() {
    createCanvas(800, 600);
    tank = new Tank(createVector(width/2, height/2),
                    'Olive', 'Brown');
}

function draw() {
    background("Black");
    checkInput();
    tank.draw();
}

function checkInput(){
  if (keyIsDown(LEFT_ARROW)){
    tank.rotate(-1);
  }
  else if (keyIsDown(RIGHT_ARROW)){
    tank.rotate(1);
  }

  if (keyIsDown(UP_ARROW)){
    tank.drive(1);
  }
  else if (keyIsDown(DOWN_ARROW)){
    tank.drive(-1);
  }
}
