const Engine = Matter.Engine
const World  =  Matter.World  
const Bodies  =   Matter.Bodies  
const Constraint =  Matter.Constraint

var world,engine
var backgroundimg;

function setup() {
  engine = Engine.create()
  world = engine.world

  Canvas = createCanvas(1200,800);

  backgroundimg = loadImage("bg2.jpg");

  ground = new Ground(200,790,2000,20);
  ground2 = new Ground(510,720,300,20);

  hexagon = new Hexagon(200,200,50);
  
  box1 = new Box(430,700);
  box2 = new Box(450,700);
  box3 = new Box(470,700);
  box4 = new Box(490,700);
  box5 = new Box(510,700);
  box6 = new Box(530,700);
  box7 = new Box(550,700);
  box8 = new Box(570,700);
  box9 = new Box(590,700);

  box10 = new Box(470,680);
  box11 = new Box(490,680);
  box12 = new Box(510,680);
  box13 = new Box(530,680);
  box14 = new Box(550,680);

  box15 = new Box(490,660);
  box16 = new Box(510,660);
  box17 = new Box(530,660);

  box18 = new Box(510,640);

  chain1 = new Chainclass(hexagon.body,{x:200,y:400});
}

function draw() {
  Engine.update(engine)
  background(backgroundimg);  
 ground.display();
 ground2.display();

 hexagon.display();

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

 chain1.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain1.fly()
}

function keyPressed(){
  if(keyCode === 32){
   chain1.attach(hexagon.body)
   
  }
}