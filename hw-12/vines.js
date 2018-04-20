//////////////////////////////////////////////////
//      Vine Class
//////////////////////////////////////////////////
class Vine {
    constructor(x, y, size) {
        this.color = 'green';
        this.size = random(-5, 5);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 2);
        this.deltaY = random(-10, 5);
    }

    display() {
        push();
        // remove the vines outer stroke
        noStroke();
        // set the vines fill color
        fill(this.color);
        // set the position of the vine
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the vine has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = ('rgb(85,107,47)');
        }
        // check if the vine has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(100, 200, 150)';
        }
    }


    vineCheck( otherVines, myId ) {
        // for loop touches each of the 'vines' in the array
        for (let n = 0; n < otherVines.length; n++) {

            if( n != myId ) {
                let d = dist( this.posX, this.posY, otherVines[n].posX, otherVines[n].posY );
                let combinedR = this.rad + otherVines[n].rad;

                if( d <= combinedR ) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }
            }
        }
    }
  }
