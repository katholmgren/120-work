function setup() {
	createCanvas( windowWidth, 400);
}

function draw() {
	let numPerRow = 10;
	let circleSize = 50;
	let pad = width / numPerRow;
  let x = 0;
  let y = 0;

	background(255);
  if( mouseX < width){
      //Fruitflies
      for( let x = 0; x < width; x += 10){
        let x = mouseX - random( 50, -50 );
        let y = mouseY - random( 50, - 50 );
        strokeWeight( 2 );
        point( x, y );
      }
push();
  if (mouseX < width*.5){
	for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			fill( 255, random(255), 140 );
      noStroke();
			ellipse( x, y, circleSize, circleSize );
      triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x +5, y - circleSize/2 -10);
    }
		}
	} else if ( mouseX > width*.5) {
    for ( let y = circleSize; y < height; y += pad) {
  		for ( let x = circleSize; x < width; x += pad) {
        //noStroke();
  			fill( 0 );
  			ellipse( x, y, circleSize, circleSize );
        triangle( x, y - circleSize/2, x - 5, y - circleSize/2 -10, x + 5, y - circleSize/2 -10);

    }

  }
}
pop();
}
}
