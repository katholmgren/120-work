// School of Fish


let size = [];

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(1);

}

function draw(){
  background( 50, 100, 255 );

  let numFish = 8; //sets limit on number of fish created

  for( let idx = 0; idx < numFish; idx++ ) {
      // draw some boxes!
      fish( random(0, width) , random(0, height), 1, 1 );
    }


  for( let i = 0; i < width; i+= 10 ) {
    bubbles(i, random(0, height));
}
}

function bubbles(bubbleX, bubbleY){
    push();
    translate(bubbleX, bubbleY);
    strokeWeight(.5 );
    fill('rgba( 150, 0, 150, 0.25 )');
    ellipse( 0, 0, 10 );
    pop();
}

function fish(fishPosX, fishPosY ){
  push();
  translate(fishPosX, fishPosY);
  fill('rgba( 255, 50, 150, 0.5 )');
  triangle( -40, 0, -60, 20, -60, -20 );
  quad( 10, -40, 20, -20, -10, -20, -50, -40 );
  fill( 240, 50, 150 );
  ellipse( 0, 0, 100, 50 );
  strokeWeight(5);
  point( 35, 0 );
  pop();
}
