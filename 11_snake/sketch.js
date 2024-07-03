let head

function setup () {
  createCanvas(600, 600)
  head = new Head()
}

function draw () {
  background(0)
  head.display()
}


class Head {

  constructor () {
    this.x = 100
    this.y = 100
  }

  display () {
    noStroke()
    fill(255)
    square(this.x, this.y, 20)
  }

  update (x, y) {
    this.x = this.x + (x * 20)
    this.y = this.y + (y * 20)
  }

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    head.update(1, 0)
  }
  if (keyCode === LEFT_ARROW) {
    head.update(-1, 0)
  }
  if (keyCode === UP_ARROW) {
    head.update(0, -1)
  }
  if (keyCode === DOWN_ARROW) {
    head.update(0, 1)
  }
}