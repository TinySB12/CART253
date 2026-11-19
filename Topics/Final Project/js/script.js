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

// Inventory that will hold the products
let inventory = [];

// The player's properties
let farmer = {
    x: 50,
    y: 50
};

// Money (You start with $500)
let money = 500;

let farm = {
    plot1: {
        status: ["unlocked", "notPlanted"]
    },

    plot2: {
        status: ["locked", "notPlanted"]
    },

    plot3: {
        status: ["locked", "notPlanted"]
    },
    
    plot2: {
        status: ["locked", "notPlanted"]
    },

    
}

// My plants
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
    drawFarm();

    
    
}

// The farm map. You start here.
function drawFarm(){
    background("green");
    
    //road
    push();
    noStroke();
    fill(242, 216, 162);
    rect(50, 0, 100, height);




}


function waterPlant(plant){

    if (plant.status.includes("thirsty")) {
        console.log("DRINK OITER");
    }
}