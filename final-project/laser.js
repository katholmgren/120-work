//////////////////////////////
// LASER CLASS
//////////////////////////////

class Laser{
  constructor( x, y ){
    this.x = x;
    this.y = y;
  }

  display(){
    push();
    strokeWeight(10);
    stroke(255, 0, 0 );
    point( this.x, this.y);
    pop();
  }

  move(){
    this.x = this.x -10;
  }


  hit( alien ) {
          let d = dist( this.x, this.y, alien.posX, alien.posY );
            if (d < alien.rad *2){
              //console.log('HIT');
              return true;
            } else {
              return false;
            }
          }

offscreen (){
              if (this.x > width || this.x < 0) {
                return true;
              }
              if (this.y > height || this.y < 0) {
                return true;
              }
              return false;
            }
          }
