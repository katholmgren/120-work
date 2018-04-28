//////////////
// ROBOT CLASS
//////////////

class Robot {
constructor(init_x, init_y, img){
    this.pos = {
        x: init_x,
        y: init_y
    };

    // Reference to robot image in memory
    this.image = img;
    // Size of robot
    this.size = {
        w: 45,
        h: 70
    };
    this.posX = 50;
    this.posY = 50;
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
    this.posX, this.posY,
    // The display size of the image
    this.size.w, this.size.h,
);
pop();
      }

      move() {
          // move dots
          this.posX += this.deltaX;
          this.posY += this.deltaY;
      }

      edgeCheck() {
          // check if the robot has hit a wall
          if (this.posX >= width || this.posX <= 0) {
              this.deltaX *= -1;

          }
          // check other walls
          if (this.posY >= height || this.posY <= 0) {
              this.deltaY *= -1;
            }

    }
  }
  
