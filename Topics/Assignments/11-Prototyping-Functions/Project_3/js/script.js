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
    size: 100,
    originalSize: 100,
    x: null,
    y: null,
    color: {
        r: null,
        g: null,
        b: null
    }

}

// Variable for rectangles
let rectangle = {

    type: "rect",
    size: 100,
    originalSize: 100,
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
    size: 100,
    originalSize: 100,
    x: null,
    y: null,
    color: {
        r: null,
        g: null,
        b: null
    }

}


// Draws setup
function setup() {
    createCanvas(700, 600);

    rectMode(CENTER);

    // Randomizes color each time the code is loaded
    orb.color = colorPicker();
    rectangle.color = colorPicker();
    trian.color = colorPicker();

}


// Draws the shapes and the code
function draw() {
    background(250);

    drawShape(rectangle, 200, 200);
    drawShape(orb, 300, 300);
    drawShape(trian, 100, 100);


}


// Shrinks shape depending on mouse distance from the shape
function shrinkShape(tempX, tempY, tempSize) {
    let d = dist(mouseX, mouseY, tempX, tempY);

    if (d < 2*tempSize) {
        tempSize = d/2;
    }

    return tempSize;
}

function colorPicker() {

    let tempColor = {
    r: random(150, 255),
    g: random(150, 255),
    b: random(150, 255)
    }

    return tempColor;

}

// Draws either an ellipse, a rectangle or triangle depending on which shape type it receives
function drawShape(tempShape, tempX, tempY){

    // Passes the value of size calculated in shrinkShape to here where it will determine the shape size
    tempShape.size = shrinkShape(tempShape.x, tempShape.y, tempShape.originalSize);

    // Parameters for the x and y of the shape
    tempShape.x = tempX;
    tempShape.y = tempY;

    fill(tempShape.color.r, tempShape.color.g, tempShape.color.b);
    noStroke();

    if (tempShape.type === "ellipse") { // Draws an ellipse if the shape type is ellipse
        ellipse(tempShape.x, tempShape.y, tempShape.size, tempShape.size);
    } else if (tempShape.type === "rect") { // Draws a rectangle if the shape type is a rectangle
        rect(tempShape.x, tempShape.y, tempShape.size, tempShape.size);
    } else if (tempShape.type === "triangle") { // Draws a triangle if the shape type is a triangle
        triangle(tempShape.x, tempShape.y - tempShape.size/2, tempShape.x - tempShape.size/2, tempShape.y + tempShape.size/2, tempShape.x + tempShape.size/2, tempShape.y + tempShape.size/2);
    }
}