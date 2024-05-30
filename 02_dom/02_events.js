const heading = document.querySelector(".main-heading");

// heading.addEventListener('click', handleClick)

// function handleClick () {
//   console.log('user has clicked on h1 element')
// }

// heading.addEventListener('click', () => {
//   console.log(this)
//   console.log('The h1 was clicked')
// })

heading.addEventListener("click", function (event) {
  console.log(this);
  console.log(event);
  console.log("The h1 was clicked");
});

document.querySelector("#profile-trigger").addEventListener("click", function () {
  document.querySelector("#profile-nav").classList.toggle("nav-hidden");
});
