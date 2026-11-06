/**
 * Particles
 * Saba
 * 
 * Somewhat inspired by my No Touchie prototypes, but I want the particles to move AWAY from the cursor,
 * and then slowly come back when the cursor moves away, rather than have them shrink.
 */

"use strict";

// Array to contain my particles
let particles = [];

let maxParticles = 100;

let mouseRadius = 80;


// Creates Setup
function setup() {
    createCanvas(1200, 600);

    

}



// Creates Draw
function draw() {
    background(0);

     // Create initial particles
     for (let i = 0; i < maxParticles; i++) {
        createParticles();
     }

}

function createParticles() {

    // Variable for my particles
    const particle = {
     
     x: null,
     y: null,

        
     originalX: 0,
     originalY: 0,

        
     size: random(4, 12),

     color: {
            r: random(100, 255),
            g: random(100, 255),
            b: random(150, 255)
        }
    
    }
    // Store original position
    particle.originalX = particle.x;
    particle.originalY = particle.y;

    // Add particle to array
    particles.push(particle);
    

}