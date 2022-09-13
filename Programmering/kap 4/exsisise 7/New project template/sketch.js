function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
if(keyIsPressed){
  if((key == 'A') || (key == 'a')) {
    line(200,25,100,175);
    line(200,25,300,175);
    line(100,100,300,100);
  }
  if((key == 'V') || (key == 'v')) {
    line(200,175,100,25);
    line(200,175,300,25);
  }

}
}
