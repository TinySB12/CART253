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
    x: 200,
    y: 375,
    size: 50,
    yspeed: 0,
    gravity: 0.5,
    jump: -10
};

// Array to contain my obstacles
let obstacles = [];


function setup() {
    createCanvas(1000, 500);

}



function draw() {
    background(200);

    // Draw ground
    push();
    fill(150);
    noStroke();
    rect(0, 400, width, 200);
    pop();

    // Draw Player
    push();
    fill('darkblue');
    noStroke();
    ellipse(player.x, player.y, player.size);
    pop();

}

function keyPressed() {
    if (keyCode === 32) {
        player.y += player.jump;
    }
}

function playerFall() {
    if (player.y <= height) {
        player.yspeed += player.gravity;
        player.y += player.yspeed
    }
}