/**
 * Dabbling for now
 * Saba
 * 
 * Just experimenting with arrays and stuff - Gonna try coding bouncing balls!
 */

"use strict";


let orbs = [];



function setup() {
    createCanvas(600, 400);

}



function draw() {
    background('darkblue');

    for (let orb of orbs) {

        // increase fall speed the more it falls
        orb.speed.y += orb.gravity;
        // make orbs move
        orb.x += orb.speed.x;
        orb.y += orb.speed.y;

        if (orb.y >= height) {
            orb.y = height - orb.size;
            orb.speed.y *= -orb.bounce;
        }

        push();
        fill(orb.color);
        noStroke();
        ellipse(orb.x, orb.y, orb.size, orb.size);

    }
}


// Function to drop orbs at my mouse position
function dropOrb() {

    // Creates my orb with its different properties
    const orb = {
    size: 30,
    x: mouseX,
    y: mouseY,
    color: 255,

    // Orb speed
    speed: {
        x: 0.5,
        y: 0.5
    },

    gravity: 0.5,
    bounce: 0.8
}

orbs.push(orb);

}

function mousePressed() {
    dropOrb();
}