/**
 * Drawing Game
 * Saba
 *
 * Going to try and make a drawing game where you can draw lines with your mouse.
 */

"use strict";

let pen = {
    color: 0,
    size: 10,
    x: null,
    y: null
}

let canvasColor = 200;


function setup() {
    createCanvas(800, 800);
    background(canvasColor);

}



function draw() {

    
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY); // Using line for a smoother brush stroke
    }

    //pen cursor orb
    push();
    noStroke();
    fill(pen.color);
    ellipse(mouseX, mouseY, pen.size, pen.size);
    pop();
    

}

function mouseWheel(event) {
    // Increase or decrease pensize dependings on your mousescroll direction
    if (event.delta > 0) {
    pen.size -= 1; } else if (event.delta < 0) {
        pen.size += 1;
    }

    pen.size = constrain(pen.size, 10, 100); // Constrains pensize between 10 and 100 px
}