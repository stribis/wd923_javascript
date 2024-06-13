// selektieren des sliders
const slider = document.querySelector(".slider");

// function um alle slides zu selektieren
// wir müssen das machen, damit immer auf das aktuellste array zugegriffen wird
// wenn wir das nicht machen, dann wird es nicht funktionieren
// da die nodelist sich nicht automatisch updatet
function getAllSlides() {
  return document.querySelectorAll(".slide");
}

// event listeners für die zwei pfeilen
document.querySelector(".left").addEventListener("click", moveLeft);
document.querySelector(".right").addEventListener("click", moveRight);

// wir initieren den current slide auf 1
let currentSlide = 1;

// moveRight function
function moveRight() {
  const allSlides = getAllSlides();
  // appen fügt das ausgewählte element an das ende des arrays zu
  slider.append(allSlides[0]);
  changeCurrentSlide("right");
  updateDescription();
}

// moveLeft function
function moveLeft() {
  const allSlides = getAllSlides();
  // prepend fügt das ausgewählte element an den anfang des array zu
  // wir greifen auf das allSlides.length - 1 zu
  // so können wir sicherstellen, dass wir dynamisch unterwegs sind
  // und nicht statisch arbeiten
  slider.prepend(allSlides[allSlides.length - 1]);
  changeCurrentSlide("left");
  updateDescription();
}

// changeCurrentSlide function
function changeCurrentSlide(direction) {
  const allSlides = getAllSlides();
  // if conditional um zu überprüfen, welche direction mitgegeben wurde
  if (direction === "right") {
    // ternary operator ist das gleiche wie ein if else statement
    // der syntax ist anders
    // condition ? true : false
    currentSlide === allSlides.length ? (currentSlide = 1) : currentSlide++;
    /*
        if(currentSlide === 5) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }
    */
  } else {
    currentSlide === 1 ? (currentSlide = allSlides.length) : currentSlide--;
  }

  // nun selektieren wir das h2 element und ändern den text
  document.querySelector("h2").innerText = `Current Slide: ${currentSlide}`;
  //   document.querySelector("h2").textContent = `Current Slide: ${currentSlide}`;
}

// updateDescription function
function updateDescription() {
  const allSlides = getAllSlides();
  // neue variable um das aktuelle slide zu selektieren
  // wir selektieren das erste element im array
  // danach selektieren wir das img elemnt und holen uns den alt text
  const description = allSlides[0].querySelector("img").alt;
  // nun aktualisieren wir den text im p element
  document.querySelector(".controls-container p").innerText = description;
}

// wir rufen die updateDescription function auf
// damit beim ersten pageload der richtige text angezeigt wird
updateDescription();
