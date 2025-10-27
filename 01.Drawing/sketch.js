function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 0, 300);



  //background detail
  fill(150, 0, 300)

  //one
  beginShape();
  
  vertex(10, 10);
  vertex(490, 10);
  vertex(490, 490);
  vertex(10, 490);

  beginContour();
  vertex(30, 30);
  vertex(30, 470);
  vertex(470, 470);
  vertex(470, 30);
  endContour();

  endShape(CLOSE);


  //two
  beginShape(); 

  vertex(40, 40);
  vertex(460, 40);
  vertex(460, 460);
  vertex(40, 460);

  beginContour();
  vertex(60, 60);
  vertex(60, 440);
  vertex(440, 440);
  vertex(440, 60);
  endContour();

  endShape(CLOSE);


  //three
  beginShape(); 

  vertex(70, 70);
  vertex(430, 70);
  vertex(430, 430);
  vertex(70, 430);

  beginContour();
  vertex(90, 90);
  vertex(90, 410);
  vertex(410, 410);
  vertex(410, 90);
  endContour();

  endShape(CLOSE);



  //four
  beginShape(); 

  vertex(100, 100);
  vertex(400, 100);
  vertex(400, 400);
  vertex(100, 400);

  beginContour();
  vertex(120, 120);
  vertex(120, 380);
  vertex(380, 380);
  vertex(380, 120);
  endContour();

  endShape(CLOSE);






  // the left whiskers
  line(100, 200, 259, 334);
  line(100, 250, 279, 280);
  line(100, 300, 210, 280);

  // the right whiskers
  line(400, 200, 259, 334);
  line(400, 250, 279, 280);
  line(400, 300, 210, 280);


  // the ears and head
  fill(10);
  triangle(160, 220, 205, 165, 125, 140);
  triangle(340, 220, 380, 150, 300, 167);
  circle(250, 250, 200); 


  // the mouth
  fill(60);
  circle(250, 280, 70);


  // the teeth
  fill(255);
  beginShape(TRIANGLES);
  vertex(215, 287, 10);
  vertex(219, 312, 5);
  vertex(223, 287, 10);

  vertex(225, 305, 5);
  vertex(229, 285, 10);
  vertex(233, 311, 5);

  vertex(236, 280, 10);
  vertex(240, 312, 5);
  vertex(244, 277, 10);

  vertex(246, 315, 5);
  vertex(250, 287, 10);
  vertex(254, 315, 5);

  vertex(257, 280, 10);
  vertex(261, 312, 5);
  vertex(265, 285, 10);

  vertex(268, 312, 5);
  vertex(272, 287, 10);
  vertex(276, 303, 5);

  vertex(279, 280, 10);
  vertex(283, 312, 5);
  vertex(287, 285, 10);
  endShape();


  // shaping the mouth
  fill(0);
  circle(220, 253, 70);
  circle(280, 253, 70);
  
  // the eye shape
  fill(0, 255, 0);
  ellipse(205, 230, 40, 20);
  ellipse(300, 230, 40, 20);

  // the eyes
  fill(255, 0, 0);
  circle(210, 230, 20);
  circle(300, 230, 20);
  
  
  // just trying something
  // it worked!
  // pupils

  fill(0);
  triangle(208, 230, 213, 230, 211, 240);
  triangle(208, 230, 213, 230, 211, 220);

  triangle(298, 230, 303, 230, 300, 240);
  triangle(298, 230, 303, 230, 300, 220);

  
  // the eyelids
  fill(0);
  ellipse(300, 224, 35, 7);
  ellipse(205, 224, 35, 7);


  // the nose
  fill(255, 128, 128);
  triangle(250, 270, 240, 250, 260, 250);

  //the hat
  fill(0);
  triangle(200, 140, 300, 140, 250, 50);
  rect(190, 135, 120, 10, 20);


//comments are really conveient for organising



  


}