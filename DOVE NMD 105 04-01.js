https://editor.p5js.org/cyprian.dove/sketches/c2CNEDTjN
EX. Make a shape with loops
function setup() {
  createCanvas(400, 400);
   angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);
  background(color("goldenrod"))
 addCornFlower();
}
function addCornFlower(x,y){
  /* 1. SPOKES: This example draws a wheel with 36 spokes. */
  push();
  translate(width / 2, height / 2);
  stroke("indigo");
  scale(1.2);
  strokeWeight(1);
   fill("indigo");
   for (let petalsDrawn = 0; petalsDrawn <24; petalsDrawn++) {
     rotate(45);
     rect(0, 0, 70, 200);
   }
  fill("mediumblue");
   for (let petalsDrawn = 0; petalsDrawn <12; petalsDrawn++) {
     rotate(30);
     rect(0, 0, 70, 170);
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
 
