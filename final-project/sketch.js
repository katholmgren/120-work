
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
    createCanvas( windowWidth, windowHeight -10 );
    // Astro Katie avatar
    katie = new Katie( width/2, height/2, img);

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
  }
}

function draw(){
      background( 0 );
      //Katie astronaut methods
     for (let idx = 0; idx < laser.length; idx++) {
       for (let i = 0; i < aliens.length; i++) {

      //  for (var i = aliens.length - 1; i >= 0; i--) {

          if (laser[idx].hit(aliens[i])) {
          aliens[i].splice(i, 1);
          console.log('HIT');
          }
        }

      laser[idx].display();
      laser[idx].move();

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
