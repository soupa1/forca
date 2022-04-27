const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var cima, baixo, esquerda, direita;
var bola;
var rightButton, upButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var bolaConfig = {
    restitution: 0.4,

  }

  bola = Bodies.circle(200, 100, 20, bolaConfig);
  World.add(world, bola);

  rightButton = createImg('right.png');
  rightButton.position(220, 30);
  rightButton.size(50, 50);
  rightButton.mouseClicked(rightForce);

  upButton = createImg('up.png');
  upButton.position(20, 30);
  upButton.size(50, 50);
  upButton.mouseClicked(upForce);

  cima = new Parede(200,10,400,20);
  baixo = new Parede(200,390,400,20);
  esquerda = new Parede(10,200,20,400);
  direita = new Parede(390,200,20,400);
  
}

function draw() {
  background("white");
  Engine.update(engine);


  fill('blue');
  ellipse(bola.position.x, bola.position.y, 20);

  cima.show();
  baixo.show();
  esquerda.show();
  direita.show();
}

function rightForce() {
  Matter.Body.applyForce(bola,{x: 0, y: 0},{x: 0.03, y: 0});
}

function upForce() {
  Matter.Body.applyForce(bola,{x: 0, y: 0},{x: 0, y: -0.03});
}