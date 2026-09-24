/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

let Sky = {
    r:160,
    g:180,
    b:200

};

let Bird = {
    X: 30,
    Y: 150

};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(Sky.r, Sky.g, Sky.b);
  

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  //Draw a bird
  drawBird(Bird.X,Bird.Y);

  //Make mrFurious slowly turn red
  mrFurious.fill.g = mrFurious.fill.g -1
  mrFurious.fill.b = mrFurious.fill.b -1
  mrFurious.fill.g = constrain(mrFurious.fill.g,50,255)

  //Make mrFurious shake
  mrFurious.x = mrFurious.x +random(-5,5);
  mrFurious.x = constrain(mrFurious.x,200-5,200+5);
  console.log(mrFurious.x)

  //Change Sky color to Night
  Sky.r = Sky.r -1
  Sky.b = Sky.b -1
  Sky.g = Sky.g -1
  //Constrain Sky color to a specific Dark Blue
  Sky.b = constrain(Sky.b, 90, 255)
  Sky.g = constrain(Sky.g,5,255)
  Sky.r = constrain(Sky.r,11,255)

  Bird.X = Bird.X +random(0.5,10)
  Bird.Y = Bird.Y +random(0.5,2)


}
//Make a Bird
function drawBird(x,y){

    fill(255,255,0)
    noStroke();
    arc(x,y,50,50,QUARTER_PI,0);

}