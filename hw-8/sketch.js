// Apples, Lemons, and Fruitflies

function setup() {
	// Create a nice sized canvas
	createCanvas( windowWidth, windowHeight );
}

function draw() {
	// Number of fruits per row
	let numPerRow = 10;
	// Size of the fruits
	let circleSize = 50;
	// Spacing of the fruits
	let pad = width / numPerRow;
	// Set initial values for fruitflies
  let x = 0;
  let y = 0;
	let flyX = 0;
	let flyY = 0;


	// Set background to white
	background( 255 );

	// FRUIT BOX
	push();
	// APPLES
	// To appear when the mouse is on the left half of the canvas
  if ( mouseX < width*.5 ){
		// Draw multiple apples on the x and y axises
		for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			// Draw apples
			// Set apple color
			fill( 255, random(100), random(200) );
			// Turn off stroke
      noStroke();
			// Set apple shape
			ellipse( x, y, circleSize, circleSize );
			// Apple highlight
			fill( 255 );
			ellipse( x + 10, y - 10, 10 );
			// Apple stem
			fill( random(100), 255, random(200) );
      triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x +5, y - circleSize/2 -10);
    	}
		} // END APPLES

		// LEMONS
		// To appear when the mouse is on the right half of the canvas
	} else if ( mouseX > width*.5) {
			// Draw multiples lemons on the x and y axises
    	for ( let y = circleSize; y < height; y += pad) {
  		for ( let x = circleSize; x < width; x += pad) {
				// Draw lemons
				// Turn off stroke for lemon border
				noStroke();
				// Box to add stroke for lemon stem
				push();
				// Set lemon color
				fill( 255, 255, random(200) );
				// Set lemon shape
				ellipse( x, y, circleSize + 10, circleSize + 20 );
				// Lemon highlight
				fill( 255 );
				ellipse( x - 10, y + 10, 10 )
				// Lemon stem
				stroke( 143, 70, 29 );
				strokeWeight( 3 );
				line( x + circleSize/3 + 4, y - circleSize/2, x + circleSize/3 + 5, y - circleSize/2 -10 );
				pop(); // End lemon stem stroke box
    		}
  		}
		} // END LEMONS

pop(); // END FRUIT BOX

// FRUIT FLIES
if( mouseX < width){
	// Set number of fruit flies
	for( let flyX = 0; flyX < width; flyX += 10 ){
		// Generate fruit flies around mouse position
			let flyX = mouseX + random( 150, -150 );
			let flyY = mouseY + random( 150, - 150 );
			strokeWeight( 5 );
			point( flyX, flyY );
	}
}

}
