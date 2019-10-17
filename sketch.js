
let photo, mask;

var xoffset = 155;
var yoffset = 245;
function preload() {
  photo = loadImage('images/emoji.jpg');
  mask = loadImage('images/m2.png');
   // imgMask = loadImage('assets/mask.png');

}
function setup() {
  createCanvas(400, 400);
     // background(0);
  noLoop();
    imageMode(CORNER);

    image(photo, 0,0);
}

function draw() {
    // background(255);
   // photo.mask(mask);
     image(photo, 0, 0);
  fill(0);
ellipse(xoffset, yoffset, 30, 30);

  ellipse(xoffset+120, yoffset+10, 30, 30);
  stroke(255);
  strokeWeight(8);
  noFill();
  arc(xoffset+50, yoffset+50, 50, 50, 0, PI);
}

function mousePressed() {
if(mouseIsPressed){
 // photo.mask(mask);
   background(0);
   image(photo, 0, 0);
 photo.mask(mask);


  }


}
