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
    createCanvas(1100, 700);
    background(canvasColor);

}



function draw() {

    
    if (mouseIsPressed) {
        stroke(pen.color);
        strokeWeight(pen.size);
        line(pmouseX, pmouseY, mouseX, mouseY); // Using line for a smoother brush stroke
    }

    // Pen details preview box
    push();
    fill(255);
    strokeWeight(2);
    rect(50, 50, 200, 200);
    pop();
    fill(0);
    textSize(15);
    textWeight(700);
    text("Pen size", 60, 80);
 
    

}

function mouseWheel(event) {
    // Increase or decrease pensize dependings on your mousescroll direction
    if (event.delta > 0) {
    pen.size -= 1; } else if (event.delta < 0) {
        pen.size += 1;
    }

    pen.size = constrain(pen.size, 10, 100); // Constrains pensize between 10 and 100 px
}