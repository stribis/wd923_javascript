// 1. Den button selektieren
const button = document.querySelector("#submit");

// 2. Wir fügen einen Event Listener hinzu
/** Syntax
 element.addEventListener(event, function){
    code block
 }
 **/
button.addEventListener("click", function (e) {
  /*
  Wir können auch den Event-Objekt als Parameter übergeben
  So haben wir Zugriff auf die Eigenschaften des Events.
  Bei einem Submit-Event ist das default Verhalten das Absenden des Formulars.
  Das absenden des Formulars refresht die Seite.
  Dies möchten wir verhindern, da wir noch evtl. Formulardaten verarbeiten/validieren möchten.
  Dies kann mit der Methode preventDefault() gemacht werden.
  */
  e.preventDefault();
  console.log(e);

  /*
  Aufgabe: Bei dem Submit möchten wirl jeweils die Werte der Inputfelder ausgeben.
  Versucht anhand den querySelectoren sowie dessen values die Werte zu extrahieren
  und es dann in der console.log auszugeben
  */

  // als erstes müssen wir die Inputfelder selektieren
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");

  // console.log der Werte
  // Damit wir auf den Wert des Inputfeldes zugreifen können, verwenden wir die Eigenschaft value
  // Weil der Wert nur hinter der Value-Eigenschaft gespeichert ist.
  console.log("First name: ", firstName.value);
  console.log("Last name: ", lastName.value);
});

/*
    Ein anderer Event typ ist der Input-Event.
    Dieser wird bei jedem Tastendruck ausgelöst.
    Dies kann z.B. nützlich sein, wenn wir eine Live-Suche implementieren möchten.
*/
const emailInputField = document.querySelector("#email");

emailInputField.addEventListener("input", function (e) {
  console.log("E-Mail changes with every input: ", e.target.value);
});
