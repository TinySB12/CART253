/**
 * Orbit
 * Saba
 * 
 * My goal with this project is to make multiple orbs orbit around my mouse!
 * I'm going to try starting more simply this time compared to last time.
 */

"use strict";


// First Orb
let Orb1 = {
  angle: 0,
  distance: 80
}

// Second Orb
let Orb2 = {
  angle: 0,
  distance: 150
}

// Third Orb
let Orb3 = {
  angle: 0,
  distance: 250
}

/**
*/
function setup() {
    createCanvas(600, 600)

}


/**
 * 
*/
function draw() {
    background(0,150,150);

    // Calculate the orb's position from cursor
    push();
    let x = mouseX + (Orb1.distance) * cos(Orb1.angle);
    let y = mouseY + (Orb1.distance) * sin(Orb1.angle);
    pop();
    // Draw Orb1
    push();
    noStroke();
    fill(200,255,255);
    ellipse(x, y, 30, 30);
    pop();

    // Increases angle to orbit Orb1 around cursor
    Orb1.angle = Orb1.angle + 0.05;

    // Calculate the Orb2's position from cursor
    let x2 = mouseX + (Orb2.distance) * cos(Orb2.angle);
    let y2 = mouseY + (Orb2.distance) * sin(Orb2.angle);
    

    // Draw Orb2
    push();
    noStroke();
    fill(200,255,150);
    ellipse(x2, y2, 80, 80);
    pop();

    // Increases angle to orbit the orb around cursor
    Orb2.angle = Orb2.angle + 0.02;

    // Calculate the Orb3's position from cursor
    let x3 = mouseX + (Orb3.distance) * cos(Orb3.angle);
    let y3 = mouseY + (Orb3.distance) * sin(Orb3.angle);
    

    // Draw Orb3
    push();
    noStroke();
    fill(200,150,255);
    ellipse(x3, y3, 100, 100);
    pop();

    // Increases angle to orbit the orb around cursor
    Orb3.angle = Orb3.angle + 0.01;

    
    


}