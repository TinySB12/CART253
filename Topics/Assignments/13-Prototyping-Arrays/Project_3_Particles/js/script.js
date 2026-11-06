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

let maxParticles = 200;

let mouseRadius = 80;


// Creates Setup
function setup() {
    createCanvas(1200, 600);

       // Create the particles
    for (let i = 0; i < maxParticles; i++) {
       createParticles();
    }
    

}



// Creates Draw
function draw() {
    background(0);

    for (let particle of particles) {
        
        let d = dist(mouseX, mouseY, particle.x, particle.y);

        if (d < mouseRadius) {

        let speedX = particle.x - mouseX;
        let speedY = particle.y - mouseY;
        particle.x += speedX*0.05;
        particle.y += speedY*0.05;

        } else {

        particle.x = lerp(particle.x, particle.originalX, 0.05);
        particle.y = lerp(particle.y, particle.originalY, 0.05);

        }

        push();
        fill(particle.color.r, particle.color.g, particle.color.b);
        noStroke();
        ellipse(particle.x, particle.y, particle.size);
        pop();

    }

}

function createParticles() {

    // Variable for my particles
    const particle = {
     
     x: random(width),
     y: random(height),
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