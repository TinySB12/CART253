/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let balls = []; // Will create it with createBall()

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    x: mouseX,
    y: mouseY,
    size: 20,
    // Colour
    fill: random(0, 255),
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");

  for (let ball of balls){
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(tempball) {
  tempball.x += tempball.velocity.x;
  tempball.y += tempball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(tempball) {
  // Check if the ball has reached the left or right
  const bounceX = (tempball.x > width || tempball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (tempball.y > height || tempball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    tempball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    tempball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(tempball) {
  push();
  noStroke();
  fill(tempball.fill);
  ellipse(tempball.x, tempball.y, tempball.size);
  pop();
}


function mousePressed() {
    let ball = createBall();
    balls.push(ball);
}