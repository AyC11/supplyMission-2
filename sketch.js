var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helcoptierSprite.velocityX=2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 box1=new Box(400,645,220,20);
	 box2=new Box(500,610,20,100);
	 box3=new Box(300,610,20,100);
	Engine.run(engine);

}


function draw() {
	
  rectMode(CENTER);
  background(0);
  keyPressed() ;
 // box1.display();
//  box2obj.display();
  //console.log(box2obj)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageBody.restitution=1;
  
  if(packageSprite.isTouching(groundSprite)){
	
	score=score+1; 
	if(score==3){
		
		Matter.Body.setStatic(packageBody, true);
 
	}
  }
  box1.display();
  box2.display();
  box3.display();
  Engine.update(engine);
  /*if(keyCode == RIGHT_ARROW){
	Matter.Body.setStatic(helicopterSprite, false); 
	helicopterSprite.velocityX=2;
  }*/
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   packageSprite.velocityX=0;
  packageSprite.velocityY=2                                                                                                                                                                            
  }
}
