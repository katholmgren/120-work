
class Laser{
  constructor( x, y ){
    this.x = x;
    this.y = y;
  }

  display(){
    push();
    strokeWeight(10);
    stroke(255, 0, 0 );
    point( this.x, this.y)
    pop();
  }

  move(){
    this.x = this.x -10;
  }

}
