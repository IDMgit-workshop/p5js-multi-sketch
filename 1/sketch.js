function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 20, 20);
  fill(0);
  rect(width / 2 - width / 40, height / 4 - width / 20, width / 20, height / 2 + width / 10);
  rect(width / 2.5, height / 4 + height / 2, width - 2 * width / 2.5, width / 20);
  rect(width / 2 - width / 20 - width / 40, height / 4 - width / 20, width / 20, width / 20);
}
