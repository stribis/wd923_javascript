// Inhalt, der getippt und gelöscht wird
let content = [
  "Cloudwalkers", // Erster Textinhalt
  "Daydreamers", // Zweiter Textinhalt
  "Mavericks", // Dritter Textinhalt
  "Unconventional", // Vierter Textinhalt
  "Ingenious", // Fünfter Textinhalt
  "Contrarians", // Sechster Textinhalt
];

// Zähler für das aktuelle Wort im Array
let count = 0;

// Zähler für den aktuellen Buchstaben im Wort
let count_index = 0;

// Variable zur Speicherung des Intervalls
let interval_val;

// Referenz auf das HTML-Element, in dem der Text angezeigt wird
let element = document.querySelector("#typewriter");

// Funktion zum Tippen des Textes
function type() {
  // Extrahiert den Teil des aktuellen Inhalts, der getippt werden soll
  let text = content[count].substring(0, count_index + 1);
  // Setzt den Text im HTML-Element
  element.innerHTML = text;
  // Erhöht den Zähler für den Buchstabenindex
  count_index++;
  // Wenn der gesamte Text getippt ist
  if (text === content[count]) {
    // Stoppt das aktuelle Tippen-Intervall
    clearInterval(interval_val);
    // Wartet 1000 Millisekunden und startet dann das Löschen
    setTimeout(function () {
      interval_val = setInterval(toDelete, 100);
    }, 100);
  }
}

// Funktion zum Löschen des Textes
function toDelete() {
  // Extrahiert den Teil des aktuellen Inhalts, der gelöscht werden soll
  let text = content[count].substring(0, count_index - 1);
  // Setzt den Text im HTML-Element
  element.innerHTML = text;
  // Verringert den Zähler für den Buchstabenindex
  count_index--;
  // Wenn der gesamte Text gelöscht ist
  if (text === "") {
    // Stoppt das aktuelle Lösch-Intervall
    clearInterval(interval_val);
    // Wenn das Ende des Arrays erreicht ist, startet von vorne
    if (count == content.length - 1) count = 0;
    // Ansonsten zum nächsten Inhalt wechseln
    else count++;
    // Setzt den Buchstabenindex zurück
    count_index = 0;
    // Wartet 200 Millisekunden und startet dann das Tippen
    setTimeout(function () {
      interval_val = setInterval(type, 250);
    }, 200);
  }
}

// Startet das Tippen des ersten Inhalts
interval_val = setInterval(type, 250);
