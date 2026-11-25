/**
 * Final Project
 * 
 * Farmer's Grind
 * Saba
 * 
 * 
 * The game follows a farmer who has to farm, collect its crops, sell them at the market and make money—
 * so it can keep paying its slowly rising rent. The game should have a minimum of three locations.
 * 
 * - Home location where farmer skips to the next day (Not prioritized.)
 * - Market where you buy seeds and sell crops
 * - Farm where you plant seeds and harvest them
 * 
 * The stakes of the game is the slowly rising rent as time goes. (Not prioritized.)
 * This could also be a debt instead of rent that the farmer needs to pay to win.
 * 
 * Main systems I want to include:
 * - An inventory system (using an array to do this)
 * - Different crops. (Will simplify by giving different crops a different type, so that the same function can grow each one of them differently.)
 * - A pause option.
 * - TBA
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
        x: 250,
        y: 50,
        w: 150,
        h: 150,
        status: ["unlocked", "notPlanted"],
        crop: null
    },

    plot2: {
        x: 450,
        y: 50,
        w: 150,
        h: 150,
        status: ["locked", "notPlanted"],
        crop: null
    },

    plot3: {
        x: 250,
        y: 250,
        w: 150,
        h: 150,
        status: ["locked", "notPlanted"],
        crop: null
    },
    
    plot4: {
        x: 450,
        y: 250,
        w: 150,
        h: 150,
        status: ["locked", "notPlanted"],
        crop: null
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
    createCanvas(700,500);
    

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
    rect(100, 200, 500, 50);
    rect(400, 50, 50, 350);
    pop();

    //plot1
    push();
    noStroke();
    fill(112, 77, 58);
    rect(
    farm.plot1.x,
    farm.plot1.y,
    farm.plot1.w,
    farm.plot1.h
    );
    pop();

    //plot2
    push();
    noStroke();
    fill(112, 77, 58);
    rect(
    farm.plot2.x,
    farm.plot2.y,
    farm.plot2.w,
    farm.plot2.h
    );
    pop();

    //plot3
    push();
    noStroke();
    fill(112, 77, 58);
    rect(
    farm.plot3.x,
    farm.plot3.y,
    farm.plot3.w,
    farm.plot3.h
    );
    pop();

    //plot4
    push();
    noStroke();
    fill(112, 77, 58);
    rect(
    farm.plot4.x,
    farm.plot4.y,
    farm.plot4.w,
    farm.plot4.h
    );
    pop();


}


function waterPlant(plant){

    if (plant.status.includes("thirsty")) {
        console.log("DRINK OITER");
    }
}