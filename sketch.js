const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var slingshot;
var ball;
var score = 0;
function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(600,340,400,20);
    ground3 = new Ground(1000,240,300,20);

    box1 = new Box(450,320,50,50);
    box2 = new Box(500,320,50,50);
    box3 = new Box(550,240,50,50);
    box4 = new Box(600,240,50,50);
    box5 = new Box(650,160,50,50);
    box6 = new Box(700,320,50,50);
    box7 = new Box(750,320,50,50);
    box8 = new Box(500,270,50,50);
    box9 = new Box(550,270,50,50);
    box10 = new Box(600,270,50,50);
    box11 = new Box(650,270,50,50);
    box12 = new Box(700,270,50,50);
    box13 = new Box(550,220,50,50);
    box14 = new Box(600,220,50,50);
    box15 = new Box(650,220,50,50);
    box16 = new Box(600,170,50,50);

    box17 = new Box(900,220,50,50);
    box18 = new Box(950,220,50,50);
    box19 = new Box(1000,220,50,50);
    box20 = new Box(1050,220,50,50);
    box21 = new Box(1100,220,50,50);
    box22 = new Box(950,170,50,50);
    box23 = new Box(1000,170,50,50);
    box24 = new Box(1050,170,50,50);
    box25 = new Box(1000,130,50,50);

    ball = new Ball(50,260,50,50);

    slingshot = new SlingShot(ball.body,{x:200,y:160});
}

function draw(){
    
        background("black");
        text("SCORE : "+ score,740,40);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();

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
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    ball.display();

    slingshot.display();

    

   box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
   slingshot.fly();
}
function keyPressed () {
    if(keyCode === 32) {
        slingshot.attach(ball.body);
    }
}