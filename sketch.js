
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,tree;
var launchForce = 100;

function preload(){
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;
	groundObject = new ground();
	stoneObj= new Stone(100,460,23);
	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,320,35);
	mango7=new mango(825,170,35);
	mango8=new mango(880,260,35);
	mango9=new mango(940,220,35);
	mango10=new mango(980,305,35);
	launcherObject = new Throw(stoneObj.body,{x:235,y:510});
	treeObj = new Tree(800,650)
	boy = new Boy(285,623,150)
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background("grey");
	fill("black")
	textSize(18);
  stoneObj.display();
  groundObject.display();
  launcherObject.display();
  treeObj.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  boy.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcherObject.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		launcherObject.Launch(stones.body);
	}
}