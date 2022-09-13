function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  if (keyCode == 69){
    let e1 = mouseX-50;
    let e2 = mouseY-50;
    rect(e1,e2,100,100);
  } else if (keyCode == 67) {
    let c1 = mouseX;
    let c2 = mouseY;
    circle(c1,c2,100);
  } else if (keyCode == 70){
    let vari1 = mouseX;
    let vari2 = mouseY;
    ellipse(vari1,vari2, 100,50);
  } else {
  
    

  }

}
