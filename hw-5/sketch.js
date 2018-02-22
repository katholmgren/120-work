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
let wheelPosY = 450;
let wheelAngle = 0;
let personPosX = 200;
let personPosY = 400;


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
    rect( carPosX, height*.5, 100, 50, 1, 20, 1, 1 );

    // update posX every frame
    // add 2, then re-assign back to self
    carPosX = carPosX + 4;
    pop();

    // end CAR BODY ***************************

    // CAR WHEEL ONE **************************
    push();
    // move the position of the wheel
    // to rotate
    translate( wheelPosX, wheelPosY );
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( 0, 0, 25, 10 );
    wheelPosX = wheelPosX + 2;
    pop();

    // end CAR WHEEL ONE **********************



    // CAR WHEEL TWO **************************
    push();
    // move the position of the wheel
    // to rotate
    translate( wheelPosX + 100, wheelPosY );
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( 0, 0, 25, 10 );
    wheelPosX = wheelPosX + 2;
    pop();

    // END CAR WHEEL TWO **********************

    // RUNNING PERSON *************************
    push();
    // head,
    // moving at rate of car
    ellipse( personPosX, personPosY + 20, 10 );
    personPosX = personPosX + 4


    pop();

}
