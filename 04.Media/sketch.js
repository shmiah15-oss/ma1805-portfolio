let img;
let hum;
let capture;
let video;

function preload() {
  img = loadImage("Antenna.jpg");
  hum = loadSound("humm.wav");
  video = createVideo("TheSea.mov");
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  video.hide();
  video.play();
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  image(capture, 200, 200, 300, 300);
  filter(INVERT)
  circle(50, 50, 50);

  image(video, 300, 300 ,300, 300)
}

function mouseClicked () {
  hum.loop();
  hum.amp(0.5);
  video.amp(0.01);
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume(); }
}
