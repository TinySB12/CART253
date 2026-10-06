/**
 * Traffic Light
 * Saba
 * Keeping it simple. The lights change color based on mouse clicks!
 */

"use strict";

/**
 *
*/

//Variable for the light state so I can make the color change!
let light = 0;
function setup() {
    createCanvas(400, 400);

}


/**
 * This is how I learn you can draw shapes IN the condition statements.
 * Holy moly this is so useful.
*/
function draw() {
    background(220,220,220);

    //Red Light
    if (light === 0) {
        fill(255, 0, 0);
        ellipse(200, 100, 80, 80);
    } else {
        //Red Light Off
        fill(100, 0, 0);
        ellipse(200, 100, 80, 80);
        //I decided to make this look like an actual traffic light so it gets an off state.
    }

    //Yellow Light
    if (light === 1) {
        fill(255, 255, 0);
        ellipse(200, 200, 80, 80);
    } else {
        //Yellow Light Off
        fill(100, 100, 0);
        ellipse(200, 200, 80, 80);
    }

    //Green Light
    if (light === 2) {
        fill(0, 255, 0);
        ellipse(200, 300, 80, 80);
    } else {
        //Green Light Off
        fill(0, 100, 0);
        ellipse(200, 300, 80, 80);
    }
}
//function that changes the light state when mouse is clicked.
function mousePressed() {
    light = light + 1;
    //This is so that the light state doesn't go bigger than 2, cause that would break it :')
    if (light > 2) {
        light = 0;
    }
}