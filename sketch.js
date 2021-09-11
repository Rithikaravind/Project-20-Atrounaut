const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var butn1,butn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  butn1=createImg('right.png')
  butn1.position(220,30);
  butn1.size(50,50);

  butn2=createImg('up.png');
  butn2.position(130,30)
  butn2.size(50,50);

  butn1.mouseClicked(horizontalforce);
  butn2.mouseClicked(verticalforce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
var ball_option={
  restitution: 0.2
}
  ball = Bodies.circle(50,100,15, ball_option);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
}

function verticalforce(){
  Matter.Body.applyForce(ball, {x:0,y:0},{x:0,y:-0.04});
}

function horizontalforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.01, y:0});
}

