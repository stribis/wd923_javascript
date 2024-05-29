// Schreibt einige Beispiele für folgende Datentypen:

// numbers
let height = 5;
let width = 6.5;

// strings
let color = "yellow";
let firstName = "John";
let lastName = "Doe";

// boolean
let isTrue = true;
let isFalse = false;

// conditional
if (10 < 5) {
  console.log("code to run if condition is true");
} else if (10 < 3) {
  console.log("code to run if condition 2 is true");
} else {
  console.log("code to run if no condition is true");
}
// ein if überprüft nur, ob eine condition wahr ist
if (width > height) {
  console.log("width is greater than height");
}

// object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true,
  address: {
    street: "Main Street",
    number: 123,
    city: "Berlin",
  },
  cars: ["BMW", "Audi", "Mercedes"],
};

console.log(person.firstName);
console.log(person.address.city);

// array
const cars = ["BMW", "Audi", "Mercedes"];

const blogs = [
  {
    title: "My first blog",
    content: "Lorem ipsum dolor sit amet",
    date: "2021-09-01",
  },
  {
    title: "My second blog",
    content: "Lorem ipsum dolor sit amet",
    date: "2021-09-02",
  },
  {
    title: "My third blog",
    content: "Lorem ipsum dolor sit amet",
    date: "2021-09-03",
  },
];

// date
const today = new Date();

console.log(today);

console.clear();

const trickyQuestion = 24 > "26";
console.log(trickyQuestion);
