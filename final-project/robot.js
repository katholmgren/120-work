//////////////
// ROBOT CLASS
//////////////

class Robot {
constructor( initX, initY, img ){
    this.posX = initX;
    this.posY = initY;
    // Reference to robot image in memory
    this.image = img;
    // Size of robot
    this.size = {
        w: 250,
        h: 300
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



//TO DO:  add momemntum, rotate robot instead of move robot?

    move() {
      // move robot
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
        this.xc = constrain(this.posX, 0, width -this.size.w);
        this.yc = constrain(this.posY, 0, height -this.size.h);
    }
 }
