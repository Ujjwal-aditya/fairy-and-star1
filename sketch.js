const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;

function preload()
{

  //preload the images here
  fairyImg = loadAnimation('fairy1.png','fairy2.png')
  backGround = loadImage("starnight.png");
  starImg    = loadImage("star.png");
}
var engine,world,fairy,fairyImg,backGround,star,options,starImg;

function setup() 
{
	createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
  fairy  = createSprite(100,600,10,10);
  fairy.addAnimation("flying",fairyImg);
  fairy.scale=0.3;
  options = {
    isStatic : true
  }
  star  = Bodies.rectangle(500,100,10,10,options);
  World.add(world,star);
}

function draw() 
{
  
  Engine.update(engine);
  background(backGround);
  drawSprites();
  var pos = star.position;
  if(keyDown("DOWN"))
  {
   Body.setStatic(star,false);
  }
  if(pos.y>565 )//&& pos.x- fairy.x>(50+fairy.width)/2 && fairy.x- pos.x>(50+fairy.width)/2)
  {
    Body.setStatic(star,true);
  }

  
    if(keyDown("LEFT"))
    {
      fairy.x = fairy.x + 5;
    }
    if(keyDown("RIGHT"))
    {
      fairy.x = fairy.x + 5;
    }
  
  image(starImg,star.position.x,star.position.y,50,50);
  
  

  
}
