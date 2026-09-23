/**
 * "One Is Watching"
 * Saba
 * 
 * I've been wanting to make one from TPOT just standing there and staring at you and your cursor.
 * Here's hoping this won't be too complicated! (Famous last words)
 */

"use strict";

/**
 * I don't have a detailed background in mind for this.
*/
function setup() {
    createCanvas(900, 600);
    

}


/**
 * I've attempted to draw One from TPOT.
 * and I wanted to have her eyes follow the cursor because she loves watching people in the show she's from.
 * I also really wanted to try the eye following the cursor function.
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

    //irises
    let irisX = map(mouseX, 0, width, 360, 540);
    let irisY = map(mouseY, 0, height, 280, 320);
    
    
    fill(0, 0, 0);
    circle(irisX, irisY, 30);
    circle(irisX + 140, irisY, 30);
    
     
    
    





}