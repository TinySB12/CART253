/**
 * Bouncing Orb
 * Saba
 * 
 * Time to see if I can make an orb bounce across the canvas like a TV logo!
 * Future edit: looks like I'm once again going ahead of course cause apparently this needs me to use conditions, whoops!
 */

"use strict";

/**
 * 
*/

//My Orb
let Orb = {
    //starting position
    x:250,
    y:250,
    //speed of orb in both directions
    xspeed:0.5,
    yspeed:0.8,
    /*after further investigation, I've learned I'm gonna need the radius of my orb specifically
    to be able to tell the computer to apply its condition based on the EDGE of my orb, not its center!
    */
   radius: 30
}

function setup() {
    createCanvas(500, 500)

}


/**
 * Draw the background and the orb
*/
function draw() {
    background(150,150,150)

    // Draw the orb
    fill(0,200,250);
    noStroke();
    ellipse(Orb.x, Orb.y, Orb.radius *2, Orb.radius*2);

    // Move the orb
    Orb.x = Orb.x + Orb.xspeed;
    Orb.y = Orb.y + Orb.yspeed;

    // time for conditions!
    // Make orb bounce from the edges of the canvas
    // Also learned what >= means through my search: it means "greater than or equal to". It's a better safety net.
    // || means "OR", and I need to use it so I can make sure the orb bounces off both edges, not just one side
    // I'm multiplying the orb speeds by -1 to reverse the direction
    if (Orb.x + Orb.radius >= width || Orb.x - Orb.radius <= 0) {Orb.xspeed = Orb.xspeed * -1}
    if (Orb.y + Orb.radius >= height || Orb.y - Orb.radius <= 0) {Orb.yspeed = Orb.yspeed * -1}

}