let angle = 0;
let spinLeft = false;
let spinRight = false;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(230);

    // Instruction text for the player
    textSize(20);
    textAlign(CENTER);
    text("Press the left or right arrow keys to spin the rabbit!", width / 2, 50);

    // Make rabbit scream when spinning because thats funny to me
    if (spinLeft || spinRight) {
        push();
        textSize(35);
        textAlign(CENTER);
        textStyle(BOLD);
        text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaa", width / 2, 100);
        pop();
    }

    // Spin left continuously while the key is held
    if (spinLeft) {
        angle -= 0.5;
    }

    // Spin right continuously while the key is held
    if (spinRight) {
        angle += 0.5;
    }

    // Draw the rabbit and center its point(?) using translate. I'm still getting used to translate. First time using it here
    // Use rotate() for the angle to spin
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    drawRabbit();
    pop();
}

// Spin when arrow keys are pressed
function keyPressed() {
    // Left arrow
    if (keyCode === 37) {
        spinLeft = true;
    }

    // Right arrow
    if (keyCode === 39) {
        spinRight = true;
    }
}

// Stop spinning if arrow keys are released
function keyReleased() {
    // Left Arrow
    if (keyCode === 37) {
        spinLeft = false;
    }

    // Right arrow
    if (keyCode === 39) {
        spinRight = false;
    }
}

// Draw a rabbit. I was initially going to use an image but the image would not load no matter what I did
function drawRabbit() {
    // Body
    fill(255);
    noStroke();
    arc(-70, 40, 180, 200, PI, TWO_PI);

    // Head
    ellipse(0, -35, 90, 85);

    // Left ear
    ellipse(-25, -100, 22, 75);

    // Right ear
    ellipse(10, -105, 22, 75);

    // Eye
    if (spinLeft || spinRight) {
        push();
        fill(255);
        stroke(0);
        strokeWeight(2);
        ellipse(20, -40, 20, 20);
        pop();
    } else {
        fill(0);
        ellipse(20, -40, 20, 20);
    }
    
    // Tail
    fill(255);
    ellipse(-150, 0, 55, 55);
}