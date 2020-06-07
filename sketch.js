const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var gameState;
var bgIMG;

function preload(){
  bgIMG=loadImage("Background.jpg");
}

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  friend1= new Friend (1002,100,1);
  friend2= new Friend (1100,100,2);
  friend3= new Friend (1202,100,3);
  friend4= new Friend (400,100,4);
  friend5= new Friend (502,100,5);
  friend6= new Friend (600,300,7);
  friend7= new Friend (702,100,6);
  friend8= new Friend (800,100,8);
  friend9= new Friend (902,100,9);
 

  ground_bottom= new Ground (700,600,1500,100);
  ground_side= new Ground(1300,300,100,600);
  ground_top=new Ground (700,0,1400,100);
  g1=new Ground (700,500,100,10);
  g2=new Ground (500,200,100,10);
  g3=new Ground (1200,300,100,10);
  g4=new Ground (1000,350,100,10);
  g5=new Ground (800,400,100,10);
  g6=new Ground (900,480,100,10);

  ball1= new Ball (290,330);
  chain1=new Chain(ball1.body,{x:220,y:230});
  chain2=new Chain(friend6.body,{x:500,y:200});
  
  gameState=1;

}

function draw() {
  background(bgIMG);  

  Engine.update(engine);
  ground_bottom.display();
  ground_side.display();
  ground_top.display();
  friend1.display();
  friend2.display();
  friend3.display();
  friend4.display();
  friend5.display();
  friend6.display();
  friend7.display();
  friend8.display();
  friend9.display();

  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  
  chain1.display();
  chain2.display();

  ball1.display();
  
  drawSprites();

}
function mouseDragged(){
  if(gameState===1){
  Matter.Body.setPosition(ball1.body,{x:mouseX+50,y:mouseY});
  
}
}
function mouseReleased(){
  if(gameState===1){
  chain1.fly();
  gameState=2;
  }
  
}