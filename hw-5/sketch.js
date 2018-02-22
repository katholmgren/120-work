/**
 * Run from the Car
 *
 */

function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 800);
    //set frame rate
    frameRate( 8 );

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

  // set text
  text(' Quick! Run from the Car! ', windowWidth / 3, 200 );
  text(' I believe in you!', windowWidth / 2, 300 );

  // UPDATE VALUES
  // update wheel angle,
  // set the wheel to spin at a constant rate
  wheelAngle = wheelAngle - 3;

  headSpeed = (mouseX * 0.009);
  // update head position,
  // to equal position plus mouse speed
  personPosX = personPosX + headSpeed;


  // *****************************
  // CAR SANDBOX
  // *****************************

push();

    // CAR BODY *******************************
    push();
    fill('red');
    rect( carPosX, height*.5, 100, 50, 1, 20, 1, 1 );

    // update posX every frame
    // add 2, then re-assign back to self
    carPosX = carPosX + 4;
    pop();

    // end CAR BODY ***************************

    // CAR WHEEL ONE **************************

    push();
    // color the wheel
    fill('black');
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
    // color the wheel
    fill('black');
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
    fill('rgb( 254, 202, 182 )');
    ellipse( personPosX, personPosY + 20, 10 );
    // body
    // fill blue
    fill('blue');
    rect( personPosX - 5, personPosY + 25, 10, 25)
    personPosX = personPosX + 1

    // leg 1
    line( personPosX - 5, personPosY + 50, personPosX -10, personPosY + 75 );
    // leg 2 thigh
    line( personPosX + 5, personPosY + 50, personPosX + 15, personPosY + 55 );
    // leg 2 calf
    line( personPosX + 15, personPosY + 55, personPosX, personPosY + 75 );

    // arm
    line( personPosX - 5, personPosY + 25, personPosX + 10, personPosY + 35 );
    // arm part 2
    line( personPosX + 10, personPosY + 35, personPosX + 15, personPosY + 20 );


    pop();

}
