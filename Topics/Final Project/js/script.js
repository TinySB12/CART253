/**
 * Final Project
 * 
 * Farmer's Grind
 * Saba
 * 
 * Still a WIP
 * 
 * The game follows a farmer who has to farm, collect its crops, sell them at the market and make money—
 * so it can keep paying its slowly rising rent. The game should have a minimum of three locations.
 * 
 * - Home location where farmer skips to the next day
 * - Market where you buy seeds and sell crops
 * - Farm where you plant seeds and harvest them
 * 
 * The stakes of the game is the slowly rising rent as time goes.
 * This could also be a debt instead of rent that the farmer needs to pay to win.
 * 
 * Main systems I want to include:
 * - An inventory system (using an array to do this)
 * - Different crops. (Will simplify by giving different crops a different type, so that the same function can grow each one of them differently.)
 * - A pause menu 
 * -
 * 
 */

"use strict";

// Determines that the game has started.
let gameState = "start";

let inventory = [];

let farmer = {
    x: 50,
    y: 50
};

let money = 500;

// my plants
let crop = {

    tomato: {
        type: "tomato",
        status: ["thirsty","unFerted"],
        value: 30,
        growSpd: 60
    },

    carrot: {
        type: "carrot",
        status: ["thirsty","unFerted"],
        value: 25,
        growSpd: 30
    },

    lettuce: {
        type: "lettuce",
        status: ["thirsty","unFerted"],
        value: 50,
        growSpd: 120
    }
} 

function setup() {
    createCanvas(500,500);
    

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    waterPlant(crop.tomato);
    

    // if(gameState ==="start"){
    //     background("pink")

    // }
    // else if(gameState === "play"){
    //         background(0);
    //         drawButton();

    // }


}

// function drawButton() {

//     push();
//     fill(button.color);
//     noStroke();
//     rect(button.x,button.y,button.width,button.height);
//     pop();

// }

// function checkButton(tempbutton) {

//     if (mouseX > tempbutton.x && mouseX < tempbutton.x + tempbutton.width
//         && mouseY > tempbutton.y && mouseY < tempbutton.y + tempbutton.height) {
//             console.log('button Is pressed!')
//         }
    

// }

// function mousePressed() {
//     checkButton(button);
// }
// function keyPressed(){
//     if(keyCode === 32){
//         gameState = "play";
//     }
// }

function waterPlant(plant){

    if (plant.status.includes("thirsty")) {
        console.log("DRINK OITER");
    }
}