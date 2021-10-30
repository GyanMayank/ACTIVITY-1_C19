var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostJumping, ghostImg, ghostJumpingImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  ghostJumpingImg = loadImage("ghost-jumping.png")
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 3;

  ghost = createSprite(300,300)
  ghost.addImage("ghostRunnner", ghostImg)
  ghost.addImage("ghostJumping", ghostJumpingImg)
  ghost.scale=0.4

  climbersGroup=new Group()

  doorsGroup=new Group()
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
    tower.y = 300
  }

  ghost.changeImage("ghostRunnner", ghostImg)

  if(keyDown("space")){
    ghost.velocityY=-10
    ghost.changeImage("ghostJumping", ghostJumpingImg)
  }

  ghost.velocityY+=0.5

  if(keyDown(LEFT_ARROW)){
    ghost.x-=5
  }

  if(keyDown(RIGHT_ARROW)){
    ghost.x+=5
  }

  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
  }

  spawnHolder()

  drawSprites()
}

function spawnHolder(){

  if(frameCount%200==0){

    var rand=Math.round(random(100,500))

    door = createSprite(rand, -10)
    door.addImage("door", doorImg)
    door.velocityY=3
    doorsGroup.add(door)
  
    climber = createSprite(rand, 50)
    climber.addImage("climber", climberImg)
    climber.velocityY=3
    climbersGroup.add(climber)

    ghost.depth=door.depth
    ghost.depth+=1

  }

  


}
