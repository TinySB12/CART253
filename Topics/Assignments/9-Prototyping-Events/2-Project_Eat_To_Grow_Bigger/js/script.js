/**
 * Eat to Grow Bigger
 * Saba
 * 
 * Move the orb around to food that is spawning to make it bigger. Avoid eating the poisonous food!
 */


// Variable for score
let score = 0;

// Variable for win condition
let win = false;

// Variables for player stats
let player = {
    xspeed: 0,
    yspeed: 0,
    size: 50,
    x: 400,
    y: 400,
}

// Variables for food
let food = {
    size: 25,
    x: 0,
    y: 0,
}

// Variables for poison food
let poison = {
    size: 25,
    x: 0,
    y: 0,
}
// Variable for when poison will appear
let poisonVisible = false;

function setup() {
    createCanvas(800,800);

    // Start game with food already spawned
    spawnFood();
    // Check to spawn poison every 10 seconds
    setInterval(spawnPoison, 10000);
    

}

// Draw the game
function draw() {
    background(0);

    // Draw function to spawn player
    spawnPlayer();
    // Draw function to move player
    movePlayer();
    // Draw function to eat food
    eatFood();
    // Draw function to eat poison food
    eatPoison();
    
    
    // Draw Food
    push();
    noStroke();
    fill(255,255,0);
    ellipse(food.x, food.y, food.size, food.size);
    pop();

    // Draw Poison Food
    if (poisonVisible) {
    push();
    noStroke();
    fill(100, 255, 100);
    ellipse(poison.x, poison.y, poison.size, poison.size);
    pop();
    }

    // Draw score appearing on top of the screen
    push();
    textAlign(CENTER);
    fill(255);
    textSize(15);
    text("Score:", width/2, 100);
    text(score, width/2 * 1.1, 100);
    pop();

    push();
    textAlign(CENTER);
    textSize(15);
    text("Use the Arrow Keys to move! Get to score 50 to win the game!", width/2, 120);
    text("Careful not to eat the poison food!", width/2, 140);
    pop();

    // Draw the win condition and stop game when player wins
    if (win === true) {
        push();
        textAlign(CENTER);
        textWeight(800);
        fill(255);
        textSize(60);
        text("YOU WIN!", width/2, height/2);
        pop();

        noLoop();
    }

}

// Function to spawn player
function spawnPlayer() {
    noStroke();
    fill(0, 0, 255);
    ellipse(player.x, player.y, player.size, player.size);

}

// Function for moving the player
function movePlayer() {
    player.x += player.xspeed;
    player.y += player.yspeed;

}

// Function for spawning the food
function spawnFood() {
    food.x = random(100, 700);
    food.y = random(100, 700);
    
}

// Function for spawning the poison food and when it begins to spawn
function spawnPoison() {
   if (score >= 15) {
   poison.x = random(100, 700);
   poison.y = random(100, 700);
   poisonVisible = true;
   }
    
}

// Function for eating the food
function eatFood() {
    let d = dist(player.x, player.y, food.x, food.y);
    if (d < (player.size / 2) + (food.size / 2)) {
    player.size += 5;
    spawnFood();
    score += 1;
  }

  //Win condition
  if (score === 50) {
        win = true;
    }
    
}

// Function for eating the poison food
function eatPoison() {
    if (poisonVisible) {
    let d = dist(player.x, player.y, poison.x, poison.y);

    if (d < (player.size / 2) + (poison.size / 2)) {
    player.size -= 20;
    score -= 5;
    poisonVisible = false;
    }
    }
  }


// Function to move player
function keyPressed() {
    // Code to move player left or right
    if (keyCode === 39) {
        player.xspeed += 3;
    } else if (keyCode === 37) {
        player.xspeed -= 3;
    }

    // Code to move player up or down
    if (keyCode === 40) {
        player.yspeed += 3;
    } else if (keyCode === 38) {
        player.yspeed -= 3;
    }


}

// Function to stop player movement when keys are released
function keyReleased() {
    player.xspeed = 0;
    player.yspeed = 0;
}