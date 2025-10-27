let x = 0;

function setup() {
  createCanvas(500, 500);
   background(0);

}

function draw() {


  // background kind of
  noStroke();
  fill(mouseY, 50);
  circle(mouseX, mouseY, 100); 

  //x
  stroke(20)
  fill(255, 128, 128);
  x +=1;
  circle(x, 50, 20);
  circle(50, x, 20);
  circle(50, 20, x);



}

function mousePressed() {
  background(0);
}