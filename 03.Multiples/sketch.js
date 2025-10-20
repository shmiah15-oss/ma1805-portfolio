let rgb = [200, 0, 240]
let select = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(select==0){
    rgb = [255, 0, 0];
  }else{
    rgb = [0, 255, 220];
  }

  fill(rgb);
  let i = 1;
  while(i<=500){
    let r = random(30)
    circle(i, i+r, mouseX+r);
    i = i+3;

  }

  fill([200, 0, 233]);
  for(i=0; i<=400; i=i+1.4){
    let r = random(70)
    circle(i+100, i, mouseX+r);
    fill(90)
    
    }
    


  }

  function mouseClicked() {
    if(select==0){
      select = 1;
    }else{
      select = 0;
    }
  }


  

