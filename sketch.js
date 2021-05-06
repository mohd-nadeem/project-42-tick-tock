var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  // Too change angle to degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);

  var hr = hour();
  var mn = minute();
  var sc = second();

  translate(200, 200);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  // Clock hands

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(6);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 55, 0);
  pop();

  // Draw arc

  strokeWeight(5);
  noFill();
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);

  strokeWeight(6);
  noFill();
  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, mnAngle);

  strokeWeight(7);
  noFill();
  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}