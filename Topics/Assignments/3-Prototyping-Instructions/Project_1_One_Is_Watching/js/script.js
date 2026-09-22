/**
 * "One Is Watching"
 * Saba
 * 
 * I've been wanting to make one from TPOT just standing there and staring at you and your cursor.
 * Here's hoping this won't be too complicated! (Famous last words)
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 600);
    

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(197, 217, 222);


    //her legs :)
    fill(123,151,246);
    rect(350, 550, 80, 100);

    fill(123,151,246);
    rect(475, 550, 80, 100);

    //Her body but unfortunately I didn't know how to do the head shape proper like the reference
    fill(90, 124, 240);
    strokeWeight(5);
    rect(360, 150, 180, 400, 20);

    fill(90, 124, 240);
    strokeWeight(5);
    rect(255, 400, 400, 150, 30);

    fill(90, 124, 240);
    strokeWeight(5);
    rect(300, 150, 176, 150, 20);

    noStroke();
    fill(90, 124, 240);
    rect(362, 152, 176, 300, 20);
    stroke(0);
    
    //Her eyes and mouth
    fill(255, 255, 255);
    ellipse(380, 300, 100, 110);

    fill(255, 255, 255);
    ellipse(520, 300, 100, 110);

    noFill();
    arc(450, 400, 90, 130, 0, PI);
    
     
    
    





}