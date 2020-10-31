
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(625,695,1400,20)
	box1 = new Box(700,650)
	box2 = new Box(700,600)
	box3 = new Box(700,550)
	box4 = new Box(700,500)
	box5 = new Box(700,450)
	box6 = new Box(700,400)

	box7 = new Box(790,650)
	box8 = new Box(790,600)
	box9 = new Box(790,550)
	box10 = new Box(790,500)
	box11 = new Box(790,450)
	box12 = new Box(790,400)
	box13 = new Box(790,350)

	

	ball = new Bob(200,400,80,80);
	rope = new Rope(ball.body,{x:500,y:50});
	
	Engine.run(engine);
  

}


function draw() {
background("lightBlue");
  
ground.display();
  
ball.display();
rope.display();

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

 
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
