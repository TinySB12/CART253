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

    // Centers my rectangles so they shrink to the center rather than their corner
    rectMode(CENTER);

    // Randomizes color each time the code is loaded
    orb.color = colorPicker();
    rectangle.color = colorPicker();
    trian.color = colorPicker();

}


// Draws the shapes and the code
function draw() {
    background(250);

    // Draws my different shapes based on which one I call
    drawShape(rectangle, 540, 400);
    drawShape(orb, 350, 300);
    drawShape(trian, 200, 240);
    drawShape(orb, 100, 400);
    drawShape(orb, 400, 100);
    drawShape(rectangle, 150, 100);
    drawShape(trian, 370, 450);
    drawShape(trian, 520, 150);
}


// Shrinks shape depending on mouse distance from the shape
function shrinkShape(tempX, tempY, tempSize) {
    let d = dist(mouseX, mouseY, tempX, tempY);

    // Calculates the size of my shapes based on the distance between the cursor and the x and y of the target shape
    if (d < 2*tempSize) {
        tempSize = d/2;
    }

    // Returns the value of tempSize
    return tempSize;
}

// Randomizes the color of each shape type every time the code is refreshed
function colorPicker() {

    // randomizes value for r g b
    let tempColor = {
    r: random(150, 255),
    g: random(150, 255),
    b: random(150, 255)
    }

    // Returns the value of tempColor
    return tempColor;

}

// Draws either an ellipse, a rectangle or triangle depending on which shape type it receives
function drawShape(tempShape, tempX, tempY){

    // Parameters for the x and y of the shape
    tempShape.x = tempX;
    tempShape.y = tempY;

    // Passes the value of size calculated in shrinkShape to here where it will determine the shape size
    tempShape.size = shrinkShape(tempShape.x, tempShape.y, tempShape.originalSize);

    // Color of my shapes that gets determined in function ColorPicker()
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

