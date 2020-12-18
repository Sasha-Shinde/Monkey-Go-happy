
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,groundImage;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
 createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  fruitGroup=createGroup();
  obstacleGroup=createGroup();

  
}


function draw() {
background("white");
  
  monkey.collide(ground);
  if (ground.x > 0) {
    ground.x = width / 2
  }
  
  if(keyDown("space")&& monkey.y>=100)
        monkey.velocityY = -12;
  
  monkey.velocityY += 0.8;
  fruits();
  rock();
  if (monkey.isTouching(obstacleGroup)) {
    FoodGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityEach(0);
    
    ground.velocityX=0;
    monkey.velocityY=0;
    survivalTime=0;
  }    
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())
  text("SurvivalTime:" + survivalTime, 100, 50)
  stroke("black");
  textSize(20);
  fill("white")
  text("score:" + score, 500, 50)
  drawSprites()
} 


function fruits() {
  if (frameCount % 100 == 0) {
    banana = createSprite(400, Math.round(random(120, 200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    banana.depth = monkey.depth;
    monkey.depth += 1;
  }
}



function rock() {
  if (frameCount % 300 === 0) {
   obstacle = createSprite(400, 330);
obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
  }
}


