// Selektieren der zwei buttons
const createButton = document.querySelector("#create-button");
const styleButton = document.querySelector("#style-button");
const body = document.querySelector("body");

/*
eventListeners können bis zu (3) Argumente haben:
    1. Der Eventname (z.B. "click")
    2. Eine Funktion, die ausgeführt wird, wenn das Event ausgelöst wird
    2.5 Dies ist ein Callback, der ausgeführt wird, wenn das Event ausgelöst wird
    3. (Optional) Ein Event-Objekt, das die Konfiguration des EventListeners enthält

    Eine Callback-Funktion ist eine Funktion, die als Argument an eine andere Funktion übergeben wird.
    Es ist eine Funktion, die von einer anderen Funktion aufgerufen wird, bzw. abhängig ist

    Z.B.:
    Button wird gelickt -> Event wird ausgelöst -> Callback-Funktion wird ausgeführt

    Syntax:
    element.addEventListener('eventName', callbackFunction(params){
        code...
    })
*/

// Hier ist ein Create-Button, der eine Callback-Funktion auslöst, die ein neues Element erstellt
createButton.addEventListener("click", createElement);

/*
    Übungszeit:
    1.) Erstelle eine neue Callback-Funktion namens createElement, die als Referenz auf die Button createButton übergeben wird
    2.) In der Funktion selbst sollten Sie 3 verschiedene Prompts (google => prompt javascript)  auslösen und diese in einer eigenen Variablen speichern:
    - Wie lautet Ihr Name?
    - Was war dein Traumberuf, als du ein Kind warst?
    - Wer ist Ihr Lieblingssuperheld?
    2.5) Überprüfung ob die drei Variablen nicht leer sind, wenn etwas leer ist, dann ein alert (google => alert)
    3.) Erstellen Sie einen Template-String mit folgendem Inhalt:
    4.) Erstellen Sie in der Vorlage ein div, in dem Sie Ihren Namen als H1-Tag übergeben
    5.) Erstelle ein weiteres Element als Sibling mit der Beschreibung Traumjob H2
        und nach dem Traumjob ein p-Tag mit deinem Lieblingsberuf und deinem Lieblingshelden
    6.) Am Ende der Funktion fügen Sie die Vorlage an den html-Body an
    6.) BONUS: Style das Ganze mit CSS

    Erwartete Ausgabe:
    Hallo mein Name ist NAME
    TRAUMJOB:
    Mein Traumberuf als Kind war PROFESSION und mein Lieblingssuperheld war und wird immer SUPERHERO sein
*/

// div check, ob ein div bereits existiert
// Damit es aber bei jedem klick auf den Buttons geprüft werden kann, müssen wir es in eine eigene Funktion packen
function checkDiv() {
  const existingDiv = document.querySelector("div");
  // wenn es ein div gibt, dann gebe es zurück
  return existingDiv;
}

function createElement() {
  // 3 verschiedene Prompts
  const name = prompt("Wie lautet dein Name?");
  const profession = prompt("Was war dein Traumberuf, als du ein Kind warst?");
  const superhero = prompt("Wer ist dein Lieblingssuperheld?");

  if (name === "" || profession == "" || superhero === "") {
    // alert, wenn eines der Felder leer ist
    alert("Bitte fülle alle Felder aus");
  } else {
    // check ob div existiert
    const existingDiv = checkDiv();
    // löschen des existing divs
    if (existingDiv !== null) {
      existingDiv.remove();
    }

    // Template-String
    const template = `
    <h1>Hallo mein Name ist ${name}</h1>
        <h2>TRAUMJOB:</h2>
        <p>Mein Traumberuf als Kind war ${profession} und mein Lieblingssuperheld war und wird immer ${superhero} sein</p>
    `;

    // Anhängen an den Body
    const element = document.createElement("div");
    element.innerHTML = template;
    body.appendChild(element);
  }
}

// BONUS: Style das Ganze mit CSS
styleButton.addEventListener("click", styleElement);

function styleElement() {
  // check ob div existiert
  const existingDiv = checkDiv();
  // wenn es ein div gibt, dann füge die Klasse hinzu
  existingDiv.classList.add("background-style");
}
