let x = 0;
var speed = 3;
let y = 0;
let circleX = 100;

function setup() {
  createCanvas(500, 500);
   background(0);

}

function draw() {

  // background kind of

  //x
  stroke(0);
  x +=1;
  y +=1;

  



  //left to right!!!! (top to bottom)

  //pink circle 
  fill(255, 128, 128);
  circle(x, 50, 20);

  //small purple 
  fill(150, 0, 220);
  circle(x, 100, 20);

  //pink circle 
  fill(255, 128, 128);
  circle(x, 150, 20);

  //small purple 
  fill(150, 0, 220);
  circle(x, 200, 20);

  //pink circle 
  fill(255, 128, 128);
  circle(x, 250, 20);

  //small purple 
  fill(150, 0, 220);
  circle(x, 300, 20);

  //pink circle 
  fill(255, 128, 128);
  circle(x, 350, 20);

  //small purple 
  fill(150, 0, 220);
  circle(x, 400, 20);

  //pink circle 
  fill(255, 128, 128);
  circle(x, 450, 20);










  //down!!!!!!! (left to right)

  // pink 1 circle 
  fill(255, 128, 128);
  circle(50, x, 20);

  // purple 1 circle
  fill(150, 0, 220);
  circle(100, x, 20);

  // pink 2 circle
  fill(255, 128, 128);
  circle(150, x, 20);

  // purple 2 circle
  fill(150, 0, 220);
  circle(200, x, 20);

  // pink 3 circle 
  fill(255, 128, 128);
  circle(250, x, 20);

  // purple 3 circle
  fill(150, 0, 220);
  circle(300, x, 20);

  // pink 4 circle 
  fill(255, 128, 128);
  circle(350, x, 20);

  // purple 4 circle
  fill(150, 0, 220);
  circle(400, x, 20);

  // pink 5 circle 
  fill(255, 128, 128);
  circle(450, x, 20);


  if (x > width) {
    speed = -3
 
 }
 
   x = x + speed;
   x1 = x-7;
   


   //cloud

   background(0)

   noStroke()
   fill(255);
   circle(0+mouseX, 250, 100);
   circle(50+mouseX, 200, 100);
   circle(100+mouseX, 250, 100);
   circle(50+mouseX, 250, 100);
   
   //rain
   circle(10+mouseX, 250+y, 10);
   circle(30+mouseX, 220+y, 10);
   circle(50+mouseX, 250+y, 10);
   circle(70+mouseX, 250+y+20, 10);

   circle(100+mouseX, 220+y, 10);
   circle(50+mouseX, 210+y, 10);
   circle(5+mouseX, 205+y, 10);
   circle(5+mouseX, 205+y, 10);
   
  
}

function mousePressed() {
  background(0);
  
}