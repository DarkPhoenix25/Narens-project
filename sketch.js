var background1,backgroundImage,pizza,burger,pizzaImage,burgerImage



function preload(){
backgroundImage = loadImage ("Images/Retail_Row.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  background1 = createSprite(400.200,800,400)
  background1.addImage("b1",backgroundImage)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}