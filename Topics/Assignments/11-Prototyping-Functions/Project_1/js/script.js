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

}

function draw() {
    drawOrb(300, 300, 50);
    drawOrb(200, 200, 100);
    drawOrb(80, 80, 200);
    

}

function drawOrb(W,H,Shade) {

    let stroke = calculateStroke(W,H);

    fill(Shade);
    strokeWeight(stroke)
    ellipse(width/2, height/2, W, H);
}

function calculateStroke(W,H) {
    const minStroke = 10;
    const maxStroke = 40;
    let d = dist(mouseX,mouseY, W, H);
    let stroke = map(d, 0, width, maxStroke, minStroke);

    return stroke;

}

function drawSquare(){
    push();
    fill(0,200,200);
    rect(100,100, 50,50);
    pop();
}