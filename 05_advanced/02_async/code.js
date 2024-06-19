// synchrones verhalten

console.log("start");

function wait(ms) {
  let start = Date.now();
  // es wird so lange gewartet,
  // bis die aktuelle Zeit größer ist als die Startzeit + ms
  while (Date.now() < start + ms);
}

wait(3000);

console.log("end");

console.clear();

// Das grosse Problem hier ist, dass wir 3 Sekunden lang
// warten, bevor wir "end" in der Konsole sehen.
// Das heisst der User ist für 3 Sekunden blockiert.

// Um das zu verhindern, können wir asynchrone Funktionen verwenden.

/* ASYNC JAVASCRIPT */
// Asynchrone Funktionen sind Funktionen, die nicht blockieren.
// Das bedeutet dass der User nicht blockiert ist,
// während die Funktion im Hintergrund ausgeführt wird.
// Das wird anhand Callback-Funktionen, Promises und async/await erreicht.

// 1. Callback-Funktionen
// Callback-Funktionen sind Funktionen,
// die einer anderen Funktion als Argument übergeben werden.
// um es dann zu einem späteren Zeitpunkt aufzurufen.
// Callbacks können synchron oder asynchron
// Ein Beispiel für eine asynchrone Callback-Funktion ist setTimeout.

// console.log("start");

// setTimeout(() => {
//   console.log("timout");
// }, 2000);

// console.log("end");

/*
Erklärung:
1. console.log("start") wird als erstes ausgeführt.
2. setTimout wird aufgerufen, die Callback-Funktion wird in die Warteschlange gestellt.
3. console.log("end") wird ausgeführt.
4. 2 Sekunden später wird die Callback-Funktion ausgeführt.
*/

console.clear();

// 2. Promises
// Promises sind eingebaute Objekte in JavaScript,
// die asynchrone Operationen repräsentieren.
// Ein Promise hat jeweils drei Zustände:
// pending: Der inizialie Zustand, weder erfüllt noch abgelehnt.
// fulfilled: Die Operation wurde erfolgreich abgeschlossen.
// rejected: Die Operation ist fehlgeschlagen.
// Promised haben auch noch drei methoden:
// then: wird ausgeführt, wenn das promise erfolgreich erfüllt wurde
// catch: wird ausgeführt, wenn das promise abgelehnt wurde (error state)
// finally: wird immer ausgeführt, egal welcher zustand

console.log("start");

let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("timeout");
  }, 2000);
});

promise
  .then((message) => {
    // hier muss ich auf das objekt zugreifen
    // welches vom backend als fullfilled zurückgegeben wurde
    console.log(message);
  })
  .catch((error) => {
    // da kommt es nie rein aktuell, da die funktion
    // immer erfolgreich ist
    // der catch wird ausgeführt, wenn im promise ein error existiert
    // sobald ein error vorhanden, dann bricht es das ganze ab
    // und geht unverzüglich in den catch block
    console.error(error);
  })
  .finally(() => {
    // dies wird immer ausgeführt, egal ob der request
    // erfolgreich war oder nicht
    console.log("finally");
  });

console.log("end");
