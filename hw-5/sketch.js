/**
 * Run from the Car
 *
 */

function setup() {
    // createCanvas( windowWidth, 800 );
    createCanvas( windowWidth, 800 );
    //set frame rate
    frameRate( 8 );

}

let carPosX = 0;
let carPosY = 400;
let wheelPosX = 5;
let wheelPosY = 450;
let wheelAngle = 0;
let personPosX = 200;
let personPosY = 400;


function draw() {

  // erase every frame
  background( 'rgb(154, 206, 235)' );

  // set text
  text(' Quick! Run from the Car! ', windowWidth / 3, 200 );
  text(' I believe in you!', windowWidth / 2, 300 );

  // UPDATE VALUES
  // update wheel angle,
  // set the wheel to spin at a constant rate
  wheelAngle = wheelAngle - 3;

  headSpeed = (mouseX * 0.005);
  // update head position,
  // to equal position plus mouse speed
  personPosX = personPosX + headSpeed;


  // *****************************
  // CAR SANDBOX
  // *****************************

    push();

    // CAR BODY
    push();
    fill('red');
    rect( carPosX, height*.5, 100, 55, 10, 30, 10, 10 );

    // update posX every frame
    // add 2, then re-assign back to self
    carPosX = carPosX + 4;
    pop(); // <- end car body

    // CAR WHEEL ONE
    push();
    // color the wheel
    fill('black');
    // move the position of the wheel
    // to rotate
    translate( wheelPosX, wheelPosY );
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( 0, 0, 25, 25 );
    fill('white');
    ellipse( 0, 0, 4, 25 );
    fill('white')
    ellipse( 0, 0, 25, 4 );
    wheelPosX = wheelPosX + 2;
    pop(); // <- end wheel one



    // CAR WHEEL TWO
    push();
    // color the wheel
    fill('black');
    // move the position of the wheel
    // to rotate
    translate( wheelPosX + 80, wheelPosY );
    // rotate wheel based on wheelAngle
    rotate( wheelAngle );
    ellipse( 0, 0, 25, 25 );
    fill('white');
    ellipse( 0, 0, 4, 25 );
    fill('white')
    ellipse( 0, 0, 25, 4 );
    wheelPosX = wheelPosX + 2;
    pop(); // <- end wheel 2

    // CAR WINDOW
    push();
    fill('black');
    rect( carPosX + 60, carPosY + 10, 25, 15, 5, 15, 5, 5 );
    pop(); // <- END CAR

  // *****************************
  // PERSON SANDBOX
  // *****************************
    push();
    // HEAD
    fill('rgb( 254, 202, 182 )');
    ellipse( personPosX, personPosY + 20, 10 );

    // BODY
    // fill blue
    fill('blue');
    rect( personPosX - 5, personPosY + 25, 10, 25)
    personPosX = personPosX + 1

    // LIMBS
    // leg 1
    line( personPosX - 5, personPosY + 50, personPosX -10, personPosY + 75 );
    // leg 2 thigh
    line( personPosX + 5, personPosY + 50, personPosX + 15, personPosY + 55 );
    // leg 2 calf
    line( personPosX + 15, personPosY + 55, personPosX, personPosY + 75 );

    // arm part 1
    line( personPosX - 5, personPosY + 25, personPosX + 10, personPosY + 35 );
    // arm part 2
    line( personPosX + 10, personPosY + 35, personPosX + 15, personPosY + 20 );
    pop(); 

    // end PERSON **********************


}
