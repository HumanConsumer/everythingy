let d = 40;
let c = 10;
let e;
let f = 100;
let b = 50;
let k = 100;


function setup() {
  createCanvas(400, 400);
   background(220);
  p1 = loadSound('p1.mp3');

}

function sound(){
  if(mouseX>e && mouseX<e+c && mouseY>f && mouseY<b+f){
    k = 100;
    if(e==k){
      background(100);
      console.log(1);
      p1.play();
      
    } else{
      //p1.stop();
    }
    k += c;
    if(e==k){
      
    }
    k += c;
    if(e==k){
      background(200);
      console.log(2);
    }
    k += c;
    if(e==k){
      
    }
    k += c;
    if(e==k){
      background(0);
      console.log(3);
    }
    k += c;
    if(e==k){
      
    }
    k += c;
    if(e==k){
      background(50);
      console.log(4);
    }
    k += c;
    if(e==k){
      
    }
    

  }
}


function draw() {
 preload(p1);

  circle(50,350,d);
  circle(80,320,d);
  circle(123,320,d);
  circle(153,350,d);

  e = 100;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();
  e += c;
  rect(e,f,c,b);
  sound();

line(300,100,300,300);
line(350,100,350,300);
line(325,100,325,300);
line(375,100,375,300);
line(250,100,250,300);
line(275,100,275,300);

}
