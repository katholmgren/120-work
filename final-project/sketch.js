
// TODO: Fix aliens only deleting sometimes
// TODO: Stop sketch if alien hits Katie, game over screen
// TODO: Levels
// TODO: Optional sound


let img;
let img1;
let katie;
let laser = [];
let aliens = [];
const numOfAliens = 5;

function preload(){
    // katie image is "img"
    img = loadImage( "./space-kt-pic.png" );
    // alien image is "img1"
    img1 = loadImage( "./alien-pic.png" )
}


// score variables
let score = 0;
let points = 100;


function setup(){
    createCanvas( windowWidth, windowHeight -10 );
    // construct katie avatar
    katie = new Katie( width/2, height/2, img );

    // aliens start at random positions on canvas
    let firstX = random(50);
    let firstY = random(50);

    //  construct aliens
    for ( let i = 0; i < numOfAliens; i++ ) {
      aliens.push( new Alien( firstX, firstY, img1 ));
      // spread out Alien starting places
      firstX += 100;
        if ( firstX > width ) {
          firstX = 60;
          firstY += 100;
        }
    }
}

function draw(){
      background( 0 );

      // score text
      textSize( 24 );
      fill( 255);
      // display the equation and result
      text(" Score: " + score, 20, 80 );


      // katie hits an alien
      for( let i = 0; i < aliens.length; i++ ) {
        if(katie.hits(aliens[i])) {
          score *= 0;

          // TROUBLE SHOOTING RECTANGLE >>>>>>>>>>>>
          // TO TEST KATIE-ALIEN INTERACTION
          // DELETE LATER >>>>>>>>>
          fill( 255 );
          rect( 100, 500, 100, 100);
        } //// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      }

      // katie methods
      katie.display();
      katie.move();
      katie.edgeCheck();

      // alien and laser splicing
      for ( let idx = laser.length - 1; idx >= 0; idx-- ) {
        laser[idx].display();
        laser[idx].move();
       if (laser[idx].offscreen()) {
         laser.splice( idx, 1 );
       } else {
         for ( let i = aliens.length - 1; i >= 0; i-- ) {
          if ( laser[idx].hit(aliens[i]) ) {
            score += points;
            laser.splice( idx, 1 );
            aliens.splice( i, 1 );
          break;
          }
        }
      }
    }


    // alien methods
      for ( let i = 0; i < aliens.length; i++ ) {
      aliens[i].display();
      aliens[i].move();
      aliens[i].edgeCheck();
      }
}

  // new laser when space bar is pressed
  function keyPressed(){
    if ( key === " " ){
      laser.push( new Laser( katie.posX - 15, katie.posY + 35 ));
    }

   }
