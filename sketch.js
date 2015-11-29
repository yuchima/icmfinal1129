var xoff;
var yoff;
var colfade = 20;
var list = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  for (var i = 0; i < 4; i++) {
  list.push(new ball());
  }
}

function draw() {

  for (i = 0; i < list.length - 3; i++) {
    list[i].update();
    list[i + 1].update();
    // if (mouseIsPressed) {
    list[i + 2].update();
    // }

    noFill();
    // stroke(random(255), random(255), random(255), 20);
    stroke(255,20);
    beginShape();
    curveVertex(list[i].loc.x, list[i].loc.y);
    curveVertex(list[i + 1].loc.x, list[i + 1].loc.y);
    curveVertex(list[i + 2].loc.x, list[i + 2].loc.y);


    curveVertex(list[i].loc.x, list[i].loc.y);
    curveVertex(list[i + 1].loc.x, list[i + 1].loc.y);
    curveVertex(list[i + 2].loc.x, list[i + 2].loc.y);
    endShape();
  }
  // colfade -= 0.05;
  // console.log(list[i].nos.x +"_"+list[i].nos.y +"_"+list[i].xoff+"_"+list[i].yoff);
}

function ball() {
  //declare the variables
  this.xoff = random(2);
  this.yoff = random(2);
  this.loc = createVector(random(width), random(height));
  this.velo = createVector(0, 0);
  this.nos = map(noise(this.xoff, this.yoff),0,1,0.2,0.3);

  //update the location value
  this.update = function() {
    this.mousetracking = createVector(mouseX, mouseY);
    this.dir = this.mousetracking.sub(this.loc);
    this.dir.normalize();
    this.dir.mult(this.nos);
    this.acc = this.dir;
    this.loc.add(this.velo);
    this.velo.add(this.acc);
    this.velo.limit(10);
    this.xoff += 0.005;
    this.yoff += 0.005;
  }
}