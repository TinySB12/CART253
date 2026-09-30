/**
 * Mouse Chase
 * Saba
 * 
 * With this, I want the mouse to chase my cursor with a bit of delay instead of always being stuck to my cursor.
 * This one SHOULDN'T need any conditions. We'll see!
 */

"use strict";

// Every good prototype starts with a good little Orb
let Orb = {
    x: 50,
    y: 50
}
// Why not more good little orbs?
let Orb2 = {
    x: 50,
    y: 50
}

let Orb3 = {
    x: 50,
    y: 50
}

function setup() {
    createCanvas(600, 600);

}


/**
 * Time to draw the orb and make it chase!
*/
function draw() {
    background(200,200,255);

    // Draw Orb
    fill(255,255,255);
    ellipse(Orb.x, Orb.y, 20, 20);

    // Make Orb chase mouse
    Orb.x = lerp(Orb.x, mouseX, 0.3);
    Orb.y = lerp(Orb.y, mouseY, 0.3);

    // Draw Orb2
    fill(255,155,155);
    ellipse(Orb2.x, Orb2.y, 30, 30);

    // Make Orb2 chase mouse
    Orb2.x = lerp(Orb2.x, mouseX, 0.2);
    Orb2.y = lerp(Orb2.y, mouseY, 0.2);

    // Draw Orb3
    fill(155,155,255);
    ellipse(Orb3.x, Orb3.y, 50, 50);

    // Make Orb3 chase mouse
    Orb3.x = lerp(Orb3.x, mouseX, 0.1);
    Orb3.y = lerp(Orb3.y, mouseY, 0.1);



}