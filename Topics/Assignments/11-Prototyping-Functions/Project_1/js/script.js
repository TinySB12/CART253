/**
 * Test 1
 * Saba
 * 
 * For once I'm going into a prototype without a specific idea. I'm just going to dabble so I can learn the material.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    drawOrb(30, 30);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function drawOrb(W,H) {

    const minStroke = 1;
    const maxStroke = 20;
    let d = dist(mouseX,mouseY, W, H);
    let stroke = map(d, 0, width, maxStroke, minStroke);

    fill(200);
    strokeWeight(stroke)
    ellipse(width/2, height/2, W, H);
}