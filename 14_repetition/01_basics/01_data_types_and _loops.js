

/**
 * Data Types
 */

// String

const myString = 'This is a string'  // Zeichenketten 

// Numbers

const myInteger = 20
const myFloat = 3.32

// Boolean

const truthy = true
const falsy = false

// Array 

const myList = [
  'apple', 
  'banana',
  'mango' 
]

// console.log(myList[0]) // Apple

// Objects 

const person = {
  // Key | Value
  fistName: 'Hans',
  lastName: 'Müller',
  age: 20,
  hobbies: ['Laufen', 'Klettern'],
  greeting: function () {  // Method
    // console.log('Hi, I am Hans')
    return 'Hi I am ' + this.fistName
  }
}

// DRY
// Don't Repeat Yourself

// console.log(person.greeting())

// Null

// console.log(null)

// undefined

// console.log(popcorn)



/**
 * LOOPS
 */

// For Loop

for (let i = 0; i < myList.length; i++) {
  // console.log(myList[i])
}


// ARRAY.forEach

myList.forEach(function (fruit) {
  console.log(fruit)
})


// While  // So lang

let num = 0
while ( num < 10 ) {
  console.log('Num is: ' + num)
  num++  

}