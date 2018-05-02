//////////////
// KATIE CLASS
//////////////

class Katie {
constructor( initX, initY, img ){
    this.posX = initX;
    this.posY = initY;
    // Reference to katie image in memory
    this.image = img;
    // Size of katie image
    this.size = {
        w: 125,
        h: 150
    };

    this.deltaX = 2;
    this.deltaY = 2;
  }

display() {
    push();
    image(
    // Reference to image in memory
    this.image,
    // placement of image on canvas
    // (handled by translate())
    this.xc, this.yc,
    // The display size of the image
    this.size.w, this.size.h,
    );
    pop();
    }


    move() {
      // move katie
      // dependent on arrow keys
      if (keyIsDown(LEFT_ARROW)) {
        this.posX -= this.deltaX;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.posX += this.deltaX;
      }

      if (keyIsDown(UP_ARROW)) {
        this.posY -= this.deltaY;
      }

      if (keyIsDown(DOWN_ARROW)){
        this.posY += this.deltaY;
      }
    }

    edgeCheck() {
      // keep katie in the canvas
        this.xc = constrain(this.posX, 0, width -this.size.w);
        this.yc = constrain(this.posY, 0, height -this.size.h);
    }
}
