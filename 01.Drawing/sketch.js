function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 0, 300);
  fill(80, 0, 100);
  triangle(160, 220, 205, 165, 125, 140);
  triangle(340, 220, 380, 150, 300, 167);
  circle(250, 250, 200); 

  fill(255);
  ellipse(205, 230, 40, 20);
  ellipse(300, 230, 40, 20);

  fill(0, 0, 255);
  circle(210, 230, 20);
  circle(300, 230, 20);

  fill(0);
  circle(210, 230, 10);
  circle(300, 230, 10);

  ellipse(300, 224, 35, 7);
  ellipse(205, 224, 35, 7);




}