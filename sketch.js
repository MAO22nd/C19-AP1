var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  spookySound.loop();
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group ();
  cliberGroup = new Group ();
  invisibleBlockGroup = new Group ();
  ghost= creatSprite(200,200,50,50);
  ghost.scale = 0.3
  ghost.addImage("ghost",ghostImg);
}

function draw() {
  background(200);
  if(gameState===play)
    if(keyDown"leftarrow")
      ghost.x - ghost.x +3
}
 if(keyDown"righarrow")){
    ghost.x - ghost.x +3
}
ghost.velocityY = ghost.velocityY + 0,8 
if (tower.Y > 400){
  tower.=300
if(keyDown"space")){
    ghost.x - ghost.x +3
  if(tower.y > 400){
      tower.y = 300
  }
  spawnDoors();
  if(climbersGroup.isTouching(ghost)){
    ghost.velocity=0
  }
  if(invisibleBlockGroup.istouching(ghost) || ghost.y > 600 {
     ghost.destroy()
    gameState= "end"
}
  drawSprites();
}
if(gameState =  "end"){
  stroke("yellow")
  fill("yellow")
  textSize(30);
  text("fim fim de jogo"230,250)
}


    }
}
function spawDoors () {
  if (frameCount % 240 === 0 ){
var door = creatSprite(250,-50);
  var climber = creatSprite(200,0);
  var invisibleBlock = creatSprite(200,15);
    invisibleBlock.width = clinber.width;
  invisibleBlock = heigth = 2;
   
  door.x = math.round(randon(120,400));
  climber.x = door.x;
    invisibleBlock.x = door.x ;
    door.addImage(addImg);
  cliber.addimge(addimage);
  door.velocityY=1;
    climber.velocityY= -1;
  invisibleBlock.velocityY= -1;
    ghost.deth = door.deth;
    gost.deth +=1;
  door.lifeTime=800;
 climber.lifeTime=800;
  invisibleBlock.lifeTime=800;
  doorsgroup.add (door);
    invisibleBlock.debug = true
      climbersGroup.add (climbers);
      invisibleBlockGroup.add (invisibleBlock);

  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
