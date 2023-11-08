var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
let timer = 5

function setup() {
createCanvas(600, 600);
  textAlign(CENTER);
  noStroke(0);
  textSize(20);
  text(timer, width/2, height/2);
} // end of setup

function draw() {
background(200);
 if(gameState == "L1"){
   levelOne();
 }
 if(gameState == "L2"){
   levelTwo();
 }
 if(gameState == "L3"){
   levelThree();
 }
text(("Score: " + score),width/2,40);
text(("Timer: " + timer), width/2, 20);
} // end of draw

function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
  if(score>= 5){
    timer = timer + 5;
    gameState = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
} // end of level 1 ===========================================================================

function levelTwo(){
  background(200, 100, 0);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
      if(score>= 10){
      timer = timer + 5;
      gameState = "L3";
    }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
} // end of level 2 ===========================================================================

function levelThree(){
  background(0, 100, 200);
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
  }
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
  if(score>= 15){
   // timer = timer + 5;
      background(random(255));
    }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize);
  
} // end of level 3 ===========================================================================
