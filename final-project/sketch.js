
let img;
let rob;

function preload(){
  img = loadImage("./robot-pic.png");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    rob = new Robot(100, 100, img);

}

function draw(){
      background( 0 );
  //image(img, 0,0, 45, 70);
//  Robot.method1(); // ← executes myObj's method, 'method1'.

rob.display();
rob.move();
rob.edgeCheck();

}
