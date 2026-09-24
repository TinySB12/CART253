/**
 * Cloudy Sky
 * Saba
 * 
 * A sky full of clouds! Maybe I'll see if I can make them slowly move across the screen.
 * My main goal is to practice using the draw functon with this project.
 */

"use strict";

/**
 * I'm gonna try a smaller canvas for this one.
*/
function setup() {
    createCanvas(700, 500);
    background(135, 188, 235);

}


/**
 * Clouds go brrr
 * I actually really like how the custom draw function is making this easier. Compared to my previous project,
 * This one feels a lot more organized.
*/
function draw() {

    drawCloud(100, 100);
    drawCloud(400, 150);
    drawBiggerCloud(600, 200);
    drawCloud(200, 300);
    drawBiggerCloud(400, 400);
    drawBiggerCloud(60, 430);
    drawCloud(500, 60);
    drawBiggerCloud(5, 225);
    drawBird(300, 100);
    drawBird(500, 300);
    drawBird(120, 280);

}

//my different draw functions for this project!
function drawCloud(x, y) {
    fill(255);
    noStroke();
    arc(x, y, 100, 100, PI, 0);
    arc(x + 50, y, 50, 50, PI, 0);

}

function drawBiggerCloud(x, y) {
    fill(255);
    noStroke();
    arc(x, y, 100, 100, PI, 0);
    arc(x + 75, y, 150, 150, PI, 0);
    arc(x + 150, y, 75, 75, PI, 0);
    arc(x + 230, y, 50, 50, PI, 0);
}

/* Took me some time to figure out how to use the arc function to make the bird. It still took more trial and error than I would
have liked, though!
*/
function drawBird(x, y) {
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(x, y, 50, 20, PI + QUARTER_PI, PI + 4 * QUARTER_PI);
    arc(x + 50, y, 50, 20, PI, PI + 3 * QUARTER_PI);
}
//I really want to learn how to make the clouds move across the screen, but for now I like this.