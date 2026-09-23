/**
 * Dusk Bunny
 * Saba
 * 
 * My main goal with this project is to learn how to do Color Interlopation! I will also attempt to use a previous draw function
 * from my previous project (Cloudy Sky) to add more background elements.
 */

"use strict";

/**
 * Dusk Sky go brrrr!
*/
function setup() {
    createCanvas(1000, 600);
    colorMode(RGB);
    noStroke();

 /**I'm going to ask what Describe does later. I'm making this setup based on a reference from the p5.js website, except unlike
 * The website, I'll be using RBG color mode cause I'm curious if it'll work with different color modes.
 */
 let colorA = color(30, 0, 51);

 let colorB = color(207, 76, 100);

 let stripeCount= 9;

 let stripeHeight= height / stripeCount;

 for (let y = 0; y < height; y += stripeHeight) {
    let fadeAmount = y / height;
    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }
}


/**
 * I'll be drawing a silhouette of a rabbit here later!
*/
function draw() {

  //The ground
  fill(12, 0, 20)
  arc(500, 600, 1400, 300, PI, 0)

  //The bunny
  drawBunny(300, 430)

  //The clouds
  drawBiggerCloud(150, 180)
  drawBiggerCloud(500, 120)
  drawCloud(800, 210)
   


}

function drawBunny(x, y) {

  //The body
  fill(12, 0, 20)
    ellipse(x + 100, y, 200, 160)
    //tail
    circle(x, y, 80)
    //head
    ellipse(x + 150, y - 50, 110, 100)
    //The ears
    ellipse(x + 130, y - 100, 40, 100)
    ellipse(x + 160, y - 100, 40, 100)


}

//Cloud from my previous project
function drawBiggerCloud(x, y) {
    fill(12, 0, 20);
    noStroke();
    arc(x, y, 100, 100, PI, 0);
    arc(x + 75, y, 150, 150, PI, 0);
    arc(x + 150, y, 75, 75, PI, 0);
    arc(x + 230, y, 50, 50, PI, 0);
}
function drawCloud(x, y) {
    fill(12, 0, 20);
    noStroke();
    arc(x, y, 100, 100, PI, 0);
    arc(x + 50, y, 50, 50, PI, 0);

}