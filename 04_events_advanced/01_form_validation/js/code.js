// eventListener dem Submit-Button hinzufügen
document.querySelector("button").addEventListener("click", validateForm);

// Funktion zur Validierung des Formulars
function validateForm(event) {
  // Standardverhalten des Submit-Buttons unterbinden
  // weil sonst die Seite neu geladen wird
  // wenn ein Formular abgeschickt wird
  event.preventDefault();

  // Definieren eines leeren Daten-Objekts für die Formulardaten
  let data = {};
  // Definieren eines leeren Daten-Objekts für die Fehlermeldungen
  let validationErrors = {};

  // Erstellen der properties im data-Objekt
  data.firstName = document.querySelector("#first-name").value;
  data.lastName = document.querySelector("#last-name").value;
  data.email = document.querySelector("#email").value;
  data.message = document.querySelector("#message").value;

  if (document.querySelector("form span")) {
    document.querySelectorAll("form span").forEach((element) => {
      element.remove();
    });
  }

  // 1. Validierung des firstName
  // Überprüft, ob der firstName leer ist
  // Falls leer, dann sollte eine console.error-Meldung ausgegeben werden
  // und es sollte auch noch eine Fehlermeldung im validationErrors-Objekt gespeichert werden
  // wenn es kein Error hat, dann sollte es console.log in der data-Objekt gespeichert werden
  // if(data.firstName === ""){
  //     console.error("First name is empty");
  //     validationErrors.firstName = "First name is empty";
  // }

  // 2. Validierung des lastName (wie bei firstName)
  // 2.5 Übeprüft die Länge des lastName sowie firstName, dass es mindestens 3 Zeichen lang ist

  // firstName validieren
  if (!data.firstName) {
    // console.error("First name is empty");
    validationErrors.firstName = "No first name provided";
  } else if (data.firstName.length <= 3) {
    // console.error("First name is too short");
    validationErrors.firstName = "First name must be at least 3 characters long";
  }

  // lastName validieren
  if (!data.lastName) {
    // console.error("Last name is empty");
    validationErrors.lastName = "No last name provided";
  } else if (data.lastName.length <= 3) {
    // console.error("Last name is too short");
    validationErrors.lastName = "Last name must be at least 3 characters long";
  }

  // email validieren
  if (!data.email) {
    // console.error("Email is empty");
    validationErrors.email = "No email provided";
  } else {
    // E-Mail-Validierung
    // Um die E-Mail Validierung zu tätigen, greiffe wir
    // auf ein Regular Expression (RegEx) zurück
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // wir können jetzt mit dem Regex prüfen, ob die E-Mail adresse valide ist
    // Überprüfen ob eine E-Mail Adresse nicht valide ist
    if (!emailRegex.test(data.email)) {
      //   console.error("Email is invalid");
      validationErrors.email = "Email is invalid, please check again";
    }
  }

  // 3. Implementiert hier eine Validierung der Text-Area
  // Die Message ist optional
  // Aber wenn es nicht leer ist, dann sollte es mindestens 30 Zeichen lang sein
  if (data.message !== "" && data.message.length < 31) {
    // console.error("Not enough characters in the message");
    validationErrors.message = "The message must be at least 30 characters long";
  }

  // Wenn keine Fehler vorhanden sind, dann senden wir üblicherweise
  // Die Daten an ein Backend
  if (Object.keys(validationErrors).length === 0) {
    // Hier würden wir die Daten an ein Backend senden
    console.log(data);
  } else {
    // Wenn Fehler vorhanden sind, dann rufen wir eine Funktion auf
    // damit die Fehlermeldungen auf der Webseite angezeigt werden
    displayErrors(validationErrors);
  }
}

// Funktion zur Anzeige der Fehlermeldungen
function displayErrors(errors) {
  // Fehlermeldung des firstName auf der Webseite anzeigen
  if (errors.firstName) {
    // Erstellen eines neuen span-Elements für die Fehlermeldung
    const errContainer = document.createElement("span");
    // Hinzufügen des Textes zur Fehlermeldung
    errContainer.innerHTML = errors.firstName;
    // Wir fügen die Fehlermeldung nach dem Input-Feld ein
    document.querySelector("#first-name").after(errContainer);
  }

  if (errors.lastName) {
    // Erstellen eines neuen span-Elements für die Fehlermeldung
    const errContainer = document.createElement("span");
    // Hinzufügen des Textes zur Fehlermeldung
    errContainer.innerHTML = errors.lastName;
    // Wir fügen die Fehlermeldung nach dem Input-Feld ein
    document.querySelector("#last-name").after(errContainer);
  }

  if (errors.email) {
    // Erstellen eines neuen span-Elements für die Fehlermeldung
    const errContainer = document.createElement("span");
    // Hinzufügen des Textes zur Fehlermeldung
    errContainer.innerHTML = errors.email;
    // Wir fügen die Fehlermeldung nach dem Input-Feld ein
    document.querySelector("#email").after(errContainer);
  }

  if (errors.message) {
    // Erstellen eines neuen span-Elements für die Fehlermeldung
    const errContainer = document.createElement("span");
    // Hinzufügen des Textes zur Fehlermeldung
    errContainer.innerHTML = errors.message;
    // Wir fügen die Fehlermeldung nach dem Input-Feld ein
    document.querySelector("#message").after(errContainer);
  }
}
