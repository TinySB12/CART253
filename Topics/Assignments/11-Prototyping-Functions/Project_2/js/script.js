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
let canvas = {

    color: {
        r: 240,
        g: 240,
        b: 240
    }
}


function setup() {
    createCanvas(1100, 700);
    background(canvas.color.r, canvas.color.g, canvas.color.b);

}


function draw() {

    if (mouseIsPressed) {
        push();
        stroke(pen.color.r, pen.color.g, pen.color.b);
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
    fill(pen.color.r, pen.color.g, pen.color.b);
    noStroke();
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

function keyPressed() {
    // Changes pen color
    if (keyCode === 82) { 
        changeColor(pen, 255, 0, 0); // Change color to red if you press "R"
    } else if (keyCode === 71) {
        changeColor(pen, 0, 255, 0); // Change color to green if you press "G"
    } else if (keyCode === 66) {
        changeColor(pen, 0, 0, 255); // Change color to blue if you press "B"
    } else if (keyCode === 75) {
        changeColor(pen, 0, 0, 0); // Change color to Black if you press "K"
    }

    // Resets canvas color if you press "C"
    if (keyCode === 67) {
        background(canvas.color.r, canvas.color.g, canvas.color.b);
    }

    // Changes canvas color to different shades depending on which key you press
    if (keyCode === 49) { 
        changeColor(canvas, 240, 240, 240); // Change color to red if you press "R"
    } else if (keyCode === 50) {
        changeColor(canvas, 180, 180, 180); // Change color to green if you press "G"
    } else if (keyCode === 51) {
        changeColor(canvas, 0, 0, 0); // Change color to blue if you press "B"
    } 

    
}

// Function made to change color of any target object
function changeColor(target, r, g, b) {
    target.color.r = r;
    target.color.g = g;
    target.color.b = b;
}

function resetCanvas() {
    background(canvas.color.r, canvas.color.g, canvas.color.b);
}