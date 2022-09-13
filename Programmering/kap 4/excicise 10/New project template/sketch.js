let x;// = 50;//random(0, windowWidth);
let y;// = 50;//random(0, windowHeight);
let b;
let d;// = 20;
let speed;
let a;
let cx;
let cy;

function preload(){
  img = loadImage('mus.png.png');
}

function borderCheck() {
  print(true);
  if (x + d / 2 >= cx) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= cy) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

function setup(){
  cx = 400;
  cy = 400;
  createCanvas(cx,cy);
  x = 50;
  y = 100;
  speed = 5;
  d = 20;
  a = speed;
  b = 5;
  
}



function draw(){
background(0);
borderCheck();
fill(200,255,255);
stroke(255,200,200);
  circle(x,y,d);
  
  x += a;
  y += b;
  keyPressed();
  console.log(x);
  console.log(y);
  preload();
  
  
 

}