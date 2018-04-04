// School of Fish

// 1. Draw Fish
// 2. Put into a function with x, y, scale parameters
// 3. Move fish across screen

let fishPosX = 0;

function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(60);

}

function draw(){
  background( 50, 100, 255 );

  let num1 = floor(random(0, 200));
  let num2 = floor(random(0, 200));


  fish( 100, 150, .5 );
  fish( 100, 40, 1, .5);
  fish( 200, 200, 1, 1 );
  fish ( 300, 150, 2, 2 );
  fish ( width *.8, 300, 1.4, 1.4 );

}

function fish(fishPosX, fishPosY, scaleX, scaleY ){
  push();
  translate(fishPosX, fishPosY);
  scale(scaleX, scaleY);
  triangle( -40, 0, -60, 20, -60, -20 );
  quad( 10, -40, 20, -20, -10, -20, -50, -40 );
  ellipse( 0, 0, 100, 50 );
  strokeWeight(5);
  point( 35, 0 );



  fishPosX++;
  pop();


}
/**
  let pos = addThings(num1, num2);
let pos = addThings(num1, num2);
function addThings(value1, value2) {
    // 1. Add the values together. Store them into some variable.
    let result = value1 + value2;

    // 2. Return the value
    return result;
}
//}
*/
