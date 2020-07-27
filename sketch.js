var ground, p1, p2;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function setup() {
  createCanvas(800,400);

  ground = createSprite(400, 390, 2000, 10);
  ground.shapeColor = color("black");

  p1 = createSprite(390, 300, 250, 10);
  p1.shapeColor = color("black");

  a1 = createSprite(300, 275, 30, 40);
  a1.shapeColor = color("pink");
  a2 = createSprite(330, 275, 30, 40);
  a2.shapeColor = color("purple");
  a3 = createSprite(360, 275, 30, 40);
  a3.shapeColor = color("blue");
  a4 = createSprite(390, 275, 30, 40);
  a4.shapeColor = color("pink");
  a5 = createSprite(420, 275, 30, 40);
  a5.shapeColor = color("purple");
  a6 = createSprite(450, 275, 30, 40);
  a6.shapeColor = color("blue");
  a7 = createSprite(480, 275, 30, 40);
  a7.shapeColor = color("pink");

  a8 = createSprite(330, 235, 30, 40);
  a8.shapeColor = color("purple");
  a9 = createSprite(360, 235, 30, 40);
  a9.shapeColor = color("blue");
  a10 = createSprite(390, 235, 30, 40);
  a10.shapeColor = color("pink");
  a11 = createSprite(420, 235, 30, 40);
  a11.shapeColor = color("purple");
  a12 = createSprite(450, 235, 30, 40);
  a12.shapeColor = color("blue");

  a13 = createSprite(360, 195, 30, 40);
  a13.shapeColor = color("blue");
  a14 = createSprite(390, 195, 30, 40);
  a14.shapeColor = color("pink");
  a15 = createSprite(420, 195, 30, 40);
  a15.shapeColor = color("purple");

  a16 = createSprite(390, 155, 30, 40);
  a16.shapeColor = color("pink");


  //second pyrmiad

  p2 = createSprite(580, 115, 190, 10);
  p2.shapeColor = color("pink");

  b1 = createSprite(520, 90, 30, 40);
  b1.shapeColor = color("purple");
  b2 = createSprite(550, 90, 30, 40);
  b2.shapeColor = color("blue");
  b3 = createSprite(580, 90, 30, 40);
  b3.shapeColor = color("pink");
  b4 = createSprite(610, 90, 30, 40);
  b4.shapeColor = color("purple");
  b5 = createSprite(640, 90, 30, 40);
  b5.shapeColor = color("blue");

  b6 = createSprite(550, 60, 30, 40);
  b6.shapeColor = color("blue");
  b7 = createSprite(580, 60, 30, 40);
  b7.shapeColor = color("pink");
  b8 = createSprite(610, 60, 30, 40);
  b8.shapeColor = color("purple");

  b9 = createSprite(580, 30, 30, 40);
  b9.shapeColor = color("pink");

}

function draw() {
  background(255,255,255);  
  drawSprites();
}