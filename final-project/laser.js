
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

  hit( alien, myId ) {
  // for loop touches each of the alien' in the array
  //for (let n = 0; n < alien.length; n++) {

    //  if( n != myId ) {
          let d = dist( this.x, this.y, alien.posX, alien.posY );
            if (d < this.rad + alien.rad){
              return true;
              } else {
              return false;
            }
          }
        }
      
