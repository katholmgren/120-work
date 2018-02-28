// Aurora Borealis (Northern Lights)

// Declare variables
var streak = {}
var r = 0
var g = 0

function setup(){
  // Create a canvas
  createCanvas( windowWidth, windowHeight );
  // Set background to black
  background( 0 );
  frameRate( 10 );

// Update
  streak.posX = random( 0, 200 );
  streak.posY = random( 10, 350);

}

function draw(){

  // Set aurora stroke color to pink or green based off mouseY position
  r = map(mouseY, 0, height/2, 0, 255);
  g = map(mouseY, height/2, height, 0, 255);
  stroke(r, g, 0);
  //('rgba( r, 0, 0, .1)');
  strokeWeight( 10 );
  // Aurora line
  line( streak.posX, streak.posY, streak.posX, streak.posY + random( 50, 200) );

  // Move aurora
  streak.posX += random(5);

  streak.posY += random( -10, 10 );


}
