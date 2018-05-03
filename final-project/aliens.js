//////////////////
// ALIENS CLASS
//////////////////

class Alien {
    constructor( firstX, firstY, img1 ){
      this.posX = firstX;
      this.posY = firstY;
      // Reference to alien image in memory
      this.image = img1;
      this.rad = 40;

      this.deltaX = random(-2, 2);
      this.deltaY = random(-2, 5);
    //  this.toDie = false;

}

  display(){
    push();
    image(
    // Reference to Alien image in memory
    this.image,
    // placement of Alien image on canvas
    this.posX, this.posY,
    // The display size of the image
    this.rad * 2, this.rad * 2,
    );
    pop();
    }

  move(){
      //Update position of alien
      this.posX += this.deltaX;
      this.posY += this.deltaY;
    }

  edgeCheck(){
    // check if the "vine" has hit a wall
    if (this.posX >= width || this.posX <= 0) {
        this.deltaX *= -1;
    }
    // check other walls
    if (this.posY >= height || this.posY <= 0) {
        this.deltaY *= -1;
      }
    }

}
