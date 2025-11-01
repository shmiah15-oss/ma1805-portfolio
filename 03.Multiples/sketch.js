// the left collumn

let theText = ["friendship", "bestfriend", "comrade", "companion"];
let word = theText[0];
let i = 0;

let theText2 = ["hate", "dislike", "envy", "scorn"];
let word2 = theText2[0];

let theText3 = ["cupcakes", "ice-cream", "chocolate", "cookies"];
let word3 = theText3[0];

let theText4 = ["orange", "purple", "lavender", "sage-green"];
let word4 = theText4[0];

let theText5 = ["sleeping", "night", "moonlight", "darkness"];
let word5 = theText5[0];

let theText6 = ["house", "appartment", "flat", "dormatory"];
let word6 = theText6[0];

let theText7 = ["banana", "strawberry", "blueberry", "raspberry"];
let word7 = theText7[0];

let theText8 = ["dandelion", "roses", "lavender", "tuplip"];
let word8 = theText8[0];

let theText9 = ["books", "library", "searching", "studing"];
let word9 = theText9[0];





function setup() {
  createCanvas(500, 500);
  frameRate(2);
}





function draw() {
  background(0);
  textFont('Courier New');
  


//the left collumn sizes
  textSize(20);
  fill('red');
  text(word6, 40, 50);
  text(word9, 40, 100);
  fill('green')
  text(word5, 40, 150);
  text(word7, 40, 200);
  text(word8, 40, 250);
  fill('purple');
  text(word3, 40, 300);
  text(word, 40, 350);
  fill('pink')
  text(word4, 40, 400);
  text(word2, 40, 450);

// the left glitch
  fill('orange');
  text(word, 80, 60);
  text(word2, 80, 110);
  text(word3, 80, 160);
  fill('blue');
  text(word4, 80, 210);
  text(word5, 80, 260);
  fill('white');
  text(word6, 80, 310);
  fill('red');
  text(word7, 80, 360);
  text(word8, 80, 410);
  fill('brown');
  text(word9, 80, 460);



// middle collumn 
  text(word, 180, 50);
  fill('white');
  text(word2, 180, 100);
  fill('blue')
  text(word3, 180, 150);
  text(word4, 180, 200);
  fill('grey');
  text(word5, 180, 250);
  text(word6, 180, 300);
  text(word7, 180, 350);
  fill('red');
  text(word8, 180, 400);
  text(word9, 180, 450);

// middle glitch
  text(word8, 220, 60);
  text(word5, 220, 110);
  fill('brown');
  text(word7, 220, 160);
  fill('pink');
  text(word9, 220, 210);
  fill('orange');
  text(word3, 220, 260);
  text(word2, 220, 310);
  fill('yellow');
  text(word6, 220, 360);
  fill('grey');
  text(word, 220, 410);
  text(word4, 220, 460);


// the right collumn
  text(word9, 300, 50);
  text(word8, 300, 100);
  fill('green');
  text(word7, 300, 150);
  fill('blue')
  text(word6, 300, 200);
  fill('white');
  text(word5, 300, 250);
  text(word4, 300, 300);
  fill('yellow');
  text(word3, 300, 350);
  fill('purple');
  text(word2, 300, 400);
  text(word, 300, 450);

  text(word3, 340, 60);
  fill('grey');
  text(word8, 340, 110);
  fill('brown');
  text(word6, 340, 160);
  text(word7, 340, 210);
  fill('orange');
  text(word, 340, 260);
  fill('pink');
  text(word9, 340, 310);
  text(word2, 340, 360);
  text(word5, 340, 410);
  fill('green');
  text(word4, 340, 460);








//text 1 - friendship
  word = theText[i];
  i=i+1;
  if(i>=theText.length){
    i=0;
  }
  console.log(1)

//text 2 - hate
  word2 = theText2[i];
  if(i>=theText2.length);

//text 3 - desserts
  word3 = theText3[i];
  if(i>=theText3.length);

//text 4 - body parts
  word4 = theText4[i];
  if(i>=theText4.length);

//text 5 - night time
  word5 = theText5[i];
  if(i>=theText5.length);

//text 6 - night time
  word6 = theText6[i];
  if(i>=theText6.length);

//text 7 - night time
  word7 = theText7[i];
  if(i>=theText7.length);

//text 8 - night time
  word8 = theText8[i];
  if(i>=theText8.length);

//text 9 - night time
  word9 = theText9[i];
  if(i>=theText5.length);



   





}
  

