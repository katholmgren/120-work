// Aurora Borealis

// Declare variables
var streak = {}



function setup(){
  // Create a canvas
  createCanvas( windowWidth, 600 );
  // Set background to black
  background( 0 );
  frameRate( 2 );

  streak.posX = random( 0, 200 );
  streak.okayY = random( 10, 300 );

}

function draw(){
  // Draw a big line

  stroke('rgba( 0, 255, 0, .3)');
  strokeWeight( 10 );
  line( streak.posX, streak.okayY, streak.posX, streak.okayY + random( 50, 200) );

streak.posX += random( 15 );
streak.okayY += random( -10 , 10 );

}
