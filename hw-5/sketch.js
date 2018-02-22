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
let wheelRotationRate = 0;
let wheelAngle = 0;


function draw() {
  //EMILY CHANGES
  //angleMode(DEGREES);

  // erase every frame
  background( 'rgb(154, 206, 235)' );

  // UPDATE VALUES
  // make wheel rotate at quarter pi per 10 frames
  wheelRotationRate = QUARTER_PI;
  // update wheel angle,
  // to equal itself plus wheelRotationRate
  wheelAngle = wheelAngle + wheelRotationRate;


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
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( carPosX, carPosY + 50, 25, 10 );
    pop();

    // end CAR WHEEL ONE **********************



    // CAR WHEEL TWO **************************
    push();
    ellipse( carPosX + 100, carPosY + 50, 25, 10 );
    pop();
    // END CAR WHEEL TWO **********************
}
