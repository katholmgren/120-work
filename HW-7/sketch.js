// Cool Groovy Bouncing Ball

// Set starting ball properties
let ball = {};
ball.width = 50;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    // Create canvas window size
    createCanvas(windowWidth, windowHeight);
}



function draw() {

    // Update position of ball
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    // Keep ball within canvas
    if ( ball.x >= width || ball.x <= 0 ) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if ( ball.y >= height || ball.y <= 0 ) {
        ball.delta_y = -1 * ball.delta_y;
    }


    // GROOVY MOUSE PRESS *******************

    // Set mouseIsPressed to change color, speed, text
    if (mouseIsPressed) {
    // Change background to orange
    background( 255, 130, 67 );

    // Fill circle to random warm colors
    fill( 255 , random( 207 ), random( 72 ) );
    ellipse(ball.x, ball.y, ball.width, ball.width);

    // Set groovy text
    textSize( 50 );
    text( "GROOVY!", width/2, height/2 );

    // Make groovy ball speedy
    ball.scale_x = 10;
    ball.scale_y = 15;
    frameRate(60); // END groovy mouse press

    // COOL DEFAULT **************************

    } else {
    // Set background to blue
    background( 0, 50, 200 );

    // Set cool text
    fill( 0 );
    textSize( 50 );
    text( "c o o l ", width/4, height/4 );

    // Make cool ball slow
    ball.scale_x = 5;
    ball.scale_y = 2.5;
    frameRate( 10 );
    }

    // Create roll over for cool ball
    if ( mouseX > ball.x -20 && mouseX < ball.x + 20 && mouseY > ball.y - 20 && mouseY < ball.y + 20 ) {
    fill( 255, 0, 0);
    ellipse( ball.x, ball.y, ball.width, ball.width );

    } else {
    // Fill circle to random cool colors
    fill ( random(255), random(40), random(255), 80 );
    ellipse( ball.x, ball.y, ball.width, ball.width );
    } // END cool default

  }
