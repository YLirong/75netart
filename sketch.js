var xoffset = 40;
var yoffset = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

   ellipse(xoffset, yoffset, 40, 40);
  ellipse(xoffset+100, yoffset, 40, 40);
  arc(xoffset+50, yoffset+50, 100, 50, 0, PI);
}
