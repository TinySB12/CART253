/**
 * Drawing Game
 * Saba
 *
 * Going to try and make a drawing game where you can draw lines with your mouse.
 */

"use strict";

let pen = {
    size: 10,
    x: null,
    y: null,

    color: {
        r: 0,
        g: 0,
        b: 0
    }
}

let canvasColor = 200;


function setup() {
    createCanvas(1100, 700);
    background(canvasColor);

}



function draw() {

    
    if (mouseIsPressed) {
        push();
        stroke(pen.color);
        strokeWeight(pen.size);
        line(pmouseX, pmouseY, mouseX, mouseY); // Using line for a smoother brush stroke
        pop();
    }

    // Pen details preview box
    push();
    fill(255);
    strokeWeight(2);
    rect(50, 50, 200, 200);
    pop();
    // Text inside preview box
    fill(0);
    textSize(15);
    textWeight(700);
    text("Pen size:", 60, 80);
    text(pen.size, 130, 80);
    pop();

    // Pen size preview
    push();
    fill(pen.color);
    ellipse(150, 150, pen.size, pen.size);
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