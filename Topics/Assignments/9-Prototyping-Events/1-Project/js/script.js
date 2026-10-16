let angle = 0;
let spinLeft = false;
let spinRight = false;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(230);

    // Spin continuously while the key is held
    if (spinLeft) {
        angle -= 0.5;
    }

    if (spinRight) {
        angle += 0.5;
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle);
    drawRabbit();
    pop();
}

function keyPressed() {
    if (keyCode === 37) {
        spinLeft = true;
    }

    if (keyCode === 39) {
        spinRight = true;
    }
}

function keyReleased() {
    if (keyCode === 37) {
        spinLeft = false;
    }

    if (keyCode === 39) {
        spinRight = false;
    }
}

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

    // Black eye
    fill(0);
    ellipse(20, -40, 20, 20);

    // Tail
    fill(255);
    ellipse(-150, 0, 55, 55);
}