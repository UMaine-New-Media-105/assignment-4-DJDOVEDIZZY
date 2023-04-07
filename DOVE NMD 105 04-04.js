https://editor.p5js.org/cyprian.dove/sketches/XdcyqAj3Y
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
function setup() {
  createCanvas(800, 400);
  noLoop();
  flowerScale=.2
  growth = ["zero","seed","bud","sprout", "flower"];
  tilesPerRow=19//growth.length
    tileWidth=width/tilesPerRow
  tilesPerColumn = 5
  tileHeight= height/tilesPerColumn
}
function draw() {
  background(220);
  let randomClr = "rgb(" + x + "," + y + "," + z + ")";
  background(randomClr);
  noStroke();
  for(let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++){
    for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++) {
    let thisPhase= growth[(columnsDrawn+rowsDrawn)%growth.length]
    let thisX= columnsDrawn * tileWidth
    let thisY = rowsDrawn*tileHeight
    addGrow(thisPhase,thisX,thisY+30);
  }
  }
}
function addGrow(growth,x,y){
  push();
  if (growth==="zero") {
} else if(growth==="seed") {
  drawSeed(x,y);
  } else if(growth==="bud") {
  drawBud(x,y);
    } else if(growth==="sprout") {
  drawSprout(x,y);
      } else if(growth==="flower") {
  drawCornFlower(x,y);
}
  pop();
}
function drawSeed(x,y){
  push();
  translate(x,y);
  scale(flowerScale-.3);
  fill("peru");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(35);
    ellipse(0, 0, random(70, 90), random(120, 180));
  }
  pop();
}
function drawBud(x,y){
  push();
  translate(x,y);
  scale(flowerScale+.2);
   fill("darkseagreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(20), random(50, 90));
  }
  fill("palegreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(40);
    rect(0, 0, random(10, 20), random(30, 80));
  }
  fill("darkolivegreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(15, 30), random(20,50));
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
function drawSprout(x,y){
  push();
  translate(x,y);
  stroke("indigo");
  scale(flowerScale-.4);
  strokeWeight(1);
  fill("teal");
  for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
    rotate(35);
    rect(0, 0, random(70, 90), random(120, 240));
  }
  fill("aquamarine");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(45);
    rect(0, 0, random(20,50), random(100, 170));
  }
  fill("lightseagreen");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(40), random(80, 130));
  }
  fill("turquoise");
  for (let petalsDrawn = 0; petalsDrawn < 24; petalsDrawn++) {
    rotate(30);
    rect(0, 0, random(35), random(12,35));
  }
  noStroke();
  fill("ivory");
  for (let petalsDrawn = 0; petalsDrawn < 12; petalsDrawn++) {
    rotate(30);
    rect(0, 0, 2, 30);
  }
  fill("goldenrod");
  for (let ballsDrawn = 0; ballsDrawn < 12; ballsDrawn++) {
    rotate(40);
    ellipse(30, 5, 15, 15);
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
function drawCornFlower(x, y) {
  push();
  translate(x+40, y);
  stroke("indigo");
  scale(flowerScale+.1);
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
