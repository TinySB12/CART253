/**
 * Circle Master
 * Saba
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const puck = {
  x: 200,
  y: 200,
  size: 100,
  speedx: 1,
  speedy: 1,
  fill: "#ff0000",
  fills: {
    noOverlap: "#ff0000",
    overlap: "#00ff00"
  }
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
    x: 300,
    y: 300,
    size: 100,
    fill: "#d5d5d5",
    fills: {
        noOverlap: "#d5d5d5",
        overlap: "#11ff60"
    }
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawTarget();
  drawUser();
  drawPuck();
  movePuck();
  // Make ball not leave the canvas
  puck.x = constrain(puck.x,0+puck.size/2,width-puck.size/2)
  puck.y = constrain(puck.y,0+puck.size/2,height-puck.size/2)

  
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();

}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size, puck.size);
  pop();
}
// Make user move puck
function movePuck() {
 // Check overlap
  const d = dist(user.x, user.y, puck.x, puck.y);
  const overlap = (d < user.size/2 + puck.size/2);
  // Give conditions for overlap so that the puck gets pushed
  if (overlap) {
    puck.x = puck.x + puck.speedx;
    puck.y = puck.y + puck.speedy;
    // make circle push puck in different directions
    if (puck.x <= user.x) {
        puck.speedx = -5
    }
    if (puck.x >= user.x) {
        puck.speedx = 5
    }
    if (puck.y >= user.y) {
        puck.speedy = 5
    }
    if (puck.y <= user.y) {
        puck.speedy = -5
    }

  }
}

function drawTarget(){
    ellipse(target.x, target.y, target.size, target.size);
    noStroke();
    fill(target.fill);
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size/2 + target.size/2);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}