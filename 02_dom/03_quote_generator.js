

const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "An unexamined life is not worth living.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "The only way to do great work is to love what you do."
];

const generateButton = document.querySelector('.generate')
const outputContainer = document.querySelector('.quote-container')

generateButton.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * 4 )  
  outputContainer.innerText = quotes[randomIndex]
})