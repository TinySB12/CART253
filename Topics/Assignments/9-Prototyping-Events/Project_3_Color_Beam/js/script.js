/**
 * Color Beam
 * Saba
 * 
 * Click to make ball fly to where you clicked in a streak of color
 */

"use strict";

// Variables for orb
let orb = {
    currentColor: null,
    targetColor: null,
    x: 550,
    y: 550,
    targetX: 550,
    targetY: 550
}

function setup() {
    createCanvas(1100, 800);
    background(0);
    // Set starting color to red
    orb.currentColor = color(255, 0, 0);
    orb.targetColor = color(255, 0, 0);

}

function draw() {

    // Slowly move the orb to its target position
    orb.x = lerp(orb.x, orb.targetX, 0.02);
    orb.y = lerp(orb.y, orb.targetY, 0.02);

    // Slowly transition the orb's current color toward its target color
    orb.currentColor = lerpColor(orb.currentColor, orb.targetColor, 0.05);

    // Draw the orb at its current position
    fill(orb.currentColor);
    noStroke();
    ellipse(orb.x, orb.y, 25, 25);

    // Instructions for the player
    push();
    fill(200);
    textAlign(CENTER)
    textWeight(500);
    textSize(20);
    text("Click anywhere on the screen", width/2, 100);
    pop();
    

}


function mousePressed() {
    // Make mouse click destination to be the new target destination
    orb.targetX = mouseX;
    orb.targetY = mouseY;

    // Change orb color to a random color
    orb.targetColor = color(random(255), random(255), random(255));
}