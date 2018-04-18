//////////////////////////////////////////////////
//      rect CLASS DEFINITION
//////////////////////////////////////////////////
class Rect {
    constructor(x, y, size) {
        this.color = 'red';
        this.size = random(20, 80);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-10, 2);
    }

    display() {
        push();
        // remove the rects outer stroke
        noStroke();
        // set the rects fill color
        fill(this.color);
        // set the position of the rect
        translate(this.posX, this.posY);
        rect(0, 0, this.size, this.size / 2);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the rect has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(110, 240, 158)';
        }
        // check if the rect has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(110, 240, 158)';
        }
    }


    rectCheck(otherrects, myId) {
        // for loop touches each of the rects in the array
        for (let n = 0; n < otherrects.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherrects[n].posX, otherrects[n].posY);
                let combinedR = this.rad + otherrects[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // flip the color
                    if( this.color == 'rgb(237, 36, 232)') {
                        this.color = 'rgb(16, 224, 231)';
                    } else {
                        this.color = 'rgb(237, 36, 232)';
                    }
                }
            }
        }
    }
}
