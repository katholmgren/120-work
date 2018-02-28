// Aurora Borealis

// Declare variables
var streak = {}
var pinkLight = 255


function setup(){
  // Create a canvas
  createCanvas( windowWidth, windowHeight );
  // Set background to black
  background( 0 );
  frameRate( 10 );

// Update
  streak.posX = random( 0, 200 );
  streak.posY = random( 10, 350)

}

function draw(){
  // Draw a big line

  stroke('rgba( 0, 255, 10, .1 )');
  strokeWeight( 10 );
  line( streak.posX, streak.posY, streak.posX, streak.posY + random( 50, 200) );

streak.posX += random(5);

streak.posY += random( -10, 10 );


}
