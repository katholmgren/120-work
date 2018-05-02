
class Laser{
  constructor( x, y ){
    this.x = x;
    this.y = y;
    this.rad = 5;
  }

  display(){
    push();
    noStroke();
    fill(255, 0, 0 );
    ellipse( this.x, this.y, this.rad * 2);
    pop();
  }

  move(){
    this.x = this.x -10;
  }

  hit( alien ) {
          let d = dist( this.x, this.y, alien.posY, alien.posY );
            if (d < this.rad + alien.rad){
              //console.log('HIT');
              return true;
            }
          }
  }
