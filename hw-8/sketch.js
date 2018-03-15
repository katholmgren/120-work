// Apples, Oranges, Bananas, and Fruitflies

function setup() {
	// Create a nice sized canvas
	createCanvas( windowWidth, 400 );
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

	// Set background to white
	background( 255 );

//

	push();
	// APPLES
	// To appear when the mouse is on the left half of the canvas
  if ( mouseX < width*.5 ){
		// Draw multiple apples on the x and y axises
		for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			// Draw apples
			fill( 255, random(255), 140 );
      noStroke();
			ellipse( x, y, circleSize, circleSize );
      triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x +5, y - circleSize/2 -10);
    	}
		}

		// BANANAS
		// To appear when the mouse is on the right half of the canvas
	} else if ( mouseX > width*.5) {
			// Draw multiples bananas on the x and y axises
    	for ( let y = circleSize; y < height; y += pad) {
  		for ( let x = circleSize; x < width; x += pad) {
				// Draw bananas
  			fill( 255, 255, 50 );
				noStroke();
  			ellipse( x, y, circleSize + 10, circleSize + 20 );
        fill( 255 );
				ellipse( x + 10, y + 5, circleSize + 10 );
    		}
  		}
		}
pop();

// FRUIT FLIES
if( mouseX < width){
	// Set number of fruit flies
	for( let x = 0; x < width; x += 10 ){
		// Generate fruit flies around mouse position
			let x = mouseX * random( 5, -5 );
			let y = mouseY * random( 5, - 5 );
			strokeWeight( 5 );
			point( x, y );
	}


}

}
