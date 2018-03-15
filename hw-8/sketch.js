function setup() {
	createCanvas( windowWidth, 400);
	noStroke();
}

function draw() {
	let numPerRow = 10;
	let circleSize = 50;
	let pad = width / numPerRow;

	background(255);
  if (mouseX < width*.5){
	for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			fill( 255, random(255), 140 );
			ellipse( x, y, circleSize, circleSize );
      triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x +5, y - circleSize/2 -10);
    }
		}
	} else if ( mouseX > width*.5) {
    for ( let y = circleSize; y < height; y += pad) {
  		for ( let x = circleSize; x < width; x += pad) {
  			fill( 0 );
  			ellipse( x, y, circleSize, circleSize );
        triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x + 5, y - circleSize/2 -10);
  }
}
}
}
