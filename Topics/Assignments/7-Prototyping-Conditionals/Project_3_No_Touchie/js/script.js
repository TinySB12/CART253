/**
 * No Touchie
 * Saba
 * 
 * Touch the orbs if you can! (Spoilers, you can't. Hopefully.)
 * Just to be more clear: There will be multiple circles that get smaller the closer
 * the mouse gets to them.
 */

"use strict";

//Circle1
let x = 200;
let y = 200;

//Circle2
let x2 = 90;
let y2 = 145;

//Circle3
let x3 = 300;
let y3 = 300;

//Circle4
let x4 = 300;
let y4 = 100;

//Circle5
let x5 = 100;
let y5 = 300;

//Circle6
let x6 = 170;
let y6 = 60;

function setup() {
    createCanvas(400, 400);

}


/**
 * Different colored circles get smaller when the mouse is closer to them. 
*/
function draw() {

    //draw the background and remove the stroke from the circles
    background(50, 50, 150);
    noStroke();

    //calculate the distance between the mouse and Circle1
    let distance = dist(mouseX, mouseY, x, y);
    fill(3, 186, 252);
    //draw Circle1 and make it smaller the closer the mouse is to it
    if (distance < 150) {
        let size = distance / 2;
        ellipse(x, y, size, size); }
        else {
        ellipse(x, y, 75, 75);
    }

    //calculate the distance between the mouse and Circle2
    let distance2 = dist(mouseX, mouseY, x2, y2);
    fill(197, 58, 232);
    //draw Circle2 and make it smaller the closer the mouse is to it
    if (distance2 < 150) {
        let size2 = distance2 / 2;
        ellipse(x2, y2, size2, size2); }
        else {
        ellipse(x2, y2, 75, 75);
    }

    //calculate the distance between the mouse and Circle3
    let distance3 = dist(mouseX, mouseY, x3, y3);
    fill(252, 219, 50);

    //draw Circle3 and make it smaller the closer the mouse is to it
    if (distance3 < 150) {
        let size3 = distance3 / 2;
        ellipse(x3, y3, size3, size3); }
        else {
        ellipse(x3, y3, 75, 75);
    }

    //calculate the distance between the mouse and Circle4
    let distance4 = dist(mouseX, mouseY, x4, y4);
    fill(50, 252, 104);

    //draw Circle4 and make it smaller the closer the mouse is to it
    if (distance4 < 150) {
        let size4 = distance4 / 2;
        ellipse(x4, y4, size4, size4); }
        else {
        ellipse(x4, y4, 75, 75);
    }

    //calculate the distance between the mouse and Circle5
    let distance5 = dist(mouseX, mouseY, x5, y5);
    fill(255, 94, 77);
    //draw Circle5 and make it smaller the closer the mouse is to it
    if (distance5 < 150) {
        let size5 = distance5 / 2;
        ellipse(x5, y5, size5, size5); }
        else {
        ellipse(x5, y5, 75, 75);
    }

    //calculate the distance between the mouse and Circle6
    let distance6 = dist(mouseX, mouseY, x6, y6);
    fill(255, 130, 46);

    //draw Circle6 and make it smaller the closer the mouse is to it
    if (distance6 < 150) {
        let size6 = distance6 / 2;
        ellipse(x6, y6, size6, size6); }
        else {
        ellipse(x6, y6, 75, 75);
    }
}