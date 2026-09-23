/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 600);
    colorMode(RGB);
    noStroke();

 //I'm going to ask what Describe does later. I'm making this setup based on a reference from the p5.js website.

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

}