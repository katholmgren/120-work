// Bouncing rects
// Week 12


// create a variable for the rect object
let rects = [];
const numOfRects = 10;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new rect object of class type "rect"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfRects; i++) {
        rects.push(new Rect(init_x, init_y));
        // move the starting position over
        // This is to ensure that the rects do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(66, 57, 66)');

    for (let i = 0; i < rects.length; i++) {
        // call the rect's methods
        rects[i].rectCheck(rects, i);
        rects[i].edgeCheck();
        rects[i].move();
        rects[i].display();
    }
}
