/**
 * No Touchie V2
 * Saba
 * 
 * An improved version based on my conditionals prototype - No Touchie
 * 
 */

"use strict";

let shape = {
    size: null,
    x: null,
    y: null,
    color: {
        r: null,
        g: null,
        b: null
    }

}

let orbSize = shrinkShape(orbX, orbY, 50);
let rectSize = shrinkShape(rectX, rectY, 80);
let trianSize = shrinkShape(trianX, trianY, 70);


function setup() {
    createCanvas(700, 600);

}

function draw() {
    background('skyblue');
}


function shrinkShape(tempX, tempY, tempSize) {
    let d = dist(mouseX, mouseY, tempX, tempY);

    if (d < 2*tempSize) {
        tempSize = d/2;
    }

    return tempSize;
}

function colorPicker(tempColor, tempR, tempG, tempB) {

    let tempColor = {
    tempR: random(100, 235),
    tempG: random(100, 255),
    tempB: random(100, 235)
    }

    return tempColor;

}