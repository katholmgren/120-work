// Katherine Holmgren hw-4

function setup(){
  //Create a canvas 400px wide and 800px tall
createCanvas( 400, 800 );

}

function draw(){

//Background
background( 'rgb(255, 207, 72)' )

// *****************************************************
   // create a sandbox for entire portrait
   push();

   // center canvas
   translate( 200, 400 );


   // ** Head **********************************
   push();

   // Set skin tone
   fill( 'rgba(300, 187, 149, .9)' );
   ellipse( 0, -325, 75)

   //glasses
   noFill();
   rect( -25, -328, 20, 15 );
   rect( 5, -328, 20, 15 );

   //eyes
   strokeWeight( 5 );
   point( -15, -325 );

   strokeWeight( 5 );
   point( 15, -325 );

   //nose
   strokeWeight(1);
   line( 0, -320, -5, -305 );
   line( -5, -305, 0, -305 );

   //mouth
   strokeWeight(1);
   line( -10, -298, 10, -295 );

   pop();

   // ** Hair **********************************
   push();

   noFill();
   arc( 0, -355, 50, 50, PI, PI );
   ellipse( 40, -340, 40 );
   ellipse( 30, -350, 30 );
   ellipse( 40, -310, 25 );
   ellipse( 40, -295, 30 );
   ellipse( 45, -275, 35 );
   arc(-35, -350, 20, 20, HALF_PI, QUARTER_PI );
   ellipse( -40, -310, 20 );
   ellipse( -45, -335, 25 );
   ellipse( -50, -290, 30 );
   ellipse( -45, -280, 30 );

   pop();

   // ** Torso *********************************
   push();

   //Set shirt color
   fill( 'rgb( 93, 118, 203 )' );
   rect( -25, -275, 50, 200);

   pop();

   // ** Arms **********************************
   push();

   //Arm 1
   push();
   fill('black');
   rotate( radians(45) );
   rect( -215, -175, 10, 125 );
   pop();
   push();
   fill('black');
   rotate( radians(145) );
   rect( -22, 220, 10, 75 );
   pop();

   //Arm 2
   push();
   fill('black');
   rotate( radians(315) );
   rect( 205, -173, 10, 112 );
   pop();
   push();
   fill('black');
   rotate( radians(215) );
   rect( 22, 220, 10, 75 );
   pop();

   //Hand 1
   fill( 'rgba(300, 187, 149, .9)' );
   triangle( -175, -250, -150, -250, -150, -245 );

   //Hand 2
   triangle( 175, -255, 150, -255, 150, -250 );

   pop();

   // **legs ******************************
   push();

   //leg 1
   fill('black');
   triangle( -25, -75, 0, -75, -25, 350 );

   // leg 2
   triangle( 0, -75, 25, -75, 25, 350 );

   //foot 1
   triangle( - 25, 350, -25, 345, -35, 350 );

   //foot 2
   triangle( 25, 350, 25, 345, 15, 350 );

   pop();

   pop();

   // **END BODY********************************

}
