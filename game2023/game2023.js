var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
let timer = 5
var img, img2, img3; 

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg')  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://drainblazor46.github.io/carltondance.gif');
  img2 = loadImage('https://drainblazor46.github.io/nyancat.gif');
  img3 = loadImage('https://drainblazor46.github.io/rockeyebrow.gif');  
}
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
 if (gameState=="win"){
     text("You Won", width/2, height-20);
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
  // ellipse(ballx, bally, ballSize);
  
    image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    
    
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
  // ellipse(ballx, bally, ballSize);
  
  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 2 ===========================================================================

function levelThree(){
  background(0, 100, 200);
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 2;
  }
  if(frameCount % 60 == 0 && timer > 0){
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
  if(score>= 15){
    // timer = timer + 5;
      background(120);
    }
  line(ballx, bally, mouseX, mouseY);
   ellipse(ballx, bally, ballSize);
  
    image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} 
if(score>25){
// level 4
  gameState = "win";
}
