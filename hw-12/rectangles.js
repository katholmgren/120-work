//////////////////////////////////////////////////
//      vine CLASS DEFINITION
//////////////////////////////////////////////////
class Vine {
    constructor(x, y, size) {
        this.color = 'green';
        this.size = random(-5, 5);
        this.rad = this.size
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


    reckCheck( otherBalls, myId ) {
        // for loop touches each of the balls in the array
        for (let n = 0; n < otherRecks.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if( n != myId ) {
                let d = dist( this.posX, this.posY, otherRecks[n].posX, otherRecks[n].posY );
                let combinedR = this.rad + otherRecks[n].rad;

                if( d <= combinedR ) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }
            }
        }
    }
  }
