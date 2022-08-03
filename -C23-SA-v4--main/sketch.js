const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var button;
var button2;

var ground;

function preload() {

}

function setup() {
  createCanvas(700, 700);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
		frictionAir: 0.01,
  }

  var ground_option = {
    isStatic: true,
  }

  button = createImg('images/button.png');
  button.position(20, 30);
  button.size(50, 50);
  button.mouseClicked(vForce);

  button2 = createImg('images/greenButton.png');
  button2.position(635, 35);
  button2.size(35, 35);
  button2.mouseClicked(hForce);

  ground = new Ground(350, 50, 60, 20);

  ball = Bodies.circle(350, 350, 20, ball_options);
  World.add(world, ball);

  ground = Bodies.rectangle(350, 650, 500, 20, ground_option);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() { 
  background(51);

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20,);
}

function vForce() {
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.05});
}

function hForce() {
  Matter.Body.applyForce(ball, {x: 0, y: 0},{x: -0.05, y: 0})
}