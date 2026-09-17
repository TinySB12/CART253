/**
 * Class Two
 * Saba
 * 
 * Hi! I have no clue what I'm doing yet! :D
 * Please don't judge me too harshly, I'm still learning!
 */

"use strict";

/**
 * Just my canvas for now!
*/
function setup() {


    //Making my canvas 700px wide and 500px tall
    createCanvas(700, 500);
    
}


/**
 * Gonna attempt making a sunset over the ocean!
*/
function draw() {
//The sky is purple now
background(130, 9, 114);

//Furthest layer of glow
fill(166, 15, 88);
ellipse(350, 300, 620, 620);

//Wider glow for more detail
fill(255, 100, 0);
ellipse(350, 300, 400, 400);

//The sun's glow because I wanted to add more detail! :D
fill(255, 150, 0);
ellipse(350, 300, 250, 250);

//The SUNNN
fill(255, 255, 0);
ellipse(350, 300, 200, 200);

//The Ocean go brrr 
fill(0, 50, 255);
strokeWeight(0);
rect(0, 300, 700, 200);

//Attempting to add the sun's reflecting on the ocean

//First layer of reflection
fill(255, 162, 0);
arc(350, 300, 250, 160, TWO_PI, PI);

fill(255, 162, 0);
ellipse(350, 345, 250, 75);

fill(255, 162, 0);
ellipse(350, 380, 200, 70);

fill(255, 162, 0);
ellipse(350, 420, 140, 60);

fill(255, 162, 0);
ellipse(350, 450, 60, 20);

//Second layer of reflection
fill(255, 225, 0);
arc(350, 300, 200, 140, TWO_PI, PI);

fill(255, 225, 0);
ellipse(350, 340, 200, 60);

fill(255, 225, 0);
ellipse(350, 380, 150, 50);

fill(255, 225, 0);
ellipse(350, 420, 100, 40);

fill(255, 225, 0);
ellipse(350, 450, 30, 10);

//I'm gonna attempt a cloud because I have problems


}