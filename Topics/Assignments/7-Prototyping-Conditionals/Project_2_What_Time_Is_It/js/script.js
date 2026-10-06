/**
 * What Time Is It?
 * Saba
 * 
 * The sky changes color based on the mouse position!
 */

"use strict";

//Variable to hold the colors of the sky for day and night.
//Adjust these to get a different transition!
let SkyColor = {
    day: "#1ebfff",
    day2: "#480e43",
    night: "#04042c",
    night2: "#3939dd"
};


function setup() {
    createCanvas(500, 400);
}


/**
 * My day and night cycles!
*/
function draw() {

    //Make it so that the sky changes color based on the mouse position!
    if (mouseX < 250) {
        //Daytime
        push();
        //Make the day color slowly transition into the night color with mouse movement!
        background(lerpColor(color(SkyColor.day), color(SkyColor.day2), mouseX / 250));
        noStroke();
        //Draw sun
        fill(255, 255, 0);
        ellipse(250, 200, 100, 100);
        pop();
    } else {
        //Nighttime
        push();
        //Make the night color slowly transition into the day color with mouse movement!
        background(lerpColor(color(SkyColor.night), color(SkyColor.night2), (mouseX - 250) / 250));
        noStroke();
        //Draw moon
        fill(255, 255, 255);
        ellipse(250, 200, 100, 100);
        pop();
    }   

}