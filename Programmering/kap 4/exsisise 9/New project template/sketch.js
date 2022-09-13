let x=0
let y=0
let z=0
let w=0
let speed=5;
let d = 20;
let r = d/2;
let cx = 400;
let cy = 400;
let s = 25;
let score1 = 0;
let score2 = 0;
let ax = 60;
let ay = 60;
let pointd = 5;
let distance1;
let distance2;
let c1;
let c2;
let c3;
let c4;

function s2(){
  if((ax<=z+s && ax>=z) && (ay<=w+s && ay>=w)){
    ax = random(cx);
    ay = random(cy);
    score2 += 1;
    console.log(score1, score2);
    c1 = random(255);
    c2 = random(255);
    c3 = random(255);
    c4 = random(255);
  }
}

function s1(){
  if(distance1<r){
    ax = random(cx);
    ay = random(cy);
    score1 += 1;
    console.log(score1, score2);
    c1 = random(255);
    c2 = random(255);
    c3 = random(255);
    c4 = random(255);
  }
  
}

function setup() {
  createCanvas(cx, cy);
  ax = random(cx);
  ay = random(cy);
  
}

function draw() {
distance1 = sqrt(((x-ax)**2)+((y-ay)**2));

background(c1,c2,c3,c4);
circle(x,y,d);
rect(z,w,s,s);
circle(ax,ay,pointd);


s1();
s2();

if (mouseIsPressed) {
  if (mouseButton == LEFT) {
    x=mouseX;
    y=mouseY
  }
}
if (keyIsPressed) {
  if (keyCode == 37 && x>=r) {
    x -= speed;
}
}
if (keyIsPressed) {
  if (keyCode == 39 && x<= cx-r) {
    x += speed;
}
}
if (keyIsPressed) {
  if (keyCode == 38 && y>=r) {
    y -= speed;
}
}
if (keyIsPressed) {
  if (keyCode == 40 && y<= cy-r) {
    y += speed;
}
}


if (mouseIsPressed) {
  if (mouseButton == RIGHT) {
    z=mouseX;
    w=mouseY;
  }
}


if (keyIsPressed) {
  if (keyCode == 65 && z >= s-s) {
    z -= speed;
}
}

if (keyIsPressed) {
  if (keyCode == 68 && z <= cx-s) {
    z += speed;
}
}





if (keyIsPressed) {
  if (keyCode ==87 && w >= s-s) {
    w -= speed;
}
}

if (keyIsPressed) {
  if (keyCode == 83 && w <= cy-s) {
    w += speed;
}
}





}