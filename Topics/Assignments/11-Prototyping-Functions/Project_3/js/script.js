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