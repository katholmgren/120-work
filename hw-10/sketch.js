// School of Fish

var sa = {};

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(60);
  sa.one = random (300);
  sa.two = random (400);
}



let yPos = [60, 20, 200, 330, 100];
let xPos = 0;
//let xPos = [ 50, 100, 70, 300, 200];
//let size = [1, .5, .2, 2, 1];

function draw(){
  background( 50, 100, 255 );

  for( let idx = 0; idx < yPos.length; idx++ ) {
      // draw some boxes!
      fish( xPos , yPos[idx], 1, 1 );
  }


  xPos = (xPos + 1) % windowWidth;
}

function fish(fishPosX, fishPosY, scaleX, scaleY ){
  push();
  translate(fishPosX, fishPosY);
  scale(scaleX, scaleY);
  triangle( -40, 0, -60, 20, -60, -20 );
  quad( 10, -40, 20, -20, -10, -20, -50, -40 );
  ellipse( 0, 0, 100, 50 );
  strokeWeight(5);
  point( 35, 0 );
  pop();
}
