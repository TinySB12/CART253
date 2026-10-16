/**
 * Spin The Rabbit
 * Saba
 * 
 * Press the arrow keys to take the rabbit for a SPEEEEEEEEN!!!
 */

"use strict";

//Variables for the rabbit image and the angle of rotation
let angle = 0;
let rabbit;

function setup() {
    createCanvas(600, 600);
}


/**
 * Spin the rabbit with the arrow keys!
*/
function draw() {
    background(230);
    image(rabbit, 100, 100, 100, 100);
    rotate(angle);

}

//load the rabbit image
function preload() {
    rabbit = loadImage('assets/rabbit.png'); 
}

//Spin left or right with the arrow keys
function keyPressed() {
    console.log(keyCode);
    if (keyCode === 37) {
        angle -= 0.1;
    } else if (keyCode === 39) {
        angle += 0.1;
    }
}