/**
 * Cruising in February
 *
 */

function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 800);
    //set frame rate
    frameRate(10);

}

let carPosX = 0;
let carPosY = 400;
let wheelPosX = 0;
let wheelPosY = 500;
let wheelAngle = 0;


function draw() {
  //EMILY CHANGES
  //angleMode(DEGREES);

  // erase every frame
  background( 'rgb(154, 206, 235)' );

  // UPDATE VALUES
  // update wheel angle,
  // set the wheel to spin at a constant rate
  wheelAngle = wheelAngle - 3;


  // *****************************
  // CAR SANDBOX
  // *****************************

push();

    // CAR BODY *******************************
    push();
    rect( carPosX, height*.5, 100, 50 );

    // update posX every frame
    // add .2, then re-assign back to self
    carPosX = carPosX + 2;
    pop();

    // end CAR BODY ***************************

    // CAR WHEEL ONE **************************
    push();
    // move the position of the wheel
    // to rotate
    translate( carPosX, carPosY );
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( 0, 0, 25, 10 );
    wheelPosX = wheelPosX + 2;
    pop();

    // end CAR WHEEL ONE **********************



    // CAR WHEEL TWO **************************
    push();
    ellipse( carPosX + 100, carPosY + 50, 25, 10 );
    pop();

    // END CAR WHEEL TWO **********************
}
