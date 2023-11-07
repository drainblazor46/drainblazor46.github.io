var img, img2; //image variable
var initials ='jc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 210; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://drainblazor46.github.io/nyancat.gif');
  img2 = loadImage('https://drainblazor46.github.io/carltondance.gif');
}

function setup() {
createCanvas(1495, 715);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    noStroke(0);
    fill(255, 243, 55);
    rect(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '2') { // second tool
    fill(16, 255, 243);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (toolChoice == '3') { // third tool
    noStroke(0);
    fill(251, 184, 101);
    ellipse(mouseX, mouseY, 15, 15);
  } else if (toolChoice == '4') {
    noStroke(0);
    fill(161, 157, 152);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (key == '5') { // this tool calls a function
    fill(0, 0, 255);
    testbox(100, 59, 0);
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    rect(mouseX, mouseY, 100, 50);
  } else if (toolChoice == '7') {
    noStroke(0);
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    colorMode(HSB);
    fill(mouseX, mouseY/600*255, 150);
    ellipse(mouseX, mouseY, 20, 20);
    
    
    
   // stroke(0, 0);
   // fill(random(255), random(255), random(255), random(255));
   // rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    noStroke(0);
    image(img, mouseX-25, mouseY-25, 50, 50);
    
  } else if (toolChoice == 'f' || toolChoice == 'F') { // f places the image we pre-loaded
    image(img2, mouseX-25, mouseY-25, 50, 50);
  }
}
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}
function keyPressed(e) {
  // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
  if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
    undoToPreviousState();
  }
}
function undoToPreviousState() {
  // if previousState doesn't exist ie is null
  // return without doing anything
  if (!previousState) {
    return;
  }
  // else draw the background (in this case white)
  // and draw the previous state
  background(255);
  image(previousState, 0, 0);
  // then set previous state to null
  previousState = null;
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
