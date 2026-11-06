/**
 * Orb Runner
 * Saba
 * 
 * I'm going to attempt to make something similar to the dino run browser game
 * 
 */

"use strict";

// Player and its properties
let player = {
    x: 240,
    y: 375,
    size: 50,
    yspeed: 0,
    gravity: 0.5,
    jump: -12
};

// Array to contain my obstacles
let obstacles = [];

let obstacleTimer = 0;

// Create Setup
function setup() {
    createCanvas(1000, 500);

}


// Create Draw
function draw() {
    background(200);

    // Draw ground
    push();
    fill(100);
    noStroke();
    rect(0, 400, width, 200);
    pop();

    // Draw Player
    push();
    fill('darkblue');
    noStroke();
    ellipse(player.x, player.y, player.size);
    pop();

    playerFall(); // Apply gravity to the player
    spawnObstacle(); // Spawn obstacles
    
    for (let obs of obstacles) {
        // Draw obstacle
        push();
        fill(obs.color);
        noStroke();
        rect(obs.x, obs.y, obs.width, obs.height);

        moveObstacle(obs); // Move the obstacles across screen

    }

}

function keyPressed() {
    // Allow player to jump ONLY when they are grounded to avoid double jumps
    if (keyCode === 32 && player.y === 375) {
        player.yspeed += player.jump;
    }
}

// Function to apply gravity to the player
function playerFall() {

    player.yspeed += player.gravity;
    player.y += player.yspeed;

    // Makes the player not fall past a certain y
    if (player.y >= 375) {
        player.y = 375;
        player.yspeed = 0;
    }

}

// function to move the obstacles on the x
function moveObstacle(obs) {

    obs.x -= obs.xspeed;

}

// Function to spawn obstacles
function spawnObstacle() {

    // variable for the obstacle
    const obstacle = {
    x: width,
    y: 320,
    width: 40,
    height: 150,
    color: 100,
    xspeed: 3.5
    }

    // Adds obstacles in the array
    obstacles.push(obstacle);

}