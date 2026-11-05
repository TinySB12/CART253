/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let color1 = color(0,100,255);
    let color2 = color(255,255,150);

    let xRect = 0;

    for(let gradientIndex = 0; gradientIndex<1;  gradientIndex+=0.02){

      push();
      let rectColor = lerpColor(color1, color2, gradientIndex);
      fill(rectColor);
      noStroke();
      rect(xRect, 0, 10, height);

      xRect+=10;

      pop();

    }
    

    let x = 0;

    for (x=0; x<width; x+=50){
        line(x, 0, x, height);
    }

    x = 0;

    while(x<height) {
        x += 50;
        line(0, x, width, x);
    }

}