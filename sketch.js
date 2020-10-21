
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,250);
  
monkey=createSprite(50,200,20,20);
monkey.addAnimation("running",monkey_running);  
monkey.scale=0.1;  
  
  ground= createSprite(300,235,1200,5);
  ground.shapeColor="brown";
  ground.velocityX=-6;
  ground.x=ground.width/2;
  survivalTime=0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  drawSprites();
  
text("survivalTime: "+ survivalTime, 450,50);
survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
 SpawnBanana();
 SpawnObstacle();
}

function SpawnBanana() {
  if(frameCount% 80===0){
    var banana=createSprite(600,120,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-5
    banana.scale=0.1;
    banana.lifetime=220;
    FoodGroup.add(banana);
  }
}

function SpawnObstacle() {
  if(frameCount% 300===0){
    var obstacle= createSprite(600,225,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4
    obstacle.scale=0.09
    obstacle.lifetime=220;
    obstacleGroup.add(obstacle);
  }
}