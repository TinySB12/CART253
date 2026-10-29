/**
 * Orb Color Spectrum
 * Saba
 * 
 * For once I'm going into a prototype without a specific idea. I'm just going to dabble so I can learn the material.
 */

"use strict";


// variable for Orb
let Orb = {
    colorR: null,
    colorG: null,
    colorB: null,
    size: 80,
}

// Sets up canvas
function setup() {
    createCanvas(500, 500);

}

// Draws orbs in different colors and pre-determined sizes
function draw() {
    background(50);
    drawOrb(400, 400, Orb.colorR+30,Orb.colorG+30,Orb.colorB+30);
    drawOrb(300, 300, Orb.colorR+50,Orb.colorG+50,Orb.colorB+50);
    drawOrb(200, 200, Orb.colorR+100,Orb.colorG+100,Orb.colorB+100);
    drawOrb(80, 80, Orb.colorR+200,Orb.colorG+200,Orb.colorB+200);

    // Instruction text for the user
    textAlign(LEFT);
    fill(255);
    textSize(13);
    text("Click with your mouse :)",30,30,100,60);
}

// Function for drawing orbs
function drawOrb(W,H, ColorR, ColorG, ColorB) {

    // passes the value from calculate stroke to stroke
    let stroke = calculateStroke(W,H);

    // Draws ellipse always centered on canvas
    fill(ColorR, ColorG, ColorB);
    strokeWeight(stroke)
    ellipse(width/2, height/2, W, H);
    
}

// Calculates the value of stroke based on mouse distance
function calculateStroke(W,H) {
    const minStroke = 10; // Minimum length of stroke
    const maxStroke = 40; // Maxium length of stroke
    let d = dist(mouseX,mouseY, W, H); // Calculates the distance between the mouse and the x and y of the ellipse
    let stroke = map(d, 0, width, maxStroke, minStroke); // Maps minimum and maximum sizes of the stroke based on the calculated distance

    return stroke; 

}

// Changes the RGB values with a mouse press
function mousePressed(){
    Orb.colorG = random(0,255);
    Orb.colorB = random(0,255);
    Orb.colorR = random(0, 255);

}