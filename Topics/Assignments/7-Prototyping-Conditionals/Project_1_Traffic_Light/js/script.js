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

    //Pole of traffic light
    push();
    noStroke();
    fill(30,30,30);
    rect(190, 350, 20, 100);
    pop();

    //Traffic light box
    push();
    noStroke();
    fill(30,30,30);
    rect(150, 50, 100, 300);
    pop();


    //Red Light
    if (light === 0) {
        push();
        noStroke();
        fill(255, 0, 0);
        ellipse(200, 100, 80, 80);
        pop();
    } else {
        //Red Light Off
        push();
        noStroke();
        fill(100, 0, 0);
        ellipse(200, 100, 80, 80);
        pop();
        //I decided to make this look like an actual traffic light so it gets an off state.
    }

    //Yellow Light
    if (light === 1) {
        push();
        noStroke();
        fill(255, 255, 0);
        ellipse(200, 200, 80, 80);
        pop();
    } else {
        //Yellow Light Off
        push();
        noStroke();
        fill(100, 100, 0);
        ellipse(200, 200, 80, 80);
        pop();
    }

    //Green Light
    if (light === 2) {
        push();
        noStroke();
        fill(0, 255, 0);
        ellipse(200, 300, 80, 80);
        pop();
    } else {
        //Green Light Off
        push();
        noStroke();
        fill(0, 100, 0);
        ellipse(200, 300, 80, 80);
        pop();
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