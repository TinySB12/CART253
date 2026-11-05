/**
 * Bouncing Orbs
 * Saba
 * 
 * Just experimenting with arrays and stuff - Gonna try coding bouncing orbs!
 * 
 */

"use strict";

// My Array for orbs
let orbs = [];
// Max number of orbs allowed
let maxOrbs = 100;

// Creates my setup
function setup() {
    createCanvas(600, 400);
}


// Creates my draw
function draw() {
    background('darkblue');

    // Drops orbs when mouse is pressed
    if (mouseIsPressed) {
        dropOrb();
    }

    // Loop for having all my orbs fall and bounce
    for (let orb of orbs) {

        // increase fall speed the more it falls
        orb.speed.y += orb.gravity;
        // make orbs move
        orb.x += orb.speed.x;
        orb.y += orb.speed.y;

        // make orbs bounce
        if (orb.y + orb.size/2 >= height) {
            orb.y = height - orb.size/2;
            orb.speed.y *= -orb.bounce;
        }

        // Draw da ORB
        push();
        fill(orb.color.r, orb.color.g, orb.color.b);
        noStroke();
        ellipse(orb.x, orb.y, orb.size, orb.size);
        pop();

    }


    // Instructions text
    push();
    fill(255);
    textSize(20);
    textWeight(600);
    textAlign(CENTER);
    text("Click with your mouse! :D", width/2, height/2);
    pop();
}


// Function to drop orbs at my mouse position
function dropOrb() {

    // Creates my orb with its different properties
    const orb = {
    size: 30,
    x: mouseX,
    y: mouseY,
    color: {
        r: random(255),
        g: random(255),
        b: random(255)
    },
    // Orb speed
    speed: {
        x: random(-3, 3),
        y: 0.5
    },

    // Orb gravity and bounce
    gravity: 0.5,
    bounce: 0.8
}

// If there are more than the max amount of orbs, deletes an orb out of the array
if(orbs.length >= maxOrbs) {
    orbs.splice(0,1);
}

// Adds orb into my orbs array
orbs.push(orb);
}

// Drops orb when mouse is clicked
function mousePressed() {
    dropOrb();
}