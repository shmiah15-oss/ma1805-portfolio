let x = 0;

function setup() {
  createCanvas(500, 500);
   background(0);

}

function draw() {


  // background kind of
  noStroke();
  fill(mouseY, 255);
  circle(mouseX, mouseY, 30); 

  //x
  stroke(50);
  fill(255, 128, 128);
  x +=1;

  //small pink circle going left to right (top)
  circle(x, 50, 20);

  //small pink circle going down
  circle(50, x, 20);


  //small purple circle going down
  fill(150, 0, 220);
  circle(450, x, 20);

  //small purple circle form left to right (bottom)
  fill(150, 0, 220);
  circle(x, 450, 20);

  //down


}

function mousePressed() {
  background(0);
}