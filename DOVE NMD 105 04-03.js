https://editor.p5js.org/cyprian.dove/sketches/iCntylBeI
var flws = [15, 80, 140, 200, 260];
var clrs = [
  "indigo",
  "mediumblue",
  "cornflowerblue",
  "royalblue",
  "paleturquoise",
  "slateblue",
  "lightskyblue",
];
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);

function setup() {
  createCanvas(620, 440);
  angleMode(DEGREES);
  noLoop();
  xCoord = 60;
  yCoord = 60;
}
function draw() {
  let randomClr = "rgb(" + x + "," + y + "," + z + ")";
  background(randomClr);
  addShadow1();
  addTile();
  scale(2.5);
  addCornFlower(120, 90);
}
function addShadow1(x, y) {
  push();
  scale(1.5);
  translate(-50, -120);
   rotate(0);
  blendMode(ADD);
  strokeWeight(30);
  stroke(80, 150, 255);
  addTile();
  pop();
}
function addCornFlower(x, y) {
  push();
  translate(x, y);
  stroke("indigo");
  scale(0.22);
  strokeWeight(1);
  fill("indigo");
  for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
    rotate(35);
    rect(0, 0, random(70, 90), random(120, 240));
  }
  fill("mediumblue");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(50, 80), random(130, 210));
  }
  fill("royalblue");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(45);
    rect(0, 0, random(20,50), random(100, 170));
  }
  fill("cornflowerblue");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(40), random(80, 130));
  }
  fill("paleturquoise");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(40);
    rect(0, 0, random(10, 20), random(70, 90));
  }
  fill("slateblue");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(15, 30), random(50,70));
  }
  fill("lightskyblue");
  for (let petalsDrawn = 0; petalsDrawn < 13; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(15), random(35));
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
    ellipse(50, 5, 15, 15);
  }
  fill("goldenrod");
  for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
    rotate(30);
    rect(0, 5, 7, 10);
  }
  fill("mediumseagreen");
  for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
    rotate(30);
    rect(0, 5, 3, 10);
  }
  pop();
}
function addTile(x, y) {
  push();
  translate(xCoord, yCoord);
  rotate(45);
  for (var flwrs = 0; flwrs < 5; flwrs++) {
    addCornFlower(flws[flwrs] - 30, flws[flwrs] - 20);
    addCornFlower(flws[flwrs] + 50, flws[flwrs] - 90);
    addCornFlower(flws[flwrs] + 120, flws[flwrs] - 160);
    addCornFlower(flws[flwrs] + 190, flws[flwrs] - 230);
    addCornFlower(flws[flwrs] + 260, flws[flwrs] - 300);
    addCornFlower(flws[flwrs] + 270, flws[flwrs] - 310);
    addCornFlower(flws[flwrs] + 340, flws[flwrs] - 380);
  }
  pop();
}
