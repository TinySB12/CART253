/**
 * Drawing Game
 * Saba
 *
 * Going to try and make a drawing game where you can draw lines with your mouse.
 */

"use strict";

// Variable for pen
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

// Variable for canvas color in case I wanna mess with it
let canvasColor = 200;


function setup() {
    createCanvas(1100, 700);
    background(canvasColor);

}



function draw() {

    if (mouseIsPressed) {
        push();
        stroke(pen.color.r, pen.color.g, pen.color.b);
        strokeWeight(pen.size);
        line(pmouseX, pmouseY, mouseX, mouseY); // Using line for a smoother brush stroke
        pop();
    }

    if (keyCode === 82) {
        changeColor(pen, 255, 0, 0);
    } else if (keyCode === 71) {
        changeColor(pen, 0, 255, 0);
    } else if (keyCode === 66) {
        changeColor(pen, 0, 0, 255);
    } else if (keyCode === 75) {
        changeColor(pen, 0, 0, 0);
    }

    console.log(keyCode);

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

function changeColor(tempPen, r, g, b) {
    tempPen.color.r = r;
    tempPen.color.g = g;
    tempPen.color.b = b;
}