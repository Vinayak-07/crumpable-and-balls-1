
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var rec1,rec2,rec3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 760);
	rec1 = createSprite(600,620,10,100);
	rec1.shapeColor = "red";
	rec2 = createSprite(670,665,150,10);
	rec2.shapeColor = "red";
	rec3 = createSprite(750,620,10,100);
	rec3.shapeColor = "red";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,100,3);
	ground1 = new Ground(600,680,1200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  drawSprites();
  rec1.display();
  ground1.display();
  keyPressed();
}

function keyPressed(){
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body, paper1.body.position, {
      x: 85,
      y: -85
    });
  }
}



