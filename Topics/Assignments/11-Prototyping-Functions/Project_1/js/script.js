/**
 * Test 1
 * Saba
 * 
 * For once I'm going into a prototype without a specific idea. I'm just going to dabble so I can learn the material.
 */

"use strict";

let Orb = {
    colorR: null,
    colorG: null,
    colorB: null,
    size: 80,
}

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(50);
    drawOrb(400, 400, Orb.colorR+30,Orb.colorG+30,Orb.colorB+30);
    drawOrb(300, 300, Orb.colorR+50,Orb.colorG+50,Orb.colorB+50);
    drawOrb(200, 200, Orb.colorR+100,Orb.colorG+100,Orb.colorB+100);
    drawOrb(80, 80, Orb.colorR+200,Orb.colorG+200,Orb.colorB+200);

    textAlign(LEFT);
    fill(255);
    textSize(13);
    text("Click with your mouse :)",30,30,100,60);
}

function drawOrb(W,H, ColorR, ColorG, ColorB) {

    let stroke = calculateStroke(W,H);

    fill(ColorR, ColorG, ColorB);
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

function mousePressed(){
    Orb.colorG = random(0,255);
    Orb.colorB = random(0,255);
    Orb.colorR = random(0, 255);

}