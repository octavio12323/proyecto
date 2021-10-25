var sea,seainvisible;
var ship,shipNavigation;
function preload(){
  ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  sea = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);


  //colocar el sprite de ship 
  ship = createSprite (50,180,20,50);
  ship.addAnimation("ship",ship);
  ship.scale=0.5;

  //colocar el sprite de sea 
  sea = createSprite(50,180,600,400);
  sea.addImage("sea",sea);
  
  
  if (sea.x <0) {
    sea.x=sea.width/2;
}
}

function draw() {
  background("white")
  
  drawSprites();
}