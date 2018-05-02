
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
      katie.display();
      katie.move();
      katie.edgeCheck();


    // Aliens methods
      for (let i = 0; i < aliens.length; i++) {
      aliens[i].display();
      aliens[i].move();
      aliens[i].edgeCheck();
      }

/*
// NEW-- DOES NOT WORK, but should? >>>>>>>>>>>>>>
      for (let = 0; i< laser.length; i++){
        laser[i].display();
        laser[i].move();
        for (let idx = 0; idx< aliens.length; idx++){
          if (laser[i].hit(aliens[idx])){
            aliens[idx].dead();
    }
  }
}
/*/

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// OLD-- SORT OF WORKS BUT DOESNT>>>>>>>>>>>>>

      //Katie astronaut methods
     for (let idx = 0; idx < laser.length; idx++) {
       for (let i = aliens.length - 1; i >= 0; i--) {

          if (laser[idx].hit(aliens[i])) {
          aliens.splice(i, 1);
          }
        }

      laser[idx].display();
      laser[idx].move();

        }
}

  function keyPressed(){
    if (key === " "){
      laser.push( new Laser( katie.posX - 15, katie.posY + 35 ));
    }
  }
