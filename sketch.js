var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaf, leafImg;
var leaf1,leaf2Img;
var leaf2,leaf2Img;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
  leaf1Img = loadImage("orangeLeaf.png")
  leaf2Img = loadImage("leaf.png")
}

function setup(){
  
 createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating boy running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {

    if (select_sprites  == 1) {
      createApples(); 
    }
    else if  (select_sprites == 2) {      
      createApples(); 
    }
    
    else {  
      createApples();
    } 
  }
  if (frameCount % 100 == 0) {

    if (select_sprites  == 1) {
      createLeaves();
    }
   else if  (select_sprites == 2) {
      createLeaves();
    }
    else { 
      createLeaves(); 
    } 
  }

  if (frameCount % 120 == 0) {

    if (select_sprites  == 1) {
      createGreenLeaves();
    }
   else if  (select_sprites == 2) {
      createGreenLeaves();
    }
    else { 
      createGreenLeaves(); 
    } 
  }

  if (frameCount % 70 == 0) {

    if (select_sprites  == 1) {
      createOrangeLeaves();
    }
   else if  (select_sprites == 2) {
      createOrangeLeaves();
    }
    else { 
      createOrangeLeaves(); 
    } 
  }
  drawSprites();
}
function createApples() {
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
}
function createLeaves() {
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
}
function createOrangeLeaves() {
  leaf1=createSprite(random(50,350),40,10,10)
  leaf1.addImage(leaf2Img);
  leaf1.scale=0.1;
  leaf1.velocityY=5;
  leaf1.lifetime=150;
}

function createGreenLeaves() {
  leaf2=createSprite(random(50,350),40,10,10)
  leaf2.addImage(leaf2Img);
  leaf2.scale=0.1;
  leaf2.velocityY=5;
  leaf2.lifetime=150;
}