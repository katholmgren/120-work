
// Expanding Rice

let rices = [];

function setup() {
    createCanvas( windowWidth, windowHeight );
    noCursor();
}

function mouseDragged() {
    // Create a rice object from rice class
    // assign to variable r
    let r = new Rice( mouseX, mouseY );
    // Move new rice object to rices array
    rices.push( r );
}

function draw() {
    background( 'black' );
    // Make a lot of rice
    for ( let i = 0; i < rices.length; i++ ) {
      rices[i].expand();
      rices[i].show();
    }
      chopsticks();
}

function chopsticks(){
  push();
  stroke( 'brown' );
  strokeWeight( 5 );
  line( mouseX, mouseY, mouseX + 45, mouseY + 45 );
  line( mouseX + 5, mouseY - 5, mouseX + 55, mouseY + 10);
  stroke( 92, 70, 51 );
  point( mouseX + 25, mouseY + 25 );
  point( mouseX + 25, mouseY + 2 );
  pop();

}

// RICE CLASS //

class Rice {
  // Constructor for starting rice
    constructor( x, y ) {
        this.x = x;
        this.y = y;
    }

  // Method that makes rice "expand"
    expand() {
        this.x = this.x + random( -3, 3 );
        this.y = this.y + random( -3, 3 );
    }

  // Properties of the rice
    show() {
        stroke( 255 );
        strokeWeight( 4 );
        point( this.x, this.y );
    }
}
