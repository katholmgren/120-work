// Aurora Borealis (Northern Lights)


// Declare global variables
var streak = {}
var r = 255;
var g = 0;


function setup(){
  // Create a canvas the size of the window
  createCanvas( windowWidth, windowHeight);
  // Set background to black (night time)
  background( 0 );
  // Set frame rate
  frameRate( 10 );

// Update Aurora starting point
  streak.posX = random( 0, width * .25 );
  streak.posY = random( 10, height /2);

}

function draw(){

  // Constrain Y to canvas
  constrain( streak.posY, 0, height );

  // Set Aurora stroke color to red or green based off mouseY position
  r = map( mouseY, 0, height, 0, 255 );
  g = map( mouseY, 0, height, 255, 0 );
  // Color the line
  stroke( r, g, 0, 10 );
  // Set thickness of line
  strokeWeight( 10 );
  // Aurora line
  line( streak.posX, streak.posY, streak.posX, streak.posY + random( 50, 200) );

  // Update postion of Aurora
  streak.posX += floor(random( 5 ));
  streak.posY += random( -10, 10 );

  // Repeat Aurora
  streak.posX = streak.posX % width;

}
