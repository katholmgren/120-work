
let img;
let img1;
let katie;
let laser = [];
let aliens = [];
const numOfAliens = 5;

function preload(){
    // Katie image is "img"
    img = loadImage("./space-kt-pic.png");
    // Alien image is "img1"
    img1 = loadImage("./alien-pic.png")
}

function setup(){
    createCanvas( windowWidth, 700 );
    // Astro Katie avatar
    katie = new Katie( width/2, height/2, img);
    //laser = new Laser( 100, 100 );

    // Aliens start at random positions on canvas
    let firstX = random(50);
    let firstY = random(50);

    for (let i = 0; i < numOfAliens; i++) {
      aliens.push(new Alien(firstX, firstY, img1));
       //spread out Alien starting places
      firstX += 100;
        if (firstX > width) {
          firstX = 60;
          firstY += 100;
      }
}}

function draw(){
      background( 0 );
      //Katie astronaut methods
      for (let i = 0; i < laser.length; i++) {
      laser[i].display();
      laser[i].move();
    }

      katie.display();
      katie.move();
      katie.edgeCheck();

      // Aliens methods
      for (let i = 0; i < aliens.length; i++) {
      aliens[i].display();
      aliens[i].move();
      aliens[i].edgeCheck();
      }
  }

  function keyPressed(){
    if (key === " "){
      laser.push( new Laser( katie.posX - 15, katie.posY + 35 ));
    }
}
