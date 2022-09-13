let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
  fill(random(255),random(255),random(255));
} 

function draw() { 
  background(0);
  
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
  if (x<=25){
    fill(random(255),random(255),random(255));
    xspeed = 1;//random(0.1,1);
    yspeed = random(-1,1);
  } else if (x >=375){
    fill(random(255),random(255),random(255));
    xspeed = -1; // random(-1,-0.1);
    yspeed = random(-1,1);
  } else if (y <= 25){
    fill(random(255),random(255),random(255));
    xspeed = random (-1,1);
    yspeed = 1; //random(0.1,1);
  } else if (y >= 375){
    fill(random(255),random(255),random(255));
    yspeed = -1, // random(-1,-0.1);
    xspeed = random(-1,1);
  }
}