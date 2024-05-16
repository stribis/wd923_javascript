
/*
Function Declaration
*/

// Function that square a number

function square (num) {
  return num * num
}

// console.log(square(5))
// HOISTING
function lordify (person, city = 'A City') {
  return person + ' of ' + city;
}

// console.log( lordify ('Karin', 'Frauenfeld') )
// console.log( lordify ('Martin', 'Foo') )

/* 
  Function Expression
*/


const double = function (num) {
  return num * 2
}


console.log(double(3))
console.log(double)



/* 
  Arrow Function
*/

const triple = num => num * 3;


function celToFahr (cel) {
  return (cel * 9/5) + 32;
}

function fahrToCel (fahr) {
  return (fahr - 32) * 5/9

}

function convertTemp (temp, convertion) {
  if ( convertion === 'ftoc') {
    return (temp - 32) * 5/9;
  } else if( convertion === 'ctof') {
    return (temp * 9/5) + 32;
  } else {
    return 'incorrect input'
  }
}

console.log(celToFahr(20));
console.log(fahrToCel(90));

console.log(convertTemp(20, 'ctof'))
console.log(convertTemp(20, 'ftoc'))
console.log(convertTemp(20, 'nasdjkan'))
