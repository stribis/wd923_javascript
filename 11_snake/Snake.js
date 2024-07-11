class Snake {

  constructor ( ) {
    this.x = 0
    this.y = 0

    this.xspeed = 1
    this.yspeed = 0

    this.total = 0
    this.tail = []
  }

  show ( ) {
    fill (0, 255, 0)

    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, cell, cell )
    }
    // Snake Head
    // rect(this.x, this.y, cell, cell)
    quad(this.x + 10, this.y, this.x+20, this.y +10, this.x+10, this.y + 20, this.x, this.y+10)
  }

  update () {
    // Update tail position 
    for (let i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i + 1]
    }

    // Create Vector when total is increased
    if  (this.total >= 1) {
      this.tail[this.total -1] = createVector(this.x, this.y)
    }

    this.x = this.x + this.xspeed * cell
    this.y = this.y + this.yspeed * cell

    this.x = constrain(this.x, 0, width - cell)
    this.y = constrain(this.y, 0, height - cell)
  }

  death () {
    // Test if head touches tail
    for (let i = 0; i < this.tail.length; i++) {
      const pos = this.tail[i]
      const d = dist(this.x, this.y, pos.x, pos.y)
      if( d <  1) {
        console.log('You died')
        scoreText = 'You Died'
        this.total = 0
        this.tail = []
      }
    }
  }

  dir (x, y) {
    this.xspeed = x
    this.yspeed = y

    console.log(`x speed: ${this.xspeed}, y speed: ${this.yspeed}`)
  }

  eat(pos) {
    let d = dist ( this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      // The snake ate a fruit
      this.total++

      scoreText = `Score: ${this.total}`
      return true
    } else {
      return false
    }
  }
}