

class Vacation {

  constructor(destination, duration) {
    this.destination = destination
    this.duration = duration
  }

  print ( ) {
    console.log(`${this.destination} will take ${this.duration} days`)
  }

}


const alicanteTrip = new Vacation ('Alicante', '3')
const colombiaTrip = new Vacation ('Cali', 15)
alicanteTrip.print()