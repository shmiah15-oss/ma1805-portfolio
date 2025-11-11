let size = 50;
let x;
let y;
let myFill = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(100);
  fill(myFill);
  ellipse(x, y, size);

  fill(150);
  ellipse(mouseX, mouseY, size);

  let distance = dist(x, y, mouseX, mouseY);
  if(distance <= size){
    myFill = [255, 0, 0];
  }else{
    myFill = 255;
  }

  fill(0);
  textSize(15);
  text(int(distance), x-15, y-10, 30);
}

function myShape(x, y){
  fill(185, 0, 180);
  ellipse(x, y, 50);
  fill(0, 150, 150);
  rect(x+20, y+20, 20, 30);
}

