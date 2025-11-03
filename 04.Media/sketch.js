let img; let img2; let img3; let img4; 
let img5; let img6; let img7; let img8;
let img9; let img10;

let hum;
let capture;
let video;


function preload() {
  img = loadImage("kitten.jpg");
  img2 = loadImage("cute-cat.jpg");
  img3 = loadImage("small-kitty.jpg");
  img4 = loadImage("sleeping.jpg");
  img5 = loadImage("meaw.jpg");
  img6 = loadImage("piano-kitty.jpg");
  img7 = loadImage("kitty-laying.jpg");
  img8 = loadImage("cute-kitty.jpg");
  img9 = loadImage("catss.jpg");
  img10 = loadImage("kittybee.jpg");
  

  hum = loadSound("Kitty Down the Stairs - Joel Cummins.mp3");
  video = createVideo("catvid.MP4");
} 

function setup() {
  createCanvas(500, 500);
  

  video.hide();
  video.play();
}

function draw() {
// background - cat collage
  background(220);
  image(img, 0, 0, 180, 230);
  image(img2, 180, 0, 160, 230);
  image(img3, 130, 350, 210, 210);
  image(img4, 340, 0, 160, 180);
  image(img5, 130, 165, 150, 190);
  image(img6, 0, 170, 140, 190);
  image(img7, 300, 360, 225, 215);
  image(img8, 0, 320, 130, 200);
  image(img9, 280, 230, 230, 130);
  image(img10, 340, 100, 180, 160);
  
  
// for the video
  image(video, 130, 120 ,240, 240);

}

//sound and video
function mouseClicked () {
  hum.loop();
  hum.amp(0.2);
  video.loop(0.01);
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume(); }
}
