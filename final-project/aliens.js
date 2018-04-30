//////////////////
// ALIENS CLASS
//////////////////

class Alien {
    constructor( firstX, firstY, img1 ){
      this.posX = firstX;
      this.posY = firstY;
      // Reference to alien image in memory
      this.image = img1;
      // Size of alien
      this.size = {
          w: 250,
          h: 300
      };

      this.deltaX = 2;
      this.deltaY = 2;

}

  display(){
    push();
    image(
    // Reference to Alien image in memory
    this.image,
    // placement of Alien image on canvas
    this.posX, this.posY,
    // The display size of the image
    this.size.w, this.size.h,
    );
    pop();
    }


  move(){
      //Update position of alien
      this.posX += this.deltaX;
      this.posY += this.deltaY;
    }
}

// FOR FUTURE USE? :
  //edgeCheck() {
  //  this.x = constrain(this.posX, 0, width);
  //  this.y = constrain(this.posY, 0, height);
//}
