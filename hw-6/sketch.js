// Aurora Borealis (Northern Lights)

// Declare variables
var streak = {}


function setup(){
  // Create a canvas
  createCanvas( windowWidth, windowHeight );
  // Set background to black
  background( 0 );
  frameRate( 10 );

  var r = 255;
  var g = 0;

// Update
  streak.posX = random( 0, 200 );
  streak.posY = random( 10, 350);

}

function draw(){

  // Set aurora stroke color to pink or green based off mouseY position
  r = map( mouseY, 0, height, 0, 255 );

  // TROUBLESHOOTING  *********************
  g = map( mouseY, 0, height - 200, 255, 0 );
  //if (mouseY > 0 && mouseY < height/2 ){
  //let r = ('red')
  // *************************************

  stroke(r, g, 0, 20);

  strokeWeight( 10 );
  // Aurora line
  line( streak.posX, streak.posY, streak.posX, streak.posY + random( 50, 200) );

  // Move aurora
  streak.posX += random(5);

  streak.posY += random( -10, 10 );


}
