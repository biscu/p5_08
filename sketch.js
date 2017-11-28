var value = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
  setMoveThreshold(5);
}

function draw() {
	background(20-value);
  fill(255+value);
  textSize(50);
  textAlign(CENTER);
  text("Step Today",width/2,height/3);
  textSize(90);
  textAlign(CENTER);
  text(value,width/2,height/2+30)
}

function deviceMoved() {
  value++;
}