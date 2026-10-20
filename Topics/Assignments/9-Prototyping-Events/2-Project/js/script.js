/**
 * Eat to Grow Bigger
 * Saba
 * 
 * Move the orb around to food that is spawning to make it bigger. Avoid eating the poisonous food!
 */

"use strict";

let score = 0;
let lose = false;

let player = {
    xspeed: 0,
    yspeed: 0,
    size: 50,
    x: 400,
    y: 400,
}

let food = {
    size: 25,
    x: 0,
    y: 0,
}

let poison = {
    size: 25,
    x: 0,
    y: 0,
}

function setup() {
    console.log(spawnFood)
    createCanvas(800,800);
    spawnFood();
    setInterval(spawnPoison, 3000);

}

function draw() {
    background(200);
    upScore();
    spawnPlayer();
    movePlayer();
    eatFood();
    eatPoison();
    
    
    // Draw Food
    push();
    noStroke();
    fill(255,255,0);
    ellipse(food.x, food.y, food.size, food.size);
    pop();

    push();
    noStroke();
    fill(100,255,100);
    ellipse(poison.x, poison.y, poison.size, poison.size);
    pop();


}

function spawnPlayer() {
    noStroke();
    fill(0, 0, 255);
    ellipse(player.x, player.y, player.size, player.size);

}

function movePlayer() {
    player.x += player.xspeed;
    player.y += player.yspeed;

}

function spawnFood() {
    food.x = random(100, 700);
    food.y = random(100, 700);
    
}

function spawnPoison() {
    if (score >= 15) {
    poison.x = random(100, 700);
    poison.y = random(100, 700);
    }
    
}

function eatFood() {
    let d = dist(player.x, player.y, food.x, food.y);
    if (d < (player.size / 2) + (food.size / 2)) {
    player.size += 5;
    spawnFood();
    score += 1;
  }
    
}

function eatPoison() {
    let d = dist(player.x, player.y, poison.x, poison.y);
    if (d < (player.size / 2) + (food.size / 2)) {
    player.size -= 20;
    score -= 5;
  }
    
}

function upScore() {
    textAlign(CENTER);
    text("Score:", width/2, 100);
    text(score, width/2 * 1.1, 100);

}
function keyPressed() {
    console.log(keyCode);
    if (keyCode === 39) {
        player.xspeed += 3;
    } else if (keyCode === 37) {
        player.xspeed -= 3;
    }

    if (keyCode === 40) {
        player.yspeed += 3;
    } else if (keyCode === 38) {
        player.yspeed -= 3;
    }


}

function keyReleased() {
    player.xspeed = 0;
    player.yspeed = 0;
}