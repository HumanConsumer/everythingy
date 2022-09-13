let forward=1;
let backward=1;
let x=0;
let y=0;
let k = random(25,375);
let l = random(25,375);

function setup() {
  createCanvas(400, 400);

  
  
}

function draw() {
  background(220);
circle(x,y,50);
  if (mouseIsPressed){
    if(mouseButton== LEFT){
      x=mouseX;
      y=mouseY;
    }
  }

  if(keyIsPressed){
    if(keyCode == 37){
      x-=1;
    }
    if(keyCode == 39){
      x +=1;
    }
  }
    if(keyIsPressed){
      if(keyPressed == UP_ARROW){
        y+=backward;
      }
      if(keyPressed == DOWN_ARROW){
        y += forward;
      }
  }


}
