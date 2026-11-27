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
let inventory = [
    {type: "seed", crop: "tomato", quantity: 5},
    {type: "seed", crop: "carrot", quantity: 3},
    {type: "seed", crop: "lettuce", quantity: 4}
];

// The player's properties
let farmer = {
    x: 100,
    y: 85,
    speed: 3,
    nearestObject: null
};

// The money you start with (You start with $500)
let money = 500;

// My farm and its plots + their properties
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

// My market
let market = {
    x: null,
    y: null,
    type: "market",
    items: ["tomato seeds", "carrot seeds", "lettuce seeds"]
}

// My home
let home = {
    x: null,
    y: null,
    type: "home"
}

// My crops
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

// My setup (haven't had to add anything to it yet)
function setup() {
    createCanvas(700,500);
}

// Draws the game
function draw() {

    drawFarm();
    drawMoney();

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

    // drawing inventory before I move it to its own function

    push();
    rectMode(CENTER);
    fill(0);
    rect(width/2, height - 50, 350, 50, 50);

    // inventory slots?? Sabine this For loop is for you

    for (i = 0; i < 6; i++) {

        fill(60);
        stroke(255);
        strokeWeight(2);
        rect(width/2 + i*50, height - 50, 50, 50);
    }

    pop();


    
    
}

// Draw the farmer
function drawFarmer(){
    push();
    noStroke();
    rectMode(CENTER);
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

function drawMoney(){
    push();

    // Black box
    fill(0);
    noStroke();
    rect(width - 100, 10, 80, 30, 50);

    // Text showing the money amount
    fill(0, 255, 0);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("$" + money, width - 60, 25);

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

// // WIP of a function to water the plants later
// function waterPlant(plant){

//     if (plant.status.includes("thirsty")) {
//         console.log("DRINK OITER");
//     }
// }

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

function purchase(object){

    if (object.type === "plot"){

        if (object.status.includes("locked")) {

            if (money >= object.price) {

                money -= object.price;
                object.status[0] = "unlocked";

                console.log("Plot purchased!");

            }

            else if (money < object.price) {

                console.log("Not enough money!");

            }

        }

    }

}
        

// Detects what the player is interacting with. Not helping with the game's function atm but its helping me keep track.
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

    // Open and close interaction menu
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

    // control for purchasing objects (will adjust later for the market too)
    if (key === "p" && menuOpen === true) {

        if (farmer.nearestObject === null) {
            console.log("Nothing to purchase!");
        }

        else {
            purchase(farmer.nearestObject);
        }

    }

}