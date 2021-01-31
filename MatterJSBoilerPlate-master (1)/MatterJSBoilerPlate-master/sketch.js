
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var Bob;
var Roof;
var Rope1,Rope2,Rope3,Rope4,Rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob1 = new bob(200,450,50,50)
	Bob2 = new bob(260,450,50,50)
	Bob3 = new bob(320,450,50,50)
	Bob4 = new bob(380,450,50,50)
	Bob5 = new bob(440,450,50,50)
	Roof  = new roof(320,200,320,20)
	Rope1 = new rope(Bob1.body,Roof.body,-50,0)
	Rope2
	Rope3
	Rope4
	Rope5
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Roof.display();
  
  
  drawSprites();
 
}



