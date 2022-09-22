let x; // musx// = 50;//random(0, windowWidth);
let y; //mus y   // = 50;//random(0, windowHeight);
let b; //
let d; //mus størrelse // = 20;
let speed; // mus fart
let a;
let cx; //canvas x
let cy; //canvas y
let m; //kat x
let n; //kat y
let follower; //kat fart
let fd; //kat størrelse
let loss; //hvis den er sand har man tabt
let caught; //afstanden mellem spiller og fanger
let xspeed; //kattens fart
let yspeed;
let p; //radius af katten
let j; //til random teleport
let i; //til random teleport
let gamemode = true; //hvis den bliver sat til false følger katten efter spilleren istedet for at tilfældigt hoppe rundt

function preload() {
  //til at loade texture til mus men ikke i brug
  img = loadImage("mus.png.png");
}

function borderCheck() {
  //funktion der checker om musen kører ud for banen og stopper den
  print(true);
  if (!loss == true) {
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
}

function bigL() {
  // stopper spillet når man taber og lukker canvas
  if (loss == true) {
    speed = 0;
    follower = 0;
    resizeCanvas(0, 0);
  }
}

function follow() {
  gamemode = true;
  // funktion der bevæger kat
  if (!loss == true) {
    p = fd / 2;
    //hvis gamemode er true bevæger katten sig tilfældigt

    if (gamemode == true) {
      if (m <= p) {
        xspeed *= 1 * random(-1, -1.1); //= 1; //random(0.1,1);
        yspeed *= 1; //random(-0.9, -1.1); //*= random(-5, 5);
      } else if (m >= cx - p) {
        xspeed *= random(-1, -1.1); //= random(-0.9, -1.1);//-1; // random(-1,-0.1);
        yspeed *= 1; // random(-0.9, -1.1);
      } else if (n <= p) {
        xspeed *= 1; //random(-0.9, -1.1); //= random(-1, 1);
        yspeed *= random(-1, -1.1); //= 1; //random(0.1,1);
      } else if (n >= cy - p) {
        yspeed *= random(-1, -1.1); //= -1), // random(-1,-0.1);
        xspeed *= 1; //random(-0.9, -1.1); //= random(-1, 1));
      }
    }

    //
    //
    // hvis gamemode sættes til false så følger katten efter spilleren istedet for at bevæge sig random
    if (gamemode == false) {
      xspeed = ((x - m) / 100) * follower;
      yspeed = ((y - n) / 100) * follower;
    }
    // hvis katten rør musen taber spilleren
    if (caught < p) {
      loss = true;
    }

    //
    //random teleport mode
    //
    /*
    if (fd > 69 || fd > 120) {    
      if (j == true && i == true) { random teleport for højere sværhedsgrad
        m = random(0, 400);
        n = random(0, 400);
        j = false;
      }
      if (j == false && i == true && fd > 120) {
        m = random(0, 400);
        n = random(0, 400);
        i = false;
      }
    } */
  }
}

function keyPressed() {
  //funktion der gør at mus bevæger sig
  if (!loss == true) {
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
}

function setup() {
  cx = 400;
  cy = 400;
  createCanvas(cx, cy); //starter med at lave et canvas
  x = 50; //starterspot for mus
  y = 100;
  speed = 5;
  d = 20;
  a = speed;
  b = 5;
  follower = 5;
  fd = 5;
  m = 300; //starterspot for kat
  n = 300;
  j = true; //random teleport
  i = true;
  xspeed = -5;
  yspeed = -5;
}

function draw() {
  caught = sqrt((x - m) ** 2 + (y - n) ** 2); //afstand mellem kat og mus
  background(220); //baggrundrefresh
  borderCheck(); //rammer musen kanten
  fill(255, 255, 255);
  stroke(0, 0, 0); //tegn kat og mus
  circle(x, y, d);
  circle(m, n, fd);
  follow(); //katten skal følge musen
  x += a; //ny x og y værdi til kat og mus
  y += b;
  m += xspeed;
  n += yspeed;
  fd += 0.1; //spillet bliver sværere ved at katten bliver større over tid
  keyPressed(); //checker for bevægelse af musen
  console.log(m); //checker diameteren af katten til teleport
  console.log(n);
  preload(); //loader musens texture (ikke i brug)
  bigL(); //hvis du har tabt stopper den alt og lukker vinduet
}
