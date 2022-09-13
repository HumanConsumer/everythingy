let x; 
let y; 
let xspeed; 
let yspeed; 
let xx;
let yy;
let g = -1;

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = 0; 
  yspeed = 0; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 

  

if (xx==x){
      xspeed = 0;
    }

    if (yy==y){
      yspeed = 0;
    }
  if (mouseIsPressed == true){
    xx = mouseX;
    yy = mouseY;
    
    
    
    if (mouseX>=200); {
      xspeed = 1;
      /*if(mouseX>x);{
        xspeed*=g;
      }*/


    } 
    if (mouseX<=200){
      xspeed = g*1;
      /*if (mouseX=x){
        xspeed*=g;
      }*/
    }
    
    if (mouseY>=200); {
      yspeed = 1;
    } 
    if (mouseY<=200){
      yspeed = g*1;
    }
    


  } 
}