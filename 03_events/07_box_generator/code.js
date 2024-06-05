// Definiere die globalen Variablen
const circle = document.querySelector("#circle");
let count = 0;

console.log(count);

// Add eventListener dem Circle
circle.addEventListener("click", function () {
  // Zähle die Anzahl der Boxen hoch
  count++;
  // Funktion um Box zu erstellen
  createBox();
  // Funktion um Anzahl der Boxen anzuzeigen
  displayCount();
  // changeBgColor();
  changeBgColor();
});

// Funktion um random Farbe zu generieren
function generateRandomColor() {
  // Generiere eine random Zahl zwischen 0 und 255
  return Math.floor(Math.random() * 256);
}

// Funktion um Box zu erstellen
function createBox() {
  // Generiere zwei random kooridnaten
  const randomX = Math.floor(Math.random() * window.innerWidth - 50);
  const randomY = Math.floor(Math.random() * window.innerHeight - 50);

  // drei verschiedenen Values für die RGB Farbe
  const r = generateRandomColor();
  const g = generateRandomColor();
  const b = generateRandomColor();

  // create a box
  const box = document.createElement("div");
  // Klsasse hinzufügen
  box.classList.add("box");
  // Füge die Box in das Dokument ein
  document.querySelector("main").appendChild(box);
  // Setzen der Koordination und Farbe der box
  box.setAttribute(
    "style",
    `left: ${randomX}px; top: ${randomY}px; background-color: rgb(${r}, ${g}, ${b})`
  );
}

// Funktion um Anzahl der Boxen anzuzeigen
function displayCount() {
  // überprüfen ob ein Element mit der Klasse "counter" existiert
  if (!document.querySelector(".counter")) {
    const counter = document.createElement("h3");
    counter.classList.add("counter");
    // Setze den Text des Counters auf die Anzahl der Boxen und füge ihn in das Dokument ein (nach dem h1 Element)
    document.querySelector("main h1").after(counter);
  }

  // wenn der counter schon existiert
  document.querySelector(".counter").innerHTML = `Anzahl der Boxen: ${count}`;
}

// Funktion um die Hintergrundfarbe zu ändern
function changeBgColor() {
  // Generiere drei random Werte für die RGB Farbe
  const r = generateRandomColor();
  const g = generateRandomColor();
  const b = generateRandomColor();

  // Setze die Hintergrundfarbe
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
