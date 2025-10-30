let y = 0;

function setup() {
  createCanvas(500, 500);
   background(0);

}

function draw() {

  stroke(0);
  y +=1;

//cloud 1 - the main cloud (middle)
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
   circle(90+mouseX, 210+y, 10);
   circle(10+mouseX, 205+y, 10);
   circle(5+mouseX, 230+y, 10);
   circle(70+mouseX, 200+y, 10);
   circle(65+mouseX, 245+y, 10);
   circle(20+mouseX, 245+y, 10);
   





//cloud 2 (the left)
   circle(-150+mouseX, 150, 100);
   circle(-100+mouseX, 100, 100);
   circle(-50+mouseX, 150, 100);
   circle(-100+mouseX, 150, 100);

//rain 2
   circle(-80+mouseX, 150+y, 10);
   circle(-30+mouseX, 120+y, 10);
   circle(-50+mouseX, 150+y, 10);
   circle(-70+mouseX, 150+y+20, 10);

   circle(-90+mouseX, 120+y, 10);
   circle(-90+mouseX, 110+y, 10);
   circle(-70+mouseX, 105+y, 10);
   circle(-50+mouseX, 130+y, 10);
   circle(-30+mouseX, 100+y, 10);
   circle(-60+mouseX, 145+y, 10);

   circle(-150+mouseX, 130+y, 10);
   circle(-130+mouseX, 100+y, 10);
   circle(-160+mouseX, 145+y, 10);








// cloud 3 (the right)
   circle(150+mouseX, 120, 90);
   circle(200+mouseX, 70, 90);
   circle(250+mouseX, 120, 90);
   circle(200+mouseX, 120, 90);



//rain 3
   circle(150+mouseX, 150+y, 10);
   circle(130+mouseX, 120+y, 10);
   circle(150+mouseX, 150+y, 10);
   circle(170+mouseX, 150+y+20, 10);

   circle(200+mouseX, 120+y, 10);
   circle(190+mouseX, 110+y, 10);
   circle(110+mouseX, 105+y, 10);
   circle(251+mouseX, 130+y, 10);
   circle(170+mouseX, 100+y, 10);
   circle(165+mouseX, 145+y, 10);
   circle(120+mouseX, 145+y, 10);

   circle(230+mouseX, 130+y, 10);
   circle(270+mouseX, 100+y, 10);
   circle(265+mouseX, 145+y, 10);
   circle(220+mouseX, 145+y, 10);
   

// I feel like this is too simple


}

