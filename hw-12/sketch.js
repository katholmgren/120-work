// Bouncing Vines
// Week 12


// create a variable for the vine object
let vines = [];
// lots of vines!
const numOfVines = 50;

function setup() {
    createCanvas(windowWidth, 800);
    background('rgb(0, 41, 45)');

    // create a new vine object of class "Vine"
    let init_x = random(400);
    let init_y = random(400);
    for (let i = 0; i < numOfVines; i++) {
        vines.push(new Vine(init_x, init_y));
        // spread out starting places
        init_x += 200;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {

    for (let i = 0; i < vines.length; i++) {
        // call the vine's methods
    //  vines[i].vineCheck(vines, i);
        vines[i].vineCheck( vines, i);
        vines[i].edgeCheck();
        vines[i].move();
        vines[i].display();

    }
}
