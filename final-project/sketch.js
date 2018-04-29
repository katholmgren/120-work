
let img;
let rob;
let aliens = [];

function preload(){
  img = loadImage("./space-kt-pic.png");
  img1 = loadImage("./alien-pic.png")
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    rob = new Robot( width/2, height/2, img);
    al = new Alien( 0, 0, img1)
    aliens.push( al );

}

function draw(){
      background( 0 );
  //image(img, 0,0, 45, 70);
//  Robot.method1(); // ← executes myObj's method, 'method1'.
// Lots of aliens
for ( let i = 0; i < aliens.length; i++ ) {
  aliens[i].display();
  aliens[i].move();
}

rob.display();
rob.move();
rob.edgeCheck();



}
