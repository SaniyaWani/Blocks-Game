
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6;
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Box (100,300,30,30);
	
	ground1 = new Ground(450,400,150,20);
	box1 = new BoxPink(400,380);
	box2 = new BoxPink(420,380);
	box3 = new BoxPink(440,380);
	box4 = new BoxPink(460,380);
	box5 = new BoxPink(480,380);
	box6 = new BoxPink(500,380);
	box7 = new BoxGreen(410,360);
	box8 = new BoxGreen(430,360);
	box9 = new BoxGreen(450,360);
	box10 = new BoxGreen(470,360);
	box11= new BoxGreen(490,360);
	box12 = new BoxBlue(420,340);
	box13 = new BoxBlue(440,340);
	box14 = new BoxBlue(460,340);
	box15= new BoxBlue(480,340);
	box16 = new BoxPink(430,320);
	box17= new BoxPink(450,320);
	box18= new BoxPink(470,320);
	box19 = new BoxGreen(440,300);
	box20 = new BoxGreen(460,300);
	box21 = new BoxBlue(450,270);

	ground2 = new Ground(620,220,90,20);
	box22 = new BoxBlue(600,200);
	box23 = new BoxBlue(620,200);
	box24 = new BoxBlue(640,200);
	box25 = new BoxGreen(610,180);
	box26 = new BoxGreen(630,180);
	box27= new BoxPink(620,160);
	slingShot = new Shot(ball.body,{x:100,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  ground2.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  ball.display();
  slingShot.display(); 
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
   
   }
   
   function mouseReleased()
   {
	   slingShot.fly();
   }

