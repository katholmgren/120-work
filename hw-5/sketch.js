/**
 * Cruising in February
 *
 */

function setup() {
    createCanvas( windowWidth, 800 );
    // createCanvas( windowWidth, windowHeight );
    frameRate(10);

}

let carPosY = 400;
let carPosX = 0;
let wheelRotationRate = 0;
let wheelAngle = 0;


function draw() {
  //EMILY CHANGES
  //angleMode(DEGREES);

  // erase every frame
  background( 'rgb(154, 206, 235)' );

  // UPDATE VALUES
  // base wheel rotation rate on mouseX pos
  wheelRotationRate = 45;
  // update wheel angle,
  // to equal itself plus wheelRotationRate
  wheelAngle = wheelAngle + wheelRotationRate;


  // *****************************
  // CAR SANDBOX
  // *****************************
push();

    //car body
    push();
    rect( carPosX, height*.5, 100, 50 );

    // update posX every frame
    // add .2, then re-assign back to self
    carPosX = carPosX + 2;
    pop();

    //car wheel one
    push();
    // rotate wheel based on wheelAngle
    translate( carPosX, height*0.5 );
    rotate( radians(wheelAngle) );
    ellipse( carPosX, carPosY + 50, 25, 10 );
    // update angle position
    wheelAngle = wheelAngle + 45;
    pop();

    //car wheel two
    push();
    ellipse( carPosX + 100, carPosY + 50, 25, 10 );
    pop();
}
