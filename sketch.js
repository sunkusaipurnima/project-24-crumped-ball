
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var paperBall, dustbin_bottom,dustbin_right,dustbin_left;
var count;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,height-10,width,20);
	dustbin_bottom = new Box(600,480,200,20);
	dustbin_left= new Box(500,450,20,100);
	dustbin_right= new Box(700,450,20,100);
	
	paperBall= new PaperBall(100,180,20);

	//console.log(dustbin_right);
    count=0;



	
  
}


function draw() {
  
  background(0);
  text("press up arrow to throw the ball in bin",100,50);
  Engine.update(engine);
  ground.display();
  dustbin_bottom.display();
  dustbin_left.display();
  dustbin_right.display();
  paperBall.display();
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		count++;
		if(count<=1){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:4,y:-6});
		}
	}
}



