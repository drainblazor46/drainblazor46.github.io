function setup() {
  createCanvas(600, 600);
}

function draw() {
background(212, 149, 81);
fill(255, 0, 0);
ellipse(300, 550, 250, 275); //body
rect(385, 505, 65, 95); //right arm
rect(150, 505, 65, 95); //right arm
fill(252, 217, 148); //skintone
ellipse(300, 250, 300, 375); //mah head
fill(0, 0, 0); //eyeball color
ellipse(355, 220, 70, 45); 
ellipse(245, 220, 70, 45);
fill(255, 255, 255); //eye color
ellipse(355, 220, 55, 35); 
ellipse(245, 220, 55, 35);
fill(20, 20, 20); //iris color
ellipse(355, 220, 30, 35); 
ellipse(245, 220, 30, 35);
fill(0, 0, 0); //eye color
ellipse(355, 220, 7, 7);
ellipse(245, 220, 7, 7);
fill(72, 76, 88); //headphone color
ellipse(150, 250, 30, 100);
ellipse(450, 250, 30, 100);
ellipse(475, 250, 60, 115);
ellipse(125, 250, 60, 115);
rect(125, 100, 30, 150);
rect(445, 100, 30, 150);
rect(155, 70, 30, 150);
rect(415, 70, 30, 150);
rect(185, 40, 30, 150);
rect(385, 40, 30, 150);
rect(215, 15, 30, 175);
rect(355, 15, 30, 125);
rect(245, 10, 30, 175);
rect(325, 10, 30, 175);
rect(275, 10, 30, 150);
rect(295, 10, 30, 150);
fill(0, 0, 0);
rect(255, 350, 90, 15);
rect(300, 275, 5, 25);
ellipse(300, 390, 15, 10);
noFill();
stroke(0, 0, 0);
strokeWeight(4);
curve(275, 275, 125, 250, 300, 390, 1350, 350); //controls the width and height of the mic

}
