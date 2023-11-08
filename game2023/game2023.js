function setup() {
createCanvas(480, 480);
background(204);
}
function draw() {
translate(mouseX, mouseY);
rect(0, 0, 30, 30);
translate(35, 10);
rect(0, 0, 15, 15);
}
