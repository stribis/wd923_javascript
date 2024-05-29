const cars = [
  "BMW",
  "Audi",
  "Mercedes",
  "Toyota",
  "Ford",
  "Ferrari",
  "Lamborghini",
];

//*** FOR EACH SYNTAX ***//
/*
array.forEach((singleElement) => {
    code block
})
*/

cars.forEach((car) => {
  console.log(car);
});

// Aufgabe:
// 1. Wir haben ein array voller objekte (blogs)
// 3. Implementiert ein forEach in diesem array, damit es dann für jeden Blog
// in etwa so aussieht:
// Blog title: My first blog, Content: Lorem ipsum dolor sit amet, Date: 2021-09-01
// 3.5 WICHTIG: Pro blog muss nur ein console.log ausgeführt werden (nicht untereinander)
// TIP: Concatenation

// Hier das array:
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

// forEach loop, gibt kein neues array zurück
blogs.forEach((blog) => {
  console.log(
    "Blog title: " +
      blog.title +
      ", Content: " +
      blog.content +
      ", Date: " +
      blog.date
  );
});

// map function verhaltet sich wie forEach, aber gibt ein neues array zurück
blogs.map((blog) => {
  console.log(
    "Blog title: " +
      blog.title +
      ", Content: " +
      blog.content +
      ", Date: " +
      blog.date
  );
});

console.clear();

// WHILE LOOP
let number = 0;

while (number < 10) {
  console.log(number);
  number++;
}
