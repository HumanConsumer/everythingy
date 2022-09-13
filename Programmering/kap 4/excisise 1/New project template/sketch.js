function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseX < 200){
    circle(200,200,100);
  }
  else {
    rect(150,150,100,100);
  }
}
