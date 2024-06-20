// get subtitle container to inject a string inside of it
const subtitle = document.querySelector(".card-subtitle");

// call createSubtitle function with the value provided
createSubtitle("Business in the front, party in the back. Ready for all occasions");

// createSubtitle function
function createSubtitle(text) {
  // we split the string where there are spaces and map all the different keys in the array
  // and push it through the addWord function
  text.split(" ").map(addWord);
}

// addWord function to append the subtitle to the createWord function
function addWord(text, index) {
  // append the text and the index as a child to the subtitle container
  subtitle.appendChild(createWord(text, index));
}

// createWord function, which creates and animates the sentence
function createWord(text, index) {
  // create span elemt to store the sentence in
  const word = document.createElement("span");

  // define the value of each created span element
  word.innerHTML = `${text}`;

  // add the class card-subtitle-word to each newly created span
  word.classList.add("card-subtitle-word");

  // implement stagger animation through transitionDelay
  word.style.transitionDelay = `${index * 100}ms`;

  // we need to define a return, because else the appendChild won' work
  // because it has no way of knowing, what it should display without an answer
  // the return in this example, is like an answer to the "question" of createWord.
  // when we define the return (answer), the appendChild knows what it should append
  // to the subtitle
  return word;
}
