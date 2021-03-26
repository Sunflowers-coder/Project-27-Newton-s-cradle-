
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(365,112,400,30);

    bobObject1 = new Bob(250,612,30);
	bobObject2 = new Bob(310,612,30);
	bobObject3 = new Bob(370,612,30);
	bobObject4 = new Bob(430,612,30);
	bobObject5 = new Bob(490,612,30);

	rope1= new Rope(bobObject1.body,roof.body,-60*2, 0);
	rope2= new Rope(bobObject2.body,roof.body,-30*2,0);
	rope3= new Rope(bobObject3.body,roof.body,-0*2,0);
	rope4= new Rope(bobObject4.body,roof.body,30*2,0);
	rope5= new Rope(bobObject5.body,roof.body,60*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#e4e4e4");
  //console.log(mouseX+","+mouseY);
  //textSize(23)
  //text(mouseX+","+mouseY,40,46);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display(); 
  rope4.display();
  rope5.display();

  drawSprites();
}
function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -60, y:-45});
	}
}