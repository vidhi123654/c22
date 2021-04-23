var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 
  movingRect=createSprite(600,200,50,80)
  movingRect.shapeColor="red"
  fixedRect=createSprite(400,300,80,30)
  fixedRect.shapeColor="red"
  
}

function draw() {
  background(0);
  
  movingRect.x=mouseX
  movingRect.y=mouseY

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  ){
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
  
}
else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}

  drawSprites();
}