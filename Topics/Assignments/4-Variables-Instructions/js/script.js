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
    createCanvas(700, 500)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

let rect_size = 10;
let ellipse_size = 50;

let bird = {
    birdX:50,
    birdY:90,
    birdSize:50,
    r:0,
    g:0,
    b:255

}

let sun = {
    sunX: 20,
    sunY: 50,
    sunsize: 10,
    r: 255,
    g: 255,
    b: 0
}
function draw() {
    background(0,0,0)
    noStroke()
    fill(255,0,0)
    fill(sun.r,sun.g,sun.b)
    ellipse(sun.sunX,sun.sunY,sun.sunsize,sun.sunsize)

    fill(bird.r,bird.g,bird.b)
    ellipse(bird.birdX,bird.birdY,bird.birdSize,bird.birdsize)

    bird.birdX = bird.birdX +1

    /*fill(random (0, 255),random(100, 255),0)
    ellipse(mouseX, mouseY, ellipse_size, ellipse_size)

    fill(random (0, 255),0,random(100, 255))
    ellipse(mouseX/0.75,mouseY, ellipse_size, ellipse_size)

    fill(0,random (0, 255),random(100, 255))
    ellipse(mouseX * 0.5,mouseY, ellipse_size, ellipse_size)

    fill(0,200,200)
    rect(rect_size,height/2,rect_size, rect_size)

    ellipse_size = ellipse_size-random(100,-100)
    rect_size = rect_size+2
    */

}