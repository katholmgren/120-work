// School of Fish

// sa means "starting at"
var sa = [];

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(1);
  sa = [random (width), random (width), random (width), random (width), random (width)];

}



//let yPos = [60, 20, 200, 330, 100];
//let xPos = 0;
//let xPos = [ 50, 100, 70, 300, 200];
//let size = [1, .5, .2, 2, 1];

function draw(){
  background( 50, 100, 255 );

  let numFish = 8; //sets limit on number of fish created

  for( let idx = 0; idx < numFish; idx++ ) {
      // draw some boxes!
      fish( random(0, width) , random(0, height), 1, 1 );
  }

  //sa = (sa + 10) % windowWidth;
}

function drawFish(sa) {
  let fishPosX = fishPosX + 10;
}

function fish(fishPosX, fishPosY, scaleX, scaleY ){
  push();
  translate(fishPosX, fishPosY);
  scale(scaleX, scaleY);
  fill( 240, 50, 150 );
  triangle( -40, 0, -60, 20, -60, -20 );
  quad( 10, -40, 20, -20, -10, -20, -50, -40 );
  ellipse( 0, 0, 100, 50 );
  strokeWeight(5);
  point( 35, 0 );
  pop();
}
