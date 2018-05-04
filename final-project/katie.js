//////////////
// KATIE CLASS
//////////////

class Katie {
constructor( initX, initY, img ){
    this.posX = initX;
    this.posY = initY;
    // Reference to katie image in memory
    this.image = img;
    // Half-Size of katie image
    this.rad = {
      w: 63,
      h: 75
    }

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
    this.rad.w *2, this.rad.h *2,
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
        this.xc = constrain(this.posX, 0, width -this.rad.w*2);
        this.yc = constrain(this.posY, 0, height -this.rad.h*2);
    }



hits( alien ){

 let d = dist( this.posX + this.rad.w, this.posY + this.rad.h,(alien.posX + alien.rad), (alien.posY +alien.rad));
      if (d < this.rad.w + alien.rad){
    //console.log('HIT');
      return true;
    } else {
     return false;
    }
}
}
