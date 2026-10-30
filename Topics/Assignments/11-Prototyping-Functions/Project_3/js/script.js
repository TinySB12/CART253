/**
 * No Touchie V2
 * Saba
 * 
 * An improved version based on my conditionals prototype - No Touchie
 * 
 */

"use strict";

// Variable for orbs— I mean ellipses
let orb = {

    type: "ellipse",
    size: null,
    x: null,
    y: null,
    color: {
        r: null,
        g: null,
        b: null
    }

}

// Variable for rectangles
let rect = {

    type: "rect",
    size: null,
    x: null,
    y: null,
    color: {
        r: null,
        g: null,
        b: null
    }

}

// Varable for triangles
let trian = {

    type: "triangle",
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

function colorPicker() {

    let tempColor = {
    r: random(100, 235),
    g: random(100, 255),
    b: random(100, 235)
    }

    return tempColor;

}

function drawShape(tempShape){

    if (tempShape.type === "ellipse") {
        ellipse(tempShape.x, tempShape.y, tempShape.size, tempShape.size);
    } else if (tempShape.type === "rect") {
        rect(tempShape.x, tempShape.y, tempShape.size, tempShape.size);
    } else if (tempShape.type === "triangle") {
        triangle(tempShape.x, tempShape.y, tempShape.size/2, tempShape.size/2, tempShape.size*2, tempShape.size*2);
    }
}