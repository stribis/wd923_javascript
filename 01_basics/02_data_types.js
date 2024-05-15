
// String
let firstName = 'Martin';
let lastName = 'Hutchings';

// Number
let age = 18;

// Boolean
let acceptedAGB = true;


// Addition
console.log(32 + age);

// Concatenation
console.log('Martin' + ' ' + 'Hutchings'); // MartinHutchings

// Javascript is special

console.log('32' + 32);
console.log('32' + '32');

// Comparison 
console.log( 3 > 2); // True
console.log( 2 < 3); // True
// console.log(  3 = 3 );
console.log( 3 == '3'); 
console.log( 3 === '3'); //false

console.log( age >= 18 ) // true
console.log( 8 <= 3 ) // false

console.log(age >= 18 && firstName === 'Michael') // False
console.log(age >= 18 || firstName === 'Michael') // True

console.log(firstName !== 'Martin') // false

console.log(!acceptedAGB) // false

const fruits = [ 
  'banana', 
  'apple', 
  'pear', 
  'mango'
];

console.log('I like eating ' + fruits[0] + 's')
console.log('I like eating ' + fruits[1] + 's')
console.log('I like eating ' + fruits[2] + 's')
console.log('I like eating ' + fruits[3] + 's')


const person = {
  name: 'Harry Potter',
  age: 19,
  hairColor: 'Black',
  favoriteFruits: [
    'banana', 
    'apple', 
    'pear'
  ]
}

// Dot notation
console.log(person.name + 
  ' is a wizard! They are ' + 
  person.age + 
  ' years old. ' + 
  person.name + ' likes eating ' + person.favoriteFruits[0] + 's'
)