function setup() {
  createCanvas(600, 600);
  background(123)
}

function draw() {
if (mouseIsPressed) {
fill(0);
} else {
fill(255);
}
circle(mouseX, mouseY, 20, 20);
}
