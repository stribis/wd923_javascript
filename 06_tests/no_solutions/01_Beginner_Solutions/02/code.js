// Task: Create an array of numbers. Write a loop to find and display the largest number in the array. 
// Additionally, write another loop to calculate the sum of all the numbers in the array.


const numbers = [20, 14, 63, 28, 34]

let largest = 0

numbers.forEach(num => {
  if( num > largest) {
    largest = num
  }
})

console.log(largest)


let sum = 0
numbers.forEach(num => {
  sum += num
})

console.log(sum)