
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper,dustbin,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	 papper=new Papper(200,450,40);
	 dustbin=new Dustbin(1200,650);
	ground=new Ground();
	//Create the Bodies Here.
 
  
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  papper.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(papper.body,papper.body.position,{x:150,y:-150});
	}
}


