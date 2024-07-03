
let stars = []
const numOfStars = 100

function setup () {
  createCanvas(600, 600)
 
  for (let i = 0; i < numOfStars; i++) {
    stars.push(new Star())
  }
}

function draw () {
  background(0)
  for (let i = 0; i < stars.length; i++) {
    stars[i].update()
    stars[i].display()
  }
  console.log('X: ', mouseX)
}

function Star () {

  this.x = random(0, width)
  this.y = random(0, height)
  this.speed = random(1, 5)

  this.display = function () {
    noStroke()
    fill(255)
    circle(this.x, this.y, 10)
  }


  this.update = function () {
    if ( this.y > height) {
      this.y = 0 
    }
    this.updatedSpeed = map(mouseX, 0, width,1, this.speed)
    this.y = this.y + this.updatedSpeed
  }
}