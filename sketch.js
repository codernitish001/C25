const E = Matter.Engine;
const W = Matter.World;
const B = Matter.Bodies;
const Body = Matter.Body;
var ball, wall1, wall2, wall3, ground; 
var engine,world;
var dustbin,dustbinImg;
function preload(){
	dustbinImg=loadImage('dustbingreen.png');
}
function setup() {
	createCanvas(800, 700);
	dustbin=createSprite(625,540,1,1);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.7;
	engine = E.create();
	world = engine.world;
	ball = new Paper(100, 350); 
	ground = new Wall(400, 650, 800, 20);
	wall1 = new Wall(550, 530, 20, 200)
	wall2 = new Wall(700, 530, 20, 200)
	wall3 = new Wall(625, 630, 162, 20)
	E.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220); 
  fill('orange')
  ball.display();
  ground.display();
  fill('red');
  wall3.display();
  wall1.display();
  wall2.display(); 
  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
		Body.applyForce(ball.body, ball.body.position, {x:70,y:-70})
	}
}


