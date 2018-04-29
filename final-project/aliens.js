//////////////////
// ALIENS CLASS
//////////////////

class Alien {
    constructor( x, y, img1 ){
    // Cool Groovy Bouncing alien

    // Set starting alien properties

    this.size = 100;
    this.x = 75;
    this.y = 100;
    this.delta_x = 1;
    this.delta_y = 1;
    this.scale_x = 1;
    this.scale_y = 1;
    this.image = img1;

}

  display(){
    push();
    image(
    // Reference to image in memory
    this.image,
    // placement of image on canvas
    // (handled by translate())
    0, 0,
    // The display size of the image
    this.size, this.size,
    );
    pop();
    }


    move(){
        // Update position of alien
        this.x += this.delta_x * this.scale_x;
        this.y += this.delta_y * this.scale_y;

}
}


// TODO: find alien image(img1), preload, index alien class, run for loop for aliens
