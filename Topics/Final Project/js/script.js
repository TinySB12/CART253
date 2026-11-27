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

// Sets menu status to closed
let menuOpen = false;

// Inventory that will hold the products
let inventory = [];

// The player's properties
let farmer = {
    x: 85,
    y: 85,
    speed: 3,
    nearestObject: null
};

// Money (You start with $500)
let money = 500;

let farm = {
    plot1: {
        x: 250,
        y: 50,
        w: 150,
        h: 150,
        type: "plot",
        status: ["unlocked", "empty"],
        crop: null
    },

    plot2: {
        x: 450,
        y: 50,
        w: 150,
        h: 150,
        type: "plot",
        status: ["locked", "empty"],
        crop: null,
        price: 150
    },

    plot3: {
        x: 250,
        y: 250,
        w: 150,
        h: 150,
        type: "plot",
        status: ["locked", "empty"],
        crop: null,
        price: 250
    },
    
    plot4: {
        x: 450,
        y: 250,
        w: 150,
        h: 150,
        type: "plot",
        status: ["locked", "empty"],
        crop: null,
        price: 350
    },

    
}

let market = {
    x: null,
    y: null,
    type: "market",
    items: ["tomato seeds", "carrot seeds", "lettuce seeds"]
}

let home = {
    x: null,
    y: null,
    type: "home"
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

function draw() {
    drawFarm();

    if (menuOpen === false) {
        moveFarmer();
    }

    farmer.nearestObject = null;
    

    checkPlot(farm.plot1);
    checkPlot(farm.plot2);
    checkPlot(farm.plot3);
    checkPlot(farm.plot4);

    drawFarmer();

    drawInteractionMenu();
    
    
}

// Draw the farmer
function drawFarmer(){
    push();
    noStroke();
    fill(0, 0, 200);
    rect(farmer.x, farmer.y, 25);
    pop();

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

    drawPlot(farm.plot1);
    drawPlot(farm.plot2);
    drawPlot(farm.plot3);
    drawPlot(farm.plot4);


}

function drawPlot(plot) {

    push();
    noStroke();

    if (plot.status.includes("locked")) {

        fill(65, 45, 35);
        rect(plot.x, plot.y, plot.w, plot.h);

        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("$", plot.x + plot.w/2, plot.y + plot.h/2);

    }

    else {

        fill(112, 77, 58);
        rect(plot.x, plot.y, plot.w, plot.h);

    }

    pop();
}

// Checks if farmer is close enough to each plot so it can interact with it.
function checkPlot(plot){
    let d = dist(
        farmer.x,
        farmer.y,
        plot.x + plot.w/2,
        plot.y + plot.h/2
    );

    if(d < 100){
        console.log("Interact distance!");
        farmer.nearestObject = plot;
    }
}

// Moves farmer using the arrow keys
function moveFarmer(){
    if(keyIsDown(LEFT_ARROW)){
        farmer.x -= farmer.speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        farmer.x += farmer.speed;
    }
    if(keyIsDown(UP_ARROW)){
        farmer.y -= farmer.speed;
    }
    if(keyIsDown(DOWN_ARROW)){
        farmer.y += farmer.speed;
    }
}

// WIP of a function to water the plants later
function waterPlant(plant){

    if (plant.status.includes("thirsty")) {
        console.log("DRINK OITER");
    }
}

// Draws different interaction menus
function drawInteractionMenu(){

    if(menuOpen){

        push();

        fill(255);
        stroke(0);
        rect(20, 20, 200, 140);
        noStroke();
        fill(0);
        textSize(18);
        textAlign(CENTER);
        text("INTERACT", 120, 50);
        textSize(14);

        if (farmer.nearestObject.status.includes("locked")) {

            text("Purchase plot", 120, 85);

            text(
                "$" + farmer.nearestObject.price + " " + "(Press P)",
                120,
                110
            );

        }

        else if (farmer.nearestObject.status.includes("empty")) {

            text("Empty plot", 120, 85);

        }

        text("Press E to close", 120, 145);

        pop();

    }

}

// Allows farmer to interact with different objects
function interactWith() {

    if (farmer.nearestObject.type === "plot") {

        if (farmer.nearestObject.status.includes("locked")) {
            console.log("This plot can be purchased!");
        }

        else if (farmer.nearestObject.status.includes("empty")) {
            console.log("This plot is empty!");
        }

    }

}

function keyPressed() {

    if (key === "e") {

        if (menuOpen === false) {

            if (farmer.nearestObject === null) {
                console.log("Nothing nearby!");
            }

            else {
                menuOpen = true;
                interactWith();
            }

        }

        else {
            menuOpen = false;
        }

    }

}