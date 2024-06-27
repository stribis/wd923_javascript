const name = 'Colombia'
const capital = 'Bogota'

let completeName = function () {
  console.log(`${this.capital} is the capital of ${this.name}`)
}

const country = {name, capital, completeName}

console.log(country.completeName())

