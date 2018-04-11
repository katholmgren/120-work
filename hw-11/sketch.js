
// Expanding Dots

let dots = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('pink');
}

function mousePressed() {
    // Create a dot from class "blueprint"
    // assign to variable d
    let d = new Dot(mouseX, mouseY);
    // Move new dot to the dots array
    dots.push(d);
}

function draw() {
    // Make many dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].expand();
      dots[i].show();
    }
}

// DOT CLASS //

class Dot {
  // Constructor for starting dot
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

  // Method that makes dots "expand"
    expand() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }

  // Properties of the dot
    show() {
        stroke(255);
        strokeWeight(4);
        point(this.x, this.y);
    }
}
