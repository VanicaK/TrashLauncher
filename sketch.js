
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide,rightSide;

function preload() {

}

function setup() {
	createCanvas(800, 400);


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 0.2,
	}

	ball = Bodies.circle(50, 200, 25, ball_options);

	engine = Engine.create();
	world = engine.world;

	World.add(world, ball);

	groundObj = new Ground(400, 390, 800, 10);
	leftSide = new Ground(680,350,10,100);
	rightSide = new Ground(780,350,10,100);

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("lime");
	Engine.update(engine)

	ellipseMode(CENTER);
	ellipse(ball.position.x, ball.position.y, 25, 25);

	if (keyDown("up_arrow")) {
		jump();
	}


	drawSprites();
	groundObj.display();
	leftSide.display();
	rightSide.display();
}

function jump() {
	Matter.Body.applyForce(ball, ball.position, { x: 0.5, y: -1.4 });
}


