let env;
let player;
let gameObjects = [];
let speed = 0.01;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
  env = new Environment(0.004, 100, height);
  player = new Player(100, 2);
  gameObjects.push(env);
  gameObjects.push(player);
}

function draw() {
  background("Black");

  removeInactiveGOs();
  for(let i = 0; i < gameObjects.length; i++){
    gameObjects[i].update();
  }

  if (env.isBelowGround(player.x, player.y)){
    player.active = false;
    speed = 0;
  }
}

function removeInactiveGOs(){
  let activeGOs = [];

  for(let i = 0; i < gameObjects.length; i++){
    if (gameObjects[i].active == true){
      activeGOs.push(gameObjects[i]);
    }
  }

  gameObjects = activeGOs;
}

