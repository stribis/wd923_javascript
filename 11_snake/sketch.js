
const cell = 20
let s
let food
let scoreText = 'Score: 0'
let img
function preload() {
  img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7623135-7079-448a-b39f-47f5dba587fa/ddwjri5-55fbf367-98d9-42a4-8bf8-c93ba7bbe423.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3NjIzMTM1LTcwNzktNDQ4YS1iMzlmLTQ3ZjVkYmE1ODdmYVwvZGR3anJpNS01NWZiZjM2Ny05OGQ5LTQyYTQtOGJmOC1jOTNiYTdiYmU0MjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h6egQCU73i0bNPR7AzvLKGe1KWqSo6r0usqye1uLo-c');
  
}
function setup () {
  createCanvas(600, 600)
  frameRate(10)
  s = new Snake()
  console.log(s)
  pickLocation()
  img.resize(22,22)
}

function draw () {
  background(0)

  stroke(255)

  if (s.eat(food)) {
    pickLocation()
  }

  stroke('#888')
  for (let i = 0; i < height; i += cell) {
    line(0, i, width, i)
  }

  for (let i = 0; i < width; i += cell) {
    line(i, 0, i, height)
  } 

  s.death()
  s.update()
  s.show()

  // fill(255, 0, 0)
  // rect(food.x, food.y, cell, cell)
  image(img, food.x, food.y);

  // Score Text
  fill('yellow')
  textSize(48)
  text(scoreText, 10, 40)
}

function keyPressed () {
  // UP: UP_ARROW
  // Snake x: 0 y: -1

  if (keyCode === RIGHT_ARROW) {
    s.dir(1,0)
  } else if ( keyCode === DOWN_ARROW) {
    s.dir(0, 1)
  } else if ( keyCode === LEFT_ARROW ) {
    s.dir(-1, 0)
  } else if( keyCode === UP_ARROW ) {
    s.dir(0, -1)
  }
}

function pickLocation () {
  const cols = floor(width/cell) 
  const rows = floor(height/cell)

  food = createVector(floor(random(0, cols)), floor(random(0, rows)))
  food.mult(cell)
  console.log(food)

}


