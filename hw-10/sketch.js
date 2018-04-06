// School of Fish

// Make an array to cycle size of fishes
let size = [ .75, 1, 1, 1.2, .75, 1, 1, 1 ];

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate( 1 );
}

function draw(){
  background( 50, 100, 255 );
  // Set limit on number of fish created
  let numFish = 8;

  for( let idx = 0; idx < numFish; idx++ ) {
    // Draw 8 fish
    // in different spots
    // in different sizes
    fish( random(0, width) , random(0, height), size[idx] );
  }

  for( let i = 0; i < width; i+= 10 ) {
    // Draw lots of random bubbles
    bubbles( i, random(0, height) );
  }
}

// Define bubbles
function bubbles( bubbleX, bubbleY ){
    push();
    translate( bubbleX, bubbleY );
    strokeWeight( .5 );
    fill( 'rgba( 150, 0, 150, 0.25 )' );
    ellipse( 0, 0, 10 );
    pop();
}

// Define fish
function fish( fishPosX, fishPosY, sizeX, sizeY ){
  push();
  translate( fishPosX, fishPosY );
  scale( sizeX, sizeY );
  fill( 'rgba( 255, 50, 150, 0.5 )' );
  triangle( -40, 0, -60, 20, -60, -20 );
  quad( 10, -40, 20, -20, -10, -20, -50, -40 );
  fill( 240, 50, 150 );
  ellipse( 0, 0, 100, 50 );
  strokeWeight( 5 );
  point( 35, 0 );
  pop();
}
