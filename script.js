let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;

function setup() {
  // Canvas & color settings
  windowWidthFixed = windowWidth-15
  windowHeightFixed = windowHeight-20
  createCanvas(windowWidthFixed, windowHeightFixed);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  time = 1000;
  score = 0
  gameIsOver = false;
  fillrand1 = random(360)
  fillrand2 = random(360)
  timeDecrease = 0
  ellipseScaling = windowHeight/25
  startClicked = false
  gameIsPlaying = false
}

function draw() {
  background(backgroundColor);
  fill(fillrand1, 100, 100)
  ellipse(coinX, coinY, ellipseScaling);
  fill(fillrand2, 100, 100)
  ellipse(mouseX, mouseY, ellipseScaling);
  fill(0, 0, 0)
  textAlign(LEFT)
  text(`Time remaining: ${time}`, 20, 40);
  text(`Score: ${score}`, 20, 20);
  handleTime();
  handleCollision();
  startButton();
  restartButton();
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  hit = collideCircleCircle(mouseX, mouseY, ellipseScaling, coinX, coinY, ellipseScaling)
  if (hit == true && !gameIsOver && gameIsPlaying) {

    score += 1
    coinX = random(width);
    coinY = random(height);
    fillrand1 = random(360)
   fillrand2 = random(360)
  }
}

function handleTime() {
  // We'll write code to handle the time.

  if (time > 0) {

    time -= timeDecrease;

  } else {

    gameIsOver = true;
    gameIsPlaying = false;
    textAlign(LEFT)
    text(`Game Over`, 20, 60)

  }

}

function startButton() {

  if (!startClicked) {
    rectMode(CENTER)
    rect(windowWidthFixed/2, windowHeightFixed/2, windowWidthFixed/5, windowHeightFixed/20)
    fill(0, 0, 100)
    textAlign(CENTER)
    text(`Start`, windowWidthFixed/2, windowHeightFixed/2)

  } else if (startClicked) {

    timeDecrease = 1

  } 

  if (mouseY > windowHeightFixed/2 - windowHeightFixed/40 && mouseY < windowHeightFixed/2 + windowHeightFixed/40 && mouseX > windowWidthFixed/2 - windowWidthFixed/10 && mouseX < windowWidthFixed/2 + windowWidthFixed/10 && mouseIsPressed) {

    startClicked = true
    gameIsPlaying = true

  }

}

function restartButton() {

  //Restart Button
  if (gameIsOver) {
    rectMode(CENTER)
    rect(windowWidthFixed/2, windowHeightFixed/2, windowWidthFixed/5,windowHeightFixed/20)
    fill(0, 0, 100)
    textAlign(CENTER)
    text(`Restart`, windowWidthFixed/2, windowHeightFixed/2)
  }

  //Restart Button click detection
  if (mouseY > windowHeightFixed/2 - windowHeightFixed/40 && mouseY < windowHeightFixed/2 + windowHeightFixed/40 && mouseX > windowWidthFixed/2 - windowWidthFixed/10 && mouseX < windowWidthFixed/2 + windowWidthFixed/10 && mouseIsPressed) {

    gameIsOver = false
    time = 1000
    score = 0

  }

}