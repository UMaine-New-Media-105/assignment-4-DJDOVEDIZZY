https://editor.p5js.org/cyprian.dove/sketches/Nxy6NH9kF
var flws = [50,100,150,200];

function setup() {
  createCanvas(600, 400);
   angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);
  background(color("goldenrod"))
 addTile();
  scale(2);
  addCornFlower(150,100)
}
function addCornFlower(x,y){
  /* 1. SPOKES: This example draws a wheel with 36 spokes. */
  push();
  translate(x,y);
  stroke("indigo");
  scale(.25);
  strokeWeight(1);
   fill("indigo");
   for (let petalsDrawn = 0; petalsDrawn <24; petalsDrawn++) {
     rotate(45);
     rect(0, 0, random(30,70), random(100,200));
   }
  fill("mediumblue");
   for (let petalsDrawn = 0; petalsDrawn <12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, random(50,70), random(100,170));
   }
   fill("royalblue");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(45);
     rect(0, 0, 50, 150);
   }
   fill("cornflowerblue");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, 40, 130);
   }
   fill("paleturquoise");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(40);
     rect(0, 0, 20, 90);
   }
   fill("slateblue");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, 15, 70);
   }
      fill("lightskyblue");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, 15, 35);
   }
  noStroke();
      fill("ivory");
   for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, 2, 60);
   }
  fill("goldenrod");
   for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
     rotate(40);
     rect(50, 5,15, 15);
   }
   fill("goldenrod");
   for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
     rotate(30);
     rect(0, 5,7, 10);
   }
   fill("mediumseagreen");
   for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
     rotate(30);
     rect(0, 5,3, 10);
   }
    pop(); 
}
function addTile(){
  push();
    translate(60,60);
  rotate(45);
  for (var flwrs = 0; flwrs < 4; flwrs++) {
    addCornFlower(flws[flwrs]-20,flws[flwrs]-30);
    addCornFlower(flws[flwrs]+50,flws[flwrs]-100);
    addCornFlower(flws[flwrs]+120,flws[flwrs]-170);
    addCornFlower(flws[flwrs]+190,flws[flwrs]-240);
     addCornFlower(flws[flwrs]+260,flws[flwrs]-310);
    addCornFlower(flws[flwrs]+260,flws[flwrs]-310);
     addCornFlower(flws[flwrs]+320,flws[flwrs]-370);
  }
  pop();
}
 
